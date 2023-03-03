import { EventEmitter, Directive, NgZone, Input, Output, NgModule } from '@angular/core';
import { SELECT_ITEM_HEIGHT_EM, MatSelect, MatSelectModule } from '@angular/material/select';
import { takeUntil, debounceTime, tap } from 'rxjs/operators';
import { Subject, fromEvent } from 'rxjs';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/material/select';
class MatSelectInfiniteScrollDirective {
    constructor(matSelect, ngZone) {
        this.matSelect = matSelect;
        this.ngZone = ngZone;
        this.threshold = '15%';
        this.debounceTime = 150;
        this.infiniteScroll = new EventEmitter();
        this.thrPx = 0;
        this.thrPc = 0;
        this.singleOptionHeight = SELECT_ITEM_HEIGHT_EM;
        this.destroyed$ = new Subject();
    }
    ngOnInit() {
        this.evaluateThreshold();
    }
    ngAfterViewInit() {
        this.matSelect.openedChange.pipe(takeUntil(this.destroyed$)).subscribe((opened) => {
            if (opened) {
                this.panel = this.matSelect.panel.nativeElement;
                this.singleOptionHeight = this.getSelectItemHeightPx();
                this.registerScrollListener();
            }
        });
    }
    ngOnDestroy() {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }
    evaluateThreshold() {
        if (this.threshold.lastIndexOf('%') > -1) {
            this.thrPx = 0;
            this.thrPc = (parseFloat(this.threshold) / 100);
        }
        else {
            this.thrPx = parseFloat(this.threshold);
            this.thrPc = 0;
        }
    }
    registerScrollListener() {
        fromEvent(this.panel, 'scroll').pipe(takeUntil(this.destroyed$), debounceTime(this.debounceTime), tap((event) => {
            this.handleScrollEvent(event);
        })).subscribe();
    }
    handleScrollEvent(event) {
        this.ngZone.runOutsideAngular(() => {
            if (this.complete) {
                return;
            }
            const countOfRenderedOptions = this.matSelect.options.length;
            const infiniteScrollDistance = this.singleOptionHeight * countOfRenderedOptions;
            const threshold = this.thrPc !== 0 ? (infiniteScrollDistance * this.thrPc) : this.thrPx;
            const scrolledDistance = this.panel.clientHeight + event.target.scrollTop;
            if ((scrolledDistance + threshold) >= infiniteScrollDistance) {
                this.ngZone.run(() => this.infiniteScroll.emit());
            }
        });
    }
    getSelectItemHeightPx() {
        return parseFloat(getComputedStyle(this.panel).fontSize) * SELECT_ITEM_HEIGHT_EM;
    }
}
MatSelectInfiniteScrollDirective.ɵfac = function MatSelectInfiniteScrollDirective_Factory(t) { return new (t || MatSelectInfiniteScrollDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.MatSelect), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
MatSelectInfiniteScrollDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatSelectInfiniteScrollDirective, selectors: [["", "msInfiniteScroll", ""]], inputs: { threshold: "threshold", debounceTime: "debounceTime", complete: "complete" }, outputs: { infiniteScroll: "infiniteScroll" } });
MatSelectInfiniteScrollDirective.ctorParameters = () => [
    { type: MatSelect },
    { type: NgZone }
];
MatSelectInfiniteScrollDirective.propDecorators = {
    threshold: [{ type: Input }],
    debounceTime: [{ type: Input }],
    complete: [{ type: Input }],
    infiniteScroll: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatSelectInfiniteScrollDirective, [{
        type: Directive,
        args: [{
                selector: '[msInfiniteScroll]'
            }]
    }], function () { return [{ type: ɵngcc1.MatSelect }, { type: ɵngcc0.NgZone }]; }, { threshold: [{
            type: Input
        }], debounceTime: [{
            type: Input
        }], infiniteScroll: [{
            type: Output
        }], complete: [{
            type: Input
        }] }); })();

class MatSelectInfiniteScrollModule {
}
MatSelectInfiniteScrollModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatSelectInfiniteScrollModule });
MatSelectInfiniteScrollModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatSelectInfiniteScrollModule_Factory(t) { return new (t || MatSelectInfiniteScrollModule)(); }, imports: [[
            MatSelectModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatSelectInfiniteScrollModule, { declarations: function () { return [MatSelectInfiniteScrollDirective]; }, imports: function () { return [MatSelectModule]; }, exports: function () { return [MatSelectInfiniteScrollDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatSelectInfiniteScrollModule, [{
        type: NgModule,
        args: [{
                declarations: [MatSelectInfiniteScrollDirective],
                imports: [
                    MatSelectModule
                ],
                exports: [MatSelectInfiniteScrollDirective]
            }]
    }], null, null); })();

/*
 * Public API Surface of ng-mat-select-infinite-scroll
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MatSelectInfiniteScrollDirective, MatSelectInfiniteScrollModule };

//# sourceMappingURL=ng-mat-select-infinite-scroll.js.map