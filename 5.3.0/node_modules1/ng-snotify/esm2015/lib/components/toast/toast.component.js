import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { SnotifyService } from '../../services/snotify.service';
import { SnotifyStyle } from '../../enums/snotify-style.enum';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../prompt/prompt.component';
import * as ɵngcc3 from '../buttons/buttons.component';
import * as ɵngcc4 from '../../pipes/truncate.pipe';

const _c0 = function (a0) { return { width: a0 }; };
function ToastComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵelement(1, "span", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(1, _c0, ctx_r0.state.progress * 100 + "%"));
} }
function ToastComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵpipe(2, "truncate");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵattribute("id", "snotify_" + ctx_r5.toast.id);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind2(2, 2, ctx_r5.toast.title, ctx_r5.toast.config.titleMaxLength), " ");
} }
function ToastComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 13);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵpipe(2, "truncate");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ɵngcc0.ɵɵpipeBind2(2, 1, ctx_r6.toast.body, ctx_r6.toast.config.bodyMaxLength));
} }
function ToastComponent_div_2_ng_snotify_prompt_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "ng-snotify-prompt", 14);
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("toast", ctx_r7.toast);
} }
const _c1 = function (a1) { return ["snotify-icon", a1]; };
function ToastComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 15);
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(1, _c1, ctx_r8.toast.config.iconClass || "snotify-icon--" + ctx_r8.toast.config.type));
} }
function ToastComponent_div_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "img", 16);
} if (rf & 2) {
    const ctx_r10 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("src", ctx_r10.toast.config.icon, ɵngcc0.ɵɵsanitizeUrl);
} }
function ToastComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 7);
    ɵngcc0.ɵɵtemplate(1, ToastComponent_div_2_div_1_Template, 3, 5, "div", 8);
    ɵngcc0.ɵɵtemplate(2, ToastComponent_div_2_div_2_Template, 3, 4, "div", 9);
    ɵngcc0.ɵɵtemplate(3, ToastComponent_div_2_ng_snotify_prompt_3_Template, 1, 1, "ng-snotify-prompt", 4);
    ɵngcc0.ɵɵtemplate(4, ToastComponent_div_2_div_4_Template, 1, 3, "div", 10);
    ɵngcc0.ɵɵtemplate(5, ToastComponent_div_2_ng_template_5_Template, 1, 1, "ng-template", null, 11, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r9 = ɵngcc0.ɵɵreference(6);
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.toast.title);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.toast.body);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.toast.config.type === ctx_r1.state.promptType);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r1.toast.config.icon)("ngIfElse", _r9);
} }
function ToastComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 17);
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r3.toast.config.html, ɵngcc0.ɵɵsanitizeHtml);
} }
function ToastComponent_ng_snotify_button_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "ng-snotify-button", 14);
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("toast", ctx_r4.toast);
} }
const _c2 = function (a1, a2, a3) { return ["snotifyToast animated", a1, a2, a3]; };
const _c3 = function (a0, a1, a2, a3) { return { "-webkit-transition": a0, transition: a1, "-webkit-animation-duration": a2, "animation-duration": a3 }; };
let ToastComponent = class ToastComponent {
    constructor(service) {
        this.service = service;
        this.stateChanged = new EventEmitter();
        /**
         * Toast state
         */
        this.state = {
            paused: false,
            progress: 0,
            animation: '',
            isDestroying: false,
            promptType: SnotifyStyle.prompt
        };
    }
    // Lifecycles
    /**
     * Init base options. Subscribe to toast changed, toast deleted
     */
    ngOnInit() {
        this.toastChangedSubscription = this.service.toastChanged.subscribe((toast) => {
            if (this.toast.id === toast.id) {
                this.initToast();
            }
        });
        this.toastDeletedSubscription = this.service.toastDeleted.subscribe(id => {
            if (this.toast.id === id) {
                this.onRemove();
            }
        });
        if (!this.toast.config.timeout) {
            this.toast.config.showProgressBar = false;
        }
        this.toast.eventEmitter.next('mounted');
        this.state.animation = 'snotifyToast--in';
    }
    ngAfterContentInit() {
        setTimeout(() => {
            this.stateChanged.emit('beforeShow');
            this.toast.eventEmitter.next('beforeShow');
            this.state.animation = this.toast.config.animation.enter;
        }, this.service.config.toast.animation.time / 5); // time to show toast push animation (snotifyToast--in)
    }
    /**
     * Unsubscribe subscriptions
     */
    ngOnDestroy() {
        cancelAnimationFrame(this.animationFrame);
        this.toast.eventEmitter.next('destroyed');
        this.toastChangedSubscription.unsubscribe();
        this.toastDeletedSubscription.unsubscribe();
    }
    /*
    Event hooks
     */
    /**
     * Trigger OnClick lifecycle
     */
    onClick() {
        this.toast.eventEmitter.next('click');
        if (this.toast.config.closeOnClick) {
            this.service.remove(this.toast.id);
        }
    }
    /**
     * Trigger beforeDestroy lifecycle. Removes toast
     */
    onRemove() {
        this.state.isDestroying = true;
        this.toast.eventEmitter.next('beforeHide');
        this.stateChanged.emit('beforeHide');
        this.state.animation = this.toast.config.animation.exit;
        setTimeout(() => {
            this.stateChanged.emit('hidden');
            this.state.animation = 'snotifyToast--out';
            this.toast.eventEmitter.next('hidden');
            setTimeout(() => this.service.remove(this.toast.id, true), this.toast.config.animation.time / 2);
        }, this.toast.config.animation.time / 2);
    }
    /**
     * Trigger onHoverEnter lifecycle
     */
    onMouseEnter() {
        this.toast.eventEmitter.next('mouseenter');
        if (this.toast.config.pauseOnHover) {
            this.state.paused = true;
        }
    }
    /**
     * Trigger onHoverLeave lifecycle
     */
    onMouseLeave() {
        if (this.toast.config.pauseOnHover && this.toast.config.timeout) {
            this.state.paused = false;
            this.startTimeout(this.toast.config.timeout * this.state.progress);
        }
        this.toast.eventEmitter.next('mouseleave');
    }
    /**
     * Remove toast completely after animation
     */
    onExitTransitionEnd() {
        if (this.state.isDestroying) {
            return;
        }
        this.initToast();
        this.toast.eventEmitter.next('shown');
    }
    /*
     Common
     */
    /**
     * Initialize base toast config
     *
     */
    initToast() {
        if (this.toast.config.timeout > 0) {
            this.startTimeout(0);
        }
    }
    /**
     * Start progress bar
     * @param startTime number
     */
    startTimeout(startTime = 0) {
        const start = performance.now();
        const calculate = () => {
            this.animationFrame = requestAnimationFrame(timestamp => {
                const runtime = timestamp + startTime - start;
                const progress = Math.min(runtime / this.toast.config.timeout, 1);
                if (this.state.paused) {
                    cancelAnimationFrame(this.animationFrame);
                }
                else if (runtime < this.toast.config.timeout) {
                    this.state.progress = progress;
                    calculate();
                }
                else {
                    this.state.progress = 1;
                    cancelAnimationFrame(this.animationFrame);
                    this.service.remove(this.toast.id);
                }
            });
        };
        calculate();
    }
};
ToastComponent.ɵfac = function ToastComponent_Factory(t) { return new (t || ToastComponent)(ɵngcc0.ɵɵdirectiveInject(SnotifyService)); };
ToastComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ToastComponent, selectors: [["ng-snotify-toast"]], inputs: { toast: "toast" }, outputs: { stateChanged: "stateChanged" }, decls: 6, vars: 18, consts: [[3, "ngClass", "ngStyle", "animationend", "click", "mouseenter", "mouseleave"], ["class", "snotifyToast__progressBar", 4, "ngIf"], ["class", "snotifyToast__inner", 4, "ngIf", "ngIfElse"], ["toastHTML", ""], [3, "toast", 4, "ngIf"], [1, "snotifyToast__progressBar"], [1, "snotifyToast__progressBar__percentage", 3, "ngStyle"], [1, "snotifyToast__inner"], ["class", "snotifyToast__title", 4, "ngIf"], ["class", "snotifyToast__body", 4, "ngIf"], [3, "ngClass", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "snotifyToast__title"], [1, "snotifyToast__body"], [3, "toast"], [3, "ngClass"], [1, "snotify-icon", 3, "src"], [1, "snotifyToast__inner", 3, "innerHTML"]], template: function ToastComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("animationend", function ToastComponent_Template_div_animationend_0_listener() { return ctx.onExitTransitionEnd(); })("click", function ToastComponent_Template_div_click_0_listener() { return ctx.onClick(); })("mouseenter", function ToastComponent_Template_div_mouseenter_0_listener() { return ctx.onMouseEnter(); })("mouseleave", function ToastComponent_Template_div_mouseleave_0_listener() { return ctx.onMouseLeave(); });
        ɵngcc0.ɵɵtemplate(1, ToastComponent_div_1_Template, 2, 3, "div", 1);
        ɵngcc0.ɵɵtemplate(2, ToastComponent_div_2_Template, 7, 5, "div", 2);
        ɵngcc0.ɵɵtemplate(3, ToastComponent_ng_template_3_Template, 1, 1, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(5, ToastComponent_ng_snotify_button_5_Template, 1, 1, "ng-snotify-button", 4);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r2 = ɵngcc0.ɵɵreference(4);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(9, _c2, "snotify-" + ctx.toast.config.type, ctx.state.animation, ctx.toast.valid === undefined ? "" : ctx.toast.valid ? "snotifyToast--valid" : "snotifyToast--invalid"))("ngStyle", ɵngcc0.ɵɵpureFunction4(13, _c3, ctx.toast.config.animation.time + "ms", ctx.toast.config.animation.time + "ms", ctx.toast.config.animation.time + "ms", ctx.toast.config.animation.time + "ms"));
        ɵngcc0.ɵɵattribute("role", ctx.toast.config.type === ctx.state.promptType ? "dialog" : "alert")("aria-labelledby", "snotify_" + ctx.toast.id)("aria-modal", ctx.toast.config.type === ctx.state.promptType);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.toast.config.showProgressBar);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.toast.config.html)("ngIfElse", _r2);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.toast.config.buttons);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf, ɵngcc2.PromptComponent, ɵngcc3.ButtonsComponent], pipes: [ɵngcc4.TruncatePipe], encapsulation: 2 });
