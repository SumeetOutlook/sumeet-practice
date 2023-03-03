import { __decorate } from "tslib";
import { Component, Input, ElementRef, Output, EventEmitter, Renderer2, NgZone, OnInit, OnDestroy, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import * as ɵngcc0 from '@angular/core';

var _c0 = ["*"];
var ScrollerComponent = /** @class */ (function () {
    function ScrollerComponent(ngZone, element, renderer) {
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.scrollbarV = false;
        this.scrollbarH = false;
        this.scroll = new EventEmitter();
        this.scrollYPos = 0;
        this.scrollXPos = 0;
        this.prevScrollYPos = 0;
        this.prevScrollXPos = 0;
        this._scrollEventListener = null;
        this.element = element.nativeElement;
    }
    ScrollerComponent.prototype.ngOnInit = function () {
        // manual bind so we don't always listen
        if (this.scrollbarV || this.scrollbarH) {
            var renderer = this.renderer;
            this.parentElement = renderer.parentNode(renderer.parentNode(this.element));
            this._scrollEventListener = this.onScrolled.bind(this);
            this.parentElement.addEventListener('scroll', this._scrollEventListener);
        }
    };
    ScrollerComponent.prototype.ngOnDestroy = function () {
        if (this._scrollEventListener) {
            this.parentElement.removeEventListener('scroll', this._scrollEventListener);
            this._scrollEventListener = null;
        }
    };
    ScrollerComponent.prototype.setOffset = function (offsetY) {
        if (this.parentElement) {
            this.parentElement.scrollTop = offsetY;
        }
    };
    ScrollerComponent.prototype.onScrolled = function (event) {
        var _this = this;
        var dom = event.currentTarget;
        requestAnimationFrame(function () {
            _this.scrollYPos = dom.scrollTop;
            _this.scrollXPos = dom.scrollLeft;
            _this.updateOffset();
        });
    };
    ScrollerComponent.prototype.updateOffset = function () {
        var direction;
        if (this.scrollYPos < this.prevScrollYPos) {
            direction = 'down';
        }
        else if (this.scrollYPos > this.prevScrollYPos) {
            direction = 'up';
        }
        this.scroll.emit({
            direction: direction,
            scrollYPos: this.scrollYPos,
            scrollXPos: this.scrollXPos
        });
        this.prevScrollYPos = this.scrollYPos;
        this.prevScrollXPos = this.scrollXPos;
    };
    ScrollerComponent.ctorParameters = function () { return [
        { type: NgZone },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    __decorate([
        Input()
    ], ScrollerComponent.prototype, "scrollbarV", void 0);
    __decorate([
        Input()
    ], ScrollerComponent.prototype, "scrollbarH", void 0);
    __decorate([
        HostBinding('style.height.px'),
        Input()
    ], ScrollerComponent.prototype, "scrollHeight", void 0);
    __decorate([
        HostBinding('style.width.px'),
        Input()
    ], ScrollerComponent.prototype, "scrollWidth", void 0);
    __decorate([
        Output()
    ], ScrollerComponent.prototype, "scroll", void 0);
ScrollerComponent.ɵfac = function ScrollerComponent_Factory(t) { return new (t || ScrollerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
ScrollerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ScrollerComponent, selectors: [["datatable-scroller"]], hostAttrs: [1, "datatable-scroll"], hostVars: 4, hostBindings: function ScrollerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("height", ctx.scrollHeight, "px")("width", ctx.scrollWidth, "px");
    } }, inputs: { scrollbarV: "scrollbarV", scrollbarH: "scrollbarH", scrollHeight: "scrollHeight", scrollWidth: "scrollWidth" }, outputs: { scroll: "scroll" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function ScrollerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ScrollerComponent, [{
        type: Component,
        args: [{
                selector: 'datatable-scroller',
                template: " <ng-content></ng-content> ",
                host: {
                    class: 'datatable-scroll'
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.NgZone }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, { scrollbarV: [{
            type: Input
        }], scrollbarH: [{
            type: Input
        }], scroll: [{
            type: Output
        }], scrollHeight: [{
            type: HostBinding,
            args: ['style.height.px']
        }, {
            type: Input
        }], scrollWidth: [{
            type: HostBinding,
            args: ['style.width.px']
        }, {
            type: Input
        }] }); })();
    return ScrollerComponent;
}());
export { ScrollerComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsZXIuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovQHN3aW1sYW5lL25neC1kYXRhdGFibGUvbGliL2NvbXBvbmVudHMvYm9keS9zY3JvbGxlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFVBQVUsRUFDVixNQUFNLEVBQ04sWUFBWSxFQUNaLFNBQVMsRUFDVCxNQUFNLEVBQ04sTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsdUJBQXVCLEVBQ3hCLE1BQU0sZUFBZSxDQUFDOzs7O0FBWXZCO0FBQXFELElBd0JuRCwyQkFBb0IsTUFBYyxFQUFFLE9BQW1CLEVBQVUsUUFBbUI7QUFDdEYsUUFEc0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtBQUFDLFFBQThCLGFBQVEsR0FBUixRQUFRLENBQVc7QUFBQyxRQXZCNUUsZUFBVSxHQUFZLEtBQUssQ0FBQztBQUN2QyxRQUFXLGVBQVUsR0FBWSxLQUFLLENBQUM7QUFDdkMsUUFTWSxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDM0QsUUFDRSxlQUFVLEdBQVcsQ0FBQyxDQUFDO0FBQ3pCLFFBQUUsZUFBVSxHQUFXLENBQUMsQ0FBQztBQUN6QixRQUFFLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO0FBQzdCLFFBQUUsbUJBQWMsR0FBVyxDQUFDLENBQUM7QUFDN0IsUUFJVSx5QkFBb0IsR0FBUSxJQUFJLENBQUM7QUFDM0MsUUFFSSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7QUFDekMsSUFBRSxDQUFDO0FBQ0gsSUFDRSxvQ0FBUSxHQUFSO0FBQWMsUUFDWix3Q0FBd0M7QUFDNUMsUUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtBQUM1QyxZQUFNLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDckMsWUFBTSxJQUFJ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UyxDQUFDLGNBQ1QsUUFBUSxFQUFFLG9CQUFvQixjQUM5QixRQUFRLEVBQUUsNkJBQTZCLGNBQ3ZDLElBQUksRUFBRSxrQkFDSixLQUFLLEVBQUUsa0JBQWtCLGNBQzFCO1FBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sVUFDaEQsQ0FBQyxRQUNXLGlCQUFpQixDQTZFN0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUNEO0FBQUMsSUFERCx3QkFBQztBQUNBLENBREEsQUE3RUQsSUE2RUM7QUFDRCxTQTlFYSxpQkFBaUI7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIEVsZW1lbnRSZWYsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBSZW5kZXJlcjIsXG4gIE5nWm9uZSxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIEhvc3RCaW5kaW5nLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTW91c2VFdmVudCB9IGZyb20gJy4uLy4uL2V2ZW50cyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGF0YWJsZS1zY3JvbGxlcicsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnZGF0YXRhYmxlLXNjcm9sbCdcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU2Nyb2xsZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHNjcm9sbGJhclY6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgc2Nyb2xsYmFySDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0LnB4JylcbiAgQElucHV0KClcbiAgc2Nyb2xsSGVpZ2h0OiBudW1iZXI7XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aC5weCcpXG4gIEBJbnB1dCgpXG4gIHNjcm9sbFdpZHRoOiBudW1iZXI7XG5cbiAgQE91dHB1dCgpIHNjcm9sbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgc2Nyb2xsWVBvczogbnVtYmVyID0gMDtcbiAgc2Nyb2xsWFBvczogbnVtYmVyID0gMDtcbiAgcHJldlNjcm9sbFlQb3M6IG51bWJlciA9IDA7XG4gIHByZXZTY3JvbGxYUG9zOiBudW1iZXIgPSAwO1xuICBlbGVtZW50OiBhbnk7XG4gIHBhcmVudEVsZW1lbnQ6IGFueTtcbiAgb25TY3JvbGxMaXN0ZW5lcjogYW55O1xuXG4gIHByaXZhdGUgX3Njcm9sbEV2ZW50TGlzdGVuZXI6IGFueSA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gbWFudWFsIGJpbmQgc28gd2UgZG9uJ3QgYWx3YXlzIGxpc3RlblxuICAgIGlmICh0aGlzLnNjcm9sbGJhclYgfHwgdGhpcy5zY3JvbGxiYXJIKSB7XG4gICAgICBjb25zdCByZW5kZXJlciA9IHRoaXMucmVuZGVyZXI7XG4gICAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSByZW5kZXJlci5wYXJlbnROb2RlKHJlbmRlcmVyLnBhcmVudE5vZGUodGhpcy5lbGVtZW50KSk7XG4gICAgICB0aGlzLl9zY3JvbGxFdmVudExpc3RlbmVyID0gdGhpcy5vblNjcm9sbGVkLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLnBhcmVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsRXZlbnRMaXN0ZW5lcik7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3Njcm9sbEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHRoaXMucGFyZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGxFdmVudExpc3RlbmVyKTtcbiAgICAgIHRoaXMuX3Njcm9sbEV2ZW50TGlzdGVuZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHNldE9mZnNldChvZmZzZXRZOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wYXJlbnRFbGVtZW50KSB7XG4gICAgICB0aGlzLnBhcmVudEVsZW1lbnQuc2Nyb2xsVG9wID0gb2Zmc2V0WTtcbiAgICB9XG4gIH1cblxuICBvblNjcm9sbGVkKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgZG9tOiBFbGVtZW50ID0gPEVsZW1lbnQ+ZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5zY3JvbGxZUG9zID0gZG9tLnNjcm9sbFRvcDtcbiAgICAgIHRoaXMuc2Nyb2xsWFBvcyA9IGRvbS5zY3JvbGxMZWZ0O1xuICAgICAgdGhpcy51cGRhdGVPZmZzZXQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZU9mZnNldCgpOiB2b2lkIHtcbiAgICBsZXQgZGlyZWN0aW9uOiBzdHJpbmc7XG4gICAgaWYgKHRoaXMuc2Nyb2xsWVBvcyA8IHRoaXMucHJldlNjcm9sbFlQb3MpIHtcbiAgICAgIGRpcmVjdGlvbiA9ICdkb3duJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsWVBvcyA+IHRoaXMucHJldlNjcm9sbFlQb3MpIHtcbiAgICAgIGRpcmVjdGlvbiA9ICd1cCc7XG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGwuZW1pdCh7XG4gICAgICBkaXJlY3Rpb24sXG4gICAgICBzY3JvbGxZUG9zOiB0aGlzLnNjcm9sbFlQb3MsXG4gICAgICBzY3JvbGxYUG9zOiB0aGlzLnNjcm9sbFhQb3NcbiAgICB9KTtcblxuICAgIHRoaXMucHJldlNjcm9sbFlQb3MgPSB0aGlzLnNjcm9sbFlQb3M7XG4gICAgdGhpcy5wcmV2U2Nyb2xsWFBvcyA9IHRoaXMuc2Nyb2xsWFBvcztcbiAgfVxufVxuIl19