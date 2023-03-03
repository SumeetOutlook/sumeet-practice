/**
 * @fileoverview added by tsickle
 * Generated from: src/material/progress-spinner/progress-spinner.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Inject, InjectionToken, Input, Optional, ViewEncapsulation, } from '@angular/core';
import { mixinColor } from '@angular/material/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
/**
 * Base reference size of the spinner.
 * \@docs-private
 * @type {?}
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/platform';
import * as ɵngcc2 from '@angular/common';

function MatProgressSpinner__svg_circle_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelement(0, "circle", 3);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("animation-name", "mat-progress-spinner-stroke-rotate-" + ctx_r0.diameter)("stroke-dashoffset", ctx_r0._strokeDashOffset, "px")("stroke-dasharray", ctx_r0._strokeCircumference, "px")("stroke-width", ctx_r0._circleStrokeWidth, "%");
    ɵngcc0.ɵɵattribute("r", ctx_r0._circleRadius);
} }
function MatProgressSpinner__svg_circle_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelement(0, "circle", 3);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("stroke-dashoffset", ctx_r1._strokeDashOffset, "px")("stroke-dasharray", ctx_r1._strokeCircumference, "px")("stroke-width", ctx_r1._circleStrokeWidth, "%");
    ɵngcc0.ɵɵattribute("r", ctx_r1._circleRadius);
} }
function MatSpinner__svg_circle_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelement(0, "circle", 3);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("animation-name", "mat-progress-spinner-stroke-rotate-" + ctx_r0.diameter)("stroke-dashoffset", ctx_r0._strokeDashOffset, "px")("stroke-dasharray", ctx_r0._strokeCircumference, "px")("stroke-width", ctx_r0._circleStrokeWidth, "%");
    ɵngcc0.ɵɵattribute("r", ctx_r0._circleRadius);
} }
function MatSpinner__svg_circle_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelement(0, "circle", 3);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("stroke-dashoffset", ctx_r1._strokeDashOffset, "px")("stroke-dasharray", ctx_r1._strokeCircumference, "px")("stroke-width", ctx_r1._circleStrokeWidth, "%");
    ɵngcc0.ɵɵattribute("r", ctx_r1._circleRadius);
} }
const BASE_SIZE = 100;
/**
 * Base reference stroke width of the spinner.
 * \@docs-private
 * @type {?}
 */
const BASE_STROKE_WIDTH = 10;
// Boilerplate for applying mixins to MatProgressSpinner.
/**
 * \@docs-private
 */
