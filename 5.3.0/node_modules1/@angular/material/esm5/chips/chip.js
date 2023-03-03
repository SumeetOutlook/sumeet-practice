/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { BACKSPACE, DELETE, SPACE } from '@angular/cdk/keycodes';
import { Platform } from '@angular/cdk/platform';
import { ContentChild, Directive, ElementRef, EventEmitter, forwardRef, Inject, Input, NgZone, Optional, Output, ChangeDetectorRef, } from '@angular/core';
import { MAT_RIPPLE_GLOBAL_OPTIONS, mixinColor, mixinDisabled, mixinDisableRipple, RippleRenderer, } from '@angular/material/core';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
/** Event object emitted by MatChip when selected or deselected. */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/platform';
var MatChipSelectionChange = /** @class */ (function () {
    function MatChipSelectionChange(
    /** Reference to the chip that emitted the event. */
    source, 
    /** Whether the chip that emitted the event is selected. */
    selected, 
    /** Whether the selection change was a result of a user interaction. */
    isUserInput) {
        if (isUserInput === void 0) { isUserInput = false; }
        this.source = source;
        this.selected = selected;
        this.isUserInput = isUserInput;
    }
    return MatChipSelectionChange;
}());
export { MatChipSelectionChange };
// Boilerplate for applying mixins to MatChip.
/** @docs-private */
var MatChipBase = /** @class */ (function () {
    function MatChipBase(_elementRef) {
        this._elementRef = _elementRef;
    }
    return MatChipBase;
}());
var _MatChipMixinBase = mixinColor(mixinDisableRipple(mixinDisabled(MatChipBase)), 'primary');
/**
 * Dummy directive to add CSS class to chip avatar.
 * @docs-private
 */
var MatChipAvatar = /** @class */ (function () {
    function MatChipAvatar() {
    }
MatChipAvatar.ɵfac = function MatChipAvatar_Factory(t) { return new (t || MatChipAvatar)(); };
MatChipAvatar.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatChipAvatar, selectors: [["mat-chip-avatar"], ["", "matChipAvatar", ""]], hostAttrs: [1, "mat-chip-avatar"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatChipAvatar, [{
        type: Directive,
        args: [{
                selector: 'mat-chip-avatar, [matChipAvatar]',
                host: { 'class': 'mat-chip-avatar' }
            }]
    }], function () { return []; }, null); })();
    return MatChipAvatar;
}());
export { MatChipAvatar };
/**
 * Dummy directive to add CSS class to chip trailing icon.
 * @docs-private
 */
var MatChipTrailingIcon = /** @class */ (function () {
    function MatChipTrailingIcon() {
    }
MatChipTrailingIcon.ɵfac = function MatChipTrailingIcon_Factory(t) { return new (t || MatChipTrailingIcon)(); };
MatChipTrailingIcon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatChipTrailingIcon, selectors: [["mat-chip-trailing-icon"], ["", "matChipTrailingIcon", ""]], hostAttrs: [1, "mat-chip-trailing-icon"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatChipTrailingIcon, [{
        type: Directive,
        args: [{
                selector: 'mat-chip-trailing-icon, [matChipTrailingIcon]',
                host: { 'class': 'mat-chip-trailing-icon' }
            }]
    }], function () { return []; }, null); })();
    return MatChipTrailingIcon;
}());
export { MatChipTrailingIcon };
/**
 * Material design styled Chip component. Used inside the MatChipList component.
 */
