/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Renderer2, Output, EventEmitter, Input, NgZone, Inject, TemplateRef, ViewContainerRef, Optional, } from '@angular/core';
import { Subject, Observable, merge, ReplaySubject, combineLatest, fromEvent, } from 'rxjs';
import { map, mergeMap, takeUntil, take, takeLast, pairwise, share, filter, count, startWith, } from 'rxjs/operators';
import { DraggableHelper } from './draggable-helper.provider';
import { DOCUMENT } from '@angular/common';
import autoScroll from '@mattlewis92/dom-autoscroller';
import { DraggableScrollContainerDirective } from './draggable-scroll-container.directive';
import { addClass, removeClass } from './util';
/**
 * @record
 */
import * as ɵngcc0 from '@angular/core';
export function Coordinates() { }
if (false) {
    /** @type {?} */
    Coordinates.prototype.x;
    /** @type {?} */
    Coordinates.prototype.y;
}
/**
 * @record
 */
export function DragAxis() { }
if (false) {
    /** @type {?} */
    DragAxis.prototype.x;
    /** @type {?} */
    DragAxis.prototype.y;
}
/**
 * @record
 */
export function SnapGrid() { }
if (false) {
    /** @type {?|undefined} */
    SnapGrid.prototype.x;
    /** @type {?|undefined} */
    SnapGrid.prototype.y;
}
/**
 * @record
 */
export function DragPointerDownEvent() { }
/**
 * @record
 */
export function DragStartEvent() { }
if (false) {
    /** @type {?} */
    DragStartEvent.prototype.cancelDrag$;
}
/**
 * @record
 */
export function DragMoveEvent() { }
/**
 * @record
 */
export function DragEndEvent() { }
if (false) {
    /** @type {?} */
    DragEndEvent.prototype.dragCancelled;
}
/**
 * @record
 */
export function ValidateDragParams() { }
if (false) {
    /** @type {?} */
    ValidateDragParams.prototype.transform;
}
/**
 * @record
 */
export function PointerEvent() { }
if (false) {
    /** @type {?} */
    PointerEvent.prototype.clientX;
    /** @type {?} */
    PointerEvent.prototype.clientY;
    /** @type {?} */
    PointerEvent.prototype.event;
}
/**
 * @record
 */
export function TimeLongPress() { }
if (false) {
    /** @type {?} */
    TimeLongPress.prototype.timerBegin;
    /** @type {?} */
    TimeLongPress.prototype.timerEnd;
}
/**
 * @record
 */
