(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-categories-categories-module"],{

/***/ "./src/app/pages/categories/add-category/add-category.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/categories/add-category/add-category.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryComponent", function() { return AddCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../categories.service */ "./src/app/pages/categories/categories.service.ts");
/* harmony import */ var _product_attributes_product_attributes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../product-attributes/product-attributes.service */ "./src/app/pages/product-attributes/product-attributes.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _reusable_components_form_fields_upload_photo_upload_photo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../reusable-components/form-fields/upload-photo/upload-photo.component */ "./src/app/reusable-components/form-fields/upload-photo/upload-photo.component.ts");
/* harmony import */ var _reusable_components_form_fields_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../reusable-components/form-fields/input-text/input-text.component */ "./src/app/reusable-components/form-fields/input-text/input-text.component.ts");
/* harmony import */ var _reusable_components_form_fields_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../reusable-components/form-fields/multi-select/multi-select.component */ "./src/app/reusable-components/form-fields/multi-select/multi-select.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");














const _c0 = function () { return ["/categories"]; };
class AddCategoryComponent {
    constructor(fb, categoriesService, productAttributesService, toastr, spinner, router) {
        this.fb = fb;
        this.categoriesService = categoriesService;
        this.productAttributesService = productAttributesService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.router = router;
        this.form = this.fb.group({
            image: [],
            name: this.fb.group({
                en: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                ar: [''],
            }),
            productAttributes: this.fb.array([]),
        });
        this.selectedProductAttribute = [];
    }
    ngOnInit() {
        this.getProductAttributes();
    }
    getProductAttributes() {
        this.spinner.show();
        this.productAttributesService.getAll();
        this.productAttributesService.productAttributes.subscribe((data) => {
            if (data) {
                this.productAttributes = data.map((x) => {
                    return {
                        _id: x['_id'],
                        nameEn: `${x['name']['en']}`,
                        nameAr: `${x['name']['ar']}`,
                    };
                });
            }
        });
        this.spinner.hide();
    }
    selectProductAttribute(event) {
        this.selectedProductAttribute = event;
    }
    onSubmit() {
        this.spinner.show();
        const productAttributes = this.form.get('productAttributes');
        productAttributes.patchValue([]);
        for (let index = 0; index < this.selectedProductAttribute.length; index++) {
            productAttributes.controls[index] = this.fb.group({
                _id: [''],
                name: this.fb.group({
                    en: [''],
                    ar: [''],
                }),
            });
            productAttributes.controls[index]
                .get('_id')
                .patchValue(this.selectedProductAttribute[index]._id);
            productAttributes.controls[index]
                .get('name')
                .get('en')
                .patchValue(this.selectedProductAttribute[index].nameEn);
            productAttributes.controls[index]
                .get('name')
                .get('ar')
                .patchValue(this.selectedProductAttribute[index].nameAr);
        }
        this.form.get('productAttributes').patchValue(productAttributes.controls);
        const formData = new FormData();
        for (const key in this.form.value) {
            if (this.form.value[key] instanceof File) {
                formData.append(key, this.form.value[key]);
            }
            else {
                // contains object
                formData.append(key, JSON.stringify(this.form.value[key]));
            }
        }
        this.categoriesService.addOne(formData).subscribe((res) => {
            console.log(res);
            this.image = null;
            this.form.reset();
            this.toastr.info(res['message'], 'Info');
            this.router.navigate(['/categories']);
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error.message, 'Error');
            // this.error.next(error.error.message);
        });
        this.spinner.hide();
    }
}
AddCategoryComponent.ɵfac = function AddCategoryComponent_Factory(t) { return new (t || AddCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_attributes_product_attributes_service__WEBPACK_IMPORTED_MODULE_3__["ProductAttributesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
AddCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddCategoryComponent, selectors: [["app-add-category"]], decls: 25, vars: 49, consts: [[1, "grid-center-noGutter"], [1, "col-20_sm-22_xs-23", "grid-center-noGutter", "content"], [1, "title", "col-24", "grid-center"], [1, "form", "col-23"], [1, "grid-middle-spaceBetween-noGutter"], [1, "form-group", "grid-center-middle-noGutter", "col-24"], [1, "col-24", "grid-center"], [3, "fieldId", "image", "control"], ["type", "text", 1, "col-11_sm-24", 3, "label", "labelAr", "fieldId", "required", "placeholder", "tooltipMsg", "control", "fieldClass"], ["type", "text", 1, "col-11_sm-24", "grid", 3, "label", "labelAr", "fieldId", "rtldirection", "placeholder", "tooltipMsg", "control", "fieldClass"], [1, "col-11_sm-24", 3, "label", "labelAr", "placeholderAr", "fieldId", "ItemsList", "fieldClass", "required", "itemselected"], [1, "grid-right"], ["type", "submit", 1, "btn", "col-3_sm-5_xs-6", "color1", "round", 3, "disabled", "click"], ["type", "button", 1, "btn", "col-3_sm-5_xs-6", "color2", "round", 3, "routerLink"]], template: function AddCategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-upload-photo", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-input-text", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-input-text", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-multi-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemselected", function AddCategoryComponent_Template_app_multi_select_itemselected_15_listener($event) { return ctx.selectProductAttribute($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCategoryComponent_Template_button_click_17_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 32, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 34, "Add")), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 36, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 38, "Category")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fieldId", "image")("image", ctx.image)("control", ctx.form.get("image"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Name en")("labelAr", "Name")("fieldId", "nameEn")("required", true)("placeholder", "Category Name")("tooltipMsg", "English")("control", ctx.form.get("name.en"))("fieldClass", "col-19_xlg-18_lg-17_md-24");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Name ar")("labelAr", "\u0627\u0644\u0627\u0633\u0645")("fieldId", "nameAr")("rtldirection", true)("placeholder", "\u0627\u0633\u0645 \u0627\u0644\u0635\u0646\u0641")("tooltipMsg", "Arabic")("control", ctx.form.get("name.ar"))("fieldClass", "col-19_xlg-18_lg-17_md-24");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Product attributes")("labelAr", "\u062E\u0648\u0627\u0635 \u0627\u0644\u0635\u0646\u0641")("placeholderAr", "\u0627\u062E\u062A\u0631 \u062E\u0648\u0627\u0635 \u0627\u0644\u0635\u0646\u0641")("fieldId", "productAttributes")("ItemsList", ctx.productAttributes)("fieldClass", "col-18_md-24")("required", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 40, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 42, "Submit")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](48, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 44, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 46, "Cancel")), " ");
    } }, directives: [_reusable_components_form_fields_upload_photo_upload_photo_component__WEBPACK_IMPORTED_MODULE_7__["UploadPhotoComponent"], _reusable_components_form_fields_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_8__["InputTextComponent"], _reusable_components_form_fields_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_9__["MultiSelectComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["LowerCasePipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  background-color: #efedf2;\n}\n\n.content[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background-color: #fffdfe;\n  border: 1px solid #f1f1f1;\n  padding-bottom: 15px !important;\n  margin-bottom: 20px;\n  box-shadow: 0 0px 8px 1px rgba(0, 0, 0, 0.05);\n  margin-top: 20px;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0c425d;\n  margin-bottom: 15px;\n  background-color: #f9f9f9;\n  border-bottom: 1px solid #f1f1f1;\n  padding: 10px !important;\n  border-radius: 10px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  font-size: 16px;\n}\n\n.textarea-maxWidth[_ngcontent-%COMP%] {\n  max-width: 81.7%;\n}\n\n[_nghost-%COMP%]     app-ng2tel .iti.iti--allow-dropdown {\n  width: 100%;\n}\n\n.activeModalIcon[_ngcontent-%COMP%] {\n  background: #1f1a5f !important;\n  border-radius: 10px;\n}\n\n[_nghost-%COMP%]     ng-select {\n  width: 100%;\n}\n\n[_nghost-%COMP%]     ng-select.ng-select-opened ng-dropdown-panel {\n  background-color: white;\n  border: 1px solid #e2e2e2;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0ZWdvcmllcy9hZGQtY2F0ZWdvcnkvRTpcXFVudGl0bGVkIEZvbGRlclxccHJpdmF0ZVxccHJvamVjdHNcXGZ1bGxfc3RhY2tcXG1vdG9iYXJcXG1vdG9iYXJfYWRtaW4vc3JjXFxzY3NzXFxhZGQtZWRpdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2F0ZWdvcmllcy9hZGQtY2F0ZWdvcnkvRTpcXFVudGl0bGVkIEZvbGRlclxccHJpdmF0ZVxccHJvamVjdHNcXGZ1bGxfc3RhY2tcXG1vdG9iYXJcXG1vdG9iYXJfYWRtaW4vc3JjXFxzY3NzXFxhYnN0cmFjdHNcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2F0ZWdvcmllcy9hZGQtY2F0ZWdvcnkvYWRkLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jYXRlZ29yaWVzL2FkZC1jYXRlZ29yeS9FOlxcVW50aXRsZWQgRm9sZGVyXFxwcml2YXRlXFxwcm9qZWN0c1xcZnVsbF9zdGFja1xcbW90b2JhclxcbW90b2Jhcl9hZG1pbi9zcmNcXGFwcFxccGFnZXNcXGNhdGVnb3JpZXNcXGFkZC1jYXRlZ29yeVxcYWRkLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBQTtFQUNBLHlCQ2lCd0I7QUNsQjFCOztBRklBO0VBQ0UsbUJBQUE7RUFDQSx5QkNld0I7RURkeEIseUJBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkNBQUE7RUFDQSxnQkFBQTtBRURGOztBRklBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0NsQk87RURtQlAsbUJBQUE7RUFDQSx5QkNMd0I7RURNeEIsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FFREY7O0FGSUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBRURGOztBRklBO0VBQ0UsZ0JBQUE7QUVERjs7QUZJQTtFQUNFLFdBQUE7QUVERjs7QUZHQTtFQUVHLDhCQUFBO0VBQ0QsbUJBQUE7QUVERjs7QUN2Q0E7RUFDSSxXQUFBO0FEMENKOztBQ3ZDTTtFQUNFLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FEeUNSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2F0ZWdvcmllcy9hZGQtY2F0ZWdvcnkvYWRkLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi9hYnN0cmFjdHMvdmFyaWFibGVzJztcblxuOmhvc3Qge1xuICBkaXNwbGF5ICAgICAgICAgOiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tYmFja2dyb3VuZC1jb2xvcjtcbn1cblxuLmNvbnRlbnQge1xuICBib3JkZXItcmFkaXVzICAgOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FyZC1ib2R5O1xuICBib3JkZXIgICAgICAgICAgOiAxcHggc29saWQgJGJvcmRlcjtcbiAgcGFkZGluZy1ib3R0b20gIDogMTVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tICAgOiAyMHB4O1xuICBib3gtc2hhZG93ICAgICAgOiAwIDBweCA4cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIG1hcmdpbi10b3AgICAgICA6IDIwcHhcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplICAgICAgIDogMjJweDtcbiAgZm9udC13ZWlnaHQgICAgIDogNzAwO1xuICBjb2xvciAgICAgICAgICAgOiAkY29sb3IxO1xuICBtYXJnaW4tYm90dG9tICAgOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FyZC1oZWFkZXItYmc7XG4gIGJvcmRlci1ib3R0b20gICA6IDFweCBzb2xpZCAkYm9yZGVyO1xuICBwYWRkaW5nICAgICAgICAgOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbiAgIDogMCAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi50ZXh0YXJlYS1tYXhXaWR0aCB7XG4gIG1heC13aWR0aDogODEuNyU7XG59XG5cbjpob3N0IDo6bmctZGVlcCBhcHAtbmcydGVsIC5pdGkuaXRpLS1hbGxvdy1kcm9wZG93biB7XG4gIHdpZHRoOiAxMDAlXG59XG4uYWN0aXZlTW9kYWxJY29ue1xuICAvLyBiYWNrZ3JvdW5kOiAjNDZiOGRhICFpbXBvcnRhbnQ7XG4gICBiYWNrZ3JvdW5kOiAjMWYxYTVmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbn0iLCIvL2NvbG9yc1xuJHdoaXRlIDogd2hpdGU7XG4kY29sb3IxOiAjMGM0MjVkO1xuJGNvbG9yMjogI2E4ZDJiZTtcbiRjb2xvcjM6ICM0ODk5YzI7XG4kY29sb3I0OiAjMWY3N2EzO1xuXG4kY29sb3I1IDogI2Y5YWU0ZTtcbiRjb2xvcjU1OiAjZDY4NTIyO1xuXG4kYm9yZGVyICAgICAgICAgICAgICAgICA6ICNmMWYxZjE7XG4kZGF0YS10YWJsZS1ib3JkZXIgICAgICA6ICNlOWU5ZTk7XG4kZ3JheTIgICAgICAgICAgICAgICAgICA6ICNlMmUyZTI7XG4kZ3JheTMgICAgICAgICAgICAgICAgICA6ICM3NTc1NzU7XG4kdHJhc2gtY29sb3IgICAgICAgICAgICA6ICNDOTMwMkM7XG4kZm9udC1jb2xvciAgICAgICAgICAgICA6ICM1NTU7XG4kYWN0aXZlLWJyZWFkY3J1bWItY29sb3I6ICMzNDM0MzQ7XG4kY2FyZC1oZWFkZXItYmcgICAgICAgICA6ICNmOWY5Zjk7IC8vI2VmZWZlZjsgLy8jZjlmOWY5O1xuJHBsYWNlaG9sZGVyLWNvbG9yICAgICAgOiAjYjNiM2IzO1xuXG4vLyBiYWNrZ3JvdW5kIGNvbG9yXG4kbWFpbi1iYWNrZ3JvdW5kLWNvbG9yICA6ICNlZmVkZjI7XG4kaGVhZGVyLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuJGRhdGEtdGFibGUtYm94ICAgICAgICAgOiAjZmZmZGZlOyAvLyNmN2Y3Zjc7XG4kY2FyZC1ib2R5ICAgICAgICAgICAgICA6ICNmZmZkZmU7XG5cbi8vIERhc2hib2FyZFxuJG1hcmdpbkJldHdlZW5DYXJkczogMjJweDtcbiRheGlzRm9udFNpemUgICAgICA6IDEycHg7XG4kc21hbGxBeGlzRm9udFNpemUgOiAxMHB4O1xuXG4vL2hlYWRlclxuJHByb2ZpbGUtbWVudS1jb2xvcjogI2Y5ZjlmOTtcbiRiaWxsLWNvbG9yICAgICAgICA6ICM5YmEyYWE7XG4kYmlsbC1ob3Zlci1jb2xvciAgOiAjNzM4MThmO1xuXG4vL0xheW91dCBWYXJpYWJsZXNcblxuJGhlYWRlci1oZWlnaHQgOiA1NXB4O1xuJHNpZGVNZW51LXdpZHRoOiAyMDBweDtcblxuXG4vL2xvZ2luXG4kbG95YWxpdHktY29sb3IgIDogIzg4N2Y3ZjtcbiRsb2dpbi1ib3gtY29sb3IgOiAjZjVmMmYwO1xuXG4vL21haWxcbiRtYWlsLWNoZWNrYm94LWNvbG9yOiAjMDA3M2FhO1xuJHVzZXItbWFpbC1jb2xvciAgICA6ICMyOTJiMmM7XG5cbi8vcHJvZmlsZVxuJGFjdGl2ZS1jb2xvciAgICAgOiAjZjRmNmY5O1xuJGljb24tY29sb3IgICAgICAgOiAjOTU5Y2I2O1xuJGxhYmVsLXRpdGxlLWNvbG9yOiAjNTA1NjZhO1xuXG4vL2VtYWlsIHRlbXBsYXRlc1xuJGVtYWlsLWJsdWUtY29sb3I6ICMwZjQxNWQ7XG4kZW1haWwtZ3JheS1jb2xvcjogIzVmNjA2MDtcbiRlbWFpbC1zeWFuLWNvbG9yOiAjYTJkOWMyO1xuJGVtYWlsLW9yYWduZS1jb2xvcjogI2ZmYWM1MjtcblxuLy9mb250c1xuJGZvbnQyOCAgICAgICAgICAgOiAyOHB4O1xuJGZvbnQyNCAgICAgICAgICAgOiAyNHB4O1xuJGZvbnQxOCAgICAgICAgICAgOiAxOHB4O1xuJGZvbnQxNiAgICAgICAgICAgOiAxNnB4O1xuJGZvbnQxNCAgICAgICAgICAgOiAxNHB4O1xuJGZvbnQxMiAgICAgICAgICAgOiAxMnB4O1xuJGZvbnQxMCAgICAgICAgICAgOiAxMHB4O1xuJGZvbnQtd2VpZ2h0LTYwMCAgOiA2MDA7XG4kZm9udC13ZWlnaHQtNTAwICA6IDUwMDtcbiRwbGFjZWhvbGRlci1mb250IDogMTJweDtcbiRsYWJlbC1mb250ICAgICAgIDogMTRweDtcbiRjYXJkLWhlYWRlci1mb250IDogMTZweDtcblxuJGRhdGEtdGFibGUtaGVhZGVyLTEzNjYgOiAxNHB4O1xuJGRhdGEtdGFibGUtaGVhZGVyLTE5MjAgOiAxNnB4O1xuJGRhdGEtdGFibGUtYm9keS0xMzY2IDogMTJweDtcbiRkYXRhLXRhYmxlLWJvZHktMTkyMDogMTZweDtcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVkZjI7XG59XG5cbi5jb250ZW50IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmRmZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgcGFkZGluZy1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm94LXNoYWRvdzogMCAwcHggOHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMGM0MjVkO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5idXR0b24ge1xuICBtYXJnaW46IDAgMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4udGV4dGFyZWEtbWF4V2lkdGgge1xuICBtYXgtd2lkdGg6IDgxLjclO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgYXBwLW5nMnRlbCAuaXRpLml0aS0tYWxsb3ctZHJvcGRvd24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFjdGl2ZU1vZGFsSWNvbiB7XG4gIGJhY2tncm91bmQ6ICMxZjFhNWYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG5nLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgOjpuZy1kZWVwIG5nLXNlbGVjdC5uZy1zZWxlY3Qtb3BlbmVkIG5nLWRyb3Bkb3duLXBhbmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmUyZTI7XG4gIHBhZGRpbmc6IDVweDtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc2Nzcy9hZGQtZWRpdC5jb21wb25lbnQuc2Nzc1wiO1xyXG5cclxuXHJcbjpob3N0IDo6bmctZGVlcCBuZy1zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAmLm5nLXNlbGVjdC1vcGVuZWQge1xyXG5cclxuICAgICAgbmctZHJvcGRvd24tcGFuZWwge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmUyZTI7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG4gICAgfVxyXG59XHJcbiAgXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddCategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-category',
                templateUrl: './add-category.component.html',
                styleUrls: ['./add-category.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"] }, { type: _product_attributes_product_attributes_service__WEBPACK_IMPORTED_MODULE_3__["ProductAttributesService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/categories/add-sub-category/add-sub-category.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/categories/add-sub-category/add-sub-category.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AddSubCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSubCategoryComponent", function() { return AddSubCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../categories.service */ "./src/app/pages/categories/categories.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _reusable_components_form_fields_upload_photo_upload_photo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../reusable-components/form-fields/upload-photo/upload-photo.component */ "./src/app/reusable-components/form-fields/upload-photo/upload-photo.component.ts");
/* harmony import */ var _reusable_components_form_fields_select_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../reusable-components/form-fields/select/select.component */ "./src/app/reusable-components/form-fields/select/select.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _reusable_components_form_fields_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../reusable-components/form-fields/input-text/input-text.component */ "./src/app/reusable-components/form-fields/input-text/input-text.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");













function AddSubCategoryComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemselected", function AddSubCategoryComponent_ng_container_15_Template_app_select_itemselected_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.selectSubCategory(i_r2, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "sub category")("labelAr", "\u0627\u0644\u0635\u0646\u0641 \u0627\u0644\u0641\u0631\u0639\u064A")("fieldId", "subCategory" + (i_r2 + 1).toString())("ItemsList", ctx_r0.subCategories[i_r2])("placeholder", "Choose sub category")("placeholderAr", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0635\u0646\u0641 \u0627\u0644\u0641\u0631\u0639\u064A")("fieldClass", "col-18_md-24")("required", true);
} }
const _c0 = function () { return ["/categories"]; };
class AddSubCategoryComponent {
    constructor(fb, categoriesService, toastr, spinner, router) {
        this.fb = fb;
        this.categoriesService = categoriesService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.router = router;
        this.parentId = '';
        this.form = this.fb.group({
            image: [],
            name: this.fb.group({
                en: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                ar: [''],
            }),
        });
        this.subCategories = [];
        this.selectedCategory = {};
    }
    ngOnInit() {
        this.getbaseCategoriesList();
    }
    getbaseCategoriesList() {
        this.spinner.show();
        this.categoriesService.getBaseCategories();
        this.categoriesService.baseCategories.subscribe((data) => {
            if (data) {
                this.selectBaseCategoriesList = data.map((x) => {
                    return {
                        _id: x['_id'],
                        nameEn: `${x['name']['en']}`,
                        nameAr: `${x['name']['ar']}`,
                    };
                });
            }
        });
        this.spinner.hide();
    }
    selectBaseCategory(event) {
        this.spinner.show();
        if (event) {
            this.selectedCategory = {};
            this.selectedCategory[0] = event;
            this.categoriesService.getOne(event._id).subscribe((res) => {
                this.toastr.info(res['message'], 'Info');
                this.subCategories = [];
                if (res['data'].categories) {
                    if (res['data'].categories.length > 0) {
                        this.subCategories[0] = res['data'].categories.map((x) => {
                            return {
                                _id: x['_id'],
                                nameEn: `${x['name']['en']}`,
                                nameAr: `${x['name']['ar']}`,
                            };
                        });
                    }
                }
            }, (error) => {
                console.log(error);
                this.toastr.error(error.error.message, 'Error');
                // this.error.next(error.error.message);
            });
        }
        this.spinner.hide();
    }
    // End select dropdown
    selectSubCategory(fieldIndex, event) {
        this.spinner.show();
        // delete all next selected categories to index
        for (const key in this.selectedCategory) {
            if (key > fieldIndex + 1) {
                delete this.selectedCategory[key];
            }
        }
        // delete all next subcategories
        this.subCategories.splice(fieldIndex + 1);
        if (event) {
            // selected category of index = event
            this.selectedCategory[fieldIndex + 1] = event;
            this.categoriesService.getOne(event._id).subscribe((res) => {
                this.toastr.info(res['message'], 'Info');
                if (res['data'].categories) {
                    if (res['data'].categories.length > 0) {
                        this.subCategories[fieldIndex + 1] = res['data'].categories.map((x) => {
                            return {
                                _id: x['_id'],
                                nameEn: `${x['name']['en']}`,
                                nameAr: `${x['name']['ar']}`,
                            };
                        });
                    }
                }
            }, (error) => {
                console.log(error);
                this.toastr.error(error.error.message, 'Error');
                // this.error.next(error.error.message);
            });
        }
        else {
            // selected category of index = event
            delete this.selectedCategory[fieldIndex + 1];
        }
        this.spinner.hide();
    }
    onSubmit(formValue) {
        this.spinner.show();
        const formData = new FormData();
        for (const key in formValue) {
            if (formValue[key] instanceof File) {
                formData.append(key, formValue[key]);
            }
            else {
                // contains object
                formData.append(key, JSON.stringify(formValue[key]));
            }
        }
        var count = 0;
        for (var prop in this.selectedCategory) {
            if (this.selectedCategory.hasOwnProperty(prop))
                ++count;
        }
        if (this.selectedCategory[count - 1]) {
            this.parentId = this.selectedCategory[count - 1]._id;
        }
        if (!this.parentId) {
            return this.toastr.error('Select parent category', 'Error');
        }
        this.categoriesService.addSubCategory(formData, this.parentId).subscribe((res) => {
            console.log(res);
            this.image = null;
            this.form.reset();
            this.toastr.info(res['message'], 'Info');
            this.router.navigate(['/categories']);
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error.message, 'Error');
            // this.error.next(error.error.message);
        });
        this.spinner.hide();
    }
}
AddSubCategoryComponent.ɵfac = function AddSubCategoryComponent_Factory(t) { return new (t || AddSubCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AddSubCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddSubCategoryComponent, selectors: [["app-add-sub-category"]], decls: 27, vars: 49, consts: [[1, "grid-center-noGutter"], [1, "col-20_sm-22_xs-23", "grid-center-noGutter", "content"], [1, "title", "col-24", "grid-center"], [1, "form", "col-23"], [1, "grid-middle-spaceBetween-noGutter"], [1, "form-group", "grid-center-middle-noGutter", "col-24"], [1, "col-24", "grid-center"], [3, "fieldId", "image", "control"], [1, "col-24", "grid-noGutter"], [1, "col-11_sm-24", 3, "label", "labelAr", "fieldId", "ItemsList", "placeholder", "placeholderAr", "fieldClass", "required", "itemselected"], [4, "ngFor", "ngForOf"], ["type", "text", 1, "col-11_sm-24", 3, "label", "fieldId", "required", "placeholder", "tooltipMsg", "control", "fieldClass"], ["type", "text", 1, "col-11_sm-24", "grid", 3, "label", "fieldId", "rtldirection", "placeholder", "tooltipMsg", "control", "fieldClass"], [1, "grid-right"], ["type", "submit", 1, "btn", "col-3_sm-5_xs-6", "color1", "round", 3, "disabled", "click"], ["type", "button", 1, "btn", "col-3_sm-5_xs-6", "color2", "round", 3, "routerLink"]], template: function AddSubCategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-upload-photo", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemselected", function AddSubCategoryComponent_Template_app_select_itemselected_14_listener($event) { return ctx.selectBaseCategory($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AddSubCategoryComponent_ng_container_15_Template, 3, 8, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-input-text", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-input-text", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddSubCategoryComponent_Template_button_click_19_listener() { return ctx.onSubmit(ctx.form.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 32, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 34, "Add")), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 36, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 38, "sub-category")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fieldId", "image")("image", ctx.image)("control", ctx.form.get("image"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Category")("labelAr", "\u0627\u0644\u0635\u0646\u0641")("fieldId", "parentCategory")("ItemsList", ctx.selectBaseCategoriesList)("placeholder", "Choose parent category")("placeholderAr", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0635\u0646\u0641 \u0627\u0644\u0631\u0626\u064A\u0633\u064A")("fieldClass", "col-18_md-24")("required", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subCategories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Name en")("fieldId", "nameEn")("required", true)("placeholder", "Category Name")("tooltipMsg", "English")("control", ctx.form.get("name.en"))("fieldClass", "col-19_xlg-18_lg-17_md-24");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Name ar")("fieldId", "nameAr")("rtldirection", true)("placeholder", "\u0627\u0633\u0645 \u0627\u0644\u0635\u0646\u0641")("tooltipMsg", "Arabic")("control", ctx.form.get("name.ar"))("fieldClass", "col-19_xlg-18_lg-17_md-24");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 40, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 42, "Submit")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](48, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 44, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 46, "Cancel")), " ");
    } }, directives: [_reusable_components_form_fields_upload_photo_upload_photo_component__WEBPACK_IMPORTED_MODULE_6__["UploadPhotoComponent"], _reusable_components_form_fields_select_select_component__WEBPACK_IMPORTED_MODULE_7__["SelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _reusable_components_form_fields_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_9__["InputTextComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["LowerCasePipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  background-color: #efedf2;\n}\n\n.content[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background-color: #fffdfe;\n  border: 1px solid #f1f1f1;\n  padding-bottom: 15px !important;\n  margin-bottom: 20px;\n  box-shadow: 0 0px 8px 1px rgba(0, 0, 0, 0.05);\n  margin-top: 20px;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0c425d;\n  margin-bottom: 15px;\n  background-color: #f9f9f9;\n  border-bottom: 1px solid #f1f1f1;\n  padding: 10px !important;\n  border-radius: 10px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  font-size: 16px;\n}\n\n.textarea-maxWidth[_ngcontent-%COMP%] {\n  max-width: 81.7%;\n}\n\n[_nghost-%COMP%]     app-ng2tel .iti.iti--allow-dropdown {\n  width: 100%;\n}\n\n.activeModalIcon[_ngcontent-%COMP%] {\n  background: #1f1a5f !important;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0ZWdvcmllcy9hZGQtc3ViLWNhdGVnb3J5L0U6XFxVbnRpdGxlZCBGb2xkZXJcXHByaXZhdGVcXHByb2plY3RzXFxmdWxsX3N0YWNrXFxtb3RvYmFyXFxtb3RvYmFyX2FkbWluL3NyY1xcc2Nzc1xcYWRkLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NhdGVnb3JpZXMvYWRkLXN1Yi1jYXRlZ29yeS9FOlxcVW50aXRsZWQgRm9sZGVyXFxwcml2YXRlXFxwcm9qZWN0c1xcZnVsbF9zdGFja1xcbW90b2JhclxcbW90b2Jhcl9hZG1pbi9zcmNcXHNjc3NcXGFic3RyYWN0c1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9wYWdlcy9jYXRlZ29yaWVzL2FkZC1zdWItY2F0ZWdvcnkvYWRkLXN1Yi1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7RUFDQSx5QkNpQndCO0FDbEIxQjs7QUZJQTtFQUNFLG1CQUFBO0VBQ0EseUJDZXdCO0VEZHhCLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0VBQ0EsZ0JBQUE7QUVERjs7QUZJQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNDbEJPO0VEbUJQLG1CQUFBO0VBQ0EseUJDTHdCO0VETXhCLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBRURGOztBRklBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUVERjs7QUZJQTtFQUNFLGdCQUFBO0FFREY7O0FGSUE7RUFDRSxXQUFBO0FFREY7O0FGR0E7RUFFRyw4QkFBQTtFQUNELG1CQUFBO0FFREYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYXRlZ29yaWVzL2FkZC1zdWItY2F0ZWdvcnkvYWRkLXN1Yi1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vYWJzdHJhY3RzL3ZhcmlhYmxlcyc7XG5cbjpob3N0IHtcbiAgZGlzcGxheSAgICAgICAgIDogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWJhY2tncm91bmQtY29sb3I7XG59XG5cbi5jb250ZW50IHtcbiAgYm9yZGVyLXJhZGl1cyAgIDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNhcmQtYm9keTtcbiAgYm9yZGVyICAgICAgICAgIDogMXB4IHNvbGlkICRib3JkZXI7XG4gIHBhZGRpbmctYm90dG9tICA6IDE1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbSAgIDogMjBweDtcbiAgYm94LXNoYWRvdyAgICAgIDogMCAwcHggOHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBtYXJnaW4tdG9wICAgICAgOiAyMHB4XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZSAgICAgICA6IDIycHg7XG4gIGZvbnQtd2VpZ2h0ICAgICA6IDcwMDtcbiAgY29sb3IgICAgICAgICAgIDogJGNvbG9yMTtcbiAgbWFyZ2luLWJvdHRvbSAgIDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNhcmQtaGVhZGVyLWJnO1xuICBib3JkZXItYm90dG9tICAgOiAxcHggc29saWQgJGJvcmRlcjtcbiAgcGFkZGluZyAgICAgICAgIDogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5idXR0b24ge1xuICBtYXJnaW4gICA6IDAgMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4udGV4dGFyZWEtbWF4V2lkdGgge1xuICBtYXgtd2lkdGg6IDgxLjclO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgYXBwLW5nMnRlbCAuaXRpLml0aS0tYWxsb3ctZHJvcGRvd24ge1xuICB3aWR0aDogMTAwJVxufVxuLmFjdGl2ZU1vZGFsSWNvbntcbiAgLy8gYmFja2dyb3VuZDogIzQ2YjhkYSAhaW1wb3J0YW50O1xuICAgYmFja2dyb3VuZDogIzFmMWE1ZiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG59IiwiLy9jb2xvcnNcbiR3aGl0ZSA6IHdoaXRlO1xuJGNvbG9yMTogIzBjNDI1ZDtcbiRjb2xvcjI6ICNhOGQyYmU7XG4kY29sb3IzOiAjNDg5OWMyO1xuJGNvbG9yNDogIzFmNzdhMztcblxuJGNvbG9yNSA6ICNmOWFlNGU7XG4kY29sb3I1NTogI2Q2ODUyMjtcblxuJGJvcmRlciAgICAgICAgICAgICAgICAgOiAjZjFmMWYxO1xuJGRhdGEtdGFibGUtYm9yZGVyICAgICAgOiAjZTllOWU5O1xuJGdyYXkyICAgICAgICAgICAgICAgICAgOiAjZTJlMmUyO1xuJGdyYXkzICAgICAgICAgICAgICAgICAgOiAjNzU3NTc1O1xuJHRyYXNoLWNvbG9yICAgICAgICAgICAgOiAjQzkzMDJDO1xuJGZvbnQtY29sb3IgICAgICAgICAgICAgOiAjNTU1O1xuJGFjdGl2ZS1icmVhZGNydW1iLWNvbG9yOiAjMzQzNDM0O1xuJGNhcmQtaGVhZGVyLWJnICAgICAgICAgOiAjZjlmOWY5OyAvLyNlZmVmZWY7IC8vI2Y5ZjlmOTtcbiRwbGFjZWhvbGRlci1jb2xvciAgICAgIDogI2IzYjNiMztcblxuLy8gYmFja2dyb3VuZCBjb2xvclxuJG1haW4tYmFja2dyb3VuZC1jb2xvciAgOiAjZWZlZGYyO1xuJGhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiRkYXRhLXRhYmxlLWJveCAgICAgICAgIDogI2ZmZmRmZTsgLy8jZjdmN2Y3O1xuJGNhcmQtYm9keSAgICAgICAgICAgICAgOiAjZmZmZGZlO1xuXG4vLyBEYXNoYm9hcmRcbiRtYXJnaW5CZXR3ZWVuQ2FyZHM6IDIycHg7XG4kYXhpc0ZvbnRTaXplICAgICAgOiAxMnB4O1xuJHNtYWxsQXhpc0ZvbnRTaXplIDogMTBweDtcblxuLy9oZWFkZXJcbiRwcm9maWxlLW1lbnUtY29sb3I6ICNmOWY5Zjk7XG4kYmlsbC1jb2xvciAgICAgICAgOiAjOWJhMmFhO1xuJGJpbGwtaG92ZXItY29sb3IgIDogIzczODE4ZjtcblxuLy9MYXlvdXQgVmFyaWFibGVzXG5cbiRoZWFkZXItaGVpZ2h0IDogNTVweDtcbiRzaWRlTWVudS13aWR0aDogMjAwcHg7XG5cblxuLy9sb2dpblxuJGxveWFsaXR5LWNvbG9yICA6ICM4ODdmN2Y7XG4kbG9naW4tYm94LWNvbG9yIDogI2Y1ZjJmMDtcblxuLy9tYWlsXG4kbWFpbC1jaGVja2JveC1jb2xvcjogIzAwNzNhYTtcbiR1c2VyLW1haWwtY29sb3IgICAgOiAjMjkyYjJjO1xuXG4vL3Byb2ZpbGVcbiRhY3RpdmUtY29sb3IgICAgIDogI2Y0ZjZmOTtcbiRpY29uLWNvbG9yICAgICAgIDogIzk1OWNiNjtcbiRsYWJlbC10aXRsZS1jb2xvcjogIzUwNTY2YTtcblxuLy9lbWFpbCB0ZW1wbGF0ZXNcbiRlbWFpbC1ibHVlLWNvbG9yOiAjMGY0MTVkO1xuJGVtYWlsLWdyYXktY29sb3I6ICM1ZjYwNjA7XG4kZW1haWwtc3lhbi1jb2xvcjogI2EyZDljMjtcbiRlbWFpbC1vcmFnbmUtY29sb3I6ICNmZmFjNTI7XG5cbi8vZm9udHNcbiRmb250MjggICAgICAgICAgIDogMjhweDtcbiRmb250MjQgICAgICAgICAgIDogMjRweDtcbiRmb250MTggICAgICAgICAgIDogMThweDtcbiRmb250MTYgICAgICAgICAgIDogMTZweDtcbiRmb250MTQgICAgICAgICAgIDogMTRweDtcbiRmb250MTIgICAgICAgICAgIDogMTJweDtcbiRmb250MTAgICAgICAgICAgIDogMTBweDtcbiRmb250LXdlaWdodC02MDAgIDogNjAwO1xuJGZvbnQtd2VpZ2h0LTUwMCAgOiA1MDA7XG4kcGxhY2Vob2xkZXItZm9udCA6IDEycHg7XG4kbGFiZWwtZm9udCAgICAgICA6IDE0cHg7XG4kY2FyZC1oZWFkZXItZm9udCA6IDE2cHg7XG5cbiRkYXRhLXRhYmxlLWhlYWRlci0xMzY2IDogMTRweDtcbiRkYXRhLXRhYmxlLWhlYWRlci0xOTIwIDogMTZweDtcbiRkYXRhLXRhYmxlLWJvZHktMTM2NiA6IDEycHg7XG4kZGF0YS10YWJsZS1ib2R5LTE5MjA6IDE2cHg7XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZGYyO1xufVxuXG4uY29udGVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZkZmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgMHB4IDhweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzBjNDI1ZDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnRleHRhcmVhLW1heFdpZHRoIHtcbiAgbWF4LXdpZHRoOiA4MS43JTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIGFwcC1uZzJ0ZWwgLml0aS5pdGktLWFsbG93LWRyb3Bkb3duIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hY3RpdmVNb2RhbEljb24ge1xuICBiYWNrZ3JvdW5kOiAjMWYxYTVmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddSubCategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-sub-category',
                templateUrl: './add-sub-category.component.html',
                styleUrls: ['./add-sub-category.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/categories/categories-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/categories/categories-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CategoriesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesRoutingModule", function() { return CategoriesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories.component */ "./src/app/pages/categories/categories.component.ts");
/* harmony import */ var _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-category/add-category.component */ "./src/app/pages/categories/add-category/add-category.component.ts");
/* harmony import */ var _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-category/edit-category.component */ "./src/app/pages/categories/edit-category/edit-category.component.ts");
/* harmony import */ var _add_sub_category_add_sub_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-sub-category/add-sub-category.component */ "./src/app/pages/categories/add-sub-category/add-sub-category.component.ts");








const routes = [
    { path: '', component: _categories_component__WEBPACK_IMPORTED_MODULE_2__["CategoriesComponent"] },
    { path: 'add', component: _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_3__["AddCategoryComponent"] },
    { path: 'edit/:id', component: _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_4__["EditCategoryComponent"] },
    { path: 'add-subCategory', component: _add_sub_category_add_sub_category_component__WEBPACK_IMPORTED_MODULE_5__["AddSubCategoryComponent"] },
];
class CategoriesRoutingModule {
}
CategoriesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CategoriesRoutingModule });
CategoriesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CategoriesRoutingModule_Factory(t) { return new (t || CategoriesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CategoriesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/categories/categories.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/categories/categories.component.ts ***!
  \**********************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular7_data_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular7-data-table */ "./node_modules/angular7-data-table/__ivy_ngcc__/esm2015/angular7-data-table.js");
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories.service */ "./src/app/pages/categories/categories.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");














