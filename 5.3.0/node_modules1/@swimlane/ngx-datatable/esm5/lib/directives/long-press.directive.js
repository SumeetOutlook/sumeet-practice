import { __decorate } from "tslib";
import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';
var LongPressDirective = /** @class */ (function () {
    function LongPressDirective() {
        this.pressEnabled = true;
        this.duration = 500;
        this.longPressStart = new EventEmitter();
        this.longPressing = new EventEmitter();
        this.longPressEnd = new EventEmitter();
        this.mouseX = 0;
        this.mouseY = 0;
    }
    Object.defineProperty(LongPressDirective.prototype, "press", {
        get: function () {
            return this.pressing;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LongPressDirective.prototype, "isLongPress", {
        get: function () {
            return this.isLongPressing;
        },
        enumerable: true,
        configurable: true
    });
    LongPressDirective.prototype.onMouseDown = function (event) {
        var _this = this;
        // don't do right/middle clicks
        if (event.which !== 1 || !this.pressEnabled)
            return;
        // don't start drag if its on resize handle
        var target = event.target;
        if (target.classList.contains('resize-handle'))
            return;
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
        this.pressing = true;
        this.isLongPressing = false;
        var mouseup = fromEvent(document, 'mouseup');
        this.subscription = mouseup.subscribe(function (ev) { return _this.onMouseup(); });
        this.timeout = setTimeout(function () {
            _this.isLongPressing = true;
            _this.longPressStart.emit({
                event: event,
                model: _this.pressModel
            });
            _this.subscription.add(fromEvent(document, 'mousemove')
                .pipe(takeUntil(mouseup))
                .subscribe(function (mouseEvent) { return _this.onMouseMove(mouseEvent); }));
            _this.loop(event);
        }, this.duration);
        this.loop(event);
    };
    LongPressDirective.prototype.onMouseMove = function (event) {
        if (this.pressing && !this.isLongPressing) {
            var xThres = Math.abs(event.clientX - this.mouseX) > 10;
            var yThres = Math.abs(event.clientY - this.mouseY) > 10;
            if (xThres || yThres) {
                this.endPress();
            }
        }
    };
    LongPressDirective.prototype.loop = function (event) {
        var _this = this;
        if (this.isLongPressing) {
            this.timeout = setTimeout(function () {
                _this.longPressing.emit({
                    event: event,
                    model: _this.pressModel
                });
                _this.loop(event);
            }, 50);
        }
    };
    LongPressDirective.prototype.endPress = function () {
        clearTimeout(this.timeout);
        this.isLongPressing = false;
        this.pressing = false;
        this._destroySubscription();
        this.longPressEnd.emit({
            model: this.pressModel
        });
    };
    LongPressDirective.prototype.onMouseup = function () {
        this.endPress();
    };
    LongPressDirective.prototype.ngOnDestroy = function () {
        this._destroySubscription();
    };
    LongPressDirective.prototype._destroySubscription = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    };
    __decorate([
        Input()
    ], LongPressDirective.prototype, "pressEnabled", void 0);
    __decorate([
        Input()
    ], LongPressDirective.prototype, "pressModel", void 0);
    __decorate([
        Input()
    ], LongPressDirective.prototype, "duration", void 0);
    __decorate([
        Output()
    ], LongPressDirective.prototype, "longPressStart", void 0);
    __decorate([
        Output()
    ], LongPressDirective.prototype, "longPressing", void 0);
    __decorate([
        Output()
    ], LongPressDirective.prototype, "longPressEnd", void 0);
    __decorate([
        HostBinding('class.press')
    ], LongPressDirective.prototype, "press", null);
    __decorate([
        HostBinding('class.longpress')
    ], LongPressDirective.prototype, "isLongPress", null);
    __decorate([
        HostListener('mousedown', ['$event'])
    ], LongPressDirective.prototype, "onMouseDown", null);
LongPressDirective.ɵfac = function LongPressDirective_Factory(t) { return new (t || LongPressDirective)(); };
LongPressDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: LongPressDirective, selectors: [["", "long-press", ""]], hostVars: 4, hostBindings: function LongPressDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mousedown", function LongPressDirective_mousedown_HostBindingHandler($event) { return ctx.onMouseDown($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("press", ctx.press)("longpress", ctx.isLongPress);
    } }, inputs: { pressEnabled: "pressEnabled", duration: "duration", pressModel: "pressModel" }, outputs: { longPressStart: "longPressStart", longPressing: "longPressing", longPressEnd: "longPressEnd" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LongPressDirective, [{
        type: Directive,
        args: [{ selector: '[long-press]' }]
    }], function () { return []; }, { pressEnabled: [{
            type: Input
        }], duration: [{
            type: Input
        }], longPressStart: [{
            type: Output
        }], longPressing: [{
            type: Output
        }], longPressEnd: [{
            type: Output
        }], press: [{
            type: HostBinding,
            args: ['class.press']
        }], isLongPress: [{
            type: HostBinding,
            args: ['class.longpress']
        }], onMouseDown: [{
            type: HostListener,
            args: ['mousedown', ['$event']]
        }], pressModel: [{
            type: Input
        }] }); })();
    return LongPressDirective;
}());
export { LongPressDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9uZy1wcmVzcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIm5nOi9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9saWIvZGlyZWN0aXZlcy9sb25nLXByZXNzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBNEIsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFJM0M7QUFBc0QsSUFBdEQ7QUFBZ0MsUUFDckIsaUJBQVksR0FBWSxJQUFJLENBQUM7QUFDeEMsUUFDVyxhQUFRLEdBQVcsR0FBRyxDQUFDO0FBQ2xDLFFBQ1ksbUJBQWMsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUNuRSxRQUFZLGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDakUsUUFBWSxpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ2pFLFFBSUUsV0FBTSxHQUFXLENBQUMsQ0FBQztBQUNyQixRQUFFLFdBQU0sR0FBVyxDQUFDLENBQUM7QUFDckIsSUFrR0EsQ0FBQztBQUNELElBL0ZFLHNCQUFJLHFDQUFLO0FBQUksYUFBYjtBQUFjLFlBQ1osT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0FBQ3pCLFFBQUUsQ0FBQztBQUVIO0FBQTBCO0FBQ1AsT0FIaEI7QUFDSCxJQUVFLHNCQUFJLDJDQUFXO0FBQUksYUFBbkI7QUFBYyxZQUNaLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztBQUMvQixRQUFFLENBQUM7QUFFSDtBQUEwQjtBQUNkLE9BSFQ7QUFDSCxJQUVFLHdDQUFXLEdBQVgsVUFBWSxLQUFpQjtBQUFJLFFBRGpDLGlCQW1DQztBQUNILFFBbENJLCtCQUErQjtBQUNuQyxRQUFJLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTtBQUFFLFlBQUEsT0FBTztBQUN4RCxRQUNJLDJDQUEyQztBQUMvQyxRQUFJLElBQU0sTUFBTSxHQUFnQixLQUFLLENBQUMsTUFBTSxDQUFDO0FBQzdDLFFBQUksSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7QUFBRSxZQUFBLE9BQU87QUFDM0QsUUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7QUFDaEMsUUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7QUFDaEMsUUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztBQUN6QixRQUFJLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0FBQ2hDLFFBQ0ksSUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNuRCxRQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQWMsSUFBSyxPQUFBLEtBQUksQ0FBQyxTQUFTLEVBQUUsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO0FBQ2hGLFFBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7QUFDeEIsWUFBQSxLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztBQUNqQyxZQUFNLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO0FBQy9CLGdCQUFRLEtBQUssT0FBQTtBQUNiLGdCQUFRLEtBQUssRUFBRSxLQUFJLENBQUMsVUFBVTtBQUM5QixhQUFPLENBQUMsQ0FBQztBQUNULFlBQ00sS0FBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQ25CLFNBQVMsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDO0FBQ3hDLGlCQUFXLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbkMsaUJBQVcsU0FBUyxDQUFDLFVBQUMsVUFBc0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FDdkUsQ0FBQztBQUNSLFlBQ00sS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN2QixRQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdEIsUUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3JCLElBQUUsQ0FBQztBQUVILElBQUUsd0NBQVcsR0FBWCxVQUFZLEtBQWlCO0FBQUksUUFDL0IsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtBQUMvQyxZQUFNLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ2hFLFlBQU0sSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDaEUsWUFDTSxJQUFJLE1BQU0sSUFBSSxNQUFNLEVBQUU7QUFDNUIsZ0JBQVEsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3hCLGFBQU87QUFDUCxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBRUgsSUFBRSxpQ0FBSSxHQUFKLFVBQUssS0FBaUI7QUFBSSxRQUExQixpQkFVQztBQUNILFFBVkksSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO0FBQzdCLFlBQU0sSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7QUFDMUIsZ0JBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7QUFDL0Isb0JBQVUsS0FBSyxPQUFBO0FBQ2Ysb0JBQVUsS0FBSyxFQUFFLEtBQUksQ0FBQyxVQUFVO0FBQ2hDLGlCQUFTLENBQUMsQ0FBQztBQUNYLGdCQUFRLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekIsWUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDYixTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBRUgsSUFBRSxxQ0FBUSxHQUFSO0FBQWMsUUFDWixZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLFFBQUksSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7QUFDaEMsUUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztBQUMxQixRQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0FBQ2hDLFFBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7QUFDM0IsWUFBTSxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVU7QUFDNUIsU0FBSyxDQUFDLENBQUM7QUFDUCxJQUFFLENBQUM7QUFFSCxJQUFFLHNDQUFTLEdBQVQ7QUFBYyxRQUNaLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNwQixJQUFFLENBQUM7QUFFSCxJQUFFLHdDQUFXLEdBQVg7QUFBYyxRQUNaLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0FBQ2hDLElBQUUsQ0FBQztBQUVILElBQVUsaURBQW9CLEdBQTVCO0FBQWMsUUFDWixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7QUFDM0IsWUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3RDLFlBQU0sSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7QUFDcEMsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNGLElBL0dVO0FBQWEsUUFBckIsS0FBSyxFQUFFO0FBQUMsNERBQTZCO0FBQ3ZDLElBQVU7QUFBYSxRQUFyQixLQUFLLEVBQUU7QUFBQywwREFBZ0I7QUFDMUIsSUFBVTtBQUFhLFFBQXJCLEtBQUssRUFBRTtBQUFDLHdEQUF1QjtBQUVsQyxJQUFZO0FBQWEsUUFBdEIsTUFBTSxFQUFFO0FBQUMsOERBQXVEO0FBQ2xFLElBQVc7QUFBYSxRQUF0QixNQUFNLEVBQUU7QUFBQyw0REFBcUQ7QUFDaEUsSUFBVztBQUFhLFFBQXRCLE1BQU0sRUFBRTtBQUFDLDREQUFxRDtBQUVqRSxJQVNFO0FBQWEsUUFEWixXQUFXLENBQUMsYUFBYSxDQUFDO0FBQzdCLG1EQUVHO0FBRUgsSUFDRTtBQUFhLFFBRFosV0FBVyxDQUFDLGlCQUFpQixDQUFDO0FBQ2pDLHlEQUVHO0FBRUgsSUFDRTtBQUFhLFFBRFosWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3hDLHlEQWtDRztJQTlEVSxrQkFBa0Isd0JBRDlCLFNBQVMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsQ0FBQyxRQUMzQjtDQUFrQixDQWdIOUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUNEO0FBQUMsSUFERCx5QkFBQztBQUNBLENBREEsQUFoSEQsSUFnSEM7QUFDRCxTQWpIYSxrQkFBa0I7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBNb3VzZUV2ZW50IH0gZnJvbSAnLi4vZXZlbnRzJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2xvbmctcHJlc3NdJyB9KVxuZXhwb3J0IGNsYXNzIExvbmdQcmVzc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHByZXNzRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIHByZXNzTW9kZWw6IGFueTtcbiAgQElucHV0KCkgZHVyYXRpb246IG51bWJlciA9IDUwMDtcblxuICBAT3V0cHV0KCkgbG9uZ1ByZXNzU3RhcnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbG9uZ1ByZXNzaW5nOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGxvbmdQcmVzc0VuZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHJlc3Npbmc6IGJvb2xlYW47XG4gIGlzTG9uZ1ByZXNzaW5nOiBib29sZWFuO1xuICB0aW1lb3V0OiBhbnk7XG4gIG1vdXNlWDogbnVtYmVyID0gMDtcbiAgbW91c2VZOiBudW1iZXIgPSAwO1xuXG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MucHJlc3MnKVxuICBnZXQgcHJlc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucHJlc3Npbmc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmxvbmdwcmVzcycpXG4gIGdldCBpc0xvbmdQcmVzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0xvbmdQcmVzc2luZztcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsnJGV2ZW50J10pXG4gIG9uTW91c2VEb3duKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgLy8gZG9uJ3QgZG8gcmlnaHQvbWlkZGxlIGNsaWNrc1xuICAgIGlmIChldmVudC53aGljaCAhPT0gMSB8fCAhdGhpcy5wcmVzc0VuYWJsZWQpIHJldHVybjtcblxuICAgIC8vIGRvbid0IHN0YXJ0IGRyYWcgaWYgaXRzIG9uIHJlc2l6ZSBoYW5kbGVcbiAgICBjb25zdCB0YXJnZXQgPSA8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0O1xuICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZXNpemUtaGFuZGxlJykpIHJldHVybjtcblxuICAgIHRoaXMubW91c2VYID0gZXZlbnQuY2xpZW50WDtcbiAgICB0aGlzLm1vdXNlWSA9IGV2ZW50LmNsaWVudFk7XG5cbiAgICB0aGlzLnByZXNzaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmlzTG9uZ1ByZXNzaW5nID0gZmFsc2U7XG5cbiAgICBjb25zdCBtb3VzZXVwID0gZnJvbUV2ZW50KGRvY3VtZW50LCAnbW91c2V1cCcpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gbW91c2V1cC5zdWJzY3JpYmUoKGV2OiBNb3VzZUV2ZW50KSA9PiB0aGlzLm9uTW91c2V1cCgpKTtcblxuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5pc0xvbmdQcmVzc2luZyA9IHRydWU7XG4gICAgICB0aGlzLmxvbmdQcmVzc1N0YXJ0LmVtaXQoe1xuICAgICAgICBldmVudCxcbiAgICAgICAgbW9kZWw6IHRoaXMucHJlc3NNb2RlbFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgICAgZnJvbUV2ZW50KGRvY3VtZW50LCAnbW91c2Vtb3ZlJylcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwobW91c2V1cCkpXG4gICAgICAgICAgLnN1YnNjcmliZSgobW91c2VFdmVudDogTW91c2VFdmVudCkgPT4gdGhpcy5vbk1vdXNlTW92ZShtb3VzZUV2ZW50KSlcbiAgICAgICk7XG5cbiAgICAgIHRoaXMubG9vcChldmVudCk7XG4gICAgfSwgdGhpcy5kdXJhdGlvbik7XG5cbiAgICB0aGlzLmxvb3AoZXZlbnQpO1xuICB9XG5cbiAgb25Nb3VzZU1vdmUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wcmVzc2luZyAmJiAhdGhpcy5pc0xvbmdQcmVzc2luZykge1xuICAgICAgY29uc3QgeFRocmVzID0gTWF0aC5hYnMoZXZlbnQuY2xpZW50WCAtIHRoaXMubW91c2VYKSA+IDEwO1xuICAgICAgY29uc3QgeVRocmVzID0gTWF0aC5hYnMoZXZlbnQuY2xpZW50WSAtIHRoaXMubW91c2VZKSA+IDEwO1xuXG4gICAgICBpZiAoeFRocmVzIHx8IHlUaHJlcykge1xuICAgICAgICB0aGlzLmVuZFByZXNzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbG9vcChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzTG9uZ1ByZXNzaW5nKSB7XG4gICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5sb25nUHJlc3NpbmcuZW1pdCh7XG4gICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgbW9kZWw6IHRoaXMucHJlc3NNb2RlbFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5sb29wKGV2ZW50KTtcbiAgICAgIH0sIDUwKTtcbiAgICB9XG4gIH1cblxuICBlbmRQcmVzcygpOiB2b2lkIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICB0aGlzLmlzTG9uZ1ByZXNzaW5nID0gZmFsc2U7XG4gICAgdGhpcy5wcmVzc2luZyA9IGZhbHNlO1xuICAgIHRoaXMuX2Rlc3Ryb3lTdWJzY3JpcHRpb24oKTtcblxuICAgIHRoaXMubG9uZ1ByZXNzRW5kLmVtaXQoe1xuICAgICAgbW9kZWw6IHRoaXMucHJlc3NNb2RlbFxuICAgIH0pO1xuICB9XG5cbiAgb25Nb3VzZXVwKCk6IHZvaWQge1xuICAgIHRoaXMuZW5kUHJlc3MoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2Rlc3Ryb3lTdWJzY3JpcHRpb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Rlc3Ryb3lTdWJzY3JpcHRpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG59XG4iXX0=