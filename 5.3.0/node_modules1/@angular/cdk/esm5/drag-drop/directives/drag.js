/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __read, __spread } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { DOCUMENT } from '@angular/common';
import { ContentChild, ContentChildren, Directive, ElementRef, EventEmitter, Inject, InjectionToken, Input, NgZone, Optional, Output, QueryList, SkipSelf, ViewContainerRef, ChangeDetectorRef, isDevMode, } from '@angular/core';
import { coerceBooleanProperty, coerceNumberProperty, coerceElement } from '@angular/cdk/coercion';
import { Observable, Subject, merge } from 'rxjs';
import { startWith, take, map, takeUntil, switchMap, tap } from 'rxjs/operators';
import { CdkDragHandle } from './drag-handle';
import { CdkDragPlaceholder } from './drag-placeholder';
import { CdkDragPreview } from './drag-preview';
import { CDK_DRAG_PARENT } from '../drag-parent';
import { DragDrop } from '../drag-drop';
/**
 * Injection token that is used to provide a CdkDropList instance to CdkDrag.
 * Used for avoiding circular imports.
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/bidi';
export var CDK_DROP_LIST = new InjectionToken('CDK_DROP_LIST');
/** Injection token that can be used to configure the behavior of `CdkDrag`. */
export var CDK_DRAG_CONFIG = new InjectionToken('CDK_DRAG_CONFIG', {
    providedIn: 'root',
    factory: CDK_DRAG_CONFIG_FACTORY
});
/** @docs-private */
export function CDK_DRAG_CONFIG_FACTORY() {
    return { dragStartThreshold: 5, pointerDirectionChangeThreshold: 5 };
}
/** Element that can be moved inside a CdkDropList container. */
var CdkDrag = /** @class */ (function () {
    function CdkDrag(
    /** Element that the draggable is attached to. */
    element, 
    /** Droppable container that the draggable is a part of. */
    dropContainer, _document, _ngZone, _viewContainerRef, config, _dir, dragDrop, _changeDetectorRef) {
        var _this = this;
        this.element = element;
        this.dropContainer = dropContainer;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._dir = _dir;
        this._changeDetectorRef = _changeDetectorRef;
        this._destroyed = new Subject();
        /**
         * Amount of milliseconds to wait after the user has put their
         * pointer down before starting to drag the element.
         */
        this.dragStartDelay = 0;
        this._disabled = false;
        /** Emits when the user starts dragging the item. */
        this.started = new EventEmitter();
        /** Emits when the user has released a drag item, before any animations have started. */
        this.released = new EventEmitter();
        /** Emits when the user stops dragging an item in the container. */
        this.ended = new EventEmitter();
        /** Emits when the user has moved the item into a new container. */
        this.entered = new EventEmitter();
        /** Emits when the user removes the item its container by dragging it into another container. */
        this.exited = new EventEmitter();
        /** Emits when the user drops the item inside a container. */
        this.dropped = new EventEmitter();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */
        this.moved = new Observable(function (observer) {
            var subscription = _this._dragRef.moved.pipe(map(function (movedEvent) { return ({
                source: _this,
                pointerPosition: movedEvent.pointerPosition,
                event: movedEvent.event,
                delta: movedEvent.delta,
                distance: movedEvent.distance
            }); })).subscribe(observer);
            return function () {
                subscription.unsubscribe();
            };
        });
        this._dragRef = dragDrop.createDrag(element, config);
        this._dragRef.data = this;
        this._syncInputs(this._dragRef);
        this._handleEvents(this._dragRef);
    }
    Object.defineProperty(CdkDrag.prototype, "disabled", {
        /** Whether starting to drag this element is disabled. */
        get: function () {
            return this._disabled || (this.dropContainer && this.dropContainer.disabled);
        },
        set: function (value) {
            this._disabled = coerceBooleanProperty(value);
            this._dragRef.disabled = this._disabled;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     */
    CdkDrag.prototype.getPlaceholderElement = function () {
        return this._dragRef.getPlaceholderElement();
    };
    /** Returns the root draggable element. */
    CdkDrag.prototype.getRootElement = function () {
        return this._dragRef.getRootElement();
    };
    /** Resets a standalone drag item to its initial position. */
    CdkDrag.prototype.reset = function () {
        this._dragRef.reset();
    };
    /**
     * Gets the pixel coordinates of the draggable outside of a drop container.
     */
    CdkDrag.prototype.getFreeDragPosition = function () {
        return this._dragRef.getFreeDragPosition();
    };
    CdkDrag.prototype.ngAfterViewInit = function () {
        var _this = this;
        // We need to wait for the zone to stabilize, in order for the reference
        // element to be in the proper place in the DOM. This is mostly relevant
        // for draggable elements inside portals since they get stamped out in
        // their original DOM position and then they get transferred to the portal.
        this._ngZone.onStable.asObservable()
            .pipe(take(1), takeUntil(this._destroyed))
            .subscribe(function () {
            _this._updateRootElement();
            // Listen for any newly-added handles.
            _this._handles.changes.pipe(startWith(_this._handles), 
            // Sync the new handles with the DragRef.
            tap(function (handles) {
                var childHandleElements = handles
                    .filter(function (handle) { return handle._parentDrag === _this; })
                    .map(function (handle) { return handle.element; });
                _this._dragRef.withHandles(childHandleElements);
            }), 
            // Listen if the state of any of the handles changes.
            switchMap(function (handles) {
                return merge.apply(void 0, __spread(handles.map(function (item) {
                    return item._stateChanges.pipe(startWith(item));
                })));
            }), takeUntil(_this._destroyed)).subscribe(function (handleInstance) {
                // Enabled/disable the handle that changed in the DragRef.
                var dragRef = _this._dragRef;
                var handle = handleInstance.element.nativeElement;
                handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
            });
            if (_this.freeDragPosition) {
                _this._dragRef.setFreeDragPosition(_this.freeDragPosition);
            }
        });
    };
    CdkDrag.prototype.ngOnChanges = function (changes) {
        var rootSelectorChange = changes['rootElementSelector'];
        var positionChange = changes['freeDragPosition'];
        // We don't have to react to the first change since it's being
        // handled in `ngAfterViewInit` where it needs to be deferred.
        if (rootSelectorChange && !rootSelectorChange.firstChange) {
            this._updateRootElement();
        }
        // Skip the first change since it's being handled in `ngAfterViewInit`.
        if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
            this._dragRef.setFreeDragPosition(this.freeDragPosition);
        }
    };
    CdkDrag.prototype.ngOnDestroy = function () {
        this._destroyed.next();
        this._destroyed.complete();
        this._dragRef.dispose();
    };
    /** Syncs the root element with the `DragRef`. */
    CdkDrag.prototype._updateRootElement = function () {
        var element = this.element.nativeElement;
        var rootElement = this.rootElementSelector ?
            getClosestMatchingAncestor(element, this.rootElementSelector) : element;
        if (rootElement && rootElement.nodeType !== this._document.ELEMENT_NODE) {
            throw Error("cdkDrag must be attached to an element node. " +
                ("Currently attached to \"" + rootElement.nodeName + "\"."));
        }
        this._dragRef.withRootElement(rootElement || element);
    };
    /** Gets the boundary element, based on the `boundaryElement` value. */
    CdkDrag.prototype._getBoundaryElement = function () {
        var boundary = this.boundaryElement;
        if (!boundary) {
            return null;
        }
        if (typeof boundary === 'string') {
            return getClosestMatchingAncestor(this.element.nativeElement, boundary);
        }
        var element = coerceElement(boundary);
        if (isDevMode() && !element.contains(this.element.nativeElement)) {
            throw Error('Draggable element is not inside of the node passed into cdkDragBoundary.');
        }
        return element;
    };
    /** Syncs the inputs of the CdkDrag with the options of the underlying DragRef. */
    CdkDrag.prototype._syncInputs = function (ref) {
        var _this = this;
        ref.beforeStarted.subscribe(function () {
            if (!ref.isDragging()) {
                var dir = _this._dir;
                var dragStartDelay = _this.dragStartDelay;
                var placeholder = _this._placeholderTemplate ? {
                    template: _this._placeholderTemplate.templateRef,
                    context: _this._placeholderTemplate.data,
                    viewContainer: _this._viewContainerRef
                } : null;
                var preview = _this._previewTemplate ? {
                    template: _this._previewTemplate.templateRef,
                    context: _this._previewTemplate.data,
                    viewContainer: _this._viewContainerRef
                } : null;
                ref.disabled = _this.disabled;
                ref.lockAxis = _this.lockAxis;
                ref.dragStartDelay = (typeof dragStartDelay === 'object' && dragStartDelay) ?
                    dragStartDelay : coerceNumberProperty(dragStartDelay);
                ref.constrainPosition = _this.constrainPosition;
                ref.previewClass = _this.previewClass;
                ref
                    .withBoundaryElement(_this._getBoundaryElement())
                    .withPlaceholderTemplate(placeholder)
                    .withPreviewTemplate(preview);
                if (dir) {
                    ref.withDirection(dir.value);
                }
            }
        });
    };
    /** Handles the events from the underlying `DragRef`. */
    CdkDrag.prototype._handleEvents = function (ref) {
        var _this = this;
        ref.started.subscribe(function () {
            _this.started.emit({ source: _this });
            // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.
            _this._changeDetectorRef.markForCheck();
        });
        ref.released.subscribe(function () {
            _this.released.emit({ source: _this });
        });
        ref.ended.subscribe(function (event) {
            _this.ended.emit({ source: _this, distance: event.distance });
            // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.
            _this._changeDetectorRef.markForCheck();
        });
        ref.entered.subscribe(function (event) {
            _this.entered.emit({
                container: event.container.data,
                item: _this,
                currentIndex: event.currentIndex
            });
        });
        ref.exited.subscribe(function (event) {
            _this.exited.emit({
                container: event.container.data,
                item: _this
            });
        });
        ref.dropped.subscribe(function (event) {
            _this.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                isPointerOverContainer: event.isPointerOverContainer,
                item: _this,
                distance: event.distance
            });
        });
    };
    /** @nocollapse */
    CdkDrag.ctorParameters = function () { return [
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Inject, args: [CDK_DROP_LIST,] }, { type: Optional }, { type: SkipSelf }] },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: NgZone },
        { type: ViewContainerRef },
        { type: undefined, decorators: [{ type: Inject, args: [CDK_DRAG_CONFIG,] }] },
        { type: Directionality, decorators: [{ type: Optional }] },
        { type: DragDrop },
        { type: ChangeDetectorRef }
    ]; };
    CdkDrag.propDecorators = {
        _handles: [{ type: ContentChildren, args: [CdkDragHandle, { descendants: true },] }],
        _previewTemplate: [{ type: ContentChild, args: [CdkDragPreview,] }],
        _placeholderTemplate: [{ type: ContentChild, args: [CdkDragPlaceholder,] }],
        data: [{ type: Input, args: ['cdkDragData',] }],
        lockAxis: [{ type: Input, args: ['cdkDragLockAxis',] }],
        rootElementSelector: [{ type: Input, args: ['cdkDragRootElement',] }],
        boundaryElement: [{ type: Input, args: ['cdkDragBoundary',] }],
        dragStartDelay: [{ type: Input, args: ['cdkDragStartDelay',] }],
        freeDragPosition: [{ type: Input, args: ['cdkDragFreeDragPosition',] }],
        disabled: [{ type: Input, args: ['cdkDragDisabled',] }],
        constrainPosition: [{ type: Input, args: ['cdkDragConstrainPosition',] }],
        previewClass: [{ type: Input, args: ['cdkDragPreviewClass',] }],
        started: [{ type: Output, args: ['cdkDragStarted',] }],
        released: [{ type: Output, args: ['cdkDragReleased',] }],
        ended: [{ type: Output, args: ['cdkDragEnded',] }],
        entered: [{ type: Output, args: ['cdkDragEntered',] }],
        exited: [{ type: Output, args: ['cdkDragExited',] }],
        dropped: [{ type: Output, args: ['cdkDragDropped',] }],
        moved: [{ type: Output, args: ['cdkDragMoved',] }]
    };