class MatProgressSpinnerBase {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
if (false) {
    /** @type {?} */
    MatProgressSpinnerBase.prototype._elementRef;
}
/** @type {?} */
const _MatProgressSpinnerMixinBase = mixinColor(MatProgressSpinnerBase, 'primary');
/**
 * Default `mat-progress-spinner` options that can be overridden.
 * @record
 */
export function MatProgressSpinnerDefaultOptions() { }
if (false) {
    /**
     * Diameter of the spinner.
     * @type {?|undefined}
     */
    MatProgressSpinnerDefaultOptions.prototype.diameter;
    /**
     * Width of the spinner's stroke.
     * @type {?|undefined}
     */
    MatProgressSpinnerDefaultOptions.prototype.strokeWidth;
    /**
     * Whether the animations should be force to be enabled, ignoring if the current environment is
     * using NoopAnimationsModule.
     * @type {?|undefined}
     */
    MatProgressSpinnerDefaultOptions.prototype._forceAnimations;
}
/**
 * Injection token to be used to override the default options for `mat-progress-spinner`.
 * @type {?}
 */
export const MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS = new InjectionToken('mat-progress-spinner-default-options', {
    providedIn: 'root',
    factory: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY,
});
/**
 * \@docs-private
 * @return {?}
 */
export function MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY() {
    return { diameter: BASE_SIZE };
}
// .0001 percentage difference is necessary in order to avoid unwanted animation frames
// for example because the animation duration is 4 seconds, .1% accounts to 4ms
// which are enough to see the flicker described in
// https://github.com/angular/components/issues/8984
/** @type {?} */
const INDETERMINATE_ANIMATION_TEMPLATE = `
 @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {
    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }
    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }
    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }
    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }

    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }
    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }
    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }
    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }

    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }
    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }
    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }
    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }

    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }
    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }
    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }
    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }
  }
`;
/**
 * `<mat-progress-spinner>` component.
 */
export class MatProgressSpinner extends _MatProgressSpinnerMixinBase {
    /**
     * @param {?} _elementRef
     * @param {?} platform
     * @param {?} _document
     * @param {?} animationMode
     * @param {?=} defaults
     */
    constructor(_elementRef, platform, _document, animationMode, defaults) {
        super(_elementRef);
        this._elementRef = _elementRef;
        this._document = _document;
        this._diameter = BASE_SIZE;
        this._value = 0;
        this._fallbackAnimation = false;
        /**
         * Mode of the progress circle
         */
        this.mode = 'determinate';
        /** @type {?} */
        const trackedDiameters = MatProgressSpinner._diameters;
        // The base size is already inserted via the component's structural styles. We still
        // need to track it so we don't end up adding the same styles again.
        if (!trackedDiameters.has(_document.head)) {
            trackedDiameters.set(_document.head, new Set([BASE_SIZE]));
        }
        this._fallbackAnimation = platform.EDGE || platform.TRIDENT;
        this._noopAnimations = animationMode === 'NoopAnimations' &&
            (!!defaults && !defaults._forceAnimations);
        if (defaults) {
            if (defaults.diameter) {
                this.diameter = defaults.diameter;
            }
            if (defaults.strokeWidth) {
                this.strokeWidth = defaults.strokeWidth;
            }
        }
    }
    /**
     * The diameter of the progress spinner (will set width and height of svg).
     * @return {?}
     */
    get diameter() { return this._diameter; }
    /**
     * @param {?} size
     * @return {?}
     */
    set diameter(size) {
        this._diameter = coerceNumberProperty(size);
        // If this is set before `ngOnInit`, the style root may not have been resolved yet.
        if (!this._fallbackAnimation && this._styleRoot) {
            this._attachStyleNode();
        }
    }
    /**
     * Stroke width of the progress spinner.
     * @return {?}
     */
    get strokeWidth() {
        return this._strokeWidth || this.diameter / 10;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set strokeWidth(value) {
        this._strokeWidth = coerceNumberProperty(value);
    }
    /**
     * Value of the progress circle.
     * @return {?}
     */
    get value() {
        return this.mode === 'determinate' ? this._value : 0;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set value(newValue) {
        this._value = Math.max(0, Math.min(100, coerceNumberProperty(newValue)));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const element = this._elementRef.nativeElement;
        // Note that we need to look up the root node in ngOnInit, rather than the constructor, because
        // Angular seems to create the element outside the shadow root and then moves it inside, if the
        // node is inside an `ngIf` and a ShadowDom-encapsulated component.
        this._styleRoot = _getShadowRoot(element, this._document) || this._document.head;
        this._attachStyleNode();
        // On IE and Edge, we can't animate the `stroke-dashoffset`
        // reliably so we fall back to a non-spec animation.
        /** @type {?} */
        const animationClass = `mat-progress-spinner-indeterminate${this._fallbackAnimation ? '-fallback' : ''}-animation`;
        element.classList.add(animationClass);
    }
    /**
     * The radius of the spinner, adjusted for stroke width.
     * @return {?}
     */
    get _circleRadius() {
        return (this.diameter - BASE_STROKE_WIDTH) / 2;
    }
    /**
     * The view box of the spinner's svg element.
     * @return {?}
     */
    get _viewBox() {
        /** @type {?} */
        const viewBox = this._circleRadius * 2 + this.strokeWidth;
        return `0 0 ${viewBox} ${viewBox}`;
    }
    /**
     * The stroke circumference of the svg circle.
     * @return {?}
     */
    get _strokeCircumference() {
        return 2 * Math.PI * this._circleRadius;
    }
    /**
     * The dash offset of the svg circle.
     * @return {?}
     */
    get _strokeDashOffset() {
        if (this.mode === 'determinate') {
            return this._strokeCircumference * (100 - this._value) / 100;
        }
        // In fallback mode set the circle to 80% and rotate it with CSS.
        if (this._fallbackAnimation && this.mode === 'indeterminate') {
            return this._strokeCircumference * 0.2;
        }
        return null;
    }
    /**
     * Stroke width of the circle in percent.
     * @return {?}
     */
    get _circleStrokeWidth() {
        return this.strokeWidth / this.diameter * 100;
    }
    /**
     * Dynamically generates a style tag containing the correct animation for this diameter.
     * @private
     * @return {?}
     */
    _attachStyleNode() {
        /** @type {?} */
        const styleRoot = this._styleRoot;
        /** @type {?} */
        const currentDiameter = this._diameter;
        /** @type {?} */
        const diameters = MatProgressSpinner._diameters;
        /** @type {?} */
        let diametersForElement = diameters.get(styleRoot);
        if (!diametersForElement || !diametersForElement.has(currentDiameter)) {
            /** @type {?} */
            const styleTag = this._document.createElement('style');
            styleTag.setAttribute('mat-spinner-animation', currentDiameter + '');
            styleTag.textContent = this._getAnimationText();
            styleRoot.appendChild(styleTag);
            if (!diametersForElement) {
                diametersForElement = new Set();
                diameters.set(styleRoot, diametersForElement);
            }
            diametersForElement.add(currentDiameter);
        }
    }
    /**
     * Generates animation styles adjusted for the spinner's diameter.
     * @private
     * @return {?}
     */
    _getAnimationText() {
        return INDETERMINATE_ANIMATION_TEMPLATE
            // Animation should begin at 5% and end at 80%
            .replace(/START_VALUE/g, `${0.95 * this._strokeCircumference}`)
            .replace(/END_VALUE/g, `${0.2 * this._strokeCircumference}`)
            .replace(/DIAMETER/g, `${this.diameter}`);
    }
}
MatProgressSpinner.ɵfac = function MatProgressSpinner_Factory(t) { return new (t || MatProgressSpinner)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Platform), ɵngcc0.ɵɵdirectiveInject(DOCUMENT, 8), ɵngcc0.ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8), ɵngcc0.ɵɵdirectiveInject(MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS)); };
MatProgressSpinner.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatProgressSpinner, selectors: [["mat-progress-spinner"]], hostAttrs: ["role", "progressbar", 1, "mat-progress-spinner"], hostVars: 10, hostBindings: function MatProgressSpinner_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("aria-valuemin", ctx.mode === "determinate" ? 0 : null)("aria-valuemax", ctx.mode === "determinate" ? 100 : null)("aria-valuenow", ctx.mode === "determinate" ? ctx.value : null)("mode", ctx.mode);
        ɵngcc0.ɵɵstyleProp("width", ctx.diameter, "px")("height", ctx.diameter, "px");
        ɵngcc0.ɵɵclassProp("_mat-animation-noopable", ctx._noopAnimations);
    } }, inputs: { color: "color", mode: "mode", diameter: "diameter", strokeWidth: "strokeWidth", value: "value" }, exportAs: ["matProgressSpinner"], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 3, vars: 8, consts: [["preserveAspectRatio", "xMidYMid meet", "focusable", "false", 3, "ngSwitch"], ["cx", "50%", "cy", "50%", 3, "animation-name", "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%", 3, "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%"]], template: function MatProgressSpinner_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "svg", 0);
        ɵngcc0.ɵɵtemplate(1, MatProgressSpinner__svg_circle_1_Template, 1, 9, "circle", 1);
        ɵngcc0.ɵɵtemplate(2, MatProgressSpinner__svg_circle_2_Template, 1, 7, "circle", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("width", ctx.diameter, "px")("height", ctx.diameter, "px");
        ɵngcc0.ɵɵproperty("ngSwitch", ctx.mode === "indeterminate");
        ɵngcc0.ɵɵattribute("viewBox", ctx._viewBox);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", true);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", false);
    } }, directives: [ɵngcc2.NgSwitch, ɵngcc2.NgSwitchCase], styles: [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"], encapsulation: 2, changeDetection: 0 });
/**
 * Tracks diameters of existing instances to de-dupe generated styles (default d = 100).
 * We need to keep track of which elements the diameters were attached to, because for
 * elements in the Shadow DOM the style tags are attached to the shadow root, rather
 * than the document head.
 */
MatProgressSpinner._diameters = new WeakMap();
/** @nocollapse */
MatProgressSpinner.ctorParameters = () => [
    { type: ElementRef },
    { type: Platform },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS,] }] }
];
MatProgressSpinner.propDecorators = {
    diameter: [{ type: Input }],
    strokeWidth: [{ type: Input }],
    mode: [{ type: Input }],
    value: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatProgressSpinner, [{
        type: Component,
        args: [{
                selector: 'mat-progress-spinner',
                exportAs: 'matProgressSpinner',
                host: {
                    'role': 'progressbar',
                    'class': 'mat-progress-spinner',
                    '[class._mat-animation-noopable]': `_noopAnimations`,
                    '[style.width.px]': 'diameter',
                    '[style.height.px]': 'diameter',
                    '[attr.aria-valuemin]': 'mode === "determinate" ? 0 : null',
                    '[attr.aria-valuemax]': 'mode === "determinate" ? 100 : null',
                    '[attr.aria-valuenow]': 'mode === "determinate" ? value : null',
                    '[attr.mode]': 'mode'
                },
                inputs: ['color'],
                template: "<!--\n  preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's\n  center. The center of the circle will remain at the center of the mat-progress-spinner\n  element containing the SVG. `focusable=\"false\"` prevents IE from allowing the user to\n  tab into the SVG element.\n-->\n\n<svg\n  [style.width.px]=\"diameter\"\n  [style.height.px]=\"diameter\"\n  [attr.viewBox]=\"_viewBox\"\n  preserveAspectRatio=\"xMidYMid meet\"\n  focusable=\"false\"\n  [ngSwitch]=\"mode === 'indeterminate'\">\n\n  <!--\n    Technically we can reuse the same `circle` element, however Safari has an issue that breaks\n    the SVG rendering in determinate mode, after switching between indeterminate and determinate.\n    Using a different element avoids the issue. An alternative to this is adding `display: none`\n    for a split second and then removing it when switching between modes, but it's hard to know\n    for how long to hide the element and it can cause the UI to blink.\n  -->\n  <circle\n    *ngSwitchCase=\"true\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_circleRadius\"\n    [style.animation-name]=\"'mat-progress-spinner-stroke-rotate-' + diameter\"\n    [style.stroke-dashoffset.px]=\"_strokeDashOffset\"\n    [style.stroke-dasharray.px]=\"_strokeCircumference\"\n    [style.stroke-width.%]=\"_circleStrokeWidth\"></circle>\n\n  <circle\n    *ngSwitchCase=\"false\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_circleRadius\"\n    [style.stroke-dashoffset.px]=\"_strokeDashOffset\"\n    [style.stroke-dasharray.px]=\"_strokeCircumference\"\n    [style.stroke-width.%]=\"_circleStrokeWidth\"></circle>\n</svg>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.Platform }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: String, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ANIMATION_MODULE_TYPE]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
            }] }]; }, { mode: [{
            type: Input
        }], diameter: [{
            type: Input
        }], strokeWidth: [{
            type: Input
        }], value: [{
            type: Input
        }] }); })();
