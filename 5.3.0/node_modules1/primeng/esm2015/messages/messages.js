import { NgModule, Component, Input, Output, EventEmitter, Optional, ElementRef, ChangeDetectionStrategy, ContentChildren, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, transition, animate } from '@angular/animations';
import { PrimeTemplate, MessageService } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'primeng/api';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from 'primeng/ripple';

function Messages_ng_container_1_div_1_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 11);
} if (rf & 2) {
    const msg_r4 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", msg_r4.summary, ɵngcc0.ɵɵsanitizeHtml);
} }
function Messages_ng_container_1_div_1_ng_container_3_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 12);
} if (rf & 2) {
    const msg_r4 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", msg_r4.detail, ɵngcc0.ɵɵsanitizeHtml);
} }
function Messages_ng_container_1_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, Messages_ng_container_1_div_1_ng_container_3_span_1_Template, 1, 1, "span", 9);
    ɵngcc0.ɵɵtemplate(2, Messages_ng_container_1_div_1_ng_container_3_span_2_Template, 1, 1, "span", 10);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const msg_r4 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", msg_r4.summary);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", msg_r4.detail);
} }
function Messages_ng_container_1_div_1_ng_template_4_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 15);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const msg_r4 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(msg_r4.summary);
} }
function Messages_ng_container_1_div_1_ng_template_4_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 16);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const msg_r4 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(msg_r4.detail);
} }
function Messages_ng_container_1_div_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, Messages_ng_container_1_div_1_ng_template_4_span_0_Template, 2, 1, "span", 13);
    ɵngcc0.ɵɵtemplate(1, Messages_ng_container_1_div_1_ng_template_4_span_1_Template, 2, 1, "span", 14);
} if (rf & 2) {
    const msg_r4 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("ngIf", msg_r4.summary);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", msg_r4.detail);
} }
function Messages_ng_container_1_div_1_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 17);
    ɵngcc0.ɵɵlistener("click", function Messages_ng_container_1_div_1_button_6_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r22); const i_r5 = ɵngcc0.ɵɵnextContext().index; const ctx_r20 = ɵngcc0.ɵɵnextContext(2); return ctx_r20.removeMessage(i_r5); });
    ɵngcc0.ɵɵelement(1, "i", 18);
    ɵngcc0.ɵɵelementEnd();
} }
const _c0 = function (a0, a1) { return { showTransitionParams: a0, hideTransitionParams: a1 }; };
const _c1 = function (a1) { return { value: "visible", params: a1 }; };
const _c2 = function (a0, a1, a2, a3) { return { "pi-info-circle": a0, "pi-check": a1, "pi-exclamation-triangle": a2, "pi-times-circle": a3 }; };
function Messages_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵelementStart(1, "div", 5);
    ɵngcc0.ɵɵelement(2, "span", 6);
    ɵngcc0.ɵɵtemplate(3, Messages_ng_container_1_div_1_ng_container_3_Template, 3, 2, "ng-container", 1);
    ɵngcc0.ɵɵtemplate(4, Messages_ng_container_1_div_1_ng_template_4_Template, 2, 2, "ng-template", null, 7, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(6, Messages_ng_container_1_div_1_button_6_Template, 2, 0, "button", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const msg_r4 = ctx.$implicit;
    const _r7 = ɵngcc0.ɵɵreference(5);
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngClass", "p-message p-message-" + msg_r4.severity)("@messageAnimation", ɵngcc0.ɵɵpureFunction1(9, _c1, ɵngcc0.ɵɵpureFunction2(6, _c0, ctx_r3.showTransitionOptions, ctx_r3.hideTransitionOptions)));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(11, _c2, msg_r4.severity === "info", msg_r4.severity === "success", msg_r4.severity === "warn", msg_r4.severity === "error"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r3.escape)("ngIfElse", _r7);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.closable);
} }
function Messages_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, Messages_ng_container_1_div_1_Template, 7, 16, "div", 3);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.value);
} }
function Messages_ng_template_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Messages_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵelementStart(1, "div", 5);
    ɵngcc0.ɵɵtemplate(2, Messages_ng_template_2_ng_container_2_Template, 1, 0, "ng-container", 19);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", "p-message p-message-" + ctx_r2.severity);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.contentTemplate);
} }
export class Messages {
    constructor(messageService, el, cd) {
        this.messageService = messageService;
        this.el = el;
        this.cd = cd;
        this.closable = true;
        this.enableService = true;
        this.escape = true;
        this.showTransitionOptions = '300ms ease-out';
        this.hideTransitionOptions = '200ms cubic-bezier(0.86, 0, 0.07, 1)';
        this.valueChange = new EventEmitter();
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'content':
                    this.contentTemplate = item.template;
                    break;
                default:
                    this.contentTemplate = item.template;
                    break;
            }
        });
        if (this.messageService && this.enableService && !this.contentTemplate) {
            this.messageSubscription = this.messageService.messageObserver.subscribe((messages) => {
                if (messages) {
                    if (messages instanceof Array) {
                        let filteredMessages = messages.filter(m => this.key === m.key);
                        this.value = this.value ? [...this.value, ...filteredMessages] : [...filteredMessages];
                    }
                    else if (this.key === messages.key) {
                        this.value = this.value ? [...this.value, ...[messages]] : [messages];
                    }
                    this.cd.markForCheck();
                }
            });
            this.clearSubscription = this.messageService.clearObserver.subscribe(key => {
                if (key) {
                    if (this.key === key) {
                        this.value = null;
                    }
                }
                else {
                    this.value = null;
                }
                this.cd.markForCheck();
            });
        }
    }
    hasMessages() {
        let parentEl = this.el.nativeElement.parentElement;
        if (parentEl && parentEl.offsetParent) {
            return this.contentTemplate != null || this.value && this.value.length > 0;
        }
        return false;
    }
    clear() {
        this.value = [];
        this.valueChange.emit(this.value);
    }
    removeMessage(i) {
        this.value = this.value.filter((msg, index) => index !== i);
    }
    get icon() {
        const severity = this.severity || (this.hasMessages() ? this.value[0].severity : null);
        if (this.hasMessages()) {
            switch (severity) {
                case 'success':
                    return 'pi-check';
                    break;
                case 'info':
                    return 'pi-info-circle';
                    break;
                case 'error':
                    return 'pi-times';
                    break;
                case 'warn':
                    return 'pi-exclamation-triangle';
                    break;
                default:
                    return 'pi-info-circle';
                    break;
            }
        }
        return null;
    }
    ngOnDestroy() {
        if (this.messageSubscription) {
            this.messageSubscription.unsubscribe();
        }
        if (this.clearSubscription) {
            this.clearSubscription.unsubscribe();
        }
    }
}
Messages.ɵfac = function Messages_Factory(t) { return new (t || Messages)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.MessageService, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
Messages.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Messages, selectors: [["p-messages"]], contentQueries: function Messages_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, inputs: { closable: "closable", enableService: "enableService", escape: "escape", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", value: "value", style: "style", styleClass: "styleClass", key: "key", severity: "severity" }, outputs: { valueChange: "valueChange" }, decls: 4, vars: 5, consts: [["role", "alert", 1, "p-messages", "p-component", 3, "ngStyle"], [4, "ngIf", "ngIfElse"], ["staticMessage", ""], ["role", "alert", 3, "ngClass", 4, "ngFor", "ngForOf"], ["role", "alert", 3, "ngClass"], [1, "p-message-wrapper"], [1, "p-message-icon", "pi", 3, "ngClass"], ["escapeOut", ""], ["class", "p-message-close p-link", "type", "button", "pRipple", "", 3, "click", 4, "ngIf"], ["class", "p-message-summary", 3, "innerHTML", 4, "ngIf"], ["class", "p-message-detail", 3, "innerHTML", 4, "ngIf"], [1, "p-message-summary", 3, "innerHTML"], [1, "p-message-detail", 3, "innerHTML"], ["class", "p-message-summary", 4, "ngIf"], ["class", "p-message-detail", 4, "ngIf"], [1, "p-message-summary"], [1, "p-message-detail"], ["type", "button", "pRipple", "", 1, "p-message-close", "p-link", 3, "click"], [1, "p-message-close-icon", "pi", "pi-times"], [4, "ngTemplateOutlet"]], template: function Messages_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, Messages_ng_container_1_Template, 2, 1, "ng-container", 1);
        ɵngcc0.ɵɵtemplate(2, Messages_ng_template_2_Template, 3, 2, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = ɵngcc0.ɵɵreference(3);
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.contentTemplate)("ngIfElse", _r1);
    } }, directives: [ɵngcc2.NgStyle, ɵngcc2.NgIf, ɵngcc2.NgForOf, ɵngcc2.NgClass, ɵngcc3.Ripple, ɵngcc2.NgTemplateOutlet], styles: [".p-message-close,.p-message-wrapper{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.p-message-close{-ms-flex-pack:center;justify-content:center}.p-message-close.p-link{margin-left:auto;overflow:hidden;position:relative}"], encapsulation: 2, data: { animation: [
            trigger('messageAnimation', [
                transition(':enter', [
                    style({ opacity: 0, transform: 'translateY(-25%)' }),
                    animate('{{showTransitionParams}}')
                ]),
                transition(':leave', [
                    animate('{{hideTransitionParams}}', style({ height: 0, marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0, overflow: 'hidden', opacity: 0 }))
                ])
            ])
        ] }, changeDetection: 0 });
