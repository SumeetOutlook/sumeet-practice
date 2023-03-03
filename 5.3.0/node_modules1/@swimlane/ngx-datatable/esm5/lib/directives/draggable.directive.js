import { __decorate } from "tslib";
import { Directive, ElementRef, Input, Output, EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
/**
 * Draggable Directive for Angular2
 *
 * Inspiration:
 *   https://github.com/AngularClass/angular2-examples/blob/master/rx-draggable/directives/draggable.ts
 *   http://stackoverflow.com/questions/35662530/how-to-implement-drag-and-drop-in-angular2
 *
 */
import * as ɵngcc0 from '@angular/core';
var DraggableDirective = /** @class */ (function () {
    function DraggableDirective(element) {
        this.dragX = true;
        this.dragY = true;
        this.dragStart = new EventEmitter();
        this.dragging = new EventEmitter();
        this.dragEnd = new EventEmitter();
        this.isDragging = false;
        this.element = element.nativeElement;
    }
    DraggableDirective.prototype.ngOnChanges = function (changes) {
        if (changes['dragEventTarget'] && changes['dragEventTarget'].currentValue && this.dragModel.dragging) {
            this.onMousedown(changes['dragEventTarget'].currentValue);
        }
    };
    DraggableDirective.prototype.ngOnDestroy = function () {
        this._destroySubscription();
    };
    DraggableDirective.prototype.onMouseup = function (event) {
        if (!this.isDragging)
            return;
        this.isDragging = false;
        this.element.classList.remove('dragging');
        if (this.subscription) {
            this._destroySubscription();
            this.dragEnd.emit({
                event: event,
                element: this.element,
                model: this.dragModel
            });
        }
    };
    DraggableDirective.prototype.onMousedown = function (event) {
        var _this = this;
        // we only want to drag the inner header text
        var isDragElm = event.target.classList.contains('draggable');
        if (isDragElm && (this.dragX || this.dragY)) {
            event.preventDefault();
            this.isDragging = true;
            var mouseDownPos_1 = { x: event.clientX, y: event.clientY };
            var mouseup = fromEvent(document, 'mouseup');
            this.subscription = mouseup.subscribe(function (ev) { return _this.onMouseup(ev); });
            var mouseMoveSub = fromEvent(document, 'mousemove')
                .pipe(takeUntil(mouseup))
                .subscribe(function (ev) { return _this.move(ev, mouseDownPos_1); });
            this.subscription.add(mouseMoveSub);
            this.dragStart.emit({
                event: event,
                element: this.element,
                model: this.dragModel
            });
        }
    };
    DraggableDirective.prototype.move = function (event, mouseDownPos) {
        if (!this.isDragging)
            return;
        var x = event.clientX - mouseDownPos.x;
        var y = event.clientY - mouseDownPos.y;
        if (this.dragX)
            this.element.style.left = x + "px";
        if (this.dragY)
            this.element.style.top = y + "px";
        this.element.classList.add('dragging');
        this.dragging.emit({
            event: event,
            element: this.element,
            model: this.dragModel
        });
    };
    DraggableDirective.prototype._destroySubscription = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    };
    DraggableDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], DraggableDirective.prototype, "dragEventTarget", void 0);
    __decorate([
        Input()
    ], DraggableDirective.prototype, "dragModel", void 0);
    __decorate([
        Input()
    ], DraggableDirective.prototype, "dragX", void 0);
    __decorate([
        Input()
    ], DraggableDirective.prototype, "dragY", void 0);
    __decorate([
        Output()
    ], DraggableDirective.prototype, "dragStart", void 0);
    __decorate([
        Output()
    ], DraggableDirective.prototype, "dragging", void 0);
    __decorate([
        Output()
    ], DraggableDirective.prototype, "dragEnd", void 0);
