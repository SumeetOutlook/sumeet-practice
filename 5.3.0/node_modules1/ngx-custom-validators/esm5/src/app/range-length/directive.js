import * as tslib_1 from "tslib";
import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { rangeLength } from './validator';
import * as ɵngcc0 from '@angular/core';
var RANGE_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return RangeLengthValidator; }),
    multi: true
};
var RangeLengthValidator = /** @class */ (function () {
    function RangeLengthValidator() {
    }
    RangeLengthValidator.prototype.ngOnInit = function () {
        this.validator = rangeLength(this.rangeLength);
    };
    RangeLengthValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'rangeLength') {
                this.validator = rangeLength(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    };
    RangeLengthValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    RangeLengthValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], RangeLengthValidator.prototype, "rangeLength", void 0);
RangeLengthValidator.ɵfac = function RangeLengthValidator_Factory(t) { return new (t || RangeLengthValidator)(); };
RangeLengthValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: RangeLengthValidator, selectors: [["", "rangeLength", "", "formControlName", ""], ["", "rangeLength", "", "formControl", ""], ["", "rangeLength", "", "ngModel", ""]], inputs: { rangeLength: "rangeLength" }, features: [ɵngcc0.ɵɵProvidersFeature([RANGE_LENGTH_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RangeLengthValidator, [{
        type: Directive,
        args: [{
                selector: '[rangeLength][formControlName],[rangeLength][formControl],[rangeLength][ngModel]',
                providers: [RANGE_LENGTH_VALIDATOR]
            }]
    }], function () { return []; }, { rangeLength: [{
            type: Input
        }] }); })();
    return RangeLengthValidator;
}());
export { RangeLengthValidator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmd4LWN1c3RvbS12YWxpZGF0b3JzL3NyYy9hcHAvcmFuZ2UtbGVuZ3RoL2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQUUsYUFBYSxFQUEyQyxNQUFNLGdCQUFnQixDQUFDO0FBRXhGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBRTFDLElBQU0sc0JBQXNCLEdBQVE7QUFDcEMsSUFBRSxPQUFPLEVBQUUsYUFBYTtBQUN4QixJQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLG9CQUFvQixFQUFwQixDQUFvQixDQUFDO0FBQ3JELElBQUUsS0FBSyxFQUFFLElBQUk7QUFDYixDQUFDLENBQUM7QUFNRjtBQUF3RCxJQUF4RDtBQUFrQyxJQTRCbEMsQ0FBQztBQUNELElBdkJFLHVDQUFRLEdBQVI7QUFDRCxRQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNuRCxJQUFFLENBQUM7QUFFSCxJQUFFLDBDQUFXLEdBQVgsVUFBWSxPQUFzQjtBQUNwQyxRQUFJLEtBQUssSUFBTSxHQUFHLElBQUksT0FBTyxFQUFFO0FBQy9CLFlBQU0sSUFBSSxHQUFHLEtBQUssYUFBYSxFQUFFO0FBQ2pDLGdCQUFRLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNoRSxnQkFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDM0Isb0JBQVUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzFCLGlCQUFTO0FBQ1QsYUFBTztBQUNQLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFFSCxJQUFFLHVDQUFRLEdBQVIsVUFBUyxDQUFrQjtBQUFJLFFBQzdCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3QixJQUFFLENBQUM7QUFFSCxJQUFFLHdEQUF5QixHQUF6QixVQUEwQixFQUFjO0FBQUksUUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDdkIsSUFBRSxDQUFDO0FBQ0YsSUEzQlU7QUFBcUIsUUFBN0IsS0FBSyxFQUFFO0FBQUU7QUFFYyw2REFGTztJQURwQixvQkFBb0IsZ0NBSmhDLFNBQVMsQ0FBQyxjQUNULFFBQVEsRUFBRTt3REFBa0YsY0FDNUYsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUMsVUFDcEMsQ0FBQyxRQUNXLG9CQUFvQixDQTRCaEM7Ozs7Ozs7OztvQkFDRDtBQUFDLElBREQsMkJBQUM7QUFDQSxDQURBLEFBNUJELElBNEJDO0FBQ0QsU0E3QmEsb0JBQW9CO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBmb3J3YXJkUmVmLCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBWYWxpZGF0b3JGbiwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyByYW5nZUxlbmd0aCB9IGZyb20gJy4vdmFsaWRhdG9yJztcblxuY29uc3QgUkFOR0VfTEVOR1RIX1ZBTElEQVRPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBSYW5nZUxlbmd0aFZhbGlkYXRvciksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcmFuZ2VMZW5ndGhdW2Zvcm1Db250cm9sTmFtZV0sW3JhbmdlTGVuZ3RoXVtmb3JtQ29udHJvbF0sW3JhbmdlTGVuZ3RoXVtuZ01vZGVsXScsXG4gIHByb3ZpZGVyczogW1JBTkdFX0xFTkdUSF9WQUxJREFUT1JdXG59KVxuZXhwb3J0IGNsYXNzIFJhbmdlTGVuZ3RoVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yLCBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHJhbmdlTGVuZ3RoOiBbbnVtYmVyXTtcblxuICBwcml2YXRlIHZhbGlkYXRvcjogVmFsaWRhdG9yRm47XG4gIHByaXZhdGUgb25DaGFuZ2U6ICgpID0+IHZvaWQ7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy52YWxpZGF0b3IgPSByYW5nZUxlbmd0aCh0aGlzLnJhbmdlTGVuZ3RoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAoa2V5ID09PSAncmFuZ2VMZW5ndGgnKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gcmFuZ2VMZW5ndGgoY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0ge1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcihjKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cbn1cbiJdfQ==