import * as tslib_1 from "tslib";
import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { equal } from './validator';
import * as ɵngcc0 from '@angular/core';
var EQUAL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return EqualValidator; }),
    multi: true
};
var EqualValidator = /** @class */ (function () {
    function EqualValidator() {
    }
    EqualValidator.prototype.ngOnInit = function () {
        this.validator = equal(this.equal);
    };
    EqualValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'equal') {
                this.validator = equal(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    };
    EqualValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    EqualValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], EqualValidator.prototype, "equal", void 0);
EqualValidator.ɵfac = function EqualValidator_Factory(t) { return new (t || EqualValidator)(); };
EqualValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: EqualValidator, selectors: [["", "equal", "", "formControlName", ""], ["", "equal", "", "formControl", ""], ["", "equal", "", "ngModel", ""]], inputs: { equal: "equal" }, features: [ɵngcc0.ɵɵProvidersFeature([EQUAL_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(EqualValidator, [{
        type: Directive,
        args: [{
                selector: '[equal][formControlName],[equal][formControl],[equal][ngModel]',
                providers: [EQUAL_VALIDATOR]
            }]
    }], function () { return []; }, { equal: [{
            type: Input
        }] }); })();
    return EqualValidator;
}());
export { EqualValidator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmd4LWN1c3RvbS12YWxpZGF0b3JzL3NyYy9hcHAvZXF1YWwvZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQy9GLE9BQU8sRUFBRSxhQUFhLEVBQTJDLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEYsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFFcEMsSUFBTSxlQUFlLEdBQVE7QUFDN0IsSUFBRSxPQUFPLEVBQUUsYUFBYTtBQUN4QixJQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGNBQWMsRUFBZCxDQUFjLENBQUM7QUFDL0MsSUFBRSxLQUFLLEVBQUUsSUFBSTtBQUNiLENBQUMsQ0FBQztBQU1GO0FBQWtELElBQWxEO0FBQTRCLElBNEI1QixDQUFDO0FBQ0QsSUF2QkUsaUNBQVEsR0FBUjtBQUNELFFBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3ZDLElBQUUsQ0FBQztBQUVILElBQUUsb0NBQVcsR0FBWCxVQUFZLE9BQXNCO0FBQ3BDLFFBQUksS0FBSyxJQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUU7QUFDL0IsWUFBTSxJQUFJLEdBQUcsS0FBSyxPQUFPLEVBQUU7QUFDM0IsZ0JBQVEsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzFELGdCQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUMzQixvQkFBVSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDMUIsaUJBQVM7QUFDVCxhQUFPO0FBQ1AsU0FBSztBQUNMLElBQUUsQ0FBQztBQUVILElBQUUsaUNBQVEsR0FBUixVQUFTLENBQWtCO0FBQUksUUFDN0IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdCLElBQUUsQ0FBQztBQUVILElBQUUsa0RBQXlCLEdBQXpCLFVBQTBCLEVBQWM7QUFBSSxRQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUN2QixJQUFFLENBQUM7QUFDRixJQTNCVTtBQUVILFFBRkwsS0FBSyxFQUFFO0FBQUU7QUFHUixpREFIa0I7SUFEVCxjQUFjLGdDQUoxQixTQUFTLENBQUMsY0FDVCxRQUFRLEVBQUU7a0RBQWdFLGNBQzFFLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxVQUM3QixDQUFDLFFBQ1csY0FBYyxDQTRCMUI7Ozs7Ozs7OztvQkFDRDtBQUFDLElBREQscUJBQUM7QUFDQSxDQURBLEFBNUJELElBNEJDO0FBQ0QsU0E3QmEsY0FBYztBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgZm9yd2FyZFJlZiwgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgVmFsaWRhdG9yRm4sIEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgZXF1YWwgfSBmcm9tICcuL3ZhbGlkYXRvcic7XG5cbmNvbnN0IEVRVUFMX1ZBTElEQVRPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFcXVhbFZhbGlkYXRvciksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZXF1YWxdW2Zvcm1Db250cm9sTmFtZV0sW2VxdWFsXVtmb3JtQ29udHJvbF0sW2VxdWFsXVtuZ01vZGVsXScsXG4gIHByb3ZpZGVyczogW0VRVUFMX1ZBTElEQVRPUl1cbn0pXG5leHBvcnQgY2xhc3MgRXF1YWxWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3IsIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgZXF1YWw6IGFueTtcblxuICBwcml2YXRlIHZhbGlkYXRvcjogVmFsaWRhdG9yRm47XG4gIHByaXZhdGUgb25DaGFuZ2U6ICgpID0+IHZvaWQ7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy52YWxpZGF0b3IgPSBlcXVhbCh0aGlzLmVxdWFsKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAoa2V5ID09PSAnZXF1YWwnKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gZXF1YWwoY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0ge1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcihjKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cbn1cbiJdfQ==