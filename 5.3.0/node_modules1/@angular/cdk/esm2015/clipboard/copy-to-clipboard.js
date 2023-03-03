/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/clipboard/copy-to-clipboard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, EventEmitter, Input, Output, NgZone, InjectionToken, Inject, Optional, } from '@angular/core';
import { Clipboard } from './clipboard';
/**
 * Object that can be used to configure the default options for `CdkCopyToClipboard`.
 * @record
 */
import * as ɵngcc0 from '@angular/core';
export function CdkCopyToClipboardConfig() { }
if (false) {
    /**
     * Default number of attempts to make when copying text to the clipboard.
     * @type {?|undefined}
     */
    CdkCopyToClipboardConfig.prototype.attempts;
}
/**
 * Injection token that can be used to provide the default options to `CdkCopyToClipboard`.
 * @type {?}
 */
export const CKD_COPY_TO_CLIPBOARD_CONFIG = new InjectionToken('CKD_COPY_TO_CLIPBOARD_CONFIG');
/**
 * Provides behavior for a button that when clicked copies content into user's
 * clipboard.
 */
export class CdkCopyToClipboard {
    /**
     * @param {?} _clipboard
     * @param {?=} _ngZone
     * @param {?=} config
     */
    constructor(_clipboard, _ngZone, config) {
        this._clipboard = _clipboard;
        this._ngZone = _ngZone;
        /**
         * Content to be copied.
         */
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
         * \@breaking-change 10.0.0
         */
        this._deprecatedCopied = this.copied;
        if (config && config.attempts != null) {
            this.attempts = config.attempts;
        }
    }
    /**
     * Copies the current text to the clipboard.
     * @param {?=} attempts
     * @return {?}
     */
    copy(attempts = this.attempts) {
        if (attempts > 1) {
            /** @type {?} */
            let remainingAttempts = attempts;
            /** @type {?} */
            const pending = this._clipboard.beginCopy(this.text);
            /** @type {?} */
            const attempt = (/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const successful = pending.copy();
                if (!successful && --remainingAttempts) {
                    // @breaking-change 10.0.0 Remove null check for `_ngZone`.
                    if (this._ngZone) {
                        this._ngZone.runOutsideAngular((/**
                         * @return {?}
                         */
                        () => setTimeout(attempt)));
                    }
                    else {
                        setTimeout(attempt);
                    }
                }
                else {
                    pending.destroy();
                    this.copied.emit(successful);
                }
            });
            attempt();
        }
        else {
            this.copied.emit(this._clipboard.copy(this.text));
        }
    }
}
CdkCopyToClipboard.ɵfac = function CdkCopyToClipboard_Factory(t) { return new (t || CdkCopyToClipboard)(ɵngcc0.ɵɵdirectiveInject(Clipboard), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(CKD_COPY_TO_CLIPBOARD_CONFIG, 8)); };
CdkCopyToClipboard.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkCopyToClipboard, selectors: [["", "cdkCopyToClipboard", ""]], hostBindings: function CdkCopyToClipboard_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function CdkCopyToClipboard_click_HostBindingHandler() { return ctx.copy(); });
    } }, inputs: { text: ["cdkCopyToClipboard", "text"], attempts: ["cdkCopyToClipboardAttempts", "attempts"] }, outputs: { copied: "cdkCopyToClipboardCopied", _deprecatedCopied: "copied" } });
