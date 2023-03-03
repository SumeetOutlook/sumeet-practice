import * as tslib_1 from "tslib";
import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { digits } from './validator';
import * as ɵngcc0 from '@angular/core';
const DIGITS_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DigitsValidator),
    multi: true
};
let DigitsValidator = class DigitsValidator {
    validate(c) {
        return digits(c);
    }
};
DigitsValidator.ɵfac = function DigitsValidator_Factory(t) { return new (t || DigitsValidator)(); };
DigitsValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DigitsValidator, selectors: [["", "digits", "", "formControlName", ""], ["", "digits", "", "formControl", ""], ["", "digits", "", "ngModel", ""]], features: [ɵngcc0.ɵɵProvidersFeature([DIGITS_VALIDATOR])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DigitsValidator, [{
        type: Directive,
        args: [{
                selector: '[digits][formControlName],[digits][formControl],[digits][ngModel]',
                providers: [DIGITS_VALIDATOR]
            }]
    }], null, null); })();
export { DigitsValidator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmd4LWN1c3RvbS12YWxpZGF0b3JzL3NyYy9hcHAvZGlnaXRzL2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBOEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQUVyQyxNQUFNLGdCQUFnQixHQUFRO0FBQzlCLElBQUUsT0FBTyxFQUFFLGFBQWE7QUFDeEIsSUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQztBQUNoRCxJQUFFLEtBQUssRUFBRSxJQUFJO0FBQ2IsQ0FBQyxDQUFDO0FBTUYsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtBQUFHLElBQzdCLFFBQVEsQ0FBQyxDQUFrQjtBQUFJLFFBQzdCLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JCLElBQUUsQ0FBQztBQUNILENBQUMsQ0FBQTtBQUpZLGVBQWUsNEJBSjNCLFNBQVMsQ0FBQyxVQUNULFFBQVEsRUFBRTt1Q0FBbUUsVUFDN0UsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsTUFDOUIsQ0FBQyxJQUNXLGVBQWUsQ0FJM0I7Ozs7Ozs7MEJBQ0Q7QUFBQyxTQUxZLGVBQWU7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IGRpZ2l0cyB9IGZyb20gJy4vdmFsaWRhdG9yJztcblxuY29uc3QgRElHSVRTX1ZBTElEQVRPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEaWdpdHNWYWxpZGF0b3IpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2RpZ2l0c11bZm9ybUNvbnRyb2xOYW1lXSxbZGlnaXRzXVtmb3JtQ29udHJvbF0sW2RpZ2l0c11bbmdNb2RlbF0nLFxuICBwcm92aWRlcnM6IFtESUdJVFNfVkFMSURBVE9SXVxufSlcbmV4cG9ydCBjbGFzcyBEaWdpdHNWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XG4gICAgcmV0dXJuIGRpZ2l0cyhjKTtcbiAgfVxufVxuIl19