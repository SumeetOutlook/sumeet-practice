import * as tslib_1 from "tslib";
import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { number } from './validator';
import * as ɵngcc0 from '@angular/core';
var NUMBER_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return NumberValidator; }),
    multi: true
};
var NumberValidator = /** @class */ (function () {
    function NumberValidator() {
    }
    NumberValidator.prototype.validate = function (c) {
        return number(c);
    };
NumberValidator.ɵfac = function NumberValidator_Factory(t) { return new (t || NumberValidator)(); };
NumberValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NumberValidator, selectors: [["", "number", "", "formControlName", ""], ["", "number", "", "formControl", ""], ["", "number", "", "ngModel", ""]], features: [ɵngcc0.ɵɵProvidersFeature([NUMBER_VALIDATOR])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NumberValidator, [{
        type: Directive,
        args: [{
                selector: '[number][formControlName],[number][formControl],[number][ngModel]',
                providers: [NUMBER_VALIDATOR]
            }]
    }], function () { return []; }, null); })();
    return NumberValidator;
}());
export { NumberValidator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmd4LWN1c3RvbS12YWxpZGF0b3JzL3NyYy9hcHAvbnVtYmVyL2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBOEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQUVyQyxJQUFNLGdCQUFnQixHQUFRO0FBQzlCLElBQUUsT0FBTyxFQUFFLGFBQWE7QUFDeEIsSUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxlQUFlLEVBQWYsQ0FBZSxDQUFDO0FBQ2hELElBQUUsS0FBSyxFQUFFLElBQUk7QUFDYixDQUFDLENBQUM7QUFNRjtBQUFtRCxJQUFuRDtBQUE2QixJQUk3QixDQUFDO0FBQ0QsSUFKRSxrQ0FBUSxHQUFSLFVBQVMsQ0FBa0I7QUFBSSxRQUM3QixPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyQixJQUFFLENBQUM7SUFIVSxlQUFlLGdDQUozQixTQUFTLENBQUMsY0FDVCxRQUFRLEVBQUU7bURBQW1FLGNBQzdFLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFVBQzlCLENBQUMsUUFDVyxlQUFlLENBSTNCOzs7Ozs7O2dEQUNEO0FBQUMsSUFERCxzQkFBQztBQUNBLENBREEsQUFKRCxJQUlDO0FBQ0QsU0FMYSxlQUFlO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBudW1iZXIgfSBmcm9tICcuL3ZhbGlkYXRvcic7XG5cbmNvbnN0IE5VTUJFUl9WQUxJREFUT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnVtYmVyVmFsaWRhdG9yKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tudW1iZXJdW2Zvcm1Db250cm9sTmFtZV0sW251bWJlcl1bZm9ybUNvbnRyb2xdLFtudW1iZXJdW25nTW9kZWxdJyxcbiAgcHJvdmlkZXJzOiBbTlVNQkVSX1ZBTElEQVRPUl1cbn0pXG5leHBvcnQgY2xhc3MgTnVtYmVyVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0ge1xuICAgIHJldHVybiBudW1iZXIoYyk7XG4gIH1cbn1cbiJdfQ==