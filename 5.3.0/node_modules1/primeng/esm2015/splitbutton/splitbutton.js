import { NgModule, Component, Input, Output, EventEmitter, ViewChild, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/button';
import * as ɵngcc3 from 'primeng/menu';

const _c0 = ["container"];
const _c1 = ["defaultbtn"];
const _c2 = ["menu"];
export class SplitButton {
    constructor() {
        this.iconPos = 'left';
        this.onClick = new EventEmitter();
        this.onDropdownClick = new EventEmitter();
        this.showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
        this.hideTransitionOptions = '.1s linear';
    }
    onDefaultButtonClick(event) {
        this.onClick.emit(event);
    }
    onDropdownButtonClick(event) {
        this.onDropdownClick.emit(event);
        this.menu.toggle({ currentTarget: this.containerViewChild.nativeElement, relativeAlign: this.appendTo == null });
    }
}
SplitButton.ɵfac = function SplitButton_Factory(t) { return new (t || SplitButton)(); };
SplitButton.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SplitButton, selectors: [["p-splitButton"]], viewQuery: function SplitButton_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
        ɵngcc0.ɵɵviewQuery(_c2, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.buttonViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.menu = _t.first);
    } }, inputs: { iconPos: "iconPos", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", model: "model", icon: "icon", label: "label", style: "style", styleClass: "styleClass", menuStyle: "menuStyle", menuStyleClass: "menuStyleClass", disabled: "disabled", tabindex: "tabindex", appendTo: "appendTo", dir: "dir" }, outputs: { onClick: "onClick", onDropdownClick: "onDropdownClick" }, decls: 7, vars: 18, consts: [[3, "ngClass", "ngStyle"], ["container", ""], ["type", "button", "pButton", "", 1, "p-splitbutton-defaultbutton", 3, "icon", "iconPos", "label", "disabled", "click"], ["defaultbtn", ""], ["type", "button", "pButton", "", "icon", "pi pi-chevron-down", 1, "p-splitbutton-menubutton", 3, "disabled", "click"], [3, "popup", "model", "styleClass", "appendTo", "showTransitionOptions", "hideTransitionOptions"], ["menu", ""]], template: function SplitButton_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵelementStart(2, "button", 2, 3);
        ɵngcc0.ɵɵlistener("click", function SplitButton_Template_button_click_2_listener($event) { return ctx.onDefaultButtonClick($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "button", 4);
        ɵngcc0.ɵɵlistener("click", function SplitButton_Template_button_click_4_listener($event) { return ctx.onDropdownButtonClick($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(5, "p-menu", 5, 6);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-splitbutton p-component")("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("icon", ctx.icon)("iconPos", ctx.iconPos)("label", ctx.label)("disabled", ctx.disabled);
        ɵngcc0.ɵɵattribute("tabindex", ctx.tabindex);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("disabled", ctx.disabled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleMap(ctx.menuStyle);
        ɵngcc0.ɵɵproperty("popup", true)("model", ctx.model)("styleClass", ctx.menuStyleClass)("appendTo", ctx.appendTo)("showTransitionOptions", ctx.showTransitionOptions)("hideTransitionOptions", ctx.hideTransitionOptions);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc2.ButtonDirective, ɵngcc3.Menu], styles: [".p-splitbutton{display:-ms-inline-flexbox;display:inline-flex;position:relative}.p-splitbutton .p-splitbutton-defaultbutton{-ms-flex:1 1 auto;border-bottom-right-radius:0;border-right:0;border-top-right-radius:0;flex:1 1 auto}.p-splitbutton-menubutton{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;border-bottom-left-radius:0;border-top-left-radius:0;display:-ms-flexbox;display:flex;justify-content:center}.p-splitbutton .p-menu{min-width:100%}.p-fluid .p-splitbutton{display:-ms-flexbox;display:flex}"], encapsulation: 2, changeDetection: 0 });
SplitButton.propDecorators = {
    model: [{ type: Input }],
    icon: [{ type: Input }],
    iconPos: [{ type: Input }],
    label: [{ type: Input }],
    onClick: [{ type: Output }],
    onDropdownClick: [{ type: Output }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    menuStyle: [{ type: Input }],
    menuStyleClass: [{ type: Input }],
    disabled: [{ type: Input }],
    tabindex: [{ type: Input }],
    appendTo: [{ type: Input }],
    dir: [{ type: Input }],
    showTransitionOptions: [{ type: Input }],
    hideTransitionOptions: [{ type: Input }],
    containerViewChild: [{ type: ViewChild, args: ['container',] }],
    buttonViewChild: [{ type: ViewChild, args: ['defaultbtn',] }],
    menu: [{ type: ViewChild, args: ['menu',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SplitButton, [{
        type: Component,
        args: [{
                selector: 'p-splitButton',
                template: `
        <div #container [ngClass]="'p-splitbutton p-component'" [ngStyle]="style" [class]="styleClass">
            <button #defaultbtn class="p-splitbutton-defaultbutton" type="button" pButton [icon]="icon" [iconPos]="iconPos" [label]="label" (click)="onDefaultButtonClick($event)" [disabled]="disabled" [attr.tabindex]="tabindex"></button>
            <button type="button" pButton class="p-splitbutton-menubutton" icon="pi pi-chevron-down" (click)="onDropdownButtonClick($event)" [disabled]="disabled"></button>
            <p-menu #menu [popup]="true" [model]="model" [style]="menuStyle" [styleClass]="menuStyleClass" [appendTo]="appendTo"
                    [showTransitionOptions]="showTransitionOptions" [hideTransitionOptions]="hideTransitionOptions"></p-menu>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-splitbutton{display:-ms-inline-flexbox;display:inline-flex;position:relative}.p-splitbutton .p-splitbutton-defaultbutton{-ms-flex:1 1 auto;border-bottom-right-radius:0;border-right:0;border-top-right-radius:0;flex:1 1 auto}.p-splitbutton-menubutton{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;border-bottom-left-radius:0;border-top-left-radius:0;display:-ms-flexbox;display:flex;justify-content:center}.p-splitbutton .p-menu{min-width:100%}.p-fluid .p-splitbutton{display:-ms-flexbox;display:flex}"]
            }]
    }], function () { return []; }, { iconPos: [{
            type: Input
        }], onClick: [{
            type: Output
        }], onDropdownClick: [{
            type: Output
        }], showTransitionOptions: [{
            type: Input
        }], hideTransitionOptions: [{
            type: Input
        }], model: [{
            type: Input
        }], icon: [{
            type: Input
        }], label: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], menuStyle: [{
            type: Input
        }], menuStyleClass: [{
            type: Input
        }], disabled: [{
            type: Input
        }], tabindex: [{
            type: Input
        }], appendTo: [{
            type: Input
        }], dir: [{
            type: Input
        }], containerViewChild: [{
            type: ViewChild,
            args: ['container']
        }], buttonViewChild: [{
            type: ViewChild,
            args: ['defaultbtn']
        }], menu: [{
            type: ViewChild,
            args: ['menu']
        }] }); })();
export class SplitButtonModule {
}
SplitButtonModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: SplitButtonModule });
SplitButtonModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function SplitButtonModule_Factory(t) { return new (t || SplitButtonModule)(); }, imports: [[CommonModule, ButtonModule, MenuModule], ButtonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SplitButtonModule, { declarations: function () { return [SplitButton]; }, imports: function () { return [CommonModule, ButtonModule, MenuModule]; }, exports: function () { return [SplitButton, ButtonModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SplitButtonModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, ButtonModule, MenuModule],
                exports: [SplitButton, ButtonModule],
                declarations: [SplitButton]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXRidXR0b24uanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9zcGxpdGJ1dHRvbi9zcGxpdGJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBWSxLQUFLLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBQyxTQUFTLEVBQUMsdUJBQXVCLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDMUksT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRTdDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUMsVUFBVSxFQUFPLE1BQU0sY0FBYyxDQUFDOzs7Ozs7Ozs7QUFnQjlDLE1BQU0sT0FBTyxXQUFXO0FBQ3hCLElBZkE7QUFDRyxRQW1CVSxZQUFPLEdBQVcsTUFBTSxDQUFDO0FBQ3RDLFFBR2MsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQzlELFFBQ2Msb0JBQWUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUN0RSxRQWlCYSwwQkFBcUIsR0FBVyxpQ0FBaUMsQ0FBQztBQUMvRSxRQUNhLDBCQUFxQixHQUFXLFlBQVksQ0FBQztBQUMxRCxJQWdCQSxDQUFDO0FBQ0QsSUFWSSxvQkFBb0IsQ0FBQyxLQUFZO0FBQ3JDLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDakMsSUFBSSxDQUFDO0FBQ0wsSUFDSSxxQkFBcUIsQ0FBQyxLQUFZO0FBQ3RDLFFBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFBQyxDQUFDLENBQUM7QUFDdkgsSUFBSSxDQUFDO0FBQ0w7dUNBOURDLFNBQVMsU0FBQyxrQkFDUCxRQUFRLEVBQUU7V0FBZSxrQkFDekIsUUFBUSxFQUFFOzs7Ozs7Ozs7b1BBT1Qsa0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sa0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGtqQkFFeEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3cEJBQ0k7QUFBQztBQUVHLG9CQUFKLEtBQUs7QUFBSyxtQkFFVixLQUFLO0FBQUssc0JBRVYsS0FBSztBQUFLLG9CQUVWLEtBQUs7QUFBSyxzQkFFVixNQUFNO0FBQUssOEJBRVgsTUFBTTtBQUFLLG9CQUVYLEtBQUs7QUFBSyx5QkFFVixLQUFLO0FBQUssd0JBRVYsS0FBSztBQUFLLDZCQUVWLEtBQUs7QUFBSyx1QkFFVixLQUFLO0FBQUssdUJBRVYsS0FBSztBQUFLLHVCQUVWLEtBQUs7QUFBSyxrQkFFVixLQUFLO0FBQUssb0NBRVYsS0FBSztBQUFLLG9DQUVWLEtBQUs7QUFBSyxpQ0FFVixTQUFTLFNBQUMsV0FBVztBQUFPLDhCQUU1QixTQUFTLFNBQUMsWUFBWTtBQUFPLG1CQUU3QixTQUFTLFNBQUMsTUFBTTtBQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBa0I3QixNQUFNLE9BQU8saUJBQWlCO0FBQUc7NkNBTGhDLFFBQVEsU0FBQztDQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBQyxZQUFZLEVBQUMsVUFBVSxDQUFDLGtCQUMvQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUMsWUFBWSxDQUFDLGtCQUNuQyxZQUFZLEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FDOUI7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSxDb21wb25lbnQsRWxlbWVudFJlZixJbnB1dCxPdXRwdXQsRXZlbnRFbWl0dGVyLFZpZXdDaGlsZCxDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TWVudUl0ZW19IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7QnV0dG9uTW9kdWxlfSBmcm9tICdwcmltZW5nL2J1dHRvbic7XG5pbXBvcnQge01lbnVNb2R1bGUsIE1lbnV9IGZyb20gJ3ByaW1lbmcvbWVudSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1zcGxpdEJ1dHRvbicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiAjY29udGFpbmVyIFtuZ0NsYXNzXT1cIidwLXNwbGl0YnV0dG9uIHAtY29tcG9uZW50J1wiIFtuZ1N0eWxlXT1cInN0eWxlXCIgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIj5cbiAgICAgICAgICAgIDxidXR0b24gI2RlZmF1bHRidG4gY2xhc3M9XCJwLXNwbGl0YnV0dG9uLWRlZmF1bHRidXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgcEJ1dHRvbiBbaWNvbl09XCJpY29uXCIgW2ljb25Qb3NdPVwiaWNvblBvc1wiIFtsYWJlbF09XCJsYWJlbFwiIChjbGljayk9XCJvbkRlZmF1bHRCdXR0b25DbGljaygkZXZlbnQpXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW2F0dHIudGFiaW5kZXhdPVwidGFiaW5kZXhcIj48L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHBCdXR0b24gY2xhc3M9XCJwLXNwbGl0YnV0dG9uLW1lbnVidXR0b25cIiBpY29uPVwicGkgcGktY2hldnJvbi1kb3duXCIgKGNsaWNrKT1cIm9uRHJvcGRvd25CdXR0b25DbGljaygkZXZlbnQpXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+PC9idXR0b24+XG4gICAgICAgICAgICA8cC1tZW51ICNtZW51IFtwb3B1cF09XCJ0cnVlXCIgW21vZGVsXT1cIm1vZGVsXCIgW3N0eWxlXT1cIm1lbnVTdHlsZVwiIFtzdHlsZUNsYXNzXT1cIm1lbnVTdHlsZUNsYXNzXCIgW2FwcGVuZFRvXT1cImFwcGVuZFRvXCJcbiAgICAgICAgICAgICAgICAgICAgW3Nob3dUcmFuc2l0aW9uT3B0aW9uc109XCJzaG93VHJhbnNpdGlvbk9wdGlvbnNcIiBbaGlkZVRyYW5zaXRpb25PcHRpb25zXT1cImhpZGVUcmFuc2l0aW9uT3B0aW9uc1wiPjwvcC1tZW51PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgc3R5bGVVcmxzOiBbJy4vc3BsaXRidXR0b24uY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3BsaXRCdXR0b24ge1xuXG4gICAgQElucHV0KCkgbW9kZWw6IE1lbnVJdGVtW107XG5cbiAgICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBpY29uUG9zOiBzdHJpbmcgPSAnbGVmdCc7XG4gICAgICAgIFxuICAgIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gICAgXG4gICAgQE91dHB1dCgpIG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIFxuICAgIEBPdXRwdXQoKSBvbkRyb3Bkb3duQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIFxuICAgIEBJbnB1dCgpIHN0eWxlOiBhbnk7XG4gICAgXG4gICAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nO1xuICAgIFxuICAgIEBJbnB1dCgpIG1lbnVTdHlsZTogYW55O1xuICAgIFxuICAgIEBJbnB1dCgpIG1lbnVTdHlsZUNsYXNzOiBzdHJpbmc7XG4gICAgXG4gICAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSB0YWJpbmRleDogbnVtYmVyO1xuICAgIFxuICAgIEBJbnB1dCgpIGFwcGVuZFRvOiBhbnk7XG4gICAgXG4gICAgQElucHV0KCkgZGlyOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBzaG93VHJhbnNpdGlvbk9wdGlvbnM6IHN0cmluZyA9ICcuMTJzIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJztcblxuICAgIEBJbnB1dCgpIGhpZGVUcmFuc2l0aW9uT3B0aW9uczogc3RyaW5nID0gJy4xcyBsaW5lYXInO1xuXG4gICAgQFZpZXdDaGlsZCgnY29udGFpbmVyJykgY29udGFpbmVyVmlld0NoaWxkOiBFbGVtZW50UmVmO1xuICAgIFxuICAgIEBWaWV3Q2hpbGQoJ2RlZmF1bHRidG4nKSBidXR0b25WaWV3Q2hpbGQ6IEVsZW1lbnRSZWY7XG5cbiAgICBAVmlld0NoaWxkKCdtZW51JykgbWVudTogTWVudTtcblxuICAgIG9uRGVmYXVsdEJ1dHRvbkNsaWNrKGV2ZW50OiBFdmVudCkge1xuICAgICAgICB0aGlzLm9uQ2xpY2suZW1pdChldmVudCk7XG4gICAgfVxuICAgICAgICAgIFxuICAgIG9uRHJvcGRvd25CdXR0b25DbGljayhldmVudDogRXZlbnQpIHtcbiAgICAgICAgdGhpcy5vbkRyb3Bkb3duQ2xpY2suZW1pdChldmVudCk7XG4gICAgICAgIHRoaXMubWVudS50b2dnbGUoe2N1cnJlbnRUYXJnZXQ6IHRoaXMuY29udGFpbmVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQsIHJlbGF0aXZlQWxpZ246IHRoaXMuYXBwZW5kVG8gPT0gbnVsbH0pO1xuICAgIH1cblxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsQnV0dG9uTW9kdWxlLE1lbnVNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtTcGxpdEJ1dHRvbixCdXR0b25Nb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW1NwbGl0QnV0dG9uXVxufSlcbmV4cG9ydCBjbGFzcyBTcGxpdEJ1dHRvbk1vZHVsZSB7IH1cbiJdfQ==