import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { SnotifyService } from '../../services/snotify.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = function (a0) { return { "snotifyToast__buttons--bold": a0 }; };
function ButtonsComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 2);
    ɵngcc0.ɵɵlistener("click", function ButtonsComponent_button_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r3); const button_r1 = ctx.$implicit; const ctx_r2 = ɵngcc0.ɵɵnextContext(); return button_r1.action ? button_r1.action(ctx_r2.toast) : ctx_r2.remove(); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r1 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c0, button_r1.bold));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", button_r1.text, " ");
} }
let ButtonsComponent = 
/**
 * Buttons component
 */
class ButtonsComponent {
    constructor(service) {
        this.service = service;
    }
    /**
     * remove toast
     */
    remove() {
        this.service.remove(this.toast.id);
    }
};
ButtonsComponent.ɵfac = function ButtonsComponent_Factory(t) { return new (t || ButtonsComponent)(ɵngcc0.ɵɵdirectiveInject(SnotifyService)); };
ButtonsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ButtonsComponent, selectors: [["ng-snotify-button"]], inputs: { toast: "toast" }, decls: 2, vars: 1, consts: [[1, "snotifyToast__buttons"], ["type", "button", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "button", 3, "ngClass", "click"]], template: function ButtonsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, ButtonsComponent_button_1_Template, 2, 4, "button", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.toast.config.buttons);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgClass], encapsulation: 2, changeDetection: 0 });
ButtonsComponent.ctorParameters = () => [
    { type: SnotifyService }
];
__decorate([
    Input()
], ButtonsComponent.prototype, "toast", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ButtonsComponent, [{
        type: Component,
        args: [{
                selector: 'ng-snotify-button',
                template: "<div class=\"snotifyToast__buttons\">\r\n  <button\r\n    type=\"button\"\r\n    *ngFor=\"let button of toast.config.buttons\"\r\n    [ngClass]=\"{ 'snotifyToast__buttons--bold': button.bold }\"\r\n    (click)=\"button.action ? button.action(toast) : remove()\"\r\n  >\r\n    {{ button.text }}\r\n  </button>\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: SnotifyService }]; }, { toast: [{
            type: Input
        }] }); })();
export { ButtonsComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIm5nOi9uZy1zbm90aWZ5L2xpYi9jb21wb25lbnRzL2J1dHRvbnMvYnV0dG9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhaEUsSUFBYSxnQkFBZ0I7QUFIN0I7QUFDQTtBQUNBLEdBQUc7QUFDSCxNQUFhLGdCQUFnQjtBQUM3QixJQUlFLFlBQW9CLE9BQXVCO0FBQUksUUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7QUFBQyxJQUFFLENBQUM7QUFDakQsSUFDRTtBQUNGO0FBQ0UsT0FBRztBQUNMLElBQUUsTUFBTTtBQUNSLFFBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN2QyxJQUFFLENBQUM7QUFDSCxDQUFDOzs7Ozs7Ozs7K0ZBQUE7QUFDRDtBQUEwQyxZQVRYLGNBQWM7QUFBRztBQURyQztBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLCtDQUFvQjtBQUpsQixnQkFBZ0Isb0JBVjVCLFNBQVMsQ0FBQyxVQUNULFFBQVEsRUFBRTtVQUFtQixVQUM3Qjs7O3lRQUF1QyxVQUN2QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxVQUMvQyxhQUFhLEVBQUU7WUFBaUIsQ0FBQyxJQUFJLE1BQ3RDLENBQUMsS0FFRjtBQUVHLElBQ1UsZ0JBQWdCLENBYTVCOzs7O29CQUNEOztBQTVCQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQWFBLEFBQUEsQUFBQSxBQUhBLEFBRUEsQUFDQSxBQUFBLEFBQUEsQUFLQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBRUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBUkEsQUFBQSxBQURBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFKQSxBQUFBLEFBVkEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUVBLEFBRUEsQUFDQSxBQUFBLEFBYUEsQUFiQSxBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNub3RpZnlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc25vdGlmeS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU25vdGlmeVRvYXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Nub3RpZnktdG9hc3QubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZy1zbm90aWZ5LWJ1dHRvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbnMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuXHJcbi8qKlxyXG4gKiBCdXR0b25zIGNvbXBvbmVudFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJ1dHRvbnNDb21wb25lbnQge1xyXG4gIC8qKlxyXG4gICAqIEdldCBidXR0b25zIEFycmF5XHJcbiAgICovXHJcbiAgQElucHV0KCkgdG9hc3Q6IFNub3RpZnlUb2FzdDtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IFNub3RpZnlTZXJ2aWNlKSB7fVxyXG5cclxuICAvKipcclxuICAgKiByZW1vdmUgdG9hc3RcclxuICAgKi9cclxuICByZW1vdmUoKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UucmVtb3ZlKHRoaXMudG9hc3QuaWQpO1xyXG4gIH1cclxufVxyXG4iXX0=