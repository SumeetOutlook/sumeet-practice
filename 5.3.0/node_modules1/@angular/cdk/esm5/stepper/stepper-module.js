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
var CdkStepperModule = /** @class */ (function () {
    function CdkStepperModule() {
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
    }], function () { return []; }, null); })();
    return CdkStepperModule;
}());
export { CdkStepperModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvc3RlcHBlci9zdGVwcGVyLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUM5QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUMxQyxPQUFPLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDcEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7O0FBRTdDO0FBRUMsSUFGRDtBQUNrQixJQWtCYSxDQUFDO29EQW5CL0IsUUFBUSxTQUFDO2NBQ1IsT0FBTyxFQUFFLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxzQkFDbkMsT0FBTyxFQUFFLDBCQUNQLE9BQU8sMEJBQ1AsVUFBVSwwQkFDVjtPQUFhLDBCQUNiLFlBQVksMEJBQ1osY0FBYywwQkFDZCxrQkFBa0IsdUJBQ25CO2lCQUNEO1NBQVksRUFBRTtjQUNaLE9BQU87O0NBQ1AsVUFBVSwwQkFDVixhQUFhLDBCQUNiLFlBQVksMEJBQ1osY0FBYzs7Q0FDZCxrQkFBa0I7bUJBQ25CO2VBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dEQUNRO0FBQUMsSUFBcUIsdUJBQUM7QUFDL0IsQ0FEK0IsQUFuQmhDLElBbUJnQztBQUNoQyxTQURhLGdCQUFnQjtBQUM3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrU3RlcHBlciwgQ2RrU3RlcH0gZnJvbSAnLi9zdGVwcGVyJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtDZGtTdGVwTGFiZWx9IGZyb20gJy4vc3RlcC1sYWJlbCc7XG5pbXBvcnQge0Nka1N0ZXBwZXJOZXh0LCBDZGtTdGVwcGVyUHJldmlvdXN9IGZyb20gJy4vc3RlcHBlci1idXR0b24nO1xuaW1wb3J0IHtDZGtTdGVwSGVhZGVyfSBmcm9tICcuL3N0ZXAtaGVhZGVyJztcbmltcG9ydCB7QmlkaU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQmlkaU1vZHVsZSwgQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW1xuICAgIENka1N0ZXAsXG4gICAgQ2RrU3RlcHBlcixcbiAgICBDZGtTdGVwSGVhZGVyLFxuICAgIENka1N0ZXBMYWJlbCxcbiAgICBDZGtTdGVwcGVyTmV4dCxcbiAgICBDZGtTdGVwcGVyUHJldmlvdXMsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENka1N0ZXAsXG4gICAgQ2RrU3RlcHBlcixcbiAgICBDZGtTdGVwSGVhZGVyLFxuICAgIENka1N0ZXBMYWJlbCxcbiAgICBDZGtTdGVwcGVyTmV4dCxcbiAgICBDZGtTdGVwcGVyUHJldmlvdXMsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2RrU3RlcHBlck1vZHVsZSB7fVxuIl19