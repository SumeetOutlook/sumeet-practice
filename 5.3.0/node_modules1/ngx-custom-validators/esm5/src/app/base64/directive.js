import * as tslib_1 from "tslib";
import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { base64 } from './validator';
import * as ɵngcc0 from '@angular/core';
var BASE64_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return Base64Validator; }),
    multi: true
};
var Base64Validator = /** @class */ (function () {
    function Base64Validator() {
    }
    Base64Validator.prototype.validate = function (c) {
        return base64(c);
    };
Base64Validator.ɵfac = function Base64Validator_Factory(t) { return new (t || Base64Validator)(); };
Base64Validator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: Base64Validator, selectors: [["", "base64", "", "formControlName", ""], ["", "base64", "", "formControl", ""], ["", "base64", "", "ngModel", ""]], features: [ɵngcc0.ɵɵProvidersFeature([BASE64_VALIDATOR])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Base64Validator, [{
        type: Directive,
        args: [{
                selector: '[base64][formControlName],[base64][formControl],[base64][ngModel]',
                providers: [BASE64_VALIDATOR]
            }]
    }], function () { return []; }, null); })();
    return Base64Validator;
}());
export { Base64Validator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmd4LWN1c3RvbS12YWxpZGF0b3JzL3NyYy9hcHAvYmFzZTY0L2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBOEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQUVyQyxJQUFNLGdCQUFnQixHQUFRO0FBQzlCLElBQUUsT0FBTyxFQUFFLGFBQWE7QUFDeEIsSUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxlQUFlLEVBQWYsQ0FBZSxDQUFDO0FBQ2hELElBQUUsS0FBSyxFQUFFLElBQUk7QUFDYixDQUFDLENBQUM7QUFNRjtBQUFtRCxJQUFuRDtBQUE2QixJQUk3QixDQUFDO0FBQ0QsSUFKRSxrQ0FBUSxHQUFSLFVBQVMsQ0FBa0I7QUFBSSxRQUM3QixPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyQixJQUFFLENBQUM7SUFIVSxlQUFlLGdDQUozQixTQUFTLENBQUMsY0FDVCxRQUFRLEVBQUU7bURBQW1FLGNBQzdFLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFVBQzlCLENBQUMsUUFDVyxlQUFlLENBSTNCOzs7Ozs7O2dEQUNEO0FBQUMsSUFERCxzQkFBQztBQUNBLENBREEsQUFKRCxJQUlDO0FBQ0QsU0FMYSxlQUFlO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBiYXNlNjQgfSBmcm9tICcuL3ZhbGlkYXRvcic7XG5cbmNvbnN0IEJBU0U2NF9WQUxJREFUT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQmFzZTY0VmFsaWRhdG9yKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tiYXNlNjRdW2Zvcm1Db250cm9sTmFtZV0sW2Jhc2U2NF1bZm9ybUNvbnRyb2xdLFtiYXNlNjRdW25nTW9kZWxdJyxcbiAgcHJvdmlkZXJzOiBbQkFTRTY0X1ZBTElEQVRPUl1cbn0pXG5leHBvcnQgY2xhc3MgQmFzZTY0VmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0ge1xuICAgIHJldHVybiBiYXNlNjQoYyk7XG4gIH1cbn1cbiJdfQ==