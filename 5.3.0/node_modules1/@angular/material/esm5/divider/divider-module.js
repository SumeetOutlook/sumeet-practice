/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MatDivider } from './divider';
import * as ɵngcc0 from '@angular/core';
var MatDividerModule = /** @class */ (function () {
    function MatDividerModule() {
    }
MatDividerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatDividerModule });
MatDividerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatDividerModule_Factory(t) { return new (t || MatDividerModule)(); }, imports: [[MatCommonModule, CommonModule], MatCommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatDividerModule, { declarations: function () { return [MatDivider]; }, imports: function () { return [MatCommonModule, CommonModule]; }, exports: function () { return [MatDivider, MatCommonModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatDividerModule, [{
        type: NgModule,
        args: [{
                imports: [MatCommonModule, CommonModule],
                exports: [MatDivider, MatCommonModule],
                declarations: [MatDivider]
            }]
    }], function () { return []; }, null); })();
    return MatDividerModule;
}());
export { MatDividerModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGl2aWRlci1tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9kaXZpZGVyL2RpdmlkZXItbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLFdBQVcsQ0FBQzs7QUFHckM7QUFDd0MsSUFEeEM7QUFDa0IsSUFJYSxDQUFDO29EQUwvQixRQUFRLFNBQUM7Y0FDUixPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsWUFBWSxDQUFDLHNCQUN4QyxPQUFPLEVBQUUsQ0FBQyxVQUFVLEVBQUUsZUFBZSxDQUFDLHNCQUN0QyxZQUFZLEVBQUUsQ0FBQyxVQUFVLENBQUMsbUJBQzNCOzs7Ozs7Ozs7Z0RBQ1E7QUFBQyxJQUFxQix1QkFBQztBQUMvQixDQUQrQixBQUxoQyxJQUtnQztBQUNoQyxTQURhLGdCQUFnQjtBQUM3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtNYXREaXZpZGVyfSBmcm9tICcuL2RpdmlkZXInO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtNYXRDb21tb25Nb2R1bGUsIENvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtNYXREaXZpZGVyLCBNYXRDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtNYXREaXZpZGVyXSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0RGl2aWRlck1vZHVsZSB7fVxuIl19