import * as tslib_1 from "tslib";
import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { min } from './validator';
import * as ɵngcc0 from '@angular/core';
var MIN_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return MinValidator; }),
    multi: true
};
var MinValidator = /** @class */ (function () {
    function MinValidator() {
    }
    MinValidator.prototype.ngOnInit = function () {
        this.validator = min(this.min);
    };
    MinValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'min') {
                this.validator = min(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    };
    MinValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    MinValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], MinValidator.prototype, "min", void 0);
MinValidator.ɵfac = function MinValidator_Factory(t) { return new (t || MinValidator)(); };
MinValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MinValidator, selectors: [["", "min", "", "formControlName", ""], ["", "min", "", "formControl", ""], ["", "min", "", "ngModel", ""]], inputs: { min: "min" }, features: [ɵngcc0.ɵɵProvidersFeature([MIN_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MinValidator, [{
        type: Directive,
        args: [{
                selector: '[min][formControlName],[min][formControl],[min][ngModel]',
                providers: [MIN_VALIDATOR]
            }]
    }], function () { return []; }, { min: [{
            type: Input
        }] }); })();
    return MinValidator;
}());
export { MinValidator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmd4LWN1c3RvbS12YWxpZGF0b3JzL3NyYy9hcHAvbWluL2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQUUsYUFBYSxFQUEyQyxNQUFNLGdCQUFnQixDQUFDO0FBRXhGLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBRWxDLElBQU0sYUFBYSxHQUFRO0FBQzNCLElBQUUsT0FBTyxFQUFFLGFBQWE7QUFDeEIsSUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxZQUFZLEVBQVosQ0FBWSxDQUFDO0FBQzdDLElBQUUsS0FBSyxFQUFFLElBQUk7QUFDYixDQUFDLENBQUM7QUFNRjtBQUFnRCxJQUFoRDtBQUEwQixJQTRCMUIsQ0FBQztBQUNELElBdkJFLCtCQUFRLEdBQVI7QUFDRCxRQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuQyxJQUFFLENBQUM7QUFFSCxJQUFFLGtDQUFXLEdBQVgsVUFBWSxPQUFzQjtBQUNwQyxRQUFJLEtBQUssSUFBTSxHQUFHLElBQUksT0FBTyxFQUFFO0FBQy9CLFlBQU0sSUFBSSxHQUFHLEtBQUssS0FBSyxFQUFFO0FBQ3pCLGdCQUFRLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN4RCxnQkFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDM0Isb0JBQVUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzFCLGlCQUFTO0FBQ1QsYUFBTztBQUNQLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFFSCxJQUFFLCtCQUFRLEdBQVIsVUFBUyxDQUFrQjtBQUFJLFFBQzdCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3QixJQUFFLENBQUM7QUFFSCxJQUFFLGdEQUF5QixHQUF6QixVQUEwQixFQUFjO0FBQUksUUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDdkIsSUFBRSxDQUFDO0FBQ0YsSUEzQlU7QUFFSixRQUZKLEtBQUssRUFBRTtBQUFFO0FBR1QsNkNBSG9CO0lBRFYsWUFBWSxnQ0FKeEIsU0FBUyxDQUFDLGNBQ1QsUUFBUSxFQUFFO2dEQUEwRCxjQUNwRSxTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFDM0IsQ0FBQyxRQUNXLFlBQVksQ0E0QnhCOzs7Ozs7Ozs7b0JBQ0Q7QUFBQyxJQURELG1CQUFDO0FBQ0EsQ0FEQSxBQTVCRCxJQTRCQztBQUNELFNBN0JhLFlBQVk7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIGZvcndhcmRSZWYsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBWYWxpZGF0b3IsIFZhbGlkYXRvckZuLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IG1pbiB9IGZyb20gJy4vdmFsaWRhdG9yJztcblxuY29uc3QgTUlOX1ZBTElEQVRPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNaW5WYWxpZGF0b3IpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21pbl1bZm9ybUNvbnRyb2xOYW1lXSxbbWluXVtmb3JtQ29udHJvbF0sW21pbl1bbmdNb2RlbF0nLFxuICBwcm92aWRlcnM6IFtNSU5fVkFMSURBVE9SXVxufSlcbmV4cG9ydCBjbGFzcyBNaW5WYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3IsIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbWluOiBudW1iZXI7XG5cbiAgcHJpdmF0ZSB2YWxpZGF0b3I6IFZhbGlkYXRvckZuO1xuICBwcml2YXRlIG9uQ2hhbmdlOiAoKSA9PiB2b2lkO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudmFsaWRhdG9yID0gbWluKHRoaXMubWluKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAoa2V5ID09PSAnbWluJykge1xuICAgICAgICB0aGlzLnZhbGlkYXRvciA9IG1pbihjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlKTtcbiAgICAgICAgaWYgKHRoaXMub25DaGFuZ2UpIHtcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yKGMpO1xuICB9XG5cbiAgcmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxufVxuIl19