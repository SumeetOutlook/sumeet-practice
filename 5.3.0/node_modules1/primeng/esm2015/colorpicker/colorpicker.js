import { NgModule, Component, ElementRef, Input, Output, EventEmitter, forwardRef, Renderer2, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { DomHandler, ConnectedOverlayScrollHandler } from 'primeng/dom';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["colorSelector"];
const _c1 = ["colorHandle"];
const _c2 = ["hue"];
const _c3 = ["hueHandle"];
const _c4 = ["container"];
const _c5 = ["input"];
const _c6 = function (a0) { return { "p-disabled": a0 }; };
function ColorPicker_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "input", 4, 5);
    ɵngcc0.ɵɵlistener("focus", function ColorPicker_input_2_Template_input_focus_0_listener() { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onInputFocus(); })("click", function ColorPicker_input_2_Template_input_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.onInputClick(); })("keydown", function ColorPicker_input_2_Template_input_keydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.onInputKeydown($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("background-color", ctx_r1.inputBgColor);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(6, _c6, ctx_r1.disabled))("disabled", ctx_r1.disabled);
    ɵngcc0.ɵɵattribute("id", ctx_r1.inputId)("tabindex", ctx_r1.tabindex);
} }
const _c7 = function (a1, a2) { return { "p-colorpicker-panel": true, "p-colorpicker-overlay-panel": a1, "p-disabled": a2 }; };
const _c8 = function (a0, a1) { return { showTransitionParams: a0, hideTransitionParams: a1 }; };
const _c9 = function (a1) { return { value: "visible", params: a1 }; };
function ColorPicker_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 6);
    ɵngcc0.ɵɵlistener("click", function ColorPicker_div_3_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.onPanelClick(); })("@overlayAnimation.start", function ColorPicker_div_3_Template_div_animation_overlayAnimation_start_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.onOverlayAnimationStart($event); });
    ɵngcc0.ɵɵelementStart(1, "div", 7);
    ɵngcc0.ɵɵelementStart(2, "div", 8, 9);
    ɵngcc0.ɵɵlistener("mousedown", function ColorPicker_div_3_Template_div_mousedown_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15.onColorMousedown($event); });
    ɵngcc0.ɵɵelementStart(4, "div", 10);
    ɵngcc0.ɵɵelement(5, "div", 11, 12);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(7, "div", 13, 14);
    ɵngcc0.ɵɵlistener("mousedown", function ColorPicker_div_3_Template_div_mousedown_7_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.onHueMousedown($event); });
    ɵngcc0.ɵɵelement(9, "div", 15, 16);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(3, _c7, !ctx_r2.inline, ctx_r2.disabled))("@overlayAnimation", ɵngcc0.ɵɵpureFunction1(9, _c9, ɵngcc0.ɵɵpureFunction2(6, _c8, ctx_r2.showTransitionOptions, ctx_r2.hideTransitionOptions)))("@.disabled", ctx_r2.inline === true);
} }
const _c10 = function (a1, a2) { return { "p-colorpicker p-component": true, "p-colorpicker-overlay": a1, "p-colorpicker-dragging": a2 }; };
export const COLORPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ColorPicker),
    multi: true
};
export class ColorPicker {
    constructor(el, renderer, cd) {
        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.format = 'hex';
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
        this.hideTransitionOptions = '.1s linear';
        this.onChange = new EventEmitter();
        this.defaultColor = 'ff0000';
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
    }
    set colorSelector(element) {
        this.colorSelectorViewChild = element;
    }
    set colorHandle(element) {
        this.colorHandleViewChild = element;
    }
    set hue(element) {
        this.hueViewChild = element;
    }
    set hueHandle(element) {
        this.hueHandleViewChild = element;
    }
    onHueMousedown(event) {
        if (this.disabled) {
            return;
        }
        this.bindDocumentMousemoveListener();
        this.bindDocumentMouseupListener();
        this.hueDragging = true;
        this.pickHue(event);
    }
    pickHue(event) {
        let top = this.hueViewChild.nativeElement.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
        this.value = this.validateHSB({
            h: Math.floor(360 * (150 - Math.max(0, Math.min(150, (event.pageY - top)))) / 150),
            s: this.value.s,
            b: this.value.b
        });
        this.updateColorSelector();
        this.updateUI();
        this.updateModel();
        this.onChange.emit({ originalEvent: event, value: this.getValueToUpdate() });
    }
    onColorMousedown(event) {
        if (this.disabled) {
            return;
        }
        this.bindDocumentMousemoveListener();
        this.bindDocumentMouseupListener();
        this.colorDragging = true;
        this.pickColor(event);
    }
    pickColor(event) {
        let rect = this.colorSelectorViewChild.nativeElement.getBoundingClientRect();
        let top = rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
        let left = rect.left + document.body.scrollLeft;
        let saturation = Math.floor(100 * (Math.max(0, Math.min(150, (event.pageX - left)))) / 150);
        let brightness = Math.floor(100 * (150 - Math.max(0, Math.min(150, (event.pageY - top)))) / 150);
        this.value = this.validateHSB({
            h: this.value.h,
            s: saturation,
            b: brightness
        });
        this.updateUI();
        this.updateModel();
        this.onChange.emit({ originalEvent: event, value: this.getValueToUpdate() });
    }
    getValueToUpdate() {
        let val;
        switch (this.format) {
            case 'hex':
                val = '#' + this.HSBtoHEX(this.value);
                break;
            case 'rgb':
                val = this.HSBtoRGB(this.value);
                break;
            case 'hsb':
                val = this.value;
                break;
        }
        return val;
    }
    updateModel() {
        this.onModelChange(this.getValueToUpdate());
    }
    writeValue(value) {
        if (value) {
            switch (this.format) {
                case 'hex':
                    this.value = this.HEXtoHSB(value);
                    break;
                case 'rgb':
                    this.value = this.RGBtoHSB(value);
                    break;
                case 'hsb':
                    this.value = value;
                    break;
            }
        }
        else {
            this.value = this.HEXtoHSB(this.defaultColor);
        }
        this.updateColorSelector();
        this.updateUI();
        this.cd.markForCheck();
    }
    updateColorSelector() {
        if (this.colorSelectorViewChild) {
            const hsb = {};
            hsb.s = 100;
            hsb.b = 100;
            hsb.h = this.value.h;
            this.colorSelectorViewChild.nativeElement.style.backgroundColor = '#' + this.HSBtoHEX(hsb);
        }
    }
    updateUI() {
        if (this.colorHandleViewChild && this.hueHandleViewChild.nativeElement) {
            this.colorHandleViewChild.nativeElement.style.left = Math.floor(150 * this.value.s / 100) + 'px';
            this.colorHandleViewChild.nativeElement.style.top = Math.floor(150 * (100 - this.value.b) / 100) + 'px';
            this.hueHandleViewChild.nativeElement.style.top = Math.floor(150 - (150 * this.value.h / 360)) + 'px';
        }
        this.inputBgColor = '#' + this.HSBtoHEX(this.value);
    }
    onInputFocus() {
        this.onModelTouched();
    }
    show() {
        this.overlayVisible = true;
    }
    onOverlayAnimationStart(event) {
        switch (event.toState) {
            case 'visible':
                if (!this.inline) {
                    this.overlay = event.element;
                    this.appendOverlay();
                    if (this.autoZIndex) {
                        this.overlay.style.zIndex = String(this.baseZIndex + (++DomHandler.zindex));
                    }
                    this.alignOverlay();
                    this.bindDocumentClickListener();
                    this.bindDocumentResizeListener();
                    this.bindScrollListener();
                    this.updateColorSelector();
                    this.updateUI();
                }
                break;
            case 'void':
                this.onOverlayHide();
                break;
        }
    }
    appendOverlay() {
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.overlay);
            else
                DomHandler.appendChild(this.overlay, this.appendTo);
        }
    }
    restoreOverlayAppend() {
        if (this.overlay && this.appendTo) {
            this.el.nativeElement.appendChild(this.overlay);
        }
    }
    alignOverlay() {
        if (this.appendTo)
            DomHandler.absolutePosition(this.overlay, this.inputViewChild.nativeElement);
        else
            DomHandler.relativePosition(this.overlay, this.inputViewChild.nativeElement);
    }
    hide() {
        this.overlayVisible = false;
        this.cd.markForCheck();
    }
    onInputClick() {
        this.selfClick = true;
        this.togglePanel();
    }
    togglePanel() {
        if (!this.overlayVisible)
            this.show();
        else
            this.hide();
    }
    onInputKeydown(event) {
        switch (event.which) {
            //space
            case 32:
                this.togglePanel();
                event.preventDefault();
                break;
            //escape and tab
            case 27:
            case 9:
                this.hide();
                break;
        }
    }
    onPanelClick() {
        this.selfClick = true;
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    setDisabledState(val) {
        this.disabled = val;
        this.cd.markForCheck();
    }
    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
            this.documentClickListener = this.renderer.listen(documentTarget, 'click', () => {
                if (!this.selfClick) {
                    this.overlayVisible = false;
                    this.unbindDocumentClickListener();
                }
                this.selfClick = false;
                this.cd.markForCheck();
            });
        }
    }
    unbindDocumentClickListener() {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    }
    bindDocumentMousemoveListener() {
        if (!this.documentMousemoveListener) {
            const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
            this.documentMousemoveListener = this.renderer.listen(documentTarget, 'mousemove', (event) => {
                if (this.colorDragging) {
                    this.pickColor(event);
                }
                if (this.hueDragging) {
                    this.pickHue(event);
                }
            });
        }
    }
    unbindDocumentMousemoveListener() {
        if (this.documentMousemoveListener) {
            this.documentMousemoveListener();
            this.documentMousemoveListener = null;
        }
    }
    bindDocumentMouseupListener() {
        if (!this.documentMouseupListener) {
            const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
            this.documentMouseupListener = this.renderer.listen(documentTarget, 'mouseup', () => {
                this.colorDragging = false;
                this.hueDragging = false;
                this.unbindDocumentMousemoveListener();
                this.unbindDocumentMouseupListener();
            });
        }
    }
    unbindDocumentMouseupListener() {
        if (this.documentMouseupListener) {
            this.documentMouseupListener();
            this.documentMouseupListener = null;
        }
    }
    bindDocumentResizeListener() {
        this.documentResizeListener = this.onWindowResize.bind(this);
        window.addEventListener('resize', this.documentResizeListener);
    }
    unbindDocumentResizeListener() {
        if (this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    }
    onWindowResize() {
        this.hide();
    }
    bindScrollListener() {
        if (!this.scrollHandler) {
            this.scrollHandler = new ConnectedOverlayScrollHandler(this.containerViewChild.nativeElement, () => {
                if (this.overlayVisible) {
                    this.hide();
                }
            });
        }
        this.scrollHandler.bindScrollListener();
    }
    unbindScrollListener() {
        if (this.scrollHandler) {
            this.scrollHandler.unbindScrollListener();
        }
    }
    validateHSB(hsb) {
        return {
            h: Math.min(360, Math.max(0, hsb.h)),
            s: Math.min(100, Math.max(0, hsb.s)),
            b: Math.min(100, Math.max(0, hsb.b))
        };
    }
    validateRGB(rgb) {
        return {
            r: Math.min(255, Math.max(0, rgb.r)),
            g: Math.min(255, Math.max(0, rgb.g)),
            b: Math.min(255, Math.max(0, rgb.b))
        };
    }
    validateHEX(hex) {
        var len = 6 - hex.length;
        if (len > 0) {
            var o = [];
            for (var i = 0; i < len; i++) {
                o.push('0');
            }
            o.push(hex);
            hex = o.join('');
        }
        return hex;
    }
    HEXtoRGB(hex) {
        let hexValue = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
        return { r: hexValue >> 16, g: (hexValue & 0x00FF00) >> 8, b: (hexValue & 0x0000FF) };
    }
    HEXtoHSB(hex) {
        return this.RGBtoHSB(this.HEXtoRGB(hex));
    }
    RGBtoHSB(rgb) {
        var hsb = {
            h: 0,
            s: 0,
            b: 0
        };
        var min = Math.min(rgb.r, rgb.g, rgb.b);
        var max = Math.max(rgb.r, rgb.g, rgb.b);
        var delta = max - min;
        hsb.b = max;
        hsb.s = max != 0 ? 255 * delta / max : 0;
        if (hsb.s != 0) {
            if (rgb.r == max) {
                hsb.h = (rgb.g - rgb.b) / delta;
            }
            else if (rgb.g == max) {
                hsb.h = 2 + (rgb.b - rgb.r) / delta;
            }
            else {
                hsb.h = 4 + (rgb.r - rgb.g) / delta;
            }
        }
        else {
            hsb.h = -1;
        }
        hsb.h *= 60;
        if (hsb.h < 0) {
            hsb.h += 360;
        }
        hsb.s *= 100 / 255;
        hsb.b *= 100 / 255;
        return hsb;
    }
    HSBtoRGB(hsb) {
        var rgb = {
            r: null, g: null, b: null
        };
        let h = hsb.h;
        let s = hsb.s * 255 / 100;
        let v = hsb.b * 255 / 100;
        if (s == 0) {
            rgb = {
                r: v,
                g: v,
                b: v
            };
        }
        else {
            let t1 = v;
            let t2 = (255 - s) * v / 255;
            let t3 = (t1 - t2) * (h % 60) / 60;
            if (h == 360)
                h = 0;
            if (h < 60) {
                rgb.r = t1;
                rgb.b = t2;
                rgb.g = t2 + t3;
            }
            else if (h < 120) {
                rgb.g = t1;
                rgb.b = t2;
                rgb.r = t1 - t3;
            }
            else if (h < 180) {
                rgb.g = t1;
                rgb.r = t2;
                rgb.b = t2 + t3;
            }
            else if (h < 240) {
                rgb.b = t1;
                rgb.r = t2;
                rgb.g = t1 - t3;
            }
            else if (h < 300) {
                rgb.b = t1;
                rgb.g = t2;
                rgb.r = t2 + t3;
            }
            else if (h < 360) {
                rgb.r = t1;
                rgb.g = t2;
                rgb.b = t1 - t3;
            }
            else {
                rgb.r = 0;
                rgb.g = 0;
                rgb.b = 0;
            }
        }
        return { r: Math.round(rgb.r), g: Math.round(rgb.g), b: Math.round(rgb.b) };
    }
    RGBtoHEX(rgb) {
        var hex = [
            rgb.r.toString(16),
            rgb.g.toString(16),
            rgb.b.toString(16)
        ];
        for (var key in hex) {
            if (hex[key].length == 1) {
                hex[key] = '0' + hex[key];
            }
        }
        return hex.join('');
    }
    HSBtoHEX(hsb) {
        return this.RGBtoHEX(this.HSBtoRGB(hsb));
    }
    onOverlayHide() {
        this.unbindScrollListener();
        this.unbindDocumentResizeListener();
        this.unbindDocumentClickListener();
        this.overlay = null;
    }
    ngOnDestroy() {
        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }
        this.restoreOverlayAppend();
        this.onOverlayHide();
    }
}
ColorPicker.ɵfac = function ColorPicker_Factory(t) { return new (t || ColorPicker)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
ColorPicker.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ColorPicker, selectors: [["p-colorPicker"]], viewQuery: function ColorPicker_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
        ɵngcc0.ɵɵviewQuery(_c2, true);
        ɵngcc0.ɵɵviewQuery(_c3, true);
        ɵngcc0.ɵɵviewQuery(_c4, true);
        ɵngcc0.ɵɵviewQuery(_c5, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.colorSelector = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.colorHandle = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.hue = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.hueHandle = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inputViewChild = _t.first);
    } }, inputs: { format: "format", autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", disabled: "disabled", style: "style", styleClass: "styleClass", inline: "inline", appendTo: "appendTo", tabindex: "tabindex", inputId: "inputId" }, outputs: { onChange: "onChange" }, features: [ɵngcc0.ɵɵProvidersFeature([COLORPICKER_VALUE_ACCESSOR])], decls: 4, vars: 9, consts: [[3, "ngStyle", "ngClass"], ["container", ""], ["type", "text", "class", "p-colorpicker-preview p-inputtext", "readonly", "readonly", 3, "ngClass", "disabled", "backgroundColor", "focus", "click", "keydown", 4, "ngIf"], [3, "ngClass", "click", 4, "ngIf"], ["type", "text", "readonly", "readonly", 1, "p-colorpicker-preview", "p-inputtext", 3, "ngClass", "disabled", "focus", "click", "keydown"], ["input", ""], [3, "ngClass", "click"], [1, "p-colorpicker-content"], [1, "p-colorpicker-color-selector", 3, "mousedown"], ["colorSelector", ""], [1, "p-colorpicker-color"], [1, "p-colorpicker-color-handle"], ["colorHandle", ""], [1, "p-colorpicker-hue", 3, "mousedown"], ["hue", ""], [1, "p-colorpicker-hue-handle"], ["hueHandle", ""]], template: function ColorPicker_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵtemplate(2, ColorPicker_input_2_Template, 2, 8, "input", 2);
        ɵngcc0.ɵɵtemplate(3, ColorPicker_div_3_Template, 11, 11, "div", 3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style)("ngClass", ɵngcc0.ɵɵpureFunction2(6, _c10, !ctx.inline, ctx.colorDragging || ctx.hueDragging));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.inline);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.inline || ctx.overlayVisible);
    } }, directives: [ɵngcc1.NgStyle, ɵngcc1.NgClass, ɵngcc1.NgIf], styles: [".p-colorpicker{display:inline-block}.p-colorpicker-dragging{cursor:pointer}.p-colorpicker-overlay{position:relative}.p-colorpicker-panel{height:166px;position:relative;width:193px}.p-colorpicker-overlay-panel{position:absolute}.p-colorpicker-preview{cursor:pointer}.p-colorpicker-panel .p-colorpicker-content{position:relative}.p-colorpicker-panel .p-colorpicker-color-selector{height:150px;left:8px;position:absolute;top:8px;width:150px}.p-colorpicker-panel .p-colorpicker-color{height:150px;width:150px}.p-colorpicker-panel .p-colorpicker-color-handle{border-radius:100%;border-style:solid;border-width:1px;cursor:pointer;height:10px;left:150px;margin:-5px 0 0 -5px;opacity:.85;position:absolute;top:0;width:10px}.p-colorpicker-panel .p-colorpicker-hue{height:150px;left:167px;opacity:.85;position:absolute;top:8px;width:17px}.p-colorpicker-panel .p-colorpicker-hue-handle{border-style:solid;border-width:2px;cursor:pointer;height:10px;left:0;margin-left:-2px;margin-top:-5px;opacity:.85;position:absolute;top:150px;width:21px}"], encapsulation: 2, data: { animation: [
            trigger('overlayAnimation', [
                transition(':enter', [
                    style({ opacity: 0, transform: 'scaleY(0.8)' }),
                    animate('{{showTransitionParams}}')
                ]),
                transition(':leave', [
                    animate('{{hideTransitionParams}}', style({ opacity: 0 }))
                ])
            ])
        ] }, changeDetection: 0 });
