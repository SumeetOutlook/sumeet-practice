import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
/**
 * Gets the width of the scrollbar.  Nesc for windows
 * http://stackoverflow.com/a/13382873/888165
 */
import * as ɵngcc0 from '@angular/core';
let DimensionsHelper = class DimensionsHelper {
    getDimensions(element) {
        return element.getBoundingClientRect();
    }
};
DimensionsHelper.ɵfac = function DimensionsHelper_Factory(t) { return new (t || DimensionsHelper)(); };
DimensionsHelper.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: DimensionsHelper, factory: function (t) { return DimensionsHelper.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DimensionsHelper, [{
        type: Injectable
    }], null, null); })();
export { DimensionsHelper };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGltZW5zaW9ucy1oZWxwZXIuc2VydmljZS5qcyIsInNvdXJjZXMiOlsibmc6L0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2xpYi9zZXJ2aWNlcy9kaW1lbnNpb25zLWhlbHBlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5EO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7QUFDN0IsSUFBRSxhQUFhLENBQUMsT0FBZ0I7QUFBSSxRQUNoQyxPQUFPLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0FBQzNDLElBQUUsQ0FBQztBQUNILENBQUMsQ0FBQTtBQUpZLGdCQUFnQixvQkFENUIsVUFBVSxFQUFFLElBQ0EsZ0JBQWdCLENBSTVCOzs7OzBCQUNEO0FBQUMsU0FMWSxnQkFBZ0I7QUFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBHZXRzIHRoZSB3aWR0aCBvZiB0aGUgc2Nyb2xsYmFyLiAgTmVzYyBmb3Igd2luZG93c1xuICogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTMzODI4NzMvODg4MTY1XG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEaW1lbnNpb25zSGVscGVyIHtcbiAgZ2V0RGltZW5zaW9ucyhlbGVtZW50OiBFbGVtZW50KTogQ2xpZW50UmVjdCB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIH1cbn1cbiJdfQ==