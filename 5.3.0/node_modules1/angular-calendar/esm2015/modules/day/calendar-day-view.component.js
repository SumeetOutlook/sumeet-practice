import { __decorate, __metadata } from "tslib";
import { Component, Input, Output, EventEmitter, TemplateRef, } from '@angular/core';
import { Subject } from 'rxjs';
/**
 * Shows all events on a given day. Example usage:
 *
 * ```typescript
 * <mwl-calendar-day-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-day-view>
 * ```
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../week/calendar-week-view.component';
let CalendarDayViewComponent = class CalendarDayViewComponent {
    constructor() {
        /**
         * An array of events to display on view
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * The number of segments in an hour. Must be <= 6
         */
        this.hourSegments = 2;
        /**
         * The height in pixels of each hour segment
         */
        this.hourSegmentHeight = 30;
        /**
         * The day start hours in 24 hour time. Must be 0-23
         */
        this.dayStartHour = 0;
        /**
         * The day start minutes. Must be 0-59
         */
        this.dayStartMinute = 0;
        /**
         * The day end hours in 24 hour time. Must be 0-23
         */
        this.dayEndHour = 23;
        /**
         * The day end minutes. Must be 0-59
         */
        this.dayEndMinute = 59;
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
         * will be displayed immediately.
         */
        this.tooltipDelay = null;
        /**
         * Whether to snap events to a grid when dragging
         */
        this.snapDraggedEvents = true;
        /**
         * Called when an event title is clicked
         */
        this.eventClicked = new EventEmitter();
        /**
         * Called when an hour segment is clicked
         */
        this.hourSegmentClicked = new EventEmitter();
        /**
         * Called when an event is resized or dragged and dropped
         */
        this.eventTimesChanged = new EventEmitter();
        /**
         * An output that will be called before the view is rendered for the current day.
         * If you add the `cssClass` property to an hour grid segment it will add that class to the hour segment in the template
         */
        this.beforeViewRender = new EventEmitter();
    }
};
CalendarDayViewComponent.ɵfac = function CalendarDayViewComponent_Factory(t) { return new (t || CalendarDayViewComponent)(); };
CalendarDayViewComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarDayViewComponent, selectors: [["mwl-calendar-day-view"]], inputs: { events: "events", hourSegments: "hourSegments", hourSegmentHeight: "hourSegmentHeight", dayStartHour: "dayStartHour", dayStartMinute: "dayStartMinute", dayEndHour: "dayEndHour", dayEndMinute: "dayEndMinute", tooltipPlacement: "tooltipPlacement", tooltipAppendToBody: "tooltipAppendToBody", tooltipDelay: "tooltipDelay", snapDraggedEvents: "snapDraggedEvents", viewDate: "viewDate", refresh: "refresh", locale: "locale", eventSnapSize: "eventSnapSize", tooltipTemplate: "tooltipTemplate", hourSegmentTemplate: "hourSegmentTemplate", eventTemplate: "eventTemplate", eventTitleTemplate: "eventTitleTemplate", eventActionsTemplate: "eventActionsTemplate", allDayEventsLabelTemplate: "allDayEventsLabelTemplate", currentTimeMarkerTemplate: "currentTimeMarkerTemplate" }, outputs: { eventClicked: "eventClicked", hourSegmentClicked: "hourSegmentClicked", eventTimesChanged: "eventTimesChanged", beforeViewRender: "beforeViewRender" }, decls: 1, vars: 23, consts: [[1, "cal-day-view", 3, "daysInWeek", "viewDate", "events", "hourSegments", "hourSegmentHeight", "dayStartHour", "dayStartMinute", "dayEndHour", "dayEndMinute", "refresh", "locale", "eventSnapSize", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "hourSegmentTemplate", "eventTemplate", "eventTitleTemplate", "eventActionsTemplate", "snapDraggedEvents", "allDayEventsLabelTemplate", "currentTimeMarkerTemplate", "eventClicked", "hourSegmentClicked", "eventTimesChanged", "beforeViewRender"]], template: function CalendarDayViewComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "mwl-calendar-week-view", 0);
        ɵngcc0.ɵɵlistener("eventClicked", function CalendarDayViewComponent_Template_mwl_calendar_week_view_eventClicked_0_listener($event) { return ctx.eventClicked.emit($event); })("hourSegmentClicked", function CalendarDayViewComponent_Template_mwl_calendar_week_view_hourSegmentClicked_0_listener($event) { return ctx.hourSegmentClicked.emit($event); })("eventTimesChanged", function CalendarDayViewComponent_Template_mwl_calendar_week_view_eventTimesChanged_0_listener($event) { return ctx.eventTimesChanged.emit($event); })("beforeViewRender", function CalendarDayViewComponent_Template_mwl_calendar_week_view_beforeViewRender_0_listener($event) { return ctx.beforeViewRender.emit($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("daysInWeek", 1)("viewDate", ctx.viewDate)("events", ctx.events)("hourSegments", ctx.hourSegments)("hourSegmentHeight", ctx.hourSegmentHeight)("dayStartHour", ctx.dayStartHour)("dayStartMinute", ctx.dayStartMinute)("dayEndHour", ctx.dayEndHour)("dayEndMinute", ctx.dayEndMinute)("refresh", ctx.refresh)("locale", ctx.locale)("eventSnapSize", ctx.eventSnapSize)("tooltipPlacement", ctx.tooltipPlacement)("tooltipTemplate", ctx.tooltipTemplate)("tooltipAppendToBody", ctx.tooltipAppendToBody)("tooltipDelay", ctx.tooltipDelay)("hourSegmentTemplate", ctx.hourSegmentTemplate)("eventTemplate", ctx.eventTemplate)("eventTitleTemplate", ctx.eventTitleTemplate)("eventActionsTemplate", ctx.eventActionsTemplate)("snapDraggedEvents", ctx.snapDraggedEvents)("allDayEventsLabelTemplate", ctx.allDayEventsLabelTemplate)("currentTimeMarkerTemplate", ctx.currentTimeMarkerTemplate);
    } }, directives: [ɵngcc1.CalendarWeekViewComponent], encapsulation: 2 });
