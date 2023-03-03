/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ESCAPE, UP_ARROW } from '@angular/cdk/keycodes';
import { Overlay, OverlayConfig, } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Inject, InjectionToken, Input, NgZone, Optional, Output, ViewChild, ViewContainerRef, ViewEncapsulation, } from '@angular/core';
import { DateAdapter, mixinColor, } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { merge, Subject, Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { MatCalendar } from './calendar';
import { matDatepickerAnimations } from './datepicker-animations';
import { createMissingDateImplError } from './datepicker-errors';
/** Used to generate a unique ID for each datepicker instance. */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './calendar';
import * as ɵngcc2 from '@angular/cdk/a11y';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from '@angular/material/dialog';
import * as ɵngcc5 from '@angular/cdk/overlay';
import * as ɵngcc6 from '@angular/material/core';
import * as ɵngcc7 from '@angular/cdk/bidi';
var datepickerUid = 0;
/** Injection token that determines the scroll handling while the calendar is open. */
export var MAT_DATEPICKER_SCROLL_STRATEGY = new InjectionToken('mat-datepicker-scroll-strategy');
/** @docs-private */
export function MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY(overlay) {
    return function () { return overlay.scrollStrategies.reposition(); };
}
/** @docs-private */
export var MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
    provide: MAT_DATEPICKER_SCROLL_STRATEGY,
    deps: [Overlay],
    useFactory: MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY,
};
// Boilerplate for applying mixins to MatDatepickerContent.
/** @docs-private */
var MatDatepickerContentBase = /** @class */ (function () {
    function MatDatepickerContentBase(_elementRef) {
        this._elementRef = _elementRef;
    }
    return MatDatepickerContentBase;
}());
var _MatDatepickerContentMixinBase = mixinColor(MatDatepickerContentBase);
/**
 * Component used as the content for the datepicker dialog and popup. We use this instead of using
 * MatCalendar directly as the content so we can control the initial focus. This also gives us a
 * place to put additional features of the popup that are not part of the calendar itself in the
 * future. (e.g. confirmation buttons).
 * @docs-private
 */
