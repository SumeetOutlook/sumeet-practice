import { NgModule, Component, Input, ElementRef, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DomHandler } from 'primeng/dom';
import { TerminalService } from './terminalservice';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@angular/forms';

function Terminal_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.welcomeMessage);
} }
function Terminal_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "span", 8);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "span", 9);
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "div", 10);
    ɵngcc0.ɵɵtext(6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const command_r3 = ctx.$implicit;
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.prompt);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(command_r3.text);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(command_r3.response);
} }
export class Terminal {
    constructor(el, terminalService, cd) {
        this.el = el;
        this.terminalService = terminalService;
        this.cd = cd;
        this.commands = [];
        this.subscription = terminalService.responseHandler.subscribe(response => {
            this.commands[this.commands.length - 1].response = response;
            this.commandProcessed = true;
        });
    }
    ngAfterViewInit() {
        this.container = DomHandler.find(this.el.nativeElement, '.p-terminal')[0];
    }
    ngAfterViewChecked() {
        if (this.commandProcessed) {
            this.container.scrollTop = this.container.scrollHeight;
            this.commandProcessed = false;
        }
    }
    set response(value) {
        if (value) {
            this.commands[this.commands.length - 1].response = value;
            this.commandProcessed = true;
        }
    }
    handleCommand(event) {
        if (event.keyCode == 13) {
            this.commands.push({ text: this.command });
            this.terminalService.sendCommand(this.command);
            this.command = '';
        }
    }
    focus(element) {
        element.focus();
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
Terminal.ɵfac = function Terminal_Factory(t) { return new (t || Terminal)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(TerminalService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
Terminal.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Terminal, selectors: [["p-terminal"]], inputs: { response: "response", welcomeMessage: "welcomeMessage", prompt: "prompt", style: "style", styleClass: "styleClass" }, decls: 9, vars: 8, consts: [[3, "ngClass", "ngStyle", "click"], [4, "ngIf"], [1, "p-terminal-content"], [4, "ngFor", "ngForOf"], [1, "p-terminal-prompt-container"], [1, "p-terminal-content-prompt"], ["type", "text", "autocomplete", "off", "autofocus", "", 1, "p-terminal-input", 3, "ngModel", "ngModelChange", "keydown"], ["in", ""], [1, "p-terminal-prompt"], [1, "p-terminal-command"], [1, "p-terminal-response"]], template: function Terminal_Template(rf, ctx) { if (rf & 1) {
        const _r4 = ɵngcc0.ɵɵgetCurrentView();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("click", function Terminal_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r4); const _r2 = ɵngcc0.ɵɵreference(8); return ctx.focus(_r2); });
        ɵngcc0.ɵɵtemplate(1, Terminal_div_1_Template, 2, 1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵtemplate(3, Terminal_div_3_Template, 7, 3, "div", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "div", 4);
        ɵngcc0.ɵɵelementStart(5, "span", 5);
        ɵngcc0.ɵɵtext(6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "input", 6, 7);
        ɵngcc0.ɵɵlistener("ngModelChange", function Terminal_Template_input_ngModelChange_7_listener($event) { return ctx.command = $event; })("keydown", function Terminal_Template_input_keydown_7_listener($event) { return ctx.handleCommand($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-terminal p-component")("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.welcomeMessage);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.commands);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ctx.prompt);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngModel", ctx.command);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc2.DefaultValueAccessor, ɵngcc2.NgControlStatus, ɵngcc2.NgModel], styles: [".p-terminal{height:18rem;overflow:auto}.p-terminal-prompt-container{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.p-terminal-input{-ms-flex:1 1 auto;background-color:rgba(0,0,0,0);border:0;color:inherit;flex:1 1 auto;outline:0 none;padding:0}.p-terminal-input::-ms-clear{display:none}"], encapsulation: 2, changeDetection: 0 });
Terminal.ctorParameters = () => [
    { type: ElementRef },
    { type: TerminalService },
    { type: ChangeDetectorRef }
];
Terminal.propDecorators = {
    welcomeMessage: [{ type: Input }],
    prompt: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    response: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Terminal, [{
        type: Component,
        args: [{
                selector: 'p-terminal',
                template: `
        <div [ngClass]="'p-terminal p-component'" [ngStyle]="style" [class]="styleClass" (click)="focus(in)">
            <div *ngIf="welcomeMessage">{{welcomeMessage}}</div>
            <div class="p-terminal-content">
                <div *ngFor="let command of commands">
                    <span class="p-terminal-prompt">{{prompt}}</span>
                    <span class="p-terminal-command">{{command.text}}</span>
                    <div class="p-terminal-response">{{command.response}}</div>
                </div>
            </div>
            <div class="p-terminal-prompt-container">
                <span class="p-terminal-content-prompt">{{prompt}}</span>
                <input #in type="text" [(ngModel)]="command" class="p-terminal-input" autocomplete="off" (keydown)="handleCommand($event)" autofocus>
            </div>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-terminal{height:18rem;overflow:auto}.p-terminal-prompt-container{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.p-terminal-input{-ms-flex:1 1 auto;background-color:rgba(0,0,0,0);border:0;color:inherit;flex:1 1 auto;outline:0 none;padding:0}.p-terminal-input::-ms-clear{display:none}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: TerminalService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { response: [{
            type: Input
        }], welcomeMessage: [{
            type: Input
        }], prompt: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }] }); })();
export class TerminalModule {
}
TerminalModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TerminalModule });
TerminalModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TerminalModule_Factory(t) { return new (t || TerminalModule)(); }, imports: [[CommonModule, FormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TerminalModule, { declarations: function () { return [Terminal]; }, imports: function () { return [CommonModule, FormsModule]; }, exports: function () { return [Terminal]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TerminalModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule],
                exports: [Terminal],
                declarations: [Terminal]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVybWluYWwuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy90ZXJtaW5hbC90ZXJtaW5hbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBMEMsS0FBSyxFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6SyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QmxELE1BQU0sT0FBTyxRQUFRO0FBQUcsSUFvQnBCLFlBQW1CLEVBQWMsRUFBUyxlQUFnQyxFQUFTLEVBQXFCO0FBQzVHLFFBRHVCLE9BQUUsR0FBRixFQUFFLENBQVk7QUFBQyxRQUFRLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtBQUFDLFFBQVEsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7QUFBQyxRQVZ6RyxhQUFRLEdBQVUsRUFBRSxDQUFDO0FBQ3pCLFFBVVEsSUFBSSxDQUFDLFlBQVksR0FBRyxlQUFlLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUNqRixZQUFZLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUN4RSxZQUFZLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7QUFDekMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUNYLElBQUksQ0FBQztBQUNMLElBQ0ksZUFBZTtBQUNuQixRQUFRLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsRixJQUFJLENBQUM7QUFDTCxJQUNJLGtCQUFrQjtBQUN0QixRQUFRLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO0FBQ25DLFlBQVksSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7QUFDbkUsWUFBWSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0FBQzFDLFNBQVM7QUFDVCxJQUFJLENBQUM7QUFDTCxJQUNJLElBQ0ksUUFBUSxDQUFDLEtBQWE7QUFDOUIsUUFBUSxJQUFJLEtBQUssRUFBRTtBQUNuQixZQUFZLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztBQUNyRSxZQUFZLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7QUFDekMsU0FBUztBQUNULElBQUksQ0FBQztBQUNMLElBQ0ksYUFBYSxDQUFDLEtBQW9CO0FBQ3RDLFFBQVEsSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsRUFBRTtBQUNqQyxZQUFZLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO0FBQ3JELFlBQVksSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzNELFlBQVksSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7QUFDOUIsU0FBUztBQUNULElBQUksQ0FBQztBQUNMLElBQ0ksS0FBSyxDQUFDLE9BQW9CO0FBQzlCLFFBQVEsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3hCLElBQUksQ0FBQztBQUNMLElBQ0ksV0FBVztBQUNmLFFBQVEsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO0FBQy9CLFlBQVksSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUM1QyxTQUFTO0FBQ1QsSUFBSSxDQUFDO0FBQ0w7b0NBckZDLFNBQVMsU0FBQyxrQkFDUCxRQUFRLEVBQUUsWUFBWSxrQkFDdEIsUUFBUSxFQUFFOzs7MEJBZVQ7QUFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxrQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Ozs7OztzQkFFeEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d2dCQUNJO0FBQUM7QUFBa0MsWUE3QmtDLFVBQVU7QUFBSSxZQUloRixlQUFlO0FBQUksWUFKc0csaUJBQWlCO0FBQUc7QUFBRztBQUM5SSw2QkE4QkwsS0FBSztBQUFLLHFCQUVWLEtBQUs7QUFBSyxvQkFFVixLQUFLO0FBQUsseUJBRVYsS0FBSztBQUFLLHVCQThCVixLQUFLO0FBQ1Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBZ0NILE1BQU0sT0FBTyxjQUFjO0FBQUc7MENBTDdCLFFBQVEsU0FBQztJQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBQyxXQUFXLENBQUMsa0JBQ25DLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxrQkFDbkIsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQzNCOzs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsQ29tcG9uZW50LEFmdGVyVmlld0luaXQsQWZ0ZXJWaWV3Q2hlY2tlZCxPbkRlc3Ryb3ksSW5wdXQsRWxlbWVudFJlZixDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0VuY2Fwc3VsYXRpb24sIENoYW5nZURldGVjdG9yUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtEb21IYW5kbGVyfSBmcm9tICdwcmltZW5nL2RvbSc7XG5pbXBvcnQge1Rlcm1pbmFsU2VydmljZX0gZnJvbSAnLi90ZXJtaW5hbHNlcnZpY2UnO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259ICAgZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC10ZXJtaW5hbCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBbbmdDbGFzc109XCIncC10ZXJtaW5hbCBwLWNvbXBvbmVudCdcIiBbbmdTdHlsZV09XCJzdHlsZVwiIFtjbGFzc109XCJzdHlsZUNsYXNzXCIgKGNsaWNrKT1cImZvY3VzKGluKVwiPlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cIndlbGNvbWVNZXNzYWdlXCI+e3t3ZWxjb21lTWVzc2FnZX19PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC10ZXJtaW5hbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgY29tbWFuZCBvZiBjb21tYW5kc1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtdGVybWluYWwtcHJvbXB0XCI+e3twcm9tcHR9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLXRlcm1pbmFsLWNvbW1hbmRcIj57e2NvbW1hbmQudGV4dH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC10ZXJtaW5hbC1yZXNwb25zZVwiPnt7Y29tbWFuZC5yZXNwb25zZX19PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLXRlcm1pbmFsLXByb21wdC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtdGVybWluYWwtY29udGVudC1wcm9tcHRcIj57e3Byb21wdH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxpbnB1dCAjaW4gdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cImNvbW1hbmRcIiBjbGFzcz1cInAtdGVybWluYWwtaW5wdXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIiAoa2V5ZG93bik9XCJoYW5kbGVDb21tYW5kKCRldmVudClcIiBhdXRvZm9jdXM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHN0eWxlVXJsczogWycuL3Rlcm1pbmFsLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRlcm1pbmFsIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCxBZnRlclZpZXdDaGVja2VkLE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKSB3ZWxjb21lTWVzc2FnZTogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgcHJvbXB0OiBzdHJpbmc7XG4gICAgICAgIFxuICAgIEBJbnB1dCgpIHN0eWxlOiBhbnk7XG4gICAgICAgIFxuICAgIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZztcbiAgICAgICAgICAgIFxuICAgIGNvbW1hbmRzOiBhbnlbXSA9IFtdO1xuICAgIFxuICAgIGNvbW1hbmQ6IHN0cmluZztcbiAgICBcbiAgICBjb250YWluZXI6IEVsZW1lbnQ7XG4gICAgXG4gICAgY29tbWFuZFByb2Nlc3NlZDogYm9vbGVhbjtcbiAgICBcbiAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYsIHB1YmxpYyB0ZXJtaW5hbFNlcnZpY2U6IFRlcm1pbmFsU2VydmljZSwgcHVibGljIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRlcm1pbmFsU2VydmljZS5yZXNwb25zZUhhbmRsZXIuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tbWFuZHNbdGhpcy5jb21tYW5kcy5sZW5ndGggLSAxXS5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgdGhpcy5jb21tYW5kUHJvY2Vzc2VkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBEb21IYW5kbGVyLmZpbmQodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnLnAtdGVybWluYWwnKVswXTtcbiAgICB9XG4gICAgXG4gICAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgICAgICBpZiAodGhpcy5jb21tYW5kUHJvY2Vzc2VkKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zY3JvbGxUb3AgPSB0aGlzLmNvbnRhaW5lci5zY3JvbGxIZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLmNvbW1hbmRQcm9jZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICBASW5wdXQoKVxuICAgIHNldCByZXNwb25zZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5jb21tYW5kc1t0aGlzLmNvbW1hbmRzLmxlbmd0aCAtIDFdLnJlc3BvbnNlID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLmNvbW1hbmRQcm9jZXNzZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGhhbmRsZUNvbW1hbmQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMTMpIHtcbiAgICAgICAgICAgIHRoaXMuY29tbWFuZHMucHVzaCh7dGV4dDogdGhpcy5jb21tYW5kfSk7XG4gICAgICAgICAgICB0aGlzLnRlcm1pbmFsU2VydmljZS5zZW5kQ29tbWFuZCh0aGlzLmNvbW1hbmQpO1xuICAgICAgICAgICAgdGhpcy5jb21tYW5kID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZm9jdXMoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgICBcbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsRm9ybXNNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtUZXJtaW5hbF0sXG4gICAgZGVjbGFyYXRpb25zOiBbVGVybWluYWxdXG59KVxuZXhwb3J0IGNsYXNzIFRlcm1pbmFsTW9kdWxlIHsgfSJdfQ==