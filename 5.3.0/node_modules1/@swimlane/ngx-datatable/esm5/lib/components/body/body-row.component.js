import { __decorate, __param, __values } from "tslib";
import { Component, Input, HostBinding, ElementRef, Output, KeyValueDiffers, KeyValueDiffer, EventEmitter, HostListener, ChangeDetectionStrategy, ChangeDetectorRef, DoCheck, SkipSelf } from '@angular/core';
import { columnsByPin, columnGroupWidths, columnsByPinArr } from '../../utils/column';
import { Keys } from '../../utils/keys';
import { ScrollbarHelper } from '../../services/scrollbar-helper.service';
import { translateXY } from '../../utils/translate';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from './body-cell.component';

function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template(rf, ctx) { if (rf & 1) {
    var _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "datatable-body-cell", 3);
    ɵngcc0.ɵɵlistener("activate", function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template_datatable_body_cell_activate_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r7); var ii_r5 = ctx.index; var ctx_r6 = ɵngcc0.ɵɵnextContext(2); return ctx_r6.onActivate($event, ii_r5); })("treeAction", function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template_datatable_body_cell_treeAction_0_listener() { ɵngcc0.ɵɵrestoreView(_r7); var ctx_r8 = ɵngcc0.ɵɵnextContext(2); return ctx_r8.onTreeAction(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var column_r4 = ctx.$implicit;
    var ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("row", ctx_r3.row)("group", ctx_r3.group)("expanded", ctx_r3.expanded)("isSelected", ctx_r3.isSelected)("rowIndex", ctx_r3.rowIndex)("column", column_r4)("rowHeight", ctx_r3.rowHeight)("displayCheck", ctx_r3.displayCheck)("treeStatus", ctx_r3.treeStatus);
} }
function DataTableBodyRowComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵtemplate(1, DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template, 1, 9, "datatable-body-cell", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var colGroup_r1 = ctx.$implicit;
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("datatable-row-", colGroup_r1.type, " datatable-row-group");
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r0._groupStyles[colGroup_r1.type]);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", colGroup_r1.columns)("ngForTrackBy", ctx_r0.columnTrackingFn);
} }
var DataTableBodyRowComponent = /** @class */ (function () {
    function DataTableBodyRowComponent(differs, scrollbarHelper, cd, element) {
        this.differs = differs;
        this.scrollbarHelper = scrollbarHelper;
        this.cd = cd;
        this.treeStatus = 'collapsed';
        this.activate = new EventEmitter();
        this.treeAction = new EventEmitter();
        this._groupStyles = {
            left: {},
            center: {},
            right: {}
        };
        this._element = element.nativeElement;
        this._rowDiffer = differs.find({}).create();
    }
    Object.defineProperty(DataTableBodyRowComponent.prototype, "columns", {
        get: function () {
            return this._columns;
        },
        set: function (val) {
            this._columns = val;
            this.recalculateColumns(val);
            this.buildStylesByGroup();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyRowComponent.prototype, "innerWidth", {
        get: function () {
            return this._innerWidth;
        },
        set: function (val) {
            if (this._columns) {
                var colByPin = columnsByPin(this._columns);
                this._columnGroupWidths = columnGroupWidths(colByPin, this._columns);
            }
            this._innerWidth = val;
            this.recalculateColumns();
            this.buildStylesByGroup();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyRowComponent.prototype, "offsetX", {
        get: function () {
            return this._offsetX;
        },
        set: function (val) {
            this._offsetX = val;
            this.buildStylesByGroup();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyRowComponent.prototype, "cssClass", {
        get: function () {
            var e_1, _a;
            var cls = 'datatable-body-row';
            if (this.isSelected) {
                cls += ' active';
            }
            if (this.rowIndex % 2 !== 0) {
                cls += ' datatable-row-odd';
            }
            if (this.rowIndex % 2 === 0) {
                cls += ' datatable-row-even';
            }
            if (this.rowClass) {
                var res = this.rowClass(this.row);
                if (typeof res === 'string') {
                    cls += " " + res;
                }
                else if (typeof res === 'object') {
                    var keys = Object.keys(res);
                    try {
                        for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                            var k = keys_1_1.value;
                            if (res[k] === true) {
                                cls += " " + k;
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
            }
            return cls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyRowComponent.prototype, "columnsTotalWidths", {
        get: function () {
            return this._columnGroupWidths.total;
        },
        enumerable: true,
        configurable: true
    });
    DataTableBodyRowComponent.prototype.ngDoCheck = function () {
        if (this._rowDiffer.diff(this.row)) {
            this.cd.markForCheck();
        }
    };
    DataTableBodyRowComponent.prototype.trackByGroups = function (index, colGroup) {
        return colGroup.type;
    };
    DataTableBodyRowComponent.prototype.columnTrackingFn = function (index, column) {
        return column.$$id;
    };
    DataTableBodyRowComponent.prototype.buildStylesByGroup = function () {
        this._groupStyles.left = this.calcStylesByGroup('left');
        this._groupStyles.center = this.calcStylesByGroup('center');
        this._groupStyles.right = this.calcStylesByGroup('right');
        this.cd.markForCheck();
    };
    DataTableBodyRowComponent.prototype.calcStylesByGroup = function (group) {
        var widths = this._columnGroupWidths;
        var offsetX = this.offsetX;
        var styles = {
            width: widths[group] + "px"
        };
        if (group === 'left') {
            translateXY(styles, offsetX, 0);
        }
        else if (group === 'right') {
            var bodyWidth = parseInt(this.innerWidth + '', 0);
            var totalDiff = widths.total - bodyWidth;
            var offsetDiff = totalDiff - offsetX;
            var offset = (offsetDiff + this.scrollbarHelper.width) * -1;
            translateXY(styles, offset, 0);
        }
        return styles;
    };
    DataTableBodyRowComponent.prototype.onActivate = function (event, index) {
        event.cellIndex = index;
        event.rowElement = this._element;
        this.activate.emit(event);
    };
    DataTableBodyRowComponent.prototype.onKeyDown = function (event) {
        var keyCode = event.keyCode;
        var isTargetRow = event.target === this._element;
        var isAction = keyCode === Keys.return ||
            keyCode === Keys.down ||
            keyCode === Keys.up ||
            keyCode === Keys.left ||
            keyCode === Keys.right;
        if (isAction && isTargetRow) {
            event.preventDefault();
            event.stopPropagation();
            this.activate.emit({
                type: 'keydown',
                event: event,
                row: this.row,
                rowElement: this._element
            });
        }
    };
    DataTableBodyRowComponent.prototype.onMouseenter = function (event) {
        this.activate.emit({
            type: 'mouseenter',
            event: event,
            row: this.row,
            rowElement: this._element
        });
    };
    DataTableBodyRowComponent.prototype.recalculateColumns = function (val) {
        if (val === void 0) { val = this.columns; }
        this._columns = val;
        var colsByPin = columnsByPin(this._columns);
        this._columnsByPin = columnsByPinArr(this._columns);
        this._columnGroupWidths = columnGroupWidths(colsByPin, this._columns);
    };
    DataTableBodyRowComponent.prototype.onTreeAction = function () {
        this.treeAction.emit();
    };
    DataTableBodyRowComponent.ctorParameters = function () { return [
        { type: KeyValueDiffers },
        { type: ScrollbarHelper, decorators: [{ type: SkipSelf }] },
        { type: ChangeDetectorRef },
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], DataTableBodyRowComponent.prototype, "columns", null);
    __decorate([
        Input()
    ], DataTableBodyRowComponent.prototype, "innerWidth", null);
    __decorate([
        Input()
    ], DataTableBodyRowComponent.prototype, "expanded", void 0);
    __decorate([
        Input()
    ], DataTableBodyRowComponent.prototype, "rowClass", void 0);
    __decorate([
        Input()
    ], DataTableBodyRowComponent.prototype, "row", void 0);
    __decorate([
        Input()
    ], DataTableBodyRowComponent.prototype, "group", void 0);
    __decorate([
        Input()
    ], DataTableBodyRowComponent.prototype, "isSelected", void 0);
    __decorate([
        Input()
    ], DataTableBodyRowComponent.prototype, "rowIndex", void 0);
    __decorate([
        Input()
    ], DataTableBodyRowComponent.prototype, "displayCheck", void 0);
    __decorate([
        Input()
    ], DataTableBodyRowComponent.prototype, "treeStatus", void 0);
    __decorate([
        Input()
    ], DataTableBodyRowComponent.prototype, "offsetX", null);
    __decorate([
        HostBinding('class')
    ], DataTableBodyRowComponent.prototype, "cssClass", null);
    __decorate([
        HostBinding('style.height.px'),
        Input()
    ], DataTableBodyRowComponent.prototype, "rowHeight", void 0);
    __decorate([
        HostBinding('style.width.px')
    ], DataTableBodyRowComponent.prototype, "columnsTotalWidths", null);
    __decorate([
        Output()
    ], DataTableBodyRowComponent.prototype, "activate", void 0);
    __decorate([
        Output()
    ], DataTableBodyRowComponent.prototype, "treeAction", void 0);
    __decorate([
        HostListener('keydown', ['$event'])
    ], DataTableBodyRowComponent.prototype, "onKeyDown", null);
    __decorate([
        HostListener('mouseenter', ['$event'])
    ], DataTableBodyRowComponent.prototype, "onMouseenter", null);
    DataTableBodyRowComponent = __decorate([ __param(1, SkipSelf())
    ], DataTableBodyRowComponent);
DataTableBodyRowComponent.ɵfac = function DataTableBodyRowComponent_Factory(t) { return new (t || DataTableBodyRowComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.KeyValueDiffers), ɵngcc0.ɵɵdirectiveInject(ScrollbarHelper, 4), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
DataTableBodyRowComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DataTableBodyRowComponent, selectors: [["datatable-body-row"]], hostVars: 6, hostBindings: function DataTableBodyRowComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("keydown", function DataTableBodyRowComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); })("mouseenter", function DataTableBodyRowComponent_mouseenter_HostBindingHandler($event) { return ctx.onMouseenter($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.cssClass);
        ɵngcc0.ɵɵstyleProp("width", ctx.columnsTotalWidths, "px")("height", ctx.rowHeight, "px");
    } }, inputs: { treeStatus: "treeStatus", columns: "columns", innerWidth: "innerWidth", offsetX: "offsetX", expanded: "expanded", rowClass: "rowClass", row: "row", group: "group", isSelected: "isSelected", rowIndex: "rowIndex", displayCheck: "displayCheck", rowHeight: "rowHeight" }, outputs: { activate: "activate", treeAction: "treeAction" }, decls: 1, vars: 2, consts: [[3, "class", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle"], ["tabindex", "-1", 3, "row", "group", "expanded", "isSelected", "rowIndex", "column", "rowHeight", "displayCheck", "treeStatus", "activate", "treeAction", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabindex", "-1", 3, "row", "group", "expanded", "isSelected", "rowIndex", "column", "rowHeight", "displayCheck", "treeStatus", "activate", "treeAction"]], template: function DataTableBodyRowComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, DataTableBodyRowComponent_div_0_Template, 2, 6, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngForOf", ctx._columnsByPin)("ngForTrackBy", ctx.trackByGroups);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgStyle, ɵngcc2.DataTableBodyCellComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DataTableBodyRowComponent, [{
        type: Component,
        args: [{
                selector: 'datatable-body-row',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "\n    <div\n      *ngFor=\"let colGroup of _columnsByPin; let i = index; trackBy: trackByGroups\"\n      class=\"datatable-row-{{ colGroup.type }} datatable-row-group\"\n      [ngStyle]=\"_groupStyles[colGroup.type]\"\n    >\n      <datatable-body-cell\n        *ngFor=\"let column of colGroup.columns; let ii = index; trackBy: columnTrackingFn\"\n        tabindex=\"-1\"\n        [row]=\"row\"\n        [group]=\"group\"\n        [expanded]=\"expanded\"\n        [isSelected]=\"isSelected\"\n        [rowIndex]=\"rowIndex\"\n        [column]=\"column\"\n        [rowHeight]=\"rowHeight\"\n        [displayCheck]=\"displayCheck\"\n        [treeStatus]=\"treeStatus\"\n        (activate)=\"onActivate($event, ii)\"\n        (treeAction)=\"onTreeAction()\"\n      >\n      </datatable-body-cell>\n    </div>\n  "
            }]
    }], function () { return [{ type: ɵngcc0.KeyValueDiffers }, { type: ScrollbarHelper, decorators: [{
                type: SkipSelf
            }] }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }]; }, { treeStatus: [{
            type: Input
        }], activate: [{
            type: Output
        }], treeAction: [{
            type: Output
        }], columns: [{
            type: Input
        }], innerWidth: [{
            type: Input
        }], offsetX: [{
            type: Input
        }], cssClass: [{
            type: HostBinding,
            args: ['class']
        }], columnsTotalWidths: [{
            type: HostBinding,
            args: ['style.width.px']
        }], onKeyDown: [{
            type: HostListener,
            args: ['keydown', ['$event']]
        }], onMouseenter: [{
            type: HostListener,
            args: ['mouseenter', ['$event']]
        }], expanded: [{
            type: Input
        }], rowClass: [{
            type: Input
        }], row: [{
            type: Input
        }], group: [{
            type: Input
        }], isSelected: [{
            type: Input
        }], rowIndex: [{
            type: Input
        }], displayCheck: [{
            type: Input
        }], rowHeight: [{
            type: HostBinding,
            args: ['style.height.px']
        }, {
            type: Input
        }] }); })();
    return DataTableBodyRowComponent;
}());
export { DataTableBodyRowComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS1yb3cuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovQHN3aW1sYW5lL25neC1kYXRhdGFibGUvbGliL2NvbXBvbmVudHMvYm9keS9ib2R5LXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFdBQVcsRUFDWCxVQUFVLEVBQ1YsTUFBTSxFQUNOLGVBQWUsRUFDZixjQUFjLEVBQ2QsWUFBWSxFQUNaLFlBQVksRUFDWix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLE9BQU8sRUFDUCxRQUFRLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDeEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJwRDtBQUNDLElBbUdDLG1DQUNVLE9BQXdCLEVBQ1osZUFBZ0MsRUFDNUMsRUFBcUIsRUFDN0IsT0FBbUI7QUFDcEIsUUFKUyxZQUFPLEdBQVAsT0FBTyxDQUFpQjtBQUFDLFFBQ2Isb0JBQWUsR0FBZixlQUFlLENBQWlCO0FBQUMsUUFDN0MsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7QUFBQyxRQXRFdkIsZUFBVSxHQUFlLFdBQVcsQ0FBQztBQUNoRCxRQWlEWSxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDN0QsUUFBWSxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDL0QsUUFPRSxpQkFBWSxHQUEyQjtBQUN6QyxZQUFJLElBQUksRUFBRSxFQUFFO0FBQ1osWUFBSSxNQUFNLEVBQUUsRUFBRTtBQUNkLFlBQUksS0FBSyxFQUFFLEVBQUU7QUFDYixTQUFHLENBQUM7QUFDSixRQVNJLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztBQUMxQyxRQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNoRCxJQUFFLENBQUM7QUFDSCxJQTVHVyxzQkFBSSw4Q0FBTztBQUFJLGFBTXhCO0FBQWMsWUFDWixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDekIsUUFBRSxDQUFDO0FBRUgsYUFWVyxVQUFZLEdBQVU7QUFDakMsWUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztBQUN4QixZQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqQyxZQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0FBQzlCLFFBQUUsQ0FBQztBQUVIO0FBQ0M7QUFDQyxPQUpDO0FBQ0gsSUFLVyxzQkFBSSxpREFBVTtBQUFJLGFBVzNCO0FBQWMsWUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7QUFDNUIsUUFBRSxDQUFDO0FBRUgsYUFmVyxVQUFlLEdBQVc7QUFDckMsWUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDdkIsZ0JBQU0sSUFBTSxRQUFRLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNuRCxnQkFBTSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMzRSxhQUFLO0FBQ0wsWUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztBQUMzQixZQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0FBQzlCLFlBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7QUFDOUIsUUFBRSxDQUFDO0FBRUg7QUFBMEI7QUFDRixPQUhyQjtBQUNILElBZUUsc0JBQUksOENBQU87QUFBSSxhQUlmO0FBQWMsWUFDWixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDekIsUUFBRSxDQUFDO0FBRUgsYUFSRSxVQUFZLEdBQVc7QUFDekIsWUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztBQUN4QixZQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0FBQzlCLFFBQUUsQ0FBQztBQUNGO0FBQ1E7QUFHSixPQUxGO0FBQ0gsSUFLRSxzQkFBSSwrQ0FBUTtBQUFJLGFBQWhCO0FBQWM7QUFDTSxZQUFsQixJQUFJLEdBQUcsR0FBRyxvQkFBb0IsQ0FBQztBQUNuQyxZQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtBQUN6QixnQkFBTSxHQUFHLElBQUksU0FBUyxDQUFDO0FBQ3ZCLGFBQUs7QUFDTCxZQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ2pDLGdCQUFNLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQztBQUNsQyxhQUFLO0FBQ0wsWUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUNqQyxnQkFBTSxHQUFHLElBQUkscUJBQXFCLENBQUM7QUFDbkMsYUFBSztBQUNMLFlBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQ3ZCLGdCQUFNLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzFDLGdCQUFNLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO0FBQ25DLG9CQUFRLEdBQUcsSUFBSSxNQUFJLEdBQUssQ0FBQztBQUN6QixpQkFBTztBQUFDLHFCQUFLLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO0FBQzFDLG9CQUFRLElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdEM7QUFBMEIsd0JBQWxCLEtBQWdCLElBQUEsU0FBQSxTQUFBLElBQUksQ0FBQSwwQkFBQSw0Q0FBRTtBQUM5Qiw0QkFEYSxJQUFNLENBQUMsaUJBQUE7QUFBRSw0QkFDWixJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUU7QUFDL0IsZ0NBQVksR0FBRyxJQUFJLE1BQUksQ0FBRyxDQUFDO0FBQzNCLDZCQUFXO0FBQ1gseUJBQVM7QUFDVDtBQUdPO0FBS0o7QUFFUTtBQUNIO0FBSWlCO0FBQTBCO0FBQ0E7QUFFM0MsaUJBbEJEO0FBQ1AsYUFBSztBQUNMLFlBQ0ksT0FBTyxHQUFHLENBQUM7QUFDZixRQUFFLENBQUM7QUFFSDtBQUEwQjtBQUVsQixPQUpMO0FBQ0gsSUFNRSxzQkFBSSx5REFBa0I7QUFBSSxhQUExQjtBQUFjLFlBQ1osT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDO0FBQ3pDLFFBQUUsQ0FBQztBQUVIO0FBQTBCO0FBQTJCLE9BRmxEO0FBQ0gsSUE0QkUsNkNBQVMsR0FBVDtBQUFjLFFBQ1osSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDeEMsWUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQzdCLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFFSCxJQUFFLGlEQUFhLEdBQWIsVUFBYyxLQUFhLEVBQUUsUUFBYTtBQUFJLFFBQzVDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztBQUN6QixJQUFFLENBQUM7QUFFSCxJQUFFLG9EQUFnQixHQUFoQixVQUFpQixLQUFhLEVBQUUsTUFBVztBQUFJLFFBQzdDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQztBQUN2QixJQUFFLENBQUM7QUFFSCxJQUFFLHNEQUFrQixHQUFsQjtBQUFjLFFBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzVELFFBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2hFLFFBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzlELFFBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUMzQixJQUFFLENBQUM7QUFFSCxJQUFFLHFEQUFpQixHQUFqQixVQUFrQixLQUFhO0FBQ2pDLFFBQUksSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO0FBQzNDLFFBQUksSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUNqQyxRQUNJLElBQU0sTUFBTSxHQUFHO0FBQ25CLFlBQU0sS0FBSyxFQUFLLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBSTtBQUNqQyxTQUFLLENBQUM7QUFDTixRQUNJLElBQUksS0FBSyxLQUFLLE1BQU0sRUFBRTtBQUMxQixZQUFNLFdBQVcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLFNBQUs7QUFBQyxhQUFLLElBQUksS0FBSyxLQUFLLE9BQU8sRUFBRTtBQUNsQyxZQUFNLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMxRCxZQUFNLElBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0FBQ2pELFlBQU0sSUFBTSxVQUFVLEdBQUcsU0FBUyxHQUFHLE9BQU8sQ0FBQztBQUM3QyxZQUFNLElBQU0sTUFBTSxHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDcEUsWUFBTSxXQUFXLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNyQyxTQUFLO0FBQ0wsUUFDSSxPQUFPLE1BQU0sQ0FBQztBQUNsQixJQUFFLENBQUM7QUFFSCxJQUFFLDhDQUFVLEdBQVYsVUFBVyxLQUFVLEVBQUUsS0FBYTtBQUFJLFFBQ3RDLEtBQUssQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0FBQzVCLFFBQUksS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0FBQ3JDLFFBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDOUIsSUFBRSxDQUFDO0FBRUgsSUFDRSw2Q0FBUyxHQUFULFVBQVUsS0FBb0I7QUFBSSxRQUNoQyxJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO0FBQ2xDLFFBQUksSUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0FBQ3ZELFFBQ0ksSUFBTSxRQUFRLEdBQ1osT0FBTyxLQUFLLElBQUksQ0FBQyxNQUFNO0FBQzdCLFlBQU0sT0FBTyxLQUFLLElBQUksQ0FBQyxJQUFJO0FBQzNCLFlBQU0sT0FBTyxLQUFLLElBQUksQ0FBQyxFQUFFO0FBQ3pCLFlBQU0sT0FBTyxLQUFLLElBQUksQ0FBQyxJQUFJO0FBQzNCLFlBQU0sT0FBTyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDN0IsUUFDSSxJQUFJLFFBQVEsSUFBSSxXQUFXLEVBQUU7QUFDakMsWUFBTSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDN0IsWUFBTSxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDOUIsWUFDTSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztBQUN6QixnQkFBUSxJQUFJLEVBQUUsU0FBUztBQUN2QixnQkFBUSxLQUFLLE9BQUE7QUFDYixnQkFBUSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7QUFDckIsZ0JBQVEsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRO0FBQ2pDLGFBQU8sQ0FBQyxDQUFDO0FBQ1QsU0FBSztBQUNMLElBQUUsQ0FBQztBQUVILElBQ0UsZ0RBQVksR0FBWixVQUFhLEtBQVU7QUFBSSxRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztBQUN2QixZQUFNLElBQUksRUFBRSxZQUFZO0FBQ3hCLFlBQU0sS0FBSyxPQUFBO0FBQ1gsWUFBTSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7QUFDbkIsWUFBTSxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVE7QUFDL0IsU0FBSyxDQUFDLENBQUM7QUFDUCxJQUFFLENBQUM7QUFFSCxJQUFFLHNEQUFrQixHQUFsQixVQUFtQixHQUF5QjtBQUFJLFFBQTdCLG9CQUFBLEVBQUEsTUFBYSxJQUFJLENBQUMsT0FBTztBQUFJLFFBQzlDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO0FBQ3hCLFFBQUksSUFBTSxTQUFTLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNsRCxRQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN4RCxRQUFJLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzFFLElBQUUsQ0FBQztBQUVILElBQUUsZ0RBQVksR0FBWjtBQUFjLFFBQ1osSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUMzQixJQUFFLENBQUM7QUFDRjtBQUNvRSxnQkF2R2hELGVBQWU7QUFDbEMsZ0JBQXVDLGVBQWUsdUJBQW5ELFFBQVE7QUFBTyxnQkFDSixpQkFBaUI7QUFDL0IsZ0JBQVcsVUFBVTtBQUNyQjtBQUNJLElBekdLO0FBQWEsUUFBckIsS0FBSyxFQUFFO0FBQUMsNERBSVI7QUFFSCxJQUlXO0FBQWEsUUFBckIsS0FBSyxFQUFFO0FBQUMsK0RBU1I7QUFFSCxJQUlXO0FBQWEsUUFBckIsS0FBSyxFQUFFO0FBQUMsK0RBQWtCO0FBQzVCLElBQVU7QUFBYSxRQUFyQixLQUFLLEVBQUU7QUFBQywrREFBYztBQUN4QixJQUFVO0FBQ1IsUUFEQSxLQUFLLEVBQUU7QUFBQywwREFBUztBQUNuQixJQUFVO0FBQ1YsUUFERSxLQUFLLEVBQUU7QUFBQyw0REFBVztBQUNyQixJQUFVO0FBQWEsUUFBckIsS0FBSyxFQUFFO0FBQUMsaUVBQW9CO0FBQzlCLElBQVU7QUFBYSxRQUFyQixLQUFLLEVBQUU7QUFBQywrREFBaUI7QUFDM0IsSUFBVTtBQUFhLFFBQXJCLEtBQUssRUFBRTtBQUFDLG1FQUFrQjtBQUM1QixJQUFVO0FBQWEsUUFBckIsS0FBSyxFQUFFO0FBQUMsaUVBQXFDO0FBRWhELElBQ0U7QUFBYSxRQURaLEtBQUssRUFBRTtBQUNWLDREQUdHO0FBQ0YsSUFLQztBQUFhLFFBRFosV0FBVyxDQUFDLE9BQU8sQ0FBQztBQUN2Qiw2REEyQkc7QUFFSCxJQUVFO0FBQWEsUUFGWixXQUFXLENBQUMsaUJBQWlCLENBQUM7QUFDaEMsUUFBRSxLQUFLLEVBQUU7QUFDVixnRUFBb0I7QUFFcEIsSUFDRTtBQUFhLFFBRFosV0FBVyxDQUFDLGdCQUFnQixDQUFDO0FBQ2hDLHVFQUVHO0FBRUgsSUFBWTtBQUFhLFFBQXRCLE1BQU0sRUFBRTtBQUFDLCtEQUFpRDtBQUM1RCxJQUFXO0FBQWEsUUFBdEIsTUFBTSxFQUFFO0FBQUMsaUVBQW1EO0FBRS9ELElBeUVFO0FBQWEsUUFEWixZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdEMsOERBc0JHO0FBRUgsSUFDRTtBQUFhLFFBRFosWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3pDLGlFQU9HO0FBRUgsSUFqTWEseUJBQXlCLHdCQTVCckMsU0FBUyxDQUFDLG5CQTRCSCxDQXNHSCxXQUFBLFFBQVEsRUFBRSxDQUFBO1NBakliLFFBQVEsRUFBRSxuQkFpSUksT0F0R0gseUJBQXlCLENBMk1yQztJQXRPK0IsY0FDOUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sY0FDL0MsUUFBUSxFQUFFOzs7OzttQkF1QlQsVUFDRixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQTZNRjtBQUFDLElBREQsZ0NBQUM7QUFDQSxDQURBLEFBM01ELElBMk1DO0FBQ0QsU0E1TWEseUJBQXlCO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBIb3N0QmluZGluZyxcbiAgRWxlbWVudFJlZixcbiAgT3V0cHV0LFxuICBLZXlWYWx1ZURpZmZlcnMsXG4gIEtleVZhbHVlRGlmZmVyLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBEb0NoZWNrLFxuICBTa2lwU2VsZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVHJlZVN0YXR1cyB9IGZyb20gJy4vYm9keS1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBjb2x1bW5zQnlQaW4sIGNvbHVtbkdyb3VwV2lkdGhzLCBjb2x1bW5zQnlQaW5BcnIgfSBmcm9tICcuLi8uLi91dGlscy9jb2x1bW4nO1xuaW1wb3J0IHsgS2V5cyB9IGZyb20gJy4uLy4uL3V0aWxzL2tleXMnO1xuaW1wb3J0IHsgU2Nyb2xsYmFySGVscGVyIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2Nyb2xsYmFyLWhlbHBlci5zZXJ2aWNlJztcbmltcG9ydCB7IHRyYW5zbGF0ZVhZIH0gZnJvbSAnLi4vLi4vdXRpbHMvdHJhbnNsYXRlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0YXRhYmxlLWJvZHktcm93JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdlxuICAgICAgKm5nRm9yPVwibGV0IGNvbEdyb3VwIG9mIF9jb2x1bW5zQnlQaW47IGxldCBpID0gaW5kZXg7IHRyYWNrQnk6IHRyYWNrQnlHcm91cHNcIlxuICAgICAgY2xhc3M9XCJkYXRhdGFibGUtcm93LXt7IGNvbEdyb3VwLnR5cGUgfX0gZGF0YXRhYmxlLXJvdy1ncm91cFwiXG4gICAgICBbbmdTdHlsZV09XCJfZ3JvdXBTdHlsZXNbY29sR3JvdXAudHlwZV1cIlxuICAgID5cbiAgICAgIDxkYXRhdGFibGUtYm9keS1jZWxsXG4gICAgICAgICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sR3JvdXAuY29sdW1uczsgbGV0IGlpID0gaW5kZXg7IHRyYWNrQnk6IGNvbHVtblRyYWNraW5nRm5cIlxuICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgW3Jvd109XCJyb3dcIlxuICAgICAgICBbZ3JvdXBdPVwiZ3JvdXBcIlxuICAgICAgICBbZXhwYW5kZWRdPVwiZXhwYW5kZWRcIlxuICAgICAgICBbaXNTZWxlY3RlZF09XCJpc1NlbGVjdGVkXCJcbiAgICAgICAgW3Jvd0luZGV4XT1cInJvd0luZGV4XCJcbiAgICAgICAgW2NvbHVtbl09XCJjb2x1bW5cIlxuICAgICAgICBbcm93SGVpZ2h0XT1cInJvd0hlaWdodFwiXG4gICAgICAgIFtkaXNwbGF5Q2hlY2tdPVwiZGlzcGxheUNoZWNrXCJcbiAgICAgICAgW3RyZWVTdGF0dXNdPVwidHJlZVN0YXR1c1wiXG4gICAgICAgIChhY3RpdmF0ZSk9XCJvbkFjdGl2YXRlKCRldmVudCwgaWkpXCJcbiAgICAgICAgKHRyZWVBY3Rpb24pPVwib25UcmVlQWN0aW9uKClcIlxuICAgICAgPlxuICAgICAgPC9kYXRhdGFibGUtYm9keS1jZWxsPlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUJvZHlSb3dDb21wb25lbnQgaW1wbGVtZW50cyBEb0NoZWNrIHtcbiAgQElucHV0KCkgc2V0IGNvbHVtbnModmFsOiBhbnlbXSkge1xuICAgIHRoaXMuX2NvbHVtbnMgPSB2YWw7XG4gICAgdGhpcy5yZWNhbGN1bGF0ZUNvbHVtbnModmFsKTtcbiAgICB0aGlzLmJ1aWxkU3R5bGVzQnlHcm91cCgpO1xuICB9XG5cbiAgZ2V0IGNvbHVtbnMoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl9jb2x1bW5zO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IGlubmVyV2lkdGgodmFsOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fY29sdW1ucykge1xuICAgICAgY29uc3QgY29sQnlQaW4gPSBjb2x1bW5zQnlQaW4odGhpcy5fY29sdW1ucyk7XG4gICAgICB0aGlzLl9jb2x1bW5Hcm91cFdpZHRocyA9IGNvbHVtbkdyb3VwV2lkdGhzKGNvbEJ5UGluLCB0aGlzLl9jb2x1bW5zKTtcbiAgICB9XG5cbiAgICB0aGlzLl9pbm5lcldpZHRoID0gdmFsO1xuICAgIHRoaXMucmVjYWxjdWxhdGVDb2x1bW5zKCk7XG4gICAgdGhpcy5idWlsZFN0eWxlc0J5R3JvdXAoKTtcbiAgfVxuXG4gIGdldCBpbm5lcldpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2lubmVyV2lkdGg7XG4gIH1cblxuICBASW5wdXQoKSBleHBhbmRlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgcm93Q2xhc3M6IGFueTtcbiAgQElucHV0KCkgcm93OiBhbnk7XG4gIEBJbnB1dCgpIGdyb3VwOiBhbnk7XG4gIEBJbnB1dCgpIGlzU2VsZWN0ZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHJvd0luZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpIGRpc3BsYXlDaGVjazogYW55O1xuICBASW5wdXQoKSB0cmVlU3RhdHVzOiBUcmVlU3RhdHVzID0gJ2NvbGxhcHNlZCc7XG5cbiAgQElucHV0KClcbiAgc2V0IG9mZnNldFgodmFsOiBudW1iZXIpIHtcbiAgICB0aGlzLl9vZmZzZXRYID0gdmFsO1xuICAgIHRoaXMuYnVpbGRTdHlsZXNCeUdyb3VwKCk7XG4gIH1cbiAgZ2V0IG9mZnNldFgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29mZnNldFg7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGNzc0NsYXNzKCkge1xuICAgIGxldCBjbHMgPSAnZGF0YXRhYmxlLWJvZHktcm93JztcbiAgICBpZiAodGhpcy5pc1NlbGVjdGVkKSB7XG4gICAgICBjbHMgKz0gJyBhY3RpdmUnO1xuICAgIH1cbiAgICBpZiAodGhpcy5yb3dJbmRleCAlIDIgIT09IDApIHtcbiAgICAgIGNscyArPSAnIGRhdGF0YWJsZS1yb3ctb2RkJztcbiAgICB9XG4gICAgaWYgKHRoaXMucm93SW5kZXggJSAyID09PSAwKSB7XG4gICAgICBjbHMgKz0gJyBkYXRhdGFibGUtcm93LWV2ZW4nO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnJvd0NsYXNzKSB7XG4gICAgICBjb25zdCByZXMgPSB0aGlzLnJvd0NsYXNzKHRoaXMucm93KTtcbiAgICAgIGlmICh0eXBlb2YgcmVzID09PSAnc3RyaW5nJykge1xuICAgICAgICBjbHMgKz0gYCAke3Jlc31gO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcmVzID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocmVzKTtcbiAgICAgICAgZm9yIChjb25zdCBrIG9mIGtleXMpIHtcbiAgICAgICAgICBpZiAocmVzW2tdID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjbHMgKz0gYCAke2t9YDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2xzO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQucHgnKVxuICBASW5wdXQoKVxuICByb3dIZWlnaHQ6IG51bWJlcjtcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLndpZHRoLnB4JylcbiAgZ2V0IGNvbHVtbnNUb3RhbFdpZHRocygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb2x1bW5Hcm91cFdpZHRocy50b3RhbDtcbiAgfVxuXG4gIEBPdXRwdXQoKSBhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSB0cmVlQWN0aW9uOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBfZWxlbWVudDogYW55O1xuICBfY29sdW1uR3JvdXBXaWR0aHM6IGFueTtcbiAgX2NvbHVtbnNCeVBpbjogYW55O1xuICBfb2Zmc2V0WDogbnVtYmVyO1xuICBfY29sdW1uczogYW55W107XG4gIF9pbm5lcldpZHRoOiBudW1iZXI7XG4gIF9ncm91cFN0eWxlczogeyBbcHJvcDogc3RyaW5nXToge30gfSA9IHtcbiAgICBsZWZ0OiB7fSxcbiAgICBjZW50ZXI6IHt9LFxuICAgIHJpZ2h0OiB7fVxuICB9O1xuXG4gIHByaXZhdGUgX3Jvd0RpZmZlcjogS2V5VmFsdWVEaWZmZXI8e30sIHt9PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRpZmZlcnM6IEtleVZhbHVlRGlmZmVycyxcbiAgICBAU2tpcFNlbGYoKSBwcml2YXRlIHNjcm9sbGJhckhlbHBlcjogU2Nyb2xsYmFySGVscGVyLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIGVsZW1lbnQ6IEVsZW1lbnRSZWZcbiAgKSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLl9yb3dEaWZmZXIgPSBkaWZmZXJzLmZpbmQoe30pLmNyZWF0ZSgpO1xuICB9XG5cbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9yb3dEaWZmZXIuZGlmZih0aGlzLnJvdykpIHtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgdHJhY2tCeUdyb3VwcyhpbmRleDogbnVtYmVyLCBjb2xHcm91cDogYW55KTogYW55IHtcbiAgICByZXR1cm4gY29sR3JvdXAudHlwZTtcbiAgfVxuXG4gIGNvbHVtblRyYWNraW5nRm4oaW5kZXg6IG51bWJlciwgY29sdW1uOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBjb2x1bW4uJCRpZDtcbiAgfVxuXG4gIGJ1aWxkU3R5bGVzQnlHcm91cCgpIHtcbiAgICB0aGlzLl9ncm91cFN0eWxlcy5sZWZ0ID0gdGhpcy5jYWxjU3R5bGVzQnlHcm91cCgnbGVmdCcpO1xuICAgIHRoaXMuX2dyb3VwU3R5bGVzLmNlbnRlciA9IHRoaXMuY2FsY1N0eWxlc0J5R3JvdXAoJ2NlbnRlcicpO1xuICAgIHRoaXMuX2dyb3VwU3R5bGVzLnJpZ2h0ID0gdGhpcy5jYWxjU3R5bGVzQnlHcm91cCgncmlnaHQnKTtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgY2FsY1N0eWxlc0J5R3JvdXAoZ3JvdXA6IHN0cmluZykge1xuICAgIGNvbnN0IHdpZHRocyA9IHRoaXMuX2NvbHVtbkdyb3VwV2lkdGhzO1xuICAgIGNvbnN0IG9mZnNldFggPSB0aGlzLm9mZnNldFg7XG5cbiAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICB3aWR0aDogYCR7d2lkdGhzW2dyb3VwXX1weGBcbiAgICB9O1xuXG4gICAgaWYgKGdyb3VwID09PSAnbGVmdCcpIHtcbiAgICAgIHRyYW5zbGF0ZVhZKHN0eWxlcywgb2Zmc2V0WCwgMCk7XG4gICAgfSBlbHNlIGlmIChncm91cCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgY29uc3QgYm9keVdpZHRoID0gcGFyc2VJbnQodGhpcy5pbm5lcldpZHRoICsgJycsIDApO1xuICAgICAgY29uc3QgdG90YWxEaWZmID0gd2lkdGhzLnRvdGFsIC0gYm9keVdpZHRoO1xuICAgICAgY29uc3Qgb2Zmc2V0RGlmZiA9IHRvdGFsRGlmZiAtIG9mZnNldFg7XG4gICAgICBjb25zdCBvZmZzZXQgPSAob2Zmc2V0RGlmZiArIHRoaXMuc2Nyb2xsYmFySGVscGVyLndpZHRoKSAqIC0xO1xuICAgICAgdHJhbnNsYXRlWFkoc3R5bGVzLCBvZmZzZXQsIDApO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cblxuICBvbkFjdGl2YXRlKGV2ZW50OiBhbnksIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBldmVudC5jZWxsSW5kZXggPSBpbmRleDtcbiAgICBldmVudC5yb3dFbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcbiAgICB0aGlzLmFjdGl2YXRlLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuICAgIGNvbnN0IGlzVGFyZ2V0Um93ID0gZXZlbnQudGFyZ2V0ID09PSB0aGlzLl9lbGVtZW50O1xuXG4gICAgY29uc3QgaXNBY3Rpb24gPVxuICAgICAga2V5Q29kZSA9PT0gS2V5cy5yZXR1cm4gfHxcbiAgICAgIGtleUNvZGUgPT09IEtleXMuZG93biB8fFxuICAgICAga2V5Q29kZSA9PT0gS2V5cy51cCB8fFxuICAgICAga2V5Q29kZSA9PT0gS2V5cy5sZWZ0IHx8XG4gICAgICBrZXlDb2RlID09PSBLZXlzLnJpZ2h0O1xuXG4gICAgaWYgKGlzQWN0aW9uICYmIGlzVGFyZ2V0Um93KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIHRoaXMuYWN0aXZhdGUuZW1pdCh7XG4gICAgICAgIHR5cGU6ICdrZXlkb3duJyxcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIHJvdzogdGhpcy5yb3csXG4gICAgICAgIHJvd0VsZW1lbnQ6IHRoaXMuX2VsZW1lbnRcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBbJyRldmVudCddKVxuICBvbk1vdXNlZW50ZXIoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZhdGUuZW1pdCh7XG4gICAgICB0eXBlOiAnbW91c2VlbnRlcicsXG4gICAgICBldmVudCxcbiAgICAgIHJvdzogdGhpcy5yb3csXG4gICAgICByb3dFbGVtZW50OiB0aGlzLl9lbGVtZW50XG4gICAgfSk7XG4gIH1cblxuICByZWNhbGN1bGF0ZUNvbHVtbnModmFsOiBhbnlbXSA9IHRoaXMuY29sdW1ucyk6IHZvaWQge1xuICAgIHRoaXMuX2NvbHVtbnMgPSB2YWw7XG4gICAgY29uc3QgY29sc0J5UGluID0gY29sdW1uc0J5UGluKHRoaXMuX2NvbHVtbnMpO1xuICAgIHRoaXMuX2NvbHVtbnNCeVBpbiA9IGNvbHVtbnNCeVBpbkFycih0aGlzLl9jb2x1bW5zKTtcbiAgICB0aGlzLl9jb2x1bW5Hcm91cFdpZHRocyA9IGNvbHVtbkdyb3VwV2lkdGhzKGNvbHNCeVBpbiwgdGhpcy5fY29sdW1ucyk7XG4gIH1cblxuICBvblRyZWVBY3Rpb24oKSB7XG4gICAgdGhpcy50cmVlQWN0aW9uLmVtaXQoKTtcbiAgfVxufVxuIl19