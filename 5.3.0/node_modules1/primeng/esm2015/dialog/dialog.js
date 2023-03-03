import { NgModule, Component, ElementRef, Input, Output, EventEmitter, Renderer2, ContentChildren, ViewChild, NgZone, ChangeDetectorRef, ChangeDetectionStrategy, ViewEncapsulation, ContentChild } from '@angular/core';
import { trigger, style, transition, animate, animation, useAnimation } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { DomHandler } from 'primeng/dom';
import { Header, Footer, SharedModule, PrimeTemplate } from 'primeng/api';
import { FocusTrapModule } from 'primeng/focustrap';
import { RippleModule } from 'primeng/ripple';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/focustrap';
import * as ɵngcc3 from 'primeng/ripple';

const _c0 = ["titlebar"];
const _c1 = ["content"];
const _c2 = ["footer"];
function Dialog_div_0_div_1_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 16);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵattribute("id", ctx_r9.id + "-label");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r9.header);
} }
function Dialog_div_0_div_1_div_2_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 16);
    ɵngcc0.ɵɵprojection(1, 1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵattribute("id", ctx_r10.id + "-label");
} }
function Dialog_div_0_div_1_div_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c3 = function () { return { "p-dialog-header-icon p-dialog-header-maximize p-link": true }; };
function Dialog_div_0_div_1_div_2_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 17);
    ɵngcc0.ɵɵlistener("click", function Dialog_div_0_div_1_div_2_button_6_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r15); const ctx_r14 = ɵngcc0.ɵɵnextContext(4); return ctx_r14.maximize(); })("keydown.enter", function Dialog_div_0_div_1_div_2_button_6_Template_button_keydown_enter_0_listener() { ɵngcc0.ɵɵrestoreView(_r15); const ctx_r16 = ɵngcc0.ɵɵnextContext(4); return ctx_r16.maximize(); });
    ɵngcc0.ɵɵelement(1, "span", 18);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction0(2, _c3));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r12.maximized ? ctx_r12.minimizeIcon : ctx_r12.maximizeIcon);
} }
const _c4 = function () { return { "p-dialog-header-icon p-dialog-header-close p-link": true }; };
function Dialog_div_0_div_1_div_2_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 17);
    ɵngcc0.ɵɵlistener("click", function Dialog_div_0_div_1_div_2_button_7_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r18); const ctx_r17 = ɵngcc0.ɵɵnextContext(4); return ctx_r17.close($event); })("keydown.enter", function Dialog_div_0_div_1_div_2_button_7_Template_button_keydown_enter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r18); const ctx_r19 = ɵngcc0.ɵɵnextContext(4); return ctx_r19.close($event); });
    ɵngcc0.ɵɵelement(1, "span", 19);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction0(2, _c4));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r13.closeIcon);
} }
function Dialog_div_0_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 11, 12);
    ɵngcc0.ɵɵlistener("mousedown", function Dialog_div_0_div_1_div_2_Template_div_mousedown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r21); const ctx_r20 = ɵngcc0.ɵɵnextContext(3); return ctx_r20.initDrag($event); });
    ɵngcc0.ɵɵtemplate(2, Dialog_div_0_div_1_div_2_span_2_Template, 2, 2, "span", 13);
    ɵngcc0.ɵɵtemplate(3, Dialog_div_0_div_1_div_2_span_3_Template, 2, 1, "span", 13);
    ɵngcc0.ɵɵtemplate(4, Dialog_div_0_div_1_div_2_ng_container_4_Template, 1, 0, "ng-container", 8);
    ɵngcc0.ɵɵelementStart(5, "div", 14);
    ɵngcc0.ɵɵtemplate(6, Dialog_div_0_div_1_div_2_button_6_Template, 2, 3, "button", 15);
    ɵngcc0.ɵɵtemplate(7, Dialog_div_0_div_1_div_2_button_7_Template, 2, 3, "button", 15);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.header);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.headerFacet);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r3.headerTemplate);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.maximizable);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.closable);
} }
function Dialog_div_0_div_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Dialog_div_0_div_1_div_7_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Dialog_div_0_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 20, 21);
    ɵngcc0.ɵɵprojection(2, 2);
    ɵngcc0.ɵɵtemplate(3, Dialog_div_0_div_1_div_7_ng_container_3_Template, 1, 0, "ng-container", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r6.footerTemplate);
} }
function Dialog_div_0_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r25 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 22);
    ɵngcc0.ɵɵlistener("mousedown", function Dialog_div_0_div_1_div_8_Template_div_mousedown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r25); const ctx_r24 = ɵngcc0.ɵɵnextContext(3); return ctx_r24.initResize($event); });
    ɵngcc0.ɵɵelementEnd();
} }
const _c5 = function (a1, a2, a3, a4) { return { "p-dialog p-component": true, "p-dialog-rtl": a1, "p-dialog-draggable": a2, "p-dialog-resizable": a3, "p-dialog-maximized": a4 }; };
const _c6 = function (a0, a1) { return { transform: a0, transition: a1 }; };
const _c7 = function (a1) { return { value: "visible", params: a1 }; };
function Dialog_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 3, 4);
    ɵngcc0.ɵɵlistener("@animation.start", function Dialog_div_0_div_1_Template_div_animation_animation_start_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r27); const ctx_r26 = ɵngcc0.ɵɵnextContext(2); return ctx_r26.onAnimationStart($event); })("@animation.done", function Dialog_div_0_div_1_Template_div_animation_animation_done_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r27); const ctx_r28 = ɵngcc0.ɵɵnextContext(2); return ctx_r28.onAnimationEnd($event); });
    ɵngcc0.ɵɵtemplate(2, Dialog_div_0_div_1_div_2_Template, 8, 5, "div", 5);
    ɵngcc0.ɵɵelementStart(3, "div", 6, 7);
    ɵngcc0.ɵɵprojection(5);
    ɵngcc0.ɵɵtemplate(6, Dialog_div_0_div_1_ng_container_6_Template, 1, 0, "ng-container", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(7, Dialog_div_0_div_1_div_7_Template, 4, 1, "div", 9);
    ɵngcc0.ɵɵtemplate(8, Dialog_div_0_div_1_div_8_Template, 1, 0, "div", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMap(ctx_r1.styleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(15, _c5, ctx_r1.rtl, ctx_r1.draggable, ctx_r1.resizable, ctx_r1.maximized))("ngStyle", ctx_r1.style)("pFocusTrapDisabled", ctx_r1.focusTrap === false)("@animation", ɵngcc0.ɵɵpureFunction1(23, _c7, ɵngcc0.ɵɵpureFunction2(20, _c6, ctx_r1.transformOptions, ctx_r1.transitionOptions)));
    ɵngcc0.ɵɵattribute("aria-labelledby", ctx_r1.id + "-label");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.showHeader);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap(ctx_r1.contentStyleClass);
    ɵngcc0.ɵɵproperty("ngClass", "p-dialog-content")("ngStyle", ctx_r1.contentStyle);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r1.contentTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.footerFacet || ctx_r1.footerTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.resizable);
} }
const _c8 = function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) { return { "p-dialog-mask": true, "p-component-overlay": a1, "p-dialog-mask-scrollblocker": a2, "p-dialog-left": a3, "p-dialog-right": a4, "p-dialog-top": a5, "p-dialog-top-left": a6, "p-dialog-top-right": a7, "p-dialog-bottom": a8, "p-dialog-bottom-left": a9, "p-dialog-bottom-right": a10 }; };
function Dialog_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵtemplate(1, Dialog_div_0_div_1_Template, 9, 25, "div", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r0.maskStyleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunctionV(4, _c8, [ctx_r0.modal, ctx_r0.modal || ctx_r0.blockScroll, ctx_r0.position === "left", ctx_r0.position === "right", ctx_r0.position === "top", ctx_r0.position === "topleft" || ctx_r0.position === "top-left", ctx_r0.position === "topright" || ctx_r0.position === "top-right", ctx_r0.position === "bottom", ctx_r0.position === "bottomleft" || ctx_r0.position === "bottom-left", ctx_r0.position === "bottomright" || ctx_r0.position === "bottom-right"]));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.visible);
} }
const _c9 = ["*", [["p-header"]], [["p-footer"]]];
const _c10 = ["*", "p-header", "p-footer"];
let idx = 0;
const showAnimation = animation([
    style({ transform: '{{transform}}', opacity: 0 }),
    animate('{{transition}}')
]);
const hideAnimation = animation([
    animate('{{transition}}', style({ transform: '{{transform}}', opacity: 0 }))
]);
export class Dialog {
    constructor(el, renderer, zone, cd) {
        this.el = el;
        this.renderer = renderer;
        this.zone = zone;
        this.cd = cd;
        this.draggable = true;
        this.resizable = true;
        this.closeOnEscape = true;
        this.closable = true;
        this.showHeader = true;
        this.blockScroll = false;
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.minX = 0;
        this.minY = 0;
        this.focusOnShow = true;
        this.keepInViewport = true;
        this.focusTrap = true;
        this.transitionOptions = '150ms cubic-bezier(0, 0, 0.2, 1)';
        this.closeIcon = 'pi pi-times';
        this.minimizeIcon = 'pi pi-window-minimize';
        this.maximizeIcon = 'pi pi-window-maximize';
        this.onShow = new EventEmitter();
        this.onHide = new EventEmitter();
        this.visibleChange = new EventEmitter();
        this.onResizeInit = new EventEmitter();
        this.onResizeEnd = new EventEmitter();
        this.onDragEnd = new EventEmitter();
        this.id = `p-dialog-${idx++}`;
        this._style = {};
        this._position = "center";
        this.transformOptions = "scale(0.7)";
    }
    get positionLeft() {
        return 0;
    }
    ;
    set positionLeft(_positionLeft) {
        console.log("positionLeft property is deprecated.");
    }
    get positionTop() {
        return 0;
    }
    ;
    set positionTop(_positionTop) {
        console.log("positionTop property is deprecated.");
    }
    get responsive() {
        return false;
    }
    ;
    set responsive(_responsive) {
        console.log("Responsive property is deprecated.");
    }
    get breakpoint() {
        return 649;
    }
    ;
    set breakpoint(_breakpoint) {
        console.log("Breakpoint property is not utilized and deprecated, use CSS media queries instead.");
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'header':
                    this.headerTemplate = item.template;
                    break;
                case 'content':
                    this.contentTemplate = item.template;
                    break;
                case 'footer':
                    this.footerTemplate = item.template;
                    break;
                default:
                    this.contentTemplate = item.template;
                    break;
            }
        });
    }
    get visible() {
        return this._visible;
    }
    set visible(value) {
        this._visible = value;
        if (this._visible && !this.maskVisible) {
            this.maskVisible = true;
        }
    }
    get style() {
        return this._style;
    }
    set style(value) {
        if (value) {
            this._style = Object.assign({}, value);
            this.originalStyle = value;
        }
    }
    get position() {
        return this._position;
    }
    ;
    set position(value) {
        this._position = value;
        switch (value) {
            case 'topleft':
            case 'bottomleft':
            case 'left':
                this.transformOptions = "translate3d(-100%, 0px, 0px)";
                break;
            case 'topright':
            case 'bottomright':
            case 'right':
                this.transformOptions = "translate3d(100%, 0px, 0px)";
                break;
            case 'bottom':
                this.transformOptions = "translate3d(0px, 100%, 0px)";
                break;
            case 'top':
                this.transformOptions = "translate3d(0px, -100%, 0px)";
                break;
            default:
                this.transformOptions = "scale(0.7)";
                break;
        }
    }
    focus() {
        let focusable = DomHandler.findSingle(this.container, '[autofocus]');
        if (focusable) {
            this.zone.runOutsideAngular(() => {
                setTimeout(() => focusable.focus(), 5);
            });
        }
    }
    close(event) {
        this.visibleChange.emit(false);
        event.preventDefault();
    }
    enableModality() {
        if (this.closable && this.dismissableMask) {
            this.maskClickListener = this.renderer.listen(this.wrapper, 'click', (event) => {
                if (this.wrapper && this.wrapper.isSameNode(event.target)) {
                    this.close(event);
                }
            });
        }
        if (this.modal) {
            DomHandler.addClass(document.body, 'p-overflow-hidden');
        }
    }
    disableModality() {
        if (this.wrapper) {
            if (this.dismissableMask) {
                this.unbindMaskClickListener();
            }
            if (this.modal) {
                DomHandler.removeClass(document.body, 'p-overflow-hidden');
            }
            if (!this.cd.destroyed) {
                this.cd.detectChanges();
            }
        }
    }
    maximize() {
        this.maximized = !this.maximized;
        if (!this.modal && !this.blockScroll) {
            if (this.maximized)
                DomHandler.addClass(document.body, 'p-overflow-hidden');
            else
                DomHandler.removeClass(document.body, 'p-overflow-hidden');
        }
    }
    unbindMaskClickListener() {
        if (this.maskClickListener) {
            this.maskClickListener();
            this.maskClickListener = null;
        }
    }
    moveOnTop() {
        if (this.autoZIndex) {
            this.container.style.zIndex = String(this.baseZIndex + (++DomHandler.zindex));
            this.wrapper.style.zIndex = String(this.baseZIndex + (DomHandler.zindex - 1));
        }
    }
    initDrag(event) {
        if (DomHandler.hasClass(event.target, 'p-dialog-header-icon') || DomHandler.hasClass(event.target.parentElement, 'p-dialog-header-icon')) {
            return;
        }
        if (this.draggable) {
            this.dragging = true;
            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;
            this.container.style.margin = '0';
            DomHandler.addClass(document.body, 'p-unselectable-text');
        }
    }
    onKeydown(event) {
        if (this.focusTrap) {
            if (event.which === 9) {
                event.preventDefault();
                let focusableElements = DomHandler.getFocusableElements(this.container);
                if (focusableElements && focusableElements.length > 0) {
                    if (!focusableElements[0].ownerDocument.activeElement) {
                        focusableElements[0].focus();
                    }
                    else {
                        let focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);
                        if (event.shiftKey) {
                            if (focusedIndex == -1 || focusedIndex === 0)
                                focusableElements[focusableElements.length - 1].focus();
                            else
                                focusableElements[focusedIndex - 1].focus();
                        }
                        else {
                            if (focusedIndex == -1 || focusedIndex === (focusableElements.length - 1))
                                focusableElements[0].focus();
                            else
                                focusableElements[focusedIndex + 1].focus();
                        }
                    }
                }
            }
        }
    }
    onDrag(event) {
        if (this.dragging) {
            let containerWidth = DomHandler.getOuterWidth(this.container);
            let containerHeight = DomHandler.getOuterHeight(this.container);
            let deltaX = event.pageX - this.lastPageX;
            let deltaY = event.pageY - this.lastPageY;
            let offset = DomHandler.getOffset(this.container);
            let leftPos = offset.left + deltaX;
            let topPos = offset.top + deltaY;
            let viewport = DomHandler.getViewport();
            this.container.style.position = 'fixed';
            if (this.keepInViewport) {
                if (leftPos >= this.minX && (leftPos + containerWidth) < viewport.width) {
                    this._style.left = leftPos + 'px';
                    this.lastPageX = event.pageX;
                    this.container.style.left = leftPos + 'px';
                }
                if (topPos >= this.minY && (topPos + containerHeight) < viewport.height) {
                    this._style.top = topPos + 'px';
                    this.lastPageY = event.pageY;
                    this.container.style.top = topPos + 'px';
                }
            }
            else {
                this.lastPageX = event.pageX;
                this.container.style.left = leftPos + 'px';
                this.lastPageY = event.pageY;
                this.container.style.top = topPos + 'px';
            }
        }
    }
    endDrag(event) {
        if (this.dragging) {
            this.dragging = false;
            DomHandler.removeClass(document.body, 'p-unselectable-text');
            this.cd.detectChanges();
            this.onDragEnd.emit(event);
        }
    }
    resetPosition() {
        this.container.style.position = '';
        this.container.style.left = '';
        this.container.style.top = '';
        this.container.style.margin = '';
    }
    //backward compatibility
    center() {
        this.resetPosition();
    }
    initResize(event) {
        if (this.resizable) {
            this.resizing = true;
            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;
            DomHandler.addClass(document.body, 'p-unselectable-text');
            this.onResizeInit.emit(event);
        }
    }
    onResize(event) {
        if (this.resizing) {
            let deltaX = event.pageX - this.lastPageX;
            let deltaY = event.pageY - this.lastPageY;
            let containerWidth = DomHandler.getOuterWidth(this.container);
            let containerHeight = DomHandler.getOuterHeight(this.container);
            let contentHeight = DomHandler.getOuterHeight(this.contentViewChild.nativeElement);
            let newWidth = containerWidth + deltaX;
            let newHeight = containerHeight + deltaY;
            let minWidth = this.container.style.minWidth;
            let minHeight = this.container.style.minHeight;
            let offset = DomHandler.getOffset(this.container);
            let viewport = DomHandler.getViewport();
            let hasBeenDragged = !parseInt(this.container.style.top) || !parseInt(this.container.style.left);
            if (hasBeenDragged) {
                newWidth += deltaX;
                newHeight += deltaY;
            }
            if ((!minWidth || newWidth > parseInt(minWidth)) && (offset.left + newWidth) < viewport.width) {
                this._style.width = newWidth + 'px';
                this.container.style.width = this._style.width;
            }
            if ((!minHeight || newHeight > parseInt(minHeight)) && (offset.top + newHeight) < viewport.height) {
                this.contentViewChild.nativeElement.style.height = contentHeight + newHeight - containerHeight + 'px';
                if (this._style.height) {
                    this._style.height = newHeight + 'px';
                    this.container.style.height = this._style.height;
                }
            }
            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;
        }
    }
    resizeEnd(event) {
        if (this.resizing) {
            this.resizing = false;
            DomHandler.removeClass(document.body, 'p-unselectable-text');
            this.onResizeEnd.emit(event);
        }
    }
    bindGlobalListeners() {
        if (this.draggable) {
            this.bindDocumentDragListener();
            this.bindDocumentDragEndListener();
        }
        if (this.resizable) {
            this.bindDocumentResizeListeners();
        }
        if (this.closeOnEscape && this.closable) {
            this.bindDocumentEscapeListener();
        }
    }
    unbindGlobalListeners() {
        this.unbindDocumentDragListener();
        this.unbindDocumentDragEndListener();
        this.unbindDocumentResizeListeners();
        this.unbindDocumentEscapeListener();
    }
    bindDocumentDragListener() {
        this.zone.runOutsideAngular(() => {
            this.documentDragListener = this.onDrag.bind(this);
            window.document.addEventListener('mousemove', this.documentDragListener);
        });
    }
    unbindDocumentDragListener() {
        if (this.documentDragListener) {
            window.document.removeEventListener('mousemove', this.documentDragListener);
            this.documentDragListener = null;
        }
    }
    bindDocumentDragEndListener() {
        this.zone.runOutsideAngular(() => {
            this.documentDragEndListener = this.endDrag.bind(this);
            window.document.addEventListener('mouseup', this.documentDragEndListener);
        });
    }
    unbindDocumentDragEndListener() {
        if (this.documentDragEndListener) {
            window.document.removeEventListener('mouseup', this.documentDragEndListener);
            this.documentDragEndListener = null;
        }
    }
    bindDocumentResizeListeners() {
        this.zone.runOutsideAngular(() => {
            this.documentResizeListener = this.onResize.bind(this);
            this.documentResizeEndListener = this.resizeEnd.bind(this);
            window.document.addEventListener('mousemove', this.documentResizeListener);
            window.document.addEventListener('mouseup', this.documentResizeEndListener);
        });
    }
    unbindDocumentResizeListeners() {
        if (this.documentResizeListener && this.documentResizeEndListener) {
            window.document.removeEventListener('mousemove', this.documentResizeListener);
            window.document.removeEventListener('mouseup', this.documentResizeEndListener);
            this.documentResizeListener = null;
            this.documentResizeEndListener = null;
        }
    }
    bindDocumentEscapeListener() {
        const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
        this.documentEscapeListener = this.renderer.listen(documentTarget, 'keydown', (event) => {
            if (event.which == 27) {
                if (parseInt(this.container.style.zIndex) === (DomHandler.zindex + this.baseZIndex)) {
                    this.close(event);
                }
            }
        });
    }
    unbindDocumentEscapeListener() {
        if (this.documentEscapeListener) {
            this.documentEscapeListener();
            this.documentEscapeListener = null;
        }
    }
    appendContainer() {
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.wrapper);
            else
                DomHandler.appendChild(this.wrapper, this.appendTo);
        }
    }
    restoreAppend() {
        if (this.container && this.appendTo) {
            this.el.nativeElement.appendChild(this.wrapper);
        }
    }
    onAnimationStart(event) {
        switch (event.toState) {
            case 'visible':
                this.container = event.element;
                this.wrapper = this.container.parentElement;
                this.onShow.emit({});
                this.appendContainer();
                this.moveOnTop();
                this.bindGlobalListeners();
                if (this.modal) {
                    this.enableModality();
                }
                if (!this.modal && this.blockScroll) {
                    DomHandler.addClass(document.body, 'p-overflow-hidden');
                }
                if (this.focusOnShow) {
                    this.focus();
                }
                break;
        }
    }
    onAnimationEnd(event) {
        switch (event.toState) {
            case 'void':
                this.onContainerDestroy();
                this.onHide.emit({});
                break;
        }
    }
    onContainerDestroy() {
        this.unbindGlobalListeners();
        this.dragging = false;
        this.maskVisible = false;
        if (this.maximized) {
            DomHandler.removeClass(document.body, 'p-overflow-hidden');
            this.maximized = false;
        }
        if (this.modal) {
            this.disableModality();
        }
        if (this.blockScroll) {
            DomHandler.removeClass(document.body, 'p-overflow-hidden');
        }
        this.container = null;
        this.wrapper = null;
        this._style = this.originalStyle ? Object.assign({}, this.originalStyle) : {};
    }
    ngOnDestroy() {
        if (this.container) {
            this.restoreAppend();
            this.onContainerDestroy();
        }
    }
}
Dialog.ɵfac = function Dialog_Factory(t) { return new (t || Dialog)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
Dialog.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Dialog, selectors: [["p-dialog"]], contentQueries: function Dialog_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, Header, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, Footer, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.headerFacet = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.footerFacet = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function Dialog_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
        ɵngcc0.ɵɵviewQuery(_c2, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.headerViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.contentViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.footerViewChild = _t.first);
    } }, inputs: { draggable: "draggable", resizable: "resizable", closeOnEscape: "closeOnEscape", closable: "closable", showHeader: "showHeader", blockScroll: "blockScroll", autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", minX: "minX", minY: "minY", focusOnShow: "focusOnShow", keepInViewport: "keepInViewport", focusTrap: "focusTrap", transitionOptions: "transitionOptions", closeIcon: "closeIcon", minimizeIcon: "minimizeIcon", maximizeIcon: "maximizeIcon", positionLeft: "positionLeft", positionTop: "positionTop", responsive: "responsive", breakpoint: "breakpoint", visible: "visible", style: "style", position: "position", header: "header", contentStyle: "contentStyle", contentStyleClass: "contentStyleClass", modal: "modal", dismissableMask: "dismissableMask", rtl: "rtl", appendTo: "appendTo", styleClass: "styleClass", maskStyleClass: "maskStyleClass", maximizable: "maximizable" }, outputs: { onShow: "onShow", onHide: "onHide", visibleChange: "visibleChange", onResizeInit: "onResizeInit", onResizeEnd: "onResizeEnd", onDragEnd: "onDragEnd" }, ngContentSelectors: _c10, decls: 1, vars: 1, consts: [[3, "class", "ngClass", 4, "ngIf"], [3, "ngClass"], ["pFocusTrap", "", "role", "dialog", 3, "ngClass", "ngStyle", "class", "pFocusTrapDisabled", 4, "ngIf"], ["pFocusTrap", "", "role", "dialog", 3, "ngClass", "ngStyle", "pFocusTrapDisabled"], ["container", ""], ["class", "p-dialog-header", 3, "mousedown", 4, "ngIf"], [3, "ngClass", "ngStyle"], ["content", ""], [4, "ngTemplateOutlet"], ["class", "p-dialog-footer", 4, "ngIf"], ["class", "p-resizable-handle", "style", "z-index: 90;", 3, "mousedown", 4, "ngIf"], [1, "p-dialog-header", 3, "mousedown"], ["titlebar", ""], ["class", "p-dialog-title", 4, "ngIf"], [1, "p-dialog-header-icons"], ["type", "button", "tabindex", "-1", "pRipple", "", 3, "ngClass", "click", "keydown.enter", 4, "ngIf"], [1, "p-dialog-title"], ["type", "button", "tabindex", "-1", "pRipple", "", 3, "ngClass", "click", "keydown.enter"], [1, "p-dialog-header-maximize-icon", 3, "ngClass"], [1, "p-dialog-header-close-icon", 3, "ngClass"], [1, "p-dialog-footer"], ["footer", ""], [1, "p-resizable-handle", 2, "z-index", "90", 3, "mousedown"]], template: function Dialog_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c9);
        ɵngcc0.ɵɵtemplate(0, Dialog_div_0_Template, 2, 15, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.maskVisible);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgClass, ɵngcc2.FocusTrap, ɵngcc1.NgStyle, ɵngcc1.NgTemplateOutlet, ɵngcc3.Ripple], styles: [".p-dialog-mask{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;background-color:rgba(0,0,0,0);display:-ms-flexbox;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition-property:background-color;width:100%}.p-dialog,.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{-ms-flex-direction:column;-ms-transform:scale(1);display:-ms-flexbox;display:flex;flex-direction:column;max-height:90%;position:relative;transform:scale(1)}.p-dialog-content{overflow-y:auto}.p-dialog-header{-ms-flex-align:center;-ms-flex-pack:justify;align-items:center;display:-ms-flexbox;display:flex;justify-content:space-between}.p-dialog-footer,.p-dialog-header{-ms-flex-negative:0;flex-shrink:0}.p-dialog .p-dialog-header-icon,.p-dialog .p-dialog-header-icons{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.p-dialog .p-dialog-header-icon{-ms-flex-pack:center;justify-content:center;overflow:hidden;position:relative}.p-dialog-mask.p-dialog-mask-leave{background-color:rgba(0,0,0,0)}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-top .p-dialog{margin:.75rem;transform:translateZ(0)}.p-dialog-maximized{-ms-transform:none;height:100%;max-height:100%;transform:none;transition:none;width:100vw!important}.p-dialog-maximized .p-dialog-content{-ms-flex-positive:1;flex-grow:1}.p-dialog-left{-ms-flex-pack:start;justify-content:flex-start}.p-dialog-right{-ms-flex-pack:end;justify-content:flex-end}.p-dialog-top,.p-dialog-top-left{-ms-flex-align:start;align-items:flex-start}.p-dialog-top-left{-ms-flex-pack:start;justify-content:flex-start}.p-dialog-top-right{-ms-flex-align:start;-ms-flex-pack:end;align-items:flex-start;justify-content:flex-end}.p-dialog-bottom,.p-dialog-bottom-left{-ms-flex-align:end;align-items:flex-end}.p-dialog-bottom-left{-ms-flex-pack:start;justify-content:flex-start}.p-dialog-bottom-right{-ms-flex-align:end;-ms-flex-pack:end;align-items:flex-end;justify-content:flex-end}.p-dialog .p-resizable-handle{bottom:1px;cursor:se-resize;display:block;font-size:.1px;height:12px;position:absolute;right:1px;width:12px}.p-confirm-dialog .p-dialog-content{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}"], encapsulation: 2, data: { animation: [
            trigger('animation', [
                transition('void => visible', [
                    useAnimation(showAnimation)
                ]),
                transition('visible => void', [
                    useAnimation(hideAnimation)
                ])
            ])
        ] }, changeDetection: 0 });
