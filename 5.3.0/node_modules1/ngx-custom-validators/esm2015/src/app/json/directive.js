import * as tslib_1 from "tslib";
import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { json } from './validator';
import * as ɵngcc0 from '@angular/core';
const JSON_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => JSONValidator),
    multi: true
};
let JSONValidator = class JSONValidator {
    validate(c) {
        return json(c);
    }
};
JSONValidator.ɵfac = function JSONValidator_Factory(t) { return new (t || JSONValidator)(); };
JSONValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: JSONValidator, selectors: [["", "json", "", "formControlName", ""], ["", "json", "", "formControl", ""], ["", "json", "", "ngModel", ""]], features: [ɵngcc0.ɵɵProvidersFeature([JSON_VALIDATOR])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(JSONValidator, [{
        type: Directive,
        args: [{
                selector: '[json][formControlName],[json][formControl],[json][ngModel]',
                providers: [JSON_VALIDATOR]
            }]
    }], null, null); })();
export { JSONValidator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmd4LWN1c3RvbS12YWxpZGF0b3JzL3NyYy9hcHAvanNvbi9kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQThCLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0UsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFFbkMsTUFBTSxjQUFjLEdBQVE7QUFDNUIsSUFBRSxPQUFPLEVBQUUsYUFBYTtBQUN4QixJQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO0FBQzlDLElBQUUsS0FBSyxFQUFFLElBQUk7QUFDYixDQUFDLENBQUM7QUFNRixJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0FBQUcsSUFDM0IsUUFBUSxDQUFDLENBQWtCO0FBQUksUUFDN0IsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkIsSUFBRSxDQUFDO0FBQ0gsQ0FBQyxDQUFBO0FBSlksYUFBYSw0QkFKekIsU0FBUyxDQUFDLFVBQ1QsUUFBUSxFQUFFO3FDQUE2RCxVQUN2RSxTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFDNUIsQ0FBQyxJQUNXLGFBQWEsQ0FJekI7Ozs7Ozs7MEJBQ0Q7QUFBQyxTQUxZLGFBQWE7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IGpzb24gfSBmcm9tICcuL3ZhbGlkYXRvcic7XG5cbmNvbnN0IEpTT05fVkFMSURBVE9SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEpTT05WYWxpZGF0b3IpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2pzb25dW2Zvcm1Db250cm9sTmFtZV0sW2pzb25dW2Zvcm1Db250cm9sXSxbanNvbl1bbmdNb2RlbF0nLFxuICBwcm92aWRlcnM6IFtKU09OX1ZBTElEQVRPUl1cbn0pXG5leHBvcnQgY2xhc3MgSlNPTlZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG4gIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgICByZXR1cm4ganNvbihjKTtcbiAgfVxufVxuIl19