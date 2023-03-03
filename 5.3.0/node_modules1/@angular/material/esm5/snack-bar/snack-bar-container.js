/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { BasePortalOutlet, CdkPortalOutlet, } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, ViewChild, ViewEncapsulation, } from '@angular/core';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { matSnackBarAnimations } from './snack-bar-animations';
import { MatSnackBarConfig } from './snack-bar-config';
/**
 * Internal component that wraps user-provided snack bar content.
 * @docs-private
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/portal';

function MatSnackBarContainer_ng_template_0_Template(rf, ctx) { }
var MatSnackBarContainer = /** @class */ (function (_super) {
    __extends(MatSnackBarContainer, _super);
    function MatSnackBarContainer(_ngZone, _elementRef, _changeDetectorRef, 
    /** The snack bar configuration. */
    snackBarConfig) {
        var _this = _super.call(this) || this;
        _this._ngZone = _ngZone;
        _this._elementRef = _elementRef;
        _this._changeDetectorRef = _changeDetectorRef;
        _this.snackBarConfig = snackBarConfig;
        /** Whether the component has been destroyed. */
        _this._destroyed = false;
        /** Subject for notifying that the snack bar has exited from view. */
        _this._onExit = new Subject();
        /** Subject for notifying that the snack bar has finished entering the view. */
        _this._onEnter = new Subject();
        /** The state of the snack bar animations. */
        _this._animationState = 'void';
        /**
         * Attaches a DOM portal to the snack bar container.
         * @deprecated To be turned into a method.
         * @breaking-change 10.0.0
         */
        _this.attachDomPortal = function (portal) {
            _this._assertNotAttached();
            _this._applySnackBarClasses();
            return _this._portalOutlet.attachDomPortal(portal);
        };
        // Based on the ARIA spec, `alert` and `status` roles have an
        // implicit `assertive` and `polite` politeness respectively.
        if (snackBarConfig.politeness === 'assertive' && !snackBarConfig.announcementMessage) {
            _this._role = 'alert';
        }
        else if (snackBarConfig.politeness === 'off') {
            _this._role = null;
        }
        else {
            _this._role = 'status';
        }
        return _this;
    }
    /** Attach a component portal as content to this snack bar container. */
    MatSnackBarContainer.prototype.attachComponentPortal = function (portal) {
        this._assertNotAttached();
        this._applySnackBarClasses();
        return this._portalOutlet.attachComponentPortal(portal);
    };
    /** Attach a template portal as content to this snack bar container. */
    MatSnackBarContainer.prototype.attachTemplatePortal = function (portal) {
        this._assertNotAttached();
        this._applySnackBarClasses();
        return this._portalOutlet.attachTemplatePortal(portal);
    };
    /** Handle end of animations, updating the state of the snackbar. */
    MatSnackBarContainer.prototype.onAnimationEnd = function (event) {
        var fromState = event.fromState, toState = event.toState;
        if ((toState === 'void' && fromState !== 'void') || toState === 'hidden') {
            this._completeExit();
        }
        if (toState === 'visible') {
            // Note: we shouldn't use `this` inside the zone callback,
            // because it can cause a memory leak.
            var onEnter_1 = this._onEnter;
            this._ngZone.run(function () {
                onEnter_1.next();
                onEnter_1.complete();
            });
        }
    };
    /** Begin animation of snack bar entrance into view. */
    MatSnackBarContainer.prototype.enter = function () {
        if (!this._destroyed) {
            this._animationState = 'visible';
            this._changeDetectorRef.detectChanges();
        }
    };
    /** Begin animation of the snack bar exiting from view. */
    MatSnackBarContainer.prototype.exit = function () {
        // Note: this one transitions to `hidden`, rather than `void`, in order to handle the case
        // where multiple snack bars are opened in quick succession (e.g. two consecutive calls to
        // `MatSnackBar.open`).
        this._animationState = 'hidden';
        return this._onExit;
    };
    /** Makes sure the exit callbacks have been invoked when the element is destroyed. */
    MatSnackBarContainer.prototype.ngOnDestroy = function () {
        this._destroyed = true;
        this._completeExit();
    };
    /**
     * Waits for the zone to settle before removing the element. Helps prevent
     * errors where we end up removing an element which is in the middle of an animation.
     */
    MatSnackBarContainer.prototype._completeExit = function () {
        var _this = this;
        this._ngZone.onMicrotaskEmpty.asObservable().pipe(take(1)).subscribe(function () {
            _this._onExit.next();
            _this._onExit.complete();
        });
    };
    /** Applies the various positioning and user-configured CSS classes to the snack bar. */
    MatSnackBarContainer.prototype._applySnackBarClasses = function () {
        var element = this._elementRef.nativeElement;
        var panelClasses = this.snackBarConfig.panelClass;
        if (panelClasses) {
            if (Array.isArray(panelClasses)) {
                // Note that we can't use a spread here, because IE doesn't support multiple arguments.
                panelClasses.forEach(function (cssClass) { return element.classList.add(cssClass); });
            }
            else {
                element.classList.add(panelClasses);
            }
        }
        if (this.snackBarConfig.horizontalPosition === 'center') {
            element.classList.add('mat-snack-bar-center');
        }
        if (this.snackBarConfig.verticalPosition === 'top') {
            element.classList.add('mat-snack-bar-top');
        }
    };
    /** Asserts that no content is already attached to the container. */
    MatSnackBarContainer.prototype._assertNotAttached = function () {
        if (this._portalOutlet.hasAttached()) {
            throw Error('Attempting to attach snack bar content after content is already attached');
        }
    };
    /** @nocollapse */
    MatSnackBarContainer.ctorParameters = function () { return [
        { type: NgZone },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: MatSnackBarConfig }
    ]; };
    MatSnackBarContainer.propDecorators = {
        _portalOutlet: [{ type: ViewChild, args: [CdkPortalOutlet, { static: true },] }]
    };
MatSnackBarContainer.ɵfac = function MatSnackBarContainer_Factory(t) { return new (t || MatSnackBarContainer)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(MatSnackBarConfig)); };
MatSnackBarContainer.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatSnackBarContainer, selectors: [["snack-bar-container"]], viewQuery: function MatSnackBarContainer_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(CdkPortalOutlet, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._portalOutlet = _t.first);
    } }, hostAttrs: [1, "mat-snack-bar-container"], hostVars: 2, hostBindings: function MatSnackBarContainer_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵcomponentHostSyntheticListener("@state.done", function MatSnackBarContainer_animation_state_done_HostBindingHandler($event) { return ctx.onAnimationEnd($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("role", ctx._role);
        ɵngcc0.ɵɵupdateSyntheticHostBinding("@state", ctx._animationState);
    } }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [["cdkPortalOutlet", ""]], template: function MatSnackBarContainer_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, MatSnackBarContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
    } }, directives: [ɵngcc1.CdkPortalOutlet], styles: [".mat-snack-bar-container{border-radius:4px;box-sizing:border-box;display:block;margin:24px;max-width:33vw;min-width:344px;padding:14px 16px;min-height:48px;transform-origin:center}.cdk-high-contrast-active .mat-snack-bar-container{border:solid 1px}.mat-snack-bar-handset{width:100%}.mat-snack-bar-handset .mat-snack-bar-container{margin:8px;max-width:100%;min-width:0;width:100%}\n"], encapsulation: 2, data: { animation: [matSnackBarAnimations.snackBarState] } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatSnackBarContainer, [{
        type: Component,
        args: [{
                selector: 'snack-bar-container',
                template: "<ng-template cdkPortalOutlet></ng-template>\n",
                // In Ivy embedded views will be change detected from their declaration place, rather than
                // where they were stamped out. This means that we can't have the snack bar container be OnPush,
                // because it might cause snack bars that were opened from a template not to be out of date.
                // tslint:disable-next-line:validate-decorators
                changeDetection: ChangeDetectionStrategy.Default,
                encapsulation: ViewEncapsulation.None,
                animations: [matSnackBarAnimations.snackBarState],
                host: {
                    '[attr.role]': '_role',
                    'class': 'mat-snack-bar-container',
                    '[@state]': '_animationState',
                    '(@state.done)': 'onAnimationEnd($event)'
                },
                styles: [".mat-snack-bar-container{border-radius:4px;box-sizing:border-box;display:block;margin:24px;max-width:33vw;min-width:344px;padding:14px 16px;min-height:48px;transform-origin:center}.cdk-high-contrast-active .mat-snack-bar-container{border:solid 1px}.mat-snack-bar-handset{width:100%}.mat-snack-bar-handset .mat-snack-bar-container{margin:8px;max-width:100%;min-width:0;width:100%}\n"]
            }]
    }], function () { return [{ type: ɵngcc0.NgZone }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: MatSnackBarConfig }]; }, { _portalOutlet: [{
            type: ViewChild,
            args: [CdkPortalOutlet, { static: true }]
        }] }); })();
    return MatSnackBarContainer;
}(BasePortalOutlet));
export { MatSnackBarContainer };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLWNvbnRhaW5lci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL3NuYWNrLWJhci9zbmFjay1iYXItY29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUVBLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsZUFBZSxHQUloQixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFFVCxVQUFVLEVBRVYsTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFhLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUN6QyxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEMsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDN0QsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFHckQ7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7Ozs7QUFDSDtBQUVjLElBZ0I0Qix3Q0FBZ0I7QUFBQyxJQW1CekQsOEJBQ1UsT0FBZSxFQUNmLFdBQW9DLEVBQ3BDLGtCQUFxQztBQUNoRCxJQUFHLG1DQUFtQztBQUN2QyxJQUFXLGNBQWlDO0FBQzVDLFFBTkUsWUFPRSxpQkFBTyxTQVdSO0FBQ0gsUUFsQlksYUFBTyxHQUFQLE9BQU8sQ0FBUTtBQUFDLFFBQ2hCLGlCQUFXLEdBQVgsV0FBVyxDQUF5QjtBQUFDLFFBQ3JDLHdCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7QUFBQyxRQUV2QyxvQkFBYyxHQUFkLGNBQWMsQ0FBbUI7QUFBQyxRQXZCM0MsZ0RBQWdEO0FBQ2xELFFBQVUsZ0JBQVUsR0FBRyxLQUFLLENBQUM7QUFDN0IsUUFJRSxxRUFB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Z0QscUJBQ2hHLDRGQUE0RixxQkFDNUYsK0NBQStDLHFCQUMvQyxlQUFlLEVBQUU7YUFBdUIsQ0FBQyxPQUFPLHNCQUNoRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxzQkFDckMsVUFBVSxFQUFFLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDLHNCQUNqRCxJQUFJLEVBQUU7WUFDSixhQUFhLEVBQUUsT0FBTztHQUN0QixPQUFPLEVBQUU7O0NBQXlCLDBCQUNsQyxVQUFVLEVBQUUsaUJBQWlCLDBCQUM3QjtLQUFlLEVBQUUsd0JBQXdCLHNCQUMxQzs7Ozs7Y0FDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBTXVEO0FBQUMsSUE4SXpELDJCQUFDO0FBQ0EsQ0FEQSxBQXJLRCxDQWtCMEMsZ0JBQWdCLEdBbUp6RDtBQUNELFNBcEphLG9CQUFvQjtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7QW5pbWF0aW9uRXZlbnR9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtcbiAgQmFzZVBvcnRhbE91dGxldCxcbiAgQ2RrUG9ydGFsT3V0bGV0LFxuICBDb21wb25lbnRQb3J0YWwsXG4gIFRlbXBsYXRlUG9ydGFsLFxuICBEb21Qb3J0YWwsXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbXBvbmVudFJlZixcbiAgRWxlbWVudFJlZixcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YmplY3R9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHt0YWtlfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge21hdFNuYWNrQmFyQW5pbWF0aW9uc30gZnJvbSAnLi9zbmFjay1iYXItYW5pbWF0aW9ucyc7XG5pbXBvcnQge01hdFNuYWNrQmFyQ29uZmlnfSBmcm9tICcuL3NuYWNrLWJhci1jb25maWcnO1xuXG5cbi8qKlxuICogSW50ZXJuYWwgY29tcG9uZW50IHRoYXQgd3JhcHMgdXNlci1wcm92aWRlZCBzbmFjayBiYXIgY29udGVudC5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc25hY2stYmFyLWNvbnRhaW5lcicsXG4gIHRlbXBsYXRlVXJsOiAnc25hY2stYmFyLWNvbnRhaW5lci5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NuYWNrLWJhci1jb250YWluZXIuY3NzJ10sXG4gIC8vIEluIEl2eSBlbWJlZGRlZCB2aWV3cyB3aWxsIGJlIGNoYW5nZSBkZXRlY3RlZCBmcm9tIHRoZWlyIGRlY2xhcmF0aW9uIHBsYWNlLCByYXRoZXIgdGhhblxuICAvLyB3aGVyZSB0aGV5IHdlcmUgc3RhbXBlZCBvdXQuIFRoaXMgbWVhbnMgdGhhdCB3ZSBjYW4ndCBoYXZlIHRoZSBzbmFjayBiYXIgY29udGFpbmVyIGJlIE9uUHVzaCxcbiAgLy8gYmVjYXVzZSBpdCBtaWdodCBjYXVzZSBzbmFjayBiYXJzIHRoYXQgd2VyZSBvcGVuZWQgZnJvbSBhIHRlbXBsYXRlIG5vdCB0byBiZSBvdXQgb2YgZGF0ZS5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhbGlkYXRlLWRlY29yYXRvcnNcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0LFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBhbmltYXRpb25zOiBbbWF0U25hY2tCYXJBbmltYXRpb25zLnNuYWNrQmFyU3RhdGVdLFxuICBob3N0OiB7XG4gICAgJ1thdHRyLnJvbGVdJzogJ19yb2xlJyxcbiAgICAnY2xhc3MnOiAnbWF0LXNuYWNrLWJhci1jb250YWluZXInLFxuICAgICdbQHN0YXRlXSc6ICdfYW5pbWF0aW9uU3RhdGUnLFxuICAgICcoQHN0YXRlLmRvbmUpJzogJ29uQW5pbWF0aW9uRW5kKCRldmVudCknXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE1hdFNuYWNrQmFyQ29udGFpbmVyIGV4dGVuZHMgQmFzZVBvcnRhbE91dGxldCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKiBXaGV0aGVyIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gZGVzdHJveWVkLiAqL1xuICBwcml2YXRlIF9kZXN0cm95ZWQgPSBmYWxzZTtcblxuICAvKiogVGhlIHBvcnRhbCBvdXRsZXQgaW5zaWRlIG9mIHRoaXMgY29udGFpbmVyIGludG8gd2hpY2ggdGhlIHNuYWNrIGJhciBjb250ZW50IHdpbGwgYmUgbG9hZGVkLiAqL1xuICBAVmlld0NoaWxkKENka1BvcnRhbE91dGxldCwge3N0YXRpYzogdHJ1ZX0pIF9wb3J0YWxPdXRsZXQ6IENka1BvcnRhbE91dGxldDtcblxuICAvKiogU3ViamVjdCBmb3Igbm90aWZ5aW5nIHRoYXQgdGhlIHNuYWNrIGJhciBoYXMgZXhpdGVkIGZyb20gdmlldy4gKi9cbiAgcmVhZG9ubHkgX29uRXhpdDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICAvKiogU3ViamVjdCBmb3Igbm90aWZ5aW5nIHRoYXQgdGhlIHNuYWNrIGJhciBoYXMgZmluaXNoZWQgZW50ZXJpbmcgdGhlIHZpZXcuICovXG4gIHJlYWRvbmx5IF9vbkVudGVyOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIC8qKiBUaGUgc3RhdGUgb2YgdGhlIHNuYWNrIGJhciBhbmltYXRpb25zLiAqL1xuICBfYW5pbWF0aW9uU3RhdGUgPSAndm9pZCc7XG5cbiAgLyoqIEFSSUEgcm9sZSBmb3IgdGhlIHNuYWNrIGJhciBjb250YWluZXIuICovXG4gIF9yb2xlOiAnYWxlcnQnIHwgJ3N0YXR1cycgfCBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAvKiogVGhlIHNuYWNrIGJhciBjb25maWd1cmF0aW9uLiAqL1xuICAgIHB1YmxpYyBzbmFja0JhckNvbmZpZzogTWF0U25hY2tCYXJDb25maWcpIHtcblxuICAgIHN1cGVyKCk7XG5cbiAgICAvLyBCYXNlZCBvbiB0aGUgQVJJQSBzcGVjLCBgYWxlcnRgIGFuZCBgc3RhdHVzYCByb2xlcyBoYXZlIGFuXG4gICAgLy8gaW1wbGljaXQgYGFzc2VydGl2ZWAgYW5kIGBwb2xpdGVgIHBvbGl0ZW5lc3MgcmVzcGVjdGl2ZWx5LlxuICAgIGlmIChzbmFja0JhckNvbmZpZy5wb2xpdGVuZXNzID09PSAnYXNzZXJ0aXZlJyAmJiAhc25hY2tCYXJDb25maWcuYW5ub3VuY2VtZW50TWVzc2FnZSkge1xuICAgICAgdGhpcy5fcm9sZSA9ICdhbGVydCc7XG4gICAgfSBlbHNlIGlmIChzbmFja0JhckNvbmZpZy5wb2xpdGVuZXNzID09PSAnb2ZmJykge1xuICAgICAgdGhpcy5fcm9sZSA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JvbGUgPSAnc3RhdHVzJztcbiAgICB9XG4gIH1cblxuICAvKiogQXR0YWNoIGEgY29tcG9uZW50IHBvcnRhbCBhcyBjb250ZW50IHRvIHRoaXMgc25hY2sgYmFyIGNvbnRhaW5lci4gKi9cbiAgYXR0YWNoQ29tcG9uZW50UG9ydGFsPFQ+KHBvcnRhbDogQ29tcG9uZW50UG9ydGFsPFQ+KTogQ29tcG9uZW50UmVmPFQ+IHtcbiAgICB0aGlzLl9hc3NlcnROb3RBdHRhY2hlZCgpO1xuICAgIHRoaXMuX2FwcGx5U25hY2tCYXJDbGFzc2VzKCk7XG4gICAgcmV0dXJuIHRoaXMuX3BvcnRhbE91dGxldC5hdHRhY2hDb21wb25lbnRQb3J0YWwocG9ydGFsKTtcbiAgfVxuXG4gIC8qKiBBdHRhY2ggYSB0ZW1wbGF0ZSBwb3J0YWwgYXMgY29udGVudCB0byB0aGlzIHNuYWNrIGJhciBjb250YWluZXIuICovXG4gIGF0dGFjaFRlbXBsYXRlUG9ydGFsPEM+KHBvcnRhbDogVGVtcGxhdGVQb3J0YWw8Qz4pOiBFbWJlZGRlZFZpZXdSZWY8Qz4ge1xuICAgIHRoaXMuX2Fzc2VydE5vdEF0dGFjaGVkKCk7XG4gICAgdGhpcy5fYXBwbHlTbmFja0JhckNsYXNzZXMoKTtcbiAgICByZXR1cm4gdGhpcy5fcG9ydGFsT3V0bGV0LmF0dGFjaFRlbXBsYXRlUG9ydGFsKHBvcnRhbCk7XG4gIH1cblxuICAvKipcbiAgICogQXR0YWNoZXMgYSBET00gcG9ydGFsIHRvIHRoZSBzbmFjayBiYXIgY29udGFpbmVyLlxuICAgKiBAZGVwcmVjYXRlZCBUbyBiZSB0dXJuZWQgaW50byBhIG1ldGhvZC5cbiAgICogQGJyZWFraW5nLWNoYW5nZSAxMC4wLjBcbiAgICovXG4gIGF0dGFjaERvbVBvcnRhbCA9IChwb3J0YWw6IERvbVBvcnRhbCkgPT4ge1xuICAgIHRoaXMuX2Fzc2VydE5vdEF0dGFjaGVkKCk7XG4gICAgdGhpcy5fYXBwbHlTbmFja0JhckNsYXNzZXMoKTtcbiAgICByZXR1cm4gdGhpcy5fcG9ydGFsT3V0bGV0LmF0dGFjaERvbVBvcnRhbChwb3J0YWwpO1xuICB9XG5cbiAgLyoqIEhhbmRsZSBlbmQgb2YgYW5pbWF0aW9ucywgdXBkYXRpbmcgdGhlIHN0YXRlIG9mIHRoZSBzbmFja2Jhci4gKi9cbiAgb25BbmltYXRpb25FbmQoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KSB7XG4gICAgY29uc3Qge2Zyb21TdGF0ZSwgdG9TdGF0ZX0gPSBldmVudDtcblxuICAgIGlmICgodG9TdGF0ZSA9PT0gJ3ZvaWQnICYmIGZyb21TdGF0ZSAhPT0gJ3ZvaWQnKSB8fCB0b1N0YXRlID09PSAnaGlkZGVuJykge1xuICAgICAgdGhpcy5fY29tcGxldGVFeGl0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRvU3RhdGUgPT09ICd2aXNpYmxlJykge1xuICAgICAgLy8gTm90ZTogd2Ugc2hvdWxkbid0IHVzZSBgdGhpc2AgaW5zaWRlIHRoZSB6b25lIGNhbGxiYWNrLFxuICAgICAgLy8gYmVjYXVzZSBpdCBjYW4gY2F1c2UgYSBtZW1vcnkgbGVhay5cbiAgICAgIGNvbnN0IG9uRW50ZXIgPSB0aGlzLl9vbkVudGVyO1xuXG4gICAgICB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgb25FbnRlci5uZXh0KCk7XG4gICAgICAgIG9uRW50ZXIuY29tcGxldGUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBCZWdpbiBhbmltYXRpb24gb2Ygc25hY2sgYmFyIGVudHJhbmNlIGludG8gdmlldy4gKi9cbiAgZW50ZXIoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9kZXN0cm95ZWQpIHtcbiAgICAgIHRoaXMuX2FuaW1hdGlvblN0YXRlID0gJ3Zpc2libGUnO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBCZWdpbiBhbmltYXRpb24gb2YgdGhlIHNuYWNrIGJhciBleGl0aW5nIGZyb20gdmlldy4gKi9cbiAgZXhpdCgpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICAvLyBOb3RlOiB0aGlzIG9uZSB0cmFuc2l0aW9ucyB0byBgaGlkZGVuYCwgcmF0aGVyIHRoYW4gYHZvaWRgLCBpbiBvcmRlciB0byBoYW5kbGUgdGhlIGNhc2VcbiAgICAvLyB3aGVyZSBtdWx0aXBsZSBzbmFjayBiYXJzIGFyZSBvcGVuZWQgaW4gcXVpY2sgc3VjY2Vzc2lvbiAoZS5nLiB0d28gY29uc2VjdXRpdmUgY2FsbHMgdG9cbiAgICAvLyBgTWF0U25hY2tCYXIub3BlbmApLlxuICAgIHRoaXMuX2FuaW1hdGlvblN0YXRlID0gJ2hpZGRlbic7XG4gICAgcmV0dXJuIHRoaXMuX29uRXhpdDtcbiAgfVxuXG4gIC8qKiBNYWtlcyBzdXJlIHRoZSBleGl0IGNhbGxiYWNrcyBoYXZlIGJlZW4gaW52b2tlZCB3aGVuIHRoZSBlbGVtZW50IGlzIGRlc3Ryb3llZC4gKi9cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcbiAgICB0aGlzLl9jb21wbGV0ZUV4aXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXYWl0cyBmb3IgdGhlIHpvbmUgdG8gc2V0dGxlIGJlZm9yZSByZW1vdmluZyB0aGUgZWxlbWVudC4gSGVscHMgcHJldmVudFxuICAgKiBlcnJvcnMgd2hlcmUgd2UgZW5kIHVwIHJlbW92aW5nIGFuIGVsZW1lbnQgd2hpY2ggaXMgaW4gdGhlIG1pZGRsZSBvZiBhbiBhbmltYXRpb24uXG4gICAqL1xuICBwcml2YXRlIF9jb21wbGV0ZUV4aXQoKSB7XG4gICAgdGhpcy5fbmdab25lLm9uTWljcm90YXNrRW1wdHkuYXNPYnNlcnZhYmxlKCkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fb25FeGl0Lm5leHQoKTtcbiAgICAgIHRoaXMuX29uRXhpdC5jb21wbGV0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEFwcGxpZXMgdGhlIHZhcmlvdXMgcG9zaXRpb25pbmcgYW5kIHVzZXItY29uZmlndXJlZCBDU1MgY2xhc3NlcyB0byB0aGUgc25hY2sgYmFyLiAqL1xuICBwcml2YXRlIF9hcHBseVNuYWNrQmFyQ2xhc3NlcygpIHtcbiAgICBjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBwYW5lbENsYXNzZXMgPSB0aGlzLnNuYWNrQmFyQ29uZmlnLnBhbmVsQ2xhc3M7XG5cbiAgICBpZiAocGFuZWxDbGFzc2VzKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShwYW5lbENsYXNzZXMpKSB7XG4gICAgICAgIC8vIE5vdGUgdGhhdCB3ZSBjYW4ndCB1c2UgYSBzcHJlYWQgaGVyZSwgYmVjYXVzZSBJRSBkb2Vzbid0IHN1cHBvcnQgbXVsdGlwbGUgYXJndW1lbnRzLlxuICAgICAgICBwYW5lbENsYXNzZXMuZm9yRWFjaChjc3NDbGFzcyA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChwYW5lbENsYXNzZXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnNuYWNrQmFyQ29uZmlnLmhvcml6b250YWxQb3NpdGlvbiA9PT0gJ2NlbnRlcicpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWF0LXNuYWNrLWJhci1jZW50ZXInKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zbmFja0JhckNvbmZpZy52ZXJ0aWNhbFBvc2l0aW9uID09PSAndG9wJykge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtYXQtc25hY2stYmFyLXRvcCcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBBc3NlcnRzIHRoYXQgbm8gY29udGVudCBpcyBhbHJlYWR5IGF0dGFjaGVkIHRvIHRoZSBjb250YWluZXIuICovXG4gIHByaXZhdGUgX2Fzc2VydE5vdEF0dGFjaGVkKCkge1xuICAgIGlmICh0aGlzLl9wb3J0YWxPdXRsZXQuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgdGhyb3cgRXJyb3IoJ0F0dGVtcHRpbmcgdG8gYXR0YWNoIHNuYWNrIGJhciBjb250ZW50IGFmdGVyIGNvbnRlbnQgaXMgYWxyZWFkeSBhdHRhY2hlZCcpO1xuICAgIH1cbiAgfVxufVxuIl19