Dialog.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NgZone },
    { type: ChangeDetectorRef }
];
Dialog.propDecorators = {
    header: [{ type: Input }],
    draggable: [{ type: Input }],
    resizable: [{ type: Input }],
    positionLeft: [{ type: Input }],
    positionTop: [{ type: Input }],
    contentStyle: [{ type: Input }],
    contentStyleClass: [{ type: Input }],
    modal: [{ type: Input }],
    closeOnEscape: [{ type: Input }],
    dismissableMask: [{ type: Input }],
    rtl: [{ type: Input }],
    closable: [{ type: Input }],
    responsive: [{ type: Input }],
    appendTo: [{ type: Input }],
    styleClass: [{ type: Input }],
    maskStyleClass: [{ type: Input }],
    showHeader: [{ type: Input }],
    breakpoint: [{ type: Input }],
    blockScroll: [{ type: Input }],
    autoZIndex: [{ type: Input }],
    baseZIndex: [{ type: Input }],
    minX: [{ type: Input }],
    minY: [{ type: Input }],
    focusOnShow: [{ type: Input }],
    maximizable: [{ type: Input }],
    keepInViewport: [{ type: Input }],
    focusTrap: [{ type: Input }],
    transitionOptions: [{ type: Input }],
    closeIcon: [{ type: Input }],
    minimizeIcon: [{ type: Input }],
    maximizeIcon: [{ type: Input }],
    headerFacet: [{ type: ContentChild, args: [Header,] }],
    footerFacet: [{ type: ContentChild, args: [Footer,] }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }],
    headerViewChild: [{ type: ViewChild, args: ['titlebar',] }],
    contentViewChild: [{ type: ViewChild, args: ['content',] }],
    footerViewChild: [{ type: ViewChild, args: ['footer',] }],
    onShow: [{ type: Output }],
    onHide: [{ type: Output }],
    visibleChange: [{ type: Output }],
    onResizeInit: [{ type: Output }],
    onResizeEnd: [{ type: Output }],
    onDragEnd: [{ type: Output }],
    visible: [{ type: Input }],
    style: [{ type: Input }],
    position: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Dialog, [{
        type: Component,
        args: [{
                selector: 'p-dialog',
                template: `
        <div *ngIf="maskVisible" [class]="maskStyleClass"
            [ngClass]="{'p-dialog-mask': true, 'p-component-overlay': this.modal, 'p-dialog-mask-scrollblocker': this.modal || this.blockScroll,
                'p-dialog-left': position === 'left',
                'p-dialog-right': position === 'right',
                'p-dialog-top': position === 'top',
                'p-dialog-top-left': position === 'topleft' || position === 'top-left',
                'p-dialog-top-right': position === 'topright' || position === 'top-right',
                'p-dialog-bottom': position === 'bottom',
                'p-dialog-bottom-left': position === 'bottomleft' || position === 'bottom-left',
                'p-dialog-bottom-right': position === 'bottomright' || position === 'bottom-right'}">
            <div #container [ngClass]="{'p-dialog p-component':true, 'p-dialog-rtl':rtl,'p-dialog-draggable':draggable,'p-dialog-resizable':resizable, 'p-dialog-maximized': maximized}"
                [ngStyle]="style" [class]="styleClass" *ngIf="visible" pFocusTrap [pFocusTrapDisabled]="focusTrap === false"
                [@animation]="{value: 'visible', params: {transform: transformOptions, transition: transitionOptions}}" (@animation.start)="onAnimationStart($event)" (@animation.done)="onAnimationEnd($event)" role="dialog" [attr.aria-labelledby]="id + '-label'">
                <div #titlebar class="p-dialog-header" (mousedown)="initDrag($event)" *ngIf="showHeader">
                    <span [attr.id]="id + '-label'" class="p-dialog-title" *ngIf="header">{{header}}</span>
                    <span [attr.id]="id + '-label'" class="p-dialog-title" *ngIf="headerFacet">
                        <ng-content select="p-header"></ng-content>
                    </span>
                    <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                    <div class="p-dialog-header-icons">
                        <button *ngIf="maximizable" type="button" [ngClass]="{'p-dialog-header-icon p-dialog-header-maximize p-link':true}" (click)="maximize()" (keydown.enter)="maximize()" tabindex="-1" pRipple>
                            <span class="p-dialog-header-maximize-icon" [ngClass]="maximized ? minimizeIcon : maximizeIcon"></span>
                        </button>
                        <button *ngIf="closable" type="button" [ngClass]="{'p-dialog-header-icon p-dialog-header-close p-link':true}" (click)="close($event)" (keydown.enter)="close($event)" tabindex="-1" pRipple>
                            <span class="p-dialog-header-close-icon" [ngClass]="closeIcon"></span>
                        </button>
                    </div>
                </div>
                <div #content [ngClass]="'p-dialog-content'" [ngStyle]="contentStyle" [class]="contentStyleClass">
                    <ng-content></ng-content>
                    <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
                </div>
                <div #footer class="p-dialog-footer" *ngIf="footerFacet || footerTemplate">
                    <ng-content select="p-footer"></ng-content>
                    <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
                </div>
                <div *ngIf="resizable" class="p-resizable-handle" style="z-index: 90;" (mousedown)="initResize($event)"></div>
            </div>
        </div>
    `,
                animations: [
                    trigger('animation', [
                        transition('void => visible', [
                            useAnimation(showAnimation)
                        ]),
                        transition('visible => void', [
                            useAnimation(hideAnimation)
                        ])
                    ])
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-dialog-mask{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;background-color:rgba(0,0,0,0);display:-ms-flexbox;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition-property:background-color;width:100%}.p-dialog,.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{-ms-flex-direction:column;-ms-transform:scale(1);display:-ms-flexbox;display:flex;flex-direction:column;max-height:90%;position:relative;transform:scale(1)}.p-dialog-content{overflow-y:auto}.p-dialog-header{-ms-flex-align:center;-ms-flex-pack:justify;align-items:center;display:-ms-flexbox;display:flex;justify-content:space-between}.p-dialog-footer,.p-dialog-header{-ms-flex-negative:0;flex-shrink:0}.p-dialog .p-dialog-header-icon,.p-dialog .p-dialog-header-icons{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.p-dialog .p-dialog-header-icon{-ms-flex-pack:center;justify-content:center;overflow:hidden;position:relative}.p-dialog-mask.p-dialog-mask-leave{background-color:rgba(0,0,0,0)}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-top .p-dialog{margin:.75rem;transform:translateZ(0)}.p-dialog-maximized{-ms-transform:none;height:100%;max-height:100%;transform:none;transition:none;width:100vw!important}.p-dialog-maximized .p-dialog-content{-ms-flex-positive:1;flex-grow:1}.p-dialog-left{-ms-flex-pack:start;justify-content:flex-start}.p-dialog-right{-ms-flex-pack:end;justify-content:flex-end}.p-dialog-top,.p-dialog-top-left{-ms-flex-align:start;align-items:flex-start}.p-dialog-top-left{-ms-flex-pack:start;justify-content:flex-start}.p-dialog-top-right{-ms-flex-align:start;-ms-flex-pack:end;align-items:flex-start;justify-content:flex-end}.p-dialog-bottom,.p-dialog-bottom-left{-ms-flex-align:end;align-items:flex-end}.p-dialog-bottom-left{-ms-flex-pack:start;justify-content:flex-start}.p-dialog-bottom-right{-ms-flex-align:end;-ms-flex-pack:end;align-items:flex-end;justify-content:flex-end}.p-dialog .p-resizable-handle{bottom:1px;cursor:se-resize;display:block;font-size:.1px;height:12px;position:absolute;right:1px;width:12px}.p-confirm-dialog .p-dialog-content{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.NgZone }, { type: ɵngcc0.ChangeDetectorRef }]; }, { draggable: [{
            type: Input
        }], resizable: [{
            type: Input
        }], closeOnEscape: [{
            type: Input
        }], closable: [{
            type: Input
        }], showHeader: [{
            type: Input
        }], blockScroll: [{
            type: Input
        }], autoZIndex: [{
            type: Input
        }], baseZIndex: [{
            type: Input
        }], minX: [{
            type: Input
        }], minY: [{
            type: Input
        }], focusOnShow: [{
            type: Input
        }], keepInViewport: [{
            type: Input
        }], focusTrap: [{
            type: Input
        }], transitionOptions: [{
            type: Input
        }], closeIcon: [{
            type: Input
        }], minimizeIcon: [{
            type: Input
        }], maximizeIcon: [{
            type: Input
        }], onShow: [{
            type: Output
        }], onHide: [{
            type: Output
        }], visibleChange: [{
            type: Output
        }], onResizeInit: [{
            type: Output
        }], onResizeEnd: [{
            type: Output
        }], onDragEnd: [{
            type: Output
        }], positionLeft: [{
            type: Input
        }], positionTop: [{
            type: Input
        }], responsive: [{
            type: Input
        }], breakpoint: [{
            type: Input
        }], visible: [{
            type: Input
        }], style: [{
            type: Input
        }], position: [{
            type: Input
        }], header: [{
            type: Input
        }], contentStyle: [{
            type: Input
        }], contentStyleClass: [{
            type: Input
        }], modal: [{
            type: Input
        }], dismissableMask: [{
            type: Input
        }], rtl: [{
            type: Input
        }], appendTo: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], maskStyleClass: [{
            type: Input
        }], maximizable: [{
            type: Input
        }], headerFacet: [{
            type: ContentChild,
            args: [Header]
        }], footerFacet: [{
            type: ContentChild,
            args: [Footer]
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }], headerViewChild: [{
            type: ViewChild,
            args: ['titlebar']
        }], contentViewChild: [{
            type: ViewChild,
            args: ['content']
        }], footerViewChild: [{
            type: ViewChild,
            args: ['footer']
        }] }); })();
