import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { formatDate, I18nPluralPipe } from '@angular/common';
/**
 * This class is responsible for adding accessibility to the calendar.
 * You may override any of its methods via angulars DI to suit your requirements.
 * For example:
 *
 * ```typescript
 * import { A11yParams, CalendarA11y } from 'angular-calendar';
 * import { formatDate, I18nPluralPipe } from '@angular/common';
 * import { Injectable } from '@angular/core';
 *
 * // adding your own a11y params
 * export interface CustomA11yParams extends A11yParams {
 *   isDrSuess?: boolean;
 * }
 *
 * @Injectable()
 * export class CustomCalendarA11y extends CalendarA11y {
 *   constructor(protected i18nPlural: I18nPluralPipe) {
 *     super(i18nPlural);
 *   }
 *
 *   // overriding a function
 *   public openDayEventsLandmark({ date, locale, isDrSuess }: CustomA11yParams): string {
 *     if (isDrSuess) {
 *       return `
 *         ${formatDate(date, 'EEEE MMMM d', locale)}
 *          Today you are you! That is truer than true! There is no one alive
 *          who is you-er than you!
 *       `;
 *     }
 *   }
 * }
 *
 * // in your component that uses the calendar
 * providers: [{
 *  provide: CalendarA11y,
 *  useClass: CustomCalendarA11y
 * }]
 * ```
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
let CalendarA11y = class CalendarA11y {
    constructor(i18nPlural) {
        this.i18nPlural = i18nPlural;
    }
    /**
     * Aria label for the badges/date of a cell
     * @example: `Saturday October 19 1 event click to expand`
     */
    monthCell({ day, locale }) {
        if (day.badgeTotal > 0) {
            return `
        ${formatDate(day.date, 'EEEE MMMM d', locale)},
        ${this.i18nPlural.transform(day.badgeTotal, {
                '=0': 'No events',
                '=1': 'One event',
                other: '# events',
            })},
         click to expand
      `;
        }
        else {
            return `${formatDate(day.date, 'EEEE MMMM d', locale)}`;
        }
    }
    /**
     * Aria label for the open day events start landmark
     * @example: `Saturday October 19 expanded view`
     */
    openDayEventsLandmark({ date, locale }) {
        return `
      Beginning of expanded view for ${formatDate(date, 'EEEE MMMM dd', locale)}
    `;
    }
    /**
     * Aria label for alert that a day in the month view was expanded
     * @example: `Saturday October 19 expanded`
     */
    openDayEventsAlert({ date, locale }) {
        return `${formatDate(date, 'EEEE MMMM dd', locale)} expanded`;
    }
    /**
     * Descriptive aria label for an event
     * @example: `Saturday October 19th, Scott's Pizza Party, from 11:00am to 5:00pm`
     */
    eventDescription({ event, locale }) {
        if (event.allDay === true) {
            return this.allDayEventDescription({ event, locale });
        }
        const aria = `
      ${formatDate(event.start, 'EEEE MMMM dd', locale)},
      ${event.title}, from ${formatDate(event.start, 'hh:mm a', locale)}
    `;
        if (event.end) {
            return aria + ` to ${formatDate(event.end, 'hh:mm a', locale)}`;
        }
        return aria;
    }
    /**
     * Descriptive aria label for an all day event
     * @example:
     * `Scott's Party, event spans multiple days: start time October 19 5:00pm, no stop time`
     */
    allDayEventDescription({ event, locale }) {
        const aria = `
      ${event.title}, event spans multiple days:
      start time ${formatDate(event.start, 'MMMM dd hh:mm a', locale)}
    `;
        if (event.end) {
            return (aria + `, stop time ${formatDate(event.end, 'MMMM d hh:mm a', locale)}`);
        }
        return aria + `, no stop time`;
    }
    /**
     * Aria label for the calendar event actions icons
     * @returns 'Edit' for fa-pencil icons, and 'Delete' for fa-times icons
     */
    actionButtonLabel({ action }) {
        return action.a11yLabel;
    }
    /**
     * @returns {number} Tab index to be given to month cells
     */
    monthCellTabIndex() {
        return 0;
    }
    /**
     * @returns true if the events inside the month cell should be aria-hidden
     */
    hideMonthCellEvents() {
        return true;
    }
    /**
     * @returns true if event titles should be aria-hidden (global)
     */
    hideEventTitle() {
        return true;
    }
    /**
     * @returns true if hour segments in the week view should be aria-hidden
     */
    hideWeekHourSegment() {
        return true;
    }
    /**
     * @returns true if hour segments in the day view should be aria-hidden
     */
    hideDayHourSegment() {
        return true;
    }
};
CalendarA11y.ɵfac = function CalendarA11y_Factory(t) { return new (t || CalendarA11y)(ɵngcc0.ɵɵinject(ɵngcc1.I18nPluralPipe)); };
CalendarA11y.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: CalendarA11y, factory: function (t) { return CalendarA11y.ɵfac(t); } });
CalendarA11y.ctorParameters = () => [
    { type: I18nPluralPipe }
];
CalendarA11y = __decorate([ __metadata("design:paramtypes", [I18nPluralPipe])
], CalendarA11y);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarA11y, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc1.I18nPluralPipe }]; }, null); })();
export { CalendarA11y };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItYTExeS5wcm92aWRlci5qcyIsInNvdXJjZXMiOlsibmc6L2FuZ3VsYXItY2FsZW5kYXIvbW9kdWxlcy9jb21tb24vY2FsZW5kYXItYTExeS5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUVILElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7QUFDekIsSUFBRSxZQUFzQixVQUEwQjtBQUFJLFFBQTlCLGVBQVUsR0FBVixVQUFVLENBQWdCO0FBQUMsSUFBRSxDQUFDO0FBQ3RELElBQ0U7QUFDRjtBQUNFO0FBQ0UsT0FBQztBQUNMLElBQVMsU0FBUyxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBYztBQUFJLFFBQzlDLElBQUksR0FBRyxDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQUU7QUFDNUIsWUFBTSxPQUFPO0FBQ2IsVUFBVSxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsTUFBTSxDQUFDO0FBQ3JELFVBQVUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRTtBQUNwRCxnQkFBVSxJQUFJLEVBQUUsV0FBVztBQUMzQixnQkFBVSxJQUFJLEVBQUUsV0FBVztBQUMzQixnQkFBVSxLQUFLLEVBQUUsVUFBVTtBQUMzQixhQUFT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QWM7QUFBSyxRQUN4QixPQUFPLElBQUksQ0FBQztBQUNoQixJQUFFLENBQUM7QUFDSCxJQUNFO0FBQ0Y7QUFDRSxPQUFHO0FBQ0wsSUFBUyxtQkFBbUI7QUFBSyxRQUM3QixPQUFPLElBQUksQ0FBQztBQUNoQixJQUFFLENBQUM7QUFDSCxJQUNFO0FBQ0Y7QUFDRSxPQUFHO0FBQ0wsSUFBUyxrQkFBa0I7QUFBSyxRQUM1QixPQUFPLElBQUksQ0FBQztBQUNoQixJQUFFLENBQUM7QUFDSCxDQUFDOztnSUFBQTtBQUNEO0FBQXNDLFlBeEhGLGNBQWM7QUFBRztBQUR4QyxZQUFZLG9CQUR4QixVQUFVLEVBQUUsakJBQ1Qsa0NBQ2dDLGNBQWM7QUFBRyxHQUR4QyxZQUFZLENBd0h4Qjs7OytFQUNEO0FBQUMsU0F6SFksWUFBWTtBQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZvcm1hdERhdGUsIEkxOG5QbHVyYWxQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEExMXlQYXJhbXMgfSBmcm9tICcuL2NhbGVuZGFyLWExMXkuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIHJlc3BvbnNpYmxlIGZvciBhZGRpbmcgYWNjZXNzaWJpbGl0eSB0byB0aGUgY2FsZW5kYXIuXG4gKiBZb3UgbWF5IG92ZXJyaWRlIGFueSBvZiBpdHMgbWV0aG9kcyB2aWEgYW5ndWxhcnMgREkgdG8gc3VpdCB5b3VyIHJlcXVpcmVtZW50cy5cbiAqIEZvciBleGFtcGxlOlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEExMXlQYXJhbXMsIENhbGVuZGFyQTExeSB9IGZyb20gJ2FuZ3VsYXItY2FsZW5kYXInO1xuICogaW1wb3J0IHsgZm9ybWF0RGF0ZSwgSTE4blBsdXJhbFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuICogaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuICpcbiAqIC8vIGFkZGluZyB5b3VyIG93biBhMTF5IHBhcmFtc1xuICogZXhwb3J0IGludGVyZmFjZSBDdXN0b21BMTF5UGFyYW1zIGV4dGVuZHMgQTExeVBhcmFtcyB7XG4gKiAgIGlzRHJTdWVzcz86IGJvb2xlYW47XG4gKiB9XG4gKlxuICogQEluamVjdGFibGUoKVxuICogZXhwb3J0IGNsYXNzIEN1c3RvbUNhbGVuZGFyQTExeSBleHRlbmRzIENhbGVuZGFyQTExeSB7XG4gKiAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBpMThuUGx1cmFsOiBJMThuUGx1cmFsUGlwZSkge1xuICogICAgIHN1cGVyKGkxOG5QbHVyYWwpO1xuICogICB9XG4gKlxuICogICAvLyBvdmVycmlkaW5nIGEgZnVuY3Rpb25cbiAqICAgcHVibGljIG9wZW5EYXlFdmVudHNMYW5kbWFyayh7IGRhdGUsIGxvY2FsZSwgaXNEclN1ZXNzIH06IEN1c3RvbUExMXlQYXJhbXMpOiBzdHJpbmcge1xuICogICAgIGlmIChpc0RyU3Vlc3MpIHtcbiAqICAgICAgIHJldHVybiBgXG4gKiAgICAgICAgICR7Zm9ybWF0RGF0ZShkYXRlLCAnRUVFRSBNTU1NIGQnLCBsb2NhbGUpfVxuICogICAgICAgICAgVG9kYXkgeW91IGFyZSB5b3UhIFRoYXQgaXMgdHJ1ZXIgdGhhbiB0cnVlISBUaGVyZSBpcyBubyBvbmUgYWxpdmVcbiAqICAgICAgICAgIHdobyBpcyB5b3UtZXIgdGhhbiB5b3UhXG4gKiAgICAgICBgO1xuICogICAgIH1cbiAqICAgfVxuICogfVxuICpcbiAqIC8vIGluIHlvdXIgY29tcG9uZW50IHRoYXQgdXNlcyB0aGUgY2FsZW5kYXJcbiAqIHByb3ZpZGVyczogW3tcbiAqICBwcm92aWRlOiBDYWxlbmRhckExMXksXG4gKiAgdXNlQ2xhc3M6IEN1c3RvbUNhbGVuZGFyQTExeVxuICogfV1cbiAqIGBgYFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJBMTF5IHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGkxOG5QbHVyYWw6IEkxOG5QbHVyYWxQaXBlKSB7fVxuXG4gIC8qKlxuICAgKiBBcmlhIGxhYmVsIGZvciB0aGUgYmFkZ2VzL2RhdGUgb2YgYSBjZWxsXG4gICAqIEBleGFtcGxlOiBgU2F0dXJkYXkgT2N0b2JlciAxOSAxIGV2ZW50IGNsaWNrIHRvIGV4cGFuZGBcbiAgICovXG4gIHB1YmxpYyBtb250aENlbGwoeyBkYXksIGxvY2FsZSB9OiBBMTF5UGFyYW1zKTogc3RyaW5nIHtcbiAgICBpZiAoZGF5LmJhZGdlVG90YWwgPiAwKSB7XG4gICAgICByZXR1cm4gYFxuICAgICAgICAke2Zvcm1hdERhdGUoZGF5LmRhdGUsICdFRUVFIE1NTU0gZCcsIGxvY2FsZSl9LFxuICAgICAgICAke3RoaXMuaTE4blBsdXJhbC50cmFuc2Zvcm0oZGF5LmJhZGdlVG90YWwsIHtcbiAgICAgICAgICAnPTAnOiAnTm8gZXZlbnRzJyxcbiAgICAgICAgICAnPTEnOiAnT25lIGV2ZW50JyxcbiAgICAgICAgICBvdGhlcjogJyMgZXZlbnRzJyxcbiAgICAgICAgfSl9LFxuICAgICAgICAgY2xpY2sgdG8gZXhwYW5kXG4gICAgICBgO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYCR7Zm9ybWF0RGF0ZShkYXkuZGF0ZSwgJ0VFRUUgTU1NTSBkJywgbG9jYWxlKX1gO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBcmlhIGxhYmVsIGZvciB0aGUgb3BlbiBkYXkgZXZlbnRzIHN0YXJ0IGxhbmRtYXJrXG4gICAqIEBleGFtcGxlOiBgU2F0dXJkYXkgT2N0b2JlciAxOSBleHBhbmRlZCB2aWV3YFxuICAgKi9cbiAgcHVibGljIG9wZW5EYXlFdmVudHNMYW5kbWFyayh7IGRhdGUsIGxvY2FsZSB9OiBBMTF5UGFyYW1zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgICAgQmVnaW5uaW5nIG9mIGV4cGFuZGVkIHZpZXcgZm9yICR7Zm9ybWF0RGF0ZShkYXRlLCAnRUVFRSBNTU1NIGRkJywgbG9jYWxlKX1cbiAgICBgO1xuICB9XG5cbiAgLyoqXG4gICAqIEFyaWEgbGFiZWwgZm9yIGFsZXJ0IHRoYXQgYSBkYXkgaW4gdGhlIG1vbnRoIHZpZXcgd2FzIGV4cGFuZGVkXG4gICAqIEBleGFtcGxlOiBgU2F0dXJkYXkgT2N0b2JlciAxOSBleHBhbmRlZGBcbiAgICovXG4gIHB1YmxpYyBvcGVuRGF5RXZlbnRzQWxlcnQoeyBkYXRlLCBsb2NhbGUgfTogQTExeVBhcmFtcyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke2Zvcm1hdERhdGUoZGF0ZSwgJ0VFRUUgTU1NTSBkZCcsIGxvY2FsZSl9IGV4cGFuZGVkYDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNjcmlwdGl2ZSBhcmlhIGxhYmVsIGZvciBhbiBldmVudFxuICAgKiBAZXhhbXBsZTogYFNhdHVyZGF5IE9jdG9iZXIgMTl0aCwgU2NvdHQncyBQaXp6YSBQYXJ0eSwgZnJvbSAxMTowMGFtIHRvIDU6MDBwbWBcbiAgICovXG4gIHB1YmxpYyBldmVudERlc2NyaXB0aW9uKHsgZXZlbnQsIGxvY2FsZSB9OiBBMTF5UGFyYW1zKTogc3RyaW5nIHtcbiAgICBpZiAoZXZlbnQuYWxsRGF5ID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5hbGxEYXlFdmVudERlc2NyaXB0aW9uKHsgZXZlbnQsIGxvY2FsZSB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBhcmlhID0gYFxuICAgICAgJHtmb3JtYXREYXRlKGV2ZW50LnN0YXJ0LCAnRUVFRSBNTU1NIGRkJywgbG9jYWxlKX0sXG4gICAgICAke2V2ZW50LnRpdGxlfSwgZnJvbSAke2Zvcm1hdERhdGUoZXZlbnQuc3RhcnQsICdoaDptbSBhJywgbG9jYWxlKX1cbiAgICBgO1xuICAgIGlmIChldmVudC5lbmQpIHtcbiAgICAgIHJldHVybiBhcmlhICsgYCB0byAke2Zvcm1hdERhdGUoZXZlbnQuZW5kLCAnaGg6bW0gYScsIGxvY2FsZSl9YDtcbiAgICB9XG4gICAgcmV0dXJuIGFyaWE7XG4gIH1cblxuICAvKipcbiAgICogRGVzY3JpcHRpdmUgYXJpYSBsYWJlbCBmb3IgYW4gYWxsIGRheSBldmVudFxuICAgKiBAZXhhbXBsZTpcbiAgICogYFNjb3R0J3MgUGFydHksIGV2ZW50IHNwYW5zIG11bHRpcGxlIGRheXM6IHN0YXJ0IHRpbWUgT2N0b2JlciAxOSA1OjAwcG0sIG5vIHN0b3AgdGltZWBcbiAgICovXG4gIHB1YmxpYyBhbGxEYXlFdmVudERlc2NyaXB0aW9uKHsgZXZlbnQsIGxvY2FsZSB9OiBBMTF5UGFyYW1zKTogc3RyaW5nIHtcbiAgICBjb25zdCBhcmlhID0gYFxuICAgICAgJHtldmVudC50aXRsZX0sIGV2ZW50IHNwYW5zIG11bHRpcGxlIGRheXM6XG4gICAgICBzdGFydCB0aW1lICR7Zm9ybWF0RGF0ZShldmVudC5zdGFydCwgJ01NTU0gZGQgaGg6bW0gYScsIGxvY2FsZSl9XG4gICAgYDtcbiAgICBpZiAoZXZlbnQuZW5kKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBhcmlhICsgYCwgc3RvcCB0aW1lICR7Zm9ybWF0RGF0ZShldmVudC5lbmQsICdNTU1NIGQgaGg6bW0gYScsIGxvY2FsZSl9YFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGFyaWEgKyBgLCBubyBzdG9wIHRpbWVgO1xuICB9XG5cbiAgLyoqXG4gICAqIEFyaWEgbGFiZWwgZm9yIHRoZSBjYWxlbmRhciBldmVudCBhY3Rpb25zIGljb25zXG4gICAqIEByZXR1cm5zICdFZGl0JyBmb3IgZmEtcGVuY2lsIGljb25zLCBhbmQgJ0RlbGV0ZScgZm9yIGZhLXRpbWVzIGljb25zXG4gICAqL1xuICBwdWJsaWMgYWN0aW9uQnV0dG9uTGFiZWwoeyBhY3Rpb24gfTogQTExeVBhcmFtcyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGFjdGlvbi5hMTF5TGFiZWw7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMge251bWJlcn0gVGFiIGluZGV4IHRvIGJlIGdpdmVuIHRvIG1vbnRoIGNlbGxzXG4gICAqL1xuICBwdWJsaWMgbW9udGhDZWxsVGFiSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB0cnVlIGlmIHRoZSBldmVudHMgaW5zaWRlIHRoZSBtb250aCBjZWxsIHNob3VsZCBiZSBhcmlhLWhpZGRlblxuICAgKi9cbiAgcHVibGljIGhpZGVNb250aENlbGxFdmVudHMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgdHJ1ZSBpZiBldmVudCB0aXRsZXMgc2hvdWxkIGJlIGFyaWEtaGlkZGVuIChnbG9iYWwpXG4gICAqL1xuICBwdWJsaWMgaGlkZUV2ZW50VGl0bGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgdHJ1ZSBpZiBob3VyIHNlZ21lbnRzIGluIHRoZSB3ZWVrIHZpZXcgc2hvdWxkIGJlIGFyaWEtaGlkZGVuXG4gICAqL1xuICBwdWJsaWMgaGlkZVdlZWtIb3VyU2VnbWVudCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB0cnVlIGlmIGhvdXIgc2VnbWVudHMgaW4gdGhlIGRheSB2aWV3IHNob3VsZCBiZSBhcmlhLWhpZGRlblxuICAgKi9cbiAgcHVibGljIGhpZGVEYXlIb3VyU2VnbWVudCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIl19