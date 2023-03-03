/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ObserversModule } from '@angular/cdk/observers';
import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CdkMonitorFocus } from './focus-monitor/focus-monitor';
import { CdkTrapFocus } from './focus-trap/focus-trap';
import { HighContrastModeDetector } from './high-contrast-mode/high-contrast-mode-detector';
import { CdkAriaLive } from './live-announcer/live-announcer';
import * as ɵngcc0 from '@angular/core';
var A11yModule = /** @class */ (function () {
    function A11yModule(highContrastModeDetector) {
        highContrastModeDetector._applyBodyHighContrastModeCssClasses();
    }
    /** @nocollapse */
    A11yModule.ctorParameters = function () { return [
        { type: HighContrastModeDetector }
    ]; };
A11yModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: A11yModule });
A11yModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function A11yModule_Factory(t) { return new (t || A11yModule)(ɵngcc0.ɵɵinject(HighContrastModeDetector)); }, imports: [[CommonModule, PlatformModule, ObserversModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(A11yModule, { declarations: function () { return [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]; }, imports: function () { return [CommonModule, PlatformModule, ObserversModule]; }, exports: function () { return [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(A11yModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, PlatformModule, ObserversModule],
                declarations: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
                exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
            }]
    }], function () { return [{ type: HighContrastModeDetector }]; }, null); })();
    return A11yModule;
}());
export { A11yModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYTExeS1tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvYTExeS9hMTF5LW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3JELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLGtEQUFrRCxDQUFDO0FBQzFGLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQzs7QUFHNUQ7QUFDa0MsSUFLaEMsb0JBQVksd0JBQWtEO0FBQ2hFLFFBQUksd0JBQXdCLENBQUMsb0NBQW9DLEVBQUUsQ0FBQztBQUNwRSxJQUFFLENBQUMsQUFITTtBQUFDO3VCQUxULFFBQVEsU0FBQyx4Q0FNSDtPQUxMLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSwvQkFLb0MsZ0JBVnRELHdCQUF3QjtFQUtRLEVBQUUsSkFMUDtTQUtzQixDQUFDLHNCQUN4RCxZQUFZLEVBQUUsQ0FBQyxXQUFXLEVBQUU7T0FBWSxFQUFFLGVBQWUsQ0FBQyxzQkFDMUQsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxlQUFlLENBQUMsbUJBQ3REOzs7Ozs7Ozs7a0ZBUjJDO0FBQUMsSUFhN0MsaUJBQUM7QUFDQSxDQURBLEFBVEQsSUFTQztBQUNELFNBTGEsVUFBVTtBQUN0QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge09ic2VydmVyc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL29ic2VydmVycyc7XG5pbXBvcnQge1BsYXRmb3JtTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrTW9uaXRvckZvY3VzfSBmcm9tICcuL2ZvY3VzLW1vbml0b3IvZm9jdXMtbW9uaXRvcic7XG5pbXBvcnQge0Nka1RyYXBGb2N1c30gZnJvbSAnLi9mb2N1cy10cmFwL2ZvY3VzLXRyYXAnO1xuaW1wb3J0IHtIaWdoQ29udHJhc3RNb2RlRGV0ZWN0b3J9IGZyb20gJy4vaGlnaC1jb250cmFzdC1tb2RlL2hpZ2gtY29udHJhc3QtbW9kZS1kZXRlY3Rvcic7XG5pbXBvcnQge0Nka0FyaWFMaXZlfSBmcm9tICcuL2xpdmUtYW5ub3VuY2VyL2xpdmUtYW5ub3VuY2VyJztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBQbGF0Zm9ybU1vZHVsZSwgT2JzZXJ2ZXJzTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbQ2RrQXJpYUxpdmUsIENka1RyYXBGb2N1cywgQ2RrTW9uaXRvckZvY3VzXSxcbiAgZXhwb3J0czogW0Nka0FyaWFMaXZlLCBDZGtUcmFwRm9jdXMsIENka01vbml0b3JGb2N1c10sXG59KVxuZXhwb3J0IGNsYXNzIEExMXlNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihoaWdoQ29udHJhc3RNb2RlRGV0ZWN0b3I6IEhpZ2hDb250cmFzdE1vZGVEZXRlY3Rvcikge1xuICAgIGhpZ2hDb250cmFzdE1vZGVEZXRlY3Rvci5fYXBwbHlCb2R5SGlnaENvbnRyYXN0TW9kZUNzc0NsYXNzZXMoKTtcbiAgfVxufVxuIl19