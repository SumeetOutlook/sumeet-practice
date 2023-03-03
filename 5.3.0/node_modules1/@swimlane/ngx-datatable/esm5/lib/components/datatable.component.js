import { __assign, __decorate, __param, __read, __spread } from "tslib";
import { Component, Input, Output, ElementRef, EventEmitter, ViewChild, HostListener, ContentChildren, OnInit, QueryList, AfterViewInit, HostBinding, ContentChild, DoCheck, KeyValueDiffers, KeyValueDiffer, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, SkipSelf, Optional, Inject } from '@angular/core';
import { DatatableGroupHeaderDirective } from './body/body-group-header.directive';
import { BehaviorSubject } from 'rxjs';
import { groupRowsByParents, optionalGetterForProp } from '../utils/tree';
import { setColumnDefaults, translateTemplates } from '../utils/column-helper';
import { ColumnMode } from '../types/column-mode.type';
import { SelectionType } from '../types/selection.type';
import { SortType } from '../types/sort.type';
import { ContextmenuType } from '../types/contextmenu.type';
import { DataTableColumnDirective } from './columns/column.directive';
import { DatatableRowDetailDirective } from './row-detail/row-detail.directive';
import { DatatableFooterDirective } from './footer/footer.directive';
import { DataTableBodyComponent } from './body/body.component';
import { DataTableHeaderComponent } from './header/header.component';
import { ScrollbarHelper } from '../services/scrollbar-helper.service';
import { ColumnChangesService } from '../services/column-changes.service';
import { DimensionsHelper } from '../services/dimensions-helper.service';
import { throttleable } from '../utils/throttle';
import { forceFillColumnWidths, adjustColumnWidths } from '../utils/math';
import { sortRows } from '../utils/sort';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../directives/visibility.directive';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from './body/body.component';
import * as ɵngcc4 from './header/header.component';
import * as ɵngcc5 from './footer/footer.component';

