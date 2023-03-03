/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @record
 */
import * as ɵngcc0 from '@angular/core';
export function CurrentDragData() { }
if (false) {
    /** @type {?} */
    CurrentDragData.prototype.clientX;
    /** @type {?} */
    CurrentDragData.prototype.clientY;
    /** @type {?} */
    CurrentDragData.prototype.dropData;
}
export class DraggableHelper {
    constructor() {
        this.currentDrag = new Subject();
    }
}
DraggableHelper.ɵfac = function DraggableHelper_Factory(t) { return new (t || DraggableHelper)(); };
DraggableHelper.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: DraggableHelper, factory: DraggableHelper.ɵfac, providedIn: 'root' });
/** @nocollapse */ DraggableHelper.ngInjectableDef = i0.defineInjectable({ factory: function DraggableHelper_Factory() { return new DraggableHelper(); }, token: DraggableHelper, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DraggableHelper, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
if (false) {
    /** @type {?} */
    DraggableHelper.prototype.currentDrag;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLWhlbHBlci5wcm92aWRlci5qcyIsInNvdXJjZXMiOlsibmc6L2FuZ3VsYXItZHJhZ2dhYmxlLWRyb3BwYWJsZS9saWIvZHJhZ2dhYmxlLWhlbHBlci5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDO0FBRUM7QUFBSTtBQUFXOztBQURoQixxQ0FJQztBQUNEO0FBQ1k7QUFDTyxJQU5qQixrQ0FBZ0I7QUFDbEI7QUFDRSxJQURBLGtDQUFnQjtBQUNsQjtBQUdDLElBSEMsbUNBQWM7QUFDaEI7QUFLQSxNQUFNLE9BQU8sZUFBZTtBQUM1QixJQUpBO0FBQ0UsUUFHQSxnQkFBVyxHQUFHLElBQUksT0FBTyxFQUE0QixDQUFDO0FBQ3hELEtBQUM7QUFDRDsyQ0FOQyxVQUFVLFNBQUMsa0JBQ1YsVUFBVSxFQUFFLE1BQU07WUFDbkIscUhBQ0k7QUFBQzs7Ozs7O2dEQUc4RztBQUFDO0FBQWE7QUFBcUIsSUFGckosc0NBQXNEO0FBQ3hEO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VycmVudERyYWdEYXRhIHtcbiAgY2xpZW50WDogbnVtYmVyO1xuICBjbGllbnRZOiBudW1iZXI7XG4gIGRyb3BEYXRhOiBhbnk7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVIZWxwZXIge1xuICBjdXJyZW50RHJhZyA9IG5ldyBTdWJqZWN0PFN1YmplY3Q8Q3VycmVudERyYWdEYXRhPj4oKTtcbn1cbiJdfQ==