ToastComponent.ctorParameters = () => [
    { type: SnotifyService }
];
__decorate([
    Input()
], ToastComponent.prototype, "toast", void 0);
__decorate([
    Output()
], ToastComponent.prototype, "stateChanged", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ToastComponent, [{
        type: Component,
        args: [{
                selector: 'ng-snotify-toast',
                template: "<div\r\n  [attr.role]=\"toast.config.type === state.promptType ? 'dialog' : 'alert'\"\r\n  [attr.aria-labelledby]=\"'snotify_' + toast.id\"\r\n  [attr.aria-modal]=\"toast.config.type === state.promptType\"\r\n  [ngClass]=\"[\r\n    'snotifyToast animated',\r\n    'snotify-' + toast.config.type,\r\n    state.animation,\r\n    toast.valid === undefined ? '' : toast.valid ? 'snotifyToast--valid' : 'snotifyToast--invalid'\r\n  ]\"\r\n  [ngStyle]=\"{\r\n    '-webkit-transition': toast.config.animation.time + 'ms',\r\n    transition: toast.config.animation.time + 'ms',\r\n    '-webkit-animation-duration': toast.config.animation.time + 'ms',\r\n    'animation-duration': toast.config.animation.time + 'ms'\r\n  }\"\r\n  (animationend)=\"onExitTransitionEnd()\"\r\n  (click)=\"onClick()\"\r\n  (mouseenter)=\"onMouseEnter()\"\r\n  (mouseleave)=\"onMouseLeave()\"\r\n>\r\n  <div class=\"snotifyToast__progressBar\" *ngIf=\"toast.config.showProgressBar\">\r\n    <span class=\"snotifyToast__progressBar__percentage\" [ngStyle]=\"{ width: state.progress * 100 + '%' }\"></span>\r\n  </div>\r\n  <div class=\"snotifyToast__inner\" *ngIf=\"!toast.config.html; else toastHTML\">\r\n    <div class=\"snotifyToast__title\" [attr.id]=\"'snotify_' + toast.id\" *ngIf=\"toast.title\">\r\n      {{ toast.title | truncate: toast.config.titleMaxLength }}\r\n    </div>\r\n    <div class=\"snotifyToast__body\" *ngIf=\"toast.body\">{{ toast.body | truncate: toast.config.bodyMaxLength }}</div>\r\n    <ng-snotify-prompt *ngIf=\"toast.config.type === state.promptType\" [toast]=\"toast\"> </ng-snotify-prompt>\r\n    <div\r\n      *ngIf=\"!toast.config.icon; else elseBlock\"\r\n      [ngClass]=\"['snotify-icon', toast.config.iconClass || 'snotify-icon--' + toast.config.type]\"\r\n    ></div>\r\n    <ng-template #elseBlock>\r\n      <img class=\"snotify-icon\" [src]=\"toast.config.icon\" />\r\n    </ng-template>\r\n  </div>\r\n  <ng-template #toastHTML>\r\n    <div class=\"snotifyToast__inner\" [innerHTML]=\"toast.config.html\"></div>\r\n  </ng-template>\r\n  <ng-snotify-button *ngIf=\"toast.config.buttons\" [toast]=\"toast\"></ng-snotify-button>\r\n</div>\r\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: SnotifyService }]; }, { stateChanged: [{
            type: Output
        }], toast: [{
            type: Input
        }] }); })();
export { ToastComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovbmctc25vdGlmeS9saWIvY29tcG9uZW50cy90b2FzdC90b2FzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUloRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPOUQsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztBQUFHLElBMEI1QixZQUFvQixPQUF1QjtBQUFJLFFBQTNCLFlBQU8sR0FBUCxPQUFPLENBQWdCO0FBQUMsUUFyQmxDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQWdCLENBQUM7QUFDNUQsUUFTRTtBQUNGO0FBRUEsV0FESztBQUNMLFFBQUUsVUFBSyxHQUFHO0FBQ1YsWUFBSSxNQUFNLEVBQUUsS0FBSztBQUNqQixZQUFJLFFBQVEsRUFBRSxDQUFDO0FBQ2YsWUFBSSxTQUFTLEVBQUUsRUFBRTtBQUNqQixZQUFJLFlBQVksRUFBRSxLQUFLO0FBQ3ZCLFlBQUksVUFBVSxFQUFFLFlBQVksQ0FBQyxNQUFNO0FBQ25DLFNBQUcsQ0FBQztBQUNKLElBQ2dELENBQUM7QUFDakQsSUFDRSxhQUFhO0FBQ2YsSUFDRTtBQUNGO0FBQ0UsT0FBRztBQUNMLElBQUUsUUFBUTtBQUNWLFFBQUksSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQW1CLEVBQUUsRUFBRTtBQUNoRyxZQUFN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LEVBQUU7U0FBa0IsVUFDNUI7OztnakVBQXFDLFVBQ3JDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLE1BQ3RDLENBQUMsSUFDVyxjQUFjLENBeUsxQjs7Ozs7OztvQkFDRDs7QUEvTEEsQUFBQSxBQUVBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQU9BLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQTBCQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBckJBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBVUEsQUFFQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUVBLEFBQUEsQUFFQSxBQUFBLEFBRUEsQUFFQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFFQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBRUEsQUFFQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBRUEsQUFFQSxBQUVBLEFBRUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBRUEsQUFFQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUVBLEFBRUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFFQSxBQUVBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFFQSxBQUVBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBRUEsQUFFQSxBQUVBLEFBR0EsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUVBLEFBR0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBL0lBLEFBQUEsQUF0QkEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFMQSxBQUFBLEFBTEEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUF5S0EsQUF6S0EsQUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNub3RpZnlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc25vdGlmeS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU25vdGlmeVRvYXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Nub3RpZnktdG9hc3QubW9kZWwnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgU25vdGlmeUV2ZW50IH0gZnJvbSAnLi4vLi4vdHlwZXMvZXZlbnQudHlwZSc7XHJcbmltcG9ydCB7IFNub3RpZnlTdHlsZSB9IGZyb20gJy4uLy4uL2VudW1zL3Nub3RpZnktc3R5bGUuZW51bSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25nLXNub3RpZnktdG9hc3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90b2FzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9hc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgLyoqXHJcbiAgICogR2V0IHRvYXN0IGZyb20gbm90aWZpY2F0aW9ucyBhcnJheVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHRvYXN0OiBTbm90aWZ5VG9hc3Q7XHJcbiAgQE91dHB1dCgpIHN0YXRlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8U25vdGlmeUV2ZW50PigpO1xyXG5cclxuICB0b2FzdERlbGV0ZWRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICB0b2FzdENoYW5nZWRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgLyoqXHJcbiAgICogcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGlkXHJcbiAgICovXHJcbiAgYW5pbWF0aW9uRnJhbWU6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogVG9hc3Qgc3RhdGVcclxuICAgKi9cclxuICBzdGF0ZSA9IHtcclxuICAgIHBhdXNlZDogZmFsc2UsXHJcbiAgICBwcm9ncmVzczogMCxcclxuICAgIGFuaW1hdGlvbjogJycsXHJcbiAgICBpc0Rlc3Ryb3lpbmc6IGZhbHNlLFxyXG4gICAgcHJvbXB0VHlwZTogU25vdGlmeVN0eWxlLnByb21wdFxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogU25vdGlmeVNlcnZpY2UpIHt9XHJcblxyXG4gIC8vIExpZmVjeWNsZXNcclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdCBiYXNlIG9wdGlvbnMuIFN1YnNjcmliZSB0byB0b2FzdCBjaGFuZ2VkLCB0b2FzdCBkZWxldGVkXHJcbiAgICovXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnRvYXN0Q2hhbmdlZFN1YnNjcmlwdGlvbiA9IHRoaXMuc2VydmljZS50b2FzdENoYW5nZWQuc3Vic2NyaWJlKCh0b2FzdDogU25vdGlmeVRvYXN0KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnRvYXN0LmlkID09PSB0b2FzdC5pZCkge1xyXG4gICAgICAgIHRoaXMuaW5pdFRvYXN0KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy50b2FzdERlbGV0ZWRTdWJzY3JpcHRpb24gPSB0aGlzLnNlcnZpY2UudG9hc3REZWxldGVkLnN1YnNjcmliZShpZCA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnRvYXN0LmlkID09PSBpZCkge1xyXG4gICAgICAgIHRoaXMub25SZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoIXRoaXMudG9hc3QuY29uZmlnLnRpbWVvdXQpIHtcclxuICAgICAgdGhpcy50b2FzdC5jb25maWcuc2hvd1Byb2dyZXNzQmFyID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRvYXN0LmV2ZW50RW1pdHRlci5uZXh0KCdtb3VudGVkJyk7XHJcbiAgICB0aGlzLnN0YXRlLmFuaW1hdGlvbiA9ICdzbm90aWZ5VG9hc3QtLWluJztcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlZC5lbWl0KCdiZWZvcmVTaG93Jyk7XHJcbiAgICAgIHRoaXMudG9hc3QuZXZlbnRFbWl0dGVyLm5leHQoJ2JlZm9yZVNob3cnKTtcclxuICAgICAgdGhpcy5zdGF0ZS5hbmltYXRpb24gPSB0aGlzLnRvYXN0LmNvbmZpZy5hbmltYXRpb24uZW50ZXI7XHJcbiAgICB9LCB0aGlzLnNlcnZpY2UuY29uZmlnLnRvYXN0LmFuaW1hdGlvbi50aW1lIC8gNSk7IC8vIHRpbWUgdG8gc2hvdyB0b2FzdCBwdXNoIGFuaW1hdGlvbiAoc25vdGlmeVRvYXN0LS1pbilcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVuc3Vic2NyaWJlIHN1YnNjcmlwdGlvbnNcclxuICAgKi9cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uRnJhbWUpO1xyXG4gICAgdGhpcy50b2FzdC5ldmVudEVtaXR0ZXIubmV4dCgnZGVzdHJveWVkJyk7XHJcbiAgICB0aGlzLnRvYXN0Q2hhbmdlZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy50b2FzdERlbGV0ZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgRXZlbnQgaG9va3NcclxuICAgKi9cclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZ2dlciBPbkNsaWNrIGxpZmVjeWNsZVxyXG4gICAqL1xyXG4gIG9uQ2xpY2soKSB7XHJcbiAgICB0aGlzLnRvYXN0LmV2ZW50RW1pdHRlci5uZXh0KCdjbGljaycpO1xyXG4gICAgaWYgKHRoaXMudG9hc3QuY29uZmlnLmNsb3NlT25DbGljaykge1xyXG4gICAgICB0aGlzLnNlcnZpY2UucmVtb3ZlKHRoaXMudG9hc3QuaWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZ2dlciBiZWZvcmVEZXN0cm95IGxpZmVjeWNsZS4gUmVtb3ZlcyB0b2FzdFxyXG4gICAqL1xyXG4gIG9uUmVtb3ZlKCkge1xyXG4gICAgdGhpcy5zdGF0ZS5pc0Rlc3Ryb3lpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy50b2FzdC5ldmVudEVtaXR0ZXIubmV4dCgnYmVmb3JlSGlkZScpO1xyXG4gICAgdGhpcy5zdGF0ZUNoYW5nZWQuZW1pdCgnYmVmb3JlSGlkZScpO1xyXG4gICAgdGhpcy5zdGF0ZS5hbmltYXRpb24gPSB0aGlzLnRvYXN0LmNvbmZpZy5hbmltYXRpb24uZXhpdDtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlZC5lbWl0KCdoaWRkZW4nKTtcclxuICAgICAgdGhpcy5zdGF0ZS5hbmltYXRpb24gPSAnc25vdGlmeVRvYXN0LS1vdXQnO1xyXG4gICAgICB0aGlzLnRvYXN0LmV2ZW50RW1pdHRlci5uZXh0KCdoaWRkZW4nKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNlcnZpY2UucmVtb3ZlKHRoaXMudG9hc3QuaWQsIHRydWUpLCB0aGlzLnRvYXN0LmNvbmZpZy5hbmltYXRpb24udGltZSAvIDIpO1xyXG4gICAgfSwgdGhpcy50b2FzdC5jb25maWcuYW5pbWF0aW9uLnRpbWUgLyAyKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyaWdnZXIgb25Ib3ZlckVudGVyIGxpZmVjeWNsZVxyXG4gICAqL1xyXG4gIG9uTW91c2VFbnRlcigpIHtcclxuICAgIHRoaXMudG9hc3QuZXZlbnRFbWl0dGVyLm5leHQoJ21vdXNlZW50ZXInKTtcclxuICAgIGlmICh0aGlzLnRvYXN0LmNvbmZpZy5wYXVzZU9uSG92ZXIpIHtcclxuICAgICAgdGhpcy5zdGF0ZS5wYXVzZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZ2dlciBvbkhvdmVyTGVhdmUgbGlmZWN5Y2xlXHJcbiAgICovXHJcbiAgb25Nb3VzZUxlYXZlKCkge1xyXG4gICAgaWYgKHRoaXMudG9hc3QuY29uZmlnLnBhdXNlT25Ib3ZlciAmJiB0aGlzLnRvYXN0LmNvbmZpZy50aW1lb3V0KSB7XHJcbiAgICAgIHRoaXMuc3RhdGUucGF1c2VkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc3RhcnRUaW1lb3V0KHRoaXMudG9hc3QuY29uZmlnLnRpbWVvdXQgKiB0aGlzLnN0YXRlLnByb2dyZXNzKTtcclxuICAgIH1cclxuICAgIHRoaXMudG9hc3QuZXZlbnRFbWl0dGVyLm5leHQoJ21vdXNlbGVhdmUnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSB0b2FzdCBjb21wbGV0ZWx5IGFmdGVyIGFuaW1hdGlvblxyXG4gICAqL1xyXG4gIG9uRXhpdFRyYW5zaXRpb25FbmQoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5pc0Rlc3Ryb3lpbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pbml0VG9hc3QoKTtcclxuICAgIHRoaXMudG9hc3QuZXZlbnRFbWl0dGVyLm5leHQoJ3Nob3duJyk7XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICBDb21tb25cclxuICAgKi9cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZSBiYXNlIHRvYXN0IGNvbmZpZ1xyXG4gICAqXHJcbiAgICovXHJcbiAgaW5pdFRvYXN0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudG9hc3QuY29uZmlnLnRpbWVvdXQgPiAwKSB7XHJcbiAgICAgIHRoaXMuc3RhcnRUaW1lb3V0KDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RhcnQgcHJvZ3Jlc3MgYmFyXHJcbiAgICogQHBhcmFtIHN0YXJ0VGltZSBudW1iZXJcclxuICAgKi9cclxuICBzdGFydFRpbWVvdXQoc3RhcnRUaW1lOiBudW1iZXIgPSAwKSB7XHJcbiAgICBjb25zdCBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgY29uc3QgY2FsY3VsYXRlID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpbWVzdGFtcCA9PiB7XHJcbiAgICAgICAgY29uc3QgcnVudGltZSA9IHRpbWVzdGFtcCArIHN0YXJ0VGltZSAtIHN0YXJ0O1xyXG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gTWF0aC5taW4ocnVudGltZSAvIHRoaXMudG9hc3QuY29uZmlnLnRpbWVvdXQsIDEpO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnBhdXNlZCkge1xyXG4gICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChydW50aW1lIDwgdGhpcy50b2FzdC5jb25maWcudGltZW91dCkge1xyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5wcm9ncmVzcyA9IHByb2dyZXNzO1xyXG4gICAgICAgICAgY2FsY3VsYXRlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc3RhdGUucHJvZ3Jlc3MgPSAxO1xyXG4gICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZSk7XHJcbiAgICAgICAgICB0aGlzLnNlcnZpY2UucmVtb3ZlKHRoaXMudG9hc3QuaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY2FsY3VsYXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==