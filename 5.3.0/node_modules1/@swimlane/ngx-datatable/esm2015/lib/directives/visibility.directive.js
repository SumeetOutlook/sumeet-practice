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
let VisibilityDirective = class VisibilityDirective {
    constructor(element, zone) {
        this.element = element;
        this.zone = zone;
        this.isVisible = false;
        this.visible = new EventEmitter();
    }
    ngOnInit() {
        this.runCheck();
    }
    ngOnDestroy() {
        clearTimeout(this.timeout);
    }
    onVisibilityChange() {
        // trigger zone recalc for columns
        this.zone.run(() => {
            this.isVisible = true;
            this.visible.emit(true);
        });
    }
    runCheck() {
        const check = () => {
            // https://davidwalsh.name/offsetheight-visibility
            const { offsetHeight, offsetWidth } = this.element.nativeElement;
            if (offsetHeight && offsetWidth) {
                clearTimeout(this.timeout);
                this.onVisibilityChange();
            }
            else {
                clearTimeout(this.timeout);
                this.zone.runOutsideAngular(() => {
                    this.timeout = setTimeout(() => check(), 50);
                });
            }
        };
        this.timeout = setTimeout(() => check());
    }
};
VisibilityDirective.ɵfac = function VisibilityDirective_Factory(t) { return new (t || VisibilityDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
VisibilityDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: VisibilityDirective, selectors: [["", "visibilityObserver", ""]], hostVars: 2, hostBindings: function VisibilityDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("visible", ctx.isVisible);
    } }, outputs: { visible: "visible" } });
VisibilityDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone }
];
__decorate([
    HostBinding('class.visible')
], VisibilityDirective.prototype, "isVisible", void 0);
__decorate([
    Output()
], VisibilityDirective.prototype, "visible", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(VisibilityDirective, [{
        type: Directive,
        args: [{ selector: '[visibilityObserver]' }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { isVisible: [{
            type: HostBinding,
            args: ['class.visible']
        }], visible: [{
            type: Output
        }] }); })();
export { VisibilityDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaWJpbGl0eS5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIm5nOi9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9saWIvZGlyZWN0aXZlcy92aXNpYmlsaXR5LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0FBQUcsSUFRakMsWUFBb0IsT0FBbUIsRUFBVSxJQUFZO0FBQUksUUFBN0MsWUFBTyxHQUFQLE9BQU8sQ0FBWTtBQUFDLFFBQVMsU0FBSSxHQUFKLElBQUksQ0FBUTtBQUFDLFFBTjlELGNBQVMsR0FBWSxLQUFLLENBQUM7QUFDN0IsUUFDWSxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDNUQsSUFHa0UsQ0FBQztBQUNuRSxJQUNFLFFBQVE7QUFBSyxRQUNYLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNwQixJQUFFLENBQUM7QUFDSCxJQUNFLFdBQVc7QUFBSyxRQUNkLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0IsSUFBRSxDQUFDO0FBQ0gsSUFDRSxrQkFBa0I7QUFBSyxRQUNyQixrQ0FBa0M7QUFDdEMsUUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7QUFDdkIsWUFBTSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztBQUM1QixZQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzlCLFFBQUksQ0FBQyxDQUFDLENBQUM7QUFDUCxJQUFFLENBQUM7QUFDSCxJQUNFLFFBQVE7QUFBSyxRQUNYLE1BQU0sS0FBSyxHQUFHLEdBQUcsRUFBRTtBQUN2QixZQUFNLGtEQUFrRDtBQUN4RCxZQUFNLE1BQU0sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7QUFDdkUsWUFDTSxJQUFJLFlBQVksSUFBSSxXQUFXLEVBQUU7QUFDdkMsZ0JBQVEsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNuQyxnQkFBUSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztBQUNsQyxhQUFPO0FBQUMsaUJBQUs7QUFDYixnQkFBUSxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ25DLGdCQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO0FBQ3pDLG9CQUFVLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZELGdCQUFRLENBQUMsQ0FBQyxDQUFDO0FBQ1gsYUFBTztBQUNQLFFBQUksQ0FBQyxDQUFDO0FBQ04sUUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQzdDLElBQUUsQ0FBQztBQUNILENBQUM7Ozs7NENBQUE7QUFDRDtBQUE2QyxZQXJDZCxVQUFVO0FBQUksWUFBWSxNQUFNO0FBQUc7QUFOaEU7QUFBYSxJQURaLFdBQVcsQ0FBQyxlQUFlLENBQUM7QUFDL0Isc0RBQTZCO0FBRWpCO0FBQWEsSUFBdEIsTUFBTSxFQUFFO0FBQUMsb0RBQWdEO0FBSi9DLG1CQUFtQixvQkFEL0IsU0FBUyxDQUFDLEVBQUUsUUFBUSxFQUFFO0tBQXNCLEVBQUUsQ0FBQyxJQUNuQztNQUFtQixDQTRDL0I7Ozs7OztvQkFDRDtBQUFDLFNBN0NZLG1CQUFtQjtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIE5nWm9uZSwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBWaXNpYmlsaXR5IE9ic2VydmVyIERpcmVjdGl2ZVxuICpcbiAqIFVzYWdlOlxuICpcbiAqIFx0XHQ8ZGl2XG4gKiBcdFx0XHR2aXNpYmlsaXR5T2JzZXJ2ZXJcbiAqIFx0XHRcdCh2aXNpYmxlKT1cIm9uVmlzaWJsZSgkZXZlbnQpXCI+XG4gKiBcdFx0PC9kaXY+XG4gKlxuICovXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbdmlzaWJpbGl0eU9ic2VydmVyXScgfSlcbmV4cG9ydCBjbGFzcyBWaXNpYmlsaXR5RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnZpc2libGUnKVxuICBpc1Zpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgdmlzaWJsZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgdGltZW91dDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5ydW5DaGVjaygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gIH1cblxuICBvblZpc2liaWxpdHlDaGFuZ2UoKTogdm9pZCB7XG4gICAgLy8gdHJpZ2dlciB6b25lIHJlY2FsYyBmb3IgY29sdW1uc1xuICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy5pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgdGhpcy52aXNpYmxlLmVtaXQodHJ1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBydW5DaGVjaygpOiB2b2lkIHtcbiAgICBjb25zdCBjaGVjayA9ICgpID0+IHtcbiAgICAgIC8vIGh0dHBzOi8vZGF2aWR3YWxzaC5uYW1lL29mZnNldGhlaWdodC12aXNpYmlsaXR5XG4gICAgICBjb25zdCB7IG9mZnNldEhlaWdodCwgb2Zmc2V0V2lkdGggfSA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuXG4gICAgICBpZiAob2Zmc2V0SGVpZ2h0ICYmIG9mZnNldFdpZHRoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgICAgICB0aGlzLm9uVmlzaWJpbGl0eUNoYW5nZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiBjaGVjaygpLCA1MCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IGNoZWNrKCkpO1xuICB9XG59XG4iXX0=