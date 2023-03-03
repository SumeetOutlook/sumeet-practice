import { __decorate } from "tslib";
import { Input, Output, EventEmitter, Directive, TemplateRef, ContentChild } from '@angular/core';
import { DatatableRowDetailTemplateDirective } from './row-detail-template.directive';
import * as ɵngcc0 from '@angular/core';
let DatatableRowDetailDirective = class DatatableRowDetailDirective {
    constructor() {
        /**
         * The detail row height is required especially
         * when virtual scroll is enabled.
         */
        this.rowHeight = 0;
        /**
         * Row detail row visbility was toggled.
         */
        this.toggle = new EventEmitter();
    }
    get template() {
        return this._templateInput || this._templateQuery;
    }
    /**
     * Toggle the expansion of the row
     */
    toggleExpandRow(row) {
        this.toggle.emit({
            type: 'row',
            value: row
        });
    }
    /**
     * API method to expand all the rows.
     */
    expandAllRows() {
        this.toggle.emit({
            type: 'all',
            value: true
        });
    }
    /**
     * API method to collapse all the rows.
     */
    collapseAllRows() {
        this.toggle.emit({
            type: 'all',
            value: false
        });
    }
};
DatatableRowDetailDirective.ɵfac = function DatatableRowDetailDirective_Factory(t) { return new (t || DatatableRowDetailDirective)(); };
DatatableRowDetailDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DatatableRowDetailDirective, selectors: [["ngx-datatable-row-detail"]], contentQueries: function DatatableRowDetailDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵstaticContentQuery(dirIndex, DatatableRowDetailTemplateDirective, true, TemplateRef);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._templateQuery = _t.first);
    } }, inputs: { rowHeight: "rowHeight", _templateInput: ["template", "_templateInput"] }, outputs: { toggle: "toggle" } });
__decorate([
    Input()
], DatatableRowDetailDirective.prototype, "rowHeight", void 0);
__decorate([
    Input('template')
], DatatableRowDetailDirective.prototype, "_templateInput", void 0);
__decorate([
    ContentChild(DatatableRowDetailTemplateDirective, { read: TemplateRef, static: true })
], DatatableRowDetailDirective.prototype, "_templateQuery", void 0);
__decorate([
    Output()
], DatatableRowDetailDirective.prototype, "toggle", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DatatableRowDetailDirective, [{
        type: Directive,
        args: [{ selector: 'ngx-datatable-row-detail' }]
    }], function () { return []; }, { rowHeight: [{
            type: Input
        }], toggle: [{
            type: Output
        }], _templateInput: [{
            type: Input,
            args: ['template']
        }], _templateQuery: [{
            type: ContentChild,
            args: [DatatableRowDetailTemplateDirective, { read: TemplateRef, static: true }]
        }] }); })();
export { DatatableRowDetailDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWRldGFpbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIm5nOi9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9saWIvY29tcG9uZW50cy9yb3ctZGV0YWlsL3Jvdy1kZXRhaWwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0saUNBQWlDLENBQUM7O0FBR3RGLElBQWEsMkJBQTJCLEdBQXhDLE1BQWEsMkJBQTJCO0FBQ3hDLElBREE7QUFBZ0IsUUFDZDtBQUNGO0FBQ007QUFFQSxXQUREO0FBQ0wsUUFBVyxjQUFTLEdBQXFELENBQUMsQ0FBQztBQUMzRSxRQVdFO0FBQ0Y7QUFFQSxXQURLO0FBQ0wsUUFBWSxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDM0QsSUE4QkEsQ0FBQztBQUNELElBdkNFLElBQUksUUFBUTtBQUFLLFFBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUM7QUFDdEQsSUFBRSxDQUFDO0FBQ0gsSUFNRTtBQUNGO0FBQ0UsT0FBRztBQUNMLElBQUUsZUFBZSxDQUFDLEdBQVE7QUFBSSxRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNyQixZQUFNLElBQUksRUFBRSxLQUFLO0FBQ2pCLFlBQU0sS0FBSyxFQUFFLEdBQUc7QUFDaEIsU0FBSyxDQUFDLENBQUM7QUFDUCxJQUFFLENBQUM7QUFDSCxJQUNFO0FBQ0Y7QUFDRSxPQUFHO0FBQ0wsSUFBRSxhQUFhO0FBQUssUUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDckIsWUFBTSxJQUFJLEVBQUUsS0FBSztBQUNqQixZQUFNLEtBQUssRUFBRSxJQUFJO0FBQ2pCLFNBQUssQ0FBQyxDQUFDO0FBQ1AsSUFBRSxDQUFDO0FBQ0gsSUFDRTtBQUNGO0FBQ0UsT0FBRztBQUNMLElBQUUsZUFBZTtBQUFLLFFBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ3JCLFlBQU0sSUFBSSxFQUFFLEtBQUs7QUFDakIsWUFBTSxLQUFLLEVBQUUsS0FBSztBQUNsQixTQUFLLENBQUMsQ0FBQztBQUNQLElBQUUsQ0FBQztBQUNILENBQUM7Ozs7Ozs7OEhBQUE7QUE5Q1U7QUFBYSxJQUFyQixLQUFLLEVBQUU7QUFBQyw4REFBZ0U7QUFHekU7QUFBYSxJQURaLEtBQUssQ0FBQyxVQUFVLENBQUM7QUFDcEIsbUVBQW1DO0FBR2pDO0FBQWEsSUFEWixZQUFZLENBQUMsbUNBQW1DLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUN6RixtRUFBbUM7QUFTdkI7QUFBYSxJQUF0QixNQUFNLEVBQUU7QUFBQywyREFBK0M7QUFwQjlDLDJCQUEyQixvQkFEdkMsU0FBUyxDQUFDLEVBQUUsUUFBUSxFQUFFO1NBQTBCLEVBQUUsQ0FBQyxJQUN2QztrQkFBMkIsQ0FtRHZDOzs7Ozs7Ozs7OztvQkFDRDtBQUFDLFNBcERZLDJCQUEyQjtBQUN2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiwgQ29udGVudENoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhdGFibGVSb3dEZXRhaWxUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vcm93LWRldGFpbC10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICduZ3gtZGF0YXRhYmxlLXJvdy1kZXRhaWwnIH0pXG5leHBvcnQgY2xhc3MgRGF0YXRhYmxlUm93RGV0YWlsRGlyZWN0aXZlIHtcbiAgLyoqXG4gICAqIFRoZSBkZXRhaWwgcm93IGhlaWdodCBpcyByZXF1aXJlZCBlc3BlY2lhbGx5XG4gICAqIHdoZW4gdmlydHVhbCBzY3JvbGwgaXMgZW5hYmxlZC5cbiAgICovXG4gIEBJbnB1dCgpIHJvd0hlaWdodDogbnVtYmVyIHwgKChyb3c/OiBhbnksIGluZGV4PzogbnVtYmVyKSA9PiBudW1iZXIpID0gMDtcblxuICBASW5wdXQoJ3RlbXBsYXRlJylcbiAgX3RlbXBsYXRlSW5wdXQ6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQENvbnRlbnRDaGlsZChEYXRhdGFibGVSb3dEZXRhaWxUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gIF90ZW1wbGF0ZVF1ZXJ5OiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGdldCB0ZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVJbnB1dCB8fCB0aGlzLl90ZW1wbGF0ZVF1ZXJ5O1xuICB9XG5cbiAgLyoqXG4gICAqIFJvdyBkZXRhaWwgcm93IHZpc2JpbGl0eSB3YXMgdG9nZ2xlZC5cbiAgICovXG4gIEBPdXRwdXQoKSB0b2dnbGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBUb2dnbGUgdGhlIGV4cGFuc2lvbiBvZiB0aGUgcm93XG4gICAqL1xuICB0b2dnbGVFeHBhbmRSb3cocm93OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnRvZ2dsZS5lbWl0KHtcbiAgICAgIHR5cGU6ICdyb3cnLFxuICAgICAgdmFsdWU6IHJvd1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFQSSBtZXRob2QgdG8gZXhwYW5kIGFsbCB0aGUgcm93cy5cbiAgICovXG4gIGV4cGFuZEFsbFJvd3MoKTogdm9pZCB7XG4gICAgdGhpcy50b2dnbGUuZW1pdCh7XG4gICAgICB0eXBlOiAnYWxsJyxcbiAgICAgIHZhbHVlOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQVBJIG1ldGhvZCB0byBjb2xsYXBzZSBhbGwgdGhlIHJvd3MuXG4gICAqL1xuICBjb2xsYXBzZUFsbFJvd3MoKTogdm9pZCB7XG4gICAgdGhpcy50b2dnbGUuZW1pdCh7XG4gICAgICB0eXBlOiAnYWxsJyxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pO1xuICB9XG59XG4iXX0=