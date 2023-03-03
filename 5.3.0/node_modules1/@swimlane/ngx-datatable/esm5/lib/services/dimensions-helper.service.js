import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
/**
 * Gets the width of the scrollbar.  Nesc for windows
 * http://stackoverflow.com/a/13382873/888165
 */
import * as ɵngcc0 from '@angular/core';
var DimensionsHelper = /** @class */ (function () {
    function DimensionsHelper() {
    }
    DimensionsHelper.prototype.getDimensions = function (element) {
        return element.getBoundingClientRect();
    };
DimensionsHelper.ɵfac = function DimensionsHelper_Factory(t) { return new (t || DimensionsHelper)(); };
DimensionsHelper.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: DimensionsHelper, factory: function (t) { return DimensionsHelper.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DimensionsHelper, [{
        type: Injectable
    }], function () { return []; }, null); })();
    return DimensionsHelper;
}());
export { DimensionsHelper };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGltZW5zaW9ucy1oZWxwZXIuc2VydmljZS5qcyIsInNvdXJjZXMiOlsibmc6L0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2xpYi9zZXJ2aWNlcy9kaW1lbnNpb25zLWhlbHBlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5EO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDb0IsSUFEcEI7QUFBOEIsSUFJOUIsQ0FBQztBQUNELElBSkUsd0NBQWEsR0FBYixVQUFjLE9BQWdCO0FBQUksUUFDaEMsT0FBTyxPQUFPLENBQUMscUJBQXFCLEVBQUUsQ0FBQztBQUMzQyxJQUFFLENBQUM7SUFIVSxnQkFBZ0Isd0JBRDVCLFVBQVUsRUFBRSxRQUNBLGdCQUFnQixDQUk1Qjs7OztnREFDRDtBQUFDLElBREQsdUJBQUM7QUFDQSxDQURBLEFBSkQsSUFJQztBQUNELFNBTGEsZ0JBQWdCO0FBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogR2V0cyB0aGUgd2lkdGggb2YgdGhlIHNjcm9sbGJhci4gIE5lc2MgZm9yIHdpbmRvd3NcbiAqIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzEzMzgyODczLzg4ODE2NVxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGltZW5zaW9uc0hlbHBlciB7XG4gIGdldERpbWVuc2lvbnMoZWxlbWVudDogRWxlbWVudCk6IENsaWVudFJlY3Qge1xuICAgIHJldHVybiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB9XG59XG4iXX0=