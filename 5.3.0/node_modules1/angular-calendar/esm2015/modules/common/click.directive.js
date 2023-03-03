import { __decorate, __metadata, __param } from "tslib";
import { Directive, Renderer2, ElementRef, OnInit, OnDestroy, Output, EventEmitter, Inject, Input, NgZone, } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';
let ClickDirective = class ClickDirective {
    constructor(renderer, elm, document) {
        this.renderer = renderer;
        this.elm = elm;
        this.document = document;
        this.clickListenerDisabled = false;
        this.click = new EventEmitter(); // tslint:disable-line
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        if (!this.clickListenerDisabled) {
            this.listen()
                .pipe(takeUntil(this.destroy$))
                .subscribe((event) => {
                event.stopPropagation();
                this.click.emit(event);
            });
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
    }
    listen() {
        return new Observable((observer) => {
            return this.renderer.listen(this.elm.nativeElement, 'click', (event) => {
                observer.next(event);
            });
        });
    }
};
ClickDirective.ɵfac = function ClickDirective_Factory(t) { return new (t || ClickDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(DOCUMENT)); };
ClickDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ClickDirective, selectors: [["", "mwlClick", ""]], inputs: { clickListenerDisabled: "clickListenerDisabled" }, outputs: { click: "mwlClick" } });
ClickDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
__decorate([
    Input(),
    __metadata("design:type", Object)
], ClickDirective.prototype, "clickListenerDisabled", void 0);
__decorate([
    Output('mwlClick'),
    __metadata("design:type", Object)
], ClickDirective.prototype, "click", void 0);
ClickDirective = __decorate([ __param(2, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Renderer2,
        ElementRef, Object])
], ClickDirective);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ClickDirective, [{
        type: Directive,
        args: [{
                selector: '[mwlClick]'
            }]
    }], function () { return [{ type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { clickListenerDisabled: [{
            type: Input
        }], click: [{
            type: Output,
            args: ['mwlClick']
        }] }); })();
export { ClickDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2suZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL2NvbW1vbi9jbGljay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sU0FBUyxFQUNULE1BQU0sRUFDTixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFLM0MsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztBQUFHLElBTzVCLFlBQ1UsUUFBbUIsRUFDbkIsR0FBNEIsRUFDVixRQUFRO0FBQ25DLFFBSFMsYUFBUSxHQUFSLFFBQVEsQ0FBVztBQUFDLFFBQ3BCLFFBQUcsR0FBSCxHQUFHLENBQXlCO0FBQUMsUUFDWCxhQUFRLEdBQVIsUUFBUSxDQUFBO0FBQ3RDLFFBVlcsMEJBQXFCLEdBQUcsS0FBSyxDQUFDO0FBQ3pDLFFBQ3NCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDLENBQUMsc0JBQXNCO0FBQ3BGLFFBQ1UsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7QUFDbkMsSUFLSyxDQUFDO0FBQ04sSUFDRSxRQUFRO0FBQUssUUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFO0FBQ3JDLFlBQU0sSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUNuQixpQkFBUyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN2QyxpQkFBUyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtBQUM3QixnQkFBVSxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDbEMsZ0JBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDakMsWUFBUSxDQUFDLENBQUMsQ0FBQztBQUNYLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLFdBQVc7QUFBSyxRQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDekIsSUFBRSxDQUFDO0FBQ0gsSUFDVSxNQUFNO0FBQ2hCLFFBQUksT0FBTyxJQUFJLFVBQVUsQ0FBYSxDQUFDLFFBQVEsRUFBRSxFQUFFO0FBQ25ELFlBQU0sT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtBQUM3RSxnQkFBUSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzdCLFlBQU0sQ0FBQyxDQUFDLENBQUM7QUFDVCxRQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1AsSUFBRSxDQUFDO0FBQ0gsQ0FBQzs7d01BQUE7QUFDRDtBQUF3QyxZQTVCbEIsU0FBUztBQUM3QixZQUFlLFVBQVU7QUFBSSw0Q0FDMUIsTUFBTSxTQUFDLFFBQVE7QUFBUTtBQVRqQjtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFFO0FBRUwsNkRBRmtDO0FBRW5CO0FBQWEsSUFBaEMsTUFBTSxDQUFDLFVBQVUsQ0FBQztBQUFFO0FBQXNDLDZDQUFBO0FBSGhELGNBQWMsb0JBSDFCLFNBQVMsQ0FBQyxVQUNULHpCQUVFLENBVUMsV0FBQSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7RUFaWCxFQUFFLFlBQVksT0FDdkIsQ0FBQyx4QkFXcUIscUNBRkQsU0FBUztBQUMvQixRQUFpQixVQUFVO0FBQVcsR0FUekIsY0FBYyxDQW1DMUI7Ozs7Ozs7Ozs7Ozs7O29CQUNEO0FBQUMsU0FwQ1ksY0FBYztBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBSZW5kZXJlcjIsXG4gIEVsZW1lbnRSZWYsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTmdab25lLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW213bENsaWNrXScsXG59KVxuZXhwb3J0IGNsYXNzIENsaWNrRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBjbGlja0xpc3RlbmVyRGlzYWJsZWQgPSBmYWxzZTtcblxuICBAT3V0cHV0KCdtd2xDbGljaycpIGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG5cbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWxtOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50XG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuY2xpY2tMaXN0ZW5lckRpc2FibGVkKSB7XG4gICAgICB0aGlzLmxpc3RlbigpXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB0aGlzLmNsaWNrLmVtaXQoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgbGlzdGVuKCkge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxNb3VzZUV2ZW50Pigob2JzZXJ2ZXIpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsbS5uYXRpdmVFbGVtZW50LCAnY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChldmVudCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19