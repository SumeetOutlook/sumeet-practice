/**
 * @fileoverview added by tsickle
 * Generated from: src/material/menu/menu-trigger.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { FocusMonitor, isFakeMousedownFromScreenReader } from '@angular/cdk/a11y';
import { Directionality } from '@angular/cdk/bidi';
import { LEFT_ARROW, RIGHT_ARROW } from '@angular/cdk/keycodes';
import { Overlay, OverlayConfig, } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Directive, ElementRef, EventEmitter, Inject, InjectionToken, Input, Optional, Output, Self, ViewContainerRef, } from '@angular/core';
import { normalizePassiveListenerOptions } from '@angular/cdk/platform';
import { asapScheduler, merge, of as observableOf, Subscription } from 'rxjs';
import { delay, filter, take, takeUntil } from 'rxjs/operators';
import { MatMenu } from './menu';
import { throwMatMenuMissingError } from './menu-errors';
import { MatMenuItem } from './menu-item';
/**
 * Injection token that determines the scroll handling while the menu is open.
 * @type {?}
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/overlay';
import * as ɵngcc2 from '@angular/cdk/bidi';
import * as ɵngcc3 from '@angular/cdk/a11y';
export const MAT_MENU_SCROLL_STRATEGY = new InjectionToken('mat-menu-scroll-strategy');
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
export function MAT_MENU_SCROLL_STRATEGY_FACTORY(overlay) {
    return (/**
     * @return {?}
     */
    () => overlay.scrollStrategies.reposition());
}
/**
 * \@docs-private
 * @type {?}
 */
export const MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER = {
    provide: MAT_MENU_SCROLL_STRATEGY,
    deps: [Overlay],
    useFactory: MAT_MENU_SCROLL_STRATEGY_FACTORY,
};
/**
 * Default top padding of the menu panel.
 * @type {?}
 */
export const MENU_PANEL_TOP_PADDING = 8;
/**
 * Options for binding a passive event listener.
 * @type {?}
 */
const passiveEventListenerOptions = normalizePassiveListenerOptions({ passive: true });
// TODO(andrewseguin): Remove the kebab versions in favor of camelCased attribute selectors
/**
 * This directive is intended to be used in conjunction with an mat-menu tag.  It is
 * responsible for toggling the display of the provided menu instance.
 */
export class MatMenuTrigger {
    /**
     * @param {?} _overlay
     * @param {?} _element
     * @param {?} _viewContainerRef
     * @param {?} scrollStrategy
     * @param {?} _parentMenu
     * @param {?} _menuItemInstance
     * @param {?} _dir
     * @param {?=} _focusMonitor
     */
    constructor(_overlay, _element, _viewContainerRef, scrollStrategy, _parentMenu, _menuItemInstance, _dir, _focusMonitor) {
        this._overlay = _overlay;
        this._element = _element;
        this._viewContainerRef = _viewContainerRef;
        this._parentMenu = _parentMenu;
        this._menuItemInstance = _menuItemInstance;
        this._dir = _dir;
        this._focusMonitor = _focusMonitor;
        this._overlayRef = null;
        this._menuOpen = false;
        this._closingActionsSubscription = Subscription.EMPTY;
        this._hoverSubscription = Subscription.EMPTY;
        this._menuCloseSubscription = Subscription.EMPTY;
        /**
         * Handles touch start events on the trigger.
         * Needs to be an arrow function so we can easily use addEventListener and removeEventListener.
         */
        this._handleTouchStart = (/**
         * @return {?}
         */
        () => this._openedBy = 'touch');
        // Tracking input type is necessary so it's possible to only auto-focus
        // the first item of the list when the menu is opened via the keyboard
        this._openedBy = null;
        /**
         * Whether focus should be restored when the menu is closed.
         * Note that disabling this option can have accessibility implications
         * and it's up to you to manage focus, if you decide to turn it off.
         */
        this.restoreFocus = true;
        /**
         * Event emitted when the associated menu is opened.
         */
        this.menuOpened = new EventEmitter();
        /**
         * Event emitted when the associated menu is opened.
         * @deprecated Switch to `menuOpened` instead
         * \@breaking-change 8.0.0
         */
        // tslint:disable-next-line:no-output-on-prefix
        this.onMenuOpen = this.menuOpened;
        /**
         * Event emitted when the associated menu is closed.
         */
        this.menuClosed = new EventEmitter();
        /**
         * Event emitted when the associated menu is closed.
         * @deprecated Switch to `menuClosed` instead
         * \@breaking-change 8.0.0
         */
        // tslint:disable-next-line:no-output-on-prefix
        this.onMenuClose = this.menuClosed;
        _element.nativeElement.addEventListener('touchstart', this._handleTouchStart, passiveEventListenerOptions);
        if (_menuItemInstance) {
            _menuItemInstance._triggersSubmenu = this.triggersSubmenu();
        }
        this._scrollStrategy = scrollStrategy;
    }
    /**
     * @deprecated
     * \@breaking-change 8.0.0
     * @return {?}
     */
    get _deprecatedMatMenuTriggerFor() { return this.menu; }
    /**
     * @param {?} v
     * @return {?}
     */
    set _deprecatedMatMenuTriggerFor(v) {
        this.menu = v;
    }
    /**
     * References the menu instance that the trigger is associated with.
     * @return {?}
     */
    get menu() { return this._menu; }
    /**
     * @param {?} menu
     * @return {?}
     */
    set menu(menu) {
        if (menu === this._menu) {
            return;
        }
        this._menu = menu;
        this._menuCloseSubscription.unsubscribe();
        if (menu) {
            this._menuCloseSubscription = menu.close.asObservable().subscribe((/**
             * @param {?} reason
             * @return {?}
             */
            reason => {
                this._destroyMenu();
                // If a click closed the menu, we should close the entire chain of nested menus.
                if ((reason === 'click' || reason === 'tab') && this._parentMenu) {
                    this._parentMenu.closed.emit(reason);
                }
            }));
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._checkMenu();
        this._handleHover();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._overlayRef) {
            this._overlayRef.dispose();
            this._overlayRef = null;
        }
        this._element.nativeElement.removeEventListener('touchstart', this._handleTouchStart, passiveEventListenerOptions);
        this._menuCloseSubscription.unsubscribe();
        this._closingActionsSubscription.unsubscribe();
        this._hoverSubscription.unsubscribe();
    }
    /**
     * Whether the menu is open.
     * @return {?}
     */
    get menuOpen() {
        return this._menuOpen;
    }
    /**
     * The text direction of the containing app.
     * @return {?}
     */
    get dir() {
        return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    /**
     * Whether the menu triggers a sub-menu or a top-level one.
     * @return {?}
     */
    triggersSubmenu() {
        return !!(this._menuItemInstance && this._parentMenu);
    }
    /**
     * Toggles the menu between the open and closed states.
     * @return {?}
     */
    toggleMenu() {
        return this._menuOpen ? this.closeMenu() : this.openMenu();
    }
    /**
     * Opens the menu.
     * @return {?}
     */
    openMenu() {
        if (this._menuOpen) {
            return;
        }
        this._checkMenu();
        /** @type {?} */
        const overlayRef = this._createOverlay();
        /** @type {?} */
        const overlayConfig = overlayRef.getConfig();
        this._setPosition((/** @type {?} */ (overlayConfig.positionStrategy)));
        overlayConfig.hasBackdrop = this.menu.hasBackdrop == null ? !this.triggersSubmenu() :
            this.menu.hasBackdrop;
        overlayRef.attach(this._getPortal());
        if (this.menu.lazyContent) {
            this.menu.lazyContent.attach(this.menuData);
        }
        this._closingActionsSubscription = this._menuClosingActions().subscribe((/**
         * @return {?}
         */
        () => this.closeMenu()));
        this._initMenu();
        if (this.menu instanceof MatMenu) {
            this.menu._startAnimation();
        }
    }
    /**
     * Closes the menu.
     * @return {?}
     */
    closeMenu() {
        this.menu.close.emit();
    }
    /**
     * Focuses the menu trigger.
     * @param {?=} origin Source of the menu trigger's focus.
     * @param {?=} options
     * @return {?}
     */
    focus(origin = 'program', options) {
        if (this._focusMonitor) {
            this._focusMonitor.focusVia(this._element, origin, options);
        }
        else {
            this._element.nativeElement.focus(options);
        }
    }
    /**
     * Closes the menu and does the necessary cleanup.
     * @private
     * @return {?}
     */
    _destroyMenu() {
        if (!this._overlayRef || !this.menuOpen) {
            return;
        }
        /** @type {?} */
        const menu = this.menu;
        this._closingActionsSubscription.unsubscribe();
        this._overlayRef.detach();
        if (menu instanceof MatMenu) {
            menu._resetAnimation();
            if (menu.lazyContent) {
                // Wait for the exit animation to finish before detaching the content.
                menu._animationDone
                    .pipe(filter((/**
                 * @param {?} event
                 * @return {?}
                 */
                event => event.toState === 'void')), take(1), 
                // Interrupt if the content got re-attached.
                takeUntil(menu.lazyContent._attached))
                    .subscribe({
                    next: (/**
                     * @return {?}
                     */
                    () => (/** @type {?} */ (menu.lazyContent)).detach()),
                    // No matter whether the content got re-attached, reset the menu.
                    complete: (/**
                     * @return {?}
                     */
                    () => this._setIsMenuOpen(false))
                });
            }
            else {
                this._setIsMenuOpen(false);
            }
        }
        else {
            this._setIsMenuOpen(false);
            if (menu.lazyContent) {
                menu.lazyContent.detach();
            }
        }
        this._restoreFocus();
    }
    /**
     * This method sets the menu state to open and focuses the first item if
     * the menu was opened via the keyboard.
     * @private
     * @return {?}
     */
    _initMenu() {
        this.menu.parentMenu = this.triggersSubmenu() ? this._parentMenu : undefined;
        this.menu.direction = this.dir;
        this._setMenuElevation();
        this._setIsMenuOpen(true);
        this.menu.focusFirstItem(this._openedBy || 'program');
    }
    /**
     * Updates the menu elevation based on the amount of parent menus that it has.
     * @private
     * @return {?}
     */
    _setMenuElevation() {
        if (this.menu.setElevation) {
            /** @type {?} */
            let depth = 0;
            /** @type {?} */
            let parentMenu = this.menu.parentMenu;
            while (parentMenu) {
                depth++;
                parentMenu = parentMenu.parentMenu;
            }
            this.menu.setElevation(depth);
        }
    }
    /**
     * Restores focus to the element that was focused before the menu was open.
     * @private
     * @return {?}
     */
    _restoreFocus() {
        // We should reset focus if the user is navigating using a keyboard or
        // if we have a top-level trigger which might cause focus to be lost
        // when clicking on the backdrop.
        if (this.restoreFocus) {
            if (!this._openedBy) {
                // Note that the focus style will show up both for `program` and
                // `keyboard` so we don't have to specify which one it is.
                this.focus();
            }
            else if (!this.triggersSubmenu()) {
                this.focus(this._openedBy);
            }
        }
        this._openedBy = null;
    }
    // set state rather than toggle to support triggers sharing a menu
    /**
     * @private
     * @param {?} isOpen
     * @return {?}
     */
    _setIsMenuOpen(isOpen) {
        this._menuOpen = isOpen;
        this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit();
        if (this.triggersSubmenu()) {
            this._menuItemInstance._highlighted = isOpen;
        }
    }
    /**
     * This method checks that a valid instance of MatMenu has been passed into
     * matMenuTriggerFor. If not, an exception is thrown.
     * @private
     * @return {?}
     */
    _checkMenu() {
        if (!this.menu) {
            throwMatMenuMissingError();
        }
    }
    /**
     * This method creates the overlay from the provided menu's template and saves its
     * OverlayRef so that it can be attached to the DOM when openMenu is called.
     * @private
     * @return {?}
     */
    _createOverlay() {
        if (!this._overlayRef) {
            /** @type {?} */
            const config = this._getOverlayConfig();
            this._subscribeToPositions((/** @type {?} */ (config.positionStrategy)));
            this._overlayRef = this._overlay.create(config);
            // Consume the `keydownEvents` in order to prevent them from going to another overlay.
            // Ideally we'd also have our keyboard event logic in here, however doing so will
            // break anybody that may have implemented the `MatMenuPanel` themselves.
            this._overlayRef.keydownEvents().subscribe();
        }
        return this._overlayRef;
    }
    /**
     * This method builds the configuration object needed to create the overlay, the OverlayState.
     * @private
     * @return {?} OverlayConfig
     */
    _getOverlayConfig() {
        return new OverlayConfig({
            positionStrategy: this._overlay.position()
                .flexibleConnectedTo(this._element)
                .withLockedPosition()
                .withTransformOriginOn('.mat-menu-panel, .mat-mdc-menu-panel'),
            backdropClass: this.menu.backdropClass || 'cdk-overlay-transparent-backdrop',
            scrollStrategy: this._scrollStrategy(),
            direction: this._dir
        });
    }
    /**
     * Listens to changes in the position of the overlay and sets the correct classes
     * on the menu based on the new position. This ensures the animation origin is always
     * correct, even if a fallback position is used for the overlay.
     * @private
     * @param {?} position
     * @return {?}
     */
    _subscribeToPositions(position) {
        if (this.menu.setPositionClasses) {
            position.positionChanges.subscribe((/**
             * @param {?} change
             * @return {?}
             */
            change => {
                /** @type {?} */
                const posX = change.connectionPair.overlayX === 'start' ? 'after' : 'before';
                /** @type {?} */
                const posY = change.connectionPair.overlayY === 'top' ? 'below' : 'above';
                (/** @type {?} */ (this.menu.setPositionClasses))(posX, posY);
            }));
        }
    }
    /**
     * Sets the appropriate positions on a position strategy
     * so the overlay connects with the trigger correctly.
     * @private
     * @param {?} positionStrategy Strategy whose position to update.
     * @return {?}
     */
    _setPosition(positionStrategy) {
        let [originX, originFallbackX] = this.menu.xPosition === 'before' ? ['end', 'start'] : ['start', 'end'];
        let [overlayY, overlayFallbackY] = this.menu.yPosition === 'above' ? ['bottom', 'top'] : ['top', 'bottom'];
        let [originY, originFallbackY] = [overlayY, overlayFallbackY];
        let [overlayX, overlayFallbackX] = [originX, originFallbackX];
        /** @type {?} */
        let offsetY = 0;
        if (this.triggersSubmenu()) {
            // When the menu is a sub-menu, it should always align itself
            // to the edges of the trigger, instead of overlapping it.
            overlayFallbackX = originX = this.menu.xPosition === 'before' ? 'start' : 'end';
            originFallbackX = overlayX = originX === 'end' ? 'start' : 'end';
            offsetY = overlayY === 'bottom' ? MENU_PANEL_TOP_PADDING : -MENU_PANEL_TOP_PADDING;
        }
        else if (!this.menu.overlapTrigger) {
            originY = overlayY === 'top' ? 'bottom' : 'top';
            originFallbackY = overlayFallbackY === 'top' ? 'bottom' : 'top';
        }
        positionStrategy.withPositions([
            { originX, originY, overlayX, overlayY, offsetY },
            { originX: originFallbackX, originY, overlayX: overlayFallbackX, overlayY, offsetY },
            {
                originX,
                originY: originFallbackY,
                overlayX,
                overlayY: overlayFallbackY,
                offsetY: -offsetY
            },
            {
                originX: originFallbackX,
                originY: originFallbackY,
                overlayX: overlayFallbackX,
                overlayY: overlayFallbackY,
                offsetY: -offsetY
            }
        ]);
    }
    /**
     * Returns a stream that emits whenever an action that should close the menu occurs.
     * @private
     * @return {?}
     */
    _menuClosingActions() {
        /** @type {?} */
        const backdrop = (/** @type {?} */ (this._overlayRef)).backdropClick();
        /** @type {?} */
        const detachments = (/** @type {?} */ (this._overlayRef)).detachments();
        /** @type {?} */
        const parentClose = this._parentMenu ? this._parentMenu.closed : observableOf();
        /** @type {?} */
        const hover = this._parentMenu ? this._parentMenu._hovered().pipe(filter((/**
         * @param {?} active
         * @return {?}
         */
        active => active !== this._menuItemInstance)), filter((/**
         * @return {?}
         */
        () => this._menuOpen))) : observableOf();
        return merge(backdrop, parentClose, hover, detachments);
    }
    /**
     * Handles mouse presses on the trigger.
     * @param {?} event
     * @return {?}
     */
    _handleMousedown(event) {
        if (!isFakeMousedownFromScreenReader(event)) {
            // Since right or middle button clicks won't trigger the `click` event,
            // we shouldn't consider the menu as opened by mouse in those cases.
            this._openedBy = event.button === 0 ? 'mouse' : null;
            // Since clicking on the trigger won't close the menu if it opens a sub-menu,
            // we should prevent focus from moving onto it via click to avoid the
            // highlight from lingering on the menu item.
            if (this.triggersSubmenu()) {
                event.preventDefault();
            }
        }
    }
    /**
     * Handles key presses on the trigger.
     * @param {?} event
     * @return {?}
     */
    _handleKeydown(event) {
        /** @type {?} */
        const keyCode = event.keyCode;
        if (this.triggersSubmenu() && ((keyCode === RIGHT_ARROW && this.dir === 'ltr') ||
            (keyCode === LEFT_ARROW && this.dir === 'rtl'))) {
            this.openMenu();
        }
    }
    /**
     * Handles click events on the trigger.
     * @param {?} event
     * @return {?}
     */
    _handleClick(event) {
        if (this.triggersSubmenu()) {
            // Stop event propagation to avoid closing the parent menu.
            event.stopPropagation();
            this.openMenu();
        }
        else {
            this.toggleMenu();
        }
    }
    /**
     * Handles the cases where the user hovers over the trigger.
     * @private
     * @return {?}
     */
    _handleHover() {
        // Subscribe to changes in the hovered item in order to toggle the panel.
        if (!this.triggersSubmenu()) {
            return;
        }
        this._hoverSubscription = this._parentMenu._hovered()
            // Since we might have multiple competing triggers for the same menu (e.g. a sub-menu
            // with different data and triggers), we have to delay it by a tick to ensure that
            // it won't be closed immediately after it is opened.
            .pipe(filter((/**
         * @param {?} active
         * @return {?}
         */
        active => active === this._menuItemInstance && !active.disabled)), delay(0, asapScheduler))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this._openedBy = 'mouse';
            // If the same menu is used between multiple triggers, it might still be animating
            // while the new trigger tries to re-open it. Wait for the animation to finish
            // before doing so. Also interrupt if the user moves to another item.
            if (this.menu instanceof MatMenu && this.menu._isAnimating) {
                // We need the `delay(0)` here in order to avoid
                // 'changed after checked' errors in some cases. See #12194.
                this.menu._animationDone
                    .pipe(take(1), delay(0, asapScheduler), takeUntil(this._parentMenu._hovered()))
                    .subscribe((/**
                 * @return {?}
                 */
                () => this.openMenu()));
            }
            else {
                this.openMenu();
            }
        }));
    }
    /**
     * Gets the portal that should be attached to the overlay.
     * @private
     * @return {?}
     */
    _getPortal() {
        // Note that we can avoid this check by keeping the portal on the menu panel.
        // While it would be cleaner, we'd have to introduce another required method on
        // `MatMenuPanel`, making it harder to consume.
        if (!this._portal || this._portal.templateRef !== this.menu.templateRef) {
            this._portal = new TemplatePortal(this.menu.templateRef, this._viewContainerRef);
        }
        return this._portal;
    }
}
MatMenuTrigger.ɵfac = function MatMenuTrigger_Factory(t) { return new (t || MatMenuTrigger)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Overlay), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(MAT_MENU_SCROLL_STRATEGY), ɵngcc0.ɵɵdirectiveInject(MatMenu, 8), ɵngcc0.ɵɵdirectiveInject(MatMenuItem, 10), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Directionality, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.FocusMonitor)); };
MatMenuTrigger.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatMenuTrigger, selectors: [["", "mat-menu-trigger-for", ""], ["", "matMenuTriggerFor", ""]], hostAttrs: ["aria-haspopup", "true", 1, "mat-menu-trigger"], hostVars: 2, hostBindings: function MatMenuTrigger_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mousedown", function MatMenuTrigger_mousedown_HostBindingHandler($event) { return ctx._handleMousedown($event); })("keydown", function MatMenuTrigger_keydown_HostBindingHandler($event) { return ctx._handleKeydown($event); })("click", function MatMenuTrigger_click_HostBindingHandler($event) { return ctx._handleClick($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("aria-expanded", ctx.menuOpen || null)("aria-controls", ctx.menuOpen ? ctx.menu.panelId : null);
    } }, inputs: { restoreFocus: ["matMenuTriggerRestoreFocus", "restoreFocus"], _deprecatedMatMenuTriggerFor: ["mat-menu-trigger-for", "_deprecatedMatMenuTriggerFor"], menu: ["matMenuTriggerFor", "menu"], menuData: ["matMenuTriggerData", "menuData"] }, outputs: { menuOpened: "menuOpened", onMenuOpen: "onMenuOpen", menuClosed: "menuClosed", onMenuClose: "onMenuClose" }, exportAs: ["matMenuTrigger"] });
