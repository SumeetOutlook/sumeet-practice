/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Inject, Input, isDevMode, IterableDiffers, Output, PLATFORM_ID, QueryList, Renderer2, ViewChild } from '@angular/core';
import { empty, fromEvent, interval, merge, Observable, of, Subject } from 'rxjs';
import { mapTo, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { NguCarouselDefDirective, NguCarouselNextDirective, NguCarouselOutlet, NguCarouselPrevDirective } from './../ngu-carousel.directive';
import { NguCarouselConfig, NguCarouselOutletContext, NguCarouselStore } from './ngu-carousel';
/**
 * @template T
 */
// tslint:disable-next-line:component-class-suffix
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../ngu-carousel.directive';

const _c0 = ["ngucarousel"];
const _c1 = ["nguItemsContainer"];
const _c2 = ["touchContainer"];
const _c3 = [[["", "NguCarouselPrev", ""]], [["", "NguCarouselNext", ""]], [["", "NguCarouselPoint", ""]]];
const _c4 = ["[NguCarouselPrev]", "[NguCarouselNext]", "[NguCarouselPoint]"];
export class NguCarousel extends NguCarouselStore {
    /**
     * @param {?} _el
     * @param {?} _renderer
     * @param {?} _differs
     * @param {?} platformId
     * @param {?} cdr
     */
    constructor(_el, _renderer, _differs, platformId, cdr) {
        super();
        this._el = _el;
        this._renderer = _renderer;
        this._differs = _differs;
        this.platformId = platformId;
        this.cdr = cdr;
        this.withAnim = true;
        this.isHovered = false;
        this.carouselLoad = new EventEmitter();
        // tslint:disable-next-line:no-output-on-prefix
        this.onMove = new EventEmitter();
        this._intervalController$ = new Subject();
        this.pointNumbers = [];
    }
    /**
     * @return {?}
     */
    get dataSource() {
        return this._dataSource;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set dataSource(data) {
        if (data) {
            // console.log(data, this.dataSource);
            // this.isFirstss++;
            this._switchDataSource(data);
        }
    }
    /**
     * The setter is used to catch the button if the button has ngIf
     * issue id #91
     * @param {?} btn
     * @return {?}
     */
    set nextBtn(btn) {
        this.listener2 && this.listener2();
        if (btn) {
            this.listener2 = this._renderer.listen(btn.nativeElement, 'click', () => this._carouselScrollOne(1));
        }
    }
    /**
     * The setter is used to catch the button if the button has ngIf
     * issue id #91
     * @param {?} btn
     * @return {?}
     */
    set prevBtn(btn) {
        this.listener1 && this.listener1();
        if (btn) {
            this.listener1 = this._renderer.listen(btn.nativeElement, 'click', () => this._carouselScrollOne(0));
        }
    }
    /**
     * Tracking function that will be used to check the differences in data changes. Used similarly
     * to `ngFor` `trackBy` function. Optimize Items operations by identifying a Items based on its data
     * relative to the function to know if a Items should be added/removed/moved.
     * Accepts a function that takes two parameters, `index` and `item`.
     * @return {?}
     */
    get trackBy() {
        return this._trackByFn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    set trackBy(fn) {
        if (isDevMode() &&
            fn != null &&
            typeof fn !== 'function' && /** @type {?} */ (console) && /** @type {?} */ (console.warn)) {
            console.warn(`trackBy must be a function, but received ${JSON.stringify(fn)}.`);
        }
        this._trackByFn = fn;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._dataDiffer = this._differs
            .find([])
            .create((_i, item) => {
            return this.trackBy ? this.trackBy(item.dataIndex, item.data) : item;
        });
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        this.arrayChanges = this._dataDiffer.diff(this.dataSource);
        if (this.arrayChanges && this._defDirec) {
            // console.log('Changes detected!');
            this._observeRenderChanges();
        }
    }
    /**
     * @param {?} dataSource
     * @return {?}
     */
    _switchDataSource(dataSource) {
        this._dataSource = dataSource;
        if (this._defDirec) {
            this._observeRenderChanges();
        }
    }
    /**
     * @return {?}
     */
    _observeRenderChanges() {
        /** @type {?} */
        let dataStream;
        if (this._dataSource instanceof Observable) {
            dataStream = this._dataSource;
        }
        else if (Array.isArray(this._dataSource)) {
            dataStream = of(this._dataSource);
        }
        if (dataStream) {
            this._dataSubscription = dataStream
                .pipe(takeUntil(this._intervalController$))
                .subscribe(data => {
                this.renderNodeChanges(data);
                this.isLast = false;
            });
        }
    }
    /**
     * @param {?} data
     * @param {?=} viewContainer
     * @return {?}
     */
    renderNodeChanges(data, viewContainer = this._nodeOutlet.viewContainer) {
        if (!this.arrayChanges)
            return;
        this.arrayChanges.forEachOperation((item, adjustedPreviousIndex, currentIndex) => {
            /** @type {?} */
            const node = this._getNodeDef(data[currentIndex], currentIndex);
            if (item.previousIndex == null) {
                /** @type {?} */
                const context = new NguCarouselOutletContext(data[currentIndex]);
                context.index = currentIndex;
                viewContainer.createEmbeddedView(node.template, context, currentIndex);
            }
            else if (currentIndex == null) {
                viewContainer.remove(adjustedPreviousIndex);
            }
            else {
                /** @type {?} */
                const view = viewContainer.get(adjustedPreviousIndex);
                viewContainer.move(view, currentIndex);
            }
        });
        this._updateItemIndexContext();
        if (this.carousel) {
            this._storeCarouselData();
        }
        // console.log(this.dataSource);
    }
    /**
     * Updates the index-related context for each row to reflect any changes in the index of the rows,
     * e.g. first/last/even/odd.
     * @return {?}
     */
    _updateItemIndexContext() {
        /** @type {?} */
        const viewContainer = this._nodeOutlet.viewContainer;
        for (let renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
            /** @type {?} */
            const viewRef = /** @type {?} */ (viewContainer.get(renderIndex));
            /** @type {?} */
            const context = /** @type {?} */ (viewRef.context);
            context.count = count;
            context.first = renderIndex === 0;
            context.last = renderIndex === count - 1;
            context.even = renderIndex % 2 === 0;
            context.odd = !context.even;
            context.index = renderIndex;
        }
    }
    /**
     * @param {?} data
     * @param {?} i
     * @return {?}
     */
    _getNodeDef(data, i) {
        // console.log(this._defDirec);
        if (this._defDirec.length === 1) {
            return this._defDirec.first;
        }
        /** @type {?} */
        const nodeDef = this._defDirec.find(def => def.when && def.when(i, data)) ||
            this._defaultNodeDef;
        return nodeDef;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.carousel = this._el.nativeElement;
        this._inputValidation();
        this.carouselCssNode = this._createStyleElem();
        // this._buttonControl();
        if (isPlatformBrowser(this.platformId)) {
            this._carouselInterval();
            if (!this.vertical.enabled) {
                this._touch();
            }
            this.listener3 = this._renderer.listen('window', 'resize', event => {
                this._onResizing(event);
            });
            this._onWindowScrolling();
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._observeRenderChanges();
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    _inputValidation() {
        this.type = this.inputs.grid.all !== 0 ? 'fixed' : 'responsive';
        this.loop = this.inputs.loop || false;
        this.inputs.easing = this.inputs.easing || 'cubic-bezier(0, 0, 0.2, 1)';
        this.touch.active = this.inputs.touch || false;
        this.RTL = this.inputs.RTL ? true : false;
        this.interval = this.inputs.interval || null;
        this.velocity =
            typeof this.inputs.velocity === 'number'
                ? this.inputs.velocity
                : this.velocity;
        if (this.inputs.vertical && this.inputs.vertical.enabled) {
            this.vertical.enabled = this.inputs.vertical.enabled;
            this.vertical.height = this.inputs.vertical.height;
        }
        this.directionSym = this.RTL ? '' : '-';
        this.point =
            this.inputs.point && typeof this.inputs.point.visible !== 'undefined'
                ? this.inputs.point.visible
                : true;
        this._carouselSize();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // clearInterval(this.carouselInt);
        this.carouselInt && this.carouselInt.unsubscribe();
        this._intervalController$.unsubscribe();
        this.carouselLoad.complete();
        this.onMove.complete();
        /** remove listeners */
        for (let i = 1; i <= 4; i++) {
            /** @type {?} */
            const str = `listener${i}`;
            this[str] && this[str]();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onResizing(event) {
        clearTimeout(this.onResize);
        this.onResize = setTimeout(() => {
            if (this.deviceWidth !== event.target.outerWidth) {
                this._setStyle(this.nguItemsContainer.nativeElement, 'transition', ``);
                this._storeCarouselData();
            }
        }, 500);
    }
    /**
     * Get Touch input
     * @return {?}
     */
    _touch() {
        if (this.inputs.touch) {
            /** @type {?} */
            const hammertime = new Hammer(this.touchContainer.nativeElement);
            hammertime.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL });
            hammertime.on('panstart', (ev) => {
                this.carouselWidth = this.nguItemsContainer.nativeElement.offsetWidth;
                this.touchTransform = this.transform[this.deviceType];
                this.dexVal = 0;
                this._setStyle(this.nguItemsContainer.nativeElement, 'transition', '');
            });
            if (this.vertical.enabled) {
                hammertime.on('panup', (ev) => {
                    this._touchHandling('panleft', ev);
                });
                hammertime.on('pandown', (ev) => {
                    this._touchHandling('panright', ev);
                });
            }
            else {
                hammertime.on('panleft', (ev) => {
                    this._touchHandling('panleft', ev);
                });
                hammertime.on('panright', (ev) => {
                    this._touchHandling('panright', ev);
                });
            }
            hammertime.on('panend', (ev) => {
                if (Math.abs(ev.velocity) >= this.velocity) {
                    this.touch.velocity = ev.velocity;
                    /** @type {?} */
                    let direc = 0;
                    if (!this.RTL) {
                        direc = this.touch.swipe === 'panright' ? 0 : 1;
                    }
                    else {
                        direc = this.touch.swipe === 'panright' ? 1 : 0;
                    }
                    this._carouselScrollOne(direc);
                }
                else {
                    this.dexVal = 0;
                    this._setStyle(this.nguItemsContainer.nativeElement, 'transition', 'transform 324ms cubic-bezier(0, 0, 0.2, 1)');
                    this._setStyle(this.nguItemsContainer.nativeElement, 'transform', '');
                }
            });
            hammertime.on('hammer.input', function (ev) {
                // allow nested touch events to no propagate, this may have other side affects but works for now.
                // TODO: It is probably better to check the source element of the event and only apply the handle to the correct carousel
                ev.srcEvent.stopPropagation();
            });
        }
    }
    /**
     * handle touch input
     * @param {?} e
     * @param {?} ev
     * @return {?}
     */
    _touchHandling(e, ev) {
        // vertical touch events seem to cause to panstart event with an odd delta
        // and a center of {x:0,y:0} so this will ignore them
        if (ev.center.x === 0) {
            return;
        }
        ev = Math.abs(this.vertical.enabled ? ev.deltaY : ev.deltaX);
        /** @type {?} */
        let valt = ev - this.dexVal;
        valt =
            this.type === 'responsive'
                ? (Math.abs(ev - this.dexVal) /
                    (this.vertical.enabled
                        ? this.vertical.height
                        : this.carouselWidth)) *
                    100
                : valt;
        this.dexVal = ev;
        this.touch.swipe = e;
        this._setTouchTransfrom(e, valt);
        this._setTransformFromTouch();
    }
    /**
     * @param {?} e
     * @param {?} valt
     * @return {?}
     */
    _setTouchTransfrom(e, valt) {
        /** @type {?} */
        const condition = this.RTL ? 'panright' : 'panleft';
        this.touchTransform =
            e === condition ? valt + this.touchTransform : this.touchTransform - valt;
    }
    /**
     * @return {?}
     */
    _setTransformFromTouch() {
        if (this.touchTransform < 0) {
            this.touchTransform = 0;
        }
        /** @type {?} */
        const type = this.type === 'responsive' ? '%' : 'px';
        this._setStyle(this.nguItemsContainer.nativeElement, 'transform', this.vertical.enabled
            ? `translate3d(0, ${this.directionSym}${this.touchTransform}${type}, 0)`
            : `translate3d(${this.directionSym}${this.touchTransform}${type}, 0, 0)`);
    }
    /**
     * this fn used to disable the interval when it is not on the viewport
     * @return {?}
     */
    _onWindowScrolling() {
        /** @type {?} */
        const top = this.carousel.offsetTop;
        /** @type {?} */
        const scrollY = window.scrollY;
        /** @type {?} */
        const heightt = window.innerHeight;
        /** @type {?} */
        const carouselHeight = this.carousel.offsetHeight;
        /** @type {?} */
        const isCarouselOnScreen = top <= scrollY + heightt - carouselHeight / 4 &&
            top + carouselHeight / 2 >= scrollY;
        if (isCarouselOnScreen) {
            this._intervalController$.next(1);
        }
        else {
            this._intervalController$.next(0);
        }
    }
    /**
     * store data based on width of the screen for the carousel
     * @return {?}
     */
    _storeCarouselData() {
        this.deviceWidth = isPlatformBrowser(this.platformId)
            ? window.innerWidth
            : 1200;
        this.carouselWidth = this.carouselMain1.nativeElement.offsetWidth;
        if (this.type === 'responsive') {
            this.deviceType =
                this.deviceWidth >= 1200
                    ? 'lg'
                    : this.deviceWidth >= 992
                        ? 'md'
                        : this.deviceWidth >= 768
                            ? 'sm'
                            : 'xs';
            this.items = this.inputs.grid[this.deviceType];
            this.itemWidth = this.carouselWidth / this.items;
        }
        else {
            this.items = Math.trunc(this.carouselWidth / this.inputs.grid.all);
            this.itemWidth = this.inputs.grid.all;
            this.deviceType = 'all';
        }
        this.slideItems = +(this.inputs.slide < this.items
            ? this.inputs.slide
            : this.items);
        this.load =
            this.inputs.load >= this.slideItems ? this.inputs.load : this.slideItems;
        this.speed =
            this.inputs.speed && this.inputs.speed > -1 ? this.inputs.speed : 400;
        this._carouselPoint();
    }
    /**
     * Used to reset the carousel
     * @param {?=} withOutAnimation
     * @return {?}
     */
    reset(withOutAnimation) {
        withOutAnimation && (this.withAnim = false);
        this.carouselCssNode.innerHTML = '';
        this.moveTo(0);
        this._carouselPoint();
    }
    /**
     * Init carousel point
     * @return {?}
     */
    _carouselPoint() {
        /** @type {?} */
        const Nos = this.dataSource.length - (this.items - this.slideItems);
        this.pointIndex = Math.ceil(Nos / this.slideItems);
        /** @type {?} */
        const pointers = [];
        if (this.pointIndex > 1 || !this.inputs.point.hideOnSingleSlide) {
            for (let i = 0; i < this.pointIndex; i++) {
                pointers.push(i);
            }
        }
        this.pointNumbers = pointers;
        // console.log(this.pointNumbers);
        this._carouselPointActiver();
        if (this.pointIndex <= 1) {
            this._btnBoolean(1, 1);
        }
        else {
            if (this.currentSlide === 0 && !this.loop) {
                this._btnBoolean(1, 0);
            }
            else {
                this._btnBoolean(0, 0);
            }
        }
        // }
    }
    /**
     * change the active point in carousel
     * @return {?}
     */
    _carouselPointActiver() {
        /** @type {?} */
        const i = Math.ceil(this.currentSlide / this.slideItems);
        this.activePoint = i;
        // console.log(this.data);
        this.cdr.markForCheck();
    }
    /**
     * this function is used to scoll the carousel when point is clicked
     * @param {?} slide
     * @param {?=} withOutAnimation
     * @return {?}
     */
    moveTo(slide, withOutAnimation) {
        // slide = slide - 1;
        withOutAnimation && (this.withAnim = false);
        if (this.activePoint !== slide && slide < this.pointIndex) {
            /** @type {?} */
            let slideremains;
            /** @type {?} */
            const btns = this.currentSlide < slide ? 1 : 0;
            switch (slide) {
                case 0:
                    this._btnBoolean(1, 0);
                    slideremains = slide * this.slideItems;
                    break;
                case this.pointIndex - 1:
                    this._btnBoolean(0, 1);
                    slideremains = this.dataSource.length - this.items;
                    break;
                default:
                    this._btnBoolean(0, 0);
                    slideremains = slide * this.slideItems;
            }
            this._carouselScrollTwo(btns, slideremains, this.speed);
        }
    }
    /**
     * set the style of the carousel based the inputs data
     * @return {?}
     */
    _carouselSize() {
        this.token = this._generateID();
        /** @type {?} */
        let dism = '';
        this.styleid = `.${this.token} > .ngucarousel > .ngu-touch-container > .ngucarousel-items`;
        if (this.inputs.custom === 'banner') {
            this._renderer.addClass(this.carousel, 'banner');
        }
        if (this.inputs.animation === 'lazy') {
            dism += `${this.styleid} > .item {transition: transform .6s ease;}`;
        }
        /** @type {?} */
        let itemStyle = '';
        if (this.vertical.enabled) {
            /** @type {?} */
            const itemWidth_xs = `${this.styleid} > .item {height: ${this.vertical
                .height / +this.inputs.grid.xs}px}`;
            /** @type {?} */
            const itemWidth_sm = `${this.styleid} > .item {height: ${this.vertical
                .height / +this.inputs.grid.sm}px}`;
            /** @type {?} */
            const itemWidth_md = `${this.styleid} > .item {height: ${this.vertical
                .height / +this.inputs.grid.md}px}`;
            /** @type {?} */
            const itemWidth_lg = `${this.styleid} > .item {height: ${this.vertical
                .height / +this.inputs.grid.lg}px}`;
            itemStyle = `@media (max-width:767px){${itemWidth_xs}}
                    @media (min-width:768px){${itemWidth_sm}}
                    @media (min-width:992px){${itemWidth_md}}
                    @media (min-width:1200px){${itemWidth_lg}}`;
        }
        else if (this.type === 'responsive') {
            /** @type {?} */
            const itemWidth_xs = this.inputs.type === 'mobile'
                ? `${this.styleid} .item {flex: 0 0 ${95 /
                    +this.inputs.grid.xs}%; width: ${95 / +this.inputs.grid.xs}%;}`
                : `${this.styleid} .item {flex: 0 0 ${100 /
                    +this.inputs.grid.xs}%; width: ${100 / +this.inputs.grid.xs}%;}`;
            /** @type {?} */
            const itemWidth_sm = `${this.styleid} > .item {flex: 0 0 ${100 /
                +this.inputs.grid.sm}%; width: ${100 / +this.inputs.grid.sm}%}`;
            /** @type {?} */
            const itemWidth_md = `${this.styleid} > .item {flex: 0 0 ${100 /
                +this.inputs.grid.md}%; width: ${100 / +this.inputs.grid.md}%}`;
            /** @type {?} */
            const itemWidth_lg = `${this.styleid} > .item {flex: 0 0 ${100 /
                +this.inputs.grid.lg}%; width: ${100 / +this.inputs.grid.lg}%}`;
            itemStyle = `@media (max-width:767px){${itemWidth_xs}}
                    @media (min-width:768px){${itemWidth_sm}}
                    @media (min-width:992px){${itemWidth_md}}
                    @media (min-width:1200px){${itemWidth_lg}}`;
        }
        else {
            itemStyle = `${this.styleid} .item {flex: 0 0 ${this.inputs.grid.all}px; width: ${this.inputs.grid.all}px;}`;
        }
        this._renderer.addClass(this.carousel, this.token);
        if (this.vertical.enabled) {
            this._renderer.addClass(this.nguItemsContainer.nativeElement, 'nguvertical');
            this._renderer.setStyle(this.carouselMain1.nativeElement, 'height', `${this.vertical.height}px`);
        }
        // tslint:disable-next-line:no-unused-expression
        this.RTL &&
            !this.vertical.enabled &&
            this._renderer.addClass(this.carousel, 'ngurtl');
        this._createStyleElem(`${dism} ${itemStyle}`);
        this._storeCarouselData();
    }
    /**
     * logic to scroll the carousel step 1
     * @param {?} Btn
     * @return {?}
     */
    _carouselScrollOne(Btn) {
        /** @type {?} */
        let itemSpeed = this.speed;
        /** @type {?} */
        let translateXval;
        /** @type {?} */
        let currentSlide = 0;
        /** @type {?} */
        const touchMove = Math.ceil(this.dexVal / this.itemWidth);
        this._setStyle(this.nguItemsContainer.nativeElement, 'transform', '');
        if (this.pointIndex === 1) {
            return;
        }
        else if (Btn === 0 && ((!this.loop && !this.isFirst) || this.loop)) {
            /** @type {?} */
            const slide = this.slideItems * this.pointIndex;
            /** @type {?} */
            const currentSlideD = this.currentSlide - this.slideItems;
            /** @type {?} */
            const MoveSlide = currentSlideD + this.slideItems;
            this._btnBoolean(0, 1);
            if (this.currentSlide === 0) {
                currentSlide = this.dataSource.length - this.items;
                itemSpeed = 400;
                this._btnBoolean(0, 1);
            }
            else if (this.slideItems >= MoveSlide) {
                currentSlide = translateXval = 0;
                this._btnBoolean(1, 0);
            }
            else {
                this._btnBoolean(0, 0);
                if (touchMove > this.slideItems) {
                    currentSlide = this.currentSlide - touchMove;
                    itemSpeed = 200;
                }
                else {
                    currentSlide = this.currentSlide - this.slideItems;
                }
            }
            this._carouselScrollTwo(Btn, currentSlide, itemSpeed);
        }
        else if (Btn === 1 && ((!this.loop && !this.isLast) || this.loop)) {
            if (this.dataSource.length <=
                this.currentSlide + this.items + this.slideItems &&
                !this.isLast) {
                currentSlide = this.dataSource.length - this.items;
                this._btnBoolean(0, 1);
            }
            else if (this.isLast) {
                currentSlide = translateXval = 0;
                itemSpeed = 400;
                this._btnBoolean(1, 0);
            }
            else {
                this._btnBoolean(0, 0);
                if (touchMove > this.slideItems) {
                    currentSlide =
                        this.currentSlide + this.slideItems + (touchMove - this.slideItems);
                    itemSpeed = 200;
                }
                else {
                    currentSlide = this.currentSlide + this.slideItems;
                }
            }
            this._carouselScrollTwo(Btn, currentSlide, itemSpeed);
        }
        // cubic-bezier(0.15, 1.04, 0.54, 1.13)
    }
    /**
     * logic to scroll the carousel step 2
     * @param {?} Btn
     * @param {?} currentSlide
     * @param {?} itemSpeed
     * @return {?}
     */
    _carouselScrollTwo(Btn, currentSlide, itemSpeed) {
        // tslint:disable-next-line:no-unused-expression
        if (this.dexVal !== 0) {
            /** @type {?} */
            const val = Math.abs(this.touch.velocity);
            /** @type {?} */
            let somt = Math.floor((this.dexVal / val / this.dexVal) * (this.deviceWidth - this.dexVal));
            somt = somt > itemSpeed ? itemSpeed : somt;
            itemSpeed = somt < 200 ? 200 : somt;
            this.dexVal = 0;
        }
        if (this.withAnim) {
            this._setStyle(this.nguItemsContainer.nativeElement, 'transition', `transform ${itemSpeed}ms ${this.inputs.easing}`);
            this.inputs.animation &&
                this._carouselAnimator(Btn, currentSlide + 1, currentSlide + this.items, itemSpeed, Math.abs(this.currentSlide - currentSlide));
        }
        else {
            this._setStyle(this.nguItemsContainer.nativeElement, 'transition', ``);
        }
        // console.log(this.dataSource);
        this.itemLength = this.dataSource.length;
        this._transformStyle(currentSlide);
        this.currentSlide = currentSlide;
        this.onMove.emit(this);
        this._carouselPointActiver();
        this._carouselLoadTrigger();
        this.withAnim = true;
        // if (currentSlide === 12) {
        //   this._switchDataSource(this.dataSource);
        // }
    }
    /**
     * boolean function for making isFirst and isLast
     * @param {?} first
     * @param {?} last
     * @return {?}
     */
    _btnBoolean(first, last) {
        this.isFirst = !!first;
        this.isLast = !!last;
    }
    /**
     * @param {?} grid
     * @param {?} slide
     * @return {?}
     */
    _transformString(grid, slide) {
        /** @type {?} */
        let collect = '';
        collect += `${this.styleid} { transform: translate3d(`;
        if (this.vertical.enabled) {
            this.transform[grid] =
                (this.vertical.height / this.inputs.grid[grid]) * slide;
            collect += `0, -${this.transform[grid]}px, 0`;
        }
        else {
            this.transform[grid] = (100 / this.inputs.grid[grid]) * slide;
            collect += `${this.directionSym}${this.transform[grid]}%, 0, 0`;
        }
        collect += `); }`;
        return collect;
    }
    /**
     * set the transform style to scroll the carousel
     * @param {?} slide
     * @return {?}
     */
    _transformStyle(slide) {
        /** @type {?} */
        let slideCss = '';
        if (this.type === 'responsive') {
            slideCss = `@media (max-width: 767px) {${this._transformString('xs', slide)}}
      @media (min-width: 768px) {${this._transformString('sm', slide)} }
      @media (min-width: 992px) {${this._transformString('md', slide)} }
      @media (min-width: 1200px) {${this._transformString('lg', slide)} }`;
        }
        else {
            this.transform.all = this.inputs.grid.all * slide;
            slideCss = `${this.styleid} { transform: translate3d(${this.directionSym}${this.transform.all}px, 0, 0);`;
        }
        this.carouselCssNode.innerHTML = slideCss;
    }
    /**
     * this will trigger the carousel to load the items
     * @return {?}
     */
    _carouselLoadTrigger() {
        if (typeof this.inputs.load === 'number') {
            this.dataSource.length - this.load <= this.currentSlide + this.items &&
                this.carouselLoad.emit(this.currentSlide);
        }
    }
    /**
     * generate Class for each carousel to set specific style
     * @return {?}
     */
    _generateID() {
        /** @type {?} */
        let text = '';
        /** @type {?} */
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 6; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return `ngucarousel${text}`;
    }
    /**
     * handle the auto slide
     * @return {?}
     */
    _carouselInterval() {
        /** @type {?} */
        const container = this.carouselMain1.nativeElement;
        if (this.interval && this.loop) {
            this.listener4 = this._renderer.listen('window', 'scroll', () => {
                clearTimeout(this.onScrolling);
                this.onScrolling = setTimeout(() => {
                    this._onWindowScrolling();
                }, 600);
            });
            /** @type {?} */
            const play$ = fromEvent(container, 'mouseleave').pipe(mapTo(1));
            /** @type {?} */
            const pause$ = fromEvent(container, 'mouseenter').pipe(mapTo(0));
            /** @type {?} */
            const touchPlay$ = fromEvent(container, 'touchstart').pipe(mapTo(1));
            /** @type {?} */
            const touchPause$ = fromEvent(container, 'touchend').pipe(mapTo(0));
            /** @type {?} */
            const interval$ = interval(this.inputs.interval.timing).pipe(mapTo(1));
            setTimeout(() => {
                this.carouselInt = merge(play$, touchPlay$, pause$, touchPause$, this._intervalController$)
                    .pipe(startWith(1), switchMap(val => {
                    this.isHovered = !val;
                    this.cdr.markForCheck();
                    return val ? interval$ : empty();
                }))
                    .subscribe(res => {
                    this._carouselScrollOne(1);
                });
            }, this.interval.initialDelay);
        }
    }
    /**
     * @return {?}
     */
    _updateItemIndexContextAni() {
        /** @type {?} */
        const viewContainer = this._nodeOutlet.viewContainer;
        for (let renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
            /** @type {?} */
            const viewRef = /** @type {?} */ (viewContainer.get(renderIndex));
            /** @type {?} */
            const context = /** @type {?} */ (viewRef.context);
            context.count = count;
            context.first = renderIndex === 0;
            context.last = renderIndex === count - 1;
            context.even = renderIndex % 2 === 0;
            context.odd = !context.even;
            context.index = renderIndex;
        }
    }
    /**
     * animate the carousel items
     * @param {?} direction
     * @param {?} start
     * @param {?} end
     * @param {?} speed
     * @param {?} length
     * @param {?=} viewContainer
     * @return {?}
     */
    _carouselAnimator(direction, start, end, speed, length, viewContainer = this._nodeOutlet.viewContainer) {
        /** @type {?} */
        let val = length < 5 ? length : 5;
        val = val === 1 ? 3 : val;
        /** @type {?} */
        const collectIndex = [];
        if (direction === 1) {
            for (let i = start - 1; i < end; i++) {
                collectIndex.push(i);
                val = val * 2;
                /** @type {?} */
                const viewRef = /** @type {?} */ (viewContainer.get(i));
                /** @type {?} */
                const context = /** @type {?} */ (viewRef.context);
                context.animate = { value: true, params: { distance: val } };
            }
        }
        else {
            for (let i = end - 1; i >= start - 1; i--) {
                collectIndex.push(i);
                val = val * 2;
                /** @type {?} */
                const viewRef = /** @type {?} */ (viewContainer.get(i));
                /** @type {?} */
                const context = /** @type {?} */ (viewRef.context);
                context.animate = { value: true, params: { distance: -val } };
            }
        }
        this.cdr.markForCheck();
        setTimeout(() => {
            this._removeAnimations(collectIndex);
        }, speed * 0.7);
    }
    /**
     * @param {?} indexs
     * @return {?}
     */
    _removeAnimations(indexs) {
        /** @type {?} */
        const viewContainer = this._nodeOutlet.viewContainer;
        indexs.forEach(i => {
            /** @type {?} */
            const viewRef = /** @type {?} */ (viewContainer.get(i));
            /** @type {?} */
            const context = /** @type {?} */ (viewRef.context);
            context.animate = { value: false, params: { distance: 0 } };
        });
        this.cdr.markForCheck();
    }
    /**
     * Short form for setElementStyle
     * @param {?} el
     * @param {?} prop
     * @param {?} val
     * @return {?}
     */
    _setStyle(el, prop, val) {
        this._renderer.setStyle(el, prop, val);
    }
    /**
     * For generating style tag
     * @param {?=} datas
     * @return {?}
     */
    _createStyleElem(datas) {
        /** @type {?} */
        const styleItem = this._renderer.createElement('style');
        if (datas) {
            /** @type {?} */
            const styleText = this._renderer.createText(datas);
            this._renderer.appendChild(styleItem, styleText);
        }
        this._renderer.appendChild(this.carousel, styleItem);
        return styleItem;
    }
}
NguCarousel.ɵfac = function NguCarousel_Factory(t) { return new (t || NguCarousel)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.IterableDiffers), ɵngcc0.ɵɵdirectiveInject(PLATFORM_ID), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NguCarousel.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NguCarousel, selectors: [["ngu-carousel"]], contentQueries: function NguCarousel_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NguCarouselNextDirective, true, ElementRef);
        ɵngcc0.ɵɵcontentQuery(dirIndex, NguCarouselPrevDirective, true, ElementRef);
        ɵngcc0.ɵɵcontentQuery(dirIndex, NguCarouselDefDirective, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nextBtn = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.prevBtn = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._defDirec = _t);
    } }, viewQuery: function NguCarousel_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(NguCarouselOutlet, true);
        ɵngcc0.ɵɵviewQuery(_c0, true, ElementRef);
        ɵngcc0.ɵɵviewQuery(_c1, true, ElementRef);
        ɵngcc0.ɵɵviewQuery(_c2, true, ElementRef);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._nodeOutlet = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.carouselMain1 = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nguItemsContainer = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.touchContainer = _t.first);
    } }, inputs: { dataSource: "dataSource", trackBy: "trackBy", inputs: "inputs" }, outputs: { carouselLoad: "carouselLoad", onMove: "onMove" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c4, decls: 11, vars: 0, consts: [[1, "ngucarousel"], ["ngucarousel", ""], [1, "ngu-touch-container"], ["touchContainer", ""], [1, "ngucarousel-items"], ["nguItemsContainer", ""], ["nguCarouselOutlet", ""], [1, "nguclearFix"]], template: function NguCarousel_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c3);
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2, 3);
        ɵngcc0.ɵɵelementStart(4, "div", 4, 5);
        ɵngcc0.ɵɵelementContainer(6, 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(7, "div", 7);
        ɵngcc0.ɵɵprojection(8);
        ɵngcc0.ɵɵprojection(9, 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵprojection(10, 2);
    } }, directives: [ɵngcc1.NguCarouselOutlet], styles: ["[_nghost-%COMP%]{display:block;position:relative}.ngurtl[_nghost-%COMP%]{direction:rtl}.ngucarousel[_ngcontent-%COMP%]{position:relative;overflow:hidden;height:100%}.ngucarousel[_ngcontent-%COMP%]   .ngucarousel-items[_ngcontent-%COMP%]{position:relative;display:flex;height:100%}.nguvertical[_ngcontent-%COMP%]{flex-direction:column}.banner[_ngcontent-%COMP%]   .ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]{position:absolute;width:100%;bottom:20px}.banner[_ngcontent-%COMP%]   .ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background:rgba(255,255,255,.55)}.banner[_ngcontent-%COMP%]   .ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background:#fff}.banner[_ngcontent-%COMP%]   .ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{cursor:pointer}.ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]{list-style-type:none;text-align:center;padding:12px;margin:0;white-space:nowrap;overflow:auto;box-sizing:border-box}.ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;border-radius:50%;background:rgba(0,0,0,.55);padding:4px;margin:0 4px;transition-timing-function:cubic-bezier(.17,.67,.83,.67);transition:.4s}.ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background:#6b6b6b;-webkit-transform:scale(1.8);transform:scale(1.8)}.ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{cursor:pointer}.nguclearFix[_ngcontent-%COMP%]{clear:both}"], changeDetection: 0 });
