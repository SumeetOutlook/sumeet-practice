import { __decorate, __metadata } from "tslib";
import { Directive, Output, EventEmitter, HostListener } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
var KeydownEnterDirective = /** @class */ (function () {
    function KeydownEnterDirective() {
        this.keydown = new EventEmitter(); // tslint:disable-line
    }
    KeydownEnterDirective.prototype.onKeyPress = function (event) {
        if (event.keyCode === 13 || event.which === 13 || event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            this.keydown.emit(event);
        }
    };
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
KeydownEnterDirective.ɵfac = function KeydownEnterDirective_Factory(t) { return new (t || KeydownEnterDirective)(); };
KeydownEnterDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: KeydownEnterDirective, selectors: [["", "mwlKeydownEnter", ""]], hostBindings: function KeydownEnterDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("keydown", function KeydownEnterDirective_keydown_HostBindingHandler($event) { return ctx.onKeyPress($event); });
    } }, outputs: { keydown: "mwlKeydownEnter" } });
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
    return KeydownEnterDirective;
}());
export { KeydownEnterDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5ZG93bi1lbnRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIm5nOi9hbmd1bGFyLWNhbGVuZGFyL21vZHVsZXMvY29tbW9uL2tleWRvd24tZW50ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUs5RTtBQUNvQixJQURwQjtBQUFtQyxRQUNOLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDLENBQUMsc0JBQXNCO0FBQ3RGLElBU0EsQ0FBQztBQUNELElBUkUsMENBQVUsR0FBVixVQUFXLEtBQVU7QUFDdkIsUUFBSSxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssT0FBTyxFQUFFO0FBQzdFLFlBQU0sS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQzdCLFlBQU0sS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0FBQzlCLFlBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDL0IsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNGLElBVjRCO0FBQWEsUUFBdkMsTUFBTSxDQUFDLGlCQUFpQixDQUFDO0FBQUU7QUFBMEMsMERBQVQ7QUFBRSxJQUcvRDtBQUFhLFFBRFosWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3JDO0FBQ2tCO0FBQW1EO0FBRTdELDJEQUdOO0lBVlUscUJBQXFCLHdCQUhqQyxTQUFTLENBQUMsY0FDVCxRQUFRLEVBQUUsbUJBQW1CLFdBQzlCLENBQUM7R0FDVyxxQkFBcUIsQ0FXakM7Ozs7Ozs7Ozs7Ozs7O29CQUNEO0FBQUMsSUFERCw0QkFBQztBQUNBLENBREEsQUFYRCxJQVdDO0FBQ0QsU0FaYSxxQkFBcUI7QUFDakMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW213bEtleWRvd25FbnRlcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBLZXlkb3duRW50ZXJEaXJlY3RpdmUge1xuICBAT3V0cHV0KCdtd2xLZXlkb3duRW50ZXInKSBrZXlkb3duID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgb25LZXlQcmVzcyhldmVudDogYW55KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzIHx8IGV2ZW50LndoaWNoID09PSAxMyB8fCBldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMua2V5ZG93bi5lbWl0KGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==