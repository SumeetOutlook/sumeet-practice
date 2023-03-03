import * as tslib_1 from "tslib";
import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { uuid } from './validator';
import * as ɵngcc0 from '@angular/core';
const UUID_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => UUIDValidator),
    multi: true
};
let UUIDValidator = class UUIDValidator {
    ngOnInit() {
        this.validator = uuid(this.uuid);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'uuid') {
                this.validator = uuid(changes[key].currentValue);
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
UUIDValidator.ɵfac = function UUIDValidator_Factory(t) { return new (t || UUIDValidator)(); };
UUIDValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: UUIDValidator, selectors: [["", "uuid", "", "formControlName", ""], ["", "uuid", "", "formControl", ""], ["", "uuid", "", "ngModel", ""]], inputs: { uuid: "uuid" }, features: [ɵngcc0.ɵɵProvidersFeature([UUID_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], UUIDValidator.prototype, "uuid", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(UUIDValidator, [{
        type: Directive,
        args: [{
                selector: '[uuid][formControlName],[uuid][formControl],[uuid][ngModel]',
                providers: [UUID_VALIDATOR]
            }]
    }], null, { uuid: [{
            type: Input
        }] }); })();
export { UUIDValidator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmd4LWN1c3RvbS12YWxpZGF0b3JzL3NyYy9hcHAvdXVpZC9kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDL0YsT0FBTyxFQUFFLGFBQWEsRUFBMkMsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQUVuQyxNQUFNLGNBQWMsR0FBUTtBQUM1QixJQUFFLE9BQU8sRUFBRSxhQUFhO0FBQ3hCLElBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7QUFDOUMsSUFBRSxLQUFLLEVBQUUsSUFBSTtBQUNiLENBQUMsQ0FBQztBQU1GLElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7QUFBRyxJQU0zQixRQUFRO0FBQ1YsUUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckMsSUFBRSxDQUFDO0FBQ0gsSUFDRSxXQUFXLENBQUMsT0FBc0I7QUFDcEMsUUFBSSxLQUFLLE1BQU0sR0FBRyxJQUFJLE9BQU8sRUFBRTtBQUMvQixZQUFNLElBQUksR0FBRyxLQUFLLE1BQU0sRUFBRTtBQUMxQixnQkFBUSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDekQsZ0JBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQzNCLG9CQUFVLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUMxQixpQkFBUztBQUNULGFBQU87QUFDUCxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFDRSxRQUFRLENBQUMsQ0FBa0I7QUFBSSxRQUM3QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0IsSUFBRSxDQUFDO0FBQ0gsSUFDRSx5QkFBeUIsQ0FBQyxFQUFjO0FBQUksUUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDdkIsSUFBRSxDQUFDO0FBQ0gsQ0FBQzs7bVRBQUE7QUEzQlU7QUFFRyxJQUZYLEtBQUssRUFBRTtBQUFFO0FBR04sMkNBSFU7QUFESCxhQUFhLDRCQUp6QixTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUU7OztrQkFBNkQsVUFDdkUsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQzVCLENBQUMsSUFDVyxhQUFhLENBNEJ6Qjs7Ozs7b0JBQ0Q7QUFBQyxTQTdCWSxhQUFhO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBmb3J3YXJkUmVmLCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBWYWxpZGF0b3JGbiwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyB1dWlkIH0gZnJvbSAnLi92YWxpZGF0b3InO1xuXG5jb25zdCBVVUlEX1ZBTElEQVRPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBVVUlEVmFsaWRhdG9yKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t1dWlkXVtmb3JtQ29udHJvbE5hbWVdLFt1dWlkXVtmb3JtQ29udHJvbF0sW3V1aWRdW25nTW9kZWxdJyxcbiAgcHJvdmlkZXJzOiBbVVVJRF9WQUxJREFUT1JdXG59KVxuZXhwb3J0IGNsYXNzIFVVSURWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3IsIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgdXVpZDtcblxuICBwcml2YXRlIHZhbGlkYXRvcjogVmFsaWRhdG9yRm47XG4gIHByaXZhdGUgb25DaGFuZ2U6ICgpID0+IHZvaWQ7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy52YWxpZGF0b3IgPSB1dWlkKHRoaXMudXVpZCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gY2hhbmdlcykge1xuICAgICAgaWYgKGtleSA9PT0gJ3V1aWQnKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gdXVpZChjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlKTtcbiAgICAgICAgaWYgKHRoaXMub25DaGFuZ2UpIHtcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yKGMpO1xuICB9XG5cbiAgcmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxufVxuIl19