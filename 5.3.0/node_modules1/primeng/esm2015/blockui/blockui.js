import { NgModule, Component, Input, ElementRef, ViewChild, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, ContentChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from 'primeng/dom';
import { PrimeTemplate } from 'primeng/api';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["mask"];
function BlockUI_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c1 = function (a0) { return { "p-blockui-document": a0, "p-blockui p-component-overlay": true }; };
const _c2 = function (a0) { return { display: a0 }; };
const _c3 = ["*"];
export class BlockUI {
    constructor(el, cd) {
        this.el = el;
        this.cd = cd;
        this.autoZIndex = true;
        this.baseZIndex = 0;
    }
    get blocked() {
        return this._blocked;
    }
    set blocked(val) {
        this._blocked = val;
        if (this.mask && this.mask.nativeElement) {
            if (this._blocked)
                this.block();
            else
                this.unblock();
        }
    }
    ngAfterViewInit() {
        if (this.target && !this.target.getBlockableElement) {
            throw 'Target of BlockUI must implement BlockableUI interface';
        }
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'content':
                    this.contentTemplate = item.template;
                    break;
                default:
                    this.contentTemplate = item.template;
                    break;
            }
        });
    }
    block() {
        if (this.target) {
            this.target.getBlockableElement().appendChild(this.mask.nativeElement);
            this.target.getBlockableElement().style.position = 'relative';
        }
        else {
            document.body.appendChild(this.mask.nativeElement);
        }
        if (this.autoZIndex) {
            this.mask.nativeElement.style.zIndex = String(this.baseZIndex + (++DomHandler.zindex));
        }
    }
    unblock() {
        this.el.nativeElement.appendChild(this.mask.nativeElement);
    }
    ngOnDestroy() {
        this.unblock();
    }
}
BlockUI.ɵfac = function BlockUI_Factory(t) { return new (t || BlockUI)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
BlockUI.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BlockUI, selectors: [["p-blockUI"]], contentQueries: function BlockUI_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function BlockUI_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.mask = _t.first);
    } }, inputs: { autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", blocked: "blocked", target: "target", styleClass: "styleClass" }, ngContentSelectors: _c3, decls: 4, vars: 9, consts: [[3, "ngClass", "ngStyle"], ["mask", ""], [4, "ngTemplateOutlet"]], template: function BlockUI_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵtemplate(3, BlockUI_ng_container_3_Template, 1, 0, "ng-container", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(5, _c1, !ctx.target))("ngStyle", ɵngcc0.ɵɵpureFunction1(7, _c2, ctx.blocked ? "flex" : "none"));
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgTemplateOutlet], styles: [".p-blockui{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;background-color:rgba(0,0,0,0);display:-ms-flexbox;display:flex;height:100%;justify-content:center;left:0;top:0;transition-property:background-color;width:100%}.p-blockui,.p-blockui.p-component-overlay{position:absolute}.p-blockui-document.p-component-overlay{position:fixed}.p-blockui-leave.p-component-overlay{background-color:rgba(0,0,0,0)}"], encapsulation: 2, changeDetection: 0 });
BlockUI.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
BlockUI.propDecorators = {
    target: [{ type: Input }],
    autoZIndex: [{ type: Input }],
    baseZIndex: [{ type: Input }],
    styleClass: [{ type: Input }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }],
    mask: [{ type: ViewChild, args: ['mask',] }],
    blocked: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BlockUI, [{
        type: Component,
        args: [{
                selector: 'p-blockUI',
                template: `
        <div #mask [class]="styleClass" [ngClass]="{'p-blockui-document':!target, 'p-blockui p-component-overlay': true}" [ngStyle]="{display: blocked ? 'flex' : 'none'}">
            <ng-content></ng-content>
            <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-blockui{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;background-color:rgba(0,0,0,0);display:-ms-flexbox;display:flex;height:100%;justify-content:center;left:0;top:0;transition-property:background-color;width:100%}.p-blockui,.p-blockui.p-component-overlay{position:absolute}.p-blockui-document.p-component-overlay{position:fixed}.p-blockui-leave.p-component-overlay{background-color:rgba(0,0,0,0)}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { autoZIndex: [{
            type: Input
        }], baseZIndex: [{
            type: Input
        }], blocked: [{
            type: Input
        }], target: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }], mask: [{
            type: ViewChild,
            args: ['mask']
        }] }); })();
export class BlockUIModule {
}
BlockUIModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: BlockUIModule });
BlockUIModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function BlockUIModule_Factory(t) { return new (t || BlockUIModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(BlockUIModule, { declarations: function () { return [BlockUI]; }, imports: function () { return [CommonModule]; }, exports: function () { return [BlockUI]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BlockUIModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [BlockUI],
                declarations: [BlockUI]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2t1aS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2Jsb2NrdWkvYmxvY2t1aS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQXlCLFVBQVUsRUFBQyxTQUFTLEVBQUMsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUF5QixNQUFNLGVBQWUsQ0FBQztBQUMzTSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUN2QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sYUFBYSxDQUFDOzs7Ozs7Ozs7OztBQWMxQyxNQUFNLE9BQU8sT0FBTztBQUFHLElBa0JuQixZQUFtQixFQUFjLEVBQVMsRUFBcUI7QUFBSSxRQUFoRCxPQUFFLEdBQUYsRUFBRSxDQUFZO0FBQUMsUUFBUSxPQUFFLEdBQUYsRUFBRSxDQUFtQjtBQUFDLFFBZHZELGVBQVUsR0FBWSxJQUFJLENBQUM7QUFDeEMsUUFDYSxlQUFVLEdBQVcsQ0FBQyxDQUFDO0FBQ3BDLElBV3NFLENBQUM7QUFDdkUsSUFDSSxJQUFhLE9BQU87QUFBSyxRQUNyQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDN0IsSUFBSSxDQUFDO0FBQ0wsSUFDSSxJQUFJLE9BQU8sQ0FBQyxHQUFZO0FBQzVCLFFBQVEsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7QUFDNUIsUUFDUSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7QUFDbEQsWUFBWSxJQUFJLElBQUksQ0FBQyxRQUFRO0FBQzdCLGdCQUFnQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDN0I7QUFDQSxnQkFBZ0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FB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TW9kdWxlLENvbXBvbmVudCxJbnB1dCxBZnRlclZpZXdJbml0LE9uRGVzdHJveSxFbGVtZW50UmVmLFZpZXdDaGlsZCxDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0VuY2Fwc3VsYXRpb24sIENoYW5nZURldGVjdG9yUmVmLCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgVGVtcGxhdGVSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0RvbUhhbmRsZXJ9IGZyb20gJ3ByaW1lbmcvZG9tJztcbmltcG9ydCB7UHJpbWVUZW1wbGF0ZX0gZnJvbSAncHJpbWVuZy9hcGknO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtYmxvY2tVSScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiAjbWFzayBbY2xhc3NdPVwic3R5bGVDbGFzc1wiIFtuZ0NsYXNzXT1cInsncC1ibG9ja3VpLWRvY3VtZW50JzohdGFyZ2V0LCAncC1ibG9ja3VpIHAtY29tcG9uZW50LW92ZXJsYXknOiB0cnVlfVwiIFtuZ1N0eWxlXT1cIntkaXNwbGF5OiBibG9ja2VkID8gJ2ZsZXgnIDogJ25vbmUnfVwiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRlbnRUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgc3R5bGVVcmxzOiBbJy4vYmxvY2t1aS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCbG9ja1VJIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCxPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCkgdGFyZ2V0OiBhbnk7XG4gICAgXG4gICAgQElucHV0KCkgYXV0b1pJbmRleDogYm9vbGVhbiA9IHRydWU7XG4gICAgXG4gICAgQElucHV0KCkgYmFzZVpJbmRleDogbnVtYmVyID0gMDtcbiAgICBcbiAgICBASW5wdXQoKSBzdHlsZUNsYXNzOiBzdHJpbmc7XG4gICAgXG4gICAgQENvbnRlbnRDaGlsZHJlbihQcmltZVRlbXBsYXRlKSB0ZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxhbnk+O1xuXG4gICAgQFZpZXdDaGlsZCgnbWFzaycpIG1hc2s6IEVsZW1lbnRSZWY7XG4gICAgXG4gICAgX2Jsb2NrZWQ6IGJvb2xlYW47XG5cbiAgICBjb250ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgICAgIFxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZiwgcHVibGljIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge31cbiAgICBcbiAgICBASW5wdXQoKSBnZXQgYmxvY2tlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2NrZWQ7XG4gICAgfVxuICAgIFxuICAgIHNldCBibG9ja2VkKHZhbDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9ibG9ja2VkID0gdmFsO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMubWFzayAmJiB0aGlzLm1hc2submF0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Jsb2NrZWQpXG4gICAgICAgICAgICAgICAgdGhpcy5ibG9jaygpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMudW5ibG9jaygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0ICYmICF0aGlzLnRhcmdldC5nZXRCbG9ja2FibGVFbGVtZW50KSB7XG4gICAgICAgICAgICB0aHJvdyAnVGFyZ2V0IG9mIEJsb2NrVUkgbXVzdCBpbXBsZW1lbnQgQmxvY2thYmxlVUkgaW50ZXJmYWNlJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoKGl0ZW0uZ2V0VHlwZSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnY29udGVudCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudFRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAgICAgXG4gICAgYmxvY2soKSB7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldCkge1xuICAgICAgICAgICAgdGhpcy50YXJnZXQuZ2V0QmxvY2thYmxlRWxlbWVudCgpLmFwcGVuZENoaWxkKHRoaXMubWFzay5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LmdldEJsb2NrYWJsZUVsZW1lbnQoKS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMubWFzay5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuYXV0b1pJbmRleCkge1xuICAgICAgICAgICAgdGhpcy5tYXNrLm5hdGl2ZUVsZW1lbnQuc3R5bGUuekluZGV4ID0gU3RyaW5nKHRoaXMuYmFzZVpJbmRleCArICgrK0RvbUhhbmRsZXIuemluZGV4KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdW5ibG9jaygpIHtcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMubWFzay5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG4gICAgXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMudW5ibG9jaygpO1xuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbQmxvY2tVSV0sXG4gICAgZGVjbGFyYXRpb25zOiBbQmxvY2tVSV1cbn0pXG5leHBvcnQgY2xhc3MgQmxvY2tVSU1vZHVsZSB7IH0iXX0=