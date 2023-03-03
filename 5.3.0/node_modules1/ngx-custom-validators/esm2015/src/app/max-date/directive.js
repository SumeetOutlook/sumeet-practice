import * as tslib_1 from "tslib";
import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { maxDate } from './validator';
import * as ɵngcc0 from '@angular/core';
const MAX_DATE_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => MaxDateValidator),
    multi: true
};
let MaxDateValidator = class MaxDateValidator {
    ngOnInit() {
        this.validator = maxDate(this.maxDate);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'maxDate') {
                this.validator = maxDate(changes[key].currentValue);
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
MaxDateValidator.ɵfac = function MaxDateValidator_Factory(t) { return new (t || MaxDateValidator)(); };
MaxDateValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MaxDateValidator, selectors: [["", "maxDate", "", "formControlName", ""], ["", "maxDate", "", "formControl", ""], ["", "maxDate", "", "ngModel", ""]], inputs: { maxDate: "maxDate" }, features: [ɵngcc0.ɵɵProvidersFeature([MAX_DATE_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], MaxDateValidator.prototype, "maxDate", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MaxDateValidator, [{
        type: Directive,
        args: [{
                selector: '[maxDate][formControlName],[maxDate][formControl],[maxDate][ngModel]',
                providers: [MAX_DATE_VALIDATOR]
            }]
    }], null, { maxDate: [{
            type: Input
        }] }); })();
export { MaxDateValidator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmd4LWN1c3RvbS12YWxpZGF0b3JzL3NyYy9hcHAvbWF4LWRhdGUvZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQy9GLE9BQU8sRUFBRSxhQUFhLEVBQTJDLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFFdEMsTUFBTSxrQkFBa0IsR0FBUTtBQUNoQyxJQUFFLE9BQU8sRUFBRSxhQUFhO0FBQ3hCLElBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztBQUNqRCxJQUFFLEtBQUssRUFBRSxJQUFJO0FBQ2IsQ0FBQyxDQUFDO0FBTUYsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7QUFBRyxJQU05QixRQUFRO0FBQ1YsUUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDM0MsSUFBRSxDQUFDO0FBQ0gsSUFDRSxXQUFXLENBQUMsT0FBc0I7QUFDcEMsUUFBSSxLQUFLLE1BQU0sR0FBRyxJQUFJLE9BQU8sRUFBRTtBQUMvQixZQUFNLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtBQUM3QixnQkFBUSxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDNUQsZ0JBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQzNCLG9CQUFVLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUMxQixpQkFBUztBQUNULGFBQU87QUFDUCxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFDRSxRQUFRLENBQUMsQ0FBa0I7QUFBSSxRQUM3QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0IsSUFBRSxDQUFDO0FBQ0gsSUFDRSx5QkFBeUIsQ0FBQyxFQUFjO0FBQUksUUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDdkIsSUFBRSxDQUFDO0FBQ0gsQ0FBQzs7NFVBQUE7QUEzQlU7QUFFQSxJQUZSLEtBQUssRUFBRTtBQUFFO0FBR1QsaURBSGdCO0FBRE4sZ0JBQWdCLDRCQUo1QixTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUU7OzsyQkFBc0UsVUFDaEYsU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUMsTUFDaEMsQ0FBQyxJQUNXLGdCQUFnQixDQTRCNUI7Ozs7O29CQUNEO0FBQUMsU0E3QlksZ0JBQWdCO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBmb3J3YXJkUmVmLCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBWYWxpZGF0b3JGbiwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBtYXhEYXRlIH0gZnJvbSAnLi92YWxpZGF0b3InO1xuXG5jb25zdCBNQVhfREFURV9WQUxJREFUT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTWF4RGF0ZVZhbGlkYXRvciksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWF4RGF0ZV1bZm9ybUNvbnRyb2xOYW1lXSxbbWF4RGF0ZV1bZm9ybUNvbnRyb2xdLFttYXhEYXRlXVtuZ01vZGVsXScsXG4gIHByb3ZpZGVyczogW01BWF9EQVRFX1ZBTElEQVRPUl1cbn0pXG5leHBvcnQgY2xhc3MgTWF4RGF0ZVZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciwgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBtYXhEYXRlO1xuXG4gIHByaXZhdGUgdmFsaWRhdG9yOiBWYWxpZGF0b3JGbjtcbiAgcHJpdmF0ZSBvbkNoYW5nZTogKCkgPT4gdm9pZDtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnZhbGlkYXRvciA9IG1heERhdGUodGhpcy5tYXhEYXRlKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAoa2V5ID09PSAnbWF4RGF0ZScpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBtYXhEYXRlKGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWUpO1xuICAgICAgICBpZiAodGhpcy5vbkNoYW5nZSkge1xuICAgICAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IoYyk7XG4gIH1cblxuICByZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG59XG4iXX0=