import { __decorate, __values } from "tslib";
import { Component, Input, PipeTransform, HostBinding, ViewChild, ChangeDetectorRef, Output, EventEmitter, HostListener, ElementRef, ViewContainerRef, OnDestroy, DoCheck, ChangeDetectionStrategy } from '@angular/core';
import { SortDirection } from '../../types/sort-direction.type';
import { Keys } from '../../utils/keys';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

var _c0 = ["cellTemplate"];
function DataTableBodyCellComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    var _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "label", 4);
    ɵngcc0.ɵɵelementStart(1, "input", 5);
    ɵngcc0.ɵɵlistener("click", function DataTableBodyCellComponent_label_1_Template_input_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); var ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onCheckboxChange($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
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
    var _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 7);
    ɵngcc0.ɵɵlistener("click", function DataTableBodyCellComponent_ng_container_2_button_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r12); var ctx_r11 = ɵngcc0.ɵɵnextContext(2); return ctx_r11.onTreeAction(); });
    ɵngcc0.ɵɵelementStart(1, "span");
    ɵngcc0.ɵɵtemplate(2, DataTableBodyCellComponent_ng_container_2_button_1_i_2_Template, 1, 0, "i", 8);
    ɵngcc0.ɵɵtemplate(3, DataTableBodyCellComponent_ng_container_2_button_1_i_3_Template, 1, 0, "i", 9);
    ɵngcc0.ɵɵtemplate(4, DataTableBodyCellComponent_ng_container_2_button_1_i_4_Template, 1, 0, "i", 10);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("disabled", ctx_r6.treeStatus === "disabled");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.treeStatus === "loading");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.treeStatus === "collapsed");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.treeStatus === "expanded" || ctx_r6.treeStatus === "disabled");
} }
function DataTableBodyCellComponent_ng_container_2_2_ng_template_0_Template(rf, ctx) { }
var _c1 = function (a0) { return { cellContext: a0 }; };
function DataTableBodyCellComponent_ng_container_2_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, DataTableBodyCellComponent_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template", 14);
} if (rf & 2) {
    var ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r7.column.treeToggleTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c1, ctx_r7.cellContext));
} }
function DataTableBodyCellComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, DataTableBodyCellComponent_ng_container_2_button_1_Template, 5, 4, "button", 6);
    ɵngcc0.ɵɵtemplate(2, DataTableBodyCellComponent_ng_container_2_2_Template, 1, 4, undefined, 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r1.column.treeToggleTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.column.treeToggleTemplate);
} }
function DataTableBodyCellComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 15);
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("title", ctx_r2.sanitizedValue)("innerHTML", ctx_r2.value, ɵngcc0.ɵɵsanitizeHtml);
} }
function DataTableBodyCellComponent_4_ng_template_0_Template(rf, ctx) { }
function DataTableBodyCellComponent_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, DataTableBodyCellComponent_4_ng_template_0_Template, 0, 0, "ng-template", 14, 16, ɵngcc0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r3.column.cellTemplate)("ngTemplateOutletContext", ctx_r3.cellContext);
} }
var DataTableBodyCellComponent = /** @class */ (function () {
    function DataTableBodyCellComponent(element, cd) {
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
    Object.defineProperty(DataTableBodyCellComponent.prototype, "group", {
        get: function () {
            return this._group;
        },
        set: function (group) {
            this._group = group;
            this.cellContext.group = group;
            this.checkValueUpdates();
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "rowHeight", {
        get: function () {
            return this._rowHeight;
        },
        set: function (val) {
            this._rowHeight = val;
            this.cellContext.rowHeight = val;
            this.checkValueUpdates();
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        set: function (val) {
            this._isSelected = val;
            this.cellContext.isSelected = val;
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "expanded", {
        get: function () {
            return this._expanded;
        },
        set: function (val) {
            this._expanded = val;
            this.cellContext.expanded = val;
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "rowIndex", {
        get: function () {
            return this._rowIndex;
        },
        set: function (val) {
            this._rowIndex = val;
            this.cellContext.rowIndex = val;
            this.checkValueUpdates();
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "column", {
        get: function () {
            return this._column;
        },
        set: function (column) {
            this._column = column;
            this.cellContext.column = column;
            this.checkValueUpdates();
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "row", {
        get: function () {
            return this._row;
        },
        set: function (row) {
            this._row = row;
            this.cellContext.row = row;
            this.checkValueUpdates();
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "sorts", {
        get: function () {
            return this._sorts;
        },
        set: function (val) {
            this._sorts = val;
            this.calcSortDir = this.calcSortDir(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "treeStatus", {
        get: function () {
            return this._treeStatus;
        },
        set: function (status) {
            if (status !== 'collapsed' && status !== 'expanded' && status !== 'loading' && status !== 'disabled') {
                this._treeStatus = 'collapsed';
            }
            else {
                this._treeStatus = status;
            }
            this.cellContext.treeStatus = this._treeStatus;
            this.checkValueUpdates();
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "columnCssClasses", {
        get: function () {
            var e_1, _a;
            var cls = 'datatable-body-cell';
            if (this.column.cellClass) {
                if (typeof this.column.cellClass === 'string') {
                    cls += ' ' + this.column.cellClass;
                }
                else if (typeof this.column.cellClass === 'function') {
                    var res = this.column.cellClass({
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "width", {
        get: function () {
            return this.column.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "minWidth", {
        get: function () {
            return this.column.minWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "maxWidth", {
        get: function () {
            return this.column.maxWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "height", {
        get: function () {
            var height = this.rowHeight;
            if (isNaN(height)) {
                return height;
            }
            return height + 'px';
        },
        enumerable: true,
        configurable: true
    });
    DataTableBodyCellComponent.prototype.ngDoCheck = function () {
        this.checkValueUpdates();
    };
    DataTableBodyCellComponent.prototype.ngOnDestroy = function () {
        if (this.cellTemplate) {
            this.cellTemplate.clear();
        }
    };
    DataTableBodyCellComponent.prototype.checkValueUpdates = function () {
        var value = '';
        if (!this.row || !this.column) {
            value = '';
        }
        else {
            var val = this.column.$$valueGetter(this.row, this.column.prop);
            var userPipe = this.column.pipe;
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
    };
    DataTableBodyCellComponent.prototype.onFocus = function () {
        this.isFocused = true;
    };
    DataTableBodyCellComponent.prototype.onBlur = function () {
        this.isFocused = false;
    };
    DataTableBodyCellComponent.prototype.onClick = function (event) {
        this.activate.emit({
            type: 'click',
            event: event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element
        });
    };
    DataTableBodyCellComponent.prototype.onDblClick = function (event) {
        this.activate.emit({
            type: 'dblclick',
            event: event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element
        });
    };
    DataTableBodyCellComponent.prototype.onKeyDown = function (event) {
        var keyCode = event.keyCode;
        var isTargetCell = event.target === this._element;
        var isAction = keyCode === Keys.return ||
            keyCode === Keys.down ||
            keyCode === Keys.up ||
            keyCode === Keys.left ||
            keyCode === Keys.right;
        if (isAction && isTargetCell) {
            event.preventDefault();
            event.stopPropagation();
            this.activate.emit({
                type: 'keydown',
                event: event,
                row: this.row,
                group: this.group,
                rowHeight: this.rowHeight,
                column: this.column,
                value: this.value,
                cellElement: this._element
            });
        }
    };
    DataTableBodyCellComponent.prototype.onCheckboxChange = function (event) {
        this.activate.emit({
            type: 'checkbox',
            event: event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element,
            treeStatus: 'collapsed'
        });
    };
    DataTableBodyCellComponent.prototype.calcSortDir = function (sorts) {
        var _this = this;
        if (!sorts) {
            return;
        }
        var sort = sorts.find(function (s) {
            return s.prop === _this.column.prop;
        });
        if (sort) {
            return sort.dir;
        }
    };
    DataTableBodyCellComponent.prototype.stripHtml = function (html) {
        if (!html.replace) {
            return html;
        }
        return html.replace(/<\/?[^>]+(>|$)/g, '');
    };
    DataTableBodyCellComponent.prototype.onTreeAction = function () {
        this.treeAction.emit(this.row);
    };
    DataTableBodyCellComponent.prototype.calcLeftMargin = function (column, row) {
        var levelIndent = column.treeLevelIndent != null ? column.treeLevelIndent : 50;
        return column.isTreeColumn ? row.level * levelIndent : 0;
    };
    DataTableBodyCellComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DataTableBodyCellComponent, [{
        type: Component,
        args: [{
                selector: 'datatable-body-cell',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "\n    <div class=\"datatable-body-cell-label\" [style.margin-left.px]=\"calcLeftMargin(column, row)\">\n      <label\n        *ngIf=\"column.checkboxable && (!displayCheck || displayCheck(row, column, value))\"\n        class=\"datatable-checkbox\"\n      >\n        <input type=\"checkbox\" [checked]=\"isSelected\" (click)=\"onCheckboxChange($event)\" />\n      </label>\n      <ng-container *ngIf=\"column.isTreeColumn\">\n        <button\n          *ngIf=\"!column.treeToggleTemplate\"\n          class=\"datatable-tree-button\"\n          [disabled]=\"treeStatus === 'disabled'\"\n          (click)=\"onTreeAction()\"\n        >\n          <span>\n            <i *ngIf=\"treeStatus === 'loading'\" class=\"icon datatable-icon-collapse\"></i>\n            <i *ngIf=\"treeStatus === 'collapsed'\" class=\"icon datatable-icon-up\"></i>\n            <i *ngIf=\"treeStatus === 'expanded' || treeStatus === 'disabled'\" class=\"icon datatable-icon-down\"></i>\n          </span>\n        </button>\n        <ng-template\n          *ngIf=\"column.treeToggleTemplate\"\n          [ngTemplateOutlet]=\"column.treeToggleTemplate\"\n          [ngTemplateOutletContext]=\"{ cellContext: cellContext }\"\n        >\n        </ng-template>\n      </ng-container>\n\n      <span *ngIf=\"!column.cellTemplate\" [title]=\"sanitizedValue\" [innerHTML]=\"value\"> </span>\n      <ng-template\n        #cellTemplate\n        *ngIf=\"column.cellTemplate\"\n        [ngTemplateOutlet]=\"column.cellTemplate\"\n        [ngTemplateOutletContext]=\"cellContext\"\n      >\n      </ng-template>\n    </div>\n  "
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
    return DataTableBodyCellComponent;
}());
export { DataTableBodyCellComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2xpYi9jb21wb25lbnRzL2JvZHkvYm9keS1jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsYUFBYSxFQUNiLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLE1BQU0sRUFDTixZQUFZLEVBQ1osWUFBWSxFQUNaLFVBQVUsRUFDVixnQkFBZ0IsRUFDaEIsU0FBUyxFQUNULE9BQU8sRUFDUCx1QkFBdUIsRUFDeEIsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStDeEM7QUFBOEQsSUFnTjVELG9DQUFZLE9BQW1CLEVBQVUsRUFBcUI7QUFDaEUsUUFEMkMsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7QUFBQyxRQTFHckQsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQzdELFFBQ1ksZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQy9ELFFBMEVFLGNBQVMsR0FBRyxLQUFLLENBQUM7QUFDcEIsUUFBRSx1QkFBa0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3hELFFBQUUsZUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdEQsUUFDRSxnQkFBVyxHQUFRO0FBQ3JCLFlBQUksa0JBQWtCLEVBQUUsSUFBSSxDQUFD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dUJBQXVCLENBQUMsTUFBTSxjQUMvQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7O3VRQXNDVCxVQUNGLENBQUMsUUFDVywwQkFBMEIsQ0FvV3RDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUNEO0FBQUMsSUFERCxpQ0FBQztBQUNBLENBREEsQUFwV0QsSUFvV0M7QUFDRCxTQXJXYSwwQkFBMEI7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFBpcGVUcmFuc2Zvcm0sXG4gIEhvc3RCaW5kaW5nLFxuICBWaWV3Q2hpbGQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBFbGVtZW50UmVmLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBPbkRlc3Ryb3ksXG4gIERvQ2hlY2ssXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUYWJsZUNvbHVtbiB9IGZyb20gJy4uLy4uL3R5cGVzL3RhYmxlLWNvbHVtbi50eXBlJztcbmltcG9ydCB7IFNvcnREaXJlY3Rpb24gfSBmcm9tICcuLi8uLi90eXBlcy9zb3J0LWRpcmVjdGlvbi50eXBlJztcbmltcG9ydCB7IEtleXMgfSBmcm9tICcuLi8uLi91dGlscy9rZXlzJztcblxuZXhwb3J0IHR5cGUgVHJlZVN0YXR1cyA9ICdjb2xsYXBzZWQnIHwgJ2V4cGFuZGVkJyB8ICdsb2FkaW5nJyB8ICdkaXNhYmxlZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGF0YWJsZS1ib2R5LWNlbGwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZGF0YXRhYmxlLWJvZHktY2VsbC1sYWJlbFwiIFtzdHlsZS5tYXJnaW4tbGVmdC5weF09XCJjYWxjTGVmdE1hcmdpbihjb2x1bW4sIHJvdylcIj5cbiAgICAgIDxsYWJlbFxuICAgICAgICAqbmdJZj1cImNvbHVtbi5jaGVja2JveGFibGUgJiYgKCFkaXNwbGF5Q2hlY2sgfHwgZGlzcGxheUNoZWNrKHJvdywgY29sdW1uLCB2YWx1ZSkpXCJcbiAgICAgICAgY2xhc3M9XCJkYXRhdGFibGUtY2hlY2tib3hcIlxuICAgICAgPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgW2NoZWNrZWRdPVwiaXNTZWxlY3RlZFwiIChjbGljayk9XCJvbkNoZWNrYm94Q2hhbmdlKCRldmVudClcIiAvPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2x1bW4uaXNUcmVlQ29sdW1uXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAqbmdJZj1cIiFjb2x1bW4udHJlZVRvZ2dsZVRlbXBsYXRlXCJcbiAgICAgICAgICBjbGFzcz1cImRhdGF0YWJsZS10cmVlLWJ1dHRvblwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cInRyZWVTdGF0dXMgPT09ICdkaXNhYmxlZCdcIlxuICAgICAgICAgIChjbGljayk9XCJvblRyZWVBY3Rpb24oKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxpICpuZ0lmPVwidHJlZVN0YXR1cyA9PT0gJ2xvYWRpbmcnXCIgY2xhc3M9XCJpY29uIGRhdGF0YWJsZS1pY29uLWNvbGxhcHNlXCI+PC9pPlxuICAgICAgICAgICAgPGkgKm5nSWY9XCJ0cmVlU3RhdHVzID09PSAnY29sbGFwc2VkJ1wiIGNsYXNzPVwiaWNvbiBkYXRhdGFibGUtaWNvbi11cFwiPjwvaT5cbiAgICAgICAgICAgIDxpICpuZ0lmPVwidHJlZVN0YXR1cyA9PT0gJ2V4cGFuZGVkJyB8fCB0cmVlU3RhdHVzID09PSAnZGlzYWJsZWQnXCIgY2xhc3M9XCJpY29uIGRhdGF0YWJsZS1pY29uLWRvd25cIj48L2k+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPG5nLXRlbXBsYXRlXG4gICAgICAgICAgKm5nSWY9XCJjb2x1bW4udHJlZVRvZ2dsZVRlbXBsYXRlXCJcbiAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjb2x1bW4udHJlZVRvZ2dsZVRlbXBsYXRlXCJcbiAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyBjZWxsQ29udGV4dDogY2VsbENvbnRleHQgfVwiXG4gICAgICAgID5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICA8c3BhbiAqbmdJZj1cIiFjb2x1bW4uY2VsbFRlbXBsYXRlXCIgW3RpdGxlXT1cInNhbml0aXplZFZhbHVlXCIgW2lubmVySFRNTF09XCJ2YWx1ZVwiPiA8L3NwYW4+XG4gICAgICA8bmctdGVtcGxhdGVcbiAgICAgICAgI2NlbGxUZW1wbGF0ZVxuICAgICAgICAqbmdJZj1cImNvbHVtbi5jZWxsVGVtcGxhdGVcIlxuICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjb2x1bW4uY2VsbFRlbXBsYXRlXCJcbiAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cImNlbGxDb250ZXh0XCJcbiAgICAgID5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlQm9keUNlbGxDb21wb25lbnQgaW1wbGVtZW50cyBEb0NoZWNrLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBkaXNwbGF5Q2hlY2s6IChyb3c6IGFueSwgY29sdW1uPzogVGFibGVDb2x1bW4sIHZhbHVlPzogYW55KSA9PiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIHNldCBncm91cChncm91cDogYW55KSB7XG4gICAgdGhpcy5fZ3JvdXAgPSBncm91cDtcbiAgICB0aGlzLmNlbGxDb250ZXh0Lmdyb3VwID0gZ3JvdXA7XG4gICAgdGhpcy5jaGVja1ZhbHVlVXBkYXRlcygpO1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBnZXQgZ3JvdXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dyb3VwO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IHJvd0hlaWdodCh2YWw6IG51bWJlcikge1xuICAgIHRoaXMuX3Jvd0hlaWdodCA9IHZhbDtcbiAgICB0aGlzLmNlbGxDb250ZXh0LnJvd0hlaWdodCA9IHZhbDtcbiAgICB0aGlzLmNoZWNrVmFsdWVVcGRhdGVzKCk7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGdldCByb3dIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jvd0hlaWdodDtcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCBpc1NlbGVjdGVkKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzU2VsZWN0ZWQgPSB2YWw7XG4gICAgdGhpcy5jZWxsQ29udGV4dC5pc1NlbGVjdGVkID0gdmFsO1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBnZXQgaXNTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNTZWxlY3RlZDtcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCBleHBhbmRlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9leHBhbmRlZCA9IHZhbDtcbiAgICB0aGlzLmNlbGxDb250ZXh0LmV4cGFuZGVkID0gdmFsO1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBnZXQgZXhwYW5kZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2V4cGFuZGVkO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IHJvd0luZGV4KHZhbDogbnVtYmVyKSB7XG4gICAgdGhpcy5fcm93SW5kZXggPSB2YWw7XG4gICAgdGhpcy5jZWxsQ29udGV4dC5yb3dJbmRleCA9IHZhbDtcbiAgICB0aGlzLmNoZWNrVmFsdWVVcGRhdGVzKCk7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGdldCByb3dJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9yb3dJbmRleDtcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCBjb2x1bW4oY29sdW1uOiBUYWJsZUNvbHVtbikge1xuICAgIHRoaXMuX2NvbHVtbiA9IGNvbHVtbjtcbiAgICB0aGlzLmNlbGxDb250ZXh0LmNvbHVtbiA9IGNvbHVtbjtcbiAgICB0aGlzLmNoZWNrVmFsdWVVcGRhdGVzKCk7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGdldCBjb2x1bW4oKTogVGFibGVDb2x1bW4ge1xuICAgIHJldHVybiB0aGlzLl9jb2x1bW47XG4gIH1cblxuICBASW5wdXQoKSBzZXQgcm93KHJvdzogYW55KSB7XG4gICAgdGhpcy5fcm93ID0gcm93O1xuICAgIHRoaXMuY2VsbENvbnRleHQucm93ID0gcm93O1xuICAgIHRoaXMuY2hlY2tWYWx1ZVVwZGF0ZXMoKTtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgZ2V0IHJvdygpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9yb3c7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgc29ydHModmFsOiBhbnlbXSkge1xuICAgIHRoaXMuX3NvcnRzID0gdmFsO1xuICAgIHRoaXMuY2FsY1NvcnREaXIgPSB0aGlzLmNhbGNTb3J0RGlyKHZhbCk7XG4gIH1cblxuICBnZXQgc29ydHMoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl9zb3J0cztcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCB0cmVlU3RhdHVzKHN0YXR1czogVHJlZVN0YXR1cykge1xuICAgIGlmIChzdGF0dXMgIT09ICdjb2xsYXBzZWQnICYmIHN0YXR1cyAhPT0gJ2V4cGFuZGVkJyAmJiBzdGF0dXMgIT09ICdsb2FkaW5nJyAmJiBzdGF0dXMgIT09ICdkaXNhYmxlZCcpIHtcbiAgICAgIHRoaXMuX3RyZWVTdGF0dXMgPSAnY29sbGFwc2VkJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdHJlZVN0YXR1cyA9IHN0YXR1cztcbiAgICB9XG4gICAgdGhpcy5jZWxsQ29udGV4dC50cmVlU3RhdHVzID0gdGhpcy5fdHJlZVN0YXR1cztcbiAgICB0aGlzLmNoZWNrVmFsdWVVcGRhdGVzKCk7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGdldCB0cmVlU3RhdHVzKCk6IFRyZWVTdGF0dXMge1xuICAgIHJldHVybiB0aGlzLl90cmVlU3RhdHVzO1xuICB9XG5cbiAgQE91dHB1dCgpIGFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAT3V0cHV0KCkgdHJlZUFjdGlvbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQFZpZXdDaGlsZCgnY2VsbFRlbXBsYXRlJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgY2VsbFRlbXBsYXRlOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgY29sdW1uQ3NzQ2xhc3NlcygpOiBhbnkge1xuICAgIGxldCBjbHMgPSAnZGF0YXRhYmxlLWJvZHktY2VsbCc7XG4gICAgaWYgKHRoaXMuY29sdW1uLmNlbGxDbGFzcykge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbHVtbi5jZWxsQ2xhc3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNscyArPSAnICcgKyB0aGlzLmNvbHVtbi5jZWxsQ2xhc3M7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLmNvbHVtbi5jZWxsQ2xhc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29uc3QgcmVzID0gdGhpcy5jb2x1bW4uY2VsbENsYXNzKHtcbiAgICAgICAgICByb3c6IHRoaXMucm93LFxuICAgICAgICAgIGdyb3VwOiB0aGlzLmdyb3VwLFxuICAgICAgICAgIGNvbHVtbjogdGhpcy5jb2x1bW4sXG4gICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgcm93SGVpZ2h0OiB0aGlzLnJvd0hlaWdodFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjbHMgKz0gJyAnICsgcmVzO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiByZXMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHJlcyk7XG4gICAgICAgICAgZm9yIChjb25zdCBrIG9mIGtleXMpIHtcbiAgICAgICAgICAgIGlmIChyZXNba10gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgY2xzICs9IGAgJHtrfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghdGhpcy5zb3J0RGlyKSB7XG4gICAgICBjbHMgKz0gJyBzb3J0LWFjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzRm9jdXNlZCkge1xuICAgICAgY2xzICs9ICcgYWN0aXZlJztcbiAgICB9XG4gICAgaWYgKHRoaXMuc29ydERpciA9PT0gU29ydERpcmVjdGlvbi5hc2MpIHtcbiAgICAgIGNscyArPSAnIHNvcnQtYXNjJztcbiAgICB9XG4gICAgaWYgKHRoaXMuc29ydERpciA9PT0gU29ydERpcmVjdGlvbi5kZXNjKSB7XG4gICAgICBjbHMgKz0gJyBzb3J0LWRlc2MnO1xuICAgIH1cblxuICAgIHJldHVybiBjbHM7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLndpZHRoLnB4JylcbiAgZ2V0IHdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1uLndpZHRoO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5taW5XaWR0aC5weCcpXG4gIGdldCBtaW5XaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNvbHVtbi5taW5XaWR0aDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUubWF4V2lkdGgucHgnKVxuICBnZXQgbWF4V2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jb2x1bW4ubWF4V2lkdGg7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodCcpXG4gIGdldCBoZWlnaHQoKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLnJvd0hlaWdodDtcbiAgICBpZiAoaXNOYU4oaGVpZ2h0KSkge1xuICAgICAgcmV0dXJuIGhlaWdodDtcbiAgICB9XG4gICAgcmV0dXJuIGhlaWdodCArICdweCc7XG4gIH1cblxuICBzYW5pdGl6ZWRWYWx1ZTogYW55O1xuICB2YWx1ZTogYW55O1xuICBzb3J0RGlyOiBTb3J0RGlyZWN0aW9uO1xuICBpc0ZvY3VzZWQgPSBmYWxzZTtcbiAgb25DaGVja2JveENoYW5nZUZuID0gdGhpcy5vbkNoZWNrYm94Q2hhbmdlLmJpbmQodGhpcyk7XG4gIGFjdGl2YXRlRm4gPSB0aGlzLmFjdGl2YXRlLmVtaXQuYmluZCh0aGlzLmFjdGl2YXRlKTtcblxuICBjZWxsQ29udGV4dDogYW55ID0ge1xuICAgIG9uQ2hlY2tib3hDaGFuZ2VGbjogdGhpcy5vbkNoZWNrYm94Q2hhbmdlRm4sXG4gICAgYWN0aXZhdGVGbjogdGhpcy5hY3RpdmF0ZUZuLFxuICAgIHJvdzogdGhpcy5yb3csXG4gICAgZ3JvdXA6IHRoaXMuZ3JvdXAsXG4gICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgY29sdW1uOiB0aGlzLmNvbHVtbixcbiAgICByb3dIZWlnaHQ6IHRoaXMucm93SGVpZ2h0LFxuICAgIGlzU2VsZWN0ZWQ6IHRoaXMuaXNTZWxlY3RlZCxcbiAgICByb3dJbmRleDogdGhpcy5yb3dJbmRleCxcbiAgICB0cmVlU3RhdHVzOiB0aGlzLnRyZWVTdGF0dXMsXG4gICAgb25UcmVlQWN0aW9uOiB0aGlzLm9uVHJlZUFjdGlvbi5iaW5kKHRoaXMpXG4gIH07XG5cbiAgcHJpdmF0ZSBfaXNTZWxlY3RlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfc29ydHM6IGFueVtdO1xuICBwcml2YXRlIF9jb2x1bW46IFRhYmxlQ29sdW1uO1xuICBwcml2YXRlIF9yb3c6IGFueTtcbiAgcHJpdmF0ZSBfZ3JvdXA6IGFueTtcbiAgcHJpdmF0ZSBfcm93SGVpZ2h0OiBudW1iZXI7XG4gIHByaXZhdGUgX3Jvd0luZGV4OiBudW1iZXI7XG4gIHByaXZhdGUgX2V4cGFuZGVkOiBib29sZWFuO1xuICBwcml2YXRlIF9lbGVtZW50OiBhbnk7XG4gIHByaXZhdGUgX3RyZWVTdGF0dXM6IFRyZWVTdGF0dXM7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tWYWx1ZVVwZGF0ZXMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNlbGxUZW1wbGF0ZSkge1xuICAgICAgdGhpcy5jZWxsVGVtcGxhdGUuY2xlYXIoKTtcbiAgICB9XG4gIH1cblxuICBjaGVja1ZhbHVlVXBkYXRlcygpOiB2b2lkIHtcbiAgICBsZXQgdmFsdWUgPSAnJztcblxuICAgIGlmICghdGhpcy5yb3cgfHwgIXRoaXMuY29sdW1uKSB7XG4gICAgICB2YWx1ZSA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2YWwgPSB0aGlzLmNvbHVtbi4kJHZhbHVlR2V0dGVyKHRoaXMucm93LCB0aGlzLmNvbHVtbi5wcm9wKTtcbiAgICAgIGNvbnN0IHVzZXJQaXBlOiBQaXBlVHJhbnNmb3JtID0gdGhpcy5jb2x1bW4ucGlwZTtcblxuICAgICAgaWYgKHVzZXJQaXBlKSB7XG4gICAgICAgIHZhbHVlID0gdXNlclBpcGUudHJhbnNmb3JtKHZhbCk7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFsdWUgPSB2YWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLmNlbGxDb250ZXh0LnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLnNhbml0aXplZFZhbHVlID0gdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCA/IHRoaXMuc3RyaXBIdG1sKHZhbHVlKSA6IHZhbHVlO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdmb2N1cycpXG4gIG9uRm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpXG4gIG9uQmx1cigpOiB2b2lkIHtcbiAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmF0ZS5lbWl0KHtcbiAgICAgIHR5cGU6ICdjbGljaycsXG4gICAgICBldmVudCxcbiAgICAgIHJvdzogdGhpcy5yb3csXG4gICAgICBncm91cDogdGhpcy5ncm91cCxcbiAgICAgIHJvd0hlaWdodDogdGhpcy5yb3dIZWlnaHQsXG4gICAgICBjb2x1bW46IHRoaXMuY29sdW1uLFxuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICBjZWxsRWxlbWVudDogdGhpcy5fZWxlbWVudFxuICAgIH0pO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZGJsY2xpY2snLCBbJyRldmVudCddKVxuICBvbkRibENsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmF0ZS5lbWl0KHtcbiAgICAgIHR5cGU6ICdkYmxjbGljaycsXG4gICAgICBldmVudCxcbiAgICAgIHJvdzogdGhpcy5yb3csXG4gICAgICBncm91cDogdGhpcy5ncm91cCxcbiAgICAgIHJvd0hlaWdodDogdGhpcy5yb3dIZWlnaHQsXG4gICAgICBjb2x1bW46IHRoaXMuY29sdW1uLFxuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICBjZWxsRWxlbWVudDogdGhpcy5fZWxlbWVudFxuICAgIH0pO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuICAgIGNvbnN0IGlzVGFyZ2V0Q2VsbCA9IGV2ZW50LnRhcmdldCA9PT0gdGhpcy5fZWxlbWVudDtcblxuICAgIGNvbnN0IGlzQWN0aW9uID1cbiAgICAgIGtleUNvZGUgPT09IEtleXMucmV0dXJuIHx8XG4gICAgICBrZXlDb2RlID09PSBLZXlzLmRvd24gfHxcbiAgICAgIGtleUNvZGUgPT09IEtleXMudXAgfHxcbiAgICAgIGtleUNvZGUgPT09IEtleXMubGVmdCB8fFxuICAgICAga2V5Q29kZSA9PT0gS2V5cy5yaWdodDtcblxuICAgIGlmIChpc0FjdGlvbiAmJiBpc1RhcmdldENlbGwpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgdGhpcy5hY3RpdmF0ZS5lbWl0KHtcbiAgICAgICAgdHlwZTogJ2tleWRvd24nLFxuICAgICAgICBldmVudCxcbiAgICAgICAgcm93OiB0aGlzLnJvdyxcbiAgICAgICAgZ3JvdXA6IHRoaXMuZ3JvdXAsXG4gICAgICAgIHJvd0hlaWdodDogdGhpcy5yb3dIZWlnaHQsXG4gICAgICAgIGNvbHVtbjogdGhpcy5jb2x1bW4sXG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICBjZWxsRWxlbWVudDogdGhpcy5fZWxlbWVudFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb25DaGVja2JveENoYW5nZShldmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmF0ZS5lbWl0KHtcbiAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICBldmVudCxcbiAgICAgIHJvdzogdGhpcy5yb3csXG4gICAgICBncm91cDogdGhpcy5ncm91cCxcbiAgICAgIHJvd0hlaWdodDogdGhpcy5yb3dIZWlnaHQsXG4gICAgICBjb2x1bW46IHRoaXMuY29sdW1uLFxuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICBjZWxsRWxlbWVudDogdGhpcy5fZWxlbWVudCxcbiAgICAgIHRyZWVTdGF0dXM6ICdjb2xsYXBzZWQnXG4gICAgfSk7XG4gIH1cblxuICBjYWxjU29ydERpcihzb3J0czogYW55W10pOiBhbnkge1xuICAgIGlmICghc29ydHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzb3J0ID0gc29ydHMuZmluZCgoczogYW55KSA9PiB7XG4gICAgICByZXR1cm4gcy5wcm9wID09PSB0aGlzLmNvbHVtbi5wcm9wO1xuICAgIH0pO1xuXG4gICAgaWYgKHNvcnQpIHtcbiAgICAgIHJldHVybiBzb3J0LmRpcjtcbiAgICB9XG4gIH1cblxuICBzdHJpcEh0bWwoaHRtbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIWh0bWwucmVwbGFjZSkge1xuICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxuICAgIHJldHVybiBodG1sLnJlcGxhY2UoLzxcXC8/W14+XSsoPnwkKS9nLCAnJyk7XG4gIH1cblxuICBvblRyZWVBY3Rpb24oKSB7XG4gICAgdGhpcy50cmVlQWN0aW9uLmVtaXQodGhpcy5yb3cpO1xuICB9XG5cbiAgY2FsY0xlZnRNYXJnaW4oY29sdW1uOiBhbnksIHJvdzogYW55KSB7XG4gICAgY29uc3QgbGV2ZWxJbmRlbnQgPSBjb2x1bW4udHJlZUxldmVsSW5kZW50ICE9IG51bGwgPyBjb2x1bW4udHJlZUxldmVsSW5kZW50IDogNTA7XG4gICAgcmV0dXJuIGNvbHVtbi5pc1RyZWVDb2x1bW4gPyByb3cubGV2ZWwgKiBsZXZlbEluZGVudCA6IDA7XG4gIH1cbn1cbiJdfQ==