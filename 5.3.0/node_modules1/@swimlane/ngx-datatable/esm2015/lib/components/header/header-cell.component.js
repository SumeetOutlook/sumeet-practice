import { __decorate } from "tslib";
import { Component, Input, EventEmitter, Output, HostBinding, HostListener, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { SelectionType } from '../../types/selection.type';
import { nextSortDir } from '../../utils/sort';
import { SortDirection } from '../../types/sort-direction.type';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function DataTableHeaderCellComponent_1_ng_template_0_Template(rf, ctx) { }
function DataTableHeaderCellComponent_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, DataTableHeaderCellComponent_1_ng_template_0_Template, 0, 0, "ng-template", 5);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.targetMarkerTemplate)("ngTemplateOutletContext", ctx_r0.targetMarkerContext);
} }
function DataTableHeaderCellComponent_label_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "label", 6);
    ɵngcc0.ɵɵelementStart(1, "input", 7);
    ɵngcc0.ɵɵlistener("change", function DataTableHeaderCellComponent_label_2_Template_input_change_1_listener() { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.select.emit(!ctx_r5.allRowsSelected); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("checked", ctx_r1.allRowsSelected);
} }
function DataTableHeaderCellComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 8);
    ɵngcc0.ɵɵelementStart(1, "span", 9);
    ɵngcc0.ɵɵlistener("click", function DataTableHeaderCellComponent_span_3_Template_span_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.onSort(); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r2.name, ɵngcc0.ɵɵsanitizeHtml);
} }
function DataTableHeaderCellComponent_4_ng_template_0_Template(rf, ctx) { }
function DataTableHeaderCellComponent_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, DataTableHeaderCellComponent_4_ng_template_0_Template, 0, 0, "ng-template", 5);
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r3.column.headerTemplate)("ngTemplateOutletContext", ctx_r3.cellContext);
} }
let DataTableHeaderCellComponent = class DataTableHeaderCellComponent {
    constructor(cd) {
        this.cd = cd;
        this.sort = new EventEmitter();
        this.select = new EventEmitter();
        this.columnContextmenu = new EventEmitter(false);
        this.sortFn = this.onSort.bind(this);
        this.selectFn = this.select.emit.bind(this.select);
        this.cellContext = {
            column: this.column,
            sortDir: this.sortDir,
            sortFn: this.sortFn,
            allRowsSelected: this.allRowsSelected,
            selectFn: this.selectFn
        };
    }
    set allRowsSelected(value) {
        this._allRowsSelected = value;
        this.cellContext.allRowsSelected = value;
    }
    get allRowsSelected() {
        return this._allRowsSelected;
    }
    set column(column) {
        this._column = column;
        this.cellContext.column = column;
        this.cd.markForCheck();
    }
    get column() {
        return this._column;
    }
    set sorts(val) {
        this._sorts = val;
        this.sortDir = this.calcSortDir(val);
        this.cellContext.sortDir = this.sortDir;
        this.sortClass = this.calcSortClass(this.sortDir);
        this.cd.markForCheck();
    }
    get sorts() {
        return this._sorts;
    }
    get columnCssClasses() {
        let cls = 'datatable-header-cell';
        if (this.column.sortable)
            cls += ' sortable';
        if (this.column.resizeable)
            cls += ' resizeable';
        if (this.column.headerClass) {
            if (typeof this.column.headerClass === 'string') {
                cls += ' ' + this.column.headerClass;
            }
            else if (typeof this.column.headerClass === 'function') {
                const res = this.column.headerClass({
                    column: this.column
                });
                if (typeof res === 'string') {
                    cls += res;
                }
                else if (typeof res === 'object') {
                    const keys = Object.keys(res);
                    for (const k of keys) {
                        if (res[k] === true)
                            cls += ` ${k}`;
                    }
                }
            }
        }
        const sortDir = this.sortDir;
        if (sortDir) {
            cls += ` sort-active sort-${sortDir}`;
        }
        return cls;
    }
    get name() {
        // guaranteed to have a value by setColumnDefaults() in column-helper.ts
        return this.column.headerTemplate === undefined ? this.column.name : undefined;
    }
    get minWidth() {
        return this.column.minWidth;
    }
    get maxWidth() {
        return this.column.maxWidth;
    }
    get width() {
        return this.column.width;
    }
    get isCheckboxable() {
        return this.column.checkboxable && this.column.headerCheckboxable && this.selectionType === SelectionType.checkbox;
    }
    onContextmenu($event) {
        this.columnContextmenu.emit({ event: $event, column: this.column });
    }
    calcSortDir(sorts) {
        if (sorts && this.column) {
            const sort = sorts.find((s) => {
                return s.prop === this.column.prop;
            });
            if (sort)
                return sort.dir;
        }
    }
    onSort() {
        if (!this.column.sortable)
            return;
        const newValue = nextSortDir(this.sortType, this.sortDir);
        this.sort.emit({
            column: this.column,
            prevValue: this.sortDir,
            newValue
        });
    }
    calcSortClass(sortDir) {
        if (sortDir === SortDirection.asc) {
            return `sort-btn sort-asc ${this.sortAscendingIcon}`;
        }
        else if (sortDir === SortDirection.desc) {
            return `sort-btn sort-desc ${this.sortDescendingIcon}`;
        }
        else {
            return `sort-btn`;
        }
    }
};
DataTableHeaderCellComponent.ɵfac = function DataTableHeaderCellComponent_Factory(t) { return new (t || DataTableHeaderCellComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
DataTableHeaderCellComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DataTableHeaderCellComponent, selectors: [["datatable-header-cell"]], hostAttrs: [1, "datatable-header-cell"], hostVars: 11, hostBindings: function DataTableHeaderCellComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("contextmenu", function DataTableHeaderCellComponent_contextmenu_HostBindingHandler($event) { return ctx.onContextmenu($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("title", ctx.name);
        ɵngcc0.ɵɵclassMap(ctx.columnCssClasses);
        ɵngcc0.ɵɵstyleProp("min-width", ctx.minWidth, "px")("max-width", ctx.maxWidth, "px")("width", ctx.width, "px")("height", ctx.headerHeight, "px");
    } }, inputs: { allRowsSelected: "allRowsSelected", column: "column", sorts: "sorts", sortType: "sortType", sortAscendingIcon: "sortAscendingIcon", sortDescendingIcon: "sortDescendingIcon", isTarget: "isTarget", targetMarkerTemplate: "targetMarkerTemplate", targetMarkerContext: "targetMarkerContext", selectionType: "selectionType", headerHeight: "headerHeight" }, outputs: { sort: "sort", select: "select", columnContextmenu: "columnContextmenu" }, decls: 6, vars: 6, consts: [[1, "datatable-header-cell-template-wrap"], [4, "ngIf"], ["class", "datatable-checkbox", 4, "ngIf"], ["class", "datatable-header-cell-wrapper", 4, "ngIf"], [3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "datatable-checkbox"], ["type", "checkbox", 3, "checked", "change"], [1, "datatable-header-cell-wrapper"], [1, "datatable-header-cell-label", "draggable", 3, "innerHTML", "click"]], template: function DataTableHeaderCellComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, DataTableHeaderCellComponent_1_Template, 1, 2, undefined, 1);
        ɵngcc0.ɵɵtemplate(2, DataTableHeaderCellComponent_label_2_Template, 2, 1, "label", 2);
        ɵngcc0.ɵɵtemplate(3, DataTableHeaderCellComponent_span_3_Template, 2, 1, "span", 3);
        ɵngcc0.ɵɵtemplate(4, DataTableHeaderCellComponent_4_Template, 1, 2, undefined, 1);
        ɵngcc0.ɵɵelementStart(5, "span", 4);
        ɵngcc0.ɵɵlistener("click", function DataTableHeaderCellComponent_Template_span_click_5_listener() { return ctx.onSort(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isTarget);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isCheckboxable);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.column.headerTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.column.headerTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMap(ctx.sortClass);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
DataTableHeaderCellComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
__decorate([
    Input()
], DataTableHeaderCellComponent.prototype, "sortType", void 0);
__decorate([
    Input()
], DataTableHeaderCellComponent.prototype, "sortAscendingIcon", void 0);
__decorate([
    Input()
], DataTableHeaderCellComponent.prototype, "sortDescendingIcon", void 0);
__decorate([
    Input()
], DataTableHeaderCellComponent.prototype, "isTarget", void 0);
__decorate([
    Input()
], DataTableHeaderCellComponent.prototype, "targetMarkerTemplate", void 0);
__decorate([
    Input()
], DataTableHeaderCellComponent.prototype, "targetMarkerContext", void 0);
__decorate([
    Input()
], DataTableHeaderCellComponent.prototype, "allRowsSelected", null);
__decorate([
    Input()
], DataTableHeaderCellComponent.prototype, "selectionType", void 0);
__decorate([
    Input()
], DataTableHeaderCellComponent.prototype, "column", null);
__decorate([
    HostBinding('style.height.px'),
    Input()
], DataTableHeaderCellComponent.prototype, "headerHeight", void 0);
__decorate([
    Input()
], DataTableHeaderCellComponent.prototype, "sorts", null);
__decorate([
    Output()
], DataTableHeaderCellComponent.prototype, "sort", void 0);
__decorate([
    Output()
], DataTableHeaderCellComponent.prototype, "select", void 0);
__decorate([
    Output()
], DataTableHeaderCellComponent.prototype, "columnContextmenu", void 0);
__decorate([
    HostBinding('class')
], DataTableHeaderCellComponent.prototype, "columnCssClasses", null);
__decorate([
    HostBinding('attr.title')
], DataTableHeaderCellComponent.prototype, "name", null);
__decorate([
    HostBinding('style.minWidth.px')
], DataTableHeaderCellComponent.prototype, "minWidth", null);
__decorate([
    HostBinding('style.maxWidth.px')
], DataTableHeaderCellComponent.prototype, "maxWidth", null);
__decorate([
    HostBinding('style.width.px')
], DataTableHeaderCellComponent.prototype, "width", null);
__decorate([
    HostListener('contextmenu', ['$event'])
], DataTableHeaderCellComponent.prototype, "onContextmenu", null);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DataTableHeaderCellComponent, [{
        type: Component,
        args: [{
                selector: 'datatable-header-cell',
                template: `
    <div class="datatable-header-cell-template-wrap">
      <ng-template
        *ngIf="isTarget"
        [ngTemplateOutlet]="targetMarkerTemplate"
        [ngTemplateOutletContext]="targetMarkerContext"
      >
      </ng-template>
      <label *ngIf="isCheckboxable" class="datatable-checkbox">
        <input type="checkbox" [checked]="allRowsSelected" (change)="select.emit(!allRowsSelected)" />
      </label>
      <span *ngIf="!column.headerTemplate" class="datatable-header-cell-wrapper">
        <span class="datatable-header-cell-label draggable" (click)="onSort()" [innerHTML]="name"> </span>
      </span>
      <ng-template
        *ngIf="column.headerTemplate"
        [ngTemplateOutlet]="column.headerTemplate"
        [ngTemplateOutletContext]="cellContext"
      >
      </ng-template>
      <span (click)="onSort()" [class]="sortClass"> </span>
    </div>
  `,
                host: {
                    class: 'datatable-header-cell'
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { sort: [{
            type: Output
        }], select: [{
            type: Output
        }], columnContextmenu: [{
            type: Output
        }], allRowsSelected: [{
            type: Input
        }], column: [{
            type: Input
        }], sorts: [{
            type: Input
        }], columnCssClasses: [{
            type: HostBinding,
            args: ['class']
        }], name: [{
            type: HostBinding,
            args: ['attr.title']
        }], minWidth: [{
            type: HostBinding,
            args: ['style.minWidth.px']
        }], maxWidth: [{
            type: HostBinding,
            args: ['style.maxWidth.px']
        }], width: [{
            type: HostBinding,
            args: ['style.width.px']
        }], onContextmenu: [{
            type: HostListener,
            args: ['contextmenu', ['$event']]
        }], sortType: [{
            type: Input
        }], sortAscendingIcon: [{
            type: Input
        }], sortDescendingIcon: [{
            type: Input
        }], isTarget: [{
            type: Input
        }], targetMarkerTemplate: [{
            type: Input
        }], targetMarkerContext: [{
            type: Input
        }], selectionType: [{
            type: Input
        }], headerHeight: [{
            type: HostBinding,
            args: ['style.height.px']
        }, {
            type: Input
        }] }); })();
export { DataTableHeaderCellComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovQHN3aW1sYW5lL25neC1kYXRhdGFibGUvbGliL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci1jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsWUFBWSxFQUNaLE1BQU0sRUFDTixXQUFXLEVBQ1gsWUFBWSxFQUNaLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTNELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdDaEUsSUFBYSw0QkFBNEIsR0FBekMsTUFBYSw0QkFBNEI7QUFDekMsSUE0SEUsWUFBb0IsRUFBcUI7QUFBSSxRQUF6QixPQUFFLEdBQUYsRUFBRSxDQUFtQjtBQUFDLFFBOUVoQyxTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDekQsUUFBWSxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDM0QsUUFBWSxzQkFBaUIsR0FBRyxJQUFJLFlBQVksQ0FBcUMsS0FBSyxDQUFDLENBQUM7QUFDNUYsUUEyREUsV0FBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xDLFFBRUUsYUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDaEQsUUFDRSxnQkFBVyxHQUFRO0FBQ3JCLFlBQUksTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO0FBQ3ZCLFlBQUks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QVksQ0FBQztBQUM1Qix3REFHRztBQUdEO0FBQWEsSUFEWixXQUFXLENBQUMsbUJBQW1CLENBQUM7QUFDbkMsNERBRUc7QUFHRDtBQUFhLElBRFosV0FBVyxDQUFDLG1CQUFtQixDQUFDO0FBQ25DLDREQUVHO0FBR0Q7QUFBYSxJQURaLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztBQUNoQyx5REFFRztBQXlCRDtBQUFhLElBRFosWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzFDLGlFQUVHO0FBbElVLDRCQUE0QixvQkE5QnhDLFNBQVMsQ0FBQyxVQUNULFFBQVEsRUFBRTtjQUF1QixVQUNqQztPQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQXNCVCxVQUNEO0dBQUksRUFBRSxjQUNKLEtBQUssRUFBRSx1QkFBdUIsVUFDL0I7U0FDRDs7UUFBZSxFQUFFO1NBQXVCLENBQUMsTUFBTSxNQUNoRCxDQUFDLElBQ1c7SUFBNEIsQ0FrS3hDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUNEO0FBQUMsU0FuS1ksNEJBQTRCO0FBQ3hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPdXRwdXQsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNvcnRUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMvc29ydC50eXBlJztcbmltcG9ydCB7IFNlbGVjdGlvblR5cGUgfSBmcm9tICcuLi8uLi90eXBlcy9zZWxlY3Rpb24udHlwZSc7XG5pbXBvcnQgeyBUYWJsZUNvbHVtbiB9IGZyb20gJy4uLy4uL3R5cGVzL3RhYmxlLWNvbHVtbi50eXBlJztcbmltcG9ydCB7IG5leHRTb3J0RGlyIH0gZnJvbSAnLi4vLi4vdXRpbHMvc29ydCc7XG5pbXBvcnQgeyBTb3J0RGlyZWN0aW9uIH0gZnJvbSAnLi4vLi4vdHlwZXMvc29ydC1kaXJlY3Rpb24udHlwZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGF0YWJsZS1oZWFkZXItY2VsbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImRhdGF0YWJsZS1oZWFkZXItY2VsbC10ZW1wbGF0ZS13cmFwXCI+XG4gICAgICA8bmctdGVtcGxhdGVcbiAgICAgICAgKm5nSWY9XCJpc1RhcmdldFwiXG4gICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRhcmdldE1hcmtlclRlbXBsYXRlXCJcbiAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInRhcmdldE1hcmtlckNvbnRleHRcIlxuICAgICAgPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxsYWJlbCAqbmdJZj1cImlzQ2hlY2tib3hhYmxlXCIgY2xhc3M9XCJkYXRhdGFibGUtY2hlY2tib3hcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFtjaGVja2VkXT1cImFsbFJvd3NTZWxlY3RlZFwiIChjaGFuZ2UpPVwic2VsZWN0LmVtaXQoIWFsbFJvd3NTZWxlY3RlZClcIiAvPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxzcGFuICpuZ0lmPVwiIWNvbHVtbi5oZWFkZXJUZW1wbGF0ZVwiIGNsYXNzPVwiZGF0YXRhYmxlLWhlYWRlci1jZWxsLXdyYXBwZXJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXRhdGFibGUtaGVhZGVyLWNlbGwtbGFiZWwgZHJhZ2dhYmxlXCIgKGNsaWNrKT1cIm9uU29ydCgpXCIgW2lubmVySFRNTF09XCJuYW1lXCI+IDwvc3Bhbj5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgICAqbmdJZj1cImNvbHVtbi5oZWFkZXJUZW1wbGF0ZVwiXG4gICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbHVtbi5oZWFkZXJUZW1wbGF0ZVwiXG4gICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJjZWxsQ29udGV4dFwiXG4gICAgICA+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPHNwYW4gKGNsaWNrKT1cIm9uU29ydCgpXCIgW2NsYXNzXT1cInNvcnRDbGFzc1wiPiA8L3NwYW4+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2RhdGF0YWJsZS1oZWFkZXItY2VsbCdcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlSGVhZGVyQ2VsbENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHNvcnRUeXBlOiBTb3J0VHlwZTtcbiAgQElucHV0KCkgc29ydEFzY2VuZGluZ0ljb246IHN0cmluZztcbiAgQElucHV0KCkgc29ydERlc2NlbmRpbmdJY29uOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgaXNUYXJnZXQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHRhcmdldE1hcmtlclRlbXBsYXRlOiBhbnk7XG4gIEBJbnB1dCgpIHRhcmdldE1hcmtlckNvbnRleHQ6IGFueTtcblxuICBfYWxsUm93c1NlbGVjdGVkOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIHNldCBhbGxSb3dzU2VsZWN0ZWQodmFsdWUpIHtcbiAgICB0aGlzLl9hbGxSb3dzU2VsZWN0ZWQgPSB2YWx1ZTtcbiAgICB0aGlzLmNlbGxDb250ZXh0LmFsbFJvd3NTZWxlY3RlZCA9IHZhbHVlO1xuICB9XG4gIGdldCBhbGxSb3dzU2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbFJvd3NTZWxlY3RlZDtcbiAgfVxuXG4gIEBJbnB1dCgpIHNlbGVjdGlvblR5cGU6IFNlbGVjdGlvblR5cGU7XG5cbiAgQElucHV0KCkgc2V0IGNvbHVtbihjb2x1bW46IFRhYmxlQ29sdW1uKSB7XG4gICAgdGhpcy5fY29sdW1uID0gY29sdW1uO1xuICAgIHRoaXMuY2VsbENvbnRleHQuY29sdW1uID0gY29sdW1uO1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBnZXQgY29sdW1uKCk6IFRhYmxlQ29sdW1uIHtcbiAgICByZXR1cm4gdGhpcy5fY29sdW1uO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQucHgnKVxuICBASW5wdXQoKVxuICBoZWFkZXJIZWlnaHQ6IG51bWJlcjtcblxuICBASW5wdXQoKSBzZXQgc29ydHModmFsOiBhbnlbXSkge1xuICAgIHRoaXMuX3NvcnRzID0gdmFsO1xuICAgIHRoaXMuc29ydERpciA9IHRoaXMuY2FsY1NvcnREaXIodmFsKTtcbiAgICB0aGlzLmNlbGxDb250ZXh0LnNvcnREaXIgPSB0aGlzLnNvcnREaXI7XG4gICAgdGhpcy5zb3J0Q2xhc3MgPSB0aGlzLmNhbGNTb3J0Q2xhc3ModGhpcy5zb3J0RGlyKTtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgZ2V0IHNvcnRzKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5fc29ydHM7XG4gIH1cblxuICBAT3V0cHV0KCkgc29ydDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY29sdW1uQ29udGV4dG1lbnUgPSBuZXcgRXZlbnRFbWl0dGVyPHsgZXZlbnQ6IE1vdXNlRXZlbnQ7IGNvbHVtbjogYW55IH0+KGZhbHNlKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGNvbHVtbkNzc0NsYXNzZXMoKTogYW55IHtcbiAgICBsZXQgY2xzID0gJ2RhdGF0YWJsZS1oZWFkZXItY2VsbCc7XG5cbiAgICBpZiAodGhpcy5jb2x1bW4uc29ydGFibGUpIGNscyArPSAnIHNvcnRhYmxlJztcbiAgICBpZiAodGhpcy5jb2x1bW4ucmVzaXplYWJsZSkgY2xzICs9ICcgcmVzaXplYWJsZSc7XG4gICAgaWYgKHRoaXMuY29sdW1uLmhlYWRlckNsYXNzKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuY29sdW1uLmhlYWRlckNsYXNzID09PSAnc3RyaW5nJykge1xuICAgICAgICBjbHMgKz0gJyAnICsgdGhpcy5jb2x1bW4uaGVhZGVyQ2xhc3M7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLmNvbHVtbi5oZWFkZXJDbGFzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb25zdCByZXMgPSB0aGlzLmNvbHVtbi5oZWFkZXJDbGFzcyh7XG4gICAgICAgICAgY29sdW1uOiB0aGlzLmNvbHVtblxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjbHMgKz0gcmVzO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiByZXMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHJlcyk7XG4gICAgICAgICAgZm9yIChjb25zdCBrIG9mIGtleXMpIHtcbiAgICAgICAgICAgIGlmIChyZXNba10gPT09IHRydWUpIGNscyArPSBgICR7a31gO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNvcnREaXIgPSB0aGlzLnNvcnREaXI7XG4gICAgaWYgKHNvcnREaXIpIHtcbiAgICAgIGNscyArPSBgIHNvcnQtYWN0aXZlIHNvcnQtJHtzb3J0RGlyfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNscztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnYXR0ci50aXRsZScpXG4gIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgLy8gZ3VhcmFudGVlZCB0byBoYXZlIGEgdmFsdWUgYnkgc2V0Q29sdW1uRGVmYXVsdHMoKSBpbiBjb2x1bW4taGVscGVyLnRzXG4gICAgcmV0dXJuIHRoaXMuY29sdW1uLmhlYWRlclRlbXBsYXRlID09PSB1bmRlZmluZWQgPyB0aGlzLmNvbHVtbi5uYW1lIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5taW5XaWR0aC5weCcpXG4gIGdldCBtaW5XaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNvbHVtbi5taW5XaWR0aDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUubWF4V2lkdGgucHgnKVxuICBnZXQgbWF4V2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jb2x1bW4ubWF4V2lkdGg7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLndpZHRoLnB4JylcbiAgZ2V0IHdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1uLndpZHRoO1xuICB9XG5cbiAgZ2V0IGlzQ2hlY2tib3hhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbHVtbi5jaGVja2JveGFibGUgJiYgdGhpcy5jb2x1bW4uaGVhZGVyQ2hlY2tib3hhYmxlICYmIHRoaXMuc2VsZWN0aW9uVHlwZSA9PT0gU2VsZWN0aW9uVHlwZS5jaGVja2JveDtcbiAgfVxuXG4gIHNvcnRGbiA9IHRoaXMub25Tb3J0LmJpbmQodGhpcyk7XG4gIHNvcnRDbGFzczogc3RyaW5nO1xuICBzb3J0RGlyOiBTb3J0RGlyZWN0aW9uO1xuICBzZWxlY3RGbiA9IHRoaXMuc2VsZWN0LmVtaXQuYmluZCh0aGlzLnNlbGVjdCk7XG5cbiAgY2VsbENvbnRleHQ6IGFueSA9IHtcbiAgICBjb2x1bW46IHRoaXMuY29sdW1uLFxuICAgIHNvcnREaXI6IHRoaXMuc29ydERpcixcbiAgICBzb3J0Rm46IHRoaXMuc29ydEZuLFxuICAgIGFsbFJvd3NTZWxlY3RlZDogdGhpcy5hbGxSb3dzU2VsZWN0ZWQsXG4gICAgc2VsZWN0Rm46IHRoaXMuc2VsZWN0Rm5cbiAgfTtcblxuICBwcml2YXRlIF9jb2x1bW46IFRhYmxlQ29sdW1uO1xuICBwcml2YXRlIF9zb3J0czogYW55W107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgQEhvc3RMaXN0ZW5lcignY29udGV4dG1lbnUnLCBbJyRldmVudCddKVxuICBvbkNvbnRleHRtZW51KCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuY29sdW1uQ29udGV4dG1lbnUuZW1pdCh7IGV2ZW50OiAkZXZlbnQsIGNvbHVtbjogdGhpcy5jb2x1bW4gfSk7XG4gIH1cblxuICBjYWxjU29ydERpcihzb3J0czogYW55W10pOiBhbnkge1xuICAgIGlmIChzb3J0cyAmJiB0aGlzLmNvbHVtbikge1xuICAgICAgY29uc3Qgc29ydCA9IHNvcnRzLmZpbmQoKHM6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gcy5wcm9wID09PSB0aGlzLmNvbHVtbi5wcm9wO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChzb3J0KSByZXR1cm4gc29ydC5kaXI7XG4gICAgfVxuICB9XG5cbiAgb25Tb3J0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5jb2x1bW4uc29ydGFibGUpIHJldHVybjtcblxuICAgIGNvbnN0IG5ld1ZhbHVlID0gbmV4dFNvcnREaXIodGhpcy5zb3J0VHlwZSwgdGhpcy5zb3J0RGlyKTtcbiAgICB0aGlzLnNvcnQuZW1pdCh7XG4gICAgICBjb2x1bW46IHRoaXMuY29sdW1uLFxuICAgICAgcHJldlZhbHVlOiB0aGlzLnNvcnREaXIsXG4gICAgICBuZXdWYWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgY2FsY1NvcnRDbGFzcyhzb3J0RGlyOiBTb3J0RGlyZWN0aW9uKTogc3RyaW5nIHtcbiAgICBpZiAoc29ydERpciA9PT0gU29ydERpcmVjdGlvbi5hc2MpIHtcbiAgICAgIHJldHVybiBgc29ydC1idG4gc29ydC1hc2MgJHt0aGlzLnNvcnRBc2NlbmRpbmdJY29ufWA7XG4gICAgfSBlbHNlIGlmIChzb3J0RGlyID09PSBTb3J0RGlyZWN0aW9uLmRlc2MpIHtcbiAgICAgIHJldHVybiBgc29ydC1idG4gc29ydC1kZXNjICR7dGhpcy5zb3J0RGVzY2VuZGluZ0ljb259YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGBzb3J0LWJ0bmA7XG4gICAgfVxuICB9XG59XG4iXX0=