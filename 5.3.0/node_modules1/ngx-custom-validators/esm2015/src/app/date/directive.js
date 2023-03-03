import * as tslib_1 from "tslib";
import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { date } from './validator';
import * as ɵngcc0 from '@angular/core';
const DATE_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DateValidator),
    multi: true
};
let DateValidator = class DateValidator {
    validate(c) {
        return date(c);
    }
};
DateValidator.ɵfac = function DateValidator_Factory(t) { return new (t || DateValidator)(); };
DateValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DateValidator, selectors: [["", "date", "", "formControlName", ""], ["", "date", "", "formControl", ""], ["", "date", "", "ngModel", ""]], features: [ɵngcc0.ɵɵProvidersFeature([DATE_VALIDATOR])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DateValidator, [{
        type: Directive,
        args: [{
                selector: '[date][formControlName],[date][formControl],[date][ngModel]',
                providers: [DATE_VALIDATOR]
            }]
    }], null, null); })();
export { DateValidator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmd4LWN1c3RvbS12YWxpZGF0b3JzL3NyYy9hcHAvZGF0ZS9kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQThCLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0UsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFFbkMsTUFBTSxjQUFjLEdBQVE7QUFDNUIsSUFBRSxPQUFPLEVBQUUsYUFBYTtBQUN4QixJQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO0FBQzlDLElBQUUsS0FBSyxFQUFFLElBQUk7QUFDYixDQUFDLENBQUM7QUFNRixJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0FBQUcsSUFDM0IsUUFBUSxDQUFDLENBQWtCO0FBQUksUUFDN0IsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkIsSUFBRSxDQUFDO0FBQ0gsQ0FBQyxDQUFBO0FBSlksYUFBYSw0QkFKekIsU0FBUyxDQUFDLFVBQ1QsUUFBUSxFQUFFO3FDQUE2RCxVQUN2RSxTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFDNUIsQ0FBQyxJQUNXLGFBQWEsQ0FJekI7Ozs7Ozs7MEJBQ0Q7QUFBQyxTQUxZLGFBQWE7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IGRhdGUgfSBmcm9tICcuL3ZhbGlkYXRvcic7XG5cbmNvbnN0IERBVEVfVkFMSURBVE9SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IERhdGVWYWxpZGF0b3IpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2RhdGVdW2Zvcm1Db250cm9sTmFtZV0sW2RhdGVdW2Zvcm1Db250cm9sXSxbZGF0ZV1bbmdNb2RlbF0nLFxuICBwcm92aWRlcnM6IFtEQVRFX1ZBTElEQVRPUl1cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG4gIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgICByZXR1cm4gZGF0ZShjKTtcbiAgfVxufVxuIl19