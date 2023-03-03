import { __decorate } from "tslib";
import { Directive, ElementRef, HostListener, Input, Output, EventEmitter, OnDestroy, AfterViewInit, Renderer2 } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';
var ResizeableDirective = /** @class */ (function () {
    function ResizeableDirective(element, renderer) {
        this.renderer = renderer;
        this.resizeEnabled = true;
        this.resize = new EventEmitter();
        this.resizing = false;
        this.element = element.nativeElement;
    }
    ResizeableDirective.prototype.ngAfterViewInit = function () {
        var renderer2 = this.renderer;
        this.resizeHandle = renderer2.createElement('span');
        if (this.resizeEnabled) {
            renderer2.addClass(this.resizeHandle, 'resize-handle');
        }
        else {
            renderer2.addClass(this.resizeHandle, 'resize-handle--not-resizable');
        }
        renderer2.appendChild(this.element, this.resizeHandle);
    };
    ResizeableDirective.prototype.ngOnDestroy = function () {
        this._destroySubscription();
        if (this.renderer.destroyNode) {
            this.renderer.destroyNode(this.resizeHandle);
        }
        else if (this.resizeHandle) {
            this.renderer.removeChild(this.renderer.parentNode(this.resizeHandle), this.resizeHandle);
        }
    };
    ResizeableDirective.prototype.onMouseup = function () {
        this.resizing = false;
        if (this.subscription && !this.subscription.closed) {
            this._destroySubscription();
            this.resize.emit(this.element.clientWidth);
        }
    };
    ResizeableDirective.prototype.onMousedown = function (event) {
        var _this = this;
        var isHandle = event.target.classList.contains('resize-handle');
        var initialWidth = this.element.clientWidth;
        var mouseDownScreenX = event.screenX;
        if (isHandle) {
            event.stopPropagation();
            this.resizing = true;
            var mouseup = fromEvent(document, 'mouseup');
            this.subscription = mouseup.subscribe(function (ev) { return _this.onMouseup(); });
            var mouseMoveSub = fromEvent(document, 'mousemove')
                .pipe(takeUntil(mouseup))
                .subscribe(function (e) { return _this.move(e, initialWidth, mouseDownScreenX); });
            this.subscription.add(mouseMoveSub);
        }
    };
    ResizeableDirective.prototype.move = function (event, initialWidth, mouseDownScreenX) {
        var movementX = event.screenX - mouseDownScreenX;
        var newWidth = initialWidth + movementX;
        var overMinWidth = !this.minWidth || newWidth >= this.minWidth;
        var underMaxWidth = !this.maxWidth || newWidth <= this.maxWidth;
        if (overMinWidth && underMaxWidth) {
            this.element.style.width = newWidth + "px";
        }
    };
    ResizeableDirective.prototype._destroySubscription = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    };
    ResizeableDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    __decorate([
        Input()
    ], ResizeableDirective.prototype, "resizeEnabled", void 0);
    __decorate([
        Input()
    ], ResizeableDirective.prototype, "minWidth", void 0);
    __decorate([
        Input()
    ], ResizeableDirective.prototype, "maxWidth", void 0);
    __decorate([
        Output()
    ], ResizeableDirective.prototype, "resize", void 0);
    __decorate([
        HostListener('mousedown', ['$event'])
    ], ResizeableDirective.prototype, "onMousedown", null);
ResizeableDirective.ɵfac = function ResizeableDirective_Factory(t) { return new (t || ResizeableDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
ResizeableDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ResizeableDirective, selectors: [["", "resizeable", ""]], hostVars: 2, hostBindings: function ResizeableDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mousedown", function ResizeableDirective_mousedown_HostBindingHandler($event) { return ctx.onMousedown($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("resizeable", ctx.resizeEnabled);
    } }, inputs: { resizeEnabled: "resizeEnabled", minWidth: "minWidth", maxWidth: "maxWidth" }, outputs: { resize: "resize" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ResizeableDirective, [{
        type: Directive,
        args: [{
                selector: '[resizeable]',
                host: {
                    '[class.resizeable]': 'resizeEnabled'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, { resizeEnabled: [{
            type: Input
        }], resize: [{
            type: Output
        }], onMousedown: [{
            type: HostListener,
            args: ['mousedown', ['$event']]
        }], minWidth: [{
            type: Input
        }], maxWidth: [{
            type: Input
        }] }); })();
    return ResizeableDirective;
}());
export { ResizeableDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplYWJsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIm5nOi9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9saWIvZGlyZWN0aXZlcy9yZXNpemVhYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFNBQVMsRUFDVCxhQUFhLEVBQ2IsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFRM0M7QUFBdUQsSUFZckQsNkJBQVksT0FBbUIsRUFBVSxRQUFtQjtBQUM5RCxRQUQyQyxhQUFRLEdBQVIsUUFBUSxDQUFXO0FBQUMsUUFYcEQsa0JBQWEsR0FBWSxJQUFJLENBQUM7QUFDekMsUUFHWSxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDM0QsUUFHRSxhQUFRLEdBQVksS0FBSyxDQUFDO0FBQzVCLFFBR0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO0FBQ3pDLElBQUUsQ0FBQztBQUNILElBQ0UsNkNBQWUsR0FBZjtBQUFjLFFBQ1osSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUNwQyxRQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN4RCxRQUFJLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtBQUM1QixZQUFNLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUMsQ0FBQztBQUM3RCxTQUFLO0FBQUMsYUFBSztBQUNYLFlBQU0sU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLDhCQUE4QixDQUFDLENBQUM7QUFDNUUsU0FBSztBQUNMLFFBQUksU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUMzRCxJQUFFLENBQUM7QUFFSCxJQUFFLHlDQUFXLEdBQVg7QUFBYyxRQUNaLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0FBQ2hDLFFBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRTtBQUNuQyxZQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNuRCxTQUFLO0FBQUMsYUFBSyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7QUFDbEMsWUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ2hHLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFFSCxJQUFFLHVDQUFTLEdBQVQ7QUFBYyxRQUNaLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQzFCLFFBQ0ksSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUU7QUFDeEQsWUFBTSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztBQUNsQyxZQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDakQsU0FBSztBQUNMLElBQUUsQ0FBQztBQUVILElBQ0UseUNBQVcsR0FBWCxVQUFZLEtBQWlCO0FBQUksUUFEakMsaUJBbUJDO0FBQ0gsUUFsQkksSUFBTSxRQUFRLEdBQWlCLEtBQUssQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUNyRixRQUFJLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO0FBQ2xELFFBQUksSUFBTSxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO0FBQzNDLFFBQ0ksSUFBSSxRQUFRLEVBQUU7QUFDbEIsWUFBTSxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDOUIsWUFBTSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztBQUMzQixZQUNNLElBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDckQsWUFBTSxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFjLElBQUssT0FBQSxLQUFJLENBQUMsU0FBUyxFQUFFLEVBQWhCLENBQWdCLENBQUMsQ0FBQztBQUNsRixZQUNNLElBQU0sWUFBWSxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDO0FBQzNELGlCQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDakMsaUJBQVMsU0FBUyxDQUFDLFVBQUMsQ0FBYSxJQUFLLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixDQUFDLEVBQTVDLENBQTRDLENBQUMsQ0FBQztBQUNwRixZQUNNLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzFDLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFFSCxJQUFFLGtDQUFJLEdBQUosVUFBSyxLQUFpQixFQUFFLFlBQW9CLEVBQUUsZ0JBQXdCO0FBQUksUUFDeEUsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQztBQUN2RCxRQUFJLElBQU0sUUFBUSxHQUFHLFlBQVksR0FBRyxTQUFTLENBQUM7QUFDOUMsUUFDSSxJQUFNLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDckUsUUFBSSxJQUFNLGFBQWEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDdEUsUUFDSSxJQUFJLFlBQVksSUFBSSxhQUFhLEVBQUU7QUFDdkMsWUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQU0sUUFBUSxPQUFJLENBQUM7QUFDakQsU0FBSztBQUNMLElBQUUsQ0FBQztBQUVILElBQVUsa0RBQW9CLEdBQTVCO0FBQWMsUUFDWixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7QUFDM0IsWUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3RDLFlBQU0sSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7QUFDcEMsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNGO0FBQzhELGdCQXpFeEMsVUFBVTtBQUFJLGdCQUFnQixTQUFTO0FBQUc7QUFDeEQsSUFaRTtBQUFhLFFBQXJCLEtBQUssRUFBRTtBQUFDLDhEQUE4QjtBQUN4QyxJQUFVO0FBQWEsUUFBckIsS0FBSyxFQUFFO0FBQUMseURBQWlCO0FBQzNCLElBQVU7QUFBYSxRQUFyQixLQUFLLEVBQUU7QUFBQyx5REFBaUI7QUFFNUIsSUFBWTtBQUFhLFFBQXRCLE1BQU0sRUFBRTtBQUFDLHVEQUErQztBQUUzRCxJQXVDRTtBQUFhLFFBRFosWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3hDLDBEQWtCRztJQWhFVSxtQkFBbUIsd0JBTi9CLFNBQVMsQ0FBQyxjQUNULFFBQVEsRUFBRSxjQUFjLGNBQ3hCLElBQUksRUFBRSxrQkFDSixvQkFBb0IsRUFBRSxlQUFlLGNBQ3RDLFVBQ0YsQ0FBQztHQUNXLG1CQUFtQixDQW9GL0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFDRDtBQUFDLElBREQsMEJBQUM7QUFDQSxDQURBLEFBcEZELElBb0ZDO0FBQ0QsU0FyRmEsbUJBQW1CO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG4gIEFmdGVyVmlld0luaXQsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tyZXNpemVhYmxlXScsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnJlc2l6ZWFibGVdJzogJ3Jlc2l6ZUVuYWJsZWQnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgUmVzaXplYWJsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIHJlc2l6ZUVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBtaW5XaWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSBtYXhXaWR0aDogbnVtYmVyO1xuXG4gIEBPdXRwdXQoKSByZXNpemU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcmVzaXppbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSByZXNpemVIYW5kbGU6IEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCByZW5kZXJlcjIgPSB0aGlzLnJlbmRlcmVyO1xuICAgIHRoaXMucmVzaXplSGFuZGxlID0gcmVuZGVyZXIyLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBpZiAodGhpcy5yZXNpemVFbmFibGVkKSB7XG4gICAgICByZW5kZXJlcjIuYWRkQ2xhc3ModGhpcy5yZXNpemVIYW5kbGUsICdyZXNpemUtaGFuZGxlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbmRlcmVyMi5hZGRDbGFzcyh0aGlzLnJlc2l6ZUhhbmRsZSwgJ3Jlc2l6ZS1oYW5kbGUtLW5vdC1yZXNpemFibGUnKTtcbiAgICB9XG4gICAgcmVuZGVyZXIyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCwgdGhpcy5yZXNpemVIYW5kbGUpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fZGVzdHJveVN1YnNjcmlwdGlvbigpO1xuICAgIGlmICh0aGlzLnJlbmRlcmVyLmRlc3Ryb3lOb2RlKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmRlc3Ryb3lOb2RlKHRoaXMucmVzaXplSGFuZGxlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmVzaXplSGFuZGxlKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMucmVuZGVyZXIucGFyZW50Tm9kZSh0aGlzLnJlc2l6ZUhhbmRsZSksIHRoaXMucmVzaXplSGFuZGxlKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNldXAoKTogdm9pZCB7XG4gICAgdGhpcy5yZXNpemluZyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uICYmICF0aGlzLnN1YnNjcmlwdGlvbi5jbG9zZWQpIHtcbiAgICAgIHRoaXMuX2Rlc3Ryb3lTdWJzY3JpcHRpb24oKTtcbiAgICAgIHRoaXMucmVzaXplLmVtaXQodGhpcy5lbGVtZW50LmNsaWVudFdpZHRoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nLCBbJyRldmVudCddKVxuICBvbk1vdXNlZG93bihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGlzSGFuZGxlID0gKDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpLmNsYXNzTGlzdC5jb250YWlucygncmVzaXplLWhhbmRsZScpO1xuICAgIGNvbnN0IGluaXRpYWxXaWR0aCA9IHRoaXMuZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICBjb25zdCBtb3VzZURvd25TY3JlZW5YID0gZXZlbnQuc2NyZWVuWDtcblxuICAgIGlmIChpc0hhbmRsZSkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLnJlc2l6aW5nID0gdHJ1ZTtcblxuICAgICAgY29uc3QgbW91c2V1cCA9IGZyb21FdmVudChkb2N1bWVudCwgJ21vdXNldXAnKTtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gbW91c2V1cC5zdWJzY3JpYmUoKGV2OiBNb3VzZUV2ZW50KSA9PiB0aGlzLm9uTW91c2V1cCgpKTtcblxuICAgICAgY29uc3QgbW91c2VNb3ZlU3ViID0gZnJvbUV2ZW50KGRvY3VtZW50LCAnbW91c2Vtb3ZlJylcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKG1vdXNldXApKVxuICAgICAgICAuc3Vic2NyaWJlKChlOiBNb3VzZUV2ZW50KSA9PiB0aGlzLm1vdmUoZSwgaW5pdGlhbFdpZHRoLCBtb3VzZURvd25TY3JlZW5YKSk7XG5cbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChtb3VzZU1vdmVTdWIpO1xuICAgIH1cbiAgfVxuXG4gIG1vdmUoZXZlbnQ6IE1vdXNlRXZlbnQsIGluaXRpYWxXaWR0aDogbnVtYmVyLCBtb3VzZURvd25TY3JlZW5YOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBtb3ZlbWVudFggPSBldmVudC5zY3JlZW5YIC0gbW91c2VEb3duU2NyZWVuWDtcbiAgICBjb25zdCBuZXdXaWR0aCA9IGluaXRpYWxXaWR0aCArIG1vdmVtZW50WDtcblxuICAgIGNvbnN0IG92ZXJNaW5XaWR0aCA9ICF0aGlzLm1pbldpZHRoIHx8IG5ld1dpZHRoID49IHRoaXMubWluV2lkdGg7XG4gICAgY29uc3QgdW5kZXJNYXhXaWR0aCA9ICF0aGlzLm1heFdpZHRoIHx8IG5ld1dpZHRoIDw9IHRoaXMubWF4V2lkdGg7XG5cbiAgICBpZiAob3Zlck1pbldpZHRoICYmIHVuZGVyTWF4V2lkdGgpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS53aWR0aCA9IGAke25ld1dpZHRofXB4YDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9kZXN0cm95U3Vic2NyaXB0aW9uKCkge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxufVxuIl19