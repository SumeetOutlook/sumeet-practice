/**
 * @fileoverview added by tsickle
 * Generated from: src/material/menu/menu-item.ts
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
import { ChangeDetectionStrategy, Component, ElementRef, ViewEncapsulation, Inject, Optional, Input, HostListener, } from '@angular/core';
import { mixinDisabled, mixinDisableRipple, } from '@angular/material/core';
import { Subject } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { MAT_MENU_PANEL } from './menu-panel';
// Boilerplate for applying mixins to MatMenuItem.
/**
 * \@docs-private
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/a11y';
import * as ɵngcc2 from '@angular/material/core';

const _c0 = ["mat-menu-item", ""];
const _c1 = ["*"];
class MatMenuItemBase {
}
/** @type {?} */
const _MatMenuItemMixinBase = mixinDisableRipple(mixinDisabled(MatMenuItemBase));
/**
 * This directive is intended to be used inside an mat-menu tag.
 * It exists mostly to set the role attribute.
 */
export class MatMenuItem extends _MatMenuItemMixinBase {
    /**
     * @param {?} _elementRef
     * @param {?=} document
     * @param {?=} _focusMonitor
     * @param {?=} _parentMenu
     */
    constructor(_elementRef, document, _focusMonitor, _parentMenu) {
        // @breaking-change 8.0.0 make `_focusMonitor` and `document` required params.
        super();
        this._elementRef = _elementRef;
        this._focusMonitor = _focusMonitor;
        this._parentMenu = _parentMenu;
        /**
         * ARIA role for the menu item.
         */
        this.role = 'menuitem';
        /**
         * Stream that emits when the menu item is hovered.
         */
        this._hovered = new Subject();
        /**
         * Stream that emits when the menu item is focused.
         */
        this._focused = new Subject();
        /**
         * Whether the menu item is highlighted.
         */
        this._highlighted = false;
        /**
         * Whether the menu item acts as a trigger for a sub-menu.
         */
        this._triggersSubmenu = false;
        if (_focusMonitor) {
            // Start monitoring the element so it gets the appropriate focused classes. We want
            // to show the focus style for menu items only when the focus was not caused by a
            // mouse or touch interaction.
            _focusMonitor.monitor(this._elementRef, false);
        }
        if (_parentMenu && _parentMenu.addItem) {
            _parentMenu.addItem(this);
        }
        this._document = document;
    }
    /**
     * Focuses the menu item.
     * @param {?=} origin
     * @param {?=} options
     * @return {?}
     */
    focus(origin = 'program', options) {
        if (this._focusMonitor) {
            this._focusMonitor.focusVia(this._getHostElement(), origin, options);
        }
        else {
            this._getHostElement().focus(options);
        }
        this._focused.next(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._focusMonitor) {
            this._focusMonitor.stopMonitoring(this._elementRef);
        }
        if (this._parentMenu && this._parentMenu.removeItem) {
            this._parentMenu.removeItem(this);
        }
        this._hovered.complete();
        this._focused.complete();
    }
    /**
     * Used to set the `tabindex`.
     * @return {?}
     */
    _getTabIndex() {
        return this.disabled ? '-1' : '0';
    }
    /**
     * Returns the host DOM element.
     * @return {?}
     */
    _getHostElement() {
        return this._elementRef.nativeElement;
    }
    /**
     * Prevents the default element actions if it is disabled.
     * @param {?} event
     * @return {?}
     */
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _checkDisabled(event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
    /**
     * Emits to the hover stream.
     * @return {?}
     */
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _handleMouseEnter() {
        this._hovered.next(this);
    }
    /**
     * Gets the label to be used when determining whether the option should be focused.
     * @return {?}
     */
    getLabel() {
        /** @type {?} */
        const element = this._elementRef.nativeElement;
        /** @type {?} */
        const textNodeType = this._document ? this._document.TEXT_NODE : 3;
        /** @type {?} */
        let output = '';
        if (element.childNodes) {
            /** @type {?} */
            const length = element.childNodes.length;
            // Go through all the top-level text nodes and extract their text.
            // We skip anything that's not a text node to prevent the text from
            // being thrown off by something like an icon.
            for (let i = 0; i < length; i++) {
                if (element.childNodes[i].nodeType === textNodeType) {
                    output += element.childNodes[i].textContent;
                }
            }
        }
        return output.trim();
    }
}
MatMenuItem.ɵfac = function MatMenuItem_Factory(t) { return new (t || MatMenuItem)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(DOCUMENT), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FocusMonitor), ɵngcc0.ɵɵdirectiveInject(MAT_MENU_PANEL, 8)); };
MatMenuItem.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatMenuItem, selectors: [["", "mat-menu-item", ""]], hostVars: 10, hostBindings: function MatMenuItem_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function MatMenuItem_click_HostBindingHandler($event) { return ctx._checkDisabled($event); })("mouseenter", function MatMenuItem_mouseenter_HostBindingHandler() { return ctx._handleMouseEnter(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("role", ctx.role)("tabindex", ctx._getTabIndex())("aria-disabled", ctx.disabled.toString())("disabled", ctx.disabled || null);
        ɵngcc0.ɵɵclassProp("mat-menu-item", true)("mat-menu-item-highlighted", ctx._highlighted)("mat-menu-item-submenu-trigger", ctx._triggersSubmenu);
    } }, inputs: { disabled: "disabled", disableRipple: "disableRipple", role: "role" }, exportAs: ["matMenuItem"], features: [ɵngcc0.ɵɵInheritDefinitionFeature], attrs: _c0, ngContentSelectors: _c1, decls: 2, vars: 2, consts: [["matRipple", "", 1, "mat-menu-ripple", 3, "matRippleDisabled", "matRippleTrigger"]], template: function MatMenuItem_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
        ɵngcc0.ɵɵelement(1, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleTrigger", ctx._getHostElement());
    } }, directives: [ɵngcc2.MatRipple], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