var MatChip = /** @class */ (function (_super) {
    __extends(MatChip, _super);
    function MatChip(_elementRef, _ngZone, platform, globalRippleOptions, 
    // @breaking-change 8.0.0 `animationMode` parameter to become required.
    animationMode, 
    // @breaking-change 9.0.0 `_changeDetectorRef` parameter to become required.
    _changeDetectorRef) {
        var _this = _super.call(this, _elementRef) || this;
        _this._elementRef = _elementRef;
        _this._ngZone = _ngZone;
        _this._changeDetectorRef = _changeDetectorRef;
        /** Whether the chip has focus. */
        _this._hasFocus = false;
        /** Whether the chip list is selectable */
        _this.chipListSelectable = true;
        /** Whether the chip list is in multi-selection mode. */
        _this._chipListMultiple = false;
        _this._selected = false;
        _this._selectable = true;
        _this._removable = true;
        /** Emits when the chip is focused. */
        _this._onFocus = new Subject();
        /** Emits when the chip is blured. */
        _this._onBlur = new Subject();
        /** Emitted when the chip is selected or deselected. */
        _this.selectionChange = new EventEmitter();
        /** Emitted when the chip is destroyed. */
        _this.destroyed = new EventEmitter();
        /** Emitted when a chip is to be removed. */
        _this.removed = new EventEmitter();
        _this._addHostClassName();
        _this._chipRipple = new RippleRenderer(_this, _ngZone, _elementRef, platform);
        _this._chipRipple.setupTriggerEvents(_elementRef);
        _this.rippleConfig = globalRippleOptions || {};
        _this._animationsDisabled = animationMode === 'NoopAnimations';
        return _this;
    }
    Object.defineProperty(MatChip.prototype, "rippleDisabled", {
        /**
         * Whether ripples are disabled on interaction
         * @docs-private
         */
        get: function () {
            return this.disabled || this.disableRipple || !!this.rippleConfig.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChip.prototype, "selected", {
        /** Whether the chip is selected. */
        get: function () { return this._selected; },
        set: function (value) {
            var coercedValue = coerceBooleanProperty(value);
            if (coercedValue !== this._selected) {
                this._selected = coercedValue;
                this._dispatchSelectionChange();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChip.prototype, "value", {
        /** The value of the chip. Defaults to the content inside `<mat-chip>` tags. */
        get: function () {
            return this._value !== undefined
                ? this._value
                : this._elementRef.nativeElement.textContent;
        },
        set: function (value) { this._value = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChip.prototype, "selectable", {
        /**
         * Whether or not the chip is selectable. When a chip is not selectable,
         * changes to its selected state are always ignored. By default a chip is
         * selectable, and it becomes non-selectable if its parent chip list is
         * not selectable.
         */
        get: function () { return this._selectable && this.chipListSelectable; },
        set: function (value) {
            this._selectable = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChip.prototype, "removable", {
        /**
         * Determines whether or not the chip displays the remove styling and emits (removed) events.
         */
        get: function () { return this._removable; },
        set: function (value) {
            this._removable = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChip.prototype, "ariaSelected", {
        /** The ARIA selected applied to the chip. */
        get: function () {
            // Remove the `aria-selected` when the chip is deselected in single-selection mode, because
            // it adds noise to NVDA users where "not selected" will be read out for each chip.
            return this.selectable && (this._chipListMultiple || this.selected) ?
                this.selected.toString() : null;
        },
        enumerable: true,
        configurable: true
    });
    MatChip.prototype._addHostClassName = function () {
        var basicChipAttrName = 'mat-basic-chip';
        var element = this._elementRef.nativeElement;
        if (element.hasAttribute(basicChipAttrName) ||
            element.tagName.toLowerCase() === basicChipAttrName) {
            element.classList.add(basicChipAttrName);
            return;
        }
        else {
            element.classList.add('mat-standard-chip');
        }
    };
    MatChip.prototype.ngOnDestroy = function () {
        this.destroyed.emit({ chip: this });
        this._chipRipple._removeTriggerEvents();
    };
    /** Selects the chip. */
    MatChip.prototype.select = function () {
        if (!this._selected) {
            this._selected = true;
            this._dispatchSelectionChange();
            this._markForCheck();
        }
    };
    /** Deselects the chip. */
    MatChip.prototype.deselect = function () {
        if (this._selected) {
            this._selected = false;
            this._dispatchSelectionChange();
            this._markForCheck();
        }
    };
    /** Select this chip and emit selected event */
    MatChip.prototype.selectViaInteraction = function () {
        if (!this._selected) {
            this._selected = true;
            this._dispatchSelectionChange(true);
            this._markForCheck();
        }
    };
    /** Toggles the current selected state of this chip. */
    MatChip.prototype.toggleSelected = function (isUserInput) {
        if (isUserInput === void 0) { isUserInput = false; }
        this._selected = !this.selected;
        this._dispatchSelectionChange(isUserInput);
        this._markForCheck();
        return this.selected;
    };
    /** Allows for programmatic focusing of the chip. */
    MatChip.prototype.focus = function () {
        if (!this._hasFocus) {
            this._elementRef.nativeElement.focus();
            this._onFocus.next({ chip: this });
        }
        this._hasFocus = true;
    };
    /**
     * Allows for programmatic removal of the chip. Called by the MatChipList when the DELETE or
     * BACKSPACE keys are pressed.
     *
     * Informs any listeners of the removal request. Does not remove the chip from the DOM.
     */
    MatChip.prototype.remove = function () {
        if (this.removable) {
            this.removed.emit({ chip: this });
        }
    };
    /** Handles click events on the chip. */
    MatChip.prototype._handleClick = function (event) {
        if (this.disabled) {
            event.preventDefault();
        }
        else {
            event.stopPropagation();
        }
    };
    /** Handle custom key presses. */
    MatChip.prototype._handleKeydown = function (event) {
        if (this.disabled) {
            return;
        }
        switch (event.keyCode) {
            case DELETE:
            case BACKSPACE:
                // If we are removable, remove the focused chip
                this.remove();
                // Always prevent so page navigation does not occur
                event.preventDefault();
                break;
            case SPACE:
                // If we are selectable, toggle the focused chip
                if (this.selectable) {
                    this.toggleSelected(true);
                }
                // Always prevent space from scrolling the page since the list has focus
                event.preventDefault();
                break;
        }
    };
    MatChip.prototype._blur = function () {
        var _this = this;
        // When animations are enabled, Angular may end up removing the chip from the DOM a little
        // earlier than usual, causing it to be blurred and throwing off the logic in the chip list
        // that moves focus not the next item. To work around the issue, we defer marking the chip
        // as not focused until the next time the zone stabilizes.
        this._ngZone.onStable
            .asObservable()
            .pipe(take(1))
            .subscribe(function () {
            _this._ngZone.run(function () {
                _this._hasFocus = false;
                _this._onBlur.next({ chip: _this });
            });
        });
    };
    MatChip.prototype._dispatchSelectionChange = function (isUserInput) {
        if (isUserInput === void 0) { isUserInput = false; }
        this.selectionChange.emit({
            source: this,
            isUserInput: isUserInput,
            selected: this._selected
        });
    };
    MatChip.prototype._markForCheck = function () {
        // @breaking-change 9.0.0 Remove this method once the _changeDetectorRef is a required param.
        if (this._changeDetectorRef) {
            this._changeDetectorRef.markForCheck();
        }
    };
    /** @nocollapse */
    MatChip.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: Platform },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_RIPPLE_GLOBAL_OPTIONS,] }] },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] },
        { type: ChangeDetectorRef }
    ]; };
    MatChip.propDecorators = {
        avatar: [{ type: ContentChild, args: [MatChipAvatar,] }],
        trailingIcon: [{ type: ContentChild, args: [MatChipTrailingIcon,] }],
        removeIcon: [{ type: ContentChild, args: [forwardRef(function () { return MatChipRemove; }),] }],
        selected: [{ type: Input }],
        value: [{ type: Input }],
        selectable: [{ type: Input }],
        removable: [{ type: Input }],
        selectionChange: [{ type: Output }],
        destroyed: [{ type: Output }],
        removed: [{ type: Output }]
    };
MatChip.ɵfac = function MatChip_Factory(t) { return new (t || MatChip)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Platform), ɵngcc0.ɵɵdirectiveInject(MAT_RIPPLE_GLOBAL_OPTIONS, 8), ɵngcc0.ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
MatChip.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatChip, selectors: [["mat-basic-chip"], ["", "mat-basic-chip", ""], ["mat-chip"], ["", "mat-chip", ""]], contentQueries: function MatChip_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, MatChipAvatar, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, MatChipTrailingIcon, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, MatChipRemove, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.avatar = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.trailingIcon = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.removeIcon = _t.first);
    } }, hostAttrs: ["role", "option", 1, "mat-chip"], hostVars: 14, hostBindings: function MatChip_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function MatChip_click_HostBindingHandler($event) { return ctx._handleClick($event); })("keydown", function MatChip_keydown_HostBindingHandler($event) { return ctx._handleKeydown($event); })("focus", function MatChip_focus_HostBindingHandler() { return ctx.focus(); })("blur", function MatChip_blur_HostBindingHandler() { return ctx._blur(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("tabindex", ctx.disabled ? null : 0 - 1)("disabled", ctx.disabled || null)("aria-disabled", ctx.disabled.toString())("aria-selected", ctx.ariaSelected);
        ɵngcc0.ɵɵclassProp("mat-chip-selected", ctx.selected)("mat-chip-with-avatar", ctx.avatar)("mat-chip-with-trailing-icon", ctx.trailingIcon || ctx.removeIcon)("mat-chip-disabled", ctx.disabled)("_mat-animation-noopable", ctx._animationsDisabled);
    } }, inputs: { color: "color", disabled: "disabled", disableRipple: "disableRipple", selected: "selected", value: "value", selectable: "selectable", removable: "removable" }, outputs: { selectionChange: "selectionChange", destroyed: "destroyed", removed: "removed" }, exportAs: ["matChip"], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatChip, [{
        type: Directive,
        args: [{
                selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]",
                inputs: ['color', 'disabled', 'disableRipple'],
                exportAs: 'matChip',
                host: {
                    'class': 'mat-chip',
                    '[attr.tabindex]': 'disabled ? null : -1',
                    'role': 'option',
                    '[class.mat-chip-selected]': 'selected',
                    '[class.mat-chip-with-avatar]': 'avatar',
                    '[class.mat-chip-with-trailing-icon]': 'trailingIcon || removeIcon',
                    '[class.mat-chip-disabled]': 'disabled',
                    '[class._mat-animation-noopable]': '_animationsDisabled',
                    '[attr.disabled]': 'disabled || null',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '[attr.aria-selected]': 'ariaSelected',
                    '(click)': '_handleClick($event)',
                    '(keydown)': '_handleKeydown($event)',
                    '(focus)': 'focus()',
                    '(blur)': '_blur()'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }, { type: ɵngcc1.Platform }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [MAT_RIPPLE_GLOBAL_OPTIONS]
            }] }, { type: String, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ANIMATION_MODULE_TYPE]
            }] }, { type: ɵngcc0.ChangeDetectorRef }]; }, { selected: [{
            type: Input
        }], value: [{
            type: Input
        }], selectable: [{
            type: Input
        }], removable: [{
            type: Input
        }], avatar: [{
            type: ContentChild,
            args: [MatChipAvatar]
        }], trailingIcon: [{
            type: ContentChild,
            args: [MatChipTrailingIcon]
        }], removeIcon: [{
            type: ContentChild,
            args: [forwardRef(function () { return MatChipRemove; })]
        }], selectionChange: [{
            type: Output
        }], destroyed: [{
            type: Output
        }], removed: [{
            type: Output
        }] }); })();
    return MatChip;
}(_MatChipMixinBase));
export { MatChip };
/**
 * Applies proper (click) support and adds styling for use with the Material Design "cancel" icon
 * available at https://material.io/icons/#ic_cancel.
 *
 * Example:
 *
 *     `<mat-chip>
 *       <mat-icon matChipRemove>cancel</mat-icon>
 *     </mat-chip>`
 *
 * You *may* use a custom icon, but you may need to override the `mat-chip-remove` positioning
 * styles to properly center the icon within the chip.
 */
