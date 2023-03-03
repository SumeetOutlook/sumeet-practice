import * as tslib_1 from "tslib";
import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { rangeLength } from './validator';
import * as ɵngcc0 from '@angular/core';
const RANGE_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => RangeLengthValidator),
    multi: true
};
let RangeLengthValidator = class RangeLengthValidator {
    ngOnInit() {
        this.validator = rangeLength(this.rangeLength);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'rangeLength') {
                this.validator = rangeLength(changes[key].currentValue);
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
RangeLengthValidator.ɵfac = function RangeLengthValidator_Factory(t) { return new (t || RangeLengthValidator)(); };
RangeLengthValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: RangeLengthValidator, selectors: [["", "rangeLength", "", "formControlName", ""], ["", "rangeLength", "", "formControl", ""], ["", "rangeLength", "", "ngModel", ""]], inputs: { rangeLength: "rangeLength" }, features: [ɵngcc0.ɵɵProvidersFeature([RANGE_LENGTH_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], RangeLengthValidator.prototype, "rangeLength", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RangeLengthValidator, [{
        type: Directive,
        args: [{
                selector: '[rangeLength][formControlName],[rangeLength][formControl],[rangeLength][ngModel]',
                providers: [RANGE_LENGTH_VALIDATOR]
            }]
    }], null, { rangeLength: [{
            type: Input
        }] }); })();
export { RangeLengthValidator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmd4LWN1c3RvbS12YWxpZGF0b3JzL3NyYy9hcHAvcmFuZ2UtbGVuZ3RoL2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQUUsYUFBYSxFQUEyQyxNQUFNLGdCQUFnQixDQUFDO0FBRXhGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBRTFDLE1BQU0sc0JBQXNCLEdBQVE7QUFDcEMsSUFBRSxPQUFPLEVBQUUsYUFBYTtBQUN4QixJQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsb0JBQW9CLENBQUM7QUFDckQsSUFBRSxLQUFLLEVBQUUsSUFBSTtBQUNiLENBQUMsQ0FBQztBQU1GLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0FBQUcsSUFNbEMsUUFBUTtBQUNWLFFBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ25ELElBQUUsQ0FBQztBQUNILElBQ0UsV0FBVyxDQUFDLE9BQXNCO0FBQ3BDLFFBQUksS0FBSyxNQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUU7QUFDL0IsWUFBTSxJQUFJLEdBQUcsS0FBSyxhQUFhLEVBQUU7QUFDakMsZ0JBQVEsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ2hFLGdCQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUMzQixvQkFBVSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDMUIsaUJBQVM7QUFDVCxhQUFPO0FBQ1AsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQ0UsUUFBUSxDQUFDLENBQWtCO0FBQUksUUFDN0IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdCLElBQUUsQ0FBQztBQUNILElBQ0UseUJBQXlCLENBQUMsRUFBYztBQUFJLFFBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ3ZCLElBQUUsQ0FBQztBQUNILENBQUM7OzRXQUFBO0FBM0JVO0FBQXFCLElBQTdCLEtBQUssRUFBRTtBQUFFO0FBRVUseURBRlc7QUFEcEIsb0JBQW9CLDRCQUpoQyxTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUU7Ozt1Q0FBa0YsVUFDNUYsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUMsTUFDcEMsQ0FBQyxJQUNXO0tBQW9CLENBNEJoQzs7OztvQkFDRDtBQUFDLFNBN0JZLG9CQUFvQjtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgZm9yd2FyZFJlZiwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgVmFsaWRhdG9yRm4sIEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgcmFuZ2VMZW5ndGggfSBmcm9tICcuL3ZhbGlkYXRvcic7XG5cbmNvbnN0IFJBTkdFX0xFTkdUSF9WQUxJREFUT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUmFuZ2VMZW5ndGhWYWxpZGF0b3IpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3JhbmdlTGVuZ3RoXVtmb3JtQ29udHJvbE5hbWVdLFtyYW5nZUxlbmd0aF1bZm9ybUNvbnRyb2xdLFtyYW5nZUxlbmd0aF1bbmdNb2RlbF0nLFxuICBwcm92aWRlcnM6IFtSQU5HRV9MRU5HVEhfVkFMSURBVE9SXVxufSlcbmV4cG9ydCBjbGFzcyBSYW5nZUxlbmd0aFZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciwgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSByYW5nZUxlbmd0aDogW251bWJlcl07XG5cbiAgcHJpdmF0ZSB2YWxpZGF0b3I6IFZhbGlkYXRvckZuO1xuICBwcml2YXRlIG9uQ2hhbmdlOiAoKSA9PiB2b2lkO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudmFsaWRhdG9yID0gcmFuZ2VMZW5ndGgodGhpcy5yYW5nZUxlbmd0aCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gY2hhbmdlcykge1xuICAgICAgaWYgKGtleSA9PT0gJ3JhbmdlTGVuZ3RoJykge1xuICAgICAgICB0aGlzLnZhbGlkYXRvciA9IHJhbmdlTGVuZ3RoKGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWUpO1xuICAgICAgICBpZiAodGhpcy5vbkNoYW5nZSkge1xuICAgICAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IoYyk7XG4gIH1cblxuICByZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG59XG4iXX0=