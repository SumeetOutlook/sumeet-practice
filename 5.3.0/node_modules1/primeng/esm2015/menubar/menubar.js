import { NgModule, Component, ElementRef, Input, Renderer2, ChangeDetectorRef, ChangeDetectionStrategy, ViewEncapsulation, ContentChildren, ViewChild, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from 'primeng/dom';
import { PrimeTemplate } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/ripple';
import * as ɵngcc3 from '@angular/router';

const _c0 = function (a0) { return { "p-hidden": a0 }; };
function MenubarSub_ng_template_1_li_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "li", 4);
} if (rf & 2) {
    const child_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(1, _c0, child_r1.visible === false));
} }
function MenubarSub_ng_template_1_li_1_a_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 15);
} if (rf & 2) {
    const child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", child_r1.icon);
} }
function MenubarSub_ng_template_1_li_1_a_2_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 16);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(child_r1.label);
} }
function MenubarSub_ng_template_1_li_1_a_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 17);
} if (rf & 2) {
    const child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", child_r1.label, ɵngcc0.ɵɵsanitizeHtml);
} }
const _c1 = function (a0, a1) { return { "pi-angle-down": a0, "pi-angle-right": a1 }; };
function MenubarSub_ng_template_1_li_1_a_2_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 18);
} if (rf & 2) {
    const ctx_r13 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(1, _c1, ctx_r13.root, !ctx_r13.root));
} }
const _c2 = function (a1) { return { "p-menuitem-link": true, "p-disabled": a1 }; };
function MenubarSub_ng_template_1_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 10);
    ɵngcc0.ɵɵlistener("click", function MenubarSub_ng_template_1_li_1_a_2_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r18); const child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit; const ctx_r17 = ɵngcc0.ɵɵnextContext(); return ctx_r17.onItemClick($event, child_r1); });
    ɵngcc0.ɵɵtemplate(1, MenubarSub_ng_template_1_li_1_a_2_span_1_Template, 1, 1, "span", 11);
    ɵngcc0.ɵɵtemplate(2, MenubarSub_ng_template_1_li_1_a_2_span_2_Template, 2, 1, "span", 12);
    ɵngcc0.ɵɵtemplate(3, MenubarSub_ng_template_1_li_1_a_2_ng_template_3_Template, 1, 1, "ng-template", null, 13, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(5, MenubarSub_ng_template_1_li_1_a_2_span_5_Template, 1, 4, "span", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r11 = ɵngcc0.ɵɵreference(4);
    const child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(child_r1.styleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(16, _c2, child_r1.disabled))("ngStyle", child_r1.style);
    ɵngcc0.ɵɵattribute("href", child_r1.url, ɵngcc0.ɵɵsanitizeUrl)("data-automationid", child_r1.automationId)("target", child_r1.target)("title", child_r1.title)("id", child_r1.id)("tabindex", child_r1.disabled ? null : "0")("aria-haspopup", ctx_r6.item.items != null)("aria-expanded", ctx_r6.item === ctx_r6.activeItem);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.escape !== false)("ngIfElse", _r11);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.items);
} }
function MenubarSub_ng_template_1_li_1_a_3_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 15);
} if (rf & 2) {
    const child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", child_r1.icon);
} }
function MenubarSub_ng_template_1_li_1_a_3_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 16);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(child_r1.label);
} }
function MenubarSub_ng_template_1_li_1_a_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 17);
} if (rf & 2) {
    const child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", child_r1.label, ɵngcc0.ɵɵsanitizeHtml);
} }
function MenubarSub_ng_template_1_li_1_a_3_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 18);
} if (rf & 2) {
    const ctx_r25 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(1, _c1, ctx_r25.root, !ctx_r25.root));
} }
const _c3 = function () { return { exact: false }; };
function MenubarSub_ng_template_1_li_1_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r30 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 19);
    ɵngcc0.ɵɵlistener("click", function MenubarSub_ng_template_1_li_1_a_3_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r30); const child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit; const ctx_r29 = ɵngcc0.ɵɵnextContext(); return ctx_r29.onItemClick($event, child_r1); });
    ɵngcc0.ɵɵtemplate(1, MenubarSub_ng_template_1_li_1_a_3_span_1_Template, 1, 1, "span", 11);
    ɵngcc0.ɵɵtemplate(2, MenubarSub_ng_template_1_li_1_a_3_span_2_Template, 2, 1, "span", 12);
    ɵngcc0.ɵɵtemplate(3, MenubarSub_ng_template_1_li_1_a_3_ng_template_3_Template, 1, 1, "ng-template", null, 20, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(5, MenubarSub_ng_template_1_li_1_a_3_span_5_Template, 1, 4, "span", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r23 = ɵngcc0.ɵɵreference(4);
    const child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵclassMap(child_r1.styleClass);
    ɵngcc0.ɵɵproperty("routerLink", child_r1.routerLink)("queryParams", child_r1.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", child_r1.routerLinkActiveOptions || ɵngcc0.ɵɵpureFunction0(23, _c3))("ngClass", ɵngcc0.ɵɵpureFunction1(24, _c2, child_r1.disabled))("ngStyle", child_r1.style)("fragment", child_r1.fragment)("queryParamsHandling", child_r1.queryParamsHandling)("preserveFragment", child_r1.preserveFragment)("skipLocationChange", child_r1.skipLocationChange)("replaceUrl", child_r1.replaceUrl)("state", child_r1.state);
    ɵngcc0.ɵɵattribute("data-automationid", child_r1.automationId)("target", child_r1.target)("title", child_r1.title)("id", child_r1.id)("tabindex", child_r1.disabled ? null : "0");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.escape !== false)("ngIfElse", _r23);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.items);
} }
function MenubarSub_ng_template_1_li_1_p_menubarSub_4_Template(rf, ctx) { if (rf & 1) {
    const _r34 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-menubarSub", 21);
    ɵngcc0.ɵɵlistener("leafClick", function MenubarSub_ng_template_1_li_1_p_menubarSub_4_Template_p_menubarSub_leafClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r34); const ctx_r33 = ɵngcc0.ɵɵnextContext(3); return ctx_r33.onLeafClick(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const ctx_r8 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("parentActive", child_r1 === ctx_r8.activeItem)("item", child_r1)("mobileActive", ctx_r8.mobileActive)("autoDisplay", true);
} }
const _c4 = function (a1, a2) { return { "p-menuitem": true, "p-menuitem-active": a1, "p-hidden": a2 }; };
function MenubarSub_ng_template_1_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r37 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 5, 6);
    ɵngcc0.ɵɵlistener("mouseenter", function MenubarSub_ng_template_1_li_1_Template_li_mouseenter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r37); const child_r1 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r36 = ɵngcc0.ɵɵnextContext(); return ctx_r36.onItemMouseEnter($event, child_r1); });
    ɵngcc0.ɵɵtemplate(2, MenubarSub_ng_template_1_li_1_a_2_Template, 6, 18, "a", 7);
    ɵngcc0.ɵɵtemplate(3, MenubarSub_ng_template_1_li_1_a_3_Template, 6, 26, "a", 8);
    ɵngcc0.ɵɵtemplate(4, MenubarSub_ng_template_1_li_1_p_menubarSub_4_Template, 1, 4, "p-menubarSub", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(4, _c4, child_r1 === ctx_r3.activeItem, child_r1.visible === false));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", !child_r1.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.items);
} }
function MenubarSub_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, MenubarSub_ng_template_1_li_0_Template, 1, 3, "li", 2);
    ɵngcc0.ɵɵtemplate(1, MenubarSub_ng_template_1_li_1_Template, 5, 7, "li", 3);
} if (rf & 2) {
    const child_r1 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngIf", child_r1.separator);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !child_r1.separator);
} }
const _c5 = function (a0, a1) { return { "p-submenu-list": a0, "p-menubar-root-list": a1 }; };
const _c6 = ["menubutton"];
const _c7 = ["rootmenu"];
function Menubar_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Menubar_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵtemplate(1, Menubar_div_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.startTemplate);
} }
function Menubar_div_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Menubar_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 11);
    ɵngcc0.ɵɵtemplate(1, Menubar_div_7_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r3.endTemplate);
} }
function Menubar_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 11);
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵelementEnd();
} }
const _c8 = function (a1) { return { "p-menubar p-component": true, "p-menubar-mobile-active": a1 }; };
const _c9 = ["*"];
export class MenubarSub {
    constructor(el, renderer, cd) {
        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.leafClick = new EventEmitter();
        this.menuHoverActive = false;
    }
    get parentActive() {
        return this._parentActive;
    }
    set parentActive(value) {
        if (!this.root) {
            this._parentActive = value;
            if (!value)
                this.activeItem = null;
        }
    }
    onItemMouseEnter(event, item) {
        if (item.disabled || this.mobileActive) {
            event.preventDefault();
            return;
        }
        if (this.root) {
            if (this.activeItem) {
                this.activeItem = item;
            }
        }
        else {
            this.activeItem = item;
        }
    }
    onItemClick(event, item) {
        if (item.disabled) {
            event.preventDefault();
            return;
        }
        if (!item.url && !item.routerLink) {
            event.preventDefault();
        }
        if (item.command) {
            item.command({
                originalEvent: event,
                item: item
            });
        }
        if (item.items) {
            if (this.activeItem && item === this.activeItem) {
                this.activeItem = null;
                this.unbindDocumentClickListener();
            }
            else {
                this.activeItem = item;
                if (this.root) {
                    this.bindDocumentClickListener();
                }
            }
        }
        if (!item.items) {
            this.onLeafClick();
        }
    }
    onLeafClick() {
        this.activeItem = null;
        if (this.root) {
            this.unbindDocumentClickListener();
        }
        this.leafClick.emit();
    }
    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            this.documentClickListener = (event) => {
                if (this.el && !this.el.nativeElement.contains(event.target)) {
                    this.activeItem = null;
                    this.cd.markForCheck();
                    this.unbindDocumentClickListener();
                }
            };
            document.addEventListener('click', this.documentClickListener);
        }
    }
    unbindDocumentClickListener() {
        if (this.documentClickListener) {
            document.removeEventListener('click', this.documentClickListener);
            this.documentClickListener = null;
        }
    }
    ngOnDestroy() {
        this.unbindDocumentClickListener();
    }
}
MenubarSub.ɵfac = function MenubarSub_Factory(t) { return new (t || MenubarSub)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
MenubarSub.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MenubarSub, selectors: [["p-menubarSub"]], inputs: { autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", parentActive: "parentActive", item: "item", root: "root", autoDisplay: "autoDisplay", mobileActive: "mobileActive" }, outputs: { leafClick: "leafClick" }, decls: 2, vars: 5, consts: [[3, "ngClass"], ["ngFor", "", 3, "ngForOf"], ["class", "p-menu-separator", 3, "ngClass", 4, "ngIf"], [3, "ngClass", "mouseenter", 4, "ngIf"], [1, "p-menu-separator", 3, "ngClass"], [3, "ngClass", "mouseenter"], ["listItem", ""], ["pRipple", "", 3, "ngClass", "ngStyle", "class", "click", 4, "ngIf"], ["role", "menuitem", "pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "ngClass", "ngStyle", "class", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", 4, "ngIf"], [3, "parentActive", "item", "mobileActive", "autoDisplay", "leafClick", 4, "ngIf"], ["pRipple", "", 3, "ngClass", "ngStyle", "click"], ["class", "p-menuitem-icon", 3, "ngClass", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["htmlLabel", ""], ["class", "p-submenu-icon pi", 3, "ngClass", 4, "ngIf"], [1, "p-menuitem-icon", 3, "ngClass"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-submenu-icon", "pi", 3, "ngClass"], ["role", "menuitem", "pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "ngClass", "ngStyle", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click"], ["htmlRouteLabel", ""], [3, "parentActive", "item", "mobileActive", "autoDisplay", "leafClick"]], template: function MenubarSub_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ul", 0);
        ɵngcc0.ɵɵtemplate(1, MenubarSub_ng_template_1_Template, 2, 2, "ng-template", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(2, _c5, !ctx.root, ctx.root));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.root ? ctx.item : ctx.item.items);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgForOf, ɵngcc1.NgIf, ɵngcc2.Ripple, ɵngcc1.NgStyle, ɵngcc3.RouterLinkWithHref, ɵngcc3.RouterLinkActive, MenubarSub], encapsulation: 2 });
MenubarSub.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
MenubarSub.propDecorators = {
    item: [{ type: Input }],
    root: [{ type: Input }],
    autoDisplay: [{ type: Input }],
    autoZIndex: [{ type: Input }],
    baseZIndex: [{ type: Input }],
    mobileActive: [{ type: Input }],
    parentActive: [{ type: Input }],
    leafClick: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MenubarSub, [{
        type: Component,
        args: [{
                selector: 'p-menubarSub',
                template: `
        <ul [ngClass]="{'p-submenu-list': !root, 'p-menubar-root-list': root}">
            <ng-template ngFor let-child [ngForOf]="(root ? item : item.items)">
                <li *ngIf="child.separator" class="p-menu-separator" [ngClass]="{'p-hidden': child.visible === false}">
                <li *ngIf="!child.separator" #listItem [ngClass]="{'p-menuitem':true, 'p-menuitem-active': child === activeItem, 'p-hidden': child.visible === false}" (mouseenter)="onItemMouseEnter($event,child)">
                    <a *ngIf="!child.routerLink" [attr.href]="child.url" [attr.data-automationid]="child.automationId" [attr.target]="child.target" [attr.title]="child.title" [attr.id]="child.id" (click)="onItemClick($event, child)"
                         [ngClass]="{'p-menuitem-link':true,'p-disabled':child.disabled}" [ngStyle]="child.style" [class]="child.styleClass" 
                         [attr.tabindex]="child.disabled ? null : '0'" [attr.aria-haspopup]="item.items != null" [attr.aria-expanded]="item === activeItem" pRipple>
                        <span class="p-menuitem-icon" *ngIf="child.icon" [ngClass]="child.icon"></span>
                        <span class="p-menuitem-text" *ngIf="child.escape !== false; else htmlLabel">{{child.label}}</span>
                        <ng-template #htmlLabel><span class="p-menuitem-text" [innerHTML]="child.label"></span></ng-template>
                        <span class="p-submenu-icon pi" *ngIf="child.items" [ngClass]="{'pi-angle-down':root,'pi-angle-right':!root}"></span>
                    </a>
                    <a *ngIf="child.routerLink" [routerLink]="child.routerLink" [attr.data-automationid]="child.automationId" [queryParams]="child.queryParams" [routerLinkActive]="'p-menuitem-link-active'" [routerLinkActiveOptions]="child.routerLinkActiveOptions||{exact:false}"
                        [attr.target]="child.target" [attr.title]="child.title" [attr.id]="child.id" [attr.tabindex]="child.disabled ? null : '0'" role="menuitem"
                        (click)="onItemClick($event, child)" [ngClass]="{'p-menuitem-link':true,'p-disabled':child.disabled}" [ngStyle]="child.style" [class]="child.styleClass"
                        [fragment]="child.fragment" [queryParamsHandling]="child.queryParamsHandling" [preserveFragment]="child.preserveFragment" [skipLocationChange]="child.skipLocationChange" [replaceUrl]="child.replaceUrl" [state]="child.state" pRipple>
                        <span class="p-menuitem-icon" *ngIf="child.icon" [ngClass]="child.icon"></span>
                        <span class="p-menuitem-text" *ngIf="child.escape !== false; else htmlRouteLabel">{{child.label}}</span>
                        <ng-template #htmlRouteLabel><span class="p-menuitem-text" [innerHTML]="child.label"></span></ng-template>
                        <span class="p-submenu-icon pi" *ngIf="child.items" [ngClass]="{'pi-angle-down':root,'pi-angle-right':!root}"></span>
                    </a>
                    <p-menubarSub [parentActive]="child === activeItem" [item]="child" *ngIf="child.items" [mobileActive]="mobileActive" [autoDisplay]="true" (leafClick)="onLeafClick()"></p-menubarSub>
                </li>
            </ng-template>
        </ul>
    `,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }]; }, { autoZIndex: [{
            type: Input
        }], baseZIndex: [{
            type: Input
        }], leafClick: [{
            type: Output
        }], parentActive: [{
            type: Input
        }], item: [{
            type: Input
        }], root: [{
            type: Input
        }], autoDisplay: [{
            type: Input
        }], mobileActive: [{
            type: Input
        }] }); })();
