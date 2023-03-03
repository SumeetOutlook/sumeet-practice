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
var DraggableHelper = /** @class */ (function () {
    function DraggableHelper() {
        this.currentDrag = new Subject();
    }
    /** @nocollapse */ DraggableHelper.ngInjectableDef = i0.defineInjectable({ factory: function DraggableHelper_Factory() { return new DraggableHelper(); }, token: DraggableHelper, providedIn: "root" });
DraggableHelper.ɵfac = function DraggableHelper_Factory(t) { return new (t || DraggableHelper)(); };
DraggableHelper.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: DraggableHelper, factory: function (t) { return DraggableHelper.ɵfac(t); }, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DraggableHelper, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
    return DraggableHelper;
}());
export { DraggableHelper };
if (false) {
    /** @type {?} */
    DraggableHelper.prototype.currentDrag;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLWhlbHBlci5wcm92aWRlci5qcyIsInNvdXJjZXMiOlsibmc6L2FuZ3VsYXItZHJhZ2dhYmxlLWRyb3BwYWJsZS9saWIvZHJhZ2dhYmxlLWhlbHBlci5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDO0FBRUM7QUFBSTtBQUFXOztBQURoQixxQ0FJQztBQUNEO0FBQ1k7QUFDTyxJQU5qQixrQ0FBZ0I7QUFDbEI7QUFDRSxJQURBLGtDQUFnQjtBQUNsQjtBQUdDLElBSEMsbUNBQWM7QUFDaEI7QUFFQTtBQUdZLElBSFo7QUFDZSxRQUdiLGdCQUFXLEdBQUcsSUFBSSxPQUFPLEVBQTRCLENBQUM7QUFDeEQsS0FBQyxBQUZRO21EQUhSLFVBQVUsU0FBQyxzQkFDVixVQUFVLEVBQUUsTUFBTSxtQkFDbkIsaklBQ1M7Ozs7Ozs7O2dEQUdrSDtBQUFDLDBCQWY3SDtBQUFFLENBY0QsQUFMRCxJQUtDO0FBQ0QsU0FIYSxlQUFlO0FBQzNCO0FBQWE7QUFBcUIsSUFBakMsc0NBQXNEO0FBQ3hEO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VycmVudERyYWdEYXRhIHtcbiAgY2xpZW50WDogbnVtYmVyO1xuICBjbGllbnRZOiBudW1iZXI7XG4gIGRyb3BEYXRhOiBhbnk7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVIZWxwZXIge1xuICBjdXJyZW50RHJhZyA9IG5ldyBTdWJqZWN0PFN1YmplY3Q8Q3VycmVudERyYWdEYXRhPj4oKTtcbn1cbiJdfQ==