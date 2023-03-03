import * as tslib_1 from "tslib";
import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { range } from './validator';
import * as ɵngcc0 from '@angular/core';
var RANGE_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return RangeValidator; }),
    multi: true
};
var RangeValidator = /** @class */ (function () {
    function RangeValidator() {
    }
    RangeValidator.prototype.ngOnInit = function () {
        this.validator = range(this.range);
    };
    RangeValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'range') {
                this.validator = range(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    };
    RangeValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    RangeValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], RangeValidator.prototype, "range", void 0);
RangeValidator.ɵfac = function RangeValidator_Factory(t) { return new (t || RangeValidator)(); };
RangeValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: RangeValidator, selectors: [["", "range", "", "formControlName", ""], ["", "range", "", "formControl", ""], ["", "range", "", "ngModel", ""]], inputs: { range: "range" }, features: [ɵngcc0.ɵɵProvidersFeature([RANGE_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RangeValidator, [{
        type: Directive,
        args: [{
                selector: '[range][formControlName],[range][formControl],[range][ngModel]',
                providers: [RANGE_VALIDATOR]
            }]
    }], function () { return []; }, { range: [{
            type: Input
        }] }); })();
    return RangeValidator;
}());
export { RangeValidator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmd4LWN1c3RvbS12YWxpZGF0b3JzL3NyYy9hcHAvcmFuZ2UvZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQy9GLE9BQU8sRUFBRSxhQUFhLEVBQTJDLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEYsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFFcEMsSUFBTSxlQUFlLEdBQVE7QUFDN0IsSUFBRSxPQUFPLEVBQUUsYUFBYTtBQUN4QixJQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGNBQWMsRUFBZCxDQUFjLENBQUM7QUFDL0MsSUFBRSxLQUFLLEVBQUUsSUFBSTtBQUNiLENBQUMsQ0FBQztBQU1GO0FBQWtELElBQWxEO0FBQTRCLElBNEI1QixDQUFDO0FBQ0QsSUF2QkUsaUNBQVEsR0FBUjtBQUNELFFBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3ZDLElBQUUsQ0FBQztBQUVILElBQUUsb0NBQVcsR0FBWCxVQUFZLE9BQXNCO0FBQ3BDLFFBQUksS0FBSyxJQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUU7QUFDL0IsWUFBTSxJQUFJLEdBQUcsS0FBSyxPQUFPLEVBQUU7QUFDM0IsZ0JBQVEsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzFELGdCQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUMzQixvQkFBVSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDMUIsaUJBQVM7QUFDVCxhQUFPO0FBQ1AsU0FBSztBQUNMLElBQUUsQ0FBQztBQUVILElBQUUsaUNBQVEsR0FBUixVQUFTLENBQWtCO0FBQUksUUFDN0IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdCLElBQUUsQ0FBQztBQUVILElBQUUsa0RBQXlCLEdBQXpCLFVBQTBCLEVBQWM7QUFBSSxRQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUN2QixJQUFFLENBQUM7QUFDRixJQTNCVTtBQUVSLFFBRkEsS0FBSyxFQUFFO0FBQUU7QUFFb0IsaURBRkw7SUFEZCxjQUFjLGdDQUoxQixTQUFTLENBQUMsY0FDVCxRQUFRLEVBQUU7a0RBQWdFLGNBQzFFLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxVQUM3QixDQUFDLFFBQ1csY0FBYyxDQTRCMUI7Ozs7Ozs7OztvQkFDRDtBQUFDLElBREQscUJBQUM7QUFDQSxDQURBLEFBNUJELElBNEJDO0FBQ0QsU0E3QmEsY0FBYztBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgZm9yd2FyZFJlZiwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgVmFsaWRhdG9yRm4sIEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgcmFuZ2UgfSBmcm9tICcuL3ZhbGlkYXRvcic7XG5cbmNvbnN0IFJBTkdFX1ZBTElEQVRPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBSYW5nZVZhbGlkYXRvciksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcmFuZ2VdW2Zvcm1Db250cm9sTmFtZV0sW3JhbmdlXVtmb3JtQ29udHJvbF0sW3JhbmdlXVtuZ01vZGVsXScsXG4gIHByb3ZpZGVyczogW1JBTkdFX1ZBTElEQVRPUl1cbn0pXG5leHBvcnQgY2xhc3MgUmFuZ2VWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3IsIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgcmFuZ2U6IFtudW1iZXJdO1xuXG4gIHByaXZhdGUgdmFsaWRhdG9yOiBWYWxpZGF0b3JGbjtcbiAgcHJpdmF0ZSBvbkNoYW5nZTogKCkgPT4gdm9pZDtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnZhbGlkYXRvciA9IHJhbmdlKHRoaXMucmFuZ2UpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGNoYW5nZXMpIHtcbiAgICAgIGlmIChrZXkgPT09ICdyYW5nZScpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSByYW5nZShjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlKTtcbiAgICAgICAgaWYgKHRoaXMub25DaGFuZ2UpIHtcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yKGMpO1xuICB9XG5cbiAgcmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxufVxuIl19