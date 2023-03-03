/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Renderer2, ElementRef, Output, Input, EventEmitter, NgZone, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subject, Observable, merge, EMPTY } from 'rxjs';
import { map, mergeMap, takeUntil, filter, pairwise, take, share, auditTime, switchMap, startWith, tap } from 'rxjs/operators';
/**
 * @record
 */
import * as ɵngcc0 from '@angular/core';
function PointerEventCoordinate() { }
if (false) {
    /** @type {?} */
    PointerEventCoordinate.prototype.clientX;
    /** @type {?} */
    PointerEventCoordinate.prototype.clientY;
    /** @type {?} */
    PointerEventCoordinate.prototype.event;
}
/**
 * @record
 */
function Coordinate() { }
if (false) {
    /** @type {?} */
    Coordinate.prototype.x;
    /** @type {?} */
    Coordinate.prototype.y;
}
/**
 * @param {?} value1
 * @param {?} value2
 * @param {?=} precision
 * @return {?}
 */
function isNumberCloseTo(value1, value2, precision = 3) {
    /** @type {?} */
    const diff = Math.abs(value1 - value2);
    return diff < precision;
}
/**
 * @param {?} startingRect
 * @param {?} edges
 * @param {?} clientX
 * @param {?} clientY
 * @return {?}
 */
function getNewBoundingRectangle(startingRect, edges, clientX, clientY) {
    /** @type {?} */
    const newBoundingRect = {
        top: startingRect.top,
        bottom: startingRect.bottom,
        left: startingRect.left,
        right: startingRect.right
    };
    if (edges.top) {
        newBoundingRect.top += clientY;
    }
    if (edges.bottom) {
        newBoundingRect.bottom += clientY;
    }
    if (edges.left) {
        newBoundingRect.left += clientX;
    }
    if (edges.right) {
        newBoundingRect.right += clientX;
    }
    newBoundingRect.height = newBoundingRect.bottom - newBoundingRect.top;
    newBoundingRect.width = newBoundingRect.right - newBoundingRect.left;
    return newBoundingRect;
}
/**
 * @param {?} element
 * @param {?} ghostElementPositioning
 * @return {?}
 */
