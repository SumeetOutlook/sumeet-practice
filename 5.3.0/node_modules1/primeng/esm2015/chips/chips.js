import { NgModule, Component, ElementRef, Input, Output, EventEmitter, ContentChildren, forwardRef, ViewChild, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule, PrimeTemplate } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["inputtext"];
function Chips_li_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Chips_li_2_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 11);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r6.field ? ctx_r6.resolveFieldData(item_r2, ctx_r6.field) : item_r2);
} }
function Chips_li_2_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 12);
    ɵngcc0.ɵɵlistener("click", function Chips_li_2_span_4_Template_span_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); const i_r3 = ɵngcc0.ɵɵnextContext().index; const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.removeItem($event, i_r3); });
    ɵngcc0.ɵɵelementEnd();
} }
const _c1 = function (a0) { return { $implicit: a0 }; };
function Chips_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 6, 7);
    ɵngcc0.ɵɵlistener("click", function Chips_li_2_Template_li_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const item_r2 = ctx.$implicit; const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.onItemClick($event, item_r2); });
    ɵngcc0.ɵɵtemplate(2, Chips_li_2_ng_container_2_Template, 1, 0, "ng-container", 8);
    ɵngcc0.ɵɵtemplate(3, Chips_li_2_span_3_Template, 2, 1, "span", 9);
    ɵngcc0.ɵɵtemplate(4, Chips_li_2_span_4_Template, 1, 0, "span", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.itemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(4, _c1, item_r2));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.itemTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.disabled);
} }
const _c2 = function (a1, a2) { return { "p-inputtext p-chips-multiple-container": true, "p-focus": a1, "p-disabled": a2 }; };
export const CHIPS_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Chips),
    multi: true
};
export class Chips {
    constructor(el, cd) {
        this.el = el;
        this.cd = cd;
        this.allowDuplicate = true;
        this.onAdd = new EventEmitter();
        this.onRemove = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onChipClick = new EventEmitter();
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'item':
                    this.itemTemplate = item.template;
                    break;
                default:
                    this.itemTemplate = item.template;
                    break;
            }
        });
    }
    onClick() {
        this.inputViewChild.nativeElement.focus();
    }
    onInput() {
        this.updateFilledState();
    }
    onPaste(event) {
        if (this.separator) {
            let pastedData = (event.clipboardData || window['clipboardData']).getData('Text');
            pastedData.split(this.separator).forEach(val => {
                this.addItem(event, val, true);
            });
            this.inputViewChild.nativeElement.value = '';
        }
        this.updateFilledState();
    }
    updateFilledState() {
        if (!this.value || this.value.length === 0) {
            this.filled = (this.inputViewChild.nativeElement && this.inputViewChild.nativeElement.value != '');
        }
        else {
            this.filled = true;
        }
    }
    onItemClick(event, item) {
        this.onChipClick.emit({
            originalEvent: event,
            value: item
        });
    }
    writeValue(value) {
        this.value = value;
        this.updateMaxedOut();
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
    resolveFieldData(data, field) {
        if (data && field) {
            if (field.indexOf('.') == -1) {
                return data[field];
            }
            else {
                let fields = field.split('.');
                let value = data;
                for (var i = 0, len = fields.length; i < len; ++i) {
                    value = value[fields[i]];
                }
                return value;
            }
        }
        else {
            return null;
        }
    }
    onInputFocus(event) {
        this.focus = true;
        this.onFocus.emit(event);
    }
    onInputBlur(event) {
        this.focus = false;
        if (this.addOnBlur && this.inputViewChild.nativeElement.value) {
            this.addItem(event, this.inputViewChild.nativeElement.value, false);
        }
        this.onModelTouched();
        this.onBlur.emit(event);
    }
    removeItem(event, index) {
        if (this.disabled) {
            return;
        }
        let removedItem = this.value[index];
        this.value = this.value.filter((val, i) => i != index);
        this.onModelChange(this.value);
        this.onRemove.emit({
            originalEvent: event,
            value: removedItem
        });
        this.updateFilledState();
        this.updateMaxedOut();
    }
    addItem(event, item, preventDefault) {
        this.value = this.value || [];
        if (item && item.trim().length) {
            if (this.allowDuplicate || this.value.indexOf(item) === -1) {
                this.value = [...this.value, item];
                this.onModelChange(this.value);
                this.onAdd.emit({
                    originalEvent: event,
                    value: item
                });
            }
        }
        this.updateFilledState();
        this.updateMaxedOut();
        this.inputViewChild.nativeElement.value = '';
        if (preventDefault) {
            event.preventDefault();
        }
    }
    onKeydown(event) {
        switch (event.which) {
            //backspace
            case 8:
                if (this.inputViewChild.nativeElement.value.length === 0 && this.value && this.value.length > 0) {
                    this.value = [...this.value];
                    let removedItem = this.value.pop();
                    this.onModelChange(this.value);
                    this.onRemove.emit({
                        originalEvent: event,
                        value: removedItem
                    });
                    this.updateFilledState();
                }
                break;
            //enter
            case 13:
                this.addItem(event, this.inputViewChild.nativeElement.value, true);
                break;
            case 9:
                if (this.addOnTab && this.inputViewChild.nativeElement.value !== '') {
                    this.addItem(event, this.inputViewChild.nativeElement.value, true);
                }
                break;
            default:
                if (this.max && this.value && this.max === this.value.length) {
                    event.preventDefault();
                }
                else if (this.separator) {
                    if (this.separator === ',' && event.which === 188) {
                        this.addItem(event, this.inputViewChild.nativeElement.value, true);
                    }
                }
                break;
        }
    }
    updateMaxedOut() {
        if (this.inputViewChild && this.inputViewChild.nativeElement) {
            if (this.max && this.value && this.max === this.value.length)
                this.inputViewChild.nativeElement.disabled = true;
            else
                this.inputViewChild.nativeElement.disabled = this.disabled || false;
        }
    }
}
Chips.ɵfac = function Chips_Factory(t) { return new (t || Chips)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
Chips.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Chips, selectors: [["p-chips"]], contentQueries: function Chips_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function Chips_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inputViewChild = _t.first);
    } }, hostVars: 4, hostBindings: function Chips_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focus);
    } }, inputs: { allowDuplicate: "allowDuplicate", disabled: "disabled", style: "style", styleClass: "styleClass", field: "field", placeholder: "placeholder", max: "max", ariaLabelledBy: "ariaLabelledBy", tabindex: "tabindex", inputId: "inputId", inputStyle: "inputStyle", inputStyleClass: "inputStyleClass", addOnTab: "addOnTab", addOnBlur: "addOnBlur", separator: "separator" }, outputs: { onAdd: "onAdd", onRemove: "onRemove", onFocus: "onFocus", onBlur: "onBlur", onChipClick: "onChipClick" }, features: [ɵngcc0.ɵɵProvidersFeature([CHIPS_VALUE_ACCESSOR])], decls: 6, vars: 17, consts: [[3, "ngClass", "ngStyle", "click"], [3, "ngClass"], ["class", "p-chips-token", 3, "click", 4, "ngFor", "ngForOf"], [1, "p-chips-input-token"], ["type", "text", 3, "disabled", "ngStyle", "keydown", "input", "paste", "focus", "blur"], ["inputtext", ""], [1, "p-chips-token", 3, "click"], ["token", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "p-chips-token-label", 4, "ngIf"], ["class", "p-chips-token-icon pi pi-times-circle", 3, "click", 4, "ngIf"], [1, "p-chips-token-label"], [1, "p-chips-token-icon", "pi", "pi-times-circle", 3, "click"]], template: function Chips_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("click", function Chips_Template_div_click_0_listener() { return ctx.onClick(); });
        ɵngcc0.ɵɵelementStart(1, "ul", 1);
        ɵngcc0.ɵɵtemplate(2, Chips_li_2_Template, 5, 6, "li", 2);
        ɵngcc0.ɵɵelementStart(3, "li", 3);
        ɵngcc0.ɵɵelementStart(4, "input", 4, 5);
        ɵngcc0.ɵɵlistener("keydown", function Chips_Template_input_keydown_4_listener($event) { return ctx.onKeydown($event); })("input", function Chips_Template_input_input_4_listener() { return ctx.onInput(); })("paste", function Chips_Template_input_paste_4_listener($event) { return ctx.onPaste($event); })("focus", function Chips_Template_input_focus_4_listener($event) { return ctx.onInputFocus($event); })("blur", function Chips_Template_input_blur_4_listener($event) { return ctx.onInputBlur($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-chips p-component")("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(14, _c2, ctx.focus, ctx.disabled));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.value);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMap(ctx.inputStyleClass);
        ɵngcc0.ɵɵproperty("disabled", ctx.disabled)("ngStyle", ctx.inputStyle);
        ɵngcc0.ɵɵattribute("id", ctx.inputId)("placeholder", ctx.value && ctx.value.length ? null : ctx.placeholder)("tabindex", ctx.tabindex)("aria-labelledby", ctx.ariaLabelledBy);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgForOf, ɵngcc1.NgTemplateOutlet, ɵngcc1.NgIf], styles: [".p-chips{display:-ms-inline-flexbox;display:inline-flex}.p-chips-multiple-container{-ms-flex-align:center;align-items:center;cursor:text;display:-ms-flexbox;display:flex;list-style-type:none;margin:0;overflow:hidden;padding:0}.p-chips-token{-ms-flex:0 0 auto;-ms-flex-align:center;align-items:center;cursor:default;flex:0 0 auto}.p-chips-input-token,.p-chips-token{display:-ms-inline-flexbox;display:inline-flex}.p-chips-input-token{-ms-flex:1 1 auto;flex:1 1 auto}.p-chips-token-icon{cursor:pointer}.p-chips-input-token input{background-color:rgba(0,0,0,0);border:0;border-radius:0;box-shadow:none;margin:0;outline:0 none;padding:0;width:100%}.p-fluid .p-chips{display:-ms-flexbox;display:flex}"], encapsulation: 2, changeDetection: 0 });
