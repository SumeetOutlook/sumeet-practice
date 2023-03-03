(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/select'), require('rxjs/operators'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('ng-mat-select-infinite-scroll', ['exports', '@angular/core', '@angular/material/select', 'rxjs/operators', 'rxjs'], factory) :
    (global = global || self, factory(global['ng-mat-select-infinite-scroll'] = {}, global.ng.core, global.ng.material.select, global.rxjs.operators, global.rxjs));
}(this, (function (exports, core, select, operators, rxjs) { 'use strict';

    var MatSelectInfiniteScrollDirective = /** @class */ (function () {
        function MatSelectInfiniteScrollDirective(matSelect, ngZone) {
            this.matSelect = matSelect;
            this.ngZone = ngZone;
            this.threshold = '15%';
            this.debounceTime = 150;
            this.infiniteScroll = new core.EventEmitter();
            this.thrPx = 0;
            this.thrPc = 0;
            this.singleOptionHeight = select.SELECT_ITEM_HEIGHT_EM;
            this.destroyed$ = new rxjs.Subject();
        }
        MatSelectInfiniteScrollDirective.prototype.ngOnInit = function () {
            this.evaluateThreshold();
        };
        MatSelectInfiniteScrollDirective.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.matSelect.openedChange.pipe(operators.takeUntil(this.destroyed$)).subscribe(function (opened) {
                if (opened) {
                    _this.panel = _this.matSelect.panel.nativeElement;
                    _this.singleOptionHeight = _this.getSelectItemHeightPx();
                    _this.registerScrollListener();
                }
            });
        };
        MatSelectInfiniteScrollDirective.prototype.ngOnDestroy = function () {
            this.destroyed$.next(true);
            this.destroyed$.complete();
        };
        MatSelectInfiniteScrollDirective.prototype.evaluateThreshold = function () {
            if (this.threshold.lastIndexOf('%') > -1) {
                this.thrPx = 0;
                this.thrPc = (parseFloat(this.threshold) / 100);
            }
            else {
                this.thrPx = parseFloat(this.threshold);
                this.thrPc = 0;
            }
        };
        MatSelectInfiniteScrollDirective.prototype.registerScrollListener = function () {
            var _this = this;
            rxjs.fromEvent(this.panel, 'scroll').pipe(operators.takeUntil(this.destroyed$), operators.debounceTime(this.debounceTime), operators.tap(function (event) {
                _this.handleScrollEvent(event);
            })).subscribe();
        };
        MatSelectInfiniteScrollDirective.prototype.handleScrollEvent = function (event) {
            var _this = this;
            this.ngZone.runOutsideAngular(function () {
                if (_this.complete) {
                    return;
                }
                var countOfRenderedOptions = _this.matSelect.options.length;
                var infiniteScrollDistance = _this.singleOptionHeight * countOfRenderedOptions;
                var threshold = _this.thrPc !== 0 ? (infiniteScrollDistance * _this.thrPc) : _this.thrPx;
                var scrolledDistance = _this.panel.clientHeight + event.target.scrollTop;
                if ((scrolledDistance + threshold) >= infiniteScrollDistance) {
                    _this.ngZone.run(function () { return _this.infiniteScroll.emit(); });
                }
            });
        };
        MatSelectInfiniteScrollDirective.prototype.getSelectItemHeightPx = function () {
            return parseFloat(getComputedStyle(this.panel).fontSize) * select.SELECT_ITEM_HEIGHT_EM;
        };
        return MatSelectInfiniteScrollDirective;
    }());
    MatSelectInfiniteScrollDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[msInfiniteScroll]'
                },] }
    ];
    MatSelectInfiniteScrollDirective.ctorParameters = function () { return [
        { type: select.MatSelect },
        { type: core.NgZone }
    ]; };
    MatSelectInfiniteScrollDirective.propDecorators = {
        threshold: [{ type: core.Input }],
        debounceTime: [{ type: core.Input }],
        complete: [{ type: core.Input }],
        infiniteScroll: [{ type: core.Output }]
    };

    var MatSelectInfiniteScrollModule = /** @class */ (function () {
        function MatSelectInfiniteScrollModule() {
        }
        return MatSelectInfiniteScrollModule;
    }());
    MatSelectInfiniteScrollModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [MatSelectInfiniteScrollDirective],
                    imports: [
                        select.MatSelectModule
                    ],
                    exports: [MatSelectInfiniteScrollDirective]
                },] }
    ];

    /*
     * Public API Surface of ng-mat-select-infinite-scroll
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.MatSelectInfiniteScrollDirective = MatSelectInfiniteScrollDirective;
    exports.MatSelectInfiniteScrollModule = MatSelectInfiniteScrollModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-mat-select-infinite-scroll.umd.js.map
