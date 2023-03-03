import { NgModule, Component, Input, Output, EventEmitter, forwardRef, ChangeDetectorRef, ContentChild, TemplateRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectUtils } from 'primeng/utils';
import { RippleModule } from 'primeng/ripple';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/ripple';

function SelectButton_div_1_ng_container_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 8);
} if (rf & 2) {
    const option_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵclassMap(option_r1.icon);
    ɵngcc0.ɵɵproperty("ngClass", "p-button-icon p-button-icon-left");
} }
function SelectButton_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, SelectButton_div_1_ng_container_2_span_1_Template, 1, 3, "span", 6);
    ɵngcc0.ɵɵelementStart(2, "span", 7);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", option_r1.icon);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(option_r1.label);
} }
function SelectButton_div_1_ng_template_3_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c0 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function SelectButton_div_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, SelectButton_div_1_ng_template_3_ng_container_0_Template, 1, 0, "ng-container", 9);
} if (rf & 2) {
    const ctx_r11 = ɵngcc0.ɵɵnextContext();
    const option_r1 = ctx_r11.$implicit;
    const i_r2 = ctx_r11.index;
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r6.itemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(2, _c0, option_r1, i_r2));
} }
const _c1 = function (a0, a1, a2) { return { "p-highlight": a0, "p-disabled": a1, "p-button-icon-only": a2 }; };
function SelectButton_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 2, 3);
    ɵngcc0.ɵɵlistener("click", function SelectButton_div_1_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const option_r1 = ctx.$implicit; const i_r2 = ctx.index; const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.onItemClick($event, option_r1, i_r2); })("keydown.enter", function SelectButton_div_1_Template_div_keydown_enter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const option_r1 = ctx.$implicit; const i_r2 = ctx.index; const ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.onItemClick($event, option_r1, i_r2); })("blur", function SelectButton_div_1_Template_div_blur_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15.onBlur(); });
    ɵngcc0.ɵɵtemplate(2, SelectButton_div_1_ng_container_2_Template, 4, 2, "ng-container", 4);
    ɵngcc0.ɵɵtemplate(3, SelectButton_div_1_ng_template_3_Template, 1, 5, "ng-template", null, 5, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const _r5 = ɵngcc0.ɵɵreference(4);
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(option_r1.styleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(10, _c1, ctx_r0.isSelected(option_r1), ctx_r0.disabled || option_r1.disabled, option_r1.icon && !option_r1.label));
    ɵngcc0.ɵɵattribute("aria-pressed", ctx_r0.isSelected(option_r1))("title", option_r1.title)("aria-label", option_r1.label)("tabindex", ctx_r0.disabled ? null : ctx_r0.tabindex)("aria-labelledby", ctx_r0.ariaLabelledBy);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.itemTemplate)("ngIfElse", _r5);
} }
export const SELECTBUTTON_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectButton),
    multi: true
};
export class SelectButton {
    constructor(cd) {
        this.cd = cd;
        this.tabindex = 0;
        this.onOptionClick = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
    }
    get options() {
        return this._options;
    }
    set options(val) {
        //NoOp
    }
    ngOnChanges(simpleChange) {
        if (simpleChange.options) {
            this._options = this.optionLabel ? ObjectUtils.generateSelectItems(simpleChange.options.currentValue, this.optionLabel) : simpleChange.options.currentValue;
        }
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
    onItemClick(event, option, index) {
        if (this.disabled || option.disabled) {
            return;
        }
        if (this.multiple) {
            let itemIndex = this.findItemIndex(option);
            if (itemIndex != -1)
                this.value = this.value.filter((val, i) => i != itemIndex);
            else
                this.value = [...this.value || [], option.value];
        }
        else {
            this.value = option.value;
        }
        this.onOptionClick.emit({
            originalEvent: event,
            option: option,
            index: index
        });
        this.onModelChange(this.value);
        this.onChange.emit({
            originalEvent: event,
            value: this.value
        });
    }
    onBlur() {
        this.onModelTouched();
    }
    isSelected(option) {
        if (this.multiple)
            return this.findItemIndex(option) != -1;
        else
            return ObjectUtils.equals(option.value, this.value, this.dataKey);
    }
    findItemIndex(option) {
        let index = -1;
        if (this.value) {
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == option.value) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
}
SelectButton.ɵfac = function SelectButton_Factory(t) { return new (t || SelectButton)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
SelectButton.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SelectButton, selectors: [["p-selectButton"]], contentQueries: function SelectButton_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, TemplateRef, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
    } }, inputs: { tabindex: "tabindex", options: "options", disabled: "disabled", multiple: "multiple", style: "style", styleClass: "styleClass", ariaLabelledBy: "ariaLabelledBy", dataKey: "dataKey", optionLabel: "optionLabel" }, outputs: { onOptionClick: "onOptionClick", onChange: "onChange" }, features: [ɵngcc0.ɵɵProvidersFeature([SELECTBUTTON_VALUE_ACCESSOR]), ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 5, consts: [["role", "group", 3, "ngClass", "ngStyle"], ["class", "p-button p-component", "role", "button", "pRipple", "", 3, "class", "ngClass", "click", "keydown.enter", "blur", 4, "ngFor", "ngForOf"], ["role", "button", "pRipple", "", 1, "p-button", "p-component", 3, "ngClass", "click", "keydown.enter", "blur"], ["btn", ""], [4, "ngIf", "ngIfElse"], ["customcontent", ""], [3, "ngClass", "class", 4, "ngIf"], [1, "p-button-label"], [3, "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function SelectButton_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, SelectButton_div_1_Template, 5, 14, "div", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-selectbutton p-buttonset p-component")("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.options);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgForOf, ɵngcc2.Ripple, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], styles: [".ui-selectbutton{display:inline-block}.ui-selectbutton.ui-state-error{padding:0}.ui-selectbutton .ui-button.ui-state-focus{outline:none}", ".p-button{-moz-user-select:none;-ms-flex-align:center;-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;margin:0;overflow:hidden;position:relative;text-align:center;user-select:none;vertical-align:bottom}.p-button-label{-ms-flex:1 1 auto;flex:1 1 auto}.p-button-icon-right{-ms-flex-order:1;order:1}.p-button:disabled{cursor:default}.p-button-icon-only{-ms-flex-pack:center;justify-content:center}.p-button-icon-only .p-button-label{-ms-flex:0 0 auto;flex:0 0 auto;visibility:hidden;width:0}.p-button-vertical{-ms-flex-direction:column;flex-direction:column}.p-button-icon-bottom{-ms-flex-order:2;order:2}.p-buttonset .p-button{margin:0}.p-buttonset .p-button:not(:last-child){border-right:0}.p-buttonset .p-button:not(:first-of-type):not(:last-of-type){border-radius:0}.p-buttonset .p-button:first-of-type{border-bottom-right-radius:0;border-top-right-radius:0}.p-buttonset .p-button:last-of-type{border-bottom-left-radius:0;border-top-left-radius:0}.p-buttonset .p-button:focus{position:relative;z-index:1}"], encapsulation: 2, changeDetection: 0 });
SelectButton.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
SelectButton.propDecorators = {
    tabindex: [{ type: Input }],
    multiple: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    ariaLabelledBy: [{ type: Input }],
    disabled: [{ type: Input }],
    dataKey: [{ type: Input }],
    optionLabel: [{ type: Input }],
    onOptionClick: [{ type: Output }],
    onChange: [{ type: Output }],
    itemTemplate: [{ type: ContentChild, args: [TemplateRef,] }],
    options: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SelectButton, [{
        type: Component,
        args: [{
                selector: 'p-selectButton',
                template: `
        <div [ngClass]="'p-selectbutton p-buttonset p-component'" [ngStyle]="style" [class]="styleClass"  role="group">
            <div *ngFor="let option of options; let i = index" #btn class="p-button p-component" [class]="option.styleClass" role="button" [attr.aria-pressed]="isSelected(option)"
                [ngClass]="{'p-highlight':isSelected(option), 'p-disabled': disabled || option.disabled, 
                'p-button-icon-only': (option.icon && !option.label)}" (click)="onItemClick($event,option,i)" (keydown.enter)="onItemClick($event,option,i)"
                [attr.title]="option.title" [attr.aria-label]="option.label" (blur)="onBlur()" [attr.tabindex]="disabled ? null : tabindex" [attr.aria-labelledby]="ariaLabelledBy" pRipple>
                <ng-container *ngIf="!itemTemplate else customcontent">
                    <span [ngClass]="'p-button-icon p-button-icon-left'" [class]="option.icon" *ngIf="option.icon"></span>
                    <span class="p-button-label">{{option.label}}</span>
                </ng-container>
                <ng-template #customcontent>
                    <ng-container *ngTemplateOutlet="itemTemplate; context: {$implicit: option, index: i}"></ng-container>
                </ng-template>
            </div>
        </div>
    `,
                providers: [SELECTBUTTON_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".ui-selectbutton{display:inline-block}.ui-selectbutton.ui-state-error{padding:0}.ui-selectbutton .ui-button.ui-state-focus{outline:none}", ".p-button{-moz-user-select:none;-ms-flex-align:center;-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;margin:0;overflow:hidden;position:relative;text-align:center;user-select:none;vertical-align:bottom}.p-button-label{-ms-flex:1 1 auto;flex:1 1 auto}.p-button-icon-right{-ms-flex-order:1;order:1}.p-button:disabled{cursor:default}.p-button-icon-only{-ms-flex-pack:center;justify-content:center}.p-button-icon-only .p-button-label{-ms-flex:0 0 auto;flex:0 0 auto;visibility:hidden;width:0}.p-button-vertical{-ms-flex-direction:column;flex-direction:column}.p-button-icon-bottom{-ms-flex-order:2;order:2}.p-buttonset .p-button{margin:0}.p-buttonset .p-button:not(:last-child){border-right:0}.p-buttonset .p-button:not(:first-of-type):not(:last-of-type){border-radius:0}.p-buttonset .p-button:first-of-type{border-bottom-right-radius:0;border-top-right-radius:0}.p-buttonset .p-button:last-of-type{border-bottom-left-radius:0;border-top-left-radius:0}.p-buttonset .p-button:focus{position:relative;z-index:1}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { tabindex: [{
            type: Input
        }], onOptionClick: [{
            type: Output
        }], onChange: [{
            type: Output
        }], options: [{
            type: Input
        }], disabled: [{
            type: Input
        }], multiple: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], ariaLabelledBy: [{
            type: Input
        }], dataKey: [{
            type: Input
        }], optionLabel: [{
            type: Input
        }], itemTemplate: [{
            type: ContentChild,
            args: [TemplateRef]
        }] }); })();
export class SelectButtonModule {
}
SelectButtonModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: SelectButtonModule });
SelectButtonModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function SelectButtonModule_Factory(t) { return new (t || SelectButtonModule)(); }, imports: [[CommonModule, RippleModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SelectButtonModule, { declarations: function () { return [SelectButton]; }, imports: function () { return [CommonModule, RippleModule]; }, exports: function () { return [SelectButton]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SelectButtonModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, RippleModule],
                exports: [SelectButton],
                declarations: [SelectButton]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0YnV0dG9uLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvc2VsZWN0YnV0dG9uL3NlbGVjdGJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsaUJBQWlCLEVBQUMsWUFBWSxFQUFDLFdBQVcsRUFBeUIsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcE0sT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRTdDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBQyxpQkFBaUIsRUFBdUIsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZFLE1BQU0sQ0FBQyxNQUFNLDJCQUEyQixHQUFRO0FBQ2hELElBQUUsT0FBTyxFQUFFLGlCQUFpQjtBQUM1QixJQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDO0FBQzdDLElBQUUsS0FBSyxFQUFFLElBQUk7QUFDYixDQUFDLENBQUM7QUF5QkYsTUFBTSxPQUFPLFlBQVk7QUFBRyxJQWdDeEIsWUFBbUIsRUFBcUI7QUFBSSxRQUF6QixPQUFFLEdBQUYsRUFBRSxDQUFtQjtBQUFDLFFBOUJoQyxhQUFRLEdBQVcsQ0FBQyxDQUFDO0FBQ2xDLFFBZWMsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUNwRSxRQUNjLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUMvRCxRQU9JLGtCQUFhLEdBQWEsR0FBRyxFQUFFLEdBQUUsQ0FB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Q0k7QUFBQztBQUFzQyxZQXBDb0IsaUJBQWlCO0FBQUc7QUFBRztBQUFnQyx1QkFzQ2xILEtBQUs7QUFBSyx1QkFFVixLQUFLO0FBQUssb0JBRVYsS0FBSztBQUFLLHlCQUVWLEtBQUs7QUFBSyw2QkFFVixLQUFLO0FBQUssdUJBRVYsS0FBSztBQUFLLHNCQUVWLEtBQUs7QUFBSywwQkFFVixLQUFLO0FBQUssNEJBRVYsTUFBTTtBQUFLLHVCQUVYLE1BQU07QUFBSywyQkFFWCxZQUFZLFNBQUMsV0FBVztBQUFPLHNCQVkvQixLQUFLO0FBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQTRGaEIsTUFBTSxPQUFPLGtCQUFrQjtBQUFHOzhDQUxqQyxRQUFRLFNBQUM7QUFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUMsWUFBWSxDQUFDLGtCQUNwQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsa0JBQ3ZCLFlBQVksRUFBRSxDQUFDLFlBQVksQ0FBQyxjQUMvQjs7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLENvbXBvbmVudCxJbnB1dCxPdXRwdXQsRXZlbnRFbWl0dGVyLGZvcndhcmRSZWYsQ2hhbmdlRGV0ZWN0b3JSZWYsQ29udGVudENoaWxkLFRlbXBsYXRlUmVmLFNpbXBsZUNoYW5nZXMsT25DaGFuZ2VzLENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7U2VsZWN0SXRlbX0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHtPYmplY3RVdGlsc30gZnJvbSAncHJpbWVuZy91dGlscyc7XG5pbXBvcnQge1JpcHBsZU1vZHVsZX0gZnJvbSAncHJpbWVuZy9yaXBwbGUnO1xuaW1wb3J0IHtOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNvbnN0IFNFTEVDVEJVVFRPTl9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2VsZWN0QnV0dG9uKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1zZWxlY3RCdXR0b24nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgW25nQ2xhc3NdPVwiJ3Atc2VsZWN0YnV0dG9uIHAtYnV0dG9uc2V0IHAtY29tcG9uZW50J1wiIFtuZ1N0eWxlXT1cInN0eWxlXCIgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIiAgcm9sZT1cImdyb3VwXCI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygb3B0aW9uczsgbGV0IGkgPSBpbmRleFwiICNidG4gY2xhc3M9XCJwLWJ1dHRvbiBwLWNvbXBvbmVudFwiIFtjbGFzc109XCJvcHRpb24uc3R5bGVDbGFzc1wiIHJvbGU9XCJidXR0b25cIiBbYXR0ci5hcmlhLXByZXNzZWRdPVwiaXNTZWxlY3RlZChvcHRpb24pXCJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J3AtaGlnaGxpZ2h0Jzppc1NlbGVjdGVkKG9wdGlvbiksICdwLWRpc2FibGVkJzogZGlzYWJsZWQgfHwgb3B0aW9uLmRpc2FibGVkLCBcbiAgICAgICAgICAgICAgICAncC1idXR0b24taWNvbi1vbmx5JzogKG9wdGlvbi5pY29uICYmICFvcHRpb24ubGFiZWwpfVwiIChjbGljayk9XCJvbkl0ZW1DbGljaygkZXZlbnQsb3B0aW9uLGkpXCIgKGtleWRvd24uZW50ZXIpPVwib25JdGVtQ2xpY2soJGV2ZW50LG9wdGlvbixpKVwiXG4gICAgICAgICAgICAgICAgW2F0dHIudGl0bGVdPVwib3B0aW9uLnRpdGxlXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJvcHRpb24ubGFiZWxcIiAoYmx1cik9XCJvbkJsdXIoKVwiIFthdHRyLnRhYmluZGV4XT1cImRpc2FibGVkID8gbnVsbCA6IHRhYmluZGV4XCIgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cImFyaWFMYWJlbGxlZEJ5XCIgcFJpcHBsZT5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW1UZW1wbGF0ZSBlbHNlIGN1c3RvbWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gW25nQ2xhc3NdPVwiJ3AtYnV0dG9uLWljb24gcC1idXR0b24taWNvbi1sZWZ0J1wiIFtjbGFzc109XCJvcHRpb24uaWNvblwiICpuZ0lmPVwib3B0aW9uLmljb25cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1idXR0b24tbGFiZWxcIj57e29wdGlvbi5sYWJlbH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjY3VzdG9tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIml0ZW1UZW1wbGF0ZTsgY29udGV4dDogeyRpbXBsaWNpdDogb3B0aW9uLCBpbmRleDogaX1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgcHJvdmlkZXJzOiBbU0VMRUNUQlVUVE9OX1ZBTFVFX0FDQ0VTU09SXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHN0eWxlVXJsczogWycuL3NlbGVjdGJ1dHRvbi5jc3MnLCAnLi4vYnV0dG9uL2J1dHRvbi5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RCdXR0b24gaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzIHtcblxuICAgIEBJbnB1dCgpIHRhYmluZGV4OiBudW1iZXIgPSAwO1xuXG4gICAgQElucHV0KCkgbXVsdGlwbGU6IGJvb2xlYW47XG4gICAgXG4gICAgQElucHV0KCkgc3R5bGU6IGFueTtcbiAgICAgICAgXG4gICAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgYXJpYUxhYmVsbGVkQnk6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgZGF0YUtleTogc3RyaW5nXG4gICAgXG4gICAgQElucHV0KCkgb3B0aW9uTGFiZWw6IHN0cmluZztcbiAgICBcbiAgICBAT3V0cHV0KCkgb25PcHRpb25DbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQENvbnRlbnRDaGlsZChUZW1wbGF0ZVJlZikgaXRlbVRlbXBsYXRlO1xuICAgIFxuICAgIHZhbHVlOiBhbnk7XG4gICAgICAgIFxuICAgIF9vcHRpb25zOiBhbnlbXTtcbiAgICBcbiAgICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICAgIFxuICAgIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG4gICAgXG4gICAgQElucHV0KCkgZ2V0IG9wdGlvbnMoKTogYW55W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgICB9XG5cbiAgICBzZXQgb3B0aW9ucyh2YWw6IGFueVtdKSB7XG4gICAgICAgIC8vTm9PcFxuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKHNpbXBsZUNoYW5nZTogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBpZiAoc2ltcGxlQ2hhbmdlLm9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMgPSB0aGlzLm9wdGlvbkxhYmVsID8gT2JqZWN0VXRpbHMuZ2VuZXJhdGVTZWxlY3RJdGVtcyhzaW1wbGVDaGFuZ2Uub3B0aW9ucy5jdXJyZW50VmFsdWUsIHRoaXMub3B0aW9uTGFiZWwpIDogc2ltcGxlQ2hhbmdlLm9wdGlvbnMuY3VycmVudFZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSkgOiB2b2lkIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgICBcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICAgIH1cbiAgICBcbiAgICBzZXREaXNhYmxlZFN0YXRlKHZhbDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gdmFsO1xuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgICBcbiAgICBvbkl0ZW1DbGljayhldmVudCwgb3B0aW9uOiBTZWxlY3RJdGVtLCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IG9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICBsZXQgaXRlbUluZGV4ID0gdGhpcy5maW5kSXRlbUluZGV4KG9wdGlvbik7XG4gICAgICAgICAgICBpZiAoaXRlbUluZGV4ICE9IC0xKVxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLmZpbHRlcigodmFsLGkpID0+IGkhPWl0ZW1JbmRleCk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IFsuLi50aGlzLnZhbHVlfHxbXSwgb3B0aW9uLnZhbHVlXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBvcHRpb24udmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMub25PcHRpb25DbGljay5lbWl0KHtcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgb3B0aW9uOiBvcHRpb24sXG4gICAgICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoe1xuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgb25CbHVyKCkge1xuICAgICAgICB0aGlzLm9uTW9kZWxUb3VjaGVkKCk7XG4gICAgfVxuICAgIFxuICAgIGlzU2VsZWN0ZWQob3B0aW9uOiBTZWxlY3RJdGVtKSB7XG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmluZEl0ZW1JbmRleChvcHRpb24pICE9IC0xO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0VXRpbHMuZXF1YWxzKG9wdGlvbi52YWx1ZSwgdGhpcy52YWx1ZSwgdGhpcy5kYXRhS2V5KTtcbiAgICB9XG4gICAgXG4gICAgZmluZEl0ZW1JbmRleChvcHRpb246IFNlbGVjdEl0ZW0pIHtcbiAgICAgICAgbGV0IGluZGV4ID0gLTE7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy52YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlW2ldID09IG9wdGlvbi52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsUmlwcGxlTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbU2VsZWN0QnV0dG9uXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtTZWxlY3RCdXR0b25dXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdEJ1dHRvbk1vZHVsZSB7IH1cbiJdfQ==