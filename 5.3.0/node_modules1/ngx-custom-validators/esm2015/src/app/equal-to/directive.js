import * as tslib_1 from "tslib";
import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS, FormControl } from '@angular/forms';
import { equalTo } from './validator';
import * as ɵngcc0 from '@angular/core';
const EQUAL_TO_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => EqualToValidator),
    multi: true
};
let EqualToValidator = class EqualToValidator {
    ngOnInit() {
        this.validator = equalTo(this.equalTo);
    }
    validate(c) {
        return this.validator(c);
    }
};
EqualToValidator.ɵfac = function EqualToValidator_Factory(t) { return new (t || EqualToValidator)(); };
EqualToValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: EqualToValidator, selectors: [["", "equalTo", "", "formControlName", ""], ["", "equalTo", "", "formControl", ""], ["", "equalTo", "", "ngModel", ""]], inputs: { equalTo: "equalTo" }, features: [ɵngcc0.ɵɵProvidersFeature([EQUAL_TO_VALIDATOR])] });
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", FormControl)
], EqualToValidator.prototype, "equalTo", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(EqualToValidator, [{
        type: Directive,
        args: [{
                selector: '[equalTo][formControlName],[equalTo][formControl],[equalTo][ngModel]',
                providers: [EQUAL_TO_VALIDATOR]
            }]
    }], null, { equalTo: [{
            type: Input
        }] }); })();
export { EqualToValidator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmd4LWN1c3RvbS12YWxpZGF0b3JzL3NyYy9hcHAvZXF1YWwtdG8vZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBYSxXQUFXLEVBQWdDLE1BQU0sZ0JBQWdCLENBQUM7QUFFckcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFFdEMsTUFBTSxrQkFBa0IsR0FBUTtBQUNoQyxJQUFFLE9BQU8sRUFBRSxhQUFhO0FBQ3hCLElBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztBQUNqRCxJQUFFLEtBQUssRUFBRSxJQUFJO0FBQ2IsQ0FBQyxDQUFDO0FBTUYsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7QUFBRyxJQUs5QixRQUFRO0FBQ1YsUUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDM0MsSUFBRSxDQUFDO0FBQ0gsSUFDRSxRQUFRLENBQUMsQ0FBa0I7QUFBSSxRQUM3QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0IsSUFBRSxDQUFDO0FBQ0gsQ0FBQzs7K1NBQUE7QUFYVTtBQUFxQixJQUE3QixLQUFLLEVBQUU7QUFBRSxzQ0FBUSxXQUFXO0FBQy9CLGlEQURnQztBQURuQixnQkFBZ0IsNEJBSjVCLFNBQVMsQ0FBQyxVQUNULFFBQVEsRUFBRTs7OzJCQUFzRSxVQUNoRixTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxNQUNoQyxDQUFDLElBQ1csZ0JBQWdCLENBWTVCOzs7OztvQkFDRDtBQUFDLFNBYlksZ0JBQWdCO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBmb3J3YXJkUmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvckZuLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IGVxdWFsVG8gfSBmcm9tICcuL3ZhbGlkYXRvcic7XG5cbmNvbnN0IEVRVUFMX1RPX1ZBTElEQVRPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFcXVhbFRvVmFsaWRhdG9yKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tlcXVhbFRvXVtmb3JtQ29udHJvbE5hbWVdLFtlcXVhbFRvXVtmb3JtQ29udHJvbF0sW2VxdWFsVG9dW25nTW9kZWxdJyxcbiAgcHJvdmlkZXJzOiBbRVFVQUxfVE9fVkFMSURBVE9SXVxufSlcbmV4cG9ydCBjbGFzcyBFcXVhbFRvVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yLCBPbkluaXQge1xuICBASW5wdXQoKSBlcXVhbFRvOiBGb3JtQ29udHJvbDtcblxuICBwcml2YXRlIHZhbGlkYXRvcjogVmFsaWRhdG9yRm47XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy52YWxpZGF0b3IgPSBlcXVhbFRvKHRoaXMuZXF1YWxUbyk7XG4gIH1cblxuICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yKGMpO1xuICB9XG59XG4iXX0=