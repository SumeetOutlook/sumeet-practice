import { Component, Input, ElementRef, ViewChild, ContentChildren, NgModule, NgZone, EventEmitter, Output, ContentChild, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { PrimeTemplate, SharedModule, Header, Footer } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import { CommonModule } from '@angular/common';
import { UniqueComponentId } from 'primeng/utils';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/ripple';

const _c0 = ["itemsContainer"];
function Carousel_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Carousel_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵtemplate(2, Carousel_div_1_ng_container_2_Template, 1, 0, "ng-container", 11);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.headerTemplate);
} }
function Carousel_div_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c1 = function (a1, a2, a3) { return { "p-carousel-item p-carousel-item-cloned": true, "p-carousel-item-active": a1, "p-carousel-item-start": a2, "p-carousel-item-end": a3 }; };
const _c2 = function (a0) { return { $implicit: a0 }; };
function Carousel_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵtemplate(1, Carousel_div_9_ng_container_1_Template, 1, 0, "ng-container", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const index_r9 = ctx.index;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(3, _c1, ctx_r2.totalShiftedItems * (0 - 1) === ctx_r2.value.length, 0 === index_r9, ctx_r2.clonedItemsForStarting.length - 1 === index_r9));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.itemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(7, _c2, item_r8));
} }
function Carousel_div_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c3 = function (a1, a2, a3) { return { "p-carousel-item": true, "p-carousel-item-active": a1, "p-carousel-item-start": a2, "p-carousel-item-end": a3 }; };
function Carousel_div_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵtemplate(1, Carousel_div_10_ng_container_1_Template, 1, 0, "ng-container", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const index_r12 = ctx.index;
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(3, _c3, ctx_r3.firstIndex() <= index_r12 && ctx_r3.lastIndex() >= index_r12, ctx_r3.firstIndex() === index_r12, ctx_r3.lastIndex() === index_r12));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r3.itemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(7, _c2, item_r11));
} }
function Carousel_div_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Carousel_div_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵtemplate(1, Carousel_div_11_ng_container_1_Template, 1, 0, "ng-container", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const index_r15 = ctx.index;
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(3, _c1, ctx_r4.totalShiftedItems * (0 - 1) === ctx_r4.numVisible, 0 === index_r15, ctx_r4.clonedItemsForFinishing.length - 1 === index_r15));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r4.itemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(7, _c2, item_r14));
} }
const _c4 = function (a1) { return { "p-carousel-indicator": true, "p-highlight": a1 }; };
function Carousel_li_15_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 2);
    ɵngcc0.ɵɵelementStart(1, "button", 13);
    ɵngcc0.ɵɵlistener("click", function Carousel_li_15_Template_button_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r20); const i_r18 = ctx.index; const ctx_r19 = ɵngcc0.ɵɵnextContext(); return ctx_r19.onDotClick($event, i_r18); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r18 = ctx.index;
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(1, _c4, ctx_r5._page === i_r18));
} }
function Carousel_div_16_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Carousel_div_16_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 14);
    ɵngcc0.ɵɵprojection(1, 1);
    ɵngcc0.ɵɵtemplate(2, Carousel_div_16_ng_container_2_Template, 1, 0, "ng-container", 11);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r6.footerTemplate);
} }
const _c5 = [[["p-header"]], [["p-footer"]]];
const _c6 = function (a1, a2) { return { "p-carousel p-component": true, "p-carousel-vertical": a1, "p-carousel-horizontal": a2 }; };
const _c7 = function (a1) { return { "p-carousel-prev p-link": true, "p-disabled": a1 }; };
const _c8 = function (a1, a2) { return { "p-carousel-prev-icon pi": true, "pi-chevron-left": a1, "pi-chevron-up": a2 }; };
const _c9 = function (a0) { return { "height": a0 }; };
const _c10 = function (a1) { return { "p-carousel-next p-link": true, "p-disabled": a1 }; };
const _c11 = function (a1, a2) { return { "p-carousel-prev-icon pi": true, "pi-chevron-right": a1, "pi-chevron-down": a2 }; };
const _c12 = ["p-header", "p-footer"];
export class Carousel {
    constructor(el, zone, cd) {
        this.el = el;
        this.zone = zone;
        this.cd = cd;
        this.orientation = "horizontal";
        this.verticalViewPortHeight = "300px";
        this.contentClass = "";
        this.indicatorsContentClass = "";
        this.circular = false;
        this.autoplayInterval = 0;
        this.onPage = new EventEmitter();
        this._numVisible = 1;
        this._numScroll = 1;
        this._oldNumScroll = 0;
        this.prevState = {
            numScroll: 0,
            numVisible: 0,
            value: []
        };
        this.defaultNumScroll = 1;
        this.defaultNumVisible = 1;
        this._page = 0;
        this.isRemainingItemsAdded = false;
        this.remainingItems = 0;
        this.swipeThreshold = 20;
        this.totalShiftedItems = this.page * this.numScroll * -1;
    }
    get page() {
        return this._page;
    }
    set page(val) {
        if (this.isCreated && val !== this._page) {
            if (this.autoplayInterval) {
                this.stopAutoplay();
                this.allowAutoplay = false;
            }
            if (val > this._page && val <= (this.totalDots() - 1)) {
                this.step(-1, val);
            }
            else if (val < this._page) {
                this.step(1, val);
            }
        }
        this._page = val;
    }
    get numVisible() {
        return this._numVisible;
    }
    set numVisible(val) {
        this._numVisible = val;
    }
    get numScroll() {
        return this._numVisible;
    }
    set numScroll(val) {
        this._numScroll = val;
    }
    get value() {
        return this._value;
    }
    ;
    set value(val) {
        this._value = val;
        if (this.circular && this._value) {
            this.setCloneItems();
        }
    }
    ngAfterContentInit() {
        this.id = UniqueComponentId();
        this.allowAutoplay = !!this.autoplayInterval;
        if (this.circular) {
            this.setCloneItems();
        }
        if (this.responsiveOptions) {
            this.defaultNumScroll = this._numScroll;
            this.defaultNumVisible = this._numVisible;
        }
        this.createStyle();
        this.calculatePosition();
        if (this.responsiveOptions) {
            this.bindDocumentListeners();
        }
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'item':
                    this.itemTemplate = item.template;
                    break;
                case 'header':
                    this.headerTemplate = item.template;
                    break;
                case 'footer':
                    this.footerTemplate = item.template;
                    break;
                default:
                    this.itemTemplate = item.template;
                    break;
            }
        });
    }
    ngAfterContentChecked() {
        const isCircular = this.isCircular();
        let totalShiftedItems = this.totalShiftedItems;
        if (this.value && (this.prevState.numScroll !== this._numScroll || this.prevState.numVisible !== this._numVisible || this.prevState.value.length !== this.value.length)) {
            if (this.autoplayInterval) {
                this.stopAutoplay();
            }
            this.remainingItems = (this.value.length - this._numVisible) % this._numScroll;
            let page = this._page;
            if (this.totalDots() !== 0 && page >= this.totalDots()) {
                page = this.totalDots() - 1;
                this._page = page;
                this.onPage.emit({
                    page: this.page
                });
            }
            totalShiftedItems = (page * this._numScroll) * -1;
            if (isCircular) {
                totalShiftedItems -= this._numVisible;
            }
            if (page === (this.totalDots() - 1) && this.remainingItems > 0) {
                totalShiftedItems += (-1 * this.remainingItems) + this._numScroll;
                this.isRemainingItemsAdded = true;
            }
            else {
                this.isRemainingItemsAdded = false;
            }
            if (totalShiftedItems !== this.totalShiftedItems) {
                this.totalShiftedItems = totalShiftedItems;
            }
            this._oldNumScroll = this._numScroll;
            this.prevState.numScroll = this._numScroll;
            this.prevState.numVisible = this._numVisible;
            this.prevState.value = this._value;
            if (this.totalDots() > 0 && this.itemsContainer && this.itemsContainer.nativeElement) {
                this.itemsContainer.nativeElement.style.transform = this.isVertical() ? `translate3d(0, ${totalShiftedItems * (100 / this._numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this._numVisible)}%, 0, 0)`;
            }
            this.isCreated = true;
            if (this.autoplayInterval && this.isAutoplay()) {
                this.startAutoplay();
            }
        }
        if (isCircular) {
            if (this.page === 0) {
                totalShiftedItems = -1 * this._numVisible;
            }
            else if (totalShiftedItems === 0) {
                totalShiftedItems = -1 * this.value.length;
                if (this.remainingItems > 0) {
                    this.isRemainingItemsAdded = true;
                }
            }
            if (totalShiftedItems !== this.totalShiftedItems) {
                this.totalShiftedItems = totalShiftedItems;
            }
        }
    }
    createStyle() {
        if (!this.carouselStyle) {
            this.carouselStyle = document.createElement('style');
            this.carouselStyle.type = 'text/css';
            document.body.appendChild(this.carouselStyle);
        }
        let innerHTML = `
            #${this.id} .p-carousel-item {
				flex: 1 0 ${(100 / this.numVisible)}%
			}
        `;
        if (this.responsiveOptions) {
            this.responsiveOptions.sort((data1, data2) => {
                const value1 = data1.breakpoint;
                const value2 = data2.breakpoint;
                let result = null;
                if (value1 == null && value2 != null)
                    result = -1;
                else if (value1 != null && value2 == null)
                    result = 1;
                else if (value1 == null && value2 == null)
                    result = 0;
                else if (typeof value1 === 'string' && typeof value2 === 'string')
                    result = value1.localeCompare(value2, undefined, { numeric: true });
                else
                    result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
                return -1 * result;
            });
            for (let i = 0; i < this.responsiveOptions.length; i++) {
                let res = this.responsiveOptions[i];
                innerHTML += `
                    @media screen and (max-width: ${res.breakpoint}) {
                        #${this.id} .p-carousel-item {
                            flex: 1 0 ${(100 / res.numVisible)}%
                        }
                    }
                `;
            }
        }
        this.carouselStyle.innerHTML = innerHTML;
    }
    calculatePosition() {
        if (this.itemsContainer && this.responsiveOptions) {
            let windowWidth = window.innerWidth;
            let matchedResponsiveData = {
                numVisible: this.defaultNumVisible,
                numScroll: this.defaultNumScroll
            };
            for (let i = 0; i < this.responsiveOptions.length; i++) {
                let res = this.responsiveOptions[i];
                if (parseInt(res.breakpoint, 10) >= windowWidth) {
                    matchedResponsiveData = res;
                }
            }
            if (this._numScroll !== matchedResponsiveData.numScroll) {
                let page = this._page;
                page = Math.floor((page * this._numScroll) / matchedResponsiveData.numScroll);
                let totalShiftedItems = (matchedResponsiveData.numScroll * this.page) * -1;
                if (this.isCircular()) {
                    totalShiftedItems -= matchedResponsiveData.numVisible;
                }
                this.totalShiftedItems = totalShiftedItems;
                this._numScroll = matchedResponsiveData.numScroll;
                this._page = page;
                this.onPage.emit({
                    page: this.page
                });
            }
            if (this._numVisible !== matchedResponsiveData.numVisible) {
                this._numVisible = matchedResponsiveData.numVisible;
                this.setCloneItems();
            }
            this.cd.markForCheck();
        }
    }
    setCloneItems() {
        this.clonedItemsForStarting = [];
        this.clonedItemsForFinishing = [];
        if (this.isCircular()) {
            this.clonedItemsForStarting.push(...this.value.slice(-1 * this._numVisible));
            this.clonedItemsForFinishing.push(...this.value.slice(0, this._numVisible));
        }
    }
    firstIndex() {
        return this.isCircular() ? (-1 * (this.totalShiftedItems + this.numVisible)) : (this.totalShiftedItems * -1);
    }
    lastIndex() {
        return this.firstIndex() + this.numVisible - 1;
    }
    totalDots() {
        return this.value ? Math.ceil((this.value.length - this._numVisible) / this._numScroll) + 1 : 0;
    }
    totalDotsArray() {
        const totalDots = this.totalDots();
        return totalDots <= 0 ? [] : Array(totalDots).fill(0);
    }
    isVertical() {
        return this.orientation === 'vertical';
    }
    isCircular() {
        return this.circular && this.value && this.value.length >= this.numVisible;
    }
    isAutoplay() {
        return this.autoplayInterval && this.allowAutoplay;
    }
    isForwardNavDisabled() {
        return this.isEmpty() || (this._page >= (this.totalDots() - 1) && !this.isCircular());
    }
    isBackwardNavDisabled() {
        return this.isEmpty() || (this._page <= 0 && !this.isCircular());
    }
    isEmpty() {
        return !this.value || this.value.length === 0;
    }
    navForward(e, index) {
        if (this.isCircular() || this._page < (this.totalDots() - 1)) {
            this.step(-1, index);
        }
        if (this.autoplayInterval) {
            this.stopAutoplay();
            this.allowAutoplay = false;
        }
        if (e && e.cancelable) {
            e.preventDefault();
        }
    }
    navBackward(e, index) {
        if (this.isCircular() || this._page !== 0) {
            this.step(1, index);
        }
        if (this.autoplayInterval) {
            this.stopAutoplay();
            this.allowAutoplay = false;
        }
        if (e && e.cancelable) {
            e.preventDefault();
        }
    }
    onDotClick(e, index) {
        let page = this._page;
        if (this.autoplayInterval) {
            this.stopAutoplay();
            this.allowAutoplay = false;
        }
        if (index > page) {
            this.navForward(e, index);
        }
        else if (index < page) {
            this.navBackward(e, index);
        }
    }
    step(dir, page) {
        let totalShiftedItems = this.totalShiftedItems;
        const isCircular = this.isCircular();
        if (page != null) {
            totalShiftedItems = (this._numScroll * page) * -1;
            if (isCircular) {
                totalShiftedItems -= this._numVisible;
            }
            this.isRemainingItemsAdded = false;
        }
        else {
            totalShiftedItems += (this._numScroll * dir);
            if (this.isRemainingItemsAdded) {
                totalShiftedItems += this.remainingItems - (this._numScroll * dir);
                this.isRemainingItemsAdded = false;
            }
            let originalShiftedItems = isCircular ? (totalShiftedItems + this._numVisible) : totalShiftedItems;
            page = Math.abs(Math.floor((originalShiftedItems / this._numScroll)));
        }
        if (isCircular && this.page === (this.totalDots() - 1) && dir === -1) {
            totalShiftedItems = -1 * (this.value.length + this._numVisible);
            page = 0;
        }
        else if (isCircular && this.page === 0 && dir === 1) {
            totalShiftedItems = 0;
            page = (this.totalDots() - 1);
        }
        else if (page === (this.totalDots() - 1) && this.remainingItems > 0) {
            totalShiftedItems += ((this.remainingItems * -1) - (this._numScroll * dir));
            this.isRemainingItemsAdded = true;
        }
        if (this.itemsContainer) {
            this.itemsContainer.nativeElement.style.transform = this.isVertical() ? `translate3d(0, ${totalShiftedItems * (100 / this._numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this._numVisible)}%, 0, 0)`;
            this.itemsContainer.nativeElement.style.transition = 'transform 500ms ease 0s';
        }
        this.totalShiftedItems = totalShiftedItems;
        this._page = page;
        this.onPage.emit({
            page: this.page
        });
    }
    startAutoplay() {
        this.interval = setInterval(() => {
            if (this.totalDots() > 0) {
                if (this.page === (this.totalDots() - 1)) {
                    this.step(-1, 0);
                }
                else {
                    this.step(-1, this.page + 1);
                }
            }
        }, this.autoplayInterval);
    }
    stopAutoplay() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
    onTransitionEnd() {
        if (this.itemsContainer) {
            this.itemsContainer.nativeElement.style.transition = '';
            if ((this.page === 0 || this.page === (this.totalDots() - 1)) && this.isCircular()) {
                this.itemsContainer.nativeElement.style.transform = this.isVertical() ? `translate3d(0, ${this.totalShiftedItems * (100 / this._numVisible)}%, 0)` : `translate3d(${this.totalShiftedItems * (100 / this._numVisible)}%, 0, 0)`;
            }
        }
    }
    onTouchStart(e) {
        let touchobj = e.changedTouches[0];
        this.startPos = {
            x: touchobj.pageX,
            y: touchobj.pageY
        };
    }
    onTouchMove(e) {
        if (e.cancelable) {
            e.preventDefault();
        }
    }
    onTouchEnd(e) {
        let touchobj = e.changedTouches[0];
        if (this.isVertical()) {
            this.changePageOnTouch(e, (touchobj.pageY - this.startPos.y));
        }
        else {
            this.changePageOnTouch(e, (touchobj.pageX - this.startPos.x));
        }
    }
    changePageOnTouch(e, diff) {
        if (Math.abs(diff) > this.swipeThreshold) {
            if (diff < 0) {
                this.navForward(e);
            }
            else {
                this.navBackward(e);
            }
        }
    }
    bindDocumentListeners() {
        if (!this.documentResizeListener) {
            this.documentResizeListener = (e) => {
                this.calculatePosition();
            };
            window.addEventListener('resize', this.documentResizeListener);
        }
    }
    unbindDocumentListeners() {
        if (this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    }
    ngOnDestroy() {
        if (this.responsiveOptions) {
            this.unbindDocumentListeners();
        }
        if (this.autoplayInterval) {
            this.stopAutoplay();
        }
    }
}
Carousel.ɵfac = function Carousel_Factory(t) { return new (t || Carousel)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
Carousel.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Carousel, selectors: [["p-carousel"]], contentQueries: function Carousel_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, Header, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, Footer, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.headerFacet = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.footerFacet = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function Carousel_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.itemsContainer = _t.first);
    } }, inputs: { orientation: "orientation", verticalViewPortHeight: "verticalViewPortHeight", contentClass: "contentClass", indicatorsContentClass: "indicatorsContentClass", circular: "circular", autoplayInterval: "autoplayInterval", page: "page", numVisible: "numVisible", numScroll: "numScroll", value: "value", responsiveOptions: "responsiveOptions", style: "style", styleClass: "styleClass" }, outputs: { onPage: "onPage" }, ngContentSelectors: _c12, decls: 17, vars: 39, consts: [[3, "ngClass", "ngStyle"], ["class", "p-carousel-header", 4, "ngIf"], [3, "ngClass"], [1, "p-carousel-container"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click"], [1, "p-carousel-items-content", 3, "ngStyle"], [1, "p-carousel-items-container", 3, "transitionend", "touchend", "touchstart", "touchmove"], ["itemsContainer", ""], [3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "p-carousel-footer", 4, "ngIf"], [1, "p-carousel-header"], [4, "ngTemplateOutlet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "button", 1, "p-link", 3, "click"], [1, "p-carousel-footer"]], template: function Carousel_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c5);
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, Carousel_div_1_Template, 3, 1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "div", 3);
        ɵngcc0.ɵɵelementStart(4, "button", 4);
        ɵngcc0.ɵɵlistener("click", function Carousel_Template_button_click_4_listener($event) { return ctx.navBackward($event); });
        ɵngcc0.ɵɵelement(5, "span", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "div", 5);
        ɵngcc0.ɵɵelementStart(7, "div", 6, 7);
        ɵngcc0.ɵɵlistener("transitionend", function Carousel_Template_div_transitionend_7_listener() { return ctx.onTransitionEnd(); })("touchend", function Carousel_Template_div_touchend_7_listener($event) { return ctx.onTouchEnd($event); })("touchstart", function Carousel_Template_div_touchstart_7_listener($event) { return ctx.onTouchStart($event); })("touchmove", function Carousel_Template_div_touchmove_7_listener($event) { return ctx.onTouchMove($event); });
        ɵngcc0.ɵɵtemplate(9, Carousel_div_9_Template, 2, 9, "div", 8);
        ɵngcc0.ɵɵtemplate(10, Carousel_div_10_Template, 2, 9, "div", 8);
        ɵngcc0.ɵɵtemplate(11, Carousel_div_11_Template, 2, 9, "div", 8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(12, "button", 4);
        ɵngcc0.ɵɵlistener("click", function Carousel_Template_button_click_12_listener($event) { return ctx.navForward($event); });
        ɵngcc0.ɵɵelement(13, "span", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(14, "ul", 2);
        ɵngcc0.ɵɵtemplate(15, Carousel_li_15_Template, 2, 3, "li", 8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(16, Carousel_div_16_Template, 3, 1, "div", 9);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(24, _c6, ctx.isVertical(), !ctx.isVertical()))("ngStyle", ctx.style);
        ɵngcc0.ɵɵattribute("id", ctx.id);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.headerFacet || ctx.headerTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMap(ctx.contentClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-carousel-content");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(27, _c7, ctx.isBackwardNavDisabled()))("disabled", ctx.isBackwardNavDisabled());
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(29, _c8, !ctx.isVertical(), ctx.isVertical()));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(32, _c9, ctx.isVertical() ? ctx.verticalViewPortHeight : "auto"));
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.clonedItemsForStarting);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.value);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.clonedItemsForFinishing);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(34, _c10, ctx.isForwardNavDisabled()))("disabled", ctx.isForwardNavDisabled());
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(36, _c11, !ctx.isVertical(), ctx.isVertical()));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMap(ctx.indicatorsContentClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-carousel-indicators p-reset");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.totalDotsArray());
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.footerFacet || ctx.footerTemplate);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf, ɵngcc2.Ripple, ɵngcc1.NgForOf, ɵngcc1.NgTemplateOutlet], styles: [".p-carousel,.p-carousel-content{-ms-flex-direction:column;display:-ms-flexbox;display:flex;flex-direction:column}.p-carousel-content{overflow:auto}.p-carousel-next,.p-carousel-prev{-ms-flex-align:center;-ms-flex-item-align:center;-ms-flex-negative:0;-ms-flex-pack:center;-ms-flex-positive:0;align-items:center;align-self:center;display:-ms-flexbox;display:flex;flex-grow:0;flex-shrink:0;justify-content:center;overflow:hidden;position:relative}.p-carousel-container{-ms-flex-direction:row;display:-ms-flexbox;display:flex;flex-direction:row}.p-carousel-items-content{overflow:hidden;width:100%}.p-carousel-indicators,.p-carousel-items-container{-ms-flex-direction:row;display:-ms-flexbox;display:flex;flex-direction:row}.p-carousel-indicators{-ms-flex-pack:center;-ms-flex-wrap:wrap;flex-wrap:wrap;justify-content:center}.p-carousel-indicator>button{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center}.p-carousel-vertical .p-carousel-container{-ms-flex-direction:column;flex-direction:column}.p-carousel-vertical .p-carousel-items-container{-ms-flex-direction:column;flex-direction:column;height:100%}.p-items-hidden .p-carousel-item{visibility:hidden}.p-items-hidden .p-carousel-item.p-carousel-item-active{visibility:visible}"], encapsulation: 2, changeDetection: 0 });
Carousel.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: ChangeDetectorRef }
];
Carousel.propDecorators = {
    page: [{ type: Input }],
    numVisible: [{ type: Input }],
    numScroll: [{ type: Input }],
    responsiveOptions: [{ type: Input }],
    orientation: [{ type: Input }],
    verticalViewPortHeight: [{ type: Input }],
    contentClass: [{ type: Input }],
    indicatorsContentClass: [{ type: Input }],
    value: [{ type: Input }],
    circular: [{ type: Input }],
    autoplayInterval: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    onPage: [{ type: Output }],
    itemsContainer: [{ type: ViewChild, args: ['itemsContainer',] }],
    headerFacet: [{ type: ContentChild, args: [Header,] }],
    footerFacet: [{ type: ContentChild, args: [Footer,] }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Carousel, [{
        type: Component,
        args: [{
                selector: 'p-carousel',
                template: `
		<div [attr.id]="id" [ngClass]="{'p-carousel p-component':true, 'p-carousel-vertical': isVertical(), 'p-carousel-horizontal': !isVertical()}" [ngStyle]="style" [class]="styleClass">
			<div class="p-carousel-header" *ngIf="headerFacet || headerTemplate">
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
			</div>
			<div [class]="contentClass" [ngClass]="'p-carousel-content'">
				<div class="p-carousel-container">
					<button type="button" [ngClass]="{'p-carousel-prev p-link':true, 'p-disabled': isBackwardNavDisabled()}" [disabled]="isBackwardNavDisabled()" (click)="navBackward($event)" pRipple>
						<span [ngClass]="{'p-carousel-prev-icon pi': true, 'pi-chevron-left': !isVertical(), 'pi-chevron-up': isVertical()}"></span>
					</button>
					<div class="p-carousel-items-content" [ngStyle]="{'height': isVertical() ? verticalViewPortHeight : 'auto'}">
						<div #itemsContainer class="p-carousel-items-container" (transitionend)="onTransitionEnd()" (touchend)="onTouchEnd($event)" (touchstart)="onTouchStart($event)" (touchmove)="onTouchMove($event)">
                            <div *ngFor="let item of clonedItemsForStarting; let index = index" [ngClass]= "{'p-carousel-item p-carousel-item-cloned': true,
                                'p-carousel-item-active': (totalShiftedItems * -1) === (value.length),
							    'p-carousel-item-start': 0 === index,
							    'p-carousel-item-end': (clonedItemsForStarting.length - 1) === index}">
								<ng-container *ngTemplateOutlet="itemTemplate; context: {$implicit: item}"></ng-container>
							</div>
                            <div *ngFor="let item of value; let index = index" [ngClass]= "{'p-carousel-item': true,
                                'p-carousel-item-active': (firstIndex() <= index && lastIndex() >= index),
							    'p-carousel-item-start': firstIndex() === index,
							    'p-carousel-item-end': lastIndex() === index}">
								<ng-container *ngTemplateOutlet="itemTemplate; context: {$implicit: item}"></ng-container>
							</div>
                            <div *ngFor="let item of clonedItemsForFinishing; let index = index" [ngClass]= "{'p-carousel-item p-carousel-item-cloned': true,
                                'p-carousel-item-active': ((totalShiftedItems *-1) === numVisible),
							    'p-carousel-item-start': 0 === index,
							    'p-carousel-item-end': (clonedItemsForFinishing.length - 1) === index}">
								<ng-container *ngTemplateOutlet="itemTemplate; context: {$implicit: item}"></ng-container>
							</div>
						</div>
					</div>
					<button type="button" [ngClass]="{'p-carousel-next p-link': true, 'p-disabled': isForwardNavDisabled()}" [disabled]="isForwardNavDisabled()" (click)="navForward($event)" pRipple>
						<span [ngClass]="{'p-carousel-prev-icon pi': true, 'pi-chevron-right': !isVertical(), 'pi-chevron-down': isVertical()}"></span>
					</button>
				</div>
				<ul [ngClass]="'p-carousel-indicators p-reset'" [class]="indicatorsContentClass">
					<li *ngFor="let totalDot of totalDotsArray(); let i = index" [ngClass]="{'p-carousel-indicator':true,'p-highlight': _page === i}">
						<button type="button" class="p-link" (click)="onDotClick($event, i)"></button>
					</li>
				</ul>
			</div>
			<div class="p-carousel-footer" *ngIf="footerFacet || footerTemplate">
                <ng-content select="p-footer"></ng-content>
                <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
			</div>
		</div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-carousel,.p-carousel-content{-ms-flex-direction:column;display:-ms-flexbox;display:flex;flex-direction:column}.p-carousel-content{overflow:auto}.p-carousel-next,.p-carousel-prev{-ms-flex-align:center;-ms-flex-item-align:center;-ms-flex-negative:0;-ms-flex-pack:center;-ms-flex-positive:0;align-items:center;align-self:center;display:-ms-flexbox;display:flex;flex-grow:0;flex-shrink:0;justify-content:center;overflow:hidden;position:relative}.p-carousel-container{-ms-flex-direction:row;display:-ms-flexbox;display:flex;flex-direction:row}.p-carousel-items-content{overflow:hidden;width:100%}.p-carousel-indicators,.p-carousel-items-container{-ms-flex-direction:row;display:-ms-flexbox;display:flex;flex-direction:row}.p-carousel-indicators{-ms-flex-pack:center;-ms-flex-wrap:wrap;flex-wrap:wrap;justify-content:center}.p-carousel-indicator>button{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center}.p-carousel-vertical .p-carousel-container{-ms-flex-direction:column;flex-direction:column}.p-carousel-vertical .p-carousel-items-container{-ms-flex-direction:column;flex-direction:column;height:100%}.p-items-hidden .p-carousel-item{visibility:hidden}.p-items-hidden .p-carousel-item.p-carousel-item-active{visibility:visible}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }, { type: ɵngcc0.ChangeDetectorRef }]; }, { orientation: [{
            type: Input
        }], verticalViewPortHeight: [{
            type: Input
        }], contentClass: [{
            type: Input
        }], indicatorsContentClass: [{
            type: Input
        }], circular: [{
            type: Input
        }], autoplayInterval: [{
            type: Input
        }], onPage: [{
            type: Output
        }], page: [{
            type: Input
        }], numVisible: [{
            type: Input
        }], numScroll: [{
            type: Input
        }], value: [{
            type: Input
        }], responsiveOptions: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], itemsContainer: [{
            type: ViewChild,
            args: ['itemsContainer']
        }], headerFacet: [{
            type: ContentChild,
            args: [Header]
        }], footerFacet: [{
            type: ContentChild,
            args: [Footer]
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
export class CarouselModule {
}
CarouselModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CarouselModule });
CarouselModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CarouselModule_Factory(t) { return new (t || CarouselModule)(); }, imports: [[CommonModule, SharedModule, RippleModule], CommonModule, SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CarouselModule, { declarations: function () { return [Carousel]; }, imports: function () { return [CommonModule, SharedModule, RippleModule]; }, exports: function () { return [CommonModule, Carousel, SharedModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CarouselModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, SharedModule, RippleModule],
                exports: [CommonModule, Carousel, SharedModule],
                declarations: [Carousel]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFpQyxlQUFlLEVBQWEsUUFBUSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4UCxPQUFPLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlEbEQsTUFBTSxPQUFPLFFBQVE7QUFBRyxJQXFJdkIsWUFBbUIsRUFBYyxFQUFTLElBQVksRUFBUyxFQUFxQjtBQUFJLFFBQXJFLE9BQUUsR0FBRixFQUFFLENBQVk7QUFBQyxRQUFRLFNBQUksR0FBSixJQUFJLENBQVE7QUFBQyxRQUFRLE9BQUUsR0FBRixFQUFFLENBQW1CO0FBQUMsUUE5RjVFLGdCQUFXLEdBQUcsWUFBWSxDQUFDO0FBQ3JDLFFBQ1UsMkJBQXNCLEdBQUcsT0FBTyxDQUFDO0FBQzNDLFFBQ1UsaUJBQVksR0FBVyxFQUFFLENBQUM7QUFDcEMsUUFDVSwyQkFBc0IsR0FBVyxFQUFFLENBQUM7QUFDOUMsUUFXVSxhQUFRLEdBQVcsS0FB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SztBQUFLLDJCQUVWLEtBQUs7QUFBSyxxQ0FFVixLQUFLO0FBQUssb0JBRVYsS0FBSztBQUFLLHVCQVVWLEtBQUs7QUFBSywrQkFFVixLQUFLO0FBQUssb0JBRVYsS0FBSztBQUFLLHlCQUVWLEtBQUs7QUFBSyxxQkFFUCxNQUFNO0FBQUssNkJBRWQsU0FBUyxTQUFDLGdCQUFnQjtBQUFPLDBCQUVqQyxZQUFZLFNBQUMsTUFBTTtBQUFPLDBCQUV2QixZQUFZLFNBQUMsTUFBTTtBQUFPLHdCQUU3QixlQUFlLFNBQUMsYUFBYTtBQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQWlnQnZDLE1BQU0sT0FBTyxjQUFjO0FBQUc7MENBTDdCLFFBQVEsU0FBQztJQUNULE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLGtCQUNuRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLFlBQVksQ0FBQyxrQkFDL0MsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQ3hCOzs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgQWZ0ZXJDb250ZW50SW5pdCwgVGVtcGxhdGVSZWYsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBOZ01vZHVsZSwgTmdab25lLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgQ29udGVudENoaWxkLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0VuY2Fwc3VsYXRpb24sIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcmltZVRlbXBsYXRlLCBTaGFyZWRNb2R1bGUsIEhlYWRlciwgRm9vdGVyIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHsgUmlwcGxlTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9yaXBwbGUnOyAgXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVW5pcXVlQ29tcG9uZW50SWQgfSBmcm9tICdwcmltZW5nL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAncC1jYXJvdXNlbCcsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiBbYXR0ci5pZF09XCJpZFwiIFtuZ0NsYXNzXT1cInsncC1jYXJvdXNlbCBwLWNvbXBvbmVudCc6dHJ1ZSwgJ3AtY2Fyb3VzZWwtdmVydGljYWwnOiBpc1ZlcnRpY2FsKCksICdwLWNhcm91c2VsLWhvcml6b250YWwnOiAhaXNWZXJ0aWNhbCgpfVwiIFtuZ1N0eWxlXT1cInN0eWxlXCIgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJwLWNhcm91c2VsLWhlYWRlclwiICpuZ0lmPVwiaGVhZGVyRmFjZXQgfHwgaGVhZGVyVGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJwLWhlYWRlclwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaGVhZGVyVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBbY2xhc3NdPVwiY29udGVudENsYXNzXCIgW25nQ2xhc3NdPVwiJ3AtY2Fyb3VzZWwtY29udGVudCdcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInAtY2Fyb3VzZWwtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgW25nQ2xhc3NdPVwieydwLWNhcm91c2VsLXByZXYgcC1saW5rJzp0cnVlLCAncC1kaXNhYmxlZCc6IGlzQmFja3dhcmROYXZEaXNhYmxlZCgpfVwiIFtkaXNhYmxlZF09XCJpc0JhY2t3YXJkTmF2RGlzYWJsZWQoKVwiIChjbGljayk9XCJuYXZCYWNrd2FyZCgkZXZlbnQpXCIgcFJpcHBsZT5cblx0XHRcdFx0XHRcdDxzcGFuIFtuZ0NsYXNzXT1cInsncC1jYXJvdXNlbC1wcmV2LWljb24gcGknOiB0cnVlLCAncGktY2hldnJvbi1sZWZ0JzogIWlzVmVydGljYWwoKSwgJ3BpLWNoZXZyb24tdXAnOiBpc1ZlcnRpY2FsKCl9XCI+PC9zcGFuPlxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwLWNhcm91c2VsLWl0ZW1zLWNvbnRlbnRcIiBbbmdTdHlsZV09XCJ7J2hlaWdodCc6IGlzVmVydGljYWwoKSA/IHZlcnRpY2FsVmlld1BvcnRIZWlnaHQgOiAnYXV0byd9XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2ICNpdGVtc0NvbnRhaW5lciBjbGFzcz1cInAtY2Fyb3VzZWwtaXRlbXMtY29udGFpbmVyXCIgKHRyYW5zaXRpb25lbmQpPVwib25UcmFuc2l0aW9uRW5kKClcIiAodG91Y2hlbmQpPVwib25Ub3VjaEVuZCgkZXZlbnQpXCIgKHRvdWNoc3RhcnQpPVwib25Ub3VjaFN0YXJ0KCRldmVudClcIiAodG91Y2htb3ZlKT1cIm9uVG91Y2hNb3ZlKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBpdGVtIG9mIGNsb25lZEl0ZW1zRm9yU3RhcnRpbmc7IGxldCBpbmRleCA9IGluZGV4XCIgW25nQ2xhc3NdPSBcInsncC1jYXJvdXNlbC1pdGVtIHAtY2Fyb3VzZWwtaXRlbS1jbG9uZWQnOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncC1jYXJvdXNlbC1pdGVtLWFjdGl2ZSc6ICh0b3RhbFNoaWZ0ZWRJdGVtcyAqIC0xKSA9PT0gKHZhbHVlLmxlbmd0aCksXG5cdFx0XHRcdFx0XHRcdCAgICAncC1jYXJvdXNlbC1pdGVtLXN0YXJ0JzogMCA9PT0gaW5kZXgsXG5cdFx0XHRcdFx0XHRcdCAgICAncC1jYXJvdXNlbC1pdGVtLWVuZCc6IChjbG9uZWRJdGVtc0ZvclN0YXJ0aW5nLmxlbmd0aCAtIDEpID09PSBpbmRleH1cIj5cblx0XHRcdFx0XHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaXRlbVRlbXBsYXRlOyBjb250ZXh0OiB7JGltcGxpY2l0OiBpdGVtfVwiPjwvbmctY29udGFpbmVyPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBpdGVtIG9mIHZhbHVlOyBsZXQgaW5kZXggPSBpbmRleFwiIFtuZ0NsYXNzXT0gXCJ7J3AtY2Fyb3VzZWwtaXRlbSc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwLWNhcm91c2VsLWl0ZW0tYWN0aXZlJzogKGZpcnN0SW5kZXgoKSA8PSBpbmRleCAmJiBsYXN0SW5kZXgoKSA+PSBpbmRleCksXG5cdFx0XHRcdFx0XHRcdCAgICAncC1jYXJvdXNlbC1pdGVtLXN0YXJ0JzogZmlyc3RJbmRleCgpID09PSBpbmRleCxcblx0XHRcdFx0XHRcdFx0ICAgICdwLWNhcm91c2VsLWl0ZW0tZW5kJzogbGFzdEluZGV4KCkgPT09IGluZGV4fVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpdGVtVGVtcGxhdGU7IGNvbnRleHQ6IHskaW1wbGljaXQ6IGl0ZW19XCI+PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGl0ZW0gb2YgY2xvbmVkSXRlbXNGb3JGaW5pc2hpbmc7IGxldCBpbmRleCA9IGluZGV4XCIgW25nQ2xhc3NdPSBcInsncC1jYXJvdXNlbC1pdGVtIHAtY2Fyb3VzZWwtaXRlbS1jbG9uZWQnOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncC1jYXJvdXNlbC1pdGVtLWFjdGl2ZSc6ICgodG90YWxTaGlmdGVkSXRlbXMgKi0xKSA9PT0gbnVtVmlzaWJsZSksXG5cdFx0XHRcdFx0XHRcdCAgICAncC1jYXJvdXNlbC1pdGVtLXN0YXJ0JzogMCA9PT0gaW5kZXgsXG5cdFx0XHRcdFx0XHRcdCAgICAncC1jYXJvdXNlbC1pdGVtLWVuZCc6IChjbG9uZWRJdGVtc0ZvckZpbmlzaGluZy5sZW5ndGggLSAxKSA9PT0gaW5kZXh9XCI+XG5cdFx0XHRcdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIml0ZW1UZW1wbGF0ZTsgY29udGV4dDogeyRpbXBsaWNpdDogaXRlbX1cIj48L25nLWNvbnRhaW5lcj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBbbmdDbGFzc109XCJ7J3AtY2Fyb3VzZWwtbmV4dCBwLWxpbmsnOiB0cnVlLCAncC1kaXNhYmxlZCc6IGlzRm9yd2FyZE5hdkRpc2FibGVkKCl9XCIgW2Rpc2FibGVkXT1cImlzRm9yd2FyZE5hdkRpc2FibGVkKClcIiAoY2xpY2spPVwibmF2Rm9yd2FyZCgkZXZlbnQpXCIgcFJpcHBsZT5cblx0XHRcdFx0XHRcdDxzcGFuIFtuZ0NsYXNzXT1cInsncC1jYXJvdXNlbC1wcmV2LWljb24gcGknOiB0cnVlLCAncGktY2hldnJvbi1yaWdodCc6ICFpc1ZlcnRpY2FsKCksICdwaS1jaGV2cm9uLWRvd24nOiBpc1ZlcnRpY2FsKCl9XCI+PC9zcGFuPlxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PHVsIFtuZ0NsYXNzXT1cIidwLWNhcm91c2VsLWluZGljYXRvcnMgcC1yZXNldCdcIiBbY2xhc3NdPVwiaW5kaWNhdG9yc0NvbnRlbnRDbGFzc1wiPlxuXHRcdFx0XHRcdDxsaSAqbmdGb3I9XCJsZXQgdG90YWxEb3Qgb2YgdG90YWxEb3RzQXJyYXkoKTsgbGV0IGkgPSBpbmRleFwiIFtuZ0NsYXNzXT1cInsncC1jYXJvdXNlbC1pbmRpY2F0b3InOnRydWUsJ3AtaGlnaGxpZ2h0JzogX3BhZ2UgPT09IGl9XCI+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInAtbGlua1wiIChjbGljayk9XCJvbkRvdENsaWNrKCRldmVudCwgaSlcIj48L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicC1jYXJvdXNlbC1mb290ZXJcIiAqbmdJZj1cImZvb3RlckZhY2V0IHx8IGZvb3RlclRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwicC1mb290ZXJcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImZvb3RlclRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cbiAgICBgLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgc3R5bGVVcmxzOiBbJy4vY2Fyb3VzZWwuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWwgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcblxuXHRASW5wdXQoKSBnZXQgcGFnZSgpOm51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuX3BhZ2U7XG5cdH1cblx0c2V0IHBhZ2UodmFsOm51bWJlcikge1xuXHRcdGlmICh0aGlzLmlzQ3JlYXRlZCAmJiB2YWwgIT09IHRoaXMuX3BhZ2UpIHtcblx0XHRcdGlmICh0aGlzLmF1dG9wbGF5SW50ZXJ2YWwpIHtcblx0XHRcdFx0dGhpcy5zdG9wQXV0b3BsYXkoKTtcblx0XHRcdFx0dGhpcy5hbGxvd0F1dG9wbGF5ID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh2YWwgPiB0aGlzLl9wYWdlICYmIHZhbCA8PSAodGhpcy50b3RhbERvdHMoKSAtIDEpKSB7XG5cdFx0XHRcdHRoaXMuc3RlcCgtMSwgdmFsKTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKHZhbCA8IHRoaXMuX3BhZ2UgKSB7XG5cdFx0XHRcdHRoaXMuc3RlcCgxLCB2YWwpO1xuXHRcdFx0fVxuXHRcdH0gXG5cblx0XHR0aGlzLl9wYWdlID0gdmFsO1xuXHR9XG5cdFx0XG5cdEBJbnB1dCgpIGdldCBudW1WaXNpYmxlKCk6bnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5fbnVtVmlzaWJsZTtcblx0fVxuXHRzZXQgbnVtVmlzaWJsZSh2YWw6bnVtYmVyKSB7XG5cdFx0dGhpcy5fbnVtVmlzaWJsZSA9IHZhbDtcblx0fVxuXHRcdFxuXHRASW5wdXQoKSBnZXQgbnVtU2Nyb2xsKCk6bnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5fbnVtVmlzaWJsZTtcblx0fVxuXHRzZXQgbnVtU2Nyb2xsKHZhbDpudW1iZXIpIHtcblx0XHR0aGlzLl9udW1TY3JvbGwgPSB2YWw7XG5cdH1cblx0XG5cdEBJbnB1dCgpIHJlc3BvbnNpdmVPcHRpb25zOiBhbnlbXTtcblx0XG5cdEBJbnB1dCgpIG9yaWVudGF0aW9uID0gXCJob3Jpem9udGFsXCI7XG5cdFxuXHRASW5wdXQoKSB2ZXJ0aWNhbFZpZXdQb3J0SGVpZ2h0ID0gXCIzMDBweFwiO1xuXHRcblx0QElucHV0KCkgY29udGVudENsYXNzOiBTdHJpbmcgPSBcIlwiO1xuXG5cdEBJbnB1dCgpIGluZGljYXRvcnNDb250ZW50Q2xhc3M6IFN0cmluZyA9IFwiXCI7XG5cblx0QElucHV0KCkgZ2V0IHZhbHVlKCkgOmFueVtdIHtcblx0XHRyZXR1cm4gdGhpcy5fdmFsdWU7XG5cdH07XG5cdHNldCB2YWx1ZSh2YWwpIHtcblx0XHR0aGlzLl92YWx1ZSA9IHZhbDtcblx0XHRpZiAodGhpcy5jaXJjdWxhciAmJiB0aGlzLl92YWx1ZSkge1xuXHRcdFx0dGhpcy5zZXRDbG9uZUl0ZW1zKCk7XG5cdFx0fVxuXHR9XG5cdFxuXHRASW5wdXQoKSBjaXJjdWxhcjpib29sZWFuID0gZmFsc2U7XG5cblx0QElucHV0KCkgYXV0b3BsYXlJbnRlcnZhbDpudW1iZXIgPSAwO1xuXG5cdEBJbnB1dCgpIHN0eWxlOiBhbnk7XG5cblx0QElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nO1xuXHRcbiAgICBAT3V0cHV0KCkgb25QYWdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAVmlld0NoaWxkKCdpdGVtc0NvbnRhaW5lcicpIGl0ZW1zQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG5cdEBDb250ZW50Q2hpbGQoSGVhZGVyKSBoZWFkZXJGYWNldDtcblxuICAgIEBDb250ZW50Q2hpbGQoRm9vdGVyKSBmb290ZXJGYWNldDtcblxuXHRAQ29udGVudENoaWxkcmVuKFByaW1lVGVtcGxhdGUpIHRlbXBsYXRlczogUXVlcnlMaXN0PGFueT47XG5cblx0X251bVZpc2libGU6IG51bWJlciA9IDE7XG5cblx0X251bVNjcm9sbDogbnVtYmVyID0gMTtcblxuXHRfb2xkTnVtU2Nyb2xsOiBudW1iZXIgPSAwO1xuXG5cdHByZXZTdGF0ZTogYW55ID0ge1xuXHRcdG51bVNjcm9sbDowLFxuXHRcdG51bVZpc2libGU6MCxcblx0XHR2YWx1ZTogW11cblx0fTtcblxuXHRkZWZhdWx0TnVtU2Nyb2xsOm51bWJlciA9IDE7XG5cblx0ZGVmYXVsdE51bVZpc2libGU6bnVtYmVyID0gMTtcblxuXHRfcGFnZTogbnVtYmVyID0gMDtcblxuXHRfdmFsdWU6IGFueVtdO1xuXG5cdGNhcm91c2VsU3R5bGU6YW55O1xuXG5cdGlkOnN0cmluZztcblxuXHR0b3RhbFNoaWZ0ZWRJdGVtcztcblxuXHRpc1JlbWFpbmluZ0l0ZW1zQWRkZWQ6Ym9vbGVhbiA9IGZhbHNlO1xuXG5cdGFuaW1hdGlvblRpbWVvdXQ6YW55O1xuXG5cdHRyYW5zbGF0ZVRpbWVvdXQ6YW55O1xuXG5cdHJlbWFpbmluZ0l0ZW1zOiBudW1iZXIgPSAwO1xuXG5cdF9pdGVtczogYW55W107XG5cblx0c3RhcnRQb3M6IGFueTtcblxuXHRkb2N1bWVudFJlc2l6ZUxpc3RlbmVyOiBhbnk7XG5cblx0Y2xvbmVkSXRlbXNGb3JTdGFydGluZzogYW55W107XG5cblx0Y2xvbmVkSXRlbXNGb3JGaW5pc2hpbmc6IGFueVtdO1xuXG5cdGFsbG93QXV0b3BsYXk6IGJvb2xlYW47XG5cblx0aW50ZXJ2YWw6IGFueTtcblxuXHRpc0NyZWF0ZWQ6IGJvb2xlYW47XG5cblx0c3dpcGVUaHJlc2hvbGQ6IG51bWJlciA9IDIwO1xuXG4gICAgaXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIFxuICAgIGhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgZm9vdGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0Y29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmLCBwdWJsaWMgem9uZTogTmdab25lLCBwdWJsaWMgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7IFxuXHRcdHRoaXMudG90YWxTaGlmdGVkSXRlbXMgPSB0aGlzLnBhZ2UgKiB0aGlzLm51bVNjcm9sbCAqIC0xOyBcblx0fVxuXG5cdG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcblx0XHR0aGlzLmlkID0gVW5pcXVlQ29tcG9uZW50SWQoKTtcblx0XHR0aGlzLmFsbG93QXV0b3BsYXkgPSAhIXRoaXMuYXV0b3BsYXlJbnRlcnZhbDtcblxuXHRcdGlmICh0aGlzLmNpcmN1bGFyKSB7XG5cdFx0XHR0aGlzLnNldENsb25lSXRlbXMoKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5yZXNwb25zaXZlT3B0aW9ucykge1xuXHRcdFx0dGhpcy5kZWZhdWx0TnVtU2Nyb2xsID0gdGhpcy5fbnVtU2Nyb2xsO1xuXHRcdFx0dGhpcy5kZWZhdWx0TnVtVmlzaWJsZSA9IHRoaXMuX251bVZpc2libGU7XG5cdFx0fVxuXG5cdFx0dGhpcy5jcmVhdGVTdHlsZSgpO1xuXHRcdHRoaXMuY2FsY3VsYXRlUG9zaXRpb24oKTtcblxuXHRcdGlmICh0aGlzLnJlc3BvbnNpdmVPcHRpb25zKSB7XG5cdFx0XHR0aGlzLmJpbmREb2N1bWVudExpc3RlbmVycygpO1xuXHRcdH1cblxuXHRcdHRoaXMudGVtcGxhdGVzLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRcdHN3aXRjaCAoaXRlbS5nZXRUeXBlKCkpIHtcblx0XHRcdFx0Y2FzZSAnaXRlbSc6XG5cdFx0XHRcdFx0dGhpcy5pdGVtVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnaGVhZGVyJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdmb290ZXInOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvb3RlclRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRoaXMuaXRlbVRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcblx0XHRjb25zdCBpc0NpcmN1bGFyID0gdGhpcy5pc0NpcmN1bGFyKCk7XG5cdFx0bGV0IHRvdGFsU2hpZnRlZEl0ZW1zID0gdGhpcy50b3RhbFNoaWZ0ZWRJdGVtcztcblx0XHRcblx0XHRpZiAodGhpcy52YWx1ZSAmJiAodGhpcy5wcmV2U3RhdGUubnVtU2Nyb2xsICE9PSB0aGlzLl9udW1TY3JvbGwgfHwgdGhpcy5wcmV2U3RhdGUubnVtVmlzaWJsZSAhPT0gdGhpcy5fbnVtVmlzaWJsZSB8fCB0aGlzLnByZXZTdGF0ZS52YWx1ZS5sZW5ndGggIT09IHRoaXMudmFsdWUubGVuZ3RoKSkge1xuXHRcdFx0aWYgKHRoaXMuYXV0b3BsYXlJbnRlcnZhbCkge1xuXHRcdFx0XHR0aGlzLnN0b3BBdXRvcGxheSgpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHR0aGlzLnJlbWFpbmluZ0l0ZW1zID0gKHRoaXMudmFsdWUubGVuZ3RoIC0gdGhpcy5fbnVtVmlzaWJsZSkgJSB0aGlzLl9udW1TY3JvbGw7XG5cblx0XHRcdGxldCBwYWdlID0gdGhpcy5fcGFnZTtcblx0XHRcdGlmICh0aGlzLnRvdGFsRG90cygpICE9PSAwICYmIHBhZ2UgPj0gdGhpcy50b3RhbERvdHMoKSkge1xuICAgICAgICAgICAgICAgIHBhZ2UgPSB0aGlzLnRvdGFsRG90cygpIC0gMTtcblx0XHRcdFx0dGhpcy5fcGFnZSA9IHBhZ2U7XG5cdFx0XHRcdHRoaXMub25QYWdlLmVtaXQoe1xuXHRcdFx0XHRcdHBhZ2U6IHRoaXMucGFnZVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0dG90YWxTaGlmdGVkSXRlbXMgPSAocGFnZSAqIHRoaXMuX251bVNjcm9sbCkgKiAtMTtcbiAgICAgICAgICAgIGlmIChpc0NpcmN1bGFyKSB7XG4gICAgICAgICAgICAgICAgdG90YWxTaGlmdGVkSXRlbXMgLT0gdGhpcy5fbnVtVmlzaWJsZTtcbiAgICAgICAgICAgIH1cblxuXHRcdFx0aWYgKHBhZ2UgPT09ICh0aGlzLnRvdGFsRG90cygpIC0gMSkgJiYgdGhpcy5yZW1haW5pbmdJdGVtcyA+IDApIHtcblx0XHRcdFx0dG90YWxTaGlmdGVkSXRlbXMgKz0gKC0xICogdGhpcy5yZW1haW5pbmdJdGVtcykgKyB0aGlzLl9udW1TY3JvbGw7XG5cdFx0XHRcdHRoaXMuaXNSZW1haW5pbmdJdGVtc0FkZGVkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0aGlzLmlzUmVtYWluaW5nSXRlbXNBZGRlZCA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodG90YWxTaGlmdGVkSXRlbXMgIT09IHRoaXMudG90YWxTaGlmdGVkSXRlbXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdGFsU2hpZnRlZEl0ZW1zID0gdG90YWxTaGlmdGVkSXRlbXM7XG4gICAgICAgICAgICB9XG5cblx0XHRcdHRoaXMuX29sZE51bVNjcm9sbCA9IHRoaXMuX251bVNjcm9sbDtcblx0XHRcdHRoaXMucHJldlN0YXRlLm51bVNjcm9sbCA9IHRoaXMuX251bVNjcm9sbDtcblx0XHRcdHRoaXMucHJldlN0YXRlLm51bVZpc2libGUgPSB0aGlzLl9udW1WaXNpYmxlO1xuXHRcdFx0dGhpcy5wcmV2U3RhdGUudmFsdWUgPSB0aGlzLl92YWx1ZTtcblxuXHRcdFx0aWYgKHRoaXMudG90YWxEb3RzKCkgPiAwICYmIHRoaXMuaXRlbXNDb250YWluZXIgJiYgdGhpcy5pdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50KSB7XG5cdFx0XHRcdHRoaXMuaXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSB0aGlzLmlzVmVydGljYWwoKSA/IGB0cmFuc2xhdGUzZCgwLCAke3RvdGFsU2hpZnRlZEl0ZW1zICogKDEwMC8gdGhpcy5fbnVtVmlzaWJsZSl9JSwgMClgIDogYHRyYW5zbGF0ZTNkKCR7dG90YWxTaGlmdGVkSXRlbXMgKiAoMTAwLyB0aGlzLl9udW1WaXNpYmxlKX0lLCAwLCAwKWA7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHRoaXMuaXNDcmVhdGVkID0gdHJ1ZTtcblxuXHRcdFx0aWYgKHRoaXMuYXV0b3BsYXlJbnRlcnZhbCAmJiB0aGlzLmlzQXV0b3BsYXkoKSkge1xuXHRcdFx0XHR0aGlzLnN0YXJ0QXV0b3BsYXkoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoaXNDaXJjdWxhcikge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFnZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRvdGFsU2hpZnRlZEl0ZW1zID0gLTEgKiB0aGlzLl9udW1WaXNpYmxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG90YWxTaGlmdGVkSXRlbXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0b3RhbFNoaWZ0ZWRJdGVtcyA9IC0xICogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVtYWluaW5nSXRlbXMgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNSZW1haW5pbmdJdGVtc0FkZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0b3RhbFNoaWZ0ZWRJdGVtcyAhPT0gdGhpcy50b3RhbFNoaWZ0ZWRJdGVtcykge1xuXHRcdFx0XHR0aGlzLnRvdGFsU2hpZnRlZEl0ZW1zID0gdG90YWxTaGlmdGVkSXRlbXM7XG4gICAgICAgICAgICB9XG5cdFx0fVxuXHR9XG5cblx0Y3JlYXRlU3R5bGUoKSB7XG5cdFx0XHRpZiAoIXRoaXMuY2Fyb3VzZWxTdHlsZSkge1xuXHRcdFx0XHR0aGlzLmNhcm91c2VsU3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXHRcdFx0XHR0aGlzLmNhcm91c2VsU3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jYXJvdXNlbFN0eWxlKTtcblx0XHRcdH1cblxuXHRcdFx0bGV0IGlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICMke3RoaXMuaWR9IC5wLWNhcm91c2VsLWl0ZW0ge1xuXHRcdFx0XHRmbGV4OiAxIDAgJHsgKDEwMC8gdGhpcy5udW1WaXNpYmxlKSB9JVxuXHRcdFx0fVxuICAgICAgICBgO1xuXG5cdFx0XHRpZiAodGhpcy5yZXNwb25zaXZlT3B0aW9ucykge1xuXHRcdFx0XHR0aGlzLnJlc3BvbnNpdmVPcHRpb25zLnNvcnQoKGRhdGExLCBkYXRhMikgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHZhbHVlMSA9IGRhdGExLmJyZWFrcG9pbnQ7XG5cdFx0XHRcdFx0Y29uc3QgdmFsdWUyID0gZGF0YTIuYnJlYWtwb2ludDtcblx0XHRcdFx0XHRsZXQgcmVzdWx0ID0gbnVsbDtcblxuXHRcdFx0XHRcdGlmICh2YWx1ZTEgPT0gbnVsbCAmJiB2YWx1ZTIgIT0gbnVsbClcblx0XHRcdFx0XHRcdHJlc3VsdCA9IC0xO1xuXHRcdFx0XHRcdGVsc2UgaWYgKHZhbHVlMSAhPSBudWxsICYmIHZhbHVlMiA9PSBudWxsKVxuXHRcdFx0XHRcdFx0cmVzdWx0ID0gMTtcblx0XHRcdFx0XHRlbHNlIGlmICh2YWx1ZTEgPT0gbnVsbCAmJiB2YWx1ZTIgPT0gbnVsbClcblx0XHRcdFx0XHRcdHJlc3VsdCA9IDA7XG5cdFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIHZhbHVlMSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIHZhbHVlMiA9PT0gJ3N0cmluZycpXG5cdFx0XHRcdFx0XHRyZXN1bHQgPSB2YWx1ZTEubG9jYWxlQ29tcGFyZSh2YWx1ZTIsIHVuZGVmaW5lZCwgeyBudW1lcmljOiB0cnVlIH0pO1xuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdHJlc3VsdCA9ICh2YWx1ZTEgPCB2YWx1ZTIpID8gLTEgOiAodmFsdWUxID4gdmFsdWUyKSA/IDEgOiAwO1xuXG5cdFx0XHRcdFx0cmV0dXJuIC0xICogcmVzdWx0O1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucmVzcG9uc2l2ZU9wdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRsZXQgcmVzID0gdGhpcy5yZXNwb25zaXZlT3B0aW9uc1tpXTtcblxuXHRcdFx0XHRcdGlubmVySFRNTCArPSBgXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7cmVzLmJyZWFrcG9pbnR9KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAjJHt0aGlzLmlkfSAucC1jYXJvdXNlbC1pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDAgJHsgKDEwMC8gcmVzLm51bVZpc2libGUpIH0lXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5jYXJvdXNlbFN0eWxlLmlubmVySFRNTCA9IGlubmVySFRNTDtcblx0XHR9XG5cblx0Y2FsY3VsYXRlUG9zaXRpb24oKSB7XG5cdFx0aWYgKHRoaXMuaXRlbXNDb250YWluZXIgJiYgdGhpcy5yZXNwb25zaXZlT3B0aW9ucykge1xuXHRcdFx0bGV0IHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cdFx0XHRsZXQgbWF0Y2hlZFJlc3BvbnNpdmVEYXRhID0ge1xuXHRcdFx0XHRudW1WaXNpYmxlOiB0aGlzLmRlZmF1bHROdW1WaXNpYmxlLFxuXHRcdFx0XHRudW1TY3JvbGw6IHRoaXMuZGVmYXVsdE51bVNjcm9sbFxuXHRcdFx0fTtcblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJlc3BvbnNpdmVPcHRpb25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGxldCByZXMgPSB0aGlzLnJlc3BvbnNpdmVPcHRpb25zW2ldO1xuXG5cdFx0XHRcdGlmIChwYXJzZUludChyZXMuYnJlYWtwb2ludCwgMTApID49IHdpbmRvd1dpZHRoKSB7XG5cdFx0XHRcdFx0bWF0Y2hlZFJlc3BvbnNpdmVEYXRhID0gcmVzO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLl9udW1TY3JvbGwgIT09IG1hdGNoZWRSZXNwb25zaXZlRGF0YS5udW1TY3JvbGwpIHtcblx0XHRcdFx0bGV0IHBhZ2UgPSB0aGlzLl9wYWdlO1xuXHRcdFx0XHRwYWdlID0gTWF0aC5mbG9vcigocGFnZSAqIHRoaXMuX251bVNjcm9sbCkgLyBtYXRjaGVkUmVzcG9uc2l2ZURhdGEubnVtU2Nyb2xsKTtcblxuXHRcdFx0XHRsZXQgdG90YWxTaGlmdGVkSXRlbXMgPSAobWF0Y2hlZFJlc3BvbnNpdmVEYXRhLm51bVNjcm9sbCAqIHRoaXMucGFnZSkgKiAtMTtcblxuXHRcdFx0XHRpZiAodGhpcy5pc0NpcmN1bGFyKCkpIHtcblx0XHRcdFx0XHR0b3RhbFNoaWZ0ZWRJdGVtcyAtPSBtYXRjaGVkUmVzcG9uc2l2ZURhdGEubnVtVmlzaWJsZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMudG90YWxTaGlmdGVkSXRlbXMgPSB0b3RhbFNoaWZ0ZWRJdGVtcztcblx0XHRcdFx0dGhpcy5fbnVtU2Nyb2xsID0gbWF0Y2hlZFJlc3BvbnNpdmVEYXRhLm51bVNjcm9sbDtcblxuXHRcdFx0XHR0aGlzLl9wYWdlID0gcGFnZTtcblx0XHRcdFx0dGhpcy5vblBhZ2UuZW1pdCh7XG5cdFx0XHRcdFx0cGFnZTogdGhpcy5wYWdlXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5fbnVtVmlzaWJsZSAhPT0gbWF0Y2hlZFJlc3BvbnNpdmVEYXRhLm51bVZpc2libGUpIHtcblx0XHRcdFx0dGhpcy5fbnVtVmlzaWJsZSA9IG1hdGNoZWRSZXNwb25zaXZlRGF0YS5udW1WaXNpYmxlO1xuXHRcdFx0XHR0aGlzLnNldENsb25lSXRlbXMoKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcblx0XHR9XG5cdH1cblx0XG5cdHNldENsb25lSXRlbXMoKSB7XG5cdFx0dGhpcy5jbG9uZWRJdGVtc0ZvclN0YXJ0aW5nID0gW107XG5cdFx0dGhpcy5jbG9uZWRJdGVtc0ZvckZpbmlzaGluZyA9IFtdO1xuXHRcdGlmICh0aGlzLmlzQ2lyY3VsYXIoKSkge1xuXHRcdFx0dGhpcy5jbG9uZWRJdGVtc0ZvclN0YXJ0aW5nLnB1c2goLi4udGhpcy52YWx1ZS5zbGljZSgtMSAqIHRoaXMuX251bVZpc2libGUpKTtcblx0XHRcdHRoaXMuY2xvbmVkSXRlbXNGb3JGaW5pc2hpbmcucHVzaCguLi50aGlzLnZhbHVlLnNsaWNlKDAsIHRoaXMuX251bVZpc2libGUpKTtcblx0XHR9XG5cdH1cblxuXHRmaXJzdEluZGV4KCkge1xuXHRcdHJldHVybiB0aGlzLmlzQ2lyY3VsYXIoKSA/ICgtMSAqICh0aGlzLnRvdGFsU2hpZnRlZEl0ZW1zICsgdGhpcy5udW1WaXNpYmxlKSkgOiAodGhpcy50b3RhbFNoaWZ0ZWRJdGVtcyAqIC0xKTtcblx0fVxuXG5cdGxhc3RJbmRleCgpIHtcblx0XHRyZXR1cm4gdGhpcy5maXJzdEluZGV4KCkgKyB0aGlzLm51bVZpc2libGUgLSAxO1xuXHR9XG5cblx0dG90YWxEb3RzKCkge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlID8gTWF0aC5jZWlsKCh0aGlzLnZhbHVlLmxlbmd0aCAtIHRoaXMuX251bVZpc2libGUpIC8gdGhpcy5fbnVtU2Nyb2xsKSArIDEgOiAwO1xuXHR9XG5cblx0dG90YWxEb3RzQXJyYXkoKSB7XG5cdFx0Y29uc3QgdG90YWxEb3RzID0gdGhpcy50b3RhbERvdHMoKTtcblx0XHRyZXR1cm4gdG90YWxEb3RzIDw9IDAgPyBbXSA6IEFycmF5KHRvdGFsRG90cykuZmlsbCgwKTtcblx0fVxuXG5cdGlzVmVydGljYWwoKSB7XG5cdFx0cmV0dXJuIHRoaXMub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCc7XG5cdH1cblxuXHRpc0NpcmN1bGFyKCkge1xuXHRcdHJldHVybiB0aGlzLmNpcmN1bGFyICYmIHRoaXMudmFsdWUgJiYgdGhpcy52YWx1ZS5sZW5ndGggPj0gdGhpcy5udW1WaXNpYmxlO1xuXHR9XG5cblx0aXNBdXRvcGxheSgpIHtcblx0XHRyZXR1cm4gdGhpcy5hdXRvcGxheUludGVydmFsICYmIHRoaXMuYWxsb3dBdXRvcGxheTtcblx0fVxuXG5cdGlzRm9yd2FyZE5hdkRpc2FibGVkKCkge1xuXHRcdHJldHVybiB0aGlzLmlzRW1wdHkoKSB8fCAodGhpcy5fcGFnZSA+PSAodGhpcy50b3RhbERvdHMoKSAtIDEpICYmICF0aGlzLmlzQ2lyY3VsYXIoKSk7XG5cdH1cblxuXHRpc0JhY2t3YXJkTmF2RGlzYWJsZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuaXNFbXB0eSgpIHx8ICh0aGlzLl9wYWdlIDw9IDAgICYmICF0aGlzLmlzQ2lyY3VsYXIoKSk7XG5cdH1cblxuXHRpc0VtcHR5KCkge1xuXHRcdHJldHVybiAhdGhpcy52YWx1ZSB8fCB0aGlzLnZhbHVlLmxlbmd0aCA9PT0gMDtcblx0fVxuXG5cdG5hdkZvcndhcmQoZSxpbmRleD8pIHtcblx0XHRpZiAodGhpcy5pc0NpcmN1bGFyKCkgfHwgdGhpcy5fcGFnZSA8ICh0aGlzLnRvdGFsRG90cygpIC0gMSkpIHtcblx0XHRcdHRoaXMuc3RlcCgtMSwgaW5kZXgpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmF1dG9wbGF5SW50ZXJ2YWwpIHtcblx0XHRcdHRoaXMuc3RvcEF1dG9wbGF5KCk7XG5cdFx0XHR0aGlzLmFsbG93QXV0b3BsYXkgPSBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAoZSAmJiBlLmNhbmNlbGFibGUpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR9XG5cdH1cblxuXHRuYXZCYWNrd2FyZChlLGluZGV4Pykge1xuXHRcdGlmICh0aGlzLmlzQ2lyY3VsYXIoKSB8fCB0aGlzLl9wYWdlICE9PSAwKSB7XG5cdFx0XHR0aGlzLnN0ZXAoMSwgaW5kZXgpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmF1dG9wbGF5SW50ZXJ2YWwpIHtcblx0XHRcdHRoaXMuc3RvcEF1dG9wbGF5KCk7XG5cdFx0XHR0aGlzLmFsbG93QXV0b3BsYXkgPSBmYWxzZTtcblx0XHR9XG5cdFx0XG5cdFx0aWYgKGUgJiYgZS5jYW5jZWxhYmxlKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXHR9XG5cblx0b25Eb3RDbGljayhlLCBpbmRleCkge1xuXHRcdGxldCBwYWdlID0gdGhpcy5fcGFnZTtcblxuXHRcdGlmICh0aGlzLmF1dG9wbGF5SW50ZXJ2YWwpIHtcblx0XHRcdHRoaXMuc3RvcEF1dG9wbGF5KCk7XG5cdFx0XHR0aGlzLmFsbG93QXV0b3BsYXkgPSBmYWxzZTtcblx0XHR9XG5cdFx0XG5cdFx0aWYgKGluZGV4ID4gcGFnZSkge1xuXHRcdFx0dGhpcy5uYXZGb3J3YXJkKGUsIGluZGV4KTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoaW5kZXggPCBwYWdlKSB7XG5cdFx0XHR0aGlzLm5hdkJhY2t3YXJkKGUsIGluZGV4KTtcblx0XHR9XG5cdH1cblxuXHRzdGVwKGRpciwgcGFnZSkge1xuXHRcdGxldCB0b3RhbFNoaWZ0ZWRJdGVtcyA9IHRoaXMudG90YWxTaGlmdGVkSXRlbXM7XG5cdFx0Y29uc3QgaXNDaXJjdWxhciA9IHRoaXMuaXNDaXJjdWxhcigpO1xuXG5cdFx0aWYgKHBhZ2UgIT0gbnVsbCkge1xuXHRcdFx0dG90YWxTaGlmdGVkSXRlbXMgPSAodGhpcy5fbnVtU2Nyb2xsICogcGFnZSkgKiAtMTtcblxuXHRcdFx0aWYgKGlzQ2lyY3VsYXIpIHtcblx0XHRcdFx0dG90YWxTaGlmdGVkSXRlbXMgLT0gdGhpcy5fbnVtVmlzaWJsZTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5pc1JlbWFpbmluZ0l0ZW1zQWRkZWQgPSBmYWxzZTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0b3RhbFNoaWZ0ZWRJdGVtcyArPSAodGhpcy5fbnVtU2Nyb2xsICogZGlyKTtcblx0XHRcdGlmICh0aGlzLmlzUmVtYWluaW5nSXRlbXNBZGRlZCkge1xuXHRcdFx0XHR0b3RhbFNoaWZ0ZWRJdGVtcyArPSB0aGlzLnJlbWFpbmluZ0l0ZW1zIC0gKHRoaXMuX251bVNjcm9sbCAqIGRpcik7XG5cdFx0XHRcdHRoaXMuaXNSZW1haW5pbmdJdGVtc0FkZGVkID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGxldCBvcmlnaW5hbFNoaWZ0ZWRJdGVtcyA9IGlzQ2lyY3VsYXIgPyAodG90YWxTaGlmdGVkSXRlbXMgKyB0aGlzLl9udW1WaXNpYmxlKSA6IHRvdGFsU2hpZnRlZEl0ZW1zO1xuXHRcdFx0cGFnZSA9IE1hdGguYWJzKE1hdGguZmxvb3IoKG9yaWdpbmFsU2hpZnRlZEl0ZW1zIC8gdGhpcy5fbnVtU2Nyb2xsKSkpO1xuXHRcdH1cblxuXHRcdGlmIChpc0NpcmN1bGFyICYmIHRoaXMucGFnZSA9PT0gKHRoaXMudG90YWxEb3RzKCkgLSAxKSAmJiBkaXIgPT09IC0xKSB7XG5cdFx0XHR0b3RhbFNoaWZ0ZWRJdGVtcyA9IC0xICogKHRoaXMudmFsdWUubGVuZ3RoICsgdGhpcy5fbnVtVmlzaWJsZSk7XG5cdFx0XHRwYWdlID0gMDtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoaXNDaXJjdWxhciAmJiB0aGlzLnBhZ2UgPT09IDAgJiYgZGlyID09PSAxKSB7XG5cdFx0XHR0b3RhbFNoaWZ0ZWRJdGVtcyA9IDA7XG5cdFx0XHRwYWdlID0gKHRoaXMudG90YWxEb3RzKCkgLSAxKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAocGFnZSA9PT0gKHRoaXMudG90YWxEb3RzKCkgLSAxKSAmJiB0aGlzLnJlbWFpbmluZ0l0ZW1zID4gMCkge1xuXHRcdFx0dG90YWxTaGlmdGVkSXRlbXMgKz0gKCh0aGlzLnJlbWFpbmluZ0l0ZW1zICogLTEpIC0gKHRoaXMuX251bVNjcm9sbCAqIGRpcikpO1xuXHRcdFx0dGhpcy5pc1JlbWFpbmluZ0l0ZW1zQWRkZWQgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLml0ZW1zQ29udGFpbmVyKSB7XG5cdFx0XHR0aGlzLml0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gdGhpcy5pc1ZlcnRpY2FsKCkgPyBgdHJhbnNsYXRlM2QoMCwgJHt0b3RhbFNoaWZ0ZWRJdGVtcyAqICgxMDAvIHRoaXMuX251bVZpc2libGUpfSUsIDApYCA6IGB0cmFuc2xhdGUzZCgke3RvdGFsU2hpZnRlZEl0ZW1zICogKDEwMC8gdGhpcy5fbnVtVmlzaWJsZSl9JSwgMCwgMClgO1xuXHRcdFx0dGhpcy5pdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSAndHJhbnNmb3JtIDUwMG1zIGVhc2UgMHMnO1xuXHRcdH1cblxuXHRcdHRoaXMudG90YWxTaGlmdGVkSXRlbXMgPSB0b3RhbFNoaWZ0ZWRJdGVtcztcblx0XHR0aGlzLl9wYWdlID0gcGFnZTtcblx0XHR0aGlzLm9uUGFnZS5lbWl0KHtcblx0XHRcdHBhZ2U6IHRoaXMucGFnZVxuXHRcdH0pO1xuXHR9XG5cblx0c3RhcnRBdXRvcGxheSgpIHtcblx0XHR0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0aWYgKHRoaXMudG90YWxEb3RzKCkgPiAwKSB7XG5cdFx0XHRcdGlmICh0aGlzLnBhZ2UgPT09ICh0aGlzLnRvdGFsRG90cygpIC0gMSkpIHtcblx0XHRcdFx0XHR0aGlzLnN0ZXAoLTEsIDApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuc3RlcCgtMSwgdGhpcy5wYWdlICsgMSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LCBcblx0XHR0aGlzLmF1dG9wbGF5SW50ZXJ2YWwpO1xuXHR9XG5cblx0c3RvcEF1dG9wbGF5KCkge1xuXHRcdGlmICh0aGlzLmludGVydmFsKSB7XG5cdFx0XHRjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuXHRcdH1cblx0fVxuXG5cdG9uVHJhbnNpdGlvbkVuZCgpIHtcblx0XHRpZiAodGhpcy5pdGVtc0NvbnRhaW5lcikge1xuXHRcdFx0dGhpcy5pdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSAnJztcblxuXHRcdFx0aWYgKCh0aGlzLnBhZ2UgPT09IDAgfHwgdGhpcy5wYWdlID09PSAodGhpcy50b3RhbERvdHMoKSAtIDEpKSAmJiB0aGlzLmlzQ2lyY3VsYXIoKSkge1xuXHRcdFx0XHR0aGlzLml0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gdGhpcy5pc1ZlcnRpY2FsKCkgPyBgdHJhbnNsYXRlM2QoMCwgJHt0aGlzLnRvdGFsU2hpZnRlZEl0ZW1zICogKDEwMC8gdGhpcy5fbnVtVmlzaWJsZSl9JSwgMClgIDogYHRyYW5zbGF0ZTNkKCR7dGhpcy50b3RhbFNoaWZ0ZWRJdGVtcyAqICgxMDAvIHRoaXMuX251bVZpc2libGUpfSUsIDAsIDApYDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRvblRvdWNoU3RhcnQoZSkge1xuXHRcdGxldCB0b3VjaG9iaiA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG5cblx0XHR0aGlzLnN0YXJ0UG9zID0ge1xuXHRcdFx0eDogdG91Y2hvYmoucGFnZVgsXG5cdFx0XHR5OiB0b3VjaG9iai5wYWdlWVxuXHRcdH07XG5cdH1cblxuXHRvblRvdWNoTW92ZShlKSB7XG5cdFx0aWYgKGUuY2FuY2VsYWJsZSkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH1cblx0fVxuXHRvblRvdWNoRW5kKGUpIHtcblx0XHRsZXQgdG91Y2hvYmogPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuXG5cdFx0aWYgKHRoaXMuaXNWZXJ0aWNhbCgpKSB7XG5cdFx0XHR0aGlzLmNoYW5nZVBhZ2VPblRvdWNoKGUsICh0b3VjaG9iai5wYWdlWSAtIHRoaXMuc3RhcnRQb3MueSkpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMuY2hhbmdlUGFnZU9uVG91Y2goZSwgKHRvdWNob2JqLnBhZ2VYIC0gdGhpcy5zdGFydFBvcy54KSk7XG5cdFx0fVxuXHR9XG5cblx0Y2hhbmdlUGFnZU9uVG91Y2goZSwgZGlmZikge1xuXHRcdGlmIChNYXRoLmFicyhkaWZmKSA+IHRoaXMuc3dpcGVUaHJlc2hvbGQpIHtcblx0XHRcdGlmIChkaWZmIDwgMCkge1xuXHRcdFx0XHR0aGlzLm5hdkZvcndhcmQoZSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dGhpcy5uYXZCYWNrd2FyZChlKTtcblxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGJpbmREb2N1bWVudExpc3RlbmVycygpIHtcblx0XHRpZiAoIXRoaXMuZG9jdW1lbnRSZXNpemVMaXN0ZW5lcikge1xuXHRcdFx0dGhpcy5kb2N1bWVudFJlc2l6ZUxpc3RlbmVyID0gKGUpID0+IHtcblx0XHRcdFx0dGhpcy5jYWxjdWxhdGVQb3NpdGlvbigpO1xuXHRcdFx0fTtcblxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuZG9jdW1lbnRSZXNpemVMaXN0ZW5lcik7XG5cdFx0fVxuXHR9XG5cblx0dW5iaW5kRG9jdW1lbnRMaXN0ZW5lcnMoKSB7XG5cdFx0aWYgKHRoaXMuZG9jdW1lbnRSZXNpemVMaXN0ZW5lcikge1xuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuZG9jdW1lbnRSZXNpemVMaXN0ZW5lcik7XG5cdFx0XHR0aGlzLmRvY3VtZW50UmVzaXplTGlzdGVuZXIgPSBudWxsO1xuXHRcdH1cblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdGlmICh0aGlzLnJlc3BvbnNpdmVPcHRpb25zKSB7XG5cdFx0XHR0aGlzLnVuYmluZERvY3VtZW50TGlzdGVuZXJzKCk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmF1dG9wbGF5SW50ZXJ2YWwpIHtcblx0XHRcdHRoaXMuc3RvcEF1dG9wbGF5KCk7XG5cdFx0fVxuICAgIH1cblxufVxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBTaGFyZWRNb2R1bGUsIFJpcHBsZU1vZHVsZV0sXG5cdGV4cG9ydHM6IFtDb21tb25Nb2R1bGUsIENhcm91c2VsLCBTaGFyZWRNb2R1bGVdLFxuXHRkZWNsYXJhdGlvbnM6IFtDYXJvdXNlbF1cbn0pXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxNb2R1bGUgeyB9XG4iXX0=