var MatDatepickerContent = /** @class */ (function (_super) {
    __extends(MatDatepickerContent, _super);
    function MatDatepickerContent(elementRef) {
        return _super.call(this, elementRef) || this;
    }
    MatDatepickerContent.prototype.ngAfterViewInit = function () {
        this._calendar.focusActiveCell();
    };
    /** @nocollapse */
    MatDatepickerContent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    MatDatepickerContent.propDecorators = {
        _calendar: [{ type: ViewChild, args: [MatCalendar,] }]
    };
MatDatepickerContent.ɵfac = function MatDatepickerContent_Factory(t) { return new (t || MatDatepickerContent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
MatDatepickerContent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatDatepickerContent, selectors: [["mat-datepicker-content"]], viewQuery: function MatDatepickerContent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(MatCalendar, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._calendar = _t.first);
    } }, hostAttrs: [1, "mat-datepicker-content"], hostVars: 3, hostBindings: function MatDatepickerContent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵupdateSyntheticHostBinding("@transformPanel", "enter");
        ɵngcc0.ɵɵclassProp("mat-datepicker-content-touch", ctx.datepicker.touchUi);
    } }, inputs: { color: "color" }, exportAs: ["matDatepickerContent"], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 1, vars: 11, consts: [["cdkTrapFocus", "", 3, "id", "ngClass", "startAt", "startView", "minDate", "maxDate", "dateFilter", "headerComponent", "selected", "dateClass", "selectedChange", "yearSelected", "monthSelected", "_userSelection"]], template: function MatDatepickerContent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "mat-calendar", 0);
        ɵngcc0.ɵɵlistener("selectedChange", function MatDatepickerContent_Template_mat_calendar_selectedChange_0_listener($event) { return ctx.datepicker.select($event); })("yearSelected", function MatDatepickerContent_Template_mat_calendar_yearSelected_0_listener($event) { return ctx.datepicker._selectYear($event); })("monthSelected", function MatDatepickerContent_Template_mat_calendar_monthSelected_0_listener($event) { return ctx.datepicker._selectMonth($event); })("_userSelection", function MatDatepickerContent_Template_mat_calendar__userSelection_0_listener() { return ctx.datepicker.close(); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.datepicker.id)("ngClass", ctx.datepicker.panelClass)("startAt", ctx.datepicker.startAt)("startView", ctx.datepicker.startView)("minDate", ctx.datepicker._minDate)("maxDate", ctx.datepicker._maxDate)("dateFilter", ctx.datepicker._dateFilter)("headerComponent", ctx.datepicker.calendarHeaderComponent)("selected", ctx.datepicker._selected)("dateClass", ctx.datepicker.dateClass)("@fadeInCalendar", "enter");
    } }, directives: [ɵngcc1.MatCalendar, ɵngcc2.CdkTrapFocus, ɵngcc3.NgClass], styles: [".mat-datepicker-content{display:block;border-radius:4px}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content-touch{display:block;max-height:80vh;overflow:auto;margin:-24px}.mat-datepicker-content-touch .mat-calendar{min-width:250px;min-height:312px;max-width:750px;max-height:788px}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-calendar{width:64vh;height:80vh}}@media all and (orientation: portrait){.mat-datepicker-content-touch .mat-calendar{width:80vw;height:100vw}}\n"], encapsulation: 2, data: { animation: [
            matDatepickerAnimations.transformPanel,
            matDatepickerAnimations.fadeInCalendar,
        ] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatDatepickerContent, [{
        type: Component,
        args: [{
                selector: 'mat-datepicker-content',
                template: "<mat-calendar cdkTrapFocus\n    [id]=\"datepicker.id\"\n    [ngClass]=\"datepicker.panelClass\"\n    [startAt]=\"datepicker.startAt\"\n    [startView]=\"datepicker.startView\"\n    [minDate]=\"datepicker._minDate\"\n    [maxDate]=\"datepicker._maxDate\"\n    [dateFilter]=\"datepicker._dateFilter\"\n    [headerComponent]=\"datepicker.calendarHeaderComponent\"\n    [selected]=\"datepicker._selected\"\n    [dateClass]=\"datepicker.dateClass\"\n    [@fadeInCalendar]=\"'enter'\"\n    (selectedChange)=\"datepicker.select($event)\"\n    (yearSelected)=\"datepicker._selectYear($event)\"\n    (monthSelected)=\"datepicker._selectMonth($event)\"\n    (_userSelection)=\"datepicker.close()\">\n</mat-calendar>\n",
                host: {
                    'class': 'mat-datepicker-content',
                    '[@transformPanel]': '"enter"',
                    '[class.mat-datepicker-content-touch]': 'datepicker.touchUi'
                },
                animations: [
                    matDatepickerAnimations.transformPanel,
                    matDatepickerAnimations.fadeInCalendar,
                ],
                exportAs: 'matDatepickerContent',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                inputs: ['color'],
                styles: [".mat-datepicker-content{display:block;border-radius:4px}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content-touch{display:block;max-height:80vh;overflow:auto;margin:-24px}.mat-datepicker-content-touch .mat-calendar{min-width:250px;min-height:312px;max-width:750px;max-height:788px}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-calendar{width:64vh;height:80vh}}@media all and (orientation: portrait){.mat-datepicker-content-touch .mat-calendar{width:80vw;height:100vw}}\n"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { _calendar: [{
            type: ViewChild,
            args: [MatCalendar]
        }] }); })();
    return MatDatepickerContent;
}(_MatDatepickerContentMixinBase));
export { MatDatepickerContent };
// TODO(mmalerba): We use a component instead of a directive here so the user can use implicit
// template reference variables (e.g. #d vs #d="matDatepicker"). We can change this to a directive
// if angular adds support for `exportAs: '$implicit'` on directives.
/** Component responsible for managing the datepicker popup/dialog. */
var MatDatepicker = /** @class */ (function () {
    function MatDatepicker(_dialog, _overlay, _ngZone, _viewContainerRef, scrollStrategy, _dateAdapter, _dir, _document) {
        this._dialog = _dialog;
        this._overlay = _overlay;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        this._document = _document;
        /** The view that the calendar should start in. */
        this.startView = 'month';
        this._touchUi = false;
        /**
         * Emits selected year in multiyear view.
         * This doesn't imply a change on the selected date.
         */
        this.yearSelected = new EventEmitter();
        /**
         * Emits selected month in year view.
         * This doesn't imply a change on the selected date.
         */
        this.monthSelected = new EventEmitter();
        /** Emits when the datepicker has been opened. */
        this.openedStream = new EventEmitter();
        /** Emits when the datepicker has been closed. */
        this.closedStream = new EventEmitter();
        this._opened = false;
        /** The id for the datepicker calendar. */
        this.id = "mat-datepicker-" + datepickerUid++;
        this._validSelected = null;
        /** The element that was focused before the datepicker was opened. */
        this._focusedElementBeforeOpen = null;
        /** Subscription to value changes in the associated input element. */
        this._inputSubscription = Subscription.EMPTY;
        /** Emits when the datepicker is disabled. */
        this._disabledChange = new Subject();
        /** Emits new selected date when selected date changes. */
        this._selectedChanged = new Subject();
        if (!this._dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
        }
        this._scrollStrategy = scrollStrategy;
    }
    Object.defineProperty(MatDatepicker.prototype, "startAt", {
        /** The date to open the calendar to initially. */
        get: function () {
            // If an explicit startAt is set we start there, otherwise we start at whatever the currently
            // selected value is.
            return this._startAt || (this._datepickerInput ? this._datepickerInput.value : null);
        },
        set: function (value) {
            this._startAt = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepicker.prototype, "color", {
        /** Color palette to use on the datepicker's calendar. */
        get: function () {
            return this._color ||
                (this._datepickerInput ? this._datepickerInput._getThemePalette() : undefined);
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepicker.prototype, "touchUi", {
        /**
         * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
         * than a popup and elements have more padding to allow for bigger touch targets.
         */
        get: function () { return this._touchUi; },
        set: function (value) {
            this._touchUi = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepicker.prototype, "disabled", {
        /** Whether the datepicker pop-up should be disabled. */
        get: function () {
            return this._disabled === undefined && this._datepickerInput ?
                this._datepickerInput.disabled : !!this._disabled;
        },
        set: function (value) {
            var newValue = coerceBooleanProperty(value);
            if (newValue !== this._disabled) {
                this._disabled = newValue;
                this._disabledChange.next(newValue);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepicker.prototype, "opened", {
        /** Whether the calendar is open. */
        get: function () { return this._opened; },
        set: function (value) { value ? this.open() : this.close(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepicker.prototype, "_selected", {
        /** The currently selected date. */
        get: function () { return this._validSelected; },
        set: function (value) { this._validSelected = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepicker.prototype, "_minDate", {
        /** The minimum selectable date. */
        get: function () {
            return this._datepickerInput && this._datepickerInput.min;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepicker.prototype, "_maxDate", {
        /** The maximum selectable date. */
        get: function () {
            return this._datepickerInput && this._datepickerInput.max;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepicker.prototype, "_dateFilter", {
        get: function () {
            return this._datepickerInput && this._datepickerInput._dateFilter;
        },
        enumerable: true,
        configurable: true
    });
    MatDatepicker.prototype.ngOnDestroy = function () {
        this.close();
        this._inputSubscription.unsubscribe();
        this._disabledChange.complete();
        if (this._popupRef) {
            this._popupRef.dispose();
            this._popupComponentRef = null;
        }
    };
    /** Selects the given date */
    MatDatepicker.prototype.select = function (date) {
        var oldValue = this._selected;
        this._selected = date;
        if (!this._dateAdapter.sameDate(oldValue, this._selected)) {
            this._selectedChanged.next(date);
        }
    };
    /** Emits the selected year in multiyear view */
    MatDatepicker.prototype._selectYear = function (normalizedYear) {
        this.yearSelected.emit(normalizedYear);
    };
    /** Emits selected month in year view */
    MatDatepicker.prototype._selectMonth = function (normalizedMonth) {
        this.monthSelected.emit(normalizedMonth);
    };
    /**
     * Register an input with this datepicker.
     * @param input The datepicker input to register with this datepicker.
     */
    MatDatepicker.prototype._registerInput = function (input) {
        var _this = this;
        if (this._datepickerInput) {
            throw Error('A MatDatepicker can only be associated with a single input.');
        }
        this._datepickerInput = input;
        this._inputSubscription =
            this._datepickerInput._valueChange.subscribe(function (value) { return _this._selected = value; });
    };
    /** Open the calendar. */
    MatDatepicker.prototype.open = function () {
        if (this._opened || this.disabled) {
            return;
        }
        if (!this._datepickerInput) {
            throw Error('Attempted to open an MatDatepicker with no associated input.');
        }
        if (this._document) {
            this._focusedElementBeforeOpen = this._document.activeElement;
        }
        this.touchUi ? this._openAsDialog() : this._openAsPopup();
        this._opened = true;
        this.openedStream.emit();
    };
    /** Close the calendar. */
    MatDatepicker.prototype.close = function () {
        var _this = this;
        if (!this._opened) {
            return;
        }
        if (this._popupRef && this._popupRef.hasAttached()) {
            this._popupRef.detach();
        }
        if (this._dialogRef) {
            this._dialogRef.close();
            this._dialogRef = null;
        }
        if (this._calendarPortal && this._calendarPortal.isAttached) {
            this._calendarPortal.detach();
        }
        var completeClose = function () {
            // The `_opened` could've been reset already if
            // we got two events in quick succession.
            if (_this._opened) {
                _this._opened = false;
                _this.closedStream.emit();
                _this._focusedElementBeforeOpen = null;
            }
        };
        if (this._focusedElementBeforeOpen &&
            typeof this._focusedElementBeforeOpen.focus === 'function') {
            // Because IE moves focus asynchronously, we can't count on it being restored before we've
            // marked the datepicker as closed. If the event fires out of sequence and the element that
            // we're refocusing opens the datepicker on focus, the user could be stuck with not being
            // able to close the calendar at all. We work around it by making the logic, that marks
            // the datepicker as closed, async as well.
            this._focusedElementBeforeOpen.focus();
            setTimeout(completeClose);
        }
        else {
            completeClose();
        }
    };
    /** Open the calendar as a dialog. */
    MatDatepicker.prototype._openAsDialog = function () {
        var _this = this;
        // Usually this would be handled by `open` which ensures that we can only have one overlay
        // open at a time, however since we reset the variables in async handlers some overlays
        // may slip through if the user opens and closes multiple times in quick succession (e.g.
        // by holding down the enter key).
        if (this._dialogRef) {
            this._dialogRef.close();
        }
        this._dialogRef = this._dialog.open(MatDatepickerContent, {
            direction: this._dir ? this._dir.value : 'ltr',
            viewContainerRef: this._viewContainerRef,
            panelClass: 'mat-datepicker-dialog',
        });
        this._dialogRef.afterClosed().subscribe(function () { return _this.close(); });
        this._dialogRef.componentInstance.datepicker = this;
        this._setColor();
    };
    /** Open the calendar as a popup. */
    MatDatepicker.prototype._openAsPopup = function () {
        var _this = this;
        if (!this._calendarPortal) {
            this._calendarPortal = new ComponentPortal(MatDatepickerContent, this._viewContainerRef);
        }
        if (!this._popupRef) {
            this._createPopup();
        }
        if (!this._popupRef.hasAttached()) {
            this._popupComponentRef = this._popupRef.attach(this._calendarPortal);
            this._popupComponentRef.instance.datepicker = this;
            this._setColor();
            // Update the position once the calendar has rendered.
            this._ngZone.onStable.asObservable().pipe(take(1)).subscribe(function () {
                _this._popupRef.updatePosition();
            });
        }
    };
    /** Create the popup. */
    MatDatepicker.prototype._createPopup = function () {
        var _this = this;
        var overlayConfig = new OverlayConfig({
            positionStrategy: this._createPopupPositionStrategy(),
            hasBackdrop: true,
            backdropClass: 'mat-overlay-transparent-backdrop',
            direction: this._dir,
            scrollStrategy: this._scrollStrategy(),
            panelClass: 'mat-datepicker-popup',
        });
        this._popupRef = this._overlay.create(overlayConfig);
        this._popupRef.overlayElement.setAttribute('role', 'dialog');
        merge(this._popupRef.backdropClick(), this._popupRef.detachments(), this._popupRef.keydownEvents().pipe(filter(function (event) {
            // Closing on alt + up is only valid when there's an input associated with the datepicker.
            return event.keyCode === ESCAPE ||
                (_this._datepickerInput && event.altKey && event.keyCode === UP_ARROW);
        }))).subscribe(function (event) {
            if (event) {
                event.preventDefault();
            }
            _this.close();
        });
    };
    /** Create the popup PositionStrategy. */
    MatDatepicker.prototype._createPopupPositionStrategy = function () {
        return this._overlay.position()
            .flexibleConnectedTo(this._datepickerInput.getConnectedOverlayOrigin())
            .withTransformOriginOn('.mat-datepicker-content')
            .withFlexibleDimensions(false)
            .withViewportMargin(8)
            .withLockedPosition()
            .withPositions([
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top'
            },
            {
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'bottom'
            },
            {
                originX: 'end',
                originY: 'bottom',
                overlayX: 'end',
                overlayY: 'top'
            },
            {
                originX: 'end',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'bottom'
            }
        ]);
    };
    /**
     * @param obj The object to check.
     * @returns The given object if it is both a date instance and valid, otherwise null.
     */
    MatDatepicker.prototype._getValidDateOrNull = function (obj) {
        return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
    };
    /** Passes the current theme color along to the calendar overlay. */
    MatDatepicker.prototype._setColor = function () {
        var color = this.color;
        if (this._popupComponentRef) {
            this._popupComponentRef.instance.color = color;
        }
        if (this._dialogRef) {
            this._dialogRef.componentInstance.color = color;
        }
    };
    /** @nocollapse */
    MatDatepicker.ctorParameters = function () { return [
        { type: MatDialog },
        { type: Overlay },
        { type: NgZone },
        { type: ViewContainerRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DATEPICKER_SCROLL_STRATEGY,] }] },
        { type: DateAdapter, decorators: [{ type: Optional }] },
        { type: Directionality, decorators: [{ type: Optional }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
    ]; };
    MatDatepicker.propDecorators = {
        calendarHeaderComponent: [{ type: Input }],
        startAt: [{ type: Input }],
        startView: [{ type: Input }],
        color: [{ type: Input }],
        touchUi: [{ type: Input }],
        disabled: [{ type: Input }],
        yearSelected: [{ type: Output }],
        monthSelected: [{ type: Output }],
        panelClass: [{ type: Input }],
        dateClass: [{ type: Input }],
        openedStream: [{ type: Output, args: ['opened',] }],
        closedStream: [{ type: Output, args: ['closed',] }],
        opened: [{ type: Input }]
    };
MatDatepicker.ɵfac = function MatDatepicker_Factory(t) { return new (t || MatDatepicker)(ɵngcc0.ɵɵdirectiveInject(ɵngcc4.MatDialog), ɵngcc0.ɵɵdirectiveInject(ɵngcc5.Overlay), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(MAT_DATEPICKER_SCROLL_STRATEGY), ɵngcc0.ɵɵdirectiveInject(ɵngcc6.DateAdapter, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc7.Directionality, 8), ɵngcc0.ɵɵdirectiveInject(DOCUMENT, 8)); };
MatDatepicker.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatDatepicker, selectors: [["mat-datepicker"]], inputs: { startView: "startView", startAt: "startAt", color: "color", touchUi: "touchUi", disabled: "disabled", opened: "opened", calendarHeaderComponent: "calendarHeaderComponent", panelClass: "panelClass", dateClass: "dateClass" }, outputs: { yearSelected: "yearSelected", monthSelected: "monthSelected", openedStream: "opened", closedStream: "closed" }, exportAs: ["matDatepicker"], decls: 0, vars: 0, template: function MatDatepicker_Template(rf, ctx) { }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatDatepicker, [{
        type: Component,
        args: [{
                selector: 'mat-datepicker',
                template: '',
                exportAs: 'matDatepicker',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc4.MatDialog }, { type: ɵngcc5.Overlay }, { type: ɵngcc0.NgZone }, { type: ɵngcc0.ViewContainerRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DATEPICKER_SCROLL_STRATEGY]
            }] }, { type: ɵngcc6.DateAdapter, decorators: [{
                type: Optional
            }] }, { type: ɵngcc7.Directionality, decorators: [{
                type: Optional
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { startView: [{
            type: Input
        }], yearSelected: [{
            type: Output
        }], monthSelected: [{
            type: Output
        }], openedStream: [{
            type: Output,
            args: ['opened']
        }], closedStream: [{
            type: Output,
            args: ['closed']
        }], startAt: [{
            type: Input
        }], color: [{
            type: Input
        }], touchUi: [{
            type: Input
        }], disabled: [{
            type: Input
        }], opened: [{
            type: Input
        }], calendarHeaderComponent: [{
            type: Input
        }], panelClass: [{
            type: Input
        }], dateClass: [{
            type: Input
        }] }); })();
    return MatDatepicker;
}());
export { MatDatepicker };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFlLHFCQUFxQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDMUUsT0FBTyxFQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQ0wsT0FBTyxFQUNQLGFBQWEsR0FJZCxNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBQyxlQUFlLEVBQWdCLE1BQU0scUJBQXFCLENBQUM7QUFDbkUsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUVULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLGNBQWMsRUFDZCxLQUFLLEVBQ0wsTUFBTSxFQUVOLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULGdCQUFnQixFQUNoQixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUdMLFdBQVcsRUFDWCxVQUFVLEdBRVgsTUFBTSx3QkFBd0IsQ0FBQztBQUNoQyxPQUFPLEVBQUMsU0FBUyxFQUFlLE1BQU0sMEJBQTBCLENBQUM7QUFDakUsT0FBTyxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ2xELE9BQU8sRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLFlBQVksQ0FBQztBQUN2QyxPQUFPLEVBQUMsdUJB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QU9xQjtRQU45QixRQUFRLEVBQUUsbEJBT2UsZ0JBL0ZuQixTQUFTO0tBd0ZXLExBeEZQLGdCQWpDbkIsT0FBTztBQTBIUCxRQUFRLEVBQUUsRUFBRSxaQXpIWixnQkFpQkEsTUFBTTtRQXlHTixRQUFRLEVBQUUsZUFBZSxqQ0F4R3pCLGdCQUlBLGdCQUFnQjttQkFxR2hCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLHNCQUMvQyxhQUFhLHJHQXJHYixnREFzUGEsTUFBTSxTQUFDLDhCQUE4QjtDQWpKbkMsaUJBQWlCLENBQUMsSUFBSSxrQkFDdEMsekNBZ0o0RCxnQkFqUDNELFdBQVcsdUJBa1BFLFFBQVE7QUFBTyxnQkFuUnRCLGNBQWMsdUJBb1JQLFFBQVE7QUFBTyxnREFDZixRQUFRLFlBQUksTUFBTSxTQUFDLFFBQVE7QUFBUTtBQUFVO0FBQ2pDLDBDQS9JeEIsS0FBSztBQUFLLDBCQUdWLEtBQUs7QUFDTiw0QkFXQyxLQUFLO0FBQUssd0JBR1YsS0FBSztBQUNOLDBCQWFDLEtBQUs7QUFDTiwyQkFPQyxLQUFLO0FBQ04sK0JBa0JDLE1BQU07QUFBSyxnQ0FNWCxNQUFNO0FBQUssNkJBR1gsS0FBSztBQUFLLDRCQUdWLEtBQUs7QUFBSywrQkFHVixNQUFNLFNBQUMsUUFBUTtBQUFPLCtCQUd0QixNQUFNLFNBQUMsUUFBUTtBQUFPLHlCQUl0QixLQUFLO0FBQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQU07QUFBQyxJQTRTUixvQkFBQztBQUNBLENBREEsQUF6WUQsSUF5WUM7QUFDRCxTQW5ZYSxhQUFhO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtEaXJlY3Rpb25hbGl0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHtCb29sZWFuSW5wdXQsIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7RVNDQVBFLCBVUF9BUlJPV30gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7XG4gIE92ZXJsYXksXG4gIE92ZXJsYXlDb25maWcsXG4gIE92ZXJsYXlSZWYsXG4gIFBvc2l0aW9uU3RyYXRlZ3ksXG4gIFNjcm9sbFN0cmF0ZWd5LFxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQge0NvbXBvbmVudFBvcnRhbCwgQ29tcG9uZW50VHlwZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgQ29tcG9uZW50UmVmLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDYW5Db2xvcixcbiAgQ2FuQ29sb3JDdG9yLFxuICBEYXRlQWRhcHRlcixcbiAgbWl4aW5Db2xvcixcbiAgVGhlbWVQYWxldHRlLFxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7TWF0RGlhbG9nLCBNYXREaWFsb2dSZWZ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQge21lcmdlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtmaWx0ZXIsIHRha2V9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7TWF0Q2FsZW5kYXJ9IGZyb20gJy4vY2FsZW5kYXInO1xuaW1wb3J0IHttYXREYXRlcGlja2VyQW5pbWF0aW9uc30gZnJvbSAnLi9kYXRlcGlja2VyLWFuaW1hdGlvbnMnO1xuaW1wb3J0IHtjcmVhdGVNaXNzaW5nRGF0ZUltcGxFcnJvcn0gZnJvbSAnLi9kYXRlcGlja2VyLWVycm9ycyc7XG5pbXBvcnQge01hdERhdGVwaWNrZXJJbnB1dH0gZnJvbSAnLi9kYXRlcGlja2VyLWlucHV0JztcbmltcG9ydCB7TWF0Q2FsZW5kYXJDZWxsQ3NzQ2xhc3Nlc30gZnJvbSAnLi9jYWxlbmRhci1ib2R5JztcblxuLyoqIFVzZWQgdG8gZ2VuZXJhdGUgYSB1bmlxdWUgSUQgZm9yIGVhY2ggZGF0ZXBpY2tlciBpbnN0YW5jZS4gKi9cbmxldCBkYXRlcGlja2VyVWlkID0gMDtcblxuLyoqIEluamVjdGlvbiB0b2tlbiB0aGF0IGRldGVybWluZXMgdGhlIHNjcm9sbCBoYW5kbGluZyB3aGlsZSB0aGUgY2FsZW5kYXIgaXMgb3Blbi4gKi9cbmV4cG9ydCBjb25zdCBNQVRfREFURVBJQ0tFUl9TQ1JPTExfU1RSQVRFR1kgPVxuICAgIG5ldyBJbmplY3Rpb25Ub2tlbjwoKSA9PiBTY3JvbGxTdHJhdGVneT4oJ21hdC1kYXRlcGlja2VyLXNjcm9sbC1zdHJhdGVneScpO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1BVF9EQVRFUElDS0VSX1NDUk9MTF9TVFJBVEVHWV9GQUNUT1JZKG92ZXJsYXk6IE92ZXJsYXkpOiAoKSA9PiBTY3JvbGxTdHJhdGVneSB7XG4gIHJldHVybiAoKSA9PiBvdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMucmVwb3NpdGlvbigpO1xufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNvbnN0IE1BVF9EQVRFUElDS0VSX1NDUk9MTF9TVFJBVEVHWV9GQUNUT1JZX1BST1ZJREVSID0ge1xuICBwcm92aWRlOiBNQVRfREFURVBJQ0tFUl9TQ1JPTExfU1RSQVRFR1ksXG4gIGRlcHM6IFtPdmVybGF5XSxcbiAgdXNlRmFjdG9yeTogTUFUX0RBVEVQSUNLRVJfU0NST0xMX1NUUkFURUdZX0ZBQ1RPUlksXG59O1xuXG4vLyBCb2lsZXJwbGF0ZSBmb3IgYXBwbHlpbmcgbWl4aW5zIHRvIE1hdERhdGVwaWNrZXJDb250ZW50LlxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmNsYXNzIE1hdERhdGVwaWNrZXJDb250ZW50QmFzZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyB9XG59XG5jb25zdCBfTWF0RGF0ZXBpY2tlckNvbnRlbnRNaXhpbkJhc2U6IENhbkNvbG9yQ3RvciAmIHR5cGVvZiBNYXREYXRlcGlja2VyQ29udGVudEJhc2UgPVxuICAgIG1peGluQ29sb3IoTWF0RGF0ZXBpY2tlckNvbnRlbnRCYXNlKTtcblxuLyoqXG4gKiBDb21wb25lbnQgdXNlZCBhcyB0aGUgY29udGVudCBmb3IgdGhlIGRhdGVwaWNrZXIgZGlhbG9nIGFuZCBwb3B1cC4gV2UgdXNlIHRoaXMgaW5zdGVhZCBvZiB1c2luZ1xuICogTWF0Q2FsZW5kYXIgZGlyZWN0bHkgYXMgdGhlIGNvbnRlbnQgc28gd2UgY2FuIGNvbnRyb2wgdGhlIGluaXRpYWwgZm9jdXMuIFRoaXMgYWxzbyBnaXZlcyB1cyBhXG4gKiBwbGFjZSB0byBwdXQgYWRkaXRpb25hbCBmZWF0dXJlcyBvZiB0aGUgcG9wdXAgdGhhdCBhcmUgbm90IHBhcnQgb2YgdGhlIGNhbGVuZGFyIGl0c2VsZiBpbiB0aGVcbiAqIGZ1dHVyZS4gKGUuZy4gY29uZmlybWF0aW9uIGJ1dHRvbnMpLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtZGF0ZXBpY2tlci1jb250ZW50JyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLWNvbnRlbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYXRlcGlja2VyLWNvbnRlbnQuY3NzJ10sXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnbWF0LWRhdGVwaWNrZXItY29udGVudCcsXG4gICAgJ1tAdHJhbnNmb3JtUGFuZWxdJzogJ1wiZW50ZXJcIicsXG4gICAgJ1tjbGFzcy5tYXQtZGF0ZXBpY2tlci1jb250ZW50LXRvdWNoXSc6ICdkYXRlcGlja2VyLnRvdWNoVWknLFxuICB9LFxuICBhbmltYXRpb25zOiBbXG4gICAgbWF0RGF0ZXBpY2tlckFuaW1hdGlvbnMudHJhbnNmb3JtUGFuZWwsXG4gICAgbWF0RGF0ZXBpY2tlckFuaW1hdGlvbnMuZmFkZUluQ2FsZW5kYXIsXG4gIF0sXG4gIGV4cG9ydEFzOiAnbWF0RGF0ZXBpY2tlckNvbnRlbnQnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaW5wdXRzOiBbJ2NvbG9yJ10sXG59KVxuZXhwb3J0IGNsYXNzIE1hdERhdGVwaWNrZXJDb250ZW50PEQ+IGV4dGVuZHMgX01hdERhdGVwaWNrZXJDb250ZW50TWl4aW5CYXNlXG4gIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgQ2FuQ29sb3Ige1xuXG4gIC8qKiBSZWZlcmVuY2UgdG8gdGhlIGludGVybmFsIGNhbGVuZGFyIGNvbXBvbmVudC4gKi9cbiAgQFZpZXdDaGlsZChNYXRDYWxlbmRhcikgX2NhbGVuZGFyOiBNYXRDYWxlbmRhcjxEPjtcblxuICAvKiogUmVmZXJlbmNlIHRvIHRoZSBkYXRlcGlja2VyIHRoYXQgY3JlYXRlZCB0aGUgb3ZlcmxheS4gKi9cbiAgZGF0ZXBpY2tlcjogTWF0RGF0ZXBpY2tlcjxEPjtcblxuICAvKiogV2hldGhlciB0aGUgZGF0ZXBpY2tlciBpcyBhYm92ZSBvciBiZWxvdyB0aGUgaW5wdXQuICovXG4gIF9pc0Fib3ZlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihlbGVtZW50UmVmKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9jYWxlbmRhci5mb2N1c0FjdGl2ZUNlbGwoKTtcbiAgfVxufVxuXG5cbi8vIFRPRE8obW1hbGVyYmEpOiBXZSB1c2UgYSBjb21wb25lbnQgaW5zdGVhZCBvZiBhIGRpcmVjdGl2ZSBoZXJlIHNvIHRoZSB1c2VyIGNhbiB1c2UgaW1wbGljaXRcbi8vIHRlbXBsYXRlIHJlZmVyZW5jZSB2YXJpYWJsZXMgKGUuZy4gI2QgdnMgI2Q9XCJtYXREYXRlcGlja2VyXCIpLiBXZSBjYW4gY2hhbmdlIHRoaXMgdG8gYSBkaXJlY3RpdmVcbi8vIGlmIGFuZ3VsYXIgYWRkcyBzdXBwb3J0IGZvciBgZXhwb3J0QXM6ICckaW1wbGljaXQnYCBvbiBkaXJlY3RpdmVzLlxuLyoqIENvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgbWFuYWdpbmcgdGhlIGRhdGVwaWNrZXIgcG9wdXAvZGlhbG9nLiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LWRhdGVwaWNrZXInLFxuICB0ZW1wbGF0ZTogJycsXG4gIGV4cG9ydEFzOiAnbWF0RGF0ZXBpY2tlcicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBNYXREYXRlcGlja2VyPEQ+IGltcGxlbWVudHMgT25EZXN0cm95LCBDYW5Db2xvciB7XG4gIHByaXZhdGUgX3Njcm9sbFN0cmF0ZWd5OiAoKSA9PiBTY3JvbGxTdHJhdGVneTtcblxuICAvKiogQW4gaW5wdXQgaW5kaWNhdGluZyB0aGUgdHlwZSBvZiB0aGUgY3VzdG9tIGhlYWRlciBjb21wb25lbnQgZm9yIHRoZSBjYWxlbmRhciwgaWYgc2V0LiAqL1xuICBASW5wdXQoKSBjYWxlbmRhckhlYWRlckNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxhbnk+O1xuXG4gIC8qKiBUaGUgZGF0ZSB0byBvcGVuIHRoZSBjYWxlbmRhciB0byBpbml0aWFsbHkuICovXG4gIEBJbnB1dCgpXG4gIGdldCBzdGFydEF0KCk6IEQgfCBudWxsIHtcbiAgICAvLyBJZiBhbiBleHBsaWNpdCBzdGFydEF0IGlzIHNldCB3ZSBzdGFydCB0aGVyZSwgb3RoZXJ3aXNlIHdlIHN0YXJ0IGF0IHdoYXRldmVyIHRoZSBjdXJyZW50bHlcbiAgICAvLyBzZWxlY3RlZCB2YWx1ZSBpcy5cbiAgICByZXR1cm4gdGhpcy5fc3RhcnRBdCB8fCAodGhpcy5fZGF0ZXBpY2tlcklucHV0ID8gdGhpcy5fZGF0ZXBpY2tlcklucHV0LnZhbHVlIDogbnVsbCk7XG4gIH1cbiAgc2V0IHN0YXJ0QXQodmFsdWU6IEQgfCBudWxsKSB7XG4gICAgdGhpcy5fc3RhcnRBdCA9IHRoaXMuX2dldFZhbGlkRGF0ZU9yTnVsbCh0aGlzLl9kYXRlQWRhcHRlci5kZXNlcmlhbGl6ZSh2YWx1ZSkpO1xuICB9XG4gIHByaXZhdGUgX3N0YXJ0QXQ6IEQgfCBudWxsO1xuXG4gIC8qKiBUaGUgdmlldyB0aGF0IHRoZSBjYWxlbmRhciBzaG91bGQgc3RhcnQgaW4uICovXG4gIEBJbnB1dCgpIHN0YXJ0VmlldzogJ21vbnRoJyB8ICd5ZWFyJyB8ICdtdWx0aS15ZWFyJyA9ICdtb250aCc7XG5cbiAgLyoqIENvbG9yIHBhbGV0dGUgdG8gdXNlIG9uIHRoZSBkYXRlcGlja2VyJ3MgY2FsZW5kYXIuICovXG4gIEBJbnB1dCgpXG4gIGdldCBjb2xvcigpOiBUaGVtZVBhbGV0dGUge1xuICAgIHJldHVybiB0aGlzLl9jb2xvciB8fFxuICAgICAgICAodGhpcy5fZGF0ZXBpY2tlcklucHV0ID8gdGhpcy5fZGF0ZXBpY2tlcklucHV0Ll9nZXRUaGVtZVBhbGV0dGUoKSA6IHVuZGVmaW5lZCk7XG4gIH1cbiAgc2V0IGNvbG9yKHZhbHVlOiBUaGVtZVBhbGV0dGUpIHtcbiAgICB0aGlzLl9jb2xvciA9IHZhbHVlO1xuICB9XG4gIF9jb2xvcjogVGhlbWVQYWxldHRlO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBjYWxlbmRhciBVSSBpcyBpbiB0b3VjaCBtb2RlLiBJbiB0b3VjaCBtb2RlIHRoZSBjYWxlbmRhciBvcGVucyBpbiBhIGRpYWxvZyByYXRoZXJcbiAgICogdGhhbiBhIHBvcHVwIGFuZCBlbGVtZW50cyBoYXZlIG1vcmUgcGFkZGluZyB0byBhbGxvdyBmb3IgYmlnZ2VyIHRvdWNoIHRhcmdldHMuXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgdG91Y2hVaSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3RvdWNoVWk7IH1cbiAgc2V0IHRvdWNoVWkodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl90b3VjaFVpID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF90b3VjaFVpID0gZmFsc2U7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGRhdGVwaWNrZXIgcG9wLXVwIHNob3VsZCBiZSBkaXNhYmxlZC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZCA9PT0gdW5kZWZpbmVkICYmIHRoaXMuX2RhdGVwaWNrZXJJbnB1dCA/XG4gICAgICAgIHRoaXMuX2RhdGVwaWNrZXJJbnB1dC5kaXNhYmxlZCA6ICEhdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuXG4gICAgaWYgKG5ld1ZhbHVlICE9PSB0aGlzLl9kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZGlzYWJsZWQgPSBuZXdWYWx1ZTtcbiAgICAgIHRoaXMuX2Rpc2FibGVkQ2hhbmdlLm5leHQobmV3VmFsdWUpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogRW1pdHMgc2VsZWN0ZWQgeWVhciBpbiBtdWx0aXllYXIgdmlldy5cbiAgICogVGhpcyBkb2Vzbid0IGltcGx5IGEgY2hhbmdlIG9uIHRoZSBzZWxlY3RlZCBkYXRlLlxuICAgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IHllYXJTZWxlY3RlZDogRXZlbnRFbWl0dGVyPEQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxEPigpO1xuXG4gIC8qKlxuICAgKiBFbWl0cyBzZWxlY3RlZCBtb250aCBpbiB5ZWFyIHZpZXcuXG4gICAqIFRoaXMgZG9lc24ndCBpbXBseSBhIGNoYW5nZSBvbiB0aGUgc2VsZWN0ZWQgZGF0ZS5cbiAgICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBtb250aFNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8RD4gPSBuZXcgRXZlbnRFbWl0dGVyPEQ+KCk7XG5cbiAgLyoqIENsYXNzZXMgdG8gYmUgcGFzc2VkIHRvIHRoZSBkYXRlIHBpY2tlciBwYW5lbC4gU3VwcG9ydHMgdGhlIHNhbWUgc3ludGF4IGFzIGBuZ0NsYXNzYC4gKi9cbiAgQElucHV0KCkgcGFuZWxDbGFzczogc3RyaW5nIHwgc3RyaW5nW107XG5cbiAgLyoqIEZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gYWRkIGN1c3RvbSBDU1MgY2xhc3NlcyB0byBkYXRlcy4gKi9cbiAgQElucHV0KCkgZGF0ZUNsYXNzOiAoZGF0ZTogRCkgPT4gTWF0Q2FsZW5kYXJDZWxsQ3NzQ2xhc3NlcztcblxuICAvKiogRW1pdHMgd2hlbiB0aGUgZGF0ZXBpY2tlciBoYXMgYmVlbiBvcGVuZWQuICovXG4gIEBPdXRwdXQoJ29wZW5lZCcpIG9wZW5lZFN0cmVhbTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBkYXRlcGlja2VyIGhhcyBiZWVuIGNsb3NlZC4gKi9cbiAgQE91dHB1dCgnY2xvc2VkJykgY2xvc2VkU3RyZWFtOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cblxuICAvKiogV2hldGhlciB0aGUgY2FsZW5kYXIgaXMgb3Blbi4gKi9cbiAgQElucHV0KClcbiAgZ2V0IG9wZW5lZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX29wZW5lZDsgfVxuICBzZXQgb3BlbmVkKHZhbHVlOiBib29sZWFuKSB7IHZhbHVlID8gdGhpcy5vcGVuKCkgOiB0aGlzLmNsb3NlKCk7IH1cbiAgcHJpdmF0ZSBfb3BlbmVkID0gZmFsc2U7XG5cbiAgLyoqIFRoZSBpZCBmb3IgdGhlIGRhdGVwaWNrZXIgY2FsZW5kYXIuICovXG4gIGlkOiBzdHJpbmcgPSBgbWF0LWRhdGVwaWNrZXItJHtkYXRlcGlja2VyVWlkKyt9YDtcblxuICAvKiogVGhlIGN1cnJlbnRseSBzZWxlY3RlZCBkYXRlLiAqL1xuICBnZXQgX3NlbGVjdGVkKCk6IEQgfCBudWxsIHsgcmV0dXJuIHRoaXMuX3ZhbGlkU2VsZWN0ZWQ7IH1cbiAgc2V0IF9zZWxlY3RlZCh2YWx1ZTogRCB8IG51bGwpIHsgdGhpcy5fdmFsaWRTZWxlY3RlZCA9IHZhbHVlOyB9XG4gIHByaXZhdGUgX3ZhbGlkU2VsZWN0ZWQ6IEQgfCBudWxsID0gbnVsbDtcblxuICAvKiogVGhlIG1pbmltdW0gc2VsZWN0YWJsZSBkYXRlLiAqL1xuICBnZXQgX21pbkRhdGUoKTogRCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9kYXRlcGlja2VySW5wdXQgJiYgdGhpcy5fZGF0ZXBpY2tlcklucHV0Lm1pbjtcbiAgfVxuXG4gIC8qKiBUaGUgbWF4aW11bSBzZWxlY3RhYmxlIGRhdGUuICovXG4gIGdldCBfbWF4RGF0ZSgpOiBEIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGVwaWNrZXJJbnB1dCAmJiB0aGlzLl9kYXRlcGlja2VySW5wdXQubWF4O1xuICB9XG5cbiAgZ2V0IF9kYXRlRmlsdGVyKCk6IChkYXRlOiBEIHwgbnVsbCkgPT4gYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGVwaWNrZXJJbnB1dCAmJiB0aGlzLl9kYXRlcGlja2VySW5wdXQuX2RhdGVGaWx0ZXI7XG4gIH1cblxuICAvKiogQSByZWZlcmVuY2UgdG8gdGhlIG92ZXJsYXkgd2hlbiB0aGUgY2FsZW5kYXIgaXMgb3BlbmVkIGFzIGEgcG9wdXAuICovXG4gIF9wb3B1cFJlZjogT3ZlcmxheVJlZjtcblxuICAvKiogQSByZWZlcmVuY2UgdG8gdGhlIGRpYWxvZyB3aGVuIHRoZSBjYWxlbmRhciBpcyBvcGVuZWQgYXMgYSBkaWFsb2cuICovXG4gIHByaXZhdGUgX2RpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPE1hdERhdGVwaWNrZXJDb250ZW50PEQ+PiB8IG51bGw7XG5cbiAgLyoqIEEgcG9ydGFsIGNvbnRhaW5pbmcgdGhlIGNhbGVuZGFyIGZvciB0aGlzIGRhdGVwaWNrZXIuICovXG4gIHByaXZhdGUgX2NhbGVuZGFyUG9ydGFsOiBDb21wb25lbnRQb3J0YWw8TWF0RGF0ZXBpY2tlckNvbnRlbnQ8RD4+O1xuXG4gIC8qKiBSZWZlcmVuY2UgdG8gdGhlIGNvbXBvbmVudCBpbnN0YW50aWF0ZWQgaW4gcG9wdXAgbW9kZS4gKi9cbiAgcHJpdmF0ZSBfcG9wdXBDb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxNYXREYXRlcGlja2VyQ29udGVudDxEPj4gfCBudWxsO1xuXG4gIC8qKiBUaGUgZWxlbWVudCB0aGF0IHdhcyBmb2N1c2VkIGJlZm9yZSB0aGUgZGF0ZXBpY2tlciB3YXMgb3BlbmVkLiAqL1xuICBwcml2YXRlIF9mb2N1c2VkRWxlbWVudEJlZm9yZU9wZW46IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqIFN1YnNjcmlwdGlvbiB0byB2YWx1ZSBjaGFuZ2VzIGluIHRoZSBhc3NvY2lhdGVkIGlucHV0IGVsZW1lbnQuICovXG4gIHByaXZhdGUgX2lucHV0U3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG4gIC8qKiBUaGUgaW5wdXQgZWxlbWVudCB0aGlzIGRhdGVwaWNrZXIgaXMgYXNzb2NpYXRlZCB3aXRoLiAqL1xuICBfZGF0ZXBpY2tlcklucHV0OiBNYXREYXRlcGlja2VySW5wdXQ8RD47XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIGRhdGVwaWNrZXIgaXMgZGlzYWJsZWQuICovXG4gIHJlYWRvbmx5IF9kaXNhYmxlZENoYW5nZSA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgLyoqIEVtaXRzIG5ldyBzZWxlY3RlZCBkYXRlIHdoZW4gc2VsZWN0ZWQgZGF0ZSBjaGFuZ2VzLiAqL1xuICByZWFkb25seSBfc2VsZWN0ZWRDaGFuZ2VkID0gbmV3IFN1YmplY3Q8RD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kaWFsb2c6IE1hdERpYWxvZyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfb3ZlcmxheTogT3ZlcmxheSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgIEBJbmplY3QoTUFUX0RBVEVQSUNLRVJfU0NST0xMX1NUUkFURUdZKSBzY3JvbGxTdHJhdGVneTogYW55LFxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9kYXRlQWRhcHRlcjogRGF0ZUFkYXB0ZXI8RD4sXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX2RpcjogRGlyZWN0aW9uYWxpdHksXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnkpIHtcbiAgICBpZiAoIXRoaXMuX2RhdGVBZGFwdGVyKSB7XG4gICAgICB0aHJvdyBjcmVhdGVNaXNzaW5nRGF0ZUltcGxFcnJvcignRGF0ZUFkYXB0ZXInKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zY3JvbGxTdHJhdGVneSA9IHNjcm9sbFN0cmF0ZWd5O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5jbG9zZSgpO1xuICAgIHRoaXMuX2lucHV0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5fZGlzYWJsZWRDaGFuZ2UuY29tcGxldGUoKTtcblxuICAgIGlmICh0aGlzLl9wb3B1cFJlZikge1xuICAgICAgdGhpcy5fcG9wdXBSZWYuZGlzcG9zZSgpO1xuICAgICAgdGhpcy5fcG9wdXBDb21wb25lbnRSZWYgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBTZWxlY3RzIHRoZSBnaXZlbiBkYXRlICovXG4gIHNlbGVjdChkYXRlOiBEKTogdm9pZCB7XG4gICAgbGV0IG9sZFZhbHVlID0gdGhpcy5fc2VsZWN0ZWQ7XG4gICAgdGhpcy5fc2VsZWN0ZWQgPSBkYXRlO1xuICAgIGlmICghdGhpcy5fZGF0ZUFkYXB0ZXIuc2FtZURhdGUob2xkVmFsdWUsIHRoaXMuX3NlbGVjdGVkKSkge1xuICAgICAgdGhpcy5fc2VsZWN0ZWRDaGFuZ2VkLm5leHQoZGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEVtaXRzIHRoZSBzZWxlY3RlZCB5ZWFyIGluIG11bHRpeWVhciB2aWV3ICovXG4gIF9zZWxlY3RZZWFyKG5vcm1hbGl6ZWRZZWFyOiBEKTogdm9pZCB7XG4gICAgdGhpcy55ZWFyU2VsZWN0ZWQuZW1pdChub3JtYWxpemVkWWVhcik7XG4gIH1cblxuICAvKiogRW1pdHMgc2VsZWN0ZWQgbW9udGggaW4geWVhciB2aWV3ICovXG4gIF9zZWxlY3RNb250aChub3JtYWxpemVkTW9udGg6IEQpOiB2b2lkIHtcbiAgICB0aGlzLm1vbnRoU2VsZWN0ZWQuZW1pdChub3JtYWxpemVkTW9udGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGFuIGlucHV0IHdpdGggdGhpcyBkYXRlcGlja2VyLlxuICAgKiBAcGFyYW0gaW5wdXQgVGhlIGRhdGVwaWNrZXIgaW5wdXQgdG8gcmVnaXN0ZXIgd2l0aCB0aGlzIGRhdGVwaWNrZXIuXG4gICAqL1xuICBfcmVnaXN0ZXJJbnB1dChpbnB1dDogTWF0RGF0ZXBpY2tlcklucHV0PEQ+KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2RhdGVwaWNrZXJJbnB1dCkge1xuICAgICAgdGhyb3cgRXJyb3IoJ0EgTWF0RGF0ZXBpY2tlciBjYW4gb25seSBiZSBhc3NvY2lhdGVkIHdpdGggYSBzaW5nbGUgaW5wdXQuJyk7XG4gICAgfVxuICAgIHRoaXMuX2RhdGVwaWNrZXJJbnB1dCA9IGlucHV0O1xuICAgIHRoaXMuX2lucHV0U3Vic2NyaXB0aW9uID1cbiAgICAgICAgdGhpcy5fZGF0ZXBpY2tlcklucHV0Ll92YWx1ZUNoYW5nZS5zdWJzY3JpYmUoKHZhbHVlOiBEIHwgbnVsbCkgPT4gdGhpcy5fc2VsZWN0ZWQgPSB2YWx1ZSk7XG4gIH1cblxuICAvKiogT3BlbiB0aGUgY2FsZW5kYXIuICovXG4gIG9wZW4oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX29wZW5lZCB8fCB0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5fZGF0ZXBpY2tlcklucHV0KSB7XG4gICAgICB0aHJvdyBFcnJvcignQXR0ZW1wdGVkIHRvIG9wZW4gYW4gTWF0RGF0ZXBpY2tlciB3aXRoIG5vIGFzc29jaWF0ZWQgaW5wdXQuJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kb2N1bWVudCkge1xuICAgICAgdGhpcy5fZm9jdXNlZEVsZW1lbnRCZWZvcmVPcGVuID0gdGhpcy5fZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICB0aGlzLnRvdWNoVWkgPyB0aGlzLl9vcGVuQXNEaWFsb2coKSA6IHRoaXMuX29wZW5Bc1BvcHVwKCk7XG4gICAgdGhpcy5fb3BlbmVkID0gdHJ1ZTtcbiAgICB0aGlzLm9wZW5lZFN0cmVhbS5lbWl0KCk7XG4gIH1cblxuICAvKiogQ2xvc2UgdGhlIGNhbGVuZGFyLiAqL1xuICBjbG9zZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX29wZW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcG9wdXBSZWYgJiYgdGhpcy5fcG9wdXBSZWYuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgdGhpcy5fcG9wdXBSZWYuZGV0YWNoKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kaWFsb2dSZWYpIHtcbiAgICAgIHRoaXMuX2RpYWxvZ1JlZi5jbG9zZSgpO1xuICAgICAgdGhpcy5fZGlhbG9nUmVmID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NhbGVuZGFyUG9ydGFsICYmIHRoaXMuX2NhbGVuZGFyUG9ydGFsLmlzQXR0YWNoZWQpIHtcbiAgICAgIHRoaXMuX2NhbGVuZGFyUG9ydGFsLmRldGFjaCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBsZXRlQ2xvc2UgPSAoKSA9PiB7XG4gICAgICAvLyBUaGUgYF9vcGVuZWRgIGNvdWxkJ3ZlIGJlZW4gcmVzZXQgYWxyZWFkeSBpZlxuICAgICAgLy8gd2UgZ290IHR3byBldmVudHMgaW4gcXVpY2sgc3VjY2Vzc2lvbi5cbiAgICAgIGlmICh0aGlzLl9vcGVuZWQpIHtcbiAgICAgICAgdGhpcy5fb3BlbmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2xvc2VkU3RyZWFtLmVtaXQoKTtcbiAgICAgICAgdGhpcy5fZm9jdXNlZEVsZW1lbnRCZWZvcmVPcGVuID0gbnVsbDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuX2ZvY3VzZWRFbGVtZW50QmVmb3JlT3BlbiAmJlxuICAgICAgdHlwZW9mIHRoaXMuX2ZvY3VzZWRFbGVtZW50QmVmb3JlT3Blbi5mb2N1cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gQmVjYXVzZSBJRSBtb3ZlcyBmb2N1cyBhc3luY2hyb25vdXNseSwgd2UgY2FuJ3QgY291bnQgb24gaXQgYmVpbmcgcmVzdG9yZWQgYmVmb3JlIHdlJ3ZlXG4gICAgICAvLyBtYXJrZWQgdGhlIGRhdGVwaWNrZXIgYXMgY2xvc2VkLiBJZiB0aGUgZXZlbnQgZmlyZXMgb3V0IG9mIHNlcXVlbmNlIGFuZCB0aGUgZWxlbWVudCB0aGF0XG4gICAgICAvLyB3ZSdyZSByZWZvY3VzaW5nIG9wZW5zIHRoZSBkYXRlcGlja2VyIG9uIGZvY3VzLCB0aGUgdXNlciBjb3VsZCBiZSBzdHVjayB3aXRoIG5vdCBiZWluZ1xuICAgICAgLy8gYWJsZSB0byBjbG9zZSB0aGUgY2FsZW5kYXIgYXQgYWxsLiBXZSB3b3JrIGFyb3VuZCBpdCBieSBtYWtpbmcgdGhlIGxvZ2ljLCB0aGF0IG1hcmtzXG4gICAgICAvLyB0aGUgZGF0ZXBpY2tlciBhcyBjbG9zZWQsIGFzeW5jIGFzIHdlbGwuXG4gICAgICB0aGlzLl9mb2N1c2VkRWxlbWVudEJlZm9yZU9wZW4uZm9jdXMoKTtcbiAgICAgIHNldFRpbWVvdXQoY29tcGxldGVDbG9zZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBsZXRlQ2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICAvKiogT3BlbiB0aGUgY2FsZW5kYXIgYXMgYSBkaWFsb2cuICovXG4gIHByaXZhdGUgX29wZW5Bc0RpYWxvZygpOiB2b2lkIHtcbiAgICAvLyBVc3VhbGx5IHRoaXMgd291bGQgYmUgaGFuZGxlZCBieSBgb3BlbmAgd2hpY2ggZW5zdXJlcyB0aGF0IHdlIGNhbiBvbmx5IGhhdmUgb25lIG92ZXJsYXlcbiAgICAvLyBvcGVuIGF0IGEgdGltZSwgaG93ZXZlciBzaW5jZSB3ZSByZXNldCB0aGUgdmFyaWFibGVzIGluIGFzeW5jIGhhbmRsZXJzIHNvbWUgb3ZlcmxheXNcbiAgICAvLyBtYXkgc2xpcCB0aHJvdWdoIGlmIHRoZSB1c2VyIG9wZW5zIGFuZCBjbG9zZXMgbXVsdGlwbGUgdGltZXMgaW4gcXVpY2sgc3VjY2Vzc2lvbiAoZS5nLlxuICAgIC8vIGJ5IGhvbGRpbmcgZG93biB0aGUgZW50ZXIga2V5KS5cbiAgICBpZiAodGhpcy5fZGlhbG9nUmVmKSB7XG4gICAgICB0aGlzLl9kaWFsb2dSZWYuY2xvc2UoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kaWFsb2dSZWYgPSB0aGlzLl9kaWFsb2cub3BlbjxNYXREYXRlcGlja2VyQ29udGVudDxEPj4oTWF0RGF0ZXBpY2tlckNvbnRlbnQsIHtcbiAgICAgIGRpcmVjdGlvbjogdGhpcy5fZGlyID8gdGhpcy5fZGlyLnZhbHVlIDogJ2x0cicsXG4gICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLl92aWV3Q29udGFpbmVyUmVmLFxuICAgICAgcGFuZWxDbGFzczogJ21hdC1kYXRlcGlja2VyLWRpYWxvZycsXG4gICAgfSk7XG5cbiAgICB0aGlzLl9kaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbG9zZSgpKTtcbiAgICB0aGlzLl9kaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2UuZGF0ZXBpY2tlciA9IHRoaXM7XG4gICAgdGhpcy5fc2V0Q29sb3IoKTtcbiAgfVxuXG4gIC8qKiBPcGVuIHRoZSBjYWxlbmRhciBhcyBhIHBvcHVwLiAqL1xuICBwcml2YXRlIF9vcGVuQXNQb3B1cCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2NhbGVuZGFyUG9ydGFsKSB7XG4gICAgICB0aGlzLl9jYWxlbmRhclBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWw8TWF0RGF0ZXBpY2tlckNvbnRlbnQ8RD4+KE1hdERhdGVwaWNrZXJDb250ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX3BvcHVwUmVmKSB7XG4gICAgICB0aGlzLl9jcmVhdGVQb3B1cCgpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fcG9wdXBSZWYuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgdGhpcy5fcG9wdXBDb21wb25lbnRSZWYgPSB0aGlzLl9wb3B1cFJlZi5hdHRhY2godGhpcy5fY2FsZW5kYXJQb3J0YWwpO1xuICAgICAgdGhpcy5fcG9wdXBDb21wb25lbnRSZWYuaW5zdGFuY2UuZGF0ZXBpY2tlciA9IHRoaXM7XG4gICAgICB0aGlzLl9zZXRDb2xvcigpO1xuXG4gICAgICAvLyBVcGRhdGUgdGhlIHBvc2l0aW9uIG9uY2UgdGhlIGNhbGVuZGFyIGhhcyByZW5kZXJlZC5cbiAgICAgIHRoaXMuX25nWm9uZS5vblN0YWJsZS5hc09ic2VydmFibGUoKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3BvcHVwUmVmLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKiogQ3JlYXRlIHRoZSBwb3B1cC4gKi9cbiAgcHJpdmF0ZSBfY3JlYXRlUG9wdXAoKTogdm9pZCB7XG4gICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IG5ldyBPdmVybGF5Q29uZmlnKHtcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMuX2NyZWF0ZVBvcHVwUG9zaXRpb25TdHJhdGVneSgpLFxuICAgICAgaGFzQmFja2Ryb3A6IHRydWUsXG4gICAgICBiYWNrZHJvcENsYXNzOiAnbWF0LW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AnLFxuICAgICAgZGlyZWN0aW9uOiB0aGlzLl9kaXIsXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5fc2Nyb2xsU3RyYXRlZ3koKSxcbiAgICAgIHBhbmVsQ2xhc3M6ICdtYXQtZGF0ZXBpY2tlci1wb3B1cCcsXG4gICAgfSk7XG5cbiAgICB0aGlzLl9wb3B1cFJlZiA9IHRoaXMuX292ZXJsYXkuY3JlYXRlKG92ZXJsYXlDb25maWcpO1xuICAgIHRoaXMuX3BvcHVwUmVmLm92ZXJsYXlFbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsICdkaWFsb2cnKTtcblxuICAgIG1lcmdlKFxuICAgICAgdGhpcy5fcG9wdXBSZWYuYmFja2Ryb3BDbGljaygpLFxuICAgICAgdGhpcy5fcG9wdXBSZWYuZGV0YWNobWVudHMoKSxcbiAgICAgIHRoaXMuX3BvcHVwUmVmLmtleWRvd25FdmVudHMoKS5waXBlKGZpbHRlcihldmVudCA9PiB7XG4gICAgICAgIC8vIENsb3Npbmcgb24gYWx0ICsgdXAgaXMgb25seSB2YWxpZCB3aGVuIHRoZXJlJ3MgYW4gaW5wdXQgYXNzb2NpYXRlZCB3aXRoIHRoZSBkYXRlcGlja2VyLlxuICAgICAgICByZXR1cm4gZXZlbnQua2V5Q29kZSA9PT0gRVNDQVBFIHx8XG4gICAgICAgICAgICAgICAodGhpcy5fZGF0ZXBpY2tlcklucHV0ICYmIGV2ZW50LmFsdEtleSAmJiBldmVudC5rZXlDb2RlID09PSBVUF9BUlJPVyk7XG4gICAgICB9KSlcbiAgICApLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIENyZWF0ZSB0aGUgcG9wdXAgUG9zaXRpb25TdHJhdGVneS4gKi9cbiAgcHJpdmF0ZSBfY3JlYXRlUG9wdXBQb3NpdGlvblN0cmF0ZWd5KCk6IFBvc2l0aW9uU3RyYXRlZ3kge1xuICAgIHJldHVybiB0aGlzLl9vdmVybGF5LnBvc2l0aW9uKClcbiAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKHRoaXMuX2RhdGVwaWNrZXJJbnB1dC5nZXRDb25uZWN0ZWRPdmVybGF5T3JpZ2luKCkpXG4gICAgICAud2l0aFRyYW5zZm9ybU9yaWdpbk9uKCcubWF0LWRhdGVwaWNrZXItY29udGVudCcpXG4gICAgICAud2l0aEZsZXhpYmxlRGltZW5zaW9ucyhmYWxzZSlcbiAgICAgIC53aXRoVmlld3BvcnRNYXJnaW4oOClcbiAgICAgIC53aXRoTG9ja2VkUG9zaXRpb24oKVxuICAgICAgLndpdGhQb3NpdGlvbnMoW1xuICAgICAgICB7XG4gICAgICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcbiAgICAgICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcbiAgICAgICAgICBvdmVybGF5WDogJ3N0YXJ0JyxcbiAgICAgICAgICBvdmVybGF5WTogJ3RvcCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG9yaWdpblg6ICdzdGFydCcsXG4gICAgICAgICAgb3JpZ2luWTogJ3RvcCcsXG4gICAgICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXG4gICAgICAgICAgb3ZlcmxheVk6ICdib3R0b20nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBvcmlnaW5YOiAnZW5kJyxcbiAgICAgICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcbiAgICAgICAgICBvdmVybGF5WDogJ2VuZCcsXG4gICAgICAgICAgb3ZlcmxheVk6ICd0b3AnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBvcmlnaW5YOiAnZW5kJyxcbiAgICAgICAgICBvcmlnaW5ZOiAndG9wJyxcbiAgICAgICAgICBvdmVybGF5WDogJ2VuZCcsXG4gICAgICAgICAgb3ZlcmxheVk6ICdib3R0b20nXG4gICAgICAgIH1cbiAgICAgIF0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBvYmogVGhlIG9iamVjdCB0byBjaGVjay5cbiAgICogQHJldHVybnMgVGhlIGdpdmVuIG9iamVjdCBpZiBpdCBpcyBib3RoIGEgZGF0ZSBpbnN0YW5jZSBhbmQgdmFsaWQsIG90aGVyd2lzZSBudWxsLlxuICAgKi9cbiAgcHJpdmF0ZSBfZ2V0VmFsaWREYXRlT3JOdWxsKG9iajogYW55KTogRCB8IG51bGwge1xuICAgIHJldHVybiAodGhpcy5fZGF0ZUFkYXB0ZXIuaXNEYXRlSW5zdGFuY2Uob2JqKSAmJiB0aGlzLl9kYXRlQWRhcHRlci5pc1ZhbGlkKG9iaikpID8gb2JqIDogbnVsbDtcbiAgfVxuXG4gIC8qKiBQYXNzZXMgdGhlIGN1cnJlbnQgdGhlbWUgY29sb3IgYWxvbmcgdG8gdGhlIGNhbGVuZGFyIG92ZXJsYXkuICovXG4gIHByaXZhdGUgX3NldENvbG9yKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jb2xvcjtcbiAgICBpZiAodGhpcy5fcG9wdXBDb21wb25lbnRSZWYpIHtcbiAgICAgIHRoaXMuX3BvcHVwQ29tcG9uZW50UmVmLmluc3RhbmNlLmNvbG9yID0gY29sb3I7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kaWFsb2dSZWYpIHtcbiAgICAgIHRoaXMuX2RpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZS5jb2xvciA9IGNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdG91Y2hVaTogQm9vbGVhbklucHV0O1xufVxuIl19