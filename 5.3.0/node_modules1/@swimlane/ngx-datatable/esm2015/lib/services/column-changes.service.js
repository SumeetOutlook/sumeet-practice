import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
/**
 * service to make DatatableComponent aware of changes to
 * input bindings of DataTableColumnDirective
 */
import * as ɵngcc0 from '@angular/core';
let ColumnChangesService = class ColumnChangesService {
    constructor() {
        this.columnInputChanges = new Subject();
    }
    get columnInputChanges$() {
        return this.columnInputChanges.asObservable();
    }
    onInputChange() {
        this.columnInputChanges.next();
    }
};
ColumnChangesService.ɵfac = function ColumnChangesService_Factory(t) { return new (t || ColumnChangesService)(); };
ColumnChangesService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: ColumnChangesService, factory: function (t) { return ColumnChangesService.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ColumnChangesService, [{
        type: Injectable
    }], function () { return []; }, null); })();
export { ColumnChangesService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWNoYW5nZXMuc2VydmljZS5qcyIsInNvdXJjZXMiOlsibmc6L0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2xpYi9zZXJ2aWNlcy9jb2x1bW4tY2hhbmdlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFM0M7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtBQUNqQyxJQURBO0FBQWdCLFFBQ04sdUJBQWtCLEdBQUcsSUFBSSxPQUFPLEVBQWEsQ0FBQztBQUN4RCxJQVFBLENBQUM7QUFDRCxJQVJFLElBQUksbUJBQW1CO0FBQUssUUFDMUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDbEQsSUFBRSxDQUFDO0FBQ0gsSUFDRSxhQUFhO0FBQUssUUFDaEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO0FBQ25DLElBQUUsQ0FBQztBQUNILENBQUMsQ0FBQTtBQVZZLG9CQUFvQixvQkFEaEMsVUFBVSxFQUFFLElBQ0Esb0JBQW9CLENBVWhDOzs7O2dEQUNEO0FBQUMsU0FYWSxvQkFBb0I7QUFDaEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBzZXJ2aWNlIHRvIG1ha2UgRGF0YXRhYmxlQ29tcG9uZW50IGF3YXJlIG9mIGNoYW5nZXMgdG9cbiAqIGlucHV0IGJpbmRpbmdzIG9mIERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZVxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29sdW1uQ2hhbmdlc1NlcnZpY2Uge1xuICBwcml2YXRlIGNvbHVtbklucHV0Q2hhbmdlcyA9IG5ldyBTdWJqZWN0PHVuZGVmaW5lZD4oKTtcblxuICBnZXQgY29sdW1uSW5wdXRDaGFuZ2VzJCgpOiBPYnNlcnZhYmxlPHVuZGVmaW5lZD4ge1xuICAgIHJldHVybiB0aGlzLmNvbHVtbklucHV0Q2hhbmdlcy5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIG9uSW5wdXRDaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5jb2x1bW5JbnB1dENoYW5nZXMubmV4dCgpO1xuICB9XG59XG4iXX0=