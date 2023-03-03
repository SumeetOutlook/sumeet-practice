import * as tslib_1 from "tslib";
import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { base64 } from './validator';
import * as ɵngcc0 from '@angular/core';
const BASE64_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => Base64Validator),
    multi: true
};
let Base64Validator = class Base64Validator {
    validate(c) {
        return base64(c);
    }
};
Base64Validator.ɵfac = function Base64Validator_Factory(t) { return new (t || Base64Validator)(); };
Base64Validator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: Base64Validator, selectors: [["", "base64", "", "formControlName", ""], ["", "base64", "", "formControl", ""], ["", "base64", "", "ngModel", ""]], features: [ɵngcc0.ɵɵProvidersFeature([BASE64_VALIDATOR])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Base64Validator, [{
        type: Directive,
        args: [{
                selector: '[base64][formControlName],[base64][formControl],[base64][ngModel]',
                providers: [BASE64_VALIDATOR]
            }]
    }], null, null); })();
export { Base64Validator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmd4LWN1c3RvbS12YWxpZGF0b3JzL3NyYy9hcHAvYmFzZTY0L2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBOEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQUVyQyxNQUFNLGdCQUFnQixHQUFRO0FBQzlCLElBQUUsT0FBTyxFQUFFLGFBQWE7QUFDeEIsSUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQztBQUNoRCxJQUFFLEtBQUssRUFBRSxJQUFJO0FBQ2IsQ0FBQyxDQUFDO0FBTUYsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtBQUFHLElBQzdCLFFBQVEsQ0FBQyxDQUFrQjtBQUFJLFFBQzdCLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JCLElBQUUsQ0FBQztBQUNILENBQUMsQ0FBQTtBQUpZLGVBQWUsNEJBSjNCLFNBQVMsQ0FBQyxVQUNULFFBQVEsRUFBRTt1Q0FBbUUsVUFDN0UsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsTUFDOUIsQ0FBQyxJQUNXLGVBQWUsQ0FJM0I7Ozs7Ozs7MEJBQ0Q7QUFBQyxTQUxZLGVBQWU7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IGJhc2U2NCB9IGZyb20gJy4vdmFsaWRhdG9yJztcblxuY29uc3QgQkFTRTY0X1ZBTElEQVRPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBCYXNlNjRWYWxpZGF0b3IpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Jhc2U2NF1bZm9ybUNvbnRyb2xOYW1lXSxbYmFzZTY0XVtmb3JtQ29udHJvbF0sW2Jhc2U2NF1bbmdNb2RlbF0nLFxuICBwcm92aWRlcnM6IFtCQVNFNjRfVkFMSURBVE9SXVxufSlcbmV4cG9ydCBjbGFzcyBCYXNlNjRWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XG4gICAgcmV0dXJuIGJhc2U2NChjKTtcbiAgfVxufVxuIl19