import { __awaiter } from "tslib";
import { isPlatformServer } from '@angular/common';
import { Component, ElementRef, Inject, Input, PLATFORM_ID, Renderer2, ViewEncapsulation, NgZone, SecurityContext } from '@angular/core';
import { getFormat } from './helpers';
import { QuillService } from './quill.service';
import { DomSanitizer } from '@angular/platform-browser';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/platform-browser';
export class QuillViewComponent {
    constructor(elementRef, renderer, zone, service, domSanitizer, platformId) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.zone = zone;
        this.service = service;
        this.domSanitizer = domSanitizer;
        this.platformId = platformId;
        this.sanitize = false;
        this.strict = true;
        this.customModules = [];
        this.customOptions = [];
        this.preserveWhitespace = false;
        this.valueSetter = (quillEditor, value) => {
            const format = getFormat(this.format, this.service.config.format);
            let content = value;
            if (format === 'text') {
                quillEditor.setText(content);
            }
            else {
                if (format === 'html') {
                    if (this.sanitize) {
                        value = this.domSanitizer.sanitize(SecurityContext.HTML, value);
                    }
                    content = quillEditor.clipboard.convert(value);
                }
                else if (format === 'json') {
                    try {
                        content = JSON.parse(value);
                    }
                    catch (e) {
                        content = [{ insert: value }];
                    }
                }
                quillEditor.setContents(content);
            }
        };
    }
    ngOnChanges(changes) {
        if (!this.quillEditor) {
            return;
        }
        if (changes.content) {
            this.valueSetter(this.quillEditor, changes.content.currentValue);
        }
    }
    ngAfterViewInit() {
        return __awaiter(this, void 0, void 0, function* () {
            if (isPlatformServer(this.platformId)) {
                return;
            }
            const Quill = yield this.service.getQuill();
            const modules = Object.assign({}, this.modules || this.service.config.modules);
            modules.toolbar = false;
            this.customOptions.forEach((customOption) => {
                const newCustomOption = Quill.import(customOption.import);
                newCustomOption.whitelist = customOption.whitelist;
                Quill.register(newCustomOption, true);
            });
            this.customModules.forEach(({ implementation, path }) => {
                Quill.register(path, implementation);
            });
            let debug = this.debug;
            if (!debug && debug !== false && this.service.config.debug) {
                debug = this.service.config.debug;
            }
            let formats = this.formats;
            if (!formats && formats === undefined) {
                formats = this.service.config.formats ?
                    Object.assign({}, this.service.config.formats) : (this.service.config.formats === null ? null : undefined);
            }
            const theme = this.theme || (this.service.config.theme ? this.service.config.theme : 'snow');
            this.elementRef.nativeElement.insertAdjacentHTML('afterbegin', this.preserveWhitespace ? '<pre quill-view-element></pre>' : '<div quill-view-element></div>');
            this.editorElem = this.elementRef.nativeElement.querySelector('[quill-view-element]');
            this.zone.runOutsideAngular(() => {
                this.quillEditor = new Quill(this.editorElem, {
                    debug: debug,
                    formats: formats,
                    modules,
                    readOnly: true,
                    strict: this.strict,
                    theme
                });
            });
            this.renderer.addClass(this.editorElem, 'ngx-quill-view');
            if (this.content) {
                this.valueSetter(this.quillEditor, this.content);
            }
        });
    }
}
QuillViewComponent.ɵfac = function QuillViewComponent_Factory(t) { return new (t || QuillViewComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(QuillService), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DomSanitizer), ɵngcc0.ɵɵdirectiveInject(PLATFORM_ID)); };
QuillViewComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: QuillViewComponent, selectors: [["quill-view"]], inputs: { sanitize: "sanitize", strict: "strict", customModules: "customModules", customOptions: "customOptions", preserveWhitespace: "preserveWhitespace", format: "format", theme: "theme", modules: "modules", debug: "debug", formats: "formats", content: "content" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function QuillViewComponent_Template(rf, ctx) { }, styles: ["\n.ql-container.ngx-quill-view {\n  border: 0;\n}\n"], encapsulation: 2 });
QuillViewComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NgZone },
    { type: QuillService },
    { type: DomSanitizer },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
