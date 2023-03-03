import * as tslib_1 from "tslib";
import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { url } from './validator';
import * as ɵngcc0 from '@angular/core';
var URL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return UrlValidator; }),
    multi: true
};
var UrlValidator = /** @class */ (function () {
    function UrlValidator() {
    }
    UrlValidator.prototype.validate = function (c) {
        return url(c);
    };
UrlValidator.ɵfac = function UrlValidator_Factory(t) { return new (t || UrlValidator)(); };
UrlValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: UrlValidator, selectors: [["", "url", "", "formControlName", ""], ["", "url", "", "formControl", ""], ["", "url", "", "ngModel", ""]], features: [ɵngcc0.ɵɵProvidersFeature([URL_VALIDATOR])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(UrlValidator, [{
        type: Directive,
        args: [{
                selector: '[url][formControlName],[url][formControl],[url][ngModel]',
                providers: [URL_VALIDATOR]
            }]
    }], function () { return []; }, null); })();
    return UrlValidator;
}());
export { UrlValidator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmd4LWN1c3RvbS12YWxpZGF0b3JzL3NyYy9hcHAvdXJsL2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBOEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQUVsQyxJQUFNLGFBQWEsR0FBUTtBQUMzQixJQUFFLE9BQU8sRUFBRSxhQUFhO0FBQ3hCLElBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsWUFBWSxFQUFaLENBQVksQ0FBQztBQUM3QyxJQUFFLEtBQUssRUFBRSxJQUFJO0FBQ2IsQ0FBQyxDQUFDO0FBTUY7QUFBZ0QsSUFBaEQ7QUFBMEIsSUFJMUIsQ0FBQztBQUNELElBSkUsK0JBQVEsR0FBUixVQUFTLENBQWtCO0FBQUksUUFDN0IsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEIsSUFBRSxDQUFDO0lBSFUsWUFBWSxnQ0FKeEIsU0FBUyxDQUFDLGNBQ1QsUUFBUSxFQUFFO2dEQUEwRCxjQUNwRSxTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFDM0IsQ0FBQyxRQUNXLFlBQVksQ0FJeEI7Ozs7Ozs7Z0RBQ0Q7QUFBQyxJQURELG1CQUFDO0FBQ0EsQ0FEQSxBQUpELElBSUM7QUFDRCxTQUxhLFlBQVk7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IHVybCB9IGZyb20gJy4vdmFsaWRhdG9yJztcblxuY29uc3QgVVJMX1ZBTElEQVRPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBVcmxWYWxpZGF0b3IpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3VybF1bZm9ybUNvbnRyb2xOYW1lXSxbdXJsXVtmb3JtQ29udHJvbF0sW3VybF1bbmdNb2RlbF0nLFxuICBwcm92aWRlcnM6IFtVUkxfVkFMSURBVE9SXVxufSlcbmV4cG9ydCBjbGFzcyBVcmxWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XG4gICAgcmV0dXJuIHVybChjKTtcbiAgfVxufVxuIl19