__decorate([
    Input(),
    __metadata("design:type", Date)
], CalendarDayViewComponent.prototype, "viewDate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], CalendarDayViewComponent.prototype, "events", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarDayViewComponent.prototype, "hourSegments", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarDayViewComponent.prototype, "hourSegmentHeight", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarDayViewComponent.prototype, "dayStartHour", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarDayViewComponent.prototype, "dayStartMinute", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarDayViewComponent.prototype, "dayEndHour", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarDayViewComponent.prototype, "dayEndMinute", void 0);
__decorate([
    Input(),
    __metadata("design:type", Subject)
], CalendarDayViewComponent.prototype, "refresh", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CalendarDayViewComponent.prototype, "locale", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarDayViewComponent.prototype, "eventSnapSize", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CalendarDayViewComponent.prototype, "tooltipPlacement", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarDayViewComponent.prototype, "tooltipTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CalendarDayViewComponent.prototype, "tooltipAppendToBody", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarDayViewComponent.prototype, "tooltipDelay", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarDayViewComponent.prototype, "hourSegmentTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarDayViewComponent.prototype, "eventTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarDayViewComponent.prototype, "eventTitleTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarDayViewComponent.prototype, "eventActionsTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CalendarDayViewComponent.prototype, "snapDraggedEvents", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarDayViewComponent.prototype, "allDayEventsLabelTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarDayViewComponent.prototype, "currentTimeMarkerTemplate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CalendarDayViewComponent.prototype, "eventClicked", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CalendarDayViewComponent.prototype, "hourSegmentClicked", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CalendarDayViewComponent.prototype, "eventTimesChanged", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CalendarDayViewComponent.prototype, "beforeViewRender", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarDayViewComponent, [{
        type: Component,
        args: [{
                selector: 'mwl-calendar-day-view',
                template: `
    <mwl-calendar-week-view
      class="cal-day-view"
      [daysInWeek]="1"
      [viewDate]="viewDate"
      [events]="events"
      [hourSegments]="hourSegments"
      [hourSegmentHeight]="hourSegmentHeight"
      [dayStartHour]="dayStartHour"
      [dayStartMinute]="dayStartMinute"
      [dayEndHour]="dayEndHour"
      [dayEndMinute]="dayEndMinute"
      [refresh]="refresh"
      [locale]="locale"
      [eventSnapSize]="eventSnapSize"
      [tooltipPlacement]="tooltipPlacement"
      [tooltipTemplate]="tooltipTemplate"
      [tooltipAppendToBody]="tooltipAppendToBody"
      [tooltipDelay]="tooltipDelay"
      [hourSegmentTemplate]="hourSegmentTemplate"
      [eventTemplate]="eventTemplate"
      [eventTitleTemplate]="eventTitleTemplate"
      [eventActionsTemplate]="eventActionsTemplate"
      [snapDraggedEvents]="snapDraggedEvents"
      [allDayEventsLabelTemplate]="allDayEventsLabelTemplate"
      [currentTimeMarkerTemplate]="currentTimeMarkerTemplate"
      (eventClicked)="eventClicked.emit($event)"
      (hourSegmentClicked)="hourSegmentClicked.emit($event)"
      (eventTimesChanged)="eventTimesChanged.emit($event)"
      (beforeViewRender)="beforeViewRender.emit($event)"
    ></mwl-calendar-week-view>
  `
            }]
    }], function () { return []; }, { events: [{
            type: Input
        }], hourSegments: [{
            type: Input
        }], hourSegmentHeight: [{
            type: Input
        }], dayStartHour: [{
            type: Input
        }], dayStartMinute: [{
            type: Input
        }], dayEndHour: [{
            type: Input
        }], dayEndMinute: [{
            type: Input
        }], tooltipPlacement: [{
            type: Input
        }], tooltipAppendToBody: [{
            type: Input
        }], tooltipDelay: [{
            type: Input
        }], snapDraggedEvents: [{
            type: Input
        }], eventClicked: [{
            type: Output
        }], hourSegmentClicked: [{
            type: Output
        }], eventTimesChanged: [{
            type: Output
        }], beforeViewRender: [{
            type: Output
        }], viewDate: [{
            type: Input
        }], refresh: [{
            type: Input
        }], locale: [{
            type: Input
        }], eventSnapSize: [{
            type: Input
        }], tooltipTemplate: [{
            type: Input
        }], hourSegmentTemplate: [{
            type: Input
        }], eventTemplate: [{
            type: Input
        }], eventTitleTemplate: [{
            type: Input
        }], eventActionsTemplate: [{
            type: Input
        }], allDayEventsLabelTemplate: [{
            type: Input
        }], currentTimeMarkerTemplate: [{
            type: Input
        }] }); })();
export { CalendarDayViewComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZGF5LXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL2RheS9jYWxlbmRhci1kYXktdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFPL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBb0NILElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0FBQ3JDLElBREE7QUFBZ0IsUUFNZDtBQUNGO0FBQ007QUFFQSxXQUREO0FBQ0wsUUFBVyxXQUFNLEdBQW9CLEVBQUUsQ0FBQztBQUN4QyxRQUNFO0FBQ0Y7QUFFQSxXQURLO0FBQ0wsUUFBVyxpQkFBWSxHQUFXLENBQUMsQ0FBQztBQUNwQyxRQUNFO0FBQ0Y7QUFFQSxXQURLO0FBQ0wsUUFBVyxzQkFBaUIsR0FBVyxFQUFFLENBQUM7QUFDMUMsUUFDRTtBQUNGO0FBRUEsV0FESztBQUNMLFFBQVcsaUJBQVksR0FBVyxDQUFDLENBQUM7QUFDcEMsUUFDRTtBQUNGO0FBRUEsV0FESztBQUNMLFFBQVcsbUJBQWMsR0FBVyxDQUFDLENBQUM7QUFDdEMsUUFDRTtBQUNGO0FBRUEsV0FESztBQUNMLFFBQVcsZUFBVSxHQUFXLEVBQUUsQ0FBQztBQUNuQyxRQUNFO0FBQ0Y7QUFFQSxXQURLO0FBQ0wsUUFBVyxpQkFBWSxHQUFXLEVBQUUsQ0FBQztBQUNyQyxRQWdCRTtBQUNGO0FBRUEsV0FESztBQUNMLFFBQVcscUJBQWdCLEdBQW1CLE1BQU0sQ0FBQztBQUNyRCxRQU1FO0FBQ0Y7QUFFQSxXQURLO0FBQ0wsUUFBVyx3QkFBbUIsR0FBWSxJQUFJLENB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Q0E2SXBDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFDRDtBQUFDLFNBOUlZLHdCQUF3QjtBQUNwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBUZW1wbGF0ZVJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYWxlbmRhckV2ZW50IH0gZnJvbSAnY2FsZW5kYXItdXRpbHMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2FsZW5kYXJFdmVudFRpbWVzQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vY29tbW9uL2NhbGVuZGFyLWV2ZW50LXRpbWVzLWNoYW5nZWQtZXZlbnQuaW50ZXJmYWNlJztcbmltcG9ydCB7IFBsYWNlbWVudEFycmF5IH0gZnJvbSAncG9zaXRpb25pbmcnO1xuaW1wb3J0IHsgQ2FsZW5kYXJXZWVrVmlld0JlZm9yZVJlbmRlckV2ZW50IH0gZnJvbSAnLi4vd2Vlay9jYWxlbmRhci13ZWVrLm1vZHVsZSc7XG5cbmV4cG9ydCB0eXBlIENhbGVuZGFyRGF5Vmlld0JlZm9yZVJlbmRlckV2ZW50ID0gQ2FsZW5kYXJXZWVrVmlld0JlZm9yZVJlbmRlckV2ZW50O1xuXG4vKipcbiAqIFNob3dzIGFsbCBldmVudHMgb24gYSBnaXZlbiBkYXkuIEV4YW1wbGUgdXNhZ2U6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogPG13bC1jYWxlbmRhci1kYXktdmlld1xuICogIFt2aWV3RGF0ZV09XCJ2aWV3RGF0ZVwiXG4gKiAgW2V2ZW50c109XCJldmVudHNcIj5cbiAqIDwvbXdsLWNhbGVuZGFyLWRheS12aWV3PlxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ213bC1jYWxlbmRhci1kYXktdmlldycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG13bC1jYWxlbmRhci13ZWVrLXZpZXdcbiAgICAgIGNsYXNzPVwiY2FsLWRheS12aWV3XCJcbiAgICAgIFtkYXlzSW5XZWVrXT1cIjFcIlxuICAgICAgW3ZpZXdEYXRlXT1cInZpZXdEYXRlXCJcbiAgICAgIFtldmVudHNdPVwiZXZlbnRzXCJcbiAgICAgIFtob3VyU2VnbWVudHNdPVwiaG91clNlZ21lbnRzXCJcbiAgICAgIFtob3VyU2VnbWVudEhlaWdodF09XCJob3VyU2VnbWVudEhlaWdodFwiXG4gICAgICBbZGF5U3RhcnRIb3VyXT1cImRheVN0YXJ0SG91clwiXG4gICAgICBbZGF5U3RhcnRNaW51dGVdPVwiZGF5U3RhcnRNaW51dGVcIlxuICAgICAgW2RheUVuZEhvdXJdPVwiZGF5RW5kSG91clwiXG4gICAgICBbZGF5RW5kTWludXRlXT1cImRheUVuZE1pbnV0ZVwiXG4gICAgICBbcmVmcmVzaF09XCJyZWZyZXNoXCJcbiAgICAgIFtsb2NhbGVdPVwibG9jYWxlXCJcbiAgICAgIFtldmVudFNuYXBTaXplXT1cImV2ZW50U25hcFNpemVcIlxuICAgICAgW3Rvb2x0aXBQbGFjZW1lbnRdPVwidG9vbHRpcFBsYWNlbWVudFwiXG4gICAgICBbdG9vbHRpcFRlbXBsYXRlXT1cInRvb2x0aXBUZW1wbGF0ZVwiXG4gICAgICBbdG9vbHRpcEFwcGVuZFRvQm9keV09XCJ0b29sdGlwQXBwZW5kVG9Cb2R5XCJcbiAgICAgIFt0b29sdGlwRGVsYXldPVwidG9vbHRpcERlbGF5XCJcbiAgICAgIFtob3VyU2VnbWVudFRlbXBsYXRlXT1cImhvdXJTZWdtZW50VGVtcGxhdGVcIlxuICAgICAgW2V2ZW50VGVtcGxhdGVdPVwiZXZlbnRUZW1wbGF0ZVwiXG4gICAgICBbZXZlbnRUaXRsZVRlbXBsYXRlXT1cImV2ZW50VGl0bGVUZW1wbGF0ZVwiXG4gICAgICBbZXZlbnRBY3Rpb25zVGVtcGxhdGVdPVwiZXZlbnRBY3Rpb25zVGVtcGxhdGVcIlxuICAgICAgW3NuYXBEcmFnZ2VkRXZlbnRzXT1cInNuYXBEcmFnZ2VkRXZlbnRzXCJcbiAgICAgIFthbGxEYXlFdmVudHNMYWJlbFRlbXBsYXRlXT1cImFsbERheUV2ZW50c0xhYmVsVGVtcGxhdGVcIlxuICAgICAgW2N1cnJlbnRUaW1lTWFya2VyVGVtcGxhdGVdPVwiY3VycmVudFRpbWVNYXJrZXJUZW1wbGF0ZVwiXG4gICAgICAoZXZlbnRDbGlja2VkKT1cImV2ZW50Q2xpY2tlZC5lbWl0KCRldmVudClcIlxuICAgICAgKGhvdXJTZWdtZW50Q2xpY2tlZCk9XCJob3VyU2VnbWVudENsaWNrZWQuZW1pdCgkZXZlbnQpXCJcbiAgICAgIChldmVudFRpbWVzQ2hhbmdlZCk9XCJldmVudFRpbWVzQ2hhbmdlZC5lbWl0KCRldmVudClcIlxuICAgICAgKGJlZm9yZVZpZXdSZW5kZXIpPVwiYmVmb3JlVmlld1JlbmRlci5lbWl0KCRldmVudClcIlxuICAgID48L213bC1jYWxlbmRhci13ZWVrLXZpZXc+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRGF5Vmlld0NvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCB2aWV3IGRhdGVcbiAgICovXG4gIEBJbnB1dCgpIHZpZXdEYXRlOiBEYXRlO1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBldmVudHMgdG8gZGlzcGxheSBvbiB2aWV3XG4gICAqIFRoZSBzY2hlbWEgaXMgYXZhaWxhYmxlIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXR0bGV3aXM5Mi9jYWxlbmRhci11dGlscy9ibG9iL2M1MTY4OTk4NWY1OWEyNzE5NDBlMzBiYzRlMmM0ZTFmZWUzZmNiNWMvc3JjL2NhbGVuZGFyVXRpbHMudHMjTDQ5LUw2M1xuICAgKi9cbiAgQElucHV0KCkgZXZlbnRzOiBDYWxlbmRhckV2ZW50W10gPSBbXTtcblxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBzZWdtZW50cyBpbiBhbiBob3VyLiBNdXN0IGJlIDw9IDZcbiAgICovXG4gIEBJbnB1dCgpIGhvdXJTZWdtZW50czogbnVtYmVyID0gMjtcblxuICAvKipcbiAgICogVGhlIGhlaWdodCBpbiBwaXhlbHMgb2YgZWFjaCBob3VyIHNlZ21lbnRcbiAgICovXG4gIEBJbnB1dCgpIGhvdXJTZWdtZW50SGVpZ2h0OiBudW1iZXIgPSAzMDtcblxuICAvKipcbiAgICogVGhlIGRheSBzdGFydCBob3VycyBpbiAyNCBob3VyIHRpbWUuIE11c3QgYmUgMC0yM1xuICAgKi9cbiAgQElucHV0KCkgZGF5U3RhcnRIb3VyOiBudW1iZXIgPSAwO1xuXG4gIC8qKlxuICAgKiBUaGUgZGF5IHN0YXJ0IG1pbnV0ZXMuIE11c3QgYmUgMC01OVxuICAgKi9cbiAgQElucHV0KCkgZGF5U3RhcnRNaW51dGU6IG51bWJlciA9IDA7XG5cbiAgLyoqXG4gICAqIFRoZSBkYXkgZW5kIGhvdXJzIGluIDI0IGhvdXIgdGltZS4gTXVzdCBiZSAwLTIzXG4gICAqL1xuICBASW5wdXQoKSBkYXlFbmRIb3VyOiBudW1iZXIgPSAyMztcblxuICAvKipcbiAgICogVGhlIGRheSBlbmQgbWludXRlcy4gTXVzdCBiZSAwLTU5XG4gICAqL1xuICBASW5wdXQoKSBkYXlFbmRNaW51dGU6IG51bWJlciA9IDU5O1xuXG4gIC8qKlxuICAgKiBBbiBvYnNlcnZhYmxlIHRoYXQgd2hlbiBlbWl0dGVkIG9uIHdpbGwgcmUtcmVuZGVyIHRoZSBjdXJyZW50IHZpZXdcbiAgICovXG4gIEBJbnB1dCgpIHJlZnJlc2g6IFN1YmplY3Q8YW55PjtcblxuICAvKipcbiAgICogVGhlIGxvY2FsZSB1c2VkIHRvIGZvcm1hdCBkYXRlc1xuICAgKi9cbiAgQElucHV0KCkgbG9jYWxlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBncmlkIHNpemUgdG8gc25hcCByZXNpemluZyBhbmQgZHJhZ2dpbmcgb2YgZXZlbnRzIHRvXG4gICAqL1xuICBASW5wdXQoKSBldmVudFNuYXBTaXplOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBwbGFjZW1lbnQgb2YgdGhlIGV2ZW50IHRvb2x0aXBcbiAgICovXG4gIEBJbnB1dCgpIHRvb2x0aXBQbGFjZW1lbnQ6IFBsYWNlbWVudEFycmF5ID0gJ2F1dG8nO1xuXG4gIC8qKlxuICAgKiBBIGN1c3RvbSB0ZW1wbGF0ZSB0byB1c2UgZm9yIHRoZSBldmVudCB0b29sdGlwc1xuICAgKi9cbiAgQElucHV0KCkgdG9vbHRpcFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGFwcGVuZCB0b29sdGlwcyB0byB0aGUgYm9keSBvciBuZXh0IHRvIHRoZSB0cmlnZ2VyIGVsZW1lbnRcbiAgICovXG4gIEBJbnB1dCgpIHRvb2x0aXBBcHBlbmRUb0JvZHk6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBUaGUgZGVsYXkgaW4gbWlsbGlzZWNvbmRzIGJlZm9yZSB0aGUgdG9vbHRpcCBzaG91bGQgYmUgZGlzcGxheWVkLiBJZiBub3QgcHJvdmlkZWQgdGhlIHRvb2x0aXBcbiAgICogd2lsbCBiZSBkaXNwbGF5ZWQgaW1tZWRpYXRlbHkuXG4gICAqL1xuICBASW5wdXQoKSB0b29sdGlwRGVsYXk6IG51bWJlciB8IG51bGwgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBBIGN1c3RvbSB0ZW1wbGF0ZSB0byB1c2UgdG8gcmVwbGFjZSB0aGUgaG91ciBzZWdtZW50XG4gICAqL1xuICBASW5wdXQoKSBob3VyU2VnbWVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBBIGN1c3RvbSB0ZW1wbGF0ZSB0byB1c2UgZm9yIGRheSB2aWV3IGV2ZW50c1xuICAgKi9cbiAgQElucHV0KCkgZXZlbnRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogQSBjdXN0b20gdGVtcGxhdGUgdG8gdXNlIGZvciBldmVudCB0aXRsZXNcbiAgICovXG4gIEBJbnB1dCgpIGV2ZW50VGl0bGVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogQSBjdXN0b20gdGVtcGxhdGUgdG8gdXNlIGZvciBldmVudCBhY3Rpb25zXG4gICAqL1xuICBASW5wdXQoKSBldmVudEFjdGlvbnNUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogV2hldGhlciB0byBzbmFwIGV2ZW50cyB0byBhIGdyaWQgd2hlbiBkcmFnZ2luZ1xuICAgKi9cbiAgQElucHV0KCkgc25hcERyYWdnZWRFdmVudHM6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBBIGN1c3RvbSB0ZW1wbGF0ZSB0byB1c2UgZm9yIHRoZSBhbGwgZGF5IGV2ZW50cyBsYWJlbCB0ZXh0XG4gICAqL1xuICBASW5wdXQoKSBhbGxEYXlFdmVudHNMYWJlbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBBIGN1c3RvbSB0ZW1wbGF0ZSB0byB1c2UgZm9yIHRoZSBjdXJyZW50IHRpbWUgbWFya2VyXG4gICAqL1xuICBASW5wdXQoKSBjdXJyZW50VGltZU1hcmtlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhbiBldmVudCB0aXRsZSBpcyBjbGlja2VkXG4gICAqL1xuICBAT3V0cHV0KCkgZXZlbnRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgZXZlbnQ6IENhbGVuZGFyRXZlbnQ7XG4gIH0+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGFuIGhvdXIgc2VnbWVudCBpcyBjbGlja2VkXG4gICAqL1xuICBAT3V0cHV0KCkgaG91clNlZ21lbnRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgZGF0ZTogRGF0ZTtcbiAgfT4oKTtcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYW4gZXZlbnQgaXMgcmVzaXplZCBvciBkcmFnZ2VkIGFuZCBkcm9wcGVkXG4gICAqL1xuICBAT3V0cHV0KCkgZXZlbnRUaW1lc0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFxuICAgIENhbGVuZGFyRXZlbnRUaW1lc0NoYW5nZWRFdmVudFxuICA+KCk7XG5cbiAgLyoqXG4gICAqIEFuIG91dHB1dCB0aGF0IHdpbGwgYmUgY2FsbGVkIGJlZm9yZSB0aGUgdmlldyBpcyByZW5kZXJlZCBmb3IgdGhlIGN1cnJlbnQgZGF5LlxuICAgKiBJZiB5b3UgYWRkIHRoZSBgY3NzQ2xhc3NgIHByb3BlcnR5IHRvIGFuIGhvdXIgZ3JpZCBzZWdtZW50IGl0IHdpbGwgYWRkIHRoYXQgY2xhc3MgdG8gdGhlIGhvdXIgc2VnbWVudCBpbiB0aGUgdGVtcGxhdGVcbiAgICovXG4gIEBPdXRwdXQoKSBiZWZvcmVWaWV3UmVuZGVyID0gbmV3IEV2ZW50RW1pdHRlcjxcbiAgICBDYWxlbmRhckRheVZpZXdCZWZvcmVSZW5kZXJFdmVudFxuICA+KCk7XG59XG4iXX0=