/** @nocollapse */
MatMenuTrigger.ctorParameters = () => [
    { type: Overlay },
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_MENU_SCROLL_STRATEGY,] }] },
    { type: MatMenu, decorators: [{ type: Optional }] },
    { type: MatMenuItem, decorators: [{ type: Optional }, { type: Self }] },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: FocusMonitor }
];
MatMenuTrigger.propDecorators = {
    _deprecatedMatMenuTriggerFor: [{ type: Input, args: ['mat-menu-trigger-for',] }],
    menu: [{ type: Input, args: ['matMenuTriggerFor',] }],
    menuData: [{ type: Input, args: ['matMenuTriggerData',] }],
    restoreFocus: [{ type: Input, args: ['matMenuTriggerRestoreFocus',] }],
    menuOpened: [{ type: Output }],
    onMenuOpen: [{ type: Output }],
    menuClosed: [{ type: Output }],
    onMenuClose: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatMenuTrigger, [{
        type: Directive,
        args: [{
                selector: `[mat-menu-trigger-for], [matMenuTriggerFor]`,
                host: {
                    'class': 'mat-menu-trigger',
                    'aria-haspopup': 'true',
                    '[attr.aria-expanded]': 'menuOpen || null',
                    '[attr.aria-controls]': 'menuOpen ? menu.panelId : null',
                    '(mousedown)': '_handleMousedown($event)',
                    '(keydown)': '_handleKeydown($event)',
                    '(click)': '_handleClick($event)'
                },
                exportAs: 'matMenuTrigger'
            }]
    }], function () { return [{ type: ɵngcc1.Overlay }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.ViewContainerRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_MENU_SCROLL_STRATEGY]
            }] }, { type: MatMenu, decorators: [{
                type: Optional
            }] }, { type: MatMenuItem, decorators: [{
                type: Optional
            }, {
                type: Self
            }] }, { type: ɵngcc2.Directionality, decorators: [{
                type: Optional
            }] }, { type: ɵngcc3.FocusMonitor }]; }, { restoreFocus: [{
            type: Input,
            args: ['matMenuTriggerRestoreFocus']
        }], menuOpened: [{
            type: Output
        }], onMenuOpen: [{
            type: Output
        }], menuClosed: [{
            type: Output
        }], onMenuClose: [{
            type: Output
        }], _deprecatedMatMenuTriggerFor: [{
            type: Input,
            args: ['mat-menu-trigger-for']
        }], menu: [{
            type: Input,
            args: ['matMenuTriggerFor']
        }], menuData: [{
            type: Input,
            args: ['matMenuTriggerData']
        }] }); })();
