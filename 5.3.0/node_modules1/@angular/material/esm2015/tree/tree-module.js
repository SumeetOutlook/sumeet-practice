/**
 * @fileoverview added by tsickle
 * Generated from: src/material/tree/tree-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule } from '@angular/core';
import { CdkTreeModule } from '@angular/cdk/tree';
import { CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import { MatNestedTreeNode, MatTreeNodeDef, MatTreeNode } from './node';
import { MatTree } from './tree';
import { MatTreeNodeToggle } from './toggle';
import { MatTreeNodeOutlet } from './outlet';
import { MatTreeNodePadding } from './padding';
/** @type {?} */
import * as ɵngcc0 from '@angular/core';
const MAT_TREE_DIRECTIVES = [
    MatNestedTreeNode,
    MatTreeNodeDef,
    MatTreeNodePadding,
    MatTreeNodeToggle,
    MatTree,
    MatTreeNode,
    MatTreeNodeOutlet
];
export class MatTreeModule {
}
MatTreeModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatTreeModule });
MatTreeModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatTreeModule_Factory(t) { return new (t || MatTreeModule)(); }, imports: [[CdkTreeModule, CommonModule, MatCommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatTreeModule, { declarations: function () { return [MatNestedTreeNode,
        MatTreeNodeDef,
        MatTreeNodePadding,
        MatTreeNodeToggle,
        MatTree,
        MatTreeNode,
        MatTreeNodeOutlet]; }, imports: function () { return [CdkTreeModule, CommonModule, MatCommonModule]; }, exports: function () { return [MatNestedTreeNode,
        MatTreeNodeDef,
        MatTreeNodePadding,
        MatTreeNodeToggle,
        MatTree,
        MatTreeNode,
        MatTreeNodeOutlet]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatTreeModule, [{
        type: NgModule,
        args: [{
                imports: [CdkTreeModule, CommonModule, MatCommonModule],
                exports: MAT_TREE_DIRECTIVES,
                declarations: MAT_TREE_DIRECTIVES
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC90cmVlL3RyZWUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFdkMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFDdEUsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUMvQixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDM0MsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUM3Qzs7QUFDZ0IsTUFBVixtQkFBbUIsR0FBRztBQUM1QixJQUFFLGlCQUFpQjtBQUNuQixJQUFFLGNBQWM7QUFDaEIsSUFBRSxrQkFBa0I7QUFDcEIsSUFBRSxpQkFBaUI7QUFDbkIsSUFBRSxPQUFPO0FBQ1QsSUFBRSxXQUFXO0FBQ2IsSUFBRSxpQkFBaUI7QUFDbkIsQ0FBQztBQU9ELE1BQU0sT0FBTyxhQUFhO0FBQUc7eUNBTDVCLFFBQVEsU0FBQztLQUNSLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsZUFBZSxDQUFDLGtCQUN2RCxPQUFPLEVBQUUsbUJBQW1CLGtCQUM1QixZQUFZLEVBQUUsbUJBQW1CLGVBQ2xDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtDZGtUcmVlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TWF0Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7TWF0TmVzdGVkVHJlZU5vZGUsIE1hdFRyZWVOb2RlRGVmLCBNYXRUcmVlTm9kZX0gZnJvbSAnLi9ub2RlJztcbmltcG9ydCB7TWF0VHJlZX0gZnJvbSAnLi90cmVlJztcbmltcG9ydCB7TWF0VHJlZU5vZGVUb2dnbGV9IGZyb20gJy4vdG9nZ2xlJztcbmltcG9ydCB7TWF0VHJlZU5vZGVPdXRsZXR9IGZyb20gJy4vb3V0bGV0JztcbmltcG9ydCB7TWF0VHJlZU5vZGVQYWRkaW5nfSBmcm9tICcuL3BhZGRpbmcnO1xuXG5jb25zdCBNQVRfVFJFRV9ESVJFQ1RJVkVTID0gW1xuICBNYXROZXN0ZWRUcmVlTm9kZSxcbiAgTWF0VHJlZU5vZGVEZWYsXG4gIE1hdFRyZWVOb2RlUGFkZGluZyxcbiAgTWF0VHJlZU5vZGVUb2dnbGUsXG4gIE1hdFRyZWUsXG4gIE1hdFRyZWVOb2RlLFxuICBNYXRUcmVlTm9kZU91dGxldFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0Nka1RyZWVNb2R1bGUsIENvbW1vbk1vZHVsZSwgTWF0Q29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogTUFUX1RSRUVfRElSRUNUSVZFUyxcbiAgZGVjbGFyYXRpb25zOiBNQVRfVFJFRV9ESVJFQ1RJVkVTLFxufSlcbmV4cG9ydCBjbGFzcyBNYXRUcmVlTW9kdWxlIHt9XG4iXX0=