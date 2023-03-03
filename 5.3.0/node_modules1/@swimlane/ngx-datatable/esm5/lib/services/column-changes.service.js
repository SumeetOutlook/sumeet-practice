import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
/**
 * service to make DatatableComponent aware of changes to
 * input bindings of DataTableColumnDirective
 */
import * as ɵngcc0 from '@angular/core';
var ColumnChangesService = /** @class */ (function () {
    function ColumnChangesService() {
        this.columnInputChanges = new Subject();
    }
    Object.defineProperty(ColumnChangesService.prototype, "columnInputChanges$", {
        get: function () {
            return this.columnInputChanges.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    ColumnChangesService.prototype.onInputChange = function () {
        this.columnInputChanges.next();
    };
ColumnChangesService.ɵfac = function ColumnChangesService_Factory(t) { return new (t || ColumnChangesService)(); };
ColumnChangesService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: ColumnChangesService, factory: function (t) { return ColumnChangesService.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ColumnChangesService, [{
        type: Injectable
    }], function () { return []; }, null); })();
    return ColumnChangesService;
}());
export { ColumnChangesService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWNoYW5nZXMuc2VydmljZS5qcyIsInNvdXJjZXMiOlsibmc6L0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2xpYi9zZXJ2aWNlcy9jb2x1bW4tY2hhbmdlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFM0M7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNvQixJQURwQjtBQUFrQyxRQUN4Qix1QkFBa0IsR0FBRyxJQUFJLE9BQU8sRUFBYSxDQUFDO0FBQ3hELElBUUEsQ0FBQztBQUNELElBUkUsc0JBQUkscURBQW1CO0FBQUksYUFBM0I7QUFBYyxZQUNaLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0FBQ2xELFFBQUUsQ0FBQztBQUVIO0FBQ0E7QUFBMkIsT0FIeEI7QUFDSCxJQUNFLDRDQUFhLEdBQWI7QUFBYyxRQUNaLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNuQyxJQUFFLENBQUM7SUFUVSxvQkFBb0Isd0JBRGhDLFVBQVUsRUFBRSxRQUNBLG9CQUFvQixDQVVoQzs7OztnREFDRDtBQUFDLElBREQsMkJBQUM7QUFDQSxDQURBLEFBVkQsSUFVQztBQUNELFNBWGEsb0JBQW9CO0FBQ2hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogc2VydmljZSB0byBtYWtlIERhdGF0YWJsZUNvbXBvbmVudCBhd2FyZSBvZiBjaGFuZ2VzIHRvXG4gKiBpbnB1dCBiaW5kaW5ncyBvZiBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmVcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbHVtbkNoYW5nZXNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjb2x1bW5JbnB1dENoYW5nZXMgPSBuZXcgU3ViamVjdDx1bmRlZmluZWQ+KCk7XG5cbiAgZ2V0IGNvbHVtbklucHV0Q2hhbmdlcyQoKTogT2JzZXJ2YWJsZTx1bmRlZmluZWQ+IHtcbiAgICByZXR1cm4gdGhpcy5jb2x1bW5JbnB1dENoYW5nZXMuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBvbklucHV0Q2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMuY29sdW1uSW5wdXRDaGFuZ2VzLm5leHQoKTtcbiAgfVxufVxuIl19