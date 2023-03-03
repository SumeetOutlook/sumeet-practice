import { __assign, __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../body-row.component';

function DataTableSummaryRowComponent_datatable_body_row_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "datatable-body-row", 1);
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("innerWidth", ctx_r0.innerWidth)("offsetX", ctx_r0.offsetX)("columns", ctx_r0._internalColumns)("rowHeight", ctx_r0.rowHeight)("row", ctx_r0.summaryRow)("rowIndex", 0 - 1);
} }
function defaultSumFunc(cells) {
    var cellsWithValues = cells.filter(function (cell) { return !!cell; });
    if (!cellsWithValues.length) {
        return null;
    }
    if (cellsWithValues.some(function (cell) { return typeof cell !== 'number'; })) {
        return null;
    }
    return cellsWithValues.reduce(function (res, cell) { return res + cell; });
}
function noopSumFunc(cells) {
    return null;
}
var DataTableSummaryRowComponent = /** @class */ (function () {
    function DataTableSummaryRowComponent() {
        this.summaryRow = {};
    }
    DataTableSummaryRowComponent.prototype.ngOnChanges = function () {
        if (!this.columns || !this.rows) {
            return;
        }
        this.updateInternalColumns();
        this.updateValues();
    };
    DataTableSummaryRowComponent.prototype.updateInternalColumns = function () {
        this._internalColumns = this.columns.map(function (col) { return (__assign(__assign({}, col), { cellTemplate: col.summaryTemplate })); });
    };
    DataTableSummaryRowComponent.prototype.updateValues = function () {
        var _this = this;
        this.summaryRow = {};
        this.columns
            .filter(function (col) { return !col.summaryTemplate; })
            .forEach(function (col) {
            var cellsFromSingleColumn = _this.rows.map(function (row) { return row[col.prop]; });
            var sumFunc = _this.getSummaryFunction(col);
            _this.summaryRow[col.prop] = col.pipe
                ? col.pipe.transform(sumFunc(cellsFromSingleColumn))
                : sumFunc(cellsFromSingleColumn);
        });
    };
    DataTableSummaryRowComponent.prototype.getSummaryFunction = function (column) {
        if (column.summaryFunc === undefined) {
            return defaultSumFunc;
        }
        else if (column.summaryFunc === null) {
            return noopSumFunc;
        }
        else {
            return column.summaryFunc;
        }
    };
    __decorate([
        Input()
    ], DataTableSummaryRowComponent.prototype, "rows", void 0);
    __decorate([
        Input()
    ], DataTableSummaryRowComponent.prototype, "columns", void 0);
    __decorate([
        Input()
    ], DataTableSummaryRowComponent.prototype, "rowHeight", void 0);
    __decorate([
        Input()
    ], DataTableSummaryRowComponent.prototype, "offsetX", void 0);
    __decorate([
        Input()
    ], DataTableSummaryRowComponent.prototype, "innerWidth", void 0);
DataTableSummaryRowComponent.ɵfac = function DataTableSummaryRowComponent_Factory(t) { return new (t || DataTableSummaryRowComponent)(); };
DataTableSummaryRowComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DataTableSummaryRowComponent, selectors: [["datatable-summary-row"]], hostAttrs: [1, "datatable-summary-row"], inputs: { rows: "rows", columns: "columns", rowHeight: "rowHeight", offsetX: "offsetX", innerWidth: "innerWidth" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["tabindex", "-1", 3, "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", 4, "ngIf"], ["tabindex", "-1", 3, "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex"]], template: function DataTableSummaryRowComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, DataTableSummaryRowComponent_datatable_body_row_0_Template, 1, 6, "datatable-body-row", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.summaryRow && ctx._internalColumns);
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.DataTableBodyRowComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DataTableSummaryRowComponent, [{
        type: Component,
        args: [{
                selector: 'datatable-summary-row',
                template: "\n    <datatable-body-row\n      *ngIf=\"summaryRow && _internalColumns\"\n      tabindex=\"-1\"\n      [innerWidth]=\"innerWidth\"\n      [offsetX]=\"offsetX\"\n      [columns]=\"_internalColumns\"\n      [rowHeight]=\"rowHeight\"\n      [row]=\"summaryRow\"\n      [rowIndex]=\"-1\"\n    >\n    </datatable-body-row>\n  ",
                host: {
                    class: 'datatable-summary-row'
                }
            }]
    }], function () { return []; }, { rows: [{
            type: Input
        }], columns: [{
            type: Input
        }], rowHeight: [{
            type: Input
        }], offsetX: [{
            type: Input
        }], innerWidth: [{
            type: Input
        }] }); })();
    return DataTableSummaryRowComponent;
}());
export { DataTableSummaryRowComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeS1yb3cuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovQHN3aW1sYW5lL25neC1kYXRhdGFibGUvbGliL2NvbXBvbmVudHMvYm9keS9zdW1tYXJ5L3N1bW1hcnktcm93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXlDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7OztBQVV4RixTQUFTLGNBQWMsQ0FBQyxLQUFZO0FBQUksSUFDdEMsSUFBTSxlQUFlLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQU4sQ0FBTSxDQUFDLENBQUM7QUFDdkQsSUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRTtBQUMvQixRQUFJLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLEtBQUc7QUFDSCxJQUFFLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBeEIsQ0FBd0IsQ0FBQyxFQUFFO0FBQzlELFFBQUksT0FBTyxJQUFJLENBQUM7QUFDaEIsS0FBRztBQUNILElBQ0UsT0FBTyxlQUFlLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBRyxFQUFFLElBQUksSUFBSyxPQUFBLEdBQUcsR0FBRyxJQUFJLEVBQVYsQ0FBVSxDQUFDLENBQUM7QUFDM0QsQ0FBQztBQUVELFNBQVMsV0FBVyxDQUFDLEtBQVk7QUFBSSxJQUNuQyxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFxQkQ7QUFBZ0UsSUFBaEU7QUFBMEMsUUFTeEMsZUFBVSxHQUFRLEVBQUUsQ0FBQztBQUN2QixJQXdDQSxDQUFDO0FBQ0QsSUF4Q0Usa0RBQVcsR0FBWDtBQUFjLFFBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO0FBQ3JDLFlBQU0sT0FBTztBQUNiLFNBQUs7QUFDTCxRQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0FBQ2pDLFFBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQ3hCLElBQUUsQ0FBQztBQUVILElBQVUsNERBQXFCLEdBQTdCO0FBQWMsUUFDWixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSx1QkFDM0MsR0FBRyxLQUNOLFlBQVksRUFBRSxHQUFHLENBQUMsZUFBZSxJQUNqQyxFQUg4QyxDQUc5QyxDQUFDLENBQUM7QUFDUixJQUFFLENBQUM7QUFFSCxJQUFVLG1EQUFZLEdBQXBCO0FBQWMsUUFBZCxpQkFhQztBQUNILFFBYkksSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDekIsUUFDSSxJQUFJLENBQUMsT0FBTztBQUNoQixhQUFPLE1BQU0sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBcEIsQ0FBb0IsQ0FBQztBQUMxQyxhQUFPLE9BQU8sQ0FBQyxVQUFBLEdBQUc7QUFBSSxZQUNkLElBQU0scUJBQXFCLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFiLENBQWEsQ0FBQyxDQUFDO0FBQzFFLFlBQVEsSUFBTSxPQUFPLEdBQUcsS0FBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3JELFlBQ1EsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUk7QUFDNUMsZ0JBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQzlELGdCQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUMzQyxRQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ1QsSUFBRSxDQUFDO0FBRUgsSUFBVSx5REFBa0IsR0FBMUIsVUFBMkIsTUFBc0I7QUFBSSxRQUNuRCxJQUFJLE1BQU0sQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO0FBQzFDLFlBQU0sT0FBTyxjQUFjLENBQUM7QUFDNUIsU0FBSztBQUFDLGFBQUssSUFBSSxNQUFNLENBQUMsV0FBVyxLQUFLLElBQUksRUFBRTtBQUM1QyxZQUFNLE9BQU8sV0FBVyxDQUFDO0FBQ3pCLFNBQUs7QUFBQyxhQUFLO0FBQ1gsWUFBTSxPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUM7QUFDaEMsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNGLElBakRVO0FBQ1gsUUFERyxLQUFLLEVBQUU7QUFBQyw4REFBWTtBQUN0QixJQUFVO0FBQWEsUUFBckIsS0FBSyxFQUFFO0FBQUMsaUVBQTBCO0FBRXJDLElBQVc7QUFBYSxRQUFyQixLQUFLLEVBQUU7QUFBQyxtRUFBa0I7QUFDNUIsSUFBVTtBQUFhLFFBQXJCLEtBQUssRUFBRTtBQUFDLGlFQUFnQjtBQUMxQixJQUFVO0FBQWEsUUFBckIsS0FBSyxFQUFFO0FBQUMsb0VBQW1CO0lBTmpCLDRCQUE0Qix3QkFuQnhDLFNBQVMsQ0FBQyxjQUNULFFBQVEsRUFBRSx1QkFBdUIsY0FDakMsUUFBUSxFQUFFO2lVQVlULGNBQ0QsSUFBSSxFQUFFLGtCQUNKLEtBQUssRUFBRSx1QkFBdUIsY0FDL0IsVUFDRixDQUFDLFFBQ1csNEJBQTRCLENBa0R4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUNEO0FBQUMsSUFERCxtQ0FBQztBQUNBLENBREEsQUFsREQsSUFrREM7QUFDRCxTQW5EYSw0QkFBNEI7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgUGlwZVRyYW5zZm9ybSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJU3VtbWFyeUNvbHVtbiB7XG4gIHN1bW1hcnlGdW5jPzogKGNlbGxzOiBhbnlbXSkgPT4gYW55O1xuICBzdW1tYXJ5VGVtcGxhdGU/OiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIHByb3A6IHN0cmluZztcbiAgcGlwZT86IFBpcGVUcmFuc2Zvcm07XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRTdW1GdW5jKGNlbGxzOiBhbnlbXSk6IGFueSB7XG4gIGNvbnN0IGNlbGxzV2l0aFZhbHVlcyA9IGNlbGxzLmZpbHRlcihjZWxsID0+ICEhY2VsbCk7XG5cbiAgaWYgKCFjZWxsc1dpdGhWYWx1ZXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKGNlbGxzV2l0aFZhbHVlcy5zb21lKGNlbGwgPT4gdHlwZW9mIGNlbGwgIT09ICdudW1iZXInKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGNlbGxzV2l0aFZhbHVlcy5yZWR1Y2UoKHJlcywgY2VsbCkgPT4gcmVzICsgY2VsbCk7XG59XG5cbmZ1bmN0aW9uIG5vb3BTdW1GdW5jKGNlbGxzOiBhbnlbXSk6IHZvaWQge1xuICByZXR1cm4gbnVsbDtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0YXRhYmxlLXN1bW1hcnktcm93JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGF0YXRhYmxlLWJvZHktcm93XG4gICAgICAqbmdJZj1cInN1bW1hcnlSb3cgJiYgX2ludGVybmFsQ29sdW1uc1wiXG4gICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgIFtpbm5lcldpZHRoXT1cImlubmVyV2lkdGhcIlxuICAgICAgW29mZnNldFhdPVwib2Zmc2V0WFwiXG4gICAgICBbY29sdW1uc109XCJfaW50ZXJuYWxDb2x1bW5zXCJcbiAgICAgIFtyb3dIZWlnaHRdPVwicm93SGVpZ2h0XCJcbiAgICAgIFtyb3ddPVwic3VtbWFyeVJvd1wiXG4gICAgICBbcm93SW5kZXhdPVwiLTFcIlxuICAgID5cbiAgICA8L2RhdGF0YWJsZS1ib2R5LXJvdz5cbiAgYCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnZGF0YXRhYmxlLXN1bW1hcnktcm93J1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZVN1bW1hcnlSb3dDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSByb3dzOiBhbnlbXTtcbiAgQElucHV0KCkgY29sdW1uczogSVN1bW1hcnlDb2x1bW5bXTtcblxuICBASW5wdXQoKSByb3dIZWlnaHQ6IG51bWJlcjtcbiAgQElucHV0KCkgb2Zmc2V0WDogbnVtYmVyO1xuICBASW5wdXQoKSBpbm5lcldpZHRoOiBudW1iZXI7XG5cbiAgX2ludGVybmFsQ29sdW1uczogSVN1bW1hcnlDb2x1bW5bXTtcbiAgc3VtbWFyeVJvdzogYW55ID0ge307XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgaWYgKCF0aGlzLmNvbHVtbnMgfHwgIXRoaXMucm93cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUludGVybmFsQ29sdW1ucygpO1xuICAgIHRoaXMudXBkYXRlVmFsdWVzKCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUludGVybmFsQ29sdW1ucygpIHtcbiAgICB0aGlzLl9pbnRlcm5hbENvbHVtbnMgPSB0aGlzLmNvbHVtbnMubWFwKGNvbCA9PiAoe1xuICAgICAgLi4uY29sLFxuICAgICAgY2VsbFRlbXBsYXRlOiBjb2wuc3VtbWFyeVRlbXBsYXRlXG4gICAgfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVWYWx1ZXMoKSB7XG4gICAgdGhpcy5zdW1tYXJ5Um93ID0ge307XG5cbiAgICB0aGlzLmNvbHVtbnNcbiAgICAgIC5maWx0ZXIoY29sID0+ICFjb2wuc3VtbWFyeVRlbXBsYXRlKVxuICAgICAgLmZvckVhY2goY29sID0+IHtcbiAgICAgICAgY29uc3QgY2VsbHNGcm9tU2luZ2xlQ29sdW1uID0gdGhpcy5yb3dzLm1hcChyb3cgPT4gcm93W2NvbC5wcm9wXSk7XG4gICAgICAgIGNvbnN0IHN1bUZ1bmMgPSB0aGlzLmdldFN1bW1hcnlGdW5jdGlvbihjb2wpO1xuXG4gICAgICAgIHRoaXMuc3VtbWFyeVJvd1tjb2wucHJvcF0gPSBjb2wucGlwZVxuICAgICAgICAgID8gY29sLnBpcGUudHJhbnNmb3JtKHN1bUZ1bmMoY2VsbHNGcm9tU2luZ2xlQ29sdW1uKSlcbiAgICAgICAgICA6IHN1bUZ1bmMoY2VsbHNGcm9tU2luZ2xlQ29sdW1uKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTdW1tYXJ5RnVuY3Rpb24oY29sdW1uOiBJU3VtbWFyeUNvbHVtbik6IChhOiBhbnlbXSkgPT4gYW55IHtcbiAgICBpZiAoY29sdW1uLnN1bW1hcnlGdW5jID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0U3VtRnVuYztcbiAgICB9IGVsc2UgaWYgKGNvbHVtbi5zdW1tYXJ5RnVuYyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG5vb3BTdW1GdW5jO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY29sdW1uLnN1bW1hcnlGdW5jO1xuICAgIH1cbiAgfVxufVxuIl19