/** @nocollapse */
CdkCopyToClipboard.ctorParameters = () => [
    { type: Clipboard },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [CKD_COPY_TO_CLIPBOARD_CONFIG,] }] }
];
CdkCopyToClipboard.propDecorators = {
    text: [{ type: Input, args: ['cdkCopyToClipboard',] }],
    attempts: [{ type: Input, args: ['cdkCopyToClipboardAttempts',] }],
    copied: [{ type: Output, args: ['cdkCopyToClipboardCopied',] }],
    _deprecatedCopied: [{ type: Output, args: ['copied',] }]
};
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
if (false) {
    /**
     * Content to be copied.
     * @type {?}
     */
    CdkCopyToClipboard.prototype.text;
    /**
     * How many times to attempt to copy the text. This may be necessary for longer text, because
     * the browser needs time to fill an intermediate textarea element and copy the content.
     * @type {?}
     */
    CdkCopyToClipboard.prototype.attempts;
    /**
     * Emits when some text is copied to the clipboard. The
     * emitted value indicates whether copying was successful.
     * @type {?}
     */
    CdkCopyToClipboard.prototype.copied;
    /**
     * Emits when some text is copied to the clipboard. The
     * emitted value indicates whether copying was successful.
     * @deprecated Use `cdkCopyToClipboardCopied` instead.
     * \@breaking-change 10.0.0
     * @type {?}
     */
    CdkCopyToClipboard.prototype._deprecatedCopied;
    /**
     * @type {?}
     * @private
     */
    CdkCopyToClipboard.prototype._clipboard;
    /**
     * @deprecated _ngZone parameter to become required.
     * \@breaking-change 10.0.0
     * @type {?}
     * @private
     */
    CdkCopyToClipboard.prototype._ngZone;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weS10by1jbGlwYm9hcmQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvY2xpcGJvYXJkL2NvcHktdG8tY2xpcGJvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sTUFBTSxFQUNOLGNBQWMsRUFDZCxNQUFNLEVBQ04sUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDdEM7QUFDRztBQUFzRjtBQUMvRTs7QUFBViw4Q0FHQztBQUNEO0FBQ1k7QUFBUTtBQUNsQjtBQUEyQjtBQUFRLElBSm5DLDRDQUFrQjtBQUNwQjtBQUNBO0FBQ0c7QUFBNEY7QUFDbkY7QUFBWixNQUFNLE9BQU8sNEJBQTRCLEdBQ3JDLElBQUksY0FBYyxDQUEyQiw4QkFBOEIsQ0FBQztBQUNoRjtBQUNHO0FBQzJFO0FBQ2pFO0FBUWIsTUFBTSxPQUFPLGtCQUFrQjtBQUMvQjtBQUFRO0FBQ0Y7QUFBMkI7QUFHL0I7QUFBUSxJQW1CUixZQUNVLFVBQXFCLEVBS3JCLE9BQWdCLEVBQzBCLE1BQWlDO0FBQ3ZGLFFBUFksZUFBVSxHQUFWLFVBQVUsQ0FBVztBQUFDLFFBS3RCLFlBQU8sR0FBUCxPQUFPLENBQVM7QUFBQztBQUNsQjtBQUFpQztBQUFZLFFBN0J6QixTQUFJLEdBQVcsRUFBRSxDQUFDO0FBQ2pEO0FBRUs7QUFDTTtBQUVBO0FBQVksUUFBZ0IsYUFBUSxHQUFXLENBQUMsQ0FBQztBQUM1RDtBQUVLO0FBQ007QUFFQTtBQUFZLFFBQWUsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7QUFDM0U7QUFFSztBQUNNO0FBQ007QUFDTTtBQUVDO0FBQVksUUFBaEIsc0JBQWlCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUNwRCxRQVVJLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO0FBQzNDLFlBQU0sSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO0FBQ3RDLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSDtBQUNPO0FBQ0Y7QUFBNEI7QUFDOUI7QUFBUSxJQURULElBQUksQ0FBQyxXQUFtQixJQUFJLENBQUMsUUFBUTtBQUFJLFFBQ3ZDLElBQUksUUFBUSxHQUFHLENBQUMsRUFBRTtBQUN0QjtBQUE2QixnQkFBbkIsaUJBQWlCLEdBQUcsUUFBUTtBQUN0QztBQUE2QixrQkFBakIsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDMUQ7QUFBNkIsa0JBQWpCLE9BQU87QUFBUTtBQUNIO0FBQWdCLFlBRGxCLEdBQUcsRUFBRTtBQUMzQjtBQUFpQyxzQkFBbkIsVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUU7QUFDekMsZ0JBQVEsSUFBSSxDQUFDLFVBQVUsSUFBSSxFQUFFLGlCQUFpQixFQUFFO0FBQ2hELG9CQUFVLDJEQUEyRDtBQUNyRSxvQkFBVSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFDNUIsd0JBQVksSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUI7QUFBTTtBQUNoQztBQUNTLHdCQUZrQixHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUMsQ0FBQztBQUN0RSxxQkFBVztBQUFDLHlCQUFLO0FBQ2pCLHdCQUFZLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNoQyxxQkFBVztBQUNYLGlCQUFTO0FBQUMscUJBQUs7QUFDZixvQkFBVSxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDNUIsb0JBQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDdkMsaUJBQVM7QUFDVCxZQUFNLENBQUMsQ0FBQTtBQUNQLFlBQU0sT0FBTyxFQUFFLENBQUM7QUFDaEIsU0FBSztBQUFDLGFBQUs7QUFDWCxZQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3hELFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSDs4Q0FwRUMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxzQkFBc0Isa0JBQ2hDLElBQUksRUFBRSxzQkFDSixTQUFTLEVBQUUsUUFBUSxtQkFDcEIsY0FDRjs7O2lNQUNJO0FBQUM7QUFBbUI7QUFFckIsWUF4QkksU0FBUztBQUFJLFlBTG5CLE1BQU07QUFDTiw0Q0F5REcsUUFBUSxZQUFJLE1BQU0sU0FBQyw0QkFBNEI7QUFBUTtBQUFHO0FBRXRELG1CQS9CTixLQUFLLFNBQUMsb0JBQW9CO0FBQU8sdUJBTWpDLEtBQUssU0FBQyw0QkFBNEI7QUFBTyxxQkFNekMsTUFBTSxTQUFDLDBCQUEwQjtBQUFPLGdDQVF4QyxNQUFNLFNBQUMsUUFBUTtBQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDO0FBQWE7QUFBUTtBQUd4QztBQUFpQjtBQUFRLElBdkIvQixrQ0FBK0M7QUFDakQ7QUFFQztBQUNFO0FBQ0U7QUFDVztBQUFRLElBQXRCLHNDQUEwRDtBQUM1RDtBQUVDO0FBQ0U7QUFDRTtBQUNXO0FBQVEsSUFBdEIsb0NBQXlFO0FBQzNFO0FBRUM7QUFDRTtBQUNFO0FBQ0U7QUFFSDtBQUFpQjtBQUFRLElBQTNCLCtDQUFrRDtBQUNwRDtBQUNPO0FBQ0U7QUFBZ0I7QUFBUSxJQUE3Qix3Q0FBNkI7QUFBQztBQUMzQjtBQUNpRDtBQUV4RDtBQUNTO0FBQWdCO0FBQ3RCLElBREMscUNBQXdCO0FBQUM7QUFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIE5nWm9uZSxcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIEluamVjdCxcbiAgT3B0aW9uYWwsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDbGlwYm9hcmR9IGZyb20gJy4vY2xpcGJvYXJkJztcblxuLyoqIE9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIGNvbmZpZ3VyZSB0aGUgZGVmYXVsdCBvcHRpb25zIGZvciBgQ2RrQ29weVRvQ2xpcGJvYXJkYC4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2RrQ29weVRvQ2xpcGJvYXJkQ29uZmlnIHtcbiAgLyoqIERlZmF1bHQgbnVtYmVyIG9mIGF0dGVtcHRzIHRvIG1ha2Ugd2hlbiBjb3B5aW5nIHRleHQgdG8gdGhlIGNsaXBib2FyZC4gKi9cbiAgYXR0ZW1wdHM/OiBudW1iZXI7XG59XG5cbi8qKiBJbmplY3Rpb24gdG9rZW4gdGhhdCBjYW4gYmUgdXNlZCB0byBwcm92aWRlIHRoZSBkZWZhdWx0IG9wdGlvbnMgdG8gYENka0NvcHlUb0NsaXBib2FyZGAuICovXG5leHBvcnQgY29uc3QgQ0tEX0NPUFlfVE9fQ0xJUEJPQVJEX0NPTkZJRyA9XG4gICAgbmV3IEluamVjdGlvblRva2VuPENka0NvcHlUb0NsaXBib2FyZENvbmZpZz4oJ0NLRF9DT1BZX1RPX0NMSVBCT0FSRF9DT05GSUcnKTtcblxuLyoqXG4gKiBQcm92aWRlcyBiZWhhdmlvciBmb3IgYSBidXR0b24gdGhhdCB3aGVuIGNsaWNrZWQgY29waWVzIGNvbnRlbnQgaW50byB1c2VyJ3NcbiAqIGNsaXBib2FyZC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Nka0NvcHlUb0NsaXBib2FyZF0nLFxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnY29weSgpJyxcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBDZGtDb3B5VG9DbGlwYm9hcmQge1xuICAvKiogQ29udGVudCB0byBiZSBjb3BpZWQuICovXG4gIEBJbnB1dCgnY2RrQ29weVRvQ2xpcGJvYXJkJykgdGV4dDogc3RyaW5nID0gJyc7XG5cbiAgLyoqXG4gICAqIEhvdyBtYW55IHRpbWVzIHRvIGF0dGVtcHQgdG8gY29weSB0aGUgdGV4dC4gVGhpcyBtYXkgYmUgbmVjZXNzYXJ5IGZvciBsb25nZXIgdGV4dCwgYmVjYXVzZVxuICAgKiB0aGUgYnJvd3NlciBuZWVkcyB0aW1lIHRvIGZpbGwgYW4gaW50ZXJtZWRpYXRlIHRleHRhcmVhIGVsZW1lbnQgYW5kIGNvcHkgdGhlIGNvbnRlbnQuXG4gICAqL1xuICBASW5wdXQoJ2Nka0NvcHlUb0NsaXBib2FyZEF0dGVtcHRzJykgYXR0ZW1wdHM6IG51bWJlciA9IDE7XG5cbiAgLyoqXG4gICAqIEVtaXRzIHdoZW4gc29tZSB0ZXh0IGlzIGNvcGllZCB0byB0aGUgY2xpcGJvYXJkLiBUaGVcbiAgICogZW1pdHRlZCB2YWx1ZSBpbmRpY2F0ZXMgd2hldGhlciBjb3B5aW5nIHdhcyBzdWNjZXNzZnVsLlxuICAgKi9cbiAgQE91dHB1dCgnY2RrQ29weVRvQ2xpcGJvYXJkQ29waWVkJykgY29waWVkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8qKlxuICAgKiBFbWl0cyB3aGVuIHNvbWUgdGV4dCBpcyBjb3BpZWQgdG8gdGhlIGNsaXBib2FyZC4gVGhlXG4gICAqIGVtaXR0ZWQgdmFsdWUgaW5kaWNhdGVzIHdoZXRoZXIgY29weWluZyB3YXMgc3VjY2Vzc2Z1bC5cbiAgICogQGRlcHJlY2F0ZWQgVXNlIGBjZGtDb3B5VG9DbGlwYm9hcmRDb3BpZWRgIGluc3RlYWQuXG4gICAqIEBicmVha2luZy1jaGFuZ2UgMTAuMC4wXG4gICAqL1xuICBAT3V0cHV0KCdjb3BpZWQnKSBfZGVwcmVjYXRlZENvcGllZCA9IHRoaXMuY29waWVkO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2NsaXBib2FyZDogQ2xpcGJvYXJkLFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIF9uZ1pvbmUgcGFyYW1ldGVyIHRvIGJlY29tZSByZXF1aXJlZC5cbiAgICAgKiBAYnJlYWtpbmctY2hhbmdlIDEwLjAuMFxuICAgICAqL1xuICAgIHByaXZhdGUgX25nWm9uZT86IE5nWm9uZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KENLRF9DT1BZX1RPX0NMSVBCT0FSRF9DT05GSUcpIGNvbmZpZz86IENka0NvcHlUb0NsaXBib2FyZENvbmZpZykge1xuXG4gICAgaWYgKGNvbmZpZyAmJiBjb25maWcuYXR0ZW1wdHMgIT0gbnVsbCkge1xuICAgICAgdGhpcy5hdHRlbXB0cyA9IGNvbmZpZy5hdHRlbXB0cztcbiAgICB9XG4gIH1cblxuICAvKiogQ29waWVzIHRoZSBjdXJyZW50IHRleHQgdG8gdGhlIGNsaXBib2FyZC4gKi9cbiAgY29weShhdHRlbXB0czogbnVtYmVyID0gdGhpcy5hdHRlbXB0cyk6IHZvaWQge1xuICAgIGlmIChhdHRlbXB0cyA+IDEpIHtcbiAgICAgIGxldCByZW1haW5pbmdBdHRlbXB0cyA9IGF0dGVtcHRzO1xuICAgICAgY29uc3QgcGVuZGluZyA9IHRoaXMuX2NsaXBib2FyZC5iZWdpbkNvcHkodGhpcy50ZXh0KTtcbiAgICAgIGNvbnN0IGF0dGVtcHQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3NmdWwgPSBwZW5kaW5nLmNvcHkoKTtcbiAgICAgICAgaWYgKCFzdWNjZXNzZnVsICYmIC0tcmVtYWluaW5nQXR0ZW1wdHMpIHtcbiAgICAgICAgICAvLyBAYnJlYWtpbmctY2hhbmdlIDEwLjAuMCBSZW1vdmUgbnVsbCBjaGVjayBmb3IgYF9uZ1pvbmVgLlxuICAgICAgICAgIGlmICh0aGlzLl9uZ1pvbmUpIHtcbiAgICAgICAgICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KGF0dGVtcHQpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dChhdHRlbXB0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGVuZGluZy5kZXN0cm95KCk7XG4gICAgICAgICAgdGhpcy5jb3BpZWQuZW1pdChzdWNjZXNzZnVsKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGF0dGVtcHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb3BpZWQuZW1pdCh0aGlzLl9jbGlwYm9hcmQuY29weSh0aGlzLnRleHQpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==