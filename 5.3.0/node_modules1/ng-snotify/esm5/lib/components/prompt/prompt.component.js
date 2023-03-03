import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../../pipes/truncate.pipe';

var _c0 = function (a0) { return { "snotifyToast__input--filled": a0 }; };
var PromptComponent = /** @class */ (function () {
    /**
     * Prompt component. Part of PROMPT type
     */
    function PromptComponent() {
        /**
         * Is PROMPT focused
         */
        this.isPromptFocused = false;
    }
    __decorate([
        Input()
    ], PromptComponent.prototype, "toast", void 0);
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
    return PromptComponent;
}());
export { PromptComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbXB0LmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L25nLXNub3RpZnkvbGliL2NvbXBvbmVudHMvcHJvbXB0L3Byb21wdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFhN0Y7QUFFYyxJQUxkO0FBQ0E7QUFFQSxPQURHO0FBQ0gsSUFBQTtBQUE2QixRQUszQjtBQUNGO0FBRUEsV0FESztBQUNMLFFBQUUsb0JBQWUsR0FBRyxLQUFLLENBQUM7QUFDMUIsSUFBQSxDQUFDO0FBQ0QsSUFOVztBQUFhLFFBQXJCLEtBQUssRUFBRTtBQUFDLGtEQUFvQjtJQUpsQixlQUFlLHdCQVYzQixTQUFTLENBQUMsY0FDVCxRQUFRLEVBQUUsbUJBQW1CO1NBQzdCOzs7aUZBQXNDLGNBQ3RDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLGNBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLFVBQ3RDLENBQUMsU0FFRixnRUFFRyxRQUNVLGVBQWUsQ0FTM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQ0Q7QUFBQyxJQURELHNCQUFDO0FBQ0EsQ0FEQSxBQVRELElBU0M7O0FBdEJBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFhQSxBQUhBLEFBRUEsQUFDQSxBQUtBLEFBRUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUxBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFKQSxBQUFBLEFBVkEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUVBLEFBRUEsQUFDQSxBQUFBLEFBU0EsQUFBQSxBQUFBLEFBQUEsQUFUQSxBQVNBLEFBVEEsQUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTbm90aWZ5VG9hc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvc25vdGlmeS10b2FzdC5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25nLXNub3RpZnktcHJvbXB0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcHJvbXB0LmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcblxyXG4vKipcclxuICogUHJvbXB0IGNvbXBvbmVudC4gUGFydCBvZiBQUk9NUFQgdHlwZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFByb21wdENvbXBvbmVudCB7XHJcbiAgLyoqXHJcbiAgICogR2V0IFBST01QVCBwbGFjZWhvbGRlclxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHRvYXN0OiBTbm90aWZ5VG9hc3Q7XHJcbiAgLyoqXHJcbiAgICogSXMgUFJPTVBUIGZvY3VzZWRcclxuICAgKi9cclxuICBpc1Byb21wdEZvY3VzZWQgPSBmYWxzZTtcclxufVxyXG4iXX0=