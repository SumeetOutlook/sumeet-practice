/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Inject, InjectionToken, Input, Output, QueryList, TemplateRef, ViewChild, ViewEncapsulation, } from '@angular/core';
import { MAT_OPTION_PARENT_COMPONENT, MatOptgroup, MatOption, mixinDisableRipple, } from '@angular/material/core';
/**
 * Autocomplete IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

var _c0 = ["panel"];
function MatAutocomplete_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
    ɵngcc0.ɵɵprojection(2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("id", ctx_r0.id)("ngClass", ctx_r0._classList);
} }
var _c1 = ["*"];
var _uniqueAutocompleteIdCounter = 0;
/** Event object that is emitted when an autocomplete option is selected. */
var MatAutocompleteSelectedEvent = /** @class */ (function () {
    function MatAutocompleteSelectedEvent(
    /** Reference to the autocomplete panel that emitted the event. */
    source, 
    /** Option that was selected. */
    option) {
        this.source = source;
        this.option = option;
    }
    return MatAutocompleteSelectedEvent;
}());
export { MatAutocompleteSelectedEvent };
// Boilerplate for applying mixins to MatAutocomplete.
/** @docs-private */
var MatAutocompleteBase = /** @class */ (function () {
    function MatAutocompleteBase() {
    }
    return MatAutocompleteBase;
}());
var _MatAutocompleteMixinBase = mixinDisableRipple(MatAutocompleteBase);
/** Injection token to be used to override the default options for `mat-autocomplete`. */
export var MAT_AUTOCOMPLETE_DEFAULT_OPTIONS = new InjectionToken('mat-autocomplete-default-options', {
    providedIn: 'root',
    factory: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY,
});
/** @docs-private */
export function MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY() {
    return { autoActiveFirstOption: false };
}
var MatAutocomplete = /** @class */ (function (_super) {
    __extends(MatAutocomplete, _super);
    function MatAutocomplete(_changeDetectorRef, _elementRef, defaults) {
        var _this = _super.call(this) || this;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._elementRef = _elementRef;
        /** Whether the autocomplete panel should be visible, depending on option length. */
        _this.showPanel = false;
        _this._isOpen = false;
        /** Function that maps an option's control value to its display value in the trigger. */
        _this.displayWith = null;
        /** Event that is emitted whenever an option from the list is selected. */
        _this.optionSelected = new EventEmitter();
        /** Event that is emitted when the autocomplete panel is opened. */
        _this.opened = new EventEmitter();
        /** Event that is emitted when the autocomplete panel is closed. */
        _this.closed = new EventEmitter();
        _this._classList = {};
        /** Unique ID to be used by autocomplete trigger's "aria-owns" property. */
        _this.id = "mat-autocomplete-" + _uniqueAutocompleteIdCounter++;
        _this._autoActiveFirstOption = !!defaults.autoActiveFirstOption;
        return _this;
    }
    Object.defineProperty(MatAutocomplete.prototype, "isOpen", {
        /** Whether the autocomplete panel is open. */
        get: function () { return this._isOpen && this.showPanel; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatAutocomplete.prototype, "autoActiveFirstOption", {
        /**
         * Whether the first option should be highlighted when the autocomplete panel is opened.
         * Can be configured globally through the `MAT_AUTOCOMPLETE_DEFAULT_OPTIONS` token.
         */
        get: function () { return this._autoActiveFirstOption; },
        set: function (value) {
            this._autoActiveFirstOption = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatAutocomplete.prototype, "classList", {
        /**
         * Takes classes set on the host mat-autocomplete element and applies them to the panel
         * inside the overlay container to allow for easy styling.
         */
        set: function (value) {
            if (value && value.length) {
                this._classList = value.split(' ').reduce(function (classList, className) {
                    classList[className.trim()] = true;
                    return classList;
                }, {});
            }
            else {
                this._classList = {};
            }
            this._setVisibilityClasses(this._classList);
            this._elementRef.nativeElement.className = '';
        },
        enumerable: true,
        configurable: true
    });
    MatAutocomplete.prototype.ngAfterContentInit = function () {
        this._keyManager = new ActiveDescendantKeyManager(this.options).withWrap();
        // Set the initial visibility state.
        this._setVisibility();
    };
    /**
     * Sets the panel scrollTop. This allows us to manually scroll to display options
     * above or below the fold, as they are not actually being focused when active.
     */
    MatAutocomplete.prototype._setScrollTop = function (scrollTop) {
        if (this.panel) {
            this.panel.nativeElement.scrollTop = scrollTop;
        }
    };
    /** Returns the panel's scrollTop. */
    MatAutocomplete.prototype._getScrollTop = function () {
        return this.panel ? this.panel.nativeElement.scrollTop : 0;
    };
    /** Panel should hide itself when the option list is empty. */
    MatAutocomplete.prototype._setVisibility = function () {
        this.showPanel = !!this.options.length;
        this._setVisibilityClasses(this._classList);
        this._changeDetectorRef.markForCheck();
    };
    /** Emits the `select` event. */
    MatAutocomplete.prototype._emitSelectEvent = function (option) {
        var event = new MatAutocompleteSelectedEvent(this, option);
        this.optionSelected.emit(event);
    };
    /** Sets the autocomplete visibility classes on a classlist based on the panel is visible. */
    MatAutocomplete.prototype._setVisibilityClasses = function (classList) {
        classList['mat-autocomplete-visible'] = this.showPanel;
        classList['mat-autocomplete-hidden'] = !this.showPanel;
    };
    /** @nocollapse */
    MatAutocomplete.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS,] }] }
    ]; };
    MatAutocomplete.propDecorators = {
        template: [{ type: ViewChild, args: [TemplateRef, { static: true },] }],
        panel: [{ type: ViewChild, args: ['panel',] }],
        options: [{ type: ContentChildren, args: [MatOption, { descendants: true },] }],
        optionGroups: [{ type: ContentChildren, args: [MatOptgroup, { descendants: true },] }],
        displayWith: [{ type: Input }],
        autoActiveFirstOption: [{ type: Input }],
        panelWidth: [{ type: Input }],
        optionSelected: [{ type: Output }],
        opened: [{ type: Output }],
        closed: [{ type: Output }],
        classList: [{ type: Input, args: ['class',] }]
    };
