import * as tslib_1 from "tslib";
import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { arrayLength } from './validator';
import * as ɵngcc0 from '@angular/core';
const ARRAY_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => ArrayLengthValidator),
    multi: true
};
let ArrayLengthValidator = class ArrayLengthValidator {
    ngOnInit() {
        this.validator = arrayLength(this.arrayLength);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'arrayLength') {
                this.validator = arrayLength(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
ArrayLengthValidator.ɵfac = function ArrayLengthValidator_Factory(t) { return new (t || ArrayLengthValidator)(); };
ArrayLengthValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ArrayLengthValidator, selectors: [["", "arrayLength", "", "formControlName", ""], ["", "arrayLength", "", "formControl", ""], ["", "arrayLength", "", "ngModel", ""]], inputs: { arrayLength: "arrayLength" }, features: [ɵngcc0.ɵɵProvidersFeature([ARRAY_LENGTH_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], ArrayLengthValidator.prototype, "arrayLength", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ArrayLengthValidator, [{
        type: Directive,
        args: [{
                selector: '[arrayLength][formControlName],[arrayLength][formControl],[arrayLength][ngModel]',
                providers: [ARRAY_LENGTH_VALIDATOR]
            }]
    }], null, { arrayLength: [{
            type: Input
        }] }); })();
export { ArrayLengthValidator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmd4LWN1c3RvbS12YWxpZGF0b3JzL3NyYy9hcHAvYXJyYXktbGVuZ3RoL2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQUUsYUFBYSxFQUEyQyxNQUFNLGdCQUFnQixDQUFDO0FBRXhGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBRTFDLE1BQU0sc0JBQXNCLEdBQVE7QUFDcEMsSUFBRSxPQUFPLEVBQUUsYUFBYTtBQUN4QixJQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsb0JBQW9CLENBQUM7QUFDckQsSUFBRSxLQUFLLEVBQUUsSUFBSTtBQUNiLENBQUMsQ0FBQztBQU1GLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0FBQUcsSUFNbEMsUUFBUTtBQUNWLFFBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ25ELElBQUUsQ0FBQztBQUNILElBQ0UsV0FBVyxDQUFDLE9BQXNCO0FBQ3BDLFFBQUksS0FBSyxNQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUU7QUFDL0IsWUFBTSxJQUFJLEdBQUcsS0FBSyxhQUFhLEVBQUU7QUFDakMsZ0JBQVEsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ2hFLGdCQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUMzQixvQkFBVSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDMUIsaUJBQVM7QUFDVCxhQUFPO0FBQ1AsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQ0UsUUFBUSxDQUFDLENBQWtCO0FBQUksUUFDN0IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdCLElBQUUsQ0FBQztBQUNILElBQ0UseUJBQXlCLENBQUMsRUFBYztBQUFJLFFBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ3ZCLElBQUUsQ0FBQztBQUNILENBQUM7OzRXQUFBO0FBM0JVO0FBQ1gsSUFERyxLQUFLLEVBQUU7QUFBRTtBQUVhLHlEQUZNO0FBRGxCLG9CQUFvQiw0QkFKaEMsU0FBUyxDQUFDLFVBQ1QsUUFBUSxFQUFFOzs7dUNBQWtGLFVBQzVGLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDLE1BQ3BDLENBQUMsSUFDVztLQUFvQixDQTRCaEM7Ozs7b0JBQ0Q7QUFBQyxTQTdCWSxvQkFBb0I7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIGZvcndhcmRSZWYsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBWYWxpZGF0b3IsIFZhbGlkYXRvckZuLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IGFycmF5TGVuZ3RoIH0gZnJvbSAnLi92YWxpZGF0b3InO1xuXG5jb25zdCBBUlJBWV9MRU5HVEhfVkFMSURBVE9SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEFycmF5TGVuZ3RoVmFsaWRhdG9yKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thcnJheUxlbmd0aF1bZm9ybUNvbnRyb2xOYW1lXSxbYXJyYXlMZW5ndGhdW2Zvcm1Db250cm9sXSxbYXJyYXlMZW5ndGhdW25nTW9kZWxdJyxcbiAgcHJvdmlkZXJzOiBbQVJSQVlfTEVOR1RIX1ZBTElEQVRPUl1cbn0pXG5leHBvcnQgY2xhc3MgQXJyYXlMZW5ndGhWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3IsIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgYXJyYXlMZW5ndGg6IG51bWJlcjtcblxuICBwcml2YXRlIHZhbGlkYXRvcjogVmFsaWRhdG9yRm47XG4gIHByaXZhdGUgb25DaGFuZ2U6ICgpID0+IHZvaWQ7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy52YWxpZGF0b3IgPSBhcnJheUxlbmd0aCh0aGlzLmFycmF5TGVuZ3RoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAoa2V5ID09PSAnYXJyYXlMZW5ndGgnKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gYXJyYXlMZW5ndGgoY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0ge1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcihjKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cbn1cbiJdfQ==