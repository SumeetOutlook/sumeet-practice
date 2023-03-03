import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { SnotifyComponent } from './components/snotify/snotify.component';
import { SnotifyService } from './services/snotify.service';
import { KeysPipe } from './pipes/keys.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { PromptComponent } from './components/prompt/prompt.component';
import { ToastComponent } from './components/toast/toast.component';
import * as ɵngcc0 from '@angular/core';
var SnotifyModule = /** @class */ (function () {
    function SnotifyModule() {
    }
    SnotifyModule_1 = SnotifyModule;
    SnotifyModule.forRoot = function () {
        return {
            ngModule: SnotifyModule_1,
            providers: [SnotifyService]
        };
    };
    var SnotifyModule_1;
SnotifyModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: SnotifyModule });
SnotifyModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function SnotifyModule_Factory(t) { return new (t || SnotifyModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SnotifyModule, { declarations: function () { return [SnotifyComponent, ToastComponent, TruncatePipe, ButtonsComponent, PromptComponent, KeysPipe]; }, imports: function () { return [CommonModule]; }, exports: function () { return [SnotifyComponent, TruncatePipe, KeysPipe]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SnotifyModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [SnotifyComponent, ToastComponent, TruncatePipe, ButtonsComponent, PromptComponent, KeysPipe],
                exports: [SnotifyComponent, TruncatePipe, KeysPipe]
            }]
    }], function () { return []; }, null); })();
    return SnotifyModule;
}());
export { SnotifyModule };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25vdGlmeS5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIm5nOi9uZy1zbm90aWZ5L2xpYi9zbm90aWZ5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7O0FBT3BFO0FBQ29CLElBRHBCO0FBQTJCLElBTzNCLENBQUM7QUFDRCxzQkFSYSxhQUFhO0FBQUUsSUFDbkIscUJBQU8sR0FBZDtBQUFjLFFBQ1osT0FBTztBQUNYLFlBQU0sUUFBUSxFQUFFLGVBQWE7QUFDN0IsWUFBTSxTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7QUFDakMsU0FBSyxDQUFDO0FBQ04sSUFBRSxDQUFDO0FBQ0Y7SUFQWSxhQUFhLDBDQUx6QixRQUFRLENBQUM7V0FDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsY0FDdkIsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsUUFBUSxDQUFDO1NBQzNHLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLFlBQVksRUFBRSxRQUFRLENBQUMsVUFDcEQsQ0FBQyxRQUNXLGFBQWEsQ0FPekI7Ozs7Ozs7O2dEQUNEO0FBQUMsSUFERCxvQkFBQztBQUNBLENBREEsQUFQRCxJQU9DOztBQXRCQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFPQSxBQUFBLEFBT0EsQUFBQSxBQVBBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQU5BLEFBQUEsQUFMQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFPQSxBQUFBLEFBQUEsQUFBQSxBQVBBLEFBT0EsQUFQQSxBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU25vdGlmeUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zbm90aWZ5L3Nub3RpZnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU25vdGlmeVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3Nub3RpZnkuc2VydmljZSc7XHJcbmltcG9ydCB7IEtleXNQaXBlIH0gZnJvbSAnLi9waXBlcy9rZXlzLnBpcGUnO1xyXG5pbXBvcnQgeyBUcnVuY2F0ZVBpcGUgfSBmcm9tICcuL3BpcGVzL3RydW5jYXRlLnBpcGUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBCdXR0b25zQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbnMvYnV0dG9ucy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9tcHRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvbXB0L3Byb21wdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUb2FzdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90b2FzdC90b2FzdC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtTbm90aWZ5Q29tcG9uZW50LCBUb2FzdENvbXBvbmVudCwgVHJ1bmNhdGVQaXBlLCBCdXR0b25zQ29tcG9uZW50LCBQcm9tcHRDb21wb25lbnQsIEtleXNQaXBlXSxcclxuICBleHBvcnRzOiBbU25vdGlmeUNvbXBvbmVudCwgVHJ1bmNhdGVQaXBlLCBLZXlzUGlwZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNub3RpZnlNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8U25vdGlmeU1vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFNub3RpZnlNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1Nub3RpZnlTZXJ2aWNlXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19