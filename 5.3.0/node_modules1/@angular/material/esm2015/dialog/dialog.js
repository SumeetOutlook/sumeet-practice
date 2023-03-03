/**
 * @fileoverview added by tsickle
 * Generated from: src/material/dialog/dialog.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directionality } from '@angular/cdk/bidi';
import { Overlay, OverlayConfig, OverlayContainer, } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector, TemplatePortal } from '@angular/cdk/portal';
import { Location } from '@angular/common';
import { Inject, Injectable, InjectionToken, Injector, Optional, SkipSelf, TemplateRef, } from '@angular/core';
import { defer, of as observableOf, Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { MatDialogConfig } from './dialog-config';
import { MatDialogContainer } from './dialog-container';
import { MatDialogRef } from './dialog-ref';
/**
 * Injection token that can be used to access the data that was passed in to a dialog.
 * @type {?}
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/overlay';
import * as ɵngcc2 from '@angular/common';
export const MAT_DIALOG_DATA = new InjectionToken('MatDialogData');
/**
 * Injection token that can be used to specify default dialog options.
 * @type {?}
 */
export const MAT_DIALOG_DEFAULT_OPTIONS = new InjectionToken('mat-dialog-default-options');
/**
 * Injection token that determines the scroll handling while the dialog is open.
 * @type {?}
 */
export const MAT_DIALOG_SCROLL_STRATEGY = new InjectionToken('mat-dialog-scroll-strategy');
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
export function MAT_DIALOG_SCROLL_STRATEGY_FACTORY(overlay) {
    return (/**
     * @return {?}
     */
    () => overlay.scrollStrategies.block());
}
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
export function MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    return (/**
     * @return {?}
     */
    () => overlay.scrollStrategies.block());
}
/**
 * \@docs-private
 * @type {?}
 */
export const MAT_DIALOG_SCROLL_STRATEGY_PROVIDER = {
    provide: MAT_DIALOG_SCROLL_STRATEGY,
    deps: [Overlay],
    useFactory: MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY,
};
/**
 * Service to open Material Design modal dialogs.
 */
