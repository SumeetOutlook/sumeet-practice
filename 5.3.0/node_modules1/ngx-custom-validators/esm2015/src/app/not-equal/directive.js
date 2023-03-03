import * as tslib_1 from "tslib";
import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { notEqual } from './validator';
import * as ɵngcc0 from '@angular/core';
const NOT_EQUAL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => NotEqualValidator),
    multi: true
};
let NotEqualValidator = class NotEqualValidator {
    ngOnInit() {
        this.validator = notEqual(this.notEqual);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'notEqual') {
                this.validator = notEqual(changes[key].currentValue);
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
NotEqualValidator.ɵfac = function NotEqualValidator_Factory(t) { return new (t || NotEqualValidator)(); };
NotEqualValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NotEqualValidator, selectors: [["", "notEqual", "", "formControlName", ""], ["", "notEqual", "", "formControl", ""], ["", "notEqual", "", "ngModel", ""]], inputs: { notEqual: "notEqual" }, features: [ɵngcc0.ɵɵProvidersFeature([NOT_EQUAL_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], NotEqualValidator.prototype, "notEqual", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NotEqualValidator, [{
        type: Directive,
        args: [{
                selector: '[notEqual][formControlName],[notEqual][formControl],[notEqual][ngModel]',
                providers: [NOT_EQUAL_VALIDATOR]
            }]
    }], null, { notEqual: [{
            type: Input
        }] }); })();
export { NotEqualValidator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmd4LWN1c3RvbS12YWxpZGF0b3JzL3NyYy9hcHAvbm90LWVxdWFsL2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQUUsYUFBYSxFQUEyQyxNQUFNLGdCQUFnQixDQUFDO0FBRXhGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBRXZDLE1BQU0sbUJBQW1CLEdBQVE7QUFDakMsSUFBRSxPQUFPLEVBQUUsYUFBYTtBQUN4QixJQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUM7QUFDbEQsSUFBRSxLQUFLLEVBQUUsSUFBSTtBQUNiLENBQUMsQ0FBQztBQU1GLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0FBQUcsSUFNL0IsUUFBUTtBQUNWLFFBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzdDLElBQUUsQ0FBQztBQUNILElBQ0UsV0FBVyxDQUFDLE9BQXNCO0FBQ3BDLFFBQUksS0FBSyxNQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUU7QUFDL0IsWUFBTSxJQUFJLEdBQUcsS0FBSyxVQUFVLEVBQUU7QUFDOUIsZ0JBQVEsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzdELGdCQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUMzQixvQkFBVSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDMUIsaUJBQVM7QUFDVCxhQUFPO0FBQ1AsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQ0UsUUFBUSxDQUFDLENBQWtCO0FBQUksUUFDN0IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdCLElBQUUsQ0FBQztBQUNILElBQ0UseUJBQXlCLENBQUMsRUFBYztBQUFJLFFBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ3ZCLElBQUUsQ0FBQztBQUNILENBQUM7O29WQUFBO0FBM0JVO0FBRU4sSUFGRixLQUFLLEVBQUU7QUFBRTtBQUVtQixtREFGTjtBQURaLGlCQUFpQiw0QkFKN0IsU0FBUyxDQUFDLFVBQ1QsUUFBUSxFQUFFOzs7OEJBQXlFLFVBQ25GLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLE1BQ2pDLENBQUMsSUFDVyxpQkFBaUI7QUE0QjdCOzs7O29CQUNEO0FBQUMsU0E3QlksaUJBQWlCO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBmb3J3YXJkUmVmLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBWYWxpZGF0b3JGbiwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBub3RFcXVhbCB9IGZyb20gJy4vdmFsaWRhdG9yJztcblxuY29uc3QgTk9UX0VRVUFMX1ZBTElEQVRPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3RFcXVhbFZhbGlkYXRvciksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbm90RXF1YWxdW2Zvcm1Db250cm9sTmFtZV0sW25vdEVxdWFsXVtmb3JtQ29udHJvbF0sW25vdEVxdWFsXVtuZ01vZGVsXScsXG4gIHByb3ZpZGVyczogW05PVF9FUVVBTF9WQUxJREFUT1JdXG59KVxuZXhwb3J0IGNsYXNzIE5vdEVxdWFsVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yLCBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG5vdEVxdWFsOiBhbnk7XG5cbiAgcHJpdmF0ZSB2YWxpZGF0b3I6IFZhbGlkYXRvckZuO1xuICBwcml2YXRlIG9uQ2hhbmdlOiAoKSA9PiB2b2lkO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudmFsaWRhdG9yID0gbm90RXF1YWwodGhpcy5ub3RFcXVhbCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gY2hhbmdlcykge1xuICAgICAgaWYgKGtleSA9PT0gJ25vdEVxdWFsJykge1xuICAgICAgICB0aGlzLnZhbGlkYXRvciA9IG5vdEVxdWFsKGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWUpO1xuICAgICAgICBpZiAodGhpcy5vbkNoYW5nZSkge1xuICAgICAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IoYyk7XG4gIH1cblxuICByZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG59XG4iXX0=