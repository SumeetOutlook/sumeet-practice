/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, EventEmitter, Input, Output, NgZone, InjectionToken, Inject, Optional, } from '@angular/core';
import { Clipboard } from './clipboard';
/** Injection token that can be used to provide the default options to `CdkCopyToClipboard`. */
import * as ɵngcc0 from '@angular/core';
export var CKD_COPY_TO_CLIPBOARD_CONFIG = new InjectionToken('CKD_COPY_TO_CLIPBOARD_CONFIG');
/**
 * Provides behavior for a button that when clicked copies content into user's
 * clipboard.
 */
var CdkCopyToClipboard = /** @class */ (function () {
    function CdkCopyToClipboard(_clipboard, 
    /**
     * @deprecated _ngZone parameter to become required.
     * @breaking-change 10.0.0
     */
    _ngZone, config) {
        this._clipboard = _clipboard;
        this._ngZone = _ngZone;
        /** Content to be copied. */
        this.text = '';
        /**
         * How many times to attempt to copy the text. This may be necessary for longer text, because
         * the browser needs time to fill an intermediate textarea element and copy the content.
         */
        this.attempts = 1;
        /**
         * Emits when some text is copied to the clipboard. The
         * emitted value indicates whether copying was successful.
         */
        this.copied = new EventEmitter();
        /**
         * Emits when some text is copied to the clipboard. The
         * emitted value indicates whether copying was successful.
         * @deprecated Use `cdkCopyToClipboardCopied` instead.
         * @breaking-change 10.0.0
         */
        this._deprecatedCopied = this.copied;
        if (config && config.attempts != null) {
            this.attempts = config.attempts;
        }
    }
    /** Copies the current text to the clipboard. */
    CdkCopyToClipboard.prototype.copy = function (attempts) {
        var _this = this;
        if (attempts === void 0) { attempts = this.attempts; }
        if (attempts > 1) {
            var remainingAttempts_1 = attempts;
            var pending_1 = this._clipboard.beginCopy(this.text);
            var attempt_1 = function () {
                var successful = pending_1.copy();
                if (!successful && --remainingAttempts_1) {
                    // @breaking-change 10.0.0 Remove null check for `_ngZone`.
                    if (_this._ngZone) {
                        _this._ngZone.runOutsideAngular(function () { return setTimeout(attempt_1); });
                    }
                    else {
                        setTimeout(attempt_1);
                    }
                }
                else {
                    pending_1.destroy();
                    _this.copied.emit(successful);
                }
            };
            attempt_1();
        }
        else {
            this.copied.emit(this._clipboard.copy(this.text));
        }
    };
    /** @nocollapse */
    CdkCopyToClipboard.ctorParameters = function () { return [
        { type: Clipboard },
        { type: NgZone },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [CKD_COPY_TO_CLIPBOARD_CONFIG,] }] }
    ]; };
    CdkCopyToClipboard.propDecorators = {
        text: [{ type: Input, args: ['cdkCopyToClipboard',] }],
        attempts: [{ type: Input, args: ['cdkCopyToClipboardAttempts',] }],
        copied: [{ type: Output, args: ['cdkCopyToClipboardCopied',] }],
        _deprecatedCopied: [{ type: Output, args: ['copied',] }]
    };
