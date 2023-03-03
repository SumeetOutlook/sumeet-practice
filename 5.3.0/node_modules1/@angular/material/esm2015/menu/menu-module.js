/**
 * @fileoverview added by tsickle
 * Generated from: src/material/menu/menu-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCommonModule, MatRippleModule } from '@angular/material/core';
import { _MatMenu } from './menu';
import { MatMenuContent } from './menu-content';
import { MatMenuItem } from './menu-item';
import { MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER, MatMenuTrigger } from './menu-trigger';
/**
 * Used by both the current `MatMenuModule` and the MDC `MatMenuModule`
 * to declare the menu-related directives.
 */
// tslint:disable-next-line:class-name
import * as ɵngcc0 from '@angular/core';
export class _MatMenuDirectivesModule {
}
_MatMenuDirectivesModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: _MatMenuDirectivesModule });
_MatMenuDirectivesModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function _MatMenuDirectivesModule_Factory(t) { return new (t || _MatMenuDirectivesModule)(); }, providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER], imports: [MatCommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(_MatMenuDirectivesModule, { declarations: function () { return [MatMenuTrigger,
        MatMenuContent]; }, exports: function () { return [MatMenuTrigger, MatMenuContent, MatCommonModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(_MatMenuDirectivesModule, [{
        type: NgModule,
        args: [{
                exports: [MatMenuTrigger, MatMenuContent, MatCommonModule],
                declarations: [
                    MatMenuTrigger,
                    MatMenuContent,
                ],
                providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
            }]
    }], null, null); })();
export class MatMenuModule {
}
MatMenuModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatMenuModule });
MatMenuModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatMenuModule_Factory(t) { return new (t || MatMenuModule)(); }, providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER], imports: [[
            CommonModule,
            MatCommonModule,
            MatRippleModule,
            OverlayModule,
            _MatMenuDirectivesModule,
        ], _MatMenuDirectivesModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatMenuModule, { declarations: function () { return [_MatMenu, MatMenuItem]; }, imports: function () { return [CommonModule,
        MatCommonModule,
        MatRippleModule,
        OverlayModule, _MatMenuDirectivesModule]; }, exports: function () { return [_MatMenu, MatMenuItem, _MatMenuDirectivesModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatMenuModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatCommonModule,
                    MatRippleModule,
                    OverlayModule,
                    _MatMenuDirectivesModule,
                ],
                exports: [_MatMenu, MatMenuItem, _MatMenuDirectivesModule],
                declarations: [_MatMenu, MatMenuItem],
                providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9tZW51L21lbnUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFFLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3hFLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFDaEMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDeEMsT0FBTyxFQUFDLHlDQUF5QyxFQUFFLGNBQWMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3pGO0FBQ0c7QUFDb0U7QUFDN0I7QUFVMUMsc0NBQXNDOztBQUN0QyxNQUFNLE9BQU8sd0JBQXdCO0FBQUc7b0RBVHZDLFFBQVEsU0FBQyxrQkFDUjtDQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsY0FBYyxFQUFFLGVBQWUsQ0FBQyxrQkFDMUQsWUFBWSxFQUFFLHNCQUNaLGNBQWMsc0JBQ2QsY0FBYyxtQkFDZixrQkFDRCxTQUFTLEVBQUUsQ0FBQyx5Q0FBeUMsQ0FBQztXQUN2RDs7Ozs7Ozs7Ozs7OzBCQUNJO0FBZUwsTUFBTSxPQUFPLGFBQWE7QUFBRzt5Q0FaNUIsUUFBUSxTQUFDO0tBQ1IsT0FBTyxFQUFFLHNCQUNQLFlBQVksc0JBQ1osZUFBZSxzQkFDZixlQUFlLHNCQUNmLGFBQWEsc0JBQ2I7S0FBd0IsbUJBQ3pCO2dCQUNELE9BQU8sRUFBRSxDQUFDO0tBQVEsRUFBRSxXQUFXLEVBQUU7ZUFBd0IsQ0FBQztPQUMxRCxZQUFZLEVBQUUsQ0FBQyxRQUFRLEVBQUU7S0FBVyxDQUFDLGtCQUNyQyxTQUFTLEVBQUUsQ0FBQztvQ0FBeUMsQ0FBQyxjQUN2RDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtPdmVybGF5TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRDb21tb25Nb2R1bGUsIE1hdFJpcHBsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge19NYXRNZW51fSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IHtNYXRNZW51Q29udGVudH0gZnJvbSAnLi9tZW51LWNvbnRlbnQnO1xuaW1wb3J0IHtNYXRNZW51SXRlbX0gZnJvbSAnLi9tZW51LWl0ZW0nO1xuaW1wb3J0IHtNQVRfTUVOVV9TQ1JPTExfU1RSQVRFR1lfRkFDVE9SWV9QUk9WSURFUiwgTWF0TWVudVRyaWdnZXJ9IGZyb20gJy4vbWVudS10cmlnZ2VyJztcblxuLyoqXG4gKiBVc2VkIGJ5IGJvdGggdGhlIGN1cnJlbnQgYE1hdE1lbnVNb2R1bGVgIGFuZCB0aGUgTURDIGBNYXRNZW51TW9kdWxlYFxuICogdG8gZGVjbGFyZSB0aGUgbWVudS1yZWxhdGVkIGRpcmVjdGl2ZXMuXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IFtNYXRNZW51VHJpZ2dlciwgTWF0TWVudUNvbnRlbnQsIE1hdENvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE1hdE1lbnVUcmlnZ2VyLFxuICAgIE1hdE1lbnVDb250ZW50LFxuICBdLFxuICBwcm92aWRlcnM6IFtNQVRfTUVOVV9TQ1JPTExfU1RSQVRFR1lfRkFDVE9SWV9QUk9WSURFUl1cbn0pXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y2xhc3MtbmFtZVxuZXhwb3J0IGNsYXNzIF9NYXRNZW51RGlyZWN0aXZlc01vZHVsZSB7fVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdENvbW1vbk1vZHVsZSxcbiAgICBNYXRSaXBwbGVNb2R1bGUsXG4gICAgT3ZlcmxheU1vZHVsZSxcbiAgICBfTWF0TWVudURpcmVjdGl2ZXNNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtfTWF0TWVudSwgTWF0TWVudUl0ZW0sIF9NYXRNZW51RGlyZWN0aXZlc01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW19NYXRNZW51LCBNYXRNZW51SXRlbV0sXG4gIHByb3ZpZGVyczogW01BVF9NRU5VX1NDUk9MTF9TVFJBVEVHWV9GQUNUT1JZX1BST1ZJREVSXVxufSlcbmV4cG9ydCBjbGFzcyBNYXRNZW51TW9kdWxlIHt9XG4iXX0=