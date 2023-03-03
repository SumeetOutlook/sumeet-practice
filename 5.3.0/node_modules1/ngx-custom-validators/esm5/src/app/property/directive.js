import * as tslib_1 from "tslib";
import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { property } from './validator';
import * as ɵngcc0 from '@angular/core';
var PROPERTY_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return PropertyValidator; }),
    multi: true
};
var PropertyValidator = /** @class */ (function () {
    function PropertyValidator() {
    }
    PropertyValidator.prototype.ngOnInit = function () {
        this.validator = property(this.property);
    };
    PropertyValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'property') {
                this.validator = property(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    };
    PropertyValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    PropertyValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], PropertyValidator.prototype, "property", void 0);
PropertyValidator.ɵfac = function PropertyValidator_Factory(t) { return new (t || PropertyValidator)(); };
PropertyValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: PropertyValidator, selectors: [["", "property", "", "formControlName", ""], ["", "property", "", "formControl", ""], ["", "property", "", "ngModel", ""]], inputs: { property: "property" }, features: [ɵngcc0.ɵɵProvidersFeature([PROPERTY_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PropertyValidator, [{
        type: Directive,
        args: [{
                selector: '[property][formControlName],[property][formControl],[property][ngModel]',
                providers: [PROPERTY_VALIDATOR]
            }]
    }], function () { return []; }, { property: [{
            type: Input
        }] }); })();
    return PropertyValidator;
}());
export { PropertyValidator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmd4LWN1c3RvbS12YWxpZGF0b3JzL3NyYy9hcHAvcHJvcGVydHkvZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQy9GLE9BQU8sRUFBRSxhQUFhLEVBQTJDLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFFdkMsSUFBTSxrQkFBa0IsR0FBUTtBQUNoQyxJQUFFLE9BQU8sRUFBRSxhQUFhO0FBQ3hCLElBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsaUJBQWlCLEVBQWpCLENBQWlCLENBQUM7QUFDbEQsSUFBRSxLQUFLLEVBQUUsSUFBSTtBQUNiLENBQUMsQ0FBQztBQU1GO0FBQXFELElBQXJEO0FBQStCLElBNEIvQixDQUFDO0FBQ0QsSUF2QkUsb0NBQVEsR0FBUjtBQUNELFFBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzdDLElBQUUsQ0FBQztBQUVILElBQUUsdUNBQVcsR0FBWCxVQUFZLE9BQXNCO0FBQ3BDLFFBQUksS0FBSyxJQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUU7QUFDL0IsWUFBTSxJQUFJLEdBQUcsS0FBSyxVQUFVLEVBQUU7QUFDOUIsZ0JBQVEsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzdELGdCQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUMzQixvQkFBVSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDMUIsaUJBQVM7QUFDVCxhQUFPO0FBQ1AsU0FBSztBQUNMLElBQUUsQ0FBQztBQUVILElBQUUsb0NBQVEsR0FBUixVQUFTLENBQWtCO0FBQUksUUFDN0IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdCLElBQUUsQ0FBQztBQUVILElBQUUscURBQXlCLEdBQXpCLFVBQTBCLEVBQWM7QUFBSSxRQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUN2QixJQUFFLENBQUM7QUFDRixJQTNCVTtBQUVULFFBRkMsS0FBSyxFQUFFO0FBQUU7QUFFb0IsdURBRko7SUFEZixpQkFBaUIsZ0NBSjdCLFNBQVMsQ0FBQyxjQUNULFFBQVEsRUFBRTtxREFBeUUsY0FDbkYsU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUMsVUFDaEMsQ0FBQyxRQUNXLGlCQUFpQixDQTRCN0I7Ozs7Ozs7OztvQkFDRDtBQUFDLElBREQsd0JBQUM7QUFDQSxDQURBLEFBNUJELElBNEJDO0FBQ0QsU0E3QmEsaUJBQWlCO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBmb3J3YXJkUmVmLCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBWYWxpZGF0b3JGbiwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJy4vdmFsaWRhdG9yJztcblxuY29uc3QgUFJPUEVSVFlfVkFMSURBVE9SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFByb3BlcnR5VmFsaWRhdG9yKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1twcm9wZXJ0eV1bZm9ybUNvbnRyb2xOYW1lXSxbcHJvcGVydHldW2Zvcm1Db250cm9sXSxbcHJvcGVydHldW25nTW9kZWxdJyxcbiAgcHJvdmlkZXJzOiBbUFJPUEVSVFlfVkFMSURBVE9SXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eVZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciwgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBwcm9wZXJ0eTogc3RyaW5nO1xuXG4gIHByaXZhdGUgdmFsaWRhdG9yOiBWYWxpZGF0b3JGbjtcbiAgcHJpdmF0ZSBvbkNoYW5nZTogKCkgPT4gdm9pZDtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnZhbGlkYXRvciA9IHByb3BlcnR5KHRoaXMucHJvcGVydHkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGNoYW5nZXMpIHtcbiAgICAgIGlmIChrZXkgPT09ICdwcm9wZXJ0eScpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBwcm9wZXJ0eShjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlKTtcbiAgICAgICAgaWYgKHRoaXMub25DaGFuZ2UpIHtcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yKGMpO1xuICB9XG5cbiAgcmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxufVxuIl19