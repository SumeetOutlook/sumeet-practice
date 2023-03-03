import { __decorate, __metadata } from "tslib";
import { Directive, Output, EventEmitter, HostListener } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
let KeydownEnterDirective = class KeydownEnterDirective {
    constructor() {
        this.keydown = new EventEmitter(); // tslint:disable-line
    }
    onKeyPress(event) {
        if (event.keyCode === 13 || event.which === 13 || event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            this.keydown.emit(event);
        }
    }
};
KeydownEnterDirective.ɵfac = function KeydownEnterDirective_Factory(t) { return new (t || KeydownEnterDirective)(); };
KeydownEnterDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: KeydownEnterDirective, selectors: [["", "mwlKeydownEnter", ""]], hostBindings: function KeydownEnterDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("keydown", function KeydownEnterDirective_keydown_HostBindingHandler($event) { return ctx.onKeyPress($event); });
    } }, outputs: { keydown: "mwlKeydownEnter" } });
__decorate([
    Output('mwlKeydownEnter'),
    __metadata("design:type", Object)
], KeydownEnterDirective.prototype, "keydown", void 0);
__decorate([
    HostListener('keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], KeydownEnterDirective.prototype, "onKeyPress", null);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(KeydownEnterDirective, [{
        type: Directive,
        args: [{
                selector: '[mwlKeydownEnter]'
            }]
    }], function () { return []; }, { keydown: [{
            type: Output,
            args: ['mwlKeydownEnter']
        }], onKeyPress: [{
            type: HostListener,
            args: ['keydown', ['$event']]
        }] }); })();
export { KeydownEnterDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5ZG93bi1lbnRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIm5nOi9hbmd1bGFyLWNhbGVuZGFyL21vZHVsZXMvY29tbW9uL2tleWRvd24tZW50ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUs5RSxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtBQUNsQyxJQURBO0FBQWdCLFFBQ2EsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUMsQ0FBQyxzQkFBc0I7QUFDdEYsSUFTQSxDQUFDO0FBQ0QsSUFSRSxVQUFVLENBQUMsS0FBVTtBQUN2QixRQUFJLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUU7QUFDN0UsWUFBTSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDN0IsWUFBTSxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDOUIsWUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvQixTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsQ0FBQzs7OztvREFBQTtBQVY0QjtBQUFhLElBQXZDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztBQUFFO0FBQXNDLHNEQUFMO0FBRzdEO0FBQWEsSUFEWixZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDckM7QUFDYztBQUErQztBQUNuQyx1REFJeEI7QUFWVSxxQkFBcUIsb0JBSGpDLFNBQVMsQ0FBQyxVQUNULFFBQVEsRUFBRTtVQUFtQixPQUM5QixDQUFDLElBQ1c7O0NBQXFCLENBV2pDOzs7Ozs7OztvQkFDRDtBQUFDLFNBWlkscUJBQXFCO0FBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttd2xLZXlkb3duRW50ZXJdJyxcbn0pXG5leHBvcnQgY2xhc3MgS2V5ZG93bkVudGVyRGlyZWN0aXZlIHtcbiAgQE91dHB1dCgnbXdsS2V5ZG93bkVudGVyJykga2V5ZG93biA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIG9uS2V5UHJlc3MoZXZlbnQ6IGFueSkge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMyB8fCBldmVudC53aGljaCA9PT0gMTMgfHwgZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLmtleWRvd24uZW1pdChldmVudCk7XG4gICAgfVxuICB9XG59XG4iXX0=