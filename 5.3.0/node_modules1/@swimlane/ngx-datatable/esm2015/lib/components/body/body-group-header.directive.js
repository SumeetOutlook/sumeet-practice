import { __decorate } from "tslib";
import { Input, Output, EventEmitter, Directive, TemplateRef, ContentChild } from '@angular/core';
import { DatatableGroupHeaderTemplateDirective } from './body-group-header-template.directive';
import * as ɵngcc0 from '@angular/core';
let DatatableGroupHeaderDirective = class DatatableGroupHeaderDirective {
    constructor() {
        /**
         * Row height is required when virtual scroll is enabled.
         */
        this.rowHeight = 0;
        /**
         * Track toggling of group visibility
         */
        this.toggle = new EventEmitter();
    }
    get template() {
        return this._templateInput || this._templateQuery;
    }
    /**
     * Toggle the expansion of a group
     */
    toggleExpandGroup(group) {
        this.toggle.emit({
            type: 'group',
            value: group
        });
    }
    /**
     * Expand all groups
     */
    expandAllGroups() {
        this.toggle.emit({
            type: 'all',
            value: true
        });
    }
    /**
     * Collapse all groups
     */
    collapseAllGroups() {
        this.toggle.emit({
            type: 'all',
            value: false
        });
    }
};
DatatableGroupHeaderDirective.ɵfac = function DatatableGroupHeaderDirective_Factory(t) { return new (t || DatatableGroupHeaderDirective)(); };
DatatableGroupHeaderDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DatatableGroupHeaderDirective, selectors: [["ngx-datatable-group-header"]], contentQueries: function DatatableGroupHeaderDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵstaticContentQuery(dirIndex, DatatableGroupHeaderTemplateDirective, true, TemplateRef);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._templateQuery = _t.first);
    } }, inputs: { rowHeight: "rowHeight", _templateInput: ["template", "_templateInput"] }, outputs: { toggle: "toggle" } });
__decorate([
    Input()
], DatatableGroupHeaderDirective.prototype, "rowHeight", void 0);
__decorate([
    Input('template')
], DatatableGroupHeaderDirective.prototype, "_templateInput", void 0);
__decorate([
    ContentChild(DatatableGroupHeaderTemplateDirective, { read: TemplateRef, static: true })
], DatatableGroupHeaderDirective.prototype, "_templateQuery", void 0);
__decorate([
    Output()
], DatatableGroupHeaderDirective.prototype, "toggle", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DatatableGroupHeaderDirective, [{
        type: Directive,
        args: [{ selector: 'ngx-datatable-group-header' }]
    }], function () { return []; }, { rowHeight: [{
            type: Input
        }], toggle: [{
            type: Output
        }], _templateInput: [{
            type: Input,
            args: ['template']
        }], _templateQuery: [{
            type: ContentChild,
            args: [DatatableGroupHeaderTemplateDirective, { read: TemplateRef, static: true }]
        }] }); })();
export { DatatableGroupHeaderDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS1ncm91cC1oZWFkZXIuZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovQHN3aW1sYW5lL25neC1kYXRhdGFibGUvbGliL2NvbXBvbmVudHMvYm9keS9ib2R5LWdyb3VwLWhlYWRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRyxPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7QUFHL0YsSUFBYSw2QkFBNkIsR0FBMUMsTUFBYSw2QkFBNkI7QUFDMUMsSUFEQTtBQUFnQixRQUNkO0FBQ0Y7QUFFQSxXQURLO0FBQ0wsUUFBVyxjQUFTLEdBQXVELENBQUMsQ0FBQztBQUM3RSxRQVdFO0FBQ0Y7QUFFQSxXQURLO0FBQ0wsUUFBWSxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDM0QsSUE4QkEsQ0FBQztBQUNELElBdkNFLElBQUksUUFBUTtBQUFLLFFBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUM7QUFDdEQsSUFBRSxDQUFDO0FBQ0gsSUFNRTtBQUNGO0FBQ0UsT0FBRztBQUNMLElBQUUsaUJBQWlCLENBQUMsS0FBVTtBQUFJLFFBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ3JCLFlBQU0sSUFBSSxFQUFFLE9BQU87QUFDbkIsWUFBTSxLQUFLLEVBQUUsS0FBSztBQUNsQixTQUFLLENBQUMsQ0FBQztBQUNQLElBQUUsQ0FBQztBQUNILElBQ0U7QUFDRjtBQUNFLE9BQUc7QUFDTCxJQUFFLGVBQWU7QUFBSyxRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNyQixZQUFNLElBQUksRUFBRSxLQUFLO0FBQ2pCLFlBQU0sS0FBSyxFQUFFLElBQUk7QUFDakIsU0FBSyxDQUFDLENBQUM7QUFDUCxJQUFFLENBQUM7QUFDSCxJQUNFO0FBQ0Y7QUFDRSxPQUFHO0FBQ0wsSUFBRSxpQkFBaUI7QUFBSyxRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNyQixZQUFNLElBQUksRUFBRSxLQUFLO0FBQ2pCLFlBQU0sS0FBSyxFQUFFLEtBQUs7QUFDbEIsU0FBSyxDQUFDLENBQUM7QUFDUCxJQUFFLENBQUM7QUFDSCxDQUFDOzs7Ozs7OzhIQUFBO0FBOUNVO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUMsZ0VBQWtFO0FBRzNFO0FBQWEsSUFEWixLQUFLLENBQUMsVUFBVSxDQUFDO0FBQ3BCLHFFQUFtQztBQUdqQztBQUFhLElBRFosWUFBWSxDQUFDLHFDQUFxQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFDM0YscUVBQW1DO0FBU3ZCO0FBQWEsSUFBdEIsTUFBTSxFQUFFO0FBQUMsNkRBQStDO0FBbkI5Qyw2QkFBNkIsb0JBRHpDLFNBQVMsQ0FBQyxFQUFFLFFBQVEsRUFBRTtXQUE0QixFQUFFLENBQUMsSUFDekM7c0JBQTZCLENBa0R6Qzs7Ozs7Ozs7Ozs7b0JBQ0Q7QUFBQyxTQW5EWSw2QkFBNkI7QUFDekMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIERpcmVjdGl2ZSwgVGVtcGxhdGVSZWYsIENvbnRlbnRDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YXRhYmxlR3JvdXBIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vYm9keS1ncm91cC1oZWFkZXItdGVtcGxhdGUuZGlyZWN0aXZlJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnbmd4LWRhdGF0YWJsZS1ncm91cC1oZWFkZXInIH0pXG5leHBvcnQgY2xhc3MgRGF0YXRhYmxlR3JvdXBIZWFkZXJEaXJlY3RpdmUge1xuICAvKipcbiAgICogUm93IGhlaWdodCBpcyByZXF1aXJlZCB3aGVuIHZpcnR1YWwgc2Nyb2xsIGlzIGVuYWJsZWQuXG4gICAqL1xuICBASW5wdXQoKSByb3dIZWlnaHQ6IG51bWJlciB8ICgoZ3JvdXA/OiBhbnksIGluZGV4PzogbnVtYmVyKSA9PiBudW1iZXIpID0gMDtcblxuICBASW5wdXQoJ3RlbXBsYXRlJylcbiAgX3RlbXBsYXRlSW5wdXQ6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQENvbnRlbnRDaGlsZChEYXRhdGFibGVHcm91cEhlYWRlclRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgX3RlbXBsYXRlUXVlcnk6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgZ2V0IHRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZUlucHV0IHx8IHRoaXMuX3RlbXBsYXRlUXVlcnk7XG4gIH1cblxuICAvKipcbiAgICogVHJhY2sgdG9nZ2xpbmcgb2YgZ3JvdXAgdmlzaWJpbGl0eVxuICAgKi9cbiAgQE91dHB1dCgpIHRvZ2dsZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSB0aGUgZXhwYW5zaW9uIG9mIGEgZ3JvdXBcbiAgICovXG4gIHRvZ2dsZUV4cGFuZEdyb3VwKGdyb3VwOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnRvZ2dsZS5lbWl0KHtcbiAgICAgIHR5cGU6ICdncm91cCcsXG4gICAgICB2YWx1ZTogZ3JvdXBcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBhbmQgYWxsIGdyb3Vwc1xuICAgKi9cbiAgZXhwYW5kQWxsR3JvdXBzKCk6IHZvaWQge1xuICAgIHRoaXMudG9nZ2xlLmVtaXQoe1xuICAgICAgdHlwZTogJ2FsbCcsXG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbGxhcHNlIGFsbCBncm91cHNcbiAgICovXG4gIGNvbGxhcHNlQWxsR3JvdXBzKCk6IHZvaWQge1xuICAgIHRoaXMudG9nZ2xlLmVtaXQoe1xuICAgICAgdHlwZTogJ2FsbCcsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTtcbiAgfVxufVxuIl19