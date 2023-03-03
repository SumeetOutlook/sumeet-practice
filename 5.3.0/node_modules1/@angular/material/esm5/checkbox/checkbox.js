/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Attribute, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Inject, Input, NgZone, Optional, Output, ViewChild, ViewEncapsulation, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatRipple, mixinColor, mixinDisabled, mixinDisableRipple, mixinTabIndex, } from '@angular/material/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { MAT_CHECKBOX_CLICK_ACTION, MAT_CHECKBOX_DEFAULT_OPTIONS } from './checkbox-config';
// Increasing integer for generating unique ids for checkbox components.
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/a11y';
import * as ɵngcc2 from '@angular/material/core';
import * as ɵngcc3 from '@angular/cdk/observers';

var _c0 = ["input"];
var _c1 = function () { return { enterDuration: 150 }; };
var _c2 = ["*"];
var nextUniqueId = 0;
/**
 * Provider Expression that allows mat-checkbox to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */
export var MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return MatCheckbox; }),
    multi: true
};
/**
 * Represents the different states that require custom transitions between them.
 * @docs-private
 */
export var TransitionCheckState;
(function (TransitionCheckState) {
    /** The initial state of the component before any user interaction. */
    TransitionCheckState[TransitionCheckState["Init"] = 0] = "Init";
    /** The state representing the component when it's becoming checked. */
    TransitionCheckState[TransitionCheckState["Checked"] = 1] = "Checked";
    /** The state representing the component when it's becoming unchecked. */
    TransitionCheckState[TransitionCheckState["Unchecked"] = 2] = "Unchecked";
    /** The state representing the component when it's becoming indeterminate. */
    TransitionCheckState[TransitionCheckState["Indeterminate"] = 3] = "Indeterminate";
})(TransitionCheckState || (TransitionCheckState = {}));
/** Change event object emitted by MatCheckbox. */
var MatCheckboxChange = /** @class */ (function () {
    function MatCheckboxChange() {
    }
    return MatCheckboxChange;
}());
export { MatCheckboxChange };
// Boilerplate for applying mixins to MatCheckbox.
/** @docs-private */
var MatCheckboxBase = /** @class */ (function () {
    function MatCheckboxBase(_elementRef) {
        this._elementRef = _elementRef;
    }
    return MatCheckboxBase;
}());
var _MatCheckboxMixinBase = mixinTabIndex(mixinColor(mixinDisableRipple(mixinDisabled(MatCheckboxBase))));
/**
 * A material design checkbox component. Supports all of the functionality of an HTML5 checkbox,
 * and exposes a similar API. A MatCheckbox can be either checked, unchecked, indeterminate, or
 * disabled. Note that all additional accessibility attributes are taken care of by the component,
 * so there is no need to provide them yourself. However, if you want to omit a label and still
 * have the checkbox be accessible, you may supply an [aria-label] input.
 * See: https://material.io/design/components/selection-controls.html
 */