MatMenuItem.ctorParameters = () => [
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: FocusMonitor },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_MENU_PANEL,] }, { type: Optional }] }
];
MatMenuItem.propDecorators = {
    role: [{ type: Input }],
    _checkDisabled: [{ type: HostListener, args: ['click', ['$event'],] }],
    _handleMouseEnter: [{ type: HostListener, args: ['mouseenter',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatMenuItem, [{
        type: Component,
        args: [{
                selector: '[mat-menu-item]',
                exportAs: 'matMenuItem',
                inputs: ['disabled', 'disableRipple'],
                host: {
                    '[attr.role]': 'role',
                    '[class.mat-menu-item]': 'true',
                    '[class.mat-menu-item-highlighted]': '_highlighted',
                    '[class.mat-menu-item-submenu-trigger]': '_triggersSubmenu',
                    '[attr.tabindex]': '_getTabIndex()',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '[attr.disabled]': 'disabled || null'
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: "<ng-content></ng-content>\n<div class=\"mat-menu-ripple\" matRipple\n     [matRippleDisabled]=\"disableRipple || disabled\"\n     [matRippleTrigger]=\"_getHostElement()\">\n</div>\n"
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: ɵngcc1.FocusMonitor }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_MENU_PANEL]
            }, {
                type: Optional
            }] }]; }, { role: [{
            type: Input
        }], _checkDisabled: [{
            type: HostListener,
            args: ['click', ['$event']]
        }], _handleMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }] }); })();
if (false) {
    /** @type {?} */
    MatMenuItem.ngAcceptInputType_disabled;
    /** @type {?} */
    MatMenuItem.ngAcceptInputType_disableRipple;
    /**
     * ARIA role for the menu item.
     * @type {?}
     */
    MatMenuItem.prototype.role;
    /**
     * @type {?}
     * @private
     */
    MatMenuItem.prototype._document;
    /**
     * Stream that emits when the menu item is hovered.
     * @type {?}
     */
    MatMenuItem.prototype._hovered;
    /**
     * Stream that emits when the menu item is focused.
     * @type {?}
     */
    MatMenuItem.prototype._focused;
    /**
     * Whether the menu item is highlighted.
     * @type {?}
     */
    MatMenuItem.prototype._highlighted;
    /**
     * Whether the menu item acts as a trigger for a sub-menu.
     * @type {?}
     */
    MatMenuItem.prototype._triggersSubmenu;
    /**
     * @type {?}
     * @private
     */
    MatMenuItem.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    MatMenuItem.prototype._focusMonitor;
    /** @type {?} */
    MatMenuItem.prototype._parentMenu;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1pdGVtLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvbWVudS9tZW51LWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFrQixZQUFZLEVBQWMsTUFBTSxtQkFBbUIsQ0FBQztBQUU3RSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBRVYsaUJBQWlCLEVBQ2pCLE1BQU0sRUFDTixRQUFRLEVBQ1IsS0FBSyxFQUNMLFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBR0wsYUFBYSxFQUNiLGtCQUFrQixHQUNuQixNQUFNLHdCQUF3QixDQUFDO0FBQ2hDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDN0IsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxjQUFjLEVBQWUsTUFBTSxjQUFjLENBQUM7QUFDMUQ7QUFDa0Q7QUFDL0M7QUFDSDs7Ozs7OztBQUFBLE1BQU0sZUFBZTtBQUFHLENBQUE7QUFDeEI7QUFBaUIsTUFBWCxxQkFBcUIsR0FDdkIsa0JBQWtCLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3REO0FBQ0c7QUFDNkQ7QUFDbEI7QUFtQjlDLE1BQU0sT0FBTyxXQUFZLFNBQVEscUJBQXFCO0FBQ3BEO0FBQVE7QUFBOEI7QUFBNEI7QUFFMUM7QUFDUDtBQUFRLElBZ0J6QixZQUNVLFdBQW9DLEVBQzFCLFFBQWMsRUFDeEIsYUFBNEIsRUFDTyxXQUF1QztBQUN0RixRQUNJLDhFQUE4RTtBQUNsRixRQUFJLEtBQUssRUFBRSxDQUFDO0FBQ1osUUFQWSxnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7QUFBQyxRQUVyQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtBQUFDLFFBQ00sZ0JBQVcsR0FBWCxXQUFXLENBQTRCO0FBQUM7QUFFL0U7QUFBd0M7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QUFoQixrQ0FBa0Y7QUFBQztBQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Rm9jdXNhYmxlT3B0aW9uLCBGb2N1c01vbml0b3IsIEZvY3VzT3JpZ2lufSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge0Jvb2xlYW5JbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIE9uRGVzdHJveSxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIEluamVjdCxcbiAgT3B0aW9uYWwsXG4gIElucHV0LFxuICBIb3N0TGlzdGVuZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2FuRGlzYWJsZSwgQ2FuRGlzYWJsZUN0b3IsXG4gIENhbkRpc2FibGVSaXBwbGUsIENhbkRpc2FibGVSaXBwbGVDdG9yLFxuICBtaXhpbkRpc2FibGVkLFxuICBtaXhpbkRpc2FibGVSaXBwbGUsXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge01BVF9NRU5VX1BBTkVMLCBNYXRNZW51UGFuZWx9IGZyb20gJy4vbWVudS1wYW5lbCc7XG5cbi8vIEJvaWxlcnBsYXRlIGZvciBhcHBseWluZyBtaXhpbnMgdG8gTWF0TWVudUl0ZW0uXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuY2xhc3MgTWF0TWVudUl0ZW1CYXNlIHt9XG5jb25zdCBfTWF0TWVudUl0ZW1NaXhpbkJhc2U6IENhbkRpc2FibGVSaXBwbGVDdG9yICYgQ2FuRGlzYWJsZUN0b3IgJiB0eXBlb2YgTWF0TWVudUl0ZW1CYXNlID1cbiAgICBtaXhpbkRpc2FibGVSaXBwbGUobWl4aW5EaXNhYmxlZChNYXRNZW51SXRlbUJhc2UpKTtcblxuLyoqXG4gKiBUaGlzIGRpcmVjdGl2ZSBpcyBpbnRlbmRlZCB0byBiZSB1c2VkIGluc2lkZSBhbiBtYXQtbWVudSB0YWcuXG4gKiBJdCBleGlzdHMgbW9zdGx5IHRvIHNldCB0aGUgcm9sZSBhdHRyaWJ1dGUuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1ttYXQtbWVudS1pdGVtXScsXG4gIGV4cG9ydEFzOiAnbWF0TWVudUl0ZW0nLFxuICBpbnB1dHM6IFsnZGlzYWJsZWQnLCAnZGlzYWJsZVJpcHBsZSddLFxuICBob3N0OiB7XG4gICAgJ1thdHRyLnJvbGVdJzogJ3JvbGUnLFxuICAgICdbY2xhc3MubWF0LW1lbnUtaXRlbV0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5tYXQtbWVudS1pdGVtLWhpZ2hsaWdodGVkXSc6ICdfaGlnaGxpZ2h0ZWQnLFxuICAgICdbY2xhc3MubWF0LW1lbnUtaXRlbS1zdWJtZW51LXRyaWdnZXJdJzogJ190cmlnZ2Vyc1N1Ym1lbnUnLFxuICAgICdbYXR0ci50YWJpbmRleF0nOiAnX2dldFRhYkluZGV4KCknLFxuICAgICdbYXR0ci5hcmlhLWRpc2FibGVkXSc6ICdkaXNhYmxlZC50b1N0cmluZygpJyxcbiAgICAnW2F0dHIuZGlzYWJsZWRdJzogJ2Rpc2FibGVkIHx8IG51bGwnLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgdGVtcGxhdGVVcmw6ICdtZW51LWl0ZW0uaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1hdE1lbnVJdGVtIGV4dGVuZHMgX01hdE1lbnVJdGVtTWl4aW5CYXNlXG4gICAgaW1wbGVtZW50cyBGb2N1c2FibGVPcHRpb24sIENhbkRpc2FibGUsIENhbkRpc2FibGVSaXBwbGUsIE9uRGVzdHJveSB7XG5cbiAgLyoqIEFSSUEgcm9sZSBmb3IgdGhlIG1lbnUgaXRlbS4gKi9cbiAgQElucHV0KCkgcm9sZTogJ21lbnVpdGVtJyB8ICdtZW51aXRlbXJhZGlvJyB8ICdtZW51aXRlbWNoZWNrYm94JyA9ICdtZW51aXRlbSc7XG5cbiAgcHJpdmF0ZSBfZG9jdW1lbnQ6IERvY3VtZW50O1xuXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIHRoZSBtZW51IGl0ZW0gaXMgaG92ZXJlZC4gKi9cbiAgcmVhZG9ubHkgX2hvdmVyZWQ6IFN1YmplY3Q8TWF0TWVudUl0ZW0+ID0gbmV3IFN1YmplY3Q8TWF0TWVudUl0ZW0+KCk7XG5cbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW4gdGhlIG1lbnUgaXRlbSBpcyBmb2N1c2VkLiAqL1xuICByZWFkb25seSBfZm9jdXNlZCA9IG5ldyBTdWJqZWN0PE1hdE1lbnVJdGVtPigpO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBtZW51IGl0ZW0gaXMgaGlnaGxpZ2h0ZWQuICovXG4gIF9oaWdobGlnaHRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBtZW51IGl0ZW0gYWN0cyBhcyBhIHRyaWdnZXIgZm9yIGEgc3ViLW1lbnUuICovXG4gIF90cmlnZ2Vyc1N1Ym1lbnU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBkb2N1bWVudD86IGFueSxcbiAgICBwcml2YXRlIF9mb2N1c01vbml0b3I/OiBGb2N1c01vbml0b3IsXG4gICAgQEluamVjdChNQVRfTUVOVV9QQU5FTCkgQE9wdGlvbmFsKCkgcHVibGljIF9wYXJlbnRNZW51PzogTWF0TWVudVBhbmVsPE1hdE1lbnVJdGVtPikge1xuXG4gICAgLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMCBtYWtlIGBfZm9jdXNNb25pdG9yYCBhbmQgYGRvY3VtZW50YCByZXF1aXJlZCBwYXJhbXMuXG4gICAgc3VwZXIoKTtcblxuICAgIGlmIChfZm9jdXNNb25pdG9yKSB7XG4gICAgICAvLyBTdGFydCBtb25pdG9yaW5nIHRoZSBlbGVtZW50IHNvIGl0IGdldHMgdGhlIGFwcHJvcHJpYXRlIGZvY3VzZWQgY2xhc3Nlcy4gV2Ugd2FudFxuICAgICAgLy8gdG8gc2hvdyB0aGUgZm9jdXMgc3R5bGUgZm9yIG1lbnUgaXRlbXMgb25seSB3aGVuIHRoZSBmb2N1cyB3YXMgbm90IGNhdXNlZCBieSBhXG4gICAgICAvLyBtb3VzZSBvciB0b3VjaCBpbnRlcmFjdGlvbi5cbiAgICAgIF9mb2N1c01vbml0b3IubW9uaXRvcih0aGlzLl9lbGVtZW50UmVmLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKF9wYXJlbnRNZW51ICYmIF9wYXJlbnRNZW51LmFkZEl0ZW0pIHtcbiAgICAgIF9wYXJlbnRNZW51LmFkZEl0ZW0odGhpcyk7XG4gICAgfVxuXG4gICAgdGhpcy5fZG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgfVxuXG4gIC8qKiBGb2N1c2VzIHRoZSBtZW51IGl0ZW0uICovXG4gIGZvY3VzKG9yaWdpbjogRm9jdXNPcmlnaW4gPSAncHJvZ3JhbScsIG9wdGlvbnM/OiBGb2N1c09wdGlvbnMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZm9jdXNNb25pdG9yKSB7XG4gICAgICB0aGlzLl9mb2N1c01vbml0b3IuZm9jdXNWaWEodGhpcy5fZ2V0SG9zdEVsZW1lbnQoKSwgb3JpZ2luLCBvcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZ2V0SG9zdEVsZW1lbnQoKS5mb2N1cyhvcHRpb25zKTtcbiAgICB9XG5cbiAgICB0aGlzLl9mb2N1c2VkLm5leHQodGhpcyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fZm9jdXNNb25pdG9yKSB7XG4gICAgICB0aGlzLl9mb2N1c01vbml0b3Iuc3RvcE1vbml0b3JpbmcodGhpcy5fZWxlbWVudFJlZik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BhcmVudE1lbnUgJiYgdGhpcy5fcGFyZW50TWVudS5yZW1vdmVJdGVtKSB7XG4gICAgICB0aGlzLl9wYXJlbnRNZW51LnJlbW92ZUl0ZW0odGhpcyk7XG4gICAgfVxuXG4gICAgdGhpcy5faG92ZXJlZC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuX2ZvY3VzZWQuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKiBVc2VkIHRvIHNldCB0aGUgYHRhYmluZGV4YC4gKi9cbiAgX2dldFRhYkluZGV4KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgPyAnLTEnIDogJzAnO1xuICB9XG5cbiAgLyoqIFJldHVybnMgdGhlIGhvc3QgRE9NIGVsZW1lbnQuICovXG4gIF9nZXRIb3N0RWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIC8qKiBQcmV2ZW50cyB0aGUgZGVmYXVsdCBlbGVtZW50IGFjdGlvbnMgaWYgaXQgaXMgZGlzYWJsZWQuICovXG4gIC8vIFdlIGhhdmUgdG8gdXNlIGEgYEhvc3RMaXN0ZW5lcmAgaGVyZSBpbiBvcmRlciB0byBzdXBwb3J0IGJvdGggSXZ5IGFuZCBWaWV3RW5naW5lLlxuICAvLyBJbiBJdnkgdGhlIGBob3N0YCBiaW5kaW5ncyB3aWxsIGJlIG1lcmdlZCB3aGVuIHRoaXMgY2xhc3MgaXMgZXh0ZW5kZWQsIHdoZXJlYXMgaW5cbiAgLy8gVmlld0VuZ2luZSB0aGV5J3JlIG92ZXJ3cml0dGVuLlxuICAvLyBUT0RPKGNyaXNiZXRvKTogd2UgbW92ZSB0aGlzIGJhY2sgaW50byBgaG9zdGAgb25jZSBJdnkgaXMgdHVybmVkIG9uIGJ5IGRlZmF1bHQuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1ob3N0LWRlY29yYXRvci1pbi1jb25jcmV0ZVxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIF9jaGVja0Rpc2FibGVkKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEVtaXRzIHRvIHRoZSBob3ZlciBzdHJlYW0uICovXG4gIC8vIFdlIGhhdmUgdG8gdXNlIGEgYEhvc3RMaXN0ZW5lcmAgaGVyZSBpbiBvcmRlciB0byBzdXBwb3J0IGJvdGggSXZ5IGFuZCBWaWV3RW5naW5lLlxuICAvLyBJbiBJdnkgdGhlIGBob3N0YCBiaW5kaW5ncyB3aWxsIGJlIG1lcmdlZCB3aGVuIHRoaXMgY2xhc3MgaXMgZXh0ZW5kZWQsIHdoZXJlYXMgaW5cbiAgLy8gVmlld0VuZ2luZSB0aGV5J3JlIG92ZXJ3cml0dGVuLlxuICAvLyBUT0RPKGNyaXNiZXRvKTogd2UgbW92ZSB0aGlzIGJhY2sgaW50byBgaG9zdGAgb25jZSBJdnkgaXMgdHVybmVkIG9uIGJ5IGRlZmF1bHQuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1ob3N0LWRlY29yYXRvci1pbi1jb25jcmV0ZVxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcbiAgX2hhbmRsZU1vdXNlRW50ZXIoKSB7XG4gICAgdGhpcy5faG92ZXJlZC5uZXh0KHRoaXMpO1xuICB9XG5cbiAgLyoqIEdldHMgdGhlIGxhYmVsIHRvIGJlIHVzZWQgd2hlbiBkZXRlcm1pbmluZyB3aGV0aGVyIHRoZSBvcHRpb24gc2hvdWxkIGJlIGZvY3VzZWQuICovXG4gIGdldExhYmVsKCk6IHN0cmluZyB7XG4gICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgdGV4dE5vZGVUeXBlID0gdGhpcy5fZG9jdW1lbnQgPyB0aGlzLl9kb2N1bWVudC5URVhUX05PREUgOiAzO1xuICAgIGxldCBvdXRwdXQgPSAnJztcblxuICAgIGlmIChlbGVtZW50LmNoaWxkTm9kZXMpIHtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IGVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICAgIC8vIEdvIHRocm91Z2ggYWxsIHRoZSB0b3AtbGV2ZWwgdGV4dCBub2RlcyBhbmQgZXh0cmFjdCB0aGVpciB0ZXh0LlxuICAgICAgLy8gV2Ugc2tpcCBhbnl0aGluZyB0aGF0J3Mgbm90IGEgdGV4dCBub2RlIHRvIHByZXZlbnQgdGhlIHRleHQgZnJvbVxuICAgICAgLy8gYmVpbmcgdGhyb3duIG9mZiBieSBzb21ldGhpbmcgbGlrZSBhbiBpY29uLlxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZWxlbWVudC5jaGlsZE5vZGVzW2ldLm5vZGVUeXBlID09PSB0ZXh0Tm9kZVR5cGUpIHtcbiAgICAgICAgICBvdXRwdXQgKz0gZWxlbWVudC5jaGlsZE5vZGVzW2ldLnRleHRDb250ZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dHB1dC50cmltKCk7XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVSaXBwbGU6IEJvb2xlYW5JbnB1dDtcbn1cbiJdfQ==