/**
 * @fileoverview added by tsickle
 * Generated from: src/material/stepper/stepper-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { PortalModule } from '@angular/cdk/portal';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ErrorStateMatcher, MatCommonModule, MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatStepHeader } from './step-header';
import { MatStepLabel } from './step-label';
import { MatHorizontalStepper, MatStep, MatStepper, MatVerticalStepper } from './stepper';
import { MatStepperNext, MatStepperPrevious } from './stepper-button';
import { MatStepperIcon } from './stepper-icon';
import { MAT_STEPPER_INTL_PROVIDER } from './stepper-intl';
import * as ɵngcc0 from '@angular/core';
export class MatStepperModule {
}
MatStepperModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatStepperModule });
MatStepperModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatStepperModule_Factory(t) { return new (t || MatStepperModule)(); }, providers: [MAT_STEPPER_INTL_PROVIDER, ErrorStateMatcher], imports: [[
            MatCommonModule,
            CommonModule,
            PortalModule,
            MatButtonModule,
            CdkStepperModule,
            MatIconModule,
            MatRippleModule,
        ], MatCommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatStepperModule, { declarations: function () { return [MatHorizontalStepper,
        MatVerticalStepper,
        MatStep,
        MatStepLabel,
        MatStepper,
        MatStepperNext,
        MatStepperPrevious,
        MatStepHeader,
        MatStepperIcon]; }, imports: function () { return [MatCommonModule,
        CommonModule,
        PortalModule,
        MatButtonModule,
        CdkStepperModule,
        MatIconModule,
        MatRippleModule]; }, exports: function () { return [MatCommonModule,
        MatHorizontalStepper,
        MatVerticalStepper,
        MatStep,
        MatStepLabel,
        MatStepper,
        MatStepperNext,
        MatStepperPrevious,
        MatStepHeader,
        MatStepperIcon]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatStepperModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatCommonModule,
                    CommonModule,
                    PortalModule,
                    MatButtonModule,
                    CdkStepperModule,
                    MatIconModule,
                    MatRippleModule,
                ],
                exports: [
                    MatCommonModule,
                    MatHorizontalStepper,
                    MatVerticalStepper,
                    MatStep,
                    MatStepLabel,
                    MatStepper,
                    MatStepperNext,
                    MatStepperPrevious,
                    MatStepHeader,
                    MatStepperIcon,
                ],
                declarations: [
                    MatHorizontalStepper,
                    MatVerticalStepper,
                    MatStep,
                    MatStepLabel,
                    MatStepper,
                    MatStepperNext,
                    MatStepperPrevious,
                    MatStepHeader,
                    MatStepperIcon,
                ],
                providers: [MAT_STEPPER_INTL_PROVIDER, ErrorStateMatcher]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9zdGVwcGVyL3N0ZXBwZXItbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQzFDLE9BQU8sRUFBQyxvQkFBb0IsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQ3hGLE9BQU8sRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNwRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7O0FBc0N6RCxNQUFNLE9BQU8sZ0JBQWdCO0FBQUc7NENBbkMvQixRQUFRLFNBQUM7RUFDUixPQUFPLEVBQUUsc0JBQ1AsZUFBZSxzQkFDZixZQUFZLHNCQUNaLFlBQVksc0JBQ1osZUFBZSxzQkFDZixnQkFBZ0I7R0FDaEIsYUFBYTtTQUNiLGVBQWU7aUJBQ2hCO1NBQ0QsT0FBTyxFQUFFO1dBQ1AsZUFBZTtrQkFDZjtXQUFvQjtJQUNwQixrQkFBa0I7WUFDbEIsT0FBTyxzQkFDUCxZQUFZLHNCQUNaLFVBQVUsc0JBQ1YsY0FBYyxzQkFDZCxrQkFBa0I7YUFDbEIsYUFBYTs7R0FDYixjQUFjO2NBQ2Y7WUFDRDtBQUFZLEVBQUUsc0JBQ1o7Z0JBQW9CO2VBQ3BCLGtCQUFrQixzQkFDbEIsT0FBTztRQUNQLFlBQVk7b0JBQ1o7UUFBVTtLQUNWLGNBQWM7ZUFDZDtVQUFrQixzQkFDbEIsYUFBYSxzQkFDYjtJQUFjLG1CQUNmO1dBQ0QsU0FBUyxFQUFFLENBQUM7O0dBQXlCLEVBQUU7QUFBaUIsQ0FBQyxlQUMxRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtQb3J0YWxNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHtDZGtTdGVwcGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvc3RlcHBlcic7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge0Vycm9yU3RhdGVNYXRjaGVyLCBNYXRDb21tb25Nb2R1bGUsIE1hdFJpcHBsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtNYXRTdGVwSGVhZGVyfSBmcm9tICcuL3N0ZXAtaGVhZGVyJztcbmltcG9ydCB7TWF0U3RlcExhYmVsfSBmcm9tICcuL3N0ZXAtbGFiZWwnO1xuaW1wb3J0IHtNYXRIb3Jpem9udGFsU3RlcHBlciwgTWF0U3RlcCwgTWF0U3RlcHBlciwgTWF0VmVydGljYWxTdGVwcGVyfSBmcm9tICcuL3N0ZXBwZXInO1xuaW1wb3J0IHtNYXRTdGVwcGVyTmV4dCwgTWF0U3RlcHBlclByZXZpb3VzfSBmcm9tICcuL3N0ZXBwZXItYnV0dG9uJztcbmltcG9ydCB7TWF0U3RlcHBlckljb259IGZyb20gJy4vc3RlcHBlci1pY29uJztcbmltcG9ydCB7TUFUX1NURVBQRVJfSU5UTF9QUk9WSURFUn0gZnJvbSAnLi9zdGVwcGVyLWludGwnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBNYXRDb21tb25Nb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFBvcnRhbE1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgQ2RrU3RlcHBlck1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdFJpcHBsZU1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE1hdENvbW1vbk1vZHVsZSxcbiAgICBNYXRIb3Jpem9udGFsU3RlcHBlcixcbiAgICBNYXRWZXJ0aWNhbFN0ZXBwZXIsXG4gICAgTWF0U3RlcCxcbiAgICBNYXRTdGVwTGFiZWwsXG4gICAgTWF0U3RlcHBlcixcbiAgICBNYXRTdGVwcGVyTmV4dCxcbiAgICBNYXRTdGVwcGVyUHJldmlvdXMsXG4gICAgTWF0U3RlcEhlYWRlcixcbiAgICBNYXRTdGVwcGVySWNvbixcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTWF0SG9yaXpvbnRhbFN0ZXBwZXIsXG4gICAgTWF0VmVydGljYWxTdGVwcGVyLFxuICAgIE1hdFN0ZXAsXG4gICAgTWF0U3RlcExhYmVsLFxuICAgIE1hdFN0ZXBwZXIsXG4gICAgTWF0U3RlcHBlck5leHQsXG4gICAgTWF0U3RlcHBlclByZXZpb3VzLFxuICAgIE1hdFN0ZXBIZWFkZXIsXG4gICAgTWF0U3RlcHBlckljb24sXG4gIF0sXG4gIHByb3ZpZGVyczogW01BVF9TVEVQUEVSX0lOVExfUFJPVklERVIsIEVycm9yU3RhdGVNYXRjaGVyXSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0U3RlcHBlck1vZHVsZSB7fVxuIl19