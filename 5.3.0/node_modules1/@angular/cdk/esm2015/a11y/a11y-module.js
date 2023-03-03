/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/a11y/a11y-module.ts
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
import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CdkMonitorFocus } from './focus-monitor/focus-monitor';
import { CdkTrapFocus } from './focus-trap/focus-trap';
import { HighContrastModeDetector } from './high-contrast-mode/high-contrast-mode-detector';
import { CdkAriaLive } from './live-announcer/live-announcer';
import * as ɵngcc0 from '@angular/core';
export class A11yModule {
    /**
     * @param {?} highContrastModeDetector
     */
    constructor(highContrastModeDetector) {
        highContrastModeDetector._applyBodyHighContrastModeCssClasses();
    }
}
A11yModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: A11yModule });
A11yModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function A11yModule_Factory(t) { return new (t || A11yModule)(ɵngcc0.ɵɵinject(HighContrastModeDetector)); }, imports: [[CommonModule, PlatformModule, ObserversModule]] });
/** @nocollapse */
A11yModule.ctorParameters = () => [
    { type: HighContrastModeDetector }
];
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(A11yModule, { declarations: function () { return [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]; }, imports: function () { return [CommonModule, PlatformModule, ObserversModule]; }, exports: function () { return [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(A11yModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, PlatformModule, ObserversModule],
                declarations: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
                exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
            }]
    }], function () { return [{ type: HighContrastModeDetector }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYTExeS1tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvYTExeS9hMTF5LW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDckQsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sa0RBQWtELENBQUM7QUFDMUYsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGlDQUFpQyxDQUFDOztBQVE1RCxNQUFNLE9BQU8sVUFBVTtBQUN2QjtBQUFRO0FBQTJDO0FBQVEsSUFBekQsWUFBWSx3QkFBa0Q7QUFDaEUsUUFBSSx3QkFBd0IsQ0FBQyxvQ0FBb0MsRUFBRSxDQUFDO0FBQ3BFLElBQUUsQ0FBQztBQUNIO3NDQVRDLFFBQVEsU0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxjQUFjLEVBQUUsZUFBZSxDQUFDLGtCQUN4RCxZQUFZLEVBQUUsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLGVBQWUsQ0FBQyxrQkFDMUQsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxlQUFlLENBQUMsYUFFbEQ7Q0FESixEQUNLO0FBQW1CO0FBQ1UsWUFWM0Isd0JBQXdCO0FBQUc7Ozs7Ozs7OztrRkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7T2JzZXJ2ZXJzTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvb2JzZXJ2ZXJzJztcbmltcG9ydCB7UGxhdGZvcm1Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZGtNb25pdG9yRm9jdXN9IGZyb20gJy4vZm9jdXMtbW9uaXRvci9mb2N1cy1tb25pdG9yJztcbmltcG9ydCB7Q2RrVHJhcEZvY3VzfSBmcm9tICcuL2ZvY3VzLXRyYXAvZm9jdXMtdHJhcCc7XG5pbXBvcnQge0hpZ2hDb250cmFzdE1vZGVEZXRlY3Rvcn0gZnJvbSAnLi9oaWdoLWNvbnRyYXN0LW1vZGUvaGlnaC1jb250cmFzdC1tb2RlLWRldGVjdG9yJztcbmltcG9ydCB7Q2RrQXJpYUxpdmV9IGZyb20gJy4vbGl2ZS1hbm5vdW5jZXIvbGl2ZS1hbm5vdW5jZXInO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFBsYXRmb3JtTW9kdWxlLCBPYnNlcnZlcnNNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtDZGtBcmlhTGl2ZSwgQ2RrVHJhcEZvY3VzLCBDZGtNb25pdG9yRm9jdXNdLFxuICBleHBvcnRzOiBbQ2RrQXJpYUxpdmUsIENka1RyYXBGb2N1cywgQ2RrTW9uaXRvckZvY3VzXSxcbn0pXG5leHBvcnQgY2xhc3MgQTExeU1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKGhpZ2hDb250cmFzdE1vZGVEZXRlY3RvcjogSGlnaENvbnRyYXN0TW9kZURldGVjdG9yKSB7XG4gICAgaGlnaENvbnRyYXN0TW9kZURldGVjdG9yLl9hcHBseUJvZHlIaWdoQ29udHJhc3RNb2RlQ3NzQ2xhc3NlcygpO1xuICB9XG59XG4iXX0=