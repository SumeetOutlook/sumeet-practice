import { DomSanitizer } from '@angular/platform-browser';
import { QuillService } from './quill.service';
import { Component, Inject, Input, ViewEncapsulation } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@angular/platform-browser';
export class QuillViewHTMLComponent {
    constructor(sanitizer, service) {
        this.sanitizer = sanitizer;
        this.service = service;
        this.innerHTML = '';
        this.themeClass = 'ql-snow';
        this.content = '';
    }
    ngOnChanges(changes) {
        if (changes.theme) {
            const theme = changes.theme.currentValue || (this.service.config.theme ? this.service.config.theme : 'snow');
            this.themeClass = `ql-${theme} ngx-quill-view-html`;
        }
        else if (!this.theme) {
            const theme = this.service.config.theme ? this.service.config.theme : 'snow';
            this.themeClass = `ql-${theme} ngx-quill-view-html`;
        }
        if (changes.content) {
            this.innerHTML = this.sanitizer.bypassSecurityTrustHtml(changes.content.currentValue);
        }
    }
}
QuillViewHTMLComponent.ɵfac = function QuillViewHTMLComponent_Factory(t) { return new (t || QuillViewHTMLComponent)(ɵngcc0.ɵɵdirectiveInject(DomSanitizer), ɵngcc0.ɵɵdirectiveInject(QuillService)); };
QuillViewHTMLComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: QuillViewHTMLComponent, selectors: [["quill-view-html"]], inputs: { content: "content", theme: "theme" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [[1, "ql-container", 3, "ngClass"], [1, "ql-editor", 3, "innerHTML"]], template: function QuillViewHTMLComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelement(1, "div", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ctx.themeClass);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("innerHTML", ctx.innerHTML, ɵngcc0.ɵɵsanitizeHtml);
    } }, directives: [ɵngcc1.NgClass], styles: ["\n.ql-container.ngx-quill-view-html {\n  border: 0;\n}\n"], encapsulation: 2 });