var MatChipRemove = /** @class */ (function () {
    function MatChipRemove(_parentChip) {
        this._parentChip = _parentChip;
    }
    /** Calls the parent chip's public `remove()` method if applicable. */
    MatChipRemove.prototype._handleClick = function (event) {
        var parentChip = this._parentChip;
        if (parentChip.removable && !parentChip.disabled) {
            parentChip.remove();
        }
        // We need to stop event propagation because otherwise the event will bubble up to the
        // form field and cause the `onContainerClick` method to be invoked. This method would then
        // reset the focused chip that has been focused after chip removal. Usually the parent
        // the parent click listener of the `MatChip` would prevent propagation, but it can happen
        // that the chip is being removed before the event bubbles up.
        event.stopPropagation();
    };
    /** @nocollapse */
    MatChipRemove.ctorParameters = function () { return [
        { type: MatChip }
    ]; };
MatChipRemove.ɵfac = function MatChipRemove_Factory(t) { return new (t || MatChipRemove)(ɵngcc0.ɵɵdirectiveInject(MatChip)); };
MatChipRemove.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatChipRemove, selectors: [["", "matChipRemove", ""]], hostAttrs: ["type", "button", 1, "mat-chip-remove", "mat-chip-trailing-icon"], hostBindings: function MatChipRemove_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function MatChipRemove_click_HostBindingHandler($event) { return ctx._handleClick($event); });
    } } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatChipRemove, [{
        type: Directive,
        args: [{
                selector: '[matChipRemove]',
                host: {
                    'class': 'mat-chip-remove mat-chip-trailing-icon',
                    '(click)': '_handleClick($event)',
                    // Prevent accidental form submissions.
                    'type': 'button'
                }
            }]
    }], function () { return [{ type: MatChip }]; }, null); })();
    return MatChipRemove;
}());
export { MatChipRemove };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL2NoaXBzL2NoaXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBRUEsT0FBTyxFQUFlLHFCQUFxQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDMUUsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDL0QsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sRUFDTCxZQUFZLEVBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUVOLFFBQVEsRUFDUixNQUFNLEVBQ04saUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFPTCx5QkFBeUIsRUFDekIsVUFBVSxFQUNWLGFBQWEsRUFDYixrQkFBa0IsRUFHbEIsY0FBYyxHQUVmLE1BQU0sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUM3QixPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEMsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFTM0UsbUVBQW1FOzs7QUFDbkU7QUFFSyxJQURIO0FBQ2tCLElBQWhCLG9EQUFvRDtBQUN4RCxJQUFXLE1BQWU7QUFDekIsSUFBRywyREFBMkQ7QUFDL0QsSUFBVyxRQUFpQjtBQUMzQixJQUFHLHVFQUF1RTtBQUMzRSxJQUFXLFdBQW1CO0FBQUksUUFBdkIsNEJBQUEsRUFBQSxtQkFBbUI7QUFBSSxRQUp2QixXQUFNLEdBQU4sTUFBTSxDQUFTO0FBQUMsUUFFaEIsYUFBUSxHQUFSLFFBQVEsQ0FB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KiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Rm9jdXNhYmxlT3B0aW9ufSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge0Jvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtCQUNLU1BBQ0UsIERFTEVURSwgU1BBQ0V9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQge1BsYXRmb3JtfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtcbiAgQ29udGVudENoaWxkLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENhbkNvbG9yLFxuICBDYW5Db2xvckN0b3IsXG4gIENhbkRpc2FibGUsXG4gIENhbkRpc2FibGVDdG9yLFxuICBDYW5EaXNhYmxlUmlwcGxlLFxuICBDYW5EaXNhYmxlUmlwcGxlQ3RvcixcbiAgTUFUX1JJUFBMRV9HTE9CQUxfT1BUSU9OUyxcbiAgbWl4aW5Db2xvcixcbiAgbWl4aW5EaXNhYmxlZCxcbiAgbWl4aW5EaXNhYmxlUmlwcGxlLFxuICBSaXBwbGVDb25maWcsXG4gIFJpcHBsZUdsb2JhbE9wdGlvbnMsXG4gIFJpcHBsZVJlbmRlcmVyLFxuICBSaXBwbGVUYXJnZXQsXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7dGFrZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtBTklNQVRJT05fTU9EVUxFX1RZUEV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5cblxuLyoqIFJlcHJlc2VudHMgYW4gZXZlbnQgZmlyZWQgb24gYW4gaW5kaXZpZHVhbCBgbWF0LWNoaXBgLiAqL1xuZXhwb3J0IGludGVyZmFjZSBNYXRDaGlwRXZlbnQge1xuICAvKiogVGhlIGNoaXAgdGhlIGV2ZW50IHdhcyBmaXJlZCBvbi4gKi9cbiAgY2hpcDogTWF0Q2hpcDtcbn1cblxuLyoqIEV2ZW50IG9iamVjdCBlbWl0dGVkIGJ5IE1hdENoaXAgd2hlbiBzZWxlY3RlZCBvciBkZXNlbGVjdGVkLiAqL1xuZXhwb3J0IGNsYXNzIE1hdENoaXBTZWxlY3Rpb25DaGFuZ2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICAvKiogUmVmZXJlbmNlIHRvIHRoZSBjaGlwIHRoYXQgZW1pdHRlZCB0aGUgZXZlbnQuICovXG4gICAgcHVibGljIHNvdXJjZTogTWF0Q2hpcCxcbiAgICAvKiogV2hldGhlciB0aGUgY2hpcCB0aGF0IGVtaXR0ZWQgdGhlIGV2ZW50IGlzIHNlbGVjdGVkLiAqL1xuICAgIHB1YmxpYyBzZWxlY3RlZDogYm9vbGVhbixcbiAgICAvKiogV2hldGhlciB0aGUgc2VsZWN0aW9uIGNoYW5nZSB3YXMgYSByZXN1bHQgb2YgYSB1c2VyIGludGVyYWN0aW9uLiAqL1xuICAgIHB1YmxpYyBpc1VzZXJJbnB1dCA9IGZhbHNlKSB7IH1cbn1cblxuXG4vLyBCb2lsZXJwbGF0ZSBmb3IgYXBwbHlpbmcgbWl4aW5zIHRvIE1hdENoaXAuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuY2xhc3MgTWF0Q2hpcEJhc2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG59XG5cbmNvbnN0IF9NYXRDaGlwTWl4aW5CYXNlOiBDYW5Db2xvckN0b3IgJiBDYW5EaXNhYmxlUmlwcGxlQ3RvciAmIENhbkRpc2FibGVDdG9yICYgdHlwZW9mIE1hdENoaXBCYXNlID1cbiAgICBtaXhpbkNvbG9yKG1peGluRGlzYWJsZVJpcHBsZShtaXhpbkRpc2FibGVkKE1hdENoaXBCYXNlKSksICdwcmltYXJ5Jyk7XG5cbi8qKlxuICogRHVtbXkgZGlyZWN0aXZlIHRvIGFkZCBDU1MgY2xhc3MgdG8gY2hpcCBhdmF0YXIuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ21hdC1jaGlwLWF2YXRhciwgW21hdENoaXBBdmF0YXJdJyxcbiAgaG9zdDogeydjbGFzcyc6ICdtYXQtY2hpcC1hdmF0YXInfVxufSlcbmV4cG9ydCBjbGFzcyBNYXRDaGlwQXZhdGFyIHt9XG5cbi8qKlxuICogRHVtbXkgZGlyZWN0aXZlIHRvIGFkZCBDU1MgY2xhc3MgdG8gY2hpcCB0cmFpbGluZyBpY29uLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdtYXQtY2hpcC10cmFpbGluZy1pY29uLCBbbWF0Q2hpcFRyYWlsaW5nSWNvbl0nLFxuICBob3N0OiB7J2NsYXNzJzogJ21hdC1jaGlwLXRyYWlsaW5nLWljb24nfVxufSlcbmV4cG9ydCBjbGFzcyBNYXRDaGlwVHJhaWxpbmdJY29uIHt9XG5cbi8qKlxuICogTWF0ZXJpYWwgZGVzaWduIHN0eWxlZCBDaGlwIGNvbXBvbmVudC4gVXNlZCBpbnNpZGUgdGhlIE1hdENoaXBMaXN0IGNvbXBvbmVudC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgbWF0LWJhc2ljLWNoaXAsIFttYXQtYmFzaWMtY2hpcF0sIG1hdC1jaGlwLCBbbWF0LWNoaXBdYCxcbiAgaW5wdXRzOiBbJ2NvbG9yJywgJ2Rpc2FibGVkJywgJ2Rpc2FibGVSaXBwbGUnXSxcbiAgZXhwb3J0QXM6ICdtYXRDaGlwJyxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdtYXQtY2hpcCcsXG4gICAgJ1thdHRyLnRhYmluZGV4XSc6ICdkaXNhYmxlZCA/IG51bGwgOiAtMScsXG4gICAgJ3JvbGUnOiAnb3B0aW9uJyxcbiAgICAnW2NsYXNzLm1hdC1jaGlwLXNlbGVjdGVkXSc6ICdzZWxlY3RlZCcsXG4gICAgJ1tjbGFzcy5tYXQtY2hpcC13aXRoLWF2YXRhcl0nOiAnYXZhdGFyJyxcbiAgICAnW2NsYXNzLm1hdC1jaGlwLXdpdGgtdHJhaWxpbmctaWNvbl0nOiAndHJhaWxpbmdJY29uIHx8IHJlbW92ZUljb24nLFxuICAgICdbY2xhc3MubWF0LWNoaXAtZGlzYWJsZWRdJzogJ2Rpc2FibGVkJyxcbiAgICAnW2NsYXNzLl9tYXQtYW5pbWF0aW9uLW5vb3BhYmxlXSc6ICdfYW5pbWF0aW9uc0Rpc2FibGVkJyxcbiAgICAnW2F0dHIuZGlzYWJsZWRdJzogJ2Rpc2FibGVkIHx8IG51bGwnLFxuICAgICdbYXR0ci5hcmlhLWRpc2FibGVkXSc6ICdkaXNhYmxlZC50b1N0cmluZygpJyxcbiAgICAnW2F0dHIuYXJpYS1zZWxlY3RlZF0nOiAnYXJpYVNlbGVjdGVkJyxcbiAgICAnKGNsaWNrKSc6ICdfaGFuZGxlQ2xpY2soJGV2ZW50KScsXG4gICAgJyhrZXlkb3duKSc6ICdfaGFuZGxlS2V5ZG93bigkZXZlbnQpJyxcbiAgICAnKGZvY3VzKSc6ICdmb2N1cygpJyxcbiAgICAnKGJsdXIpJzogJ19ibHVyKCknLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBNYXRDaGlwIGV4dGVuZHMgX01hdENoaXBNaXhpbkJhc2UgaW1wbGVtZW50cyBGb2N1c2FibGVPcHRpb24sIE9uRGVzdHJveSwgQ2FuQ29sb3IsXG4gICAgQ2FuRGlzYWJsZSwgQ2FuRGlzYWJsZVJpcHBsZSwgUmlwcGxlVGFyZ2V0IHtcblxuICAvKiogUmVmZXJlbmNlIHRvIHRoZSBSaXBwbGVSZW5kZXJlciBmb3IgdGhlIGNoaXAuICovXG4gIHByaXZhdGUgX2NoaXBSaXBwbGU6IFJpcHBsZVJlbmRlcmVyO1xuXG4gIC8qKlxuICAgKiBSaXBwbGUgY29uZmlndXJhdGlvbiBmb3IgcmlwcGxlcyB0aGF0IGFyZSBsYXVuY2hlZCBvbiBwb2ludGVyIGRvd24uIFRoZSByaXBwbGUgY29uZmlnXG4gICAqIGlzIHNldCB0byB0aGUgZ2xvYmFsIHJpcHBsZSBvcHRpb25zIHNpbmNlIHdlIGRvbid0IGhhdmUgYW55IGNvbmZpZ3VyYWJsZSBvcHRpb25zIGZvclxuICAgKiB0aGUgY2hpcCByaXBwbGVzLlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICByaXBwbGVDb25maWc6IFJpcHBsZUNvbmZpZyAmIFJpcHBsZUdsb2JhbE9wdGlvbnM7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgcmlwcGxlcyBhcmUgZGlzYWJsZWQgb24gaW50ZXJhY3Rpb25cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgZ2V0IHJpcHBsZURpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkIHx8IHRoaXMuZGlzYWJsZVJpcHBsZSB8fCAhIXRoaXMucmlwcGxlQ29uZmlnLmRpc2FibGVkO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGNoaXAgaGFzIGZvY3VzLiAqL1xuICBfaGFzRm9jdXM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogV2hldGhlciBhbmltYXRpb25zIGZvciB0aGUgY2hpcCBhcmUgZW5hYmxlZC4gKi9cbiAgX2FuaW1hdGlvbnNEaXNhYmxlZDogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciB0aGUgY2hpcCBsaXN0IGlzIHNlbGVjdGFibGUgKi9cbiAgY2hpcExpc3RTZWxlY3RhYmxlOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKiogV2hldGhlciB0aGUgY2hpcCBsaXN0IGlzIGluIG11bHRpLXNlbGVjdGlvbiBtb2RlLiAqL1xuICBfY2hpcExpc3RNdWx0aXBsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBUaGUgY2hpcCBhdmF0YXIgKi9cbiAgQENvbnRlbnRDaGlsZChNYXRDaGlwQXZhdGFyKSBhdmF0YXI6IE1hdENoaXBBdmF0YXI7XG5cbiAgLyoqIFRoZSBjaGlwJ3MgdHJhaWxpbmcgaWNvbi4gKi9cbiAgQENvbnRlbnRDaGlsZChNYXRDaGlwVHJhaWxpbmdJY29uKSB0cmFpbGluZ0ljb246IE1hdENoaXBUcmFpbGluZ0ljb247XG5cbiAgLyoqIFRoZSBjaGlwJ3MgcmVtb3ZlIHRvZ2dsZXIuICovXG4gIEBDb250ZW50Q2hpbGQoZm9yd2FyZFJlZigoKSA9PiBNYXRDaGlwUmVtb3ZlKSkgcmVtb3ZlSWNvbjogTWF0Q2hpcFJlbW92ZTtcblxuICAvKiogV2hldGhlciB0aGUgY2hpcCBpcyBzZWxlY3RlZC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHNlbGVjdGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7IH1cbiAgc2V0IHNlbGVjdGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgY29uc3QgY29lcmNlZFZhbHVlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcblxuICAgIGlmIChjb2VyY2VkVmFsdWUgIT09IHRoaXMuX3NlbGVjdGVkKSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZCA9IGNvZXJjZWRWYWx1ZTtcbiAgICAgIHRoaXMuX2Rpc3BhdGNoU2VsZWN0aW9uQ2hhbmdlKCk7XG4gICAgfVxuICB9XG4gIHByb3RlY3RlZCBfc2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogVGhlIHZhbHVlIG9mIHRoZSBjaGlwLiBEZWZhdWx0cyB0byB0aGUgY29udGVudCBpbnNpZGUgYDxtYXQtY2hpcD5gIHRhZ3MuICovXG4gIEBJbnB1dCgpXG4gIGdldCB2YWx1ZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZSAhPT0gdW5kZWZpbmVkXG4gICAgICA/IHRoaXMuX3ZhbHVlXG4gICAgICA6IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudDtcbiAgfVxuICBzZXQgdmFsdWUodmFsdWU6IGFueSkgeyB0aGlzLl92YWx1ZSA9IHZhbHVlOyB9XG4gIHByb3RlY3RlZCBfdmFsdWU6IGFueTtcblxuICAvKipcbiAgICogV2hldGhlciBvciBub3QgdGhlIGNoaXAgaXMgc2VsZWN0YWJsZS4gV2hlbiBhIGNoaXAgaXMgbm90IHNlbGVjdGFibGUsXG4gICAqIGNoYW5nZXMgdG8gaXRzIHNlbGVjdGVkIHN0YXRlIGFyZSBhbHdheXMgaWdub3JlZC4gQnkgZGVmYXVsdCBhIGNoaXAgaXNcbiAgICogc2VsZWN0YWJsZSwgYW5kIGl0IGJlY29tZXMgbm9uLXNlbGVjdGFibGUgaWYgaXRzIHBhcmVudCBjaGlwIGxpc3QgaXNcbiAgICogbm90IHNlbGVjdGFibGUuXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgc2VsZWN0YWJsZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3NlbGVjdGFibGUgJiYgdGhpcy5jaGlwTGlzdFNlbGVjdGFibGU7IH1cbiAgc2V0IHNlbGVjdGFibGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zZWxlY3RhYmxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcm90ZWN0ZWQgX3NlbGVjdGFibGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZSBjaGlwIGRpc3BsYXlzIHRoZSByZW1vdmUgc3R5bGluZyBhbmQgZW1pdHMgKHJlbW92ZWQpIGV2ZW50cy5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCByZW1vdmFibGUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9yZW1vdmFibGU7IH1cbiAgc2V0IHJlbW92YWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlbW92YWJsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJvdGVjdGVkIF9yZW1vdmFibGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBjaGlwIGlzIGZvY3VzZWQuICovXG4gIHJlYWRvbmx5IF9vbkZvY3VzID0gbmV3IFN1YmplY3Q8TWF0Q2hpcEV2ZW50PigpO1xuXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBjaGlwIGlzIGJsdXJlZC4gKi9cbiAgcmVhZG9ubHkgX29uQmx1ciA9IG5ldyBTdWJqZWN0PE1hdENoaXBFdmVudD4oKTtcblxuICAvKiogRW1pdHRlZCB3aGVuIHRoZSBjaGlwIGlzIHNlbGVjdGVkIG9yIGRlc2VsZWN0ZWQuICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBzZWxlY3Rpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxNYXRDaGlwU2VsZWN0aW9uQ2hhbmdlPiA9XG4gICAgICBuZXcgRXZlbnRFbWl0dGVyPE1hdENoaXBTZWxlY3Rpb25DaGFuZ2U+KCk7XG5cbiAgLyoqIEVtaXR0ZWQgd2hlbiB0aGUgY2hpcCBpcyBkZXN0cm95ZWQuICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBkZXN0cm95ZWQ6IEV2ZW50RW1pdHRlcjxNYXRDaGlwRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxNYXRDaGlwRXZlbnQ+KCk7XG5cbiAgLyoqIEVtaXR0ZWQgd2hlbiBhIGNoaXAgaXMgdG8gYmUgcmVtb3ZlZC4gKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IHJlbW92ZWQ6IEV2ZW50RW1pdHRlcjxNYXRDaGlwRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxNYXRDaGlwRXZlbnQ+KCk7XG5cbiAgLyoqIFRoZSBBUklBIHNlbGVjdGVkIGFwcGxpZWQgdG8gdGhlIGNoaXAuICovXG4gIGdldCBhcmlhU2VsZWN0ZWQoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgLy8gUmVtb3ZlIHRoZSBgYXJpYS1zZWxlY3RlZGAgd2hlbiB0aGUgY2hpcCBpcyBkZXNlbGVjdGVkIGluIHNpbmdsZS1zZWxlY3Rpb24gbW9kZSwgYmVjYXVzZVxuICAgIC8vIGl0IGFkZHMgbm9pc2UgdG8gTlZEQSB1c2VycyB3aGVyZSBcIm5vdCBzZWxlY3RlZFwiIHdpbGwgYmUgcmVhZCBvdXQgZm9yIGVhY2ggY2hpcC5cbiAgICByZXR1cm4gdGhpcy5zZWxlY3RhYmxlICYmICh0aGlzLl9jaGlwTGlzdE11bHRpcGxlIHx8IHRoaXMuc2VsZWN0ZWQpID9cbiAgICAgICAgdGhpcy5zZWxlY3RlZC50b1N0cmluZygpIDogbnVsbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgICAgICAgICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgICAgICAgICAgICBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTUFUX1JJUFBMRV9HTE9CQUxfT1BUSU9OUylcbiAgICAgICAgICAgICAgZ2xvYmFsUmlwcGxlT3B0aW9uczogUmlwcGxlR2xvYmFsT3B0aW9ucyB8IG51bGwsXG4gICAgICAgICAgICAgIC8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjAgYGFuaW1hdGlvbk1vZGVgIHBhcmFtZXRlciB0byBiZWNvbWUgcmVxdWlyZWQuXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQU5JTUFUSU9OX01PRFVMRV9UWVBFKSBhbmltYXRpb25Nb2RlPzogc3RyaW5nLFxuICAgICAgICAgICAgICAvLyBAYnJlYWtpbmctY2hhbmdlIDkuMC4wIGBfY2hhbmdlRGV0ZWN0b3JSZWZgIHBhcmFtZXRlciB0byBiZWNvbWUgcmVxdWlyZWQuXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmPzogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihfZWxlbWVudFJlZik7XG5cbiAgICB0aGlzLl9hZGRIb3N0Q2xhc3NOYW1lKCk7XG5cbiAgICB0aGlzLl9jaGlwUmlwcGxlID0gbmV3IFJpcHBsZVJlbmRlcmVyKHRoaXMsIF9uZ1pvbmUsIF9lbGVtZW50UmVmLCBwbGF0Zm9ybSk7XG4gICAgdGhpcy5fY2hpcFJpcHBsZS5zZXR1cFRyaWdnZXJFdmVudHMoX2VsZW1lbnRSZWYpO1xuICAgIHRoaXMucmlwcGxlQ29uZmlnID0gZ2xvYmFsUmlwcGxlT3B0aW9ucyB8fCB7fTtcbiAgICB0aGlzLl9hbmltYXRpb25zRGlzYWJsZWQgPSBhbmltYXRpb25Nb2RlID09PSAnTm9vcEFuaW1hdGlvbnMnO1xuICB9XG5cbiAgX2FkZEhvc3RDbGFzc05hbWUoKSB7XG4gICAgY29uc3QgYmFzaWNDaGlwQXR0ck5hbWUgPSAnbWF0LWJhc2ljLWNoaXAnO1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoYmFzaWNDaGlwQXR0ck5hbWUpIHx8XG4gICAgICAgIGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBiYXNpY0NoaXBBdHRyTmFtZSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGJhc2ljQ2hpcEF0dHJOYW1lKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtYXQtc3RhbmRhcmQtY2hpcCcpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveWVkLmVtaXQoe2NoaXA6IHRoaXN9KTtcbiAgICB0aGlzLl9jaGlwUmlwcGxlLl9yZW1vdmVUcmlnZ2VyRXZlbnRzKCk7XG4gIH1cblxuICAvKiogU2VsZWN0cyB0aGUgY2hpcC4gKi9cbiAgc2VsZWN0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2Rpc3BhdGNoU2VsZWN0aW9uQ2hhbmdlKCk7XG4gICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICAvKiogRGVzZWxlY3RzIHRoZSBjaGlwLiAqL1xuICBkZXNlbGVjdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9kaXNwYXRjaFNlbGVjdGlvbkNoYW5nZSgpO1xuICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFNlbGVjdCB0aGlzIGNoaXAgYW5kIGVtaXQgc2VsZWN0ZWQgZXZlbnQgKi9cbiAgc2VsZWN0VmlhSW50ZXJhY3Rpb24oKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9zZWxlY3RlZCkge1xuICAgICAgdGhpcy5fc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fZGlzcGF0Y2hTZWxlY3Rpb25DaGFuZ2UodHJ1ZSk7XG4gICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICAvKiogVG9nZ2xlcyB0aGUgY3VycmVudCBzZWxlY3RlZCBzdGF0ZSBvZiB0aGlzIGNoaXAuICovXG4gIHRvZ2dsZVNlbGVjdGVkKGlzVXNlcklucHV0OiBib29sZWFuID0gZmFsc2UpOiBib29sZWFuIHtcbiAgICB0aGlzLl9zZWxlY3RlZCA9ICF0aGlzLnNlbGVjdGVkO1xuICAgIHRoaXMuX2Rpc3BhdGNoU2VsZWN0aW9uQ2hhbmdlKGlzVXNlcklucHV0KTtcbiAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZDtcbiAgfVxuXG4gIC8qKiBBbGxvd3MgZm9yIHByb2dyYW1tYXRpYyBmb2N1c2luZyBvZiB0aGUgY2hpcC4gKi9cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9oYXNGb2N1cykge1xuICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB0aGlzLl9vbkZvY3VzLm5leHQoe2NoaXA6IHRoaXN9KTtcbiAgICB9XG4gICAgdGhpcy5faGFzRm9jdXMgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93cyBmb3IgcHJvZ3JhbW1hdGljIHJlbW92YWwgb2YgdGhlIGNoaXAuIENhbGxlZCBieSB0aGUgTWF0Q2hpcExpc3Qgd2hlbiB0aGUgREVMRVRFIG9yXG4gICAqIEJBQ0tTUEFDRSBrZXlzIGFyZSBwcmVzc2VkLlxuICAgKlxuICAgKiBJbmZvcm1zIGFueSBsaXN0ZW5lcnMgb2YgdGhlIHJlbW92YWwgcmVxdWVzdC4gRG9lcyBub3QgcmVtb3ZlIHRoZSBjaGlwIGZyb20gdGhlIERPTS5cbiAgICovXG4gIHJlbW92ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZW1vdmFibGUpIHtcbiAgICAgIHRoaXMucmVtb3ZlZC5lbWl0KHtjaGlwOiB0aGlzfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEhhbmRsZXMgY2xpY2sgZXZlbnRzIG9uIHRoZSBjaGlwLiAqL1xuICBfaGFuZGxlQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBIYW5kbGUgY3VzdG9tIGtleSBwcmVzc2VzLiAqL1xuICBfaGFuZGxlS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICBjYXNlIERFTEVURTpcbiAgICAgIGNhc2UgQkFDS1NQQUNFOlxuICAgICAgICAvLyBJZiB3ZSBhcmUgcmVtb3ZhYmxlLCByZW1vdmUgdGhlIGZvY3VzZWQgY2hpcFxuICAgICAgICB0aGlzLnJlbW92ZSgpO1xuICAgICAgICAvLyBBbHdheXMgcHJldmVudCBzbyBwYWdlIG5hdmlnYXRpb24gZG9lcyBub3Qgb2NjdXJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNQQUNFOlxuICAgICAgICAvLyBJZiB3ZSBhcmUgc2VsZWN0YWJsZSwgdG9nZ2xlIHRoZSBmb2N1c2VkIGNoaXBcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0YWJsZSkge1xuICAgICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0ZWQodHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbHdheXMgcHJldmVudCBzcGFjZSBmcm9tIHNjcm9sbGluZyB0aGUgcGFnZSBzaW5jZSB0aGUgbGlzdCBoYXMgZm9jdXNcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgX2JsdXIoKTogdm9pZCB7XG4gICAgLy8gV2hlbiBhbmltYXRpb25zIGFyZSBlbmFibGVkLCBBbmd1bGFyIG1heSBlbmQgdXAgcmVtb3ZpbmcgdGhlIGNoaXAgZnJvbSB0aGUgRE9NIGEgbGl0dGxlXG4gICAgLy8gZWFybGllciB0aGFuIHVzdWFsLCBjYXVzaW5nIGl0IHRvIGJlIGJsdXJyZWQgYW5kIHRocm93aW5nIG9mZiB0aGUgbG9naWMgaW4gdGhlIGNoaXAgbGlzdFxuICAgIC8vIHRoYXQgbW92ZXMgZm9jdXMgbm90IHRoZSBuZXh0IGl0ZW0uIFRvIHdvcmsgYXJvdW5kIHRoZSBpc3N1ZSwgd2UgZGVmZXIgbWFya2luZyB0aGUgY2hpcFxuICAgIC8vIGFzIG5vdCBmb2N1c2VkIHVudGlsIHRoZSBuZXh0IHRpbWUgdGhlIHpvbmUgc3RhYmlsaXplcy5cbiAgICB0aGlzLl9uZ1pvbmUub25TdGFibGVcbiAgICAgIC5hc09ic2VydmFibGUoKVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9oYXNGb2N1cyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuX29uQmx1ci5uZXh0KHtjaGlwOiB0aGlzfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9kaXNwYXRjaFNlbGVjdGlvbkNoYW5nZShpc1VzZXJJbnB1dCA9IGZhbHNlKSB7XG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCh7XG4gICAgICBzb3VyY2U6IHRoaXMsXG4gICAgICBpc1VzZXJJbnB1dCxcbiAgICAgIHNlbGVjdGVkOiB0aGlzLl9zZWxlY3RlZFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfbWFya0ZvckNoZWNrKCkge1xuICAgIC8vIEBicmVha2luZy1jaGFuZ2UgOS4wLjAgUmVtb3ZlIHRoaXMgbWV0aG9kIG9uY2UgdGhlIF9jaGFuZ2VEZXRlY3RvclJlZiBpcyBhIHJlcXVpcmVkIHBhcmFtLlxuICAgIGlmICh0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3NlbGVjdGVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zZWxlY3RhYmxlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9yZW1vdmFibGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlUmlwcGxlOiBCb29sZWFuSW5wdXQ7XG59XG5cblxuLyoqXG4gKiBBcHBsaWVzIHByb3BlciAoY2xpY2spIHN1cHBvcnQgYW5kIGFkZHMgc3R5bGluZyBmb3IgdXNlIHdpdGggdGhlIE1hdGVyaWFsIERlc2lnbiBcImNhbmNlbFwiIGljb25cbiAqIGF2YWlsYWJsZSBhdCBodHRwczovL21hdGVyaWFsLmlvL2ljb25zLyNpY19jYW5jZWwuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgYDxtYXQtY2hpcD5cbiAqICAgICAgIDxtYXQtaWNvbiBtYXRDaGlwUmVtb3ZlPmNhbmNlbDwvbWF0LWljb24+XG4gKiAgICAgPC9tYXQtY2hpcD5gXG4gKlxuICogWW91ICptYXkqIHVzZSBhIGN1c3RvbSBpY29uLCBidXQgeW91IG1heSBuZWVkIHRvIG92ZXJyaWRlIHRoZSBgbWF0LWNoaXAtcmVtb3ZlYCBwb3NpdGlvbmluZ1xuICogc3R5bGVzIHRvIHByb3Blcmx5IGNlbnRlciB0aGUgaWNvbiB3aXRoaW4gdGhlIGNoaXAuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttYXRDaGlwUmVtb3ZlXScsXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnbWF0LWNoaXAtcmVtb3ZlIG1hdC1jaGlwLXRyYWlsaW5nLWljb24nLFxuICAgICcoY2xpY2spJzogJ19oYW5kbGVDbGljaygkZXZlbnQpJyxcblxuICAgIC8vIFByZXZlbnQgYWNjaWRlbnRhbCBmb3JtIHN1Ym1pc3Npb25zLlxuICAgICd0eXBlJzogJ2J1dHRvbicsXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTWF0Q2hpcFJlbW92ZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfcGFyZW50Q2hpcDogTWF0Q2hpcCkge31cblxuICAvKiogQ2FsbHMgdGhlIHBhcmVudCBjaGlwJ3MgcHVibGljIGByZW1vdmUoKWAgbWV0aG9kIGlmIGFwcGxpY2FibGUuICovXG4gIF9oYW5kbGVDbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBwYXJlbnRDaGlwID0gdGhpcy5fcGFyZW50Q2hpcDtcblxuICAgIGlmIChwYXJlbnRDaGlwLnJlbW92YWJsZSAmJiAhcGFyZW50Q2hpcC5kaXNhYmxlZCkge1xuICAgICAgcGFyZW50Q2hpcC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICAvLyBXZSBuZWVkIHRvIHN0b3AgZXZlbnQgcHJvcGFnYXRpb24gYmVjYXVzZSBvdGhlcndpc2UgdGhlIGV2ZW50IHdpbGwgYnViYmxlIHVwIHRvIHRoZVxuICAgIC8vIGZvcm0gZmllbGQgYW5kIGNhdXNlIHRoZSBgb25Db250YWluZXJDbGlja2AgbWV0aG9kIHRvIGJlIGludm9rZWQuIFRoaXMgbWV0aG9kIHdvdWxkIHRoZW5cbiAgICAvLyByZXNldCB0aGUgZm9jdXNlZCBjaGlwIHRoYXQgaGFzIGJlZW4gZm9jdXNlZCBhZnRlciBjaGlwIHJlbW92YWwuIFVzdWFsbHkgdGhlIHBhcmVudFxuICAgIC8vIHRoZSBwYXJlbnQgY2xpY2sgbGlzdGVuZXIgb2YgdGhlIGBNYXRDaGlwYCB3b3VsZCBwcmV2ZW50IHByb3BhZ2F0aW9uLCBidXQgaXQgY2FuIGhhcHBlblxuICAgIC8vIHRoYXQgdGhlIGNoaXAgaXMgYmVpbmcgcmVtb3ZlZCBiZWZvcmUgdGhlIGV2ZW50IGJ1YmJsZXMgdXAuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cbiJdfQ==