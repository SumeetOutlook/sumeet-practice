import * as tslib_1 from "tslib";
import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { creditCard } from './validator';
import * as ɵngcc0 from '@angular/core';
var CREDIT_CARD_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return CreditCardValidator; }),
    multi: true
};
var CreditCardValidator = /** @class */ (function () {
    function CreditCardValidator() {
    }
    CreditCardValidator.prototype.validate = function (c) {
        return creditCard(c);
    };
CreditCardValidator.ɵfac = function CreditCardValidator_Factory(t) { return new (t || CreditCardValidator)(); };
CreditCardValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CreditCardValidator, selectors: [["", "creditCard", "", "formControlName", ""], ["", "creditCard", "", "formControl", ""], ["", "creditCard", "", "ngModel", ""]], features: [ɵngcc0.ɵɵProvidersFeature([CREDIT_CARD_VALIDATOR])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CreditCardValidator, [{
        type: Directive,
        args: [{
                selector: '[creditCard][formControlName],[creditCard][formControl],[creditCard][ngModel]',
                providers: [CREDIT_CARD_VALIDATOR]
            }]
    }], function () { return []; }, null); })();
    return CreditCardValidator;
}());
export { CreditCardValidator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmd4LWN1c3RvbS12YWxpZGF0b3JzL3NyYy9hcHAvY3JlZGl0LWNhcmQvZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUE4QixNQUFNLGdCQUFnQixDQUFDO0FBRTNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBRXpDLElBQU0scUJBQXFCLEdBQVE7QUFDbkMsSUFBRSxPQUFPLEVBQUUsYUFBYTtBQUN4QixJQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLG1CQUFtQixFQUFuQixDQUFtQixDQUFDO0FBQ3BELElBQUUsS0FBSyxFQUFFLElBQUk7QUFDYixDQUFDLENBQUM7QUFNRjtBQUF1RCxJQUF2RDtBQUFpQyxJQUlqQyxDQUFDO0FBQ0QsSUFKRSxzQ0FBUSxHQUFSLFVBQVMsQ0FBa0I7QUFBSSxRQUM3QixPQUFPLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6QixJQUFFLENBQUM7SUFIVSxtQkFBbUIsZ0NBSi9CLFNBQVMsQ0FBQyxjQUNULFFBQVEsRUFBRTt1REFBK0UsY0FDekYsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUMsVUFDbkMsQ0FBQyxRQUNXLG1CQUFtQixDQUkvQjs7Ozs7OztnREFDRDtBQUFDLElBREQsMEJBQUM7QUFDQSxDQURBLEFBSkQsSUFJQztBQUNELFNBTGEsbUJBQW1CO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBjcmVkaXRDYXJkIH0gZnJvbSAnLi92YWxpZGF0b3InO1xuXG5jb25zdCBDUkVESVRfQ0FSRF9WQUxJREFUT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ3JlZGl0Q2FyZFZhbGlkYXRvciksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY3JlZGl0Q2FyZF1bZm9ybUNvbnRyb2xOYW1lXSxbY3JlZGl0Q2FyZF1bZm9ybUNvbnRyb2xdLFtjcmVkaXRDYXJkXVtuZ01vZGVsXScsXG4gIHByb3ZpZGVyczogW0NSRURJVF9DQVJEX1ZBTElEQVRPUl1cbn0pXG5leHBvcnQgY2xhc3MgQ3JlZGl0Q2FyZFZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG4gIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgICByZXR1cm4gY3JlZGl0Q2FyZChjKTtcbiAgfVxufVxuIl19