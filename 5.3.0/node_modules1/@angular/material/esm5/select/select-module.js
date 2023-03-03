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
import { MatCommonModule, MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_SELECT_SCROLL_STRATEGY_PROVIDER, MatSelect, MatSelectTrigger } from './select';
import * as ɵngcc0 from '@angular/core';
var MatSelectModule = /** @class */ (function () {
    function MatSelectModule() {
    }
MatSelectModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatSelectModule });
MatSelectModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatSelectModule_Factory(t) { return new (t || MatSelectModule)(); }, providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER], imports: [[
            CommonModule,
            OverlayModule,
            MatOptionModule,
            MatCommonModule,
        ], MatFormFieldModule, MatOptionModule, MatCommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatSelectModule, { declarations: function () { return [MatSelect, MatSelectTrigger]; }, imports: function () { return [CommonModule,
        OverlayModule,
        MatOptionModule,
        MatCommonModule]; }, exports: function () { return [MatFormFieldModule, MatSelect, MatSelectTrigger, MatOptionModule, MatCommonModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatSelectModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    OverlayModule,
                    MatOptionModule,
                    MatCommonModule,
                ],
                exports: [MatFormFieldModule, MatSelect, MatSelectTrigger, MatOptionModule, MatCommonModule],
                declarations: [MatSelect, MatSelectTrigger],
                providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER]
            }]
    }], function () { return []; }, null); })();
    return MatSelectModule;
}());
export { MatSelectModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGVBQWUsRUFBRSxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsbUNBQW1DLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFDLE1BQU0sVUFBVSxDQUFDOztBQUcxRjtBQUdRLElBSFI7QUFFSSxJQVMwQixDQUFDO21EQVg5QixRQUFRLFNBQUM7ZUFDUixPQUFPLEVBQUUsMEJBQ1AsWUFBWSwwQkFDWixhQUFhLDBCQUNiLGVBQWUsMEJBQ2YsZUFBZTtRQUNoQjtJQUNELE9BQU8sRUFBRSxDQUFDO0tBQWtCLEVBQUUsU0FBUyxFQUFFO0tBQWdCLEVBQUUsZUFBZSxFQUFFO1VBQWUsQ0FBQyxzQkFDNUYsWUFBWSxFQUFFLENBQUMsU0FBUyxFQUFFO01BQWdCLENBQUMsc0JBQzNDLFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDLGtCQUNqRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0RBQ1E7QUFBQyxJQUFvQixzQkFBQztBQUM5QixDQUQ4QixBQVgvQixJQVcrQjtBQUMvQixTQURhLGVBQWU7QUFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtPdmVybGF5TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRDb21tb25Nb2R1bGUsIE1hdE9wdGlvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQge01BVF9TRUxFQ1RfU0NST0xMX1NUUkFURUdZX1BST1ZJREVSLCBNYXRTZWxlY3QsIE1hdFNlbGVjdFRyaWdnZXJ9IGZyb20gJy4vc2VsZWN0JztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE92ZXJsYXlNb2R1bGUsXG4gICAgTWF0T3B0aW9uTW9kdWxlLFxuICAgIE1hdENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW01hdEZvcm1GaWVsZE1vZHVsZSwgTWF0U2VsZWN0LCBNYXRTZWxlY3RUcmlnZ2VyLCBNYXRPcHRpb25Nb2R1bGUsIE1hdENvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW01hdFNlbGVjdCwgTWF0U2VsZWN0VHJpZ2dlcl0sXG4gIHByb3ZpZGVyczogW01BVF9TRUxFQ1RfU0NST0xMX1NUUkFURUdZX1BST1ZJREVSXVxufSlcbmV4cG9ydCBjbGFzcyBNYXRTZWxlY3RNb2R1bGUge31cbiJdfQ==