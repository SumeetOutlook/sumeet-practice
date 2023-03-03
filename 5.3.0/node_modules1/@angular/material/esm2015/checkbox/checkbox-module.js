/**
 * @fileoverview added by tsickle
 * Generated from: src/material/checkbox/checkbox-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCommonModule, MatRippleModule } from '@angular/material/core';
import { MatCheckbox } from './checkbox';
import { MatCheckboxRequiredValidator } from './checkbox-required-validator';
/**
 * This module is used by both original and MDC-based checkbox implementations.
 */
// tslint:disable-next-line:class-name
import * as ɵngcc0 from '@angular/core';
export class _MatCheckboxRequiredValidatorModule {
}
_MatCheckboxRequiredValidatorModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: _MatCheckboxRequiredValidatorModule });
_MatCheckboxRequiredValidatorModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function _MatCheckboxRequiredValidatorModule_Factory(t) { return new (t || _MatCheckboxRequiredValidatorModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(_MatCheckboxRequiredValidatorModule, { declarations: function () { return [MatCheckboxRequiredValidator]; }, exports: function () { return [MatCheckboxRequiredValidator]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(_MatCheckboxRequiredValidatorModule, [{
        type: NgModule,
        args: [{
                exports: [MatCheckboxRequiredValidator],
                declarations: [MatCheckboxRequiredValidator]
            }]
    }], null, null); })();
export class MatCheckboxModule {
}
MatCheckboxModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatCheckboxModule });
MatCheckboxModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatCheckboxModule_Factory(t) { return new (t || MatCheckboxModule)(); }, imports: [[
            CommonModule, MatRippleModule, MatCommonModule, ObserversModule,
            _MatCheckboxRequiredValidatorModule
        ], MatCommonModule, _MatCheckboxRequiredValidatorModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatCheckboxModule, { declarations: function () { return [MatCheckbox]; }, imports: function () { return [CommonModule, MatRippleModule, MatCommonModule, ObserversModule, _MatCheckboxRequiredValidatorModule]; }, exports: function () { return [MatCheckbox, MatCommonModule, _MatCheckboxRequiredValidatorModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCheckboxModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule, MatRippleModule, MatCommonModule, ObserversModule,
                    _MatCheckboxRequiredValidatorModule
                ],
                exports: [MatCheckbox, MatCommonModule, _MatCheckboxRequiredValidatorModule],
                declarations: [MatCheckbox]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtbW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvY2hlY2tib3gvY2hlY2tib3gtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFFLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3hFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFDdkMsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDM0U7QUFDRztBQUFnRjtBQUtuRixzQ0FBc0M7O0FBQ3RDLE1BQU0sT0FBTyxtQ0FBbUM7QUFDaEQ7K0RBTkMsUUFBUSxTQUFDLGtCQUNSLE9BQU8sRUFBRSxDQUFDO3FCQUE0QixDQUFDLGtCQUN2QyxZQUFZLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQyxlQUM3Qzs7Ozs7Ozs7MEJBQ0k7QUFZTCxNQUFNLE9BQU8saUJBQWlCO0FBQzlCOzZDQVRDLFFBQVEsU0FBQztDQUNSLE9BQU8sRUFBRSxzQkFDUCxZQUFZLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxlQUFlLHNCQUMvRCxtQ0FBbUM7Z0JBQ3BDLGtCQUNELE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUU7Z0NBQW1DLENBQUM7R0FDNUUsWUFBWSxFQUFFLENBQUMsV0FBVyxDQUFDLGVBQzVCOzs7Ozs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge09ic2VydmVyc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL29ic2VydmVycyc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRDb21tb25Nb2R1bGUsIE1hdFJpcHBsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge01hdENoZWNrYm94fSBmcm9tICcuL2NoZWNrYm94JztcbmltcG9ydCB7TWF0Q2hlY2tib3hSZXF1aXJlZFZhbGlkYXRvcn0gZnJvbSAnLi9jaGVja2JveC1yZXF1aXJlZC12YWxpZGF0b3InO1xuXG4vKiogVGhpcyBtb2R1bGUgaXMgdXNlZCBieSBib3RoIG9yaWdpbmFsIGFuZCBNREMtYmFzZWQgY2hlY2tib3ggaW1wbGVtZW50YXRpb25zLiAqL1xuQE5nTW9kdWxlKHtcbiAgZXhwb3J0czogW01hdENoZWNrYm94UmVxdWlyZWRWYWxpZGF0b3JdLFxuICBkZWNsYXJhdGlvbnM6IFtNYXRDaGVja2JveFJlcXVpcmVkVmFsaWRhdG9yXSxcbn0pXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y2xhc3MtbmFtZVxuZXhwb3J0IGNsYXNzIF9NYXRDaGVja2JveFJlcXVpcmVkVmFsaWRhdG9yTW9kdWxlIHtcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSwgTWF0UmlwcGxlTW9kdWxlLCBNYXRDb21tb25Nb2R1bGUsIE9ic2VydmVyc01vZHVsZSxcbiAgICBfTWF0Q2hlY2tib3hSZXF1aXJlZFZhbGlkYXRvck1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbTWF0Q2hlY2tib3gsIE1hdENvbW1vbk1vZHVsZSwgX01hdENoZWNrYm94UmVxdWlyZWRWYWxpZGF0b3JNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtNYXRDaGVja2JveF0sXG59KVxuZXhwb3J0IGNsYXNzIE1hdENoZWNrYm94TW9kdWxlIHtcbn1cbiJdfQ==