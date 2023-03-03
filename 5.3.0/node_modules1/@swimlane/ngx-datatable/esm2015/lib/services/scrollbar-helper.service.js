import { __decorate, __param } from "tslib";
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
/**
 * Gets the width of the scrollbar.  Nesc for windows
 * http://stackoverflow.com/a/13382873/888165
 */
import * as ɵngcc0 from '@angular/core';
let ScrollbarHelper = class ScrollbarHelper {
    constructor(document) {
        this.document = document;
        this.width = this.getWidth();
    }
    getWidth() {
        const outer = this.document.createElement('div');
        outer.style.visibility = 'hidden';
        outer.style.width = '100px';
        outer.style.msOverflowStyle = 'scrollbar';
        this.document.body.appendChild(outer);
        const widthNoScroll = outer.offsetWidth;
        outer.style.overflow = 'scroll';
        const inner = this.document.createElement('div');
        inner.style.width = '100%';
        outer.appendChild(inner);
        const widthWithScroll = inner.offsetWidth;
        outer.parentNode.removeChild(outer);
        return widthNoScroll - widthWithScroll;
    }
};
ScrollbarHelper.ɵfac = function ScrollbarHelper_Factory(t) { return new (t || ScrollbarHelper)(ɵngcc0.ɵɵinject(DOCUMENT)); };
ScrollbarHelper.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: ScrollbarHelper, factory: function (t) { return ScrollbarHelper.ɵfac(t); } });
ScrollbarHelper.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
ScrollbarHelper = __decorate([ __param(0, Inject(DOCUMENT))
], ScrollbarHelper);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ScrollbarHelper, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
export { ScrollbarHelper };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsYmFyLWhlbHBlci5zZXJ2aWNlLmpzIiwic291cmNlcyI6WyJuZzovQHN3aW1sYW5lL25neC1kYXRhdGFibGUvbGliL3NlcnZpY2VzL3Njcm9sbGJhci1oZWxwZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtBQUM1QixJQUVFLFlBQXNDLFFBQWE7QUFBSSxRQUFqQixhQUFRLEdBQVIsUUFBUSxDQUFLO0FBQUMsUUFGcEQsVUFBSyxHQUFXLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNsQyxJQUN3RCxDQUFDO0FBQ3pELElBQ0UsUUFBUTtBQUFLLFFBQ1gsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDckQsUUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7QUFDdEMsUUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7QUFDaEMsUUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxXQUFXLENBQUM7QUFDOUMsUUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDMUMsUUFDSSxNQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO0FBQzVDLFFBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQ3BDLFFBQ0ksTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDckQsUUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7QUFDL0IsUUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzdCLFFBQ0ksTUFBTSxlQUFlLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztBQUM5QyxRQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3hDLFFBQ0ksT0FBTyxhQUFhLEdBQUcsZUFBZSxDQUFDO0FBQzNDLElBQUUsQ0FBQztBQUNILENBQUM7O3lJQUFBO0FBQ0Q7QUFBeUMsNENBdEIxQixNQUFNLFNBQUMsUUFBUTtBQUFRO0FBSHpCLGVBQWUsb0JBRDNCLFVBQVUsRUFBRSxqQkFDVCxDQUdXLFdBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBQUMsR0FIbkIsZUFBZSxDQXdCM0I7Ozs7OztrQ0FDRDtBQUFDLFNBekJZLGVBQWU7QUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuLyoqXG4gKiBHZXRzIHRoZSB3aWR0aCBvZiB0aGUgc2Nyb2xsYmFyLiAgTmVzYyBmb3Igd2luZG93c1xuICogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTMzODI4NzMvODg4MTY1XG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY3JvbGxiYXJIZWxwZXIge1xuICB3aWR0aDogbnVtYmVyID0gdGhpcy5nZXRXaWR0aCgpO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSkge31cblxuICBnZXRXaWR0aCgpOiBudW1iZXIge1xuICAgIGNvbnN0IG91dGVyID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvdXRlci5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgb3V0ZXIuc3R5bGUud2lkdGggPSAnMTAwcHgnO1xuICAgIG91dGVyLnN0eWxlLm1zT3ZlcmZsb3dTdHlsZSA9ICdzY3JvbGxiYXInO1xuICAgIHRoaXMuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdXRlcik7XG5cbiAgICBjb25zdCB3aWR0aE5vU2Nyb2xsID0gb3V0ZXIub2Zmc2V0V2lkdGg7XG4gICAgb3V0ZXIuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcblxuICAgIGNvbnN0IGlubmVyID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbm5lci5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICBvdXRlci5hcHBlbmRDaGlsZChpbm5lcik7XG5cbiAgICBjb25zdCB3aWR0aFdpdGhTY3JvbGwgPSBpbm5lci5vZmZzZXRXaWR0aDtcbiAgICBvdXRlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG91dGVyKTtcblxuICAgIHJldHVybiB3aWR0aE5vU2Nyb2xsIC0gd2lkdGhXaXRoU2Nyb2xsO1xuICB9XG59XG4iXX0=