/**
 * @fileoverview added by tsickle
 * Generated from: src/material/snack-bar/snack-bar.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector, TemplatePortal } from '@angular/cdk/portal';
import { Inject, Injectable, InjectionToken, Injector, Optional, SkipSelf, TemplateRef, } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { SimpleSnackBar } from './simple-snack-bar';
import { MAT_SNACK_BAR_DATA, MatSnackBarConfig } from './snack-bar-config';
import { MatSnackBarContainer } from './snack-bar-container';
import { MatSnackBarModule } from './snack-bar-module';
import { MatSnackBarRef } from './snack-bar-ref';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "@angular/cdk/a11y";
import * as i3 from "@angular/cdk/layout";
import * as i4 from "angular_material/src/material/snack-bar/snack-bar-module";
/**
 * Injection token that can be used to specify default snack bar.
 * @type {?}
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/overlay';
import * as ɵngcc2 from '@angular/cdk/a11y';
import * as ɵngcc3 from '@angular/cdk/layout';
export const MAT_SNACK_BAR_DEFAULT_OPTIONS = new InjectionToken('mat-snack-bar-default-options', {
    providedIn: 'root',
    factory: MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY,
});
/**
 * \@docs-private
 * @return {?}
 */
export function MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY() {
    return new MatSnackBarConfig();
}
/**
 * Service to dispatch Material Design snack bar messages.
 */
export class MatSnackBar {
    /**
     * @param {?} _overlay
     * @param {?} _live
     * @param {?} _injector
     * @param {?} _breakpointObserver
     * @param {?} _parentSnackBar
     * @param {?} _defaultConfig
     */
    constructor(_overlay, _live, _injector, _breakpointObserver, _parentSnackBar, _defaultConfig) {
        this._overlay = _overlay;
        this._live = _live;
        this._injector = _injector;
        this._breakpointObserver = _breakpointObserver;
        this._parentSnackBar = _parentSnackBar;
        this._defaultConfig = _defaultConfig;
        /**
         * Reference to the current snack bar in the view *at this level* (in the Angular injector tree).
         * If there is a parent snack-bar service, all operations should delegate to that parent
         * via `_openedSnackBarRef`.
         */
        this._snackBarRefAtThisLevel = null;
    }
    /**
     * Reference to the currently opened snackbar at *any* level.
     * @return {?}
     */
    get _openedSnackBarRef() {
        /** @type {?} */
        const parent = this._parentSnackBar;
        return parent ? parent._openedSnackBarRef : this._snackBarRefAtThisLevel;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set _openedSnackBarRef(value) {
        if (this._parentSnackBar) {
            this._parentSnackBar._openedSnackBarRef = value;
        }
        else {
            this._snackBarRefAtThisLevel = value;
        }
    }
    /**
     * Creates and dispatches a snack bar with a custom component for the content, removing any
     * currently opened snack bars.
     *
     * @template T
     * @param {?} component Component to be instantiated.
     * @param {?=} config Extra configuration for the snack bar.
     * @return {?}
     */
    openFromComponent(component, config) {
        return (/** @type {?} */ (this._attach(component, config)));
    }
    /**
     * Creates and dispatches a snack bar with a custom template for the content, removing any
     * currently opened snack bars.
     *
     * @param {?} template Template to be instantiated.
     * @param {?=} config Extra configuration for the snack bar.
     * @return {?}
     */
    openFromTemplate(template, config) {
        return this._attach(template, config);
    }
    /**
     * Opens a snackbar with a message and an optional action.
     * @param {?} message The message to show in the snackbar.
     * @param {?=} action The label for the snackbar action.
     * @param {?=} config Additional configuration options for the snackbar.
     * @return {?}
     */
    open(message, action = '', config) {
        /** @type {?} */
        const _config = Object.assign(Object.assign({}, this._defaultConfig), config);
        // Since the user doesn't have access to the component, we can
        // override the data to pass in our own message and action.
        _config.data = { message, action };
        if (!_config.announcementMessage) {
            _config.announcementMessage = message;
        }
        return this.openFromComponent(SimpleSnackBar, _config);
    }
    /**
     * Dismisses the currently-visible snack bar.
     * @return {?}
     */
    dismiss() {
        if (this._openedSnackBarRef) {
            this._openedSnackBarRef.dismiss();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // Only dismiss the snack bar at the current level on destroy.
        if (this._snackBarRefAtThisLevel) {
            this._snackBarRefAtThisLevel.dismiss();
        }
    }
    /**
     * Attaches the snack bar container component to the overlay.
     * @private
     * @param {?} overlayRef
     * @param {?} config
     * @return {?}
     */
    _attachSnackBarContainer(overlayRef, config) {
        /** @type {?} */
        const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        /** @type {?} */
        const injector = new PortalInjector(userInjector || this._injector, new WeakMap([
            [MatSnackBarConfig, config]
        ]));
        /** @type {?} */
        const containerPortal = new ComponentPortal(MatSnackBarContainer, config.viewContainerRef, injector);
        /** @type {?} */
        const containerRef = overlayRef.attach(containerPortal);
        containerRef.instance.snackBarConfig = config;
        return containerRef.instance;
    }
    /**
     * Places a new component or a template as the content of the snack bar container.
     * @private
     * @template T
     * @param {?} content
     * @param {?=} userConfig
     * @return {?}
     */
    _attach(content, userConfig) {
        /** @type {?} */
        const config = Object.assign(Object.assign(Object.assign({}, new MatSnackBarConfig()), this._defaultConfig), userConfig);
        /** @type {?} */
        const overlayRef = this._createOverlay(config);
        /** @type {?} */
        const container = this._attachSnackBarContainer(overlayRef, config);
        /** @type {?} */
        const snackBarRef = new MatSnackBarRef(container, overlayRef);
        if (content instanceof TemplateRef) {
            /** @type {?} */
            const portal = new TemplatePortal(content, (/** @type {?} */ (null)), (/** @type {?} */ ({
                $implicit: config.data,
                snackBarRef
            })));
            snackBarRef.instance = container.attachTemplatePortal(portal);
        }
        else {
            /** @type {?} */
            const injector = this._createInjector(config, snackBarRef);
            /** @type {?} */
            const portal = new ComponentPortal(content, undefined, injector);
            /** @type {?} */
            const contentRef = container.attachComponentPortal(portal);
            // We can't pass this via the injector, because the injector is created earlier.
            snackBarRef.instance = contentRef.instance;
        }
        // Subscribe to the breakpoint observer and attach the mat-snack-bar-handset class as
        // appropriate. This class is applied to the overlay element because the overlay must expand to
        // fill the width of the screen for full width snackbars.
        this._breakpointObserver.observe(Breakpoints.HandsetPortrait).pipe(takeUntil(overlayRef.detachments())).subscribe((/**
         * @param {?} state
         * @return {?}
         */
        state => {
            /** @type {?} */
            const classList = overlayRef.overlayElement.classList;
            /** @type {?} */
            const className = 'mat-snack-bar-handset';
            state.matches ? classList.add(className) : classList.remove(className);
        }));
        this._animateSnackBar(snackBarRef, config);
        this._openedSnackBarRef = snackBarRef;
        return this._openedSnackBarRef;
    }
    /**
     * Animates the old snack bar out and the new one in.
     * @private
     * @param {?} snackBarRef
     * @param {?} config
     * @return {?}
     */
    _animateSnackBar(snackBarRef, config) {
        // When the snackbar is dismissed, clear the reference to it.
        snackBarRef.afterDismissed().subscribe((/**
         * @return {?}
         */
        () => {
            // Clear the snackbar ref if it hasn't already been replaced by a newer snackbar.
            if (this._openedSnackBarRef == snackBarRef) {
                this._openedSnackBarRef = null;
            }
            if (config.announcementMessage) {
                this._live.clear();
            }
        }));
        if (this._openedSnackBarRef) {
            // If a snack bar is already in view, dismiss it and enter the
            // new snack bar after exit animation is complete.
            this._openedSnackBarRef.afterDismissed().subscribe((/**
             * @return {?}
             */
            () => {
                snackBarRef.containerInstance.enter();
            }));
            this._openedSnackBarRef.dismiss();
        }
        else {
            // If no snack bar is in view, enter the new snack bar.
            snackBarRef.containerInstance.enter();
        }
        // If a dismiss timeout is provided, set up dismiss based on after the snackbar is opened.
        if (config.duration && config.duration > 0) {
            snackBarRef.afterOpened().subscribe((/**
             * @return {?}
             */
            () => snackBarRef._dismissAfter((/** @type {?} */ (config.duration)))));
        }
        if (config.announcementMessage) {
            this._live.announce(config.announcementMessage, config.politeness);
        }
    }
    /**
     * Creates a new overlay and places it in the correct location.
     * @private
     * @param {?} config The user-specified snack bar config.
     * @return {?}
     */
    _createOverlay(config) {
        /** @type {?} */
        const overlayConfig = new OverlayConfig();
        overlayConfig.direction = config.direction;
        /** @type {?} */
        let positionStrategy = this._overlay.position().global();
        // Set horizontal position.
        /** @type {?} */
        const isRtl = config.direction === 'rtl';
        /** @type {?} */
        const isLeft = (config.horizontalPosition === 'left' ||
            (config.horizontalPosition === 'start' && !isRtl) ||
            (config.horizontalPosition === 'end' && isRtl));
        /** @type {?} */
        const isRight = !isLeft && config.horizontalPosition !== 'center';
        if (isLeft) {
            positionStrategy.left('0');
        }
        else if (isRight) {
            positionStrategy.right('0');
        }
        else {
            positionStrategy.centerHorizontally();
        }
        // Set horizontal position.
        if (config.verticalPosition === 'top') {
            positionStrategy.top('0');
        }
        else {
            positionStrategy.bottom('0');
        }
        overlayConfig.positionStrategy = positionStrategy;
        return this._overlay.create(overlayConfig);
    }
    /**
     * Creates an injector to be used inside of a snack bar component.
     * @private
     * @template T
     * @param {?} config Config that was used to create the snack bar.
     * @param {?} snackBarRef Reference to the snack bar.
     * @return {?}
     */
    _createInjector(config, snackBarRef) {
        /** @type {?} */
        const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        return new PortalInjector(userInjector || this._injector, new WeakMap([
            [MatSnackBarRef, snackBarRef],
            [MAT_SNACK_BAR_DATA, config.data]
        ]));
    }
}
MatSnackBar.ɵfac = function MatSnackBar_Factory(t) { return new (t || MatSnackBar)(ɵngcc0.ɵɵinject(ɵngcc1.Overlay), ɵngcc0.ɵɵinject(ɵngcc2.LiveAnnouncer), ɵngcc0.ɵɵinject(ɵngcc0.Injector), ɵngcc0.ɵɵinject(ɵngcc3.BreakpointObserver), ɵngcc0.ɵɵinject(MatSnackBar, 12), ɵngcc0.ɵɵinject(MAT_SNACK_BAR_DEFAULT_OPTIONS)); };
/** @nocollapse */
MatSnackBar.ctorParameters = () => [
    { type: Overlay },
    { type: LiveAnnouncer },
    { type: Injector },
    { type: BreakpointObserver },
    { type: MatSnackBar, decorators: [{ type: Optional }, { type: SkipSelf }] },
    { type: MatSnackBarConfig, decorators: [{ type: Inject, args: [MAT_SNACK_BAR_DEFAULT_OPTIONS,] }] }
];
/** @nocollapse */ MatSnackBar.ɵprov = i0.ɵɵdefineInjectable({ factory: function MatSnackBar_Factory() { return new MatSnackBar(i0.ɵɵinject(i1.Overlay), i0.ɵɵinject(i2.LiveAnnouncer), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i3.BreakpointObserver), i0.ɵɵinject(MatSnackBar, 12), i0.ɵɵinject(MAT_SNACK_BAR_DEFAULT_OPTIONS)); }, token: MatSnackBar, providedIn: i4.MatSnackBarModule });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatSnackBar, [{
        type: Injectable,
        args: [{ providedIn: MatSnackBarModule }]
    }], function () { return [{ type: ɵngcc1.Overlay }, { type: ɵngcc2.LiveAnnouncer }, { type: ɵngcc0.Injector }, { type: ɵngcc3.BreakpointObserver }, { type: MatSnackBar, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }, { type: MatSnackBarConfig, decorators: [{
                type: Inject,
                args: [MAT_SNACK_BAR_DEFAULT_OPTIONS]
            }] }]; }, null); })();