ColorPicker.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
ColorPicker.propDecorators = {
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    inline: [{ type: Input }],
    format: [{ type: Input }],
    appendTo: [{ type: Input }],
    disabled: [{ type: Input }],
    tabindex: [{ type: Input }],
    inputId: [{ type: Input }],
    autoZIndex: [{ type: Input }],
    baseZIndex: [{ type: Input }],
    showTransitionOptions: [{ type: Input }],
    hideTransitionOptions: [{ type: Input }],
    onChange: [{ type: Output }],
    containerViewChild: [{ type: ViewChild, args: ['container',] }],
    inputViewChild: [{ type: ViewChild, args: ['input',] }],
    colorSelector: [{ type: ViewChild, args: ['colorSelector',] }],
    colorHandle: [{ type: ViewChild, args: ['colorHandle',] }],
    hue: [{ type: ViewChild, args: ['hue',] }],
    hueHandle: [{ type: ViewChild, args: ['hueHandle',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ColorPicker, [{
        type: Component,
        args: [{
                selector: 'p-colorPicker',
                template: `
        <div #container [ngStyle]="style" [class]="styleClass" [ngClass]="{'p-colorpicker p-component':true,'p-colorpicker-overlay':!inline,'p-colorpicker-dragging':colorDragging||hueDragging}">
            <input #input type="text" *ngIf="!inline" class="p-colorpicker-preview p-inputtext" readonly="readonly" [ngClass]="{'p-disabled': disabled}"
                (focus)="onInputFocus()" (click)="onInputClick()" (keydown)="onInputKeydown($event)" [attr.id]="inputId" [attr.tabindex]="tabindex" [disabled]="disabled"
                [style.backgroundColor]="inputBgColor">
            <div *ngIf="inline || overlayVisible" [ngClass]="{'p-colorpicker-panel': true, 'p-colorpicker-overlay-panel':!inline, 'p-disabled': disabled}" (click)="onPanelClick()"
                [@overlayAnimation]="{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}" [@.disabled]="inline === true" (@overlayAnimation.start)="onOverlayAnimationStart($event)">
                <div class="p-colorpicker-content">
                    <div #colorSelector class="p-colorpicker-color-selector" (mousedown)="onColorMousedown($event)">
                        <div class="p-colorpicker-color">
                            <div #colorHandle class="p-colorpicker-color-handle"></div>
                        </div>
                    </div>
                    <div #hue class="p-colorpicker-hue" (mousedown)="onHueMousedown($event)">
                        <div #hueHandle class="p-colorpicker-hue-handle"></div>
                    </div>
                </div>
            </div>
        </div>
    `,
                animations: [
                    trigger('overlayAnimation', [
                        transition(':enter', [
                            style({ opacity: 0, transform: 'scaleY(0.8)' }),
                            animate('{{showTransitionParams}}')
                        ]),
                        transition(':leave', [
                            animate('{{hideTransitionParams}}', style({ opacity: 0 }))
                        ])
                    ])
                ],
                providers: [COLORPICKER_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-colorpicker{display:inline-block}.p-colorpicker-dragging{cursor:pointer}.p-colorpicker-overlay{position:relative}.p-colorpicker-panel{height:166px;position:relative;width:193px}.p-colorpicker-overlay-panel{position:absolute}.p-colorpicker-preview{cursor:pointer}.p-colorpicker-panel .p-colorpicker-content{position:relative}.p-colorpicker-panel .p-colorpicker-color-selector{height:150px;left:8px;position:absolute;top:8px;width:150px}.p-colorpicker-panel .p-colorpicker-color{height:150px;width:150px}.p-colorpicker-panel .p-colorpicker-color-handle{border-radius:100%;border-style:solid;border-width:1px;cursor:pointer;height:10px;left:150px;margin:-5px 0 0 -5px;opacity:.85;position:absolute;top:0;width:10px}.p-colorpicker-panel .p-colorpicker-hue{height:150px;left:167px;opacity:.85;position:absolute;top:8px;width:17px}.p-colorpicker-panel .p-colorpicker-hue-handle{border-style:solid;border-width:2px;cursor:pointer;height:10px;left:0;margin-left:-2px;margin-top:-5px;opacity:.85;position:absolute;top:150px;width:21px}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }]; }, { format: [{
            type: Input
        }], autoZIndex: [{
            type: Input
        }], baseZIndex: [{
            type: Input
        }], showTransitionOptions: [{
            type: Input
        }], hideTransitionOptions: [{
            type: Input
        }], onChange: [{
            type: Output
        }], colorSelector: [{
            type: ViewChild,
            args: ['colorSelector']
        }], colorHandle: [{
            type: ViewChild,
            args: ['colorHandle']
        }], hue: [{
            type: ViewChild,
            args: ['hue']
        }], hueHandle: [{
            type: ViewChild,
            args: ['hueHandle']
        }], disabled: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], inline: [{
            type: Input
        }], appendTo: [{
            type: Input
        }], tabindex: [{
            type: Input
        }], inputId: [{
            type: Input
        }], containerViewChild: [{
            type: ViewChild,
            args: ['container']
        }], inputViewChild: [{
            type: ViewChild,
            args: ['input']
        }] }); })();
export class ColorPickerModule {
}
ColorPickerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ColorPickerModule });
ColorPickerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ColorPickerModule_Factory(t) { return new (t || ColorPickerModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ColorPickerModule, { declarations: function () { return [ColorPicker]; }, imports: function () { return [CommonModule]; }, exports: function () { return [ColorPicker]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ColorPickerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [ColorPicker],
                declarations: [ColorPicker]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3JwaWNrZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9jb2xvcnBpY2tlci9jb2xvcnBpY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxZQUFZLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDek0sT0FBTyxFQUFFLE9BQU8sRUFBUyxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBa0IsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4RSxPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpFLE1BQU0sQ0FBQyxNQUFNLDBCQUEwQixHQUFRO0FBQy9DLElBQUksT0FBTyxFQUFFLGlCQUFpQjtBQUM5QixJQUFJLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDO0FBQzlDLElBQUksS0FBSyxFQUFFLElBQUk7QUFDZixDQUFDLENBQUM7QUF3Q0YsTUFBTSxPQUFPLFdBQVc7QUFBRyxJQTBFdkIsWUFBbUIsRUFBYyxFQUFTLFFBQW1CLEVBQVMsRUFBcUI7QUFBSSxRQUE1RSxPQUFFLEdBQUYsRUFBRSxDQUFZO0FBQUMsUUFBUSxhQUFRLEdBQVIsUUFBUSxDQUFXO0FBQUMsUUFBUSxPQUFFLEdBQUYsRUFBRSxDQUFtQjtBQUFDLFFBbEVuRixXQUFNLEdBQVcsS0FBSyxDQUFDO0FBQ3BD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QUFLO0FBQUsseUJBRVYsS0FBSztBQUFLLG9DQUVWLEtBQUs7QUFBSyxvQ0FFVixLQUFLO0FBQUssdUJBRVYsTUFBTTtBQUFLLGlDQUVYLFNBQVMsU0FBQyxXQUFXO0FBQU8sNkJBRTVCLFNBQVMsU0FBQyxPQUFPO0FBQU8sNEJBOEN4QixTQUFTLFNBQUMsZUFBZTtBQUFPLDBCQUloQyxTQUFTLFNBQUMsYUFBYTtBQUFPLGtCQUk5QixTQUFTLFNBQUMsS0FBSztBQUFPLHdCQUl0QixTQUFTLFNBQUMsV0FBVztBQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBNGRsQyxNQUFNLE9BQU8saUJBQWlCO0FBQUc7NkNBTGhDLFFBQVEsU0FBQztDQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxrQkFDdkIsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLGtCQUN0QixZQUFZLEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FDOUI7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCwgT25EZXN0cm95LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIFJlbmRlcmVyMiwgVmlld0NoaWxkLCBDaGFuZ2VEZXRlY3RvclJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUsIEFuaW1hdGlvbkV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRG9tSGFuZGxlciwgQ29ubmVjdGVkT3ZlcmxheVNjcm9sbEhhbmRsZXIgfSBmcm9tICdwcmltZW5nL2RvbSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBjb25zdCBDT0xPUlBJQ0tFUl9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENvbG9yUGlja2VyKSxcbiAgICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLWNvbG9yUGlja2VyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2ICNjb250YWluZXIgW25nU3R5bGVdPVwic3R5bGVcIiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiIFtuZ0NsYXNzXT1cInsncC1jb2xvcnBpY2tlciBwLWNvbXBvbmVudCc6dHJ1ZSwncC1jb2xvcnBpY2tlci1vdmVybGF5JzohaW5saW5lLCdwLWNvbG9ycGlja2VyLWRyYWdnaW5nJzpjb2xvckRyYWdnaW5nfHxodWVEcmFnZ2luZ31cIj5cbiAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgdHlwZT1cInRleHRcIiAqbmdJZj1cIiFpbmxpbmVcIiBjbGFzcz1cInAtY29sb3JwaWNrZXItcHJldmlldyBwLWlucHV0dGV4dFwiIHJlYWRvbmx5PVwicmVhZG9ubHlcIiBbbmdDbGFzc109XCJ7J3AtZGlzYWJsZWQnOiBkaXNhYmxlZH1cIlxuICAgICAgICAgICAgICAgIChmb2N1cyk9XCJvbklucHV0Rm9jdXMoKVwiIChjbGljayk9XCJvbklucHV0Q2xpY2soKVwiIChrZXlkb3duKT1cIm9uSW5wdXRLZXlkb3duKCRldmVudClcIiBbYXR0ci5pZF09XCJpbnB1dElkXCIgW2F0dHIudGFiaW5kZXhdPVwidGFiaW5kZXhcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwiaW5wdXRCZ0NvbG9yXCI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaW5saW5lIHx8IG92ZXJsYXlWaXNpYmxlXCIgW25nQ2xhc3NdPVwieydwLWNvbG9ycGlja2VyLXBhbmVsJzogdHJ1ZSwgJ3AtY29sb3JwaWNrZXItb3ZlcmxheS1wYW5lbCc6IWlubGluZSwgJ3AtZGlzYWJsZWQnOiBkaXNhYmxlZH1cIiAoY2xpY2spPVwib25QYW5lbENsaWNrKClcIlxuICAgICAgICAgICAgICAgIFtAb3ZlcmxheUFuaW1hdGlvbl09XCJ7dmFsdWU6ICd2aXNpYmxlJywgcGFyYW1zOiB7c2hvd1RyYW5zaXRpb25QYXJhbXM6IHNob3dUcmFuc2l0aW9uT3B0aW9ucywgaGlkZVRyYW5zaXRpb25QYXJhbXM6IGhpZGVUcmFuc2l0aW9uT3B0aW9uc319XCIgW0AuZGlzYWJsZWRdPVwiaW5saW5lID09PSB0cnVlXCIgKEBvdmVybGF5QW5pbWF0aW9uLnN0YXJ0KT1cIm9uT3ZlcmxheUFuaW1hdGlvblN0YXJ0KCRldmVudClcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1jb2xvcnBpY2tlci1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgI2NvbG9yU2VsZWN0b3IgY2xhc3M9XCJwLWNvbG9ycGlja2VyLWNvbG9yLXNlbGVjdG9yXCIgKG1vdXNlZG93bik9XCJvbkNvbG9yTW91c2Vkb3duKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWNvbG9ycGlja2VyLWNvbG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAjY29sb3JIYW5kbGUgY2xhc3M9XCJwLWNvbG9ycGlja2VyLWNvbG9yLWhhbmRsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICNodWUgY2xhc3M9XCJwLWNvbG9ycGlja2VyLWh1ZVwiIChtb3VzZWRvd24pPVwib25IdWVNb3VzZWRvd24oJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAjaHVlSGFuZGxlIGNsYXNzPVwicC1jb2xvcnBpY2tlci1odWUtaGFuZGxlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCdvdmVybGF5QW5pbWF0aW9uJywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xuICAgICAgICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICdzY2FsZVkoMC44KSd9KSxcbiAgICAgICAgICAgICAgICBhbmltYXRlKCd7e3Nob3dUcmFuc2l0aW9uUGFyYW1zfX0nKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xuICAgICAgICAgICAgICAgIGFuaW1hdGUoJ3t7aGlkZVRyYW5zaXRpb25QYXJhbXN9fScsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW0NPTE9SUElDS0VSX1ZBTFVFX0FDQ0VTU09SXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHN0eWxlVXJsczogWycuL2NvbG9ycGlja2VyLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbG9yUGlja2VyIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKSBzdHlsZTogYW55O1xuXG4gICAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgaW5saW5lOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgZm9ybWF0OiBzdHJpbmcgPSAnaGV4JztcblxuICAgIEBJbnB1dCgpIGFwcGVuZFRvOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIHRhYmluZGV4OiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBpbnB1dElkOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBhdXRvWkluZGV4OiBib29sZWFuID0gdHJ1ZTtcblxuICAgIEBJbnB1dCgpIGJhc2VaSW5kZXg6IG51bWJlciA9IDA7XG5cbiAgICBASW5wdXQoKSBzaG93VHJhbnNpdGlvbk9wdGlvbnM6IHN0cmluZyA9ICcuMTJzIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJztcblxuICAgIEBJbnB1dCgpIGhpZGVUcmFuc2l0aW9uT3B0aW9uczogc3RyaW5nID0gJy4xcyBsaW5lYXInO1xuXG4gICAgQE91dHB1dCgpIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicpIGNvbnRhaW5lclZpZXdDaGlsZDogRWxlbWVudFJlZjtcblxuICAgIEBWaWV3Q2hpbGQoJ2lucHV0JykgaW5wdXRWaWV3Q2hpbGQ6IEVsZW1lbnRSZWY7XG5cbiAgICB2YWx1ZTogYW55O1xuXG4gICAgaW5wdXRCZ0NvbG9yOiBzdHJpbmc7XG5cbiAgICBzaG93bjogYm9vbGVhbjtcblxuICAgIG92ZXJsYXlWaXNpYmxlOiBib29sZWFuO1xuXG4gICAgZGVmYXVsdENvbG9yOiBzdHJpbmcgPSAnZmYwMDAwJztcblxuICAgIG9uTW9kZWxDaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cbiAgICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICAgIGRvY3VtZW50Q2xpY2tMaXN0ZW5lcjogRnVuY3Rpb247XG5cbiAgICBkb2N1bWVudFJlc2l6ZUxpc3RlbmVyOiBhbnk7XG5cbiAgICBkb2N1bWVudE1vdXNlbW92ZUxpc3RlbmVyOiBGdW5jdGlvbjtcblxuICAgIGRvY3VtZW50TW91c2V1cExpc3RlbmVyOiBGdW5jdGlvbjtcblxuICAgIGRvY3VtZW50SHVlTW92ZUxpc3RlbmVyOiBGdW5jdGlvbjtcblxuICAgIHNjcm9sbEhhbmRsZXI6IGFueTtcblxuICAgIHNlbGZDbGljazogYm9vbGVhbjtcblxuICAgIGNvbG9yRHJhZ2dpbmc6IGJvb2xlYW47XG5cbiAgICBodWVEcmFnZ2luZzogYm9vbGVhbjtcblxuICAgIG92ZXJsYXk6IEhUTUxEaXZFbGVtZW50O1xuXG4gICAgY29sb3JTZWxlY3RvclZpZXdDaGlsZDogRWxlbWVudFJlZjtcblxuICAgIGNvbG9ySGFuZGxlVmlld0NoaWxkOiBFbGVtZW50UmVmO1xuXG4gICAgaHVlVmlld0NoaWxkOiBFbGVtZW50UmVmO1xuXG4gICAgaHVlSGFuZGxlVmlld0NoaWxkOiBFbGVtZW50UmVmO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmLCBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHVibGljIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICAgIEBWaWV3Q2hpbGQoJ2NvbG9yU2VsZWN0b3InKSBzZXQgY29sb3JTZWxlY3RvcihlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuY29sb3JTZWxlY3RvclZpZXdDaGlsZCA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgQFZpZXdDaGlsZCgnY29sb3JIYW5kbGUnKSBzZXQgY29sb3JIYW5kbGUoZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLmNvbG9ySGFuZGxlVmlld0NoaWxkID0gZWxlbWVudDtcbiAgICB9XG5cbiAgICBAVmlld0NoaWxkKCdodWUnKSBzZXQgaHVlKGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5odWVWaWV3Q2hpbGQgPSBlbGVtZW50O1xuICAgIH1cblxuICAgIEBWaWV3Q2hpbGQoJ2h1ZUhhbmRsZScpIHNldCBodWVIYW5kbGUoZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLmh1ZUhhbmRsZVZpZXdDaGlsZCA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgb25IdWVNb3VzZWRvd24oZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYmluZERvY3VtZW50TW91c2Vtb3ZlTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy5iaW5kRG9jdW1lbnRNb3VzZXVwTGlzdGVuZXIoKTtcblxuICAgICAgICB0aGlzLmh1ZURyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5waWNrSHVlKGV2ZW50KTtcbiAgICB9XG5cbiAgICBwaWNrSHVlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGxldCB0b3A6IG51bWJlciA9IHRoaXMuaHVlVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgKHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IDApO1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy52YWxpZGF0ZUhTQih7XG4gICAgICAgICAgICBoOiBNYXRoLmZsb29yKDM2MCAqICgxNTAgLSBNYXRoLm1heCgwLCBNYXRoLm1pbigxNTAsIChldmVudC5wYWdlWSAtIHRvcCkpKSkgLyAxNTApLFxuICAgICAgICAgICAgczogdGhpcy52YWx1ZS5zLFxuICAgICAgICAgICAgYjogdGhpcy52YWx1ZS5iXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudXBkYXRlQ29sb3JTZWxlY3RvcigpO1xuICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWwoKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtvcmlnaW5hbEV2ZW50OiBldmVudCwgdmFsdWU6IHRoaXMuZ2V0VmFsdWVUb1VwZGF0ZSgpfSk7XG4gICAgfVxuXG4gICAgb25Db2xvck1vdXNlZG93bihldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5iaW5kRG9jdW1lbnRNb3VzZW1vdmVMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLmJpbmREb2N1bWVudE1vdXNldXBMaXN0ZW5lcigpO1xuXG4gICAgICAgIHRoaXMuY29sb3JEcmFnZ2luZyA9IHRydWU7XG4gICAgICAgIHRoaXMucGlja0NvbG9yKGV2ZW50KTtcbiAgICB9XG5cbiAgICBwaWNrQ29sb3IoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgbGV0IHJlY3QgPSB0aGlzLmNvbG9yU2VsZWN0b3JWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgbGV0IHRvcCA9IHJlY3QudG9wICsgKHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IDApO1xuICAgICAgICBsZXQgbGVmdCA9IHJlY3QubGVmdCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdDtcbiAgICAgICAgbGV0IHNhdHVyYXRpb24gPSBNYXRoLmZsb29yKDEwMCAqIChNYXRoLm1heCgwLCBNYXRoLm1pbigxNTAsIChldmVudC5wYWdlWCAtIGxlZnQpKSkpIC8gMTUwKTtcbiAgICAgICAgbGV0IGJyaWdodG5lc3MgPSBNYXRoLmZsb29yKDEwMCAqICgxNTAgLSBNYXRoLm1heCgwLCBNYXRoLm1pbigxNTAsIChldmVudC5wYWdlWSAtIHRvcCkpKSkgLyAxNTApO1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy52YWxpZGF0ZUhTQih7XG4gICAgICAgICAgICBoOiB0aGlzLnZhbHVlLmgsXG4gICAgICAgICAgICBzOiBzYXR1cmF0aW9uLFxuICAgICAgICAgICAgYjogYnJpZ2h0bmVzc1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWwoKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtvcmlnaW5hbEV2ZW50OiBldmVudCwgdmFsdWU6IHRoaXMuZ2V0VmFsdWVUb1VwZGF0ZSgpfSk7XG4gICAgfVxuXG4gICAgZ2V0VmFsdWVUb1VwZGF0ZSgpIHtcbiAgICAgICAgbGV0IHZhbDogYW55O1xuICAgICAgICBzd2l0Y2godGhpcy5mb3JtYXQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgICAgICAgICAgdmFsID0gJyMnICsgdGhpcy5IU0J0b0hFWCh0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdyZ2InOlxuICAgICAgICAgICAgICAgIHZhbCA9IHRoaXMuSFNCdG9SR0IodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnaHNiJzpcbiAgICAgICAgICAgICAgICB2YWwgPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIHVwZGF0ZU1vZGVsKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy5nZXRWYWx1ZVRvVXBkYXRlKCkpO1xuICAgIH1cblxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHN3aXRjaCh0aGlzLmZvcm1hdCkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLkhFWHRvSFNCKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ3JnYic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLlJHQnRvSFNCKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2hzYic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLkhFWHRvSFNCKHRoaXMuZGVmYXVsdENvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlQ29sb3JTZWxlY3RvcigpO1xuICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlQ29sb3JTZWxlY3RvcigpIHtcbiAgICAgICAgaWYgKHRoaXMuY29sb3JTZWxlY3RvclZpZXdDaGlsZCkge1xuICAgICAgICAgICAgY29uc3QgaHNiOiBhbnkgPSB7fTtcbiAgICAgICAgICAgIGhzYi5zID0gMTAwO1xuICAgICAgICAgICAgaHNiLmIgPSAxMDA7XG4gICAgICAgICAgICBoc2IuaCA9IHRoaXMudmFsdWUuaDtcblxuICAgICAgICAgICAgdGhpcy5jb2xvclNlbGVjdG9yVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMnICsgdGhpcy5IU0J0b0hFWChoc2IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlVUkoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbG9ySGFuZGxlVmlld0NoaWxkICYmIHRoaXMuaHVlSGFuZGxlVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY29sb3JIYW5kbGVWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5zdHlsZS5sZWZ0ID0gIE1hdGguZmxvb3IoMTUwICogdGhpcy52YWx1ZS5zIC8gMTAwKSArICdweCc7XG4gICAgICAgICAgICB0aGlzLmNvbG9ySGFuZGxlVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gIE1hdGguZmxvb3IoMTUwICogKDEwMCAtIHRoaXMudmFsdWUuYikgLyAxMDApICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuaHVlSGFuZGxlVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gTWF0aC5mbG9vcigxNTAgLSAoMTUwICogdGhpcy52YWx1ZS5oIC8gMzYwKSkgKyAncHgnO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlucHV0QmdDb2xvciA9ICcjJyArIHRoaXMuSFNCdG9IRVgodGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgb25JbnB1dEZvY3VzKCkge1xuICAgICAgICB0aGlzLm9uTW9kZWxUb3VjaGVkKCk7XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5vdmVybGF5VmlzaWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgb25PdmVybGF5QW5pbWF0aW9uU3RhcnQoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KSB7XG4gICAgICAgIHN3aXRjaChldmVudC50b1N0YXRlKSB7XG4gICAgICAgICAgICBjYXNlICd2aXNpYmxlJzpcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaW5saW5lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3ZlcmxheSA9IGV2ZW50LmVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kT3ZlcmxheSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hdXRvWkluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXkuc3R5bGUuekluZGV4ID0gU3RyaW5nKHRoaXMuYmFzZVpJbmRleCArICgrK0RvbUhhbmRsZXIuemluZGV4KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGlnbk92ZXJsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iaW5kRG9jdW1lbnRDbGlja0xpc3RlbmVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmluZERvY3VtZW50UmVzaXplTGlzdGVuZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iaW5kU2Nyb2xsTGlzdGVuZXIoKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbG9yU2VsZWN0b3IoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVSSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICd2b2lkJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uT3ZlcmxheUhpZGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXBwZW5kT3ZlcmxheSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXBwZW5kVG8pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFwcGVuZFRvID09PSAnYm9keScpXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm92ZXJsYXkpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIERvbUhhbmRsZXIuYXBwZW5kQ2hpbGQodGhpcy5vdmVybGF5LCB0aGlzLmFwcGVuZFRvKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc3RvcmVPdmVybGF5QXBwZW5kKCkge1xuICAgICAgICBpZiAodGhpcy5vdmVybGF5ICYmIHRoaXMuYXBwZW5kVG8pIHtcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLm92ZXJsYXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWxpZ25PdmVybGF5KCkge1xuICAgICAgICBpZiAodGhpcy5hcHBlbmRUbylcbiAgICAgICAgICAgIERvbUhhbmRsZXIuYWJzb2x1dGVQb3NpdGlvbih0aGlzLm92ZXJsYXksIHRoaXMuaW5wdXRWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIERvbUhhbmRsZXIucmVsYXRpdmVQb3NpdGlvbih0aGlzLm92ZXJsYXksIHRoaXMuaW5wdXRWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuXG4gICAgaGlkZSgpIHtcbiAgICAgICAgdGhpcy5vdmVybGF5VmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIG9uSW5wdXRDbGljaygpIHtcbiAgICAgICAgdGhpcy5zZWxmQ2xpY2sgPSB0cnVlO1xuICAgICAgICB0aGlzLnRvZ2dsZVBhbmVsKCk7XG4gICAgfVxuXG4gICAgdG9nZ2xlUGFuZWwoKSB7XG4gICAgICAgIGlmICghdGhpcy5vdmVybGF5VmlzaWJsZSlcbiAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG5cbiAgICBvbklucHV0S2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBzd2l0Y2goZXZlbnQud2hpY2gpIHtcbiAgICAgICAgICAgIC8vc3BhY2VcbiAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVQYW5lbCgpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy9lc2NhcGUgYW5kIHRhYlxuICAgICAgICAgICAgY2FzZSAyNzpcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QYW5lbENsaWNrKCkge1xuICAgICAgICB0aGlzLnNlbGZDbGljayA9IHRydWU7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmbjtcbiAgICB9XG5cbiAgICBzZXREaXNhYmxlZFN0YXRlKHZhbDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gdmFsO1xuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIGJpbmREb2N1bWVudENsaWNrTGlzdGVuZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5kb2N1bWVudENsaWNrTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGRvY3VtZW50VGFyZ2V0OiBhbnkgPSB0aGlzLmVsID8gdGhpcy5lbC5uYXRpdmVFbGVtZW50Lm93bmVyRG9jdW1lbnQgOiAnZG9jdW1lbnQnO1xuXG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50Q2xpY2tMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKGRvY3VtZW50VGFyZ2V0LCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNlbGZDbGljaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXlWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5iaW5kRG9jdW1lbnRDbGlja0xpc3RlbmVyKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxmQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmJpbmREb2N1bWVudENsaWNrTGlzdGVuZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmRvY3VtZW50Q2xpY2tMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5kb2N1bWVudENsaWNrTGlzdGVuZXIoKTtcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRDbGlja0xpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJpbmREb2N1bWVudE1vdXNlbW92ZUxpc3RlbmVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuZG9jdW1lbnRNb3VzZW1vdmVMaXN0ZW5lcikge1xuICAgICAgICAgICAgY29uc3QgZG9jdW1lbnRUYXJnZXQ6IGFueSA9IHRoaXMuZWwgPyB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQub3duZXJEb2N1bWVudCA6ICdkb2N1bWVudCc7XG5cbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRNb3VzZW1vdmVMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKGRvY3VtZW50VGFyZ2V0LCAnbW91c2Vtb3ZlJywgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29sb3JEcmFnZ2luZykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBpY2tDb2xvcihldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaHVlRHJhZ2dpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5waWNrSHVlKGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVuYmluZERvY3VtZW50TW91c2Vtb3ZlTGlzdGVuZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmRvY3VtZW50TW91c2Vtb3ZlTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRNb3VzZW1vdmVMaXN0ZW5lcigpO1xuICAgICAgICAgICAgdGhpcy5kb2N1bWVudE1vdXNlbW92ZUxpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJpbmREb2N1bWVudE1vdXNldXBMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRvY3VtZW50TW91c2V1cExpc3RlbmVyKSB7XG4gICAgICAgICAgICBjb25zdCBkb2N1bWVudFRhcmdldDogYW55ID0gdGhpcy5lbCA/IHRoaXMuZWwubmF0aXZlRWxlbWVudC5vd25lckRvY3VtZW50IDogJ2RvY3VtZW50JztcblxuICAgICAgICAgICAgdGhpcy5kb2N1bWVudE1vdXNldXBMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKGRvY3VtZW50VGFyZ2V0LCAnbW91c2V1cCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbG9yRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmh1ZURyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy51bmJpbmREb2N1bWVudE1vdXNlbW92ZUxpc3RlbmVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51bmJpbmREb2N1bWVudE1vdXNldXBMaXN0ZW5lcigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmJpbmREb2N1bWVudE1vdXNldXBMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZG9jdW1lbnRNb3VzZXVwTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRNb3VzZXVwTGlzdGVuZXIoKTtcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRNb3VzZXVwTGlzdGVuZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmluZERvY3VtZW50UmVzaXplTGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMuZG9jdW1lbnRSZXNpemVMaXN0ZW5lciA9IHRoaXMub25XaW5kb3dSZXNpemUuYmluZCh0aGlzKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuZG9jdW1lbnRSZXNpemVMaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgdW5iaW5kRG9jdW1lbnRSZXNpemVMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZG9jdW1lbnRSZXNpemVMaXN0ZW5lcikge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuZG9jdW1lbnRSZXNpemVMaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50UmVzaXplTGlzdGVuZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25XaW5kb3dSZXNpemUoKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cblxuICAgIGJpbmRTY3JvbGxMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNjcm9sbEhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlciA9IG5ldyBDb25uZWN0ZWRPdmVybGF5U2Nyb2xsSGFuZGxlcih0aGlzLmNvbnRhaW5lclZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3ZlcmxheVZpc2libGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIuYmluZFNjcm9sbExpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgdW5iaW5kU2Nyb2xsTGlzdGVuZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbEhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlci51bmJpbmRTY3JvbGxMaXN0ZW5lcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFsaWRhdGVIU0IoaHNiKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoOiBNYXRoLm1pbigzNjAsIE1hdGgubWF4KDAsIGhzYi5oKSksXG4gICAgICAgICAgICBzOiBNYXRoLm1pbigxMDAsIE1hdGgubWF4KDAsIGhzYi5zKSksXG4gICAgICAgICAgICBiOiBNYXRoLm1pbigxMDAsIE1hdGgubWF4KDAsIGhzYi5iKSlcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZVJHQihyZ2IpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHI6IE1hdGgubWluKDI1NSwgTWF0aC5tYXgoMCwgcmdiLnIpKSxcbiAgICAgICAgICAgIGc6IE1hdGgubWluKDI1NSwgTWF0aC5tYXgoMCwgcmdiLmcpKSxcbiAgICAgICAgICAgIGI6IE1hdGgubWluKDI1NSwgTWF0aC5tYXgoMCwgcmdiLmIpKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHZhbGlkYXRlSEVYKGhleCkge1xuICAgICAgICB2YXIgbGVuID0gNiAtIGhleC5sZW5ndGg7XG4gICAgICAgIGlmIChsZW4gPiAwKSB7XG4gICAgICAgICAgICB2YXIgbyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpPGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgby5wdXNoKCcwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvLnB1c2goaGV4KTtcbiAgICAgICAgICAgIGhleCA9IG8uam9pbignJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhleDtcbiAgICB9XG5cbiAgICBIRVh0b1JHQihoZXgpIHtcbiAgICAgICAgbGV0IGhleFZhbHVlID0gcGFyc2VJbnQoKChoZXguaW5kZXhPZignIycpID4gLTEpID8gaGV4LnN1YnN0cmluZygxKSA6IGhleCksIDE2KTtcbiAgICAgICAgcmV0dXJuIHtyOiBoZXhWYWx1ZSA+PiAxNiwgZzogKGhleFZhbHVlICYgMHgwMEZGMDApID4+IDgsIGI6IChoZXhWYWx1ZSAmIDB4MDAwMEZGKX07XG4gICAgfVxuXG4gICAgSEVYdG9IU0IoaGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLlJHQnRvSFNCKHRoaXMuSEVYdG9SR0IoaGV4KSk7XG4gICAgfVxuXG4gICAgUkdCdG9IU0IocmdiKSB7XG4gICAgICAgIHZhciBoc2IgPSB7XG4gICAgICAgICAgICBoOiAwLFxuICAgICAgICAgICAgczogMCxcbiAgICAgICAgICAgIGI6IDBcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKHJnYi5yLCByZ2IuZywgcmdiLmIpO1xuICAgICAgICB2YXIgbWF4ID0gTWF0aC5tYXgocmdiLnIsIHJnYi5nLCByZ2IuYik7XG4gICAgICAgIHZhciBkZWx0YSA9IG1heCAtIG1pbjtcbiAgICAgICAgaHNiLmIgPSBtYXg7XG4gICAgICAgIGhzYi5zID0gbWF4ICE9IDAgPyAyNTUgKiBkZWx0YSAvIG1heCA6IDA7XG4gICAgICAgIGlmIChoc2IucyAhPSAwKSB7XG4gICAgICAgICAgICBpZiAocmdiLnIgPT0gbWF4KSB7XG4gICAgICAgICAgICAgICAgaHNiLmggPSAocmdiLmcgLSByZ2IuYikgLyBkZWx0YTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmdiLmcgPT0gbWF4KSB7XG4gICAgICAgICAgICAgICAgaHNiLmggPSAyICsgKHJnYi5iIC0gcmdiLnIpIC8gZGVsdGE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGhzYi5oID0gNCArIChyZ2IuciAtIHJnYi5nKSAvIGRlbHRhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaHNiLmggPSAtMTtcbiAgICAgICAgfVxuICAgICAgICBoc2IuaCAqPSA2MDtcbiAgICAgICAgaWYgKGhzYi5oIDwgMCkge1xuICAgICAgICAgICAgaHNiLmggKz0gMzYwO1xuICAgICAgICB9XG4gICAgICAgIGhzYi5zICo9IDEwMC8yNTU7XG4gICAgICAgIGhzYi5iICo9IDEwMC8yNTU7XG4gICAgICAgIHJldHVybiBoc2I7XG4gICAgfVxuXG4gICAgSFNCdG9SR0IoaHNiKSB7XG4gICAgICAgIHZhciByZ2IgPSB7XG4gICAgICAgICAgICByOiBudWxsLCBnOiBudWxsLCBiOiBudWxsXG4gICAgICAgIH07XG4gICAgICAgIGxldCBoOiBudW1iZXIgPSBoc2IuaDtcbiAgICAgICAgbGV0IHM6IG51bWJlciA9IGhzYi5zKjI1NS8xMDA7XG4gICAgICAgIGxldCB2OiBudW1iZXIgPSBoc2IuYioyNTUvMTAwO1xuICAgICAgICBpZiAocyA9PSAwKSB7XG4gICAgICAgICAgICByZ2IgPSB7XG4gICAgICAgICAgICAgICAgcjogdixcbiAgICAgICAgICAgICAgICBnOiB2LFxuICAgICAgICAgICAgICAgIGI6IHZcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0MTogbnVtYmVyID0gdjtcbiAgICAgICAgICAgIGxldCB0MjogbnVtYmVyID0gKDI1NS1zKSp2LzI1NTtcbiAgICAgICAgICAgIGxldCB0MzogbnVtYmVyID0gKHQxLXQyKSooaCU2MCkvNjA7XG4gICAgICAgICAgICBpZiAoaD09MzYwKSBoID0gMDtcbiAgICAgICAgICAgIGlmIChoPDYwKSB7cmdiLnI9dDE7XHRyZ2IuYj10MjsgcmdiLmc9dDIrdDN9XG4gICAgICAgICAgICBlbHNlIGlmIChoPDEyMCkge3JnYi5nPXQxOyByZ2IuYj10MjtcdHJnYi5yPXQxLXQzfVxuICAgICAgICAgICAgZWxzZSBpZiAoaDwxODApIHtyZ2IuZz10MTsgcmdiLnI9dDI7XHRyZ2IuYj10Mit0M31cbiAgICAgICAgICAgIGVsc2UgaWYgKGg8MjQwKSB7cmdiLmI9dDE7IHJnYi5yPXQyO1x0cmdiLmc9dDEtdDN9XG4gICAgICAgICAgICBlbHNlIGlmIChoPDMwMCkge3JnYi5iPXQxOyByZ2IuZz10MjtcdHJnYi5yPXQyK3QzfVxuICAgICAgICAgICAgZWxzZSBpZiAoaDwzNjApIHtyZ2Iucj10MTsgcmdiLmc9dDI7XHRyZ2IuYj10MS10M31cbiAgICAgICAgICAgIGVsc2Uge3JnYi5yPTA7IHJnYi5nPTA7XHRyZ2IuYj0wfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7cjpNYXRoLnJvdW5kKHJnYi5yKSwgZzpNYXRoLnJvdW5kKHJnYi5nKSwgYjpNYXRoLnJvdW5kKHJnYi5iKX07XG4gICAgfVxuXG4gICAgUkdCdG9IRVgocmdiKSB7XG4gICAgICAgIHZhciBoZXggPSBbXG4gICAgICAgICAgICByZ2Iuci50b1N0cmluZygxNiksXG4gICAgICAgICAgICByZ2IuZy50b1N0cmluZygxNiksXG4gICAgICAgICAgICByZ2IuYi50b1N0cmluZygxNilcbiAgICAgICAgXTtcblxuICAgICAgICBmb3IodmFyIGtleSBpbiBoZXgpIHtcbiAgICAgICAgICAgIGlmIChoZXhba2V5XS5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgICAgIGhleFtrZXldID0gJzAnICsgaGV4W2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaGV4LmpvaW4oJycpO1xuICAgIH1cblxuICAgIEhTQnRvSEVYKGhzYikge1xuICAgICAgICByZXR1cm4gdGhpcy5SR0J0b0hFWCh0aGlzLkhTQnRvUkdCKGhzYikpO1xuICAgIH1cblxuICAgIG9uT3ZlcmxheUhpZGUoKSB7XG4gICAgICAgIHRoaXMudW5iaW5kU2Nyb2xsTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy51bmJpbmREb2N1bWVudFJlc2l6ZUxpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMudW5iaW5kRG9jdW1lbnRDbGlja0xpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMub3ZlcmxheSA9IG51bGw7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbEhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlci5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXN0b3JlT3ZlcmxheUFwcGVuZCgpO1xuICAgICAgICB0aGlzLm9uT3ZlcmxheUhpZGUoKTtcbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgZXhwb3J0czogW0NvbG9yUGlja2VyXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtDb2xvclBpY2tlcl1cbn0pXG5leHBvcnQgY2xhc3MgQ29sb3JQaWNrZXJNb2R1bGUgeyB9XG4iXX0=