/** @nocollapse */
NguCarousel.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: IterableDiffers },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ChangeDetectorRef }
];
NguCarousel.propDecorators = {
    inputs: [{ type: Input, args: ['inputs',] }],
    carouselLoad: [{ type: Output, args: ['carouselLoad',] }],
    onMove: [{ type: Output, args: ['onMove',] }],
    dataSource: [{ type: Input, args: ['dataSource',] }],
    _defDirec: [{ type: ContentChildren, args: [NguCarouselDefDirective,] }],
    _nodeOutlet: [{ type: ViewChild, args: [NguCarouselOutlet,] }],
    nextBtn: [{ type: ContentChild, args: [NguCarouselNextDirective, { read: ElementRef },] }],
    prevBtn: [{ type: ContentChild, args: [NguCarouselPrevDirective, { read: ElementRef },] }],
    carouselMain1: [{ type: ViewChild, args: ['ngucarousel', { read: ElementRef },] }],
    nguItemsContainer: [{ type: ViewChild, args: ['nguItemsContainer', { read: ElementRef },] }],
    touchContainer: [{ type: ViewChild, args: ['touchContainer', { read: ElementRef },] }],
    trackBy: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NguCarousel, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'ngu-carousel',
                template: `<div #ngucarousel class="ngucarousel">
  <div #touchContainer class="ngu-touch-container">
    <div #nguItemsContainer class="ngucarousel-items">
      <ng-container nguCarouselOutlet></ng-container>
    </div>
  </div>
  <div class="nguclearFix"></div>
  <ng-content select="[NguCarouselPrev]"></ng-content>
  <ng-content select="[NguCarouselNext]"></ng-content>
</div>
<ng-content select="[NguCarouselPoint]"></ng-content>
`,
                styles: [`:host{display:block;position:relative}:host.ngurtl{direction:rtl}.ngucarousel{position:relative;overflow:hidden;height:100%}.ngucarousel .ngucarousel-items{position:relative;display:flex;height:100%}.nguvertical{flex-direction:column}.banner .ngucarouselPointDefault .ngucarouselPoint{position:absolute;width:100%;bottom:20px}.banner .ngucarouselPointDefault .ngucarouselPoint li{background:rgba(255,255,255,.55)}.banner .ngucarouselPointDefault .ngucarouselPoint li.active{background:#fff}.banner .ngucarouselPointDefault .ngucarouselPoint li:hover{cursor:pointer}.ngucarouselPointDefault .ngucarouselPoint{list-style-type:none;text-align:center;padding:12px;margin:0;white-space:nowrap;overflow:auto;box-sizing:border-box}.ngucarouselPointDefault .ngucarouselPoint li{display:inline-block;border-radius:50%;background:rgba(0,0,0,.55);padding:4px;margin:0 4px;transition-timing-function:cubic-bezier(.17,.67,.83,.67);transition:.4s}.ngucarouselPointDefault .ngucarouselPoint li.active{background:#6b6b6b;-webkit-transform:scale(1.8);transform:scale(1.8)}.ngucarouselPointDefault .ngucarouselPoint li:hover{cursor:pointer}.nguclearFix{clear:both}`],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.IterableDiffers }, { type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: ɵngcc0.ChangeDetectorRef }]; }, { carouselLoad: [{
            type: Output,
            args: ['carouselLoad']
        }], onMove: [{
            type: Output,
            args: ['onMove']
        }], dataSource: [{
            type: Input,
            args: ['dataSource']
        }], nextBtn: [{
            type: ContentChild,
            args: [NguCarouselNextDirective, { read: ElementRef }]
        }], prevBtn: [{
            type: ContentChild,
            args: [NguCarouselPrevDirective, { read: ElementRef }]
        }], trackBy: [{
            type: Input
        }], inputs: [{
            type: Input,
            args: ['inputs']
        }], _defDirec: [{
            type: ContentChildren,
            args: [NguCarouselDefDirective]
        }], _nodeOutlet: [{
            type: ViewChild,
            args: [NguCarouselOutlet]
        }], carouselMain1: [{
            type: ViewChild,
            args: ['ngucarousel', { read: ElementRef }]
        }], nguItemsContainer: [{
            type: ViewChild,
            args: ['nguItemsContainer', { read: ElementRef }]
        }], touchContainer: [{
            type: ViewChild,
            args: ['touchContainer', { read: ElementRef }]
        }] }); })();
