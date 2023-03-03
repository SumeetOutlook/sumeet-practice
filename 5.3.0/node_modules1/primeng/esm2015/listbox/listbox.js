import { NgModule, Component, ElementRef, Input, Output, EventEmitter, ContentChildren, ContentChild, forwardRef, ChangeDetectorRef, ViewChild, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule, PrimeTemplate, Footer, Header } from 'primeng/api';
import { DomHandler } from 'primeng/dom';
import { ObjectUtils } from 'primeng/utils';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FilterUtils } from 'primeng/utils';
import { RippleModule } from 'primeng/ripple';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/ripple';

const _c0 = ["headerchkbox"];
function Listbox_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Listbox_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵtemplate(2, Listbox_div_1_ng_container_2_Template, 1, 0, "ng-container", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.headerTemplate);
} }
const _c1 = function (a0) { return { "p-checkbox-disabled": a0 }; };
const _c2 = function (a0, a1) { return { "p-highlight": a0, "p-focus": a1 }; };
const _c3 = function (a0) { return { "pi pi-check": a0 }; };
function Listbox_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵelementStart(1, "div", 10);
    ɵngcc0.ɵɵelementStart(2, "input", 11);
    ɵngcc0.ɵɵlistener("focus", function Listbox_div_2_div_1_Template_input_focus_2_listener() { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r8 = ɵngcc0.ɵɵnextContext(2); return ctx_r8.onHeaderCheckboxFocus(); })("blur", function Listbox_div_2_div_1_Template_input_blur_2_listener() { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r10 = ɵngcc0.ɵɵnextContext(2); return ctx_r10.onHeaderCheckboxBlur(); })("keydown.space", function Listbox_div_2_div_1_Template_input_keydown_space_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r11 = ɵngcc0.ɵɵnextContext(2); return ctx_r11.toggleAll($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "div", 12, 13);
    ɵngcc0.ɵɵlistener("click", function Listbox_div_2_div_1_Template_div_click_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r12 = ɵngcc0.ɵɵnextContext(2); return ctx_r12.toggleAll($event); });
    ɵngcc0.ɵɵelement(5, "span", 14);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(5, _c1, ctx_r5.disabled));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("checked", ctx_r5.allChecked);
    ɵngcc0.ɵɵattribute("disabled", ctx_r5.disabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(7, _c2, ctx_r5.allChecked, ctx_r5.headerCheckboxFocus));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(10, _c3, ctx_r5.allChecked));
} }
function Listbox_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 15);
    ɵngcc0.ɵɵelementStart(1, "input", 16);
    ɵngcc0.ɵɵlistener("input", function Listbox_div_2_div_2_Template_input_input_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r14); const ctx_r13 = ɵngcc0.ɵɵnextContext(2); return ctx_r13.onFilter($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(2, "span", 17);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("value", ctx_r6.filterValue || "")("disabled", ctx_r6.disabled);
    ɵngcc0.ɵɵattribute("placeholder", ctx_r6.filterPlaceHolder)("aria-label", ctx_r6.ariaFilterLabel);
} }
function Listbox_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵtemplate(1, Listbox_div_2_div_1_Template, 6, 12, "div", 7);
    ɵngcc0.ɵɵtemplate(2, Listbox_div_2_div_2_Template, 3, 4, "div", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.checkbox && ctx_r1.multiple && ctx_r1.showToggleAll);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.filter);
} }
const _c4 = function (a0) { return { "p-highlight": a0 }; };
function Listbox_li_5_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵelementStart(1, "div", 21);
    ɵngcc0.ɵɵelement(2, "span", 14);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r15 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r17 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(3, _c1, ctx_r17.disabled || option_r15.disabled));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(5, _c4, ctx_r17.isSelected(option_r15)));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(7, _c3, ctx_r17.isSelected(option_r15)));
} }
function Listbox_li_5_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r15 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(option_r15.label);
} }
function Listbox_li_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c5 = function (a1, a2) { return { "p-listbox-item": true, "p-highlight": a1, "p-disabled": a2 }; };
const _c6 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function Listbox_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r23 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 18);
    ɵngcc0.ɵɵlistener("click", function Listbox_li_5_Template_li_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); const option_r15 = ctx.$implicit; const ctx_r22 = ɵngcc0.ɵɵnextContext(); return ctx_r22.onOptionClick($event, option_r15); })("dblclick", function Listbox_li_5_Template_li_dblclick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); const option_r15 = ctx.$implicit; const ctx_r24 = ɵngcc0.ɵɵnextContext(); return ctx_r24.onOptionDoubleClick($event, option_r15); })("touchend", function Listbox_li_5_Template_li_touchend_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); const option_r15 = ctx.$implicit; const ctx_r25 = ɵngcc0.ɵɵnextContext(); return ctx_r25.onOptionTouchEnd($event, option_r15); })("keydown", function Listbox_li_5_Template_li_keydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); const option_r15 = ctx.$implicit; const ctx_r26 = ɵngcc0.ɵɵnextContext(); return ctx_r26.onOptionKeyDown($event, option_r15); });
    ɵngcc0.ɵɵtemplate(1, Listbox_li_5_div_1_Template, 3, 9, "div", 7);
    ɵngcc0.ɵɵtemplate(2, Listbox_li_5_span_2_Template, 2, 1, "span", 19);
    ɵngcc0.ɵɵtemplate(3, Listbox_li_5_ng_container_3_Template, 1, 0, "ng-container", 20);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("display", ctx_r2.isItemVisible(option_r15) ? "flex" : "none");
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(10, _c5, ctx_r2.isSelected(option_r15), option_r15.disabled));
    ɵngcc0.ɵɵattribute("tabindex", ctx_r2.disabled || option_r15.disabled ? null : "0")("aria-label", option_r15.label)("aria-selected", ctx_r2.isSelected(option_r15));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.checkbox && ctx_r2.multiple);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r2.itemTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.itemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(13, _c6, option_r15, i_r16));
} }
function Listbox_div_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Listbox_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 22);
    ɵngcc0.ɵɵprojection(1, 1);
    ɵngcc0.ɵɵtemplate(2, Listbox_div_6_ng_container_2_Template, 1, 0, "ng-container", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r3.footerTemplate);
} }
const _c7 = [[["p-header"]], [["p-footer"]]];
const _c8 = function (a1) { return { "p-listbox p-component": true, "p-disabled": a1 }; };
const _c9 = ["p-header", "p-footer"];
export const LISTBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Listbox),
    multi: true
};
export class Listbox {
    constructor(el, cd) {
        this.el = el;
        this.cd = cd;
        this.checkbox = false;
        this.filter = false;
        this.filterMode = 'contains';
        this.metaKeySelection = true;
        this.showToggleAll = true;
        this.onChange = new EventEmitter();
        this.onClick = new EventEmitter();
        this.onDblClick = new EventEmitter();
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
        this.disabledSelectedOptions = [];
    }
    get options() {
        return this._options;
    }
    set options(val) {
        let opts = this.optionLabel ? ObjectUtils.generateSelectItems(val, this.optionLabel) : val;
        this._options = opts;
    }
    get filterValue() {
        return this._filterValue;
    }
    set filterValue(val) {
        this._filterValue = val;
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'item':
                    this.itemTemplate = item.template;
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
    writeValue(value) {
        this.value = value;
        this.setDisabledSelectedOptions();
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
    onOptionClick(event, option) {
        if (this.disabled || option.disabled || this.readonly) {
            return;
        }
        if (this.multiple) {
            if (this.checkbox)
                this.onOptionClickCheckbox(event, option);
            else
                this.onOptionClickMultiple(event, option);
        }
        else {
            this.onOptionClickSingle(event, option);
        }
        this.onClick.emit({
            originalEvent: event,
            option: option,
            value: this.value
        });
        this.optionTouched = false;
    }
    onOptionTouchEnd(event, option) {
        if (this.disabled || option.disabled || this.readonly) {
            return;
        }
        this.optionTouched = true;
    }
    onOptionDoubleClick(event, option) {
        if (this.disabled || option.disabled || this.readonly) {
            return;
        }
        this.onDblClick.emit({
            originalEvent: event,
            option: option,
            value: this.value
        });
    }
    onOptionClickSingle(event, option) {
        let selected = this.isSelected(option);
        let valueChanged = false;
        let metaSelection = this.optionTouched ? false : this.metaKeySelection;
        if (metaSelection) {
            let metaKey = (event.metaKey || event.ctrlKey);
            if (selected) {
                if (metaKey) {
                    this.value = null;
                    valueChanged = true;
                }
            }
            else {
                this.value = option.value;
                valueChanged = true;
            }
        }
        else {
            this.value = selected ? null : option.value;
            valueChanged = true;
        }
        if (valueChanged) {
            this.onModelChange(this.value);
            this.onChange.emit({
                originalEvent: event,
                value: this.value
            });
        }
    }
    onOptionClickMultiple(event, option) {
        let selected = this.isSelected(option);
        let valueChanged = false;
        let metaSelection = this.optionTouched ? false : this.metaKeySelection;
        if (metaSelection) {
            let metaKey = (event.metaKey || event.ctrlKey);
            if (selected) {
                if (metaKey) {
                    this.removeOption(option);
                }
                else {
                    this.value = [option.value];
                }
                valueChanged = true;
            }
            else {
                this.value = (metaKey) ? this.value || [] : [];
                this.value = [...this.value, option.value];
                valueChanged = true;
            }
        }
        else {
            if (selected) {
                this.removeOption(option);
            }
            else {
                this.value = [...this.value || [], option.value];
            }
            valueChanged = true;
        }
        if (valueChanged) {
            this.onModelChange(this.value);
            this.onChange.emit({
                originalEvent: event,
                value: this.value
            });
        }
    }
    onOptionClickCheckbox(event, option) {
        if (this.disabled || this.readonly) {
            return;
        }
        let selected = this.isSelected(option);
        if (selected) {
            this.removeOption(option);
        }
        else {
            this.value = this.value ? this.value : [];
            this.value = [...this.value, option.value];
        }
        this.onModelChange(this.value);
        this.onChange.emit({
            originalEvent: event,
            value: this.value
        });
    }
    removeOption(option) {
        this.value = this.value.filter(val => !ObjectUtils.equals(val, option.value, this.dataKey));
    }
    isSelected(option) {
        let selected = false;
        if (this.multiple) {
            if (this.value) {
                for (let val of this.value) {
                    if (ObjectUtils.equals(val, option.value, this.dataKey)) {
                        selected = true;
                        break;
                    }
                }
            }
        }
        else {
            selected = ObjectUtils.equals(this.value, option.value, this.dataKey);
        }
        return selected;
    }
    get allChecked() {
        if (this.filterValue) {
            return this.allFilteredSelected();
        }
        else {
            let optionCount = this.getEnabledOptionCount();
            let disabledSelectedOptionCount = this.disabledSelectedOptions.length;
            return this.value && this.options && (this.value.length > 0 && this.value.length == optionCount + disabledSelectedOptionCount);
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
    allFilteredSelected() {
        let allSelected;
        let options = this.filterValue ? this.getFilteredOptions() : this.options;
        if (this.value && options && options.length) {
            allSelected = true;
            for (let opt of this.options) {
                if (this.isItemVisible(opt)) {
                    if (!this.isSelected(opt)) {
                        allSelected = false;
                        break;
                    }
                }
            }
        }
        return allSelected;
    }
    onFilter(event) {
        this._filterValue = event.target.value;
    }
    toggleAll(event) {
        if (this.disabled || this.readonly || !this.options || this.options.length === 0) {
            return;
        }
        if (this.allChecked) {
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
            if (this.options) {
                this.value = [];
                if (this.disabledSelectedOptions && this.disabledSelectedOptions.length > 0) {
                    this.value = [...this.disabledSelectedOptions];
                }
                for (let i = 0; i < this.options.length; i++) {
                    let opt = this.options[i];
                    if (this.isItemVisible(opt) && !opt.disabled) {
                        this.value.push(opt.value);
                    }
                }
            }
        }
        this.onModelChange(this.value);
        this.onChange.emit({ originalEvent: event, value: this.value });
        event.preventDefault();
    }
    isItemVisible(option) {
        if (this.filterValue) {
            let visible;
            if (this.filterMode) {
                visible = FilterUtils[this.filterMode](option.label, this.filterValue, this.filterLocale);
            }
            else {
                visible = true;
            }
            return visible;
        }
        else {
            return true;
        }
    }
    onOptionKeyDown(event, option) {
        if (this.readonly) {
            return;
        }
        let item = event.currentTarget;
        switch (event.which) {
            //down
            case 40:
                var nextItem = this.findNextItem(item);
                if (nextItem) {
                    nextItem.focus();
                }
                event.preventDefault();
                break;
            //up
            case 38:
                var prevItem = this.findPrevItem(item);
                if (prevItem) {
                    prevItem.focus();
                }
                event.preventDefault();
                break;
            //enter
            case 13:
                this.onOptionClick(event, option);
                event.preventDefault();
                break;
        }
    }
    findNextItem(item) {
        let nextItem = item.nextElementSibling;
        if (nextItem)
            return DomHandler.hasClass(nextItem, 'p-disabled') || DomHandler.isHidden(nextItem) ? this.findNextItem(nextItem) : nextItem;
        else
            return null;
    }
    findPrevItem(item) {
        let prevItem = item.previousElementSibling;
        if (prevItem)
            return DomHandler.hasClass(prevItem, 'p-disabled') || DomHandler.isHidden(prevItem) ? this.findPrevItem(prevItem) : prevItem;
        else
            return null;
    }
    getFilteredOptions() {
        let filteredOptions = [];
        if (this.filterValue) {
            for (let i = 0; i < this.options.length; i++) {
                let opt = this.options[i];
                if (this.isItemVisible(opt) && !opt.disabled) {
                    filteredOptions.push(opt);
                }
            }
            return filteredOptions;
        }
        else {
            return this.options;
        }
    }
    onHeaderCheckboxFocus() {
        this.headerCheckboxFocus = true;
    }
    onHeaderCheckboxBlur() {
        this.headerCheckboxFocus = false;
    }
    setDisabledSelectedOptions() {
        if (this.options) {
            this.disabledSelectedOptions = [];
            if (this.value) {
                for (let opt of this.options) {
                    if (opt.disabled && this.isSelected(opt)) {
                        this.disabledSelectedOptions.push(opt.value);
                    }
                }
            }
        }
    }
}
Listbox.ɵfac = function Listbox_Factory(t) { return new (t || Listbox)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
Listbox.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Listbox, selectors: [["p-listbox"]], contentQueries: function Listbox_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, Header, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, Footer, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.headerFacet = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.footerFacet = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function Listbox_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.headerCheckboxViewChild = _t.first);
    } }, inputs: { checkbox: "checkbox", filter: "filter", filterMode: "filterMode", metaKeySelection: "metaKeySelection", showToggleAll: "showToggleAll", options: "options", filterValue: "filterValue", disabled: "disabled", multiple: "multiple", style: "style", styleClass: "styleClass", listStyle: "listStyle", listStyleClass: "listStyleClass", readonly: "readonly", filterLocale: "filterLocale", dataKey: "dataKey", optionLabel: "optionLabel", ariaFilterLabel: "ariaFilterLabel", filterPlaceHolder: "filterPlaceHolder" }, outputs: { onChange: "onChange", onClick: "onClick", onDblClick: "onDblClick" }, features: [ɵngcc0.ɵɵProvidersFeature([LISTBOX_VALUE_ACCESSOR])], ngContentSelectors: _c9, decls: 7, vars: 14, consts: [[3, "ngClass", "ngStyle"], ["class", "p-listbox-header", 4, "ngIf"], ["role", "listbox", "aria-multiselectable", "multiple", 1, "p-listbox-list"], ["pRipple", "", "role", "option", 3, "display", "ngClass", "click", "dblclick", "touchend", "keydown", 4, "ngFor", "ngForOf"], ["class", "p-listbox-footer", 4, "ngIf"], [1, "p-listbox-header"], [4, "ngTemplateOutlet"], ["class", "p-checkbox p-component", 3, "ngClass", 4, "ngIf"], ["class", "p-listbox-filter-container", 4, "ngIf"], [1, "p-checkbox", "p-component", 3, "ngClass"], [1, "p-hidden-accessible"], ["type", "checkbox", "readonly", "readonly", 3, "checked", "focus", "blur", "keydown.space"], [1, "p-checkbox-box", 3, "ngClass", "click"], ["headerchkbox", ""], [1, "p-checkbox-icon", 3, "ngClass"], [1, "p-listbox-filter-container"], ["type", "text", 1, "p-listbox-filter", "p-inputtext", "p-component", 3, "value", "disabled", "input"], [1, "p-listbox-filter-icon", "pi", "pi-search"], ["pRipple", "", "role", "option", 3, "ngClass", "click", "dblclick", "touchend", "keydown"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-checkbox-box", 3, "ngClass"], [1, "p-listbox-footer"]], template: function Listbox_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c7);
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, Listbox_div_1_Template, 3, 1, "div", 1);
        ɵngcc0.ɵɵtemplate(2, Listbox_div_2_Template, 3, 2, "div", 1);
        ɵngcc0.ɵɵelementStart(3, "div", 0);
        ɵngcc0.ɵɵelementStart(4, "ul", 2);
        ɵngcc0.ɵɵtemplate(5, Listbox_li_5_Template, 4, 16, "li", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(6, Listbox_div_6_Template, 3, 1, "div", 4);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(12, _c8, ctx.disabled))("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.headerFacet || ctx.headerTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.checkbox && ctx.multiple && ctx.showToggleAll || ctx.filter);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMap(ctx.listStyleClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-listbox-list-wrapper")("ngStyle", ctx.listStyle);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.options);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.footerFacet || ctx.footerTemplate);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc1.NgTemplateOutlet, ɵngcc2.Ripple], styles: [".p-listbox-list-wrapper{overflow:auto}.p-listbox-list{list-style-type:none;margin:0;padding:0}.p-listbox-item{cursor:pointer;overflow:hidden;position:relative}.p-listbox-header,.p-listbox-item{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.p-listbox-filter-container{-ms-flex:1 1 auto;flex:1 1 auto;position:relative}.p-listbox-filter-icon{margin-top:-.5rem;position:absolute;top:50%}.p-listbox-filter{width:100%}"], encapsulation: 2, changeDetection: 0 });
