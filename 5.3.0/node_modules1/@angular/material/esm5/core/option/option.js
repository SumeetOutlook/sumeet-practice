/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ENTER, SPACE, hasModifierKey } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, InjectionToken, Input, Optional, Output, ViewEncapsulation, } from '@angular/core';
import { Subject } from 'rxjs';
import { MatOptgroup } from './optgroup';
/**
 * Option IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../ripple/ripple';
import * as ɵngcc3 from '../selection/pseudo-checkbox/pseudo-checkbox';

function MatOption_mat_pseudo_checkbox_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "mat-pseudo-checkbox", 3);
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("state", ctx_r0.selected ? "checked" : "unchecked")("disabled", ctx_r0.disabled);
} }
var _c0 = ["*"];
var _uniqueIdCounter = 0;
/** Event object emitted by MatOption when selected or deselected. */
var MatOptionSelectionChange = /** @class */ (function () {
    function MatOptionSelectionChange(
    /** Reference to the option that emitted the event. */
    source, 
    /** Whether the change in the option's value was a result of a user action. */
    isUserInput) {
        if (isUserInput === void 0) { isUserInput = false; }
        this.source = source;
        this.isUserInput = isUserInput;
    }
    return MatOptionSelectionChange;
}());
export { MatOptionSelectionChange };
/**
 * Injection token used to provide the parent component to options.
 */
export var MAT_OPTION_PARENT_COMPONENT = new InjectionToken('MAT_OPTION_PARENT_COMPONENT');
/**
 * Single option inside of a `<mat-select>` element.
 */