CdkDrag.ɵfac = function CdkDrag_Factory(t) { return new (t || CdkDrag)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(CDK_DROP_LIST, 12), ɵngcc0.ɵɵdirectiveInject(DOCUMENT), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(CDK_DRAG_CONFIG), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Directionality, 8), ɵngcc0.ɵɵdirectiveInject(DragDrop), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
CdkDrag.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkDrag, selectors: [["", "cdkDrag", ""]], contentQueries: function CdkDrag_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, CdkDragPreview, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, CdkDragPlaceholder, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, CdkDragHandle, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._previewTemplate = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._placeholderTemplate = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._handles = _t);
    } }, hostAttrs: [1, "cdk-drag"], hostVars: 4, hostBindings: function CdkDrag_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("cdk-drag-disabled", ctx.disabled)("cdk-drag-dragging", ctx._dragRef.isDragging());
    } }, inputs: { dragStartDelay: ["cdkDragStartDelay", "dragStartDelay"], disabled: ["cdkDragDisabled", "disabled"], data: ["cdkDragData", "data"], lockAxis: ["cdkDragLockAxis", "lockAxis"], rootElementSelector: ["cdkDragRootElement", "rootElementSelector"], boundaryElement: ["cdkDragBoundary", "boundaryElement"], freeDragPosition: ["cdkDragFreeDragPosition", "freeDragPosition"], constrainPosition: ["cdkDragConstrainPosition", "constrainPosition"], previewClass: ["cdkDragPreviewClass", "previewClass"] }, outputs: { started: "cdkDragStarted", released: "cdkDragReleased", ended: "cdkDragEnded", entered: "cdkDragEntered", exited: "cdkDragExited", dropped: "cdkDragDropped", moved: "cdkDragMoved" }, exportAs: ["cdkDrag"], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CDK_DRAG_PARENT, useExisting: CdkDrag }]), ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkDrag, [{
        type: Directive,
        args: [{
                selector: '[cdkDrag]',
                exportAs: 'cdkDrag',
                host: {
                    'class': 'cdk-drag',
                    '[class.cdk-drag-disabled]': 'disabled',
                    '[class.cdk-drag-dragging]': '_dragRef.isDragging()'
                },
                providers: [{ provide: CDK_DRAG_PARENT, useExisting: CdkDrag }]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [CDK_DROP_LIST]
            }, {
                type: Optional
            }, {
                type: SkipSelf
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: ɵngcc0.NgZone }, { type: ɵngcc0.ViewContainerRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [CDK_DRAG_CONFIG]
            }] }, { type: ɵngcc1.Directionality, decorators: [{
                type: Optional
            }] }, { type: DragDrop }, { type: ɵngcc0.ChangeDetectorRef }]; }, { dragStartDelay: [{
            type: Input,
            args: ['cdkDragStartDelay']
        }], started: [{
            type: Output,
            args: ['cdkDragStarted']
        }], released: [{
            type: Output,
            args: ['cdkDragReleased']
        }], ended: [{
            type: Output,
            args: ['cdkDragEnded']
        }], entered: [{
            type: Output,
            args: ['cdkDragEntered']
        }], exited: [{
            type: Output,
            args: ['cdkDragExited']
        }], dropped: [{
            type: Output,
            args: ['cdkDragDropped']
        }], moved: [{
            type: Output,
            args: ['cdkDragMoved']
        }], disabled: [{
            type: Input,
            args: ['cdkDragDisabled']
        }], _handles: [{
            type: ContentChildren,
            args: [CdkDragHandle, { descendants: true }]
        }], _previewTemplate: [{
            type: ContentChild,
            args: [CdkDragPreview]
        }], _placeholderTemplate: [{
            type: ContentChild,
            args: [CdkDragPlaceholder]
        }], data: [{
            type: Input,
            args: ['cdkDragData']
        }], lockAxis: [{
            type: Input,
            args: ['cdkDragLockAxis']
        }], rootElementSelector: [{
            type: Input,
            args: ['cdkDragRootElement']
        }], boundaryElement: [{
            type: Input,
            args: ['cdkDragBoundary']
        }], freeDragPosition: [{
            type: Input,
            args: ['cdkDragFreeDragPosition']
        }], constrainPosition: [{
            type: Input,
            args: ['cdkDragConstrainPosition']
        }], previewClass: [{
            type: Input,
            args: ['cdkDragPreviewClass']
        }] }); })();
    return CdkDrag;
}());
export { CdkDrag };
/** Gets the closest ancestor of an element that matches a selector. */
function getClosestMatchingAncestor(element, selector) {
    var currentElement = element.parentElement;
    while (currentElement) {
        // IE doesn't support `matches` so we have to fall back to `msMatchesSelector`.
        if (currentElement.matches ? currentElement.matches(selector) :
            currentElement.msMatchesSelector(selector)) {
            return currentElement;
        }
        currentElement = currentElement.parentElement;
    }
    return null;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9kcmFnLWRyb3AvZGlyZWN0aXZlcy9kcmFnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUVMLFlBQVksRUFDWixlQUFlLEVBQ2YsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLGNBQWMsRUFDZCxLQUFLLEVBQ0wsTUFBTSxFQUVOLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULFFBQVEsRUFDUixnQkFBZ0IsRUFHaEIsaUJBQWlCLEVBQ2pCLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLG9CQUFvQixFQUNwQixhQUFhLEVBRWQsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQUMsVUFBVSxFQUFZLE9BQU8sRUFBRSxLQUFLLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDMUQsT0FBTyxFQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFVL0UsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRy9DLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFFdEM7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QUFBTywwQkFJN0IsTUFBTSxTQUFDLGdCQUFnQjtBQUFPLHdCQU85QixNQUFNLFNBQUMsY0FBYztBQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBTTtBQUFDLElBOE9yQyxjQUFDO0FBRUQsQ0FGQyxBQXhWRCxJQXdWQztBQUNELFNBL1VhLE9BQU87QUFnVnBCLHVFQUF1RTtBQUN2RSxTQUFTLDBCQUEwQixDQUFDLE9BQW9CLEVBQUUsUUFBZ0I7QUFDMUUsSUFBRSxJQUFJLGNBQWMsR0FBRyxPQUFPLENBQUMsYUFBbUMsQ0FBQztBQUNuRSxJQUNFLE9BQU8sY0FBYyxFQUFFO0FBQ3pCLFFBQUksK0VBQStFO0FBQ25GLFFBQUksSUFBSSxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDbkUsWUFBUyxjQUFzQixDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQzdELFlBQU0sT0FBTyxjQUFjLENBQUM7QUFDNUIsU0FBSztBQUNMLFFBQ0ksY0FBYyxHQUFHLGNBQWMsQ0FBQyxhQUFhLENBQUM7QUFDbEQsS0FBRztBQUNILElBQ0UsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtEaXJlY3Rpb25hbGl0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbnRlbnRDaGlsZCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbmplY3Rpb25Ub2tlbixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFNraXBTZWxmLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBpc0Rldk1vZGUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgY29lcmNlQm9vbGVhblByb3BlcnR5LFxuICBjb2VyY2VOdW1iZXJQcm9wZXJ0eSxcbiAgY29lcmNlRWxlbWVudCxcbiAgQm9vbGVhbklucHV0XG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge09ic2VydmFibGUsIE9ic2VydmVyLCBTdWJqZWN0LCBtZXJnZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge3N0YXJ0V2l0aCwgdGFrZSwgbWFwLCB0YWtlVW50aWwsIHN3aXRjaE1hcCwgdGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBDZGtEcmFnRHJvcCxcbiAgQ2RrRHJhZ0VuZCxcbiAgQ2RrRHJhZ0VudGVyLFxuICBDZGtEcmFnRXhpdCxcbiAgQ2RrRHJhZ01vdmUsXG4gIENka0RyYWdTdGFydCxcbiAgQ2RrRHJhZ1JlbGVhc2UsXG59IGZyb20gJy4uL2RyYWctZXZlbnRzJztcbmltcG9ydCB7Q2RrRHJhZ0hhbmRsZX0gZnJvbSAnLi9kcmFnLWhhbmRsZSc7XG5pbXBvcnQge0Nka0RyYWdQbGFjZWhvbGRlcn0gZnJvbSAnLi9kcmFnLXBsYWNlaG9sZGVyJztcbmltcG9ydCB7Q2RrRHJhZ1ByZXZpZXd9IGZyb20gJy4vZHJhZy1wcmV2aWV3JztcbmltcG9ydCB7Q0RLX0RSQUdfUEFSRU5UfSBmcm9tICcuLi9kcmFnLXBhcmVudCc7XG5pbXBvcnQge0RyYWdSZWYsIERyYWdSZWZDb25maWcsIFBvaW50fSBmcm9tICcuLi9kcmFnLXJlZic7XG5pbXBvcnQge0Nka0Ryb3BMaXN0SW50ZXJuYWwgYXMgQ2RrRHJvcExpc3R9IGZyb20gJy4vZHJvcC1saXN0JztcbmltcG9ydCB7RHJhZ0Ryb3B9IGZyb20gJy4uL2RyYWctZHJvcCc7XG5cbi8qKlxuICogSW5qZWN0aW9uIHRva2VuIHRoYXQgaXMgdXNlZCB0byBwcm92aWRlIGEgQ2RrRHJvcExpc3QgaW5zdGFuY2UgdG8gQ2RrRHJhZy5cbiAqIFVzZWQgZm9yIGF2b2lkaW5nIGNpcmN1bGFyIGltcG9ydHMuXG4gKi9cbmV4cG9ydCBjb25zdCBDREtfRFJPUF9MSVNUID0gbmV3IEluamVjdGlvblRva2VuPENka0Ryb3BMaXN0PignQ0RLX0RST1BfTElTVCcpO1xuXG4vKiogSW5qZWN0aW9uIHRva2VuIHRoYXQgY2FuIGJlIHVzZWQgdG8gY29uZmlndXJlIHRoZSBiZWhhdmlvciBvZiBgQ2RrRHJhZ2AuICovXG5leHBvcnQgY29uc3QgQ0RLX0RSQUdfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPERyYWdSZWZDb25maWc+KCdDREtfRFJBR19DT05GSUcnLCB7XG4gIHByb3ZpZGVkSW46ICdyb290JyxcbiAgZmFjdG9yeTogQ0RLX0RSQUdfQ09ORklHX0ZBQ1RPUllcbn0pO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIENES19EUkFHX0NPTkZJR19GQUNUT1JZKCk6IERyYWdSZWZDb25maWcge1xuICByZXR1cm4ge2RyYWdTdGFydFRocmVzaG9sZDogNSwgcG9pbnRlckRpcmVjdGlvbkNoYW5nZVRocmVzaG9sZDogNX07XG59XG5cbi8qKiBFbGVtZW50IHRoYXQgY2FuIGJlIG1vdmVkIGluc2lkZSBhIENka0Ryb3BMaXN0IGNvbnRhaW5lci4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjZGtEcmFnXScsXG4gIGV4cG9ydEFzOiAnY2RrRHJhZycsXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnY2RrLWRyYWcnLFxuICAgICdbY2xhc3MuY2RrLWRyYWctZGlzYWJsZWRdJzogJ2Rpc2FibGVkJyxcbiAgICAnW2NsYXNzLmNkay1kcmFnLWRyYWdnaW5nXSc6ICdfZHJhZ1JlZi5pc0RyYWdnaW5nKCknLFxuICB9LFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogQ0RLX0RSQUdfUEFSRU5ULCB1c2VFeGlzdGluZzogQ2RrRHJhZ31dXG59KVxuZXhwb3J0IGNsYXNzIENka0RyYWc8VCA9IGFueT4gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2Rlc3Ryb3llZCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqIFJlZmVyZW5jZSB0byB0aGUgdW5kZXJseWluZyBkcmFnIGluc3RhbmNlLiAqL1xuICBfZHJhZ1JlZjogRHJhZ1JlZjxDZGtEcmFnPFQ+PjtcblxuICAvKiogRWxlbWVudHMgdGhhdCBjYW4gYmUgdXNlZCB0byBkcmFnIHRoZSBkcmFnZ2FibGUgaXRlbS4gKi9cbiAgQENvbnRlbnRDaGlsZHJlbihDZGtEcmFnSGFuZGxlLCB7ZGVzY2VuZGFudHM6IHRydWV9KSBfaGFuZGxlczogUXVlcnlMaXN0PENka0RyYWdIYW5kbGU+O1xuXG4gIC8qKiBFbGVtZW50IHRoYXQgd2lsbCBiZSB1c2VkIGFzIGEgdGVtcGxhdGUgdG8gY3JlYXRlIHRoZSBkcmFnZ2FibGUgaXRlbSdzIHByZXZpZXcuICovXG4gIEBDb250ZW50Q2hpbGQoQ2RrRHJhZ1ByZXZpZXcpIF9wcmV2aWV3VGVtcGxhdGU6IENka0RyYWdQcmV2aWV3O1xuXG4gIC8qKiBUZW1wbGF0ZSBmb3IgcGxhY2Vob2xkZXIgZWxlbWVudCByZW5kZXJlZCB0byBzaG93IHdoZXJlIGEgZHJhZ2dhYmxlIHdvdWxkIGJlIGRyb3BwZWQuICovXG4gIEBDb250ZW50Q2hpbGQoQ2RrRHJhZ1BsYWNlaG9sZGVyKSBfcGxhY2Vob2xkZXJUZW1wbGF0ZTogQ2RrRHJhZ1BsYWNlaG9sZGVyO1xuXG4gIC8qKiBBcmJpdHJhcnkgZGF0YSB0byBhdHRhY2ggdG8gdGhpcyBkcmFnIGluc3RhbmNlLiAqL1xuICBASW5wdXQoJ2Nka0RyYWdEYXRhJykgZGF0YTogVDtcblxuICAvKiogTG9ja3MgdGhlIHBvc2l0aW9uIG9mIHRoZSBkcmFnZ2VkIGVsZW1lbnQgYWxvbmcgdGhlIHNwZWNpZmllZCBheGlzLiAqL1xuICBASW5wdXQoJ2Nka0RyYWdMb2NrQXhpcycpIGxvY2tBeGlzOiAneCcgfCAneSc7XG5cbiAgLyoqXG4gICAqIFNlbGVjdG9yIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGRldGVybWluZSB0aGUgcm9vdCBkcmFnZ2FibGUgZWxlbWVudCwgc3RhcnRpbmcgZnJvbVxuICAgKiB0aGUgYGNka0RyYWdgIGVsZW1lbnQgYW5kIGdvaW5nIHVwIHRoZSBET00uIFBhc3NpbmcgYW4gYWx0ZXJuYXRlIHJvb3QgZWxlbWVudCBpcyB1c2VmdWxcbiAgICogd2hlbiB0cnlpbmcgdG8gZW5hYmxlIGRyYWdnaW5nIG9uIGFuIGVsZW1lbnQgdGhhdCB5b3UgbWlnaHQgbm90IGhhdmUgYWNjZXNzIHRvLlxuICAgKi9cbiAgQElucHV0KCdjZGtEcmFnUm9vdEVsZW1lbnQnKSByb290RWxlbWVudFNlbGVjdG9yOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE5vZGUgb3Igc2VsZWN0b3IgdGhhdCB3aWxsIGJlIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSBlbGVtZW50IHRvIHdoaWNoIHRoZSBkcmFnZ2FibGUnc1xuICAgKiBwb3NpdGlvbiB3aWxsIGJlIGNvbnN0cmFpbmVkLiBJZiBhIHN0cmluZyBpcyBwYXNzZWQgaW4sIGl0J2xsIGJlIHVzZWQgYXMgYSBzZWxlY3RvciB0aGF0XG4gICAqIHdpbGwgYmUgbWF0Y2hlZCBzdGFydGluZyBmcm9tIHRoZSBlbGVtZW50J3MgcGFyZW50IGFuZCBnb2luZyB1cCB0aGUgRE9NIHVudGlsIGEgbWF0Y2hcbiAgICogaGFzIGJlZW4gZm91bmQuXG4gICAqL1xuICBASW5wdXQoJ2Nka0RyYWdCb3VuZGFyeScpIGJvdW5kYXJ5RWxlbWVudDogc3RyaW5nIHwgRWxlbWVudFJlZjxIVE1MRWxlbWVudD4gfCBIVE1MRWxlbWVudDtcblxuICAvKipcbiAgICogQW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byB3YWl0IGFmdGVyIHRoZSB1c2VyIGhhcyBwdXQgdGhlaXJcbiAgICogcG9pbnRlciBkb3duIGJlZm9yZSBzdGFydGluZyB0byBkcmFnIHRoZSBlbGVtZW50LlxuICAgKi9cbiAgQElucHV0KCdjZGtEcmFnU3RhcnREZWxheScpIGRyYWdTdGFydERlbGF5OiBudW1iZXIgfCB7dG91Y2g6IG51bWJlciwgbW91c2U6IG51bWJlcn0gPSAwO1xuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBwb3NpdGlvbiBvZiBhIGBDZGtEcmFnYCB0aGF0IGlzIG91dHNpZGUgb2YgYSBkcm9wIGNvbnRhaW5lci5cbiAgICogQ2FuIGJlIHVzZWQgdG8gcmVzdG9yZSB0aGUgZWxlbWVudCdzIHBvc2l0aW9uIGZvciBhIHJldHVybmluZyB1c2VyLlxuICAgKi9cbiAgQElucHV0KCdjZGtEcmFnRnJlZURyYWdQb3NpdGlvbicpIGZyZWVEcmFnUG9zaXRpb246IHt4OiBudW1iZXIsIHk6IG51bWJlcn07XG5cbiAgLyoqIFdoZXRoZXIgc3RhcnRpbmcgdG8gZHJhZyB0aGlzIGVsZW1lbnQgaXMgZGlzYWJsZWQuICovXG4gIEBJbnB1dCgnY2RrRHJhZ0Rpc2FibGVkJylcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZCB8fCAodGhpcy5kcm9wQ29udGFpbmVyICYmIHRoaXMuZHJvcENvbnRhaW5lci5kaXNhYmxlZCk7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICAgIHRoaXMuX2RyYWdSZWYuZGlzYWJsZWQgPSB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGN1c3RvbWl6ZSB0aGUgbG9naWMgb2YgaG93IHRoZSBwb3NpdGlvbiBvZiB0aGUgZHJhZyBpdGVtXG4gICAqIGlzIGxpbWl0ZWQgd2hpbGUgaXQncyBiZWluZyBkcmFnZ2VkLiBHZXRzIGNhbGxlZCB3aXRoIGEgcG9pbnQgY29udGFpbmluZyB0aGUgY3VycmVudCBwb3NpdGlvblxuICAgKiBvZiB0aGUgdXNlcidzIHBvaW50ZXIgb24gdGhlIHBhZ2UgYW5kIHNob3VsZCByZXR1cm4gYSBwb2ludCBkZXNjcmliaW5nIHdoZXJlIHRoZSBpdGVtIHNob3VsZFxuICAgKiBiZSByZW5kZXJlZC5cbiAgICovXG4gIEBJbnB1dCgnY2RrRHJhZ0NvbnN0cmFpblBvc2l0aW9uJykgY29uc3RyYWluUG9zaXRpb24/OiAocG9pbnQ6IFBvaW50LCBkcmFnUmVmOiBEcmFnUmVmKSA9PiBQb2ludDtcblxuICAvKiogQ2xhc3MgdG8gYmUgYWRkZWQgdG8gdGhlIHByZXZpZXcgZWxlbWVudC4gKi9cbiAgQElucHV0KCdjZGtEcmFnUHJldmlld0NsYXNzJykgcHJldmlld0NsYXNzOiBzdHJpbmcgfCBzdHJpbmdbXTtcblxuICAvKiogRW1pdHMgd2hlbiB0aGUgdXNlciBzdGFydHMgZHJhZ2dpbmcgdGhlIGl0ZW0uICovXG4gIEBPdXRwdXQoJ2Nka0RyYWdTdGFydGVkJykgc3RhcnRlZDogRXZlbnRFbWl0dGVyPENka0RyYWdTdGFydD4gPSBuZXcgRXZlbnRFbWl0dGVyPENka0RyYWdTdGFydD4oKTtcblxuICAvKiogRW1pdHMgd2hlbiB0aGUgdXNlciBoYXMgcmVsZWFzZWQgYSBkcmFnIGl0ZW0sIGJlZm9yZSBhbnkgYW5pbWF0aW9ucyBoYXZlIHN0YXJ0ZWQuICovXG4gIEBPdXRwdXQoJ2Nka0RyYWdSZWxlYXNlZCcpIHJlbGVhc2VkOiBFdmVudEVtaXR0ZXI8Q2RrRHJhZ1JlbGVhc2U+ID1cbiAgICAgIG5ldyBFdmVudEVtaXR0ZXI8Q2RrRHJhZ1JlbGVhc2U+KCk7XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIHVzZXIgc3RvcHMgZHJhZ2dpbmcgYW4gaXRlbSBpbiB0aGUgY29udGFpbmVyLiAqL1xuICBAT3V0cHV0KCdjZGtEcmFnRW5kZWQnKSBlbmRlZDogRXZlbnRFbWl0dGVyPENka0RyYWdFbmQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxDZGtEcmFnRW5kPigpO1xuXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSB1c2VyIGhhcyBtb3ZlZCB0aGUgaXRlbSBpbnRvIGEgbmV3IGNvbnRhaW5lci4gKi9cbiAgQE91dHB1dCgnY2RrRHJhZ0VudGVyZWQnKSBlbnRlcmVkOiBFdmVudEVtaXR0ZXI8Q2RrRHJhZ0VudGVyPGFueT4+ID1cbiAgICAgIG5ldyBFdmVudEVtaXR0ZXI8Q2RrRHJhZ0VudGVyPGFueT4+KCk7XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIHVzZXIgcmVtb3ZlcyB0aGUgaXRlbSBpdHMgY29udGFpbmVyIGJ5IGRyYWdnaW5nIGl0IGludG8gYW5vdGhlciBjb250YWluZXIuICovXG4gIEBPdXRwdXQoJ2Nka0RyYWdFeGl0ZWQnKSBleGl0ZWQ6IEV2ZW50RW1pdHRlcjxDZGtEcmFnRXhpdDxhbnk+PiA9XG4gICAgICBuZXcgRXZlbnRFbWl0dGVyPENka0RyYWdFeGl0PGFueT4+KCk7XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIHVzZXIgZHJvcHMgdGhlIGl0ZW0gaW5zaWRlIGEgY29udGFpbmVyLiAqL1xuICBAT3V0cHV0KCdjZGtEcmFnRHJvcHBlZCcpIGRyb3BwZWQ6IEV2ZW50RW1pdHRlcjxDZGtEcmFnRHJvcDxhbnk+PiA9XG4gICAgICBuZXcgRXZlbnRFbWl0dGVyPENka0RyYWdEcm9wPGFueT4+KCk7XG5cbiAgLyoqXG4gICAqIEVtaXRzIGFzIHRoZSB1c2VyIGlzIGRyYWdnaW5nIHRoZSBpdGVtLiBVc2Ugd2l0aCBjYXV0aW9uLFxuICAgKiBiZWNhdXNlIHRoaXMgZXZlbnQgd2lsbCBmaXJlIGZvciBldmVyeSBwaXhlbCB0aGF0IHRoZSB1c2VyIGhhcyBkcmFnZ2VkLlxuICAgKi9cbiAgQE91dHB1dCgnY2RrRHJhZ01vdmVkJykgbW92ZWQ6IE9ic2VydmFibGU8Q2RrRHJhZ01vdmU8VD4+ID1cbiAgICAgIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8Q2RrRHJhZ01vdmU8VD4+KSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHRoaXMuX2RyYWdSZWYubW92ZWQucGlwZShtYXAobW92ZWRFdmVudCA9PiAoe1xuICAgICAgICAgIHNvdXJjZTogdGhpcyxcbiAgICAgICAgICBwb2ludGVyUG9zaXRpb246IG1vdmVkRXZlbnQucG9pbnRlclBvc2l0aW9uLFxuICAgICAgICAgIGV2ZW50OiBtb3ZlZEV2ZW50LmV2ZW50LFxuICAgICAgICAgIGRlbHRhOiBtb3ZlZEV2ZW50LmRlbHRhLFxuICAgICAgICAgIGRpc3RhbmNlOiBtb3ZlZEV2ZW50LmRpc3RhbmNlXG4gICAgICAgIH0pKSkuc3Vic2NyaWJlKG9ic2VydmVyKTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICAvKiogRWxlbWVudCB0aGF0IHRoZSBkcmFnZ2FibGUgaXMgYXR0YWNoZWQgdG8uICovXG4gICAgICBwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgICAvKiogRHJvcHBhYmxlIGNvbnRhaW5lciB0aGF0IHRoZSBkcmFnZ2FibGUgaXMgYSBwYXJ0IG9mLiAqL1xuICAgICAgQEluamVjdChDREtfRFJPUF9MSVNUKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwdWJsaWMgZHJvcENvbnRhaW5lcjogQ2RrRHJvcExpc3QsXG4gICAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55LCBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsIEBJbmplY3QoQ0RLX0RSQUdfQ09ORklHKSBjb25maWc6IERyYWdSZWZDb25maWcsXG4gICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9kaXI6IERpcmVjdGlvbmFsaXR5LCBkcmFnRHJvcDogRHJhZ0Ryb3AsXG4gICAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB0aGlzLl9kcmFnUmVmID0gZHJhZ0Ryb3AuY3JlYXRlRHJhZyhlbGVtZW50LCBjb25maWcpO1xuICAgIHRoaXMuX2RyYWdSZWYuZGF0YSA9IHRoaXM7XG4gICAgdGhpcy5fc3luY0lucHV0cyh0aGlzLl9kcmFnUmVmKTtcbiAgICB0aGlzLl9oYW5kbGVFdmVudHModGhpcy5fZHJhZ1JlZik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZWxlbWVudCB0aGF0IGlzIGJlaW5nIHVzZWQgYXMgYSBwbGFjZWhvbGRlclxuICAgKiB3aGlsZSB0aGUgY3VycmVudCBlbGVtZW50IGlzIGJlaW5nIGRyYWdnZWQuXG4gICAqL1xuICBnZXRQbGFjZWhvbGRlckVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLl9kcmFnUmVmLmdldFBsYWNlaG9sZGVyRWxlbWVudCgpO1xuICB9XG5cbiAgLyoqIFJldHVybnMgdGhlIHJvb3QgZHJhZ2dhYmxlIGVsZW1lbnQuICovXG4gIGdldFJvb3RFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5fZHJhZ1JlZi5nZXRSb290RWxlbWVudCgpO1xuICB9XG5cbiAgLyoqIFJlc2V0cyBhIHN0YW5kYWxvbmUgZHJhZyBpdGVtIHRvIGl0cyBpbml0aWFsIHBvc2l0aW9uLiAqL1xuICByZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLl9kcmFnUmVmLnJlc2V0KCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgcGl4ZWwgY29vcmRpbmF0ZXMgb2YgdGhlIGRyYWdnYWJsZSBvdXRzaWRlIG9mIGEgZHJvcCBjb250YWluZXIuXG4gICAqL1xuICBnZXRGcmVlRHJhZ1Bvc2l0aW9uKCk6IHtyZWFkb25seSB4OiBudW1iZXIsIHJlYWRvbmx5IHk6IG51bWJlcn0ge1xuICAgIHJldHVybiB0aGlzLl9kcmFnUmVmLmdldEZyZWVEcmFnUG9zaXRpb24oKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyBXZSBuZWVkIHRvIHdhaXQgZm9yIHRoZSB6b25lIHRvIHN0YWJpbGl6ZSwgaW4gb3JkZXIgZm9yIHRoZSByZWZlcmVuY2VcbiAgICAvLyBlbGVtZW50IHRvIGJlIGluIHRoZSBwcm9wZXIgcGxhY2UgaW4gdGhlIERPTS4gVGhpcyBpcyBtb3N0bHkgcmVsZXZhbnRcbiAgICAvLyBmb3IgZHJhZ2dhYmxlIGVsZW1lbnRzIGluc2lkZSBwb3J0YWxzIHNpbmNlIHRoZXkgZ2V0IHN0YW1wZWQgb3V0IGluXG4gICAgLy8gdGhlaXIgb3JpZ2luYWwgRE9NIHBvc2l0aW9uIGFuZCB0aGVuIHRoZXkgZ2V0IHRyYW5zZmVycmVkIHRvIHRoZSBwb3J0YWwuXG4gICAgdGhpcy5fbmdab25lLm9uU3RhYmxlLmFzT2JzZXJ2YWJsZSgpXG4gICAgICAucGlwZSh0YWtlKDEpLCB0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLl91cGRhdGVSb290RWxlbWVudCgpO1xuXG4gICAgICAgIC8vIExpc3RlbiBmb3IgYW55IG5ld2x5LWFkZGVkIGhhbmRsZXMuXG4gICAgICAgIHRoaXMuX2hhbmRsZXMuY2hhbmdlcy5waXBlKFxuICAgICAgICAgIHN0YXJ0V2l0aCh0aGlzLl9oYW5kbGVzKSxcbiAgICAgICAgICAvLyBTeW5jIHRoZSBuZXcgaGFuZGxlcyB3aXRoIHRoZSBEcmFnUmVmLlxuICAgICAgICAgIHRhcCgoaGFuZGxlczogUXVlcnlMaXN0PENka0RyYWdIYW5kbGU+KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZEhhbmRsZUVsZW1lbnRzID0gaGFuZGxlc1xuICAgICAgICAgICAgICAuZmlsdGVyKGhhbmRsZSA9PiBoYW5kbGUuX3BhcmVudERyYWcgPT09IHRoaXMpXG4gICAgICAgICAgICAgIC5tYXAoaGFuZGxlID0+IGhhbmRsZS5lbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuX2RyYWdSZWYud2l0aEhhbmRsZXMoY2hpbGRIYW5kbGVFbGVtZW50cyk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLy8gTGlzdGVuIGlmIHRoZSBzdGF0ZSBvZiBhbnkgb2YgdGhlIGhhbmRsZXMgY2hhbmdlcy5cbiAgICAgICAgICBzd2l0Y2hNYXAoKGhhbmRsZXM6IFF1ZXJ5TGlzdDxDZGtEcmFnSGFuZGxlPikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG1lcmdlKC4uLmhhbmRsZXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gaXRlbS5fc3RhdGVDaGFuZ2VzLnBpcGUoc3RhcnRXaXRoKGl0ZW0pKTtcbiAgICAgICAgICAgIH0pKSBhcyBPYnNlcnZhYmxlPENka0RyYWdIYW5kbGU+O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQpXG4gICAgICAgICkuc3Vic2NyaWJlKGhhbmRsZUluc3RhbmNlID0+IHtcbiAgICAgICAgICAvLyBFbmFibGVkL2Rpc2FibGUgdGhlIGhhbmRsZSB0aGF0IGNoYW5nZWQgaW4gdGhlIERyYWdSZWYuXG4gICAgICAgICAgY29uc3QgZHJhZ1JlZiA9IHRoaXMuX2RyYWdSZWY7XG4gICAgICAgICAgY29uc3QgaGFuZGxlID0gaGFuZGxlSW5zdGFuY2UuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgIGhhbmRsZUluc3RhbmNlLmRpc2FibGVkID8gZHJhZ1JlZi5kaXNhYmxlSGFuZGxlKGhhbmRsZSkgOiBkcmFnUmVmLmVuYWJsZUhhbmRsZShoYW5kbGUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5mcmVlRHJhZ1Bvc2l0aW9uKSB7XG4gICAgICAgICAgdGhpcy5fZHJhZ1JlZi5zZXRGcmVlRHJhZ1Bvc2l0aW9uKHRoaXMuZnJlZURyYWdQb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnN0IHJvb3RTZWxlY3RvckNoYW5nZSA9IGNoYW5nZXNbJ3Jvb3RFbGVtZW50U2VsZWN0b3InXTtcbiAgICBjb25zdCBwb3NpdGlvbkNoYW5nZSA9IGNoYW5nZXNbJ2ZyZWVEcmFnUG9zaXRpb24nXTtcblxuICAgIC8vIFdlIGRvbid0IGhhdmUgdG8gcmVhY3QgdG8gdGhlIGZpcnN0IGNoYW5nZSBzaW5jZSBpdCdzIGJlaW5nXG4gICAgLy8gaGFuZGxlZCBpbiBgbmdBZnRlclZpZXdJbml0YCB3aGVyZSBpdCBuZWVkcyB0byBiZSBkZWZlcnJlZC5cbiAgICBpZiAocm9vdFNlbGVjdG9yQ2hhbmdlICYmICFyb290U2VsZWN0b3JDaGFuZ2UuZmlyc3RDaGFuZ2UpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZVJvb3RFbGVtZW50KCk7XG4gICAgfVxuXG4gICAgLy8gU2tpcCB0aGUgZmlyc3QgY2hhbmdlIHNpbmNlIGl0J3MgYmVpbmcgaGFuZGxlZCBpbiBgbmdBZnRlclZpZXdJbml0YC5cbiAgICBpZiAocG9zaXRpb25DaGFuZ2UgJiYgIXBvc2l0aW9uQ2hhbmdlLmZpcnN0Q2hhbmdlICYmIHRoaXMuZnJlZURyYWdQb3NpdGlvbikge1xuICAgICAgdGhpcy5fZHJhZ1JlZi5zZXRGcmVlRHJhZ1Bvc2l0aW9uKHRoaXMuZnJlZURyYWdQb3NpdGlvbik7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZGVzdHJveWVkLm5leHQoKTtcbiAgICB0aGlzLl9kZXN0cm95ZWQuY29tcGxldGUoKTtcbiAgICB0aGlzLl9kcmFnUmVmLmRpc3Bvc2UoKTtcbiAgfVxuXG4gIC8qKiBTeW5jcyB0aGUgcm9vdCBlbGVtZW50IHdpdGggdGhlIGBEcmFnUmVmYC4gKi9cbiAgcHJpdmF0ZSBfdXBkYXRlUm9vdEVsZW1lbnQoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHJvb3RFbGVtZW50ID0gdGhpcy5yb290RWxlbWVudFNlbGVjdG9yID9cbiAgICAgICAgZ2V0Q2xvc2VzdE1hdGNoaW5nQW5jZXN0b3IoZWxlbWVudCwgdGhpcy5yb290RWxlbWVudFNlbGVjdG9yKSA6IGVsZW1lbnQ7XG5cbiAgICBpZiAocm9vdEVsZW1lbnQgJiYgcm9vdEVsZW1lbnQubm9kZVR5cGUgIT09IHRoaXMuX2RvY3VtZW50LkVMRU1FTlRfTk9ERSkge1xuICAgICAgdGhyb3cgRXJyb3IoYGNka0RyYWcgbXVzdCBiZSBhdHRhY2hlZCB0byBhbiBlbGVtZW50IG5vZGUuIGAgK1xuICAgICAgICAgICAgICAgICAgYEN1cnJlbnRseSBhdHRhY2hlZCB0byBcIiR7cm9vdEVsZW1lbnQubm9kZU5hbWV9XCIuYCk7XG4gICAgfVxuXG4gICAgdGhpcy5fZHJhZ1JlZi53aXRoUm9vdEVsZW1lbnQocm9vdEVsZW1lbnQgfHwgZWxlbWVudCk7XG4gIH1cblxuICAvKiogR2V0cyB0aGUgYm91bmRhcnkgZWxlbWVudCwgYmFzZWQgb24gdGhlIGBib3VuZGFyeUVsZW1lbnRgIHZhbHVlLiAqL1xuICBwcml2YXRlIF9nZXRCb3VuZGFyeUVsZW1lbnQoKSB7XG4gICAgY29uc3QgYm91bmRhcnkgPSB0aGlzLmJvdW5kYXJ5RWxlbWVudDtcblxuICAgIGlmICghYm91bmRhcnkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYm91bmRhcnkgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gZ2V0Q2xvc2VzdE1hdGNoaW5nQW5jZXN0b3IodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGJvdW5kYXJ5KTtcbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50ID0gY29lcmNlRWxlbWVudChib3VuZGFyeSk7XG5cbiAgICBpZiAoaXNEZXZNb2RlKCkgJiYgIWVsZW1lbnQuY29udGFpbnModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpKSB7XG4gICAgICB0aHJvdyBFcnJvcignRHJhZ2dhYmxlIGVsZW1lbnQgaXMgbm90IGluc2lkZSBvZiB0aGUgbm9kZSBwYXNzZWQgaW50byBjZGtEcmFnQm91bmRhcnkuJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICAvKiogU3luY3MgdGhlIGlucHV0cyBvZiB0aGUgQ2RrRHJhZyB3aXRoIHRoZSBvcHRpb25zIG9mIHRoZSB1bmRlcmx5aW5nIERyYWdSZWYuICovXG4gIHByaXZhdGUgX3N5bmNJbnB1dHMocmVmOiBEcmFnUmVmPENka0RyYWc8VD4+KSB7XG4gICAgcmVmLmJlZm9yZVN0YXJ0ZWQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmICghcmVmLmlzRHJhZ2dpbmcoKSkge1xuICAgICAgICBjb25zdCBkaXIgPSB0aGlzLl9kaXI7XG4gICAgICAgIGNvbnN0IGRyYWdTdGFydERlbGF5ID0gdGhpcy5kcmFnU3RhcnREZWxheTtcbiAgICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSB0aGlzLl9wbGFjZWhvbGRlclRlbXBsYXRlID8ge1xuICAgICAgICAgIHRlbXBsYXRlOiB0aGlzLl9wbGFjZWhvbGRlclRlbXBsYXRlLnRlbXBsYXRlUmVmLFxuICAgICAgICAgIGNvbnRleHQ6IHRoaXMuX3BsYWNlaG9sZGVyVGVtcGxhdGUuZGF0YSxcbiAgICAgICAgICB2aWV3Q29udGFpbmVyOiB0aGlzLl92aWV3Q29udGFpbmVyUmVmXG4gICAgICAgIH0gOiBudWxsO1xuICAgICAgICBjb25zdCBwcmV2aWV3ID0gdGhpcy5fcHJldmlld1RlbXBsYXRlID8ge1xuICAgICAgICAgIHRlbXBsYXRlOiB0aGlzLl9wcmV2aWV3VGVtcGxhdGUudGVtcGxhdGVSZWYsXG4gICAgICAgICAgY29udGV4dDogdGhpcy5fcHJldmlld1RlbXBsYXRlLmRhdGEsXG4gICAgICAgICAgdmlld0NvbnRhaW5lcjogdGhpcy5fdmlld0NvbnRhaW5lclJlZlxuICAgICAgICB9IDogbnVsbDtcblxuICAgICAgICByZWYuZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkO1xuICAgICAgICByZWYubG9ja0F4aXMgPSB0aGlzLmxvY2tBeGlzO1xuICAgICAgICByZWYuZHJhZ1N0YXJ0RGVsYXkgPSAodHlwZW9mIGRyYWdTdGFydERlbGF5ID09PSAnb2JqZWN0JyAmJiBkcmFnU3RhcnREZWxheSkgP1xuICAgICAgICAgICAgZHJhZ1N0YXJ0RGVsYXkgOiBjb2VyY2VOdW1iZXJQcm9wZXJ0eShkcmFnU3RhcnREZWxheSk7XG4gICAgICAgIHJlZi5jb25zdHJhaW5Qb3NpdGlvbiA9IHRoaXMuY29uc3RyYWluUG9zaXRpb247XG4gICAgICAgIHJlZi5wcmV2aWV3Q2xhc3MgPSB0aGlzLnByZXZpZXdDbGFzcztcbiAgICAgICAgcmVmXG4gICAgICAgICAgLndpdGhCb3VuZGFyeUVsZW1lbnQodGhpcy5fZ2V0Qm91bmRhcnlFbGVtZW50KCkpXG4gICAgICAgICAgLndpdGhQbGFjZWhvbGRlclRlbXBsYXRlKHBsYWNlaG9sZGVyKVxuICAgICAgICAgIC53aXRoUHJldmlld1RlbXBsYXRlKHByZXZpZXcpO1xuXG4gICAgICAgIGlmIChkaXIpIHtcbiAgICAgICAgICByZWYud2l0aERpcmVjdGlvbihkaXIudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKiogSGFuZGxlcyB0aGUgZXZlbnRzIGZyb20gdGhlIHVuZGVybHlpbmcgYERyYWdSZWZgLiAqL1xuICBwcml2YXRlIF9oYW5kbGVFdmVudHMocmVmOiBEcmFnUmVmPENka0RyYWc8VD4+KSB7XG4gICAgcmVmLnN0YXJ0ZWQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuc3RhcnRlZC5lbWl0KHtzb3VyY2U6IHRoaXN9KTtcblxuICAgICAgLy8gU2luY2UgYWxsIG9mIHRoZXNlIGV2ZW50cyBydW4gb3V0c2lkZSBvZiBjaGFuZ2UgZGV0ZWN0aW9uLFxuICAgICAgLy8gd2UgbmVlZCB0byBlbnN1cmUgdGhhdCBldmVyeXRoaW5nIGlzIG1hcmtlZCBjb3JyZWN0bHkuXG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcblxuICAgIHJlZi5yZWxlYXNlZC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5yZWxlYXNlZC5lbWl0KHtzb3VyY2U6IHRoaXN9KTtcbiAgICB9KTtcblxuICAgIHJlZi5lbmRlZC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgdGhpcy5lbmRlZC5lbWl0KHtzb3VyY2U6IHRoaXMsIGRpc3RhbmNlOiBldmVudC5kaXN0YW5jZX0pO1xuXG4gICAgICAvLyBTaW5jZSBhbGwgb2YgdGhlc2UgZXZlbnRzIHJ1biBvdXRzaWRlIG9mIGNoYW5nZSBkZXRlY3Rpb24sXG4gICAgICAvLyB3ZSBuZWVkIHRvIGVuc3VyZSB0aGF0IGV2ZXJ5dGhpbmcgaXMgbWFya2VkIGNvcnJlY3RseS5cbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuXG4gICAgcmVmLmVudGVyZWQuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgIHRoaXMuZW50ZXJlZC5lbWl0KHtcbiAgICAgICAgY29udGFpbmVyOiBldmVudC5jb250YWluZXIuZGF0YSxcbiAgICAgICAgaXRlbTogdGhpcyxcbiAgICAgICAgY3VycmVudEluZGV4OiBldmVudC5jdXJyZW50SW5kZXhcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmVmLmV4aXRlZC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgdGhpcy5leGl0ZWQuZW1pdCh7XG4gICAgICAgIGNvbnRhaW5lcjogZXZlbnQuY29udGFpbmVyLmRhdGEsXG4gICAgICAgIGl0ZW06IHRoaXNcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmVmLmRyb3BwZWQuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgIHRoaXMuZHJvcHBlZC5lbWl0KHtcbiAgICAgICAgcHJldmlvdXNJbmRleDogZXZlbnQucHJldmlvdXNJbmRleCxcbiAgICAgICAgY3VycmVudEluZGV4OiBldmVudC5jdXJyZW50SW5kZXgsXG4gICAgICAgIHByZXZpb3VzQ29udGFpbmVyOiBldmVudC5wcmV2aW91c0NvbnRhaW5lci5kYXRhLFxuICAgICAgICBjb250YWluZXI6IGV2ZW50LmNvbnRhaW5lci5kYXRhLFxuICAgICAgICBpc1BvaW50ZXJPdmVyQ29udGFpbmVyOiBldmVudC5pc1BvaW50ZXJPdmVyQ29udGFpbmVyLFxuICAgICAgICBpdGVtOiB0aGlzLFxuICAgICAgICBkaXN0YW5jZTogZXZlbnQuZGlzdGFuY2VcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG59XG5cbi8qKiBHZXRzIHRoZSBjbG9zZXN0IGFuY2VzdG9yIG9mIGFuIGVsZW1lbnQgdGhhdCBtYXRjaGVzIGEgc2VsZWN0b3IuICovXG5mdW5jdGlvbiBnZXRDbG9zZXN0TWF0Y2hpbmdBbmNlc3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCwgc2VsZWN0b3I6IHN0cmluZykge1xuICBsZXQgY3VycmVudEVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuXG4gIHdoaWxlIChjdXJyZW50RWxlbWVudCkge1xuICAgIC8vIElFIGRvZXNuJ3Qgc3VwcG9ydCBgbWF0Y2hlc2Agc28gd2UgaGF2ZSB0byBmYWxsIGJhY2sgdG8gYG1zTWF0Y2hlc1NlbGVjdG9yYC5cbiAgICBpZiAoY3VycmVudEVsZW1lbnQubWF0Y2hlcyA/IGN1cnJlbnRFbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpIDpcbiAgICAgICAgKGN1cnJlbnRFbGVtZW50IGFzIGFueSkubXNNYXRjaGVzU2VsZWN0b3Ioc2VsZWN0b3IpKSB7XG4gICAgICByZXR1cm4gY3VycmVudEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY3VycmVudEVsZW1lbnQgPSBjdXJyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG4iXX0=