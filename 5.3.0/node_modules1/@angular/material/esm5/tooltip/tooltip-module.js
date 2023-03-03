/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MatTooltip, TooltipComponent, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER, } from './tooltip';
import * as ɵngcc0 from '@angular/core';
var MatTooltipModule = /** @class */ (function () {
    function MatTooltipModule() {
    }
MatTooltipModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatTooltipModule });
MatTooltipModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatTooltipModule_Factory(t) { return new (t || MatTooltipModule)(); }, providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER], imports: [[
            A11yModule,
            CommonModule,
            OverlayModule,
            MatCommonModule,
        ], MatCommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatTooltipModule, { declarations: function () { return [MatTooltip, TooltipComponent]; }, imports: function () { return [A11yModule,
        CommonModule,
        OverlayModule,
        MatCommonModule]; }, exports: function () { return [MatTooltip, TooltipComponent, MatCommonModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatTooltipModule, [{
        type: NgModule,
        args: [{
                imports: [
                    A11yModule,
                    CommonModule,
                    OverlayModule,
                    MatCommonModule,
                ],
                exports: [MatTooltip, TooltipComponent, MatCommonModule],
                declarations: [MatTooltip, TooltipComponent],
                entryComponents: [TooltipComponent],
                providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER]
            }]
    }], function () { return []; }, null); })();
    return MatTooltipModule;
}());
export { MatTooltipModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC90b29sdGlwL3Rvb2x0aXAtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQ0wsVUFBVSxFQUNWLGdCQUFnQixFQUNoQiw0Q0FBNEMsR0FDN0MsTUFBTSxXQUFXLENBQUM7O0FBRW5CO0FBR1csSUFIWDtBQUVLLElBVTBCLENBQUM7b0RBWi9CLFFBQVEsU0FBQztjQUNSLE9BQU8sRUFBRSwwQkFDUCxVQUFVLDBCQUNWLFlBQVksMEJBQ1osYUFBYSwwQkFDYixlQUFlLHVCQUNoQjtZQUNELE9BQU8sRUFBRSxDQUFDO1FBQVUsRUFBRTtBQUFnQixFQUFFLGVBQWUsQ0FBQzthQUN4RCxZQUFZLEVBQUUsQ0FBQztTQUFVLEVBQUUsZ0JBQWdCLENBQUM7a0JBQzVDLGVBQWUsRUFBRSxDQUFDLGdCQUFnQixDQUFDLHNCQUNuQyxTQUFTLEVBQUUsQ0FBQyw0Q0FBNEMsQ0FBQyxrQkFDMUQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztnREFDUTtBQUFDLElBQXFCLHVCQUFDO0FBQy9CLENBRCtCLEFBWmhDLElBWWdDO0FBQ2hDLFNBRGEsZ0JBQWdCO0FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7T3ZlcmxheU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHtBMTF5TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtcbiAgTWF0VG9vbHRpcCxcbiAgVG9vbHRpcENvbXBvbmVudCxcbiAgTUFUX1RPT0xUSVBfU0NST0xMX1NUUkFURUdZX0ZBQ1RPUllfUFJPVklERVIsXG59IGZyb20gJy4vdG9vbHRpcCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBBMTF5TW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBPdmVybGF5TW9kdWxlLFxuICAgIE1hdENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW01hdFRvb2x0aXAsIFRvb2x0aXBDb21wb25lbnQsIE1hdENvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW01hdFRvb2x0aXAsIFRvb2x0aXBDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtUb29sdGlwQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbTUFUX1RPT0xUSVBfU0NST0xMX1NUUkFURUdZX0ZBQ1RPUllfUFJPVklERVJdXG59KVxuZXhwb3J0IGNsYXNzIE1hdFRvb2x0aXBNb2R1bGUge31cbiJdfQ==