CdkCopyToClipboard.ɵfac = function CdkCopyToClipboard_Factory(t) { return new (t || CdkCopyToClipboard)(ɵngcc0.ɵɵdirectiveInject(Clipboard), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(CKD_COPY_TO_CLIPBOARD_CONFIG, 8)); };
CdkCopyToClipboard.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkCopyToClipboard, selectors: [["", "cdkCopyToClipboard", ""]], hostBindings: function CdkCopyToClipboard_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function CdkCopyToClipboard_click_HostBindingHandler() { return ctx.copy(); });
    } }, inputs: { text: ["cdkCopyToClipboard", "text"], attempts: ["cdkCopyToClipboardAttempts", "attempts"] }, outputs: { copied: "cdkCopyToClipboardCopied", _deprecatedCopied: "copied" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkCopyToClipboard, [{
        type: Directive,
        args: [{
                selector: '[cdkCopyToClipboard]',
                host: {
                    '(click)': 'copy()'
                }
            }]
    }], function () { return [{ type: Clipboard }, { type: ɵngcc0.NgZone }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [CKD_COPY_TO_CLIPBOARD_CONFIG]
            }] }]; }, { text: [{
            type: Input,
            args: ['cdkCopyToClipboard']
        }], attempts: [{
            type: Input,
            args: ['cdkCopyToClipboardAttempts']
        }], copied: [{
            type: Output,
            args: ['cdkCopyToClipboardCopied']
        }], _deprecatedCopied: [{
            type: Output,
            args: ['copied']
        }] }); })();
    return CdkCopyToClipboard;
}());
export { CdkCopyToClipboard };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weS10by1jbGlwYm9hcmQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvY2xpcGJvYXJkL2NvcHktdG8tY2xpcGJvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLE1BQU0sRUFDTixjQUFjLEVBQ2QsTUFBTSxFQUNOLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBUXRDLCtGQUErRjs7QUFDL0YsTUFBTSxDQUFDLElBQU0sNEJBQTRCLEdBQ3JDLElBQUksY0FBYyxDQUEyQiw4QkFBOEIsQ0FBQyxDQUFDO0FBRWpGO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUVLLElBNEJILDRCQUNVLFVBQXFCO0FBQ2hDLElBQUc7QUFDSjtBQUNBO0FBQ0EsT0FBTztBQUNQLElBQVksT0FBZ0IsRUFDMEIsTUFBaUM7QUFDdkYsUUFQWSxlQUFVLEdBQVYsVUFBVSxDQUFXO0FBQUMsUUFLdEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztBQUFDLFFBN0IzQiw0QkFBNEI7QUFDOUIsUUFBK0IsU0FBSSxHQUFXLEVBQUUsQ0FBQztBQUNqRCxRQUNFO0FBQ0Y7QUFDTTtBQUVBLFdBREQ7QUFDTCxRQUF1QyxhQUFRLEdBQVcsQ0FBQyxDQUFDO0FBQzVELFFBQ0U7QUFDRjtBQUNNO0FBRUEsV0FERDtBQUNMLFFBQXNDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0FBQzNFLFFBQ0U7QUFDRjtBQUNNO0FBQ007QUFDTTtBQUVBLFdBRGI7QUFDTCxRQUFvQixzQkFBaUIsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3BELFFBVUksSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7QUFDM0MsWUFBTSxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7QUFDdEMsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQ0UsZ0RBQWdEO0FBQ2xELElBQUUsaUNBQUksR0FBSixVQUFLLFFBQWdDO0FBQUksUUFBekMsaUJBc0JDO0FBQ0gsUUF2Qk8seUJBQUEsRUFBQSxXQUFtQixJQUFJLENBQUMsUUFBUTtBQUFJLFFBQ3ZDLElBQUksUUFBUSxHQUFHLENBQUMsRUFBRTtBQUN0QixZQUFNLElBQUksbUJBQWlCLEdBQUcsUUFBUSxDQUFDO0FBQ3ZDLFlBQU0sSUFBTSxTQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzNELFlBQU0sSUFBTSxTQUFPLEdBQUc7QUFDaEIsZ0JBQUUsSUFBTSxVQUFVLEdBQUcsU0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzFDLGdCQUFRLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRSxtQkFBaUIsRUFBRTtBQUNoRCxvQkFBVSwyREFBMkQ7QUFDckUsb0JBQVUsSUFBSSxLQUFJLENBQUMsT0FBTyxFQUFFO0FBQzVCLHdCQUFZLEtBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsY0FBTSxPQUFBLFVBQVUsQ0FBQyxTQUFPLENBQUMsRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO0FBQ3RFLHFCQUFXO0FBQUMseUJBQUs7QUFDakIsd0JBQVksVUFBVSxDQUFDLFNBQU8sQ0FBQyxDQUFDO0FBQ2hDLHFCQUFXO0FBQ1gsaUJBQVM7QUFBQyxxQkFBSztBQUNmLG9CQUFVLFNBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUM1QixvQkFBVSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN2QyxpQkFBUztBQUNULFlBQU0sQ0FBQyxDQUFDO0FBQ1IsWUFBTSxTQUFPLEVBQUUsQ0FBQztBQUNoQixTQUFLO0FBQUMsYUFBSztBQUNYLFlBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDeEQsU0FBSztBQUNMLElBQUUsQ0FBQyxDQTdETTtBQUFDOytCQU5ULFNBQVMsU0FBQyxqREFNc0I7UUFML0IsUUFBUSxFQUFFLGxCQU9tQixnQkF4QnZCLFNBQVM7V0FpQmlCLFhBakJiLGdCQUxuQixNQUFNO09BdUJOLElBQUksRUFBRSwwQkFDSixTQUFTLEVBQUUsUUFBUSx1QkFDcEIsa0JBQ0YsbkdBekJDLGdEQXlERyxRQUFRLFlBQUksTUFBTSxTQUFDLDRCQUE0QjtBQUFRO0FBQVU7QUFFbEQsdUJBL0JqQixLQUFLLFNBQUMsb0JBQW9CO0FBQU8sMkJBTWpDLEtBQUssU0FBQyw0QkFBNEI7QUFBTyx5QkFNekMsTUFBTSxTQUFDLDBCQUEwQjtBQUFPLG9DQVF4QyxNQUFNLFNBQUMsUUFBUTtBQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQU07QUFBQyxJQXdDL0IseUJBQUM7QUFDQSxDQURBLEFBcEVELElBb0VDO0FBQ0QsU0EvRGEsa0JBQWtCO0FBQzlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBOZ1pvbmUsXG4gIEluamVjdGlvblRva2VuLFxuICBJbmplY3QsXG4gIE9wdGlvbmFsLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2xpcGJvYXJkfSBmcm9tICcuL2NsaXBib2FyZCc7XG5cbi8qKiBPYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byBjb25maWd1cmUgdGhlIGRlZmF1bHQgb3B0aW9ucyBmb3IgYENka0NvcHlUb0NsaXBib2FyZGAuICovXG5leHBvcnQgaW50ZXJmYWNlIENka0NvcHlUb0NsaXBib2FyZENvbmZpZyB7XG4gIC8qKiBEZWZhdWx0IG51bWJlciBvZiBhdHRlbXB0cyB0byBtYWtlIHdoZW4gY29weWluZyB0ZXh0IHRvIHRoZSBjbGlwYm9hcmQuICovXG4gIGF0dGVtcHRzPzogbnVtYmVyO1xufVxuXG4vKiogSW5qZWN0aW9uIHRva2VuIHRoYXQgY2FuIGJlIHVzZWQgdG8gcHJvdmlkZSB0aGUgZGVmYXVsdCBvcHRpb25zIHRvIGBDZGtDb3B5VG9DbGlwYm9hcmRgLiAqL1xuZXhwb3J0IGNvbnN0IENLRF9DT1BZX1RPX0NMSVBCT0FSRF9DT05GSUcgPVxuICAgIG5ldyBJbmplY3Rpb25Ub2tlbjxDZGtDb3B5VG9DbGlwYm9hcmRDb25maWc+KCdDS0RfQ09QWV9UT19DTElQQk9BUkRfQ09ORklHJyk7XG5cbi8qKlxuICogUHJvdmlkZXMgYmVoYXZpb3IgZm9yIGEgYnV0dG9uIHRoYXQgd2hlbiBjbGlja2VkIGNvcGllcyBjb250ZW50IGludG8gdXNlcidzXG4gKiBjbGlwYm9hcmQuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjZGtDb3B5VG9DbGlwYm9hcmRdJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ2NvcHkoKScsXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgQ2RrQ29weVRvQ2xpcGJvYXJkIHtcbiAgLyoqIENvbnRlbnQgdG8gYmUgY29waWVkLiAqL1xuICBASW5wdXQoJ2Nka0NvcHlUb0NsaXBib2FyZCcpIHRleHQ6IHN0cmluZyA9ICcnO1xuXG4gIC8qKlxuICAgKiBIb3cgbWFueSB0aW1lcyB0byBhdHRlbXB0IHRvIGNvcHkgdGhlIHRleHQuIFRoaXMgbWF5IGJlIG5lY2Vzc2FyeSBmb3IgbG9uZ2VyIHRleHQsIGJlY2F1c2VcbiAgICogdGhlIGJyb3dzZXIgbmVlZHMgdGltZSB0byBmaWxsIGFuIGludGVybWVkaWF0ZSB0ZXh0YXJlYSBlbGVtZW50IGFuZCBjb3B5IHRoZSBjb250ZW50LlxuICAgKi9cbiAgQElucHV0KCdjZGtDb3B5VG9DbGlwYm9hcmRBdHRlbXB0cycpIGF0dGVtcHRzOiBudW1iZXIgPSAxO1xuXG4gIC8qKlxuICAgKiBFbWl0cyB3aGVuIHNvbWUgdGV4dCBpcyBjb3BpZWQgdG8gdGhlIGNsaXBib2FyZC4gVGhlXG4gICAqIGVtaXR0ZWQgdmFsdWUgaW5kaWNhdGVzIHdoZXRoZXIgY29weWluZyB3YXMgc3VjY2Vzc2Z1bC5cbiAgICovXG4gIEBPdXRwdXQoJ2Nka0NvcHlUb0NsaXBib2FyZENvcGllZCcpIGNvcGllZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAvKipcbiAgICogRW1pdHMgd2hlbiBzb21lIHRleHQgaXMgY29waWVkIHRvIHRoZSBjbGlwYm9hcmQuIFRoZVxuICAgKiBlbWl0dGVkIHZhbHVlIGluZGljYXRlcyB3aGV0aGVyIGNvcHlpbmcgd2FzIHN1Y2Nlc3NmdWwuXG4gICAqIEBkZXByZWNhdGVkIFVzZSBgY2RrQ29weVRvQ2xpcGJvYXJkQ29waWVkYCBpbnN0ZWFkLlxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDEwLjAuMFxuICAgKi9cbiAgQE91dHB1dCgnY29waWVkJykgX2RlcHJlY2F0ZWRDb3BpZWQgPSB0aGlzLmNvcGllZDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9jbGlwYm9hcmQ6IENsaXBib2FyZCxcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBfbmdab25lIHBhcmFtZXRlciB0byBiZWNvbWUgcmVxdWlyZWQuXG4gICAgICogQGJyZWFraW5nLWNoYW5nZSAxMC4wLjBcbiAgICAgKi9cbiAgICBwcml2YXRlIF9uZ1pvbmU/OiBOZ1pvbmUsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChDS0RfQ09QWV9UT19DTElQQk9BUkRfQ09ORklHKSBjb25maWc/OiBDZGtDb3B5VG9DbGlwYm9hcmRDb25maWcpIHtcblxuICAgIGlmIChjb25maWcgJiYgY29uZmlnLmF0dGVtcHRzICE9IG51bGwpIHtcbiAgICAgIHRoaXMuYXR0ZW1wdHMgPSBjb25maWcuYXR0ZW1wdHM7XG4gICAgfVxuICB9XG5cbiAgLyoqIENvcGllcyB0aGUgY3VycmVudCB0ZXh0IHRvIHRoZSBjbGlwYm9hcmQuICovXG4gIGNvcHkoYXR0ZW1wdHM6IG51bWJlciA9IHRoaXMuYXR0ZW1wdHMpOiB2b2lkIHtcbiAgICBpZiAoYXR0ZW1wdHMgPiAxKSB7XG4gICAgICBsZXQgcmVtYWluaW5nQXR0ZW1wdHMgPSBhdHRlbXB0cztcbiAgICAgIGNvbnN0IHBlbmRpbmcgPSB0aGlzLl9jbGlwYm9hcmQuYmVnaW5Db3B5KHRoaXMudGV4dCk7XG4gICAgICBjb25zdCBhdHRlbXB0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWNjZXNzZnVsID0gcGVuZGluZy5jb3B5KCk7XG4gICAgICAgIGlmICghc3VjY2Vzc2Z1bCAmJiAtLXJlbWFpbmluZ0F0dGVtcHRzKSB7XG4gICAgICAgICAgLy8gQGJyZWFraW5nLWNoYW5nZSAxMC4wLjAgUmVtb3ZlIG51bGwgY2hlY2sgZm9yIGBfbmdab25lYC5cbiAgICAgICAgICBpZiAodGhpcy5fbmdab25lKSB7XG4gICAgICAgICAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dChhdHRlbXB0KSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoYXR0ZW1wdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBlbmRpbmcuZGVzdHJveSgpO1xuICAgICAgICAgIHRoaXMuY29waWVkLmVtaXQoc3VjY2Vzc2Z1bCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBhdHRlbXB0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29waWVkLmVtaXQodGhpcy5fY2xpcGJvYXJkLmNvcHkodGhpcy50ZXh0KSk7XG4gICAgfVxuICB9XG59XG4iXX0=