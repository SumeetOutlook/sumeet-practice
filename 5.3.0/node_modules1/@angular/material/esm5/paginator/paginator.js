/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { coerceNumberProperty, coerceBooleanProperty } from '@angular/cdk/coercion';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation, } from '@angular/core';
import { MatPaginatorIntl } from './paginator-intl';
import { mixinInitialized, mixinDisabled, } from '@angular/material/core';
/** The default page size if there is no page size and there are no provided page size options. */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@angular/material/button';
import * as ɵngcc3 from '@angular/material/tooltip';
import * as ɵngcc4 from '@angular/material/form-field';
import * as ɵngcc5 from '@angular/material/select';
import * as ɵngcc6 from '@angular/material/core';

function MatPaginator_div_2_mat_form_field_3_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-option", 19);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var pageSizeOption_r6 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("value", pageSizeOption_r6);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", pageSizeOption_r6, " ");
} }
function MatPaginator_div_2_mat_form_field_3_Template(rf, ctx) { if (rf & 1) {
    var _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mat-form-field", 16);
    ɵngcc0.ɵɵelementStart(1, "mat-select", 17);
    ɵngcc0.ɵɵlistener("selectionChange", function MatPaginator_div_2_mat_form_field_3_Template_mat_select_selectionChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); var ctx_r7 = ɵngcc0.ɵɵnextContext(2); return ctx_r7._changePageSize($event.value); });
    ɵngcc0.ɵɵtemplate(2, MatPaginator_div_2_mat_form_field_3_mat_option_2_Template, 2, 2, "mat-option", 18);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("color", ctx_r3.color);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("value", ctx_r3.pageSize)("disabled", ctx_r3.disabled)("aria-label", ctx_r3._intl.itemsPerPageLabel);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r3._displayedPageSizeOptions);
} }
function MatPaginator_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 20);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r4.pageSize);
} }
function MatPaginator_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵelementStart(1, "div", 13);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, MatPaginator_div_2_mat_form_field_3_Template, 3, 5, "mat-form-field", 14);
    ɵngcc0.ɵɵtemplate(4, MatPaginator_div_2_div_4_Template, 2, 1, "div", 15);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r0._intl.itemsPerPageLabel, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0._displayedPageSizeOptions.length > 1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0._displayedPageSizeOptions.length <= 1);
} }
function MatPaginator_button_6_Template(rf, ctx) { if (rf & 1) {
    var _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 21);
    ɵngcc0.ɵɵlistener("click", function MatPaginator_button_6_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r10); var ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.firstPage(); });
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(1, "svg", 7);
    ɵngcc0.ɵɵelement(2, "path", 22);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("matTooltip", ctx_r1._intl.firstPageLabel)("matTooltipDisabled", ctx_r1._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r1._previousButtonsDisabled());
    ɵngcc0.ɵɵattribute("aria-label", ctx_r1._intl.firstPageLabel);
} }
function MatPaginator_button_13_Template(rf, ctx) { if (rf & 1) {
    var _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵnamespaceHTML();
    ɵngcc0.ɵɵelementStart(0, "button", 23);
    ɵngcc0.ɵɵlistener("click", function MatPaginator_button_13_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r12); var ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.lastPage(); });
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(1, "svg", 7);
    ɵngcc0.ɵɵelement(2, "path", 24);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("matTooltip", ctx_r2._intl.lastPageLabel)("matTooltipDisabled", ctx_r2._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r2._nextButtonsDisabled());
    ɵngcc0.ɵɵattribute("aria-label", ctx_r2._intl.lastPageLabel);
} }
var DEFAULT_PAGE_SIZE = 50;
/**
 * Change event object that is emitted when the user selects a
 * different page size or navigates to another page.
 */
var PageEvent = /** @class */ (function () {
    function PageEvent() {
    }
    return PageEvent;
}());
export { PageEvent };
// Boilerplate for applying mixins to MatPaginator.
/** @docs-private */
var MatPaginatorBase = /** @class */ (function () {
    function MatPaginatorBase() {
    }
    return MatPaginatorBase;
}());
var _MatPaginatorBase = mixinDisabled(mixinInitialized(MatPaginatorBase));
/**
 * Component to provide navigation between paged information. Displays the size of the current
 * page, user-selectable options to change that size, what items are being shown, and
 * navigational button to go to the previous or next page.
 */
