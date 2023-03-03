/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/tree/tree-module.ts
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
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CdkTreeNodeOutlet } from './outlet';
import { CdkTreeNodePadding } from './padding';
import { CdkTreeNodeToggle } from './toggle';
import { CdkTree, CdkTreeNode } from './tree';
import { CdkTreeNodeDef } from './node';
import { CdkNestedTreeNode } from './nested-node';
/** @type {?} */
import * as ɵngcc0 from '@angular/core';
const EXPORTED_DECLARATIONS = [
    CdkNestedTreeNode,
    CdkTreeNodeDef,
    CdkTreeNodePadding,
    CdkTreeNodeToggle,
    CdkTree,
    CdkTreeNode,
    CdkTreeNodeOutlet,
];
export class CdkTreeModule {
}
CdkTreeModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CdkTreeModule });
CdkTreeModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CdkTreeModule_Factory(t) { return new (t || CdkTreeModule)(); }, providers: [FocusMonitor, CdkTreeNodeDef], imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CdkTreeModule, { declarations: function () { return [CdkNestedTreeNode,
        CdkTreeNodeDef,
        CdkTreeNodePadding,
        CdkTreeNodeToggle,
        CdkTree,
        CdkTreeNode,
        CdkTreeNodeOutlet]; }, imports: function () { return [CommonModule]; }, exports: function () { return [CdkNestedTreeNode,
        CdkTreeNodeDef,
        CdkTreeNodePadding,
        CdkTreeNodeToggle,
        CdkTree,
        CdkTreeNode,
        CdkTreeNodeOutlet]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkTreeModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: EXPORTED_DECLARATIONS,
                declarations: EXPORTED_DECLARATIONS,
                providers: [FocusMonitor, CdkTreeNodeDef]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvdHJlZS90cmVlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUM3QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDM0MsT0FBTyxFQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFDNUMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUN0QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEQ7O0FBQ2dCLE1BQVYscUJBQXFCLEdBQUc7QUFDOUIsSUFBRSxpQkFBaUI7QUFDbkIsSUFBRSxjQUFjO0FBQ2hCLElBQUUsa0JBQWtCO0FBQ3BCLElBQUUsaUJBQWlCO0FBQ25CLElBQUUsT0FBTztBQUNULElBQUUsV0FBVztBQUNiLElBQUUsaUJBQWlCO0FBQ25CLENBQUM7QUFRRCxNQUFNLE9BQU8sYUFBYTtBQUFHO3lDQU41QixRQUFRLFNBQUM7S0FDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsa0JBQ3ZCLE9BQU8sRUFBRSxxQkFBcUIsa0JBQzlCLFlBQVksRUFBRSxxQkFBcUIsa0JBQ25DLFNBQVMsRUFBRSxDQUFDLFlBQVksRUFBRSxjQUFjLENBQUMsY0FDMUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0ZvY3VzTW9uaXRvcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrVHJlZU5vZGVPdXRsZXR9IGZyb20gJy4vb3V0bGV0JztcbmltcG9ydCB7Q2RrVHJlZU5vZGVQYWRkaW5nfSBmcm9tICcuL3BhZGRpbmcnO1xuaW1wb3J0IHtDZGtUcmVlTm9kZVRvZ2dsZX0gZnJvbSAnLi90b2dnbGUnO1xuaW1wb3J0IHtDZGtUcmVlLCBDZGtUcmVlTm9kZX0gZnJvbSAnLi90cmVlJztcbmltcG9ydCB7Q2RrVHJlZU5vZGVEZWZ9IGZyb20gJy4vbm9kZSc7XG5pbXBvcnQge0Nka05lc3RlZFRyZWVOb2RlfSBmcm9tICcuL25lc3RlZC1ub2RlJztcblxuY29uc3QgRVhQT1JURURfREVDTEFSQVRJT05TID0gW1xuICBDZGtOZXN0ZWRUcmVlTm9kZSxcbiAgQ2RrVHJlZU5vZGVEZWYsXG4gIENka1RyZWVOb2RlUGFkZGluZyxcbiAgQ2RrVHJlZU5vZGVUb2dnbGUsXG4gIENka1RyZWUsXG4gIENka1RyZWVOb2RlLFxuICBDZGtUcmVlTm9kZU91dGxldCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBFWFBPUlRFRF9ERUNMQVJBVElPTlMsXG4gIGRlY2xhcmF0aW9uczogRVhQT1JURURfREVDTEFSQVRJT05TLFxuICBwcm92aWRlcnM6IFtGb2N1c01vbml0b3IsIENka1RyZWVOb2RlRGVmXVxufSlcbmV4cG9ydCBjbGFzcyBDZGtUcmVlTW9kdWxlIHt9XG4iXX0=