MatAutocomplete.ɵfac = function MatAutocomplete_Factory(t) { return new (t || MatAutocomplete)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(MAT_AUTOCOMPLETE_DEFAULT_OPTIONS)); };
MatAutocomplete.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatAutocomplete, selectors: [["mat-autocomplete"]], contentQueries: function MatAutocomplete_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, MatOption, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, MatOptgroup, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.options = _t);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.optionGroups = _t);
    } }, viewQuery: function MatAutocomplete_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(TemplateRef, true);
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.template = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.panel = _t.first);
    } }, hostAttrs: [1, "mat-autocomplete"], inputs: { disableRipple: "disableRipple", autoActiveFirstOption: "autoActiveFirstOption", classList: ["class", "classList"], displayWith: "displayWith", panelWidth: "panelWidth" }, outputs: { optionSelected: "optionSelected", opened: "opened", closed: "closed" }, exportAs: ["matAutocomplete"], features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: MAT_OPTION_PARENT_COMPONENT, useExisting: MatAutocomplete }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1, decls: 1, vars: 0, consts: [["role", "listbox", 1, "mat-autocomplete-panel", 3, "id", "ngClass"], ["panel", ""]], template: function MatAutocomplete_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, MatAutocomplete_ng_template_0_Template, 3, 2, "ng-template");
    } }, directives: [ɵngcc1.NgClass], styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}\n"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatAutocomplete, [{
        type: Component,
        args: [{
                selector: 'mat-autocomplete',
                template: "<ng-template>\n  <div class=\"mat-autocomplete-panel\" role=\"listbox\" [id]=\"id\" [ngClass]=\"_classList\" #panel>\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                exportAs: 'matAutocomplete',
                inputs: ['disableRipple'],
                host: {
                    'class': 'mat-autocomplete'
                },
                providers: [
                    { provide: MAT_OPTION_PARENT_COMPONENT, useExisting: MatAutocomplete }
                ],
                styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}\n"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS]
            }] }]; }, { autoActiveFirstOption: [{
            type: Input
        }], classList: [{
            type: Input,
            args: ['class']
        }], template: [{
            type: ViewChild,
            args: [TemplateRef, { static: true }]
        }], panel: [{
            type: ViewChild,
            args: ['panel']
        }], options: [{
            type: ContentChildren,
            args: [MatOption, { descendants: true }]
        }], optionGroups: [{
            type: ContentChildren,
            args: [MatOptgroup, { descendants: true }]
        }], displayWith: [{
            type: Input
        }], panelWidth: [{
            type: Input
        }], optionSelected: [{
            type: Output
        }], opened: [{
            type: Output
        }], closed: [{
            type: Output
        }] }); })();
    return MatAutocomplete;
}(_MatAutocompleteMixinBase));
export { MatAutocomplete };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUM3RCxPQUFPLEVBQWUscUJBQXFCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLGNBQWMsRUFDZCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBR0wsMkJBQTJCLEVBQzNCLFdBQVcsRUFDWCxTQUFTLEVBQ1Qsa0JBQWtCLEdBQ25CLE1BQU0sd0JBQXdCLENBQUM7QUFHaEM7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7Ozs7Ozs7Ozs7Ozs7QUFDSCxJQUFJLDRCQUE0QixHQUFHLENBQUMsQ0FBQztBQUVyQyw0RUFBNEU7QUFDNUU7QUFFSyxJQURIO0FBQ3dCLElBQXRCLGtFQUFrRTtBQUN0RSxJQUFXLE1BQXVCO0FBQ2pDLElBQUcsZ0NBQWdDO0FBQ3BDLElBQVcsTUFBaUI7QUFBSSxRQUZyQixXQUFNLEdBQU4sTUFBTSxDQUFpQjtBQUFDLFFBRXhCLFdBQU0sR0FBTixNQUFNLENBQVc7QUFBQyxJQUFHLENBQUM7QUFDakMsSUFBQSxtQ0FBQztBQUFELENBQUMsQUFORCxJQU1DO0FBQ0Q7QUFFQSxzREFBc0Q7QUFDdEQsb0JBQW9CO0FBQ3BCO0FBQzBCLElBRDFCO0FBQ0ksSUFEdUIsQ0FBQztBQUM1QixJQUQyQiwwQkFB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QUM1QiwvQkFnQ3VELDhCQUd2RCxLQUFLO2FBbENOLFNBQVMsRUFBRSx4QkFrQ0Esd0NBTVYsS0FBSztBQXZDSixFQUFDLE9BQU8sRUFBRSwyQkFBMkIsdENBd0N2Qyw2QkFVQyxLQUFLO0NBbERtQyxXQUFXLEVBQUUsZUFBZSxFQUFDLC9CQWtEM0QsaUNBR1YsTUFBTTtTQXBETixUQW9EVyx5QkFJWCxNQUFNO0FBQUsseUJBR1gsTUFBTTtBQUFLLDRCQU1YLEtBQUssU0FBQyxPQUFPO0FBQ1o7Ozs7a0RBakVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFpRVM7QUFBQyxJQXFFWCxzQkFBQztBQUNBLENBREEsQUFwSkQsQ0FlcUMseUJBQXlCLEdBcUk3RDtBQUNELFNBdElhLGVBQWU7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0FjdGl2ZURlc2NlbmRhbnRLZXlNYW5hZ2VyfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge0Jvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIEluamVjdGlvblRva2VuLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENhbkRpc2FibGVSaXBwbGUsXG4gIENhbkRpc2FibGVSaXBwbGVDdG9yLFxuICBNQVRfT1BUSU9OX1BBUkVOVF9DT01QT05FTlQsXG4gIE1hdE9wdGdyb3VwLFxuICBNYXRPcHRpb24sXG4gIG1peGluRGlzYWJsZVJpcHBsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cblxuLyoqXG4gKiBBdXRvY29tcGxldGUgSURzIG5lZWQgdG8gYmUgdW5pcXVlIGFjcm9zcyBjb21wb25lbnRzLCBzbyB0aGlzIGNvdW50ZXIgZXhpc3RzIG91dHNpZGUgb2ZcbiAqIHRoZSBjb21wb25lbnQgZGVmaW5pdGlvbi5cbiAqL1xubGV0IF91bmlxdWVBdXRvY29tcGxldGVJZENvdW50ZXIgPSAwO1xuXG4vKiogRXZlbnQgb2JqZWN0IHRoYXQgaXMgZW1pdHRlZCB3aGVuIGFuIGF1dG9jb21wbGV0ZSBvcHRpb24gaXMgc2VsZWN0ZWQuICovXG5leHBvcnQgY2xhc3MgTWF0QXV0b2NvbXBsZXRlU2VsZWN0ZWRFdmVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIC8qKiBSZWZlcmVuY2UgdG8gdGhlIGF1dG9jb21wbGV0ZSBwYW5lbCB0aGF0IGVtaXR0ZWQgdGhlIGV2ZW50LiAqL1xuICAgIHB1YmxpYyBzb3VyY2U6IE1hdEF1dG9jb21wbGV0ZSxcbiAgICAvKiogT3B0aW9uIHRoYXQgd2FzIHNlbGVjdGVkLiAqL1xuICAgIHB1YmxpYyBvcHRpb246IE1hdE9wdGlvbikgeyB9XG59XG5cblxuLy8gQm9pbGVycGxhdGUgZm9yIGFwcGx5aW5nIG1peGlucyB0byBNYXRBdXRvY29tcGxldGUuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuY2xhc3MgTWF0QXV0b2NvbXBsZXRlQmFzZSB7fVxuY29uc3QgX01hdEF1dG9jb21wbGV0ZU1peGluQmFzZTogQ2FuRGlzYWJsZVJpcHBsZUN0b3IgJiB0eXBlb2YgTWF0QXV0b2NvbXBsZXRlQmFzZSA9XG4gICAgbWl4aW5EaXNhYmxlUmlwcGxlKE1hdEF1dG9jb21wbGV0ZUJhc2UpO1xuXG4vKiogRGVmYXVsdCBgbWF0LWF1dG9jb21wbGV0ZWAgb3B0aW9ucyB0aGF0IGNhbiBiZSBvdmVycmlkZGVuLiAqL1xuZXhwb3J0IGludGVyZmFjZSBNYXRBdXRvY29tcGxldGVEZWZhdWx0T3B0aW9ucyB7XG4gIC8qKiBXaGV0aGVyIHRoZSBmaXJzdCBvcHRpb24gc2hvdWxkIGJlIGhpZ2hsaWdodGVkIHdoZW4gYW4gYXV0b2NvbXBsZXRlIHBhbmVsIGlzIG9wZW5lZC4gKi9cbiAgYXV0b0FjdGl2ZUZpcnN0T3B0aW9uPzogYm9vbGVhbjtcbn1cblxuLyoqIEluamVjdGlvbiB0b2tlbiB0byBiZSB1c2VkIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IG9wdGlvbnMgZm9yIGBtYXQtYXV0b2NvbXBsZXRlYC4gKi9cbmV4cG9ydCBjb25zdCBNQVRfQVVUT0NPTVBMRVRFX0RFRkFVTFRfT1BUSU9OUyA9XG4gICAgbmV3IEluamVjdGlvblRva2VuPE1hdEF1dG9jb21wbGV0ZURlZmF1bHRPcHRpb25zPignbWF0LWF1dG9jb21wbGV0ZS1kZWZhdWx0LW9wdGlvbnMnLCB7XG4gICAgICBwcm92aWRlZEluOiAncm9vdCcsXG4gICAgICBmYWN0b3J5OiBNQVRfQVVUT0NPTVBMRVRFX0RFRkFVTFRfT1BUSU9OU19GQUNUT1JZLFxuICAgIH0pO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1BVF9BVVRPQ09NUExFVEVfREVGQVVMVF9PUFRJT05TX0ZBQ1RPUlkoKTogTWF0QXV0b2NvbXBsZXRlRGVmYXVsdE9wdGlvbnMge1xuICByZXR1cm4ge2F1dG9BY3RpdmVGaXJzdE9wdGlvbjogZmFsc2V9O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtYXV0b2NvbXBsZXRlJyxcbiAgdGVtcGxhdGVVcmw6ICdhdXRvY29tcGxldGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydhdXRvY29tcGxldGUuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBleHBvcnRBczogJ21hdEF1dG9jb21wbGV0ZScsXG4gIGlucHV0czogWydkaXNhYmxlUmlwcGxlJ10sXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnbWF0LWF1dG9jb21wbGV0ZSdcbiAgfSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge3Byb3ZpZGU6IE1BVF9PUFRJT05fUEFSRU5UX0NPTVBPTkVOVCwgdXNlRXhpc3Rpbmc6IE1hdEF1dG9jb21wbGV0ZX1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNYXRBdXRvY29tcGxldGUgZXh0ZW5kcyBfTWF0QXV0b2NvbXBsZXRlTWl4aW5CYXNlIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2FuRGlzYWJsZVJpcHBsZSB7XG5cbiAgLyoqIE1hbmFnZXMgYWN0aXZlIGl0ZW0gaW4gb3B0aW9uIGxpc3QgYmFzZWQgb24ga2V5IGV2ZW50cy4gKi9cbiAgX2tleU1hbmFnZXI6IEFjdGl2ZURlc2NlbmRhbnRLZXlNYW5hZ2VyPE1hdE9wdGlvbj47XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGF1dG9jb21wbGV0ZSBwYW5lbCBzaG91bGQgYmUgdmlzaWJsZSwgZGVwZW5kaW5nIG9uIG9wdGlvbiBsZW5ndGguICovXG4gIHNob3dQYW5lbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBhdXRvY29tcGxldGUgcGFuZWwgaXMgb3Blbi4gKi9cbiAgZ2V0IGlzT3BlbigpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2lzT3BlbiAmJiB0aGlzLnNob3dQYW5lbDsgfVxuICBfaXNPcGVuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy8gVGhlIEBWaWV3Q2hpbGQgcXVlcnkgZm9yIFRlbXBsYXRlUmVmIGhlcmUgbmVlZHMgdG8gYmUgc3RhdGljIGJlY2F1c2Ugc29tZSBjb2RlIHBhdGhzXG4gIC8vIGxlYWQgdG8gdGhlIG92ZXJsYXkgYmVpbmcgY3JlYXRlZCBiZWZvcmUgY2hhbmdlIGRldGVjdGlvbiBoYXMgZmluaXNoZWQgZm9yIHRoaXMgY29tcG9uZW50LlxuICAvLyBOb3RhYmx5LCBhbm90aGVyIGNvbXBvbmVudCBtYXkgdHJpZ2dlciBgZm9jdXNgIG9uIHRoZSBhdXRvY29tcGxldGUtdHJpZ2dlci5cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmLCB7c3RhdGljOiB0cnVlfSkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqIEVsZW1lbnQgZm9yIHRoZSBwYW5lbCBjb250YWluaW5nIHRoZSBhdXRvY29tcGxldGUgb3B0aW9ucy4gKi9cbiAgQFZpZXdDaGlsZCgncGFuZWwnKSBwYW5lbDogRWxlbWVudFJlZjtcblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBAQ29udGVudENoaWxkcmVuKE1hdE9wdGlvbiwge2Rlc2NlbmRhbnRzOiB0cnVlfSkgb3B0aW9uczogUXVlcnlMaXN0PE1hdE9wdGlvbj47XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgQENvbnRlbnRDaGlsZHJlbihNYXRPcHRncm91cCwge2Rlc2NlbmRhbnRzOiB0cnVlfSkgb3B0aW9uR3JvdXBzOiBRdWVyeUxpc3Q8TWF0T3B0Z3JvdXA+O1xuXG4gIC8qKiBGdW5jdGlvbiB0aGF0IG1hcHMgYW4gb3B0aW9uJ3MgY29udHJvbCB2YWx1ZSB0byBpdHMgZGlzcGxheSB2YWx1ZSBpbiB0aGUgdHJpZ2dlci4gKi9cbiAgQElucHV0KCkgZGlzcGxheVdpdGg6ICgodmFsdWU6IGFueSkgPT4gc3RyaW5nKSB8IG51bGwgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBmaXJzdCBvcHRpb24gc2hvdWxkIGJlIGhpZ2hsaWdodGVkIHdoZW4gdGhlIGF1dG9jb21wbGV0ZSBwYW5lbCBpcyBvcGVuZWQuXG4gICAqIENhbiBiZSBjb25maWd1cmVkIGdsb2JhbGx5IHRocm91Z2ggdGhlIGBNQVRfQVVUT0NPTVBMRVRFX0RFRkFVTFRfT1BUSU9OU2AgdG9rZW4uXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgYXV0b0FjdGl2ZUZpcnN0T3B0aW9uKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fYXV0b0FjdGl2ZUZpcnN0T3B0aW9uOyB9XG4gIHNldCBhdXRvQWN0aXZlRmlyc3RPcHRpb24odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hdXRvQWN0aXZlRmlyc3RPcHRpb24gPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2F1dG9BY3RpdmVGaXJzdE9wdGlvbjogYm9vbGVhbjtcblxuICAvKipcbiAgICogU3BlY2lmeSB0aGUgd2lkdGggb2YgdGhlIGF1dG9jb21wbGV0ZSBwYW5lbC4gIENhbiBiZSBhbnkgQ1NTIHNpemluZyB2YWx1ZSwgb3RoZXJ3aXNlIGl0IHdpbGxcbiAgICogbWF0Y2ggdGhlIHdpZHRoIG9mIGl0cyBob3N0LlxuICAgKi9cbiAgQElucHV0KCkgcGFuZWxXaWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuXG4gIC8qKiBFdmVudCB0aGF0IGlzIGVtaXR0ZWQgd2hlbmV2ZXIgYW4gb3B0aW9uIGZyb20gdGhlIGxpc3QgaXMgc2VsZWN0ZWQuICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBvcHRpb25TZWxlY3RlZDogRXZlbnRFbWl0dGVyPE1hdEF1dG9jb21wbGV0ZVNlbGVjdGVkRXZlbnQ+ID1cbiAgICAgIG5ldyBFdmVudEVtaXR0ZXI8TWF0QXV0b2NvbXBsZXRlU2VsZWN0ZWRFdmVudD4oKTtcblxuICAvKiogRXZlbnQgdGhhdCBpcyBlbWl0dGVkIHdoZW4gdGhlIGF1dG9jb21wbGV0ZSBwYW5lbCBpcyBvcGVuZWQuICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBvcGVuZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKiogRXZlbnQgdGhhdCBpcyBlbWl0dGVkIHdoZW4gdGhlIGF1dG9jb21wbGV0ZSBwYW5lbCBpcyBjbG9zZWQuICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbG9zZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKipcbiAgICogVGFrZXMgY2xhc3NlcyBzZXQgb24gdGhlIGhvc3QgbWF0LWF1dG9jb21wbGV0ZSBlbGVtZW50IGFuZCBhcHBsaWVzIHRoZW0gdG8gdGhlIHBhbmVsXG4gICAqIGluc2lkZSB0aGUgb3ZlcmxheSBjb250YWluZXIgdG8gYWxsb3cgZm9yIGVhc3kgc3R5bGluZy5cbiAgICovXG4gIEBJbnB1dCgnY2xhc3MnKVxuICBzZXQgY2xhc3NMaXN0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9jbGFzc0xpc3QgPSB2YWx1ZS5zcGxpdCgnICcpLnJlZHVjZSgoY2xhc3NMaXN0LCBjbGFzc05hbWUpID0+IHtcbiAgICAgICAgY2xhc3NMaXN0W2NsYXNzTmFtZS50cmltKCldID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGNsYXNzTGlzdDtcbiAgICAgIH0sIHt9IGFzIHtba2V5OiBzdHJpbmddOiBib29sZWFufSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NsYXNzTGlzdCA9IHt9O1xuICAgIH1cblxuICAgIHRoaXMuX3NldFZpc2liaWxpdHlDbGFzc2VzKHRoaXMuX2NsYXNzTGlzdCk7XG4gICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZSA9ICcnO1xuICB9XG4gIF9jbGFzc0xpc3Q6IHtba2V5OiBzdHJpbmddOiBib29sZWFufSA9IHt9O1xuXG4gIC8qKiBVbmlxdWUgSUQgdG8gYmUgdXNlZCBieSBhdXRvY29tcGxldGUgdHJpZ2dlcidzIFwiYXJpYS1vd25zXCIgcHJvcGVydHkuICovXG4gIGlkOiBzdHJpbmcgPSBgbWF0LWF1dG9jb21wbGV0ZS0ke191bmlxdWVBdXRvY29tcGxldGVJZENvdW50ZXIrK31gO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBASW5qZWN0KE1BVF9BVVRPQ09NUExFVEVfREVGQVVMVF9PUFRJT05TKSBkZWZhdWx0czogTWF0QXV0b2NvbXBsZXRlRGVmYXVsdE9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5fYXV0b0FjdGl2ZUZpcnN0T3B0aW9uID0gISFkZWZhdWx0cy5hdXRvQWN0aXZlRmlyc3RPcHRpb247XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5fa2V5TWFuYWdlciA9IG5ldyBBY3RpdmVEZXNjZW5kYW50S2V5TWFuYWdlcjxNYXRPcHRpb24+KHRoaXMub3B0aW9ucykud2l0aFdyYXAoKTtcbiAgICAvLyBTZXQgdGhlIGluaXRpYWwgdmlzaWJpbGl0eSBzdGF0ZS5cbiAgICB0aGlzLl9zZXRWaXNpYmlsaXR5KCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgcGFuZWwgc2Nyb2xsVG9wLiBUaGlzIGFsbG93cyB1cyB0byBtYW51YWxseSBzY3JvbGwgdG8gZGlzcGxheSBvcHRpb25zXG4gICAqIGFib3ZlIG9yIGJlbG93IHRoZSBmb2xkLCBhcyB0aGV5IGFyZSBub3QgYWN0dWFsbHkgYmVpbmcgZm9jdXNlZCB3aGVuIGFjdGl2ZS5cbiAgICovXG4gIF9zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wYW5lbCkge1xuICAgICAgdGhpcy5wYW5lbC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcbiAgICB9XG4gIH1cblxuICAvKiogUmV0dXJucyB0aGUgcGFuZWwncyBzY3JvbGxUb3AuICovXG4gIF9nZXRTY3JvbGxUb3AoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5wYW5lbCA/IHRoaXMucGFuZWwubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgOiAwO1xuICB9XG5cbiAgLyoqIFBhbmVsIHNob3VsZCBoaWRlIGl0c2VsZiB3aGVuIHRoZSBvcHRpb24gbGlzdCBpcyBlbXB0eS4gKi9cbiAgX3NldFZpc2liaWxpdHkoKSB7XG4gICAgdGhpcy5zaG93UGFuZWwgPSAhIXRoaXMub3B0aW9ucy5sZW5ndGg7XG4gICAgdGhpcy5fc2V0VmlzaWJpbGl0eUNsYXNzZXModGhpcy5fY2xhc3NMaXN0KTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKiBFbWl0cyB0aGUgYHNlbGVjdGAgZXZlbnQuICovXG4gIF9lbWl0U2VsZWN0RXZlbnQob3B0aW9uOiBNYXRPcHRpb24pOiB2b2lkIHtcbiAgICBjb25zdCBldmVudCA9IG5ldyBNYXRBdXRvY29tcGxldGVTZWxlY3RlZEV2ZW50KHRoaXMsIG9wdGlvbik7XG4gICAgdGhpcy5vcHRpb25TZWxlY3RlZC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSBhdXRvY29tcGxldGUgdmlzaWJpbGl0eSBjbGFzc2VzIG9uIGEgY2xhc3NsaXN0IGJhc2VkIG9uIHRoZSBwYW5lbCBpcyB2aXNpYmxlLiAqL1xuICBwcml2YXRlIF9zZXRWaXNpYmlsaXR5Q2xhc3NlcyhjbGFzc0xpc3Q6IHtba2V5OiBzdHJpbmddOiBib29sZWFufSkge1xuICAgIGNsYXNzTGlzdFsnbWF0LWF1dG9jb21wbGV0ZS12aXNpYmxlJ10gPSB0aGlzLnNob3dQYW5lbDtcbiAgICBjbGFzc0xpc3RbJ21hdC1hdXRvY29tcGxldGUtaGlkZGVuJ10gPSAhdGhpcy5zaG93UGFuZWw7XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYXV0b0FjdGl2ZUZpcnN0T3B0aW9uOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlUmlwcGxlOiBCb29sZWFuSW5wdXQ7XG59XG4iXX0=