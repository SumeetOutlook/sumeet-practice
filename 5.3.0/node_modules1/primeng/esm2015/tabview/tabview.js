import { NgModule, Component, ElementRef, Input, Output, EventEmitter, ContentChildren, ViewContainerRef, ChangeDetectorRef, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, forwardRef, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { RippleModule } from 'primeng/ripple';
import { SharedModule, PrimeTemplate } from 'primeng/api';
import { DomHandler } from 'primeng/dom';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/ripple';
import * as ɵngcc3 from 'primeng/tooltip';

function TabPanel_div_0_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TabPanel_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TabPanel_div_0_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 3);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r1.contentTemplate);
} }
function TabPanel_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵtemplate(2, TabPanel_div_0_ng_container_2_Template, 2, 1, "ng-container", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("hidden", !ctx_r0.selected);
    ɵngcc0.ɵɵattribute("id", ctx_r0.id)("aria-hidden", !ctx_r0.selected)("aria-labelledby", ctx_r0.id + "-label");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.contentTemplate && (ctx_r0.cache ? ctx_r0.loaded : ctx_r0.selected));
} }
const _c0 = ["*"];
const _c1 = ["navbar"];
const _c2 = ["inkbar"];
function TabView_ng_template_3_li_0_ng_container_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 16);
} if (rf & 2) {
    const tab_r3 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", tab_r3.leftIcon);
} }
function TabView_ng_template_3_li_0_ng_container_2_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 17);
} if (rf & 2) {
    const tab_r3 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", tab_r3.rightIcon);
} }
function TabView_ng_template_3_li_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TabView_ng_template_3_li_0_ng_container_2_span_1_Template, 1, 1, "span", 13);
    ɵngcc0.ɵɵelementStart(2, "span", 14);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(4, TabView_ng_template_3_li_0_ng_container_2_span_4_Template, 1, 1, "span", 15);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const tab_r3 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", tab_r3.leftIcon);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(tab_r3.header);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", tab_r3.rightIcon);
} }
function TabView_ng_template_3_li_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TabView_ng_template_3_li_0_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 18);
    ɵngcc0.ɵɵlistener("click", function TabView_ng_template_3_li_0_span_4_Template_span_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r14); const tab_r3 = ɵngcc0.ɵɵnextContext(2).$implicit; const ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.close($event, tab_r3); });
    ɵngcc0.ɵɵelementEnd();
} }
const _c3 = function (a0, a1) { return { "p-highlight": a0, "p-disabled": a1 }; };
function TabView_ng_template_3_li_0_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 8);
    ɵngcc0.ɵɵelementStart(1, "a", 9);
    ɵngcc0.ɵɵlistener("click", function TabView_ng_template_3_li_0_Template_a_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); const tab_r3 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.open($event, tab_r3); })("keydown.enter", function TabView_ng_template_3_li_0_Template_a_keydown_enter_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); const tab_r3 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r19 = ɵngcc0.ɵɵnextContext(); return ctx_r19.open($event, tab_r3); });
    ɵngcc0.ɵɵtemplate(2, TabView_ng_template_3_li_0_ng_container_2_Template, 5, 3, "ng-container", 10);
    ɵngcc0.ɵɵtemplate(3, TabView_ng_template_3_li_0_ng_container_3_Template, 1, 0, "ng-container", 11);
    ɵngcc0.ɵɵtemplate(4, TabView_ng_template_3_li_0_span_4_Template, 1, 0, "span", 12);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r3 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵclassMap(tab_r3.headerStyleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(16, _c3, tab_r3.selected, tab_r3.disabled))("ngStyle", tab_r3.headerStyle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("pTooltip", tab_r3.tooltip)("tooltipPosition", tab_r3.tooltipPosition)("positionStyle", tab_r3.tooltipPositionStyle)("tooltipStyleClass", tab_r3.tooltipStyleClass);
    ɵngcc0.ɵɵattribute("id", tab_r3.id + "-label")("aria-selected", tab_r3.selected)("aria-controls", tab_r3.id)("aria-selected", tab_r3.selected)("tabindex", tab_r3.disabled ? null : "0");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !tab_r3.headerTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", tab_r3.headerTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", tab_r3.closable);
} }
function TabView_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, TabView_ng_template_3_li_0_Template, 5, 19, "li", 7);
} if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngIf", !tab_r3.closed);
} }
let idx = 0;
export class TabPanel {
    constructor(tabView, viewContainer, cd) {
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.cache = true;
        this.tooltipPosition = 'top';
        this.tooltipPositionStyle = 'absolute';
        this.id = `p-tabpanel-${idx++}`;
        this.tabView = tabView;
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'header':
                    this.headerTemplate = item.template;
                    break;
                case 'content':
                    this.contentTemplate = item.template;
                    break;
                default:
                    this.contentTemplate = item.template;
                    break;
            }
        });
    }
    get selected() {
        return this._selected;
    }
    set selected(val) {
        this._selected = val;
        if (!this.loaded) {
            this.cd.detectChanges();
        }
        this.loaded = true;
    }
    get disabled() {
        return this._disabled;
    }
    ;
    set disabled(disabled) {
        this._disabled = disabled;
        this.tabView.cd.markForCheck();
    }
    ngOnDestroy() {
        this.view = null;
    }
}
TabPanel.ɵfac = function TabPanel_Factory(t) { return new (t || TabPanel)(ɵngcc0.ɵɵdirectiveInject(forwardRef(() => TabView)), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
TabPanel.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TabPanel, selectors: [["p-tabPanel"]], contentQueries: function TabPanel_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, inputs: { cache: "cache", tooltipPosition: "tooltipPosition", tooltipPositionStyle: "tooltipPositionStyle", selected: "selected", disabled: "disabled", header: "header", closable: "closable", headerStyle: "headerStyle", headerStyleClass: "headerStyleClass", leftIcon: "leftIcon", rightIcon: "rightIcon", tooltip: "tooltip", tooltipStyleClass: "tooltipStyleClass" }, ngContentSelectors: _c0, decls: 1, vars: 1, consts: [["class", "p-tabview-panel", "role", "tabpanel", 3, "hidden", 4, "ngIf"], ["role", "tabpanel", 1, "p-tabview-panel", 3, "hidden"], [4, "ngIf"], [4, "ngTemplateOutlet"]], template: function TabPanel_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, TabPanel_div_0_Template, 3, 5, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !ctx.closed);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], encapsulation: 2 });
TabPanel.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [forwardRef(() => TabView),] }] },
    { type: ViewContainerRef },
    { type: ChangeDetectorRef }
];
TabPanel.propDecorators = {
    header: [{ type: Input }],
    closable: [{ type: Input }],
    headerStyle: [{ type: Input }],
    headerStyleClass: [{ type: Input }],
    leftIcon: [{ type: Input }],
    rightIcon: [{ type: Input }],
    cache: [{ type: Input }],
    tooltip: [{ type: Input }],
    tooltipPosition: [{ type: Input }],
    tooltipPositionStyle: [{ type: Input }],
    tooltipStyleClass: [{ type: Input }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }],
    selected: [{ type: Input }],
    disabled: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TabPanel, [{
        type: Component,
        args: [{
                selector: 'p-tabPanel',
                template: `
        <div [attr.id]="id" class="p-tabview-panel" [hidden]="!selected"
            role="tabpanel" [attr.aria-hidden]="!selected" [attr.aria-labelledby]="id + '-label'" *ngIf="!closed">
            <ng-content></ng-content>
            <ng-container *ngIf="contentTemplate && (cache ? loaded : selected)">
                <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
            </ng-container>
        </div>
    `
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [forwardRef(() => TabView)]
            }] }, { type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { cache: [{
            type: Input
        }], tooltipPosition: [{
            type: Input
        }], tooltipPositionStyle: [{
            type: Input
        }], selected: [{
            type: Input
        }], disabled: [{
            type: Input
        }], header: [{
            type: Input
        }], closable: [{
            type: Input
        }], headerStyle: [{
            type: Input
        }], headerStyleClass: [{
            type: Input
        }], leftIcon: [{
            type: Input
        }], rightIcon: [{
            type: Input
        }], tooltip: [{
            type: Input
        }], tooltipStyleClass: [{
            type: Input
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
export class TabView {
    constructor(el, cd) {
        this.el = el;
        this.cd = cd;
        this.orientation = 'top';
        this.onChange = new EventEmitter();
        this.onClose = new EventEmitter();
        this.activeIndexChange = new EventEmitter();
    }
    ngAfterContentInit() {
        this.initTabs();
        this.tabPanels.changes.subscribe(_ => {
            this.initTabs();
        });
    }
    ngAfterViewChecked() {
        if (this.tabChanged) {
            this.updateInkBar();
            this.tabChanged = false;
        }
    }
    initTabs() {
        this.tabs = this.tabPanels.toArray();
        let selectedTab = this.findSelectedTab();
        if (!selectedTab && this.tabs.length) {
            if (this.activeIndex != null && this.tabs.length > this.activeIndex)
                this.tabs[this.activeIndex].selected = true;
            else
                this.tabs[0].selected = true;
            this.tabChanged = true;
        }
        this.cd.markForCheck();
    }
    open(event, tab) {
        if (tab.disabled) {
            if (event) {
                event.preventDefault();
            }
            return;
        }
        if (!tab.selected) {
            let selectedTab = this.findSelectedTab();
            if (selectedTab) {
                selectedTab.selected = false;
            }
            this.tabChanged = true;
            tab.selected = true;
            let selectedTabIndex = this.findTabIndex(tab);
            this.preventActiveIndexPropagation = true;
            this.activeIndexChange.emit(selectedTabIndex);
            this.onChange.emit({ originalEvent: event, index: selectedTabIndex });
        }
        if (event) {
            event.preventDefault();
        }
    }
    close(event, tab) {
        if (this.controlClose) {
            this.onClose.emit({
                originalEvent: event,
                index: this.findTabIndex(tab),
                close: () => {
                    this.closeTab(tab);
                }
            });
        }
        else {
            this.closeTab(tab);
            this.onClose.emit({
                originalEvent: event,
                index: this.findTabIndex(tab)
            });
        }
        event.stopPropagation();
    }
    closeTab(tab) {
        if (tab.disabled) {
            return;
        }
        if (tab.selected) {
            this.tabChanged = true;
            tab.selected = false;
            for (let i = 0; i < this.tabs.length; i++) {
                let tabPanel = this.tabs[i];
                if (!tabPanel.closed && !tab.disabled) {
                    tabPanel.selected = true;
                    break;
                }
            }
        }
        tab.closed = true;
    }
    findSelectedTab() {
        for (let i = 0; i < this.tabs.length; i++) {
            if (this.tabs[i].selected) {
                return this.tabs[i];
            }
        }
        return null;
    }
    findTabIndex(tab) {
        let index = -1;
        for (let i = 0; i < this.tabs.length; i++) {
            if (this.tabs[i] == tab) {
                index = i;
                break;
            }
        }
        return index;
    }
    getBlockableElement() {
        return this.el.nativeElement.children[0];
    }
    get activeIndex() {
        return this._activeIndex;
    }
    set activeIndex(val) {
        this._activeIndex = val;
        if (this.preventActiveIndexPropagation) {
            this.preventActiveIndexPropagation = false;
            return;
        }
        if (this.tabs && this.tabs.length && this._activeIndex != null && this.tabs.length > this._activeIndex) {
            this.findSelectedTab().selected = false;
            this.tabs[this._activeIndex].selected = true;
        }
    }
    updateInkBar() {
        let tabHeader = DomHandler.findSingle(this.navbar.nativeElement, 'li.p-highlight');
        this.inkbar.nativeElement.style.width = DomHandler.getWidth(tabHeader) + 'px';
        this.inkbar.nativeElement.style.left = DomHandler.getOffset(tabHeader).left - DomHandler.getOffset(this.navbar.nativeElement).left + 'px';
    }
}
TabView.ɵfac = function TabView_Factory(t) { return new (t || TabView)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
TabView.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TabView, selectors: [["p-tabView"]], contentQueries: function TabView_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, TabPanel, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tabPanels = _t);
    } }, viewQuery: function TabView_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c1, true);
        ɵngcc0.ɵɵviewQuery(_c2, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.navbar = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inkbar = _t.first);
    } }, inputs: { orientation: "orientation", activeIndex: "activeIndex", style: "style", styleClass: "styleClass", controlClose: "controlClose" }, outputs: { onChange: "onChange", onClose: "onClose", activeIndexChange: "activeIndexChange" }, ngContentSelectors: _c0, decls: 8, vars: 5, consts: [[3, "ngClass", "ngStyle"], ["role", "tablist", 1, "p-tabview-nav"], ["navbar", ""], ["ngFor", "", 3, "ngForOf"], [1, "p-tabview-ink-bar"], ["inkbar", ""], [1, "p-tabview-panels"], ["role", "presentation", 3, "ngClass", "ngStyle", "class", 4, "ngIf"], ["role", "presentation", 3, "ngClass", "ngStyle"], ["role", "tab", "pRipple", "", 1, "p-tabview-nav-link", 3, "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", "click", "keydown.enter"], [4, "ngIf"], [4, "ngTemplateOutlet"], ["class", "p-tabview-close pi pi-times", 3, "click", 4, "ngIf"], ["class", "p-tabview-left-icon", 3, "ngClass", 4, "ngIf"], [1, "p-tabview-title"], ["class", "p-tabview-right-icon", 3, "ngClass", 4, "ngIf"], [1, "p-tabview-left-icon", 3, "ngClass"], [1, "p-tabview-right-icon", 3, "ngClass"], [1, "p-tabview-close", "pi", "pi-times", 3, "click"]], template: function TabView_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "ul", 1, 2);
        ɵngcc0.ɵɵtemplate(3, TabView_ng_template_3_Template, 1, 1, "ng-template", 3);
        ɵngcc0.ɵɵelement(4, "li", 4, 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "div", 6);
        ɵngcc0.ɵɵprojection(7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-tabview p-component")("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.tabs);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgForOf, ɵngcc1.NgIf, ɵngcc2.Ripple, ɵngcc3.Tooltip, ɵngcc1.NgTemplateOutlet], styles: [".p-tabview-nav{-ms-flex-wrap:wrap;display:-ms-flexbox;display:flex;flex-wrap:wrap;list-style-type:none;margin:0;padding:0}.p-tabview-nav-link{-moz-user-select:none;-ms-flex-align:center;-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;overflow:hidden;position:relative;text-decoration:none;user-select:none}.p-tabview-ink-bar{display:none;z-index:1}.p-tabview-nav-link:focus{z-index:1}.p-tabview-title{line-height:1}.p-tabview-close{z-index:1}"], encapsulation: 2, changeDetection: 0 });
TabView.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
TabView.propDecorators = {
    orientation: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    controlClose: [{ type: Input }],
    navbar: [{ type: ViewChild, args: ['navbar',] }],
    inkbar: [{ type: ViewChild, args: ['inkbar',] }],
    tabPanels: [{ type: ContentChildren, args: [TabPanel,] }],
    onChange: [{ type: Output }],
    onClose: [{ type: Output }],
    activeIndexChange: [{ type: Output }],
    activeIndex: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TabView, [{
        type: Component,
        args: [{
                selector: 'p-tabView',
                template: `
        <div [ngClass]="'p-tabview p-component'" [ngStyle]="style" [class]="styleClass">
            <ul #navbar class="p-tabview-nav" role="tablist">
                <ng-template ngFor let-tab [ngForOf]="tabs">
                    <li role="presentation" [ngClass]="{'p-highlight': tab.selected, 'p-disabled': tab.disabled}" [ngStyle]="tab.headerStyle" [class]="tab.headerStyleClass" *ngIf="!tab.closed">
                        <a role="tab" class="p-tabview-nav-link" [attr.id]="tab.id + '-label'" [attr.aria-selected]="tab.selected" [attr.aria-controls]="tab.id" [pTooltip]="tab.tooltip" [tooltipPosition]="tab.tooltipPosition"
                            [attr.aria-selected]="tab.selected" [positionStyle]="tab.tooltipPositionStyle" [tooltipStyleClass]="tab.tooltipStyleClass"
                            (click)="open($event,tab)" (keydown.enter)="open($event,tab)" pRipple [attr.tabindex]="tab.disabled ? null : '0'">
                            <ng-container *ngIf="!tab.headerTemplate">
                                <span class="p-tabview-left-icon" [ngClass]="tab.leftIcon" *ngIf="tab.leftIcon"></span>
                                <span class="p-tabview-title">{{tab.header}}</span>
                                <span class="p-tabview-right-icon" [ngClass]="tab.rightIcon" *ngIf="tab.rightIcon"></span>
                            </ng-container>
                            <ng-container *ngTemplateOutlet="tab.headerTemplate"></ng-container>
                            <span *ngIf="tab.closable" class="p-tabview-close pi pi-times" (click)="close($event,tab)"></span>
                        </a>
                    </li>
                </ng-template>
                <li #inkbar class="p-tabview-ink-bar"></li>
            </ul>
            <div class="p-tabview-panels">
                <ng-content></ng-content>
            </div>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-tabview-nav{-ms-flex-wrap:wrap;display:-ms-flexbox;display:flex;flex-wrap:wrap;list-style-type:none;margin:0;padding:0}.p-tabview-nav-link{-moz-user-select:none;-ms-flex-align:center;-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;overflow:hidden;position:relative;text-decoration:none;user-select:none}.p-tabview-ink-bar{display:none;z-index:1}.p-tabview-nav-link:focus{z-index:1}.p-tabview-title{line-height:1}.p-tabview-close{z-index:1}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { orientation: [{
            type: Input
        }], onChange: [{
            type: Output
        }], onClose: [{
            type: Output
        }], activeIndexChange: [{
            type: Output
        }], activeIndex: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], controlClose: [{
            type: Input
        }], navbar: [{
            type: ViewChild,
            args: ['navbar']
        }], inkbar: [{
            type: ViewChild,
            args: ['inkbar']
        }], tabPanels: [{
            type: ContentChildren,
            args: [TabPanel]
        }] }); })();
export class TabViewModule {
}
TabViewModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TabViewModule });
TabViewModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TabViewModule_Factory(t) { return new (t || TabViewModule)(); }, imports: [[CommonModule, SharedModule, TooltipModule, RippleModule], SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TabViewModule, { declarations: function () { return [TabView, TabPanel]; }, imports: function () { return [CommonModule, SharedModule, TooltipModule, RippleModule]; }, exports: function () { return [TabView, TabPanel, SharedModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TabViewModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, SharedModule, TooltipModule, RippleModule],
                exports: [TabView, TabPanel, SharedModule],
                declarations: [TabView, TabPanel]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFidmlldy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL3RhYnZpZXcvdGFidmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQVcsS0FBSyxFQUFDLE1BQU0sRUFBQyxZQUFZLEVBQ2pFLGVBQWUsRUFBdUMsZ0JBQWdCLEVBQUMsaUJBQWlCLEVBQUMsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFvQixVQUFVLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25OLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBQyxZQUFZLEVBQUMsYUFBYSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBRXZELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxhQUFhLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QyxJQUFJLEdBQUcsR0FBVyxDQUFDLENBQUM7QUFjcEIsTUFBTSxPQUFPLFFBQVE7QUFBRyxJQTRDcEIsWUFBK0MsT0FBTyxFQUFTLGFBQStCLEVBQVMsRUFBcUI7QUFDaEksUUFEbUUsa0JBQWEsR0FBYixhQUFhLENBQWtCO0FBQUMsUUFBUSxPQUFFLEdBQUYsRUFBRSxDQUFtQjtBQUFDLFFBOUJwSCxVQUFLLEdBQVksSUFBSSxDQUFDO0FBQ25DLFFBR2Esb0JBQWUsR0FBVyxLQUFLLENBQUM7QUFDN0MsUUFDYSx5QkFBb0IsR0FBVyxVQUFVLENBQUM7QUFDdkQsUUFlSSxPQUFFLEdBQVcs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bXBvcnQge05nTW9kdWxlLENvbXBvbmVudCxFbGVtZW50UmVmLE9uRGVzdHJveSxJbnB1dCxPdXRwdXQsRXZlbnRFbWl0dGVyLEFmdGVyQ29udGVudEluaXQsXG4gICAgICAgIENvbnRlbnRDaGlsZHJlbixRdWVyeUxpc3QsVGVtcGxhdGVSZWYsRW1iZWRkZWRWaWV3UmVmLFZpZXdDb250YWluZXJSZWYsQ2hhbmdlRGV0ZWN0b3JSZWYsQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9uLCBWaWV3Q2hpbGQsIEFmdGVyVmlld0NoZWNrZWQsIGZvcndhcmRSZWYsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7VG9vbHRpcE1vZHVsZX0gZnJvbSAncHJpbWVuZy90b29sdGlwJztcbmltcG9ydCB7UmlwcGxlTW9kdWxlfSBmcm9tICdwcmltZW5nL3JpcHBsZSc7XG5pbXBvcnQge1NoYXJlZE1vZHVsZSxQcmltZVRlbXBsYXRlfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQge0Jsb2NrYWJsZVVJfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQge0RvbUhhbmRsZXJ9IGZyb20gJ3ByaW1lbmcvZG9tJztcblxubGV0IGlkeDogbnVtYmVyID0gMDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLXRhYlBhbmVsJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IFthdHRyLmlkXT1cImlkXCIgY2xhc3M9XCJwLXRhYnZpZXctcGFuZWxcIiBbaGlkZGVuXT1cIiFzZWxlY3RlZFwiXG4gICAgICAgICAgICByb2xlPVwidGFicGFuZWxcIiBbYXR0ci5hcmlhLWhpZGRlbl09XCIhc2VsZWN0ZWRcIiBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiaWQgKyAnLWxhYmVsJ1wiICpuZ0lmPVwiIWNsb3NlZFwiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbnRlbnRUZW1wbGF0ZSAmJiAoY2FjaGUgPyBsb2FkZWQgOiBzZWxlY3RlZClcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGVudFRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBUYWJQYW5lbCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsT25EZXN0cm95IHtcblxuICAgIEBJbnB1dCgpIGhlYWRlcjogc3RyaW5nO1xuICAgIFxuICAgIEBJbnB1dCgpIGNsb3NhYmxlOiBib29sZWFuO1xuICAgIFxuICAgIEBJbnB1dCgpIGhlYWRlclN0eWxlOiBhbnk7XG4gICAgXG4gICAgQElucHV0KCkgaGVhZGVyU3R5bGVDbGFzczogc3RyaW5nO1xuICAgIFxuICAgIEBJbnB1dCgpIGxlZnRJY29uOiBzdHJpbmc7XG4gICAgXG4gICAgQElucHV0KCkgcmlnaHRJY29uOiBzdHJpbmc7XG4gICAgXG4gICAgQElucHV0KCkgY2FjaGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQElucHV0KCkgdG9vbHRpcDogYW55O1xuICAgIFxuICAgIEBJbnB1dCgpIHRvb2x0aXBQb3NpdGlvbjogc3RyaW5nID0gJ3RvcCc7XG5cbiAgICBASW5wdXQoKSB0b29sdGlwUG9zaXRpb25TdHlsZTogc3RyaW5nID0gJ2Fic29sdXRlJztcblxuICAgIEBJbnB1dCgpIHRvb2x0aXBTdHlsZUNsYXNzOiBzdHJpbmc7XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFByaW1lVGVtcGxhdGUpIHRlbXBsYXRlczogUXVlcnlMaXN0PGFueT47XG4gICAgXG4gICAgY2xvc2VkOiBib29sZWFuO1xuICAgIFxuICAgIHZpZXc6IEVtYmVkZGVkVmlld1JlZjxhbnk+O1xuICAgIFxuICAgIF9zZWxlY3RlZDogYm9vbGVhbjtcblxuICAgIF9kaXNhYmxlZDogYm9vbGVhbjtcbiAgICBcbiAgICBsb2FkZWQ6IGJvb2xlYW47XG4gICAgXG4gICAgaWQ6IHN0cmluZyA9IGBwLXRhYnBhbmVsLSR7aWR4Kyt9YDtcbiAgICBcbiAgICBjb250ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBoZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIHRhYlZpZXc6IFRhYlZpZXc7XG5cbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gVGFiVmlldykpIHRhYlZpZXcsIHB1YmxpYyB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLCBwdWJsaWMgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIHRoaXMudGFiVmlldyA9IHRhYlZpZXcgYXMgVGFiVmlldztcbiAgICB9XG5cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHN3aXRjaChpdGVtLmdldFR5cGUoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2hlYWRlcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnY29udGVudCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudFRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBASW5wdXQoKSBnZXQgc2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcbiAgICB9XG5cbiAgICBzZXQgc2VsZWN0ZWQodmFsOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkID0gdmFsO1xuICAgICAgICBcbiAgICAgICAgaWYgKCF0aGlzLmxvYWRlZCkge1xuICAgICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgQElucHV0KCkgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gICAgfTtcblxuICAgIHNldCBkaXNhYmxlZChkaXNhYmxlZDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgICAgICB0aGlzLnRhYlZpZXcuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICAgIFxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnZpZXcgPSBudWxsO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLXRhYlZpZXcnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgW25nQ2xhc3NdPVwiJ3AtdGFidmlldyBwLWNvbXBvbmVudCdcIiBbbmdTdHlsZV09XCJzdHlsZVwiIFtjbGFzc109XCJzdHlsZUNsYXNzXCI+XG4gICAgICAgICAgICA8dWwgI25hdmJhciBjbGFzcz1cInAtdGFidmlldy1uYXZcIiByb2xlPVwidGFibGlzdFwiPlxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtdGFiIFtuZ0Zvck9mXT1cInRhYnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIHJvbGU9XCJwcmVzZW50YXRpb25cIiBbbmdDbGFzc109XCJ7J3AtaGlnaGxpZ2h0JzogdGFiLnNlbGVjdGVkLCAncC1kaXNhYmxlZCc6IHRhYi5kaXNhYmxlZH1cIiBbbmdTdHlsZV09XCJ0YWIuaGVhZGVyU3R5bGVcIiBbY2xhc3NdPVwidGFiLmhlYWRlclN0eWxlQ2xhc3NcIiAqbmdJZj1cIiF0YWIuY2xvc2VkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSByb2xlPVwidGFiXCIgY2xhc3M9XCJwLXRhYnZpZXctbmF2LWxpbmtcIiBbYXR0ci5pZF09XCJ0YWIuaWQgKyAnLWxhYmVsJ1wiIFthdHRyLmFyaWEtc2VsZWN0ZWRdPVwidGFiLnNlbGVjdGVkXCIgW2F0dHIuYXJpYS1jb250cm9sc109XCJ0YWIuaWRcIiBbcFRvb2x0aXBdPVwidGFiLnRvb2x0aXBcIiBbdG9vbHRpcFBvc2l0aW9uXT1cInRhYi50b29sdGlwUG9zaXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtc2VsZWN0ZWRdPVwidGFiLnNlbGVjdGVkXCIgW3Bvc2l0aW9uU3R5bGVdPVwidGFiLnRvb2x0aXBQb3NpdGlvblN0eWxlXCIgW3Rvb2x0aXBTdHlsZUNsYXNzXT1cInRhYi50b29sdGlwU3R5bGVDbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9wZW4oJGV2ZW50LHRhYilcIiAoa2V5ZG93bi5lbnRlcik9XCJvcGVuKCRldmVudCx0YWIpXCIgcFJpcHBsZSBbYXR0ci50YWJpbmRleF09XCJ0YWIuZGlzYWJsZWQgPyBudWxsIDogJzAnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF0YWIuaGVhZGVyVGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLXRhYnZpZXctbGVmdC1pY29uXCIgW25nQ2xhc3NdPVwidGFiLmxlZnRJY29uXCIgKm5nSWY9XCJ0YWIubGVmdEljb25cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC10YWJ2aWV3LXRpdGxlXCI+e3t0YWIuaGVhZGVyfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC10YWJ2aWV3LXJpZ2h0LWljb25cIiBbbmdDbGFzc109XCJ0YWIucmlnaHRJY29uXCIgKm5nSWY9XCJ0YWIucmlnaHRJY29uXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0YWIuaGVhZGVyVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInRhYi5jbG9zYWJsZVwiIGNsYXNzPVwicC10YWJ2aWV3LWNsb3NlIHBpIHBpLXRpbWVzXCIgKGNsaWNrKT1cImNsb3NlKCRldmVudCx0YWIpXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPGxpICNpbmtiYXIgY2xhc3M9XCJwLXRhYnZpZXctaW5rLWJhclwiPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtdGFidmlldy1wYW5lbHNcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgIHN0eWxlVXJsczogWycuL3RhYnZpZXcuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGFiVmlldyBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsQWZ0ZXJWaWV3Q2hlY2tlZCxCbG9ja2FibGVVSSB7XG5cbiAgICBASW5wdXQoKSBvcmllbnRhdGlvbjogc3RyaW5nID0gJ3RvcCc7XG4gICAgXG4gICAgQElucHV0KCkgc3R5bGU6IGFueTtcbiAgICBcbiAgICBASW5wdXQoKSBzdHlsZUNsYXNzOiBzdHJpbmc7XG4gICAgXG4gICAgQElucHV0KCkgY29udHJvbENsb3NlOiBib29sZWFuO1xuXG4gICAgQFZpZXdDaGlsZCgnbmF2YmFyJykgbmF2YmFyOiBFbGVtZW50UmVmO1xuXG4gICAgQFZpZXdDaGlsZCgnaW5rYmFyJykgaW5rYmFyOiBFbGVtZW50UmVmO1xuICAgIFxuICAgIEBDb250ZW50Q2hpbGRyZW4oVGFiUGFuZWwpIHRhYlBhbmVsczogUXVlcnlMaXN0PFRhYlBhbmVsPjtcblxuICAgIEBPdXRwdXQoKSBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgb25DbG9zZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgYWN0aXZlSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIFxuICAgIGluaXRpYWxpemVkOiBib29sZWFuO1xuICAgIFxuICAgIHRhYnM6IFRhYlBhbmVsW107XG4gICAgXG4gICAgX2FjdGl2ZUluZGV4OiBudW1iZXI7XG4gICAgXG4gICAgcHJldmVudEFjdGl2ZUluZGV4UHJvcGFnYXRpb246IGJvb2xlYW47XG5cbiAgICB0YWJDaGFuZ2VkOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmLCBwdWJsaWMgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuICAgICAgXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICB0aGlzLmluaXRUYWJzKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnRhYlBhbmVscy5jaGFuZ2VzLnN1YnNjcmliZShfID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFRhYnMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgICAgICBpZiAodGhpcy50YWJDaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUlua0JhcigpO1xuICAgICAgICAgICAgdGhpcy50YWJDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaW5pdFRhYnMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGFicyA9IHRoaXMudGFiUGFuZWxzLnRvQXJyYXkoKTtcbiAgICAgICAgbGV0IHNlbGVjdGVkVGFiOiBUYWJQYW5lbCA9IHRoaXMuZmluZFNlbGVjdGVkVGFiKCk7XG4gICAgICAgIGlmICghc2VsZWN0ZWRUYWIgJiYgdGhpcy50YWJzLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlSW5kZXggIT0gbnVsbCAmJiB0aGlzLnRhYnMubGVuZ3RoID4gdGhpcy5hY3RpdmVJbmRleClcbiAgICAgICAgICAgICAgICB0aGlzLnRhYnNbdGhpcy5hY3RpdmVJbmRleF0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMudGFic1swXS5zZWxlY3RlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMudGFiQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgICBcbiAgICBvcGVuKGV2ZW50OiBFdmVudCwgdGFiOiBUYWJQYW5lbCkge1xuICAgICAgICBpZiAodGFiLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIXRhYi5zZWxlY3RlZCkge1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkVGFiOiBUYWJQYW5lbCA9IHRoaXMuZmluZFNlbGVjdGVkVGFiKCk7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRUYWIpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRhYi5zZWxlY3RlZCA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMudGFiQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB0YWIuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkVGFiSW5kZXggPSB0aGlzLmZpbmRUYWJJbmRleCh0YWIpO1xuICAgICAgICAgICAgdGhpcy5wcmV2ZW50QWN0aXZlSW5kZXhQcm9wYWdhdGlvbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4Q2hhbmdlLmVtaXQoc2VsZWN0ZWRUYWJJbmRleCk7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoe29yaWdpbmFsRXZlbnQ6IGV2ZW50LCBpbmRleDogc2VsZWN0ZWRUYWJJbmRleH0pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY2xvc2UoZXZlbnQ6IEV2ZW50LCB0YWI6IFRhYlBhbmVsKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRyb2xDbG9zZSkge1xuICAgICAgICAgICAgdGhpcy5vbkNsb3NlLmVtaXQoe1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLmZpbmRUYWJJbmRleCh0YWIpLFxuICAgICAgICAgICAgICAgIGNsb3NlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VUYWIodGFiKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VUYWIodGFiKTtcbiAgICAgICAgICAgIHRoaXMub25DbG9zZS5lbWl0KHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5maW5kVGFiSW5kZXgodGFiKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICBcbiAgICBjbG9zZVRhYih0YWI6IFRhYlBhbmVsKSB7XG4gICAgICAgIGlmICh0YWIuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFiLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnRhYkNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGFiLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy50YWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRhYlBhbmVsID0gdGhpcy50YWJzW2ldO1xuICAgICAgICAgICAgICAgIGlmICghdGFiUGFuZWwuY2xvc2VkJiYhdGFiLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhYlBhbmVsLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0YWIuY2xvc2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgZmluZFNlbGVjdGVkVGFiKCkge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy50YWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50YWJzW2ldLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFic1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgZmluZFRhYkluZGV4KHRhYjogVGFiUGFuZWwpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gLTE7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnRhYnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhYnNbaV0gPT0gdGFiKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gICAgXG4gICAgZ2V0QmxvY2thYmxlRWxlbWVudCgpOiBIVE1MRWxlbWVudMKge1xuICAgICAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdO1xuICAgIH1cbiAgICBcbiAgICBASW5wdXQoKSBnZXQgYWN0aXZlSW5kZXgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2ZUluZGV4O1xuICAgIH1cblxuICAgIHNldCBhY3RpdmVJbmRleCh2YWw6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2FjdGl2ZUluZGV4ID0gdmFsO1xuICAgICAgICBpZiAodGhpcy5wcmV2ZW50QWN0aXZlSW5kZXhQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5wcmV2ZW50QWN0aXZlSW5kZXhQcm9wYWdhdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudGFicyAmJiB0aGlzLnRhYnMubGVuZ3RoICYmIHRoaXMuX2FjdGl2ZUluZGV4ICE9IG51bGwgJiYgdGhpcy50YWJzLmxlbmd0aCA+IHRoaXMuX2FjdGl2ZUluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLmZpbmRTZWxlY3RlZFRhYigpLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRhYnNbdGhpcy5fYWN0aXZlSW5kZXhdLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUlua0JhcigpIHtcbiAgICAgICAgbGV0IHRhYkhlYWRlciA9IERvbUhhbmRsZXIuZmluZFNpbmdsZSh0aGlzLm5hdmJhci5uYXRpdmVFbGVtZW50LCAnbGkucC1oaWdobGlnaHQnKTtcbiAgICAgICAgdGhpcy5pbmtiYXIubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9IERvbUhhbmRsZXIuZ2V0V2lkdGgodGFiSGVhZGVyKSArICdweCc7XG4gICAgICAgIHRoaXMuaW5rYmFyLm5hdGl2ZUVsZW1lbnQuc3R5bGUubGVmdCA9ICBEb21IYW5kbGVyLmdldE9mZnNldCh0YWJIZWFkZXIpLmxlZnQgLSBEb21IYW5kbGVyLmdldE9mZnNldCh0aGlzLm5hdmJhci5uYXRpdmVFbGVtZW50KS5sZWZ0ICsgJ3B4JztcbiAgICB9XG59XG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLFNoYXJlZE1vZHVsZSxUb29sdGlwTW9kdWxlLFJpcHBsZU1vZHVsZV0sXG4gICAgZXhwb3J0czogW1RhYlZpZXcsVGFiUGFuZWwsU2hhcmVkTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtUYWJWaWV3LFRhYlBhbmVsXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJWaWV3TW9kdWxlIHsgfVxuIl19