import * as tslib_1 from "tslib";
import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { dateISO } from './validator';
import * as ɵngcc0 from '@angular/core';
const DATE_ISO_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DateISOValidator),
    multi: true
};
let DateISOValidator = class DateISOValidator {
    validate(c) {
        return dateISO(c);
    }
};
DateISOValidator.ɵfac = function DateISOValidator_Factory(t) { return new (t || DateISOValidator)(); };
DateISOValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DateISOValidator, selectors: [["", "dateISO", "", "formControlName", ""], ["", "dateISO", "", "formControl", ""], ["", "dateISO", "", "ngModel", ""]], features: [ɵngcc0.ɵɵProvidersFeature([DATE_ISO_VALIDATOR])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DateISOValidator, [{
        type: Directive,
        args: [{
                selector: '[dateISO][formControlName],[dateISO][formControl],[dateISO][ngModel]',
                providers: [DATE_ISO_VALIDATOR]
            }]
    }], null, null); })();
export { DateISOValidator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmd4LWN1c3RvbS12YWxpZGF0b3JzL3NyYy9hcHAvZGF0ZS1pc28vZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUE4QixNQUFNLGdCQUFnQixDQUFDO0FBRTNFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBRXRDLE1BQU0sa0JBQWtCLEdBQVE7QUFDaEMsSUFBRSxPQUFPLEVBQUUsYUFBYTtBQUN4QixJQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7QUFDakQsSUFBRSxLQUFLLEVBQUUsSUFBSTtBQUNiLENBQUMsQ0FBQztBQU1GLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0FBQUcsSUFDOUIsUUFBUSxDQUFDLENBQWtCO0FBQUksUUFDN0IsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEIsSUFBRSxDQUFDO0FBQ0gsQ0FBQyxDQUFBO0FBSlksZ0JBQWdCLDRCQUo1QixTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUU7d0NBQXNFLFVBQ2hGLFNBQVMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLE1BQ2hDLENBQUMsSUFDVyxnQkFBZ0IsQ0FJNUI7Ozs7Ozs7MEJBQ0Q7QUFBQyxTQUxZLGdCQUFnQjtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBWYWxpZGF0b3IsIEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgZGF0ZUlTTyB9IGZyb20gJy4vdmFsaWRhdG9yJztcblxuY29uc3QgREFURV9JU09fVkFMSURBVE9SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IERhdGVJU09WYWxpZGF0b3IpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2RhdGVJU09dW2Zvcm1Db250cm9sTmFtZV0sW2RhdGVJU09dW2Zvcm1Db250cm9sXSxbZGF0ZUlTT11bbmdNb2RlbF0nLFxuICBwcm92aWRlcnM6IFtEQVRFX0lTT19WQUxJREFUT1JdXG59KVxuZXhwb3J0IGNsYXNzIERhdGVJU09WYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XG4gICAgcmV0dXJuIGRhdGVJU08oYyk7XG4gIH1cbn1cbiJdfQ==