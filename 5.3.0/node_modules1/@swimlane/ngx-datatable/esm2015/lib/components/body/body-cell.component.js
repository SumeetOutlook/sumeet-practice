import { __decorate } from "tslib";
import { Component, Input, PipeTransform, HostBinding, ViewChild, ChangeDetectorRef, Output, EventEmitter, HostListener, ElementRef, ViewContainerRef, OnDestroy, DoCheck, ChangeDetectionStrategy } from '@angular/core';
import { SortDirection } from '../../types/sort-direction.type';
import { Keys } from '../../utils/keys';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["cellTemplate"];
function DataTableBodyCellComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "label", 4);
    ɵngcc0.ɵɵelementStart(1, "input", 5);
    ɵngcc0.ɵɵlistener("click", function DataTableBodyCellComponent_label_1_Template_input_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onCheckboxChange($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("checked", ctx_r0.isSelected);
} }
function DataTableBodyCellComponent_ng_container_2_button_1_i_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 11);
} }
function DataTableBodyCellComponent_ng_container_2_button_1_i_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 12);
} }
function DataTableBodyCellComponent_ng_container_2_button_1_i_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 13);
} }
function DataTableBodyCellComponent_ng_container_2_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 7);
    ɵngcc0.ɵɵlistener("click", function DataTableBodyCellComponent_ng_container_2_button_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r11 = ɵngcc0.ɵɵnextContext(2); return ctx_r11.onTreeAction(); });
    ɵngcc0.ɵɵelementStart(1, "span");
    ɵngcc0.ɵɵtemplate(2, DataTableBodyCellComponent_ng_container_2_button_1_i_2_Template, 1, 0, "i", 8);
    ɵngcc0.ɵɵtemplate(3, DataTableBodyCellComponent_ng_container_2_button_1_i_3_Template, 1, 0, "i", 9);
    ɵngcc0.ɵɵtemplate(4, DataTableBodyCellComponent_ng_container_2_button_1_i_4_Template, 1, 0, "i", 10);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("disabled", ctx_r6.treeStatus === "disabled");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.treeStatus === "loading");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.treeStatus === "collapsed");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.treeStatus === "expanded" || ctx_r6.treeStatus === "disabled");
} }
function DataTableBodyCellComponent_ng_container_2_2_ng_template_0_Template(rf, ctx) { }
const _c1 = function (a0) { return { cellContext: a0 }; };
function DataTableBodyCellComponent_ng_container_2_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, DataTableBodyCellComponent_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template", 14);
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r7.column.treeToggleTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c1, ctx_r7.cellContext));
} }
function DataTableBodyCellComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, DataTableBodyCellComponent_ng_container_2_button_1_Template, 5, 4, "button", 6);
    ɵngcc0.ɵɵtemplate(2, DataTableBodyCellComponent_ng_container_2_2_Template, 1, 4, undefined, 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r1.column.treeToggleTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.column.treeToggleTemplate);
} }
function DataTableBodyCellComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 15);
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("title", ctx_r2.sanitizedValue)("innerHTML", ctx_r2.value, ɵngcc0.ɵɵsanitizeHtml);
} }
function DataTableBodyCellComponent_4_ng_template_0_Template(rf, ctx) { }
function DataTableBodyCellComponent_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, DataTableBodyCellComponent_4_ng_template_0_Template, 0, 0, "ng-template", 14, 16, ɵngcc0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r3.column.cellTemplate)("ngTemplateOutletContext", ctx_r3.cellContext);
} }
let DataTableBodyCellComponent = class DataTableBodyCellComponent {
    constructor(element, cd) {
        this.cd = cd;
        this.activate = new EventEmitter();
        this.treeAction = new EventEmitter();
        this.isFocused = false;
        this.onCheckboxChangeFn = this.onCheckboxChange.bind(this);
        this.activateFn = this.activate.emit.bind(this.activate);
        this.cellContext = {
            onCheckboxChangeFn: this.onCheckboxChangeFn,
            activateFn: this.activateFn,
            row: this.row,
            group: this.group,
            value: this.value,
            column: this.column,
            rowHeight: this.rowHeight,
            isSelected: this.isSelected,
            rowIndex: this.rowIndex,
            treeStatus: this.treeStatus,
            onTreeAction: this.onTreeAction.bind(this)
        };
        this._element = element.nativeElement;
    }
    set group(group) {
        this._group = group;
        this.cellContext.group = group;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get group() {
        return this._group;
    }
    set rowHeight(val) {
        this._rowHeight = val;
        this.cellContext.rowHeight = val;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get rowHeight() {
        return this._rowHeight;
    }
    set isSelected(val) {
        this._isSelected = val;
        this.cellContext.isSelected = val;
        this.cd.markForCheck();
    }
    get isSelected() {
        return this._isSelected;
    }
    set expanded(val) {
        this._expanded = val;
        this.cellContext.expanded = val;
        this.cd.markForCheck();
    }
    get expanded() {
        return this._expanded;
    }
    set rowIndex(val) {
        this._rowIndex = val;
        this.cellContext.rowIndex = val;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get rowIndex() {
        return this._rowIndex;
    }
    set column(column) {
        this._column = column;
        this.cellContext.column = column;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get column() {
        return this._column;
    }
    set row(row) {
        this._row = row;
        this.cellContext.row = row;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get row() {
        return this._row;
    }
    set sorts(val) {
        this._sorts = val;
        this.calcSortDir = this.calcSortDir(val);
    }
    get sorts() {
        return this._sorts;
    }
    set treeStatus(status) {
        if (status !== 'collapsed' && status !== 'expanded' && status !== 'loading' && status !== 'disabled') {
            this._treeStatus = 'collapsed';
        }
        else {
            this._treeStatus = status;
        }
        this.cellContext.treeStatus = this._treeStatus;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get treeStatus() {
        return this._treeStatus;
    }
    get columnCssClasses() {
        let cls = 'datatable-body-cell';
        if (this.column.cellClass) {
            if (typeof this.column.cellClass === 'string') {
                cls += ' ' + this.column.cellClass;
            }
            else if (typeof this.column.cellClass === 'function') {
                const res = this.column.cellClass({
                    row: this.row,
                    group: this.group,
                    column: this.column,
                    value: this.value,
                    rowHeight: this.rowHeight
                });
                if (typeof res === 'string') {
                    cls += ' ' + res;
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
        }
        if (!this.sortDir) {
            cls += ' sort-active';
        }
        if (this.isFocused) {
            cls += ' active';
        }
        if (this.sortDir === SortDirection.asc) {
            cls += ' sort-asc';
        }
        if (this.sortDir === SortDirection.desc) {
            cls += ' sort-desc';
        }
        return cls;
    }
    get width() {
        return this.column.width;
    }
    get minWidth() {
        return this.column.minWidth;
    }
    get maxWidth() {
        return this.column.maxWidth;
    }
    get height() {
        const height = this.rowHeight;
        if (isNaN(height)) {
            return height;
        }
        return height + 'px';
    }
    ngDoCheck() {
        this.checkValueUpdates();
    }
    ngOnDestroy() {
        if (this.cellTemplate) {
            this.cellTemplate.clear();
        }
    }
    checkValueUpdates() {
        let value = '';
        if (!this.row || !this.column) {
            value = '';
        }
        else {
            const val = this.column.$$valueGetter(this.row, this.column.prop);
            const userPipe = this.column.pipe;
            if (userPipe) {
                value = userPipe.transform(val);
            }
            else if (value !== undefined) {
                value = val;
            }
        }
        if (this.value !== value) {
            this.value = value;
            this.cellContext.value = value;
            this.sanitizedValue = value !== null && value !== undefined ? this.stripHtml(value) : value;
            this.cd.markForCheck();
        }
    }
    onFocus() {
        this.isFocused = true;
    }
    onBlur() {
        this.isFocused = false;
    }
    onClick(event) {
        this.activate.emit({
            type: 'click',
            event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element
        });
    }
    onDblClick(event) {
        this.activate.emit({
            type: 'dblclick',
            event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element
        });
    }
    onKeyDown(event) {
        const keyCode = event.keyCode;
        const isTargetCell = event.target === this._element;
        const isAction = keyCode === Keys.return ||
            keyCode === Keys.down ||
            keyCode === Keys.up ||
            keyCode === Keys.left ||
            keyCode === Keys.right;
        if (isAction && isTargetCell) {
            event.preventDefault();
            event.stopPropagation();
            this.activate.emit({
                type: 'keydown',
                event,
                row: this.row,
                group: this.group,
                rowHeight: this.rowHeight,
                column: this.column,
                value: this.value,
                cellElement: this._element
            });
        }
    }
    onCheckboxChange(event) {
        this.activate.emit({
            type: 'checkbox',
            event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element,
            treeStatus: 'collapsed'
        });
    }
    calcSortDir(sorts) {
        if (!sorts) {
            return;
        }
        const sort = sorts.find((s) => {
            return s.prop === this.column.prop;
        });
        if (sort) {
            return sort.dir;
        }
    }
    stripHtml(html) {
        if (!html.replace) {
            return html;
        }
        return html.replace(/<\/?[^>]+(>|$)/g, '');
    }
    onTreeAction() {
        this.treeAction.emit(this.row);
    }
    calcLeftMargin(column, row) {
        const levelIndent = column.treeLevelIndent != null ? column.treeLevelIndent : 50;
        return column.isTreeColumn ? row.level * levelIndent : 0;
    }
};
DataTableBodyCellComponent.ɵfac = function DataTableBodyCellComponent_Factory(t) { return new (t || DataTableBodyCellComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
DataTableBodyCellComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DataTableBodyCellComponent, selectors: [["datatable-body-cell"]], viewQuery: function DataTableBodyCellComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true, ViewContainerRef);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.cellTemplate = _t.first);
    } }, hostVars: 10, hostBindings: function DataTableBodyCellComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("focus", function DataTableBodyCellComponent_focus_HostBindingHandler() { return ctx.onFocus(); })("blur", function DataTableBodyCellComponent_blur_HostBindingHandler() { return ctx.onBlur(); })("click", function DataTableBodyCellComponent_click_HostBindingHandler($event) { return ctx.onClick($event); })("dblclick", function DataTableBodyCellComponent_dblclick_HostBindingHandler($event) { return ctx.onDblClick($event); })("keydown", function DataTableBodyCellComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.columnCssClasses);
        ɵngcc0.ɵɵstyleProp("width", ctx.width, "px")("min-width", ctx.minWidth, "px")("max-width", ctx.maxWidth, "px")("height", ctx.height);
    } }, inputs: { group: "group", rowHeight: "rowHeight", isSelected: "isSelected", expanded: "expanded", rowIndex: "rowIndex", column: "column", row: "row", sorts: "sorts", treeStatus: "treeStatus", displayCheck: "displayCheck" }, outputs: { activate: "activate", treeAction: "treeAction" }, decls: 5, vars: 6, consts: [[1, "datatable-body-cell-label"], ["class", "datatable-checkbox", 4, "ngIf"], [4, "ngIf"], [3, "title", "innerHTML", 4, "ngIf"], [1, "datatable-checkbox"], ["type", "checkbox", 3, "checked", "click"], ["class", "datatable-tree-button", 3, "disabled", "click", 4, "ngIf"], [1, "datatable-tree-button", 3, "disabled", "click"], ["class", "icon datatable-icon-collapse", 4, "ngIf"], ["class", "icon datatable-icon-up", 4, "ngIf"], ["class", "icon datatable-icon-down", 4, "ngIf"], [1, "icon", "datatable-icon-collapse"], [1, "icon", "datatable-icon-up"], [1, "icon", "datatable-icon-down"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "title", "innerHTML"], ["cellTemplate", ""]], template: function DataTableBodyCellComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, DataTableBodyCellComponent_label_1_Template, 2, 1, "label", 1);
        ɵngcc0.ɵɵtemplate(2, DataTableBodyCellComponent_ng_container_2_Template, 3, 2, "ng-container", 2);
        ɵngcc0.ɵɵtemplate(3, DataTableBodyCellComponent_span_3_Template, 1, 2, "span", 3);
        ɵngcc0.ɵɵtemplate(4, DataTableBodyCellComponent_4_Template, 2, 2, undefined, 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("margin-left", ctx.calcLeftMargin(ctx.column, ctx.row), "px");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.column.checkboxable && (!ctx.displayCheck || ctx.displayCheck(ctx.row, ctx.column, ctx.value)));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.column.isTreeColumn);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.column.cellTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.column.cellTemplate);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
DataTableBodyCellComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
__decorate([
    Input()
], DataTableBodyCellComponent.prototype, "displayCheck", void 0);
__decorate([
    Input()
], DataTableBodyCellComponent.prototype, "group", null);
__decorate([
    Input()
], DataTableBodyCellComponent.prototype, "rowHeight", null);
__decorate([
    Input()
], DataTableBodyCellComponent.prototype, "isSelected", null);
__decorate([
    Input()
], DataTableBodyCellComponent.prototype, "expanded", null);
__decorate([
    Input()
], DataTableBodyCellComponent.prototype, "rowIndex", null);
__decorate([
    Input()
], DataTableBodyCellComponent.prototype, "column", null);
__decorate([
    Input()
], DataTableBodyCellComponent.prototype, "row", null);
__decorate([
    Input()
], DataTableBodyCellComponent.prototype, "sorts", null);
__decorate([
    Input()
], DataTableBodyCellComponent.prototype, "treeStatus", null);
__decorate([
    Output()
], DataTableBodyCellComponent.prototype, "activate", void 0);
__decorate([
    Output()
], DataTableBodyCellComponent.prototype, "treeAction", void 0);
__decorate([
    ViewChild('cellTemplate', { read: ViewContainerRef, static: true })
], DataTableBodyCellComponent.prototype, "cellTemplate", void 0);
__decorate([
    HostBinding('class')
], DataTableBodyCellComponent.prototype, "columnCssClasses", null);
__decorate([
    HostBinding('style.width.px')
], DataTableBodyCellComponent.prototype, "width", null);
__decorate([
    HostBinding('style.minWidth.px')
], DataTableBodyCellComponent.prototype, "minWidth", null);
__decorate([
    HostBinding('style.maxWidth.px')
], DataTableBodyCellComponent.prototype, "maxWidth", null);
__decorate([
    HostBinding('style.height')
], DataTableBodyCellComponent.prototype, "height", null);
__decorate([
    HostListener('focus')
], DataTableBodyCellComponent.prototype, "onFocus", null);
__decorate([
    HostListener('blur')
], DataTableBodyCellComponent.prototype, "onBlur", null);
__decorate([
    HostListener('click', ['$event'])
], DataTableBodyCellComponent.prototype, "onClick", null);
__decorate([
    HostListener('dblclick', ['$event'])
], DataTableBodyCellComponent.prototype, "onDblClick", null);
__decorate([
    HostListener('keydown', ['$event'])
], DataTableBodyCellComponent.prototype, "onKeyDown", null);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DataTableBodyCellComponent, [{
        type: Component,
        args: [{
                selector: 'datatable-body-cell',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div class="datatable-body-cell-label" [style.margin-left.px]="calcLeftMargin(column, row)">
      <label
        *ngIf="column.checkboxable && (!displayCheck || displayCheck(row, column, value))"
        class="datatable-checkbox"
      >
        <input type="checkbox" [checked]="isSelected" (click)="onCheckboxChange($event)" />
      </label>
      <ng-container *ngIf="column.isTreeColumn">
        <button
          *ngIf="!column.treeToggleTemplate"
          class="datatable-tree-button"
          [disabled]="treeStatus === 'disabled'"
          (click)="onTreeAction()"
        >
          <span>
            <i *ngIf="treeStatus === 'loading'" class="icon datatable-icon-collapse"></i>
            <i *ngIf="treeStatus === 'collapsed'" class="icon datatable-icon-up"></i>
            <i *ngIf="treeStatus === 'expanded' || treeStatus === 'disabled'" class="icon datatable-icon-down"></i>
          </span>
        </button>
        <ng-template
          *ngIf="column.treeToggleTemplate"
          [ngTemplateOutlet]="column.treeToggleTemplate"
          [ngTemplateOutletContext]="{ cellContext: cellContext }"
        >
        </ng-template>
      </ng-container>

      <span *ngIf="!column.cellTemplate" [title]="sanitizedValue" [innerHTML]="value"> </span>
      <ng-template
        #cellTemplate
        *ngIf="column.cellTemplate"
        [ngTemplateOutlet]="column.cellTemplate"
        [ngTemplateOutletContext]="cellContext"
      >
      </ng-template>
    </div>
  `
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { activate: [{
            type: Output
        }], treeAction: [{
            type: Output
        }], group: [{
            type: Input
        }], rowHeight: [{
            type: Input
        }], isSelected: [{
            type: Input
        }], expanded: [{
            type: Input
        }], rowIndex: [{
            type: Input
        }], column: [{
            type: Input
        }], row: [{
            type: Input
        }], sorts: [{
            type: Input
        }], treeStatus: [{
            type: Input
        }], columnCssClasses: [{
            type: HostBinding,
            args: ['class']
        }], width: [{
            type: HostBinding,
            args: ['style.width.px']
        }], minWidth: [{
            type: HostBinding,
            args: ['style.minWidth.px']
        }], maxWidth: [{
            type: HostBinding,
            args: ['style.maxWidth.px']
        }], height: [{
            type: HostBinding,
            args: ['style.height']
        }], onFocus: [{
            type: HostListener,
            args: ['focus']
        }], onBlur: [{
            type: HostListener,
            args: ['blur']
        }], onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }], onDblClick: [{
            type: HostListener,
            args: ['dblclick', ['$event']]
        }], onKeyDown: [{
            type: HostListener,
            args: ['keydown', ['$event']]
        }], displayCheck: [{
            type: Input
        }], cellTemplate: [{
            type: ViewChild,
            args: ['cellTemplate', { read: ViewContainerRef, static: true }]
        }] }); })();
export { DataTableBodyCellComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2xpYi9jb21wb25lbnRzL2JvZHkvYm9keS1jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsYUFBYSxFQUNiLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLE1BQU0sRUFDTixZQUFZLEVBQ1osWUFBWSxFQUNaLFVBQVUsRUFDVixnQkFBZ0IsRUFDaEIsU0FBUyxFQUNULE9BQU8sRUFDUCx1QkFBdUIsRUFDeEIsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStDeEMsSUFBYSwwQkFBMEIsR0FBdkMsTUFBYSwwQkFBMEI7QUFBRyxJQWdOeEMsWUFBWSxPQUFtQixFQUFVLEVBQXFCO0FBQ2hFLFFBRDJDLE9BQUUsR0FBRixFQUFFLENBQW1CO0FBQUMsUUExR3JELGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUM3RCxRQUNZLGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUMvRCxRQTBFRSxjQUFTLEdBQUcsS0FBSyxDQUFDO0FBQ3BCLFFBQUUsdUJBQWtCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN4RCxRQUFFLGVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3RELFFBQ0UsZ0JBQVcsR0FBUTtBQUNy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R0Q7QUFBYSxJQURaLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNwQyx5REFXRztBQUdEO0FBQWEsSUFEWixZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdkMsNERBV0c7QUFHRDtBQUFhLElBRFosWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3RDLDJEQTBCRztBQXZUVSwwQkFBMEIsb0JBM0N0QyxTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUU7WUFBcUIsVUFDL0I7WUFBZSxFQUFFO29CQUF1QixDQUFDLE1BQU0sVUFDL0MsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FzQ1Q7SUFDRixDQUFDLElBQ1csMEJBQTBCLENBb1d0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUNEO0FBQUMsU0FyV1ksMEJBQTBCO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBQaXBlVHJhbnNmb3JtLFxuICBIb3N0QmluZGluZyxcbiAgVmlld0NoaWxkLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgRWxlbWVudFJlZixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgT25EZXN0cm95LFxuICBEb0NoZWNrLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGFibGVDb2x1bW4gfSBmcm9tICcuLi8uLi90eXBlcy90YWJsZS1jb2x1bW4udHlwZSc7XG5pbXBvcnQgeyBTb3J0RGlyZWN0aW9uIH0gZnJvbSAnLi4vLi4vdHlwZXMvc29ydC1kaXJlY3Rpb24udHlwZSc7XG5pbXBvcnQgeyBLZXlzIH0gZnJvbSAnLi4vLi4vdXRpbHMva2V5cyc7XG5cbmV4cG9ydCB0eXBlIFRyZWVTdGF0dXMgPSAnY29sbGFwc2VkJyB8ICdleHBhbmRlZCcgfCAnbG9hZGluZycgfCAnZGlzYWJsZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRhdGFibGUtYm9keS1jZWxsJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImRhdGF0YWJsZS1ib2R5LWNlbGwtbGFiZWxcIiBbc3R5bGUubWFyZ2luLWxlZnQucHhdPVwiY2FsY0xlZnRNYXJnaW4oY29sdW1uLCByb3cpXCI+XG4gICAgICA8bGFiZWxcbiAgICAgICAgKm5nSWY9XCJjb2x1bW4uY2hlY2tib3hhYmxlICYmICghZGlzcGxheUNoZWNrIHx8IGRpc3BsYXlDaGVjayhyb3csIGNvbHVtbiwgdmFsdWUpKVwiXG4gICAgICAgIGNsYXNzPVwiZGF0YXRhYmxlLWNoZWNrYm94XCJcbiAgICAgID5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFtjaGVja2VkXT1cImlzU2VsZWN0ZWRcIiAoY2xpY2spPVwib25DaGVja2JveENoYW5nZSgkZXZlbnQpXCIgLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sdW1uLmlzVHJlZUNvbHVtblwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgKm5nSWY9XCIhY29sdW1uLnRyZWVUb2dnbGVUZW1wbGF0ZVwiXG4gICAgICAgICAgY2xhc3M9XCJkYXRhdGFibGUtdHJlZS1idXR0b25cIlxuICAgICAgICAgIFtkaXNhYmxlZF09XCJ0cmVlU3RhdHVzID09PSAnZGlzYWJsZWQnXCJcbiAgICAgICAgICAoY2xpY2spPVwib25UcmVlQWN0aW9uKClcIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8aSAqbmdJZj1cInRyZWVTdGF0dXMgPT09ICdsb2FkaW5nJ1wiIGNsYXNzPVwiaWNvbiBkYXRhdGFibGUtaWNvbi1jb2xsYXBzZVwiPjwvaT5cbiAgICAgICAgICAgIDxpICpuZ0lmPVwidHJlZVN0YXR1cyA9PT0gJ2NvbGxhcHNlZCdcIiBjbGFzcz1cImljb24gZGF0YXRhYmxlLWljb24tdXBcIj48L2k+XG4gICAgICAgICAgICA8aSAqbmdJZj1cInRyZWVTdGF0dXMgPT09ICdleHBhbmRlZCcgfHwgdHJlZVN0YXR1cyA9PT0gJ2Rpc2FibGVkJ1wiIGNsYXNzPVwiaWNvbiBkYXRhdGFibGUtaWNvbi1kb3duXCI+PC9pPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgICAgICpuZ0lmPVwiY29sdW1uLnRyZWVUb2dnbGVUZW1wbGF0ZVwiXG4gICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29sdW1uLnRyZWVUb2dnbGVUZW1wbGF0ZVwiXG4gICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgY2VsbENvbnRleHQ6IGNlbGxDb250ZXh0IH1cIlxuICAgICAgICA+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgPHNwYW4gKm5nSWY9XCIhY29sdW1uLmNlbGxUZW1wbGF0ZVwiIFt0aXRsZV09XCJzYW5pdGl6ZWRWYWx1ZVwiIFtpbm5lckhUTUxdPVwidmFsdWVcIj4gPC9zcGFuPlxuICAgICAgPG5nLXRlbXBsYXRlXG4gICAgICAgICNjZWxsVGVtcGxhdGVcbiAgICAgICAgKm5nSWY9XCJjb2x1bW4uY2VsbFRlbXBsYXRlXCJcbiAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29sdW1uLmNlbGxUZW1wbGF0ZVwiXG4gICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJjZWxsQ29udGV4dFwiXG4gICAgICA+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUJvZHlDZWxsQ29tcG9uZW50IGltcGxlbWVudHMgRG9DaGVjaywgT25EZXN0cm95IHtcbiAgQElucHV0KCkgZGlzcGxheUNoZWNrOiAocm93OiBhbnksIGNvbHVtbj86IFRhYmxlQ29sdW1uLCB2YWx1ZT86IGFueSkgPT4gYm9vbGVhbjtcblxuICBASW5wdXQoKSBzZXQgZ3JvdXAoZ3JvdXA6IGFueSkge1xuICAgIHRoaXMuX2dyb3VwID0gZ3JvdXA7XG4gICAgdGhpcy5jZWxsQ29udGV4dC5ncm91cCA9IGdyb3VwO1xuICAgIHRoaXMuY2hlY2tWYWx1ZVVwZGF0ZXMoKTtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgZ2V0IGdyb3VwKCkge1xuICAgIHJldHVybiB0aGlzLl9ncm91cDtcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCByb3dIZWlnaHQodmFsOiBudW1iZXIpIHtcbiAgICB0aGlzLl9yb3dIZWlnaHQgPSB2YWw7XG4gICAgdGhpcy5jZWxsQ29udGV4dC5yb3dIZWlnaHQgPSB2YWw7XG4gICAgdGhpcy5jaGVja1ZhbHVlVXBkYXRlcygpO1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBnZXQgcm93SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl9yb3dIZWlnaHQ7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgaXNTZWxlY3RlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc1NlbGVjdGVkID0gdmFsO1xuICAgIHRoaXMuY2VsbENvbnRleHQuaXNTZWxlY3RlZCA9IHZhbDtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgZ2V0IGlzU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU2VsZWN0ZWQ7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgZXhwYW5kZWQodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZXhwYW5kZWQgPSB2YWw7XG4gICAgdGhpcy5jZWxsQ29udGV4dC5leHBhbmRlZCA9IHZhbDtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgZ2V0IGV4cGFuZGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9leHBhbmRlZDtcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCByb3dJbmRleCh2YWw6IG51bWJlcikge1xuICAgIHRoaXMuX3Jvd0luZGV4ID0gdmFsO1xuICAgIHRoaXMuY2VsbENvbnRleHQucm93SW5kZXggPSB2YWw7XG4gICAgdGhpcy5jaGVja1ZhbHVlVXBkYXRlcygpO1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBnZXQgcm93SW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcm93SW5kZXg7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgY29sdW1uKGNvbHVtbjogVGFibGVDb2x1bW4pIHtcbiAgICB0aGlzLl9jb2x1bW4gPSBjb2x1bW47XG4gICAgdGhpcy5jZWxsQ29udGV4dC5jb2x1bW4gPSBjb2x1bW47XG4gICAgdGhpcy5jaGVja1ZhbHVlVXBkYXRlcygpO1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBnZXQgY29sdW1uKCk6IFRhYmxlQ29sdW1uIHtcbiAgICByZXR1cm4gdGhpcy5fY29sdW1uO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IHJvdyhyb3c6IGFueSkge1xuICAgIHRoaXMuX3JvdyA9IHJvdztcbiAgICB0aGlzLmNlbGxDb250ZXh0LnJvdyA9IHJvdztcbiAgICB0aGlzLmNoZWNrVmFsdWVVcGRhdGVzKCk7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGdldCByb3coKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fcm93O1xuICB9XG5cbiAgQElucHV0KCkgc2V0IHNvcnRzKHZhbDogYW55W10pIHtcbiAgICB0aGlzLl9zb3J0cyA9IHZhbDtcbiAgICB0aGlzLmNhbGNTb3J0RGlyID0gdGhpcy5jYWxjU29ydERpcih2YWwpO1xuICB9XG5cbiAgZ2V0IHNvcnRzKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5fc29ydHM7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgdHJlZVN0YXR1cyhzdGF0dXM6IFRyZWVTdGF0dXMpIHtcbiAgICBpZiAoc3RhdHVzICE9PSAnY29sbGFwc2VkJyAmJiBzdGF0dXMgIT09ICdleHBhbmRlZCcgJiYgc3RhdHVzICE9PSAnbG9hZGluZycgJiYgc3RhdHVzICE9PSAnZGlzYWJsZWQnKSB7XG4gICAgICB0aGlzLl90cmVlU3RhdHVzID0gJ2NvbGxhcHNlZCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RyZWVTdGF0dXMgPSBzdGF0dXM7XG4gICAgfVxuICAgIHRoaXMuY2VsbENvbnRleHQudHJlZVN0YXR1cyA9IHRoaXMuX3RyZWVTdGF0dXM7XG4gICAgdGhpcy5jaGVja1ZhbHVlVXBkYXRlcygpO1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBnZXQgdHJlZVN0YXR1cygpOiBUcmVlU3RhdHVzIHtcbiAgICByZXR1cm4gdGhpcy5fdHJlZVN0YXR1cztcbiAgfVxuXG4gIEBPdXRwdXQoKSBhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpIHRyZWVBY3Rpb246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2NlbGxUZW1wbGF0ZScsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pXG4gIGNlbGxUZW1wbGF0ZTogVmlld0NvbnRhaW5lclJlZjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGNvbHVtbkNzc0NsYXNzZXMoKTogYW55IHtcbiAgICBsZXQgY2xzID0gJ2RhdGF0YWJsZS1ib2R5LWNlbGwnO1xuICAgIGlmICh0aGlzLmNvbHVtbi5jZWxsQ2xhc3MpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5jb2x1bW4uY2VsbENsYXNzID09PSAnc3RyaW5nJykge1xuICAgICAgICBjbHMgKz0gJyAnICsgdGhpcy5jb2x1bW4uY2VsbENsYXNzO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5jb2x1bW4uY2VsbENsYXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IHRoaXMuY29sdW1uLmNlbGxDbGFzcyh7XG4gICAgICAgICAgcm93OiB0aGlzLnJvdyxcbiAgICAgICAgICBncm91cDogdGhpcy5ncm91cCxcbiAgICAgICAgICBjb2x1bW46IHRoaXMuY29sdW1uLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICAgIHJvd0hlaWdodDogdGhpcy5yb3dIZWlnaHRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY2xzICs9ICcgJyArIHJlcztcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcmVzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhyZXMpO1xuICAgICAgICAgIGZvciAoY29uc3QgayBvZiBrZXlzKSB7XG4gICAgICAgICAgICBpZiAocmVzW2tdID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIGNscyArPSBgICR7a31gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRoaXMuc29ydERpcikge1xuICAgICAgY2xzICs9ICcgc29ydC1hY3RpdmUnO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc0ZvY3VzZWQpIHtcbiAgICAgIGNscyArPSAnIGFjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0aGlzLnNvcnREaXIgPT09IFNvcnREaXJlY3Rpb24uYXNjKSB7XG4gICAgICBjbHMgKz0gJyBzb3J0LWFzYyc7XG4gICAgfVxuICAgIGlmICh0aGlzLnNvcnREaXIgPT09IFNvcnREaXJlY3Rpb24uZGVzYykge1xuICAgICAgY2xzICs9ICcgc29ydC1kZXNjJztcbiAgICB9XG5cbiAgICByZXR1cm4gY2xzO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aC5weCcpXG4gIGdldCB3aWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNvbHVtbi53aWR0aDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUubWluV2lkdGgucHgnKVxuICBnZXQgbWluV2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jb2x1bW4ubWluV2lkdGg7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLm1heFdpZHRoLnB4JylcbiAgZ2V0IG1heFdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1uLm1heFdpZHRoO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQnKVxuICBnZXQgaGVpZ2h0KCk6IHN0cmluZyB8IG51bWJlciB7XG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5yb3dIZWlnaHQ7XG4gICAgaWYgKGlzTmFOKGhlaWdodCkpIHtcbiAgICAgIHJldHVybiBoZWlnaHQ7XG4gICAgfVxuICAgIHJldHVybiBoZWlnaHQgKyAncHgnO1xuICB9XG5cbiAgc2FuaXRpemVkVmFsdWU6IGFueTtcbiAgdmFsdWU6IGFueTtcbiAgc29ydERpcjogU29ydERpcmVjdGlvbjtcbiAgaXNGb2N1c2VkID0gZmFsc2U7XG4gIG9uQ2hlY2tib3hDaGFuZ2VGbiA9IHRoaXMub25DaGVja2JveENoYW5nZS5iaW5kKHRoaXMpO1xuICBhY3RpdmF0ZUZuID0gdGhpcy5hY3RpdmF0ZS5lbWl0LmJpbmQodGhpcy5hY3RpdmF0ZSk7XG5cbiAgY2VsbENvbnRleHQ6IGFueSA9IHtcbiAgICBvbkNoZWNrYm94Q2hhbmdlRm46IHRoaXMub25DaGVja2JveENoYW5nZUZuLFxuICAgIGFjdGl2YXRlRm46IHRoaXMuYWN0aXZhdGVGbixcbiAgICByb3c6IHRoaXMucm93LFxuICAgIGdyb3VwOiB0aGlzLmdyb3VwLFxuICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgIGNvbHVtbjogdGhpcy5jb2x1bW4sXG4gICAgcm93SGVpZ2h0OiB0aGlzLnJvd0hlaWdodCxcbiAgICBpc1NlbGVjdGVkOiB0aGlzLmlzU2VsZWN0ZWQsXG4gICAgcm93SW5kZXg6IHRoaXMucm93SW5kZXgsXG4gICAgdHJlZVN0YXR1czogdGhpcy50cmVlU3RhdHVzLFxuICAgIG9uVHJlZUFjdGlvbjogdGhpcy5vblRyZWVBY3Rpb24uYmluZCh0aGlzKVxuICB9O1xuXG4gIHByaXZhdGUgX2lzU2VsZWN0ZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX3NvcnRzOiBhbnlbXTtcbiAgcHJpdmF0ZSBfY29sdW1uOiBUYWJsZUNvbHVtbjtcbiAgcHJpdmF0ZSBfcm93OiBhbnk7XG4gIHByaXZhdGUgX2dyb3VwOiBhbnk7XG4gIHByaXZhdGUgX3Jvd0hlaWdodDogbnVtYmVyO1xuICBwcml2YXRlIF9yb3dJbmRleDogbnVtYmVyO1xuICBwcml2YXRlIF9leHBhbmRlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZWxlbWVudDogYW55O1xuICBwcml2YXRlIF90cmVlU3RhdHVzOiBUcmVlU3RhdHVzO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrVmFsdWVVcGRhdGVzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jZWxsVGVtcGxhdGUpIHtcbiAgICAgIHRoaXMuY2VsbFRlbXBsYXRlLmNsZWFyKCk7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tWYWx1ZVVwZGF0ZXMoKTogdm9pZCB7XG4gICAgbGV0IHZhbHVlID0gJyc7XG5cbiAgICBpZiAoIXRoaXMucm93IHx8ICF0aGlzLmNvbHVtbikge1xuICAgICAgdmFsdWUgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFsID0gdGhpcy5jb2x1bW4uJCR2YWx1ZUdldHRlcih0aGlzLnJvdywgdGhpcy5jb2x1bW4ucHJvcCk7XG4gICAgICBjb25zdCB1c2VyUGlwZTogUGlwZVRyYW5zZm9ybSA9IHRoaXMuY29sdW1uLnBpcGU7XG5cbiAgICAgIGlmICh1c2VyUGlwZSkge1xuICAgICAgICB2YWx1ZSA9IHVzZXJQaXBlLnRyYW5zZm9ybSh2YWwpO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhbHVlID0gdmFsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5jZWxsQ29udGV4dC52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5zYW5pdGl6ZWRWYWx1ZSA9IHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQgPyB0aGlzLnN0cmlwSHRtbCh2YWx1ZSkgOiB2YWx1ZTtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKVxuICBvbkZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKVxuICBvbkJsdXIoKTogdm9pZCB7XG4gICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgb25DbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZhdGUuZW1pdCh7XG4gICAgICB0eXBlOiAnY2xpY2snLFxuICAgICAgZXZlbnQsXG4gICAgICByb3c6IHRoaXMucm93LFxuICAgICAgZ3JvdXA6IHRoaXMuZ3JvdXAsXG4gICAgICByb3dIZWlnaHQ6IHRoaXMucm93SGVpZ2h0LFxuICAgICAgY29sdW1uOiB0aGlzLmNvbHVtbixcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgY2VsbEVsZW1lbnQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RibGNsaWNrJywgWyckZXZlbnQnXSlcbiAgb25EYmxDbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZhdGUuZW1pdCh7XG4gICAgICB0eXBlOiAnZGJsY2xpY2snLFxuICAgICAgZXZlbnQsXG4gICAgICByb3c6IHRoaXMucm93LFxuICAgICAgZ3JvdXA6IHRoaXMuZ3JvdXAsXG4gICAgICByb3dIZWlnaHQ6IHRoaXMucm93SGVpZ2h0LFxuICAgICAgY29sdW1uOiB0aGlzLmNvbHVtbixcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgY2VsbEVsZW1lbnQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcbiAgICBjb25zdCBpc1RhcmdldENlbGwgPSBldmVudC50YXJnZXQgPT09IHRoaXMuX2VsZW1lbnQ7XG5cbiAgICBjb25zdCBpc0FjdGlvbiA9XG4gICAgICBrZXlDb2RlID09PSBLZXlzLnJldHVybiB8fFxuICAgICAga2V5Q29kZSA9PT0gS2V5cy5kb3duIHx8XG4gICAgICBrZXlDb2RlID09PSBLZXlzLnVwIHx8XG4gICAgICBrZXlDb2RlID09PSBLZXlzLmxlZnQgfHxcbiAgICAgIGtleUNvZGUgPT09IEtleXMucmlnaHQ7XG5cbiAgICBpZiAoaXNBY3Rpb24gJiYgaXNUYXJnZXRDZWxsKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIHRoaXMuYWN0aXZhdGUuZW1pdCh7XG4gICAgICAgIHR5cGU6ICdrZXlkb3duJyxcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIHJvdzogdGhpcy5yb3csXG4gICAgICAgIGdyb3VwOiB0aGlzLmdyb3VwLFxuICAgICAgICByb3dIZWlnaHQ6IHRoaXMucm93SGVpZ2h0LFxuICAgICAgICBjb2x1bW46IHRoaXMuY29sdW1uLFxuICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgY2VsbEVsZW1lbnQ6IHRoaXMuX2VsZW1lbnRcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hlY2tib3hDaGFuZ2UoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZhdGUuZW1pdCh7XG4gICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgZXZlbnQsXG4gICAgICByb3c6IHRoaXMucm93LFxuICAgICAgZ3JvdXA6IHRoaXMuZ3JvdXAsXG4gICAgICByb3dIZWlnaHQ6IHRoaXMucm93SGVpZ2h0LFxuICAgICAgY29sdW1uOiB0aGlzLmNvbHVtbixcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgY2VsbEVsZW1lbnQ6IHRoaXMuX2VsZW1lbnQsXG4gICAgICB0cmVlU3RhdHVzOiAnY29sbGFwc2VkJ1xuICAgIH0pO1xuICB9XG5cbiAgY2FsY1NvcnREaXIoc29ydHM6IGFueVtdKTogYW55IHtcbiAgICBpZiAoIXNvcnRzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc29ydCA9IHNvcnRzLmZpbmQoKHM6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIHMucHJvcCA9PT0gdGhpcy5jb2x1bW4ucHJvcDtcbiAgICB9KTtcblxuICAgIGlmIChzb3J0KSB7XG4gICAgICByZXR1cm4gc29ydC5kaXI7XG4gICAgfVxuICB9XG5cbiAgc3RyaXBIdG1sKGh0bWw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCFodG1sLnJlcGxhY2UpIHtcbiAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbC5yZXBsYWNlKC88XFwvP1tePl0rKD58JCkvZywgJycpO1xuICB9XG5cbiAgb25UcmVlQWN0aW9uKCkge1xuICAgIHRoaXMudHJlZUFjdGlvbi5lbWl0KHRoaXMucm93KTtcbiAgfVxuXG4gIGNhbGNMZWZ0TWFyZ2luKGNvbHVtbjogYW55LCByb3c6IGFueSkge1xuICAgIGNvbnN0IGxldmVsSW5kZW50ID0gY29sdW1uLnRyZWVMZXZlbEluZGVudCAhPSBudWxsID8gY29sdW1uLnRyZWVMZXZlbEluZGVudCA6IDUwO1xuICAgIHJldHVybiBjb2x1bW4uaXNUcmVlQ29sdW1uID8gcm93LmxldmVsICogbGV2ZWxJbmRlbnQgOiAwO1xuICB9XG59XG4iXX0=