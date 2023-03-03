/**
 * @fileoverview added by tsickle
 * Generated from: src/material/core/line/line.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule, Directive, } from '@angular/core';
import { startWith } from 'rxjs/operators';
import { MatCommonModule } from '../common-behaviors/common-module';
/**
 * Shared directive to count lines inside a text area, such as a list item.
 * Line elements can be extracted with a \@ContentChildren(MatLine) query, then
 * counted by checking the query list's length.
 */
import * as ɵngcc0 from '@angular/core';
export class MatLine {
}
MatLine.ɵfac = function MatLine_Factory(t) { return new (t || MatLine)(); };
MatLine.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatLine, selectors: [["", "mat-line", ""], ["", "matLine", ""]], hostAttrs: [1, "mat-line"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatLine, [{
        type: Directive,
        args: [{
                selector: '[mat-line], [matLine]',
                host: { 'class': 'mat-line' }
            }]
    }], null, null); })();
/**
 * Helper that takes a query list of lines and sets the correct class on the host.
 * \@docs-private
 * @param {?} lines
 * @param {?} element
 * @return {?}
 */
export function setLines(lines, element) {
    // Note: doesn't need to unsubscribe, because `changes`
    // gets completed by Angular when the view is destroyed.
    lines.changes.pipe(startWith(lines)).subscribe((/**
     * @param {?} __0
     * @return {?}
     */
    ({ length }) => {
        setClass(element, 'mat-2-line', false);
        setClass(element, 'mat-3-line', false);
        setClass(element, 'mat-multi-line', false);
        if (length === 2 || length === 3) {
            setClass(element, `mat-${length}-line`, true);
        }
        else if (length > 3) {
            setClass(element, `mat-multi-line`, true);
        }
    }));
}
/**
 * Adds or removes a class from an element.
 * @param {?} element
 * @param {?} className
 * @param {?} isAdd
 * @return {?}
 */
function setClass(element, className, isAdd) {
    /** @type {?} */
    const classList = element.nativeElement.classList;
    isAdd ? classList.add(className) : classList.remove(className);
}
/**
 * Helper that takes a query list of lines and sets the correct class on the host.
 * \@docs-private
 * @deprecated Use `setLines` instead.
 * \@breaking-change 8.0.0
 */
export class MatLineSetter {
    /**
     * @param {?} lines
     * @param {?} element
     */
    constructor(lines, element) {
        setLines(lines, element);
    }
}
export class MatLineModule {
}
MatLineModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatLineModule });
MatLineModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatLineModule_Factory(t) { return new (t || MatLineModule)(); }, imports: [[MatCommonModule], MatCommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatLineModule, { declarations: function () { return [MatLine]; }, imports: function () { return [MatCommonModule]; }, exports: function () { return [MatLine, MatCommonModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatLineModule, [{
        type: NgModule,
        args: [{
                imports: [MatCommonModule],
                exports: [MatLine, MatCommonModule],
                declarations: [MatLine]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL2NvcmUvbGluZS9saW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCxRQUFRLEVBQ1IsU0FBUyxHQUdWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDbEU7QUFFRTtBQUN3RTtBQUNJO0FBQy9COztBQU0vQyxNQUFNLE9BQU8sT0FBTztBQUFHO21DQUp0QixTQUFTLFNBQUMsa0JBQ1Q7RUFBUSxFQUFFLHVCQUF1QixrQkFDakMsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLFVBQVUsRUFBQyxjQUM1Qjs7Ozs7OzswQkFDSTtBQUFDO0FBQUk7QUFHc0Q7QUFBa0I7QUFFaEY7QUFDa0I7QUFBZTtBQUFuQyxNQUFNLFVBQVUsUUFBUSxDQUFDLEtBQXlCLEVBQUUsT0FBZ0M7QUFDcEYsSUFBRSx1REFBdUQ7QUFDekQsSUFBRSx3REFBd0Q7QUFDMUQsSUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTO0FBQU07QUFDM0M7QUFBbUI7QUFBUSxJQURXLENBQUMsRUFBQyxNQUFNLEVBQUMsRUFBRSxFQUFFO0FBQzlELFFBQUksUUFBUSxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDM0MsUUFBSSxRQUFRLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMzQyxRQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDL0MsUUFDSSxJQUFJLE1BQU0sS0FBSyxDQUFDLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtBQUN0QyxZQUFNLFFBQVEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxNQUFNLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNwRCxTQUFLO0FBQUMsYUFBSyxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDM0IsWUFBTSxRQUFRLENBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2hELFNBQUs7QUFDTCxJQUFFLENBQUMsRUFBQyxDQUFDO0FBQ0wsQ0FBQztBQUNEO0FBQ0c7QUFBNEM7QUFDMUI7QUFBd0I7QUFBb0I7QUFBZTtBQUFoRixTQUFTLFFBQVEsQ0FBQyxPQUFnQyxFQUFFLFNBQWlCLEVBQUUsS0FBYztBQUFJO0FBQzFFLFVBQVAsU0FBUyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUztBQUNuRCxJQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNqRSxDQUFDO0FBQ0Q7QUFDRztBQUMrRTtBQUVsRjtBQUNBO0FBQ0M7QUFDRCxNQUFNLE9BQU8sYUFBYTtBQUMxQjtBQUFRO0FBQXdCO0FBQTBCO0FBQVEsSUFBaEUsWUFBWSxLQUF5QixFQUFFLE9BQWdDO0FBQ3pFLFFBQUksUUFBUSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM3QixJQUFFLENBQUM7QUFDSCxDQUFDO0FBT0QsTUFBTSxPQUFPLGFBQWE7QUFBRzt5Q0FMNUIsUUFBUSxTQUFDO0tBQ1IsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDLGtCQUMxQixPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLGtCQUNuQyxZQUFZLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFDeEI7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7XG4gIE5nTW9kdWxlLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIFF1ZXJ5TGlzdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3N0YXJ0V2l0aH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtNYXRDb21tb25Nb2R1bGV9IGZyb20gJy4uL2NvbW1vbi1iZWhhdmlvcnMvY29tbW9uLW1vZHVsZSc7XG5cblxuLyoqXG4gKiBTaGFyZWQgZGlyZWN0aXZlIHRvIGNvdW50IGxpbmVzIGluc2lkZSBhIHRleHQgYXJlYSwgc3VjaCBhcyBhIGxpc3QgaXRlbS5cbiAqIExpbmUgZWxlbWVudHMgY2FuIGJlIGV4dHJhY3RlZCB3aXRoIGEgQENvbnRlbnRDaGlsZHJlbihNYXRMaW5lKSBxdWVyeSwgdGhlblxuICogY291bnRlZCBieSBjaGVja2luZyB0aGUgcXVlcnkgbGlzdCdzIGxlbmd0aC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21hdC1saW5lXSwgW21hdExpbmVdJyxcbiAgaG9zdDogeydjbGFzcyc6ICdtYXQtbGluZSd9XG59KVxuZXhwb3J0IGNsYXNzIE1hdExpbmUge31cblxuLyoqXG4gKiBIZWxwZXIgdGhhdCB0YWtlcyBhIHF1ZXJ5IGxpc3Qgb2YgbGluZXMgYW5kIHNldHMgdGhlIGNvcnJlY3QgY2xhc3Mgb24gdGhlIGhvc3QuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRMaW5lcyhsaW5lczogUXVlcnlMaXN0PE1hdExpbmU+LCBlbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge1xuICAvLyBOb3RlOiBkb2Vzbid0IG5lZWQgdG8gdW5zdWJzY3JpYmUsIGJlY2F1c2UgYGNoYW5nZXNgXG4gIC8vIGdldHMgY29tcGxldGVkIGJ5IEFuZ3VsYXIgd2hlbiB0aGUgdmlldyBpcyBkZXN0cm95ZWQuXG4gIGxpbmVzLmNoYW5nZXMucGlwZShzdGFydFdpdGgobGluZXMpKS5zdWJzY3JpYmUoKHtsZW5ndGh9KSA9PiB7XG4gICAgc2V0Q2xhc3MoZWxlbWVudCwgJ21hdC0yLWxpbmUnLCBmYWxzZSk7XG4gICAgc2V0Q2xhc3MoZWxlbWVudCwgJ21hdC0zLWxpbmUnLCBmYWxzZSk7XG4gICAgc2V0Q2xhc3MoZWxlbWVudCwgJ21hdC1tdWx0aS1saW5lJywgZmFsc2UpO1xuXG4gICAgaWYgKGxlbmd0aCA9PT0gMiB8fCBsZW5ndGggPT09IDMpIHtcbiAgICAgIHNldENsYXNzKGVsZW1lbnQsIGBtYXQtJHtsZW5ndGh9LWxpbmVgLCB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKGxlbmd0aCA+IDMpIHtcbiAgICAgIHNldENsYXNzKGVsZW1lbnQsIGBtYXQtbXVsdGktbGluZWAsIHRydWUpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBBZGRzIG9yIHJlbW92ZXMgYSBjbGFzcyBmcm9tIGFuIGVsZW1lbnQuICovXG5mdW5jdGlvbiBzZXRDbGFzcyhlbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiwgY2xhc3NOYW1lOiBzdHJpbmcsIGlzQWRkOiBib29sZWFuKTogdm9pZCB7XG4gIGNvbnN0IGNsYXNzTGlzdCA9IGVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3Q7XG4gIGlzQWRkID8gY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpIDogY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xufVxuXG4vKipcbiAqIEhlbHBlciB0aGF0IHRha2VzIGEgcXVlcnkgbGlzdCBvZiBsaW5lcyBhbmQgc2V0cyB0aGUgY29ycmVjdCBjbGFzcyBvbiB0aGUgaG9zdC5cbiAqIEBkb2NzLXByaXZhdGVcbiAqIEBkZXByZWNhdGVkIFVzZSBgc2V0TGluZXNgIGluc3RlYWQuXG4gKiBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4gKi9cbmV4cG9ydCBjbGFzcyBNYXRMaW5lU2V0dGVyIHtcbiAgY29uc3RydWN0b3IobGluZXM6IFF1ZXJ5TGlzdDxNYXRMaW5lPiwgZWxlbWVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pIHtcbiAgICBzZXRMaW5lcyhsaW5lcywgZWxlbWVudCk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW01hdENvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtNYXRMaW5lLCBNYXRDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtNYXRMaW5lXSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0TGluZU1vZHVsZSB7IH1cbiJdfQ==