if (false) {
    /**
     * @type {?}
     * @private
     */
    MatMenuTrigger.prototype._portal;
    /**
     * @type {?}
     * @private
     */
    MatMenuTrigger.prototype._overlayRef;
    /**
     * @type {?}
     * @private
     */
    MatMenuTrigger.prototype._menuOpen;
    /**
     * @type {?}
     * @private
     */
    MatMenuTrigger.prototype._closingActionsSubscription;
    /**
     * @type {?}
     * @private
     */
    MatMenuTrigger.prototype._hoverSubscription;
    /**
     * @type {?}
     * @private
     */
    MatMenuTrigger.prototype._menuCloseSubscription;
    /**
     * @type {?}
     * @private
     */
    MatMenuTrigger.prototype._scrollStrategy;
    /**
     * Handles touch start events on the trigger.
     * Needs to be an arrow function so we can easily use addEventListener and removeEventListener.
     * @type {?}
     * @private
     */
    MatMenuTrigger.prototype._handleTouchStart;
    /** @type {?} */
    MatMenuTrigger.prototype._openedBy;
    /**
     * @type {?}
     * @private
     */
    MatMenuTrigger.prototype._menu;
    /**
     * Data to be passed along to any lazily-rendered content.
     * @type {?}
     */
    MatMenuTrigger.prototype.menuData;
    /**
     * Whether focus should be restored when the menu is closed.
     * Note that disabling this option can have accessibility implications
     * and it's up to you to manage focus, if you decide to turn it off.
     * @type {?}
     */
    MatMenuTrigger.prototype.restoreFocus;
    /**
     * Event emitted when the associated menu is opened.
     * @type {?}
     */
    MatMenuTrigger.prototype.menuOpened;
    /**
     * Event emitted when the associated menu is opened.
     * @deprecated Switch to `menuOpened` instead
     * \@breaking-change 8.0.0
     * @type {?}
     */
    MatMenuTrigger.prototype.onMenuOpen;
    /**
     * Event emitted when the associated menu is closed.
     * @type {?}
     */
    MatMenuTrigger.prototype.menuClosed;
    /**
     * Event emitted when the associated menu is closed.
     * @deprecated Switch to `menuClosed` instead
     * \@breaking-change 8.0.0
     * @type {?}
     */
    MatMenuTrigger.prototype.onMenuClose;
    /**
     * @type {?}
     * @private
     */
    MatMenuTrigger.prototype._overlay;
    /**
     * @type {?}
     * @private
     */
    MatMenuTrigger.prototype._element;
    /**
     * @type {?}
     * @private
     */
    MatMenuTrigger.prototype._viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    MatMenuTrigger.prototype._parentMenu;
    /**
     * @type {?}
     * @private
     */
    MatMenuTrigger.prototype._menuItemInstance;
    /**
     * @type {?}
     * @private
     */
    MatMenuTrigger.prototype._dir;
    /**
     * @type {?}
     * @private
     */
    MatMenuTrigger.prototype._focusMonitor;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS10cmlnZ2VyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvbWVudS9tZW51LXRyaWdnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLFlBQVksRUFBZSwrQkFBK0IsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzdGLE9BQU8sRUFBWSxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsVUFBVSxFQUFFLFdBQVcsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFHTCxPQUFPLEVBQ1AsYUFBYSxHQUlkLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sY0FBYyxFQUNkLEtBQUssRUFFTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLElBQUksRUFDSixnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLCtCQUErQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDdEUsT0FBTyxFQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsRUFBRSxJQUFJLFlBQVksRUFBRSxZQUFZLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDNUUsT0FBTyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzlELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFDL0IsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDeEM7QUFBSTtBQUNvQztBQUFhOzs7OztBQUdyRCxNQUFNLE9BQU8sd0JBQXdCLEdBQ2pDLElBQUksY0FBYyxDQUF1QiwwQkFBMEIsQ0FBQztBQUN4RTtBQUNHO0FBQ0g7QUFBc0I7QUFBZTtBQUFyQyxNQUFNLFVBQVUsZ0NBQWdDLENBQUMsT0FBZ0I7QUFBSSxJQUNuRTtBQUFZO0FBQW1CO0FBQVEsSUFBaEMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxFQUFDO0FBQ3JELENBQUM7QUFDRDtBQUNHO0FBQ0g7QUFBYTtBQUFiLE1BQU0sT0FBTyx5Q0FBeUMsR0FBRztBQUN6RCxJQUFFLE9BQU8sRUFBRSx3QkFBd0I7QUFDbkMsSUFBRSxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUM7QUFDakIsSUFBRSxVQUFVLEVBQUUsZ0NBQWdDO0FBQzlDLENBQUM7QUFDRDtBQUNHO0FBQTBDO0FBQ2pDO0FBQVosTUFBTSxPQUFPLHNCQUFzQixHQUFHLENBQUM7QUFDdkM7QUFDRztBQUFpRDtBQUN4QztBQUFJLE1BQVYsMkJBQTJCLEdBQUcsK0JBQStCLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFDLENBQUM7QUFDcEY7QUFDMkY7QUFFekY7QUFDaUY7QUFDZDtBQWVyRSxNQUFNLE9BQU8sY0FBYztBQUFHO0FBQVE7QUFBMkI7QUFDMUM7QUFDQztBQUNoQjtBQUNSO0FBQW9DO0FBQXVCO0FBQzNCO0FBQVEsSUFnRnRDLFlBQW9CLFFBQWlCLEVBQ2pCLFFBQWlDLEVBQ2pDLGlCQUFtQyxFQUNULGNBQW1CLEVBQ2pDLFdBQW9CLEVBQ1osaUJBQThCLEVBQ3RDLElBQW9CLEVBR2hDLGFBQTRCO0FBQ2xELFFBVnNCLGFBQVEsR0FBUixRQUFRLENBQVM7QUFBQyxRQUNsQixhQUFRLEdBQVIsUUFBUSxDQUF5QjtBQUFDLFFBQ2xDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7QUFBQyxRQUV4QixnQkFBVyxHQUFYLFdBQVcsQ0FBUztBQUFDLFFBQ2Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFhO0FBQUMsUUFDdkMsU0FBSSxHQUFKLElBQUksQ0FBZ0I7QUFBQyxRQUdqQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtBQUFDLFFBNUZ6QyxnQkFBVyxHQUFzQixJQUFJLENBQUM7QUFDaEQsUUFBVSxjQUFTLEdBQVksS0FBSyxDQUFDO0FBQ3JDLFFBQVUsZ0NBQTJCLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztBQUMzRCxRQUFVLHVCQUFrQixHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7QUFDbEQsUUFBVSwyQkFBc0IsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO0FBQ3REO0FBQVk7QUFHRjtBQUN3RDtBQUFZLFFBRXBFLHNCQUFpQjtBQUFRO0FBQXVCO0FBRW5ELFFBRnVCLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxFQUFDO0FBQzdEO0FBRUs7QUFDTSxRQUFULGNBQVMsR0FBNkIsSUFBSSxDQUFDO0FBQzdDO0FBRUs7QUFHa0I7QUFDOEM7QUFHckU7QUFFTyxRQWdDZ0MsaUJBQVksR0FBWSxJQUFJLENBQUM7QUFDcEU7QUFDVztBQUNFO0FBQVksUUFBSixlQUFVLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7QUFDL0U7QUFFSztBQUNNO0FBQ007QUFFQztBQUFZO0FBQ00sUUFBZixlQUFVLEdBQXVCLElBQUksQ0FBQyxVQUFVLENBQUM7QUFDdEU7QUFDVztBQUNFO0FBQVksUUFBSixlQUFVLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7QUFDL0U7QUFFSztBQUNNO0FBQ007QUFFQztBQUFZO0FBQ00sUUFBZixnQkFBVyxHQUF1QixJQUFJLENBQUMsVUFBVSxDQUFDO0FBQ3ZFLFFBWUksUUFBUSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUN4RSwyQkFBMkIsQ0FBQyxDQUFDO0FBQ3JDLFFBQ0ksSUFBSSxpQkFBaUIsRUFBRTtBQUMzQixZQUFNLGlCQUFpQixDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUNsRSxTQUFLO0FBQ0wsUUFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQztBQUMxQyxJQUFFLENBQUM7QUFDSDtBQUNPO0FBQ047QUFDUTtBQUNOO0FBRUcsSUF4RkosSUFDSSw0QkFBNEIsS0FBbUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUN4RTtBQUFRO0FBQW9CO0FBQW1CO0FBQzlDLElBREMsSUFBSSw0QkFBNEIsQ0FBQyxDQUFlO0FBQ2xELFFBQUksSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7QUFDbEIsSUFBRSxDQUFDO0FBQ0g7QUFDTztBQUNGO0FBQW1CO0FBQ3RCLElBREEsSUFDSSxJQUFJLEtBQUssT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUNuQztBQUFRO0FBQXVCO0FBQ2Q7QUFBUSxJQUR2QixJQUFJLElBQUksQ0FBQyxJQUFrQjtBQUM3QixRQUFJLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDN0IsWUFBTSxPQUFPO0FBQ2IsU0FBSztBQUNMLFFBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDdEIsUUFBSSxJQUFJLENBQUMsc0JBQXNCLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDOUMsUUFDSSxJQUFJLElBQUksRUFBRTtBQUNkLFlBQU0sSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUztBQUFNO0FBQ25EO0FBRUg7QUFBZ0IsWUFIaUMsTUFBTSxDQUFDLEVBQUU7QUFDakYsZ0JBQVEsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQzVCLGdCQUNRLGdGQUFnRjtBQUN4RixnQkFBUSxJQUFJLENBQUMsTUFBTSxLQUFLLE9BQU8sSUFBSSxNQUFNLEtBQUssS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtBQUMxRSxvQkFBVSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDL0MsaUJBQVM7QUFDVCxZQUFNLENBQUMsRUFBQyxDQUFDO0FBQ1QsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNIO0FBQVE7QUFBbUI7QUFFeEIsSUFxREQsa0JBQWtCO0FBQ3BCLFFBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3RCLFFBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQ3hCLElBQUUsQ0FBQztBQUNIO0FBQ087QUFDQztBQUFRLElBRGQsV0FBVztBQUNiLFFBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQzFCLFlBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUNqQyxZQUFNLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0FBQzlCLFNBQUs7QUFDTCxRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQ2hGLDJCQUEyQixDQUFDLENBQUM7QUFDckMsUUFDSSxJQUFJLENBQUMsc0JBQXNCLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDOUMsUUFBSSxJQUFJLENBQUMsMkJBQTJCLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDbkQsUUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDMUMsSUFBRSxDQUFDO0FBQ0g7QUFDTztBQUNGO0FBQW1CO0FBQ3BCLElBREYsSUFBSSxRQUFRO0FBQUssUUFDZixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDMUIsSUFBRSxDQUFDO0FBQ0g7QUFDTztBQUNGO0FBQW1CO0FBQ2pCLElBREwsSUFBSSxHQUFHO0FBQUssUUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUNsRSxJQUFFLENBQUM7QUFDSDtBQUNPO0FBQ0Y7QUFBbUI7QUFDdkIsSUFEQyxlQUFlO0FBQUssUUFDbEIsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzFELElBQUUsQ0FBQztBQUNIO0FBQ087QUFDRjtBQUNKO0FBQVEsSUFEUCxVQUFVO0FBQUssUUFDYixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQy9ELElBQUUsQ0FBQztBQUNIO0FBQ087QUFDRjtBQUNGO0FBQVEsSUFEVCxRQUFRO0FBQUssUUFDWCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFDeEIsWUFBTSxPQUFPO0FBQ2IsU0FBSztBQUNMLFFBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3RCO0FBQ3dCLGNBQWQsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUU7QUFDNUM7QUFBeUIsY0FBZixhQUFhLEdBQUcsVUFBVSxDQUFDLFNBQVMsRUFBRTtBQUNoRCxRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQUEsYUFBYSxDQUFDLGdCQUFnQixFQUFxQyxDQUFDLENBQUM7QUFDM0YsUUFBSSxhQUFhLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztBQUN6RixZQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0FBQzlCLFFBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztBQUN6QyxRQUNJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFDL0IsWUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2xELFNBQUs7QUFDTCxRQUNJLElBQUksQ0FBQywyQkFBMkIsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxTQUFTO0FBQU07QUFDOUU7QUFBWSxRQUQ2RCxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUMsQ0FBQztBQUNwRyxRQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUNyQixRQUNJLElBQUksSUFBSSxDQUFDLElBQUksWUFBWSxPQUFPLEVBQUU7QUFDdEMsWUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0FBQ2xDLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSDtBQUNPO0FBQ0Y7QUFDSDtBQUFRLElBRFIsU0FBUztBQUFLLFFBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDM0IsSUFBRSxDQUFDO0FBQ0g7QUFFQztBQUNFO0FBRUM7QUFBMkI7QUFBbUI7QUFBUSxJQUF4RCxLQUFLLENBQUMsU0FBc0IsU0FBUyxFQUFFLE9BQXNCO0FBQy9ELFFBQUksSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO0FBQzVCLFlBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDbEUsU0FBSztBQUFDLGFBQUs7QUFDWCxZQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNqRCxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0g7QUFDTztBQUNGO0FBQWdCO0FBQ1I7QUFBUSxJQURYLFlBQVk7QUFDdEIsUUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDN0MsWUFBTSxPQUFPO0FBQ2IsU0FBSztBQUNMO0FBQ3dCLGNBQWQsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJO0FBQzFCLFFBQ0ksSUFBSSxDQUFDLDJCQUEyQixDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ25ELFFBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUM5QixRQUNJLElBQUksSUFBSSxZQUFZLE9BQU8sRUFBRTtBQUNqQyxZQUFNLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUM3QixZQUNNLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtBQUM1QixnQkFBUSxzRUFBc0U7QUFDOUUsZ0JBQVEsSUFBSSxDQUFDLGNBQWM7QUFDM0IscUJBQVcsSUFBSSxDQUNILE1BQU07QUFBTTtBQUNuQjtBQUNVO0FBQW9CLGdCQUZoQixLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEtBQUssTUFBTSxFQUFDLEVBQ3pDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDbEIsZ0JBQVcsNENBQTRDO0FBQ3hELGdCQUFZLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUN0QztBQUNYLHFCQUFXLFNBQVMsQ0FBQztBQUNyQixvQkFBWSxJQUFJO0FBQU87QUFDakI7QUFBd0Isb0JBRFosR0FBRyxFQUFFLENBQUMsbUJBQUEsSUFBSSxDQUFDLFdBQVcsRUFBQyxDQUFDLE1BQU0sRUFBRSxDQUFBO0FBQ2xEO0FBQ1Esb0JBQUksUUFBUTtBQUFPO0FBQ3BCO0FBRUwsb0JBSG9CLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDdEQsaUJBQVcsQ0FBQyxDQUFDO0FBQ2IsYUFBTztBQUFDLGlCQUFLO0FBQ2IsZ0JBQVEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuQyxhQUFPO0FBQ1AsU0FBSztBQUFDLGFBQUs7QUFDWCxZQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDakMsWUFDTSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFDNUIsZ0JBQVEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNsQyxhQUFPO0FBQ1AsU0FBSztBQUNMLFFBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBQ3pCLElBQUUsQ0FBQztBQUNIO0FBRUM7QUFDRTtBQUNFO0FBQ1U7QUFDWDtBQUFRLElBREYsU0FBUztBQUFLLFFBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0FBQ2pGLFFBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUNuQyxRQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0FBQzdCLFFBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM5QixRQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLENBQUM7QUFDMUQsSUFBRSxDQUFDO0FBQ0g7QUFDTztBQUNGO0FBQWdCO0FBQ25CO0FBQVEsSUFEQSxpQkFBaUI7QUFBSyxRQUM1QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO0FBQ2hDO0FBQ1EsZ0JBREUsS0FBSyxHQUFHLENBQUM7QUFDbkI7QUFBNkIsZ0JBQW5CLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVU7QUFDM0MsWUFDTSxPQUFPLFVBQVUsRUFBRTtBQUN6QixnQkFBUSxLQUFLLEVBQUUsQ0FBQztBQUNoQixnQkFBUSxVQUFVLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQztBQUMzQyxhQUFPO0FBQ1AsWUFDTSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwQyxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0g7QUFDTztBQUNGO0FBQWdCO0FBQ1Q7QUFBUSxJQURWLGFBQWE7QUFDdkIsUUFBSSxzRUFBc0U7QUFDMUUsUUFBSSxvRUFBb0U7QUFDeEUsUUFBSSxpQ0FBaUM7QUFDckMsUUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7QUFDM0IsWUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUMzQixnQkFBUSxnRUFBZ0U7QUFDeEUsZ0JBQVEsMERBQTBEO0FBQ2xFLGdCQUFRLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNyQixhQUFPO0FBQUMsaUJBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRTtBQUMxQyxnQkFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNuQyxhQUFPO0FBQ1AsU0FBSztBQUNMLFFBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDMUIsSUFBRSxDQUFDO0FBQ0g7QUFFQztBQUFRO0FBQWdCO0FBQ3pCO0FBQW1CO0FBQVEsSUFEakIsY0FBYyxDQUFDLE1BQWU7QUFBSSxRQUN4QyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztBQUM1QixRQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDckUsUUFDSSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRTtBQUNoQyxZQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO0FBQ25ELFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSDtBQUVDO0FBQ0U7QUFDRTtBQUNVO0FBQ047QUFBUSxJQURQLFVBQVU7QUFDcEIsUUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtBQUNwQixZQUFNLHdCQUF3QixFQUFFLENBQUM7QUFDakMsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNIO0FBRUM7QUFDRTtBQUNFO0FBQ1U7QUFBbUI7QUFDakMsSUFEUyxjQUFjO0FBQUssUUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFDM0I7QUFBNkIsa0JBQWpCLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7QUFDN0MsWUFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsbUJBQUEsTUFBTSxDQUFDLGdCQUFnQixFQUFxQyxDQUFDLENBQUM7QUFDL0YsWUFBTSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RELFlBQ00sc0ZBQXNGO0FBQzVGLFlBQU0saUZBQWlGO0FBQ3ZGLFlBQU0seUVBQXlFO0FBQy9FLFlBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUNuRCxTQUFLO0FBQ0wsUUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7QUFDNUIsSUFBRSxDQUFDO0FBQ0g7QUFFQztBQUNFO0FBQWdCO0FBRUQ7QUFBUSxJQUFoQixpQkFBaUI7QUFBSyxRQUM1QixPQUFPLElBQUksYUFBYSxDQUFDO0FBQzdCLFlBQU0sZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUU7QUFDaEQsaUJBQVcsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUM3QyxpQkFBVyxrQkFBa0IsRUFBRTtBQUMvQixpQkFBVyxxQkFBcUIsQ0FBQyxzQ0FBc0MsQ0FBQztBQUN4RSxZQUFNLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxrQ0FBa0M7QUFDbEYsWUFBTSxjQUFjLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRTtBQUM1QyxZQUFNLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSTtBQUMxQixTQUFLLENBQUMsQ0FBQztBQUNQLElBQUUsQ0FBQztBQUNIO0FBRUM7QUFDRTtBQUNFO0FBRUo7QUFBZ0I7QUFBMkI7QUFBbUI7QUFBUSxJQUE3RCxxQkFBcUIsQ0FBQyxRQUEyQztBQUFJLFFBQzNFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtBQUN0QyxZQUFNLFFBQVEsQ0FBQyxlQUFlLENBQUMsU0FBUztBQUFNO0FBQ3BCO0FBQTJCO0FBQWdCLFlBRDVCLE1BQU0sQ0FBQyxFQUFFO0FBQ2xEO0FBQWlDLHNCQUFuQixJQUFJLEdBQWtCLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRO0FBQ25HO0FBQWlDLHNCQUFuQixJQUFJLEdBQWtCLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPO0FBQ2hHLGdCQUNRLG1CQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDbEQsWUFBTSxDQUFDLEVBQUMsQ0FBQztBQUNULFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSDtBQUVDO0FBQ0U7QUFDRTtBQUFnQjtBQUVBO0FBQW1CO0FBQVEsSUFBdEMsWUFBWSxDQUFDLGdCQUFtRDtBQUMxRSxZQUFRLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxHQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7QUFDOUUsWUFDUSxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxHQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUM7QUFDL0UsWUFDUSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQztBQUNqRSxZQUFRLENBQUMsUUFBUSxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDO0FBQ2pFO0FBRUcsWUFGSyxPQUFPLEdBQUcsQ0FBQztBQUNuQixRQUNJLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFO0FBQ2hDLFlBQU0sNkRBQTZEO0FBQ25FLFlBQU0sMERBQTBEO0FBQ2hFLFlBQU0sZ0JBQWdCLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDdEYsWUFBTSxlQUFlLEdBQUcsUUFBUSxHQUFHLE9BQU8sS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ3ZFLFlBQU0sT0FBTyxHQUFHLFFBQVEsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDO0FBQ3pGLFNBQUs7QUFBQyxhQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtBQUMxQyxZQUFNLE9BQU8sR0FBRyxRQUFRLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUN0RCxZQUFNLGVBQWUsR0FBRyxnQkFBZ0IsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ3RFLFNBQUs7QUFDTCxRQUNJLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztBQUNuQyxZQUFNLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBQztBQUNyRCxZQUFNLEVBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUM7QUFDeEYsWUFBTTtBQUNOLGdCQUFRLE9BQU87QUFDZixnQkFBUSxPQUFPLEVBQUUsZUFBZTtBQUNoQyxnQkFBUSxRQUFRO0FBQ2hCLGdCQUFRLFFBQVEsRUFBRSxnQkFBZ0I7QUFDbEMsZ0JBQVEsT0FBTyxFQUFFLENBQUMsT0FBTztBQUN6QixhQUFPO0FBQ1AsWUFBTTtBQUNOLGdCQUFRLE9BQU8sRUFBRSxlQUFlO0FBQ2hDLGdCQUFRLE9BQU8sRUFBRSxlQUFlO0FBQ2hDLGdCQUFRLFFBQVEsRUFBRSxnQkFBZ0I7QUFDbEMsZ0JBQVEsUUFBUSxFQUFFLGdCQUFnQjtBQUNsQyxnQkFBUSxPQUFPLEVBQUUsQ0FBQyxPQUFPO0FBQ3pCLGFBQU87QUFDUCxTQUFLLENBQUMsQ0FBQztBQUNQLElBQUUsQ0FBQztBQUNIO0FBQ087QUFDRjtBQUFnQjtBQUNmO0FBQVEsSUFESixtQkFBbUI7QUFDN0I7QUFBeUIsY0FBZixRQUFRLEdBQUcsbUJBQUEsSUFBSSxDQUFDLFdBQVcsRUFBQyxDQUFDLGFBQWEsRUFBRTtBQUN0RDtBQUF5QixjQUFmLFdBQVcsR0FBRyxtQkFBQSxJQUFJLENBQUMsV0FBVyxFQUFDLENBQUMsV0FBVyxFQUFFO0FBQ3ZEO0FBQXlCLGNBQWYsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUU7QUFDbkY7QUFBeUIsY0FBZixLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQy9ELE1BQU07QUFBTTtBQUE2QjtBQUNwQztBQUFZLFFBRFYsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLGlCQUFpQixFQUFDLEVBQ25ELE1BQU07QUFBTTtBQUNaO0FBQVksUUFETCxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFDLENBQzdCLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRTtBQUN0QixRQUNJLE9BQU8sS0FBSyxDQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQzVELElBQUUsQ0FBQztBQUNIO0FBQ087QUFDRjtBQUF3QjtBQUMzQjtBQUFRLElBRFIsZ0JBQWdCLENBQUMsS0FBaUI7QUFBSSxRQUNwQyxJQUFJLENBQUMsK0JBQStCLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDakQsWUFBTSx1RUFBdUU7QUFDN0UsWUFBTSxvRUFBb0U7QUFDMUUsWUFBTSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUMzRCxZQUNNLDZFQUE2RTtBQUNuRixZQUFNLHFFQUFxRTtBQUMzRSxZQUFNLDZDQUE2QztBQUNuRCxZQUFNLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFO0FBQ2xDLGdCQUFRLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUMvQixhQUFPO0FBQ1AsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNIO0FBQ087QUFDRjtBQUF3QjtBQUM1QjtBQUFRLElBRFAsY0FBYyxDQUFDLEtBQW9CO0FBQUk7QUFDdEIsY0FBVCxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU87QUFDakMsUUFDSSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUN0QixDQUFDLE9BQU8sS0FBSyxXQUFXLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFDM0QsWUFBWSxDQUFDLE9BQU8sS0FBSyxVQUFVLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO0FBQzdELFlBQU0sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3RCLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSDtBQUNPO0FBQ0Y7QUFBd0I7QUFDdkI7QUFBUSxJQURaLFlBQVksQ0FBQyxLQUFpQjtBQUFJLFFBQ2hDLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFO0FBQ2hDLFlBQU0sMkRBQTJEO0FBQ2pFLFlBQU0sS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0FBQzlCLFlBQU0sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3RCLFNBQUs7QUFBQyxhQUFLO0FBQ1gsWUFBTSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDeEIsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNIO0FBQ087QUFDRjtBQUFnQjtBQUNSO0FBQVEsSUFEWCxZQUFZO0FBQ3RCLFFBQUkseUVBQXlFO0FBQzdFLFFBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRTtBQUNqQyxZQUFNLE9BQU87QUFDYixTQUFLO0FBQ0wsUUFDSSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUU7QUFDekQsWUFBTSxxRkFBcUY7QUFDM0YsWUFBTSxrRkFBa0Y7QUFDeEYsWUFBTSxxREFBcUQ7QUFDM0QsYUFBTyxJQUFJLENBQ0gsTUFBTTtBQUFNO0FBQTZCO0FBQXVCO0FBQ3JFLFFBRFksTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLGlCQUFpQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBQyxFQUN2RSxLQUFLLENBQUMsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUN4QjtBQUNQLGFBQU8sU0FBUztBQUFNO0FBQ0Y7QUFBWSxRQURmLEdBQUcsRUFBRTtBQUN0QixZQUFRLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO0FBQ2pDLFlBQ1Esa0ZBQWtGO0FBQzFGLFlBQVEsOEVBQThFO0FBQ3RGLFlBQVEscUVBQXFFO0FBQzdFLFlBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxZQUFZLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtBQUNwRSxnQkFBVSxnREFBZ0Q7QUFDMUQsZ0JBQVUsNERBQTREO0FBQ3RFLGdCQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYztBQUNsQyxxQkFBYSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUMzRixxQkFBYSxTQUFTO0FBQU07QUFDaEI7QUFDRyxnQkFGUSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUMsQ0FBQztBQUM5QyxhQUFTO0FBQUMsaUJBQUs7QUFDZixnQkFBVSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDMUIsYUFBUztBQUNULFFBQU0sQ0FBQyxFQUFDLENBQUM7QUFDVCxJQUFFLENBQUM7QUFDSDtBQUNPO0FBQ0Y7QUFBZ0I7QUFBbUI7QUFDakMsSUFERyxVQUFVO0FBQUssUUFDckIsNkVBQTZFO0FBQ2pGLFFBQUksK0VBQStFO0FBQ25GLFFBQUksK0NBQStDO0FBQ25ELFFBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFDN0UsWUFBTSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3ZGLFNBQUs7QUFDTCxRQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUN4QixJQUFFLENBQUM7QUFDSDswQ0F2ZkMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSw2Q0FBNkMsa0JBQ3ZELElBQUksRUFBRSxzQkFDSixPQUFPLEVBQUUsa0JBQWtCLHNCQUMzQixlQUFlLEVBQUUsTUFBTSxzQkFDdkIsc0JBQXNCLEVBQUUsa0JBQWtCLHNCQUMxQyxzQkFBc0IsRUFBRSxnQ0FBZ0Msc0JBQ3hELGFBQWEsRUFBRSwwQkFBMEI7WUFDekMsV0FBVyxFQUFFLHdCQUF3QixzQkFDckMsU0FBUyxFQUFFLHNCQUFzQixtQkFDbEMsa0JBQ0QsUUFBUSxFQUFFLGdCQUFnQixjQUMzQjs7OztxWkFDSTtBQUFDO0FBQW1CO0FBQXdDLFlBdkUvRCxPQUFPO0FBQ1AsWUFTQSxVQUFVO0FBQ1YsWUFRQSxnQkFBZ0I7QUFDaEIsNENBMklhLE1BQU0sU0FBQyx3QkFBd0I7QUFBUyxZQXZJL0MsT0FBTyx1QkF3SUEsUUFBUTtBQUFPLFlBdEl0QixXQUFXLHVCQXVJSixRQUFRLFlBQUksSUFBSTtBQUFPLFlBdEtuQixjQUFjLHVCQXVLbEIsUUFBUTtBQUFPLFlBeEt0QixZQUFZO0FBQUc7QUFBRztBQUFrQywyQ0FvR3pELEtBQUssU0FBQyxzQkFBc0I7QUFDMUIsbUJBTUYsS0FBSyxTQUFDLG1CQUFtQjtBQUN2Qix1QkF1QkYsS0FBSyxTQUFDLG9CQUFvQjtBQUFPLDJCQU9qQyxLQUFLLFNBQUMsNEJBQTRCO0FBQU8seUJBR3pDLE1BQU07QUFBSyx5QkFRWCxNQUFNO0FBQUsseUJBR1gsTUFBTTtBQUFLLDBCQVFYLE1BQU07QUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQztBQUFhO0FBQVE7QUFBaUI7QUFBZ0I7QUFFakUsSUFwRkgsaUNBQWdDO0FBQ2xDO0FBQVE7QUFBaUI7QUFBZ0I7QUFDekMsSUFERSxxQ0FBOEM7QUFDaEQ7QUFBUTtBQUFpQjtBQUN0QjtBQUFRLElBRFQsbUNBQW1DO0FBQ3JDO0FBQVE7QUFBaUI7QUFBZ0I7QUFBUSxJQUEvQyxxREFBeUQ7QUFDM0Q7QUFBUTtBQUFpQjtBQUFnQjtBQUFRLElBQS9DLDRDQUFnRDtBQUNsRDtBQUFRO0FBQWlCO0FBQWdCO0FBQVEsSUFBL0MsZ0RBQW9EO0FBQ3REO0FBQVE7QUFBaUI7QUFBZ0I7QUFDekMsSUFERSx5Q0FBOEM7QUFDaEQ7QUFFQztBQUNFO0FBQ0U7QUFDVztBQUFnQjtBQUFRLElBQXRDLDJDQUEyRDtBQUM3RDtBQUNvQixJQUVsQixtQ0FBMkM7QUFDN0M7QUFFQztBQUNBO0FBQWdCO0FBQVEsSUE4QnZCLCtCQUE0QjtBQUM5QjtBQUNPO0FBQ0Y7QUFBaUI7QUFBUSxJQUE1QixrQ0FBMkM7QUFDN0M7QUFFQztBQUNFO0FBQ0U7QUFFSjtBQUFpQjtBQUFRLElBQXhCLHNDQUFrRTtBQUNwRTtBQUNPO0FBQ0Y7QUFBaUI7QUFBUSxJQUE1QixvQ0FBNkU7QUFDL0U7QUFFQztBQUNFO0FBQ0U7QUFFSDtBQUFpQjtBQUFRLElBQ3pCLG9DQUFvRTtBQUN0RTtBQUNPO0FBQ0Y7QUFBaUI7QUFBUSxJQUE1QixvQ0FBNkU7QUFDL0U7QUFFQztBQUNFO0FBQ0U7QUFFSDtBQUFpQjtBQUFRLElBQ3pCLHFDQUFxRTtBQUN2RTtBQUNPO0FBQWlCO0FBQWdCO0FBQ2pDLElBRE8sa0NBQXlCO0FBQUM7QUFDakM7QUFBaUI7QUFBZ0I7QUFBUSxJQUFsQyxrQ0FBeUM7QUFBQztBQUNqRDtBQUFpQjtBQUFnQjtBQUFRLElBQWxDLDJDQUEyQztBQUFDO0FBQ25EO0FBQWlCO0FBQWdCO0FBQVEsSUFDbEMscUNBQXdDO0FBQUM7QUFDaEQ7QUFBaUI7QUFBZ0I7QUFBUSxJQUFsQywyQ0FBMEQ7QUFBQztBQUNsRTtBQUFpQjtBQUFnQjtBQUFRLElBQWxDLDhCQUF3QztBQUFDO0FBQ2hEO0FBQWlCO0FBQWdCO0FBQVEsSUFFbEMsdUNBQW9DO0FBQUM7QUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0ZvY3VzTW9uaXRvciwgRm9jdXNPcmlnaW4sIGlzRmFrZU1vdXNlZG93bkZyb21TY3JlZW5SZWFkZXJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7RGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHtMRUZUX0FSUk9XLCBSSUdIVF9BUlJPV30gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7XG4gIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSxcbiAgSG9yaXpvbnRhbENvbm5lY3Rpb25Qb3MsXG4gIE92ZXJsYXksXG4gIE92ZXJsYXlDb25maWcsXG4gIE92ZXJsYXlSZWYsXG4gIFZlcnRpY2FsQ29ubmVjdGlvblBvcyxcbiAgU2Nyb2xsU3RyYXRlZ3ksXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7VGVtcGxhdGVQb3J0YWx9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFNlbGYsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtub3JtYWxpemVQYXNzaXZlTGlzdGVuZXJPcHRpb25zfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHthc2FwU2NoZWR1bGVyLCBtZXJnZSwgb2YgYXMgb2JzZXJ2YWJsZU9mLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtkZWxheSwgZmlsdGVyLCB0YWtlLCB0YWtlVW50aWx9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7TWF0TWVudX0gZnJvbSAnLi9tZW51JztcbmltcG9ydCB7dGhyb3dNYXRNZW51TWlzc2luZ0Vycm9yfSBmcm9tICcuL21lbnUtZXJyb3JzJztcbmltcG9ydCB7TWF0TWVudUl0ZW19IGZyb20gJy4vbWVudS1pdGVtJztcbmltcG9ydCB7TWF0TWVudVBhbmVsfSBmcm9tICcuL21lbnUtcGFuZWwnO1xuaW1wb3J0IHtNZW51UG9zaXRpb25YLCBNZW51UG9zaXRpb25ZfSBmcm9tICcuL21lbnUtcG9zaXRpb25zJztcblxuLyoqIEluamVjdGlvbiB0b2tlbiB0aGF0IGRldGVybWluZXMgdGhlIHNjcm9sbCBoYW5kbGluZyB3aGlsZSB0aGUgbWVudSBpcyBvcGVuLiAqL1xuZXhwb3J0IGNvbnN0IE1BVF9NRU5VX1NDUk9MTF9TVFJBVEVHWSA9XG4gICAgbmV3IEluamVjdGlvblRva2VuPCgpID0+IFNjcm9sbFN0cmF0ZWd5PignbWF0LW1lbnUtc2Nyb2xsLXN0cmF0ZWd5Jyk7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgZnVuY3Rpb24gTUFUX01FTlVfU0NST0xMX1NUUkFURUdZX0ZBQ1RPUlkob3ZlcmxheTogT3ZlcmxheSk6ICgpID0+IFNjcm9sbFN0cmF0ZWd5IHtcbiAgcmV0dXJuICgpID0+IG92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5yZXBvc2l0aW9uKCk7XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTUFUX01FTlVfU0NST0xMX1NUUkFURUdZX0ZBQ1RPUllfUFJPVklERVIgPSB7XG4gIHByb3ZpZGU6IE1BVF9NRU5VX1NDUk9MTF9TVFJBVEVHWSxcbiAgZGVwczogW092ZXJsYXldLFxuICB1c2VGYWN0b3J5OiBNQVRfTUVOVV9TQ1JPTExfU1RSQVRFR1lfRkFDVE9SWSxcbn07XG5cbi8qKiBEZWZhdWx0IHRvcCBwYWRkaW5nIG9mIHRoZSBtZW51IHBhbmVsLiAqL1xuZXhwb3J0IGNvbnN0IE1FTlVfUEFORUxfVE9QX1BBRERJTkcgPSA4O1xuXG4vKiogT3B0aW9ucyBmb3IgYmluZGluZyBhIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXIuICovXG5jb25zdCBwYXNzaXZlRXZlbnRMaXN0ZW5lck9wdGlvbnMgPSBub3JtYWxpemVQYXNzaXZlTGlzdGVuZXJPcHRpb25zKHtwYXNzaXZlOiB0cnVlfSk7XG5cbi8vIFRPRE8oYW5kcmV3c2VndWluKTogUmVtb3ZlIHRoZSBrZWJhYiB2ZXJzaW9ucyBpbiBmYXZvciBvZiBjYW1lbENhc2VkIGF0dHJpYnV0ZSBzZWxlY3RvcnNcblxuLyoqXG4gKiBUaGlzIGRpcmVjdGl2ZSBpcyBpbnRlbmRlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYW4gbWF0LW1lbnUgdGFnLiAgSXQgaXNcbiAqIHJlc3BvbnNpYmxlIGZvciB0b2dnbGluZyB0aGUgZGlzcGxheSBvZiB0aGUgcHJvdmlkZWQgbWVudSBpbnN0YW5jZS5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgW21hdC1tZW51LXRyaWdnZXItZm9yXSwgW21hdE1lbnVUcmlnZ2VyRm9yXWAsXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnbWF0LW1lbnUtdHJpZ2dlcicsXG4gICAgJ2FyaWEtaGFzcG9wdXAnOiAndHJ1ZScsXG4gICAgJ1thdHRyLmFyaWEtZXhwYW5kZWRdJzogJ21lbnVPcGVuIHx8IG51bGwnLFxuICAgICdbYXR0ci5hcmlhLWNvbnRyb2xzXSc6ICdtZW51T3BlbiA/IG1lbnUucGFuZWxJZCA6IG51bGwnLFxuICAgICcobW91c2Vkb3duKSc6ICdfaGFuZGxlTW91c2Vkb3duKCRldmVudCknLFxuICAgICcoa2V5ZG93biknOiAnX2hhbmRsZUtleWRvd24oJGV2ZW50KScsXG4gICAgJyhjbGljayknOiAnX2hhbmRsZUNsaWNrKCRldmVudCknLFxuICB9LFxuICBleHBvcnRBczogJ21hdE1lbnVUcmlnZ2VyJ1xufSlcbmV4cG9ydCBjbGFzcyBNYXRNZW51VHJpZ2dlciBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3BvcnRhbDogVGVtcGxhdGVQb3J0YWw7XG4gIHByaXZhdGUgX292ZXJsYXlSZWY6IE92ZXJsYXlSZWYgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfbWVudU9wZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY2xvc2luZ0FjdGlvbnNTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIHByaXZhdGUgX2hvdmVyU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICBwcml2YXRlIF9tZW51Q2xvc2VTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIHByaXZhdGUgX3Njcm9sbFN0cmF0ZWd5OiAoKSA9PiBTY3JvbGxTdHJhdGVneTtcblxuICAvKipcbiAgICogSGFuZGxlcyB0b3VjaCBzdGFydCBldmVudHMgb24gdGhlIHRyaWdnZXIuXG4gICAqIE5lZWRzIHRvIGJlIGFuIGFycm93IGZ1bmN0aW9uIHNvIHdlIGNhbiBlYXNpbHkgdXNlIGFkZEV2ZW50TGlzdGVuZXIgYW5kIHJlbW92ZUV2ZW50TGlzdGVuZXIuXG4gICAqL1xuICBwcml2YXRlIF9oYW5kbGVUb3VjaFN0YXJ0ID0gKCkgPT4gdGhpcy5fb3BlbmVkQnkgPSAndG91Y2gnO1xuXG4gIC8vIFRyYWNraW5nIGlucHV0IHR5cGUgaXMgbmVjZXNzYXJ5IHNvIGl0J3MgcG9zc2libGUgdG8gb25seSBhdXRvLWZvY3VzXG4gIC8vIHRoZSBmaXJzdCBpdGVtIG9mIHRoZSBsaXN0IHdoZW4gdGhlIG1lbnUgaXMgb3BlbmVkIHZpYSB0aGUga2V5Ym9hcmRcbiAgX29wZW5lZEJ5OiAnbW91c2UnIHwgJ3RvdWNoJyB8IG51bGwgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4gICAqL1xuICBASW5wdXQoJ21hdC1tZW51LXRyaWdnZXItZm9yJylcbiAgZ2V0IF9kZXByZWNhdGVkTWF0TWVudVRyaWdnZXJGb3IoKTogTWF0TWVudVBhbmVsIHsgcmV0dXJuIHRoaXMubWVudTsgfVxuICBzZXQgX2RlcHJlY2F0ZWRNYXRNZW51VHJpZ2dlckZvcih2OiBNYXRNZW51UGFuZWwpIHtcbiAgICB0aGlzLm1lbnUgPSB2O1xuICB9XG5cbiAgLyoqIFJlZmVyZW5jZXMgdGhlIG1lbnUgaW5zdGFuY2UgdGhhdCB0aGUgdHJpZ2dlciBpcyBhc3NvY2lhdGVkIHdpdGguICovXG4gIEBJbnB1dCgnbWF0TWVudVRyaWdnZXJGb3InKVxuICBnZXQgbWVudSgpIHsgcmV0dXJuIHRoaXMuX21lbnU7IH1cbiAgc2V0IG1lbnUobWVudTogTWF0TWVudVBhbmVsKSB7XG4gICAgaWYgKG1lbnUgPT09IHRoaXMuX21lbnUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9tZW51ID0gbWVudTtcbiAgICB0aGlzLl9tZW51Q2xvc2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblxuICAgIGlmIChtZW51KSB7XG4gICAgICB0aGlzLl9tZW51Q2xvc2VTdWJzY3JpcHRpb24gPSBtZW51LmNsb3NlLmFzT2JzZXJ2YWJsZSgpLnN1YnNjcmliZShyZWFzb24gPT4ge1xuICAgICAgICB0aGlzLl9kZXN0cm95TWVudSgpO1xuXG4gICAgICAgIC8vIElmIGEgY2xpY2sgY2xvc2VkIHRoZSBtZW51LCB3ZSBzaG91bGQgY2xvc2UgdGhlIGVudGlyZSBjaGFpbiBvZiBuZXN0ZWQgbWVudXMuXG4gICAgICAgIGlmICgocmVhc29uID09PSAnY2xpY2snIHx8IHJlYXNvbiA9PT0gJ3RhYicpICYmIHRoaXMuX3BhcmVudE1lbnUpIHtcbiAgICAgICAgICB0aGlzLl9wYXJlbnRNZW51LmNsb3NlZC5lbWl0KHJlYXNvbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9tZW51OiBNYXRNZW51UGFuZWw7XG5cbiAgLyoqIERhdGEgdG8gYmUgcGFzc2VkIGFsb25nIHRvIGFueSBsYXppbHktcmVuZGVyZWQgY29udGVudC4gKi9cbiAgQElucHV0KCdtYXRNZW51VHJpZ2dlckRhdGEnKSBtZW51RGF0YTogYW55O1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIGZvY3VzIHNob3VsZCBiZSByZXN0b3JlZCB3aGVuIHRoZSBtZW51IGlzIGNsb3NlZC5cbiAgICogTm90ZSB0aGF0IGRpc2FibGluZyB0aGlzIG9wdGlvbiBjYW4gaGF2ZSBhY2Nlc3NpYmlsaXR5IGltcGxpY2F0aW9uc1xuICAgKiBhbmQgaXQncyB1cCB0byB5b3UgdG8gbWFuYWdlIGZvY3VzLCBpZiB5b3UgZGVjaWRlIHRvIHR1cm4gaXQgb2ZmLlxuICAgKi9cbiAgQElucHV0KCdtYXRNZW51VHJpZ2dlclJlc3RvcmVGb2N1cycpIHJlc3RvcmVGb2N1czogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgYXNzb2NpYXRlZCBtZW51IGlzIG9wZW5lZC4gKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG1lbnVPcGVuZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKipcbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBhc3NvY2lhdGVkIG1lbnUgaXMgb3BlbmVkLlxuICAgKiBAZGVwcmVjYXRlZCBTd2l0Y2ggdG8gYG1lbnVPcGVuZWRgIGluc3RlYWRcbiAgICogQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1vbi1wcmVmaXhcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uTWVudU9wZW46IEV2ZW50RW1pdHRlcjx2b2lkPiA9IHRoaXMubWVudU9wZW5lZDtcblxuICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBhc3NvY2lhdGVkIG1lbnUgaXMgY2xvc2VkLiAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbWVudUNsb3NlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8qKlxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIGFzc29jaWF0ZWQgbWVudSBpcyBjbG9zZWQuXG4gICAqIEBkZXByZWNhdGVkIFN3aXRjaCB0byBgbWVudUNsb3NlZGAgaW5zdGVhZFxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tb3V0cHV0LW9uLXByZWZpeFxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25NZW51Q2xvc2U6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IHRoaXMubWVudUNsb3NlZDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9vdmVybGF5OiBPdmVybGF5LFxuICAgICAgICAgICAgICBwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgICAgICAgQEluamVjdChNQVRfTUVOVV9TQ1JPTExfU1RSQVRFR1kpIHNjcm9sbFN0cmF0ZWd5OiBhbnksXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX3BhcmVudE1lbnU6IE1hdE1lbnUsXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgcHJpdmF0ZSBfbWVudUl0ZW1JbnN0YW5jZTogTWF0TWVudUl0ZW0sXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX2RpcjogRGlyZWN0aW9uYWxpdHksXG4gICAgICAgICAgICAgIC8vIFRPRE8oY3Jpc2JldG8pOiBtYWtlIHRoZSBfZm9jdXNNb25pdG9yIHJlcXVpcmVkIHdoZW4gZG9pbmcgYnJlYWtpbmcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuICAgICAgICAgICAgICBwcml2YXRlIF9mb2N1c01vbml0b3I/OiBGb2N1c01vbml0b3IpIHtcblxuICAgIF9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuX2hhbmRsZVRvdWNoU3RhcnQsXG4gICAgICAgIHBhc3NpdmVFdmVudExpc3RlbmVyT3B0aW9ucyk7XG5cbiAgICBpZiAoX21lbnVJdGVtSW5zdGFuY2UpIHtcbiAgICAgIF9tZW51SXRlbUluc3RhbmNlLl90cmlnZ2Vyc1N1Ym1lbnUgPSB0aGlzLnRyaWdnZXJzU3VibWVudSgpO1xuICAgIH1cblxuICAgIHRoaXMuX3Njcm9sbFN0cmF0ZWd5ID0gc2Nyb2xsU3RyYXRlZ3k7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5fY2hlY2tNZW51KCk7XG4gICAgdGhpcy5faGFuZGxlSG92ZXIoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9vdmVybGF5UmVmKSB7XG4gICAgICB0aGlzLl9vdmVybGF5UmVmLmRpc3Bvc2UoKTtcbiAgICAgIHRoaXMuX292ZXJsYXlSZWYgPSBudWxsO1xuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5faGFuZGxlVG91Y2hTdGFydCxcbiAgICAgICAgcGFzc2l2ZUV2ZW50TGlzdGVuZXJPcHRpb25zKTtcblxuICAgIHRoaXMuX21lbnVDbG9zZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX2Nsb3NpbmdBY3Rpb25zU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5faG92ZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoZSBtZW51IGlzIG9wZW4uICovXG4gIGdldCBtZW51T3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbWVudU9wZW47XG4gIH1cblxuICAvKiogVGhlIHRleHQgZGlyZWN0aW9uIG9mIHRoZSBjb250YWluaW5nIGFwcC4gKi9cbiAgZ2V0IGRpcigpOiBEaXJlY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLl9kaXIgJiYgdGhpcy5fZGlyLnZhbHVlID09PSAncnRsJyA/ICdydGwnIDogJ2x0cic7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgbWVudSB0cmlnZ2VycyBhIHN1Yi1tZW51IG9yIGEgdG9wLWxldmVsIG9uZS4gKi9cbiAgdHJpZ2dlcnNTdWJtZW51KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhISh0aGlzLl9tZW51SXRlbUluc3RhbmNlICYmIHRoaXMuX3BhcmVudE1lbnUpO1xuICB9XG5cbiAgLyoqIFRvZ2dsZXMgdGhlIG1lbnUgYmV0d2VlbiB0aGUgb3BlbiBhbmQgY2xvc2VkIHN0YXRlcy4gKi9cbiAgdG9nZ2xlTWVudSgpOiB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy5fbWVudU9wZW4gPyB0aGlzLmNsb3NlTWVudSgpIDogdGhpcy5vcGVuTWVudSgpO1xuICB9XG5cbiAgLyoqIE9wZW5zIHRoZSBtZW51LiAqL1xuICBvcGVuTWVudSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbWVudU9wZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9jaGVja01lbnUoKTtcblxuICAgIGNvbnN0IG92ZXJsYXlSZWYgPSB0aGlzLl9jcmVhdGVPdmVybGF5KCk7XG4gICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IG92ZXJsYXlSZWYuZ2V0Q29uZmlnKCk7XG5cbiAgICB0aGlzLl9zZXRQb3NpdGlvbihvdmVybGF5Q29uZmlnLnBvc2l0aW9uU3RyYXRlZ3kgYXMgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5KTtcbiAgICBvdmVybGF5Q29uZmlnLmhhc0JhY2tkcm9wID0gdGhpcy5tZW51Lmhhc0JhY2tkcm9wID09IG51bGwgPyAhdGhpcy50cmlnZ2Vyc1N1Ym1lbnUoKSA6XG4gICAgICAgIHRoaXMubWVudS5oYXNCYWNrZHJvcDtcbiAgICBvdmVybGF5UmVmLmF0dGFjaCh0aGlzLl9nZXRQb3J0YWwoKSk7XG5cbiAgICBpZiAodGhpcy5tZW51LmxhenlDb250ZW50KSB7XG4gICAgICB0aGlzLm1lbnUubGF6eUNvbnRlbnQuYXR0YWNoKHRoaXMubWVudURhdGEpO1xuICAgIH1cblxuICAgIHRoaXMuX2Nsb3NpbmdBY3Rpb25zU3Vic2NyaXB0aW9uID0gdGhpcy5fbWVudUNsb3NpbmdBY3Rpb25zKCkuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xvc2VNZW51KCkpO1xuICAgIHRoaXMuX2luaXRNZW51KCk7XG5cbiAgICBpZiAodGhpcy5tZW51IGluc3RhbmNlb2YgTWF0TWVudSkge1xuICAgICAgdGhpcy5tZW51Ll9zdGFydEFuaW1hdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBDbG9zZXMgdGhlIG1lbnUuICovXG4gIGNsb3NlTWVudSgpOiB2b2lkIHtcbiAgICB0aGlzLm1lbnUuY2xvc2UuZW1pdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvY3VzZXMgdGhlIG1lbnUgdHJpZ2dlci5cbiAgICogQHBhcmFtIG9yaWdpbiBTb3VyY2Ugb2YgdGhlIG1lbnUgdHJpZ2dlcidzIGZvY3VzLlxuICAgKi9cbiAgZm9jdXMob3JpZ2luOiBGb2N1c09yaWdpbiA9ICdwcm9ncmFtJywgb3B0aW9ucz86IEZvY3VzT3B0aW9ucykge1xuICAgIGlmICh0aGlzLl9mb2N1c01vbml0b3IpIHtcbiAgICAgIHRoaXMuX2ZvY3VzTW9uaXRvci5mb2N1c1ZpYSh0aGlzLl9lbGVtZW50LCBvcmlnaW4sIG9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMob3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIENsb3NlcyB0aGUgbWVudSBhbmQgZG9lcyB0aGUgbmVjZXNzYXJ5IGNsZWFudXAuICovXG4gIHByaXZhdGUgX2Rlc3Ryb3lNZW51KCkge1xuICAgIGlmICghdGhpcy5fb3ZlcmxheVJlZiB8fCAhdGhpcy5tZW51T3Blbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1lbnUgPSB0aGlzLm1lbnU7XG5cbiAgICB0aGlzLl9jbG9zaW5nQWN0aW9uc1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX292ZXJsYXlSZWYuZGV0YWNoKCk7XG5cbiAgICBpZiAobWVudSBpbnN0YW5jZW9mIE1hdE1lbnUpIHtcbiAgICAgIG1lbnUuX3Jlc2V0QW5pbWF0aW9uKCk7XG5cbiAgICAgIGlmIChtZW51LmxhenlDb250ZW50KSB7XG4gICAgICAgIC8vIFdhaXQgZm9yIHRoZSBleGl0IGFuaW1hdGlvbiB0byBmaW5pc2ggYmVmb3JlIGRldGFjaGluZyB0aGUgY29udGVudC5cbiAgICAgICAgbWVudS5fYW5pbWF0aW9uRG9uZVxuICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgZmlsdGVyKGV2ZW50ID0+IGV2ZW50LnRvU3RhdGUgPT09ICd2b2lkJyksXG4gICAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgICAgLy8gSW50ZXJydXB0IGlmIHRoZSBjb250ZW50IGdvdCByZS1hdHRhY2hlZC5cbiAgICAgICAgICAgIHRha2VVbnRpbChtZW51LmxhenlDb250ZW50Ll9hdHRhY2hlZClcbiAgICAgICAgICApXG4gICAgICAgICAgLnN1YnNjcmliZSh7XG4gICAgICAgICAgICBuZXh0OiAoKSA9PiBtZW51LmxhenlDb250ZW50IS5kZXRhY2goKSxcbiAgICAgICAgICAgIC8vIE5vIG1hdHRlciB3aGV0aGVyIHRoZSBjb250ZW50IGdvdCByZS1hdHRhY2hlZCwgcmVzZXQgdGhlIG1lbnUuXG4gICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4gdGhpcy5fc2V0SXNNZW51T3BlbihmYWxzZSlcbiAgICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3NldElzTWVudU9wZW4oZmFsc2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zZXRJc01lbnVPcGVuKGZhbHNlKTtcblxuICAgICAgaWYgKG1lbnUubGF6eUNvbnRlbnQpIHtcbiAgICAgICAgbWVudS5sYXp5Q29udGVudC5kZXRhY2goKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9yZXN0b3JlRm9jdXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBzZXRzIHRoZSBtZW51IHN0YXRlIHRvIG9wZW4gYW5kIGZvY3VzZXMgdGhlIGZpcnN0IGl0ZW0gaWZcbiAgICogdGhlIG1lbnUgd2FzIG9wZW5lZCB2aWEgdGhlIGtleWJvYXJkLlxuICAgKi9cbiAgcHJpdmF0ZSBfaW5pdE1lbnUoKTogdm9pZCB7XG4gICAgdGhpcy5tZW51LnBhcmVudE1lbnUgPSB0aGlzLnRyaWdnZXJzU3VibWVudSgpID8gdGhpcy5fcGFyZW50TWVudSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lbnUuZGlyZWN0aW9uID0gdGhpcy5kaXI7XG4gICAgdGhpcy5fc2V0TWVudUVsZXZhdGlvbigpO1xuICAgIHRoaXMuX3NldElzTWVudU9wZW4odHJ1ZSk7XG4gICAgdGhpcy5tZW51LmZvY3VzRmlyc3RJdGVtKHRoaXMuX29wZW5lZEJ5IHx8ICdwcm9ncmFtJyk7XG4gIH1cblxuICAvKiogVXBkYXRlcyB0aGUgbWVudSBlbGV2YXRpb24gYmFzZWQgb24gdGhlIGFtb3VudCBvZiBwYXJlbnQgbWVudXMgdGhhdCBpdCBoYXMuICovXG4gIHByaXZhdGUgX3NldE1lbnVFbGV2YXRpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubWVudS5zZXRFbGV2YXRpb24pIHtcbiAgICAgIGxldCBkZXB0aCA9IDA7XG4gICAgICBsZXQgcGFyZW50TWVudSA9IHRoaXMubWVudS5wYXJlbnRNZW51O1xuXG4gICAgICB3aGlsZSAocGFyZW50TWVudSkge1xuICAgICAgICBkZXB0aCsrO1xuICAgICAgICBwYXJlbnRNZW51ID0gcGFyZW50TWVudS5wYXJlbnRNZW51O1xuICAgICAgfVxuXG4gICAgICB0aGlzLm1lbnUuc2V0RWxldmF0aW9uKGRlcHRoKTtcbiAgICB9XG4gIH1cblxuICAvKiogUmVzdG9yZXMgZm9jdXMgdG8gdGhlIGVsZW1lbnQgdGhhdCB3YXMgZm9jdXNlZCBiZWZvcmUgdGhlIG1lbnUgd2FzIG9wZW4uICovXG4gIHByaXZhdGUgX3Jlc3RvcmVGb2N1cygpIHtcbiAgICAvLyBXZSBzaG91bGQgcmVzZXQgZm9jdXMgaWYgdGhlIHVzZXIgaXMgbmF2aWdhdGluZyB1c2luZyBhIGtleWJvYXJkIG9yXG4gICAgLy8gaWYgd2UgaGF2ZSBhIHRvcC1sZXZlbCB0cmlnZ2VyIHdoaWNoIG1pZ2h0IGNhdXNlIGZvY3VzIHRvIGJlIGxvc3RcbiAgICAvLyB3aGVuIGNsaWNraW5nIG9uIHRoZSBiYWNrZHJvcC5cbiAgICBpZiAodGhpcy5yZXN0b3JlRm9jdXMpIHtcbiAgICAgIGlmICghdGhpcy5fb3BlbmVkQnkpIHtcbiAgICAgICAgLy8gTm90ZSB0aGF0IHRoZSBmb2N1cyBzdHlsZSB3aWxsIHNob3cgdXAgYm90aCBmb3IgYHByb2dyYW1gIGFuZFxuICAgICAgICAvLyBga2V5Ym9hcmRgIHNvIHdlIGRvbid0IGhhdmUgdG8gc3BlY2lmeSB3aGljaCBvbmUgaXQgaXMuXG4gICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMudHJpZ2dlcnNTdWJtZW51KCkpIHtcbiAgICAgICAgdGhpcy5mb2N1cyh0aGlzLl9vcGVuZWRCeSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fb3BlbmVkQnkgPSBudWxsO1xuICB9XG5cbiAgLy8gc2V0IHN0YXRlIHJhdGhlciB0aGFuIHRvZ2dsZSB0byBzdXBwb3J0IHRyaWdnZXJzIHNoYXJpbmcgYSBtZW51XG4gIHByaXZhdGUgX3NldElzTWVudU9wZW4oaXNPcGVuOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fbWVudU9wZW4gPSBpc09wZW47XG4gICAgdGhpcy5fbWVudU9wZW4gPyB0aGlzLm1lbnVPcGVuZWQuZW1pdCgpIDogdGhpcy5tZW51Q2xvc2VkLmVtaXQoKTtcblxuICAgIGlmICh0aGlzLnRyaWdnZXJzU3VibWVudSgpKSB7XG4gICAgICB0aGlzLl9tZW51SXRlbUluc3RhbmNlLl9oaWdobGlnaHRlZCA9IGlzT3BlbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgY2hlY2tzIHRoYXQgYSB2YWxpZCBpbnN0YW5jZSBvZiBNYXRNZW51IGhhcyBiZWVuIHBhc3NlZCBpbnRvXG4gICAqIG1hdE1lbnVUcmlnZ2VyRm9yLiBJZiBub3QsIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24uXG4gICAqL1xuICBwcml2YXRlIF9jaGVja01lbnUoKSB7XG4gICAgaWYgKCF0aGlzLm1lbnUpIHtcbiAgICAgIHRocm93TWF0TWVudU1pc3NpbmdFcnJvcigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBjcmVhdGVzIHRoZSBvdmVybGF5IGZyb20gdGhlIHByb3ZpZGVkIG1lbnUncyB0ZW1wbGF0ZSBhbmQgc2F2ZXMgaXRzXG4gICAqIE92ZXJsYXlSZWYgc28gdGhhdCBpdCBjYW4gYmUgYXR0YWNoZWQgdG8gdGhlIERPTSB3aGVuIG9wZW5NZW51IGlzIGNhbGxlZC5cbiAgICovXG4gIHByaXZhdGUgX2NyZWF0ZU92ZXJsYXkoKTogT3ZlcmxheVJlZiB7XG4gICAgaWYgKCF0aGlzLl9vdmVybGF5UmVmKSB7XG4gICAgICBjb25zdCBjb25maWcgPSB0aGlzLl9nZXRPdmVybGF5Q29uZmlnKCk7XG4gICAgICB0aGlzLl9zdWJzY3JpYmVUb1Bvc2l0aW9ucyhjb25maWcucG9zaXRpb25TdHJhdGVneSBhcyBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kpO1xuICAgICAgdGhpcy5fb3ZlcmxheVJlZiA9IHRoaXMuX292ZXJsYXkuY3JlYXRlKGNvbmZpZyk7XG5cbiAgICAgIC8vIENvbnN1bWUgdGhlIGBrZXlkb3duRXZlbnRzYCBpbiBvcmRlciB0byBwcmV2ZW50IHRoZW0gZnJvbSBnb2luZyB0byBhbm90aGVyIG92ZXJsYXkuXG4gICAgICAvLyBJZGVhbGx5IHdlJ2QgYWxzbyBoYXZlIG91ciBrZXlib2FyZCBldmVudCBsb2dpYyBpbiBoZXJlLCBob3dldmVyIGRvaW5nIHNvIHdpbGxcbiAgICAgIC8vIGJyZWFrIGFueWJvZHkgdGhhdCBtYXkgaGF2ZSBpbXBsZW1lbnRlZCB0aGUgYE1hdE1lbnVQYW5lbGAgdGhlbXNlbHZlcy5cbiAgICAgIHRoaXMuX292ZXJsYXlSZWYua2V5ZG93bkV2ZW50cygpLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9vdmVybGF5UmVmO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGJ1aWxkcyB0aGUgY29uZmlndXJhdGlvbiBvYmplY3QgbmVlZGVkIHRvIGNyZWF0ZSB0aGUgb3ZlcmxheSwgdGhlIE92ZXJsYXlTdGF0ZS5cbiAgICogQHJldHVybnMgT3ZlcmxheUNvbmZpZ1xuICAgKi9cbiAgcHJpdmF0ZSBfZ2V0T3ZlcmxheUNvbmZpZygpOiBPdmVybGF5Q29uZmlnIHtcbiAgICByZXR1cm4gbmV3IE92ZXJsYXlDb25maWcoe1xuICAgICAgcG9zaXRpb25TdHJhdGVneTogdGhpcy5fb3ZlcmxheS5wb3NpdGlvbigpXG4gICAgICAgICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8odGhpcy5fZWxlbWVudClcbiAgICAgICAgICAud2l0aExvY2tlZFBvc2l0aW9uKClcbiAgICAgICAgICAud2l0aFRyYW5zZm9ybU9yaWdpbk9uKCcubWF0LW1lbnUtcGFuZWwsIC5tYXQtbWRjLW1lbnUtcGFuZWwnKSxcbiAgICAgIGJhY2tkcm9wQ2xhc3M6IHRoaXMubWVudS5iYWNrZHJvcENsYXNzIHx8ICdjZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcCcsXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5fc2Nyb2xsU3RyYXRlZ3koKSxcbiAgICAgIGRpcmVjdGlvbjogdGhpcy5fZGlyXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVucyB0byBjaGFuZ2VzIGluIHRoZSBwb3NpdGlvbiBvZiB0aGUgb3ZlcmxheSBhbmQgc2V0cyB0aGUgY29ycmVjdCBjbGFzc2VzXG4gICAqIG9uIHRoZSBtZW51IGJhc2VkIG9uIHRoZSBuZXcgcG9zaXRpb24uIFRoaXMgZW5zdXJlcyB0aGUgYW5pbWF0aW9uIG9yaWdpbiBpcyBhbHdheXNcbiAgICogY29ycmVjdCwgZXZlbiBpZiBhIGZhbGxiYWNrIHBvc2l0aW9uIGlzIHVzZWQgZm9yIHRoZSBvdmVybGF5LlxuICAgKi9cbiAgcHJpdmF0ZSBfc3Vic2NyaWJlVG9Qb3NpdGlvbnMocG9zaXRpb246IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSk6IHZvaWQge1xuICAgIGlmICh0aGlzLm1lbnUuc2V0UG9zaXRpb25DbGFzc2VzKSB7XG4gICAgICBwb3NpdGlvbi5wb3NpdGlvbkNoYW5nZXMuc3Vic2NyaWJlKGNoYW5nZSA9PiB7XG4gICAgICAgIGNvbnN0IHBvc1g6IE1lbnVQb3NpdGlvblggPSBjaGFuZ2UuY29ubmVjdGlvblBhaXIub3ZlcmxheVggPT09ICdzdGFydCcgPyAnYWZ0ZXInIDogJ2JlZm9yZSc7XG4gICAgICAgIGNvbnN0IHBvc1k6IE1lbnVQb3NpdGlvblkgPSBjaGFuZ2UuY29ubmVjdGlvblBhaXIub3ZlcmxheVkgPT09ICd0b3AnID8gJ2JlbG93JyA6ICdhYm92ZSc7XG5cbiAgICAgICAgdGhpcy5tZW51LnNldFBvc2l0aW9uQ2xhc3NlcyEocG9zWCwgcG9zWSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgYXBwcm9wcmlhdGUgcG9zaXRpb25zIG9uIGEgcG9zaXRpb24gc3RyYXRlZ3lcbiAgICogc28gdGhlIG92ZXJsYXkgY29ubmVjdHMgd2l0aCB0aGUgdHJpZ2dlciBjb3JyZWN0bHkuXG4gICAqIEBwYXJhbSBwb3NpdGlvblN0cmF0ZWd5IFN0cmF0ZWd5IHdob3NlIHBvc2l0aW9uIHRvIHVwZGF0ZS5cbiAgICovXG4gIHByaXZhdGUgX3NldFBvc2l0aW9uKHBvc2l0aW9uU3RyYXRlZ3k6IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSkge1xuICAgIGxldCBbb3JpZ2luWCwgb3JpZ2luRmFsbGJhY2tYXTogSG9yaXpvbnRhbENvbm5lY3Rpb25Qb3NbXSA9XG4gICAgICAgIHRoaXMubWVudS54UG9zaXRpb24gPT09ICdiZWZvcmUnID8gWydlbmQnLCAnc3RhcnQnXSA6IFsnc3RhcnQnLCAnZW5kJ107XG5cbiAgICBsZXQgW292ZXJsYXlZLCBvdmVybGF5RmFsbGJhY2tZXTogVmVydGljYWxDb25uZWN0aW9uUG9zW10gPVxuICAgICAgICB0aGlzLm1lbnUueVBvc2l0aW9uID09PSAnYWJvdmUnID8gWydib3R0b20nLCAndG9wJ10gOiBbJ3RvcCcsICdib3R0b20nXTtcblxuICAgIGxldCBbb3JpZ2luWSwgb3JpZ2luRmFsbGJhY2tZXSA9IFtvdmVybGF5WSwgb3ZlcmxheUZhbGxiYWNrWV07XG4gICAgbGV0IFtvdmVybGF5WCwgb3ZlcmxheUZhbGxiYWNrWF0gPSBbb3JpZ2luWCwgb3JpZ2luRmFsbGJhY2tYXTtcbiAgICBsZXQgb2Zmc2V0WSA9IDA7XG5cbiAgICBpZiAodGhpcy50cmlnZ2Vyc1N1Ym1lbnUoKSkge1xuICAgICAgLy8gV2hlbiB0aGUgbWVudSBpcyBhIHN1Yi1tZW51LCBpdCBzaG91bGQgYWx3YXlzIGFsaWduIGl0c2VsZlxuICAgICAgLy8gdG8gdGhlIGVkZ2VzIG9mIHRoZSB0cmlnZ2VyLCBpbnN0ZWFkIG9mIG92ZXJsYXBwaW5nIGl0LlxuICAgICAgb3ZlcmxheUZhbGxiYWNrWCA9IG9yaWdpblggPSB0aGlzLm1lbnUueFBvc2l0aW9uID09PSAnYmVmb3JlJyA/ICdzdGFydCcgOiAnZW5kJztcbiAgICAgIG9yaWdpbkZhbGxiYWNrWCA9IG92ZXJsYXlYID0gb3JpZ2luWCA9PT0gJ2VuZCcgPyAnc3RhcnQnIDogJ2VuZCc7XG4gICAgICBvZmZzZXRZID0gb3ZlcmxheVkgPT09ICdib3R0b20nID8gTUVOVV9QQU5FTF9UT1BfUEFERElORyA6IC1NRU5VX1BBTkVMX1RPUF9QQURESU5HO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMubWVudS5vdmVybGFwVHJpZ2dlcikge1xuICAgICAgb3JpZ2luWSA9IG92ZXJsYXlZID09PSAndG9wJyA/ICdib3R0b20nIDogJ3RvcCc7XG4gICAgICBvcmlnaW5GYWxsYmFja1kgPSBvdmVybGF5RmFsbGJhY2tZID09PSAndG9wJyA/ICdib3R0b20nIDogJ3RvcCc7XG4gICAgfVxuXG4gICAgcG9zaXRpb25TdHJhdGVneS53aXRoUG9zaXRpb25zKFtcbiAgICAgIHtvcmlnaW5YLCBvcmlnaW5ZLCBvdmVybGF5WCwgb3ZlcmxheVksIG9mZnNldFl9LFxuICAgICAge29yaWdpblg6IG9yaWdpbkZhbGxiYWNrWCwgb3JpZ2luWSwgb3ZlcmxheVg6IG92ZXJsYXlGYWxsYmFja1gsIG92ZXJsYXlZLCBvZmZzZXRZfSxcbiAgICAgIHtcbiAgICAgICAgb3JpZ2luWCxcbiAgICAgICAgb3JpZ2luWTogb3JpZ2luRmFsbGJhY2tZLFxuICAgICAgICBvdmVybGF5WCxcbiAgICAgICAgb3ZlcmxheVk6IG92ZXJsYXlGYWxsYmFja1ksXG4gICAgICAgIG9mZnNldFk6IC1vZmZzZXRZXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBvcmlnaW5YOiBvcmlnaW5GYWxsYmFja1gsXG4gICAgICAgIG9yaWdpblk6IG9yaWdpbkZhbGxiYWNrWSxcbiAgICAgICAgb3ZlcmxheVg6IG92ZXJsYXlGYWxsYmFja1gsXG4gICAgICAgIG92ZXJsYXlZOiBvdmVybGF5RmFsbGJhY2tZLFxuICAgICAgICBvZmZzZXRZOiAtb2Zmc2V0WVxuICAgICAgfVxuICAgIF0pO1xuICB9XG5cbiAgLyoqIFJldHVybnMgYSBzdHJlYW0gdGhhdCBlbWl0cyB3aGVuZXZlciBhbiBhY3Rpb24gdGhhdCBzaG91bGQgY2xvc2UgdGhlIG1lbnUgb2NjdXJzLiAqL1xuICBwcml2YXRlIF9tZW51Q2xvc2luZ0FjdGlvbnMoKSB7XG4gICAgY29uc3QgYmFja2Ryb3AgPSB0aGlzLl9vdmVybGF5UmVmIS5iYWNrZHJvcENsaWNrKCk7XG4gICAgY29uc3QgZGV0YWNobWVudHMgPSB0aGlzLl9vdmVybGF5UmVmIS5kZXRhY2htZW50cygpO1xuICAgIGNvbnN0IHBhcmVudENsb3NlID0gdGhpcy5fcGFyZW50TWVudSA/IHRoaXMuX3BhcmVudE1lbnUuY2xvc2VkIDogb2JzZXJ2YWJsZU9mKCk7XG4gICAgY29uc3QgaG92ZXIgPSB0aGlzLl9wYXJlbnRNZW51ID8gdGhpcy5fcGFyZW50TWVudS5faG92ZXJlZCgpLnBpcGUoXG4gICAgICBmaWx0ZXIoYWN0aXZlID0+IGFjdGl2ZSAhPT0gdGhpcy5fbWVudUl0ZW1JbnN0YW5jZSksXG4gICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5fbWVudU9wZW4pXG4gICAgKSA6IG9ic2VydmFibGVPZigpO1xuXG4gICAgcmV0dXJuIG1lcmdlKGJhY2tkcm9wLCBwYXJlbnRDbG9zZSwgaG92ZXIsIGRldGFjaG1lbnRzKTtcbiAgfVxuXG4gIC8qKiBIYW5kbGVzIG1vdXNlIHByZXNzZXMgb24gdGhlIHRyaWdnZXIuICovXG4gIF9oYW5kbGVNb3VzZWRvd24oZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIWlzRmFrZU1vdXNlZG93bkZyb21TY3JlZW5SZWFkZXIoZXZlbnQpKSB7XG4gICAgICAvLyBTaW5jZSByaWdodCBvciBtaWRkbGUgYnV0dG9uIGNsaWNrcyB3b24ndCB0cmlnZ2VyIHRoZSBgY2xpY2tgIGV2ZW50LFxuICAgICAgLy8gd2Ugc2hvdWxkbid0IGNvbnNpZGVyIHRoZSBtZW51IGFzIG9wZW5lZCBieSBtb3VzZSBpbiB0aG9zZSBjYXNlcy5cbiAgICAgIHRoaXMuX29wZW5lZEJ5ID0gZXZlbnQuYnV0dG9uID09PSAwID8gJ21vdXNlJyA6IG51bGw7XG5cbiAgICAgIC8vIFNpbmNlIGNsaWNraW5nIG9uIHRoZSB0cmlnZ2VyIHdvbid0IGNsb3NlIHRoZSBtZW51IGlmIGl0IG9wZW5zIGEgc3ViLW1lbnUsXG4gICAgICAvLyB3ZSBzaG91bGQgcHJldmVudCBmb2N1cyBmcm9tIG1vdmluZyBvbnRvIGl0IHZpYSBjbGljayB0byBhdm9pZCB0aGVcbiAgICAgIC8vIGhpZ2hsaWdodCBmcm9tIGxpbmdlcmluZyBvbiB0aGUgbWVudSBpdGVtLlxuICAgICAgaWYgKHRoaXMudHJpZ2dlcnNTdWJtZW51KCkpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogSGFuZGxlcyBrZXkgcHJlc3NlcyBvbiB0aGUgdHJpZ2dlci4gKi9cbiAgX2hhbmRsZUtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcblxuICAgIGlmICh0aGlzLnRyaWdnZXJzU3VibWVudSgpICYmIChcbiAgICAgICAgICAgIChrZXlDb2RlID09PSBSSUdIVF9BUlJPVyAmJiB0aGlzLmRpciA9PT0gJ2x0cicpIHx8XG4gICAgICAgICAgICAoa2V5Q29kZSA9PT0gTEVGVF9BUlJPVyAmJiB0aGlzLmRpciA9PT0gJ3J0bCcpKSkge1xuICAgICAgdGhpcy5vcGVuTWVudSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBIYW5kbGVzIGNsaWNrIGV2ZW50cyBvbiB0aGUgdHJpZ2dlci4gKi9cbiAgX2hhbmRsZUNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMudHJpZ2dlcnNTdWJtZW51KCkpIHtcbiAgICAgIC8vIFN0b3AgZXZlbnQgcHJvcGFnYXRpb24gdG8gYXZvaWQgY2xvc2luZyB0aGUgcGFyZW50IG1lbnUuXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMub3Blbk1lbnUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b2dnbGVNZW51KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEhhbmRsZXMgdGhlIGNhc2VzIHdoZXJlIHRoZSB1c2VyIGhvdmVycyBvdmVyIHRoZSB0cmlnZ2VyLiAqL1xuICBwcml2YXRlIF9oYW5kbGVIb3ZlcigpIHtcbiAgICAvLyBTdWJzY3JpYmUgdG8gY2hhbmdlcyBpbiB0aGUgaG92ZXJlZCBpdGVtIGluIG9yZGVyIHRvIHRvZ2dsZSB0aGUgcGFuZWwuXG4gICAgaWYgKCF0aGlzLnRyaWdnZXJzU3VibWVudSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5faG92ZXJTdWJzY3JpcHRpb24gPSB0aGlzLl9wYXJlbnRNZW51Ll9ob3ZlcmVkKClcbiAgICAgIC8vIFNpbmNlIHdlIG1pZ2h0IGhhdmUgbXVsdGlwbGUgY29tcGV0aW5nIHRyaWdnZXJzIGZvciB0aGUgc2FtZSBtZW51IChlLmcuIGEgc3ViLW1lbnVcbiAgICAgIC8vIHdpdGggZGlmZmVyZW50IGRhdGEgYW5kIHRyaWdnZXJzKSwgd2UgaGF2ZSB0byBkZWxheSBpdCBieSBhIHRpY2sgdG8gZW5zdXJlIHRoYXRcbiAgICAgIC8vIGl0IHdvbid0IGJlIGNsb3NlZCBpbW1lZGlhdGVseSBhZnRlciBpdCBpcyBvcGVuZWQuXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKGFjdGl2ZSA9PiBhY3RpdmUgPT09IHRoaXMuX21lbnVJdGVtSW5zdGFuY2UgJiYgIWFjdGl2ZS5kaXNhYmxlZCksXG4gICAgICAgIGRlbGF5KDAsIGFzYXBTY2hlZHVsZXIpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5fb3BlbmVkQnkgPSAnbW91c2UnO1xuXG4gICAgICAgIC8vIElmIHRoZSBzYW1lIG1lbnUgaXMgdXNlZCBiZXR3ZWVuIG11bHRpcGxlIHRyaWdnZXJzLCBpdCBtaWdodCBzdGlsbCBiZSBhbmltYXRpbmdcbiAgICAgICAgLy8gd2hpbGUgdGhlIG5ldyB0cmlnZ2VyIHRyaWVzIHRvIHJlLW9wZW4gaXQuIFdhaXQgZm9yIHRoZSBhbmltYXRpb24gdG8gZmluaXNoXG4gICAgICAgIC8vIGJlZm9yZSBkb2luZyBzby4gQWxzbyBpbnRlcnJ1cHQgaWYgdGhlIHVzZXIgbW92ZXMgdG8gYW5vdGhlciBpdGVtLlxuICAgICAgICBpZiAodGhpcy5tZW51IGluc3RhbmNlb2YgTWF0TWVudSAmJiB0aGlzLm1lbnUuX2lzQW5pbWF0aW5nKSB7XG4gICAgICAgICAgLy8gV2UgbmVlZCB0aGUgYGRlbGF5KDApYCBoZXJlIGluIG9yZGVyIHRvIGF2b2lkXG4gICAgICAgICAgLy8gJ2NoYW5nZWQgYWZ0ZXIgY2hlY2tlZCcgZXJyb3JzIGluIHNvbWUgY2FzZXMuIFNlZSAjMTIxOTQuXG4gICAgICAgICAgdGhpcy5tZW51Ll9hbmltYXRpb25Eb25lXG4gICAgICAgICAgICAucGlwZSh0YWtlKDEpLCBkZWxheSgwLCBhc2FwU2NoZWR1bGVyKSwgdGFrZVVudGlsKHRoaXMuX3BhcmVudE1lbnUuX2hvdmVyZWQoKSkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMub3Blbk1lbnUoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5vcGVuTWVudSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKiBHZXRzIHRoZSBwb3J0YWwgdGhhdCBzaG91bGQgYmUgYXR0YWNoZWQgdG8gdGhlIG92ZXJsYXkuICovXG4gIHByaXZhdGUgX2dldFBvcnRhbCgpOiBUZW1wbGF0ZVBvcnRhbCB7XG4gICAgLy8gTm90ZSB0aGF0IHdlIGNhbiBhdm9pZCB0aGlzIGNoZWNrIGJ5IGtlZXBpbmcgdGhlIHBvcnRhbCBvbiB0aGUgbWVudSBwYW5lbC5cbiAgICAvLyBXaGlsZSBpdCB3b3VsZCBiZSBjbGVhbmVyLCB3ZSdkIGhhdmUgdG8gaW50cm9kdWNlIGFub3RoZXIgcmVxdWlyZWQgbWV0aG9kIG9uXG4gICAgLy8gYE1hdE1lbnVQYW5lbGAsIG1ha2luZyBpdCBoYXJkZXIgdG8gY29uc3VtZS5cbiAgICBpZiAoIXRoaXMuX3BvcnRhbCB8fCB0aGlzLl9wb3J0YWwudGVtcGxhdGVSZWYgIT09IHRoaXMubWVudS50ZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5fcG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMubWVudS50ZW1wbGF0ZVJlZiwgdGhpcy5fdmlld0NvbnRhaW5lclJlZik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3BvcnRhbDtcbiAgfVxuXG59XG4iXX0=