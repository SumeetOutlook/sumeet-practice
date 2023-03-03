/**
 * Copyright (c) 2018 Bithost GmbH All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, EventEmitter, forwardRef, HostBinding, Inject, Input, OnDestroy, OnInit, Optional, Output, QueryList, ViewChild } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { _countGroupLabelsBeforeOption, MatOption } from '@angular/material/core';
import { MatSelect, SELECT_PANEL_MAX_HEIGHT } from '@angular/material/select';
import { MatFormField } from '@angular/material/form-field';
import { A, DOWN_ARROW, END, ENTER, ESCAPE, HOME, NINE, SPACE, UP_ARROW, Z, ZERO, } from '@angular/cdk/keycodes';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { BehaviorSubject, combineLatest, of, Subject } from 'rxjs';
import { delay, filter, map, startWith, switchMap, take, takeUntil, tap } from 'rxjs/operators';
import { MatSelectSearchClearDirective } from './mat-select-search-clear.directive';
/* tslint:disable:member-ordering component-selector */
/**
 * Component providing an input field for searching MatSelect options.
 *
 * Example usage:
 *
 * interface Bank {
 *  id: string;
 *  name: string;
 * }
 *
 * @Component({
 *   selector: 'my-app-data-selection',
 *   template: `
 *     <mat-form-field>
 *       <mat-select [formControl]="bankCtrl" placeholder="Bank">
 *         <mat-option>
 *           <ngx-mat-select-search [formControl]="bankFilterCtrl"></ngx-mat-select-search>
 *         </mat-option>
 *         <mat-option *ngFor="let bank of filteredBanks | async" [value]="bank.id">
 *           {{bank.name}}
 *         </mat-option>
 *       </mat-select>
 *     </mat-form-field>
 *   `
 * })
 * export class DataSelectionComponent implements OnInit, OnDestroy {
 *
 *   // control for the selected bank
 *   public bankCtrl: FormControl = new FormControl();
 *   // control for the MatSelect filter keyword
 *   public bankFilterCtrl: FormControl = new FormControl();
 *
 *   // list of banks
 *   private banks: Bank[] = [{name: 'Bank A', id: 'A'}, {name: 'Bank B', id: 'B'}, {name: 'Bank C', id: 'C'}];
 *   // list of banks filtered by search keyword
 *   public filteredBanks: ReplaySubject<Bank[]> = new ReplaySubject<Bank[]>(1);
 *
 *   // Subject that emits when the component has been destroyed.
 *   private _onDestroy = new Subject<void>();
 *
 *
 *   ngOnInit() {
 *     // load the initial bank list
 *     this.filteredBanks.next(this.banks.slice());
 *     // listen for search field value changes
 *     this.bankFilterCtrl.valueChanges
 *       .pipe(takeUntil(this._onDestroy))
 *       .subscribe(() => {
 *         this.filterBanks();
 *       });
 *   }
 *
 *   ngOnDestroy() {
 *     this._onDestroy.next();
 *     this._onDestroy.complete();
 *   }
 *
 *   private filterBanks() {
 *     if (!this.banks) {
 *       return;
 *     }
 *
 *     // get the search keyword
 *     let search = this.bankFilterCtrl.value;
 *     if (!search) {
 *       this.filteredBanks.next(this.banks.slice());
 *       return;
 *     } else {
 *       search = search.toLowerCase();
 *     }
 *
 *     // filter the banks
 *     this.filteredBanks.next(
 *       this.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
 *     );
 *   }
 * }
 */