if (false) {
    /**
     * Tracks diameters of existing instances to de-dupe generated styles (default d = 100).
     * We need to keep track of which elements the diameters were attached to, because for
     * elements in the Shadow DOM the style tags are attached to the shadow root, rather
     * than the document head.
     * @type {?}
     * @private
     */
    MatProgressSpinner._diameters;
    /** @type {?} */
    MatProgressSpinner.ngAcceptInputType_diameter;
    /** @type {?} */
    MatProgressSpinner.ngAcceptInputType_strokeWidth;
    /** @type {?} */
    MatProgressSpinner.ngAcceptInputType_value;
    /**
     * @type {?}
     * @private
     */
    MatProgressSpinner.prototype._diameter;
    /**
     * @type {?}
     * @private
     */
    MatProgressSpinner.prototype._value;
    /**
     * @type {?}
     * @private
     */
    MatProgressSpinner.prototype._strokeWidth;
    /**
     * @type {?}
     * @private
     */
    MatProgressSpinner.prototype._fallbackAnimation;
    /**
     * Element to which we should add the generated style tags for the indeterminate animation.
     * For most elements this is the document, but for the ones in the Shadow DOM we need to
     * use the shadow root.
     * @type {?}
     * @private
     */
    MatProgressSpinner.prototype._styleRoot;
    /**
     * Whether the _mat-animation-noopable class should be applied, disabling animations.
     * @type {?}
     */
    MatProgressSpinner.prototype._noopAnimations;
    /**
     * Mode of the progress circle
     * @type {?}
     */
    MatProgressSpinner.prototype.mode;
    /** @type {?} */
    MatProgressSpinner.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    MatProgressSpinner.prototype._document;
}
/**
 * `<mat-spinner>` component.
 *
 * This is a component definition to be used as a convenience reference to create an
 * indeterminate `<mat-progress-spinner>` instance.
 */
export class MatSpinner extends MatProgressSpinner {
    /**
     * @param {?} elementRef
     * @param {?} platform
     * @param {?} document
     * @param {?} animationMode
     * @param {?=} defaults
     */
    constructor(elementRef, platform, document, animationMode, defaults) {
        super(elementRef, platform, document, animationMode, defaults);
        this.mode = 'indeterminate';
    }
}
MatSpinner.ɵfac = function MatSpinner_Factory(t) { return new (t || MatSpinner)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Platform), ɵngcc0.ɵɵdirectiveInject(DOCUMENT, 8), ɵngcc0.ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8), ɵngcc0.ɵɵdirectiveInject(MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS)); };
MatSpinner.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatSpinner, selectors: [["mat-spinner"]], hostAttrs: ["role", "progressbar", "mode", "indeterminate", 1, "mat-spinner", "mat-progress-spinner"], hostVars: 6, hostBindings: function MatSpinner_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("width", ctx.diameter, "px")("height", ctx.diameter, "px");
        ɵngcc0.ɵɵclassProp("_mat-animation-noopable", ctx._noopAnimations);
    } }, inputs: { color: "color" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 3, vars: 8, consts: [["preserveAspectRatio", "xMidYMid meet", "focusable", "false", 3, "ngSwitch"], ["cx", "50%", "cy", "50%", 3, "animation-name", "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%", 3, "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%"]], template: function MatSpinner_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "svg", 0);
        ɵngcc0.ɵɵtemplate(1, MatSpinner__svg_circle_1_Template, 1, 9, "circle", 1);
        ɵngcc0.ɵɵtemplate(2, MatSpinner__svg_circle_2_Template, 1, 7, "circle", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("width", ctx.diameter, "px")("height", ctx.diameter, "px");
        ɵngcc0.ɵɵproperty("ngSwitch", ctx.mode === "indeterminate");
        ɵngcc0.ɵɵattribute("viewBox", ctx._viewBox);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", true);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", false);
    } }, directives: [ɵngcc2.NgSwitch, ɵngcc2.NgSwitchCase], styles: [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
MatSpinner.ctorParameters = () => [
    { type: ElementRef },
    { type: Platform },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS,] }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatSpinner, [{
        type: Component,
        args: [{
                selector: 'mat-spinner',
                host: {
                    'role': 'progressbar',
                    'mode': 'indeterminate',
                    'class': 'mat-spinner mat-progress-spinner',
                    '[class._mat-animation-noopable]': `_noopAnimations`,
                    '[style.width.px]': 'diameter',
                    '[style.height.px]': 'diameter'
                },
                inputs: ['color'],
                template: "<!--\n  preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's\n  center. The center of the circle will remain at the center of the mat-progress-spinner\n  element containing the SVG. `focusable=\"false\"` prevents IE from allowing the user to\n  tab into the SVG element.\n-->\n\n<svg\n  [style.width.px]=\"diameter\"\n  [style.height.px]=\"diameter\"\n  [attr.viewBox]=\"_viewBox\"\n  preserveAspectRatio=\"xMidYMid meet\"\n  focusable=\"false\"\n  [ngSwitch]=\"mode === 'indeterminate'\">\n\n  <!--\n    Technically we can reuse the same `circle` element, however Safari has an issue that breaks\n    the SVG rendering in determinate mode, after switching between indeterminate and determinate.\n    Using a different element avoids the issue. An alternative to this is adding `display: none`\n    for a split second and then removing it when switching between modes, but it's hard to know\n    for how long to hide the element and it can cause the UI to blink.\n  -->\n  <circle\n    *ngSwitchCase=\"true\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_circleRadius\"\n    [style.animation-name]=\"'mat-progress-spinner-stroke-rotate-' + diameter\"\n    [style.stroke-dashoffset.px]=\"_strokeDashOffset\"\n    [style.stroke-dasharray.px]=\"_strokeCircumference\"\n    [style.stroke-width.%]=\"_circleStrokeWidth\"></circle>\n\n  <circle\n    *ngSwitchCase=\"false\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_circleRadius\"\n    [style.stroke-dashoffset.px]=\"_strokeDashOffset\"\n    [style.stroke-dasharray.px]=\"_strokeCircumference\"\n    [style.stroke-width.%]=\"_circleStrokeWidth\"></circle>\n</svg>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.Platform }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: String, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ANIMATION_MODULE_TYPE]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
            }] }]; }, null); })();
/**
 * Gets the shadow root of an element, if supported and the element is inside the Shadow DOM.
 * @param {?} element
 * @param {?} _document
 * @return {?}
 */
