import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter, HostListener, DoCheck, ChangeDetectionStrategy, KeyValueDiffer, ChangeDetectorRef, KeyValueDiffers } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function DataTableRowWrapperComponent_div_0_1_ng_template_0_Template(rf, ctx) { }
function DataTableRowWrapperComponent_div_0_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, DataTableRowWrapperComponent_div_0_1_ng_template_0_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r3.groupHeader.template)("ngTemplateOutletContext", ctx_r3.groupContext);
} }
function DataTableRowWrapperComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵtemplate(1, DataTableRowWrapperComponent_div_0_1_Template, 1, 2, undefined, 1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
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
    var ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r5.rowDetail.template)("ngTemplateOutletContext", ctx_r5.rowContext);
} }
function DataTableRowWrapperComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵtemplate(1, DataTableRowWrapperComponent_div_2_1_Template, 1, 2, undefined, 1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("height", ctx_r2.detailRowHeight, "px");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.rowDetail && ctx_r2.rowDetail.template);
} }
var _c0 = ["*"];
var DataTableRowWrapperComponent = /** @class */ (function () {
    function DataTableRowWrapperComponent(cd, differs) {
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
    Object.defineProperty(DataTableRowWrapperComponent.prototype, "rowIndex", {
        get: function () {
            return this._rowIndex;
        },
        set: function (val) {
            this._rowIndex = val;
            this.rowContext.rowIndex = val;
            this.groupContext.rowIndex = val;
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableRowWrapperComponent.prototype, "expanded", {
        get: function () {
            return this._expanded;
        },
        set: function (val) {
            this._expanded = val;
            this.groupContext.expanded = val;
            this.rowContext.expanded = val;
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    DataTableRowWrapperComponent.prototype.ngDoCheck = function () {
        if (this.rowDiffer.diff(this.row)) {
            this.rowContext.row = this.row;
            this.groupContext.group = this.row;
            this.cd.markForCheck();
        }
    };
    DataTableRowWrapperComponent.prototype.onContextmenu = function ($event) {
        this.rowContextmenu.emit({ event: $event, row: this.row });
    };
    DataTableRowWrapperComponent.prototype.getGroupHeaderStyle = function () {
        var styles = {};
        styles['transform'] = 'translate3d(' + this.offsetX + 'px, 0px, 0px)';
        styles['backface-visibility'] = 'hidden';
        styles['width'] = this.innerWidth;
        return styles;
    };
    DataTableRowWrapperComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: KeyValueDiffers }
    ]; };
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DataTableRowWrapperComponent, [{
        type: Component,
        args: [{
                selector: 'datatable-row-wrapper',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "\n    <div *ngIf=\"groupHeader && groupHeader.template\" class=\"datatable-group-header\" [ngStyle]=\"getGroupHeaderStyle()\">\n      <ng-template\n        *ngIf=\"groupHeader && groupHeader.template\"\n        [ngTemplateOutlet]=\"groupHeader.template\"\n        [ngTemplateOutletContext]=\"groupContext\"\n      >\n      </ng-template>\n    </div>\n    <ng-content *ngIf=\"(groupHeader && groupHeader.template && expanded) || !groupHeader || !groupHeader.template\">\n    </ng-content>\n    <div\n      *ngIf=\"rowDetail && rowDetail.template && expanded\"\n      [style.height.px]=\"detailRowHeight\"\n      class=\"datatable-row-detail\"\n    >\n      <ng-template\n        *ngIf=\"rowDetail && rowDetail.template\"\n        [ngTemplateOutlet]=\"rowDetail.template\"\n        [ngTemplateOutletContext]=\"rowContext\"\n      >\n      </ng-template>\n    </div>\n  ",
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
    return DataTableRowWrapperComponent;
}());
export { DataTableRowWrapperComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS1yb3ctd3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIm5nOi9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9saWIvY29tcG9uZW50cy9ib2R5L2JvZHktcm93LXdyYXBwZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFlBQVksRUFDWixPQUFPLEVBQ1AsdUJBQXVCLEVBQ3ZCLGNBQWMsRUFDZCxpQkFBaUIsRUFDakIsZUFBZSxFQUNoQixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUN2QjtBQUNDLElBK0NDLHNDQUFvQixFQUFxQixFQUFVLE9BQXdCO0FBQzdFLFFBRHNCLE9BQUUsR0FBRixFQUFFLENBQW1CO0FBQUMsUUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFpQjtBQUFDLFFBeENsRSxtQkFBYyxHQUFHLElBQUksWUFBWSxDQUFrQyxLQUFLLENBQUMsQ0FBQztBQUN0RixRQXVCRSxpQkFBWSxHQUFRO0FBQ3RCLFlBQUksS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHO0FBQ25CLFlBQUksUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO0FBQzNCLFlBQUksUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO0FBQzNCLFNBQUcsQ0FBQztBQUNKLFFBQ0UsZUFBVSxHQUFRO0FBQ3BCLFlBQUksR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO0FBQ2pCLFlBQUksUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO0FBQzNCLFlBQUksUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO0FBQzNCLFNBQUcsQ0FBQztBQUNKLFFBRVUsY0FBUyxHQUFZLEtBQUssQ0FBQztBQUNyQyxRQUdJLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVB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QTBFO0FBRXRGLElBQVc7QUFBYSxRQUFyQixLQUFLLEVBQUU7QUFBQyxnRUFLUjtBQUVILElBSVc7QUFBYSxRQUFyQixLQUFLLEVBQUU7QUFBQyxnRUFLUjtBQUVILElBaUNFO0FBQWEsUUFEWixZQUFZLENBQUMsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDMUMscUVBRUc7SUEvRFUsNEJBQTRCLHdCQS9CeEMsU0FBUyxDQUFDLGNBQ1QsUUFBUSxFQUFFLHVCQUF1QixjQUNqQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxjQUMvQyxRQUFRLEVBQUU7OzsrWUF1QlQsY0FDRCxJQUFJLEVBQUUsa0JBQ0osS0FBSyxFQUFFLHVCQUF1QixjQUMvQixVQUNGLENBQUMsUUFDVyw0QkFBNEIsQ0EwRXhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQ0Q7QUFBQyxJQURELG1DQUFDO0FBQ0EsQ0FEQSxBQTFFRCxJQTBFQztBQUNELFNBM0VhLDRCQUE0QjtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgRG9DaGVjayxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEtleVZhbHVlRGlmZmVyLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgS2V5VmFsdWVEaWZmZXJzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRhdGFibGUtcm93LXdyYXBwZXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2ICpuZ0lmPVwiZ3JvdXBIZWFkZXIgJiYgZ3JvdXBIZWFkZXIudGVtcGxhdGVcIiBjbGFzcz1cImRhdGF0YWJsZS1ncm91cC1oZWFkZXJcIiBbbmdTdHlsZV09XCJnZXRHcm91cEhlYWRlclN0eWxlKClcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgICAqbmdJZj1cImdyb3VwSGVhZGVyICYmIGdyb3VwSGVhZGVyLnRlbXBsYXRlXCJcbiAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiZ3JvdXBIZWFkZXIudGVtcGxhdGVcIlxuICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwiZ3JvdXBDb250ZXh0XCJcbiAgICAgID5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gICAgPG5nLWNvbnRlbnQgKm5nSWY9XCIoZ3JvdXBIZWFkZXIgJiYgZ3JvdXBIZWFkZXIudGVtcGxhdGUgJiYgZXhwYW5kZWQpIHx8ICFncm91cEhlYWRlciB8fCAhZ3JvdXBIZWFkZXIudGVtcGxhdGVcIj5cbiAgICA8L25nLWNvbnRlbnQ+XG4gICAgPGRpdlxuICAgICAgKm5nSWY9XCJyb3dEZXRhaWwgJiYgcm93RGV0YWlsLnRlbXBsYXRlICYmIGV4cGFuZGVkXCJcbiAgICAgIFtzdHlsZS5oZWlnaHQucHhdPVwiZGV0YWlsUm93SGVpZ2h0XCJcbiAgICAgIGNsYXNzPVwiZGF0YXRhYmxlLXJvdy1kZXRhaWxcIlxuICAgID5cbiAgICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgICAqbmdJZj1cInJvd0RldGFpbCAmJiByb3dEZXRhaWwudGVtcGxhdGVcIlxuICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJyb3dEZXRhaWwudGVtcGxhdGVcIlxuICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwicm93Q29udGV4dFwiXG4gICAgICA+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvZGl2PlxuICBgLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdkYXRhdGFibGUtcm93LXdyYXBwZXInXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlUm93V3JhcHBlckNvbXBvbmVudCBpbXBsZW1lbnRzIERvQ2hlY2sge1xuICBASW5wdXQoKSBpbm5lcldpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIHJvd0RldGFpbDogYW55O1xuICBASW5wdXQoKSBncm91cEhlYWRlcjogYW55O1xuICBASW5wdXQoKSBvZmZzZXRYOiBudW1iZXI7XG4gIEBJbnB1dCgpIGRldGFpbFJvd0hlaWdodDogYW55O1xuICBASW5wdXQoKSByb3c6IGFueTtcbiAgQElucHV0KCkgZ3JvdXBlZFJvd3M6IGFueTtcbiAgQE91dHB1dCgpIHJvd0NvbnRleHRtZW51ID0gbmV3IEV2ZW50RW1pdHRlcjx7IGV2ZW50OiBNb3VzZUV2ZW50OyByb3c6IGFueSB9PihmYWxzZSk7XG5cbiAgQElucHV0KCkgc2V0IHJvd0luZGV4KHZhbDogbnVtYmVyKSB7XG4gICAgdGhpcy5fcm93SW5kZXggPSB2YWw7XG4gICAgdGhpcy5yb3dDb250ZXh0LnJvd0luZGV4ID0gdmFsO1xuICAgIHRoaXMuZ3JvdXBDb250ZXh0LnJvd0luZGV4ID0gdmFsO1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBnZXQgcm93SW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcm93SW5kZXg7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgZXhwYW5kZWQodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZXhwYW5kZWQgPSB2YWw7XG4gICAgdGhpcy5ncm91cENvbnRleHQuZXhwYW5kZWQgPSB2YWw7XG4gICAgdGhpcy5yb3dDb250ZXh0LmV4cGFuZGVkID0gdmFsO1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBnZXQgZXhwYW5kZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2V4cGFuZGVkO1xuICB9XG5cbiAgZ3JvdXBDb250ZXh0OiBhbnkgPSB7XG4gICAgZ3JvdXA6IHRoaXMucm93LFxuICAgIGV4cGFuZGVkOiB0aGlzLmV4cGFuZGVkLFxuICAgIHJvd0luZGV4OiB0aGlzLnJvd0luZGV4XG4gIH07XG5cbiAgcm93Q29udGV4dDogYW55ID0ge1xuICAgIHJvdzogdGhpcy5yb3csXG4gICAgZXhwYW5kZWQ6IHRoaXMuZXhwYW5kZWQsXG4gICAgcm93SW5kZXg6IHRoaXMucm93SW5kZXhcbiAgfTtcblxuICBwcml2YXRlIHJvd0RpZmZlcjogS2V5VmFsdWVEaWZmZXI8e30sIHt9PjtcbiAgcHJpdmF0ZSBfZXhwYW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcm93SW5kZXg6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBkaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMpIHtcbiAgICB0aGlzLnJvd0RpZmZlciA9IGRpZmZlcnMuZmluZCh7fSkuY3JlYXRlKCk7XG4gIH1cblxuICBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucm93RGlmZmVyLmRpZmYodGhpcy5yb3cpKSB7XG4gICAgICB0aGlzLnJvd0NvbnRleHQucm93ID0gdGhpcy5yb3c7XG4gICAgICB0aGlzLmdyb3VwQ29udGV4dC5ncm91cCA9IHRoaXMucm93O1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjb250ZXh0bWVudScsIFsnJGV2ZW50J10pXG4gIG9uQ29udGV4dG1lbnUoJGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5yb3dDb250ZXh0bWVudS5lbWl0KHsgZXZlbnQ6ICRldmVudCwgcm93OiB0aGlzLnJvdyB9KTtcbiAgfVxuXG4gIGdldEdyb3VwSGVhZGVyU3R5bGUoKTogYW55IHtcbiAgICBjb25zdCBzdHlsZXMgPSB7fTtcblxuICAgIHN0eWxlc1sndHJhbnNmb3JtJ10gPSAndHJhbnNsYXRlM2QoJyArIHRoaXMub2Zmc2V0WCArICdweCwgMHB4LCAwcHgpJztcbiAgICBzdHlsZXNbJ2JhY2tmYWNlLXZpc2liaWxpdHknXSA9ICdoaWRkZW4nO1xuICAgIHN0eWxlc1snd2lkdGgnXSA9IHRoaXMuaW5uZXJXaWR0aDtcblxuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cbn1cbiJdfQ==