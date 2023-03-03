/**
 * @fileoverview added by tsickle
 * Generated from: src/material/bottom-sheet/bottom-sheet-module.ts
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
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MatBottomSheetContainer } from './bottom-sheet-container';
import * as ɵngcc0 from '@angular/core';
export class MatBottomSheetModule {
}
MatBottomSheetModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatBottomSheetModule });
MatBottomSheetModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatBottomSheetModule_Factory(t) { return new (t || MatBottomSheetModule)(); }, imports: [[
            CommonModule,
            OverlayModule,
            MatCommonModule,
            PortalModule,
        ], MatCommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatBottomSheetModule, { declarations: function () { return [MatBottomSheetContainer]; }, imports: function () { return [CommonModule,
        OverlayModule,
        MatCommonModule,
        PortalModule]; }, exports: function () { return [MatBottomSheetContainer, MatCommonModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatBottomSheetModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    OverlayModule,
                    MatCommonModule,
                    PortalModule,
                ],
                exports: [MatBottomSheetContainer, MatCommonModule],
                declarations: [MatBottomSheetContainer],
                entryComponents: [MatBottomSheetContainer]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tLXNoZWV0LW1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL2JvdHRvbS1zaGVldC9ib3R0b20tc2hlZXQtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDBCQUEwQixDQUFDOztBQWNqRSxNQUFNLE9BQU8sb0JBQW9CO0FBQUc7Z0RBWG5DLFFBQVEsU0FBQyxrQkFDUjtLQUFPLEVBQUUsc0JBQ1AsWUFBWSxzQkFDWixhQUFhLHNCQUNiLGVBQWUsc0JBQ2YsWUFBWTtHQUNiLGtCQUNEO0VBQU8sRUFBRSxDQUFDO0NBQXVCLEVBQUUsZUFBZSxDQUFDO1FBQ25ELFlBQVksRUFBRSxDQUFDO29CQUF1QixDQUFDO09BQ3ZDLGVBQWUsRUFBRSxDQUFDLHVCQUF1QixDQUFDLGVBQzNDOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7T3ZlcmxheU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHtQb3J0YWxNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7TWF0Qm90dG9tU2hlZXRDb250YWluZXJ9IGZyb20gJy4vYm90dG9tLXNoZWV0LWNvbnRhaW5lcic7XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBPdmVybGF5TW9kdWxlLFxuICAgIE1hdENvbW1vbk1vZHVsZSxcbiAgICBQb3J0YWxNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtNYXRCb3R0b21TaGVldENvbnRhaW5lciwgTWF0Q29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTWF0Qm90dG9tU2hlZXRDb250YWluZXJdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtNYXRCb3R0b21TaGVldENvbnRhaW5lcl0sXG59KVxuZXhwb3J0IGNsYXNzIE1hdEJvdHRvbVNoZWV0TW9kdWxlIHt9XG4iXX0=