function getElementRect(element, ghostElementPositioning) {
    /** @type {?} */
    let translateX = 0;
    /** @type {?} */
    let translateY = 0;
    /** @type {?} */
    const style = element.nativeElement.style;
    /** @type {?} */
    const transformProperties = [
        'transform',
        '-ms-transform',
        '-moz-transform',
        '-o-transform'
    ];
    /** @type {?} */
    const transform = transformProperties
        .map(property => style[property])
        .find(value => !!value);
    if (transform && transform.includes('translate')) {
        translateX = transform.replace(/.*translate3?d?\((-?[0-9]*)px, (-?[0-9]*)px.*/, '$1');
        translateY = transform.replace(/.*translate3?d?\((-?[0-9]*)px, (-?[0-9]*)px.*/, '$2');
    }
    if (ghostElementPositioning === 'absolute') {
        return {
            height: element.nativeElement.offsetHeight,
            width: element.nativeElement.offsetWidth,
            top: element.nativeElement.offsetTop - translateY,
            bottom: element.nativeElement.offsetHeight +
                element.nativeElement.offsetTop -
                translateY,
            left: element.nativeElement.offsetLeft - translateX,
            right: element.nativeElement.offsetWidth +
                element.nativeElement.offsetLeft -
                translateX
        };
    }
    else {
        /** @type {?} */
        const boundingRect = element.nativeElement.getBoundingClientRect();
        return {
            height: boundingRect.height,
            width: boundingRect.width,
            top: boundingRect.top - translateY,
            bottom: boundingRect.bottom - translateY,
            left: boundingRect.left - translateX,
            right: boundingRect.right - translateX,
            scrollTop: element.nativeElement.scrollTop,
            scrollLeft: element.nativeElement.scrollLeft
        };
    }
}
/**
 * @param {?} __0
 * @return {?}
 */
function isWithinBoundingY({ clientY, rect }) {
    return clientY >= rect.top && clientY <= rect.bottom;
}
/**
 * @param {?} __0
 * @return {?}
 */
function isWithinBoundingX({ clientX, rect }) {
    return clientX >= rect.left && clientX <= rect.right;
}
/**
 * @param {?} __0
 * @return {?}
 */
function getResizeEdges({ clientX, clientY, elm, allowedEdges, cursorPrecision }) {
    /** @type {?} */
    const elmPosition = elm.nativeElement.getBoundingClientRect();
    /** @type {?} */
    const edges = {};
    if (allowedEdges.left &&
        isNumberCloseTo(clientX, elmPosition.left, cursorPrecision) &&
        isWithinBoundingY({ clientY, rect: elmPosition })) {
        edges.left = true;
    }
    if (allowedEdges.right &&
        isNumberCloseTo(clientX, elmPosition.right, cursorPrecision) &&
        isWithinBoundingY({ clientY, rect: elmPosition })) {
        edges.right = true;
    }
    if (allowedEdges.top &&
        isNumberCloseTo(clientY, elmPosition.top, cursorPrecision) &&
        isWithinBoundingX({ clientX, rect: elmPosition })) {
        edges.top = true;
    }
    if (allowedEdges.bottom &&
        isNumberCloseTo(clientY, elmPosition.bottom, cursorPrecision) &&
        isWithinBoundingX({ clientX, rect: elmPosition })) {
        edges.bottom = true;
    }
    return edges;
}
/**
 * @record
 */
export function ResizeCursors() { }
if (false) {
    /** @type {?} */
    ResizeCursors.prototype.topLeft;
    /** @type {?} */
    ResizeCursors.prototype.topRight;
    /** @type {?} */
    ResizeCursors.prototype.bottomLeft;
    /** @type {?} */
    ResizeCursors.prototype.bottomRight;
    /** @type {?} */
    ResizeCursors.prototype.leftOrRight;
    /** @type {?} */
    ResizeCursors.prototype.topOrBottom;
}
/** @type {?} */
const DEFAULT_RESIZE_CURSORS = Object.freeze({
    topLeft: 'nw-resize',
    topRight: 'ne-resize',
    bottomLeft: 'sw-resize',
    bottomRight: 'se-resize',
    leftOrRight: 'col-resize',
    topOrBottom: 'row-resize'
});
/**
 * @param {?} edges
 * @param {?} cursors
 * @return {?}
 */
function getResizeCursor(edges, cursors) {
    if (edges.left && edges.top) {
        return cursors.topLeft;
    }
    else if (edges.right && edges.top) {
        return cursors.topRight;
    }
    else if (edges.left && edges.bottom) {
        return cursors.bottomLeft;
    }
    else if (edges.right && edges.bottom) {
        return cursors.bottomRight;
    }
    else if (edges.left || edges.right) {
        return cursors.leftOrRight;
    }
    else if (edges.top || edges.bottom) {
        return cursors.topOrBottom;
    }
    else {
        return '';
    }
}
/**
 * @param {?} __0
 * @return {?}
 */
function getEdgesDiff({ edges, initialRectangle, newRectangle }) {
    /** @type {?} */
    const edgesDiff = {};
    Object.keys(edges).forEach(edge => {
        edgesDiff[edge] = (newRectangle[edge] || 0) - (initialRectangle[edge] || 0);
    });
    return edgesDiff;
}
/** @type {?} */
const RESIZE_ACTIVE_CLASS = 'resize-active';
/** @type {?} */
const RESIZE_LEFT_HOVER_CLASS = 'resize-left-hover';
/** @type {?} */
const RESIZE_RIGHT_HOVER_CLASS = 'resize-right-hover';
/** @type {?} */
const RESIZE_TOP_HOVER_CLASS = 'resize-top-hover';
/** @type {?} */
const RESIZE_BOTTOM_HOVER_CLASS = 'resize-bottom-hover';
/** @type {?} */
const RESIZE_GHOST_ELEMENT_CLASS = 'resize-ghost-element';
/** @type {?} */
export const MOUSE_MOVE_THROTTLE_MS = 50;
/**
 * Place this on an element to make it resizable. For example:
 *
 * ```html
 * <div
 *   mwlResizable
 *   [resizeEdges]="{bottom: true, right: true, top: true, left: true}"
 *   [enableGhostResize]="true">
 * </div>
 * ```
 */
export class ResizableDirective {
    /**
     * @hidden
     * @param {?} platformId
     * @param {?} renderer
     * @param {?} elm
     * @param {?} zone
     */
    constructor(platformId, renderer, elm, zone) {
        this.platformId = platformId;
        this.renderer = renderer;
        this.elm = elm;
        this.zone = zone;
        /**
         * The edges that an element can be resized from. Pass an object like `{top: true, bottom: false}`. By default no edges can be resized.
         * @deprecated use a resize handle instead that positions itself to the side of the element you would like to resize
         */
        this.resizeEdges = {};
        /**
         * Set to `true` to enable a temporary resizing effect of the element in between the `resizeStart` and `resizeEnd` events.
         */
        this.enableGhostResize = false;
        /**
         * A snap grid that resize events will be locked to.
         *
         * e.g. to only allow the element to be resized every 10px set it to `{left: 10, right: 10}`
         */
        this.resizeSnapGrid = {};
        /**
         * The mouse cursors that will be set on the resize edges
         */
        this.resizeCursors = DEFAULT_RESIZE_CURSORS;
        /**
         * Mouse over thickness to active cursor.
         * @deprecated invalid when you migrate to use resize handles instead of setting resizeEdges on the element
         */
        this.resizeCursorPrecision = 3;
        /**
         * Define the positioning of the ghost element (can be fixed or absolute)
         */
        this.ghostElementPositioning = 'fixed';
        /**
         * Allow elements to be resized to negative dimensions
         */
        this.allowNegativeResizes = false;
        /**
         * The mouse move throttle in milliseconds, default: 50 ms
         */
        this.mouseMoveThrottleMS = MOUSE_MOVE_THROTTLE_MS;
        /**
         * Called when the mouse is pressed and a resize event is about to begin. `$event` is a `ResizeEvent` object.
         */
        this.resizeStart = new EventEmitter();
        /**
         * Called as the mouse is dragged after a resize event has begun. `$event` is a `ResizeEvent` object.
         */
        this.resizing = new EventEmitter();
        /**
         * Called after the mouse is released after a resize event. `$event` is a `ResizeEvent` object.
         */
        this.resizeEnd = new EventEmitter();
        /**
         * @hidden
         */
        this.mouseup = new Subject();
        /**
         * @hidden
         */
        this.mousedown = new Subject();
        /**
         * @hidden
         */
        this.mousemove = new Subject();
        this.destroy$ = new Subject();
        this.resizeEdges$ = new Subject();
        this.pointerEventListeners = PointerEventListeners.getInstance(renderer, zone);
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const mousedown$ = merge(this.pointerEventListeners.pointerDown, this.mousedown);
        /** @type {?} */
        const mousemove$ = merge(this.pointerEventListeners.pointerMove, this.mousemove).pipe(tap(({ event }) => {
            if (currentResize) {
                event.preventDefault();
            }
        }), share());
        /** @type {?} */
        const mouseup$ = merge(this.pointerEventListeners.pointerUp, this.mouseup);
        /** @type {?} */
        let currentResize;
        /** @type {?} */
        const removeGhostElement = () => {
            if (currentResize && currentResize.clonedNode) {
                this.elm.nativeElement.parentElement.removeChild(currentResize.clonedNode);
                this.renderer.setStyle(this.elm.nativeElement, 'visibility', 'inherit');
            }
        };
        /** @type {?} */
        const getResizeCursors = () => {
            return Object.assign({}, DEFAULT_RESIZE_CURSORS, this.resizeCursors);
        };
        this.resizeEdges$
            .pipe(startWith(this.resizeEdges), map(() => {
            return (this.resizeEdges &&
                Object.keys(this.resizeEdges).some(edge => !!this.resizeEdges[edge]));
        }), switchMap(legacyResizeEdgesEnabled => legacyResizeEdgesEnabled ? mousemove$ : EMPTY), auditTime(this.mouseMoveThrottleMS), takeUntil(this.destroy$))
            .subscribe(({ clientX, clientY }) => {
            /** @type {?} */
            const resizeEdges = getResizeEdges({
                clientX,
                clientY,
                elm: this.elm,
                allowedEdges: this.resizeEdges,
                cursorPrecision: this.resizeCursorPrecision
            });
            /** @type {?} */
            const resizeCursors = getResizeCursors();
            if (!currentResize) {
                /** @type {?} */
                const cursor = getResizeCursor(resizeEdges, resizeCursors);
                this.renderer.setStyle(this.elm.nativeElement, 'cursor', cursor);
            }
            this.setElementClass(this.elm, RESIZE_LEFT_HOVER_CLASS, resizeEdges.left === true);
            this.setElementClass(this.elm, RESIZE_RIGHT_HOVER_CLASS, resizeEdges.right === true);
            this.setElementClass(this.elm, RESIZE_TOP_HOVER_CLASS, resizeEdges.top === true);
            this.setElementClass(this.elm, RESIZE_BOTTOM_HOVER_CLASS, resizeEdges.bottom === true);
        });
        /** @type {?} */
        const mousedrag = mousedown$
            .pipe(mergeMap(startCoords => {
            /**
             * @param {?} moveCoords
             * @return {?}
             */
            function getDiff(moveCoords) {
                return {
                    clientX: moveCoords.clientX - startCoords.clientX,
                    clientY: moveCoords.clientY - startCoords.clientY
                };
            }
            /** @type {?} */
            const getSnapGrid = () => {
                /** @type {?} */
                const snapGrid = { x: 1, y: 1 };
                if (currentResize) {
                    if (this.resizeSnapGrid.left && currentResize.edges.left) {
                        snapGrid.x = +this.resizeSnapGrid.left;
                    }
                    else if (this.resizeSnapGrid.right &&
                        currentResize.edges.right) {
                        snapGrid.x = +this.resizeSnapGrid.right;
                    }
                    if (this.resizeSnapGrid.top && currentResize.edges.top) {
                        snapGrid.y = +this.resizeSnapGrid.top;
                    }
                    else if (this.resizeSnapGrid.bottom &&
                        currentResize.edges.bottom) {
                        snapGrid.y = +this.resizeSnapGrid.bottom;
                    }
                }
                return snapGrid;
            };
            /**
             * @param {?} coords
             * @param {?} snapGrid
             * @return {?}
             */
            function getGrid(coords, snapGrid) {
                return {
                    x: Math.ceil(coords.clientX / snapGrid.x),
                    y: Math.ceil(coords.clientY / snapGrid.y)
                };
            }
            return ((/** @type {?} */ (merge(mousemove$.pipe(take(1)).pipe(map(coords => [, coords])), mousemove$.pipe(pairwise())))))
                .pipe(map(([previousCoords, newCoords]) => {
                return [
                    previousCoords ? getDiff(previousCoords) : previousCoords,
                    getDiff(newCoords)
                ];
            }))
                .pipe(filter(([previousCoords, newCoords]) => {
                if (!previousCoords) {
                    return true;
                }
                /** @type {?} */
                const snapGrid = getSnapGrid();
                /** @type {?} */
                const previousGrid = getGrid(previousCoords, snapGrid);
                /** @type {?} */
                const newGrid = getGrid(newCoords, snapGrid);
                return (previousGrid.x !== newGrid.x || previousGrid.y !== newGrid.y);
            }))
                .pipe(map(([, newCoords]) => {
                /** @type {?} */
                const snapGrid = getSnapGrid();
                return {
                    clientX: Math.round(newCoords.clientX / snapGrid.x) * snapGrid.x,
                    clientY: Math.round(newCoords.clientY / snapGrid.y) * snapGrid.y
                };
            }))
                .pipe(takeUntil(merge(mouseup$, mousedown$)));
        }))
            .pipe(filter(() => !!currentResize));
        mousedrag
            .pipe(map(({ clientX, clientY }) => {
            return getNewBoundingRectangle((/** @type {?} */ (currentResize)).startingRect, (/** @type {?} */ (currentResize)).edges, clientX, clientY);
        }))
            .pipe(filter((newBoundingRect) => {
            return (this.allowNegativeResizes ||
                !!(newBoundingRect.height &&
                    newBoundingRect.width &&
                    newBoundingRect.height > 0 &&
                    newBoundingRect.width > 0));
        }))
            .pipe(filter((newBoundingRect) => {
            return this.validateResize
                ? this.validateResize({
                    rectangle: newBoundingRect,
                    edges: getEdgesDiff({
                        edges: (/** @type {?} */ (currentResize)).edges,
                        initialRectangle: (/** @type {?} */ (currentResize)).startingRect,
                        newRectangle: newBoundingRect
                    })
                })
                : true;
        }), takeUntil(this.destroy$))
            .subscribe((newBoundingRect) => {
            if (currentResize && currentResize.clonedNode) {
                this.renderer.setStyle(currentResize.clonedNode, 'height', `${newBoundingRect.height}px`);
                this.renderer.setStyle(currentResize.clonedNode, 'width', `${newBoundingRect.width}px`);
                this.renderer.setStyle(currentResize.clonedNode, 'top', `${newBoundingRect.top}px`);
                this.renderer.setStyle(currentResize.clonedNode, 'left', `${newBoundingRect.left}px`);
            }
            if (this.resizing.observers.length > 0) {
                this.zone.run(() => {
                    this.resizing.emit({
                        edges: getEdgesDiff({
                            edges: (/** @type {?} */ (currentResize)).edges,
                            initialRectangle: (/** @type {?} */ (currentResize)).startingRect,
                            newRectangle: newBoundingRect
                        }),
                        rectangle: newBoundingRect
                    });
                });
            }
            (/** @type {?} */ (currentResize)).currentRect = newBoundingRect;
        });
        mousedown$
            .pipe(map(({ clientX, clientY, edges }) => {
            return (edges ||
                getResizeEdges({
                    clientX,
                    clientY,
                    elm: this.elm,
                    allowedEdges: this.resizeEdges,
                    cursorPrecision: this.resizeCursorPrecision
                }));
        }))
            .pipe(filter((edges) => {
            return Object.keys(edges).length > 0;
        }), takeUntil(this.destroy$))
            .subscribe((edges) => {
            if (currentResize) {
                removeGhostElement();
            }
            /** @type {?} */
            const startingRect = getElementRect(this.elm, this.ghostElementPositioning);
            currentResize = {
                edges,
                startingRect,
                currentRect: startingRect
            };
            /** @type {?} */
            const resizeCursors = getResizeCursors();
            /** @type {?} */
            const cursor = getResizeCursor(currentResize.edges, resizeCursors);
            this.renderer.setStyle(document.body, 'cursor', cursor);
            this.setElementClass(this.elm, RESIZE_ACTIVE_CLASS, true);
            if (this.enableGhostResize) {
                currentResize.clonedNode = this.elm.nativeElement.cloneNode(true);
                this.elm.nativeElement.parentElement.appendChild(currentResize.clonedNode);
                this.renderer.setStyle(this.elm.nativeElement, 'visibility', 'hidden');
                this.renderer.setStyle(currentResize.clonedNode, 'position', this.ghostElementPositioning);
                this.renderer.setStyle(currentResize.clonedNode, 'left', `${currentResize.startingRect.left}px`);
                this.renderer.setStyle(currentResize.clonedNode, 'top', `${currentResize.startingRect.top}px`);
                this.renderer.setStyle(currentResize.clonedNode, 'height', `${currentResize.startingRect.height}px`);
                this.renderer.setStyle(currentResize.clonedNode, 'width', `${currentResize.startingRect.width}px`);
                this.renderer.setStyle(currentResize.clonedNode, 'cursor', getResizeCursor(currentResize.edges, resizeCursors));
                this.renderer.addClass(currentResize.clonedNode, RESIZE_GHOST_ELEMENT_CLASS);
                (/** @type {?} */ (currentResize.clonedNode)).scrollTop = (/** @type {?} */ (currentResize.startingRect
                    .scrollTop));
                (/** @type {?} */ (currentResize.clonedNode)).scrollLeft = (/** @type {?} */ (currentResize.startingRect
                    .scrollLeft));
            }
            if (this.resizeStart.observers.length > 0) {
                this.zone.run(() => {
                    this.resizeStart.emit({
                        edges: getEdgesDiff({
                            edges,
                            initialRectangle: startingRect,
                            newRectangle: startingRect
                        }),
                        rectangle: getNewBoundingRectangle(startingRect, {}, 0, 0)
                    });
                });
            }
        });
        mouseup$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            if (currentResize) {
                this.renderer.removeClass(this.elm.nativeElement, RESIZE_ACTIVE_CLASS);
                this.renderer.setStyle(document.body, 'cursor', '');
                this.renderer.setStyle(this.elm.nativeElement, 'cursor', '');
                if (this.resizeEnd.observers.length > 0) {
                    this.zone.run(() => {
                        this.resizeEnd.emit({
                            edges: getEdgesDiff({
                                edges: (/** @type {?} */ (currentResize)).edges,
                                initialRectangle: (/** @type {?} */ (currentResize)).startingRect,
                                newRectangle: (/** @type {?} */ (currentResize)).currentRect
                            }),
                            rectangle: (/** @type {?} */ (currentResize)).currentRect
                        });
                    });
                }
                removeGhostElement();
                currentResize = null;
            }
        });
    }
    /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.resizeEdges) {
            this.resizeEdges$.next(this.resizeEdges);
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnDestroy() {
        // browser check for angular universal, because it doesn't know what document is
        if (isPlatformBrowser(this.platformId)) {
            this.renderer.setStyle(document.body, 'cursor', '');
        }
        this.mousedown.complete();
        this.mouseup.complete();
        this.mousemove.complete();
        this.resizeEdges$.complete();
        this.destroy$.next();
    }
    /**
     * @private
     * @param {?} elm
     * @param {?} name
     * @param {?} add
     * @return {?}
     */
    setElementClass(elm, name, add) {
        if (add) {
            this.renderer.addClass(elm.nativeElement, name);
        }
        else {
            this.renderer.removeClass(elm.nativeElement, name);
        }
    }
}
ResizableDirective.ɵfac = function ResizableDirective_Factory(t) { return new (t || ResizableDirective)(ɵngcc0.ɵɵdirectiveInject(PLATFORM_ID), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
ResizableDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ResizableDirective, selectors: [["", "mwlResizable", ""]], inputs: { resizeEdges: "resizeEdges", enableGhostResize: "enableGhostResize", resizeSnapGrid: "resizeSnapGrid", resizeCursors: "resizeCursors", resizeCursorPrecision: "resizeCursorPrecision", ghostElementPositioning: "ghostElementPositioning", allowNegativeResizes: "allowNegativeResizes", mouseMoveThrottleMS: "mouseMoveThrottleMS", validateResize: "validateResize" }, outputs: { resizeStart: "resizeStart", resizing: "resizing", resizeEnd: "resizeEnd" }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
/** @nocollapse */
ResizableDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: Renderer2 },
    { type: ElementRef },
    { type: NgZone }
];
ResizableDirective.propDecorators = {
    validateResize: [{ type: Input }],
    resizeEdges: [{ type: Input }],
    enableGhostResize: [{ type: Input }],
    resizeSnapGrid: [{ type: Input }],
    resizeCursors: [{ type: Input }],
    resizeCursorPrecision: [{ type: Input }],
    ghostElementPositioning: [{ type: Input }],
    allowNegativeResizes: [{ type: Input }],
    mouseMoveThrottleMS: [{ type: Input }],
    resizeStart: [{ type: Output }],
    resizing: [{ type: Output }],
    resizeEnd: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ResizableDirective, [{
        type: Directive,
        args: [{
                selector: '[mwlResizable]'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { resizeEdges: [{
            type: Input
        }], enableGhostResize: [{
            type: Input
        }], resizeSnapGrid: [{
            type: Input
        }], resizeCursors: [{
            type: Input
        }], resizeCursorPrecision: [{
            type: Input
        }], ghostElementPositioning: [{
            type: Input
        }], allowNegativeResizes: [{
            type: Input
        }], mouseMoveThrottleMS: [{
            type: Input
        }], resizeStart: [{
            type: Output
        }], resizing: [{
            type: Output
        }], resizeEnd: [{
            type: Output
        }], validateResize: [{
            type: Input
        }] }); })();
if (false) {
    /**
     * A function that will be called before each resize event. Return `true` to allow the resize event to propagate or `false` to cancel it
     * @type {?}
     */
    ResizableDirective.prototype.validateResize;
    /**
     * The edges that an element can be resized from. Pass an object like `{top: true, bottom: false}`. By default no edges can be resized.
     * @deprecated use a resize handle instead that positions itself to the side of the element you would like to resize
     * @type {?}
     */
    ResizableDirective.prototype.resizeEdges;
    /**
     * Set to `true` to enable a temporary resizing effect of the element in between the `resizeStart` and `resizeEnd` events.
     * @type {?}
     */
    ResizableDirective.prototype.enableGhostResize;
    /**
     * A snap grid that resize events will be locked to.
     *
     * e.g. to only allow the element to be resized every 10px set it to `{left: 10, right: 10}`
     * @type {?}
     */
    ResizableDirective.prototype.resizeSnapGrid;
    /**
     * The mouse cursors that will be set on the resize edges
     * @type {?}
     */
    ResizableDirective.prototype.resizeCursors;
    /**
     * Mouse over thickness to active cursor.
     * @deprecated invalid when you migrate to use resize handles instead of setting resizeEdges on the element
     * @type {?}
     */
    ResizableDirective.prototype.resizeCursorPrecision;
    /**
     * Define the positioning of the ghost element (can be fixed or absolute)
     * @type {?}
     */
    ResizableDirective.prototype.ghostElementPositioning;
    /**
     * Allow elements to be resized to negative dimensions
     * @type {?}
     */
    ResizableDirective.prototype.allowNegativeResizes;
    /**
     * The mouse move throttle in milliseconds, default: 50 ms
     * @type {?}
     */
    ResizableDirective.prototype.mouseMoveThrottleMS;
    /**
     * Called when the mouse is pressed and a resize event is about to begin. `$event` is a `ResizeEvent` object.
     * @type {?}
     */
    ResizableDirective.prototype.resizeStart;
    /**
     * Called as the mouse is dragged after a resize event has begun. `$event` is a `ResizeEvent` object.
     * @type {?}
     */
    ResizableDirective.prototype.resizing;
    /**
     * Called after the mouse is released after a resize event. `$event` is a `ResizeEvent` object.
     * @type {?}
     */
    ResizableDirective.prototype.resizeEnd;
    /**
     * @hidden
     * @type {?}
     */
    ResizableDirective.prototype.mouseup;
    /**
     * @hidden
     * @type {?}
     */
    ResizableDirective.prototype.mousedown;
    /**
     * @hidden
     * @type {?}
     */
    ResizableDirective.prototype.mousemove;
    /**
     * @type {?}
     * @private
     */
    ResizableDirective.prototype.pointerEventListeners;
    /**
     * @type {?}
     * @private
     */
    ResizableDirective.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    ResizableDirective.prototype.resizeEdges$;
    /**
     * @type {?}
     * @private
     */
    ResizableDirective.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    ResizableDirective.prototype.renderer;
    /** @type {?} */
    ResizableDirective.prototype.elm;
    /**
     * @type {?}
     * @private
     */
    ResizableDirective.prototype.zone;
}
class PointerEventListeners {
    // tslint:disable-line
    /**
     * @param {?} renderer
     * @param {?} zone
     * @return {?}
     */
    static getInstance(renderer, zone) {
        if (!PointerEventListeners.instance) {
            PointerEventListeners.instance = new PointerEventListeners(renderer, zone);
        }
        return PointerEventListeners.instance;
    }
    /**
     * @param {?} renderer
     * @param {?} zone
     */
    constructor(renderer, zone) {
        this.pointerDown = new Observable((observer) => {
            /** @type {?} */
            let unsubscribeMouseDown;
            /** @type {?} */
            let unsubscribeTouchStart;
            zone.runOutsideAngular(() => {
                unsubscribeMouseDown = renderer.listen('document', 'mousedown', (event) => {
                    observer.next({
                        clientX: event.clientX,
                        clientY: event.clientY,
                        event
                    });
                });
                unsubscribeTouchStart = renderer.listen('document', 'touchstart', (event) => {
                    observer.next({
                        clientX: event.touches[0].clientX,
                        clientY: event.touches[0].clientY,
                        event
                    });
                });
            });
            return () => {
                unsubscribeMouseDown();
                unsubscribeTouchStart();
            };
        }).pipe(share());
        this.pointerMove = new Observable((observer) => {
            /** @type {?} */
            let unsubscribeMouseMove;
            /** @type {?} */
            let unsubscribeTouchMove;
            zone.runOutsideAngular(() => {
                unsubscribeMouseMove = renderer.listen('document', 'mousemove', (event) => {
                    observer.next({
                        clientX: event.clientX,
                        clientY: event.clientY,
                        event
                    });
                });
                unsubscribeTouchMove = renderer.listen('document', 'touchmove', (event) => {
                    observer.next({
                        clientX: event.targetTouches[0].clientX,
                        clientY: event.targetTouches[0].clientY,
                        event
                    });
                });
            });
            return () => {
                unsubscribeMouseMove();
                unsubscribeTouchMove();
            };
        }).pipe(share());
        this.pointerUp = new Observable((observer) => {
            /** @type {?} */
            let unsubscribeMouseUp;
            /** @type {?} */
            let unsubscribeTouchEnd;
            /** @type {?} */
            let unsubscribeTouchCancel;
            zone.runOutsideAngular(() => {
                unsubscribeMouseUp = renderer.listen('document', 'mouseup', (event) => {
                    observer.next({
                        clientX: event.clientX,
                        clientY: event.clientY,
                        event
                    });
                });
                unsubscribeTouchEnd = renderer.listen('document', 'touchend', (event) => {
                    observer.next({
                        clientX: event.changedTouches[0].clientX,
                        clientY: event.changedTouches[0].clientY,
                        event
                    });
                });
                unsubscribeTouchCancel = renderer.listen('document', 'touchcancel', (event) => {
                    observer.next({
                        clientX: event.changedTouches[0].clientX,
                        clientY: event.changedTouches[0].clientY,
                        event
                    });
                });
            });
            return () => {
                unsubscribeMouseUp();
                unsubscribeTouchEnd();
                unsubscribeTouchCancel();
            };
        }).pipe(share());
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    PointerEventListeners.instance;
    /** @type {?} */
    PointerEventListeners.prototype.pointerDown;
    /** @type {?} */
    PointerEventListeners.prototype.pointerMove;
    /** @type {?} */
    PointerEventListeners.prototype.pointerUp;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXphYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsibmc6L2FuZ3VsYXItcmVzaXphYmxlLWVsZW1lbnQvcmVzaXphYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsVUFBVSxFQUVWLE1BQU0sRUFDTixLQUFLLEVBQ0wsWUFBWSxFQUVaLE1BQU0sRUFHTixNQUFNLEVBQ04sV0FBVyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFZLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkUsT0FBTyxFQUNMLEdBQUcsRUFDSCxRQUFRLEVBQ1IsU0FBUyxFQUNULE1BQU0sRUFDTixRQUFRLEVBQ1IsSUFBSSxFQUNKLEtBQUssRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsRUFDVCxHQUFHLEVBQ0osTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QjtBQUFJO0FBQVc7O0FBSWYscUNBSUM7QUFDRDtBQUNZO0FBQ0YsSUFOUix5Q0FBZ0I7QUFDbEI7QUFDRSxJQURBLHlDQUFnQjtBQUNsQjtBQUFxQixJQUFuQix1Q0FBK0I7QUFDakM7QUFDQTtBQUNHO0FBQVc7QUFBZCx5QkFHQztBQUNEO0FBQ1k7QUFDTCxJQUxMLHVCQUFVO0FBQ1o7QUFHSyxJQUhILHVCQUFVO0FBQ1o7QUFDQTtBQUNHO0FBQXFCO0FBRXZCO0FBQ087QUFBZTtBQUh2QixTQUFTLGVBQWUsQ0FDdEIsTUFBYyxFQUNkLE1BQWMsRUFDZCxZQUFvQixDQUFDO0FBQ3BCO0FBQ1EsVUFBSCxJQUFJLEdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ2hELElBQUUsT0FBTyxJQUFJLEdBQUcsU0FBUyxDQUFDO0FBQzFCLENB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LCtCQUErQztBQUFDO0FBQXFCLElBTnJFLDRDQUF1RDtBQUN6RDtBQUNvQixJQUFsQiw0Q0FBdUQ7QUFDekQ7QUFDb0IsSUFBbEIsMENBQXFEO0FBQ3ZEO0FBQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZixcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIElucHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uRGVzdHJveSxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIEluamVjdCxcbiAgUExBVEZPUk1fSURcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlLCBPYnNlcnZlciwgbWVyZ2UsIEVNUFRZIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBtYXAsXG4gIG1lcmdlTWFwLFxuICB0YWtlVW50aWwsXG4gIGZpbHRlcixcbiAgcGFpcndpc2UsXG4gIHRha2UsXG4gIHNoYXJlLFxuICBhdWRpdFRpbWUsXG4gIHN3aXRjaE1hcCxcbiAgc3RhcnRXaXRoLFxuICB0YXBcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRWRnZXMgfSBmcm9tICcuL2ludGVyZmFjZXMvZWRnZXMuaW50ZXJmYWNlJztcbmltcG9ydCB7IEJvdW5kaW5nUmVjdGFuZ2xlIH0gZnJvbSAnLi9pbnRlcmZhY2VzL2JvdW5kaW5nLXJlY3RhbmdsZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgUmVzaXplRXZlbnQgfSBmcm9tICcuL2ludGVyZmFjZXMvcmVzaXplLWV2ZW50LmludGVyZmFjZSc7XG5cbmludGVyZmFjZSBQb2ludGVyRXZlbnRDb29yZGluYXRlIHtcbiAgY2xpZW50WDogbnVtYmVyO1xuICBjbGllbnRZOiBudW1iZXI7XG4gIGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudDtcbn1cblxuaW50ZXJmYWNlIENvb3JkaW5hdGUge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXJDbG9zZVRvKFxuICB2YWx1ZTE6IG51bWJlcixcbiAgdmFsdWUyOiBudW1iZXIsXG4gIHByZWNpc2lvbjogbnVtYmVyID0gM1xuKTogYm9vbGVhbiB7XG4gIGNvbnN0IGRpZmY6IG51bWJlciA9IE1hdGguYWJzKHZhbHVlMSAtIHZhbHVlMik7XG4gIHJldHVybiBkaWZmIDwgcHJlY2lzaW9uO1xufVxuXG5mdW5jdGlvbiBnZXROZXdCb3VuZGluZ1JlY3RhbmdsZShcbiAgc3RhcnRpbmdSZWN0OiBCb3VuZGluZ1JlY3RhbmdsZSxcbiAgZWRnZXM6IEVkZ2VzLFxuICBjbGllbnRYOiBudW1iZXIsXG4gIGNsaWVudFk6IG51bWJlclxuKTogQm91bmRpbmdSZWN0YW5nbGUge1xuICBjb25zdCBuZXdCb3VuZGluZ1JlY3Q6IEJvdW5kaW5nUmVjdGFuZ2xlID0ge1xuICAgIHRvcDogc3RhcnRpbmdSZWN0LnRvcCxcbiAgICBib3R0b206IHN0YXJ0aW5nUmVjdC5ib3R0b20sXG4gICAgbGVmdDogc3RhcnRpbmdSZWN0LmxlZnQsXG4gICAgcmlnaHQ6IHN0YXJ0aW5nUmVjdC5yaWdodFxuICB9O1xuXG4gIGlmIChlZGdlcy50b3ApIHtcbiAgICBuZXdCb3VuZGluZ1JlY3QudG9wICs9IGNsaWVudFk7XG4gIH1cbiAgaWYgKGVkZ2VzLmJvdHRvbSkge1xuICAgIG5ld0JvdW5kaW5nUmVjdC5ib3R0b20gKz0gY2xpZW50WTtcbiAgfVxuICBpZiAoZWRnZXMubGVmdCkge1xuICAgIG5ld0JvdW5kaW5nUmVjdC5sZWZ0ICs9IGNsaWVudFg7XG4gIH1cbiAgaWYgKGVkZ2VzLnJpZ2h0KSB7XG4gICAgbmV3Qm91bmRpbmdSZWN0LnJpZ2h0ICs9IGNsaWVudFg7XG4gIH1cbiAgbmV3Qm91bmRpbmdSZWN0LmhlaWdodCA9IG5ld0JvdW5kaW5nUmVjdC5ib3R0b20gLSBuZXdCb3VuZGluZ1JlY3QudG9wO1xuICBuZXdCb3VuZGluZ1JlY3Qud2lkdGggPSBuZXdCb3VuZGluZ1JlY3QucmlnaHQgLSBuZXdCb3VuZGluZ1JlY3QubGVmdDtcblxuICByZXR1cm4gbmV3Qm91bmRpbmdSZWN0O1xufVxuXG5mdW5jdGlvbiBnZXRFbGVtZW50UmVjdChcbiAgZWxlbWVudDogRWxlbWVudFJlZixcbiAgZ2hvc3RFbGVtZW50UG9zaXRpb25pbmc6IHN0cmluZ1xuKTogQm91bmRpbmdSZWN0YW5nbGUge1xuICBsZXQgdHJhbnNsYXRlWCA9IDA7XG4gIGxldCB0cmFuc2xhdGVZID0gMDtcbiAgY29uc3Qgc3R5bGUgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGU7XG4gIGNvbnN0IHRyYW5zZm9ybVByb3BlcnRpZXMgPSBbXG4gICAgJ3RyYW5zZm9ybScsXG4gICAgJy1tcy10cmFuc2Zvcm0nLFxuICAgICctbW96LXRyYW5zZm9ybScsXG4gICAgJy1vLXRyYW5zZm9ybSdcbiAgXTtcbiAgY29uc3QgdHJhbnNmb3JtID0gdHJhbnNmb3JtUHJvcGVydGllc1xuICAgIC5tYXAocHJvcGVydHkgPT4gc3R5bGVbcHJvcGVydHldKVxuICAgIC5maW5kKHZhbHVlID0+ICEhdmFsdWUpO1xuICBpZiAodHJhbnNmb3JtICYmIHRyYW5zZm9ybS5pbmNsdWRlcygndHJhbnNsYXRlJykpIHtcbiAgICB0cmFuc2xhdGVYID0gdHJhbnNmb3JtLnJlcGxhY2UoXG4gICAgICAvLip0cmFuc2xhdGUzP2Q/XFwoKC0/WzAtOV0qKXB4LCAoLT9bMC05XSopcHguKi8sXG4gICAgICAnJDEnXG4gICAgKTtcbiAgICB0cmFuc2xhdGVZID0gdHJhbnNmb3JtLnJlcGxhY2UoXG4gICAgICAvLip0cmFuc2xhdGUzP2Q/XFwoKC0/WzAtOV0qKXB4LCAoLT9bMC05XSopcHguKi8sXG4gICAgICAnJDInXG4gICAgKTtcbiAgfVxuXG4gIGlmIChnaG9zdEVsZW1lbnRQb3NpdGlvbmluZyA9PT0gJ2Fic29sdXRlJykge1xuICAgIHJldHVybiB7XG4gICAgICBoZWlnaHQ6IGVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQsXG4gICAgICB3aWR0aDogZWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgICAgdG9wOiBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wIC0gdHJhbnNsYXRlWSxcbiAgICAgIGJvdHRvbTpcbiAgICAgICAgZWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCArXG4gICAgICAgIGVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRUb3AgLVxuICAgICAgICB0cmFuc2xhdGVZLFxuICAgICAgbGVmdDogZWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldExlZnQgLSB0cmFuc2xhdGVYLFxuICAgICAgcmlnaHQ6XG4gICAgICAgIGVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCArXG4gICAgICAgIGVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRMZWZ0IC1cbiAgICAgICAgdHJhbnNsYXRlWFxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgYm91bmRpbmdSZWN0OiBCb3VuZGluZ1JlY3RhbmdsZSA9IGVsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4ge1xuICAgICAgaGVpZ2h0OiBib3VuZGluZ1JlY3QuaGVpZ2h0LFxuICAgICAgd2lkdGg6IGJvdW5kaW5nUmVjdC53aWR0aCxcbiAgICAgIHRvcDogYm91bmRpbmdSZWN0LnRvcCAtIHRyYW5zbGF0ZVksXG4gICAgICBib3R0b206IGJvdW5kaW5nUmVjdC5ib3R0b20gLSB0cmFuc2xhdGVZLFxuICAgICAgbGVmdDogYm91bmRpbmdSZWN0LmxlZnQgLSB0cmFuc2xhdGVYLFxuICAgICAgcmlnaHQ6IGJvdW5kaW5nUmVjdC5yaWdodCAtIHRyYW5zbGF0ZVgsXG4gICAgICBzY3JvbGxUb3A6IGVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AsXG4gICAgICBzY3JvbGxMZWZ0OiBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdFxuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNXaXRoaW5Cb3VuZGluZ1koe1xuICBjbGllbnRZLFxuICByZWN0XG59OiB7XG4gIGNsaWVudFk6IG51bWJlcjtcbiAgcmVjdDogQ2xpZW50UmVjdDtcbn0pOiBib29sZWFuIHtcbiAgcmV0dXJuIGNsaWVudFkgPj0gcmVjdC50b3AgJiYgY2xpZW50WSA8PSByZWN0LmJvdHRvbTtcbn1cblxuZnVuY3Rpb24gaXNXaXRoaW5Cb3VuZGluZ1goe1xuICBjbGllbnRYLFxuICByZWN0XG59OiB7XG4gIGNsaWVudFg6IG51bWJlcjtcbiAgcmVjdDogQ2xpZW50UmVjdDtcbn0pOiBib29sZWFuIHtcbiAgcmV0dXJuIGNsaWVudFggPj0gcmVjdC5sZWZ0ICYmIGNsaWVudFggPD0gcmVjdC5yaWdodDtcbn1cblxuZnVuY3Rpb24gZ2V0UmVzaXplRWRnZXMoe1xuICBjbGllbnRYLFxuICBjbGllbnRZLFxuICBlbG0sXG4gIGFsbG93ZWRFZGdlcyxcbiAgY3Vyc29yUHJlY2lzaW9uXG59OiB7XG4gIGNsaWVudFg6IG51bWJlcjtcbiAgY2xpZW50WTogbnVtYmVyO1xuICBlbG06IEVsZW1lbnRSZWY7XG4gIGFsbG93ZWRFZGdlczogRWRnZXM7XG4gIGN1cnNvclByZWNpc2lvbjogbnVtYmVyO1xufSk6IEVkZ2VzIHtcbiAgY29uc3QgZWxtUG9zaXRpb246IENsaWVudFJlY3QgPSBlbG0ubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgY29uc3QgZWRnZXM6IEVkZ2VzID0ge307XG5cbiAgaWYgKFxuICAgIGFsbG93ZWRFZGdlcy5sZWZ0ICYmXG4gICAgaXNOdW1iZXJDbG9zZVRvKGNsaWVudFgsIGVsbVBvc2l0aW9uLmxlZnQsIGN1cnNvclByZWNpc2lvbikgJiZcbiAgICBpc1dpdGhpbkJvdW5kaW5nWSh7IGNsaWVudFksIHJlY3Q6IGVsbVBvc2l0aW9uIH0pXG4gICkge1xuICAgIGVkZ2VzLmxlZnQgPSB0cnVlO1xuICB9XG5cbiAgaWYgKFxuICAgIGFsbG93ZWRFZGdlcy5yaWdodCAmJlxuICAgIGlzTnVtYmVyQ2xvc2VUbyhjbGllbnRYLCBlbG1Qb3NpdGlvbi5yaWdodCwgY3Vyc29yUHJlY2lzaW9uKSAmJlxuICAgIGlzV2l0aGluQm91bmRpbmdZKHsgY2xpZW50WSwgcmVjdDogZWxtUG9zaXRpb24gfSlcbiAgKSB7XG4gICAgZWRnZXMucmlnaHQgPSB0cnVlO1xuICB9XG5cbiAgaWYgKFxuICAgIGFsbG93ZWRFZGdlcy50b3AgJiZcbiAgICBpc051bWJlckNsb3NlVG8oY2xpZW50WSwgZWxtUG9zaXRpb24udG9wLCBjdXJzb3JQcmVjaXNpb24pICYmXG4gICAgaXNXaXRoaW5Cb3VuZGluZ1goeyBjbGllbnRYLCByZWN0OiBlbG1Qb3NpdGlvbiB9KVxuICApIHtcbiAgICBlZGdlcy50b3AgPSB0cnVlO1xuICB9XG5cbiAgaWYgKFxuICAgIGFsbG93ZWRFZGdlcy5ib3R0b20gJiZcbiAgICBpc051bWJlckNsb3NlVG8oY2xpZW50WSwgZWxtUG9zaXRpb24uYm90dG9tLCBjdXJzb3JQcmVjaXNpb24pICYmXG4gICAgaXNXaXRoaW5Cb3VuZGluZ1goeyBjbGllbnRYLCByZWN0OiBlbG1Qb3NpdGlvbiB9KVxuICApIHtcbiAgICBlZGdlcy5ib3R0b20gPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGVkZ2VzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc2l6ZUN1cnNvcnMge1xuICB0b3BMZWZ0OiBzdHJpbmc7XG4gIHRvcFJpZ2h0OiBzdHJpbmc7XG4gIGJvdHRvbUxlZnQ6IHN0cmluZztcbiAgYm90dG9tUmlnaHQ6IHN0cmluZztcbiAgbGVmdE9yUmlnaHQ6IHN0cmluZztcbiAgdG9wT3JCb3R0b206IHN0cmluZztcbn1cblxuY29uc3QgREVGQVVMVF9SRVNJWkVfQ1VSU09SUzogUmVzaXplQ3Vyc29ycyA9IE9iamVjdC5mcmVlemUoe1xuICB0b3BMZWZ0OiAnbnctcmVzaXplJyxcbiAgdG9wUmlnaHQ6ICduZS1yZXNpemUnLFxuICBib3R0b21MZWZ0OiAnc3ctcmVzaXplJyxcbiAgYm90dG9tUmlnaHQ6ICdzZS1yZXNpemUnLFxuICBsZWZ0T3JSaWdodDogJ2NvbC1yZXNpemUnLFxuICB0b3BPckJvdHRvbTogJ3Jvdy1yZXNpemUnXG59KTtcblxuZnVuY3Rpb24gZ2V0UmVzaXplQ3Vyc29yKGVkZ2VzOiBFZGdlcywgY3Vyc29yczogUmVzaXplQ3Vyc29ycyk6IHN0cmluZyB7XG4gIGlmIChlZGdlcy5sZWZ0ICYmIGVkZ2VzLnRvcCkge1xuICAgIHJldHVybiBjdXJzb3JzLnRvcExlZnQ7XG4gIH0gZWxzZSBpZiAoZWRnZXMucmlnaHQgJiYgZWRnZXMudG9wKSB7XG4gICAgcmV0dXJuIGN1cnNvcnMudG9wUmlnaHQ7XG4gIH0gZWxzZSBpZiAoZWRnZXMubGVmdCAmJiBlZGdlcy5ib3R0b20pIHtcbiAgICByZXR1cm4gY3Vyc29ycy5ib3R0b21MZWZ0O1xuICB9IGVsc2UgaWYgKGVkZ2VzLnJpZ2h0ICYmIGVkZ2VzLmJvdHRvbSkge1xuICAgIHJldHVybiBjdXJzb3JzLmJvdHRvbVJpZ2h0O1xuICB9IGVsc2UgaWYgKGVkZ2VzLmxlZnQgfHwgZWRnZXMucmlnaHQpIHtcbiAgICByZXR1cm4gY3Vyc29ycy5sZWZ0T3JSaWdodDtcbiAgfSBlbHNlIGlmIChlZGdlcy50b3AgfHwgZWRnZXMuYm90dG9tKSB7XG4gICAgcmV0dXJuIGN1cnNvcnMudG9wT3JCb3R0b207XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEVkZ2VzRGlmZih7XG4gIGVkZ2VzLFxuICBpbml0aWFsUmVjdGFuZ2xlLFxuICBuZXdSZWN0YW5nbGVcbn06IHtcbiAgZWRnZXM6IEVkZ2VzO1xuICBpbml0aWFsUmVjdGFuZ2xlOiBCb3VuZGluZ1JlY3RhbmdsZTtcbiAgbmV3UmVjdGFuZ2xlOiBCb3VuZGluZ1JlY3RhbmdsZTtcbn0pOiBFZGdlcyB7XG4gIGNvbnN0IGVkZ2VzRGlmZjogRWRnZXMgPSB7fTtcbiAgT2JqZWN0LmtleXMoZWRnZXMpLmZvckVhY2goZWRnZSA9PiB7XG4gICAgZWRnZXNEaWZmW2VkZ2VdID0gKG5ld1JlY3RhbmdsZVtlZGdlXSB8fCAwKSAtIChpbml0aWFsUmVjdGFuZ2xlW2VkZ2VdIHx8IDApO1xuICB9KTtcbiAgcmV0dXJuIGVkZ2VzRGlmZjtcbn1cblxuY29uc3QgUkVTSVpFX0FDVElWRV9DTEFTUzogc3RyaW5nID0gJ3Jlc2l6ZS1hY3RpdmUnO1xuY29uc3QgUkVTSVpFX0xFRlRfSE9WRVJfQ0xBU1M6IHN0cmluZyA9ICdyZXNpemUtbGVmdC1ob3Zlcic7XG5jb25zdCBSRVNJWkVfUklHSFRfSE9WRVJfQ0xBU1M6IHN0cmluZyA9ICdyZXNpemUtcmlnaHQtaG92ZXInO1xuY29uc3QgUkVTSVpFX1RPUF9IT1ZFUl9DTEFTUzogc3RyaW5nID0gJ3Jlc2l6ZS10b3AtaG92ZXInO1xuY29uc3QgUkVTSVpFX0JPVFRPTV9IT1ZFUl9DTEFTUzogc3RyaW5nID0gJ3Jlc2l6ZS1ib3R0b20taG92ZXInO1xuY29uc3QgUkVTSVpFX0dIT1NUX0VMRU1FTlRfQ0xBU1M6IHN0cmluZyA9ICdyZXNpemUtZ2hvc3QtZWxlbWVudCc7XG5cbmV4cG9ydCBjb25zdCBNT1VTRV9NT1ZFX1RIUk9UVExFX01TOiBudW1iZXIgPSA1MDtcblxuLyoqXG4gKiBQbGFjZSB0aGlzIG9uIGFuIGVsZW1lbnQgdG8gbWFrZSBpdCByZXNpemFibGUuIEZvciBleGFtcGxlOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxkaXZcbiAqICAgbXdsUmVzaXphYmxlXG4gKiAgIFtyZXNpemVFZGdlc109XCJ7Ym90dG9tOiB0cnVlLCByaWdodDogdHJ1ZSwgdG9wOiB0cnVlLCBsZWZ0OiB0cnVlfVwiXG4gKiAgIFtlbmFibGVHaG9zdFJlc2l6ZV09XCJ0cnVlXCI+XG4gKiA8L2Rpdj5cbiAqIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbXdsUmVzaXphYmxlXSdcbn0pXG5leHBvcnQgY2xhc3MgUmVzaXphYmxlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgYmVmb3JlIGVhY2ggcmVzaXplIGV2ZW50LiBSZXR1cm4gYHRydWVgIHRvIGFsbG93IHRoZSByZXNpemUgZXZlbnQgdG8gcHJvcGFnYXRlIG9yIGBmYWxzZWAgdG8gY2FuY2VsIGl0XG4gICAqL1xuICBASW5wdXQoKSB2YWxpZGF0ZVJlc2l6ZTogKHJlc2l6ZUV2ZW50OiBSZXNpemVFdmVudCkgPT4gYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhlIGVkZ2VzIHRoYXQgYW4gZWxlbWVudCBjYW4gYmUgcmVzaXplZCBmcm9tLiBQYXNzIGFuIG9iamVjdCBsaWtlIGB7dG9wOiB0cnVlLCBib3R0b206IGZhbHNlfWAuIEJ5IGRlZmF1bHQgbm8gZWRnZXMgY2FuIGJlIHJlc2l6ZWQuXG4gICAqIEBkZXByZWNhdGVkIHVzZSBhIHJlc2l6ZSBoYW5kbGUgaW5zdGVhZCB0aGF0IHBvc2l0aW9ucyBpdHNlbGYgdG8gdGhlIHNpZGUgb2YgdGhlIGVsZW1lbnQgeW91IHdvdWxkIGxpa2UgdG8gcmVzaXplXG4gICAqL1xuICBASW5wdXQoKSByZXNpemVFZGdlczogRWRnZXMgPSB7fTtcblxuICAvKipcbiAgICogU2V0IHRvIGB0cnVlYCB0byBlbmFibGUgYSB0ZW1wb3JhcnkgcmVzaXppbmcgZWZmZWN0IG9mIHRoZSBlbGVtZW50IGluIGJldHdlZW4gdGhlIGByZXNpemVTdGFydGAgYW5kIGByZXNpemVFbmRgIGV2ZW50cy5cbiAgICovXG4gIEBJbnB1dCgpIGVuYWJsZUdob3N0UmVzaXplOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEEgc25hcCBncmlkIHRoYXQgcmVzaXplIGV2ZW50cyB3aWxsIGJlIGxvY2tlZCB0by5cbiAgICpcbiAgICogZS5nLiB0byBvbmx5IGFsbG93IHRoZSBlbGVtZW50IHRvIGJlIHJlc2l6ZWQgZXZlcnkgMTBweCBzZXQgaXQgdG8gYHtsZWZ0OiAxMCwgcmlnaHQ6IDEwfWBcbiAgICovXG4gIEBJbnB1dCgpIHJlc2l6ZVNuYXBHcmlkOiBFZGdlcyA9IHt9O1xuXG4gIC8qKlxuICAgKiBUaGUgbW91c2UgY3Vyc29ycyB0aGF0IHdpbGwgYmUgc2V0IG9uIHRoZSByZXNpemUgZWRnZXNcbiAgICovXG4gIEBJbnB1dCgpIHJlc2l6ZUN1cnNvcnM6IFJlc2l6ZUN1cnNvcnMgPSBERUZBVUxUX1JFU0laRV9DVVJTT1JTO1xuXG4gIC8qKlxuICAgKiBNb3VzZSBvdmVyIHRoaWNrbmVzcyB0byBhY3RpdmUgY3Vyc29yLlxuICAgKiBAZGVwcmVjYXRlZCBpbnZhbGlkIHdoZW4geW91IG1pZ3JhdGUgdG8gdXNlIHJlc2l6ZSBoYW5kbGVzIGluc3RlYWQgb2Ygc2V0dGluZyByZXNpemVFZGdlcyBvbiB0aGUgZWxlbWVudFxuICAgKi9cbiAgQElucHV0KCkgcmVzaXplQ3Vyc29yUHJlY2lzaW9uOiBudW1iZXIgPSAzO1xuXG4gIC8qKlxuICAgKiBEZWZpbmUgdGhlIHBvc2l0aW9uaW5nIG9mIHRoZSBnaG9zdCBlbGVtZW50IChjYW4gYmUgZml4ZWQgb3IgYWJzb2x1dGUpXG4gICAqL1xuICBASW5wdXQoKSBnaG9zdEVsZW1lbnRQb3NpdGlvbmluZzogJ2ZpeGVkJyB8ICdhYnNvbHV0ZScgPSAnZml4ZWQnO1xuXG4gIC8qKlxuICAgKiBBbGxvdyBlbGVtZW50cyB0byBiZSByZXNpemVkIHRvIG5lZ2F0aXZlIGRpbWVuc2lvbnNcbiAgICovXG4gIEBJbnB1dCgpIGFsbG93TmVnYXRpdmVSZXNpemVzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRoZSBtb3VzZSBtb3ZlIHRocm90dGxlIGluIG1pbGxpc2Vjb25kcywgZGVmYXVsdDogNTAgbXNcbiAgICovXG4gIEBJbnB1dCgpIG1vdXNlTW92ZVRocm90dGxlTVM6IG51bWJlciA9IE1PVVNFX01PVkVfVEhST1RUTEVfTVM7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSBtb3VzZSBpcyBwcmVzc2VkIGFuZCBhIHJlc2l6ZSBldmVudCBpcyBhYm91dCB0byBiZWdpbi4gYCRldmVudGAgaXMgYSBgUmVzaXplRXZlbnRgIG9iamVjdC5cbiAgICovXG4gIEBPdXRwdXQoKSByZXNpemVTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8UmVzaXplRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCBhcyB0aGUgbW91c2UgaXMgZHJhZ2dlZCBhZnRlciBhIHJlc2l6ZSBldmVudCBoYXMgYmVndW4uIGAkZXZlbnRgIGlzIGEgYFJlc2l6ZUV2ZW50YCBvYmplY3QuXG4gICAqL1xuICBAT3V0cHV0KCkgcmVzaXppbmcgPSBuZXcgRXZlbnRFbWl0dGVyPFJlc2l6ZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgYWZ0ZXIgdGhlIG1vdXNlIGlzIHJlbGVhc2VkIGFmdGVyIGEgcmVzaXplIGV2ZW50LiBgJGV2ZW50YCBpcyBhIGBSZXNpemVFdmVudGAgb2JqZWN0LlxuICAgKi9cbiAgQE91dHB1dCgpIHJlc2l6ZUVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8UmVzaXplRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHB1YmxpYyBtb3VzZXVwID0gbmV3IFN1YmplY3Q8e1xuICAgIGNsaWVudFg6IG51bWJlcjtcbiAgICBjbGllbnRZOiBudW1iZXI7XG4gICAgZWRnZXM/OiBFZGdlcztcbiAgfT4oKTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHVibGljIG1vdXNlZG93biA9IG5ldyBTdWJqZWN0PHtcbiAgICBjbGllbnRYOiBudW1iZXI7XG4gICAgY2xpZW50WTogbnVtYmVyO1xuICAgIGVkZ2VzPzogRWRnZXM7XG4gIH0+KCk7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHB1YmxpYyBtb3VzZW1vdmUgPSBuZXcgU3ViamVjdDx7XG4gICAgY2xpZW50WDogbnVtYmVyO1xuICAgIGNsaWVudFk6IG51bWJlcjtcbiAgICBlZGdlcz86IEVkZ2VzO1xuICAgIGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudDtcbiAgfT4oKTtcblxuICBwcml2YXRlIHBvaW50ZXJFdmVudExpc3RlbmVyczogUG9pbnRlckV2ZW50TGlzdGVuZXJzO1xuXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIHByaXZhdGUgcmVzaXplRWRnZXMkID0gbmV3IFN1YmplY3Q8RWRnZXM+KCk7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgZWxtOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgem9uZTogTmdab25lXG4gICkge1xuICAgIHRoaXMucG9pbnRlckV2ZW50TGlzdGVuZXJzID0gUG9pbnRlckV2ZW50TGlzdGVuZXJzLmdldEluc3RhbmNlKFxuICAgICAgcmVuZGVyZXIsXG4gICAgICB6b25lXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBtb3VzZWRvd24kOiBPYnNlcnZhYmxlPHtcbiAgICAgIGNsaWVudFg6IG51bWJlcjtcbiAgICAgIGNsaWVudFk6IG51bWJlcjtcbiAgICAgIGVkZ2VzPzogRWRnZXM7XG4gICAgfT4gPSBtZXJnZSh0aGlzLnBvaW50ZXJFdmVudExpc3RlbmVycy5wb2ludGVyRG93biwgdGhpcy5tb3VzZWRvd24pO1xuXG4gICAgY29uc3QgbW91c2Vtb3ZlJCA9IG1lcmdlKFxuICAgICAgdGhpcy5wb2ludGVyRXZlbnRMaXN0ZW5lcnMucG9pbnRlck1vdmUsXG4gICAgICB0aGlzLm1vdXNlbW92ZVxuICAgICkucGlwZShcbiAgICAgIHRhcCgoeyBldmVudCB9KSA9PiB7XG4gICAgICAgIGlmIChjdXJyZW50UmVzaXplKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBzaGFyZSgpXG4gICAgKTtcblxuICAgIGNvbnN0IG1vdXNldXAkID0gbWVyZ2UodGhpcy5wb2ludGVyRXZlbnRMaXN0ZW5lcnMucG9pbnRlclVwLCB0aGlzLm1vdXNldXApO1xuXG4gICAgbGV0IGN1cnJlbnRSZXNpemU6IHtcbiAgICAgIGVkZ2VzOiBFZGdlcztcbiAgICAgIHN0YXJ0aW5nUmVjdDogQm91bmRpbmdSZWN0YW5nbGU7XG4gICAgICBjdXJyZW50UmVjdDogQm91bmRpbmdSZWN0YW5nbGU7XG4gICAgICBjbG9uZWROb2RlPzogSFRNTEVsZW1lbnQ7XG4gICAgfSB8IG51bGw7XG5cbiAgICBjb25zdCByZW1vdmVHaG9zdEVsZW1lbnQgPSAoKSA9PiB7XG4gICAgICBpZiAoY3VycmVudFJlc2l6ZSAmJiBjdXJyZW50UmVzaXplLmNsb25lZE5vZGUpIHtcbiAgICAgICAgdGhpcy5lbG0ubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKFxuICAgICAgICAgIGN1cnJlbnRSZXNpemUuY2xvbmVkTm9kZVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQsICd2aXNpYmlsaXR5JywgJ2luaGVyaXQnKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UmVzaXplQ3Vyc29ycyA9ICgpOiBSZXNpemVDdXJzb3JzID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLkRFRkFVTFRfUkVTSVpFX0NVUlNPUlMsXG4gICAgICAgIC4uLnRoaXMucmVzaXplQ3Vyc29yc1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgdGhpcy5yZXNpemVFZGdlcyRcbiAgICAgIC5waXBlKFxuICAgICAgICBzdGFydFdpdGgodGhpcy5yZXNpemVFZGdlcyksXG4gICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHRoaXMucmVzaXplRWRnZXMgJiZcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMucmVzaXplRWRnZXMpLnNvbWUoZWRnZSA9PiAhIXRoaXMucmVzaXplRWRnZXNbZWRnZV0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfSksXG4gICAgICAgIHN3aXRjaE1hcChsZWdhY3lSZXNpemVFZGdlc0VuYWJsZWQgPT5cbiAgICAgICAgICBsZWdhY3lSZXNpemVFZGdlc0VuYWJsZWQgPyBtb3VzZW1vdmUkIDogRU1QVFlcbiAgICAgICAgKSxcbiAgICAgICAgYXVkaXRUaW1lKHRoaXMubW91c2VNb3ZlVGhyb3R0bGVNUyksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoeyBjbGllbnRYLCBjbGllbnRZIH0pID0+IHtcbiAgICAgICAgY29uc3QgcmVzaXplRWRnZXM6IEVkZ2VzID0gZ2V0UmVzaXplRWRnZXMoe1xuICAgICAgICAgIGNsaWVudFgsXG4gICAgICAgICAgY2xpZW50WSxcbiAgICAgICAgICBlbG06IHRoaXMuZWxtLFxuICAgICAgICAgIGFsbG93ZWRFZGdlczogdGhpcy5yZXNpemVFZGdlcyxcbiAgICAgICAgICBjdXJzb3JQcmVjaXNpb246IHRoaXMucmVzaXplQ3Vyc29yUHJlY2lzaW9uXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByZXNpemVDdXJzb3JzID0gZ2V0UmVzaXplQ3Vyc29ycygpO1xuICAgICAgICBpZiAoIWN1cnJlbnRSZXNpemUpIHtcbiAgICAgICAgICBjb25zdCBjdXJzb3IgPSBnZXRSZXNpemVDdXJzb3IocmVzaXplRWRnZXMsIHJlc2l6ZUN1cnNvcnMpO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbG0ubmF0aXZlRWxlbWVudCwgJ2N1cnNvcicsIGN1cnNvcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRFbGVtZW50Q2xhc3MoXG4gICAgICAgICAgdGhpcy5lbG0sXG4gICAgICAgICAgUkVTSVpFX0xFRlRfSE9WRVJfQ0xBU1MsXG4gICAgICAgICAgcmVzaXplRWRnZXMubGVmdCA9PT0gdHJ1ZVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRDbGFzcyhcbiAgICAgICAgICB0aGlzLmVsbSxcbiAgICAgICAgICBSRVNJWkVfUklHSFRfSE9WRVJfQ0xBU1MsXG4gICAgICAgICAgcmVzaXplRWRnZXMucmlnaHQgPT09IHRydWVcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50Q2xhc3MoXG4gICAgICAgICAgdGhpcy5lbG0sXG4gICAgICAgICAgUkVTSVpFX1RPUF9IT1ZFUl9DTEFTUyxcbiAgICAgICAgICByZXNpemVFZGdlcy50b3AgPT09IHRydWVcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50Q2xhc3MoXG4gICAgICAgICAgdGhpcy5lbG0sXG4gICAgICAgICAgUkVTSVpFX0JPVFRPTV9IT1ZFUl9DTEFTUyxcbiAgICAgICAgICByZXNpemVFZGdlcy5ib3R0b20gPT09IHRydWVcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgY29uc3QgbW91c2VkcmFnOiBPYnNlcnZhYmxlPGFueT4gPSBtb3VzZWRvd24kXG4gICAgICAucGlwZShcbiAgICAgICAgbWVyZ2VNYXAoc3RhcnRDb29yZHMgPT4ge1xuICAgICAgICAgIGZ1bmN0aW9uIGdldERpZmYobW92ZUNvb3JkczogeyBjbGllbnRYOiBudW1iZXI7IGNsaWVudFk6IG51bWJlciB9KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBjbGllbnRYOiBtb3ZlQ29vcmRzLmNsaWVudFggLSBzdGFydENvb3Jkcy5jbGllbnRYLFxuICAgICAgICAgICAgICBjbGllbnRZOiBtb3ZlQ29vcmRzLmNsaWVudFkgLSBzdGFydENvb3Jkcy5jbGllbnRZXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGdldFNuYXBHcmlkID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc25hcEdyaWQ6IENvb3JkaW5hdGUgPSB7IHg6IDEsIHk6IDEgfTtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnRSZXNpemUpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMucmVzaXplU25hcEdyaWQubGVmdCAmJiBjdXJyZW50UmVzaXplLmVkZ2VzLmxlZnQpIHtcbiAgICAgICAgICAgICAgICBzbmFwR3JpZC54ID0gK3RoaXMucmVzaXplU25hcEdyaWQubGVmdDtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2l6ZVNuYXBHcmlkLnJpZ2h0ICYmXG4gICAgICAgICAgICAgICAgY3VycmVudFJlc2l6ZS5lZGdlcy5yaWdodFxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBzbmFwR3JpZC54ID0gK3RoaXMucmVzaXplU25hcEdyaWQucmlnaHQ7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAodGhpcy5yZXNpemVTbmFwR3JpZC50b3AgJiYgY3VycmVudFJlc2l6ZS5lZGdlcy50b3ApIHtcbiAgICAgICAgICAgICAgICBzbmFwR3JpZC55ID0gK3RoaXMucmVzaXplU25hcEdyaWQudG9wO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMucmVzaXplU25hcEdyaWQuYm90dG9tICYmXG4gICAgICAgICAgICAgICAgY3VycmVudFJlc2l6ZS5lZGdlcy5ib3R0b21cbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgc25hcEdyaWQueSA9ICt0aGlzLnJlc2l6ZVNuYXBHcmlkLmJvdHRvbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gc25hcEdyaWQ7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGZ1bmN0aW9uIGdldEdyaWQoXG4gICAgICAgICAgICBjb29yZHM6IHsgY2xpZW50WDogbnVtYmVyOyBjbGllbnRZOiBudW1iZXIgfSxcbiAgICAgICAgICAgIHNuYXBHcmlkOiBDb29yZGluYXRlXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB4OiBNYXRoLmNlaWwoY29vcmRzLmNsaWVudFggLyBzbmFwR3JpZC54KSxcbiAgICAgICAgICAgICAgeTogTWF0aC5jZWlsKGNvb3Jkcy5jbGllbnRZIC8gc25hcEdyaWQueSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIChtZXJnZShcbiAgICAgICAgICAgIG1vdXNlbW92ZSQucGlwZSh0YWtlKDEpKS5waXBlKG1hcChjb29yZHMgPT4gWywgY29vcmRzXSkpLFxuICAgICAgICAgICAgbW91c2Vtb3ZlJC5waXBlKHBhaXJ3aXNlKCkpXG4gICAgICAgICAgKSBhcyBPYnNlcnZhYmxlPFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICB7IGNsaWVudFg6IG51bWJlcjsgY2xpZW50WTogbnVtYmVyIH0sXG4gICAgICAgICAgICAgIHsgY2xpZW50WDogbnVtYmVyOyBjbGllbnRZOiBudW1iZXIgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgID4pXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgbWFwKChbcHJldmlvdXNDb29yZHMsIG5ld0Nvb3Jkc10pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgcHJldmlvdXNDb29yZHMgPyBnZXREaWZmKHByZXZpb3VzQ29vcmRzKSA6IHByZXZpb3VzQ29vcmRzLFxuICAgICAgICAgICAgICAgICAgZ2V0RGlmZihuZXdDb29yZHMpXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICBmaWx0ZXIoKFtwcmV2aW91c0Nvb3JkcywgbmV3Q29vcmRzXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcHJldmlvdXNDb29yZHMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHNuYXBHcmlkOiBDb29yZGluYXRlID0gZ2V0U25hcEdyaWQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2aW91c0dyaWQ6IENvb3JkaW5hdGUgPSBnZXRHcmlkKFxuICAgICAgICAgICAgICAgICAgcHJldmlvdXNDb29yZHMsXG4gICAgICAgICAgICAgICAgICBzbmFwR3JpZFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3R3JpZDogQ29vcmRpbmF0ZSA9IGdldEdyaWQobmV3Q29vcmRzLCBzbmFwR3JpZCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgcHJldmlvdXNHcmlkLnggIT09IG5ld0dyaWQueCB8fCBwcmV2aW91c0dyaWQueSAhPT0gbmV3R3JpZC55XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICBtYXAoKFssIG5ld0Nvb3Jkc10pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzbmFwR3JpZDogQ29vcmRpbmF0ZSA9IGdldFNuYXBHcmlkKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIGNsaWVudFg6XG4gICAgICAgICAgICAgICAgICAgIE1hdGgucm91bmQobmV3Q29vcmRzLmNsaWVudFggLyBzbmFwR3JpZC54KSAqIHNuYXBHcmlkLngsXG4gICAgICAgICAgICAgICAgICBjbGllbnRZOlxuICAgICAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKG5ld0Nvb3Jkcy5jbGllbnRZIC8gc25hcEdyaWQueSkgKiBzbmFwR3JpZC55XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5waXBlKHRha2VVbnRpbChtZXJnZShtb3VzZXVwJCwgbW91c2Vkb3duJCkpKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5waXBlKGZpbHRlcigoKSA9PiAhIWN1cnJlbnRSZXNpemUpKTtcblxuICAgIG1vdXNlZHJhZ1xuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoeyBjbGllbnRYLCBjbGllbnRZIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gZ2V0TmV3Qm91bmRpbmdSZWN0YW5nbGUoXG4gICAgICAgICAgICBjdXJyZW50UmVzaXplIS5zdGFydGluZ1JlY3QsXG4gICAgICAgICAgICBjdXJyZW50UmVzaXplIS5lZGdlcyxcbiAgICAgICAgICAgIGNsaWVudFgsXG4gICAgICAgICAgICBjbGllbnRZXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKG5ld0JvdW5kaW5nUmVjdDogQm91bmRpbmdSZWN0YW5nbGUpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdGhpcy5hbGxvd05lZ2F0aXZlUmVzaXplcyB8fFxuICAgICAgICAgICAgISEoXG4gICAgICAgICAgICAgIG5ld0JvdW5kaW5nUmVjdC5oZWlnaHQgJiZcbiAgICAgICAgICAgICAgbmV3Qm91bmRpbmdSZWN0LndpZHRoICYmXG4gICAgICAgICAgICAgIG5ld0JvdW5kaW5nUmVjdC5oZWlnaHQgPiAwICYmXG4gICAgICAgICAgICAgIG5ld0JvdW5kaW5nUmVjdC53aWR0aCA+IDBcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigobmV3Qm91bmRpbmdSZWN0OiBCb3VuZGluZ1JlY3RhbmdsZSkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlUmVzaXplXG4gICAgICAgICAgICA/IHRoaXMudmFsaWRhdGVSZXNpemUoe1xuICAgICAgICAgICAgICAgIHJlY3RhbmdsZTogbmV3Qm91bmRpbmdSZWN0LFxuICAgICAgICAgICAgICAgIGVkZ2VzOiBnZXRFZGdlc0RpZmYoe1xuICAgICAgICAgICAgICAgICAgZWRnZXM6IGN1cnJlbnRSZXNpemUhLmVkZ2VzLFxuICAgICAgICAgICAgICAgICAgaW5pdGlhbFJlY3RhbmdsZTogY3VycmVudFJlc2l6ZSEuc3RhcnRpbmdSZWN0LFxuICAgICAgICAgICAgICAgICAgbmV3UmVjdGFuZ2xlOiBuZXdCb3VuZGluZ1JlY3RcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiB0cnVlO1xuICAgICAgICB9KSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChuZXdCb3VuZGluZ1JlY3Q6IEJvdW5kaW5nUmVjdGFuZ2xlKSA9PiB7XG4gICAgICAgIGlmIChjdXJyZW50UmVzaXplICYmIGN1cnJlbnRSZXNpemUuY2xvbmVkTm9kZSkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgICBjdXJyZW50UmVzaXplLmNsb25lZE5vZGUsXG4gICAgICAgICAgICAnaGVpZ2h0JyxcbiAgICAgICAgICAgIGAke25ld0JvdW5kaW5nUmVjdC5oZWlnaHR9cHhgXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgY3VycmVudFJlc2l6ZS5jbG9uZWROb2RlLFxuICAgICAgICAgICAgJ3dpZHRoJyxcbiAgICAgICAgICAgIGAke25ld0JvdW5kaW5nUmVjdC53aWR0aH1weGBcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgICBjdXJyZW50UmVzaXplLmNsb25lZE5vZGUsXG4gICAgICAgICAgICAndG9wJyxcbiAgICAgICAgICAgIGAke25ld0JvdW5kaW5nUmVjdC50b3B9cHhgXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgY3VycmVudFJlc2l6ZS5jbG9uZWROb2RlLFxuICAgICAgICAgICAgJ2xlZnQnLFxuICAgICAgICAgICAgYCR7bmV3Qm91bmRpbmdSZWN0LmxlZnR9cHhgXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnJlc2l6aW5nLm9ic2VydmVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlc2l6aW5nLmVtaXQoe1xuICAgICAgICAgICAgICBlZGdlczogZ2V0RWRnZXNEaWZmKHtcbiAgICAgICAgICAgICAgICBlZGdlczogY3VycmVudFJlc2l6ZSEuZWRnZXMsXG4gICAgICAgICAgICAgICAgaW5pdGlhbFJlY3RhbmdsZTogY3VycmVudFJlc2l6ZSEuc3RhcnRpbmdSZWN0LFxuICAgICAgICAgICAgICAgIG5ld1JlY3RhbmdsZTogbmV3Qm91bmRpbmdSZWN0XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICByZWN0YW5nbGU6IG5ld0JvdW5kaW5nUmVjdFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFJlc2l6ZSEuY3VycmVudFJlY3QgPSBuZXdCb3VuZGluZ1JlY3Q7XG4gICAgICB9KTtcblxuICAgIG1vdXNlZG93biRcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHsgY2xpZW50WCwgY2xpZW50WSwgZWRnZXMgfSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBlZGdlcyB8fFxuICAgICAgICAgICAgZ2V0UmVzaXplRWRnZXMoe1xuICAgICAgICAgICAgICBjbGllbnRYLFxuICAgICAgICAgICAgICBjbGllbnRZLFxuICAgICAgICAgICAgICBlbG06IHRoaXMuZWxtLFxuICAgICAgICAgICAgICBhbGxvd2VkRWRnZXM6IHRoaXMucmVzaXplRWRnZXMsXG4gICAgICAgICAgICAgIGN1cnNvclByZWNpc2lvbjogdGhpcy5yZXNpemVDdXJzb3JQcmVjaXNpb25cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKGVkZ2VzOiBFZGdlcykgPT4ge1xuICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhlZGdlcykubGVuZ3RoID4gMDtcbiAgICAgICAgfSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoZWRnZXM6IEVkZ2VzKSA9PiB7XG4gICAgICAgIGlmIChjdXJyZW50UmVzaXplKSB7XG4gICAgICAgICAgcmVtb3ZlR2hvc3RFbGVtZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhcnRpbmdSZWN0OiBCb3VuZGluZ1JlY3RhbmdsZSA9IGdldEVsZW1lbnRSZWN0KFxuICAgICAgICAgIHRoaXMuZWxtLFxuICAgICAgICAgIHRoaXMuZ2hvc3RFbGVtZW50UG9zaXRpb25pbmdcbiAgICAgICAgKTtcbiAgICAgICAgY3VycmVudFJlc2l6ZSA9IHtcbiAgICAgICAgICBlZGdlcyxcbiAgICAgICAgICBzdGFydGluZ1JlY3QsXG4gICAgICAgICAgY3VycmVudFJlY3Q6IHN0YXJ0aW5nUmVjdFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXNpemVDdXJzb3JzID0gZ2V0UmVzaXplQ3Vyc29ycygpO1xuICAgICAgICBjb25zdCBjdXJzb3IgPSBnZXRSZXNpemVDdXJzb3IoY3VycmVudFJlc2l6ZS5lZGdlcywgcmVzaXplQ3Vyc29ycyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZG9jdW1lbnQuYm9keSwgJ2N1cnNvcicsIGN1cnNvcik7XG4gICAgICAgIHRoaXMuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxtLCBSRVNJWkVfQUNUSVZFX0NMQVNTLCB0cnVlKTtcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlR2hvc3RSZXNpemUpIHtcbiAgICAgICAgICBjdXJyZW50UmVzaXplLmNsb25lZE5vZGUgPSB0aGlzLmVsbS5uYXRpdmVFbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICB0aGlzLmVsbS5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICBjdXJyZW50UmVzaXplLmNsb25lZE5vZGVcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgICB0aGlzLmVsbS5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgJ3Zpc2liaWxpdHknLFxuICAgICAgICAgICAgJ2hpZGRlbidcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgICBjdXJyZW50UmVzaXplLmNsb25lZE5vZGUsXG4gICAgICAgICAgICAncG9zaXRpb24nLFxuICAgICAgICAgICAgdGhpcy5naG9zdEVsZW1lbnRQb3NpdGlvbmluZ1xuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICAgIGN1cnJlbnRSZXNpemUuY2xvbmVkTm9kZSxcbiAgICAgICAgICAgICdsZWZ0JyxcbiAgICAgICAgICAgIGAke2N1cnJlbnRSZXNpemUuc3RhcnRpbmdSZWN0LmxlZnR9cHhgXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgY3VycmVudFJlc2l6ZS5jbG9uZWROb2RlLFxuICAgICAgICAgICAgJ3RvcCcsXG4gICAgICAgICAgICBgJHtjdXJyZW50UmVzaXplLnN0YXJ0aW5nUmVjdC50b3B9cHhgXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgY3VycmVudFJlc2l6ZS5jbG9uZWROb2RlLFxuICAgICAgICAgICAgJ2hlaWdodCcsXG4gICAgICAgICAgICBgJHtjdXJyZW50UmVzaXplLnN0YXJ0aW5nUmVjdC5oZWlnaHR9cHhgXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgY3VycmVudFJlc2l6ZS5jbG9uZWROb2RlLFxuICAgICAgICAgICAgJ3dpZHRoJyxcbiAgICAgICAgICAgIGAke2N1cnJlbnRSZXNpemUuc3RhcnRpbmdSZWN0LndpZHRofXB4YFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICAgIGN1cnJlbnRSZXNpemUuY2xvbmVkTm9kZSxcbiAgICAgICAgICAgICdjdXJzb3InLFxuICAgICAgICAgICAgZ2V0UmVzaXplQ3Vyc29yKGN1cnJlbnRSZXNpemUuZWRnZXMsIHJlc2l6ZUN1cnNvcnMpXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKFxuICAgICAgICAgICAgY3VycmVudFJlc2l6ZS5jbG9uZWROb2RlLFxuICAgICAgICAgICAgUkVTSVpFX0dIT1NUX0VMRU1FTlRfQ0xBU1NcbiAgICAgICAgICApO1xuICAgICAgICAgIGN1cnJlbnRSZXNpemUuY2xvbmVkTm9kZSEuc2Nyb2xsVG9wID0gY3VycmVudFJlc2l6ZS5zdGFydGluZ1JlY3RcbiAgICAgICAgICAgIC5zY3JvbGxUb3AgYXMgbnVtYmVyO1xuICAgICAgICAgIGN1cnJlbnRSZXNpemUuY2xvbmVkTm9kZSEuc2Nyb2xsTGVmdCA9IGN1cnJlbnRSZXNpemUuc3RhcnRpbmdSZWN0XG4gICAgICAgICAgICAuc2Nyb2xsTGVmdCBhcyBudW1iZXI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucmVzaXplU3RhcnQub2JzZXJ2ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzaXplU3RhcnQuZW1pdCh7XG4gICAgICAgICAgICAgIGVkZ2VzOiBnZXRFZGdlc0RpZmYoe1xuICAgICAgICAgICAgICAgIGVkZ2VzLFxuICAgICAgICAgICAgICAgIGluaXRpYWxSZWN0YW5nbGU6IHN0YXJ0aW5nUmVjdCxcbiAgICAgICAgICAgICAgICBuZXdSZWN0YW5nbGU6IHN0YXJ0aW5nUmVjdFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgcmVjdGFuZ2xlOiBnZXROZXdCb3VuZGluZ1JlY3RhbmdsZShzdGFydGluZ1JlY3QsIHt9LCAwLCAwKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgbW91c2V1cCQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAoY3VycmVudFJlc2l6ZSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQsIFJFU0laRV9BQ1RJVkVfQ0xBU1MpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGRvY3VtZW50LmJvZHksICdjdXJzb3InLCAnJyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbG0ubmF0aXZlRWxlbWVudCwgJ2N1cnNvcicsICcnKTtcbiAgICAgICAgaWYgKHRoaXMucmVzaXplRW5kLm9ic2VydmVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZUVuZC5lbWl0KHtcbiAgICAgICAgICAgICAgZWRnZXM6IGdldEVkZ2VzRGlmZih7XG4gICAgICAgICAgICAgICAgZWRnZXM6IGN1cnJlbnRSZXNpemUhLmVkZ2VzLFxuICAgICAgICAgICAgICAgIGluaXRpYWxSZWN0YW5nbGU6IGN1cnJlbnRSZXNpemUhLnN0YXJ0aW5nUmVjdCxcbiAgICAgICAgICAgICAgICBuZXdSZWN0YW5nbGU6IGN1cnJlbnRSZXNpemUhLmN1cnJlbnRSZWN0XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICByZWN0YW5nbGU6IGN1cnJlbnRSZXNpemUhLmN1cnJlbnRSZWN0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZW1vdmVHaG9zdEVsZW1lbnQoKTtcbiAgICAgICAgY3VycmVudFJlc2l6ZSA9IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLnJlc2l6ZUVkZ2VzKSB7XG4gICAgICB0aGlzLnJlc2l6ZUVkZ2VzJC5uZXh0KHRoaXMucmVzaXplRWRnZXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAvLyBicm93c2VyIGNoZWNrIGZvciBhbmd1bGFyIHVuaXZlcnNhbCwgYmVjYXVzZSBpdCBkb2Vzbid0IGtub3cgd2hhdCBkb2N1bWVudCBpc1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGRvY3VtZW50LmJvZHksICdjdXJzb3InLCAnJyk7XG4gICAgfVxuICAgIHRoaXMubW91c2Vkb3duLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5tb3VzZXVwLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5tb3VzZW1vdmUuY29tcGxldGUoKTtcbiAgICB0aGlzLnJlc2l6ZUVkZ2VzJC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRFbGVtZW50Q2xhc3MoZWxtOiBFbGVtZW50UmVmLCBuYW1lOiBzdHJpbmcsIGFkZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChhZGQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxtLm5hdGl2ZUVsZW1lbnQsIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsbS5uYXRpdmVFbGVtZW50LCBuYW1lKTtcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgUG9pbnRlckV2ZW50TGlzdGVuZXJzIHtcbiAgcHVibGljIHBvaW50ZXJEb3duOiBPYnNlcnZhYmxlPFBvaW50ZXJFdmVudENvb3JkaW5hdGU+O1xuXG4gIHB1YmxpYyBwb2ludGVyTW92ZTogT2JzZXJ2YWJsZTxQb2ludGVyRXZlbnRDb29yZGluYXRlPjtcblxuICBwdWJsaWMgcG9pbnRlclVwOiBPYnNlcnZhYmxlPFBvaW50ZXJFdmVudENvb3JkaW5hdGU+O1xuXG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBQb2ludGVyRXZlbnRMaXN0ZW5lcnM7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcblxuICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgem9uZTogTmdab25lXG4gICk6IFBvaW50ZXJFdmVudExpc3RlbmVycyB7XG4gICAgaWYgKCFQb2ludGVyRXZlbnRMaXN0ZW5lcnMuaW5zdGFuY2UpIHtcbiAgICAgIFBvaW50ZXJFdmVudExpc3RlbmVycy5pbnN0YW5jZSA9IG5ldyBQb2ludGVyRXZlbnRMaXN0ZW5lcnMoXG4gICAgICAgIHJlbmRlcmVyLFxuICAgICAgICB6b25lXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gUG9pbnRlckV2ZW50TGlzdGVuZXJzLmluc3RhbmNlO1xuICB9XG5cbiAgY29uc3RydWN0b3IocmVuZGVyZXI6IFJlbmRlcmVyMiwgem9uZTogTmdab25lKSB7XG4gICAgdGhpcy5wb2ludGVyRG93biA9IG5ldyBPYnNlcnZhYmxlKFxuICAgICAgKG9ic2VydmVyOiBPYnNlcnZlcjxQb2ludGVyRXZlbnRDb29yZGluYXRlPikgPT4ge1xuICAgICAgICBsZXQgdW5zdWJzY3JpYmVNb3VzZURvd246ICgpID0+IHZvaWQ7XG4gICAgICAgIGxldCB1bnN1YnNjcmliZVRvdWNoU3RhcnQ6ICgpID0+IHZvaWQ7XG5cbiAgICAgICAgem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgdW5zdWJzY3JpYmVNb3VzZURvd24gPSByZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgICAnZG9jdW1lbnQnLFxuICAgICAgICAgICAgJ21vdXNlZG93bicsXG4gICAgICAgICAgICAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh7XG4gICAgICAgICAgICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgICAgICAgICBjbGllbnRZOiBldmVudC5jbGllbnRZLFxuICAgICAgICAgICAgICAgIGV2ZW50XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICB1bnN1YnNjcmliZVRvdWNoU3RhcnQgPSByZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgICAnZG9jdW1lbnQnLFxuICAgICAgICAgICAgJ3RvdWNoc3RhcnQnLFxuICAgICAgICAgICAgKGV2ZW50OiBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoe1xuICAgICAgICAgICAgICAgIGNsaWVudFg6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCxcbiAgICAgICAgICAgICAgICBjbGllbnRZOiBldmVudC50b3VjaGVzWzBdLmNsaWVudFksXG4gICAgICAgICAgICAgICAgZXZlbnRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICB1bnN1YnNjcmliZU1vdXNlRG93bigpO1xuICAgICAgICAgIHVuc3Vic2NyaWJlVG91Y2hTdGFydCgpO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICkucGlwZShzaGFyZSgpKTtcblxuICAgIHRoaXMucG9pbnRlck1vdmUgPSBuZXcgT2JzZXJ2YWJsZShcbiAgICAgIChvYnNlcnZlcjogT2JzZXJ2ZXI8UG9pbnRlckV2ZW50Q29vcmRpbmF0ZT4pID0+IHtcbiAgICAgICAgbGV0IHVuc3Vic2NyaWJlTW91c2VNb3ZlOiAoKSA9PiB2b2lkO1xuICAgICAgICBsZXQgdW5zdWJzY3JpYmVUb3VjaE1vdmU6ICgpID0+IHZvaWQ7XG5cbiAgICAgICAgem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgdW5zdWJzY3JpYmVNb3VzZU1vdmUgPSByZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgICAnZG9jdW1lbnQnLFxuICAgICAgICAgICAgJ21vdXNlbW92ZScsXG4gICAgICAgICAgICAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh7XG4gICAgICAgICAgICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgICAgICAgICBjbGllbnRZOiBldmVudC5jbGllbnRZLFxuICAgICAgICAgICAgICAgIGV2ZW50XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICB1bnN1YnNjcmliZVRvdWNoTW92ZSA9IHJlbmRlcmVyLmxpc3RlbihcbiAgICAgICAgICAgICdkb2N1bWVudCcsXG4gICAgICAgICAgICAndG91Y2htb3ZlJyxcbiAgICAgICAgICAgIChldmVudDogVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHtcbiAgICAgICAgICAgICAgICBjbGllbnRYOiBldmVudC50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFgsXG4gICAgICAgICAgICAgICAgY2xpZW50WTogZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRZLFxuICAgICAgICAgICAgICAgIGV2ZW50XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgdW5zdWJzY3JpYmVNb3VzZU1vdmUoKTtcbiAgICAgICAgICB1bnN1YnNjcmliZVRvdWNoTW92ZSgpO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICkucGlwZShzaGFyZSgpKTtcblxuICAgIHRoaXMucG9pbnRlclVwID0gbmV3IE9ic2VydmFibGUoXG4gICAgICAob2JzZXJ2ZXI6IE9ic2VydmVyPFBvaW50ZXJFdmVudENvb3JkaW5hdGU+KSA9PiB7XG4gICAgICAgIGxldCB1bnN1YnNjcmliZU1vdXNlVXA6ICgpID0+IHZvaWQ7XG4gICAgICAgIGxldCB1bnN1YnNjcmliZVRvdWNoRW5kOiAoKSA9PiB2b2lkO1xuICAgICAgICBsZXQgdW5zdWJzY3JpYmVUb3VjaENhbmNlbDogKCkgPT4gdm9pZDtcblxuICAgICAgICB6b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICB1bnN1YnNjcmliZU1vdXNlVXAgPSByZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgICAnZG9jdW1lbnQnLFxuICAgICAgICAgICAgJ21vdXNldXAnLFxuICAgICAgICAgICAgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoe1xuICAgICAgICAgICAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WSxcbiAgICAgICAgICAgICAgICBldmVudFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgdW5zdWJzY3JpYmVUb3VjaEVuZCA9IHJlbmRlcmVyLmxpc3RlbihcbiAgICAgICAgICAgICdkb2N1bWVudCcsXG4gICAgICAgICAgICAndG91Y2hlbmQnLFxuICAgICAgICAgICAgKGV2ZW50OiBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoe1xuICAgICAgICAgICAgICAgIGNsaWVudFg6IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXG4gICAgICAgICAgICAgICAgY2xpZW50WTogZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSxcbiAgICAgICAgICAgICAgICBldmVudFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgdW5zdWJzY3JpYmVUb3VjaENhbmNlbCA9IHJlbmRlcmVyLmxpc3RlbihcbiAgICAgICAgICAgICdkb2N1bWVudCcsXG4gICAgICAgICAgICAndG91Y2hjYW5jZWwnLFxuICAgICAgICAgICAgKGV2ZW50OiBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoe1xuICAgICAgICAgICAgICAgIGNsaWVudFg6IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXG4gICAgICAgICAgICAgICAgY2xpZW50WTogZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSxcbiAgICAgICAgICAgICAgICBldmVudFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgIHVuc3Vic2NyaWJlTW91c2VVcCgpO1xuICAgICAgICAgIHVuc3Vic2NyaWJlVG91Y2hFbmQoKTtcbiAgICAgICAgICB1bnN1YnNjcmliZVRvdWNoQ2FuY2VsKCk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgKS5waXBlKHNoYXJlKCkpO1xuICB9XG59XG4iXX0=