function DatatableComponent_datatable_header_1_Template(rf, ctx) { if (rf & 1) {
    var _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "datatable-header", 4);
    ɵngcc0.ɵɵlistener("sort", function DatatableComponent_datatable_header_1_Template_datatable_header_sort_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); var ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.onColumnSort($event); })("resize", function DatatableComponent_datatable_header_1_Template_datatable_header_resize_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); var ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onColumnResize($event); })("reorder", function DatatableComponent_datatable_header_1_Template_datatable_header_reorder_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); var ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.onColumnReorder($event); })("select", function DatatableComponent_datatable_header_1_Template_datatable_header_select_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); var ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.onHeaderSelect($event); })("columnContextmenu", function DatatableComponent_datatable_header_1_Template_datatable_header_columnContextmenu_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); var ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.onColumnContextmenu($event); });
    ɵngcc0.ɵɵpipe(1, "async");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("sorts", ctx_r0.sorts)("sortType", ctx_r0.sortType)("scrollbarH", ctx_r0.scrollbarH)("innerWidth", ctx_r0._innerWidth)("offsetX", ɵngcc0.ɵɵpipeBind1(1, 14, ctx_r0._offsetX))("dealsWithGroup", ctx_r0.groupedRows !== undefined)("columns", ctx_r0._internalColumns)("headerHeight", ctx_r0.headerHeight)("reorderable", ctx_r0.reorderable)("targetMarkerTemplate", ctx_r0.targetMarkerTemplate)("sortAscendingIcon", ctx_r0.cssClasses.sortAscending)("sortDescendingIcon", ctx_r0.cssClasses.sortDescending)("allRowsSelected", ctx_r0.allRowsSelected)("selectionType", ctx_r0.selectionType);
} }
function DatatableComponent_datatable_footer_4_Template(rf, ctx) { if (rf & 1) {
    var _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "datatable-footer", 5);
    ɵngcc0.ɵɵlistener("page", function DatatableComponent_datatable_footer_4_Template_datatable_footer_page_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); var ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.onFooterPage($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("rowCount", ctx_r1.rowCount)("pageSize", ctx_r1.pageSize)("offset", ctx_r1.offset)("footerHeight", ctx_r1.footerHeight)("footerTemplate", ctx_r1.footer)("totalMessage", ctx_r1.messages.totalMessage)("pagerLeftArrowIcon", ctx_r1.cssClasses.pagerLeftArrow)("pagerRightArrowIcon", ctx_r1.cssClasses.pagerRightArrow)("pagerPreviousIcon", ctx_r1.cssClasses.pagerPrevious)("selectedCount", ctx_r1.selected.length)("selectedMessage", !!ctx_r1.selectionType && ctx_r1.messages.selectedMessage)("pagerNextIcon", ctx_r1.cssClasses.pagerNext);
} }
var DatatableComponent = /** @class */ (function () {
    function DatatableComponent(scrollbarHelper, dimensionsHelper, cd, element, differs, columnChangesService, configuration) {
        var _this = this;
        this.scrollbarHelper = scrollbarHelper;
        this.dimensionsHelper = dimensionsHelper;
        this.cd = cd;
        this.columnChangesService = columnChangesService;
        this.configuration = configuration;
        /**
         * List of row objects that should be
         * represented as selected in the grid.
         * Default value: `[]`
         */
        this.selected = [];
        /**
         * Enable vertical scrollbars
         */
        this.scrollbarV = false;
        /**
         * Enable horz scrollbars
         */
        this.scrollbarH = false;
        /**
         * The row height; which is necessary
         * to calculate the height for the lazy rendering.
         */
        this.rowHeight = 30;
        /**
         * Type of column width distribution formula.
         * Example: flex, force, standard
         */
        this.columnMode = ColumnMode.standard;
        /**
         * The minimum header height in pixels.
         * Pass a falsey for no header
         */
        this.headerHeight = 30;
        /**
         * The minimum footer height in pixels.
         * Pass falsey for no footer
         */
        this.footerHeight = 0;
        /**
         * If the table should use external paging
         * otherwise its assumed that all data is preloaded.
         */
        this.externalPaging = false;
        /**
         * If the table should use external sorting or
         * the built-in basic sorting.
         */
        this.externalSorting = false;
        /**
         * Show the linear loading bar.
         * Default value: `false`
         */
        this.loadingIndicator = false;
        /**
         * Enable/Disable ability to re-order columns
         * by dragging them.
         */
        this.reorderable = true;
        /**
         * Swap columns on re-order columns or
         * move them.
         */
        this.swapColumns = true;
        /**
         * The type of sorting
         */
        this.sortType = SortType.single;
        /**
         * Array of sorted columns by property and type.
         * Default value: `[]`
         */
        this.sorts = [];
        /**
         * Css class overrides
         */
        this.cssClasses = {
            sortAscending: 'datatable-icon-up',
            sortDescending: 'datatable-icon-down',
            pagerLeftArrow: 'datatable-icon-left',
            pagerRightArrow: 'datatable-icon-right',
            pagerPrevious: 'datatable-icon-prev',
            pagerNext: 'datatable-icon-skip'
        };
        /**
         * Message overrides for localization
         *
         * emptyMessage     [default] = 'No data to display'
         * totalMessage     [default] = 'total'
         * selectedMessage  [default] = 'selected'
         */
        this.messages = {
            // Message to show when array is presented
            // but contains no values
            emptyMessage: 'No data to display',
            // Footer total message
            totalMessage: 'total',
            // Footer selected message
            selectedMessage: 'selected'
        };
        /**
         * A boolean you can use to set the detault behaviour of rows and groups
         * whether they will start expanded or not. If ommited the default is NOT expanded.
         *
         */
        this.groupExpansionDefault = false;
        /**
         * Property to which you can use for determining select all
         * rows on current page or not.
         *
         * @memberOf DatatableComponent
         */
        this.selectAllRowsOnPage = false;
        /**
         * A flag for row virtualization on / off
         */
        this.virtualization = true;
        /**
         * A flag for switching summary row on / off
         */
        this.summaryRow = false;
        /**
         * A height of summary row
         */
        this.summaryHeight = 30;
        /**
         * A property holds a summary row position: top/bottom
         */
        this.summaryPosition = 'top';
        /**
         * Body was scrolled typically in a `scrollbarV:true` scenario.
         */
        this.scroll = new EventEmitter();
        /**
         * A cell or row was focused via keyboard or mouse click.
         */
        this.activate = new EventEmitter();
        /**
         * A cell or row was selected.
         */
        this.select = new EventEmitter();
        /**
         * Column sort was invoked.
         */
        this.sort = new EventEmitter();
        /**
         * The table was paged either triggered by the pager or the body scroll.
         */
        this.page = new EventEmitter();
        /**
         * Columns were re-ordered.
         */
        this.reorder = new EventEmitter();
        /**
         * Column was resized.
         */
        this.resize = new EventEmitter();
        /**
         * The context menu was invoked on the table.
         * type indicates whether the header or the body was clicked.
         * content contains either the column or the row that was clicked.
         */
        this.tableContextmenu = new EventEmitter(false);
        /**
         * A row was expanded ot collapsed for tree
         */
        this.treeAction = new EventEmitter();
        this.rowCount = 0;
        this._offsetX = new BehaviorSubject(0);
        this._count = 0;
        this._offset = 0;
        this._subscriptions = [];
        /**
         * This will be used when displaying or selecting rows.
         * when tracking/comparing them, we'll use the value of this fn,
         *
         * (`fn(x) === fn(y)` instead of `x === y`)
         */
        this.rowIdentity = function (x) {
            if (_this._groupRowsBy) {
                // each group in groupedRows are stored as {key, value: [rows]},
                // where key is the groupRowsBy index
                return x.key;
            }
            else {
                return x;
            }
        };
        // get ref to elm for measuring
        this.element = element.nativeElement;
        this.rowDiffer = differs.find({}).create();
        // apply global settings from Module.forRoot
        if (this.configuration && this.configuration.messages) {
            this.messages = __assign({}, this.configuration.messages);
        }
    }
    Object.defineProperty(DatatableComponent.prototype, "rows", {
        /**
         * Gets the rows.
         */
        get: function () {
            return this._rows;
        },
        /**
         * Rows that are displayed in the table.
         */
        set: function (val) {
            this._rows = val;
            if (val) {
                this._internalRows = __spread(val);
            }
            // auto sort on new updates
            if (!this.externalSorting) {
                this.sortInternalRows();
            }
            // auto group by parent on new update
            this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
            // recalculate sizes/etc
            this.recalculate();
            if (this._rows && this._groupRowsBy) {
                // If a column has been specified in _groupRowsBy created a new array with the data grouped by that row
                this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
            }
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "groupRowsBy", {
        get: function () {
            return this._groupRowsBy;
        },
        /**
         * This attribute allows the user to set the name of the column to group the data with
         */
        set: function (val) {
            if (val) {
                this._groupRowsBy = val;
                if (this._rows && this._groupRowsBy) {
                    // cretes a new array with the data grouped
                    this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "columns", {
        /**
         * Get the columns.
         */
        get: function () {
            return this._columns;
        },
        /**
         * Columns to be displayed.
         */
        set: function (val) {
            if (val) {
                this._internalColumns = __spread(val);
                setColumnDefaults(this._internalColumns);
                this.recalculateColumns();
            }
            this._columns = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "limit", {
        /**
         * Gets the limit.
         */
        get: function () {
            return this._limit;
        },
        /**
         * The page size to be shown.
         * Default value: `undefined`
         */
        set: function (val) {
            this._limit = val;
            // recalculate sizes/etc
            this.recalculate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "count", {
        /**
         * Gets the count.
         */
        get: function () {
            return this._count;
        },
        /**
         * The total count of all rows.
         * Default value: `0`
         */
        set: function (val) {
            this._count = val;
            // recalculate sizes/etc
            this.recalculate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "offset", {
        get: function () {
            return Math.max(Math.min(this._offset, Math.ceil(this.rowCount / this.pageSize) - 1), 0);
        },
        /**
         * The current offset ( page - 1 ) shown.
         * Default value: `0`
         */
        set: function (val) {
            this._offset = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isFixedHeader", {
        /**
         * CSS class applied if the header height if fixed height.
         */
        get: function () {
            var headerHeight = this.headerHeight;
            return typeof headerHeight === 'string' ? headerHeight !== 'auto' : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isFixedRow", {
        /**
         * CSS class applied to the root element if
         * the row heights are fixed heights.
         */
        get: function () {
            return this.rowHeight !== 'auto';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isVertScroll", {
        /**
         * CSS class applied to root element if
         * vertical scrolling is enabled.
         */
        get: function () {
            return this.scrollbarV;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isVirtualized", {
        /**
         * CSS class applied to root element if
         * virtualization is enabled.
         */
        get: function () {
            return this.virtualization;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isHorScroll", {
        /**
         * CSS class applied to the root element
         * if the horziontal scrolling is enabled.
         */
        get: function () {
            return this.scrollbarH;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isSelectable", {
        /**
         * CSS class applied to root element is selectable.
         */
        get: function () {
            return this.selectionType !== undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isCheckboxSelection", {
        /**
         * CSS class applied to root is checkbox selection.
         */
        get: function () {
            return this.selectionType === SelectionType.checkbox;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isCellSelection", {
        /**
         * CSS class applied to root if cell selection.
         */
        get: function () {
            return this.selectionType === SelectionType.cell;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isSingleSelection", {
        /**
         * CSS class applied to root if single select.
         */
        get: function () {
            return this.selectionType === SelectionType.single;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isMultiSelection", {
        /**
         * CSS class added to root element if mulit select
         */
        get: function () {
            return this.selectionType === SelectionType.multi;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isMultiClickSelection", {
        /**
         * CSS class added to root element if mulit click select
         */
        get: function () {
            return this.selectionType === SelectionType.multiClick;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "columnTemplates", {
        /**
         * Returns the column templates.
         */
        get: function () {
            return this._columnTemplates;
        },
        /**
         * Column templates gathered from `ContentChildren`
         * if described in your markup.
         */
        set: function (val) {
            this._columnTemplates = val;
            this.translateColumns(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "allRowsSelected", {
        /**
         * Returns if all rows are selected.
         */
        get: function () {
            var allRowsSelected = this.rows && this.selected && this.selected.length === this.rows.length;
            if (this.bodyComponent && this.selectAllRowsOnPage) {
                var indexes = this.bodyComponent.indexes;
                var rowsOnPage = indexes.last - indexes.first;
                allRowsSelected = this.selected.length === rowsOnPage;
            }
            return this.selected && this.rows && this.rows.length !== 0 && allRowsSelected;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Lifecycle hook that is called after data-bound
     * properties of a directive are initialized.
     */
    DatatableComponent.prototype.ngOnInit = function () {
        // need to call this immediatly to size
        // if the table is hidden the visibility
        // listener will invoke this itself upon show
        this.recalculate();
    };
    /**
     * Lifecycle hook that is called after a component's
     * view has been fully initialized.
     */
    DatatableComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (!this.externalSorting) {
            this.sortInternalRows();
        }
        // this has to be done to prevent the change detection
        // tree from freaking out because we are readjusting
        if (typeof requestAnimationFrame === 'undefined') {
            return;
        }
        requestAnimationFrame(function () {
            _this.recalculate();
            // emit page for virtual server-side kickoff
            if (_this.externalPaging && _this.scrollbarV) {
                _this.page.emit({
                    count: _this.count,
                    pageSize: _this.pageSize,
                    limit: _this.limit,
                    offset: 0
                });
            }
        });
    };
    /**
     * Lifecycle hook that is called after a component's
     * content has been fully initialized.
     */
    DatatableComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.columnTemplates.changes.subscribe(function (v) { return _this.translateColumns(v); });
        this.listenForColumnInputChanges();
    };
    /**
     * Translates the templates to the column objects
     */
    DatatableComponent.prototype.translateColumns = function (val) {
        if (val) {
            var arr = val.toArray();
            if (arr.length) {
                this._internalColumns = translateTemplates(arr);
                setColumnDefaults(this._internalColumns);
                this.recalculateColumns();
                this.sortInternalRows();
                this.cd.markForCheck();
            }
        }
    };
    /**
     * Creates a map with the data grouped by the user choice of grouping index
     *
     * @param originalArray the original array passed via parameter
     * @param groupByIndex  the index of the column to group the data by
     */
    DatatableComponent.prototype.groupArrayBy = function (originalArray, groupBy) {
        // create a map to hold groups with their corresponding results
        var map = new Map();
        var i = 0;
        originalArray.forEach(function (item) {
            var key = item[groupBy];
            if (!map.has(key)) {
                map.set(key, [item]);
            }
            else {
                map.get(key).push(item);
            }
            i++;
        });
        var addGroup = function (key, value) {
            return { key: key, value: value };
        };
        // convert map back to a simple array of objects
        return Array.from(map, function (x) { return addGroup(x[0], x[1]); });
    };
    /*
     * Lifecycle hook that is called when Angular dirty checks a directive.
     */
    DatatableComponent.prototype.ngDoCheck = function () {
        if (this.rowDiffer.diff(this.rows)) {
            if (!this.externalSorting) {
                this.sortInternalRows();
            }
            else {
                this._internalRows = __spread(this.rows);
            }
            // auto group by parent on new update
            this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
            this.recalculatePages();
            this.cd.markForCheck();
        }
    };
    /**
     * Recalc's the sizes of the grid.
     *
     * Updated automatically on changes to:
     *
     *  - Columns
     *  - Rows
     *  - Paging related
     *
     * Also can be manually invoked or upon window resize.
     */
    DatatableComponent.prototype.recalculate = function () {
        this.recalculateDims();
        this.recalculateColumns();
        this.cd.markForCheck();
    };
    /**
     * Window resize handler to update sizes.
     */
    DatatableComponent.prototype.onWindowResize = function () {
        this.recalculate();
    };
    /**
     * Recalulcates the column widths based on column width
     * distribution mode and scrollbar offsets.
     */
    DatatableComponent.prototype.recalculateColumns = function (columns, forceIdx, allowBleed) {
        if (columns === void 0) { columns = this._internalColumns; }
        if (forceIdx === void 0) { forceIdx = -1; }
        if (allowBleed === void 0) { allowBleed = this.scrollbarH; }
        if (!columns)
            return undefined;
        var width = this._innerWidth;
        if (this.scrollbarV) {
            width = width - this.scrollbarHelper.width;
        }
        if (this.columnMode === ColumnMode.force) {
            forceFillColumnWidths(columns, width, forceIdx, allowBleed);
        }
        else if (this.columnMode === ColumnMode.flex) {
            adjustColumnWidths(columns, width);
        }
        return columns;
    };
    /**
     * Recalculates the dimensions of the table size.
     * Internally calls the page size and row count calcs too.
     *
     */
    DatatableComponent.prototype.recalculateDims = function () {
        var dims = this.dimensionsHelper.getDimensions(this.element);
        this._innerWidth = Math.floor(dims.width);
        if (this.scrollbarV) {
            var height = dims.height;
            if (this.headerHeight)
                height = height - this.headerHeight;
            if (this.footerHeight)
                height = height - this.footerHeight;
            this.bodyHeight = height;
        }
        this.recalculatePages();
    };
    /**
     * Recalculates the pages after a update.
     */
    DatatableComponent.prototype.recalculatePages = function () {
        this.pageSize = this.calcPageSize();
        this.rowCount = this.calcRowCount();
    };
    /**
     * Body triggered a page event.
     */
    DatatableComponent.prototype.onBodyPage = function (_a) {
        var offset = _a.offset;
        // Avoid pagination caming from body events like scroll when the table
        // has no virtualization and the external paging is enable.
        // This means, let's the developer handle pagination by my him(her) self
        if (this.externalPaging && !this.virtualization) {
            return;
        }
        this.offset = offset;
        this.page.emit({
            count: this.count,
            pageSize: this.pageSize,
            limit: this.limit,
            offset: this.offset
        });
    };
    /**
     * The body triggered a scroll event.
     */
    DatatableComponent.prototype.onBodyScroll = function (event) {
        this._offsetX.next(event.offsetX);
        this.scroll.emit(event);
        this.cd.detectChanges();
    };
    /**
     * The footer triggered a page event.
     */
    DatatableComponent.prototype.onFooterPage = function (event) {
        this.offset = event.page - 1;
        this.bodyComponent.updateOffsetY(this.offset);
        this.page.emit({
            count: this.count,
            pageSize: this.pageSize,
            limit: this.limit,
            offset: this.offset
        });
        if (this.selectAllRowsOnPage) {
            this.selected = [];
            this.select.emit({
                selected: this.selected
            });
        }
    };
    /**
     * Recalculates the sizes of the page
     */
    DatatableComponent.prototype.calcPageSize = function (val) {
        if (val === void 0) { val = this.rows; }
        // Keep the page size constant even if the row has been expanded.
        // This is because an expanded row is still considered to be a child of
        // the original row.  Hence calculation would use rowHeight only.
        if (this.scrollbarV && this.virtualization) {
            var size = Math.ceil(this.bodyHeight / this.rowHeight);
            return Math.max(size, 0);
        }
        // if limit is passed, we are paging
        if (this.limit !== undefined) {
            return this.limit;
        }
        // otherwise use row length
        if (val) {
            return val.length;
        }
        // other empty :(
        return 0;
    };
    /**
     * Calculates the row count.
     */
    DatatableComponent.prototype.calcRowCount = function (val) {
        if (val === void 0) { val = this.rows; }
        if (!this.externalPaging) {
            if (!val)
                return 0;
            if (this.groupedRows) {
                return this.groupedRows.length;
            }
            else if (this.treeFromRelation != null && this.treeToRelation != null) {
                return this._internalRows.length;
            }
            else {
                return val.length;
            }
        }
        return this.count;
    };
    /**
     * The header triggered a contextmenu event.
     */
    DatatableComponent.prototype.onColumnContextmenu = function (_a) {
        var event = _a.event, column = _a.column;
        this.tableContextmenu.emit({ event: event, type: ContextmenuType.header, content: column });
    };
    /**
     * The body triggered a contextmenu event.
     */
    DatatableComponent.prototype.onRowContextmenu = function (_a) {
        var event = _a.event, row = _a.row;
        this.tableContextmenu.emit({ event: event, type: ContextmenuType.body, content: row });
    };
    /**
     * The header triggered a column resize event.
     */
    DatatableComponent.prototype.onColumnResize = function (_a) {
        var column = _a.column, newValue = _a.newValue;
        /* Safari/iOS 10.2 workaround */
        if (column === undefined) {
            return;
        }
        var idx;
        var cols = this._internalColumns.map(function (c, i) {
            c = __assign({}, c);
            if (c.$$id === column.$$id) {
                idx = i;
                c.width = newValue;
                // set this so we can force the column
                // width distribution to be to this value
                c.$$oldWidth = newValue;
            }
            return c;
        });
        this.recalculateColumns(cols, idx);
        this._internalColumns = cols;
        this.resize.emit({
            column: column,
            newValue: newValue
        });
    };
    /**
     * The header triggered a column re-order event.
     */
    DatatableComponent.prototype.onColumnReorder = function (_a) {
        var column = _a.column, newValue = _a.newValue, prevValue = _a.prevValue;
        var cols = this._internalColumns.map(function (c) {
            return __assign({}, c);
        });
        if (this.swapColumns) {
            var prevCol = cols[newValue];
            cols[newValue] = column;
            cols[prevValue] = prevCol;
        }
        else {
            if (newValue > prevValue) {
                var movedCol = cols[prevValue];
                for (var i = prevValue; i < newValue; i++) {
                    cols[i] = cols[i + 1];
                }
                cols[newValue] = movedCol;
            }
            else {
                var movedCol = cols[prevValue];
                for (var i = prevValue; i > newValue; i--) {
                    cols[i] = cols[i - 1];
                }
                cols[newValue] = movedCol;
            }
        }
        this._internalColumns = cols;
        this.reorder.emit({
            column: column,
            newValue: newValue,
            prevValue: prevValue
        });
    };
    /**
     * The header triggered a column sort event.
     */
    DatatableComponent.prototype.onColumnSort = function (event) {
        // clean selected rows
        if (this.selectAllRowsOnPage) {
            this.selected = [];
            this.select.emit({
                selected: this.selected
            });
        }
        this.sorts = event.sorts;
        // this could be optimized better since it will resort
        // the rows again on the 'push' detection...
        if (this.externalSorting === false) {
            // don't use normal setter so we don't resort
            this.sortInternalRows();
        }
        // auto group by parent on new update
        this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
        // Always go to first page when sorting to see the newly sorted data
        this.offset = 0;
        this.bodyComponent.updateOffsetY(this.offset);
        this.sort.emit(event);
    };
    /**
     * Toggle all row selection
     */
    DatatableComponent.prototype.onHeaderSelect = function (event) {
        var _a, _b;
        if (this.bodyComponent && this.selectAllRowsOnPage) {
            // before we splice, chk if we currently have all selected
            var first = this.bodyComponent.indexes.first;
            var last = this.bodyComponent.indexes.last;
            var allSelected = this.selected.length === last - first;
            // remove all existing either way
            this.selected = [];
            // do the opposite here
            if (!allSelected) {
                (_a = this.selected).push.apply(_a, __spread(this._internalRows.slice(first, last)));
            }
        }
        else {
            // before we splice, chk if we currently have all selected
            var allSelected = this.selected.length === this.rows.length;
            // remove all existing either way
            this.selected = [];
            // do the opposite here
            if (!allSelected) {
                (_b = this.selected).push.apply(_b, __spread(this.rows));
            }
        }
        this.select.emit({
            selected: this.selected
        });
    };
    /**
     * A row was selected from body
     */
    DatatableComponent.prototype.onBodySelect = function (event) {
        this.select.emit(event);
    };
    /**
     * A row was expanded or collapsed for tree
     */
    DatatableComponent.prototype.onTreeAction = function (event) {
        var _this = this;
        var row = event.row;
        // TODO: For duplicated items this will not work
        var rowIndex = this._rows.findIndex(function (r) { return r[_this.treeToRelation] === event.row[_this.treeToRelation]; });
        this.treeAction.emit({ row: row, rowIndex: rowIndex });
    };
    DatatableComponent.prototype.ngOnDestroy = function () {
        this._subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
    };
    /**
     * listen for changes to input bindings of all DataTableColumnDirective and
     * trigger the columnTemplates.changes observable to emit
     */
    DatatableComponent.prototype.listenForColumnInputChanges = function () {
        var _this = this;
        this._subscriptions.push(this.columnChangesService.columnInputChanges$.subscribe(function () {
            if (_this.columnTemplates) {
                _this.columnTemplates.notifyOnChanges();
            }
        }));
    };
    DatatableComponent.prototype.sortInternalRows = function () {
        this._internalRows = sortRows(this._internalRows, this._internalColumns, this.sorts);
    };
    DatatableComponent.ctorParameters = function () { return [
        { type: ScrollbarHelper, decorators: [{ type: SkipSelf }] },
        { type: DimensionsHelper, decorators: [{ type: SkipSelf }] },
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: KeyValueDiffers },
        { type: ColumnChangesService },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: ['configuration',] }] }
    ]; };
    __decorate([
        Input()
    ], DatatableComponent.prototype, "targetMarkerTemplate", void 0);
    __decorate([
        Input()
    ], DatatableComponent.prototype, "rows", null);
    __decorate([
        Input()
    ], DatatableComponent.prototype, "groupRowsBy", null);
    __decorate([
        Input()
    ], DatatableComponent.prototype, "groupedRows", void 0);
    __decorate([
        Input()
    ], DatatableComponent.prototype, "columns", null);
    __decorate([
        Input()
    ], DatatableComponent.prototype, "selected", void 0);
    __decorate([
        Input()
    ], DatatableComponent.prototype, "scrollbarV", void 0);
    __decorate([
        Input()
    ], DatatableComponent.prototype, "scrollbarH", void 0);
    __decorate([
        Input()
    ], DatatableComponent.prototype, "rowHeight", void 0);
    __decorate([
        Input()
    ], DatatableComponent.prototype, "columnMode", void 0);
    __decorate([
        Input()
    ], DatatableComponent.prototype, "headerHeight", void 0);
    __decorate([
        Input()
    ], DatatableComponent.prototype, "footerHeight", void 0);
    __decorate([
        Input()
    ], DatatableComponent.prototype, "externalPaging", void 0);
    __decorate([
        Input()
    ], DatatableComponent.prototype, "externalSorting", void 0);
    __decorate([
        Input()
    ], DatatableComponent.prototype, "limit", null);
    __decorate([
        Input()
    ], DatatableComponent.prototype, "count", null);
    __decorate([
        Input()
    ], DatatableComponent.prototype, "offset", null);
    __decorate([
        Input()
    ], DatatableComponent.prototype, "loadingIndicator", void 0);
    __decorate([
        Input()
    ], DatatableComponent.prototype, "selectionType", void 0);
    __decorate([
        Input()
    ], DatatableComponent.prototype, "reorderable", void 0);
    __decorate([
        Input()
    ], DatatableComponent.prototype, "swapColumns", void 0);
    __decorate([
        Input()
    ], DatatableComponent.prototype, "sortType", void 0);
    __decorate([
        Input()
    ], DatatableComponent.prototype, "sorts", void 0);
    __decorate([
        Input()
    ], DatatableComponent.prototype, "cssClasses", void 0);
    __decorate([
        Input()
    ], DatatableComponent.prototype, "messages", void 0);
    __decorate([
        Input()
    ], DatatableComponent.prototype, "rowClass", void 0);
    __decorate([
        Input()
    ], DatatableComponent.prototype, "selectCheck", void 0);
    __decorate([
        Input()
    ], DatatableComponent.prototype, "displayCheck", void 0);
    __decorate([
        Input()
    ], DatatableComponent.prototype, "groupExpansionDefault", void 0);
    __decorate([
        Input()
    ], DatatableComponent.prototype, "trackByProp", void 0);
    __decorate([
        Input()
    ], DatatableComponent.prototype, "selectAllRowsOnPage", void 0);
    __decorate([
        Input()
    ], DatatableComponent.prototype, "virtualization", void 0);
    __decorate([
        Input()
    ], DatatableComponent.prototype, "treeFromRelation", void 0);
    __decorate([
        Input()
    ], DatatableComponent.prototype, "treeToRelation", void 0);
    __decorate([
        Input()
    ], DatatableComponent.prototype, "summaryRow", void 0);
    __decorate([
        Input()
    ], DatatableComponent.prototype, "summaryHeight", void 0);
    __decorate([
        Input()
    ], DatatableComponent.prototype, "summaryPosition", void 0);
    __decorate([
        Output()
    ], DatatableComponent.prototype, "scroll", void 0);
    __decorate([
        Output()
    ], DatatableComponent.prototype, "activate", void 0);
    __decorate([
        Output()
    ], DatatableComponent.prototype, "select", void 0);
    __decorate([
        Output()
    ], DatatableComponent.prototype, "sort", void 0);
    __decorate([
        Output()
    ], DatatableComponent.prototype, "page", void 0);
    __decorate([
        Output()
    ], DatatableComponent.prototype, "reorder", void 0);
    __decorate([
        Output()
    ], DatatableComponent.prototype, "resize", void 0);
    __decorate([
        Output()
    ], DatatableComponent.prototype, "tableContextmenu", void 0);
    __decorate([
        Output()
    ], DatatableComponent.prototype, "treeAction", void 0);
    __decorate([
        HostBinding('class.fixed-header')
    ], DatatableComponent.prototype, "isFixedHeader", null);
    __decorate([
        HostBinding('class.fixed-row')
    ], DatatableComponent.prototype, "isFixedRow", null);
    __decorate([
        HostBinding('class.scroll-vertical')
    ], DatatableComponent.prototype, "isVertScroll", null);
    __decorate([
        HostBinding('class.virtualized')
    ], DatatableComponent.prototype, "isVirtualized", null);
    __decorate([
        HostBinding('class.scroll-horz')
    ], DatatableComponent.prototype, "isHorScroll", null);
    __decorate([
        HostBinding('class.selectable')
    ], DatatableComponent.prototype, "isSelectable", null);
    __decorate([
        HostBinding('class.checkbox-selection')
    ], DatatableComponent.prototype, "isCheckboxSelection", null);
    __decorate([
        HostBinding('class.cell-selection')
    ], DatatableComponent.prototype, "isCellSelection", null);
    __decorate([
        HostBinding('class.single-selection')
    ], DatatableComponent.prototype, "isSingleSelection", null);
    __decorate([
        HostBinding('class.multi-selection')
    ], DatatableComponent.prototype, "isMultiSelection", null);
    __decorate([
        HostBinding('class.multi-click-selection')
    ], DatatableComponent.prototype, "isMultiClickSelection", null);
    __decorate([
        ContentChildren(DataTableColumnDirective)
    ], DatatableComponent.prototype, "columnTemplates", null);
    __decorate([
        ContentChild(DatatableRowDetailDirective)
    ], DatatableComponent.prototype, "rowDetail", void 0);
    __decorate([
        ContentChild(DatatableGroupHeaderDirective)
    ], DatatableComponent.prototype, "groupHeader", void 0);
    __decorate([
        ContentChild(DatatableFooterDirective)
    ], DatatableComponent.prototype, "footer", void 0);
    __decorate([
        ViewChild(DataTableBodyComponent)
    ], DatatableComponent.prototype, "bodyComponent", void 0);
    __decorate([
        ViewChild(DataTableHeaderComponent)
    ], DatatableComponent.prototype, "headerComponent", void 0);
    __decorate([
        Input()
    ], DatatableComponent.prototype, "rowIdentity", void 0);
    __decorate([
        HostListener('window:resize'),
        throttleable(5)
    ], DatatableComponent.prototype, "onWindowResize", null);
    DatatableComponent = __decorate([ __param(0, SkipSelf()),
        __param(1, SkipSelf()),
        __param(6, Optional()), __param(6, Inject('configuration'))
    ], DatatableComponent);
DatatableComponent.ɵfac = function DatatableComponent_Factory(t) { return new (t || DatatableComponent)(ɵngcc0.ɵɵdirectiveInject(ScrollbarHelper, 4), ɵngcc0.ɵɵdirectiveInject(DimensionsHelper, 4), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.KeyValueDiffers), ɵngcc0.ɵɵdirectiveInject(ColumnChangesService), ɵngcc0.ɵɵdirectiveInject('configuration', 8)); };
DatatableComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DatatableComponent, selectors: [["ngx-datatable"]], contentQueries: function DatatableComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, DatatableRowDetailDirective, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, DatatableGroupHeaderDirective, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, DatatableFooterDirective, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, DataTableColumnDirective, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.rowDetail = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.groupHeader = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.footer = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.columnTemplates = _t);
    } }, viewQuery: function DatatableComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(DataTableBodyComponent, true);
        ɵngcc0.ɵɵviewQuery(DataTableHeaderComponent, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.bodyComponent = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.headerComponent = _t.first);
    } }, hostAttrs: [1, "ngx-datatable"], hostVars: 22, hostBindings: function DatatableComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("resize", function DatatableComponent_resize_HostBindingHandler() { return ctx.onWindowResize(); }, false, ɵngcc0.ɵɵresolveWindow);
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("fixed-header", ctx.isFixedHeader)("fixed-row", ctx.isFixedRow)("scroll-vertical", ctx.isVertScroll)("virtualized", ctx.isVirtualized)("scroll-horz", ctx.isHorScroll)("selectable", ctx.isSelectable)("checkbox-selection", ctx.isCheckboxSelection)("cell-selection", ctx.isCellSelection)("single-selection", ctx.isSingleSelection)("multi-selection", ctx.isMultiSelection)("multi-click-selection", ctx.isMultiClickSelection);
    } }, inputs: { selected: "selected", scrollbarV: "scrollbarV", scrollbarH: "scrollbarH", rowHeight: "rowHeight", columnMode: "columnMode", headerHeight: "headerHeight", footerHeight: "footerHeight", externalPaging: "externalPaging", externalSorting: "externalSorting", loadingIndicator: "loadingIndicator", reorderable: "reorderable", swapColumns: "swapColumns", sortType: "sortType", sorts: "sorts", cssClasses: "cssClasses", messages: "messages", groupExpansionDefault: "groupExpansionDefault", selectAllRowsOnPage: "selectAllRowsOnPage", virtualization: "virtualization", summaryRow: "summaryRow", summaryHeight: "summaryHeight", summaryPosition: "summaryPosition", rowIdentity: "rowIdentity", rows: "rows", groupRowsBy: "groupRowsBy", columns: "columns", limit: "limit", count: "count", offset: "offset", targetMarkerTemplate: "targetMarkerTemplate", groupedRows: "groupedRows", selectionType: "selectionType", rowClass: "rowClass", selectCheck: "selectCheck", displayCheck: "displayCheck", trackByProp: "trackByProp", treeFromRelation: "treeFromRelation", treeToRelation: "treeToRelation" }, outputs: { scroll: "scroll", activate: "activate", select: "select", sort: "sort", page: "page", reorder: "reorder", resize: "resize", tableContextmenu: "tableContextmenu", treeAction: "treeAction" }, decls: 5, vars: 34, consts: [["visibilityObserver", "", 3, "visible"], [3, "sorts", "sortType", "scrollbarH", "innerWidth", "offsetX", "dealsWithGroup", "columns", "headerHeight", "reorderable", "targetMarkerTemplate", "sortAscendingIcon", "sortDescendingIcon", "allRowsSelected", "selectionType", "sort", "resize", "reorder", "select", "columnContextmenu", 4, "ngIf"], [3, "groupRowsBy", "groupedRows", "rows", "groupExpansionDefault", "scrollbarV", "scrollbarH", "virtualization", "loadingIndicator", "externalPaging", "rowHeight", "rowCount", "offset", "trackByProp", "columns", "pageSize", "offsetX", "rowDetail", "groupHeader", "selected", "innerWidth", "bodyHeight", "selectionType", "emptyMessage", "rowIdentity", "rowClass", "selectCheck", "displayCheck", "summaryRow", "summaryHeight", "summaryPosition", "page", "activate", "rowContextmenu", "select", "scroll", "treeAction"], [3, "rowCount", "pageSize", "offset", "footerHeight", "footerTemplate", "totalMessage", "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "selectedCount", "selectedMessage", "pagerNextIcon", "page", 4, "ngIf"], [3, "sorts", "sortType", "scrollbarH", "innerWidth", "offsetX", "dealsWithGroup", "columns", "headerHeight", "reorderable", "targetMarkerTemplate", "sortAscendingIcon", "sortDescendingIcon", "allRowsSelected", "selectionType", "sort", "resize", "reorder", "select", "columnContextmenu"], [3, "rowCount", "pageSize", "offset", "footerHeight", "footerTemplate", "totalMessage", "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "selectedCount", "selectedMessage", "pagerNextIcon", "page"]], template: function DatatableComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("visible", function DatatableComponent_Template_div_visible_0_listener() { return ctx.recalculate(); });
        ɵngcc0.ɵɵtemplate(1, DatatableComponent_datatable_header_1_Template, 2, 16, "datatable-header", 1);
        ɵngcc0.ɵɵelementStart(2, "datatable-body", 2);
        ɵngcc0.ɵɵlistener("page", function DatatableComponent_Template_datatable_body_page_2_listener($event) { return ctx.onBodyPage($event); })("activate", function DatatableComponent_Template_datatable_body_activate_2_listener($event) { return ctx.activate.emit($event); })("rowContextmenu", function DatatableComponent_Template_datatable_body_rowContextmenu_2_listener($event) { return ctx.onRowContextmenu($event); })("select", function DatatableComponent_Template_datatable_body_select_2_listener($event) { return ctx.onBodySelect($event); })("scroll", function DatatableComponent_Template_datatable_body_scroll_2_listener($event) { return ctx.onBodyScroll($event); })("treeAction", function DatatableComponent_Template_datatable_body_treeAction_2_listener($event) { return ctx.onTreeAction($event); });
        ɵngcc0.ɵɵpipe(3, "async");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(4, DatatableComponent_datatable_footer_4_Template, 1, 12, "datatable-footer", 3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.headerHeight);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("groupRowsBy", ctx.groupRowsBy)("groupedRows", ctx.groupedRows)("rows", ctx._internalRows)("groupExpansionDefault", ctx.groupExpansionDefault)("scrollbarV", ctx.scrollbarV)("scrollbarH", ctx.scrollbarH)("virtualization", ctx.virtualization)("loadingIndicator", ctx.loadingIndicator)("externalPaging", ctx.externalPaging)("rowHeight", ctx.rowHeight)("rowCount", ctx.rowCount)("offset", ctx.offset)("trackByProp", ctx.trackByProp)("columns", ctx._internalColumns)("pageSize", ctx.pageSize)("offsetX", ɵngcc0.ɵɵpipeBind1(3, 32, ctx._offsetX))("rowDetail", ctx.rowDetail)("groupHeader", ctx.groupHeader)("selected", ctx.selected)("innerWidth", ctx._innerWidth)("bodyHeight", ctx.bodyHeight)("selectionType", ctx.selectionType)("emptyMessage", ctx.messages.emptyMessage)("rowIdentity", ctx.rowIdentity)("rowClass", ctx.rowClass)("selectCheck", ctx.selectCheck)("displayCheck", ctx.displayCheck)("summaryRow", ctx.summaryRow)("summaryHeight", ctx.summaryHeight)("summaryPosition", ctx.summaryPosition);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.footerHeight);
    } }, directives: [ɵngcc1.VisibilityDirective, ɵngcc2.NgIf, ɵngcc3.DataTableBodyComponent, ɵngcc4.DataTableHeaderComponent, ɵngcc5.DataTableFooterComponent], pipes: [ɵngcc2.AsyncPipe], styles: [".ngx-datatable{display:block;overflow:hidden;justify-content:center;position:relative;transform:translate3d(0,0,0)}.ngx-datatable [hidden]{display:none!important}.ngx-datatable *,.ngx-datatable :after,.ngx-datatable :before{box-sizing:border-box}.ngx-datatable.scroll-vertical .datatable-body{overflow-y:auto}.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper{position:absolute}.ngx-datatable.scroll-horz .datatable-body{overflow-x:auto;-webkit-overflow-scrolling:touch}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner{white-space:nowrap}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ngx-datatable.fixed-row .datatable-scroll,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row{white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ngx-datatable .datatable-body-row,.ngx-datatable .datatable-header-inner,.ngx-datatable .datatable-row-center{display:flex;flex-direction:row;-o-flex-flow:row;flex-flow:row}.ngx-datatable .datatable-body-cell,.ngx-datatable .datatable-header-cell{overflow-x:hidden;vertical-align:top;display:inline-block;line-height:1.625}.ngx-datatable .datatable-body-cell:focus,.ngx-datatable .datatable-header-cell:focus{outline:0}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{z-index:9}.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-row-group,.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{position:relative}.ngx-datatable .datatable-header{display:block;overflow:hidden}.ngx-datatable .datatable-header .datatable-header-inner{align-items:stretch;-webkit-align-items:stretch}.ngx-datatable .datatable-header .datatable-header-cell{position:relative;display:inline-block}.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper{cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper{cursor:move}.ngx-datatable .datatable-header .datatable-header-cell .sort-btn{line-height:100%;vertical-align:middle;display:inline-block;cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable{display:inline-block;position:absolute;right:0;top:0;bottom:0;width:5px;padding:0 4px;visibility:hidden}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle{cursor:ew-resize}.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable{visibility:visible}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker{position:absolute;top:0;bottom:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft{right:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight{left:0}.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap{height:inherit}.ngx-datatable .datatable-body{position:relative;z-index:10;display:block}.ngx-datatable .datatable-body .datatable-scroll{display:inline-block}.ngx-datatable .datatable-body .datatable-row-detail{overflow-y:hidden}.ngx-datatable .datatable-body .datatable-row-wrapper{display:flex;flex-direction:column}.ngx-datatable .datatable-body .datatable-body-row{outline:0}.ngx-datatable .datatable-body .datatable-body-row>div{display:flex}.ngx-datatable .datatable-footer{display:block;width:100%;overflow:auto}.ngx-datatable .datatable-footer .datatable-footer-inner{display:flex;align-items:center;width:100%}.ngx-datatable .datatable-footer .selected-count .page-count{flex:1 1 40%}.ngx-datatable .datatable-footer .selected-count .datatable-pager{flex:1 1 60%}.ngx-datatable .datatable-footer .page-count{flex:1 1 20%}.ngx-datatable .datatable-footer .datatable-pager{flex:1 1 80%;text-align:right}.ngx-datatable .datatable-footer .datatable-pager .pager,.ngx-datatable .datatable-footer .datatable-pager .pager li{padding:0;margin:0;display:inline-block;list-style:none}.ngx-datatable .datatable-footer .datatable-pager .pager li,.ngx-datatable .datatable-footer .datatable-pager .pager li a{outline:0}.ngx-datatable .datatable-footer .datatable-pager .pager li a{cursor:pointer;display:inline-block}.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a{cursor:not-allowed}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DatatableComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-datatable',
                template: "<div visibilityObserver (visible)=\"recalculate()\">\n  <datatable-header\n    *ngIf=\"headerHeight\"\n    [sorts]=\"sorts\"\n    [sortType]=\"sortType\"\n    [scrollbarH]=\"scrollbarH\"\n    [innerWidth]=\"_innerWidth\"\n    [offsetX]=\"_offsetX | async\"\n    [dealsWithGroup]=\"groupedRows !== undefined\"\n    [columns]=\"_internalColumns\"\n    [headerHeight]=\"headerHeight\"\n    [reorderable]=\"reorderable\"\n    [targetMarkerTemplate]=\"targetMarkerTemplate\"\n    [sortAscendingIcon]=\"cssClasses.sortAscending\"\n    [sortDescendingIcon]=\"cssClasses.sortDescending\"\n    [allRowsSelected]=\"allRowsSelected\"\n    [selectionType]=\"selectionType\"\n    (sort)=\"onColumnSort($event)\"\n    (resize)=\"onColumnResize($event)\"\n    (reorder)=\"onColumnReorder($event)\"\n    (select)=\"onHeaderSelect($event)\"\n    (columnContextmenu)=\"onColumnContextmenu($event)\"\n  >\n  </datatable-header>\n  <datatable-body\n    [groupRowsBy]=\"groupRowsBy\"\n    [groupedRows]=\"groupedRows\"\n    [rows]=\"_internalRows\"\n    [groupExpansionDefault]=\"groupExpansionDefault\"\n    [scrollbarV]=\"scrollbarV\"\n    [scrollbarH]=\"scrollbarH\"\n    [virtualization]=\"virtualization\"\n    [loadingIndicator]=\"loadingIndicator\"\n    [externalPaging]=\"externalPaging\"\n    [rowHeight]=\"rowHeight\"\n    [rowCount]=\"rowCount\"\n    [offset]=\"offset\"\n    [trackByProp]=\"trackByProp\"\n    [columns]=\"_internalColumns\"\n    [pageSize]=\"pageSize\"\n    [offsetX]=\"_offsetX | async\"\n    [rowDetail]=\"rowDetail\"\n    [groupHeader]=\"groupHeader\"\n    [selected]=\"selected\"\n    [innerWidth]=\"_innerWidth\"\n    [bodyHeight]=\"bodyHeight\"\n    [selectionType]=\"selectionType\"\n    [emptyMessage]=\"messages.emptyMessage\"\n    [rowIdentity]=\"rowIdentity\"\n    [rowClass]=\"rowClass\"\n    [selectCheck]=\"selectCheck\"\n    [displayCheck]=\"displayCheck\"\n    [summaryRow]=\"summaryRow\"\n    [summaryHeight]=\"summaryHeight\"\n    [summaryPosition]=\"summaryPosition\"\n    (page)=\"onBodyPage($event)\"\n    (activate)=\"activate.emit($event)\"\n    (rowContextmenu)=\"onRowContextmenu($event)\"\n    (select)=\"onBodySelect($event)\"\n    (scroll)=\"onBodyScroll($event)\"\n    (treeAction)=\"onTreeAction($event)\"\n  >\n  </datatable-body>\n  <datatable-footer\n    *ngIf=\"footerHeight\"\n    [rowCount]=\"rowCount\"\n    [pageSize]=\"pageSize\"\n    [offset]=\"offset\"\n    [footerHeight]=\"footerHeight\"\n    [footerTemplate]=\"footer\"\n    [totalMessage]=\"messages.totalMessage\"\n    [pagerLeftArrowIcon]=\"cssClasses.pagerLeftArrow\"\n    [pagerRightArrowIcon]=\"cssClasses.pagerRightArrow\"\n    [pagerPreviousIcon]=\"cssClasses.pagerPrevious\"\n    [selectedCount]=\"selected.length\"\n    [selectedMessage]=\"!!selectionType && messages.selectedMessage\"\n    [pagerNextIcon]=\"cssClasses.pagerNext\"\n    (page)=\"onFooterPage($event)\"\n  >\n  </datatable-footer>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    class: 'ngx-datatable'
                },
                styles: [".ngx-datatable{display:block;overflow:hidden;justify-content:center;position:relative;transform:translate3d(0,0,0)}.ngx-datatable [hidden]{display:none!important}.ngx-datatable *,.ngx-datatable :after,.ngx-datatable :before{box-sizing:border-box}.ngx-datatable.scroll-vertical .datatable-body{overflow-y:auto}.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper{position:absolute}.ngx-datatable.scroll-horz .datatable-body{overflow-x:auto;-webkit-overflow-scrolling:touch}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner{white-space:nowrap}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ngx-datatable.fixed-row .datatable-scroll,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row{white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ngx-datatable .datatable-body-row,.ngx-datatable .datatable-header-inner,.ngx-datatable .datatable-row-center{display:flex;flex-direction:row;-o-flex-flow:row;flex-flow:row}.ngx-datatable .datatable-body-cell,.ngx-datatable .datatable-header-cell{overflow-x:hidden;vertical-align:top;display:inline-block;line-height:1.625}.ngx-datatable .datatable-body-cell:focus,.ngx-datatable .datatable-header-cell:focus{outline:0}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{z-index:9}.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-row-group,.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{position:relative}.ngx-datatable .datatable-header{display:block;overflow:hidden}.ngx-datatable .datatable-header .datatable-header-inner{align-items:stretch;-webkit-align-items:stretch}.ngx-datatable .datatable-header .datatable-header-cell{position:relative;display:inline-block}.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper{cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper{cursor:move}.ngx-datatable .datatable-header .datatable-header-cell .sort-btn{line-height:100%;vertical-align:middle;display:inline-block;cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable{display:inline-block;position:absolute;right:0;top:0;bottom:0;width:5px;padding:0 4px;visibility:hidden}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle{cursor:ew-resize}.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable{visibility:visible}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker{position:absolute;top:0;bottom:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft{right:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight{left:0}.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap{height:inherit}.ngx-datatable .datatable-body{position:relative;z-index:10;display:block}.ngx-datatable .datatable-body .datatable-scroll{display:inline-block}.ngx-datatable .datatable-body .datatable-row-detail{overflow-y:hidden}.ngx-datatable .datatable-body .datatable-row-wrapper{display:flex;flex-direction:column}.ngx-datatable .datatable-body .datatable-body-row{outline:0}.ngx-datatable .datatable-body .datatable-body-row>div{display:flex}.ngx-datatable .datatable-footer{display:block;width:100%;overflow:auto}.ngx-datatable .datatable-footer .datatable-footer-inner{display:flex;align-items:center;width:100%}.ngx-datatable .datatable-footer .selected-count .page-count{flex:1 1 40%}.ngx-datatable .datatable-footer .selected-count .datatable-pager{flex:1 1 60%}.ngx-datatable .datatable-footer .page-count{flex:1 1 20%}.ngx-datatable .datatable-footer .datatable-pager{flex:1 1 80%;text-align:right}.ngx-datatable .datatable-footer .datatable-pager .pager,.ngx-datatable .datatable-footer .datatable-pager .pager li{padding:0;margin:0;display:inline-block;list-style:none}.ngx-datatable .datatable-footer .datatable-pager .pager li,.ngx-datatable .datatable-footer .datatable-pager .pager li a{outline:0}.ngx-datatable .datatable-footer .datatable-pager .pager li a{cursor:pointer;display:inline-block}.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a{cursor:not-allowed}"]
            }]
    }], function () { return [{ type: ScrollbarHelper, decorators: [{
                type: SkipSelf
            }] }, { type: DimensionsHelper, decorators: [{
                type: SkipSelf
            }] }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.KeyValueDiffers }, { type: ColumnChangesService }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: ['configuration']
            }] }]; }, { selected: [{
            type: Input
        }], scrollbarV: [{
            type: Input
        }], scrollbarH: [{
            type: Input
        }], rowHeight: [{
            type: Input
        }], columnMode: [{
            type: Input
        }], headerHeight: [{
            type: Input
        }], footerHeight: [{
            type: Input
        }], externalPaging: [{
            type: Input
        }], externalSorting: [{
            type: Input
        }], loadingIndicator: [{
            type: Input
        }], reorderable: [{
            type: Input
        }], swapColumns: [{
            type: Input
        }], sortType: [{
            type: Input
        }], sorts: [{
            type: Input
        }], cssClasses: [{
            type: Input
        }], messages: [{
            type: Input
        }], groupExpansionDefault: [{
            type: Input
        }], selectAllRowsOnPage: [{
            type: Input
        }], virtualization: [{
            type: Input
        }], summaryRow: [{
            type: Input
        }], summaryHeight: [{
            type: Input
        }], summaryPosition: [{
            type: Input
        }], scroll: [{
            type: Output
        }], activate: [{
            type: Output
        }], select: [{
            type: Output
        }], sort: [{
            type: Output
        }], page: [{
            type: Output
        }], reorder: [{
            type: Output
        }], resize: [{
            type: Output
        }], tableContextmenu: [{
            type: Output
        }], treeAction: [{
            type: Output
        }], rowIdentity: [{
            type: Input
        }], rows: [{
            type: Input
        }], groupRowsBy: [{
            type: Input
        }], columns: [{
            type: Input
        }], limit: [{
            type: Input
        }], count: [{
            type: Input
        }], offset: [{
            type: Input
        }], isFixedHeader: [{
            type: HostBinding,
            args: ['class.fixed-header']
        }], isFixedRow: [{
            type: HostBinding,
            args: ['class.fixed-row']
        }], isVertScroll: [{
            type: HostBinding,
            args: ['class.scroll-vertical']
        }], isVirtualized: [{
            type: HostBinding,
            args: ['class.virtualized']
        }], isHorScroll: [{
            type: HostBinding,
            args: ['class.scroll-horz']
        }], isSelectable: [{
            type: HostBinding,
            args: ['class.selectable']
        }], isCheckboxSelection: [{
            type: HostBinding,
            args: ['class.checkbox-selection']
        }], isCellSelection: [{
            type: HostBinding,
            args: ['class.cell-selection']
        }], isSingleSelection: [{
            type: HostBinding,
            args: ['class.single-selection']
        }], isMultiSelection: [{
            type: HostBinding,
            args: ['class.multi-selection']
        }], isMultiClickSelection: [{
            type: HostBinding,
            args: ['class.multi-click-selection']
        }], columnTemplates: [{
            type: ContentChildren,
            args: [DataTableColumnDirective]
        }], onWindowResize: [{
            type: HostListener,
            args: ['window:resize']
        }], targetMarkerTemplate: [{
            type: Input
        }], groupedRows: [{
            type: Input
        }], selectionType: [{
            type: Input
        }], rowClass: [{
            type: Input
        }], selectCheck: [{
            type: Input
        }], displayCheck: [{
            type: Input
        }], trackByProp: [{
            type: Input
        }], treeFromRelation: [{
            type: Input
        }], treeToRelation: [{
            type: Input
        }], rowDetail: [{
            type: ContentChild,
            args: [DatatableRowDetailDirective]
        }], groupHeader: [{
            type: ContentChild,
            args: [DatatableGroupHeaderDirective]
        }], footer: [{
            type: ContentChild,
            args: [DatatableFooterDirective]
        }], bodyComponent: [{
            type: ViewChild,
            args: [DataTableBodyComponent]
        }], headerComponent: [{
            type: ViewChild,
            args: [DataTableHeaderComponent]
        }] }); })();
    return DatatableComponent;
}());
export { DatatableComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2xpYi9jb21wb25lbnRzL2RhdGF0YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixVQUFVLEVBQ1YsWUFBWSxFQUNaLFNBQVMsRUFDVCxZQUFZLEVBQ1osZUFBZSxFQUNmLE1BQU0sRUFDTixTQUFTLEVBQ1QsYUFBYSxFQUNiLFdBQVcsRUFDWCxZQUFZLEVBQ1osT0FBTyxFQUNQLGVBQWUsRUFDZixjQUFjLEVBQ2QsaUJBQWlCLEVBQ2pCLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsUUFBUSxFQUNSLFFBQVEsRUFDUixNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFbkYsT0FBTyxFQUFFLGVBQWUsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFFckQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQy9FLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQTJrQ0Y7QUFBQyxJQURELHlCQUFDO0FBQ0EsQ0FEQSxBQXprQ0QsSUF5a0NDO0FBQ0QsU0Exa0NhLGtCQUFrQjtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIFZpZXdDaGlsZCxcbiAgSG9zdExpc3RlbmVyLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIE9uSW5pdCxcbiAgUXVlcnlMaXN0LFxuICBBZnRlclZpZXdJbml0LFxuICBIb3N0QmluZGluZyxcbiAgQ29udGVudENoaWxkLFxuICBEb0NoZWNrLFxuICBLZXlWYWx1ZURpZmZlcnMsXG4gIEtleVZhbHVlRGlmZmVyLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBTa2lwU2VsZixcbiAgT3B0aW9uYWwsXG4gIEluamVjdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGF0YXRhYmxlR3JvdXBIZWFkZXJEaXJlY3RpdmUgfSBmcm9tICcuL2JvZHkvYm9keS1ncm91cC1oZWFkZXIuZGlyZWN0aXZlJztcblxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElOZ3hEYXRhdGFibGVDb25maWcgfSBmcm9tICcuLi9uZ3gtZGF0YXRhYmxlLm1vZHVsZSc7XG5pbXBvcnQgeyBncm91cFJvd3NCeVBhcmVudHMsIG9wdGlvbmFsR2V0dGVyRm9yUHJvcCB9IGZyb20gJy4uL3V0aWxzL3RyZWUnO1xuaW1wb3J0IHsgVGFibGVDb2x1bW4gfSBmcm9tICcuLi90eXBlcy90YWJsZS1jb2x1bW4udHlwZSc7XG5pbXBvcnQgeyBzZXRDb2x1bW5EZWZhdWx0cywgdHJhbnNsYXRlVGVtcGxhdGVzIH0gZnJvbSAnLi4vdXRpbHMvY29sdW1uLWhlbHBlcic7XG5pbXBvcnQgeyBDb2x1bW5Nb2RlIH0gZnJvbSAnLi4vdHlwZXMvY29sdW1uLW1vZGUudHlwZSc7XG5pbXBvcnQgeyBTZWxlY3Rpb25UeXBlIH0gZnJvbSAnLi4vdHlwZXMvc2VsZWN0aW9uLnR5cGUnO1xuaW1wb3J0IHsgU29ydFR5cGUgfSBmcm9tICcuLi90eXBlcy9zb3J0LnR5cGUnO1xuaW1wb3J0IHsgQ29udGV4dG1lbnVUeXBlIH0gZnJvbSAnLi4vdHlwZXMvY29udGV4dG1lbnUudHlwZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUgfSBmcm9tICcuL2NvbHVtbnMvY29sdW1uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEYXRhdGFibGVSb3dEZXRhaWxEaXJlY3RpdmUgfSBmcm9tICcuL3Jvdy1kZXRhaWwvcm93LWRldGFpbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRGF0YXRhYmxlRm9vdGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9mb290ZXIvZm9vdGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVCb2R5Q29tcG9uZW50IH0gZnJvbSAnLi9ib2R5L2JvZHkuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFUYWJsZUhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2Nyb2xsYmFySGVscGVyIH0gZnJvbSAnLi4vc2VydmljZXMvc2Nyb2xsYmFyLWhlbHBlci5zZXJ2aWNlJztcbmltcG9ydCB7IENvbHVtbkNoYW5nZXNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY29sdW1uLWNoYW5nZXMuc2VydmljZSc7XG5pbXBvcnQgeyBEaW1lbnNpb25zSGVscGVyIH0gZnJvbSAnLi4vc2VydmljZXMvZGltZW5zaW9ucy1oZWxwZXIuc2VydmljZSc7XG5pbXBvcnQgeyB0aHJvdHRsZWFibGUgfSBmcm9tICcuLi91dGlscy90aHJvdHRsZSc7XG5pbXBvcnQgeyBmb3JjZUZpbGxDb2x1bW5XaWR0aHMsIGFkanVzdENvbHVtbldpZHRocyB9IGZyb20gJy4uL3V0aWxzL21hdGgnO1xuaW1wb3J0IHsgc29ydFJvd3MgfSBmcm9tICcuLi91dGlscy9zb3J0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWRhdGF0YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0YXRhYmxlLmNvbXBvbmVudC5zY3NzJ10sXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ25neC1kYXRhdGFibGUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgRGF0YXRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBEb0NoZWNrLCBBZnRlclZpZXdJbml0IHtcbiAgLyoqXG4gICAqIFRlbXBsYXRlIGZvciB0aGUgdGFyZ2V0IG1hcmtlciBvZiBkcmFnIHRhcmdldCBjb2x1bW5zLlxuICAgKi9cbiAgQElucHV0KCkgdGFyZ2V0TWFya2VyVGVtcGxhdGU6IGFueTtcblxuICAvKipcbiAgICogUm93cyB0aGF0IGFyZSBkaXNwbGF5ZWQgaW4gdGhlIHRhYmxlLlxuICAgKi9cbiAgQElucHV0KCkgc2V0IHJvd3ModmFsOiBhbnkpIHtcbiAgICB0aGlzLl9yb3dzID0gdmFsO1xuXG4gICAgaWYgKHZhbCkge1xuICAgICAgdGhpcy5faW50ZXJuYWxSb3dzID0gWy4uLnZhbF07XG4gICAgfVxuXG4gICAgLy8gYXV0byBzb3J0IG9uIG5ldyB1cGRhdGVzXG4gICAgaWYgKCF0aGlzLmV4dGVybmFsU29ydGluZykge1xuICAgICAgdGhpcy5zb3J0SW50ZXJuYWxSb3dzKCk7XG4gICAgfVxuXG4gICAgLy8gYXV0byBncm91cCBieSBwYXJlbnQgb24gbmV3IHVwZGF0ZVxuICAgIHRoaXMuX2ludGVybmFsUm93cyA9IGdyb3VwUm93c0J5UGFyZW50cyhcbiAgICAgIHRoaXMuX2ludGVybmFsUm93cyxcbiAgICAgIG9wdGlvbmFsR2V0dGVyRm9yUHJvcCh0aGlzLnRyZWVGcm9tUmVsYXRpb24pLFxuICAgICAgb3B0aW9uYWxHZXR0ZXJGb3JQcm9wKHRoaXMudHJlZVRvUmVsYXRpb24pXG4gICAgKTtcblxuICAgIC8vIHJlY2FsY3VsYXRlIHNpemVzL2V0Y1xuICAgIHRoaXMucmVjYWxjdWxhdGUoKTtcblxuICAgIGlmICh0aGlzLl9yb3dzICYmIHRoaXMuX2dyb3VwUm93c0J5KSB7XG4gICAgICAvLyBJZiBhIGNvbHVtbiBoYXMgYmVlbiBzcGVjaWZpZWQgaW4gX2dyb3VwUm93c0J5IGNyZWF0ZWQgYSBuZXcgYXJyYXkgd2l0aCB0aGUgZGF0YSBncm91cGVkIGJ5IHRoYXQgcm93XG4gICAgICB0aGlzLmdyb3VwZWRSb3dzID0gdGhpcy5ncm91cEFycmF5QnkodGhpcy5fcm93cywgdGhpcy5fZ3JvdXBSb3dzQnkpO1xuICAgIH1cblxuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgcm93cy5cbiAgICovXG4gIGdldCByb3dzKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jvd3M7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBhdHRyaWJ1dGUgYWxsb3dzIHRoZSB1c2VyIHRvIHNldCB0aGUgbmFtZSBvZiB0aGUgY29sdW1uIHRvIGdyb3VwIHRoZSBkYXRhIHdpdGhcbiAgICovXG4gIEBJbnB1dCgpIHNldCBncm91cFJvd3NCeSh2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwpIHtcbiAgICAgIHRoaXMuX2dyb3VwUm93c0J5ID0gdmFsO1xuICAgICAgaWYgKHRoaXMuX3Jvd3MgJiYgdGhpcy5fZ3JvdXBSb3dzQnkpIHtcbiAgICAgICAgLy8gY3JldGVzIGEgbmV3IGFycmF5IHdpdGggdGhlIGRhdGEgZ3JvdXBlZFxuICAgICAgICB0aGlzLmdyb3VwZWRSb3dzID0gdGhpcy5ncm91cEFycmF5QnkodGhpcy5fcm93cywgdGhpcy5fZ3JvdXBSb3dzQnkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCBncm91cFJvd3NCeSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3JvdXBSb3dzQnk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBhdHRyaWJ1dGUgYWxsb3dzIHRoZSB1c2VyIHRvIHNldCBhIGdyb3VwZWQgYXJyYXkgaW4gdGhlIGZvbGxvd2luZyBmb3JtYXQ6XG4gICAqICBbXG4gICAqICAgIHtncm91cGlkPTF9IFtcbiAgICogICAgICB7aWQ9MSBuYW1lPVwidGVzdDFcIn0sXG4gICAqICAgICAge2lkPTIgbmFtZT1cInRlc3QyXCJ9LFxuICAgKiAgICAgIHtpZD0zIG5hbWU9XCJ0ZXN0M1wifVxuICAgKiAgICBdfSxcbiAgICogICAge2dyb3VwaWQ9Mj5bXG4gICAqICAgICAge2lkPTQgbmFtZT1cInRlc3Q0XCJ9LFxuICAgKiAgICAgIHtpZD01IG5hbWU9XCJ0ZXN0NVwifSxcbiAgICogICAgICB7aWQ9NiBuYW1lPVwidGVzdDZcIn1cbiAgICogICAgXX1cbiAgICogIF1cbiAgICovXG4gIEBJbnB1dCgpIGdyb3VwZWRSb3dzOiBhbnlbXTtcblxuICAvKipcbiAgICogQ29sdW1ucyB0byBiZSBkaXNwbGF5ZWQuXG4gICAqL1xuICBASW5wdXQoKSBzZXQgY29sdW1ucyh2YWw6IFRhYmxlQ29sdW1uW10pIHtcbiAgICBpZiAodmFsKSB7XG4gICAgICB0aGlzLl9pbnRlcm5hbENvbHVtbnMgPSBbLi4udmFsXTtcbiAgICAgIHNldENvbHVtbkRlZmF1bHRzKHRoaXMuX2ludGVybmFsQ29sdW1ucyk7XG4gICAgICB0aGlzLnJlY2FsY3VsYXRlQ29sdW1ucygpO1xuICAgIH1cblxuICAgIHRoaXMuX2NvbHVtbnMgPSB2YWw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjb2x1bW5zLlxuICAgKi9cbiAgZ2V0IGNvbHVtbnMoKTogVGFibGVDb2x1bW5bXSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbHVtbnM7XG4gIH1cblxuICAvKipcbiAgICogTGlzdCBvZiByb3cgb2JqZWN0cyB0aGF0IHNob3VsZCBiZVxuICAgKiByZXByZXNlbnRlZCBhcyBzZWxlY3RlZCBpbiB0aGUgZ3JpZC5cbiAgICogRGVmYXVsdCB2YWx1ZTogYFtdYFxuICAgKi9cbiAgQElucHV0KCkgc2VsZWN0ZWQ6IGFueVtdID0gW107XG5cbiAgLyoqXG4gICAqIEVuYWJsZSB2ZXJ0aWNhbCBzY3JvbGxiYXJzXG4gICAqL1xuICBASW5wdXQoKSBzY3JvbGxiYXJWOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBob3J6IHNjcm9sbGJhcnNcbiAgICovXG4gIEBJbnB1dCgpIHNjcm9sbGJhckg6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogVGhlIHJvdyBoZWlnaHQ7IHdoaWNoIGlzIG5lY2Vzc2FyeVxuICAgKiB0byBjYWxjdWxhdGUgdGhlIGhlaWdodCBmb3IgdGhlIGxhenkgcmVuZGVyaW5nLlxuICAgKi9cbiAgQElucHV0KCkgcm93SGVpZ2h0OiBudW1iZXIgfCAnYXV0bycgfCAoKHJvdz86IGFueSkgPT4gbnVtYmVyKSA9IDMwO1xuXG4gIC8qKlxuICAgKiBUeXBlIG9mIGNvbHVtbiB3aWR0aCBkaXN0cmlidXRpb24gZm9ybXVsYS5cbiAgICogRXhhbXBsZTogZmxleCwgZm9yY2UsIHN0YW5kYXJkXG4gICAqL1xuICBASW5wdXQoKSBjb2x1bW5Nb2RlOiBDb2x1bW5Nb2RlIHwga2V5b2YgdHlwZW9mIENvbHVtbk1vZGUgPSBDb2x1bW5Nb2RlLnN0YW5kYXJkO1xuXG4gIC8qKlxuICAgKiBUaGUgbWluaW11bSBoZWFkZXIgaGVpZ2h0IGluIHBpeGVscy5cbiAgICogUGFzcyBhIGZhbHNleSBmb3Igbm8gaGVhZGVyXG4gICAqL1xuICBASW5wdXQoKSBoZWFkZXJIZWlnaHQ6IG51bWJlciA9IDMwO1xuXG4gIC8qKlxuICAgKiBUaGUgbWluaW11bSBmb290ZXIgaGVpZ2h0IGluIHBpeGVscy5cbiAgICogUGFzcyBmYWxzZXkgZm9yIG5vIGZvb3RlclxuICAgKi9cbiAgQElucHV0KCkgZm9vdGVySGVpZ2h0OiBudW1iZXIgPSAwO1xuXG4gIC8qKlxuICAgKiBJZiB0aGUgdGFibGUgc2hvdWxkIHVzZSBleHRlcm5hbCBwYWdpbmdcbiAgICogb3RoZXJ3aXNlIGl0cyBhc3N1bWVkIHRoYXQgYWxsIGRhdGEgaXMgcHJlbG9hZGVkLlxuICAgKi9cbiAgQElucHV0KCkgZXh0ZXJuYWxQYWdpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogSWYgdGhlIHRhYmxlIHNob3VsZCB1c2UgZXh0ZXJuYWwgc29ydGluZyBvclxuICAgKiB0aGUgYnVpbHQtaW4gYmFzaWMgc29ydGluZy5cbiAgICovXG4gIEBJbnB1dCgpIGV4dGVybmFsU29ydGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUaGUgcGFnZSBzaXplIHRvIGJlIHNob3duLlxuICAgKiBEZWZhdWx0IHZhbHVlOiBgdW5kZWZpbmVkYFxuICAgKi9cbiAgQElucHV0KCkgc2V0IGxpbWl0KHZhbDogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbGltaXQgPSB2YWw7XG5cbiAgICAvLyByZWNhbGN1bGF0ZSBzaXplcy9ldGNcbiAgICB0aGlzLnJlY2FsY3VsYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgbGltaXQuXG4gICAqL1xuICBnZXQgbGltaXQoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbGltaXQ7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRvdGFsIGNvdW50IG9mIGFsbCByb3dzLlxuICAgKiBEZWZhdWx0IHZhbHVlOiBgMGBcbiAgICovXG4gIEBJbnB1dCgpIHNldCBjb3VudCh2YWw6IG51bWJlcikge1xuICAgIHRoaXMuX2NvdW50ID0gdmFsO1xuXG4gICAgLy8gcmVjYWxjdWxhdGUgc2l6ZXMvZXRjXG4gICAgdGhpcy5yZWNhbGN1bGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGNvdW50LlxuICAgKi9cbiAgZ2V0IGNvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2NvdW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IG9mZnNldCAoIHBhZ2UgLSAxICkgc2hvd24uXG4gICAqIERlZmF1bHQgdmFsdWU6IGAwYFxuICAgKi9cbiAgQElucHV0KCkgc2V0IG9mZnNldCh2YWw6IG51bWJlcikge1xuICAgIHRoaXMuX29mZnNldCA9IHZhbDtcbiAgfVxuICBnZXQgb2Zmc2V0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKHRoaXMuX29mZnNldCwgTWF0aC5jZWlsKHRoaXMucm93Q291bnQgLyB0aGlzLnBhZ2VTaXplKSAtIDEpLCAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IHRoZSBsaW5lYXIgbG9hZGluZyBiYXIuXG4gICAqIERlZmF1bHQgdmFsdWU6IGBmYWxzZWBcbiAgICovXG4gIEBJbnB1dCgpIGxvYWRpbmdJbmRpY2F0b3I6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogVHlwZSBvZiByb3cgc2VsZWN0aW9uLiBPcHRpb25zIGFyZTpcbiAgICpcbiAgICogIC0gYHNpbmdsZWBcbiAgICogIC0gYG11bHRpYFxuICAgKiAgLSBgY2hlY2tib3hgXG4gICAqICAtIGBtdWx0aUNsaWNrYFxuICAgKiAgLSBgY2VsbGBcbiAgICpcbiAgICogRm9yIG5vIHNlbGVjdGlvbiBwYXNzIGEgYGZhbHNleWAuXG4gICAqIERlZmF1bHQgdmFsdWU6IGB1bmRlZmluZWRgXG4gICAqL1xuICBASW5wdXQoKSBzZWxlY3Rpb25UeXBlOiBTZWxlY3Rpb25UeXBlO1xuXG4gIC8qKlxuICAgKiBFbmFibGUvRGlzYWJsZSBhYmlsaXR5IHRvIHJlLW9yZGVyIGNvbHVtbnNcbiAgICogYnkgZHJhZ2dpbmcgdGhlbS5cbiAgICovXG4gIEBJbnB1dCgpIHJlb3JkZXJhYmxlOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogU3dhcCBjb2x1bW5zIG9uIHJlLW9yZGVyIGNvbHVtbnMgb3JcbiAgICogbW92ZSB0aGVtLlxuICAgKi9cbiAgQElucHV0KCkgc3dhcENvbHVtbnM6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBUaGUgdHlwZSBvZiBzb3J0aW5nXG4gICAqL1xuICBASW5wdXQoKSBzb3J0VHlwZTogU29ydFR5cGUgPSBTb3J0VHlwZS5zaW5nbGU7XG5cbiAgLyoqXG4gICAqIEFycmF5IG9mIHNvcnRlZCBjb2x1bW5zIGJ5IHByb3BlcnR5IGFuZCB0eXBlLlxuICAgKiBEZWZhdWx0IHZhbHVlOiBgW11gXG4gICAqL1xuICBASW5wdXQoKSBzb3J0czogYW55W10gPSBbXTtcblxuICAvKipcbiAgICogQ3NzIGNsYXNzIG92ZXJyaWRlc1xuICAgKi9cbiAgQElucHV0KCkgY3NzQ2xhc3NlczogYW55ID0ge1xuICAgIHNvcnRBc2NlbmRpbmc6ICdkYXRhdGFibGUtaWNvbi11cCcsXG4gICAgc29ydERlc2NlbmRpbmc6ICdkYXRhdGFibGUtaWNvbi1kb3duJyxcbiAgICBwYWdlckxlZnRBcnJvdzogJ2RhdGF0YWJsZS1pY29uLWxlZnQnLFxuICAgIHBhZ2VyUmlnaHRBcnJvdzogJ2RhdGF0YWJsZS1pY29uLXJpZ2h0JyxcbiAgICBwYWdlclByZXZpb3VzOiAnZGF0YXRhYmxlLWljb24tcHJldicsXG4gICAgcGFnZXJOZXh0OiAnZGF0YXRhYmxlLWljb24tc2tpcCdcbiAgfTtcblxuICAvKipcbiAgICogTWVzc2FnZSBvdmVycmlkZXMgZm9yIGxvY2FsaXphdGlvblxuICAgKlxuICAgKiBlbXB0eU1lc3NhZ2UgICAgIFtkZWZhdWx0XSA9ICdObyBkYXRhIHRvIGRpc3BsYXknXG4gICAqIHRvdGFsTWVzc2FnZSAgICAgW2RlZmF1bHRdID0gJ3RvdGFsJ1xuICAgKiBzZWxlY3RlZE1lc3NhZ2UgIFtkZWZhdWx0XSA9ICdzZWxlY3RlZCdcbiAgICovXG4gIEBJbnB1dCgpIG1lc3NhZ2VzOiBhbnkgPSB7XG4gICAgLy8gTWVzc2FnZSB0byBzaG93IHdoZW4gYXJyYXkgaXMgcHJlc2VudGVkXG4gICAgLy8gYnV0IGNvbnRhaW5zIG5vIHZhbHVlc1xuICAgIGVtcHR5TWVzc2FnZTogJ05vIGRhdGEgdG8gZGlzcGxheScsXG5cbiAgICAvLyBGb290ZXIgdG90YWwgbWVzc2FnZVxuICAgIHRvdGFsTWVzc2FnZTogJ3RvdGFsJyxcblxuICAgIC8vIEZvb3RlciBzZWxlY3RlZCBtZXNzYWdlXG4gICAgc2VsZWN0ZWRNZXNzYWdlOiAnc2VsZWN0ZWQnXG4gIH07XG5cbiAgLyoqXG4gICAqIFJvdyBzcGVjaWZpYyBjbGFzc2VzLlxuICAgKiBTaW1pbGFyIGltcGxlbWVudGF0aW9uIHRvIG5nQ2xhc3MuXG4gICAqXG4gICAqICBbcm93Q2xhc3NdPVwiJ2ZpcnN0IHNlY29uZCdcIlxuICAgKiAgW3Jvd0NsYXNzXT1cInsgJ2ZpcnN0JzogdHJ1ZSwgJ3NlY29uZCc6IHRydWUsICd0aGlyZCc6IGZhbHNlIH1cIlxuICAgKi9cbiAgQElucHV0KCkgcm93Q2xhc3M6IGFueTtcblxuICAvKipcbiAgICogQSBib29sZWFuL2Z1bmN0aW9uIHlvdSBjYW4gdXNlIHRvIGNoZWNrIHdoZXRoZXIgeW91IHdhbnRcbiAgICogdG8gc2VsZWN0IGEgcGFydGljdWxhciByb3cgYmFzZWQgb24gYSBjcml0ZXJpYS4gRXhhbXBsZTpcbiAgICpcbiAgICogICAgKHNlbGVjdGlvbikgPT4ge1xuICAgKiAgICAgIHJldHVybiBzZWxlY3Rpb24gIT09ICdFdGhlbCBQcmljZSc7XG4gICAqICAgIH1cbiAgICovXG4gIEBJbnB1dCgpIHNlbGVjdENoZWNrOiBhbnk7XG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24geW91IGNhbiB1c2UgdG8gY2hlY2sgd2hldGhlciB5b3Ugd2FudFxuICAgKiB0byBzaG93IHRoZSBjaGVja2JveCBmb3IgYSBwYXJ0aWN1bGFyIHJvdyBiYXNlZCBvbiBhIGNyaXRlcmlhLiBFeGFtcGxlOlxuICAgKlxuICAgKiAgICAocm93LCBjb2x1bW4sIHZhbHVlKSA9PiB7XG4gICAqICAgICAgcmV0dXJuIHJvdy5uYW1lICE9PSAnRXRoZWwgUHJpY2UnO1xuICAgKiAgICB9XG4gICAqL1xuICBASW5wdXQoKSBkaXNwbGF5Q2hlY2s6IChyb3c6IGFueSwgY29sdW1uPzogYW55LCB2YWx1ZT86IGFueSkgPT4gYm9vbGVhbjtcblxuICAvKipcbiAgICogQSBib29sZWFuIHlvdSBjYW4gdXNlIHRvIHNldCB0aGUgZGV0YXVsdCBiZWhhdmlvdXIgb2Ygcm93cyBhbmQgZ3JvdXBzXG4gICAqIHdoZXRoZXIgdGhleSB3aWxsIHN0YXJ0IGV4cGFuZGVkIG9yIG5vdC4gSWYgb21taXRlZCB0aGUgZGVmYXVsdCBpcyBOT1QgZXhwYW5kZWQuXG4gICAqXG4gICAqL1xuICBASW5wdXQoKSBncm91cEV4cGFuc2lvbkRlZmF1bHQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogUHJvcGVydHkgdG8gd2hpY2ggeW91IGNhbiB1c2UgZm9yIGN1c3RvbSB0cmFja2luZyBvZiByb3dzLlxuICAgKiBFeGFtcGxlOiAnbmFtZSdcbiAgICovXG4gIEBJbnB1dCgpIHRyYWNrQnlQcm9wOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFByb3BlcnR5IHRvIHdoaWNoIHlvdSBjYW4gdXNlIGZvciBkZXRlcm1pbmluZyBzZWxlY3QgYWxsXG4gICAqIHJvd3Mgb24gY3VycmVudCBwYWdlIG9yIG5vdC5cbiAgICpcbiAgICogQG1lbWJlck9mIERhdGF0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgc2VsZWN0QWxsUm93c09uUGFnZSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBIGZsYWcgZm9yIHJvdyB2aXJ0dWFsaXphdGlvbiBvbiAvIG9mZlxuICAgKi9cbiAgQElucHV0KCkgdmlydHVhbGl6YXRpb246IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBUcmVlIGZyb20gcmVsYXRpb25cbiAgICovXG4gIEBJbnB1dCgpIHRyZWVGcm9tUmVsYXRpb246IHN0cmluZztcblxuICAvKipcbiAgICogVHJlZSB0byByZWxhdGlvblxuICAgKi9cbiAgQElucHV0KCkgdHJlZVRvUmVsYXRpb246IHN0cmluZztcblxuICAvKipcbiAgICogQSBmbGFnIGZvciBzd2l0Y2hpbmcgc3VtbWFyeSByb3cgb24gLyBvZmZcbiAgICovXG4gIEBJbnB1dCgpIHN1bW1hcnlSb3c6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQSBoZWlnaHQgb2Ygc3VtbWFyeSByb3dcbiAgICovXG4gIEBJbnB1dCgpIHN1bW1hcnlIZWlnaHQ6IG51bWJlciA9IDMwO1xuXG4gIC8qKlxuICAgKiBBIHByb3BlcnR5IGhvbGRzIGEgc3VtbWFyeSByb3cgcG9zaXRpb246IHRvcC9ib3R0b21cbiAgICovXG4gIEBJbnB1dCgpIHN1bW1hcnlQb3NpdGlvbjogc3RyaW5nID0gJ3RvcCc7XG5cbiAgLyoqXG4gICAqIEJvZHkgd2FzIHNjcm9sbGVkIHR5cGljYWxseSBpbiBhIGBzY3JvbGxiYXJWOnRydWVgIHNjZW5hcmlvLlxuICAgKi9cbiAgQE91dHB1dCgpIHNjcm9sbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEEgY2VsbCBvciByb3cgd2FzIGZvY3VzZWQgdmlhIGtleWJvYXJkIG9yIG1vdXNlIGNsaWNrLlxuICAgKi9cbiAgQE91dHB1dCgpIGFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogQSBjZWxsIG9yIHJvdyB3YXMgc2VsZWN0ZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogQ29sdW1uIHNvcnQgd2FzIGludm9rZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgc29ydDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIFRoZSB0YWJsZSB3YXMgcGFnZWQgZWl0aGVyIHRyaWdnZXJlZCBieSB0aGUgcGFnZXIgb3IgdGhlIGJvZHkgc2Nyb2xsLlxuICAgKi9cbiAgQE91dHB1dCgpIHBhZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBDb2x1bW5zIHdlcmUgcmUtb3JkZXJlZC5cbiAgICovXG4gIEBPdXRwdXQoKSByZW9yZGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogQ29sdW1uIHdhcyByZXNpemVkLlxuICAgKi9cbiAgQE91dHB1dCgpIHJlc2l6ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIFRoZSBjb250ZXh0IG1lbnUgd2FzIGludm9rZWQgb24gdGhlIHRhYmxlLlxuICAgKiB0eXBlIGluZGljYXRlcyB3aGV0aGVyIHRoZSBoZWFkZXIgb3IgdGhlIGJvZHkgd2FzIGNsaWNrZWQuXG4gICAqIGNvbnRlbnQgY29udGFpbnMgZWl0aGVyIHRoZSBjb2x1bW4gb3IgdGhlIHJvdyB0aGF0IHdhcyBjbGlja2VkLlxuICAgKi9cbiAgQE91dHB1dCgpIHRhYmxlQ29udGV4dG1lbnUgPSBuZXcgRXZlbnRFbWl0dGVyPHsgZXZlbnQ6IE1vdXNlRXZlbnQ7IHR5cGU6IENvbnRleHRtZW51VHlwZTsgY29udGVudDogYW55IH0+KGZhbHNlKTtcblxuICAvKipcbiAgICogQSByb3cgd2FzIGV4cGFuZGVkIG90IGNvbGxhcHNlZCBmb3IgdHJlZVxuICAgKi9cbiAgQE91dHB1dCgpIHRyZWVBY3Rpb246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBDU1MgY2xhc3MgYXBwbGllZCBpZiB0aGUgaGVhZGVyIGhlaWdodCBpZiBmaXhlZCBoZWlnaHQuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZpeGVkLWhlYWRlcicpXG4gIGdldCBpc0ZpeGVkSGVhZGVyKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGhlYWRlckhlaWdodDogbnVtYmVyIHwgc3RyaW5nID0gdGhpcy5oZWFkZXJIZWlnaHQ7XG4gICAgcmV0dXJuIHR5cGVvZiBoZWFkZXJIZWlnaHQgPT09ICdzdHJpbmcnID8gPHN0cmluZz5oZWFkZXJIZWlnaHQgIT09ICdhdXRvJyA6IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQ1NTIGNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZlxuICAgKiB0aGUgcm93IGhlaWdodHMgYXJlIGZpeGVkIGhlaWdodHMuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZpeGVkLXJvdycpXG4gIGdldCBpc0ZpeGVkUm93KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnJvd0hlaWdodCAhPT0gJ2F1dG8nO1xuICB9XG5cbiAgLyoqXG4gICAqIENTUyBjbGFzcyBhcHBsaWVkIHRvIHJvb3QgZWxlbWVudCBpZlxuICAgKiB2ZXJ0aWNhbCBzY3JvbGxpbmcgaXMgZW5hYmxlZC5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2Nyb2xsLXZlcnRpY2FsJylcbiAgZ2V0IGlzVmVydFNjcm9sbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zY3JvbGxiYXJWO1xuICB9XG5cbiAgLyoqXG4gICAqIENTUyBjbGFzcyBhcHBsaWVkIHRvIHJvb3QgZWxlbWVudCBpZlxuICAgKiB2aXJ0dWFsaXphdGlvbiBpcyBlbmFibGVkLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy52aXJ0dWFsaXplZCcpXG4gIGdldCBpc1ZpcnR1YWxpemVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpcnR1YWxpemF0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIENTUyBjbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnRcbiAgICogaWYgdGhlIGhvcnppb250YWwgc2Nyb2xsaW5nIGlzIGVuYWJsZWQuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNjcm9sbC1ob3J6JylcbiAgZ2V0IGlzSG9yU2Nyb2xsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNjcm9sbGJhckg7XG4gIH1cblxuICAvKipcbiAgICogQ1NTIGNsYXNzIGFwcGxpZWQgdG8gcm9vdCBlbGVtZW50IGlzIHNlbGVjdGFibGUuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbGVjdGFibGUnKVxuICBnZXQgaXNTZWxlY3RhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGlvblR5cGUgIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDU1MgY2xhc3MgYXBwbGllZCB0byByb290IGlzIGNoZWNrYm94IHNlbGVjdGlvbi5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY2hlY2tib3gtc2VsZWN0aW9uJylcbiAgZ2V0IGlzQ2hlY2tib3hTZWxlY3Rpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uVHlwZSA9PT0gU2VsZWN0aW9uVHlwZS5jaGVja2JveDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDU1MgY2xhc3MgYXBwbGllZCB0byByb290IGlmIGNlbGwgc2VsZWN0aW9uLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jZWxsLXNlbGVjdGlvbicpXG4gIGdldCBpc0NlbGxTZWxlY3Rpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uVHlwZSA9PT0gU2VsZWN0aW9uVHlwZS5jZWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENTUyBjbGFzcyBhcHBsaWVkIHRvIHJvb3QgaWYgc2luZ2xlIHNlbGVjdC5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2luZ2xlLXNlbGVjdGlvbicpXG4gIGdldCBpc1NpbmdsZVNlbGVjdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb25UeXBlID09PSBTZWxlY3Rpb25UeXBlLnNpbmdsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDU1MgY2xhc3MgYWRkZWQgdG8gcm9vdCBlbGVtZW50IGlmIG11bGl0IHNlbGVjdFxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tdWx0aS1zZWxlY3Rpb24nKVxuICBnZXQgaXNNdWx0aVNlbGVjdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb25UeXBlID09PSBTZWxlY3Rpb25UeXBlLm11bHRpO1xuICB9XG5cbiAgLyoqXG4gICAqIENTUyBjbGFzcyBhZGRlZCB0byByb290IGVsZW1lbnQgaWYgbXVsaXQgY2xpY2sgc2VsZWN0XG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm11bHRpLWNsaWNrLXNlbGVjdGlvbicpXG4gIGdldCBpc011bHRpQ2xpY2tTZWxlY3Rpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uVHlwZSA9PT0gU2VsZWN0aW9uVHlwZS5tdWx0aUNsaWNrO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbHVtbiB0ZW1wbGF0ZXMgZ2F0aGVyZWQgZnJvbSBgQ29udGVudENoaWxkcmVuYFxuICAgKiBpZiBkZXNjcmliZWQgaW4geW91ciBtYXJrdXAuXG4gICAqL1xuICBAQ29udGVudENoaWxkcmVuKERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSlcbiAgc2V0IGNvbHVtblRlbXBsYXRlcyh2YWw6IFF1ZXJ5TGlzdDxEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmU+KSB7XG4gICAgdGhpcy5fY29sdW1uVGVtcGxhdGVzID0gdmFsO1xuICAgIHRoaXMudHJhbnNsYXRlQ29sdW1ucyh2YWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNvbHVtbiB0ZW1wbGF0ZXMuXG4gICAqL1xuICBnZXQgY29sdW1uVGVtcGxhdGVzKCk6IFF1ZXJ5TGlzdDxEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmU+IHtcbiAgICByZXR1cm4gdGhpcy5fY29sdW1uVGVtcGxhdGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJvdyBEZXRhaWwgdGVtcGxhdGVzIGdhdGhlcmVkIGZyb20gdGhlIENvbnRlbnRDaGlsZFxuICAgKi9cbiAgQENvbnRlbnRDaGlsZChEYXRhdGFibGVSb3dEZXRhaWxEaXJlY3RpdmUpXG4gIHJvd0RldGFpbDogRGF0YXRhYmxlUm93RGV0YWlsRGlyZWN0aXZlO1xuXG4gIC8qKlxuICAgKiBHcm91cCBIZWFkZXIgdGVtcGxhdGVzIGdhdGhlcmVkIGZyb20gdGhlIENvbnRlbnRDaGlsZFxuICAgKi9cbiAgQENvbnRlbnRDaGlsZChEYXRhdGFibGVHcm91cEhlYWRlckRpcmVjdGl2ZSlcbiAgZ3JvdXBIZWFkZXI6IERhdGF0YWJsZUdyb3VwSGVhZGVyRGlyZWN0aXZlO1xuXG4gIC8qKlxuICAgKiBGb290ZXIgdGVtcGxhdGUgZ2F0aGVyZWQgZnJvbSB0aGUgQ29udGVudENoaWxkXG4gICAqL1xuICBAQ29udGVudENoaWxkKERhdGF0YWJsZUZvb3RlckRpcmVjdGl2ZSlcbiAgZm9vdGVyOiBEYXRhdGFibGVGb290ZXJEaXJlY3RpdmU7XG5cbiAgLyoqXG4gICAqIFJlZmVyZW5jZSB0byB0aGUgYm9keSBjb21wb25lbnQgZm9yIG1hbnVhbGx5XG4gICAqIGludm9raW5nIGZ1bmN0aW9ucyBvbiB0aGUgYm9keS5cbiAgICovXG4gIEBWaWV3Q2hpbGQoRGF0YVRhYmxlQm9keUNvbXBvbmVudClcbiAgYm9keUNvbXBvbmVudDogRGF0YVRhYmxlQm9keUNvbXBvbmVudDtcblxuICAvKipcbiAgICogUmVmZXJlbmNlIHRvIHRoZSBoZWFkZXIgY29tcG9uZW50IGZvciBtYW51YWxseVxuICAgKiBpbnZva2luZyBmdW5jdGlvbnMgb24gdGhlIGhlYWRlci5cbiAgICpcbiAgICogQG1lbWJlck9mIERhdGF0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQFZpZXdDaGlsZChEYXRhVGFibGVIZWFkZXJDb21wb25lbnQpXG4gIGhlYWRlckNvbXBvbmVudDogRGF0YVRhYmxlSGVhZGVyQ29tcG9uZW50O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGlmIGFsbCByb3dzIGFyZSBzZWxlY3RlZC5cbiAgICovXG4gIGdldCBhbGxSb3dzU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgbGV0IGFsbFJvd3NTZWxlY3RlZCA9IHRoaXMucm93cyAmJiB0aGlzLnNlbGVjdGVkICYmIHRoaXMuc2VsZWN0ZWQubGVuZ3RoID09PSB0aGlzLnJvd3MubGVuZ3RoO1xuXG4gICAgaWYgKHRoaXMuYm9keUNvbXBvbmVudCAmJiB0aGlzLnNlbGVjdEFsbFJvd3NPblBhZ2UpIHtcbiAgICAgIGNvbnN0IGluZGV4ZXMgPSB0aGlzLmJvZHlDb21wb25lbnQuaW5kZXhlcztcbiAgICAgIGNvbnN0IHJvd3NPblBhZ2UgPSBpbmRleGVzLmxhc3QgLSBpbmRleGVzLmZpcnN0O1xuICAgICAgYWxsUm93c1NlbGVjdGVkID0gdGhpcy5zZWxlY3RlZC5sZW5ndGggPT09IHJvd3NPblBhZ2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWQgJiYgdGhpcy5yb3dzICYmIHRoaXMucm93cy5sZW5ndGggIT09IDAgJiYgYWxsUm93c1NlbGVjdGVkO1xuICB9XG5cbiAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIF9pbm5lcldpZHRoOiBudW1iZXI7XG4gIHBhZ2VTaXplOiBudW1iZXI7XG4gIGJvZHlIZWlnaHQ6IG51bWJlcjtcbiAgcm93Q291bnQ6IG51bWJlciA9IDA7XG4gIHJvd0RpZmZlcjogS2V5VmFsdWVEaWZmZXI8e30sIHt9PjtcblxuICBfb2Zmc2V0WCA9IG5ldyBCZWhhdmlvclN1YmplY3QoMCk7XG4gIF9saW1pdDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBfY291bnQ6IG51bWJlciA9IDA7XG4gIF9vZmZzZXQ6IG51bWJlciA9IDA7XG4gIF9yb3dzOiBhbnlbXTtcbiAgX2dyb3VwUm93c0J5OiBzdHJpbmc7XG4gIF9pbnRlcm5hbFJvd3M6IGFueVtdO1xuICBfaW50ZXJuYWxDb2x1bW5zOiBUYWJsZUNvbHVtbltdO1xuICBfY29sdW1uczogVGFibGVDb2x1bW5bXTtcbiAgX2NvbHVtblRlbXBsYXRlczogUXVlcnlMaXN0PERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZT47XG4gIF9zdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBTa2lwU2VsZigpIHByaXZhdGUgc2Nyb2xsYmFySGVscGVyOiBTY3JvbGxiYXJIZWxwZXIsXG4gICAgQFNraXBTZWxmKCkgcHJpdmF0ZSBkaW1lbnNpb25zSGVscGVyOiBEaW1lbnNpb25zSGVscGVyLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgZGlmZmVyczogS2V5VmFsdWVEaWZmZXJzLFxuICAgIHByaXZhdGUgY29sdW1uQ2hhbmdlc1NlcnZpY2U6IENvbHVtbkNoYW5nZXNTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoJ2NvbmZpZ3VyYXRpb24nKSBwcml2YXRlIGNvbmZpZ3VyYXRpb246IElOZ3hEYXRhdGFibGVDb25maWdcbiAgKSB7XG4gICAgLy8gZ2V0IHJlZiB0byBlbG0gZm9yIG1lYXN1cmluZ1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLnJvd0RpZmZlciA9IGRpZmZlcnMuZmluZCh7fSkuY3JlYXRlKCk7XG5cbiAgICAvLyBhcHBseSBnbG9iYWwgc2V0dGluZ3MgZnJvbSBNb2R1bGUuZm9yUm9vdFxuICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24gJiYgdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VzID0geyAuLi50aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMgfTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTGlmZWN5Y2xlIGhvb2sgdGhhdCBpcyBjYWxsZWQgYWZ0ZXIgZGF0YS1ib3VuZFxuICAgKiBwcm9wZXJ0aWVzIG9mIGEgZGlyZWN0aXZlIGFyZSBpbml0aWFsaXplZC5cbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIG5lZWQgdG8gY2FsbCB0aGlzIGltbWVkaWF0bHkgdG8gc2l6ZVxuICAgIC8vIGlmIHRoZSB0YWJsZSBpcyBoaWRkZW4gdGhlIHZpc2liaWxpdHlcbiAgICAvLyBsaXN0ZW5lciB3aWxsIGludm9rZSB0aGlzIGl0c2VsZiB1cG9uIHNob3dcbiAgICB0aGlzLnJlY2FsY3VsYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogTGlmZWN5Y2xlIGhvb2sgdGhhdCBpcyBjYWxsZWQgYWZ0ZXIgYSBjb21wb25lbnQnc1xuICAgKiB2aWV3IGhhcyBiZWVuIGZ1bGx5IGluaXRpYWxpemVkLlxuICAgKi9cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5leHRlcm5hbFNvcnRpbmcpIHtcbiAgICAgIHRoaXMuc29ydEludGVybmFsUm93cygpO1xuICAgIH1cblxuICAgIC8vIHRoaXMgaGFzIHRvIGJlIGRvbmUgdG8gcHJldmVudCB0aGUgY2hhbmdlIGRldGVjdGlvblxuICAgIC8vIHRyZWUgZnJvbSBmcmVha2luZyBvdXQgYmVjYXVzZSB3ZSBhcmUgcmVhZGp1c3RpbmdcbiAgICBpZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5yZWNhbGN1bGF0ZSgpO1xuXG4gICAgICAvLyBlbWl0IHBhZ2UgZm9yIHZpcnR1YWwgc2VydmVyLXNpZGUga2lja29mZlxuICAgICAgaWYgKHRoaXMuZXh0ZXJuYWxQYWdpbmcgJiYgdGhpcy5zY3JvbGxiYXJWKSB7XG4gICAgICAgIHRoaXMucGFnZS5lbWl0KHtcbiAgICAgICAgICBjb3VudDogdGhpcy5jb3VudCxcbiAgICAgICAgICBwYWdlU2l6ZTogdGhpcy5wYWdlU2l6ZSxcbiAgICAgICAgICBsaW1pdDogdGhpcy5saW1pdCxcbiAgICAgICAgICBvZmZzZXQ6IDBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTGlmZWN5Y2xlIGhvb2sgdGhhdCBpcyBjYWxsZWQgYWZ0ZXIgYSBjb21wb25lbnQnc1xuICAgKiBjb250ZW50IGhhcyBiZWVuIGZ1bGx5IGluaXRpYWxpemVkLlxuICAgKi9cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuY29sdW1uVGVtcGxhdGVzLmNoYW5nZXMuc3Vic2NyaWJlKHYgPT4gdGhpcy50cmFuc2xhdGVDb2x1bW5zKHYpKTtcbiAgICB0aGlzLmxpc3RlbkZvckNvbHVtbklucHV0Q2hhbmdlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgd2lsbCBiZSB1c2VkIHdoZW4gZGlzcGxheWluZyBvciBzZWxlY3Rpbmcgcm93cy5cbiAgICogd2hlbiB0cmFja2luZy9jb21wYXJpbmcgdGhlbSwgd2UnbGwgdXNlIHRoZSB2YWx1ZSBvZiB0aGlzIGZuLFxuICAgKlxuICAgKiAoYGZuKHgpID09PSBmbih5KWAgaW5zdGVhZCBvZiBgeCA9PT0geWApXG4gICAqL1xuICBASW5wdXQoKSByb3dJZGVudGl0eTogKHg6IGFueSkgPT4gYW55ID0gKHg6IGFueSkgPT4ge1xuICAgIGlmICh0aGlzLl9ncm91cFJvd3NCeSkge1xuICAgICAgLy8gZWFjaCBncm91cCBpbiBncm91cGVkUm93cyBhcmUgc3RvcmVkIGFzIHtrZXksIHZhbHVlOiBbcm93c119LFxuICAgICAgLy8gd2hlcmUga2V5IGlzIHRoZSBncm91cFJvd3NCeSBpbmRleFxuICAgICAgcmV0dXJuIHgua2V5O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4geDtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFRyYW5zbGF0ZXMgdGhlIHRlbXBsYXRlcyB0byB0aGUgY29sdW1uIG9iamVjdHNcbiAgICovXG4gIHRyYW5zbGF0ZUNvbHVtbnModmFsOiBhbnkpIHtcbiAgICBpZiAodmFsKSB7XG4gICAgICBjb25zdCBhcnIgPSB2YWwudG9BcnJheSgpO1xuICAgICAgaWYgKGFyci5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5faW50ZXJuYWxDb2x1bW5zID0gdHJhbnNsYXRlVGVtcGxhdGVzKGFycik7XG4gICAgICAgIHNldENvbHVtbkRlZmF1bHRzKHRoaXMuX2ludGVybmFsQ29sdW1ucyk7XG4gICAgICAgIHRoaXMucmVjYWxjdWxhdGVDb2x1bW5zKCk7XG4gICAgICAgIHRoaXMuc29ydEludGVybmFsUm93cygpO1xuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbWFwIHdpdGggdGhlIGRhdGEgZ3JvdXBlZCBieSB0aGUgdXNlciBjaG9pY2Ugb2YgZ3JvdXBpbmcgaW5kZXhcbiAgICpcbiAgICogQHBhcmFtIG9yaWdpbmFsQXJyYXkgdGhlIG9yaWdpbmFsIGFycmF5IHBhc3NlZCB2aWEgcGFyYW1ldGVyXG4gICAqIEBwYXJhbSBncm91cEJ5SW5kZXggIHRoZSBpbmRleCBvZiB0aGUgY29sdW1uIHRvIGdyb3VwIHRoZSBkYXRhIGJ5XG4gICAqL1xuICBncm91cEFycmF5Qnkob3JpZ2luYWxBcnJheTogYW55LCBncm91cEJ5OiBhbnkpIHtcbiAgICAvLyBjcmVhdGUgYSBtYXAgdG8gaG9sZCBncm91cHMgd2l0aCB0aGVpciBjb3JyZXNwb25kaW5nIHJlc3VsdHNcbiAgICBjb25zdCBtYXAgPSBuZXcgTWFwKCk7XG4gICAgbGV0IGk6IG51bWJlciA9IDA7XG5cbiAgICBvcmlnaW5hbEFycmF5LmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gaXRlbVtncm91cEJ5XTtcbiAgICAgIGlmICghbWFwLmhhcyhrZXkpKSB7XG4gICAgICAgIG1hcC5zZXQoa2V5LCBbaXRlbV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWFwLmdldChrZXkpLnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgICBpKys7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhZGRHcm91cCA9IChrZXk6IGFueSwgdmFsdWU6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIHsga2V5LCB2YWx1ZSB9O1xuICAgIH07XG5cbiAgICAvLyBjb252ZXJ0IG1hcCBiYWNrIHRvIGEgc2ltcGxlIGFycmF5IG9mIG9iamVjdHNcbiAgICByZXR1cm4gQXJyYXkuZnJvbShtYXAsIHggPT4gYWRkR3JvdXAoeFswXSwgeFsxXSkpO1xuICB9XG5cbiAgLypcbiAgICogTGlmZWN5Y2xlIGhvb2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBBbmd1bGFyIGRpcnR5IGNoZWNrcyBhIGRpcmVjdGl2ZS5cbiAgICovXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yb3dEaWZmZXIuZGlmZih0aGlzLnJvd3MpKSB7XG4gICAgICBpZiAoIXRoaXMuZXh0ZXJuYWxTb3J0aW5nKSB7XG4gICAgICAgIHRoaXMuc29ydEludGVybmFsUm93cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faW50ZXJuYWxSb3dzID0gWy4uLnRoaXMucm93c107XG4gICAgICB9XG5cbiAgICAgIC8vIGF1dG8gZ3JvdXAgYnkgcGFyZW50IG9uIG5ldyB1cGRhdGVcbiAgICAgIHRoaXMuX2ludGVybmFsUm93cyA9IGdyb3VwUm93c0J5UGFyZW50cyhcbiAgICAgICAgdGhpcy5faW50ZXJuYWxSb3dzLFxuICAgICAgICBvcHRpb25hbEdldHRlckZvclByb3AodGhpcy50cmVlRnJvbVJlbGF0aW9uKSxcbiAgICAgICAgb3B0aW9uYWxHZXR0ZXJGb3JQcm9wKHRoaXMudHJlZVRvUmVsYXRpb24pXG4gICAgICApO1xuXG4gICAgICB0aGlzLnJlY2FsY3VsYXRlUGFnZXMoKTtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlY2FsYydzIHRoZSBzaXplcyBvZiB0aGUgZ3JpZC5cbiAgICpcbiAgICogVXBkYXRlZCBhdXRvbWF0aWNhbGx5IG9uIGNoYW5nZXMgdG86XG4gICAqXG4gICAqICAtIENvbHVtbnNcbiAgICogIC0gUm93c1xuICAgKiAgLSBQYWdpbmcgcmVsYXRlZFxuICAgKlxuICAgKiBBbHNvIGNhbiBiZSBtYW51YWxseSBpbnZva2VkIG9yIHVwb24gd2luZG93IHJlc2l6ZS5cbiAgICovXG4gIHJlY2FsY3VsYXRlKCk6IHZvaWQge1xuICAgIHRoaXMucmVjYWxjdWxhdGVEaW1zKCk7XG4gICAgdGhpcy5yZWNhbGN1bGF0ZUNvbHVtbnMoKTtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdpbmRvdyByZXNpemUgaGFuZGxlciB0byB1cGRhdGUgc2l6ZXMuXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJylcbiAgQHRocm90dGxlYWJsZSg1KVxuICBvbldpbmRvd1Jlc2l6ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlY2FsY3VsYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVjYWx1bGNhdGVzIHRoZSBjb2x1bW4gd2lkdGhzIGJhc2VkIG9uIGNvbHVtbiB3aWR0aFxuICAgKiBkaXN0cmlidXRpb24gbW9kZSBhbmQgc2Nyb2xsYmFyIG9mZnNldHMuXG4gICAqL1xuICByZWNhbGN1bGF0ZUNvbHVtbnMoXG4gICAgY29sdW1uczogYW55W10gPSB0aGlzLl9pbnRlcm5hbENvbHVtbnMsXG4gICAgZm9yY2VJZHg6IG51bWJlciA9IC0xLFxuICAgIGFsbG93QmxlZWQ6IGJvb2xlYW4gPSB0aGlzLnNjcm9sbGJhckhcbiAgKTogYW55W10gfCB1bmRlZmluZWQge1xuICAgIGlmICghY29sdW1ucykgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgIGxldCB3aWR0aCA9IHRoaXMuX2lubmVyV2lkdGg7XG4gICAgaWYgKHRoaXMuc2Nyb2xsYmFyVikge1xuICAgICAgd2lkdGggPSB3aWR0aCAtIHRoaXMuc2Nyb2xsYmFySGVscGVyLndpZHRoO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbHVtbk1vZGUgPT09IENvbHVtbk1vZGUuZm9yY2UpIHtcbiAgICAgIGZvcmNlRmlsbENvbHVtbldpZHRocyhjb2x1bW5zLCB3aWR0aCwgZm9yY2VJZHgsIGFsbG93QmxlZWQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb2x1bW5Nb2RlID09PSBDb2x1bW5Nb2RlLmZsZXgpIHtcbiAgICAgIGFkanVzdENvbHVtbldpZHRocyhjb2x1bW5zLCB3aWR0aCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbHVtbnM7XG4gIH1cblxuICAvKipcbiAgICogUmVjYWxjdWxhdGVzIHRoZSBkaW1lbnNpb25zIG9mIHRoZSB0YWJsZSBzaXplLlxuICAgKiBJbnRlcm5hbGx5IGNhbGxzIHRoZSBwYWdlIHNpemUgYW5kIHJvdyBjb3VudCBjYWxjcyB0b28uXG4gICAqXG4gICAqL1xuICByZWNhbGN1bGF0ZURpbXMoKTogdm9pZCB7XG4gICAgY29uc3QgZGltcyA9IHRoaXMuZGltZW5zaW9uc0hlbHBlci5nZXREaW1lbnNpb25zKHRoaXMuZWxlbWVudCk7XG4gICAgdGhpcy5faW5uZXJXaWR0aCA9IE1hdGguZmxvb3IoZGltcy53aWR0aCk7XG5cbiAgICBpZiAodGhpcy5zY3JvbGxiYXJWKSB7XG4gICAgICBsZXQgaGVpZ2h0ID0gZGltcy5oZWlnaHQ7XG4gICAgICBpZiAodGhpcy5oZWFkZXJIZWlnaHQpIGhlaWdodCA9IGhlaWdodCAtIHRoaXMuaGVhZGVySGVpZ2h0O1xuICAgICAgaWYgKHRoaXMuZm9vdGVySGVpZ2h0KSBoZWlnaHQgPSBoZWlnaHQgLSB0aGlzLmZvb3RlckhlaWdodDtcbiAgICAgIHRoaXMuYm9keUhlaWdodCA9IGhlaWdodDtcbiAgICB9XG5cbiAgICB0aGlzLnJlY2FsY3VsYXRlUGFnZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWNhbGN1bGF0ZXMgdGhlIHBhZ2VzIGFmdGVyIGEgdXBkYXRlLlxuICAgKi9cbiAgcmVjYWxjdWxhdGVQYWdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2VTaXplID0gdGhpcy5jYWxjUGFnZVNpemUoKTtcbiAgICB0aGlzLnJvd0NvdW50ID0gdGhpcy5jYWxjUm93Q291bnQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCb2R5IHRyaWdnZXJlZCBhIHBhZ2UgZXZlbnQuXG4gICAqL1xuICBvbkJvZHlQYWdlKHsgb2Zmc2V0IH06IGFueSk6IHZvaWQge1xuICAgIC8vIEF2b2lkIHBhZ2luYXRpb24gY2FtaW5nIGZyb20gYm9keSBldmVudHMgbGlrZSBzY3JvbGwgd2hlbiB0aGUgdGFibGVcbiAgICAvLyBoYXMgbm8gdmlydHVhbGl6YXRpb24gYW5kIHRoZSBleHRlcm5hbCBwYWdpbmcgaXMgZW5hYmxlLlxuICAgIC8vIFRoaXMgbWVhbnMsIGxldCdzIHRoZSBkZXZlbG9wZXIgaGFuZGxlIHBhZ2luYXRpb24gYnkgbXkgaGltKGhlcikgc2VsZlxuICAgIGlmICh0aGlzLmV4dGVybmFsUGFnaW5nICYmICF0aGlzLnZpcnR1YWxpemF0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG5cbiAgICB0aGlzLnBhZ2UuZW1pdCh7XG4gICAgICBjb3VudDogdGhpcy5jb3VudCxcbiAgICAgIHBhZ2VTaXplOiB0aGlzLnBhZ2VTaXplLFxuICAgICAgbGltaXQ6IHRoaXMubGltaXQsXG4gICAgICBvZmZzZXQ6IHRoaXMub2Zmc2V0XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGJvZHkgdHJpZ2dlcmVkIGEgc2Nyb2xsIGV2ZW50LlxuICAgKi9cbiAgb25Cb2R5U2Nyb2xsKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5fb2Zmc2V0WC5uZXh0KGV2ZW50Lm9mZnNldFgpO1xuICAgIHRoaXMuc2Nyb2xsLmVtaXQoZXZlbnQpO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBmb290ZXIgdHJpZ2dlcmVkIGEgcGFnZSBldmVudC5cbiAgICovXG4gIG9uRm9vdGVyUGFnZShldmVudDogYW55KSB7XG4gICAgdGhpcy5vZmZzZXQgPSBldmVudC5wYWdlIC0gMTtcbiAgICB0aGlzLmJvZHlDb21wb25lbnQudXBkYXRlT2Zmc2V0WSh0aGlzLm9mZnNldCk7XG5cbiAgICB0aGlzLnBhZ2UuZW1pdCh7XG4gICAgICBjb3VudDogdGhpcy5jb3VudCxcbiAgICAgIHBhZ2VTaXplOiB0aGlzLnBhZ2VTaXplLFxuICAgICAgbGltaXQ6IHRoaXMubGltaXQsXG4gICAgICBvZmZzZXQ6IHRoaXMub2Zmc2V0XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5zZWxlY3RBbGxSb3dzT25QYWdlKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gW107XG4gICAgICB0aGlzLnNlbGVjdC5lbWl0KHtcbiAgICAgICAgc2VsZWN0ZWQ6IHRoaXMuc2VsZWN0ZWRcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWNhbGN1bGF0ZXMgdGhlIHNpemVzIG9mIHRoZSBwYWdlXG4gICAqL1xuICBjYWxjUGFnZVNpemUodmFsOiBhbnlbXSA9IHRoaXMucm93cyk6IG51bWJlciB7XG4gICAgLy8gS2VlcCB0aGUgcGFnZSBzaXplIGNvbnN0YW50IGV2ZW4gaWYgdGhlIHJvdyBoYXMgYmVlbiBleHBhbmRlZC5cbiAgICAvLyBUaGlzIGlzIGJlY2F1c2UgYW4gZXhwYW5kZWQgcm93IGlzIHN0aWxsIGNvbnNpZGVyZWQgdG8gYmUgYSBjaGlsZCBvZlxuICAgIC8vIHRoZSBvcmlnaW5hbCByb3cuICBIZW5jZSBjYWxjdWxhdGlvbiB3b3VsZCB1c2Ugcm93SGVpZ2h0IG9ubHkuXG4gICAgaWYgKHRoaXMuc2Nyb2xsYmFyViAmJiB0aGlzLnZpcnR1YWxpemF0aW9uKSB7XG4gICAgICBjb25zdCBzaXplID0gTWF0aC5jZWlsKHRoaXMuYm9keUhlaWdodCAvICh0aGlzLnJvd0hlaWdodCBhcyBudW1iZXIpKTtcbiAgICAgIHJldHVybiBNYXRoLm1heChzaXplLCAwKTtcbiAgICB9XG5cbiAgICAvLyBpZiBsaW1pdCBpcyBwYXNzZWQsIHdlIGFyZSBwYWdpbmdcbiAgICBpZiAodGhpcy5saW1pdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5saW1pdDtcbiAgICB9XG5cbiAgICAvLyBvdGhlcndpc2UgdXNlIHJvdyBsZW5ndGhcbiAgICBpZiAodmFsKSB7XG4gICAgICByZXR1cm4gdmFsLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvLyBvdGhlciBlbXB0eSA6KFxuICAgIHJldHVybiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgdGhlIHJvdyBjb3VudC5cbiAgICovXG4gIGNhbGNSb3dDb3VudCh2YWw6IGFueVtdID0gdGhpcy5yb3dzKTogbnVtYmVyIHtcbiAgICBpZiAoIXRoaXMuZXh0ZXJuYWxQYWdpbmcpIHtcbiAgICAgIGlmICghdmFsKSByZXR1cm4gMDtcblxuICAgICAgaWYgKHRoaXMuZ3JvdXBlZFJvd3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBlZFJvd3MubGVuZ3RoO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnRyZWVGcm9tUmVsYXRpb24gIT0gbnVsbCAmJiB0aGlzLnRyZWVUb1JlbGF0aW9uICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludGVybmFsUm93cy5sZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jb3VudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgaGVhZGVyIHRyaWdnZXJlZCBhIGNvbnRleHRtZW51IGV2ZW50LlxuICAgKi9cbiAgb25Db2x1bW5Db250ZXh0bWVudSh7IGV2ZW50LCBjb2x1bW4gfTogYW55KTogdm9pZCB7XG4gICAgdGhpcy50YWJsZUNvbnRleHRtZW51LmVtaXQoeyBldmVudCwgdHlwZTogQ29udGV4dG1lbnVUeXBlLmhlYWRlciwgY29udGVudDogY29sdW1uIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBib2R5IHRyaWdnZXJlZCBhIGNvbnRleHRtZW51IGV2ZW50LlxuICAgKi9cbiAgb25Sb3dDb250ZXh0bWVudSh7IGV2ZW50LCByb3cgfTogYW55KTogdm9pZCB7XG4gICAgdGhpcy50YWJsZUNvbnRleHRtZW51LmVtaXQoeyBldmVudCwgdHlwZTogQ29udGV4dG1lbnVUeXBlLmJvZHksIGNvbnRlbnQ6IHJvdyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgaGVhZGVyIHRyaWdnZXJlZCBhIGNvbHVtbiByZXNpemUgZXZlbnQuXG4gICAqL1xuICBvbkNvbHVtblJlc2l6ZSh7IGNvbHVtbiwgbmV3VmFsdWUgfTogYW55KTogdm9pZCB7XG4gICAgLyogU2FmYXJpL2lPUyAxMC4yIHdvcmthcm91bmQgKi9cbiAgICBpZiAoY29sdW1uID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgaWR4OiBudW1iZXI7XG4gICAgY29uc3QgY29scyA9IHRoaXMuX2ludGVybmFsQ29sdW1ucy5tYXAoKGMsIGkpID0+IHtcbiAgICAgIGMgPSB7IC4uLmMgfTtcblxuICAgICAgaWYgKGMuJCRpZCA9PT0gY29sdW1uLiQkaWQpIHtcbiAgICAgICAgaWR4ID0gaTtcbiAgICAgICAgYy53aWR0aCA9IG5ld1ZhbHVlO1xuXG4gICAgICAgIC8vIHNldCB0aGlzIHNvIHdlIGNhbiBmb3JjZSB0aGUgY29sdW1uXG4gICAgICAgIC8vIHdpZHRoIGRpc3RyaWJ1dGlvbiB0byBiZSB0byB0aGlzIHZhbHVlXG4gICAgICAgIGMuJCRvbGRXaWR0aCA9IG5ld1ZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYztcbiAgICB9KTtcblxuICAgIHRoaXMucmVjYWxjdWxhdGVDb2x1bW5zKGNvbHMsIGlkeCk7XG4gICAgdGhpcy5faW50ZXJuYWxDb2x1bW5zID0gY29scztcblxuICAgIHRoaXMucmVzaXplLmVtaXQoe1xuICAgICAgY29sdW1uLFxuICAgICAgbmV3VmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgaGVhZGVyIHRyaWdnZXJlZCBhIGNvbHVtbiByZS1vcmRlciBldmVudC5cbiAgICovXG4gIG9uQ29sdW1uUmVvcmRlcih7IGNvbHVtbiwgbmV3VmFsdWUsIHByZXZWYWx1ZSB9OiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBjb2xzID0gdGhpcy5faW50ZXJuYWxDb2x1bW5zLm1hcChjID0+IHtcbiAgICAgIHJldHVybiB7IC4uLmMgfTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLnN3YXBDb2x1bW5zKSB7XG4gICAgICBjb25zdCBwcmV2Q29sID0gY29sc1tuZXdWYWx1ZV07XG4gICAgICBjb2xzW25ld1ZhbHVlXSA9IGNvbHVtbjtcbiAgICAgIGNvbHNbcHJldlZhbHVlXSA9IHByZXZDb2w7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChuZXdWYWx1ZSA+IHByZXZWYWx1ZSkge1xuICAgICAgICBjb25zdCBtb3ZlZENvbCA9IGNvbHNbcHJldlZhbHVlXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHByZXZWYWx1ZTsgaSA8IG5ld1ZhbHVlOyBpKyspIHtcbiAgICAgICAgICBjb2xzW2ldID0gY29sc1tpICsgMV07XG4gICAgICAgIH1cbiAgICAgICAgY29sc1tuZXdWYWx1ZV0gPSBtb3ZlZENvbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1vdmVkQ29sID0gY29sc1twcmV2VmFsdWVdO1xuICAgICAgICBmb3IgKGxldCBpID0gcHJldlZhbHVlOyBpID4gbmV3VmFsdWU7IGktLSkge1xuICAgICAgICAgIGNvbHNbaV0gPSBjb2xzW2kgLSAxXTtcbiAgICAgICAgfVxuICAgICAgICBjb2xzW25ld1ZhbHVlXSA9IG1vdmVkQ29sO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2ludGVybmFsQ29sdW1ucyA9IGNvbHM7XG5cbiAgICB0aGlzLnJlb3JkZXIuZW1pdCh7XG4gICAgICBjb2x1bW4sXG4gICAgICBuZXdWYWx1ZSxcbiAgICAgIHByZXZWYWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBoZWFkZXIgdHJpZ2dlcmVkIGEgY29sdW1uIHNvcnQgZXZlbnQuXG4gICAqL1xuICBvbkNvbHVtblNvcnQoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIC8vIGNsZWFuIHNlbGVjdGVkIHJvd3NcbiAgICBpZiAodGhpcy5zZWxlY3RBbGxSb3dzT25QYWdlKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gW107XG4gICAgICB0aGlzLnNlbGVjdC5lbWl0KHtcbiAgICAgICAgc2VsZWN0ZWQ6IHRoaXMuc2VsZWN0ZWRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuc29ydHMgPSBldmVudC5zb3J0cztcblxuICAgIC8vIHRoaXMgY291bGQgYmUgb3B0aW1pemVkIGJldHRlciBzaW5jZSBpdCB3aWxsIHJlc29ydFxuICAgIC8vIHRoZSByb3dzIGFnYWluIG9uIHRoZSAncHVzaCcgZGV0ZWN0aW9uLi4uXG4gICAgaWYgKHRoaXMuZXh0ZXJuYWxTb3J0aW5nID09PSBmYWxzZSkge1xuICAgICAgLy8gZG9uJ3QgdXNlIG5vcm1hbCBzZXR0ZXIgc28gd2UgZG9uJ3QgcmVzb3J0XG4gICAgICB0aGlzLnNvcnRJbnRlcm5hbFJvd3MoKTtcbiAgICB9XG5cbiAgICAvLyBhdXRvIGdyb3VwIGJ5IHBhcmVudCBvbiBuZXcgdXBkYXRlXG4gICAgdGhpcy5faW50ZXJuYWxSb3dzID0gZ3JvdXBSb3dzQnlQYXJlbnRzKFxuICAgICAgdGhpcy5faW50ZXJuYWxSb3dzLFxuICAgICAgb3B0aW9uYWxHZXR0ZXJGb3JQcm9wKHRoaXMudHJlZUZyb21SZWxhdGlvbiksXG4gICAgICBvcHRpb25hbEdldHRlckZvclByb3AodGhpcy50cmVlVG9SZWxhdGlvbilcbiAgICApO1xuXG4gICAgLy8gQWx3YXlzIGdvIHRvIGZpcnN0IHBhZ2Ugd2hlbiBzb3J0aW5nIHRvIHNlZSB0aGUgbmV3bHkgc29ydGVkIGRhdGFcbiAgICB0aGlzLm9mZnNldCA9IDA7XG4gICAgdGhpcy5ib2R5Q29tcG9uZW50LnVwZGF0ZU9mZnNldFkodGhpcy5vZmZzZXQpO1xuICAgIHRoaXMuc29ydC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGUgYWxsIHJvdyBzZWxlY3Rpb25cbiAgICovXG4gIG9uSGVhZGVyU2VsZWN0KGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ib2R5Q29tcG9uZW50ICYmIHRoaXMuc2VsZWN0QWxsUm93c09uUGFnZSkge1xuICAgICAgLy8gYmVmb3JlIHdlIHNwbGljZSwgY2hrIGlmIHdlIGN1cnJlbnRseSBoYXZlIGFsbCBzZWxlY3RlZFxuICAgICAgY29uc3QgZmlyc3QgPSB0aGlzLmJvZHlDb21wb25lbnQuaW5kZXhlcy5maXJzdDtcbiAgICAgIGNvbnN0IGxhc3QgPSB0aGlzLmJvZHlDb21wb25lbnQuaW5kZXhlcy5sYXN0O1xuICAgICAgY29uc3QgYWxsU2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkLmxlbmd0aCA9PT0gbGFzdCAtIGZpcnN0O1xuXG4gICAgICAvLyByZW1vdmUgYWxsIGV4aXN0aW5nIGVpdGhlciB3YXlcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcblxuICAgICAgLy8gZG8gdGhlIG9wcG9zaXRlIGhlcmVcbiAgICAgIGlmICghYWxsU2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZC5wdXNoKC4uLnRoaXMuX2ludGVybmFsUm93cy5zbGljZShmaXJzdCwgbGFzdCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBiZWZvcmUgd2Ugc3BsaWNlLCBjaGsgaWYgd2UgY3VycmVudGx5IGhhdmUgYWxsIHNlbGVjdGVkXG4gICAgICBjb25zdCBhbGxTZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQubGVuZ3RoID09PSB0aGlzLnJvd3MubGVuZ3RoO1xuICAgICAgLy8gcmVtb3ZlIGFsbCBleGlzdGluZyBlaXRoZXIgd2F5XG4gICAgICB0aGlzLnNlbGVjdGVkID0gW107XG4gICAgICAvLyBkbyB0aGUgb3Bwb3NpdGUgaGVyZVxuICAgICAgaWYgKCFhbGxTZWxlY3RlZCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkLnB1c2goLi4udGhpcy5yb3dzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdC5lbWl0KHtcbiAgICAgIHNlbGVjdGVkOiB0aGlzLnNlbGVjdGVkXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQSByb3cgd2FzIHNlbGVjdGVkIGZyb20gYm9keVxuICAgKi9cbiAgb25Cb2R5U2VsZWN0KGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIHJvdyB3YXMgZXhwYW5kZWQgb3IgY29sbGFwc2VkIGZvciB0cmVlXG4gICAqL1xuICBvblRyZWVBY3Rpb24oZXZlbnQ6IGFueSkge1xuICAgIGNvbnN0IHJvdyA9IGV2ZW50LnJvdztcbiAgICAvLyBUT0RPOiBGb3IgZHVwbGljYXRlZCBpdGVtcyB0aGlzIHdpbGwgbm90IHdvcmtcbiAgICBjb25zdCByb3dJbmRleCA9IHRoaXMuX3Jvd3MuZmluZEluZGV4KHIgPT4gclt0aGlzLnRyZWVUb1JlbGF0aW9uXSA9PT0gZXZlbnQucm93W3RoaXMudHJlZVRvUmVsYXRpb25dKTtcbiAgICB0aGlzLnRyZWVBY3Rpb24uZW1pdCh7IHJvdywgcm93SW5kZXggfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmZvckVhY2goc3Vic2NyaXB0aW9uID0+IHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBsaXN0ZW4gZm9yIGNoYW5nZXMgdG8gaW5wdXQgYmluZGluZ3Mgb2YgYWxsIERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSBhbmRcbiAgICogdHJpZ2dlciB0aGUgY29sdW1uVGVtcGxhdGVzLmNoYW5nZXMgb2JzZXJ2YWJsZSB0byBlbWl0XG4gICAqL1xuICBwcml2YXRlIGxpc3RlbkZvckNvbHVtbklucHV0Q2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICB0aGlzLmNvbHVtbkNoYW5nZXNTZXJ2aWNlLmNvbHVtbklucHV0Q2hhbmdlcyQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuY29sdW1uVGVtcGxhdGVzKSB7XG4gICAgICAgICAgdGhpcy5jb2x1bW5UZW1wbGF0ZXMubm90aWZ5T25DaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc29ydEludGVybmFsUm93cygpOiB2b2lkIHtcbiAgICB0aGlzLl9pbnRlcm5hbFJvd3MgPSBzb3J0Um93cyh0aGlzLl9pbnRlcm5hbFJvd3MsIHRoaXMuX2ludGVybmFsQ29sdW1ucywgdGhpcy5zb3J0cyk7XG4gIH1cbn1cbiJdfQ==