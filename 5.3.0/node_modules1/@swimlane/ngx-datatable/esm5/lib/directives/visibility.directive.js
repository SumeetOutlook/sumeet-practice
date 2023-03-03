import { __decorate } from "tslib";
import { Directive, Output, EventEmitter, ElementRef, HostBinding, NgZone, OnInit, OnDestroy } from '@angular/core';
/**
 * Visibility Observer Directive
 *
 * Usage:
 *
 * 		<div
 * 			visibilityObserver
 * 			(visible)="onVisible($event)">
 * 		</div>
 *
 */
import * as ɵngcc0 from '@angular/core';
var VisibilityDirective = /** @class */ (function () {
    function VisibilityDirective(element, zone) {
        this.element = element;
        this.zone = zone;
        this.isVisible = false;
        this.visible = new EventEmitter();
    }
    VisibilityDirective.prototype.ngOnInit = function () {
        this.runCheck();
    };
    VisibilityDirective.prototype.ngOnDestroy = function () {
        clearTimeout(this.timeout);
    };
    VisibilityDirective.prototype.onVisibilityChange = function () {
        var _this = this;
        // trigger zone recalc for columns
        this.zone.run(function () {
            _this.isVisible = true;
            _this.visible.emit(true);
        });
    };
    VisibilityDirective.prototype.runCheck = function () {
        var _this = this;
        var check = function () {
            // https://davidwalsh.name/offsetheight-visibility
            var _a = _this.element.nativeElement, offsetHeight = _a.offsetHeight, offsetWidth = _a.offsetWidth;
            if (offsetHeight && offsetWidth) {
                clearTimeout(_this.timeout);
                _this.onVisibilityChange();
            }
            else {
                clearTimeout(_this.timeout);
                _this.zone.runOutsideAngular(function () {
                    _this.timeout = setTimeout(function () { return check(); }, 50);
                });
            }
        };
        this.timeout = setTimeout(function () { return check(); });
    };
    VisibilityDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone }
    ]; };
    __decorate([
        HostBinding('class.visible')
    ], VisibilityDirective.prototype, "isVisible", void 0);
    __decorate([
        Output()
    ], VisibilityDirective.prototype, "visible", void 0);