Messages.ctorParameters = () => [
    { type: MessageService, decorators: [{ type: Optional }] },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
Messages.propDecorators = {
    value: [{ type: Input }],
    closable: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    enableService: [{ type: Input }],
    key: [{ type: Input }],
    escape: [{ type: Input }],
    severity: [{ type: Input }],
    showTransitionOptions: [{ type: Input }],
    hideTransitionOptions: [{ type: Input }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }],
    valueChange: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Messages, [{
        type: Component,
        args: [{
                selector: 'p-messages',
                template: `
        <div class="p-messages p-component" role="alert" [ngStyle]="style" [class]="styleClass">
            <ng-container *ngIf="!contentTemplate; else staticMessage">
                <div *ngFor="let msg of value; let i=index" [ngClass]="'p-message p-message-' + msg.severity" role="alert" 
                    [@messageAnimation]="{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}">
                    <div class="p-message-wrapper">
                        <span class="p-message-icon pi" [ngClass]="{'pi-info-circle': msg.severity === 'info', 
                            'pi-check': msg.severity === 'success',
                            'pi-exclamation-triangle': msg.severity === 'warn',
                            'pi-times-circle': msg.severity === 'error'}"></span>
                        <ng-container *ngIf="!escape; else escapeOut">
                            <span *ngIf="msg.summary" class="p-message-summary" [innerHTML]="msg.summary"></span>
                            <span *ngIf="msg.detail" class="p-message-detail" [innerHTML]="msg.detail"></span>
                        </ng-container>
                        <ng-template #escapeOut>
                            <span *ngIf="msg.summary" class="p-message-summary">{{msg.summary}}</span>
                            <span *ngIf="msg.detail" class="p-message-detail">{{msg.detail}}</span>
                        </ng-template>
                        <button class="p-message-close p-link" (click)="removeMessage(i)" *ngIf="closable" type="button" pRipple>
                            <i class="p-message-close-icon pi pi-times"></i>
                        </button>
                    </div>
                </div>
            </ng-container>
            <ng-template #staticMessage>
                <div [ngClass]="'p-message p-message-' + severity" role="alert">
                    <div class="p-message-wrapper">
                        <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
                    </div>
                </div>
            </ng-template>
            </div>
    `,
                animations: [
                    trigger('messageAnimation', [
                        transition(':enter', [
                            style({ opacity: 0, transform: 'translateY(-25%)' }),
                            animate('{{showTransitionParams}}')
                        ]),
                        transition(':leave', [
                            animate('{{hideTransitionParams}}', style({ height: 0, marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0, overflow: 'hidden', opacity: 0 }))
                        ])
                    ])
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-message-close,.p-message-wrapper{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.p-message-close{-ms-flex-pack:center;justify-content:center}.p-message-close.p-link{margin-left:auto;overflow:hidden;position:relative}"]
            }]
    }], function () { return [{ type: ɵngcc1.MessageService, decorators: [{
                type: Optional
            }] }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { closable: [{
            type: Input
        }], enableService: [{
            type: Input
        }], escape: [{
            type: Input
        }], showTransitionOptions: [{
            type: Input
        }], hideTransitionOptions: [{
            type: Input
        }], valueChange: [{
            type: Output
        }], value: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], key: [{
            type: Input
        }], severity: [{
            type: Input
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
export class MessagesModule {
}
MessagesModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MessagesModule });
MessagesModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MessagesModule_Factory(t) { return new (t || MessagesModule)(); }, imports: [[CommonModule, RippleModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MessagesModule, { declarations: function () { return [Messages]; }, imports: function () { return [CommonModule, RippleModule]; }, exports: function () { return [Messages]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MessagesModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, RippleModule],
                exports: [Messages],
                declarations: [Messages]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9tZXNzYWdlcy9tZXNzYWdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBVyxLQUFLLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBa0IsUUFBUSxFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBQyxlQUFlLEVBQXdCLGlCQUFpQixFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzlOLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsT0FBTyxFQUFPLEtBQUssRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDM0UsT0FBTyxFQUFTLGFBQWEsRUFBQyxjQUFjLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFFakUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0Q1QyxNQUFNLE9BQU8sUUFBUTtBQUFHLElBZ0NwQixZQUErQixjQUE4QixFQUFTLEVBQWMsRUFBUyxFQUFxQjtBQUFJLFFBQXZGLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtBQUFDLFFBQVEsT0FBRSxHQUFGLEVBQUUsQ0FBWTtBQUFDLFFBQVEsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7QUFBQyxRQTVCMUcsYUFBUSxHQUFZLElBQUksQ0FBQztBQUN0QyxRQUthLGtCQUFhLEdBQVksSUFBSSxDQUFDO0FBQzNDLFFBR2EsV0FBTSxHQUFZLElBQUksQ0FBQztBQUNwQyxRQUdhLDBCQUFxQixHQUFXLGdCQUFnQixDQUFDO0FBQzlELFFBQ2EsMEJBQXFCLEdB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RDtDQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxrQkFDL0MsYUFBYSxFQUFFO1NBQWlCLENBQUMsSUFBSTs7OztpQkFFeEM7O21DQUNJO0FBQUM7QUFBa0MsWUF0RFYsY0FBYyx1QkFzRjNCLFFBQVE7QUFBTyxZQXpGeUQsVUFBVTtBQUFJLFlBQStFLGlCQUFpQjtBQUFHO0FBQUc7QUFDbk0sb0JBMERMLEtBQUs7QUFBSyx1QkFFVixLQUFLO0FBQUssb0JBRVYsS0FBSztBQUFLLHlCQUVWLEtBQUs7QUFBSyw0QkFFVixLQUFLO0FBQUssa0JBRVYsS0FBSztBQUFLLHFCQUVWLEtBQUs7QUFBSyx1QkFFVixLQUFLO0FBQUssb0NBRVYsS0FBSztBQUFLLG9DQUVWLEtBQUs7QUFBSyx3QkFFVixlQUFlLFNBQUMsYUFBYTtBQUFPLDBCQUVwQyxNQUFNO0FBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBcUhqQixNQUFNLE9BQU8sY0FBYztBQUFHOzBDQUw3QixRQUFRLFNBQUM7SUFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUMsWUFBWSxDQUFDLGtCQUNwQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsa0JBQ25CLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUMzQjs7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLENvbXBvbmVudCxPbkRlc3Ryb3ksSW5wdXQsT3V0cHV0LEV2ZW50RW1pdHRlcixBZnRlckNvbnRlbnRJbml0LE9wdGlvbmFsLEVsZW1lbnRSZWYsQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksQ29udGVudENoaWxkcmVuLFF1ZXJ5TGlzdCxUZW1wbGF0ZVJlZiwgVmlld0VuY2Fwc3VsYXRpb24sIENoYW5nZURldGVjdG9yUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHt0cmlnZ2VyLHN0YXRlLHN0eWxlLHRyYW5zaXRpb24sYW5pbWF0ZX0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge01lc3NhZ2UsUHJpbWVUZW1wbGF0ZSxNZXNzYWdlU2VydmljZX0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtSaXBwbGVNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcmlwcGxlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLW1lc3NhZ2VzJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicC1tZXNzYWdlcyBwLWNvbXBvbmVudFwiIHJvbGU9XCJhbGVydFwiIFtuZ1N0eWxlXT1cInN0eWxlXCIgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhY29udGVudFRlbXBsYXRlOyBlbHNlIHN0YXRpY01lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBtc2cgb2YgdmFsdWU7IGxldCBpPWluZGV4XCIgW25nQ2xhc3NdPVwiJ3AtbWVzc2FnZSBwLW1lc3NhZ2UtJyArIG1zZy5zZXZlcml0eVwiIHJvbGU9XCJhbGVydFwiIFxuICAgICAgICAgICAgICAgICAgICBbQG1lc3NhZ2VBbmltYXRpb25dPVwie3ZhbHVlOiAndmlzaWJsZScsIHBhcmFtczoge3Nob3dUcmFuc2l0aW9uUGFyYW1zOiBzaG93VHJhbnNpdGlvbk9wdGlvbnMsIGhpZGVUcmFuc2l0aW9uUGFyYW1zOiBoaWRlVHJhbnNpdGlvbk9wdGlvbnN9fVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1tZXNzYWdlLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1tZXNzYWdlLWljb24gcGlcIiBbbmdDbGFzc109XCJ7J3BpLWluZm8tY2lyY2xlJzogbXNnLnNldmVyaXR5ID09PSAnaW5mbycsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwaS1jaGVjayc6IG1zZy5zZXZlcml0eSA9PT0gJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwaS1leGNsYW1hdGlvbi10cmlhbmdsZSc6IG1zZy5zZXZlcml0eSA9PT0gJ3dhcm4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwaS10aW1lcy1jaXJjbGUnOiBtc2cuc2V2ZXJpdHkgPT09ICdlcnJvcid9XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFlc2NhcGU7IGVsc2UgZXNjYXBlT3V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJtc2cuc3VtbWFyeVwiIGNsYXNzPVwicC1tZXNzYWdlLXN1bW1hcnlcIiBbaW5uZXJIVE1MXT1cIm1zZy5zdW1tYXJ5XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwibXNnLmRldGFpbFwiIGNsYXNzPVwicC1tZXNzYWdlLWRldGFpbFwiIFtpbm5lckhUTUxdPVwibXNnLmRldGFpbFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNlc2NhcGVPdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJtc2cuc3VtbWFyeVwiIGNsYXNzPVwicC1tZXNzYWdlLXN1bW1hcnlcIj57e21zZy5zdW1tYXJ5fX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJtc2cuZGV0YWlsXCIgY2xhc3M9XCJwLW1lc3NhZ2UtZGV0YWlsXCI+e3ttc2cuZGV0YWlsfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInAtbWVzc2FnZS1jbG9zZSBwLWxpbmtcIiAoY2xpY2spPVwicmVtb3ZlTWVzc2FnZShpKVwiICpuZ0lmPVwiY2xvc2FibGVcIiB0eXBlPVwiYnV0dG9uXCIgcFJpcHBsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInAtbWVzc2FnZS1jbG9zZS1pY29uIHBpIHBpLXRpbWVzXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgI3N0YXRpY01lc3NhZ2U+XG4gICAgICAgICAgICAgICAgPGRpdiBbbmdDbGFzc109XCIncC1tZXNzYWdlIHAtbWVzc2FnZS0nICsgc2V2ZXJpdHlcIiByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtbWVzc2FnZS13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGVudFRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCdtZXNzYWdlQW5pbWF0aW9uJywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xuICAgICAgICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0yNSUpJ30pLFxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJ3t7c2hvd1RyYW5zaXRpb25QYXJhbXN9fScpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcbiAgICAgICAgICAgICAgICBhbmltYXRlKCd7e2hpZGVUcmFuc2l0aW9uUGFyYW1zfX0nLCBzdHlsZSh7IGhlaWdodDogMCwgbWFyZ2luVG9wOiAwLCBtYXJnaW5Cb3R0b206IDAsIG1hcmdpbkxlZnQ6IDAsIG1hcmdpblJpZ2h0OiAwLCBvdmVyZmxvdzogJ2hpZGRlbicsIG9wYWNpdHk6IDAgfSkpXG4gICAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgIF0sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBzdHlsZVVybHM6IFsnLi9tZXNzYWdlcy5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlcyBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKSB2YWx1ZTogTWVzc2FnZVtdO1xuXG4gICAgQElucHV0KCkgY2xvc2FibGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQElucHV0KCkgc3R5bGU6IGFueTtcblxuICAgIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGVuYWJsZVNlcnZpY2U6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQElucHV0KCkga2V5OiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBlc2NhcGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQElucHV0KCkgc2V2ZXJpdHk6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHNob3dUcmFuc2l0aW9uT3B0aW9uczogc3RyaW5nID0gJzMwMG1zIGVhc2Utb3V0JztcblxuICAgIEBJbnB1dCgpIGhpZGVUcmFuc2l0aW9uT3B0aW9uczogc3RyaW5nID0gJzIwMG1zIGN1YmljLWJlemllcigwLjg2LCAwLCAwLjA3LCAxKSc7XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFByaW1lVGVtcGxhdGUpIHRlbXBsYXRlczogUXVlcnlMaXN0PGFueT47XG5cbiAgICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxNZXNzYWdlW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxNZXNzYWdlW10+KCk7XG5cbiAgICBtZXNzYWdlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgICBjbGVhclN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gICAgY29udGVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHVibGljIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSwgcHVibGljIGVsOiBFbGVtZW50UmVmLCBwdWJsaWMgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2goaXRlbS5nZXRUeXBlKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdjb250ZW50JzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50VGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50VGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5tZXNzYWdlU2VydmljZSAmJiB0aGlzLmVuYWJsZVNlcnZpY2UgJiYgIXRoaXMuY29udGVudFRlbXBsYXRlKSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VTdWJzY3JpcHRpb24gPSB0aGlzLm1lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VPYnNlcnZlci5zdWJzY3JpYmUoKG1lc3NhZ2VzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJlZE1lc3NhZ2VzID0gbWVzc2FnZXMuZmlsdGVyKG0gPT4gdGhpcy5rZXkgPT09IG0ua2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlID8gWy4uLnRoaXMudmFsdWUsIC4uLmZpbHRlcmVkTWVzc2FnZXNdIDogWy4uLmZpbHRlcmVkTWVzc2FnZXNdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMua2V5ID09PSBtZXNzYWdlcy5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlID8gWy4uLnRoaXMudmFsdWUsIC4uLlttZXNzYWdlc11dIDogW21lc3NhZ2VzXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuY2xlYXJTdWJzY3JpcHRpb24gPSB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmNsZWFyT2JzZXJ2ZXIuc3Vic2NyaWJlKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5rZXkgPT09IGtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhc01lc3NhZ2VzKCkge1xuICAgICAgICBsZXQgcGFyZW50RWwgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgaWYgKHBhcmVudEVsICYmIHBhcmVudEVsLm9mZnNldFBhcmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGVudFRlbXBsYXRlICE9IG51bGwgfHwgdGhpcy52YWx1ZSAmJiB0aGlzLnZhbHVlLmxlbmd0aCA+IDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBbXTtcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICAgIH1cblxuICAgIHJlbW92ZU1lc3NhZ2UoaTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLmZpbHRlcigobXNnLCBpbmRleCkgPT4gaW5kZXggIT09IGkpO1xuICAgIH1cblxuICAgIGdldCBpY29uKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHNldmVyaXR5ID0gdGhpcy5zZXZlcml0eSB8fCAodGhpcy5oYXNNZXNzYWdlcygpID8gdGhpcy52YWx1ZVswXS5zZXZlcml0eSA6IG51bGwpO1xuXG4gICAgICAgIGlmICh0aGlzLmhhc01lc3NhZ2VzKCkpIHtcbiAgICAgICAgICAgIHN3aXRjaChzZXZlcml0eSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3BpLWNoZWNrJztcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2luZm8nOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3BpLWluZm8tY2lyY2xlJztcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdwaS10aW1lcyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICd3YXJuJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdwaS1leGNsYW1hdGlvbi10cmlhbmdsZSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3BpLWluZm8tY2lyY2xlJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5tZXNzYWdlU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNsZWFyU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSxSaXBwbGVNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtNZXNzYWdlc10sXG4gICAgZGVjbGFyYXRpb25zOiBbTWVzc2FnZXNdXG59KVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VzTW9kdWxlIHsgfVxuIl19