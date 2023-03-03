import * as tslib_1 from "tslib";
import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { gte } from './validator';
import * as ɵngcc0 from '@angular/core';
const GREATER_THAN_EQUAL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => GreaterThanEqualValidator),
    multi: true
};
let GreaterThanEqualValidator = class GreaterThanEqualValidator {
    ngOnInit() {
        this.validator = gte(this.gte);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'gte') {
                this.validator = gte(changes[key].currentValue);
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
GreaterThanEqualValidator.ɵfac = function GreaterThanEqualValidator_Factory(t) { return new (t || GreaterThanEqualValidator)(); };
GreaterThanEqualValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: GreaterThanEqualValidator, selectors: [["", "gte", "", "formControlName", ""], ["", "gte", "", "formControl", ""], ["", "gte", "", "ngModel", ""]], inputs: { gte: "gte" }, features: [ɵngcc0.ɵɵProvidersFeature([GREATER_THAN_EQUAL_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], GreaterThanEqualValidator.prototype, "gte", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GreaterThanEqualValidator, [{
        type: Directive,
        args: [{
                selector: '[gte][formControlName],[gte][formControl],[gte][ngModel]',
                providers: [GREATER_THAN_EQUAL_VALIDATOR]
            }]
    }], null, { gte: [{
            type: Input
        }] }); })();
export { GreaterThanEqualValidator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmd4LWN1c3RvbS12YWxpZGF0b3JzL3NyYy9hcHAvZ3JlYXRlci10aGFuLWVxdWFsL2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQUUsYUFBYSxFQUEyQyxNQUFNLGdCQUFnQixDQUFDO0FBRXhGLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBRWxDLE1BQU0sNEJBQTRCLEdBQVE7QUFDMUMsSUFBRSxPQUFPLEVBQUUsYUFBYTtBQUN4QixJQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMseUJBQXlCLENBQUM7QUFDMUQsSUFBRSxLQUFLLEVBQUUsSUFBSTtBQUNiLENBQUMsQ0FBQztBQU1GLElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQXlCO0FBQUcsSUFNdkMsUUFBUTtBQUNWLFFBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ25DLElBQUUsQ0FBQztBQUNILElBQ0UsV0FBVyxDQUFDLE9BQXNCO0FBQ3BDLFFBQUksS0FBSyxNQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUU7QUFDL0IsWUFBTSxJQUFJLEdBQUcsS0FBSyxLQUFLLEVBQUU7QUFDekIsZ0JBQVEsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3hELGdCQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUMzQixvQkFBVSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDMUIsaUJBQVM7QUFDVCxhQUFPO0FBQ1AsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQ0UsUUFBUSxDQUFDLENBQWtCO0FBQUksUUFDN0IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdCLElBQUUsQ0FBQztBQUNILElBQ0UseUJBQXlCLENBQUMsRUFBYztBQUFJLFFBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ3ZCLElBQUUsQ0FBQztBQUNILENBQUM7O29WQUFBO0FBM0JVO0FBRUosSUFGSixLQUFLLEVBQUU7QUFBRTtBQUVxQixzREFGVjtBQURWLHlCQUF5Qiw0QkFKckMsU0FBUyxDQUFDLFVBQ1QsUUFBUSxFQUFFOzs7ZUFBMEQsVUFDcEUsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUMsTUFDMUMsQ0FBQyxJQUNXO2dCQUF5QixDQTRCckM7Ozs7b0JBQ0Q7QUFBQyxTQTdCWSx5QkFBeUI7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIGZvcndhcmRSZWYsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBWYWxpZGF0b3IsIFZhbGlkYXRvckZuLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IGd0ZSB9IGZyb20gJy4vdmFsaWRhdG9yJztcblxuY29uc3QgR1JFQVRFUl9USEFOX0VRVUFMX1ZBTElEQVRPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBHcmVhdGVyVGhhbkVxdWFsVmFsaWRhdG9yKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tndGVdW2Zvcm1Db250cm9sTmFtZV0sW2d0ZV1bZm9ybUNvbnRyb2xdLFtndGVdW25nTW9kZWxdJyxcbiAgcHJvdmlkZXJzOiBbR1JFQVRFUl9USEFOX0VRVUFMX1ZBTElEQVRPUl1cbn0pXG5leHBvcnQgY2xhc3MgR3JlYXRlclRoYW5FcXVhbFZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciwgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBndGU6IG51bWJlcjtcblxuICBwcml2YXRlIHZhbGlkYXRvcjogVmFsaWRhdG9yRm47XG4gIHByaXZhdGUgb25DaGFuZ2U6ICgpID0+IHZvaWQ7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy52YWxpZGF0b3IgPSBndGUodGhpcy5ndGUpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGNoYW5nZXMpIHtcbiAgICAgIGlmIChrZXkgPT09ICdndGUnKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gZ3RlKGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWUpO1xuICAgICAgICBpZiAodGhpcy5vbkNoYW5nZSkge1xuICAgICAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IoYyk7XG4gIH1cblxuICByZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG59XG4iXX0=