function CategoriesComponent_ng_container_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function CategoriesComponent_ng_template_67_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r20.name.en);
} }
function CategoriesComponent_ng_template_67_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r21.profitPercentage && item_r21.profitPercentage !== 0 ? item_r21.profitPercentage + "%" : item_r21.profitValue && item_r21.profitValue !== 0 ? item_r21.profitValue + " EGP" : 0);
} }
function CategoriesComponent_ng_template_67_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r22 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r22.discountPercentage && item_r22.discountPercentage !== 0 ? item_r22.discountPercentage + "%" : item_r22.discountValue && item_r22.discountValue !== 0 ? item_r22.discountValue + " EGP" : 0);
} }
function CategoriesComponent_ng_template_67_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r23 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r23.parentCategory ? item_r23.parentCategory.name.en : "");
} }
function CategoriesComponent_ng_template_67_ng_template_15_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r27 = ctx.index;
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \" ", item_r24.productAttributes ? item_r24.productAttributes[i_r27].name.en : "", " \" ");
} }
function CategoriesComponent_ng_template_67_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CategoriesComponent_ng_template_67_ng_template_15_span_0_Template, 3, 1, "span", 41);
} if (rf & 2) {
    const item_r24 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r24.productAttributes);
} }
const _c0 = function (a1) { return ["./edit/", a1]; };
function CategoriesComponent_ng_template_67_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "colorize");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoriesComponent_ng_template_67_ng_template_18_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const item_r29 = ctx.item; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](70); return ctx_r30.openModalDelete(_r4, item_r29._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, item_r29._id))("tooltip", "Edit");
} }
function CategoriesComponent_ng_template_67_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "data-table", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reload", function CategoriesComponent_ng_template_67_Template_data_table_reload_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r32.reloadItems($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "data-table-column", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CategoriesComponent_ng_template_67_ng_template_3_Template, 2, 1, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "data-table-column", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CategoriesComponent_ng_template_67_ng_template_6_Template, 2, 1, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "data-table-column", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CategoriesComponent_ng_template_67_ng_template_9_Template, 2, 1, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "data-table-column", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CategoriesComponent_ng_template_67_ng_template_12_Template, 2, 1, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "data-table-column", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CategoriesComponent_ng_template_67_ng_template_15_Template, 1, 1, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "data-table-column", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CategoriesComponent_ng_template_67_ng_template_18_Template, 6, 4, "ng-template", 40, 37, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx_r3.tableElements)("itemCount", ctx_r3.itemCount)("pageLimits", ctx_r3.limits)("limit", ctx_r3.limit)("pagination", true)("noDataMessage", "No data to show");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("property", "name")("header", ctx_r3.arabic ? "\u0627\u0644\u0627\u0633\u0645" : "Name")("sortable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("property", "profit")("header", ctx_r3.arabic ? "\u0627\u0644\u0631\u0628\u062D" : "Profit")("sortable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("property", "discount")("header", ctx_r3.arabic ? "\u0627\u0644\u062E\u0635\u0645" : "Discount")("sortable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("property", "parentCategory")("header", ctx_r3.arabic ? "\u0627\u0644\u0635\u0646\u0641 \u0627\u0644\u0627\u0639\u0644\u064A" : "Head category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("property", "productAttributes")("header", ctx_r3.arabic ? "\u0627\u0644\u062E\u0648\u0627\u0635" : "Attributes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 150)("header", ctx_r3.arabic ? "" : "Actions");
} }
function CategoriesComponent_ng_template_69_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Do you want to Delete This Element ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoriesComponent_ng_template_69_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r34.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoriesComponent_ng_template_69_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r36.deleteElement(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoriesComponent_ng_template_69_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r37.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 4, "Submit")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 8, "Cancel")), " ");
} }
function CategoriesComponent_ng_template_71_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Do you want to change this element status? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoriesComponent_ng_template_71_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r38.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 4, "Submit")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 8, "Cancel")), " ");
} }
const _c1 = function () { return ["./add"]; };
const _c2 = function () { return ["./add-subCategory"]; };
class CategoriesComponent {
    constructor(categoriesService, modalService, languageService, toastr, spinner) {
        this.categoriesService = categoriesService;
        this.modalService = modalService;
        this.languageService = languageService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.items = [];
        this.itemCount = 0;
        this.limit = 20;
        this.limits = [20, 25, 50];
        this.offset = 1;
        this.tableElements = [];
        this.langSub = this.languageService.currentLanguage.subscribe((lang) => {
            this.currentLang = lang;
            if (this.currentLang && this.currentLang === 'ar') {
                this.arabic = true;
            }
            else {
                this.arabic = false;
            }
        });
    }
    ngOnDestroy() {
        this.langSub.unsubscribe();
    }
    ngOnInit() {
        this.spinner.show();
        this.categoriesService.getAll();
        this.categoriesService.categories.subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (data) {
                this.items = data;
                this.itemResource = new angular7_data_table__WEBPACK_IMPORTED_MODULE_2__["DataTableResource"](data);
                this.itemCount = yield this.itemResource.count();
                this.reloadItems({
                    offset: 0,
                    limit: this.limit,
                });
            }
        }));
        this.spinner.hide();
    }
    reloadItems(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.itemResource) {
                this.tableElements = yield this.itemResource.query(event);
            }
        });
    }
    FilterRecords(FilterRecord) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.tableElements = this.items;
            if (FilterRecord !== '') {
                this.tableElements = this.items.filter((item) => {
                    var _a;
                    return item.name.en.toLowerCase().includes(FilterRecord) || ((_a = item.parentCategory) === null || _a === void 0 ? void 0 : _a.name.en.toLowerCase().includes(FilterRecord));
                });
            }
            this.itemResource = new angular7_data_table__WEBPACK_IMPORTED_MODULE_2__["DataTableResource"](this.tableElements);
            this.itemCount = yield this.itemResource.count();
            this.reloadItems({
                offset: 0,
                limit: this.limit,
            });
        });
    }
    openModalDelete(template, id) {
        this.itemId = id;
        this.modalRef = this.modalService.show(template);
    }
    deleteElement() {
        this.spinner.show();
        this.modalRef.hide();
        this.categoriesService.deleteOne(this.itemId).subscribe((res) => {
            console.log(res);
            this.toastr.info(res['message'], 'Info');
            this.categoriesService.getAll();
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error.message, 'Error');
            // this.error.next(error.error.message);
        });
        this.spinner.hide();
    }
}
CategoriesComponent.ɵfac = function CategoriesComponent_Factory(t) { return new (t || CategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"])); };
CategoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CategoriesComponent, selectors: [["app-categories"]], decls: 73, vars: 51, consts: [[1, "grid-center-noGutter"], [1, "col-20_sm-22_xs-23", 2, "margin-top", "20px"], [1, "card"], [1, "card-header", "grid-noGutter"], [1, "card-body", "grid-center-noGutter"], [1, "col-24", "grid-spaceBetween-noGutter"], [1, "card", "xs-hidden"], [1, "card-body"], [2, "display", "inline-block", "background-color", "#4899c2", "padding", "15px", "color", "white"], [1, "material-icons"], [2, "display", "inline-block", "margin", "0 10px"], [2, "color", "#20a8d8", "font-size", "18px", "font-weight", "600"], [2, "color", "#73818f", "font-size", "80%", "font-weight", "700"], [1, "col-top", "xs-24", "grid-noGutter", 2, "margin-top", "15px"], [1, "grid-column-noGutter"], [1, ""], [1, "btn", "color1", "round", "addbtn", 3, "routerLink"], [2, "height", "8px"], [1, "col-24", "grid-center-noGutter", 2, "margin-top", "20px"], [1, "col-24", "grid-noGutter"], [1, "col-12_xs-24", "grid-left-noGutter", 2, "margin-left", "10px"], ["for", "", 1, "col-24", "grid-noGutter", 2, "font-weight", "bold"], [1, "col-24", "grid"], ["type", "text", "placeholder", "e.g. English Name", 1, "form-control", "col"], ["FilterRecord", ""], [1, "btn", "col-4", "color1", "round", "search"], [1, "md-hidden", 3, "click"], [1, "btn", "col-4", "color2", "round", "search", 3, "click"], [1, "md-hidden"], [1, "grid-center-noGutter", 2, "margin-top", "20px"], [4, "ngTemplateOutlet"], ["table", ""], ["id", "template2"], ["templateDelete", ""], ["templateLock", ""], ["id", "my-table", "title", "List of Categories", 3, "items", "itemCount", "pageLimits", "limit", "pagination", "noDataMessage", "reload"], [3, "property", "header", "sortable"], ["dataTableCell", ""], [3, "property", "header"], [3, "width", "header"], ["class", "grid-center"], [4, "ngFor", "ngForOf"], ["placement", "bottom", 1, "pencil", 3, "routerLink", "tooltip"], ["tooltip", "Delete", "placement", "bottom", "triggers", "mouseenter:mouseleave", 1, "trash", 3, "click"], [1, "modal-header"], [2, "color", "red", "font-weight", "bold", "justify-content", "center"], [1, "fa", "fa-trash", "fa-lg", "mt-4"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "grid-right"], ["type", "button", 1, "btn", "col-5_sm-5_xs-6", "color1", "round", 2, "margin-right", "10px", 3, "click"], ["type", "button", 1, "btn", "col-5_sm-5_xs-6", "color2", "round", 3, "click"], [2, "color", "#0c425d", "font-weight", "bold", "justify-content", "center"], [1, "fa", "fa-lock", "fa-lg", "mt-4"], ["type", "button", 1, "btn", "col-5_sm-5_xs-6", "color1", "round", 2, "margin-right", "10px"], ["type", "button", 1, "btn", "col-5_sm-5_xs-6", "color2", "round"]], template: function CategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](35, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](44, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoriesComponent_Template_span_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](47); return ctx.FilterRecords(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](52, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoriesComponent_Template_a_click_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](47); ctx.FilterRecords(""); return _r0.value = ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](60, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, CategoriesComponent_ng_container_66_Template, 1, 0, "ng-container", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, CategoriesComponent_ng_template_67_Template, 20, 21, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, CategoriesComponent_ng_template_69_Template, 17, 10, "ng-template", 32, 33, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, CategoriesComponent_ng_template_71_Template, 17, 10, "ng-template", 32, 34, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 15, "Categories")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.items.length, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 17, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 19, "Categories")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](49, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 21, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 23, "Add")), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 25, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](30, 27, "Category")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](50, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 29, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](35, 31, "Add")), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 33, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](37, 35, "sub-category")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](43, 37, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](44, 39, "Search for")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](51, 41, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](52, 43, "Search")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](59, 45, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](60, 47, "Clear")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r2);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgTemplateOutlet"], angular7_data_table__WEBPACK_IMPORTED_MODULE_2__["DataTable"], angular7_data_table__WEBPACK_IMPORTED_MODULE_2__["DataTableColumn"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_10__["TooltipDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["LowerCasePipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  background-color: #efedf2;\n}\n\n[_nghost-%COMP%]     {\n  border-radius: 10px;\n}\n\n[_nghost-%COMP%]     .data-table-header {\n  padding: 8px 8px;\n  margin-bottom: 0 !important;\n  background-color: #f9f9f9;\n  border: 1px solid #f1f1f1;\n  border-bottom: none;\n  color: #555;\n  border-radius: 10px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n[_nghost-%COMP%]     .data-table-header button {\n  padding-top: 0;\n}\n\n[_nghost-%COMP%]     .data-table-box {\n  border-radius: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  padding: 30px;\n  border: 1px solid #e9e9e9;\n  border-top: 0;\n  border-bottom: 0;\n}\n\n[_nghost-%COMP%]     .data-table {\n  box-shadow: none;\n  border: 1px solid #e9e9e9;\n  color: #555;\n}\n\n[_nghost-%COMP%]     .data-table thead {\n  border-bottom: 1px solid #999;\n  font-size: 16px;\n}\n\n@media (max-width: 1366px) {\n  [_nghost-%COMP%]     .data-table thead {\n    font-size: 14px;\n  }\n}\n\n[_nghost-%COMP%]     .data-table tbody {\n  font-size: 16px;\n}\n\n@media (max-width: 1366px) {\n  [_nghost-%COMP%]     .data-table tbody {\n    font-size: 12px;\n  }\n}\n\n[_nghost-%COMP%]     .data-table tbody td, [_nghost-%COMP%]     .data-table tbody th {\n  font-size: 13px;\n  color: #555353;\n  font-weight: initial;\n}\n\n[_nghost-%COMP%]     .data-table tbody td.index-column, [_nghost-%COMP%]     .data-table tbody th.index-column {\n  font-weight: bold;\n}\n\n[_nghost-%COMP%]     .data-table tbody td[data-label=Status] span, [_nghost-%COMP%]     .data-table tbody th[data-label=Status] span {\n  display: block;\n  color: white;\n  margin: 2px 0;\n  border-radius: 10px;\n}\n\n[_nghost-%COMP%]     .data-table tbody td[data-label=Status] span.blocked, [_nghost-%COMP%]     .data-table tbody th[data-label=Status] span.blocked {\n  background-color: grey;\n}\n\n[_nghost-%COMP%]     .data-table tbody td[data-label=Status] span.deleted, [_nghost-%COMP%]     .data-table tbody th[data-label=Status] span.deleted {\n  background-color: #ff6b6b;\n}\n\n[_nghost-%COMP%]     .data-table tbody td[data-label=Status] span.confirmed, [_nghost-%COMP%]     .data-table tbody th[data-label=Status] span.confirmed {\n  background-color: #0c425d;\n}\n\n[_nghost-%COMP%]     .data-table tbody td[data-label=Status] span.active, [_nghost-%COMP%]     .data-table tbody th[data-label=Status] span.active {\n  background-color: #28a745;\n}\n\n[_nghost-%COMP%]     .data-table tbody td[data-label=Status] span.pending, [_nghost-%COMP%]     .data-table tbody th[data-label=Status] span.pending {\n  background-color: #a0a02e;\n}\n\n[_nghost-%COMP%]     .data-table tbody td[data-label=Status] span.done, [_nghost-%COMP%]     .data-table tbody th[data-label=Status] span.done {\n  background-color: #044970;\n}\n\n[_nghost-%COMP%]     .data-table tbody img {\n  border: 1px solid #f1f1f1;\n}\n\n[_nghost-%COMP%]     .data-table-wrapper {\n  border-radius: 10px;\n  background-color: white;\n  box-shadow: 0 0px 8px 1px rgba(0, 0, 0, 0.05);\n  margin-bottom: 20px;\n}\n\n[_nghost-%COMP%]     .h4.title {\n  font-weight: bold;\n  margin: 0;\n  font-size: 16px;\n}\n\n[_nghost-%COMP%]     data-table-pagination > div {\n  justify-content: center !important;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n\n.btn.search[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  padding: 4px 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n@media (max-width: 1024px) {\n  .btn.search[_ngcontent-%COMP%] {\n    padding: 2px 0;\n  }\n}\n\n.btn.search[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  display: none;\n}\n\n@media (max-width: 1024px) {\n  .btn.search[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n}\n\n\n\n[_nghost-%COMP%] {\n  width: 100%;\n}\n\n[_nghost-%COMP%]     caption {\n  display: none;\n}\n\n[_nghost-%COMP%]     thead tr {\n  height: 40px;\n  background-color: #f6f6f6;\n  color: #555658;\n}\n\n[_nghost-%COMP%]     thead tr th {\n  padding: 1rem 0;\n}\n\n[_nghost-%COMP%]     tbody th, [_nghost-%COMP%]     tbody td {\n  padding: 0.35rem;\n}\n\n[_nghost-%COMP%]     .row-odd {\n  background-color: #f9f9f9 !important;\n}\n\n[_nghost-%COMP%]     .data-table-row:hover {\n  background-color: #f9f9f9 !important;\n}\n\n[_nghost-%COMP%]     .data-table-box {\n  background-color: #fffdfe;\n  border: 1px solid #f1f1f1;\n  margin-bottom: 10px;\n}\n\n[_nghost-%COMP%]     .table td, [_nghost-%COMP%]     .table th {\n  border-top: 1px solid #e9e9e9;\n}\n\n[_nghost-%COMP%]     .table thead th, [_nghost-%COMP%]     .data-table > thead > tr > td {\n  border-bottom: none;\n}\n\n[_nghost-%COMP%]     th {\n  vertical-align: middle;\n  text-align: center;\n  font-weight: 600;\n}\n\n[_nghost-%COMP%]     td {\n  vertical-align: middle;\n  text-align: center;\n}\n\n[_nghost-%COMP%]     td.index-column {\n  font-weight: bold;\n  font-size: 13px;\n}\n\n[_nghost-%COMP%]     .pagination-range {\n  display: none;\n}\n\n[_nghost-%COMP%]     .pagination-box {\n  padding-bottom: 12px;\n  zoom: 75%;\n  align-items: center;\n  width: 95%;\n}\n\n[_nghost-%COMP%]     .pagination-box .input-group .form-control {\n  display: flex !important;\n  width: auto !important;\n  height: auto;\n}\n\n[_nghost-%COMP%]     .pagination-box .input-group select {\n  border-radius: 0;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n[_nghost-%COMP%]     .index-column-header span::after {\n  content: \"ID\";\n}\n\na[_ngcontent-%COMP%] {\n  padding: 0 2px;\n  border: 0;\n  transition: all 0.5s;\n  background-color: transparent;\n  cursor: pointer;\n}\n\na[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n\na[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\na.pencil[_ngcontent-%COMP%] {\n  color: #0c425d;\n}\n\na.trash[_ngcontent-%COMP%] {\n  color: #C9302C;\n}\n\na.lock[_ngcontent-%COMP%] {\n  color: #a8d2be;\n}\n\na.note[_ngcontent-%COMP%] {\n  color: #f9ae4e;\n}\n\n[_nghost-%COMP%]     bs-tooltip-container .tooltip-inner {\n  background-color: #0c425d;\n  color: white;\n}\n\n[_nghost-%COMP%]     bs-tooltip-container .tooltip-arrow:before, [_nghost-%COMP%]     bs-tooltip-container .tooltip-arrow {\n  border-top-color: #0c425d;\n}\n\n.product-card[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 90%;\n  margin: 15px;\n  height: 50px;\n  border-radius: 25px;\n  border: 2px solid #e2e2e2;\n}\n\n.description-card[_ngcontent-%COMP%] {\n  position: relative;\n  width: 85%;\n  height: 100px;\n  background-color: #0c425d;\n  border-radius: 10px;\n  margin: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n}\n\n.description-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.description-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-of-type {\n  font-weight: bold;\n}\n\n.description-card[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 20px;\n  height: 30px;\n  top: 0;\n  right: 25px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  background-color: #a8d2be;\n}\n\n.card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0ZWdvcmllcy9FOlxcVW50aXRsZWQgRm9sZGVyXFxwcml2YXRlXFxwcm9qZWN0c1xcZnVsbF9zdGFja1xcbW90b2JhclxcbW90b2Jhcl9hZG1pbi9zcmNcXHNjc3NcXHRhYmxlX3NjcmVlbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2F0ZWdvcmllcy9FOlxcVW50aXRsZWQgRm9sZGVyXFxwcml2YXRlXFxwcm9qZWN0c1xcZnVsbF9zdGFja1xcbW90b2JhclxcbW90b2Jhcl9hZG1pbi9zcmNcXHNjc3NcXGFic3RyYWN0c1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9wYWdlcy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFBO0VBQ0EseUJDaUJzQjtBQ2xCMUI7O0FGSUE7RUFDSSxtQkFBQTtBRURKOztBRkVJO0VBQ0ksZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQ0trQjtFREpsQix5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBRUFSOztBRkNRO0VBQ0ksY0FBQTtBRUNaOztBRkdJO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FFRFI7O0FGSUk7RUFDSSxnQkFBQTtFQUVBLHlCQUFBO0VBQ0EsV0N2QmtCO0FDb0IxQjs7QUZLUTtFQUNJLDZCQUFBO0VBQ0EsZUNrQ2M7QUNyQzFCOztBRktZO0VBSko7SUFLUSxlQzhCVTtFQ2hDeEI7QUFDRjs7QUZLUTtFQUNJLGVDNEJXO0FDL0J2Qjs7QUZLWTtFQUhKO0lBSVEsZUN3QlE7RUMxQnRCO0FBQ0Y7O0FGSVk7O0VBR0ksZUFBQTtFQUVBLGNBQUE7RUFDQSxvQkFBQTtBRUpoQjs7QUZLZ0I7O0VBQ0ksaUJBQUE7QUVGcEI7O0FGTW9COztFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FFSHhCOztBRkl3Qjs7RUFDSSxzQkFBQTtBRUQ1Qjs7QUZHd0I7O0VBQ0kseUJBQUE7QUVBNUI7O0FGRXdCOztFQUNJLHlCQzlFbkI7QUMrRVQ7O0FGQ3dCOztFQUNJLHlCQUFBO0FFRTVCOztBRkF3Qjs7RUFDSSx5QkFBQTtBRUc1Qjs7QUZEd0I7O0VBQ0kseUJBQUE7QUVJNUI7O0FGRVk7RUFDSSx5QkFBQTtBRUFoQjs7QUZLSTtFQUNJLG1CQUFBO0VBQ0EsdUJDdEdDO0VEdUdELDZDQUFBO0VBQ0EsbUJBQUE7QUVIUjs7QUZNSTtFQUNJLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGVDdENZO0FDa0NwQjs7QUZPSTtFQUNJLGtDQUFBO0FFTFI7O0FGU0E7RUFDSSxlQ2hEZ0I7RURpRGhCLGlCQUFBO0VBQ0Esa0JBQUE7QUVOSjs7QUZTQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUVOSjs7QUZRSTtFQVBKO0lBUVEsY0FBQTtFRUxOO0FBQ0Y7O0FGT0k7RUFDSSxhQUFBO0FFTFI7O0FGT1E7RUFISjtJQUlRLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0VFSlY7QUFDRjs7QUZPQSxRQUFBOztBQUVBO0VBQ0ksV0FBQTtBRUxKOztBRlNJO0VBQ0ksYUFBQTtBRU5SOztBRlNJO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBRUEsY0FBQTtBRVJSOztBRlNRO0VBQ0ksZUFBQTtBRVBaOztBRlVJOztFQUVJLGdCQUFBO0FFUlI7O0FGVUk7RUFDSSxvQ0FBQTtBRVJSOztBRldJO0VBQ0ksb0NBQUE7QUVUUjs7QUZZSTtFQUNJLHlCQzVKa0I7RUQ2SmxCLHlCQUFBO0VBQ0EsbUJBQUE7QUVWUjs7QUZhSTs7RUFFSSw2QkFBQTtBRVhSOztBRmNJOztFQUVJLG1CQUFBO0FFWlI7O0FGZUk7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JDaElZO0FDbUhwQjs7QUZpQkk7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0FFZlI7O0FGZ0JRO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FFZFo7O0FGa0JJO0VBQ0ksYUFBQTtBRWhCUjs7QUZtQkk7RUFDSSxvQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUVqQlI7O0FGb0JZO0VBQ0ksd0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUVsQmhCOztBRnFCWTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtBRW5CaEI7O0FGeUJRO0VBQ0ksYUFBQTtBRXZCWjs7QUY0QkE7RUFDSSxjQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FFekJKOztBRjJCSTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBRXpCUjs7QUY0Qkk7RUFDSSxlQUFBO0FFMUJSOztBRjZCSTtFQUNJLGNDalFDO0FDc09UOztBRjhCSTtFQUNJLGNDelBrQjtBQzZOMUI7O0FGK0JJO0VBQ0ksY0N4UUM7QUMyT1Q7O0FGZ0NJO0VBQ0ksY0N4UUU7QUMwT1Y7O0FGa0NBO0VBQ0kseUJDbFJLO0VEbVJMLFlDcFJLO0FDcVBUOztBRmtDQTs7RUFFSSx5QkN4Uks7QUN5UFQ7O0FGa0NBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FFL0JKOztBRmlDQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSx5QkN6U0s7RUQwU0wsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FFOUJKOztBRitCSTtFQUNJLFdBQUE7QUU3QlI7O0FGOEJRO0VBQ0ksaUJBQUE7QUU1Qlo7O0FGK0JJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQzdUQztBQ2dTVDs7QUZnQ0E7RUFDSSxtQkFBQTtBRTdCSjs7QUY4Qkk7RUFDSSxtQkFBQTtBRTVCUjs7QUY4Qkk7RUFDSSxtQkFBQTtBRTVCUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL2Fic3RyYWN0cy92YXJpYWJsZXNcIjtcclxuXHJcbjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tYmFja2dyb3VuZC1jb2xvcjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAuZGF0YS10YWJsZS1oZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCA4cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjYXJkLWhlYWRlci1iZztcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICRmb250LWNvbG9yO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRhdGEtdGFibGUtYm94IHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkZGF0YS10YWJsZS1ib3JkZXI7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5kYXRhLXRhYmxlIHtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIC8vIGZvbnQtc2l6ZSA6ICRkYXRhLXRhYmxlLWJvZHk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGRhdGEtdGFibGUtYm9yZGVyO1xyXG4gICAgICAgIGNvbG9yOiAkZm9udC1jb2xvcjtcclxuXHJcbiAgICAgICAgdGhlYWQge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk5OTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAkZGF0YS10YWJsZS1oZWFkZXItMTkyMDtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMzY2cHgpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGRhdGEtdGFibGUtaGVhZGVyLTEzNjY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRib2R5IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAkZGF0YS10YWJsZS1ib2R5LTE5MjA7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTM2NnB4KSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICRkYXRhLXRhYmxlLWJvZHktMTM2NjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGQsXHJcbiAgICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgICAgIC8vIGJvcmRlci10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAvLyBjb2xvcjogcmdiYSgkY29sb3IxLCAwLjgpO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM1NTUzNTM7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogaW5pdGlhbDtcclxuICAgICAgICAgICAgICAgICYuaW5kZXgtY29sdW1uIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZbZGF0YS1sYWJlbD1cIlN0YXR1c1wiXSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAycHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5ibG9ja2VkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5kZWxldGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDEwNywgMTA3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmLmNvbmZpcm1lZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5wZW5kaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhMGEwMmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5kb25lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNDQ5NzA7IC8vJGNvbG9yMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRhdGEtdGFibGUtd3JhcHBlciB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwcHggOHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmg0LnRpdGxlIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAkY2FyZC1oZWFkZXItZm9udDtcclxuICAgIH1cclxuXHJcbiAgICBkYXRhLXRhYmxlLXBhZ2luYXRpb24gPiBkaXYge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogJGxhYmVsLWZvbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmJ0bi5zZWFyY2gge1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxuICAgIHBhZGRpbmc6IDRweCAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgcGFkZGluZzogMnB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKioqKiogKi9cclxuXHJcbjpob3N0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAge1xyXG4gICAgY2FwdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGVhZCB0ciB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgICAgICAgLy8gY29sb3I6ICRjb2xvcjE7XHJcbiAgICAgICAgY29sb3I6ICM1NTU2NTg7XHJcbiAgICAgICAgdGgge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGJvZHkgdGgsXHJcbiAgICB0Ym9keSB0ZCB7XHJcbiAgICAgICAgcGFkZGluZzogMC4zNXJlbTtcclxuICAgIH1cclxuICAgIC5yb3ctb2RkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmRhdGEtdGFibGUtcm93OmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FyZC1oZWFkZXItYmcgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuZGF0YS10YWJsZS1ib3gge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXRhLXRhYmxlLWJveDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYmxlIHRkLFxyXG4gICAgLnRhYmxlIHRoIHtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGRhdGEtdGFibGUtYm9yZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC50YWJsZSB0aGVhZCB0aCxcclxuICAgIC5kYXRhLXRhYmxlID4gdGhlYWQgPiB0ciA+IHRkIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIHRoIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LTYwMDtcclxuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6ICRncmF5MjtcclxuICAgIH1cclxuXHJcbiAgICB0ZCB7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgJi5pbmRleC1jb2x1bW4ge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucGFnaW5hdGlvbi1yYW5nZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAucGFnaW5hdGlvbi1ib3gge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgICAgIHpvb206IDc1JTtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiA5NSU7XHJcblxyXG4gICAgICAgIC5pbnB1dC1ncm91cCB7XHJcbiAgICAgICAgICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2VsZWN0IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaW5kZXgtY29sdW1uLWhlYWRlciB7XHJcbiAgICAgICAgc3Bhbjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIklEXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5hIHtcclxuICAgIHBhZGRpbmc6IDAgMnB4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICYucGVuY2lsIHtcclxuICAgICAgICBjb2xvcjogJGNvbG9yMTtcclxuICAgIH1cclxuXHJcbiAgICAmLnRyYXNoIHtcclxuICAgICAgICBjb2xvcjogJHRyYXNoLWNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgICYubG9jayB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvcjI7XHJcbiAgICB9XHJcblxyXG4gICAgJi5ub3RlIHtcclxuICAgICAgICBjb2xvcjogJGNvbG9yNTtcclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIGJzLXRvb2x0aXAtY29udGFpbmVyIC50b29sdGlwLWlubmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjE7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgYnMtdG9vbHRpcC1jb250YWluZXIgLnRvb2x0aXAtYXJyb3c6YmVmb3JlLFxyXG46aG9zdCA6Om5nLWRlZXAgYnMtdG9vbHRpcC1jb250YWluZXIgLnRvb2x0aXAtYXJyb3cge1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogJGNvbG9yMTtcclxufVxyXG5cclxuLnByb2R1Y3QtY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkZ3JheTI7XHJcbn1cclxuLmRlc2NyaXB0aW9uLWNhcmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYmFyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICByaWdodDogMjVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjI7XHJcbiAgICB9XHJcbn1cclxuLmNhcmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIH1cclxuICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuIiwiLy9jb2xvcnNcbiR3aGl0ZSA6IHdoaXRlO1xuJGNvbG9yMTogIzBjNDI1ZDtcbiRjb2xvcjI6ICNhOGQyYmU7XG4kY29sb3IzOiAjNDg5OWMyO1xuJGNvbG9yNDogIzFmNzdhMztcblxuJGNvbG9yNSA6ICNmOWFlNGU7XG4kY29sb3I1NTogI2Q2ODUyMjtcblxuJGJvcmRlciAgICAgICAgICAgICAgICAgOiAjZjFmMWYxO1xuJGRhdGEtdGFibGUtYm9yZGVyICAgICAgOiAjZTllOWU5O1xuJGdyYXkyICAgICAgICAgICAgICAgICAgOiAjZTJlMmUyO1xuJGdyYXkzICAgICAgICAgICAgICAgICAgOiAjNzU3NTc1O1xuJHRyYXNoLWNvbG9yICAgICAgICAgICAgOiAjQzkzMDJDO1xuJGZvbnQtY29sb3IgICAgICAgICAgICAgOiAjNTU1O1xuJGFjdGl2ZS1icmVhZGNydW1iLWNvbG9yOiAjMzQzNDM0O1xuJGNhcmQtaGVhZGVyLWJnICAgICAgICAgOiAjZjlmOWY5OyAvLyNlZmVmZWY7IC8vI2Y5ZjlmOTtcbiRwbGFjZWhvbGRlci1jb2xvciAgICAgIDogI2IzYjNiMztcblxuLy8gYmFja2dyb3VuZCBjb2xvclxuJG1haW4tYmFja2dyb3VuZC1jb2xvciAgOiAjZWZlZGYyO1xuJGhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiRkYXRhLXRhYmxlLWJveCAgICAgICAgIDogI2ZmZmRmZTsgLy8jZjdmN2Y3O1xuJGNhcmQtYm9keSAgICAgICAgICAgICAgOiAjZmZmZGZlO1xuXG4vLyBEYXNoYm9hcmRcbiRtYXJnaW5CZXR3ZWVuQ2FyZHM6IDIycHg7XG4kYXhpc0ZvbnRTaXplICAgICAgOiAxMnB4O1xuJHNtYWxsQXhpc0ZvbnRTaXplIDogMTBweDtcblxuLy9oZWFkZXJcbiRwcm9maWxlLW1lbnUtY29sb3I6ICNmOWY5Zjk7XG4kYmlsbC1jb2xvciAgICAgICAgOiAjOWJhMmFhO1xuJGJpbGwtaG92ZXItY29sb3IgIDogIzczODE4ZjtcblxuLy9MYXlvdXQgVmFyaWFibGVzXG5cbiRoZWFkZXItaGVpZ2h0IDogNTVweDtcbiRzaWRlTWVudS13aWR0aDogMjAwcHg7XG5cblxuLy9sb2dpblxuJGxveWFsaXR5LWNvbG9yICA6ICM4ODdmN2Y7XG4kbG9naW4tYm94LWNvbG9yIDogI2Y1ZjJmMDtcblxuLy9tYWlsXG4kbWFpbC1jaGVja2JveC1jb2xvcjogIzAwNzNhYTtcbiR1c2VyLW1haWwtY29sb3IgICAgOiAjMjkyYjJjO1xuXG4vL3Byb2ZpbGVcbiRhY3RpdmUtY29sb3IgICAgIDogI2Y0ZjZmOTtcbiRpY29uLWNvbG9yICAgICAgIDogIzk1OWNiNjtcbiRsYWJlbC10aXRsZS1jb2xvcjogIzUwNTY2YTtcblxuLy9lbWFpbCB0ZW1wbGF0ZXNcbiRlbWFpbC1ibHVlLWNvbG9yOiAjMGY0MTVkO1xuJGVtYWlsLWdyYXktY29sb3I6ICM1ZjYwNjA7XG4kZW1haWwtc3lhbi1jb2xvcjogI2EyZDljMjtcbiRlbWFpbC1vcmFnbmUtY29sb3I6ICNmZmFjNTI7XG5cbi8vZm9udHNcbiRmb250MjggICAgICAgICAgIDogMjhweDtcbiRmb250MjQgICAgICAgICAgIDogMjRweDtcbiRmb250MTggICAgICAgICAgIDogMThweDtcbiRmb250MTYgICAgICAgICAgIDogMTZweDtcbiRmb250MTQgICAgICAgICAgIDogMTRweDtcbiRmb250MTIgICAgICAgICAgIDogMTJweDtcbiRmb250MTAgICAgICAgICAgIDogMTBweDtcbiRmb250LXdlaWdodC02MDAgIDogNjAwO1xuJGZvbnQtd2VpZ2h0LTUwMCAgOiA1MDA7XG4kcGxhY2Vob2xkZXItZm9udCA6IDEycHg7XG4kbGFiZWwtZm9udCAgICAgICA6IDE0cHg7XG4kY2FyZC1oZWFkZXItZm9udCA6IDE2cHg7XG5cbiRkYXRhLXRhYmxlLWhlYWRlci0xMzY2IDogMTRweDtcbiRkYXRhLXRhYmxlLWhlYWRlci0xOTIwIDogMTZweDtcbiRkYXRhLXRhYmxlLWJvZHktMTM2NiA6IDEycHg7XG4kZGF0YS10YWJsZS1ib2R5LTE5MjA6IDE2cHg7XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZGYyO1xufVxuXG46aG9zdCA6Om5nLWRlZXAge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlLWhlYWRlciB7XG4gIHBhZGRpbmc6IDhweCA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgY29sb3I6ICM1NTU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlLWhlYWRlciBidXR0b24ge1xuICBwYWRkaW5nLXRvcDogMDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZS1ib3gge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgcGFkZGluZzogMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5ZTllOTtcbiAgYm9yZGVyLXRvcDogMDtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWU5ZTk7XG4gIGNvbG9yOiAjNTU1O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlIHRoZWFkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5OTk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzY2cHgpIHtcbiAgOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlIHRoZWFkIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzY2cHgpIHtcbiAgOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlIHRib2R5IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0ZCxcbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0aCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM1NTUzNTM7XG4gIGZvbnQtd2VpZ2h0OiBpbml0aWFsO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlIHRib2R5IHRkLmluZGV4LWNvbHVtbixcbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0aC5pbmRleC1jb2x1bW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0ZFtkYXRhLWxhYmVsPVN0YXR1c10gc3Bhbixcbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0aFtkYXRhLWxhYmVsPVN0YXR1c10gc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMnB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUgdGJvZHkgdGRbZGF0YS1sYWJlbD1TdGF0dXNdIHNwYW4uYmxvY2tlZCxcbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0aFtkYXRhLWxhYmVsPVN0YXR1c10gc3Bhbi5ibG9ja2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0ZFtkYXRhLWxhYmVsPVN0YXR1c10gc3Bhbi5kZWxldGVkLFxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlIHRib2R5IHRoW2RhdGEtbGFiZWw9U3RhdHVzXSBzcGFuLmRlbGV0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2YjZiO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlIHRib2R5IHRkW2RhdGEtbGFiZWw9U3RhdHVzXSBzcGFuLmNvbmZpcm1lZCxcbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0aFtkYXRhLWxhYmVsPVN0YXR1c10gc3Bhbi5jb25maXJtZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGM0MjVkO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlIHRib2R5IHRkW2RhdGEtbGFiZWw9U3RhdHVzXSBzcGFuLmFjdGl2ZSxcbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0aFtkYXRhLWxhYmVsPVN0YXR1c10gc3Bhbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlIHRib2R5IHRkW2RhdGEtbGFiZWw9U3RhdHVzXSBzcGFuLnBlbmRpbmcsXG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUgdGJvZHkgdGhbZGF0YS1sYWJlbD1TdGF0dXNdIHNwYW4ucGVuZGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhMGEwMmU7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUgdGJvZHkgdGRbZGF0YS1sYWJlbD1TdGF0dXNdIHNwYW4uZG9uZSxcbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0aFtkYXRhLWxhYmVsPVN0YXR1c10gc3Bhbi5kb25lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0NDk3MDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSBpbWcge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlLXdyYXBwZXIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAwcHggOHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5oNC50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbjpob3N0IDo6bmctZGVlcCBkYXRhLXRhYmxlLXBhZ2luYXRpb24gPiBkaXYge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmJ0bi5zZWFyY2gge1xuICBtYXJnaW46IDAgNXB4O1xuICBwYWRkaW5nOiA0cHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5idG4uc2VhcmNoIHtcbiAgICBwYWRkaW5nOiAycHggMDtcbiAgfVxufVxuLmJ0bi5zZWFyY2ggc3BhbjpsYXN0LWNoaWxkIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmJ0bi5zZWFyY2ggc3BhbjpsYXN0LWNoaWxkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cblxuLyoqKioqICovXG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgY2FwdGlvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG46aG9zdCA6Om5nLWRlZXAgdGhlYWQgdHIge1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gIGNvbG9yOiAjNTU1NjU4O1xufVxuOmhvc3QgOjpuZy1kZWVwIHRoZWFkIHRyIHRoIHtcbiAgcGFkZGluZzogMXJlbSAwO1xufVxuOmhvc3QgOjpuZy1kZWVwIHRib2R5IHRoLFxuOmhvc3QgOjpuZy1kZWVwIHRib2R5IHRkIHtcbiAgcGFkZGluZzogMC4zNXJlbTtcbn1cbjpob3N0IDo6bmctZGVlcCAucm93LW9kZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5ZjkgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZS1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5ICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUtYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmRmZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAudGFibGUgdGQsXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlIHRoIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOWU5ZTk7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlIHRoZWFkIHRoLFxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlID4gdGhlYWQgPiB0ciA+IHRkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbjpob3N0IDo6bmctZGVlcCB0aCB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbjpob3N0IDo6bmctZGVlcCB0ZCB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IDo6bmctZGVlcCB0ZC5pbmRleC1jb2x1bW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wYWdpbmF0aW9uLXJhbmdlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjpob3N0IDo6bmctZGVlcCAucGFnaW5hdGlvbi1ib3gge1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgem9vbTogNzUlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogOTUlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wYWdpbmF0aW9uLWJveCAuaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbCB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wYWdpbmF0aW9uLWJveCAuaW5wdXQtZ3JvdXAgc2VsZWN0IHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuaW5kZXgtY29sdW1uLWhlYWRlciBzcGFuOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiSURcIjtcbn1cblxuYSB7XG4gIHBhZGRpbmc6IDAgMnB4O1xuICBib3JkZXI6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5hIGkge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5hLnBlbmNpbCB7XG4gIGNvbG9yOiAjMGM0MjVkO1xufVxuYS50cmFzaCB7XG4gIGNvbG9yOiAjQzkzMDJDO1xufVxuYS5sb2NrIHtcbiAgY29sb3I6ICNhOGQyYmU7XG59XG5hLm5vdGUge1xuICBjb2xvcjogI2Y5YWU0ZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIGJzLXRvb2x0aXAtY29udGFpbmVyIC50b29sdGlwLWlubmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjNDI1ZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgYnMtdG9vbHRpcC1jb250YWluZXIgLnRvb2x0aXAtYXJyb3c6YmVmb3JlLFxuOmhvc3QgOjpuZy1kZWVwIGJzLXRvb2x0aXAtY29udGFpbmVyIC50b29sdGlwLWFycm93IHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzBjNDI1ZDtcbn1cblxuLnByb2R1Y3QtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDE1cHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2UyZTJlMjtcbn1cblxuLmRlc2NyaXB0aW9uLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA4NSU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzQyNWQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5kZXNjcmlwdGlvbi1jYXJkIHAge1xuICB3aWR0aDogMTAwJTtcbn1cbi5kZXNjcmlwdGlvbi1jYXJkIHA6Zmlyc3Qtb2YtdHlwZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmRlc2NyaXB0aW9uLWNhcmQgLmJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgdG9wOiAwO1xuICByaWdodDogMjVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhOGQyYmU7XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5jYXJkIC5jYXJkLWhlYWRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uY2FyZCAuY2FyZC1ib2R5IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CategoriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-categories',
                templateUrl: './categories.component.html',
                styleUrls: ['./categories.component.scss'],
            }]
    }], function () { return [{ type: _categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"] }, { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] }, { type: _services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/categories/categories.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/categories/categories.module.ts ***!
  \*******************************************************/
/*! exports provided: CategoriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesModule", function() { return CategoriesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var angular7_data_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular7-data-table */ "./node_modules/angular7-data-table/__ivy_ngcc__/esm2015/angular7-data-table.js");
/* harmony import */ var _categories_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories-routing.module */ "./src/app/pages/categories/categories-routing.module.ts");
/* harmony import */ var src_app_reusable_components_form_fields_form_fields_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/reusable-components/form-fields/form-fields.module */ "./src/app/reusable-components/form-fields/form-fields.module.ts");
/* harmony import */ var _categories_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./categories.component */ "./src/app/pages/categories/categories.component.ts");
/* harmony import */ var _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-category/add-category.component */ "./src/app/pages/categories/add-category/add-category.component.ts");
/* harmony import */ var _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit-category/edit-category.component */ "./src/app/pages/categories/edit-category/edit-category.component.ts");
/* harmony import */ var _add_sub_category_add_sub_category_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-sub-category/add-sub-category.component */ "./src/app/pages/categories/add-sub-category/add-sub-category.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");

