var MatPaginator = /** @class */ (function (_super) {
    __extends(MatPaginator, _super);
    function MatPaginator(_intl, _changeDetectorRef) {
        var _this = _super.call(this) || this;
        _this._intl = _intl;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._pageIndex = 0;
        _this._length = 0;
        _this._pageSizeOptions = [];
        _this._hidePageSize = false;
        _this._showFirstLastButtons = false;
        /** Event emitted when the paginator changes the page size or page index. */
        _this.page = new EventEmitter();
        _this._intlChanges = _intl.changes.subscribe(function () { return _this._changeDetectorRef.markForCheck(); });
        return _this;
    }
    Object.defineProperty(MatPaginator.prototype, "pageIndex", {
        /** The zero-based page index of the displayed list of items. Defaulted to 0. */
        get: function () { return this._pageIndex; },
        set: function (value) {
            this._pageIndex = Math.max(coerceNumberProperty(value), 0);
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatPaginator.prototype, "length", {
        /** The length of the total number of items that are being paginated. Defaulted to 0. */
        get: function () { return this._length; },
        set: function (value) {
            this._length = coerceNumberProperty(value);
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatPaginator.prototype, "pageSize", {
        /** Number of items to display on a page. By default set to 50. */
        get: function () { return this._pageSize; },
        set: function (value) {
            this._pageSize = Math.max(coerceNumberProperty(value), 0);
            this._updateDisplayedPageSizeOptions();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatPaginator.prototype, "pageSizeOptions", {
        /** The set of provided page size options to display to the user. */
        get: function () { return this._pageSizeOptions; },
        set: function (value) {
            this._pageSizeOptions = (value || []).map(function (p) { return coerceNumberProperty(p); });
            this._updateDisplayedPageSizeOptions();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatPaginator.prototype, "hidePageSize", {
        /** Whether to hide the page size selection UI from the user. */
        get: function () { return this._hidePageSize; },
        set: function (value) {
            this._hidePageSize = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatPaginator.prototype, "showFirstLastButtons", {
        /** Whether to show the first/last buttons UI to the user. */
        get: function () { return this._showFirstLastButtons; },
        set: function (value) {
            this._showFirstLastButtons = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    MatPaginator.prototype.ngOnInit = function () {
        this._initialized = true;
        this._updateDisplayedPageSizeOptions();
        this._markInitialized();
    };
    MatPaginator.prototype.ngOnDestroy = function () {
        this._intlChanges.unsubscribe();
    };
    /** Advances to the next page if it exists. */
    MatPaginator.prototype.nextPage = function () {
        if (!this.hasNextPage()) {
            return;
        }
        var previousPageIndex = this.pageIndex;
        this.pageIndex++;
        this._emitPageEvent(previousPageIndex);
    };
    /** Move back to the previous page if it exists. */
    MatPaginator.prototype.previousPage = function () {
        if (!this.hasPreviousPage()) {
            return;
        }
        var previousPageIndex = this.pageIndex;
        this.pageIndex--;
        this._emitPageEvent(previousPageIndex);
    };
    /** Move to the first page if not already there. */
    MatPaginator.prototype.firstPage = function () {
        // hasPreviousPage being false implies at the start
        if (!this.hasPreviousPage()) {
            return;
        }
        var previousPageIndex = this.pageIndex;
        this.pageIndex = 0;
        this._emitPageEvent(previousPageIndex);
    };
    /** Move to the last page if not already there. */
    MatPaginator.prototype.lastPage = function () {
        // hasNextPage being false implies at the end
        if (!this.hasNextPage()) {
            return;
        }
        var previousPageIndex = this.pageIndex;
        this.pageIndex = this.getNumberOfPages() - 1;
        this._emitPageEvent(previousPageIndex);
    };
    /** Whether there is a previous page. */
    MatPaginator.prototype.hasPreviousPage = function () {
        return this.pageIndex >= 1 && this.pageSize != 0;
    };
    /** Whether there is a next page. */
    MatPaginator.prototype.hasNextPage = function () {
        var maxPageIndex = this.getNumberOfPages() - 1;
        return this.pageIndex < maxPageIndex && this.pageSize != 0;
    };
    /** Calculate the number of pages */
    MatPaginator.prototype.getNumberOfPages = function () {
        if (!this.pageSize) {
            return 0;
        }
        return Math.ceil(this.length / this.pageSize);
    };
    /**
     * Changes the page size so that the first item displayed on the page will still be
     * displayed using the new page size.
     *
     * For example, if the page size is 10 and on the second page (items indexed 10-19) then
     * switching so that the page size is 5 will set the third page as the current page so
     * that the 10th item will still be displayed.
     */
    MatPaginator.prototype._changePageSize = function (pageSize) {
        // Current page needs to be updated to reflect the new page size. Navigate to the page
        // containing the previous page's first item.
        var startIndex = this.pageIndex * this.pageSize;
        var previousPageIndex = this.pageIndex;
        this.pageIndex = Math.floor(startIndex / pageSize) || 0;
        this.pageSize = pageSize;
        this._emitPageEvent(previousPageIndex);
    };
    /** Checks whether the buttons for going forwards should be disabled. */
    MatPaginator.prototype._nextButtonsDisabled = function () {
        return this.disabled || !this.hasNextPage();
    };
    /** Checks whether the buttons for going backwards should be disabled. */
    MatPaginator.prototype._previousButtonsDisabled = function () {
        return this.disabled || !this.hasPreviousPage();
    };
    /**
     * Updates the list of page size options to display to the user. Includes making sure that
     * the page size is an option and that the list is sorted.
     */
    MatPaginator.prototype._updateDisplayedPageSizeOptions = function () {
        if (!this._initialized) {
            return;
        }
        // If no page size is provided, use the first page size option or the default page size.
        if (!this.pageSize) {
            this._pageSize = this.pageSizeOptions.length != 0 ?
                this.pageSizeOptions[0] :
                DEFAULT_PAGE_SIZE;
        }
        this._displayedPageSizeOptions = this.pageSizeOptions.slice();
        if (this._displayedPageSizeOptions.indexOf(this.pageSize) === -1) {
            this._displayedPageSizeOptions.push(this.pageSize);
        }
        // Sort the numbers using a number-specific sort function.
        this._displayedPageSizeOptions.sort(function (a, b) { return a - b; });
        this._changeDetectorRef.markForCheck();
    };
    /** Emits an event notifying that a change of the paginator's properties has been triggered. */
    MatPaginator.prototype._emitPageEvent = function (previousPageIndex) {
        this.page.emit({
            previousPageIndex: previousPageIndex,
            pageIndex: this.pageIndex,
            pageSize: this.pageSize,
            length: this.length
        });
    };
    /** @nocollapse */
    MatPaginator.ctorParameters = function () { return [
        { type: MatPaginatorIntl },
        { type: ChangeDetectorRef }
    ]; };
    MatPaginator.propDecorators = {
        color: [{ type: Input }],
        pageIndex: [{ type: Input }],
        length: [{ type: Input }],
        pageSize: [{ type: Input }],
        pageSizeOptions: [{ type: Input }],
        hidePageSize: [{ type: Input }],
        showFirstLastButtons: [{ type: Input }],
        page: [{ type: Output }]
    };
MatPaginator.ɵfac = function MatPaginator_Factory(t) { return new (t || MatPaginator)(ɵngcc0.ɵɵdirectiveInject(MatPaginatorIntl), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
MatPaginator.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatPaginator, selectors: [["mat-paginator"]], hostAttrs: [1, "mat-paginator"], inputs: { disabled: "disabled", pageIndex: "pageIndex", length: "length", pageSize: "pageSize", pageSizeOptions: "pageSizeOptions", hidePageSize: "hidePageSize", showFirstLastButtons: "showFirstLastButtons", color: "color" }, outputs: { page: "page" }, exportAs: ["matPaginator"], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 14, vars: 14, consts: [[1, "mat-paginator-outer-container"], [1, "mat-paginator-container"], ["class", "mat-paginator-page-size", 4, "ngIf"], [1, "mat-paginator-range-actions"], [1, "mat-paginator-range-label"], ["mat-icon-button", "", "type", "button", "class", "mat-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click", 4, "ngIf"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-previous", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["viewBox", "0 0 24 24", "focusable", "false", 1, "mat-paginator-icon"], ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-next", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"], ["mat-icon-button", "", "type", "button", "class", "mat-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click", 4, "ngIf"], [1, "mat-paginator-page-size"], [1, "mat-paginator-page-size-label"], ["class", "mat-paginator-page-size-select", 3, "color", 4, "ngIf"], ["class", "mat-paginator-page-size-value", 4, "ngIf"], [1, "mat-paginator-page-size-select", 3, "color"], [3, "value", "disabled", "aria-label", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "mat-paginator-page-size-value"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]], template: function MatPaginator_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵtemplate(2, MatPaginator_div_2_Template, 5, 3, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "div", 3);
        ɵngcc0.ɵɵelementStart(4, "div", 4);
        ɵngcc0.ɵɵtext(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(6, MatPaginator_button_6_Template, 3, 5, "button", 5);
        ɵngcc0.ɵɵelementStart(7, "button", 6);
        ɵngcc0.ɵɵlistener("click", function MatPaginator_Template_button_click_7_listener() { return ctx.previousPage(); });
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(8, "svg", 7);
        ɵngcc0.ɵɵelement(9, "path", 8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵnamespaceHTML();
        ɵngcc0.ɵɵelementStart(10, "button", 9);
        ɵngcc0.ɵɵlistener("click", function MatPaginator_Template_button_click_10_listener() { return ctx.nextPage(); });
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(11, "svg", 7);
        ɵngcc0.ɵɵelement(12, "path", 10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(13, MatPaginator_button_13_Template, 3, 5, "button", 11);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.hidePageSize);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx._intl.getRangeLabel(ctx.pageIndex, ctx.pageSize, ctx.length), " ");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showFirstLastButtons);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("matTooltip", ctx._intl.previousPageLabel)("matTooltipDisabled", ctx._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx._previousButtonsDisabled());
        ɵngcc0.ɵɵattribute("aria-label", ctx._intl.previousPageLabel);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("matTooltip", ctx._intl.nextPageLabel)("matTooltipDisabled", ctx._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx._nextButtonsDisabled());
        ɵngcc0.ɵɵattribute("aria-label", ctx._intl.nextPageLabel);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showFirstLastButtons);
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.MatButton, ɵngcc3.MatTooltip, ɵngcc4.MatFormField, ɵngcc5.MatSelect, ɵngcc1.NgForOf, ɵngcc6.MatOption], styles: [".mat-paginator{display:block}.mat-paginator-outer-container{display:flex}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;min-height:56px;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center}.mat-paginator-icon{width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}\n"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatPaginator, [{
        type: Component,
        args: [{
                selector: 'mat-paginator',
                exportAs: 'matPaginator',
                template: "<div class=\"mat-paginator-outer-container\">\n  <div class=\"mat-paginator-container\">\n    <div class=\"mat-paginator-page-size\" *ngIf=\"!hidePageSize\">\n      <div class=\"mat-paginator-page-size-label\">\n        {{_intl.itemsPerPageLabel}}\n      </div>\n\n      <mat-form-field\n        *ngIf=\"_displayedPageSizeOptions.length > 1\"\n        [color]=\"color\"\n        class=\"mat-paginator-page-size-select\">\n        <mat-select\n          [value]=\"pageSize\"\n          [disabled]=\"disabled\"\n          [aria-label]=\"_intl.itemsPerPageLabel\"\n          (selectionChange)=\"_changePageSize($event.value)\">\n          <mat-option *ngFor=\"let pageSizeOption of _displayedPageSizeOptions\" [value]=\"pageSizeOption\">\n            {{pageSizeOption}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <div\n        class=\"mat-paginator-page-size-value\"\n        *ngIf=\"_displayedPageSizeOptions.length <= 1\">{{pageSize}}</div>\n    </div>\n\n    <div class=\"mat-paginator-range-actions\">\n      <div class=\"mat-paginator-range-label\">\n        {{_intl.getRangeLabel(pageIndex, pageSize, length)}}\n      </div>\n\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-first\"\n              (click)=\"firstPage()\"\n              [attr.aria-label]=\"_intl.firstPageLabel\"\n              [matTooltip]=\"_intl.firstPageLabel\"\n              [matTooltipDisabled]=\"_previousButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_previousButtonsDisabled()\"\n              *ngIf=\"showFirstLastButtons\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z\"/>\n        </svg>\n      </button>\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-previous\"\n              (click)=\"previousPage()\"\n              [attr.aria-label]=\"_intl.previousPageLabel\"\n              [matTooltip]=\"_intl.previousPageLabel\"\n              [matTooltipDisabled]=\"_previousButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_previousButtonsDisabled()\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/>\n        </svg>\n      </button>\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-next\"\n              (click)=\"nextPage()\"\n              [attr.aria-label]=\"_intl.nextPageLabel\"\n              [matTooltip]=\"_intl.nextPageLabel\"\n              [matTooltipDisabled]=\"_nextButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_nextButtonsDisabled()\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/>\n        </svg>\n      </button>\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-last\"\n              (click)=\"lastPage()\"\n              [attr.aria-label]=\"_intl.lastPageLabel\"\n              [matTooltip]=\"_intl.lastPageLabel\"\n              [matTooltipDisabled]=\"_nextButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_nextButtonsDisabled()\"\n              *ngIf=\"showFirstLastButtons\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z\"/>\n        </svg>\n      </button>\n    </div>\n  </div>\n</div>\n",
                inputs: ['disabled'],
                host: {
                    'class': 'mat-paginator'
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".mat-paginator{display:block}.mat-paginator-outer-container{display:flex}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;min-height:56px;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center}.mat-paginator-icon{width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}\n"]
            }]
    }], function () { return [{ type: MatPaginatorIntl }, { type: ɵngcc0.ChangeDetectorRef }]; }, { pageIndex: [{
            type: Input
        }], length: [{
            type: Input
        }], pageSize: [{
            type: Input
        }], pageSizeOptions: [{
            type: Input
        }], hidePageSize: [{
            type: Input
        }], showFirstLastButtons: [{
            type: Input
        }], color: [{
            type: Input
        }], page: [{
            type: Output
        }] }); })();
    return MatPaginator;
}(_MatPaginatorBase));
export { MatPaginator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvcGFnaW5hdG9yL3BhZ2luYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLHFCQUFxQixFQUd0QixNQUFNLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUdMLGdCQUFnQixFQUVoQixhQUFhLEdBR2QsTUFBTSx3QkFBd0IsQ0FBQztBQUVoQyxrR0FBa0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDbEcsSUFBTSxpQkFBaUIsR0FBRyxFQUFFLENBQUM7QUFFN0I7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ29CLElBRHBCO0FBQXVCLElBZXZCLENBQUM7QUFDRCxJQURBLGdCQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7QUFDRDtBQUNBLG1EQUFtRDtBQUNuRCxvQkFBb0I7QUFDcEI7QUFDMEIsSUFEMUI7QUFDSSxJQURvQixDQUFDO0FBQ3pCLElBRHdCLHVCQUFDO0FBQUQsQ0FBQyxBQUF6QixJQUF5QjtBQUN6QixJQUFNLGlCQUFpQixHQUNuQixhQUFhLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBRVksSUFVc0IsZ0NB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aHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtcbiAgY29lcmNlTnVtYmVyUHJvcGVydHksXG4gIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSxcbiAgQm9vbGVhbklucHV0LFxuICBOdW1iZXJJbnB1dFxufSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7TWF0UGFnaW5hdG9ySW50bH0gZnJvbSAnLi9wYWdpbmF0b3ItaW50bCc7XG5pbXBvcnQge1xuICBIYXNJbml0aWFsaXplZCxcbiAgSGFzSW5pdGlhbGl6ZWRDdG9yLFxuICBtaXhpbkluaXRpYWxpemVkLFxuICBUaGVtZVBhbGV0dGUsXG4gIG1peGluRGlzYWJsZWQsXG4gIENhbkRpc2FibGVDdG9yLFxuICBDYW5EaXNhYmxlLFxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuLyoqIFRoZSBkZWZhdWx0IHBhZ2Ugc2l6ZSBpZiB0aGVyZSBpcyBubyBwYWdlIHNpemUgYW5kIHRoZXJlIGFyZSBubyBwcm92aWRlZCBwYWdlIHNpemUgb3B0aW9ucy4gKi9cbmNvbnN0IERFRkFVTFRfUEFHRV9TSVpFID0gNTA7XG5cbi8qKlxuICogQ2hhbmdlIGV2ZW50IG9iamVjdCB0aGF0IGlzIGVtaXR0ZWQgd2hlbiB0aGUgdXNlciBzZWxlY3RzIGFcbiAqIGRpZmZlcmVudCBwYWdlIHNpemUgb3IgbmF2aWdhdGVzIHRvIGFub3RoZXIgcGFnZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFBhZ2VFdmVudCB7XG4gIC8qKiBUaGUgY3VycmVudCBwYWdlIGluZGV4LiAqL1xuICBwYWdlSW5kZXg6IG51bWJlcjtcblxuICAvKipcbiAgICogSW5kZXggb2YgdGhlIHBhZ2UgdGhhdCB3YXMgc2VsZWN0ZWQgcHJldmlvdXNseS5cbiAgICogQGJyZWFraW5nLWNoYW5nZSA4LjAuMCBUbyBiZSBtYWRlIGludG8gYSByZXF1aXJlZCBwcm9wZXJ0eS5cbiAgICovXG4gIHByZXZpb3VzUGFnZUluZGV4PzogbnVtYmVyO1xuXG4gIC8qKiBUaGUgY3VycmVudCBwYWdlIHNpemUgKi9cbiAgcGFnZVNpemU6IG51bWJlcjtcblxuICAvKiogVGhlIGN1cnJlbnQgdG90YWwgbnVtYmVyIG9mIGl0ZW1zIGJlaW5nIHBhZ2VkICovXG4gIGxlbmd0aDogbnVtYmVyO1xufVxuXG4vLyBCb2lsZXJwbGF0ZSBmb3IgYXBwbHlpbmcgbWl4aW5zIHRvIE1hdFBhZ2luYXRvci5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5jbGFzcyBNYXRQYWdpbmF0b3JCYXNlIHt9XG5jb25zdCBfTWF0UGFnaW5hdG9yQmFzZTogQ2FuRGlzYWJsZUN0b3IgJiBIYXNJbml0aWFsaXplZEN0b3IgJiB0eXBlb2YgTWF0UGFnaW5hdG9yQmFzZSA9XG4gICAgbWl4aW5EaXNhYmxlZChtaXhpbkluaXRpYWxpemVkKE1hdFBhZ2luYXRvckJhc2UpKTtcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gcHJvdmlkZSBuYXZpZ2F0aW9uIGJldHdlZW4gcGFnZWQgaW5mb3JtYXRpb24uIERpc3BsYXlzIHRoZSBzaXplIG9mIHRoZSBjdXJyZW50XG4gKiBwYWdlLCB1c2VyLXNlbGVjdGFibGUgb3B0aW9ucyB0byBjaGFuZ2UgdGhhdCBzaXplLCB3aGF0IGl0ZW1zIGFyZSBiZWluZyBzaG93biwgYW5kXG4gKiBuYXZpZ2F0aW9uYWwgYnV0dG9uIHRvIGdvIHRvIHRoZSBwcmV2aW91cyBvciBuZXh0IHBhZ2UuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1wYWdpbmF0b3InLFxuICBleHBvcnRBczogJ21hdFBhZ2luYXRvcicsXG4gIHRlbXBsYXRlVXJsOiAncGFnaW5hdG9yLmh0bWwnLFxuICBzdHlsZVVybHM6IFsncGFnaW5hdG9yLmNzcyddLFxuICBpbnB1dHM6IFsnZGlzYWJsZWQnXSxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdtYXQtcGFnaW5hdG9yJyxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIE1hdFBhZ2luYXRvciBleHRlbmRzIF9NYXRQYWdpbmF0b3JCYXNlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIENhbkRpc2FibGUsXG4gIEhhc0luaXRpYWxpemVkIHtcbiAgcHJpdmF0ZSBfaW5pdGlhbGl6ZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX2ludGxDaGFuZ2VzOiBTdWJzY3JpcHRpb247XG5cbiAgLyoqIFRoZW1lIGNvbG9yIHRvIGJlIHVzZWQgZm9yIHRoZSB1bmRlcmx5aW5nIGZvcm0gY29udHJvbHMuICovXG4gIEBJbnB1dCgpIGNvbG9yOiBUaGVtZVBhbGV0dGU7XG5cbiAgLyoqIFRoZSB6ZXJvLWJhc2VkIHBhZ2UgaW5kZXggb2YgdGhlIGRpc3BsYXllZCBsaXN0IG9mIGl0ZW1zLiBEZWZhdWx0ZWQgdG8gMC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHBhZ2VJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fcGFnZUluZGV4OyB9XG4gIHNldCBwYWdlSW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3BhZ2VJbmRleCA9IE1hdGgubWF4KGNvZXJjZU51bWJlclByb3BlcnR5KHZhbHVlKSwgMCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgcHJpdmF0ZSBfcGFnZUluZGV4ID0gMDtcblxuICAvKiogVGhlIGxlbmd0aCBvZiB0aGUgdG90YWwgbnVtYmVyIG9mIGl0ZW1zIHRoYXQgYXJlIGJlaW5nIHBhZ2luYXRlZC4gRGVmYXVsdGVkIHRvIDAuICovXG4gIEBJbnB1dCgpXG4gIGdldCBsZW5ndGgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2xlbmd0aDsgfVxuICBzZXQgbGVuZ3RoKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9sZW5ndGggPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh2YWx1ZSk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgcHJpdmF0ZSBfbGVuZ3RoID0gMDtcblxuICAvKiogTnVtYmVyIG9mIGl0ZW1zIHRvIGRpc3BsYXkgb24gYSBwYWdlLiBCeSBkZWZhdWx0IHNldCB0byA1MC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHBhZ2VTaXplKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9wYWdlU2l6ZTsgfVxuICBzZXQgcGFnZVNpemUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3BhZ2VTaXplID0gTWF0aC5tYXgoY29lcmNlTnVtYmVyUHJvcGVydHkodmFsdWUpLCAwKTtcbiAgICB0aGlzLl91cGRhdGVEaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnMoKTtcbiAgfVxuICBwcml2YXRlIF9wYWdlU2l6ZTogbnVtYmVyO1xuXG4gIC8qKiBUaGUgc2V0IG9mIHByb3ZpZGVkIHBhZ2Ugc2l6ZSBvcHRpb25zIHRvIGRpc3BsYXkgdG8gdGhlIHVzZXIuICovXG4gIEBJbnB1dCgpXG4gIGdldCBwYWdlU2l6ZU9wdGlvbnMoKTogbnVtYmVyW10geyByZXR1cm4gdGhpcy5fcGFnZVNpemVPcHRpb25zOyB9XG4gIHNldCBwYWdlU2l6ZU9wdGlvbnModmFsdWU6IG51bWJlcltdKSB7XG4gICAgdGhpcy5fcGFnZVNpemVPcHRpb25zID0gKHZhbHVlIHx8IFtdKS5tYXAocCA9PiBjb2VyY2VOdW1iZXJQcm9wZXJ0eShwKSk7XG4gICAgdGhpcy5fdXBkYXRlRGlzcGxheWVkUGFnZVNpemVPcHRpb25zKCk7XG4gIH1cbiAgcHJpdmF0ZSBfcGFnZVNpemVPcHRpb25zOiBudW1iZXJbXSA9IFtdO1xuXG4gIC8qKiBXaGV0aGVyIHRvIGhpZGUgdGhlIHBhZ2Ugc2l6ZSBzZWxlY3Rpb24gVUkgZnJvbSB0aGUgdXNlci4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGhpZGVQYWdlU2l6ZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2hpZGVQYWdlU2l6ZTsgfVxuICBzZXQgaGlkZVBhZ2VTaXplKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faGlkZVBhZ2VTaXplID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9oaWRlUGFnZVNpemUgPSBmYWxzZTtcblxuXG4gIC8qKiBXaGV0aGVyIHRvIHNob3cgdGhlIGZpcnN0L2xhc3QgYnV0dG9ucyBVSSB0byB0aGUgdXNlci4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHNob3dGaXJzdExhc3RCdXR0b25zKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fc2hvd0ZpcnN0TGFzdEJ1dHRvbnM7IH1cbiAgc2V0IHNob3dGaXJzdExhc3RCdXR0b25zKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd0ZpcnN0TGFzdEJ1dHRvbnMgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX3Nob3dGaXJzdExhc3RCdXR0b25zID0gZmFsc2U7XG5cbiAgLyoqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgcGFnaW5hdG9yIGNoYW5nZXMgdGhlIHBhZ2Ugc2l6ZSBvciBwYWdlIGluZGV4LiAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgcGFnZTogRXZlbnRFbWl0dGVyPFBhZ2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFBhZ2VFdmVudD4oKTtcblxuICAvKiogRGlzcGxheWVkIHNldCBvZiBwYWdlIHNpemUgb3B0aW9ucy4gV2lsbCBiZSBzb3J0ZWQgYW5kIGluY2x1ZGUgY3VycmVudCBwYWdlIHNpemUuICovXG4gIF9kaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnM6IG51bWJlcltdO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfaW50bDogTWF0UGFnaW5hdG9ySW50bCxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9pbnRsQ2hhbmdlcyA9IF9pbnRsLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB0aGlzLl91cGRhdGVEaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnMoKTtcbiAgICB0aGlzLl9tYXJrSW5pdGlhbGl6ZWQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2ludGxDaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvKiogQWR2YW5jZXMgdG8gdGhlIG5leHQgcGFnZSBpZiBpdCBleGlzdHMuICovXG4gIG5leHRQYWdlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNOZXh0UGFnZSgpKSB7IHJldHVybjsgfVxuXG4gICAgY29uc3QgcHJldmlvdXNQYWdlSW5kZXggPSB0aGlzLnBhZ2VJbmRleDtcbiAgICB0aGlzLnBhZ2VJbmRleCsrO1xuICAgIHRoaXMuX2VtaXRQYWdlRXZlbnQocHJldmlvdXNQYWdlSW5kZXgpO1xuICB9XG5cbiAgLyoqIE1vdmUgYmFjayB0byB0aGUgcHJldmlvdXMgcGFnZSBpZiBpdCBleGlzdHMuICovXG4gIHByZXZpb3VzUGFnZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaGFzUHJldmlvdXNQYWdlKCkpIHsgcmV0dXJuOyB9XG5cbiAgICBjb25zdCBwcmV2aW91c1BhZ2VJbmRleCA9IHRoaXMucGFnZUluZGV4O1xuICAgIHRoaXMucGFnZUluZGV4LS07XG4gICAgdGhpcy5fZW1pdFBhZ2VFdmVudChwcmV2aW91c1BhZ2VJbmRleCk7XG4gIH1cblxuICAvKiogTW92ZSB0byB0aGUgZmlyc3QgcGFnZSBpZiBub3QgYWxyZWFkeSB0aGVyZS4gKi9cbiAgZmlyc3RQYWdlKCk6IHZvaWQge1xuICAgIC8vIGhhc1ByZXZpb3VzUGFnZSBiZWluZyBmYWxzZSBpbXBsaWVzIGF0IHRoZSBzdGFydFxuICAgIGlmICghdGhpcy5oYXNQcmV2aW91c1BhZ2UoKSkgeyByZXR1cm47IH1cblxuICAgIGNvbnN0IHByZXZpb3VzUGFnZUluZGV4ID0gdGhpcy5wYWdlSW5kZXg7XG4gICAgdGhpcy5wYWdlSW5kZXggPSAwO1xuICAgIHRoaXMuX2VtaXRQYWdlRXZlbnQocHJldmlvdXNQYWdlSW5kZXgpO1xuICB9XG5cbiAgLyoqIE1vdmUgdG8gdGhlIGxhc3QgcGFnZSBpZiBub3QgYWxyZWFkeSB0aGVyZS4gKi9cbiAgbGFzdFBhZ2UoKTogdm9pZCB7XG4gICAgLy8gaGFzTmV4dFBhZ2UgYmVpbmcgZmFsc2UgaW1wbGllcyBhdCB0aGUgZW5kXG4gICAgaWYgKCF0aGlzLmhhc05leHRQYWdlKCkpIHsgcmV0dXJuOyB9XG5cbiAgICBjb25zdCBwcmV2aW91c1BhZ2VJbmRleCA9IHRoaXMucGFnZUluZGV4O1xuICAgIHRoaXMucGFnZUluZGV4ID0gdGhpcy5nZXROdW1iZXJPZlBhZ2VzKCkgLSAxO1xuICAgIHRoaXMuX2VtaXRQYWdlRXZlbnQocHJldmlvdXNQYWdlSW5kZXgpO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlcmUgaXMgYSBwcmV2aW91cyBwYWdlLiAqL1xuICBoYXNQcmV2aW91c1BhZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFnZUluZGV4ID49IDEgJiYgdGhpcy5wYWdlU2l6ZSAhPSAwO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlcmUgaXMgYSBuZXh0IHBhZ2UuICovXG4gIGhhc05leHRQYWdlKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IG1heFBhZ2VJbmRleCA9IHRoaXMuZ2V0TnVtYmVyT2ZQYWdlcygpIC0gMTtcbiAgICByZXR1cm4gdGhpcy5wYWdlSW5kZXggPCBtYXhQYWdlSW5kZXggJiYgdGhpcy5wYWdlU2l6ZSAhPSAwO1xuICB9XG5cbiAgLyoqIENhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIHBhZ2VzICovXG4gIGdldE51bWJlck9mUGFnZXMoKTogbnVtYmVyIHtcbiAgICBpZiAoIXRoaXMucGFnZVNpemUpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5sZW5ndGggLyB0aGlzLnBhZ2VTaXplKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIHBhZ2Ugc2l6ZSBzbyB0aGF0IHRoZSBmaXJzdCBpdGVtIGRpc3BsYXllZCBvbiB0aGUgcGFnZSB3aWxsIHN0aWxsIGJlXG4gICAqIGRpc3BsYXllZCB1c2luZyB0aGUgbmV3IHBhZ2Ugc2l6ZS5cbiAgICpcbiAgICogRm9yIGV4YW1wbGUsIGlmIHRoZSBwYWdlIHNpemUgaXMgMTAgYW5kIG9uIHRoZSBzZWNvbmQgcGFnZSAoaXRlbXMgaW5kZXhlZCAxMC0xOSkgdGhlblxuICAgKiBzd2l0Y2hpbmcgc28gdGhhdCB0aGUgcGFnZSBzaXplIGlzIDUgd2lsbCBzZXQgdGhlIHRoaXJkIHBhZ2UgYXMgdGhlIGN1cnJlbnQgcGFnZSBzb1xuICAgKiB0aGF0IHRoZSAxMHRoIGl0ZW0gd2lsbCBzdGlsbCBiZSBkaXNwbGF5ZWQuXG4gICAqL1xuICBfY2hhbmdlUGFnZVNpemUocGFnZVNpemU6IG51bWJlcikge1xuICAgIC8vIEN1cnJlbnQgcGFnZSBuZWVkcyB0byBiZSB1cGRhdGVkIHRvIHJlZmxlY3QgdGhlIG5ldyBwYWdlIHNpemUuIE5hdmlnYXRlIHRvIHRoZSBwYWdlXG4gICAgLy8gY29udGFpbmluZyB0aGUgcHJldmlvdXMgcGFnZSdzIGZpcnN0IGl0ZW0uXG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IHRoaXMucGFnZUluZGV4ICogdGhpcy5wYWdlU2l6ZTtcbiAgICBjb25zdCBwcmV2aW91c1BhZ2VJbmRleCA9IHRoaXMucGFnZUluZGV4O1xuXG4gICAgdGhpcy5wYWdlSW5kZXggPSBNYXRoLmZsb29yKHN0YXJ0SW5kZXggLyBwYWdlU2l6ZSkgfHwgMDtcbiAgICB0aGlzLnBhZ2VTaXplID0gcGFnZVNpemU7XG4gICAgdGhpcy5fZW1pdFBhZ2VFdmVudChwcmV2aW91c1BhZ2VJbmRleCk7XG4gIH1cblxuICAvKiogQ2hlY2tzIHdoZXRoZXIgdGhlIGJ1dHRvbnMgZm9yIGdvaW5nIGZvcndhcmRzIHNob3VsZCBiZSBkaXNhYmxlZC4gKi9cbiAgX25leHRCdXR0b25zRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgfHwgIXRoaXMuaGFzTmV4dFBhZ2UoKTtcbiAgfVxuXG4gIC8qKiBDaGVja3Mgd2hldGhlciB0aGUgYnV0dG9ucyBmb3IgZ29pbmcgYmFja3dhcmRzIHNob3VsZCBiZSBkaXNhYmxlZC4gKi9cbiAgX3ByZXZpb3VzQnV0dG9uc0Rpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkIHx8ICF0aGlzLmhhc1ByZXZpb3VzUGFnZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIGxpc3Qgb2YgcGFnZSBzaXplIG9wdGlvbnMgdG8gZGlzcGxheSB0byB0aGUgdXNlci4gSW5jbHVkZXMgbWFraW5nIHN1cmUgdGhhdFxuICAgKiB0aGUgcGFnZSBzaXplIGlzIGFuIG9wdGlvbiBhbmQgdGhhdCB0aGUgbGlzdCBpcyBzb3J0ZWQuXG4gICAqL1xuICBwcml2YXRlIF91cGRhdGVEaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnMoKSB7XG4gICAgaWYgKCF0aGlzLl9pbml0aWFsaXplZCkgeyByZXR1cm47IH1cblxuICAgIC8vIElmIG5vIHBhZ2Ugc2l6ZSBpcyBwcm92aWRlZCwgdXNlIHRoZSBmaXJzdCBwYWdlIHNpemUgb3B0aW9uIG9yIHRoZSBkZWZhdWx0IHBhZ2Ugc2l6ZS5cbiAgICBpZiAoIXRoaXMucGFnZVNpemUpIHtcbiAgICAgIHRoaXMuX3BhZ2VTaXplID0gdGhpcy5wYWdlU2l6ZU9wdGlvbnMubGVuZ3RoICE9IDAgP1xuICAgICAgICAgIHRoaXMucGFnZVNpemVPcHRpb25zWzBdIDpcbiAgICAgICAgICBERUZBVUxUX1BBR0VfU0laRTtcbiAgICB9XG5cbiAgICB0aGlzLl9kaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnMgPSB0aGlzLnBhZ2VTaXplT3B0aW9ucy5zbGljZSgpO1xuXG4gICAgaWYgKHRoaXMuX2Rpc3BsYXllZFBhZ2VTaXplT3B0aW9ucy5pbmRleE9mKHRoaXMucGFnZVNpemUpID09PSAtMSkge1xuICAgICAgdGhpcy5fZGlzcGxheWVkUGFnZVNpemVPcHRpb25zLnB1c2godGhpcy5wYWdlU2l6ZSk7XG4gICAgfVxuXG4gICAgLy8gU29ydCB0aGUgbnVtYmVycyB1c2luZyBhIG51bWJlci1zcGVjaWZpYyBzb3J0IGZ1bmN0aW9uLlxuICAgIHRoaXMuX2Rpc3BsYXllZFBhZ2VTaXplT3B0aW9ucy5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKiogRW1pdHMgYW4gZXZlbnQgbm90aWZ5aW5nIHRoYXQgYSBjaGFuZ2Ugb2YgdGhlIHBhZ2luYXRvcidzIHByb3BlcnRpZXMgaGFzIGJlZW4gdHJpZ2dlcmVkLiAqL1xuICBwcml2YXRlIF9lbWl0UGFnZUV2ZW50KHByZXZpb3VzUGFnZUluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLnBhZ2UuZW1pdCh7XG4gICAgICBwcmV2aW91c1BhZ2VJbmRleCxcbiAgICAgIHBhZ2VJbmRleDogdGhpcy5wYWdlSW5kZXgsXG4gICAgICBwYWdlU2l6ZTogdGhpcy5wYWdlU2l6ZSxcbiAgICAgIGxlbmd0aDogdGhpcy5sZW5ndGhcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9wYWdlSW5kZXg6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbGVuZ3RoOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3BhZ2VTaXplOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2hpZGVQYWdlU2l6ZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2hvd0ZpcnN0TGFzdEJ1dHRvbnM6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG59XG4iXX0=