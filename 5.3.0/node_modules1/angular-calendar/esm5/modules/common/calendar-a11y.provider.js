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
var CalendarA11y = /** @class */ (function () {
    function CalendarA11y(i18nPlural) {
        this.i18nPlural = i18nPlural;
    }
    /**
     * Aria label for the badges/date of a cell
     * @example: `Saturday October 19 1 event click to expand`
     */
    CalendarA11y.prototype.monthCell = function (_a) {
        var day = _a.day, locale = _a.locale;
        if (day.badgeTotal > 0) {
            return "\n        " + formatDate(day.date, 'EEEE MMMM d', locale) + ",\n        " + this.i18nPlural.transform(day.badgeTotal, {
                '=0': 'No events',
                '=1': 'One event',
                other: '# events',
            }) + ",\n         click to expand\n      ";
        }
        else {
            return "" + formatDate(day.date, 'EEEE MMMM d', locale);
        }
    };
    /**
     * Aria label for the open day events start landmark
     * @example: `Saturday October 19 expanded view`
     */
    CalendarA11y.prototype.openDayEventsLandmark = function (_a) {
        var date = _a.date, locale = _a.locale;
        return "\n      Beginning of expanded view for " + formatDate(date, 'EEEE MMMM dd', locale) + "\n    ";
    };
    /**
     * Aria label for alert that a day in the month view was expanded
     * @example: `Saturday October 19 expanded`
     */
    CalendarA11y.prototype.openDayEventsAlert = function (_a) {
        var date = _a.date, locale = _a.locale;
        return formatDate(date, 'EEEE MMMM dd', locale) + " expanded";
    };
    /**
     * Descriptive aria label for an event
     * @example: `Saturday October 19th, Scott's Pizza Party, from 11:00am to 5:00pm`
     */
    CalendarA11y.prototype.eventDescription = function (_a) {
        var event = _a.event, locale = _a.locale;
        if (event.allDay === true) {
            return this.allDayEventDescription({ event: event, locale: locale });
        }
        var aria = "\n      " + formatDate(event.start, 'EEEE MMMM dd', locale) + ",\n      " + event.title + ", from " + formatDate(event.start, 'hh:mm a', locale) + "\n    ";
        if (event.end) {
            return aria + (" to " + formatDate(event.end, 'hh:mm a', locale));
        }
        return aria;
    };
    /**
     * Descriptive aria label for an all day event
     * @example:
     * `Scott's Party, event spans multiple days: start time October 19 5:00pm, no stop time`
     */
    CalendarA11y.prototype.allDayEventDescription = function (_a) {
        var event = _a.event, locale = _a.locale;
        var aria = "\n      " + event.title + ", event spans multiple days:\n      start time " + formatDate(event.start, 'MMMM dd hh:mm a', locale) + "\n    ";
        if (event.end) {
            return (aria + (", stop time " + formatDate(event.end, 'MMMM d hh:mm a', locale)));
        }
        return aria + ", no stop time";
    };
    /**
     * Aria label for the calendar event actions icons
     * @returns 'Edit' for fa-pencil icons, and 'Delete' for fa-times icons
     */
    CalendarA11y.prototype.actionButtonLabel = function (_a) {
        var action = _a.action;
        return action.a11yLabel;
    };
    /**
     * @returns {number} Tab index to be given to month cells
     */
    CalendarA11y.prototype.monthCellTabIndex = function () {
        return 0;
    };
    /**
     * @returns true if the events inside the month cell should be aria-hidden
     */
    CalendarA11y.prototype.hideMonthCellEvents = function () {
        return true;
    };
    /**
     * @returns true if event titles should be aria-hidden (global)
     */
    CalendarA11y.prototype.hideEventTitle = function () {
        return true;
    };
    /**
     * @returns true if hour segments in the week view should be aria-hidden
     */
    CalendarA11y.prototype.hideWeekHourSegment = function () {
        return true;
    };
    /**
     * @returns true if hour segments in the day view should be aria-hidden
     */
    CalendarA11y.prototype.hideDayHourSegment = function () {
        return true;
    };
    CalendarA11y.ctorParameters = function () { return [
        { type: I18nPluralPipe }
    ]; };
    CalendarA11y = __decorate([ __metadata("design:paramtypes", [I18nPluralPipe])
    ], CalendarA11y);
CalendarA11y.ɵfac = function CalendarA11y_Factory(t) { return new (t || CalendarA11y)(ɵngcc0.ɵɵinject(ɵngcc1.I18nPluralPipe)); };
CalendarA11y.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: CalendarA11y, factory: function (t) { return CalendarA11y.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarA11y, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc1.I18nPluralPipe }]; }, null); })();
    return CalendarA11y;
}());
export { CalendarA11y };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItYTExeS5wcm92aWRlci5qcyIsInNvdXJjZXMiOlsibmc6L2FuZ3VsYXItY2FsZW5kYXIvbW9kdWxlcy9jb21tb24vY2FsZW5kYXItYTExeS5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUVIO0FBQ29CLElBQWxCLHNCQUFzQixVQUEwQjtBQUFJLFFBQTlCLGVBQVUsR0FBVixVQUFVLENBQWdCO0FBQUMsSUFBRSxDQUFDO0FBQ3RELElBQ0U7QUFDRjtBQUNFO0FBQ0UsT0FBQztBQUNMLElBQVMsZ0NBQVMsR0FBaEIsVUFBaUIsRUFBMkI7QUFBSSxZQUE3QixZQUFHLEVBQUUsa0JBQU07QUFBRSxRQUM5QixJQUFJLEdBQUcsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUFFO0FBQzVCLFlBQU0sT0FBTyxlQUNILFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxNQUFNLENBQUMsbUJBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUU7QUFDcEQsZ0JBQVUsSUFBSSxFQUFFLFdBQVc7QUFDM0IsZ0JBQVUsSUFBSSxFQUFFLFdBQVc7QUFDM0IsZ0JBQVUsS0FBSyxFQUFFLFVBQVU7QUFDM0IsYUFBUyxDQUFDLHdDQUVILENBQUM7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RSxPQUFHO0FBQ0wsSUFBUyxxQ0FBYyxHQUFyQjtBQUFjLFFBQ1osT0FBTyxJQUFJLENBQUM7QUFDaEIsSUFBRSxDQUFDO0FBRUgsSUFBRTtBQUNGO0FBQ0UsT0FBRztBQUNMLElBQVMsMENBQW1CLEdBQTFCO0FBQWMsUUFDWixPQUFPLElBQUksQ0FBQztBQUNoQixJQUFFLENBQUM7QUFFSCxJQUFFO0FBQ0Y7QUFDRSxPQUFHO0FBQ0wsSUFBUyx5Q0FBa0IsR0FBekI7QUFBYyxRQUNaLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLElBQUUsQ0FBQztBQUNGO0FBQ3VELGdCQXhIcEIsY0FBYztBQUFHO0FBR3BELElBSlksWUFBWSx3QkFEeEIsVUFBVSxFQUFFLHJCQUNMLGtDQUM0QixjQUFjO0FBQUcsT0FEeEMsWUFBWSxDQXdIeEI7Ozs7OytFQUNEO0FBQUMsSUFERCxtQkFBQztBQUNBLENBREEsQUF4SEQsSUF3SEM7QUFDRCxTQXpIYSxZQUFZO0FBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSwgSTE4blBsdXJhbFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQTExeVBhcmFtcyB9IGZyb20gJy4vY2FsZW5kYXItYTExeS5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgcmVzcG9uc2libGUgZm9yIGFkZGluZyBhY2Nlc3NpYmlsaXR5IHRvIHRoZSBjYWxlbmRhci5cbiAqIFlvdSBtYXkgb3ZlcnJpZGUgYW55IG9mIGl0cyBtZXRob2RzIHZpYSBhbmd1bGFycyBESSB0byBzdWl0IHlvdXIgcmVxdWlyZW1lbnRzLlxuICogRm9yIGV4YW1wbGU6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQTExeVBhcmFtcywgQ2FsZW5kYXJBMTF5IH0gZnJvbSAnYW5ndWxhci1jYWxlbmRhcic7XG4gKiBpbXBvcnQgeyBmb3JtYXREYXRlLCBJMThuUGx1cmFsUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG4gKiBpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4gKlxuICogLy8gYWRkaW5nIHlvdXIgb3duIGExMXkgcGFyYW1zXG4gKiBleHBvcnQgaW50ZXJmYWNlIEN1c3RvbUExMXlQYXJhbXMgZXh0ZW5kcyBBMTF5UGFyYW1zIHtcbiAqICAgaXNEclN1ZXNzPzogYm9vbGVhbjtcbiAqIH1cbiAqXG4gKiBASW5qZWN0YWJsZSgpXG4gKiBleHBvcnQgY2xhc3MgQ3VzdG9tQ2FsZW5kYXJBMTF5IGV4dGVuZHMgQ2FsZW5kYXJBMTF5IHtcbiAqICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGkxOG5QbHVyYWw6IEkxOG5QbHVyYWxQaXBlKSB7XG4gKiAgICAgc3VwZXIoaTE4blBsdXJhbCk7XG4gKiAgIH1cbiAqXG4gKiAgIC8vIG92ZXJyaWRpbmcgYSBmdW5jdGlvblxuICogICBwdWJsaWMgb3BlbkRheUV2ZW50c0xhbmRtYXJrKHsgZGF0ZSwgbG9jYWxlLCBpc0RyU3Vlc3MgfTogQ3VzdG9tQTExeVBhcmFtcyk6IHN0cmluZyB7XG4gKiAgICAgaWYgKGlzRHJTdWVzcykge1xuICogICAgICAgcmV0dXJuIGBcbiAqICAgICAgICAgJHtmb3JtYXREYXRlKGRhdGUsICdFRUVFIE1NTU0gZCcsIGxvY2FsZSl9XG4gKiAgICAgICAgICBUb2RheSB5b3UgYXJlIHlvdSEgVGhhdCBpcyB0cnVlciB0aGFuIHRydWUhIFRoZXJlIGlzIG5vIG9uZSBhbGl2ZVxuICogICAgICAgICAgd2hvIGlzIHlvdS1lciB0aGFuIHlvdSFcbiAqICAgICAgIGA7XG4gKiAgICAgfVxuICogICB9XG4gKiB9XG4gKlxuICogLy8gaW4geW91ciBjb21wb25lbnQgdGhhdCB1c2VzIHRoZSBjYWxlbmRhclxuICogcHJvdmlkZXJzOiBbe1xuICogIHByb3ZpZGU6IENhbGVuZGFyQTExeSxcbiAqICB1c2VDbGFzczogQ3VzdG9tQ2FsZW5kYXJBMTF5XG4gKiB9XVxuICogYGBgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckExMXkge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaTE4blBsdXJhbDogSTE4blBsdXJhbFBpcGUpIHt9XG5cbiAgLyoqXG4gICAqIEFyaWEgbGFiZWwgZm9yIHRoZSBiYWRnZXMvZGF0ZSBvZiBhIGNlbGxcbiAgICogQGV4YW1wbGU6IGBTYXR1cmRheSBPY3RvYmVyIDE5IDEgZXZlbnQgY2xpY2sgdG8gZXhwYW5kYFxuICAgKi9cbiAgcHVibGljIG1vbnRoQ2VsbCh7IGRheSwgbG9jYWxlIH06IEExMXlQYXJhbXMpOiBzdHJpbmcge1xuICAgIGlmIChkYXkuYmFkZ2VUb3RhbCA+IDApIHtcbiAgICAgIHJldHVybiBgXG4gICAgICAgICR7Zm9ybWF0RGF0ZShkYXkuZGF0ZSwgJ0VFRUUgTU1NTSBkJywgbG9jYWxlKX0sXG4gICAgICAgICR7dGhpcy5pMThuUGx1cmFsLnRyYW5zZm9ybShkYXkuYmFkZ2VUb3RhbCwge1xuICAgICAgICAgICc9MCc6ICdObyBldmVudHMnLFxuICAgICAgICAgICc9MSc6ICdPbmUgZXZlbnQnLFxuICAgICAgICAgIG90aGVyOiAnIyBldmVudHMnLFxuICAgICAgICB9KX0sXG4gICAgICAgICBjbGljayB0byBleHBhbmRcbiAgICAgIGA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBgJHtmb3JtYXREYXRlKGRheS5kYXRlLCAnRUVFRSBNTU1NIGQnLCBsb2NhbGUpfWA7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFyaWEgbGFiZWwgZm9yIHRoZSBvcGVuIGRheSBldmVudHMgc3RhcnQgbGFuZG1hcmtcbiAgICogQGV4YW1wbGU6IGBTYXR1cmRheSBPY3RvYmVyIDE5IGV4cGFuZGVkIHZpZXdgXG4gICAqL1xuICBwdWJsaWMgb3BlbkRheUV2ZW50c0xhbmRtYXJrKHsgZGF0ZSwgbG9jYWxlIH06IEExMXlQYXJhbXMpOiBzdHJpbmcge1xuICAgIHJldHVybiBgXG4gICAgICBCZWdpbm5pbmcgb2YgZXhwYW5kZWQgdmlldyBmb3IgJHtmb3JtYXREYXRlKGRhdGUsICdFRUVFIE1NTU0gZGQnLCBsb2NhbGUpfVxuICAgIGA7XG4gIH1cblxuICAvKipcbiAgICogQXJpYSBsYWJlbCBmb3IgYWxlcnQgdGhhdCBhIGRheSBpbiB0aGUgbW9udGggdmlldyB3YXMgZXhwYW5kZWRcbiAgICogQGV4YW1wbGU6IGBTYXR1cmRheSBPY3RvYmVyIDE5IGV4cGFuZGVkYFxuICAgKi9cbiAgcHVibGljIG9wZW5EYXlFdmVudHNBbGVydCh7IGRhdGUsIGxvY2FsZSB9OiBBMTF5UGFyYW1zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7Zm9ybWF0RGF0ZShkYXRlLCAnRUVFRSBNTU1NIGRkJywgbG9jYWxlKX0gZXhwYW5kZWRgO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2NyaXB0aXZlIGFyaWEgbGFiZWwgZm9yIGFuIGV2ZW50XG4gICAqIEBleGFtcGxlOiBgU2F0dXJkYXkgT2N0b2JlciAxOXRoLCBTY290dCdzIFBpenphIFBhcnR5LCBmcm9tIDExOjAwYW0gdG8gNTowMHBtYFxuICAgKi9cbiAgcHVibGljIGV2ZW50RGVzY3JpcHRpb24oeyBldmVudCwgbG9jYWxlIH06IEExMXlQYXJhbXMpOiBzdHJpbmcge1xuICAgIGlmIChldmVudC5hbGxEYXkgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmFsbERheUV2ZW50RGVzY3JpcHRpb24oeyBldmVudCwgbG9jYWxlIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGFyaWEgPSBgXG4gICAgICAke2Zvcm1hdERhdGUoZXZlbnQuc3RhcnQsICdFRUVFIE1NTU0gZGQnLCBsb2NhbGUpfSxcbiAgICAgICR7ZXZlbnQudGl0bGV9LCBmcm9tICR7Zm9ybWF0RGF0ZShldmVudC5zdGFydCwgJ2hoOm1tIGEnLCBsb2NhbGUpfVxuICAgIGA7XG4gICAgaWYgKGV2ZW50LmVuZCkge1xuICAgICAgcmV0dXJuIGFyaWEgKyBgIHRvICR7Zm9ybWF0RGF0ZShldmVudC5lbmQsICdoaDptbSBhJywgbG9jYWxlKX1gO1xuICAgIH1cbiAgICByZXR1cm4gYXJpYTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNjcmlwdGl2ZSBhcmlhIGxhYmVsIGZvciBhbiBhbGwgZGF5IGV2ZW50XG4gICAqIEBleGFtcGxlOlxuICAgKiBgU2NvdHQncyBQYXJ0eSwgZXZlbnQgc3BhbnMgbXVsdGlwbGUgZGF5czogc3RhcnQgdGltZSBPY3RvYmVyIDE5IDU6MDBwbSwgbm8gc3RvcCB0aW1lYFxuICAgKi9cbiAgcHVibGljIGFsbERheUV2ZW50RGVzY3JpcHRpb24oeyBldmVudCwgbG9jYWxlIH06IEExMXlQYXJhbXMpOiBzdHJpbmcge1xuICAgIGNvbnN0IGFyaWEgPSBgXG4gICAgICAke2V2ZW50LnRpdGxlfSwgZXZlbnQgc3BhbnMgbXVsdGlwbGUgZGF5czpcbiAgICAgIHN0YXJ0IHRpbWUgJHtmb3JtYXREYXRlKGV2ZW50LnN0YXJ0LCAnTU1NTSBkZCBoaDptbSBhJywgbG9jYWxlKX1cbiAgICBgO1xuICAgIGlmIChldmVudC5lbmQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGFyaWEgKyBgLCBzdG9wIHRpbWUgJHtmb3JtYXREYXRlKGV2ZW50LmVuZCwgJ01NTU0gZCBoaDptbSBhJywgbG9jYWxlKX1gXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gYXJpYSArIGAsIG5vIHN0b3AgdGltZWA7XG4gIH1cblxuICAvKipcbiAgICogQXJpYSBsYWJlbCBmb3IgdGhlIGNhbGVuZGFyIGV2ZW50IGFjdGlvbnMgaWNvbnNcbiAgICogQHJldHVybnMgJ0VkaXQnIGZvciBmYS1wZW5jaWwgaWNvbnMsIGFuZCAnRGVsZXRlJyBmb3IgZmEtdGltZXMgaWNvbnNcbiAgICovXG4gIHB1YmxpYyBhY3Rpb25CdXR0b25MYWJlbCh7IGFjdGlvbiB9OiBBMTF5UGFyYW1zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYWN0aW9uLmExMXlMYWJlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBUYWIgaW5kZXggdG8gYmUgZ2l2ZW4gdG8gbW9udGggY2VsbHNcbiAgICovXG4gIHB1YmxpYyBtb250aENlbGxUYWJJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHRydWUgaWYgdGhlIGV2ZW50cyBpbnNpZGUgdGhlIG1vbnRoIGNlbGwgc2hvdWxkIGJlIGFyaWEtaGlkZGVuXG4gICAqL1xuICBwdWJsaWMgaGlkZU1vbnRoQ2VsbEV2ZW50cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB0cnVlIGlmIGV2ZW50IHRpdGxlcyBzaG91bGQgYmUgYXJpYS1oaWRkZW4gKGdsb2JhbClcbiAgICovXG4gIHB1YmxpYyBoaWRlRXZlbnRUaXRsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB0cnVlIGlmIGhvdXIgc2VnbWVudHMgaW4gdGhlIHdlZWsgdmlldyBzaG91bGQgYmUgYXJpYS1oaWRkZW5cbiAgICovXG4gIHB1YmxpYyBoaWRlV2Vla0hvdXJTZWdtZW50KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHRydWUgaWYgaG91ciBzZWdtZW50cyBpbiB0aGUgZGF5IHZpZXcgc2hvdWxkIGJlIGFyaWEtaGlkZGVuXG4gICAqL1xuICBwdWJsaWMgaGlkZURheUhvdXJTZWdtZW50KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iXX0=