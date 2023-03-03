import * as tslib_1 from "tslib";
import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS, FormControl } from '@angular/forms';
import { equalTo } from './validator';
import * as ɵngcc0 from '@angular/core';
var EQUAL_TO_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return EqualToValidator; }),
    multi: true
};
var EqualToValidator = /** @class */ (function () {
    function EqualToValidator() {
    }
    EqualToValidator.prototype.ngOnInit = function () {
        this.validator = equalTo(this.equalTo);
    };
    EqualToValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", FormControl)
    ], EqualToValidator.prototype, "equalTo", void 0);
EqualToValidator.ɵfac = function EqualToValidator_Factory(t) { return new (t || EqualToValidator)(); };
EqualToValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: EqualToValidator, selectors: [["", "equalTo", "", "formControlName", ""], ["", "equalTo", "", "formControl", ""], ["", "equalTo", "", "ngModel", ""]], inputs: { equalTo: "equalTo" }, features: [ɵngcc0.ɵɵProvidersFeature([EQUAL_TO_VALIDATOR])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(EqualToValidator, [{
        type: Directive,
        args: [{
                selector: '[equalTo][formControlName],[equalTo][formControl],[equalTo][ngModel]',
                providers: [EQUAL_TO_VALIDATOR]
            }]
    }], function () { return []; }, { equalTo: [{
            type: Input
        }] }); })();
    return EqualToValidator;
}());
export { EqualToValidator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmd4LWN1c3RvbS12YWxpZGF0b3JzL3NyYy9hcHAvZXF1YWwtdG8vZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBYSxXQUFXLEVBQWdDLE1BQU0sZ0JBQWdCLENBQUM7QUFFckcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFFdEMsSUFBTSxrQkFBa0IsR0FBUTtBQUNoQyxJQUFFLE9BQU8sRUFBRSxhQUFhO0FBQ3hCLElBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsZ0JBQWdCLEVBQWhCLENBQWdCLENBQUM7QUFDakQsSUFBRSxLQUFLLEVBQUUsSUFBSTtBQUNiLENBQUMsQ0FBQztBQU1GO0FBQW9ELElBQXBEO0FBQThCLElBWTlCLENBQUM7QUFDRCxJQVJFLG1DQUFRLEdBQVI7QUFDRCxRQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMzQyxJQUFFLENBQUM7QUFFSCxJQUFFLG1DQUFRLEdBQVIsVUFBUyxDQUFrQjtBQUFJLFFBQzdCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3QixJQUFFLENBQUM7QUFDRixJQVhVO0FBQXFCLFFBQTdCLEtBQUssRUFBRTtBQUFFLDBDQUFRLFdBQVc7QUFDL0IscURBRGdDO0lBRG5CLGdCQUFnQixnQ0FKNUIsU0FBUyxDQUFDLGNBQ1QsUUFBUSxFQUFFO29EQUFzRSxjQUNoRixTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxVQUNoQyxDQUFDLFFBQ1csZ0JBQWdCLENBWTVCOzs7Ozs7Ozs7b0JBQ0Q7QUFBQyxJQURELHVCQUFDO0FBQ0EsQ0FEQSxBQVpELElBWUM7QUFDRCxTQWJhLGdCQUFnQjtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgZm9yd2FyZFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBWYWxpZGF0b3IsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JGbiwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBlcXVhbFRvIH0gZnJvbSAnLi92YWxpZGF0b3InO1xuXG5jb25zdCBFUVVBTF9UT19WQUxJREFUT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXF1YWxUb1ZhbGlkYXRvciksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZXF1YWxUb11bZm9ybUNvbnRyb2xOYW1lXSxbZXF1YWxUb11bZm9ybUNvbnRyb2xdLFtlcXVhbFRvXVtuZ01vZGVsXScsXG4gIHByb3ZpZGVyczogW0VRVUFMX1RPX1ZBTElEQVRPUl1cbn0pXG5leHBvcnQgY2xhc3MgRXF1YWxUb1ZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciwgT25Jbml0IHtcbiAgQElucHV0KCkgZXF1YWxUbzogRm9ybUNvbnRyb2w7XG5cbiAgcHJpdmF0ZSB2YWxpZGF0b3I6IFZhbGlkYXRvckZuO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudmFsaWRhdG9yID0gZXF1YWxUbyh0aGlzLmVxdWFsVG8pO1xuICB9XG5cbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0ge1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcihjKTtcbiAgfVxufVxuIl19