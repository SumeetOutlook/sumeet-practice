import * as tslib_1 from "tslib";
import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { minDate } from './validator';
import * as ɵngcc0 from '@angular/core';
var MIN_DATE_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return MinDateValidator; }),
    multi: true
};
var MinDateValidator = /** @class */ (function () {
    function MinDateValidator() {
    }
    MinDateValidator.prototype.ngOnInit = function () {
        this.validator = minDate(this.minDate);
    };
    MinDateValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'minDate') {
                this.validator = minDate(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    };
    MinDateValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    MinDateValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], MinDateValidator.prototype, "minDate", void 0);
MinDateValidator.ɵfac = function MinDateValidator_Factory(t) { return new (t || MinDateValidator)(); };
MinDateValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MinDateValidator, selectors: [["", "minDate", "", "formControlName", ""], ["", "minDate", "", "formControl", ""], ["", "minDate", "", "ngModel", ""]], inputs: { minDate: "minDate" }, features: [ɵngcc0.ɵɵProvidersFeature([MIN_DATE_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MinDateValidator, [{
        type: Directive,
        args: [{
                selector: '[minDate][formControlName],[minDate][formControl],[minDate][ngModel]',
                providers: [MIN_DATE_VALIDATOR]
            }]
    }], function () { return []; }, { minDate: [{
            type: Input
        }] }); })();
    return MinDateValidator;
}());
export { MinDateValidator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmd4LWN1c3RvbS12YWxpZGF0b3JzL3NyYy9hcHAvbWluLWRhdGUvZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQy9GLE9BQU8sRUFBRSxhQUFhLEVBQTJDLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFFdEMsSUFBTSxrQkFBa0IsR0FBUTtBQUNoQyxJQUFFLE9BQU8sRUFBRSxhQUFhO0FBQ3hCLElBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsZ0JBQWdCLEVBQWhCLENBQWdCLENBQUM7QUFDakQsSUFBRSxLQUFLLEVBQUUsSUFBSTtBQUNiLENBQUMsQ0FBQztBQU1GO0FBQW9ELElBQXBEO0FBQThCLElBNEI5QixDQUFDO0FBQ0QsSUF2QkUsbUNBQVEsR0FBUjtBQUNELFFBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzNDLElBQUUsQ0FBQztBQUVILElBQUUsc0NBQVcsR0FBWCxVQUFZLE9BQXNCO0FBQ3BDLFFBQUksS0FBSyxJQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUU7QUFDL0IsWUFBTSxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7QUFDN0IsZ0JBQVEsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzVELGdCQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUMzQixvQkFBVSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDMUIsaUJBQVM7QUFDVCxhQUFPO0FBQ1AsU0FBSztBQUNMLElBQUUsQ0FBQztBQUVILElBQUUsbUNBQVEsR0FBUixVQUFTLENBQWtCO0FBQUksUUFDN0IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdCLElBQUUsQ0FBQztBQUVILElBQUUsb0RBQXlCLEdBQXpCLFVBQTBCLEVBQWM7QUFBSSxRQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUN2QixJQUFFLENBQUM7QUFDRixJQTNCVTtBQUVBLFFBRlIsS0FBSyxFQUFFO0FBQUU7QUFHTCxxREFIWTtJQUROLGdCQUFnQixnQ0FKNUIsU0FBUyxDQUFDLGNBQ1QsUUFBUSxFQUFFO29EQUFzRSxjQUNoRixTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxVQUNoQyxDQUFDLFFBQ1csZ0JBQWdCLENBNEI1Qjs7Ozs7Ozs7O29CQUNEO0FBQUMsSUFERCx1QkFBQztBQUNBLENBREEsQUE1QkQsSUE0QkM7QUFDRCxTQTdCYSxnQkFBZ0I7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIGZvcndhcmRSZWYsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBWYWxpZGF0b3IsIFZhbGlkYXRvckZuLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IG1pbkRhdGUgfSBmcm9tICcuL3ZhbGlkYXRvcic7XG5cbmNvbnN0IE1JTl9EQVRFX1ZBTElEQVRPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNaW5EYXRlVmFsaWRhdG9yKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttaW5EYXRlXVtmb3JtQ29udHJvbE5hbWVdLFttaW5EYXRlXVtmb3JtQ29udHJvbF0sW21pbkRhdGVdW25nTW9kZWxdJyxcbiAgcHJvdmlkZXJzOiBbTUlOX0RBVEVfVkFMSURBVE9SXVxufSlcbmV4cG9ydCBjbGFzcyBNaW5EYXRlVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yLCBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG1pbkRhdGU7XG5cbiAgcHJpdmF0ZSB2YWxpZGF0b3I6IFZhbGlkYXRvckZuO1xuICBwcml2YXRlIG9uQ2hhbmdlOiAoKSA9PiB2b2lkO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudmFsaWRhdG9yID0gbWluRGF0ZSh0aGlzLm1pbkRhdGUpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGNoYW5nZXMpIHtcbiAgICAgIGlmIChrZXkgPT09ICdtaW5EYXRlJykge1xuICAgICAgICB0aGlzLnZhbGlkYXRvciA9IG1pbkRhdGUoY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0ge1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcihjKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cbn1cbiJdfQ==