class CategoriesModule {
}
CategoriesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CategoriesModule });
CategoriesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CategoriesModule_Factory(t) { return new (t || CategoriesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _categories_routing_module__WEBPACK_IMPORTED_MODULE_6__["CategoriesRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            src_app_reusable_components_form_fields_form_fields_module__WEBPACK_IMPORTED_MODULE_7__["FormFieldsModule"],
            angular7_data_table__WEBPACK_IMPORTED_MODULE_5__["DataTableModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_2__["TooltipModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CategoriesModule, { declarations: [_categories_component__WEBPACK_IMPORTED_MODULE_8__["CategoriesComponent"],
        _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_9__["AddCategoryComponent"],
        _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_10__["EditCategoryComponent"],
        _add_sub_category_add_sub_category_component__WEBPACK_IMPORTED_MODULE_11__["AddSubCategoryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _categories_routing_module__WEBPACK_IMPORTED_MODULE_6__["CategoriesRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        src_app_reusable_components_form_fields_form_fields_module__WEBPACK_IMPORTED_MODULE_7__["FormFieldsModule"], angular7_data_table__WEBPACK_IMPORTED_MODULE_5__["DataTableModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_2__["TooltipModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _categories_component__WEBPACK_IMPORTED_MODULE_8__["CategoriesComponent"],
                    _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_9__["AddCategoryComponent"],
                    _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_10__["EditCategoryComponent"],
                    _add_sub_category_add_sub_category_component__WEBPACK_IMPORTED_MODULE_11__["AddSubCategoryComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _categories_routing_module__WEBPACK_IMPORTED_MODULE_6__["CategoriesRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    src_app_reusable_components_form_fields_form_fields_module__WEBPACK_IMPORTED_MODULE_7__["FormFieldsModule"],
                    angular7_data_table__WEBPACK_IMPORTED_MODULE_5__["DataTableModule"].forRoot(),
                    ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_2__["TooltipModule"].forRoot(),
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(),
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/categories/edit-category/edit-category.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/categories/edit-category/edit-category.component.ts ***!
  \***************************************************************************/
/*! exports provided: EditCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCategoryComponent", function() { return EditCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../categories.service */ "./src/app/pages/categories/categories.service.ts");
/* harmony import */ var _product_attributes_product_attributes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../product-attributes/product-attributes.service */ "./src/app/pages/product-attributes/product-attributes.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _reusable_components_form_fields_upload_photo_upload_photo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../reusable-components/form-fields/upload-photo/upload-photo.component */ "./src/app/reusable-components/form-fields/upload-photo/upload-photo.component.ts");
/* harmony import */ var _reusable_components_form_fields_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../reusable-components/form-fields/input-text/input-text.component */ "./src/app/reusable-components/form-fields/input-text/input-text.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _reusable_components_form_fields_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../reusable-components/form-fields/multi-select/multi-select.component */ "./src/app/reusable-components/form-fields/multi-select/multi-select.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");














function EditCategoryComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-multi-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemselected", function EditCategoryComponent_ng_container_15_Template_app_multi_select_itemselected_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.selectProductAttribute($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Product attributes")("labelAr", "\u062E\u0648\u0627\u0635 \u0627\u0644\u0635\u0646\u0641")("placeholderAr", "\u0627\u062E\u062A\u0631 \u062E\u0648\u0627\u0635 \u0627\u0644\u0635\u0646\u0641")("fieldId", "productAttributes")("initialSelectedList", ctx_r0.initialSelectedProductAttribute)("ItemsList", ctx_r0.productAttributes)("fieldClass", "col-18_md-24")("required", true);
} }
const _c0 = function () { return ["/categories"]; };
class EditCategoryComponent {
    constructor(fb, route, categoriesService, productAttributesService, toastr, spinner, router) {
        this.fb = fb;
        this.route = route;
        this.categoriesService = categoriesService;
        this.productAttributesService = productAttributesService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.router = router;
        this.form = this.fb.group({
            image: [],
            name: this.fb.group({
                en: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                ar: [''],
            }),
            productAttributes: this.fb.array([]),
        });
        this.initialSelectedProductAttribute = [];
        this.selectedProductAttribute = [];
    }
    ngOnInit() {
        this.categoryId = this.route.snapshot.paramMap.get('id');
        this.getOne(this.categoryId);
        this.getProductAttributes();
    }
    getOne(id) {
        this.spinner.show();
        this.categoriesService.getOne(id).subscribe((res) => {
            if (res['data'].categories && res['data'].categories.length > 0) {
                this.isParent = true;
            }
            this.toastr.info(res['message'], 'Info');
            this.image = res['data']['image'];
            // this.form.get('image').patchValue(res['data']['image']);
            // this.form.get('name.en').patchValue(res['data']['name']['en']);
            // this.form.get('name.ar').patchValue(res['data']['name']['ar']);
            this.form.patchValue(res['data']);
            if (res['data']['productAttributes'] &&
                res['data']['productAttributes'].length > 0) {
                const productAttributes = this.form.get('productAttributes');
                for (let index = 0; index < res['data']['productAttributes'].length; index++) {
                    this.initialSelectedProductAttribute[index] = {
                        _id: res['data']['productAttributes'][index]['_id'],
                        nameEn: res['data']['productAttributes'][index]['name']['en'],
                        nameAr: res['data']['productAttributes'][index]['name']['ar'],
                    };
                    this.selectedProductAttribute[index] = {
                        _id: res['data']['productAttributes'][index]['_id'],
                        nameEn: res['data']['productAttributes'][index]['name']['en'],
                        nameAr: res['data']['productAttributes'][index]['name']['ar'],
                    };
                    productAttributes.controls[index] = this.fb.group({
                        _id: [''],
                        name: this.fb.group({
                            en: [''],
                            ar: [''],
                        }),
                    });
                    productAttributes.controls[index]
                        .get('_id')
                        .patchValue(this.selectedProductAttribute[index]._id);
                    productAttributes.controls[index]
                        .get('name')
                        .get('en')
                        .patchValue(this.selectedProductAttribute[index].nameEn);
                    productAttributes.controls[index]
                        .get('name')
                        .get('ar')
                        .patchValue(this.selectedProductAttribute[index].nameAr);
                }
            }
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error.message, 'Error');
            // this.error.next(error.error.message);
        });
        this.spinner.hide();
    }
    getProductAttributes() {
        this.spinner.show();
        this.productAttributesService.getAll();
        this.productAttributesService.productAttributes.subscribe((data) => {
            if (data) {
                this.productAttributes = data.map((x) => {
                    return {
                        _id: x['_id'],
                        nameEn: `${x['name']['en']}`,
                        nameAr: `${x['name']['ar']}`,
                    };
                });
            }
        });
        this.spinner.hide();
    }
    selectProductAttribute(event) {
        if (event) {
            this.selectedProductAttribute = event;
        }
        else {
            this.selectedProductAttribute = [event];
        }
    }
    onSubmit() {
        this.spinner.show();
        const productAttributes = this.form.get('productAttributes');
        productAttributes.patchValue([]);
        for (let index = 0; index < this.selectedProductAttribute.length; index++) {
            productAttributes.controls[index] = this.fb.group({
                _id: [''],
                name: this.fb.group({
                    en: [''],
                    ar: [''],
                }),
            });
            productAttributes.controls[index]
                .get('_id')
                .patchValue(this.selectedProductAttribute[index]._id);
            productAttributes.controls[index]
                .get('name')
                .get('en')
                .patchValue(this.selectedProductAttribute[index].nameEn);
            productAttributes.controls[index]
                .get('name')
                .get('ar')
                .patchValue(this.selectedProductAttribute[index].nameAr);
        }
        this.form.get('productAttributes').patchValue(productAttributes.controls);
        const formData = new FormData();
        for (const key in this.form.value) {
            if (this.form.value[key] instanceof File) {
                formData.append(key, this.form.value[key]);
            }
            else {
                // contains object
                formData.append(key, JSON.stringify(this.form.value[key]));
            }
        }
        this.categoriesService.updateOne(formData, this.categoryId).subscribe((res) => {
            console.log(res);
            this.image = null;
            this.form.reset();
            this.toastr.info(res['message'], 'Info');
            this.router.navigate(['/categories']);
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error.message, 'Error');
            // this.error.next(error.error.message);
        });
        this.spinner.hide();
    }
}
EditCategoryComponent.ɵfac = function EditCategoryComponent_Factory(t) { return new (t || EditCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_attributes_product_attributes_service__WEBPACK_IMPORTED_MODULE_4__["ProductAttributesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
EditCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditCategoryComponent, selectors: [["app-edit-category"]], decls: 25, vars: 41, consts: [[1, "grid-center-noGutter"], [1, "col-20_sm-22_xs-23", "grid-center-noGutter", "content"], [1, "title", "col-24", "grid-center"], [1, "form", "col-23"], [1, "grid-middle-spaceBetween-noGutter"], [1, "form-group", "grid-center-middle-noGutter", "col-24"], [1, "col-24", "grid-center"], [3, "fieldId", "image", "control"], ["type", "text", 1, "col-11_sm-24", 3, "label", "fieldId", "required", "placeholder", "tooltipMsg", "control", "fieldClass"], ["type", "text", 1, "col-11_sm-24", "grid", 3, "label", "fieldId", "rtldirection", "placeholder", "tooltipMsg", "control", "fieldClass"], [4, "ngIf"], [1, "grid-right"], ["type", "submit", 1, "btn", "col-3_sm-5_xs-6", "color1", "round", 3, "disabled", "click"], ["type", "button", 1, "btn", "col-3_sm-5_xs-6", "color2", "round", 3, "routerLink"], [1, "col-11_sm-24", 3, "label", "labelAr", "placeholderAr", "fieldId", "initialSelectedList", "ItemsList", "fieldClass", "required", "itemselected"]], template: function EditCategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-upload-photo", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-input-text", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-input-text", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EditCategoryComponent_ng_container_15_Template, 2, 8, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditCategoryComponent_Template_button_click_17_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 26, "edit")), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 28, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 30, "Category")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fieldId", "image")("image", ctx.image)("control", ctx.form.get("image"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Name en")("fieldId", "nameEn")("required", true)("placeholder", "Category Name")("tooltipMsg", "English")("control", ctx.form.get("name.en"))("fieldClass", "col-19_xlg-18_lg-17_md-24");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Name ar")("fieldId", "nameAr")("rtldirection", true)("placeholder", "\u0627\u0633\u0645 \u0627\u0644\u0635\u0646\u0641")("tooltipMsg", "Arabic")("control", ctx.form.get("name.ar"))("fieldClass", "col-19_xlg-18_lg-17_md-24");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isParent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 32, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 34, "Submit")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](40, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 36, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 38, "Cancel")), " ");
    } }, directives: [_reusable_components_form_fields_upload_photo_upload_photo_component__WEBPACK_IMPORTED_MODULE_7__["UploadPhotoComponent"], _reusable_components_form_fields_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_8__["InputTextComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _reusable_components_form_fields_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_10__["MultiSelectComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["LowerCasePipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  background-color: #efedf2;\n}\n\n.content[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background-color: #fffdfe;\n  border: 1px solid #f1f1f1;\n  padding-bottom: 15px !important;\n  margin-bottom: 20px;\n  box-shadow: 0 0px 8px 1px rgba(0, 0, 0, 0.05);\n  margin-top: 20px;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0c425d;\n  margin-bottom: 15px;\n  background-color: #f9f9f9;\n  border-bottom: 1px solid #f1f1f1;\n  padding: 10px !important;\n  border-radius: 10px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  font-size: 16px;\n}\n\n.textarea-maxWidth[_ngcontent-%COMP%] {\n  max-width: 81.7%;\n}\n\n[_nghost-%COMP%]     app-ng2tel .iti.iti--allow-dropdown {\n  width: 100%;\n}\n\n.activeModalIcon[_ngcontent-%COMP%] {\n  background: #1f1a5f !important;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0ZWdvcmllcy9lZGl0LWNhdGVnb3J5L0U6XFxVbnRpdGxlZCBGb2xkZXJcXHByaXZhdGVcXHByb2plY3RzXFxmdWxsX3N0YWNrXFxtb3RvYmFyXFxtb3RvYmFyX2FkbWluL3NyY1xcc2Nzc1xcYWRkLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NhdGVnb3JpZXMvZWRpdC1jYXRlZ29yeS9FOlxcVW50aXRsZWQgRm9sZGVyXFxwcml2YXRlXFxwcm9qZWN0c1xcZnVsbF9zdGFja1xcbW90b2JhclxcbW90b2Jhcl9hZG1pbi9zcmNcXHNjc3NcXGFic3RyYWN0c1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9wYWdlcy9jYXRlZ29yaWVzL2VkaXQtY2F0ZWdvcnkvZWRpdC1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7RUFDQSx5QkNpQndCO0FDbEIxQjs7QUZJQTtFQUNFLG1CQUFBO0VBQ0EseUJDZXdCO0VEZHhCLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0VBQ0EsZ0JBQUE7QUVERjs7QUZJQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNDbEJPO0VEbUJQLG1CQUFBO0VBQ0EseUJDTHdCO0VETXhCLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBRURGOztBRklBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUVERjs7QUZJQTtFQUNFLGdCQUFBO0FFREY7O0FGSUE7RUFDRSxXQUFBO0FFREY7O0FGR0E7RUFFRyw4QkFBQTtFQUNELG1CQUFBO0FFREYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYXRlZ29yaWVzL2VkaXQtY2F0ZWdvcnkvZWRpdC1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vYWJzdHJhY3RzL3ZhcmlhYmxlcyc7XG5cbjpob3N0IHtcbiAgZGlzcGxheSAgICAgICAgIDogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWJhY2tncm91bmQtY29sb3I7XG59XG5cbi5jb250ZW50IHtcbiAgYm9yZGVyLXJhZGl1cyAgIDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNhcmQtYm9keTtcbiAgYm9yZGVyICAgICAgICAgIDogMXB4IHNvbGlkICRib3JkZXI7XG4gIHBhZGRpbmctYm90dG9tICA6IDE1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbSAgIDogMjBweDtcbiAgYm94LXNoYWRvdyAgICAgIDogMCAwcHggOHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBtYXJnaW4tdG9wICAgICAgOiAyMHB4XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZSAgICAgICA6IDIycHg7XG4gIGZvbnQtd2VpZ2h0ICAgICA6IDcwMDtcbiAgY29sb3IgICAgICAgICAgIDogJGNvbG9yMTtcbiAgbWFyZ2luLWJvdHRvbSAgIDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNhcmQtaGVhZGVyLWJnO1xuICBib3JkZXItYm90dG9tICAgOiAxcHggc29saWQgJGJvcmRlcjtcbiAgcGFkZGluZyAgICAgICAgIDogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5idXR0b24ge1xuICBtYXJnaW4gICA6IDAgMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4udGV4dGFyZWEtbWF4V2lkdGgge1xuICBtYXgtd2lkdGg6IDgxLjclO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgYXBwLW5nMnRlbCAuaXRpLml0aS0tYWxsb3ctZHJvcGRvd24ge1xuICB3aWR0aDogMTAwJVxufVxuLmFjdGl2ZU1vZGFsSWNvbntcbiAgLy8gYmFja2dyb3VuZDogIzQ2YjhkYSAhaW1wb3J0YW50O1xuICAgYmFja2dyb3VuZDogIzFmMWE1ZiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG59IiwiLy9jb2xvcnNcbiR3aGl0ZSA6IHdoaXRlO1xuJGNvbG9yMTogIzBjNDI1ZDtcbiRjb2xvcjI6ICNhOGQyYmU7XG4kY29sb3IzOiAjNDg5OWMyO1xuJGNvbG9yNDogIzFmNzdhMztcblxuJGNvbG9yNSA6ICNmOWFlNGU7XG4kY29sb3I1NTogI2Q2ODUyMjtcblxuJGJvcmRlciAgICAgICAgICAgICAgICAgOiAjZjFmMWYxO1xuJGRhdGEtdGFibGUtYm9yZGVyICAgICAgOiAjZTllOWU5O1xuJGdyYXkyICAgICAgICAgICAgICAgICAgOiAjZTJlMmUyO1xuJGdyYXkzICAgICAgICAgICAgICAgICAgOiAjNzU3NTc1O1xuJHRyYXNoLWNvbG9yICAgICAgICAgICAgOiAjQzkzMDJDO1xuJGZvbnQtY29sb3IgICAgICAgICAgICAgOiAjNTU1O1xuJGFjdGl2ZS1icmVhZGNydW1iLWNvbG9yOiAjMzQzNDM0O1xuJGNhcmQtaGVhZGVyLWJnICAgICAgICAgOiAjZjlmOWY5OyAvLyNlZmVmZWY7IC8vI2Y5ZjlmOTtcbiRwbGFjZWhvbGRlci1jb2xvciAgICAgIDogI2IzYjNiMztcblxuLy8gYmFja2dyb3VuZCBjb2xvclxuJG1haW4tYmFja2dyb3VuZC1jb2xvciAgOiAjZWZlZGYyO1xuJGhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiRkYXRhLXRhYmxlLWJveCAgICAgICAgIDogI2ZmZmRmZTsgLy8jZjdmN2Y3O1xuJGNhcmQtYm9keSAgICAgICAgICAgICAgOiAjZmZmZGZlO1xuXG4vLyBEYXNoYm9hcmRcbiRtYXJnaW5CZXR3ZWVuQ2FyZHM6IDIycHg7XG4kYXhpc0ZvbnRTaXplICAgICAgOiAxMnB4O1xuJHNtYWxsQXhpc0ZvbnRTaXplIDogMTBweDtcblxuLy9oZWFkZXJcbiRwcm9maWxlLW1lbnUtY29sb3I6ICNmOWY5Zjk7XG4kYmlsbC1jb2xvciAgICAgICAgOiAjOWJhMmFhO1xuJGJpbGwtaG92ZXItY29sb3IgIDogIzczODE4ZjtcblxuLy9MYXlvdXQgVmFyaWFibGVzXG5cbiRoZWFkZXItaGVpZ2h0IDogNTVweDtcbiRzaWRlTWVudS13aWR0aDogMjAwcHg7XG5cblxuLy9sb2dpblxuJGxveWFsaXR5LWNvbG9yICA6ICM4ODdmN2Y7XG4kbG9naW4tYm94LWNvbG9yIDogI2Y1ZjJmMDtcblxuLy9tYWlsXG4kbWFpbC1jaGVja2JveC1jb2xvcjogIzAwNzNhYTtcbiR1c2VyLW1haWwtY29sb3IgICAgOiAjMjkyYjJjO1xuXG4vL3Byb2ZpbGVcbiRhY3RpdmUtY29sb3IgICAgIDogI2Y0ZjZmOTtcbiRpY29uLWNvbG9yICAgICAgIDogIzk1OWNiNjtcbiRsYWJlbC10aXRsZS1jb2xvcjogIzUwNTY2YTtcblxuLy9lbWFpbCB0ZW1wbGF0ZXNcbiRlbWFpbC1ibHVlLWNvbG9yOiAjMGY0MTVkO1xuJGVtYWlsLWdyYXktY29sb3I6ICM1ZjYwNjA7XG4kZW1haWwtc3lhbi1jb2xvcjogI2EyZDljMjtcbiRlbWFpbC1vcmFnbmUtY29sb3I6ICNmZmFjNTI7XG5cbi8vZm9udHNcbiRmb250MjggICAgICAgICAgIDogMjhweDtcbiRmb250MjQgICAgICAgICAgIDogMjRweDtcbiRmb250MTggICAgICAgICAgIDogMThweDtcbiRmb250MTYgICAgICAgICAgIDogMTZweDtcbiRmb250MTQgICAgICAgICAgIDogMTRweDtcbiRmb250MTIgICAgICAgICAgIDogMTJweDtcbiRmb250MTAgICAgICAgICAgIDogMTBweDtcbiRmb250LXdlaWdodC02MDAgIDogNjAwO1xuJGZvbnQtd2VpZ2h0LTUwMCAgOiA1MDA7XG4kcGxhY2Vob2xkZXItZm9udCA6IDEycHg7XG4kbGFiZWwtZm9udCAgICAgICA6IDE0cHg7XG4kY2FyZC1oZWFkZXItZm9udCA6IDE2cHg7XG5cbiRkYXRhLXRhYmxlLWhlYWRlci0xMzY2IDogMTRweDtcbiRkYXRhLXRhYmxlLWhlYWRlci0xOTIwIDogMTZweDtcbiRkYXRhLXRhYmxlLWJvZHktMTM2NiA6IDEycHg7XG4kZGF0YS10YWJsZS1ib2R5LTE5MjA6IDE2cHg7XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZGYyO1xufVxuXG4uY29udGVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZkZmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgMHB4IDhweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzBjNDI1ZDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnRleHRhcmVhLW1heFdpZHRoIHtcbiAgbWF4LXdpZHRoOiA4MS43JTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIGFwcC1uZzJ0ZWwgLml0aS5pdGktLWFsbG93LWRyb3Bkb3duIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hY3RpdmVNb2RhbEljb24ge1xuICBiYWNrZ3JvdW5kOiAjMWYxYTVmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditCategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-category',
                templateUrl: './edit-category.component.html',
                styleUrls: ['./edit-category.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"] }, { type: _product_attributes_product_attributes_service__WEBPACK_IMPORTED_MODULE_4__["ProductAttributesService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-categories-categories-module-es2015.js.map