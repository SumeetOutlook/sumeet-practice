import { __decorate, __param } from "tslib";
import { Component, Input, HostBinding, ElementRef, Output, KeyValueDiffers, KeyValueDiffer, EventEmitter, HostListener, ChangeDetectionStrategy, ChangeDetectorRef, DoCheck, SkipSelf } from '@angular/core';
import { columnsByPin, columnGroupWidths, columnsByPinArr } from '../../utils/column';
import { Keys } from '../../utils/keys';
import { ScrollbarHelper } from '../../services/scrollbar-helper.service';
import { translateXY } from '../../utils/translate';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from './body-cell.component';

function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "datatable-body-cell", 3);
    ɵngcc0.ɵɵlistener("activate", function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template_datatable_body_cell_activate_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r7); const ii_r5 = ctx.index; const ctx_r6 = ɵngcc0.ɵɵnextContext(2); return ctx_r6.onActivate($event, ii_r5); })("treeAction", function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template_datatable_body_cell_treeAction_0_listener() { ɵngcc0.ɵɵrestoreView(_r7); const ctx_r8 = ɵngcc0.ɵɵnextContext(2); return ctx_r8.onTreeAction(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r4 = ctx.$implicit;
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("row", ctx_r3.row)("group", ctx_r3.group)("expanded", ctx_r3.expanded)("isSelected", ctx_r3.isSelected)("rowIndex", ctx_r3.rowIndex)("column", column_r4)("rowHeight", ctx_r3.rowHeight)("displayCheck", ctx_r3.displayCheck)("treeStatus", ctx_r3.treeStatus);
} }
function DataTableBodyRowComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵtemplate(1, DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template, 1, 9, "datatable-body-cell", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const colGroup_r1 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("datatable-row-", colGroup_r1.type, " datatable-row-group");
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r0._groupStyles[colGroup_r1.type]);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", colGroup_r1.columns)("ngForTrackBy", ctx_r0.columnTrackingFn);
} }
let DataTableBodyRowComponent = class DataTableBodyRowComponent {
    constructor(differs, scrollbarHelper, cd, element) {
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
    set columns(val) {
        this._columns = val;
        this.recalculateColumns(val);
        this.buildStylesByGroup();
    }
    get columns() {
        return this._columns;
    }
    set innerWidth(val) {
        if (this._columns) {
            const colByPin = columnsByPin(this._columns);
            this._columnGroupWidths = columnGroupWidths(colByPin, this._columns);
        }
        this._innerWidth = val;
        this.recalculateColumns();
        this.buildStylesByGroup();
    }
    get innerWidth() {
        return this._innerWidth;
    }
    set offsetX(val) {
        this._offsetX = val;
        this.buildStylesByGroup();
    }
    get offsetX() {
        return this._offsetX;
    }
    get cssClass() {
        let cls = 'datatable-body-row';
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
            const res = this.rowClass(this.row);
            if (typeof res === 'string') {
                cls += ` ${res}`;
            }
            else if (typeof res === 'object') {
                const keys = Object.keys(res);
                for (const k of keys) {
                    if (res[k] === true) {
                        cls += ` ${k}`;
                    }
                }
            }
        }
        return cls;
    }
    get columnsTotalWidths() {
        return this._columnGroupWidths.total;
    }
    ngDoCheck() {
        if (this._rowDiffer.diff(this.row)) {
            this.cd.markForCheck();
        }
    }
    trackByGroups(index, colGroup) {
        return colGroup.type;
    }
    columnTrackingFn(index, column) {
        return column.$$id;
    }
    buildStylesByGroup() {
        this._groupStyles.left = this.calcStylesByGroup('left');
        this._groupStyles.center = this.calcStylesByGroup('center');
        this._groupStyles.right = this.calcStylesByGroup('right');
        this.cd.markForCheck();
    }
    calcStylesByGroup(group) {
        const widths = this._columnGroupWidths;
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
            const offset = (offsetDiff + this.scrollbarHelper.width) * -1;
            translateXY(styles, offset, 0);
        }
        return styles;
    }
    onActivate(event, index) {
        event.cellIndex = index;
        event.rowElement = this._element;
        this.activate.emit(event);
    }
    onKeyDown(event) {
        const keyCode = event.keyCode;
        const isTargetRow = event.target === this._element;
        const isAction = keyCode === Keys.return ||
            keyCode === Keys.down ||
            keyCode === Keys.up ||
            keyCode === Keys.left ||
            keyCode === Keys.right;
        if (isAction && isTargetRow) {
            event.preventDefault();
            event.stopPropagation();
            this.activate.emit({
                type: 'keydown',
                event,
                row: this.row,
                rowElement: this._element
            });
        }
    }
    onMouseenter(event) {
        this.activate.emit({
            type: 'mouseenter',
            event,
            row: this.row,
            rowElement: this._element
        });
    }
    recalculateColumns(val = this.columns) {
        this._columns = val;
        const colsByPin = columnsByPin(this._columns);
        this._columnsByPin = columnsByPinArr(this._columns);
        this._columnGroupWidths = columnGroupWidths(colsByPin, this._columns);
    }
    onTreeAction() {
        this.treeAction.emit();
    }
};
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
DataTableBodyRowComponent.ctorParameters = () => [
    { type: KeyValueDiffers },
    { type: ScrollbarHelper, decorators: [{ type: SkipSelf }] },
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DataTableBodyRowComponent, [{
        type: Component,
        args: [{
                selector: 'datatable-body-row',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div
      *ngFor="let colGroup of _columnsByPin; let i = index; trackBy: trackByGroups"
      class="datatable-row-{{ colGroup.type }} datatable-row-group"
      [ngStyle]="_groupStyles[colGroup.type]"
    >
      <datatable-body-cell
        *ngFor="let column of colGroup.columns; let ii = index; trackBy: columnTrackingFn"
        tabindex="-1"
        [row]="row"
        [group]="group"
        [expanded]="expanded"
        [isSelected]="isSelected"
        [rowIndex]="rowIndex"
        [column]="column"
        [rowHeight]="rowHeight"
        [displayCheck]="displayCheck"
        [treeStatus]="treeStatus"
        (activate)="onActivate($event, ii)"
        (treeAction)="onTreeAction()"
      >
      </datatable-body-cell>
    </div>
  `
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
export { DataTableBodyRowComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS1yb3cuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovQHN3aW1sYW5lL25neC1kYXRhdGFibGUvbGliL2NvbXBvbmVudHMvYm9keS9ib2R5LXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFdBQVcsRUFDWCxVQUFVLEVBQ1YsTUFBTSxFQUNOLGVBQWUsRUFDZixjQUFjLEVBQ2QsWUFBWSxFQUNaLFlBQVksRUFDWix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLE9BQU8sRUFDUCxRQUFRLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDeEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJwRCxJQUFhLHlCQUF5QixHQUF0QyxNQUFhLHlCQUF5QjtBQUFHLElBb0d2QyxZQUNVLE9BQXdCLEVBQ1osZUFBZ0MsRUFDNUMsRUFBcUIsRUFDN0IsT0FBbUI7QUFDcEIsUUFKUyxZQUFPLEdBQVAsT0FBTyxDQUFpQjtBQUFDLFFBQ2Isb0JBQWUsR0FBZixlQUFlLENBQWlCO0FBQUMsUUFDN0MsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7QUFBQyxRQXRFdkIsZUFBVSxHQUFlLFdBQVcsQ0FBQztBQUNoRCxRQWlEWSxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDN0QsUUFBWSxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDL0QsUUFPRSxpQkFBWSxHQUEyQjtBQUN6QyxZQUFJLElBQUksRUFBRSxFQUFFO0FBQ1os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QUFDO0FBQ3ZCLHlEQTJCRztBQUlEO0FBQWEsSUFGWixXQUFXLENBQUMsaUJBQWlCLENBQUM7QUFDaEMsSUFBRSxLQUFLLEVBQUU7QUFDViw0REFBb0I7QUFHbEI7QUFBYSxJQURaLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztBQUNoQyxtRUFFRztBQUVTO0FBQWEsSUFBdEIsTUFBTSxFQUFFO0FBQUMsMkRBQWlEO0FBQ2pEO0FBQWEsSUFBdEIsTUFBTSxFQUFFO0FBQUMsNkRBQW1EO0FBMkU3RDtBQUFhLElBRFosWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3RDLDBEQXNCRztBQUdEO0FBQWEsSUFEWixZQUFZLENBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDekMsNkRBT0c7QUEvTFUseUJBQXlCLG9CQTVCckMsU0FBUyxDQUFDLGZBNEJQLENBc0dDLFdBQUEsUUFBUSxFQUFFLENBQUE7Q0FqSWIsUUFBUSxFQUFFLFhBaUlJLEdBdEdILHlCQUF5QixDQTJNckM7QUF0TytCLFVBQzlCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLFVBQy9DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lCQXVCVCxNQUNGLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkE2TUY7QUFBQyxTQTVNWSx5QkFBeUI7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIEhvc3RCaW5kaW5nLFxuICBFbGVtZW50UmVmLFxuICBPdXRwdXQsXG4gIEtleVZhbHVlRGlmZmVycyxcbiAgS2V5VmFsdWVEaWZmZXIsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIERvQ2hlY2ssXG4gIFNraXBTZWxmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUcmVlU3RhdHVzIH0gZnJvbSAnLi9ib2R5LWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IGNvbHVtbnNCeVBpbiwgY29sdW1uR3JvdXBXaWR0aHMsIGNvbHVtbnNCeVBpbkFyciB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbHVtbic7XG5pbXBvcnQgeyBLZXlzIH0gZnJvbSAnLi4vLi4vdXRpbHMva2V5cyc7XG5pbXBvcnQgeyBTY3JvbGxiYXJIZWxwZXIgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zY3JvbGxiYXItaGVscGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgdHJhbnNsYXRlWFkgfSBmcm9tICcuLi8uLi91dGlscy90cmFuc2xhdGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRhdGFibGUtYm9keS1yb3cnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2XG4gICAgICAqbmdGb3I9XCJsZXQgY29sR3JvdXAgb2YgX2NvbHVtbnNCeVBpbjsgbGV0IGkgPSBpbmRleDsgdHJhY2tCeTogdHJhY2tCeUdyb3Vwc1wiXG4gICAgICBjbGFzcz1cImRhdGF0YWJsZS1yb3cte3sgY29sR3JvdXAudHlwZSB9fSBkYXRhdGFibGUtcm93LWdyb3VwXCJcbiAgICAgIFtuZ1N0eWxlXT1cIl9ncm91cFN0eWxlc1tjb2xHcm91cC50eXBlXVwiXG4gICAgPlxuICAgICAgPGRhdGF0YWJsZS1ib2R5LWNlbGxcbiAgICAgICAgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2xHcm91cC5jb2x1bW5zOyBsZXQgaWkgPSBpbmRleDsgdHJhY2tCeTogY29sdW1uVHJhY2tpbmdGblwiXG4gICAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgICBbcm93XT1cInJvd1wiXG4gICAgICAgIFtncm91cF09XCJncm91cFwiXG4gICAgICAgIFtleHBhbmRlZF09XCJleHBhbmRlZFwiXG4gICAgICAgIFtpc1NlbGVjdGVkXT1cImlzU2VsZWN0ZWRcIlxuICAgICAgICBbcm93SW5kZXhdPVwicm93SW5kZXhcIlxuICAgICAgICBbY29sdW1uXT1cImNvbHVtblwiXG4gICAgICAgIFtyb3dIZWlnaHRdPVwicm93SGVpZ2h0XCJcbiAgICAgICAgW2Rpc3BsYXlDaGVja109XCJkaXNwbGF5Q2hlY2tcIlxuICAgICAgICBbdHJlZVN0YXR1c109XCJ0cmVlU3RhdHVzXCJcbiAgICAgICAgKGFjdGl2YXRlKT1cIm9uQWN0aXZhdGUoJGV2ZW50LCBpaSlcIlxuICAgICAgICAodHJlZUFjdGlvbik9XCJvblRyZWVBY3Rpb24oKVwiXG4gICAgICA+XG4gICAgICA8L2RhdGF0YWJsZS1ib2R5LWNlbGw+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlQm9keVJvd0NvbXBvbmVudCBpbXBsZW1lbnRzIERvQ2hlY2sge1xuICBASW5wdXQoKSBzZXQgY29sdW1ucyh2YWw6IGFueVtdKSB7XG4gICAgdGhpcy5fY29sdW1ucyA9IHZhbDtcbiAgICB0aGlzLnJlY2FsY3VsYXRlQ29sdW1ucyh2YWwpO1xuICAgIHRoaXMuYnVpbGRTdHlsZXNCeUdyb3VwKCk7XG4gIH1cblxuICBnZXQgY29sdW1ucygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbHVtbnM7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgaW5uZXJXaWR0aCh2YWw6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9jb2x1bW5zKSB7XG4gICAgICBjb25zdCBjb2xCeVBpbiA9IGNvbHVtbnNCeVBpbih0aGlzLl9jb2x1bW5zKTtcbiAgICAgIHRoaXMuX2NvbHVtbkdyb3VwV2lkdGhzID0gY29sdW1uR3JvdXBXaWR0aHMoY29sQnlQaW4sIHRoaXMuX2NvbHVtbnMpO1xuICAgIH1cblxuICAgIHRoaXMuX2lubmVyV2lkdGggPSB2YWw7XG4gICAgdGhpcy5yZWNhbGN1bGF0ZUNvbHVtbnMoKTtcbiAgICB0aGlzLmJ1aWxkU3R5bGVzQnlHcm91cCgpO1xuICB9XG5cbiAgZ2V0IGlubmVyV2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5faW5uZXJXaWR0aDtcbiAgfVxuXG4gIEBJbnB1dCgpIGV4cGFuZGVkOiBib29sZWFuO1xuICBASW5wdXQoKSByb3dDbGFzczogYW55O1xuICBASW5wdXQoKSByb3c6IGFueTtcbiAgQElucHV0KCkgZ3JvdXA6IGFueTtcbiAgQElucHV0KCkgaXNTZWxlY3RlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgcm93SW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCkgZGlzcGxheUNoZWNrOiBhbnk7XG4gIEBJbnB1dCgpIHRyZWVTdGF0dXM6IFRyZWVTdGF0dXMgPSAnY29sbGFwc2VkJztcblxuICBASW5wdXQoKVxuICBzZXQgb2Zmc2V0WCh2YWw6IG51bWJlcikge1xuICAgIHRoaXMuX29mZnNldFggPSB2YWw7XG4gICAgdGhpcy5idWlsZFN0eWxlc0J5R3JvdXAoKTtcbiAgfVxuICBnZXQgb2Zmc2V0WCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb2Zmc2V0WDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgY3NzQ2xhc3MoKSB7XG4gICAgbGV0IGNscyA9ICdkYXRhdGFibGUtYm9keS1yb3cnO1xuICAgIGlmICh0aGlzLmlzU2VsZWN0ZWQpIHtcbiAgICAgIGNscyArPSAnIGFjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0aGlzLnJvd0luZGV4ICUgMiAhPT0gMCkge1xuICAgICAgY2xzICs9ICcgZGF0YXRhYmxlLXJvdy1vZGQnO1xuICAgIH1cbiAgICBpZiAodGhpcy5yb3dJbmRleCAlIDIgPT09IDApIHtcbiAgICAgIGNscyArPSAnIGRhdGF0YWJsZS1yb3ctZXZlbic7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucm93Q2xhc3MpIHtcbiAgICAgIGNvbnN0IHJlcyA9IHRoaXMucm93Q2xhc3ModGhpcy5yb3cpO1xuICAgICAgaWYgKHR5cGVvZiByZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNscyArPSBgICR7cmVzfWA7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiByZXMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhyZXMpO1xuICAgICAgICBmb3IgKGNvbnN0IGsgb2Yga2V5cykge1xuICAgICAgICAgIGlmIChyZXNba10gPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNscyArPSBgICR7a31gO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjbHM7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodC5weCcpXG4gIEBJbnB1dCgpXG4gIHJvd0hlaWdodDogbnVtYmVyO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgucHgnKVxuICBnZXQgY29sdW1uc1RvdGFsV2lkdGhzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbHVtbkdyb3VwV2lkdGhzLnRvdGFsO1xuICB9XG5cbiAgQE91dHB1dCgpIGFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHRyZWVBY3Rpb246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIF9lbGVtZW50OiBhbnk7XG4gIF9jb2x1bW5Hcm91cFdpZHRoczogYW55O1xuICBfY29sdW1uc0J5UGluOiBhbnk7XG4gIF9vZmZzZXRYOiBudW1iZXI7XG4gIF9jb2x1bW5zOiBhbnlbXTtcbiAgX2lubmVyV2lkdGg6IG51bWJlcjtcbiAgX2dyb3VwU3R5bGVzOiB7IFtwcm9wOiBzdHJpbmddOiB7fSB9ID0ge1xuICAgIGxlZnQ6IHt9LFxuICAgIGNlbnRlcjoge30sXG4gICAgcmlnaHQ6IHt9XG4gIH07XG5cbiAgcHJpdmF0ZSBfcm93RGlmZmVyOiBLZXlWYWx1ZURpZmZlcjx7fSwge30+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGlmZmVyczogS2V5VmFsdWVEaWZmZXJzLFxuICAgIEBTa2lwU2VsZigpIHByaXZhdGUgc2Nyb2xsYmFySGVscGVyOiBTY3JvbGxiYXJIZWxwZXIsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgZWxlbWVudDogRWxlbWVudFJlZlxuICApIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuX3Jvd0RpZmZlciA9IGRpZmZlcnMuZmluZCh7fSkuY3JlYXRlKCk7XG4gIH1cblxuICBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3Jvd0RpZmZlci5kaWZmKHRoaXMucm93KSkge1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICB0cmFja0J5R3JvdXBzKGluZGV4OiBudW1iZXIsIGNvbEdyb3VwOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBjb2xHcm91cC50eXBlO1xuICB9XG5cbiAgY29sdW1uVHJhY2tpbmdGbihpbmRleDogbnVtYmVyLCBjb2x1bW46IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIGNvbHVtbi4kJGlkO1xuICB9XG5cbiAgYnVpbGRTdHlsZXNCeUdyb3VwKCkge1xuICAgIHRoaXMuX2dyb3VwU3R5bGVzLmxlZnQgPSB0aGlzLmNhbGNTdHlsZXNCeUdyb3VwKCdsZWZ0Jyk7XG4gICAgdGhpcy5fZ3JvdXBTdHlsZXMuY2VudGVyID0gdGhpcy5jYWxjU3R5bGVzQnlHcm91cCgnY2VudGVyJyk7XG4gICAgdGhpcy5fZ3JvdXBTdHlsZXMucmlnaHQgPSB0aGlzLmNhbGNTdHlsZXNCeUdyb3VwKCdyaWdodCcpO1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBjYWxjU3R5bGVzQnlHcm91cChncm91cDogc3RyaW5nKSB7XG4gICAgY29uc3Qgd2lkdGhzID0gdGhpcy5fY29sdW1uR3JvdXBXaWR0aHM7XG4gICAgY29uc3Qgb2Zmc2V0WCA9IHRoaXMub2Zmc2V0WDtcblxuICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgIHdpZHRoOiBgJHt3aWR0aHNbZ3JvdXBdfXB4YFxuICAgIH07XG5cbiAgICBpZiAoZ3JvdXAgPT09ICdsZWZ0Jykge1xuICAgICAgdHJhbnNsYXRlWFkoc3R5bGVzLCBvZmZzZXRYLCAwKTtcbiAgICB9IGVsc2UgaWYgKGdyb3VwID09PSAncmlnaHQnKSB7XG4gICAgICBjb25zdCBib2R5V2lkdGggPSBwYXJzZUludCh0aGlzLmlubmVyV2lkdGggKyAnJywgMCk7XG4gICAgICBjb25zdCB0b3RhbERpZmYgPSB3aWR0aHMudG90YWwgLSBib2R5V2lkdGg7XG4gICAgICBjb25zdCBvZmZzZXREaWZmID0gdG90YWxEaWZmIC0gb2Zmc2V0WDtcbiAgICAgIGNvbnN0IG9mZnNldCA9IChvZmZzZXREaWZmICsgdGhpcy5zY3JvbGxiYXJIZWxwZXIud2lkdGgpICogLTE7XG4gICAgICB0cmFuc2xhdGVYWShzdHlsZXMsIG9mZnNldCwgMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfVxuXG4gIG9uQWN0aXZhdGUoZXZlbnQ6IGFueSwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGV2ZW50LmNlbGxJbmRleCA9IGluZGV4O1xuICAgIGV2ZW50LnJvd0VsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuICAgIHRoaXMuYWN0aXZhdGUuZW1pdChldmVudCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3Qga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XG4gICAgY29uc3QgaXNUYXJnZXRSb3cgPSBldmVudC50YXJnZXQgPT09IHRoaXMuX2VsZW1lbnQ7XG5cbiAgICBjb25zdCBpc0FjdGlvbiA9XG4gICAgICBrZXlDb2RlID09PSBLZXlzLnJldHVybiB8fFxuICAgICAga2V5Q29kZSA9PT0gS2V5cy5kb3duIHx8XG4gICAgICBrZXlDb2RlID09PSBLZXlzLnVwIHx8XG4gICAgICBrZXlDb2RlID09PSBLZXlzLmxlZnQgfHxcbiAgICAgIGtleUNvZGUgPT09IEtleXMucmlnaHQ7XG5cbiAgICBpZiAoaXNBY3Rpb24gJiYgaXNUYXJnZXRSb3cpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgdGhpcy5hY3RpdmF0ZS5lbWl0KHtcbiAgICAgICAgdHlwZTogJ2tleWRvd24nLFxuICAgICAgICBldmVudCxcbiAgICAgICAgcm93OiB0aGlzLnJvdyxcbiAgICAgICAgcm93RWxlbWVudDogdGhpcy5fZWxlbWVudFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicsIFsnJGV2ZW50J10pXG4gIG9uTW91c2VlbnRlcihldmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmF0ZS5lbWl0KHtcbiAgICAgIHR5cGU6ICdtb3VzZWVudGVyJyxcbiAgICAgIGV2ZW50LFxuICAgICAgcm93OiB0aGlzLnJvdyxcbiAgICAgIHJvd0VsZW1lbnQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9KTtcbiAgfVxuXG4gIHJlY2FsY3VsYXRlQ29sdW1ucyh2YWw6IGFueVtdID0gdGhpcy5jb2x1bW5zKTogdm9pZCB7XG4gICAgdGhpcy5fY29sdW1ucyA9IHZhbDtcbiAgICBjb25zdCBjb2xzQnlQaW4gPSBjb2x1bW5zQnlQaW4odGhpcy5fY29sdW1ucyk7XG4gICAgdGhpcy5fY29sdW1uc0J5UGluID0gY29sdW1uc0J5UGluQXJyKHRoaXMuX2NvbHVtbnMpO1xuICAgIHRoaXMuX2NvbHVtbkdyb3VwV2lkdGhzID0gY29sdW1uR3JvdXBXaWR0aHMoY29sc0J5UGluLCB0aGlzLl9jb2x1bW5zKTtcbiAgfVxuXG4gIG9uVHJlZUFjdGlvbigpIHtcbiAgICB0aGlzLnRyZWVBY3Rpb24uZW1pdCgpO1xuICB9XG59XG4iXX0=