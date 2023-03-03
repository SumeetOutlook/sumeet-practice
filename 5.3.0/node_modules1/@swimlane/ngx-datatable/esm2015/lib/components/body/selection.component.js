import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { SelectionType } from '../../types/selection.type';
import { selectRowsBetween, selectRows } from '../../utils/selection';
import { Keys } from '../../utils/keys';
import * as ɵngcc0 from '@angular/core';

const _c0 = ["*"];
let DataTableSelectionComponent = class DataTableSelectionComponent {
    constructor() {
        this.activate = new EventEmitter();
        this.select = new EventEmitter();
    }
    selectRow(event, index, row) {
        if (!this.selectEnabled)
            return;
        const chkbox = this.selectionType === SelectionType.checkbox;
        const multi = this.selectionType === SelectionType.multi;
        const multiClick = this.selectionType === SelectionType.multiClick;
        let selected = [];
        if (multi || chkbox || multiClick) {
            if (event.shiftKey) {
                selected = selectRowsBetween([], this.rows, index, this.prevIndex, this.getRowSelectedIdx.bind(this));
            }
            else if (event.ctrlKey || event.metaKey || multiClick || chkbox) {
                selected = selectRows([...this.selected], row, this.getRowSelectedIdx.bind(this));
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
        this.selected.push(...selected);
        this.prevIndex = index;
        this.select.emit({
            selected
        });
    }
    onActivate(model, index) {
        const { type, event, row } = model;
        const chkbox = this.selectionType === SelectionType.checkbox;
        const select = (!chkbox && (type === 'click' || type === 'dblclick')) || (chkbox && type === 'checkbox');
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
    }
    onKeyboardFocus(model) {
        const { keyCode } = model.event;
        const shouldFocus = keyCode === Keys.up || keyCode === Keys.down || keyCode === Keys.right || keyCode === Keys.left;
        if (shouldFocus) {
            const isCellSelection = this.selectionType === SelectionType.cell;
            if (!model.cellElement || !isCellSelection) {
                this.focusRow(model.rowElement, keyCode);
            }
            else if (isCellSelection) {
                this.focusCell(model.cellElement, model.rowElement, keyCode, model.cellIndex);
            }
        }
    }
    focusRow(rowElement, keyCode) {
        const nextRowElement = this.getPrevNextRow(rowElement, keyCode);
        if (nextRowElement)
            nextRowElement.focus();
    }
    getPrevNextRow(rowElement, keyCode) {
        const parentElement = rowElement.parentElement;
        if (parentElement) {
            let focusElement;
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
    }
    focusCell(cellElement, rowElement, keyCode, cellIndex) {
        let nextCellElement;
        if (keyCode === Keys.left) {
            nextCellElement = cellElement.previousElementSibling;
        }
        else if (keyCode === Keys.right) {
            nextCellElement = cellElement.nextElementSibling;
        }
        else if (keyCode === Keys.up || keyCode === Keys.down) {
            const nextRowElement = this.getPrevNextRow(rowElement, keyCode);
            if (nextRowElement) {
                const children = nextRowElement.getElementsByClassName('datatable-body-cell');
                if (children.length)
                    nextCellElement = children[cellIndex];
            }
        }
        if (nextCellElement)
            nextCellElement.focus();
    }
    getRowSelected(row) {
        return this.getRowSelectedIdx(row, this.selected) > -1;
    }
    getRowSelectedIdx(row, selected) {
        if (!selected || !selected.length)
            return -1;
        const rowId = this.rowIdentity(row);
        return selected.findIndex(r => {
            const id = this.rowIdentity(r);
            return id === rowId;
        });
    }
};
DataTableSelectionComponent.ɵfac = function DataTableSelectionComponent_Factory(t) { return new (t || DataTableSelectionComponent)(); };
DataTableSelectionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DataTableSelectionComponent, selectors: [["datatable-selection"]], inputs: { rows: "rows", selected: "selected", selectEnabled: "selectEnabled", selectionType: "selectionType", rowIdentity: "rowIdentity", selectCheck: "selectCheck" }, outputs: { activate: "activate", select: "select" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function DataTableSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DataTableSelectionComponent, [{
        type: Component,
        args: [{
                selector: 'datatable-selection',
                template: ` <ng-content></ng-content> `,
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
export { DataTableSelectionComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2xpYi9jb21wb25lbnRzL2JvZHkvc2VsZWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7OztBQWdCeEMsSUFBYSwyQkFBMkIsR0FBeEMsTUFBYSwyQkFBMkI7QUFDeEMsSUFEQTtBQUFnQixRQVFKLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUM3RCxRQUFZLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUMzRCxJQTBIQSxDQUFDO0FBQ0QsSUF4SEUsU0FBUyxDQUFDLEtBQWlDLEVBQUUsS0FBYSxFQUFFLEdBQVE7QUFBSSxRQUN0RSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWE7QUFBRSxZQUFBLE9BQU87QUFDcEMsUUFDSSxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxLQUFLLGFBQWEsQ0FBQyxRQUFRLENBQUM7QUFDakUsUUFBSSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxLQUFLLGFBQWEsQ0FBQyxLQUFLLENBQUM7QUFDN0QsUUFBSSxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxLQUFLLGFBQWEsQ0FBQyxVQUFVLENBQUM7QUFDdkUsUUFBSSxJQUFJLFFBQVEsR0FBVSxFQUFFLENBQUM7QUFDN0IsUUFDSSxJQUFJLEtBQUssSUFBSSxNQUFNLElBQUksVUFB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QUU7QUFBQyxnRUFBaUI7QUFDakI7QUFBYSxJQUFyQixLQUFLLEVBQUU7QUFBQyxnRUFBaUI7QUFFaEI7QUFBYSxJQUF0QixNQUFNLEVBQUU7QUFBQyw2REFBaUQ7QUFDakQ7QUFBYSxJQUF0QixNQUFNLEVBQUU7QUFBQywyREFBK0M7QUFUOUMsMkJBQTJCLG9CQUx2QyxTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUU7WUFBcUIsVUFDL0I7S0FBUSxFQUFFO21CQUE2QixVQUN2QyxlQUFlLEVBQUU7b0JBQXVCLENBQUMsTUFBTSxNQUNoRCxDQUFDLElBQ1c7UUFBMkIsQ0FvSXZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQ0Q7QUFBQyxTQXJJWSwyQkFBMkI7QUFDdkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlbGVjdGlvblR5cGUgfSBmcm9tICcuLi8uLi90eXBlcy9zZWxlY3Rpb24udHlwZSc7XG5pbXBvcnQgeyBzZWxlY3RSb3dzQmV0d2Vlbiwgc2VsZWN0Um93cyB9IGZyb20gJy4uLy4uL3V0aWxzL3NlbGVjdGlvbic7XG5pbXBvcnQgeyBLZXlzIH0gZnJvbSAnLi4vLi4vdXRpbHMva2V5cyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kZWwge1xuICB0eXBlOiBzdHJpbmc7XG4gIGV2ZW50OiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudDtcbiAgcm93OiBhbnk7XG4gIHJvd0VsZW1lbnQ6IGFueTtcbiAgY2VsbEVsZW1lbnQ6IGFueTtcbiAgY2VsbEluZGV4OiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGF0YWJsZS1zZWxlY3Rpb24nLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZVNlbGVjdGlvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHJvd3M6IGFueVtdO1xuICBASW5wdXQoKSBzZWxlY3RlZDogYW55W107XG4gIEBJbnB1dCgpIHNlbGVjdEVuYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNlbGVjdGlvblR5cGU6IFNlbGVjdGlvblR5cGU7XG4gIEBJbnB1dCgpIHJvd0lkZW50aXR5OiBhbnk7XG4gIEBJbnB1dCgpIHNlbGVjdENoZWNrOiBhbnk7XG5cbiAgQE91dHB1dCgpIGFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHJldkluZGV4OiBudW1iZXI7XG5cbiAgc2VsZWN0Um93KGV2ZW50OiBLZXlib2FyZEV2ZW50IHwgTW91c2VFdmVudCwgaW5kZXg6IG51bWJlciwgcm93OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0RW5hYmxlZCkgcmV0dXJuO1xuXG4gICAgY29uc3QgY2hrYm94ID0gdGhpcy5zZWxlY3Rpb25UeXBlID09PSBTZWxlY3Rpb25UeXBlLmNoZWNrYm94O1xuICAgIGNvbnN0IG11bHRpID0gdGhpcy5zZWxlY3Rpb25UeXBlID09PSBTZWxlY3Rpb25UeXBlLm11bHRpO1xuICAgIGNvbnN0IG11bHRpQ2xpY2sgPSB0aGlzLnNlbGVjdGlvblR5cGUgPT09IFNlbGVjdGlvblR5cGUubXVsdGlDbGljaztcbiAgICBsZXQgc2VsZWN0ZWQ6IGFueVtdID0gW107XG5cbiAgICBpZiAobXVsdGkgfHwgY2hrYm94IHx8IG11bHRpQ2xpY2spIHtcbiAgICAgIGlmIChldmVudC5zaGlmdEtleSkge1xuICAgICAgICBzZWxlY3RlZCA9IHNlbGVjdFJvd3NCZXR3ZWVuKFtdLCB0aGlzLnJvd3MsIGluZGV4LCB0aGlzLnByZXZJbmRleCwgdGhpcy5nZXRSb3dTZWxlY3RlZElkeC5iaW5kKHRoaXMpKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5IHx8IG11bHRpQ2xpY2sgfHwgY2hrYm94KSB7XG4gICAgICAgIHNlbGVjdGVkID0gc2VsZWN0Um93cyhbLi4udGhpcy5zZWxlY3RlZF0sIHJvdywgdGhpcy5nZXRSb3dTZWxlY3RlZElkeC5iaW5kKHRoaXMpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGVjdGVkID0gc2VsZWN0Um93cyhbXSwgcm93LCB0aGlzLmdldFJvd1NlbGVjdGVkSWR4LmJpbmQodGhpcykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZWxlY3RlZCA9IHNlbGVjdFJvd3MoW10sIHJvdywgdGhpcy5nZXRSb3dTZWxlY3RlZElkeC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRoaXMuc2VsZWN0Q2hlY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHNlbGVjdGVkID0gc2VsZWN0ZWQuZmlsdGVyKHRoaXMuc2VsZWN0Q2hlY2suYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3RlZC5zcGxpY2UoMCwgdGhpcy5zZWxlY3RlZC5sZW5ndGgpO1xuICAgIHRoaXMuc2VsZWN0ZWQucHVzaCguLi5zZWxlY3RlZCk7XG5cbiAgICB0aGlzLnByZXZJbmRleCA9IGluZGV4O1xuXG4gICAgdGhpcy5zZWxlY3QuZW1pdCh7XG4gICAgICBzZWxlY3RlZFxuICAgIH0pO1xuICB9XG5cbiAgb25BY3RpdmF0ZShtb2RlbDogTW9kZWwsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCB7IHR5cGUsIGV2ZW50LCByb3cgfSA9IG1vZGVsO1xuICAgIGNvbnN0IGNoa2JveCA9IHRoaXMuc2VsZWN0aW9uVHlwZSA9PT0gU2VsZWN0aW9uVHlwZS5jaGVja2JveDtcbiAgICBjb25zdCBzZWxlY3QgPSAoIWNoa2JveCAmJiAodHlwZSA9PT0gJ2NsaWNrJyB8fCB0eXBlID09PSAnZGJsY2xpY2snKSkgfHwgKGNoa2JveCAmJiB0eXBlID09PSAnY2hlY2tib3gnKTtcblxuICAgIGlmIChzZWxlY3QpIHtcbiAgICAgIHRoaXMuc2VsZWN0Um93KGV2ZW50LCBpbmRleCwgcm93KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdrZXlkb3duJykge1xuICAgICAgaWYgKCg8S2V5Ym9hcmRFdmVudD5ldmVudCkua2V5Q29kZSA9PT0gS2V5cy5yZXR1cm4pIHtcbiAgICAgICAgdGhpcy5zZWxlY3RSb3coZXZlbnQsIGluZGV4LCByb3cpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vbktleWJvYXJkRm9jdXMobW9kZWwpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFjdGl2YXRlLmVtaXQobW9kZWwpO1xuICB9XG5cbiAgb25LZXlib2FyZEZvY3VzKG1vZGVsOiBNb2RlbCk6IHZvaWQge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gPEtleWJvYXJkRXZlbnQ+bW9kZWwuZXZlbnQ7XG4gICAgY29uc3Qgc2hvdWxkRm9jdXMgPSBrZXlDb2RlID09PSBLZXlzLnVwIHx8IGtleUNvZGUgPT09IEtleXMuZG93biB8fCBrZXlDb2RlID09PSBLZXlzLnJpZ2h0IHx8IGtleUNvZGUgPT09IEtleXMubGVmdDtcblxuICAgIGlmIChzaG91bGRGb2N1cykge1xuICAgICAgY29uc3QgaXNDZWxsU2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb25UeXBlID09PSBTZWxlY3Rpb25UeXBlLmNlbGw7XG5cbiAgICAgIGlmICghbW9kZWwuY2VsbEVsZW1lbnQgfHwgIWlzQ2VsbFNlbGVjdGlvbikge1xuICAgICAgICB0aGlzLmZvY3VzUm93KG1vZGVsLnJvd0VsZW1lbnQsIGtleUNvZGUpO1xuICAgICAgfSBlbHNlIGlmIChpc0NlbGxTZWxlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5mb2N1c0NlbGwobW9kZWwuY2VsbEVsZW1lbnQsIG1vZGVsLnJvd0VsZW1lbnQsIGtleUNvZGUsIG1vZGVsLmNlbGxJbmRleCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9jdXNSb3cocm93RWxlbWVudDogYW55LCBrZXlDb2RlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBuZXh0Um93RWxlbWVudCA9IHRoaXMuZ2V0UHJldk5leHRSb3cocm93RWxlbWVudCwga2V5Q29kZSk7XG4gICAgaWYgKG5leHRSb3dFbGVtZW50KSBuZXh0Um93RWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgZ2V0UHJldk5leHRSb3cocm93RWxlbWVudDogYW55LCBrZXlDb2RlOiBudW1iZXIpOiBhbnkge1xuICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSByb3dFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBpZiAocGFyZW50RWxlbWVudCkge1xuICAgICAgbGV0IGZvY3VzRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAoa2V5Q29kZSA9PT0gS2V5cy51cCkge1xuICAgICAgICBmb2N1c0VsZW1lbnQgPSBwYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IEtleXMuZG93bikge1xuICAgICAgICBmb2N1c0VsZW1lbnQgPSBwYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgIH1cblxuICAgICAgaWYgKGZvY3VzRWxlbWVudCAmJiBmb2N1c0VsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmb2N1c0VsZW1lbnQuY2hpbGRyZW5bMF07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9jdXNDZWxsKGNlbGxFbGVtZW50OiBhbnksIHJvd0VsZW1lbnQ6IGFueSwga2V5Q29kZTogbnVtYmVyLCBjZWxsSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGxldCBuZXh0Q2VsbEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gICAgaWYgKGtleUNvZGUgPT09IEtleXMubGVmdCkge1xuICAgICAgbmV4dENlbGxFbGVtZW50ID0gY2VsbEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IEtleXMucmlnaHQpIHtcbiAgICAgIG5leHRDZWxsRWxlbWVudCA9IGNlbGxFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcbiAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IEtleXMudXAgfHwga2V5Q29kZSA9PT0gS2V5cy5kb3duKSB7XG4gICAgICBjb25zdCBuZXh0Um93RWxlbWVudCA9IHRoaXMuZ2V0UHJldk5leHRSb3cocm93RWxlbWVudCwga2V5Q29kZSk7XG4gICAgICBpZiAobmV4dFJvd0VsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBuZXh0Um93RWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkYXRhdGFibGUtYm9keS1jZWxsJyk7XG4gICAgICAgIGlmIChjaGlsZHJlbi5sZW5ndGgpIG5leHRDZWxsRWxlbWVudCA9IGNoaWxkcmVuW2NlbGxJbmRleF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5leHRDZWxsRWxlbWVudCkgbmV4dENlbGxFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBnZXRSb3dTZWxlY3RlZChyb3c6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmdldFJvd1NlbGVjdGVkSWR4KHJvdywgdGhpcy5zZWxlY3RlZCkgPiAtMTtcbiAgfVxuXG4gIGdldFJvd1NlbGVjdGVkSWR4KHJvdzogYW55LCBzZWxlY3RlZDogYW55W10pOiBudW1iZXIge1xuICAgIGlmICghc2VsZWN0ZWQgfHwgIXNlbGVjdGVkLmxlbmd0aCkgcmV0dXJuIC0xO1xuXG4gICAgY29uc3Qgcm93SWQgPSB0aGlzLnJvd0lkZW50aXR5KHJvdyk7XG4gICAgcmV0dXJuIHNlbGVjdGVkLmZpbmRJbmRleChyID0+IHtcbiAgICAgIGNvbnN0IGlkID0gdGhpcy5yb3dJZGVudGl0eShyKTtcbiAgICAgIHJldHVybiBpZCA9PT0gcm93SWQ7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==