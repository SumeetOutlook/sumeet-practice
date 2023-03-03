import * as tslib_1 from "tslib";
import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { date } from './validator';
import * as ɵngcc0 from '@angular/core';
var DATE_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return DateValidator; }),
    multi: true
};
var DateValidator = /** @class */ (function () {
    function DateValidator() {
    }
    DateValidator.prototype.validate = function (c) {
        return date(c);
    };
DateValidator.ɵfac = function DateValidator_Factory(t) { return new (t || DateValidator)(); };
DateValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DateValidator, selectors: [["", "date", "", "formControlName", ""], ["", "date", "", "formControl", ""], ["", "date", "", "ngModel", ""]], features: [ɵngcc0.ɵɵProvidersFeature([DATE_VALIDATOR])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DateValidator, [{
        type: Directive,
        args: [{
                selector: '[date][formControlName],[date][formControl],[date][ngModel]',
                providers: [DATE_VALIDATOR]
            }]
    }], function () { return []; }, null); })();
    return DateValidator;
}());
export { DateValidator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmd4LWN1c3RvbS12YWxpZGF0b3JzL3NyYy9hcHAvZGF0ZS9kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQThCLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0UsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFFbkMsSUFBTSxjQUFjLEdBQVE7QUFDNUIsSUFBRSxPQUFPLEVBQUUsYUFBYTtBQUN4QixJQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGFBQWEsRUFBYixDQUFhLENBQUM7QUFDOUMsSUFBRSxLQUFLLEVBQUUsSUFBSTtBQUNiLENBQUMsQ0FBQztBQU1GO0FBQWlELElBQWpEO0FBQTJCLElBSTNCLENBQUM7QUFDRCxJQUpFLGdDQUFRLEdBQVIsVUFBUyxDQUFrQjtBQUFJLFFBQzdCLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25CLElBQUUsQ0FBQztJQUhVLGFBQWEsZ0NBSnpCLFNBQVMsQ0FBQyxjQUNULFFBQVEsRUFBRTtpREFBNkQsY0FDdkUsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDLFVBQzVCLENBQUMsUUFDVyxhQUFhLENBSXpCOzs7Ozs7O2dEQUNEO0FBQUMsSUFERCxvQkFBQztBQUNBLENBREEsQUFKRCxJQUlDO0FBQ0QsU0FMYSxhQUFhO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBkYXRlIH0gZnJvbSAnLi92YWxpZGF0b3InO1xuXG5jb25zdCBEQVRFX1ZBTElEQVRPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEYXRlVmFsaWRhdG9yKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tkYXRlXVtmb3JtQ29udHJvbE5hbWVdLFtkYXRlXVtmb3JtQ29udHJvbF0sW2RhdGVdW25nTW9kZWxdJyxcbiAgcHJvdmlkZXJzOiBbREFURV9WQUxJREFUT1JdXG59KVxuZXhwb3J0IGNsYXNzIERhdGVWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XG4gICAgcmV0dXJuIGRhdGUoYyk7XG4gIH1cbn1cbiJdfQ==