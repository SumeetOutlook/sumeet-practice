import { __awaiter } from "tslib";
import { DOCUMENT, isPlatformServer } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, Directive, ElementRef, EventEmitter, forwardRef, Inject, Input, NgZone, Output, PLATFORM_ID, Renderer2, SecurityContext, ViewEncapsulation } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { defaultModules } from './quill-defaults';
import { getFormat } from './helpers';
import { QuillService } from './quill.service';
// tslint:disable-next-line:directive-class-suffix
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/platform-browser';

const _c0 = [[["", "quill-editor-toolbar", ""]]];
const _c1 = ["[quill-editor-toolbar]"];
export class QuillEditorBase {
    constructor(elementRef, domSanitizer, doc, platformId, renderer, zone, service) {
        this.elementRef = elementRef;
        this.domSanitizer = domSanitizer;
        this.doc = doc;
        this.platformId = platformId;
        this.renderer = renderer;
        this.zone = zone;
        this.service = service;
        this.required = false;
        this.customToolbarPosition = 'top';
        this.sanitize = false;
        this.styles = null;
        this.strict = true;
        this.customOptions = [];
        this.customModules = [];
        this.preserveWhitespace = false;
        this.trimOnValidation = false;
        this.onEditorCreated = new EventEmitter();
        this.onEditorChanged = new EventEmitter();
        this.onContentChanged = new EventEmitter();
        this.onSelectionChanged = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.disabled = false; // used to store initial value before ViewInit
        this.valueGetter = (quillEditor, editorElement) => {
            let html = editorElement.querySelector('.ql-editor').innerHTML;
            if (html === '<p><br></p>' || html === '<div><br></div>') {
                html = null;
            }
            let modelValue = html;
            const format = getFormat(this.format, this.service.config.format);
            if (format === 'text') {
                modelValue = quillEditor.getText();
            }
            else if (format === 'object') {
                modelValue = quillEditor.getContents();
            }
            else if (format === 'json') {
                try {
                    modelValue = JSON.stringify(quillEditor.getContents());
                }
                catch (e) {
                    modelValue = quillEditor.getText();
                }
            }
            return modelValue;
        };
        this.valueSetter = (quillEditor, value) => {
            const format = getFormat(this.format, this.service.config.format);
            if (format === 'html') {
                if (this.sanitize) {
                    value = this.domSanitizer.sanitize(SecurityContext.HTML, value);
                }
                return quillEditor.clipboard.convert(value);
            }
            else if (format === 'json') {
                try {
                    return JSON.parse(value);
                }
                catch (e) {
                    return [{ insert: value }];
                }
            }
            return value;
        };
        this.selectionChangeHandler = (range, oldRange, source) => {
            const shouldTriggerOnModelTouched = !range && !!this.onModelTouched;
            // only emit changes when there's any listener
            if (!this.onBlur.observers.length &&
                !this.onFocus.observers.length &&
                !this.onSelectionChanged.observers.length &&
                !shouldTriggerOnModelTouched) {
                return;
            }
            this.zone.run(() => {
                if (range === null) {
                    this.onBlur.emit({
                        editor: this.quillEditor,
                        source
                    });
                }
                else if (oldRange === null) {
                    this.onFocus.emit({
                        editor: this.quillEditor,
                        source
                    });
                }
                this.onSelectionChanged.emit({
                    editor: this.quillEditor,
                    oldRange,
                    range,
                    source
                });
                if (shouldTriggerOnModelTouched) {
                    this.onModelTouched();
                }
            });
        };
        this.textChangeHandler = (delta, oldDelta, source) => {
            // only emit changes emitted by user interactions
            const text = this.quillEditor.getText();
            const content = this.quillEditor.getContents();
            let html = this.editorElem.querySelector('.ql-editor').innerHTML;
            if (html === '<p><br></p>' || html === '<div><br></div>') {
                html = null;
            }
            const trackChanges = this.trackChanges || this.service.config.trackChanges;
            const shouldTriggerOnModelChange = (source === 'user' || trackChanges && trackChanges === 'all') && !!this.onModelChange;
            // only emit changes when there's any listener
            if (!this.onContentChanged.observers.length && !shouldTriggerOnModelChange) {
                return;
            }
            this.zone.run(() => {
                if (shouldTriggerOnModelChange) {
                    this.onModelChange(this.valueGetter(this.quillEditor, this.editorElem));
                }
                this.onContentChanged.emit({
                    content,
                    delta,
                    editor: this.quillEditor,
                    html,
                    oldDelta,
                    source,
                    text
                });
            });
        };
        // tslint:disable-next-line:max-line-length
        this.editorChangeHandler = (event, current, old, source) => {
            // only emit changes when there's any listener
            if (!this.onEditorChanged.observers.length) {
                return;
            }
            // only emit changes emitted by user interactions
            if (event === 'text-change') {
                const text = this.quillEditor.getText();
                const content = this.quillEditor.getContents();
                let html = this.editorElem.querySelector('.ql-editor').innerHTML;
                if (html === '<p><br></p>' || html === '<div><br></div>') {
                    html = null;
                }
                this.zone.run(() => {
                    this.onEditorChanged.emit({
                        content,
                        delta: current,
                        editor: this.quillEditor,
                        event,
                        html,
                        oldDelta: old,
                        source,
                        text
                    });
                });
            }
            else {
                this.onEditorChanged.emit({
                    editor: this.quillEditor,
                    event,
                    oldRange: old,
                    range: current,
                    source
                });
            }
        };
    }
    static normalizeClassNames(classes) {
        const classList = classes.trim().split(' ');
        return classList.reduce((prev, cur) => {
            const trimmed = cur.trim();
            if (trimmed) {
                prev.push(trimmed);
            }
            return prev;
        }, []);
    }
    ngAfterViewInit() {
        return __awaiter(this, void 0, void 0, function* () {
            if (isPlatformServer(this.platformId)) {
                return;
            }
            const Quill = yield this.service.getQuill();
            this.elementRef.nativeElement.insertAdjacentHTML(this.customToolbarPosition === 'top' ? 'beforeend' : 'afterbegin', this.preserveWhitespace ? '<pre quill-editor-element></pre>' : '<div quill-editor-element></div>');
            this.editorElem = this.elementRef.nativeElement.querySelector('[quill-editor-element]');
            const toolbarElem = this.elementRef.nativeElement.querySelector('[quill-editor-toolbar]');
            const modules = Object.assign({}, this.modules || this.service.config.modules);
            if (toolbarElem) {
                modules.toolbar = toolbarElem;
            }
            else if (modules.toolbar === undefined) {
                modules.toolbar = defaultModules.toolbar;
            }
            let placeholder = this.placeholder !== undefined ? this.placeholder : this.service.config.placeholder;
            if (placeholder === undefined) {
                placeholder = 'Insert text here ...';
            }
            if (this.styles) {
                Object.keys(this.styles).forEach((key) => {
                    this.renderer.setStyle(this.editorElem, key, this.styles[key]);
                });
            }
            if (this.classes) {
                this.addClasses(this.classes);
            }
            this.customOptions.forEach((customOption) => {
                const newCustomOption = Quill.import(customOption.import);
                newCustomOption.whitelist = customOption.whitelist;
                Quill.register(newCustomOption, true);
            });
            this.customModules.forEach(({ implementation, path }) => {
                Quill.register(path, implementation);
            });
            let bounds = this.bounds && this.bounds === 'self' ? this.editorElem : this.bounds;
            if (!bounds) {
                bounds = this.service.config.bounds ? this.service.config.bounds : this.doc.body;
            }
            let debug = this.debug;
            if (!debug && debug !== false && this.service.config.debug) {
                debug = this.service.config.debug;
            }
            let readOnly = this.readOnly;
            if (!readOnly && this.readOnly !== false) {
                readOnly = this.service.config.readOnly !== undefined ? this.service.config.readOnly : false;
            }
            let scrollingContainer = this.scrollingContainer;
            if (!scrollingContainer && this.scrollingContainer !== null) {
                scrollingContainer =
                    this.service.config.scrollingContainer === null
                        || this.service.config.scrollingContainer ? this.service.config.scrollingContainer : null;
            }
            let formats = this.formats;
            if (!formats && formats === undefined) {
                formats = this.service.config.formats ? [...this.service.config.formats] : (this.service.config.formats === null ? null : undefined);
            }
            this.zone.runOutsideAngular(() => {
                this.quillEditor = new Quill(this.editorElem, {
                    bounds,
                    debug: debug,
                    formats: formats,
                    modules,
                    placeholder,
                    readOnly,
                    scrollingContainer: scrollingContainer,
                    strict: this.strict,
                    theme: this.theme || (this.service.config.theme ? this.service.config.theme : 'snow')
                });
            });
            if (this.content) {
                const format = getFormat(this.format, this.service.config.format);
                if (format === 'object') {
                    this.quillEditor.setContents(this.content, 'silent');
                }
                else if (format === 'text') {
                    this.quillEditor.setText(this.content, 'silent');
                }
                else if (format === 'json') {
                    try {
                        this.quillEditor.setContents(JSON.parse(this.content), 'silent');
                    }
                    catch (e) {
                        this.quillEditor.setText(this.content, 'silent');
                    }
                }
                else {
                    if (this.sanitize) {
                        this.content = this.domSanitizer.sanitize(SecurityContext.HTML, this.content);
                    }
                    const contents = this.quillEditor.clipboard.convert(this.content);
                    this.quillEditor.setContents(contents, 'silent');
                }
                this.quillEditor.getModule('history').clear();
            }
            // initialize disabled status based on this.disabled as default value
            this.setDisabledState();
            // triggered if selection or text changed
            this.quillEditor.on('editor-change', this.editorChangeHandler);
            // mark model as touched if editor lost focus
            this.quillEditor.on('selection-change', this.selectionChangeHandler);
            // update model if text changes
            this.quillEditor.on('text-change', this.textChangeHandler);
            // trigger created in a timeout to avoid changed models after checked
            // if you are using the editor api in created output to change the editor content
            setTimeout(() => {
                if (this.onValidatorChanged) {
                    this.onValidatorChanged();
                }
                this.onEditorCreated.emit(this.quillEditor);
            });
        });
    }
    ngOnDestroy() {
        if (this.quillEditor) {
            this.quillEditor.off('selection-change', this.selectionChangeHandler);
            this.quillEditor.off('text-change', this.textChangeHandler);
            this.quillEditor.off('editor-change', this.editorChangeHandler);
        }
    }
    ngOnChanges(changes) {
        if (!this.quillEditor) {
            return;
        }
        // tslint:disable:no-string-literal
        if (changes['readOnly']) {
            this.quillEditor.enable(!changes['readOnly'].currentValue);
        }
        if (changes['placeholder']) {
            this.quillEditor.root.dataset.placeholder =
                changes['placeholder'].currentValue;
        }
        if (changes['styles']) {
            const currentStyling = changes['styles'].currentValue;
            const previousStyling = changes['styles'].previousValue;
            if (previousStyling) {
                Object.keys(previousStyling).forEach((key) => {
                    this.renderer.removeStyle(this.editorElem, key);
                });
            }
            if (currentStyling) {
                Object.keys(currentStyling).forEach((key) => {
                    this.renderer.setStyle(this.editorElem, key, this.styles[key]);
                });
            }
        }
        if (changes['classes']) {
            const currentClasses = changes['classes'].currentValue;
            const previousClasses = changes['classes'].previousValue;
            if (previousClasses) {
                this.removeClasses(previousClasses);
            }
            if (currentClasses) {
                this.addClasses(currentClasses);
            }
        }
        // tslint:enable:no-string-literal
    }
    addClasses(classList) {
        QuillEditorBase.normalizeClassNames(classList).forEach((c) => {
            this.renderer.addClass(this.editorElem, c);
        });
    }
    removeClasses(classList) {
        QuillEditorBase.normalizeClassNames(classList).forEach((c) => {
            this.renderer.removeClass(this.editorElem, c);
        });
    }
    writeValue(currentValue) {
        this.content = currentValue;
        const format = getFormat(this.format, this.service.config.format);
        if (this.quillEditor) {
            if (currentValue) {
                if (format === 'text') {
                    this.quillEditor.setText(currentValue);
                }
                else {
                    this.quillEditor.setContents(this.valueSetter(this.quillEditor, this.content));
                }
                return;
            }
            this.quillEditor.setText('');
        }
    }
    setDisabledState(isDisabled = this.disabled) {
        // store initial value to set appropriate disabled status after ViewInit
        this.disabled = isDisabled;
        if (this.quillEditor) {
            if (isDisabled) {
                this.quillEditor.disable();
                this.renderer.setAttribute(this.elementRef.nativeElement, 'disabled', 'disabled');
            }
            else {
                if (!this.readOnly) {
                    this.quillEditor.enable();
                }
                this.renderer.removeAttribute(this.elementRef.nativeElement, 'disabled');
            }
        }
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    registerOnValidatorChange(fn) {
        this.onValidatorChanged = fn;
    }
    validate() {
        if (!this.quillEditor) {
            return null;
        }
        const err = {};
        let valid = true;
        const text = this.quillEditor.getText();
        // trim text if wanted + handle special case that an empty editor contains a new line
        const textLength = this.trimOnValidation ? text.trim().length : (text.length === 1 && text.trim().length === 0 ? 0 : text.length - 1);
        if (this.minLength && textLength && textLength < this.minLength) {
            err.minLengthError = {
                given: textLength,
                minLength: this.minLength
            };
            valid = false;
        }
        if (this.maxLength && textLength > this.maxLength) {
            err.maxLengthError = {
                given: textLength,
                maxLength: this.maxLength
            };
            valid = false;
        }
        if (this.required && !textLength) {
            err.requiredError = {
                empty: true
            };
            valid = false;
        }
        return valid ? null : err;
    }
}
QuillEditorBase.ɵfac = function QuillEditorBase_Factory(t) { return new (t || QuillEditorBase)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DomSanitizer), ɵngcc0.ɵɵdirectiveInject(DOCUMENT), ɵngcc0.ɵɵdirectiveInject(PLATFORM_ID), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(QuillService)); };
QuillEditorBase.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: QuillEditorBase, inputs: { required: "required", customToolbarPosition: "customToolbarPosition", sanitize: "sanitize", styles: "styles", strict: "strict", customOptions: "customOptions", customModules: "customModules", preserveWhitespace: "preserveWhitespace", trimOnValidation: "trimOnValidation", valueGetter: "valueGetter", valueSetter: "valueSetter", format: "format", theme: "theme", modules: "modules", debug: "debug", readOnly: "readOnly", placeholder: "placeholder", maxLength: "maxLength", minLength: "minLength", formats: "formats", scrollingContainer: "scrollingContainer", bounds: "bounds", trackChanges: "trackChanges", classes: "classes" }, outputs: { onEditorCreated: "onEditorCreated", onEditorChanged: "onEditorChanged", onContentChanged: "onContentChanged", onSelectionChanged: "onSelectionChanged", onFocus: "onFocus", onBlur: "onBlur" }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
QuillEditorBase.ctorParameters = () => [
    { type: ElementRef },
    { type: DomSanitizer },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: Renderer2 },
    { type: NgZone },
    { type: QuillService }
];
QuillEditorBase.propDecorators = {
    format: [{ type: Input }],
    theme: [{ type: Input }],
    modules: [{ type: Input }],
    debug: [{ type: Input }],
    readOnly: [{ type: Input }],
    placeholder: [{ type: Input }],
    maxLength: [{ type: Input }],
    minLength: [{ type: Input }],
    required: [{ type: Input }],
    formats: [{ type: Input }],
    customToolbarPosition: [{ type: Input }],
    sanitize: [{ type: Input }],
    styles: [{ type: Input }],
    strict: [{ type: Input }],
    scrollingContainer: [{ type: Input }],
    bounds: [{ type: Input }],
    customOptions: [{ type: Input }],
    customModules: [{ type: Input }],
    trackChanges: [{ type: Input }],
    preserveWhitespace: [{ type: Input }],
    classes: [{ type: Input }],
    trimOnValidation: [{ type: Input }],
    onEditorCreated: [{ type: Output }],
    onEditorChanged: [{ type: Output }],
    onContentChanged: [{ type: Output }],
    onSelectionChanged: [{ type: Output }],
    onFocus: [{ type: Output }],
    onBlur: [{ type: Output }],
    valueGetter: [{ type: Input }],
    valueSetter: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(QuillEditorBase, [{
        type: Directive
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.DomSanitizer }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.NgZone }, { type: QuillService }]; }, { required: [{
            type: Input
        }], customToolbarPosition: [{
            type: Input
        }], sanitize: [{
            type: Input
        }], styles: [{
            type: Input
        }], strict: [{
            type: Input
        }], customOptions: [{
            type: Input
        }], customModules: [{
            type: Input
        }], preserveWhitespace: [{
            type: Input
        }], trimOnValidation: [{
            type: Input
        }], onEditorCreated: [{
            type: Output
        }], onEditorChanged: [{
            type: Output
        }], onContentChanged: [{
            type: Output
        }], onSelectionChanged: [{
            type: Output
        }], onFocus: [{
            type: Output
        }], onBlur: [{
            type: Output
        }], valueGetter: [{
            type: Input
        }], valueSetter: [{
            type: Input
        }], format: [{
            type: Input
        }], theme: [{
            type: Input
        }], modules: [{
            type: Input
        }], debug: [{
            type: Input
        }], readOnly: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], maxLength: [{
            type: Input
        }], minLength: [{
            type: Input
        }], formats: [{
            type: Input
        }], scrollingContainer: [{
            type: Input
        }], bounds: [{
            type: Input
        }], trackChanges: [{
            type: Input
        }], classes: [{
            type: Input
        }] }); })();
