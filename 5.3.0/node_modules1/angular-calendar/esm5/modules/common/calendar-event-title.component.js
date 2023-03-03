import { __decorate, __metadata } from "tslib";
import { Component, Input, TemplateRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from './calendar-event-title.pipe';
import * as ɵngcc3 from './calendar-a11y.pipe';

var _c0 = function () { return {}; };
function CalendarEventTitleComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 2);
    ɵngcc0.ɵɵpipe(1, "calendarEventTitle");
    ɵngcc0.ɵɵpipe(2, "calendarA11y");
} if (rf & 2) {
    var event_r3 = ctx.event;
    var view_r4 = ctx.view;
    ɵngcc0.ɵɵproperty("innerHTML", ɵngcc0.ɵɵpipeBind3(1, 2, event_r3.title, view_r4, event_r3), ɵngcc0.ɵɵsanitizeHtml);
    ɵngcc0.ɵɵattribute("aria-hidden", ɵngcc0.ɵɵpipeBind2(2, 6, ɵngcc0.ɵɵpureFunction0(9, _c0), "hideEventTitle"));
} }
function CalendarEventTitleComponent_ng_template_2_Template(rf, ctx) { }
var _c1 = function (a0, a1) { return { event: a0, view: a1 }; };
var CalendarEventTitleComponent = /** @class */ (function () {
    function CalendarEventTitleComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CalendarEventTitleComponent.prototype, "event", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarEventTitleComponent.prototype, "customTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CalendarEventTitleComponent.prototype, "view", void 0);
CalendarEventTitleComponent.ɵfac = function CalendarEventTitleComponent_Factory(t) { return new (t || CalendarEventTitleComponent)(); };
CalendarEventTitleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarEventTitleComponent, selectors: [["mwl-calendar-event-title"]], inputs: { event: "event", customTemplate: "customTemplate", view: "view" }, decls: 3, vars: 5, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-event-title", 3, "innerHTML"]], template: function CalendarEventTitleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, CalendarEventTitleComponent_ng_template_0_Template, 3, 10, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, CalendarEventTitleComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        var _r0 = ɵngcc0.ɵɵreference(1);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(2, _c1, ctx.event, ctx.view));
    } }, directives: [ɵngcc1.NgTemplateOutlet], pipes: [ɵngcc2.CalendarEventTitlePipe, ɵngcc3.CalendarA11yPipe], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarEventTitleComponent, [{
        type: Component,
        args: [{
                selector: 'mwl-calendar-event-title',
                template: "\n    <ng-template #defaultTemplate let-event=\"event\" let-view=\"view\">\n      <span\n        class=\"cal-event-title\"\n        [innerHTML]=\"event.title | calendarEventTitle: view:event\"\n        [attr.aria-hidden]=\"{} | calendarA11y: 'hideEventTitle'\"\n      >\n      </span>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        view: view\n      }\"\n    >\n    </ng-template>\n  "
            }]
    }], function () { return []; }, { event: [{
            type: Input
        }], customTemplate: [{
            type: Input
        }], view: [{
            type: Input
        }] }); })();
    return CalendarEventTitleComponent;
}());
export { CalendarEventTitleComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZXZlbnQtdGl0bGUuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL2NvbW1vbi9jYWxlbmRhci1ldmVudC10aXRsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCOUQ7QUFDb0IsSUFEcEI7QUFBeUMsSUFNekMsQ0FBQztBQUNELElBTlc7QUFBYSxRQUFyQixLQUFLLEVBQUU7QUFBRTtBQUVRLDhEQUZZO0FBRWhDLElBQVc7QUFBYSxRQUFyQixLQUFLLEVBQUU7QUFBRSxrQ0FBZSxXQUFXO0FBQUUsdUVBQUk7QUFFNUMsSUFBVztBQUFhLFFBQXJCLEtBQUssRUFBRTtBQUFFO0FBRWUsNkRBRkg7SUFMWCwyQkFBMkIsd0JBckJ2QyxTQUFTLENBQUMsY0FDVCxRQUFRLEVBQUUsMEJBQTBCLGNBQ3BDO0FBQVEsRUFBRTtxRUFpQlQsVUFDRixDQUFDLFFBQ1csMkJBQTJCLENBTXZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUNEO0FBQUMsSUFERCxrQ0FBQztBQUNBLENBREEsQUFORCxJQU1DO0FBQ0QsU0FQYSwyQkFBMkI7QUFDdkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJFdmVudCB9IGZyb20gJ2NhbGVuZGFyLXV0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXdsLWNhbGVuZGFyLWV2ZW50LXRpdGxlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRUZW1wbGF0ZSBsZXQtZXZlbnQ9XCJldmVudFwiIGxldC12aWV3PVwidmlld1wiPlxuICAgICAgPHNwYW5cbiAgICAgICAgY2xhc3M9XCJjYWwtZXZlbnQtdGl0bGVcIlxuICAgICAgICBbaW5uZXJIVE1MXT1cImV2ZW50LnRpdGxlIHwgY2FsZW5kYXJFdmVudFRpdGxlOiB2aWV3OmV2ZW50XCJcbiAgICAgICAgW2F0dHIuYXJpYS1oaWRkZW5dPVwie30gfCBjYWxlbmRhckExMXk6ICdoaWRlRXZlbnRUaXRsZSdcIlxuICAgICAgPlxuICAgICAgPC9zcGFuPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21UZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGVcIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntcbiAgICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgICB2aWV3OiB2aWV3XG4gICAgICB9XCJcbiAgICA+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJFdmVudFRpdGxlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZXZlbnQ6IENhbGVuZGFyRXZlbnQ7XG5cbiAgQElucHV0KCkgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KCkgdmlldzogc3RyaW5nO1xufVxuIl19