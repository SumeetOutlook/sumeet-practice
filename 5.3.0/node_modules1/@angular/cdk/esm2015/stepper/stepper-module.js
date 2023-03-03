/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/stepper/stepper-module.ts
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
import { CdkStepper, CdkStep } from './stepper';
import { CommonModule } from '@angular/common';
import { CdkStepLabel } from './step-label';
import { CdkStepperNext, CdkStepperPrevious } from './stepper-button';
import { CdkStepHeader } from './step-header';
import { BidiModule } from '@angular/cdk/bidi';
import * as ɵngcc0 from '@angular/core';
export class CdkStepperModule {
}
CdkStepperModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CdkStepperModule });
CdkStepperModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CdkStepperModule_Factory(t) { return new (t || CdkStepperModule)(); }, imports: [[BidiModule, CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CdkStepperModule, { declarations: function () { return [CdkStep,
        CdkStepper,
        CdkStepHeader,
        CdkStepLabel,
        CdkStepperNext,
        CdkStepperPrevious]; }, imports: function () { return [BidiModule, CommonModule]; }, exports: function () { return [CdkStep,
        CdkStepper,
        CdkStepHeader,
        CdkStepLabel,
        CdkStepperNext,
        CdkStepperPrevious]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkStepperModule, [{
        type: NgModule,
        args: [{
                imports: [BidiModule, CommonModule],
                exports: [
                    CdkStep,
                    CdkStepper,
                    CdkStepHeader,
                    CdkStepLabel,
                    CdkStepperNext,
                    CdkStepperPrevious,
                ],
                declarations: [
                    CdkStep,
                    CdkStepper,
                    CdkStepHeader,
                    CdkStepLabel,
                    CdkStepperNext,
                    CdkStepperPrevious,
                ]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvc3RlcHBlci9zdGVwcGVyLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxVQUFVLEVBQUUsT0FBTyxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQzlDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQzFDLE9BQU8sRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNwRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQzs7QUFxQjdDLE1BQU0sT0FBTyxnQkFBZ0I7QUFBRzs0Q0FuQi9CLFFBQVEsU0FBQztFQUNSLE9BQU8sRUFBRSxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsa0JBQ25DLE9BQU8sRUFBRSxzQkFDUCxPQUFPLHNCQUNQLFVBQVUsc0JBQ1YsYUFBYTtDQUNiLFlBQVksc0JBQ1osY0FBYyxzQkFDZCxrQkFBa0IsbUJBQ25CLGtCQUNELFlBQVksRUFBRTtLQUNaLE9BQU87Y0FDUDtDQUFVO0NBQ1YsYUFBYTtZQUNiLFlBQVksc0JBQ1osY0FBYyxzQkFDZCxrQkFBa0IsbUJBQ25CO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Nka1N0ZXBwZXIsIENka1N0ZXB9IGZyb20gJy4vc3RlcHBlcic7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7Q2RrU3RlcExhYmVsfSBmcm9tICcuL3N0ZXAtbGFiZWwnO1xuaW1wb3J0IHtDZGtTdGVwcGVyTmV4dCwgQ2RrU3RlcHBlclByZXZpb3VzfSBmcm9tICcuL3N0ZXBwZXItYnV0dG9uJztcbmltcG9ydCB7Q2RrU3RlcEhlYWRlcn0gZnJvbSAnLi9zdGVwLWhlYWRlcic7XG5pbXBvcnQge0JpZGlNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0JpZGlNb2R1bGUsIENvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtcbiAgICBDZGtTdGVwLFxuICAgIENka1N0ZXBwZXIsXG4gICAgQ2RrU3RlcEhlYWRlcixcbiAgICBDZGtTdGVwTGFiZWwsXG4gICAgQ2RrU3RlcHBlck5leHQsXG4gICAgQ2RrU3RlcHBlclByZXZpb3VzLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDZGtTdGVwLFxuICAgIENka1N0ZXBwZXIsXG4gICAgQ2RrU3RlcEhlYWRlcixcbiAgICBDZGtTdGVwTGFiZWwsXG4gICAgQ2RrU3RlcHBlck5leHQsXG4gICAgQ2RrU3RlcHBlclByZXZpb3VzLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENka1N0ZXBwZXJNb2R1bGUge31cbiJdfQ==