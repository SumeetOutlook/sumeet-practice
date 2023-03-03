import { __decorate } from "tslib";
import { Component, Input, ElementRef, Output, EventEmitter, Renderer2, NgZone, OnInit, OnDestroy, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import * as ɵngcc0 from '@angular/core';

const _c0 = ["*"];
let ScrollerComponent = class ScrollerComponent {
    constructor(ngZone, element, renderer) {
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
    ngOnInit() {
        // manual bind so we don't always listen
        if (this.scrollbarV || this.scrollbarH) {
            const renderer = this.renderer;
            this.parentElement = renderer.parentNode(renderer.parentNode(this.element));
            this._scrollEventListener = this.onScrolled.bind(this);
            this.parentElement.addEventListener('scroll', this._scrollEventListener);
        }
    }
    ngOnDestroy() {
        if (this._scrollEventListener) {
            this.parentElement.removeEventListener('scroll', this._scrollEventListener);
            this._scrollEventListener = null;
        }
    }
    setOffset(offsetY) {
        if (this.parentElement) {
            this.parentElement.scrollTop = offsetY;
        }
    }
    onScrolled(event) {
        const dom = event.currentTarget;
        requestAnimationFrame(() => {
            this.scrollYPos = dom.scrollTop;
            this.scrollXPos = dom.scrollLeft;
            this.updateOffset();
        });
    }
    updateOffset() {
        let direction;
        if (this.scrollYPos < this.prevScrollYPos) {
            direction = 'down';
        }
        else if (this.scrollYPos > this.prevScrollYPos) {
            direction = 'up';
        }
        this.scroll.emit({
            direction,
            scrollYPos: this.scrollYPos,
            scrollXPos: this.scrollXPos
        });
        this.prevScrollYPos = this.scrollYPos;
        this.prevScrollXPos = this.scrollXPos;
    }
};
ScrollerComponent.ɵfac = function ScrollerComponent_Factory(t) { return new (t || ScrollerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
ScrollerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ScrollerComponent, selectors: [["datatable-scroller"]], hostAttrs: [1, "datatable-scroll"], hostVars: 4, hostBindings: function ScrollerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("height", ctx.scrollHeight, "px")("width", ctx.scrollWidth, "px");
    } }, inputs: { scrollbarV: "scrollbarV", scrollbarH: "scrollbarH", scrollHeight: "scrollHeight", scrollWidth: "scrollWidth" }, outputs: { scroll: "scroll" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function ScrollerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
ScrollerComponent.ctorParameters = () => [
    { type: NgZone },
    { type: ElementRef },
    { type: Renderer2 }
];
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ScrollerComponent, [{
        type: Component,
        args: [{
                selector: 'datatable-scroller',
                template: ` <ng-content></ng-content> `,
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
export { ScrollerComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsZXIuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovQHN3aW1sYW5lL25neC1kYXRhdGFibGUvbGliL2NvbXBvbmVudHMvYm9keS9zY3JvbGxlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFVBQVUsRUFDVixNQUFNLEVBQ04sWUFBWSxFQUNaLFNBQVMsRUFDVCxNQUFNLEVBQ04sTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsdUJBQXVCLEVBQ3hCLE1BQU0sZUFBZSxDQUFDOzs7O0FBWXZCLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0FBQUcsSUF3Qi9CLFlBQW9CLE1BQWMsRUFBRSxPQUFtQixFQUFVLFFBQW1CO0FBQ3RGLFFBRHNCLFdBQU0sR0FBTixNQUFNLENBQVE7QUFBQyxRQUE4QixhQUFRLEdBQVIsUUFBUSxDQUFXO0FBQUMsUUF2QjVFLGVBQVUsR0FBWSxLQUFLLENBQUM7QUFDdkMsUUFBVyxlQUFVLEdBQVksS0FBSyxDQUFDO0FBQ3ZDLFFBU1ksV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQzNELFFBQ0UsZUFBVSxHQUFXLENBQUMsQ0FBQztBQUN6QixRQUFFLGVBQVUsR0FBVyxDQUFDLENBQUM7QUFDekIsUUFBRSxtQkFBYyxHQUFXLENBQUMsQ0FBQztBQUM3QixRQUFFLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO0FBQzdCLFFBSVUseUJBQW9CLEdBQVEsSUFBSSxDQUFDO0FBQzNDLFFBRUksSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO0FBQ3pDLElBQUUsQ0FBQztBQUNILElBQ0UsUUFBUTtBQUFLLFFBQ1gsd0NBQXdDO0FBQzVDLFFBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7QUFDNUMsWUFBTSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFB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O1dBQW9CLFVBQzlCO0lBQVEsRUFBRTtrQkFBNkIsVUFDdkMsSUFBSSxFQUFFO0FBQ0osS0FBSyxFQUFFLGtCQUFrQixVQUMxQixVQUNEO0dBQWUsRUFBRTtJQUF1QixDQUFDLE1BQU0sTUFDaEQsQ0FBQyxJQUNXLGlCQUFpQixDQTZFN0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUNEO0FBQUMsU0E5RVksaUJBQWlCO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBFbGVtZW50UmVmLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgUmVuZGVyZXIyLFxuICBOZ1pvbmUsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBIb3N0QmluZGluZyxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1vdXNlRXZlbnQgfSBmcm9tICcuLi8uLi9ldmVudHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRhdGFibGUtc2Nyb2xsZXInLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2RhdGF0YWJsZS1zY3JvbGwnXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFNjcm9sbGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBzY3JvbGxiYXJWOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNjcm9sbGJhckg6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodC5weCcpXG4gIEBJbnB1dCgpXG4gIHNjcm9sbEhlaWdodDogbnVtYmVyO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgucHgnKVxuICBASW5wdXQoKVxuICBzY3JvbGxXaWR0aDogbnVtYmVyO1xuXG4gIEBPdXRwdXQoKSBzY3JvbGw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHNjcm9sbFlQb3M6IG51bWJlciA9IDA7XG4gIHNjcm9sbFhQb3M6IG51bWJlciA9IDA7XG4gIHByZXZTY3JvbGxZUG9zOiBudW1iZXIgPSAwO1xuICBwcmV2U2Nyb2xsWFBvczogbnVtYmVyID0gMDtcbiAgZWxlbWVudDogYW55O1xuICBwYXJlbnRFbGVtZW50OiBhbnk7XG4gIG9uU2Nyb2xsTGlzdGVuZXI6IGFueTtcblxuICBwcml2YXRlIF9zY3JvbGxFdmVudExpc3RlbmVyOiBhbnkgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIG1hbnVhbCBiaW5kIHNvIHdlIGRvbid0IGFsd2F5cyBsaXN0ZW5cbiAgICBpZiAodGhpcy5zY3JvbGxiYXJWIHx8IHRoaXMuc2Nyb2xsYmFySCkge1xuICAgICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyO1xuICAgICAgdGhpcy5wYXJlbnRFbGVtZW50ID0gcmVuZGVyZXIucGFyZW50Tm9kZShyZW5kZXJlci5wYXJlbnROb2RlKHRoaXMuZWxlbWVudCkpO1xuICAgICAgdGhpcy5fc2Nyb2xsRXZlbnRMaXN0ZW5lciA9IHRoaXMub25TY3JvbGxlZC5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbEV2ZW50TGlzdGVuZXIpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9zY3JvbGxFdmVudExpc3RlbmVyKSB7XG4gICAgICB0aGlzLnBhcmVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsRXZlbnRMaXN0ZW5lcik7XG4gICAgICB0aGlzLl9zY3JvbGxFdmVudExpc3RlbmVyID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBzZXRPZmZzZXQob2Zmc2V0WTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGFyZW50RWxlbWVudCkge1xuICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LnNjcm9sbFRvcCA9IG9mZnNldFk7XG4gICAgfVxuICB9XG5cbiAgb25TY3JvbGxlZChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGRvbTogRWxlbWVudCA9IDxFbGVtZW50PmV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuc2Nyb2xsWVBvcyA9IGRvbS5zY3JvbGxUb3A7XG4gICAgICB0aGlzLnNjcm9sbFhQb3MgPSBkb20uc2Nyb2xsTGVmdDtcbiAgICAgIHRoaXMudXBkYXRlT2Zmc2V0KCk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVPZmZzZXQoKTogdm9pZCB7XG4gICAgbGV0IGRpcmVjdGlvbjogc3RyaW5nO1xuICAgIGlmICh0aGlzLnNjcm9sbFlQb3MgPCB0aGlzLnByZXZTY3JvbGxZUG9zKSB7XG4gICAgICBkaXJlY3Rpb24gPSAnZG93bic7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNjcm9sbFlQb3MgPiB0aGlzLnByZXZTY3JvbGxZUG9zKSB7XG4gICAgICBkaXJlY3Rpb24gPSAndXAnO1xuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsLmVtaXQoe1xuICAgICAgZGlyZWN0aW9uLFxuICAgICAgc2Nyb2xsWVBvczogdGhpcy5zY3JvbGxZUG9zLFxuICAgICAgc2Nyb2xsWFBvczogdGhpcy5zY3JvbGxYUG9zXG4gICAgfSk7XG5cbiAgICB0aGlzLnByZXZTY3JvbGxZUG9zID0gdGhpcy5zY3JvbGxZUG9zO1xuICAgIHRoaXMucHJldlNjcm9sbFhQb3MgPSB0aGlzLnNjcm9sbFhQb3M7XG4gIH1cbn1cbiJdfQ==