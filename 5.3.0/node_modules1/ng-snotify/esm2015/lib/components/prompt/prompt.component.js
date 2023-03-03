import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../../pipes/truncate.pipe';

const _c0 = function (a0) { return { "snotifyToast__input--filled": a0 }; };
let PromptComponent = 
/**
 * Prompt component. Part of PROMPT type
 */
class PromptComponent {
    constructor() {
        /**
         * Is PROMPT focused
         */
        this.isPromptFocused = false;
    }
};
PromptComponent.ɵfac = function PromptComponent_Factory(t) { return new (t || PromptComponent)(); };
PromptComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PromptComponent, selectors: [["ng-snotify-prompt"]], inputs: { toast: "toast" }, decls: 6, vars: 8, consts: [[1, "snotifyToast__input", 3, "ngClass"], ["autofocus", "", "type", "text", 1, "snotifyToast__input__field", 3, "id", "input", "focus", "blur"], [1, "snotifyToast__input__label", 3, "for"], [1, "snotifyToast__input__labelContent"]], template: function PromptComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "span", 0);
        ɵngcc0.ɵɵelementStart(1, "input", 1);
        ɵngcc0.ɵɵlistener("input", function PromptComponent_Template_input_input_1_listener($event) { ctx.toast.value = $event.target.value; return ctx.toast.eventEmitter.next("input"); })("focus", function PromptComponent_Template_input_focus_1_listener() { return ctx.isPromptFocused = true; })("blur", function PromptComponent_Template_input_blur_1_listener() { return ctx.isPromptFocused = !!ctx.toast.value.length; });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "label", 2);
        ɵngcc0.ɵɵelementStart(3, "span", 3);
        ɵngcc0.ɵɵtext(4);
        ɵngcc0.ɵɵpipe(5, "truncate");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(6, _c0, ctx.isPromptFocused));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("id", ctx.toast.id);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("for", ctx.toast.id);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ɵngcc0.ɵɵpipeBind1(5, 4, ctx.toast.config.placeholder));
    } }, directives: [ɵngcc1.NgClass], pipes: [ɵngcc2.TruncatePipe], encapsulation: 2, changeDetection: 0 });
__decorate([
    Input()
], PromptComponent.prototype, "toast", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PromptComponent, [{
        type: Component,
        args: [{
                selector: 'ng-snotify-prompt',
                template: "<span class=\"snotifyToast__input\" [ngClass]=\"{ 'snotifyToast__input--filled': isPromptFocused }\">\r\n  <input\r\n    (input)=\"toast.value = $event.target.value; toast.eventEmitter.next('input')\"\r\n    autofocus\r\n    class=\"snotifyToast__input__field\"\r\n    type=\"text\"\r\n    [id]=\"toast.id\"\r\n    (focus)=\"isPromptFocused = true\"\r\n    (blur)=\"isPromptFocused = !!toast.value.length\"\r\n  />\r\n  <label class=\"snotifyToast__input__label\" [for]=\"toast.id\">\r\n    <span class=\"snotifyToast__input__labelContent\">{{ toast.config.placeholder | truncate }}</span>\r\n  </label>\r\n</span>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, { toast: [{
            type: Input
        }] }); })();
export { PromptComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbXB0LmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L25nLXNub3RpZnkvbGliL2NvbXBvbmVudHMvcHJvbXB0L3Byb21wdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFhN0YsSUFBYSxlQUFlO0FBSDVCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsTUFBYSxlQUFlO0FBQzVCLElBREE7QUFBZ0IsUUFLZDtBQUNGO0FBRUEsV0FESztBQUNMLFFBQUUsb0JBQWUsR0FBRyxLQUFLLENBQUM7QUFDMUIsSUFBQSxDQUFDO0FBQ0QsQ0FEQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2R0FBQTtBQUxVO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUMsOENBQW9CO0FBSmxCLGVBQWUsb0JBVjNCLFNBQVMsQ0FBQyxVQUNULFFBQVEsRUFBRTtVQUFtQixVQUM3Qjs7O2lqQkFBc0MsVUFDdEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sVUFDL0MsYUFBYSxFQUFFO1lBQWlCLENBQUMsSUFBSSxNQUN0QyxDQUFDLEtBRUY7b0JBRUcsSUFDVSxlQUFlLENBUzNCOzs7O29CQUNEOztBQXZCQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBYUEsQUFBQSxBQUFBLEFBSEEsQUFFQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBS0EsQUFFQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUxBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFKQSxBQUFBLEFBVkEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUVBLEFBRUEsQUFDQSxBQUFBLEFBU0EsQUFUQSxBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNub3RpZnlUb2FzdCB9IGZyb20gJy4uLy4uL21vZGVscy9zbm90aWZ5LXRvYXN0Lm1vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmctc25vdGlmeS1wcm9tcHQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9tcHQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuXHJcbi8qKlxyXG4gKiBQcm9tcHQgY29tcG9uZW50LiBQYXJ0IG9mIFBST01QVCB0eXBlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUHJvbXB0Q29tcG9uZW50IHtcclxuICAvKipcclxuICAgKiBHZXQgUFJPTVBUIHBsYWNlaG9sZGVyXHJcbiAgICovXHJcbiAgQElucHV0KCkgdG9hc3Q6IFNub3RpZnlUb2FzdDtcclxuICAvKipcclxuICAgKiBJcyBQUk9NUFQgZm9jdXNlZFxyXG4gICAqL1xyXG4gIGlzUHJvbXB0Rm9jdXNlZCA9IGZhbHNlO1xyXG59XHJcbiJdfQ==