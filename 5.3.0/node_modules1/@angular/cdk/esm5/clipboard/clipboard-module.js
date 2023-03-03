/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CdkCopyToClipboard } from './copy-to-clipboard';
import * as ɵngcc0 from '@angular/core';
var ClipboardModule = /** @class */ (function () {
    function ClipboardModule() {
    }
ClipboardModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ClipboardModule });
ClipboardModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ClipboardModule_Factory(t) { return new (t || ClipboardModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ClipboardModule, { declarations: function () { return [CdkCopyToClipboard]; }, imports: function () { return [CommonModule]; }, exports: function () { return [CdkCopyToClipboard]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ClipboardModule, [{
        type: NgModule,
        args: [{
                declarations: [CdkCopyToClipboard],
                imports: [CommonModule],
                exports: [CdkCopyToClipboard]
            }]
    }], function () { return []; }, null); })();
    return ClipboardModule;
}());
export { ClipboardModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpcGJvYXJkLW1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9jbGlwYm9hcmQvY2xpcGJvYXJkLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFdkMsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0scUJBQXFCLENBQUM7O0FBRXZEO0FBRUMsSUFGRDtBQUNpQixJQUtqQixDQUFDO21EQU5BLFFBQVEsU0FBQztlQUNSLFlBQVksRUFBRSxDQUFDLGtCQUFrQixDQUFDLHNCQUNsQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsc0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDLG1CQUM5Qjs7Ozs7Ozs7O2dEQUNRO0FBQUMsSUFDVixzQkFBQztBQUNBLENBREEsQUFORCxJQU1DO0FBQ0QsU0FGYSxlQUFlO0FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7Q2RrQ29weVRvQ2xpcGJvYXJkfSBmcm9tICcuL2NvcHktdG8tY2xpcGJvYXJkJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQ2RrQ29weVRvQ2xpcGJvYXJkXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtDZGtDb3B5VG9DbGlwYm9hcmRdLFxufSlcbmV4cG9ydCBjbGFzcyBDbGlwYm9hcmRNb2R1bGUge1xufVxuIl19