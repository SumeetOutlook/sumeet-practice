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
import * as ɵngcc0 from '@angular/core';
var MAT_TREE_DIRECTIVES = [
    MatNestedTreeNode,
    MatTreeNodeDef,
    MatTreeNodePadding,
    MatTreeNodeToggle,
    MatTree,
    MatTreeNode,
    MatTreeNodeOutlet
];
var MatTreeModule = /** @class */ (function () {
    function MatTreeModule() {
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
    }], function () { return []; }, null); })();
    return MatTreeModule;
}());
export { MatTreeModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC90cmVlL3RyZWUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXZDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxpQkFBaUIsRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFDL0IsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUMzQyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxXQUFXLENBQUM7O0FBRTdDLElBQU0sbUJBQW1CLEdBQUc7QUFDNUIsSUFBRSxpQkFBaUI7QUFDbkIsSUFBRSxjQUFjO0FBQ2hCLElBQUUsa0JBQWtCO0FBQ3BCLElBQUUsaUJBQWlCO0FBQ25CLElBQUUsT0FBTztBQUNULElBQUUsV0FBVztBQUNiLElBQUUsaUJBQWlCO0FBQ25CLENBQUMsQ0FBQztBQUVGO0FBQ3FDLElBRHJDO0FBQ2UsSUFJYSxDQUFDO2lEQUw1QixRQUFRLFNBQUM7aUJBQ1IsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxlQUFlLENBQUMsc0JBQ3ZELE9BQU8sRUFBRSxtQkFBbUIsc0JBQzVCLFlBQVksRUFBRSxtQkFBbUI7SUFDbEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dEQUNRO0FBQUMsSUFBa0Isb0JBQUM7QUFDNUIsQ0FENEIsQUFMN0IsSUFLNkI7QUFDN0IsU0FEYSxhQUFhO0FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0Nka1RyZWVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtNYXRDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtNYXROZXN0ZWRUcmVlTm9kZSwgTWF0VHJlZU5vZGVEZWYsIE1hdFRyZWVOb2RlfSBmcm9tICcuL25vZGUnO1xuaW1wb3J0IHtNYXRUcmVlfSBmcm9tICcuL3RyZWUnO1xuaW1wb3J0IHtNYXRUcmVlTm9kZVRvZ2dsZX0gZnJvbSAnLi90b2dnbGUnO1xuaW1wb3J0IHtNYXRUcmVlTm9kZU91dGxldH0gZnJvbSAnLi9vdXRsZXQnO1xuaW1wb3J0IHtNYXRUcmVlTm9kZVBhZGRpbmd9IGZyb20gJy4vcGFkZGluZyc7XG5cbmNvbnN0IE1BVF9UUkVFX0RJUkVDVElWRVMgPSBbXG4gIE1hdE5lc3RlZFRyZWVOb2RlLFxuICBNYXRUcmVlTm9kZURlZixcbiAgTWF0VHJlZU5vZGVQYWRkaW5nLFxuICBNYXRUcmVlTm9kZVRvZ2dsZSxcbiAgTWF0VHJlZSxcbiAgTWF0VHJlZU5vZGUsXG4gIE1hdFRyZWVOb2RlT3V0bGV0XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ2RrVHJlZU1vZHVsZSwgQ29tbW9uTW9kdWxlLCBNYXRDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBNQVRfVFJFRV9ESVJFQ1RJVkVTLFxuICBkZWNsYXJhdGlvbnM6IE1BVF9UUkVFX0RJUkVDVElWRVMsXG59KVxuZXhwb3J0IGNsYXNzIE1hdFRyZWVNb2R1bGUge31cbiJdfQ==