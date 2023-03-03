import { __decorate } from "tslib";
import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';
let LongPressDirective = class LongPressDirective {
    constructor() {
        this.pressEnabled = true;
        this.duration = 500;
        this.longPressStart = new EventEmitter();
        this.longPressing = new EventEmitter();
        this.longPressEnd = new EventEmitter();
        this.mouseX = 0;
        this.mouseY = 0;
    }
    get press() {
        return this.pressing;
    }
    get isLongPress() {
        return this.isLongPressing;
    }
    onMouseDown(event) {
        // don't do right/middle clicks
        if (event.which !== 1 || !this.pressEnabled)
            return;
        // don't start drag if its on resize handle
        const target = event.target;
        if (target.classList.contains('resize-handle'))
            return;
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
        this.pressing = true;
        this.isLongPressing = false;
        const mouseup = fromEvent(document, 'mouseup');
        this.subscription = mouseup.subscribe((ev) => this.onMouseup());
        this.timeout = setTimeout(() => {
            this.isLongPressing = true;
            this.longPressStart.emit({
                event,
                model: this.pressModel
            });
            this.subscription.add(fromEvent(document, 'mousemove')
                .pipe(takeUntil(mouseup))
                .subscribe((mouseEvent) => this.onMouseMove(mouseEvent)));
            this.loop(event);
        }, this.duration);
        this.loop(event);
    }
    onMouseMove(event) {
        if (this.pressing && !this.isLongPressing) {
            const xThres = Math.abs(event.clientX - this.mouseX) > 10;
            const yThres = Math.abs(event.clientY - this.mouseY) > 10;
            if (xThres || yThres) {
                this.endPress();
            }
        }
    }
    loop(event) {
        if (this.isLongPressing) {
            this.timeout = setTimeout(() => {
                this.longPressing.emit({
                    event,
                    model: this.pressModel
                });
                this.loop(event);
            }, 50);
        }
    }
    endPress() {
        clearTimeout(this.timeout);
        this.isLongPressing = false;
        this.pressing = false;
        this._destroySubscription();
        this.longPressEnd.emit({
            model: this.pressModel
        });
    }
    onMouseup() {
        this.endPress();
    }
    ngOnDestroy() {
        this._destroySubscription();
    }
    _destroySubscription() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    }
};
LongPressDirective.ɵfac = function LongPressDirective_Factory(t) { return new (t || LongPressDirective)(); };
LongPressDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: LongPressDirective, selectors: [["", "long-press", ""]], hostVars: 4, hostBindings: function LongPressDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mousedown", function LongPressDirective_mousedown_HostBindingHandler($event) { return ctx.onMouseDown($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("press", ctx.press)("longpress", ctx.isLongPress);
    } }, inputs: { pressEnabled: "pressEnabled", duration: "duration", pressModel: "pressModel" }, outputs: { longPressStart: "longPressStart", longPressing: "longPressing", longPressEnd: "longPressEnd" } });
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
export { LongPressDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9uZy1wcmVzcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIm5nOi9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9saWIvZGlyZWN0aXZlcy9sb25nLXByZXNzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBNEIsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFJM0MsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7QUFBRyxJQUFsQztBQUFnQixRQUNMLGlCQUFZLEdBQVksSUFBSSxDQUFDO0FBQ3hDLFFBQ1csYUFBUSxHQUFXLEdBQUcsQ0FBQztBQUNsQyxRQUNZLG1CQUFjLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDbkUsUUFBWSxpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ2pFLFFBQVksaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUNqRSxRQUlFLFdBQU0sR0FBVyxDQUFDLENBQUM7QUFDckIsUUFBRSxXQUFNLEdBQVcsQ0FBQyxDQUFDO0FBQ3JCLElBa0dBLENBQUM7QUFDRCxJQS9GRSxJQUFJLEtBQUs7QUFBSyxRQUNaLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUN6QixJQUFFLENBQUM7QUFDSCxJQUVFLElBQUksV0FBVztBQUFLLFFBQ2xCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztBQUMvQixJQUFFLENBQUM7QUFDSCxJQUVFLFdBQVcsQ0FBQyxLQUFpQjtBQUFJLFFBQy9CLCtCQUErQjtBQUNuQyxRQUFJLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTtB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QUVHO0FBR0Q7QUFBYSxJQURaLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQztBQUNqQyxxREFFRztBQUdEO0FBQWEsSUFEWixZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDeEMscURBa0NHO0FBOURVLGtCQUFrQixvQkFEOUIsU0FBUyxDQUFDLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRTtBQUFDLElBQzNCLGtCQUFrQixDQWdIOUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUNEO0FBQUMsU0FqSFksa0JBQWtCO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTW91c2VFdmVudCB9IGZyb20gJy4uL2V2ZW50cyc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tsb25nLXByZXNzXScgfSlcbmV4cG9ydCBjbGFzcyBMb25nUHJlc3NEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBwcmVzc0VuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBwcmVzc01vZGVsOiBhbnk7XG4gIEBJbnB1dCgpIGR1cmF0aW9uOiBudW1iZXIgPSA1MDA7XG5cbiAgQE91dHB1dCgpIGxvbmdQcmVzc1N0YXJ0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGxvbmdQcmVzc2luZzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBsb25nUHJlc3NFbmQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHByZXNzaW5nOiBib29sZWFuO1xuICBpc0xvbmdQcmVzc2luZzogYm9vbGVhbjtcbiAgdGltZW91dDogYW55O1xuICBtb3VzZVg6IG51bWJlciA9IDA7XG4gIG1vdXNlWTogbnVtYmVyID0gMDtcblxuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnByZXNzJylcbiAgZ2V0IHByZXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnByZXNzaW5nO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5sb25ncHJlc3MnKVxuICBnZXQgaXNMb25nUHJlc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNMb25nUHJlc3Npbmc7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nLCBbJyRldmVudCddKVxuICBvbk1vdXNlRG93bihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIC8vIGRvbid0IGRvIHJpZ2h0L21pZGRsZSBjbGlja3NcbiAgICBpZiAoZXZlbnQud2hpY2ggIT09IDEgfHwgIXRoaXMucHJlc3NFbmFibGVkKSByZXR1cm47XG5cbiAgICAvLyBkb24ndCBzdGFydCBkcmFnIGlmIGl0cyBvbiByZXNpemUgaGFuZGxlXG4gICAgY29uc3QgdGFyZ2V0ID0gPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldDtcbiAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncmVzaXplLWhhbmRsZScpKSByZXR1cm47XG5cbiAgICB0aGlzLm1vdXNlWCA9IGV2ZW50LmNsaWVudFg7XG4gICAgdGhpcy5tb3VzZVkgPSBldmVudC5jbGllbnRZO1xuXG4gICAgdGhpcy5wcmVzc2luZyA9IHRydWU7XG4gICAgdGhpcy5pc0xvbmdQcmVzc2luZyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbW91c2V1cCA9IGZyb21FdmVudChkb2N1bWVudCwgJ21vdXNldXAnKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IG1vdXNldXAuc3Vic2NyaWJlKChldjogTW91c2VFdmVudCkgPT4gdGhpcy5vbk1vdXNldXAoKSk7XG5cbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaXNMb25nUHJlc3NpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5sb25nUHJlc3NTdGFydC5lbWl0KHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIG1vZGVsOiB0aGlzLnByZXNzTW9kZWxcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICAgIGZyb21FdmVudChkb2N1bWVudCwgJ21vdXNlbW92ZScpXG4gICAgICAgICAgLnBpcGUodGFrZVVudGlsKG1vdXNldXApKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKG1vdXNlRXZlbnQ6IE1vdXNlRXZlbnQpID0+IHRoaXMub25Nb3VzZU1vdmUobW91c2VFdmVudCkpXG4gICAgICApO1xuXG4gICAgICB0aGlzLmxvb3AoZXZlbnQpO1xuICAgIH0sIHRoaXMuZHVyYXRpb24pO1xuXG4gICAgdGhpcy5sb29wKGV2ZW50KTtcbiAgfVxuXG4gIG9uTW91c2VNb3ZlKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMucHJlc3NpbmcgJiYgIXRoaXMuaXNMb25nUHJlc3NpbmcpIHtcbiAgICAgIGNvbnN0IHhUaHJlcyA9IE1hdGguYWJzKGV2ZW50LmNsaWVudFggLSB0aGlzLm1vdXNlWCkgPiAxMDtcbiAgICAgIGNvbnN0IHlUaHJlcyA9IE1hdGguYWJzKGV2ZW50LmNsaWVudFkgLSB0aGlzLm1vdXNlWSkgPiAxMDtcblxuICAgICAgaWYgKHhUaHJlcyB8fCB5VGhyZXMpIHtcbiAgICAgICAgdGhpcy5lbmRQcmVzcygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxvb3AoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0xvbmdQcmVzc2luZykge1xuICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMubG9uZ1ByZXNzaW5nLmVtaXQoe1xuICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgIG1vZGVsOiB0aGlzLnByZXNzTW9kZWxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubG9vcChldmVudCk7XG4gICAgICB9LCA1MCk7XG4gICAgfVxuICB9XG5cbiAgZW5kUHJlc3MoKTogdm9pZCB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgdGhpcy5pc0xvbmdQcmVzc2luZyA9IGZhbHNlO1xuICAgIHRoaXMucHJlc3NpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9kZXN0cm95U3Vic2NyaXB0aW9uKCk7XG5cbiAgICB0aGlzLmxvbmdQcmVzc0VuZC5lbWl0KHtcbiAgICAgIG1vZGVsOiB0aGlzLnByZXNzTW9kZWxcbiAgICB9KTtcbiAgfVxuXG4gIG9uTW91c2V1cCgpOiB2b2lkIHtcbiAgICB0aGlzLmVuZFByZXNzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9kZXN0cm95U3Vic2NyaXB0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIF9kZXN0cm95U3Vic2NyaXB0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxufVxuIl19