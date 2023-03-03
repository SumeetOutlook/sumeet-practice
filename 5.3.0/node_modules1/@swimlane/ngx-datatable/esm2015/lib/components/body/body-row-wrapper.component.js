import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter, HostListener, DoCheck, ChangeDetectionStrategy, KeyValueDiffer, ChangeDetectorRef, KeyValueDiffers } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function DataTableRowWrapperComponent_div_0_1_ng_template_0_Template(rf, ctx) { }
function DataTableRowWrapperComponent_div_0_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, DataTableRowWrapperComponent_div_0_1_ng_template_0_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r3.groupHeader.template)("ngTemplateOutletContext", ctx_r3.groupContext);
} }
function DataTableRowWrapperComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵtemplate(1, DataTableRowWrapperComponent_div_0_1_Template, 1, 2, undefined, 1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r0.getGroupHeaderStyle());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.groupHeader && ctx_r0.groupHeader.template);
} }
function DataTableRowWrapperComponent_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 0, ["*ngIf", "(groupHeader && groupHeader.template && expanded) || !groupHeader || !groupHeader.template"]);
} }
function DataTableRowWrapperComponent_div_2_1_ng_template_0_Template(rf, ctx) { }
function DataTableRowWrapperComponent_div_2_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, DataTableRowWrapperComponent_div_2_1_ng_template_0_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r5.rowDetail.template)("ngTemplateOutletContext", ctx_r5.rowContext);
} }
function DataTableRowWrapperComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵtemplate(1, DataTableRowWrapperComponent_div_2_1_Template, 1, 2, undefined, 1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("height", ctx_r2.detailRowHeight, "px");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.rowDetail && ctx_r2.rowDetail.template);
} }
const _c0 = ["*"];
let DataTableRowWrapperComponent = class DataTableRowWrapperComponent {
    constructor(cd, differs) {
        this.cd = cd;
        this.differs = differs;
        this.rowContextmenu = new EventEmitter(false);
        this.groupContext = {
            group: this.row,
            expanded: this.expanded,
            rowIndex: this.rowIndex
        };
        this.rowContext = {
            row: this.row,
            expanded: this.expanded,
            rowIndex: this.rowIndex
        };
        this._expanded = false;
        this.rowDiffer = differs.find({}).create();
    }
    set rowIndex(val) {
        this._rowIndex = val;
        this.rowContext.rowIndex = val;
        this.groupContext.rowIndex = val;
        this.cd.markForCheck();
    }
    get rowIndex() {
        return this._rowIndex;
    }
    set expanded(val) {
        this._expanded = val;
        this.groupContext.expanded = val;
        this.rowContext.expanded = val;
        this.cd.markForCheck();
    }
    get expanded() {
        return this._expanded;
    }
    ngDoCheck() {
        if (this.rowDiffer.diff(this.row)) {
            this.rowContext.row = this.row;
            this.groupContext.group = this.row;
            this.cd.markForCheck();
        }
    }
    onContextmenu($event) {
        this.rowContextmenu.emit({ event: $event, row: this.row });
    }
    getGroupHeaderStyle() {
        const styles = {};
        styles['transform'] = 'translate3d(' + this.offsetX + 'px, 0px, 0px)';
        styles['backface-visibility'] = 'hidden';
        styles['width'] = this.innerWidth;
        return styles;
    }
};
DataTableRowWrapperComponent.ɵfac = function DataTableRowWrapperComponent_Factory(t) { return new (t || DataTableRowWrapperComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.KeyValueDiffers)); };
DataTableRowWrapperComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DataTableRowWrapperComponent, selectors: [["datatable-row-wrapper"]], hostAttrs: [1, "datatable-row-wrapper"], hostBindings: function DataTableRowWrapperComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("contextmenu", function DataTableRowWrapperComponent_contextmenu_HostBindingHandler($event) { return ctx.onContextmenu($event); });
    } }, inputs: { rowIndex: "rowIndex", expanded: "expanded", innerWidth: "innerWidth", rowDetail: "rowDetail", groupHeader: "groupHeader", offsetX: "offsetX", detailRowHeight: "detailRowHeight", row: "row", groupedRows: "groupedRows" }, outputs: { rowContextmenu: "rowContextmenu" }, ngContentSelectors: _c0, decls: 3, vars: 3, consts: [["class", "datatable-group-header", 3, "ngStyle", 4, "ngIf"], [4, "ngIf"], ["class", "datatable-row-detail", 3, "height", 4, "ngIf"], [1, "datatable-group-header", 3, "ngStyle"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "datatable-row-detail"]], template: function DataTableRowWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, DataTableRowWrapperComponent_div_0_Template, 2, 2, "div", 0);
        ɵngcc0.ɵɵtemplate(1, DataTableRowWrapperComponent_1_Template, 1, 0, undefined, 1);
        ɵngcc0.ɵɵtemplate(2, DataTableRowWrapperComponent_div_2_Template, 2, 3, "div", 2);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.groupHeader && ctx.groupHeader.template);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.groupHeader && ctx.groupHeader.template && ctx.expanded || !ctx.groupHeader || !ctx.groupHeader.template);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.rowDetail && ctx.rowDetail.template && ctx.expanded);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgStyle, ɵngcc1.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
DataTableRowWrapperComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: KeyValueDiffers }
];
__decorate([
    Input()
], DataTableRowWrapperComponent.prototype, "innerWidth", void 0);
__decorate([
    Input()
], DataTableRowWrapperComponent.prototype, "rowDetail", void 0);
__decorate([
    Input()
], DataTableRowWrapperComponent.prototype, "groupHeader", void 0);
__decorate([
    Input()
], DataTableRowWrapperComponent.prototype, "offsetX", void 0);
__decorate([
    Input()
], DataTableRowWrapperComponent.prototype, "detailRowHeight", void 0);
__decorate([
    Input()
], DataTableRowWrapperComponent.prototype, "row", void 0);
__decorate([
    Input()
], DataTableRowWrapperComponent.prototype, "groupedRows", void 0);
__decorate([
    Output()
], DataTableRowWrapperComponent.prototype, "rowContextmenu", void 0);
__decorate([
    Input()
], DataTableRowWrapperComponent.prototype, "rowIndex", null);
__decorate([
    Input()
], DataTableRowWrapperComponent.prototype, "expanded", null);
__decorate([
    HostListener('contextmenu', ['$event'])
], DataTableRowWrapperComponent.prototype, "onContextmenu", null);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DataTableRowWrapperComponent, [{
        type: Component,
        args: [{
                selector: 'datatable-row-wrapper',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div *ngIf="groupHeader && groupHeader.template" class="datatable-group-header" [ngStyle]="getGroupHeaderStyle()">
      <ng-template
        *ngIf="groupHeader && groupHeader.template"
        [ngTemplateOutlet]="groupHeader.template"
        [ngTemplateOutletContext]="groupContext"
      >
      </ng-template>
    </div>
    <ng-content *ngIf="(groupHeader && groupHeader.template && expanded) || !groupHeader || !groupHeader.template">
    </ng-content>
    <div
      *ngIf="rowDetail && rowDetail.template && expanded"
      [style.height.px]="detailRowHeight"
      class="datatable-row-detail"
    >
      <ng-template
        *ngIf="rowDetail && rowDetail.template"
        [ngTemplateOutlet]="rowDetail.template"
        [ngTemplateOutletContext]="rowContext"
      >
      </ng-template>
    </div>
  `,
                host: {
                    class: 'datatable-row-wrapper'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.KeyValueDiffers }]; }, { rowContextmenu: [{
            type: Output
        }], rowIndex: [{
            type: Input
        }], expanded: [{
            type: Input
        }], onContextmenu: [{
            type: HostListener,
            args: ['contextmenu', ['$event']]
        }], innerWidth: [{
            type: Input
        }], rowDetail: [{
            type: Input
        }], groupHeader: [{
            type: Input
        }], offsetX: [{
            type: Input
        }], detailRowHeight: [{
            type: Input
        }], row: [{
            type: Input
        }], groupedRows: [{
            type: Input
        }] }); })();
export { DataTableRowWrapperComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS1yb3ctd3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIm5nOi9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9saWIvY29tcG9uZW50cy9ib2R5L2JvZHktcm93LXdyYXBwZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFlBQVksRUFDWixPQUFPLEVBQ1AsdUJBQXVCLEVBQ3ZCLGNBQWMsRUFDZCxpQkFBaUIsRUFDakIsZUFBZSxFQUNoQixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUN2QixJQUFhLDRCQUE0QixHQUF6QyxNQUFhLDRCQUE0QjtBQUFHLElBZ0QxQyxZQUFvQixFQUFxQixFQUFVLE9BQXdCO0FBQzdFLFFBRHNCLE9BQUUsR0FBRixFQUFFLENBQW1CO0FBQUMsUUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFpQjtBQUFDLFFBeENsRSxtQkFBYyxHQUFHLElBQUksWUFBWSxDQUFrQyxLQUFLLENBQUMsQ0FBQztBQUN0RixRQXVCRSxpQkFBWSxHQUFRO0FBQ3RCLFlBQUksS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHO0FBQ25CLFlBQUksUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO0FBQzNCLFlBQUksUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO0FBQzNCLFNBQUcsQ0FBQztBQUNKLFFBQ0UsZUFBVSxHQUFRO0FBQ3BCLFlBQUksR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO0FBQ2pCLFlBQUksUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO0FBQzNCLFlBQUksUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO0FBQzNCLFNBQUcsQ0FBQztBQUNKLFFBRVUsY0FBUyxHQUFZLEtBQUssQ0FBQztBQUNyQyxRQUdJLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUMvQyxJQUFFLENBQUM7QUFDSCxJQXpDVyxJQUFJLFFBQVEsQ0FBQyxHQUFXO0FBQ25DLFFBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7QUFDekIsUUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7QUFDbkMsUUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7QUFDckMsUUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQzNCLElBQUUsQ0FBQztBQUNILElBQ0UsSUFBSSxRQUFRO0FBQUssUUFDZixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDMUIsSUFBRSxDQUFDO0FBQ0gsSUFDVyxJQUFJLFFBQVEsQ0FBQyxHQUFZO0FBQ3BDLFFBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7QUFDekIsUUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7QUFDckMsUUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7QUFDbkMsUUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQzNCLElBQUUsQ0FBQztBQUNILElBQ0UsSUFBSSxRQUFRO0FBQUssUUFDZixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDMUIsSUFBRSxDQUFDO0FBQ0gsSUFxQkUsU0FBUztBQUFLLFFBQ1osSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDdkMsWUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQ3JDLFlBQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUN6QyxZQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDN0IsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBRUUsYUFBYSxDQUFDLE1BQWtCO0FBQUksUUFDbEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUMvRCxJQUFFLENBQUM7QUFDSCxJQUNFLG1CQUFtQjtBQUFLLFFBQ3RCLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUN0QixRQUNJLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUM7QUFDMUUsUUFBSSxNQUFNLENBQUMscUJBQXFCLENBQUMsR0FBRyxRQUFRLENBQUM7QUFDN0MsUUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztBQUN0QyxRQUNJLE9BQU8sTUFBTSxDQUFDO0FBQ2xCLElBQUUsQ0FBQztBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7OztxSEFBQTtBQUNEO0FBQXNELFlBM0I1QixpQkFBaUI7QUFBSSxZQUFlLGVBQWU7QUFBRztBQS9DckU7QUFBYSxJQUFyQixLQUFLLEVBQUU7QUFBQyxnRUFBbUI7QUFDbkI7QUFBYSxJQUFyQixLQUFLLEVBQUU7QUFBQywrREFBZTtBQUNmO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUMsaUVBQWlCO0FBQ2pCO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUMsNkRBQWdCO0FBQ2hCO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUMscUVBQXFCO0FBQ3JCO0FBQ1IsSUFEQSxLQUFLLEVBQUU7QUFBQyx5REFBUztBQUNUO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUMsaUVBQWlCO0FBQ2hCO0FBQWEsSUFBdEIsTUFBTSxFQUFFO0FBQUMsb0VBQTBFO0FBRTNFO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUMsNERBS1I7QUFNUTtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLDREQUtSO0FBbUNEO0FBQWEsSUFEWixZQUFZLENBQUMsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDMUMsaUVBRUc7QUEvRFUsNEJBQTRCLG9CQS9CeEMsU0FBUyxDQUFDLFVBQ1QsUUFBUSxFQUFFO2NBQXVCLFVBQ2pDO2NBQWUsRUFBRTtzQkFBdUIsQ0FBQyxNQUFNLFVBQy9DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkNBdUJUO09BQ0QsSUFBSSxFQUFFLGNBQ0osS0FBSyxFQUFFOztFQUF1QixVQUMvQixNQUNGLENBQUM7RUFDVzs7Y0FBNEIsQ0EwRXhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQ0Q7QUFBQyxTQTNFWSw0QkFBNEI7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIERvQ2hlY2ssXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBLZXlWYWx1ZURpZmZlcixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEtleVZhbHVlRGlmZmVyc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0YXRhYmxlLXJvdy13cmFwcGVyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiAqbmdJZj1cImdyb3VwSGVhZGVyICYmIGdyb3VwSGVhZGVyLnRlbXBsYXRlXCIgY2xhc3M9XCJkYXRhdGFibGUtZ3JvdXAtaGVhZGVyXCIgW25nU3R5bGVdPVwiZ2V0R3JvdXBIZWFkZXJTdHlsZSgpXCI+XG4gICAgICA8bmctdGVtcGxhdGVcbiAgICAgICAgKm5nSWY9XCJncm91cEhlYWRlciAmJiBncm91cEhlYWRlci50ZW1wbGF0ZVwiXG4gICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImdyb3VwSGVhZGVyLnRlbXBsYXRlXCJcbiAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cImdyb3VwQ29udGV4dFwiXG4gICAgICA+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvZGl2PlxuICAgIDxuZy1jb250ZW50ICpuZ0lmPVwiKGdyb3VwSGVhZGVyICYmIGdyb3VwSGVhZGVyLnRlbXBsYXRlICYmIGV4cGFuZGVkKSB8fCAhZ3JvdXBIZWFkZXIgfHwgIWdyb3VwSGVhZGVyLnRlbXBsYXRlXCI+XG4gICAgPC9uZy1jb250ZW50PlxuICAgIDxkaXZcbiAgICAgICpuZ0lmPVwicm93RGV0YWlsICYmIHJvd0RldGFpbC50ZW1wbGF0ZSAmJiBleHBhbmRlZFwiXG4gICAgICBbc3R5bGUuaGVpZ2h0LnB4XT1cImRldGFpbFJvd0hlaWdodFwiXG4gICAgICBjbGFzcz1cImRhdGF0YWJsZS1yb3ctZGV0YWlsXCJcbiAgICA+XG4gICAgICA8bmctdGVtcGxhdGVcbiAgICAgICAgKm5nSWY9XCJyb3dEZXRhaWwgJiYgcm93RGV0YWlsLnRlbXBsYXRlXCJcbiAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwicm93RGV0YWlsLnRlbXBsYXRlXCJcbiAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInJvd0NvbnRleHRcIlxuICAgICAgPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnZGF0YXRhYmxlLXJvdy13cmFwcGVyJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZVJvd1dyYXBwZXJDb21wb25lbnQgaW1wbGVtZW50cyBEb0NoZWNrIHtcbiAgQElucHV0KCkgaW5uZXJXaWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSByb3dEZXRhaWw6IGFueTtcbiAgQElucHV0KCkgZ3JvdXBIZWFkZXI6IGFueTtcbiAgQElucHV0KCkgb2Zmc2V0WDogbnVtYmVyO1xuICBASW5wdXQoKSBkZXRhaWxSb3dIZWlnaHQ6IGFueTtcbiAgQElucHV0KCkgcm93OiBhbnk7XG4gIEBJbnB1dCgpIGdyb3VwZWRSb3dzOiBhbnk7XG4gIEBPdXRwdXQoKSByb3dDb250ZXh0bWVudSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBldmVudDogTW91c2VFdmVudDsgcm93OiBhbnkgfT4oZmFsc2UpO1xuXG4gIEBJbnB1dCgpIHNldCByb3dJbmRleCh2YWw6IG51bWJlcikge1xuICAgIHRoaXMuX3Jvd0luZGV4ID0gdmFsO1xuICAgIHRoaXMucm93Q29udGV4dC5yb3dJbmRleCA9IHZhbDtcbiAgICB0aGlzLmdyb3VwQ29udGV4dC5yb3dJbmRleCA9IHZhbDtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgZ2V0IHJvd0luZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3Jvd0luZGV4O1xuICB9XG5cbiAgQElucHV0KCkgc2V0IGV4cGFuZGVkKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX2V4cGFuZGVkID0gdmFsO1xuICAgIHRoaXMuZ3JvdXBDb250ZXh0LmV4cGFuZGVkID0gdmFsO1xuICAgIHRoaXMucm93Q29udGV4dC5leHBhbmRlZCA9IHZhbDtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgZ2V0IGV4cGFuZGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9leHBhbmRlZDtcbiAgfVxuXG4gIGdyb3VwQ29udGV4dDogYW55ID0ge1xuICAgIGdyb3VwOiB0aGlzLnJvdyxcbiAgICBleHBhbmRlZDogdGhpcy5leHBhbmRlZCxcbiAgICByb3dJbmRleDogdGhpcy5yb3dJbmRleFxuICB9O1xuXG4gIHJvd0NvbnRleHQ6IGFueSA9IHtcbiAgICByb3c6IHRoaXMucm93LFxuICAgIGV4cGFuZGVkOiB0aGlzLmV4cGFuZGVkLFxuICAgIHJvd0luZGV4OiB0aGlzLnJvd0luZGV4XG4gIH07XG5cbiAgcHJpdmF0ZSByb3dEaWZmZXI6IEtleVZhbHVlRGlmZmVyPHt9LCB7fT47XG4gIHByaXZhdGUgX2V4cGFuZGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3Jvd0luZGV4OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgZGlmZmVyczogS2V5VmFsdWVEaWZmZXJzKSB7XG4gICAgdGhpcy5yb3dEaWZmZXIgPSBkaWZmZXJzLmZpbmQoe30pLmNyZWF0ZSgpO1xuICB9XG5cbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJvd0RpZmZlci5kaWZmKHRoaXMucm93KSkge1xuICAgICAgdGhpcy5yb3dDb250ZXh0LnJvdyA9IHRoaXMucm93O1xuICAgICAgdGhpcy5ncm91cENvbnRleHQuZ3JvdXAgPSB0aGlzLnJvdztcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY29udGV4dG1lbnUnLCBbJyRldmVudCddKVxuICBvbkNvbnRleHRtZW51KCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMucm93Q29udGV4dG1lbnUuZW1pdCh7IGV2ZW50OiAkZXZlbnQsIHJvdzogdGhpcy5yb3cgfSk7XG4gIH1cblxuICBnZXRHcm91cEhlYWRlclN0eWxlKCk6IGFueSB7XG4gICAgY29uc3Qgc3R5bGVzID0ge307XG5cbiAgICBzdHlsZXNbJ3RyYW5zZm9ybSddID0gJ3RyYW5zbGF0ZTNkKCcgKyB0aGlzLm9mZnNldFggKyAncHgsIDBweCwgMHB4KSc7XG4gICAgc3R5bGVzWydiYWNrZmFjZS12aXNpYmlsaXR5J10gPSAnaGlkZGVuJztcbiAgICBzdHlsZXNbJ3dpZHRoJ10gPSB0aGlzLmlubmVyV2lkdGg7XG5cbiAgICByZXR1cm4gc3R5bGVzO1xuICB9XG59XG4iXX0=