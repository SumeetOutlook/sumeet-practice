import { __decorate, __param } from "tslib";
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
/**
 * Gets the width of the scrollbar.  Nesc for windows
 * http://stackoverflow.com/a/13382873/888165
 */
import * as ɵngcc0 from '@angular/core';
var ScrollbarHelper = /** @class */ (function () {
    function ScrollbarHelper(document) {
        this.document = document;
        this.width = this.getWidth();
    }
    ScrollbarHelper.prototype.getWidth = function () {
        var outer = this.document.createElement('div');
        outer.style.visibility = 'hidden';
        outer.style.width = '100px';
        outer.style.msOverflowStyle = 'scrollbar';
        this.document.body.appendChild(outer);
        var widthNoScroll = outer.offsetWidth;
        outer.style.overflow = 'scroll';
        var inner = this.document.createElement('div');
        inner.style.width = '100%';
        outer.appendChild(inner);
        var widthWithScroll = inner.offsetWidth;
        outer.parentNode.removeChild(outer);
        return widthNoScroll - widthWithScroll;
    };
    ScrollbarHelper.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    ScrollbarHelper = __decorate([ __param(0, Inject(DOCUMENT))
    ], ScrollbarHelper);
ScrollbarHelper.ɵfac = function ScrollbarHelper_Factory(t) { return new (t || ScrollbarHelper)(ɵngcc0.ɵɵinject(DOCUMENT)); };
ScrollbarHelper.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: ScrollbarHelper, factory: function (t) { return ScrollbarHelper.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ScrollbarHelper, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
    return ScrollbarHelper;
}());
export { ScrollbarHelper };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsYmFyLWhlbHBlci5zZXJ2aWNlLmpzIiwic291cmNlcyI6WyJuZzovQHN3aW1sYW5lL25neC1kYXRhdGFibGUvbGliL3NlcnZpY2VzL3Njcm9sbGJhci1oZWxwZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDb0IsSUFFbEIseUJBQXNDLFFBQWE7QUFBSSxRQUFqQixhQUFRLEdBQVIsUUFBUSxDQUFLO0FBQUMsUUFGcEQsVUFBSyxHQUFXLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNsQyxJQUN3RCxDQUFDO0FBQ3pELElBQ0Usa0NBQVEsR0FBUjtBQUFjLFFBQ1osSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDckQsUUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7QUFDdEMsUUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7QUFDaEMsUUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxXQUFXLENBQUM7QUFDOUMsUUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDMUMsUUFDSSxJQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO0FBQzVDLFFBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQ3BDLFFBQ0ksSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDckQsUUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7QUFDL0IsUUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzdCLFFBQ0ksSUFBTSxlQUFlLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztBQUM5QyxRQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3hDLFFBQ0ksT0FBTyxhQUFhLEdBQUcsZUFBZSxDQUFDO0FBQzNDLElBQUUsQ0FBQztBQUNGO0FBQzBELGdEQXRCNUMsTUFBTSxTQUFDLFFBQVE7QUFBUTtBQUFVLElBSG5DLGVBQWUsd0JBRDNCLFVBQVUsRUFBRSxyQkFDTCxDQUdPLFdBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBQUMsT0FIbkIsZUFBZSxDQXdCM0I7Ozs7Ozs7O2tDQUNEO0FBQUMsSUFERCxzQkFBQztBQUNBLENBREEsQUF4QkQsSUF3QkM7QUFDRCxTQXpCYSxlQUFlO0FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbi8qKlxuICogR2V0cyB0aGUgd2lkdGggb2YgdGhlIHNjcm9sbGJhci4gIE5lc2MgZm9yIHdpbmRvd3NcbiAqIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzEzMzgyODczLzg4ODE2NVxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2Nyb2xsYmFySGVscGVyIHtcbiAgd2lkdGg6IG51bWJlciA9IHRoaXMuZ2V0V2lkdGgoKTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnkpIHt9XG5cbiAgZ2V0V2lkdGgoKTogbnVtYmVyIHtcbiAgICBjb25zdCBvdXRlciA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3V0ZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIG91dGVyLnN0eWxlLndpZHRoID0gJzEwMHB4JztcbiAgICBvdXRlci5zdHlsZS5tc092ZXJmbG93U3R5bGUgPSAnc2Nyb2xsYmFyJztcbiAgICB0aGlzLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3V0ZXIpO1xuXG4gICAgY29uc3Qgd2lkdGhOb1Njcm9sbCA9IG91dGVyLm9mZnNldFdpZHRoO1xuICAgIG91dGVyLnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG5cbiAgICBjb25zdCBpbm5lciA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5uZXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgb3V0ZXIuYXBwZW5kQ2hpbGQoaW5uZXIpO1xuXG4gICAgY29uc3Qgd2lkdGhXaXRoU2Nyb2xsID0gaW5uZXIub2Zmc2V0V2lkdGg7XG4gICAgb3V0ZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvdXRlcik7XG5cbiAgICByZXR1cm4gd2lkdGhOb1Njcm9sbCAtIHdpZHRoV2l0aFNjcm9sbDtcbiAgfVxufVxuIl19