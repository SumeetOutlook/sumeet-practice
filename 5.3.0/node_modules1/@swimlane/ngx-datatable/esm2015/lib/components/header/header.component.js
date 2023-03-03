import { __decorate } from "tslib";
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
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "datatable-header-cell", 4);
    ɵngcc0.ɵɵlistener("resize", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_resize_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const column_r3 = ctx.$implicit; const ctx_r4 = ɵngcc0.ɵɵnextContext(2); return ctx_r4.onColumnResized($event, column_r3); })("longPressStart", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_longPressStart_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r6 = ɵngcc0.ɵɵnextContext(2); return ctx_r6.onLongPressStart($event); })("longPressEnd", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_longPressEnd_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r7 = ɵngcc0.ɵɵnextContext(2); return ctx_r7.onLongPressEnd($event); })("sort", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_sort_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r8 = ɵngcc0.ɵɵnextContext(2); return ctx_r8.onSort($event); })("select", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_select_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r9 = ɵngcc0.ɵɵnextContext(2); return ctx_r9.select.emit($event); })("columnContextmenu", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_columnContextmenu_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r10 = ɵngcc0.ɵɵnextContext(2); return ctx_r10.columnContextmenu.emit($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r3 = ctx.$implicit;
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("resizeEnabled", column_r3.resizeable)("pressModel", column_r3)("pressEnabled", ctx_r2.reorderable && column_r3.draggable)("dragX", ctx_r2.reorderable && column_r3.draggable && column_r3.dragging)("dragY", false)("dragModel", column_r3)("dragEventTarget", ctx_r2.dragEventTarget)("headerHeight", ctx_r2.headerHeight)("isTarget", column_r3.isTarget)("targetMarkerTemplate", ctx_r2.targetMarkerTemplate)("targetMarkerContext", column_r3.targetMarkerContext)("column", column_r3)("sortType", ctx_r2.sortType)("sorts", ctx_r2.sorts)("selectionType", ctx_r2.selectionType)("sortAscendingIcon", ctx_r2.sortAscendingIcon)("sortDescendingIcon", ctx_r2.sortDescendingIcon)("allRowsSelected", ctx_r2.allRowsSelected);
} }
function DataTableHeaderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵtemplate(1, DataTableHeaderComponent_div_1_datatable_header_cell_1_Template, 1, 18, "datatable-header-cell", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const colGroup_r1 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap("datatable-row-" + colGroup_r1.type);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r0._styleByGroup[colGroup_r1.type]);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", colGroup_r1.columns)("ngForTrackBy", ctx_r0.columnTrackingFn);
} }
let DataTableHeaderComponent = class DataTableHeaderComponent {
    constructor(cd) {
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
    set innerWidth(val) {
        this._innerWidth = val;
        setTimeout(() => {
            if (this._columns) {
                const colByPin = columnsByPin(this._columns);
                this._columnGroupWidths = columnGroupWidths(colByPin, this._columns);
                this.setStylesByGroup();
            }
        });
    }
    get innerWidth() {
        return this._innerWidth;
    }
    set headerHeight(val) {
        if (val !== 'auto') {
            this._headerHeight = `${val}px`;
        }
        else {
            this._headerHeight = val;
        }
    }
    get headerHeight() {
        return this._headerHeight;
    }
    set columns(val) {
        this._columns = val;
        const colsByPin = columnsByPin(val);
        this._columnsByPin = columnsByPinArr(val);
        setTimeout(() => {
            this._columnGroupWidths = columnGroupWidths(colsByPin, val);
            this.setStylesByGroup();
        });
    }
    get columns() {
        return this._columns;
    }
    set offsetX(val) {
        this._offsetX = val;
        this.setStylesByGroup();
    }
    get offsetX() {
        return this._offsetX;
    }
    ngOnDestroy() {
        this.destroyed = true;
    }
    onLongPressStart({ event, model }) {
        model.dragging = true;
        this.dragEventTarget = event;
    }
    onLongPressEnd({ event, model }) {
        this.dragEventTarget = event;
        // delay resetting so sort can be
        // prevented if we were dragging
        setTimeout(() => {
            // datatable component creates copies from columns on reorder
            // set dragging to false on new objects
            const column = this._columns.find(c => c.$$id === model.$$id);
            if (column) {
                column.dragging = false;
            }
        }, 5);
    }
    get headerWidth() {
        if (this.scrollbarH) {
            return this.innerWidth + 'px';
        }
        return '100%';
    }
    trackByGroups(index, colGroup) {
        return colGroup.type;
    }
    columnTrackingFn(index, column) {
        return column.$$id;
    }
    onColumnResized(width, column) {
        if (width <= column.minWidth) {
            width = column.minWidth;
        }
        else if (width >= column.maxWidth) {
            width = column.maxWidth;
        }
        this.resize.emit({
            column,
            prevValue: column.width,
            newValue: width
        });
    }
    onColumnReordered({ prevIndex, newIndex, model }) {
        const column = this.getColumn(newIndex);
        column.isTarget = false;
        column.targetMarkerContext = undefined;
        this.reorder.emit({
            column: model,
            prevValue: prevIndex,
            newValue: newIndex
        });
    }
    onTargetChanged({ prevIndex, newIndex, initialIndex }) {
        if (prevIndex || prevIndex === 0) {
            const oldColumn = this.getColumn(prevIndex);
            oldColumn.isTarget = false;
            oldColumn.targetMarkerContext = undefined;
        }
        if (newIndex || newIndex === 0) {
            const newColumn = this.getColumn(newIndex);
            newColumn.isTarget = true;
            if (initialIndex !== newIndex) {
                newColumn.targetMarkerContext = {
                    class: 'targetMarker '.concat(initialIndex > newIndex ? 'dragFromRight' : 'dragFromLeft')
                };
            }
        }
    }
    getColumn(index) {
        const leftColumnCount = this._columnsByPin[0].columns.length;
        if (index < leftColumnCount) {
            return this._columnsByPin[0].columns[index];
        }
        const centerColumnCount = this._columnsByPin[1].columns.length;
        if (index < leftColumnCount + centerColumnCount) {
            return this._columnsByPin[1].columns[index - leftColumnCount];
        }
        return this._columnsByPin[2].columns[index - leftColumnCount - centerColumnCount];
    }
    onSort({ column, prevValue, newValue }) {
        // if we are dragging don't sort!
        if (column.dragging) {
            return;
        }
        const sorts = this.calcNewSorts(column, prevValue, newValue);
        this.sort.emit({
            sorts,
            column,
            prevValue,
            newValue
        });
    }
    calcNewSorts(column, prevValue, newValue) {
        let idx = 0;
        if (!this.sorts) {
            this.sorts = [];
        }
        const sorts = this.sorts.map((s, i) => {
            s = Object.assign({}, s);
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
    }
    setStylesByGroup() {
        this._styleByGroup.left = this.calcStylesByGroup('left');
        this._styleByGroup.center = this.calcStylesByGroup('center');
        this._styleByGroup.right = this.calcStylesByGroup('right');
        if (!this.destroyed) {
            this.cd.detectChanges();
        }
    }
    calcStylesByGroup(group) {
        const widths = this._columnGroupWidths;
        const offsetX = this.offsetX;
        const styles = {
            width: `${widths[group]}px`
        };
        if (group === 'center') {
            translateXY(styles, offsetX * -1, 0);
        }
        else if (group === 'right') {
            const totalDiff = widths.total - this.innerWidth;
            const offset = totalDiff * -1;
            translateXY(styles, offset, 0);
        }
        return styles;
    }
};
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
DataTableHeaderComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DataTableHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'datatable-header',
                template: `
    <div
      orderable
      (reorder)="onColumnReordered($event)"
      (targetChanged)="onTargetChanged($event)"
      [style.width.px]="_columnGroupWidths.total"
      class="datatable-header-inner"
    >
      <div
        *ngFor="let colGroup of _columnsByPin; trackBy: trackByGroups"
        [class]="'datatable-row-' + colGroup.type"
        [ngStyle]="_styleByGroup[colGroup.type]"
      >
        <datatable-header-cell
          *ngFor="let column of colGroup.columns; trackBy: columnTrackingFn"
          resizeable
          [resizeEnabled]="column.resizeable"
          (resize)="onColumnResized($event, column)"
          long-press
          [pressModel]="column"
          [pressEnabled]="reorderable && column.draggable"
          (longPressStart)="onLongPressStart($event)"
          (longPressEnd)="onLongPressEnd($event)"
          draggable
          [dragX]="reorderable && column.draggable && column.dragging"
          [dragY]="false"
          [dragModel]="column"
          [dragEventTarget]="dragEventTarget"
          [headerHeight]="headerHeight"
          [isTarget]="column.isTarget"
          [targetMarkerTemplate]="targetMarkerTemplate"
          [targetMarkerContext]="column.targetMarkerContext"
          [column]="column"
          [sortType]="sortType"
          [sorts]="sorts"
          [selectionType]="selectionType"
          [sortAscendingIcon]="sortAscendingIcon"
          [sortDescendingIcon]="sortDescendingIcon"
          [allRowsSelected]="allRowsSelected"
          (sort)="onSort($event)"
          (select)="select.emit($event)"
          (columnContextmenu)="columnContextmenu.emit($event)"
        >
        </datatable-header-cell>
      </div>
    </div>
  `,
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
export { DataTableHeaderComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2xpYi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixZQUFZLEVBQ1osS0FBSyxFQUNMLFdBQVcsRUFDWCxpQkFBaUIsRUFDakIsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUdqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3RHBELElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0FBQUcsSUE0RnRDLFlBQW9CLEVBQXFCO0FBQUksUUFBekIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7QUFBQyxRQXRCaEMsU0FBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ3pELFFBQVksWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQzVELFFBQVksV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQzNELFFBQVksV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQzNELFFBQVksc0JBQWlCLEdBQUcsSUFBSSxZQUFZLENBQXFDLEtBQUssQ0FBQyxDQUFDO0FBQzVGLFFBRUUsdUJBQWtCLEdBQVE7QUFDNUIsWUFBSSxLQUFLLEVBQUUsR0FBRztBQUNkLFNBQUcsQ0FBQztBQUNKLFFBSUUsa0JBQWEsR0FBMkI7QUFDMUMsWUFBSSxJQUFJLEVBQUUsRUFBRTtBQUNaLFlBQUksTUFBTSxFQUFFLEVBQUU7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O0FBQWEsSUFEWixLQUFLLEVBQUU7QUFDVix1REFHRztBQUtTO0FBQWEsSUFBdEIsTUFBTSxFQUFFO0FBQUMsc0RBQTZDO0FBQzdDO0FBQWEsSUFBdEIsTUFBTSxFQUFFO0FBQUMseURBQWdEO0FBQ2hEO0FBQWEsSUFBdEIsTUFBTSxFQUFFO0FBQUMsd0RBQStDO0FBQy9DO0FBQWEsSUFBdEIsTUFBTSxFQUFFO0FBQUMsd0RBQStDO0FBQy9DO0FBQWEsSUFBdEIsTUFBTSxFQUFFO0FBQUMsbUVBQWdGO0FBNkMxRjtBQUFhLElBRFosV0FBVyxDQUFDLGFBQWEsQ0FBQztBQUM3QiwyREFNRztBQTdIVSx3QkFBd0Isb0JBdERwQyxTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUU7U0FBa0IsVUFDNUI7RUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dEQThDVCxVQUNELElBQUk7Q0FBRTtLQUNKLEtBQUssRUFBRSxrQkFBa0I7T0FDMUI7SUFDRDs7R0FBZSxFQUFFO0lBQXVCLENBQUMsTUFBTSxNQUNoRCxDQUFDLElBQ1c7QUFBd0IsQ0F3UXBDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFDRDtBQUFDLFNBelFZLHdCQUF3QjtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIEhvc3RCaW5kaW5nLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbHVtbnNCeVBpbiwgY29sdW1uR3JvdXBXaWR0aHMsIGNvbHVtbnNCeVBpbkFyciB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbHVtbic7XG5pbXBvcnQgeyBTb3J0VHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzL3NvcnQudHlwZSc7XG5pbXBvcnQgeyBTZWxlY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMvc2VsZWN0aW9uLnR5cGUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlIH0gZnJvbSAnLi4vY29sdW1ucy9jb2x1bW4uZGlyZWN0aXZlJztcbmltcG9ydCB7IHRyYW5zbGF0ZVhZIH0gZnJvbSAnLi4vLi4vdXRpbHMvdHJhbnNsYXRlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0YXRhYmxlLWhlYWRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdlxuICAgICAgb3JkZXJhYmxlXG4gICAgICAocmVvcmRlcik9XCJvbkNvbHVtblJlb3JkZXJlZCgkZXZlbnQpXCJcbiAgICAgICh0YXJnZXRDaGFuZ2VkKT1cIm9uVGFyZ2V0Q2hhbmdlZCgkZXZlbnQpXCJcbiAgICAgIFtzdHlsZS53aWR0aC5weF09XCJfY29sdW1uR3JvdXBXaWR0aHMudG90YWxcIlxuICAgICAgY2xhc3M9XCJkYXRhdGFibGUtaGVhZGVyLWlubmVyXCJcbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgICpuZ0Zvcj1cImxldCBjb2xHcm91cCBvZiBfY29sdW1uc0J5UGluOyB0cmFja0J5OiB0cmFja0J5R3JvdXBzXCJcbiAgICAgICAgW2NsYXNzXT1cIidkYXRhdGFibGUtcm93LScgKyBjb2xHcm91cC50eXBlXCJcbiAgICAgICAgW25nU3R5bGVdPVwiX3N0eWxlQnlHcm91cFtjb2xHcm91cC50eXBlXVwiXG4gICAgICA+XG4gICAgICAgIDxkYXRhdGFibGUtaGVhZGVyLWNlbGxcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbEdyb3VwLmNvbHVtbnM7IHRyYWNrQnk6IGNvbHVtblRyYWNraW5nRm5cIlxuICAgICAgICAgIHJlc2l6ZWFibGVcbiAgICAgICAgICBbcmVzaXplRW5hYmxlZF09XCJjb2x1bW4ucmVzaXplYWJsZVwiXG4gICAgICAgICAgKHJlc2l6ZSk9XCJvbkNvbHVtblJlc2l6ZWQoJGV2ZW50LCBjb2x1bW4pXCJcbiAgICAgICAgICBsb25nLXByZXNzXG4gICAgICAgICAgW3ByZXNzTW9kZWxdPVwiY29sdW1uXCJcbiAgICAgICAgICBbcHJlc3NFbmFibGVkXT1cInJlb3JkZXJhYmxlICYmIGNvbHVtbi5kcmFnZ2FibGVcIlxuICAgICAgICAgIChsb25nUHJlc3NTdGFydCk9XCJvbkxvbmdQcmVzc1N0YXJ0KCRldmVudClcIlxuICAgICAgICAgIChsb25nUHJlc3NFbmQpPVwib25Mb25nUHJlc3NFbmQoJGV2ZW50KVwiXG4gICAgICAgICAgZHJhZ2dhYmxlXG4gICAgICAgICAgW2RyYWdYXT1cInJlb3JkZXJhYmxlICYmIGNvbHVtbi5kcmFnZ2FibGUgJiYgY29sdW1uLmRyYWdnaW5nXCJcbiAgICAgICAgICBbZHJhZ1ldPVwiZmFsc2VcIlxuICAgICAgICAgIFtkcmFnTW9kZWxdPVwiY29sdW1uXCJcbiAgICAgICAgICBbZHJhZ0V2ZW50VGFyZ2V0XT1cImRyYWdFdmVudFRhcmdldFwiXG4gICAgICAgICAgW2hlYWRlckhlaWdodF09XCJoZWFkZXJIZWlnaHRcIlxuICAgICAgICAgIFtpc1RhcmdldF09XCJjb2x1bW4uaXNUYXJnZXRcIlxuICAgICAgICAgIFt0YXJnZXRNYXJrZXJUZW1wbGF0ZV09XCJ0YXJnZXRNYXJrZXJUZW1wbGF0ZVwiXG4gICAgICAgICAgW3RhcmdldE1hcmtlckNvbnRleHRdPVwiY29sdW1uLnRhcmdldE1hcmtlckNvbnRleHRcIlxuICAgICAgICAgIFtjb2x1bW5dPVwiY29sdW1uXCJcbiAgICAgICAgICBbc29ydFR5cGVdPVwic29ydFR5cGVcIlxuICAgICAgICAgIFtzb3J0c109XCJzb3J0c1wiXG4gICAgICAgICAgW3NlbGVjdGlvblR5cGVdPVwic2VsZWN0aW9uVHlwZVwiXG4gICAgICAgICAgW3NvcnRBc2NlbmRpbmdJY29uXT1cInNvcnRBc2NlbmRpbmdJY29uXCJcbiAgICAgICAgICBbc29ydERlc2NlbmRpbmdJY29uXT1cInNvcnREZXNjZW5kaW5nSWNvblwiXG4gICAgICAgICAgW2FsbFJvd3NTZWxlY3RlZF09XCJhbGxSb3dzU2VsZWN0ZWRcIlxuICAgICAgICAgIChzb3J0KT1cIm9uU29ydCgkZXZlbnQpXCJcbiAgICAgICAgICAoc2VsZWN0KT1cInNlbGVjdC5lbWl0KCRldmVudClcIlxuICAgICAgICAgIChjb2x1bW5Db250ZXh0bWVudSk9XCJjb2x1bW5Db250ZXh0bWVudS5lbWl0KCRldmVudClcIlxuICAgICAgICA+XG4gICAgICAgIDwvZGF0YXRhYmxlLWhlYWRlci1jZWxsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2RhdGF0YWJsZS1oZWFkZXInXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHNvcnRBc2NlbmRpbmdJY29uOiBhbnk7XG4gIEBJbnB1dCgpIHNvcnREZXNjZW5kaW5nSWNvbjogYW55O1xuICBASW5wdXQoKSBzY3JvbGxiYXJIOiBib29sZWFuO1xuICBASW5wdXQoKSBkZWFsc1dpdGhHcm91cDogYm9vbGVhbjtcbiAgQElucHV0KCkgdGFyZ2V0TWFya2VyVGVtcGxhdGU6IGFueTtcblxuICB0YXJnZXRNYXJrZXJDb250ZXh0OiBhbnk7XG5cbiAgQElucHV0KCkgc2V0IGlubmVyV2lkdGgodmFsOiBudW1iZXIpIHtcbiAgICB0aGlzLl9pbm5lcldpZHRoID0gdmFsO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2NvbHVtbnMpIHtcbiAgICAgICAgY29uc3QgY29sQnlQaW4gPSBjb2x1bW5zQnlQaW4odGhpcy5fY29sdW1ucyk7XG4gICAgICAgIHRoaXMuX2NvbHVtbkdyb3VwV2lkdGhzID0gY29sdW1uR3JvdXBXaWR0aHMoY29sQnlQaW4sIHRoaXMuX2NvbHVtbnMpO1xuICAgICAgICB0aGlzLnNldFN0eWxlc0J5R3JvdXAoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldCBpbm5lcldpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2lubmVyV2lkdGg7XG4gIH1cblxuICBASW5wdXQoKSBzb3J0czogYW55W107XG4gIEBJbnB1dCgpIHNvcnRUeXBlOiBTb3J0VHlwZTtcbiAgQElucHV0KCkgYWxsUm93c1NlbGVjdGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBzZWxlY3Rpb25UeXBlOiBTZWxlY3Rpb25UeXBlO1xuICBASW5wdXQoKSByZW9yZGVyYWJsZTogYm9vbGVhbjtcblxuICBkcmFnRXZlbnRUYXJnZXQ6IGFueTtcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodCcpXG4gIEBJbnB1dCgpXG4gIHNldCBoZWFkZXJIZWlnaHQodmFsOiBhbnkpIHtcbiAgICBpZiAodmFsICE9PSAnYXV0bycpIHtcbiAgICAgIHRoaXMuX2hlYWRlckhlaWdodCA9IGAke3ZhbH1weGA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hlYWRlckhlaWdodCA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBnZXQgaGVhZGVySGVpZ2h0KCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWRlckhlaWdodDtcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCBjb2x1bW5zKHZhbDogYW55W10pIHtcbiAgICB0aGlzLl9jb2x1bW5zID0gdmFsO1xuXG4gICAgY29uc3QgY29sc0J5UGluID0gY29sdW1uc0J5UGluKHZhbCk7XG4gICAgdGhpcy5fY29sdW1uc0J5UGluID0gY29sdW1uc0J5UGluQXJyKHZhbCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9jb2x1bW5Hcm91cFdpZHRocyA9IGNvbHVtbkdyb3VwV2lkdGhzKGNvbHNCeVBpbiwgdmFsKTtcbiAgICAgIHRoaXMuc2V0U3R5bGVzQnlHcm91cCgpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IGNvbHVtbnMoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl9jb2x1bW5zO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG9mZnNldFgodmFsOiBudW1iZXIpIHtcbiAgICB0aGlzLl9vZmZzZXRYID0gdmFsO1xuICAgIHRoaXMuc2V0U3R5bGVzQnlHcm91cCgpO1xuICB9XG4gIGdldCBvZmZzZXRYKCkge1xuICAgIHJldHVybiB0aGlzLl9vZmZzZXRYO1xuICB9XG5cbiAgQE91dHB1dCgpIHNvcnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVvcmRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZXNpemU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNvbHVtbkNvbnRleHRtZW51ID0gbmV3IEV2ZW50RW1pdHRlcjx7IGV2ZW50OiBNb3VzZUV2ZW50OyBjb2x1bW46IGFueSB9PihmYWxzZSk7XG5cbiAgX2NvbHVtbnNCeVBpbjogYW55O1xuICBfY29sdW1uR3JvdXBXaWR0aHM6IGFueSA9IHtcbiAgICB0b3RhbDogMTAwXG4gIH07XG4gIF9pbm5lcldpZHRoOiBudW1iZXI7XG4gIF9vZmZzZXRYOiBudW1iZXI7XG4gIF9jb2x1bW5zOiBhbnlbXTtcbiAgX2hlYWRlckhlaWdodDogc3RyaW5nO1xuICBfc3R5bGVCeUdyb3VwOiB7IFtwcm9wOiBzdHJpbmddOiB7fSB9ID0ge1xuICAgIGxlZnQ6IHt9LFxuICAgIGNlbnRlcjoge30sXG4gICAgcmlnaHQ6IHt9XG4gIH07XG5cbiAgcHJpdmF0ZSBkZXN0cm95ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG4gIH1cblxuICBvbkxvbmdQcmVzc1N0YXJ0KHsgZXZlbnQsIG1vZGVsIH06IHsgZXZlbnQ6IGFueTsgbW9kZWw6IGFueSB9KSB7XG4gICAgbW9kZWwuZHJhZ2dpbmcgPSB0cnVlO1xuICAgIHRoaXMuZHJhZ0V2ZW50VGFyZ2V0ID0gZXZlbnQ7XG4gIH1cblxuICBvbkxvbmdQcmVzc0VuZCh7IGV2ZW50LCBtb2RlbCB9OiB7IGV2ZW50OiBhbnk7IG1vZGVsOiBhbnkgfSkge1xuICAgIHRoaXMuZHJhZ0V2ZW50VGFyZ2V0ID0gZXZlbnQ7XG5cbiAgICAvLyBkZWxheSByZXNldHRpbmcgc28gc29ydCBjYW4gYmVcbiAgICAvLyBwcmV2ZW50ZWQgaWYgd2Ugd2VyZSBkcmFnZ2luZ1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gZGF0YXRhYmxlIGNvbXBvbmVudCBjcmVhdGVzIGNvcGllcyBmcm9tIGNvbHVtbnMgb24gcmVvcmRlclxuICAgICAgLy8gc2V0IGRyYWdnaW5nIHRvIGZhbHNlIG9uIG5ldyBvYmplY3RzXG4gICAgICBjb25zdCBjb2x1bW4gPSB0aGlzLl9jb2x1bW5zLmZpbmQoYyA9PiBjLiQkaWQgPT09IG1vZGVsLiQkaWQpO1xuICAgICAgaWYgKGNvbHVtbikge1xuICAgICAgICBjb2x1bW4uZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LCA1KTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgnKVxuICBnZXQgaGVhZGVyV2lkdGgoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5zY3JvbGxiYXJIKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbm5lcldpZHRoICsgJ3B4JztcbiAgICB9XG5cbiAgICByZXR1cm4gJzEwMCUnO1xuICB9XG5cbiAgdHJhY2tCeUdyb3VwcyhpbmRleDogbnVtYmVyLCBjb2xHcm91cDogYW55KTogYW55IHtcbiAgICByZXR1cm4gY29sR3JvdXAudHlwZTtcbiAgfVxuXG4gIGNvbHVtblRyYWNraW5nRm4oaW5kZXg6IG51bWJlciwgY29sdW1uOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBjb2x1bW4uJCRpZDtcbiAgfVxuXG4gIG9uQ29sdW1uUmVzaXplZCh3aWR0aDogbnVtYmVyLCBjb2x1bW46IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSk6IHZvaWQge1xuICAgIGlmICh3aWR0aCA8PSBjb2x1bW4ubWluV2lkdGgpIHtcbiAgICAgIHdpZHRoID0gY29sdW1uLm1pbldpZHRoO1xuICAgIH0gZWxzZSBpZiAod2lkdGggPj0gY29sdW1uLm1heFdpZHRoKSB7XG4gICAgICB3aWR0aCA9IGNvbHVtbi5tYXhXaWR0aDtcbiAgICB9XG5cbiAgICB0aGlzLnJlc2l6ZS5lbWl0KHtcbiAgICAgIGNvbHVtbixcbiAgICAgIHByZXZWYWx1ZTogY29sdW1uLndpZHRoLFxuICAgICAgbmV3VmFsdWU6IHdpZHRoXG4gICAgfSk7XG4gIH1cblxuICBvbkNvbHVtblJlb3JkZXJlZCh7IHByZXZJbmRleCwgbmV3SW5kZXgsIG1vZGVsIH06IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IGNvbHVtbiA9IHRoaXMuZ2V0Q29sdW1uKG5ld0luZGV4KTtcbiAgICBjb2x1bW4uaXNUYXJnZXQgPSBmYWxzZTtcbiAgICBjb2x1bW4udGFyZ2V0TWFya2VyQ29udGV4dCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnJlb3JkZXIuZW1pdCh7XG4gICAgICBjb2x1bW46IG1vZGVsLFxuICAgICAgcHJldlZhbHVlOiBwcmV2SW5kZXgsXG4gICAgICBuZXdWYWx1ZTogbmV3SW5kZXhcbiAgICB9KTtcbiAgfVxuXG4gIG9uVGFyZ2V0Q2hhbmdlZCh7IHByZXZJbmRleCwgbmV3SW5kZXgsIGluaXRpYWxJbmRleCB9OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAocHJldkluZGV4IHx8IHByZXZJbmRleCA9PT0gMCkge1xuICAgICAgY29uc3Qgb2xkQ29sdW1uID0gdGhpcy5nZXRDb2x1bW4ocHJldkluZGV4KTtcbiAgICAgIG9sZENvbHVtbi5pc1RhcmdldCA9IGZhbHNlO1xuICAgICAgb2xkQ29sdW1uLnRhcmdldE1hcmtlckNvbnRleHQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChuZXdJbmRleCB8fCBuZXdJbmRleCA9PT0gMCkge1xuICAgICAgY29uc3QgbmV3Q29sdW1uID0gdGhpcy5nZXRDb2x1bW4obmV3SW5kZXgpO1xuICAgICAgbmV3Q29sdW1uLmlzVGFyZ2V0ID0gdHJ1ZTtcblxuICAgICAgaWYgKGluaXRpYWxJbmRleCAhPT0gbmV3SW5kZXgpIHtcbiAgICAgICAgbmV3Q29sdW1uLnRhcmdldE1hcmtlckNvbnRleHQgPSB7XG4gICAgICAgICAgY2xhc3M6ICd0YXJnZXRNYXJrZXIgJy5jb25jYXQoaW5pdGlhbEluZGV4ID4gbmV3SW5kZXggPyAnZHJhZ0Zyb21SaWdodCcgOiAnZHJhZ0Zyb21MZWZ0JylcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRDb2x1bW4oaW5kZXg6IG51bWJlcik6IGFueSB7XG4gICAgY29uc3QgbGVmdENvbHVtbkNvdW50ID0gdGhpcy5fY29sdW1uc0J5UGluWzBdLmNvbHVtbnMubGVuZ3RoO1xuICAgIGlmIChpbmRleCA8IGxlZnRDb2x1bW5Db3VudCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbHVtbnNCeVBpblswXS5jb2x1bW5zW2luZGV4XTtcbiAgICB9XG5cbiAgICBjb25zdCBjZW50ZXJDb2x1bW5Db3VudCA9IHRoaXMuX2NvbHVtbnNCeVBpblsxXS5jb2x1bW5zLmxlbmd0aDtcbiAgICBpZiAoaW5kZXggPCBsZWZ0Q29sdW1uQ291bnQgKyBjZW50ZXJDb2x1bW5Db3VudCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbHVtbnNCeVBpblsxXS5jb2x1bW5zW2luZGV4IC0gbGVmdENvbHVtbkNvdW50XTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fY29sdW1uc0J5UGluWzJdLmNvbHVtbnNbaW5kZXggLSBsZWZ0Q29sdW1uQ291bnQgLSBjZW50ZXJDb2x1bW5Db3VudF07XG4gIH1cblxuICBvblNvcnQoeyBjb2x1bW4sIHByZXZWYWx1ZSwgbmV3VmFsdWUgfTogYW55KTogdm9pZCB7XG4gICAgLy8gaWYgd2UgYXJlIGRyYWdnaW5nIGRvbid0IHNvcnQhXG4gICAgaWYgKGNvbHVtbi5kcmFnZ2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNvcnRzID0gdGhpcy5jYWxjTmV3U29ydHMoY29sdW1uLCBwcmV2VmFsdWUsIG5ld1ZhbHVlKTtcbiAgICB0aGlzLnNvcnQuZW1pdCh7XG4gICAgICBzb3J0cyxcbiAgICAgIGNvbHVtbixcbiAgICAgIHByZXZWYWx1ZSxcbiAgICAgIG5ld1ZhbHVlXG4gICAgfSk7XG4gIH1cblxuICBjYWxjTmV3U29ydHMoY29sdW1uOiBhbnksIHByZXZWYWx1ZTogbnVtYmVyLCBuZXdWYWx1ZTogbnVtYmVyKTogYW55W10ge1xuICAgIGxldCBpZHggPSAwO1xuXG4gICAgaWYgKCF0aGlzLnNvcnRzKSB7XG4gICAgICB0aGlzLnNvcnRzID0gW107XG4gICAgfVxuXG4gICAgY29uc3Qgc29ydHMgPSB0aGlzLnNvcnRzLm1hcCgocywgaSkgPT4ge1xuICAgICAgcyA9IHsgLi4ucyB9O1xuICAgICAgaWYgKHMucHJvcCA9PT0gY29sdW1uLnByb3ApIHtcbiAgICAgICAgaWR4ID0gaTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzO1xuICAgIH0pO1xuXG4gICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNvcnRzLnNwbGljZShpZHgsIDEpO1xuICAgIH0gZWxzZSBpZiAocHJldlZhbHVlKSB7XG4gICAgICBzb3J0c1tpZHhdLmRpciA9IG5ld1ZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5zb3J0VHlwZSA9PT0gU29ydFR5cGUuc2luZ2xlKSB7XG4gICAgICAgIHNvcnRzLnNwbGljZSgwLCB0aGlzLnNvcnRzLmxlbmd0aCk7XG4gICAgICB9XG5cbiAgICAgIHNvcnRzLnB1c2goeyBkaXI6IG5ld1ZhbHVlLCBwcm9wOiBjb2x1bW4ucHJvcCB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc29ydHM7XG4gIH1cblxuICBzZXRTdHlsZXNCeUdyb3VwKCkge1xuICAgIHRoaXMuX3N0eWxlQnlHcm91cC5sZWZ0ID0gdGhpcy5jYWxjU3R5bGVzQnlHcm91cCgnbGVmdCcpO1xuICAgIHRoaXMuX3N0eWxlQnlHcm91cC5jZW50ZXIgPSB0aGlzLmNhbGNTdHlsZXNCeUdyb3VwKCdjZW50ZXInKTtcbiAgICB0aGlzLl9zdHlsZUJ5R3JvdXAucmlnaHQgPSB0aGlzLmNhbGNTdHlsZXNCeUdyb3VwKCdyaWdodCcpO1xuICAgIGlmICghdGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIGNhbGNTdHlsZXNCeUdyb3VwKGdyb3VwOiBzdHJpbmcpOiBhbnkge1xuICAgIGNvbnN0IHdpZHRocyA9IHRoaXMuX2NvbHVtbkdyb3VwV2lkdGhzO1xuICAgIGNvbnN0IG9mZnNldFggPSB0aGlzLm9mZnNldFg7XG5cbiAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICB3aWR0aDogYCR7d2lkdGhzW2dyb3VwXX1weGBcbiAgICB9O1xuXG4gICAgaWYgKGdyb3VwID09PSAnY2VudGVyJykge1xuICAgICAgdHJhbnNsYXRlWFkoc3R5bGVzLCBvZmZzZXRYICogLTEsIDApO1xuICAgIH0gZWxzZSBpZiAoZ3JvdXAgPT09ICdyaWdodCcpIHtcbiAgICAgIGNvbnN0IHRvdGFsRGlmZiA9IHdpZHRocy50b3RhbCAtIHRoaXMuaW5uZXJXaWR0aDtcbiAgICAgIGNvbnN0IG9mZnNldCA9IHRvdGFsRGlmZiAqIC0xO1xuICAgICAgdHJhbnNsYXRlWFkoc3R5bGVzLCBvZmZzZXQsIDApO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cbn1cbiJdfQ==