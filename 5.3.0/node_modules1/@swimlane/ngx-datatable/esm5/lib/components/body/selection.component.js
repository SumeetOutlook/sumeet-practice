import { __decorate, __read, __spread } from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { SelectionType } from '../../types/selection.type';
import { selectRowsBetween, selectRows } from '../../utils/selection';
import { Keys } from '../../utils/keys';
import * as ɵngcc0 from '@angular/core';

var _c0 = ["*"];
var DataTableSelectionComponent = /** @class */ (function () {
    function DataTableSelectionComponent() {
        this.activate = new EventEmitter();
        this.select = new EventEmitter();
    }
    DataTableSelectionComponent.prototype.selectRow = function (event, index, row) {
        var _a;
        if (!this.selectEnabled)
            return;
        var chkbox = this.selectionType === SelectionType.checkbox;
        var multi = this.selectionType === SelectionType.multi;
        var multiClick = this.selectionType === SelectionType.multiClick;
        var selected = [];
        if (multi || chkbox || multiClick) {
            if (event.shiftKey) {
                selected = selectRowsBetween([], this.rows, index, this.prevIndex, this.getRowSelectedIdx.bind(this));
            }
            else if (event.ctrlKey || event.metaKey || multiClick || chkbox) {
                selected = selectRows(__spread(this.selected), row, this.getRowSelectedIdx.bind(this));
            }
            else {
                selected = selectRows([], row, this.getRowSelectedIdx.bind(this));
            }
        }
        else {
            selected = selectRows([], row, this.getRowSelectedIdx.bind(this));
        }
        if (typeof this.selectCheck === 'function') {
            selected = selected.filter(this.selectCheck.bind(this));
        }
        this.selected.splice(0, this.selected.length);
        (_a = this.selected).push.apply(_a, __spread(selected));
        this.prevIndex = index;
        this.select.emit({
            selected: selected
        });
    };
    DataTableSelectionComponent.prototype.onActivate = function (model, index) {
        var type = model.type, event = model.event, row = model.row;
        var chkbox = this.selectionType === SelectionType.checkbox;
        var select = (!chkbox && (type === 'click' || type === 'dblclick')) || (chkbox && type === 'checkbox');
        if (select) {
            this.selectRow(event, index, row);
        }
        else if (type === 'keydown') {
            if (event.keyCode === Keys.return) {
                this.selectRow(event, index, row);
            }
            else {
                this.onKeyboardFocus(model);
            }
        }
        this.activate.emit(model);
    };
    DataTableSelectionComponent.prototype.onKeyboardFocus = function (model) {
        var keyCode = model.event.keyCode;
        var shouldFocus = keyCode === Keys.up || keyCode === Keys.down || keyCode === Keys.right || keyCode === Keys.left;
        if (shouldFocus) {
            var isCellSelection = this.selectionType === SelectionType.cell;
            if (!model.cellElement || !isCellSelection) {
                this.focusRow(model.rowElement, keyCode);
            }
            else if (isCellSelection) {
                this.focusCell(model.cellElement, model.rowElement, keyCode, model.cellIndex);
            }
        }
    };
    DataTableSelectionComponent.prototype.focusRow = function (rowElement, keyCode) {
        var nextRowElement = this.getPrevNextRow(rowElement, keyCode);
        if (nextRowElement)
            nextRowElement.focus();
    };
    DataTableSelectionComponent.prototype.getPrevNextRow = function (rowElement, keyCode) {
        var parentElement = rowElement.parentElement;
        if (parentElement) {
            var focusElement = void 0;
            if (keyCode === Keys.up) {
                focusElement = parentElement.previousElementSibling;
            }
            else if (keyCode === Keys.down) {
                focusElement = parentElement.nextElementSibling;
            }
            if (focusElement && focusElement.children.length) {
                return focusElement.children[0];
            }
        }
    };
    DataTableSelectionComponent.prototype.focusCell = function (cellElement, rowElement, keyCode, cellIndex) {
        var nextCellElement;
        if (keyCode === Keys.left) {
            nextCellElement = cellElement.previousElementSibling;
        }
        else if (keyCode === Keys.right) {
            nextCellElement = cellElement.nextElementSibling;
        }
        else if (keyCode === Keys.up || keyCode === Keys.down) {
            var nextRowElement = this.getPrevNextRow(rowElement, keyCode);
            if (nextRowElement) {
                var children = nextRowElement.getElementsByClassName('datatable-body-cell');
                if (children.length)
                    nextCellElement = children[cellIndex];
            }
        }
        if (nextCellElement)
            nextCellElement.focus();
    };
    DataTableSelectionComponent.prototype.getRowSelected = function (row) {
        return this.getRowSelectedIdx(row, this.selected) > -1;
    };
    DataTableSelectionComponent.prototype.getRowSelectedIdx = function (row, selected) {
        var _this = this;
        if (!selected || !selected.length)
            return -1;
        var rowId = this.rowIdentity(row);
        return selected.findIndex(function (r) {
            var id = _this.rowIdentity(r);
            return id === rowId;
        });
    };
    __decorate([
        Input()
    ], DataTableSelectionComponent.prototype, "rows", void 0);
    __decorate([
        Input()
    ], DataTableSelectionComponent.prototype, "selected", void 0);
    __decorate([
        Input()
    ], DataTableSelectionComponent.prototype, "selectEnabled", void 0);
    __decorate([
        Input()
    ], DataTableSelectionComponent.prototype, "selectionType", void 0);
    __decorate([
        Input()
    ], DataTableSelectionComponent.prototype, "rowIdentity", void 0);
    __decorate([
        Input()
    ], DataTableSelectionComponent.prototype, "selectCheck", void 0);
    __decorate([
        Output()
    ], DataTableSelectionComponent.prototype, "activate", void 0);
    __decorate([
        Output()
    ], DataTableSelectionComponent.prototype, "select", void 0);
DataTableSelectionComponent.ɵfac = function DataTableSelectionComponent_Factory(t) { return new (t || DataTableSelectionComponent)(); };
DataTableSelectionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DataTableSelectionComponent, selectors: [["datatable-selection"]], inputs: { rows: "rows", selected: "selected", selectEnabled: "selectEnabled", selectionType: "selectionType", rowIdentity: "rowIdentity", selectCheck: "selectCheck" }, outputs: { activate: "activate", select: "select" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function DataTableSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DataTableSelectionComponent, [{
        type: Component,
        args: [{
                selector: 'datatable-selection',
                template: " <ng-content></ng-content> ",
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { activate: [{
            type: Output
        }], select: [{
            type: Output
        }], rows: [{
            type: Input
        }], selected: [{
            type: Input
        }], selectEnabled: [{
            type: Input
        }], selectionType: [{
            type: Input
        }], rowIdentity: [{
            type: Input
        }], selectCheck: [{
            type: Input
        }] }); })();
    return DataTableSelectionComponent;
}());
export { DataTableSelectionComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2xpYi9jb21wb25lbnRzL2JvZHkvc2VsZWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7OztBQWdCeEM7QUFDb0IsSUFEcEI7QUFBeUMsUUFRN0IsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQzdELFFBQVksV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQzNELElBMEhBLENBQUM7QUFDRCxJQXhIRSwrQ0FBUyxHQUFULFVBQVUsS0FBaUMsRUFBRSxLQUFhLEVBQUUsR0FBUTtBQUFJO0FBQ2hFLFFBQU4sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhO0FBQUUsWUFBQSxPQUFPO0FBQ3BDLFFBQ0ksSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsS0FBSyxhQUFhLENBQUMsUUFBUSxDQUFDO0FBQ2pFLFFBQUksSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsS0FBSyxhQUFhLENBQUMsS0FBSyxDQUFDO0FBQzdELFFBQUksSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsS0FBSyxhQUFhLENBQUMsVUFBVSxDQUFDO0FBQ3ZFLFFBQUksSUFBSSxRQUFRLEdBQVUsRUFBRSxDQUFDO0FBQzdCLFFBQ0ksSUFBSSxLQUFLLElBQUksTUFBTSxJQUFJLFVBQVUsRUFBRTtBQUN2QyxZQUFN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QUFBQyxvRUFBaUI7QUFDM0IsSUFBVTtBQUFhLFFBQXJCLEtBQUssRUFBRTtBQUFDLG9FQUFpQjtBQUU1QixJQUFZO0FBQWEsUUFBdEIsTUFBTSxFQUFFO0FBQUMsaUVBQWlEO0FBQzVELElBQVc7QUFBYSxRQUF0QixNQUFNLEVBQUU7QUFBQywrREFBK0M7SUFUOUMsMkJBQTJCLHdCQUx2QyxTQUFTLENBQUMsY0FDVCxRQUFRLEVBQUUscUJBQXFCLGNBQy9CLFFBQVEsRUFBRTswQkFBNkIsY0FDdkMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sVUFDaEQsQ0FBQyxRQUNXLDJCQUEyQixDQW9JdkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFDRDtBQUFDLElBREQsa0NBQUM7QUFDQSxDQURBLEFBcElELElBb0lDO0FBQ0QsU0FySWEsMkJBQTJCO0FBQ3ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZWxlY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMvc2VsZWN0aW9uLnR5cGUnO1xuaW1wb3J0IHsgc2VsZWN0Um93c0JldHdlZW4sIHNlbGVjdFJvd3MgfSBmcm9tICcuLi8uLi91dGlscy9zZWxlY3Rpb24nO1xuaW1wb3J0IHsgS2V5cyB9IGZyb20gJy4uLy4uL3V0aWxzL2tleXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1vZGVsIHtcbiAgdHlwZTogc3RyaW5nO1xuICBldmVudDogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQ7XG4gIHJvdzogYW55O1xuICByb3dFbGVtZW50OiBhbnk7XG4gIGNlbGxFbGVtZW50OiBhbnk7XG4gIGNlbGxJbmRleDogbnVtYmVyO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRhdGFibGUtc2VsZWN0aW9uJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVTZWxlY3Rpb25Db21wb25lbnQge1xuICBASW5wdXQoKSByb3dzOiBhbnlbXTtcbiAgQElucHV0KCkgc2VsZWN0ZWQ6IGFueVtdO1xuICBASW5wdXQoKSBzZWxlY3RFbmFibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBzZWxlY3Rpb25UeXBlOiBTZWxlY3Rpb25UeXBlO1xuICBASW5wdXQoKSByb3dJZGVudGl0eTogYW55O1xuICBASW5wdXQoKSBzZWxlY3RDaGVjazogYW55O1xuXG4gIEBPdXRwdXQoKSBhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHByZXZJbmRleDogbnVtYmVyO1xuXG4gIHNlbGVjdFJvdyhldmVudDogS2V5Ym9hcmRFdmVudCB8IE1vdXNlRXZlbnQsIGluZGV4OiBudW1iZXIsIHJvdzogYW55KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdEVuYWJsZWQpIHJldHVybjtcblxuICAgIGNvbnN0IGNoa2JveCA9IHRoaXMuc2VsZWN0aW9uVHlwZSA9PT0gU2VsZWN0aW9uVHlwZS5jaGVja2JveDtcbiAgICBjb25zdCBtdWx0aSA9IHRoaXMuc2VsZWN0aW9uVHlwZSA9PT0gU2VsZWN0aW9uVHlwZS5tdWx0aTtcbiAgICBjb25zdCBtdWx0aUNsaWNrID0gdGhpcy5zZWxlY3Rpb25UeXBlID09PSBTZWxlY3Rpb25UeXBlLm11bHRpQ2xpY2s7XG4gICAgbGV0IHNlbGVjdGVkOiBhbnlbXSA9IFtdO1xuXG4gICAgaWYgKG11bHRpIHx8IGNoa2JveCB8fCBtdWx0aUNsaWNrKSB7XG4gICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgc2VsZWN0ZWQgPSBzZWxlY3RSb3dzQmV0d2VlbihbXSwgdGhpcy5yb3dzLCBpbmRleCwgdGhpcy5wcmV2SW5kZXgsIHRoaXMuZ2V0Um93U2VsZWN0ZWRJZHguYmluZCh0aGlzKSk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSB8fCBtdWx0aUNsaWNrIHx8IGNoa2JveCkge1xuICAgICAgICBzZWxlY3RlZCA9IHNlbGVjdFJvd3MoWy4uLnRoaXMuc2VsZWN0ZWRdLCByb3csIHRoaXMuZ2V0Um93U2VsZWN0ZWRJZHguYmluZCh0aGlzKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxlY3RlZCA9IHNlbGVjdFJvd3MoW10sIHJvdywgdGhpcy5nZXRSb3dTZWxlY3RlZElkeC5iaW5kKHRoaXMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZWN0ZWQgPSBzZWxlY3RSb3dzKFtdLCByb3csIHRoaXMuZ2V0Um93U2VsZWN0ZWRJZHguYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLnNlbGVjdENoZWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBzZWxlY3RlZCA9IHNlbGVjdGVkLmZpbHRlcih0aGlzLnNlbGVjdENoZWNrLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0ZWQuc3BsaWNlKDAsIHRoaXMuc2VsZWN0ZWQubGVuZ3RoKTtcbiAgICB0aGlzLnNlbGVjdGVkLnB1c2goLi4uc2VsZWN0ZWQpO1xuXG4gICAgdGhpcy5wcmV2SW5kZXggPSBpbmRleDtcblxuICAgIHRoaXMuc2VsZWN0LmVtaXQoe1xuICAgICAgc2VsZWN0ZWRcbiAgICB9KTtcbiAgfVxuXG4gIG9uQWN0aXZhdGUobW9kZWw6IE1vZGVsLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgeyB0eXBlLCBldmVudCwgcm93IH0gPSBtb2RlbDtcbiAgICBjb25zdCBjaGtib3ggPSB0aGlzLnNlbGVjdGlvblR5cGUgPT09IFNlbGVjdGlvblR5cGUuY2hlY2tib3g7XG4gICAgY29uc3Qgc2VsZWN0ID0gKCFjaGtib3ggJiYgKHR5cGUgPT09ICdjbGljaycgfHwgdHlwZSA9PT0gJ2RibGNsaWNrJykpIHx8IChjaGtib3ggJiYgdHlwZSA9PT0gJ2NoZWNrYm94Jyk7XG5cbiAgICBpZiAoc2VsZWN0KSB7XG4gICAgICB0aGlzLnNlbGVjdFJvdyhldmVudCwgaW5kZXgsIHJvdyk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAna2V5ZG93bicpIHtcbiAgICAgIGlmICgoPEtleWJvYXJkRXZlbnQ+ZXZlbnQpLmtleUNvZGUgPT09IEtleXMucmV0dXJuKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0Um93KGV2ZW50LCBpbmRleCwgcm93KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub25LZXlib2FyZEZvY3VzKG1vZGVsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hY3RpdmF0ZS5lbWl0KG1vZGVsKTtcbiAgfVxuXG4gIG9uS2V5Ym9hcmRGb2N1cyhtb2RlbDogTW9kZWwpOiB2b2lkIHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IDxLZXlib2FyZEV2ZW50Pm1vZGVsLmV2ZW50O1xuICAgIGNvbnN0IHNob3VsZEZvY3VzID0ga2V5Q29kZSA9PT0gS2V5cy51cCB8fCBrZXlDb2RlID09PSBLZXlzLmRvd24gfHwga2V5Q29kZSA9PT0gS2V5cy5yaWdodCB8fCBrZXlDb2RlID09PSBLZXlzLmxlZnQ7XG5cbiAgICBpZiAoc2hvdWxkRm9jdXMpIHtcbiAgICAgIGNvbnN0IGlzQ2VsbFNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uVHlwZSA9PT0gU2VsZWN0aW9uVHlwZS5jZWxsO1xuXG4gICAgICBpZiAoIW1vZGVsLmNlbGxFbGVtZW50IHx8ICFpc0NlbGxTZWxlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5mb2N1c1Jvdyhtb2RlbC5yb3dFbGVtZW50LCBrZXlDb2RlKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNDZWxsU2VsZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuZm9jdXNDZWxsKG1vZGVsLmNlbGxFbGVtZW50LCBtb2RlbC5yb3dFbGVtZW50LCBrZXlDb2RlLCBtb2RlbC5jZWxsSW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvY3VzUm93KHJvd0VsZW1lbnQ6IGFueSwga2V5Q29kZTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgbmV4dFJvd0VsZW1lbnQgPSB0aGlzLmdldFByZXZOZXh0Um93KHJvd0VsZW1lbnQsIGtleUNvZGUpO1xuICAgIGlmIChuZXh0Um93RWxlbWVudCkgbmV4dFJvd0VsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIGdldFByZXZOZXh0Um93KHJvd0VsZW1lbnQ6IGFueSwga2V5Q29kZTogbnVtYmVyKTogYW55IHtcbiAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gcm93RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgaWYgKHBhcmVudEVsZW1lbnQpIHtcbiAgICAgIGxldCBmb2N1c0VsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgICAgaWYgKGtleUNvZGUgPT09IEtleXMudXApIHtcbiAgICAgICAgZm9jdXNFbGVtZW50ID0gcGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBLZXlzLmRvd24pIHtcbiAgICAgICAgZm9jdXNFbGVtZW50ID0gcGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChmb2N1c0VsZW1lbnQgJiYgZm9jdXNFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZm9jdXNFbGVtZW50LmNoaWxkcmVuWzBdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvY3VzQ2VsbChjZWxsRWxlbWVudDogYW55LCByb3dFbGVtZW50OiBhbnksIGtleUNvZGU6IG51bWJlciwgY2VsbEluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBsZXQgbmV4dENlbGxFbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICAgIGlmIChrZXlDb2RlID09PSBLZXlzLmxlZnQpIHtcbiAgICAgIG5leHRDZWxsRWxlbWVudCA9IGNlbGxFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBLZXlzLnJpZ2h0KSB7XG4gICAgICBuZXh0Q2VsbEVsZW1lbnQgPSBjZWxsRWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBLZXlzLnVwIHx8IGtleUNvZGUgPT09IEtleXMuZG93bikge1xuICAgICAgY29uc3QgbmV4dFJvd0VsZW1lbnQgPSB0aGlzLmdldFByZXZOZXh0Um93KHJvd0VsZW1lbnQsIGtleUNvZGUpO1xuICAgICAgaWYgKG5leHRSb3dFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gbmV4dFJvd0VsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGF0YXRhYmxlLWJvZHktY2VsbCcpO1xuICAgICAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoKSBuZXh0Q2VsbEVsZW1lbnQgPSBjaGlsZHJlbltjZWxsSW5kZXhdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXh0Q2VsbEVsZW1lbnQpIG5leHRDZWxsRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgZ2V0Um93U2VsZWN0ZWQocm93OiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSb3dTZWxlY3RlZElkeChyb3csIHRoaXMuc2VsZWN0ZWQpID4gLTE7XG4gIH1cblxuICBnZXRSb3dTZWxlY3RlZElkeChyb3c6IGFueSwgc2VsZWN0ZWQ6IGFueVtdKTogbnVtYmVyIHtcbiAgICBpZiAoIXNlbGVjdGVkIHx8ICFzZWxlY3RlZC5sZW5ndGgpIHJldHVybiAtMTtcblxuICAgIGNvbnN0IHJvd0lkID0gdGhpcy5yb3dJZGVudGl0eShyb3cpO1xuICAgIHJldHVybiBzZWxlY3RlZC5maW5kSW5kZXgociA9PiB7XG4gICAgICBjb25zdCBpZCA9IHRoaXMucm93SWRlbnRpdHkocik7XG4gICAgICByZXR1cm4gaWQgPT09IHJvd0lkO1xuICAgIH0pO1xuICB9XG59XG4iXX0=