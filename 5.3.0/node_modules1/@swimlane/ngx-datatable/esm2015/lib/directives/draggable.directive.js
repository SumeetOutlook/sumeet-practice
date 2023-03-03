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
let DraggableDirective = class DraggableDirective {
    constructor(element) {
        this.dragX = true;
        this.dragY = true;
        this.dragStart = new EventEmitter();
        this.dragging = new EventEmitter();
        this.dragEnd = new EventEmitter();
        this.isDragging = false;
        this.element = element.nativeElement;
    }
    ngOnChanges(changes) {
        if (changes['dragEventTarget'] && changes['dragEventTarget'].currentValue && this.dragModel.dragging) {
            this.onMousedown(changes['dragEventTarget'].currentValue);
        }
    }
    ngOnDestroy() {
        this._destroySubscription();
    }
    onMouseup(event) {
        if (!this.isDragging)
            return;
        this.isDragging = false;
        this.element.classList.remove('dragging');
        if (this.subscription) {
            this._destroySubscription();
            this.dragEnd.emit({
                event,
                element: this.element,
                model: this.dragModel
            });
        }
    }
    onMousedown(event) {
        // we only want to drag the inner header text
        const isDragElm = event.target.classList.contains('draggable');
        if (isDragElm && (this.dragX || this.dragY)) {
            event.preventDefault();
            this.isDragging = true;
            const mouseDownPos = { x: event.clientX, y: event.clientY };
            const mouseup = fromEvent(document, 'mouseup');
            this.subscription = mouseup.subscribe((ev) => this.onMouseup(ev));
            const mouseMoveSub = fromEvent(document, 'mousemove')
                .pipe(takeUntil(mouseup))
                .subscribe((ev) => this.move(ev, mouseDownPos));
            this.subscription.add(mouseMoveSub);
            this.dragStart.emit({
                event,
                element: this.element,
                model: this.dragModel
            });
        }
    }
    move(event, mouseDownPos) {
        if (!this.isDragging)
            return;
        const x = event.clientX - mouseDownPos.x;
        const y = event.clientY - mouseDownPos.y;
        if (this.dragX)
            this.element.style.left = `${x}px`;
        if (this.dragY)
            this.element.style.top = `${y}px`;
        this.element.classList.add('dragging');
        this.dragging.emit({
            event,
            element: this.element,
            model: this.dragModel
        });
    }
    _destroySubscription() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    }
};
DraggableDirective.ɵfac = function DraggableDirective_Factory(t) { return new (t || DraggableDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
DraggableDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DraggableDirective, selectors: [["", "draggable", ""]], inputs: { dragX: "dragX", dragY: "dragY", dragEventTarget: "dragEventTarget", dragModel: "dragModel" }, outputs: { dragStart: "dragStart", dragging: "dragging", dragEnd: "dragEnd" }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
DraggableDirective.ctorParameters = () => [
    { type: ElementRef }
];
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
export { DraggableDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsibmc6L0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2xpYi9kaXJlY3RpdmVzL2RyYWdnYWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hILE9BQU8sRUFBZ0IsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7QUFBRyxJQWNoQyxZQUFZLE9BQW1CO0FBQ2pDLFFBWlcsVUFBSyxHQUFZLElBQUksQ0FBQztBQUNqQyxRQUFXLFVBQUssR0FBWSxJQUFJLENBQUM7QUFDakMsUUFDWSxjQUFTLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDOUQsUUFBWSxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDN0QsUUFBWSxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDNUQsUUFFRSxlQUFVLEdBQVksS0FBSyxDQUFDO0FBQzlCLFFBR0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO0FBQ3pDLElBQUUsQ0FBQztBQUNILElBQ0UsV0FBVyxDQUFDLE9BQXNCO0FBQUksUUFDcEMsSUFBSSxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUU7QUFDMUcsWUFBTSxJQUFJLENBQUMsV0FBVyxDQUFD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QWtCLG9CQUQ5QixTQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLENBQUM7R0FDMUIsa0JBQWtCLENBK0Y5Qjs7Ozs7Ozs7Ozs7Ozs7OztvQkFDRDtBQUFDLFNBaEdZLGtCQUFrQjtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKipcbiAqIERyYWdnYWJsZSBEaXJlY3RpdmUgZm9yIEFuZ3VsYXIyXG4gKlxuICogSW5zcGlyYXRpb246XG4gKiAgIGh0dHBzOi8vZ2l0aHViLmNvbS9Bbmd1bGFyQ2xhc3MvYW5ndWxhcjItZXhhbXBsZXMvYmxvYi9tYXN0ZXIvcngtZHJhZ2dhYmxlL2RpcmVjdGl2ZXMvZHJhZ2dhYmxlLnRzXG4gKiAgIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzU2NjI1MzAvaG93LXRvLWltcGxlbWVudC1kcmFnLWFuZC1kcm9wLWluLWFuZ3VsYXIyXG4gKlxuICovXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbZHJhZ2dhYmxlXScgfSlcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGRyYWdFdmVudFRhcmdldDogYW55O1xuICBASW5wdXQoKSBkcmFnTW9kZWw6IGFueTtcbiAgQElucHV0KCkgZHJhZ1g6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBkcmFnWTogYm9vbGVhbiA9IHRydWU7XG5cbiAgQE91dHB1dCgpIGRyYWdTdGFydDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkcmFnZ2luZzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkcmFnRW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBlbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgaXNEcmFnZ2luZzogYm9vbGVhbiA9IGZhbHNlO1xuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzWydkcmFnRXZlbnRUYXJnZXQnXSAmJiBjaGFuZ2VzWydkcmFnRXZlbnRUYXJnZXQnXS5jdXJyZW50VmFsdWUgJiYgdGhpcy5kcmFnTW9kZWwuZHJhZ2dpbmcpIHtcbiAgICAgIHRoaXMub25Nb3VzZWRvd24oY2hhbmdlc1snZHJhZ0V2ZW50VGFyZ2V0J10uY3VycmVudFZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9kZXN0cm95U3Vic2NyaXB0aW9uKCk7XG4gIH1cblxuICBvbk1vdXNldXAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNEcmFnZ2luZykgcmV0dXJuO1xuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nJyk7XG5cbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX2Rlc3Ryb3lTdWJzY3JpcHRpb24oKTtcbiAgICAgIHRoaXMuZHJhZ0VuZC5lbWl0KHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgbW9kZWw6IHRoaXMuZHJhZ01vZGVsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlZG93bihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIC8vIHdlIG9ubHkgd2FudCB0byBkcmFnIHRoZSBpbm5lciBoZWFkZXIgdGV4dFxuICAgIGNvbnN0IGlzRHJhZ0VsbSA9ICg8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS5jbGFzc0xpc3QuY29udGFpbnMoJ2RyYWdnYWJsZScpO1xuXG4gICAgaWYgKGlzRHJhZ0VsbSAmJiAodGhpcy5kcmFnWCB8fCB0aGlzLmRyYWdZKSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWU7XG5cbiAgICAgIGNvbnN0IG1vdXNlRG93blBvcyA9IHsgeDogZXZlbnQuY2xpZW50WCwgeTogZXZlbnQuY2xpZW50WSB9O1xuXG4gICAgICBjb25zdCBtb3VzZXVwID0gZnJvbUV2ZW50KGRvY3VtZW50LCAnbW91c2V1cCcpO1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSBtb3VzZXVwLnN1YnNjcmliZSgoZXY6IE1vdXNlRXZlbnQpID0+IHRoaXMub25Nb3VzZXVwKGV2KSk7XG5cbiAgICAgIGNvbnN0IG1vdXNlTW92ZVN1YiA9IGZyb21FdmVudChkb2N1bWVudCwgJ21vdXNlbW92ZScpXG4gICAgICAgIC5waXBlKHRha2VVbnRpbChtb3VzZXVwKSlcbiAgICAgICAgLnN1YnNjcmliZSgoZXY6IE1vdXNlRXZlbnQpID0+IHRoaXMubW92ZShldiwgbW91c2VEb3duUG9zKSk7XG5cbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChtb3VzZU1vdmVTdWIpO1xuXG4gICAgICB0aGlzLmRyYWdTdGFydC5lbWl0KHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgbW9kZWw6IHRoaXMuZHJhZ01vZGVsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBtb3ZlKGV2ZW50OiBNb3VzZUV2ZW50LCBtb3VzZURvd25Qb3M6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc0RyYWdnaW5nKSByZXR1cm47XG5cbiAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WCAtIG1vdXNlRG93blBvcy54O1xuICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gbW91c2VEb3duUG9zLnk7XG5cbiAgICBpZiAodGhpcy5kcmFnWCkgdGhpcy5lbGVtZW50LnN0eWxlLmxlZnQgPSBgJHt4fXB4YDtcbiAgICBpZiAodGhpcy5kcmFnWSkgdGhpcy5lbGVtZW50LnN0eWxlLnRvcCA9IGAke3l9cHhgO1xuXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJyk7XG5cbiAgICB0aGlzLmRyYWdnaW5nLmVtaXQoe1xuICAgICAgZXZlbnQsXG4gICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG4gICAgICBtb2RlbDogdGhpcy5kcmFnTW9kZWxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2Rlc3Ryb3lTdWJzY3JpcHRpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG59XG4iXX0=