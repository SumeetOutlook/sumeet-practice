import * as tslib_1 from "tslib";
import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { gte } from './validator';
import * as ɵngcc0 from '@angular/core';
var GREATER_THAN_EQUAL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return GreaterThanEqualValidator; }),
    multi: true
};
var GreaterThanEqualValidator = /** @class */ (function () {
    function GreaterThanEqualValidator() {
    }
    GreaterThanEqualValidator.prototype.ngOnInit = function () {
        this.validator = gte(this.gte);
    };
    GreaterThanEqualValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'gte') {
                this.validator = gte(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    };
    GreaterThanEqualValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    GreaterThanEqualValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], GreaterThanEqualValidator.prototype, "gte", void 0);
GreaterThanEqualValidator.ɵfac = function GreaterThanEqualValidator_Factory(t) { return new (t || GreaterThanEqualValidator)(); };
GreaterThanEqualValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: GreaterThanEqualValidator, selectors: [["", "gte", "", "formControlName", ""], ["", "gte", "", "formControl", ""], ["", "gte", "", "ngModel", ""]], inputs: { gte: "gte" }, features: [ɵngcc0.ɵɵProvidersFeature([GREATER_THAN_EQUAL_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GreaterThanEqualValidator, [{
        type: Directive,
        args: [{
                selector: '[gte][formControlName],[gte][formControl],[gte][ngModel]',
                providers: [GREATER_THAN_EQUAL_VALIDATOR]
            }]
    }], function () { return []; }, { gte: [{
            type: Input
        }] }); })();
    return GreaterThanEqualValidator;
}());
export { GreaterThanEqualValidator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmd4LWN1c3RvbS12YWxpZGF0b3JzL3NyYy9hcHAvZ3JlYXRlci10aGFuLWVxdWFsL2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQUUsYUFBYSxFQUEyQyxNQUFNLGdCQUFnQixDQUFDO0FBRXhGLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBRWxDLElBQU0sNEJBQTRCLEdBQVE7QUFDMUMsSUFBRSxPQUFPLEVBQUUsYUFBYTtBQUN4QixJQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHlCQUF5QixFQUF6QixDQUF5QixDQUFDO0FBQzFELElBQUUsS0FBSyxFQUFFLElBQUk7QUFDYixDQUFDLENBQUM7QUFNRjtBQUE2RCxJQUE3RDtBQUF1QyxJQTRCdkMsQ0FBQztBQUNELElBdkJFLDRDQUFRLEdBQVI7QUFDRCxRQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuQyxJQUFFLENBQUM7QUFFSCxJQUFFLCtDQUFXLEdBQVgsVUFBWSxPQUFzQjtBQUNwQyxRQUFJLEtBQUssSUFBTSxHQUFHLElBQUksT0FBTyxFQUFFO0FBQy9CLFlBQU0sSUFBSSxHQUFHLEtBQUssS0FBSyxFQUFFO0FBQ3pCLGdCQUFRLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN4RCxnQkFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDM0Isb0JBQVUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzFCLGlCQUFTO0FBQ1QsYUFBTztBQUNQLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFFSCxJQUFFLDRDQUFRLEdBQVIsVUFBUyxDQUFrQjtBQUFJLFFBQzdCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3QixJQUFFLENBQUM7QUFFSCxJQUFFLDZEQUF5QixHQUF6QixVQUEwQixFQUFjO0FBQUksUUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDdkIsSUFBRSxDQUFDO0FBQ0YsSUEzQlU7QUFFSixRQUZKLEtBQUssRUFBRTtBQUFFO0FBR1QsMERBSG9CO0lBRFYseUJBQXlCLGdDQUpyQyxTQUFTLENBQUMsY0FDVCxRQUFRLEVBQUU7c0JBQTBELGNBQ3BFLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDLFVBQzFDLENBQUMsUUFDVyx5QkFBeUIsQ0E0QnJDOzs7Ozs7Ozs7b0JBQ0Q7QUFBQyxJQURELGdDQUFDO0FBQ0EsQ0FEQSxBQTVCRCxJQTRCQztBQUNELFNBN0JhLHlCQUF5QjtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgZm9yd2FyZFJlZiwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgVmFsaWRhdG9yRm4sIEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgZ3RlIH0gZnJvbSAnLi92YWxpZGF0b3InO1xuXG5jb25zdCBHUkVBVEVSX1RIQU5fRVFVQUxfVkFMSURBVE9SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEdyZWF0ZXJUaGFuRXF1YWxWYWxpZGF0b3IpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2d0ZV1bZm9ybUNvbnRyb2xOYW1lXSxbZ3RlXVtmb3JtQ29udHJvbF0sW2d0ZV1bbmdNb2RlbF0nLFxuICBwcm92aWRlcnM6IFtHUkVBVEVSX1RIQU5fRVFVQUxfVkFMSURBVE9SXVxufSlcbmV4cG9ydCBjbGFzcyBHcmVhdGVyVGhhbkVxdWFsVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yLCBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGd0ZTogbnVtYmVyO1xuXG4gIHByaXZhdGUgdmFsaWRhdG9yOiBWYWxpZGF0b3JGbjtcbiAgcHJpdmF0ZSBvbkNoYW5nZTogKCkgPT4gdm9pZDtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnZhbGlkYXRvciA9IGd0ZSh0aGlzLmd0ZSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gY2hhbmdlcykge1xuICAgICAgaWYgKGtleSA9PT0gJ2d0ZScpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBndGUoY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0ge1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcihjKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cbn1cbiJdfQ==