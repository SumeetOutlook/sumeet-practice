import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
var KeysPipe = /** @class */ (function () {
    /**
     * Extract object keys pipe
     */
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        if (!value) {
            return value;
        }
        return Object.keys(value);
    };
KeysPipe.ɵfac = function KeysPipe_Factory(t) { return new (t || KeysPipe)(); };
KeysPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "keys", type: KeysPipe, pure: false });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(KeysPipe, [{
        type: Pipe,
        args: [{
                name: 'keys',
                pure: false
            }]
    }], function () { return []; }, null); })();
    return KeysPipe;
}());
export { KeysPipe };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5cy5waXBlLmpzIiwic291cmNlcyI6WyJuZzovbmctc25vdGlmeS9saWIvcGlwZXMva2V5cy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFTcEQ7QUFBNEMsSUFINUM7QUFDQTtBQUVBLE9BREc7QUFDSCxJQUFBO0FBQXNCLElBT3RCLENBQUM7QUFDRCxJQVBFLDRCQUFTLEdBQVQsVUFBVSxLQUFVLEVBQUUsSUFBa0I7QUFBSSxRQUF0QixxQkFBQSxFQUFBLFdBQWtCO0FBQUksUUFDMUMsSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNoQixZQUFNLE9BQU8sS0FBSyxDQUFDO0FBQ25CLFNBQUs7QUFDTCxRQUFJLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM5QixJQUFFLENBQUM7SUFOVSxRQUFRLHdCQVBwQixJQUFJLENBQUMsY0FDSixJQUFJLEVBQUUsTUFBTTtDQUNaLElBQUksRUFBRSxLQUFLLFVBQ1osQ0FBQyxTQUNGLG1EQUVHO01BQ1UsUUFBUSxDQU9wQjs7Ozs7O2dEQUNEO0FBQUMsSUFERCxlQUFDO0FBQ0EsQ0FEQSxBQVBELElBT0M7O0FBaEJBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFTQSxBQUhBLEFBRUEsQUFDQSxBQU9BLEFBQUEsQUFOQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBTkEsQUFBQSxBQVBBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFFQSxBQUNBLEFBQUEsQUFPQSxBQUFBLEFBQUEsQUFBQSxBQVBBLEFBT0EsQUFQQSxBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdrZXlzJyxcclxuICBwdXJlOiBmYWxzZVxyXG59KVxyXG4vKipcclxuICogRXh0cmFjdCBvYmplY3Qga2V5cyBwaXBlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgS2V5c1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgYXJnczogYW55W10gPSBudWxsKTogYW55IHtcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlKTtcclxuICB9XHJcbn1cclxuIl19