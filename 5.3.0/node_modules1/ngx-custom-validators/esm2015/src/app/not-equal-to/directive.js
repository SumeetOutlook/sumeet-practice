import * as tslib_1 from "tslib";
import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS, FormControl } from '@angular/forms';
import { notEqualTo } from './validator';
import * as ɵngcc0 from '@angular/core';
const NOT_EQUAL_TO_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => NotEqualToValidator),
    multi: true
};
let NotEqualToValidator = class NotEqualToValidator {
    ngOnInit() {
        this.validator = notEqualTo(this.notEqualTo);
    }
    validate(c) {
        return this.validator(c);
    }
};
NotEqualToValidator.ɵfac = function NotEqualToValidator_Factory(t) { return new (t || NotEqualToValidator)(); };
NotEqualToValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NotEqualToValidator, selectors: [["", "notEqualTo", "", "formControlName", ""], ["", "notEqualTo", "", "formControl", ""], ["", "notEqualTo", "", "ngModel", ""]], inputs: { notEqualTo: "notEqualTo" }, features: [ɵngcc0.ɵɵProvidersFeature([NOT_EQUAL_TO_VALIDATOR])] });
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", FormControl)
], NotEqualToValidator.prototype, "notEqualTo", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NotEqualToValidator, [{
        type: Directive,
        args: [{
                selector: '[notEqualTo][formControlName],[notEqualTo][formControl],[notEqualTo][ngModel]',
                providers: [NOT_EQUAL_TO_VALIDATOR]
            }]
    }], null, { notEqualTo: [{
            type: Input
        }] }); })();
export { NotEqualToValidator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmd4LWN1c3RvbS12YWxpZGF0b3JzL3NyYy9hcHAvbm90LWVxdWFsLXRvL2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxhQUFhLEVBQWEsV0FBVyxFQUFnQyxNQUFNLGdCQUFnQixDQUFDO0FBRXJHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBRXpDLE1BQU0sc0JBQXNCLEdBQVE7QUFDcEMsSUFBRSxPQUFPLEVBQUUsYUFBYTtBQUN4QixJQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsbUJBQW1CLENBQUM7QUFDcEQsSUFBRSxLQUFLLEVBQUUsSUFBSTtBQUNiLENBQUMsQ0FBQztBQU1GLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0FBQUcsSUFLakMsUUFBUTtBQUNWLFFBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2pELElBQUUsQ0FBQztBQUNILElBQ0UsUUFBUSxDQUFDLENBQWtCO0FBQUksUUFDN0IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdCLElBQUUsQ0FBQztBQUNILENBQUM7O3dVQUFBO0FBWFU7QUFBcUIsSUFBN0IsS0FBSyxFQUFFO0FBQUUsc0NBQVcsV0FBVztBQUNsQyx1REFEbUM7QUFEdEIsbUJBQW1CLDRCQUovQixTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUU7OztvQ0FBK0UsVUFDekYsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUMsTUFDcEMsQ0FBQyxJQUNXO0lBQW1CLENBWS9COzs7O29CQUNEO0FBQUMsU0FiWSxtQkFBbUI7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIGZvcndhcmRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9yRm4sIEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgbm90RXF1YWxUbyB9IGZyb20gJy4vdmFsaWRhdG9yJztcblxuY29uc3QgTk9UX0VRVUFMX1RPX1ZBTElEQVRPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3RFcXVhbFRvVmFsaWRhdG9yKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tub3RFcXVhbFRvXVtmb3JtQ29udHJvbE5hbWVdLFtub3RFcXVhbFRvXVtmb3JtQ29udHJvbF0sW25vdEVxdWFsVG9dW25nTW9kZWxdJyxcbiAgcHJvdmlkZXJzOiBbTk9UX0VRVUFMX1RPX1ZBTElEQVRPUl1cbn0pXG5leHBvcnQgY2xhc3MgTm90RXF1YWxUb1ZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciwgT25Jbml0IHtcbiAgQElucHV0KCkgbm90RXF1YWxUbzogRm9ybUNvbnRyb2w7XG5cbiAgcHJpdmF0ZSB2YWxpZGF0b3I6IFZhbGlkYXRvckZuO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudmFsaWRhdG9yID0gbm90RXF1YWxUbyh0aGlzLm5vdEVxdWFsVG8pO1xuICB9XG5cbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0ge1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcihjKTtcbiAgfVxufVxuIl19