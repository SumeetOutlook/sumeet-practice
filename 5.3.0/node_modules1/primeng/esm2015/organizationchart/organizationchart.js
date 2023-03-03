import { NgModule, Component, ElementRef, Input, Output, EventEmitter, Inject, forwardRef, ContentChildren, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'primeng/api';
import { PrimeTemplate } from 'primeng/api';
import { Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["pOrganizationChartNode", ""];
function OrganizationChartNode_tbody_0_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.node.label);
} }
function OrganizationChartNode_tbody_0_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c1 = function (a0) { return { $implicit: a0 }; };
function OrganizationChartNode_tbody_0_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, OrganizationChartNode_tbody_0_div_5_ng_container_1_Template, 1, 0, "ng-container", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.chart.getTemplateForNode(ctx_r2.node))("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c1, ctx_r2.node));
} }
const _c2 = function (a0, a1) { return { "pi-chevron-down": a0, "pi-chevron-up": a1 }; };
function OrganizationChartNode_tbody_0_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 8);
    ɵngcc0.ɵɵlistener("click", function OrganizationChartNode_tbody_0_a_6_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r8 = ɵngcc0.ɵɵnextContext(2); return ctx_r8.toggleNode($event, ctx_r8.node); })("keydown.enter", function OrganizationChartNode_tbody_0_a_6_Template_a_keydown_enter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r10 = ɵngcc0.ɵɵnextContext(2); return ctx_r10.toggleNode($event, ctx_r10.node); });
    ɵngcc0.ɵɵelement(1, "i", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(1, _c2, ctx_r3.node.expanded, !ctx_r3.node.expanded));
} }
function OrganizationChartNode_tbody_0_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "td");
    ɵngcc0.ɵɵelement(2, "div", 4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattribute("colspan", ctx_r4.colspan);
} }
const _c3 = function (a0) { return { "p-organizationchart-line-top": a0 }; };
function OrganizationChartNode_tbody_0_ng_container_12_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td", 11);
    ɵngcc0.ɵɵtext(1, "\u00A0");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "td", 12);
    ɵngcc0.ɵɵtext(3, "\u00A0");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const first_r13 = ctx.first;
    const last_r14 = ctx.last;
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c3, !first_r13));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(4, _c3, !last_r14));
} }
function OrganizationChartNode_tbody_0_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, OrganizationChartNode_tbody_0_ng_container_12_ng_template_1_Template, 4, 6, "ng-template", 10);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r5.node.children);
} }
function OrganizationChartNode_tbody_0_td_14_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td", 13);
    ɵngcc0.ɵɵelement(1, "table", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r15 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("node", child_r15);
} }
const _c4 = function (a1, a2) { return { "p-organizationchart-node-content": true, "p-organizationchart-selectable-node": a1, "p-highlight": a2 }; };
function OrganizationChartNode_tbody_0_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "tbody");
    ɵngcc0.ɵɵelementStart(1, "tr");
    ɵngcc0.ɵɵelementStart(2, "td");
    ɵngcc0.ɵɵelementStart(3, "div", 1);
    ɵngcc0.ɵɵlistener("click", function OrganizationChartNode_tbody_0_Template_div_click_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); const ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.onNodeClick($event, ctx_r16.node); });
    ɵngcc0.ɵɵtemplate(4, OrganizationChartNode_tbody_0_div_4_Template, 2, 1, "div", 0);
    ɵngcc0.ɵɵtemplate(5, OrganizationChartNode_tbody_0_div_5_Template, 2, 4, "div", 0);
    ɵngcc0.ɵɵtemplate(6, OrganizationChartNode_tbody_0_a_6_Template, 2, 4, "a", 2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(7, "tr", 3);
    ɵngcc0.ɵɵelementStart(8, "td");
    ɵngcc0.ɵɵelement(9, "div", 4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(10, "tr", 3);
    ɵngcc0.ɵɵtemplate(11, OrganizationChartNode_tbody_0_ng_container_11_Template, 3, 1, "ng-container", 0);
    ɵngcc0.ɵɵtemplate(12, OrganizationChartNode_tbody_0_ng_container_12_Template, 2, 1, "ng-container", 0);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(13, "tr", 5);
    ɵngcc0.ɵɵtemplate(14, OrganizationChartNode_tbody_0_td_14_Template, 2, 1, "td", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵattribute("colspan", ctx_r0.colspan);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap(ctx_r0.node.styleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(17, _c4, ctx_r0.chart.selectionMode && ctx_r0.node.selectable !== false, ctx_r0.isSelected()));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.chart.getTemplateForNode(ctx_r0.node));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.chart.getTemplateForNode(ctx_r0.node));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.leaf);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", !ctx_r0.leaf && ctx_r0.node.expanded ? "p-organizationchart-node-visible" : "p-organizationchart-node-hidden")("@childState", "in");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattribute("colspan", ctx_r0.colspan);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngClass", !ctx_r0.leaf && ctx_r0.node.expanded ? "p-organizationchart-node-visible" : "p-organizationchart-node-hidden")("@childState", "in");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.node.children && ctx_r0.node.children.length === 1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.node.children && ctx_r0.node.children.length > 1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", !ctx_r0.leaf && ctx_r0.node.expanded ? "p-organizationchart-node-visible" : "p-organizationchart-node-hidden")("@childState", "in");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.node.children);
} }
function OrganizationChart_table_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "table", 2);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("node", ctx_r0.root);
} }
const _c5 = function (a1) { return { "p-organizationchart p-component": true, "p-organizationchart-preservespace": a1 }; };
export class OrganizationChartNode {
    constructor(chart, cd) {
        this.cd = cd;
        this.chart = chart;
        this.subscription = this.chart.selectionSource$.subscribe(() => {
            this.cd.markForCheck();
        });
    }
    get leaf() {
        return this.node.leaf == false ? false : !(this.node.children && this.node.children.length);
    }
    get colspan() {
        return (this.node.children && this.node.children.length) ? this.node.children.length * 2 : null;
    }
    onNodeClick(event, node) {
        this.chart.onNodeClick(event, node);
    }
    toggleNode(event, node) {
        node.expanded = !node.expanded;
        if (node.expanded)
            this.chart.onNodeExpand.emit({ originalEvent: event, node: this.node });
        else
            this.chart.onNodeCollapse.emit({ originalEvent: event, node: this.node });
        event.preventDefault();
    }
    isSelected() {
        return this.chart.isSelected(this.node);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
OrganizationChartNode.ɵfac = function OrganizationChartNode_Factory(t) { return new (t || OrganizationChartNode)(ɵngcc0.ɵɵdirectiveInject(forwardRef(() => OrganizationChart)), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
OrganizationChartNode.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: OrganizationChartNode, selectors: [["", "pOrganizationChartNode", ""]], inputs: { node: "node", root: "root", first: "first", last: "last" }, attrs: _c0, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "ngClass", "click"], ["tabindex", "0", "class", "p-node-toggler", 3, "click", "keydown.enter", 4, "ngIf"], [1, "p-organizationchart-lines", 3, "ngClass"], [1, "p-organizationchart-line-down"], [1, "p-organizationchart-nodes", 3, "ngClass"], ["colspan", "2", 4, "ngFor", "ngForOf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["tabindex", "0", 1, "p-node-toggler", 3, "click", "keydown.enter"], [1, "p-node-toggler-icon", "pi", 3, "ngClass"], ["ngFor", "", 3, "ngForOf"], [1, "p-organizationchart-line-left", 3, "ngClass"], [1, "p-organizationchart-line-right", 3, "ngClass"], ["colspan", "2"], ["pOrganizationChartNode", "", 1, "p-organizationchart-table", 3, "node"]], template: function OrganizationChartNode_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, OrganizationChartNode_tbody_0_Template, 15, 20, "tbody", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.node);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgClass, ɵngcc1.NgForOf, ɵngcc1.NgTemplateOutlet, OrganizationChartNode], styles: [".p-organizationchart-table{border-collapse:separate;border-spacing:0;margin:0 auto}.p-organizationchart-table>tbody>tr>td{padding:0 .75rem;text-align:center;vertical-align:top}.p-organizationchart-node-content{display:inline-block;position:relative}.p-organizationchart-node-content .p-node-toggler{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;bottom:-.75rem;cursor:pointer;height:1.5rem;left:50%;margin-left:-.75rem;position:absolute;user-select:none;width:1.5rem;z-index:2}.p-organizationchart-node-content .p-node-toggler .p-node-toggler-icon{position:relative;top:.25rem}.p-organizationchart-line-down{height:20px;margin:0 auto;width:1px}.p-organizationchart-line-left,.p-organizationchart-line-right{border-radius:0}.p-organizationchart-selectable-node{cursor:pointer}.p-organizationchart .p-organizationchart-node-hidden{display:none}.p-organizationchart-preservespace .p-organizationchart-node-hidden{display:inherit;visibility:hidden}"], encapsulation: 2, data: { animation: [
            trigger('childState', [
                state('in', style({ opacity: 1 })),
                transition('void => *', [
                    style({ opacity: 0 }),
                    animate(150)
                ]),
                transition('* => void', [
                    animate(150, style({ opacity: 0 }))
                ])
            ])
        ] }, changeDetection: 0 });
OrganizationChartNode.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [forwardRef(() => OrganizationChart),] }] },
    { type: ChangeDetectorRef }
];
OrganizationChartNode.propDecorators = {
    node: [{ type: Input }],
    root: [{ type: Input }],
    first: [{ type: Input }],
    last: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(OrganizationChartNode, [{
        type: Component,
        args: [{
                selector: '[pOrganizationChartNode]',
                template: `
        <tbody *ngIf="node">
            <tr>
                <td [attr.colspan]="colspan">
                    <div [class]="node.styleClass" [ngClass]="{'p-organizationchart-node-content': true, 'p-organizationchart-selectable-node': chart.selectionMode && node.selectable !== false,'p-highlight':isSelected()}"
                        (click)="onNodeClick($event,node)">
                        <div *ngIf="!chart.getTemplateForNode(node)">{{node.label}}</div>
                        <div *ngIf="chart.getTemplateForNode(node)">
                            <ng-container *ngTemplateOutlet="chart.getTemplateForNode(node); context: {$implicit: node}"></ng-container>
                        </div>
                        <a *ngIf="!leaf" tabindex="0" class="p-node-toggler" (click)="toggleNode($event, node)" (keydown.enter)="toggleNode($event, node)">
                            <i class="p-node-toggler-icon pi" [ngClass]="{'pi-chevron-down': node.expanded, 'pi-chevron-up': !node.expanded}"></i>
                        </a>
                    </div>
                </td>
            </tr>
            <tr [ngClass]="!leaf&&node.expanded ? 'p-organizationchart-node-visible' : 'p-organizationchart-node-hidden'" class="p-organizationchart-lines" [@childState]="'in'">
                <td [attr.colspan]="colspan">
                    <div class="p-organizationchart-line-down"></div>
                </td>
            </tr>
            <tr [ngClass]="!leaf&&node.expanded ? 'p-organizationchart-node-visible' : 'p-organizationchart-node-hidden'" class="p-organizationchart-lines" [@childState]="'in'">
                <ng-container *ngIf="node.children && node.children.length === 1">
                    <td [attr.colspan]="colspan">
                        <div class="p-organizationchart-line-down"></div>
                    </td>
                </ng-container>
                <ng-container *ngIf="node.children && node.children.length > 1">
                    <ng-template ngFor let-child [ngForOf]="node.children" let-first="first" let-last="last">
                        <td class="p-organizationchart-line-left" [ngClass]="{'p-organizationchart-line-top':!first}">&nbsp;</td>
                        <td class="p-organizationchart-line-right" [ngClass]="{'p-organizationchart-line-top':!last}">&nbsp;</td>
                    </ng-template>
                </ng-container>
            </tr>
            <tr [ngClass]="!leaf&&node.expanded ? 'p-organizationchart-node-visible' : 'p-organizationchart-node-hidden'" class="p-organizationchart-nodes" [@childState]="'in'">
                <td *ngFor="let child of node.children" colspan="2">
                    <table class="p-organizationchart-table" pOrganizationChartNode [node]="child"></table>
                </td>
            </tr>
        </tbody>
    `,
                animations: [
                    trigger('childState', [
                        state('in', style({ opacity: 1 })),
                        transition('void => *', [
                            style({ opacity: 0 }),
                            animate(150)
                        ]),
                        transition('* => void', [
                            animate(150, style({ opacity: 0 }))
                        ])
                    ])
                ],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".p-organizationchart-table{border-collapse:separate;border-spacing:0;margin:0 auto}.p-organizationchart-table>tbody>tr>td{padding:0 .75rem;text-align:center;vertical-align:top}.p-organizationchart-node-content{display:inline-block;position:relative}.p-organizationchart-node-content .p-node-toggler{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;bottom:-.75rem;cursor:pointer;height:1.5rem;left:50%;margin-left:-.75rem;position:absolute;user-select:none;width:1.5rem;z-index:2}.p-organizationchart-node-content .p-node-toggler .p-node-toggler-icon{position:relative;top:.25rem}.p-organizationchart-line-down{height:20px;margin:0 auto;width:1px}.p-organizationchart-line-left,.p-organizationchart-line-right{border-radius:0}.p-organizationchart-selectable-node{cursor:pointer}.p-organizationchart .p-organizationchart-node-hidden{display:none}.p-organizationchart-preservespace .p-organizationchart-node-hidden{display:inherit;visibility:hidden}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [forwardRef(() => OrganizationChart)]
            }] }, { type: ɵngcc0.ChangeDetectorRef }]; }, { node: [{
            type: Input
        }], root: [{
            type: Input
        }], first: [{
            type: Input
        }], last: [{
            type: Input
        }] }); })();
export class OrganizationChart {
    constructor(el, cd) {
        this.el = el;
        this.cd = cd;
        this.preserveSpace = true;
        this.selectionChange = new EventEmitter();
        this.onNodeSelect = new EventEmitter();
        this.onNodeUnselect = new EventEmitter();
        this.onNodeExpand = new EventEmitter();
        this.onNodeCollapse = new EventEmitter();
        this.selectionSource = new Subject();
        this.selectionSource$ = this.selectionSource.asObservable();
    }
    get selection() {
        return this._selection;
    }
    set selection(val) {
        this._selection = val;
        if (this.initialized)
            this.selectionSource.next();
    }
    get root() {
        return this.value && this.value.length ? this.value[0] : null;
    }
    ngAfterContentInit() {
        if (this.templates.length) {
            this.templateMap = {};
        }
        this.templates.forEach((item) => {
            this.templateMap[item.getType()] = item.template;
        });
        this.initialized = true;
    }
    getTemplateForNode(node) {
        if (this.templateMap)
            return node.type ? this.templateMap[node.type] : this.templateMap['default'];
        else
            return null;
    }
    onNodeClick(event, node) {
        let eventTarget = event.target;
        if (eventTarget.className && (eventTarget.className.indexOf('p-node-toggler') !== -1 || eventTarget.className.indexOf('p-node-toggler-icon') !== -1)) {
            return;
        }
        else if (this.selectionMode) {
            if (node.selectable === false) {
                return;
            }
            let index = this.findIndexInSelection(node);
            let selected = (index >= 0);
            if (this.selectionMode === 'single') {
                if (selected) {
                    this.selection = null;
                    this.onNodeUnselect.emit({ originalEvent: event, node: node });
                }
                else {
                    this.selection = node;
                    this.onNodeSelect.emit({ originalEvent: event, node: node });
                }
            }
            else if (this.selectionMode === 'multiple') {
                if (selected) {
                    this.selection = this.selection.filter((val, i) => i != index);
                    this.onNodeUnselect.emit({ originalEvent: event, node: node });
                }
                else {
                    this.selection = [...this.selection || [], node];
                    this.onNodeSelect.emit({ originalEvent: event, node: node });
                }
            }
            this.selectionChange.emit(this.selection);
            this.selectionSource.next();
        }
    }
    findIndexInSelection(node) {
        let index = -1;
        if (this.selectionMode && this.selection) {
            if (this.selectionMode === 'single') {
                index = (this.selection == node) ? 0 : -1;
            }
            else if (this.selectionMode === 'multiple') {
                for (let i = 0; i < this.selection.length; i++) {
                    if (this.selection[i] == node) {
                        index = i;
                        break;
                    }
                }
            }
        }
        return index;
    }
    isSelected(node) {
        return this.findIndexInSelection(node) != -1;
    }
}
OrganizationChart.ɵfac = function OrganizationChart_Factory(t) { return new (t || OrganizationChart)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
OrganizationChart.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: OrganizationChart, selectors: [["p-organizationChart"]], contentQueries: function OrganizationChart_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, inputs: { preserveSpace: "preserveSpace", selection: "selection", value: "value", style: "style", styleClass: "styleClass", selectionMode: "selectionMode" }, outputs: { selectionChange: "selectionChange", onNodeSelect: "onNodeSelect", onNodeUnselect: "onNodeUnselect", onNodeExpand: "onNodeExpand", onNodeCollapse: "onNodeCollapse" }, decls: 2, vars: 7, consts: [[3, "ngStyle", "ngClass"], ["class", "p-organizationchart-table", "pOrganizationChartNode", "", 3, "node", 4, "ngIf"], ["pOrganizationChartNode", "", 1, "p-organizationchart-table", 3, "node"]], template: function OrganizationChart_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, OrganizationChart_table_1_Template, 1, 1, "table", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style)("ngClass", ɵngcc0.ɵɵpureFunction1(5, _c5, ctx.preserveSpace));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.root);
    } }, directives: [ɵngcc1.NgStyle, ɵngcc1.NgClass, ɵngcc1.NgIf, OrganizationChartNode], encapsulation: 2, changeDetection: 0 });
OrganizationChart.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
OrganizationChart.propDecorators = {
    value: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    selectionMode: [{ type: Input }],
    preserveSpace: [{ type: Input }],
    selection: [{ type: Input }],
    selectionChange: [{ type: Output }],
    onNodeSelect: [{ type: Output }],
    onNodeUnselect: [{ type: Output }],
    onNodeExpand: [{ type: Output }],
    onNodeCollapse: [{ type: Output }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(OrganizationChart, [{
        type: Component,
        args: [{
                selector: 'p-organizationChart',
                template: `
        <div [ngStyle]="style" [class]="styleClass" [ngClass]="{'p-organizationchart p-component': true, 'p-organizationchart-preservespace': preserveSpace}">
            <table class="p-organizationchart-table" pOrganizationChartNode [node]="root" *ngIf="root"></table>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { preserveSpace: [{
            type: Input
        }], selectionChange: [{
            type: Output
        }], onNodeSelect: [{
            type: Output
        }], onNodeUnselect: [{
            type: Output
        }], onNodeExpand: [{
            type: Output
        }], onNodeCollapse: [{
            type: Output
        }], selection: [{
            type: Input
        }], value: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], selectionMode: [{
            type: Input
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
export class OrganizationChartModule {
}
OrganizationChartModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: OrganizationChartModule });
OrganizationChartModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function OrganizationChartModule_Factory(t) { return new (t || OrganizationChartModule)(); }, imports: [[CommonModule], SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(OrganizationChartModule, { declarations: function () { return [OrganizationChart, OrganizationChartNode]; }, imports: function () { return [CommonModule]; }, exports: function () { return [OrganizationChart, SharedModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(OrganizationChartModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [OrganizationChart, SharedModule],
                declarations: [OrganizationChart, OrganizationChartNode]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JnYW5pemF0aW9uY2hhcnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9vcmdhbml6YXRpb25jaGFydC9vcmdhbml6YXRpb25jaGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBa0IsWUFBWSxFQUN4RSxNQUFNLEVBQUMsVUFBVSxFQUFDLGVBQWUsRUFBVyx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNuSixPQUFPLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQzNFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBRXpDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2RDdDLE1BQU0sT0FBTyxxQkFBcUI7QUFBRyxJQWNqQyxZQUF5RCxLQUFLLEVBQVMsRUFBcUI7QUFDaEcsUUFEMkUsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7QUFBQyxRQUN6RixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQTBCLENBQUM7QUFDaEQsUUFBUSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxD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RSxDQUFDLGlCQUFpQixFQUFDLFlBQVksQ0FBQyxrQkFDekMsWUFBWSxFQUFFLENBQUMsaUJBQWlCLEVBQUMscUJBQXFCLENBQUMsY0FDMUQ7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSxDb21wb25lbnQsRWxlbWVudFJlZixJbnB1dCxPdXRwdXQsQWZ0ZXJDb250ZW50SW5pdCxFdmVudEVtaXR0ZXIsVGVtcGxhdGVSZWYsXG4gICAgICAgIEluamVjdCxmb3J3YXJkUmVmLENvbnRlbnRDaGlsZHJlbixRdWVyeUxpc3QsQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9uLCBDaGFuZ2VEZXRlY3RvclJlZiwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dHJpZ2dlcixzdGF0ZSxzdHlsZSx0cmFuc2l0aW9uLGFuaW1hdGV9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1NoYXJlZE1vZHVsZX0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHtUcmVlTm9kZX0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHtQcmltZVRlbXBsYXRlfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdbcE9yZ2FuaXphdGlvbkNoYXJ0Tm9kZV0nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDx0Ym9keSAqbmdJZj1cIm5vZGVcIj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQgW2F0dHIuY29sc3Bhbl09XCJjb2xzcGFuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgW2NsYXNzXT1cIm5vZGUuc3R5bGVDbGFzc1wiIFtuZ0NsYXNzXT1cInsncC1vcmdhbml6YXRpb25jaGFydC1ub2RlLWNvbnRlbnQnOiB0cnVlLCAncC1vcmdhbml6YXRpb25jaGFydC1zZWxlY3RhYmxlLW5vZGUnOiBjaGFydC5zZWxlY3Rpb25Nb2RlICYmIG5vZGUuc2VsZWN0YWJsZSAhPT0gZmFsc2UsJ3AtaGlnaGxpZ2h0Jzppc1NlbGVjdGVkKCl9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbk5vZGVDbGljaygkZXZlbnQsbm9kZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCIhY2hhcnQuZ2V0VGVtcGxhdGVGb3JOb2RlKG5vZGUpXCI+e3tub2RlLmxhYmVsfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJjaGFydC5nZXRUZW1wbGF0ZUZvck5vZGUobm9kZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY2hhcnQuZ2V0VGVtcGxhdGVGb3JOb2RlKG5vZGUpOyBjb250ZXh0OiB7JGltcGxpY2l0OiBub2RlfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cIiFsZWFmXCIgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJwLW5vZGUtdG9nZ2xlclwiIChjbGljayk9XCJ0b2dnbGVOb2RlKCRldmVudCwgbm9kZSlcIiAoa2V5ZG93bi5lbnRlcik9XCJ0b2dnbGVOb2RlKCRldmVudCwgbm9kZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInAtbm9kZS10b2dnbGVyLWljb24gcGlcIiBbbmdDbGFzc109XCJ7J3BpLWNoZXZyb24tZG93bic6IG5vZGUuZXhwYW5kZWQsICdwaS1jaGV2cm9uLXVwJzogIW5vZGUuZXhwYW5kZWR9XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0ciBbbmdDbGFzc109XCIhbGVhZiYmbm9kZS5leHBhbmRlZCA/ICdwLW9yZ2FuaXphdGlvbmNoYXJ0LW5vZGUtdmlzaWJsZScgOiAncC1vcmdhbml6YXRpb25jaGFydC1ub2RlLWhpZGRlbidcIiBjbGFzcz1cInAtb3JnYW5pemF0aW9uY2hhcnQtbGluZXNcIiBbQGNoaWxkU3RhdGVdPVwiJ2luJ1wiPlxuICAgICAgICAgICAgICAgIDx0ZCBbYXR0ci5jb2xzcGFuXT1cImNvbHNwYW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtb3JnYW5pemF0aW9uY2hhcnQtbGluZS1kb3duXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHIgW25nQ2xhc3NdPVwiIWxlYWYmJm5vZGUuZXhwYW5kZWQgPyAncC1vcmdhbml6YXRpb25jaGFydC1ub2RlLXZpc2libGUnIDogJ3Atb3JnYW5pemF0aW9uY2hhcnQtbm9kZS1oaWRkZW4nXCIgY2xhc3M9XCJwLW9yZ2FuaXphdGlvbmNoYXJ0LWxpbmVzXCIgW0BjaGlsZFN0YXRlXT1cIidpbidcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA9PT0gMVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGQgW2F0dHIuY29sc3Bhbl09XCJjb2xzcGFuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1vcmdhbml6YXRpb25jaGFydC1saW5lLWRvd25cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDFcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1jaGlsZCBbbmdGb3JPZl09XCJub2RlLmNoaWxkcmVuXCIgbGV0LWZpcnN0PVwiZmlyc3RcIiBsZXQtbGFzdD1cImxhc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInAtb3JnYW5pemF0aW9uY2hhcnQtbGluZS1sZWZ0XCIgW25nQ2xhc3NdPVwieydwLW9yZ2FuaXphdGlvbmNoYXJ0LWxpbmUtdG9wJzohZmlyc3R9XCI+Jm5ic3A7PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInAtb3JnYW5pemF0aW9uY2hhcnQtbGluZS1yaWdodFwiIFtuZ0NsYXNzXT1cInsncC1vcmdhbml6YXRpb25jaGFydC1saW5lLXRvcCc6IWxhc3R9XCI+Jm5ic3A7PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHIgW25nQ2xhc3NdPVwiIWxlYWYmJm5vZGUuZXhwYW5kZWQgPyAncC1vcmdhbml6YXRpb25jaGFydC1ub2RlLXZpc2libGUnIDogJ3Atb3JnYW5pemF0aW9uY2hhcnQtbm9kZS1oaWRkZW4nXCIgY2xhc3M9XCJwLW9yZ2FuaXphdGlvbmNoYXJ0LW5vZGVzXCIgW0BjaGlsZFN0YXRlXT1cIidpbidcIj5cbiAgICAgICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW5cIiBjb2xzcGFuPVwiMlwiPlxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJwLW9yZ2FuaXphdGlvbmNoYXJ0LXRhYmxlXCIgcE9yZ2FuaXphdGlvbkNoYXJ0Tm9kZSBbbm9kZV09XCJjaGlsZFwiPjwvdGFibGU+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgYCxcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoJ2NoaWxkU3RhdGUnLCBbXG4gICAgICAgICAgICBzdGF0ZSgnaW4nLCBzdHlsZSh7b3BhY2l0eTogMX0pKSxcbiAgICAgICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwfSksXG4gICAgICAgICAgICAgYW5pbWF0ZSgxNTApXG4gICAgICAgICAgIF0pLFxuICAgICAgICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgICAgICAgYW5pbWF0ZSgxNTAsIHN0eWxlKHtvcGFjaXR5OjB9KSlcbiAgICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICBdLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgc3R5bGVVcmxzOiBbJy4vb3JnYW5pemF0aW9uY2hhcnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgT3JnYW5pemF0aW9uQ2hhcnROb2RlIGltcGxlbWVudHMgT25EZXN0cm95e1xuXG4gICAgQElucHV0KCkgbm9kZTogVHJlZU5vZGU7XG4gICAgICAgIFxuICAgIEBJbnB1dCgpIHJvb3Q6IGJvb2xlYW47XG4gICAgXG4gICAgQElucHV0KCkgZmlyc3Q6IGJvb2xlYW47XG4gICAgXG4gICAgQElucHV0KCkgbGFzdDogYm9vbGVhbjtcblxuICAgIGNoYXJ0OiBPcmdhbml6YXRpb25DaGFydDtcblxuICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgICAgICBcbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gT3JnYW5pemF0aW9uQ2hhcnQpKSBjaGFydCwgcHVibGljIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICB0aGlzLmNoYXJ0ID0gY2hhcnQgYXMgT3JnYW5pemF0aW9uQ2hhcnQ7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5jaGFydC5zZWxlY3Rpb25Tb3VyY2UkLnN1YnNjcmliZSgoKSA9PntcbiAgICAgICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgICAgICAgICAgICAgIFxuICAgIGdldCBsZWFmKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmxlYWYgPT0gZmFsc2UgPyBmYWxzZSA6ICEodGhpcy5ub2RlLmNoaWxkcmVuJiZ0aGlzLm5vZGUuY2hpbGRyZW4ubGVuZ3RoKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0IGNvbHNwYW4oKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5ub2RlLmNoaWxkcmVuICYmIHRoaXMubm9kZS5jaGlsZHJlbi5sZW5ndGgpID8gdGhpcy5ub2RlLmNoaWxkcmVuLmxlbmd0aCAqIDI6IG51bGw7XG4gICAgfVxuICAgIFxuICAgIG9uTm9kZUNsaWNrKGV2ZW50OiBFdmVudCwgbm9kZTogVHJlZU5vZGUpIHtcbiAgICAgICAgdGhpcy5jaGFydC5vbk5vZGVDbGljayhldmVudCwgbm9kZSlcbiAgICB9XG4gICAgXG4gICAgdG9nZ2xlTm9kZShldmVudDogRXZlbnQsIG5vZGU6IFRyZWVOb2RlKSB7XG4gICAgICAgIG5vZGUuZXhwYW5kZWQgPSAhbm9kZS5leHBhbmRlZDtcbiAgICAgICAgaWYgKG5vZGUuZXhwYW5kZWQpXG4gICAgICAgICAgICB0aGlzLmNoYXJ0Lm9uTm9kZUV4cGFuZC5lbWl0KHtvcmlnaW5hbEV2ZW50OiBldmVudCwgbm9kZTogdGhpcy5ub2RlfSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuY2hhcnQub25Ob2RlQ29sbGFwc2UuZW1pdCh7b3JpZ2luYWxFdmVudDogZXZlbnQsIG5vZGU6IHRoaXMubm9kZX0pO1xuICAgICAgICAgICAgXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIFxuICAgIGlzU2VsZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYXJ0LmlzU2VsZWN0ZWQodGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1vcmdhbml6YXRpb25DaGFydCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBbbmdTdHlsZV09XCJzdHlsZVwiIFtjbGFzc109XCJzdHlsZUNsYXNzXCIgW25nQ2xhc3NdPVwieydwLW9yZ2FuaXphdGlvbmNoYXJ0IHAtY29tcG9uZW50JzogdHJ1ZSwgJ3Atb3JnYW5pemF0aW9uY2hhcnQtcHJlc2VydmVzcGFjZSc6IHByZXNlcnZlU3BhY2V9XCI+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJwLW9yZ2FuaXphdGlvbmNoYXJ0LXRhYmxlXCIgcE9yZ2FuaXphdGlvbkNoYXJ0Tm9kZSBbbm9kZV09XCJyb290XCIgKm5nSWY9XCJyb290XCI+PC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE9yZ2FuaXphdGlvbkNoYXJ0IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gICAgICAgICAgICBcbiAgICBASW5wdXQoKSB2YWx1ZTogVHJlZU5vZGVbXTsgICAgICAgICAgICBcblxuICAgIEBJbnB1dCgpIHN0eWxlOiBhbnk7XG5cbiAgICBASW5wdXQoKSBzdHlsZUNsYXNzOiBzdHJpbmc7XG4gICAgXG4gICAgQElucHV0KCkgc2VsZWN0aW9uTW9kZTogc3RyaW5nO1xuICAgIFxuICAgIEBJbnB1dCgpIHByZXNlcnZlU3BhY2U6IGJvb2xlYW4gPSB0cnVlO1xuICAgIFxuICAgIEBJbnB1dCgpICBnZXQgc2VsZWN0aW9uKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3Rpb247XG4gICAgfVxuXG4gICAgc2V0IHNlbGVjdGlvbih2YWw6YW55KSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGlvbiA9IHZhbDtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmluaXRpYWxpemVkKVxuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25Tb3VyY2UubmV4dCgpO1xuICAgIH1cblxuICAgIEBPdXRwdXQoKSBzZWxlY3Rpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIFxuICAgIEBPdXRwdXQoKSBvbk5vZGVTZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIFxuICAgIEBPdXRwdXQoKSBvbk5vZGVVbnNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgb25Ob2RlRXhwYW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbk5vZGVDb2xsYXBzZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgXG4gICAgQENvbnRlbnRDaGlsZHJlbihQcmltZVRlbXBsYXRlKSB0ZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxhbnk+O1xuICAgIFxuICAgIHB1YmxpYyB0ZW1wbGF0ZU1hcDogYW55O1xuXG4gICAgcHJpdmF0ZSBzZWxlY3Rpb25Tb3VyY2UgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgICBfc2VsZWN0aW9uOiBhbnk7XG5cbiAgICBpbml0aWFsaXplZDogYm9vbGVhbjtcblxuICAgIHNlbGVjdGlvblNvdXJjZSQgPSB0aGlzLnNlbGVjdGlvblNvdXJjZS5hc09ic2VydmFibGUoKTtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYsIHB1YmxpYyBjZDpDaGFuZ2VEZXRlY3RvclJlZikge31cbiAgICBcbiAgICBnZXQgcm9vdCgpOiBUcmVlTm9kZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUubGVuZ3RoID8gdGhpcy52YWx1ZVswXSA6IG51bGw7XG4gICAgfVxuICAgIFxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMudGVtcGxhdGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZU1hcCA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnRlbXBsYXRlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlTWFwW2l0ZW0uZ2V0VHlwZSgpXSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBcbiAgICBnZXRUZW1wbGF0ZUZvck5vZGUobm9kZTogVHJlZU5vZGUpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICAgICAgaWYgKHRoaXMudGVtcGxhdGVNYXApXG4gICAgICAgICAgICByZXR1cm4gbm9kZS50eXBlID8gdGhpcy50ZW1wbGF0ZU1hcFtub2RlLnR5cGVdIDogdGhpcy50ZW1wbGF0ZU1hcFsnZGVmYXVsdCddO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgb25Ob2RlQ2xpY2soZXZlbnQ6IEV2ZW50LCBub2RlOiBUcmVlTm9kZSkge1xuICAgICAgICBsZXQgZXZlbnRUYXJnZXQgPSAoPEVsZW1lbnQ+IGV2ZW50LnRhcmdldCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoZXZlbnRUYXJnZXQuY2xhc3NOYW1lICYmIChldmVudFRhcmdldC5jbGFzc05hbWUuaW5kZXhPZigncC1ub2RlLXRvZ2dsZXInKSAhPT0gLTEgfHzCoGV2ZW50VGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mKCdwLW5vZGUtdG9nZ2xlci1pY29uJykgIT09IC0xKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc2VsZWN0aW9uTW9kZSkge1xuICAgICAgICAgICAgaWYgKG5vZGUuc2VsZWN0YWJsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuZmluZEluZGV4SW5TZWxlY3Rpb24obm9kZSk7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSAoaW5kZXggPj0gMCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbk1vZGUgPT09ICdzaW5nbGUnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbk5vZGVVbnNlbGVjdC5lbWl0KHtvcmlnaW5hbEV2ZW50OiBldmVudCwgbm9kZTogbm9kZX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBub2RlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTm9kZVNlbGVjdC5lbWl0KHtvcmlnaW5hbEV2ZW50OiBldmVudCwgbm9kZTogbm9kZX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc2VsZWN0aW9uTW9kZSA9PT0gJ211bHRpcGxlJykge1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLmZpbHRlcigodmFsLGkpID0+IGkhPWluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbk5vZGVVbnNlbGVjdC5lbWl0KHtvcmlnaW5hbEV2ZW50OiBldmVudCwgbm9kZTogbm9kZX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBbLi4udGhpcy5zZWxlY3Rpb258fFtdLG5vZGVdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTm9kZVNlbGVjdC5lbWl0KHtvcmlnaW5hbEV2ZW50OiBldmVudCwgbm9kZTogbm9kZX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGlvbik7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvblNvdXJjZS5uZXh0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZmluZEluZGV4SW5TZWxlY3Rpb24obm9kZTogVHJlZU5vZGUpIHtcbiAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSAtMTtcblxuICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb25Nb2RlICYmIHRoaXMuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb25Nb2RlID09PSAnc2luZ2xlJykge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gKHRoaXMuc2VsZWN0aW9uID09IG5vZGUpID8gMCA6IC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc2VsZWN0aW9uTW9kZSA9PT0gJ211bHRpcGxlJykge1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgIDwgdGhpcy5zZWxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uW2ldID09IG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgICBcbiAgICBpc1NlbGVjdGVkKG5vZGU6IFRyZWVOb2RlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbmRJbmRleEluU2VsZWN0aW9uKG5vZGUpICE9IC0xOyAgICAgICAgIFxuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbT3JnYW5pemF0aW9uQ2hhcnQsU2hhcmVkTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtPcmdhbml6YXRpb25DaGFydCxPcmdhbml6YXRpb25DaGFydE5vZGVdXG59KVxuZXhwb3J0IGNsYXNzIE9yZ2FuaXphdGlvbkNoYXJ0TW9kdWxlIHsgfSJdfQ==