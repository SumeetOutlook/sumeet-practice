/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BidiModule } from '@angular/cdk/bidi';
import { PlatformModule } from '@angular/cdk/platform';
import { NgModule } from '@angular/core';
import { CdkFixedSizeVirtualScroll } from './fixed-size-virtual-scroll';
import { CdkScrollable } from './scrollable';
import { CdkVirtualForOf } from './virtual-for-of';
import { CdkVirtualScrollViewport } from './virtual-scroll-viewport';
import * as ɵngcc0 from '@angular/core';
var ScrollingModule = /** @class */ (function () {
    function ScrollingModule() {
    }
ScrollingModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ScrollingModule });
ScrollingModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ScrollingModule_Factory(t) { return new (t || ScrollingModule)(); }, imports: [[BidiModule, PlatformModule], BidiModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ScrollingModule, { declarations: function () { return [CdkFixedSizeVirtualScroll,
        CdkScrollable,
        CdkVirtualForOf,
        CdkVirtualScrollViewport]; }, imports: function () { return [BidiModule, PlatformModule]; }, exports: function () { return [BidiModule,
        CdkFixedSizeVirtualScroll,
        CdkScrollable,
        CdkVirtualForOf,
        CdkVirtualScrollViewport]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ScrollingModule, [{
        type: NgModule,
        args: [{
                imports: [BidiModule, PlatformModule],
                exports: [
                    BidiModule,
                    CdkFixedSizeVirtualScroll,
                    CdkScrollable,
                    CdkVirtualForOf,
                    CdkVirtualScrollViewport,
                ],
                declarations: [
                    CdkFixedSizeVirtualScroll,
                    CdkScrollable,
                    CdkVirtualForOf,
                    CdkVirtualScrollViewport,
                ]
            }]
    }], function () { return []; }, null); })();
    return ScrollingModule;
}());
export { ScrollingModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsaW5nLW1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9zY3JvbGxpbmcvc2Nyb2xsaW5nLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDM0MsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDOztBQUVuRTtBQUN1QyxJQUR2QztBQUNpQixJQWVhLENBQUM7bURBaEI5QixRQUFRLFNBQUM7ZUFDUixPQUFPLEVBQUUsQ0FBQyxVQUFVLEVBQUUsY0FBYyxDQUFDLHNCQUNyQyxPQUFPLEVBQUUsMEJBQ1AsVUFBVSwwQkFDVix5QkFBeUI7SUFDekIsYUFBYSwwQkFDYixlQUFlLDBCQUNmLHdCQUF3Qix1QkFDekIsc0JBQ0QsWUFBWSxFQUFFO21CQUNaO3FCQUF5QjtzQkFDekIsYUFBYSwwQkFDYixlQUFlLDBCQUNmLHdCQUF3QjtLQUN6QixtQkFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnREFDUTtBQUFDLElBQW9CLHNCQUFDO0FBQzlCLENBRDhCLEFBaEIvQixJQWdCK0I7QUFDL0IsU0FEYSxlQUFlO0FBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7QmlkaU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHtQbGF0Zm9ybU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZGtGaXhlZFNpemVWaXJ0dWFsU2Nyb2xsfSBmcm9tICcuL2ZpeGVkLXNpemUtdmlydHVhbC1zY3JvbGwnO1xuaW1wb3J0IHtDZGtTY3JvbGxhYmxlfSBmcm9tICcuL3Njcm9sbGFibGUnO1xuaW1wb3J0IHtDZGtWaXJ0dWFsRm9yT2Z9IGZyb20gJy4vdmlydHVhbC1mb3Itb2YnO1xuaW1wb3J0IHtDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnR9IGZyb20gJy4vdmlydHVhbC1zY3JvbGwtdmlld3BvcnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQmlkaU1vZHVsZSwgUGxhdGZvcm1Nb2R1bGVdLFxuICBleHBvcnRzOiBbXG4gICAgQmlkaU1vZHVsZSxcbiAgICBDZGtGaXhlZFNpemVWaXJ0dWFsU2Nyb2xsLFxuICAgIENka1Njcm9sbGFibGUsXG4gICAgQ2RrVmlydHVhbEZvck9mLFxuICAgIENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ2RrRml4ZWRTaXplVmlydHVhbFNjcm9sbCxcbiAgICBDZGtTY3JvbGxhYmxlLFxuICAgIENka1ZpcnR1YWxGb3JPZixcbiAgICBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNjcm9sbGluZ01vZHVsZSB7fVxuIl19