/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderRowOutlet, DataRowOutlet, CdkTable, FooterRowOutlet } from './table';
import { CdkCellOutlet, CdkFooterRow, CdkFooterRowDef, CdkHeaderRow, CdkHeaderRowDef, CdkRow, CdkRowDef } from './row';
import { CdkColumnDef, CdkHeaderCellDef, CdkHeaderCell, CdkCell, CdkCellDef, CdkFooterCellDef, CdkFooterCell } from './cell';
import { CdkTextColumn } from './text-column';
import * as ɵngcc0 from '@angular/core';
var EXPORTED_DECLARATIONS = [
    CdkTable,
    CdkRowDef,
    CdkCellDef,
    CdkCellOutlet,
    CdkHeaderCellDef,
    CdkFooterCellDef,
    CdkColumnDef,
    CdkCell,
    CdkRow,
    CdkHeaderCell,
    CdkFooterCell,
    CdkHeaderRow,
    CdkHeaderRowDef,
    CdkFooterRow,
    CdkFooterRowDef,
    DataRowOutlet,
    HeaderRowOutlet,
    FooterRowOutlet,
    CdkTextColumn,
];
var CdkTableModule = /** @class */ (function () {
    function CdkTableModule() {
    }
CdkTableModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CdkTableModule });
CdkTableModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CdkTableModule_Factory(t) { return new (t || CdkTableModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CdkTableModule, { declarations: function () { return [CdkTable,
        CdkRowDef,
        CdkCellDef,
        CdkCellOutlet,
        CdkHeaderCellDef,
        CdkFooterCellDef,
        CdkColumnDef,
        CdkCell,
        CdkRow,
        CdkHeaderCell,
        CdkFooterCell,
        CdkHeaderRow,
        CdkHeaderRowDef,
        CdkFooterRow,
        CdkFooterRowDef,
        DataRowOutlet,
        HeaderRowOutlet,
        FooterRowOutlet,
        CdkTextColumn]; }, imports: function () { return [CommonModule]; }, exports: function () { return [CdkTable,
        CdkRowDef,
        CdkCellDef,
        CdkCellOutlet,
        CdkHeaderCellDef,
        CdkFooterCellDef,
        CdkColumnDef,
        CdkCell,
        CdkRow,
        CdkHeaderCell,
        CdkFooterCell,
        CdkHeaderRow,
        CdkHeaderRowDef,
        CdkFooterRow,
        CdkFooterRowDef,
        DataRowOutlet,
        HeaderRowOutlet,
        FooterRowOutlet,
        CdkTextColumn]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkTableModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: EXPORTED_DECLARATIONS,
                declarations: EXPORTED_DECLARATIONS
            }]
    }], function () { return []; }, null); })();
    return CdkTableModule;
}());
export { CdkTableModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtbW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3RhYmxlL3RhYmxlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGVBQWUsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUNsRixPQUFPLEVBQ0wsYUFBYSxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQ25GLFNBQVMsRUFDVixNQUFNLE9BQU8sQ0FBQztBQUNmLE9BQU8sRUFDTCxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQ2xFLGdCQUFnQixFQUFFLGFBQWEsRUFDaEMsTUFBTSxRQUFRLENBQUM7QUFDaEIsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFFNUMsSUFBTSxxQkFBcUIsR0FBRztBQUM5QixJQUFFLFFBQVE7QUFDVixJQUFFLFNBQVM7QUFDWCxJQUFFLFVBQVU7QUFDWixJQUFFLGFBQWE7QUFDZixJQUFFLGdCQUFnQjtBQUNsQixJQUFFLGdCQUFnQjtBQUNsQixJQUFFLFlBQVk7QUFDZCxJQUFFLE9BQU87QUFDVCxJQUFFLE1BQU07QUFDUixJQUFFLGFBQWE7QUFDZixJQUFFLGFBQWE7QUFDZixJQUFFLFlBQVk7QUFDZCxJQUFFLGVBQWU7QUFDakIsSUFBRSxZQUFZO0FBQ2QsSUFBRSxlQUFlO0FBQ2pCLElBQUUsYUFBYTtBQUNmLElBQUUsZUFBZTtBQUNqQixJQUFFLGVBQWU7QUFDakIsSUFBRSxhQUFhO0FBQ2YsQ0FBQyxDQUFDO0FBRUY7QUFFVyxJQUZYO0FBQ2dCLElBS2MsQ0FBQztrREFOOUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxzQkFDdkIsT0FBTyxFQUFFLHFCQUFxQixzQkFDOUIsWUFBWSxFQUFFLHFCQUFxQjtHQUVwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0RBQ1E7QUFBQyxJQUFvQixxQkFBQztBQUM5QixDQUQ4QixBQU4vQixJQU0rQjtBQUMvQixTQURhLGNBQWM7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIZWFkZXJSb3dPdXRsZXQsIERhdGFSb3dPdXRsZXQsIENka1RhYmxlLCBGb290ZXJSb3dPdXRsZXR9IGZyb20gJy4vdGFibGUnO1xuaW1wb3J0IHtcbiAgQ2RrQ2VsbE91dGxldCwgQ2RrRm9vdGVyUm93LCBDZGtGb290ZXJSb3dEZWYsIENka0hlYWRlclJvdywgQ2RrSGVhZGVyUm93RGVmLCBDZGtSb3csXG4gIENka1Jvd0RlZlxufSBmcm9tICcuL3Jvdyc7XG5pbXBvcnQge1xuICBDZGtDb2x1bW5EZWYsIENka0hlYWRlckNlbGxEZWYsIENka0hlYWRlckNlbGwsIENka0NlbGwsIENka0NlbGxEZWYsXG4gIENka0Zvb3RlckNlbGxEZWYsIENka0Zvb3RlckNlbGxcbn0gZnJvbSAnLi9jZWxsJztcbmltcG9ydCB7Q2RrVGV4dENvbHVtbn0gZnJvbSAnLi90ZXh0LWNvbHVtbic7XG5cbmNvbnN0IEVYUE9SVEVEX0RFQ0xBUkFUSU9OUyA9IFtcbiAgQ2RrVGFibGUsXG4gIENka1Jvd0RlZixcbiAgQ2RrQ2VsbERlZixcbiAgQ2RrQ2VsbE91dGxldCxcbiAgQ2RrSGVhZGVyQ2VsbERlZixcbiAgQ2RrRm9vdGVyQ2VsbERlZixcbiAgQ2RrQ29sdW1uRGVmLFxuICBDZGtDZWxsLFxuICBDZGtSb3csXG4gIENka0hlYWRlckNlbGwsXG4gIENka0Zvb3RlckNlbGwsXG4gIENka0hlYWRlclJvdyxcbiAgQ2RrSGVhZGVyUm93RGVmLFxuICBDZGtGb290ZXJSb3csXG4gIENka0Zvb3RlclJvd0RlZixcbiAgRGF0YVJvd091dGxldCxcbiAgSGVhZGVyUm93T3V0bGV0LFxuICBGb290ZXJSb3dPdXRsZXQsXG4gIENka1RleHRDb2x1bW4sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogRVhQT1JURURfREVDTEFSQVRJT05TLFxuICBkZWNsYXJhdGlvbnM6IEVYUE9SVEVEX0RFQ0xBUkFUSU9OU1xuXG59KVxuZXhwb3J0IGNsYXNzIENka1RhYmxlTW9kdWxlIHsgfVxuIl19