export class QuillEditorComponent extends QuillEditorBase {
    constructor(elementRef, domSanitizer, doc, platformId, renderer, zone, service) {
        super(elementRef, domSanitizer, doc, platformId, renderer, zone, service);
    }
}
QuillEditorComponent.ɵfac = function QuillEditorComponent_Factory(t) { return new (t || QuillEditorComponent)(ɵngcc0.ɵɵdirectiveInject(ElementRef), ɵngcc0.ɵɵdirectiveInject(DomSanitizer), ɵngcc0.ɵɵdirectiveInject(DOCUMENT), ɵngcc0.ɵɵdirectiveInject(PLATFORM_ID), ɵngcc0.ɵɵdirectiveInject(Renderer2), ɵngcc0.ɵɵdirectiveInject(NgZone), ɵngcc0.ɵɵdirectiveInject(QuillService)); };
QuillEditorComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: QuillEditorComponent, selectors: [["quill-editor"]], features: [ɵngcc0.ɵɵProvidersFeature([
            {
                multi: true,
                provide: NG_VALUE_ACCESSOR,
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                useExisting: forwardRef(() => QuillEditorComponent)
            },
            {
                multi: true,
                provide: NG_VALIDATORS,
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                useExisting: forwardRef(() => QuillEditorComponent)
            }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1, decls: 1, vars: 0, template: function QuillEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c0);
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
QuillEditorComponent.ctorParameters = () => [
    { type: ElementRef, decorators: [{ type: Inject, args: [ElementRef,] }] },
    { type: DomSanitizer, decorators: [{ type: Inject, args: [DomSanitizer,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: Renderer2, decorators: [{ type: Inject, args: [Renderer2,] }] },
    { type: NgZone, decorators: [{ type: Inject, args: [NgZone,] }] },
    { type: QuillService, decorators: [{ type: Inject, args: [QuillService,] }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(QuillEditorComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                providers: [
                    {
                        multi: true,
                        provide: NG_VALUE_ACCESSOR,
                        // eslint-disable-next-line @typescript-eslint/no-use-before-define
                        useExisting: forwardRef(() => QuillEditorComponent)
                    },
                    {
                        multi: true,
                        provide: NG_VALIDATORS,
                        // eslint-disable-next-line @typescript-eslint/no-use-before-define
                        useExisting: forwardRef(() => QuillEditorComponent)
                    }
                ],
                selector: 'quill-editor',
                template: `
  <ng-content select="[quill-editor-toolbar]"></ng-content>
`
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef, decorators: [{
                type: Inject,
                args: [ElementRef]
            }] }, { type: ɵngcc1.DomSanitizer, decorators: [{
                type: Inject,
                args: [DomSanitizer]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: ɵngcc0.Renderer2, decorators: [{
                type: Inject,
                args: [Renderer2]
            }] }, { type: ɵngcc0.NgZone, decorators: [{
                type: Inject,
                args: [NgZone]
            }] }, { type: QuillService, decorators: [{
                type: Inject,
                args: [QuillService]
            }] }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpbGwtZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXF1aWxsL3NyYy9saWIvcXVpbGwtZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLGlCQUFpQixDQUFBO0FBQzFELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQTtBQU10RCxPQUFPLEVBRUwsU0FBUyxFQUNULFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFHTixNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxlQUFlLEVBRWYsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sRUFBdUIsYUFBYSxFQUFFLGlCQUFpQixFQUFZLE1BQU0sZ0JBQWdCLENBQUE7QUFDaEcsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGtCQUFrQixDQUFBO0FBRS9DLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxXQUFXLENBQUE7QUFDbkMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFBO0FBc0M5QyxrREFBa0Q7Ozs7OztBQUNsRCxNQUFNLE9BQWdCLGVBQWU7QUFBRyxJQTBDdEMsWUFDUyxVQUFzQixFQUNuQixZQUEwQixFQUNSLEdBQVEsRUFDTCxVQUFlLEVBQ3BDLFFBQW1CLEVBQ25CLElBQVksRUFDWixPQUFxQjtBQUNoQyxRQVBRLGVBQVUsR0FBVixVQUFVLENBQVk7QUFBQyxRQUNwQixpQkFBWSxHQUFaLFlBQVksQ0FBYztBQUFDLFFBQ1QsUUFBRyxHQUFILEdBQUcsQ0FBSztBQUFDLFFBQ04sZUFBVSxHQUFWLFVBQVUsQ0FBSztBQUFDLFFBQ3JDLGFBQVEsR0FBUixRQUFRLENBQVc7QUFBQyxRQUNwQixTQUFJLEdBQUos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Q0g7Z0RBMUNDLFNBQVMsU0FBQyxrQkFDVCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxrQkFDckMsU0FBUyxFQUFFLHNCQUNULDBCQUNFLEtBQUssRUFBRSxJQUFJLDBCQUNYLE9BQU8sRUFBRSxpQkFBaUIsMEJBQzFCLG1FQUFtRTtDQUNuRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLG9CQUFvQixDQUFDLHNCQUNwRCxzQkFDRCwwQkFDRSxLQUFLLEVBQUUsSUFBSTtNQUNYLE9BQU87Q0FBRSxhQUFhO1dBQ3RCO2tDQUFtRSx5QkFDbkUsV0FBVyxFQUFFLFVBQVUsQ0FBQztFQUFHLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxzQkFDcEQsa0JBQ0Y7O0NBQ0QsUUFBUSxFQUFFO1dBQWM7QUFDeEIsUUFBUSxFQUFFO2lDQUVYLGNBQ0E7Ozs7Ozs2QkFDSTtBQUFDO0FBQThDLFlBam1CbEQsVUFBVSx1QkFvbUJQLE1BQU0sU0FBQyxVQUFVO0FBQVMsWUE5bUJ2QixZQUFZLHVCQSttQmYsTUFBTSxTQUFDLFlBQVk7QUFBUyw0Q0FDNUIsTUFBTSxTQUFDLFFBQVE7QUFBUyw0Q0FDeEIsTUFBTSxTQUFDLFdBQVc7QUFBUyxZQTdsQjlCLFNBQVMsdUJBOGxCTixNQUFNLFNBQUMsU0FBUztBQUFTLFlBbm1CNUIsTUFBTSx1QkFvbUJILE1BQU0sU0FBQyxNQUFNO0FBQVMsWUFybEJsQixZQUFZLHVCQXNsQmhCLE1BQU0sU0FBQyxZQUFZO0FBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtET0NVTUVOVCwgaXNQbGF0Zm9ybVNlcnZlcn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xuaW1wb3J0IHtEb21TYW5pdGl6ZXJ9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInXG5cbmltcG9ydCB7IFF1aWxsTW9kdWxlcywgQ3VzdG9tT3B0aW9uLCBDdXN0b21Nb2R1bGV9IGZyb20gJy4vcXVpbGwtZWRpdG9yLmludGVyZmFjZXMnXG5cbmltcG9ydCBRdWlsbFR5cGUsIHsgRGVsdGEgfSBmcm9tICdxdWlsbCdcblxuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBQTEFURk9STV9JRCxcbiAgUmVuZGVyZXIyLFxuICBTZWN1cml0eUNvbnRleHQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTElEQVRPUlMsIE5HX1ZBTFVFX0FDQ0VTU09SLCBWYWxpZGF0b3J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuaW1wb3J0IHtkZWZhdWx0TW9kdWxlc30gZnJvbSAnLi9xdWlsbC1kZWZhdWx0cydcblxuaW1wb3J0IHtnZXRGb3JtYXR9IGZyb20gJy4vaGVscGVycydcbmltcG9ydCB7IFF1aWxsU2VydmljZSB9IGZyb20gJy4vcXVpbGwuc2VydmljZSdcblxuZXhwb3J0IGludGVyZmFjZSBSYW5nZSB7XG4gIGluZGV4OiBudW1iZXJcbiAgbGVuZ3RoOiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb250ZW50Q2hhbmdlIHtcbiAgY29udGVudDogYW55XG4gIGRlbHRhOiBEZWx0YVxuICBlZGl0b3I6IFF1aWxsVHlwZVxuICBodG1sOiBzdHJpbmcgfCBudWxsXG4gIG9sZERlbHRhOiBEZWx0YVxuICBzb3VyY2U6IHN0cmluZ1xuICB0ZXh0OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3Rpb25DaGFuZ2Uge1xuICBlZGl0b3I6IFF1aWxsVHlwZVxuICBvbGRSYW5nZTogUmFuZ2UgfCBudWxsXG4gIHJhbmdlOiBSYW5nZSB8wqBudWxsXG4gIHNvdXJjZTogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmx1ciB7XG4gIGVkaXRvcjogUXVpbGxUeXBlXG4gIHNvdXJjZTogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9jdXMge1xuICBlZGl0b3I6IFF1aWxsVHlwZVxuICBzb3VyY2U6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBFZGl0b3JDaGFuZ2VDb250ZW50ID0gQ29udGVudENoYW5nZSAmIHtldmVudDogJ3RleHQtY2hhbmdlJ31cbmV4cG9ydCB0eXBlIEVkaXRvckNoYW5nZVNlbGVjdGlvbiA9IFNlbGVjdGlvbkNoYW5nZSAmIHtldmVudDogJ3NlbGVjdGlvbi1jaGFuZ2UnfVxuXG5ARGlyZWN0aXZlKClcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtY2xhc3Mtc3VmZml4XG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUXVpbGxFZGl0b3JCYXNlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBWYWxpZGF0b3Ige1xuXG4gIHF1aWxsRWRpdG9yITogUXVpbGxUeXBlXG4gIGVkaXRvckVsZW0hOiBIVE1MRWxlbWVudFxuICBjb250ZW50OiBhbnlcblxuICBASW5wdXQoKSBmb3JtYXQ/OiAnb2JqZWN0JyB8ICdodG1sJyB8ICd0ZXh0JyB8ICdqc29uJ1xuICBASW5wdXQoKSB0aGVtZT86IHN0cmluZ1xuICBASW5wdXQoKSBtb2R1bGVzPzogUXVpbGxNb2R1bGVzXG4gIEBJbnB1dCgpIGRlYnVnPzogJ3dhcm4nIHzCoCdsb2cnIHzCoCdlcnJvcicgfMKgZmFsc2VcbiAgQElucHV0KCkgcmVhZE9ubHk/OiBib29sZWFuXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyPzogc3RyaW5nXG4gIEBJbnB1dCgpIG1heExlbmd0aD86IG51bWJlclxuICBASW5wdXQoKSBtaW5MZW5ndGg/OiBudW1iZXJcbiAgQElucHV0KCkgcmVxdWlyZWQgPSBmYWxzZVxuICBASW5wdXQoKSBmb3JtYXRzPzogc3RyaW5nW10gfMKgbnVsbFxuICBASW5wdXQoKSBjdXN0b21Ub29sYmFyUG9zaXRpb246ICd0b3AnIHzCoCdib3R0b20nID0gJ3RvcCdcbiAgQElucHV0KCkgc2FuaXRpemUgPSBmYWxzZVxuICBASW5wdXQoKSBzdHlsZXM6IGFueSA9IG51bGxcbiAgQElucHV0KCkgc3RyaWN0ID0gdHJ1ZVxuICBASW5wdXQoKSBzY3JvbGxpbmdDb250YWluZXI/OiBIVE1MRWxlbWVudCB8IHN0cmluZyB8IG51bGxcbiAgQElucHV0KCkgYm91bmRzPzogSFRNTEVsZW1lbnQgfCBzdHJpbmdcbiAgQElucHV0KCkgY3VzdG9tT3B0aW9uczogQ3VzdG9tT3B0aW9uW10gPSBbXVxuICBASW5wdXQoKSBjdXN0b21Nb2R1bGVzOiBDdXN0b21Nb2R1bGVbXSA9IFtdXG4gIEBJbnB1dCgpIHRyYWNrQ2hhbmdlcz86ICd1c2VyJyB8wqAnYWxsJ1xuICBASW5wdXQoKSBwcmVzZXJ2ZVdoaXRlc3BhY2UgPSBmYWxzZVxuICBASW5wdXQoKSBjbGFzc2VzPzogc3RyaW5nXG4gIEBJbnB1dCgpIHRyaW1PblZhbGlkYXRpb24gPSBmYWxzZVxuXG4gIEBPdXRwdXQoKSBvbkVkaXRvckNyZWF0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gIEBPdXRwdXQoKSBvbkVkaXRvckNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxFZGl0b3JDaGFuZ2VDb250ZW50IHzCoEVkaXRvckNoYW5nZVNlbGVjdGlvbj4gPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgQE91dHB1dCgpIG9uQ29udGVudENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxDb250ZW50Q2hhbmdlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICBAT3V0cHV0KCkgb25TZWxlY3Rpb25DaGFuZ2VkOiBFdmVudEVtaXR0ZXI8U2VsZWN0aW9uQ2hhbmdlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICBAT3V0cHV0KCkgb25Gb2N1czogRXZlbnRFbWl0dGVyPEZvY3VzPiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICBAT3V0cHV0KCkgb25CbHVyOiBFdmVudEVtaXR0ZXI8Qmx1cj4gPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICBkaXNhYmxlZCA9IGZhbHNlIC8vIHVzZWQgdG8gc3RvcmUgaW5pdGlhbCB2YWx1ZSBiZWZvcmUgVmlld0luaXRcblxuICBvbk1vZGVsQ2hhbmdlOiAobW9kZWxWYWx1ZT86IGFueSkgPT4gdm9pZFxuICBvbk1vZGVsVG91Y2hlZDogKCkgPT4gdm9pZFxuICBvblZhbGlkYXRvckNoYW5nZWQ6ICgpID0+IHZvaWRcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcm90ZWN0ZWQgZG9tU2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJvdGVjdGVkIGRvYzogYW55LFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByb3RlY3RlZCBwbGF0Zm9ybUlkOiBhbnksXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJvdGVjdGVkIHpvbmU6IE5nWm9uZSxcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogUXVpbGxTZXJ2aWNlXG4gICkge31cblxuICBzdGF0aWMgbm9ybWFsaXplQ2xhc3NOYW1lcyhjbGFzc2VzOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgY2xhc3NMaXN0ID0gY2xhc3Nlcy50cmltKCkuc3BsaXQoJyAnKVxuICAgIHJldHVybiBjbGFzc0xpc3QucmVkdWNlKChwcmV2OiBzdHJpbmdbXSwgY3VyOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHRyaW1tZWQgPSBjdXIudHJpbSgpXG4gICAgICBpZiAodHJpbW1lZCkge1xuICAgICAgICBwcmV2LnB1c2godHJpbW1lZClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZcbiAgICB9LCBbXSlcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHZhbHVlR2V0dGVyID0gKHF1aWxsRWRpdG9yOiBRdWlsbFR5cGUsIGVkaXRvckVsZW1lbnQ6IEhUTUxFbGVtZW50KTogc3RyaW5nIHwgYW55wqAgPT4ge1xuICAgIGxldCBodG1sOiBzdHJpbmcgfCBudWxsID0gZWRpdG9yRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucWwtZWRpdG9yJykhLmlubmVySFRNTFxuICAgIGlmIChodG1sID09PSAnPHA+PGJyPjwvcD4nIHx8IGh0bWwgPT09ICc8ZGl2Pjxicj48L2Rpdj4nKSB7XG4gICAgICBodG1sID0gbnVsbFxuICAgIH1cbiAgICBsZXQgbW9kZWxWYWx1ZTogc3RyaW5nIHwgRGVsdGEgfMKgbnVsbCA9IGh0bWxcbiAgICBjb25zdCBmb3JtYXQgPSBnZXRGb3JtYXQodGhpcy5mb3JtYXQsIHRoaXMuc2VydmljZS5jb25maWcuZm9ybWF0KVxuXG4gICAgaWYgKGZvcm1hdCA9PT0gJ3RleHQnKSB7XG4gICAgICBtb2RlbFZhbHVlID0gcXVpbGxFZGl0b3IuZ2V0VGV4dCgpXG4gICAgfSBlbHNlIGlmIChmb3JtYXQgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2RlbFZhbHVlID0gcXVpbGxFZGl0b3IuZ2V0Q29udGVudHMoKVxuICAgIH0gZWxzZSBpZiAoZm9ybWF0ID09PSAnanNvbicpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG1vZGVsVmFsdWUgPSBKU09OLnN0cmluZ2lmeShxdWlsbEVkaXRvci5nZXRDb250ZW50cygpKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBtb2RlbFZhbHVlID0gcXVpbGxFZGl0b3IuZ2V0VGV4dCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vZGVsVmFsdWVcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHZhbHVlU2V0dGVyID0gKHF1aWxsRWRpdG9yOiBRdWlsbFR5cGUsIHZhbHVlOiBhbnkpOiBhbnkgPT4ge1xuICAgIGNvbnN0IGZvcm1hdCA9IGdldEZvcm1hdCh0aGlzLmZvcm1hdCwgdGhpcy5zZXJ2aWNlLmNvbmZpZy5mb3JtYXQpXG4gICAgaWYgKGZvcm1hdCA9PT0gJ2h0bWwnKSB7XG4gICAgICBpZiAodGhpcy5zYW5pdGl6ZSkge1xuICAgICAgICB2YWx1ZSA9IHRoaXMuZG9tU2FuaXRpemVyLnNhbml0aXplKFNlY3VyaXR5Q29udGV4dC5IVE1MLCB2YWx1ZSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBxdWlsbEVkaXRvci5jbGlwYm9hcmQuY29udmVydCh2YWx1ZSlcbiAgICB9IGVsc2UgaWYgKGZvcm1hdCA9PT0gJ2pzb24nKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh2YWx1ZSlcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIFt7IGluc2VydDogdmFsdWUgfV1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIGFzeW5jIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAoaXNQbGF0Zm9ybVNlcnZlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBRdWlsbCA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXRRdWlsbCgpXG5cbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICB0aGlzLmN1c3RvbVRvb2xiYXJQb3NpdGlvbiA9PT0gJ3RvcCcgPyAnYmVmb3JlZW5kJyA6ICdhZnRlcmJlZ2luJyxcbiAgICAgIHRoaXMucHJlc2VydmVXaGl0ZXNwYWNlID8gJzxwcmUgcXVpbGwtZWRpdG9yLWVsZW1lbnQ+PC9wcmU+JyA6ICc8ZGl2IHF1aWxsLWVkaXRvci1lbGVtZW50PjwvZGl2PidcbiAgICApXG5cbiAgICB0aGlzLmVkaXRvckVsZW0gPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJ1txdWlsbC1lZGl0b3ItZWxlbWVudF0nXG4gICAgKVxuXG4gICAgY29uc3QgdG9vbGJhckVsZW0gPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJ1txdWlsbC1lZGl0b3ItdG9vbGJhcl0nXG4gICAgKVxuICAgIGNvbnN0IG1vZHVsZXMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm1vZHVsZXMgfHwgdGhpcy5zZXJ2aWNlLmNvbmZpZy5tb2R1bGVzKVxuXG4gICAgaWYgKHRvb2xiYXJFbGVtKSB7XG4gICAgICBtb2R1bGVzLnRvb2xiYXIgPSB0b29sYmFyRWxlbVxuICAgIH0gZWxzZSBpZiAobW9kdWxlcy50b29sYmFyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG1vZHVsZXMudG9vbGJhciA9IGRlZmF1bHRNb2R1bGVzLnRvb2xiYXJcbiAgICB9XG5cbiAgICBsZXQgcGxhY2Vob2xkZXIgPSB0aGlzLnBsYWNlaG9sZGVyICE9PSB1bmRlZmluZWQgPyB0aGlzLnBsYWNlaG9sZGVyIDogdGhpcy5zZXJ2aWNlLmNvbmZpZy5wbGFjZWhvbGRlclxuICAgIGlmIChwbGFjZWhvbGRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBwbGFjZWhvbGRlciA9ICdJbnNlcnQgdGV4dCBoZXJlIC4uLidcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdHlsZXMpIHtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuc3R5bGVzKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWRpdG9yRWxlbSwga2V5LCB0aGlzLnN0eWxlc1trZXldKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jbGFzc2VzKSB7XG4gICAgICB0aGlzLmFkZENsYXNzZXModGhpcy5jbGFzc2VzKVxuICAgIH1cblxuICAgIHRoaXMuY3VzdG9tT3B0aW9ucy5mb3JFYWNoKChjdXN0b21PcHRpb24pID0+IHtcbiAgICAgIGNvbnN0IG5ld0N1c3RvbU9wdGlvbiA9IFF1aWxsLmltcG9ydChjdXN0b21PcHRpb24uaW1wb3J0KVxuICAgICAgbmV3Q3VzdG9tT3B0aW9uLndoaXRlbGlzdCA9IGN1c3RvbU9wdGlvbi53aGl0ZWxpc3RcbiAgICAgIFF1aWxsLnJlZ2lzdGVyKG5ld0N1c3RvbU9wdGlvbiwgdHJ1ZSlcbiAgICB9KVxuXG4gICAgdGhpcy5jdXN0b21Nb2R1bGVzLmZvckVhY2goKHtpbXBsZW1lbnRhdGlvbiwgcGF0aH0pID0+IHtcbiAgICAgIFF1aWxsLnJlZ2lzdGVyKHBhdGgsIGltcGxlbWVudGF0aW9uKVxuICAgIH0pXG5cbiAgICBsZXQgYm91bmRzID0gdGhpcy5ib3VuZHMgJiYgdGhpcy5ib3VuZHMgPT09ICdzZWxmJyA/IHRoaXMuZWRpdG9yRWxlbSA6IHRoaXMuYm91bmRzXG4gICAgaWYgKCFib3VuZHMpIHtcbiAgICAgIGJvdW5kcyA9IHRoaXMuc2VydmljZS5jb25maWcuYm91bmRzID8gdGhpcy5zZXJ2aWNlLmNvbmZpZy5ib3VuZHMgOiB0aGlzLmRvYy5ib2R5XG4gICAgfVxuXG4gICAgbGV0IGRlYnVnID0gdGhpcy5kZWJ1Z1xuICAgIGlmICghZGVidWcgJiYgZGVidWcgIT09IGZhbHNlICYmIHRoaXMuc2VydmljZS5jb25maWcuZGVidWcpIHtcbiAgICAgIGRlYnVnID0gdGhpcy5zZXJ2aWNlLmNvbmZpZy5kZWJ1Z1xuICAgIH1cblxuICAgIGxldCByZWFkT25seSA9IHRoaXMucmVhZE9ubHlcbiAgICBpZiAoIXJlYWRPbmx5ICYmIHRoaXMucmVhZE9ubHkgIT09IGZhbHNlKSB7XG4gICAgICByZWFkT25seSA9IHRoaXMuc2VydmljZS5jb25maWcucmVhZE9ubHkgIT09IHVuZGVmaW5lZCA/IHRoaXMuc2VydmljZS5jb25maWcucmVhZE9ubHkgOiBmYWxzZVxuICAgIH1cblxuICAgIGxldCBzY3JvbGxpbmdDb250YWluZXIgPSB0aGlzLnNjcm9sbGluZ0NvbnRhaW5lclxuICAgIGlmICghc2Nyb2xsaW5nQ29udGFpbmVyICYmIHRoaXMuc2Nyb2xsaW5nQ29udGFpbmVyICE9PSBudWxsKSB7XG4gICAgICBzY3JvbGxpbmdDb250YWluZXIgPVxuICAgICAgICB0aGlzLnNlcnZpY2UuY29uZmlnLnNjcm9sbGluZ0NvbnRhaW5lciA9PT0gbnVsbFxuICAgICAgICAgIHx8wqB0aGlzLnNlcnZpY2UuY29uZmlnLnNjcm9sbGluZ0NvbnRhaW5lciA/IHRoaXMuc2VydmljZS5jb25maWcuc2Nyb2xsaW5nQ29udGFpbmVyIDogbnVsbFxuICAgIH1cblxuICAgIGxldCBmb3JtYXRzID0gdGhpcy5mb3JtYXRzXG4gICAgaWYgKCFmb3JtYXRzICYmIGZvcm1hdHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZm9ybWF0cyA9IHRoaXMuc2VydmljZS5jb25maWcuZm9ybWF0cyA/IFsuLi50aGlzLnNlcnZpY2UuY29uZmlnLmZvcm1hdHNdIDrCoCh0aGlzLnNlcnZpY2UuY29uZmlnLmZvcm1hdHMgPT09IG51bGwgPyBudWxsIDogdW5kZWZpbmVkKVxuICAgIH1cblxuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLnF1aWxsRWRpdG9yID0gbmV3IFF1aWxsKHRoaXMuZWRpdG9yRWxlbSwge1xuICAgICAgICBib3VuZHMsXG4gICAgICAgIGRlYnVnOiBkZWJ1ZyBhcyBhbnksXG4gICAgICAgIGZvcm1hdHM6IGZvcm1hdHMgYXMgYW55LFxuICAgICAgICBtb2R1bGVzLFxuICAgICAgICBwbGFjZWhvbGRlcixcbiAgICAgICAgcmVhZE9ubHksXG4gICAgICAgIHNjcm9sbGluZ0NvbnRhaW5lcjogc2Nyb2xsaW5nQ29udGFpbmVyIGFzIGFueSxcbiAgICAgICAgc3RyaWN0OiB0aGlzLnN0cmljdCxcbiAgICAgICAgdGhlbWU6IHRoaXMudGhlbWUgfHwgKHRoaXMuc2VydmljZS5jb25maWcudGhlbWUgPyB0aGlzLnNlcnZpY2UuY29uZmlnLnRoZW1lIDogJ3Nub3cnKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuY29udGVudCkge1xuICAgICAgY29uc3QgZm9ybWF0ID0gZ2V0Rm9ybWF0KHRoaXMuZm9ybWF0LCB0aGlzLnNlcnZpY2UuY29uZmlnLmZvcm1hdClcbiAgICAgIGlmIChmb3JtYXQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRoaXMucXVpbGxFZGl0b3Iuc2V0Q29udGVudHModGhpcy5jb250ZW50LCAnc2lsZW50JylcbiAgICAgIH0gZWxzZSBpZiAoZm9ybWF0ID09PSAndGV4dCcpIHtcbiAgICAgICAgdGhpcy5xdWlsbEVkaXRvci5zZXRUZXh0KHRoaXMuY29udGVudCwgJ3NpbGVudCcpXG4gICAgICB9IGVsc2UgaWYgKGZvcm1hdCA9PT0gJ2pzb24nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5xdWlsbEVkaXRvci5zZXRDb250ZW50cyhKU09OLnBhcnNlKHRoaXMuY29udGVudCksICdzaWxlbnQnKVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdGhpcy5xdWlsbEVkaXRvci5zZXRUZXh0KHRoaXMuY29udGVudCwgJ3NpbGVudCcpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLnNhbml0aXplKSB7XG4gICAgICAgICAgdGhpcy5jb250ZW50ID0gdGhpcy5kb21TYW5pdGl6ZXIuc2FuaXRpemUoU2VjdXJpdHlDb250ZXh0LkhUTUwsIHRoaXMuY29udGVudClcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZW50cyA9IHRoaXMucXVpbGxFZGl0b3IuY2xpcGJvYXJkLmNvbnZlcnQodGhpcy5jb250ZW50KVxuICAgICAgICB0aGlzLnF1aWxsRWRpdG9yLnNldENvbnRlbnRzKGNvbnRlbnRzLCAnc2lsZW50JylcbiAgICAgIH1cblxuICAgICAgdGhpcy5xdWlsbEVkaXRvci5nZXRNb2R1bGUoJ2hpc3RvcnknKS5jbGVhcigpXG4gICAgfVxuXG4gICAgLy8gaW5pdGlhbGl6ZSBkaXNhYmxlZCBzdGF0dXMgYmFzZWQgb24gdGhpcy5kaXNhYmxlZCBhcyBkZWZhdWx0IHZhbHVlXG4gICAgdGhpcy5zZXREaXNhYmxlZFN0YXRlKClcblxuICAgIC8vIHRyaWdnZXJlZCBpZiBzZWxlY3Rpb24gb3IgdGV4dCBjaGFuZ2VkXG4gICAgdGhpcy5xdWlsbEVkaXRvci5vbihcbiAgICAgICdlZGl0b3ItY2hhbmdlJyxcbiAgICAgIHRoaXMuZWRpdG9yQ2hhbmdlSGFuZGxlclxuICAgIClcblxuICAgIC8vIG1hcmsgbW9kZWwgYXMgdG91Y2hlZCBpZiBlZGl0b3IgbG9zdCBmb2N1c1xuICAgIHRoaXMucXVpbGxFZGl0b3Iub24oXG4gICAgICAnc2VsZWN0aW9uLWNoYW5nZScsXG4gICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZUhhbmRsZXJcbiAgICApXG5cbiAgICAvLyB1cGRhdGUgbW9kZWwgaWYgdGV4dCBjaGFuZ2VzXG4gICAgdGhpcy5xdWlsbEVkaXRvci5vbihcbiAgICAgICd0ZXh0LWNoYW5nZScsXG4gICAgICB0aGlzLnRleHRDaGFuZ2VIYW5kbGVyXG4gICAgKVxuXG4gICAgLy8gdHJpZ2dlciBjcmVhdGVkIGluIGEgdGltZW91dCB0byBhdm9pZCBjaGFuZ2VkIG1vZGVscyBhZnRlciBjaGVja2VkXG4gICAgLy8gaWYgeW91IGFyZSB1c2luZyB0aGUgZWRpdG9yIGFwaSBpbiBjcmVhdGVkIG91dHB1dCB0byBjaGFuZ2UgdGhlIGVkaXRvciBjb250ZW50XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5vblZhbGlkYXRvckNoYW5nZWQpIHtcbiAgICAgICAgdGhpcy5vblZhbGlkYXRvckNoYW5nZWQoKVxuICAgICAgfVxuICAgICAgdGhpcy5vbkVkaXRvckNyZWF0ZWQuZW1pdCh0aGlzLnF1aWxsRWRpdG9yKVxuICAgIH0pXG4gIH1cblxuICBzZWxlY3Rpb25DaGFuZ2VIYW5kbGVyID0gKHJhbmdlOiBSYW5nZSB8wqBudWxsLCBvbGRSYW5nZTogUmFuZ2UgfCBudWxsLCBzb3VyY2U6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHNob3VsZFRyaWdnZXJPbk1vZGVsVG91Y2hlZCA9ICFyYW5nZSAmJiAhIXRoaXMub25Nb2RlbFRvdWNoZWRcblxuICAgIC8vIG9ubHkgZW1pdCBjaGFuZ2VzIHdoZW4gdGhlcmUncyBhbnkgbGlzdGVuZXJcbiAgICBpZiAoIXRoaXMub25CbHVyLm9ic2VydmVycy5sZW5ndGggJiZcbiAgICAgICAgIXRoaXMub25Gb2N1cy5vYnNlcnZlcnMubGVuZ3RoICYmXG4gICAgICAgICF0aGlzLm9uU2VsZWN0aW9uQ2hhbmdlZC5vYnNlcnZlcnMubGVuZ3RoICYmXG4gICAgICAgICFzaG91bGRUcmlnZ2VyT25Nb2RlbFRvdWNoZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgaWYgKHJhbmdlID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMub25CbHVyLmVtaXQoe1xuICAgICAgICAgIGVkaXRvcjogdGhpcy5xdWlsbEVkaXRvcixcbiAgICAgICAgICBzb3VyY2VcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAob2xkUmFuZ2UgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5vbkZvY3VzLmVtaXQoe1xuICAgICAgICAgIGVkaXRvcjogdGhpcy5xdWlsbEVkaXRvcixcbiAgICAgICAgICBzb3VyY2VcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgdGhpcy5vblNlbGVjdGlvbkNoYW5nZWQuZW1pdCh7XG4gICAgICAgIGVkaXRvcjogdGhpcy5xdWlsbEVkaXRvcixcbiAgICAgICAgb2xkUmFuZ2UsXG4gICAgICAgIHJhbmdlLFxuICAgICAgICBzb3VyY2VcbiAgICAgIH0pXG5cbiAgICAgIGlmIChzaG91bGRUcmlnZ2VyT25Nb2RlbFRvdWNoZWQpIHtcbiAgICAgICAgdGhpcy5vbk1vZGVsVG91Y2hlZCgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHRleHRDaGFuZ2VIYW5kbGVyID0gKGRlbHRhOiBEZWx0YSwgb2xkRGVsdGE6IERlbHRhLCBzb3VyY2U6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgIC8vIG9ubHkgZW1pdCBjaGFuZ2VzIGVtaXR0ZWQgYnkgdXNlciBpbnRlcmFjdGlvbnNcbiAgICBjb25zdCB0ZXh0ID0gdGhpcy5xdWlsbEVkaXRvci5nZXRUZXh0KClcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5xdWlsbEVkaXRvci5nZXRDb250ZW50cygpXG5cbiAgICBsZXQgaHRtbDogc3RyaW5nIHwgbnVsbCA9IHRoaXMuZWRpdG9yRWxlbSEucXVlcnlTZWxlY3RvcignLnFsLWVkaXRvcicpIS5pbm5lckhUTUxcbiAgICBpZiAoaHRtbCA9PT0gJzxwPjxicj48L3A+JyB8fCBodG1sID09PSAnPGRpdj48YnI+PC9kaXY+Jykge1xuICAgICAgaHRtbCA9IG51bGxcbiAgICB9XG5cbiAgICBjb25zdCB0cmFja0NoYW5nZXMgPSB0aGlzLnRyYWNrQ2hhbmdlcyB8fMKgdGhpcy5zZXJ2aWNlLmNvbmZpZy50cmFja0NoYW5nZXNcbiAgICBjb25zdCBzaG91bGRUcmlnZ2VyT25Nb2RlbENoYW5nZSA9IChzb3VyY2UgPT09ICd1c2VyJyB8fCB0cmFja0NoYW5nZXMgJiYgdHJhY2tDaGFuZ2VzID09PSAnYWxsJykgJiYgISF0aGlzLm9uTW9kZWxDaGFuZ2VcblxuICAgIC8vIG9ubHkgZW1pdCBjaGFuZ2VzIHdoZW4gdGhlcmUncyBhbnkgbGlzdGVuZXJcbiAgICBpZiAoIXRoaXMub25Db250ZW50Q2hhbmdlZC5vYnNlcnZlcnMubGVuZ3RoICYmICFzaG91bGRUcmlnZ2VyT25Nb2RlbENoYW5nZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICBpZiAoc2hvdWxkVHJpZ2dlck9uTW9kZWxDaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKFxuICAgICAgICAgIHRoaXMudmFsdWVHZXR0ZXIodGhpcy5xdWlsbEVkaXRvciwgdGhpcy5lZGl0b3JFbGVtISlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB0aGlzLm9uQ29udGVudENoYW5nZWQuZW1pdCh7XG4gICAgICAgIGNvbnRlbnQsXG4gICAgICAgIGRlbHRhLFxuICAgICAgICBlZGl0b3I6IHRoaXMucXVpbGxFZGl0b3IsXG4gICAgICAgIGh0bWwsXG4gICAgICAgIG9sZERlbHRhLFxuICAgICAgICBzb3VyY2UsXG4gICAgICAgIHRleHRcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgZWRpdG9yQ2hhbmdlSGFuZGxlciA9IChldmVudDogJ3RleHQtY2hhbmdlJyB8wqAnc2VsZWN0aW9uLWNoYW5nZScsIGN1cnJlbnQ6IGFueSB8wqBSYW5nZSB8wqBudWxsLCBvbGQ6IGFueSB8wqBSYW5nZSB8IG51bGwsIHNvdXJjZTogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgLy8gb25seSBlbWl0IGNoYW5nZXMgd2hlbiB0aGVyZSdzIGFueSBsaXN0ZW5lclxuICAgIGlmICghdGhpcy5vbkVkaXRvckNoYW5nZWQub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gb25seSBlbWl0IGNoYW5nZXMgZW1pdHRlZCBieSB1c2VyIGludGVyYWN0aW9uc1xuICAgIGlmIChldmVudCA9PT0gJ3RleHQtY2hhbmdlJykge1xuICAgICAgY29uc3QgdGV4dCA9IHRoaXMucXVpbGxFZGl0b3IuZ2V0VGV4dCgpXG4gICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5xdWlsbEVkaXRvci5nZXRDb250ZW50cygpXG5cbiAgICAgIGxldCBodG1sOiBzdHJpbmcgfCBudWxsID0gdGhpcy5lZGl0b3JFbGVtIS5xdWVyeVNlbGVjdG9yKCcucWwtZWRpdG9yJykhLmlubmVySFRNTFxuICAgICAgaWYgKGh0bWwgPT09ICc8cD48YnI+PC9wPicgfHwgaHRtbCA9PT0gJzxkaXY+PGJyPjwvZGl2PicpIHtcbiAgICAgICAgaHRtbCA9IG51bGxcbiAgICAgIH1cblxuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMub25FZGl0b3JDaGFuZ2VkLmVtaXQoe1xuICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgZGVsdGE6IGN1cnJlbnQsXG4gICAgICAgICAgZWRpdG9yOiB0aGlzLnF1aWxsRWRpdG9yLFxuICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgb2xkRGVsdGE6IG9sZCxcbiAgICAgICAgICBzb3VyY2UsXG4gICAgICAgICAgdGV4dFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbkVkaXRvckNoYW5nZWQuZW1pdCh7XG4gICAgICAgIGVkaXRvcjogdGhpcy5xdWlsbEVkaXRvcixcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIG9sZFJhbmdlOiBvbGQsXG4gICAgICAgIHJhbmdlOiBjdXJyZW50LFxuICAgICAgICBzb3VyY2VcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMucXVpbGxFZGl0b3IpIHtcbiAgICAgIHRoaXMucXVpbGxFZGl0b3Iub2ZmKCdzZWxlY3Rpb24tY2hhbmdlJywgdGhpcy5zZWxlY3Rpb25DaGFuZ2VIYW5kbGVyKVxuICAgICAgdGhpcy5xdWlsbEVkaXRvci5vZmYoJ3RleHQtY2hhbmdlJywgdGhpcy50ZXh0Q2hhbmdlSGFuZGxlcilcbiAgICAgIHRoaXMucXVpbGxFZGl0b3Iub2ZmKCdlZGl0b3ItY2hhbmdlJywgdGhpcy5lZGl0b3JDaGFuZ2VIYW5kbGVyKVxuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucXVpbGxFZGl0b3IpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpuby1zdHJpbmctbGl0ZXJhbFxuICAgIGlmIChjaGFuZ2VzWydyZWFkT25seSddKSB7XG4gICAgICB0aGlzLnF1aWxsRWRpdG9yLmVuYWJsZSghY2hhbmdlc1sncmVhZE9ubHknXS5jdXJyZW50VmFsdWUpXG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWydwbGFjZWhvbGRlciddKSB7XG4gICAgICB0aGlzLnF1aWxsRWRpdG9yLnJvb3QuZGF0YXNldC5wbGFjZWhvbGRlciA9XG4gICAgICAgIGNoYW5nZXNbJ3BsYWNlaG9sZGVyJ10uY3VycmVudFZhbHVlXG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWydzdHlsZXMnXSkge1xuICAgICAgY29uc3QgY3VycmVudFN0eWxpbmcgPSBjaGFuZ2VzWydzdHlsZXMnXS5jdXJyZW50VmFsdWVcbiAgICAgIGNvbnN0IHByZXZpb3VzU3R5bGluZyA9IGNoYW5nZXNbJ3N0eWxlcyddLnByZXZpb3VzVmFsdWVcblxuICAgICAgaWYgKHByZXZpb3VzU3R5bGluZykge1xuICAgICAgICBPYmplY3Qua2V5cyhwcmV2aW91c1N0eWxpbmcpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmVkaXRvckVsZW0sIGtleSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50U3R5bGluZykge1xuICAgICAgICBPYmplY3Qua2V5cyhjdXJyZW50U3R5bGluZykuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWRpdG9yRWxlbSwga2V5LCB0aGlzLnN0eWxlc1trZXldKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY2hhbmdlc1snY2xhc3NlcyddKSB7XG4gICAgICBjb25zdCBjdXJyZW50Q2xhc3NlcyA9IGNoYW5nZXNbJ2NsYXNzZXMnXS5jdXJyZW50VmFsdWVcbiAgICAgIGNvbnN0IHByZXZpb3VzQ2xhc3NlcyA9IGNoYW5nZXNbJ2NsYXNzZXMnXS5wcmV2aW91c1ZhbHVlXG5cbiAgICAgIGlmIChwcmV2aW91c0NsYXNzZXMpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDbGFzc2VzKHByZXZpb3VzQ2xhc3NlcylcbiAgICAgIH1cblxuICAgICAgaWYgKGN1cnJlbnRDbGFzc2VzKSB7XG4gICAgICAgIHRoaXMuYWRkQ2xhc3NlcyhjdXJyZW50Q2xhc3NlcylcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdHNsaW50OmVuYWJsZTpuby1zdHJpbmctbGl0ZXJhbFxuICB9XG5cbiAgYWRkQ2xhc3NlcyhjbGFzc0xpc3Q6IHN0cmluZyk6IHZvaWQge1xuICAgIFF1aWxsRWRpdG9yQmFzZS5ub3JtYWxpemVDbGFzc05hbWVzKGNsYXNzTGlzdCkuZm9yRWFjaCgoYzogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWRpdG9yRWxlbSwgYylcbiAgICB9KVxuICB9XG5cbiAgcmVtb3ZlQ2xhc3NlcyhjbGFzc0xpc3Q6IHN0cmluZyk6IHZvaWQge1xuICAgIFF1aWxsRWRpdG9yQmFzZS5ub3JtYWxpemVDbGFzc05hbWVzKGNsYXNzTGlzdCkuZm9yRWFjaCgoYzogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWRpdG9yRWxlbSwgYylcbiAgICB9KVxuICB9XG5cbiAgd3JpdGVWYWx1ZShjdXJyZW50VmFsdWU6IGFueSkge1xuICAgIHRoaXMuY29udGVudCA9IGN1cnJlbnRWYWx1ZVxuICAgIGNvbnN0IGZvcm1hdCA9IGdldEZvcm1hdCh0aGlzLmZvcm1hdCwgdGhpcy5zZXJ2aWNlLmNvbmZpZy5mb3JtYXQpXG5cbiAgICBpZiAodGhpcy5xdWlsbEVkaXRvcikge1xuICAgICAgaWYgKGN1cnJlbnRWYWx1ZSkge1xuICAgICAgICBpZiAoZm9ybWF0ID09PSAndGV4dCcpIHtcbiAgICAgICAgICB0aGlzLnF1aWxsRWRpdG9yLnNldFRleHQoY3VycmVudFZhbHVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucXVpbGxFZGl0b3Iuc2V0Q29udGVudHMoXG4gICAgICAgICAgICB0aGlzLnZhbHVlU2V0dGVyKHRoaXMucXVpbGxFZGl0b3IsIHRoaXMuY29udGVudClcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB0aGlzLnF1aWxsRWRpdG9yLnNldFRleHQoJycpXG4gICAgfVxuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuID0gdGhpcy5kaXNhYmxlZCk6IHZvaWQge1xuICAgIC8vIHN0b3JlIGluaXRpYWwgdmFsdWUgdG8gc2V0IGFwcHJvcHJpYXRlIGRpc2FibGVkIHN0YXR1cyBhZnRlciBWaWV3SW5pdFxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkXG4gICAgaWYgKHRoaXMucXVpbGxFZGl0b3IpIHtcbiAgICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICAgIHRoaXMucXVpbGxFZGl0b3IuZGlzYWJsZSgpXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCF0aGlzLnJlYWRPbmx5KSB7XG4gICAgICAgICAgdGhpcy5xdWlsbEVkaXRvci5lbmFibGUoKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChtb2RlbFZhbHVlOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmblxuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxUb3VjaGVkID0gZm5cbiAgfVxuXG4gIHJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46ICgpID0+IHZvaWQpIHtcbiAgICB0aGlzLm9uVmFsaWRhdG9yQ2hhbmdlZCA9IGZuXG4gIH1cblxuICB2YWxpZGF0ZSgpIHtcbiAgICBpZiAoIXRoaXMucXVpbGxFZGl0b3IpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgY29uc3QgZXJyOiB7XG4gICAgICBtaW5MZW5ndGhFcnJvcj86IHtcbiAgICAgICAgZ2l2ZW46IG51bWJlclxuICAgICAgICBtaW5MZW5ndGg6IG51bWJlclxuICAgICAgfVxuICAgICAgbWF4TGVuZ3RoRXJyb3I/OiB7XG4gICAgICAgIGdpdmVuOiBudW1iZXJcbiAgICAgICAgbWF4TGVuZ3RoOiBudW1iZXJcbiAgICAgIH1cbiAgICAgIHJlcXVpcmVkRXJyb3I/OiB7IGVtcHR5OiBib29sZWFuIH1cbiAgICB9ID0ge31cbiAgICBsZXQgdmFsaWQgPSB0cnVlXG5cbiAgICBjb25zdCB0ZXh0ID0gdGhpcy5xdWlsbEVkaXRvci5nZXRUZXh0KClcbiAgICAvLyB0cmltIHRleHQgaWYgd2FudGVkICsgaGFuZGxlIHNwZWNpYWwgY2FzZSB0aGF0IGFuIGVtcHR5IGVkaXRvciBjb250YWlucyBhIG5ldyBsaW5lXG4gICAgY29uc3QgdGV4dExlbmd0aCA9IHRoaXMudHJpbU9uVmFsaWRhdGlvbiA/IHRleHQudHJpbSgpLmxlbmd0aCA6ICh0ZXh0Lmxlbmd0aCA9PT0gMSAmJiB0ZXh0LnRyaW0oKS5sZW5ndGggPT09IDAgPyAwIDogdGV4dC5sZW5ndGggLSAxKVxuXG4gICAgaWYgKHRoaXMubWluTGVuZ3RoICYmIHRleHRMZW5ndGggJiYgdGV4dExlbmd0aCA8IHRoaXMubWluTGVuZ3RoKSB7XG4gICAgICBlcnIubWluTGVuZ3RoRXJyb3IgPSB7XG4gICAgICAgIGdpdmVuOiB0ZXh0TGVuZ3RoLFxuICAgICAgICBtaW5MZW5ndGg6IHRoaXMubWluTGVuZ3RoXG4gICAgICB9XG5cbiAgICAgIHZhbGlkID0gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tYXhMZW5ndGggJiYgdGV4dExlbmd0aCA+IHRoaXMubWF4TGVuZ3RoKSB7XG4gICAgICBlcnIubWF4TGVuZ3RoRXJyb3IgPSB7XG4gICAgICAgIGdpdmVuOiB0ZXh0TGVuZ3RoLFxuICAgICAgICBtYXhMZW5ndGg6IHRoaXMubWF4TGVuZ3RoXG4gICAgICB9XG5cbiAgICAgIHZhbGlkID0gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAodGhpcy5yZXF1aXJlZCAmJiAhdGV4dExlbmd0aCkge1xuICAgICAgZXJyLnJlcXVpcmVkRXJyb3IgPSB7XG4gICAgICAgIGVtcHR5OiB0cnVlXG4gICAgICB9XG5cbiAgICAgIHZhbGlkID0gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWQgPyBudWxsIDogZXJyXG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVzZS1iZWZvcmUtZGVmaW5lXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBRdWlsbEVkaXRvckNvbXBvbmVudClcbiAgICB9LFxuICAgIHtcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFF1aWxsRWRpdG9yQ29tcG9uZW50KVxuICAgIH1cbiAgXSxcbiAgc2VsZWN0b3I6ICdxdWlsbC1lZGl0b3InLFxuICB0ZW1wbGF0ZTogYFxuICA8bmctY29udGVudCBzZWxlY3Q9XCJbcXVpbGwtZWRpdG9yLXRvb2xiYXJdXCI+PC9uZy1jb250ZW50PlxuYFxufSlcbmV4cG9ydCBjbGFzcyBRdWlsbEVkaXRvckNvbXBvbmVudCBleHRlbmRzIFF1aWxsRWRpdG9yQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChFbGVtZW50UmVmKSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIEBJbmplY3QoRG9tU2FuaXRpemVyKSBkb21TYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBkb2M6IGFueSxcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBhbnksXG4gICAgQEluamVjdChSZW5kZXJlcjIpIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQEluamVjdChOZ1pvbmUpIHpvbmU6IE5nWm9uZSxcbiAgICBASW5qZWN0KFF1aWxsU2VydmljZSkgc2VydmljZTogUXVpbGxTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKFxuICAgICAgZWxlbWVudFJlZixcbiAgICAgIGRvbVNhbml0aXplcixcbiAgICAgIGRvYyxcbiAgICAgIHBsYXRmb3JtSWQsXG4gICAgICByZW5kZXJlcixcbiAgICAgIHpvbmUsXG4gICAgICBzZXJ2aWNlXG4gICAgKVxuICB9XG5cbn1cbiJdfQ==