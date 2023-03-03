import * as tslib_1 from "tslib";
import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { creditCard } from './validator';
import * as ɵngcc0 from '@angular/core';
const CREDIT_CARD_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => CreditCardValidator),
    multi: true
};
let CreditCardValidator = class CreditCardValidator {
    validate(c) {
        return creditCard(c);
    }
};
CreditCardValidator.ɵfac = function CreditCardValidator_Factory(t) { return new (t || CreditCardValidator)(); };
CreditCardValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CreditCardValidator, selectors: [["", "creditCard", "", "formControlName", ""], ["", "creditCard", "", "formControl", ""], ["", "creditCard", "", "ngModel", ""]], features: [ɵngcc0.ɵɵProvidersFeature([CREDIT_CARD_VALIDATOR])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CreditCardValidator, [{
        type: Directive,
        args: [{
                selector: '[creditCard][formControlName],[creditCard][formControl],[creditCard][ngModel]',
                providers: [CREDIT_CARD_VALIDATOR]
            }]
    }], null, null); })();
export { CreditCardValidator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmd4LWN1c3RvbS12YWxpZGF0b3JzL3NyYy9hcHAvY3JlZGl0LWNhcmQvZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUE4QixNQUFNLGdCQUFnQixDQUFDO0FBRTNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBRXpDLE1BQU0scUJBQXFCLEdBQVE7QUFDbkMsSUFBRSxPQUFPLEVBQUUsYUFBYTtBQUN4QixJQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsbUJBQW1CLENBQUM7QUFDcEQsSUFBRSxLQUFLLEVBQUUsSUFBSTtBQUNiLENBQUMsQ0FBQztBQU1GLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0FBQUcsSUFDakMsUUFBUSxDQUFDLENBQWtCO0FBQUksUUFDN0IsT0FBTyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekIsSUFBRSxDQUFDO0FBQ0gsQ0FBQyxDQUFBO0FBSlksbUJBQW1CLDRCQUovQixTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUU7MkNBQStFLFVBQ3pGLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDLE1BQ25DLENBQUMsSUFDVyxtQkFBbUIsQ0FJL0I7Ozs7Ozs7MEJBQ0Q7QUFBQyxTQUxZLG1CQUFtQjtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBWYWxpZGF0b3IsIEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgY3JlZGl0Q2FyZCB9IGZyb20gJy4vdmFsaWRhdG9yJztcblxuY29uc3QgQ1JFRElUX0NBUkRfVkFMSURBVE9SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENyZWRpdENhcmRWYWxpZGF0b3IpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NyZWRpdENhcmRdW2Zvcm1Db250cm9sTmFtZV0sW2NyZWRpdENhcmRdW2Zvcm1Db250cm9sXSxbY3JlZGl0Q2FyZF1bbmdNb2RlbF0nLFxuICBwcm92aWRlcnM6IFtDUkVESVRfQ0FSRF9WQUxJREFUT1JdXG59KVxuZXhwb3J0IGNsYXNzIENyZWRpdENhcmRWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XG4gICAgcmV0dXJuIGNyZWRpdENhcmQoYyk7XG4gIH1cbn1cbiJdfQ==