import * as tslib_1 from "tslib";
import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { arrayLength } from './validator';
import * as ɵngcc0 from '@angular/core';
var ARRAY_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return ArrayLengthValidator; }),
    multi: true
};
var ArrayLengthValidator = /** @class */ (function () {
    function ArrayLengthValidator() {
    }
    ArrayLengthValidator.prototype.ngOnInit = function () {
        this.validator = arrayLength(this.arrayLength);
    };
    ArrayLengthValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'arrayLength') {
                this.validator = arrayLength(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    };
    ArrayLengthValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    ArrayLengthValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], ArrayLengthValidator.prototype, "arrayLength", void 0);
ArrayLengthValidator.ɵfac = function ArrayLengthValidator_Factory(t) { return new (t || ArrayLengthValidator)(); };
ArrayLengthValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ArrayLengthValidator, selectors: [["", "arrayLength", "", "formControlName", ""], ["", "arrayLength", "", "formControl", ""], ["", "arrayLength", "", "ngModel", ""]], inputs: { arrayLength: "arrayLength" }, features: [ɵngcc0.ɵɵProvidersFeature([ARRAY_LENGTH_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ArrayLengthValidator, [{
        type: Directive,
        args: [{
                selector: '[arrayLength][formControlName],[arrayLength][formControl],[arrayLength][ngModel]',
                providers: [ARRAY_LENGTH_VALIDATOR]
            }]
    }], function () { return []; }, { arrayLength: [{
            type: Input
        }] }); })();
    return ArrayLengthValidator;
}());
export { ArrayLengthValidator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmd4LWN1c3RvbS12YWxpZGF0b3JzL3NyYy9hcHAvYXJyYXktbGVuZ3RoL2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQUUsYUFBYSxFQUEyQyxNQUFNLGdCQUFnQixDQUFDO0FBRXhGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBRTFDLElBQU0sc0JBQXNCLEdBQVE7QUFDcEMsSUFBRSxPQUFPLEVBQUUsYUFBYTtBQUN4QixJQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLG9CQUFvQixFQUFwQixDQUFvQixDQUFDO0FBQ3JELElBQUUsS0FBSyxFQUFFLElBQUk7QUFDYixDQUFDLENBQUM7QUFNRjtBQUF3RCxJQUF4RDtBQUFrQyxJQTRCbEMsQ0FBQztBQUNELElBdkJFLHVDQUFRLEdBQVI7QUFDRCxRQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNuRCxJQUFFLENBQUM7QUFFSCxJQUFFLDBDQUFXLEdBQVgsVUFBWSxPQUFzQjtBQUNwQyxRQUFJLEtBQUssSUFBTSxHQUFHLElBQUksT0FBTyxFQUFFO0FBQy9CLFlBQU0sSUFBSSxHQUFHLEtBQUssYUFBYSxFQUFFO0FBQ2pDLGdCQUFRLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNoRSxnQkFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDM0Isb0JBQVUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzFCLGlCQUFTO0FBQ1QsYUFBTztBQUNQLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFFSCxJQUFFLHVDQUFRLEdBQVIsVUFBUyxDQUFrQjtBQUFJLFFBQzdCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3QixJQUFFLENBQUM7QUFFSCxJQUFFLHdEQUF5QixHQUF6QixVQUEwQixFQUFjO0FBQUksUUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDdkIsSUFBRSxDQUFDO0FBQ0YsSUEzQlU7QUFDWCxRQURHLEtBQUssRUFBRTtBQUFFO0FBRWlCLDZEQUZFO0lBRGxCLG9CQUFvQixnQ0FKaEMsU0FBUyxDQUFDLGNBQ1QsUUFBUSxFQUFFO3dEQUFrRixjQUM1RixTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxVQUNwQyxDQUFDLFFBQ1csb0JBQW9CLENBNEJoQzs7Ozs7Ozs7O29CQUNEO0FBQUMsSUFERCwyQkFBQztBQUNBLENBREEsQUE1QkQsSUE0QkM7QUFDRCxTQTdCYSxvQkFBb0I7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIGZvcndhcmRSZWYsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBWYWxpZGF0b3IsIFZhbGlkYXRvckZuLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IGFycmF5TGVuZ3RoIH0gZnJvbSAnLi92YWxpZGF0b3InO1xuXG5jb25zdCBBUlJBWV9MRU5HVEhfVkFMSURBVE9SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEFycmF5TGVuZ3RoVmFsaWRhdG9yKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thcnJheUxlbmd0aF1bZm9ybUNvbnRyb2xOYW1lXSxbYXJyYXlMZW5ndGhdW2Zvcm1Db250cm9sXSxbYXJyYXlMZW5ndGhdW25nTW9kZWxdJyxcbiAgcHJvdmlkZXJzOiBbQVJSQVlfTEVOR1RIX1ZBTElEQVRPUl1cbn0pXG5leHBvcnQgY2xhc3MgQXJyYXlMZW5ndGhWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3IsIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgYXJyYXlMZW5ndGg6IG51bWJlcjtcblxuICBwcml2YXRlIHZhbGlkYXRvcjogVmFsaWRhdG9yRm47XG4gIHByaXZhdGUgb25DaGFuZ2U6ICgpID0+IHZvaWQ7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy52YWxpZGF0b3IgPSBhcnJheUxlbmd0aCh0aGlzLmFycmF5TGVuZ3RoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAoa2V5ID09PSAnYXJyYXlMZW5ndGgnKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gYXJyYXlMZW5ndGgoY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0ge1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcihjKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cbn1cbiJdfQ==