export class DialogModule {
}
DialogModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: DialogModule });
DialogModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function DialogModule_Factory(t) { return new (t || DialogModule)(); }, imports: [[CommonModule, FocusTrapModule, RippleModule], SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DialogModule, { declarations: function () { return [Dialog]; }, imports: function () { return [CommonModule, FocusTrapModule, RippleModule]; }, exports: function () { return [Dialog, SharedModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DialogModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FocusTrapModule, RippleModule],
                exports: [Dialog, SharedModule],
                declarations: [Dialog]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQVcsS0FBSyxFQUFDLE1BQU0sRUFBQyxZQUFZLEVBQUMsU0FBUyxFQUMvRSxlQUFlLEVBQVcsU0FBUyxFQUFDLE1BQU0sRUFBRSxpQkFBaUIsRUFBUyx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBaUMsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hMLE9BQU8sRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQWtCLFNBQVMsRUFBRSxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUM5RyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUN2QyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxZQUFZLEVBQUUsYUFBYSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVDLElBQUksR0FBRyxHQUFXLENBQUMsQ0FBQztBQUVwQixNQUFNLGFBQWEsR0FBRyxTQUFTLENBQUM7QUFDaEMsSUFBSSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQWtiaEIsTUFBTSxPQUFPLFlBQVk7QUFBRzt3Q0FMM0IsUUFBUSxTQUFDO01BQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFDLGVBQWUsRUFBQyxZQUFZLENBQUMsa0JBQ3BELE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBQyxZQUFZLENBQUMsa0JBQzlCLFlBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQyxjQUN6Qjs7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLENvbXBvbmVudCxFbGVtZW50UmVmLE9uRGVzdHJveSxJbnB1dCxPdXRwdXQsRXZlbnRFbWl0dGVyLFJlbmRlcmVyMixcbiAgICBDb250ZW50Q2hpbGRyZW4sUXVlcnlMaXN0LFZpZXdDaGlsZCxOZ1pvbmUsIENoYW5nZURldGVjdG9yUmVmLFZpZXdSZWYsQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9uLCBBZnRlckNvbnRlbnRJbml0LCBUZW1wbGF0ZVJlZiwgQ29udGVudENoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dHJpZ2dlcixzdHlsZSx0cmFuc2l0aW9uLGFuaW1hdGUsIEFuaW1hdGlvbkV2ZW50LCBhbmltYXRpb24sIHVzZUFuaW1hdGlvbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7RG9tSGFuZGxlcn0gZnJvbSAncHJpbWVuZy9kb20nO1xuaW1wb3J0IHtIZWFkZXIsRm9vdGVyLFNoYXJlZE1vZHVsZSwgUHJpbWVUZW1wbGF0ZX0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHtGb2N1c1RyYXBNb2R1bGV9IGZyb20gJ3ByaW1lbmcvZm9jdXN0cmFwJztcbmltcG9ydCB7UmlwcGxlTW9kdWxlfSBmcm9tICdwcmltZW5nL3JpcHBsZSc7XG5cbmxldCBpZHg6IG51bWJlciA9IDA7XG5cbmNvbnN0IHNob3dBbmltYXRpb24gPSBhbmltYXRpb24oW1xuICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAne3t0cmFuc2Zvcm19fScsIG9wYWNpdHk6IDAgfSksXG4gICAgYW5pbWF0ZSgne3t0cmFuc2l0aW9ufX0nKVxuXSk7XG5cbmNvbnN0IGhpZGVBbmltYXRpb24gPSBhbmltYXRpb24oW1xuICAgIGFuaW1hdGUoJ3t7dHJhbnNpdGlvbn19Jywgc3R5bGUoeyB0cmFuc2Zvcm06ICd7e3RyYW5zZm9ybX19Jywgb3BhY2l0eTogMCB9KSlcbl0pO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtZGlhbG9nJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2ICpuZ0lmPVwibWFza1Zpc2libGVcIiBbY2xhc3NdPVwibWFza1N0eWxlQ2xhc3NcIlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwieydwLWRpYWxvZy1tYXNrJzogdHJ1ZSwgJ3AtY29tcG9uZW50LW92ZXJsYXknOiB0aGlzLm1vZGFsLCAncC1kaWFsb2ctbWFzay1zY3JvbGxibG9ja2VyJzogdGhpcy5tb2RhbCB8fCB0aGlzLmJsb2NrU2Nyb2xsLFxuICAgICAgICAgICAgICAgICdwLWRpYWxvZy1sZWZ0JzogcG9zaXRpb24gPT09ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICAncC1kaWFsb2ctcmlnaHQnOiBwb3NpdGlvbiA9PT0gJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAncC1kaWFsb2ctdG9wJzogcG9zaXRpb24gPT09ICd0b3AnLFxuICAgICAgICAgICAgICAgICdwLWRpYWxvZy10b3AtbGVmdCc6IHBvc2l0aW9uID09PSAndG9wbGVmdCcgfHwgcG9zaXRpb24gPT09ICd0b3AtbGVmdCcsXG4gICAgICAgICAgICAgICAgJ3AtZGlhbG9nLXRvcC1yaWdodCc6IHBvc2l0aW9uID09PSAndG9wcmlnaHQnIHx8IHBvc2l0aW9uID09PSAndG9wLXJpZ2h0JyxcbiAgICAgICAgICAgICAgICAncC1kaWFsb2ctYm90dG9tJzogcG9zaXRpb24gPT09ICdib3R0b20nLFxuICAgICAgICAgICAgICAgICdwLWRpYWxvZy1ib3R0b20tbGVmdCc6IHBvc2l0aW9uID09PSAnYm90dG9tbGVmdCcgfHwgcG9zaXRpb24gPT09ICdib3R0b20tbGVmdCcsXG4gICAgICAgICAgICAgICAgJ3AtZGlhbG9nLWJvdHRvbS1yaWdodCc6IHBvc2l0aW9uID09PSAnYm90dG9tcmlnaHQnIHx8IHBvc2l0aW9uID09PSAnYm90dG9tLXJpZ2h0J31cIj5cbiAgICAgICAgICAgIDxkaXYgI2NvbnRhaW5lciBbbmdDbGFzc109XCJ7J3AtZGlhbG9nIHAtY29tcG9uZW50Jzp0cnVlLCAncC1kaWFsb2ctcnRsJzpydGwsJ3AtZGlhbG9nLWRyYWdnYWJsZSc6ZHJhZ2dhYmxlLCdwLWRpYWxvZy1yZXNpemFibGUnOnJlc2l6YWJsZSwgJ3AtZGlhbG9nLW1heGltaXplZCc6IG1heGltaXplZH1cIlxuICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInN0eWxlXCIgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIiAqbmdJZj1cInZpc2libGVcIiBwRm9jdXNUcmFwIFtwRm9jdXNUcmFwRGlzYWJsZWRdPVwiZm9jdXNUcmFwID09PSBmYWxzZVwiXG4gICAgICAgICAgICAgICAgW0BhbmltYXRpb25dPVwie3ZhbHVlOiAndmlzaWJsZScsIHBhcmFtczoge3RyYW5zZm9ybTogdHJhbnNmb3JtT3B0aW9ucywgdHJhbnNpdGlvbjogdHJhbnNpdGlvbk9wdGlvbnN9fVwiIChAYW5pbWF0aW9uLnN0YXJ0KT1cIm9uQW5pbWF0aW9uU3RhcnQoJGV2ZW50KVwiIChAYW5pbWF0aW9uLmRvbmUpPVwib25BbmltYXRpb25FbmQoJGV2ZW50KVwiIHJvbGU9XCJkaWFsb2dcIiBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiaWQgKyAnLWxhYmVsJ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgI3RpdGxlYmFyIGNsYXNzPVwicC1kaWFsb2ctaGVhZGVyXCIgKG1vdXNlZG93bik9XCJpbml0RHJhZygkZXZlbnQpXCIgKm5nSWY9XCJzaG93SGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIFthdHRyLmlkXT1cImlkICsgJy1sYWJlbCdcIiBjbGFzcz1cInAtZGlhbG9nLXRpdGxlXCIgKm5nSWY9XCJoZWFkZXJcIj57e2hlYWRlcn19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBbYXR0ci5pZF09XCJpZCArICctbGFiZWwnXCIgY2xhc3M9XCJwLWRpYWxvZy10aXRsZVwiICpuZ0lmPVwiaGVhZGVyRmFjZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInAtaGVhZGVyXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJoZWFkZXJUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1kaWFsb2ctaGVhZGVyLWljb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwibWF4aW1pemFibGVcIiB0eXBlPVwiYnV0dG9uXCIgW25nQ2xhc3NdPVwieydwLWRpYWxvZy1oZWFkZXItaWNvbiBwLWRpYWxvZy1oZWFkZXItbWF4aW1pemUgcC1saW5rJzp0cnVlfVwiIChjbGljayk9XCJtYXhpbWl6ZSgpXCIgKGtleWRvd24uZW50ZXIpPVwibWF4aW1pemUoKVwiIHRhYmluZGV4PVwiLTFcIiBwUmlwcGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1kaWFsb2ctaGVhZGVyLW1heGltaXplLWljb25cIiBbbmdDbGFzc109XCJtYXhpbWl6ZWQgPyBtaW5pbWl6ZUljb24gOiBtYXhpbWl6ZUljb25cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJjbG9zYWJsZVwiIHR5cGU9XCJidXR0b25cIiBbbmdDbGFzc109XCJ7J3AtZGlhbG9nLWhlYWRlci1pY29uIHAtZGlhbG9nLWhlYWRlci1jbG9zZSBwLWxpbmsnOnRydWV9XCIgKGNsaWNrKT1cImNsb3NlKCRldmVudClcIiAoa2V5ZG93bi5lbnRlcik9XCJjbG9zZSgkZXZlbnQpXCIgdGFiaW5kZXg9XCItMVwiIHBSaXBwbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLWRpYWxvZy1oZWFkZXItY2xvc2UtaWNvblwiIFtuZ0NsYXNzXT1cImNsb3NlSWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2ICNjb250ZW50IFtuZ0NsYXNzXT1cIidwLWRpYWxvZy1jb250ZW50J1wiIFtuZ1N0eWxlXT1cImNvbnRlbnRTdHlsZVwiIFtjbGFzc109XCJjb250ZW50U3R5bGVDbGFzc1wiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb250ZW50VGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2ICNmb290ZXIgY2xhc3M9XCJwLWRpYWxvZy1mb290ZXJcIiAqbmdJZj1cImZvb3RlckZhY2V0IHx8IGZvb3RlclRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInAtZm9vdGVyXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZm9vdGVyVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwicmVzaXphYmxlXCIgY2xhc3M9XCJwLXJlc2l6YWJsZS1oYW5kbGVcIiBzdHlsZT1cInotaW5kZXg6IDkwO1wiIChtb3VzZWRvd24pPVwiaW5pdFJlc2l6ZSgkZXZlbnQpXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoJ2FuaW1hdGlvbicsIFtcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gdmlzaWJsZScsIFtcbiAgICAgICAgICAgICAgICB1c2VBbmltYXRpb24oc2hvd0FuaW1hdGlvbilcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgdHJhbnNpdGlvbigndmlzaWJsZSA9PiB2b2lkJywgW1xuICAgICAgICAgICAgICAgIHVzZUFuaW1hdGlvbihoaWRlQW5pbWF0aW9uKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICBdLFxuICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBzdHlsZVVybHM6IFsnLi4vZGlhbG9nL2RpYWxvZy5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2cgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKSBoZWFkZXI6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGRyYWdnYWJsZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSByZXNpemFibGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQElucHV0KCkgZ2V0IHBvc2l0aW9uTGVmdCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9O1xuXG4gICAgc2V0IHBvc2l0aW9uTGVmdChfcG9zaXRpb25MZWZ0OiBudW1iZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJwb3NpdGlvbkxlZnQgcHJvcGVydHkgaXMgZGVwcmVjYXRlZC5cIik7XG4gICAgfVxuXG4gICAgQElucHV0KCkgZ2V0IHBvc2l0aW9uVG9wKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH07XG5cbiAgICBzZXQgcG9zaXRpb25Ub3AoX3Bvc2l0aW9uVG9wOiBudW1iZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJwb3NpdGlvblRvcCBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLlwiKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKSBjb250ZW50U3R5bGU6IGFueTtcblxuICAgIEBJbnB1dCgpIGNvbnRlbnRTdHlsZUNsYXNzOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBtb2RhbDogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIGNsb3NlT25Fc2NhcGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQElucHV0KCkgZGlzbWlzc2FibGVNYXNrOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgcnRsOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgY2xvc2FibGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQElucHV0KCkgZ2V0IHJlc3BvbnNpdmUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgc2V0IHJlc3BvbnNpdmUoX3Jlc3BvbnNpdmU6IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZXNwb25zaXZlIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuXCIpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpIGFwcGVuZFRvOiBhbnk7XG5cbiAgICBASW5wdXQoKSBzdHlsZUNsYXNzOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBtYXNrU3R5bGVDbGFzczogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgc2hvd0hlYWRlcjogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSBnZXQgYnJlYWtwb2ludCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gNjQ5O1xuICAgIH07XG5cbiAgICBzZXQgYnJlYWtwb2ludChfYnJlYWtwb2ludDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQnJlYWtwb2ludCBwcm9wZXJ0eSBpcyBub3QgdXRpbGl6ZWQgYW5kIGRlcHJlY2F0ZWQsIHVzZSBDU1MgbWVkaWEgcXVlcmllcyBpbnN0ZWFkLlwiKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKSBibG9ja1Njcm9sbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQElucHV0KCkgYXV0b1pJbmRleDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSBiYXNlWkluZGV4OiBudW1iZXIgPSAwO1xuXG4gICAgQElucHV0KCkgbWluWDogbnVtYmVyID0gMDtcblxuICAgIEBJbnB1dCgpIG1pblk6IG51bWJlciA9IDA7XG5cbiAgICBASW5wdXQoKSBmb2N1c09uU2hvdzogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSBtYXhpbWl6YWJsZTogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIGtlZXBJblZpZXdwb3J0OiBib29sZWFuID0gdHJ1ZTtcblxuICAgIEBJbnB1dCgpIGZvY3VzVHJhcDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSB0cmFuc2l0aW9uT3B0aW9uczogc3RyaW5nID0gJzE1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJztcblxuICAgIEBJbnB1dCgpIGNsb3NlSWNvbjogc3RyaW5nID0gJ3BpIHBpLXRpbWVzJztcblxuICAgIEBJbnB1dCgpIG1pbmltaXplSWNvbjogc3RyaW5nID0gJ3BpIHBpLXdpbmRvdy1taW5pbWl6ZSc7XG5cbiAgICBASW5wdXQoKSBtYXhpbWl6ZUljb246IHN0cmluZyA9ICdwaSBwaS13aW5kb3ctbWF4aW1pemUnO1xuXG4gICAgQENvbnRlbnRDaGlsZChIZWFkZXIpIGhlYWRlckZhY2V0OiBRdWVyeUxpc3Q8SGVhZGVyPjtcblxuICAgIEBDb250ZW50Q2hpbGQoRm9vdGVyKSBmb290ZXJGYWNldDogUXVlcnlMaXN0PEZvb3Rlcj47XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFByaW1lVGVtcGxhdGUpIHRlbXBsYXRlczogUXVlcnlMaXN0PGFueT47XG5cbiAgICBAVmlld0NoaWxkKCd0aXRsZWJhcicpIGhlYWRlclZpZXdDaGlsZDogRWxlbWVudFJlZjtcblxuICAgIEBWaWV3Q2hpbGQoJ2NvbnRlbnQnKSBjb250ZW50Vmlld0NoaWxkOiBFbGVtZW50UmVmO1xuXG4gICAgQFZpZXdDaGlsZCgnZm9vdGVyJykgZm9vdGVyVmlld0NoaWxkOiBFbGVtZW50UmVmO1xuXG4gICAgQE91dHB1dCgpIG9uU2hvdzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgb25IaWRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSB2aXNpYmxlQ2hhbmdlOkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uUmVzaXplSW5pdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgb25SZXNpemVFbmQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uRHJhZ0VuZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBoZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIGNvbnRlbnRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIGZvb3RlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgX3Zpc2libGU6IGJvb2xlYW47XG5cbiAgICBtYXNrVmlzaWJsZTogYm9vbGVhbjtcblxuICAgIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG5cbiAgICB3cmFwcGVyOiBIVE1MRWxlbWVudDtcblxuICAgIGRyYWdnaW5nOiBib29sZWFuO1xuXG4gICAgZG9jdW1lbnREcmFnTGlzdGVuZXI6IGFueTtcblxuICAgIGRvY3VtZW50RHJhZ0VuZExpc3RlbmVyOiBhbnk7XG5cbiAgICByZXNpemluZzogYm9vbGVhbjtcblxuICAgIGRvY3VtZW50UmVzaXplTGlzdGVuZXI6IGFueTtcblxuICAgIGRvY3VtZW50UmVzaXplRW5kTGlzdGVuZXI6IGFueTtcblxuICAgIGRvY3VtZW50RXNjYXBlTGlzdGVuZXI6IEZ1bmN0aW9uO1xuXG4gICAgbWFza0NsaWNrTGlzdGVuZXI6IEZ1bmN0aW9uO1xuXG4gICAgbGFzdFBhZ2VYOiBudW1iZXI7XG5cbiAgICBsYXN0UGFnZVk6IG51bWJlcjtcblxuICAgIHByZXZlbnRWaXNpYmxlQ2hhbmdlUHJvcGFnYXRpb246IGJvb2xlYW47XG5cbiAgICBtYXhpbWl6ZWQ6IGJvb2xlYW47XG5cbiAgICBwcmVNYXhpbWl6ZUNvbnRlbnRIZWlnaHQ6IG51bWJlcjtcblxuICAgIHByZU1heGltaXplQ29udGFpbmVyV2lkdGg6IG51bWJlcjtcblxuICAgIHByZU1heGltaXplQ29udGFpbmVySGVpZ2h0OiBudW1iZXI7XG5cbiAgICBwcmVNYXhpbWl6ZVBhZ2VYOiBudW1iZXI7XG5cbiAgICBwcmVNYXhpbWl6ZVBhZ2VZOiBudW1iZXI7XG5cbiAgICBpZDogc3RyaW5nID0gYHAtZGlhbG9nLSR7aWR4Kyt9YDtcblxuICAgIF9zdHlsZTogYW55ID0ge307XG5cbiAgICBfcG9zaXRpb246IHN0cmluZyA9IFwiY2VudGVyXCI7XG5cbiAgICBvcmlnaW5hbFN0eWxlOiBhbnk7XG5cbiAgICB0cmFuc2Zvcm1PcHRpb25zOiBhbnkgPSBcInNjYWxlKDAuNylcIjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZiwgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHB1YmxpYyB6b25lOiBOZ1pvbmUsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoKGl0ZW0uZ2V0VHlwZSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnaGVhZGVyJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdjb250ZW50JzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50VGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnZm9vdGVyJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb290ZXJUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIEBJbnB1dCgpIGdldCB2aXNpYmxlKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92aXNpYmxlO1xuICAgIH1cbiAgICBzZXQgdmlzaWJsZSh2YWx1ZTphbnkpIHtcbiAgICAgICAgdGhpcy5fdmlzaWJsZSA9IHZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzLl92aXNpYmxlICYmICF0aGlzLm1hc2tWaXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLm1hc2tWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBJbnB1dCgpIGdldCBzdHlsZSgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3R5bGU7XG4gICAgfVxuICAgIHNldCBzdHlsZSh2YWx1ZTphbnkpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9zdHlsZSA9IHsuLi52YWx1ZX07XG4gICAgICAgICAgICB0aGlzLm9yaWdpbmFsU3R5bGUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBJbnB1dCgpIGdldCBwb3NpdGlvbigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XG4gICAgfTtcblxuICAgIHNldCBwb3NpdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0gdmFsdWU7XG5cbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAndG9wbGVmdCc6XG4gICAgICAgICAgICBjYXNlICdib3R0b21sZWZ0JzpcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtT3B0aW9ucyA9IFwidHJhbnNsYXRlM2QoLTEwMCUsIDBweCwgMHB4KVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0b3ByaWdodCc6XG4gICAgICAgICAgICBjYXNlICdib3R0b21yaWdodCc6XG4gICAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm1PcHRpb25zID0gXCJ0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweClcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybU9wdGlvbnMgPSBcInRyYW5zbGF0ZTNkKDBweCwgMTAwJSwgMHB4KVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0b3AnOlxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtT3B0aW9ucyA9IFwidHJhbnNsYXRlM2QoMHB4LCAtMTAwJSwgMHB4KVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtT3B0aW9ucyA9IFwic2NhbGUoMC43KVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb2N1cygpIHtcbiAgICAgICAgbGV0IGZvY3VzYWJsZSA9IERvbUhhbmRsZXIuZmluZFNpbmdsZSh0aGlzLmNvbnRhaW5lciwgJ1thdXRvZm9jdXNdJyk7XG4gICAgICAgIGlmIChmb2N1c2FibGUpIHtcbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBmb2N1c2FibGUuZm9jdXMoKSwgNSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsb3NlKGV2ZW50OiBFdmVudCkge1xuICAgICAgICB0aGlzLnZpc2libGVDaGFuZ2UuZW1pdChmYWxzZSk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgZW5hYmxlTW9kYWxpdHkoKSB7XG4gICAgICAgIGlmICh0aGlzLmNsb3NhYmxlICYmIHRoaXMuZGlzbWlzc2FibGVNYXNrKSB7XG4gICAgICAgICAgICB0aGlzLm1hc2tDbGlja0xpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy53cmFwcGVyLCAnY2xpY2snLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLndyYXBwZXIgJiYgdGhpcy53cmFwcGVyLmlzU2FtZU5vZGUoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm1vZGFsKSB7XG4gICAgICAgICAgICBEb21IYW5kbGVyLmFkZENsYXNzKGRvY3VtZW50LmJvZHksICdwLW92ZXJmbG93LWhpZGRlbicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzYWJsZU1vZGFsaXR5KCkge1xuICAgICAgICBpZiAodGhpcy53cmFwcGVyKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kaXNtaXNzYWJsZU1hc2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuYmluZE1hc2tDbGlja0xpc3RlbmVyKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm1vZGFsKSB7XG4gICAgICAgICAgICAgICAgRG9tSGFuZGxlci5yZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCAncC1vdmVyZmxvdy1oaWRkZW4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCEodGhpcy5jZCBhcyBWaWV3UmVmKS5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1heGltaXplKCkge1xuICAgICAgICB0aGlzLm1heGltaXplZCA9ICF0aGlzLm1heGltaXplZDtcblxuICAgICAgICBpZiAoIXRoaXMubW9kYWwgJiYgIXRoaXMuYmxvY2tTY3JvbGwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1heGltaXplZClcbiAgICAgICAgICAgICAgICBEb21IYW5kbGVyLmFkZENsYXNzKGRvY3VtZW50LmJvZHksICdwLW92ZXJmbG93LWhpZGRlbicpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIERvbUhhbmRsZXIucmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ3Atb3ZlcmZsb3ctaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmJpbmRNYXNrQ2xpY2tMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKHRoaXMubWFza0NsaWNrTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMubWFza0NsaWNrTGlzdGVuZXIoKTtcbiAgICAgICAgICAgIHRoaXMubWFza0NsaWNrTGlzdGVuZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZU9uVG9wKCkge1xuICAgICAgICBpZiAodGhpcy5hdXRvWkluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS56SW5kZXggPSBTdHJpbmcodGhpcy5iYXNlWkluZGV4ICsgKCsrRG9tSGFuZGxlci56aW5kZXgpKTtcbiAgICAgICAgICAgIHRoaXMud3JhcHBlci5zdHlsZS56SW5kZXggPSBTdHJpbmcodGhpcy5iYXNlWkluZGV4ICsgKERvbUhhbmRsZXIuemluZGV4IC0gMSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdERyYWcoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgaWYgKERvbUhhbmRsZXIuaGFzQ2xhc3MoZXZlbnQudGFyZ2V0LCAncC1kaWFsb2ctaGVhZGVyLWljb24nKSB8fMKgRG9tSGFuZGxlci5oYXNDbGFzcygoPEhUTUxFbGVtZW50PiBldmVudC50YXJnZXQpLnBhcmVudEVsZW1lbnQsICdwLWRpYWxvZy1oZWFkZXItaWNvbicpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kcmFnZ2FibGUpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5sYXN0UGFnZVggPSBldmVudC5wYWdlWDtcbiAgICAgICAgICAgIHRoaXMubGFzdFBhZ2VZID0gZXZlbnQucGFnZVk7XG5cbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLm1hcmdpbiA9ICcwJztcbiAgICAgICAgICAgIERvbUhhbmRsZXIuYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ3AtdW5zZWxlY3RhYmxlLXRleHQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5mb2N1c1RyYXApIHtcbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gOSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgZm9jdXNhYmxlRWxlbWVudHMgPSBEb21IYW5kbGVyLmdldEZvY3VzYWJsZUVsZW1lbnRzKHRoaXMuY29udGFpbmVyKTtcblxuICAgICAgICAgICAgICAgIGlmIChmb2N1c2FibGVFbGVtZW50cyAmJiBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZm9jdXNhYmxlRWxlbWVudHNbMF0ub3duZXJEb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb2N1c2FibGVFbGVtZW50c1swXS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvY3VzZWRJbmRleCA9IGZvY3VzYWJsZUVsZW1lbnRzLmluZGV4T2YoZm9jdXNhYmxlRWxlbWVudHNbMF0ub3duZXJEb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvY3VzZWRJbmRleCA9PSAtMSB8fCBmb2N1c2VkSW5kZXggPT09IDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzYWJsZUVsZW1lbnRzW2ZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCAtIDFdLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c2FibGVFbGVtZW50c1tmb2N1c2VkSW5kZXggLSAxXS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvY3VzZWRJbmRleCA9PSAtMSB8fCBmb2N1c2VkSW5kZXggPT09IChmb2N1c2FibGVFbGVtZW50cy5sZW5ndGggLSAxKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNhYmxlRWxlbWVudHNbMF0uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzYWJsZUVsZW1lbnRzW2ZvY3VzZWRJbmRleCArIDFdLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRyYWcoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgICAgICAgIGxldCBjb250YWluZXJXaWR0aCA9IERvbUhhbmRsZXIuZ2V0T3V0ZXJXaWR0aCh0aGlzLmNvbnRhaW5lcik7XG4gICAgICAgICAgICBsZXQgY29udGFpbmVySGVpZ2h0ID0gRG9tSGFuZGxlci5nZXRPdXRlckhlaWdodCh0aGlzLmNvbnRhaW5lcik7XG4gICAgICAgICAgICBsZXQgZGVsdGFYID0gZXZlbnQucGFnZVggLSB0aGlzLmxhc3RQYWdlWDtcbiAgICAgICAgICAgIGxldCBkZWx0YVkgPSBldmVudC5wYWdlWSAtIHRoaXMubGFzdFBhZ2VZO1xuICAgICAgICAgICAgbGV0IG9mZnNldCA9IERvbUhhbmRsZXIuZ2V0T2Zmc2V0KHRoaXMuY29udGFpbmVyKTtcbiAgICAgICAgICAgIGxldCBsZWZ0UG9zID0gb2Zmc2V0LmxlZnQgKyBkZWx0YVg7XG4gICAgICAgICAgICBsZXQgdG9wUG9zID0gb2Zmc2V0LnRvcCArIGRlbHRhWTtcbiAgICAgICAgICAgIGxldCB2aWV3cG9ydCA9IERvbUhhbmRsZXIuZ2V0Vmlld3BvcnQoKTtcblxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5rZWVwSW5WaWV3cG9ydCkge1xuICAgICAgICAgICAgICAgIGlmIChsZWZ0UG9zID49IHRoaXMubWluWCAmJiAobGVmdFBvcyArIGNvbnRhaW5lcldpZHRoKSA8IHZpZXdwb3J0LndpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0eWxlLmxlZnQgPSBsZWZ0UG9zICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0UGFnZVggPSBldmVudC5wYWdlWDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUubGVmdCA9IGxlZnRQb3MgKyAncHgnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0b3BQb3MgPj0gdGhpcy5taW5ZICYmICh0b3BQb3MgKyBjb250YWluZXJIZWlnaHQpIDwgdmlld3BvcnQuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0eWxlLnRvcCA9IHRvcFBvcyArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFBhZ2VZID0gZXZlbnQucGFnZVk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnRvcCA9IHRvcFBvcyArICdweCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0UGFnZVggPSBldmVudC5wYWdlWDtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gbGVmdFBvcyArICdweCc7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0UGFnZVkgPSBldmVudC5wYWdlWTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS50b3AgPSB0b3BQb3MgKyAncHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW5kRHJhZyhldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5kcmFnZ2luZykge1xuICAgICAgICAgICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgRG9tSGFuZGxlci5yZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCAncC11bnNlbGVjdGFibGUtdGV4dCcpO1xuICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICAgICB0aGlzLm9uRHJhZ0VuZC5lbWl0KGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc2V0UG9zaXRpb24oKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJyc7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmxlZnQgPSAnJztcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUudG9wID0gJyc7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLm1hcmdpbiA9ICcnO1xuICAgIH1cblxuICAgIC8vYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICAgIGNlbnRlcigpIHtcbiAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgaW5pdFJlc2l6ZShldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5yZXNpemFibGUpIHtcbiAgICAgICAgICAgIHRoaXMucmVzaXppbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5sYXN0UGFnZVggPSBldmVudC5wYWdlWDtcbiAgICAgICAgICAgIHRoaXMubGFzdFBhZ2VZID0gZXZlbnQucGFnZVk7XG4gICAgICAgICAgICBEb21IYW5kbGVyLmFkZENsYXNzKGRvY3VtZW50LmJvZHksICdwLXVuc2VsZWN0YWJsZS10ZXh0Jyk7XG4gICAgICAgICAgICB0aGlzLm9uUmVzaXplSW5pdC5lbWl0KGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUmVzaXplKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnJlc2l6aW5nKSB7XG4gICAgICAgICAgICBsZXQgZGVsdGFYID0gZXZlbnQucGFnZVggLSB0aGlzLmxhc3RQYWdlWDtcbiAgICAgICAgICAgIGxldCBkZWx0YVkgPSBldmVudC5wYWdlWSAtIHRoaXMubGFzdFBhZ2VZO1xuICAgICAgICAgICAgbGV0IGNvbnRhaW5lcldpZHRoID0gRG9tSGFuZGxlci5nZXRPdXRlcldpZHRoKHRoaXMuY29udGFpbmVyKTtcbiAgICAgICAgICAgIGxldCBjb250YWluZXJIZWlnaHQgPSBEb21IYW5kbGVyLmdldE91dGVySGVpZ2h0KHRoaXMuY29udGFpbmVyKTtcbiAgICAgICAgICAgIGxldCBjb250ZW50SGVpZ2h0ID0gRG9tSGFuZGxlci5nZXRPdXRlckhlaWdodCh0aGlzLmNvbnRlbnRWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICBsZXQgbmV3V2lkdGggPSBjb250YWluZXJXaWR0aCArIGRlbHRhWDtcbiAgICAgICAgICAgIGxldCBuZXdIZWlnaHQgPSBjb250YWluZXJIZWlnaHQgKyBkZWx0YVk7XG4gICAgICAgICAgICBsZXQgbWluV2lkdGggPSB0aGlzLmNvbnRhaW5lci5zdHlsZS5taW5XaWR0aDtcbiAgICAgICAgICAgIGxldCBtaW5IZWlnaHQgPSB0aGlzLmNvbnRhaW5lci5zdHlsZS5taW5IZWlnaHQ7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gRG9tSGFuZGxlci5nZXRPZmZzZXQodGhpcy5jb250YWluZXIpO1xuICAgICAgICAgICAgbGV0IHZpZXdwb3J0ID0gRG9tSGFuZGxlci5nZXRWaWV3cG9ydCgpO1xuICAgICAgICAgICAgbGV0IGhhc0JlZW5EcmFnZ2VkID0gIXBhcnNlSW50KHRoaXMuY29udGFpbmVyLnN0eWxlLnRvcCkgfHwgIXBhcnNlSW50KHRoaXMuY29udGFpbmVyLnN0eWxlLmxlZnQpO1xuXG4gICAgICAgICAgICBpZiAoaGFzQmVlbkRyYWdnZWQpIHtcbiAgICAgICAgICAgICAgICBuZXdXaWR0aCArPSBkZWx0YVg7XG4gICAgICAgICAgICAgICAgbmV3SGVpZ2h0ICs9IGRlbHRhWTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCghbWluV2lkdGggfHwgbmV3V2lkdGggPiBwYXJzZUludChtaW5XaWR0aCkpICYmIChvZmZzZXQubGVmdCArIG5ld1dpZHRoKSA8IHZpZXdwb3J0LndpZHRoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3R5bGUud2lkdGggPSBuZXdXaWR0aCArICdweCc7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUud2lkdGggPSB0aGlzLl9zdHlsZS53aWR0aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCghbWluSGVpZ2h0IHx8IG5ld0hlaWdodCA+IHBhcnNlSW50KG1pbkhlaWdodCkpICYmIChvZmZzZXQudG9wICsgbmV3SGVpZ2h0KSA8IHZpZXdwb3J0LmhlaWdodCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudFZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IGNvbnRlbnRIZWlnaHQgKyBuZXdIZWlnaHQgLSBjb250YWluZXJIZWlnaHQgKyAncHgnO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3N0eWxlLmhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdHlsZS5oZWlnaHQgPSBuZXdIZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSB0aGlzLl9zdHlsZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmxhc3RQYWdlWCA9IGV2ZW50LnBhZ2VYO1xuICAgICAgICAgICAgdGhpcy5sYXN0UGFnZVkgPSBldmVudC5wYWdlWTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc2l6ZUVuZChldmVudCkge1xuICAgICAgICBpZiAodGhpcy5yZXNpemluZykge1xuICAgICAgICAgICAgdGhpcy5yZXNpemluZyA9IGZhbHNlO1xuICAgICAgICAgICAgRG9tSGFuZGxlci5yZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCAncC11bnNlbGVjdGFibGUtdGV4dCcpO1xuICAgICAgICAgICAgdGhpcy5vblJlc2l6ZUVuZC5lbWl0KGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJpbmRHbG9iYWxMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGlmICh0aGlzLmRyYWdnYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5iaW5kRG9jdW1lbnREcmFnTGlzdGVuZXIoKTtcbiAgICAgICAgICAgIHRoaXMuYmluZERvY3VtZW50RHJhZ0VuZExpc3RlbmVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5yZXNpemFibGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmluZERvY3VtZW50UmVzaXplTGlzdGVuZXJzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jbG9zZU9uRXNjYXBlICYmIHRoaXMuY2xvc2FibGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmluZERvY3VtZW50RXNjYXBlTGlzdGVuZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVuYmluZEdsb2JhbExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy51bmJpbmREb2N1bWVudERyYWdMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLnVuYmluZERvY3VtZW50RHJhZ0VuZExpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMudW5iaW5kRG9jdW1lbnRSZXNpemVMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy51bmJpbmREb2N1bWVudEVzY2FwZUxpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgYmluZERvY3VtZW50RHJhZ0xpc3RlbmVyKCkge1xuICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kb2N1bWVudERyYWdMaXN0ZW5lciA9IHRoaXMub25EcmFnLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5kb2N1bWVudERyYWdMaXN0ZW5lcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVuYmluZERvY3VtZW50RHJhZ0xpc3RlbmVyKCkge1xuICAgICAgICBpZiAodGhpcy5kb2N1bWVudERyYWdMaXN0ZW5lcikge1xuICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZG9jdW1lbnREcmFnTGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy5kb2N1bWVudERyYWdMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiaW5kRG9jdW1lbnREcmFnRW5kTGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50RHJhZ0VuZExpc3RlbmVyID0gdGhpcy5lbmREcmFnLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuZG9jdW1lbnREcmFnRW5kTGlzdGVuZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1bmJpbmREb2N1bWVudERyYWdFbmRMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZG9jdW1lbnREcmFnRW5kTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5kb2N1bWVudERyYWdFbmRMaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50RHJhZ0VuZExpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJpbmREb2N1bWVudFJlc2l6ZUxpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRSZXNpemVMaXN0ZW5lciA9IHRoaXMub25SZXNpemUuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRSZXNpemVFbmRMaXN0ZW5lciA9IHRoaXMucmVzaXplRW5kLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5kb2N1bWVudFJlc2l6ZUxpc3RlbmVyKTtcbiAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5kb2N1bWVudFJlc2l6ZUVuZExpc3RlbmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdW5iaW5kRG9jdW1lbnRSZXNpemVMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGlmICh0aGlzLmRvY3VtZW50UmVzaXplTGlzdGVuZXIgJiYgdGhpcy5kb2N1bWVudFJlc2l6ZUVuZExpc3RlbmVyKSB7XG4gICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5kb2N1bWVudFJlc2l6ZUxpc3RlbmVyKTtcbiAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5kb2N1bWVudFJlc2l6ZUVuZExpc3RlbmVyKTtcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRSZXNpemVMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50UmVzaXplRW5kTGlzdGVuZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmluZERvY3VtZW50RXNjYXBlTGlzdGVuZXIoKSB7XG4gICAgICAgIGNvbnN0IGRvY3VtZW50VGFyZ2V0OiBhbnkgPSB0aGlzLmVsID8gdGhpcy5lbC5uYXRpdmVFbGVtZW50Lm93bmVyRG9jdW1lbnQgOiAnZG9jdW1lbnQnO1xuXG4gICAgICAgIHRoaXMuZG9jdW1lbnRFc2NhcGVMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKGRvY3VtZW50VGFyZ2V0LCAna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09IDI3KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KHRoaXMuY29udGFpbmVyLnN0eWxlLnpJbmRleCkgPT09IChEb21IYW5kbGVyLnppbmRleCArIHRoaXMuYmFzZVpJbmRleCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZShldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1bmJpbmREb2N1bWVudEVzY2FwZUxpc3RlbmVyKCkge1xuICAgICAgICBpZiAodGhpcy5kb2N1bWVudEVzY2FwZUxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50RXNjYXBlTGlzdGVuZXIoKTtcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRFc2NhcGVMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhcHBlbmRDb250YWluZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmFwcGVuZFRvKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hcHBlbmRUbyA9PT0gJ2JvZHknKVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy53cmFwcGVyKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBEb21IYW5kbGVyLmFwcGVuZENoaWxkKHRoaXMud3JhcHBlciwgdGhpcy5hcHBlbmRUbyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXN0b3JlQXBwZW5kKCkge1xuICAgICAgICBpZiAodGhpcy5jb250YWluZXIgJiYgdGhpcy5hcHBlbmRUbykge1xuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMud3JhcHBlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkFuaW1hdGlvblN0YXJ0KGV2ZW50OiBBbmltYXRpb25FdmVudCkge1xuICAgICAgICBzd2l0Y2goZXZlbnQudG9TdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSAndmlzaWJsZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBldmVudC5lbGVtZW50O1xuICAgICAgICAgICAgICAgIHRoaXMud3JhcHBlciA9IHRoaXMuY29udGFpbmVyLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5vblNob3cuZW1pdCh7fSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRDb250YWluZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVPblRvcCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYmluZEdsb2JhbExpc3RlbmVycygpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW9kYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmFibGVNb2RhbGl0eSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5tb2RhbCAmJiB0aGlzLmJsb2NrU2Nyb2xsKSB7XG4gICAgICAgICAgICAgICAgICAgIERvbUhhbmRsZXIuYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ3Atb3ZlcmZsb3ctaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9jdXNPblNob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25BbmltYXRpb25FbmQoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KSB7XG4gICAgICAgIHN3aXRjaChldmVudC50b1N0YXRlKSB7XG4gICAgICAgICAgICBjYXNlICd2b2lkJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ29udGFpbmVyRGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIHRoaXMub25IaWRlLmVtaXQoe30pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNvbnRhaW5lckRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMudW5iaW5kR2xvYmFsTGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLm1hc2tWaXNpYmxlID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMubWF4aW1pemVkKSB7XG4gICAgICAgICAgICBEb21IYW5kbGVyLnJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksICdwLW92ZXJmbG93LWhpZGRlbicpO1xuICAgICAgICAgICAgdGhpcy5tYXhpbWl6ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm1vZGFsKSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGVNb2RhbGl0eSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYmxvY2tTY3JvbGwpIHtcbiAgICAgICAgICAgIERvbUhhbmRsZXIucmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ3Atb3ZlcmZsb3ctaGlkZGVuJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG51bGw7XG4gICAgICAgIHRoaXMud3JhcHBlciA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5fc3R5bGUgPSB0aGlzLm9yaWdpbmFsU3R5bGUgPyB7Li4udGhpcy5vcmlnaW5hbFN0eWxlfSA6IHt9O1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdG9yZUFwcGVuZCgpO1xuICAgICAgICAgICAgdGhpcy5vbkNvbnRhaW5lckRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsRm9jdXNUcmFwTW9kdWxlLFJpcHBsZU1vZHVsZV0sXG4gICAgZXhwb3J0czogW0RpYWxvZyxTaGFyZWRNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW0RpYWxvZ11cbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nTW9kdWxlIHsgfVxuIl19