export function _getShadowRoot(element, _document) {
    // TODO(crisbeto): see whether we should move this into the CDK
    // feature detection utilities once #15616 gets merged in.
    if (typeof window !== 'undefined') {
        /** @type {?} */
        const head = _document.head;
        // Check whether the browser supports Shadow DOM.
        if (head && (((/** @type {?} */ (head))).createShadowRoot || head.attachShadow)) {
            /** @type {?} */
            const rootNode = element.getRootNode ? element.getRootNode() : null;
            // We need to take the `ShadowRoot` off of `window`, because the built-in types are
            // incorrect. See https://github.com/Microsoft/TypeScript/issues/27929.
            if (rootNode instanceof ((/** @type {?} */ (window))).ShadowRoot) {
                return rootNode;
            }
        }
    }
    return null;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Mtc3Bpbm5lci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL3Byb2dyZXNzLXNwaW5uZXIvcHJvZ3Jlc3Mtc3Bpbm5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsb0JBQW9CLEVBQWMsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDL0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sY0FBYyxFQUNkLEtBQUssRUFDTCxRQUFRLEVBQ1IsaUJBQWlCLEdBRWxCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBeUIsVUFBVSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDMUUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDM0U7QUFFRTtBQUF1QztBQUMzQjtBQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUksTUFNekIsU0FBUyxHQUFHLEdBQUc7QUFDckI7QUFDRztBQUMyQztBQUU5QztBQUNTO0FBQUksTUFBUCxpQkFBaUIsR0FBRyxFQUFFO0FBQzVCO0FBQ3lEO0FBQ3REO0FBQ0g7QUFBQSxNQUFNLHNCQUFzQjtBQUM1QjtBQUFRO0FBQThCO0FBQVEsSUFBNUMsWUFBbUIsV0FBdUI7QUFBSSxRQUEzQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtBQUFDLElBQUUsQ0FBQztBQUNoRCxDQUFDO0FBQ0Q7QUFBYTtBQUFxQixJQUZwQiw2Q0FBOEI7QUFBQztBQUFFO0FBRWxDLE1BQVAsNEJBQTRCLEdBQzlCLFVBQVUsQ0FBQyxzQkFBc0IsRUFBRSxTQUFTLENBQUM7QUFDakQ7QUFDRztBQUFrRTtBQUMzRDtBQUFW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TSxTQUFDLG9DQUFvQztBQUNwRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBQUU7QUFBQztBQUFJO0FBQzZCO0FBQXNCO0FBQzVDO0FBQ2xCO0FBS0YsTUFBTSxVQUFVLGNBQWMsQ0FBQyxPQUFvQixFQUFFLFNBQW1CO0FBQUksSUFDMUUsK0RBQStEO0FBQ2pFLElBQUUsMERBQTBEO0FBQzVELElBQUUsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7QUFDckM7QUFBeUIsY0FBZixJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUk7QUFDL0IsUUFDSSxpREFBaUQ7QUFDckQsUUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsbUJBQUEsSUFBSSxFQUFPLENBQUMsQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUU7QUFDdkU7QUFBNkIsa0JBQWpCLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUk7QUFDekUsWUFDTSxtRkFBbUY7QUFDekYsWUFBTSx1RUFBdUU7QUFDN0UsWUFBTSxJQUFJLFFBQVEsWUFBWSxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUMsVUFBVSxFQUFFO0FBQzFELGdCQUFRLE9BQU8sUUFBUSxDQUFDO0FBQ3hCLGFBQU87QUFDUCxTQUFLO0FBQ0wsS0FBRztBQUNILElBQ0UsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtjb2VyY2VOdW1iZXJQcm9wZXJ0eSwgTnVtYmVySW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge1BsYXRmb3JtfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIElucHV0LFxuICBPcHRpb25hbCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NhbkNvbG9yLCBDYW5Db2xvckN0b3IsIG1peGluQ29sb3J9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtBTklNQVRJT05fTU9EVUxFX1RZUEV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5cblxuLyoqIFBvc3NpYmxlIG1vZGUgZm9yIGEgcHJvZ3Jlc3Mgc3Bpbm5lci4gKi9cbmV4cG9ydCB0eXBlIFByb2dyZXNzU3Bpbm5lck1vZGUgPSAnZGV0ZXJtaW5hdGUnIHwgJ2luZGV0ZXJtaW5hdGUnO1xuXG4vKipcbiAqIEJhc2UgcmVmZXJlbmNlIHNpemUgb2YgdGhlIHNwaW5uZXIuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmNvbnN0IEJBU0VfU0laRSA9IDEwMDtcblxuLyoqXG4gKiBCYXNlIHJlZmVyZW5jZSBzdHJva2Ugd2lkdGggb2YgdGhlIHNwaW5uZXIuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmNvbnN0IEJBU0VfU1RST0tFX1dJRFRIID0gMTA7XG5cbi8vIEJvaWxlcnBsYXRlIGZvciBhcHBseWluZyBtaXhpbnMgdG8gTWF0UHJvZ3Jlc3NTcGlubmVyLlxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmNsYXNzIE1hdFByb2dyZXNzU3Bpbm5lckJhc2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG59XG5jb25zdCBfTWF0UHJvZ3Jlc3NTcGlubmVyTWl4aW5CYXNlOiBDYW5Db2xvckN0b3IgJiB0eXBlb2YgTWF0UHJvZ3Jlc3NTcGlubmVyQmFzZSA9XG4gICAgbWl4aW5Db2xvcihNYXRQcm9ncmVzc1NwaW5uZXJCYXNlLCAncHJpbWFyeScpO1xuXG4vKiogRGVmYXVsdCBgbWF0LXByb2dyZXNzLXNwaW5uZXJgIG9wdGlvbnMgdGhhdCBjYW4gYmUgb3ZlcnJpZGRlbi4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWF0UHJvZ3Jlc3NTcGlubmVyRGVmYXVsdE9wdGlvbnMge1xuICAvKiogRGlhbWV0ZXIgb2YgdGhlIHNwaW5uZXIuICovXG4gIGRpYW1ldGVyPzogbnVtYmVyO1xuICAvKiogV2lkdGggb2YgdGhlIHNwaW5uZXIncyBzdHJva2UuICovXG4gIHN0cm9rZVdpZHRoPzogbnVtYmVyO1xuICAvKipcbiAgICogV2hldGhlciB0aGUgYW5pbWF0aW9ucyBzaG91bGQgYmUgZm9yY2UgdG8gYmUgZW5hYmxlZCwgaWdub3JpbmcgaWYgdGhlIGN1cnJlbnQgZW52aXJvbm1lbnQgaXNcbiAgICogdXNpbmcgTm9vcEFuaW1hdGlvbnNNb2R1bGUuXG4gICAqL1xuICBfZm9yY2VBbmltYXRpb25zPzogYm9vbGVhbjtcbn1cblxuLyoqIEluamVjdGlvbiB0b2tlbiB0byBiZSB1c2VkIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IG9wdGlvbnMgZm9yIGBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lcmAuICovXG5leHBvcnQgY29uc3QgTUFUX1BST0dSRVNTX1NQSU5ORVJfREVGQVVMVF9PUFRJT05TID1cbiAgICBuZXcgSW5qZWN0aW9uVG9rZW48TWF0UHJvZ3Jlc3NTcGlubmVyRGVmYXVsdE9wdGlvbnM+KCdtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci1kZWZhdWx0LW9wdGlvbnMnLCB7XG4gICAgICBwcm92aWRlZEluOiAncm9vdCcsXG4gICAgICBmYWN0b3J5OiBNQVRfUFJPR1JFU1NfU1BJTk5FUl9ERUZBVUxUX09QVElPTlNfRkFDVE9SWSxcbiAgICB9KTtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBmdW5jdGlvbiBNQVRfUFJPR1JFU1NfU1BJTk5FUl9ERUZBVUxUX09QVElPTlNfRkFDVE9SWSgpOiBNYXRQcm9ncmVzc1NwaW5uZXJEZWZhdWx0T3B0aW9ucyB7XG4gIHJldHVybiB7ZGlhbWV0ZXI6IEJBU0VfU0laRX07XG59XG5cbi8vIC4wMDAxIHBlcmNlbnRhZ2UgZGlmZmVyZW5jZSBpcyBuZWNlc3NhcnkgaW4gb3JkZXIgdG8gYXZvaWQgdW53YW50ZWQgYW5pbWF0aW9uIGZyYW1lc1xuLy8gZm9yIGV4YW1wbGUgYmVjYXVzZSB0aGUgYW5pbWF0aW9uIGR1cmF0aW9uIGlzIDQgc2Vjb25kcywgLjElIGFjY291bnRzIHRvIDRtc1xuLy8gd2hpY2ggYXJlIGVub3VnaCB0byBzZWUgdGhlIGZsaWNrZXIgZGVzY3JpYmVkIGluXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9jb21wb25lbnRzL2lzc3Vlcy84OTg0XG5jb25zdCBJTkRFVEVSTUlOQVRFX0FOSU1BVElPTl9URU1QTEFURSA9IGBcbiBAa2V5ZnJhbWVzIG1hdC1wcm9ncmVzcy1zcGlubmVyLXN0cm9rZS1yb3RhdGUtRElBTUVURVIge1xuICAgIDAlICAgICAgeyBzdHJva2UtZGFzaG9mZnNldDogU1RBUlRfVkFMVUU7ICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTsgfVxuICAgIDEyLjUlICAgeyBzdHJva2UtZGFzaG9mZnNldDogRU5EX1ZBTFVFOyAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTsgfVxuICAgIDEyLjUwMDElICB7IHN0cm9rZS1kYXNob2Zmc2V0OiBFTkRfVkFMVUU7ICAgIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpIHJvdGF0ZSg3Mi41ZGVnKTsgfVxuICAgIDI1JSAgICAgeyBzdHJva2UtZGFzaG9mZnNldDogU1RBUlRfVkFMVUU7ICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKSByb3RhdGUoNzIuNWRlZyk7IH1cblxuICAgIDI1LjAwMDElICAgeyBzdHJva2UtZGFzaG9mZnNldDogU1RBUlRfVkFMVUU7ICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpOyB9XG4gICAgMzcuNSUgICB7IHN0cm9rZS1kYXNob2Zmc2V0OiBFTkRfVkFMVUU7ICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7IH1cbiAgICAzNy41MDAxJSAgeyBzdHJva2UtZGFzaG9mZnNldDogRU5EX1ZBTFVFOyAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKSByb3RhdGUoMTYxLjVkZWcpOyB9XG4gICAgNTAlICAgICB7IHN0cm9rZS1kYXNob2Zmc2V0OiBTVEFSVF9WQUxVRTsgIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpIHJvdGF0ZSgxNjEuNWRlZyk7IH1cblxuICAgIDUwLjAwMDElICB7IHN0cm9rZS1kYXNob2Zmc2V0OiBTVEFSVF9WQUxVRTsgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7IH1cbiAgICA2Mi41JSAgIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IEVORF9WQUxVRTsgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTsgfVxuICAgIDYyLjUwMDElICB7IHN0cm9rZS1kYXNob2Zmc2V0OiBFTkRfVkFMVUU7ICAgIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpIHJvdGF0ZSgyNTEuNWRlZyk7IH1cbiAgICA3NSUgICAgIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IFNUQVJUX1ZBTFVFOyAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZykgcm90YXRlKDI1MS41ZGVnKTsgfVxuXG4gICAgNzUuMDAwMSUgIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IFNUQVJUX1ZBTFVFOyAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOyB9XG4gICAgODcuNSUgICB7IHN0cm9rZS1kYXNob2Zmc2V0OiBFTkRfVkFMVUU7ICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTsgfVxuICAgIDg3LjUwMDElICB7IHN0cm9rZS1kYXNob2Zmc2V0OiBFTkRfVkFMVUU7ICAgIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpIHJvdGF0ZSgzNDEuNWRlZyk7IH1cbiAgICAxMDAlICAgIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IFNUQVJUX1ZBTFVFOyAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZykgcm90YXRlKDM0MS41ZGVnKTsgfVxuICB9XG5gO1xuXG4vKipcbiAqIGA8bWF0LXByb2dyZXNzLXNwaW5uZXI+YCBjb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1wcm9ncmVzcy1zcGlubmVyJyxcbiAgZXhwb3J0QXM6ICdtYXRQcm9ncmVzc1NwaW5uZXInLFxuICBob3N0OiB7XG4gICAgJ3JvbGUnOiAncHJvZ3Jlc3NiYXInLFxuICAgICdjbGFzcyc6ICdtYXQtcHJvZ3Jlc3Mtc3Bpbm5lcicsXG4gICAgJ1tjbGFzcy5fbWF0LWFuaW1hdGlvbi1ub29wYWJsZV0nOiBgX25vb3BBbmltYXRpb25zYCxcbiAgICAnW3N0eWxlLndpZHRoLnB4XSc6ICdkaWFtZXRlcicsXG4gICAgJ1tzdHlsZS5oZWlnaHQucHhdJzogJ2RpYW1ldGVyJyxcbiAgICAnW2F0dHIuYXJpYS12YWx1ZW1pbl0nOiAnbW9kZSA9PT0gXCJkZXRlcm1pbmF0ZVwiID8gMCA6IG51bGwnLFxuICAgICdbYXR0ci5hcmlhLXZhbHVlbWF4XSc6ICdtb2RlID09PSBcImRldGVybWluYXRlXCIgPyAxMDAgOiBudWxsJyxcbiAgICAnW2F0dHIuYXJpYS12YWx1ZW5vd10nOiAnbW9kZSA9PT0gXCJkZXRlcm1pbmF0ZVwiID8gdmFsdWUgOiBudWxsJyxcbiAgICAnW2F0dHIubW9kZV0nOiAnbW9kZScsXG4gIH0sXG4gIGlucHV0czogWydjb2xvciddLFxuICB0ZW1wbGF0ZVVybDogJ3Byb2dyZXNzLXNwaW5uZXIuaHRtbCcsXG4gIHN0eWxlVXJsczogWydwcm9ncmVzcy1zcGlubmVyLmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0UHJvZ3Jlc3NTcGlubmVyIGV4dGVuZHMgX01hdFByb2dyZXNzU3Bpbm5lck1peGluQmFzZSBpbXBsZW1lbnRzIE9uSW5pdCwgQ2FuQ29sb3Ige1xuICBwcml2YXRlIF9kaWFtZXRlciA9IEJBU0VfU0laRTtcbiAgcHJpdmF0ZSBfdmFsdWUgPSAwO1xuICBwcml2YXRlIF9zdHJva2VXaWR0aDogbnVtYmVyO1xuICBwcml2YXRlIF9mYWxsYmFja0FuaW1hdGlvbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBFbGVtZW50IHRvIHdoaWNoIHdlIHNob3VsZCBhZGQgdGhlIGdlbmVyYXRlZCBzdHlsZSB0YWdzIGZvciB0aGUgaW5kZXRlcm1pbmF0ZSBhbmltYXRpb24uXG4gICAqIEZvciBtb3N0IGVsZW1lbnRzIHRoaXMgaXMgdGhlIGRvY3VtZW50LCBidXQgZm9yIHRoZSBvbmVzIGluIHRoZSBTaGFkb3cgRE9NIHdlIG5lZWQgdG9cbiAgICogdXNlIHRoZSBzaGFkb3cgcm9vdC5cbiAgICovXG4gIHByaXZhdGUgX3N0eWxlUm9vdDogTm9kZTtcblxuICAvKipcbiAgICogVHJhY2tzIGRpYW1ldGVycyBvZiBleGlzdGluZyBpbnN0YW5jZXMgdG8gZGUtZHVwZSBnZW5lcmF0ZWQgc3R5bGVzIChkZWZhdWx0IGQgPSAxMDApLlxuICAgKiBXZSBuZWVkIHRvIGtlZXAgdHJhY2sgb2Ygd2hpY2ggZWxlbWVudHMgdGhlIGRpYW1ldGVycyB3ZXJlIGF0dGFjaGVkIHRvLCBiZWNhdXNlIGZvclxuICAgKiBlbGVtZW50cyBpbiB0aGUgU2hhZG93IERPTSB0aGUgc3R5bGUgdGFncyBhcmUgYXR0YWNoZWQgdG8gdGhlIHNoYWRvdyByb290LCByYXRoZXJcbiAgICogdGhhbiB0aGUgZG9jdW1lbnQgaGVhZC5cbiAgICovXG4gIHByaXZhdGUgc3RhdGljIF9kaWFtZXRlcnMgPSBuZXcgV2Vha01hcDxOb2RlLCBTZXQ8bnVtYmVyPj4oKTtcblxuICAvKiogV2hldGhlciB0aGUgX21hdC1hbmltYXRpb24tbm9vcGFibGUgY2xhc3Mgc2hvdWxkIGJlIGFwcGxpZWQsIGRpc2FibGluZyBhbmltYXRpb25zLiAgKi9cbiAgX25vb3BBbmltYXRpb25zOiBib29sZWFuO1xuXG4gIC8qKiBUaGUgZGlhbWV0ZXIgb2YgdGhlIHByb2dyZXNzIHNwaW5uZXIgKHdpbGwgc2V0IHdpZHRoIGFuZCBoZWlnaHQgb2Ygc3ZnKS4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGRpYW1ldGVyKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9kaWFtZXRlcjsgfVxuICBzZXQgZGlhbWV0ZXIoc2l6ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fZGlhbWV0ZXIgPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eShzaXplKTtcblxuICAgIC8vIElmIHRoaXMgaXMgc2V0IGJlZm9yZSBgbmdPbkluaXRgLCB0aGUgc3R5bGUgcm9vdCBtYXkgbm90IGhhdmUgYmVlbiByZXNvbHZlZCB5ZXQuXG4gICAgaWYgKCF0aGlzLl9mYWxsYmFja0FuaW1hdGlvbiAmJiB0aGlzLl9zdHlsZVJvb3QpIHtcbiAgICAgIHRoaXMuX2F0dGFjaFN0eWxlTm9kZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBTdHJva2Ugd2lkdGggb2YgdGhlIHByb2dyZXNzIHNwaW5uZXIuICovXG4gIEBJbnB1dCgpXG4gIGdldCBzdHJva2VXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zdHJva2VXaWR0aCB8fCB0aGlzLmRpYW1ldGVyIC8gMTA7XG4gIH1cbiAgc2V0IHN0cm9rZVdpZHRoKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zdHJva2VXaWR0aCA9IGNvZXJjZU51bWJlclByb3BlcnR5KHZhbHVlKTtcbiAgfVxuXG4gIC8qKiBNb2RlIG9mIHRoZSBwcm9ncmVzcyBjaXJjbGUgKi9cbiAgQElucHV0KCkgbW9kZTogUHJvZ3Jlc3NTcGlubmVyTW9kZSA9ICdkZXRlcm1pbmF0ZSc7XG5cbiAgLyoqIFZhbHVlIG9mIHRoZSBwcm9ncmVzcyBjaXJjbGUuICovXG4gIEBJbnB1dCgpXG4gIGdldCB2YWx1ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICdkZXRlcm1pbmF0ZScgPyB0aGlzLl92YWx1ZSA6IDA7XG4gIH1cbiAgc2V0IHZhbHVlKG5ld1ZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl92YWx1ZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEwMCwgY29lcmNlTnVtYmVyUHJvcGVydHkobmV3VmFsdWUpKSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgICAgICAgICAgICBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnksXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQU5JTUFUSU9OX01PRFVMRV9UWVBFKSBhbmltYXRpb25Nb2RlOiBzdHJpbmcsXG4gICAgICAgICAgICAgIEBJbmplY3QoTUFUX1BST0dSRVNTX1NQSU5ORVJfREVGQVVMVF9PUFRJT05TKVxuICAgICAgICAgICAgICAgICAgZGVmYXVsdHM/OiBNYXRQcm9ncmVzc1NwaW5uZXJEZWZhdWx0T3B0aW9ucykge1xuXG4gICAgc3VwZXIoX2VsZW1lbnRSZWYpO1xuXG4gICAgY29uc3QgdHJhY2tlZERpYW1ldGVycyA9IE1hdFByb2dyZXNzU3Bpbm5lci5fZGlhbWV0ZXJzO1xuXG4gICAgLy8gVGhlIGJhc2Ugc2l6ZSBpcyBhbHJlYWR5IGluc2VydGVkIHZpYSB0aGUgY29tcG9uZW50J3Mgc3RydWN0dXJhbCBzdHlsZXMuIFdlIHN0aWxsXG4gICAgLy8gbmVlZCB0byB0cmFjayBpdCBzbyB3ZSBkb24ndCBlbmQgdXAgYWRkaW5nIHRoZSBzYW1lIHN0eWxlcyBhZ2Fpbi5cbiAgICBpZiAoIXRyYWNrZWREaWFtZXRlcnMuaGFzKF9kb2N1bWVudC5oZWFkKSkge1xuICAgICAgdHJhY2tlZERpYW1ldGVycy5zZXQoX2RvY3VtZW50LmhlYWQsIG5ldyBTZXQ8bnVtYmVyPihbQkFTRV9TSVpFXSkpO1xuICAgIH1cblxuICAgIHRoaXMuX2ZhbGxiYWNrQW5pbWF0aW9uID0gcGxhdGZvcm0uRURHRSB8fCBwbGF0Zm9ybS5UUklERU5UO1xuICAgIHRoaXMuX25vb3BBbmltYXRpb25zID0gYW5pbWF0aW9uTW9kZSA9PT0gJ05vb3BBbmltYXRpb25zJyAmJlxuICAgICAgICAoISFkZWZhdWx0cyAmJiAhZGVmYXVsdHMuX2ZvcmNlQW5pbWF0aW9ucyk7XG5cbiAgICBpZiAoZGVmYXVsdHMpIHtcbiAgICAgIGlmIChkZWZhdWx0cy5kaWFtZXRlcikge1xuICAgICAgICB0aGlzLmRpYW1ldGVyID0gZGVmYXVsdHMuZGlhbWV0ZXI7XG4gICAgICB9XG5cbiAgICAgIGlmIChkZWZhdWx0cy5zdHJva2VXaWR0aCkge1xuICAgICAgICB0aGlzLnN0cm9rZVdpZHRoID0gZGVmYXVsdHMuc3Ryb2tlV2lkdGg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuICAgIC8vIE5vdGUgdGhhdCB3ZSBuZWVkIHRvIGxvb2sgdXAgdGhlIHJvb3Qgbm9kZSBpbiBuZ09uSW5pdCwgcmF0aGVyIHRoYW4gdGhlIGNvbnN0cnVjdG9yLCBiZWNhdXNlXG4gICAgLy8gQW5ndWxhciBzZWVtcyB0byBjcmVhdGUgdGhlIGVsZW1lbnQgb3V0c2lkZSB0aGUgc2hhZG93IHJvb3QgYW5kIHRoZW4gbW92ZXMgaXQgaW5zaWRlLCBpZiB0aGVcbiAgICAvLyBub2RlIGlzIGluc2lkZSBhbiBgbmdJZmAgYW5kIGEgU2hhZG93RG9tLWVuY2Fwc3VsYXRlZCBjb21wb25lbnQuXG4gICAgdGhpcy5fc3R5bGVSb290ID0gX2dldFNoYWRvd1Jvb3QoZWxlbWVudCwgdGhpcy5fZG9jdW1lbnQpIHx8IHRoaXMuX2RvY3VtZW50LmhlYWQ7XG4gICAgdGhpcy5fYXR0YWNoU3R5bGVOb2RlKCk7XG5cbiAgICAvLyBPbiBJRSBhbmQgRWRnZSwgd2UgY2FuJ3QgYW5pbWF0ZSB0aGUgYHN0cm9rZS1kYXNob2Zmc2V0YFxuICAgIC8vIHJlbGlhYmx5IHNvIHdlIGZhbGwgYmFjayB0byBhIG5vbi1zcGVjIGFuaW1hdGlvbi5cbiAgICBjb25zdCBhbmltYXRpb25DbGFzcyA9XG4gICAgICBgbWF0LXByb2dyZXNzLXNwaW5uZXItaW5kZXRlcm1pbmF0ZSR7dGhpcy5fZmFsbGJhY2tBbmltYXRpb24gPyAnLWZhbGxiYWNrJyA6ICcnfS1hbmltYXRpb25gO1xuXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGFuaW1hdGlvbkNsYXNzKTtcbiAgfVxuXG4gIC8qKiBUaGUgcmFkaXVzIG9mIHRoZSBzcGlubmVyLCBhZGp1c3RlZCBmb3Igc3Ryb2tlIHdpZHRoLiAqL1xuICBnZXQgX2NpcmNsZVJhZGl1cygpIHtcbiAgICByZXR1cm4gKHRoaXMuZGlhbWV0ZXIgLSBCQVNFX1NUUk9LRV9XSURUSCkgLyAyO1xuICB9XG5cbiAgLyoqIFRoZSB2aWV3IGJveCBvZiB0aGUgc3Bpbm5lcidzIHN2ZyBlbGVtZW50LiAqL1xuICBnZXQgX3ZpZXdCb3goKSB7XG4gICAgY29uc3Qgdmlld0JveCA9IHRoaXMuX2NpcmNsZVJhZGl1cyAqIDIgKyB0aGlzLnN0cm9rZVdpZHRoO1xuICAgIHJldHVybiBgMCAwICR7dmlld0JveH0gJHt2aWV3Qm94fWA7XG4gIH1cblxuICAvKiogVGhlIHN0cm9rZSBjaXJjdW1mZXJlbmNlIG9mIHRoZSBzdmcgY2lyY2xlLiAqL1xuICBnZXQgX3N0cm9rZUNpcmN1bWZlcmVuY2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gMiAqIE1hdGguUEkgKiB0aGlzLl9jaXJjbGVSYWRpdXM7XG4gIH1cblxuICAvKiogVGhlIGRhc2ggb2Zmc2V0IG9mIHRoZSBzdmcgY2lyY2xlLiAqL1xuICBnZXQgX3N0cm9rZURhc2hPZmZzZXQoKSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ2RldGVybWluYXRlJykge1xuICAgICAgcmV0dXJuIHRoaXMuX3N0cm9rZUNpcmN1bWZlcmVuY2UgKiAoMTAwIC0gdGhpcy5fdmFsdWUpIC8gMTAwO1xuICAgIH1cblxuICAgIC8vIEluIGZhbGxiYWNrIG1vZGUgc2V0IHRoZSBjaXJjbGUgdG8gODAlIGFuZCByb3RhdGUgaXQgd2l0aCBDU1MuXG4gICAgaWYgKHRoaXMuX2ZhbGxiYWNrQW5pbWF0aW9uICYmIHRoaXMubW9kZSA9PT0gJ2luZGV0ZXJtaW5hdGUnKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3Ryb2tlQ2lyY3VtZmVyZW5jZSAqIDAuMjtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKiBTdHJva2Ugd2lkdGggb2YgdGhlIGNpcmNsZSBpbiBwZXJjZW50LiAqL1xuICBnZXQgX2NpcmNsZVN0cm9rZVdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLnN0cm9rZVdpZHRoIC8gdGhpcy5kaWFtZXRlciAqIDEwMDtcbiAgfVxuXG4gIC8qKiBEeW5hbWljYWxseSBnZW5lcmF0ZXMgYSBzdHlsZSB0YWcgY29udGFpbmluZyB0aGUgY29ycmVjdCBhbmltYXRpb24gZm9yIHRoaXMgZGlhbWV0ZXIuICovXG4gIHByaXZhdGUgX2F0dGFjaFN0eWxlTm9kZSgpOiB2b2lkIHtcbiAgICBjb25zdCBzdHlsZVJvb3QgPSB0aGlzLl9zdHlsZVJvb3Q7XG4gICAgY29uc3QgY3VycmVudERpYW1ldGVyID0gdGhpcy5fZGlhbWV0ZXI7XG4gICAgY29uc3QgZGlhbWV0ZXJzID0gTWF0UHJvZ3Jlc3NTcGlubmVyLl9kaWFtZXRlcnM7XG4gICAgbGV0IGRpYW1ldGVyc0ZvckVsZW1lbnQgPSBkaWFtZXRlcnMuZ2V0KHN0eWxlUm9vdCk7XG5cbiAgICBpZiAoIWRpYW1ldGVyc0ZvckVsZW1lbnQgfHwgIWRpYW1ldGVyc0ZvckVsZW1lbnQuaGFzKGN1cnJlbnREaWFtZXRlcikpIHtcbiAgICAgIGNvbnN0IHN0eWxlVGFnOiBIVE1MU3R5bGVFbGVtZW50ID0gdGhpcy5fZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgIHN0eWxlVGFnLnNldEF0dHJpYnV0ZSgnbWF0LXNwaW5uZXItYW5pbWF0aW9uJywgY3VycmVudERpYW1ldGVyICsgJycpO1xuICAgICAgc3R5bGVUYWcudGV4dENvbnRlbnQgPSB0aGlzLl9nZXRBbmltYXRpb25UZXh0KCk7XG4gICAgICBzdHlsZVJvb3QuYXBwZW5kQ2hpbGQoc3R5bGVUYWcpO1xuXG4gICAgICBpZiAoIWRpYW1ldGVyc0ZvckVsZW1lbnQpIHtcbiAgICAgICAgZGlhbWV0ZXJzRm9yRWxlbWVudCA9IG5ldyBTZXQ8bnVtYmVyPigpO1xuICAgICAgICBkaWFtZXRlcnMuc2V0KHN0eWxlUm9vdCwgZGlhbWV0ZXJzRm9yRWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIGRpYW1ldGVyc0ZvckVsZW1lbnQuYWRkKGN1cnJlbnREaWFtZXRlcik7XG4gICAgfVxuICB9XG5cbiAgLyoqIEdlbmVyYXRlcyBhbmltYXRpb24gc3R5bGVzIGFkanVzdGVkIGZvciB0aGUgc3Bpbm5lcidzIGRpYW1ldGVyLiAqL1xuICBwcml2YXRlIF9nZXRBbmltYXRpb25UZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIElOREVURVJNSU5BVEVfQU5JTUFUSU9OX1RFTVBMQVRFXG4gICAgICAgIC8vIEFuaW1hdGlvbiBzaG91bGQgYmVnaW4gYXQgNSUgYW5kIGVuZCBhdCA4MCVcbiAgICAgICAgLnJlcGxhY2UoL1NUQVJUX1ZBTFVFL2csIGAkezAuOTUgKiB0aGlzLl9zdHJva2VDaXJjdW1mZXJlbmNlfWApXG4gICAgICAgIC5yZXBsYWNlKC9FTkRfVkFMVUUvZywgYCR7MC4yICogdGhpcy5fc3Ryb2tlQ2lyY3VtZmVyZW5jZX1gKVxuICAgICAgICAucmVwbGFjZSgvRElBTUVURVIvZywgYCR7dGhpcy5kaWFtZXRlcn1gKTtcbiAgfVxuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaWFtZXRlcjogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zdHJva2VXaWR0aDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV92YWx1ZTogTnVtYmVySW5wdXQ7XG59XG5cblxuLyoqXG4gKiBgPG1hdC1zcGlubmVyPmAgY29tcG9uZW50LlxuICpcbiAqIFRoaXMgaXMgYSBjb21wb25lbnQgZGVmaW5pdGlvbiB0byBiZSB1c2VkIGFzIGEgY29udmVuaWVuY2UgcmVmZXJlbmNlIHRvIGNyZWF0ZSBhblxuICogaW5kZXRlcm1pbmF0ZSBgPG1hdC1wcm9ncmVzcy1zcGlubmVyPmAgaW5zdGFuY2UuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1zcGlubmVyJyxcbiAgaG9zdDoge1xuICAgICdyb2xlJzogJ3Byb2dyZXNzYmFyJyxcbiAgICAnbW9kZSc6ICdpbmRldGVybWluYXRlJyxcbiAgICAnY2xhc3MnOiAnbWF0LXNwaW5uZXIgbWF0LXByb2dyZXNzLXNwaW5uZXInLFxuICAgICdbY2xhc3MuX21hdC1hbmltYXRpb24tbm9vcGFibGVdJzogYF9ub29wQW5pbWF0aW9uc2AsXG4gICAgJ1tzdHlsZS53aWR0aC5weF0nOiAnZGlhbWV0ZXInLFxuICAgICdbc3R5bGUuaGVpZ2h0LnB4XSc6ICdkaWFtZXRlcicsXG4gIH0sXG4gIGlucHV0czogWydjb2xvciddLFxuICB0ZW1wbGF0ZVVybDogJ3Byb2dyZXNzLXNwaW5uZXIuaHRtbCcsXG4gIHN0eWxlVXJsczogWydwcm9ncmVzcy1zcGlubmVyLmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0U3Bpbm5lciBleHRlbmRzIE1hdFByb2dyZXNzU3Bpbm5lciB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LCBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIGRvY3VtZW50OiBhbnksXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQU5JTUFUSU9OX01PRFVMRV9UWVBFKSBhbmltYXRpb25Nb2RlOiBzdHJpbmcsXG4gICAgICAgICAgICAgIEBJbmplY3QoTUFUX1BST0dSRVNTX1NQSU5ORVJfREVGQVVMVF9PUFRJT05TKVxuICAgICAgICAgICAgICAgICAgZGVmYXVsdHM/OiBNYXRQcm9ncmVzc1NwaW5uZXJEZWZhdWx0T3B0aW9ucykge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIHBsYXRmb3JtLCBkb2N1bWVudCwgYW5pbWF0aW9uTW9kZSwgZGVmYXVsdHMpO1xuICAgIHRoaXMubW9kZSA9ICdpbmRldGVybWluYXRlJztcbiAgfVxufVxuXG5cbi8qKiBHZXRzIHRoZSBzaGFkb3cgcm9vdCBvZiBhbiBlbGVtZW50LCBpZiBzdXBwb3J0ZWQgYW5kIHRoZSBlbGVtZW50IGlzIGluc2lkZSB0aGUgU2hhZG93IERPTS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0U2hhZG93Um9vdChlbGVtZW50OiBIVE1MRWxlbWVudCwgX2RvY3VtZW50OiBEb2N1bWVudCk6IE5vZGUgfCBudWxsIHtcbiAgLy8gVE9ETyhjcmlzYmV0byk6IHNlZSB3aGV0aGVyIHdlIHNob3VsZCBtb3ZlIHRoaXMgaW50byB0aGUgQ0RLXG4gIC8vIGZlYXR1cmUgZGV0ZWN0aW9uIHV0aWxpdGllcyBvbmNlICMxNTYxNiBnZXRzIG1lcmdlZCBpbi5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc3QgaGVhZCA9IF9kb2N1bWVudC5oZWFkO1xuXG4gICAgLy8gQ2hlY2sgd2hldGhlciB0aGUgYnJvd3NlciBzdXBwb3J0cyBTaGFkb3cgRE9NLlxuICAgIGlmIChoZWFkICYmICgoaGVhZCBhcyBhbnkpLmNyZWF0ZVNoYWRvd1Jvb3QgfHwgaGVhZC5hdHRhY2hTaGFkb3cpKSB7XG4gICAgICBjb25zdCByb290Tm9kZSA9IGVsZW1lbnQuZ2V0Um9vdE5vZGUgPyBlbGVtZW50LmdldFJvb3ROb2RlKCkgOiBudWxsO1xuXG4gICAgICAvLyBXZSBuZWVkIHRvIHRha2UgdGhlIGBTaGFkb3dSb290YCBvZmYgb2YgYHdpbmRvd2AsIGJlY2F1c2UgdGhlIGJ1aWx0LWluIHR5cGVzIGFyZVxuICAgICAgLy8gaW5jb3JyZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8yNzkyOS5cbiAgICAgIGlmIChyb290Tm9kZSBpbnN0YW5jZW9mICh3aW5kb3cgYXMgYW55KS5TaGFkb3dSb290KSB7XG4gICAgICAgIHJldHVybiByb290Tm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cbiJdfQ==