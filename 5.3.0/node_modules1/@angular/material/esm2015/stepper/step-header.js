/**
 * @fileoverview added by tsickle
 * Generated from: src/material/stepper/step-header.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { FocusMonitor } from '@angular/cdk/a11y';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewEncapsulation, } from '@angular/core';
import { MatStepLabel } from './step-label';
import { MatStepperIntl } from './stepper-intl';
import { CdkStepHeader } from '@angular/cdk/stepper';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/a11y';
import * as ɵngcc2 from '@angular/material/core';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from '@angular/material/icon';

function MatStepHeader_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0, 9);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.iconOverrides[ctx_r0.state])("ngTemplateOutletContext", ctx_r0._getIconContext());
} }
function MatStepHeader_ng_container_4_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r6._getDefaultTextForState(ctx_r6.state));
} }
function MatStepHeader_ng_container_4_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-icon");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r7._getDefaultTextForState(ctx_r7.state));
} }
function MatStepHeader_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0, 10);
    ɵngcc0.ɵɵtemplate(1, MatStepHeader_ng_container_4_span_1_Template, 2, 1, "span", 11);
    ɵngcc0.ɵɵtemplate(2, MatStepHeader_ng_container_4_mat_icon_2_Template, 2, 1, "mat-icon", 12);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngSwitch", ctx_r1.state);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "number");
} }
function MatStepHeader_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0, 13);
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2._templateLabel().template);
} }
function MatStepHeader_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 14);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.label);
} }
function MatStepHeader_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 15);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r4._intl.optionalLabel);
} }
function MatStepHeader_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 16);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r5.errorMessage);
} }
export class MatStepHeader extends CdkStepHeader {
    /**
     * @param {?} _intl
     * @param {?} _focusMonitor
     * @param {?} _elementRef
     * @param {?} changeDetectorRef
     */
    constructor(_intl, _focusMonitor, _elementRef, changeDetectorRef) {
        super(_elementRef);
        this._intl = _intl;
        this._focusMonitor = _focusMonitor;
        _focusMonitor.monitor(_elementRef, true);
        this._intlSubscription = _intl.changes.subscribe((/**
         * @return {?}
         */
        () => changeDetectorRef.markForCheck()));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._intlSubscription.unsubscribe();
        this._focusMonitor.stopMonitoring(this._elementRef);
    }
    /**
     * Focuses the step header.
     * @return {?}
     */
    focus() {
        this._focusMonitor.focusVia(this._elementRef, 'program');
    }
    /**
     * Returns string label of given step if it is a text label.
     * @return {?}
     */
    _stringLabel() {
        return this.label instanceof MatStepLabel ? null : this.label;
    }
    /**
     * Returns MatStepLabel if the label of given step is a template label.
     * @return {?}
     */
    _templateLabel() {
        return this.label instanceof MatStepLabel ? this.label : null;
    }
    /**
     * Returns the host HTML element.
     * @return {?}
     */
    _getHostElement() {
        return this._elementRef.nativeElement;
    }
    /**
     * Template context variables that are exposed to the `matStepperIcon` instances.
     * @return {?}
     */
    _getIconContext() {
        return {
            index: this.index,
            active: this.active,
            optional: this.optional
        };
    }
    /**
     * @param {?} state
     * @return {?}
     */
    _getDefaultTextForState(state) {
        if (state == 'number') {
            return `${this.index + 1}`;
        }
        if (state == 'edit') {
            return 'create';
        }
        if (state == 'error') {
            return 'warning';
        }
        return state;
    }
}
MatStepHeader.ɵfac = function MatStepHeader_Factory(t) { return new (t || MatStepHeader)(ɵngcc0.ɵɵdirectiveInject(MatStepperIntl), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FocusMonitor), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
MatStepHeader.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatStepHeader, selectors: [["mat-step-header"]], hostAttrs: ["role", "tab", 1, "mat-step-header"], inputs: { state: "state", label: "label", errorMessage: "errorMessage", iconOverrides: "iconOverrides", index: "index", selected: "selected", active: "active", optional: "optional", disableRipple: "disableRipple" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 10, vars: 19, consts: [["matRipple", "", 1, "mat-step-header-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-step-icon-content", 3, "ngSwitch"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngSwitchCase"], [3, "ngSwitch", 4, "ngSwitchDefault"], [1, "mat-step-label"], [3, "ngTemplateOutlet", 4, "ngIf"], ["class", "mat-step-text-label", 4, "ngIf"], ["class", "mat-step-optional", 4, "ngIf"], ["class", "mat-step-sub-label-error", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "ngTemplateOutlet"], [1, "mat-step-text-label"], [1, "mat-step-optional"], [1, "mat-step-sub-label-error"]], template: function MatStepHeader_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div");
        ɵngcc0.ɵɵelementStart(2, "div", 1);
        ɵngcc0.ɵɵtemplate(3, MatStepHeader_ng_container_3_Template, 1, 2, "ng-container", 2);
        ɵngcc0.ɵɵtemplate(4, MatStepHeader_ng_container_4_Template, 3, 2, "ng-container", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "div", 4);
        ɵngcc0.ɵɵtemplate(6, MatStepHeader_ng_container_6_Template, 1, 1, "ng-container", 5);
        ɵngcc0.ɵɵtemplate(7, MatStepHeader_div_7_Template, 2, 1, "div", 6);
        ɵngcc0.ɵɵtemplate(8, MatStepHeader_div_8_Template, 2, 1, "div", 7);
        ɵngcc0.ɵɵtemplate(9, MatStepHeader_div_9_Template, 2, 1, "div", 8);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disableRipple);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("mat-step-icon-state-", ctx.state, " mat-step-icon");
        ɵngcc0.ɵɵclassProp("mat-step-icon-selected", ctx.selected);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitch", !!(ctx.iconOverrides && ctx.iconOverrides[ctx.state]));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", true);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassProp("mat-step-label-active", ctx.active)("mat-step-label-selected", ctx.selected)("mat-step-label-error", ctx.state == "error");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx._templateLabel());
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx._stringLabel());
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.optional && ctx.state != "error");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.state == "error");
    } }, directives: [ɵngcc2.MatRipple, ɵngcc3.NgSwitch, ɵngcc3.NgSwitchCase, ɵngcc3.NgSwitchDefault, ɵngcc3.NgIf, ɵngcc3.NgTemplateOutlet, ɵngcc4.MatIcon], styles: [".mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:transparent}.mat-step-optional,.mat-step-sub-label-error{font-size:12px}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative}.mat-step-icon-content,.mat-step-icon .mat-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
MatStepHeader.ctorParameters = () => [
    { type: MatStepperIntl },
    { type: FocusMonitor },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
MatStepHeader.propDecorators = {
    state: [{ type: Input }],
    label: [{ type: Input }],
    errorMessage: [{ type: Input }],
    iconOverrides: [{ type: Input }],
    index: [{ type: Input }],
    selected: [{ type: Input }],
    active: [{ type: Input }],
    optional: [{ type: Input }],
    disableRipple: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatStepHeader, [{
        type: Component,
        args: [{
                selector: 'mat-step-header',
                template: "<div class=\"mat-step-header-ripple\" matRipple\n     [matRippleTrigger]=\"_getHostElement()\"\n     [matRippleDisabled]=\"disableRipple\"></div>\n\n<div class=\"mat-step-icon-state-{{state}} mat-step-icon\" [class.mat-step-icon-selected]=\"selected\">\n  <div class=\"mat-step-icon-content\" [ngSwitch]=\"!!(iconOverrides && iconOverrides[state])\">\n    <ng-container\n      *ngSwitchCase=\"true\"\n      [ngTemplateOutlet]=\"iconOverrides[state]\"\n      [ngTemplateOutletContext]=\"_getIconContext()\"></ng-container>\n    <ng-container *ngSwitchDefault [ngSwitch]=\"state\">\n      <span *ngSwitchCase=\"'number'\">{{_getDefaultTextForState(state)}}</span>\n      <mat-icon *ngSwitchDefault>{{_getDefaultTextForState(state)}}</mat-icon>\n    </ng-container>\n  </div>\n</div>\n<div class=\"mat-step-label\"\n     [class.mat-step-label-active]=\"active\"\n     [class.mat-step-label-selected]=\"selected\"\n     [class.mat-step-label-error]=\"state == 'error'\">\n  <!-- If there is a label template, use it. -->\n  <ng-container *ngIf=\"_templateLabel()\" [ngTemplateOutlet]=\"_templateLabel()!.template\">\n  </ng-container>\n  <!-- If there is no label template, fall back to the text label. -->\n  <div class=\"mat-step-text-label\" *ngIf=\"_stringLabel()\">{{label}}</div>\n\n  <div class=\"mat-step-optional\" *ngIf=\"optional && state != 'error'\">{{_intl.optionalLabel}}</div>\n  <div class=\"mat-step-sub-label-error\" *ngIf=\"state == 'error'\">{{errorMessage}}</div>\n</div>\n\n",
                host: {
                    'class': 'mat-step-header',
                    'role': 'tab'
                },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:transparent}.mat-step-optional,.mat-step-sub-label-error{font-size:12px}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative}.mat-step-icon-content,.mat-step-icon .mat-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"]
            }]
    }], function () { return [{ type: MatStepperIntl }, { type: ɵngcc1.FocusMonitor }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { state: [{
            type: Input
        }], label: [{
            type: Input
        }], errorMessage: [{
            type: Input
        }], iconOverrides: [{
            type: Input
        }], index: [{
            type: Input
        }], selected: [{
            type: Input
        }], active: [{
            type: Input
        }], optional: [{
            type: Input
        }], disableRipple: [{
            type: Input
        }] }); })();
