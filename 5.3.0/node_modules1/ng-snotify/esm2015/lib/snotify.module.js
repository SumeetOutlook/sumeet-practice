import * as ɵngcc0 from '@angular/core';
var SnotifyModule_1;
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
let SnotifyModule = SnotifyModule_1 = class SnotifyModule {
    static forRoot() {
        return {
            ngModule: SnotifyModule_1,
            providers: [SnotifyService]
        };
    }
};
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
    }], null, null); })();
export { SnotifyModule };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25vdGlmeS5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIm5nOi9uZy1zbm90aWZ5L2xpYi9zbm90aWZ5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQU9wRSxJQUFhLGFBQWEscUJBQTFCLE1BQWEsYUFBYTtBQUMxQixJQUFFLE1BQU0sQ0FBQyxPQUFPO0FBQUssUUFDakIsT0FBTztBQUNYLFlBQU0sUUFBUSxFQUFFLGVBQWE7QUFDN0IsWUFBTSxTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7QUFDakMsU0FBSyxDQUFDO0FBQ04sSUFBRSxDQUFDO0FBQ0gsQ0FBQyxDQUFBO0FBUFksYUFBYSxzQ0FMekIsUUFBUSxDQUFDLFVBQ1I7TUFBTyxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQ3ZCLFlBQVksRUFBRSxDQUFDLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLFFBQVEsQ0FBQyxVQUMzRyxPQUFPLEVBQUUsQ0FBQztlQUFnQixFQUFFLFlBQVksRUFBRSxRQUFRLENBQUMsTUFDcEQsQ0FBQyxJQUNXLGFBQWEsQ0FPekI7Ozs7Ozs7OzBCQUNEOztBQXZCQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFPQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQVBBLEFBQUEsQUFMQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFPQSxBQVBBLEFBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTbm90aWZ5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Nub3RpZnkvc25vdGlmeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTbm90aWZ5U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvc25vdGlmeS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgS2V5c1BpcGUgfSBmcm9tICcuL3BpcGVzL2tleXMucGlwZSc7XHJcbmltcG9ydCB7IFRydW5jYXRlUGlwZSB9IGZyb20gJy4vcGlwZXMvdHJ1bmNhdGUucGlwZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEJ1dHRvbnNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYnV0dG9ucy9idXR0b25zLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFByb21wdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wcm9tcHQvcHJvbXB0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRvYXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RvYXN0L3RvYXN0LmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1Nub3RpZnlDb21wb25lbnQsIFRvYXN0Q29tcG9uZW50LCBUcnVuY2F0ZVBpcGUsIEJ1dHRvbnNDb21wb25lbnQsIFByb21wdENvbXBvbmVudCwgS2V5c1BpcGVdLFxyXG4gIGV4cG9ydHM6IFtTbm90aWZ5Q29tcG9uZW50LCBUcnVuY2F0ZVBpcGUsIEtleXNQaXBlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU25vdGlmeU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxTbm90aWZ5TW9kdWxlPiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogU25vdGlmeU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbU25vdGlmeVNlcnZpY2VdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=