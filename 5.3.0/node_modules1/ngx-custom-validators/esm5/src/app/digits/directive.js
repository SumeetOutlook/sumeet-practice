import * as tslib_1 from "tslib";
import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { digits } from './validator';
import * as ɵngcc0 from '@angular/core';
var DIGITS_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return DigitsValidator; }),
    multi: true
};
var DigitsValidator = /** @class */ (function () {
    function DigitsValidator() {
    }
    DigitsValidator.prototype.validate = function (c) {
        return digits(c);
    };
DigitsValidator.ɵfac = function DigitsValidator_Factory(t) { return new (t || DigitsValidator)(); };
DigitsValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DigitsValidator, selectors: [["", "digits", "", "formControlName", ""], ["", "digits", "", "formControl", ""], ["", "digits", "", "ngModel", ""]], features: [ɵngcc0.ɵɵProvidersFeature([DIGITS_VALIDATOR])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DigitsValidator, [{
        type: Directive,
        args: [{
                selector: '[digits][formControlName],[digits][formControl],[digits][ngModel]',
                providers: [DIGITS_VALIDATOR]
            }]
    }], function () { return []; }, null); })();
    return DigitsValidator;
}());
export { DigitsValidator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmd4LWN1c3RvbS12YWxpZGF0b3JzL3NyYy9hcHAvZGlnaXRzL2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBOEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQUVyQyxJQUFNLGdCQUFnQixHQUFRO0FBQzlCLElBQUUsT0FBTyxFQUFFLGFBQWE7QUFDeEIsSUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxlQUFlLEVBQWYsQ0FBZSxDQUFDO0FBQ2hELElBQUUsS0FBSyxFQUFFLElBQUk7QUFDYixDQUFDLENBQUM7QUFNRjtBQUFtRCxJQUFuRDtBQUE2QixJQUk3QixDQUFDO0FBQ0QsSUFKRSxrQ0FBUSxHQUFSLFVBQVMsQ0FBa0I7QUFBSSxRQUM3QixPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyQixJQUFFLENBQUM7SUFIVSxlQUFlLGdDQUozQixTQUFTLENBQUMsY0FDVCxRQUFRLEVBQUU7bURBQW1FLGNBQzdFLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFVBQzlCLENBQUMsUUFDVyxlQUFlLENBSTNCOzs7Ozs7O2dEQUNEO0FBQUMsSUFERCxzQkFBQztBQUNBLENBREEsQUFKRCxJQUlDO0FBQ0QsU0FMYSxlQUFlO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBkaWdpdHMgfSBmcm9tICcuL3ZhbGlkYXRvcic7XG5cbmNvbnN0IERJR0lUU19WQUxJREFUT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRGlnaXRzVmFsaWRhdG9yKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tkaWdpdHNdW2Zvcm1Db250cm9sTmFtZV0sW2RpZ2l0c11bZm9ybUNvbnRyb2xdLFtkaWdpdHNdW25nTW9kZWxdJyxcbiAgcHJvdmlkZXJzOiBbRElHSVRTX1ZBTElEQVRPUl1cbn0pXG5leHBvcnQgY2xhc3MgRGlnaXRzVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0ge1xuICAgIHJldHVybiBkaWdpdHMoYyk7XG4gIH1cbn1cbiJdfQ==