var MatOption = /** @class */ (function () {
    function MatOption(_element, _changeDetectorRef, _parent, group) {
        this._element = _element;
        this._changeDetectorRef = _changeDetectorRef;
        this._parent = _parent;
        this.group = group;
        this._selected = false;
        this._active = false;
        this._disabled = false;
        this._mostRecentViewValue = '';
        /** The unique ID of the option. */
        this.id = "mat-option-" + _uniqueIdCounter++;
        /** Event emitted when the option is selected or deselected. */
        // tslint:disable-next-line:no-output-on-prefix
        this.onSelectionChange = new EventEmitter();
        /** Emits when the state of the option changes and any parents have to be notified. */
        this._stateChanges = new Subject();
    }
    Object.defineProperty(MatOption.prototype, "multiple", {
        /** Whether the wrapping component is in multiple selection mode. */
        get: function () { return this._parent && this._parent.multiple; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatOption.prototype, "selected", {
        /** Whether or not the option is currently selected. */
        get: function () { return this._selected; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatOption.prototype, "disabled", {
        /** Whether the option is disabled. */
        get: function () { return (this.group && this.group.disabled) || this._disabled; },
        set: function (value) { this._disabled = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatOption.prototype, "disableRipple", {
        /** Whether ripples for the option are disabled. */
        get: function () { return this._parent && this._parent.disableRipple; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatOption.prototype, "active", {
        /**
         * Whether or not the option is currently active and ready to be selected.
         * An active option displays styles as if it is focused, but the
         * focus is actually retained somewhere else. This comes in handy
         * for components like autocomplete where focus must remain on the input.
         */
        get: function () {
            return this._active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatOption.prototype, "viewValue", {
        /**
         * The displayed value of the option. It is necessary to show the selected option in the
         * select's trigger.
         */
        get: function () {
            // TODO(kara): Add input property alternative for node envs.
            return (this._getHostElement().textContent || '').trim();
        },
        enumerable: true,
        configurable: true
    });
    /** Selects the option. */
    MatOption.prototype.select = function () {
        if (!this._selected) {
            this._selected = true;
            this._changeDetectorRef.markForCheck();
            this._emitSelectionChangeEvent();
        }
    };
    /** Deselects the option. */
    MatOption.prototype.deselect = function () {
        if (this._selected) {
            this._selected = false;
            this._changeDetectorRef.markForCheck();
            this._emitSelectionChangeEvent();
        }
    };
    /** Sets focus onto this option. */
    MatOption.prototype.focus = function (_origin, options) {
        // Note that we aren't using `_origin`, but we need to keep it because some internal consumers
        // use `MatOption` in a `FocusKeyManager` and we need it to match `FocusableOption`.
        var element = this._getHostElement();
        if (typeof element.focus === 'function') {
            element.focus(options);
        }
    };
    /**
     * This method sets display styles on the option to make it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     */
    MatOption.prototype.setActiveStyles = function () {
        if (!this._active) {
            this._active = true;
            this._changeDetectorRef.markForCheck();
        }
    };
    /**
     * This method removes display styles on the option that made it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     */
    MatOption.prototype.setInactiveStyles = function () {
        if (this._active) {
            this._active = false;
            this._changeDetectorRef.markForCheck();
        }
    };
    /** Gets the label to be used when determining whether the option should be focused. */
    MatOption.prototype.getLabel = function () {
        return this.viewValue;
    };
    /** Ensures the option is selected when activated from the keyboard. */
    MatOption.prototype._handleKeydown = function (event) {
        if ((event.keyCode === ENTER || event.keyCode === SPACE) && !hasModifierKey(event)) {
            this._selectViaInteraction();
            // Prevent the page from scrolling down and form submits.
            event.preventDefault();
        }
    };
    /**
     * `Selects the option while indicating the selection came from the user. Used to
     * determine if the select's view -> model callback should be invoked.`
     */
    MatOption.prototype._selectViaInteraction = function () {
        if (!this.disabled) {
            this._selected = this.multiple ? !this._selected : true;
            this._changeDetectorRef.markForCheck();
            this._emitSelectionChangeEvent(true);
        }
    };
    /**
     * Gets the `aria-selected` value for the option. We explicitly omit the `aria-selected`
     * attribute from single-selection, unselected options. Including the `aria-selected="false"`
     * attributes adds a significant amount of noise to screen-reader users without providing useful
     * information.
     */
    MatOption.prototype._getAriaSelected = function () {
        return this.selected || (this.multiple ? false : null);
    };
    /** Returns the correct tabindex for the option depending on disabled state. */
    MatOption.prototype._getTabIndex = function () {
        return this.disabled ? '-1' : '0';
    };
    /** Gets the host DOM element. */
    MatOption.prototype._getHostElement = function () {
        return this._element.nativeElement;
    };
    MatOption.prototype.ngAfterViewChecked = function () {
        // Since parent components could be using the option's label to display the selected values
        // (e.g. `mat-select`) and they don't have a way of knowing if the option's label has changed
        // we have to check for changes in the DOM ourselves and dispatch an event. These checks are
        // relatively cheap, however we still limit them only to selected options in order to avoid
        // hitting the DOM too often.
        if (this._selected) {
            var viewValue = this.viewValue;
            if (viewValue !== this._mostRecentViewValue) {
                this._mostRecentViewValue = viewValue;
                this._stateChanges.next();
            }
        }
    };
    MatOption.prototype.ngOnDestroy = function () {
        this._stateChanges.complete();
    };
    /** Emits the selection change event. */
    MatOption.prototype._emitSelectionChangeEvent = function (isUserInput) {
        if (isUserInput === void 0) { isUserInput = false; }
        this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
    };
    /** @nocollapse */
    MatOption.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_OPTION_PARENT_COMPONENT,] }] },
        { type: MatOptgroup, decorators: [{ type: Optional }] }
    ]; };
    MatOption.propDecorators = {
        value: [{ type: Input }],
        id: [{ type: Input }],
        disabled: [{ type: Input }],
        onSelectionChange: [{ type: Output }]
    };
MatOption.ɵfac = function MatOption_Factory(t) { return new (t || MatOption)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(MAT_OPTION_PARENT_COMPONENT, 8), ɵngcc0.ɵɵdirectiveInject(MatOptgroup, 8)); };
MatOption.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatOption, selectors: [["mat-option"]], hostAttrs: ["role", "option", 1, "mat-option"], hostVars: 12, hostBindings: function MatOption_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function MatOption_click_HostBindingHandler() { return ctx._selectViaInteraction(); })("keydown", function MatOption_keydown_HostBindingHandler($event) { return ctx._handleKeydown($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵhostProperty("id", ctx.id);
        ɵngcc0.ɵɵattribute("tabindex", ctx._getTabIndex())("aria-selected", ctx._getAriaSelected())("aria-disabled", ctx.disabled.toString());
        ɵngcc0.ɵɵclassProp("mat-selected", ctx.selected)("mat-option-multiple", ctx.multiple)("mat-active", ctx.active)("mat-option-disabled", ctx.disabled);
    } }, inputs: { id: "id", disabled: "disabled", value: "value" }, outputs: { onSelectionChange: "onSelectionChange" }, exportAs: ["matOption"], ngContentSelectors: _c0, decls: 4, vars: 3, consts: [["class", "mat-option-pseudo-checkbox", 3, "state", "disabled", 4, "ngIf"], [1, "mat-option-text"], ["mat-ripple", "", 1, "mat-option-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-option-pseudo-checkbox", 3, "state", "disabled"]], template: function MatOption_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, MatOption_mat_pseudo_checkbox_0_Template, 1, 2, "mat-pseudo-checkbox", 0);
        ɵngcc0.ɵɵelementStart(1, "span", 1);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(3, "div", 2);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.multiple);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disabled || ctx.disableRipple);
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.MatRipple, ɵngcc3.MatPseudoCheckbox], styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:none;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}.cdk-high-contrast-active .mat-option{margin:0 1px}.cdk-high-contrast-active .mat-option.mat-active{border:solid 1px currentColor;margin:0}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.cdk-high-contrast-active .mat-option .mat-option-ripple{opacity:.5}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}\n"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatOption, [{
        type: Component,
        args: [{
                selector: 'mat-option',
                exportAs: 'matOption',
                host: {
                    'role': 'option',
                    '[attr.tabindex]': '_getTabIndex()',
                    '[class.mat-selected]': 'selected',
                    '[class.mat-option-multiple]': 'multiple',
                    '[class.mat-active]': 'active',
                    '[id]': 'id',
                    '[attr.aria-selected]': '_getAriaSelected()',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '[class.mat-option-disabled]': 'disabled',
                    '(click)': '_selectViaInteraction()',
                    '(keydown)': '_handleKeydown($event)',
                    'class': 'mat-option'
                },
                template: "<mat-pseudo-checkbox *ngIf=\"multiple\" class=\"mat-option-pseudo-checkbox\"\n    [state]=\"selected ? 'checked' : 'unchecked'\" [disabled]=\"disabled\"></mat-pseudo-checkbox>\n\n<span class=\"mat-option-text\"><ng-content></ng-content></span>\n\n<div class=\"mat-option-ripple\" mat-ripple\n     [matRippleTrigger]=\"_getHostElement()\"\n     [matRippleDisabled]=\"disabled || disableRipple\">\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:none;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}.cdk-high-contrast-active .mat-option{margin:0 1px}.cdk-high-contrast-active .mat-option.mat-active{border:solid 1px currentColor;margin:0}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.cdk-high-contrast-active .mat-option .mat-option-ripple{opacity:.5}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}\n"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [MAT_OPTION_PARENT_COMPONENT]
            }] }, { type: MatOptgroup, decorators: [{
                type: Optional
            }] }]; }, { id: [{
            type: Input
        }], onSelectionChange: [{
            type: Output
        }], disabled: [{
            type: Input
        }], value: [{
            type: Input
        }] }); })();
    return MatOption;
}());
export { MatOption };
/**
 * Counts the amount of option group labels that precede the specified option.
 * @param optionIndex Index of the option at which to start counting.
 * @param options Flat list of all of the options.
 * @param optionGroups Flat list of all of the option groups.
 * @docs-private
 */
