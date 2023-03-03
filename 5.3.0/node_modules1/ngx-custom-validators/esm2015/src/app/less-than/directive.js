import * as tslib_1 from "tslib";
import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { lt } from './validator';
import * as ɵngcc0 from '@angular/core';
const LESS_THAN_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => LessThanValidator),
    multi: true
};
let LessThanValidator = class LessThanValidator {
    ngOnInit() {
        this.validator = lt(this.lt);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'lt') {
                this.validator = lt(changes[key].currentValue);
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
LessThanValidator.ɵfac = function LessThanValidator_Factory(t) { return new (t || LessThanValidator)(); };
LessThanValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: LessThanValidator, selectors: [["", "lt", "", "formControlName", ""], ["", "lt", "", "formControl", ""], ["", "lt", "", "ngModel", ""]], inputs: { lt: "lt" }, features: [ɵngcc0.ɵɵProvidersFeature([LESS_THAN_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], LessThanValidator.prototype, "lt", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LessThanValidator, [{
        type: Directive,
        args: [{
                selector: '[lt][formControlName],[lt][formControl],[lt][ngModel]',
                providers: [LESS_THAN_VALIDATOR]
            }]
    }], null, { lt: [{
            type: Input
        }] }); })();
export { LessThanValidator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmd4LWN1c3RvbS12YWxpZGF0b3JzL3NyYy9hcHAvbGVzcy10aGFuL2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQUUsYUFBYSxFQUEyQyxNQUFNLGdCQUFnQixDQUFDO0FBRXhGLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBRWpDLE1BQU0sbUJBQW1CLEdBQVE7QUFDakMsSUFBRSxPQUFPLEVBQUUsYUFBYTtBQUN4QixJQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUM7QUFDbEQsSUFBRSxLQUFLLEVBQUUsSUFBSTtBQUNiLENBQUMsQ0FBQztBQU1GLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0FBQUcsSUFNL0IsUUFBUTtBQUNWLFFBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2pDLElBQUUsQ0FBQztBQUNILElBQ0UsV0FBVyxDQUFDLE9BQXNCO0FBQ3BDLFFBQUksS0FBSyxNQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUU7QUFDL0IsWUFBTSxJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUU7QUFDeEIsZ0JBQVEsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3ZELGdCQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUMzQixvQkFBVSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDMUIsaUJBQVM7QUFDVCxhQUFPO0FBQ1AsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQ0UsUUFBUSxDQUFDLENBQWtCO0FBQUksUUFDN0IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdCLElBQUUsQ0FBQztBQUNILElBQ0UseUJBQXlCLENBQUMsRUFBYztBQUFJLFFBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ3ZCLElBQUUsQ0FBQztBQUNILENBQUM7O3NUQUFBO0FBM0JVO0FBRUgsSUFGTCxLQUFLLEVBQUU7QUFBRTtBQUdaLDZDQUhzQjtBQURULGlCQUFpQiw0QkFKN0IsU0FBUyxDQUFDLFVBQ1QsUUFBUSxFQUFFOzs7WUFBdUQsVUFDakUsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUMsTUFDakMsQ0FBQyxJQUNXLGlCQUFpQjtBQTRCN0I7Ozs7b0JBQ0Q7QUFBQyxTQTdCWSxpQkFBaUI7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIGZvcndhcmRSZWYsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBWYWxpZGF0b3IsIFZhbGlkYXRvckZuLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IGx0IH0gZnJvbSAnLi92YWxpZGF0b3InO1xuXG5jb25zdCBMRVNTX1RIQU5fVkFMSURBVE9SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IExlc3NUaGFuVmFsaWRhdG9yKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tsdF1bZm9ybUNvbnRyb2xOYW1lXSxbbHRdW2Zvcm1Db250cm9sXSxbbHRdW25nTW9kZWxdJyxcbiAgcHJvdmlkZXJzOiBbTEVTU19USEFOX1ZBTElEQVRPUl1cbn0pXG5leHBvcnQgY2xhc3MgTGVzc1RoYW5WYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3IsIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbHQ6IG51bWJlcjtcblxuICBwcml2YXRlIHZhbGlkYXRvcjogVmFsaWRhdG9yRm47XG4gIHByaXZhdGUgb25DaGFuZ2U6ICgpID0+IHZvaWQ7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy52YWxpZGF0b3IgPSBsdCh0aGlzLmx0KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAoa2V5ID09PSAnbHQnKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gbHQoY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0ge1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcihjKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cbn1cbiJdfQ==