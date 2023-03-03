import { NgModule, Component, ChangeDetectionStrategy, Input, ElementRef, ViewChild, EventEmitter, Output, forwardRef, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/inputtext';
import * as ɵngcc3 from 'primeng/button';

const _c0 = ["input"];
const _c1 = function () { return { "p-inputnumber-button p-inputnumber-button-up": true }; };
const _c2 = function () { return { "p-inputnumber-button p-inputnumber-button-down": true }; };
function InputNumber_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 5);
    ɵngcc0.ɵɵelementStart(1, "button", 6);
    ɵngcc0.ɵɵlistener("mousedown", function InputNumber_span_3_Template_button_mousedown_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onUpButtonMouseDown($event); })("mouseup", function InputNumber_span_3_Template_button_mouseup_1_listener() { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.onUpButtonMouseUp(); })("mouseleave", function InputNumber_span_3_Template_button_mouseleave_1_listener() { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.onUpButtonMouseLeave(); })("keydown", function InputNumber_span_3_Template_button_keydown_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.onUpButtonKeyDown($event); })("keyup", function InputNumber_span_3_Template_button_keyup_1_listener() { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.onUpButtonKeyUp(); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "button", 6);
    ɵngcc0.ɵɵlistener("mousedown", function InputNumber_span_3_Template_button_mousedown_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onDownButtonMouseDown($event); })("mouseup", function InputNumber_span_3_Template_button_mouseup_2_listener() { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.onDownButtonMouseUp(); })("mouseleave", function InputNumber_span_3_Template_button_mouseleave_2_listener() { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.onDownButtonMouseLeave(); })("keydown", function InputNumber_span_3_Template_button_keydown_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.onDownButtonKeyDown($event); })("keyup", function InputNumber_span_3_Template_button_keyup_2_listener() { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.onDownButtonKeyUp(); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap(ctx_r1.incrementButtonClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction0(10, _c1))("icon", ctx_r1.incrementButtonIcon)("disabled", ctx_r1.disabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap(ctx_r1.decrementButtonClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction0(11, _c2))("icon", ctx_r1.decrementButtonIcon)("disabled", ctx_r1.disabled);
} }
function InputNumber_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 6);
    ɵngcc0.ɵɵlistener("mousedown", function InputNumber_button_4_Template_button_mousedown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15.onUpButtonMouseDown($event); })("mouseup", function InputNumber_button_4_Template_button_mouseup_0_listener() { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r17 = ɵngcc0.ɵɵnextContext(); return ctx_r17.onUpButtonMouseUp(); })("mouseleave", function InputNumber_button_4_Template_button_mouseleave_0_listener() { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18.onUpButtonMouseLeave(); })("keydown", function InputNumber_button_4_Template_button_keydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r19 = ɵngcc0.ɵɵnextContext(); return ctx_r19.onUpButtonKeyDown($event); })("keyup", function InputNumber_button_4_Template_button_keyup_0_listener() { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r20 = ɵngcc0.ɵɵnextContext(); return ctx_r20.onUpButtonKeyUp(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r2.incrementButtonClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction0(5, _c1))("icon", ctx_r2.incrementButtonIcon)("disabled", ctx_r2.disabled);
} }
function InputNumber_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 6);
    ɵngcc0.ɵɵlistener("mousedown", function InputNumber_button_5_Template_button_mousedown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r21 = ɵngcc0.ɵɵnextContext(); return ctx_r21.onDownButtonMouseDown($event); })("mouseup", function InputNumber_button_5_Template_button_mouseup_0_listener() { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r23 = ɵngcc0.ɵɵnextContext(); return ctx_r23.onDownButtonMouseUp(); })("mouseleave", function InputNumber_button_5_Template_button_mouseleave_0_listener() { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r24 = ɵngcc0.ɵɵnextContext(); return ctx_r24.onDownButtonMouseLeave(); })("keydown", function InputNumber_button_5_Template_button_keydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r25 = ɵngcc0.ɵɵnextContext(); return ctx_r25.onDownButtonKeyDown($event); })("keyup", function InputNumber_button_5_Template_button_keyup_0_listener() { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r26 = ɵngcc0.ɵɵnextContext(); return ctx_r26.onDownButtonKeyUp(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r3.decrementButtonClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction0(5, _c2))("icon", ctx_r3.decrementButtonIcon)("disabled", ctx_r3.disabled);
} }
const _c3 = function (a1, a2, a3) { return { "p-inputnumber p-component": true, "p-inputnumber-buttons-stacked": a1, "p-inputnumber-buttons-horizontal": a2, "p-inputnumber-buttons-vertical": a3 }; };
export const INPUTNUMBER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputNumber),
    multi: true
};
export class InputNumber {
    constructor(el, cd) {
        this.el = el;
        this.cd = cd;
        this.showButtons = false;
        this.format = true;
        this.buttonLayout = "stacked";
        this.incrementButtonIcon = 'pi pi-angle-up';
        this.decrementButtonIcon = 'pi pi-angle-down';
        this.step = 1;
        this.onInput = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
        this.groupChar = '';
        this.prefixChar = '';
        this.suffixChar = '';
        this._modeOption = "decimal";
        this._useGroupingOption = true;
    }
    get locale() {
        return this._localeOption;
    }
    set locale(localeOption) {
        this._localeOption = localeOption;
        this.updateConstructParser();
    }
    get localeMatcher() {
        return this._localeMatcherOption;
    }
    set localeMatcher(localeMatcherOption) {
        this._localeMatcherOption = localeMatcherOption;
        this.updateConstructParser();
    }
    get mode() {
        return this._modeOption;
    }
    set mode(modeOption) {
        this._modeOption = modeOption;
        this.updateConstructParser();
    }
    get currency() {
        return this._currencyOption;
    }
    set currency(currencyOption) {
        this._currencyOption = currencyOption;
        this.updateConstructParser();
    }
    get currencyDisplay() {
        return this._currencyDisplayOption;
    }
    set currencyDisplay(currencyDisplayOption) {
        this._currencyDisplayOption = currencyDisplayOption;
        this.updateConstructParser();
    }
    get useGrouping() {
        return this._useGroupingOption;
    }
    set useGrouping(useGroupingOption) {
        this._useGroupingOption = useGroupingOption;
        this.updateConstructParser();
    }
    get minFractionDigits() {
        return this._minFractionDigitsOption;
    }
    set minFractionDigits(minFractionDigitsOption) {
        this._minFractionDigitsOption = minFractionDigitsOption;
        this.updateConstructParser();
    }
    get maxFractionDigits() {
        return this._maxFractionDigitsOption;
    }
    set maxFractionDigits(maxFractionDigitsOption) {
        this._maxFractionDigitsOption = maxFractionDigitsOption;
        this.updateConstructParser();
    }
    get prefix() {
        return this._prefixOption;
    }
    set prefix(prefixOption) {
        this._prefixOption = prefixOption;
        this.updateConstructParser();
    }
    get suffix() {
        return this._suffixOption;
    }
    set suffix(suffixOption) {
        this._suffixOption = suffixOption;
        this.updateConstructParser();
    }
    ngOnInit() {
        this.constructParser();
        this.initialized = true;
    }
    getOptions() {
        return {
            localeMatcher: this.localeMatcher,
            style: this.mode,
            currency: this.currency,
            currencyDisplay: this.currencyDisplay,
            useGrouping: this.useGrouping,
            minimumFractionDigits: this.minFractionDigits,
            maximumFractionDigits: this.maxFractionDigits
        };
    }
    constructParser() {
        this.numberFormat = new Intl.NumberFormat(this.locale, this.getOptions());
        const numerals = [...new Intl.NumberFormat(this.locale, { useGrouping: false }).format(9876543210)].reverse();
        const index = new Map(numerals.map((d, i) => [d, i]));
        this._numeral = new RegExp(`[${numerals.join('')}]`, 'g');
        this._decimal = this.getDecimalExpression();
        this._group = this.getGroupingExpression();
        this._minusSign = this.getMinusSignExpression();
        this._currency = this.getCurrencyExpression();
        this._suffix = this.getSuffixExpression();
        this._prefix = this.getPrefixExpression();
        this._index = d => index.get(d);
    }
    updateConstructParser() {
        if (this.initialized) {
            this.constructParser();
        }
    }
    escapeRegExp(text) {
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    }
    getDecimalExpression() {
        const formatter = new Intl.NumberFormat(this.locale, { useGrouping: false });
        return new RegExp(`[${formatter.format(1.1).trim().replace(this._numeral, '')}]`, 'g');
    }
    getGroupingExpression() {
        const formatter = new Intl.NumberFormat(this.locale, { useGrouping: true });
        this.groupChar = formatter.format(1000000).trim().replace(this._numeral, '').charAt(0);
        return new RegExp(`[${this.groupChar}]`, 'g');
    }
    getMinusSignExpression() {
        const formatter = new Intl.NumberFormat(this.locale, { useGrouping: false });
        return new RegExp(`[${formatter.format(-1).trim().replace(this._numeral, '')}]`, 'g');
    }
    getCurrencyExpression() {
        if (this.currency) {
            const formatter = new Intl.NumberFormat(this.locale, { style: 'currency', currency: this.currency, currencyDisplay: this.currencyDisplay });
            return new RegExp(`[${formatter.format(1).replace(/\s/g, '').replace(this._numeral, '').replace(this._decimal, '').replace(this._group, '')}]`, 'g');
        }
        return new RegExp(`[]`, 'g');
    }
    getPrefixExpression() {
        if (this.prefix) {
            this.prefixChar = this.prefix;
        }
        else {
            const formatter = new Intl.NumberFormat(this.locale, { style: this.mode, currency: this.currency, currencyDisplay: this.currencyDisplay });
            this.prefixChar = formatter.format(1).split('1')[0];
        }
        return new RegExp(`${this.escapeRegExp(this.prefixChar || '')}`, 'g');
    }
    getSuffixExpression() {
        if (this.suffix) {
            this.suffixChar = this.suffix;
        }
        else {
            const formatter = new Intl.NumberFormat(this.locale, { style: this.mode, currency: this.currency, currencyDisplay: this.currencyDisplay,
                minimumFractionDigits: 0, maximumFractionDigits: 0 });
            this.suffixChar = formatter.format(1).split('1')[1];
        }
        return new RegExp(`${this.escapeRegExp(this.suffixChar || '')}`, 'g');
    }
    formatValue(value) {
        if (value != null) {
            if (value === '-') { // Minus sign
                return value;
            }
            if (this.format) {
                let formatter = new Intl.NumberFormat(this.locale, this.getOptions());
                let formattedValue = formatter.format(value);
                if (this.prefix) {
                    formattedValue = this.prefix + formattedValue;
                }
                if (this.suffix) {
                    formattedValue = formattedValue + this.suffix;
                }
                return formattedValue;
            }
            return value.toString();
        }
        return '';
    }
    parseValue(text) {
        let filteredText = text
            .replace(this._suffix, '')
            .replace(this._prefix, '')
            .trim()
            .replace(/\s/g, '')
            .replace(this._currency, '')
            .replace(this._group, '')
            .replace(this._minusSign, '-')
            .replace(this._decimal, '.')
            .replace(this._numeral, this._index);
        if (filteredText) {
            if (filteredText === '-') // Minus sign
                return filteredText;
            let parsedValue = +filteredText;
            return isNaN(parsedValue) ? null : parsedValue;
        }
        return null;
    }
    repeat(event, interval, dir) {
        let i = interval || 500;
        this.clearTimer();
        this.timer = setTimeout(() => {
            this.repeat(event, 40, dir);
        }, i);
        this.spin(event, dir);
    }
    spin(event, dir) {
        let step = this.step * dir;
        let currentValue = this.parseValue(this.input.nativeElement.value) || 0;
        let newValue = this.validateValue(currentValue + step);
        if (this.maxlength && this.maxlength < this.formatValue(newValue).length) {
            return;
        }
        this.updateInput(newValue, null, 'spin');
        this.updateModel(event, newValue);
        this.handleOnInput(event, currentValue, newValue);
    }
    onUpButtonMouseDown(event) {
        this.input.nativeElement.focus();
        this.repeat(event, null, 1);
        event.preventDefault();
    }
    onUpButtonMouseUp() {
        this.clearTimer();
    }
    onUpButtonMouseLeave() {
        this.clearTimer();
    }
    onUpButtonKeyDown(event) {
        if (event.keyCode === 32 || event.keyCode === 13) {
            this.repeat(event, null, 1);
        }
    }
    onUpButtonKeyUp() {
        this.clearTimer();
    }
    onDownButtonMouseDown(event) {
        this.input.nativeElement.focus();
        this.repeat(event, null, -1);
        event.preventDefault();
    }
    onDownButtonMouseUp() {
        this.clearTimer();
    }
    onDownButtonMouseLeave() {
        this.clearTimer();
    }
    onDownButtonKeyUp() {
        this.clearTimer();
    }
    onDownButtonKeyDown(event) {
        if (event.keyCode === 32 || event.keyCode === 13) {
            this.repeat(event, null, -1);
        }
    }
    onUserInput(event) {
        if (this.isSpecialChar) {
            event.target.value = this.lastValue;
        }
        this.isSpecialChar = false;
    }
    onInputKeyDown(event) {
        this.lastValue = event.target.value;
        if (event.shiftKey || event.altKey) {
            this.isSpecialChar = true;
            return;
        }
        let selectionStart = event.target.selectionStart;
        let selectionEnd = event.target.selectionEnd;
        let inputValue = event.target.value;
        let newValueStr = null;
        if (event.altKey) {
            event.preventDefault();
        }
        switch (event.which) {
            //up
            case 38:
                this.spin(event, 1);
                event.preventDefault();
                break;
            //down
            case 40:
                this.spin(event, -1);
                event.preventDefault();
                break;
            //left
            case 37:
                if (!this.isNumeralChar(inputValue.charAt(selectionStart - 1))) {
                    event.preventDefault();
                }
                break;
            //right
            case 39:
                if (!this.isNumeralChar(inputValue.charAt(selectionStart))) {
                    event.preventDefault();
                }
                break;
            //backspace
            case 8: {
                event.preventDefault();
                if (selectionStart === selectionEnd) {
                    let deleteChar = inputValue.charAt(selectionStart - 1);
                    let decimalCharIndex = inputValue.search(this._decimal);
                    this._decimal.lastIndex = 0;
                    if (this.isNumeralChar(deleteChar)) {
                        if (this._group.test(deleteChar)) {
                            this._group.lastIndex = 0;
                            newValueStr = inputValue.slice(0, selectionStart - 2) + inputValue.slice(selectionStart - 1);
                        }
                        else if (this._decimal.test(deleteChar)) {
                            this._decimal.lastIndex = 0;
                            this.input.nativeElement.setSelectionRange(selectionStart - 1, selectionStart - 1);
                        }
                        else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
                            newValueStr = inputValue.slice(0, selectionStart - 1) + '0' + inputValue.slice(selectionStart);
                        }
                        else if (decimalCharIndex > 0 && decimalCharIndex === 1) {
                            newValueStr = inputValue.slice(0, selectionStart - 1) + '0' + inputValue.slice(selectionStart);
                            newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : '';
                        }
                        else {
                            newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
                        }
                    }
                    this.updateValue(event, newValueStr, null, 'delete-single');
                }
                else {
                    newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
                    this.updateValue(event, newValueStr, null, 'delete-range');
                }
                break;
            }
            // del
            case 46:
                event.preventDefault();
                if (selectionStart === selectionEnd) {
                    let deleteChar = inputValue.charAt(selectionStart);
                    let decimalCharIndex = inputValue.search(this._decimal);
                    this._decimal.lastIndex = 0;
                    if (this.isNumeralChar(deleteChar)) {
                        if (this._group.test(deleteChar)) {
                            this._group.lastIndex = 0;
                            newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 2);
                        }
                        else if (this._decimal.test(deleteChar)) {
                            this._decimal.lastIndex = 0;
                            this.input.nativeElement.setSelectionRange(selectionStart + 1, selectionStart + 1);
                        }
                        else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
                            newValueStr = inputValue.slice(0, selectionStart) + '0' + inputValue.slice(selectionStart + 1);
                        }
                        else if (decimalCharIndex > 0 && decimalCharIndex === 1) {
                            newValueStr = inputValue.slice(0, selectionStart) + '0' + inputValue.slice(selectionStart + 1);
                            newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : '';
                        }
                        else {
                            newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
                        }
                    }
                    this.updateValue(event, newValueStr, null, 'delete-back-single');
                }
                else {
                    newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
                    this.updateValue(event, newValueStr, null, 'delete-range');
                }
                break;
            default:
                break;
        }
    }
    onInputKeyPress(event) {
        event.preventDefault();
        let code = event.which || event.keyCode;
        let char = String.fromCharCode(code);
        const isDecimalSign = this.isDecimalSign(char);
        const isMinusSign = this.isMinusSign(char);
        if ((48 <= code && code <= 57) || isMinusSign || isDecimalSign) {
            this.insert(event, char, { isDecimalSign, isMinusSign });
        }
    }
    onPaste(event) {
        event.preventDefault();
        let data = (event.clipboardData || window['clipboardData']).getData('Text');
        if (data) {
            let filteredData = this.parseValue(data);
            if (filteredData != null) {
                this.insert(event, filteredData.toString());
            }
        }
    }
    isMinusSign(char) {
        if (this._minusSign.test(char)) {
            this._minusSign.lastIndex = 0;
            return true;
        }
        return false;
    }
    isDecimalSign(char) {
        if (this._decimal.test(char)) {
            this._decimal.lastIndex = 0;
            return true;
        }
        return false;
    }
    insert(event, text, sign = { isDecimalSign: false, isMinusSign: false }) {
        let selectionStart = this.input.nativeElement.selectionStart;
        let selectionEnd = this.input.nativeElement.selectionEnd;
        let inputValue = this.input.nativeElement.value.trim();
        const decimalCharIndex = inputValue.search(this._decimal);
        this._decimal.lastIndex = 0;
        const minusCharIndex = inputValue.search(this._minusSign);
        this._minusSign.lastIndex = 0;
        let newValueStr;
        if (sign.isMinusSign) {
            if (selectionStart === 0) {
                newValueStr = inputValue;
                if (minusCharIndex === -1 || selectionEnd !== 0) {
                    newValueStr = this.insertText(inputValue, text, 0, selectionEnd);
                }
                this.updateValue(event, newValueStr, text, 'insert');
            }
        }
        else if (sign.isDecimalSign) {
            if (decimalCharIndex > 0 && selectionStart === decimalCharIndex) {
                this.updateValue(event, inputValue, text, 'insert');
            }
            else if (decimalCharIndex > selectionStart && decimalCharIndex < selectionEnd) {
                newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
                this.updateValue(event, newValueStr, text, 'insert');
            }
        }
        else {
            const maxFractionDigits = this.numberFormat.resolvedOptions().maximumFractionDigits;
            const operation = selectionStart !== selectionEnd ? 'range-insert' : 'insert';
            if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
                if ((selectionStart + text.length - (decimalCharIndex + 1)) <= maxFractionDigits) {
                    newValueStr = inputValue.slice(0, selectionStart) + text + inputValue.slice(selectionStart + text.length);
                    this.updateValue(event, newValueStr, text, operation);
                }
            }
            else {
                newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
                this.updateValue(event, newValueStr, text, operation);
            }
        }
    }
    insertText(value, text, start, end) {
        let textSplit = text.split('.');
        if (textSplit.length == 2) {
            const decimalCharIndex = value.slice(start, end).search(this._decimal);
            this._decimal.lastIndex = 0;
            return (decimalCharIndex > 0) ? value.slice(0, start) + this.formatValue(text) + value.slice(end) : (value || this.formatValue(text));
        }
        else if ((end - start) === value.length) {
            return this.formatValue(text);
        }
        else if (start === 0) {
            return text + value.slice(end);
        }
        else if (end === value.length) {
            return value.slice(0, start) + text;
        }
        else {
            return value.slice(0, start) + text + value.slice(end);
        }
    }
    deleteRange(value, start, end) {
        let newValueStr;
        if ((end - start) === value.length)
            newValueStr = '';
        else if (start === 0)
            newValueStr = value.slice(end);
        else if (end === value.length)
            newValueStr = value.slice(0, start);
        else
            newValueStr = value.slice(0, start) + value.slice(end);
        return newValueStr;
    }
    initCursor() {
        let selectionStart = this.input.nativeElement.selectionStart;
        let inputValue = this.input.nativeElement.value;
        let valueLength = inputValue.length;
        let index = null;
        let char = inputValue.charAt(selectionStart);
        if (this.isNumeralChar(char)) {
            return;
        }
        //left
        let i = selectionStart - 1;
        while (i >= 0) {
            char = inputValue.charAt(i);
            if (this.isNumeralChar(char)) {
                index = i;
                break;
            }
            else {
                i--;
            }
        }
        if (index !== null) {
            this.input.nativeElement.setSelectionRange(index + 1, index + 1);
        }
        else {
            i = selectionStart + 1;
            while (i < valueLength) {
                char = inputValue.charAt(i);
                if (this.isNumeralChar(char)) {
                    index = i;
                    break;
                }
                else {
                    i++;
                }
            }
            if (index !== null) {
                this.input.nativeElement.setSelectionRange(index, index);
            }
        }
    }
    onInputClick() {
        this.initCursor();
    }
    isNumeralChar(char) {
        if (char.length === 1 && (this._numeral.test(char) || this._decimal.test(char) || this._group.test(char) || this._minusSign.test(char))) {
            this.resetRegex();
            return true;
        }
        return false;
    }
    resetRegex() {
        this._numeral.lastIndex = 0;
        this._decimal.lastIndex = 0;
        this._group.lastIndex = 0;
        this._minusSign.lastIndex = 0;
    }
    updateValue(event, valueStr, insertedValueStr, operation) {
        let currentValue = this.input.nativeElement.value;
        let newValue = null;
        if (valueStr != null) {
            newValue = this.parseValue(valueStr);
            this.updateInput(newValue, insertedValueStr, operation);
        }
        this.handleOnInput(event, currentValue, newValue);
    }
    handleOnInput(event, currentValue, newValue) {
        if (this.isValueChanged(currentValue, newValue)) {
            this.onInput.emit({ originalEvent: event, value: newValue });
        }
    }
    isValueChanged(currentValue, newValue) {
        if (newValue === null && currentValue !== null) {
            return true;
        }
        if (newValue != null) {
            let parsedCurrentValue = (typeof currentValue === 'string') ? this.parseValue(currentValue) : currentValue;
            return newValue !== parsedCurrentValue;
        }
        return false;
    }
    validateValue(value) {
        if (this.min !== null && value < this.min) {
            return this.min;
        }
        if (this.max !== null && value > this.max) {
            return this.max;
        }
        if (value === '-') { // Minus sign
            return null;
        }
        return value;
    }
    updateInput(value, insertedValueStr, operation) {
        insertedValueStr = insertedValueStr || '';
        let inputValue = this.input.nativeElement.value;
        let newValue = this.formatValue(value);
        let currentLength = inputValue.length;
        if (currentLength === 0) {
            this.input.nativeElement.value = newValue;
            this.input.nativeElement.setSelectionRange(0, 0);
            this.initCursor();
            const prefixLength = (this.prefixChar || '').length;
            const selectionEnd = prefixLength + insertedValueStr.length;
            this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
        }
        else {
            let selectionStart = this.input.nativeElement.selectionStart;
            let selectionEnd = this.input.nativeElement.selectionEnd;
            if (this.maxlength && this.maxlength < newValue.length) {
                return;
            }
            this.input.nativeElement.value = newValue;
            let newLength = newValue.length;
            if (operation === 'range-insert') {
                const startValue = this.parseValue((inputValue || '').slice(0, selectionStart));
                const startValueStr = startValue !== null ? startValue.toString() : '';
                const startExpr = startValueStr.split('').join(`(${this.groupChar})?`);
                const sRegex = new RegExp(startExpr, 'g');
                sRegex.test(newValue);
                const tExpr = insertedValueStr.split('').join(`(${this.groupChar})?`);
                const tRegex = new RegExp(tExpr, 'g');
                tRegex.test(newValue.slice(sRegex.lastIndex));
                selectionEnd = sRegex.lastIndex + tRegex.lastIndex;
                this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
            }
            else if (newLength === currentLength) {
                if (operation === 'insert' || operation === 'delete-back-single')
                    this.input.nativeElement.setSelectionRange(selectionEnd + 1, selectionEnd + 1);
                else if (operation === 'delete-single')
                    this.input.nativeElement.setSelectionRange(selectionEnd - 1, selectionEnd - 1);
                else if (operation === 'delete-range' || operation === 'spin')
                    this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
            }
            else if (operation === 'delete-back-single') {
                let prevChar = inputValue.charAt(selectionEnd - 1);
                let nextChar = inputValue.charAt(selectionEnd);
                let diff = currentLength - newLength;
                let isGroupChar = this._group.test(nextChar);
                if (isGroupChar && diff === 1) {
                    selectionEnd += 1;
                }
                else if (!isGroupChar && this.isNumeralChar(prevChar)) {
                    selectionEnd += (-1 * diff) + 1;
                }
                this._group.lastIndex = 0;
                this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
            }
            else {
                selectionEnd = selectionEnd + (newLength - currentLength);
                this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
            }
        }
        this.input.nativeElement.setAttribute('aria-valuenow', value);
    }
    onInputFocus(event) {
        this.focused = true;
        this.onFocus.emit(event);
    }
    onInputBlur(event) {
        this.focused = false;
        let newValue = this.validateValue(this.parseValue(this.input.nativeElement.value));
        this.input.nativeElement.value = this.formatValue(newValue);
        this.input.nativeElement.setAttribute('aria-valuenow', newValue);
        this.updateModel(event, newValue);
        this.onBlur.emit(event);
    }
    formattedValue() {
        return this.formatValue(this.value);
    }
    updateModel(event, value) {
        if (this.value !== value) {
            this.value = value;
            this.onModelChange(value);
        }
        this.onModelTouched();
    }
    writeValue(value) {
        this.value = value;
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
    get filled() {
        return (this.value != null && this.value.toString().length > 0);
    }
    clearTimer() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }
}
InputNumber.ɵfac = function InputNumber_Factory(t) { return new (t || InputNumber)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
InputNumber.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: InputNumber, selectors: [["p-inputNumber"]], viewQuery: function InputNumber_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.input = _t.first);
    } }, hostVars: 4, hostBindings: function InputNumber_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focused);
    } }, inputs: { showButtons: "showButtons", format: "format", buttonLayout: "buttonLayout", incrementButtonIcon: "incrementButtonIcon", decrementButtonIcon: "decrementButtonIcon", step: "step", locale: "locale", localeMatcher: "localeMatcher", mode: "mode", currency: "currency", currencyDisplay: "currencyDisplay", useGrouping: "useGrouping", minFractionDigits: "minFractionDigits", maxFractionDigits: "maxFractionDigits", prefix: "prefix", suffix: "suffix", disabled: "disabled", inputId: "inputId", styleClass: "styleClass", style: "style", placeholder: "placeholder", size: "size", maxlength: "maxlength", tabindex: "tabindex", title: "title", ariaLabel: "ariaLabel", ariaRequired: "ariaRequired", name: "name", required: "required", autocomplete: "autocomplete", min: "min", max: "max", incrementButtonClass: "incrementButtonClass", decrementButtonClass: "decrementButtonClass", inputStyle: "inputStyle", inputStyleClass: "inputStyleClass" }, outputs: { onInput: "onInput", onFocus: "onFocus", onBlur: "onBlur" }, features: [ɵngcc0.ɵɵProvidersFeature([INPUTNUMBER_VALUE_ACCESSOR])], decls: 6, vars: 30, consts: [[3, "ngClass", "ngStyle"], ["pInputText", "", 3, "ngClass", "ngStyle", "value", "disabled", "input", "keydown", "keypress", "paste", "click", "focus", "blur"], ["input", ""], ["class", "p-inputnumber-button-group", 4, "ngIf"], ["type", "button", "pButton", "", 3, "ngClass", "class", "icon", "disabled", "mousedown", "mouseup", "mouseleave", "keydown", "keyup", 4, "ngIf"], [1, "p-inputnumber-button-group"], ["type", "button", "pButton", "", 3, "ngClass", "icon", "disabled", "mousedown", "mouseup", "mouseleave", "keydown", "keyup"]], template: function InputNumber_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "span", 0);
        ɵngcc0.ɵɵelementStart(1, "input", 1, 2);
        ɵngcc0.ɵɵlistener("input", function InputNumber_Template_input_input_1_listener($event) { return ctx.onUserInput($event); })("keydown", function InputNumber_Template_input_keydown_1_listener($event) { return ctx.onInputKeyDown($event); })("keypress", function InputNumber_Template_input_keypress_1_listener($event) { return ctx.onInputKeyPress($event); })("paste", function InputNumber_Template_input_paste_1_listener($event) { return ctx.onPaste($event); })("click", function InputNumber_Template_input_click_1_listener() { return ctx.onInputClick(); })("focus", function InputNumber_Template_input_focus_1_listener($event) { return ctx.onInputFocus($event); })("blur", function InputNumber_Template_input_blur_1_listener($event) { return ctx.onInputBlur($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, InputNumber_span_3_Template, 3, 12, "span", 3);
        ɵngcc0.ɵɵtemplate(4, InputNumber_button_4_Template, 1, 6, "button", 4);
        ɵngcc0.ɵɵtemplate(5, InputNumber_button_5_Template, 1, 6, "button", 4);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(26, _c3, ctx.showButtons && ctx.buttonLayout === "stacked", ctx.showButtons && ctx.buttonLayout === "horizontal", ctx.showButtons && ctx.buttonLayout === "vertical"))("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMap(ctx.inputStyleClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-inputnumber-input")("ngStyle", ctx.inputStyle)("value", ctx.formattedValue())("disabled", ctx.disabled);
        ɵngcc0.ɵɵattribute("placeholder", ctx.placeholder)("title", ctx.title)("id", ctx.inputId)("size", ctx.size)("name", ctx.name)("autocomplete", ctx.autocomplete)("maxlength", ctx.maxlength)("tabindex", ctx.tabindex)("aria-label", ctx.ariaLabel)("aria-required", ctx.ariaRequired)("required", ctx.required)("aria-valumin", ctx.min)("aria-valuemax", ctx.max);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showButtons && ctx.buttonLayout === "stacked");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showButtons && ctx.buttonLayout !== "stacked");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showButtons && ctx.buttonLayout !== "stacked");
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc2.InputText, ɵngcc1.NgIf, ɵngcc3.ButtonDirective], styles: [".p-inputnumber{display:-ms-inline-flexbox;display:inline-flex}.p-inputnumber-button{-ms-flex:0 0 auto;-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;flex:0 0 auto;justify-content:center}.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button .p-button-label,.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button .p-button-label{display:none}.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-up{border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0;padding:0}.p-inputnumber-buttons-stacked .p-inputnumber-input{border-bottom-right-radius:0;border-top-right-radius:0}.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-down{border-bottom-left-radius:0;border-top-left-radius:0;border-top-right-radius:0;padding:0}.p-inputnumber-buttons-stacked .p-inputnumber-button-group{-ms-flex-direction:column;display:-ms-flexbox;display:flex;flex-direction:column}.p-inputnumber-buttons-stacked .p-inputnumber-button-group .p-button.p-inputnumber-button{-ms-flex:1 1 auto;flex:1 1 auto}.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-up{-ms-flex-order:3;border-bottom-left-radius:0;border-top-left-radius:0;order:3}.p-inputnumber-buttons-horizontal .p-inputnumber-input{-ms-flex-order:2;border-radius:0;order:2}.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-down{-ms-flex-order:1;border-bottom-right-radius:0;border-top-right-radius:0;order:1}.p-inputnumber-buttons-vertical{-ms-flex-direction:column;flex-direction:column}.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-up{-ms-flex-order:1;border-bottom-left-radius:0;border-bottom-right-radius:0;order:1;width:100%}.p-inputnumber-buttons-vertical .p-inputnumber-input{-ms-flex-order:2;border-radius:0;order:2;text-align:center}.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-down{-ms-flex-order:3;border-top-left-radius:0;border-top-right-radius:0;order:3;width:100%}.p-inputnumber-input{-ms-flex:1 1 auto;flex:1 1 auto}.p-fluid .p-inputnumber{width:100%}.p-fluid .p-inputnumber .p-inputnumber-input{width:1%}.p-fluid .p-inputnumber-buttons-vertical .p-inputnumber-input{width:100%}"], encapsulation: 2, changeDetection: 0 });
InputNumber.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
InputNumber.propDecorators = {
    showButtons: [{ type: Input }],
    format: [{ type: Input }],
    buttonLayout: [{ type: Input }],
    disabled: [{ type: Input }],
    inputId: [{ type: Input }],
    styleClass: [{ type: Input }],
    style: [{ type: Input }],
    placeholder: [{ type: Input }],
    size: [{ type: Input }],
    maxlength: [{ type: Input }],
    tabindex: [{ type: Input }],
    title: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    ariaRequired: [{ type: Input }],
    name: [{ type: Input }],
    required: [{ type: Input }],
    autocomplete: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    incrementButtonClass: [{ type: Input }],
    decrementButtonClass: [{ type: Input }],
    incrementButtonIcon: [{ type: Input }],
    decrementButtonIcon: [{ type: Input }],
    step: [{ type: Input }],
    inputStyle: [{ type: Input }],
    inputStyleClass: [{ type: Input }],
    input: [{ type: ViewChild, args: ['input',] }],
    onInput: [{ type: Output }],
    onFocus: [{ type: Output }],
    onBlur: [{ type: Output }],
    locale: [{ type: Input }],
    localeMatcher: [{ type: Input }],
    mode: [{ type: Input }],
    currency: [{ type: Input }],
    currencyDisplay: [{ type: Input }],
    useGrouping: [{ type: Input }],
    minFractionDigits: [{ type: Input }],
    maxFractionDigits: [{ type: Input }],
    prefix: [{ type: Input }],
    suffix: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InputNumber, [{
        type: Component,
        args: [{
                selector: 'p-inputNumber',
                template: `
        <span [ngClass]="{'p-inputnumber p-component': true,'p-inputnumber-buttons-stacked': this.showButtons && this.buttonLayout === 'stacked',
                'p-inputnumber-buttons-horizontal': this.showButtons && this.buttonLayout === 'horizontal', 'p-inputnumber-buttons-vertical': this.showButtons && this.buttonLayout === 'vertical'}"
                [ngStyle]="style" [class]="styleClass">
            <input #input [ngClass]="'p-inputnumber-input'" [ngStyle]="inputStyle" [class]="inputStyleClass" pInputText [value]="formattedValue()" [attr.placeholder]="placeholder" [attr.title]="title" [attr.id]="inputId"
                [attr.size]="size" [attr.name]="name" [attr.autocomplete]="autocomplete" [attr.maxlength]="maxlength" [attr.tabindex]="tabindex" [attr.aria-label]="ariaLabel"
                [attr.aria-required]="ariaRequired" [disabled]="disabled" [attr.required]="required" [attr.aria-valumin]="min" [attr.aria-valuemax]="max"
                (input)="onUserInput($event)" (keydown)="onInputKeyDown($event)" (keypress)="onInputKeyPress($event)" (paste)="onPaste($event)" (click)="onInputClick()"
                (focus)="onInputFocus($event)" (blur)="onInputBlur($event)">
            <span class="p-inputnumber-button-group" *ngIf="showButtons && buttonLayout === 'stacked'">
                <button type="button" pButton [ngClass]="{'p-inputnumber-button p-inputnumber-button-up': true}" [class]="incrementButtonClass" [icon]="incrementButtonIcon" [disabled]="disabled"
                    (mousedown)="this.onUpButtonMouseDown($event)" (mouseup)="onUpButtonMouseUp()" (mouseleave)="onUpButtonMouseLeave()" (keydown)="onUpButtonKeyDown($event)" (keyup)="onUpButtonKeyUp()"></button>
                <button type="button" pButton [ngClass]="{'p-inputnumber-button p-inputnumber-button-down': true}" [class]="decrementButtonClass" [icon]="decrementButtonIcon" [disabled]="disabled"
                    (mousedown)="this.onDownButtonMouseDown($event)" (mouseup)="onDownButtonMouseUp()" (mouseleave)="onDownButtonMouseLeave()" (keydown)="onDownButtonKeyDown($event)" (keyup)="onDownButtonKeyUp()"></button>
            </span>
            <button type="button" pButton [ngClass]="{'p-inputnumber-button p-inputnumber-button-up': true}" [class]="incrementButtonClass" [icon]="incrementButtonIcon" *ngIf="showButtons && buttonLayout !== 'stacked'" [disabled]="disabled"
                (mousedown)="this.onUpButtonMouseDown($event)" (mouseup)="onUpButtonMouseUp()" (mouseleave)="onUpButtonMouseLeave()" (keydown)="onUpButtonKeyDown($event)" (keyup)="onUpButtonKeyUp()"></button>
            <button type="button" pButton [ngClass]="{'p-inputnumber-button p-inputnumber-button-down': true}" [class]="decrementButtonClass" [icon]="decrementButtonIcon" *ngIf="showButtons && buttonLayout !== 'stacked'" [disabled]="disabled"
                (mousedown)="this.onDownButtonMouseDown($event)" (mouseup)="onDownButtonMouseUp()" (mouseleave)="onDownButtonMouseLeave()" (keydown)="onDownButtonKeyDown($event)" (keyup)="onDownButtonKeyUp()"></button>
        </span>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [INPUTNUMBER_VALUE_ACCESSOR],
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.p-inputwrapper-filled]': 'filled',
                    '[class.p-inputwrapper-focus]': 'focused'
                },
                styles: [".p-inputnumber{display:-ms-inline-flexbox;display:inline-flex}.p-inputnumber-button{-ms-flex:0 0 auto;-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;flex:0 0 auto;justify-content:center}.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button .p-button-label,.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button .p-button-label{display:none}.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-up{border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0;padding:0}.p-inputnumber-buttons-stacked .p-inputnumber-input{border-bottom-right-radius:0;border-top-right-radius:0}.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-down{border-bottom-left-radius:0;border-top-left-radius:0;border-top-right-radius:0;padding:0}.p-inputnumber-buttons-stacked .p-inputnumber-button-group{-ms-flex-direction:column;display:-ms-flexbox;display:flex;flex-direction:column}.p-inputnumber-buttons-stacked .p-inputnumber-button-group .p-button.p-inputnumber-button{-ms-flex:1 1 auto;flex:1 1 auto}.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-up{-ms-flex-order:3;border-bottom-left-radius:0;border-top-left-radius:0;order:3}.p-inputnumber-buttons-horizontal .p-inputnumber-input{-ms-flex-order:2;border-radius:0;order:2}.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-down{-ms-flex-order:1;border-bottom-right-radius:0;border-top-right-radius:0;order:1}.p-inputnumber-buttons-vertical{-ms-flex-direction:column;flex-direction:column}.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-up{-ms-flex-order:1;border-bottom-left-radius:0;border-bottom-right-radius:0;order:1;width:100%}.p-inputnumber-buttons-vertical .p-inputnumber-input{-ms-flex-order:2;border-radius:0;order:2;text-align:center}.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-down{-ms-flex-order:3;border-top-left-radius:0;border-top-right-radius:0;order:3;width:100%}.p-inputnumber-input{-ms-flex:1 1 auto;flex:1 1 auto}.p-fluid .p-inputnumber{width:100%}.p-fluid .p-inputnumber .p-inputnumber-input{width:1%}.p-fluid .p-inputnumber-buttons-vertical .p-inputnumber-input{width:100%}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { showButtons: [{
            type: Input
        }], format: [{
            type: Input
        }], buttonLayout: [{
            type: Input
        }], incrementButtonIcon: [{
            type: Input
        }], decrementButtonIcon: [{
            type: Input
        }], step: [{
            type: Input
        }], onInput: [{
            type: Output
        }], onFocus: [{
            type: Output
        }], onBlur: [{
            type: Output
        }], locale: [{
            type: Input
        }], localeMatcher: [{
            type: Input
        }], mode: [{
            type: Input
        }], currency: [{
            type: Input
        }], currencyDisplay: [{
            type: Input
        }], useGrouping: [{
            type: Input
        }], minFractionDigits: [{
            type: Input
        }], maxFractionDigits: [{
            type: Input
        }], prefix: [{
            type: Input
        }], suffix: [{
            type: Input
        }], disabled: [{
            type: Input
        }], inputId: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], style: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], size: [{
            type: Input
        }], maxlength: [{
            type: Input
        }], tabindex: [{
            type: Input
        }], title: [{
            type: Input
        }], ariaLabel: [{
            type: Input
        }], ariaRequired: [{
            type: Input
        }], name: [{
            type: Input
        }], required: [{
            type: Input
        }], autocomplete: [{
            type: Input
        }], min: [{
            type: Input
        }], max: [{
            type: Input
        }], incrementButtonClass: [{
            type: Input
        }], decrementButtonClass: [{
            type: Input
        }], inputStyle: [{
            type: Input
        }], inputStyleClass: [{
            type: Input
        }], input: [{
            type: ViewChild,
            args: ['input']
        }] }); })();
export class InputNumberModule {
}
InputNumberModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: InputNumberModule });
InputNumberModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function InputNumberModule_Factory(t) { return new (t || InputNumberModule)(); }, imports: [[CommonModule, InputTextModule, ButtonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(InputNumberModule, { declarations: function () { return [InputNumber]; }, imports: function () { return [CommonModule, InputTextModule, ButtonModule]; }, exports: function () { return [InputNumber]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InputNumberModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, InputTextModule, ButtonModule],
                exports: [InputNumber],
                declarations: [InputNumber]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXRudW1iZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9pbnB1dG51bWJlci9pbnB1dG51bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2TCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekUsTUFBTSxDQUFDLE1BQU0sMEJBQTBCLEdBQVE7QUFDL0MsSUFBSSxPQUFPLEVBQUUsaUJBQWlCO0FBQzlCLElBQUksV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUM7QUFDOUMsSUFBSSxLQUFLLEVBQUUsSUFBSTtBQUNmLENBQUMsQ0FBQztBQWlDRixNQUFNLE9BQU8sV0FBVztBQUFHLElBb052QixZQUFtQixFQUFjLEVBQVUsRUFBcUI7QUFBSSxRQUFqRCxPQUFFLEdBQUYsRUFBRSxDQUFZO0FBQUMsUUFBUyxPQUFFLEdBQUYsRUFBRSxDQUFtQjtBQUFDLFFBbE54RCxnQkFBVyxHQUFZLEtBQUssQ0FBQztBQUMxQyxRQUNhLFdBQU0sR0FBWSxJQUFJLENBQUM7QUFDcEMsUUFDYSxpQkFBWSxHQUFXLFNBQVMsQ0FBQztBQUM5QyxRQXFDYSx3QkFBbUIsR0FBVyxnQkFBZ0Is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TUFBTTtBQUFLLHFCQUVYLE1BQU07QUFBSyxxQkE4RFgsS0FBSztBQUFLLDRCQVNWLEtBQUs7QUFBSyxtQkFTVixLQUFLO0FBQUssdUJBU1YsS0FBSztBQUFLLDhCQVNWLEtBQUs7QUFBSywwQkFTVixLQUFLO0FBQUssZ0NBU1YsS0FBSztBQUFLLGdDQVNWLEtBQUs7QUFBSyxxQkFTVixLQUFLO0FBQUsscUJBU1YsS0FBSztBQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQTB0QmhCLE1BQU0sT0FBTyxpQkFBaUI7QUFBRzs2Q0FMaEMsUUFBUSxTQUFDO0NBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFDLGVBQWUsRUFBRSxZQUFZLENBQUMsa0JBQ3JELE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxrQkFDdEIsWUFBWSxFQUFFLENBQUMsV0FBVyxDQUFDLGNBQzlCOzs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtOZ01vZHVsZSxDb21wb25lbnQsQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIGZvcndhcmRSZWYsIFZpZXdFbmNhcHN1bGF0aW9uLCBDaGFuZ2VEZXRlY3RvclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7SW5wdXRUZXh0TW9kdWxlfSBmcm9tICdwcmltZW5nL2lucHV0dGV4dCc7XG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL2J1dHRvbic7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBjb25zdCBJTlBVVE5VTUJFUl9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IElucHV0TnVtYmVyKSxcbiAgICBtdWx0aTogdHJ1ZVxufTtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1pbnB1dE51bWJlcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNwYW4gW25nQ2xhc3NdPVwieydwLWlucHV0bnVtYmVyIHAtY29tcG9uZW50JzogdHJ1ZSwncC1pbnB1dG51bWJlci1idXR0b25zLXN0YWNrZWQnOiB0aGlzLnNob3dCdXR0b25zICYmIHRoaXMuYnV0dG9uTGF5b3V0ID09PSAnc3RhY2tlZCcsXG4gICAgICAgICAgICAgICAgJ3AtaW5wdXRudW1iZXItYnV0dG9ucy1ob3Jpem9udGFsJzogdGhpcy5zaG93QnV0dG9ucyAmJiB0aGlzLmJ1dHRvbkxheW91dCA9PT0gJ2hvcml6b250YWwnLCAncC1pbnB1dG51bWJlci1idXR0b25zLXZlcnRpY2FsJzogdGhpcy5zaG93QnV0dG9ucyAmJiB0aGlzLmJ1dHRvbkxheW91dCA9PT0gJ3ZlcnRpY2FsJ31cIlxuICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInN0eWxlXCIgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIj5cbiAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgW25nQ2xhc3NdPVwiJ3AtaW5wdXRudW1iZXItaW5wdXQnXCIgW25nU3R5bGVdPVwiaW5wdXRTdHlsZVwiIFtjbGFzc109XCJpbnB1dFN0eWxlQ2xhc3NcIiBwSW5wdXRUZXh0IFt2YWx1ZV09XCJmb3JtYXR0ZWRWYWx1ZSgpXCIgW2F0dHIucGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiBbYXR0ci50aXRsZV09XCJ0aXRsZVwiIFthdHRyLmlkXT1cImlucHV0SWRcIlxuICAgICAgICAgICAgICAgIFthdHRyLnNpemVdPVwic2l6ZVwiIFthdHRyLm5hbWVdPVwibmFtZVwiIFthdHRyLmF1dG9jb21wbGV0ZV09XCJhdXRvY29tcGxldGVcIiBbYXR0ci5tYXhsZW5ndGhdPVwibWF4bGVuZ3RoXCIgW2F0dHIudGFiaW5kZXhdPVwidGFiaW5kZXhcIiBbYXR0ci5hcmlhLWxhYmVsXT1cImFyaWFMYWJlbFwiXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1yZXF1aXJlZF09XCJhcmlhUmVxdWlyZWRcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbYXR0ci5yZXF1aXJlZF09XCJyZXF1aXJlZFwiIFthdHRyLmFyaWEtdmFsdW1pbl09XCJtaW5cIiBbYXR0ci5hcmlhLXZhbHVlbWF4XT1cIm1heFwiXG4gICAgICAgICAgICAgICAgKGlucHV0KT1cIm9uVXNlcklucHV0KCRldmVudClcIiAoa2V5ZG93bik9XCJvbklucHV0S2V5RG93bigkZXZlbnQpXCIgKGtleXByZXNzKT1cIm9uSW5wdXRLZXlQcmVzcygkZXZlbnQpXCIgKHBhc3RlKT1cIm9uUGFzdGUoJGV2ZW50KVwiIChjbGljayk9XCJvbklucHV0Q2xpY2soKVwiXG4gICAgICAgICAgICAgICAgKGZvY3VzKT1cIm9uSW5wdXRGb2N1cygkZXZlbnQpXCIgKGJsdXIpPVwib25JbnB1dEJsdXIoJGV2ZW50KVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLWlucHV0bnVtYmVyLWJ1dHRvbi1ncm91cFwiICpuZ0lmPVwic2hvd0J1dHRvbnMgJiYgYnV0dG9uTGF5b3V0ID09PSAnc3RhY2tlZCdcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBwQnV0dG9uIFtuZ0NsYXNzXT1cInsncC1pbnB1dG51bWJlci1idXR0b24gcC1pbnB1dG51bWJlci1idXR0b24tdXAnOiB0cnVlfVwiIFtjbGFzc109XCJpbmNyZW1lbnRCdXR0b25DbGFzc1wiIFtpY29uXT1cImluY3JlbWVudEJ1dHRvbkljb25cIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgICAobW91c2Vkb3duKT1cInRoaXMub25VcEJ1dHRvbk1vdXNlRG93bigkZXZlbnQpXCIgKG1vdXNldXApPVwib25VcEJ1dHRvbk1vdXNlVXAoKVwiIChtb3VzZWxlYXZlKT1cIm9uVXBCdXR0b25Nb3VzZUxlYXZlKClcIiAoa2V5ZG93bik9XCJvblVwQnV0dG9uS2V5RG93bigkZXZlbnQpXCIgKGtleXVwKT1cIm9uVXBCdXR0b25LZXlVcCgpXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgcEJ1dHRvbiBbbmdDbGFzc109XCJ7J3AtaW5wdXRudW1iZXItYnV0dG9uIHAtaW5wdXRudW1iZXItYnV0dG9uLWRvd24nOiB0cnVlfVwiIFtjbGFzc109XCJkZWNyZW1lbnRCdXR0b25DbGFzc1wiIFtpY29uXT1cImRlY3JlbWVudEJ1dHRvbkljb25cIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgICAobW91c2Vkb3duKT1cInRoaXMub25Eb3duQnV0dG9uTW91c2VEb3duKCRldmVudClcIiAobW91c2V1cCk9XCJvbkRvd25CdXR0b25Nb3VzZVVwKClcIiAobW91c2VsZWF2ZSk9XCJvbkRvd25CdXR0b25Nb3VzZUxlYXZlKClcIiAoa2V5ZG93bik9XCJvbkRvd25CdXR0b25LZXlEb3duKCRldmVudClcIiAoa2V5dXApPVwib25Eb3duQnV0dG9uS2V5VXAoKVwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgcEJ1dHRvbiBbbmdDbGFzc109XCJ7J3AtaW5wdXRudW1iZXItYnV0dG9uIHAtaW5wdXRudW1iZXItYnV0dG9uLXVwJzogdHJ1ZX1cIiBbY2xhc3NdPVwiaW5jcmVtZW50QnV0dG9uQ2xhc3NcIiBbaWNvbl09XCJpbmNyZW1lbnRCdXR0b25JY29uXCIgKm5nSWY9XCJzaG93QnV0dG9ucyAmJiBidXR0b25MYXlvdXQgIT09ICdzdGFja2VkJ1wiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgKG1vdXNlZG93bik9XCJ0aGlzLm9uVXBCdXR0b25Nb3VzZURvd24oJGV2ZW50KVwiIChtb3VzZXVwKT1cIm9uVXBCdXR0b25Nb3VzZVVwKClcIiAobW91c2VsZWF2ZSk9XCJvblVwQnV0dG9uTW91c2VMZWF2ZSgpXCIgKGtleWRvd24pPVwib25VcEJ1dHRvbktleURvd24oJGV2ZW50KVwiIChrZXl1cCk9XCJvblVwQnV0dG9uS2V5VXAoKVwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgcEJ1dHRvbiBbbmdDbGFzc109XCJ7J3AtaW5wdXRudW1iZXItYnV0dG9uIHAtaW5wdXRudW1iZXItYnV0dG9uLWRvd24nOiB0cnVlfVwiIFtjbGFzc109XCJkZWNyZW1lbnRCdXR0b25DbGFzc1wiIFtpY29uXT1cImRlY3JlbWVudEJ1dHRvbkljb25cIiAqbmdJZj1cInNob3dCdXR0b25zICYmIGJ1dHRvbkxheW91dCAhPT0gJ3N0YWNrZWQnXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAobW91c2Vkb3duKT1cInRoaXMub25Eb3duQnV0dG9uTW91c2VEb3duKCRldmVudClcIiAobW91c2V1cCk9XCJvbkRvd25CdXR0b25Nb3VzZVVwKClcIiAobW91c2VsZWF2ZSk9XCJvbkRvd25CdXR0b25Nb3VzZUxlYXZlKClcIiAoa2V5ZG93bik9XCJvbkRvd25CdXR0b25LZXlEb3duKCRldmVudClcIiAoa2V5dXApPVwib25Eb3duQnV0dG9uS2V5VXAoKVwiPjwvYnV0dG9uPlxuICAgICAgICA8L3NwYW4+XG4gICAgYCxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBwcm92aWRlcnM6IFtJTlBVVE5VTUJFUl9WQUxVRV9BQ0NFU1NPUl0sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBzdHlsZVVybHM6IFsnLi9pbnB1dG51bWJlci5jc3MnXSxcbiAgICBob3N0OiB7XG4gICAgICAgICdbY2xhc3MucC1pbnB1dHdyYXBwZXItZmlsbGVkXSc6ICdmaWxsZWQnLFxuICAgICAgICAnW2NsYXNzLnAtaW5wdXR3cmFwcGVyLWZvY3VzXSc6ICdmb2N1c2VkJ1xuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgSW5wdXROdW1iZXIgaW1wbGVtZW50cyBPbkluaXQsQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gICAgQElucHV0KCkgc2hvd0J1dHRvbnM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpIGZvcm1hdDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSBidXR0b25MYXlvdXQ6IHN0cmluZyA9IFwic3RhY2tlZFwiO1xuXG4gICAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBpbnB1dElkOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBzdHlsZUNsYXNzOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBzdHlsZTogYW55O1xuXG4gICAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHNpemU6IG51bWJlcjtcblxuICAgIEBJbnB1dCgpIG1heGxlbmd0aDogbnVtYmVyO1xuXG4gICAgQElucHV0KCkgdGFiaW5kZXg6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBhcmlhTGFiZWw6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGFyaWFSZXF1aXJlZDogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHJlcXVpcmVkOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgYXV0b2NvbXBsZXRlOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBtaW46IG51bWJlcjtcblxuICAgIEBJbnB1dCgpIG1heDogbnVtYmVyO1xuXG4gICAgQElucHV0KCkgaW5jcmVtZW50QnV0dG9uQ2xhc3M6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGRlY3JlbWVudEJ1dHRvbkNsYXNzOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBpbmNyZW1lbnRCdXR0b25JY29uOiBzdHJpbmcgPSAncGkgcGktYW5nbGUtdXAnO1xuXG4gICAgQElucHV0KCkgZGVjcmVtZW50QnV0dG9uSWNvbjogc3RyaW5nID0gJ3BpIHBpLWFuZ2xlLWRvd24nO1xuXG4gICAgQElucHV0KCkgc3RlcDogbnVtYmVyID0gMTtcblxuICAgIEBJbnB1dCgpIGlucHV0U3R5bGU6IGFueTtcblxuICAgIEBJbnB1dCgpIGlucHV0U3R5bGVDbGFzczogc3RyaW5nO1xuXG4gICAgQFZpZXdDaGlsZCgnaW5wdXQnKSBpbnB1dDogRWxlbWVudFJlZjtcblxuICAgIEBPdXRwdXQoKSBvbklucHV0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbkZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbkJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgdmFsdWU6IG51bWJlcjtcblxuICAgIG9uTW9kZWxDaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cbiAgICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICAgIGZvY3VzZWQ6IGJvb2xlYW47XG5cbiAgICBpbml0aWFsaXplZDogYm9vbGVhbjtcblxuICAgIGdyb3VwQ2hhcjogc3RyaW5nID0gJyc7XG5cbiAgICBwcmVmaXhDaGFyOiBzdHJpbmcgPSAnJztcblxuICAgIHN1ZmZpeENoYXI6IHN0cmluZyA9ICcnO1xuXG4gICAgaXNTcGVjaWFsQ2hhcjogYm9vbGVhbjtcblxuICAgIHRpbWVyOiBhbnk7XG5cbiAgICBsYXN0VmFsdWU6IHN0cmluZztcblxuICAgIF9udW1lcmFsOiBhbnk7XG5cbiAgICBudW1iZXJGb3JtYXQ6IGFueTtcblxuICAgIF9kZWNpbWFsOiBhbnk7XG5cbiAgICBfZ3JvdXA6IGFueTtcblxuICAgIF9taW51c1NpZ246IGFueTtcblxuICAgIF9jdXJyZW5jeTogYW55O1xuXG4gICAgX3ByZWZpeDogYW55O1xuXG4gICAgX3N1ZmZpeDogYW55O1xuXG4gICAgX2luZGV4OiBhbnk7XG5cbiAgICBfbG9jYWxlT3B0aW9uOiBzdHJpbmc7XG5cbiAgICBfbG9jYWxlTWF0Y2hlck9wdGlvbjogc3RyaW5nO1xuXG4gICAgX21vZGVPcHRpb246IHN0cmluZyA9IFwiZGVjaW1hbFwiO1xuXG4gICAgX2N1cnJlbmN5T3B0aW9uOiBzdHJpbmc7XG5cbiAgICBfY3VycmVuY3lEaXNwbGF5T3B0aW9uOiBzdHJpbmc7XG5cbiAgICBfdXNlR3JvdXBpbmdPcHRpb246IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgX21pbkZyYWN0aW9uRGlnaXRzT3B0aW9uOiBudW1iZXI7XG5cbiAgICBfbWF4RnJhY3Rpb25EaWdpdHNPcHRpb246IG51bWJlcjtcblxuICAgIF9wcmVmaXhPcHRpb246IHN0cmluZztcblxuICAgIF9zdWZmaXhPcHRpb246IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGdldCBsb2NhbGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsZU9wdGlvbjtcbiAgICB9XG5cbiAgICBzZXQgbG9jYWxlKGxvY2FsZU9wdGlvbjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2xvY2FsZU9wdGlvbiA9IGxvY2FsZU9wdGlvbjtcbiAgICAgICAgdGhpcy51cGRhdGVDb25zdHJ1Y3RQYXJzZXIoKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKSBnZXQgbG9jYWxlTWF0Y2hlcigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9jYWxlTWF0Y2hlck9wdGlvbjtcbiAgICB9XG5cbiAgICBzZXQgbG9jYWxlTWF0Y2hlcihsb2NhbGVNYXRjaGVyT3B0aW9uOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fbG9jYWxlTWF0Y2hlck9wdGlvbiA9IGxvY2FsZU1hdGNoZXJPcHRpb247XG4gICAgICAgIHRoaXMudXBkYXRlQ29uc3RydWN0UGFyc2VyKCk7XG4gICAgfVxuXG4gICAgQElucHV0KCkgZ2V0IG1vZGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vZGVPcHRpb247XG4gICAgfVxuXG4gICAgc2V0IG1vZGUobW9kZU9wdGlvbjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX21vZGVPcHRpb24gPSBtb2RlT3B0aW9uO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbnN0cnVjdFBhcnNlcigpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpIGdldCBjdXJyZW5jeSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVuY3lPcHRpb247XG4gICAgfVxuXG4gICAgc2V0IGN1cnJlbmN5KGN1cnJlbmN5T3B0aW9uOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fY3VycmVuY3lPcHRpb24gPSBjdXJyZW5jeU9wdGlvbjtcbiAgICAgICAgdGhpcy51cGRhdGVDb25zdHJ1Y3RQYXJzZXIoKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKSBnZXQgY3VycmVuY3lEaXNwbGF5KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW5jeURpc3BsYXlPcHRpb247XG4gICAgfVxuXG4gICAgc2V0IGN1cnJlbmN5RGlzcGxheShjdXJyZW5jeURpc3BsYXlPcHRpb246IHN0cmluZykge1xuICAgICAgICB0aGlzLl9jdXJyZW5jeURpc3BsYXlPcHRpb24gPSBjdXJyZW5jeURpc3BsYXlPcHRpb247XG4gICAgICAgIHRoaXMudXBkYXRlQ29uc3RydWN0UGFyc2VyKCk7XG4gICAgfVxuXG4gICAgQElucHV0KCkgZ2V0IHVzZUdyb3VwaW5nKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXNlR3JvdXBpbmdPcHRpb247XG4gICAgfVxuXG4gICAgc2V0IHVzZUdyb3VwaW5nKHVzZUdyb3VwaW5nT3B0aW9uOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3VzZUdyb3VwaW5nT3B0aW9uID0gdXNlR3JvdXBpbmdPcHRpb247XG4gICAgICAgIHRoaXMudXBkYXRlQ29uc3RydWN0UGFyc2VyKCk7XG4gICAgfVxuXG4gICAgQElucHV0KCkgZ2V0IG1pbkZyYWN0aW9uRGlnaXRzKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9taW5GcmFjdGlvbkRpZ2l0c09wdGlvbjtcbiAgICB9XG5cbiAgICBzZXQgbWluRnJhY3Rpb25EaWdpdHMobWluRnJhY3Rpb25EaWdpdHNPcHRpb246IG51bWJlcikge1xuICAgICAgICB0aGlzLl9taW5GcmFjdGlvbkRpZ2l0c09wdGlvbiA9IG1pbkZyYWN0aW9uRGlnaXRzT3B0aW9uO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbnN0cnVjdFBhcnNlcigpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpIGdldCBtYXhGcmFjdGlvbkRpZ2l0cygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWF4RnJhY3Rpb25EaWdpdHNPcHRpb247XG4gICAgfVxuXG4gICAgc2V0IG1heEZyYWN0aW9uRGlnaXRzKG1heEZyYWN0aW9uRGlnaXRzT3B0aW9uOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fbWF4RnJhY3Rpb25EaWdpdHNPcHRpb24gPSBtYXhGcmFjdGlvbkRpZ2l0c09wdGlvbjtcbiAgICAgICAgdGhpcy51cGRhdGVDb25zdHJ1Y3RQYXJzZXIoKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKSBnZXQgcHJlZml4KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmVmaXhPcHRpb247XG4gICAgfVxuXG4gICAgc2V0IHByZWZpeChwcmVmaXhPcHRpb246IHN0cmluZykge1xuICAgICAgICB0aGlzLl9wcmVmaXhPcHRpb24gPSBwcmVmaXhPcHRpb247XG4gICAgICAgIHRoaXMudXBkYXRlQ29uc3RydWN0UGFyc2VyKCk7XG4gICAgfVxuXG4gICAgQElucHV0KCkgZ2V0IHN1ZmZpeCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3VmZml4T3B0aW9uO1xuICAgIH1cblxuICAgIHNldCBzdWZmaXgoc3VmZml4T3B0aW9uOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fc3VmZml4T3B0aW9uID0gc3VmZml4T3B0aW9uO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbnN0cnVjdFBhcnNlcigpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0UGFyc2VyKCk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgfVxuXG4gICAgZ2V0T3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxvY2FsZU1hdGNoZXI6IHRoaXMubG9jYWxlTWF0Y2hlcixcbiAgICAgICAgICAgIHN0eWxlOiB0aGlzLm1vZGUsXG4gICAgICAgICAgICBjdXJyZW5jeTogdGhpcy5jdXJyZW5jeSxcbiAgICAgICAgICAgIGN1cnJlbmN5RGlzcGxheTogdGhpcy5jdXJyZW5jeURpc3BsYXksXG4gICAgICAgICAgICB1c2VHcm91cGluZzogdGhpcy51c2VHcm91cGluZyxcbiAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogdGhpcy5taW5GcmFjdGlvbkRpZ2l0cyxcbiAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogdGhpcy5tYXhGcmFjdGlvbkRpZ2l0c1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdFBhcnNlcigpIHtcbiAgICAgICAgdGhpcy5udW1iZXJGb3JtYXQgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQodGhpcy5sb2NhbGUsIHRoaXMuZ2V0T3B0aW9ucygpKTtcbiAgICAgICAgY29uc3QgbnVtZXJhbHMgPSBbLi4ubmV3IEludGwuTnVtYmVyRm9ybWF0KHRoaXMubG9jYWxlLCB7dXNlR3JvdXBpbmc6IGZhbHNlfSkuZm9ybWF0KDk4NzY1NDMyMTApXS5yZXZlcnNlKCk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gbmV3IE1hcChudW1lcmFscy5tYXAoKGQsIGkpID0+IFtkLCBpXSkpO1xuICAgICAgICB0aGlzLl9udW1lcmFsID0gbmV3IFJlZ0V4cChgWyR7bnVtZXJhbHMuam9pbignJyl9XWAsICdnJyk7XG4gICAgICAgIHRoaXMuX2RlY2ltYWwgPSB0aGlzLmdldERlY2ltYWxFeHByZXNzaW9uKCk7XG4gICAgICAgIHRoaXMuX2dyb3VwID0gdGhpcy5nZXRHcm91cGluZ0V4cHJlc3Npb24oKTtcbiAgICAgICAgdGhpcy5fbWludXNTaWduID0gdGhpcy5nZXRNaW51c1NpZ25FeHByZXNzaW9uKCk7XG4gICAgICAgIHRoaXMuX2N1cnJlbmN5ID0gdGhpcy5nZXRDdXJyZW5jeUV4cHJlc3Npb24oKTtcbiAgICAgICAgdGhpcy5fc3VmZml4ID0gdGhpcy5nZXRTdWZmaXhFeHByZXNzaW9uKCk7XG4gICAgICAgIHRoaXMuX3ByZWZpeCA9IHRoaXMuZ2V0UHJlZml4RXhwcmVzc2lvbigpO1xuICAgICAgICB0aGlzLl9pbmRleCA9IGQgPT4gaW5kZXguZ2V0KGQpO1xuICAgIH1cblxuICAgIHVwZGF0ZUNvbnN0cnVjdFBhcnNlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY29uc3RydWN0UGFyc2VyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlc2NhcGVSZWdFeHAodGV4dCkge1xuICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC9bLVtcXF17fSgpKis/LixcXFxcXiR8I1xcc10vZywgJ1xcXFwkJicpO1xuICAgIH1cblxuICAgIGdldERlY2ltYWxFeHByZXNzaW9uKCkge1xuICAgICAgICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQodGhpcy5sb2NhbGUsIHt1c2VHcm91cGluZzogZmFsc2V9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoYFske2Zvcm1hdHRlci5mb3JtYXQoMS4xKS50cmltKCkucmVwbGFjZSh0aGlzLl9udW1lcmFsLCAnJyl9XWAsICdnJyk7XG4gICAgfVxuXG4gICAgZ2V0R3JvdXBpbmdFeHByZXNzaW9uKCkge1xuICAgICAgICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQodGhpcy5sb2NhbGUsIHt1c2VHcm91cGluZzogdHJ1ZX0pO1xuICAgICAgICB0aGlzLmdyb3VwQ2hhciA9IGZvcm1hdHRlci5mb3JtYXQoMTAwMDAwMCkudHJpbSgpLnJlcGxhY2UodGhpcy5fbnVtZXJhbCwgJycpLmNoYXJBdCgwKTtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoYFske3RoaXMuZ3JvdXBDaGFyfV1gLCAnZycpO1xuICAgIH1cblxuICAgIGdldE1pbnVzU2lnbkV4cHJlc3Npb24oKSB7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCh0aGlzLmxvY2FsZSwge3VzZUdyb3VwaW5nOiBmYWxzZX0pO1xuICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChgWyR7Zm9ybWF0dGVyLmZvcm1hdCgtMSkudHJpbSgpLnJlcGxhY2UodGhpcy5fbnVtZXJhbCwgJycpfV1gLCAnZycpO1xuICAgIH1cblxuICAgIGdldEN1cnJlbmN5RXhwcmVzc2lvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVuY3kpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCh0aGlzLmxvY2FsZSwge3N0eWxlOiAnY3VycmVuY3knLCBjdXJyZW5jeTogdGhpcy5jdXJyZW5jeSwgY3VycmVuY3lEaXNwbGF5OiB0aGlzLmN1cnJlbmN5RGlzcGxheX0pO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoYFske2Zvcm1hdHRlci5mb3JtYXQoMSkucmVwbGFjZSgvXFxzL2csICcnKS5yZXBsYWNlKHRoaXMuX251bWVyYWwsICcnKS5yZXBsYWNlKHRoaXMuX2RlY2ltYWwsICcnKS5yZXBsYWNlKHRoaXMuX2dyb3VwLCAnJyl9XWAsICdnJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChgW11gLCdnJyk7XG4gICAgfVxuXG4gICAgZ2V0UHJlZml4RXhwcmVzc2lvbigpIHtcbiAgICAgICAgaWYgKHRoaXMucHJlZml4KSB7XG4gICAgICAgICAgICB0aGlzLnByZWZpeENoYXIgPSB0aGlzLnByZWZpeDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCh0aGlzLmxvY2FsZSwge3N0eWxlOiB0aGlzLm1vZGUsIGN1cnJlbmN5OiB0aGlzLmN1cnJlbmN5LCBjdXJyZW5jeURpc3BsYXk6IHRoaXMuY3VycmVuY3lEaXNwbGF5fSk7XG4gICAgICAgICAgICB0aGlzLnByZWZpeENoYXIgPSBmb3JtYXR0ZXIuZm9ybWF0KDEpLnNwbGl0KCcxJylbMF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChgJHt0aGlzLmVzY2FwZVJlZ0V4cCh0aGlzLnByZWZpeENoYXJ8fCcnKX1gLCAnZycpO1xuICAgIH1cblxuICAgIGdldFN1ZmZpeEV4cHJlc3Npb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnN1ZmZpeCkge1xuICAgICAgICAgICAgdGhpcy5zdWZmaXhDaGFyID0gdGhpcy5zdWZmaXg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQodGhpcy5sb2NhbGUsIHtzdHlsZTogdGhpcy5tb2RlLCBjdXJyZW5jeTogdGhpcy5jdXJyZW5jeSwgY3VycmVuY3lEaXNwbGF5OiB0aGlzLmN1cnJlbmN5RGlzcGxheSxcbiAgICAgICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMH0pO1xuICAgICAgICAgICAgdGhpcy5zdWZmaXhDaGFyID0gZm9ybWF0dGVyLmZvcm1hdCgxKS5zcGxpdCgnMScpWzFdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoYCR7dGhpcy5lc2NhcGVSZWdFeHAodGhpcy5zdWZmaXhDaGFyfHwnJyl9YCwgJ2cnKTtcbiAgICB9XG5cbiAgICBmb3JtYXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnLScpIHsgLy8gTWludXMgc2lnblxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWF0KSB7XG4gICAgICAgICAgICAgICAgbGV0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCh0aGlzLmxvY2FsZSwgdGhpcy5nZXRPcHRpb25zKCkpO1xuICAgICAgICAgICAgICAgIGxldCBmb3JtYXR0ZWRWYWx1ZSA9IGZvcm1hdHRlci5mb3JtYXQodmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByZWZpeCkge1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZSA9IHRoaXMucHJlZml4ICsgZm9ybWF0dGVkVmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZFZhbHVlID0gZm9ybWF0dGVkVmFsdWUgKyB0aGlzLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZm9ybWF0dGVkVmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHBhcnNlVmFsdWUodGV4dCkge1xuICAgICAgICBsZXQgZmlsdGVyZWRUZXh0ID0gdGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKHRoaXMuX3N1ZmZpeCwgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UodGhpcy5fcHJlZml4LCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xccy9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSh0aGlzLl9jdXJyZW5jeSwgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UodGhpcy5fZ3JvdXAsICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKHRoaXMuX21pbnVzU2lnbiwgJy0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKHRoaXMuX2RlY2ltYWwsICcuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSh0aGlzLl9udW1lcmFsLCB0aGlzLl9pbmRleCk7XG5cbiAgICAgICAgaWYgKGZpbHRlcmVkVGV4dCkge1xuICAgICAgICAgICAgaWYgKGZpbHRlcmVkVGV4dCA9PT0gJy0nKSAvLyBNaW51cyBzaWduXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbHRlcmVkVGV4dDtcblxuICAgICAgICAgICAgbGV0IHBhcnNlZFZhbHVlID0gK2ZpbHRlcmVkVGV4dDtcbiAgICAgICAgICAgIHJldHVybiBpc05hTihwYXJzZWRWYWx1ZSkgPyBudWxsIDogcGFyc2VkVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXBlYXQoZXZlbnQsIGludGVydmFsLCBkaXIpIHtcbiAgICAgICAgbGV0IGkgPSBpbnRlcnZhbCB8fCA1MDA7XG5cbiAgICAgICAgdGhpcy5jbGVhclRpbWVyKCk7XG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVwZWF0KGV2ZW50LCA0MCwgZGlyKTtcbiAgICAgICAgfSwgaSk7XG5cbiAgICAgICAgdGhpcy5zcGluKGV2ZW50LCBkaXIpO1xuICAgIH1cblxuICAgIHNwaW4oZXZlbnQsIGRpcikge1xuICAgICAgICBsZXQgc3RlcCA9IHRoaXMuc3RlcCAqIGRpcjtcbiAgICAgICAgbGV0IGN1cnJlbnRWYWx1ZSA9IHRoaXMucGFyc2VWYWx1ZSh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUpIHx8IDA7XG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IHRoaXMudmFsaWRhdGVWYWx1ZShjdXJyZW50VmFsdWUgKyBzdGVwKTtcbiAgICAgICAgaWYgKHRoaXMubWF4bGVuZ3RoICYmIHRoaXMubWF4bGVuZ3RoIDwgdGhpcy5mb3JtYXRWYWx1ZShuZXdWYWx1ZSkubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZUlucHV0KG5ld1ZhbHVlLCBudWxsLCAnc3BpbicpO1xuICAgICAgICB0aGlzLnVwZGF0ZU1vZGVsKGV2ZW50LCBuZXdWYWx1ZSk7XG5cbiAgICAgICAgdGhpcy5oYW5kbGVPbklucHV0KGV2ZW50LCBjdXJyZW50VmFsdWUsIG5ld1ZhbHVlKTtcbiAgICB9XG5cbiAgICBvblVwQnV0dG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB0aGlzLnJlcGVhdChldmVudCwgbnVsbCwgMSk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgb25VcEJ1dHRvbk1vdXNlVXAoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJUaW1lcigpO1xuICAgIH1cblxuICAgIG9uVXBCdXR0b25Nb3VzZUxlYXZlKCkge1xuICAgICAgICB0aGlzLmNsZWFyVGltZXIoKTtcbiAgICB9XG5cbiAgICBvblVwQnV0dG9uS2V5RG93bihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzIgfHwgZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgIHRoaXMucmVwZWF0KGV2ZW50LCBudWxsLCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uVXBCdXR0b25LZXlVcCgpIHtcbiAgICAgICAgdGhpcy5jbGVhclRpbWVyKCk7XG4gICAgfVxuXG4gICAgb25Eb3duQnV0dG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB0aGlzLnJlcGVhdChldmVudCwgbnVsbCwgLTEpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIG9uRG93bkJ1dHRvbk1vdXNlVXAoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJUaW1lcigpO1xuICAgIH1cblxuICAgIG9uRG93bkJ1dHRvbk1vdXNlTGVhdmUoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJUaW1lcigpO1xuICAgIH1cblxuICAgIG9uRG93bkJ1dHRvbktleVVwKCkge1xuICAgICAgICB0aGlzLmNsZWFyVGltZXIoKTtcbiAgICB9XG5cbiAgICBvbkRvd25CdXR0b25LZXlEb3duKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzMiB8fCBldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgdGhpcy5yZXBlYXQoZXZlbnQsIG51bGwsIC0xKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uVXNlcklucHV0KGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmlzU3BlY2lhbENoYXIpIHtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IHRoaXMubGFzdFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNTcGVjaWFsQ2hhciA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uSW5wdXRLZXlEb3duKGV2ZW50KSB7XG4gICAgICAgIHRoaXMubGFzdFZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQuYWx0S2V5KSB7XG4gICAgICAgICAgICB0aGlzLmlzU3BlY2lhbENoYXIgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNlbGVjdGlvblN0YXJ0ID0gZXZlbnQudGFyZ2V0LnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICBsZXQgc2VsZWN0aW9uRW5kID0gZXZlbnQudGFyZ2V0LnNlbGVjdGlvbkVuZDtcbiAgICAgICAgbGV0IGlucHV0VmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgIGxldCBuZXdWYWx1ZVN0ciA9IG51bGw7XG5cbiAgICAgICAgaWYgKGV2ZW50LmFsdEtleSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoZXZlbnQud2hpY2gpIHtcbiAgICAgICAgICAgIC8vdXBcbiAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgdGhpcy5zcGluKGV2ZW50LCAxKTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vZG93blxuICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICB0aGlzLnNwaW4oZXZlbnQsIC0xKTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vbGVmdFxuICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNOdW1lcmFsQ2hhcihpbnB1dFZhbHVlLmNoYXJBdChzZWxlY3Rpb25TdGFydCAtIDEpKSkge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvL3JpZ2h0XG4gICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc051bWVyYWxDaGFyKGlucHV0VmFsdWUuY2hhckF0KHNlbGVjdGlvblN0YXJ0KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy9iYWNrc3BhY2VcbiAgICAgICAgICAgIGNhc2UgODoge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0aW9uU3RhcnQgPT09IHNlbGVjdGlvbkVuZCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGVsZXRlQ2hhciA9IGlucHV0VmFsdWUuY2hhckF0KHNlbGVjdGlvblN0YXJ0IC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkZWNpbWFsQ2hhckluZGV4ID0gaW5wdXRWYWx1ZS5zZWFyY2godGhpcy5fZGVjaW1hbCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RlY2ltYWwubGFzdEluZGV4ID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc051bWVyYWxDaGFyKGRlbGV0ZUNoYXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZ3JvdXAudGVzdChkZWxldGVDaGFyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2dyb3VwLmxhc3RJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVTdHIgPSBpbnB1dFZhbHVlLnNsaWNlKDAsIHNlbGVjdGlvblN0YXJ0IC0gMikgKyBpbnB1dFZhbHVlLnNsaWNlKHNlbGVjdGlvblN0YXJ0IC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9kZWNpbWFsLnRlc3QoZGVsZXRlQ2hhcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9kZWNpbWFsLmxhc3RJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKHNlbGVjdGlvblN0YXJ0IC0gMSwgc2VsZWN0aW9uU3RhcnQgLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRlY2ltYWxDaGFySW5kZXggPiAwICYmIHNlbGVjdGlvblN0YXJ0ID4gZGVjaW1hbENoYXJJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlU3RyID0gaW5wdXRWYWx1ZS5zbGljZSgwLCBzZWxlY3Rpb25TdGFydCAtIDEpICsgJzAnICsgaW5wdXRWYWx1ZS5zbGljZShzZWxlY3Rpb25TdGFydCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChkZWNpbWFsQ2hhckluZGV4ID4gMCAmJiBkZWNpbWFsQ2hhckluZGV4ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVTdHIgPSBpbnB1dFZhbHVlLnNsaWNlKDAsIHNlbGVjdGlvblN0YXJ0IC0gMSkgKyAnMCcgKyBpbnB1dFZhbHVlLnNsaWNlKHNlbGVjdGlvblN0YXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZVN0ciA9IHRoaXMucGFyc2VWYWx1ZShuZXdWYWx1ZVN0cikgPiAwID8gbmV3VmFsdWVTdHIgOiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlU3RyID0gaW5wdXRWYWx1ZS5zbGljZSgwLCBzZWxlY3Rpb25TdGFydCAtIDEpICsgaW5wdXRWYWx1ZS5zbGljZShzZWxlY3Rpb25TdGFydCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKGV2ZW50LCBuZXdWYWx1ZVN0ciwgbnVsbCwgJ2RlbGV0ZS1zaW5nbGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlU3RyID0gdGhpcy5kZWxldGVSYW5nZShpbnB1dFZhbHVlLCBzZWxlY3Rpb25TdGFydCwgc2VsZWN0aW9uRW5kKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZShldmVudCwgbmV3VmFsdWVTdHIsIG51bGwsICdkZWxldGUtcmFuZ2UnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZGVsXG4gICAgICAgICAgICBjYXNlIDQ2OlxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0aW9uU3RhcnQgPT09IHNlbGVjdGlvbkVuZCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGVsZXRlQ2hhciA9IGlucHV0VmFsdWUuY2hhckF0KHNlbGVjdGlvblN0YXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRlY2ltYWxDaGFySW5kZXggPSBpbnB1dFZhbHVlLnNlYXJjaCh0aGlzLl9kZWNpbWFsKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGVjaW1hbC5sYXN0SW5kZXggPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTnVtZXJhbENoYXIoZGVsZXRlQ2hhcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9ncm91cC50ZXN0KGRlbGV0ZUNoYXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ3JvdXAubGFzdEluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZVN0ciA9IGlucHV0VmFsdWUuc2xpY2UoMCwgc2VsZWN0aW9uU3RhcnQpICsgaW5wdXRWYWx1ZS5zbGljZShzZWxlY3Rpb25TdGFydCArIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fZGVjaW1hbC50ZXN0KGRlbGV0ZUNoYXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGVjaW1hbC5sYXN0SW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShzZWxlY3Rpb25TdGFydCArIDEsIHNlbGVjdGlvblN0YXJ0ICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChkZWNpbWFsQ2hhckluZGV4ID4gMCAmJiBzZWxlY3Rpb25TdGFydCA+IGRlY2ltYWxDaGFySW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZVN0ciA9IGlucHV0VmFsdWUuc2xpY2UoMCwgc2VsZWN0aW9uU3RhcnQpICsgJzAnICsgaW5wdXRWYWx1ZS5zbGljZShzZWxlY3Rpb25TdGFydCArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZGVjaW1hbENoYXJJbmRleCA+IDAgJiYgZGVjaW1hbENoYXJJbmRleCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlU3RyID0gaW5wdXRWYWx1ZS5zbGljZSgwLCBzZWxlY3Rpb25TdGFydCkgKyAnMCcgKyBpbnB1dFZhbHVlLnNsaWNlKHNlbGVjdGlvblN0YXJ0ICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVTdHIgPSB0aGlzLnBhcnNlVmFsdWUobmV3VmFsdWVTdHIpID4gMCA/IG5ld1ZhbHVlU3RyIDogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZVN0ciA9IGlucHV0VmFsdWUuc2xpY2UoMCwgc2VsZWN0aW9uU3RhcnQpICsgaW5wdXRWYWx1ZS5zbGljZShzZWxlY3Rpb25TdGFydCArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZShldmVudCwgbmV3VmFsdWVTdHIsIG51bGwsICdkZWxldGUtYmFjay1zaW5nbGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlU3RyID0gdGhpcy5kZWxldGVSYW5nZShpbnB1dFZhbHVlLCBzZWxlY3Rpb25TdGFydCwgc2VsZWN0aW9uRW5kKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZShldmVudCwgbmV3VmFsdWVTdHIsIG51bGwsICdkZWxldGUtcmFuZ2UnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25JbnB1dEtleVByZXNzKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBjb2RlID0gZXZlbnQud2hpY2ggfHwgZXZlbnQua2V5Q29kZTtcbiAgICAgICAgbGV0IGNoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpO1xuICAgICAgICBjb25zdCBpc0RlY2ltYWxTaWduID0gdGhpcy5pc0RlY2ltYWxTaWduKGNoYXIpO1xuICAgICAgICBjb25zdCBpc01pbnVzU2lnbiA9IHRoaXMuaXNNaW51c1NpZ24oY2hhcik7XG5cbiAgICAgICAgaWYgKCg0OCA8PSBjb2RlICYmIGNvZGUgPD0gNTcpIHx8IGlzTWludXNTaWduIHx8IGlzRGVjaW1hbFNpZ24pIHtcbiAgICAgICAgICAgIHRoaXMuaW5zZXJ0KGV2ZW50LCBjaGFyLCB7IGlzRGVjaW1hbFNpZ24sIGlzTWludXNTaWduIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QYXN0ZShldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgZGF0YSA9IChldmVudC5jbGlwYm9hcmREYXRhIHx8IHdpbmRvd1snY2xpcGJvYXJkRGF0YSddKS5nZXREYXRhKCdUZXh0Jyk7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICBsZXQgZmlsdGVyZWREYXRhID0gdGhpcy5wYXJzZVZhbHVlKGRhdGEpO1xuICAgICAgICAgICAgaWYgKGZpbHRlcmVkRGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnNlcnQoZXZlbnQsIGZpbHRlcmVkRGF0YS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzTWludXNTaWduKGNoYXIpIHtcbiAgICAgICAgaWYgKHRoaXMuX21pbnVzU2lnbi50ZXN0KGNoYXIpKSB7XG4gICAgICAgICAgICB0aGlzLl9taW51c1NpZ24ubGFzdEluZGV4ID0gMDtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlzRGVjaW1hbFNpZ24oY2hhcikge1xuICAgICAgICBpZiAodGhpcy5fZGVjaW1hbC50ZXN0KGNoYXIpKSB7XG4gICAgICAgICAgICB0aGlzLl9kZWNpbWFsLmxhc3RJbmRleCA9IDA7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpbnNlcnQoZXZlbnQsIHRleHQsIHNpZ24gPSB7IGlzRGVjaW1hbFNpZ246IGZhbHNlLCBpc01pbnVzU2lnbjogZmFsc2UgfSkge1xuICAgICAgICBsZXQgc2VsZWN0aW9uU3RhcnQgPSB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgIGxldCBzZWxlY3Rpb25FbmQgPSB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kO1xuICAgICAgICBsZXQgaW5wdXRWYWx1ZSA9IHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZS50cmltKCk7XG4gICAgICAgIGNvbnN0IGRlY2ltYWxDaGFySW5kZXggPSBpbnB1dFZhbHVlLnNlYXJjaCh0aGlzLl9kZWNpbWFsKTtcbiAgICAgICAgdGhpcy5fZGVjaW1hbC5sYXN0SW5kZXggPSAwO1xuICAgICAgICBjb25zdCBtaW51c0NoYXJJbmRleCA9IGlucHV0VmFsdWUuc2VhcmNoKHRoaXMuX21pbnVzU2lnbik7XG4gICAgICAgIHRoaXMuX21pbnVzU2lnbi5sYXN0SW5kZXggPSAwO1xuICAgICAgICBsZXQgbmV3VmFsdWVTdHI7XG5cbiAgICAgICAgaWYgKHNpZ24uaXNNaW51c1NpZ24pIHtcbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb25TdGFydCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlU3RyID0gaW5wdXRWYWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAobWludXNDaGFySW5kZXggPT09IC0xIHx8IHNlbGVjdGlvbkVuZCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZVN0ciA9IHRoaXMuaW5zZXJ0VGV4dChpbnB1dFZhbHVlLCB0ZXh0LCAwLCBzZWxlY3Rpb25FbmQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUoZXZlbnQsIG5ld1ZhbHVlU3RyLCB0ZXh0LCAnaW5zZXJ0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2lnbi5pc0RlY2ltYWxTaWduKSB7XG4gICAgICAgICAgICBpZiAoZGVjaW1hbENoYXJJbmRleCA+IDAgJiYgc2VsZWN0aW9uU3RhcnQgPT09IGRlY2ltYWxDaGFySW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKGV2ZW50LCBpbnB1dFZhbHVlLCB0ZXh0LCAnaW5zZXJ0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkZWNpbWFsQ2hhckluZGV4ID4gc2VsZWN0aW9uU3RhcnQgJiYgZGVjaW1hbENoYXJJbmRleCA8IHNlbGVjdGlvbkVuZCkge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlU3RyID0gdGhpcy5pbnNlcnRUZXh0KGlucHV0VmFsdWUsIHRleHQsIHNlbGVjdGlvblN0YXJ0LCBzZWxlY3Rpb25FbmQpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUoZXZlbnQsIG5ld1ZhbHVlU3RyLCB0ZXh0LCAnaW5zZXJ0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBtYXhGcmFjdGlvbkRpZ2l0cyA9IHRoaXMubnVtYmVyRm9ybWF0LnJlc29sdmVkT3B0aW9ucygpLm1heGltdW1GcmFjdGlvbkRpZ2l0cztcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdGlvbiA9IHNlbGVjdGlvblN0YXJ0ICE9PSBzZWxlY3Rpb25FbmQgPyAncmFuZ2UtaW5zZXJ0JyA6ICdpbnNlcnQnO1xuXG4gICAgICAgICAgICBpZiAoZGVjaW1hbENoYXJJbmRleCA+IDAgJiYgc2VsZWN0aW9uU3RhcnQgPiBkZWNpbWFsQ2hhckluZGV4KSB7XG4gICAgICAgICAgICAgICAgaWYgKChzZWxlY3Rpb25TdGFydCArIHRleHQubGVuZ3RoIC0gKGRlY2ltYWxDaGFySW5kZXggKyAxKSkgPD0gbWF4RnJhY3Rpb25EaWdpdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVTdHIgPSBpbnB1dFZhbHVlLnNsaWNlKDAsIHNlbGVjdGlvblN0YXJ0KSArIHRleHQgKyBpbnB1dFZhbHVlLnNsaWNlKHNlbGVjdGlvblN0YXJ0ICsgdGV4dC5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKGV2ZW50LCBuZXdWYWx1ZVN0ciwgdGV4dCwgb3BlcmF0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZVN0ciA9IHRoaXMuaW5zZXJ0VGV4dChpbnB1dFZhbHVlLCB0ZXh0LCBzZWxlY3Rpb25TdGFydCwgc2VsZWN0aW9uRW5kKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKGV2ZW50LCBuZXdWYWx1ZVN0ciwgdGV4dCwgb3BlcmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluc2VydFRleHQodmFsdWUsIHRleHQsIHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgbGV0IHRleHRTcGxpdCA9IHRleHQuc3BsaXQoJy4nKTtcblxuICAgICAgICBpZiAodGV4dFNwbGl0Lmxlbmd0aCA9PSAyKSB7XG4gICAgICAgICAgICBjb25zdCBkZWNpbWFsQ2hhckluZGV4ID0gdmFsdWUuc2xpY2Uoc3RhcnQsIGVuZCkuc2VhcmNoKHRoaXMuX2RlY2ltYWwpO1xuICAgICAgICAgICAgdGhpcy5fZGVjaW1hbC5sYXN0SW5kZXggPSAwO1xuICAgICAgICAgICAgcmV0dXJuIChkZWNpbWFsQ2hhckluZGV4ID4gMCkgPyB2YWx1ZS5zbGljZSgwLCBzdGFydCkgKyB0aGlzLmZvcm1hdFZhbHVlKHRleHQpICsgdmFsdWUuc2xpY2UoZW5kKSA6ICh2YWx1ZSB8fCB0aGlzLmZvcm1hdFZhbHVlKHRleHQpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgoZW5kIC0gc3RhcnQpID09PSB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcm1hdFZhbHVlKHRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0YXJ0ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGV4dCArIHZhbHVlLnNsaWNlKGVuZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZW5kID09PSB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5zbGljZSgwLCBzdGFydCkgKyB0ZXh0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnNsaWNlKDAsIHN0YXJ0KSArIHRleHQgKyB2YWx1ZS5zbGljZShlbmQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVsZXRlUmFuZ2UodmFsdWUsIHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgbGV0IG5ld1ZhbHVlU3RyO1xuXG4gICAgICAgIGlmICgoZW5kIC0gc3RhcnQpID09PSB2YWx1ZS5sZW5ndGgpXG4gICAgICAgICAgICBuZXdWYWx1ZVN0ciA9ICcnO1xuICAgICAgICBlbHNlIGlmIChzdGFydCA9PT0gMClcbiAgICAgICAgICAgIG5ld1ZhbHVlU3RyID0gdmFsdWUuc2xpY2UoZW5kKTtcbiAgICAgICAgZWxzZSBpZiAoZW5kID09PSB2YWx1ZS5sZW5ndGgpXG4gICAgICAgICAgICBuZXdWYWx1ZVN0ciA9IHZhbHVlLnNsaWNlKDAsIHN0YXJ0KTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgbmV3VmFsdWVTdHIgPSB2YWx1ZS5zbGljZSgwLCBzdGFydCkgKyB2YWx1ZS5zbGljZShlbmQpO1xuXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZVN0cjtcbiAgICB9XG5cbiAgICBpbml0Q3Vyc29yKCkge1xuICAgICAgICBsZXQgc2VsZWN0aW9uU3RhcnQgPSB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgIGxldCBpbnB1dFZhbHVlID0gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlO1xuICAgICAgICBsZXQgdmFsdWVMZW5ndGggPSBpbnB1dFZhbHVlLmxlbmd0aDtcbiAgICAgICAgbGV0IGluZGV4ID0gbnVsbDtcblxuICAgICAgICBsZXQgY2hhciA9IGlucHV0VmFsdWUuY2hhckF0KHNlbGVjdGlvblN0YXJ0KTtcbiAgICAgICAgaWYgKHRoaXMuaXNOdW1lcmFsQ2hhcihjaGFyKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9sZWZ0XG4gICAgICAgIGxldCBpID0gc2VsZWN0aW9uU3RhcnQgLSAxO1xuICAgICAgICB3aGlsZSAoaSA+PSAwKSB7XG4gICAgICAgICAgICBjaGFyID0gaW5wdXRWYWx1ZS5jaGFyQXQoaSk7XG4gICAgICAgICAgICBpZiAodGhpcy5pc051bWVyYWxDaGFyKGNoYXIpKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UoaW5kZXggKyAxLCBpbmRleCArIDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaSA9IHNlbGVjdGlvblN0YXJ0ICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChpIDwgdmFsdWVMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjaGFyID0gaW5wdXRWYWx1ZS5jaGFyQXQoaSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNOdW1lcmFsQ2hhcihjaGFyKSkge1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKGluZGV4LCBpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbklucHV0Q2xpY2soKSB7XG4gICAgICAgIHRoaXMuaW5pdEN1cnNvcigpO1xuICAgIH1cblxuICAgIGlzTnVtZXJhbENoYXIoY2hhcikge1xuICAgICAgICBpZiAoY2hhci5sZW5ndGggPT09IDEgJiYgKHRoaXMuX251bWVyYWwudGVzdChjaGFyKSB8fCB0aGlzLl9kZWNpbWFsLnRlc3QoY2hhcikgfHwgdGhpcy5fZ3JvdXAudGVzdChjaGFyKSB8fCB0aGlzLl9taW51c1NpZ24udGVzdChjaGFyKSkpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRSZWdleCgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVzZXRSZWdleCgpIHtcbiAgICAgICAgdGhpcy5fbnVtZXJhbC5sYXN0SW5kZXggPSAgMDtcbiAgICAgICAgdGhpcy5fZGVjaW1hbC5sYXN0SW5kZXggPSAgMDtcbiAgICAgICAgdGhpcy5fZ3JvdXAubGFzdEluZGV4ID0gIDA7XG4gICAgICAgIHRoaXMuX21pbnVzU2lnbi5sYXN0SW5kZXggPSAgMDtcbiAgICB9XG5cbiAgICB1cGRhdGVWYWx1ZShldmVudCwgdmFsdWVTdHIsIGluc2VydGVkVmFsdWVTdHIsIG9wZXJhdGlvbikge1xuICAgICAgICBsZXQgY3VycmVudFZhbHVlID0gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlO1xuICAgICAgICBsZXQgbmV3VmFsdWUgPSBudWxsO1xuXG4gICAgICAgIGlmICh2YWx1ZVN0ciAhPSBudWxsKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMucGFyc2VWYWx1ZSh2YWx1ZVN0cik7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUlucHV0KG5ld1ZhbHVlLCBpbnNlcnRlZFZhbHVlU3RyLCBvcGVyYXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oYW5kbGVPbklucHV0KGV2ZW50LCBjdXJyZW50VmFsdWUsIG5ld1ZhbHVlKTtcbiAgICB9XG5cbiAgICBoYW5kbGVPbklucHV0KGV2ZW50LCBjdXJyZW50VmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVmFsdWVDaGFuZ2VkKGN1cnJlbnRWYWx1ZSwgbmV3VmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLm9uSW5wdXQuZW1pdCh7IG9yaWdpbmFsRXZlbnQ6IGV2ZW50LCB2YWx1ZTogbmV3VmFsdWUgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc1ZhbHVlQ2hhbmdlZChjdXJyZW50VmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbCAmJiBjdXJyZW50VmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGxldCBwYXJzZWRDdXJyZW50VmFsdWUgPSAodHlwZW9mIGN1cnJlbnRWYWx1ZSA9PT0gJ3N0cmluZycpID8gdGhpcy5wYXJzZVZhbHVlKGN1cnJlbnRWYWx1ZSkgOiBjdXJyZW50VmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gbmV3VmFsdWUgIT09IHBhcnNlZEN1cnJlbnRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZVZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLm1pbiAhPT0gbnVsbCAmJiB2YWx1ZSA8IHRoaXMubWluKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5taW47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5tYXggIT09IG51bGwgJiYgdmFsdWUgPiB0aGlzLm1heCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWF4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSAnLScpIHsgLy8gTWludXMgc2lnblxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgdXBkYXRlSW5wdXQodmFsdWUsIGluc2VydGVkVmFsdWVTdHIsIG9wZXJhdGlvbikge1xuICAgICAgICBpbnNlcnRlZFZhbHVlU3RyID0gaW5zZXJ0ZWRWYWx1ZVN0ciB8fCAnJztcblxuICAgICAgICBsZXQgaW5wdXRWYWx1ZSA9IHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZTtcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gdGhpcy5mb3JtYXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIGxldCBjdXJyZW50TGVuZ3RoID0gaW5wdXRWYWx1ZS5sZW5ndGg7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRMZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKDAsIDApO1xuICAgICAgICAgICAgdGhpcy5pbml0Q3Vyc29yKCk7XG4gICAgICAgICAgICBjb25zdCBwcmVmaXhMZW5ndGggPSAodGhpcy5wcmVmaXhDaGFyIHx8ICcnKS5sZW5ndGg7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25FbmQgPSBwcmVmaXhMZW5ndGggKyBpbnNlcnRlZFZhbHVlU3RyLmxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShzZWxlY3Rpb25FbmQsIHNlbGVjdGlvbkVuZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgc2VsZWN0aW9uU3RhcnQgPSB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgICAgICBsZXQgc2VsZWN0aW9uRW5kID0gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbkVuZDtcbiAgICAgICAgICAgIGlmICh0aGlzLm1heGxlbmd0aCAmJiB0aGlzLm1heGxlbmd0aCA8IG5ld1ZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgICAgICBsZXQgbmV3TGVuZ3RoID0gbmV3VmFsdWUubGVuZ3RoO1xuXG4gICAgICAgICAgICBpZiAob3BlcmF0aW9uID09PSAncmFuZ2UtaW5zZXJ0Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0VmFsdWUgPSB0aGlzLnBhcnNlVmFsdWUoKGlucHV0VmFsdWUgfHwgJycpLnNsaWNlKDAsIHNlbGVjdGlvblN0YXJ0KSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRWYWx1ZVN0ciA9IHN0YXJ0VmFsdWUgIT09IG51bGwgPyBzdGFydFZhbHVlLnRvU3RyaW5nKCkgOiAnJztcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydEV4cHIgPSBzdGFydFZhbHVlU3RyLnNwbGl0KCcnKS5qb2luKGAoJHt0aGlzLmdyb3VwQ2hhcn0pP2ApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNSZWdleCA9IG5ldyBSZWdFeHAoc3RhcnRFeHByLCAnZycpO1xuICAgICAgICAgICAgICAgIHNSZWdleC50ZXN0KG5ld1ZhbHVlKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRFeHByID0gaW5zZXJ0ZWRWYWx1ZVN0ci5zcGxpdCgnJykuam9pbihgKCR7dGhpcy5ncm91cENoYXJ9KT9gKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0UmVnZXggPSBuZXcgUmVnRXhwKHRFeHByLCAnZycpO1xuICAgICAgICAgICAgICAgIHRSZWdleC50ZXN0KG5ld1ZhbHVlLnNsaWNlKHNSZWdleC5sYXN0SW5kZXgpKTtcblxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbkVuZCA9IHNSZWdleC5sYXN0SW5kZXggKyB0UmVnZXgubGFzdEluZGV4O1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShzZWxlY3Rpb25FbmQsIHNlbGVjdGlvbkVuZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChuZXdMZW5ndGggPT09IGN1cnJlbnRMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAob3BlcmF0aW9uID09PSAnaW5zZXJ0JyB8fCBvcGVyYXRpb24gPT09ICdkZWxldGUtYmFjay1zaW5nbGUnKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2Uoc2VsZWN0aW9uRW5kICsgMSwgc2VsZWN0aW9uRW5kICsgMSk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAob3BlcmF0aW9uID09PSAnZGVsZXRlLXNpbmdsZScpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShzZWxlY3Rpb25FbmQgLSAxLCBzZWxlY3Rpb25FbmQgLSAxKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChvcGVyYXRpb24gPT09ICdkZWxldGUtcmFuZ2UnIHx8IG9wZXJhdGlvbiA9PT0gJ3NwaW4nKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2Uoc2VsZWN0aW9uRW5kLCBzZWxlY3Rpb25FbmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3BlcmF0aW9uID09PSAnZGVsZXRlLWJhY2stc2luZ2xlJykge1xuICAgICAgICAgICAgICAgIGxldCBwcmV2Q2hhciA9IGlucHV0VmFsdWUuY2hhckF0KHNlbGVjdGlvbkVuZCAtIDEpO1xuICAgICAgICAgICAgICAgIGxldCBuZXh0Q2hhciA9IGlucHV0VmFsdWUuY2hhckF0KHNlbGVjdGlvbkVuZCk7XG4gICAgICAgICAgICAgICAgbGV0IGRpZmYgPSBjdXJyZW50TGVuZ3RoIC0gbmV3TGVuZ3RoO1xuICAgICAgICAgICAgICAgIGxldCBpc0dyb3VwQ2hhciA9IHRoaXMuX2dyb3VwLnRlc3QobmV4dENoYXIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzR3JvdXBDaGFyICYmIGRpZmYgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uRW5kICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFpc0dyb3VwQ2hhciAmJiB0aGlzLmlzTnVtZXJhbENoYXIocHJldkNoYXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbkVuZCArPSAoLTEgKiBkaWZmKSArIDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5fZ3JvdXAubGFzdEluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2Uoc2VsZWN0aW9uRW5kLCBzZWxlY3Rpb25FbmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uRW5kICsgKG5ld0xlbmd0aCAtIGN1cnJlbnRMZW5ndGgpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShzZWxlY3Rpb25FbmQsIHNlbGVjdGlvbkVuZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXZhbHVlbm93JywgdmFsdWUpO1xuICAgIH1cblxuICAgIG9uSW5wdXRGb2N1cyhldmVudCkge1xuICAgICAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uRm9jdXMuZW1pdChldmVudCk7XG4gICAgfVxuXG4gICAgb25JbnB1dEJsdXIoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gdGhpcy52YWxpZGF0ZVZhbHVlKHRoaXMucGFyc2VWYWx1ZSh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUpKTtcbiAgICAgICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdGhpcy5mb3JtYXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtdmFsdWVub3cnLCBuZXdWYWx1ZSk7XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWwoZXZlbnQsIG5ld1ZhbHVlKTtcblxuICAgICAgICB0aGlzLm9uQmx1ci5lbWl0KGV2ZW50KTtcbiAgICB9XG5cbiAgICBmb3JtYXR0ZWRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0VmFsdWUodGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlTW9kZWwoZXZlbnQsIHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub25Nb2RlbFRvdWNoZWQoKTtcbiAgICB9XG5cbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIDogdm9pZCB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICAgIH1cblxuICAgIHNldERpc2FibGVkU3RhdGUodmFsOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSB2YWw7XG4gICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgZ2V0IGZpbGxlZCgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnZhbHVlICE9IG51bGwgJiYgdGhpcy52YWx1ZS50b1N0cmluZygpLmxlbmd0aCA+IDApXG4gICAgfVxuXG4gICAgY2xlYXJUaW1lcigpIHtcbiAgICAgICAgaWYgKHRoaXMudGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSxJbnB1dFRleHRNb2R1bGUsIEJ1dHRvbk1vZHVsZV0sXG4gICAgZXhwb3J0czogW0lucHV0TnVtYmVyXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtJbnB1dE51bWJlcl1cbn0pXG5leHBvcnQgY2xhc3MgSW5wdXROdW1iZXJNb2R1bGUgeyB9XG4iXX0=