if (false) {
    /**
     * @type {?}
     * @private
     */
    MatStepHeader.prototype._intlSubscription;
    /**
     * State of the given step.
     * @type {?}
     */
    MatStepHeader.prototype.state;
    /**
     * Label of the given step.
     * @type {?}
     */
    MatStepHeader.prototype.label;
    /**
     * Error message to display when there's an error.
     * @type {?}
     */
    MatStepHeader.prototype.errorMessage;
    /**
     * Overrides for the header icons, passed in via the stepper.
     * @type {?}
     */
    MatStepHeader.prototype.iconOverrides;
    /**
     * Index of the given step.
     * @type {?}
     */
    MatStepHeader.prototype.index;
    /**
     * Whether the given step is selected.
     * @type {?}
     */
    MatStepHeader.prototype.selected;
    /**
     * Whether the given step label is active.
     * @type {?}
     */
    MatStepHeader.prototype.active;
    /**
     * Whether the given step is optional.
     * @type {?}
     */
    MatStepHeader.prototype.optional;
    /**
     * Whether the ripple should be disabled.
     * @type {?}
     */
    MatStepHeader.prototype.disableRipple;
    /** @type {?} */
    MatStepHeader.prototype._intl;
    /**
     * @type {?}
     * @private
     */
    MatStepHeader.prototype._focusMonitor;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC1oZWFkZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9zdGVwcGVyL3N0ZXAtaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFTCxpQkFBaUIsR0FFbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUMxQyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUMsT0FBTyxFQUFDLGFBQWEsRUFBWSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjOUQsTUFBTSxPQUFPLGFBQWMsU0FBUSxhQUFhO0FBQUc7QUFBUTtBQUNoRDtBQUNYO0FBQzZCO0FBRzVCO0FBQVEsSUF3QlAsWUFDUyxLQUFxQixFQUNwQixhQUEyQixFQUNuQyxXQUFvQyxFQUNwQyxpQkFBb0M7QUFDeEMsUUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDdkIsUUFMVyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtBQUFDLFFBQ3JCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0FBQUMsUUFJcEMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDN0MsUUFBSSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTO0FBQU07QUFBdUI7QUFBWSxRQUF4QyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsRUFBQyxDQUFDO0FBQzdGLElBQUUs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QUZFLDhCQUEwQjtBQUM1QjtBQUNPO0FBQ0Y7QUFBaUI7QUFBUSxJQUE1Qiw4QkFBc0M7QUFDeEM7QUFDTztBQUNGO0FBQWlCO0FBQVEsSUFBNUIscUNBQThCO0FBQ2hDO0FBQ087QUFDRjtBQUFpQjtBQUFRLElBQTVCLHNDQUE0RTtBQUM5RTtBQUNPO0FBQ0Y7QUFBaUI7QUFFbkIsSUFGRCw4QkFBdUI7QUFDekI7QUFDTztBQUNGO0FBQWlCO0FBQ3RCLElBREUsaUNBQTJCO0FBQzdCO0FBQ087QUFDRjtBQUFpQjtBQUVyQixJQUZDLCtCQUF5QjtBQUMzQjtBQUNPO0FBQ0Y7QUFBaUI7QUFDdEIsSUFERSxpQ0FBMkI7QUFDN0I7QUFDTztBQUNGO0FBQWlCO0FBQVEsSUFBNUIsc0NBQWdDO0FBQ2xDO0FBRUssSUFBRCw4QkFBNEI7QUFBQztBQUMxQjtBQUFpQjtBQUFnQjtBQUNqQyxJQURILHNDQUFtQztBQUFDO0FBQ3ZDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Rm9jdXNNb25pdG9yfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIFRlbXBsYXRlUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7TWF0U3RlcExhYmVsfSBmcm9tICcuL3N0ZXAtbGFiZWwnO1xuaW1wb3J0IHtNYXRTdGVwcGVySW50bH0gZnJvbSAnLi9zdGVwcGVyLWludGwnO1xuaW1wb3J0IHtNYXRTdGVwcGVySWNvbkNvbnRleHR9IGZyb20gJy4vc3RlcHBlci1pY29uJztcbmltcG9ydCB7Q2RrU3RlcEhlYWRlciwgU3RlcFN0YXRlfSBmcm9tICdAYW5ndWxhci9jZGsvc3RlcHBlcic7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LXN0ZXAtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICdzdGVwLWhlYWRlci5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N0ZXAtaGVhZGVyLmNzcyddLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ21hdC1zdGVwLWhlYWRlcicsXG4gICAgJ3JvbGUnOiAndGFiJyxcbiAgfSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE1hdFN0ZXBIZWFkZXIgZXh0ZW5kcyBDZGtTdGVwSGVhZGVyIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfaW50bFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIC8qKiBTdGF0ZSBvZiB0aGUgZ2l2ZW4gc3RlcC4gKi9cbiAgQElucHV0KCkgc3RhdGU6IFN0ZXBTdGF0ZTtcblxuICAvKiogTGFiZWwgb2YgdGhlIGdpdmVuIHN0ZXAuICovXG4gIEBJbnB1dCgpIGxhYmVsOiBNYXRTdGVwTGFiZWwgfCBzdHJpbmc7XG5cbiAgLyoqIEVycm9yIG1lc3NhZ2UgdG8gZGlzcGxheSB3aGVuIHRoZXJlJ3MgYW4gZXJyb3IuICovXG4gIEBJbnB1dCgpIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuXG4gIC8qKiBPdmVycmlkZXMgZm9yIHRoZSBoZWFkZXIgaWNvbnMsIHBhc3NlZCBpbiB2aWEgdGhlIHN0ZXBwZXIuICovXG4gIEBJbnB1dCgpIGljb25PdmVycmlkZXM6IHtba2V5OiBzdHJpbmddOiBUZW1wbGF0ZVJlZjxNYXRTdGVwcGVySWNvbkNvbnRleHQ+fTtcblxuICAvKiogSW5kZXggb2YgdGhlIGdpdmVuIHN0ZXAuICovXG4gIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGdpdmVuIHN0ZXAgaXMgc2VsZWN0ZWQuICovXG4gIEBJbnB1dCgpIHNlbGVjdGVkOiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBnaXZlbiBzdGVwIGxhYmVsIGlzIGFjdGl2ZS4gKi9cbiAgQElucHV0KCkgYWN0aXZlOiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBnaXZlbiBzdGVwIGlzIG9wdGlvbmFsLiAqL1xuICBASW5wdXQoKSBvcHRpb25hbDogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciB0aGUgcmlwcGxlIHNob3VsZCBiZSBkaXNhYmxlZC4gKi9cbiAgQElucHV0KCkgZGlzYWJsZVJpcHBsZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX2ludGw6IE1hdFN0ZXBwZXJJbnRsLFxuICAgIHByaXZhdGUgX2ZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLFxuICAgIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihfZWxlbWVudFJlZik7XG4gICAgX2ZvY3VzTW9uaXRvci5tb25pdG9yKF9lbGVtZW50UmVmLCB0cnVlKTtcbiAgICB0aGlzLl9pbnRsU3Vic2NyaXB0aW9uID0gX2ludGwuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5faW50bFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX2ZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLl9lbGVtZW50UmVmKTtcbiAgfVxuXG4gIC8qKiBGb2N1c2VzIHRoZSBzdGVwIGhlYWRlci4gKi9cbiAgZm9jdXMoKSB7XG4gICAgdGhpcy5fZm9jdXNNb25pdG9yLmZvY3VzVmlhKHRoaXMuX2VsZW1lbnRSZWYsICdwcm9ncmFtJyk7XG4gIH1cblxuICAvKiogUmV0dXJucyBzdHJpbmcgbGFiZWwgb2YgZ2l2ZW4gc3RlcCBpZiBpdCBpcyBhIHRleHQgbGFiZWwuICovXG4gIF9zdHJpbmdMYWJlbCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbCBpbnN0YW5jZW9mIE1hdFN0ZXBMYWJlbCA/IG51bGwgOiB0aGlzLmxhYmVsO1xuICB9XG5cbiAgLyoqIFJldHVybnMgTWF0U3RlcExhYmVsIGlmIHRoZSBsYWJlbCBvZiBnaXZlbiBzdGVwIGlzIGEgdGVtcGxhdGUgbGFiZWwuICovXG4gIF90ZW1wbGF0ZUxhYmVsKCk6IE1hdFN0ZXBMYWJlbCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmxhYmVsIGluc3RhbmNlb2YgTWF0U3RlcExhYmVsID8gdGhpcy5sYWJlbCA6IG51bGw7XG4gIH1cblxuICAvKiogUmV0dXJucyB0aGUgaG9zdCBIVE1MIGVsZW1lbnQuICovXG4gIF9nZXRIb3N0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgLyoqIFRlbXBsYXRlIGNvbnRleHQgdmFyaWFibGVzIHRoYXQgYXJlIGV4cG9zZWQgdG8gdGhlIGBtYXRTdGVwcGVySWNvbmAgaW5zdGFuY2VzLiAqL1xuICBfZ2V0SWNvbkNvbnRleHQoKTogTWF0U3RlcHBlckljb25Db250ZXh0IHtcbiAgICByZXR1cm4ge1xuICAgICAgaW5kZXg6IHRoaXMuaW5kZXgsXG4gICAgICBhY3RpdmU6IHRoaXMuYWN0aXZlLFxuICAgICAgb3B0aW9uYWw6IHRoaXMub3B0aW9uYWxcbiAgICB9O1xuICB9XG5cbiAgX2dldERlZmF1bHRUZXh0Rm9yU3RhdGUoc3RhdGU6IFN0ZXBTdGF0ZSk6IHN0cmluZyB7XG4gICAgaWYgKHN0YXRlID09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5pbmRleCArIDF9YDtcbiAgICB9XG4gICAgaWYgKHN0YXRlID09ICdlZGl0Jykge1xuICAgICAgcmV0dXJuICdjcmVhdGUnO1xuICAgIH1cbiAgICBpZiAoc3RhdGUgPT0gJ2Vycm9yJykge1xuICAgICAgcmV0dXJuICd3YXJuaW5nJztcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iXX0=