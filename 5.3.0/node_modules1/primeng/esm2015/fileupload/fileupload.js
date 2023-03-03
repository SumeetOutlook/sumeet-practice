import { NgModule, Component, Input, Output, EventEmitter, ContentChildren, ViewChild, ElementRef, NgZone, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { ProgressBarModule } from 'primeng/progressbar';
import { DomHandler } from 'primeng/dom';
import { PrimeTemplate, SharedModule } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import { HttpClient, HttpEventType } from "@angular/common/http";
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/platform-browser';
import * as ɵngcc2 from '@angular/common/http';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from 'primeng/ripple';
import * as ɵngcc5 from 'primeng/messages';
import * as ɵngcc6 from 'primeng/button';
import * as ɵngcc7 from 'primeng/progressbar';

const _c0 = ["advancedfileinput"];
const _c1 = ["basicfileinput"];
const _c2 = ["content"];
function FileUpload_div_0_p_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-button", 17);
    ɵngcc0.ɵɵlistener("onClick", function FileUpload_div_0_p_button_8_Template_p_button_onClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r10 = ɵngcc0.ɵɵnextContext(2); return ctx_r10.upload(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("label", ctx_r3.uploadLabel)("icon", ctx_r3.uploadIcon)("disabled", !ctx_r3.hasFiles() || ctx_r3.isFileLimitExceeded());
} }
function FileUpload_div_0_p_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-button", 17);
    ɵngcc0.ɵɵlistener("onClick", function FileUpload_div_0_p_button_9_Template_p_button_onClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r12 = ɵngcc0.ɵɵnextContext(2); return ctx_r12.clear(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("label", ctx_r4.cancelLabel)("icon", ctx_r4.cancelIcon)("disabled", !ctx_r4.hasFiles() || ctx_r4.uploading);
} }
function FileUpload_div_0_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function FileUpload_div_0_p_progressBar_13_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "p-progressBar", 18);
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("value", ctx_r7.progress)("showValue", false);
} }
function FileUpload_div_0_div_15_div_1_div_1_img_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "img", 25);
} if (rf & 2) {
    const file_r17 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r19 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵproperty("src", file_r17.objectURL, ɵngcc0.ɵɵsanitizeUrl)("width", ctx_r19.previewWidth);
} }
function FileUpload_div_0_div_15_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 22);
    ɵngcc0.ɵɵelementStart(1, "div");
    ɵngcc0.ɵɵtemplate(2, FileUpload_div_0_div_15_div_1_div_1_img_2_Template, 1, 2, "img", 23);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "div");
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "div");
    ɵngcc0.ɵɵtext(6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(7, "div");
    ɵngcc0.ɵɵelementStart(8, "button", 24);
    ɵngcc0.ɵɵlistener("click", function FileUpload_div_0_div_15_div_1_div_1_Template_button_click_8_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); const i_r18 = ctx.index; const ctx_r21 = ɵngcc0.ɵɵnextContext(4); return ctx_r21.remove($event, i_r18); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const file_r17 = ctx.$implicit;
    const ctx_r16 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r16.isImage(file_r17));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(file_r17.name);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r16.formatSize(file_r17.size));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("disabled", ctx_r16.uploading);
} }
function FileUpload_div_0_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, FileUpload_div_0_div_15_div_1_div_1_Template, 9, 4, "div", 21);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r14.files);
} }
function FileUpload_div_0_div_15_div_2_ng_template_1_Template(rf, ctx) { }
function FileUpload_div_0_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, FileUpload_div_0_div_15_div_2_ng_template_1_Template, 0, 0, "ng-template", 26);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r15.files)("ngForTemplate", ctx_r15.fileTemplate);
} }
function FileUpload_div_0_div_15_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 19);
    ɵngcc0.ɵɵtemplate(1, FileUpload_div_0_div_15_div_1_Template, 2, 1, "div", 20);
    ɵngcc0.ɵɵtemplate(2, FileUpload_div_0_div_15_div_2_Template, 2, 2, "div", 20);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r8.fileTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r8.fileTemplate);
} }
function FileUpload_div_0_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c3 = function (a0, a1) { return { "p-focus": a0, "p-disabled": a1 }; };
const _c4 = function (a0) { return { $implicit: a0 }; };
function FileUpload_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r25 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵelementStart(1, "div", 3);
    ɵngcc0.ɵɵelementStart(2, "span", 4);
    ɵngcc0.ɵɵlistener("focus", function FileUpload_div_0_Template_span_focus_2_listener() { ɵngcc0.ɵɵrestoreView(_r25); const ctx_r24 = ɵngcc0.ɵɵnextContext(); return ctx_r24.onFocus(); })("blur", function FileUpload_div_0_Template_span_blur_2_listener() { ɵngcc0.ɵɵrestoreView(_r25); const ctx_r26 = ɵngcc0.ɵɵnextContext(); return ctx_r26.onBlur(); })("click", function FileUpload_div_0_Template_span_click_2_listener() { ɵngcc0.ɵɵrestoreView(_r25); const ctx_r27 = ɵngcc0.ɵɵnextContext(); return ctx_r27.choose(); })("keydown.enter", function FileUpload_div_0_Template_span_keydown_enter_2_listener() { ɵngcc0.ɵɵrestoreView(_r25); const ctx_r28 = ɵngcc0.ɵɵnextContext(); return ctx_r28.choose(); });
    ɵngcc0.ɵɵelementStart(3, "input", 5, 6);
    ɵngcc0.ɵɵlistener("change", function FileUpload_div_0_Template_input_change_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r25); const ctx_r29 = ɵngcc0.ɵɵnextContext(); return ctx_r29.onFileSelect($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(5, "span", 7);
    ɵngcc0.ɵɵelementStart(6, "span", 8);
    ɵngcc0.ɵɵtext(7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(8, FileUpload_div_0_p_button_8_Template, 1, 3, "p-button", 9);
    ɵngcc0.ɵɵtemplate(9, FileUpload_div_0_p_button_9_Template, 1, 3, "p-button", 9);
    ɵngcc0.ɵɵtemplate(10, FileUpload_div_0_ng_container_10_Template, 1, 0, "ng-container", 10);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(11, "div", 11, 12);
    ɵngcc0.ɵɵlistener("dragenter", function FileUpload_div_0_Template_div_dragenter_11_listener($event) { ɵngcc0.ɵɵrestoreView(_r25); const ctx_r30 = ɵngcc0.ɵɵnextContext(); return ctx_r30.onDragEnter($event); })("dragleave", function FileUpload_div_0_Template_div_dragleave_11_listener($event) { ɵngcc0.ɵɵrestoreView(_r25); const ctx_r31 = ɵngcc0.ɵɵnextContext(); return ctx_r31.onDragLeave($event); })("drop", function FileUpload_div_0_Template_div_drop_11_listener($event) { ɵngcc0.ɵɵrestoreView(_r25); const ctx_r32 = ɵngcc0.ɵɵnextContext(); return ctx_r32.onDrop($event); });
    ɵngcc0.ɵɵtemplate(13, FileUpload_div_0_p_progressBar_13_Template, 1, 2, "p-progressBar", 13);
    ɵngcc0.ɵɵelement(14, "p-messages", 14);
    ɵngcc0.ɵɵtemplate(15, FileUpload_div_0_div_15_Template, 3, 2, "div", 15);
    ɵngcc0.ɵɵtemplate(16, FileUpload_div_0_ng_container_16_Template, 1, 0, "ng-container", 16);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r0.styleClass);
    ɵngcc0.ɵɵproperty("ngClass", "p-fileupload p-fileupload-advanced p-component")("ngStyle", ctx_r0.style);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(22, _c3, ctx_r0.focus, ctx_r0.disabled || ctx_r0.isChooseDisabled()));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("multiple", ctx_r0.multiple)("accept", ctx_r0.accept)("disabled", ctx_r0.disabled || ctx_r0.isChooseDisabled());
    ɵngcc0.ɵɵattribute("title", "");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵclassMap(ctx_r0.chooseIcon);
    ɵngcc0.ɵɵproperty("ngClass", "p-button-icon p-button-icon-left");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.chooseLabel);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.auto && ctx_r0.showUploadButton);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.auto && ctx_r0.showCancelButton);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.toolbarTemplate);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.hasFiles());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("value", ctx_r0.msgs)("enableService", false);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.hasFiles());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.contentTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(25, _c4, ctx_r0.files));
} }
function FileUpload_div_1_input_6_Template(rf, ctx) { if (rf & 1) {
    const _r36 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "input", 31, 32);
    ɵngcc0.ɵɵlistener("change", function FileUpload_div_1_input_6_Template_input_change_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r36); const ctx_r35 = ɵngcc0.ɵɵnextContext(2); return ctx_r35.onFileSelect($event); })("focus", function FileUpload_div_1_input_6_Template_input_focus_0_listener() { ɵngcc0.ɵɵrestoreView(_r36); const ctx_r37 = ɵngcc0.ɵɵnextContext(2); return ctx_r37.onFocus(); })("blur", function FileUpload_div_1_input_6_Template_input_blur_0_listener() { ɵngcc0.ɵɵrestoreView(_r36); const ctx_r38 = ɵngcc0.ɵɵnextContext(2); return ctx_r38.onBlur(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r33 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("accept", ctx_r33.accept)("multiple", ctx_r33.multiple)("disabled", ctx_r33.disabled);
} }
const _c5 = function (a1, a2, a3) { return { "p-button p-component p-fileupload-choose": true, "p-fil(eupload-choose-selected": a1, "p-focus": a2, "p-disabled": a3 }; };
function FileUpload_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r40 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 27);
    ɵngcc0.ɵɵelement(1, "p-messages", 14);
    ɵngcc0.ɵɵelementStart(2, "span", 28);
    ɵngcc0.ɵɵlistener("mouseup", function FileUpload_div_1_Template_span_mouseup_2_listener() { ɵngcc0.ɵɵrestoreView(_r40); const ctx_r39 = ɵngcc0.ɵɵnextContext(); return ctx_r39.onBasicUploaderClick(); })("keydown", function FileUpload_div_1_Template_span_keydown_2_listener() { ɵngcc0.ɵɵrestoreView(_r40); const ctx_r41 = ɵngcc0.ɵɵnextContext(); return ctx_r41.onBasicUploaderClick(); });
    ɵngcc0.ɵɵelement(3, "span", 29);
    ɵngcc0.ɵɵelementStart(4, "span", 8);
    ɵngcc0.ɵɵtext(5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(6, FileUpload_div_1_input_6_Template, 2, 3, "input", 30);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("value", ctx_r1.msgs)("enableService", false);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap(ctx_r1.styleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(9, _c5, ctx_r1.hasFiles(), ctx_r1.focus, ctx_r1.disabled))("ngStyle", ctx_r1.style);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r1.hasFiles() && !ctx_r1.auto ? ctx_r1.uploadIcon : ctx_r1.chooseIcon);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.auto ? ctx_r1.chooseLabel : ctx_r1.hasFiles() ? ctx_r1.files[0].name : ctx_r1.chooseLabel);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r1.hasFiles());
} }
export class FileUpload {
    constructor(el, sanitizer, zone, http, cd) {
        this.el = el;
        this.sanitizer = sanitizer;
        this.zone = zone;
        this.http = http;
        this.cd = cd;
        this.method = 'POST';
        this.invalidFileSizeMessageSummary = '{0}: Invalid file size, ';
        this.invalidFileSizeMessageDetail = 'maximum upload size is {0}.';
        this.invalidFileTypeMessageSummary = '{0}: Invalid file type, ';
        this.invalidFileTypeMessageDetail = 'allowed file types: {0}.';
        this.invalidFileLimitMessageDetail = 'limit is {0} at most.';
        this.invalidFileLimitMessageSummary = 'Maximum number of files exceeded, ';
        this.previewWidth = 50;
        this.chooseLabel = 'Choose';
        this.uploadLabel = 'Upload';
        this.cancelLabel = 'Cancel';
        this.chooseIcon = 'pi pi-plus';
        this.uploadIcon = 'pi pi-upload';
        this.cancelIcon = 'pi pi-times';
        this.showUploadButton = true;
        this.showCancelButton = true;
        this.mode = 'advanced';
        this.onBeforeUpload = new EventEmitter();
        this.onSend = new EventEmitter();
        this.onUpload = new EventEmitter();
        this.onError = new EventEmitter();
        this.onClear = new EventEmitter();
        this.onRemove = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onProgress = new EventEmitter();
        this.uploadHandler = new EventEmitter();
        this._files = [];
        this.progress = 0;
        this.uploadedFileCount = 0;
    }
    set files(files) {
        this._files = [];
        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            if (this.validate(file)) {
                if (this.isImage(file)) {
                    file.objectURL = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(files[i])));
                }
                this._files.push(files[i]);
            }
        }
    }
    get files() {
        return this._files;
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'file':
                    this.fileTemplate = item.template;
                    break;
                case 'content':
                    this.contentTemplate = item.template;
                    break;
                case 'toolbar':
                    this.toolbarTemplate = item.template;
                    break;
                default:
                    this.fileTemplate = item.template;
                    break;
            }
        });
    }
    ngAfterViewInit() {
        if (this.mode === 'advanced') {
            this.zone.runOutsideAngular(() => {
                if (this.content)
                    this.content.nativeElement.addEventListener('dragover', this.onDragOver.bind(this));
            });
        }
    }
    choose() {
        this.advancedFileInput.nativeElement.click();
    }
    onFileSelect(event) {
        if (event.type !== 'drop' && this.isIE11() && this.duplicateIEEvent) {
            this.duplicateIEEvent = false;
            return;
        }
        this.msgs = [];
        if (!this.multiple) {
            this.files = [];
        }
        let files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            if (!this.isFileSelected(file)) {
                if (this.validate(file)) {
                    if (this.isImage(file)) {
                        file.objectURL = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(files[i])));
                    }
                    this.files.push(files[i]);
                }
            }
        }
        this.onSelect.emit({ originalEvent: event, files: files, currentFiles: this.files });
        if (this.fileLimit && this.mode == "advanced") {
            this.checkFileLimit();
        }
        if (this.hasFiles() && this.auto && (!(this.mode === "advanced") || !this.isFileLimitExceeded())) {
            this.upload();
        }
        if (event.type !== 'drop' && this.isIE11()) {
            this.clearIEInput();
        }
        else {
            this.clearInputElement();
        }
    }
    isFileSelected(file) {
        for (let sFile of this.files) {
            if ((sFile.name + sFile.type + sFile.size) === (file.name + file.type + file.size)) {
                return true;
            }
        }
        return false;
    }
    isIE11() {
        return !!window['MSInputMethodContext'] && !!document['documentMode'];
    }
    validate(file) {
        if (this.accept && !this.isFileTypeValid(file)) {
            this.msgs.push({
                severity: 'error',
                summary: this.invalidFileTypeMessageSummary.replace('{0}', file.name),
                detail: this.invalidFileTypeMessageDetail.replace('{0}', this.accept)
            });
            return false;
        }
        if (this.maxFileSize && file.size > this.maxFileSize) {
            this.msgs.push({
                severity: 'error',
                summary: this.invalidFileSizeMessageSummary.replace('{0}', file.name),
                detail: this.invalidFileSizeMessageDetail.replace('{0}', this.formatSize(this.maxFileSize))
            });
            return false;
        }
        return true;
    }
    isFileTypeValid(file) {
        let acceptableTypes = this.accept.split(',').map(type => type.trim());
        for (let type of acceptableTypes) {
            let acceptable = this.isWildcard(type) ? this.getTypeClass(file.type) === this.getTypeClass(type)
                : file.type == type || this.getFileExtension(file).toLowerCase() === type.toLowerCase();
            if (acceptable) {
                return true;
            }
        }
        return false;
    }
    getTypeClass(fileType) {
        return fileType.substring(0, fileType.indexOf('/'));
    }
    isWildcard(fileType) {
        return fileType.indexOf('*') !== -1;
    }
    getFileExtension(file) {
        return '.' + file.name.split('.').pop();
    }
    isImage(file) {
        return /^image\//.test(file.type);
    }
    onImageLoad(img) {
        window.URL.revokeObjectURL(img.src);
    }
    upload() {
        if (this.customUpload) {
            if (this.fileLimit) {
                this.uploadedFileCount += this.files.length;
            }
            this.uploadHandler.emit({
                files: this.files
            });
            this.cd.markForCheck();
        }
        else {
            this.uploading = true;
            this.msgs = [];
            let formData = new FormData();
            this.onBeforeUpload.emit({
                'formData': formData
            });
            for (let i = 0; i < this.files.length; i++) {
                formData.append(this.name, this.files[i], this.files[i].name);
            }
            this.http.post(this.url, formData, {
                headers: this.headers, reportProgress: true, observe: 'events', withCredentials: this.withCredentials
            }).subscribe((event) => {
                switch (event.type) {
                    case HttpEventType.Sent:
                        this.onSend.emit({
                            originalEvent: event,
                            'formData': formData
                        });
                        break;
                    case HttpEventType.Response:
                        this.uploading = false;
                        this.progress = 0;
                        if (event['status'] >= 200 && event['status'] < 300) {
                            if (this.fileLimit) {
                                this.uploadedFileCount += this.files.length;
                            }
                            this.onUpload.emit({ originalEvent: event, files: this.files });
                        }
                        else {
                            this.onError.emit({ files: this.files });
                        }
                        this.clear();
                        break;
                    case HttpEventType.UploadProgress: {
                        if (event['loaded']) {
                            this.progress = Math.round((event['loaded'] * 100) / event['total']);
                        }
                        this.onProgress.emit({ originalEvent: event, progress: this.progress });
                        break;
                    }
                }
                this.cd.markForCheck();
            }, error => {
                this.uploading = false;
                this.onError.emit({ files: this.files, error: error });
            });
        }
    }
    clear() {
        this.files = [];
        this.onClear.emit();
        this.clearInputElement();
        this.cd.markForCheck();
    }
    remove(event, index) {
        this.clearInputElement();
        this.onRemove.emit({ originalEvent: event, file: this.files[index] });
        this.files.splice(index, 1);
    }
    isFileLimitExceeded() {
        if (this.fileLimit && this.fileLimit <= this.files.length + this.uploadedFileCount && this.focus) {
            this.focus = false;
        }
        return this.fileLimit && this.fileLimit < this.files.length + this.uploadedFileCount;
    }
    isChooseDisabled() {
        return this.fileLimit && this.fileLimit <= this.files.length + this.uploadedFileCount;
    }
    checkFileLimit() {
        if (this.isFileLimitExceeded()) {
            this.msgs.push({
                severity: 'error',
                summary: this.invalidFileLimitMessageSummary.replace('{0}', this.fileLimit.toString()),
                detail: this.invalidFileLimitMessageDetail.replace('{0}', this.fileLimit.toString())
            });
        }
    }
    clearInputElement() {
        if (this.advancedFileInput && this.advancedFileInput.nativeElement) {
            this.advancedFileInput.nativeElement.value = '';
        }
        if (this.basicFileInput && this.basicFileInput.nativeElement) {
            this.basicFileInput.nativeElement.value = '';
        }
    }
    clearIEInput() {
        if (this.advancedFileInput && this.advancedFileInput.nativeElement) {
            this.duplicateIEEvent = true; //IE11 fix to prevent onFileChange trigger again
            this.advancedFileInput.nativeElement.value = '';
        }
    }
    hasFiles() {
        return this.files && this.files.length > 0;
    }
    onDragEnter(e) {
        if (!this.disabled) {
            e.stopPropagation();
            e.preventDefault();
        }
    }
    onDragOver(e) {
        if (!this.disabled) {
            DomHandler.addClass(this.content.nativeElement, 'p-fileupload-highlight');
            this.dragHighlight = true;
            e.stopPropagation();
            e.preventDefault();
        }
    }
    onDragLeave(event) {
        if (!this.disabled) {
            DomHandler.removeClass(this.content.nativeElement, 'p-fileupload-highlight');
        }
    }
    onDrop(event) {
        if (!this.disabled) {
            DomHandler.removeClass(this.content.nativeElement, 'p-fileupload-highlight');
            event.stopPropagation();
            event.preventDefault();
            let files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
            let allowDrop = this.multiple || (files && files.length === 1);
            if (allowDrop) {
                this.onFileSelect(event);
            }
        }
    }
    onFocus() {
        this.focus = true;
    }
    onBlur() {
        this.focus = false;
    }
    formatSize(bytes) {
        if (bytes == 0) {
            return '0 B';
        }
        let k = 1024, dm = 3, sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
    onBasicUploaderClick() {
        if (this.hasFiles())
            this.upload();
        else
            this.basicFileInput.nativeElement.click();
    }
    getBlockableElement() {
        return this.el.nativeElement.children[0];
    }
    ngOnDestroy() {
        if (this.content && this.content.nativeElement) {
            this.content.nativeElement.removeEventListener('dragover', this.onDragOver);
        }
    }
}
FileUpload.ɵfac = function FileUpload_Factory(t) { return new (t || FileUpload)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DomSanitizer), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.HttpClient), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
FileUpload.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: FileUpload, selectors: [["p-fileUpload"]], contentQueries: function FileUpload_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function FileUpload_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
        ɵngcc0.ɵɵviewQuery(_c2, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.advancedFileInput = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.basicFileInput = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.content = _t.first);
    } }, inputs: { method: "method", invalidFileSizeMessageSummary: "invalidFileSizeMessageSummary", invalidFileSizeMessageDetail: "invalidFileSizeMessageDetail", invalidFileTypeMessageSummary: "invalidFileTypeMessageSummary", invalidFileTypeMessageDetail: "invalidFileTypeMessageDetail", invalidFileLimitMessageDetail: "invalidFileLimitMessageDetail", invalidFileLimitMessageSummary: "invalidFileLimitMessageSummary", previewWidth: "previewWidth", chooseLabel: "chooseLabel", uploadLabel: "uploadLabel", cancelLabel: "cancelLabel", chooseIcon: "chooseIcon", uploadIcon: "uploadIcon", cancelIcon: "cancelIcon", showUploadButton: "showUploadButton", showCancelButton: "showCancelButton", mode: "mode", files: "files", name: "name", url: "url", multiple: "multiple", accept: "accept", disabled: "disabled", auto: "auto", withCredentials: "withCredentials", maxFileSize: "maxFileSize", style: "style", styleClass: "styleClass", headers: "headers", customUpload: "customUpload", fileLimit: "fileLimit" }, outputs: { onBeforeUpload: "onBeforeUpload", onSend: "onSend", onUpload: "onUpload", onError: "onError", onClear: "onClear", onRemove: "onRemove", onSelect: "onSelect", onProgress: "onProgress", uploadHandler: "uploadHandler" }, decls: 2, vars: 2, consts: [[3, "ngClass", "ngStyle", "class", 4, "ngIf"], ["class", "p-fileupload p-fileupload-basic p-component", 4, "ngIf"], [3, "ngClass", "ngStyle"], [1, "p-fileupload-buttonbar"], ["pRipple", "", "tabindex", "0", 1, "p-button", "p-component", "p-fileupload-choose", 3, "ngClass", "focus", "blur", "click", "keydown.enter"], ["type", "file", 3, "multiple", "accept", "disabled", "change"], ["advancedfileinput", ""], [3, "ngClass"], [1, "p-button-label"], ["type", "button", 3, "label", "icon", "disabled", "onClick", 4, "ngIf"], [4, "ngTemplateOutlet"], [1, "p-fileupload-content", 3, "dragenter", "dragleave", "drop"], ["content", ""], [3, "value", "showValue", 4, "ngIf"], [3, "value", "enableService"], ["class", "p-fileupload-files", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "button", 3, "label", "icon", "disabled", "onClick"], [3, "value", "showValue"], [1, "p-fileupload-files"], [4, "ngIf"], ["class", "p-fileupload-row", 4, "ngFor", "ngForOf"], [1, "p-fileupload-row"], [3, "src", "width", 4, "ngIf"], ["type", "button", "icon", "pi pi-times", "pButton", "", 3, "disabled", "click"], [3, "src", "width"], ["ngFor", "", 3, "ngForOf", "ngForTemplate"], [1, "p-fileupload", "p-fileupload-basic", "p-component"], ["tabindex", "0", "pRipple", "", 3, "ngClass", "ngStyle", "mouseup", "keydown"], [1, "p-button-icon", "p-button-icon-left", "pi", 3, "ngClass"], ["type", "file", 3, "accept", "multiple", "disabled", "change", "focus", "blur", 4, "ngIf"], ["type", "file", 3, "accept", "multiple", "disabled", "change", "focus", "blur"], ["basicfileinput", ""]], template: function FileUpload_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, FileUpload_div_0_Template, 17, 27, "div", 0);
        ɵngcc0.ɵɵtemplate(1, FileUpload_div_1_Template, 7, 13, "div", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.mode === "advanced");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.mode === "basic");
    } }, directives: [ɵngcc3.NgIf, ɵngcc3.NgClass, ɵngcc3.NgStyle, ɵngcc4.Ripple, ɵngcc3.NgTemplateOutlet, ɵngcc5.Messages, ɵngcc6.Button, ɵngcc7.ProgressBar, ɵngcc3.NgForOf, ɵngcc6.ButtonDirective], styles: [".p-fileupload-content{position:relative}.p-fileupload-row{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.p-fileupload-row>div{-ms-flex:1 1 auto;flex:1 1 auto;width:25%}.p-fileupload-row>div:last-child{text-align:right}.p-fileupload-content .p-progressbar{left:0;position:absolute;top:0;width:100%}.p-button.p-fileupload-choose{overflow:hidden;position:relative}.p-button.p-fileupload-choose input[type=file],.p-fileupload-choose.p-fileupload-choose-selected input[type=file]{display:none}.p-fluid .p-fileupload .p-button{width:auto}"], encapsulation: 2, changeDetection: 0 });