Chips.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
Chips.propDecorators = {
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    disabled: [{ type: Input }],
    field: [{ type: Input }],
    placeholder: [{ type: Input }],
    max: [{ type: Input }],
    ariaLabelledBy: [{ type: Input }],
    tabindex: [{ type: Input }],
    inputId: [{ type: Input }],
    allowDuplicate: [{ type: Input }],
    inputStyle: [{ type: Input }],
    inputStyleClass: [{ type: Input }],
    addOnTab: [{ type: Input }],
    addOnBlur: [{ type: Input }],
    separator: [{ type: Input }],
    onAdd: [{ type: Output }],
    onRemove: [{ type: Output }],
    onFocus: [{ type: Output }],
    onBlur: [{ type: Output }],
    onChipClick: [{ type: Output }],
    inputViewChild: [{ type: ViewChild, args: ['inputtext',] }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Chips, [{
        type: Component,
        args: [{
                selector: 'p-chips',
                template: `
        <div [ngClass]="'p-chips p-component'" [ngStyle]="style" [class]="styleClass" (click)="onClick()">
            <ul [ngClass]="{'p-inputtext p-chips-multiple-container':true,'p-focus':focus,'p-disabled':disabled}">
                <li #token *ngFor="let item of value; let i = index;" class="p-chips-token" (click)="onItemClick($event, item)">
                    <ng-container *ngTemplateOutlet="itemTemplate; context: {$implicit: item}"></ng-container>
                    <span *ngIf="!itemTemplate" class="p-chips-token-label">{{field ? resolveFieldData(item,field) : item}}</span>
                    <span *ngIf="!disabled" class="p-chips-token-icon pi pi-times-circle" (click)="removeItem($event,i)"></span>
                </li>
                <li class="p-chips-input-token">
                    <input #inputtext type="text" [attr.id]="inputId" [attr.placeholder]="(value && value.length ? null : placeholder)" [attr.tabindex]="tabindex" (keydown)="onKeydown($event)"
                    (input)="onInput()" (paste)="onPaste($event)" [attr.aria-labelledby]="ariaLabelledBy" (focus)="onInputFocus($event)" (blur)="onInputBlur($event)" [disabled]="disabled" [ngStyle]="inputStyle" [class]="inputStyleClass">
                </li>
            </ul>
        </div>
    `,
                host: {
                    '[class.p-inputwrapper-filled]': 'filled',
                    '[class.p-inputwrapper-focus]': 'focus'
                },
                providers: [CHIPS_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-chips{display:-ms-inline-flexbox;display:inline-flex}.p-chips-multiple-container{-ms-flex-align:center;align-items:center;cursor:text;display:-ms-flexbox;display:flex;list-style-type:none;margin:0;overflow:hidden;padding:0}.p-chips-token{-ms-flex:0 0 auto;-ms-flex-align:center;align-items:center;cursor:default;flex:0 0 auto}.p-chips-input-token,.p-chips-token{display:-ms-inline-flexbox;display:inline-flex}.p-chips-input-token{-ms-flex:1 1 auto;flex:1 1 auto}.p-chips-token-icon{cursor:pointer}.p-chips-input-token input{background-color:rgba(0,0,0,0);border:0;border-radius:0;box-shadow:none;margin:0;outline:0 none;padding:0;width:100%}.p-fluid .p-chips{display:-ms-flexbox;display:flex}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { allowDuplicate: [{
            type: Input
        }], onAdd: [{
            type: Output
        }], onRemove: [{
            type: Output
        }], onFocus: [{
            type: Output
        }], onBlur: [{
            type: Output
        }], onChipClick: [{
            type: Output
        }], disabled: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], field: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], max: [{
            type: Input
        }], ariaLabelledBy: [{
            type: Input
        }], tabindex: [{
            type: Input
        }], inputId: [{
            type: Input
        }], inputStyle: [{
            type: Input
        }], inputStyleClass: [{
            type: Input
        }], addOnTab: [{
            type: Input
        }], addOnBlur: [{
            type: Input
        }], separator: [{
            type: Input
        }], inputViewChild: [{
            type: ViewChild,
            args: ['inputtext']
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
export class ChipsModule {
}
ChipsModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ChipsModule });
ChipsModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ChipsModule_Factory(t) { return new (t || ChipsModule)(); }, imports: [[CommonModule, InputTextModule, SharedModule], InputTextModule, SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ChipsModule, { declarations: function () { return [Chips]; }, imports: function () { return [CommonModule, InputTextModule, SharedModule]; }, exports: function () { return [Chips, InputTextModule, SharedModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ChipsModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, InputTextModule, SharedModule],
                exports: [Chips, InputTextModule, SharedModule],
                declarations: [Chips]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9jaGlwcy9jaGlwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxZQUFZLEVBQWtCLGVBQWUsRUFBdUIsVUFBVSxFQUFDLFNBQVMsRUFBQyx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoTyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFlBQVksRUFBQyxhQUFhLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxpQkFBaUIsRUFBdUIsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkUsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQVE7QUFDekMsSUFBRSxPQUFPLEVBQUUsaUJBQWlCO0FBQzVCLElBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7QUFDdEMsSUFBRSxLQUFLLEVBQUUsSUFBSTtBQUNiLENBQUMsQ0FBQztBQTRCRixNQUFNLE9BQU8sS0FBSztBQUFHLElBNERqQixZQUFtQixFQUFjLEVBQVMsRUFBcUI7QUFBSSxRQUFoRCxPQUFFLEdBQUYsRUFBRSxDQUFZO0FBQUMsUUFBUSxPQUFFLEdBQUYsRUFBRSxDQUFtQjtBQUFDLFFBeEN2RCxtQkFBYyxHQUFZLElBQUksQ0FBQztBQUM1QyxRQVdjLFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUM1RCxRQUNjLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUMvRCxRQUNjLFlB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LFlBQVksRUFBQyxlQUFlLEVBQUMsWUFBWSxDQUFDLGtCQUNwRCxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUMsZUFBZSxFQUFDLFlBQVksQ0FBQyxrQkFDN0MsWUFBWSxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQ3hCOzs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsQ29tcG9uZW50LEVsZW1lbnRSZWYsSW5wdXQsT3V0cHV0LEV2ZW50RW1pdHRlcixBZnRlckNvbnRlbnRJbml0LENvbnRlbnRDaGlsZHJlbixRdWVyeUxpc3QsVGVtcGxhdGVSZWYsZm9yd2FyZFJlZixWaWV3Q2hpbGQsQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9uLCBDaGFuZ2VEZXRlY3RvclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7U2hhcmVkTW9kdWxlLFByaW1lVGVtcGxhdGV9IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7SW5wdXRUZXh0TW9kdWxlfSBmcm9tICdwcmltZW5nL2lucHV0dGV4dCc7XG5pbXBvcnQge05HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgY29uc3QgQ0hJUFNfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENoaXBzKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1jaGlwcycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBbbmdDbGFzc109XCIncC1jaGlwcyBwLWNvbXBvbmVudCdcIiBbbmdTdHlsZV09XCJzdHlsZVwiIFtjbGFzc109XCJzdHlsZUNsYXNzXCIgKGNsaWNrKT1cIm9uQ2xpY2soKVwiPlxuICAgICAgICAgICAgPHVsIFtuZ0NsYXNzXT1cInsncC1pbnB1dHRleHQgcC1jaGlwcy1tdWx0aXBsZS1jb250YWluZXInOnRydWUsJ3AtZm9jdXMnOmZvY3VzLCdwLWRpc2FibGVkJzpkaXNhYmxlZH1cIj5cbiAgICAgICAgICAgICAgICA8bGkgI3Rva2VuICpuZ0Zvcj1cImxldCBpdGVtIG9mIHZhbHVlOyBsZXQgaSA9IGluZGV4O1wiIGNsYXNzPVwicC1jaGlwcy10b2tlblwiIChjbGljayk9XCJvbkl0ZW1DbGljaygkZXZlbnQsIGl0ZW0pXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpdGVtVGVtcGxhdGU7IGNvbnRleHQ6IHskaW1wbGljaXQ6IGl0ZW19XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWl0ZW1UZW1wbGF0ZVwiIGNsYXNzPVwicC1jaGlwcy10b2tlbi1sYWJlbFwiPnt7ZmllbGQgPyByZXNvbHZlRmllbGREYXRhKGl0ZW0sZmllbGQpIDogaXRlbX19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFkaXNhYmxlZFwiIGNsYXNzPVwicC1jaGlwcy10b2tlbi1pY29uIHBpIHBpLXRpbWVzLWNpcmNsZVwiIChjbGljayk9XCJyZW1vdmVJdGVtKCRldmVudCxpKVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInAtY2hpcHMtaW5wdXQtdG9rZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0ICNpbnB1dHRleHQgdHlwZT1cInRleHRcIiBbYXR0ci5pZF09XCJpbnB1dElkXCIgW2F0dHIucGxhY2Vob2xkZXJdPVwiKHZhbHVlICYmIHZhbHVlLmxlbmd0aCA/IG51bGwgOiBwbGFjZWhvbGRlcilcIiBbYXR0ci50YWJpbmRleF09XCJ0YWJpbmRleFwiIChrZXlkb3duKT1cIm9uS2V5ZG93bigkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgKGlucHV0KT1cIm9uSW5wdXQoKVwiIChwYXN0ZSk9XCJvblBhc3RlKCRldmVudClcIiBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiYXJpYUxhYmVsbGVkQnlcIiAoZm9jdXMpPVwib25JbnB1dEZvY3VzKCRldmVudClcIiAoYmx1cik9XCJvbklucHV0Qmx1cigkZXZlbnQpXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW25nU3R5bGVdPVwiaW5wdXRTdHlsZVwiIFtjbGFzc109XCJpbnB1dFN0eWxlQ2xhc3NcIj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBob3N0OiB7XG4gICAgICAgICdbY2xhc3MucC1pbnB1dHdyYXBwZXItZmlsbGVkXSc6ICdmaWxsZWQnLFxuICAgICAgICAnW2NsYXNzLnAtaW5wdXR3cmFwcGVyLWZvY3VzXSc6ICdmb2N1cydcbiAgICB9LFxuICAgIHByb3ZpZGVyczogW0NISVBTX1ZBTFVFX0FDQ0VTU09SXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHN0eWxlVXJsczogWycuL2NoaXBzLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENoaXBzIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCxDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgICBASW5wdXQoKSBzdHlsZTogYW55O1xuXG4gICAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBmaWVsZDogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIG1heDogbnVtYmVyO1xuXG4gICAgQElucHV0KCkgYXJpYUxhYmVsbGVkQnk6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHRhYmluZGV4OiBudW1iZXI7XG5cbiAgICBASW5wdXQoKSBpbnB1dElkOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBhbGxvd0R1cGxpY2F0ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSBpbnB1dFN0eWxlOiBhbnk7XG5cbiAgICBASW5wdXQoKSBpbnB1dFN0eWxlQ2xhc3M6IGFueTtcblxuICAgIEBJbnB1dCgpIGFkZE9uVGFiOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgYWRkT25CbHVyOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgc2VwYXJhdG9yOiBzdHJpbmc7XG5cbiAgICBAT3V0cHV0KCkgb25BZGQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uUmVtb3ZlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbkZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbkJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uQ2hpcENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBWaWV3Q2hpbGQoJ2lucHV0dGV4dCcpIGlucHV0Vmlld0NoaWxkOiBFbGVtZW50UmVmO1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihQcmltZVRlbXBsYXRlKSB0ZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxhbnk+O1xuXG4gICAgcHVibGljIGl0ZW1UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIHZhbHVlOiBhbnk7XG5cbiAgICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG4gICAgb25Nb2RlbFRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cbiAgICB2YWx1ZUNoYW5nZWQ6IGJvb2xlYW47XG5cbiAgICBmb2N1czogYm9vbGVhbjtcblxuICAgIGZpbGxlZDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZiwgcHVibGljIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoKGl0ZW0uZ2V0VHlwZSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnaXRlbSc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DbGljaygpIHtcbiAgICAgICAgdGhpcy5pbnB1dFZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgb25JbnB1dCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVGaWxsZWRTdGF0ZSgpO1xuICAgIH1cblxuICAgIG9uUGFzdGUoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VwYXJhdG9yKSB7XG4gICAgICAgICAgICBsZXQgcGFzdGVkRGF0YSA9IChldmVudC5jbGlwYm9hcmREYXRhIHx8IHdpbmRvd1snY2xpcGJvYXJkRGF0YSddKS5nZXREYXRhKCdUZXh0Jyk7XG4gICAgICAgICAgICBwYXN0ZWREYXRhLnNwbGl0KHRoaXMuc2VwYXJhdG9yKS5mb3JFYWNoKHZhbCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRJdGVtKGV2ZW50LCB2YWwsIHRydWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmlucHV0Vmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZUZpbGxlZFN0YXRlKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlRmlsbGVkU3RhdGUoKSB7XG4gICAgICAgIGlmICghdGhpcy52YWx1ZSB8fCB0aGlzLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5maWxsZWQgPSAodGhpcy5pbnB1dFZpZXdDaGlsZC5uYXRpdmVFbGVtZW50ICYmIHRoaXMuaW5wdXRWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC52YWx1ZSAhPSAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZpbGxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkl0ZW1DbGljayhldmVudDogRXZlbnQsIGl0ZW06IGFueSkge1xuICAgICAgICB0aGlzLm9uQ2hpcENsaWNrLmVtaXQoe1xuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICB2YWx1ZTogaXRlbVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIDogdm9pZCB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVNYXhlZE91dCgpO1xuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLm9uTW9kZWxUb3VjaGVkID0gZm47XG4gICAgfVxuXG4gICAgc2V0RGlzYWJsZWRTdGF0ZSh2YWw6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHZhbDtcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICByZXNvbHZlRmllbGREYXRhKGRhdGE6IGFueSwgZmllbGQ6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGlmIChkYXRhICYmIGZpZWxkKSB7XG4gICAgICAgICAgICBpZiAoZmllbGQuaW5kZXhPZignLicpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbZmllbGRdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGZpZWxkczogc3RyaW5nW10gPSBmaWVsZC5zcGxpdCgnLicpO1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMCwgbGVuID0gZmllbGRzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWVbZmllbGRzW2ldXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbklucHV0Rm9jdXMoZXZlbnQ6IEZvY3VzRXZlbnQpIHtcbiAgICAgICAgdGhpcy5mb2N1cyA9IHRydWU7XG4gICAgICAgIHRoaXMub25Gb2N1cy5lbWl0KGV2ZW50KTtcbiAgICB9XG5cbiAgICBvbklucHV0Qmx1cihldmVudDogRm9jdXNFdmVudCkge1xuICAgICAgICB0aGlzLmZvY3VzID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmFkZE9uQmx1ciAmJiB0aGlzLmlucHV0Vmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkSXRlbShldmVudCwgdGhpcy5pbnB1dFZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LnZhbHVlLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbk1vZGVsVG91Y2hlZCgpO1xuICAgICAgICB0aGlzLm9uQmx1ci5lbWl0KGV2ZW50KTtcbiAgICB9XG5cbiAgICByZW1vdmVJdGVtKGV2ZW50OiBFdmVudCwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlbW92ZWRJdGVtID0gdGhpcy52YWx1ZVtpbmRleF07XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLmZpbHRlcigodmFsLCBpKSA9PiBpIT1pbmRleCk7XG4gICAgICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgdGhpcy5vblJlbW92ZS5lbWl0KHtcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgdmFsdWU6IHJlbW92ZWRJdGVtXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnVwZGF0ZUZpbGxlZFN0YXRlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlTWF4ZWRPdXQoKTtcbiAgICB9XG5cbiAgICBhZGRJdGVtKGV2ZW50OiBFdmVudCwgaXRlbTogc3RyaW5nLCBwcmV2ZW50RGVmYXVsdDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZXx8W107XG4gICAgICAgIGlmIChpdGVtICYmIGl0ZW0udHJpbSgpLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWxsb3dEdXBsaWNhdGUgfHwgdGhpcy52YWx1ZS5pbmRleE9mKGl0ZW0pID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBbLi4udGhpcy52YWx1ZSwgaXRlbV07XG4gICAgICAgICAgICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMub25BZGQuZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlRmlsbGVkU3RhdGUoKTtcbiAgICAgICAgdGhpcy51cGRhdGVNYXhlZE91dCgpO1xuICAgICAgICB0aGlzLmlucHV0Vmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcblxuICAgICAgICBpZiAocHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbktleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgc3dpdGNoKGV2ZW50LndoaWNoKSB7XG4gICAgICAgICAgICAvL2JhY2tzcGFjZVxuICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlucHV0Vmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQudmFsdWUubGVuZ3RoID09PSAwICYmIHRoaXMudmFsdWUgJiYgdGhpcy52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBbLi4udGhpcy52YWx1ZV07XG4gICAgICAgICAgICAgICAgICAgIGxldCByZW1vdmVkSXRlbSA9IHRoaXMudmFsdWUucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblJlbW92ZS5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJlbW92ZWRJdGVtXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpbGxlZFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vZW50ZXJcbiAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRJdGVtKGV2ZW50LCB0aGlzLmlucHV0Vmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQudmFsdWUsIHRydWUpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hZGRPblRhYiAmJiB0aGlzLmlucHV0Vmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQudmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkSXRlbShldmVudCwgdGhpcy5pbnB1dFZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LnZhbHVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXggJiYgdGhpcy52YWx1ZSAmJiB0aGlzLm1heCA9PT0gdGhpcy52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zZXBhcmF0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VwYXJhdG9yID09PSAnLCcgJiYgZXZlbnQud2hpY2ggPT09IDE4OCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRJdGVtKGV2ZW50LCB0aGlzLmlucHV0Vmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQudmFsdWUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVNYXhlZE91dCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRWaWV3Q2hpbGQgJiYgdGhpcy5pbnB1dFZpZXdDaGlsZC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tYXggJiYgdGhpcy52YWx1ZSAmJiB0aGlzLm1heCA9PT0gdGhpcy52YWx1ZS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dFZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0Vmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkIHx8IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsSW5wdXRUZXh0TW9kdWxlLFNoYXJlZE1vZHVsZV0sXG4gICAgZXhwb3J0czogW0NoaXBzLElucHV0VGV4dE1vZHVsZSxTaGFyZWRNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW0NoaXBzXVxufSlcbmV4cG9ydCBjbGFzcyBDaGlwc01vZHVsZSB7IH1cbiJdfQ==