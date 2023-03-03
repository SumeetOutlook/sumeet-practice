/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var DraggableDirective = /** @class */ (function () {
    /**
     * @hidden
     */
    function DraggableDirective(element, renderer, draggableHelper, zone, vcr, scrollContainer, document) {
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
    DraggableDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.checkEventListeners();
        /** @type {?} */
        var pointerDragged$ = this.pointerDown$.pipe(filter((/**
         * @return {?}
         */
        function () { return _this.canDrag(); })), mergeMap((/**
         * @param {?} pointerDownEvent
         * @return {?}
         */
        function (pointerDownEvent) {
            // fix for https://github.com/mattlewis92/angular-draggable-droppable/issues/61
            // stop mouse events propagating up the chain
            if (pointerDownEvent.event.stopPropagation && !_this.scrollContainer) {
                pointerDownEvent.event.stopPropagation();
            }
            // hack to prevent text getting selected in safari while dragging
            /** @type {?} */
            var globalDragStyle = _this.renderer.createElement('style');
            _this.renderer.setAttribute(globalDragStyle, 'type', 'text/css');
            _this.renderer.appendChild(globalDragStyle, _this.renderer.createText("\n          body * {\n           -moz-user-select: none;\n           -ms-user-select: none;\n           -webkit-user-select: none;\n           user-select: none;\n          }\n        "));
            requestAnimationFrame((/**
             * @return {?}
             */
            function () {
                _this.document.head.appendChild(globalDragStyle);
            }));
            /** @type {?} */
            var startScrollPosition = _this.getScrollPosition();
            /** @type {?} */
            var scrollContainerScroll$ = new Observable((/**
             * @param {?} observer
             * @return {?}
             */
            function (observer) {
                /** @type {?} */
                var scrollContainer = _this.scrollContainer
                    ? _this.scrollContainer.elementRef.nativeElement
                    : 'window';
                return _this.renderer.listen(scrollContainer, 'scroll', (/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) {
                    return observer.next(e);
                }));
            })).pipe(startWith(startScrollPosition), map((/**
             * @return {?}
             */
            function () { return _this.getScrollPosition(); })));
            /** @type {?} */
            var currentDrag$ = new Subject();
            /** @type {?} */
            var cancelDrag$ = new ReplaySubject();
            _this.zone.run((/**
             * @return {?}
             */
            function () {
                _this.dragPointerDown.next({ x: 0, y: 0 });
            }));
            /** @type {?} */
            var dragComplete$ = merge(_this.pointerUp$, _this.pointerDown$, cancelDrag$, _this.destroy$).pipe(share());
            /** @type {?} */
            var pointerMove = combineLatest([
                _this.pointerMove$,
                scrollContainerScroll$,
            ]).pipe(map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = tslib_1.__read(_a, 2), pointerMoveEvent = _b[0], scroll = _b[1];
                return {
                    currentDrag$: currentDrag$,
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
            function (moveData) {
                if (_this.dragSnapGrid.x) {
                    moveData.transformX =
                        Math.round(moveData.transformX / _this.dragSnapGrid.x) *
                            _this.dragSnapGrid.x;
                }
                if (_this.dragSnapGrid.y) {
                    moveData.transformY =
                        Math.round(moveData.transformY / _this.dragSnapGrid.y) *
                            _this.dragSnapGrid.y;
                }
                return moveData;
            })), map((/**
             * @param {?} moveData
             * @return {?}
             */
            function (moveData) {
                if (!_this.dragAxis.x) {
                    moveData.transformX = 0;
                }
                if (!_this.dragAxis.y) {
                    moveData.transformY = 0;
                }
                return moveData;
            })), map((/**
             * @param {?} moveData
             * @return {?}
             */
            function (moveData) {
                /** @type {?} */
                var scrollX = moveData.scrollLeft - startScrollPosition.left;
                /** @type {?} */
                var scrollY = moveData.scrollTop - startScrollPosition.top;
                return tslib_1.__assign({}, moveData, { x: moveData.transformX + scrollX, y: moveData.transformY + scrollY });
            })), filter((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var x = _a.x, y = _a.y, transformX = _a.transformX, transformY = _a.transformY;
                return !_this.validateDrag ||
                    _this.validateDrag({
                        x: x,
                        y: y,
                        transform: { x: transformX, y: transformY },
                    });
            })), takeUntil(dragComplete$), share());
            /** @type {?} */
            var dragStarted$ = pointerMove.pipe(take(1), share());
            /** @type {?} */
            var dragEnded$ = pointerMove.pipe(takeLast(1), share());
            dragStarted$.subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var clientX = _a.clientX, clientY = _a.clientY, x = _a.x, y = _a.y;
                _this.zone.run((/**
                 * @return {?}
                 */
                function () {
                    _this.dragStart.next({ cancelDrag$: cancelDrag$ });
                }));
                _this.scroller = autoScroll([
                    _this.scrollContainer
                        ? _this.scrollContainer.elementRef.nativeElement
                        : _this.document.defaultView,
                ], tslib_1.__assign({}, _this.autoScroll, { autoScroll: /**
                     * @return {?}
                     */
                    function () {
                        return true;
                    } }));
                addClass(_this.renderer, _this.element, _this.dragActiveClass);
                if (_this.ghostDragEnabled) {
                    /** @type {?} */
                    var rect = _this.element.nativeElement.getBoundingClientRect();
                    /** @type {?} */
                    var clone_1 = (/** @type {?} */ (_this.element.nativeElement.cloneNode(true)));
                    if (!_this.showOriginalElementWhileDragging) {
                        _this.renderer.setStyle(_this.element.nativeElement, 'visibility', 'hidden');
                    }
                    if (_this.ghostElementAppendTo) {
                        _this.ghostElementAppendTo.appendChild(clone_1);
                    }
                    else {
                        (/** @type {?} */ (_this.element.nativeElement.parentNode)).insertBefore(clone_1, _this.element.nativeElement.nextSibling);
                    }
                    _this.ghostElement = clone_1;
                    _this.document.body.style.cursor = _this.dragCursor;
                    _this.setElementStyles(clone_1, {
                        position: 'fixed',
                        top: rect.top + "px",
                        left: rect.left + "px",
                        width: rect.width + "px",
                        height: rect.height + "px",
                        cursor: _this.dragCursor,
                        margin: '0',
                        willChange: 'transform',
                        pointerEvents: 'none',
                    });
                    if (_this.ghostElementTemplate) {
                        /** @type {?} */
                        var viewRef_1 = _this.vcr.createEmbeddedView(_this.ghostElementTemplate);
                        clone_1.innerHTML = '';
                        viewRef_1.rootNodes
                            .filter((/**
                         * @param {?} node
                         * @return {?}
                         */
                        function (node) { return node instanceof Node; }))
                            .forEach((/**
                         * @param {?} node
                         * @return {?}
                         */
                        function (node) {
                            clone_1.appendChild(node);
                        }));
                        dragEnded$.subscribe((/**
                         * @return {?}
                         */
                        function () {
                            _this.vcr.remove(_this.vcr.indexOf(viewRef_1));
                        }));
                    }
                    _this.zone.run((/**
                     * @return {?}
                     */
                    function () {
                        _this.ghostElementCreated.emit({
                            clientX: clientX - x,
                            clientY: clientY - y,
                            element: clone_1,
                        });
                    }));
                    dragEnded$.subscribe((/**
                     * @return {?}
                     */
                    function () {
                        (/** @type {?} */ (clone_1.parentElement)).removeChild(clone_1);
                        _this.ghostElement = null;
                        _this.renderer.setStyle(_this.element.nativeElement, 'visibility', '');
                    }));
                }
                _this.draggableHelper.currentDrag.next(currentDrag$);
            }));
            dragEnded$
                .pipe(mergeMap((/**
             * @param {?} dragEndData
             * @return {?}
             */
            function (dragEndData) {
                /** @type {?} */
                var dragEndData$ = cancelDrag$.pipe(count(), take(1), map((/**
                 * @param {?} calledCount
                 * @return {?}
                 */
                function (calledCount) { return (tslib_1.__assign({}, dragEndData, { dragCancelled: calledCount > 0 })); })));
                cancelDrag$.complete();
                return dragEndData$;
            })))
                .subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var x = _a.x, y = _a.y, dragCancelled = _a.dragCancelled;
                _this.scroller.destroy();
                _this.zone.run((/**
                 * @return {?}
                 */
                function () {
                    _this.dragEnd.next({ x: x, y: y, dragCancelled: dragCancelled });
                }));
                removeClass(_this.renderer, _this.element, _this.dragActiveClass);
                currentDrag$.complete();
            }));
            merge(dragComplete$, dragEnded$)
                .pipe(take(1))
                .subscribe((/**
             * @return {?}
             */
            function () {
                requestAnimationFrame((/**
                 * @return {?}
                 */
                function () {
                    _this.document.head.removeChild(globalDragStyle);
                }));
            }));
            return pointerMove;
        })), share());
        merge(pointerDragged$.pipe(take(1), map((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return [, value]; }))), pointerDragged$.pipe(pairwise()))
            .pipe(filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), previous = _b[0], next = _b[1];
            if (!previous) {
                return true;
            }
            return previous.x !== next.x || previous.y !== next.y;
        })), map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), previous = _b[0], next = _b[1];
            return next;
        })))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var x = _a.x, y = _a.y, currentDrag$ = _a.currentDrag$, clientX = _a.clientX, clientY = _a.clientY, transformX = _a.transformX, transformY = _a.transformY;
            _this.zone.run((/**
             * @return {?}
             */
            function () {
                _this.dragging.next({ x: x, y: y });
            }));
            requestAnimationFrame((/**
             * @return {?}
             */
            function () {
                if (_this.ghostElement) {
                    /** @type {?} */
                    var transform = "translate3d(" + transformX + "px, " + transformY + "px, 0px)";
                    _this.setElementStyles(_this.ghostElement, {
                        transform: transform,
                        '-webkit-transform': transform,
                        '-ms-transform': transform,
                        '-moz-transform': transform,
                        '-o-transform': transform,
                    });
                }
            }));
            currentDrag$.next({
                clientX: clientX,
                clientY: clientY,
                dropData: _this.dropData,
            });
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DraggableDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.dragAxis) {
            this.checkEventListeners();
        }
    };
    /**
     * @return {?}
     */
    DraggableDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribeEventListeners();
        this.pointerDown$.complete();
        this.pointerMove$.complete();
        this.pointerUp$.complete();
        this.destroy$.next();
    };
    /**
     * @private
     * @return {?}
     */
    DraggableDirective.prototype.checkEventListeners = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var canDrag = this.canDrag();
        /** @type {?} */
        var hasEventListeners = Object.keys(this.eventListenerSubscriptions).length > 0;
        if (canDrag && !hasEventListeners) {
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this.eventListenerSubscriptions.mousedown = _this.renderer.listen(_this.element.nativeElement, 'mousedown', (/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    _this.onMouseDown(event);
                }));
                _this.eventListenerSubscriptions.mouseup = _this.renderer.listen('document', 'mouseup', (/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    _this.onMouseUp(event);
                }));
                _this.eventListenerSubscriptions.touchstart = _this.renderer.listen(_this.element.nativeElement, 'touchstart', (/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    _this.onTouchStart(event);
                }));
                _this.eventListenerSubscriptions.touchend = _this.renderer.listen('document', 'touchend', (/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    _this.onTouchEnd(event);
                }));
                _this.eventListenerSubscriptions.touchcancel = _this.renderer.listen('document', 'touchcancel', (/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    _this.onTouchEnd(event);
                }));
                _this.eventListenerSubscriptions.mouseenter = _this.renderer.listen(_this.element.nativeElement, 'mouseenter', (/**
                 * @return {?}
                 */
                function () {
                    _this.onMouseEnter();
                }));
                _this.eventListenerSubscriptions.mouseleave = _this.renderer.listen(_this.element.nativeElement, 'mouseleave', (/**
                 * @return {?}
                 */
                function () {
                    _this.onMouseLeave();
                }));
            }));
        }
        else if (!canDrag && hasEventListeners) {
            this.unsubscribeEventListeners();
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    DraggableDirective.prototype.onMouseDown = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (event.button === 0) {
            if (!this.eventListenerSubscriptions.mousemove) {
                this.eventListenerSubscriptions.mousemove = this.renderer.listen('document', 'mousemove', (/**
                 * @param {?} mouseMoveEvent
                 * @return {?}
                 */
                function (mouseMoveEvent) {
                    _this.pointerMove$.next({
                        event: mouseMoveEvent,
                        clientX: mouseMoveEvent.clientX,
                        clientY: mouseMoveEvent.clientY,
                    });
                }));
            }
            this.pointerDown$.next({
                event: event,
                clientX: event.clientX,
                clientY: event.clientY,
            });
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    DraggableDirective.prototype.onMouseUp = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.button === 0) {
            if (this.eventListenerSubscriptions.mousemove) {
                this.eventListenerSubscriptions.mousemove();
                delete this.eventListenerSubscriptions.mousemove;
            }
            this.pointerUp$.next({
                event: event,
                clientX: event.clientX,
                clientY: event.clientY,
            });
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    DraggableDirective.prototype.onTouchStart = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var startScrollPosition;
        /** @type {?} */
        var isDragActivated;
        /** @type {?} */
        var hasContainerScrollbar;
        if ((this.scrollContainer && this.scrollContainer.activeLongPressDrag) ||
            this.touchStartLongPress) {
            this.timeLongPress.timerBegin = Date.now();
            isDragActivated = false;
            hasContainerScrollbar = this.hasScrollbar();
            startScrollPosition = this.getScrollPosition();
        }
        if (!this.eventListenerSubscriptions.touchmove) {
            /** @type {?} */
            var contextMenuListener_1 = fromEvent(this.document, 'contextmenu').subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                e.preventDefault();
            }));
            /** @type {?} */
            var touchMoveListener_1 = fromEvent(this.document, 'touchmove', {
                passive: false,
            }).subscribe((/**
             * @param {?} touchMoveEvent
             * @return {?}
             */
            function (touchMoveEvent) {
                if (((_this.scrollContainer && _this.scrollContainer.activeLongPressDrag) ||
                    _this.touchStartLongPress) &&
                    !isDragActivated &&
                    hasContainerScrollbar) {
                    isDragActivated = _this.shouldBeginDrag(event, touchMoveEvent, startScrollPosition);
                }
                if (((!_this.scrollContainer ||
                    !_this.scrollContainer.activeLongPressDrag) &&
                    !_this.touchStartLongPress) ||
                    !hasContainerScrollbar ||
                    isDragActivated) {
                    touchMoveEvent.preventDefault();
                    _this.pointerMove$.next({
                        event: touchMoveEvent,
                        clientX: touchMoveEvent.targetTouches[0].clientX,
                        clientY: touchMoveEvent.targetTouches[0].clientY,
                    });
                }
            }));
            this.eventListenerSubscriptions.touchmove = (/**
             * @return {?}
             */
            function () {
                contextMenuListener_1.unsubscribe();
                touchMoveListener_1.unsubscribe();
            });
        }
        this.pointerDown$.next({
            event: event,
            clientX: event.touches[0].clientX,
            clientY: event.touches[0].clientY,
        });
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    DraggableDirective.prototype.onTouchEnd = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.eventListenerSubscriptions.touchmove) {
            this.eventListenerSubscriptions.touchmove();
            delete this.eventListenerSubscriptions.touchmove;
            if ((this.scrollContainer && this.scrollContainer.activeLongPressDrag) ||
                this.touchStartLongPress) {
                this.enableScroll();
            }
        }
        this.pointerUp$.next({
            event: event,
            clientX: event.changedTouches[0].clientX,
            clientY: event.changedTouches[0].clientY,
        });
    };
    /**
     * @private
     * @return {?}
     */
    DraggableDirective.prototype.onMouseEnter = /**
     * @private
     * @return {?}
     */
    function () {
        this.setCursor(this.dragCursor);
    };
    /**
     * @private
     * @return {?}
     */
    DraggableDirective.prototype.onMouseLeave = /**
     * @private
     * @return {?}
     */
    function () {
        this.setCursor('');
    };
    /**
     * @private
     * @return {?}
     */
    DraggableDirective.prototype.canDrag = /**
     * @private
     * @return {?}
     */
    function () {
        return this.dragAxis.x || this.dragAxis.y;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    DraggableDirective.prototype.setCursor = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this.eventListenerSubscriptions.mousemove) {
            this.renderer.setStyle(this.element.nativeElement, 'cursor', value);
        }
    };
    /**
     * @private
     * @return {?}
     */
    DraggableDirective.prototype.unsubscribeEventListeners = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        Object.keys(this.eventListenerSubscriptions).forEach((/**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            ((/** @type {?} */ (_this))).eventListenerSubscriptions[type]();
            delete ((/** @type {?} */ (_this))).eventListenerSubscriptions[type];
        }));
    };
    /**
     * @private
     * @param {?} element
     * @param {?} styles
     * @return {?}
     */
    DraggableDirective.prototype.setElementStyles = /**
     * @private
     * @param {?} element
     * @param {?} styles
     * @return {?}
     */
    function (element, styles) {
        var _this = this;
        Object.keys(styles).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            _this.renderer.setStyle(element, key, styles[key]);
        }));
    };
    /**
     * @private
     * @return {?}
     */
    DraggableDirective.prototype.getScrollElement = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.scrollContainer) {
            return this.scrollContainer.elementRef.nativeElement;
        }
        else {
            return this.document.body;
        }
    };
    /**
     * @private
     * @return {?}
     */
    DraggableDirective.prototype.getScrollPosition = /**
     * @private
     * @return {?}
     */
    function () {
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
    };
    /**
     * @private
     * @param {?} event
     * @param {?} touchMoveEvent
     * @param {?} startScrollPosition
     * @return {?}
     */
    DraggableDirective.prototype.shouldBeginDrag = /**
     * @private
     * @param {?} event
     * @param {?} touchMoveEvent
     * @param {?} startScrollPosition
     * @return {?}
     */
    function (event, touchMoveEvent, startScrollPosition) {
        /** @type {?} */
        var moveScrollPosition = this.getScrollPosition();
        /** @type {?} */
        var deltaScroll = {
            top: Math.abs(moveScrollPosition.top - startScrollPosition.top),
            left: Math.abs(moveScrollPosition.left - startScrollPosition.left),
        };
        /** @type {?} */
        var deltaX = Math.abs(touchMoveEvent.targetTouches[0].clientX - event.touches[0].clientX) - deltaScroll.left;
        /** @type {?} */
        var deltaY = Math.abs(touchMoveEvent.targetTouches[0].clientY - event.touches[0].clientY) - deltaScroll.top;
        /** @type {?} */
        var deltaTotal = deltaX + deltaY;
        /** @type {?} */
        var longPressConfig = this.touchStartLongPress
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
        var duration = this.timeLongPress.timerEnd - this.timeLongPress.timerBegin;
        if (duration >= longPressConfig.delay) {
            this.disableScroll();
            return true;
        }
        return false;
    };
    /**
     * @private
     * @return {?}
     */
    DraggableDirective.prototype.enableScroll = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.scrollContainer) {
            this.renderer.setStyle(this.scrollContainer.elementRef.nativeElement, 'overflow', '');
        }
        this.renderer.setStyle(this.document.body, 'overflow', '');
    };
    /**
     * @private
     * @return {?}
     */
    DraggableDirective.prototype.disableScroll = /**
     * @private
     * @return {?}
     */
    function () {
        /* istanbul ignore next */
        if (this.scrollContainer) {
            this.renderer.setStyle(this.scrollContainer.elementRef.nativeElement, 'overflow', 'hidden');
        }
        this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
    };
    /**
     * @private
     * @return {?}
     */
    DraggableDirective.prototype.hasScrollbar = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scrollContainer = this.getScrollElement();
        /** @type {?} */
        var containerHasHorizontalScroll = scrollContainer.scrollWidth > scrollContainer.clientWidth;
        /** @type {?} */
        var containerHasVerticalScroll = scrollContainer.scrollHeight > scrollContainer.clientHeight;
        return containerHasHorizontalScroll || containerHasVerticalScroll;
    };
    /** @nocollapse */
    DraggableDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: DraggableHelper },
        { type: NgZone },
        { type: ViewContainerRef },
        { type: DraggableScrollContainerDirective, decorators: [{ type: Optional }] },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
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
DraggableDirective.ɵfac = function DraggableDirective_Factory(t) { return new (t || DraggableDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(DraggableHelper), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(DraggableScrollContainerDirective, 8), ɵngcc0.ɵɵdirectiveInject(DOCUMENT)); };
DraggableDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DraggableDirective, selectors: [["", "mwlDraggable", ""]], inputs: { dragAxis: "dragAxis", dragSnapGrid: "dragSnapGrid", ghostDragEnabled: "ghostDragEnabled", showOriginalElementWhileDragging: "showOriginalElementWhileDragging", dragCursor: "dragCursor", autoScroll: "autoScroll", dropData: "dropData", validateDrag: "validateDrag", dragActiveClass: "dragActiveClass", ghostElementAppendTo: "ghostElementAppendTo", ghostElementTemplate: "ghostElementTemplate", touchStartLongPress: "touchStartLongPress" }, outputs: { dragPointerDown: "dragPointerDown", dragStart: "dragStart", ghostElementCreated: "ghostElementCreated", dragging: "dragging", dragEnd: "dragEnd" }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
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
    return DraggableDirective;
}());
export { DraggableDirective };
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsibmc6L2FuZ3VsYXItZHJhZ2dhYmxlLWRyb3BwYWJsZS9saWIvZHJhZ2dhYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsVUFBVSxFQUNWLFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBRU4sTUFBTSxFQUNOLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxPQUFPLEVBQ1AsVUFBVSxFQUNWLEtBQUssRUFDTCxhQUFhLEVBQ2IsYUFBYSxFQUNiLFNBQVMsR0FDVixNQUFNLE1BQU0sQ0FBQztBQUNkLE9BQU8sRUFDTCxHQUFHLEVBQ0gsUUFBUSxFQUNSLFNBQVMsRUFDVCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFDUixLQUFLLEVBQ0wsTUFBTSxFQUNOLEtBQUssRUFDTCxTQUFTLEdBQ1YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQW1CLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9FLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLFVBQVUsTUFBTSwrQkFBK0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMzRixPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUMvQztBQUNHO0FBQVc7O0FBQWQsaUNBR0M7QUFDRDtBQUNZO0FBQ1AsSUFMSCx3QkFBVTtBQUNaO0FBR0ssSUFISCx3QkFBVTtBQUNaO0FBQ0E7QUFDRztBQUFXO0FBQWQsOEJBR0M7QUFDRDtBQUNZO0FBQ1AsSUFMSCxxQkFBVztBQUNiO0FBR0ksSUFIRixxQkFBVztBQUNiO0FBQ0E7QUFDRztBQUFX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QUFBZ0I7QUFDcEMsSUFEQSxzQ0FBdUM7QUFDM0M7QUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgT25Jbml0LFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkNoYW5nZXMsXG4gIE5nWm9uZSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgSW5qZWN0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgT3B0aW9uYWwsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgU3ViamVjdCxcbiAgT2JzZXJ2YWJsZSxcbiAgbWVyZ2UsXG4gIFJlcGxheVN1YmplY3QsXG4gIGNvbWJpbmVMYXRlc3QsXG4gIGZyb21FdmVudCxcbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBtYXAsXG4gIG1lcmdlTWFwLFxuICB0YWtlVW50aWwsXG4gIHRha2UsXG4gIHRha2VMYXN0LFxuICBwYWlyd2lzZSxcbiAgc2hhcmUsXG4gIGZpbHRlcixcbiAgY291bnQsXG4gIHN0YXJ0V2l0aCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ3VycmVudERyYWdEYXRhLCBEcmFnZ2FibGVIZWxwZXIgfSBmcm9tICcuL2RyYWdnYWJsZS1oZWxwZXIucHJvdmlkZXInO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IGF1dG9TY3JvbGwgZnJvbSAnQG1hdHRsZXdpczkyL2RvbS1hdXRvc2Nyb2xsZXInO1xuaW1wb3J0IHsgRHJhZ2dhYmxlU2Nyb2xsQ29udGFpbmVyRGlyZWN0aXZlIH0gZnJvbSAnLi9kcmFnZ2FibGUtc2Nyb2xsLWNvbnRhaW5lci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzIH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGludGVyZmFjZSBDb29yZGluYXRlcyB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERyYWdBeGlzIHtcbiAgeDogYm9vbGVhbjtcbiAgeTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTbmFwR3JpZCB7XG4gIHg/OiBudW1iZXI7XG4gIHk/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhZ1BvaW50ZXJEb3duRXZlbnQgZXh0ZW5kcyBDb29yZGluYXRlcyB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIERyYWdTdGFydEV2ZW50IHtcbiAgY2FuY2VsRHJhZyQ6IFJlcGxheVN1YmplY3Q8dm9pZD47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhZ01vdmVFdmVudCBleHRlbmRzIENvb3JkaW5hdGVzIHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhZ0VuZEV2ZW50IGV4dGVuZHMgQ29vcmRpbmF0ZXMge1xuICBkcmFnQ2FuY2VsbGVkOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZhbGlkYXRlRHJhZ1BhcmFtcyBleHRlbmRzIENvb3JkaW5hdGVzIHtcbiAgdHJhbnNmb3JtOiB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgfTtcbn1cblxuZXhwb3J0IHR5cGUgVmFsaWRhdGVEcmFnID0gKHBhcmFtczogVmFsaWRhdGVEcmFnUGFyYW1zKSA9PiBib29sZWFuO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvaW50ZXJFdmVudCB7XG4gIGNsaWVudFg6IG51bWJlcjtcbiAgY2xpZW50WTogbnVtYmVyO1xuICBldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGltZUxvbmdQcmVzcyB7XG4gIHRpbWVyQmVnaW46IG51bWJlcjtcbiAgdGltZXJFbmQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHaG9zdEVsZW1lbnRDcmVhdGVkRXZlbnQge1xuICBjbGllbnRYOiBudW1iZXI7XG4gIGNsaWVudFk6IG51bWJlcjtcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttd2xEcmFnZ2FibGVdJyxcbn0pXG5leHBvcnQgY2xhc3MgRHJhZ2dhYmxlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBhbiBvYmplY3Qgb2YgZGF0YSB5b3UgY2FuIHBhc3MgdG8gdGhlIGRyb3AgZXZlbnRcbiAgICovXG4gIEBJbnB1dCgpIGRyb3BEYXRhOiBhbnk7XG5cbiAgLyoqXG4gICAqIFRoZSBheGlzIGFsb25nIHdoaWNoIHRoZSBlbGVtZW50IGlzIGRyYWdnYWJsZVxuICAgKi9cbiAgQElucHV0KCkgZHJhZ0F4aXM6IERyYWdBeGlzID0geyB4OiB0cnVlLCB5OiB0cnVlIH07XG5cbiAgLyoqXG4gICAqIFNuYXAgYWxsIGRyYWdzIHRvIGFuIHggLyB5IGdyaWRcbiAgICovXG4gIEBJbnB1dCgpIGRyYWdTbmFwR3JpZDogU25hcEdyaWQgPSB7fTtcblxuICAvKipcbiAgICogU2hvdyBhIGdob3N0IGVsZW1lbnQgdGhhdCBzaG93cyB0aGUgZHJhZyB3aGVuIGRyYWdnaW5nXG4gICAqL1xuICBASW5wdXQoKSBnaG9zdERyYWdFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogU2hvdyB0aGUgb3JpZ2luYWwgZWxlbWVudCB3aGVuIGdob3N0RHJhZ0VuYWJsZWQgaXMgdHJ1ZVxuICAgKi9cbiAgQElucHV0KCkgc2hvd09yaWdpbmFsRWxlbWVudFdoaWxlRHJhZ2dpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQWxsb3cgY3VzdG9tIGJlaGF2aW91ciB0byBjb250cm9sIHdoZW4gdGhlIGVsZW1lbnQgaXMgZHJhZ2dlZFxuICAgKi9cbiAgQElucHV0KCkgdmFsaWRhdGVEcmFnOiBWYWxpZGF0ZURyYWc7XG5cbiAgLyoqXG4gICAqIFRoZSBjdXJzb3IgdG8gdXNlIHdoZW4gaG92ZXJpbmcgb3ZlciBhIGRyYWdnYWJsZSBlbGVtZW50XG4gICAqL1xuICBASW5wdXQoKSBkcmFnQ3Vyc29yOiBzdHJpbmcgPSAnJztcblxuICAvKipcbiAgICogVGhlIGNzcyBjbGFzcyB0byBhcHBseSB3aGVuIHRoZSBlbGVtZW50IGlzIGJlaW5nIGRyYWdnZWRcbiAgICovXG4gIEBJbnB1dCgpIGRyYWdBY3RpdmVDbGFzczogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgZWxlbWVudCB0aGUgZ2hvc3QgZWxlbWVudCB3aWxsIGJlIGFwcGVuZGVkIHRvLiBEZWZhdWx0IGlzIG5leHQgdG8gdGhlIGRyYWdnZWQgZWxlbWVudFxuICAgKi9cbiAgQElucHV0KCkgZ2hvc3RFbGVtZW50QXBwZW5kVG86IEhUTUxFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBBbiBuZy10ZW1wbGF0ZSB0byBiZSBpbnNlcnRlZCBpbnRvIHRoZSBwYXJlbnQgZWxlbWVudCBvZiB0aGUgZ2hvc3QgZWxlbWVudC4gSXQgd2lsbCBvdmVyd3JpdGUgYW55IGNoaWxkIG5vZGVzLlxuICAgKi9cbiAgQElucHV0KCkgZ2hvc3RFbGVtZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIEFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gd2FpdCBvbiB0b3VjaCBkZXZpY2VzIGJlZm9yZSBzdGFydGluZyB0byBkcmFnIHRoZSBlbGVtZW50IChzbyB0aGF0IHlvdSBjYW4gc2Nyb2xsIHRoZSBwYWdlIGJ5IHRvdWNoaW5nIGEgZHJhZ2dhYmxlIGVsZW1lbnQpXG4gICAqL1xuICBASW5wdXQoKSB0b3VjaFN0YXJ0TG9uZ1ByZXNzOiB7IGRlbGF5OiBudW1iZXI7IGRlbHRhOiBudW1iZXIgfTtcblxuICAvKlxuICAgKiBPcHRpb25zIHVzZWQgdG8gY29udHJvbCB0aGUgYmVoYXZpb3VyIG9mIGF1dG8gc2Nyb2xsaW5nOiBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9kb20tYXV0b3Njcm9sbGVyXG4gICAqL1xuICBASW5wdXQoKSBhdXRvU2Nyb2xsOiB7XG4gICAgbWFyZ2luOlxuICAgICAgfCBudW1iZXJcbiAgICAgIHwgeyB0b3A/OiBudW1iZXI7IGxlZnQ/OiBudW1iZXI7IHJpZ2h0PzogbnVtYmVyOyBib3R0b20/OiBudW1iZXIgfTtcbiAgICBtYXhTcGVlZD86XG4gICAgICB8IG51bWJlclxuICAgICAgfCB7IHRvcD86IG51bWJlcjsgbGVmdD86IG51bWJlcjsgcmlnaHQ/OiBudW1iZXI7IGJvdHRvbT86IG51bWJlciB9O1xuICAgIHNjcm9sbFdoZW5PdXRzaWRlPzogYm9vbGVhbjtcbiAgfSA9IHtcbiAgICBtYXJnaW46IDIwLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgZWxlbWVudCBjYW4gYmUgZHJhZ2dlZCBhbG9uZyBvbmUgYXhpcyBhbmQgaGFzIHRoZSBtb3VzZSBvciBwb2ludGVyIGRldmljZSBwcmVzc2VkIG9uIGl0XG4gICAqL1xuICBAT3V0cHV0KCkgZHJhZ1BvaW50ZXJEb3duID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnUG9pbnRlckRvd25FdmVudD4oKTtcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIGVsZW1lbnQgaGFzIHN0YXJ0ZWQgdG8gYmUgZHJhZ2dlZC5cbiAgICogT25seSBjYWxsZWQgYWZ0ZXIgYXQgbGVhc3Qgb25lIG1vdXNlIG9yIHRvdWNoIG1vdmUgZXZlbnQuXG4gICAqIElmIHlvdSBjYWxsICRldmVudC5jYW5jZWxEcmFnJC5lbWl0KCkgaXQgd2lsbCBjYW5jZWwgdGhlIGN1cnJlbnQgZHJhZ1xuICAgKi9cbiAgQE91dHB1dCgpIGRyYWdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ1N0YXJ0RXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCBhZnRlciB0aGUgZ2hvc3QgZWxlbWVudCBoYXMgYmVlbiBjcmVhdGVkXG4gICAqL1xuICBAT3V0cHV0KCkgZ2hvc3RFbGVtZW50Q3JlYXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8R2hvc3RFbGVtZW50Q3JlYXRlZEV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgZWxlbWVudCBpcyBiZWluZyBkcmFnZ2VkXG4gICAqL1xuICBAT3V0cHV0KCkgZHJhZ2dpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPERyYWdNb3ZlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCBhZnRlciB0aGUgZWxlbWVudCBpcyBkcmFnZ2VkXG4gICAqL1xuICBAT3V0cHV0KCkgZHJhZ0VuZCA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ0VuZEV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwb2ludGVyRG93biQgPSBuZXcgU3ViamVjdDxQb2ludGVyRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHBvaW50ZXJNb3ZlJCA9IG5ldyBTdWJqZWN0PFBvaW50ZXJFdmVudD4oKTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcG9pbnRlclVwJCA9IG5ldyBTdWJqZWN0PFBvaW50ZXJFdmVudD4oKTtcblxuICBwcml2YXRlIGV2ZW50TGlzdGVuZXJTdWJzY3JpcHRpb25zOiB7XG4gICAgbW91c2Vtb3ZlPzogKCkgPT4gdm9pZDtcbiAgICBtb3VzZWRvd24/OiAoKSA9PiB2b2lkO1xuICAgIG1vdXNldXA/OiAoKSA9PiB2b2lkO1xuICAgIG1vdXNlZW50ZXI/OiAoKSA9PiB2b2lkO1xuICAgIG1vdXNlbGVhdmU/OiAoKSA9PiB2b2lkO1xuICAgIHRvdWNoc3RhcnQ/OiAoKSA9PiB2b2lkO1xuICAgIHRvdWNobW92ZT86ICgpID0+IHZvaWQ7XG4gICAgdG91Y2hlbmQ/OiAoKSA9PiB2b2lkO1xuICAgIHRvdWNoY2FuY2VsPzogKCkgPT4gdm9pZDtcbiAgfSA9IHt9O1xuXG4gIHByaXZhdGUgZ2hvc3RFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGw7XG5cbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJpdmF0ZSB0aW1lTG9uZ1ByZXNzOiBUaW1lTG9uZ1ByZXNzID0geyB0aW1lckJlZ2luOiAwLCB0aW1lckVuZDogMCB9O1xuXG4gIHByaXZhdGUgc2Nyb2xsZXI6IHsgZGVzdHJveTogKCkgPT4gdm9pZCB9O1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGRyYWdnYWJsZUhlbHBlcjogRHJhZ2dhYmxlSGVscGVyLFxuICAgIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgIHByaXZhdGUgdmNyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgc2Nyb2xsQ29udGFpbmVyOiBEcmFnZ2FibGVTY3JvbGxDb250YWluZXJEaXJlY3RpdmUsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55XG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgIGNvbnN0IHBvaW50ZXJEcmFnZ2VkJDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5wb2ludGVyRG93biQucGlwZShcbiAgICAgIGZpbHRlcigoKSA9PiB0aGlzLmNhbkRyYWcoKSksXG4gICAgICBtZXJnZU1hcCgocG9pbnRlckRvd25FdmVudDogUG9pbnRlckV2ZW50KSA9PiB7XG4gICAgICAgIC8vIGZpeCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL21hdHRsZXdpczkyL2FuZ3VsYXItZHJhZ2dhYmxlLWRyb3BwYWJsZS9pc3N1ZXMvNjFcbiAgICAgICAgLy8gc3RvcCBtb3VzZSBldmVudHMgcHJvcGFnYXRpbmcgdXAgdGhlIGNoYWluXG4gICAgICAgIGlmIChwb2ludGVyRG93bkV2ZW50LmV2ZW50LnN0b3BQcm9wYWdhdGlvbiAmJiAhdGhpcy5zY3JvbGxDb250YWluZXIpIHtcbiAgICAgICAgICBwb2ludGVyRG93bkV2ZW50LmV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaGFjayB0byBwcmV2ZW50IHRleHQgZ2V0dGluZyBzZWxlY3RlZCBpbiBzYWZhcmkgd2hpbGUgZHJhZ2dpbmdcbiAgICAgICAgY29uc3QgZ2xvYmFsRHJhZ1N0eWxlOiBIVE1MU3R5bGVFbGVtZW50ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdzdHlsZSdcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZ2xvYmFsRHJhZ1N0eWxlLCAndHlwZScsICd0ZXh0L2NzcycpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKFxuICAgICAgICAgIGdsb2JhbERyYWdTdHlsZSxcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmNyZWF0ZVRleHQoYFxuICAgICAgICAgIGJvZHkgKiB7XG4gICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICBgKVxuICAgICAgICApO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChnbG9iYWxEcmFnU3R5bGUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBzdGFydFNjcm9sbFBvc2l0aW9uID0gdGhpcy5nZXRTY3JvbGxQb3NpdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IHNjcm9sbENvbnRhaW5lclNjcm9sbCQgPSBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICBjb25zdCBzY3JvbGxDb250YWluZXIgPSB0aGlzLnNjcm9sbENvbnRhaW5lclxuICAgICAgICAgICAgPyB0aGlzLnNjcm9sbENvbnRhaW5lci5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcbiAgICAgICAgICAgIDogJ3dpbmRvdyc7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIubGlzdGVuKHNjcm9sbENvbnRhaW5lciwgJ3Njcm9sbCcsIChlKSA9PlxuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChlKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pLnBpcGUoXG4gICAgICAgICAgc3RhcnRXaXRoKHN0YXJ0U2Nyb2xsUG9zaXRpb24pLFxuICAgICAgICAgIG1hcCgoKSA9PiB0aGlzLmdldFNjcm9sbFBvc2l0aW9uKCkpXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgY3VycmVudERyYWckID0gbmV3IFN1YmplY3Q8Q3VycmVudERyYWdEYXRhPigpO1xuICAgICAgICBjb25zdCBjYW5jZWxEcmFnJCA9IG5ldyBSZXBsYXlTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kcmFnUG9pbnRlckRvd24ubmV4dCh7IHg6IDAsIHk6IDAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGRyYWdDb21wbGV0ZSQgPSBtZXJnZShcbiAgICAgICAgICB0aGlzLnBvaW50ZXJVcCQsXG4gICAgICAgICAgdGhpcy5wb2ludGVyRG93biQsXG4gICAgICAgICAgY2FuY2VsRHJhZyQsXG4gICAgICAgICAgdGhpcy5kZXN0cm95JFxuICAgICAgICApLnBpcGUoc2hhcmUoKSk7XG5cbiAgICAgICAgY29uc3QgcG9pbnRlck1vdmUgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgICB0aGlzLnBvaW50ZXJNb3ZlJCxcbiAgICAgICAgICBzY3JvbGxDb250YWluZXJTY3JvbGwkLFxuICAgICAgICBdKS5waXBlKFxuICAgICAgICAgIG1hcCgoW3BvaW50ZXJNb3ZlRXZlbnQsIHNjcm9sbF0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGN1cnJlbnREcmFnJCxcbiAgICAgICAgICAgICAgdHJhbnNmb3JtWDogcG9pbnRlck1vdmVFdmVudC5jbGllbnRYIC0gcG9pbnRlckRvd25FdmVudC5jbGllbnRYLFxuICAgICAgICAgICAgICB0cmFuc2Zvcm1ZOiBwb2ludGVyTW92ZUV2ZW50LmNsaWVudFkgLSBwb2ludGVyRG93bkV2ZW50LmNsaWVudFksXG4gICAgICAgICAgICAgIGNsaWVudFg6IHBvaW50ZXJNb3ZlRXZlbnQuY2xpZW50WCxcbiAgICAgICAgICAgICAgY2xpZW50WTogcG9pbnRlck1vdmVFdmVudC5jbGllbnRZLFxuICAgICAgICAgICAgICBzY3JvbGxMZWZ0OiBzY3JvbGwubGVmdCxcbiAgICAgICAgICAgICAgc2Nyb2xsVG9wOiBzY3JvbGwudG9wLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtYXAoKG1vdmVEYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5kcmFnU25hcEdyaWQueCkge1xuICAgICAgICAgICAgICBtb3ZlRGF0YS50cmFuc2Zvcm1YID1cbiAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKG1vdmVEYXRhLnRyYW5zZm9ybVggLyB0aGlzLmRyYWdTbmFwR3JpZC54KSAqXG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnU25hcEdyaWQueDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZHJhZ1NuYXBHcmlkLnkpIHtcbiAgICAgICAgICAgICAgbW92ZURhdGEudHJhbnNmb3JtWSA9XG4gICAgICAgICAgICAgICAgTWF0aC5yb3VuZChtb3ZlRGF0YS50cmFuc2Zvcm1ZIC8gdGhpcy5kcmFnU25hcEdyaWQueSkgKlxuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ1NuYXBHcmlkLnk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtb3ZlRGF0YTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtYXAoKG1vdmVEYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZHJhZ0F4aXMueCkge1xuICAgICAgICAgICAgICBtb3ZlRGF0YS50cmFuc2Zvcm1YID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLmRyYWdBeGlzLnkpIHtcbiAgICAgICAgICAgICAgbW92ZURhdGEudHJhbnNmb3JtWSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtb3ZlRGF0YTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtYXAoKG1vdmVEYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxYID0gbW92ZURhdGEuc2Nyb2xsTGVmdCAtIHN0YXJ0U2Nyb2xsUG9zaXRpb24ubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFkgPSBtb3ZlRGF0YS5zY3JvbGxUb3AgLSBzdGFydFNjcm9sbFBvc2l0aW9uLnRvcDtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLm1vdmVEYXRhLFxuICAgICAgICAgICAgICB4OiBtb3ZlRGF0YS50cmFuc2Zvcm1YICsgc2Nyb2xsWCxcbiAgICAgICAgICAgICAgeTogbW92ZURhdGEudHJhbnNmb3JtWSArIHNjcm9sbFksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZpbHRlcihcbiAgICAgICAgICAgICh7IHgsIHksIHRyYW5zZm9ybVgsIHRyYW5zZm9ybVkgfSkgPT5cbiAgICAgICAgICAgICAgIXRoaXMudmFsaWRhdGVEcmFnIHx8XG4gICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVEcmFnKHtcbiAgICAgICAgICAgICAgICB4LFxuICAgICAgICAgICAgICAgIHksXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB7IHg6IHRyYW5zZm9ybVgsIHk6IHRyYW5zZm9ybVkgfSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICApLFxuICAgICAgICAgIHRha2VVbnRpbChkcmFnQ29tcGxldGUkKSxcbiAgICAgICAgICBzaGFyZSgpXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgZHJhZ1N0YXJ0ZWQkID0gcG9pbnRlck1vdmUucGlwZSh0YWtlKDEpLCBzaGFyZSgpKTtcbiAgICAgICAgY29uc3QgZHJhZ0VuZGVkJCA9IHBvaW50ZXJNb3ZlLnBpcGUodGFrZUxhc3QoMSksIHNoYXJlKCkpO1xuXG4gICAgICAgIGRyYWdTdGFydGVkJC5zdWJzY3JpYmUoKHsgY2xpZW50WCwgY2xpZW50WSwgeCwgeSB9KSA9PiB7XG4gICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRyYWdTdGFydC5uZXh0KHsgY2FuY2VsRHJhZyQgfSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB0aGlzLnNjcm9sbGVyID0gYXV0b1Njcm9sbChcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgdGhpcy5zY3JvbGxDb250YWluZXJcbiAgICAgICAgICAgICAgICA/IHRoaXMuc2Nyb2xsQ29udGFpbmVyLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFxuICAgICAgICAgICAgICAgIDogdGhpcy5kb2N1bWVudC5kZWZhdWx0VmlldyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC4uLnRoaXMuYXV0b1Njcm9sbCxcbiAgICAgICAgICAgICAgYXV0b1Njcm9sbCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICAgIGFkZENsYXNzKHRoaXMucmVuZGVyZXIsIHRoaXMuZWxlbWVudCwgdGhpcy5kcmFnQWN0aXZlQ2xhc3MpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuZ2hvc3REcmFnRW5hYmxlZCkge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3QgY2xvbmUgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbG9uZU5vZGUoXG4gICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2hvd09yaWdpbmFsRWxlbWVudFdoaWxlRHJhZ2dpbmcpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgICAgICAndmlzaWJpbGl0eScsXG4gICAgICAgICAgICAgICAgJ2hpZGRlbidcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZ2hvc3RFbGVtZW50QXBwZW5kVG8pIHtcbiAgICAgICAgICAgICAgdGhpcy5naG9zdEVsZW1lbnRBcHBlbmRUby5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlIS5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICAgICAgY2xvbmUsXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQubmV4dFNpYmxpbmdcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5naG9zdEVsZW1lbnQgPSBjbG9uZTtcblxuICAgICAgICAgICAgdGhpcy5kb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9IHRoaXMuZHJhZ0N1cnNvcjtcblxuICAgICAgICAgICAgdGhpcy5zZXRFbGVtZW50U3R5bGVzKGNsb25lLCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgICB0b3A6IGAke3JlY3QudG9wfXB4YCxcbiAgICAgICAgICAgICAgbGVmdDogYCR7cmVjdC5sZWZ0fXB4YCxcbiAgICAgICAgICAgICAgd2lkdGg6IGAke3JlY3Qud2lkdGh9cHhgLFxuICAgICAgICAgICAgICBoZWlnaHQ6IGAke3JlY3QuaGVpZ2h0fXB4YCxcbiAgICAgICAgICAgICAgY3Vyc29yOiB0aGlzLmRyYWdDdXJzb3IsXG4gICAgICAgICAgICAgIG1hcmdpbjogJzAnLFxuICAgICAgICAgICAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtJyxcbiAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmdob3N0RWxlbWVudFRlbXBsYXRlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZpZXdSZWYgPSB0aGlzLnZjci5jcmVhdGVFbWJlZGRlZFZpZXcoXG4gICAgICAgICAgICAgICAgdGhpcy5naG9zdEVsZW1lbnRUZW1wbGF0ZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBjbG9uZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgdmlld1JlZi5yb290Tm9kZXNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChub2RlKSA9PiBub2RlIGluc3RhbmNlb2YgTm9kZSlcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY2xvbmUuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGRyYWdFbmRlZCQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnZjci5yZW1vdmUodGhpcy52Y3IuaW5kZXhPZih2aWV3UmVmKSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5naG9zdEVsZW1lbnRDcmVhdGVkLmVtaXQoe1xuICAgICAgICAgICAgICAgIGNsaWVudFg6IGNsaWVudFggLSB4LFxuICAgICAgICAgICAgICAgIGNsaWVudFk6IGNsaWVudFkgLSB5LFxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGNsb25lLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkcmFnRW5kZWQkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgIGNsb25lLnBhcmVudEVsZW1lbnQhLnJlbW92ZUNoaWxkKGNsb25lKTtcbiAgICAgICAgICAgICAgdGhpcy5naG9zdEVsZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JyxcbiAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5kcmFnZ2FibGVIZWxwZXIuY3VycmVudERyYWcubmV4dChjdXJyZW50RHJhZyQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkcmFnRW5kZWQkXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBtZXJnZU1hcCgoZHJhZ0VuZERhdGEpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZHJhZ0VuZERhdGEkID0gY2FuY2VsRHJhZyQucGlwZShcbiAgICAgICAgICAgICAgICBjb3VudCgpLFxuICAgICAgICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgICAgICAgbWFwKChjYWxsZWRDb3VudCkgPT4gKHtcbiAgICAgICAgICAgICAgICAgIC4uLmRyYWdFbmREYXRhLFxuICAgICAgICAgICAgICAgICAgZHJhZ0NhbmNlbGxlZDogY2FsbGVkQ291bnQgPiAwLFxuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBjYW5jZWxEcmFnJC5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICByZXR1cm4gZHJhZ0VuZERhdGEkO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgICAgLnN1YnNjcmliZSgoeyB4LCB5LCBkcmFnQ2FuY2VsbGVkIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsZXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZHJhZ0VuZC5uZXh0KHsgeCwgeSwgZHJhZ0NhbmNlbGxlZCB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5yZW5kZXJlciwgdGhpcy5lbGVtZW50LCB0aGlzLmRyYWdBY3RpdmVDbGFzcyk7XG4gICAgICAgICAgICBjdXJyZW50RHJhZyQuY29tcGxldGUoKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICBtZXJnZShkcmFnQ29tcGxldGUkLCBkcmFnRW5kZWQkKVxuICAgICAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmRvY3VtZW50LmhlYWQucmVtb3ZlQ2hpbGQoZ2xvYmFsRHJhZ1N0eWxlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwb2ludGVyTW92ZTtcbiAgICAgIH0pLFxuICAgICAgc2hhcmUoKVxuICAgICk7XG5cbiAgICBtZXJnZShcbiAgICAgIHBvaW50ZXJEcmFnZ2VkJC5waXBlKFxuICAgICAgICB0YWtlKDEpLFxuICAgICAgICBtYXAoKHZhbHVlKSA9PiBbLCB2YWx1ZV0pXG4gICAgICApLFxuICAgICAgcG9pbnRlckRyYWdnZWQkLnBpcGUocGFpcndpc2UoKSlcbiAgICApXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKChbcHJldmlvdXMsIG5leHRdKSA9PiB7XG4gICAgICAgICAgaWYgKCFwcmV2aW91cykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBwcmV2aW91cy54ICE9PSBuZXh0LnggfHwgcHJldmlvdXMueSAhPT0gbmV4dC55O1xuICAgICAgICB9KSxcbiAgICAgICAgbWFwKChbcHJldmlvdXMsIG5leHRdKSA9PiBuZXh0KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHsgeCwgeSwgY3VycmVudERyYWckLCBjbGllbnRYLCBjbGllbnRZLCB0cmFuc2Zvcm1YLCB0cmFuc2Zvcm1ZIH0pID0+IHtcbiAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dpbmcubmV4dCh7IHgsIHkgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdob3N0RWxlbWVudCkge1xuICAgICAgICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHt0cmFuc2Zvcm1YfXB4LCAke3RyYW5zZm9ybVl9cHgsIDBweClgO1xuICAgICAgICAgICAgICB0aGlzLnNldEVsZW1lbnRTdHlsZXModGhpcy5naG9zdEVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0sXG4gICAgICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogdHJhbnNmb3JtLFxuICAgICAgICAgICAgICAgICctbXMtdHJhbnNmb3JtJzogdHJhbnNmb3JtLFxuICAgICAgICAgICAgICAgICctbW96LXRyYW5zZm9ybSc6IHRyYW5zZm9ybSxcbiAgICAgICAgICAgICAgICAnLW8tdHJhbnNmb3JtJzogdHJhbnNmb3JtLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjdXJyZW50RHJhZyQubmV4dCh7XG4gICAgICAgICAgICBjbGllbnRYLFxuICAgICAgICAgICAgY2xpZW50WSxcbiAgICAgICAgICAgIGRyb3BEYXRhOiB0aGlzLmRyb3BEYXRhLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICApO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmRyYWdBeGlzKSB7XG4gICAgICB0aGlzLmNoZWNrRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLnBvaW50ZXJEb3duJC5jb21wbGV0ZSgpO1xuICAgIHRoaXMucG9pbnRlck1vdmUkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5wb2ludGVyVXAkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrRXZlbnRMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgY29uc3QgY2FuRHJhZzogYm9vbGVhbiA9IHRoaXMuY2FuRHJhZygpO1xuICAgIGNvbnN0IGhhc0V2ZW50TGlzdGVuZXJzOiBib29sZWFuID1cbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMpLmxlbmd0aCA+IDA7XG5cbiAgICBpZiAoY2FuRHJhZyAmJiAhaGFzRXZlbnRMaXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMubW91c2Vkb3duID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgJ21vdXNlZG93bicsXG4gICAgICAgICAgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy5tb3VzZXVwID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgJ2RvY3VtZW50JyxcbiAgICAgICAgICAnbW91c2V1cCcsXG4gICAgICAgICAgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uTW91c2VVcChldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMudG91Y2hzdGFydCA9IHRoaXMucmVuZGVyZXIubGlzdGVuKFxuICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICd0b3VjaHN0YXJ0JyxcbiAgICAgICAgICAoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaFN0YXJ0KGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy50b3VjaGVuZCA9IHRoaXMucmVuZGVyZXIubGlzdGVuKFxuICAgICAgICAgICdkb2N1bWVudCcsXG4gICAgICAgICAgJ3RvdWNoZW5kJyxcbiAgICAgICAgICAoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaEVuZChldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMudG91Y2hjYW5jZWwgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbihcbiAgICAgICAgICAnZG9jdW1lbnQnLFxuICAgICAgICAgICd0b3VjaGNhbmNlbCcsXG4gICAgICAgICAgKGV2ZW50OiBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hFbmQoZXZlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJTdWJzY3JpcHRpb25zLm1vdXNlZW50ZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbihcbiAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAnbW91c2VlbnRlcicsXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbk1vdXNlRW50ZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy5tb3VzZWxlYXZlID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgJ21vdXNlbGVhdmUnLFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25Nb3VzZUxlYXZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICghY2FuRHJhZyAmJiBoYXNFdmVudExpc3RlbmVycykge1xuICAgICAgdGhpcy51bnN1YnNjcmliZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvbk1vdXNlRG93bihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudC5idXR0b24gPT09IDApIHtcbiAgICAgIGlmICghdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy5tb3VzZW1vdmUpIHtcbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy5tb3VzZW1vdmUgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbihcbiAgICAgICAgICAnZG9jdW1lbnQnLFxuICAgICAgICAgICdtb3VzZW1vdmUnLFxuICAgICAgICAgIChtb3VzZU1vdmVFdmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wb2ludGVyTW92ZSQubmV4dCh7XG4gICAgICAgICAgICAgIGV2ZW50OiBtb3VzZU1vdmVFdmVudCxcbiAgICAgICAgICAgICAgY2xpZW50WDogbW91c2VNb3ZlRXZlbnQuY2xpZW50WCxcbiAgICAgICAgICAgICAgY2xpZW50WTogbW91c2VNb3ZlRXZlbnQuY2xpZW50WSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucG9pbnRlckRvd24kLm5leHQoe1xuICAgICAgICBldmVudCxcbiAgICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb25Nb3VzZVVwKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMCkge1xuICAgICAgaWYgKHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMubW91c2Vtb3ZlKSB7XG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMubW91c2Vtb3ZlKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50TGlzdGVuZXJTdWJzY3JpcHRpb25zLm1vdXNlbW92ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMucG9pbnRlclVwJC5uZXh0KHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uVG91Y2hTdGFydChldmVudDogVG91Y2hFdmVudCk6IHZvaWQge1xuICAgIGxldCBzdGFydFNjcm9sbFBvc2l0aW9uOiBhbnk7XG4gICAgbGV0IGlzRHJhZ0FjdGl2YXRlZDogYm9vbGVhbjtcbiAgICBsZXQgaGFzQ29udGFpbmVyU2Nyb2xsYmFyOiBib29sZWFuO1xuICAgIGlmIChcbiAgICAgICh0aGlzLnNjcm9sbENvbnRhaW5lciAmJiB0aGlzLnNjcm9sbENvbnRhaW5lci5hY3RpdmVMb25nUHJlc3NEcmFnKSB8fFxuICAgICAgdGhpcy50b3VjaFN0YXJ0TG9uZ1ByZXNzXG4gICAgKSB7XG4gICAgICB0aGlzLnRpbWVMb25nUHJlc3MudGltZXJCZWdpbiA9IERhdGUubm93KCk7XG4gICAgICBpc0RyYWdBY3RpdmF0ZWQgPSBmYWxzZTtcbiAgICAgIGhhc0NvbnRhaW5lclNjcm9sbGJhciA9IHRoaXMuaGFzU2Nyb2xsYmFyKCk7XG4gICAgICBzdGFydFNjcm9sbFBvc2l0aW9uID0gdGhpcy5nZXRTY3JvbGxQb3NpdGlvbigpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy50b3VjaG1vdmUpIHtcbiAgICAgIGNvbnN0IGNvbnRleHRNZW51TGlzdGVuZXIgPSBmcm9tRXZlbnQ8RXZlbnQ+KFxuICAgICAgICB0aGlzLmRvY3VtZW50LFxuICAgICAgICAnY29udGV4dG1lbnUnXG4gICAgICApLnN1YnNjcmliZSgoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgdG91Y2hNb3ZlTGlzdGVuZXIgPSBmcm9tRXZlbnQ8VG91Y2hFdmVudD4oXG4gICAgICAgIHRoaXMuZG9jdW1lbnQsXG4gICAgICAgICd0b3VjaG1vdmUnLFxuICAgICAgICB7XG4gICAgICAgICAgcGFzc2l2ZTogZmFsc2UsXG4gICAgICAgIH1cbiAgICAgICkuc3Vic2NyaWJlKCh0b3VjaE1vdmVFdmVudCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgKCh0aGlzLnNjcm9sbENvbnRhaW5lciAmJiB0aGlzLnNjcm9sbENvbnRhaW5lci5hY3RpdmVMb25nUHJlc3NEcmFnKSB8fFxuICAgICAgICAgICAgdGhpcy50b3VjaFN0YXJ0TG9uZ1ByZXNzKSAmJlxuICAgICAgICAgICFpc0RyYWdBY3RpdmF0ZWQgJiZcbiAgICAgICAgICBoYXNDb250YWluZXJTY3JvbGxiYXJcbiAgICAgICAgKSB7XG4gICAgICAgICAgaXNEcmFnQWN0aXZhdGVkID0gdGhpcy5zaG91bGRCZWdpbkRyYWcoXG4gICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgIHRvdWNoTW92ZUV2ZW50LFxuICAgICAgICAgICAgc3RhcnRTY3JvbGxQb3NpdGlvblxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgICgoIXRoaXMuc2Nyb2xsQ29udGFpbmVyIHx8XG4gICAgICAgICAgICAhdGhpcy5zY3JvbGxDb250YWluZXIuYWN0aXZlTG9uZ1ByZXNzRHJhZykgJiZcbiAgICAgICAgICAgICF0aGlzLnRvdWNoU3RhcnRMb25nUHJlc3MpIHx8XG4gICAgICAgICAgIWhhc0NvbnRhaW5lclNjcm9sbGJhciB8fFxuICAgICAgICAgIGlzRHJhZ0FjdGl2YXRlZFxuICAgICAgICApIHtcbiAgICAgICAgICB0b3VjaE1vdmVFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMucG9pbnRlck1vdmUkLm5leHQoe1xuICAgICAgICAgICAgZXZlbnQ6IHRvdWNoTW92ZUV2ZW50LFxuICAgICAgICAgICAgY2xpZW50WDogdG91Y2hNb3ZlRXZlbnQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRYLFxuICAgICAgICAgICAgY2xpZW50WTogdG91Y2hNb3ZlRXZlbnQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRZLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy50b3VjaG1vdmUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnRleHRNZW51TGlzdGVuZXIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdG91Y2hNb3ZlTGlzdGVuZXIudW5zdWJzY3JpYmUoKTtcbiAgICAgIH07XG4gICAgfVxuICAgIHRoaXMucG9pbnRlckRvd24kLm5leHQoe1xuICAgICAgZXZlbnQsXG4gICAgICBjbGllbnRYOiBldmVudC50b3VjaGVzWzBdLmNsaWVudFgsXG4gICAgICBjbGllbnRZOiBldmVudC50b3VjaGVzWzBdLmNsaWVudFksXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG9uVG91Y2hFbmQoZXZlbnQ6IFRvdWNoRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy50b3VjaG1vdmUpIHtcbiAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMudG91Y2htb3ZlKCk7XG4gICAgICBkZWxldGUgdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy50b3VjaG1vdmU7XG5cbiAgICAgIGlmIChcbiAgICAgICAgKHRoaXMuc2Nyb2xsQ29udGFpbmVyICYmIHRoaXMuc2Nyb2xsQ29udGFpbmVyLmFjdGl2ZUxvbmdQcmVzc0RyYWcpIHx8XG4gICAgICAgIHRoaXMudG91Y2hTdGFydExvbmdQcmVzc1xuICAgICAgKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlU2Nyb2xsKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucG9pbnRlclVwJC5uZXh0KHtcbiAgICAgIGV2ZW50LFxuICAgICAgY2xpZW50WDogZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCxcbiAgICAgIGNsaWVudFk6IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFksXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG9uTW91c2VFbnRlcigpOiB2b2lkIHtcbiAgICB0aGlzLnNldEN1cnNvcih0aGlzLmRyYWdDdXJzb3IpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbk1vdXNlTGVhdmUoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDdXJzb3IoJycpO1xuICB9XG5cbiAgcHJpdmF0ZSBjYW5EcmFnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRyYWdBeGlzLnggfHwgdGhpcy5kcmFnQXhpcy55O1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDdXJzb3IodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy5tb3VzZW1vdmUpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdjdXJzb3InLCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1bnN1YnNjcmliZUV2ZW50TGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIE9iamVjdC5rZXlzKHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMpLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICh0aGlzIGFzIGFueSkuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnNbdHlwZV0oKTtcbiAgICAgIGRlbGV0ZSAodGhpcyBhcyBhbnkpLmV2ZW50TGlzdGVuZXJTdWJzY3JpcHRpb25zW3R5cGVdO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRFbGVtZW50U3R5bGVzKFxuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIHN0eWxlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfVxuICApIHtcbiAgICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShlbGVtZW50LCBrZXksIHN0eWxlc1trZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2Nyb2xsRWxlbWVudCgpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxDb250YWluZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjcm9sbENvbnRhaW5lci5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmRvY3VtZW50LmJvZHk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRTY3JvbGxQb3NpdGlvbigpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxDb250YWluZXIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogdGhpcy5zY3JvbGxDb250YWluZXIuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCxcbiAgICAgICAgbGVmdDogdGhpcy5zY3JvbGxDb250YWluZXIuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b3A6IHdpbmRvdy5wYWdlWU9mZnNldCB8fCB0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AsXG4gICAgICAgIGxlZnQ6IHdpbmRvdy5wYWdlWE9mZnNldCB8fCB0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNob3VsZEJlZ2luRHJhZyhcbiAgICBldmVudDogVG91Y2hFdmVudCxcbiAgICB0b3VjaE1vdmVFdmVudDogVG91Y2hFdmVudCxcbiAgICBzdGFydFNjcm9sbFBvc2l0aW9uOiB7IHRvcDogbnVtYmVyOyBsZWZ0OiBudW1iZXIgfVxuICApOiBib29sZWFuIHtcbiAgICBjb25zdCBtb3ZlU2Nyb2xsUG9zaXRpb24gPSB0aGlzLmdldFNjcm9sbFBvc2l0aW9uKCk7XG4gICAgY29uc3QgZGVsdGFTY3JvbGwgPSB7XG4gICAgICB0b3A6IE1hdGguYWJzKG1vdmVTY3JvbGxQb3NpdGlvbi50b3AgLSBzdGFydFNjcm9sbFBvc2l0aW9uLnRvcCksXG4gICAgICBsZWZ0OiBNYXRoLmFicyhtb3ZlU2Nyb2xsUG9zaXRpb24ubGVmdCAtIHN0YXJ0U2Nyb2xsUG9zaXRpb24ubGVmdCksXG4gICAgfTtcbiAgICBjb25zdCBkZWx0YVggPVxuICAgICAgTWF0aC5hYnMoXG4gICAgICAgIHRvdWNoTW92ZUV2ZW50LnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WCAtIGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WFxuICAgICAgKSAtIGRlbHRhU2Nyb2xsLmxlZnQ7XG4gICAgY29uc3QgZGVsdGFZID1cbiAgICAgIE1hdGguYWJzKFxuICAgICAgICB0b3VjaE1vdmVFdmVudC50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFkgLSBldmVudC50b3VjaGVzWzBdLmNsaWVudFlcbiAgICAgICkgLSBkZWx0YVNjcm9sbC50b3A7XG4gICAgY29uc3QgZGVsdGFUb3RhbCA9IGRlbHRhWCArIGRlbHRhWTtcbiAgICBjb25zdCBsb25nUHJlc3NDb25maWcgPSB0aGlzLnRvdWNoU3RhcnRMb25nUHJlc3NcbiAgICAgID8gdGhpcy50b3VjaFN0YXJ0TG9uZ1ByZXNzXG4gICAgICA6IC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIHtcbiAgICAgICAgICBkZWx0YTogdGhpcy5zY3JvbGxDb250YWluZXIubG9uZ1ByZXNzQ29uZmlnLmRlbHRhLFxuICAgICAgICAgIGRlbGF5OiB0aGlzLnNjcm9sbENvbnRhaW5lci5sb25nUHJlc3NDb25maWcuZHVyYXRpb24sXG4gICAgICAgIH07XG4gICAgaWYgKFxuICAgICAgZGVsdGFUb3RhbCA+IGxvbmdQcmVzc0NvbmZpZy5kZWx0YSB8fFxuICAgICAgZGVsdGFTY3JvbGwudG9wID4gMCB8fFxuICAgICAgZGVsdGFTY3JvbGwubGVmdCA+IDBcbiAgICApIHtcbiAgICAgIHRoaXMudGltZUxvbmdQcmVzcy50aW1lckJlZ2luID0gRGF0ZS5ub3coKTtcbiAgICB9XG4gICAgdGhpcy50aW1lTG9uZ1ByZXNzLnRpbWVyRW5kID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBkdXJhdGlvbiA9XG4gICAgICB0aGlzLnRpbWVMb25nUHJlc3MudGltZXJFbmQgLSB0aGlzLnRpbWVMb25nUHJlc3MudGltZXJCZWdpbjtcbiAgICBpZiAoZHVyYXRpb24gPj0gbG9uZ1ByZXNzQ29uZmlnLmRlbGF5KSB7XG4gICAgICB0aGlzLmRpc2FibGVTY3JvbGwoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIGVuYWJsZVNjcm9sbCgpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxDb250YWluZXIpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgIHRoaXMuc2Nyb2xsQ29udGFpbmVyLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICAgJ292ZXJmbG93JyxcbiAgICAgICAgJydcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5kb2N1bWVudC5ib2R5LCAnb3ZlcmZsb3cnLCAnJyk7XG4gIH1cblxuICBwcml2YXRlIGRpc2FibGVTY3JvbGwoKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAodGhpcy5zY3JvbGxDb250YWluZXIpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgIHRoaXMuc2Nyb2xsQ29udGFpbmVyLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICAgJ292ZXJmbG93JyxcbiAgICAgICAgJ2hpZGRlbidcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5kb2N1bWVudC5ib2R5LCAnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG4gIH1cblxuICBwcml2YXRlIGhhc1Njcm9sbGJhcigpOiBib29sZWFuIHtcbiAgICBjb25zdCBzY3JvbGxDb250YWluZXIgPSB0aGlzLmdldFNjcm9sbEVsZW1lbnQoKTtcbiAgICBjb25zdCBjb250YWluZXJIYXNIb3Jpem9udGFsU2Nyb2xsID1cbiAgICAgIHNjcm9sbENvbnRhaW5lci5zY3JvbGxXaWR0aCA+IHNjcm9sbENvbnRhaW5lci5jbGllbnRXaWR0aDtcbiAgICBjb25zdCBjb250YWluZXJIYXNWZXJ0aWNhbFNjcm9sbCA9XG4gICAgICBzY3JvbGxDb250YWluZXIuc2Nyb2xsSGVpZ2h0ID4gc2Nyb2xsQ29udGFpbmVyLmNsaWVudEhlaWdodDtcbiAgICByZXR1cm4gY29udGFpbmVySGFzSG9yaXpvbnRhbFNjcm9sbCB8fCBjb250YWluZXJIYXNWZXJ0aWNhbFNjcm9sbDtcbiAgfVxufVxuIl19