var MatSelectSearchComponent = /** @class */ (function () {
    function MatSelectSearchComponent(matSelect, changeDetectorRef, _viewportRuler, matOption, liveAnnouncer, matFormField) {
        var _this = this;
        if (matOption === void 0) { matOption = null; }
        if (matFormField === void 0) { matFormField = null; }
        this.matSelect = matSelect;
        this.changeDetectorRef = changeDetectorRef;
        this._viewportRuler = _viewportRuler;
        this.matOption = matOption;
        this.liveAnnouncer = liveAnnouncer;
        this.matFormField = matFormField;
        /** Label of the search placeholder */
        this.placeholderLabel = 'Suche';
        /** Type of the search input field */
        this.type = 'text';
        /** Label to be shown when no entries are found. Set to null if no message should be shown. */
        this.noEntriesFoundLabel = 'Keine Optionen gefunden';
        /**
         *  Text that is appended to the currently active item label announced by screen readers,
         *  informing the user of the current index, value and total options.
         *  eg: Bank R (Germany) 1 of 6
        */
        this.indexAndLengthScreenReaderText = ' of ';
        /**
          * Whether or not the search field should be cleared after the dropdown menu is closed.
          * Useful for server-side filtering. See [#3](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/3)
          */
        this.clearSearchInput = true;
        /** Whether to show the search-in-progress indicator */
        this.searching = false;
        /** Disables initial focusing of the input field */
        this.disableInitialFocus = false;
        /** Enable clear input on escape pressed */
        this.enableClearOnEscapePressed = false;
        /**
         * Prevents home / end key being propagated to mat-select,
         * allowing to move the cursor within the search input instead of navigating the options
         */
        this.preventHomeEndKeyPropagation = false;
        /** Disables scrolling to active options when option list changes. Useful for server-side search */
        this.disableScrollToActiveOnOptionsChanged = false;
        /** Adds 508 screen reader support for search box */
        this.ariaLabel = 'dropdown search';
        /** Whether to show Select All Checkbox (for mat-select[multi=true]) */
        this.showToggleAllCheckbox = false;
        /** select all checkbox checked state */
        this.toggleAllCheckboxChecked = false;
        /** select all checkbox indeterminate state */
        this.toggleAllCheckboxIndeterminate = false;
        /** Display a message in a tooltip on the toggle-all checkbox */
        this.toggleAllCheckboxTooltipMessage = '';
        /** Define the position of the tooltip on the toggle-all checkbox. */
        this.toogleAllCheckboxTooltipPosition = 'below';
        /** Output emitter to send to parent component with the toggle all boolean */
        this.toggleAll = new EventEmitter();
        this.onTouched = function (_) { };
        this._options$ = new BehaviorSubject(null);
        this.optionsList$ = this._options$.pipe(switchMap(function (_options) { return _options ?
            _options.changes.pipe(map(function (options) { return options.toArray(); }), startWith(_options.toArray())) : of(null); }));
        this.optionsLength$ = this.optionsList$.pipe(map(function (options) { return options ? options.length : 0; }));
        this._formControl = new FormControl('');
        /** whether to show the no entries found message */
        this._showNoEntriesFound$ = combineLatest([
            this._formControl.valueChanges,
            this.optionsLength$
        ]).pipe(map(function (_a) {
            var _b = tslib_1.__read(_a, 2), value = _b[0], optionsLength = _b[1];
            return _this.noEntriesFoundLabel && value
                && optionsLength === _this.getOptionsLengthOffset();
        }));
        /** Subject that emits when the component has been destroyed. */
        this._onDestroy = new Subject();
    }
    MatSelectSearchComponent_1 = MatSelectSearchComponent;
    Object.defineProperty(MatSelectSearchComponent.prototype, "isInsideMatOption", {
        get: function () {
            return !!this.matOption;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSelectSearchComponent.prototype, "value", {
        /** Current search value */
        get: function () {
            return this._formControl.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSelectSearchComponent.prototype, "_options", {
        get: function () {
            return this._options$.getValue();
        },
        /** Reference to the MatSelect options */
        set: function (_options) {
            this._options$.next(_options);
        },
        enumerable: true,
        configurable: true
    });
    MatSelectSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        // set custom panel class
        var panelClass = 'mat-select-search-panel';
        if (this.matSelect.panelClass) {
            if (Array.isArray(this.matSelect.panelClass)) {
                this.matSelect.panelClass.push(panelClass);
            }
            else if (typeof this.matSelect.panelClass === 'string') {
                this.matSelect.panelClass = [this.matSelect.panelClass, panelClass];
            }
            else if (typeof this.matSelect.panelClass === 'object') {
                this.matSelect.panelClass[panelClass] = true;
            }
        }
        else {
            this.matSelect.panelClass = panelClass;
        }
        // set custom mat-option class if the component was placed inside a mat-option
        if (this.matOption) {
            this.matOption.disabled = true;
            this.matOption._getHostElement().classList.add('contains-mat-select-search');
        }
        else {
            console.error('<ngx-mat-select-search> must be placed inside a <mat-option> element');
        }
        // when the select dropdown panel is opened or closed
        this.matSelect.openedChange
            .pipe(delay(1), takeUntil(this._onDestroy))
            .subscribe(function (opened) {
            if (opened) {
                _this.updateInputWidth();
                // focus the search field when opening
                if (!_this.disableInitialFocus) {
                    _this._focus();
                }
            }
            else {
                // clear it when closing
                if (_this.clearSearchInput) {
                    _this._reset();
                }
            }
        });
        // set the first item active after the options changed
        this.matSelect.openedChange
            .pipe(take(1))
            .pipe(takeUntil(this._onDestroy))
            .subscribe(function () {
            if (_this.matSelect._keyManager) {
                _this.matSelect._keyManager.change.pipe(takeUntil(_this._onDestroy))
                    .subscribe(function () { return _this.adjustScrollTopToFitActiveOptionIntoView(); });
            }
            else {
                console.log('_keyManager was not initialized.');
            }
            _this._options = _this.matSelect.options;
            // Closure variable for tracking the most recent first option.
            // In order to avoid avoid causing the list to
            // scroll to the top when options are added to the bottom of
            // the list (eg: infinite scroll), we compare only
            // the changes to the first options to determine if we
            // should set the first item as active.
            // This prevents unnecessary scrolling to the top of the list
            // when options are appended, but allows the first item
            // in the list to be set as active by default when there
            // is no active selection
            var previousFirstOption = _this._options.toArray()[_this.getOptionsLengthOffset()];
            _this._options.changes
                .pipe(takeUntil(_this._onDestroy))
                .subscribe(function () {
                // avoid "expression has been changed" error
                setTimeout(function () {
                    // Convert the QueryList to an array
                    var options = _this._options.toArray();
                    // The true first item is offset by 1
                    var currentFirstOption = options[_this.getOptionsLengthOffset()];
                    var keyManager = _this.matSelect._keyManager;
                    if (keyManager && _this.matSelect.panelOpen) {
                        // set first item active and input width
                        // Check to see if the first option in these changes is different from the previous.
                        var firstOptionIsChanged = !_this.matSelect.compareWith(previousFirstOption, currentFirstOption);
                        // CASE: The first option is different now.
                        // Indiciates we should set it as active and scroll to the top.
                        if (firstOptionIsChanged
                            || !keyManager.activeItem
                            || !options.find(function (option) { return _this.matSelect.compareWith(option, keyManager.activeItem); })) {
                            keyManager.setFirstItemActive();
                        }
                        // wait for panel width changes
                        setTimeout(function () {
                            _this.updateInputWidth();
                        });
                        if (!_this.disableScrollToActiveOnOptionsChanged) {
                            _this.adjustScrollTopToFitActiveOptionIntoView();
                        }
                    }
                    // Update our reference
                    previousFirstOption = currentFirstOption;
                });
            });
        });
        // add or remove css class depending on whether to show the no entries found message
        // note: this is hacky
        this._showNoEntriesFound$.pipe(takeUntil(this._onDestroy)).subscribe(function (showNoEntriesFound) {
            // set no entries found class on mat option
            if (_this.matOption) {
                if (showNoEntriesFound) {
                    _this.matOption._getHostElement().classList.add('mat-select-search-no-entries-found');
                }
                else {
                    _this.matOption._getHostElement().classList.remove('mat-select-search-no-entries-found');
                }
            }
        });
        // resize the input width when the viewport is resized, i.e. the trigger width could potentially be resized
        this._viewportRuler.change()
            .pipe(takeUntil(this._onDestroy))
            .subscribe(function () {
            if (_this.matSelect.panelOpen) {
                _this.updateInputWidth();
            }
        });
        this.initMultipleHandling();
        this.optionsList$.pipe(takeUntil(this._onDestroy)).subscribe(function () {
            // update view when available options change
            _this.changeDetectorRef.markForCheck();
        });
    };
    MatSelectSearchComponent.prototype._emitSelectAllBooleanToParent = function (state) {
        this.toggleAll.emit(state);
    };
    MatSelectSearchComponent.prototype.ngOnDestroy = function () {
        this._onDestroy.next();
        this._onDestroy.complete();
    };
    MatSelectSearchComponent.prototype._isToggleAllCheckboxVisible = function () {
        return this.matSelect.multiple && this.showToggleAllCheckbox;
    };
    /**
     * Handles the key down event with MatSelect.
     * Allows e.g. selecting with enter key, navigation with arrow keys, etc.
     * @param event
     */
    MatSelectSearchComponent.prototype._handleKeydown = function (event) {
        var _this = this;
        // Prevent propagation for all alphanumeric characters in order to avoid selection issues
        if ((event.key && event.key.length === 1) ||
            (event.keyCode >= A && event.keyCode <= Z) ||
            (event.keyCode >= ZERO && event.keyCode <= NINE) ||
            (event.keyCode === SPACE)
            || (this.preventHomeEndKeyPropagation && (event.keyCode === HOME || event.keyCode === END))) {
            event.stopPropagation();
        }
        if (this.matSelect.multiple && event.key && event.keyCode === ENTER) {
            // Regain focus after multiselect, so we can further type
            setTimeout(function () { return _this._focus(); });
        }
        // Special case if click Escape, if input is empty, close the dropdown, if not, empty out the search field
        if (this.enableClearOnEscapePressed === true && event.keyCode === ESCAPE && this.value) {
            this._reset(true);
            event.stopPropagation();
        }
    };
    /**
     * Handles the key up event with MatSelect.
     * Allows e.g. the announcing of the currently activeDescendant by screen readers.
     */
    MatSelectSearchComponent.prototype._handleKeyup = function (event) {
        if (event.keyCode === UP_ARROW || event.keyCode === DOWN_ARROW) {
            var ariaActiveDescendantId_1 = this.matSelect._getAriaActiveDescendant();
            var index = this._options.toArray().findIndex(function (item) { return item.id === ariaActiveDescendantId_1; });
            if (index !== -1) {
                var activeDescendant = this._options.toArray()[index];
                this.liveAnnouncer.announce(activeDescendant.viewValue + ' '
                    + this.getAriaIndex(index)
                    + this.indexAndLengthScreenReaderText
                    + this.getAriaLength());
            }
        }
    };
    /**
     * Calculate the index of the current option, taking the offset to length into account.
     * examples:
     *    Case 1 [Search, 1, 2, 3] will have offset of 1, due to search and will read index of total.
     *    Case 2 [1, 2, 3] will have offset of 0 and will read index +1 of total.
     */
    MatSelectSearchComponent.prototype.getAriaIndex = function (optionIndex) {
        if (this.getOptionsLengthOffset() === 0) {
            return optionIndex + 1;
        }
        return optionIndex;
    };
    /**
     * Calculate the length of the options, taking the offset to length into account.
     * examples:
     *    Case 1 [Search, 1, 2, 3] will have length of options.length -1, due to search.
     *    Case 2 [1, 2, 3] will have length of options.length.
     */
    MatSelectSearchComponent.prototype.getAriaLength = function () {
        return this._options.toArray().length - this.getOptionsLengthOffset();
    };
    MatSelectSearchComponent.prototype.writeValue = function (value) {
        this._lastExternalInputValue = value;
        this._formControl.setValue(value);
        this.changeDetectorRef.markForCheck();
    };
    MatSelectSearchComponent.prototype.onBlur = function () {
        this.onTouched();
    };
    MatSelectSearchComponent.prototype.registerOnChange = function (fn) {
        var _this = this;
        this._formControl.valueChanges.pipe(filter(function (value) { return value !== _this._lastExternalInputValue; }), tap(function () { return _this._lastExternalInputValue = undefined; }), takeUntil(this._onDestroy)).subscribe(fn);
    };
    MatSelectSearchComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /**
     * Focuses the search input field
     */
    MatSelectSearchComponent.prototype._focus = function () {
        if (!this.searchSelectInput || !this.matSelect.panel) {
            return;
        }
        // save and restore scrollTop of panel, since it will be reset by focus()
        // note: this is hacky
        var panel = this.matSelect.panel.nativeElement;
        var scrollTop = panel.scrollTop;
        // focus
        this.searchSelectInput.nativeElement.focus();
        panel.scrollTop = scrollTop;
    };
    /**
     * Resets the current search value
     * @param focus whether to focus after resetting
     */
    MatSelectSearchComponent.prototype._reset = function (focus) {
        this._formControl.setValue('');
        if (focus) {
            this._focus();
        }
    };
    /**
     * Initializes handling <mat-select [multiple]="true">
     * Note: to improve this code, mat-select should be extended to allow disabling resetting the selection while filtering.
     */
    MatSelectSearchComponent.prototype.initMultipleHandling = function () {
        var _this = this;
        if (!this.matSelect.ngControl) {
            if (this.matSelect.multiple) {
                // note: the access to matSelect.ngControl (instead of matSelect.value / matSelect.valueChanges)
                // is necessary to properly work in multi-selection mode.
                console.error('the mat-select containing ngx-mat-select-search must have a ngModel or formControl directive when multiple=true');
            }
            return;
        }
        // if <mat-select [multiple]="true">
        // store previously selected values and restore them when they are deselected
        // because the option is not available while we are currently filtering
        this.previousSelectedValues = this.matSelect.ngControl.value;
        this.matSelect.ngControl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(function (values) {
            var restoreSelectedValues = false;
            if (_this.matSelect.multiple) {
                if (_this._formControl.value && _this._formControl.value.length
                    && _this.previousSelectedValues && Array.isArray(_this.previousSelectedValues)) {
                    if (!values || !Array.isArray(values)) {
                        values = [];
                    }
                    var optionValues_1 = _this.matSelect.options.map(function (option) { return option.value; });
                    _this.previousSelectedValues.forEach(function (previousValue) {
                        if (!values.some(function (v) { return _this.matSelect.compareWith(v, previousValue); })
                            && !optionValues_1.some(function (v) { return _this.matSelect.compareWith(v, previousValue); })) {
                            // if a value that was selected before is deselected and not found in the options, it was deselected
                            // due to the filtering, so we restore it.
                            values.push(previousValue);
                            restoreSelectedValues = true;
                        }
                    });
                }
            }
            _this.previousSelectedValues = values;
            if (restoreSelectedValues) {
                _this.matSelect._onChange(values);
            }
        });
    };
    /**
     * Scrolls the currently active option into the view if it is not yet visible.
     */
    MatSelectSearchComponent.prototype.adjustScrollTopToFitActiveOptionIntoView = function () {
        if (this.matSelect.panel && this.matSelect.options.length > 0) {
            var matOptionHeight = this.getMatOptionHeight();
            var activeOptionIndex = this.matSelect._keyManager.activeItemIndex || 0;
            var labelCount = _countGroupLabelsBeforeOption(activeOptionIndex, this.matSelect.options, this.matSelect.optionGroups);
            // If the component is in a MatOption, the activeItemIndex will be offset by one.
            var indexOfOptionToFitIntoView = (this.matOption ? -1 : 0) + labelCount + activeOptionIndex;
            var currentScrollTop = this.matSelect.panel.nativeElement.scrollTop;
            var searchInputHeight = this.innerSelectSearch.nativeElement.offsetHeight;
            var amountOfVisibleOptions = Math.floor((SELECT_PANEL_MAX_HEIGHT - searchInputHeight) / matOptionHeight);
            var indexOfFirstVisibleOption = Math.round((currentScrollTop + searchInputHeight) / matOptionHeight) - 1;
            if (indexOfFirstVisibleOption >= indexOfOptionToFitIntoView) {
                this.matSelect.panel.nativeElement.scrollTop = indexOfOptionToFitIntoView * matOptionHeight;
            }
            else if (indexOfFirstVisibleOption + amountOfVisibleOptions <= indexOfOptionToFitIntoView) {
                this.matSelect.panel.nativeElement.scrollTop = (indexOfOptionToFitIntoView + 1) * matOptionHeight
                    - (SELECT_PANEL_MAX_HEIGHT - searchInputHeight);
            }
        }
    };
    /**
     *  Set the width of the innerSelectSearch to fit even custom scrollbars
     *  And support all Operation Systems
     */
    MatSelectSearchComponent.prototype.updateInputWidth = function () {
        if (!this.innerSelectSearch || !this.innerSelectSearch.nativeElement) {
            return;
        }
        var element = this.innerSelectSearch.nativeElement;
        var panelElement;
        while (element = element.parentElement) {
            if (element.classList.contains('mat-select-panel')) {
                panelElement = element;
                break;
            }
        }
        if (panelElement) {
            this.innerSelectSearch.nativeElement.style.width = panelElement.clientWidth + 'px';
        }
    };
    MatSelectSearchComponent.prototype.getMatOptionHeight = function () {
        if (this.matSelect.options.length > 0) {
            return this.matSelect.options.first._getHostElement().getBoundingClientRect().height;
        }
        return 0;
    };
    /**
     * Determine the offset to length that can be caused by the optional matOption used as a search input.
     */
    MatSelectSearchComponent.prototype.getOptionsLengthOffset = function () {
        if (this.matOption) {
            return 1;
        }
        else {
            return 0;
        }
    };
    var MatSelectSearchComponent_1;
    MatSelectSearchComponent.ctorParameters = function () { return [
        { type: MatSelect, decorators: [{ type: Inject, args: [MatSelect,] }] },
        { type: ChangeDetectorRef },
        { type: ViewportRuler },
        { type: MatOption, decorators: [{ type: Optional }, { type: Inject, args: [MatOption,] }] },
        { type: LiveAnnouncer },
        { type: MatFormField, decorators: [{ type: Optional }, { type: Inject, args: [MatFormField,] }] }
    ]; };
    tslib_1.__decorate([
        Input()
    ], MatSelectSearchComponent.prototype, "placeholderLabel", void 0);
    tslib_1.__decorate([
        Input()
    ], MatSelectSearchComponent.prototype, "type", void 0);
    tslib_1.__decorate([
        Input()
    ], MatSelectSearchComponent.prototype, "noEntriesFoundLabel", void 0);
    tslib_1.__decorate([
        Input()
    ], MatSelectSearchComponent.prototype, "indexAndLengthScreenReaderText", void 0);
    tslib_1.__decorate([
        Input()
    ], MatSelectSearchComponent.prototype, "clearSearchInput", void 0);
    tslib_1.__decorate([
        Input()
    ], MatSelectSearchComponent.prototype, "searching", void 0);
    tslib_1.__decorate([
        Input()
    ], MatSelectSearchComponent.prototype, "disableInitialFocus", void 0);
    tslib_1.__decorate([
        Input()
    ], MatSelectSearchComponent.prototype, "enableClearOnEscapePressed", void 0);
    tslib_1.__decorate([
        Input()
    ], MatSelectSearchComponent.prototype, "preventHomeEndKeyPropagation", void 0);
    tslib_1.__decorate([
        Input()
    ], MatSelectSearchComponent.prototype, "disableScrollToActiveOnOptionsChanged", void 0);
    tslib_1.__decorate([
        Input()
    ], MatSelectSearchComponent.prototype, "ariaLabel", void 0);
    tslib_1.__decorate([
        Input()
    ], MatSelectSearchComponent.prototype, "showToggleAllCheckbox", void 0);
    tslib_1.__decorate([
        Input()
    ], MatSelectSearchComponent.prototype, "toggleAllCheckboxChecked", void 0);
    tslib_1.__decorate([
        Input()
    ], MatSelectSearchComponent.prototype, "toggleAllCheckboxIndeterminate", void 0);
    tslib_1.__decorate([
        Input()
    ], MatSelectSearchComponent.prototype, "toggleAllCheckboxTooltipMessage", void 0);
    tslib_1.__decorate([
        Input()
    ], MatSelectSearchComponent.prototype, "toogleAllCheckboxTooltipPosition", void 0);
    tslib_1.__decorate([
        Output()
    ], MatSelectSearchComponent.prototype, "toggleAll", void 0);
    tslib_1.__decorate([
        ViewChild('searchSelectInput', { read: ElementRef, static: true })
    ], MatSelectSearchComponent.prototype, "searchSelectInput", void 0);
    tslib_1.__decorate([
        ViewChild('innerSelectSearch', { read: ElementRef, static: true })
    ], MatSelectSearchComponent.prototype, "innerSelectSearch", void 0);
    tslib_1.__decorate([
        ContentChild(MatSelectSearchClearDirective, { static: false })
    ], MatSelectSearchComponent.prototype, "clearIcon", void 0);
    tslib_1.__decorate([
        HostBinding('class.mat-select-search-inside-mat-option')
    ], MatSelectSearchComponent.prototype, "isInsideMatOption", null);
    MatSelectSearchComponent = MatSelectSearchComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ngx-mat-select-search',
            template: "<!-- Placeholder to adjust vertical offset of the mat-option elements -->\r\n<input matInput class=\"mat-select-search-input mat-select-search-hidden\"/>\r\n\r\n<!-- Note: the  mat-datepicker-content mat-tab-header are needed to inherit the material theme colors, see PR #22 -->\r\n<div\r\n      #innerSelectSearch\r\n      class=\"mat-select-search-inner mat-typography mat-datepicker-content mat-tab-header\"\r\n      [ngClass]=\"{'mat-select-search-inner-multiple': matSelect.multiple, 'mat-select-search-inner-toggle-all': _isToggleAllCheckboxVisible() }\">\r\n\r\n  <mat-checkbox *ngIf=\"_isToggleAllCheckboxVisible()\"\r\n                [color]=\"matFormField?.color\"\r\n                class=\"mat-select-search-toggle-all-checkbox\"\r\n                [checked]=\"toggleAllCheckboxChecked\"\r\n                [indeterminate]=\"toggleAllCheckboxIndeterminate\"\r\n                [matTooltip]=\"toggleAllCheckboxTooltipMessage\"\r\n                matTooltipClass=\"ngx-mat-select-search-toggle-all-tooltip\"\r\n                [matTooltipPosition]=\"toogleAllCheckboxTooltipPosition\"\r\n                (change)=\"_emitSelectAllBooleanToParent($event.checked)\"\r\n  ></mat-checkbox>\r\n\r\n  <input class=\"mat-select-search-input mat-input-element\"\r\n         autocomplete=\"off\"\r\n         [type]=\"type\"\r\n         [formControl]=\"_formControl\"\r\n         #searchSelectInput\r\n         (keydown)=\"_handleKeydown($event)\"\r\n         (keyup)=\"_handleKeyup($event)\"\r\n         (blur)=\"onBlur()\"\r\n         [placeholder]=\"placeholderLabel\"\r\n         [attr.aria-label]=\"ariaLabel\"\r\n  />\r\n  <mat-spinner *ngIf=\"searching\"\r\n          class=\"mat-select-search-spinner\"\r\n          diameter=\"16\"></mat-spinner>\r\n\r\n  <button mat-button\r\n          *ngIf=\"value && !searching\"\r\n          mat-icon-button\r\n          aria-label=\"Clear\"\r\n          (click)=\"_reset(true)\"\r\n          class=\"mat-select-search-clear\">\r\n    <ng-content *ngIf=\"clearIcon; else defaultIcon\" select=\"[ngxMatSelectSearchClear]\"></ng-content>\r\n    <ng-template #defaultIcon>\r\n      <mat-icon>close</mat-icon>\r\n    </ng-template>\r\n  </button>\r\n\r\n  <ng-content select=\".mat-select-search-custom-header-content\"></ng-content>\r\n\r\n</div>\r\n\r\n<div *ngIf=\"_showNoEntriesFound$ | async\"\r\n     class=\"mat-select-search-no-entries-found\">\r\n  {{noEntriesFoundLabel}}\r\n</div>\r\n<!--\r\nCopyright (c) 2018 Bithost GmbH All Rights Reserved.\r\n\r\nUse of this source code is governed by an MIT-style license that can be\r\nfound in the LICENSE file at https://angular.io/license\r\n-->\r\n",
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return MatSelectSearchComponent_1; }),
                    multi: true
                }
            ],
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [".mat-select-search-hidden{visibility:hidden}.mat-select-search-inner{position:absolute;top:0;width:100%;border-bottom-width:1px;border-bottom-style:solid;z-index:100;font-size:inherit;box-shadow:none;border-radius:4px 4px 0 0;-webkit-transform:translate3d(0,0,0)}.mat-select-search-inner.mat-select-search-inner-multiple{width:100%}.mat-select-search-inner.mat-select-search-inner-multiple.mat-select-search-inner-toggle-all{display:flex;align-items:center}.mat-select-search-inner .mat-input-element{flex-basis:auto}.mat-select-search-inner .mat-input-element:-ms-input-placeholder{-ms-user-select:text}::ng-deep .mat-select-search-panel{transform:none!important;overflow-x:hidden}.mat-select-search-input{padding:16px 44px 16px 16px;box-sizing:border-box;width:100%}:host-context([dir=rtl]) .mat-select-search-input{padding-right:16px;padding-left:44px}.mat-select-search-no-entries-found{padding:16px}.mat-select-search-clear{position:absolute;right:4px;top:5px}:host-context([dir=rtl]) .mat-select-search-clear{right:auto;left:4px}.mat-select-search-spinner{position:absolute;right:16px;top:calc(50% - 8px)}:host-context([dir=rtl]) .mat-select-search-spinner{right:auto;left:16px}:host.mat-select-search-inside-mat-option .mat-select-search-input{padding-top:0;padding-bottom:0;height:3em;line-height:3em}:host.mat-select-search-inside-mat-option .mat-select-search-clear{top:3px}::ng-deep .mat-option[aria-disabled=true].contains-mat-select-search{position:static;padding:0}::ng-deep .mat-option[aria-disabled=true].contains-mat-select-search .mat-icon{margin-right:0;margin-left:0}::ng-deep .mat-option[aria-disabled=true].contains-mat-select-search .mat-option-pseudo-checkbox{display:none}::ng-deep .mat-option[aria-disabled=true].contains-mat-select-search.mat-select-search-no-entries-found{height:6em}.mat-select-search-toggle-all-checkbox{padding-left:16px;padding-bottom:2px}:host-context([dir=rtl]) .mat-select-search-toggle-all-checkbox{padding-left:0;padding-right:16px}"]
        }),
        tslib_1.__param(0, Inject(MatSelect)),
        tslib_1.__param(3, Optional()), tslib_1.__param(3, Inject(MatOption)),
        tslib_1.__param(5, Optional()), tslib_1.__param(5, Inject(MatFormField))
    ], MatSelectSearchComponent);
    return MatSelectSearchComponent;
}());
export { MatSelectSearchComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXNlbGVjdC1zZWFyY2guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdC1zZWxlY3Qtc2VhcmNoLyIsInNvdXJjZXMiOlsibWF0LXNlbGVjdC1zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztHQUtHOztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsV0FBVyxFQUNYLE1BQU0sRUFDTixLQUFLLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsU0FBUyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDbEYsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksR0FBRyxNQUFNLHVCQUF1QixDQUFDO0FBQ2pILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvRSxPQUFPLEVBQUUs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O1FBQW5FLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO3VFQUErQjtJQUc5QjtRQUFuRSxTQUFTLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzt1RUFBK0I7SUFHbEM7UUFBL0QsWUFBWSxDQUFDLDZCQUE2QixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDOytEQUEwQztJQUd6RztRQURDLFdBQVcsQ0FBQywyQ0FBMkMsQ0FBQztxRUFHeEQ7SUEzRVUsd0JBQXdCO1FBYnBDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsbW1GQUFpRDtZQUVqRCxTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsMEJBQXdCLEVBQXhCLENBQXdCLENBQUM7b0JBQ3ZELEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7WUFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7U0FDaEQsQ0FBQztRQThIYSxtQkFBQSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7UUFHM0IsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7UUFFN0IsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUE7T0FsSXhCLHdCQUF3QixDQXVoQnBDO0lBQUQsK0JBQUM7Q0FBQSxBQXZoQkQsSUF1aEJDO1NBdmhCWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ29weXJpZ2h0IChjKSAyMDE4IEJpdGhvc3QgR21iSCBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Db250cm9sLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgX2NvdW50R3JvdXBMYWJlbHNCZWZvcmVPcHRpb24sIE1hdE9wdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRTZWxlY3QsIFNFTEVDVF9QQU5FTF9NQVhfSEVJR0hUIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcclxuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcbmltcG9ydCB7IEEsIERPV05fQVJST1csIEVORCwgRU5URVIsIEVTQ0FQRSwgSE9NRSwgTklORSwgU1BBQ0UsIFVQX0FSUk9XLCBaLCBaRVJPLCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XHJcbmltcG9ydCB7IFZpZXdwb3J0UnVsZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcclxuaW1wb3J0IHsgTGl2ZUFubm91bmNlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWxheSwgZmlsdGVyLCBtYXAsIHN0YXJ0V2l0aCwgc3dpdGNoTWFwLCB0YWtlLCB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE1hdFNlbGVjdFNlYXJjaENsZWFyRGlyZWN0aXZlIH0gZnJvbSAnLi9tYXQtc2VsZWN0LXNlYXJjaC1jbGVhci5kaXJlY3RpdmUnO1xyXG5cclxuLyogdHNsaW50OmRpc2FibGU6bWVtYmVyLW9yZGVyaW5nIGNvbXBvbmVudC1zZWxlY3RvciAqL1xyXG4vKipcclxuICogQ29tcG9uZW50IHByb3ZpZGluZyBhbiBpbnB1dCBmaWVsZCBmb3Igc2VhcmNoaW5nIE1hdFNlbGVjdCBvcHRpb25zLlxyXG4gKlxyXG4gKiBFeGFtcGxlIHVzYWdlOlxyXG4gKlxyXG4gKiBpbnRlcmZhY2UgQmFuayB7XHJcbiAqICBpZDogc3RyaW5nO1xyXG4gKiAgbmFtZTogc3RyaW5nO1xyXG4gKiB9XHJcbiAqXHJcbiAqIEBDb21wb25lbnQoe1xyXG4gKiAgIHNlbGVjdG9yOiAnbXktYXBwLWRhdGEtc2VsZWN0aW9uJyxcclxuICogICB0ZW1wbGF0ZTogYFxyXG4gKiAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gKiAgICAgICA8bWF0LXNlbGVjdCBbZm9ybUNvbnRyb2xdPVwiYmFua0N0cmxcIiBwbGFjZWhvbGRlcj1cIkJhbmtcIj5cclxuICogICAgICAgICA8bWF0LW9wdGlvbj5cclxuICogICAgICAgICAgIDxuZ3gtbWF0LXNlbGVjdC1zZWFyY2ggW2Zvcm1Db250cm9sXT1cImJhbmtGaWx0ZXJDdHJsXCI+PC9uZ3gtbWF0LXNlbGVjdC1zZWFyY2g+XHJcbiAqICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gKiAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBiYW5rIG9mIGZpbHRlcmVkQmFua3MgfCBhc3luY1wiIFt2YWx1ZV09XCJiYW5rLmlkXCI+XHJcbiAqICAgICAgICAgICB7e2JhbmsubmFtZX19XHJcbiAqICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gKiAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAqICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gKiAgIGBcclxuICogfSlcclxuICogZXhwb3J0IGNsYXNzIERhdGFTZWxlY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAqXHJcbiAqICAgLy8gY29udHJvbCBmb3IgdGhlIHNlbGVjdGVkIGJhbmtcclxuICogICBwdWJsaWMgYmFua0N0cmw6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XHJcbiAqICAgLy8gY29udHJvbCBmb3IgdGhlIE1hdFNlbGVjdCBmaWx0ZXIga2V5d29yZFxyXG4gKiAgIHB1YmxpYyBiYW5rRmlsdGVyQ3RybDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcclxuICpcclxuICogICAvLyBsaXN0IG9mIGJhbmtzXHJcbiAqICAgcHJpdmF0ZSBiYW5rczogQmFua1tdID0gW3tuYW1lOiAnQmFuayBBJywgaWQ6ICdBJ30sIHtuYW1lOiAnQmFuayBCJywgaWQ6ICdCJ30sIHtuYW1lOiAnQmFuayBDJywgaWQ6ICdDJ31dO1xyXG4gKiAgIC8vIGxpc3Qgb2YgYmFua3MgZmlsdGVyZWQgYnkgc2VhcmNoIGtleXdvcmRcclxuICogICBwdWJsaWMgZmlsdGVyZWRCYW5rczogUmVwbGF5U3ViamVjdDxCYW5rW10+ID0gbmV3IFJlcGxheVN1YmplY3Q8QmFua1tdPigxKTtcclxuICpcclxuICogICAvLyBTdWJqZWN0IHRoYXQgZW1pdHMgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBiZWVuIGRlc3Ryb3llZC5cclxuICogICBwcml2YXRlIF9vbkRlc3Ryb3kgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gKlxyXG4gKlxyXG4gKiAgIG5nT25Jbml0KCkge1xyXG4gKiAgICAgLy8gbG9hZCB0aGUgaW5pdGlhbCBiYW5rIGxpc3RcclxuICogICAgIHRoaXMuZmlsdGVyZWRCYW5rcy5uZXh0KHRoaXMuYmFua3Muc2xpY2UoKSk7XHJcbiAqICAgICAvLyBsaXN0ZW4gZm9yIHNlYXJjaCBmaWVsZCB2YWx1ZSBjaGFuZ2VzXHJcbiAqICAgICB0aGlzLmJhbmtGaWx0ZXJDdHJsLnZhbHVlQ2hhbmdlc1xyXG4gKiAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSlcclxuICogICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAqICAgICAgICAgdGhpcy5maWx0ZXJCYW5rcygpO1xyXG4gKiAgICAgICB9KTtcclxuICogICB9XHJcbiAqXHJcbiAqICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAqICAgICB0aGlzLl9vbkRlc3Ryb3kubmV4dCgpO1xyXG4gKiAgICAgdGhpcy5fb25EZXN0cm95LmNvbXBsZXRlKCk7XHJcbiAqICAgfVxyXG4gKlxyXG4gKiAgIHByaXZhdGUgZmlsdGVyQmFua3MoKSB7XHJcbiAqICAgICBpZiAoIXRoaXMuYmFua3MpIHtcclxuICogICAgICAgcmV0dXJuO1xyXG4gKiAgICAgfVxyXG4gKlxyXG4gKiAgICAgLy8gZ2V0IHRoZSBzZWFyY2gga2V5d29yZFxyXG4gKiAgICAgbGV0IHNlYXJjaCA9IHRoaXMuYmFua0ZpbHRlckN0cmwudmFsdWU7XHJcbiAqICAgICBpZiAoIXNlYXJjaCkge1xyXG4gKiAgICAgICB0aGlzLmZpbHRlcmVkQmFua3MubmV4dCh0aGlzLmJhbmtzLnNsaWNlKCkpO1xyXG4gKiAgICAgICByZXR1cm47XHJcbiAqICAgICB9IGVsc2Uge1xyXG4gKiAgICAgICBzZWFyY2ggPSBzZWFyY2gudG9Mb3dlckNhc2UoKTtcclxuICogICAgIH1cclxuICpcclxuICogICAgIC8vIGZpbHRlciB0aGUgYmFua3NcclxuICogICAgIHRoaXMuZmlsdGVyZWRCYW5rcy5uZXh0KFxyXG4gKiAgICAgICB0aGlzLmJhbmtzLmZpbHRlcihiYW5rID0+IGJhbmsubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoKSA+IC0xKVxyXG4gKiAgICAgKTtcclxuICogICB9XHJcbiAqIH1cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LW1hdC1zZWxlY3Qtc2VhcmNoJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbWF0LXNlbGVjdC1zZWFyY2guY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21hdC1zZWxlY3Qtc2VhcmNoLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNYXRTZWxlY3RTZWFyY2hDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdFNlbGVjdFNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcblxyXG4gIC8qKiBMYWJlbCBvZiB0aGUgc2VhcmNoIHBsYWNlaG9sZGVyICovXHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXJMYWJlbCA9ICdTdWNoZSc7XHJcblxyXG4gIC8qKiBUeXBlIG9mIHRoZSBzZWFyY2ggaW5wdXQgZmllbGQgKi9cclxuICBASW5wdXQoKSB0eXBlID0gJ3RleHQnO1xyXG5cclxuICAvKiogTGFiZWwgdG8gYmUgc2hvd24gd2hlbiBubyBlbnRyaWVzIGFyZSBmb3VuZC4gU2V0IHRvIG51bGwgaWYgbm8gbWVzc2FnZSBzaG91bGQgYmUgc2hvd24uICovXHJcbiAgQElucHV0KCkgbm9FbnRyaWVzRm91bmRMYWJlbCA9ICdLZWluZSBPcHRpb25lbiBnZWZ1bmRlbic7XHJcblxyXG4gIC8qKlxyXG4gICAqICBUZXh0IHRoYXQgaXMgYXBwZW5kZWQgdG8gdGhlIGN1cnJlbnRseSBhY3RpdmUgaXRlbSBsYWJlbCBhbm5vdW5jZWQgYnkgc2NyZWVuIHJlYWRlcnMsXHJcbiAgICogIGluZm9ybWluZyB0aGUgdXNlciBvZiB0aGUgY3VycmVudCBpbmRleCwgdmFsdWUgYW5kIHRvdGFsIG9wdGlvbnMuXHJcbiAgICogIGVnOiBCYW5rIFIgKEdlcm1hbnkpIDEgb2YgNlxyXG4gICovXHJcbiAgQElucHV0KCkgaW5kZXhBbmRMZW5ndGhTY3JlZW5SZWFkZXJUZXh0ID0gJyBvZiAnO1xyXG5cclxuICAvKipcclxuICAgICogV2hldGhlciBvciBub3QgdGhlIHNlYXJjaCBmaWVsZCBzaG91bGQgYmUgY2xlYXJlZCBhZnRlciB0aGUgZHJvcGRvd24gbWVudSBpcyBjbG9zZWQuXHJcbiAgICAqIFVzZWZ1bCBmb3Igc2VydmVyLXNpZGUgZmlsdGVyaW5nLiBTZWUgWyMzXShodHRwczovL2dpdGh1Yi5jb20vYml0aG9zdC1nbWJoL25neC1tYXQtc2VsZWN0LXNlYXJjaC9pc3N1ZXMvMylcclxuICAgICovXHJcbiAgQElucHV0KCkgY2xlYXJTZWFyY2hJbnB1dCA9IHRydWU7XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRvIHNob3cgdGhlIHNlYXJjaC1pbi1wcm9ncmVzcyBpbmRpY2F0b3IgKi9cclxuICBASW5wdXQoKSBzZWFyY2hpbmcgPSBmYWxzZTtcclxuXHJcbiAgLyoqIERpc2FibGVzIGluaXRpYWwgZm9jdXNpbmcgb2YgdGhlIGlucHV0IGZpZWxkICovXHJcbiAgQElucHV0KCkgZGlzYWJsZUluaXRpYWxGb2N1cyA9IGZhbHNlO1xyXG5cclxuICAvKiogRW5hYmxlIGNsZWFyIGlucHV0IG9uIGVzY2FwZSBwcmVzc2VkICovXHJcbiAgQElucHV0KCkgZW5hYmxlQ2xlYXJPbkVzY2FwZVByZXNzZWQgPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogUHJldmVudHMgaG9tZSAvIGVuZCBrZXkgYmVpbmcgcHJvcGFnYXRlZCB0byBtYXQtc2VsZWN0LFxyXG4gICAqIGFsbG93aW5nIHRvIG1vdmUgdGhlIGN1cnNvciB3aXRoaW4gdGhlIHNlYXJjaCBpbnB1dCBpbnN0ZWFkIG9mIG5hdmlnYXRpbmcgdGhlIG9wdGlvbnNcclxuICAgKi9cclxuICBASW5wdXQoKSBwcmV2ZW50SG9tZUVuZEtleVByb3BhZ2F0aW9uID0gZmFsc2U7XHJcblxyXG4gIC8qKiBEaXNhYmxlcyBzY3JvbGxpbmcgdG8gYWN0aXZlIG9wdGlvbnMgd2hlbiBvcHRpb24gbGlzdCBjaGFuZ2VzLiBVc2VmdWwgZm9yIHNlcnZlci1zaWRlIHNlYXJjaCAqL1xyXG4gIEBJbnB1dCgpIGRpc2FibGVTY3JvbGxUb0FjdGl2ZU9uT3B0aW9uc0NoYW5nZWQgPSBmYWxzZTtcclxuXHJcbiAgLyoqIEFkZHMgNTA4IHNjcmVlbiByZWFkZXIgc3VwcG9ydCBmb3Igc2VhcmNoIGJveCAqL1xyXG4gIEBJbnB1dCgpIGFyaWFMYWJlbCA9ICdkcm9wZG93biBzZWFyY2gnO1xyXG5cclxuICAvKiogV2hldGhlciB0byBzaG93IFNlbGVjdCBBbGwgQ2hlY2tib3ggKGZvciBtYXQtc2VsZWN0W211bHRpPXRydWVdKSAqL1xyXG4gIEBJbnB1dCgpIHNob3dUb2dnbGVBbGxDaGVja2JveCA9IGZhbHNlO1xyXG5cclxuICAvKiogc2VsZWN0IGFsbCBjaGVja2JveCBjaGVja2VkIHN0YXRlICovXHJcbiAgQElucHV0KCkgdG9nZ2xlQWxsQ2hlY2tib3hDaGVja2VkID0gZmFsc2U7XHJcblxyXG4gIC8qKiBzZWxlY3QgYWxsIGNoZWNrYm94IGluZGV0ZXJtaW5hdGUgc3RhdGUgKi9cclxuICBASW5wdXQoKSB0b2dnbGVBbGxDaGVja2JveEluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuXHJcbiAgLyoqIERpc3BsYXkgYSBtZXNzYWdlIGluIGEgdG9vbHRpcCBvbiB0aGUgdG9nZ2xlLWFsbCBjaGVja2JveCAqL1xyXG4gIEBJbnB1dCgpIHRvZ2dsZUFsbENoZWNrYm94VG9vbHRpcE1lc3NhZ2UgPSAnJztcclxuXHJcbiAgLyoqIERlZmluZSB0aGUgcG9zaXRpb24gb2YgdGhlIHRvb2x0aXAgb24gdGhlIHRvZ2dsZS1hbGwgY2hlY2tib3guICovXHJcbiAgQElucHV0KCkgdG9vZ2xlQWxsQ2hlY2tib3hUb29sdGlwUG9zaXRpb246ICdsZWZ0JyB8ICdyaWdodCcgfCAnYWJvdmUnIHwgJ2JlbG93JyB8ICdiZWZvcmUnIHwgJ2FmdGVyJyA9ICdiZWxvdyc7XHJcblxyXG4gIC8qKiBPdXRwdXQgZW1pdHRlciB0byBzZW5kIHRvIHBhcmVudCBjb21wb25lbnQgd2l0aCB0aGUgdG9nZ2xlIGFsbCBib29sZWFuICovXHJcbiAgQE91dHB1dCgpIHRvZ2dsZUFsbCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgLyoqIFJlZmVyZW5jZSB0byB0aGUgc2VhcmNoIGlucHV0IGZpZWxkICovXHJcbiAgQFZpZXdDaGlsZCgnc2VhcmNoU2VsZWN0SW5wdXQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KSBzZWFyY2hTZWxlY3RJbnB1dDogRWxlbWVudFJlZjtcclxuXHJcbiAgLyoqIFJlZmVyZW5jZSB0byB0aGUgc2VhcmNoIGlucHV0IGZpZWxkICovXHJcbiAgQFZpZXdDaGlsZCgnaW5uZXJTZWxlY3RTZWFyY2gnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KSBpbm5lclNlbGVjdFNlYXJjaDogRWxlbWVudFJlZjtcclxuXHJcbiAgLyoqIFJlZmVyZW5jZSB0byBjdXN0b20gc2VhcmNoIGlucHV0IGNsZWFyIGljb24gKi9cclxuICBAQ29udGVudENoaWxkKE1hdFNlbGVjdFNlYXJjaENsZWFyRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UgfSkgY2xlYXJJY29uOiBNYXRTZWxlY3RTZWFyY2hDbGVhckRpcmVjdGl2ZTtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tYXQtc2VsZWN0LXNlYXJjaC1pbnNpZGUtbWF0LW9wdGlvbicpXHJcbiAgZ2V0IGlzSW5zaWRlTWF0T3B0aW9uKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhdGhpcy5tYXRPcHRpb247XHJcbiAgfVxyXG5cclxuICAvKiogQ3VycmVudCBzZWFyY2ggdmFsdWUgKi9cclxuICBnZXQgdmFsdWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9mb3JtQ29udHJvbC52YWx1ZTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfbGFzdEV4dGVybmFsSW5wdXRWYWx1ZTogc3RyaW5nO1xyXG5cclxuICBvblRvdWNoZWQ6IEZ1bmN0aW9uID0gKF86IGFueSkgPT4geyB9O1xyXG5cclxuICAvKiogUmVmZXJlbmNlIHRvIHRoZSBNYXRTZWxlY3Qgb3B0aW9ucyAqL1xyXG4gIHB1YmxpYyBzZXQgX29wdGlvbnMoX29wdGlvbnM6IFF1ZXJ5TGlzdDxNYXRPcHRpb24+KSB7XHJcbiAgICB0aGlzLl9vcHRpb25zJC5uZXh0KF9vcHRpb25zKTtcclxuICB9XHJcbiAgcHVibGljIGdldCBfb3B0aW9ucygpOiBRdWVyeUxpc3Q8TWF0T3B0aW9uPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucyQuZ2V0VmFsdWUoKTtcclxuICB9XHJcbiAgcHVibGljIF9vcHRpb25zJDogQmVoYXZpb3JTdWJqZWN0PFF1ZXJ5TGlzdDxNYXRPcHRpb24+PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8UXVlcnlMaXN0PE1hdE9wdGlvbj4+KG51bGwpO1xyXG5cclxuICBwcml2YXRlIG9wdGlvbnNMaXN0JDogT2JzZXJ2YWJsZTxNYXRPcHRpb25bXT4gPSB0aGlzLl9vcHRpb25zJC5waXBlKFxyXG4gICAgc3dpdGNoTWFwKF9vcHRpb25zID0+IF9vcHRpb25zID9cclxuICAgICAgX29wdGlvbnMuY2hhbmdlcy5waXBlKFxyXG4gICAgICAgIG1hcChvcHRpb25zID0+IG9wdGlvbnMudG9BcnJheSgpKSxcclxuICAgICAgICBzdGFydFdpdGg8TWF0T3B0aW9uW10+KF9vcHRpb25zLnRvQXJyYXkoKSksXHJcbiAgICAgICkgOiBvZihudWxsKVxyXG4gICAgKVxyXG4gICk7XHJcblxyXG4gIHByaXZhdGUgb3B0aW9uc0xlbmd0aCQ6IE9ic2VydmFibGU8bnVtYmVyPiA9IHRoaXMub3B0aW9uc0xpc3QkLnBpcGUoXHJcbiAgICBtYXAob3B0aW9ucyA9PiBvcHRpb25zID8gb3B0aW9ucy5sZW5ndGggOiAwKVxyXG4gICk7XHJcblxyXG4gIC8qKiBQcmV2aW91c2x5IHNlbGVjdGVkIHZhbHVlcyB3aGVuIHVzaW5nIDxtYXQtc2VsZWN0IFttdWx0aXBsZV09XCJ0cnVlXCI+Ki9cclxuICBwcml2YXRlIHByZXZpb3VzU2VsZWN0ZWRWYWx1ZXM6IGFueVtdO1xyXG5cclxuICBwdWJsaWMgX2Zvcm1Db250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XHJcblxyXG4gIC8qKiB3aGV0aGVyIHRvIHNob3cgdGhlIG5vIGVudHJpZXMgZm91bmQgbWVzc2FnZSAqL1xyXG4gIHB1YmxpYyBfc2hvd05vRW50cmllc0ZvdW5kJDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IGNvbWJpbmVMYXRlc3QoW1xyXG4gICAgdGhpcy5fZm9ybUNvbnRyb2wudmFsdWVDaGFuZ2VzLFxyXG4gICAgdGhpcy5vcHRpb25zTGVuZ3RoJFxyXG4gIF0pLnBpcGUoXHJcbiAgICBtYXAoKFt2YWx1ZSwgb3B0aW9uc0xlbmd0aF0pID0+IHRoaXMubm9FbnRyaWVzRm91bmRMYWJlbCAmJiB2YWx1ZVxyXG4gICAgICAmJiBvcHRpb25zTGVuZ3RoID09PSB0aGlzLmdldE9wdGlvbnNMZW5ndGhPZmZzZXQoKSlcclxuICApO1xyXG5cclxuICAvKiogU3ViamVjdCB0aGF0IGVtaXRzIHdoZW4gdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBkZXN0cm95ZWQuICovXHJcbiAgcHJpdmF0ZSBfb25EZXN0cm95ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTWF0U2VsZWN0KSBwdWJsaWMgbWF0U2VsZWN0OiBNYXRTZWxlY3QsXHJcbiAgICBwdWJsaWMgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBfdmlld3BvcnRSdWxlcjogVmlld3BvcnRSdWxlcixcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTWF0T3B0aW9uKSBwdWJsaWMgbWF0T3B0aW9uOiBNYXRPcHRpb24gPSBudWxsLFxyXG4gICAgcHJpdmF0ZSBsaXZlQW5ub3VuY2VyOiBMaXZlQW5ub3VuY2VyLFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChNYXRGb3JtRmllbGQpIHB1YmxpYyBtYXRGb3JtRmllbGQ6IE1hdEZvcm1GaWVsZCA9IG51bGxcclxuICApIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gc2V0IGN1c3RvbSBwYW5lbCBjbGFzc1xyXG4gICAgY29uc3QgcGFuZWxDbGFzcyA9ICdtYXQtc2VsZWN0LXNlYXJjaC1wYW5lbCc7XHJcbiAgICBpZiAodGhpcy5tYXRTZWxlY3QucGFuZWxDbGFzcykge1xyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLm1hdFNlbGVjdC5wYW5lbENsYXNzKSkge1xyXG4gICAgICAgICg8c3RyaW5nW10+dGhpcy5tYXRTZWxlY3QucGFuZWxDbGFzcykucHVzaChwYW5lbENsYXNzKTtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5tYXRTZWxlY3QucGFuZWxDbGFzcyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICB0aGlzLm1hdFNlbGVjdC5wYW5lbENsYXNzID0gW3RoaXMubWF0U2VsZWN0LnBhbmVsQ2xhc3MsIHBhbmVsQ2xhc3NdO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLm1hdFNlbGVjdC5wYW5lbENsYXNzID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRoaXMubWF0U2VsZWN0LnBhbmVsQ2xhc3NbcGFuZWxDbGFzc10gPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm1hdFNlbGVjdC5wYW5lbENsYXNzID0gcGFuZWxDbGFzcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXQgY3VzdG9tIG1hdC1vcHRpb24gY2xhc3MgaWYgdGhlIGNvbXBvbmVudCB3YXMgcGxhY2VkIGluc2lkZSBhIG1hdC1vcHRpb25cclxuICAgIGlmICh0aGlzLm1hdE9wdGlvbikge1xyXG4gICAgICB0aGlzLm1hdE9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMubWF0T3B0aW9uLl9nZXRIb3N0RWxlbWVudCgpLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5zLW1hdC1zZWxlY3Qtc2VhcmNoJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCc8bmd4LW1hdC1zZWxlY3Qtc2VhcmNoPiBtdXN0IGJlIHBsYWNlZCBpbnNpZGUgYSA8bWF0LW9wdGlvbj4gZWxlbWVudCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHdoZW4gdGhlIHNlbGVjdCBkcm9wZG93biBwYW5lbCBpcyBvcGVuZWQgb3IgY2xvc2VkXHJcbiAgICB0aGlzLm1hdFNlbGVjdC5vcGVuZWRDaGFuZ2VcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgZGVsYXkoMSksXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSlcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKChvcGVuZWQpID0+IHtcclxuICAgICAgICBpZiAob3BlbmVkKSB7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZUlucHV0V2lkdGgoKTtcclxuICAgICAgICAgIC8vIGZvY3VzIHRoZSBzZWFyY2ggZmllbGQgd2hlbiBvcGVuaW5nXHJcbiAgICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZUluaXRpYWxGb2N1cykge1xyXG4gICAgICAgICAgICB0aGlzLl9mb2N1cygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBjbGVhciBpdCB3aGVuIGNsb3NpbmdcclxuICAgICAgICAgIGlmICh0aGlzLmNsZWFyU2VhcmNoSW5wdXQpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVzZXQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgLy8gc2V0IHRoZSBmaXJzdCBpdGVtIGFjdGl2ZSBhZnRlciB0aGUgb3B0aW9ucyBjaGFuZ2VkXHJcbiAgICB0aGlzLm1hdFNlbGVjdC5vcGVuZWRDaGFuZ2VcclxuICAgICAgLnBpcGUodGFrZSgxKSlcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1hdFNlbGVjdC5fa2V5TWFuYWdlcikge1xyXG4gICAgICAgICAgdGhpcy5tYXRTZWxlY3QuX2tleU1hbmFnZXIuY2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSkpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5hZGp1c3RTY3JvbGxUb3BUb0ZpdEFjdGl2ZU9wdGlvbkludG9WaWV3KCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnX2tleU1hbmFnZXIgd2FzIG5vdCBpbml0aWFsaXplZC4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSB0aGlzLm1hdFNlbGVjdC5vcHRpb25zO1xyXG5cclxuICAgICAgICAvLyBDbG9zdXJlIHZhcmlhYmxlIGZvciB0cmFja2luZyB0aGUgbW9zdCByZWNlbnQgZmlyc3Qgb3B0aW9uLlxyXG4gICAgICAgIC8vIEluIG9yZGVyIHRvIGF2b2lkIGF2b2lkIGNhdXNpbmcgdGhlIGxpc3QgdG9cclxuICAgICAgICAvLyBzY3JvbGwgdG8gdGhlIHRvcCB3aGVuIG9wdGlvbnMgYXJlIGFkZGVkIHRvIHRoZSBib3R0b20gb2ZcclxuICAgICAgICAvLyB0aGUgbGlzdCAoZWc6IGluZmluaXRlIHNjcm9sbCksIHdlIGNvbXBhcmUgb25seVxyXG4gICAgICAgIC8vIHRoZSBjaGFuZ2VzIHRvIHRoZSBmaXJzdCBvcHRpb25zIHRvIGRldGVybWluZSBpZiB3ZVxyXG4gICAgICAgIC8vIHNob3VsZCBzZXQgdGhlIGZpcnN0IGl0ZW0gYXMgYWN0aXZlLlxyXG4gICAgICAgIC8vIFRoaXMgcHJldmVudHMgdW5uZWNlc3Nhcnkgc2Nyb2xsaW5nIHRvIHRoZSB0b3Agb2YgdGhlIGxpc3RcclxuICAgICAgICAvLyB3aGVuIG9wdGlvbnMgYXJlIGFwcGVuZGVkLCBidXQgYWxsb3dzIHRoZSBmaXJzdCBpdGVtXHJcbiAgICAgICAgLy8gaW4gdGhlIGxpc3QgdG8gYmUgc2V0IGFzIGFjdGl2ZSBieSBkZWZhdWx0IHdoZW4gdGhlcmVcclxuICAgICAgICAvLyBpcyBubyBhY3RpdmUgc2VsZWN0aW9uXHJcbiAgICAgICAgbGV0IHByZXZpb3VzRmlyc3RPcHRpb24gPSB0aGlzLl9vcHRpb25zLnRvQXJyYXkoKVt0aGlzLmdldE9wdGlvbnNMZW5ndGhPZmZzZXQoKV07XHJcblxyXG4gICAgICAgIHRoaXMuX29wdGlvbnMuY2hhbmdlc1xyXG4gICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgIHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gYXZvaWQgXCJleHByZXNzaW9uIGhhcyBiZWVuIGNoYW5nZWRcIiBlcnJvclxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAvLyBDb252ZXJ0IHRoZSBRdWVyeUxpc3QgdG8gYW4gYXJyYXlcclxuICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5fb3B0aW9ucy50b0FycmF5KCk7XHJcblxyXG4gICAgICAgICAgICAgIC8vIFRoZSB0cnVlIGZpcnN0IGl0ZW0gaXMgb2Zmc2V0IGJ5IDFcclxuICAgICAgICAgICAgICBjb25zdCBjdXJyZW50Rmlyc3RPcHRpb24gPSBvcHRpb25zW3RoaXMuZ2V0T3B0aW9uc0xlbmd0aE9mZnNldCgpXTtcclxuXHJcbiAgICAgICAgICAgICAgY29uc3Qga2V5TWFuYWdlciA9IHRoaXMubWF0U2VsZWN0Ll9rZXlNYW5hZ2VyO1xyXG4gICAgICAgICAgICAgIGlmIChrZXlNYW5hZ2VyICYmIHRoaXMubWF0U2VsZWN0LnBhbmVsT3Blbikge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHNldCBmaXJzdCBpdGVtIGFjdGl2ZSBhbmQgaW5wdXQgd2lkdGhcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgdGhlIGZpcnN0IG9wdGlvbiBpbiB0aGVzZSBjaGFuZ2VzIGlzIGRpZmZlcmVudCBmcm9tIHRoZSBwcmV2aW91cy5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0T3B0aW9uSXNDaGFuZ2VkID0gIXRoaXMubWF0U2VsZWN0LmNvbXBhcmVXaXRoKHByZXZpb3VzRmlyc3RPcHRpb24sIGN1cnJlbnRGaXJzdE9wdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ0FTRTogVGhlIGZpcnN0IG9wdGlvbiBpcyBkaWZmZXJlbnQgbm93LlxyXG4gICAgICAgICAgICAgICAgLy8gSW5kaWNpYXRlcyB3ZSBzaG91bGQgc2V0IGl0IGFzIGFjdGl2ZSBhbmQgc2Nyb2xsIHRvIHRoZSB0b3AuXHJcbiAgICAgICAgICAgICAgICBpZiAoZmlyc3RPcHRpb25Jc0NoYW5nZWRcclxuICAgICAgICAgICAgICAgICAgfHwgIWtleU1hbmFnZXIuYWN0aXZlSXRlbVxyXG4gICAgICAgICAgICAgICAgICB8fCAhb3B0aW9ucy5maW5kKG9wdGlvbiA9PiB0aGlzLm1hdFNlbGVjdC5jb21wYXJlV2l0aChvcHRpb24sIGtleU1hbmFnZXIuYWN0aXZlSXRlbSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgIGtleU1hbmFnZXIuc2V0Rmlyc3RJdGVtQWN0aXZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gd2FpdCBmb3IgcGFuZWwgd2lkdGggY2hhbmdlc1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSW5wdXRXaWR0aCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVTY3JvbGxUb0FjdGl2ZU9uT3B0aW9uc0NoYW5nZWQpIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5hZGp1c3RTY3JvbGxUb3BUb0ZpdEFjdGl2ZU9wdGlvbkludG9WaWV3KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAvLyBVcGRhdGUgb3VyIHJlZmVyZW5jZVxyXG4gICAgICAgICAgICAgIHByZXZpb3VzRmlyc3RPcHRpb24gPSBjdXJyZW50Rmlyc3RPcHRpb247XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIC8vIGFkZCBvciByZW1vdmUgY3NzIGNsYXNzIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRvIHNob3cgdGhlIG5vIGVudHJpZXMgZm91bmQgbWVzc2FnZVxyXG4gICAgLy8gbm90ZTogdGhpcyBpcyBoYWNreVxyXG4gICAgdGhpcy5fc2hvd05vRW50cmllc0ZvdW5kJC5waXBlKFxyXG4gICAgICB0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KVxyXG4gICAgKS5zdWJzY3JpYmUoc2hvd05vRW50cmllc0ZvdW5kID0+IHtcclxuICAgICAgLy8gc2V0IG5vIGVudHJpZXMgZm91bmQgY2xhc3Mgb24gbWF0IG9wdGlvblxyXG4gICAgICBpZiAodGhpcy5tYXRPcHRpb24pIHtcclxuICAgICAgICBpZiAoc2hvd05vRW50cmllc0ZvdW5kKSB7XHJcbiAgICAgICAgICB0aGlzLm1hdE9wdGlvbi5fZ2V0SG9zdEVsZW1lbnQoKS5jbGFzc0xpc3QuYWRkKCdtYXQtc2VsZWN0LXNlYXJjaC1uby1lbnRyaWVzLWZvdW5kJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMubWF0T3B0aW9uLl9nZXRIb3N0RWxlbWVudCgpLmNsYXNzTGlzdC5yZW1vdmUoJ21hdC1zZWxlY3Qtc2VhcmNoLW5vLWVudHJpZXMtZm91bmQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJlc2l6ZSB0aGUgaW5wdXQgd2lkdGggd2hlbiB0aGUgdmlld3BvcnQgaXMgcmVzaXplZCwgaS5lLiB0aGUgdHJpZ2dlciB3aWR0aCBjb3VsZCBwb3RlbnRpYWxseSBiZSByZXNpemVkXHJcbiAgICB0aGlzLl92aWV3cG9ydFJ1bGVyLmNoYW5nZSgpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5tYXRTZWxlY3QucGFuZWxPcGVuKSB7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZUlucHV0V2lkdGgoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaW5pdE11bHRpcGxlSGFuZGxpbmcoKTtcclxuXHJcbiAgICB0aGlzLm9wdGlvbnNMaXN0JC5waXBlKFxyXG4gICAgICB0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KVxyXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAvLyB1cGRhdGUgdmlldyB3aGVuIGF2YWlsYWJsZSBvcHRpb25zIGNoYW5nZVxyXG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfZW1pdFNlbGVjdEFsbEJvb2xlYW5Ub1BhcmVudChzdGF0ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy50b2dnbGVBbGwuZW1pdChzdGF0ZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuX29uRGVzdHJveS5uZXh0KCk7XHJcbiAgICB0aGlzLl9vbkRlc3Ryb3kuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIF9pc1RvZ2dsZUFsbENoZWNrYm94VmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm1hdFNlbGVjdC5tdWx0aXBsZSAmJiB0aGlzLnNob3dUb2dnbGVBbGxDaGVja2JveDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXMgdGhlIGtleSBkb3duIGV2ZW50IHdpdGggTWF0U2VsZWN0LlxyXG4gICAqIEFsbG93cyBlLmcuIHNlbGVjdGluZyB3aXRoIGVudGVyIGtleSwgbmF2aWdhdGlvbiB3aXRoIGFycm93IGtleXMsIGV0Yy5cclxuICAgKiBAcGFyYW0gZXZlbnRcclxuICAgKi9cclxuICBfaGFuZGxlS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgLy8gUHJldmVudCBwcm9wYWdhdGlvbiBmb3IgYWxsIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzIGluIG9yZGVyIHRvIGF2b2lkIHNlbGVjdGlvbiBpc3N1ZXNcclxuICAgIGlmICgoZXZlbnQua2V5ICYmIGV2ZW50LmtleS5sZW5ndGggPT09IDEpIHx8XHJcbiAgICAgIChldmVudC5rZXlDb2RlID49IEEgJiYgZXZlbnQua2V5Q29kZSA8PSBaKSB8fFxyXG4gICAgICAoZXZlbnQua2V5Q29kZSA+PSBaRVJPICYmIGV2ZW50LmtleUNvZGUgPD0gTklORSkgfHxcclxuICAgICAgKGV2ZW50LmtleUNvZGUgPT09IFNQQUNFKVxyXG4gICAgICB8fCAodGhpcy5wcmV2ZW50SG9tZUVuZEtleVByb3BhZ2F0aW9uICYmIChldmVudC5rZXlDb2RlID09PSBIT01FIHx8IGV2ZW50LmtleUNvZGUgPT09IEVORCkpXHJcbiAgICApIHtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubWF0U2VsZWN0Lm11bHRpcGxlICYmIGV2ZW50LmtleSAmJiBldmVudC5rZXlDb2RlID09PSBFTlRFUikge1xyXG4gICAgICAvLyBSZWdhaW4gZm9jdXMgYWZ0ZXIgbXVsdGlzZWxlY3QsIHNvIHdlIGNhbiBmdXJ0aGVyIHR5cGVcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9mb2N1cygpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTcGVjaWFsIGNhc2UgaWYgY2xpY2sgRXNjYXBlLCBpZiBpbnB1dCBpcyBlbXB0eSwgY2xvc2UgdGhlIGRyb3Bkb3duLCBpZiBub3QsIGVtcHR5IG91dCB0aGUgc2VhcmNoIGZpZWxkXHJcbiAgICBpZiAodGhpcy5lbmFibGVDbGVhck9uRXNjYXBlUHJlc3NlZCA9PT0gdHJ1ZSAmJiBldmVudC5rZXlDb2RlID09PSBFU0NBUEUgJiYgdGhpcy52YWx1ZSkge1xyXG4gICAgICB0aGlzLl9yZXNldCh0cnVlKTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBIYW5kbGVzIHRoZSBrZXkgdXAgZXZlbnQgd2l0aCBNYXRTZWxlY3QuXHJcbiAgICogQWxsb3dzIGUuZy4gdGhlIGFubm91bmNpbmcgb2YgdGhlIGN1cnJlbnRseSBhY3RpdmVEZXNjZW5kYW50IGJ5IHNjcmVlbiByZWFkZXJzLlxyXG4gICAqL1xyXG4gIF9oYW5kbGVLZXl1cChldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IFVQX0FSUk9XIHx8IGV2ZW50LmtleUNvZGUgPT09IERPV05fQVJST1cpIHtcclxuICAgICAgY29uc3QgYXJpYUFjdGl2ZURlc2NlbmRhbnRJZCA9IHRoaXMubWF0U2VsZWN0Ll9nZXRBcmlhQWN0aXZlRGVzY2VuZGFudCgpO1xyXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuX29wdGlvbnMudG9BcnJheSgpLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaWQgPT09IGFyaWFBY3RpdmVEZXNjZW5kYW50SWQpO1xyXG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlRGVzY2VuZGFudCA9IHRoaXMuX29wdGlvbnMudG9BcnJheSgpW2luZGV4XTtcclxuICAgICAgICB0aGlzLmxpdmVBbm5vdW5jZXIuYW5ub3VuY2UoXHJcbiAgICAgICAgICBhY3RpdmVEZXNjZW5kYW50LnZpZXdWYWx1ZSArICcgJ1xyXG4gICAgICAgICAgKyB0aGlzLmdldEFyaWFJbmRleChpbmRleClcclxuICAgICAgICAgICsgdGhpcy5pbmRleEFuZExlbmd0aFNjcmVlblJlYWRlclRleHRcclxuICAgICAgICAgICsgdGhpcy5nZXRBcmlhTGVuZ3RoKClcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxjdWxhdGUgdGhlIGluZGV4IG9mIHRoZSBjdXJyZW50IG9wdGlvbiwgdGFraW5nIHRoZSBvZmZzZXQgdG8gbGVuZ3RoIGludG8gYWNjb3VudC5cclxuICAgKiBleGFtcGxlczpcclxuICAgKiAgICBDYXNlIDEgW1NlYXJjaCwgMSwgMiwgM10gd2lsbCBoYXZlIG9mZnNldCBvZiAxLCBkdWUgdG8gc2VhcmNoIGFuZCB3aWxsIHJlYWQgaW5kZXggb2YgdG90YWwuXHJcbiAgICogICAgQ2FzZSAyIFsxLCAyLCAzXSB3aWxsIGhhdmUgb2Zmc2V0IG9mIDAgYW5kIHdpbGwgcmVhZCBpbmRleCArMSBvZiB0b3RhbC5cclxuICAgKi9cclxuICBnZXRBcmlhSW5kZXgob3B0aW9uSW5kZXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBpZiAodGhpcy5nZXRPcHRpb25zTGVuZ3RoT2Zmc2V0KCkgPT09IDApIHtcclxuICAgICAgcmV0dXJuIG9wdGlvbkluZGV4ICsgMTtcclxuICAgIH1cclxuICAgIHJldHVybiBvcHRpb25JbmRleDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGN1bGF0ZSB0aGUgbGVuZ3RoIG9mIHRoZSBvcHRpb25zLCB0YWtpbmcgdGhlIG9mZnNldCB0byBsZW5ndGggaW50byBhY2NvdW50LlxyXG4gICAqIGV4YW1wbGVzOlxyXG4gICAqICAgIENhc2UgMSBbU2VhcmNoLCAxLCAyLCAzXSB3aWxsIGhhdmUgbGVuZ3RoIG9mIG9wdGlvbnMubGVuZ3RoIC0xLCBkdWUgdG8gc2VhcmNoLlxyXG4gICAqICAgIENhc2UgMiBbMSwgMiwgM10gd2lsbCBoYXZlIGxlbmd0aCBvZiBvcHRpb25zLmxlbmd0aC5cclxuICAgKi9cclxuICBnZXRBcmlhTGVuZ3RoKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucy50b0FycmF5KCkubGVuZ3RoIC0gdGhpcy5nZXRPcHRpb25zTGVuZ3RoT2Zmc2V0KCk7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2xhc3RFeHRlcm5hbElucHV0VmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMuX2Zvcm1Db250cm9sLnNldFZhbHVlKHZhbHVlKTtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBvbkJsdXIoKSB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQpIHtcclxuICAgIHRoaXMuX2Zvcm1Db250cm9sLnZhbHVlQ2hhbmdlcy5waXBlKFxyXG4gICAgICBmaWx0ZXIodmFsdWUgPT4gdmFsdWUgIT09IHRoaXMuX2xhc3RFeHRlcm5hbElucHV0VmFsdWUpLFxyXG4gICAgICB0YXAoKCkgPT4gdGhpcy5fbGFzdEV4dGVybmFsSW5wdXRWYWx1ZSA9IHVuZGVmaW5lZCksXHJcbiAgICAgIHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpXHJcbiAgICApLnN1YnNjcmliZShmbik7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGb2N1c2VzIHRoZSBzZWFyY2ggaW5wdXQgZmllbGRcclxuICAgKi9cclxuICBwdWJsaWMgX2ZvY3VzKCkge1xyXG4gICAgaWYgKCF0aGlzLnNlYXJjaFNlbGVjdElucHV0IHx8ICF0aGlzLm1hdFNlbGVjdC5wYW5lbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBzYXZlIGFuZCByZXN0b3JlIHNjcm9sbFRvcCBvZiBwYW5lbCwgc2luY2UgaXQgd2lsbCBiZSByZXNldCBieSBmb2N1cygpXHJcbiAgICAvLyBub3RlOiB0aGlzIGlzIGhhY2t5XHJcbiAgICBjb25zdCBwYW5lbCA9IHRoaXMubWF0U2VsZWN0LnBhbmVsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBjb25zdCBzY3JvbGxUb3AgPSBwYW5lbC5zY3JvbGxUb3A7XHJcblxyXG4gICAgLy8gZm9jdXNcclxuICAgIHRoaXMuc2VhcmNoU2VsZWN0SW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG5cclxuICAgIHBhbmVsLnNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2V0cyB0aGUgY3VycmVudCBzZWFyY2ggdmFsdWVcclxuICAgKiBAcGFyYW0gZm9jdXMgd2hldGhlciB0byBmb2N1cyBhZnRlciByZXNldHRpbmdcclxuICAgKi9cclxuICBwdWJsaWMgX3Jlc2V0KGZvY3VzPzogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fZm9ybUNvbnRyb2wuc2V0VmFsdWUoJycpO1xyXG4gICAgaWYgKGZvY3VzKSB7XHJcbiAgICAgIHRoaXMuX2ZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZXMgaGFuZGxpbmcgPG1hdC1zZWxlY3QgW211bHRpcGxlXT1cInRydWVcIj5cclxuICAgKiBOb3RlOiB0byBpbXByb3ZlIHRoaXMgY29kZSwgbWF0LXNlbGVjdCBzaG91bGQgYmUgZXh0ZW5kZWQgdG8gYWxsb3cgZGlzYWJsaW5nIHJlc2V0dGluZyB0aGUgc2VsZWN0aW9uIHdoaWxlIGZpbHRlcmluZy5cclxuICAgKi9cclxuICBwcml2YXRlIGluaXRNdWx0aXBsZUhhbmRsaW5nKCkge1xyXG4gICAgaWYgKCF0aGlzLm1hdFNlbGVjdC5uZ0NvbnRyb2wpIHtcclxuICAgICAgaWYgKHRoaXMubWF0U2VsZWN0Lm11bHRpcGxlKSB7XHJcbiAgICAgICAgLy8gbm90ZTogdGhlIGFjY2VzcyB0byBtYXRTZWxlY3QubmdDb250cm9sIChpbnN0ZWFkIG9mIG1hdFNlbGVjdC52YWx1ZSAvIG1hdFNlbGVjdC52YWx1ZUNoYW5nZXMpXHJcbiAgICAgICAgLy8gaXMgbmVjZXNzYXJ5IHRvIHByb3Blcmx5IHdvcmsgaW4gbXVsdGktc2VsZWN0aW9uIG1vZGUuXHJcbiAgICAgICAgY29uc29sZS5lcnJvcigndGhlIG1hdC1zZWxlY3QgY29udGFpbmluZyBuZ3gtbWF0LXNlbGVjdC1zZWFyY2ggbXVzdCBoYXZlIGEgbmdNb2RlbCBvciBmb3JtQ29udHJvbCBkaXJlY3RpdmUgd2hlbiBtdWx0aXBsZT10cnVlJyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gaWYgPG1hdC1zZWxlY3QgW211bHRpcGxlXT1cInRydWVcIj5cclxuICAgIC8vIHN0b3JlIHByZXZpb3VzbHkgc2VsZWN0ZWQgdmFsdWVzIGFuZCByZXN0b3JlIHRoZW0gd2hlbiB0aGV5IGFyZSBkZXNlbGVjdGVkXHJcbiAgICAvLyBiZWNhdXNlIHRoZSBvcHRpb24gaXMgbm90IGF2YWlsYWJsZSB3aGlsZSB3ZSBhcmUgY3VycmVudGx5IGZpbHRlcmluZ1xyXG4gICAgdGhpcy5wcmV2aW91c1NlbGVjdGVkVmFsdWVzID0gdGhpcy5tYXRTZWxlY3QubmdDb250cm9sLnZhbHVlO1xyXG5cclxuICAgIHRoaXMubWF0U2VsZWN0Lm5nQ29udHJvbC52YWx1ZUNoYW5nZXNcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKHZhbHVlcykgPT4ge1xyXG4gICAgICAgIGxldCByZXN0b3JlU2VsZWN0ZWRWYWx1ZXMgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5tYXRTZWxlY3QubXVsdGlwbGUpIHtcclxuICAgICAgICAgIGlmICh0aGlzLl9mb3JtQ29udHJvbC52YWx1ZSAmJiB0aGlzLl9mb3JtQ29udHJvbC52YWx1ZS5sZW5ndGhcclxuICAgICAgICAgICAgJiYgdGhpcy5wcmV2aW91c1NlbGVjdGVkVmFsdWVzICYmIEFycmF5LmlzQXJyYXkodGhpcy5wcmV2aW91c1NlbGVjdGVkVmFsdWVzKSkge1xyXG4gICAgICAgICAgICBpZiAoIXZhbHVlcyB8fCAhQXJyYXkuaXNBcnJheSh2YWx1ZXMpKSB7XHJcbiAgICAgICAgICAgICAgdmFsdWVzID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uVmFsdWVzID0gdGhpcy5tYXRTZWxlY3Qub3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNTZWxlY3RlZFZhbHVlcy5mb3JFYWNoKHByZXZpb3VzVmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgIGlmICghdmFsdWVzLnNvbWUodiA9PiB0aGlzLm1hdFNlbGVjdC5jb21wYXJlV2l0aCh2LCBwcmV2aW91c1ZhbHVlKSlcclxuICAgICAgICAgICAgICAgICYmICFvcHRpb25WYWx1ZXMuc29tZSh2ID0+IHRoaXMubWF0U2VsZWN0LmNvbXBhcmVXaXRoKHYsIHByZXZpb3VzVmFsdWUpKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgYSB2YWx1ZSB0aGF0IHdhcyBzZWxlY3RlZCBiZWZvcmUgaXMgZGVzZWxlY3RlZCBhbmQgbm90IGZvdW5kIGluIHRoZSBvcHRpb25zLCBpdCB3YXMgZGVzZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgLy8gZHVlIHRvIHRoZSBmaWx0ZXJpbmcsIHNvIHdlIHJlc3RvcmUgaXQuXHJcbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaChwcmV2aW91c1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHJlc3RvcmVTZWxlY3RlZFZhbHVlcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c1NlbGVjdGVkVmFsdWVzID0gdmFsdWVzO1xyXG5cclxuICAgICAgICBpZiAocmVzdG9yZVNlbGVjdGVkVmFsdWVzKSB7XHJcbiAgICAgICAgICB0aGlzLm1hdFNlbGVjdC5fb25DaGFuZ2UodmFsdWVzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2Nyb2xscyB0aGUgY3VycmVudGx5IGFjdGl2ZSBvcHRpb24gaW50byB0aGUgdmlldyBpZiBpdCBpcyBub3QgeWV0IHZpc2libGUuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBhZGp1c3RTY3JvbGxUb3BUb0ZpdEFjdGl2ZU9wdGlvbkludG9WaWV3KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubWF0U2VsZWN0LnBhbmVsICYmIHRoaXMubWF0U2VsZWN0Lm9wdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBtYXRPcHRpb25IZWlnaHQgPSB0aGlzLmdldE1hdE9wdGlvbkhlaWdodCgpO1xyXG4gICAgICBjb25zdCBhY3RpdmVPcHRpb25JbmRleCA9IHRoaXMubWF0U2VsZWN0Ll9rZXlNYW5hZ2VyLmFjdGl2ZUl0ZW1JbmRleCB8fCAwO1xyXG4gICAgICBjb25zdCBsYWJlbENvdW50ID0gX2NvdW50R3JvdXBMYWJlbHNCZWZvcmVPcHRpb24oYWN0aXZlT3B0aW9uSW5kZXgsIHRoaXMubWF0U2VsZWN0Lm9wdGlvbnMsIHRoaXMubWF0U2VsZWN0Lm9wdGlvbkdyb3Vwcyk7XHJcbiAgICAgIC8vIElmIHRoZSBjb21wb25lbnQgaXMgaW4gYSBNYXRPcHRpb24sIHRoZSBhY3RpdmVJdGVtSW5kZXggd2lsbCBiZSBvZmZzZXQgYnkgb25lLlxyXG4gICAgICBjb25zdCBpbmRleE9mT3B0aW9uVG9GaXRJbnRvVmlldyA9ICh0aGlzLm1hdE9wdGlvbiA/IC0xIDogMCkgKyBsYWJlbENvdW50ICsgYWN0aXZlT3B0aW9uSW5kZXg7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxUb3AgPSB0aGlzLm1hdFNlbGVjdC5wYW5lbC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcDtcclxuXHJcbiAgICAgIGNvbnN0IHNlYXJjaElucHV0SGVpZ2h0ID0gdGhpcy5pbm5lclNlbGVjdFNlYXJjaC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcclxuICAgICAgY29uc3QgYW1vdW50T2ZWaXNpYmxlT3B0aW9ucyA9IE1hdGguZmxvb3IoKFNFTEVDVF9QQU5FTF9NQVhfSEVJR0hUIC0gc2VhcmNoSW5wdXRIZWlnaHQpIC8gbWF0T3B0aW9uSGVpZ2h0KTtcclxuXHJcbiAgICAgIGNvbnN0IGluZGV4T2ZGaXJzdFZpc2libGVPcHRpb24gPSBNYXRoLnJvdW5kKChjdXJyZW50U2Nyb2xsVG9wICsgc2VhcmNoSW5wdXRIZWlnaHQpIC8gbWF0T3B0aW9uSGVpZ2h0KSAtIDE7XHJcblxyXG4gICAgICBpZiAoaW5kZXhPZkZpcnN0VmlzaWJsZU9wdGlvbiA+PSBpbmRleE9mT3B0aW9uVG9GaXRJbnRvVmlldykge1xyXG4gICAgICAgIHRoaXMubWF0U2VsZWN0LnBhbmVsLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID0gaW5kZXhPZk9wdGlvblRvRml0SW50b1ZpZXcgKiBtYXRPcHRpb25IZWlnaHQ7XHJcbiAgICAgIH0gZWxzZSBpZiAoaW5kZXhPZkZpcnN0VmlzaWJsZU9wdGlvbiArIGFtb3VudE9mVmlzaWJsZU9wdGlvbnMgPD0gaW5kZXhPZk9wdGlvblRvRml0SW50b1ZpZXcpIHtcclxuICAgICAgICB0aGlzLm1hdFNlbGVjdC5wYW5lbC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IChpbmRleE9mT3B0aW9uVG9GaXRJbnRvVmlldyArIDEpICogbWF0T3B0aW9uSGVpZ2h0XHJcbiAgICAgICAgICAtIChTRUxFQ1RfUEFORUxfTUFYX0hFSUdIVCAtIHNlYXJjaElucHV0SGVpZ2h0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIFNldCB0aGUgd2lkdGggb2YgdGhlIGlubmVyU2VsZWN0U2VhcmNoIHRvIGZpdCBldmVuIGN1c3RvbSBzY3JvbGxiYXJzXHJcbiAgICogIEFuZCBzdXBwb3J0IGFsbCBPcGVyYXRpb24gU3lzdGVtc1xyXG4gICAqL1xyXG4gIHB1YmxpYyB1cGRhdGVJbnB1dFdpZHRoKCkge1xyXG4gICAgaWYgKCF0aGlzLmlubmVyU2VsZWN0U2VhcmNoIHx8ICF0aGlzLmlubmVyU2VsZWN0U2VhcmNoLm5hdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5pbm5lclNlbGVjdFNlYXJjaC5uYXRpdmVFbGVtZW50O1xyXG4gICAgbGV0IHBhbmVsRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICB3aGlsZSAoZWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudCkge1xyXG4gICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21hdC1zZWxlY3QtcGFuZWwnKSkge1xyXG4gICAgICAgIHBhbmVsRWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChwYW5lbEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5pbm5lclNlbGVjdFNlYXJjaC5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gcGFuZWxFbGVtZW50LmNsaWVudFdpZHRoICsgJ3B4JztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0TWF0T3B0aW9uSGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICBpZiAodGhpcy5tYXRTZWxlY3Qub3B0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1hdFNlbGVjdC5vcHRpb25zLmZpcnN0Ll9nZXRIb3N0RWxlbWVudCgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERldGVybWluZSB0aGUgb2Zmc2V0IHRvIGxlbmd0aCB0aGF0IGNhbiBiZSBjYXVzZWQgYnkgdGhlIG9wdGlvbmFsIG1hdE9wdGlvbiB1c2VkIGFzIGEgc2VhcmNoIGlucHV0LlxyXG4gICAqL1xyXG4gIHByaXZhdGUgZ2V0T3B0aW9uc0xlbmd0aE9mZnNldCgpOiBudW1iZXIge1xyXG4gICAgaWYgKHRoaXMubWF0T3B0aW9uKSB7XHJcbiAgICAgIHJldHVybiAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=