DraggableDirective.ɵfac = function DraggableDirective_Factory(t) { return new (t || DraggableDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
DraggableDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DraggableDirective, selectors: [["", "draggable", ""]], inputs: { dragX: "dragX", dragY: "dragY", dragEventTarget: "dragEventTarget", dragModel: "dragModel" }, outputs: { dragStart: "dragStart", dragging: "dragging", dragEnd: "dragEnd" }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DraggableDirective, [{
        type: Directive,
        args: [{ selector: '[draggable]' }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { dragX: [{
            type: Input
        }], dragY: [{
            type: Input
        }], dragStart: [{
            type: Output
        }], dragging: [{
            type: Output
        }], dragEnd: [{
            type: Output
        }], dragEventTarget: [{
            type: Input
        }], dragModel: [{
            type: Input
        }] }); })();
    return DraggableDirective;
}());
export { DraggableDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsibmc6L0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2xpYi9kaXJlY3RpdmVzL2RyYWdnYWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hILE9BQU8sRUFBZ0IsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFBc0QsSUFjcEQsNEJBQVksT0FBbUI7QUFDakMsUUFaVyxVQUFLLEdBQVksSUFBSSxDQUFDO0FBQ2pDLFFBQVcsVUFBSyxHQUFZLElBQUksQ0FBQztBQUNqQyxRQUNZLGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUM5RCxRQUFZLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUM3RCxRQUFZLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUM1RCxRQUVFLGVBQVUsR0FBWSxLQUFLLENBQUM7QUFDOUIsUUFHSSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7QUFDekMsSUFBRSxDQUFDO0FBQ0gsSUFDRSx3Q0FBVyxHQUFYLFVBQVksT0FBc0I7QUFBSSxRQUNwQyxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRTtBQUMxRyxZQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFD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QUFDLHdEQUFpRDtBQUM1RCxJQUFXO0FBQWEsUUFBdEIsTUFBTSxFQUFFO0FBQUMsdURBQWdEO0lBUi9DLGtCQUFrQix3QkFEOUIsU0FBUyxDQUFDLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxDQUFDLFFBQzFCLGtCQUFrQixDQStGOUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQ0Q7QUFBQyxJQURELHlCQUFDO0FBQ0EsQ0FEQSxBQS9GRCxJQStGQztBQUNELFNBaEdhLGtCQUFrQjtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKipcbiAqIERyYWdnYWJsZSBEaXJlY3RpdmUgZm9yIEFuZ3VsYXIyXG4gKlxuICogSW5zcGlyYXRpb246XG4gKiAgIGh0dHBzOi8vZ2l0aHViLmNvbS9Bbmd1bGFyQ2xhc3MvYW5ndWxhcjItZXhhbXBsZXMvYmxvYi9tYXN0ZXIvcngtZHJhZ2dhYmxlL2RpcmVjdGl2ZXMvZHJhZ2dhYmxlLnRzXG4gKiAgIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzU2NjI1MzAvaG93LXRvLWltcGxlbWVudC1kcmFnLWFuZC1kcm9wLWluLWFuZ3VsYXIyXG4gKlxuICovXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbZHJhZ2dhYmxlXScgfSlcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGRyYWdFdmVudFRhcmdldDogYW55O1xuICBASW5wdXQoKSBkcmFnTW9kZWw6IGFueTtcbiAgQElucHV0KCkgZHJhZ1g6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBkcmFnWTogYm9vbGVhbiA9IHRydWU7XG5cbiAgQE91dHB1dCgpIGRyYWdTdGFydDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkcmFnZ2luZzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkcmFnRW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBlbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgaXNEcmFnZ2luZzogYm9vbGVhbiA9IGZhbHNlO1xuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzWydkcmFnRXZlbnRUYXJnZXQnXSAmJiBjaGFuZ2VzWydkcmFnRXZlbnRUYXJnZXQnXS5jdXJyZW50VmFsdWUgJiYgdGhpcy5kcmFnTW9kZWwuZHJhZ2dpbmcpIHtcbiAgICAgIHRoaXMub25Nb3VzZWRvd24oY2hhbmdlc1snZHJhZ0V2ZW50VGFyZ2V0J10uY3VycmVudFZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9kZXN0cm95U3Vic2NyaXB0aW9uKCk7XG4gIH1cblxuICBvbk1vdXNldXAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNEcmFnZ2luZykgcmV0dXJuO1xuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nJyk7XG5cbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX2Rlc3Ryb3lTdWJzY3JpcHRpb24oKTtcbiAgICAgIHRoaXMuZHJhZ0VuZC5lbWl0KHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgbW9kZWw6IHRoaXMuZHJhZ01vZGVsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlZG93bihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIC8vIHdlIG9ubHkgd2FudCB0byBkcmFnIHRoZSBpbm5lciBoZWFkZXIgdGV4dFxuICAgIGNvbnN0IGlzRHJhZ0VsbSA9ICg8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS5jbGFzc0xpc3QuY29udGFpbnMoJ2RyYWdnYWJsZScpO1xuXG4gICAgaWYgKGlzRHJhZ0VsbSAmJiAodGhpcy5kcmFnWCB8fCB0aGlzLmRyYWdZKSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWU7XG5cbiAgICAgIGNvbnN0IG1vdXNlRG93blBvcyA9IHsgeDogZXZlbnQuY2xpZW50WCwgeTogZXZlbnQuY2xpZW50WSB9O1xuXG4gICAgICBjb25zdCBtb3VzZXVwID0gZnJvbUV2ZW50KGRvY3VtZW50LCAnbW91c2V1cCcpO1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSBtb3VzZXVwLnN1YnNjcmliZSgoZXY6IE1vdXNlRXZlbnQpID0+IHRoaXMub25Nb3VzZXVwKGV2KSk7XG5cbiAgICAgIGNvbnN0IG1vdXNlTW92ZVN1YiA9IGZyb21FdmVudChkb2N1bWVudCwgJ21vdXNlbW92ZScpXG4gICAgICAgIC5waXBlKHRha2VVbnRpbChtb3VzZXVwKSlcbiAgICAgICAgLnN1YnNjcmliZSgoZXY6IE1vdXNlRXZlbnQpID0+IHRoaXMubW92ZShldiwgbW91c2VEb3duUG9zKSk7XG5cbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChtb3VzZU1vdmVTdWIpO1xuXG4gICAgICB0aGlzLmRyYWdTdGFydC5lbWl0KHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgbW9kZWw6IHRoaXMuZHJhZ01vZGVsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBtb3ZlKGV2ZW50OiBNb3VzZUV2ZW50LCBtb3VzZURvd25Qb3M6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc0RyYWdnaW5nKSByZXR1cm47XG5cbiAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WCAtIG1vdXNlRG93blBvcy54O1xuICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gbW91c2VEb3duUG9zLnk7XG5cbiAgICBpZiAodGhpcy5kcmFnWCkgdGhpcy5lbGVtZW50LnN0eWxlLmxlZnQgPSBgJHt4fXB4YDtcbiAgICBpZiAodGhpcy5kcmFnWSkgdGhpcy5lbGVtZW50LnN0eWxlLnRvcCA9IGAke3l9cHhgO1xuXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJyk7XG5cbiAgICB0aGlzLmRyYWdnaW5nLmVtaXQoe1xuICAgICAgZXZlbnQsXG4gICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG4gICAgICBtb2RlbDogdGhpcy5kcmFnTW9kZWxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2Rlc3Ryb3lTdWJzY3JpcHRpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG59XG4iXX0=