Listbox.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
Listbox.propDecorators = {
    multiple: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    listStyle: [{ type: Input }],
    listStyleClass: [{ type: Input }],
    readonly: [{ type: Input }],
    disabled: [{ type: Input }],
    checkbox: [{ type: Input }],
    filter: [{ type: Input }],
    filterMode: [{ type: Input }],
    filterLocale: [{ type: Input }],
    metaKeySelection: [{ type: Input }],
    dataKey: [{ type: Input }],
    showToggleAll: [{ type: Input }],
    optionLabel: [{ type: Input }],
    ariaFilterLabel: [{ type: Input }],
    filterPlaceHolder: [{ type: Input }],
    onChange: [{ type: Output }],
    onClick: [{ type: Output }],
    onDblClick: [{ type: Output }],
    headerCheckboxViewChild: [{ type: ViewChild, args: ['headerchkbox',] }],
    headerFacet: [{ type: ContentChild, args: [Header,] }],
    footerFacet: [{ type: ContentChild, args: [Footer,] }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }],
    options: [{ type: Input }],
    filterValue: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Listbox, [{
        type: Component,
        args: [{
                selector: 'p-listbox',
                template: `
    <div [ngClass]="{'p-listbox p-component': true, 'p-disabled': disabled}" [ngStyle]="style" [class]="styleClass">
      <div class="p-listbox-header" *ngIf="headerFacet || headerTemplate">
        <ng-content select="p-header"></ng-content>
        <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
      </div>
      <div class="p-listbox-header" *ngIf="(checkbox && multiple && showToggleAll) || filter">
        <div class="p-checkbox p-component" *ngIf="checkbox && multiple && showToggleAll" [ngClass]="{'p-checkbox-disabled': disabled}">
          <div class="p-hidden-accessible">
            <input type="checkbox" readonly="readonly" [checked]="allChecked" (focus)="onHeaderCheckboxFocus()" (blur)="onHeaderCheckboxBlur()" (keydown.space)="toggleAll($event)" [attr.disabled]="disabled">
          </div>
          <div #headerchkbox class="p-checkbox-box" [ngClass]="{'p-highlight': allChecked, 'p-focus': headerCheckboxFocus}" (click)="toggleAll($event)">
            <span class="p-checkbox-icon" [ngClass]="{'pi pi-check':allChecked}"></span>
          </div>
        </div>
        <div class="p-listbox-filter-container" *ngIf="filter">
          <input type="text" [value]="filterValue||''" (input)="onFilter($event)" class="p-listbox-filter p-inputtext p-component" [disabled]="disabled" [attr.placeholder]="filterPlaceHolder" [attr.aria-label]="ariaFilterLabel">
          <span class="p-listbox-filter-icon pi pi-search"></span>
        </div>
      </div>
      <div [ngClass]="'p-listbox-list-wrapper'" [ngStyle]="listStyle" [class]="listStyleClass">
        <ul class="p-listbox-list" role="listbox" aria-multiselectable="multiple">
          <li *ngFor="let option of options; let i = index;" [style.display]="isItemVisible(option) ? 'flex' : 'none'" [attr.tabindex]="disabled || option.disabled ? null : '0'" pRipple
              [ngClass]="{'p-listbox-item':true,'p-highlight':isSelected(option), 'p-disabled': option.disabled}" role="option" [attr.aria-label]="option.label"
              [attr.aria-selected]="isSelected(option)" (click)="onOptionClick($event,option)" (dblclick)="onOptionDoubleClick($event,option)" (touchend)="onOptionTouchEnd($event,option)" (keydown)="onOptionKeyDown($event,option)">
            <div class="p-checkbox p-component" *ngIf="checkbox && multiple" [ngClass]="{'p-checkbox-disabled': disabled || option.disabled}">
              <div class="p-checkbox-box" [ngClass]="{'p-highlight':isSelected(option)}">
                <span class="p-checkbox-icon" [ngClass]="{'pi pi-check':isSelected(option)}"></span>
              </div>
            </div>
            <span *ngIf="!itemTemplate">{{option.label}}</span>
            <ng-container *ngTemplateOutlet="itemTemplate; context: {$implicit: option, index: i}"></ng-container>
          </li>
        </ul>
      </div>
      <div class="p-listbox-footer" *ngIf="footerFacet || footerTemplate">
        <ng-content select="p-footer"></ng-content>
        <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
      </div>
    </div>
  `,
                providers: [LISTBOX_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-listbox-list-wrapper{overflow:auto}.p-listbox-list{list-style-type:none;margin:0;padding:0}.p-listbox-item{cursor:pointer;overflow:hidden;position:relative}.p-listbox-header,.p-listbox-item{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.p-listbox-filter-container{-ms-flex:1 1 auto;flex:1 1 auto;position:relative}.p-listbox-filter-icon{margin-top:-.5rem;position:absolute;top:50%}.p-listbox-filter{width:100%}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { checkbox: [{
            type: Input
        }], filter: [{
            type: Input
        }], filterMode: [{
            type: Input
        }], metaKeySelection: [{
            type: Input
        }], showToggleAll: [{
            type: Input
        }], onChange: [{
            type: Output
        }], onClick: [{
            type: Output
        }], onDblClick: [{
            type: Output
        }], options: [{
            type: Input
        }], filterValue: [{
            type: Input
        }], disabled: [{
            type: Input
        }], multiple: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], listStyle: [{
            type: Input
        }], listStyleClass: [{
            type: Input
        }], readonly: [{
            type: Input
        }], filterLocale: [{
            type: Input
        }], dataKey: [{
            type: Input
        }], optionLabel: [{
            type: Input
        }], ariaFilterLabel: [{
            type: Input
        }], filterPlaceHolder: [{
            type: Input
        }], headerCheckboxViewChild: [{
            type: ViewChild,
            args: ['headerchkbox']
        }], headerFacet: [{
            type: ContentChild,
            args: [Header]
        }], footerFacet: [{
            type: ContentChild,
            args: [Footer]
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
export class ListboxModule {
}
ListboxModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ListboxModule });
ListboxModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ListboxModule_Factory(t) { return new (t || ListboxModule)(); }, imports: [[CommonModule, SharedModule, RippleModule], SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ListboxModule, { declarations: function () { return [Listbox]; }, imports: function () { return [CommonModule, SharedModule, RippleModule]; }, exports: function () { return [Listbox, SharedModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ListboxModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, SharedModule, RippleModule],
                exports: [Listbox, SharedModule],
                declarations: [Listbox]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGJveC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2xpc3Rib3gvbGlzdGJveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQW9CLGVBQWUsRUFBRSxZQUFZLEVBQXlCLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM1AsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUMsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLEdBQVE7QUFDM0MsSUFBSSxPQUFPLEVBQUUsaUJBQWlCO0FBQzlCLElBQUksV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUM7QUFDMUMsSUFBSSxLQUFLLEVBQUUsSUFBSTtBQUNmLENB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QUMsT0FBTyxDQUFDLGNBQzFCOzs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQWZ0ZXJDb250ZW50SW5pdCwgQ29udGVudENoaWxkcmVuLCBDb250ZW50Q2hpbGQsIFF1ZXJ5TGlzdCwgVGVtcGxhdGVSZWYsZm9yd2FyZFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFZpZXdDaGlsZCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU2VsZWN0SXRlbSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSwgUHJpbWVUZW1wbGF0ZSwgRm9vdGVyLCBIZWFkZXIgfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQgeyBEb21IYW5kbGVyIH0gZnJvbSAncHJpbWVuZy9kb20nO1xuaW1wb3J0IHsgT2JqZWN0VXRpbHMgfSBmcm9tICdwcmltZW5nL3V0aWxzJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZpbHRlclV0aWxzIH0gZnJvbSAncHJpbWVuZy91dGlscyc7XG5pbXBvcnQgeyBSaXBwbGVNb2R1bGUgfSBmcm9tICdwcmltZW5nL3JpcHBsZSc7ICBcblxuZXhwb3J0IGNvbnN0IExJU1RCT1hfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBMaXN0Ym94KSxcbiAgICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLWxpc3Rib3gnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBbbmdDbGFzc109XCJ7J3AtbGlzdGJveCBwLWNvbXBvbmVudCc6IHRydWUsICdwLWRpc2FibGVkJzogZGlzYWJsZWR9XCIgW25nU3R5bGVdPVwic3R5bGVcIiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiPlxuICAgICAgPGRpdiBjbGFzcz1cInAtbGlzdGJveC1oZWFkZXJcIiAqbmdJZj1cImhlYWRlckZhY2V0IHx8IGhlYWRlclRlbXBsYXRlXCI+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInAtaGVhZGVyXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaGVhZGVyVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInAtbGlzdGJveC1oZWFkZXJcIiAqbmdJZj1cIihjaGVja2JveCAmJiBtdWx0aXBsZSAmJiBzaG93VG9nZ2xlQWxsKSB8fCBmaWx0ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInAtY2hlY2tib3ggcC1jb21wb25lbnRcIiAqbmdJZj1cImNoZWNrYm94ICYmIG11bHRpcGxlICYmIHNob3dUb2dnbGVBbGxcIiBbbmdDbGFzc109XCJ7J3AtY2hlY2tib3gtZGlzYWJsZWQnOiBkaXNhYmxlZH1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1oaWRkZW4tYWNjZXNzaWJsZVwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHJlYWRvbmx5PVwicmVhZG9ubHlcIiBbY2hlY2tlZF09XCJhbGxDaGVja2VkXCIgKGZvY3VzKT1cIm9uSGVhZGVyQ2hlY2tib3hGb2N1cygpXCIgKGJsdXIpPVwib25IZWFkZXJDaGVja2JveEJsdXIoKVwiIChrZXlkb3duLnNwYWNlKT1cInRvZ2dsZUFsbCgkZXZlbnQpXCIgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2ICNoZWFkZXJjaGtib3ggY2xhc3M9XCJwLWNoZWNrYm94LWJveFwiIFtuZ0NsYXNzXT1cInsncC1oaWdobGlnaHQnOiBhbGxDaGVja2VkLCAncC1mb2N1cyc6IGhlYWRlckNoZWNrYm94Rm9jdXN9XCIgKGNsaWNrKT1cInRvZ2dsZUFsbCgkZXZlbnQpXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtY2hlY2tib3gtaWNvblwiIFtuZ0NsYXNzXT1cInsncGkgcGktY2hlY2snOmFsbENoZWNrZWR9XCI+PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInAtbGlzdGJveC1maWx0ZXItY29udGFpbmVyXCIgKm5nSWY9XCJmaWx0ZXJcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbdmFsdWVdPVwiZmlsdGVyVmFsdWV8fCcnXCIgKGlucHV0KT1cIm9uRmlsdGVyKCRldmVudClcIiBjbGFzcz1cInAtbGlzdGJveC1maWx0ZXIgcC1pbnB1dHRleHQgcC1jb21wb25lbnRcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbYXR0ci5wbGFjZWhvbGRlcl09XCJmaWx0ZXJQbGFjZUhvbGRlclwiIFthdHRyLmFyaWEtbGFiZWxdPVwiYXJpYUZpbHRlckxhYmVsXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLWxpc3Rib3gtZmlsdGVyLWljb24gcGkgcGktc2VhcmNoXCI+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBbbmdDbGFzc109XCIncC1saXN0Ym94LWxpc3Qtd3JhcHBlcidcIiBbbmdTdHlsZV09XCJsaXN0U3R5bGVcIiBbY2xhc3NdPVwibGlzdFN0eWxlQ2xhc3NcIj5cbiAgICAgICAgPHVsIGNsYXNzPVwicC1saXN0Ym94LWxpc3RcIiByb2xlPVwibGlzdGJveFwiIGFyaWEtbXVsdGlzZWxlY3RhYmxlPVwibXVsdGlwbGVcIj5cbiAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25zOyBsZXQgaSA9IGluZGV4O1wiIFtzdHlsZS5kaXNwbGF5XT1cImlzSXRlbVZpc2libGUob3B0aW9uKSA/ICdmbGV4JyA6ICdub25lJ1wiIFthdHRyLnRhYmluZGV4XT1cImRpc2FibGVkIHx8IG9wdGlvbi5kaXNhYmxlZCA/IG51bGwgOiAnMCdcIiBwUmlwcGxlXG4gICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsncC1saXN0Ym94LWl0ZW0nOnRydWUsJ3AtaGlnaGxpZ2h0Jzppc1NlbGVjdGVkKG9wdGlvbiksICdwLWRpc2FibGVkJzogb3B0aW9uLmRpc2FibGVkfVwiIHJvbGU9XCJvcHRpb25cIiBbYXR0ci5hcmlhLWxhYmVsXT1cIm9wdGlvbi5sYWJlbFwiXG4gICAgICAgICAgICAgIFthdHRyLmFyaWEtc2VsZWN0ZWRdPVwiaXNTZWxlY3RlZChvcHRpb24pXCIgKGNsaWNrKT1cIm9uT3B0aW9uQ2xpY2soJGV2ZW50LG9wdGlvbilcIiAoZGJsY2xpY2spPVwib25PcHRpb25Eb3VibGVDbGljaygkZXZlbnQsb3B0aW9uKVwiICh0b3VjaGVuZCk9XCJvbk9wdGlvblRvdWNoRW5kKCRldmVudCxvcHRpb24pXCIgKGtleWRvd24pPVwib25PcHRpb25LZXlEb3duKCRldmVudCxvcHRpb24pXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1jaGVja2JveCBwLWNvbXBvbmVudFwiICpuZ0lmPVwiY2hlY2tib3ggJiYgbXVsdGlwbGVcIiBbbmdDbGFzc109XCJ7J3AtY2hlY2tib3gtZGlzYWJsZWQnOiBkaXNhYmxlZCB8fCBvcHRpb24uZGlzYWJsZWR9XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWNoZWNrYm94LWJveFwiIFtuZ0NsYXNzXT1cInsncC1oaWdobGlnaHQnOmlzU2VsZWN0ZWQob3B0aW9uKX1cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtY2hlY2tib3gtaWNvblwiIFtuZ0NsYXNzXT1cInsncGkgcGktY2hlY2snOmlzU2VsZWN0ZWQob3B0aW9uKX1cIj48L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFpdGVtVGVtcGxhdGVcIj57e29wdGlvbi5sYWJlbH19PC9zcGFuPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIml0ZW1UZW1wbGF0ZTsgY29udGV4dDogeyRpbXBsaWNpdDogb3B0aW9uLCBpbmRleDogaX1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicC1saXN0Ym94LWZvb3RlclwiICpuZ0lmPVwiZm9vdGVyRmFjZXQgfHwgZm9vdGVyVGVtcGxhdGVcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwicC1mb290ZXJcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJmb290ZXJUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gICAgcHJvdmlkZXJzOiBbTElTVEJPWF9WQUxVRV9BQ0NFU1NPUl0sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBzdHlsZVVybHM6IFsnLi9saXN0Ym94LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExpc3Rib3ggaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgICBASW5wdXQoKSBtdWx0aXBsZTogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIHN0eWxlOiBhbnk7XG5cbiAgICBASW5wdXQoKSBzdHlsZUNsYXNzOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBsaXN0U3R5bGU6IGFueTtcblxuICAgIEBJbnB1dCgpIGxpc3RTdHlsZUNsYXNzOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSByZWFkb25seTogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgY2hlY2tib3g6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpIGZpbHRlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQElucHV0KCkgZmlsdGVyTW9kZTogc3RyaW5nID0gJ2NvbnRhaW5zJztcblxuICAgIEBJbnB1dCgpIGZpbHRlckxvY2FsZTogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgbWV0YUtleVNlbGVjdGlvbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSBkYXRhS2V5OiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBzaG93VG9nZ2xlQWxsOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIEBJbnB1dCgpIG9wdGlvbkxhYmVsOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBhcmlhRmlsdGVyTGFiZWw6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGZpbHRlclBsYWNlSG9sZGVyOiBzdHJpbmc7XG5cbiAgICBAT3V0cHV0KCkgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uRGJsQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQFZpZXdDaGlsZCgnaGVhZGVyY2hrYm94JykgaGVhZGVyQ2hlY2tib3hWaWV3Q2hpbGQ6IEVsZW1lbnRSZWY7XG5cbiAgICBAQ29udGVudENoaWxkKEhlYWRlcikgaGVhZGVyRmFjZXQ7XG5cbiAgICBAQ29udGVudENoaWxkKEZvb3RlcikgZm9vdGVyRmFjZXQ7XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFByaW1lVGVtcGxhdGUpIHRlbXBsYXRlczogUXVlcnlMaXN0PGFueT47XG5cbiAgICBwdWJsaWMgaXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgcHVibGljIGhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgcHVibGljIGZvb3RlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgcHVibGljIF9maWx0ZXJWYWx1ZTogc3RyaW5nO1xuXG4gICAgcHVibGljIGZpbHRlcmVkOiBib29sZWFuO1xuXG4gICAgcHVibGljIHZhbHVlOiBhbnk7XG5cbiAgICBwdWJsaWMgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7IH07XG5cbiAgICBwdWJsaWMgb25Nb2RlbFRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4geyB9O1xuXG4gICAgcHVibGljIG9wdGlvblRvdWNoZWQ6IGJvb2xlYW47XG5cbiAgICBwdWJsaWMgZm9jdXM6IGJvb2xlYW47XG5cbiAgICBwdWJsaWMgX29wdGlvbnM6IGFueVtdO1xuXG4gICAgcHVibGljIGhlYWRlckNoZWNrYm94Rm9jdXM6IGJvb2xlYW47XG5cbiAgICBwdWJsaWMgZGlzYWJsZWRTZWxlY3RlZE9wdGlvbnM6IFNlbGVjdEl0ZW1bXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmLCBwdWJsaWMgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICAgIEBJbnB1dCgpIGdldCBvcHRpb25zKCk6IGFueVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XG4gICAgfVxuXG4gICAgc2V0IG9wdGlvbnModmFsOiBhbnlbXSkge1xuICAgICAgICBsZXQgb3B0cyA9IHRoaXMub3B0aW9uTGFiZWwgPyBPYmplY3RVdGlscy5nZW5lcmF0ZVNlbGVjdEl0ZW1zKHZhbCwgdGhpcy5vcHRpb25MYWJlbCkgOiB2YWw7XG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRzO1xuICAgIH1cblxuICAgIEBJbnB1dCgpIGdldCBmaWx0ZXJWYWx1ZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlsdGVyVmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IGZpbHRlclZhbHVlKHZhbDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2ZpbHRlclZhbHVlID0gdmFsO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChpdGVtLmdldFR5cGUoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2l0ZW0nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdoZWFkZXInOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYWRlclRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2Zvb3Rlcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9vdGVyVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnNldERpc2FibGVkU2VsZWN0ZWRPcHRpb25zKCk7XG4gICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmbjtcbiAgICB9XG5cbiAgICBzZXREaXNhYmxlZFN0YXRlKHZhbDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gdmFsO1xuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIG9uT3B0aW9uQ2xpY2soZXZlbnQsIG9wdGlvbikge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCBvcHRpb24uZGlzYWJsZWQgfHwgdGhpcy5yZWFkb25seSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrYm94KVxuICAgICAgICAgICAgICAgIHRoaXMub25PcHRpb25DbGlja0NoZWNrYm94KGV2ZW50LCBvcHRpb24pO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMub25PcHRpb25DbGlja011bHRpcGxlKGV2ZW50LCBvcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vbk9wdGlvbkNsaWNrU2luZ2xlKGV2ZW50LCBvcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25DbGljay5lbWl0KHtcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgb3B0aW9uOiBvcHRpb24sXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vcHRpb25Ub3VjaGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb25PcHRpb25Ub3VjaEVuZChldmVudCwgb3B0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IG9wdGlvbi5kaXNhYmxlZCB8fCB0aGlzLnJlYWRvbmx5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9wdGlvblRvdWNoZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIG9uT3B0aW9uRG91YmxlQ2xpY2soZXZlbnQ6IEV2ZW50LCBvcHRpb246IFNlbGVjdEl0ZW0pOiBhbnkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCBvcHRpb24uZGlzYWJsZWQgfHwgdGhpcy5yZWFkb25seSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vbkRibENsaWNrLmVtaXQoe1xuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICBvcHRpb246IG9wdGlvbixcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgb25PcHRpb25DbGlja1NpbmdsZShldmVudCwgb3B0aW9uKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZCA9IHRoaXMuaXNTZWxlY3RlZChvcHRpb24pO1xuICAgICAgICBsZXQgdmFsdWVDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIGxldCBtZXRhU2VsZWN0aW9uID0gdGhpcy5vcHRpb25Ub3VjaGVkID8gZmFsc2UgOiB0aGlzLm1ldGFLZXlTZWxlY3Rpb247XG5cbiAgICAgICAgaWYgKG1ldGFTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIGxldCBtZXRhS2V5ID0gKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSk7XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIGlmIChtZXRhS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZUNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBvcHRpb24udmFsdWU7XG4gICAgICAgICAgICAgICAgdmFsdWVDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBzZWxlY3RlZCA/IG51bGwgOiBvcHRpb24udmFsdWU7XG4gICAgICAgICAgICB2YWx1ZUNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlQ2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbk9wdGlvbkNsaWNrTXVsdGlwbGUoZXZlbnQsIG9wdGlvbikge1xuICAgICAgICBsZXQgc2VsZWN0ZWQgPSB0aGlzLmlzU2VsZWN0ZWQob3B0aW9uKTtcbiAgICAgICAgbGV0IHZhbHVlQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgbWV0YVNlbGVjdGlvbiA9IHRoaXMub3B0aW9uVG91Y2hlZCA/IGZhbHNlIDogdGhpcy5tZXRhS2V5U2VsZWN0aW9uO1xuXG4gICAgICAgIGlmIChtZXRhU2VsZWN0aW9uKSB7XG4gICAgICAgICAgICBsZXQgbWV0YUtleSA9IChldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkpO1xuXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAobWV0YUtleSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZU9wdGlvbihvcHRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IFtvcHRpb24udmFsdWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZUNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IChtZXRhS2V5KSA/IHRoaXMudmFsdWUgfHwgW10gOiBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gWy4uLnRoaXMudmFsdWUsIG9wdGlvbi52YWx1ZV07XG4gICAgICAgICAgICAgICAgdmFsdWVDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlT3B0aW9uKG9wdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gWy4uLnRoaXMudmFsdWUgfHwgW10sIG9wdGlvbi52YWx1ZV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWVDaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoe1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uT3B0aW9uQ2xpY2tDaGVja2JveChldmVudCwgb3B0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMucmVhZG9ubHkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzZWxlY3RlZCA9IHRoaXMuaXNTZWxlY3RlZChvcHRpb24pO1xuXG4gICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVPcHRpb24ob3B0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlID8gdGhpcy52YWx1ZSA6IFtdO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IFsuLi50aGlzLnZhbHVlLCBvcHRpb24udmFsdWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoe1xuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW1vdmVPcHRpb24ob3B0aW9uOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUuZmlsdGVyKHZhbCA9PiAhT2JqZWN0VXRpbHMuZXF1YWxzKHZhbCwgb3B0aW9uLnZhbHVlLCB0aGlzLmRhdGFLZXkpKTtcbiAgICB9XG5cbiAgICBpc1NlbGVjdGVkKG9wdGlvbjogU2VsZWN0SXRlbSkge1xuICAgICAgICBsZXQgc2VsZWN0ZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB2YWwgb2YgdGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0VXRpbHMuZXF1YWxzKHZhbCwgb3B0aW9uLnZhbHVlLCB0aGlzLmRhdGFLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdGVkID0gT2JqZWN0VXRpbHMuZXF1YWxzKHRoaXMudmFsdWUsIG9wdGlvbi52YWx1ZSwgdGhpcy5kYXRhS2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzZWxlY3RlZDtcbiAgICB9XG5cbiAgICBnZXQgYWxsQ2hlY2tlZCgpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuZmlsdGVyVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFsbEZpbHRlcmVkU2VsZWN0ZWQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBvcHRpb25Db3VudCA9IHRoaXMuZ2V0RW5hYmxlZE9wdGlvbkNvdW50KCk7XG4gICAgICAgICAgICBsZXQgZGlzYWJsZWRTZWxlY3RlZE9wdGlvbkNvdW50ID0gdGhpcy5kaXNhYmxlZFNlbGVjdGVkT3B0aW9ucy5sZW5ndGg7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlICYmIHRoaXMub3B0aW9ucyAmJiAodGhpcy52YWx1ZS5sZW5ndGggPiAwICYmIHRoaXMudmFsdWUubGVuZ3RoID09IG9wdGlvbkNvdW50ICsgZGlzYWJsZWRTZWxlY3RlZE9wdGlvbkNvdW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEVuYWJsZWRPcHRpb25Db3VudCgpOiBudW1iZXIge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zKSB7XG4gICAgICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgb3B0IG9mIHRoaXMub3B0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmICghb3B0LmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFsbEZpbHRlcmVkU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBhbGxTZWxlY3RlZDogYm9vbGVhbjtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLmZpbHRlclZhbHVlID8gdGhpcy5nZXRGaWx0ZXJlZE9wdGlvbnMoKSA6IHRoaXMub3B0aW9ucztcblxuICAgICAgICBpZiAodGhpcy52YWx1ZSAmJiBvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoKSDCoHtcbiAgICAgICAgICAgIGFsbFNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAobGV0IG9wdCBvZiB0aGlzLm9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0l0ZW1WaXNpYmxlKG9wdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzU2VsZWN0ZWQob3B0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFsbFNlbGVjdGVkO1xuICAgIH1cblxuICAgIG9uRmlsdGVyKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuX2ZpbHRlclZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIH1cblxuICAgIHRvZ2dsZUFsbChldmVudCkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRvbmx5IHx8ICF0aGlzLm9wdGlvbnMgfHwgdGhpcy5vcHRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYWxsQ2hlY2tlZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWRTZWxlY3RlZE9wdGlvbnMgJiYgdGhpcy5kaXNhYmxlZFNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gW107XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBbLi4udGhpcy5kaXNhYmxlZFNlbGVjdGVkT3B0aW9uc107XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucykge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZFNlbGVjdGVkT3B0aW9ucyAmJiB0aGlzLmRpc2FibGVkU2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IFsuLi50aGlzLmRpc2FibGVkU2VsZWN0ZWRPcHRpb25zXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb3B0ID0gdGhpcy5vcHRpb25zW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0l0ZW1WaXNpYmxlKG9wdCkgJiYgIW9wdC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZS5wdXNoKG9wdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7IG9yaWdpbmFsRXZlbnQ6IGV2ZW50LCB2YWx1ZTogdGhpcy52YWx1ZSB9KTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpc0l0ZW1WaXNpYmxlKG9wdGlvbjogU2VsZWN0SXRlbSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5maWx0ZXJWYWx1ZSkge1xuICAgICAgICAgICAgbGV0IHZpc2libGU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmZpbHRlck1vZGUpIHtcbiAgICAgICAgICAgICAgICB2aXNpYmxlID0gRmlsdGVyVXRpbHNbdGhpcy5maWx0ZXJNb2RlXShvcHRpb24ubGFiZWwsIHRoaXMuZmlsdGVyVmFsdWUsIHRoaXMuZmlsdGVyTG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmlzaWJsZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25PcHRpb25LZXlEb3duKGV2ZW50OktleWJvYXJkRXZlbnQsIG9wdGlvbikge1xuICAgICAgICBpZiAodGhpcy5yZWFkb25seSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGl0ZW0gPSA8SFRNTExJRWxlbWVudD4gZXZlbnQuY3VycmVudFRhcmdldDtcblxuICAgICAgICBzd2l0Y2goZXZlbnQud2hpY2gpIHtcbiAgICAgICAgICAgIC8vZG93blxuICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICB2YXIgbmV4dEl0ZW0gPSB0aGlzLmZpbmROZXh0SXRlbShpdGVtKTtcbiAgICAgICAgICAgICAgICBpZiAobmV4dEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dEl0ZW0uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vdXBcbiAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgdmFyIHByZXZJdGVtID0gdGhpcy5maW5kUHJldkl0ZW0oaXRlbSk7XG4gICAgICAgICAgICAgICAgaWYgKHByZXZJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXZJdGVtLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvL2VudGVyXG4gICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICAgIHRoaXMub25PcHRpb25DbGljayhldmVudCwgb3B0aW9uKTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5kTmV4dEl0ZW0oaXRlbSkge1xuICAgICAgICBsZXQgbmV4dEl0ZW0gPSBpdGVtLm5leHRFbGVtZW50U2libGluZztcblxuICAgICAgICBpZiAobmV4dEl0ZW0pXG4gICAgICAgICAgICByZXR1cm4gRG9tSGFuZGxlci5oYXNDbGFzcyhuZXh0SXRlbSwgJ3AtZGlzYWJsZWQnKSB8fCBEb21IYW5kbGVyLmlzSGlkZGVuKG5leHRJdGVtKSA/IHRoaXMuZmluZE5leHRJdGVtKG5leHRJdGVtKSA6IG5leHRJdGVtO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmaW5kUHJldkl0ZW0oaXRlbSkge1xuICAgICAgICBsZXQgcHJldkl0ZW0gPSBpdGVtLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG5cbiAgICAgICAgaWYgKHByZXZJdGVtKVxuICAgICAgICAgICAgcmV0dXJuIERvbUhhbmRsZXIuaGFzQ2xhc3MocHJldkl0ZW0sICdwLWRpc2FibGVkJykgfHwgRG9tSGFuZGxlci5pc0hpZGRlbihwcmV2SXRlbSkgPyB0aGlzLmZpbmRQcmV2SXRlbShwcmV2SXRlbSkgOiBwcmV2SXRlbTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZ2V0RmlsdGVyZWRPcHRpb25zKCkge1xuICAgICAgICBsZXQgZmlsdGVyZWRPcHRpb25zID0gW107XG4gICAgICAgIGlmICh0aGlzLmZpbHRlclZhbHVlKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBvcHQgPSB0aGlzLm9wdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNJdGVtVmlzaWJsZShvcHQpICYmICFvcHQuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRPcHRpb25zLnB1c2gob3B0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyZWRPcHRpb25zO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uSGVhZGVyQ2hlY2tib3hGb2N1cygpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJDaGVja2JveEZvY3VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvbkhlYWRlckNoZWNrYm94Qmx1cigpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJDaGVja2JveEZvY3VzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0RGlzYWJsZWRTZWxlY3RlZE9wdGlvbnMoKXtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlZFNlbGVjdGVkT3B0aW9ucyA9IFtdO1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBvcHQgb2YgdGhpcy5vcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHQuZGlzYWJsZWQgJiYgdGhpcy5pc1NlbGVjdGVkKG9wdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZWRTZWxlY3RlZE9wdGlvbnMucHVzaChvcHQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFNoYXJlZE1vZHVsZSwgUmlwcGxlTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbTGlzdGJveCwgU2hhcmVkTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtMaXN0Ym94XVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Ym94TW9kdWxlIHsgfVxuIl19