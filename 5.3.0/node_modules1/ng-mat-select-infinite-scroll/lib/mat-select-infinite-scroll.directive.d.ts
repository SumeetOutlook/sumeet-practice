import { AfterViewInit, EventEmitter, NgZone, OnDestroy, OnInit } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import * as ɵngcc0 from '@angular/core';
export declare class MatSelectInfiniteScrollDirective implements OnInit, OnDestroy, AfterViewInit {
    private matSelect;
    private ngZone;
    threshold: string;
    debounceTime: number;
    complete: boolean;
    infiniteScroll: EventEmitter<void>;
    private panel;
    private thrPx;
    private thrPc;
    private singleOptionHeight;
    private destroyed$;
    constructor(matSelect: MatSelect, ngZone: NgZone);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    evaluateThreshold(): void;
    registerScrollListener(): void;
    handleScrollEvent(event: any): void;
    getSelectItemHeightPx(): number;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MatSelectInfiniteScrollDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<MatSelectInfiniteScrollDirective, "[msInfiniteScroll]", never, { "threshold": "threshold"; "debounceTime": "debounceTime"; "complete": "complete"; }, { "infiniteScroll": "infiniteScroll"; }, never>;
}

//# sourceMappingURL=mat-select-infinite-scroll.directive.d.ts.map