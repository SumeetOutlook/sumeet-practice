import { __decorate, __metadata, __param } from "tslib";
import { Directive, Renderer2, ElementRef, OnInit, OnDestroy, Output, EventEmitter, Inject, Input, NgZone, } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';
var ClickDirective = /** @class */ (function () {
    function ClickDirective(renderer, elm, document) {
        this.renderer = renderer;
        this.elm = elm;
        this.document = document;
        this.clickListenerDisabled = false;
        this.click = new EventEmitter(); // tslint:disable-line
        this.destroy$ = new Subject();
    }
    ClickDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.clickListenerDisabled) {
            this.listen()
                .pipe(takeUntil(this.destroy$))
                .subscribe(function (event) {
                event.stopPropagation();
                _this.click.emit(event);
            });
        }
    };
    ClickDirective.prototype.ngOnDestroy = function () {
        this.destroy$.next();
    };
    ClickDirective.prototype.listen = function () {
        var _this = this;
        return new Observable(function (observer) {
            return _this.renderer.listen(_this.elm.nativeElement, 'click', function (event) {
                observer.next(event);
            });
        });
    };
    ClickDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ClickDirective.prototype, "clickListenerDisabled", void 0);
    __decorate([
        Output('mwlClick'),
        __metadata("design:type", Object)
    ], ClickDirective.prototype, "click", void 0);
    ClickDirective = __decorate([ __param(2, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [Renderer2,
            ElementRef, Object])
    ], ClickDirective);
ClickDirective.ɵfac = function ClickDirective_Factory(t) { return new (t || ClickDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(DOCUMENT)); };
ClickDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ClickDirective, selectors: [["", "mwlClick", ""]], inputs: { clickListenerDisabled: "clickListenerDisabled" }, outputs: { click: "mwlClick" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ClickDirective, [{
        type: Directive,
        args: [{
                selector: '[mwlClick]'
            }]
    }], function () { return [{ type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { clickListenerDisabled: [{
            type: Input
        }], click: [{
            type: Output,
            args: ['mwlClick']
        }] }); })();
    return ClickDirective;
}());
export { ClickDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2suZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL2NvbW1vbi9jbGljay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sU0FBUyxFQUNULE1BQU0sRUFDTixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFLM0M7QUFBa0QsSUFPaEQsd0JBQ1UsUUFBbUIsRUFDbkIsR0FBNEIsRUFDVixRQUFRO0FBQ25DLFFBSFMsYUFBUSxHQUFSLFFBQVEsQ0FBVztBQUFDLFFBQ3BCLFFBQUcsR0FBSCxHQUFHLENBQXlCO0FBQUMsUUFDWCxhQUFRLEdBQVIsUUFBUSxDQUFBO0FBQ3RDLFFBVlcsMEJBQXFCLEdBQUcsS0FBSyxDQUFDO0FBQ3pDLFFBQ3NCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDLENBQUMsc0JBQXNCO0FBQ3BGLFFBQ1UsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7QUFDbkMsSUFLSyxDQUFDO0FBQ04sSUFDRSxpQ0FBUSxHQUFSO0FBQWMsUUFBZCxpQkFTQztBQUNILFFBVEksSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtBQUNyQyxZQUFNLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDbkIsaUJBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdkMsaUJBQVMsU0FBUyxDQUFDLFVBQUMsS0FBSztBQUFJLGdCQUNuQixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDbEMsZ0JBQVUsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDakMsWUFBUSxDQUFDLENBQUMsQ0FBQztBQUNYLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFFSCxJQUFFLG9DQUFXLEdBQVg7QUFBYyxRQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDekIsSUFBRSxDQUFDO0FBRUgsSUFBVSwrQkFBTSxHQUFkO0FBQWMsUUFBZCxpQkFNQztBQUNILFFBTkksT0FBTyxJQUFJLFVBQVUsQ0FBYSxVQUFDLFFBQVE7QUFBSSxZQUM3QyxPQUFPLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxVQUFDLEtBQUs7QUFBSSxnQkFDckUsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM3QixZQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ1QsUUFBSSxDQUFDLENBQUMsQ0FBQztBQUNQLElBQUUsQ0FBQztBQUNGO0FBQ3lELGdCQTVCcEMsU0FBUztBQUM3QixnQkFBZSxVQUFVO0FBQUksZ0RBQzFCLE1BQU0sU0FBQyxRQUFRO0FBQVE7QUFBVSxJQVQzQjtBQUFhLFFBQXJCLEtBQUssRUFBRTtBQUFFO0FBRUQsaUVBRjhCO0FBRXpDLElBQXNCO0FBQWEsUUFBaEMsTUFBTSxDQUFDLFVBQVUsQ0FBQztBQUFFO0FBQTBDLGlEQUFKO0FBQUUsSUFIbEQsY0FBYyx3QkFIMUIsU0FBUyxDQUFDLG5CQUdILENBVUgsV0FBQSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7RUFabkIsUUFBUSxFQUFFLFlBQVksV0FDdkIsQ0FBQyxwQ0FXcUIseUNBRkQsU0FBUztBQUMvQixZQUFpQixVQUFVO0FBQVcsT0FUekIsY0FBYyxDQW1DMUI7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQ0Q7QUFBQyxJQURELHFCQUFDO0FBQ0EsQ0FEQSxBQW5DRCxJQW1DQztBQUNELFNBcENhLGNBQWM7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgUmVuZGVyZXIyLFxuICBFbGVtZW50UmVmLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttd2xDbGlja10nLFxufSlcbmV4cG9ydCBjbGFzcyBDbGlja0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgY2xpY2tMaXN0ZW5lckRpc2FibGVkID0gZmFsc2U7XG5cbiAgQE91dHB1dCgnbXdsQ2xpY2snKSBjbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsbTogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudFxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNsaWNrTGlzdGVuZXJEaXNhYmxlZCkge1xuICAgICAgdGhpcy5saXN0ZW4oKVxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgdGhpcy5jbGljay5lbWl0KGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIGxpc3RlbigpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8TW91c2VFdmVudD4oKG9ic2VydmVyKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbG0ubmF0aXZlRWxlbWVudCwgJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIG9ic2VydmVyLm5leHQoZXZlbnQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==