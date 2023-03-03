import * as tslib_1 from "tslib";
import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { email } from './validator';
import * as ɵngcc0 from '@angular/core';
const EMAIL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => EmailValidator),
    multi: true
};
let EmailValidator = class EmailValidator {
    validate(c) {
        return email(c);
    }
};
EmailValidator.ɵfac = function EmailValidator_Factory(t) { return new (t || EmailValidator)(); };
EmailValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: EmailValidator, selectors: [["", "ngvemail", "", "formControlName", ""], ["", "ngvemail", "", "formControl", ""], ["", "ngvemail", "", "ngModel", ""]], features: [ɵngcc0.ɵɵProvidersFeature([EMAIL_VALIDATOR])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(EmailValidator, [{
        type: Directive,
        args: [{
                selector: '[ngvemail][formControlName],[ngvemail][formControl],[ngvemail][ngModel]',
                providers: [EMAIL_VALIDATOR]
            }]
    }], null, null); })();
export { EmailValidator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmd4LWN1c3RvbS12YWxpZGF0b3JzL3NyYy9hcHAvZW1haWwvZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUE4QixNQUFNLGdCQUFnQixDQUFDO0FBRTNFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBRXBDLE1BQU0sZUFBZSxHQUFRO0FBQzdCLElBQUUsT0FBTyxFQUFFLGFBQWE7QUFDeEIsSUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQztBQUMvQyxJQUFFLEtBQUssRUFBRSxJQUFJO0FBQ2IsQ0FBQyxDQUFDO0FBTUYsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztBQUFHLElBQzVCLFFBQVEsQ0FBQyxDQUFrQjtBQUFJLFFBQzdCLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BCLElBQUUsQ0FBQztBQUNILENBQUMsQ0FBQTtBQUpZLGNBQWMsNEJBSjFCLFNBQVMsQ0FBQyxVQUNULFFBQVEsRUFBRTsrQ0FBeUUsVUFDbkYsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDLE1BQzdCLENBQUMsSUFDVyxjQUFjLENBSTFCOzs7Ozs7OzBCQUNEO0FBQUMsU0FMWSxjQUFjO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBlbWFpbCB9IGZyb20gJy4vdmFsaWRhdG9yJztcblxuY29uc3QgRU1BSUxfVkFMSURBVE9SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEVtYWlsVmFsaWRhdG9yKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ3ZlbWFpbF1bZm9ybUNvbnRyb2xOYW1lXSxbbmd2ZW1haWxdW2Zvcm1Db250cm9sXSxbbmd2ZW1haWxdW25nTW9kZWxdJyxcbiAgcHJvdmlkZXJzOiBbRU1BSUxfVkFMSURBVE9SXVxufSlcbmV4cG9ydCBjbGFzcyBFbWFpbFZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG4gIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgICByZXR1cm4gZW1haWwoYyk7XG4gIH1cbn1cbiJdfQ==