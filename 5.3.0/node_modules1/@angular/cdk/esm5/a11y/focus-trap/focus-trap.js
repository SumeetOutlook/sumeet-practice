/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Inject, Injectable, Input, NgZone, isDevMode, } from '@angular/core';
import { take } from 'rxjs/operators';
import { InteractivityChecker } from '../interactivity-checker/interactivity-checker';
import * as i0 from "@angular/core";
import * as i1 from "angular_material/src/cdk/a11y/interactivity-checker/interactivity-checker";
import * as i2 from "@angular/common";
/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class currently uses a relatively simple approach to focus trapping.
 * It assumes that the tab order is the same as DOM order, which is not necessarily true.
 * Things like `tabIndex > 0`, flex `order`, and shadow roots can cause to two to misalign.
 */
import * as ɵngcc0 from '@angular/core';
var FocusTrap = /** @class */ (function () {
    function FocusTrap(_element, _checker, _ngZone, _document, deferAnchors) {
        var _this = this;
        if (deferAnchors === void 0) { deferAnchors = false; }
        this._element = _element;
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._document = _document;
        this._hasAttached = false;
        // Event listeners for the anchors. Need to be regular functions so that we can unbind them later.
        this.startAnchorListener = function () { return _this.focusLastTabbableElement(); };
        this.endAnchorListener = function () { return _this.focusFirstTabbableElement(); };
        this._enabled = true;
        if (!deferAnchors) {
            this.attachAnchors();
        }
    }
    Object.defineProperty(FocusTrap.prototype, "enabled", {
        /** Whether the focus trap is active. */
        get: function () { return this._enabled; },
        set: function (value) {
            this._enabled = value;
            if (this._startAnchor && this._endAnchor) {
                this._toggleAnchorTabIndex(value, this._startAnchor);
                this._toggleAnchorTabIndex(value, this._endAnchor);
            }
        },
        enumerable: true,
        configurable: true
    });
    /** Destroys the focus trap by cleaning up the anchors. */
    FocusTrap.prototype.destroy = function () {
        var startAnchor = this._startAnchor;
        var endAnchor = this._endAnchor;
        if (startAnchor) {
            startAnchor.removeEventListener('focus', this.startAnchorListener);
            if (startAnchor.parentNode) {
                startAnchor.parentNode.removeChild(startAnchor);
            }
        }
        if (endAnchor) {
            endAnchor.removeEventListener('focus', this.endAnchorListener);
            if (endAnchor.parentNode) {
                endAnchor.parentNode.removeChild(endAnchor);
            }
        }
        this._startAnchor = this._endAnchor = null;
    };
    /**
     * Inserts the anchors into the DOM. This is usually done automatically
     * in the constructor, but can be deferred for cases like directives with `*ngIf`.
     * @returns Whether the focus trap managed to attach successfuly. This may not be the case
     * if the target element isn't currently in the DOM.
     */
    FocusTrap.prototype.attachAnchors = function () {
        var _this = this;
        // If we're not on the browser, there can be no focus to trap.
        if (this._hasAttached) {
            return true;
        }
        this._ngZone.runOutsideAngular(function () {
            if (!_this._startAnchor) {
                _this._startAnchor = _this._createAnchor();
                _this._startAnchor.addEventListener('focus', _this.startAnchorListener);
            }
            if (!_this._endAnchor) {
                _this._endAnchor = _this._createAnchor();
                _this._endAnchor.addEventListener('focus', _this.endAnchorListener);
            }
        });
        if (this._element.parentNode) {
            this._element.parentNode.insertBefore(this._startAnchor, this._element);
            this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling);
            this._hasAttached = true;
        }
        return this._hasAttached;
    };
    /**
     * Waits for the zone to stabilize, then either focuses the first element that the
     * user specified, or the first tabbable element.
     * @returns Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusInitialElementWhenReady = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._executeOnStable(function () { return resolve(_this.focusInitialElement()); });
        });
    };
    /**
     * Waits for the zone to stabilize, then focuses
     * the first tabbable element within the focus trap region.
     * @returns Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusFirstTabbableElementWhenReady = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._executeOnStable(function () { return resolve(_this.focusFirstTabbableElement()); });
        });
    };
    /**
     * Waits for the zone to stabilize, then focuses
     * the last tabbable element within the focus trap region.
     * @returns Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusLastTabbableElementWhenReady = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._executeOnStable(function () { return resolve(_this.focusLastTabbableElement()); });
        });
    };
    /**
     * Get the specified boundary element of the trapped region.
     * @param bound The boundary to get (start or end of trapped region).
     * @returns The boundary element.
     */
    FocusTrap.prototype._getRegionBoundary = function (bound) {
        // Contains the deprecated version of selector, for temporary backwards comparability.
        var markers = this._element.querySelectorAll("[cdk-focus-region-" + bound + "], " +
            ("[cdkFocusRegion" + bound + "], ") +
            ("[cdk-focus-" + bound + "]"));
        for (var i = 0; i < markers.length; i++) {
            // @breaking-change 8.0.0
            if (markers[i].hasAttribute("cdk-focus-" + bound)) {
                console.warn("Found use of deprecated attribute 'cdk-focus-" + bound + "', " +
                    ("use 'cdkFocusRegion" + bound + "' instead. The deprecated ") +
                    "attribute will be removed in 8.0.0.", markers[i]);
            }
            else if (markers[i].hasAttribute("cdk-focus-region-" + bound)) {
                console.warn("Found use of deprecated attribute 'cdk-focus-region-" + bound + "', " +
                    ("use 'cdkFocusRegion" + bound + "' instead. The deprecated attribute ") +
                    "will be removed in 8.0.0.", markers[i]);
            }
        }
        if (bound == 'start') {
            return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
        }
        return markers.length ?
            markers[markers.length - 1] : this._getLastTabbableElement(this._element);
    };
    /**
     * Focuses the element that should be focused when the focus trap is initialized.
     * @returns Whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusInitialElement = function () {
        // Contains the deprecated version of selector, for temporary backwards comparability.
        var redirectToElement = this._element.querySelector("[cdk-focus-initial], " +
            "[cdkFocusInitial]");
        if (redirectToElement) {
            // @breaking-change 8.0.0
            if (redirectToElement.hasAttribute("cdk-focus-initial")) {
                console.warn("Found use of deprecated attribute 'cdk-focus-initial', " +
                    "use 'cdkFocusInitial' instead. The deprecated attribute " +
                    "will be removed in 8.0.0", redirectToElement);
            }
            // Warn the consumer if the element they've pointed to
            // isn't focusable, when not in production mode.
            if (isDevMode() && !this._checker.isFocusable(redirectToElement)) {
                console.warn("Element matching '[cdkFocusInitial]' is not focusable.", redirectToElement);
            }
            redirectToElement.focus();
            return true;
        }
        return this.focusFirstTabbableElement();
    };
    /**
     * Focuses the first tabbable element within the focus trap region.
     * @returns Whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusFirstTabbableElement = function () {
        var redirectToElement = this._getRegionBoundary('start');
        if (redirectToElement) {
            redirectToElement.focus();
        }
        return !!redirectToElement;
    };
    /**
     * Focuses the last tabbable element within the focus trap region.
     * @returns Whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusLastTabbableElement = function () {
        var redirectToElement = this._getRegionBoundary('end');
        if (redirectToElement) {
            redirectToElement.focus();
        }
        return !!redirectToElement;
    };
    /**
     * Checks whether the focus trap has successfuly been attached.
     */
    FocusTrap.prototype.hasAttached = function () {
        return this._hasAttached;
    };
    /** Get the first tabbable element from a DOM subtree (inclusive). */
    FocusTrap.prototype._getFirstTabbableElement = function (root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
        }
        // Iterate in DOM order. Note that IE doesn't have `children` for SVG so we fall
        // back to `childNodes` which includes text nodes, comments etc.
        var children = root.children || root.childNodes;
        for (var i = 0; i < children.length; i++) {
            var tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ?
                this._getFirstTabbableElement(children[i]) :
                null;
            if (tabbableChild) {
                return tabbableChild;
            }
        }
        return null;
    };
    /** Get the last tabbable element from a DOM subtree (inclusive). */
    FocusTrap.prototype._getLastTabbableElement = function (root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
        }
        // Iterate in reverse DOM order.
        var children = root.children || root.childNodes;
        for (var i = children.length - 1; i >= 0; i--) {
            var tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ?
                this._getLastTabbableElement(children[i]) :
                null;
            if (tabbableChild) {
                return tabbableChild;
            }
        }
        return null;
    };
    /** Creates an anchor element. */
    FocusTrap.prototype._createAnchor = function () {
        var anchor = this._document.createElement('div');
        this._toggleAnchorTabIndex(this._enabled, anchor);
        anchor.classList.add('cdk-visually-hidden');
        anchor.classList.add('cdk-focus-trap-anchor');
        anchor.setAttribute('aria-hidden', 'true');
        return anchor;
    };
    /**
     * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
     * @param isEnabled Whether the focus trap is enabled.
     * @param anchor Anchor on which to toggle the tabindex.
     */
    FocusTrap.prototype._toggleAnchorTabIndex = function (isEnabled, anchor) {
        // Remove the tabindex completely, rather than setting it to -1, because if the
        // element has a tabindex, the user might still hit it when navigating with the arrow keys.
        isEnabled ? anchor.setAttribute('tabindex', '0') : anchor.removeAttribute('tabindex');
    };
    /** Executes a function when the zone is stable. */
    FocusTrap.prototype._executeOnStable = function (fn) {
        if (this._ngZone.isStable) {
            fn();
        }
        else {
            this._ngZone.onStable.asObservable().pipe(take(1)).subscribe(fn);
        }
    };
    return FocusTrap;
}());
export { FocusTrap };
/** Factory that allows easy instantiation of focus traps. */
var FocusTrapFactory = /** @class */ (function () {
    function FocusTrapFactory(_checker, _ngZone, _document) {
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._document = _document;
    }
    /**
     * Creates a focus-trapped region around the given element.
     * @param element The element around which focus will be trapped.
     * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
     *     manually by the user.
     * @returns The created focus trap instance.
     */
    FocusTrapFactory.prototype.create = function (element, deferCaptureElements) {
        if (deferCaptureElements === void 0) { deferCaptureElements = false; }
        return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements);
    };
    /** @nocollapse */
    FocusTrapFactory.ctorParameters = function () { return [
        { type: InteractivityChecker },
        { type: NgZone },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    FocusTrapFactory.ɵprov = i0.ɵɵdefineInjectable({ factory: function FocusTrapFactory_Factory() { return new FocusTrapFactory(i0.ɵɵinject(i1.InteractivityChecker), i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i2.DOCUMENT)); }, token: FocusTrapFactory, providedIn: "root" });
FocusTrapFactory.ɵfac = function FocusTrapFactory_Factory(t) { return new (t || FocusTrapFactory)(ɵngcc0.ɵɵinject(InteractivityChecker), ɵngcc0.ɵɵinject(ɵngcc0.NgZone), ɵngcc0.ɵɵinject(DOCUMENT)); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FocusTrapFactory, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: InteractivityChecker }, { type: ɵngcc0.NgZone }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
    return FocusTrapFactory;
}());
export { FocusTrapFactory };
/** Directive for trapping focus within a region. */
var CdkTrapFocus = /** @class */ (function () {
    function CdkTrapFocus(_elementRef, _focusTrapFactory, _document) {
        this._elementRef = _elementRef;
        this._focusTrapFactory = _focusTrapFactory;
        /** Previously focused element to restore focus to upon destroy when using autoCapture. */
        this._previouslyFocusedElement = null;
        this._document = _document;
        this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
    }
    Object.defineProperty(CdkTrapFocus.prototype, "enabled", {
        /** Whether the focus trap is active. */
        get: function () { return this.focusTrap.enabled; },
        set: function (value) { this.focusTrap.enabled = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkTrapFocus.prototype, "autoCapture", {
        /**
         * Whether the directive should automatially move focus into the trapped region upon
         * initialization and return focus to the previous activeElement upon destruction.
         */
        get: function () { return this._autoCapture; },
        set: function (value) { this._autoCapture = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    CdkTrapFocus.prototype.ngOnDestroy = function () {
        this.focusTrap.destroy();
        // If we stored a previously focused element when using autoCapture, return focus to that
        // element now that the trapped region is being destroyed.
        if (this._previouslyFocusedElement) {
            this._previouslyFocusedElement.focus();
            this._previouslyFocusedElement = null;
        }
    };
    CdkTrapFocus.prototype.ngAfterContentInit = function () {
        this.focusTrap.attachAnchors();
        if (this.autoCapture) {
            this._previouslyFocusedElement = this._document.activeElement;
            this.focusTrap.focusInitialElementWhenReady();
        }
    };
    CdkTrapFocus.prototype.ngDoCheck = function () {
        if (!this.focusTrap.hasAttached()) {
            this.focusTrap.attachAnchors();
        }
    };
    /** @nocollapse */
    CdkTrapFocus.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FocusTrapFactory },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    CdkTrapFocus.propDecorators = {
        enabled: [{ type: Input, args: ['cdkTrapFocus',] }],
        autoCapture: [{ type: Input, args: ['cdkTrapFocusAutoCapture',] }]
    };
CdkTrapFocus.ɵfac = function CdkTrapFocus_Factory(t) { return new (t || CdkTrapFocus)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(FocusTrapFactory), ɵngcc0.ɵɵdirectiveInject(DOCUMENT)); };
CdkTrapFocus.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkTrapFocus, selectors: [["", "cdkTrapFocus", ""]], inputs: { enabled: ["cdkTrapFocus", "enabled"], autoCapture: ["cdkTrapFocusAutoCapture", "autoCapture"] }, exportAs: ["cdkTrapFocus"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkTrapFocus, [{
        type: Directive,
        args: [{
                selector: '[cdkTrapFocus]',
                exportAs: 'cdkTrapFocus'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: FocusTrapFactory }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { enabled: [{
            type: Input,
            args: ['cdkTrapFocus']
        }], autoCapture: [{
            type: Input,
            args: ['cdkTrapFocusAutoCapture']
        }] }); })();
    return CdkTrapFocus;
}());
export { CdkTrapFocus };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtdHJhcC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9hMTF5L2ZvY3VzLXRyYXAvZm9jdXMtdHJhcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFlLHFCQUFxQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDMUUsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFHTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3BDLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBQ3BGO0FBRytCO0FBRWdDO0FBSC9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBQ0g7QUFDb0IsSUFvQmxCLG1CQUNVLFFBQXFCLEVBQ3JCLFFBQThCLEVBQzlCLE9BQWUsRUFDZixTQUFtQixFQUMzQixZQUFvQjtBQUN4QixRQU5FLGlCQVVDO0FBQ0gsUUFOSSw2QkFBQSxFQUFBLG9CQUFvQjtBQUN4QixRQUxZLGFBQVEsR0FBUixRQUFRLENBQWE7QUFBQyxRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFzQjtBQUFDLFFBQy9CLFlBQU8sR0FBUCxPQUFPLENBQVE7QUFBQyxRQUNoQixjQUFTLEdBQVQsU0FBUyxDQUFVO0FBQUMsUUF0QnRCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0FBQy9CLFFBQ0Usa0dBQWtHO0FBQ3BHLFFBQVksd0JBQW1CLEdBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyx3QkFBd0IsRUFBRSxFQUEvQixDQUErQixDQUFDO0FBQ3hFLFFBQVksc0JBQWlC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QkFzWCtCLGdCQUFnQjtBQTNCckMsY0FBYyxtQkFDekIsakNBMkJDLGdEQUFLLE1BQU0sU0FBQyxRQUFRO0FBQVE7QUFBVTtBQUd2QywwQkFuQkUsS0FBSyxTQUFDLGNBQWM7QUFDbEIsOEJBT0YsS0FBSyxTQUFDLHlCQUF5QjtBQUM5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFNO0FBQUMsSUF5Q1gsbUJBQUM7QUFDQSxDQURBLEFBaEVELElBZ0VDO0FBQ0QsU0E3RGEsWUFBWTtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Qm9vbGVhbklucHV0LCBjb2VyY2VCb29sZWFuUHJvcGVydHl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbmplY3QsXG4gIEluamVjdGFibGUsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgRG9DaGVjayxcbiAgaXNEZXZNb2RlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dGFrZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtJbnRlcmFjdGl2aXR5Q2hlY2tlcn0gZnJvbSAnLi4vaW50ZXJhY3Rpdml0eS1jaGVja2VyL2ludGVyYWN0aXZpdHktY2hlY2tlcic7XG5cblxuLyoqXG4gKiBDbGFzcyB0aGF0IGFsbG93cyBmb3IgdHJhcHBpbmcgZm9jdXMgd2l0aGluIGEgRE9NIGVsZW1lbnQuXG4gKlxuICogVGhpcyBjbGFzcyBjdXJyZW50bHkgdXNlcyBhIHJlbGF0aXZlbHkgc2ltcGxlIGFwcHJvYWNoIHRvIGZvY3VzIHRyYXBwaW5nLlxuICogSXQgYXNzdW1lcyB0aGF0IHRoZSB0YWIgb3JkZXIgaXMgdGhlIHNhbWUgYXMgRE9NIG9yZGVyLCB3aGljaCBpcyBub3QgbmVjZXNzYXJpbHkgdHJ1ZS5cbiAqIFRoaW5ncyBsaWtlIGB0YWJJbmRleCA+IDBgLCBmbGV4IGBvcmRlcmAsIGFuZCBzaGFkb3cgcm9vdHMgY2FuIGNhdXNlIHRvIHR3byB0byBtaXNhbGlnbi5cbiAqL1xuZXhwb3J0IGNsYXNzIEZvY3VzVHJhcCB7XG4gIHByaXZhdGUgX3N0YXJ0QW5jaG9yOiBIVE1MRWxlbWVudCB8IG51bGw7XG4gIHByaXZhdGUgX2VuZEFuY2hvcjogSFRNTEVsZW1lbnQgfCBudWxsO1xuICBwcml2YXRlIF9oYXNBdHRhY2hlZCA9IGZhbHNlO1xuXG4gIC8vIEV2ZW50IGxpc3RlbmVycyBmb3IgdGhlIGFuY2hvcnMuIE5lZWQgdG8gYmUgcmVndWxhciBmdW5jdGlvbnMgc28gdGhhdCB3ZSBjYW4gdW5iaW5kIHRoZW0gbGF0ZXIuXG4gIHByb3RlY3RlZCBzdGFydEFuY2hvckxpc3RlbmVyID0gKCkgPT4gdGhpcy5mb2N1c0xhc3RUYWJiYWJsZUVsZW1lbnQoKTtcbiAgcHJvdGVjdGVkIGVuZEFuY2hvckxpc3RlbmVyID0gKCkgPT4gdGhpcy5mb2N1c0ZpcnN0VGFiYmFibGVFbGVtZW50KCk7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGZvY3VzIHRyYXAgaXMgYWN0aXZlLiAqL1xuICBnZXQgZW5hYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2VuYWJsZWQ7IH1cbiAgc2V0IGVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9lbmFibGVkID0gdmFsdWU7XG5cbiAgICBpZiAodGhpcy5fc3RhcnRBbmNob3IgJiYgdGhpcy5fZW5kQW5jaG9yKSB7XG4gICAgICB0aGlzLl90b2dnbGVBbmNob3JUYWJJbmRleCh2YWx1ZSwgdGhpcy5fc3RhcnRBbmNob3IpO1xuICAgICAgdGhpcy5fdG9nZ2xlQW5jaG9yVGFiSW5kZXgodmFsdWUsIHRoaXMuX2VuZEFuY2hvcik7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX2VuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIHByaXZhdGUgX2NoZWNrZXI6IEludGVyYWN0aXZpdHlDaGVja2VyLFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgX2RvY3VtZW50OiBEb2N1bWVudCxcbiAgICBkZWZlckFuY2hvcnMgPSBmYWxzZSkge1xuXG4gICAgaWYgKCFkZWZlckFuY2hvcnMpIHtcbiAgICAgIHRoaXMuYXR0YWNoQW5jaG9ycygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBEZXN0cm95cyB0aGUgZm9jdXMgdHJhcCBieSBjbGVhbmluZyB1cCB0aGUgYW5jaG9ycy4gKi9cbiAgZGVzdHJveSgpIHtcbiAgICBjb25zdCBzdGFydEFuY2hvciA9IHRoaXMuX3N0YXJ0QW5jaG9yO1xuICAgIGNvbnN0IGVuZEFuY2hvciA9IHRoaXMuX2VuZEFuY2hvcjtcblxuICAgIGlmIChzdGFydEFuY2hvcikge1xuICAgICAgc3RhcnRBbmNob3IucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLnN0YXJ0QW5jaG9yTGlzdGVuZXIpO1xuXG4gICAgICBpZiAoc3RhcnRBbmNob3IucGFyZW50Tm9kZSkge1xuICAgICAgICBzdGFydEFuY2hvci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0YXJ0QW5jaG9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZW5kQW5jaG9yKSB7XG4gICAgICBlbmRBbmNob3IucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLmVuZEFuY2hvckxpc3RlbmVyKTtcblxuICAgICAgaWYgKGVuZEFuY2hvci5wYXJlbnROb2RlKSB7XG4gICAgICAgIGVuZEFuY2hvci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVuZEFuY2hvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fc3RhcnRBbmNob3IgPSB0aGlzLl9lbmRBbmNob3IgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEluc2VydHMgdGhlIGFuY2hvcnMgaW50byB0aGUgRE9NLiBUaGlzIGlzIHVzdWFsbHkgZG9uZSBhdXRvbWF0aWNhbGx5XG4gICAqIGluIHRoZSBjb25zdHJ1Y3RvciwgYnV0IGNhbiBiZSBkZWZlcnJlZCBmb3IgY2FzZXMgbGlrZSBkaXJlY3RpdmVzIHdpdGggYCpuZ0lmYC5cbiAgICogQHJldHVybnMgV2hldGhlciB0aGUgZm9jdXMgdHJhcCBtYW5hZ2VkIHRvIGF0dGFjaCBzdWNjZXNzZnVseS4gVGhpcyBtYXkgbm90IGJlIHRoZSBjYXNlXG4gICAqIGlmIHRoZSB0YXJnZXQgZWxlbWVudCBpc24ndCBjdXJyZW50bHkgaW4gdGhlIERPTS5cbiAgICovXG4gIGF0dGFjaEFuY2hvcnMoKTogYm9vbGVhbiB7XG4gICAgLy8gSWYgd2UncmUgbm90IG9uIHRoZSBicm93c2VyLCB0aGVyZSBjYW4gYmUgbm8gZm9jdXMgdG8gdHJhcC5cbiAgICBpZiAodGhpcy5faGFzQXR0YWNoZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX3N0YXJ0QW5jaG9yKSB7XG4gICAgICAgIHRoaXMuX3N0YXJ0QW5jaG9yID0gdGhpcy5fY3JlYXRlQW5jaG9yKCk7XG4gICAgICAgIHRoaXMuX3N0YXJ0QW5jaG9yIS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuc3RhcnRBbmNob3JMaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5fZW5kQW5jaG9yKSB7XG4gICAgICAgIHRoaXMuX2VuZEFuY2hvciA9IHRoaXMuX2NyZWF0ZUFuY2hvcigpO1xuICAgICAgICB0aGlzLl9lbmRBbmNob3IhLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5lbmRBbmNob3JMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5fZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuX3N0YXJ0QW5jaG9yISwgdGhpcy5fZWxlbWVudCk7XG4gICAgICB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuX2VuZEFuY2hvciEsIHRoaXMuX2VsZW1lbnQubmV4dFNpYmxpbmcpO1xuICAgICAgdGhpcy5faGFzQXR0YWNoZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9oYXNBdHRhY2hlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBXYWl0cyBmb3IgdGhlIHpvbmUgdG8gc3RhYmlsaXplLCB0aGVuIGVpdGhlciBmb2N1c2VzIHRoZSBmaXJzdCBlbGVtZW50IHRoYXQgdGhlXG4gICAqIHVzZXIgc3BlY2lmaWVkLCBvciB0aGUgZmlyc3QgdGFiYmFibGUgZWxlbWVudC5cbiAgICogQHJldHVybnMgUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgYm9vbGVhbiwgZGVwZW5kaW5nXG4gICAqIG9uIHdoZXRoZXIgZm9jdXMgd2FzIG1vdmVkIHN1Y2Nlc3NmdWx5LlxuICAgKi9cbiAgZm9jdXNJbml0aWFsRWxlbWVudFdoZW5SZWFkeSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4ocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLl9leGVjdXRlT25TdGFibGUoKCkgPT4gcmVzb2x2ZSh0aGlzLmZvY3VzSW5pdGlhbEVsZW1lbnQoKSkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFdhaXRzIGZvciB0aGUgem9uZSB0byBzdGFiaWxpemUsIHRoZW4gZm9jdXNlc1xuICAgKiB0aGUgZmlyc3QgdGFiYmFibGUgZWxlbWVudCB3aXRoaW4gdGhlIGZvY3VzIHRyYXAgcmVnaW9uLlxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBib29sZWFuLCBkZXBlbmRpbmdcbiAgICogb24gd2hldGhlciBmb2N1cyB3YXMgbW92ZWQgc3VjY2Vzc2Z1bHkuXG4gICAqL1xuICBmb2N1c0ZpcnN0VGFiYmFibGVFbGVtZW50V2hlblJlYWR5KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPihyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMuX2V4ZWN1dGVPblN0YWJsZSgoKSA9PiByZXNvbHZlKHRoaXMuZm9jdXNGaXJzdFRhYmJhYmxlRWxlbWVudCgpKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogV2FpdHMgZm9yIHRoZSB6b25lIHRvIHN0YWJpbGl6ZSwgdGhlbiBmb2N1c2VzXG4gICAqIHRoZSBsYXN0IHRhYmJhYmxlIGVsZW1lbnQgd2l0aGluIHRoZSBmb2N1cyB0cmFwIHJlZ2lvbi5cbiAgICogQHJldHVybnMgUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgYm9vbGVhbiwgZGVwZW5kaW5nXG4gICAqIG9uIHdoZXRoZXIgZm9jdXMgd2FzIG1vdmVkIHN1Y2Nlc3NmdWx5LlxuICAgKi9cbiAgZm9jdXNMYXN0VGFiYmFibGVFbGVtZW50V2hlblJlYWR5KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPihyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMuX2V4ZWN1dGVPblN0YWJsZSgoKSA9PiByZXNvbHZlKHRoaXMuZm9jdXNMYXN0VGFiYmFibGVFbGVtZW50KCkpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHNwZWNpZmllZCBib3VuZGFyeSBlbGVtZW50IG9mIHRoZSB0cmFwcGVkIHJlZ2lvbi5cbiAgICogQHBhcmFtIGJvdW5kIFRoZSBib3VuZGFyeSB0byBnZXQgKHN0YXJ0IG9yIGVuZCBvZiB0cmFwcGVkIHJlZ2lvbikuXG4gICAqIEByZXR1cm5zIFRoZSBib3VuZGFyeSBlbGVtZW50LlxuICAgKi9cbiAgcHJpdmF0ZSBfZ2V0UmVnaW9uQm91bmRhcnkoYm91bmQ6ICdzdGFydCcgfCAnZW5kJyk6IEhUTUxFbGVtZW50IHwgbnVsbCB7XG4gICAgLy8gQ29udGFpbnMgdGhlIGRlcHJlY2F0ZWQgdmVyc2lvbiBvZiBzZWxlY3RvciwgZm9yIHRlbXBvcmFyeSBiYWNrd2FyZHMgY29tcGFyYWJpbGl0eS5cbiAgICBsZXQgbWFya2VycyA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2Nkay1mb2N1cy1yZWdpb24tJHtib3VuZH1dLCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgW2Nka0ZvY3VzUmVnaW9uJHtib3VuZH1dLCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgW2Nkay1mb2N1cy0ke2JvdW5kfV1gKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFya2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuICAgICAgaWYgKG1hcmtlcnNbaV0uaGFzQXR0cmlidXRlKGBjZGstZm9jdXMtJHtib3VuZH1gKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oYEZvdW5kIHVzZSBvZiBkZXByZWNhdGVkIGF0dHJpYnV0ZSAnY2RrLWZvY3VzLSR7Ym91bmR9JywgYCArXG4gICAgICAgICAgICAgICAgICAgICBgdXNlICdjZGtGb2N1c1JlZ2lvbiR7Ym91bmR9JyBpbnN0ZWFkLiBUaGUgZGVwcmVjYXRlZCBgICtcbiAgICAgICAgICAgICAgICAgICAgIGBhdHRyaWJ1dGUgd2lsbCBiZSByZW1vdmVkIGluIDguMC4wLmAsIG1hcmtlcnNbaV0pO1xuICAgICAgfSBlbHNlIGlmIChtYXJrZXJzW2ldLmhhc0F0dHJpYnV0ZShgY2RrLWZvY3VzLXJlZ2lvbi0ke2JvdW5kfWApKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgRm91bmQgdXNlIG9mIGRlcHJlY2F0ZWQgYXR0cmlidXRlICdjZGstZm9jdXMtcmVnaW9uLSR7Ym91bmR9JywgYCArXG4gICAgICAgICAgICAgICAgICAgICBgdXNlICdjZGtGb2N1c1JlZ2lvbiR7Ym91bmR9JyBpbnN0ZWFkLiBUaGUgZGVwcmVjYXRlZCBhdHRyaWJ1dGUgYCArXG4gICAgICAgICAgICAgICAgICAgICBgd2lsbCBiZSByZW1vdmVkIGluIDguMC4wLmAsIG1hcmtlcnNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChib3VuZCA9PSAnc3RhcnQnKSB7XG4gICAgICByZXR1cm4gbWFya2Vycy5sZW5ndGggPyBtYXJrZXJzWzBdIDogdGhpcy5fZ2V0Rmlyc3RUYWJiYWJsZUVsZW1lbnQodGhpcy5fZWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBtYXJrZXJzLmxlbmd0aCA/XG4gICAgICAgIG1hcmtlcnNbbWFya2Vycy5sZW5ndGggLSAxXSA6IHRoaXMuX2dldExhc3RUYWJiYWJsZUVsZW1lbnQodGhpcy5fZWxlbWVudCk7XG4gIH1cblxuICAvKipcbiAgICogRm9jdXNlcyB0aGUgZWxlbWVudCB0aGF0IHNob3VsZCBiZSBmb2N1c2VkIHdoZW4gdGhlIGZvY3VzIHRyYXAgaXMgaW5pdGlhbGl6ZWQuXG4gICAqIEByZXR1cm5zIFdoZXRoZXIgZm9jdXMgd2FzIG1vdmVkIHN1Y2Nlc3NmdWx5LlxuICAgKi9cbiAgZm9jdXNJbml0aWFsRWxlbWVudCgpOiBib29sZWFuIHtcbiAgICAvLyBDb250YWlucyB0aGUgZGVwcmVjYXRlZCB2ZXJzaW9uIG9mIHNlbGVjdG9yLCBmb3IgdGVtcG9yYXJ5IGJhY2t3YXJkcyBjb21wYXJhYmlsaXR5LlxuICAgIGNvbnN0IHJlZGlyZWN0VG9FbGVtZW50ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbY2RrLWZvY3VzLWluaXRpYWxdLCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgW2Nka0ZvY3VzSW5pdGlhbF1gKSBhcyBIVE1MRWxlbWVudDtcblxuICAgIGlmIChyZWRpcmVjdFRvRWxlbWVudCkge1xuICAgICAgLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuICAgICAgaWYgKHJlZGlyZWN0VG9FbGVtZW50Lmhhc0F0dHJpYnV0ZShgY2RrLWZvY3VzLWluaXRpYWxgKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oYEZvdW5kIHVzZSBvZiBkZXByZWNhdGVkIGF0dHJpYnV0ZSAnY2RrLWZvY3VzLWluaXRpYWwnLCBgICtcbiAgICAgICAgICAgICAgICAgICAgYHVzZSAnY2RrRm9jdXNJbml0aWFsJyBpbnN0ZWFkLiBUaGUgZGVwcmVjYXRlZCBhdHRyaWJ1dGUgYCArXG4gICAgICAgICAgICAgICAgICAgIGB3aWxsIGJlIHJlbW92ZWQgaW4gOC4wLjBgLCByZWRpcmVjdFRvRWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFdhcm4gdGhlIGNvbnN1bWVyIGlmIHRoZSBlbGVtZW50IHRoZXkndmUgcG9pbnRlZCB0b1xuICAgICAgLy8gaXNuJ3QgZm9jdXNhYmxlLCB3aGVuIG5vdCBpbiBwcm9kdWN0aW9uIG1vZGUuXG4gICAgICBpZiAoaXNEZXZNb2RlKCkgJiYgIXRoaXMuX2NoZWNrZXIuaXNGb2N1c2FibGUocmVkaXJlY3RUb0VsZW1lbnQpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgRWxlbWVudCBtYXRjaGluZyAnW2Nka0ZvY3VzSW5pdGlhbF0nIGlzIG5vdCBmb2N1c2FibGUuYCwgcmVkaXJlY3RUb0VsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICByZWRpcmVjdFRvRWxlbWVudC5mb2N1cygpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZm9jdXNGaXJzdFRhYmJhYmxlRWxlbWVudCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvY3VzZXMgdGhlIGZpcnN0IHRhYmJhYmxlIGVsZW1lbnQgd2l0aGluIHRoZSBmb2N1cyB0cmFwIHJlZ2lvbi5cbiAgICogQHJldHVybnMgV2hldGhlciBmb2N1cyB3YXMgbW92ZWQgc3VjY2Vzc2Z1bHkuXG4gICAqL1xuICBmb2N1c0ZpcnN0VGFiYmFibGVFbGVtZW50KCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJlZGlyZWN0VG9FbGVtZW50ID0gdGhpcy5fZ2V0UmVnaW9uQm91bmRhcnkoJ3N0YXJ0Jyk7XG5cbiAgICBpZiAocmVkaXJlY3RUb0VsZW1lbnQpIHtcbiAgICAgIHJlZGlyZWN0VG9FbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICEhcmVkaXJlY3RUb0VsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogRm9jdXNlcyB0aGUgbGFzdCB0YWJiYWJsZSBlbGVtZW50IHdpdGhpbiB0aGUgZm9jdXMgdHJhcCByZWdpb24uXG4gICAqIEByZXR1cm5zIFdoZXRoZXIgZm9jdXMgd2FzIG1vdmVkIHN1Y2Nlc3NmdWx5LlxuICAgKi9cbiAgZm9jdXNMYXN0VGFiYmFibGVFbGVtZW50KCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJlZGlyZWN0VG9FbGVtZW50ID0gdGhpcy5fZ2V0UmVnaW9uQm91bmRhcnkoJ2VuZCcpO1xuXG4gICAgaWYgKHJlZGlyZWN0VG9FbGVtZW50KSB7XG4gICAgICByZWRpcmVjdFRvRWxlbWVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIHJldHVybiAhIXJlZGlyZWN0VG9FbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIHRoZSBmb2N1cyB0cmFwIGhhcyBzdWNjZXNzZnVseSBiZWVuIGF0dGFjaGVkLlxuICAgKi9cbiAgaGFzQXR0YWNoZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc0F0dGFjaGVkO1xuICB9XG5cbiAgLyoqIEdldCB0aGUgZmlyc3QgdGFiYmFibGUgZWxlbWVudCBmcm9tIGEgRE9NIHN1YnRyZWUgKGluY2x1c2l2ZSkuICovXG4gIHByaXZhdGUgX2dldEZpcnN0VGFiYmFibGVFbGVtZW50KHJvb3Q6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnQgfCBudWxsIHtcbiAgICBpZiAodGhpcy5fY2hlY2tlci5pc0ZvY3VzYWJsZShyb290KSAmJiB0aGlzLl9jaGVja2VyLmlzVGFiYmFibGUocm9vdCkpIHtcbiAgICAgIHJldHVybiByb290O1xuICAgIH1cblxuICAgIC8vIEl0ZXJhdGUgaW4gRE9NIG9yZGVyLiBOb3RlIHRoYXQgSUUgZG9lc24ndCBoYXZlIGBjaGlsZHJlbmAgZm9yIFNWRyBzbyB3ZSBmYWxsXG4gICAgLy8gYmFjayB0byBgY2hpbGROb2Rlc2Agd2hpY2ggaW5jbHVkZXMgdGV4dCBub2RlcywgY29tbWVudHMgZXRjLlxuICAgIGxldCBjaGlsZHJlbiA9IHJvb3QuY2hpbGRyZW4gfHwgcm9vdC5jaGlsZE5vZGVzO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHRhYmJhYmxlQ2hpbGQgPSBjaGlsZHJlbltpXS5ub2RlVHlwZSA9PT0gdGhpcy5fZG9jdW1lbnQuRUxFTUVOVF9OT0RFID9cbiAgICAgICAgdGhpcy5fZ2V0Rmlyc3RUYWJiYWJsZUVsZW1lbnQoY2hpbGRyZW5baV0gYXMgSFRNTEVsZW1lbnQpIDpcbiAgICAgICAgbnVsbDtcblxuICAgICAgaWYgKHRhYmJhYmxlQ2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIHRhYmJhYmxlQ2hpbGQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKiogR2V0IHRoZSBsYXN0IHRhYmJhYmxlIGVsZW1lbnQgZnJvbSBhIERPTSBzdWJ0cmVlIChpbmNsdXNpdmUpLiAqL1xuICBwcml2YXRlIF9nZXRMYXN0VGFiYmFibGVFbGVtZW50KHJvb3Q6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnQgfCBudWxsIHtcbiAgICBpZiAodGhpcy5fY2hlY2tlci5pc0ZvY3VzYWJsZShyb290KSAmJiB0aGlzLl9jaGVja2VyLmlzVGFiYmFibGUocm9vdCkpIHtcbiAgICAgIHJldHVybiByb290O1xuICAgIH1cblxuICAgIC8vIEl0ZXJhdGUgaW4gcmV2ZXJzZSBET00gb3JkZXIuXG4gICAgbGV0IGNoaWxkcmVuID0gcm9vdC5jaGlsZHJlbiB8fCByb290LmNoaWxkTm9kZXM7XG5cbiAgICBmb3IgKGxldCBpID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCB0YWJiYWJsZUNoaWxkID0gY2hpbGRyZW5baV0ubm9kZVR5cGUgPT09IHRoaXMuX2RvY3VtZW50LkVMRU1FTlRfTk9ERSA/XG4gICAgICAgIHRoaXMuX2dldExhc3RUYWJiYWJsZUVsZW1lbnQoY2hpbGRyZW5baV0gYXMgSFRNTEVsZW1lbnQpIDpcbiAgICAgICAgbnVsbDtcblxuICAgICAgaWYgKHRhYmJhYmxlQ2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIHRhYmJhYmxlQ2hpbGQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKiogQ3JlYXRlcyBhbiBhbmNob3IgZWxlbWVudC4gKi9cbiAgcHJpdmF0ZSBfY3JlYXRlQW5jaG9yKCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBhbmNob3IgPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLl90b2dnbGVBbmNob3JUYWJJbmRleCh0aGlzLl9lbmFibGVkLCBhbmNob3IpO1xuICAgIGFuY2hvci5jbGFzc0xpc3QuYWRkKCdjZGstdmlzdWFsbHktaGlkZGVuJyk7XG4gICAgYW5jaG9yLmNsYXNzTGlzdC5hZGQoJ2Nkay1mb2N1cy10cmFwLWFuY2hvcicpO1xuICAgIGFuY2hvci5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICByZXR1cm4gYW5jaG9yO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIGB0YWJpbmRleGAgb2YgYW4gYW5jaG9yLCBiYXNlZCBvbiB0aGUgZW5hYmxlZCBzdGF0ZSBvZiB0aGUgZm9jdXMgdHJhcC5cbiAgICogQHBhcmFtIGlzRW5hYmxlZCBXaGV0aGVyIHRoZSBmb2N1cyB0cmFwIGlzIGVuYWJsZWQuXG4gICAqIEBwYXJhbSBhbmNob3IgQW5jaG9yIG9uIHdoaWNoIHRvIHRvZ2dsZSB0aGUgdGFiaW5kZXguXG4gICAqL1xuICBwcml2YXRlIF90b2dnbGVBbmNob3JUYWJJbmRleChpc0VuYWJsZWQ6IGJvb2xlYW4sIGFuY2hvcjogSFRNTEVsZW1lbnQpIHtcbiAgICAvLyBSZW1vdmUgdGhlIHRhYmluZGV4IGNvbXBsZXRlbHksIHJhdGhlciB0aGFuIHNldHRpbmcgaXQgdG8gLTEsIGJlY2F1c2UgaWYgdGhlXG4gICAgLy8gZWxlbWVudCBoYXMgYSB0YWJpbmRleCwgdGhlIHVzZXIgbWlnaHQgc3RpbGwgaGl0IGl0IHdoZW4gbmF2aWdhdGluZyB3aXRoIHRoZSBhcnJvdyBrZXlzLlxuICAgIGlzRW5hYmxlZCA/IGFuY2hvci5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKSA6IGFuY2hvci5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gIH1cblxuICAvKiogRXhlY3V0ZXMgYSBmdW5jdGlvbiB3aGVuIHRoZSB6b25lIGlzIHN0YWJsZS4gKi9cbiAgcHJpdmF0ZSBfZXhlY3V0ZU9uU3RhYmxlKGZuOiAoKSA9PiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbmdab25lLmlzU3RhYmxlKSB7XG4gICAgICBmbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9uZ1pvbmUub25TdGFibGUuYXNPYnNlcnZhYmxlKCkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoZm4pO1xuICAgIH1cbiAgfVxufVxuXG5cbi8qKiBGYWN0b3J5IHRoYXQgYWxsb3dzIGVhc3kgaW5zdGFudGlhdGlvbiBvZiBmb2N1cyB0cmFwcy4gKi9cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIEZvY3VzVHJhcEZhY3Rvcnkge1xuICBwcml2YXRlIF9kb2N1bWVudDogRG9jdW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIF9jaGVja2VyOiBJbnRlcmFjdGl2aXR5Q2hlY2tlcixcbiAgICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgICAgQEluamVjdChET0NVTUVOVCkgX2RvY3VtZW50OiBhbnkpIHtcblxuICAgIHRoaXMuX2RvY3VtZW50ID0gX2RvY3VtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBmb2N1cy10cmFwcGVkIHJlZ2lvbiBhcm91bmQgdGhlIGdpdmVuIGVsZW1lbnQuXG4gICAqIEBwYXJhbSBlbGVtZW50IFRoZSBlbGVtZW50IGFyb3VuZCB3aGljaCBmb2N1cyB3aWxsIGJlIHRyYXBwZWQuXG4gICAqIEBwYXJhbSBkZWZlckNhcHR1cmVFbGVtZW50cyBEZWZlcnMgdGhlIGNyZWF0aW9uIG9mIGZvY3VzLWNhcHR1cmluZyBlbGVtZW50cyB0byBiZSBkb25lXG4gICAqICAgICBtYW51YWxseSBieSB0aGUgdXNlci5cbiAgICogQHJldHVybnMgVGhlIGNyZWF0ZWQgZm9jdXMgdHJhcCBpbnN0YW5jZS5cbiAgICovXG4gIGNyZWF0ZShlbGVtZW50OiBIVE1MRWxlbWVudCwgZGVmZXJDYXB0dXJlRWxlbWVudHM6IGJvb2xlYW4gPSBmYWxzZSk6IEZvY3VzVHJhcCB7XG4gICAgcmV0dXJuIG5ldyBGb2N1c1RyYXAoXG4gICAgICAgIGVsZW1lbnQsIHRoaXMuX2NoZWNrZXIsIHRoaXMuX25nWm9uZSwgdGhpcy5fZG9jdW1lbnQsIGRlZmVyQ2FwdHVyZUVsZW1lbnRzKTtcbiAgfVxufVxuXG4vKiogRGlyZWN0aXZlIGZvciB0cmFwcGluZyBmb2N1cyB3aXRoaW4gYSByZWdpb24uICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY2RrVHJhcEZvY3VzXScsXG4gIGV4cG9ydEFzOiAnY2RrVHJhcEZvY3VzJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrVHJhcEZvY3VzIGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0LCBEb0NoZWNrIHtcbiAgcHJpdmF0ZSBfZG9jdW1lbnQ6IERvY3VtZW50O1xuXG4gIC8qKiBVbmRlcmx5aW5nIEZvY3VzVHJhcCBpbnN0YW5jZS4gKi9cbiAgZm9jdXNUcmFwOiBGb2N1c1RyYXA7XG5cbiAgLyoqIFByZXZpb3VzbHkgZm9jdXNlZCBlbGVtZW50IHRvIHJlc3RvcmUgZm9jdXMgdG8gdXBvbiBkZXN0cm95IHdoZW4gdXNpbmcgYXV0b0NhcHR1cmUuICovXG4gIHByaXZhdGUgX3ByZXZpb3VzbHlGb2N1c2VkRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcblxuICAvKiogV2hldGhlciB0aGUgZm9jdXMgdHJhcCBpcyBhY3RpdmUuICovXG4gIEBJbnB1dCgnY2RrVHJhcEZvY3VzJylcbiAgZ2V0IGVuYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmZvY3VzVHJhcC5lbmFibGVkOyB9XG4gIHNldCBlbmFibGVkKHZhbHVlOiBib29sZWFuKSB7IHRoaXMuZm9jdXNUcmFwLmVuYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpOyB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGRpcmVjdGl2ZSBzaG91bGQgYXV0b21hdGlhbGx5IG1vdmUgZm9jdXMgaW50byB0aGUgdHJhcHBlZCByZWdpb24gdXBvblxuICAgKiBpbml0aWFsaXphdGlvbiBhbmQgcmV0dXJuIGZvY3VzIHRvIHRoZSBwcmV2aW91cyBhY3RpdmVFbGVtZW50IHVwb24gZGVzdHJ1Y3Rpb24uXG4gICAqL1xuICBASW5wdXQoJ2Nka1RyYXBGb2N1c0F1dG9DYXB0dXJlJylcbiAgZ2V0IGF1dG9DYXB0dXJlKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fYXV0b0NhcHR1cmU7IH1cbiAgc2V0IGF1dG9DYXB0dXJlKHZhbHVlOiBib29sZWFuKSB7IHRoaXMuX2F1dG9DYXB0dXJlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTsgfVxuICBwcml2YXRlIF9hdXRvQ2FwdHVyZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgICAgcHJpdmF0ZSBfZm9jdXNUcmFwRmFjdG9yeTogRm9jdXNUcmFwRmFjdG9yeSxcbiAgICAgIEBJbmplY3QoRE9DVU1FTlQpIF9kb2N1bWVudDogYW55KSB7XG5cbiAgICB0aGlzLl9kb2N1bWVudCA9IF9kb2N1bWVudDtcbiAgICB0aGlzLmZvY3VzVHJhcCA9IHRoaXMuX2ZvY3VzVHJhcEZhY3RvcnkuY3JlYXRlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdHJ1ZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmZvY3VzVHJhcC5kZXN0cm95KCk7XG5cbiAgICAvLyBJZiB3ZSBzdG9yZWQgYSBwcmV2aW91c2x5IGZvY3VzZWQgZWxlbWVudCB3aGVuIHVzaW5nIGF1dG9DYXB0dXJlLCByZXR1cm4gZm9jdXMgdG8gdGhhdFxuICAgIC8vIGVsZW1lbnQgbm93IHRoYXQgdGhlIHRyYXBwZWQgcmVnaW9uIGlzIGJlaW5nIGRlc3Ryb3llZC5cbiAgICBpZiAodGhpcy5fcHJldmlvdXNseUZvY3VzZWRFbGVtZW50KSB7XG4gICAgICB0aGlzLl9wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIHRoaXMuX3ByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuZm9jdXNUcmFwLmF0dGFjaEFuY2hvcnMoKTtcblxuICAgIGlmICh0aGlzLmF1dG9DYXB0dXJlKSB7XG4gICAgICB0aGlzLl9wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQgPSB0aGlzLl9kb2N1bWVudC5hY3RpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgdGhpcy5mb2N1c1RyYXAuZm9jdXNJbml0aWFsRWxlbWVudFdoZW5SZWFkeSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nRG9DaGVjaygpIHtcbiAgICBpZiAoIXRoaXMuZm9jdXNUcmFwLmhhc0F0dGFjaGVkKCkpIHtcbiAgICAgIHRoaXMuZm9jdXNUcmFwLmF0dGFjaEFuY2hvcnMoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZW5hYmxlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYXV0b0NhcHR1cmU6IEJvb2xlYW5JbnB1dDtcbn1cbiJdfQ==