/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCommonModule, MatRippleModule } from '@angular/material/core';
import { MatAnchor, MatButton } from './button';
import * as ɵngcc0 from '@angular/core';
var MatButtonModule = /** @class */ (function () {
    function MatButtonModule() {
    }
MatButtonModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatButtonModule });
MatButtonModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatButtonModule_Factory(t) { return new (t || MatButtonModule)(); }, imports: [[
            CommonModule,
            MatRippleModule,
            MatCommonModule,
        ], MatCommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatButtonModule, { declarations: function () { return [MatButton,
        MatAnchor]; }, imports: function () { return [CommonModule,
        MatRippleModule,
        MatCommonModule]; }, exports: function () { return [MatButton,
        MatAnchor,
        MatCommonModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatButtonModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatRippleModule,
                    MatCommonModule,
                ],
                exports: [
                    MatButton,
                    MatAnchor,
                    MatCommonModule,
                ],
                declarations: [
                    MatButton,
                    MatAnchor,
                ]
            }]
    }], function () { return []; }, null); })();
    return MatButtonModule;
}());
export { MatButtonModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLW1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL2J1dHRvbi9idXR0b24tbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFFLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3hFLE9BQU8sRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFDLE1BQU0sVUFBVSxDQUFDOztBQUc5QztBQUdRLElBSFI7QUFFSSxJQWMwQixDQUFDO21EQWhCOUIsUUFBUSxTQUFDO2VBQ1IsT0FBTyxFQUFFLDBCQUNQLFlBQVksMEJBQ1osZUFBZSwwQkFDZixlQUFlO21CQUNoQjtlQUNELE9BQU8sRUFBRTtxQkFDUDtDQUFTLDBCQUNUO0lBQVMsMEJBQ1QsZUFBZSx1QkFDaEIsc0JBQ0QsWUFBWSxFQUFFLDBCQUNaLFNBQVM7T0FDVCxTQUFTLHVCQUNWLG1CQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnREFDUTtBQUFDLElBQW9CLHNCQUFDO0FBQzlCLENBRDhCLEFBaEIvQixJQWdCK0I7QUFDL0IsU0FEYSxlQUFlO0FBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdENvbW1vbk1vZHVsZSwgTWF0UmlwcGxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7TWF0QW5jaG9yLCBNYXRCdXR0b259IGZyb20gJy4vYnV0dG9uJztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdFJpcHBsZU1vZHVsZSxcbiAgICBNYXRDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBNYXRCdXR0b24sXG4gICAgTWF0QW5jaG9yLFxuICAgIE1hdENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTWF0QnV0dG9uLFxuICAgIE1hdEFuY2hvcixcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0QnV0dG9uTW9kdWxlIHt9XG4iXX0=