export function _countGroupLabelsBeforeOption(optionIndex, options, optionGroups) {
    if (optionGroups.length) {
        var optionsArray = options.toArray();
        var groups = optionGroups.toArray();
        var groupCounter = 0;
        for (var i = 0; i < optionIndex + 1; i++) {
            if (optionsArray[i].group && optionsArray[i].group === groups[groupCounter]) {
                groupCounter++;
            }
        }
        return groupCounter;
    }
    return 0;
}
/**
 * Determines the position to which to scroll a panel in order for an option to be into view.
 * @param optionIndex Index of the option to be scrolled into the view.
 * @param optionHeight Height of the options.
 * @param currentScrollPosition Current scroll position of the panel.
 * @param panelHeight Height of the panel.
 * @docs-private
 */
export function _getOptionScrollPosition(optionIndex, optionHeight, currentScrollPosition, panelHeight) {
    var optionOffset = optionIndex * optionHeight;
    if (optionOffset < currentScrollPosition) {
        return optionOffset;
    }
    if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
        return Math.max(0, optionOffset - panelHeight + optionHeight);
    }
    return currentScrollPosition;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvY29yZS9vcHRpb24vb3B0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQWUscUJBQXFCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRSxPQUFPLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sY0FBYyxFQUNkLEtBQUssRUFFTCxRQUFRLEVBQ1IsTUFBTSxFQUVOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFFdkM7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7Ozs7Ozs7Ozs7OztBQUNILElBQUksZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0FBRXpCLHFFQUFxRTtBQUNyRTtBQUVLLElBREg7QUFDb0IsSUFBbEIsc0RBQXNEO0FBQzFELElBQVcsTUFBaUI7QUFDM0IsSUFBRyw4RUFBOEU7QUFDbEYsSUFBVyxXQUFtQjtBQUFJLFFBQXZCLDRCQUFBLEVBQUEsbUJBQW1CO0FBQUksUUFGdkIsV0FBTSxHQUFOLE1BQU0sQ0FBVztBQUFDLFFBRWxCLGdCQUFXLEdBQVgsV0FBVyxDQUFRO0FBQUMsSUFBRyxDQUFDO0FBQ25DLElBQUEsK0JBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQztBQUNEO0FBV0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxNQUFNLENBQUMsSUFBTSwyQkFBMkIsR0FDcEMsSUFBSSxjQUFjLENBQTJCLDZC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QztBQUMvQixDQUFDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtCb29sZWFuSW5wdXQsIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7RU5URVIsIFNQQUNFLCBoYXNNb2RpZmllcktleX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0NoZWNrZWQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb2N1c09wdGlvbnMsIEZvY3VzYWJsZU9wdGlvbiwgRm9jdXNPcmlnaW59IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge01hdE9wdGdyb3VwfSBmcm9tICcuL29wdGdyb3VwJztcblxuLyoqXG4gKiBPcHRpb24gSURzIG5lZWQgdG8gYmUgdW5pcXVlIGFjcm9zcyBjb21wb25lbnRzLCBzbyB0aGlzIGNvdW50ZXIgZXhpc3RzIG91dHNpZGUgb2ZcbiAqIHRoZSBjb21wb25lbnQgZGVmaW5pdGlvbi5cbiAqL1xubGV0IF91bmlxdWVJZENvdW50ZXIgPSAwO1xuXG4vKiogRXZlbnQgb2JqZWN0IGVtaXR0ZWQgYnkgTWF0T3B0aW9uIHdoZW4gc2VsZWN0ZWQgb3IgZGVzZWxlY3RlZC4gKi9cbmV4cG9ydCBjbGFzcyBNYXRPcHRpb25TZWxlY3Rpb25DaGFuZ2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICAvKiogUmVmZXJlbmNlIHRvIHRoZSBvcHRpb24gdGhhdCBlbWl0dGVkIHRoZSBldmVudC4gKi9cbiAgICBwdWJsaWMgc291cmNlOiBNYXRPcHRpb24sXG4gICAgLyoqIFdoZXRoZXIgdGhlIGNoYW5nZSBpbiB0aGUgb3B0aW9uJ3MgdmFsdWUgd2FzIGEgcmVzdWx0IG9mIGEgdXNlciBhY3Rpb24uICovXG4gICAgcHVibGljIGlzVXNlcklucHV0ID0gZmFsc2UpIHsgfVxufVxuXG4vKipcbiAqIERlc2NyaWJlcyBhIHBhcmVudCBjb21wb25lbnQgdGhhdCBtYW5hZ2VzIGEgbGlzdCBvZiBvcHRpb25zLlxuICogQ29udGFpbnMgcHJvcGVydGllcyB0aGF0IHRoZSBvcHRpb25zIGNhbiBpbmhlcml0LlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1hdE9wdGlvblBhcmVudENvbXBvbmVudCB7XG4gIGRpc2FibGVSaXBwbGU/OiBib29sZWFuO1xuICBtdWx0aXBsZT86IGJvb2xlYW47XG59XG5cbi8qKlxuICogSW5qZWN0aW9uIHRva2VuIHVzZWQgdG8gcHJvdmlkZSB0aGUgcGFyZW50IGNvbXBvbmVudCB0byBvcHRpb25zLlxuICovXG5leHBvcnQgY29uc3QgTUFUX09QVElPTl9QQVJFTlRfQ09NUE9ORU5UID1cbiAgICBuZXcgSW5qZWN0aW9uVG9rZW48TWF0T3B0aW9uUGFyZW50Q29tcG9uZW50PignTUFUX09QVElPTl9QQVJFTlRfQ09NUE9ORU5UJyk7XG5cbi8qKlxuICogU2luZ2xlIG9wdGlvbiBpbnNpZGUgb2YgYSBgPG1hdC1zZWxlY3Q+YCBlbGVtZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtb3B0aW9uJyxcbiAgZXhwb3J0QXM6ICdtYXRPcHRpb24nLFxuICBob3N0OiB7XG4gICAgJ3JvbGUnOiAnb3B0aW9uJyxcbiAgICAnW2F0dHIudGFiaW5kZXhdJzogJ19nZXRUYWJJbmRleCgpJyxcbiAgICAnW2NsYXNzLm1hdC1zZWxlY3RlZF0nOiAnc2VsZWN0ZWQnLFxuICAgICdbY2xhc3MubWF0LW9wdGlvbi1tdWx0aXBsZV0nOiAnbXVsdGlwbGUnLFxuICAgICdbY2xhc3MubWF0LWFjdGl2ZV0nOiAnYWN0aXZlJyxcbiAgICAnW2lkXSc6ICdpZCcsXG4gICAgJ1thdHRyLmFyaWEtc2VsZWN0ZWRdJzogJ19nZXRBcmlhU2VsZWN0ZWQoKScsXG4gICAgJ1thdHRyLmFyaWEtZGlzYWJsZWRdJzogJ2Rpc2FibGVkLnRvU3RyaW5nKCknLFxuICAgICdbY2xhc3MubWF0LW9wdGlvbi1kaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxuICAgICcoY2xpY2spJzogJ19zZWxlY3RWaWFJbnRlcmFjdGlvbigpJyxcbiAgICAnKGtleWRvd24pJzogJ19oYW5kbGVLZXlkb3duKCRldmVudCknLFxuICAgICdjbGFzcyc6ICdtYXQtb3B0aW9uJyxcbiAgfSxcbiAgc3R5bGVVcmxzOiBbJ29wdGlvbi5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdvcHRpb24uaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBNYXRPcHRpb24gaW1wbGVtZW50cyBGb2N1c2FibGVPcHRpb24sIEFmdGVyVmlld0NoZWNrZWQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3NlbGVjdGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX2FjdGl2ZSA9IGZhbHNlO1xuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9tb3N0UmVjZW50Vmlld1ZhbHVlID0gJyc7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIHdyYXBwaW5nIGNvbXBvbmVudCBpcyBpbiBtdWx0aXBsZSBzZWxlY3Rpb24gbW9kZS4gKi9cbiAgZ2V0IG11bHRpcGxlKCkgeyByZXR1cm4gdGhpcy5fcGFyZW50ICYmIHRoaXMuX3BhcmVudC5tdWx0aXBsZTsgfVxuXG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGUgb3B0aW9uIGlzIGN1cnJlbnRseSBzZWxlY3RlZC4gKi9cbiAgZ2V0IHNlbGVjdGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7IH1cblxuICAvKiogVGhlIGZvcm0gdmFsdWUgb2YgdGhlIG9wdGlvbi4gKi9cbiAgQElucHV0KCkgdmFsdWU6IGFueTtcblxuICAvKiogVGhlIHVuaXF1ZSBJRCBvZiB0aGUgb3B0aW9uLiAqL1xuICBASW5wdXQoKSBpZDogc3RyaW5nID0gYG1hdC1vcHRpb24tJHtfdW5pcXVlSWRDb3VudGVyKyt9YDtcblxuICAvKiogV2hldGhlciB0aGUgb3B0aW9uIGlzIGRpc2FibGVkLiAqL1xuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKSB7IHJldHVybiAodGhpcy5ncm91cCAmJiB0aGlzLmdyb3VwLmRpc2FibGVkKSB8fCB0aGlzLl9kaXNhYmxlZDsgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGFueSkgeyB0aGlzLl9kaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7IH1cblxuICAvKiogV2hldGhlciByaXBwbGVzIGZvciB0aGUgb3B0aW9uIGFyZSBkaXNhYmxlZC4gKi9cbiAgZ2V0IGRpc2FibGVSaXBwbGUoKSB7IHJldHVybiB0aGlzLl9wYXJlbnQgJiYgdGhpcy5fcGFyZW50LmRpc2FibGVSaXBwbGU7IH1cblxuICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBvcHRpb24gaXMgc2VsZWN0ZWQgb3IgZGVzZWxlY3RlZC4gKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1vbi1wcmVmaXhcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uU2VsZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxNYXRPcHRpb25TZWxlY3Rpb25DaGFuZ2U+KCk7XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIHN0YXRlIG9mIHRoZSBvcHRpb24gY2hhbmdlcyBhbmQgYW55IHBhcmVudHMgaGF2ZSB0byBiZSBub3RpZmllZC4gKi9cbiAgcmVhZG9ubHkgX3N0YXRlQ2hhbmdlcyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTUFUX09QVElPTl9QQVJFTlRfQ09NUE9ORU5UKSBwcml2YXRlIF9wYXJlbnQ6IE1hdE9wdGlvblBhcmVudENvbXBvbmVudCxcbiAgICBAT3B0aW9uYWwoKSByZWFkb25seSBncm91cDogTWF0T3B0Z3JvdXApIHt9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IHRoZSBvcHRpb24gaXMgY3VycmVudGx5IGFjdGl2ZSBhbmQgcmVhZHkgdG8gYmUgc2VsZWN0ZWQuXG4gICAqIEFuIGFjdGl2ZSBvcHRpb24gZGlzcGxheXMgc3R5bGVzIGFzIGlmIGl0IGlzIGZvY3VzZWQsIGJ1dCB0aGVcbiAgICogZm9jdXMgaXMgYWN0dWFsbHkgcmV0YWluZWQgc29tZXdoZXJlIGVsc2UuIFRoaXMgY29tZXMgaW4gaGFuZHlcbiAgICogZm9yIGNvbXBvbmVudHMgbGlrZSBhdXRvY29tcGxldGUgd2hlcmUgZm9jdXMgbXVzdCByZW1haW4gb24gdGhlIGlucHV0LlxuICAgKi9cbiAgZ2V0IGFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBkaXNwbGF5ZWQgdmFsdWUgb2YgdGhlIG9wdGlvbi4gSXQgaXMgbmVjZXNzYXJ5IHRvIHNob3cgdGhlIHNlbGVjdGVkIG9wdGlvbiBpbiB0aGVcbiAgICogc2VsZWN0J3MgdHJpZ2dlci5cbiAgICovXG4gIGdldCB2aWV3VmFsdWUoKTogc3RyaW5nIHtcbiAgICAvLyBUT0RPKGthcmEpOiBBZGQgaW5wdXQgcHJvcGVydHkgYWx0ZXJuYXRpdmUgZm9yIG5vZGUgZW52cy5cbiAgICByZXR1cm4gKHRoaXMuX2dldEhvc3RFbGVtZW50KCkudGV4dENvbnRlbnQgfHwgJycpLnRyaW0oKTtcbiAgfVxuXG4gIC8qKiBTZWxlY3RzIHRoZSBvcHRpb24uICovXG4gIHNlbGVjdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX3NlbGVjdGVkKSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZCA9IHRydWU7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIHRoaXMuX2VtaXRTZWxlY3Rpb25DaGFuZ2VFdmVudCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBEZXNlbGVjdHMgdGhlIG9wdGlvbi4gKi9cbiAgZGVzZWxlY3QoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3NlbGVjdGVkKSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB0aGlzLl9lbWl0U2VsZWN0aW9uQ2hhbmdlRXZlbnQoKTtcbiAgICB9XG4gIH1cblxuICAvKiogU2V0cyBmb2N1cyBvbnRvIHRoaXMgb3B0aW9uLiAqL1xuICBmb2N1cyhfb3JpZ2luPzogRm9jdXNPcmlnaW4sIG9wdGlvbnM/OiBGb2N1c09wdGlvbnMpOiB2b2lkIHtcbiAgICAvLyBOb3RlIHRoYXQgd2UgYXJlbid0IHVzaW5nIGBfb3JpZ2luYCwgYnV0IHdlIG5lZWQgdG8ga2VlcCBpdCBiZWNhdXNlIHNvbWUgaW50ZXJuYWwgY29uc3VtZXJzXG4gICAgLy8gdXNlIGBNYXRPcHRpb25gIGluIGEgYEZvY3VzS2V5TWFuYWdlcmAgYW5kIHdlIG5lZWQgaXQgdG8gbWF0Y2ggYEZvY3VzYWJsZU9wdGlvbmAuXG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2dldEhvc3RFbGVtZW50KCk7XG5cbiAgICBpZiAodHlwZW9mIGVsZW1lbnQuZm9jdXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGVsZW1lbnQuZm9jdXMob3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHNldHMgZGlzcGxheSBzdHlsZXMgb24gdGhlIG9wdGlvbiB0byBtYWtlIGl0IGFwcGVhclxuICAgKiBhY3RpdmUuIFRoaXMgaXMgdXNlZCBieSB0aGUgQWN0aXZlRGVzY2VuZGFudEtleU1hbmFnZXIgc28ga2V5XG4gICAqIGV2ZW50cyB3aWxsIGRpc3BsYXkgdGhlIHByb3BlciBvcHRpb25zIGFzIGFjdGl2ZSBvbiBhcnJvdyBrZXkgZXZlbnRzLlxuICAgKi9cbiAgc2V0QWN0aXZlU3R5bGVzKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fYWN0aXZlKSB7XG4gICAgICB0aGlzLl9hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHJlbW92ZXMgZGlzcGxheSBzdHlsZXMgb24gdGhlIG9wdGlvbiB0aGF0IG1hZGUgaXQgYXBwZWFyXG4gICAqIGFjdGl2ZS4gVGhpcyBpcyB1c2VkIGJ5IHRoZSBBY3RpdmVEZXNjZW5kYW50S2V5TWFuYWdlciBzbyBrZXlcbiAgICogZXZlbnRzIHdpbGwgZGlzcGxheSB0aGUgcHJvcGVyIG9wdGlvbnMgYXMgYWN0aXZlIG9uIGFycm93IGtleSBldmVudHMuXG4gICAqL1xuICBzZXRJbmFjdGl2ZVN0eWxlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fYWN0aXZlKSB7XG4gICAgICB0aGlzLl9hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBHZXRzIHRoZSBsYWJlbCB0byBiZSB1c2VkIHdoZW4gZGV0ZXJtaW5pbmcgd2hldGhlciB0aGUgb3B0aW9uIHNob3VsZCBiZSBmb2N1c2VkLiAqL1xuICBnZXRMYWJlbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnZpZXdWYWx1ZTtcbiAgfVxuXG4gIC8qKiBFbnN1cmVzIHRoZSBvcHRpb24gaXMgc2VsZWN0ZWQgd2hlbiBhY3RpdmF0ZWQgZnJvbSB0aGUga2V5Ym9hcmQuICovXG4gIF9oYW5kbGVLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKChldmVudC5rZXlDb2RlID09PSBFTlRFUiB8fCBldmVudC5rZXlDb2RlID09PSBTUEFDRSkgJiYgIWhhc01vZGlmaWVyS2V5KGV2ZW50KSkge1xuICAgICAgdGhpcy5fc2VsZWN0VmlhSW50ZXJhY3Rpb24oKTtcblxuICAgICAgLy8gUHJldmVudCB0aGUgcGFnZSBmcm9tIHNjcm9sbGluZyBkb3duIGFuZCBmb3JtIHN1Ym1pdHMuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBgU2VsZWN0cyB0aGUgb3B0aW9uIHdoaWxlIGluZGljYXRpbmcgdGhlIHNlbGVjdGlvbiBjYW1lIGZyb20gdGhlIHVzZXIuIFVzZWQgdG9cbiAgICogZGV0ZXJtaW5lIGlmIHRoZSBzZWxlY3QncyB2aWV3IC0+IG1vZGVsIGNhbGxiYWNrIHNob3VsZCBiZSBpbnZva2VkLmBcbiAgICovXG4gIF9zZWxlY3RWaWFJbnRlcmFjdGlvbigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkID0gdGhpcy5tdWx0aXBsZSA/ICF0aGlzLl9zZWxlY3RlZCA6IHRydWU7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIHRoaXMuX2VtaXRTZWxlY3Rpb25DaGFuZ2VFdmVudCh0cnVlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgYGFyaWEtc2VsZWN0ZWRgIHZhbHVlIGZvciB0aGUgb3B0aW9uLiBXZSBleHBsaWNpdGx5IG9taXQgdGhlIGBhcmlhLXNlbGVjdGVkYFxuICAgKiBhdHRyaWJ1dGUgZnJvbSBzaW5nbGUtc2VsZWN0aW9uLCB1bnNlbGVjdGVkIG9wdGlvbnMuIEluY2x1ZGluZyB0aGUgYGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiYFxuICAgKiBhdHRyaWJ1dGVzIGFkZHMgYSBzaWduaWZpY2FudCBhbW91bnQgb2Ygbm9pc2UgdG8gc2NyZWVuLXJlYWRlciB1c2VycyB3aXRob3V0IHByb3ZpZGluZyB1c2VmdWxcbiAgICogaW5mb3JtYXRpb24uXG4gICAqL1xuICBfZ2V0QXJpYVNlbGVjdGVkKCk6IGJvb2xlYW58bnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWQgfHwgKHRoaXMubXVsdGlwbGUgPyBmYWxzZSA6IG51bGwpO1xuICB9XG5cbiAgLyoqIFJldHVybnMgdGhlIGNvcnJlY3QgdGFiaW5kZXggZm9yIHRoZSBvcHRpb24gZGVwZW5kaW5nIG9uIGRpc2FibGVkIHN0YXRlLiAqL1xuICBfZ2V0VGFiSW5kZXgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZCA/ICctMScgOiAnMCc7XG4gIH1cblxuICAvKiogR2V0cyB0aGUgaG9zdCBET00gZWxlbWVudC4gKi9cbiAgX2dldEhvc3RFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgIC8vIFNpbmNlIHBhcmVudCBjb21wb25lbnRzIGNvdWxkIGJlIHVzaW5nIHRoZSBvcHRpb24ncyBsYWJlbCB0byBkaXNwbGF5IHRoZSBzZWxlY3RlZCB2YWx1ZXNcbiAgICAvLyAoZS5nLiBgbWF0LXNlbGVjdGApIGFuZCB0aGV5IGRvbid0IGhhdmUgYSB3YXkgb2Yga25vd2luZyBpZiB0aGUgb3B0aW9uJ3MgbGFiZWwgaGFzIGNoYW5nZWRcbiAgICAvLyB3ZSBoYXZlIHRvIGNoZWNrIGZvciBjaGFuZ2VzIGluIHRoZSBET00gb3Vyc2VsdmVzIGFuZCBkaXNwYXRjaCBhbiBldmVudC4gVGhlc2UgY2hlY2tzIGFyZVxuICAgIC8vIHJlbGF0aXZlbHkgY2hlYXAsIGhvd2V2ZXIgd2Ugc3RpbGwgbGltaXQgdGhlbSBvbmx5IHRvIHNlbGVjdGVkIG9wdGlvbnMgaW4gb3JkZXIgdG8gYXZvaWRcbiAgICAvLyBoaXR0aW5nIHRoZSBET00gdG9vIG9mdGVuLlxuICAgIGlmICh0aGlzLl9zZWxlY3RlZCkge1xuICAgICAgY29uc3Qgdmlld1ZhbHVlID0gdGhpcy52aWV3VmFsdWU7XG5cbiAgICAgIGlmICh2aWV3VmFsdWUgIT09IHRoaXMuX21vc3RSZWNlbnRWaWV3VmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbW9zdFJlY2VudFZpZXdWYWx1ZSA9IHZpZXdWYWx1ZTtcbiAgICAgICAgdGhpcy5fc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9zdGF0ZUNoYW5nZXMuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKiBFbWl0cyB0aGUgc2VsZWN0aW9uIGNoYW5nZSBldmVudC4gKi9cbiAgcHJpdmF0ZSBfZW1pdFNlbGVjdGlvbkNoYW5nZUV2ZW50KGlzVXNlcklucHV0ID0gZmFsc2UpOiB2b2lkIHtcbiAgICB0aGlzLm9uU2VsZWN0aW9uQ2hhbmdlLmVtaXQobmV3IE1hdE9wdGlvblNlbGVjdGlvbkNoYW5nZSh0aGlzLCBpc1VzZXJJbnB1dCkpO1xuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG59XG5cbi8qKlxuICogQ291bnRzIHRoZSBhbW91bnQgb2Ygb3B0aW9uIGdyb3VwIGxhYmVscyB0aGF0IHByZWNlZGUgdGhlIHNwZWNpZmllZCBvcHRpb24uXG4gKiBAcGFyYW0gb3B0aW9uSW5kZXggSW5kZXggb2YgdGhlIG9wdGlvbiBhdCB3aGljaCB0byBzdGFydCBjb3VudGluZy5cbiAqIEBwYXJhbSBvcHRpb25zIEZsYXQgbGlzdCBvZiBhbGwgb2YgdGhlIG9wdGlvbnMuXG4gKiBAcGFyYW0gb3B0aW9uR3JvdXBzIEZsYXQgbGlzdCBvZiBhbGwgb2YgdGhlIG9wdGlvbiBncm91cHMuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfY291bnRHcm91cExhYmVsc0JlZm9yZU9wdGlvbihvcHRpb25JbmRleDogbnVtYmVyLCBvcHRpb25zOiBRdWVyeUxpc3Q8TWF0T3B0aW9uPixcbiAgb3B0aW9uR3JvdXBzOiBRdWVyeUxpc3Q8TWF0T3B0Z3JvdXA+KTogbnVtYmVyIHtcblxuICBpZiAob3B0aW9uR3JvdXBzLmxlbmd0aCkge1xuICAgIGxldCBvcHRpb25zQXJyYXkgPSBvcHRpb25zLnRvQXJyYXkoKTtcbiAgICBsZXQgZ3JvdXBzID0gb3B0aW9uR3JvdXBzLnRvQXJyYXkoKTtcbiAgICBsZXQgZ3JvdXBDb3VudGVyID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uSW5kZXggKyAxOyBpKyspIHtcbiAgICAgIGlmIChvcHRpb25zQXJyYXlbaV0uZ3JvdXAgJiYgb3B0aW9uc0FycmF5W2ldLmdyb3VwID09PSBncm91cHNbZ3JvdXBDb3VudGVyXSkge1xuICAgICAgICBncm91cENvdW50ZXIrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZ3JvdXBDb3VudGVyO1xuICB9XG5cbiAgcmV0dXJuIDA7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB0aGUgcG9zaXRpb24gdG8gd2hpY2ggdG8gc2Nyb2xsIGEgcGFuZWwgaW4gb3JkZXIgZm9yIGFuIG9wdGlvbiB0byBiZSBpbnRvIHZpZXcuXG4gKiBAcGFyYW0gb3B0aW9uSW5kZXggSW5kZXggb2YgdGhlIG9wdGlvbiB0byBiZSBzY3JvbGxlZCBpbnRvIHRoZSB2aWV3LlxuICogQHBhcmFtIG9wdGlvbkhlaWdodCBIZWlnaHQgb2YgdGhlIG9wdGlvbnMuXG4gKiBAcGFyYW0gY3VycmVudFNjcm9sbFBvc2l0aW9uIEN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSBwYW5lbC5cbiAqIEBwYXJhbSBwYW5lbEhlaWdodCBIZWlnaHQgb2YgdGhlIHBhbmVsLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gX2dldE9wdGlvblNjcm9sbFBvc2l0aW9uKG9wdGlvbkluZGV4OiBudW1iZXIsIG9wdGlvbkhlaWdodDogbnVtYmVyLFxuICAgIGN1cnJlbnRTY3JvbGxQb3NpdGlvbjogbnVtYmVyLCBwYW5lbEhlaWdodDogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3Qgb3B0aW9uT2Zmc2V0ID0gb3B0aW9uSW5kZXggKiBvcHRpb25IZWlnaHQ7XG5cbiAgaWYgKG9wdGlvbk9mZnNldCA8IGN1cnJlbnRTY3JvbGxQb3NpdGlvbikge1xuICAgIHJldHVybiBvcHRpb25PZmZzZXQ7XG4gIH1cblxuICBpZiAob3B0aW9uT2Zmc2V0ICsgb3B0aW9uSGVpZ2h0ID4gY3VycmVudFNjcm9sbFBvc2l0aW9uICsgcGFuZWxIZWlnaHQpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgb3B0aW9uT2Zmc2V0IC0gcGFuZWxIZWlnaHQgKyBvcHRpb25IZWlnaHQpO1xuICB9XG5cbiAgcmV0dXJuIGN1cnJlbnRTY3JvbGxQb3NpdGlvbjtcbn1cbiJdfQ==