export function GhostElementCreatedEvent() { }
if (false) {
    /** @type {?} */
    GhostElementCreatedEvent.prototype.clientX;
    /** @type {?} */
    GhostElementCreatedEvent.prototype.clientY;
    /** @type {?} */
    GhostElementCreatedEvent.prototype.element;
}
export class DraggableDirective {
    /**
     * @hidden
     * @param {?} element
     * @param {?} renderer
     * @param {?} draggableHelper
     * @param {?} zone
     * @param {?} vcr
     * @param {?} scrollContainer
     * @param {?} document
     */
    constructor(element, renderer, draggableHelper, zone, vcr, scrollContainer, document) {
        this.element = element;
        this.renderer = renderer;
        this.draggableHelper = draggableHelper;
        this.zone = zone;
        this.vcr = vcr;
        this.scrollContainer = scrollContainer;
        this.document = document;
        /**
         * The axis along which the element is draggable
         */
        this.dragAxis = { x: true, y: true };
        /**
         * Snap all drags to an x / y grid
         */
        this.dragSnapGrid = {};
        /**
         * Show a ghost element that shows the drag when dragging
         */
        this.ghostDragEnabled = true;
        /**
         * Show the original element when ghostDragEnabled is true
         */
        this.showOriginalElementWhileDragging = false;
        /**
         * The cursor to use when hovering over a draggable element
         */
        this.dragCursor = '';
        /*
           * Options used to control the behaviour of auto scrolling: https://www.npmjs.com/package/dom-autoscroller
           */
        this.autoScroll = {
            margin: 20,
        };
        /**
         * Called when the element can be dragged along one axis and has the mouse or pointer device pressed on it
         */
        this.dragPointerDown = new EventEmitter();
        /**
         * Called when the element has started to be dragged.
         * Only called after at least one mouse or touch move event.
         * If you call $event.cancelDrag$.emit() it will cancel the current drag
         */
        this.dragStart = new EventEmitter();
        /**
         * Called after the ghost element has been created
         */
        this.ghostElementCreated = new EventEmitter();
        /**
         * Called when the element is being dragged
         */
        this.dragging = new EventEmitter();
        /**
         * Called after the element is dragged
         */
        this.dragEnd = new EventEmitter();
        /**
         * @hidden
         */
        this.pointerDown$ = new Subject();
        /**
         * @hidden
         */
        this.pointerMove$ = new Subject();
        /**
         * @hidden
         */
        this.pointerUp$ = new Subject();
        this.eventListenerSubscriptions = {};
        this.destroy$ = new Subject();
        this.timeLongPress = { timerBegin: 0, timerEnd: 0 };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.checkEventListeners();
        /** @type {?} */
        const pointerDragged$ = this.pointerDown$.pipe(filter((/**
         * @return {?}
         */
        () => this.canDrag())), mergeMap((/**
         * @param {?} pointerDownEvent
         * @return {?}
         */
        (pointerDownEvent) => {
            // fix for https://github.com/mattlewis92/angular-draggable-droppable/issues/61
            // stop mouse events propagating up the chain
            if (pointerDownEvent.event.stopPropagation && !this.scrollContainer) {
                pointerDownEvent.event.stopPropagation();
            }
            // hack to prevent text getting selected in safari while dragging
            /** @type {?} */
            const globalDragStyle = this.renderer.createElement('style');
            this.renderer.setAttribute(globalDragStyle, 'type', 'text/css');
            this.renderer.appendChild(globalDragStyle, this.renderer.createText(`
          body * {
           -moz-user-select: none;
           -ms-user-select: none;
           -webkit-user-select: none;
           user-select: none;
          }
        `));
            requestAnimationFrame((/**
             * @return {?}
             */
            () => {
                this.document.head.appendChild(globalDragStyle);
            }));
            /** @type {?} */
            const startScrollPosition = this.getScrollPosition();
            /** @type {?} */
            const scrollContainerScroll$ = new Observable((/**
             * @param {?} observer
             * @return {?}
             */
            (observer) => {
                /** @type {?} */
                const scrollContainer = this.scrollContainer
                    ? this.scrollContainer.elementRef.nativeElement
                    : 'window';
                return this.renderer.listen(scrollContainer, 'scroll', (/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => observer.next(e)));
            })).pipe(startWith(startScrollPosition), map((/**
             * @return {?}
             */
            () => this.getScrollPosition())));
            /** @type {?} */
            const currentDrag$ = new Subject();
            /** @type {?} */
            const cancelDrag$ = new ReplaySubject();
            this.zone.run((/**
             * @return {?}
             */
            () => {
                this.dragPointerDown.next({ x: 0, y: 0 });
            }));
            /** @type {?} */
            const dragComplete$ = merge(this.pointerUp$, this.pointerDown$, cancelDrag$, this.destroy$).pipe(share());
            /** @type {?} */
            const pointerMove = combineLatest([
                this.pointerMove$,
                scrollContainerScroll$,
            ]).pipe(map((/**
             * @param {?} __0
             * @return {?}
             */
            ([pointerMoveEvent, scroll]) => {
                return {
                    currentDrag$,
                    transformX: pointerMoveEvent.clientX - pointerDownEvent.clientX,
                    transformY: pointerMoveEvent.clientY - pointerDownEvent.clientY,
                    clientX: pointerMoveEvent.clientX,
                    clientY: pointerMoveEvent.clientY,
                    scrollLeft: scroll.left,
                    scrollTop: scroll.top,
                };
            })), map((/**
             * @param {?} moveData
             * @return {?}
             */
            (moveData) => {
                if (this.dragSnapGrid.x) {
                    moveData.transformX =
                        Math.round(moveData.transformX / this.dragSnapGrid.x) *
                            this.dragSnapGrid.x;
                }
                if (this.dragSnapGrid.y) {
                    moveData.transformY =
                        Math.round(moveData.transformY / this.dragSnapGrid.y) *
                            this.dragSnapGrid.y;
                }
                return moveData;
            })), map((/**
             * @param {?} moveData
             * @return {?}
             */
            (moveData) => {
                if (!this.dragAxis.x) {
                    moveData.transformX = 0;
                }
                if (!this.dragAxis.y) {
                    moveData.transformY = 0;
                }
                return moveData;
            })), map((/**
             * @param {?} moveData
             * @return {?}
             */
            (moveData) => {
                /** @type {?} */
                const scrollX = moveData.scrollLeft - startScrollPosition.left;
                /** @type {?} */
                const scrollY = moveData.scrollTop - startScrollPosition.top;
                return Object.assign({}, moveData, { x: moveData.transformX + scrollX, y: moveData.transformY + scrollY });
            })), filter((/**
             * @param {?} __0
             * @return {?}
             */
            ({ x, y, transformX, transformY }) => !this.validateDrag ||
                this.validateDrag({
                    x,
                    y,
                    transform: { x: transformX, y: transformY },
                }))), takeUntil(dragComplete$), share());
            /** @type {?} */
            const dragStarted$ = pointerMove.pipe(take(1), share());
            /** @type {?} */
            const dragEnded$ = pointerMove.pipe(takeLast(1), share());
            dragStarted$.subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            ({ clientX, clientY, x, y }) => {
                this.zone.run((/**
                 * @return {?}
                 */
                () => {
                    this.dragStart.next({ cancelDrag$ });
                }));
                this.scroller = autoScroll([
                    this.scrollContainer
                        ? this.scrollContainer.elementRef.nativeElement
                        : this.document.defaultView,
                ], Object.assign({}, this.autoScroll, { /**
                     * @return {?}
                     */
                    autoScroll() {
                        return true;
                    } }));
                addClass(this.renderer, this.element, this.dragActiveClass);
                if (this.ghostDragEnabled) {
                    /** @type {?} */
                    const rect = this.element.nativeElement.getBoundingClientRect();
                    /** @type {?} */
                    const clone = (/** @type {?} */ (this.element.nativeElement.cloneNode(true)));
                    if (!this.showOriginalElementWhileDragging) {
                        this.renderer.setStyle(this.element.nativeElement, 'visibility', 'hidden');
                    }
                    if (this.ghostElementAppendTo) {
                        this.ghostElementAppendTo.appendChild(clone);
                    }
                    else {
                        (/** @type {?} */ (this.element.nativeElement.parentNode)).insertBefore(clone, this.element.nativeElement.nextSibling);
                    }
                    this.ghostElement = clone;
                    this.document.body.style.cursor = this.dragCursor;
                    this.setElementStyles(clone, {
                        position: 'fixed',
                        top: `${rect.top}px`,
                        left: `${rect.left}px`,
                        width: `${rect.width}px`,
                        height: `${rect.height}px`,
                        cursor: this.dragCursor,
                        margin: '0',
                        willChange: 'transform',
                        pointerEvents: 'none',
                    });
                    if (this.ghostElementTemplate) {
                        /** @type {?} */
                        const viewRef = this.vcr.createEmbeddedView(this.ghostElementTemplate);
                        clone.innerHTML = '';
                        viewRef.rootNodes
                            .filter((/**
                         * @param {?} node
                         * @return {?}
                         */
                        (node) => node instanceof Node))
                            .forEach((/**
                         * @param {?} node
                         * @return {?}
                         */
                        (node) => {
                            clone.appendChild(node);
                        }));
                        dragEnded$.subscribe((/**
                         * @return {?}
                         */
                        () => {
                            this.vcr.remove(this.vcr.indexOf(viewRef));
                        }));
                    }
                    this.zone.run((/**
                     * @return {?}
                     */
                    () => {
                        this.ghostElementCreated.emit({
                            clientX: clientX - x,
                            clientY: clientY - y,
                            element: clone,
                        });
                    }));
                    dragEnded$.subscribe((/**
                     * @return {?}
                     */
                    () => {
                        (/** @type {?} */ (clone.parentElement)).removeChild(clone);
                        this.ghostElement = null;
                        this.renderer.setStyle(this.element.nativeElement, 'visibility', '');
                    }));
                }
                this.draggableHelper.currentDrag.next(currentDrag$);
            }));
            dragEnded$
                .pipe(mergeMap((/**
             * @param {?} dragEndData
             * @return {?}
             */
            (dragEndData) => {
                /** @type {?} */
                const dragEndData$ = cancelDrag$.pipe(count(), take(1), map((/**
                 * @param {?} calledCount
                 * @return {?}
                 */
                (calledCount) => (Object.assign({}, dragEndData, { dragCancelled: calledCount > 0 })))));
                cancelDrag$.complete();
                return dragEndData$;
            })))
                .subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            ({ x, y, dragCancelled }) => {
                this.scroller.destroy();
                this.zone.run((/**
                 * @return {?}
                 */
                () => {
                    this.dragEnd.next({ x, y, dragCancelled });
                }));
                removeClass(this.renderer, this.element, this.dragActiveClass);
                currentDrag$.complete();
            }));
            merge(dragComplete$, dragEnded$)
                .pipe(take(1))
                .subscribe((/**
             * @return {?}
             */
            () => {
                requestAnimationFrame((/**
                 * @return {?}
                 */
                () => {
                    this.document.head.removeChild(globalDragStyle);
                }));
            }));
            return pointerMove;
        })), share());
        merge(pointerDragged$.pipe(take(1), map((/**
         * @param {?} value
         * @return {?}
         */
        (value) => [, value]))), pointerDragged$.pipe(pairwise()))
            .pipe(filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([previous, next]) => {
            if (!previous) {
                return true;
            }
            return previous.x !== next.x || previous.y !== next.y;
        })), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([previous, next]) => next)))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ x, y, currentDrag$, clientX, clientY, transformX, transformY }) => {
            this.zone.run((/**
             * @return {?}
             */
            () => {
                this.dragging.next({ x, y });
            }));
            requestAnimationFrame((/**
             * @return {?}
             */
            () => {
                if (this.ghostElement) {
                    /** @type {?} */
                    const transform = `translate3d(${transformX}px, ${transformY}px, 0px)`;
                    this.setElementStyles(this.ghostElement, {
                        transform,
                        '-webkit-transform': transform,
                        '-ms-transform': transform,
                        '-moz-transform': transform,
                        '-o-transform': transform,
                    });
                }
            }));
            currentDrag$.next({
                clientX,
                clientY,
                dropData: this.dropData,
            });
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.dragAxis) {
            this.checkEventListeners();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribeEventListeners();
        this.pointerDown$.complete();
        this.pointerMove$.complete();
        this.pointerUp$.complete();
        this.destroy$.next();
    }
    /**
     * @private
     * @return {?}
     */
    checkEventListeners() {
        /** @type {?} */
        const canDrag = this.canDrag();
        /** @type {?} */
        const hasEventListeners = Object.keys(this.eventListenerSubscriptions).length > 0;
        if (canDrag && !hasEventListeners) {
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this.eventListenerSubscriptions.mousedown = this.renderer.listen(this.element.nativeElement, 'mousedown', (/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    this.onMouseDown(event);
                }));
                this.eventListenerSubscriptions.mouseup = this.renderer.listen('document', 'mouseup', (/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    this.onMouseUp(event);
                }));
                this.eventListenerSubscriptions.touchstart = this.renderer.listen(this.element.nativeElement, 'touchstart', (/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    this.onTouchStart(event);
                }));
                this.eventListenerSubscriptions.touchend = this.renderer.listen('document', 'touchend', (/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    this.onTouchEnd(event);
                }));
                this.eventListenerSubscriptions.touchcancel = this.renderer.listen('document', 'touchcancel', (/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    this.onTouchEnd(event);
                }));
                this.eventListenerSubscriptions.mouseenter = this.renderer.listen(this.element.nativeElement, 'mouseenter', (/**
                 * @return {?}
                 */
                () => {
                    this.onMouseEnter();
                }));
                this.eventListenerSubscriptions.mouseleave = this.renderer.listen(this.element.nativeElement, 'mouseleave', (/**
                 * @return {?}
                 */
                () => {
                    this.onMouseLeave();
                }));
            }));
        }
        else if (!canDrag && hasEventListeners) {
            this.unsubscribeEventListeners();
        }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    onMouseDown(event) {
        if (event.button === 0) {
            if (!this.eventListenerSubscriptions.mousemove) {
                this.eventListenerSubscriptions.mousemove = this.renderer.listen('document', 'mousemove', (/**
                 * @param {?} mouseMoveEvent
                 * @return {?}
                 */
                (mouseMoveEvent) => {
                    this.pointerMove$.next({
                        event: mouseMoveEvent,
                        clientX: mouseMoveEvent.clientX,
                        clientY: mouseMoveEvent.clientY,
                    });
                }));
            }
            this.pointerDown$.next({
                event,
                clientX: event.clientX,
                clientY: event.clientY,
            });
        }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    onMouseUp(event) {
        if (event.button === 0) {
            if (this.eventListenerSubscriptions.mousemove) {
                this.eventListenerSubscriptions.mousemove();
                delete this.eventListenerSubscriptions.mousemove;
            }
            this.pointerUp$.next({
                event,
                clientX: event.clientX,
                clientY: event.clientY,
            });
        }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    onTouchStart(event) {
        /** @type {?} */
        let startScrollPosition;
        /** @type {?} */
        let isDragActivated;
        /** @type {?} */
        let hasContainerScrollbar;
        if ((this.scrollContainer && this.scrollContainer.activeLongPressDrag) ||
            this.touchStartLongPress) {
            this.timeLongPress.timerBegin = Date.now();
            isDragActivated = false;
            hasContainerScrollbar = this.hasScrollbar();
            startScrollPosition = this.getScrollPosition();
        }
        if (!this.eventListenerSubscriptions.touchmove) {
            /** @type {?} */
            const contextMenuListener = fromEvent(this.document, 'contextmenu').subscribe((/**
             * @param {?} e
             * @return {?}
             */
            (e) => {
                e.preventDefault();
            }));
            /** @type {?} */
            const touchMoveListener = fromEvent(this.document, 'touchmove', {
                passive: false,
            }).subscribe((/**
             * @param {?} touchMoveEvent
             * @return {?}
             */
            (touchMoveEvent) => {
                if (((this.scrollContainer && this.scrollContainer.activeLongPressDrag) ||
                    this.touchStartLongPress) &&
                    !isDragActivated &&
                    hasContainerScrollbar) {
                    isDragActivated = this.shouldBeginDrag(event, touchMoveEvent, startScrollPosition);
                }
                if (((!this.scrollContainer ||
                    !this.scrollContainer.activeLongPressDrag) &&
                    !this.touchStartLongPress) ||
                    !hasContainerScrollbar ||
                    isDragActivated) {
                    touchMoveEvent.preventDefault();
                    this.pointerMove$.next({
                        event: touchMoveEvent,
                        clientX: touchMoveEvent.targetTouches[0].clientX,
                        clientY: touchMoveEvent.targetTouches[0].clientY,
                    });
                }
            }));
            this.eventListenerSubscriptions.touchmove = (/**
             * @return {?}
             */
            () => {
                contextMenuListener.unsubscribe();
                touchMoveListener.unsubscribe();
            });
        }
        this.pointerDown$.next({
            event,
            clientX: event.touches[0].clientX,
            clientY: event.touches[0].clientY,
        });
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    onTouchEnd(event) {
        if (this.eventListenerSubscriptions.touchmove) {
            this.eventListenerSubscriptions.touchmove();
            delete this.eventListenerSubscriptions.touchmove;
            if ((this.scrollContainer && this.scrollContainer.activeLongPressDrag) ||
                this.touchStartLongPress) {
                this.enableScroll();
            }
        }
        this.pointerUp$.next({
            event,
            clientX: event.changedTouches[0].clientX,
            clientY: event.changedTouches[0].clientY,
        });
    }
    /**
     * @private
     * @return {?}
     */
    onMouseEnter() {
        this.setCursor(this.dragCursor);
    }
    /**
     * @private
     * @return {?}
     */
    onMouseLeave() {
        this.setCursor('');
    }
    /**
     * @private
     * @return {?}
     */
    canDrag() {
        return this.dragAxis.x || this.dragAxis.y;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    setCursor(value) {
        if (!this.eventListenerSubscriptions.mousemove) {
            this.renderer.setStyle(this.element.nativeElement, 'cursor', value);
        }
    }
    /**
     * @private
     * @return {?}
     */
    unsubscribeEventListeners() {
        Object.keys(this.eventListenerSubscriptions).forEach((/**
         * @param {?} type
         * @return {?}
         */
        (type) => {
            ((/** @type {?} */ (this))).eventListenerSubscriptions[type]();
            delete ((/** @type {?} */ (this))).eventListenerSubscriptions[type];
        }));
    }
    /**
     * @private
     * @param {?} element
     * @param {?} styles
     * @return {?}
     */
    setElementStyles(element, styles) {
        Object.keys(styles).forEach((/**
         * @param {?} key
         * @return {?}
         */
        (key) => {
            this.renderer.setStyle(element, key, styles[key]);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    getScrollElement() {
        if (this.scrollContainer) {
            return this.scrollContainer.elementRef.nativeElement;
        }
        else {
            return this.document.body;
        }
    }
    /**
     * @private
     * @return {?}
     */
    getScrollPosition() {
        if (this.scrollContainer) {
            return {
                top: this.scrollContainer.elementRef.nativeElement.scrollTop,
                left: this.scrollContainer.elementRef.nativeElement.scrollLeft,
            };
        }
        else {
            return {
                top: window.pageYOffset || this.document.documentElement.scrollTop,
                left: window.pageXOffset || this.document.documentElement.scrollLeft,
            };
        }
    }
    /**
     * @private
     * @param {?} event
     * @param {?} touchMoveEvent
     * @param {?} startScrollPosition
     * @return {?}
     */
    shouldBeginDrag(event, touchMoveEvent, startScrollPosition) {
        /** @type {?} */
        const moveScrollPosition = this.getScrollPosition();
        /** @type {?} */
        const deltaScroll = {
            top: Math.abs(moveScrollPosition.top - startScrollPosition.top),
            left: Math.abs(moveScrollPosition.left - startScrollPosition.left),
        };
        /** @type {?} */
        const deltaX = Math.abs(touchMoveEvent.targetTouches[0].clientX - event.touches[0].clientX) - deltaScroll.left;
        /** @type {?} */
        const deltaY = Math.abs(touchMoveEvent.targetTouches[0].clientY - event.touches[0].clientY) - deltaScroll.top;
        /** @type {?} */
        const deltaTotal = deltaX + deltaY;
        /** @type {?} */
        const longPressConfig = this.touchStartLongPress
            ? this.touchStartLongPress
            : /* istanbul ignore next */
                {
                    delta: this.scrollContainer.longPressConfig.delta,
                    delay: this.scrollContainer.longPressConfig.duration,
                };
        if (deltaTotal > longPressConfig.delta ||
            deltaScroll.top > 0 ||
            deltaScroll.left > 0) {
            this.timeLongPress.timerBegin = Date.now();
        }
        this.timeLongPress.timerEnd = Date.now();
        /** @type {?} */
        const duration = this.timeLongPress.timerEnd - this.timeLongPress.timerBegin;
        if (duration >= longPressConfig.delay) {
            this.disableScroll();
            return true;
        }
        return false;
    }
    /**
     * @private
     * @return {?}
     */
    enableScroll() {
        if (this.scrollContainer) {
            this.renderer.setStyle(this.scrollContainer.elementRef.nativeElement, 'overflow', '');
        }
        this.renderer.setStyle(this.document.body, 'overflow', '');
    }
    /**
     * @private
     * @return {?}
     */
    disableScroll() {
        /* istanbul ignore next */
        if (this.scrollContainer) {
            this.renderer.setStyle(this.scrollContainer.elementRef.nativeElement, 'overflow', 'hidden');
        }
        this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
    }
    /**
     * @private
     * @return {?}
     */
    hasScrollbar() {
        /** @type {?} */
        const scrollContainer = this.getScrollElement();
        /** @type {?} */
        const containerHasHorizontalScroll = scrollContainer.scrollWidth > scrollContainer.clientWidth;
        /** @type {?} */
        const containerHasVerticalScroll = scrollContainer.scrollHeight > scrollContainer.clientHeight;
        return containerHasHorizontalScroll || containerHasVerticalScroll;
    }
}
DraggableDirective.ɵfac = function DraggableDirective_Factory(t) { return new (t || DraggableDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(DraggableHelper), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(DraggableScrollContainerDirective, 8), ɵngcc0.ɵɵdirectiveInject(DOCUMENT)); };
DraggableDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DraggableDirective, selectors: [["", "mwlDraggable", ""]], inputs: { dragAxis: "dragAxis", dragSnapGrid: "dragSnapGrid", ghostDragEnabled: "ghostDragEnabled", showOriginalElementWhileDragging: "showOriginalElementWhileDragging", dragCursor: "dragCursor", autoScroll: "autoScroll", dropData: "dropData", validateDrag: "validateDrag", dragActiveClass: "dragActiveClass", ghostElementAppendTo: "ghostElementAppendTo", ghostElementTemplate: "ghostElementTemplate", touchStartLongPress: "touchStartLongPress" }, outputs: { dragPointerDown: "dragPointerDown", dragStart: "dragStart", ghostElementCreated: "ghostElementCreated", dragging: "dragging", dragEnd: "dragEnd" }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
/** @nocollapse */
DraggableDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: DraggableHelper },
    { type: NgZone },
    { type: ViewContainerRef },
    { type: DraggableScrollContainerDirective, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
DraggableDirective.propDecorators = {
    dropData: [{ type: Input }],
    dragAxis: [{ type: Input }],
    dragSnapGrid: [{ type: Input }],
    ghostDragEnabled: [{ type: Input }],
    showOriginalElementWhileDragging: [{ type: Input }],
    validateDrag: [{ type: Input }],
    dragCursor: [{ type: Input }],
    dragActiveClass: [{ type: Input }],
    ghostElementAppendTo: [{ type: Input }],
    ghostElementTemplate: [{ type: Input }],
    touchStartLongPress: [{ type: Input }],
    autoScroll: [{ type: Input }],
    dragPointerDown: [{ type: Output }],
    dragStart: [{ type: Output }],
    ghostElementCreated: [{ type: Output }],
    dragging: [{ type: Output }],
    dragEnd: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DraggableDirective, [{
        type: Directive,
        args: [{
                selector: '[mwlDraggable]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: DraggableHelper }, { type: ɵngcc0.NgZone }, { type: ɵngcc0.ViewContainerRef }, { type: DraggableScrollContainerDirective, decorators: [{
                type: Optional
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { dragAxis: [{
            type: Input
        }], dragSnapGrid: [{
            type: Input
        }], ghostDragEnabled: [{
            type: Input
        }], showOriginalElementWhileDragging: [{
            type: Input
        }], dragCursor: [{
            type: Input
        }], autoScroll: [{
            type: Input
        }], dragPointerDown: [{
            type: Output
        }], dragStart: [{
            type: Output
        }], ghostElementCreated: [{
            type: Output
        }], dragging: [{
            type: Output
        }], dragEnd: [{
            type: Output
        }], dropData: [{
            type: Input
        }], validateDrag: [{
            type: Input
        }], dragActiveClass: [{
            type: Input
        }], ghostElementAppendTo: [{
            type: Input
        }], ghostElementTemplate: [{
            type: Input
        }], touchStartLongPress: [{
            type: Input
        }] }); })();
if (false) {
    /**
     * an object of data you can pass to the drop event
     * @type {?}
     */
    DraggableDirective.prototype.dropData;
    /**
     * The axis along which the element is draggable
     * @type {?}
     */
    DraggableDirective.prototype.dragAxis;
    /**
     * Snap all drags to an x / y grid
     * @type {?}
     */
    DraggableDirective.prototype.dragSnapGrid;
    /**
     * Show a ghost element that shows the drag when dragging
     * @type {?}
     */
    DraggableDirective.prototype.ghostDragEnabled;
    /**
     * Show the original element when ghostDragEnabled is true
     * @type {?}
     */
    DraggableDirective.prototype.showOriginalElementWhileDragging;
    /**
     * Allow custom behaviour to control when the element is dragged
     * @type {?}
     */
    DraggableDirective.prototype.validateDrag;
    /**
     * The cursor to use when hovering over a draggable element
     * @type {?}
     */
    DraggableDirective.prototype.dragCursor;
    /**
     * The css class to apply when the element is being dragged
     * @type {?}
     */
    DraggableDirective.prototype.dragActiveClass;
    /**
     * The element the ghost element will be appended to. Default is next to the dragged element
     * @type {?}
     */
    DraggableDirective.prototype.ghostElementAppendTo;
    /**
     * An ng-template to be inserted into the parent element of the ghost element. It will overwrite any child nodes.
     * @type {?}
     */
    DraggableDirective.prototype.ghostElementTemplate;
    /**
     * Amount of milliseconds to wait on touch devices before starting to drag the element (so that you can scroll the page by touching a draggable element)
     * @type {?}
     */
    DraggableDirective.prototype.touchStartLongPress;
    /** @type {?} */
    DraggableDirective.prototype.autoScroll;
    /**
     * Called when the element can be dragged along one axis and has the mouse or pointer device pressed on it
     * @type {?}
     */
    DraggableDirective.prototype.dragPointerDown;
    /**
     * Called when the element has started to be dragged.
     * Only called after at least one mouse or touch move event.
     * If you call $event.cancelDrag$.emit() it will cancel the current drag
     * @type {?}
     */
    DraggableDirective.prototype.dragStart;
    /**
     * Called after the ghost element has been created
     * @type {?}
     */
    DraggableDirective.prototype.ghostElementCreated;
    /**
     * Called when the element is being dragged
     * @type {?}
     */
    DraggableDirective.prototype.dragging;
    /**
     * Called after the element is dragged
     * @type {?}
     */
    DraggableDirective.prototype.dragEnd;
    /**
     * @hidden
     * @type {?}
     */
    DraggableDirective.prototype.pointerDown$;
    /**
     * @hidden
     * @type {?}
     */
    DraggableDirective.prototype.pointerMove$;
    /**
     * @hidden
     * @type {?}
     */
    DraggableDirective.prototype.pointerUp$;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.eventListenerSubscriptions;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.ghostElement;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.timeLongPress;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.scroller;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.draggableHelper;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.vcr;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.scrollContainer;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.document;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsibmc6L2FuZ3VsYXItZHJhZ2dhYmxlLWRyb3BwYWJsZS9saWIvZHJhZ2dhYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxVQUFVLEVBQ1YsU0FBUyxFQUNULE1BQU0sRUFDTixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFFTixNQUFNLEVBQ04sV0FBVyxFQUNYLGdCQUFnQixFQUNoQixRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLE9BQU8sRUFDUCxVQUFVLEVBQ1YsS0FBSyxFQUNMLGFBQWEsRUFDYixhQUFhLEVBQ2IsU0FBUyxHQUNWLE1BQU0sTUFBTSxDQUFDO0FBQ2QsT0FBTyxFQUNMLEdBQUcsRUFDSCxRQUFRLEVBQ1IsU0FBUyxFQUNULElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUNSLEtBQUssRUFDTCxNQUFNLEVBQ04sS0FBSyxFQUNMLFNBQVMsR0FDVixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBbUIsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sVUFBVSxNQUFNLCtCQUErQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzNGLE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQy9DO0FBQ0c7QUFBVzs7QUFBZCxpQ0FHQztBQUNEO0FBQ1k7QUFDUCxJQUxILHdCQUFVO0FBQ1o7QUFHSyxJQUhILHdCQUFVO0FBQ1o7QUFDQTtBQUNHO0FBQVc7QUFBZCw4QkFHQztBQUNEO0FBQ1k7QUFDUCxJQUxILHFCQUFXO0FBQ2I7QUFHSSxJQUhGLHFCQUFXO0FBQ2I7QUFDQTtBQUNHO0FBQVc7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QUFDbkM7QUFDTztBQUFpQjtBQUFnQjtBQUFRLElBQTlDLDJDQUFzRTtBQUN4RTtBQUNPO0FBQWlCO0FBQWdCO0FBRXRDLElBRkEsc0NBQTBDO0FBQzVDO0FBRUM7QUFDSTtBQUVMO0FBQVEsSUFBSixxQ0FBd0M7QUFBQztBQUN0QztBQUFpQjtBQUNqQjtBQUFRLElBRFgsc0NBQTJCO0FBQUM7QUFDekI7QUFBaUI7QUFBZ0I7QUFDdEMsSUFERSw2Q0FBd0M7QUFBQztBQUN0QztBQUFpQjtBQUNWO0FBQVEsSUFEbEIsa0NBQW9CO0FBQUM7QUFDbEI7QUFBaUI7QUFDbkI7QUFBUSxJQURULGlDQUE2QjtBQUFDO0FBQzNCO0FBQWlCO0FBQWdCO0FBQVEsSUFBNUMsNkNBQXNFO0FBQUM7QUFDcEU7QUFBaUI7QUFBZ0I7QUFDcEMsSUFEQSxzQ0FBdUM7QUFDM0M7QUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgT25Jbml0LFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkNoYW5nZXMsXG4gIE5nWm9uZSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgSW5qZWN0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgT3B0aW9uYWwsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgU3ViamVjdCxcbiAgT2JzZXJ2YWJsZSxcbiAgbWVyZ2UsXG4gIFJlcGxheVN1YmplY3QsXG4gIGNvbWJpbmVMYXRlc3QsXG4gIGZyb21FdmVudCxcbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBtYXAsXG4gIG1lcmdlTWFwLFxuICB0YWtlVW50aWwsXG4gIHRha2UsXG4gIHRha2VMYXN0LFxuICBwYWlyd2lzZSxcbiAgc2hhcmUsXG4gIGZpbHRlcixcbiAgY291bnQsXG4gIHN0YXJ0V2l0aCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ3VycmVudERyYWdEYXRhLCBEcmFnZ2FibGVIZWxwZXIgfSBmcm9tICcuL2RyYWdnYWJsZS1oZWxwZXIucHJvdmlkZXInO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IGF1dG9TY3JvbGwgZnJvbSAnQG1hdHRsZXdpczkyL2RvbS1hdXRvc2Nyb2xsZXInO1xuaW1wb3J0IHsgRHJhZ2dhYmxlU2Nyb2xsQ29udGFpbmVyRGlyZWN0aXZlIH0gZnJvbSAnLi9kcmFnZ2FibGUtc2Nyb2xsLWNvbnRhaW5lci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzIH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGludGVyZmFjZSBDb29yZGluYXRlcyB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERyYWdBeGlzIHtcbiAgeDogYm9vbGVhbjtcbiAgeTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTbmFwR3JpZCB7XG4gIHg/OiBudW1iZXI7XG4gIHk/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhZ1BvaW50ZXJEb3duRXZlbnQgZXh0ZW5kcyBDb29yZGluYXRlcyB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIERyYWdTdGFydEV2ZW50IHtcbiAgY2FuY2VsRHJhZyQ6IFJlcGxheVN1YmplY3Q8dm9pZD47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhZ01vdmVFdmVudCBleHRlbmRzIENvb3JkaW5hdGVzIHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhZ0VuZEV2ZW50IGV4dGVuZHMgQ29vcmRpbmF0ZXMge1xuICBkcmFnQ2FuY2VsbGVkOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZhbGlkYXRlRHJhZ1BhcmFtcyBleHRlbmRzIENvb3JkaW5hdGVzIHtcbiAgdHJhbnNmb3JtOiB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgfTtcbn1cblxuZXhwb3J0IHR5cGUgVmFsaWRhdGVEcmFnID0gKHBhcmFtczogVmFsaWRhdGVEcmFnUGFyYW1zKSA9PiBib29sZWFuO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvaW50ZXJFdmVudCB7XG4gIGNsaWVudFg6IG51bWJlcjtcbiAgY2xpZW50WTogbnVtYmVyO1xuICBldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGltZUxvbmdQcmVzcyB7XG4gIHRpbWVyQmVnaW46IG51bWJlcjtcbiAgdGltZXJFbmQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHaG9zdEVsZW1lbnRDcmVhdGVkRXZlbnQge1xuICBjbGllbnRYOiBudW1iZXI7XG4gIGNsaWVudFk6IG51bWJlcjtcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttd2xEcmFnZ2FibGVdJyxcbn0pXG5leHBvcnQgY2xhc3MgRHJhZ2dhYmxlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBhbiBvYmplY3Qgb2YgZGF0YSB5b3UgY2FuIHBhc3MgdG8gdGhlIGRyb3AgZXZlbnRcbiAgICovXG4gIEBJbnB1dCgpIGRyb3BEYXRhOiBhbnk7XG5cbiAgLyoqXG4gICAqIFRoZSBheGlzIGFsb25nIHdoaWNoIHRoZSBlbGVtZW50IGlzIGRyYWdnYWJsZVxuICAgKi9cbiAgQElucHV0KCkgZHJhZ0F4aXM6IERyYWdBeGlzID0geyB4OiB0cnVlLCB5OiB0cnVlIH07XG5cbiAgLyoqXG4gICAqIFNuYXAgYWxsIGRyYWdzIHRvIGFuIHggLyB5IGdyaWRcbiAgICovXG4gIEBJbnB1dCgpIGRyYWdTbmFwR3JpZDogU25hcEdyaWQgPSB7fTtcblxuICAvKipcbiAgICogU2hvdyBhIGdob3N0IGVsZW1lbnQgdGhhdCBzaG93cyB0aGUgZHJhZyB3aGVuIGRyYWdnaW5nXG4gICAqL1xuICBASW5wdXQoKSBnaG9zdERyYWdFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogU2hvdyB0aGUgb3JpZ2luYWwgZWxlbWVudCB3aGVuIGdob3N0RHJhZ0VuYWJsZWQgaXMgdHJ1ZVxuICAgKi9cbiAgQElucHV0KCkgc2hvd09yaWdpbmFsRWxlbWVudFdoaWxlRHJhZ2dpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQWxsb3cgY3VzdG9tIGJlaGF2aW91ciB0byBjb250cm9sIHdoZW4gdGhlIGVsZW1lbnQgaXMgZHJhZ2dlZFxuICAgKi9cbiAgQElucHV0KCkgdmFsaWRhdGVEcmFnOiBWYWxpZGF0ZURyYWc7XG5cbiAgLyoqXG4gICAqIFRoZSBjdXJzb3IgdG8gdXNlIHdoZW4gaG92ZXJpbmcgb3ZlciBhIGRyYWdnYWJsZSBlbGVtZW50XG4gICAqL1xuICBASW5wdXQoKSBkcmFnQ3Vyc29yOiBzdHJpbmcgPSAnJztcblxuICAvKipcbiAgICogVGhlIGNzcyBjbGFzcyB0byBhcHBseSB3aGVuIHRoZSBlbGVtZW50IGlzIGJlaW5nIGRyYWdnZWRcbiAgICovXG4gIEBJbnB1dCgpIGRyYWdBY3RpdmVDbGFzczogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgZWxlbWVudCB0aGUgZ2hvc3QgZWxlbWVudCB3aWxsIGJlIGFwcGVuZGVkIHRvLiBEZWZhdWx0IGlzIG5leHQgdG8gdGhlIGRyYWdnZWQgZWxlbWVudFxuICAgKi9cbiAgQElucHV0KCkgZ2hvc3RFbGVtZW50QXBwZW5kVG86IEhUTUxFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBBbiBuZy10ZW1wbGF0ZSB0byBiZSBpbnNlcnRlZCBpbnRvIHRoZSBwYXJlbnQgZWxlbWVudCBvZiB0aGUgZ2hvc3QgZWxlbWVudC4gSXQgd2lsbCBvdmVyd3JpdGUgYW55IGNoaWxkIG5vZGVzLlxuICAgKi9cbiAgQElucHV0KCkgZ2hvc3RFbGVtZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIEFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gd2FpdCBvbiB0b3VjaCBkZXZpY2VzIGJlZm9yZSBzdGFydGluZyB0byBkcmFnIHRoZSBlbGVtZW50IChzbyB0aGF0IHlvdSBjYW4gc2Nyb2xsIHRoZSBwYWdlIGJ5IHRvdWNoaW5nIGEgZHJhZ2dhYmxlIGVsZW1lbnQpXG4gICAqL1xuICBASW5wdXQoKSB0b3VjaFN0YXJ0TG9uZ1ByZXNzOiB7IGRlbGF5OiBudW1iZXI7IGRlbHRhOiBudW1iZXIgfTtcblxuICAvKlxuICAgKiBPcHRpb25zIHVzZWQgdG8gY29udHJvbCB0aGUgYmVoYXZpb3VyIG9mIGF1dG8gc2Nyb2xsaW5nOiBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9kb20tYXV0b3Njcm9sbGVyXG4gICAqL1xuICBASW5wdXQoKSBhdXRvU2Nyb2xsOiB7XG4gICAgbWFyZ2luOlxuICAgICAgfCBudW1iZXJcbiAgICAgIHwgeyB0b3A/OiBudW1iZXI7IGxlZnQ/OiBudW1iZXI7IHJpZ2h0PzogbnVtYmVyOyBib3R0b20/OiBudW1iZXIgfTtcbiAgICBtYXhTcGVlZD86XG4gICAgICB8IG51bWJlclxuICAgICAgfCB7IHRvcD86IG51bWJlcjsgbGVmdD86IG51bWJlcjsgcmlnaHQ/OiBudW1iZXI7IGJvdHRvbT86IG51bWJlciB9O1xuICAgIHNjcm9sbFdoZW5PdXRzaWRlPzogYm9vbGVhbjtcbiAgfSA9IHtcbiAgICBtYXJnaW46IDIwLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgZWxlbWVudCBjYW4gYmUgZHJhZ2dlZCBhbG9uZyBvbmUgYXhpcyBhbmQgaGFzIHRoZSBtb3VzZSBvciBwb2ludGVyIGRldmljZSBwcmVzc2VkIG9uIGl0XG4gICAqL1xuICBAT3V0cHV0KCkgZHJhZ1BvaW50ZXJEb3duID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnUG9pbnRlckRvd25FdmVudD4oKTtcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIGVsZW1lbnQgaGFzIHN0YXJ0ZWQgdG8gYmUgZHJhZ2dlZC5cbiAgICogT25seSBjYWxsZWQgYWZ0ZXIgYXQgbGVhc3Qgb25lIG1vdXNlIG9yIHRvdWNoIG1vdmUgZXZlbnQuXG4gICAqIElmIHlvdSBjYWxsICRldmVudC5jYW5jZWxEcmFnJC5lbWl0KCkgaXQgd2lsbCBjYW5jZWwgdGhlIGN1cnJlbnQgZHJhZ1xuICAgKi9cbiAgQE91dHB1dCgpIGRyYWdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ1N0YXJ0RXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCBhZnRlciB0aGUgZ2hvc3QgZWxlbWVudCBoYXMgYmVlbiBjcmVhdGVkXG4gICAqL1xuICBAT3V0cHV0KCkgZ2hvc3RFbGVtZW50Q3JlYXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8R2hvc3RFbGVtZW50Q3JlYXRlZEV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgZWxlbWVudCBpcyBiZWluZyBkcmFnZ2VkXG4gICAqL1xuICBAT3V0cHV0KCkgZHJhZ2dpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPERyYWdNb3ZlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCBhZnRlciB0aGUgZWxlbWVudCBpcyBkcmFnZ2VkXG4gICAqL1xuICBAT3V0cHV0KCkgZHJhZ0VuZCA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ0VuZEV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwb2ludGVyRG93biQgPSBuZXcgU3ViamVjdDxQb2ludGVyRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHBvaW50ZXJNb3ZlJCA9IG5ldyBTdWJqZWN0PFBvaW50ZXJFdmVudD4oKTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcG9pbnRlclVwJCA9IG5ldyBTdWJqZWN0PFBvaW50ZXJFdmVudD4oKTtcblxuICBwcml2YXRlIGV2ZW50TGlzdGVuZXJTdWJzY3JpcHRpb25zOiB7XG4gICAgbW91c2Vtb3ZlPzogKCkgPT4gdm9pZDtcbiAgICBtb3VzZWRvd24/OiAoKSA9PiB2b2lkO1xuICAgIG1vdXNldXA/OiAoKSA9PiB2b2lkO1xuICAgIG1vdXNlZW50ZXI/OiAoKSA9PiB2b2lkO1xuICAgIG1vdXNlbGVhdmU/OiAoKSA9PiB2b2lkO1xuICAgIHRvdWNoc3RhcnQ/OiAoKSA9PiB2b2lkO1xuICAgIHRvdWNobW92ZT86ICgpID0+IHZvaWQ7XG4gICAgdG91Y2hlbmQ/OiAoKSA9PiB2b2lkO1xuICAgIHRvdWNoY2FuY2VsPzogKCkgPT4gdm9pZDtcbiAgfSA9IHt9O1xuXG4gIHByaXZhdGUgZ2hvc3RFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGw7XG5cbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJpdmF0ZSB0aW1lTG9uZ1ByZXNzOiBUaW1lTG9uZ1ByZXNzID0geyB0aW1lckJlZ2luOiAwLCB0aW1lckVuZDogMCB9O1xuXG4gIHByaXZhdGUgc2Nyb2xsZXI6IHsgZGVzdHJveTogKCkgPT4gdm9pZCB9O1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGRyYWdnYWJsZUhlbHBlcjogRHJhZ2dhYmxlSGVscGVyLFxuICAgIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgIHByaXZhdGUgdmNyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgc2Nyb2xsQ29udGFpbmVyOiBEcmFnZ2FibGVTY3JvbGxDb250YWluZXJEaXJlY3RpdmUsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55XG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgIGNvbnN0IHBvaW50ZXJEcmFnZ2VkJDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5wb2ludGVyRG93biQucGlwZShcbiAgICAgIGZpbHRlcigoKSA9PiB0aGlzLmNhbkRyYWcoKSksXG4gICAgICBtZXJnZU1hcCgocG9pbnRlckRvd25FdmVudDogUG9pbnRlckV2ZW50KSA9PiB7XG4gICAgICAgIC8vIGZpeCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL21hdHRsZXdpczkyL2FuZ3VsYXItZHJhZ2dhYmxlLWRyb3BwYWJsZS9pc3N1ZXMvNjFcbiAgICAgICAgLy8gc3RvcCBtb3VzZSBldmVudHMgcHJvcGFnYXRpbmcgdXAgdGhlIGNoYWluXG4gICAgICAgIGlmIChwb2ludGVyRG93bkV2ZW50LmV2ZW50LnN0b3BQcm9wYWdhdGlvbiAmJiAhdGhpcy5zY3JvbGxDb250YWluZXIpIHtcbiAgICAgICAgICBwb2ludGVyRG93bkV2ZW50LmV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaGFjayB0byBwcmV2ZW50IHRleHQgZ2V0dGluZyBzZWxlY3RlZCBpbiBzYWZhcmkgd2hpbGUgZHJhZ2dpbmdcbiAgICAgICAgY29uc3QgZ2xvYmFsRHJhZ1N0eWxlOiBIVE1MU3R5bGVFbGVtZW50ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdzdHlsZSdcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZ2xvYmFsRHJhZ1N0eWxlLCAndHlwZScsICd0ZXh0L2NzcycpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKFxuICAgICAgICAgIGdsb2JhbERyYWdTdHlsZSxcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmNyZWF0ZVRleHQoYFxuICAgICAgICAgIGJvZHkgKiB7XG4gICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICBgKVxuICAgICAgICApO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChnbG9iYWxEcmFnU3R5bGUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBzdGFydFNjcm9sbFBvc2l0aW9uID0gdGhpcy5nZXRTY3JvbGxQb3NpdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IHNjcm9sbENvbnRhaW5lclNjcm9sbCQgPSBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICBjb25zdCBzY3JvbGxDb250YWluZXIgPSB0aGlzLnNjcm9sbENvbnRhaW5lclxuICAgICAgICAgICAgPyB0aGlzLnNjcm9sbENvbnRhaW5lci5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcbiAgICAgICAgICAgIDogJ3dpbmRvdyc7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIubGlzdGVuKHNjcm9sbENvbnRhaW5lciwgJ3Njcm9sbCcsIChlKSA9PlxuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChlKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pLnBpcGUoXG4gICAgICAgICAgc3RhcnRXaXRoKHN0YXJ0U2Nyb2xsUG9zaXRpb24pLFxuICAgICAgICAgIG1hcCgoKSA9PiB0aGlzLmdldFNjcm9sbFBvc2l0aW9uKCkpXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgY3VycmVudERyYWckID0gbmV3IFN1YmplY3Q8Q3VycmVudERyYWdEYXRhPigpO1xuICAgICAgICBjb25zdCBjYW5jZWxEcmFnJCA9IG5ldyBSZXBsYXlTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kcmFnUG9pbnRlckRvd24ubmV4dCh7IHg6IDAsIHk6IDAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGRyYWdDb21wbGV0ZSQgPSBtZXJnZShcbiAgICAgICAgICB0aGlzLnBvaW50ZXJVcCQsXG4gICAgICAgICAgdGhpcy5wb2ludGVyRG93biQsXG4gICAgICAgICAgY2FuY2VsRHJhZyQsXG4gICAgICAgICAgdGhpcy5kZXN0cm95JFxuICAgICAgICApLnBpcGUoc2hhcmUoKSk7XG5cbiAgICAgICAgY29uc3QgcG9pbnRlck1vdmUgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgICB0aGlzLnBvaW50ZXJNb3ZlJCxcbiAgICAgICAgICBzY3JvbGxDb250YWluZXJTY3JvbGwkLFxuICAgICAgICBdKS5waXBlKFxuICAgICAgICAgIG1hcCgoW3BvaW50ZXJNb3ZlRXZlbnQsIHNjcm9sbF0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGN1cnJlbnREcmFnJCxcbiAgICAgICAgICAgICAgdHJhbnNmb3JtWDogcG9pbnRlck1vdmVFdmVudC5jbGllbnRYIC0gcG9pbnRlckRvd25FdmVudC5jbGllbnRYLFxuICAgICAgICAgICAgICB0cmFuc2Zvcm1ZOiBwb2ludGVyTW92ZUV2ZW50LmNsaWVudFkgLSBwb2ludGVyRG93bkV2ZW50LmNsaWVudFksXG4gICAgICAgICAgICAgIGNsaWVudFg6IHBvaW50ZXJNb3ZlRXZlbnQuY2xpZW50WCxcbiAgICAgICAgICAgICAgY2xpZW50WTogcG9pbnRlck1vdmVFdmVudC5jbGllbnRZLFxuICAgICAgICAgICAgICBzY3JvbGxMZWZ0OiBzY3JvbGwubGVmdCxcbiAgICAgICAgICAgICAgc2Nyb2xsVG9wOiBzY3JvbGwudG9wLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtYXAoKG1vdmVEYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5kcmFnU25hcEdyaWQueCkge1xuICAgICAgICAgICAgICBtb3ZlRGF0YS50cmFuc2Zvcm1YID1cbiAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKG1vdmVEYXRhLnRyYW5zZm9ybVggLyB0aGlzLmRyYWdTbmFwR3JpZC54KSAqXG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnU25hcEdyaWQueDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZHJhZ1NuYXBHcmlkLnkpIHtcbiAgICAgICAgICAgICAgbW92ZURhdGEudHJhbnNmb3JtWSA9XG4gICAgICAgICAgICAgICAgTWF0aC5yb3VuZChtb3ZlRGF0YS50cmFuc2Zvcm1ZIC8gdGhpcy5kcmFnU25hcEdyaWQueSkgKlxuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ1NuYXBHcmlkLnk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtb3ZlRGF0YTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtYXAoKG1vdmVEYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZHJhZ0F4aXMueCkge1xuICAgICAgICAgICAgICBtb3ZlRGF0YS50cmFuc2Zvcm1YID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLmRyYWdBeGlzLnkpIHtcbiAgICAgICAgICAgICAgbW92ZURhdGEudHJhbnNmb3JtWSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtb3ZlRGF0YTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtYXAoKG1vdmVEYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxYID0gbW92ZURhdGEuc2Nyb2xsTGVmdCAtIHN0YXJ0U2Nyb2xsUG9zaXRpb24ubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFkgPSBtb3ZlRGF0YS5zY3JvbGxUb3AgLSBzdGFydFNjcm9sbFBvc2l0aW9uLnRvcDtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLm1vdmVEYXRhLFxuICAgICAgICAgICAgICB4OiBtb3ZlRGF0YS50cmFuc2Zvcm1YICsgc2Nyb2xsWCxcbiAgICAgICAgICAgICAgeTogbW92ZURhdGEudHJhbnNmb3JtWSArIHNjcm9sbFksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZpbHRlcihcbiAgICAgICAgICAgICh7IHgsIHksIHRyYW5zZm9ybVgsIHRyYW5zZm9ybVkgfSkgPT5cbiAgICAgICAgICAgICAgIXRoaXMudmFsaWRhdGVEcmFnIHx8XG4gICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVEcmFnKHtcbiAgICAgICAgICAgICAgICB4LFxuICAgICAgICAgICAgICAgIHksXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB7IHg6IHRyYW5zZm9ybVgsIHk6IHRyYW5zZm9ybVkgfSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICApLFxuICAgICAgICAgIHRha2VVbnRpbChkcmFnQ29tcGxldGUkKSxcbiAgICAgICAgICBzaGFyZSgpXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgZHJhZ1N0YXJ0ZWQkID0gcG9pbnRlck1vdmUucGlwZSh0YWtlKDEpLCBzaGFyZSgpKTtcbiAgICAgICAgY29uc3QgZHJhZ0VuZGVkJCA9IHBvaW50ZXJNb3ZlLnBpcGUodGFrZUxhc3QoMSksIHNoYXJlKCkpO1xuXG4gICAgICAgIGRyYWdTdGFydGVkJC5zdWJzY3JpYmUoKHsgY2xpZW50WCwgY2xpZW50WSwgeCwgeSB9KSA9PiB7XG4gICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRyYWdTdGFydC5uZXh0KHsgY2FuY2VsRHJhZyQgfSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB0aGlzLnNjcm9sbGVyID0gYXV0b1Njcm9sbChcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgdGhpcy5zY3JvbGxDb250YWluZXJcbiAgICAgICAgICAgICAgICA/IHRoaXMuc2Nyb2xsQ29udGFpbmVyLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFxuICAgICAgICAgICAgICAgIDogdGhpcy5kb2N1bWVudC5kZWZhdWx0VmlldyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC4uLnRoaXMuYXV0b1Njcm9sbCxcbiAgICAgICAgICAgICAgYXV0b1Njcm9sbCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICAgIGFkZENsYXNzKHRoaXMucmVuZGVyZXIsIHRoaXMuZWxlbWVudCwgdGhpcy5kcmFnQWN0aXZlQ2xhc3MpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuZ2hvc3REcmFnRW5hYmxlZCkge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3QgY2xvbmUgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbG9uZU5vZGUoXG4gICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2hvd09yaWdpbmFsRWxlbWVudFdoaWxlRHJhZ2dpbmcpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgICAgICAndmlzaWJpbGl0eScsXG4gICAgICAgICAgICAgICAgJ2hpZGRlbidcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZ2hvc3RFbGVtZW50QXBwZW5kVG8pIHtcbiAgICAgICAgICAgICAgdGhpcy5naG9zdEVsZW1lbnRBcHBlbmRUby5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlIS5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICAgICAgY2xvbmUsXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQubmV4dFNpYmxpbmdcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5naG9zdEVsZW1lbnQgPSBjbG9uZTtcblxuICAgICAgICAgICAgdGhpcy5kb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9IHRoaXMuZHJhZ0N1cnNvcjtcblxuICAgICAgICAgICAgdGhpcy5zZXRFbGVtZW50U3R5bGVzKGNsb25lLCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgICB0b3A6IGAke3JlY3QudG9wfXB4YCxcbiAgICAgICAgICAgICAgbGVmdDogYCR7cmVjdC5sZWZ0fXB4YCxcbiAgICAgICAgICAgICAgd2lkdGg6IGAke3JlY3Qud2lkdGh9cHhgLFxuICAgICAgICAgICAgICBoZWlnaHQ6IGAke3JlY3QuaGVpZ2h0fXB4YCxcbiAgICAgICAgICAgICAgY3Vyc29yOiB0aGlzLmRyYWdDdXJzb3IsXG4gICAgICAgICAgICAgIG1hcmdpbjogJzAnLFxuICAgICAgICAgICAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtJyxcbiAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmdob3N0RWxlbWVudFRlbXBsYXRlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZpZXdSZWYgPSB0aGlzLnZjci5jcmVhdGVFbWJlZGRlZFZpZXcoXG4gICAgICAgICAgICAgICAgdGhpcy5naG9zdEVsZW1lbnRUZW1wbGF0ZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBjbG9uZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgdmlld1JlZi5yb290Tm9kZXNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChub2RlKSA9PiBub2RlIGluc3RhbmNlb2YgTm9kZSlcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY2xvbmUuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGRyYWdFbmRlZCQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnZjci5yZW1vdmUodGhpcy52Y3IuaW5kZXhPZih2aWV3UmVmKSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5naG9zdEVsZW1lbnRDcmVhdGVkLmVtaXQoe1xuICAgICAgICAgICAgICAgIGNsaWVudFg6IGNsaWVudFggLSB4LFxuICAgICAgICAgICAgICAgIGNsaWVudFk6IGNsaWVudFkgLSB5LFxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGNsb25lLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkcmFnRW5kZWQkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgIGNsb25lLnBhcmVudEVsZW1lbnQhLnJlbW92ZUNoaWxkKGNsb25lKTtcbiAgICAgICAgICAgICAgdGhpcy5naG9zdEVsZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JyxcbiAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5kcmFnZ2FibGVIZWxwZXIuY3VycmVudERyYWcubmV4dChjdXJyZW50RHJhZyQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkcmFnRW5kZWQkXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBtZXJnZU1hcCgoZHJhZ0VuZERhdGEpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZHJhZ0VuZERhdGEkID0gY2FuY2VsRHJhZyQucGlwZShcbiAgICAgICAgICAgICAgICBjb3VudCgpLFxuICAgICAgICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgICAgICAgbWFwKChjYWxsZWRDb3VudCkgPT4gKHtcbiAgICAgICAgICAgICAgICAgIC4uLmRyYWdFbmREYXRhLFxuICAgICAgICAgICAgICAgICAgZHJhZ0NhbmNlbGxlZDogY2FsbGVkQ291bnQgPiAwLFxuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBjYW5jZWxEcmFnJC5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICByZXR1cm4gZHJhZ0VuZERhdGEkO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgICAgLnN1YnNjcmliZSgoeyB4LCB5LCBkcmFnQ2FuY2VsbGVkIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsZXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZHJhZ0VuZC5uZXh0KHsgeCwgeSwgZHJhZ0NhbmNlbGxlZCB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5yZW5kZXJlciwgdGhpcy5lbGVtZW50LCB0aGlzLmRyYWdBY3RpdmVDbGFzcyk7XG4gICAgICAgICAgICBjdXJyZW50RHJhZyQuY29tcGxldGUoKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICBtZXJnZShkcmFnQ29tcGxldGUkLCBkcmFnRW5kZWQkKVxuICAgICAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmRvY3VtZW50LmhlYWQucmVtb3ZlQ2hpbGQoZ2xvYmFsRHJhZ1N0eWxlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwb2ludGVyTW92ZTtcbiAgICAgIH0pLFxuICAgICAgc2hhcmUoKVxuICAgICk7XG5cbiAgICBtZXJnZShcbiAgICAgIHBvaW50ZXJEcmFnZ2VkJC5waXBlKFxuICAgICAgICB0YWtlKDEpLFxuICAgICAgICBtYXAoKHZhbHVlKSA9PiBbLCB2YWx1ZV0pXG4gICAgICApLFxuICAgICAgcG9pbnRlckRyYWdnZWQkLnBpcGUocGFpcndpc2UoKSlcbiAgICApXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKChbcHJldmlvdXMsIG5leHRdKSA9PiB7XG4gICAgICAgICAgaWYgKCFwcmV2aW91cykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBwcmV2aW91cy54ICE9PSBuZXh0LnggfHwgcHJldmlvdXMueSAhPT0gbmV4dC55O1xuICAgICAgICB9KSxcbiAgICAgICAgbWFwKChbcHJldmlvdXMsIG5leHRdKSA9PiBuZXh0KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHsgeCwgeSwgY3VycmVudERyYWckLCBjbGllbnRYLCBjbGllbnRZLCB0cmFuc2Zvcm1YLCB0cmFuc2Zvcm1ZIH0pID0+IHtcbiAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dpbmcubmV4dCh7IHgsIHkgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdob3N0RWxlbWVudCkge1xuICAgICAgICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHt0cmFuc2Zvcm1YfXB4LCAke3RyYW5zZm9ybVl9cHgsIDBweClgO1xuICAgICAgICAgICAgICB0aGlzLnNldEVsZW1lbnRTdHlsZXModGhpcy5naG9zdEVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0sXG4gICAgICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogdHJhbnNmb3JtLFxuICAgICAgICAgICAgICAgICctbXMtdHJhbnNmb3JtJzogdHJhbnNmb3JtLFxuICAgICAgICAgICAgICAgICctbW96LXRyYW5zZm9ybSc6IHRyYW5zZm9ybSxcbiAgICAgICAgICAgICAgICAnLW8tdHJhbnNmb3JtJzogdHJhbnNmb3JtLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjdXJyZW50RHJhZyQubmV4dCh7XG4gICAgICAgICAgICBjbGllbnRYLFxuICAgICAgICAgICAgY2xpZW50WSxcbiAgICAgICAgICAgIGRyb3BEYXRhOiB0aGlzLmRyb3BEYXRhLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICApO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmRyYWdBeGlzKSB7XG4gICAgICB0aGlzLmNoZWNrRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLnBvaW50ZXJEb3duJC5jb21wbGV0ZSgpO1xuICAgIHRoaXMucG9pbnRlck1vdmUkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5wb2ludGVyVXAkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrRXZlbnRMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgY29uc3QgY2FuRHJhZzogYm9vbGVhbiA9IHRoaXMuY2FuRHJhZygpO1xuICAgIGNvbnN0IGhhc0V2ZW50TGlzdGVuZXJzOiBib29sZWFuID1cbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMpLmxlbmd0aCA+IDA7XG5cbiAgICBpZiAoY2FuRHJhZyAmJiAhaGFzRXZlbnRMaXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMubW91c2Vkb3duID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgJ21vdXNlZG93bicsXG4gICAgICAgICAgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy5tb3VzZXVwID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgJ2RvY3VtZW50JyxcbiAgICAgICAgICAnbW91c2V1cCcsXG4gICAgICAgICAgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uTW91c2VVcChldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMudG91Y2hzdGFydCA9IHRoaXMucmVuZGVyZXIubGlzdGVuKFxuICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICd0b3VjaHN0YXJ0JyxcbiAgICAgICAgICAoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaFN0YXJ0KGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy50b3VjaGVuZCA9IHRoaXMucmVuZGVyZXIubGlzdGVuKFxuICAgICAgICAgICdkb2N1bWVudCcsXG4gICAgICAgICAgJ3RvdWNoZW5kJyxcbiAgICAgICAgICAoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaEVuZChldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMudG91Y2hjYW5jZWwgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbihcbiAgICAgICAgICAnZG9jdW1lbnQnLFxuICAgICAgICAgICd0b3VjaGNhbmNlbCcsXG4gICAgICAgICAgKGV2ZW50OiBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hFbmQoZXZlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJTdWJzY3JpcHRpb25zLm1vdXNlZW50ZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbihcbiAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAnbW91c2VlbnRlcicsXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbk1vdXNlRW50ZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy5tb3VzZWxlYXZlID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgJ21vdXNlbGVhdmUnLFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25Nb3VzZUxlYXZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICghY2FuRHJhZyAmJiBoYXNFdmVudExpc3RlbmVycykge1xuICAgICAgdGhpcy51bnN1YnNjcmliZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvbk1vdXNlRG93bihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudC5idXR0b24gPT09IDApIHtcbiAgICAgIGlmICghdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy5tb3VzZW1vdmUpIHtcbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy5tb3VzZW1vdmUgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbihcbiAgICAgICAgICAnZG9jdW1lbnQnLFxuICAgICAgICAgICdtb3VzZW1vdmUnLFxuICAgICAgICAgIChtb3VzZU1vdmVFdmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wb2ludGVyTW92ZSQubmV4dCh7XG4gICAgICAgICAgICAgIGV2ZW50OiBtb3VzZU1vdmVFdmVudCxcbiAgICAgICAgICAgICAgY2xpZW50WDogbW91c2VNb3ZlRXZlbnQuY2xpZW50WCxcbiAgICAgICAgICAgICAgY2xpZW50WTogbW91c2VNb3ZlRXZlbnQuY2xpZW50WSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucG9pbnRlckRvd24kLm5leHQoe1xuICAgICAgICBldmVudCxcbiAgICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb25Nb3VzZVVwKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMCkge1xuICAgICAgaWYgKHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMubW91c2Vtb3ZlKSB7XG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMubW91c2Vtb3ZlKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50TGlzdGVuZXJTdWJzY3JpcHRpb25zLm1vdXNlbW92ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMucG9pbnRlclVwJC5uZXh0KHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uVG91Y2hTdGFydChldmVudDogVG91Y2hFdmVudCk6IHZvaWQge1xuICAgIGxldCBzdGFydFNjcm9sbFBvc2l0aW9uOiBhbnk7XG4gICAgbGV0IGlzRHJhZ0FjdGl2YXRlZDogYm9vbGVhbjtcbiAgICBsZXQgaGFzQ29udGFpbmVyU2Nyb2xsYmFyOiBib29sZWFuO1xuICAgIGlmIChcbiAgICAgICh0aGlzLnNjcm9sbENvbnRhaW5lciAmJiB0aGlzLnNjcm9sbENvbnRhaW5lci5hY3RpdmVMb25nUHJlc3NEcmFnKSB8fFxuICAgICAgdGhpcy50b3VjaFN0YXJ0TG9uZ1ByZXNzXG4gICAgKSB7XG4gICAgICB0aGlzLnRpbWVMb25nUHJlc3MudGltZXJCZWdpbiA9IERhdGUubm93KCk7XG4gICAgICBpc0RyYWdBY3RpdmF0ZWQgPSBmYWxzZTtcbiAgICAgIGhhc0NvbnRhaW5lclNjcm9sbGJhciA9IHRoaXMuaGFzU2Nyb2xsYmFyKCk7XG4gICAgICBzdGFydFNjcm9sbFBvc2l0aW9uID0gdGhpcy5nZXRTY3JvbGxQb3NpdGlvbigpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy50b3VjaG1vdmUpIHtcbiAgICAgIGNvbnN0IGNvbnRleHRNZW51TGlzdGVuZXIgPSBmcm9tRXZlbnQ8RXZlbnQ+KFxuICAgICAgICB0aGlzLmRvY3VtZW50LFxuICAgICAgICAnY29udGV4dG1lbnUnXG4gICAgICApLnN1YnNjcmliZSgoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgdG91Y2hNb3ZlTGlzdGVuZXIgPSBmcm9tRXZlbnQ8VG91Y2hFdmVudD4oXG4gICAgICAgIHRoaXMuZG9jdW1lbnQsXG4gICAgICAgICd0b3VjaG1vdmUnLFxuICAgICAgICB7XG4gICAgICAgICAgcGFzc2l2ZTogZmFsc2UsXG4gICAgICAgIH1cbiAgICAgICkuc3Vic2NyaWJlKCh0b3VjaE1vdmVFdmVudCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgKCh0aGlzLnNjcm9sbENvbnRhaW5lciAmJiB0aGlzLnNjcm9sbENvbnRhaW5lci5hY3RpdmVMb25nUHJlc3NEcmFnKSB8fFxuICAgICAgICAgICAgdGhpcy50b3VjaFN0YXJ0TG9uZ1ByZXNzKSAmJlxuICAgICAgICAgICFpc0RyYWdBY3RpdmF0ZWQgJiZcbiAgICAgICAgICBoYXNDb250YWluZXJTY3JvbGxiYXJcbiAgICAgICAgKSB7XG4gICAgICAgICAgaXNEcmFnQWN0aXZhdGVkID0gdGhpcy5zaG91bGRCZWdpbkRyYWcoXG4gICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgIHRvdWNoTW92ZUV2ZW50LFxuICAgICAgICAgICAgc3RhcnRTY3JvbGxQb3NpdGlvblxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgICgoIXRoaXMuc2Nyb2xsQ29udGFpbmVyIHx8XG4gICAgICAgICAgICAhdGhpcy5zY3JvbGxDb250YWluZXIuYWN0aXZlTG9uZ1ByZXNzRHJhZykgJiZcbiAgICAgICAgICAgICF0aGlzLnRvdWNoU3RhcnRMb25nUHJlc3MpIHx8XG4gICAgICAgICAgIWhhc0NvbnRhaW5lclNjcm9sbGJhciB8fFxuICAgICAgICAgIGlzRHJhZ0FjdGl2YXRlZFxuICAgICAgICApIHtcbiAgICAgICAgICB0b3VjaE1vdmVFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMucG9pbnRlck1vdmUkLm5leHQoe1xuICAgICAgICAgICAgZXZlbnQ6IHRvdWNoTW92ZUV2ZW50LFxuICAgICAgICAgICAgY2xpZW50WDogdG91Y2hNb3ZlRXZlbnQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRYLFxuICAgICAgICAgICAgY2xpZW50WTogdG91Y2hNb3ZlRXZlbnQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRZLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy50b3VjaG1vdmUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnRleHRNZW51TGlzdGVuZXIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdG91Y2hNb3ZlTGlzdGVuZXIudW5zdWJzY3JpYmUoKTtcbiAgICAgIH07XG4gICAgfVxuICAgIHRoaXMucG9pbnRlckRvd24kLm5leHQoe1xuICAgICAgZXZlbnQsXG4gICAgICBjbGllbnRYOiBldmVudC50b3VjaGVzWzBdLmNsaWVudFgsXG4gICAgICBjbGllbnRZOiBldmVudC50b3VjaGVzWzBdLmNsaWVudFksXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG9uVG91Y2hFbmQoZXZlbnQ6IFRvdWNoRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy50b3VjaG1vdmUpIHtcbiAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMudG91Y2htb3ZlKCk7XG4gICAgICBkZWxldGUgdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy50b3VjaG1vdmU7XG5cbiAgICAgIGlmIChcbiAgICAgICAgKHRoaXMuc2Nyb2xsQ29udGFpbmVyICYmIHRoaXMuc2Nyb2xsQ29udGFpbmVyLmFjdGl2ZUxvbmdQcmVzc0RyYWcpIHx8XG4gICAgICAgIHRoaXMudG91Y2hTdGFydExvbmdQcmVzc1xuICAgICAgKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlU2Nyb2xsKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucG9pbnRlclVwJC5uZXh0KHtcbiAgICAgIGV2ZW50LFxuICAgICAgY2xpZW50WDogZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCxcbiAgICAgIGNsaWVudFk6IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFksXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG9uTW91c2VFbnRlcigpOiB2b2lkIHtcbiAgICB0aGlzLnNldEN1cnNvcih0aGlzLmRyYWdDdXJzb3IpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbk1vdXNlTGVhdmUoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDdXJzb3IoJycpO1xuICB9XG5cbiAgcHJpdmF0ZSBjYW5EcmFnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRyYWdBeGlzLnggfHwgdGhpcy5kcmFnQXhpcy55O1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDdXJzb3IodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy5tb3VzZW1vdmUpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdjdXJzb3InLCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1bnN1YnNjcmliZUV2ZW50TGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIE9iamVjdC5rZXlzKHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMpLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICh0aGlzIGFzIGFueSkuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnNbdHlwZV0oKTtcbiAgICAgIGRlbGV0ZSAodGhpcyBhcyBhbnkpLmV2ZW50TGlzdGVuZXJTdWJzY3JpcHRpb25zW3R5cGVdO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRFbGVtZW50U3R5bGVzKFxuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIHN0eWxlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfVxuICApIHtcbiAgICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShlbGVtZW50LCBrZXksIHN0eWxlc1trZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2Nyb2xsRWxlbWVudCgpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxDb250YWluZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjcm9sbENvbnRhaW5lci5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmRvY3VtZW50LmJvZHk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRTY3JvbGxQb3NpdGlvbigpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxDb250YWluZXIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogdGhpcy5zY3JvbGxDb250YWluZXIuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCxcbiAgICAgICAgbGVmdDogdGhpcy5zY3JvbGxDb250YWluZXIuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b3A6IHdpbmRvdy5wYWdlWU9mZnNldCB8fCB0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AsXG4gICAgICAgIGxlZnQ6IHdpbmRvdy5wYWdlWE9mZnNldCB8fCB0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNob3VsZEJlZ2luRHJhZyhcbiAgICBldmVudDogVG91Y2hFdmVudCxcbiAgICB0b3VjaE1vdmVFdmVudDogVG91Y2hFdmVudCxcbiAgICBzdGFydFNjcm9sbFBvc2l0aW9uOiB7IHRvcDogbnVtYmVyOyBsZWZ0OiBudW1iZXIgfVxuICApOiBib29sZWFuIHtcbiAgICBjb25zdCBtb3ZlU2Nyb2xsUG9zaXRpb24gPSB0aGlzLmdldFNjcm9sbFBvc2l0aW9uKCk7XG4gICAgY29uc3QgZGVsdGFTY3JvbGwgPSB7XG4gICAgICB0b3A6IE1hdGguYWJzKG1vdmVTY3JvbGxQb3NpdGlvbi50b3AgLSBzdGFydFNjcm9sbFBvc2l0aW9uLnRvcCksXG4gICAgICBsZWZ0OiBNYXRoLmFicyhtb3ZlU2Nyb2xsUG9zaXRpb24ubGVmdCAtIHN0YXJ0U2Nyb2xsUG9zaXRpb24ubGVmdCksXG4gICAgfTtcbiAgICBjb25zdCBkZWx0YVggPVxuICAgICAgTWF0aC5hYnMoXG4gICAgICAgIHRvdWNoTW92ZUV2ZW50LnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WCAtIGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WFxuICAgICAgKSAtIGRlbHRhU2Nyb2xsLmxlZnQ7XG4gICAgY29uc3QgZGVsdGFZID1cbiAgICAgIE1hdGguYWJzKFxuICAgICAgICB0b3VjaE1vdmVFdmVudC50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFkgLSBldmVudC50b3VjaGVzWzBdLmNsaWVudFlcbiAgICAgICkgLSBkZWx0YVNjcm9sbC50b3A7XG4gICAgY29uc3QgZGVsdGFUb3RhbCA9IGRlbHRhWCArIGRlbHRhWTtcbiAgICBjb25zdCBsb25nUHJlc3NDb25maWcgPSB0aGlzLnRvdWNoU3RhcnRMb25nUHJlc3NcbiAgICAgID8gdGhpcy50b3VjaFN0YXJ0TG9uZ1ByZXNzXG4gICAgICA6IC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIHtcbiAgICAgICAgICBkZWx0YTogdGhpcy5zY3JvbGxDb250YWluZXIubG9uZ1ByZXNzQ29uZmlnLmRlbHRhLFxuICAgICAgICAgIGRlbGF5OiB0aGlzLnNjcm9sbENvbnRhaW5lci5sb25nUHJlc3NDb25maWcuZHVyYXRpb24sXG4gICAgICAgIH07XG4gICAgaWYgKFxuICAgICAgZGVsdGFUb3RhbCA+IGxvbmdQcmVzc0NvbmZpZy5kZWx0YSB8fFxuICAgICAgZGVsdGFTY3JvbGwudG9wID4gMCB8fFxuICAgICAgZGVsdGFTY3JvbGwubGVmdCA+IDBcbiAgICApIHtcbiAgICAgIHRoaXMudGltZUxvbmdQcmVzcy50aW1lckJlZ2luID0gRGF0ZS5ub3coKTtcbiAgICB9XG4gICAgdGhpcy50aW1lTG9uZ1ByZXNzLnRpbWVyRW5kID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBkdXJhdGlvbiA9XG4gICAgICB0aGlzLnRpbWVMb25nUHJlc3MudGltZXJFbmQgLSB0aGlzLnRpbWVMb25nUHJlc3MudGltZXJCZWdpbjtcbiAgICBpZiAoZHVyYXRpb24gPj0gbG9uZ1ByZXNzQ29uZmlnLmRlbGF5KSB7XG4gICAgICB0aGlzLmRpc2FibGVTY3JvbGwoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIGVuYWJsZVNjcm9sbCgpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxDb250YWluZXIpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgIHRoaXMuc2Nyb2xsQ29udGFpbmVyLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICAgJ292ZXJmbG93JyxcbiAgICAgICAgJydcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5kb2N1bWVudC5ib2R5LCAnb3ZlcmZsb3cnLCAnJyk7XG4gIH1cblxuICBwcml2YXRlIGRpc2FibGVTY3JvbGwoKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAodGhpcy5zY3JvbGxDb250YWluZXIpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgIHRoaXMuc2Nyb2xsQ29udGFpbmVyLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICAgJ292ZXJmbG93JyxcbiAgICAgICAgJ2hpZGRlbidcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5kb2N1bWVudC5ib2R5LCAnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG4gIH1cblxuICBwcml2YXRlIGhhc1Njcm9sbGJhcigpOiBib29sZWFuIHtcbiAgICBjb25zdCBzY3JvbGxDb250YWluZXIgPSB0aGlzLmdldFNjcm9sbEVsZW1lbnQoKTtcbiAgICBjb25zdCBjb250YWluZXJIYXNIb3Jpem9udGFsU2Nyb2xsID1cbiAgICAgIHNjcm9sbENvbnRhaW5lci5zY3JvbGxXaWR0aCA+IHNjcm9sbENvbnRhaW5lci5jbGllbnRXaWR0aDtcbiAgICBjb25zdCBjb250YWluZXJIYXNWZXJ0aWNhbFNjcm9sbCA9XG4gICAgICBzY3JvbGxDb250YWluZXIuc2Nyb2xsSGVpZ2h0ID4gc2Nyb2xsQ29udGFpbmVyLmNsaWVudEhlaWdodDtcbiAgICByZXR1cm4gY29udGFpbmVySGFzSG9yaXpvbnRhbFNjcm9sbCB8fCBjb250YWluZXJIYXNWZXJ0aWNhbFNjcm9sbDtcbiAgfVxufVxuIl19