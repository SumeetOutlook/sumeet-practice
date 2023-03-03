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
import { MAT_DIALOG_SCROLL_STRATEGY_PROVIDER, MatDialog } from './dialog';
import { MatDialogContainer } from './dialog-container';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, } from './dialog-content-directives';
import * as ɵngcc0 from '@angular/core';
var MatDialogModule = /** @class */ (function () {
    function MatDialogModule() {
    }
MatDialogModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatDialogModule });
MatDialogModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatDialogModule_Factory(t) { return new (t || MatDialogModule)(); }, providers: [
        MatDialog,
        MAT_DIALOG_SCROLL_STRATEGY_PROVIDER,
    ], imports: [[
            CommonModule,
            OverlayModule,
            PortalModule,
            MatCommonModule,
        ], MatCommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatDialogModule, { declarations: function () { return [MatDialogContainer,
        MatDialogClose,
        MatDialogTitle,
        MatDialogActions,
        MatDialogContent]; }, imports: function () { return [CommonModule,
        OverlayModule,
        PortalModule,
        MatCommonModule]; }, exports: function () { return [MatDialogContainer,
        MatDialogClose,
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
        MatCommonModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatDialogModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    OverlayModule,
                    PortalModule,
                    MatCommonModule,
                ],
                exports: [
                    MatDialogContainer,
                    MatDialogClose,
                    MatDialogTitle,
                    MatDialogContent,
                    MatDialogActions,
                    MatCommonModule,
                ],
                declarations: [
                    MatDialogContainer,
                    MatDialogClose,
                    MatDialogTitle,
                    MatDialogActions,
                    MatDialogContent,
                ],
                providers: [
                    MatDialog,
                    MAT_DIALOG_SCROLL_STRATEGY_PROVIDER,
                ],
                entryComponents: [MatDialogContainer]
            }]
    }], function () { return []; }, null); })();
    return MatDialogModule;
}());
export { MatDialogModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLW1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsbUNBQW1DLEVBQUUsU0FBUyxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQ3hFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixjQUFjLEdBQ2YsTUFBTSw2QkFBNkIsQ0FBQzs7QUFHckM7QUFHUSxJQUhSO0FBRUksSUEwQjBCLENBQUM7bURBNUI5QixRQUFRLFNBQUM7ZUFDUixPQUFPLEVBQUUsMEJBQ1AsWUFBWSwwQkFDWixhQUFhLDBCQUNiLFlBQVk7Z0JBQ1o7WUFBZSx1QkFDaEI7WUFDRDtBQUFPLEVBQUU7RUFDUCxrQkFBa0I7bUJBQ2xCO09BQWM7SUFDZCxjQUFjO1lBQ2QsZ0JBQWdCLDBCQUNoQixnQkFBZ0IsMEJBQ2hCLGVBQWUsdUJBQ2hCLHNCQUNEO0NBQVksRUFBRTtLQUNaLGtCQUFrQjt5QkFDbEI7YUFBYywwQkFDZCxjQUFjO0lBQ2QsZ0JBQWdCOztDQUNoQixnQkFBZ0IsdUJBQ2pCLHNCQUNELFNBQVMsRUFBRTttQkFDVDtJQUFTO01BQ1Q7ZUFBbUM7WUFDcEMsc0JBQ0Q7V0FBZSxFQUFFLENBQUMsa0JBQWtCLENBQUMsbUJBQ3RDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0RBQ1E7QUFBQyxJQUFvQixzQkFBQztBQUM5QixDQUQ4QixBQTVCL0IsSUE0QitCO0FBQy9CLFNBRGEsZUFBZTtBQUM1QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge092ZXJsYXlNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7UG9ydGFsTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdENvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge01BVF9ESUFMT0dfU0NST0xMX1NUUkFURUdZX1BST1ZJREVSLCBNYXREaWFsb2d9IGZyb20gJy4vZGlhbG9nJztcbmltcG9ydCB7TWF0RGlhbG9nQ29udGFpbmVyfSBmcm9tICcuL2RpYWxvZy1jb250YWluZXInO1xuaW1wb3J0IHtcbiAgTWF0RGlhbG9nQWN0aW9ucyxcbiAgTWF0RGlhbG9nQ2xvc2UsXG4gIE1hdERpYWxvZ0NvbnRlbnQsXG4gIE1hdERpYWxvZ1RpdGxlLFxufSBmcm9tICcuL2RpYWxvZy1jb250ZW50LWRpcmVjdGl2ZXMnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgT3ZlcmxheU1vZHVsZSxcbiAgICBQb3J0YWxNb2R1bGUsXG4gICAgTWF0Q29tbW9uTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTWF0RGlhbG9nQ29udGFpbmVyLFxuICAgIE1hdERpYWxvZ0Nsb3NlLFxuICAgIE1hdERpYWxvZ1RpdGxlLFxuICAgIE1hdERpYWxvZ0NvbnRlbnQsXG4gICAgTWF0RGlhbG9nQWN0aW9ucyxcbiAgICBNYXRDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE1hdERpYWxvZ0NvbnRhaW5lcixcbiAgICBNYXREaWFsb2dDbG9zZSxcbiAgICBNYXREaWFsb2dUaXRsZSxcbiAgICBNYXREaWFsb2dBY3Rpb25zLFxuICAgIE1hdERpYWxvZ0NvbnRlbnQsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIE1hdERpYWxvZyxcbiAgICBNQVRfRElBTE9HX1NDUk9MTF9TVFJBVEVHWV9QUk9WSURFUixcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbTWF0RGlhbG9nQ29udGFpbmVyXSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0RGlhbG9nTW9kdWxlIHt9XG4iXX0=