FileUpload.ctorParameters = () => [
    { type: ElementRef },
    { type: DomSanitizer },
    { type: NgZone },
    { type: HttpClient },
    { type: ChangeDetectorRef }
];
FileUpload.propDecorators = {
    name: [{ type: Input }],
    url: [{ type: Input }],
    method: [{ type: Input }],
    multiple: [{ type: Input }],
    accept: [{ type: Input }],
    disabled: [{ type: Input }],
    auto: [{ type: Input }],
    withCredentials: [{ type: Input }],
    maxFileSize: [{ type: Input }],
    invalidFileSizeMessageSummary: [{ type: Input }],
    invalidFileSizeMessageDetail: [{ type: Input }],
    invalidFileTypeMessageSummary: [{ type: Input }],
    invalidFileTypeMessageDetail: [{ type: Input }],
    invalidFileLimitMessageDetail: [{ type: Input }],
    invalidFileLimitMessageSummary: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    previewWidth: [{ type: Input }],
    chooseLabel: [{ type: Input }],
    uploadLabel: [{ type: Input }],
    cancelLabel: [{ type: Input }],
    chooseIcon: [{ type: Input }],
    uploadIcon: [{ type: Input }],
    cancelIcon: [{ type: Input }],
    showUploadButton: [{ type: Input }],
    showCancelButton: [{ type: Input }],
    mode: [{ type: Input }],
    headers: [{ type: Input }],
    customUpload: [{ type: Input }],
    fileLimit: [{ type: Input }],
    onBeforeUpload: [{ type: Output }],
    onSend: [{ type: Output }],
    onUpload: [{ type: Output }],
    onError: [{ type: Output }],
    onClear: [{ type: Output }],
    onRemove: [{ type: Output }],
    onSelect: [{ type: Output }],
    onProgress: [{ type: Output }],
    uploadHandler: [{ type: Output }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }],
    advancedFileInput: [{ type: ViewChild, args: ['advancedfileinput',] }],
    basicFileInput: [{ type: ViewChild, args: ['basicfileinput',] }],
    content: [{ type: ViewChild, args: ['content',] }],
    files: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FileUpload, [{
        type: Component,
        args: [{
                selector: 'p-fileUpload',
                template: `
        <div [ngClass]="'p-fileupload p-fileupload-advanced p-component'" [ngStyle]="style" [class]="styleClass" *ngIf="mode === 'advanced'">
            <div class="p-fileupload-buttonbar">
                <span class="p-button p-component p-fileupload-choose" [ngClass]="{'p-focus': focus, 'p-disabled':disabled || isChooseDisabled()}" (focus)="onFocus()" (blur)="onBlur()" pRipple
                    (click)="choose()" (keydown.enter)="choose()" tabindex="0"> 
                    <input #advancedfileinput type="file" (change)="onFileSelect($event)" [multiple]="multiple" [accept]="accept" [disabled]="disabled || isChooseDisabled()" [attr.title]="''">
                    <span [ngClass]="'p-button-icon p-button-icon-left'" [class]="chooseIcon"></span>
                    <span class="p-button-label">{{chooseLabel}}</span>
                </span>

                <p-button *ngIf="!auto&&showUploadButton" type="button" [label]="uploadLabel" [icon]="uploadIcon" (onClick)="upload()" [disabled]="!hasFiles() || isFileLimitExceeded()"></p-button>
                <p-button *ngIf="!auto&&showCancelButton" type="button" [label]="cancelLabel" [icon]="cancelIcon" (onClick)="clear()" [disabled]="!hasFiles() || uploading"></p-button>

                <ng-container *ngTemplateOutlet="toolbarTemplate"></ng-container>
            </div>
            <div #content class="p-fileupload-content" (dragenter)="onDragEnter($event)" (dragleave)="onDragLeave($event)" (drop)="onDrop($event)">
                <p-progressBar [value]="progress" [showValue]="false" *ngIf="hasFiles()"></p-progressBar>

                <p-messages [value]="msgs" [enableService]="false"></p-messages>

                <div class="p-fileupload-files" *ngIf="hasFiles()">
                    <div *ngIf="!fileTemplate">
                        <div class="p-fileupload-row" *ngFor="let file of files; let i = index;">
                            <div><img [src]="file.objectURL" *ngIf="isImage(file)" [width]="previewWidth" /></div>
                            <div>{{file.name}}</div>
                            <div>{{formatSize(file.size)}}</div>
                            <div>
                                <button type="button" icon="pi pi-times" pButton (click)="remove($event,i)" [disabled]="uploading"></button>
                            </div>
                        </div>
                    </div>
                    <div *ngIf="fileTemplate">
                        <ng-template ngFor [ngForOf]="files" [ngForTemplate]="fileTemplate"></ng-template>
                    </div>
                </div>
                <ng-container *ngTemplateOutlet="contentTemplate; context: {$implicit: files}"></ng-container>
            </div>
        </div>
        <div class="p-fileupload p-fileupload-basic p-component" *ngIf="mode === 'basic'">
            <p-messages [value]="msgs" [enableService]="false"></p-messages>
            <span [ngClass]="{'p-button p-component p-fileupload-choose': true, 'p-fil(eupload-choose-selected': hasFiles(),'p-focus': focus, 'p-disabled':disabled}"
                [ngStyle]="style" [class]="styleClass" (mouseup)="onBasicUploaderClick()" (keydown)="onBasicUploaderClick()" tabindex="0" pRipple>
                <span class="p-button-icon p-button-icon-left pi" [ngClass]="hasFiles()&&!auto ? uploadIcon : chooseIcon"></span>
                <span class="p-button-label">{{auto ? chooseLabel : hasFiles() ? files[0].name : chooseLabel}}</span>
                <input #basicfileinput type="file" [accept]="accept" [multiple]="multiple" [disabled]="disabled"
                    (change)="onFileSelect($event)" *ngIf="!hasFiles()" (focus)="onFocus()" (blur)="onBlur()">
            </span>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-fileupload-content{position:relative}.p-fileupload-row{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.p-fileupload-row>div{-ms-flex:1 1 auto;flex:1 1 auto;width:25%}.p-fileupload-row>div:last-child{text-align:right}.p-fileupload-content .p-progressbar{left:0;position:absolute;top:0;width:100%}.p-button.p-fileupload-choose{overflow:hidden;position:relative}.p-button.p-fileupload-choose input[type=file],.p-fileupload-choose.p-fileupload-choose-selected input[type=file]{display:none}.p-fluid .p-fileupload .p-button{width:auto}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.DomSanitizer }, { type: ɵngcc0.NgZone }, { type: ɵngcc2.HttpClient }, { type: ɵngcc0.ChangeDetectorRef }]; }, { method: [{
            type: Input
        }], invalidFileSizeMessageSummary: [{
            type: Input
        }], invalidFileSizeMessageDetail: [{
            type: Input
        }], invalidFileTypeMessageSummary: [{
            type: Input
        }], invalidFileTypeMessageDetail: [{
            type: Input
        }], invalidFileLimitMessageDetail: [{
            type: Input
        }], invalidFileLimitMessageSummary: [{
            type: Input
        }], previewWidth: [{
            type: Input
        }], chooseLabel: [{
            type: Input
        }], uploadLabel: [{
            type: Input
        }], cancelLabel: [{
            type: Input
        }], chooseIcon: [{
            type: Input
        }], uploadIcon: [{
            type: Input
        }], cancelIcon: [{
            type: Input
        }], showUploadButton: [{
            type: Input
        }], showCancelButton: [{
            type: Input
        }], mode: [{
            type: Input
        }], onBeforeUpload: [{
            type: Output
        }], onSend: [{
            type: Output
        }], onUpload: [{
            type: Output
        }], onError: [{
            type: Output
        }], onClear: [{
            type: Output
        }], onRemove: [{
            type: Output
        }], onSelect: [{
            type: Output
        }], onProgress: [{
            type: Output
        }], uploadHandler: [{
            type: Output
        }], files: [{
            type: Input
        }], name: [{
            type: Input
        }], url: [{
            type: Input
        }], multiple: [{
            type: Input
        }], accept: [{
            type: Input
        }], disabled: [{
            type: Input
        }], auto: [{
            type: Input
        }], withCredentials: [{
            type: Input
        }], maxFileSize: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], headers: [{
            type: Input
        }], customUpload: [{
            type: Input
        }], fileLimit: [{
            type: Input
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }], advancedFileInput: [{
            type: ViewChild,
            args: ['advancedfileinput']
        }], basicFileInput: [{
            type: ViewChild,
            args: ['basicfileinput']
        }], content: [{
            type: ViewChild,
            args: ['content']
        }] }); })();
export class FileUploadModule {
}
FileUploadModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: FileUploadModule });
FileUploadModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function FileUploadModule_Factory(t) { return new (t || FileUploadModule)(); }, imports: [[CommonModule, SharedModule, ButtonModule, ProgressBarModule, MessagesModule, RippleModule], SharedModule, ButtonModule, ProgressBarModule, MessagesModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(FileUploadModule, { declarations: function () { return [FileUpload]; }, imports: function () { return [CommonModule, SharedModule, ButtonModule, ProgressBarModule, MessagesModule, RippleModule]; }, exports: function () { return [FileUpload, SharedModule, ButtonModule, ProgressBarModule, MessagesModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FileUploadModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, SharedModule, ButtonModule, ProgressBarModule, MessagesModule, RippleModule],
                exports: [FileUpload, SharedModule, ButtonModule, ProgressBarModule, MessagesModule],
                declarations: [FileUpload]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXVwbG9hZC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2ZpbGV1cGxvYWQvZmlsZXVwbG9hZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBVyxLQUFLLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFDbEQsZUFBZSxFQUFXLFNBQVMsRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3RKLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBRXZDLE9BQU8sRUFBQyxhQUFhLEVBQUMsWUFBWSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBRXZELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUMsVUFBVSxFQUFhLGFBQWEsRUFBYyxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUR2RixN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SyxtQkFFVixLQUFLO0FBQUssc0JBRVYsS0FBSztBQUFLLDJCQUVWLEtBQUs7QUFBSyx3QkFFVixLQUFLO0FBQUssNkJBRVYsTUFBTTtBQUFLLHFCQUVYLE1BQU07QUFBSyx1QkFFWCxNQUFNO0FBQUssc0JBRVgsTUFBTTtBQUFLLHNCQUVYLE1BQU07QUFBSyx1QkFFWCxNQUFNO0FBQUssdUJBRVgsTUFBTTtBQUFLLHlCQUVYLE1BQU07QUFBSyw0QkFFWCxNQUFNO0FBQUssd0JBRVgsZUFBZSxTQUFDLGFBQWE7QUFBTyxnQ0FFcEMsU0FBUyxTQUFDLG1CQUFtQjtBQUFPLDZCQUVwQyxTQUFTLFNBQUMsZ0JBQWdCO0FBQU8sc0JBRWpDLFNBQVMsU0FBQyxTQUFTO0FBQU8sb0JBRTFCLEtBQUs7QUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBOFloQixNQUFNLE9BQU8sZ0JBQWdCO0FBQUc7NENBTC9CLFFBQVEsU0FBQztFQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBQyxZQUFZLEVBQUMsWUFBWSxFQUFDLGlCQUFpQixFQUFDLGNBQWMsRUFBQyxZQUFZLENBQUMsa0JBQy9GLE9BQU8sRUFBRSxDQUFDLFVBQVUsRUFBQyxZQUFZLEVBQUMsWUFBWSxFQUFDLGlCQUFpQixFQUFDLGNBQWMsQ0FBQyxrQkFDaEYsWUFBWSxFQUFFLENBQUMsVUFBVSxDQUFDLGNBQzdCOzs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsQ29tcG9uZW50LE9uRGVzdHJveSxJbnB1dCxPdXRwdXQsRXZlbnRFbWl0dGVyLFRlbXBsYXRlUmVmLEFmdGVyVmlld0luaXQsQWZ0ZXJDb250ZW50SW5pdCxcbiAgICAgICAgICAgIENvbnRlbnRDaGlsZHJlbixRdWVyeUxpc3QsVmlld0NoaWxkLEVsZW1lbnRSZWYsTmdab25lLENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbiwgQ2hhbmdlRGV0ZWN0b3JSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0RvbVNhbml0aXplcn0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge0J1dHRvbk1vZHVsZX0gZnJvbSAncHJpbWVuZy9idXR0b24nO1xuaW1wb3J0IHtNZXNzYWdlc01vZHVsZX0gZnJvbSAncHJpbWVuZy9tZXNzYWdlcyc7XG5pbXBvcnQge1Byb2dyZXNzQmFyTW9kdWxlfSBmcm9tICdwcmltZW5nL3Byb2dyZXNzYmFyJztcbmltcG9ydCB7RG9tSGFuZGxlcn0gZnJvbSAncHJpbWVuZy9kb20nO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQge1ByaW1lVGVtcGxhdGUsU2hhcmVkTW9kdWxlfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQge0Jsb2NrYWJsZVVJfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQge1JpcHBsZU1vZHVsZX0gZnJvbSAncHJpbWVuZy9yaXBwbGUnOyAgXG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBFdmVudCwgSHR0cEV2ZW50VHlwZSwgSHR0cEhlYWRlcnN9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtZmlsZVVwbG9hZCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBbbmdDbGFzc109XCIncC1maWxldXBsb2FkIHAtZmlsZXVwbG9hZC1hZHZhbmNlZCBwLWNvbXBvbmVudCdcIiBbbmdTdHlsZV09XCJzdHlsZVwiIFtjbGFzc109XCJzdHlsZUNsYXNzXCIgKm5nSWY9XCJtb2RlID09PSAnYWR2YW5jZWQnXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1maWxldXBsb2FkLWJ1dHRvbmJhclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1idXR0b24gcC1jb21wb25lbnQgcC1maWxldXBsb2FkLWNob29zZVwiIFtuZ0NsYXNzXT1cInsncC1mb2N1cyc6IGZvY3VzLCAncC1kaXNhYmxlZCc6ZGlzYWJsZWQgfHwgaXNDaG9vc2VEaXNhYmxlZCgpfVwiIChmb2N1cyk9XCJvbkZvY3VzKClcIiAoYmx1cik9XCJvbkJsdXIoKVwiIHBSaXBwbGVcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImNob29zZSgpXCIgKGtleWRvd24uZW50ZXIpPVwiY2hvb3NlKClcIiB0YWJpbmRleD1cIjBcIj4gXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjYWR2YW5jZWRmaWxlaW5wdXQgdHlwZT1cImZpbGVcIiAoY2hhbmdlKT1cIm9uRmlsZVNlbGVjdCgkZXZlbnQpXCIgW211bHRpcGxlXT1cIm11bHRpcGxlXCIgW2FjY2VwdF09XCJhY2NlcHRcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWQgfHwgaXNDaG9vc2VEaXNhYmxlZCgpXCIgW2F0dHIudGl0bGVdPVwiJydcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gW25nQ2xhc3NdPVwiJ3AtYnV0dG9uLWljb24gcC1idXR0b24taWNvbi1sZWZ0J1wiIFtjbGFzc109XCJjaG9vc2VJY29uXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtYnV0dG9uLWxhYmVsXCI+e3tjaG9vc2VMYWJlbH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiAqbmdJZj1cIiFhdXRvJiZzaG93VXBsb2FkQnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIFtsYWJlbF09XCJ1cGxvYWRMYWJlbFwiIFtpY29uXT1cInVwbG9hZEljb25cIiAob25DbGljayk9XCJ1cGxvYWQoKVwiIFtkaXNhYmxlZF09XCIhaGFzRmlsZXMoKSB8fCBpc0ZpbGVMaW1pdEV4Y2VlZGVkKClcIj48L3AtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiAqbmdJZj1cIiFhdXRvJiZzaG93Q2FuY2VsQnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIFtsYWJlbF09XCJjYW5jZWxMYWJlbFwiIFtpY29uXT1cImNhbmNlbEljb25cIiAob25DbGljayk9XCJjbGVhcigpXCIgW2Rpc2FibGVkXT1cIiFoYXNGaWxlcygpIHx8wqB1cGxvYWRpbmdcIj48L3AtYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRvb2xiYXJUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICNjb250ZW50IGNsYXNzPVwicC1maWxldXBsb2FkLWNvbnRlbnRcIiAoZHJhZ2VudGVyKT1cIm9uRHJhZ0VudGVyKCRldmVudClcIiAoZHJhZ2xlYXZlKT1cIm9uRHJhZ0xlYXZlKCRldmVudClcIiAoZHJvcCk9XCJvbkRyb3AoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgIDxwLXByb2dyZXNzQmFyIFt2YWx1ZV09XCJwcm9ncmVzc1wiIFtzaG93VmFsdWVdPVwiZmFsc2VcIiAqbmdJZj1cImhhc0ZpbGVzKClcIj48L3AtcHJvZ3Jlc3NCYXI+XG5cbiAgICAgICAgICAgICAgICA8cC1tZXNzYWdlcyBbdmFsdWVdPVwibXNnc1wiIFtlbmFibGVTZXJ2aWNlXT1cImZhbHNlXCI+PC9wLW1lc3NhZ2VzPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtZmlsZXVwbG9hZC1maWxlc1wiICpuZ0lmPVwiaGFzRmlsZXMoKVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiIWZpbGVUZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtZmlsZXVwbG9hZC1yb3dcIiAqbmdGb3I9XCJsZXQgZmlsZSBvZiBmaWxlczsgbGV0IGkgPSBpbmRleDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbWcgW3NyY109XCJmaWxlLm9iamVjdFVSTFwiICpuZ0lmPVwiaXNJbWFnZShmaWxlKVwiIFt3aWR0aF09XCJwcmV2aWV3V2lkdGhcIiAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e3tmaWxlLm5hbWV9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e3tmb3JtYXRTaXplKGZpbGUuc2l6ZSl9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGljb249XCJwaSBwaS10aW1lc1wiIHBCdXR0b24gKGNsaWNrKT1cInJlbW92ZSgkZXZlbnQsaSlcIiBbZGlzYWJsZWRdPVwidXBsb2FkaW5nXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJmaWxlVGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBbbmdGb3JPZl09XCJmaWxlc1wiIFtuZ0ZvclRlbXBsYXRlXT1cImZpbGVUZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb250ZW50VGVtcGxhdGU7IGNvbnRleHQ6IHskaW1wbGljaXQ6IGZpbGVzfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicC1maWxldXBsb2FkIHAtZmlsZXVwbG9hZC1iYXNpYyBwLWNvbXBvbmVudFwiICpuZ0lmPVwibW9kZSA9PT0gJ2Jhc2ljJ1wiPlxuICAgICAgICAgICAgPHAtbWVzc2FnZXMgW3ZhbHVlXT1cIm1zZ3NcIiBbZW5hYmxlU2VydmljZV09XCJmYWxzZVwiPjwvcC1tZXNzYWdlcz5cbiAgICAgICAgICAgIDxzcGFuIFtuZ0NsYXNzXT1cInsncC1idXR0b24gcC1jb21wb25lbnQgcC1maWxldXBsb2FkLWNob29zZSc6IHRydWUsICdwLWZpbChldXBsb2FkLWNob29zZS1zZWxlY3RlZCc6IGhhc0ZpbGVzKCksJ3AtZm9jdXMnOiBmb2N1cywgJ3AtZGlzYWJsZWQnOmRpc2FibGVkfVwiXG4gICAgICAgICAgICAgICAgW25nU3R5bGVdPVwic3R5bGVcIiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiIChtb3VzZXVwKT1cIm9uQmFzaWNVcGxvYWRlckNsaWNrKClcIiAoa2V5ZG93bik9XCJvbkJhc2ljVXBsb2FkZXJDbGljaygpXCIgdGFiaW5kZXg9XCIwXCIgcFJpcHBsZT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtYnV0dG9uLWljb24gcC1idXR0b24taWNvbi1sZWZ0IHBpXCIgW25nQ2xhc3NdPVwiaGFzRmlsZXMoKSYmIWF1dG8gPyB1cGxvYWRJY29uIDogY2hvb3NlSWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtYnV0dG9uLWxhYmVsXCI+e3thdXRvID8gY2hvb3NlTGFiZWwgOiBoYXNGaWxlcygpID8gZmlsZXNbMF0ubmFtZSA6IGNob29zZUxhYmVsfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGlucHV0ICNiYXNpY2ZpbGVpbnB1dCB0eXBlPVwiZmlsZVwiIFthY2NlcHRdPVwiYWNjZXB0XCIgW211bHRpcGxlXT1cIm11bHRpcGxlXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJvbkZpbGVTZWxlY3QoJGV2ZW50KVwiICpuZ0lmPVwiIWhhc0ZpbGVzKClcIiAoZm9jdXMpPVwib25Gb2N1cygpXCIgKGJsdXIpPVwib25CbHVyKClcIj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHN0eWxlVXJsczogWycuL2ZpbGV1cGxvYWQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRmlsZVVwbG9hZCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkRlc3Ryb3ksQmxvY2thYmxlVUkge1xuXG4gICAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgdXJsOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBtZXRob2Q6IHN0cmluZyA9ICdQT1NUJztcblxuICAgIEBJbnB1dCgpIG11bHRpcGxlOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgYWNjZXB0OiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIGF1dG86IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSB3aXRoQ3JlZGVudGlhbHM6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBtYXhGaWxlU2l6ZTogbnVtYmVyO1xuXG4gICAgQElucHV0KCkgaW52YWxpZEZpbGVTaXplTWVzc2FnZVN1bW1hcnk6IHN0cmluZyA9ICd7MH06IEludmFsaWQgZmlsZSBzaXplLCAnO1xuXG4gICAgQElucHV0KCkgaW52YWxpZEZpbGVTaXplTWVzc2FnZURldGFpbDogc3RyaW5nID0gJ21heGltdW0gdXBsb2FkIHNpemUgaXMgezB9Lic7XG5cbiAgICBASW5wdXQoKSBpbnZhbGlkRmlsZVR5cGVNZXNzYWdlU3VtbWFyeTogc3RyaW5nID0gJ3swfTogSW52YWxpZCBmaWxlIHR5cGUsICc7XG5cbiAgICBASW5wdXQoKSBpbnZhbGlkRmlsZVR5cGVNZXNzYWdlRGV0YWlsOiBzdHJpbmcgPSAnYWxsb3dlZCBmaWxlIHR5cGVzOiB7MH0uJztcblxuICAgIEBJbnB1dCgpIGludmFsaWRGaWxlTGltaXRNZXNzYWdlRGV0YWlsOiBzdHJpbmcgPSAnbGltaXQgaXMgezB9IGF0IG1vc3QuJztcblxuICAgIEBJbnB1dCgpIGludmFsaWRGaWxlTGltaXRNZXNzYWdlU3VtbWFyeTogc3RyaW5nID0gJ01heGltdW0gbnVtYmVyIG9mIGZpbGVzIGV4Y2VlZGVkLCAnO1xuXG4gICAgQElucHV0KCkgc3R5bGU6IGFueTtcblxuICAgIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHByZXZpZXdXaWR0aDogbnVtYmVyID0gNTA7XG5cbiAgICBASW5wdXQoKSBjaG9vc2VMYWJlbDogc3RyaW5nID0gJ0Nob29zZSc7XG5cbiAgICBASW5wdXQoKSB1cGxvYWRMYWJlbDogc3RyaW5nID0gJ1VwbG9hZCc7XG5cbiAgICBASW5wdXQoKSBjYW5jZWxMYWJlbDogc3RyaW5nID0gJ0NhbmNlbCc7XG5cbiAgICBASW5wdXQoKSBjaG9vc2VJY29uOiBzdHJpbmcgPSAncGkgcGktcGx1cyc7XG5cbiAgICBASW5wdXQoKSB1cGxvYWRJY29uOiBzdHJpbmcgPSAncGkgcGktdXBsb2FkJztcblxuICAgIEBJbnB1dCgpIGNhbmNlbEljb246IHN0cmluZyA9ICdwaSBwaS10aW1lcyc7XG5cbiAgICBASW5wdXQoKSBzaG93VXBsb2FkQnV0dG9uOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIEBJbnB1dCgpIHNob3dDYW5jZWxCdXR0b246IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQElucHV0KCkgbW9kZTogc3RyaW5nID0gJ2FkdmFuY2VkJztcblxuICAgIEBJbnB1dCgpIGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xuICAgIFxuICAgIEBJbnB1dCgpIGN1c3RvbVVwbG9hZDogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIGZpbGVMaW1pdDogbnVtYmVyO1xuXG4gICAgQE91dHB1dCgpIG9uQmVmb3JlVXBsb2FkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvblNlbmQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uVXBsb2FkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbkVycm9yOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbkNsZWFyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvblJlbW92ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgb25TZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uUHJvZ3Jlc3M6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIHVwbG9hZEhhbmRsZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihQcmltZVRlbXBsYXRlKSB0ZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxhbnk+O1xuXG4gICAgQFZpZXdDaGlsZCgnYWR2YW5jZWRmaWxlaW5wdXQnKSBhZHZhbmNlZEZpbGVJbnB1dDogRWxlbWVudFJlZjtcblxuICAgIEBWaWV3Q2hpbGQoJ2Jhc2ljZmlsZWlucHV0JykgYmFzaWNGaWxlSW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgICBAVmlld0NoaWxkKCdjb250ZW50JykgY29udGVudDogRWxlbWVudFJlZjtcblxuICAgIEBJbnB1dCgpIHNldCBmaWxlcyhmaWxlcykge1xuICAgICAgICB0aGlzLl9maWxlcyA9IFtdO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGZpbGUgPSBmaWxlc1tpXTtcblxuICAgICAgICAgICAgaWYgKHRoaXMudmFsaWRhdGUoZmlsZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0ltYWdlKGZpbGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICg8YW55PmZpbGUpLm9iamVjdFVSTCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RVcmwoKHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGVzW2ldKSkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuX2ZpbGVzLnB1c2goZmlsZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGZpbGVzKCk6IEZpbGVbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWxlcztcbiAgICB9XG5cbiAgICBwdWJsaWMgX2ZpbGVzOiBGaWxlW10gPSBbXTtcblxuICAgIHB1YmxpYyBwcm9ncmVzczogbnVtYmVyID0gMDtcblxuICAgIHB1YmxpYyBkcmFnSGlnaGxpZ2h0OiBib29sZWFuO1xuXG4gICAgcHVibGljIG1zZ3M6IE1lc3NhZ2VbXTtcblxuICAgIHB1YmxpYyBmaWxlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBwdWJsaWMgY29udGVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgcHVibGljIHRvb2xiYXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIHB1YmxpYyB1cGxvYWRlZEZpbGVDb3VudDogbnVtYmVyID0gMDtcblxuICAgIGZvY3VzOiBib29sZWFuO1xuXG4gICAgdXBsb2FkaW5nOiBib29sZWFuO1xuXG4gICAgZHVwbGljYXRlSUVFdmVudDogYm9vbGVhbjsgIC8vIGZsYWcgdG8gcmVjb2duaXplIGR1cGxpY2F0ZSBvbmNoYW5nZSBldmVudCBmb3IgZmlsZSBpbnB1dFxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHVibGljIHNhbml0aXplcjogRG9tU2FuaXRpemVyLCBwdWJsaWMgem9uZTogTmdab25lLCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHB1YmxpYyBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpe31cblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoKGl0ZW0uZ2V0VHlwZSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnZmlsZSc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZVRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2NvbnRlbnQnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICd0b29sYmFyJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b29sYmFyVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLm1vZGUgPT09ICdhZHZhbmNlZCcpIHtcbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29udGVudClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLm9uRHJhZ092ZXIuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNob29zZSgpIHtcbiAgICAgICAgdGhpcy5hZHZhbmNlZEZpbGVJbnB1dC5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XG4gICAgfVxuXG4gICAgb25GaWxlU2VsZWN0KGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50eXBlICE9PSAnZHJvcCcgJiYgdGhpcy5pc0lFMTEoKSAmJiB0aGlzLmR1cGxpY2F0ZUlFRXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZHVwbGljYXRlSUVFdmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tc2dzID0gW107XG4gICAgICAgIGlmICghdGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgdGhpcy5maWxlcyA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGZpbGVzID0gZXZlbnQuZGF0YVRyYW5zZmVyID8gZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzIDogZXZlbnQudGFyZ2V0LmZpbGVzO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBmaWxlID0gZmlsZXNbaV07XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5pc0ZpbGVTZWxlY3RlZChmaWxlKSl7XG4gICAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkYXRlKGZpbGUpKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0ltYWdlKGZpbGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZmlsZS5vYmplY3RVUkwgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0VXJsKCh3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlc1tpXSkpKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgdGhpcy5maWxlcy5wdXNoKGZpbGVzW2ldKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vblNlbGVjdC5lbWl0KHtvcmlnaW5hbEV2ZW50OiBldmVudCwgZmlsZXM6IGZpbGVzLCBjdXJyZW50RmlsZXM6IHRoaXMuZmlsZXN9KTtcblxuICAgICAgICBpZiAodGhpcy5maWxlTGltaXQgJiYgdGhpcy5tb2RlID09IFwiYWR2YW5jZWRcIikge1xuICAgICAgICAgICAgdGhpcy5jaGVja0ZpbGVMaW1pdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaGFzRmlsZXMoKSAmJiB0aGlzLmF1dG8gJiYgKCEodGhpcy5tb2RlID09PSBcImFkdmFuY2VkXCIpIHx8ICF0aGlzLmlzRmlsZUxpbWl0RXhjZWVkZWQoKSkpIHtcbiAgICAgICAgICAgIHRoaXMudXBsb2FkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQudHlwZSAhPT0gJ2Ryb3AnICYmIHRoaXMuaXNJRTExKCkpIHtcbiAgICAgICAgICB0aGlzLmNsZWFySUVJbnB1dCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2xlYXJJbnB1dEVsZW1lbnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzRmlsZVNlbGVjdGVkKGZpbGU6IEZpbGUpOiBib29sZWFue1xuICAgICAgICBmb3IobGV0IHNGaWxlIG9mIHRoaXMuZmlsZXMpe1xuICAgICAgICAgICAgaWYgKChzRmlsZS5uYW1lICsgc0ZpbGUudHlwZSArIHNGaWxlLnNpemUpID09PSAoZmlsZS5uYW1lICsgZmlsZS50eXBlK2ZpbGUuc2l6ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpc0lFMTEoKSB7XG4gICAgICAgIHJldHVybiAhIXdpbmRvd1snTVNJbnB1dE1ldGhvZENvbnRleHQnXSAmJiAhIWRvY3VtZW50Wydkb2N1bWVudE1vZGUnXTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZShmaWxlOiBGaWxlKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmFjY2VwdCAmJiAhdGhpcy5pc0ZpbGVUeXBlVmFsaWQoZmlsZSkpIHtcbiAgICAgICAgICAgIHRoaXMubXNncy5wdXNoKHtcbiAgICAgICAgICAgICAgICBzZXZlcml0eTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICBzdW1tYXJ5OiB0aGlzLmludmFsaWRGaWxlVHlwZU1lc3NhZ2VTdW1tYXJ5LnJlcGxhY2UoJ3swfScsIGZpbGUubmFtZSksXG4gICAgICAgICAgICAgICAgZGV0YWlsOiB0aGlzLmludmFsaWRGaWxlVHlwZU1lc3NhZ2VEZXRhaWwucmVwbGFjZSgnezB9JywgdGhpcy5hY2NlcHQpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm1heEZpbGVTaXplICAmJiBmaWxlLnNpemUgPiB0aGlzLm1heEZpbGVTaXplKSB7XG4gICAgICAgICAgICB0aGlzLm1zZ3MucHVzaCh7XG4gICAgICAgICAgICAgICAgc2V2ZXJpdHk6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgc3VtbWFyeTogdGhpcy5pbnZhbGlkRmlsZVNpemVNZXNzYWdlU3VtbWFyeS5yZXBsYWNlKCd7MH0nLCBmaWxlLm5hbWUpLFxuICAgICAgICAgICAgICAgIGRldGFpbDogdGhpcy5pbnZhbGlkRmlsZVNpemVNZXNzYWdlRGV0YWlsLnJlcGxhY2UoJ3swfScsIHRoaXMuZm9ybWF0U2l6ZSh0aGlzLm1heEZpbGVTaXplKSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc0ZpbGVUeXBlVmFsaWQoZmlsZTogRmlsZSk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgYWNjZXB0YWJsZVR5cGVzID0gdGhpcy5hY2NlcHQuc3BsaXQoJywnKS5tYXAodHlwZSA9PiB0eXBlLnRyaW0oKSk7XG4gICAgICAgIGZvcihsZXQgdHlwZSBvZiBhY2NlcHRhYmxlVHlwZXMpIHtcbiAgICAgICAgICAgIGxldCBhY2NlcHRhYmxlID0gdGhpcy5pc1dpbGRjYXJkKHR5cGUpID8gdGhpcy5nZXRUeXBlQ2xhc3MoZmlsZS50eXBlKSA9PT0gdGhpcy5nZXRUeXBlQ2xhc3ModHlwZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZpbGUudHlwZSA9PSB0eXBlIHx8IHRoaXMuZ2V0RmlsZUV4dGVuc2lvbihmaWxlKS50b0xvd2VyQ2FzZSgpID09PSB0eXBlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIGlmIChhY2NlcHRhYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0VHlwZUNsYXNzKGZpbGVUeXBlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZmlsZVR5cGUuc3Vic3RyaW5nKDAsIGZpbGVUeXBlLmluZGV4T2YoJy8nKSk7XG4gICAgfVxuXG4gICAgaXNXaWxkY2FyZChmaWxlVHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBmaWxlVHlwZS5pbmRleE9mKCcqJykgIT09IC0xO1xuICAgIH1cblxuICAgIGdldEZpbGVFeHRlbnNpb24oZmlsZTogRmlsZSk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnLicgKyBmaWxlLm5hbWUuc3BsaXQoJy4nKS5wb3AoKTtcbiAgICB9XG5cbiAgICBpc0ltYWdlKGZpbGU6IEZpbGUpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIC9eaW1hZ2VcXC8vLnRlc3QoZmlsZS50eXBlKTtcbiAgICB9XG5cbiAgICBvbkltYWdlTG9hZChpbWc6IGFueSkge1xuICAgICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTChpbWcuc3JjKTtcbiAgICB9XG5cbiAgICB1cGxvYWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmN1c3RvbVVwbG9hZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZmlsZUxpbWl0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGxvYWRlZEZpbGVDb3VudCArPSB0aGlzLmZpbGVzLmxlbmd0aDsgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMudXBsb2FkSGFuZGxlci5lbWl0KHtcbiAgICAgICAgICAgICAgICBmaWxlczogdGhpcy5maWxlc1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVwbG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm1zZ3MgPSBbXTtcbiAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgICAgICB0aGlzLm9uQmVmb3JlVXBsb2FkLmVtaXQoe1xuICAgICAgICAgICAgICAgICdmb3JtRGF0YSc6IGZvcm1EYXRhXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKHRoaXMubmFtZSwgdGhpcy5maWxlc1tpXSwgdGhpcy5maWxlc1tpXS5uYW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5odHRwLnBvc3QodGhpcy51cmwsIGZvcm1EYXRhLCB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLCByZXBvcnRQcm9ncmVzczogdHJ1ZSwgb2JzZXJ2ZTogJ2V2ZW50cycsIHdpdGhDcmVkZW50aWFsczogdGhpcy53aXRoQ3JlZGVudGlhbHNcbiAgICAgICAgICAgIH0pLnN1YnNjcmliZSggKGV2ZW50OiBIdHRwRXZlbnQ8YW55PikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgSHR0cEV2ZW50VHlwZS5TZW50OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25TZW5kLmVtaXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Zvcm1EYXRhJzogZm9ybURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgSHR0cEV2ZW50VHlwZS5SZXNwb25zZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50WydzdGF0dXMnXSA+PSAyMDAgJiYgZXZlbnRbJ3N0YXR1cyddIDwgMzAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbGVMaW1pdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGxvYWRlZEZpbGVDb3VudCArPSB0aGlzLmZpbGVzLmxlbmd0aDsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uVXBsb2FkLmVtaXQoe29yaWdpbmFsRXZlbnQ6IGV2ZW50LCBmaWxlczogdGhpcy5maWxlc30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25FcnJvci5lbWl0KHtmaWxlczogdGhpcy5maWxlc30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgSHR0cEV2ZW50VHlwZS5VcGxvYWRQcm9ncmVzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudFsnbG9hZGVkJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzcyA9IE1hdGgucm91bmQoKGV2ZW50Wydsb2FkZWQnXSAqIDEwMCkgLyBldmVudFsndG90YWwnXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vblByb2dyZXNzLmVtaXQoe29yaWdpbmFsRXZlbnQ6IGV2ZW50LCBwcm9ncmVzczogdGhpcy5wcm9ncmVzc30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkVycm9yLmVtaXQoe2ZpbGVzOiB0aGlzLmZpbGVzLCBlcnJvcjogZXJyb3J9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmZpbGVzID0gW107XG4gICAgICAgIHRoaXMub25DbGVhci5lbWl0KCk7XG4gICAgICAgIHRoaXMuY2xlYXJJbnB1dEVsZW1lbnQoKTtcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICByZW1vdmUoZXZlbnQ6IEV2ZW50LCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuY2xlYXJJbnB1dEVsZW1lbnQoKTtcbiAgICAgICAgdGhpcy5vblJlbW92ZS5lbWl0KHtvcmlnaW5hbEV2ZW50OiBldmVudCwgZmlsZTogdGhpcy5maWxlc1tpbmRleF19KTtcbiAgICAgICAgdGhpcy5maWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIGlzRmlsZUxpbWl0RXhjZWVkZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmZpbGVMaW1pdCAmJiB0aGlzLmZpbGVMaW1pdCA8PSB0aGlzLmZpbGVzLmxlbmd0aCArIHRoaXMudXBsb2FkZWRGaWxlQ291bnQgJiYgdGhpcy5mb2N1cykge1xuICAgICAgICAgICAgdGhpcy5mb2N1cyA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZUxpbWl0ICYmIHRoaXMuZmlsZUxpbWl0IDwgdGhpcy5maWxlcy5sZW5ndGggKyB0aGlzLnVwbG9hZGVkRmlsZUNvdW50O1xuICAgIH1cblxuICAgIGlzQ2hvb3NlRGlzYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVMaW1pdCAmJiB0aGlzLmZpbGVMaW1pdCA8PSB0aGlzLmZpbGVzLmxlbmd0aCArIHRoaXMudXBsb2FkZWRGaWxlQ291bnQ7XG4gICAgfVxuXG4gICAgY2hlY2tGaWxlTGltaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRmlsZUxpbWl0RXhjZWVkZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5tc2dzLnB1c2goe1xuICAgICAgICAgICAgICAgIHNldmVyaXR5OiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHN1bW1hcnk6IHRoaXMuaW52YWxpZEZpbGVMaW1pdE1lc3NhZ2VTdW1tYXJ5LnJlcGxhY2UoJ3swfScsIHRoaXMuZmlsZUxpbWl0LnRvU3RyaW5nKCkpLFxuICAgICAgICAgICAgICAgIGRldGFpbDogdGhpcy5pbnZhbGlkRmlsZUxpbWl0TWVzc2FnZURldGFpbC5yZXBsYWNlKCd7MH0nLCB0aGlzLmZpbGVMaW1pdC50b1N0cmluZygpKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhcklucHV0RWxlbWVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYWR2YW5jZWRGaWxlSW5wdXQgJiYgdGhpcy5hZHZhbmNlZEZpbGVJbnB1dC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmFkdmFuY2VkRmlsZUlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmJhc2ljRmlsZUlucHV0ICYmIHRoaXMuYmFzaWNGaWxlSW5wdXQubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5iYXNpY0ZpbGVJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhcklFSW5wdXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmFkdmFuY2VkRmlsZUlucHV0ICYmIHRoaXMuYWR2YW5jZWRGaWxlSW5wdXQubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5kdXBsaWNhdGVJRUV2ZW50ID0gdHJ1ZTsgLy9JRTExIGZpeCB0byBwcmV2ZW50IG9uRmlsZUNoYW5nZSB0cmlnZ2VyIGFnYWluXG4gICAgICAgICAgICB0aGlzLmFkdmFuY2VkRmlsZUlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhc0ZpbGVzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5maWxlcyAmJiB0aGlzLmZpbGVzLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgb25EcmFnRW50ZXIoZSkge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRyYWdPdmVyKGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBEb21IYW5kbGVyLmFkZENsYXNzKHRoaXMuY29udGVudC5uYXRpdmVFbGVtZW50LCAncC1maWxldXBsb2FkLWhpZ2hsaWdodCcpO1xuICAgICAgICAgICAgdGhpcy5kcmFnSGlnaGxpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRyYWdMZWF2ZShldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIERvbUhhbmRsZXIucmVtb3ZlQ2xhc3ModGhpcy5jb250ZW50Lm5hdGl2ZUVsZW1lbnQsICdwLWZpbGV1cGxvYWQtaGlnaGxpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRyb3AoZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBEb21IYW5kbGVyLnJlbW92ZUNsYXNzKHRoaXMuY29udGVudC5uYXRpdmVFbGVtZW50LCAncC1maWxldXBsb2FkLWhpZ2hsaWdodCcpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBsZXQgZmlsZXMgPSBldmVudC5kYXRhVHJhbnNmZXIgPyBldmVudC5kYXRhVHJhbnNmZXIuZmlsZXMgOiBldmVudC50YXJnZXQuZmlsZXM7XG4gICAgICAgICAgICBsZXQgYWxsb3dEcm9wID0gdGhpcy5tdWx0aXBsZXx8KGZpbGVzICYmIGZpbGVzLmxlbmd0aCA9PT0gMSk7XG5cbiAgICAgICAgICAgIGlmIChhbGxvd0Ryb3ApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uRmlsZVNlbGVjdChldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkZvY3VzKCkge1xuICAgICAgICB0aGlzLmZvY3VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvbkJsdXIoKSB7XG4gICAgICAgIHRoaXMuZm9jdXMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3JtYXRTaXplKGJ5dGVzKSB7XG4gICAgICAgIGlmIChieXRlcyA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJzAgQic7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGsgPSAxMDI0LFxuICAgICAgICBkbSA9IDMsXG4gICAgICAgIHNpemVzID0gWydCJywgJ0tCJywgJ01CJywgJ0dCJywgJ1RCJywgJ1BCJywgJ0VCJywgJ1pCJywgJ1lCJ10sXG4gICAgICAgIGkgPSBNYXRoLmZsb29yKE1hdGgubG9nKGJ5dGVzKSAvIE1hdGgubG9nKGspKTtcblxuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCgoYnl0ZXMgLyBNYXRoLnBvdyhrLCBpKSkudG9GaXhlZChkbSkpICsgJyAnICsgc2l6ZXNbaV07XG4gICAgfVxuXG4gICAgb25CYXNpY1VwbG9hZGVyQ2xpY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc0ZpbGVzKCkpXG4gICAgICAgICAgICB0aGlzLnVwbG9hZCgpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLmJhc2ljRmlsZUlucHV0Lm5hdGl2ZUVsZW1lbnQuY2xpY2soKTtcbiAgICB9XG5cbiAgICBnZXRCbG9ja2FibGVFbGVtZW50KCk6IEhUTUxFbGVtZW50wqB7XG4gICAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5jb250ZW50ICYmIHRoaXMuY29udGVudC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMub25EcmFnT3Zlcik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSxTaGFyZWRNb2R1bGUsQnV0dG9uTW9kdWxlLFByb2dyZXNzQmFyTW9kdWxlLE1lc3NhZ2VzTW9kdWxlLFJpcHBsZU1vZHVsZV0sXG4gICAgZXhwb3J0czogW0ZpbGVVcGxvYWQsU2hhcmVkTW9kdWxlLEJ1dHRvbk1vZHVsZSxQcm9ncmVzc0Jhck1vZHVsZSxNZXNzYWdlc01vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbRmlsZVVwbG9hZF1cbn0pXG5leHBvcnQgY2xhc3MgRmlsZVVwbG9hZE1vZHVsZSB7IH1cbiJdfQ==