/**
 * @fileoverview added by tsickle
 * Generated from: src/material/input/input-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { TextFieldModule } from '@angular/cdk/text-field';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTextareaAutosize } from './autosize';
import { MatInput } from './input';
import * as ɵngcc0 from '@angular/core';
export class MatInputModule {
}
MatInputModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatInputModule });
MatInputModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatInputModule_Factory(t) { return new (t || MatInputModule)(); }, providers: [ErrorStateMatcher], imports: [[
            CommonModule,
            TextFieldModule,
            MatFormFieldModule,
        ], TextFieldModule,
        // We re-export the `MatFormFieldModule` since `MatInput` will almost always
        // be used together with `MatFormField`.
        MatFormFieldModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatInputModule, { declarations: function () { return [MatInput, MatTextareaAutosize]; }, imports: function () { return [CommonModule,
        TextFieldModule,
        MatFormFieldModule]; }, exports: function () { return [TextFieldModule,
        // We re-export the `MatFormFieldModule` since `MatInput` will almost always
        // be used together with `MatFormField`.
        MatFormFieldModule,
        MatInput,
        MatTextareaAutosize]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatInputModule, [{
        type: NgModule,
        args: [{
                declarations: [MatInput, MatTextareaAutosize],
                imports: [
                    CommonModule,
                    TextFieldModule,
                    MatFormFieldModule,
                ],
                exports: [
                    TextFieldModule,
                    // We re-export the `MatFormFieldModule` since `MatInput` will almost always
                    // be used together with `MatFormField`.
                    MatFormFieldModule,
                    MatInput,
                    MatTextareaAutosize,
                ],
                providers: [ErrorStateMatcher]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvaW5wdXQvaW5wdXQtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFDL0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLFNBQVMsQ0FBQzs7QUFtQmpDLE1BQU0sT0FBTyxjQUFjO0FBQUc7MENBakI3QixRQUFRLFNBQUM7SUFDUixZQUFZLEVBQUUsQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUMsa0JBQzdDLE9BQU8sRUFBRSxzQkFDUCxZQUFZLHNCQUNaLGVBQWUsc0JBQ2Y7VUFBa0I7R0FDbkIsa0JBQ0QsT0FBTztDQUFFLHNCQUNQO01BQWU7QUFDZiw0RUFBNEU7WUFDNUU7R0FBd0MscUJBQ3hDO1VBQWtCLHNCQUNsQixRQUFRLHNCQUNSLG1CQUFtQixtQkFDcEIsa0JBQ0QsU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQUMsZUFDL0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7VGV4dEZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvdGV4dC1maWVsZCc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtFcnJvclN0YXRlTWF0Y2hlcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQge01hdFRleHRhcmVhQXV0b3NpemV9IGZyb20gJy4vYXV0b3NpemUnO1xuaW1wb3J0IHtNYXRJbnB1dH0gZnJvbSAnLi9pbnB1dCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW01hdElucHV0LCBNYXRUZXh0YXJlYUF1dG9zaXplXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBUZXh0RmllbGRNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVGV4dEZpZWxkTW9kdWxlLFxuICAgIC8vIFdlIHJlLWV4cG9ydCB0aGUgYE1hdEZvcm1GaWVsZE1vZHVsZWAgc2luY2UgYE1hdElucHV0YCB3aWxsIGFsbW9zdCBhbHdheXNcbiAgICAvLyBiZSB1c2VkIHRvZ2V0aGVyIHdpdGggYE1hdEZvcm1GaWVsZGAuXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdElucHV0LFxuICAgIE1hdFRleHRhcmVhQXV0b3NpemUsXG4gIF0sXG4gIHByb3ZpZGVyczogW0Vycm9yU3RhdGVNYXRjaGVyXSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0SW5wdXRNb2R1bGUge31cbiJdfQ==