QuillViewHTMLComponent.ctorParameters = () => [
    { type: DomSanitizer, decorators: [{ type: Inject, args: [DomSanitizer,] }] },
    { type: QuillService }
];
QuillViewHTMLComponent.propDecorators = {
    content: [{ type: Input }],
    theme: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(QuillViewHTMLComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                selector: 'quill-view-html',
                template: `
  <div class="ql-container" [ngClass]="themeClass">
    <div class="ql-editor" [innerHTML]="innerHTML">
    </div>
  </div>
`,
                styles: [`
.ql-container.ngx-quill-view-html {
  border: 0;
}
`]
            }]
    }], function () { return [{ type: ɵngcc2.DomSanitizer, decorators: [{
                type: Inject,
                args: [DomSanitizer]
            }] }, { type: QuillService }]; }, { content: [{
            type: Input
        }], theme: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpbGwtdmlldy1odG1sLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXF1aWxsL3NyYy9saWIvcXVpbGwtdmlldy1odG1sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUE7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFBO0FBRTlDLE9BQU8sRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLEtBQUssRUFHTCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUE7Ozs7QUFpQnRCLE1BQU0sT0FBTyxzQkFBc0I7QUFBRyxJQU9wQyxZQUNnQyxTQUF1QixFQUMzQyxPQUFxQjtBQUNoQyxRQUYrQixjQUFTLEdBQVQsU0FBUyxDQUFjO0FBQUMsUUFDNUMsWUFBTyxHQUFQLE9BQU8sQ0FBYztBQUNuQyxRQVRFLGNBQVMsR0FBYSxFQUFFLENBQUE7QUFDMUIsUUFBRSxlQUFVLEdBQUcsU0FBUyxDQUFBO0FBQ3hCLFFBQ1csWUFBTyxHQUFHLEVBQUUsQ0FBQTtBQUN2QixJQUtLLENBQUM7QUFDTixJQUNFLFdBQVcsQ0FBQyxPQUFzQjtBQUNwQyxRQUFJLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtBQUN2QixZQUFNLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQ2xILFlBQU0sSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLEtBQUssc0JBQXNCLENBQUE7QUFDekQsU0FBSztBQUFDLGFBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDNUIsWUFBTSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFBO0FBQ2xGLFlBQU0sSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLEtBQUssc0JBQXNCLENBQUE7QUFDekQsU0FBSztBQUNMLFFBQUksSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO0FBQ3pCLFlBQU0sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUE7QUFDM0YsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNIO2tEQXZDQyxTQUFTLFNBQUMsa0JBQ1QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUksa0JBQ3JDLFFBQVEsRUFBRSxpQkFBaUIsa0JBTTNCLFFBQVEsRUFBRTsySEFLWCwyQkFWVSxzREFJVixlQU9BOzs7Ozs7OztpSUFDSTtBQUFDO0FBQWdELFlBM0I3QyxZQUFZLHVCQW1DaEIsTUFBTSxTQUFDLFlBQVk7QUFBUyxZQWxDeEIsWUFBWTtBQUFHO0FBQUc7QUFHZixzQkEyQlQsS0FBSztBQUFLLG9CQUNWLEtBQUs7QUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInXG5pbXBvcnQgeyBRdWlsbFNlcnZpY2UgfSBmcm9tICcuL3F1aWxsLnNlcnZpY2UnXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5AQ29tcG9uZW50KHtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICdxdWlsbC12aWV3LWh0bWwnLFxuICBzdHlsZXM6IFtgXG4ucWwtY29udGFpbmVyLm5neC1xdWlsbC12aWV3LWh0bWwge1xuICBib3JkZXI6IDA7XG59XG5gXSxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBjbGFzcz1cInFsLWNvbnRhaW5lclwiIFtuZ0NsYXNzXT1cInRoZW1lQ2xhc3NcIj5cbiAgICA8ZGl2IGNsYXNzPVwicWwtZWRpdG9yXCIgW2lubmVySFRNTF09XCJpbm5lckhUTUxcIj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFF1aWxsVmlld0hUTUxDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBpbm5lckhUTUw6IFNhZmVIdG1sID0gJydcbiAgdGhlbWVDbGFzcyA9ICdxbC1zbm93J1xuXG4gIEBJbnB1dCgpIGNvbnRlbnQgPSAnJ1xuICBASW5wdXQoKSB0aGVtZT86IHN0cmluZ1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRG9tU2FuaXRpemVyKSBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBRdWlsbFNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy50aGVtZSkge1xuICAgICAgY29uc3QgdGhlbWUgPSBjaGFuZ2VzLnRoZW1lLmN1cnJlbnRWYWx1ZSB8fCAodGhpcy5zZXJ2aWNlLmNvbmZpZy50aGVtZSA/IHRoaXMuc2VydmljZS5jb25maWcudGhlbWUgOiAnc25vdycpXG4gICAgICB0aGlzLnRoZW1lQ2xhc3MgPSBgcWwtJHt0aGVtZX0gbmd4LXF1aWxsLXZpZXctaHRtbGBcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnRoZW1lKSB7XG4gICAgICBjb25zdCB0aGVtZSA9IHRoaXMuc2VydmljZS5jb25maWcudGhlbWUgPyB0aGlzLnNlcnZpY2UuY29uZmlnLnRoZW1lIDogJ3Nub3cnXG4gICAgICB0aGlzLnRoZW1lQ2xhc3MgPSBgcWwtJHt0aGVtZX0gbmd4LXF1aWxsLXZpZXctaHRtbGBcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuY29udGVudCkge1xuICAgICAgdGhpcy5pbm5lckhUTUwgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChjaGFuZ2VzLmNvbnRlbnQuY3VycmVudFZhbHVlKVxuICAgIH1cbiAgfVxufVxuIl19