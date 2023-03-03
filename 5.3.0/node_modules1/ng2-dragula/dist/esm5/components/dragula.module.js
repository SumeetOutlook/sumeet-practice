/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { DragulaDirective } from './dragula.directive';
import { DragulaService } from './dragula.service';
import * as ɵngcc0 from '@angular/core';
var DragulaModule = /** @class */ (function () {
    function DragulaModule() {
    }
    /**
     * @return {?}
     */
    DragulaModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DragulaModule,
            providers: [DragulaService]
        };
    };
DragulaModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: DragulaModule });
DragulaModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function DragulaModule_Factory(t) { return new (t || DragulaModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DragulaModule, { declarations: function () { return [DragulaDirective]; }, exports: function () { return [DragulaDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DragulaModule, [{
        type: NgModule,
        args: [{
                exports: [DragulaDirective],
                declarations: [DragulaDirective]
            }]
    }], function () { return []; }, null); })();
    return DragulaModule;
}());
export { DragulaModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ3VsYS5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIm5nOi9uZzItZHJhZ3VsYS9jb21wb25lbnRzL2RyYWd1bGEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBQ25EO0FBR0s7QUFDTDtBQUNHO0FBQVE7QUFDVjtBQUFRLElBQUEscUJBQU87QUFBTztBQUN2QjtBQUFRLElBRE47QUFBYyxRQUNaLE1BQU0sQ0FBQztBQUNYLFlBQU0sUUFBUSxFQUFFLGFBQWE7QUFDN0IsWUFBTSxTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7QUFDakMsU0FBSyxDQUFBO0FBQ0wsS0FBRztpREFWRixRQUFRLFNBQUM7aUJBQ1IsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsc0JBQzNCLFlBQVksRUFBRSxDQUFDLGdCQUFnQixDQUFDLG1CQUNqQzs7Ozs7Ozs7Z0RBQ1E7QUFBQyx3QkFSVjtBQUFFO0FBQU0sU0FRSyxhQUFhOztBQVJBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQU9BLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBVkEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFQQSxBQVFBLEFBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRHJhZ3VsYURpcmVjdGl2ZSB9IGZyb20gJy4vZHJhZ3VsYS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRHJhZ3VsYVNlcnZpY2UgfSBmcm9tICcuL2RyYWd1bGEuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IFtEcmFndWxhRGlyZWN0aXZlXSxcbiAgZGVjbGFyYXRpb25zOiBbRHJhZ3VsYURpcmVjdGl2ZV0sXG59KVxuZXhwb3J0IGNsYXNzIERyYWd1bGFNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERyYWd1bGFNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtEcmFndWxhU2VydmljZV1cbiAgICB9XG4gIH1cbn1cbiJdfQ==