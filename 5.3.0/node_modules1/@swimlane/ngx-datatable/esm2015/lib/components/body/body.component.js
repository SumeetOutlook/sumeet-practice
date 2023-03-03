import { __decorate } from "tslib";
import { Component, Output, EventEmitter, Input, HostBinding, ChangeDetectorRef, ViewChild, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ScrollerComponent } from './scroller.component';
import { columnsByPin, columnGroupWidths } from '../../utils/column';
import { RowHeightCache } from '../../utils/row-height-cache';
import { translateXY } from '../../utils/translate';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from './selection.component';
import * as ɵngcc3 from './progress-bar.component';
import * as ɵngcc4 from './scroller.component';
import * as ɵngcc5 from './summary/summary-row.component';
import * as ɵngcc6 from './body-row-wrapper.component';
import * as ɵngcc7 from './body-row.component';

function DataTableBodyComponent_datatable_progress_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "datatable-progress");
} }
function DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "datatable-summary-row", 9);
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("rowHeight", ctx_r4.summaryHeight)("offsetX", ctx_r4.offsetX)("innerWidth", ctx_r4.innerWidth)("rows", ctx_r4.rows)("columns", ctx_r4.columns);
} }
function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "datatable-body-row", 13);
    ɵngcc0.ɵɵlistener("treeAction", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template_datatable_body_row_treeAction_0_listener() { ɵngcc0.ɵɵrestoreView(_r14); const group_r7 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r12 = ɵngcc0.ɵɵnextContext(2); return ctx_r12.onTreeAction(group_r7); })("activate", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template_datatable_body_row_activate_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r14); const i_r8 = ɵngcc0.ɵɵnextContext().index; const ctx_r15 = ɵngcc0.ɵɵnextContext(2); const _r1 = ɵngcc0.ɵɵreference(2); return _r1.onActivate($event, ctx_r15.indexes.first + i_r8); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const group_r7 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r9 = ɵngcc0.ɵɵnextContext(2);
    const _r1 = ɵngcc0.ɵɵreference(2);
    ɵngcc0.ɵɵproperty("isSelected", _r1.getRowSelected(group_r7))("innerWidth", ctx_r9.innerWidth)("offsetX", ctx_r9.offsetX)("columns", ctx_r9.columns)("rowHeight", ctx_r9.getRowHeight(group_r7))("row", group_r7)("rowIndex", ctx_r9.getRowIndex(group_r7))("expanded", ctx_r9.getRowExpanded(group_r7))("rowClass", ctx_r9.rowClass)("displayCheck", ctx_r9.displayCheck)("treeStatus", group_r7 && group_r7.treeStatus);
} }
function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "datatable-body-row", 15);
    ɵngcc0.ɵɵlistener("activate", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template_datatable_body_row_activate_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); const i_r20 = ctx.index; ɵngcc0.ɵɵnextContext(4); const _r1 = ɵngcc0.ɵɵreference(2); return _r1.onActivate($event, i_r20); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r19 = ctx.$implicit;
    const group_r7 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const ctx_r18 = ɵngcc0.ɵɵnextContext(2);
    const _r1 = ɵngcc0.ɵɵreference(2);
    ɵngcc0.ɵɵproperty("isSelected", _r1.getRowSelected(row_r19))("innerWidth", ctx_r18.innerWidth)("offsetX", ctx_r18.offsetX)("columns", ctx_r18.columns)("rowHeight", ctx_r18.getRowHeight(row_r19))("row", row_r19)("group", group_r7.value)("rowIndex", ctx_r18.getRowIndex(row_r19))("expanded", ctx_r18.getRowExpanded(row_r19))("rowClass", ctx_r18.rowClass);
} }
function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template, 1, 10, "datatable-body-row", 14);
} if (rf & 2) {
    const group_r7 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r11 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngForOf", group_r7.value)("ngForTrackBy", ctx_r11.rowTrackingFn);
} }
function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template(rf, ctx) { if (rf & 1) {
    const _r26 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "datatable-row-wrapper", 10);
    ɵngcc0.ɵɵlistener("rowContextmenu", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template_datatable_row_wrapper_rowContextmenu_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r26); const ctx_r25 = ɵngcc0.ɵɵnextContext(2); return ctx_r25.rowContextmenu.emit($event); });
    ɵngcc0.ɵɵtemplate(1, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template, 1, 11, "datatable-body-row", 11);
    ɵngcc0.ɵɵtemplate(2, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_Template, 1, 2, "ng-template", null, 12, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const group_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const _r10 = ɵngcc0.ɵɵreference(3);
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("groupedRows", ctx_r5.groupedRows)("innerWidth", ctx_r5.innerWidth)("ngStyle", ctx_r5.getRowsStyles(group_r7))("rowDetail", ctx_r5.rowDetail)("groupHeader", ctx_r5.groupHeader)("offsetX", ctx_r5.offsetX)("detailRowHeight", ctx_r5.getDetailRowHeight(group_r7 && group_r7[i_r8], i_r8))("row", group_r7)("expanded", ctx_r5.getRowExpanded(group_r7))("rowIndex", ctx_r5.getRowIndex(group_r7 && group_r7[i_r8]));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r5.groupedRows)("ngIfElse", _r10);
} }
function DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "datatable-summary-row", 16);
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r6.getBottomSummaryRowStyles())("rowHeight", ctx_r6.summaryHeight)("offsetX", ctx_r6.offsetX)("innerWidth", ctx_r6.innerWidth)("rows", ctx_r6.rows)("columns", ctx_r6.columns);
} }
function DataTableBodyComponent_datatable_scroller_3_Template(rf, ctx) { if (rf & 1) {
    const _r28 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "datatable-scroller", 5);
    ɵngcc0.ɵɵlistener("scroll", function DataTableBodyComponent_datatable_scroller_3_Template_datatable_scroller_scroll_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); const ctx_r27 = ɵngcc0.ɵɵnextContext(); return ctx_r27.onBodyScroll($event); });
    ɵngcc0.ɵɵtemplate(1, DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_1_Template, 1, 5, "datatable-summary-row", 6);
    ɵngcc0.ɵɵtemplate(2, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template, 4, 12, "datatable-row-wrapper", 7);
    ɵngcc0.ɵɵtemplate(3, DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_3_Template, 1, 6, "datatable-summary-row", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("scrollbarV", ctx_r2.scrollbarV)("scrollbarH", ctx_r2.scrollbarH)("scrollHeight", ctx_r2.scrollHeight)("scrollWidth", ctx_r2.columnGroupWidths == null ? null : ctx_r2.columnGroupWidths.total);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.summaryRow && ctx_r2.summaryPosition === "top");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r2.temp)("ngForTrackBy", ctx_r2.rowTrackingFn);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.summaryRow && ctx_r2.summaryPosition === "bottom");
} }
function DataTableBodyComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 17);
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r3.emptyMessage, ɵngcc0.ɵɵsanitizeHtml);
} }
let DataTableBodyComponent = class DataTableBodyComponent {
    /**
     * Creates an instance of DataTableBodyComponent.
     */
    constructor(cd) {
        this.cd = cd;
        this.selected = [];
        this.scroll = new EventEmitter();
        this.page = new EventEmitter();
        this.activate = new EventEmitter();
        this.select = new EventEmitter();
        this.detailToggle = new EventEmitter();
        this.rowContextmenu = new EventEmitter(false);
        this.treeAction = new EventEmitter();
        this.rowHeightsCache = new RowHeightCache();
        this.temp = [];
        this.offsetY = 0;
        this.indexes = {};
        this.rowIndexes = new WeakMap();
        this.rowExpansions = [];
        /**
         * Get the height of the detail row.
         */
        this.getDetailRowHeight = (row, index) => {
            if (!this.rowDetail) {
                return 0;
            }
            const rowHeight = this.rowDetail.rowHeight;
            return typeof rowHeight === 'function' ? rowHeight(row, index) : rowHeight;
        };
        // declare fn here so we can get access to the `this` property
        this.rowTrackingFn = (index, row) => {
            const idx = this.getRowIndex(row);
            if (this.trackByProp) {
                return row[this.trackByProp];
            }
            else {
                return idx;
            }
        };
    }
    set pageSize(val) {
        this._pageSize = val;
        this.recalcLayout();
    }
    get pageSize() {
        return this._pageSize;
    }
    set rows(val) {
        this._rows = val;
        this.recalcLayout();
    }
    get rows() {
        return this._rows;
    }
    set columns(val) {
        this._columns = val;
        const colsByPin = columnsByPin(val);
        this.columnGroupWidths = columnGroupWidths(colsByPin, val);
    }
    get columns() {
        return this._columns;
    }
    set offset(val) {
        this._offset = val;
        if (!this.scrollbarV || (this.scrollbarV && !this.virtualization))
            this.recalcLayout();
    }
    get offset() {
        return this._offset;
    }
    set rowCount(val) {
        this._rowCount = val;
        this.recalcLayout();
    }
    get rowCount() {
        return this._rowCount;
    }
    get bodyWidth() {
        if (this.scrollbarH) {
            return this.innerWidth + 'px';
        }
        else {
            return '100%';
        }
    }
    set bodyHeight(val) {
        if (this.scrollbarV) {
            this._bodyHeight = val + 'px';
        }
        else {
            this._bodyHeight = 'auto';
        }
        this.recalcLayout();
    }
    get bodyHeight() {
        return this._bodyHeight;
    }
    /**
     * Returns if selection is enabled.
     */
    get selectEnabled() {
        return !!this.selectionType;
    }
    /**
     * Property that would calculate the height of scroll bar
     * based on the row heights cache for virtual scroll and virtualization. Other scenarios
     * calculate scroll height automatically (as height will be undefined).
     */
    get scrollHeight() {
        if (this.scrollbarV && this.virtualization && this.rowCount) {
            return this.rowHeightsCache.query(this.rowCount - 1);
        }
        // avoid TS7030: Not all code paths return a value.
        return undefined;
    }
    /**
     * Called after the constructor, initializing input properties
     */
    ngOnInit() {
        if (this.rowDetail) {
            this.listener = this.rowDetail.toggle.subscribe(({ type, value }) => {
                if (type === 'row') {
                    this.toggleRowExpansion(value);
                }
                if (type === 'all') {
                    this.toggleAllRows(value);
                }
                // Refresh rows after toggle
                // Fixes #883
                this.updateIndexes();
                this.updateRows();
                this.cd.markForCheck();
            });
        }
        if (this.groupHeader) {
            this.listener = this.groupHeader.toggle.subscribe(({ type, value }) => {
                if (type === 'group') {
                    this.toggleRowExpansion(value);
                }
                if (type === 'all') {
                    this.toggleAllRows(value);
                }
                // Refresh rows after toggle
                // Fixes #883
                this.updateIndexes();
                this.updateRows();
                this.cd.markForCheck();
            });
        }
    }
    /**
     * Called once, before the instance is destroyed.
     */
    ngOnDestroy() {
        if (this.rowDetail || this.groupHeader) {
            this.listener.unsubscribe();
        }
    }
    /**
     * Updates the Y offset given a new offset.
     */
    updateOffsetY(offset) {
        // scroller is missing on empty table
        if (!this.scroller) {
            return;
        }
        if (this.scrollbarV && this.virtualization && offset) {
            // First get the row Index that we need to move to.
            const rowIndex = this.pageSize * offset;
            offset = this.rowHeightsCache.query(rowIndex - 1);
        }
        else if (this.scrollbarV && !this.virtualization) {
            offset = 0;
        }
        this.scroller.setOffset(offset || 0);
    }
    /**
     * Body was scrolled, this is mainly useful for
     * when a user is server-side pagination via virtual scroll.
     */
    onBodyScroll(event) {
        const scrollYPos = event.scrollYPos;
        const scrollXPos = event.scrollXPos;
        // if scroll change, trigger update
        // this is mainly used for header cell positions
        if (this.offsetY !== scrollYPos || this.offsetX !== scrollXPos) {
            this.scroll.emit({
                offsetY: scrollYPos,
                offsetX: scrollXPos
            });
        }
        this.offsetY = scrollYPos;
        this.offsetX = scrollXPos;
        this.updateIndexes();
        this.updatePage(event.direction);
        this.updateRows();
    }
    /**
     * Updates the page given a direction.
     */
    updatePage(direction) {
        let offset = this.indexes.first / this.pageSize;
        if (direction === 'up') {
            offset = Math.ceil(offset);
        }
        else if (direction === 'down') {
            offset = Math.floor(offset);
        }
        if (direction !== undefined && !isNaN(offset)) {
            this.page.emit({ offset });
        }
    }
    /**
     * Updates the rows in the view port
     */
    updateRows() {
        const { first, last } = this.indexes;
        let rowIndex = first;
        let idx = 0;
        const temp = [];
        // if grouprowsby has been specified treat row paging
        // parameters as group paging parameters ie if limit 10 has been
        // specified treat it as 10 groups rather than 10 rows
        if (this.groupedRows) {
            let maxRowsPerGroup = 3;
            // if there is only one group set the maximum number of
            // rows per group the same as the total number of rows
            if (this.groupedRows.length === 1) {
                maxRowsPerGroup = this.groupedRows[0].value.length;
            }
            while (rowIndex < last && rowIndex < this.groupedRows.length) {
                // Add the groups into this page
                const group = this.groupedRows[rowIndex];
                this.rowIndexes.set(group, rowIndex);
                if (group.value) {
                    // add indexes for each group item
                    group.value.forEach((g, i) => {
                        const _idx = `${rowIndex}-${i}`;
                        this.rowIndexes.set(g, _idx);
                    });
                }
                temp[idx] = group;
                idx++;
                // Group index in this context
                rowIndex++;
            }
        }
        else {
            while (rowIndex < last && rowIndex < this.rowCount) {
                const row = this.rows[rowIndex];
                if (row) {
                    // add indexes for each row
                    this.rowIndexes.set(row, rowIndex);
                    temp[idx] = row;
                }
                idx++;
                rowIndex++;
            }
        }
        this.temp = temp;
    }
    /**
     * Get the row height
     */
    getRowHeight(row) {
        // if its a function return it
        if (typeof this.rowHeight === 'function') {
            return this.rowHeight(row);
        }
        return this.rowHeight;
    }
    /**
     * @param group the group with all rows
     */
    getGroupHeight(group) {
        let rowHeight = 0;
        if (group.value) {
            for (let index = 0; index < group.value.length; index++) {
                rowHeight += this.getRowAndDetailHeight(group.value[index]);
            }
        }
        return rowHeight;
    }
    /**
     * Calculate row height based on the expanded state of the row.
     */
    getRowAndDetailHeight(row) {
        let rowHeight = this.getRowHeight(row);
        const expanded = this.getRowExpanded(row);
        // Adding detail row height if its expanded.
        if (expanded) {
            rowHeight += this.getDetailRowHeight(row);
        }
        return rowHeight;
    }
    /**
     * Calculates the styles for the row so that the rows can be moved in 2D space
     * during virtual scroll inside the DOM.   In the below case the Y position is
     * manipulated.   As an example, if the height of row 0 is 30 px and row 1 is
     * 100 px then following styles are generated:
     *
     * transform: translate3d(0px, 0px, 0px);    ->  row0
     * transform: translate3d(0px, 30px, 0px);   ->  row1
     * transform: translate3d(0px, 130px, 0px);  ->  row2
     *
     * Row heights have to be calculated based on the row heights cache as we wont
     * be able to determine which row is of what height before hand.  In the above
     * case the positionY of the translate3d for row2 would be the sum of all the
     * heights of the rows before it (i.e. row0 and row1).
     *
     * @param rows the row that needs to be placed in the 2D space.
     * @returns the CSS3 style to be applied
     *
     * @memberOf DataTableBodyComponent
     */
    getRowsStyles(rows) {
        const styles = {};
        // only add styles for the group if there is a group
        if (this.groupedRows) {
            styles.width = this.columnGroupWidths.total;
        }
        if (this.scrollbarV && this.virtualization) {
            let idx = 0;
            if (this.groupedRows) {
                // Get the latest row rowindex in a group
                const row = rows[rows.length - 1];
                idx = row ? this.getRowIndex(row) : 0;
            }
            else {
                idx = this.getRowIndex(rows);
            }
            // const pos = idx * rowHeight;
            // The position of this row would be the sum of all row heights
            // until the previous row position.
            const pos = this.rowHeightsCache.query(idx - 1);
            translateXY(styles, 0, pos);
        }
        return styles;
    }
    /**
     * Calculate bottom summary row offset for scrollbar mode.
     * For more information about cache and offset calculation
     * see description for `getRowsStyles` method
     *
     * @returns the CSS3 style to be applied
     *
     * @memberOf DataTableBodyComponent
     */
    getBottomSummaryRowStyles() {
        if (!this.scrollbarV || !this.rows || !this.rows.length) {
            return null;
        }
        const styles = { position: 'absolute' };
        const pos = this.rowHeightsCache.query(this.rows.length - 1);
        translateXY(styles, 0, pos);
        return styles;
    }
    /**
     * Hides the loading indicator
     */
    hideIndicator() {
        setTimeout(() => (this.loadingIndicator = false), 500);
    }
    /**
     * Updates the index of the rows in the viewport
     */
    updateIndexes() {
        let first = 0;
        let last = 0;
        if (this.scrollbarV) {
            if (this.virtualization) {
                // Calculation of the first and last indexes will be based on where the
                // scrollY position would be at.  The last index would be the one
                // that shows up inside the view port the last.
                const height = parseInt(this.bodyHeight, 0);
                first = this.rowHeightsCache.getRowIndex(this.offsetY);
                last = this.rowHeightsCache.getRowIndex(height + this.offsetY) + 1;
            }
            else {
                // If virtual rows are not needed
                // We render all in one go
                first = 0;
                last = this.rowCount;
            }
        }
        else {
            // The server is handling paging and will pass an array that begins with the
            // element at a specified offset.  first should always be 0 with external paging.
            if (!this.externalPaging) {
                first = Math.max(this.offset * this.pageSize, 0);
            }
            last = Math.min(first + this.pageSize, this.rowCount);
        }
        this.indexes = { first, last };
    }
    /**
     * Refreshes the full Row Height cache.  Should be used
     * when the entire row array state has changed.
     */
    refreshRowHeightCache() {
        if (!this.scrollbarV || (this.scrollbarV && !this.virtualization)) {
            return;
        }
        // clear the previous row height cache if already present.
        // this is useful during sorts, filters where the state of the
        // rows array is changed.
        this.rowHeightsCache.clearCache();
        // Initialize the tree only if there are rows inside the tree.
        if (this.rows && this.rows.length) {
            const rowExpansions = new Set();
            for (const row of this.rows) {
                if (this.getRowExpanded(row)) {
                    rowExpansions.add(row);
                }
            }
            this.rowHeightsCache.initCache({
                rows: this.rows,
                rowHeight: this.rowHeight,
                detailRowHeight: this.getDetailRowHeight,
                externalVirtual: this.scrollbarV && this.externalPaging,
                rowCount: this.rowCount,
                rowIndexes: this.rowIndexes,
                rowExpansions
            });
        }
    }
    /**
     * Gets the index for the view port
     */
    getAdjustedViewPortIndex() {
        // Capture the row index of the first row that is visible on the viewport.
        // If the scroll bar is just below the row which is highlighted then make that as the
        // first index.
        const viewPortFirstRowIndex = this.indexes.first;
        if (this.scrollbarV && this.virtualization) {
            const offsetScroll = this.rowHeightsCache.query(viewPortFirstRowIndex - 1);
            return offsetScroll <= this.offsetY ? viewPortFirstRowIndex - 1 : viewPortFirstRowIndex;
        }
        return viewPortFirstRowIndex;
    }
    /**
     * Toggle the Expansion of the row i.e. if the row is expanded then it will
     * collapse and vice versa.   Note that the expanded status is stored as
     * a part of the row object itself as we have to preserve the expanded row
     * status in case of sorting and filtering of the row set.
     */
    toggleRowExpansion(row) {
        // Capture the row index of the first row that is visible on the viewport.
        const viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
        const rowExpandedIdx = this.getRowExpandedIdx(row, this.rowExpansions);
        const expanded = rowExpandedIdx > -1;
        // If the detailRowHeight is auto --> only in case of non-virtualized scroll
        if (this.scrollbarV && this.virtualization) {
            const detailRowHeight = this.getDetailRowHeight(row) * (expanded ? -1 : 1);
            // const idx = this.rowIndexes.get(row) || 0;
            const idx = this.getRowIndex(row);
            this.rowHeightsCache.update(idx, detailRowHeight);
        }
        // Update the toggled row and update thive nevere heights in the cache.
        if (expanded) {
            this.rowExpansions.splice(rowExpandedIdx, 1);
        }
        else {
            this.rowExpansions.push(row);
        }
        this.detailToggle.emit({
            rows: [row],
            currentIndex: viewPortFirstRowIndex
        });
    }
    /**
     * Expand/Collapse all the rows no matter what their state is.
     */
    toggleAllRows(expanded) {
        // clear prev expansions
        this.rowExpansions = [];
        // Capture the row index of the first row that is visible on the viewport.
        const viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
        if (expanded) {
            for (const row of this.rows) {
                this.rowExpansions.push(row);
            }
        }
        if (this.scrollbarV) {
            // Refresh the full row heights cache since every row was affected.
            this.recalcLayout();
        }
        // Emit all rows that have been expanded.
        this.detailToggle.emit({
            rows: this.rows,
            currentIndex: viewPortFirstRowIndex
        });
    }
    /**
     * Recalculates the table
     */
    recalcLayout() {
        this.refreshRowHeightCache();
        this.updateIndexes();
        this.updateRows();
    }
    /**
     * Tracks the column
     */
    columnTrackingFn(index, column) {
        return column.$$id;
    }
    /**
     * Gets the row pinning group styles
     */
    stylesByGroup(group) {
        const widths = this.columnGroupWidths;
        const offsetX = this.offsetX;
        const styles = {
            width: `${widths[group]}px`
        };
        if (group === 'left') {
            translateXY(styles, offsetX, 0);
        }
        else if (group === 'right') {
            const bodyWidth = parseInt(this.innerWidth + '', 0);
            const totalDiff = widths.total - bodyWidth;
            const offsetDiff = totalDiff - offsetX;
            const offset = offsetDiff * -1;
            translateXY(styles, offset, 0);
        }
        return styles;
    }
    /**
     * Returns if the row was expanded and set default row expansion when row expansion is empty
     */
    getRowExpanded(row) {
        if (this.rowExpansions.length === 0 && this.groupExpansionDefault) {
            for (const group of this.groupedRows) {
                this.rowExpansions.push(group);
            }
        }
        return this.getRowExpandedIdx(row, this.rowExpansions) > -1;
    }
    getRowExpandedIdx(row, expanded) {
        if (!expanded || !expanded.length)
            return -1;
        const rowId = this.rowIdentity(row);
        return expanded.findIndex(r => {
            const id = this.rowIdentity(r);
            return id === rowId;
        });
    }
    /**
     * Gets the row index given a row
     */
    getRowIndex(row) {
        return this.rowIndexes.get(row) || 0;
    }
    onTreeAction(row) {
        this.treeAction.emit({ row });
    }
};
DataTableBodyComponent.ɵfac = function DataTableBodyComponent_Factory(t) { return new (t || DataTableBodyComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
DataTableBodyComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DataTableBodyComponent, selectors: [["datatable-body"]], viewQuery: function DataTableBodyComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(ScrollerComponent, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.scroller = _t.first);
    } }, hostAttrs: [1, "datatable-body"], hostVars: 4, hostBindings: function DataTableBodyComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("width", ctx.bodyWidth)("height", ctx.bodyHeight);
    } }, inputs: { selected: "selected", pageSize: "pageSize", rows: "rows", columns: "columns", offset: "offset", rowCount: "rowCount", bodyHeight: "bodyHeight", offsetX: "offsetX", loadingIndicator: "loadingIndicator", scrollbarV: "scrollbarV", scrollbarH: "scrollbarH", externalPaging: "externalPaging", rowHeight: "rowHeight", emptyMessage: "emptyMessage", selectionType: "selectionType", rowIdentity: "rowIdentity", rowDetail: "rowDetail", groupHeader: "groupHeader", selectCheck: "selectCheck", displayCheck: "displayCheck", trackByProp: "trackByProp", rowClass: "rowClass", groupedRows: "groupedRows", groupExpansionDefault: "groupExpansionDefault", innerWidth: "innerWidth", groupRowsBy: "groupRowsBy", virtualization: "virtualization", summaryRow: "summaryRow", summaryPosition: "summaryPosition", summaryHeight: "summaryHeight" }, outputs: { scroll: "scroll", page: "page", activate: "activate", select: "select", detailToggle: "detailToggle", rowContextmenu: "rowContextmenu", treeAction: "treeAction" }, decls: 5, vars: 9, consts: [[4, "ngIf"], [3, "selected", "rows", "selectCheck", "selectEnabled", "selectionType", "rowIdentity", "select", "activate"], ["selector", ""], [3, "scrollbarV", "scrollbarH", "scrollHeight", "scrollWidth", "scroll", 4, "ngIf"], ["class", "empty-row", 3, "innerHTML", 4, "ngIf"], [3, "scrollbarV", "scrollbarH", "scrollHeight", "scrollWidth", "scroll"], [3, "rowHeight", "offsetX", "innerWidth", "rows", "columns", 4, "ngIf"], [3, "groupedRows", "innerWidth", "ngStyle", "rowDetail", "groupHeader", "offsetX", "detailRowHeight", "row", "expanded", "rowIndex", "rowContextmenu", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle", "rowHeight", "offsetX", "innerWidth", "rows", "columns", 4, "ngIf"], [3, "rowHeight", "offsetX", "innerWidth", "rows", "columns"], [3, "groupedRows", "innerWidth", "ngStyle", "rowDetail", "groupHeader", "offsetX", "detailRowHeight", "row", "expanded", "rowIndex", "rowContextmenu"], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", "expanded", "rowClass", "displayCheck", "treeStatus", "treeAction", "activate", 4, "ngIf", "ngIfElse"], ["groupedRowsTemplate", ""], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", "expanded", "rowClass", "displayCheck", "treeStatus", "treeAction", "activate"], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "group", "rowIndex", "expanded", "rowClass", "activate", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "group", "rowIndex", "expanded", "rowClass", "activate"], [3, "ngStyle", "rowHeight", "offsetX", "innerWidth", "rows", "columns"], [1, "empty-row", 3, "innerHTML"]], template: function DataTableBodyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, DataTableBodyComponent_datatable_progress_0_Template, 1, 0, "datatable-progress", 0);
        ɵngcc0.ɵɵelementStart(1, "datatable-selection", 1, 2);
        ɵngcc0.ɵɵlistener("select", function DataTableBodyComponent_Template_datatable_selection_select_1_listener($event) { return ctx.select.emit($event); })("activate", function DataTableBodyComponent_Template_datatable_selection_activate_1_listener($event) { return ctx.activate.emit($event); });
        ɵngcc0.ɵɵtemplate(3, DataTableBodyComponent_datatable_scroller_3_Template, 4, 8, "datatable-scroller", 3);
        ɵngcc0.ɵɵtemplate(4, DataTableBodyComponent_div_4_Template, 1, 1, "div", 4);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.loadingIndicator);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("selected", ctx.selected)("rows", ctx.rows)("selectCheck", ctx.selectCheck)("selectEnabled", ctx.selectEnabled)("selectionType", ctx.selectionType)("rowIdentity", ctx.rowIdentity);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.rows == null ? null : ctx.rows.length);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !(ctx.rows == null ? null : ctx.rows.length) && !ctx.loadingIndicator);
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.DataTableSelectionComponent, ɵngcc3.ProgressBarComponent, ɵngcc4.ScrollerComponent, ɵngcc1.NgForOf, ɵngcc5.DataTableSummaryRowComponent, ɵngcc6.DataTableRowWrapperComponent, ɵngcc1.NgStyle, ɵngcc7.DataTableBodyRowComponent], encapsulation: 2, changeDetection: 0 });
DataTableBodyComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
__decorate([
    Input()
], DataTableBodyComponent.prototype, "scrollbarV", void 0);
__decorate([
    Input()
], DataTableBodyComponent.prototype, "scrollbarH", void 0);
__decorate([
    Input()
], DataTableBodyComponent.prototype, "loadingIndicator", void 0);
__decorate([
    Input()
], DataTableBodyComponent.prototype, "externalPaging", void 0);
__decorate([
    Input()
], DataTableBodyComponent.prototype, "rowHeight", void 0);
__decorate([
    Input()
], DataTableBodyComponent.prototype, "offsetX", void 0);
__decorate([
    Input()
], DataTableBodyComponent.prototype, "emptyMessage", void 0);
__decorate([
    Input()
], DataTableBodyComponent.prototype, "selectionType", void 0);
__decorate([
    Input()
], DataTableBodyComponent.prototype, "selected", void 0);
__decorate([
    Input()
], DataTableBodyComponent.prototype, "rowIdentity", void 0);
__decorate([
    Input()
], DataTableBodyComponent.prototype, "rowDetail", void 0);
__decorate([
    Input()
], DataTableBodyComponent.prototype, "groupHeader", void 0);
__decorate([
    Input()
], DataTableBodyComponent.prototype, "selectCheck", void 0);
__decorate([
    Input()
], DataTableBodyComponent.prototype, "displayCheck", void 0);
__decorate([
    Input()
], DataTableBodyComponent.prototype, "trackByProp", void 0);
__decorate([
    Input()
], DataTableBodyComponent.prototype, "rowClass", void 0);
__decorate([
    Input()
], DataTableBodyComponent.prototype, "groupedRows", void 0);
__decorate([
    Input()
], DataTableBodyComponent.prototype, "groupExpansionDefault", void 0);
__decorate([
    Input()
], DataTableBodyComponent.prototype, "innerWidth", void 0);
__decorate([
    Input()
], DataTableBodyComponent.prototype, "groupRowsBy", void 0);
__decorate([
    Input()
], DataTableBodyComponent.prototype, "virtualization", void 0);
__decorate([
    Input()
], DataTableBodyComponent.prototype, "summaryRow", void 0);
__decorate([
    Input()
], DataTableBodyComponent.prototype, "summaryPosition", void 0);
__decorate([
    Input()
], DataTableBodyComponent.prototype, "summaryHeight", void 0);
__decorate([
    Input()
], DataTableBodyComponent.prototype, "pageSize", null);
__decorate([
    Input()
], DataTableBodyComponent.prototype, "rows", null);
__decorate([
    Input()
], DataTableBodyComponent.prototype, "columns", null);
__decorate([
    Input()
], DataTableBodyComponent.prototype, "offset", null);
__decorate([
    Input()
], DataTableBodyComponent.prototype, "rowCount", null);
__decorate([
    HostBinding('style.width')
], DataTableBodyComponent.prototype, "bodyWidth", null);
__decorate([
    Input(),
    HostBinding('style.height')
], DataTableBodyComponent.prototype, "bodyHeight", null);
__decorate([
    Output()
], DataTableBodyComponent.prototype, "scroll", void 0);
__decorate([
    Output()
], DataTableBodyComponent.prototype, "page", void 0);
__decorate([
    Output()
], DataTableBodyComponent.prototype, "activate", void 0);
__decorate([
    Output()
], DataTableBodyComponent.prototype, "select", void 0);
__decorate([
    Output()
], DataTableBodyComponent.prototype, "detailToggle", void 0);
__decorate([
    Output()
], DataTableBodyComponent.prototype, "rowContextmenu", void 0);
__decorate([
    Output()
], DataTableBodyComponent.prototype, "treeAction", void 0);
__decorate([
    ViewChild(ScrollerComponent)
], DataTableBodyComponent.prototype, "scroller", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DataTableBodyComponent, [{
        type: Component,
        args: [{
                selector: 'datatable-body',
                template: `
    <datatable-progress *ngIf="loadingIndicator"> </datatable-progress>
    <datatable-selection
      #selector
      [selected]="selected"
      [rows]="rows"
      [selectCheck]="selectCheck"
      [selectEnabled]="selectEnabled"
      [selectionType]="selectionType"
      [rowIdentity]="rowIdentity"
      (select)="select.emit($event)"
      (activate)="activate.emit($event)"
    >
      <datatable-scroller
        *ngIf="rows?.length"
        [scrollbarV]="scrollbarV"
        [scrollbarH]="scrollbarH"
        [scrollHeight]="scrollHeight"
        [scrollWidth]="columnGroupWidths?.total"
        (scroll)="onBodyScroll($event)"
      >
        <datatable-summary-row
          *ngIf="summaryRow && summaryPosition === 'top'"
          [rowHeight]="summaryHeight"
          [offsetX]="offsetX"
          [innerWidth]="innerWidth"
          [rows]="rows"
          [columns]="columns"
        >
        </datatable-summary-row>
        <datatable-row-wrapper
          [groupedRows]="groupedRows"
          *ngFor="let group of temp; let i = index; trackBy: rowTrackingFn"
          [innerWidth]="innerWidth"
          [ngStyle]="getRowsStyles(group)"
          [rowDetail]="rowDetail"
          [groupHeader]="groupHeader"
          [offsetX]="offsetX"
          [detailRowHeight]="getDetailRowHeight(group && group[i], i)"
          [row]="group"
          [expanded]="getRowExpanded(group)"
          [rowIndex]="getRowIndex(group && group[i])"
          (rowContextmenu)="rowContextmenu.emit($event)"
        >
          <datatable-body-row
            *ngIf="!groupedRows; else groupedRowsTemplate"
            tabindex="-1"
            [isSelected]="selector.getRowSelected(group)"
            [innerWidth]="innerWidth"
            [offsetX]="offsetX"
            [columns]="columns"
            [rowHeight]="getRowHeight(group)"
            [row]="group"
            [rowIndex]="getRowIndex(group)"
            [expanded]="getRowExpanded(group)"
            [rowClass]="rowClass"
            [displayCheck]="displayCheck"
            [treeStatus]="group && group.treeStatus"
            (treeAction)="onTreeAction(group)"
            (activate)="selector.onActivate($event, indexes.first + i)"
          >
          </datatable-body-row>
          <ng-template #groupedRowsTemplate>
            <datatable-body-row
              *ngFor="let row of group.value; let i = index; trackBy: rowTrackingFn"
              tabindex="-1"
              [isSelected]="selector.getRowSelected(row)"
              [innerWidth]="innerWidth"
              [offsetX]="offsetX"
              [columns]="columns"
              [rowHeight]="getRowHeight(row)"
              [row]="row"
              [group]="group.value"
              [rowIndex]="getRowIndex(row)"
              [expanded]="getRowExpanded(row)"
              [rowClass]="rowClass"
              (activate)="selector.onActivate($event, i)"
            >
            </datatable-body-row>
          </ng-template>
        </datatable-row-wrapper>
        <datatable-summary-row
          *ngIf="summaryRow && summaryPosition === 'bottom'"
          [ngStyle]="getBottomSummaryRowStyles()"
          [rowHeight]="summaryHeight"
          [offsetX]="offsetX"
          [innerWidth]="innerWidth"
          [rows]="rows"
          [columns]="columns"
        >
        </datatable-summary-row>
      </datatable-scroller>
      <div class="empty-row" *ngIf="!rows?.length && !loadingIndicator" [innerHTML]="emptyMessage"></div>
    </datatable-selection>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    class: 'datatable-body'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { selected: [{
            type: Input
        }], scroll: [{
            type: Output
        }], page: [{
            type: Output
        }], activate: [{
            type: Output
        }], select: [{
            type: Output
        }], detailToggle: [{
            type: Output
        }], rowContextmenu: [{
            type: Output
        }], treeAction: [{
            type: Output
        }], pageSize: [{
            type: Input
        }], rows: [{
            type: Input
        }], columns: [{
            type: Input
        }], offset: [{
            type: Input
        }], rowCount: [{
            type: Input
        }], bodyWidth: [{
            type: HostBinding,
            args: ['style.width']
        }], bodyHeight: [{
            type: Input
        }, {
            type: HostBinding,
            args: ['style.height']
        }], offsetX: [{
            type: Input
        }], loadingIndicator: [{
            type: Input
        }], scrollbarV: [{
            type: Input
        }], scrollbarH: [{
            type: Input
        }], externalPaging: [{
            type: Input
        }], rowHeight: [{
            type: Input
        }], emptyMessage: [{
            type: Input
        }], selectionType: [{
            type: Input
        }], rowIdentity: [{
            type: Input
        }], rowDetail: [{
            type: Input
        }], groupHeader: [{
            type: Input
        }], selectCheck: [{
            type: Input
        }], displayCheck: [{
            type: Input
        }], trackByProp: [{
            type: Input
        }], rowClass: [{
            type: Input
        }], groupedRows: [{
            type: Input
        }], groupExpansionDefault: [{
            type: Input
        }], innerWidth: [{
            type: Input
        }], groupRowsBy: [{
            type: Input
        }], virtualization: [{
            type: Input
        }], summaryRow: [{
            type: Input
        }], summaryPosition: [{
            type: Input
        }], summaryHeight: [{
            type: Input
        }], scroller: [{
            type: ViewChild,
            args: [ScrollerComponent]
        }] }); })();
export { DataTableBodyComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIm5nOi9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9saWIvY29tcG9uZW50cy9ib2R5L2JvZHkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixZQUFZLEVBQ1osS0FBSyxFQUNMLFdBQVcsRUFDWCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULE1BQU0sRUFDTixTQUFTLEVBQ1QsdUJBQXVCLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXpELE9BQU8sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdHcEQsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7QUFBRyxJQWlKcEM7QUFDRjtBQUNFLE9BQUc7QUFDTCxJQUFFLFlBQW9CLEVBQXFCO0FBQzNDLFFBRHNCLE9BQUUsR0FBRixFQUFFLENBQW1CO0FBQUMsUUEzSWpDLGFBQVEsR0FBVSxFQUFFLENBQUM7QUFDaEMsUUF1RlksV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQzNELFFBQVksU0FBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ3pELFFBQVksYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQzdELFFBQVksV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQzNELFFBQVksaUJBQVksR0FB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dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBIb3N0QmluZGluZyxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFZpZXdDaGlsZCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2Nyb2xsZXJDb21wb25lbnQgfSBmcm9tICcuL3Njcm9sbGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMvc2VsZWN0aW9uLnR5cGUnO1xuaW1wb3J0IHsgY29sdW1uc0J5UGluLCBjb2x1bW5Hcm91cFdpZHRocyB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbHVtbic7XG5pbXBvcnQgeyBSb3dIZWlnaHRDYWNoZSB9IGZyb20gJy4uLy4uL3V0aWxzL3Jvdy1oZWlnaHQtY2FjaGUnO1xuaW1wb3J0IHsgdHJhbnNsYXRlWFkgfSBmcm9tICcuLi8uLi91dGlscy90cmFuc2xhdGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRhdGFibGUtYm9keScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRhdGF0YWJsZS1wcm9ncmVzcyAqbmdJZj1cImxvYWRpbmdJbmRpY2F0b3JcIj4gPC9kYXRhdGFibGUtcHJvZ3Jlc3M+XG4gICAgPGRhdGF0YWJsZS1zZWxlY3Rpb25cbiAgICAgICNzZWxlY3RvclxuICAgICAgW3NlbGVjdGVkXT1cInNlbGVjdGVkXCJcbiAgICAgIFtyb3dzXT1cInJvd3NcIlxuICAgICAgW3NlbGVjdENoZWNrXT1cInNlbGVjdENoZWNrXCJcbiAgICAgIFtzZWxlY3RFbmFibGVkXT1cInNlbGVjdEVuYWJsZWRcIlxuICAgICAgW3NlbGVjdGlvblR5cGVdPVwic2VsZWN0aW9uVHlwZVwiXG4gICAgICBbcm93SWRlbnRpdHldPVwicm93SWRlbnRpdHlcIlxuICAgICAgKHNlbGVjdCk9XCJzZWxlY3QuZW1pdCgkZXZlbnQpXCJcbiAgICAgIChhY3RpdmF0ZSk9XCJhY3RpdmF0ZS5lbWl0KCRldmVudClcIlxuICAgID5cbiAgICAgIDxkYXRhdGFibGUtc2Nyb2xsZXJcbiAgICAgICAgKm5nSWY9XCJyb3dzPy5sZW5ndGhcIlxuICAgICAgICBbc2Nyb2xsYmFyVl09XCJzY3JvbGxiYXJWXCJcbiAgICAgICAgW3Njcm9sbGJhckhdPVwic2Nyb2xsYmFySFwiXG4gICAgICAgIFtzY3JvbGxIZWlnaHRdPVwic2Nyb2xsSGVpZ2h0XCJcbiAgICAgICAgW3Njcm9sbFdpZHRoXT1cImNvbHVtbkdyb3VwV2lkdGhzPy50b3RhbFwiXG4gICAgICAgIChzY3JvbGwpPVwib25Cb2R5U2Nyb2xsKCRldmVudClcIlxuICAgICAgPlxuICAgICAgICA8ZGF0YXRhYmxlLXN1bW1hcnktcm93XG4gICAgICAgICAgKm5nSWY9XCJzdW1tYXJ5Um93ICYmIHN1bW1hcnlQb3NpdGlvbiA9PT0gJ3RvcCdcIlxuICAgICAgICAgIFtyb3dIZWlnaHRdPVwic3VtbWFyeUhlaWdodFwiXG4gICAgICAgICAgW29mZnNldFhdPVwib2Zmc2V0WFwiXG4gICAgICAgICAgW2lubmVyV2lkdGhdPVwiaW5uZXJXaWR0aFwiXG4gICAgICAgICAgW3Jvd3NdPVwicm93c1wiXG4gICAgICAgICAgW2NvbHVtbnNdPVwiY29sdW1uc1wiXG4gICAgICAgID5cbiAgICAgICAgPC9kYXRhdGFibGUtc3VtbWFyeS1yb3c+XG4gICAgICAgIDxkYXRhdGFibGUtcm93LXdyYXBwZXJcbiAgICAgICAgICBbZ3JvdXBlZFJvd3NdPVwiZ3JvdXBlZFJvd3NcIlxuICAgICAgICAgICpuZ0Zvcj1cImxldCBncm91cCBvZiB0ZW1wOyBsZXQgaSA9IGluZGV4OyB0cmFja0J5OiByb3dUcmFja2luZ0ZuXCJcbiAgICAgICAgICBbaW5uZXJXaWR0aF09XCJpbm5lcldpZHRoXCJcbiAgICAgICAgICBbbmdTdHlsZV09XCJnZXRSb3dzU3R5bGVzKGdyb3VwKVwiXG4gICAgICAgICAgW3Jvd0RldGFpbF09XCJyb3dEZXRhaWxcIlxuICAgICAgICAgIFtncm91cEhlYWRlcl09XCJncm91cEhlYWRlclwiXG4gICAgICAgICAgW29mZnNldFhdPVwib2Zmc2V0WFwiXG4gICAgICAgICAgW2RldGFpbFJvd0hlaWdodF09XCJnZXREZXRhaWxSb3dIZWlnaHQoZ3JvdXAgJiYgZ3JvdXBbaV0sIGkpXCJcbiAgICAgICAgICBbcm93XT1cImdyb3VwXCJcbiAgICAgICAgICBbZXhwYW5kZWRdPVwiZ2V0Um93RXhwYW5kZWQoZ3JvdXApXCJcbiAgICAgICAgICBbcm93SW5kZXhdPVwiZ2V0Um93SW5kZXgoZ3JvdXAgJiYgZ3JvdXBbaV0pXCJcbiAgICAgICAgICAocm93Q29udGV4dG1lbnUpPVwicm93Q29udGV4dG1lbnUuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkYXRhdGFibGUtYm9keS1yb3dcbiAgICAgICAgICAgICpuZ0lmPVwiIWdyb3VwZWRSb3dzOyBlbHNlIGdyb3VwZWRSb3dzVGVtcGxhdGVcIlxuICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiXG4gICAgICAgICAgICBbaXNTZWxlY3RlZF09XCJzZWxlY3Rvci5nZXRSb3dTZWxlY3RlZChncm91cClcIlxuICAgICAgICAgICAgW2lubmVyV2lkdGhdPVwiaW5uZXJXaWR0aFwiXG4gICAgICAgICAgICBbb2Zmc2V0WF09XCJvZmZzZXRYXCJcbiAgICAgICAgICAgIFtjb2x1bW5zXT1cImNvbHVtbnNcIlxuICAgICAgICAgICAgW3Jvd0hlaWdodF09XCJnZXRSb3dIZWlnaHQoZ3JvdXApXCJcbiAgICAgICAgICAgIFtyb3ddPVwiZ3JvdXBcIlxuICAgICAgICAgICAgW3Jvd0luZGV4XT1cImdldFJvd0luZGV4KGdyb3VwKVwiXG4gICAgICAgICAgICBbZXhwYW5kZWRdPVwiZ2V0Um93RXhwYW5kZWQoZ3JvdXApXCJcbiAgICAgICAgICAgIFtyb3dDbGFzc109XCJyb3dDbGFzc1wiXG4gICAgICAgICAgICBbZGlzcGxheUNoZWNrXT1cImRpc3BsYXlDaGVja1wiXG4gICAgICAgICAgICBbdHJlZVN0YXR1c109XCJncm91cCAmJiBncm91cC50cmVlU3RhdHVzXCJcbiAgICAgICAgICAgICh0cmVlQWN0aW9uKT1cIm9uVHJlZUFjdGlvbihncm91cClcIlxuICAgICAgICAgICAgKGFjdGl2YXRlKT1cInNlbGVjdG9yLm9uQWN0aXZhdGUoJGV2ZW50LCBpbmRleGVzLmZpcnN0ICsgaSlcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8L2RhdGF0YWJsZS1ib2R5LXJvdz5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgI2dyb3VwZWRSb3dzVGVtcGxhdGU+XG4gICAgICAgICAgICA8ZGF0YXRhYmxlLWJvZHktcm93XG4gICAgICAgICAgICAgICpuZ0Zvcj1cImxldCByb3cgb2YgZ3JvdXAudmFsdWU7IGxldCBpID0gaW5kZXg7IHRyYWNrQnk6IHJvd1RyYWNraW5nRm5cIlxuICAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgICAgICAgW2lzU2VsZWN0ZWRdPVwic2VsZWN0b3IuZ2V0Um93U2VsZWN0ZWQocm93KVwiXG4gICAgICAgICAgICAgIFtpbm5lcldpZHRoXT1cImlubmVyV2lkdGhcIlxuICAgICAgICAgICAgICBbb2Zmc2V0WF09XCJvZmZzZXRYXCJcbiAgICAgICAgICAgICAgW2NvbHVtbnNdPVwiY29sdW1uc1wiXG4gICAgICAgICAgICAgIFtyb3dIZWlnaHRdPVwiZ2V0Um93SGVpZ2h0KHJvdylcIlxuICAgICAgICAgICAgICBbcm93XT1cInJvd1wiXG4gICAgICAgICAgICAgIFtncm91cF09XCJncm91cC52YWx1ZVwiXG4gICAgICAgICAgICAgIFtyb3dJbmRleF09XCJnZXRSb3dJbmRleChyb3cpXCJcbiAgICAgICAgICAgICAgW2V4cGFuZGVkXT1cImdldFJvd0V4cGFuZGVkKHJvdylcIlxuICAgICAgICAgICAgICBbcm93Q2xhc3NdPVwicm93Q2xhc3NcIlxuICAgICAgICAgICAgICAoYWN0aXZhdGUpPVwic2VsZWN0b3Iub25BY3RpdmF0ZSgkZXZlbnQsIGkpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvZGF0YXRhYmxlLWJvZHktcm93PlxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvZGF0YXRhYmxlLXJvdy13cmFwcGVyPlxuICAgICAgICA8ZGF0YXRhYmxlLXN1bW1hcnktcm93XG4gICAgICAgICAgKm5nSWY9XCJzdW1tYXJ5Um93ICYmIHN1bW1hcnlQb3NpdGlvbiA9PT0gJ2JvdHRvbSdcIlxuICAgICAgICAgIFtuZ1N0eWxlXT1cImdldEJvdHRvbVN1bW1hcnlSb3dTdHlsZXMoKVwiXG4gICAgICAgICAgW3Jvd0hlaWdodF09XCJzdW1tYXJ5SGVpZ2h0XCJcbiAgICAgICAgICBbb2Zmc2V0WF09XCJvZmZzZXRYXCJcbiAgICAgICAgICBbaW5uZXJXaWR0aF09XCJpbm5lcldpZHRoXCJcbiAgICAgICAgICBbcm93c109XCJyb3dzXCJcbiAgICAgICAgICBbY29sdW1uc109XCJjb2x1bW5zXCJcbiAgICAgICAgPlxuICAgICAgICA8L2RhdGF0YWJsZS1zdW1tYXJ5LXJvdz5cbiAgICAgIDwvZGF0YXRhYmxlLXNjcm9sbGVyPlxuICAgICAgPGRpdiBjbGFzcz1cImVtcHR5LXJvd1wiICpuZ0lmPVwiIXJvd3M/Lmxlbmd0aCAmJiAhbG9hZGluZ0luZGljYXRvclwiIFtpbm5lckhUTUxdPVwiZW1wdHlNZXNzYWdlXCI+PC9kaXY+XG4gICAgPC9kYXRhdGFibGUtc2VsZWN0aW9uPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnZGF0YXRhYmxlLWJvZHknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlQm9keUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgc2Nyb2xsYmFyVjogYm9vbGVhbjtcbiAgQElucHV0KCkgc2Nyb2xsYmFySDogYm9vbGVhbjtcbiAgQElucHV0KCkgbG9hZGluZ0luZGljYXRvcjogYm9vbGVhbjtcbiAgQElucHV0KCkgZXh0ZXJuYWxQYWdpbmc6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHJvd0hlaWdodDogbnVtYmVyIHwgJ2F1dG8nIHwgKChyb3c/OiBhbnkpID0+IG51bWJlcik7XG4gIEBJbnB1dCgpIG9mZnNldFg6IG51bWJlcjtcbiAgQElucHV0KCkgZW1wdHlNZXNzYWdlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNlbGVjdGlvblR5cGU6IFNlbGVjdGlvblR5cGU7XG4gIEBJbnB1dCgpIHNlbGVjdGVkOiBhbnlbXSA9IFtdO1xuICBASW5wdXQoKSByb3dJZGVudGl0eTogYW55O1xuICBASW5wdXQoKSByb3dEZXRhaWw6IGFueTtcbiAgQElucHV0KCkgZ3JvdXBIZWFkZXI6IGFueTtcbiAgQElucHV0KCkgc2VsZWN0Q2hlY2s6IGFueTtcbiAgQElucHV0KCkgZGlzcGxheUNoZWNrOiBhbnk7XG4gIEBJbnB1dCgpIHRyYWNrQnlQcm9wOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJvd0NsYXNzOiBhbnk7XG4gIEBJbnB1dCgpIGdyb3VwZWRSb3dzOiBhbnk7XG4gIEBJbnB1dCgpIGdyb3VwRXhwYW5zaW9uRGVmYXVsdDogYm9vbGVhbjtcbiAgQElucHV0KCkgaW5uZXJXaWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSBncm91cFJvd3NCeTogc3RyaW5nO1xuICBASW5wdXQoKSB2aXJ0dWFsaXphdGlvbjogYm9vbGVhbjtcbiAgQElucHV0KCkgc3VtbWFyeVJvdzogYm9vbGVhbjtcbiAgQElucHV0KCkgc3VtbWFyeVBvc2l0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN1bW1hcnlIZWlnaHQ6IG51bWJlcjtcblxuICBASW5wdXQoKSBzZXQgcGFnZVNpemUodmFsOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wYWdlU2l6ZSA9IHZhbDtcbiAgICB0aGlzLnJlY2FsY0xheW91dCgpO1xuICB9XG5cbiAgZ2V0IHBhZ2VTaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VTaXplO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IHJvd3ModmFsOiBhbnlbXSkge1xuICAgIHRoaXMuX3Jvd3MgPSB2YWw7XG4gICAgdGhpcy5yZWNhbGNMYXlvdXQoKTtcbiAgfVxuXG4gIGdldCByb3dzKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5fcm93cztcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCBjb2x1bW5zKHZhbDogYW55W10pIHtcbiAgICB0aGlzLl9jb2x1bW5zID0gdmFsO1xuICAgIGNvbnN0IGNvbHNCeVBpbiA9IGNvbHVtbnNCeVBpbih2YWwpO1xuICAgIHRoaXMuY29sdW1uR3JvdXBXaWR0aHMgPSBjb2x1bW5Hcm91cFdpZHRocyhjb2xzQnlQaW4sIHZhbCk7XG4gIH1cblxuICBnZXQgY29sdW1ucygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbHVtbnM7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgb2Zmc2V0KHZhbDogbnVtYmVyKSB7XG4gICAgdGhpcy5fb2Zmc2V0ID0gdmFsO1xuICAgIGlmICghdGhpcy5zY3JvbGxiYXJWIHx8ICh0aGlzLnNjcm9sbGJhclYgJiYgIXRoaXMudmlydHVhbGl6YXRpb24pKSB0aGlzLnJlY2FsY0xheW91dCgpO1xuICB9XG5cbiAgZ2V0IG9mZnNldCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9vZmZzZXQ7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgcm93Q291bnQodmFsOiBudW1iZXIpIHtcbiAgICB0aGlzLl9yb3dDb3VudCA9IHZhbDtcbiAgICB0aGlzLnJlY2FsY0xheW91dCgpO1xuICB9XG5cbiAgZ2V0IHJvd0NvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3Jvd0NvdW50O1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aCcpXG4gIGdldCBib2R5V2lkdGgoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5zY3JvbGxiYXJIKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbm5lcldpZHRoICsgJ3B4JztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcxMDAlJztcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodCcpXG4gIHNldCBib2R5SGVpZ2h0KHZhbCkge1xuICAgIGlmICh0aGlzLnNjcm9sbGJhclYpIHtcbiAgICAgIHRoaXMuX2JvZHlIZWlnaHQgPSB2YWwgKyAncHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9ib2R5SGVpZ2h0ID0gJ2F1dG8nO1xuICAgIH1cblxuICAgIHRoaXMucmVjYWxjTGF5b3V0KCk7XG4gIH1cblxuICBnZXQgYm9keUhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYm9keUhlaWdodDtcbiAgfVxuXG4gIEBPdXRwdXQoKSBzY3JvbGw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcGFnZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZGV0YWlsVG9nZ2xlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJvd0NvbnRleHRtZW51ID0gbmV3IEV2ZW50RW1pdHRlcjx7IGV2ZW50OiBNb3VzZUV2ZW50OyByb3c6IGFueSB9PihmYWxzZSk7XG4gIEBPdXRwdXQoKSB0cmVlQWN0aW9uOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAVmlld0NoaWxkKFNjcm9sbGVyQ29tcG9uZW50KSBzY3JvbGxlcjogU2Nyb2xsZXJDb21wb25lbnQ7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgaWYgc2VsZWN0aW9uIGlzIGVuYWJsZWQuXG4gICAqL1xuICBnZXQgc2VsZWN0RW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLnNlbGVjdGlvblR5cGU7XG4gIH1cblxuICAvKipcbiAgICogUHJvcGVydHkgdGhhdCB3b3VsZCBjYWxjdWxhdGUgdGhlIGhlaWdodCBvZiBzY3JvbGwgYmFyXG4gICAqIGJhc2VkIG9uIHRoZSByb3cgaGVpZ2h0cyBjYWNoZSBmb3IgdmlydHVhbCBzY3JvbGwgYW5kIHZpcnR1YWxpemF0aW9uLiBPdGhlciBzY2VuYXJpb3NcbiAgICogY2FsY3VsYXRlIHNjcm9sbCBoZWlnaHQgYXV0b21hdGljYWxseSAoYXMgaGVpZ2h0IHdpbGwgYmUgdW5kZWZpbmVkKS5cbiAgICovXG4gIGdldCBzY3JvbGxIZWlnaHQoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5zY3JvbGxiYXJWICYmIHRoaXMudmlydHVhbGl6YXRpb24gJiYgdGhpcy5yb3dDb3VudCkge1xuICAgICAgcmV0dXJuIHRoaXMucm93SGVpZ2h0c0NhY2hlLnF1ZXJ5KHRoaXMucm93Q291bnQgLSAxKTtcbiAgICB9XG4gICAgLy8gYXZvaWQgVFM3MDMwOiBOb3QgYWxsIGNvZGUgcGF0aHMgcmV0dXJuIGEgdmFsdWUuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJvd0hlaWdodHNDYWNoZTogUm93SGVpZ2h0Q2FjaGUgPSBuZXcgUm93SGVpZ2h0Q2FjaGUoKTtcbiAgdGVtcDogYW55W10gPSBbXTtcbiAgb2Zmc2V0WSA9IDA7XG4gIGluZGV4ZXM6IGFueSA9IHt9O1xuICBjb2x1bW5Hcm91cFdpZHRoczogYW55O1xuICBjb2x1bW5Hcm91cFdpZHRoc1dpdGhvdXRHcm91cDogYW55O1xuICByb3dUcmFja2luZ0ZuOiBhbnk7XG4gIGxpc3RlbmVyOiBhbnk7XG4gIHJvd0luZGV4ZXM6IGFueSA9IG5ldyBXZWFrTWFwPGFueSwgc3RyaW5nPigpO1xuICByb3dFeHBhbnNpb25zOiBhbnlbXSA9IFtdO1xuXG4gIF9yb3dzOiBhbnlbXTtcbiAgX2JvZHlIZWlnaHQ6IGFueTtcbiAgX2NvbHVtbnM6IGFueVtdO1xuICBfcm93Q291bnQ6IG51bWJlcjtcbiAgX29mZnNldDogbnVtYmVyO1xuICBfcGFnZVNpemU6IG51bWJlcjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBEYXRhVGFibGVCb2R5Q29tcG9uZW50LlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAvLyBkZWNsYXJlIGZuIGhlcmUgc28gd2UgY2FuIGdldCBhY2Nlc3MgdG8gdGhlIGB0aGlzYCBwcm9wZXJ0eVxuICAgIHRoaXMucm93VHJhY2tpbmdGbiA9IChpbmRleDogbnVtYmVyLCByb3c6IGFueSk6IGFueSA9PiB7XG4gICAgICBjb25zdCBpZHggPSB0aGlzLmdldFJvd0luZGV4KHJvdyk7XG4gICAgICBpZiAodGhpcy50cmFja0J5UHJvcCkge1xuICAgICAgICByZXR1cm4gcm93W3RoaXMudHJhY2tCeVByb3BdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGlkeDtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBhZnRlciB0aGUgY29uc3RydWN0b3IsIGluaXRpYWxpemluZyBpbnB1dCBwcm9wZXJ0aWVzXG4gICAqL1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yb3dEZXRhaWwpIHtcbiAgICAgIHRoaXMubGlzdGVuZXIgPSB0aGlzLnJvd0RldGFpbC50b2dnbGUuc3Vic2NyaWJlKCh7IHR5cGUsIHZhbHVlIH06IHsgdHlwZTogc3RyaW5nOyB2YWx1ZTogYW55IH0pID0+IHtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdyb3cnKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVSb3dFeHBhbnNpb24odmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSAnYWxsJykge1xuICAgICAgICAgIHRoaXMudG9nZ2xlQWxsUm93cyh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZWZyZXNoIHJvd3MgYWZ0ZXIgdG9nZ2xlXG4gICAgICAgIC8vIEZpeGVzICM4ODNcbiAgICAgICAgdGhpcy51cGRhdGVJbmRleGVzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlUm93cygpO1xuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZ3JvdXBIZWFkZXIpIHtcbiAgICAgIHRoaXMubGlzdGVuZXIgPSB0aGlzLmdyb3VwSGVhZGVyLnRvZ2dsZS5zdWJzY3JpYmUoKHsgdHlwZSwgdmFsdWUgfTogeyB0eXBlOiBzdHJpbmc7IHZhbHVlOiBhbnkgfSkgPT4ge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ2dyb3VwJykge1xuICAgICAgICAgIHRoaXMudG9nZ2xlUm93RXhwYW5zaW9uKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PT0gJ2FsbCcpIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZUFsbFJvd3ModmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVmcmVzaCByb3dzIGFmdGVyIHRvZ2dsZVxuICAgICAgICAvLyBGaXhlcyAjODgzXG4gICAgICAgIHRoaXMudXBkYXRlSW5kZXhlcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVJvd3MoKTtcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb25jZSwgYmVmb3JlIHRoZSBpbnN0YW5jZSBpcyBkZXN0cm95ZWQuXG4gICAqL1xuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yb3dEZXRhaWwgfHwgdGhpcy5ncm91cEhlYWRlcikge1xuICAgICAgdGhpcy5saXN0ZW5lci51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBZIG9mZnNldCBnaXZlbiBhIG5ldyBvZmZzZXQuXG4gICAqL1xuICB1cGRhdGVPZmZzZXRZKG9mZnNldD86IG51bWJlcik6IHZvaWQge1xuICAgIC8vIHNjcm9sbGVyIGlzIG1pc3Npbmcgb24gZW1wdHkgdGFibGVcbiAgICBpZiAoIXRoaXMuc2Nyb2xsZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zY3JvbGxiYXJWICYmIHRoaXMudmlydHVhbGl6YXRpb24gJiYgb2Zmc2V0KSB7XG4gICAgICAvLyBGaXJzdCBnZXQgdGhlIHJvdyBJbmRleCB0aGF0IHdlIG5lZWQgdG8gbW92ZSB0by5cbiAgICAgIGNvbnN0IHJvd0luZGV4ID0gdGhpcy5wYWdlU2l6ZSAqIG9mZnNldDtcbiAgICAgIG9mZnNldCA9IHRoaXMucm93SGVpZ2h0c0NhY2hlLnF1ZXJ5KHJvd0luZGV4IC0gMSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNjcm9sbGJhclYgJiYgIXRoaXMudmlydHVhbGl6YXRpb24pIHtcbiAgICAgIG9mZnNldCA9IDA7XG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGxlci5zZXRPZmZzZXQob2Zmc2V0IHx8IDApO1xuICB9XG5cbiAgLyoqXG4gICAqIEJvZHkgd2FzIHNjcm9sbGVkLCB0aGlzIGlzIG1haW5seSB1c2VmdWwgZm9yXG4gICAqIHdoZW4gYSB1c2VyIGlzIHNlcnZlci1zaWRlIHBhZ2luYXRpb24gdmlhIHZpcnR1YWwgc2Nyb2xsLlxuICAgKi9cbiAgb25Cb2R5U2Nyb2xsKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBzY3JvbGxZUG9zOiBudW1iZXIgPSBldmVudC5zY3JvbGxZUG9zO1xuICAgIGNvbnN0IHNjcm9sbFhQb3M6IG51bWJlciA9IGV2ZW50LnNjcm9sbFhQb3M7XG5cbiAgICAvLyBpZiBzY3JvbGwgY2hhbmdlLCB0cmlnZ2VyIHVwZGF0ZVxuICAgIC8vIHRoaXMgaXMgbWFpbmx5IHVzZWQgZm9yIGhlYWRlciBjZWxsIHBvc2l0aW9uc1xuICAgIGlmICh0aGlzLm9mZnNldFkgIT09IHNjcm9sbFlQb3MgfHwgdGhpcy5vZmZzZXRYICE9PSBzY3JvbGxYUG9zKSB7XG4gICAgICB0aGlzLnNjcm9sbC5lbWl0KHtcbiAgICAgICAgb2Zmc2V0WTogc2Nyb2xsWVBvcyxcbiAgICAgICAgb2Zmc2V0WDogc2Nyb2xsWFBvc1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5vZmZzZXRZID0gc2Nyb2xsWVBvcztcbiAgICB0aGlzLm9mZnNldFggPSBzY3JvbGxYUG9zO1xuXG4gICAgdGhpcy51cGRhdGVJbmRleGVzKCk7XG4gICAgdGhpcy51cGRhdGVQYWdlKGV2ZW50LmRpcmVjdGlvbik7XG4gICAgdGhpcy51cGRhdGVSb3dzKCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgcGFnZSBnaXZlbiBhIGRpcmVjdGlvbi5cbiAgICovXG4gIHVwZGF0ZVBhZ2UoZGlyZWN0aW9uOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBsZXQgb2Zmc2V0ID0gdGhpcy5pbmRleGVzLmZpcnN0IC8gdGhpcy5wYWdlU2l6ZTtcblxuICAgIGlmIChkaXJlY3Rpb24gPT09ICd1cCcpIHtcbiAgICAgIG9mZnNldCA9IE1hdGguY2VpbChvZmZzZXQpO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnZG93bicpIHtcbiAgICAgIG9mZnNldCA9IE1hdGguZmxvb3Iob2Zmc2V0KTtcbiAgICB9XG5cbiAgICBpZiAoZGlyZWN0aW9uICE9PSB1bmRlZmluZWQgJiYgIWlzTmFOKG9mZnNldCkpIHtcbiAgICAgIHRoaXMucGFnZS5lbWl0KHsgb2Zmc2V0IH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSByb3dzIGluIHRoZSB2aWV3IHBvcnRcbiAgICovXG4gIHVwZGF0ZVJvd3MoKTogdm9pZCB7XG4gICAgY29uc3QgeyBmaXJzdCwgbGFzdCB9ID0gdGhpcy5pbmRleGVzO1xuICAgIGxldCByb3dJbmRleCA9IGZpcnN0O1xuICAgIGxldCBpZHggPSAwO1xuICAgIGNvbnN0IHRlbXA6IGFueVtdID0gW107XG5cbiAgICAvLyBpZiBncm91cHJvd3NieSBoYXMgYmVlbiBzcGVjaWZpZWQgdHJlYXQgcm93IHBhZ2luZ1xuICAgIC8vIHBhcmFtZXRlcnMgYXMgZ3JvdXAgcGFnaW5nIHBhcmFtZXRlcnMgaWUgaWYgbGltaXQgMTAgaGFzIGJlZW5cbiAgICAvLyBzcGVjaWZpZWQgdHJlYXQgaXQgYXMgMTAgZ3JvdXBzIHJhdGhlciB0aGFuIDEwIHJvd3NcbiAgICBpZiAodGhpcy5ncm91cGVkUm93cykge1xuICAgICAgbGV0IG1heFJvd3NQZXJHcm91cCA9IDM7XG4gICAgICAvLyBpZiB0aGVyZSBpcyBvbmx5IG9uZSBncm91cCBzZXQgdGhlIG1heGltdW0gbnVtYmVyIG9mXG4gICAgICAvLyByb3dzIHBlciBncm91cCB0aGUgc2FtZSBhcyB0aGUgdG90YWwgbnVtYmVyIG9mIHJvd3NcbiAgICAgIGlmICh0aGlzLmdyb3VwZWRSb3dzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBtYXhSb3dzUGVyR3JvdXAgPSB0aGlzLmdyb3VwZWRSb3dzWzBdLnZhbHVlLmxlbmd0aDtcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKHJvd0luZGV4IDwgbGFzdCAmJiByb3dJbmRleCA8IHRoaXMuZ3JvdXBlZFJvd3MubGVuZ3RoKSB7XG4gICAgICAgIC8vIEFkZCB0aGUgZ3JvdXBzIGludG8gdGhpcyBwYWdlXG4gICAgICAgIGNvbnN0IGdyb3VwID0gdGhpcy5ncm91cGVkUm93c1tyb3dJbmRleF07XG4gICAgICAgIHRoaXMucm93SW5kZXhlcy5zZXQoZ3JvdXAsIHJvd0luZGV4KTtcblxuICAgICAgICBpZiAoZ3JvdXAudmFsdWUpIHtcbiAgICAgICAgICAvLyBhZGQgaW5kZXhlcyBmb3IgZWFjaCBncm91cCBpdGVtXG4gICAgICAgICAgZ3JvdXAudmFsdWUuZm9yRWFjaCgoZzogYW55LCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IF9pZHggPSBgJHtyb3dJbmRleH0tJHtpfWA7XG4gICAgICAgICAgICB0aGlzLnJvd0luZGV4ZXMuc2V0KGcsIF9pZHgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRlbXBbaWR4XSA9IGdyb3VwO1xuICAgICAgICBpZHgrKztcblxuICAgICAgICAvLyBHcm91cCBpbmRleCBpbiB0aGlzIGNvbnRleHRcbiAgICAgICAgcm93SW5kZXgrKztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKHJvd0luZGV4IDwgbGFzdCAmJiByb3dJbmRleCA8IHRoaXMucm93Q291bnQpIHtcbiAgICAgICAgY29uc3Qgcm93ID0gdGhpcy5yb3dzW3Jvd0luZGV4XTtcblxuICAgICAgICBpZiAocm93KSB7XG4gICAgICAgICAgLy8gYWRkIGluZGV4ZXMgZm9yIGVhY2ggcm93XG4gICAgICAgICAgdGhpcy5yb3dJbmRleGVzLnNldChyb3csIHJvd0luZGV4KTtcbiAgICAgICAgICB0ZW1wW2lkeF0gPSByb3c7XG4gICAgICAgIH1cblxuICAgICAgICBpZHgrKztcbiAgICAgICAgcm93SW5kZXgrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnRlbXAgPSB0ZW1wO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgcm93IGhlaWdodFxuICAgKi9cbiAgZ2V0Um93SGVpZ2h0KHJvdzogYW55KTogbnVtYmVyIHtcbiAgICAvLyBpZiBpdHMgYSBmdW5jdGlvbiByZXR1cm4gaXRcbiAgICBpZiAodHlwZW9mIHRoaXMucm93SGVpZ2h0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gdGhpcy5yb3dIZWlnaHQocm93KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yb3dIZWlnaHQgYXMgbnVtYmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBncm91cCB0aGUgZ3JvdXAgd2l0aCBhbGwgcm93c1xuICAgKi9cbiAgZ2V0R3JvdXBIZWlnaHQoZ3JvdXA6IGFueSk6IG51bWJlciB7XG4gICAgbGV0IHJvd0hlaWdodCA9IDA7XG5cbiAgICBpZiAoZ3JvdXAudmFsdWUpIHtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBncm91cC52YWx1ZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgcm93SGVpZ2h0ICs9IHRoaXMuZ2V0Um93QW5kRGV0YWlsSGVpZ2h0KGdyb3VwLnZhbHVlW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJvd0hlaWdodDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgcm93IGhlaWdodCBiYXNlZCBvbiB0aGUgZXhwYW5kZWQgc3RhdGUgb2YgdGhlIHJvdy5cbiAgICovXG4gIGdldFJvd0FuZERldGFpbEhlaWdodChyb3c6IGFueSk6IG51bWJlciB7XG4gICAgbGV0IHJvd0hlaWdodCA9IHRoaXMuZ2V0Um93SGVpZ2h0KHJvdyk7XG4gICAgY29uc3QgZXhwYW5kZWQgPSB0aGlzLmdldFJvd0V4cGFuZGVkKHJvdyk7XG5cbiAgICAvLyBBZGRpbmcgZGV0YWlsIHJvdyBoZWlnaHQgaWYgaXRzIGV4cGFuZGVkLlxuICAgIGlmIChleHBhbmRlZCkge1xuICAgICAgcm93SGVpZ2h0ICs9IHRoaXMuZ2V0RGV0YWlsUm93SGVpZ2h0KHJvdyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJvd0hlaWdodDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGhlaWdodCBvZiB0aGUgZGV0YWlsIHJvdy5cbiAgICovXG4gIGdldERldGFpbFJvd0hlaWdodCA9IChyb3c/OiBhbnksIGluZGV4PzogYW55KTogbnVtYmVyID0+IHtcbiAgICBpZiAoIXRoaXMucm93RGV0YWlsKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgY29uc3Qgcm93SGVpZ2h0ID0gdGhpcy5yb3dEZXRhaWwucm93SGVpZ2h0O1xuICAgIHJldHVybiB0eXBlb2Ygcm93SGVpZ2h0ID09PSAnZnVuY3Rpb24nID8gcm93SGVpZ2h0KHJvdywgaW5kZXgpIDogKHJvd0hlaWdodCBhcyBudW1iZXIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIHRoZSBzdHlsZXMgZm9yIHRoZSByb3cgc28gdGhhdCB0aGUgcm93cyBjYW4gYmUgbW92ZWQgaW4gMkQgc3BhY2VcbiAgICogZHVyaW5nIHZpcnR1YWwgc2Nyb2xsIGluc2lkZSB0aGUgRE9NLiAgIEluIHRoZSBiZWxvdyBjYXNlIHRoZSBZIHBvc2l0aW9uIGlzXG4gICAqIG1hbmlwdWxhdGVkLiAgIEFzIGFuIGV4YW1wbGUsIGlmIHRoZSBoZWlnaHQgb2Ygcm93IDAgaXMgMzAgcHggYW5kIHJvdyAxIGlzXG4gICAqIDEwMCBweCB0aGVuIGZvbGxvd2luZyBzdHlsZXMgYXJlIGdlbmVyYXRlZDpcbiAgICpcbiAgICogdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTsgICAgLT4gIHJvdzBcbiAgICogdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDMwcHgsIDBweCk7ICAgLT4gIHJvdzFcbiAgICogdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDEzMHB4LCAwcHgpOyAgLT4gIHJvdzJcbiAgICpcbiAgICogUm93IGhlaWdodHMgaGF2ZSB0byBiZSBjYWxjdWxhdGVkIGJhc2VkIG9uIHRoZSByb3cgaGVpZ2h0cyBjYWNoZSBhcyB3ZSB3b250XG4gICAqIGJlIGFibGUgdG8gZGV0ZXJtaW5lIHdoaWNoIHJvdyBpcyBvZiB3aGF0IGhlaWdodCBiZWZvcmUgaGFuZC4gIEluIHRoZSBhYm92ZVxuICAgKiBjYXNlIHRoZSBwb3NpdGlvblkgb2YgdGhlIHRyYW5zbGF0ZTNkIGZvciByb3cyIHdvdWxkIGJlIHRoZSBzdW0gb2YgYWxsIHRoZVxuICAgKiBoZWlnaHRzIG9mIHRoZSByb3dzIGJlZm9yZSBpdCAoaS5lLiByb3cwIGFuZCByb3cxKS5cbiAgICpcbiAgICogQHBhcmFtIHJvd3MgdGhlIHJvdyB0aGF0IG5lZWRzIHRvIGJlIHBsYWNlZCBpbiB0aGUgMkQgc3BhY2UuXG4gICAqIEByZXR1cm5zIHRoZSBDU1MzIHN0eWxlIHRvIGJlIGFwcGxpZWRcbiAgICpcbiAgICogQG1lbWJlck9mIERhdGFUYWJsZUJvZHlDb21wb25lbnRcbiAgICovXG4gIGdldFJvd3NTdHlsZXMocm93czogYW55KTogYW55IHtcbiAgICBjb25zdCBzdHlsZXM6IGFueSA9IHt9O1xuXG4gICAgLy8gb25seSBhZGQgc3R5bGVzIGZvciB0aGUgZ3JvdXAgaWYgdGhlcmUgaXMgYSBncm91cFxuICAgIGlmICh0aGlzLmdyb3VwZWRSb3dzKSB7XG4gICAgICBzdHlsZXMud2lkdGggPSB0aGlzLmNvbHVtbkdyb3VwV2lkdGhzLnRvdGFsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNjcm9sbGJhclYgJiYgdGhpcy52aXJ0dWFsaXphdGlvbikge1xuICAgICAgbGV0IGlkeCA9IDA7XG5cbiAgICAgIGlmICh0aGlzLmdyb3VwZWRSb3dzKSB7XG4gICAgICAgIC8vIEdldCB0aGUgbGF0ZXN0IHJvdyByb3dpbmRleCBpbiBhIGdyb3VwXG4gICAgICAgIGNvbnN0IHJvdyA9IHJvd3Nbcm93cy5sZW5ndGggLSAxXTtcbiAgICAgICAgaWR4ID0gcm93ID8gdGhpcy5nZXRSb3dJbmRleChyb3cpIDogMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlkeCA9IHRoaXMuZ2V0Um93SW5kZXgocm93cyk7XG4gICAgICB9XG5cbiAgICAgIC8vIGNvbnN0IHBvcyA9IGlkeCAqIHJvd0hlaWdodDtcbiAgICAgIC8vIFRoZSBwb3NpdGlvbiBvZiB0aGlzIHJvdyB3b3VsZCBiZSB0aGUgc3VtIG9mIGFsbCByb3cgaGVpZ2h0c1xuICAgICAgLy8gdW50aWwgdGhlIHByZXZpb3VzIHJvdyBwb3NpdGlvbi5cbiAgICAgIGNvbnN0IHBvcyA9IHRoaXMucm93SGVpZ2h0c0NhY2hlLnF1ZXJ5KGlkeCAtIDEpO1xuXG4gICAgICB0cmFuc2xhdGVYWShzdHlsZXMsIDAsIHBvcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgYm90dG9tIHN1bW1hcnkgcm93IG9mZnNldCBmb3Igc2Nyb2xsYmFyIG1vZGUuXG4gICAqIEZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IGNhY2hlIGFuZCBvZmZzZXQgY2FsY3VsYXRpb25cbiAgICogc2VlIGRlc2NyaXB0aW9uIGZvciBgZ2V0Um93c1N0eWxlc2AgbWV0aG9kXG4gICAqXG4gICAqIEByZXR1cm5zIHRoZSBDU1MzIHN0eWxlIHRvIGJlIGFwcGxpZWRcbiAgICpcbiAgICogQG1lbWJlck9mIERhdGFUYWJsZUJvZHlDb21wb25lbnRcbiAgICovXG4gIGdldEJvdHRvbVN1bW1hcnlSb3dTdHlsZXMoKTogYW55IHtcbiAgICBpZiAoIXRoaXMuc2Nyb2xsYmFyViB8fCAhdGhpcy5yb3dzIHx8ICF0aGlzLnJvd3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzdHlsZXMgPSB7IHBvc2l0aW9uOiAnYWJzb2x1dGUnIH07XG4gICAgY29uc3QgcG9zID0gdGhpcy5yb3dIZWlnaHRzQ2FjaGUucXVlcnkodGhpcy5yb3dzLmxlbmd0aCAtIDEpO1xuXG4gICAgdHJhbnNsYXRlWFkoc3R5bGVzLCAwLCBwb3MpO1xuXG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlcyB0aGUgbG9hZGluZyBpbmRpY2F0b3JcbiAgICovXG4gIGhpZGVJbmRpY2F0b3IoKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiAodGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gZmFsc2UpLCA1MDApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIGluZGV4IG9mIHRoZSByb3dzIGluIHRoZSB2aWV3cG9ydFxuICAgKi9cbiAgdXBkYXRlSW5kZXhlcygpOiB2b2lkIHtcbiAgICBsZXQgZmlyc3QgPSAwO1xuICAgIGxldCBsYXN0ID0gMDtcblxuICAgIGlmICh0aGlzLnNjcm9sbGJhclYpIHtcbiAgICAgIGlmICh0aGlzLnZpcnR1YWxpemF0aW9uKSB7XG4gICAgICAgIC8vIENhbGN1bGF0aW9uIG9mIHRoZSBmaXJzdCBhbmQgbGFzdCBpbmRleGVzIHdpbGwgYmUgYmFzZWQgb24gd2hlcmUgdGhlXG4gICAgICAgIC8vIHNjcm9sbFkgcG9zaXRpb24gd291bGQgYmUgYXQuICBUaGUgbGFzdCBpbmRleCB3b3VsZCBiZSB0aGUgb25lXG4gICAgICAgIC8vIHRoYXQgc2hvd3MgdXAgaW5zaWRlIHRoZSB2aWV3IHBvcnQgdGhlIGxhc3QuXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHBhcnNlSW50KHRoaXMuYm9keUhlaWdodCwgMCk7XG4gICAgICAgIGZpcnN0ID0gdGhpcy5yb3dIZWlnaHRzQ2FjaGUuZ2V0Um93SW5kZXgodGhpcy5vZmZzZXRZKTtcbiAgICAgICAgbGFzdCA9IHRoaXMucm93SGVpZ2h0c0NhY2hlLmdldFJvd0luZGV4KGhlaWdodCArIHRoaXMub2Zmc2V0WSkgKyAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgdmlydHVhbCByb3dzIGFyZSBub3QgbmVlZGVkXG4gICAgICAgIC8vIFdlIHJlbmRlciBhbGwgaW4gb25lIGdvXG4gICAgICAgIGZpcnN0ID0gMDtcbiAgICAgICAgbGFzdCA9IHRoaXMucm93Q291bnQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZSBzZXJ2ZXIgaXMgaGFuZGxpbmcgcGFnaW5nIGFuZCB3aWxsIHBhc3MgYW4gYXJyYXkgdGhhdCBiZWdpbnMgd2l0aCB0aGVcbiAgICAgIC8vIGVsZW1lbnQgYXQgYSBzcGVjaWZpZWQgb2Zmc2V0LiAgZmlyc3Qgc2hvdWxkIGFsd2F5cyBiZSAwIHdpdGggZXh0ZXJuYWwgcGFnaW5nLlxuICAgICAgaWYgKCF0aGlzLmV4dGVybmFsUGFnaW5nKSB7XG4gICAgICAgIGZpcnN0ID0gTWF0aC5tYXgodGhpcy5vZmZzZXQgKiB0aGlzLnBhZ2VTaXplLCAwKTtcbiAgICAgIH1cbiAgICAgIGxhc3QgPSBNYXRoLm1pbihmaXJzdCArIHRoaXMucGFnZVNpemUsIHRoaXMucm93Q291bnQpO1xuICAgIH1cblxuICAgIHRoaXMuaW5kZXhlcyA9IHsgZmlyc3QsIGxhc3QgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoZXMgdGhlIGZ1bGwgUm93IEhlaWdodCBjYWNoZS4gIFNob3VsZCBiZSB1c2VkXG4gICAqIHdoZW4gdGhlIGVudGlyZSByb3cgYXJyYXkgc3RhdGUgaGFzIGNoYW5nZWQuXG4gICAqL1xuICByZWZyZXNoUm93SGVpZ2h0Q2FjaGUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnNjcm9sbGJhclYgfHwgKHRoaXMuc2Nyb2xsYmFyViAmJiAhdGhpcy52aXJ0dWFsaXphdGlvbikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBjbGVhciB0aGUgcHJldmlvdXMgcm93IGhlaWdodCBjYWNoZSBpZiBhbHJlYWR5IHByZXNlbnQuXG4gICAgLy8gdGhpcyBpcyB1c2VmdWwgZHVyaW5nIHNvcnRzLCBmaWx0ZXJzIHdoZXJlIHRoZSBzdGF0ZSBvZiB0aGVcbiAgICAvLyByb3dzIGFycmF5IGlzIGNoYW5nZWQuXG4gICAgdGhpcy5yb3dIZWlnaHRzQ2FjaGUuY2xlYXJDYWNoZSgpO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgdHJlZSBvbmx5IGlmIHRoZXJlIGFyZSByb3dzIGluc2lkZSB0aGUgdHJlZS5cbiAgICBpZiAodGhpcy5yb3dzICYmIHRoaXMucm93cy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHJvd0V4cGFuc2lvbnMgPSBuZXcgU2V0KCk7XG4gICAgICBmb3IgKGNvbnN0IHJvdyBvZiB0aGlzLnJvd3MpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0Um93RXhwYW5kZWQocm93KSkge1xuICAgICAgICAgIHJvd0V4cGFuc2lvbnMuYWRkKHJvdyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5yb3dIZWlnaHRzQ2FjaGUuaW5pdENhY2hlKHtcbiAgICAgICAgcm93czogdGhpcy5yb3dzLFxuICAgICAgICByb3dIZWlnaHQ6IHRoaXMucm93SGVpZ2h0LFxuICAgICAgICBkZXRhaWxSb3dIZWlnaHQ6IHRoaXMuZ2V0RGV0YWlsUm93SGVpZ2h0LFxuICAgICAgICBleHRlcm5hbFZpcnR1YWw6IHRoaXMuc2Nyb2xsYmFyViAmJiB0aGlzLmV4dGVybmFsUGFnaW5nLFxuICAgICAgICByb3dDb3VudDogdGhpcy5yb3dDb3VudCxcbiAgICAgICAgcm93SW5kZXhlczogdGhpcy5yb3dJbmRleGVzLFxuICAgICAgICByb3dFeHBhbnNpb25zXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgaW5kZXggZm9yIHRoZSB2aWV3IHBvcnRcbiAgICovXG4gIGdldEFkanVzdGVkVmlld1BvcnRJbmRleCgpOiBudW1iZXIge1xuICAgIC8vIENhcHR1cmUgdGhlIHJvdyBpbmRleCBvZiB0aGUgZmlyc3Qgcm93IHRoYXQgaXMgdmlzaWJsZSBvbiB0aGUgdmlld3BvcnQuXG4gICAgLy8gSWYgdGhlIHNjcm9sbCBiYXIgaXMganVzdCBiZWxvdyB0aGUgcm93IHdoaWNoIGlzIGhpZ2hsaWdodGVkIHRoZW4gbWFrZSB0aGF0IGFzIHRoZVxuICAgIC8vIGZpcnN0IGluZGV4LlxuICAgIGNvbnN0IHZpZXdQb3J0Rmlyc3RSb3dJbmRleCA9IHRoaXMuaW5kZXhlcy5maXJzdDtcblxuICAgIGlmICh0aGlzLnNjcm9sbGJhclYgJiYgdGhpcy52aXJ0dWFsaXphdGlvbikge1xuICAgICAgY29uc3Qgb2Zmc2V0U2Nyb2xsID0gdGhpcy5yb3dIZWlnaHRzQ2FjaGUucXVlcnkodmlld1BvcnRGaXJzdFJvd0luZGV4IC0gMSk7XG4gICAgICByZXR1cm4gb2Zmc2V0U2Nyb2xsIDw9IHRoaXMub2Zmc2V0WSA/IHZpZXdQb3J0Rmlyc3RSb3dJbmRleCAtIDEgOiB2aWV3UG9ydEZpcnN0Um93SW5kZXg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZpZXdQb3J0Rmlyc3RSb3dJbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGUgdGhlIEV4cGFuc2lvbiBvZiB0aGUgcm93IGkuZS4gaWYgdGhlIHJvdyBpcyBleHBhbmRlZCB0aGVuIGl0IHdpbGxcbiAgICogY29sbGFwc2UgYW5kIHZpY2UgdmVyc2EuICAgTm90ZSB0aGF0IHRoZSBleHBhbmRlZCBzdGF0dXMgaXMgc3RvcmVkIGFzXG4gICAqIGEgcGFydCBvZiB0aGUgcm93IG9iamVjdCBpdHNlbGYgYXMgd2UgaGF2ZSB0byBwcmVzZXJ2ZSB0aGUgZXhwYW5kZWQgcm93XG4gICAqIHN0YXR1cyBpbiBjYXNlIG9mIHNvcnRpbmcgYW5kIGZpbHRlcmluZyBvZiB0aGUgcm93IHNldC5cbiAgICovXG4gIHRvZ2dsZVJvd0V4cGFuc2lvbihyb3c6IGFueSk6IHZvaWQge1xuICAgIC8vIENhcHR1cmUgdGhlIHJvdyBpbmRleCBvZiB0aGUgZmlyc3Qgcm93IHRoYXQgaXMgdmlzaWJsZSBvbiB0aGUgdmlld3BvcnQuXG4gICAgY29uc3Qgdmlld1BvcnRGaXJzdFJvd0luZGV4ID0gdGhpcy5nZXRBZGp1c3RlZFZpZXdQb3J0SW5kZXgoKTtcbiAgICBjb25zdCByb3dFeHBhbmRlZElkeCA9IHRoaXMuZ2V0Um93RXhwYW5kZWRJZHgocm93LCB0aGlzLnJvd0V4cGFuc2lvbnMpO1xuICAgIGNvbnN0IGV4cGFuZGVkID0gcm93RXhwYW5kZWRJZHggPiAtMTtcblxuICAgIC8vIElmIHRoZSBkZXRhaWxSb3dIZWlnaHQgaXMgYXV0byAtLT4gb25seSBpbiBjYXNlIG9mIG5vbi12aXJ0dWFsaXplZCBzY3JvbGxcbiAgICBpZiAodGhpcy5zY3JvbGxiYXJWICYmIHRoaXMudmlydHVhbGl6YXRpb24pIHtcbiAgICAgIGNvbnN0IGRldGFpbFJvd0hlaWdodCA9IHRoaXMuZ2V0RGV0YWlsUm93SGVpZ2h0KHJvdykgKiAoZXhwYW5kZWQgPyAtMSA6IDEpO1xuICAgICAgLy8gY29uc3QgaWR4ID0gdGhpcy5yb3dJbmRleGVzLmdldChyb3cpIHx8IDA7XG4gICAgICBjb25zdCBpZHggPSB0aGlzLmdldFJvd0luZGV4KHJvdyk7XG4gICAgICB0aGlzLnJvd0hlaWdodHNDYWNoZS51cGRhdGUoaWR4LCBkZXRhaWxSb3dIZWlnaHQpO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB0aGUgdG9nZ2xlZCByb3cgYW5kIHVwZGF0ZSB0aGl2ZSBuZXZlcmUgaGVpZ2h0cyBpbiB0aGUgY2FjaGUuXG4gICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICB0aGlzLnJvd0V4cGFuc2lvbnMuc3BsaWNlKHJvd0V4cGFuZGVkSWR4LCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3dFeHBhbnNpb25zLnB1c2gocm93KTtcbiAgICB9XG5cbiAgICB0aGlzLmRldGFpbFRvZ2dsZS5lbWl0KHtcbiAgICAgIHJvd3M6IFtyb3ddLFxuICAgICAgY3VycmVudEluZGV4OiB2aWV3UG9ydEZpcnN0Um93SW5kZXhcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBhbmQvQ29sbGFwc2UgYWxsIHRoZSByb3dzIG5vIG1hdHRlciB3aGF0IHRoZWlyIHN0YXRlIGlzLlxuICAgKi9cbiAgdG9nZ2xlQWxsUm93cyhleHBhbmRlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIC8vIGNsZWFyIHByZXYgZXhwYW5zaW9uc1xuICAgIHRoaXMucm93RXhwYW5zaW9ucyA9IFtdO1xuXG4gICAgLy8gQ2FwdHVyZSB0aGUgcm93IGluZGV4IG9mIHRoZSBmaXJzdCByb3cgdGhhdCBpcyB2aXNpYmxlIG9uIHRoZSB2aWV3cG9ydC5cbiAgICBjb25zdCB2aWV3UG9ydEZpcnN0Um93SW5kZXggPSB0aGlzLmdldEFkanVzdGVkVmlld1BvcnRJbmRleCgpO1xuXG4gICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICBmb3IgKGNvbnN0IHJvdyBvZiB0aGlzLnJvd3MpIHtcbiAgICAgICAgdGhpcy5yb3dFeHBhbnNpb25zLnB1c2gocm93KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5zY3JvbGxiYXJWKSB7XG4gICAgICAvLyBSZWZyZXNoIHRoZSBmdWxsIHJvdyBoZWlnaHRzIGNhY2hlIHNpbmNlIGV2ZXJ5IHJvdyB3YXMgYWZmZWN0ZWQuXG4gICAgICB0aGlzLnJlY2FsY0xheW91dCgpO1xuICAgIH1cblxuICAgIC8vIEVtaXQgYWxsIHJvd3MgdGhhdCBoYXZlIGJlZW4gZXhwYW5kZWQuXG4gICAgdGhpcy5kZXRhaWxUb2dnbGUuZW1pdCh7XG4gICAgICByb3dzOiB0aGlzLnJvd3MsXG4gICAgICBjdXJyZW50SW5kZXg6IHZpZXdQb3J0Rmlyc3RSb3dJbmRleFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlY2FsY3VsYXRlcyB0aGUgdGFibGVcbiAgICovXG4gIHJlY2FsY0xheW91dCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlZnJlc2hSb3dIZWlnaHRDYWNoZSgpO1xuICAgIHRoaXMudXBkYXRlSW5kZXhlcygpO1xuICAgIHRoaXMudXBkYXRlUm93cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYWNrcyB0aGUgY29sdW1uXG4gICAqL1xuICBjb2x1bW5UcmFja2luZ0ZuKGluZGV4OiBudW1iZXIsIGNvbHVtbjogYW55KTogYW55IHtcbiAgICByZXR1cm4gY29sdW1uLiQkaWQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgcm93IHBpbm5pbmcgZ3JvdXAgc3R5bGVzXG4gICAqL1xuICBzdHlsZXNCeUdyb3VwKGdyb3VwOiBzdHJpbmcpIHtcbiAgICBjb25zdCB3aWR0aHMgPSB0aGlzLmNvbHVtbkdyb3VwV2lkdGhzO1xuICAgIGNvbnN0IG9mZnNldFggPSB0aGlzLm9mZnNldFg7XG5cbiAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICB3aWR0aDogYCR7d2lkdGhzW2dyb3VwXX1weGBcbiAgICB9O1xuXG4gICAgaWYgKGdyb3VwID09PSAnbGVmdCcpIHtcbiAgICAgIHRyYW5zbGF0ZVhZKHN0eWxlcywgb2Zmc2V0WCwgMCk7XG4gICAgfSBlbHNlIGlmIChncm91cCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgY29uc3QgYm9keVdpZHRoID0gcGFyc2VJbnQodGhpcy5pbm5lcldpZHRoICsgJycsIDApO1xuICAgICAgY29uc3QgdG90YWxEaWZmID0gd2lkdGhzLnRvdGFsIC0gYm9keVdpZHRoO1xuICAgICAgY29uc3Qgb2Zmc2V0RGlmZiA9IHRvdGFsRGlmZiAtIG9mZnNldFg7XG4gICAgICBjb25zdCBvZmZzZXQgPSBvZmZzZXREaWZmICogLTE7XG4gICAgICB0cmFuc2xhdGVYWShzdHlsZXMsIG9mZnNldCwgMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGlmIHRoZSByb3cgd2FzIGV4cGFuZGVkIGFuZCBzZXQgZGVmYXVsdCByb3cgZXhwYW5zaW9uIHdoZW4gcm93IGV4cGFuc2lvbiBpcyBlbXB0eVxuICAgKi9cbiAgZ2V0Um93RXhwYW5kZWQocm93OiBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5yb3dFeHBhbnNpb25zLmxlbmd0aCA9PT0gMCAmJiB0aGlzLmdyb3VwRXhwYW5zaW9uRGVmYXVsdCkge1xuICAgICAgZm9yIChjb25zdCBncm91cCBvZiB0aGlzLmdyb3VwZWRSb3dzKSB7XG4gICAgICAgIHRoaXMucm93RXhwYW5zaW9ucy5wdXNoKGdyb3VwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5nZXRSb3dFeHBhbmRlZElkeChyb3csIHRoaXMucm93RXhwYW5zaW9ucykgPiAtMTtcbiAgfVxuXG4gIGdldFJvd0V4cGFuZGVkSWR4KHJvdzogYW55LCBleHBhbmRlZDogYW55W10pOiBudW1iZXIge1xuICAgIGlmICghZXhwYW5kZWQgfHwgIWV4cGFuZGVkLmxlbmd0aCkgcmV0dXJuIC0xO1xuXG4gICAgY29uc3Qgcm93SWQgPSB0aGlzLnJvd0lkZW50aXR5KHJvdyk7XG4gICAgcmV0dXJuIGV4cGFuZGVkLmZpbmRJbmRleChyID0+IHtcbiAgICAgIGNvbnN0IGlkID0gdGhpcy5yb3dJZGVudGl0eShyKTtcbiAgICAgIHJldHVybiBpZCA9PT0gcm93SWQ7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgcm93IGluZGV4IGdpdmVuIGEgcm93XG4gICAqL1xuICBnZXRSb3dJbmRleChyb3c6IGFueSk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucm93SW5kZXhlcy5nZXQocm93KSB8fCAwO1xuICB9XG5cbiAgb25UcmVlQWN0aW9uKHJvdzogYW55KSB7XG4gICAgdGhpcy50cmVlQWN0aW9uLmVtaXQoeyByb3cgfSk7XG4gIH1cbn1cbiJdfQ==