export class Menubar {
    constructor(el, renderer, cd) {
        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.autoZIndex = true;
        this.baseZIndex = 0;
    }
    get autoDisplay() {
        return this._autoDisplay;
    }
    set autoDisplay(_autoDisplay) {
        console.log("AutoDisplay property is deprecated and functionality is not available.");
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'start':
                    this.startTemplate = item.template;
                    break;
                case 'end':
                    this.endTemplate = item.template;
                    break;
            }
        });
    }
    toggle(event) {
        this.mobileActive = !this.mobileActive;
        let rootmenu = DomHandler.findSingle(this.el.nativeElement, ".p-menubar-root-list");
        rootmenu.style.zIndex = String(DomHandler.generateZIndex());
        this.bindOutsideClickListener();
        event.preventDefault();
    }
    bindOutsideClickListener() {
        if (!this.outsideClickListener) {
            this.outsideClickListener = (event) => {
                if (this.mobileActive && this.rootmenu.el.nativeElement !== event.target && !this.rootmenu.el.nativeElement.contains(event.target)
                    && this.menubutton.nativeElement !== event.target && !this.menubutton.nativeElement.contains(event.target)) {
                    this.mobileActive = false;
                    this.cd.markForCheck();
                }
            };
            document.addEventListener('click', this.outsideClickListener);
        }
    }
    onLeafClick() {
        this.mobileActive = false;
        this.unbindOutsideClickListener();
    }
    unbindOutsideClickListener() {
        if (this.outsideClickListener) {
            document.removeEventListener('click', this.outsideClickListener);
            this.outsideClickListener = null;
        }
    }
    ngOnDestroy() {
        this.unbindOutsideClickListener();
    }
}
Menubar.ɵfac = function Menubar_Factory(t) { return new (t || Menubar)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
Menubar.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Menubar, selectors: [["p-menubar"]], contentQueries: function Menubar_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function Menubar_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c6, true);
        ɵngcc0.ɵɵviewQuery(_c7, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.menubutton = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.rootmenu = _t.first);
    } }, inputs: { autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", autoDisplay: "autoDisplay", model: "model", style: "style", styleClass: "styleClass" }, ngContentSelectors: _c9, decls: 10, vars: 13, consts: [[3, "ngClass", "ngStyle"], ["class", "p-menubar-start", 4, "ngIf"], ["tabindex", "0", 1, "p-menubar-button", 3, "click"], ["menubutton", ""], [1, "pi", "pi-bars"], ["root", "root", 3, "item", "baseZIndex", "autoZIndex", "mobileActive", "leafClick"], ["rootmenu", ""], ["class", "p-menubar-end", 4, "ngIf", "ngIfElse"], ["legacy", ""], [1, "p-menubar-start"], [4, "ngTemplateOutlet"], [1, "p-menubar-end"]], template: function Menubar_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, Menubar_div_1_Template, 2, 1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "a", 2, 3);
        ɵngcc0.ɵɵlistener("click", function Menubar_Template_a_click_2_listener($event) { return ctx.toggle($event); });
        ɵngcc0.ɵɵelement(4, "i", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "p-menubarSub", 5, 6);
        ɵngcc0.ɵɵlistener("leafClick", function Menubar_Template_p_menubarSub_leafClick_5_listener() { return ctx.onLeafClick(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(7, Menubar_div_7_Template, 2, 1, "div", 7);
        ɵngcc0.ɵɵtemplate(8, Menubar_ng_template_8_Template, 2, 0, "ng-template", null, 8, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r4 = ɵngcc0.ɵɵreference(9);
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(11, _c8, ctx.mobileActive))("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.startTemplate);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("item", ctx.model)("baseZIndex", ctx.baseZIndex)("autoZIndex", ctx.autoZIndex)("mobileActive", ctx.mobileActive);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.endTemplate)("ngIfElse", _r4);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf, MenubarSub, ɵngcc1.NgTemplateOutlet], styles: [".p-menubar{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.p-menubar ul{list-style:none;margin:0;padding:0}.p-menubar .p-menuitem-link{-ms-flex-align:center;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;overflow:hidden;position:relative;text-decoration:none}.p-menubar .p-menuitem-text{line-height:1}.p-menubar .p-menuitem{position:relative}.p-menubar-root-list{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.p-menubar-root-list>li ul{display:none;z-index:1}.p-menubar-root-list>.p-menuitem-active>p-menubarsub>.p-submenu-list{display:block}.p-menubar .p-submenu-list{display:none;position:absolute;z-index:1}.p-menubar .p-submenu-list>.p-menuitem-active>p-menubarsub>.p-submenu-list{display:block;left:100%;top:0}.p-menubar .p-submenu-list .p-menuitem-link .p-submenu-icon{margin-left:auto}.p-menubar .p-menubar-custom,.p-menubar .p-menubar-end{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;margin-left:auto}.p-menubar-button{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;cursor:pointer;display:none;justify-content:center}"], encapsulation: 2, changeDetection: 0 });
Menubar.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
Menubar.propDecorators = {
    model: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    autoZIndex: [{ type: Input }],
    baseZIndex: [{ type: Input }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }],
    autoDisplay: [{ type: Input }],
    menubutton: [{ type: ViewChild, args: ['menubutton',] }],
    rootmenu: [{ type: ViewChild, args: ['rootmenu',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Menubar, [{
        type: Component,
        args: [{
                selector: 'p-menubar',
                template: `
        <div [ngClass]="{'p-menubar p-component':true, 'p-menubar-mobile-active': mobileActive}" [class]="styleClass" [ngStyle]="style">
            <div class="p-menubar-start" *ngIf="startTemplate">
                <ng-container *ngTemplateOutlet="startTemplate"></ng-container>
            </div>
            <a #menubutton tabindex="0" class="p-menubar-button" (click)="toggle($event)">
                <i class="pi pi-bars"></i>
            </a>
            <p-menubarSub #rootmenu [item]="model" root="root" [baseZIndex]="baseZIndex" (leafClick)="onLeafClick()" [autoZIndex]="autoZIndex" [mobileActive]="mobileActive"></p-menubarSub>
            <div class="p-menubar-end" *ngIf="endTemplate; else legacy">
                <ng-container *ngTemplateOutlet="endTemplate"></ng-container>
            </div>
            <ng-template #legacy>
                <div class="p-menubar-end">
                    <ng-content></ng-content>
                </div>
            </ng-template>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-menubar{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.p-menubar ul{list-style:none;margin:0;padding:0}.p-menubar .p-menuitem-link{-ms-flex-align:center;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;overflow:hidden;position:relative;text-decoration:none}.p-menubar .p-menuitem-text{line-height:1}.p-menubar .p-menuitem{position:relative}.p-menubar-root-list{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.p-menubar-root-list>li ul{display:none;z-index:1}.p-menubar-root-list>.p-menuitem-active>p-menubarsub>.p-submenu-list{display:block}.p-menubar .p-submenu-list{display:none;position:absolute;z-index:1}.p-menubar .p-submenu-list>.p-menuitem-active>p-menubarsub>.p-submenu-list{display:block;left:100%;top:0}.p-menubar .p-submenu-list .p-menuitem-link .p-submenu-icon{margin-left:auto}.p-menubar .p-menubar-custom,.p-menubar .p-menubar-end{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;margin-left:auto}.p-menubar-button{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;cursor:pointer;display:none;justify-content:center}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }]; }, { autoZIndex: [{
            type: Input
        }], baseZIndex: [{
            type: Input
        }], autoDisplay: [{
            type: Input
        }], model: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }], menubutton: [{
            type: ViewChild,
            args: ['menubutton']
        }], rootmenu: [{
            type: ViewChild,
            args: ['rootmenu']
        }] }); })();
export class MenubarModule {
}
MenubarModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MenubarModule });
MenubarModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MenubarModule_Factory(t) { return new (t || MenubarModule)(); }, imports: [[CommonModule, RouterModule, RippleModule], RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MenubarModule, { declarations: function () { return [Menubar, MenubarSub]; }, imports: function () { return [CommonModule, RouterModule, RippleModule]; }, exports: function () { return [Menubar, RouterModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MenubarModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, RouterModule, RippleModule],
                exports: [Menubar, RouterModule],
                declarations: [Menubar, MenubarSub]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudWJhci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL21lbnViYXIvbWVudWJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBWSxpQkFBaUIsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBb0IsZUFBZSxFQUEwQixTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2UCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN6QyxPQUFPLEVBQVksYUFBYSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUM5QyxNQUFNLE9BQU8sVUFBVTtBQUFHLElBcUN0QixZQUFtQixFQUFjLEVBQVMsUUFBbUIsRUFBVSxFQUFxQjtBQUFJLFFBQTdFLE9BQUUsR0FBRixFQUFFLENBQVk7QUFBQyxRQUFRLGFBQVEsR0FBUixRQUFRLENBQVc7QUFBQyxRQUFTLE9BQUUsR0FBRixFQUFFLENBQW1CO0FBQUMsUUE3QnBGLGVBQVUsR0FBWSxJQUFJLENBQUM7QUFDeEMsUUFDYSxlQUFVLEdBQVcsQ0FBQyxDQUFDO0FBQ3BD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MEJBSXBDLEtBQUs7QUFBSyx5QkFPVixTQUFTLFNBQUMsWUFBWTtBQUFPLHVCQUU3QixTQUFTLFNBQUMsVUFBVTtBQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBcUVqQyxNQUFNLE9BQU8sYUFBYTtBQUFHO3lDQUw1QixRQUFRLFNBQUM7S0FDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUMsWUFBWSxFQUFDLFlBQVksQ0FBQyxrQkFDakQsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFDLFlBQVksQ0FBQyxrQkFDL0IsWUFBWSxFQUFFLENBQUMsT0FBTyxFQUFDLFVBQVUsQ0FBQyxjQUNyQzs7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgUmVuZGVyZXIyLCBPbkRlc3Ryb3ksQ2hhbmdlRGV0ZWN0b3JSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbiwgQWZ0ZXJDb250ZW50SW5pdCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRG9tSGFuZGxlciB9IGZyb20gJ3ByaW1lbmcvZG9tJztcbmltcG9ydCB7IE1lbnVJdGVtLCBQcmltZVRlbXBsYXRlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJpcHBsZU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcmlwcGxlJzsgIFxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtbWVudWJhclN1YicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHVsIFtuZ0NsYXNzXT1cInsncC1zdWJtZW51LWxpc3QnOiAhcm9vdCwgJ3AtbWVudWJhci1yb290LWxpc3QnOiByb290fVwiPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1jaGlsZCBbbmdGb3JPZl09XCIocm9vdCA/IGl0ZW0gOiBpdGVtLml0ZW1zKVwiPlxuICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cImNoaWxkLnNlcGFyYXRvclwiIGNsYXNzPVwicC1tZW51LXNlcGFyYXRvclwiIFtuZ0NsYXNzXT1cInsncC1oaWRkZW4nOiBjaGlsZC52aXNpYmxlID09PSBmYWxzZX1cIj5cbiAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XCIhY2hpbGQuc2VwYXJhdG9yXCIgI2xpc3RJdGVtIFtuZ0NsYXNzXT1cInsncC1tZW51aXRlbSc6dHJ1ZSwgJ3AtbWVudWl0ZW0tYWN0aXZlJzogY2hpbGQgPT09IGFjdGl2ZUl0ZW0sICdwLWhpZGRlbic6IGNoaWxkLnZpc2libGUgPT09IGZhbHNlfVwiIChtb3VzZWVudGVyKT1cIm9uSXRlbU1vdXNlRW50ZXIoJGV2ZW50LGNoaWxkKVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cIiFjaGlsZC5yb3V0ZXJMaW5rXCIgW2F0dHIuaHJlZl09XCJjaGlsZC51cmxcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb25pZF09XCJjaGlsZC5hdXRvbWF0aW9uSWRcIiBbYXR0ci50YXJnZXRdPVwiY2hpbGQudGFyZ2V0XCIgW2F0dHIudGl0bGVdPVwiY2hpbGQudGl0bGVcIiBbYXR0ci5pZF09XCJjaGlsZC5pZFwiIChjbGljayk9XCJvbkl0ZW1DbGljaygkZXZlbnQsIGNoaWxkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydwLW1lbnVpdGVtLWxpbmsnOnRydWUsJ3AtZGlzYWJsZWQnOmNoaWxkLmRpc2FibGVkfVwiIFtuZ1N0eWxlXT1cImNoaWxkLnN0eWxlXCIgW2NsYXNzXT1cImNoaWxkLnN0eWxlQ2xhc3NcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci50YWJpbmRleF09XCJjaGlsZC5kaXNhYmxlZCA/IG51bGwgOiAnMCdcIiBbYXR0ci5hcmlhLWhhc3BvcHVwXT1cIml0ZW0uaXRlbXMgIT0gbnVsbFwiIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwiaXRlbSA9PT0gYWN0aXZlSXRlbVwiIHBSaXBwbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtbWVudWl0ZW0taWNvblwiICpuZ0lmPVwiY2hpbGQuaWNvblwiIFtuZ0NsYXNzXT1cImNoaWxkLmljb25cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtbWVudWl0ZW0tdGV4dFwiICpuZ0lmPVwiY2hpbGQuZXNjYXBlICE9PSBmYWxzZTsgZWxzZSBodG1sTGFiZWxcIj57e2NoaWxkLmxhYmVsfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2h0bWxMYWJlbD48c3BhbiBjbGFzcz1cInAtbWVudWl0ZW0tdGV4dFwiIFtpbm5lckhUTUxdPVwiY2hpbGQubGFiZWxcIj48L3NwYW4+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1zdWJtZW51LWljb24gcGlcIiAqbmdJZj1cImNoaWxkLml0ZW1zXCIgW25nQ2xhc3NdPVwieydwaS1hbmdsZS1kb3duJzpyb290LCdwaS1hbmdsZS1yaWdodCc6IXJvb3R9XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhICpuZ0lmPVwiY2hpbGQucm91dGVyTGlua1wiIFtyb3V0ZXJMaW5rXT1cImNoaWxkLnJvdXRlckxpbmtcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb25pZF09XCJjaGlsZC5hdXRvbWF0aW9uSWRcIiBbcXVlcnlQYXJhbXNdPVwiY2hpbGQucXVlcnlQYXJhbXNcIiBbcm91dGVyTGlua0FjdGl2ZV09XCIncC1tZW51aXRlbS1saW5rLWFjdGl2ZSdcIiBbcm91dGVyTGlua0FjdGl2ZU9wdGlvbnNdPVwiY2hpbGQucm91dGVyTGlua0FjdGl2ZU9wdGlvbnN8fHtleGFjdDpmYWxzZX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIudGFyZ2V0XT1cImNoaWxkLnRhcmdldFwiIFthdHRyLnRpdGxlXT1cImNoaWxkLnRpdGxlXCIgW2F0dHIuaWRdPVwiY2hpbGQuaWRcIiBbYXR0ci50YWJpbmRleF09XCJjaGlsZC5kaXNhYmxlZCA/IG51bGwgOiAnMCdcIiByb2xlPVwibWVudWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uSXRlbUNsaWNrKCRldmVudCwgY2hpbGQpXCIgW25nQ2xhc3NdPVwieydwLW1lbnVpdGVtLWxpbmsnOnRydWUsJ3AtZGlzYWJsZWQnOmNoaWxkLmRpc2FibGVkfVwiIFtuZ1N0eWxlXT1cImNoaWxkLnN0eWxlXCIgW2NsYXNzXT1cImNoaWxkLnN0eWxlQ2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2ZyYWdtZW50XT1cImNoaWxkLmZyYWdtZW50XCIgW3F1ZXJ5UGFyYW1zSGFuZGxpbmddPVwiY2hpbGQucXVlcnlQYXJhbXNIYW5kbGluZ1wiIFtwcmVzZXJ2ZUZyYWdtZW50XT1cImNoaWxkLnByZXNlcnZlRnJhZ21lbnRcIiBbc2tpcExvY2F0aW9uQ2hhbmdlXT1cImNoaWxkLnNraXBMb2NhdGlvbkNoYW5nZVwiIFtyZXBsYWNlVXJsXT1cImNoaWxkLnJlcGxhY2VVcmxcIiBbc3RhdGVdPVwiY2hpbGQuc3RhdGVcIiBwUmlwcGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLW1lbnVpdGVtLWljb25cIiAqbmdJZj1cImNoaWxkLmljb25cIiBbbmdDbGFzc109XCJjaGlsZC5pY29uXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLW1lbnVpdGVtLXRleHRcIiAqbmdJZj1cImNoaWxkLmVzY2FwZSAhPT0gZmFsc2U7IGVsc2UgaHRtbFJvdXRlTGFiZWxcIj57e2NoaWxkLmxhYmVsfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2h0bWxSb3V0ZUxhYmVsPjxzcGFuIGNsYXNzPVwicC1tZW51aXRlbS10ZXh0XCIgW2lubmVySFRNTF09XCJjaGlsZC5sYWJlbFwiPjwvc3Bhbj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLXN1Ym1lbnUtaWNvbiBwaVwiICpuZ0lmPVwiY2hpbGQuaXRlbXNcIiBbbmdDbGFzc109XCJ7J3BpLWFuZ2xlLWRvd24nOnJvb3QsJ3BpLWFuZ2xlLXJpZ2h0Jzohcm9vdH1cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPHAtbWVudWJhclN1YiBbcGFyZW50QWN0aXZlXT1cImNoaWxkID09PSBhY3RpdmVJdGVtXCIgW2l0ZW1dPVwiY2hpbGRcIiAqbmdJZj1cImNoaWxkLml0ZW1zXCIgW21vYmlsZUFjdGl2ZV09XCJtb2JpbGVBY3RpdmVcIiBbYXV0b0Rpc3BsYXldPVwidHJ1ZVwiIChsZWFmQ2xpY2spPVwib25MZWFmQ2xpY2soKVwiPjwvcC1tZW51YmFyU3ViPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L3VsPlxuICAgIGAsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBNZW51YmFyU3ViIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICAgIEBJbnB1dCgpIGl0ZW06IE1lbnVJdGVtO1xuXG4gICAgQElucHV0KCkgcm9vdDogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIGF1dG9EaXNwbGF5OiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgYXV0b1pJbmRleDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSBiYXNlWkluZGV4OiBudW1iZXIgPSAwO1xuXG4gICAgQElucHV0KCkgbW9iaWxlQWN0aXZlOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgZ2V0IHBhcmVudEFjdGl2ZSgpOmJvb2xlYW4gXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50QWN0aXZlO1xuICAgIH1cbiAgICBzZXQgcGFyZW50QWN0aXZlKHZhbHVlKSB7XG4gICAgICAgIGlmICghdGhpcy5yb290KSB7XG4gICAgICAgICAgICB0aGlzLl9wYXJlbnRBY3RpdmUgPSB2YWx1ZTtcblxuICAgICAgICAgICAgaWYgKCF2YWx1ZSlcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQE91dHB1dCgpIGxlYWZDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBfcGFyZW50QWN0aXZlOiBib29sZWFuO1xuXG4gICAgZG9jdW1lbnRDbGlja0xpc3RlbmVyOiBhbnk7XG5cbiAgICBtZW51SG92ZXJBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGFjdGl2ZUl0ZW06IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZiwgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICAgIG9uSXRlbU1vdXNlRW50ZXIoZXZlbnQsIGl0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0uZGlzYWJsZWQgfHwgdGhpcy5tb2JpbGVBY3RpdmUpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5yb290KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVJdGVtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IGl0ZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkl0ZW1DbGljayhldmVudCwgaXRlbSkge1xuICAgICAgICBpZiAoaXRlbS5kaXNhYmxlZCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXRlbS51cmwgJiYgIWl0ZW0ucm91dGVyTGluaykge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpdGVtLmNvbW1hbmQpIHtcbiAgICAgICAgICAgIGl0ZW0uY29tbWFuZCh7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICAgICAgaXRlbTogaXRlbVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChpdGVtLml0ZW1zKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVJdGVtICYmIGl0ZW0gPT09IHRoaXMuYWN0aXZlSXRlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy51bmJpbmREb2N1bWVudENsaWNrTGlzdGVuZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucm9vdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJpbmREb2N1bWVudENsaWNrTGlzdGVuZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWl0ZW0uaXRlbXMpIHtcbiAgICAgICAgICAgIHRoaXMub25MZWFmQ2xpY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTGVhZkNsaWNrKCkge1xuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5yb290KSB7XG4gICAgICAgICAgICB0aGlzLnVuYmluZERvY3VtZW50Q2xpY2tMaXN0ZW5lcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sZWFmQ2xpY2suZW1pdCgpO1xuICAgIH1cblxuICAgIGJpbmREb2N1bWVudENsaWNrTGlzdGVuZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5kb2N1bWVudENsaWNrTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRDbGlja0xpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZWwgJiYgIXRoaXMuZWwubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5iaW5kRG9jdW1lbnRDbGlja0xpc3RlbmVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRvY3VtZW50Q2xpY2tMaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmJpbmREb2N1bWVudENsaWNrTGlzdGVuZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmRvY3VtZW50Q2xpY2tMaXN0ZW5lcikge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRvY3VtZW50Q2xpY2tMaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50Q2xpY2tMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy51bmJpbmREb2N1bWVudENsaWNrTGlzdGVuZXIoKTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1tZW51YmFyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cInsncC1tZW51YmFyIHAtY29tcG9uZW50Jzp0cnVlLCAncC1tZW51YmFyLW1vYmlsZS1hY3RpdmUnOiBtb2JpbGVBY3RpdmV9XCIgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIiBbbmdTdHlsZV09XCJzdHlsZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtbWVudWJhci1zdGFydFwiICpuZ0lmPVwic3RhcnRUZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJzdGFydFRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxhICNtZW51YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwicC1tZW51YmFyLWJ1dHRvblwiIChjbGljayk9XCJ0b2dnbGUoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicGkgcGktYmFyc1wiPjwvaT5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxwLW1lbnViYXJTdWIgI3Jvb3RtZW51IFtpdGVtXT1cIm1vZGVsXCIgcm9vdD1cInJvb3RcIiBbYmFzZVpJbmRleF09XCJiYXNlWkluZGV4XCIgKGxlYWZDbGljayk9XCJvbkxlYWZDbGljaygpXCIgW2F1dG9aSW5kZXhdPVwiYXV0b1pJbmRleFwiIFttb2JpbGVBY3RpdmVdPVwibW9iaWxlQWN0aXZlXCI+PC9wLW1lbnViYXJTdWI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1tZW51YmFyLWVuZFwiICpuZ0lmPVwiZW5kVGVtcGxhdGU7IGVsc2UgbGVnYWN5XCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImVuZFRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjbGVnYWN5PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLW1lbnViYXItZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBzdHlsZVVybHM6IFsnLi9tZW51YmFyLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1lbnViYXIgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCkgbW9kZWw6IE1lbnVJdGVtW107XG5cbiAgICBASW5wdXQoKSBzdHlsZTogYW55O1xuXG4gICAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgYXV0b1pJbmRleDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSBiYXNlWkluZGV4OiBudW1iZXIgPSAwO1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihQcmltZVRlbXBsYXRlKSB0ZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxhbnk+O1xuXG4gICAgcHJpdmF0ZSBfYXV0b0Rpc3BsYXk6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBnZXQgYXV0b0Rpc3BsYXkoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRvRGlzcGxheTtcbiAgICB9XG4gICAgc2V0IGF1dG9EaXNwbGF5KF9hdXRvRGlzcGxheTogYm9vbGVhbikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkF1dG9EaXNwbGF5IHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQgYW5kIGZ1bmN0aW9uYWxpdHkgaXMgbm90IGF2YWlsYWJsZS5cIik7XG4gICAgfVxuXG4gICAgQFZpZXdDaGlsZCgnbWVudWJ1dHRvbicpIG1lbnVidXR0b246IEVsZW1lbnRSZWY7XG5cbiAgICBAVmlld0NoaWxkKCdyb290bWVudScpIHJvb3RtZW51OiBNZW51YmFyU3ViO1xuXG4gICAgc3RhcnRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIGVuZFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgbW9iaWxlQWN0aXZlOiBib29sZWFuO1xuXG4gICAgb3V0c2lkZUNsaWNrTGlzdGVuZXI6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZiwgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHB1YmxpYyBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2goaXRlbS5nZXRUeXBlKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZFRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMubW9iaWxlQWN0aXZlID0gIXRoaXMubW9iaWxlQWN0aXZlO1xuICAgICAgICBsZXQgcm9vdG1lbnUgPSBEb21IYW5kbGVyLmZpbmRTaW5nbGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LFwiLnAtbWVudWJhci1yb290LWxpc3RcIilcbiAgICAgICAgcm9vdG1lbnUuc3R5bGUuekluZGV4ID0gU3RyaW5nKERvbUhhbmRsZXIuZ2VuZXJhdGVaSW5kZXgoKSk7XG4gICAgICAgIHRoaXMuYmluZE91dHNpZGVDbGlja0xpc3RlbmVyKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgYmluZE91dHNpZGVDbGlja0xpc3RlbmVyKCkge1xuICAgICAgICBpZiAoIXRoaXMub3V0c2lkZUNsaWNrTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMub3V0c2lkZUNsaWNrTGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb2JpbGVBY3RpdmUgJiYgdGhpcy5yb290bWVudS5lbC5uYXRpdmVFbGVtZW50ICE9PSBldmVudC50YXJnZXQgJiYgIXRoaXMucm9vdG1lbnUuZWwubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMubWVudWJ1dHRvbi5uYXRpdmVFbGVtZW50ICE9PSBldmVudC50YXJnZXQgJiYgIXRoaXMubWVudWJ1dHRvbi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2JpbGVBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm91dHNpZGVDbGlja0xpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTGVhZkNsaWNrKCkge1xuICAgICAgICB0aGlzLm1vYmlsZUFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVuYmluZE91dHNpZGVDbGlja0xpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgdW5iaW5kT3V0c2lkZUNsaWNrTGlzdGVuZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLm91dHNpZGVDbGlja0xpc3RlbmVyKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3V0c2lkZUNsaWNrTGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy5vdXRzaWRlQ2xpY2tMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy51bmJpbmRPdXRzaWRlQ2xpY2tMaXN0ZW5lcigpO1xuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLFJvdXRlck1vZHVsZSxSaXBwbGVNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtNZW51YmFyLFJvdXRlck1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbTWVudWJhcixNZW51YmFyU3ViXVxufSlcbmV4cG9ydCBjbGFzcyBNZW51YmFyTW9kdWxlIHsgfVxuIl19