export class MatDialog {
    /**
     * @param {?} _overlay
     * @param {?} _injector
     * @param {?} _location
     * @param {?} _defaultOptions
     * @param {?} scrollStrategy
     * @param {?} _parentDialog
     * @param {?} _overlayContainer
     */
    constructor(_overlay, _injector, 
    /**
     * @deprecated `_location` parameter to be removed.
     * @breaking-change 10.0.0
     */
    _location, _defaultOptions, scrollStrategy, _parentDialog, _overlayContainer) {
        this._overlay = _overlay;
        this._injector = _injector;
        this._defaultOptions = _defaultOptions;
        this._parentDialog = _parentDialog;
        this._overlayContainer = _overlayContainer;
        this._openDialogsAtThisLevel = [];
        this._afterAllClosedAtThisLevel = new Subject();
        this._afterOpenedAtThisLevel = new Subject();
        this._ariaHiddenElements = new Map();
        // TODO (jelbourn): tighten the typing right-hand side of this expression.
        /**
         * Stream that emits when all open dialog have finished closing.
         * Will emit on subscribe if there are no open dialogs to begin with.
         */
        this.afterAllClosed = (/** @type {?} */ (defer((/**
         * @return {?}
         */
        () => this.openDialogs.length ?
            this._afterAllClosed :
            this._afterAllClosed.pipe(startWith(undefined))))));
        this._scrollStrategy = scrollStrategy;
    }
    /**
     * Keeps track of the currently-open dialogs.
     * @return {?}
     */
    get openDialogs() {
        return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
    }
    /**
     * Stream that emits when a dialog has been opened.
     * @return {?}
     */
    get afterOpened() {
        return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
    }
    /**
     * @return {?}
     */
    get _afterAllClosed() {
        /** @type {?} */
        const parent = this._parentDialog;
        return parent ? parent._afterAllClosed : this._afterAllClosedAtThisLevel;
    }
    /**
     * Opens a modal dialog containing the given component.
     * @template T, D, R
     * @param {?} componentOrTemplateRef Type of the component to load into the dialog,
     *     or a TemplateRef to instantiate as the dialog content.
     * @param {?=} config Extra configuration options.
     * @return {?} Reference to the newly-opened dialog.
     */
    open(componentOrTemplateRef, config) {
        config = _applyConfigDefaults(config, this._defaultOptions || new MatDialogConfig());
        if (config.id && this.getDialogById(config.id)) {
            throw Error(`Dialog with id "${config.id}" exists already. The dialog id must be unique.`);
        }
        /** @type {?} */
        const overlayRef = this._createOverlay(config);
        /** @type {?} */
        const dialogContainer = this._attachDialogContainer(overlayRef, config);
        /** @type {?} */
        const dialogRef = this._attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config);
        // If this is the first dialog that we're opening, hide all the non-overlay content.
        if (!this.openDialogs.length) {
            this._hideNonDialogContentFromAssistiveTechnology();
        }
        this.openDialogs.push(dialogRef);
        dialogRef.afterClosed().subscribe((/**
         * @return {?}
         */
        () => this._removeOpenDialog(dialogRef)));
        this.afterOpened.next(dialogRef);
        return dialogRef;
    }
    /**
     * Closes all of the currently-open dialogs.
     * @return {?}
     */
    closeAll() {
        this._closeDialogs(this.openDialogs);
    }
    /**
     * Finds an open dialog by its id.
     * @param {?} id ID to use when looking up the dialog.
     * @return {?}
     */
    getDialogById(id) {
        return this.openDialogs.find((/**
         * @param {?} dialog
         * @return {?}
         */
        dialog => dialog.id === id));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // Only close the dialogs at this level on destroy
        // since the parent service may still be active.
        this._closeDialogs(this._openDialogsAtThisLevel);
        this._afterAllClosedAtThisLevel.complete();
        this._afterOpenedAtThisLevel.complete();
    }
    /**
     * Creates the overlay into which the dialog will be loaded.
     * @private
     * @param {?} config The dialog configuration.
     * @return {?} A promise resolving to the OverlayRef for the created overlay.
     */
    _createOverlay(config) {
        /** @type {?} */
        const overlayConfig = this._getOverlayConfig(config);
        return this._overlay.create(overlayConfig);
    }
    /**
     * Creates an overlay config from a dialog config.
     * @private
     * @param {?} dialogConfig The dialog configuration.
     * @return {?} The overlay configuration.
     */
    _getOverlayConfig(dialogConfig) {
        /** @type {?} */
        const state = new OverlayConfig({
            positionStrategy: this._overlay.position().global(),
            scrollStrategy: dialogConfig.scrollStrategy || this._scrollStrategy(),
            panelClass: dialogConfig.panelClass,
            hasBackdrop: dialogConfig.hasBackdrop,
            direction: dialogConfig.direction,
            minWidth: dialogConfig.minWidth,
            minHeight: dialogConfig.minHeight,
            maxWidth: dialogConfig.maxWidth,
            maxHeight: dialogConfig.maxHeight,
            disposeOnNavigation: dialogConfig.closeOnNavigation
        });
        if (dialogConfig.backdropClass) {
            state.backdropClass = dialogConfig.backdropClass;
        }
        return state;
    }
    /**
     * Attaches an MatDialogContainer to a dialog's already-created overlay.
     * @private
     * @param {?} overlay Reference to the dialog's underlying overlay.
     * @param {?} config The dialog configuration.
     * @return {?} A promise resolving to a ComponentRef for the attached container.
     */
    _attachDialogContainer(overlay, config) {
        /** @type {?} */
        const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        /** @type {?} */
        const injector = new PortalInjector(userInjector || this._injector, new WeakMap([
            [MatDialogConfig, config]
        ]));
        /** @type {?} */
        const containerPortal = new ComponentPortal(MatDialogContainer, config.viewContainerRef, injector, config.componentFactoryResolver);
        /** @type {?} */
        const containerRef = overlay.attach(containerPortal);
        return containerRef.instance;
    }
    /**
     * Attaches the user-provided component to the already-created MatDialogContainer.
     * @private
     * @template T, R
     * @param {?} componentOrTemplateRef The type of component being loaded into the dialog,
     *     or a TemplateRef to instantiate as the content.
     * @param {?} dialogContainer Reference to the wrapping MatDialogContainer.
     * @param {?} overlayRef Reference to the overlay in which the dialog resides.
     * @param {?} config The dialog configuration.
     * @return {?} A promise resolving to the MatDialogRef that should be returned to the user.
     */
    _attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config) {
        // Create a reference to the dialog we're creating in order to give the user a handle
        // to modify and close it.
        /** @type {?} */
        const dialogRef = new MatDialogRef(overlayRef, dialogContainer, config.id);
        // When the dialog backdrop is clicked, we want to close it.
        if (config.hasBackdrop) {
            overlayRef.backdropClick().subscribe((/**
             * @return {?}
             */
            () => {
                if (!dialogRef.disableClose) {
                    dialogRef.close();
                }
            }));
        }
        if (componentOrTemplateRef instanceof TemplateRef) {
            dialogContainer.attachTemplatePortal(new TemplatePortal(componentOrTemplateRef, (/** @type {?} */ (null)), (/** @type {?} */ ({ $implicit: config.data, dialogRef }))));
        }
        else {
            /** @type {?} */
            const injector = this._createInjector(config, dialogRef, dialogContainer);
            /** @type {?} */
            const contentRef = dialogContainer.attachComponentPortal(new ComponentPortal(componentOrTemplateRef, config.viewContainerRef, injector));
            dialogRef.componentInstance = contentRef.instance;
        }
        dialogRef
            .updateSize(config.width, config.height)
            .updatePosition(config.position);
        return dialogRef;
    }
    /**
     * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
     * of a dialog to close itself and, optionally, to return a value.
     * @private
     * @template T
     * @param {?} config Config object that is used to construct the dialog.
     * @param {?} dialogRef Reference to the dialog.
     * @param {?} dialogContainer
     * @return {?} The custom injector that can be used inside the dialog.
     */
    _createInjector(config, dialogRef, dialogContainer) {
        /** @type {?} */
        const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        // The MatDialogContainer is injected in the portal as the MatDialogContainer and the dialog's
        // content are created out of the same ViewContainerRef and as such, are siblings for injector
        // purposes. To allow the hierarchy that is expected, the MatDialogContainer is explicitly
        // added to the injection tokens.
        /** @type {?} */
        const injectionTokens = new WeakMap([
            [MatDialogContainer, dialogContainer],
            [MAT_DIALOG_DATA, config.data],
            [MatDialogRef, dialogRef]
        ]);
        if (config.direction &&
            (!userInjector || !userInjector.get(Directionality, null))) {
            injectionTokens.set(Directionality, {
                value: config.direction,
                change: observableOf()
            });
        }
        return new PortalInjector(userInjector || this._injector, injectionTokens);
    }
    /**
     * Removes a dialog from the array of open dialogs.
     * @private
     * @param {?} dialogRef Dialog to be removed.
     * @return {?}
     */
    _removeOpenDialog(dialogRef) {
        /** @type {?} */
        const index = this.openDialogs.indexOf(dialogRef);
        if (index > -1) {
            this.openDialogs.splice(index, 1);
            // If all the dialogs were closed, remove/restore the `aria-hidden`
            // to a the siblings and emit to the `afterAllClosed` stream.
            if (!this.openDialogs.length) {
                this._ariaHiddenElements.forEach((/**
                 * @param {?} previousValue
                 * @param {?} element
                 * @return {?}
                 */
                (previousValue, element) => {
                    if (previousValue) {
                        element.setAttribute('aria-hidden', previousValue);
                    }
                    else {
                        element.removeAttribute('aria-hidden');
                    }
                }));
                this._ariaHiddenElements.clear();
                this._afterAllClosed.next();
            }
        }
    }
    /**
     * Hides all of the content that isn't an overlay from assistive technology.
     * @private
     * @return {?}
     */
    _hideNonDialogContentFromAssistiveTechnology() {
        /** @type {?} */
        const overlayContainer = this._overlayContainer.getContainerElement();
        // Ensure that the overlay container is attached to the DOM.
        if (overlayContainer.parentElement) {
            /** @type {?} */
            const siblings = overlayContainer.parentElement.children;
            for (let i = siblings.length - 1; i > -1; i--) {
                /** @type {?} */
                let sibling = siblings[i];
                if (sibling !== overlayContainer &&
                    sibling.nodeName !== 'SCRIPT' &&
                    sibling.nodeName !== 'STYLE' &&
                    !sibling.hasAttribute('aria-live')) {
                    this._ariaHiddenElements.set(sibling, sibling.getAttribute('aria-hidden'));
                    sibling.setAttribute('aria-hidden', 'true');
                }
            }
        }
    }
    /**
     * Closes all of the dialogs in an array.
     * @private
     * @param {?} dialogs
     * @return {?}
     */
    _closeDialogs(dialogs) {
        /** @type {?} */
        let i = dialogs.length;
        while (i--) {
            // The `_openDialogs` property isn't updated after close until the rxjs subscription
            // runs on the next microtask, in addition to modifying the array as we're going
            // through it. We loop through all of them and call close without assuming that
            // they'll be removed from the list instantaneously.
            dialogs[i].close();
        }
    }
}
MatDialog.ɵfac = function MatDialog_Factory(t) { return new (t || MatDialog)(ɵngcc0.ɵɵinject(ɵngcc1.Overlay), ɵngcc0.ɵɵinject(ɵngcc0.Injector), ɵngcc0.ɵɵinject(ɵngcc2.Location, 8), ɵngcc0.ɵɵinject(MAT_DIALOG_DEFAULT_OPTIONS, 8), ɵngcc0.ɵɵinject(MAT_DIALOG_SCROLL_STRATEGY), ɵngcc0.ɵɵinject(MatDialog, 12), ɵngcc0.ɵɵinject(ɵngcc1.OverlayContainer)); };
MatDialog.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: MatDialog, factory: MatDialog.ɵfac });
/** @nocollapse */
MatDialog.ctorParameters = () => [
    { type: Overlay },
    { type: Injector },
    { type: Location, decorators: [{ type: Optional }] },
    { type: MatDialogConfig, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DIALOG_DEFAULT_OPTIONS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_SCROLL_STRATEGY,] }] },
    { type: MatDialog, decorators: [{ type: Optional }, { type: SkipSelf }] },
    { type: OverlayContainer }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatDialog, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc1.Overlay }, { type: ɵngcc0.Injector }, { type: ɵngcc2.Location, decorators: [{
                type: Optional
            }] }, { type: MatDialogConfig, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [MAT_DIALOG_DEFAULT_OPTIONS]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_SCROLL_STRATEGY]
            }] }, { type: MatDialog, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }, { type: ɵngcc1.OverlayContainer }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @private
     */
    MatDialog.prototype._openDialogsAtThisLevel;
    /**
     * @type {?}
     * @private
     */
    MatDialog.prototype._afterAllClosedAtThisLevel;
    /**
     * @type {?}
     * @private
     */
    MatDialog.prototype._afterOpenedAtThisLevel;
    /**
     * @type {?}
     * @private
     */
    MatDialog.prototype._ariaHiddenElements;
    /**
     * @type {?}
     * @private
     */
    MatDialog.prototype._scrollStrategy;
    /**
     * Stream that emits when all open dialog have finished closing.
     * Will emit on subscribe if there are no open dialogs to begin with.
     * @type {?}
     */
    MatDialog.prototype.afterAllClosed;
    /**
     * @type {?}
     * @private
     */
    MatDialog.prototype._overlay;
    /**
     * @type {?}
     * @private
     */
    MatDialog.prototype._injector;
    /**
     * @type {?}
     * @private
     */
    MatDialog.prototype._defaultOptions;
    /**
     * @type {?}
     * @private
     */
    MatDialog.prototype._parentDialog;
    /**
     * @type {?}
     * @private
     */
    MatDialog.prototype._overlayContainer;
}
/**
 * Applies default options to the dialog config.
 * @param {?=} config Config to be modified.
 * @param {?=} defaultOptions Default options provided.
 * @return {?} The new configuration object.
 */
