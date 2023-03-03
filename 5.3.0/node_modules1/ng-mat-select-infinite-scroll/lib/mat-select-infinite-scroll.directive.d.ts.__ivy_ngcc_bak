import { AfterViewInit, EventEmitter, NgZone, OnDestroy, OnInit } from '@angular/core';
import { MatSelect } from '@angular/material/select';
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
}