var MatCheckbox = /** @class */ (function (_super) {
    __extends(MatCheckbox, _super);
    function MatCheckbox(elementRef, _changeDetectorRef, _focusMonitor, _ngZone, tabIndex, 
    /**
     * @deprecated `_clickAction` parameter to be removed, use
     * `MAT_CHECKBOX_DEFAULT_OPTIONS`
     * @breaking-change 10.0.0
     */
    _clickAction, _animationMode, _options) {
        var _this = _super.call(this, elementRef) || this;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._focusMonitor = _focusMonitor;
        _this._ngZone = _ngZone;
        _this._clickAction = _clickAction;
        _this._animationMode = _animationMode;
        _this._options = _options;
        /**
         * Attached to the aria-label attribute of the host element. In most cases, aria-labelledby will
         * take precedence so this may be omitted.
         */
        _this.ariaLabel = '';
        /**
         * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
         */
        _this.ariaLabelledby = null;
        _this._uniqueId = "mat-checkbox-" + ++nextUniqueId;
        /** A unique id for the checkbox input. If none is supplied, it will be auto-generated. */
        _this.id = _this._uniqueId;
        /** Whether the label should appear after or before the checkbox. Defaults to 'after' */
        _this.labelPosition = 'after';
        /** Name value will be applied to the input element if present */
        _this.name = null;
        /** Event emitted when the checkbox's `checked` value changes. */
        _this.change = new EventEmitter();
        /** Event emitted when the checkbox's `indeterminate` value changes. */
        _this.indeterminateChange = new EventEmitter();
        /**
         * Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor.
         * @docs-private
         */
        _this._onTouched = function () { };
        _this._currentAnimationClass = '';
        _this._currentCheckState = TransitionCheckState.Init;
        _this._controlValueAccessorChangeFn = function () { };
        _this._checked = false;
        _this._disabled = false;
        _this._indeterminate = false;
        _this._options = _this._options || {};
        if (_this._options.color) {
            _this.color = _this._options.color;
        }
        _this.tabIndex = parseInt(tabIndex) || 0;
        _this._focusMonitor.monitor(elementRef, true).subscribe(function (focusOrigin) {
            if (!focusOrigin) {
                // When a focused element becomes disabled, the browser *immediately* fires a blur event.
                // Angular does not expect events to be raised during change detection, so any state change
                // (such as a form control's 'ng-touched') will cause a changed-after-checked error.
                // See https://github.com/angular/angular/issues/17793. To work around this, we defer
                // telling the form control it has been touched until the next tick.
                Promise.resolve().then(function () {
                    _this._onTouched();
                    _changeDetectorRef.markForCheck();
                });
            }
        });
        // TODO: Remove this after the `_clickAction` parameter is removed as an injection parameter.
        _this._clickAction = _this._clickAction || _this._options.clickAction;
        return _this;
    }
    Object.defineProperty(MatCheckbox.prototype, "inputId", {
        /** Returns the unique id for the visual hidden input. */
        get: function () { return (this.id || this._uniqueId) + "-input"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatCheckbox.prototype, "required", {
        /** Whether the checkbox is required. */
        get: function () { return this._required; },
        set: function (value) { this._required = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    MatCheckbox.prototype.ngAfterViewInit = function () {
        this._syncIndeterminate(this._indeterminate);
    };
    // TODO: Delete next major revision.
    MatCheckbox.prototype.ngAfterViewChecked = function () { };
    MatCheckbox.prototype.ngOnDestroy = function () {
        this._focusMonitor.stopMonitoring(this._elementRef);
    };
    Object.defineProperty(MatCheckbox.prototype, "checked", {
        /**
         * Whether the checkbox is checked.
         */
        get: function () { return this._checked; },
        set: function (value) {
            if (value != this.checked) {
                this._checked = value;
                this._changeDetectorRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatCheckbox.prototype, "disabled", {
        /**
         * Whether the checkbox is disabled. This fully overrides the implementation provided by
         * mixinDisabled, but the mixin is still required because mixinTabIndex requires it.
         */
        get: function () { return this._disabled; },
        set: function (value) {
            var newValue = coerceBooleanProperty(value);
            if (newValue !== this.disabled) {
                this._disabled = newValue;
                this._changeDetectorRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatCheckbox.prototype, "indeterminate", {
        /**
         * Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to
         * represent a checkbox with three states, e.g. a checkbox that represents a nested list of
         * checkable items. Note that whenever checkbox is manually clicked, indeterminate is immediately
         * set to false.
         */
        get: function () { return this._indeterminate; },
        set: function (value) {
            var changed = value != this._indeterminate;
            this._indeterminate = coerceBooleanProperty(value);
            if (changed) {
                if (this._indeterminate) {
                    this._transitionCheckState(TransitionCheckState.Indeterminate);
                }
                else {
                    this._transitionCheckState(this.checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
                }
                this.indeterminateChange.emit(this._indeterminate);
            }
            this._syncIndeterminate(this._indeterminate);
        },
        enumerable: true,
        configurable: true
    });
    MatCheckbox.prototype._isRippleDisabled = function () {
        return this.disableRipple || this.disabled;
    };
    /** Method being called whenever the label text changes. */
    MatCheckbox.prototype._onLabelTextChange = function () {
        // Since the event of the `cdkObserveContent` directive runs outside of the zone, the checkbox
        // component will be only marked for check, but no actual change detection runs automatically.
        // Instead of going back into the zone in order to trigger a change detection which causes
        // *all* components to be checked (if explicitly marked or not using OnPush), we only trigger
        // an explicit change detection for the checkbox view and its children.
        this._changeDetectorRef.detectChanges();
    };
    // Implemented as part of ControlValueAccessor.
    MatCheckbox.prototype.writeValue = function (value) {
        this.checked = !!value;
    };
    // Implemented as part of ControlValueAccessor.
    MatCheckbox.prototype.registerOnChange = function (fn) {
        this._controlValueAccessorChangeFn = fn;
    };
    // Implemented as part of ControlValueAccessor.
    MatCheckbox.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    // Implemented as part of ControlValueAccessor.
    MatCheckbox.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    MatCheckbox.prototype._getAriaChecked = function () {
        return this.checked ? 'true' : (this.indeterminate ? 'mixed' : 'false');
    };
    MatCheckbox.prototype._transitionCheckState = function (newState) {
        var oldState = this._currentCheckState;
        var element = this._elementRef.nativeElement;
        if (oldState === newState) {
            return;
        }
        if (this._currentAnimationClass.length > 0) {
            element.classList.remove(this._currentAnimationClass);
        }
        this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
        this._currentCheckState = newState;
        if (this._currentAnimationClass.length > 0) {
            element.classList.add(this._currentAnimationClass);
            // Remove the animation class to avoid animation when the checkbox is moved between containers
            var animationClass_1 = this._currentAnimationClass;
            this._ngZone.runOutsideAngular(function () {
                setTimeout(function () {
                    element.classList.remove(animationClass_1);
                }, 1000);
            });
        }
    };
    MatCheckbox.prototype._emitChangeEvent = function () {
        var event = new MatCheckboxChange();
        event.source = this;
        event.checked = this.checked;
        this._controlValueAccessorChangeFn(this.checked);
        this.change.emit(event);
    };
    /** Toggles the `checked` state of the checkbox. */
    MatCheckbox.prototype.toggle = function () {
        this.checked = !this.checked;
    };
    /**
     * Event handler for checkbox input element.
     * Toggles checked state if element is not disabled.
     * Do not toggle on (change) event since IE doesn't fire change event when
     *   indeterminate checkbox is clicked.
     * @param event
     */
    MatCheckbox.prototype._onInputClick = function (event) {
        var _this = this;
        // We have to stop propagation for click events on the visual hidden input element.
        // By default, when a user clicks on a label element, a generated click event will be
        // dispatched on the associated input element. Since we are using a label element as our
        // root container, the click event on the `checkbox` will be executed twice.
        // The real click event will bubble up, and the generated click event also tries to bubble up.
        // This will lead to multiple click events.
        // Preventing bubbling for the second event will solve that issue.
        event.stopPropagation();
        // If resetIndeterminate is false, and the current state is indeterminate, do nothing on click
        if (!this.disabled && this._clickAction !== 'noop') {
            // When user manually click on the checkbox, `indeterminate` is set to false.
            if (this.indeterminate && this._clickAction !== 'check') {
                Promise.resolve().then(function () {
                    _this._indeterminate = false;
                    _this.indeterminateChange.emit(_this._indeterminate);
                });
            }
            this.toggle();
            this._transitionCheckState(this._checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
            // Emit our custom change event if the native input emitted one.
            // It is important to only emit it, if the native input triggered one, because
            // we don't want to trigger a change event, when the `checked` variable changes for example.
            this._emitChangeEvent();
        }
        else if (!this.disabled && this._clickAction === 'noop') {
            // Reset native input when clicked with noop. The native checkbox becomes checked after
            // click, reset it to be align with `checked` value of `mat-checkbox`.
            this._inputElement.nativeElement.checked = this.checked;
            this._inputElement.nativeElement.indeterminate = this.indeterminate;
        }
    };
    /** Focuses the checkbox. */
    MatCheckbox.prototype.focus = function (origin, options) {
        if (origin === void 0) { origin = 'keyboard'; }
        this._focusMonitor.focusVia(this._inputElement, origin, options);
    };
    MatCheckbox.prototype._onInteractionEvent = function (event) {
        // We always have to stop propagation on the change event.
        // Otherwise the change event, from the input element, will bubble up and
        // emit its event object to the `change` output.
        event.stopPropagation();
    };
    MatCheckbox.prototype._getAnimationClassForCheckStateTransition = function (oldState, newState) {
        // Don't transition if animations are disabled.
        if (this._animationMode === 'NoopAnimations') {
            return '';
        }
        var animSuffix = '';
        switch (oldState) {
            case TransitionCheckState.Init:
                // Handle edge case where user interacts with checkbox that does not have [(ngModel)] or
                // [checked] bound to it.
                if (newState === TransitionCheckState.Checked) {
                    animSuffix = 'unchecked-checked';
                }
                else if (newState == TransitionCheckState.Indeterminate) {
                    animSuffix = 'unchecked-indeterminate';
                }
                else {
                    return '';
                }
                break;
            case TransitionCheckState.Unchecked:
                animSuffix = newState === TransitionCheckState.Checked ?
                    'unchecked-checked' : 'unchecked-indeterminate';
                break;
            case TransitionCheckState.Checked:
                animSuffix = newState === TransitionCheckState.Unchecked ?
                    'checked-unchecked' : 'checked-indeterminate';
                break;
            case TransitionCheckState.Indeterminate:
                animSuffix = newState === TransitionCheckState.Checked ?
                    'indeterminate-checked' : 'indeterminate-unchecked';
                break;
        }
        return "mat-checkbox-anim-" + animSuffix;
    };
    /**
     * Syncs the indeterminate value with the checkbox DOM node.
     *
     * We sync `indeterminate` directly on the DOM node, because in Ivy the check for whether a
     * property is supported on an element boils down to `if (propName in element)`. Domino's
     * HTMLInputElement doesn't have an `indeterminate` property so Ivy will warn during
     * server-side rendering.
     */
    MatCheckbox.prototype._syncIndeterminate = function (value) {
        var nativeCheckbox = this._inputElement;
        if (nativeCheckbox) {
            nativeCheckbox.nativeElement.indeterminate = value;
        }
    };
    /** @nocollapse */
    MatCheckbox.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: FocusMonitor },
        { type: NgZone },
        { type: String, decorators: [{ type: Attribute, args: ['tabindex',] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_CHECKBOX_CLICK_ACTION,] }] },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_CHECKBOX_DEFAULT_OPTIONS,] }] }
    ]; };
    MatCheckbox.propDecorators = {
        ariaLabel: [{ type: Input, args: ['aria-label',] }],
        ariaLabelledby: [{ type: Input, args: ['aria-labelledby',] }],
        id: [{ type: Input }],
        required: [{ type: Input }],
        labelPosition: [{ type: Input }],
        name: [{ type: Input }],
        change: [{ type: Output }],
        indeterminateChange: [{ type: Output }],
        value: [{ type: Input }],
        _inputElement: [{ type: ViewChild, args: ['input',] }],
        ripple: [{ type: ViewChild, args: [MatRipple,] }],
        checked: [{ type: Input }],
        disabled: [{ type: Input }],
        indeterminate: [{ type: Input }]
    };
MatCheckbox.ɵfac = function MatCheckbox_Factory(t) { return new (t || MatCheckbox)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FocusMonitor), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵinjectAttribute('tabindex'), ɵngcc0.ɵɵdirectiveInject(MAT_CHECKBOX_CLICK_ACTION, 8), ɵngcc0.ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8), ɵngcc0.ɵɵdirectiveInject(MAT_CHECKBOX_DEFAULT_OPTIONS, 8)); };
MatCheckbox.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatCheckbox, selectors: [["mat-checkbox"]], viewQuery: function MatCheckbox_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(MatRipple, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._inputElement = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.ripple = _t.first);
    } }, hostAttrs: [1, "mat-checkbox"], hostVars: 12, hostBindings: function MatCheckbox_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵhostProperty("id", ctx.id);
        ɵngcc0.ɵɵattribute("tabindex", null);
        ɵngcc0.ɵɵclassProp("mat-checkbox-indeterminate", ctx.indeterminate)("mat-checkbox-checked", ctx.checked)("mat-checkbox-disabled", ctx.disabled)("mat-checkbox-label-before", ctx.labelPosition == "before")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    } }, inputs: { disableRipple: "disableRipple", color: "color", tabIndex: "tabIndex", required: "required", checked: "checked", disabled: "disabled", indeterminate: "indeterminate", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], id: "id", labelPosition: "labelPosition", name: "name", value: "value" }, outputs: { change: "change", indeterminateChange: "indeterminateChange" }, exportAs: ["matCheckbox"], features: [ɵngcc0.ɵɵProvidersFeature([MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c2, decls: 17, vars: 19, consts: [[1, "mat-checkbox-layout"], ["label", ""], [1, "mat-checkbox-inner-container"], ["type", "checkbox", 1, "mat-checkbox-input", "cdk-visually-hidden", 3, "id", "required", "checked", "disabled", "tabIndex", "change", "click"], ["input", ""], ["matRipple", "", 1, "mat-checkbox-ripple", 3, "matRippleTrigger", "matRippleDisabled", "matRippleRadius", "matRippleCentered", "matRippleAnimation"], [1, "mat-ripple-element", "mat-checkbox-persistent-ripple"], [1, "mat-checkbox-frame"], [1, "mat-checkbox-background"], ["version", "1.1", "focusable", "false", "viewBox", "0 0 24 24", 0, "xml", "space", "preserve", 1, "mat-checkbox-checkmark"], ["fill", "none", "stroke", "white", "d", "M4.1,12.7 9,17.6 20.3,6.3", 1, "mat-checkbox-checkmark-path"], [1, "mat-checkbox-mixedmark"], [1, "mat-checkbox-label", 3, "cdkObserveContent"], ["checkboxLabel", ""], [2, "display", "none"]], template: function MatCheckbox_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "label", 0, 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "input", 3, 4);
        ɵngcc0.ɵɵlistener("change", function MatCheckbox_Template_input_change_3_listener($event) { return ctx._onInteractionEvent($event); })("click", function MatCheckbox_Template_input_click_3_listener($event) { return ctx._onInputClick($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "div", 5);
        ɵngcc0.ɵɵelement(6, "div", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(7, "div", 7);
        ɵngcc0.ɵɵelementStart(8, "div", 8);
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(9, "svg", 9);
        ɵngcc0.ɵɵelement(10, "path", 10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵnamespaceHTML();
        ɵngcc0.ɵɵelement(11, "div", 11);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(12, "span", 12, 13);
        ɵngcc0.ɵɵlistener("cdkObserveContent", function MatCheckbox_Template_span_cdkObserveContent_12_listener() { return ctx._onLabelTextChange(); });
        ɵngcc0.ɵɵelementStart(14, "span", 14);
        ɵngcc0.ɵɵtext(15, "\u00A0");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵprojection(16);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        var _r0 = ɵngcc0.ɵɵreference(1);
        var _r2 = ɵngcc0.ɵɵreference(13);
        ɵngcc0.ɵɵattribute("for", ctx.inputId);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassProp("mat-checkbox-inner-container-no-side-margin", !_r2.textContent || !_r2.textContent.trim());
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("id", ctx.inputId)("required", ctx.required)("checked", ctx.checked)("disabled", ctx.disabled)("tabIndex", ctx.tabIndex);
        ɵngcc0.ɵɵattribute("value", ctx.value)("name", ctx.name)("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby)("aria-checked", ctx._getAriaChecked());
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("matRippleTrigger", _r0)("matRippleDisabled", ctx._isRippleDisabled())("matRippleRadius", 20)("matRippleCentered", true)("matRippleAnimation", ɵngcc0.ɵɵpureFunction0(18, _c1));
    } }, directives: [ɵngcc2.MatRipple, ɵngcc3.CdkObserveContent], styles: ["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.mat-checkbox.cdk-keyboard-focused .cdk-high-contrast-active .mat-checkbox-frame{border-style:dotted}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}._mat-animation-noopable .mat-checkbox-background{transition:none}.cdk-high-contrast-active .mat-checkbox .mat-checkbox-background{background:none}.mat-checkbox-persistent-ripple{width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.cdk-high-contrast-black-on-white .mat-checkbox-checkmark-path{stroke:#000 !important}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.cdk-high-contrast-active .mat-checkbox-disabled{opacity:.5}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}\n"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCheckbox, [{
        type: Component,
        args: [{
                selector: 'mat-checkbox',
                template: "<label [attr.for]=\"inputId\" class=\"mat-checkbox-layout\" #label>\n  <div class=\"mat-checkbox-inner-container\"\n       [class.mat-checkbox-inner-container-no-side-margin]=\"!checkboxLabel.textContent || !checkboxLabel.textContent.trim()\">\n    <input #input\n           class=\"mat-checkbox-input cdk-visually-hidden\" type=\"checkbox\"\n           [id]=\"inputId\"\n           [required]=\"required\"\n           [checked]=\"checked\"\n           [attr.value]=\"value\"\n           [disabled]=\"disabled\"\n           [attr.name]=\"name\"\n           [tabIndex]=\"tabIndex\"\n           [attr.aria-label]=\"ariaLabel || null\"\n           [attr.aria-labelledby]=\"ariaLabelledby\"\n           [attr.aria-checked]=\"_getAriaChecked()\"\n           (change)=\"_onInteractionEvent($event)\"\n           (click)=\"_onInputClick($event)\">\n    <div matRipple class=\"mat-checkbox-ripple\"\n         [matRippleTrigger]=\"label\"\n         [matRippleDisabled]=\"_isRippleDisabled()\"\n         [matRippleRadius]=\"20\"\n         [matRippleCentered]=\"true\"\n         [matRippleAnimation]=\"{enterDuration: 150}\">\n      <div class=\"mat-ripple-element mat-checkbox-persistent-ripple\"></div>\n    </div>\n    <div class=\"mat-checkbox-frame\"></div>\n    <div class=\"mat-checkbox-background\">\n      <svg version=\"1.1\"\n           focusable=\"false\"\n           class=\"mat-checkbox-checkmark\"\n           viewBox=\"0 0 24 24\"\n           xml:space=\"preserve\">\n        <path class=\"mat-checkbox-checkmark-path\"\n              fill=\"none\"\n              stroke=\"white\"\n              d=\"M4.1,12.7 9,17.6 20.3,6.3\"/>\n      </svg>\n      <!-- Element for rendering the indeterminate state checkbox. -->\n      <div class=\"mat-checkbox-mixedmark\"></div>\n    </div>\n  </div>\n  <span class=\"mat-checkbox-label\" #checkboxLabel (cdkObserveContent)=\"_onLabelTextChange()\">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style=\"display:none\">&nbsp;</span>\n    <ng-content></ng-content>\n  </span>\n</label>\n",
                exportAs: 'matCheckbox',
                host: {
                    'class': 'mat-checkbox',
                    '[id]': 'id',
                    '[attr.tabindex]': 'null',
                    '[class.mat-checkbox-indeterminate]': 'indeterminate',
                    '[class.mat-checkbox-checked]': 'checked',
                    '[class.mat-checkbox-disabled]': 'disabled',
                    '[class.mat-checkbox-label-before]': 'labelPosition == "before"',
                    '[class._mat-animation-noopable]': "_animationMode === 'NoopAnimations'"
                },
                providers: [MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR],
                inputs: ['disableRipple', 'color', 'tabIndex'],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.mat-checkbox.cdk-keyboard-focused .cdk-high-contrast-active .mat-checkbox-frame{border-style:dotted}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}._mat-animation-noopable .mat-checkbox-background{transition:none}.cdk-high-contrast-active .mat-checkbox .mat-checkbox-background{background:none}.mat-checkbox-persistent-ripple{width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.cdk-high-contrast-black-on-white .mat-checkbox-checkmark-path{stroke:#000 !important}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.cdk-high-contrast-active .mat-checkbox-disabled{opacity:.5}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}\n"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.FocusMonitor }, { type: ɵngcc0.NgZone }, { type: String, decorators: [{
                type: Attribute,
                args: ['tabindex']
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [MAT_CHECKBOX_CLICK_ACTION]
            }] }, { type: String, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ANIMATION_MODULE_TYPE]
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [MAT_CHECKBOX_DEFAULT_OPTIONS]
            }] }]; }, { required: [{
            type: Input
        }], checked: [{
            type: Input
        }], disabled: [{
            type: Input
        }], indeterminate: [{
            type: Input
        }], ariaLabel: [{
            type: Input,
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: Input,
            args: ['aria-labelledby']
        }], id: [{
            type: Input
        }], labelPosition: [{
            type: Input
        }], name: [{
            type: Input
        }], change: [{
            type: Output
        }], indeterminateChange: [{
            type: Output
        }], value: [{
            type: Input
        }], _inputElement: [{
            type: ViewChild,
            args: ['input']
        }], ripple: [{
            type: ViewChild,
            args: [MatRipple]
        }] }); })();
    return MatCheckbox;
}(_MatCheckboxMixinBase));
export { MatCheckbox };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9jaGVja2JveC9jaGVja2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQWtCLFlBQVksRUFBYyxNQUFNLG1CQUFtQixDQUFDO0FBQzdFLE9BQU8sRUFBZSxxQkFBcUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzFFLE9BQU8sRUFFTCxTQUFTLEVBQ1QsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBRU4sUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEdBRWxCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBdUIsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RSxPQUFPLEVBU0wsU0FBUyxFQUNULFVBQVUsRUFDVixhQUFhLEVBQ2Isa0JBQWtCLEVBQ2xCLGFBQWEsR0FDZCxNQUFNLHdCQUF3QixDQUFDO0FBQ2hDLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFDTCx5QkFBeUIsRUFDekIsNEJBQTRCLEVBRzdCLE1BQU0sbUJBQW1CLENBQUM7QUFHM0Isd0VBQXdFOzs7Ozs7Ozs7QUFDeEUsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILE1BQU0sQ0FBQyxJQUFNLG1DQUFtQyxHQUFRO0FBQ3hELElBQUUsT0FBTyxFQUFFLGlCQUFpQjtBQUM1QixJQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLFdBQVcsRUFBWCxDQUFXLENBQUM7QUFDNUMsSUFBRSxLQUFLLEVB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R1YsS0FBSztBQUFLLHlCQUdWLE1BQU07QUFBSyxzQ0FJWCxNQUFNO0FBQUssd0JBR1gsS0FBSztBQUFLLGdDQUdWLFNBQVMsU0FBQyxPQUFPO0FBQU8seUJBR3hCLFNBQVMsU0FBQyxTQUFTO0FBQU8sMEJBc0UxQixLQUFLO0FBQ04sMkJBYUMsS0FBSztBQUNOLGdDQWlCQyxLQUFLO0FBQ1A7Ozs7Ozs7O3dDQTFLNkIsc0JBRTVCLFFBQVEsRUFBRTtBQUFhLHNCQUN2QixJQUFJLEVBQUUsMEJBQ0osT0FBTyxFQUFFLGNBQWMsMEJBQ3ZCLE1BQU0sRUFBRSxJQUFJO2FBQ1osaUJBQWlCLEVBQUUsTUFBTTttQkFDekI7U0FBb0MsRUFBRSxlQUFlLDBCQUNyRCw4QkFBOEIsRUFBRSxTQUFTLDBCQUN6QywrQkFBK0IsRUFBRSxVQUFVLDBCQUMzQyxtQ0FBbUMsRUFBRSwyQkFBMkIsMEJBQ2hFOzhCQUFpQyxFQUFFLHFDQUFxQyx1QkFDekUsc0JBQ0QsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUMsc0JBQ2hELE1BQU0sRUFBRSxDQUFDLGVBQWUsRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDLHNCQUM5QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxzQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyK0dBQ2hEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQXlKTTtBQUFDLElBc05SLGtCQUFDO0FBQ0EsQ0FEQSxBQWxZRCxDQW9CaUMscUJBQXFCLEdBOFdyRDtBQUNELFNBL1dhLFdBQVc7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0ZvY3VzYWJsZU9wdGlvbiwgRm9jdXNNb25pdG9yLCBGb2N1c09yaWdpbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHtCb29sZWFuSW5wdXQsIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0NoZWNrZWQsXG4gIEF0dHJpYnV0ZSxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIEFmdGVyVmlld0luaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIENhbkNvbG9yLFxuICBDYW5Db2xvckN0b3IsXG4gIENhbkRpc2FibGUsXG4gIENhbkRpc2FibGVDdG9yLFxuICBDYW5EaXNhYmxlUmlwcGxlLFxuICBDYW5EaXNhYmxlUmlwcGxlQ3RvcixcbiAgSGFzVGFiSW5kZXgsXG4gIEhhc1RhYkluZGV4Q3RvcixcbiAgTWF0UmlwcGxlLFxuICBtaXhpbkNvbG9yLFxuICBtaXhpbkRpc2FibGVkLFxuICBtaXhpbkRpc2FibGVSaXBwbGUsXG4gIG1peGluVGFiSW5kZXgsXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtBTklNQVRJT05fTU9EVUxFX1RZUEV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge1xuICBNQVRfQ0hFQ0tCT1hfQ0xJQ0tfQUNUSU9OLFxuICBNQVRfQ0hFQ0tCT1hfREVGQVVMVF9PUFRJT05TLFxuICBNYXRDaGVja2JveENsaWNrQWN0aW9uLFxuICBNYXRDaGVja2JveERlZmF1bHRPcHRpb25zXG59IGZyb20gJy4vY2hlY2tib3gtY29uZmlnJztcblxuXG4vLyBJbmNyZWFzaW5nIGludGVnZXIgZm9yIGdlbmVyYXRpbmcgdW5pcXVlIGlkcyBmb3IgY2hlY2tib3ggY29tcG9uZW50cy5cbmxldCBuZXh0VW5pcXVlSWQgPSAwO1xuXG4vKipcbiAqIFByb3ZpZGVyIEV4cHJlc3Npb24gdGhhdCBhbGxvd3MgbWF0LWNoZWNrYm94IHRvIHJlZ2lzdGVyIGFzIGEgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gKiBUaGlzIGFsbG93cyBpdCB0byBzdXBwb3J0IFsobmdNb2RlbCldLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3QgTUFUX0NIRUNLQk9YX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1hdENoZWNrYm94KSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgZGlmZmVyZW50IHN0YXRlcyB0aGF0IHJlcXVpcmUgY3VzdG9tIHRyYW5zaXRpb25zIGJldHdlZW4gdGhlbS5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZXhwb3J0IGVudW0gVHJhbnNpdGlvbkNoZWNrU3RhdGUge1xuICAvKiogVGhlIGluaXRpYWwgc3RhdGUgb2YgdGhlIGNvbXBvbmVudCBiZWZvcmUgYW55IHVzZXIgaW50ZXJhY3Rpb24uICovXG4gIEluaXQsXG4gIC8qKiBUaGUgc3RhdGUgcmVwcmVzZW50aW5nIHRoZSBjb21wb25lbnQgd2hlbiBpdCdzIGJlY29taW5nIGNoZWNrZWQuICovXG4gIENoZWNrZWQsXG4gIC8qKiBUaGUgc3RhdGUgcmVwcmVzZW50aW5nIHRoZSBjb21wb25lbnQgd2hlbiBpdCdzIGJlY29taW5nIHVuY2hlY2tlZC4gKi9cbiAgVW5jaGVja2VkLFxuICAvKiogVGhlIHN0YXRlIHJlcHJlc2VudGluZyB0aGUgY29tcG9uZW50IHdoZW4gaXQncyBiZWNvbWluZyBpbmRldGVybWluYXRlLiAqL1xuICBJbmRldGVybWluYXRlXG59XG5cbi8qKiBDaGFuZ2UgZXZlbnQgb2JqZWN0IGVtaXR0ZWQgYnkgTWF0Q2hlY2tib3guICovXG5leHBvcnQgY2xhc3MgTWF0Q2hlY2tib3hDaGFuZ2Uge1xuICAvKiogVGhlIHNvdXJjZSBNYXRDaGVja2JveCBvZiB0aGUgZXZlbnQuICovXG4gIHNvdXJjZTogTWF0Q2hlY2tib3g7XG4gIC8qKiBUaGUgbmV3IGBjaGVja2VkYCB2YWx1ZSBvZiB0aGUgY2hlY2tib3guICovXG4gIGNoZWNrZWQ6IGJvb2xlYW47XG59XG5cbi8vIEJvaWxlcnBsYXRlIGZvciBhcHBseWluZyBtaXhpbnMgdG8gTWF0Q2hlY2tib3guXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuY2xhc3MgTWF0Q2hlY2tib3hCYXNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxufVxuY29uc3QgX01hdENoZWNrYm94TWl4aW5CYXNlOlxuICAgIEhhc1RhYkluZGV4Q3RvciAmXG4gICAgQ2FuQ29sb3JDdG9yICZcbiAgICBDYW5EaXNhYmxlUmlwcGxlQ3RvciAmXG4gICAgQ2FuRGlzYWJsZUN0b3IgJlxuICAgIHR5cGVvZiBNYXRDaGVja2JveEJhc2UgPVxuICAgICAgICBtaXhpblRhYkluZGV4KG1peGluQ29sb3IobWl4aW5EaXNhYmxlUmlwcGxlKG1peGluRGlzYWJsZWQoTWF0Q2hlY2tib3hCYXNlKSkpKTtcblxuXG4vKipcbiAqIEEgbWF0ZXJpYWwgZGVzaWduIGNoZWNrYm94IGNvbXBvbmVudC4gU3VwcG9ydHMgYWxsIG9mIHRoZSBmdW5jdGlvbmFsaXR5IG9mIGFuIEhUTUw1IGNoZWNrYm94LFxuICogYW5kIGV4cG9zZXMgYSBzaW1pbGFyIEFQSS4gQSBNYXRDaGVja2JveCBjYW4gYmUgZWl0aGVyIGNoZWNrZWQsIHVuY2hlY2tlZCwgaW5kZXRlcm1pbmF0ZSwgb3JcbiAqIGRpc2FibGVkLiBOb3RlIHRoYXQgYWxsIGFkZGl0aW9uYWwgYWNjZXNzaWJpbGl0eSBhdHRyaWJ1dGVzIGFyZSB0YWtlbiBjYXJlIG9mIGJ5IHRoZSBjb21wb25lbnQsXG4gKiBzbyB0aGVyZSBpcyBubyBuZWVkIHRvIHByb3ZpZGUgdGhlbSB5b3Vyc2VsZi4gSG93ZXZlciwgaWYgeW91IHdhbnQgdG8gb21pdCBhIGxhYmVsIGFuZCBzdGlsbFxuICogaGF2ZSB0aGUgY2hlY2tib3ggYmUgYWNjZXNzaWJsZSwgeW91IG1heSBzdXBwbHkgYW4gW2FyaWEtbGFiZWxdIGlucHV0LlxuICogU2VlOiBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9jb21wb25lbnRzL3NlbGVjdGlvbi1jb250cm9scy5odG1sXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1jaGVja2JveCcsXG4gIHRlbXBsYXRlVXJsOiAnY2hlY2tib3guaHRtbCcsXG4gIHN0eWxlVXJsczogWydjaGVja2JveC5jc3MnXSxcbiAgZXhwb3J0QXM6ICdtYXRDaGVja2JveCcsXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnbWF0LWNoZWNrYm94JyxcbiAgICAnW2lkXSc6ICdpZCcsXG4gICAgJ1thdHRyLnRhYmluZGV4XSc6ICdudWxsJyxcbiAgICAnW2NsYXNzLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlXSc6ICdpbmRldGVybWluYXRlJyxcbiAgICAnW2NsYXNzLm1hdC1jaGVja2JveC1jaGVja2VkXSc6ICdjaGVja2VkJyxcbiAgICAnW2NsYXNzLm1hdC1jaGVja2JveC1kaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxuICAgICdbY2xhc3MubWF0LWNoZWNrYm94LWxhYmVsLWJlZm9yZV0nOiAnbGFiZWxQb3NpdGlvbiA9PSBcImJlZm9yZVwiJyxcbiAgICAnW2NsYXNzLl9tYXQtYW5pbWF0aW9uLW5vb3BhYmxlXSc6IGBfYW5pbWF0aW9uTW9kZSA9PT0gJ05vb3BBbmltYXRpb25zJ2AsXG4gIH0sXG4gIHByb3ZpZGVyczogW01BVF9DSEVDS0JPWF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXSxcbiAgaW5wdXRzOiBbJ2Rpc2FibGVSaXBwbGUnLCAnY29sb3InLCAndGFiSW5kZXgnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTWF0Q2hlY2tib3ggZXh0ZW5kcyBfTWF0Q2hlY2tib3hNaXhpbkJhc2UgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgICBBZnRlclZpZXdJbml0LCBBZnRlclZpZXdDaGVja2VkLCBPbkRlc3Ryb3ksIENhbkNvbG9yLCBDYW5EaXNhYmxlLCBIYXNUYWJJbmRleCwgQ2FuRGlzYWJsZVJpcHBsZSxcbiAgICBGb2N1c2FibGVPcHRpb24ge1xuXG4gIC8qKlxuICAgKiBBdHRhY2hlZCB0byB0aGUgYXJpYS1sYWJlbCBhdHRyaWJ1dGUgb2YgdGhlIGhvc3QgZWxlbWVudC4gSW4gbW9zdCBjYXNlcywgYXJpYS1sYWJlbGxlZGJ5IHdpbGxcbiAgICogdGFrZSBwcmVjZWRlbmNlIHNvIHRoaXMgbWF5IGJlIG9taXR0ZWQuXG4gICAqL1xuICBASW5wdXQoJ2FyaWEtbGFiZWwnKSBhcmlhTGFiZWw6IHN0cmluZyA9ICcnO1xuXG4gIC8qKlxuICAgKiBVc2VycyBjYW4gc3BlY2lmeSB0aGUgYGFyaWEtbGFiZWxsZWRieWAgYXR0cmlidXRlIHdoaWNoIHdpbGwgYmUgZm9yd2FyZGVkIHRvIHRoZSBpbnB1dCBlbGVtZW50XG4gICAqL1xuICBASW5wdXQoJ2FyaWEtbGFiZWxsZWRieScpIGFyaWFMYWJlbGxlZGJ5OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuICBwcml2YXRlIF91bmlxdWVJZDogc3RyaW5nID0gYG1hdC1jaGVja2JveC0keysrbmV4dFVuaXF1ZUlkfWA7XG5cbiAgLyoqIEEgdW5pcXVlIGlkIGZvciB0aGUgY2hlY2tib3ggaW5wdXQuIElmIG5vbmUgaXMgc3VwcGxpZWQsIGl0IHdpbGwgYmUgYXV0by1nZW5lcmF0ZWQuICovXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmcgPSB0aGlzLl91bmlxdWVJZDtcblxuICAvKiogUmV0dXJucyB0aGUgdW5pcXVlIGlkIGZvciB0aGUgdmlzdWFsIGhpZGRlbiBpbnB1dC4gKi9cbiAgZ2V0IGlucHV0SWQoKTogc3RyaW5nIHsgcmV0dXJuIGAke3RoaXMuaWQgfHwgdGhpcy5fdW5pcXVlSWR9LWlucHV0YDsgfVxuXG4gIC8qKiBXaGV0aGVyIHRoZSBjaGVja2JveCBpcyByZXF1aXJlZC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHJlcXVpcmVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7IH1cbiAgc2V0IHJlcXVpcmVkKHZhbHVlOiBib29sZWFuKSB7IHRoaXMuX3JlcXVpcmVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTsgfVxuICBwcml2YXRlIF9yZXF1aXJlZDogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciB0aGUgbGFiZWwgc2hvdWxkIGFwcGVhciBhZnRlciBvciBiZWZvcmUgdGhlIGNoZWNrYm94LiBEZWZhdWx0cyB0byAnYWZ0ZXInICovXG4gIEBJbnB1dCgpIGxhYmVsUG9zaXRpb246ICdiZWZvcmUnIHwgJ2FmdGVyJyA9ICdhZnRlcic7XG5cbiAgLyoqIE5hbWUgdmFsdWUgd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBpbnB1dCBlbGVtZW50IGlmIHByZXNlbnQgKi9cbiAgQElucHV0KCkgbmFtZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgY2hlY2tib3gncyBgY2hlY2tlZGAgdmFsdWUgY2hhbmdlcy4gKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZTogRXZlbnRFbWl0dGVyPE1hdENoZWNrYm94Q2hhbmdlPiA9XG4gICAgICBuZXcgRXZlbnRFbWl0dGVyPE1hdENoZWNrYm94Q2hhbmdlPigpO1xuXG4gIC8qKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIGNoZWNrYm94J3MgYGluZGV0ZXJtaW5hdGVgIHZhbHVlIGNoYW5nZXMuICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBpbmRldGVybWluYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgLyoqIFRoZSB2YWx1ZSBhdHRyaWJ1dGUgb2YgdGhlIG5hdGl2ZSBpbnB1dCBlbGVtZW50ICovXG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBuYXRpdmUgYDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIj5gIGVsZW1lbnQgKi9cbiAgQFZpZXdDaGlsZCgnaW5wdXQnKSBfaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gIC8qKiBSZWZlcmVuY2UgdG8gdGhlIHJpcHBsZSBpbnN0YW5jZSBvZiB0aGUgY2hlY2tib3guICovXG4gIEBWaWV3Q2hpbGQoTWF0UmlwcGxlKSByaXBwbGU6IE1hdFJpcHBsZTtcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIGNoZWNrYm94IGlzIGJsdXJyZWQuIE5lZWRlZCB0byBwcm9wZXJseSBpbXBsZW1lbnQgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIF9vblRvdWNoZWQ6ICgpID0+IGFueSA9ICgpID0+IHt9O1xuXG4gIHByaXZhdGUgX2N1cnJlbnRBbmltYXRpb25DbGFzczogc3RyaW5nID0gJyc7XG5cbiAgcHJpdmF0ZSBfY3VycmVudENoZWNrU3RhdGU6IFRyYW5zaXRpb25DaGVja1N0YXRlID0gVHJhbnNpdGlvbkNoZWNrU3RhdGUuSW5pdDtcblxuICBwcml2YXRlIF9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgICAgICAgICAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2ZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLFxuICAgICAgICAgICAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICAgICAgICAgICAgQEF0dHJpYnV0ZSgndGFiaW5kZXgnKSB0YWJJbmRleDogc3RyaW5nLFxuICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICogQGRlcHJlY2F0ZWQgYF9jbGlja0FjdGlvbmAgcGFyYW1ldGVyIHRvIGJlIHJlbW92ZWQsIHVzZVxuICAgICAgICAgICAgICAgKiBgTUFUX0NIRUNLQk9YX0RFRkFVTFRfT1BUSU9OU2BcbiAgICAgICAgICAgICAgICogQGJyZWFraW5nLWNoYW5nZSAxMC4wLjBcbiAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTUFUX0NIRUNLQk9YX0NMSUNLX0FDVElPTilcbiAgICAgICAgICAgICAgICAgIHByaXZhdGUgX2NsaWNrQWN0aW9uOiBNYXRDaGVja2JveENsaWNrQWN0aW9uLFxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEFOSU1BVElPTl9NT0RVTEVfVFlQRSkgcHVibGljIF9hbmltYXRpb25Nb2RlPzogc3RyaW5nLFxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE1BVF9DSEVDS0JPWF9ERUZBVUxUX09QVElPTlMpXG4gICAgICAgICAgICAgICAgICBwcml2YXRlIF9vcHRpb25zPzogTWF0Q2hlY2tib3hEZWZhdWx0T3B0aW9ucykge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYpO1xuICAgIHRoaXMuX29wdGlvbnMgPSB0aGlzLl9vcHRpb25zIHx8IHt9O1xuXG4gICAgaWYgKHRoaXMuX29wdGlvbnMuY29sb3IpIHtcbiAgICAgIHRoaXMuY29sb3IgPSB0aGlzLl9vcHRpb25zLmNvbG9yO1xuICAgIH1cblxuICAgIHRoaXMudGFiSW5kZXggPSBwYXJzZUludCh0YWJJbmRleCkgfHwgMDtcblxuICAgIHRoaXMuX2ZvY3VzTW9uaXRvci5tb25pdG9yKGVsZW1lbnRSZWYsIHRydWUpLnN1YnNjcmliZShmb2N1c09yaWdpbiA9PiB7XG4gICAgICBpZiAoIWZvY3VzT3JpZ2luKSB7XG4gICAgICAgIC8vIFdoZW4gYSBmb2N1c2VkIGVsZW1lbnQgYmVjb21lcyBkaXNhYmxlZCwgdGhlIGJyb3dzZXIgKmltbWVkaWF0ZWx5KiBmaXJlcyBhIGJsdXIgZXZlbnQuXG4gICAgICAgIC8vIEFuZ3VsYXIgZG9lcyBub3QgZXhwZWN0IGV2ZW50cyB0byBiZSByYWlzZWQgZHVyaW5nIGNoYW5nZSBkZXRlY3Rpb24sIHNvIGFueSBzdGF0ZSBjaGFuZ2VcbiAgICAgICAgLy8gKHN1Y2ggYXMgYSBmb3JtIGNvbnRyb2wncyAnbmctdG91Y2hlZCcpIHdpbGwgY2F1c2UgYSBjaGFuZ2VkLWFmdGVyLWNoZWNrZWQgZXJyb3IuXG4gICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xNzc5My4gVG8gd29yayBhcm91bmQgdGhpcywgd2UgZGVmZXJcbiAgICAgICAgLy8gdGVsbGluZyB0aGUgZm9ybSBjb250cm9sIGl0IGhhcyBiZWVuIHRvdWNoZWQgdW50aWwgdGhlIG5leHQgdGljay5cbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gICAgICAgICAgX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFRPRE86IFJlbW92ZSB0aGlzIGFmdGVyIHRoZSBgX2NsaWNrQWN0aW9uYCBwYXJhbWV0ZXIgaXMgcmVtb3ZlZCBhcyBhbiBpbmplY3Rpb24gcGFyYW1ldGVyLlxuICAgIHRoaXMuX2NsaWNrQWN0aW9uID0gdGhpcy5fY2xpY2tBY3Rpb24gfHwgdGhpcy5fb3B0aW9ucy5jbGlja0FjdGlvbjtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9zeW5jSW5kZXRlcm1pbmF0ZSh0aGlzLl9pbmRldGVybWluYXRlKTtcbiAgfVxuXG4gIC8vIFRPRE86IERlbGV0ZSBuZXh0IG1ham9yIHJldmlzaW9uLlxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7fVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2ZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLl9lbGVtZW50UmVmKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLlxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGNoZWNrZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9jaGVja2VkOyB9XG4gIHNldCBjaGVja2VkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlICE9IHRoaXMuY2hlY2tlZCkge1xuICAgICAgdGhpcy5fY2hlY2tlZCA9IHZhbHVlO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX2NoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgY2hlY2tib3ggaXMgZGlzYWJsZWQuIFRoaXMgZnVsbHkgb3ZlcnJpZGVzIHRoZSBpbXBsZW1lbnRhdGlvbiBwcm92aWRlZCBieVxuICAgKiBtaXhpbkRpc2FibGVkLCBidXQgdGhlIG1peGluIGlzIHN0aWxsIHJlcXVpcmVkIGJlY2F1c2UgbWl4aW5UYWJJbmRleCByZXF1aXJlcyBpdC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVkOyB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYW55KSB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuXG4gICAgaWYgKG5ld1ZhbHVlICE9PSB0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLl9kaXNhYmxlZCA9IG5ld1ZhbHVlO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGNoZWNrYm94IGlzIGluZGV0ZXJtaW5hdGUuIFRoaXMgaXMgYWxzbyBrbm93biBhcyBcIm1peGVkXCIgbW9kZSBhbmQgY2FuIGJlIHVzZWQgdG9cbiAgICogcmVwcmVzZW50IGEgY2hlY2tib3ggd2l0aCB0aHJlZSBzdGF0ZXMsIGUuZy4gYSBjaGVja2JveCB0aGF0IHJlcHJlc2VudHMgYSBuZXN0ZWQgbGlzdCBvZlxuICAgKiBjaGVja2FibGUgaXRlbXMuIE5vdGUgdGhhdCB3aGVuZXZlciBjaGVja2JveCBpcyBtYW51YWxseSBjbGlja2VkLCBpbmRldGVybWluYXRlIGlzIGltbWVkaWF0ZWx5XG4gICAqIHNldCB0byBmYWxzZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBpbmRldGVybWluYXRlKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5faW5kZXRlcm1pbmF0ZTsgfVxuICBzZXQgaW5kZXRlcm1pbmF0ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGNvbnN0IGNoYW5nZWQgPSB2YWx1ZSAhPSB0aGlzLl9pbmRldGVybWluYXRlO1xuICAgIHRoaXMuX2luZGV0ZXJtaW5hdGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuXG4gICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgIGlmICh0aGlzLl9pbmRldGVybWluYXRlKSB7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb25DaGVja1N0YXRlKFRyYW5zaXRpb25DaGVja1N0YXRlLkluZGV0ZXJtaW5hdGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbkNoZWNrU3RhdGUoXG4gICAgICAgICAgdGhpcy5jaGVja2VkID8gVHJhbnNpdGlvbkNoZWNrU3RhdGUuQ2hlY2tlZCA6IFRyYW5zaXRpb25DaGVja1N0YXRlLlVuY2hlY2tlZCk7XG4gICAgICB9XG4gICAgICB0aGlzLmluZGV0ZXJtaW5hdGVDaGFuZ2UuZW1pdCh0aGlzLl9pbmRldGVybWluYXRlKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zeW5jSW5kZXRlcm1pbmF0ZSh0aGlzLl9pbmRldGVybWluYXRlKTtcbiAgfVxuICBwcml2YXRlIF9pbmRldGVybWluYXRlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgX2lzUmlwcGxlRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZVJpcHBsZSB8fCB0aGlzLmRpc2FibGVkO1xuICB9XG5cbiAgLyoqIE1ldGhvZCBiZWluZyBjYWxsZWQgd2hlbmV2ZXIgdGhlIGxhYmVsIHRleHQgY2hhbmdlcy4gKi9cbiAgX29uTGFiZWxUZXh0Q2hhbmdlKCkge1xuICAgIC8vIFNpbmNlIHRoZSBldmVudCBvZiB0aGUgYGNka09ic2VydmVDb250ZW50YCBkaXJlY3RpdmUgcnVucyBvdXRzaWRlIG9mIHRoZSB6b25lLCB0aGUgY2hlY2tib3hcbiAgICAvLyBjb21wb25lbnQgd2lsbCBiZSBvbmx5IG1hcmtlZCBmb3IgY2hlY2ssIGJ1dCBubyBhY3R1YWwgY2hhbmdlIGRldGVjdGlvbiBydW5zIGF1dG9tYXRpY2FsbHkuXG4gICAgLy8gSW5zdGVhZCBvZiBnb2luZyBiYWNrIGludG8gdGhlIHpvbmUgaW4gb3JkZXIgdG8gdHJpZ2dlciBhIGNoYW5nZSBkZXRlY3Rpb24gd2hpY2ggY2F1c2VzXG4gICAgLy8gKmFsbCogY29tcG9uZW50cyB0byBiZSBjaGVja2VkIChpZiBleHBsaWNpdGx5IG1hcmtlZCBvciBub3QgdXNpbmcgT25QdXNoKSwgd2Ugb25seSB0cmlnZ2VyXG4gICAgLy8gYW4gZXhwbGljaXQgY2hhbmdlIGRldGVjdGlvbiBmb3IgdGhlIGNoZWNrYm94IHZpZXcgYW5kIGl0cyBjaGlsZHJlbi5cbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICAvLyBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLmNoZWNrZWQgPSAhIXZhbHVlO1xuICB9XG5cbiAgLy8gSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHZvaWQpIHtcbiAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuID0gZm47XG4gIH1cblxuICAvLyBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cblxuICAvLyBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIF9nZXRBcmlhQ2hlY2tlZCgpOiAndHJ1ZScgfCAnZmFsc2UnIHwgJ21peGVkJyB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tlZCA/ICd0cnVlJyA6ICh0aGlzLmluZGV0ZXJtaW5hdGUgPyAnbWl4ZWQnIDogJ2ZhbHNlJyk7XG4gIH1cblxuICBwcml2YXRlIF90cmFuc2l0aW9uQ2hlY2tTdGF0ZShuZXdTdGF0ZTogVHJhbnNpdGlvbkNoZWNrU3RhdGUpIHtcbiAgICBsZXQgb2xkU3RhdGUgPSB0aGlzLl9jdXJyZW50Q2hlY2tTdGF0ZTtcbiAgICBsZXQgZWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICBpZiAob2xkU3RhdGUgPT09IG5ld1N0YXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9jdXJyZW50QW5pbWF0aW9uQ2xhc3MubGVuZ3RoID4gMCkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2N1cnJlbnRBbmltYXRpb25DbGFzcyk7XG4gICAgfVxuXG4gICAgdGhpcy5fY3VycmVudEFuaW1hdGlvbkNsYXNzID0gdGhpcy5fZ2V0QW5pbWF0aW9uQ2xhc3NGb3JDaGVja1N0YXRlVHJhbnNpdGlvbihcbiAgICAgICAgb2xkU3RhdGUsIG5ld1N0YXRlKTtcbiAgICB0aGlzLl9jdXJyZW50Q2hlY2tTdGF0ZSA9IG5ld1N0YXRlO1xuXG4gICAgaWYgKHRoaXMuX2N1cnJlbnRBbmltYXRpb25DbGFzcy5sZW5ndGggPiAwKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fY3VycmVudEFuaW1hdGlvbkNsYXNzKTtcblxuICAgICAgLy8gUmVtb3ZlIHRoZSBhbmltYXRpb24gY2xhc3MgdG8gYXZvaWQgYW5pbWF0aW9uIHdoZW4gdGhlIGNoZWNrYm94IGlzIG1vdmVkIGJldHdlZW4gY29udGFpbmVyc1xuICAgICAgY29uc3QgYW5pbWF0aW9uQ2xhc3MgPSB0aGlzLl9jdXJyZW50QW5pbWF0aW9uQ2xhc3M7XG5cbiAgICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShhbmltYXRpb25DbGFzcyk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZW1pdENoYW5nZUV2ZW50KCkge1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IE1hdENoZWNrYm94Q2hhbmdlKCk7XG4gICAgZXZlbnQuc291cmNlID0gdGhpcztcbiAgICBldmVudC5jaGVja2VkID0gdGhpcy5jaGVja2VkO1xuXG4gICAgdGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbih0aGlzLmNoZWNrZWQpO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgLyoqIFRvZ2dsZXMgdGhlIGBjaGVja2VkYCBzdGF0ZSBvZiB0aGUgY2hlY2tib3guICovXG4gIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IGhhbmRsZXIgZm9yIGNoZWNrYm94IGlucHV0IGVsZW1lbnQuXG4gICAqIFRvZ2dsZXMgY2hlY2tlZCBzdGF0ZSBpZiBlbGVtZW50IGlzIG5vdCBkaXNhYmxlZC5cbiAgICogRG8gbm90IHRvZ2dsZSBvbiAoY2hhbmdlKSBldmVudCBzaW5jZSBJRSBkb2Vzbid0IGZpcmUgY2hhbmdlIGV2ZW50IHdoZW5cbiAgICogICBpbmRldGVybWluYXRlIGNoZWNrYm94IGlzIGNsaWNrZWQuXG4gICAqIEBwYXJhbSBldmVudFxuICAgKi9cbiAgX29uSW5wdXRDbGljayhldmVudDogRXZlbnQpIHtcbiAgICAvLyBXZSBoYXZlIHRvIHN0b3AgcHJvcGFnYXRpb24gZm9yIGNsaWNrIGV2ZW50cyBvbiB0aGUgdmlzdWFsIGhpZGRlbiBpbnB1dCBlbGVtZW50LlxuICAgIC8vIEJ5IGRlZmF1bHQsIHdoZW4gYSB1c2VyIGNsaWNrcyBvbiBhIGxhYmVsIGVsZW1lbnQsIGEgZ2VuZXJhdGVkIGNsaWNrIGV2ZW50IHdpbGwgYmVcbiAgICAvLyBkaXNwYXRjaGVkIG9uIHRoZSBhc3NvY2lhdGVkIGlucHV0IGVsZW1lbnQuIFNpbmNlIHdlIGFyZSB1c2luZyBhIGxhYmVsIGVsZW1lbnQgYXMgb3VyXG4gICAgLy8gcm9vdCBjb250YWluZXIsIHRoZSBjbGljayBldmVudCBvbiB0aGUgYGNoZWNrYm94YCB3aWxsIGJlIGV4ZWN1dGVkIHR3aWNlLlxuICAgIC8vIFRoZSByZWFsIGNsaWNrIGV2ZW50IHdpbGwgYnViYmxlIHVwLCBhbmQgdGhlIGdlbmVyYXRlZCBjbGljayBldmVudCBhbHNvIHRyaWVzIHRvIGJ1YmJsZSB1cC5cbiAgICAvLyBUaGlzIHdpbGwgbGVhZCB0byBtdWx0aXBsZSBjbGljayBldmVudHMuXG4gICAgLy8gUHJldmVudGluZyBidWJibGluZyBmb3IgdGhlIHNlY29uZCBldmVudCB3aWxsIHNvbHZlIHRoYXQgaXNzdWUuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAvLyBJZiByZXNldEluZGV0ZXJtaW5hdGUgaXMgZmFsc2UsIGFuZCB0aGUgY3VycmVudCBzdGF0ZSBpcyBpbmRldGVybWluYXRlLCBkbyBub3RoaW5nIG9uIGNsaWNrXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIHRoaXMuX2NsaWNrQWN0aW9uICE9PSAnbm9vcCcpIHtcbiAgICAgIC8vIFdoZW4gdXNlciBtYW51YWxseSBjbGljayBvbiB0aGUgY2hlY2tib3gsIGBpbmRldGVybWluYXRlYCBpcyBzZXQgdG8gZmFsc2UuXG4gICAgICBpZiAodGhpcy5pbmRldGVybWluYXRlICYmIHRoaXMuX2NsaWNrQWN0aW9uICE9PSAnY2hlY2snKSB7XG5cbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5faW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZUNoYW5nZS5lbWl0KHRoaXMuX2luZGV0ZXJtaW5hdGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgIHRoaXMuX3RyYW5zaXRpb25DaGVja1N0YXRlKFxuICAgICAgICAgIHRoaXMuX2NoZWNrZWQgPyBUcmFuc2l0aW9uQ2hlY2tTdGF0ZS5DaGVja2VkIDogVHJhbnNpdGlvbkNoZWNrU3RhdGUuVW5jaGVja2VkKTtcblxuICAgICAgLy8gRW1pdCBvdXIgY3VzdG9tIGNoYW5nZSBldmVudCBpZiB0aGUgbmF0aXZlIGlucHV0IGVtaXR0ZWQgb25lLlxuICAgICAgLy8gSXQgaXMgaW1wb3J0YW50IHRvIG9ubHkgZW1pdCBpdCwgaWYgdGhlIG5hdGl2ZSBpbnB1dCB0cmlnZ2VyZWQgb25lLCBiZWNhdXNlXG4gICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIHRyaWdnZXIgYSBjaGFuZ2UgZXZlbnQsIHdoZW4gdGhlIGBjaGVja2VkYCB2YXJpYWJsZSBjaGFuZ2VzIGZvciBleGFtcGxlLlxuICAgICAgdGhpcy5fZW1pdENoYW5nZUV2ZW50KCk7XG4gICAgfSBlbHNlIGlmICghdGhpcy5kaXNhYmxlZCAmJiB0aGlzLl9jbGlja0FjdGlvbiA9PT0gJ25vb3AnKSB7XG4gICAgICAvLyBSZXNldCBuYXRpdmUgaW5wdXQgd2hlbiBjbGlja2VkIHdpdGggbm9vcC4gVGhlIG5hdGl2ZSBjaGVja2JveCBiZWNvbWVzIGNoZWNrZWQgYWZ0ZXJcbiAgICAgIC8vIGNsaWNrLCByZXNldCBpdCB0byBiZSBhbGlnbiB3aXRoIGBjaGVja2VkYCB2YWx1ZSBvZiBgbWF0LWNoZWNrYm94YC5cbiAgICAgIHRoaXMuX2lucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmNoZWNrZWQgPSB0aGlzLmNoZWNrZWQ7XG4gICAgICB0aGlzLl9pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5pbmRldGVybWluYXRlID0gdGhpcy5pbmRldGVybWluYXRlO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBGb2N1c2VzIHRoZSBjaGVja2JveC4gKi9cbiAgZm9jdXMob3JpZ2luOiBGb2N1c09yaWdpbiA9ICdrZXlib2FyZCcsIG9wdGlvbnM/OiBGb2N1c09wdGlvbnMpOiB2b2lkIHtcbiAgICB0aGlzLl9mb2N1c01vbml0b3IuZm9jdXNWaWEodGhpcy5faW5wdXRFbGVtZW50LCBvcmlnaW4sIG9wdGlvbnMpO1xuICB9XG5cbiAgX29uSW50ZXJhY3Rpb25FdmVudChldmVudDogRXZlbnQpIHtcbiAgICAvLyBXZSBhbHdheXMgaGF2ZSB0byBzdG9wIHByb3BhZ2F0aW9uIG9uIHRoZSBjaGFuZ2UgZXZlbnQuXG4gICAgLy8gT3RoZXJ3aXNlIHRoZSBjaGFuZ2UgZXZlbnQsIGZyb20gdGhlIGlucHV0IGVsZW1lbnQsIHdpbGwgYnViYmxlIHVwIGFuZFxuICAgIC8vIGVtaXQgaXRzIGV2ZW50IG9iamVjdCB0byB0aGUgYGNoYW5nZWAgb3V0cHV0LlxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0QW5pbWF0aW9uQ2xhc3NGb3JDaGVja1N0YXRlVHJhbnNpdGlvbihcbiAgICAgIG9sZFN0YXRlOiBUcmFuc2l0aW9uQ2hlY2tTdGF0ZSwgbmV3U3RhdGU6IFRyYW5zaXRpb25DaGVja1N0YXRlKTogc3RyaW5nIHtcbiAgICAvLyBEb24ndCB0cmFuc2l0aW9uIGlmIGFuaW1hdGlvbnMgYXJlIGRpc2FibGVkLlxuICAgIGlmICh0aGlzLl9hbmltYXRpb25Nb2RlID09PSAnTm9vcEFuaW1hdGlvbnMnKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgbGV0IGFuaW1TdWZmaXg6IHN0cmluZyA9ICcnO1xuXG4gICAgc3dpdGNoIChvbGRTdGF0ZSkge1xuICAgICAgY2FzZSBUcmFuc2l0aW9uQ2hlY2tTdGF0ZS5Jbml0OlxuICAgICAgICAvLyBIYW5kbGUgZWRnZSBjYXNlIHdoZXJlIHVzZXIgaW50ZXJhY3RzIHdpdGggY2hlY2tib3ggdGhhdCBkb2VzIG5vdCBoYXZlIFsobmdNb2RlbCldIG9yXG4gICAgICAgIC8vIFtjaGVja2VkXSBib3VuZCB0byBpdC5cbiAgICAgICAgaWYgKG5ld1N0YXRlID09PSBUcmFuc2l0aW9uQ2hlY2tTdGF0ZS5DaGVja2VkKSB7XG4gICAgICAgICAgYW5pbVN1ZmZpeCA9ICd1bmNoZWNrZWQtY2hlY2tlZCc7XG4gICAgICAgIH0gZWxzZSBpZiAobmV3U3RhdGUgPT0gVHJhbnNpdGlvbkNoZWNrU3RhdGUuSW5kZXRlcm1pbmF0ZSkge1xuICAgICAgICAgIGFuaW1TdWZmaXggPSAndW5jaGVja2VkLWluZGV0ZXJtaW5hdGUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVHJhbnNpdGlvbkNoZWNrU3RhdGUuVW5jaGVja2VkOlxuICAgICAgICBhbmltU3VmZml4ID0gbmV3U3RhdGUgPT09IFRyYW5zaXRpb25DaGVja1N0YXRlLkNoZWNrZWQgP1xuICAgICAgICAgICAgJ3VuY2hlY2tlZC1jaGVja2VkJyA6ICd1bmNoZWNrZWQtaW5kZXRlcm1pbmF0ZSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBUcmFuc2l0aW9uQ2hlY2tTdGF0ZS5DaGVja2VkOlxuICAgICAgICBhbmltU3VmZml4ID0gbmV3U3RhdGUgPT09IFRyYW5zaXRpb25DaGVja1N0YXRlLlVuY2hlY2tlZCA/XG4gICAgICAgICAgICAnY2hlY2tlZC11bmNoZWNrZWQnIDogJ2NoZWNrZWQtaW5kZXRlcm1pbmF0ZSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBUcmFuc2l0aW9uQ2hlY2tTdGF0ZS5JbmRldGVybWluYXRlOlxuICAgICAgICBhbmltU3VmZml4ID0gbmV3U3RhdGUgPT09IFRyYW5zaXRpb25DaGVja1N0YXRlLkNoZWNrZWQgP1xuICAgICAgICAgICAgJ2luZGV0ZXJtaW5hdGUtY2hlY2tlZCcgOiAnaW5kZXRlcm1pbmF0ZS11bmNoZWNrZWQnO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gYG1hdC1jaGVja2JveC1hbmltLSR7YW5pbVN1ZmZpeH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFN5bmNzIHRoZSBpbmRldGVybWluYXRlIHZhbHVlIHdpdGggdGhlIGNoZWNrYm94IERPTSBub2RlLlxuICAgKlxuICAgKiBXZSBzeW5jIGBpbmRldGVybWluYXRlYCBkaXJlY3RseSBvbiB0aGUgRE9NIG5vZGUsIGJlY2F1c2UgaW4gSXZ5IHRoZSBjaGVjayBmb3Igd2hldGhlciBhXG4gICAqIHByb3BlcnR5IGlzIHN1cHBvcnRlZCBvbiBhbiBlbGVtZW50IGJvaWxzIGRvd24gdG8gYGlmIChwcm9wTmFtZSBpbiBlbGVtZW50KWAuIERvbWlubydzXG4gICAqIEhUTUxJbnB1dEVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGBpbmRldGVybWluYXRlYCBwcm9wZXJ0eSBzbyBJdnkgd2lsbCB3YXJuIGR1cmluZ1xuICAgKiBzZXJ2ZXItc2lkZSByZW5kZXJpbmcuXG4gICAqL1xuICBwcml2YXRlIF9zeW5jSW5kZXRlcm1pbmF0ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGNvbnN0IG5hdGl2ZUNoZWNrYm94ID0gdGhpcy5faW5wdXRFbGVtZW50O1xuXG4gICAgaWYgKG5hdGl2ZUNoZWNrYm94KSB7XG4gICAgICBuYXRpdmVDaGVja2JveC5uYXRpdmVFbGVtZW50LmluZGV0ZXJtaW5hdGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3JlcXVpcmVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlUmlwcGxlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9pbmRldGVybWluYXRlOiBCb29sZWFuSW5wdXQ7XG59XG4iXX0=