if (false) {
    /** @type {?} */
    NguCarousel.prototype._dataSubscription;
    /** @type {?} */
    NguCarousel.prototype._dataSource;
    /** @type {?} */
    NguCarousel.prototype._dataDiffer;
    /** @type {?} */
    NguCarousel.prototype.styleid;
    /** @type {?} */
    NguCarousel.prototype.directionSym;
    /** @type {?} */
    NguCarousel.prototype.carouselCssNode;
    /** @type {?} */
    NguCarousel.prototype.pointIndex;
    /** @type {?} */
    NguCarousel.prototype.withAnim;
    /** @type {?} */
    NguCarousel.prototype.activePoint;
    /** @type {?} */
    NguCarousel.prototype.isHovered;
    /** @type {?} */
    NguCarousel.prototype.inputs;
    /** @type {?} */
    NguCarousel.prototype.carouselLoad;
    /** @type {?} */
    NguCarousel.prototype.onMove;
    /** @type {?} */
    NguCarousel.prototype.arrayChanges;
    /** @type {?} */
    NguCarousel.prototype.carouselInt;
    /** @type {?} */
    NguCarousel.prototype.listener1;
    /** @type {?} */
    NguCarousel.prototype.listener2;
    /** @type {?} */
    NguCarousel.prototype.listener3;
    /** @type {?} */
    NguCarousel.prototype.listener4;
    /** @type {?} */
    NguCarousel.prototype._defaultNodeDef;
    /** @type {?} */
    NguCarousel.prototype._defDirec;
    /** @type {?} */
    NguCarousel.prototype._nodeOutlet;
    /** @type {?} */
    NguCarousel.prototype.carouselMain1;
    /** @type {?} */
    NguCarousel.prototype.nguItemsContainer;
    /** @type {?} */
    NguCarousel.prototype.touchContainer;
    /** @type {?} */
    NguCarousel.prototype._intervalController$;
    /** @type {?} */
    NguCarousel.prototype.carousel;
    /** @type {?} */
    NguCarousel.prototype.onResize;
    /** @type {?} */
    NguCarousel.prototype.onScrolling;
    /** @type {?} */
    NguCarousel.prototype.pointNumbers;
    /** @type {?} */
    NguCarousel.prototype._trackByFn;
    /** @type {?} */
    NguCarousel.prototype._el;
    /** @type {?} */
    NguCarousel.prototype._renderer;
    /** @type {?} */
    NguCarousel.prototype._differs;
    /** @type {?} */
    NguCarousel.prototype.platformId;
    /** @type {?} */
    NguCarousel.prototype.cdr;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd1LWNhcm91c2VsLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L0BuZ3UvY2Fyb3VzZWwvbGliL25ndS1jYXJvdXNlbC9uZ3UtY2Fyb3VzZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBR0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLGVBQWUsRUFFZixVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsU0FBUyxFQUlULGVBQWUsRUFHZixNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxTQUFTLEVBRVQsU0FBUyxFQUVWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxLQUFLLEVBQ0wsU0FBUyxFQUNULFFBQVEsRUFDUixLQUFLLEVBQ0wsVUFBVSxFQUNWLEVBQUUsRUFDRixPQUFPLEVBRVIsTUFBTSxNQUFNLENBQUM7QUFDZCxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEUsT0FBTyxFQUNMLHVCQUF1QixFQUN2Qix3QkFBd0IsRUFDeEIsaUJBQWlCLEVBQ2pCLHdCQUF3QixFQUN6QixNQUFNLDZCQUE2QixDQUFDO0FBQ3JDLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsd0JBQXdCLEVBQ3hCLGdCQUFnQixFQUNqQixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCO0FBQ0c7QUFDRTtBQURMOzs7Ozs7Ozs7QUFtQkEsTUFBTSxrQkFBc0IsU0FBUSxnQkFBZ0I7QUFDbEQ7QUFBUTtBQUFzQjtBQUE0QjtBQUNoRDtBQUNOO0FBQ0U7QUFBUSxJQW9IZCxZQUNVLEtBQ0EsV0FDQSxVQUNxQixVQUFrQixFQUN2QztBQUFPLFFBRWYsS0FBSyxFQUFFLENBQUM7QUFDWixRQVBZLFFB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b0NBLEFBbEdBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFhQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUtBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUNBLEFBMEJBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBYUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFRQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUlBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUlBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUtBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUlBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQURBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBTUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFPQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFJQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFJQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBLzVCQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQVdBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUEzREEsQUFBQSxBQWNBLEFBQUEsQUFOQSxBQUFBLEFBaUxBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQTlMQSxBQUFBLEFBK0VBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQVdBLEFBQUEsQUFBQSxBQUFBLEFBY0EsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQU1BLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBYUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFVQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFrQkEsQUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRG9DaGVjayxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgaXNEZXZNb2RlLFxyXG4gIEl0ZXJhYmxlQ2hhbmdlUmVjb3JkLFxyXG4gIEl0ZXJhYmxlQ2hhbmdlcyxcclxuICBJdGVyYWJsZURpZmZlcixcclxuICBJdGVyYWJsZURpZmZlcnMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUExBVEZPUk1fSUQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyMixcclxuICBUcmFja0J5RnVuY3Rpb24sXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBlbXB0eSxcclxuICBmcm9tRXZlbnQsXHJcbiAgaW50ZXJ2YWwsXHJcbiAgbWVyZ2UsXHJcbiAgT2JzZXJ2YWJsZSxcclxuICBvZixcclxuICBTdWJqZWN0LFxyXG4gIFN1YnNjcmlwdGlvblxyXG59IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXBUbywgc3RhcnRXaXRoLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHtcclxuICBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZSxcclxuICBOZ3VDYXJvdXNlbE5leHREaXJlY3RpdmUsXHJcbiAgTmd1Q2Fyb3VzZWxPdXRsZXQsXHJcbiAgTmd1Q2Fyb3VzZWxQcmV2RGlyZWN0aXZlXHJcbn0gZnJvbSAnLi8uLi9uZ3UtY2Fyb3VzZWwuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtcclxuICBOZ3VDYXJvdXNlbENvbmZpZyxcclxuICBOZ3VDYXJvdXNlbE91dGxldENvbnRleHQsXHJcbiAgTmd1Q2Fyb3VzZWxTdG9yZVxyXG59IGZyb20gJy4vbmd1LWNhcm91c2VsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ25ndS1jYXJvdXNlbCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2ICNuZ3VjYXJvdXNlbCBjbGFzcz1cIm5ndWNhcm91c2VsXCI+XHJcbiAgPGRpdiAjdG91Y2hDb250YWluZXIgY2xhc3M9XCJuZ3UtdG91Y2gtY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2ICNuZ3VJdGVtc0NvbnRhaW5lciBjbGFzcz1cIm5ndWNhcm91c2VsLWl0ZW1zXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgbmd1Q2Fyb3VzZWxPdXRsZXQ+PC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwibmd1Y2xlYXJGaXhcIj48L2Rpdj5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJbTmd1Q2Fyb3VzZWxQcmV2XVwiPjwvbmctY29udGVudD5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJbTmd1Q2Fyb3VzZWxOZXh0XVwiPjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcbjxuZy1jb250ZW50IHNlbGVjdD1cIltOZ3VDYXJvdXNlbFBvaW50XVwiPjwvbmctY29udGVudD5cclxuYCxcclxuICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZX06aG9zdC5uZ3VydGx7ZGlyZWN0aW9uOnJ0bH0ubmd1Y2Fyb3VzZWx7cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVuO2hlaWdodDoxMDAlfS5uZ3VjYXJvdXNlbCAubmd1Y2Fyb3VzZWwtaXRlbXN7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpmbGV4O2hlaWdodDoxMDAlfS5uZ3V2ZXJ0aWNhbHtmbGV4LWRpcmVjdGlvbjpjb2x1bW59LmJhbm5lciAubmd1Y2Fyb3VzZWxQb2ludERlZmF1bHQgLm5ndWNhcm91c2VsUG9pbnR7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtib3R0b206MjBweH0uYmFubmVyIC5uZ3VjYXJvdXNlbFBvaW50RGVmYXVsdCAubmd1Y2Fyb3VzZWxQb2ludCBsaXtiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsLjU1KX0uYmFubmVyIC5uZ3VjYXJvdXNlbFBvaW50RGVmYXVsdCAubmd1Y2Fyb3VzZWxQb2ludCBsaS5hY3RpdmV7YmFja2dyb3VuZDojZmZmfS5iYW5uZXIgLm5ndWNhcm91c2VsUG9pbnREZWZhdWx0IC5uZ3VjYXJvdXNlbFBvaW50IGxpOmhvdmVye2N1cnNvcjpwb2ludGVyfS5uZ3VjYXJvdXNlbFBvaW50RGVmYXVsdCAubmd1Y2Fyb3VzZWxQb2ludHtsaXN0LXN0eWxlLXR5cGU6bm9uZTt0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjEycHg7bWFyZ2luOjA7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmF1dG87Ym94LXNpemluZzpib3JkZXItYm94fS5uZ3VjYXJvdXNlbFBvaW50RGVmYXVsdCAubmd1Y2Fyb3VzZWxQb2ludCBsaXtkaXNwbGF5OmlubGluZS1ibG9jaztib3JkZXItcmFkaXVzOjUwJTtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjU1KTtwYWRkaW5nOjRweDttYXJnaW46MCA0cHg7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4xNywuNjcsLjgzLC42Nyk7dHJhbnNpdGlvbjouNHN9Lm5ndWNhcm91c2VsUG9pbnREZWZhdWx0IC5uZ3VjYXJvdXNlbFBvaW50IGxpLmFjdGl2ZXtiYWNrZ3JvdW5kOiM2YjZiNmI7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS44KTt0cmFuc2Zvcm06c2NhbGUoMS44KX0ubmd1Y2Fyb3VzZWxQb2ludERlZmF1bHQgLm5ndWNhcm91c2VsUG9pbnQgbGk6aG92ZXJ7Y3Vyc29yOnBvaW50ZXJ9Lm5ndWNsZWFyRml4e2NsZWFyOmJvdGh9YF0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1jbGFzcy1zdWZmaXhcclxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsPFQ+IGV4dGVuZHMgTmd1Q2Fyb3VzZWxTdG9yZVxyXG4gIGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIERvQ2hlY2sge1xyXG4gIF9kYXRhU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgX2RhdGFTb3VyY2U6IGFueTtcclxuICBfZGF0YURpZmZlcjogSXRlcmFibGVEaWZmZXI8e30+O1xyXG4gIHN0eWxlaWQ6IHN0cmluZztcclxuICBwcml2YXRlIGRpcmVjdGlvblN5bTogc3RyaW5nO1xyXG4gIHByaXZhdGUgY2Fyb3VzZWxDc3NOb2RlOiBhbnk7XHJcbiAgcHJpdmF0ZSBwb2ludEluZGV4OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSB3aXRoQW5pbSA9IHRydWU7XHJcbiAgYWN0aXZlUG9pbnQ6IG51bWJlcjtcclxuICBpc0hvdmVyZWQgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCdpbnB1dHMnKVxyXG4gIHByaXZhdGUgaW5wdXRzOiBOZ3VDYXJvdXNlbENvbmZpZztcclxuICBAT3V0cHV0KCdjYXJvdXNlbExvYWQnKVxyXG4gIHByaXZhdGUgY2Fyb3VzZWxMb2FkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tb3V0cHV0LW9uLXByZWZpeFxyXG4gIEBPdXRwdXQoJ29uTW92ZScpXHJcbiAgcHJpdmF0ZSBvbk1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyPE5ndUNhcm91c2VsPFQ+PigpO1xyXG4gIC8vIGlzRmlyc3RzcyA9IDA7XHJcbiAgYXJyYXlDaGFuZ2VzOiBJdGVyYWJsZUNoYW5nZXM8e30+O1xyXG4gIGNhcm91c2VsSW50OiBTdWJzY3JpcHRpb247XHJcblxyXG4gIGxpc3RlbmVyMTogKCkgPT4gdm9pZDtcclxuICBsaXN0ZW5lcjI6ICgpID0+IHZvaWQ7XHJcbiAgbGlzdGVuZXIzOiAoKSA9PiB2b2lkO1xyXG4gIGxpc3RlbmVyNDogKCkgPT4gdm9pZDtcclxuXHJcbiAgQElucHV0KCdkYXRhU291cmNlJylcclxuICBnZXQgZGF0YVNvdXJjZSgpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2U7XHJcbiAgfVxyXG4gIHNldCBkYXRhU291cmNlKGRhdGE6IGFueSkge1xyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coZGF0YSwgdGhpcy5kYXRhU291cmNlKTtcclxuICAgICAgLy8gdGhpcy5pc0ZpcnN0c3MrKztcclxuICAgICAgdGhpcy5fc3dpdGNoRGF0YVNvdXJjZShkYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2RlZmF1bHROb2RlRGVmOiBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZTxhbnk+IHwgbnVsbDtcclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZSlcclxuICBwcml2YXRlIF9kZWZEaXJlYzogUXVlcnlMaXN0PE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlPGFueT4+O1xyXG5cclxuICBAVmlld0NoaWxkKE5ndUNhcm91c2VsT3V0bGV0KVxyXG4gIF9ub2RlT3V0bGV0OiBOZ3VDYXJvdXNlbE91dGxldDtcclxuXHJcbiAgLyoqIFRoZSBzZXR0ZXIgaXMgdXNlZCB0byBjYXRjaCB0aGUgYnV0dG9uIGlmIHRoZSBidXR0b24gaGFzIG5nSWZcclxuICAgKiBpc3N1ZSBpZCAjOTFcclxuICAgKi9cclxuICBAQ29udGVudENoaWxkKE5ndUNhcm91c2VsTmV4dERpcmVjdGl2ZSwgeyByZWFkOiBFbGVtZW50UmVmIH0pXHJcbiAgc2V0IG5leHRCdG4oYnRuOiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLmxpc3RlbmVyMiAmJiB0aGlzLmxpc3RlbmVyMigpO1xyXG4gICAgaWYgKGJ0bikge1xyXG4gICAgICB0aGlzLmxpc3RlbmVyMiA9IHRoaXMuX3JlbmRlcmVyLmxpc3RlbihidG4ubmF0aXZlRWxlbWVudCwgJ2NsaWNrJywgKCkgPT5cclxuICAgICAgICB0aGlzLl9jYXJvdXNlbFNjcm9sbE9uZSgxKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIFRoZSBzZXR0ZXIgaXMgdXNlZCB0byBjYXRjaCB0aGUgYnV0dG9uIGlmIHRoZSBidXR0b24gaGFzIG5nSWZcclxuICAgKiBpc3N1ZSBpZCAjOTFcclxuICAgKi9cclxuICBAQ29udGVudENoaWxkKE5ndUNhcm91c2VsUHJldkRpcmVjdGl2ZSwgeyByZWFkOiBFbGVtZW50UmVmIH0pXHJcbiAgc2V0IHByZXZCdG4oYnRuOiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLmxpc3RlbmVyMSAmJiB0aGlzLmxpc3RlbmVyMSgpO1xyXG4gICAgaWYgKGJ0bikge1xyXG4gICAgICB0aGlzLmxpc3RlbmVyMSA9IHRoaXMuX3JlbmRlcmVyLmxpc3RlbihidG4ubmF0aXZlRWxlbWVudCwgJ2NsaWNrJywgKCkgPT5cclxuICAgICAgICB0aGlzLl9jYXJvdXNlbFNjcm9sbE9uZSgwKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQFZpZXdDaGlsZCgnbmd1Y2Fyb3VzZWwnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSlcclxuICBwcml2YXRlIGNhcm91c2VsTWFpbjE6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ25ndUl0ZW1zQ29udGFpbmVyJywgeyByZWFkOiBFbGVtZW50UmVmIH0pXHJcbiAgcHJpdmF0ZSBuZ3VJdGVtc0NvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuXHJcbiAgQFZpZXdDaGlsZCgndG91Y2hDb250YWluZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSlcclxuICBwcml2YXRlIHRvdWNoQ29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG5cclxuICBwcml2YXRlIF9pbnRlcnZhbENvbnRyb2xsZXIkID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xyXG5cclxuICBwcml2YXRlIGNhcm91c2VsOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgb25SZXNpemU6IGFueTtcclxuICBwcml2YXRlIG9uU2Nyb2xsaW5nOiBhbnk7XHJcblxyXG4gIHBvaW50TnVtYmVyczogQXJyYXk8YW55PiA9IFtdO1xyXG5cclxuICAvKipcclxuICAgKiBUcmFja2luZyBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgdXNlZCB0byBjaGVjayB0aGUgZGlmZmVyZW5jZXMgaW4gZGF0YSBjaGFuZ2VzLiBVc2VkIHNpbWlsYXJseVxyXG4gICAqIHRvIGBuZ0ZvcmAgYHRyYWNrQnlgIGZ1bmN0aW9uLiBPcHRpbWl6ZSBJdGVtcyBvcGVyYXRpb25zIGJ5IGlkZW50aWZ5aW5nIGEgSXRlbXMgYmFzZWQgb24gaXRzIGRhdGFcclxuICAgKiByZWxhdGl2ZSB0byB0aGUgZnVuY3Rpb24gdG8ga25vdyBpZiBhIEl0ZW1zIHNob3VsZCBiZSBhZGRlZC9yZW1vdmVkL21vdmVkLlxyXG4gICAqIEFjY2VwdHMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIHR3byBwYXJhbWV0ZXJzLCBgaW5kZXhgIGFuZCBgaXRlbWAuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBnZXQgdHJhY2tCeSgpOiBUcmFja0J5RnVuY3Rpb248VD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RyYWNrQnlGbjtcclxuICB9XHJcbiAgc2V0IHRyYWNrQnkoZm46IFRyYWNrQnlGdW5jdGlvbjxUPikge1xyXG4gICAgaWYgKFxyXG4gICAgICBpc0Rldk1vZGUoKSAmJlxyXG4gICAgICBmbiAhPSBudWxsICYmXHJcbiAgICAgIHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJyAmJlxyXG4gICAgICA8YW55PmNvbnNvbGUgJiZcclxuICAgICAgPGFueT5jb25zb2xlLndhcm5cclxuICAgICkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgYHRyYWNrQnkgbXVzdCBiZSBhIGZ1bmN0aW9uLCBidXQgcmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShmbil9LmBcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRoaXMuX3RyYWNrQnlGbiA9IGZuO1xyXG4gIH1cclxuICBwcml2YXRlIF90cmFja0J5Rm46IFRyYWNrQnlGdW5jdGlvbjxUPjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIF9kaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMsXHJcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5fZGF0YURpZmZlciA9IHRoaXMuX2RpZmZlcnNcclxuICAgICAgLmZpbmQoW10pXHJcbiAgICAgIC5jcmVhdGUoKF9pOiBudW1iZXIsIGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYWNrQnkgPyB0aGlzLnRyYWNrQnkoaXRlbS5kYXRhSW5kZXgsIGl0ZW0uZGF0YSkgOiBpdGVtO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nRG9DaGVjaygpIHtcclxuICAgIHRoaXMuYXJyYXlDaGFuZ2VzID0gdGhpcy5fZGF0YURpZmZlci5kaWZmKHRoaXMuZGF0YVNvdXJjZSk7XHJcbiAgICBpZiAodGhpcy5hcnJheUNoYW5nZXMgJiYgdGhpcy5fZGVmRGlyZWMpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ0NoYW5nZXMgZGV0ZWN0ZWQhJyk7XHJcbiAgICAgIHRoaXMuX29ic2VydmVSZW5kZXJDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zd2l0Y2hEYXRhU291cmNlKGRhdGFTb3VyY2U6IGFueSk6IGFueSB7XHJcbiAgICB0aGlzLl9kYXRhU291cmNlID0gZGF0YVNvdXJjZTtcclxuICAgIGlmICh0aGlzLl9kZWZEaXJlYykge1xyXG4gICAgICB0aGlzLl9vYnNlcnZlUmVuZGVyQ2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfb2JzZXJ2ZVJlbmRlckNoYW5nZXMoKSB7XHJcbiAgICBsZXQgZGF0YVN0cmVhbTogT2JzZXJ2YWJsZTxhbnlbXT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgaWYgKHRoaXMuX2RhdGFTb3VyY2UgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSB7XHJcbiAgICAgIGRhdGFTdHJlYW0gPSB0aGlzLl9kYXRhU291cmNlO1xyXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRoaXMuX2RhdGFTb3VyY2UpKSB7XHJcbiAgICAgIGRhdGFTdHJlYW0gPSBvZih0aGlzLl9kYXRhU291cmNlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YVN0cmVhbSkge1xyXG4gICAgICB0aGlzLl9kYXRhU3Vic2NyaXB0aW9uID0gZGF0YVN0cmVhbVxyXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9pbnRlcnZhbENvbnRyb2xsZXIkKSlcclxuICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJOb2RlQ2hhbmdlcyhkYXRhKTtcclxuICAgICAgICAgIHRoaXMuaXNMYXN0ID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlck5vZGVDaGFuZ2VzKFxyXG4gICAgZGF0YTogYW55W10sXHJcbiAgICB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmID0gdGhpcy5fbm9kZU91dGxldC52aWV3Q29udGFpbmVyXHJcbiAgKSB7XHJcbiAgICBpZiAoIXRoaXMuYXJyYXlDaGFuZ2VzKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5hcnJheUNoYW5nZXMuZm9yRWFjaE9wZXJhdGlvbihcclxuICAgICAgKFxyXG4gICAgICAgIGl0ZW06IEl0ZXJhYmxlQ2hhbmdlUmVjb3JkPGFueT4sXHJcbiAgICAgICAgYWRqdXN0ZWRQcmV2aW91c0luZGV4OiBudW1iZXIsXHJcbiAgICAgICAgY3VycmVudEluZGV4OiBudW1iZXJcclxuICAgICAgKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc3Qgbm9kZSA9IHRoaXMuX2RlZkRpcmVjLmZpbmQoaXRlbXMgPT4gaXRlbS5pdGVtKTtcclxuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5fZ2V0Tm9kZURlZihkYXRhW2N1cnJlbnRJbmRleF0sIGN1cnJlbnRJbmRleCk7XHJcblxyXG4gICAgICAgIGlmIChpdGVtLnByZXZpb3VzSW5kZXggPT0gbnVsbCkge1xyXG4gICAgICAgICAgY29uc3QgY29udGV4dCA9IG5ldyBOZ3VDYXJvdXNlbE91dGxldENvbnRleHQ8YW55PihkYXRhW2N1cnJlbnRJbmRleF0pO1xyXG4gICAgICAgICAgY29udGV4dC5pbmRleCA9IGN1cnJlbnRJbmRleDtcclxuICAgICAgICAgIHZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KFxyXG4gICAgICAgICAgICBub2RlLnRlbXBsYXRlLFxyXG4gICAgICAgICAgICBjb250ZXh0LFxyXG4gICAgICAgICAgICBjdXJyZW50SW5kZXhcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50SW5kZXggPT0gbnVsbCkge1xyXG4gICAgICAgICAgdmlld0NvbnRhaW5lci5yZW1vdmUoYWRqdXN0ZWRQcmV2aW91c0luZGV4KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgdmlldyA9IHZpZXdDb250YWluZXIuZ2V0KGFkanVzdGVkUHJldmlvdXNJbmRleCk7XHJcbiAgICAgICAgICB2aWV3Q29udGFpbmVyLm1vdmUodmlldywgY3VycmVudEluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICB0aGlzLl91cGRhdGVJdGVtSW5kZXhDb250ZXh0KCk7XHJcblxyXG4gICAgaWYgKHRoaXMuY2Fyb3VzZWwpIHtcclxuICAgICAgdGhpcy5fc3RvcmVDYXJvdXNlbERhdGEoKTtcclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGF0YVNvdXJjZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIHRoZSBpbmRleC1yZWxhdGVkIGNvbnRleHQgZm9yIGVhY2ggcm93IHRvIHJlZmxlY3QgYW55IGNoYW5nZXMgaW4gdGhlIGluZGV4IG9mIHRoZSByb3dzLFxyXG4gICAqIGUuZy4gZmlyc3QvbGFzdC9ldmVuL29kZC5cclxuICAgKi9cclxuICBwcml2YXRlIF91cGRhdGVJdGVtSW5kZXhDb250ZXh0KCkge1xyXG4gICAgY29uc3Qgdmlld0NvbnRhaW5lciA9IHRoaXMuX25vZGVPdXRsZXQudmlld0NvbnRhaW5lcjtcclxuICAgIGZvciAoXHJcbiAgICAgIGxldCByZW5kZXJJbmRleCA9IDAsIGNvdW50ID0gdmlld0NvbnRhaW5lci5sZW5ndGg7XHJcbiAgICAgIHJlbmRlckluZGV4IDwgY291bnQ7XHJcbiAgICAgIHJlbmRlckluZGV4KytcclxuICAgICkge1xyXG4gICAgICBjb25zdCB2aWV3UmVmID0gdmlld0NvbnRhaW5lci5nZXQocmVuZGVySW5kZXgpIGFzIGFueTtcclxuICAgICAgY29uc3QgY29udGV4dCA9IHZpZXdSZWYuY29udGV4dCBhcyBhbnk7XHJcbiAgICAgIGNvbnRleHQuY291bnQgPSBjb3VudDtcclxuICAgICAgY29udGV4dC5maXJzdCA9IHJlbmRlckluZGV4ID09PSAwO1xyXG4gICAgICBjb250ZXh0Lmxhc3QgPSByZW5kZXJJbmRleCA9PT0gY291bnQgLSAxO1xyXG4gICAgICBjb250ZXh0LmV2ZW4gPSByZW5kZXJJbmRleCAlIDIgPT09IDA7XHJcbiAgICAgIGNvbnRleHQub2RkID0gIWNvbnRleHQuZXZlbjtcclxuICAgICAgY29udGV4dC5pbmRleCA9IHJlbmRlckluZGV4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0Tm9kZURlZihkYXRhOiBhbnksIGk6IG51bWJlcik6IE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlPGFueT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5fZGVmRGlyZWMpO1xyXG4gICAgaWYgKHRoaXMuX2RlZkRpcmVjLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fZGVmRGlyZWMuZmlyc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgbm9kZURlZiA9XHJcbiAgICAgIHRoaXMuX2RlZkRpcmVjLmZpbmQoZGVmID0+IGRlZi53aGVuICYmIGRlZi53aGVuKGksIGRhdGEpKSB8fFxyXG4gICAgICB0aGlzLl9kZWZhdWx0Tm9kZURlZjtcclxuXHJcbiAgICByZXR1cm4gbm9kZURlZjtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuY2Fyb3VzZWwgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgdGhpcy5faW5wdXRWYWxpZGF0aW9uKCk7XHJcblxyXG4gICAgdGhpcy5jYXJvdXNlbENzc05vZGUgPSB0aGlzLl9jcmVhdGVTdHlsZUVsZW0oKTtcclxuXHJcbiAgICAvLyB0aGlzLl9idXR0b25Db250cm9sKCk7XHJcblxyXG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuICAgICAgdGhpcy5fY2Fyb3VzZWxJbnRlcnZhbCgpO1xyXG4gICAgICBpZiAoIXRoaXMudmVydGljYWwuZW5hYmxlZCkge1xyXG4gICAgICAgIHRoaXMuX3RvdWNoKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5saXN0ZW5lcjMgPSB0aGlzLl9yZW5kZXJlci5saXN0ZW4oJ3dpbmRvdycsICdyZXNpemUnLCBldmVudCA9PiB7XHJcbiAgICAgICAgdGhpcy5fb25SZXNpemluZyhldmVudCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLl9vbldpbmRvd1Njcm9sbGluZygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5fb2JzZXJ2ZVJlbmRlckNoYW5nZXMoKTtcclxuXHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2lucHV0VmFsaWRhdGlvbigpIHtcclxuICAgIHRoaXMudHlwZSA9IHRoaXMuaW5wdXRzLmdyaWQuYWxsICE9PSAwID8gJ2ZpeGVkJyA6ICdyZXNwb25zaXZlJztcclxuICAgIHRoaXMubG9vcCA9IHRoaXMuaW5wdXRzLmxvb3AgfHwgZmFsc2U7XHJcbiAgICB0aGlzLmlucHV0cy5lYXNpbmcgPSB0aGlzLmlucHV0cy5lYXNpbmcgfHwgJ2N1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJztcclxuICAgIHRoaXMudG91Y2guYWN0aXZlID0gdGhpcy5pbnB1dHMudG91Y2ggfHwgZmFsc2U7XHJcbiAgICB0aGlzLlJUTCA9IHRoaXMuaW5wdXRzLlJUTCA/IHRydWUgOiBmYWxzZTtcclxuICAgIHRoaXMuaW50ZXJ2YWwgPSB0aGlzLmlucHV0cy5pbnRlcnZhbCB8fCBudWxsO1xyXG4gICAgdGhpcy52ZWxvY2l0eSA9XHJcbiAgICAgIHR5cGVvZiB0aGlzLmlucHV0cy52ZWxvY2l0eSA9PT0gJ251bWJlcidcclxuICAgICAgICA/IHRoaXMuaW5wdXRzLnZlbG9jaXR5XHJcbiAgICAgICAgOiB0aGlzLnZlbG9jaXR5O1xyXG5cclxuICAgIGlmICh0aGlzLmlucHV0cy52ZXJ0aWNhbCAmJiB0aGlzLmlucHV0cy52ZXJ0aWNhbC5lbmFibGVkKSB7XHJcbiAgICAgIHRoaXMudmVydGljYWwuZW5hYmxlZCA9IHRoaXMuaW5wdXRzLnZlcnRpY2FsLmVuYWJsZWQ7XHJcbiAgICAgIHRoaXMudmVydGljYWwuaGVpZ2h0ID0gdGhpcy5pbnB1dHMudmVydGljYWwuaGVpZ2h0O1xyXG4gICAgfVxyXG4gICAgdGhpcy5kaXJlY3Rpb25TeW0gPSB0aGlzLlJUTCA/ICcnIDogJy0nO1xyXG4gICAgdGhpcy5wb2ludCA9XHJcbiAgICAgIHRoaXMuaW5wdXRzLnBvaW50ICYmIHR5cGVvZiB0aGlzLmlucHV0cy5wb2ludC52aXNpYmxlICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgID8gdGhpcy5pbnB1dHMucG9pbnQudmlzaWJsZVxyXG4gICAgICAgIDogdHJ1ZTtcclxuXHJcbiAgICB0aGlzLl9jYXJvdXNlbFNpemUoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgLy8gY2xlYXJJbnRlcnZhbCh0aGlzLmNhcm91c2VsSW50KTtcclxuICAgIHRoaXMuY2Fyb3VzZWxJbnQgJiYgdGhpcy5jYXJvdXNlbEludC51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5faW50ZXJ2YWxDb250cm9sbGVyJC51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5jYXJvdXNlbExvYWQuY29tcGxldGUoKTtcclxuICAgIHRoaXMub25Nb3ZlLmNvbXBsZXRlKCk7XHJcblxyXG4gICAgLyoqIHJlbW92ZSBsaXN0ZW5lcnMgKi9cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykge1xyXG4gICAgICBjb25zdCBzdHIgPSBgbGlzdGVuZXIke2l9YDtcclxuICAgICAgdGhpc1tzdHJdICYmIHRoaXNbc3RyXSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfb25SZXNpemluZyhldmVudDogYW55KTogdm9pZCB7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy5vblJlc2l6ZSk7XHJcbiAgICB0aGlzLm9uUmVzaXplID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmRldmljZVdpZHRoICE9PSBldmVudC50YXJnZXQub3V0ZXJXaWR0aCkge1xyXG4gICAgICAgIHRoaXMuX3NldFN0eWxlKHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCwgJ3RyYW5zaXRpb24nLCBgYCk7XHJcbiAgICAgICAgdGhpcy5fc3RvcmVDYXJvdXNlbERhdGEoKTtcclxuICAgICAgfVxyXG4gICAgfSwgNTAwKTtcclxuICB9XHJcblxyXG4gIC8qKiBHZXQgVG91Y2ggaW5wdXQgKi9cclxuICBwcml2YXRlIF90b3VjaCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlucHV0cy50b3VjaCkge1xyXG4gICAgICBjb25zdCBoYW1tZXJ0aW1lID0gbmV3IEhhbW1lcih0aGlzLnRvdWNoQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICBoYW1tZXJ0aW1lLmdldCgncGFuJykuc2V0KHsgZGlyZWN0aW9uOiBIYW1tZXIuRElSRUNUSU9OX0hPUklaT05UQUwgfSk7XHJcblxyXG4gICAgICBoYW1tZXJ0aW1lLm9uKCdwYW5zdGFydCcsIChldjogYW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy5jYXJvdXNlbFdpZHRoID0gdGhpcy5uZ3VJdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICAgIHRoaXMudG91Y2hUcmFuc2Zvcm0gPSB0aGlzLnRyYW5zZm9ybVt0aGlzLmRldmljZVR5cGVdO1xyXG4gICAgICAgIHRoaXMuZGV4VmFsID0gMDtcclxuICAgICAgICB0aGlzLl9zZXRTdHlsZSh0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2l0aW9uJywgJycpO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHRoaXMudmVydGljYWwuZW5hYmxlZCkge1xyXG4gICAgICAgIGhhbW1lcnRpbWUub24oJ3BhbnVwJywgKGV2OiBhbnkpID0+IHtcclxuICAgICAgICAgIHRoaXMuX3RvdWNoSGFuZGxpbmcoJ3BhbmxlZnQnLCBldik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaGFtbWVydGltZS5vbigncGFuZG93bicsIChldjogYW55KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl90b3VjaEhhbmRsaW5nKCdwYW5yaWdodCcsIGV2KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBoYW1tZXJ0aW1lLm9uKCdwYW5sZWZ0JywgKGV2OiBhbnkpID0+IHtcclxuICAgICAgICAgIHRoaXMuX3RvdWNoSGFuZGxpbmcoJ3BhbmxlZnQnLCBldik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaGFtbWVydGltZS5vbigncGFucmlnaHQnLCAoZXY6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fdG91Y2hIYW5kbGluZygncGFucmlnaHQnLCBldik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaGFtbWVydGltZS5vbigncGFuZW5kJywgKGV2OiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoTWF0aC5hYnMoZXYudmVsb2NpdHkpID49IHRoaXMudmVsb2NpdHkpIHtcclxuICAgICAgICAgIHRoaXMudG91Y2gudmVsb2NpdHkgPSBldi52ZWxvY2l0eTtcclxuICAgICAgICAgIGxldCBkaXJlYyA9IDA7XHJcbiAgICAgICAgICBpZiAoIXRoaXMuUlRMKSB7XHJcbiAgICAgICAgICAgIGRpcmVjID0gdGhpcy50b3VjaC5zd2lwZSA9PT0gJ3BhbnJpZ2h0JyA/IDAgOiAxO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlyZWMgPSB0aGlzLnRvdWNoLnN3aXBlID09PSAncGFucmlnaHQnID8gMSA6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLl9jYXJvdXNlbFNjcm9sbE9uZShkaXJlYyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZGV4VmFsID0gMDtcclxuICAgICAgICAgIHRoaXMuX3NldFN0eWxlKFxyXG4gICAgICAgICAgICB0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICAgICd0cmFuc2l0aW9uJyxcclxuICAgICAgICAgICAgJ3RyYW5zZm9ybSAzMjRtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKSdcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0aGlzLl9zZXRTdHlsZSh0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgaGFtbWVydGltZS5vbignaGFtbWVyLmlucHV0JywgZnVuY3Rpb24oZXYpIHtcclxuICAgICAgICAvLyBhbGxvdyBuZXN0ZWQgdG91Y2ggZXZlbnRzIHRvIG5vIHByb3BhZ2F0ZSwgdGhpcyBtYXkgaGF2ZSBvdGhlciBzaWRlIGFmZmVjdHMgYnV0IHdvcmtzIGZvciBub3cuXHJcbiAgICAgICAgLy8gVE9ETzogSXQgaXMgcHJvYmFibHkgYmV0dGVyIHRvIGNoZWNrIHRoZSBzb3VyY2UgZWxlbWVudCBvZiB0aGUgZXZlbnQgYW5kIG9ubHkgYXBwbHkgdGhlIGhhbmRsZSB0byB0aGUgY29ycmVjdCBjYXJvdXNlbFxyXG4gICAgICAgIGV2LnNyY0V2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBoYW5kbGUgdG91Y2ggaW5wdXQgKi9cclxuICBwcml2YXRlIF90b3VjaEhhbmRsaW5nKGU6IHN0cmluZywgZXY6IGFueSk6IHZvaWQge1xyXG4gICAgLy8gdmVydGljYWwgdG91Y2ggZXZlbnRzIHNlZW0gdG8gY2F1c2UgdG8gcGFuc3RhcnQgZXZlbnQgd2l0aCBhbiBvZGQgZGVsdGFcclxuICAgIC8vIGFuZCBhIGNlbnRlciBvZiB7eDowLHk6MH0gc28gdGhpcyB3aWxsIGlnbm9yZSB0aGVtXHJcbiAgICBpZiAoZXYuY2VudGVyLnggPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ID0gTWF0aC5hYnModGhpcy52ZXJ0aWNhbC5lbmFibGVkID8gZXYuZGVsdGFZIDogZXYuZGVsdGFYKTtcclxuICAgIGxldCB2YWx0ID0gZXYgLSB0aGlzLmRleFZhbDtcclxuICAgIHZhbHQgPVxyXG4gICAgICB0aGlzLnR5cGUgPT09ICdyZXNwb25zaXZlJ1xyXG4gICAgICAgID8gKE1hdGguYWJzKGV2IC0gdGhpcy5kZXhWYWwpIC9cclxuICAgICAgICAgICAgKHRoaXMudmVydGljYWwuZW5hYmxlZFxyXG4gICAgICAgICAgICAgID8gdGhpcy52ZXJ0aWNhbC5oZWlnaHRcclxuICAgICAgICAgICAgICA6IHRoaXMuY2Fyb3VzZWxXaWR0aCkpICpcclxuICAgICAgICAgIDEwMFxyXG4gICAgICAgIDogdmFsdDtcclxuICAgIHRoaXMuZGV4VmFsID0gZXY7XHJcbiAgICB0aGlzLnRvdWNoLnN3aXBlID0gZTtcclxuICAgIHRoaXMuX3NldFRvdWNoVHJhbnNmcm9tKGUsIHZhbHQpO1xyXG4gICAgdGhpcy5fc2V0VHJhbnNmb3JtRnJvbVRvdWNoKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zZXRUb3VjaFRyYW5zZnJvbShlOiBzdHJpbmcsIHZhbHQ6IG51bWJlcikge1xyXG4gICAgY29uc3QgY29uZGl0aW9uID0gdGhpcy5SVEwgPyAncGFucmlnaHQnIDogJ3BhbmxlZnQnO1xyXG4gICAgdGhpcy50b3VjaFRyYW5zZm9ybSA9XHJcbiAgICAgIGUgPT09IGNvbmRpdGlvbiA/IHZhbHQgKyB0aGlzLnRvdWNoVHJhbnNmb3JtIDogdGhpcy50b3VjaFRyYW5zZm9ybSAtIHZhbHQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zZXRUcmFuc2Zvcm1Gcm9tVG91Y2goKSB7XHJcbiAgICBpZiAodGhpcy50b3VjaFRyYW5zZm9ybSA8IDApIHtcclxuICAgICAgdGhpcy50b3VjaFRyYW5zZm9ybSA9IDA7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlID09PSAncmVzcG9uc2l2ZScgPyAnJScgOiAncHgnO1xyXG4gICAgdGhpcy5fc2V0U3R5bGUoXHJcbiAgICAgIHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCxcclxuICAgICAgJ3RyYW5zZm9ybScsXHJcbiAgICAgIHRoaXMudmVydGljYWwuZW5hYmxlZFxyXG4gICAgICAgID8gYHRyYW5zbGF0ZTNkKDAsICR7dGhpcy5kaXJlY3Rpb25TeW19JHt0aGlzLnRvdWNoVHJhbnNmb3JtfSR7dHlwZX0sIDApYFxyXG4gICAgICAgIDogYHRyYW5zbGF0ZTNkKCR7dGhpcy5kaXJlY3Rpb25TeW19JHt0aGlzLnRvdWNoVHJhbnNmb3JtfSR7dHlwZX0sIDAsIDApYFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKiB0aGlzIGZuIHVzZWQgdG8gZGlzYWJsZSB0aGUgaW50ZXJ2YWwgd2hlbiBpdCBpcyBub3Qgb24gdGhlIHZpZXdwb3J0ICovXHJcbiAgcHJpdmF0ZSBfb25XaW5kb3dTY3JvbGxpbmcoKTogdm9pZCB7XHJcbiAgICBjb25zdCB0b3AgPSB0aGlzLmNhcm91c2VsLm9mZnNldFRvcDtcclxuICAgIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgIGNvbnN0IGhlaWdodHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICBjb25zdCBjYXJvdXNlbEhlaWdodCA9IHRoaXMuY2Fyb3VzZWwub2Zmc2V0SGVpZ2h0O1xyXG4gICAgY29uc3QgaXNDYXJvdXNlbE9uU2NyZWVuID1cclxuICAgICAgdG9wIDw9IHNjcm9sbFkgKyBoZWlnaHR0IC0gY2Fyb3VzZWxIZWlnaHQgLyA0ICYmXHJcbiAgICAgIHRvcCArIGNhcm91c2VsSGVpZ2h0IC8gMiA+PSBzY3JvbGxZO1xyXG5cclxuICAgIGlmIChpc0Nhcm91c2VsT25TY3JlZW4pIHtcclxuICAgICAgdGhpcy5faW50ZXJ2YWxDb250cm9sbGVyJC5uZXh0KDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5faW50ZXJ2YWxDb250cm9sbGVyJC5uZXh0KDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIHN0b3JlIGRhdGEgYmFzZWQgb24gd2lkdGggb2YgdGhlIHNjcmVlbiBmb3IgdGhlIGNhcm91c2VsICovXHJcbiAgcHJpdmF0ZSBfc3RvcmVDYXJvdXNlbERhdGEoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRldmljZVdpZHRoID0gaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKVxyXG4gICAgICA/IHdpbmRvdy5pbm5lcldpZHRoXHJcbiAgICAgIDogMTIwMDtcclxuXHJcbiAgICB0aGlzLmNhcm91c2VsV2lkdGggPSB0aGlzLmNhcm91c2VsTWFpbjEubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuXHJcbiAgICBpZiAodGhpcy50eXBlID09PSAncmVzcG9uc2l2ZScpIHtcclxuICAgICAgdGhpcy5kZXZpY2VUeXBlID1cclxuICAgICAgICB0aGlzLmRldmljZVdpZHRoID49IDEyMDBcclxuICAgICAgICAgID8gJ2xnJ1xyXG4gICAgICAgICAgOiB0aGlzLmRldmljZVdpZHRoID49IDk5MlxyXG4gICAgICAgICAgICA/ICdtZCdcclxuICAgICAgICAgICAgOiB0aGlzLmRldmljZVdpZHRoID49IDc2OFxyXG4gICAgICAgICAgICAgID8gJ3NtJ1xyXG4gICAgICAgICAgICAgIDogJ3hzJztcclxuXHJcbiAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLmlucHV0cy5ncmlkW3RoaXMuZGV2aWNlVHlwZV07XHJcbiAgICAgIHRoaXMuaXRlbVdpZHRoID0gdGhpcy5jYXJvdXNlbFdpZHRoIC8gdGhpcy5pdGVtcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXRlbXMgPSBNYXRoLnRydW5jKHRoaXMuY2Fyb3VzZWxXaWR0aCAvIHRoaXMuaW5wdXRzLmdyaWQuYWxsKTtcclxuICAgICAgdGhpcy5pdGVtV2lkdGggPSB0aGlzLmlucHV0cy5ncmlkLmFsbDtcclxuICAgICAgdGhpcy5kZXZpY2VUeXBlID0gJ2FsbCc7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zbGlkZUl0ZW1zID0gKyh0aGlzLmlucHV0cy5zbGlkZSA8IHRoaXMuaXRlbXNcclxuICAgICAgPyB0aGlzLmlucHV0cy5zbGlkZVxyXG4gICAgICA6IHRoaXMuaXRlbXMpO1xyXG4gICAgdGhpcy5sb2FkID1cclxuICAgICAgdGhpcy5pbnB1dHMubG9hZCA+PSB0aGlzLnNsaWRlSXRlbXMgPyB0aGlzLmlucHV0cy5sb2FkIDogdGhpcy5zbGlkZUl0ZW1zO1xyXG4gICAgdGhpcy5zcGVlZCA9XHJcbiAgICAgIHRoaXMuaW5wdXRzLnNwZWVkICYmIHRoaXMuaW5wdXRzLnNwZWVkID4gLTEgPyB0aGlzLmlucHV0cy5zcGVlZCA6IDQwMDtcclxuICAgIHRoaXMuX2Nhcm91c2VsUG9pbnQoKTtcclxuICB9XHJcblxyXG4gIC8qKiBVc2VkIHRvIHJlc2V0IHRoZSBjYXJvdXNlbCAqL1xyXG4gIHB1YmxpYyByZXNldCh3aXRoT3V0QW5pbWF0aW9uPzogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgd2l0aE91dEFuaW1hdGlvbiAmJiAodGhpcy53aXRoQW5pbSA9IGZhbHNlKTtcclxuICAgIHRoaXMuY2Fyb3VzZWxDc3NOb2RlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgdGhpcy5tb3ZlVG8oMCk7XHJcbiAgICB0aGlzLl9jYXJvdXNlbFBvaW50KCk7XHJcbiAgfVxyXG5cclxuICAvKiogSW5pdCBjYXJvdXNlbCBwb2ludCAqL1xyXG4gIHByaXZhdGUgX2Nhcm91c2VsUG9pbnQoKTogdm9pZCB7XHJcbiAgICAvLyBkZWJ1Z2dlcjtcclxuICAgIC8vIGlmICh0aGlzLnVzZXJEYXRhLnBvaW50LnZpc2libGUgPT09IHRydWUpIHtcclxuICAgIGNvbnN0IE5vcyA9IHRoaXMuZGF0YVNvdXJjZS5sZW5ndGggLSAodGhpcy5pdGVtcyAtIHRoaXMuc2xpZGVJdGVtcyk7XHJcbiAgICB0aGlzLnBvaW50SW5kZXggPSBNYXRoLmNlaWwoTm9zIC8gdGhpcy5zbGlkZUl0ZW1zKTtcclxuICAgIGNvbnN0IHBvaW50ZXJzID0gW107XHJcblxyXG4gICAgaWYgKHRoaXMucG9pbnRJbmRleCA+IDEgfHwgIXRoaXMuaW5wdXRzLnBvaW50LmhpZGVPblNpbmdsZVNsaWRlKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wb2ludEluZGV4OyBpKyspIHtcclxuICAgICAgICBwb2ludGVycy5wdXNoKGkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnBvaW50TnVtYmVycyA9IHBvaW50ZXJzO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5wb2ludE51bWJlcnMpO1xyXG4gICAgdGhpcy5fY2Fyb3VzZWxQb2ludEFjdGl2ZXIoKTtcclxuICAgIGlmICh0aGlzLnBvaW50SW5kZXggPD0gMSkge1xyXG4gICAgICB0aGlzLl9idG5Cb29sZWFuKDEsIDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudFNsaWRlID09PSAwICYmICF0aGlzLmxvb3ApIHtcclxuICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDEsIDApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMCwgMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIC8qKiBjaGFuZ2UgdGhlIGFjdGl2ZSBwb2ludCBpbiBjYXJvdXNlbCAqL1xyXG4gIHByaXZhdGUgX2Nhcm91c2VsUG9pbnRBY3RpdmVyKCk6IHZvaWQge1xyXG4gICAgY29uc3QgaSA9IE1hdGguY2VpbCh0aGlzLmN1cnJlbnRTbGlkZSAvIHRoaXMuc2xpZGVJdGVtcyk7XHJcbiAgICB0aGlzLmFjdGl2ZVBvaW50ID0gaTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGF0YSk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIC8qKiB0aGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gc2NvbGwgdGhlIGNhcm91c2VsIHdoZW4gcG9pbnQgaXMgY2xpY2tlZCAqL1xyXG4gIHB1YmxpYyBtb3ZlVG8oc2xpZGU6IG51bWJlciwgd2l0aE91dEFuaW1hdGlvbj86IGJvb2xlYW4pIHtcclxuICAgIC8vIHNsaWRlID0gc2xpZGUgLSAxO1xyXG4gICAgd2l0aE91dEFuaW1hdGlvbiAmJiAodGhpcy53aXRoQW5pbSA9IGZhbHNlKTtcclxuICAgIGlmICh0aGlzLmFjdGl2ZVBvaW50ICE9PSBzbGlkZSAmJiBzbGlkZSA8IHRoaXMucG9pbnRJbmRleCkge1xyXG4gICAgICBsZXQgc2xpZGVyZW1haW5zO1xyXG4gICAgICBjb25zdCBidG5zID0gdGhpcy5jdXJyZW50U2xpZGUgPCBzbGlkZSA/IDEgOiAwO1xyXG5cclxuICAgICAgc3dpdGNoIChzbGlkZSkge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMSwgMCk7XHJcbiAgICAgICAgICBzbGlkZXJlbWFpbnMgPSBzbGlkZSAqIHRoaXMuc2xpZGVJdGVtcztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgdGhpcy5wb2ludEluZGV4IC0gMTpcclxuICAgICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMCwgMSk7XHJcbiAgICAgICAgICBzbGlkZXJlbWFpbnMgPSB0aGlzLmRhdGFTb3VyY2UubGVuZ3RoIC0gdGhpcy5pdGVtcztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDApO1xyXG4gICAgICAgICAgc2xpZGVyZW1haW5zID0gc2xpZGUgKiB0aGlzLnNsaWRlSXRlbXM7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fY2Fyb3VzZWxTY3JvbGxUd28oYnRucywgc2xpZGVyZW1haW5zLCB0aGlzLnNwZWVkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBzZXQgdGhlIHN0eWxlIG9mIHRoZSBjYXJvdXNlbCBiYXNlZCB0aGUgaW5wdXRzIGRhdGEgKi9cclxuICBwcml2YXRlIF9jYXJvdXNlbFNpemUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRva2VuID0gdGhpcy5fZ2VuZXJhdGVJRCgpO1xyXG4gICAgbGV0IGRpc20gPSAnJztcclxuICAgIHRoaXMuc3R5bGVpZCA9IGAuJHtcclxuICAgICAgdGhpcy50b2tlblxyXG4gICAgfSA+IC5uZ3VjYXJvdXNlbCA+IC5uZ3UtdG91Y2gtY29udGFpbmVyID4gLm5ndWNhcm91c2VsLWl0ZW1zYDtcclxuXHJcbiAgICBpZiAodGhpcy5pbnB1dHMuY3VzdG9tID09PSAnYmFubmVyJykge1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmNhcm91c2VsLCAnYmFubmVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaW5wdXRzLmFuaW1hdGlvbiA9PT0gJ2xhenknKSB7XHJcbiAgICAgIGRpc20gKz0gYCR7dGhpcy5zdHlsZWlkfSA+IC5pdGVtIHt0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjZzIGVhc2U7fWA7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGl0ZW1TdHlsZSA9ICcnO1xyXG4gICAgaWYgKHRoaXMudmVydGljYWwuZW5hYmxlZCkge1xyXG4gICAgICBjb25zdCBpdGVtV2lkdGhfeHMgPSBgJHt0aGlzLnN0eWxlaWR9ID4gLml0ZW0ge2hlaWdodDogJHt0aGlzLnZlcnRpY2FsXHJcbiAgICAgICAgLmhlaWdodCAvICt0aGlzLmlucHV0cy5ncmlkLnhzfXB4fWA7XHJcbiAgICAgIGNvbnN0IGl0ZW1XaWR0aF9zbSA9IGAke3RoaXMuc3R5bGVpZH0gPiAuaXRlbSB7aGVpZ2h0OiAke3RoaXMudmVydGljYWxcclxuICAgICAgICAuaGVpZ2h0IC8gK3RoaXMuaW5wdXRzLmdyaWQuc219cHh9YDtcclxuICAgICAgY29uc3QgaXRlbVdpZHRoX21kID0gYCR7dGhpcy5zdHlsZWlkfSA+IC5pdGVtIHtoZWlnaHQ6ICR7dGhpcy52ZXJ0aWNhbFxyXG4gICAgICAgIC5oZWlnaHQgLyArdGhpcy5pbnB1dHMuZ3JpZC5tZH1weH1gO1xyXG4gICAgICBjb25zdCBpdGVtV2lkdGhfbGcgPSBgJHt0aGlzLnN0eWxlaWR9ID4gLml0ZW0ge2hlaWdodDogJHt0aGlzLnZlcnRpY2FsXHJcbiAgICAgICAgLmhlaWdodCAvICt0aGlzLmlucHV0cy5ncmlkLmxnfXB4fWA7XHJcblxyXG4gICAgICBpdGVtU3R5bGUgPSBgQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpeyR7aXRlbVdpZHRoX3hzfX1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7JHtpdGVtV2lkdGhfc219fVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXske2l0ZW1XaWR0aF9tZH19XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXske2l0ZW1XaWR0aF9sZ319YDtcclxuICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSAncmVzcG9uc2l2ZScpIHtcclxuICAgICAgY29uc3QgaXRlbVdpZHRoX3hzID1cclxuICAgICAgICB0aGlzLmlucHV0cy50eXBlID09PSAnbW9iaWxlJ1xyXG4gICAgICAgICAgPyBgJHt0aGlzLnN0eWxlaWR9IC5pdGVtIHtmbGV4OiAwIDAgJHs5NSAvXHJcbiAgICAgICAgICAgICAgK3RoaXMuaW5wdXRzLmdyaWQueHN9JTsgd2lkdGg6ICR7OTUgLyArdGhpcy5pbnB1dHMuZ3JpZC54c30lO31gXHJcbiAgICAgICAgICA6IGAke3RoaXMuc3R5bGVpZH0gLml0ZW0ge2ZsZXg6IDAgMCAkezEwMCAvXHJcbiAgICAgICAgICAgICAgK3RoaXMuaW5wdXRzLmdyaWQueHN9JTsgd2lkdGg6ICR7MTAwIC8gK3RoaXMuaW5wdXRzLmdyaWQueHN9JTt9YDtcclxuXHJcbiAgICAgIGNvbnN0IGl0ZW1XaWR0aF9zbSA9IGAke3RoaXMuc3R5bGVpZH0gPiAuaXRlbSB7ZmxleDogMCAwICR7MTAwIC9cclxuICAgICAgICArdGhpcy5pbnB1dHMuZ3JpZC5zbX0lOyB3aWR0aDogJHsxMDAgLyArdGhpcy5pbnB1dHMuZ3JpZC5zbX0lfWA7XHJcbiAgICAgIGNvbnN0IGl0ZW1XaWR0aF9tZCA9IGAke3RoaXMuc3R5bGVpZH0gPiAuaXRlbSB7ZmxleDogMCAwICR7MTAwIC9cclxuICAgICAgICArdGhpcy5pbnB1dHMuZ3JpZC5tZH0lOyB3aWR0aDogJHsxMDAgLyArdGhpcy5pbnB1dHMuZ3JpZC5tZH0lfWA7XHJcbiAgICAgIGNvbnN0IGl0ZW1XaWR0aF9sZyA9IGAke3RoaXMuc3R5bGVpZH0gPiAuaXRlbSB7ZmxleDogMCAwICR7MTAwIC9cclxuICAgICAgICArdGhpcy5pbnB1dHMuZ3JpZC5sZ30lOyB3aWR0aDogJHsxMDAgLyArdGhpcy5pbnB1dHMuZ3JpZC5sZ30lfWA7XHJcblxyXG4gICAgICBpdGVtU3R5bGUgPSBgQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpeyR7aXRlbVdpZHRoX3hzfX1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7JHtpdGVtV2lkdGhfc219fVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXske2l0ZW1XaWR0aF9tZH19XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXske2l0ZW1XaWR0aF9sZ319YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGl0ZW1TdHlsZSA9IGAke3RoaXMuc3R5bGVpZH0gLml0ZW0ge2ZsZXg6IDAgMCAke1xyXG4gICAgICAgIHRoaXMuaW5wdXRzLmdyaWQuYWxsXHJcbiAgICAgIH1weDsgd2lkdGg6ICR7dGhpcy5pbnB1dHMuZ3JpZC5hbGx9cHg7fWA7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5jYXJvdXNlbCwgdGhpcy50b2tlbik7XHJcbiAgICBpZiAodGhpcy52ZXJ0aWNhbC5lbmFibGVkKSB7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKFxyXG4gICAgICAgIHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAnbmd1dmVydGljYWwnXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICAgIHRoaXMuY2Fyb3VzZWxNYWluMS5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICdoZWlnaHQnLFxyXG4gICAgICAgIGAke3RoaXMudmVydGljYWwuaGVpZ2h0fXB4YFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtZXhwcmVzc2lvblxyXG4gICAgdGhpcy5SVEwgJiZcclxuICAgICAgIXRoaXMudmVydGljYWwuZW5hYmxlZCAmJlxyXG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmNhcm91c2VsLCAnbmd1cnRsJyk7XHJcbiAgICB0aGlzLl9jcmVhdGVTdHlsZUVsZW0oYCR7ZGlzbX0gJHtpdGVtU3R5bGV9YCk7XHJcbiAgICB0aGlzLl9zdG9yZUNhcm91c2VsRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIGxvZ2ljIHRvIHNjcm9sbCB0aGUgY2Fyb3VzZWwgc3RlcCAxICovXHJcbiAgcHJpdmF0ZSBfY2Fyb3VzZWxTY3JvbGxPbmUoQnRuOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGxldCBpdGVtU3BlZWQgPSB0aGlzLnNwZWVkO1xyXG4gICAgbGV0IHRyYW5zbGF0ZVh2YWwsXHJcbiAgICAgIGN1cnJlbnRTbGlkZSA9IDA7XHJcbiAgICBjb25zdCB0b3VjaE1vdmUgPSBNYXRoLmNlaWwodGhpcy5kZXhWYWwgLyB0aGlzLml0ZW1XaWR0aCk7XHJcbiAgICB0aGlzLl9zZXRTdHlsZSh0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAnJyk7XHJcblxyXG4gICAgaWYgKHRoaXMucG9pbnRJbmRleCA9PT0gMSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2UgaWYgKEJ0biA9PT0gMCAmJiAoKCF0aGlzLmxvb3AgJiYgIXRoaXMuaXNGaXJzdCkgfHwgdGhpcy5sb29wKSkge1xyXG4gICAgICBjb25zdCBzbGlkZSA9IHRoaXMuc2xpZGVJdGVtcyAqIHRoaXMucG9pbnRJbmRleDtcclxuXHJcbiAgICAgIGNvbnN0IGN1cnJlbnRTbGlkZUQgPSB0aGlzLmN1cnJlbnRTbGlkZSAtIHRoaXMuc2xpZGVJdGVtcztcclxuICAgICAgY29uc3QgTW92ZVNsaWRlID0gY3VycmVudFNsaWRlRCArIHRoaXMuc2xpZGVJdGVtcztcclxuICAgICAgdGhpcy5fYnRuQm9vbGVhbigwLCAxKTtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudFNsaWRlID09PSAwKSB7XHJcbiAgICAgICAgY3VycmVudFNsaWRlID0gdGhpcy5kYXRhU291cmNlLmxlbmd0aCAtIHRoaXMuaXRlbXM7XHJcbiAgICAgICAgaXRlbVNwZWVkID0gNDAwO1xyXG4gICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMCwgMSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zbGlkZUl0ZW1zID49IE1vdmVTbGlkZSkge1xyXG4gICAgICAgIGN1cnJlbnRTbGlkZSA9IHRyYW5zbGF0ZVh2YWwgPSAwO1xyXG4gICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMSwgMCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigwLCAwKTtcclxuICAgICAgICBpZiAodG91Y2hNb3ZlID4gdGhpcy5zbGlkZUl0ZW1zKSB7XHJcbiAgICAgICAgICBjdXJyZW50U2xpZGUgPSB0aGlzLmN1cnJlbnRTbGlkZSAtIHRvdWNoTW92ZTtcclxuICAgICAgICAgIGl0ZW1TcGVlZCA9IDIwMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY3VycmVudFNsaWRlID0gdGhpcy5jdXJyZW50U2xpZGUgLSB0aGlzLnNsaWRlSXRlbXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX2Nhcm91c2VsU2Nyb2xsVHdvKEJ0biwgY3VycmVudFNsaWRlLCBpdGVtU3BlZWQpO1xyXG4gICAgfSBlbHNlIGlmIChCdG4gPT09IDEgJiYgKCghdGhpcy5sb29wICYmICF0aGlzLmlzTGFzdCkgfHwgdGhpcy5sb29wKSkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmxlbmd0aCA8PVxyXG4gICAgICAgICAgdGhpcy5jdXJyZW50U2xpZGUgKyB0aGlzLml0ZW1zICsgdGhpcy5zbGlkZUl0ZW1zICYmXHJcbiAgICAgICAgIXRoaXMuaXNMYXN0XHJcbiAgICAgICkge1xyXG4gICAgICAgIGN1cnJlbnRTbGlkZSA9IHRoaXMuZGF0YVNvdXJjZS5sZW5ndGggLSB0aGlzLml0ZW1zO1xyXG4gICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMCwgMSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0xhc3QpIHtcclxuICAgICAgICBjdXJyZW50U2xpZGUgPSB0cmFuc2xhdGVYdmFsID0gMDtcclxuICAgICAgICBpdGVtU3BlZWQgPSA0MDA7XHJcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigxLCAwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDApO1xyXG4gICAgICAgIGlmICh0b3VjaE1vdmUgPiB0aGlzLnNsaWRlSXRlbXMpIHtcclxuICAgICAgICAgIGN1cnJlbnRTbGlkZSA9XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNsaWRlICsgdGhpcy5zbGlkZUl0ZW1zICsgKHRvdWNoTW92ZSAtIHRoaXMuc2xpZGVJdGVtcyk7XHJcbiAgICAgICAgICBpdGVtU3BlZWQgPSAyMDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IHRoaXMuY3VycmVudFNsaWRlICsgdGhpcy5zbGlkZUl0ZW1zO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9jYXJvdXNlbFNjcm9sbFR3byhCdG4sIGN1cnJlbnRTbGlkZSwgaXRlbVNwZWVkKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjdWJpYy1iZXppZXIoMC4xNSwgMS4wNCwgMC41NCwgMS4xMylcclxuICB9XHJcblxyXG4gIC8qKiBsb2dpYyB0byBzY3JvbGwgdGhlIGNhcm91c2VsIHN0ZXAgMiAqL1xyXG4gIHByaXZhdGUgX2Nhcm91c2VsU2Nyb2xsVHdvKFxyXG4gICAgQnRuOiBudW1iZXIsXHJcbiAgICBjdXJyZW50U2xpZGU6IG51bWJlcixcclxuICAgIGl0ZW1TcGVlZDogbnVtYmVyXHJcbiAgKTogdm9pZCB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdW51c2VkLWV4cHJlc3Npb25cclxuXHJcbiAgICBpZiAodGhpcy5kZXhWYWwgIT09IDApIHtcclxuICAgICAgY29uc3QgdmFsID0gTWF0aC5hYnModGhpcy50b3VjaC52ZWxvY2l0eSk7XHJcbiAgICAgIGxldCBzb210ID0gTWF0aC5mbG9vcihcclxuICAgICAgICAodGhpcy5kZXhWYWwgLyB2YWwgLyB0aGlzLmRleFZhbCkgKiAodGhpcy5kZXZpY2VXaWR0aCAtIHRoaXMuZGV4VmFsKVxyXG4gICAgICApO1xyXG4gICAgICBzb210ID0gc29tdCA+IGl0ZW1TcGVlZCA/IGl0ZW1TcGVlZCA6IHNvbXQ7XHJcbiAgICAgIGl0ZW1TcGVlZCA9IHNvbXQgPCAyMDAgPyAyMDAgOiBzb210O1xyXG4gICAgICB0aGlzLmRleFZhbCA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy53aXRoQW5pbSkge1xyXG4gICAgICB0aGlzLl9zZXRTdHlsZShcclxuICAgICAgICB0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgJ3RyYW5zaXRpb24nLFxyXG4gICAgICAgIGB0cmFuc2Zvcm0gJHtpdGVtU3BlZWR9bXMgJHt0aGlzLmlucHV0cy5lYXNpbmd9YFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmlucHV0cy5hbmltYXRpb24gJiZcclxuICAgICAgICB0aGlzLl9jYXJvdXNlbEFuaW1hdG9yKFxyXG4gICAgICAgICAgQnRuLFxyXG4gICAgICAgICAgY3VycmVudFNsaWRlICsgMSxcclxuICAgICAgICAgIGN1cnJlbnRTbGlkZSArIHRoaXMuaXRlbXMsXHJcbiAgICAgICAgICBpdGVtU3BlZWQsXHJcbiAgICAgICAgICBNYXRoLmFicyh0aGlzLmN1cnJlbnRTbGlkZSAtIGN1cnJlbnRTbGlkZSlcclxuICAgICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fc2V0U3R5bGUodGhpcy5uZ3VJdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAndHJhbnNpdGlvbicsIGBgKTtcclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGF0YVNvdXJjZSk7XHJcbiAgICB0aGlzLml0ZW1MZW5ndGggPSB0aGlzLmRhdGFTb3VyY2UubGVuZ3RoO1xyXG4gICAgdGhpcy5fdHJhbnNmb3JtU3R5bGUoY3VycmVudFNsaWRlKTtcclxuICAgIHRoaXMuY3VycmVudFNsaWRlID0gY3VycmVudFNsaWRlO1xyXG4gICAgdGhpcy5vbk1vdmUuZW1pdCh0aGlzKTtcclxuICAgIHRoaXMuX2Nhcm91c2VsUG9pbnRBY3RpdmVyKCk7XHJcbiAgICB0aGlzLl9jYXJvdXNlbExvYWRUcmlnZ2VyKCk7XHJcbiAgICB0aGlzLndpdGhBbmltID0gdHJ1ZTtcclxuICAgIC8vIGlmIChjdXJyZW50U2xpZGUgPT09IDEyKSB7XHJcbiAgICAvLyAgIHRoaXMuX3N3aXRjaERhdGFTb3VyY2UodGhpcy5kYXRhU291cmNlKTtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIC8qKiBib29sZWFuIGZ1bmN0aW9uIGZvciBtYWtpbmcgaXNGaXJzdCBhbmQgaXNMYXN0ICovXHJcbiAgcHJpdmF0ZSBfYnRuQm9vbGVhbihmaXJzdDogbnVtYmVyLCBsYXN0OiBudW1iZXIpIHtcclxuICAgIHRoaXMuaXNGaXJzdCA9ICEhZmlyc3Q7XHJcbiAgICB0aGlzLmlzTGFzdCA9ICEhbGFzdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3RyYW5zZm9ybVN0cmluZyhncmlkOiBzdHJpbmcsIHNsaWRlOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgbGV0IGNvbGxlY3QgPSAnJztcclxuICAgIGNvbGxlY3QgKz0gYCR7dGhpcy5zdHlsZWlkfSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoYDtcclxuXHJcbiAgICBpZiAodGhpcy52ZXJ0aWNhbC5lbmFibGVkKSB7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtW2dyaWRdID1cclxuICAgICAgICAodGhpcy52ZXJ0aWNhbC5oZWlnaHQgLyB0aGlzLmlucHV0cy5ncmlkW2dyaWRdKSAqIHNsaWRlO1xyXG4gICAgICBjb2xsZWN0ICs9IGAwLCAtJHt0aGlzLnRyYW5zZm9ybVtncmlkXX1weCwgMGA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybVtncmlkXSA9ICgxMDAgLyB0aGlzLmlucHV0cy5ncmlkW2dyaWRdKSAqIHNsaWRlO1xyXG4gICAgICBjb2xsZWN0ICs9IGAke3RoaXMuZGlyZWN0aW9uU3ltfSR7dGhpcy50cmFuc2Zvcm1bZ3JpZF19JSwgMCwgMGA7XHJcbiAgICB9XHJcbiAgICBjb2xsZWN0ICs9IGApOyB9YDtcclxuICAgIHJldHVybiBjb2xsZWN0O1xyXG4gIH1cclxuXHJcbiAgLyoqIHNldCB0aGUgdHJhbnNmb3JtIHN0eWxlIHRvIHNjcm9sbCB0aGUgY2Fyb3VzZWwgICovXHJcbiAgcHJpdmF0ZSBfdHJhbnNmb3JtU3R5bGUoc2xpZGU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgbGV0IHNsaWRlQ3NzID0gJyc7XHJcbiAgICBpZiAodGhpcy50eXBlID09PSAncmVzcG9uc2l2ZScpIHtcclxuICAgICAgc2xpZGVDc3MgPSBgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7JHt0aGlzLl90cmFuc2Zvcm1TdHJpbmcoXHJcbiAgICAgICAgJ3hzJyxcclxuICAgICAgICBzbGlkZVxyXG4gICAgICApfX1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7JHt0aGlzLl90cmFuc2Zvcm1TdHJpbmcoJ3NtJywgc2xpZGUpfSB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgeyR7dGhpcy5fdHJhbnNmb3JtU3RyaW5nKCdtZCcsIHNsaWRlKX0gfVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7JHt0aGlzLl90cmFuc2Zvcm1TdHJpbmcoJ2xnJywgc2xpZGUpfSB9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtLmFsbCA9IHRoaXMuaW5wdXRzLmdyaWQuYWxsICogc2xpZGU7XHJcbiAgICAgIHNsaWRlQ3NzID0gYCR7dGhpcy5zdHlsZWlkfSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvblN5bVxyXG4gICAgICB9JHt0aGlzLnRyYW5zZm9ybS5hbGx9cHgsIDAsIDApO2A7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNhcm91c2VsQ3NzTm9kZS5pbm5lckhUTUwgPSBzbGlkZUNzcztcclxuICB9XHJcblxyXG4gIC8qKiB0aGlzIHdpbGwgdHJpZ2dlciB0aGUgY2Fyb3VzZWwgdG8gbG9hZCB0aGUgaXRlbXMgKi9cclxuICBwcml2YXRlIF9jYXJvdXNlbExvYWRUcmlnZ2VyKCk6IHZvaWQge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmlucHV0cy5sb2FkID09PSAnbnVtYmVyJykge1xyXG4gICAgICB0aGlzLmRhdGFTb3VyY2UubGVuZ3RoIC0gdGhpcy5sb2FkIDw9IHRoaXMuY3VycmVudFNsaWRlICsgdGhpcy5pdGVtcyAmJlxyXG4gICAgICAgIHRoaXMuY2Fyb3VzZWxMb2FkLmVtaXQodGhpcy5jdXJyZW50U2xpZGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIGdlbmVyYXRlIENsYXNzIGZvciBlYWNoIGNhcm91c2VsIHRvIHNldCBzcGVjaWZpYyBzdHlsZSAqL1xyXG4gIHByaXZhdGUgX2dlbmVyYXRlSUQoKTogc3RyaW5nIHtcclxuICAgIGxldCB0ZXh0ID0gJyc7XHJcbiAgICBjb25zdCBwb3NzaWJsZSA9XHJcbiAgICAgICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcclxuICAgICAgdGV4dCArPSBwb3NzaWJsZS5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGUubGVuZ3RoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYG5ndWNhcm91c2VsJHt0ZXh0fWA7XHJcbiAgfVxyXG5cclxuICAvKiogaGFuZGxlIHRoZSBhdXRvIHNsaWRlICovXHJcbiAgcHJpdmF0ZSBfY2Fyb3VzZWxJbnRlcnZhbCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY2Fyb3VzZWxNYWluMS5uYXRpdmVFbGVtZW50O1xyXG4gICAgaWYgKHRoaXMuaW50ZXJ2YWwgJiYgdGhpcy5sb29wKSB7XHJcbiAgICAgIHRoaXMubGlzdGVuZXI0ID0gdGhpcy5fcmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCAnc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLm9uU2Nyb2xsaW5nKTtcclxuICAgICAgICB0aGlzLm9uU2Nyb2xsaW5nID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl9vbldpbmRvd1Njcm9sbGluZygpO1xyXG4gICAgICAgIH0sIDYwMCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgcGxheSQgPSBmcm9tRXZlbnQoY29udGFpbmVyLCAnbW91c2VsZWF2ZScpLnBpcGUobWFwVG8oMSkpO1xyXG4gICAgICBjb25zdCBwYXVzZSQgPSBmcm9tRXZlbnQoY29udGFpbmVyLCAnbW91c2VlbnRlcicpLnBpcGUobWFwVG8oMCkpO1xyXG5cclxuICAgICAgY29uc3QgdG91Y2hQbGF5JCA9IGZyb21FdmVudChjb250YWluZXIsICd0b3VjaHN0YXJ0JykucGlwZShtYXBUbygxKSk7XHJcbiAgICAgIGNvbnN0IHRvdWNoUGF1c2UkID0gZnJvbUV2ZW50KGNvbnRhaW5lciwgJ3RvdWNoZW5kJykucGlwZShtYXBUbygwKSk7XHJcblxyXG4gICAgICBjb25zdCBpbnRlcnZhbCQgPSBpbnRlcnZhbCh0aGlzLmlucHV0cy5pbnRlcnZhbC50aW1pbmcpLnBpcGUobWFwVG8oMSkpO1xyXG5cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jYXJvdXNlbEludCA9IG1lcmdlKFxyXG4gICAgICAgICAgcGxheSQsXHJcbiAgICAgICAgICB0b3VjaFBsYXkkLFxyXG4gICAgICAgICAgcGF1c2UkLFxyXG4gICAgICAgICAgdG91Y2hQYXVzZSQsXHJcbiAgICAgICAgICB0aGlzLl9pbnRlcnZhbENvbnRyb2xsZXIkXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgIHN0YXJ0V2l0aCgxKSxcclxuICAgICAgICAgICAgc3dpdGNoTWFwKHZhbCA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5pc0hvdmVyZWQgPSAhdmFsO1xyXG4gICAgICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgICAgICAgIHJldHVybiB2YWwgPyBpbnRlcnZhbCQgOiBlbXB0eSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9jYXJvdXNlbFNjcm9sbE9uZSgxKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9LCB0aGlzLmludGVydmFsLmluaXRpYWxEZWxheSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF91cGRhdGVJdGVtSW5kZXhDb250ZXh0QW5pKCkge1xyXG4gICAgY29uc3Qgdmlld0NvbnRhaW5lciA9IHRoaXMuX25vZGVPdXRsZXQudmlld0NvbnRhaW5lcjtcclxuICAgIGZvciAoXHJcbiAgICAgIGxldCByZW5kZXJJbmRleCA9IDAsIGNvdW50ID0gdmlld0NvbnRhaW5lci5sZW5ndGg7XHJcbiAgICAgIHJlbmRlckluZGV4IDwgY291bnQ7XHJcbiAgICAgIHJlbmRlckluZGV4KytcclxuICAgICkge1xyXG4gICAgICBjb25zdCB2aWV3UmVmID0gdmlld0NvbnRhaW5lci5nZXQocmVuZGVySW5kZXgpIGFzIGFueTtcclxuICAgICAgY29uc3QgY29udGV4dCA9IHZpZXdSZWYuY29udGV4dCBhcyBhbnk7XHJcbiAgICAgIGNvbnRleHQuY291bnQgPSBjb3VudDtcclxuICAgICAgY29udGV4dC5maXJzdCA9IHJlbmRlckluZGV4ID09PSAwO1xyXG4gICAgICBjb250ZXh0Lmxhc3QgPSByZW5kZXJJbmRleCA9PT0gY291bnQgLSAxO1xyXG4gICAgICBjb250ZXh0LmV2ZW4gPSByZW5kZXJJbmRleCAlIDIgPT09IDA7XHJcbiAgICAgIGNvbnRleHQub2RkID0gIWNvbnRleHQuZXZlbjtcclxuICAgICAgY29udGV4dC5pbmRleCA9IHJlbmRlckluZGV4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIGFuaW1hdGUgdGhlIGNhcm91c2VsIGl0ZW1zICovXHJcbiAgcHJpdmF0ZSBfY2Fyb3VzZWxBbmltYXRvcihcclxuICAgIGRpcmVjdGlvbjogbnVtYmVyLFxyXG4gICAgc3RhcnQ6IG51bWJlcixcclxuICAgIGVuZDogbnVtYmVyLFxyXG4gICAgc3BlZWQ6IG51bWJlcixcclxuICAgIGxlbmd0aDogbnVtYmVyLFxyXG4gICAgdmlld0NvbnRhaW5lciA9IHRoaXMuX25vZGVPdXRsZXQudmlld0NvbnRhaW5lclxyXG4gICk6IHZvaWQge1xyXG4gICAgbGV0IHZhbCA9IGxlbmd0aCA8IDUgPyBsZW5ndGggOiA1O1xyXG4gICAgdmFsID0gdmFsID09PSAxID8gMyA6IHZhbDtcclxuICAgIGNvbnN0IGNvbGxlY3RJbmRleCA9IFtdO1xyXG5cclxuICAgIGlmIChkaXJlY3Rpb24gPT09IDEpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0IC0gMTsgaSA8IGVuZDsgaSsrKSB7XHJcbiAgICAgICAgY29sbGVjdEluZGV4LnB1c2goaSk7XHJcbiAgICAgICAgdmFsID0gdmFsICogMjtcclxuICAgICAgICBjb25zdCB2aWV3UmVmID0gdmlld0NvbnRhaW5lci5nZXQoaSkgYXMgYW55O1xyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB2aWV3UmVmLmNvbnRleHQgYXMgYW55O1xyXG4gICAgICAgIGNvbnRleHQuYW5pbWF0ZSA9IHsgdmFsdWU6IHRydWUsIHBhcmFtczogeyBkaXN0YW5jZTogdmFsIH0gfTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yIChsZXQgaSA9IGVuZCAtIDE7IGkgPj0gc3RhcnQgLSAxOyBpLS0pIHtcclxuICAgICAgICBjb2xsZWN0SW5kZXgucHVzaChpKTtcclxuICAgICAgICB2YWwgPSB2YWwgKiAyO1xyXG4gICAgICAgIGNvbnN0IHZpZXdSZWYgPSB2aWV3Q29udGFpbmVyLmdldChpKSBhcyBhbnk7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHZpZXdSZWYuY29udGV4dCBhcyBhbnk7XHJcbiAgICAgICAgY29udGV4dC5hbmltYXRlID0geyB2YWx1ZTogdHJ1ZSwgcGFyYW1zOiB7IGRpc3RhbmNlOiAtdmFsIH0gfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5fcmVtb3ZlQW5pbWF0aW9ucyhjb2xsZWN0SW5kZXgpO1xyXG4gICAgfSwgc3BlZWQgKiAwLjcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfcmVtb3ZlQW5pbWF0aW9ucyhpbmRleHM6IG51bWJlcltdKSB7XHJcbiAgICBjb25zdCB2aWV3Q29udGFpbmVyID0gdGhpcy5fbm9kZU91dGxldC52aWV3Q29udGFpbmVyO1xyXG4gICAgaW5kZXhzLmZvckVhY2goaSA9PiB7XHJcbiAgICAgIGNvbnN0IHZpZXdSZWYgPSB2aWV3Q29udGFpbmVyLmdldChpKSBhcyBhbnk7XHJcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB2aWV3UmVmLmNvbnRleHQgYXMgYW55O1xyXG4gICAgICBjb250ZXh0LmFuaW1hdGUgPSB7IHZhbHVlOiBmYWxzZSwgcGFyYW1zOiB7IGRpc3RhbmNlOiAwIH0gfTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICAvKiogU2hvcnQgZm9ybSBmb3Igc2V0RWxlbWVudFN0eWxlICovXHJcbiAgcHJpdmF0ZSBfc2V0U3R5bGUoZWw6IGFueSwgcHJvcDogYW55LCB2YWw6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoZWwsIHByb3AsIHZhbCk7XHJcbiAgfVxyXG5cclxuICAvKiogRm9yIGdlbmVyYXRpbmcgc3R5bGUgdGFnICovXHJcbiAgcHJpdmF0ZSBfY3JlYXRlU3R5bGVFbGVtKGRhdGFzPzogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzdHlsZUl0ZW0gPSB0aGlzLl9yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICAgaWYgKGRhdGFzKSB7XHJcbiAgICAgIGNvbnN0IHN0eWxlVGV4dCA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZVRleHQoZGF0YXMpO1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5hcHBlbmRDaGlsZChzdHlsZUl0ZW0sIHN0eWxlVGV4dCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmNhcm91c2VsLCBzdHlsZUl0ZW0pO1xyXG4gICAgcmV0dXJuIHN0eWxlSXRlbTtcclxuICB9XHJcbn1cclxuIl19