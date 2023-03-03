import { __assign, __decorate } from "tslib";
import { Component, Output, EventEmitter, Input, HostBinding, ChangeDetectorRef, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { columnsByPin, columnGroupWidths, columnsByPinArr } from '../../utils/column';
import { SortType } from '../../types/sort.type';
import { translateXY } from '../../utils/translate';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../../directives/orderable.directive';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from './header-cell.component';
import * as ɵngcc4 from '../../directives/resizeable.directive';
import * as ɵngcc5 from '../../directives/long-press.directive';
import * as ɵngcc6 from '../../directives/draggable.directive';

function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template(rf, ctx) { if (rf & 1) {
    var _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "datatable-header-cell", 4);
    ɵngcc0.ɵɵlistener("resize", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_resize_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); var column_r3 = ctx.$implicit; var ctx_r4 = ɵngcc0.ɵɵnextContext(2); return ctx_r4.onColumnResized($event, column_r3); })("longPressStart", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_longPressStart_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); var ctx_r6 = ɵngcc0.ɵɵnextContext(2); return ctx_r6.onLongPressStart($event); })("longPressEnd", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_longPressEnd_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); var ctx_r7 = ɵngcc0.ɵɵnextContext(2); return ctx_r7.onLongPressEnd($event); })("sort", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_sort_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); var ctx_r8 = ɵngcc0.ɵɵnextContext(2); return ctx_r8.onSort($event); })("select", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_select_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); var ctx_r9 = ɵngcc0.ɵɵnextContext(2); return ctx_r9.select.emit($event); })("columnContextmenu", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_columnContextmenu_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); var ctx_r10 = ɵngcc0.ɵɵnextContext(2); return ctx_r10.columnContextmenu.emit($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var column_r3 = ctx.$implicit;
    var ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("resizeEnabled", column_r3.resizeable)("pressModel", column_r3)("pressEnabled", ctx_r2.reorderable && column_r3.draggable)("dragX", ctx_r2.reorderable && column_r3.draggable && column_r3.dragging)("dragY", false)("dragModel", column_r3)("dragEventTarget", ctx_r2.dragEventTarget)("headerHeight", ctx_r2.headerHeight)("isTarget", column_r3.isTarget)("targetMarkerTemplate", ctx_r2.targetMarkerTemplate)("targetMarkerContext", column_r3.targetMarkerContext)("column", column_r3)("sortType", ctx_r2.sortType)("sorts", ctx_r2.sorts)("selectionType", ctx_r2.selectionType)("sortAscendingIcon", ctx_r2.sortAscendingIcon)("sortDescendingIcon", ctx_r2.sortDescendingIcon)("allRowsSelected", ctx_r2.allRowsSelected);
} }
function DataTableHeaderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵtemplate(1, DataTableHeaderComponent_div_1_datatable_header_cell_1_Template, 1, 18, "datatable-header-cell", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var colGroup_r1 = ctx.$implicit;
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap("datatable-row-" + colGroup_r1.type);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r0._styleByGroup[colGroup_r1.type]);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", colGroup_r1.columns)("ngForTrackBy", ctx_r0.columnTrackingFn);
} }
var DataTableHeaderComponent = /** @class */ (function () {
    function DataTableHeaderComponent(cd) {
        this.cd = cd;
        this.sort = new EventEmitter();
        this.reorder = new EventEmitter();
        this.resize = new EventEmitter();
        this.select = new EventEmitter();
        this.columnContextmenu = new EventEmitter(false);
        this._columnGroupWidths = {
            total: 100
        };
        this._styleByGroup = {
            left: {},
            center: {},
            right: {}
        };
        this.destroyed = false;
    }
    Object.defineProperty(DataTableHeaderComponent.prototype, "innerWidth", {
        get: function () {
            return this._innerWidth;
        },
        set: function (val) {
            var _this = this;
            this._innerWidth = val;
            setTimeout(function () {
                if (_this._columns) {
                    var colByPin = columnsByPin(_this._columns);
                    _this._columnGroupWidths = columnGroupWidths(colByPin, _this._columns);
                    _this.setStylesByGroup();
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderComponent.prototype, "headerHeight", {
        get: function () {
            return this._headerHeight;
        },
        set: function (val) {
            if (val !== 'auto') {
                this._headerHeight = val + "px";
            }
            else {
                this._headerHeight = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderComponent.prototype, "columns", {
        get: function () {
            return this._columns;
        },
        set: function (val) {
            var _this = this;
            this._columns = val;
            var colsByPin = columnsByPin(val);
            this._columnsByPin = columnsByPinArr(val);
            setTimeout(function () {
                _this._columnGroupWidths = columnGroupWidths(colsByPin, val);
                _this.setStylesByGroup();
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderComponent.prototype, "offsetX", {
        get: function () {
            return this._offsetX;
        },
        set: function (val) {
            this._offsetX = val;
            this.setStylesByGroup();
        },
        enumerable: true,
        configurable: true
    });
    DataTableHeaderComponent.prototype.ngOnDestroy = function () {
        this.destroyed = true;
    };
    DataTableHeaderComponent.prototype.onLongPressStart = function (_a) {
        var event = _a.event, model = _a.model;
        model.dragging = true;
        this.dragEventTarget = event;
    };
    DataTableHeaderComponent.prototype.onLongPressEnd = function (_a) {
        var _this = this;
        var event = _a.event, model = _a.model;
        this.dragEventTarget = event;
        // delay resetting so sort can be
        // prevented if we were dragging
        setTimeout(function () {
            // datatable component creates copies from columns on reorder
            // set dragging to false on new objects
            var column = _this._columns.find(function (c) { return c.$$id === model.$$id; });
            if (column) {
                column.dragging = false;
            }
        }, 5);
    };
    Object.defineProperty(DataTableHeaderComponent.prototype, "headerWidth", {
        get: function () {
            if (this.scrollbarH) {
                return this.innerWidth + 'px';
            }
            return '100%';
        },
        enumerable: true,
        configurable: true
    });
    DataTableHeaderComponent.prototype.trackByGroups = function (index, colGroup) {
        return colGroup.type;
    };
    DataTableHeaderComponent.prototype.columnTrackingFn = function (index, column) {
        return column.$$id;
    };
    DataTableHeaderComponent.prototype.onColumnResized = function (width, column) {
        if (width <= column.minWidth) {
            width = column.minWidth;
        }
        else if (width >= column.maxWidth) {
            width = column.maxWidth;
        }
        this.resize.emit({
            column: column,
            prevValue: column.width,
            newValue: width
        });
    };
    DataTableHeaderComponent.prototype.onColumnReordered = function (_a) {
        var prevIndex = _a.prevIndex, newIndex = _a.newIndex, model = _a.model;
        var column = this.getColumn(newIndex);
        column.isTarget = false;
        column.targetMarkerContext = undefined;
        this.reorder.emit({
            column: model,
            prevValue: prevIndex,
            newValue: newIndex
        });
    };
    DataTableHeaderComponent.prototype.onTargetChanged = function (_a) {
        var prevIndex = _a.prevIndex, newIndex = _a.newIndex, initialIndex = _a.initialIndex;
        if (prevIndex || prevIndex === 0) {
            var oldColumn = this.getColumn(prevIndex);
            oldColumn.isTarget = false;
            oldColumn.targetMarkerContext = undefined;
        }
        if (newIndex || newIndex === 0) {
            var newColumn = this.getColumn(newIndex);
            newColumn.isTarget = true;
            if (initialIndex !== newIndex) {
                newColumn.targetMarkerContext = {
                    class: 'targetMarker '.concat(initialIndex > newIndex ? 'dragFromRight' : 'dragFromLeft')
                };
            }
        }
    };
    DataTableHeaderComponent.prototype.getColumn = function (index) {
        var leftColumnCount = this._columnsByPin[0].columns.length;
        if (index < leftColumnCount) {
            return this._columnsByPin[0].columns[index];
        }
        var centerColumnCount = this._columnsByPin[1].columns.length;
        if (index < leftColumnCount + centerColumnCount) {
            return this._columnsByPin[1].columns[index - leftColumnCount];
        }
        return this._columnsByPin[2].columns[index - leftColumnCount - centerColumnCount];
    };
    DataTableHeaderComponent.prototype.onSort = function (_a) {
        var column = _a.column, prevValue = _a.prevValue, newValue = _a.newValue;
        // if we are dragging don't sort!
        if (column.dragging) {
            return;
        }
        var sorts = this.calcNewSorts(column, prevValue, newValue);
        this.sort.emit({
            sorts: sorts,
            column: column,
            prevValue: prevValue,
            newValue: newValue
        });
    };
    DataTableHeaderComponent.prototype.calcNewSorts = function (column, prevValue, newValue) {
        var idx = 0;
        if (!this.sorts) {
            this.sorts = [];
        }
        var sorts = this.sorts.map(function (s, i) {
            s = __assign({}, s);
            if (s.prop === column.prop) {
                idx = i;
            }
            return s;
        });
        if (newValue === undefined) {
            sorts.splice(idx, 1);
        }
        else if (prevValue) {
            sorts[idx].dir = newValue;
        }
        else {
            if (this.sortType === SortType.single) {
                sorts.splice(0, this.sorts.length);
            }
            sorts.push({ dir: newValue, prop: column.prop });
        }
        return sorts;
    };
    DataTableHeaderComponent.prototype.setStylesByGroup = function () {
        this._styleByGroup.left = this.calcStylesByGroup('left');
        this._styleByGroup.center = this.calcStylesByGroup('center');
        this._styleByGroup.right = this.calcStylesByGroup('right');
        if (!this.destroyed) {
            this.cd.detectChanges();
        }
    };
    DataTableHeaderComponent.prototype.calcStylesByGroup = function (group) {
        var widths = this._columnGroupWidths;
        var offsetX = this.offsetX;
        var styles = {
            width: widths[group] + "px"
        };
        if (group === 'center') {
            translateXY(styles, offsetX * -1, 0);
        }
        else if (group === 'right') {
            var totalDiff = widths.total - this.innerWidth;
            var offset = totalDiff * -1;
            translateXY(styles, offset, 0);
        }
        return styles;
    };
    DataTableHeaderComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    __decorate([
        Input()
    ], DataTableHeaderComponent.prototype, "sortAscendingIcon", void 0);
    __decorate([
        Input()
    ], DataTableHeaderComponent.prototype, "sortDescendingIcon", void 0);
    __decorate([
        Input()
    ], DataTableHeaderComponent.prototype, "scrollbarH", void 0);
    __decorate([
        Input()
    ], DataTableHeaderComponent.prototype, "dealsWithGroup", void 0);
    __decorate([
        Input()
    ], DataTableHeaderComponent.prototype, "targetMarkerTemplate", void 0);
    __decorate([
        Input()
    ], DataTableHeaderComponent.prototype, "innerWidth", null);
    __decorate([
        Input()
    ], DataTableHeaderComponent.prototype, "sorts", void 0);
    __decorate([
        Input()
    ], DataTableHeaderComponent.prototype, "sortType", void 0);
    __decorate([
        Input()
    ], DataTableHeaderComponent.prototype, "allRowsSelected", void 0);
    __decorate([
        Input()
    ], DataTableHeaderComponent.prototype, "selectionType", void 0);
    __decorate([
        Input()
    ], DataTableHeaderComponent.prototype, "reorderable", void 0);
    __decorate([
        HostBinding('style.height'),
        Input()
    ], DataTableHeaderComponent.prototype, "headerHeight", null);
    __decorate([
        Input()
    ], DataTableHeaderComponent.prototype, "columns", null);
    __decorate([
        Input()
    ], DataTableHeaderComponent.prototype, "offsetX", null);
    __decorate([
        Output()
    ], DataTableHeaderComponent.prototype, "sort", void 0);
    __decorate([
        Output()
    ], DataTableHeaderComponent.prototype, "reorder", void 0);
    __decorate([
        Output()
    ], DataTableHeaderComponent.prototype, "resize", void 0);
    __decorate([
        Output()
    ], DataTableHeaderComponent.prototype, "select", void 0);
    __decorate([
        Output()
    ], DataTableHeaderComponent.prototype, "columnContextmenu", void 0);
    __decorate([
        HostBinding('style.width')
    ], DataTableHeaderComponent.prototype, "headerWidth", null);
DataTableHeaderComponent.ɵfac = function DataTableHeaderComponent_Factory(t) { return new (t || DataTableHeaderComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
DataTableHeaderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DataTableHeaderComponent, selectors: [["datatable-header"]], hostAttrs: [1, "datatable-header"], hostVars: 4, hostBindings: function DataTableHeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("height", ctx.headerHeight)("width", ctx.headerWidth);
    } }, inputs: { innerWidth: "innerWidth", headerHeight: "headerHeight", columns: "columns", offsetX: "offsetX", sorts: "sorts", sortAscendingIcon: "sortAscendingIcon", sortDescendingIcon: "sortDescendingIcon", scrollbarH: "scrollbarH", dealsWithGroup: "dealsWithGroup", targetMarkerTemplate: "targetMarkerTemplate", sortType: "sortType", allRowsSelected: "allRowsSelected", selectionType: "selectionType", reorderable: "reorderable" }, outputs: { sort: "sort", reorder: "reorder", resize: "resize", select: "select", columnContextmenu: "columnContextmenu" }, decls: 2, vars: 4, consts: [["orderable", "", 1, "datatable-header-inner", 3, "reorder", "targetChanged"], [3, "class", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle"], ["resizeable", "", "long-press", "", "draggable", "", 3, "resizeEnabled", "pressModel", "pressEnabled", "dragX", "dragY", "dragModel", "dragEventTarget", "headerHeight", "isTarget", "targetMarkerTemplate", "targetMarkerContext", "column", "sortType", "sorts", "selectionType", "sortAscendingIcon", "sortDescendingIcon", "allRowsSelected", "resize", "longPressStart", "longPressEnd", "sort", "select", "columnContextmenu", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["resizeable", "", "long-press", "", "draggable", "", 3, "resizeEnabled", "pressModel", "pressEnabled", "dragX", "dragY", "dragModel", "dragEventTarget", "headerHeight", "isTarget", "targetMarkerTemplate", "targetMarkerContext", "column", "sortType", "sorts", "selectionType", "sortAscendingIcon", "sortDescendingIcon", "allRowsSelected", "resize", "longPressStart", "longPressEnd", "sort", "select", "columnContextmenu"]], template: function DataTableHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("reorder", function DataTableHeaderComponent_Template_div_reorder_0_listener($event) { return ctx.onColumnReordered($event); })("targetChanged", function DataTableHeaderComponent_Template_div_targetChanged_0_listener($event) { return ctx.onTargetChanged($event); });
        ɵngcc0.ɵɵtemplate(1, DataTableHeaderComponent_div_1_Template, 2, 5, "div", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("width", ctx._columnGroupWidths.total, "px");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx._columnsByPin)("ngForTrackBy", ctx.trackByGroups);
    } }, directives: [ɵngcc1.OrderableDirective, ɵngcc2.NgForOf, ɵngcc2.NgStyle, ɵngcc3.DataTableHeaderCellComponent, ɵngcc4.ResizeableDirective, ɵngcc5.LongPressDirective, ɵngcc6.DraggableDirective], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DataTableHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'datatable-header',
                template: "\n    <div\n      orderable\n      (reorder)=\"onColumnReordered($event)\"\n      (targetChanged)=\"onTargetChanged($event)\"\n      [style.width.px]=\"_columnGroupWidths.total\"\n      class=\"datatable-header-inner\"\n    >\n      <div\n        *ngFor=\"let colGroup of _columnsByPin; trackBy: trackByGroups\"\n        [class]=\"'datatable-row-' + colGroup.type\"\n        [ngStyle]=\"_styleByGroup[colGroup.type]\"\n      >\n        <datatable-header-cell\n          *ngFor=\"let column of colGroup.columns; trackBy: columnTrackingFn\"\n          resizeable\n          [resizeEnabled]=\"column.resizeable\"\n          (resize)=\"onColumnResized($event, column)\"\n          long-press\n          [pressModel]=\"column\"\n          [pressEnabled]=\"reorderable && column.draggable\"\n          (longPressStart)=\"onLongPressStart($event)\"\n          (longPressEnd)=\"onLongPressEnd($event)\"\n          draggable\n          [dragX]=\"reorderable && column.draggable && column.dragging\"\n          [dragY]=\"false\"\n          [dragModel]=\"column\"\n          [dragEventTarget]=\"dragEventTarget\"\n          [headerHeight]=\"headerHeight\"\n          [isTarget]=\"column.isTarget\"\n          [targetMarkerTemplate]=\"targetMarkerTemplate\"\n          [targetMarkerContext]=\"column.targetMarkerContext\"\n          [column]=\"column\"\n          [sortType]=\"sortType\"\n          [sorts]=\"sorts\"\n          [selectionType]=\"selectionType\"\n          [sortAscendingIcon]=\"sortAscendingIcon\"\n          [sortDescendingIcon]=\"sortDescendingIcon\"\n          [allRowsSelected]=\"allRowsSelected\"\n          (sort)=\"onSort($event)\"\n          (select)=\"select.emit($event)\"\n          (columnContextmenu)=\"columnContextmenu.emit($event)\"\n        >\n        </datatable-header-cell>\n      </div>\n    </div>\n  ",
                host: {
                    class: 'datatable-header'
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { sort: [{
            type: Output
        }], reorder: [{
            type: Output
        }], resize: [{
            type: Output
        }], select: [{
            type: Output
        }], columnContextmenu: [{
            type: Output
        }], innerWidth: [{
            type: Input
        }], headerHeight: [{
            type: HostBinding,
            args: ['style.height']
        }, {
            type: Input
        }], columns: [{
            type: Input
        }], offsetX: [{
            type: Input
        }], headerWidth: [{
            type: HostBinding,
            args: ['style.width']
        }], sorts: [{
            type: Input
        }], sortAscendingIcon: [{
            type: Input
        }], sortDescendingIcon: [{
            type: Input
        }], scrollbarH: [{
            type: Input
        }], dealsWithGroup: [{
            type: Input
        }], targetMarkerTemplate: [{
            type: Input
        }], sortType: [{
            type: Input
        }], allRowsSelected: [{
            type: Input
        }], selectionType: [{
            type: Input
        }], reorderable: [{
            type: Input
        }] }); })();
    return DataTableHeaderComponent;
}());
export { DataTableHeaderComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2xpYi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixZQUFZLEVBQ1osS0FBSyxFQUNMLFdBQVcsRUFDWCxpQkFBaUIsRUFDakIsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUdqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3RHBEO0FBQTRELElBNEYxRCxrQ0FBb0IsRUFBcUI7QUFBSSxRQUF6QixPQUFFLEdBQUYsRUFBRSxDQUFtQjtBQUFDLFFBdEJoQyxTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDekQsUUFBWSxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDNUQsUUFBWSxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDM0QsUUFBWSxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDM0QsUUFBWSxzQkFBaUIsR0FBRyxJQUFJLFlBQVksQ0FBcUMsS0FBSyxDQUFDLENBQUM7QUFDNUYsUUFFRSx1QkFBa0IsR0FBUTtBQUM1QixZQUFJLEtBQUssRUFBRSxHQUFHO0FBQ2QsU0FBRyxDQUFDO0FBQ0osUUFJRSxrQkFBYSxHQUEyQjtBQUMxQyxZQUFJLElBQUksRUFBRSxFQUFFO0FBQ1osWUFBSSxNQUFNLEVBQUUsRUFBRTtBQUNkLFlBQUksS0FBSyxFQUFFLEVBQUU7QUFD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QUF4UUQsSUF3UUM7QUFDRCxTQXpRYSx3QkFBd0I7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBIb3N0QmluZGluZyxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb2x1bW5zQnlQaW4sIGNvbHVtbkdyb3VwV2lkdGhzLCBjb2x1bW5zQnlQaW5BcnIgfSBmcm9tICcuLi8uLi91dGlscy9jb2x1bW4nO1xuaW1wb3J0IHsgU29ydFR5cGUgfSBmcm9tICcuLi8uLi90eXBlcy9zb3J0LnR5cGUnO1xuaW1wb3J0IHsgU2VsZWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzL3NlbGVjdGlvbi50eXBlJztcbmltcG9ydCB7IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSB9IGZyb20gJy4uL2NvbHVtbnMvY29sdW1uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyB0cmFuc2xhdGVYWSB9IGZyb20gJy4uLy4uL3V0aWxzL3RyYW5zbGF0ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGF0YWJsZS1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXZcbiAgICAgIG9yZGVyYWJsZVxuICAgICAgKHJlb3JkZXIpPVwib25Db2x1bW5SZW9yZGVyZWQoJGV2ZW50KVwiXG4gICAgICAodGFyZ2V0Q2hhbmdlZCk9XCJvblRhcmdldENoYW5nZWQoJGV2ZW50KVwiXG4gICAgICBbc3R5bGUud2lkdGgucHhdPVwiX2NvbHVtbkdyb3VwV2lkdGhzLnRvdGFsXCJcbiAgICAgIGNsYXNzPVwiZGF0YXRhYmxlLWhlYWRlci1pbm5lclwiXG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICAqbmdGb3I9XCJsZXQgY29sR3JvdXAgb2YgX2NvbHVtbnNCeVBpbjsgdHJhY2tCeTogdHJhY2tCeUdyb3Vwc1wiXG4gICAgICAgIFtjbGFzc109XCInZGF0YXRhYmxlLXJvdy0nICsgY29sR3JvdXAudHlwZVwiXG4gICAgICAgIFtuZ1N0eWxlXT1cIl9zdHlsZUJ5R3JvdXBbY29sR3JvdXAudHlwZV1cIlxuICAgICAgPlxuICAgICAgICA8ZGF0YXRhYmxlLWhlYWRlci1jZWxsXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2xHcm91cC5jb2x1bW5zOyB0cmFja0J5OiBjb2x1bW5UcmFja2luZ0ZuXCJcbiAgICAgICAgICByZXNpemVhYmxlXG4gICAgICAgICAgW3Jlc2l6ZUVuYWJsZWRdPVwiY29sdW1uLnJlc2l6ZWFibGVcIlxuICAgICAgICAgIChyZXNpemUpPVwib25Db2x1bW5SZXNpemVkKCRldmVudCwgY29sdW1uKVwiXG4gICAgICAgICAgbG9uZy1wcmVzc1xuICAgICAgICAgIFtwcmVzc01vZGVsXT1cImNvbHVtblwiXG4gICAgICAgICAgW3ByZXNzRW5hYmxlZF09XCJyZW9yZGVyYWJsZSAmJiBjb2x1bW4uZHJhZ2dhYmxlXCJcbiAgICAgICAgICAobG9uZ1ByZXNzU3RhcnQpPVwib25Mb25nUHJlc3NTdGFydCgkZXZlbnQpXCJcbiAgICAgICAgICAobG9uZ1ByZXNzRW5kKT1cIm9uTG9uZ1ByZXNzRW5kKCRldmVudClcIlxuICAgICAgICAgIGRyYWdnYWJsZVxuICAgICAgICAgIFtkcmFnWF09XCJyZW9yZGVyYWJsZSAmJiBjb2x1bW4uZHJhZ2dhYmxlICYmIGNvbHVtbi5kcmFnZ2luZ1wiXG4gICAgICAgICAgW2RyYWdZXT1cImZhbHNlXCJcbiAgICAgICAgICBbZHJhZ01vZGVsXT1cImNvbHVtblwiXG4gICAgICAgICAgW2RyYWdFdmVudFRhcmdldF09XCJkcmFnRXZlbnRUYXJnZXRcIlxuICAgICAgICAgIFtoZWFkZXJIZWlnaHRdPVwiaGVhZGVySGVpZ2h0XCJcbiAgICAgICAgICBbaXNUYXJnZXRdPVwiY29sdW1uLmlzVGFyZ2V0XCJcbiAgICAgICAgICBbdGFyZ2V0TWFya2VyVGVtcGxhdGVdPVwidGFyZ2V0TWFya2VyVGVtcGxhdGVcIlxuICAgICAgICAgIFt0YXJnZXRNYXJrZXJDb250ZXh0XT1cImNvbHVtbi50YXJnZXRNYXJrZXJDb250ZXh0XCJcbiAgICAgICAgICBbY29sdW1uXT1cImNvbHVtblwiXG4gICAgICAgICAgW3NvcnRUeXBlXT1cInNvcnRUeXBlXCJcbiAgICAgICAgICBbc29ydHNdPVwic29ydHNcIlxuICAgICAgICAgIFtzZWxlY3Rpb25UeXBlXT1cInNlbGVjdGlvblR5cGVcIlxuICAgICAgICAgIFtzb3J0QXNjZW5kaW5nSWNvbl09XCJzb3J0QXNjZW5kaW5nSWNvblwiXG4gICAgICAgICAgW3NvcnREZXNjZW5kaW5nSWNvbl09XCJzb3J0RGVzY2VuZGluZ0ljb25cIlxuICAgICAgICAgIFthbGxSb3dzU2VsZWN0ZWRdPVwiYWxsUm93c1NlbGVjdGVkXCJcbiAgICAgICAgICAoc29ydCk9XCJvblNvcnQoJGV2ZW50KVwiXG4gICAgICAgICAgKHNlbGVjdCk9XCJzZWxlY3QuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAoY29sdW1uQ29udGV4dG1lbnUpPVwiY29sdW1uQ29udGV4dG1lbnUuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgPlxuICAgICAgICA8L2RhdGF0YWJsZS1oZWFkZXItY2VsbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdkYXRhdGFibGUtaGVhZGVyJ1xuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBzb3J0QXNjZW5kaW5nSWNvbjogYW55O1xuICBASW5wdXQoKSBzb3J0RGVzY2VuZGluZ0ljb246IGFueTtcbiAgQElucHV0KCkgc2Nyb2xsYmFySDogYm9vbGVhbjtcbiAgQElucHV0KCkgZGVhbHNXaXRoR3JvdXA6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHRhcmdldE1hcmtlclRlbXBsYXRlOiBhbnk7XG5cbiAgdGFyZ2V0TWFya2VyQ29udGV4dDogYW55O1xuXG4gIEBJbnB1dCgpIHNldCBpbm5lcldpZHRoKHZhbDogbnVtYmVyKSB7XG4gICAgdGhpcy5faW5uZXJXaWR0aCA9IHZhbDtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9jb2x1bW5zKSB7XG4gICAgICAgIGNvbnN0IGNvbEJ5UGluID0gY29sdW1uc0J5UGluKHRoaXMuX2NvbHVtbnMpO1xuICAgICAgICB0aGlzLl9jb2x1bW5Hcm91cFdpZHRocyA9IGNvbHVtbkdyb3VwV2lkdGhzKGNvbEJ5UGluLCB0aGlzLl9jb2x1bW5zKTtcbiAgICAgICAgdGhpcy5zZXRTdHlsZXNCeUdyb3VwKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXQgaW5uZXJXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9pbm5lcldpZHRoO1xuICB9XG5cbiAgQElucHV0KCkgc29ydHM6IGFueVtdO1xuICBASW5wdXQoKSBzb3J0VHlwZTogU29ydFR5cGU7XG4gIEBJbnB1dCgpIGFsbFJvd3NTZWxlY3RlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgc2VsZWN0aW9uVHlwZTogU2VsZWN0aW9uVHlwZTtcbiAgQElucHV0KCkgcmVvcmRlcmFibGU6IGJvb2xlYW47XG5cbiAgZHJhZ0V2ZW50VGFyZ2V0OiBhbnk7XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQnKVxuICBASW5wdXQoKVxuICBzZXQgaGVhZGVySGVpZ2h0KHZhbDogYW55KSB7XG4gICAgaWYgKHZhbCAhPT0gJ2F1dG8nKSB7XG4gICAgICB0aGlzLl9oZWFkZXJIZWlnaHQgPSBgJHt2YWx9cHhgO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9oZWFkZXJIZWlnaHQgPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGhlYWRlckhlaWdodCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9oZWFkZXJIZWlnaHQ7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgY29sdW1ucyh2YWw6IGFueVtdKSB7XG4gICAgdGhpcy5fY29sdW1ucyA9IHZhbDtcblxuICAgIGNvbnN0IGNvbHNCeVBpbiA9IGNvbHVtbnNCeVBpbih2YWwpO1xuICAgIHRoaXMuX2NvbHVtbnNCeVBpbiA9IGNvbHVtbnNCeVBpbkFycih2YWwpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fY29sdW1uR3JvdXBXaWR0aHMgPSBjb2x1bW5Hcm91cFdpZHRocyhjb2xzQnlQaW4sIHZhbCk7XG4gICAgICB0aGlzLnNldFN0eWxlc0J5R3JvdXAoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBjb2x1bW5zKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5fY29sdW1ucztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBvZmZzZXRYKHZhbDogbnVtYmVyKSB7XG4gICAgdGhpcy5fb2Zmc2V0WCA9IHZhbDtcbiAgICB0aGlzLnNldFN0eWxlc0J5R3JvdXAoKTtcbiAgfVxuICBnZXQgb2Zmc2V0WCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb2Zmc2V0WDtcbiAgfVxuXG4gIEBPdXRwdXQoKSBzb3J0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlb3JkZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVzaXplOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjb2x1bW5Db250ZXh0bWVudSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBldmVudDogTW91c2VFdmVudDsgY29sdW1uOiBhbnkgfT4oZmFsc2UpO1xuXG4gIF9jb2x1bW5zQnlQaW46IGFueTtcbiAgX2NvbHVtbkdyb3VwV2lkdGhzOiBhbnkgPSB7XG4gICAgdG90YWw6IDEwMFxuICB9O1xuICBfaW5uZXJXaWR0aDogbnVtYmVyO1xuICBfb2Zmc2V0WDogbnVtYmVyO1xuICBfY29sdW1uczogYW55W107XG4gIF9oZWFkZXJIZWlnaHQ6IHN0cmluZztcbiAgX3N0eWxlQnlHcm91cDogeyBbcHJvcDogc3RyaW5nXToge30gfSA9IHtcbiAgICBsZWZ0OiB7fSxcbiAgICBjZW50ZXI6IHt9LFxuICAgIHJpZ2h0OiB7fVxuICB9O1xuXG4gIHByaXZhdGUgZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuICB9XG5cbiAgb25Mb25nUHJlc3NTdGFydCh7IGV2ZW50LCBtb2RlbCB9OiB7IGV2ZW50OiBhbnk7IG1vZGVsOiBhbnkgfSkge1xuICAgIG1vZGVsLmRyYWdnaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmRyYWdFdmVudFRhcmdldCA9IGV2ZW50O1xuICB9XG5cbiAgb25Mb25nUHJlc3NFbmQoeyBldmVudCwgbW9kZWwgfTogeyBldmVudDogYW55OyBtb2RlbDogYW55IH0pIHtcbiAgICB0aGlzLmRyYWdFdmVudFRhcmdldCA9IGV2ZW50O1xuXG4gICAgLy8gZGVsYXkgcmVzZXR0aW5nIHNvIHNvcnQgY2FuIGJlXG4gICAgLy8gcHJldmVudGVkIGlmIHdlIHdlcmUgZHJhZ2dpbmdcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIGRhdGF0YWJsZSBjb21wb25lbnQgY3JlYXRlcyBjb3BpZXMgZnJvbSBjb2x1bW5zIG9uIHJlb3JkZXJcbiAgICAgIC8vIHNldCBkcmFnZ2luZyB0byBmYWxzZSBvbiBuZXcgb2JqZWN0c1xuICAgICAgY29uc3QgY29sdW1uID0gdGhpcy5fY29sdW1ucy5maW5kKGMgPT4gYy4kJGlkID09PSBtb2RlbC4kJGlkKTtcbiAgICAgIGlmIChjb2x1bW4pIHtcbiAgICAgICAgY29sdW1uLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSwgNSk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLndpZHRoJylcbiAgZ2V0IGhlYWRlcldpZHRoKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsYmFySCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5uZXJXaWR0aCArICdweCc7XG4gICAgfVxuXG4gICAgcmV0dXJuICcxMDAlJztcbiAgfVxuXG4gIHRyYWNrQnlHcm91cHMoaW5kZXg6IG51bWJlciwgY29sR3JvdXA6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIGNvbEdyb3VwLnR5cGU7XG4gIH1cblxuICBjb2x1bW5UcmFja2luZ0ZuKGluZGV4OiBudW1iZXIsIGNvbHVtbjogYW55KTogYW55IHtcbiAgICByZXR1cm4gY29sdW1uLiQkaWQ7XG4gIH1cblxuICBvbkNvbHVtblJlc2l6ZWQod2lkdGg6IG51bWJlciwgY29sdW1uOiBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUpOiB2b2lkIHtcbiAgICBpZiAod2lkdGggPD0gY29sdW1uLm1pbldpZHRoKSB7XG4gICAgICB3aWR0aCA9IGNvbHVtbi5taW5XaWR0aDtcbiAgICB9IGVsc2UgaWYgKHdpZHRoID49IGNvbHVtbi5tYXhXaWR0aCkge1xuICAgICAgd2lkdGggPSBjb2x1bW4ubWF4V2lkdGg7XG4gICAgfVxuXG4gICAgdGhpcy5yZXNpemUuZW1pdCh7XG4gICAgICBjb2x1bW4sXG4gICAgICBwcmV2VmFsdWU6IGNvbHVtbi53aWR0aCxcbiAgICAgIG5ld1ZhbHVlOiB3aWR0aFxuICAgIH0pO1xuICB9XG5cbiAgb25Db2x1bW5SZW9yZGVyZWQoeyBwcmV2SW5kZXgsIG5ld0luZGV4LCBtb2RlbCB9OiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBjb2x1bW4gPSB0aGlzLmdldENvbHVtbihuZXdJbmRleCk7XG4gICAgY29sdW1uLmlzVGFyZ2V0ID0gZmFsc2U7XG4gICAgY29sdW1uLnRhcmdldE1hcmtlckNvbnRleHQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZW9yZGVyLmVtaXQoe1xuICAgICAgY29sdW1uOiBtb2RlbCxcbiAgICAgIHByZXZWYWx1ZTogcHJldkluZGV4LFxuICAgICAgbmV3VmFsdWU6IG5ld0luZGV4XG4gICAgfSk7XG4gIH1cblxuICBvblRhcmdldENoYW5nZWQoeyBwcmV2SW5kZXgsIG5ld0luZGV4LCBpbml0aWFsSW5kZXggfTogYW55KTogdm9pZCB7XG4gICAgaWYgKHByZXZJbmRleCB8fCBwcmV2SW5kZXggPT09IDApIHtcbiAgICAgIGNvbnN0IG9sZENvbHVtbiA9IHRoaXMuZ2V0Q29sdW1uKHByZXZJbmRleCk7XG4gICAgICBvbGRDb2x1bW4uaXNUYXJnZXQgPSBmYWxzZTtcbiAgICAgIG9sZENvbHVtbi50YXJnZXRNYXJrZXJDb250ZXh0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAobmV3SW5kZXggfHwgbmV3SW5kZXggPT09IDApIHtcbiAgICAgIGNvbnN0IG5ld0NvbHVtbiA9IHRoaXMuZ2V0Q29sdW1uKG5ld0luZGV4KTtcbiAgICAgIG5ld0NvbHVtbi5pc1RhcmdldCA9IHRydWU7XG5cbiAgICAgIGlmIChpbml0aWFsSW5kZXggIT09IG5ld0luZGV4KSB7XG4gICAgICAgIG5ld0NvbHVtbi50YXJnZXRNYXJrZXJDb250ZXh0ID0ge1xuICAgICAgICAgIGNsYXNzOiAndGFyZ2V0TWFya2VyICcuY29uY2F0KGluaXRpYWxJbmRleCA+IG5ld0luZGV4ID8gJ2RyYWdGcm9tUmlnaHQnIDogJ2RyYWdGcm9tTGVmdCcpXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0Q29sdW1uKGluZGV4OiBudW1iZXIpOiBhbnkge1xuICAgIGNvbnN0IGxlZnRDb2x1bW5Db3VudCA9IHRoaXMuX2NvbHVtbnNCeVBpblswXS5jb2x1bW5zLmxlbmd0aDtcbiAgICBpZiAoaW5kZXggPCBsZWZ0Q29sdW1uQ291bnQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb2x1bW5zQnlQaW5bMF0uY29sdW1uc1tpbmRleF07XG4gICAgfVxuXG4gICAgY29uc3QgY2VudGVyQ29sdW1uQ291bnQgPSB0aGlzLl9jb2x1bW5zQnlQaW5bMV0uY29sdW1ucy5sZW5ndGg7XG4gICAgaWYgKGluZGV4IDwgbGVmdENvbHVtbkNvdW50ICsgY2VudGVyQ29sdW1uQ291bnQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb2x1bW5zQnlQaW5bMV0uY29sdW1uc1tpbmRleCAtIGxlZnRDb2x1bW5Db3VudF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2NvbHVtbnNCeVBpblsyXS5jb2x1bW5zW2luZGV4IC0gbGVmdENvbHVtbkNvdW50IC0gY2VudGVyQ29sdW1uQ291bnRdO1xuICB9XG5cbiAgb25Tb3J0KHsgY29sdW1uLCBwcmV2VmFsdWUsIG5ld1ZhbHVlIH06IGFueSk6IHZvaWQge1xuICAgIC8vIGlmIHdlIGFyZSBkcmFnZ2luZyBkb24ndCBzb3J0IVxuICAgIGlmIChjb2x1bW4uZHJhZ2dpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzb3J0cyA9IHRoaXMuY2FsY05ld1NvcnRzKGNvbHVtbiwgcHJldlZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgdGhpcy5zb3J0LmVtaXQoe1xuICAgICAgc29ydHMsXG4gICAgICBjb2x1bW4sXG4gICAgICBwcmV2VmFsdWUsXG4gICAgICBuZXdWYWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgY2FsY05ld1NvcnRzKGNvbHVtbjogYW55LCBwcmV2VmFsdWU6IG51bWJlciwgbmV3VmFsdWU6IG51bWJlcik6IGFueVtdIHtcbiAgICBsZXQgaWR4ID0gMDtcblxuICAgIGlmICghdGhpcy5zb3J0cykge1xuICAgICAgdGhpcy5zb3J0cyA9IFtdO1xuICAgIH1cblxuICAgIGNvbnN0IHNvcnRzID0gdGhpcy5zb3J0cy5tYXAoKHMsIGkpID0+IHtcbiAgICAgIHMgPSB7IC4uLnMgfTtcbiAgICAgIGlmIChzLnByb3AgPT09IGNvbHVtbi5wcm9wKSB7XG4gICAgICAgIGlkeCA9IGk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcztcbiAgICB9KTtcblxuICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzb3J0cy5zcGxpY2UoaWR4LCAxKTtcbiAgICB9IGVsc2UgaWYgKHByZXZWYWx1ZSkge1xuICAgICAgc29ydHNbaWR4XS5kaXIgPSBuZXdWYWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuc29ydFR5cGUgPT09IFNvcnRUeXBlLnNpbmdsZSkge1xuICAgICAgICBzb3J0cy5zcGxpY2UoMCwgdGhpcy5zb3J0cy5sZW5ndGgpO1xuICAgICAgfVxuXG4gICAgICBzb3J0cy5wdXNoKHsgZGlyOiBuZXdWYWx1ZSwgcHJvcDogY29sdW1uLnByb3AgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNvcnRzO1xuICB9XG5cbiAgc2V0U3R5bGVzQnlHcm91cCgpIHtcbiAgICB0aGlzLl9zdHlsZUJ5R3JvdXAubGVmdCA9IHRoaXMuY2FsY1N0eWxlc0J5R3JvdXAoJ2xlZnQnKTtcbiAgICB0aGlzLl9zdHlsZUJ5R3JvdXAuY2VudGVyID0gdGhpcy5jYWxjU3R5bGVzQnlHcm91cCgnY2VudGVyJyk7XG4gICAgdGhpcy5fc3R5bGVCeUdyb3VwLnJpZ2h0ID0gdGhpcy5jYWxjU3R5bGVzQnlHcm91cCgncmlnaHQnKTtcbiAgICBpZiAoIXRoaXMuZGVzdHJveWVkKSB7XG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICBjYWxjU3R5bGVzQnlHcm91cChncm91cDogc3RyaW5nKTogYW55IHtcbiAgICBjb25zdCB3aWR0aHMgPSB0aGlzLl9jb2x1bW5Hcm91cFdpZHRocztcbiAgICBjb25zdCBvZmZzZXRYID0gdGhpcy5vZmZzZXRYO1xuXG4gICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgd2lkdGg6IGAke3dpZHRoc1tncm91cF19cHhgXG4gICAgfTtcblxuICAgIGlmIChncm91cCA9PT0gJ2NlbnRlcicpIHtcbiAgICAgIHRyYW5zbGF0ZVhZKHN0eWxlcywgb2Zmc2V0WCAqIC0xLCAwKTtcbiAgICB9IGVsc2UgaWYgKGdyb3VwID09PSAncmlnaHQnKSB7XG4gICAgICBjb25zdCB0b3RhbERpZmYgPSB3aWR0aHMudG90YWwgLSB0aGlzLmlubmVyV2lkdGg7XG4gICAgICBjb25zdCBvZmZzZXQgPSB0b3RhbERpZmYgKiAtMTtcbiAgICAgIHRyYW5zbGF0ZVhZKHN0eWxlcywgb2Zmc2V0LCAwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVzO1xuICB9XG59XG4iXX0=