VisibilityDirective.ɵfac = function VisibilityDirective_Factory(t) { return new (t || VisibilityDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
VisibilityDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: VisibilityDirective, selectors: [["", "visibilityObserver", ""]], hostVars: 2, hostBindings: function VisibilityDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("visible", ctx.isVisible);
    } }, outputs: { visible: "visible" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(VisibilityDirective, [{
        type: Directive,
        args: [{ selector: '[visibilityObserver]' }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { isVisible: [{
            type: HostBinding,
            args: ['class.visible']
        }], visible: [{
            type: Output
        }] }); })();
    return VisibilityDirective;
}());
export { VisibilityDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaWJpbGl0eS5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIm5nOi9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9saWIvZGlyZWN0aXZlcy92aXNpYmlsaXR5LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQXVELElBUXJELDZCQUFvQixPQUFtQixFQUFVLElBQVk7QUFBSSxRQUE3QyxZQUFPLEdBQVAsT0FBTyxDQUFZO0FBQUMsUUFBUyxTQUFJLEdBQUosSUFBSSxDQUFRO0FBQUMsUUFOOUQsY0FBUyxHQUFZLEtBQUssQ0FBQztBQUM3QixRQUNZLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUM1RCxJQUdrRSxDQUFDO0FBQ25FLElBQ0Usc0NBQVEsR0FBUjtBQUFjLFFBQ1osSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3BCLElBQUUsQ0FBQztBQUVILElBQUUseUNBQVcsR0FBWDtBQUFjLFFBQ1osWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMvQixJQUFFLENBQUM7QUFFSCxJQUFFLGdEQUFrQixHQUFsQjtBQUFjLFFBQWQsaUJBTUM7QUFDSCxRQU5JLGtDQUFrQztBQUN0QyxRQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQ1osWUFBQSxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztBQUM1QixZQUFNLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzlCLFFBQUksQ0FBQyxDQUFDLENBQUM7QUFDUCxJQUFFLENBQUM7QUFFSCxJQUFFLHNDQUFRLEdBQVI7QUFBYyxRQUFkLGlCQWlCQztBQUNILFFBakJJLElBQU0sS0FBSyxHQUFHO0FBQ1osWUFBQSxrREFBa0Q7QUFDeEQsWUFBWSxJQUFBLGdDQUEwRCxFQUF4RCw4QkFBWSxFQUFFLDRCQUEwQyxDQUFDO0FBQ3ZFLFlBQ00sSUFBSSxZQUFZLElBQUksV0FBVyxFQUFFO0FBQ3ZDLGdCQUFRLFlBQVksQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbkMsZ0JBQVEsS0FBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7QUFDbEMsYUFBTztBQUFDLGlCQUFLO0FBQ2IsZ0JBQVEsWUFBWSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNuQyxnQkFBUSxLQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO0FBQzlCLG9CQUFJLEtBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFLLEVBQUUsRUFBUCxDQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDdkQsZ0JBQVEsQ0FBQyxDQUFDLENBQUM7QUFDWCxhQUFPO0FBQ1AsUUFBSSxDQUFDLENBQUM7QUFDTixRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFLLEVBQUUsRUFBUCxDQUFPLENBQUMsQ0FBQztBQUM3QyxJQUFFLENBQUM7QUFDRjtBQUM4RCxnQkFyQ2hDLFVBQVU7QUFBSSxnQkFBWSxNQUFNO0FBQUc7QUFFM0QsSUFSTDtBQUFhLFFBRFosV0FBVyxDQUFDLGVBQWUsQ0FBQztBQUMvQiwwREFBNkI7QUFFN0IsSUFBWTtBQUFhLFFBQXRCLE1BQU0sRUFBRTtBQUFDLHdEQUFnRDtJQUovQyxtQkFBbUIsd0JBRC9CLFNBQVMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRSxDQUFDLFFBQ25DLG1CQUFtQixDQTRDL0I7Ozs7Ozs7Ozs7OztvQkFDRDtBQUFDLElBREQsMEJBQUM7QUFDQSxDQURBLEFBNUNELElBNENDO0FBQ0QsU0E3Q2EsbUJBQW1CO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgTmdab25lLCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFZpc2liaWxpdHkgT2JzZXJ2ZXIgRGlyZWN0aXZlXG4gKlxuICogVXNhZ2U6XG4gKlxuICogXHRcdDxkaXZcbiAqIFx0XHRcdHZpc2liaWxpdHlPYnNlcnZlclxuICogXHRcdFx0KHZpc2libGUpPVwib25WaXNpYmxlKCRldmVudClcIj5cbiAqIFx0XHQ8L2Rpdj5cbiAqXG4gKi9cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1t2aXNpYmlsaXR5T2JzZXJ2ZXJdJyB9KVxuZXhwb3J0IGNsYXNzIFZpc2liaWxpdHlEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MudmlzaWJsZScpXG4gIGlzVmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSB2aXNpYmxlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICB0aW1lb3V0OiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHpvbmU6IE5nWm9uZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJ1bkNoZWNrKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgfVxuXG4gIG9uVmlzaWJpbGl0eUNoYW5nZSgpOiB2b2lkIHtcbiAgICAvLyB0cmlnZ2VyIHpvbmUgcmVjYWxjIGZvciBjb2x1bW5zXG4gICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XG4gICAgICB0aGlzLnZpc2libGUuZW1pdCh0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bkNoZWNrKCk6IHZvaWQge1xuICAgIGNvbnN0IGNoZWNrID0gKCkgPT4ge1xuICAgICAgLy8gaHR0cHM6Ly9kYXZpZHdhbHNoLm5hbWUvb2Zmc2V0aGVpZ2h0LXZpc2liaWxpdHlcbiAgICAgIGNvbnN0IHsgb2Zmc2V0SGVpZ2h0LCBvZmZzZXRXaWR0aCB9ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgIGlmIChvZmZzZXRIZWlnaHQgJiYgb2Zmc2V0V2lkdGgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgICAgIHRoaXMub25WaXNpYmlsaXR5Q2hhbmdlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IGNoZWNrKCksIDUwKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gY2hlY2soKSk7XG4gIH1cbn1cbiJdfQ==