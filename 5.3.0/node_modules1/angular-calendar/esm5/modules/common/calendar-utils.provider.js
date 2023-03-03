import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { getMonthView, getWeekViewHeader, getWeekView, } from 'calendar-utils';
import { DateAdapter } from '../../date-adapters/date-adapter';
import * as ɵngcc0 from '@angular/core';
var CalendarUtils = /** @class */ (function () {
    function CalendarUtils(dateAdapter) {
        this.dateAdapter = dateAdapter;
    }
    CalendarUtils.prototype.getMonthView = function (args) {
        return getMonthView(this.dateAdapter, args);
    };
    CalendarUtils.prototype.getWeekViewHeader = function (args) {
        return getWeekViewHeader(this.dateAdapter, args);
    };
    CalendarUtils.prototype.getWeekView = function (args) {
        return getWeekView(this.dateAdapter, args);
    };
    CalendarUtils.ctorParameters = function () { return [
        { type: DateAdapter }
    ]; };
    CalendarUtils = __decorate([ __metadata("design:paramtypes", [DateAdapter])
    ], CalendarUtils);
CalendarUtils.ɵfac = function CalendarUtils_Factory(t) { return new (t || CalendarUtils)(ɵngcc0.ɵɵinject(DateAdapter)); };
CalendarUtils.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: CalendarUtils, factory: function (t) { return CalendarUtils.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarUtils, [{
        type: Injectable
    }], function () { return [{ type: DateAdapter }]; }, null); })();
    return CalendarUtils;
}());
export { CalendarUtils };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItdXRpbHMucHJvdmlkZXIuanMiLCJzb3VyY2VzIjpbIm5nOi9hbmd1bGFyLWNhbGVuZGFyL21vZHVsZXMvY29tbW9uL2NhbGVuZGFyLXV0aWxzLnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFPTCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLFdBQVcsR0FDWixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7QUFHL0Q7QUFDb0IsSUFBbEIsdUJBQXNCLFdBQXdCO0FBQUksUUFBNUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7QUFBQyxJQUFFLENBQUM7QUFDcEQsSUFDRSxvQ0FBWSxHQUFaLFVBQWEsSUFBc0I7QUFBSSxRQUNyQyxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2hELElBQUUsQ0FBQztBQUVILElBQUUseUNBQWlCLEdBQWpCLFVBQWtCLElBQTJCO0FBQUksUUFDL0MsT0FBTyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3JELElBQUUsQ0FBQztBQUVILElBQUUsbUNBQVcsR0FBWCxVQUFZLElBQXFCO0FBQUksUUFDbkMsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMvQyxJQUFFLENBQUM7QUFDRjtBQUN3RCxnQkFkcEIsV0FBVztBQUFHO0FBRTVDLElBSE0sYUFBYSx3QkFEekIsVUFBVSxFQUFFLHJCQUNMLGtDQUM2QixXQUFXO0FBQUcsT0FEdEMsYUFBYSxDQWN6Qjs7Ozs7cUVBQ0Q7QUFBQyxJQURELG9CQUFDO0FBQ0EsQ0FEQSxBQWRELElBY0M7QUFDRCxTQWZhLGFBQWE7QUFDekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBHZXRNb250aFZpZXdBcmdzLFxuICBNb250aFZpZXcsXG4gIEdldFdlZWtWaWV3SGVhZGVyQXJncyxcbiAgV2Vla0RheSxcbiAgR2V0V2Vla1ZpZXdBcmdzLFxuICBXZWVrVmlldyxcbiAgZ2V0TW9udGhWaWV3LFxuICBnZXRXZWVrVmlld0hlYWRlcixcbiAgZ2V0V2Vla1ZpZXcsXG59IGZyb20gJ2NhbGVuZGFyLXV0aWxzJztcbmltcG9ydCB7IERhdGVBZGFwdGVyIH0gZnJvbSAnLi4vLi4vZGF0ZS1hZGFwdGVycy9kYXRlLWFkYXB0ZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJVdGlscyB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBkYXRlQWRhcHRlcjogRGF0ZUFkYXB0ZXIpIHt9XG5cbiAgZ2V0TW9udGhWaWV3KGFyZ3M6IEdldE1vbnRoVmlld0FyZ3MpOiBNb250aFZpZXcge1xuICAgIHJldHVybiBnZXRNb250aFZpZXcodGhpcy5kYXRlQWRhcHRlciwgYXJncyk7XG4gIH1cblxuICBnZXRXZWVrVmlld0hlYWRlcihhcmdzOiBHZXRXZWVrVmlld0hlYWRlckFyZ3MpOiBXZWVrRGF5W10ge1xuICAgIHJldHVybiBnZXRXZWVrVmlld0hlYWRlcih0aGlzLmRhdGVBZGFwdGVyLCBhcmdzKTtcbiAgfVxuXG4gIGdldFdlZWtWaWV3KGFyZ3M6IEdldFdlZWtWaWV3QXJncyk6IFdlZWtWaWV3IHtcbiAgICByZXR1cm4gZ2V0V2Vla1ZpZXcodGhpcy5kYXRlQWRhcHRlciwgYXJncyk7XG4gIH1cbn1cbiJdfQ==