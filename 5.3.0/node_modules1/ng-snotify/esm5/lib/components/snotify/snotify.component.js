import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { SnotifyService } from '../../services/snotify.service';
import { SnotifyPosition } from '../../enums/snotify-position.enum';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../toast/toast.component';
import * as ɵngcc3 from '../../pipes/keys.pipe';

function SnotifyComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 2);
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("opacity", ctx_r0.backdrop);
} }
function SnotifyComponent_div_1_ng_snotify_toast_1_Template(rf, ctx) { if (rf & 1) {
    var _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ng-snotify-toast", 4);
    ɵngcc0.ɵɵlistener("stateChanged", function SnotifyComponent_div_1_ng_snotify_toast_1_Template_ng_snotify_toast_stateChanged_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); var ctx_r5 = ɵngcc0.ɵɵnextContext(2); return ctx_r5.stateChanged($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var notification_r4 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("toast", notification_r4);
} }
function SnotifyComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, SnotifyComponent_div_1_ng_snotify_toast_1_Template, 1, 1, "ng-snotify-toast", 3);
    ɵngcc0.ɵɵpipe(2, "slice");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var position_r2 = ctx.$implicit;
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("snotify snotify-", position_r2, "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ɵngcc0.ɵɵpipeBind3(2, 4, ctx_r1.notifications[position_r2], ctx_r1.blockSizeA, ctx_r1.blockSizeB));
} }
var SnotifyComponent = /** @class */ (function () {
    function SnotifyComponent(service) {
        this.service = service;
        /**
         * Backdrop Opacity
         */
        this.backdrop = -1;
    }
    /**
     * Init base options. Subscribe to options, lifecycle change
     */
    SnotifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.emitter = this.service.emitter.subscribe(function (toasts) {
            if (_this.service.config.global.newOnTop) {
                _this.dockSizeA = -_this.service.config.global.maxOnScreen;
                _this.dockSizeB = undefined;
                _this.blockSizeA = -_this.service.config.global.maxAtPosition;
                _this.blockSizeB = undefined;
                _this.withBackdrop = toasts.filter(function (toast) { return toast.config.backdrop >= 0; });
            }
            else {
                _this.dockSizeA = 0;
                _this.dockSizeB = _this.service.config.global.maxOnScreen;
                _this.blockSizeA = 0;
                _this.blockSizeB = _this.service.config.global.maxAtPosition;
                _this.withBackdrop = toasts.filter(function (toast) { return toast.config.backdrop >= 0; }).reverse();
            }
            _this.notifications = _this.splitToasts(toasts.slice(_this.dockSizeA, _this.dockSizeB));
            _this.stateChanged('mounted');
        });
    };
    // TODO: fix backdrop if more than one toast called in a row
    /**
     * Changes the backdrop opacity
     * @param event SnotifyEvent
     */
    SnotifyComponent.prototype.stateChanged = function (event) {
        if (!this.withBackdrop.length) {
            if (this.backdrop >= 0) {
                this.backdrop = -1;
            }
            return;
        }
        switch (event) {
            case 'mounted':
                if (this.backdrop < 0) {
                    this.backdrop = 0;
                }
                break;
            case 'beforeShow':
                this.backdrop = this.withBackdrop[this.withBackdrop.length - 1].config.backdrop;
                break;
            case 'beforeHide':
                if (this.withBackdrop.length === 1) {
                    this.backdrop = 0;
                }
                break;
            case 'hidden':
                if (this.withBackdrop.length === 1) {
                    this.backdrop = -1;
                }
                break;
        }
    };
    /**
     * Split toasts toasts into different objects
     * @param toasts SnotifyToast[]
     * @returns SnotifyNotifications
     */
    SnotifyComponent.prototype.splitToasts = function (toasts) {
        var result = {};
        for (var property in SnotifyPosition) {
            if (SnotifyPosition.hasOwnProperty(property)) {
                result[SnotifyPosition[property]] = [];
            }
        }
        toasts.forEach(function (toast) {
            result[toast.config.position].push(toast);
        });
        return result;
    };
    /**
     * Unsubscribe subscriptions
     */
    SnotifyComponent.prototype.ngOnDestroy = function () {
        this.emitter.unsubscribe();
    };
    SnotifyComponent.ctorParameters = function () { return [
        { type: SnotifyService }
    ]; };
SnotifyComponent.ɵfac = function SnotifyComponent_Factory(t) { return new (t || SnotifyComponent)(ɵngcc0.ɵɵdirectiveInject(SnotifyService)); };
SnotifyComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SnotifyComponent, selectors: [["ng-snotify"]], decls: 3, vars: 4, consts: [["class", "snotify-backdrop", 3, "opacity", 4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf"], [1, "snotify-backdrop"], [3, "toast", "stateChanged", 4, "ngFor", "ngForOf"], [3, "toast", "stateChanged"]], template: function SnotifyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, SnotifyComponent_div_0_Template, 1, 2, "div", 0);
        ɵngcc0.ɵɵtemplate(1, SnotifyComponent_div_1_Template, 3, 8, "div", 1);
        ɵngcc0.ɵɵpipe(2, "keys");
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.backdrop >= 0);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ɵngcc0.ɵɵpipeBind1(2, 2, ctx.notifications));
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc2.ToastComponent], pipes: [ɵngcc3.KeysPipe, ɵngcc1.SlicePipe], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SnotifyComponent, [{
        type: Component,
        args: [{
                selector: 'ng-snotify',
                template: "<div class=\"snotify-backdrop\" *ngIf=\"backdrop >= 0\" [style.opacity]=\"backdrop\"></div>\r\n<div *ngFor=\"let position of notifications | keys\" class=\"snotify snotify-{{ position }}\">\r\n  <ng-snotify-toast\r\n    *ngFor=\"let notification of notifications[position] | slice: blockSizeA:blockSizeB\"\r\n    [toast]=\"notification\"\r\n    (stateChanged)=\"stateChanged($event)\"\r\n  >\r\n  </ng-snotify-toast>\r\n</div>\r\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: SnotifyService }]; }, null); })();
    return SnotifyComponent;
}());
export { SnotifyComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25vdGlmeS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIm5nOi9uZy1zbm90aWZ5L2xpYi9jb21wb25lbnRzL3Nub3RpZnkvc25vdGlmeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUloRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFwRTtBQUFvRCxJQWtDbEQsMEJBQW9CLE9BQXVCO0FBQUksUUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7QUFBQyxRQVQ1QztBQUNGO0FBRUEsV0FESztBQUNMLFFBQUUsYUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2hCLElBS2dELENBQUM7QUFDakQsSUFDRTtBQUNGO0FBQ0UsT0FBRztBQUNMLElBQUUsbUNBQVEsR0FBUjtBQUNELFFBREMsaUJBa0JDO0FBQ0gsUUFsQkksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFzQjtBQUFJLFlBQ3ZFLElBQUksS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtBQUMvQyxnQkFBUSxLQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztBQUNqRSxnQkFBUSxLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztBQUNuQyxnQkFBUSxLQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztBQUNwRSxnQkFBUSxLQUFJLENB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QUFFQSxBQUVBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFrQkEsQUFqQkEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFFQSxBQUFBLEFBQ0EsQUFHQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBRUEsQUFJQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUVBLEFBRUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQXJGQSxBQUFBLEFBbENBLEFBQUEsQUFMQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQXdIQSxBQUFBLEFBQUEsQUFBQSxBQXhIQSxBQXdIQSxBQXhIQSxBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU25vdGlmeVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zbm90aWZ5LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTbm90aWZ5VG9hc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvc25vdGlmeS10b2FzdC5tb2RlbCc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBTbm90aWZ5Tm90aWZpY2F0aW9ucyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvc25vdGlmeS1ub3RpZmljYXRpb25zLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFNub3RpZnlQb3NpdGlvbiB9IGZyb20gJy4uLy4uL2VudW1zL3Nub3RpZnktcG9zaXRpb24uZW51bSc7XHJcbmltcG9ydCB7IFNub3RpZnlFdmVudCB9IGZyb20gJy4uLy4uL3R5cGVzL2V2ZW50LnR5cGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZy1zbm90aWZ5JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc25vdGlmeS5jb21wb25lbnQuaHRtbCcsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU25vdGlmeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAvKipcclxuICAgKiBUb2FzdHMgYXJyYXlcclxuICAgKi9cclxuICBub3RpZmljYXRpb25zOiBTbm90aWZ5Tm90aWZpY2F0aW9ucztcclxuICAvKipcclxuICAgKiBUb2FzdHMgZW1pdHRlclxyXG4gICAqL1xyXG4gIGVtaXR0ZXI6IFN1YnNjcmlwdGlvbjtcclxuICAvKipcclxuICAgKiBIZWxwZXIgZm9yIHNsaWNlIHBpcGUgKG1heE9uU2NyZWVuKVxyXG4gICAqL1xyXG4gIGRvY2tTaXplQTogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIEhlbHBlciBmb3Igc2xpY2UgcGlwZSAobWF4T25TY3JlZW4pXHJcbiAgICovXHJcbiAgZG9ja1NpemVCOiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSGVscGVyIGZvciBzbGljZSBwaXBlIChtYXhBdFBvc2l0aW9uKVxyXG4gICAqL1xyXG4gIGJsb2NrU2l6ZUE6IG51bWJlcjtcclxuICAvKipcclxuICAgKiBIZWxwZXIgZm9yIHNsaWNlIHBpcGUgKG1heEF0UG9zaXRpb24pXHJcbiAgICovXHJcbiAgYmxvY2tTaXplQjogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEJhY2tkcm9wIE9wYWNpdHlcclxuICAgKi9cclxuICBiYWNrZHJvcCA9IC0xO1xyXG4gIC8qKlxyXG4gICAqIEhvdyBtYW55IHRvYXN0cyB3aXRoIGJhY2tkcm9wIGluIGN1cnJlbnQgcXVldWVcclxuICAgKi9cclxuICB3aXRoQmFja2Ryb3A6IFNub3RpZnlUb2FzdFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IFNub3RpZnlTZXJ2aWNlKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBJbml0IGJhc2Ugb3B0aW9ucy4gU3Vic2NyaWJlIHRvIG9wdGlvbnMsIGxpZmVjeWNsZSBjaGFuZ2VcclxuICAgKi9cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZW1pdHRlciA9IHRoaXMuc2VydmljZS5lbWl0dGVyLnN1YnNjcmliZSgodG9hc3RzOiBTbm90aWZ5VG9hc3RbXSkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5zZXJ2aWNlLmNvbmZpZy5nbG9iYWwubmV3T25Ub3ApIHtcclxuICAgICAgICB0aGlzLmRvY2tTaXplQSA9IC10aGlzLnNlcnZpY2UuY29uZmlnLmdsb2JhbC5tYXhPblNjcmVlbjtcclxuICAgICAgICB0aGlzLmRvY2tTaXplQiA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmJsb2NrU2l6ZUEgPSAtdGhpcy5zZXJ2aWNlLmNvbmZpZy5nbG9iYWwubWF4QXRQb3NpdGlvbjtcclxuICAgICAgICB0aGlzLmJsb2NrU2l6ZUIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy53aXRoQmFja2Ryb3AgPSB0b2FzdHMuZmlsdGVyKHRvYXN0ID0+IHRvYXN0LmNvbmZpZy5iYWNrZHJvcCA+PSAwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRvY2tTaXplQSA9IDA7XHJcbiAgICAgICAgdGhpcy5kb2NrU2l6ZUIgPSB0aGlzLnNlcnZpY2UuY29uZmlnLmdsb2JhbC5tYXhPblNjcmVlbjtcclxuICAgICAgICB0aGlzLmJsb2NrU2l6ZUEgPSAwO1xyXG4gICAgICAgIHRoaXMuYmxvY2tTaXplQiA9IHRoaXMuc2VydmljZS5jb25maWcuZ2xvYmFsLm1heEF0UG9zaXRpb247XHJcbiAgICAgICAgdGhpcy53aXRoQmFja2Ryb3AgPSB0b2FzdHMuZmlsdGVyKHRvYXN0ID0+IHRvYXN0LmNvbmZpZy5iYWNrZHJvcCA+PSAwKS5yZXZlcnNlKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5ub3RpZmljYXRpb25zID0gdGhpcy5zcGxpdFRvYXN0cyh0b2FzdHMuc2xpY2UodGhpcy5kb2NrU2l6ZUEsIHRoaXMuZG9ja1NpemVCKSk7XHJcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VkKCdtb3VudGVkJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIFRPRE86IGZpeCBiYWNrZHJvcCBpZiBtb3JlIHRoYW4gb25lIHRvYXN0IGNhbGxlZCBpbiBhIHJvd1xyXG4gIC8qKlxyXG4gICAqIENoYW5nZXMgdGhlIGJhY2tkcm9wIG9wYWNpdHlcclxuICAgKiBAcGFyYW0gZXZlbnQgU25vdGlmeUV2ZW50XHJcbiAgICovXHJcbiAgc3RhdGVDaGFuZ2VkKGV2ZW50OiBTbm90aWZ5RXZlbnQpIHtcclxuICAgIGlmICghdGhpcy53aXRoQmFja2Ryb3AubGVuZ3RoKSB7XHJcbiAgICAgIGlmICh0aGlzLmJhY2tkcm9wID49IDApIHtcclxuICAgICAgICB0aGlzLmJhY2tkcm9wID0gLTE7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoIChldmVudCkge1xyXG4gICAgICBjYXNlICdtb3VudGVkJzpcclxuICAgICAgICBpZiAodGhpcy5iYWNrZHJvcCA8IDApIHtcclxuICAgICAgICAgIHRoaXMuYmFja2Ryb3AgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnYmVmb3JlU2hvdyc6XHJcbiAgICAgICAgdGhpcy5iYWNrZHJvcCA9IHRoaXMud2l0aEJhY2tkcm9wW3RoaXMud2l0aEJhY2tkcm9wLmxlbmd0aCAtIDFdLmNvbmZpZy5iYWNrZHJvcDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnYmVmb3JlSGlkZSc6XHJcbiAgICAgICAgaWYgKHRoaXMud2l0aEJhY2tkcm9wLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgdGhpcy5iYWNrZHJvcCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdoaWRkZW4nOlxyXG4gICAgICAgIGlmICh0aGlzLndpdGhCYWNrZHJvcC5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgIHRoaXMuYmFja2Ryb3AgPSAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTcGxpdCB0b2FzdHMgdG9hc3RzIGludG8gZGlmZmVyZW50IG9iamVjdHNcclxuICAgKiBAcGFyYW0gdG9hc3RzIFNub3RpZnlUb2FzdFtdXHJcbiAgICogQHJldHVybnMgU25vdGlmeU5vdGlmaWNhdGlvbnNcclxuICAgKi9cclxuICBzcGxpdFRvYXN0cyh0b2FzdHM6IFNub3RpZnlUb2FzdFtdKTogU25vdGlmeU5vdGlmaWNhdGlvbnMge1xyXG4gICAgY29uc3QgcmVzdWx0OiBTbm90aWZ5Tm90aWZpY2F0aW9ucyA9IHt9O1xyXG5cclxuICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gU25vdGlmeVBvc2l0aW9uKSB7XHJcbiAgICAgIGlmIChTbm90aWZ5UG9zaXRpb24uaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgcmVzdWx0W1Nub3RpZnlQb3NpdGlvbltwcm9wZXJ0eV1dID0gW107XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b2FzdHMuZm9yRWFjaCgodG9hc3Q6IFNub3RpZnlUb2FzdCkgPT4ge1xyXG4gICAgICByZXN1bHRbdG9hc3QuY29uZmlnLnBvc2l0aW9uIGFzIHN0cmluZ10ucHVzaCh0b2FzdCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVW5zdWJzY3JpYmUgc3Vic2NyaXB0aW9uc1xyXG4gICAqL1xyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5lbWl0dGVyLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==