if (false) {
    /**
     * Reference to the current snack bar in the view *at this level* (in the Angular injector tree).
     * If there is a parent snack-bar service, all operations should delegate to that parent
     * via `_openedSnackBarRef`.
     * @type {?}
     * @private
     */
    MatSnackBar.prototype._snackBarRefAtThisLevel;
    /**
     * @type {?}
     * @private
     */
    MatSnackBar.prototype._overlay;
    /**
     * @type {?}
     * @private
     */
    MatSnackBar.prototype._live;
    /**
     * @type {?}
     * @private
     */
    MatSnackBar.prototype._injector;
    /**
     * @type {?}
     * @private
     */
    MatSnackBar.prototype._breakpointObserver;
    /**
     * @type {?}
     * @private
     */
    MatSnackBar.prototype._parentSnackBar;
    /**
     * @type {?}
     * @private
     */
    MatSnackBar.prototype._defaultConfig;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvc25hY2stYmFyL3NuYWNrLWJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFDLGtCQUFrQixFQUFFLFdBQVcsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3BFLE9BQU8sRUFBQyxPQUFPLEVBQUUsYUFBYSxFQUFhLE1BQU0sc0JBQXNCLENBQUM7QUFDeEUsT0FBTyxFQUFDLGVBQWUsRUFBaUIsY0FBYyxFQUFFLGNBQWMsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ25HLE9BQU8sRUFHTCxNQUFNLEVBQ04sVUFBVSxFQUNWLGNBQWMsRUFDZCxRQUFRLEVBQ1IsUUFBUSxFQUNSLFFBQVEsRUFDUixXQUFXLEdBRVosTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDL0M7QUFFbUM7QUFDMUI7QUFDSjtBQUEyQztBQUV2QjtBQUFJO0FBSWxCO0FBQWE7Ozs7O0FBUHhCLE1BQU0sT0FBTyw2QkFBNkIsR0FDdEMsSUFBSSxjQUFjLENBQW9CLCtCQUErQixFQUFFO0FBQzNFLElBQU0sVUFBVSxFQUFFLE1BQU07QUFDeEIsSUFBTSxPQUFPLEVBQUUscUNBQXFDO0FBQ3BE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QUFBQztBQUMvQztBQUFpQjtBQUFnQjtBQUFRLElBQTFDLHNDQUE0RDtBQUFDO0FBQzVEO0FBQWlCO0FBQWdCO0FBQVEsSUFBMUMscUNBQWdGO0FBQUM7QUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0xpdmVBbm5vdW5jZXJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7QnJlYWtwb2ludE9ic2VydmVyLCBCcmVha3BvaW50c30gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XG5pbXBvcnQge092ZXJsYXksIE92ZXJsYXlDb25maWcsIE92ZXJsYXlSZWZ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7Q29tcG9uZW50UG9ydGFsLCBDb21wb25lbnRUeXBlLCBQb3J0YWxJbmplY3RvciwgVGVtcGxhdGVQb3J0YWx9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50UmVmLFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIEluamVjdCxcbiAgSW5qZWN0YWJsZSxcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIEluamVjdG9yLFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIFRlbXBsYXRlUmVmLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHt0YWtlVW50aWx9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7U2ltcGxlU25hY2tCYXJ9IGZyb20gJy4vc2ltcGxlLXNuYWNrLWJhcic7XG5pbXBvcnQge01BVF9TTkFDS19CQVJfREFUQSwgTWF0U25hY2tCYXJDb25maWd9IGZyb20gJy4vc25hY2stYmFyLWNvbmZpZyc7XG5pbXBvcnQge01hdFNuYWNrQmFyQ29udGFpbmVyfSBmcm9tICcuL3NuYWNrLWJhci1jb250YWluZXInO1xuaW1wb3J0IHtNYXRTbmFja0Jhck1vZHVsZX0gZnJvbSAnLi9zbmFjay1iYXItbW9kdWxlJztcbmltcG9ydCB7TWF0U25hY2tCYXJSZWZ9IGZyb20gJy4vc25hY2stYmFyLXJlZic7XG5cblxuLyoqIEluamVjdGlvbiB0b2tlbiB0aGF0IGNhbiBiZSB1c2VkIHRvIHNwZWNpZnkgZGVmYXVsdCBzbmFjayBiYXIuICovXG5leHBvcnQgY29uc3QgTUFUX1NOQUNLX0JBUl9ERUZBVUxUX09QVElPTlMgPVxuICAgIG5ldyBJbmplY3Rpb25Ub2tlbjxNYXRTbmFja0JhckNvbmZpZz4oJ21hdC1zbmFjay1iYXItZGVmYXVsdC1vcHRpb25zJywge1xuICAgICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxuICAgICAgZmFjdG9yeTogTUFUX1NOQUNLX0JBUl9ERUZBVUxUX09QVElPTlNfRkFDVE9SWSxcbiAgICB9KTtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBmdW5jdGlvbiBNQVRfU05BQ0tfQkFSX0RFRkFVTFRfT1BUSU9OU19GQUNUT1JZKCk6IE1hdFNuYWNrQmFyQ29uZmlnIHtcbiAgcmV0dXJuIG5ldyBNYXRTbmFja0JhckNvbmZpZygpO1xufVxuXG4vKipcbiAqIFNlcnZpY2UgdG8gZGlzcGF0Y2ggTWF0ZXJpYWwgRGVzaWduIHNuYWNrIGJhciBtZXNzYWdlcy5cbiAqL1xuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46IE1hdFNuYWNrQmFyTW9kdWxlfSlcbmV4cG9ydCBjbGFzcyBNYXRTbmFja0JhciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBSZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgc25hY2sgYmFyIGluIHRoZSB2aWV3ICphdCB0aGlzIGxldmVsKiAoaW4gdGhlIEFuZ3VsYXIgaW5qZWN0b3IgdHJlZSkuXG4gICAqIElmIHRoZXJlIGlzIGEgcGFyZW50IHNuYWNrLWJhciBzZXJ2aWNlLCBhbGwgb3BlcmF0aW9ucyBzaG91bGQgZGVsZWdhdGUgdG8gdGhhdCBwYXJlbnRcbiAgICogdmlhIGBfb3BlbmVkU25hY2tCYXJSZWZgLlxuICAgKi9cbiAgcHJpdmF0ZSBfc25hY2tCYXJSZWZBdFRoaXNMZXZlbDogTWF0U25hY2tCYXJSZWY8YW55PiB8IG51bGwgPSBudWxsO1xuXG4gIC8qKiBSZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnRseSBvcGVuZWQgc25hY2tiYXIgYXQgKmFueSogbGV2ZWwuICovXG4gIGdldCBfb3BlbmVkU25hY2tCYXJSZWYoKTogTWF0U25hY2tCYXJSZWY8YW55PiB8IG51bGwge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX3BhcmVudFNuYWNrQmFyO1xuICAgIHJldHVybiBwYXJlbnQgPyBwYXJlbnQuX29wZW5lZFNuYWNrQmFyUmVmIDogdGhpcy5fc25hY2tCYXJSZWZBdFRoaXNMZXZlbDtcbiAgfVxuXG4gIHNldCBfb3BlbmVkU25hY2tCYXJSZWYodmFsdWU6IE1hdFNuYWNrQmFyUmVmPGFueT4gfCBudWxsKSB7XG4gICAgaWYgKHRoaXMuX3BhcmVudFNuYWNrQmFyKSB7XG4gICAgICB0aGlzLl9wYXJlbnRTbmFja0Jhci5fb3BlbmVkU25hY2tCYXJSZWYgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc25hY2tCYXJSZWZBdFRoaXNMZXZlbCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBfb3ZlcmxheTogT3ZlcmxheSxcbiAgICAgIHByaXZhdGUgX2xpdmU6IExpdmVBbm5vdW5jZXIsXG4gICAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICAgICBwcml2YXRlIF9icmVha3BvaW50T2JzZXJ2ZXI6IEJyZWFrcG9pbnRPYnNlcnZlcixcbiAgICAgIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHByaXZhdGUgX3BhcmVudFNuYWNrQmFyOiBNYXRTbmFja0JhcixcbiAgICAgIEBJbmplY3QoTUFUX1NOQUNLX0JBUl9ERUZBVUxUX09QVElPTlMpIHByaXZhdGUgX2RlZmF1bHRDb25maWc6IE1hdFNuYWNrQmFyQ29uZmlnKSB7fVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuZCBkaXNwYXRjaGVzIGEgc25hY2sgYmFyIHdpdGggYSBjdXN0b20gY29tcG9uZW50IGZvciB0aGUgY29udGVudCwgcmVtb3ZpbmcgYW55XG4gICAqIGN1cnJlbnRseSBvcGVuZWQgc25hY2sgYmFycy5cbiAgICpcbiAgICogQHBhcmFtIGNvbXBvbmVudCBDb21wb25lbnQgdG8gYmUgaW5zdGFudGlhdGVkLlxuICAgKiBAcGFyYW0gY29uZmlnIEV4dHJhIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBzbmFjayBiYXIuXG4gICAqL1xuICBvcGVuRnJvbUNvbXBvbmVudDxUPihjb21wb25lbnQ6IENvbXBvbmVudFR5cGU8VD4sIGNvbmZpZz86IE1hdFNuYWNrQmFyQ29uZmlnKTpcbiAgICBNYXRTbmFja0JhclJlZjxUPiB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dGFjaChjb21wb25lbnQsIGNvbmZpZykgYXMgTWF0U25hY2tCYXJSZWY8VD47XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbmQgZGlzcGF0Y2hlcyBhIHNuYWNrIGJhciB3aXRoIGEgY3VzdG9tIHRlbXBsYXRlIGZvciB0aGUgY29udGVudCwgcmVtb3ZpbmcgYW55XG4gICAqIGN1cnJlbnRseSBvcGVuZWQgc25hY2sgYmFycy5cbiAgICpcbiAgICogQHBhcmFtIHRlbXBsYXRlIFRlbXBsYXRlIHRvIGJlIGluc3RhbnRpYXRlZC5cbiAgICogQHBhcmFtIGNvbmZpZyBFeHRyYSBjb25maWd1cmF0aW9uIGZvciB0aGUgc25hY2sgYmFyLlxuICAgKi9cbiAgb3BlbkZyb21UZW1wbGF0ZSh0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiwgY29uZmlnPzogTWF0U25hY2tCYXJDb25maWcpOlxuICAgIE1hdFNuYWNrQmFyUmVmPEVtYmVkZGVkVmlld1JlZjxhbnk+PiB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dGFjaCh0ZW1wbGF0ZSwgY29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBhIHNuYWNrYmFyIHdpdGggYSBtZXNzYWdlIGFuZCBhbiBvcHRpb25hbCBhY3Rpb24uXG4gICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHNob3cgaW4gdGhlIHNuYWNrYmFyLlxuICAgKiBAcGFyYW0gYWN0aW9uIFRoZSBsYWJlbCBmb3IgdGhlIHNuYWNrYmFyIGFjdGlvbi5cbiAgICogQHBhcmFtIGNvbmZpZyBBZGRpdGlvbmFsIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgdGhlIHNuYWNrYmFyLlxuICAgKi9cbiAgb3BlbihtZXNzYWdlOiBzdHJpbmcsIGFjdGlvbjogc3RyaW5nID0gJycsIGNvbmZpZz86IE1hdFNuYWNrQmFyQ29uZmlnKTpcbiAgICAgIE1hdFNuYWNrQmFyUmVmPFNpbXBsZVNuYWNrQmFyPiB7XG4gICAgY29uc3QgX2NvbmZpZyA9IHsuLi50aGlzLl9kZWZhdWx0Q29uZmlnLCAuLi5jb25maWd9O1xuXG4gICAgLy8gU2luY2UgdGhlIHVzZXIgZG9lc24ndCBoYXZlIGFjY2VzcyB0byB0aGUgY29tcG9uZW50LCB3ZSBjYW5cbiAgICAvLyBvdmVycmlkZSB0aGUgZGF0YSB0byBwYXNzIGluIG91ciBvd24gbWVzc2FnZSBhbmQgYWN0aW9uLlxuICAgIF9jb25maWcuZGF0YSA9IHttZXNzYWdlLCBhY3Rpb259O1xuXG4gICAgaWYgKCFfY29uZmlnLmFubm91bmNlbWVudE1lc3NhZ2UpIHtcbiAgICAgIF9jb25maWcuYW5ub3VuY2VtZW50TWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMub3BlbkZyb21Db21wb25lbnQoU2ltcGxlU25hY2tCYXIsIF9jb25maWcpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc21pc3NlcyB0aGUgY3VycmVudGx5LXZpc2libGUgc25hY2sgYmFyLlxuICAgKi9cbiAgZGlzbWlzcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fb3BlbmVkU25hY2tCYXJSZWYpIHtcbiAgICAgIHRoaXMuX29wZW5lZFNuYWNrQmFyUmVmLmRpc21pc3MoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBPbmx5IGRpc21pc3MgdGhlIHNuYWNrIGJhciBhdCB0aGUgY3VycmVudCBsZXZlbCBvbiBkZXN0cm95LlxuICAgIGlmICh0aGlzLl9zbmFja0JhclJlZkF0VGhpc0xldmVsKSB7XG4gICAgICB0aGlzLl9zbmFja0JhclJlZkF0VGhpc0xldmVsLmRpc21pc3MoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXR0YWNoZXMgdGhlIHNuYWNrIGJhciBjb250YWluZXIgY29tcG9uZW50IHRvIHRoZSBvdmVybGF5LlxuICAgKi9cbiAgcHJpdmF0ZSBfYXR0YWNoU25hY2tCYXJDb250YWluZXIob3ZlcmxheVJlZjogT3ZlcmxheVJlZixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnOiBNYXRTbmFja0JhckNvbmZpZyk6IE1hdFNuYWNrQmFyQ29udGFpbmVyIHtcblxuICAgIGNvbnN0IHVzZXJJbmplY3RvciA9IGNvbmZpZyAmJiBjb25maWcudmlld0NvbnRhaW5lclJlZiAmJiBjb25maWcudmlld0NvbnRhaW5lclJlZi5pbmplY3RvcjtcbiAgICBjb25zdCBpbmplY3RvciA9IG5ldyBQb3J0YWxJbmplY3Rvcih1c2VySW5qZWN0b3IgfHwgdGhpcy5faW5qZWN0b3IsIG5ldyBXZWFrTWFwKFtcbiAgICAgIFtNYXRTbmFja0JhckNvbmZpZywgY29uZmlnXVxuICAgIF0pKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lclBvcnRhbCA9XG4gICAgICAgIG5ldyBDb21wb25lbnRQb3J0YWwoTWF0U25hY2tCYXJDb250YWluZXIsIGNvbmZpZy52aWV3Q29udGFpbmVyUmVmLCBpbmplY3Rvcik7XG4gICAgY29uc3QgY29udGFpbmVyUmVmOiBDb21wb25lbnRSZWY8TWF0U25hY2tCYXJDb250YWluZXI+ID0gb3ZlcmxheVJlZi5hdHRhY2goY29udGFpbmVyUG9ydGFsKTtcbiAgICBjb250YWluZXJSZWYuaW5zdGFuY2Uuc25hY2tCYXJDb25maWcgPSBjb25maWc7XG4gICAgcmV0dXJuIGNvbnRhaW5lclJlZi5pbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQbGFjZXMgYSBuZXcgY29tcG9uZW50IG9yIGEgdGVtcGxhdGUgYXMgdGhlIGNvbnRlbnQgb2YgdGhlIHNuYWNrIGJhciBjb250YWluZXIuXG4gICAqL1xuICBwcml2YXRlIF9hdHRhY2g8VD4oY29udGVudDogQ29tcG9uZW50VHlwZTxUPiB8IFRlbXBsYXRlUmVmPFQ+LCB1c2VyQ29uZmlnPzogTWF0U25hY2tCYXJDb25maWcpOlxuICAgIE1hdFNuYWNrQmFyUmVmPFQgfCBFbWJlZGRlZFZpZXdSZWY8YW55Pj4ge1xuXG4gICAgY29uc3QgY29uZmlnID0gey4uLm5ldyBNYXRTbmFja0JhckNvbmZpZygpLCAuLi50aGlzLl9kZWZhdWx0Q29uZmlnLCAuLi51c2VyQ29uZmlnfTtcbiAgICBjb25zdCBvdmVybGF5UmVmID0gdGhpcy5fY3JlYXRlT3ZlcmxheShjb25maWcpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuX2F0dGFjaFNuYWNrQmFyQ29udGFpbmVyKG92ZXJsYXlSZWYsIGNvbmZpZyk7XG4gICAgY29uc3Qgc25hY2tCYXJSZWYgPSBuZXcgTWF0U25hY2tCYXJSZWY8VCB8IEVtYmVkZGVkVmlld1JlZjxhbnk+Pihjb250YWluZXIsIG92ZXJsYXlSZWYpO1xuXG4gICAgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgY29uc3QgcG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKGNvbnRlbnQsIG51bGwhLCB7XG4gICAgICAgICRpbXBsaWNpdDogY29uZmlnLmRhdGEsXG4gICAgICAgIHNuYWNrQmFyUmVmXG4gICAgICB9IGFzIGFueSk7XG5cbiAgICAgIHNuYWNrQmFyUmVmLmluc3RhbmNlID0gY29udGFpbmVyLmF0dGFjaFRlbXBsYXRlUG9ydGFsKHBvcnRhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGluamVjdG9yID0gdGhpcy5fY3JlYXRlSW5qZWN0b3IoY29uZmlnLCBzbmFja0JhclJlZik7XG4gICAgICBjb25zdCBwb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsKGNvbnRlbnQsIHVuZGVmaW5lZCwgaW5qZWN0b3IpO1xuICAgICAgY29uc3QgY29udGVudFJlZiA9IGNvbnRhaW5lci5hdHRhY2hDb21wb25lbnRQb3J0YWw8VD4ocG9ydGFsKTtcblxuICAgICAgLy8gV2UgY2FuJ3QgcGFzcyB0aGlzIHZpYSB0aGUgaW5qZWN0b3IsIGJlY2F1c2UgdGhlIGluamVjdG9yIGlzIGNyZWF0ZWQgZWFybGllci5cbiAgICAgIHNuYWNrQmFyUmVmLmluc3RhbmNlID0gY29udGVudFJlZi5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvLyBTdWJzY3JpYmUgdG8gdGhlIGJyZWFrcG9pbnQgb2JzZXJ2ZXIgYW5kIGF0dGFjaCB0aGUgbWF0LXNuYWNrLWJhci1oYW5kc2V0IGNsYXNzIGFzXG4gICAgLy8gYXBwcm9wcmlhdGUuIFRoaXMgY2xhc3MgaXMgYXBwbGllZCB0byB0aGUgb3ZlcmxheSBlbGVtZW50IGJlY2F1c2UgdGhlIG92ZXJsYXkgbXVzdCBleHBhbmQgdG9cbiAgICAvLyBmaWxsIHRoZSB3aWR0aCBvZiB0aGUgc2NyZWVuIGZvciBmdWxsIHdpZHRoIHNuYWNrYmFycy5cbiAgICB0aGlzLl9icmVha3BvaW50T2JzZXJ2ZXIub2JzZXJ2ZShCcmVha3BvaW50cy5IYW5kc2V0UG9ydHJhaXQpLnBpcGUoXG4gICAgICB0YWtlVW50aWwob3ZlcmxheVJlZi5kZXRhY2htZW50cygpKVxuICAgICkuc3Vic2NyaWJlKHN0YXRlID0+IHtcbiAgICAgIGNvbnN0IGNsYXNzTGlzdCA9IG92ZXJsYXlSZWYub3ZlcmxheUVsZW1lbnQuY2xhc3NMaXN0O1xuICAgICAgY29uc3QgY2xhc3NOYW1lID0gJ21hdC1zbmFjay1iYXItaGFuZHNldCc7XG4gICAgICBzdGF0ZS5tYXRjaGVzID8gY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpIDogY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fYW5pbWF0ZVNuYWNrQmFyKHNuYWNrQmFyUmVmLCBjb25maWcpO1xuICAgIHRoaXMuX29wZW5lZFNuYWNrQmFyUmVmID0gc25hY2tCYXJSZWY7XG4gICAgcmV0dXJuIHRoaXMuX29wZW5lZFNuYWNrQmFyUmVmO1xuICB9XG5cbiAgLyoqIEFuaW1hdGVzIHRoZSBvbGQgc25hY2sgYmFyIG91dCBhbmQgdGhlIG5ldyBvbmUgaW4uICovXG4gIHByaXZhdGUgX2FuaW1hdGVTbmFja0JhcihzbmFja0JhclJlZjogTWF0U25hY2tCYXJSZWY8YW55PiwgY29uZmlnOiBNYXRTbmFja0JhckNvbmZpZykge1xuICAgIC8vIFdoZW4gdGhlIHNuYWNrYmFyIGlzIGRpc21pc3NlZCwgY2xlYXIgdGhlIHJlZmVyZW5jZSB0byBpdC5cbiAgICBzbmFja0JhclJlZi5hZnRlckRpc21pc3NlZCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAvLyBDbGVhciB0aGUgc25hY2tiYXIgcmVmIGlmIGl0IGhhc24ndCBhbHJlYWR5IGJlZW4gcmVwbGFjZWQgYnkgYSBuZXdlciBzbmFja2Jhci5cbiAgICAgIGlmICh0aGlzLl9vcGVuZWRTbmFja0JhclJlZiA9PSBzbmFja0JhclJlZikge1xuICAgICAgICB0aGlzLl9vcGVuZWRTbmFja0JhclJlZiA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcuYW5ub3VuY2VtZW50TWVzc2FnZSkge1xuICAgICAgICB0aGlzLl9saXZlLmNsZWFyKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5fb3BlbmVkU25hY2tCYXJSZWYpIHtcbiAgICAgIC8vIElmIGEgc25hY2sgYmFyIGlzIGFscmVhZHkgaW4gdmlldywgZGlzbWlzcyBpdCBhbmQgZW50ZXIgdGhlXG4gICAgICAvLyBuZXcgc25hY2sgYmFyIGFmdGVyIGV4aXQgYW5pbWF0aW9uIGlzIGNvbXBsZXRlLlxuICAgICAgdGhpcy5fb3BlbmVkU25hY2tCYXJSZWYuYWZ0ZXJEaXNtaXNzZWQoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBzbmFja0JhclJlZi5jb250YWluZXJJbnN0YW5jZS5lbnRlcigpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9vcGVuZWRTbmFja0JhclJlZi5kaXNtaXNzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIG5vIHNuYWNrIGJhciBpcyBpbiB2aWV3LCBlbnRlciB0aGUgbmV3IHNuYWNrIGJhci5cbiAgICAgIHNuYWNrQmFyUmVmLmNvbnRhaW5lckluc3RhbmNlLmVudGVyKCk7XG4gICAgfVxuXG4gICAgLy8gSWYgYSBkaXNtaXNzIHRpbWVvdXQgaXMgcHJvdmlkZWQsIHNldCB1cCBkaXNtaXNzIGJhc2VkIG9uIGFmdGVyIHRoZSBzbmFja2JhciBpcyBvcGVuZWQuXG4gICAgaWYgKGNvbmZpZy5kdXJhdGlvbiAmJiBjb25maWcuZHVyYXRpb24gPiAwKSB7XG4gICAgICBzbmFja0JhclJlZi5hZnRlck9wZW5lZCgpLnN1YnNjcmliZSgoKSA9PiBzbmFja0JhclJlZi5fZGlzbWlzc0FmdGVyKGNvbmZpZy5kdXJhdGlvbiEpKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmFubm91bmNlbWVudE1lc3NhZ2UpIHtcbiAgICAgIHRoaXMuX2xpdmUuYW5ub3VuY2UoY29uZmlnLmFubm91bmNlbWVudE1lc3NhZ2UsIGNvbmZpZy5wb2xpdGVuZXNzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBvdmVybGF5IGFuZCBwbGFjZXMgaXQgaW4gdGhlIGNvcnJlY3QgbG9jYXRpb24uXG4gICAqIEBwYXJhbSBjb25maWcgVGhlIHVzZXItc3BlY2lmaWVkIHNuYWNrIGJhciBjb25maWcuXG4gICAqL1xuICBwcml2YXRlIF9jcmVhdGVPdmVybGF5KGNvbmZpZzogTWF0U25hY2tCYXJDb25maWcpOiBPdmVybGF5UmVmIHtcbiAgICBjb25zdCBvdmVybGF5Q29uZmlnID0gbmV3IE92ZXJsYXlDb25maWcoKTtcbiAgICBvdmVybGF5Q29uZmlnLmRpcmVjdGlvbiA9IGNvbmZpZy5kaXJlY3Rpb247XG5cbiAgICBsZXQgcG9zaXRpb25TdHJhdGVneSA9IHRoaXMuX292ZXJsYXkucG9zaXRpb24oKS5nbG9iYWwoKTtcbiAgICAvLyBTZXQgaG9yaXpvbnRhbCBwb3NpdGlvbi5cbiAgICBjb25zdCBpc1J0bCA9IGNvbmZpZy5kaXJlY3Rpb24gPT09ICdydGwnO1xuICAgIGNvbnN0IGlzTGVmdCA9IChcbiAgICAgIGNvbmZpZy5ob3Jpem9udGFsUG9zaXRpb24gPT09ICdsZWZ0JyB8fFxuICAgICAgKGNvbmZpZy5ob3Jpem9udGFsUG9zaXRpb24gPT09ICdzdGFydCcgJiYgIWlzUnRsKSB8fFxuICAgICAgKGNvbmZpZy5ob3Jpem9udGFsUG9zaXRpb24gPT09ICdlbmQnICYmIGlzUnRsKSk7XG4gICAgY29uc3QgaXNSaWdodCA9ICFpc0xlZnQgJiYgY29uZmlnLmhvcml6b250YWxQb3NpdGlvbiAhPT0gJ2NlbnRlcic7XG4gICAgaWYgKGlzTGVmdCkge1xuICAgICAgcG9zaXRpb25TdHJhdGVneS5sZWZ0KCcwJyk7XG4gICAgfSBlbHNlIGlmIChpc1JpZ2h0KSB7XG4gICAgICBwb3NpdGlvblN0cmF0ZWd5LnJpZ2h0KCcwJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3kuY2VudGVySG9yaXpvbnRhbGx5KCk7XG4gICAgfVxuICAgIC8vIFNldCBob3Jpem9udGFsIHBvc2l0aW9uLlxuICAgIGlmIChjb25maWcudmVydGljYWxQb3NpdGlvbiA9PT0gJ3RvcCcpIHtcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3kudG9wKCcwJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3kuYm90dG9tKCcwJyk7XG4gICAgfVxuXG4gICAgb3ZlcmxheUNvbmZpZy5wb3NpdGlvblN0cmF0ZWd5ID0gcG9zaXRpb25TdHJhdGVneTtcbiAgICByZXR1cm4gdGhpcy5fb3ZlcmxheS5jcmVhdGUob3ZlcmxheUNvbmZpZyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbmplY3RvciB0byBiZSB1c2VkIGluc2lkZSBvZiBhIHNuYWNrIGJhciBjb21wb25lbnQuXG4gICAqIEBwYXJhbSBjb25maWcgQ29uZmlnIHRoYXQgd2FzIHVzZWQgdG8gY3JlYXRlIHRoZSBzbmFjayBiYXIuXG4gICAqIEBwYXJhbSBzbmFja0JhclJlZiBSZWZlcmVuY2UgdG8gdGhlIHNuYWNrIGJhci5cbiAgICovXG4gIHByaXZhdGUgX2NyZWF0ZUluamVjdG9yPFQ+KFxuICAgICAgY29uZmlnOiBNYXRTbmFja0JhckNvbmZpZyxcbiAgICAgIHNuYWNrQmFyUmVmOiBNYXRTbmFja0JhclJlZjxUPik6IFBvcnRhbEluamVjdG9yIHtcblxuICAgIGNvbnN0IHVzZXJJbmplY3RvciA9IGNvbmZpZyAmJiBjb25maWcudmlld0NvbnRhaW5lclJlZiAmJiBjb25maWcudmlld0NvbnRhaW5lclJlZi5pbmplY3RvcjtcblxuICAgIHJldHVybiBuZXcgUG9ydGFsSW5qZWN0b3IodXNlckluamVjdG9yIHx8IHRoaXMuX2luamVjdG9yLCBuZXcgV2Vha01hcDxhbnksIGFueT4oW1xuICAgICAgW01hdFNuYWNrQmFyUmVmLCBzbmFja0JhclJlZl0sXG4gICAgICBbTUFUX1NOQUNLX0JBUl9EQVRBLCBjb25maWcuZGF0YV1cbiAgICBdKSk7XG4gIH1cbn1cbiJdfQ==