QuillViewComponent.propDecorators = {
    format: [{ type: Input }],
    theme: [{ type: Input }],
    modules: [{ type: Input }],
    debug: [{ type: Input }],
    formats: [{ type: Input }],
    sanitize: [{ type: Input }],
    strict: [{ type: Input }],
    content: [{ type: Input }],
    customModules: [{ type: Input }],
    customOptions: [{ type: Input }],
    preserveWhitespace: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(QuillViewComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                selector: 'quill-view',
                template: `
`,
                styles: [`
.ql-container.ngx-quill-view {
  border: 0;
}
`]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.NgZone }, { type: QuillService }, { type: ɵngcc1.DomSanitizer }, { type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, { sanitize: [{
            type: Input
        }], strict: [{
            type: Input
        }], customModules: [{
            type: Input
        }], customOptions: [{
            type: Input
        }], preserveWhitespace: [{
            type: Input
        }], format: [{
            type: Input
        }], theme: [{
            type: Input
        }], modules: [{
            type: Input
        }], debug: [{
            type: Input
        }], formats: [{
            type: Input
        }], content: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpbGwtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1xdWlsbC9zcmMvbGliL3F1aWxsLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQTtBQUlsRCxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUVMLFdBQVcsRUFDWCxTQUFTLEVBRVQsaUJBQWlCLEVBQ2pCLE1BQU0sRUFDTixlQUFlLEVBQ2hCLE1BQU0sZUFBZSxDQUFBO0FBR3RCLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxXQUFXLENBQUE7QUFDbkMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFBO0FBQzlDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQTs7O0FBYXhELE1BQU0sT0FBTyxrQkFBa0I7QUFBRyxJQWdCaEMsWUFDUyxVQUFzQixFQUNuQixRQUFtQixFQUNuQixJQUFZLEVBQ1osT0FBcUIsRUFDckIsWUFBMEIsRUFDTCxVQUFlO0FBQ2hELFFBTlMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtBQUFDLFFBQ3BCLGFBQVEsR0FBUixRQUFRLENBQVc7QUFBQyxRQUNwQixTQUFJLEdBQUosSUFBSSxDQUFRO0FBQUMsUUFDYixZQUFPLEdBQVAsT0FBTyxDQUFjO0FBQUMsUUFDdEIsaUJBQVksR0FBWixZQUFZLENBQWM7QUFBQyxRQUNOLGVBQVUsR0FBVixVQUFVLENBQUs7QUFBQyxRQWJ4QyxhQUFRLEdBQUcsS0FBSyxDQUFBO0FBQzNCLFFBQVcsV0FBTSxHQUFHLElBQUksQ0FBQTtBQUN4QixRQUNXLGtCQUFhLEdBQW1CLEVBQUUsQ0FBQTtBQUM3QyxRQUFXLGtCQUFhLEdBQW1CLEVBQUUsQ0FBQTtBQUM3QyxRQUFXLHVCQUFrQixHQUFHLEtBQUssQ0FBQTtBQUNyQyxR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QUFDLFdBQVc7QUFBUTtBQUFHO0FBR3RCLHFCQXJCVCxLQUFLO0FBQUssb0JBQ1YsS0FBSztBQUFLLHNCQUNWLEtBQUs7QUFBSyxvQkFDVixLQUFLO0FBQUssc0JBQ1YsS0FBSztBQUFLLHVCQUNWLEtBQUs7QUFBSyxxQkFDVixLQUFLO0FBQUssc0JBQ1YsS0FBSztBQUFLLDRCQUNWLEtBQUs7QUFBSyw0QkFDVixLQUFLO0FBQUssaUNBQ1YsS0FBSztBQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nXG5pbXBvcnQgUXVpbGxUeXBlIGZyb20gJ3F1aWxsJ1xuaW1wb3J0IHsgUXVpbGxNb2R1bGVzIH0gZnJvbSAnLi9xdWlsbC1lZGl0b3IuaW50ZXJmYWNlcydcblxuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFBMQVRGT1JNX0lELFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBOZ1pvbmUsXG4gIFNlY3VyaXR5Q29udGV4dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBDdXN0b21PcHRpb24sIEN1c3RvbU1vZHVsZSB9IGZyb20gJy4vcXVpbGwtZWRpdG9yLmludGVyZmFjZXMnXG5pbXBvcnQge2dldEZvcm1hdH0gZnJvbSAnLi9oZWxwZXJzJ1xuaW1wb3J0IHsgUXVpbGxTZXJ2aWNlIH0gZnJvbSAnLi9xdWlsbC5zZXJ2aWNlJ1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlcidcblxuQENvbXBvbmVudCh7XG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAncXVpbGwtdmlldycsXG4gIHN0eWxlczogW2Bcbi5xbC1jb250YWluZXIubmd4LXF1aWxsLXZpZXcge1xuICBib3JkZXI6IDA7XG59XG5gXSxcbiAgdGVtcGxhdGU6IGBcbmBcbn0pXG5leHBvcnQgY2xhc3MgUXVpbGxWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgcXVpbGxFZGl0b3IhOiBRdWlsbFR5cGVcbiAgZWRpdG9yRWxlbSE6IEhUTUxFbGVtZW50XG5cbiAgQElucHV0KCkgZm9ybWF0PzogJ29iamVjdCcgfCAnaHRtbCcgfCAndGV4dCcgfCAnanNvbidcbiAgQElucHV0KCkgdGhlbWU/OiBzdHJpbmdcbiAgQElucHV0KCkgbW9kdWxlcz86IFF1aWxsTW9kdWxlc1xuICBASW5wdXQoKSBkZWJ1Zz86ICd3YXJuJyB8wqAnbG9nJyB8wqAnZXJyb3InIHzCoGZhbHNlXG4gIEBJbnB1dCgpIGZvcm1hdHM/OiBzdHJpbmdbXSB8wqBudWxsXG4gIEBJbnB1dCgpIHNhbml0aXplID0gZmFsc2VcbiAgQElucHV0KCkgc3RyaWN0ID0gdHJ1ZVxuICBASW5wdXQoKSBjb250ZW50OiBhbnlcbiAgQElucHV0KCkgY3VzdG9tTW9kdWxlczogQ3VzdG9tTW9kdWxlW10gPSBbXVxuICBASW5wdXQoKSBjdXN0b21PcHRpb25zOiBDdXN0b21PcHRpb25bXSA9IFtdXG4gIEBJbnB1dCgpIHByZXNlcnZlV2hpdGVzcGFjZSA9IGZhbHNlXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJvdGVjdGVkIHpvbmU6IE5nWm9uZSxcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogUXVpbGxTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBkb21TYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcm90ZWN0ZWQgcGxhdGZvcm1JZDogYW55LFxuICApIHt9XG5cbiAgdmFsdWVTZXR0ZXIgPSAocXVpbGxFZGl0b3I6IFF1aWxsVHlwZSwgdmFsdWU6IGFueSk6IGFueSA9PiB7XG4gICAgY29uc3QgZm9ybWF0ID0gZ2V0Rm9ybWF0KHRoaXMuZm9ybWF0LCB0aGlzLnNlcnZpY2UuY29uZmlnLmZvcm1hdClcbiAgICBsZXQgY29udGVudCA9IHZhbHVlXG4gICAgaWYgKGZvcm1hdCA9PT0gJ3RleHQnKSB7XG4gICAgICBxdWlsbEVkaXRvci5zZXRUZXh0KGNvbnRlbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChmb3JtYXQgPT09ICdodG1sJykge1xuICAgICAgICBpZiAodGhpcy5zYW5pdGl6ZSkge1xuICAgICAgICAgIHZhbHVlID0gdGhpcy5kb21TYW5pdGl6ZXIuc2FuaXRpemUoU2VjdXJpdHlDb250ZXh0LkhUTUwsIHZhbHVlKVxuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQgPSBxdWlsbEVkaXRvci5jbGlwYm9hcmQuY29udmVydCh2YWx1ZSlcbiAgICAgIH3CoGVsc2UgaWYgKGZvcm1hdCA9PT0gJ2pzb24nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29udGVudCA9IEpTT04ucGFyc2UodmFsdWUpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb250ZW50ID0gW3sgaW5zZXJ0OiB2YWx1ZSB9XVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBxdWlsbEVkaXRvci5zZXRDb250ZW50cyhjb250ZW50KVxuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoIXRoaXMucXVpbGxFZGl0b3IpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5jb250ZW50KSB7XG4gICAgICB0aGlzLnZhbHVlU2V0dGVyKHRoaXMucXVpbGxFZGl0b3IsIGNoYW5nZXMuY29udGVudC5jdXJyZW50VmFsdWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmIChpc1BsYXRmb3JtU2VydmVyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IFF1aWxsID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmdldFF1aWxsKClcblxuICAgIGNvbnN0IG1vZHVsZXMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm1vZHVsZXMgfHwgdGhpcy5zZXJ2aWNlLmNvbmZpZy5tb2R1bGVzKVxuICAgIG1vZHVsZXMudG9vbGJhciA9IGZhbHNlXG5cbiAgICB0aGlzLmN1c3RvbU9wdGlvbnMuZm9yRWFjaCgoY3VzdG9tT3B0aW9uKSA9PiB7XG4gICAgICBjb25zdCBuZXdDdXN0b21PcHRpb24gPSBRdWlsbC5pbXBvcnQoY3VzdG9tT3B0aW9uLmltcG9ydClcbiAgICAgIG5ld0N1c3RvbU9wdGlvbi53aGl0ZWxpc3QgPSBjdXN0b21PcHRpb24ud2hpdGVsaXN0XG4gICAgICBRdWlsbC5yZWdpc3RlcihuZXdDdXN0b21PcHRpb24sIHRydWUpXG4gICAgfSlcblxuICAgIHRoaXMuY3VzdG9tTW9kdWxlcy5mb3JFYWNoKCh7aW1wbGVtZW50YXRpb24sIHBhdGh9KSA9PiB7XG4gICAgICBRdWlsbC5yZWdpc3RlcihwYXRoLCBpbXBsZW1lbnRhdGlvbilcbiAgICB9KVxuXG4gICAgbGV0IGRlYnVnID0gdGhpcy5kZWJ1Z1xuICAgIGlmICghZGVidWcgJiYgZGVidWcgIT09IGZhbHNlICYmIHRoaXMuc2VydmljZS5jb25maWcuZGVidWcpIHtcbiAgICAgIGRlYnVnID0gdGhpcy5zZXJ2aWNlLmNvbmZpZy5kZWJ1Z1xuICAgIH1cblxuICAgIGxldCBmb3JtYXRzID0gdGhpcy5mb3JtYXRzXG4gICAgaWYgKCFmb3JtYXRzICYmIGZvcm1hdHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZm9ybWF0cyA9IHRoaXMuc2VydmljZS5jb25maWcuZm9ybWF0cyA/XG4gICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc2VydmljZS5jb25maWcuZm9ybWF0cykgOsKgKHRoaXMuc2VydmljZS5jb25maWcuZm9ybWF0cyA9PT0gbnVsbCA/IG51bGwgOiB1bmRlZmluZWQpXG4gICAgfVxuICAgIGNvbnN0IHRoZW1lID0gdGhpcy50aGVtZSB8fCAodGhpcy5zZXJ2aWNlLmNvbmZpZy50aGVtZSA/IHRoaXMuc2VydmljZS5jb25maWcudGhlbWUgOiAnc25vdycpXG5cbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAnYWZ0ZXJiZWdpbicsXG4gICAgICB0aGlzLnByZXNlcnZlV2hpdGVzcGFjZSA/ICc8cHJlIHF1aWxsLXZpZXctZWxlbWVudD48L3ByZT4nIDogJzxkaXYgcXVpbGwtdmlldy1lbGVtZW50PjwvZGl2PidcbiAgICApXG5cbiAgICB0aGlzLmVkaXRvckVsZW0gPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJ1txdWlsbC12aWV3LWVsZW1lbnRdJ1xuICAgICkgYXMgSFRNTEVsZW1lbnRcblxuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLnF1aWxsRWRpdG9yID0gbmV3IFF1aWxsKHRoaXMuZWRpdG9yRWxlbSwge1xuICAgICAgICBkZWJ1ZzogZGVidWcgYXMgYW55LFxuICAgICAgICBmb3JtYXRzOiBmb3JtYXRzIGFzIGFueSxcbiAgICAgICAgbW9kdWxlcyxcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgIHN0cmljdDogdGhpcy5zdHJpY3QsXG4gICAgICAgIHRoZW1lXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWRpdG9yRWxlbSwgJ25neC1xdWlsbC12aWV3JylcblxuICAgIGlmICh0aGlzLmNvbnRlbnQpIHtcbiAgICAgIHRoaXMudmFsdWVTZXR0ZXIodGhpcy5xdWlsbEVkaXRvciwgdGhpcy5jb250ZW50KVxuICAgIH1cbiAgfVxufVxuIl19