function _applyConfigDefaults(config, defaultOptions) {
    return Object.assign(Object.assign({}, defaultOptions), config);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUNMLE9BQU8sRUFDUCxhQUFhLEVBQ2IsZ0JBQWdCLEdBR2pCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFDLGVBQWUsRUFBaUIsY0FBYyxFQUFFLGNBQWMsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ25HLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQ0wsTUFBTSxFQUNOLFVBQVUsRUFDVixjQUFjLEVBQ2QsUUFBUSxFQUVSLFFBQVEsRUFDUixRQUFRLEVBQ1IsV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxLQUFLLEVBQWMsRUFBRSxJQUFJLFlBQVksRUFBRSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDcEUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQzFDO0FBRUU7QUFBdUY7QUFDOUU7Ozs7QUFBWCxNQUFNLE9BQU8sZUFBZSxHQUFHLElBQUksY0FBYyxDQUFNLGVBQWUsQ0FBQztBQUN2RTtBQUNHO0FBQXVFO0FBQzlEO0FBQVosTUFBTSxPQUFPLDBCQUEwQixHQUNuQyxJQUFJLGNBQWMsQ0FBa0IsNEJBQTRCLENBQUM7QUFDckU7QUFDRztBQUFpRjtBQUN4RTtBQUFaLE1BQU0sT0FBTywwQkFBMEIsR0FDbkMsSUFBSSxj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Q0FBd0Q7QUFBQztBQUN4RDtBQUFpQjtBQUFnQjtBQUFRLElBQTFDLHNDQUEyQztBQUFDO0FBQUU7QUFDakQ7QUFHQztBQUN1QztBQUNGO0FBQ3JDO0FBeVFKLFNBQVMsb0JBQW9CLENBQ3pCLE1BQXdCLEVBQUUsY0FBZ0M7QUFBSSxJQUNoRSx1Q0FBVyxjQUFjLEdBQUssTUFBTSxFQUFFO0FBQ3hDLENBQUM7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0RpcmVjdGlvbmFsaXR5fSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge1xuICBPdmVybGF5LFxuICBPdmVybGF5Q29uZmlnLFxuICBPdmVybGF5Q29udGFpbmVyLFxuICBPdmVybGF5UmVmLFxuICBTY3JvbGxTdHJhdGVneSxcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHtDb21wb25lbnRQb3J0YWwsIENvbXBvbmVudFR5cGUsIFBvcnRhbEluamVjdG9yLCBUZW1wbGF0ZVBvcnRhbH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQge0xvY2F0aW9ufSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgSW5qZWN0LFxuICBJbmplY3RhYmxlLFxuICBJbmplY3Rpb25Ub2tlbixcbiAgSW5qZWN0b3IsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICBUZW1wbGF0ZVJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2RlZmVyLCBPYnNlcnZhYmxlLCBvZiBhcyBvYnNlcnZhYmxlT2YsIFN1YmplY3R9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtzdGFydFdpdGh9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7TWF0RGlhbG9nQ29uZmlnfSBmcm9tICcuL2RpYWxvZy1jb25maWcnO1xuaW1wb3J0IHtNYXREaWFsb2dDb250YWluZXJ9IGZyb20gJy4vZGlhbG9nLWNvbnRhaW5lcic7XG5pbXBvcnQge01hdERpYWxvZ1JlZn0gZnJvbSAnLi9kaWFsb2ctcmVmJztcblxuXG4vKiogSW5qZWN0aW9uIHRva2VuIHRoYXQgY2FuIGJlIHVzZWQgdG8gYWNjZXNzIHRoZSBkYXRhIHRoYXQgd2FzIHBhc3NlZCBpbiB0byBhIGRpYWxvZy4gKi9cbmV4cG9ydCBjb25zdCBNQVRfRElBTE9HX0RBVEEgPSBuZXcgSW5qZWN0aW9uVG9rZW48YW55PignTWF0RGlhbG9nRGF0YScpO1xuXG4vKiogSW5qZWN0aW9uIHRva2VuIHRoYXQgY2FuIGJlIHVzZWQgdG8gc3BlY2lmeSBkZWZhdWx0IGRpYWxvZyBvcHRpb25zLiAqL1xuZXhwb3J0IGNvbnN0IE1BVF9ESUFMT0dfREVGQVVMVF9PUFRJT05TID1cbiAgICBuZXcgSW5qZWN0aW9uVG9rZW48TWF0RGlhbG9nQ29uZmlnPignbWF0LWRpYWxvZy1kZWZhdWx0LW9wdGlvbnMnKTtcblxuLyoqIEluamVjdGlvbiB0b2tlbiB0aGF0IGRldGVybWluZXMgdGhlIHNjcm9sbCBoYW5kbGluZyB3aGlsZSB0aGUgZGlhbG9nIGlzIG9wZW4uICovXG5leHBvcnQgY29uc3QgTUFUX0RJQUxPR19TQ1JPTExfU1RSQVRFR1kgPVxuICAgIG5ldyBJbmplY3Rpb25Ub2tlbjwoKSA9PiBTY3JvbGxTdHJhdGVneT4oJ21hdC1kaWFsb2ctc2Nyb2xsLXN0cmF0ZWd5Jyk7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgZnVuY3Rpb24gTUFUX0RJQUxPR19TQ1JPTExfU1RSQVRFR1lfRkFDVE9SWShvdmVybGF5OiBPdmVybGF5KTogKCkgPT4gU2Nyb2xsU3RyYXRlZ3kge1xuICByZXR1cm4gKCkgPT4gb3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKCk7XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgZnVuY3Rpb24gTUFUX0RJQUxPR19TQ1JPTExfU1RSQVRFR1lfUFJPVklERVJfRkFDVE9SWShvdmVybGF5OiBPdmVybGF5KTpcbiAgKCkgPT4gU2Nyb2xsU3RyYXRlZ3kge1xuICByZXR1cm4gKCkgPT4gb3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKCk7XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTUFUX0RJQUxPR19TQ1JPTExfU1RSQVRFR1lfUFJPVklERVIgPSB7XG4gIHByb3ZpZGU6IE1BVF9ESUFMT0dfU0NST0xMX1NUUkFURUdZLFxuICBkZXBzOiBbT3ZlcmxheV0sXG4gIHVzZUZhY3Rvcnk6IE1BVF9ESUFMT0dfU0NST0xMX1NUUkFURUdZX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuXG5cbi8qKlxuICogU2VydmljZSB0byBvcGVuIE1hdGVyaWFsIERlc2lnbiBtb2RhbCBkaWFsb2dzLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWF0RGlhbG9nIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfb3BlbkRpYWxvZ3NBdFRoaXNMZXZlbDogTWF0RGlhbG9nUmVmPGFueT5bXSA9IFtdO1xuICBwcml2YXRlIHJlYWRvbmx5IF9hZnRlckFsbENsb3NlZEF0VGhpc0xldmVsID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfYWZ0ZXJPcGVuZWRBdFRoaXNMZXZlbCA9IG5ldyBTdWJqZWN0PE1hdERpYWxvZ1JlZjxhbnk+PigpO1xuICBwcml2YXRlIF9hcmlhSGlkZGVuRWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIHN0cmluZ3xudWxsPigpO1xuICBwcml2YXRlIF9zY3JvbGxTdHJhdGVneTogKCkgPT4gU2Nyb2xsU3RyYXRlZ3k7XG5cbiAgLyoqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50bHktb3BlbiBkaWFsb2dzLiAqL1xuICBnZXQgb3BlbkRpYWxvZ3MoKTogTWF0RGlhbG9nUmVmPGFueT5bXSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudERpYWxvZyA/IHRoaXMuX3BhcmVudERpYWxvZy5vcGVuRGlhbG9ncyA6IHRoaXMuX29wZW5EaWFsb2dzQXRUaGlzTGV2ZWw7XG4gIH1cblxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbiBhIGRpYWxvZyBoYXMgYmVlbiBvcGVuZWQuICovXG4gIGdldCBhZnRlck9wZW5lZCgpOiBTdWJqZWN0PE1hdERpYWxvZ1JlZjxhbnk+PiB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudERpYWxvZyA/IHRoaXMuX3BhcmVudERpYWxvZy5hZnRlck9wZW5lZCA6IHRoaXMuX2FmdGVyT3BlbmVkQXRUaGlzTGV2ZWw7XG4gIH1cblxuICBnZXQgX2FmdGVyQWxsQ2xvc2VkKCk6IFN1YmplY3Q8dm9pZD4ge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX3BhcmVudERpYWxvZztcbiAgICByZXR1cm4gcGFyZW50ID8gcGFyZW50Ll9hZnRlckFsbENsb3NlZCA6IHRoaXMuX2FmdGVyQWxsQ2xvc2VkQXRUaGlzTGV2ZWw7XG4gIH1cblxuICAvLyBUT0RPIChqZWxib3Vybik6IHRpZ2h0ZW4gdGhlIHR5cGluZyByaWdodC1oYW5kIHNpZGUgb2YgdGhpcyBleHByZXNzaW9uLlxuICAvKipcbiAgICogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbiBhbGwgb3BlbiBkaWFsb2cgaGF2ZSBmaW5pc2hlZCBjbG9zaW5nLlxuICAgKiBXaWxsIGVtaXQgb24gc3Vic2NyaWJlIGlmIHRoZXJlIGFyZSBubyBvcGVuIGRpYWxvZ3MgdG8gYmVnaW4gd2l0aC5cbiAgICovXG4gIHJlYWRvbmx5IGFmdGVyQWxsQ2xvc2VkOiBPYnNlcnZhYmxlPHZvaWQ+ID0gZGVmZXIoKCkgPT4gdGhpcy5vcGVuRGlhbG9ncy5sZW5ndGggP1xuICAgICAgdGhpcy5fYWZ0ZXJBbGxDbG9zZWQgOlxuICAgICAgdGhpcy5fYWZ0ZXJBbGxDbG9zZWQucGlwZShzdGFydFdpdGgodW5kZWZpbmVkKSkpIGFzIE9ic2VydmFibGU8YW55PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgX292ZXJsYXk6IE92ZXJsYXksXG4gICAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICAgICAvKipcbiAgICAgICAqIEBkZXByZWNhdGVkIGBfbG9jYXRpb25gIHBhcmFtZXRlciB0byBiZSByZW1vdmVkLlxuICAgICAgICogQGJyZWFraW5nLWNoYW5nZSAxMC4wLjBcbiAgICAgICAqL1xuICAgICAgQE9wdGlvbmFsKCkgX2xvY2F0aW9uOiBMb2NhdGlvbixcbiAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTUFUX0RJQUxPR19ERUZBVUxUX09QVElPTlMpIHByaXZhdGUgX2RlZmF1bHRPcHRpb25zOiBNYXREaWFsb2dDb25maWcsXG4gICAgICBASW5qZWN0KE1BVF9ESUFMT0dfU0NST0xMX1NUUkFURUdZKSBzY3JvbGxTdHJhdGVneTogYW55LFxuICAgICAgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHJpdmF0ZSBfcGFyZW50RGlhbG9nOiBNYXREaWFsb2csXG4gICAgICBwcml2YXRlIF9vdmVybGF5Q29udGFpbmVyOiBPdmVybGF5Q29udGFpbmVyKSB7XG4gICAgdGhpcy5fc2Nyb2xsU3RyYXRlZ3kgPSBzY3JvbGxTdHJhdGVneTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBhIG1vZGFsIGRpYWxvZyBjb250YWluaW5nIHRoZSBnaXZlbiBjb21wb25lbnQuXG4gICAqIEBwYXJhbSBjb21wb25lbnRPclRlbXBsYXRlUmVmIFR5cGUgb2YgdGhlIGNvbXBvbmVudCB0byBsb2FkIGludG8gdGhlIGRpYWxvZyxcbiAgICogICAgIG9yIGEgVGVtcGxhdGVSZWYgdG8gaW5zdGFudGlhdGUgYXMgdGhlIGRpYWxvZyBjb250ZW50LlxuICAgKiBAcGFyYW0gY29uZmlnIEV4dHJhIGNvbmZpZ3VyYXRpb24gb3B0aW9ucy5cbiAgICogQHJldHVybnMgUmVmZXJlbmNlIHRvIHRoZSBuZXdseS1vcGVuZWQgZGlhbG9nLlxuICAgKi9cbiAgb3BlbjxULCBEID0gYW55LCBSID0gYW55Pihjb21wb25lbnRPclRlbXBsYXRlUmVmOiBDb21wb25lbnRUeXBlPFQ+IHwgVGVtcGxhdGVSZWY8VD4sXG4gICAgICAgICAgY29uZmlnPzogTWF0RGlhbG9nQ29uZmlnPEQ+KTogTWF0RGlhbG9nUmVmPFQsIFI+IHtcblxuICAgIGNvbmZpZyA9IF9hcHBseUNvbmZpZ0RlZmF1bHRzKGNvbmZpZywgdGhpcy5fZGVmYXVsdE9wdGlvbnMgfHwgbmV3IE1hdERpYWxvZ0NvbmZpZygpKTtcblxuICAgIGlmIChjb25maWcuaWQgJiYgdGhpcy5nZXREaWFsb2dCeUlkKGNvbmZpZy5pZCkpIHtcbiAgICAgIHRocm93IEVycm9yKGBEaWFsb2cgd2l0aCBpZCBcIiR7Y29uZmlnLmlkfVwiIGV4aXN0cyBhbHJlYWR5LiBUaGUgZGlhbG9nIGlkIG11c3QgYmUgdW5pcXVlLmApO1xuICAgIH1cblxuICAgIGNvbnN0IG92ZXJsYXlSZWYgPSB0aGlzLl9jcmVhdGVPdmVybGF5KGNvbmZpZyk7XG4gICAgY29uc3QgZGlhbG9nQ29udGFpbmVyID0gdGhpcy5fYXR0YWNoRGlhbG9nQ29udGFpbmVyKG92ZXJsYXlSZWYsIGNvbmZpZyk7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5fYXR0YWNoRGlhbG9nQ29udGVudDxULCBSPihjb21wb25lbnRPclRlbXBsYXRlUmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheVJlZixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZyk7XG5cbiAgICAvLyBJZiB0aGlzIGlzIHRoZSBmaXJzdCBkaWFsb2cgdGhhdCB3ZSdyZSBvcGVuaW5nLCBoaWRlIGFsbCB0aGUgbm9uLW92ZXJsYXkgY29udGVudC5cbiAgICBpZiAoIXRoaXMub3BlbkRpYWxvZ3MubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9oaWRlTm9uRGlhbG9nQ29udGVudEZyb21Bc3Npc3RpdmVUZWNobm9sb2d5KCk7XG4gICAgfVxuXG4gICAgdGhpcy5vcGVuRGlhbG9ncy5wdXNoKGRpYWxvZ1JlZik7XG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKCgpID0+IHRoaXMuX3JlbW92ZU9wZW5EaWFsb2coZGlhbG9nUmVmKSk7XG4gICAgdGhpcy5hZnRlck9wZW5lZC5uZXh0KGRpYWxvZ1JlZik7XG5cbiAgICByZXR1cm4gZGlhbG9nUmVmO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyBhbGwgb2YgdGhlIGN1cnJlbnRseS1vcGVuIGRpYWxvZ3MuXG4gICAqL1xuICBjbG9zZUFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jbG9zZURpYWxvZ3ModGhpcy5vcGVuRGlhbG9ncyk7XG4gIH1cblxuICAvKipcbiAgICogRmluZHMgYW4gb3BlbiBkaWFsb2cgYnkgaXRzIGlkLlxuICAgKiBAcGFyYW0gaWQgSUQgdG8gdXNlIHdoZW4gbG9va2luZyB1cCB0aGUgZGlhbG9nLlxuICAgKi9cbiAgZ2V0RGlhbG9nQnlJZChpZDogc3RyaW5nKTogTWF0RGlhbG9nUmVmPGFueT4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLm9wZW5EaWFsb2dzLmZpbmQoZGlhbG9nID0+IGRpYWxvZy5pZCA9PT0gaWQpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gT25seSBjbG9zZSB0aGUgZGlhbG9ncyBhdCB0aGlzIGxldmVsIG9uIGRlc3Ryb3lcbiAgICAvLyBzaW5jZSB0aGUgcGFyZW50IHNlcnZpY2UgbWF5IHN0aWxsIGJlIGFjdGl2ZS5cbiAgICB0aGlzLl9jbG9zZURpYWxvZ3ModGhpcy5fb3BlbkRpYWxvZ3NBdFRoaXNMZXZlbCk7XG4gICAgdGhpcy5fYWZ0ZXJBbGxDbG9zZWRBdFRoaXNMZXZlbC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuX2FmdGVyT3BlbmVkQXRUaGlzTGV2ZWwuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBvdmVybGF5IGludG8gd2hpY2ggdGhlIGRpYWxvZyB3aWxsIGJlIGxvYWRlZC5cbiAgICogQHBhcmFtIGNvbmZpZyBUaGUgZGlhbG9nIGNvbmZpZ3VyYXRpb24uXG4gICAqIEByZXR1cm5zIEEgcHJvbWlzZSByZXNvbHZpbmcgdG8gdGhlIE92ZXJsYXlSZWYgZm9yIHRoZSBjcmVhdGVkIG92ZXJsYXkuXG4gICAqL1xuICBwcml2YXRlIF9jcmVhdGVPdmVybGF5KGNvbmZpZzogTWF0RGlhbG9nQ29uZmlnKTogT3ZlcmxheVJlZiB7XG4gICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IHRoaXMuX2dldE92ZXJsYXlDb25maWcoY29uZmlnKTtcbiAgICByZXR1cm4gdGhpcy5fb3ZlcmxheS5jcmVhdGUob3ZlcmxheUNvbmZpZyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvdmVybGF5IGNvbmZpZyBmcm9tIGEgZGlhbG9nIGNvbmZpZy5cbiAgICogQHBhcmFtIGRpYWxvZ0NvbmZpZyBUaGUgZGlhbG9nIGNvbmZpZ3VyYXRpb24uXG4gICAqIEByZXR1cm5zIFRoZSBvdmVybGF5IGNvbmZpZ3VyYXRpb24uXG4gICAqL1xuICBwcml2YXRlIF9nZXRPdmVybGF5Q29uZmlnKGRpYWxvZ0NvbmZpZzogTWF0RGlhbG9nQ29uZmlnKTogT3ZlcmxheUNvbmZpZyB7XG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgT3ZlcmxheUNvbmZpZyh7XG4gICAgICBwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLl9vdmVybGF5LnBvc2l0aW9uKCkuZ2xvYmFsKCksXG4gICAgICBzY3JvbGxTdHJhdGVneTogZGlhbG9nQ29uZmlnLnNjcm9sbFN0cmF0ZWd5IHx8IHRoaXMuX3Njcm9sbFN0cmF0ZWd5KCksXG4gICAgICBwYW5lbENsYXNzOiBkaWFsb2dDb25maWcucGFuZWxDbGFzcyxcbiAgICAgIGhhc0JhY2tkcm9wOiBkaWFsb2dDb25maWcuaGFzQmFja2Ryb3AsXG4gICAgICBkaXJlY3Rpb246IGRpYWxvZ0NvbmZpZy5kaXJlY3Rpb24sXG4gICAgICBtaW5XaWR0aDogZGlhbG9nQ29uZmlnLm1pbldpZHRoLFxuICAgICAgbWluSGVpZ2h0OiBkaWFsb2dDb25maWcubWluSGVpZ2h0LFxuICAgICAgbWF4V2lkdGg6IGRpYWxvZ0NvbmZpZy5tYXhXaWR0aCxcbiAgICAgIG1heEhlaWdodDogZGlhbG9nQ29uZmlnLm1heEhlaWdodCxcbiAgICAgIGRpc3Bvc2VPbk5hdmlnYXRpb246IGRpYWxvZ0NvbmZpZy5jbG9zZU9uTmF2aWdhdGlvblxuICAgIH0pO1xuXG4gICAgaWYgKGRpYWxvZ0NvbmZpZy5iYWNrZHJvcENsYXNzKSB7XG4gICAgICBzdGF0ZS5iYWNrZHJvcENsYXNzID0gZGlhbG9nQ29uZmlnLmJhY2tkcm9wQ2xhc3M7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGFjaGVzIGFuIE1hdERpYWxvZ0NvbnRhaW5lciB0byBhIGRpYWxvZydzIGFscmVhZHktY3JlYXRlZCBvdmVybGF5LlxuICAgKiBAcGFyYW0gb3ZlcmxheSBSZWZlcmVuY2UgdG8gdGhlIGRpYWxvZydzIHVuZGVybHlpbmcgb3ZlcmxheS5cbiAgICogQHBhcmFtIGNvbmZpZyBUaGUgZGlhbG9nIGNvbmZpZ3VyYXRpb24uXG4gICAqIEByZXR1cm5zIEEgcHJvbWlzZSByZXNvbHZpbmcgdG8gYSBDb21wb25lbnRSZWYgZm9yIHRoZSBhdHRhY2hlZCBjb250YWluZXIuXG4gICAqL1xuICBwcml2YXRlIF9hdHRhY2hEaWFsb2dDb250YWluZXIob3ZlcmxheTogT3ZlcmxheVJlZiwgY29uZmlnOiBNYXREaWFsb2dDb25maWcpOiBNYXREaWFsb2dDb250YWluZXIge1xuICAgIGNvbnN0IHVzZXJJbmplY3RvciA9IGNvbmZpZyAmJiBjb25maWcudmlld0NvbnRhaW5lclJlZiAmJiBjb25maWcudmlld0NvbnRhaW5lclJlZi5pbmplY3RvcjtcbiAgICBjb25zdCBpbmplY3RvciA9IG5ldyBQb3J0YWxJbmplY3Rvcih1c2VySW5qZWN0b3IgfHwgdGhpcy5faW5qZWN0b3IsIG5ldyBXZWFrTWFwKFtcbiAgICAgIFtNYXREaWFsb2dDb25maWcsIGNvbmZpZ11cbiAgICBdKSk7XG4gICAgY29uc3QgY29udGFpbmVyUG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChNYXREaWFsb2dDb250YWluZXIsXG4gICAgICAgIGNvbmZpZy52aWV3Q29udGFpbmVyUmVmLCBpbmplY3RvciwgY29uZmlnLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcik7XG4gICAgY29uc3QgY29udGFpbmVyUmVmID0gb3ZlcmxheS5hdHRhY2g8TWF0RGlhbG9nQ29udGFpbmVyPihjb250YWluZXJQb3J0YWwpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lclJlZi5pbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRhY2hlcyB0aGUgdXNlci1wcm92aWRlZCBjb21wb25lbnQgdG8gdGhlIGFscmVhZHktY3JlYXRlZCBNYXREaWFsb2dDb250YWluZXIuXG4gICAqIEBwYXJhbSBjb21wb25lbnRPclRlbXBsYXRlUmVmIFRoZSB0eXBlIG9mIGNvbXBvbmVudCBiZWluZyBsb2FkZWQgaW50byB0aGUgZGlhbG9nLFxuICAgKiAgICAgb3IgYSBUZW1wbGF0ZVJlZiB0byBpbnN0YW50aWF0ZSBhcyB0aGUgY29udGVudC5cbiAgICogQHBhcmFtIGRpYWxvZ0NvbnRhaW5lciBSZWZlcmVuY2UgdG8gdGhlIHdyYXBwaW5nIE1hdERpYWxvZ0NvbnRhaW5lci5cbiAgICogQHBhcmFtIG92ZXJsYXlSZWYgUmVmZXJlbmNlIHRvIHRoZSBvdmVybGF5IGluIHdoaWNoIHRoZSBkaWFsb2cgcmVzaWRlcy5cbiAgICogQHBhcmFtIGNvbmZpZyBUaGUgZGlhbG9nIGNvbmZpZ3VyYXRpb24uXG4gICAqIEByZXR1cm5zIEEgcHJvbWlzZSByZXNvbHZpbmcgdG8gdGhlIE1hdERpYWxvZ1JlZiB0aGF0IHNob3VsZCBiZSByZXR1cm5lZCB0byB0aGUgdXNlci5cbiAgICovXG4gIHByaXZhdGUgX2F0dGFjaERpYWxvZ0NvbnRlbnQ8VCwgUj4oXG4gICAgICBjb21wb25lbnRPclRlbXBsYXRlUmVmOiBDb21wb25lbnRUeXBlPFQ+IHwgVGVtcGxhdGVSZWY8VD4sXG4gICAgICBkaWFsb2dDb250YWluZXI6IE1hdERpYWxvZ0NvbnRhaW5lcixcbiAgICAgIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYsXG4gICAgICBjb25maWc6IE1hdERpYWxvZ0NvbmZpZyk6IE1hdERpYWxvZ1JlZjxULCBSPiB7XG5cbiAgICAvLyBDcmVhdGUgYSByZWZlcmVuY2UgdG8gdGhlIGRpYWxvZyB3ZSdyZSBjcmVhdGluZyBpbiBvcmRlciB0byBnaXZlIHRoZSB1c2VyIGEgaGFuZGxlXG4gICAgLy8gdG8gbW9kaWZ5IGFuZCBjbG9zZSBpdC5cbiAgICBjb25zdCBkaWFsb2dSZWYgPVxuICAgICAgICBuZXcgTWF0RGlhbG9nUmVmPFQsIFI+KG92ZXJsYXlSZWYsIGRpYWxvZ0NvbnRhaW5lciwgY29uZmlnLmlkKTtcblxuICAgIC8vIFdoZW4gdGhlIGRpYWxvZyBiYWNrZHJvcCBpcyBjbGlja2VkLCB3ZSB3YW50IHRvIGNsb3NlIGl0LlxuICAgIGlmIChjb25maWcuaGFzQmFja2Ryb3ApIHtcbiAgICAgIG92ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGlmICghZGlhbG9nUmVmLmRpc2FibGVDbG9zZSkge1xuICAgICAgICAgIGRpYWxvZ1JlZi5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY29tcG9uZW50T3JUZW1wbGF0ZVJlZiBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICBkaWFsb2dDb250YWluZXIuYXR0YWNoVGVtcGxhdGVQb3J0YWwoXG4gICAgICAgIG5ldyBUZW1wbGF0ZVBvcnRhbDxUPihjb21wb25lbnRPclRlbXBsYXRlUmVmLCBudWxsISxcbiAgICAgICAgICA8YW55PnskaW1wbGljaXQ6IGNvbmZpZy5kYXRhLCBkaWFsb2dSZWZ9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGluamVjdG9yID0gdGhpcy5fY3JlYXRlSW5qZWN0b3I8VD4oY29uZmlnLCBkaWFsb2dSZWYsIGRpYWxvZ0NvbnRhaW5lcik7XG4gICAgICBjb25zdCBjb250ZW50UmVmID0gZGlhbG9nQ29udGFpbmVyLmF0dGFjaENvbXBvbmVudFBvcnRhbDxUPihcbiAgICAgICAgICBuZXcgQ29tcG9uZW50UG9ydGFsKGNvbXBvbmVudE9yVGVtcGxhdGVSZWYsIGNvbmZpZy52aWV3Q29udGFpbmVyUmVmLCBpbmplY3RvcikpO1xuICAgICAgZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlID0gY29udGVudFJlZi5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBkaWFsb2dSZWZcbiAgICAgIC51cGRhdGVTaXplKGNvbmZpZy53aWR0aCwgY29uZmlnLmhlaWdodClcbiAgICAgIC51cGRhdGVQb3NpdGlvbihjb25maWcucG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIGRpYWxvZ1JlZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgY3VzdG9tIGluamVjdG9yIHRvIGJlIHVzZWQgaW5zaWRlIHRoZSBkaWFsb2cuIFRoaXMgYWxsb3dzIGEgY29tcG9uZW50IGxvYWRlZCBpbnNpZGVcbiAgICogb2YgYSBkaWFsb2cgdG8gY2xvc2UgaXRzZWxmIGFuZCwgb3B0aW9uYWxseSwgdG8gcmV0dXJuIGEgdmFsdWUuXG4gICAqIEBwYXJhbSBjb25maWcgQ29uZmlnIG9iamVjdCB0aGF0IGlzIHVzZWQgdG8gY29uc3RydWN0IHRoZSBkaWFsb2cuXG4gICAqIEBwYXJhbSBkaWFsb2dSZWYgUmVmZXJlbmNlIHRvIHRoZSBkaWFsb2cuXG4gICAqIEBwYXJhbSBjb250YWluZXIgRGlhbG9nIGNvbnRhaW5lciBlbGVtZW50IHRoYXQgd3JhcHMgYWxsIG9mIHRoZSBjb250ZW50cy5cbiAgICogQHJldHVybnMgVGhlIGN1c3RvbSBpbmplY3RvciB0aGF0IGNhbiBiZSB1c2VkIGluc2lkZSB0aGUgZGlhbG9nLlxuICAgKi9cbiAgcHJpdmF0ZSBfY3JlYXRlSW5qZWN0b3I8VD4oXG4gICAgICBjb25maWc6IE1hdERpYWxvZ0NvbmZpZyxcbiAgICAgIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFQ+LFxuICAgICAgZGlhbG9nQ29udGFpbmVyOiBNYXREaWFsb2dDb250YWluZXIpOiBQb3J0YWxJbmplY3RvciB7XG5cbiAgICBjb25zdCB1c2VySW5qZWN0b3IgPSBjb25maWcgJiYgY29uZmlnLnZpZXdDb250YWluZXJSZWYgJiYgY29uZmlnLnZpZXdDb250YWluZXJSZWYuaW5qZWN0b3I7XG5cbiAgICAvLyBUaGUgTWF0RGlhbG9nQ29udGFpbmVyIGlzIGluamVjdGVkIGluIHRoZSBwb3J0YWwgYXMgdGhlIE1hdERpYWxvZ0NvbnRhaW5lciBhbmQgdGhlIGRpYWxvZydzXG4gICAgLy8gY29udGVudCBhcmUgY3JlYXRlZCBvdXQgb2YgdGhlIHNhbWUgVmlld0NvbnRhaW5lclJlZiBhbmQgYXMgc3VjaCwgYXJlIHNpYmxpbmdzIGZvciBpbmplY3RvclxuICAgIC8vIHB1cnBvc2VzLiBUbyBhbGxvdyB0aGUgaGllcmFyY2h5IHRoYXQgaXMgZXhwZWN0ZWQsIHRoZSBNYXREaWFsb2dDb250YWluZXIgaXMgZXhwbGljaXRseVxuICAgIC8vIGFkZGVkIHRvIHRoZSBpbmplY3Rpb24gdG9rZW5zLlxuICAgIGNvbnN0IGluamVjdGlvblRva2VucyA9IG5ldyBXZWFrTWFwPGFueSwgYW55PihbXG4gICAgICBbTWF0RGlhbG9nQ29udGFpbmVyLCBkaWFsb2dDb250YWluZXJdLFxuICAgICAgW01BVF9ESUFMT0dfREFUQSwgY29uZmlnLmRhdGFdLFxuICAgICAgW01hdERpYWxvZ1JlZiwgZGlhbG9nUmVmXVxuICAgIF0pO1xuXG4gICAgaWYgKGNvbmZpZy5kaXJlY3Rpb24gJiZcbiAgICAgICAgKCF1c2VySW5qZWN0b3IgfHwgIXVzZXJJbmplY3Rvci5nZXQ8RGlyZWN0aW9uYWxpdHkgfCBudWxsPihEaXJlY3Rpb25hbGl0eSwgbnVsbCkpKSB7XG4gICAgICBpbmplY3Rpb25Ub2tlbnMuc2V0KERpcmVjdGlvbmFsaXR5LCB7XG4gICAgICAgIHZhbHVlOiBjb25maWcuZGlyZWN0aW9uLFxuICAgICAgICBjaGFuZ2U6IG9ic2VydmFibGVPZigpXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFBvcnRhbEluamVjdG9yKHVzZXJJbmplY3RvciB8fCB0aGlzLl9pbmplY3RvciwgaW5qZWN0aW9uVG9rZW5zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgZGlhbG9nIGZyb20gdGhlIGFycmF5IG9mIG9wZW4gZGlhbG9ncy5cbiAgICogQHBhcmFtIGRpYWxvZ1JlZiBEaWFsb2cgdG8gYmUgcmVtb3ZlZC5cbiAgICovXG4gIHByaXZhdGUgX3JlbW92ZU9wZW5EaWFsb2coZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8YW55Pikge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5vcGVuRGlhbG9ncy5pbmRleE9mKGRpYWxvZ1JlZik7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5vcGVuRGlhbG9ncy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAvLyBJZiBhbGwgdGhlIGRpYWxvZ3Mgd2VyZSBjbG9zZWQsIHJlbW92ZS9yZXN0b3JlIHRoZSBgYXJpYS1oaWRkZW5gXG4gICAgICAvLyB0byBhIHRoZSBzaWJsaW5ncyBhbmQgZW1pdCB0byB0aGUgYGFmdGVyQWxsQ2xvc2VkYCBzdHJlYW0uXG4gICAgICBpZiAoIXRoaXMub3BlbkRpYWxvZ3MubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX2FyaWFIaWRkZW5FbGVtZW50cy5mb3JFYWNoKChwcmV2aW91c1ZhbHVlLCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgaWYgKHByZXZpb3VzVmFsdWUpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHByZXZpb3VzVmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX2FyaWFIaWRkZW5FbGVtZW50cy5jbGVhcigpO1xuICAgICAgICB0aGlzLl9hZnRlckFsbENsb3NlZC5uZXh0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhpZGVzIGFsbCBvZiB0aGUgY29udGVudCB0aGF0IGlzbid0IGFuIG92ZXJsYXkgZnJvbSBhc3Npc3RpdmUgdGVjaG5vbG9neS5cbiAgICovXG4gIHByaXZhdGUgX2hpZGVOb25EaWFsb2dDb250ZW50RnJvbUFzc2lzdGl2ZVRlY2hub2xvZ3koKSB7XG4gICAgY29uc3Qgb3ZlcmxheUNvbnRhaW5lciA9IHRoaXMuX292ZXJsYXlDb250YWluZXIuZ2V0Q29udGFpbmVyRWxlbWVudCgpO1xuXG4gICAgLy8gRW5zdXJlIHRoYXQgdGhlIG92ZXJsYXkgY29udGFpbmVyIGlzIGF0dGFjaGVkIHRvIHRoZSBET00uXG4gICAgaWYgKG92ZXJsYXlDb250YWluZXIucGFyZW50RWxlbWVudCkge1xuICAgICAgY29uc3Qgc2libGluZ3MgPSBvdmVybGF5Q29udGFpbmVyLnBhcmVudEVsZW1lbnQuY2hpbGRyZW47XG5cbiAgICAgIGZvciAobGV0IGkgPSBzaWJsaW5ncy5sZW5ndGggLSAxOyBpID4gLTE7IGktLSkge1xuICAgICAgICBsZXQgc2libGluZyA9IHNpYmxpbmdzW2ldO1xuXG4gICAgICAgIGlmIChzaWJsaW5nICE9PSBvdmVybGF5Q29udGFpbmVyICYmXG4gICAgICAgICAgc2libGluZy5ub2RlTmFtZSAhPT0gJ1NDUklQVCcgJiZcbiAgICAgICAgICBzaWJsaW5nLm5vZGVOYW1lICE9PSAnU1RZTEUnICYmXG4gICAgICAgICAgIXNpYmxpbmcuaGFzQXR0cmlidXRlKCdhcmlhLWxpdmUnKSkge1xuXG4gICAgICAgICAgdGhpcy5fYXJpYUhpZGRlbkVsZW1lbnRzLnNldChzaWJsaW5nLCBzaWJsaW5nLmdldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSk7XG4gICAgICAgICAgc2libGluZy5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBDbG9zZXMgYWxsIG9mIHRoZSBkaWFsb2dzIGluIGFuIGFycmF5LiAqL1xuICBwcml2YXRlIF9jbG9zZURpYWxvZ3MoZGlhbG9nczogTWF0RGlhbG9nUmVmPGFueT5bXSkge1xuICAgIGxldCBpID0gZGlhbG9ncy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAvLyBUaGUgYF9vcGVuRGlhbG9nc2AgcHJvcGVydHkgaXNuJ3QgdXBkYXRlZCBhZnRlciBjbG9zZSB1bnRpbCB0aGUgcnhqcyBzdWJzY3JpcHRpb25cbiAgICAgIC8vIHJ1bnMgb24gdGhlIG5leHQgbWljcm90YXNrLCBpbiBhZGRpdGlvbiB0byBtb2RpZnlpbmcgdGhlIGFycmF5IGFzIHdlJ3JlIGdvaW5nXG4gICAgICAvLyB0aHJvdWdoIGl0LiBXZSBsb29wIHRocm91Z2ggYWxsIG9mIHRoZW0gYW5kIGNhbGwgY2xvc2Ugd2l0aG91dCBhc3N1bWluZyB0aGF0XG4gICAgICAvLyB0aGV5J2xsIGJlIHJlbW92ZWQgZnJvbSB0aGUgbGlzdCBpbnN0YW50YW5lb3VzbHkuXG4gICAgICBkaWFsb2dzW2ldLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbn1cblxuLyoqXG4gKiBBcHBsaWVzIGRlZmF1bHQgb3B0aW9ucyB0byB0aGUgZGlhbG9nIGNvbmZpZy5cbiAqIEBwYXJhbSBjb25maWcgQ29uZmlnIHRvIGJlIG1vZGlmaWVkLlxuICogQHBhcmFtIGRlZmF1bHRPcHRpb25zIERlZmF1bHQgb3B0aW9ucyBwcm92aWRlZC5cbiAqIEByZXR1cm5zIFRoZSBuZXcgY29uZmlndXJhdGlvbiBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIF9hcHBseUNvbmZpZ0RlZmF1bHRzKFxuICAgIGNvbmZpZz86IE1hdERpYWxvZ0NvbmZpZywgZGVmYXVsdE9wdGlvbnM/OiBNYXREaWFsb2dDb25maWcpOiBNYXREaWFsb2dDb25maWcge1xuICByZXR1cm4gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5jb25maWd9O1xufVxuIl19