import { __decorate } from "tslib";
import { Input, Output, EventEmitter, Directive, TemplateRef, ContentChild } from '@angular/core';
import { DatatableRowDetailTemplateDirective } from './row-detail-template.directive';
import * as ɵngcc0 from '@angular/core';
var DatatableRowDetailDirective = /** @class */ (function () {
    function DatatableRowDetailDirective() {
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
    Object.defineProperty(DatatableRowDetailDirective.prototype, "template", {
        get: function () {
            return this._templateInput || this._templateQuery;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Toggle the expansion of the row
     */
    DatatableRowDetailDirective.prototype.toggleExpandRow = function (row) {
        this.toggle.emit({
            type: 'row',
            value: row
        });
    };
    /**
     * API method to expand all the rows.
     */
    DatatableRowDetailDirective.prototype.expandAllRows = function () {
        this.toggle.emit({
            type: 'all',
            value: true
        });
    };
    /**
     * API method to collapse all the rows.
     */
    DatatableRowDetailDirective.prototype.collapseAllRows = function () {
        this.toggle.emit({
            type: 'all',
            value: false
        });
    };
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
DatatableRowDetailDirective.ɵfac = function DatatableRowDetailDirective_Factory(t) { return new (t || DatatableRowDetailDirective)(); };
DatatableRowDetailDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DatatableRowDetailDirective, selectors: [["ngx-datatable-row-detail"]], contentQueries: function DatatableRowDetailDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵstaticContentQuery(dirIndex, DatatableRowDetailTemplateDirective, true, TemplateRef);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._templateQuery = _t.first);
    } }, inputs: { rowHeight: "rowHeight", _templateInput: ["template", "_templateInput"] }, outputs: { toggle: "toggle" } });
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
    return DatatableRowDetailDirective;
}());
export { DatatableRowDetailDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWRldGFpbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIm5nOi9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9saWIvY29tcG9uZW50cy9yb3ctZGV0YWlsL3Jvdy1kZXRhaWwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0saUNBQWlDLENBQUM7O0FBR3RGO0FBRWMsSUFGZDtBQUF5QyxRQUN2QztBQUNGO0FBQ007QUFFQSxXQUREO0FBQ0wsUUFBVyxjQUFTLEdBQXFELENBQUMsQ0FBQztBQUMzRSxRQVdFO0FBQ0Y7QUFFQSxXQURLO0FBQ0wsUUFBWSxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDM0QsSUE4QkEsQ0FBQztBQUNELElBdkNFLHNCQUFJLGlEQUFRO0FBQUksYUFBaEI7QUFBYyxZQUNaLE9BQU8sSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDO0FBQ3RELFFBQUUsQ0FBQztBQUVIO0FBQ29CO0FBQ2hCLE9BSkQ7QUFDSCxJQU1FO0FBQ0Y7QUFDRSxPQUFHO0FBQ0wsSUFBRSxxREFBZSxHQUFmLFVBQWdCLEdBQVE7QUFBSSxRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNyQixZQUFNLElBQUksRUFBRSxLQUFLO0FBQ2pCLFlBQU0sS0FBSyxFQUFFLEdBQUc7QUFDaEIsU0FBSyxDQUFDLENBQUM7QUFDUCxJQUFFLENBQUM7QUFFSCxJQUFFO0FBQ0Y7QUFDRSxPQUFHO0FBQ0wsSUFBRSxtREFBYSxHQUFiO0FBQWMsUUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNyQixZQUFNLElBQUksRUFBRSxLQUFLO0FBQ2pCLFlBQU0sS0FBSyxFQUFFLElBQUk7QUFDakIsU0FBSyxDQUFDLENBQUM7QUFDUCxJQUFFLENBQUM7QUFFSCxJQUFFO0FBQ0Y7QUFDRSxPQUFHO0FBQ0wsSUFBRSxxREFBZSxHQUFmO0FBQWMsUUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNyQixZQUFNLElBQUksRUFBRSxLQUFLO0FBQ2pCLFlBQU0sS0FBSyxFQUFFLEtBQUs7QUFDbEIsU0FBSyxDQUFDLENBQUM7QUFDUCxJQUFFLENBQUM7QUFDRixJQTlDVTtBQUFhLFFBQXJCLEtBQUssRUFBRTtBQUFDLGtFQUFnRTtBQUUzRSxJQUNFO0FBQWEsUUFEWixLQUFLLENBQUMsVUFBVSxDQUFDO0FBQ3BCLHVFQUFtQztBQUVuQyxJQUNFO0FBQWEsUUFEWixZQUFZLENBQUMsbUNBQW1DLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUN6Rix1RUFBbUM7QUFFbkMsSUFPWTtBQUFhLFFBQXRCLE1BQU0sRUFBRTtBQUFDLCtEQUErQztJQXBCOUMsMkJBQTJCLHdCQUR2QyxTQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsMEJBQTBCLEVBQUUsQ0FBQyxRQUN2QztJQUEyQixDQW1EdkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQ0Q7QUFBQyxJQURELGtDQUFDO0FBQ0EsQ0FEQSxBQW5ERCxJQW1EQztBQUNELFNBcERhLDJCQUEyQjtBQUN2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiwgQ29udGVudENoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhdGFibGVSb3dEZXRhaWxUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vcm93LWRldGFpbC10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICduZ3gtZGF0YXRhYmxlLXJvdy1kZXRhaWwnIH0pXG5leHBvcnQgY2xhc3MgRGF0YXRhYmxlUm93RGV0YWlsRGlyZWN0aXZlIHtcbiAgLyoqXG4gICAqIFRoZSBkZXRhaWwgcm93IGhlaWdodCBpcyByZXF1aXJlZCBlc3BlY2lhbGx5XG4gICAqIHdoZW4gdmlydHVhbCBzY3JvbGwgaXMgZW5hYmxlZC5cbiAgICovXG4gIEBJbnB1dCgpIHJvd0hlaWdodDogbnVtYmVyIHwgKChyb3c/OiBhbnksIGluZGV4PzogbnVtYmVyKSA9PiBudW1iZXIpID0gMDtcblxuICBASW5wdXQoJ3RlbXBsYXRlJylcbiAgX3RlbXBsYXRlSW5wdXQ6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQENvbnRlbnRDaGlsZChEYXRhdGFibGVSb3dEZXRhaWxUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gIF90ZW1wbGF0ZVF1ZXJ5OiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGdldCB0ZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVJbnB1dCB8fCB0aGlzLl90ZW1wbGF0ZVF1ZXJ5O1xuICB9XG5cbiAgLyoqXG4gICAqIFJvdyBkZXRhaWwgcm93IHZpc2JpbGl0eSB3YXMgdG9nZ2xlZC5cbiAgICovXG4gIEBPdXRwdXQoKSB0b2dnbGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBUb2dnbGUgdGhlIGV4cGFuc2lvbiBvZiB0aGUgcm93XG4gICAqL1xuICB0b2dnbGVFeHBhbmRSb3cocm93OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnRvZ2dsZS5lbWl0KHtcbiAgICAgIHR5cGU6ICdyb3cnLFxuICAgICAgdmFsdWU6IHJvd1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFQSSBtZXRob2QgdG8gZXhwYW5kIGFsbCB0aGUgcm93cy5cbiAgICovXG4gIGV4cGFuZEFsbFJvd3MoKTogdm9pZCB7XG4gICAgdGhpcy50b2dnbGUuZW1pdCh7XG4gICAgICB0eXBlOiAnYWxsJyxcbiAgICAgIHZhbHVlOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQVBJIG1ldGhvZCB0byBjb2xsYXBzZSBhbGwgdGhlIHJvd3MuXG4gICAqL1xuICBjb2xsYXBzZUFsbFJvd3MoKTogdm9pZCB7XG4gICAgdGhpcy50b2dnbGUuZW1pdCh7XG4gICAgICB0eXBlOiAnYWxsJyxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pO1xuICB9XG59XG4iXX0=