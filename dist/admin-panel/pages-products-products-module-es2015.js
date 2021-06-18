(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-products-products-module"],{

/***/ "./src/app/pages/products/add-product/add-product.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/products/add-product/add-product.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products.service */ "./src/app/pages/products/products.service.ts");
/* harmony import */ var _product_attributes_product_attributes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../product-attributes/product-attributes.service */ "./src/app/pages/product-attributes/product-attributes.service.ts");
/* harmony import */ var _categories_categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../categories/categories.service */ "./src/app/pages/categories/categories.service.ts");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _reusable_components_form_fields_upload_multi_photos_upload_multi_photos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../reusable-components/form-fields/upload-multi-photos/upload-multi-photos.component */ "./src/app/reusable-components/form-fields/upload-multi-photos/upload-multi-photos.component.ts");
/* harmony import */ var _reusable_components_form_fields_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../reusable-components/form-fields/input-text/input-text.component */ "./src/app/reusable-components/form-fields/input-text/input-text.component.ts");
/* harmony import */ var _reusable_components_form_fields_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../reusable-components/form-fields/textarea/textarea.component */ "./src/app/reusable-components/form-fields/textarea/textarea.component.ts");
/* harmony import */ var _reusable_components_form_fields_select_select_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../reusable-components/form-fields/select/select.component */ "./src/app/reusable-components/form-fields/select/select.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");


















function AddProductComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemselected", function AddProductComponent_ng_container_18_Template_app_select_itemselected_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.selectSubCategory(i_r4, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r4 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "sub category")("labelAr", "\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0641\u0631\u0639\u064A")("fieldId", "subCategory" + (i_r4 + 1).toString())("ItemsList", ctx_r0.subCategories[i_r4])("placeholder", "Choose category")("placeholderAr", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0642\u0633\u0645")("fieldClass", "col-18_md-24")("required", true);
} }
function AddProductComponent_ng_container_24_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProductComponent_ng_container_24_ng_container_1_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const propInd_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.removeProperty(propInd_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
const _c0 = function (a0) { return { "grid-noGutter": a0 }; };
function AddProductComponent_ng_container_24_ng_container_4_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemselected", function AddProductComponent_ng_container_24_ng_container_4_ng_container_1_ng_container_1_Template_app_select_itemselected_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const attIndex_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const propInd_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.selectProductAttribute($event, propInd_r8, attIndex_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const attIndex_r16 = ctx_r23.index;
    const att_r15 = ctx_r23.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, attIndex_r16 % 2 != 0))("label", att_r15.get("name").get("en").value)("labelAr", att_r15.get("name").get("ar").value != "" ? att_r15.get("name").get("ar").value : att_r15.get("name").get("en").value)("fieldId", att_r15.get("name").get("en").value)("ItemsList", ctx_r17.attributesDropDown[attIndex_r16].values)("fieldClass", "col-18_md-24")("required", true);
} }
function AddProductComponent_ng_container_24_ng_container_4_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AddProductComponent_ng_container_24_ng_container_4_ng_container_1_ng_container_2_Template_input_input_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const attIndex_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const propInd_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.selectProductAttributeText($event, propInd_r8, attIndex_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const att_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", att_r15.get("name").get("en").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.arabic ? att_r15.get("name").get("ar").value : att_r15.get("name").get("en").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", att_r15.get("name").get("en").value)("placeholder", ctx_r18.arabic ? att_r15.get("name").get("ar").value : att_r15.get("name").get("en").value)("tooltip", ctx_r18.arabic ? att_r15.get("name").get("ar").value : att_r15.get("name").get("en").value);
} }
function AddProductComponent_ng_container_24_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddProductComponent_ng_container_24_ng_container_4_ng_container_1_ng_container_1_Template, 2, 9, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddProductComponent_ng_container_24_ng_container_4_ng_container_1_ng_container_2_Template, 7, 5, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const attIndex_r16 = ctx.index;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.attributesDropDown[attIndex_r16].values.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.attributesDropDown[attIndex_r16].values.length === 0);
} }
function AddProductComponent_ng_container_24_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddProductComponent_ng_container_24_ng_container_4_ng_container_1_Template, 3, 2, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const property_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", property_r7.get("productAttributes")["controls"]);
} }
function AddProductComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddProductComponent_ng_container_24_ng_container_1_Template, 6, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-input-text", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-input-text", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AddProductComponent_ng_container_24_ng_container_4_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const property_r7 = ctx.$implicit;
    const propInd_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", propInd_r8 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Price")("labelAr", "\u0627\u0644\u0633\u0639\u0631")("fieldId", "price")("required", true)("placeholder", "Product Cost")("placeholderAr", "\u0633\u0639\u0631 \u0627\u0644\u0645\u0646\u062A\u062C")("control", property_r7.get("price"))("fieldClass", "col-18_md-24");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Quantity")("labelAr", "\u0627\u0644\u0643\u0645\u064A\u0629")("fieldId", "qty")("required", true)("placeholder", "Product quantity")("placeholderAr", "\u0643\u0645\u064A\u0629 \u0627\u0644\u0645\u0646\u062A\u062C")("control", property_r7.get("qty"))("fieldClass", "col-18_md-24");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", property_r7.get("productAttributes")["controls"].length > 0);
} }
function AddProductComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProductComponent_ng_container_25_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.addProperty(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.form.get("properties")["controls"][ctx_r2.form.get("properties")["controls"].length - 1].valid || ctx_r2.selectedCategoryAttributes.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, "Add")), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 9, "property")), " ");
} }
const _c1 = function () { return ["/products"]; };
class AddProductComponent {
    constructor(fb, productsService, productAttributeService, categoriesService, languageService, toastr, spinner, router) {
        this.fb = fb;
        this.productsService = productsService;
        this.productAttributeService = productAttributeService;
        this.categoriesService = categoriesService;
        this.languageService = languageService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.router = router;
        this.form = this.fb.group({
            photos: this.fb.array([]),
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            category: this.fb.group({
                _id: [],
                name: this.fb.group({
                    en: [],
                    ar: [],
                }),
            }),
            properties: this.fb.array([
                this.fb.group({
                    price: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    qty: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    productAttributes: this.fb.array([]),
                }),
            ]),
        });
        this.subCategories = [];
        this.selectedCategory = {};
        this.selectedCategoryAttributes = [];
        // End select dropdown
        // Start select dropdown
        // dropdown lists for product attributes
        this.attributesDropDown = [{ values: [] }];
        this.properties = [];
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
        this.getbaseCategoriesList();
    }
    getbaseCategoriesList() {
        this.spinner.show();
        this.categoriesService.getBaseCategories();
        this.categoriesService.baseCategories.subscribe((data) => {
            if (data) {
                this.baseCategoryDropDown = data.map((x) => {
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
        this.selectedCategory = {};
        this.subCategories = [];
        this.resetProductAttributes();
        if (event) {
            this.selectedCategory = {};
            this.selectedCategory[0] = event;
            return this.categoriesService.getOne(event._id).subscribe((res) => {
                this.toastr.info(res['message'], 'Info');
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
                if (res['data'].productAttributes) {
                    this.selectedCategoryAttributes = res['data'].productAttributes;
                    this.getproductAttributesList(res['data'].productAttributes);
                }
            }, (error) => {
                this.toastr.error(error.error.message, 'Error');
                // this.error.next(error.error.message);
            });
        }
        else {
            this.selectedCategory = {};
            this.subCategories = [];
            this.resetProductAttributes();
        }
    }
    // End select dropdown
    selectSubCategory(fieldIndex, event) {
        this.spinner.show();
        this.resetProductAttributes();
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
                if (res['data'].productAttributes) {
                    this.selectedCategoryAttributes = res['data'].productAttributes;
                    this.getproductAttributesList(res['data'].productAttributes);
                }
            }, (error) => {
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
    getproductAttributesList(attributes) {
        const properties = this.form.get('properties');
        for (let i = 0; i < properties['controls'].length; i++) {
            const property = properties['controls'][i];
            this.setArrayInGroup(property, attributes);
        }
    }
    resetProductAttributes() {
        this.attributesDropDown = [{ values: [] }];
        for (let i = 0; i < this.form.get('properties')['controls'].length; i++) {
            let productAttributes = this.form
                .get('properties')['controls'][i].get('productAttributes');
            while (productAttributes.length !== 0) {
                productAttributes.removeAt(0);
            }
        }
    }
    addProperty() {
        const properties = this.form.get('properties');
        if (properties['controls'][properties.length - 1].valid &&
            this.selectedCategoryAttributes.length > 0) {
            properties.push(this.fb.group({
                price: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                qty: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                productAttributes: this.fb.array([]),
            }));
            this.setArrayInGroup(properties['controls'][properties.length - 1], this.selectedCategoryAttributes);
        }
    }
    removeProperty(ind) {
        const properties = this.form.get('properties');
        if (properties.controls.length > 1) {
            properties.removeAt(ind);
        }
    }
    setArrayInGroup(group, attributes) {
        let productAttributes = group.get('productAttributes');
        for (let i = 0; i < attributes.length; i++) {
            this.attributesDropDown[i] = { values: [] };
            // add product attributes to form
            productAttributes.controls[i] = this.fb.group({
                name: this.fb.group({
                    en: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    ar: [''],
                }),
                value: this.fb.group({
                    _id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    en: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    ar: [''],
                }),
            });
            productAttributes.controls[i]
                .get('name')
                .get('en')
                .patchValue(attributes[i]['name']['en']);
            productAttributes.controls[i]
                .get('name')
                .get('ar')
                .patchValue(attributes[i]['name']['ar']);
            // list of product attributes values to dropdown fields
            for (let valueIndex = 0; valueIndex < attributes[i].values.length; valueIndex++) {
                this.attributesDropDown[i].values.push({
                    _id: attributes[i].values[valueIndex]['_id'],
                    nameEn: attributes[i].values[valueIndex]['en'],
                    nameAr: attributes[i].values[valueIndex]['ar'],
                });
            }
        }
    }
    selectProductAttribute(event, propInd, attIndex) {
        if (!this.properties[propInd]) {
            this.properties[propInd] = [];
        }
        if (!this.properties[propInd][attIndex]) {
            this.properties[propInd][attIndex] = [];
        }
        this.properties[propInd][attIndex] = event;
    }
    selectProductAttributeText(event, propInd, attIndex) {
        if (!this.properties[propInd]) {
            this.properties[propInd] = [];
        }
        if (!this.properties[propInd][attIndex]) {
            this.properties[propInd][attIndex] = [];
        }
        this.properties[propInd][attIndex] = {
            _id: `${propInd} ff ${attIndex}`,
            nameEn: event.target.value,
            nameAr: '',
        };
    }
    // End select dropdown
    onSubmit() {
        this.spinner.show();
        //** Start product attributes  */ */ */
        //** adding values to product attributes form array controls */ */ */
        for (let index = 0; index < this.form.get('properties')['controls'].length; index++) {
            const property = this.form.get('properties')['controls'][index];
            let attributes = property.get('productAttributes');
            for (let i = 0; i < attributes['controls'].length; i++) {
                const att = attributes['controls'][i];
                if (this.properties[index]) {
                    if (this.properties[index][i]) {
                        att
                            .get('value')
                            .get('_id')
                            .patchValue(this.properties[index][i]._id);
                        att
                            .get('value')
                            .get('en')
                            .patchValue(this.properties[index][i].nameEn);
                        att
                            .get('value')
                            .get('ar')
                            .patchValue(this.properties[index][i].nameAr);
                    }
                }
            }
            attributes.patchValue(attributes.controls);
        }
        // adding values to product attributes form array controls
        // End product attributes
        /////////////////////////
        // Start category
        if (Object.keys(this.selectedCategory).length === 0) {
            this.form.get('category').reset();
        }
        else {
            var count = 0;
            for (var prop in this.selectedCategory) {
                if (this.selectedCategory.hasOwnProperty(prop))
                    ++count;
            }
            if (this.selectedCategory[count - 1]) {
                this.form
                    .get('category')
                    .get('_id')
                    .patchValue(this.selectedCategory[count - 1]._id);
                this.form
                    .get('category')
                    .get('name')
                    .get('en')
                    .patchValue(this.selectedCategory[count - 1].nameEn);
                this.form
                    .get('category')
                    .get('name')
                    .get('ar')
                    .patchValue(this.selectedCategory[count - 1].nameAr);
            }
        }
        // End category
        /////////////////////////
        const formData = new FormData();
        for (const key in this.form.value) {
            if (key === 'photos') {
                for (let i = 0; i < this.form.value[key].length; i++) {
                    formData.append(key, this.form.value[key][i]);
                }
            }
            else {
                // contains object
                formData.append(key, JSON.stringify(this.form.value[key]));
            }
        }
        this.productsService.addOne(formData).subscribe((res) => {
            this.photos = [];
            this.form.reset();
            this.toastr.info(res['message'], 'Info');
            this.router.navigate(['/products']);
            this.spinner.hide();
        }, (error) => {
            //** */
            for (let index = 0; index < this.form.get('properties')['controls'].length; index++) {
                const property = this.form.get('properties')['controls'][index];
                let attributes = property.get('productAttributes');
                while (attributes.length !== 0) {
                    attributes.removeAt(0);
                }
            }
            //** */
            this.toastr.error(error.error.message, 'Error');
            // this.error.next(error.error.message);
            this.spinner.hide();
        });
        this.spinner.hide();
    }
}
AddProductComponent.ɵfac = function AddProductComponent_Factory(t) { return new (t || AddProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_attributes_product_attributes_service__WEBPACK_IMPORTED_MODULE_3__["ProductAttributesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_categories_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
AddProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddProductComponent, selectors: [["app-add-product"]], decls: 35, vars: 58, consts: [[1, "grid-center-noGutter"], [1, "col-20_sm-22_xs-23", "grid-center-noGutter", "content"], [1, "title", "col-24", "grid-center"], [1, "form", "col-23"], [1, "grid-middle-spaceBetween-noGutter"], [1, "form-group", "grid-center-middle-noGutter", "col-24"], [1, "col-24", "grid-center"], [3, "photos", "control"], ["type", "text", 1, "col-11_sm-24", 3, "label", "labelAr", "fieldId", "required", "placeholder", "placeholderAr", "tooltipMsg", "control", "fieldClass"], ["type", "text", 1, "col-11_sm-24", "grid-noGutter", 3, "label", "labelAr", "fieldId", "placeholder", "placeholderAr", "tooltipMsg", "control", "fieldClass"], [1, "col-24", "grid-noGutter"], [1, "col-11_sm-24", 3, "label", "labelAr", "fieldId", "ItemsList", "placeholder", "placeholderAr", "fieldClass", "required", "itemselected"], [4, "ngFor", "ngForOf"], [1, "grid-start-noGutter", "col-24", 2, "margin-bottom", "15px"], [4, "ngIf"], [1, "grid-right"], ["type", "submit", 1, "btn", "col-3_sm-5_xs-6", "color1", "round", 3, "disabled", "click"], ["type", "button", 1, "btn", "col-3_sm-5_xs-6", "color2", "round", 3, "routerLink"], ["type", "number", 1, "col-11_sm-24", 3, "label", "labelAr", "fieldId", "required", "placeholder", "placeholderAr", "control", "fieldClass"], ["type", "number", 1, "col-11_sm-24", "grid-noGutter", 3, "label", "labelAr", "fieldId", "required", "placeholder", "placeholderAr", "control", "fieldClass"], [1, "col-24", 2, "height", "2px", "background-color", "#e9e9e9", "margin", "10px"], [1, "col-24", "actions"], ["tooltip", "Remove property", 1, "material-icons", 2, "cursor", "pointer", 3, "click"], [1, "col-11_sm-24", 3, "ngClass", "label", "labelAr", "fieldId", "ItemsList", "fieldClass", "required", "itemselected"], [1, "form-group", "col-11_sm-24", "grid-center-middle-noGutter"], [1, "col_sm-24", "grid_sm-noGutter"], [3, "for"], [1, "col-18_md-24", "grid"], ["type", "text", "autocomplete", "off", "placement", "top", 1, "form-control", 3, "id", "placeholder", "tooltip", "input"], [1, "btn", "color1", 2, "margin-bottom", "20px", 3, "disabled", "click"]], template: function AddProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-upload-multi-photos", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-input-text", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemselected", function AddProductComponent_Template_app_select_itemselected_17_listener($event) { return ctx.selectBaseCategory($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AddProductComponent_ng_container_18_Template, 3, 8, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AddProductComponent_ng_container_24_Template, 5, 18, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AddProductComponent_ng_container_25_Template, 7, 11, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProductComponent_Template_button_click_27_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 37, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 39, "add")), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 41, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 43, "Product")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("photos", ctx.photos)("control", ctx.form.get("photos"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Name")("labelAr", "\u0627\u0644\u0627\u0633\u0645")("fieldId", "name")("required", true)("placeholder", "Product Name")("placeholderAr", "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C")("tooltipMsg", "Name")("control", ctx.form.get("name"))("fieldClass", "col-18_md-24");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Description")("labelAr", "\u0627\u0644\u0648\u0635\u0641")("fieldId", "description")("placeholder", "Product description")("placeholderAr", "\u0648\u0635\u0641 \u0627\u0644\u0645\u0646\u062A\u062C")("tooltipMsg", "Product description")("control", ctx.form.get("description"))("fieldClass", "col-18_md-24");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Category")("labelAr", "\u0627\u0644\u0642\u0633\u0645")("fieldId", "category")("ItemsList", ctx.baseCategoryDropDown)("placeholder", "Choose parent category")("placeholderAr", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0631\u0626\u064A\u0633\u064A")("fieldClass", "col-18_md-24")("required", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subCategories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 45, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 47, "properties")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.form.get("properties")["controls"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedCategoryAttributes.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 49, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 51, "Submit")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](57, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 53, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 55, "Cancel")), " ");
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerComponent"], _reusable_components_form_fields_upload_multi_photos_upload_multi_photos_component__WEBPACK_IMPORTED_MODULE_9__["UploadMultiPhotosComponent"], _reusable_components_form_fields_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_10__["InputTextComponent"], _reusable_components_form_fields_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_11__["TextareaComponent"], _reusable_components_form_fields_select_select_component__WEBPACK_IMPORTED_MODULE_12__["SelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_14__["TooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["LowerCasePipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  background-color: #efedf2;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 15px !important;\n  margin-bottom: 35px;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n}\n\n.content[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background-color: #fffdfe;\n  border: 1px solid #f1f1f1;\n  padding-bottom: 15px !important;\n  margin-bottom: 20px;\n  box-shadow: 0 0px 8px 1px rgba(0, 0, 0, 0.05);\n  margin-top: 20px;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0c425d;\n  margin-bottom: 15px;\n  background-color: #f9f9f9;\n  border-bottom: 1px solid #f1f1f1;\n  padding: 10px !important;\n  border-radius: 10px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  font-size: 16px;\n}\n\n.textarea-maxWidth[_ngcontent-%COMP%] {\n  max-width: 81.7%;\n}\n\n[_nghost-%COMP%]     app-ng2tel .iti.iti--allow-dropdown {\n  width: 100%;\n}\n\n.activeModalIcon[_ngcontent-%COMP%] {\n  background: #1f1a5f !important;\n  border-radius: 10px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.actions[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  padding: 4px;\n  vertical-align: middle;\n  background-color: red;\n  color: white;\n  border-radius: 50%;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvYWRkLXByb2R1Y3QvRTpcXFVudGl0bGVkIEZvbGRlclxccHJpdmF0ZVxccHJvamVjdHNcXGZ1bGxfc3RhY2tcXG1vdG9iYXJcXG1vdG9iYXJfYWRtaW4vc3JjXFxhcHBcXHBhZ2VzXFxwcm9kdWN0c1xcYWRkLXByb2R1Y3RcXGFkZC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9kdWN0cy9hZGQtcHJvZHVjdC9FOlxcVW50aXRsZWQgRm9sZGVyXFxwcml2YXRlXFxwcm9qZWN0c1xcZnVsbF9zdGFja1xcbW90b2JhclxcbW90b2Jhcl9hZG1pbi9zcmNcXHNjc3NcXGFic3RyYWN0c1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9kdWN0cy9hZGQtcHJvZHVjdC9hZGQtcHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGNBQUE7RUFDQSx5QkNrQndCO0FDbEIxQjs7QUZFQTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0FFQ0Y7O0FGQUU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBRUVKOztBRkNBO0VBQ0UsbUJBQUE7RUFDQSx5QkNRd0I7RURQeEIseUJBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkNBQUE7RUFDQSxnQkFBQTtBRUVGOztBRkNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0N6Qk87RUQwQlAsbUJBQUE7RUFDQSx5QkNad0I7RURheEIsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FFRUY7O0FGQ0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBRUVGOztBRkNBO0VBQ0UsZ0JBQUE7QUVFRjs7QUZDQTtFQUNFLFdBQUE7QUVFRjs7QUZDQTtFQUVFLDhCQUFBO0VBQ0EsbUJBQUE7QUVDRjs7QUZFQTtFQUNFLHFCQUFBO0FFQ0Y7O0FGQUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FFRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0cy9hZGQtcHJvZHVjdC9hZGQtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zY3NzL2Fic3RyYWN0cy92YXJpYWJsZXNcIjtcbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWJhY2tncm91bmQtY29sb3I7XG59XG4uZm9ybS1ncm91cCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzY2NjtcbiAgfVxufVxuLmNvbnRlbnQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FyZC1ib2R5O1xuICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3gtc2hhZG93OiAwIDBweCA4cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICRjb2xvcjE7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjYXJkLWhlYWRlci1iZztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXI7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnRleHRhcmVhLW1heFdpZHRoIHtcbiAgbWF4LXdpZHRoOiA4MS43JTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIGFwcC1uZzJ0ZWwgLml0aS5pdGktLWFsbG93LWRyb3Bkb3duIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hY3RpdmVNb2RhbEljb24ge1xuICAvLyBiYWNrZ3JvdW5kOiAjNDZiOGRhICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICMxZjFhNWYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmFjdGlvbnMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGkge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbiIsIi8vY29sb3JzXG4kd2hpdGUgOiB3aGl0ZTtcbiRjb2xvcjE6ICMwYzQyNWQ7XG4kY29sb3IyOiAjYThkMmJlO1xuJGNvbG9yMzogIzQ4OTljMjtcbiRjb2xvcjQ6ICMxZjc3YTM7XG5cbiRjb2xvcjUgOiAjZjlhZTRlO1xuJGNvbG9yNTU6ICNkNjg1MjI7XG5cbiRib3JkZXIgICAgICAgICAgICAgICAgIDogI2YxZjFmMTtcbiRkYXRhLXRhYmxlLWJvcmRlciAgICAgIDogI2U5ZTllOTtcbiRncmF5MiAgICAgICAgICAgICAgICAgIDogI2UyZTJlMjtcbiRncmF5MyAgICAgICAgICAgICAgICAgIDogIzc1NzU3NTtcbiR0cmFzaC1jb2xvciAgICAgICAgICAgIDogI0M5MzAyQztcbiRmb250LWNvbG9yICAgICAgICAgICAgIDogIzU1NTtcbiRhY3RpdmUtYnJlYWRjcnVtYi1jb2xvcjogIzM0MzQzNDtcbiRjYXJkLWhlYWRlci1iZyAgICAgICAgIDogI2Y5ZjlmOTsgLy8jZWZlZmVmOyAvLyNmOWY5Zjk7XG4kcGxhY2Vob2xkZXItY29sb3IgICAgICA6ICNiM2IzYjM7XG5cbi8vIGJhY2tncm91bmQgY29sb3JcbiRtYWluLWJhY2tncm91bmQtY29sb3IgIDogI2VmZWRmMjtcbiRoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4kZGF0YS10YWJsZS1ib3ggICAgICAgICA6ICNmZmZkZmU7IC8vI2Y3ZjdmNztcbiRjYXJkLWJvZHkgICAgICAgICAgICAgIDogI2ZmZmRmZTtcblxuLy8gRGFzaGJvYXJkXG4kbWFyZ2luQmV0d2VlbkNhcmRzOiAyMnB4O1xuJGF4aXNGb250U2l6ZSAgICAgIDogMTJweDtcbiRzbWFsbEF4aXNGb250U2l6ZSA6IDEwcHg7XG5cbi8vaGVhZGVyXG4kcHJvZmlsZS1tZW51LWNvbG9yOiAjZjlmOWY5O1xuJGJpbGwtY29sb3IgICAgICAgIDogIzliYTJhYTtcbiRiaWxsLWhvdmVyLWNvbG9yICA6ICM3MzgxOGY7XG5cbi8vTGF5b3V0IFZhcmlhYmxlc1xuXG4kaGVhZGVyLWhlaWdodCA6IDU1cHg7XG4kc2lkZU1lbnUtd2lkdGg6IDIwMHB4O1xuXG5cbi8vbG9naW5cbiRsb3lhbGl0eS1jb2xvciAgOiAjODg3ZjdmO1xuJGxvZ2luLWJveC1jb2xvciA6ICNmNWYyZjA7XG5cbi8vbWFpbFxuJG1haWwtY2hlY2tib3gtY29sb3I6ICMwMDczYWE7XG4kdXNlci1tYWlsLWNvbG9yICAgIDogIzI5MmIyYztcblxuLy9wcm9maWxlXG4kYWN0aXZlLWNvbG9yICAgICA6ICNmNGY2Zjk7XG4kaWNvbi1jb2xvciAgICAgICA6ICM5NTljYjY7XG4kbGFiZWwtdGl0bGUtY29sb3I6ICM1MDU2NmE7XG5cbi8vZW1haWwgdGVtcGxhdGVzXG4kZW1haWwtYmx1ZS1jb2xvcjogIzBmNDE1ZDtcbiRlbWFpbC1ncmF5LWNvbG9yOiAjNWY2MDYwO1xuJGVtYWlsLXN5YW4tY29sb3I6ICNhMmQ5YzI7XG4kZW1haWwtb3JhZ25lLWNvbG9yOiAjZmZhYzUyO1xuXG4vL2ZvbnRzXG4kZm9udDI4ICAgICAgICAgICA6IDI4cHg7XG4kZm9udDI0ICAgICAgICAgICA6IDI0cHg7XG4kZm9udDE4ICAgICAgICAgICA6IDE4cHg7XG4kZm9udDE2ICAgICAgICAgICA6IDE2cHg7XG4kZm9udDE0ICAgICAgICAgICA6IDE0cHg7XG4kZm9udDEyICAgICAgICAgICA6IDEycHg7XG4kZm9udDEwICAgICAgICAgICA6IDEwcHg7XG4kZm9udC13ZWlnaHQtNjAwICA6IDYwMDtcbiRmb250LXdlaWdodC01MDAgIDogNTAwO1xuJHBsYWNlaG9sZGVyLWZvbnQgOiAxMnB4O1xuJGxhYmVsLWZvbnQgICAgICAgOiAxNHB4O1xuJGNhcmQtaGVhZGVyLWZvbnQgOiAxNnB4O1xuXG4kZGF0YS10YWJsZS1oZWFkZXItMTM2NiA6IDE0cHg7XG4kZGF0YS10YWJsZS1oZWFkZXItMTkyMCA6IDE2cHg7XG4kZGF0YS10YWJsZS1ib2R5LTEzNjYgOiAxMnB4O1xuJGRhdGEtdGFibGUtYm9keS0xOTIwOiAxNnB4O1xuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWRmMjtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG4uZm9ybS1ncm91cCBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5jb250ZW50IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmRmZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgcGFkZGluZy1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm94LXNoYWRvdzogMCAwcHggOHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMGM0MjVkO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5idXR0b24ge1xuICBtYXJnaW46IDAgMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4udGV4dGFyZWEtbWF4V2lkdGgge1xuICBtYXgtd2lkdGg6IDgxLjclO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgYXBwLW5nMnRlbCAuaXRpLml0aS0tYWxsb3ctZHJvcGRvd24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFjdGl2ZU1vZGFsSWNvbiB7XG4gIGJhY2tncm91bmQ6ICMxZjFhNWYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmFjdGlvbnMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uYWN0aW9ucyBpIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiA0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-product',
                templateUrl: './add-product.component.html',
                styleUrls: ['./add-product.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] }, { type: _product_attributes_product_attributes_service__WEBPACK_IMPORTED_MODULE_3__["ProductAttributesService"] }, { type: _categories_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"] }, { type: _services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/products/edit-product/edit-product.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/products/edit-product/edit-product.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductComponent", function() { return EditProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../products.service */ "./src/app/pages/products/products.service.ts");
/* harmony import */ var _categories_categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../categories/categories.service */ "./src/app/pages/categories/categories.service.ts");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _reusable_components_form_fields_upload_multi_photos_upload_multi_photos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../reusable-components/form-fields/upload-multi-photos/upload-multi-photos.component */ "./src/app/reusable-components/form-fields/upload-multi-photos/upload-multi-photos.component.ts");
/* harmony import */ var _reusable_components_form_fields_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../reusable-components/form-fields/input-text/input-text.component */ "./src/app/reusable-components/form-fields/input-text/input-text.component.ts");
/* harmony import */ var _reusable_components_form_fields_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../reusable-components/form-fields/textarea/textarea.component */ "./src/app/reusable-components/form-fields/textarea/textarea.component.ts");
/* harmony import */ var _reusable_components_form_fields_select_select_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../reusable-components/form-fields/select/select.component */ "./src/app/reusable-components/form-fields/select/select.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

















function EditProductComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemselected", function EditProductComponent_ng_container_13_Template_app_select_itemselected_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.selectSubCategory(i_r4, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r4 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "sub category")("labelAr", "\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0641\u0631\u0639\u064A")("fieldId", "subCategory" + (i_r4 + 1).toString())("ItemsList", ctx_r0.subCategories[i_r4])("placeholder", "Choose category")("placeholderAr", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0642\u0633\u0645")("fieldClass", "col-18_md-24")("required", true);
} }
function EditProductComponent_ng_container_17_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditProductComponent_ng_container_17_ng_container_1_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const propInd_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.removeProperty(propInd_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
const _c0 = function (a0) { return { "grid-noGutter": a0 }; };
function EditProductComponent_ng_container_17_ng_container_4_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemselected", function EditProductComponent_ng_container_17_ng_container_4_ng_container_1_ng_container_1_Template_app_select_itemselected_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const attIndex_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const propInd_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.selectProductAttribute($event, propInd_r8, attIndex_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const attIndex_r16 = ctx_r23.index;
    const att_r15 = ctx_r23.$implicit;
    const propInd_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, attIndex_r16 % 2 != 0))("label", att_r15.get("name").get("en").value)("labelAr", att_r15.get("name").get("ar").value)("placeholder", att_r15.get("name").get("en").value)("placeholderAr", att_r15.get("name").get("ar").value)("fieldId", att_r15.get("name").get("en").value)("initialSelectedItem", ctx_r17.initialSelectedProductAttribute[propInd_r8][attIndex_r16])("ItemsList", ctx_r17.attributesDropDown[attIndex_r16].values)("fieldClass", "col-18_md-24")("required", true);
} }
const _c1 = function (a0) { return { grid: a0 }; };
function EditProductComponent_ng_container_17_ng_container_4_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function EditProductComponent_ng_container_17_ng_container_4_ng_container_1_ng_container_2_Template_input_input_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const attIndex_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const propInd_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.selectProductAttributeText($event, propInd_r8, attIndex_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const attIndex_r16 = ctx_r29.index;
    const att_r15 = ctx_r29.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, attIndex_r16 % 2 != 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", att_r15.get("name").get("en").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.arabic ? att_r15.get("name").get("ar").value : att_r15.get("name").get("en").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", att_r15.get("name").get("en").value)("placeholder", ctx_r18.arabic ? att_r15.get("name").get("ar").value : att_r15.get("name").get("en").value)("tooltip", ctx_r18.arabic ? att_r15.get("name").get("ar").value : att_r15.get("name").get("en").value)("value", att_r15.get("value").get("en").value && att_r15.get("value").get("en").value != "" ? att_r15.get("value").get("en").value : att_r15.get("value").get("ar").value);
} }
function EditProductComponent_ng_container_17_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditProductComponent_ng_container_17_ng_container_4_ng_container_1_ng_container_1_Template, 2, 12, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditProductComponent_ng_container_17_ng_container_4_ng_container_1_ng_container_2_Template, 7, 9, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const attIndex_r16 = ctx.index;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.attributesDropDown[attIndex_r16].values.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.attributesDropDown[attIndex_r16].values.length === 0);
} }
function EditProductComponent_ng_container_17_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditProductComponent_ng_container_17_ng_container_4_ng_container_1_Template, 3, 2, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const property_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", property_r7.get("productAttributes")["controls"]);
} }
function EditProductComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditProductComponent_ng_container_17_ng_container_1_Template, 6, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-input-text", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-input-text", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditProductComponent_ng_container_17_ng_container_4_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const property_r7 = ctx.$implicit;
    const propInd_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", propInd_r8 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Price")("labelAr", "\u0627\u0644\u0633\u0639\u0631")("fieldId", "price")("required", true)("placeholder", "Product Cost")("placeholderAr", "\u0627\u0644\u0633\u0639\u0631")("control", property_r7.get("price"))("fieldClass", "col-18_md-24");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Quantity")("labelAr", "\u0627\u0644\u0643\u0645\u064A\u0629")("fieldId", "qty")("required", true)("placeholder", "Product quantity")("placeholderAr", "\u0643\u0645\u064A\u0629 \u0627\u0644\u0645\u0646\u062A\u062C")("control", property_r7.get("qty"))("fieldClass", "col-18_md-24");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", property_r7.get("productAttributes")["controls"].length > 0);
} }
function EditProductComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditProductComponent_ng_container_18_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.addProperty(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.form.get("properties")["controls"][ctx_r2.form.get("properties")["controls"].length - 1].valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, "Add")), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 9, "property")), " ");
} }
const _c2 = function () { return ["/products"]; };
class EditProductComponent {
    constructor(fb, route, productsService, categoriesService, languageService, toastr, spinner, router) {
        this.fb = fb;
        this.route = route;
        this.productsService = productsService;
        this.categoriesService = categoriesService;
        this.languageService = languageService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.router = router;
        this.originalPhotos = [];
        this.form = this.fb.group({
            // originalPhotos: this.fb.array([]),
            photos: this.fb.array([]),
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            category: this.fb.group({
                _id: [],
                name: this.fb.group({
                    en: [],
                    ar: [],
                }),
            }),
            properties: this.fb.array([]),
        });
        this.attributesDropDown = [{ values: [] }];
        this.selectedCategoryAttributes = [];
        this.subCategories = [];
        this.selectedCategory = {};
        this.initialSelectedProductAttribute = [[]];
        this.properties = [];
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
    ngOnInit() {
        this.productId = this.route.snapshot.paramMap.get('id');
        this.getbaseCategoriesList();
    }
    ngAfterViewInit() {
        this.getOne(this.productId);
    }
    getOne(id) {
        this.spinner.show();
        this.productsService.getOne(id).subscribe((res) => {
            // this.form.get('name').patchValue(res['data']['name']);
            // this.form.get('description').patchValue(res['data']['description']);
            console.log(res['data']);
            this.form.patchValue(res['data']);
            this.getCategory(res['data']['category']._id);
            //** set initial selected category */
            this.initialSelectedCategory = {
                _id: res['data']['category']['_id'],
                nameEn: res['data']['category']['en'],
                nameAr: res['data']['category']['ar'],
            };
            this.selectedCategory = {};
            this.selectedCategory[0] = {
                _id: res['data']['category']['_id'],
                nameEn: res['data']['category']['en'],
                nameAr: res['data']['category']['ar'],
            };
            //** finish setting initial selected category */
            this.originalPhotos = res['data']['photos'];
            let photosControl = this.form.get('photos');
            for (let index = 0; index < this.originalPhotos.length; index++) {
                photosControl.push(this.fb.control(''));
            }
            this.form.get('photos').patchValue(res['data']['photos']);
            this.toastr.info(res['message'], 'Info');
            for (let propIndex = 0; propIndex < res['data']['properties'].length; propIndex++) {
                let propertyControl = this.form.get('properties');
                propertyControl.push(this.fb.group({
                    _id: [''],
                    price: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    qty: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    productAttributes: this.fb.array([]),
                }));
                if (!this.properties[propIndex]) {
                    this.properties[propIndex] = [];
                }
                for (let attIndex = 0; attIndex <
                    res['data']['properties'][propIndex]['productAttributes'].length; attIndex++) {
                    if (!this.properties[propIndex][attIndex]) {
                        this.properties[propIndex][attIndex] = [];
                    }
                    this.properties[propIndex][attIndex] = {
                        _id: res['data']['properties'][propIndex]['productAttributes'][attIndex].value._id,
                        nameEn: res['data']['properties'][propIndex]['productAttributes'][attIndex].value.en,
                        nameAr: res['data']['properties'][propIndex]['productAttributes'][attIndex].value.ar,
                    };
                    // this.properties[propIndex][attIndex] =
                    //   res['data']['properties'][propIndex]['productAttributes'][
                    //     attIndex
                    //   ];
                }
            }
            if (res['data']['properties'] &&
                res['data']['properties'].length === 0) {
                let propertyControl = this.form.get('properties');
                propertyControl.push(this.fb.group({
                    _id: [''],
                    price: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    qty: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    productAttributes: this.fb.array([]),
                }));
            }
            this.form.get('properties').patchValue(res['data']['properties']);
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error.message, 'Error');
            // this.error.next(error.error.message);
        });
        this.spinner.hide();
    }
    addProperty() {
        this.initialSelectedProductAttribute.push([]);
        const properties = this.form.get('properties');
        if (properties['controls'][properties.length - 1].valid) {
            properties.push(this.fb.group({
                _id: [''],
                price: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                qty: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                productAttributes: this.fb.array([]),
            }));
            this.setArrayInGroup(properties['controls'][properties.length - 1], this.selectedCategoryAttributes);
        }
    }
    removeProperty(ind) {
        const properties = this.form.get('properties');
        if (properties.controls.length > 1) {
            properties.removeAt(ind);
        }
    }
    getCategory(categoryId) {
        this.spinner.show();
        return this.categoriesService.getOne(categoryId).subscribe((res) => {
            this.toastr.info(res['message'], 'Info');
            if (res['data'].productAttributes) {
                this.selectedCategoryAttributes = res['data'].productAttributes;
                this.getproductAttributesList(res['data'].productAttributes);
            }
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error.message, 'Error');
            // this.error.next(error.error.message);
        });
        this.spinner.hide();
    }
    getbaseCategoriesList() {
        this.spinner.show();
        this.categoriesService.getBaseCategories();
        this.categoriesService.baseCategories.subscribe((data) => {
            if (data) {
                this.baseCategoryDropDown = data.map((x) => {
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
        this.selectedCategory = {};
        this.subCategories = [];
        this.resetProductAttributes();
        if (event) {
            this.selectedCategory = {};
            this.selectedCategory[0] = event;
            return this.categoriesService.getOne(event._id).subscribe((res) => {
                this.toastr.info(res['message'], 'Info');
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
                if (res['data'].productAttributes) {
                    this.selectedCategoryAttributes = res['data'].productAttributes;
                    this.getproductAttributesList(res['data'].productAttributes);
                }
            }, (error) => {
                console.log(error);
                this.toastr.error(error.error.message, 'Error');
                // this.error.next(error.error.message);
            });
        }
        else {
            this.selectedCategory = {};
            this.subCategories = [];
            this.resetProductAttributes();
        }
    }
    // End select dropdown
    selectSubCategory(fieldIndex, event) {
        this.spinner.show();
        this.resetProductAttributes();
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
                if (res['data'].productAttributes) {
                    this.selectedCategoryAttributes = res['data'].productAttributes;
                    this.getproductAttributesList(res['data'].productAttributes);
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
    resetProductAttributes() {
        this.attributesDropDown = [{ values: [] }];
        for (let i = 0; i < this.form.get('properties')['controls'].length; i++) {
            let productAttributes = this.form
                .get('properties')['controls'][i].get('productAttributes');
            while (productAttributes.length !== 0) {
                productAttributes.removeAt(0);
            }
        }
    }
    // End select dropdown
    getproductAttributesList(attributes) {
        const propertyControl = this.form.get('properties');
        for (let i = 0; i < propertyControl['controls'].length; i++) {
            const property = propertyControl['controls'][i];
            this.setArrayInGroup(property, attributes);
        }
        this.getInitialAttributes();
    }
    setArrayInGroup(group, attributes) {
        let productAttributes = group.get('productAttributes');
        for (let i = 0; i < attributes.length; i++) {
            this.attributesDropDown[i] = { values: [] };
            // add product attributes to form
            productAttributes.controls[i] = this.fb.group({
                name: this.fb.group({
                    en: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    ar: [''],
                }),
                value: this.fb.group({
                    _id: [''],
                    en: [''],
                    ar: [''],
                }),
            });
            productAttributes.controls[i]
                .get('name')
                .get('en')
                .patchValue(attributes[i]['name']['en']);
            productAttributes.controls[i]
                .get('name')
                .get('ar')
                .patchValue(attributes[i]['name']['ar']);
            // list of product attributes values to dropdown fields
            for (let valueIndex = 0; valueIndex < attributes[i].values.length; valueIndex++) {
                this.attributesDropDown[i].values.push({
                    _id: attributes[i].values[valueIndex]['_id'],
                    nameEn: attributes[i].values[valueIndex]['en'],
                    nameAr: attributes[i].values[valueIndex]['ar'],
                });
            }
        }
    }
    getInitialAttributes() {
        let propertyControl = this.form.get('properties');
        for (let propIndex = 0; propIndex < propertyControl['controls'].length; propIndex++) {
            let attributes = propertyControl['controls'][propIndex].get('productAttributes');
            for (let attIndex = 0; attIndex < attributes['controls'].length; attIndex++) {
                const att = attributes['controls'][attIndex];
                if (this.properties[propIndex][attIndex]) {
                    att
                        .get('value')
                        .get('_id')
                        .patchValue(this.properties[propIndex][attIndex]._id);
                    att
                        .get('value')
                        .get('en')
                        .patchValue(this.properties[propIndex][attIndex].nameEn);
                    att
                        .get('value')
                        .get('ar')
                        .patchValue(this.properties[propIndex][attIndex].nameAr);
                    if (!this.initialSelectedProductAttribute[propIndex]) {
                        this.initialSelectedProductAttribute[propIndex] = [];
                    }
                    this.initialSelectedProductAttribute[propIndex][attIndex] = {
                        _id: this.properties[propIndex][attIndex]._id,
                        nameEn: this.properties[propIndex][attIndex].nameEn,
                        nameAr: this.properties[propIndex][attIndex].nameAr,
                    };
                }
            }
            attributes.patchValue(attributes.controls);
        }
    }
    selectProductAttribute(event, propInd, attIndex) {
        if (!this.properties[propInd]) {
            this.properties[propInd] = [];
        }
        if (!this.properties[propInd][attIndex]) {
            this.properties[propInd][attIndex] = [];
        }
        this.properties[propInd][attIndex] = event;
    }
    selectProductAttributeText(event, propInd, attIndex) {
        if (!this.properties[propInd]) {
            this.properties[propInd] = [];
        }
        if (!this.properties[propInd][attIndex]) {
            this.properties[propInd][attIndex] = [];
        }
        this.properties[propInd][attIndex] = {
            _id: `${propInd} ff ${attIndex}`,
            nameEn: event.target.value,
            nameAr: '',
        };
    }
    onSubmit() {
        this.spinner.show();
        //** Start product attributes
        //** adding values to product attributes form array controls
        for (let index = 0; index < this.form.get('properties')['controls'].length; index++) {
            const property = this.form.get('properties')['controls'][index];
            let attributes = property.get('productAttributes');
            for (let i = 0; i < attributes['controls'].length; i++) {
                const att = attributes['controls'][i];
                if (this.properties[index]) {
                    if (this.properties[index][i]) {
                        att
                            .get('value')
                            .get('_id')
                            .patchValue(this.properties[index][i]._id);
                        att
                            .get('value')
                            .get('en')
                            .patchValue(this.properties[index][i].nameEn);
                        att
                            .get('value')
                            .get('ar')
                            .patchValue(this.properties[index][i].nameAr);
                    }
                }
            }
            attributes.patchValue(attributes.controls);
        }
        //** adding values to product attributes form array controls
        //** End product attributes
        /////////////////////////
        //** Start category
        if (Object.keys(this.selectedCategory).length === 0) {
            this.form.get('category').reset();
        }
        else {
            var count = 0;
            for (var prop in this.selectedCategory) {
                if (this.selectedCategory.hasOwnProperty(prop))
                    ++count;
            }
            if (this.selectedCategory[count - 1]) {
                this.form
                    .get('category')
                    .get('_id')
                    .patchValue(this.selectedCategory[count - 1]._id);
                this.form
                    .get('category')
                    .get('name')
                    .get('en')
                    .patchValue(this.selectedCategory[count - 1].nameEn);
                this.form
                    .get('category')
                    .get('name')
                    .get('ar')
                    .patchValue(this.selectedCategory[count - 1].nameAr);
            }
        }
        //** End category
        /////////////////////////
        const formData = new FormData();
        for (const key in this.form.value) {
            if (key === 'photos') {
                for (let i = 0; i < this.form.value[key].length; i++) {
                    formData.append(key, this.form.value[key][i]);
                }
            }
            else {
                // contains object
                formData.append(key, JSON.stringify(this.form.value[key]));
            }
        }
        this.productsService.updateOne(formData, this.productId).subscribe((res) => {
            this.originalPhotos = [];
            // this.form.reset();
            this.toastr.info(res['message'], 'Info');
            this.router.navigate(['/products']);
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error.message, 'Error');
            // this.error.next(error.error.message);
        });
        this.spinner.hide();
    }
}
EditProductComponent.ɵfac = function EditProductComponent_Factory(t) { return new (t || EditProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_categories_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
EditProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditProductComponent, selectors: [["app-edit-product"]], decls: 28, vars: 44, consts: [[1, "grid-center-noGutter"], [1, "col-20_sm-22_xs-23", "grid-center-noGutter", "content"], [1, "title", "col-24", "grid-center"], [1, "form", "col-23"], [1, "grid-middle-spaceBetween-noGutter"], [1, "form-group", "grid-center-middle-noGutter", "col-24"], [1, "col-24", "grid-center"], [3, "initialPhotos", "control"], ["type", "text", 1, "col-11_sm-24", 3, "label", "labelAr", "fieldId", "required", "placeholder", "placeholderAr", "tooltipMsg", "control", "fieldClass"], ["type", "text", 1, "col-11_sm-24", "grid-noGutter", 3, "label", "labelAr", "fieldId", "placeholder", "placeholderAr", "tooltipMsg", "control", "fieldClass"], [1, "col-24", "grid-noGutter"], [1, "col-11_sm-24", 3, "label", "labelAr", "fieldId", "initialSelectedItem", "ItemsList", "placeholder", "placeholderAr", "fieldClass", "required", "itemselected"], [4, "ngFor", "ngForOf"], [1, "col-24", 2, "margin-bottom", "15px"], [4, "ngIf"], [1, "grid-right"], ["type", "submit", 1, "btn", "col-3_sm-5_xs-6", "color1", "round", 3, "disabled", "click"], ["type", "button", 1, "btn", "col-3_sm-5_xs-6", "color2", "round", 3, "routerLink"], [1, "col-11_sm-24", 3, "label", "labelAr", "fieldId", "ItemsList", "placeholder", "placeholderAr", "fieldClass", "required", "itemselected"], ["type", "number", 1, "col-11_sm-24", 3, "label", "labelAr", "fieldId", "required", "placeholder", "placeholderAr", "control", "fieldClass"], ["type", "number", 1, "col-11_sm-24", "grid-noGutter", 3, "label", "labelAr", "fieldId", "required", "placeholder", "placeholderAr", "control", "fieldClass"], [1, "col-24", 2, "height", "2px", "background-color", "#e9e9e9", "margin", "10px"], [1, "col-24", "actions"], ["tooltip", "Remove property", 1, "material-icons", 2, "cursor", "pointer", 3, "click"], [1, "col-11_sm-24", 3, "ngClass", "label", "labelAr", "placeholder", "placeholderAr", "fieldId", "initialSelectedItem", "ItemsList", "fieldClass", "required", "itemselected"], [1, "form-group", "col-11_sm-24", "grid-center-middle-noGutter"], [1, "col_sm-24", "grid_sm-noGutter", 3, "ngClass"], [3, "for"], [1, "col-18_md-24", "grid"], ["type", "text", "autocomplete", "off", "placement", "top", 1, "form-control", 3, "id", "placeholder", "tooltip", "value", "input"], [1, "btn", "color1", 2, "margin-bottom", "20px", 3, "disabled", "click"]], template: function EditProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Edit Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-upload-multi-photos", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-input-text", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemselected", function EditProductComponent_Template_app_select_itemselected_12_listener($event) { return ctx.selectBaseCategory($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EditProductComponent_ng_container_13_Template, 3, 8, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Properties");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EditProductComponent_ng_container_17_Template, 5, 18, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EditProductComponent_ng_container_18_Template, 7, 11, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditProductComponent_Template_button_click_20_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("initialPhotos", ctx.originalPhotos)("control", ctx.form.get("photos"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Name")("labelAr", "\u0627\u0644\u0627\u0633\u0645")("fieldId", "name")("required", true)("placeholder", "Product Name")("placeholderAr", "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C")("tooltipMsg", "Name")("control", ctx.form.get("name"))("fieldClass", "col-18_md-24");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Description")("labelAr", "\u0627\u0644\u0648\u0635\u0641")("fieldId", "description")("placeholder", "Product description")("placeholderAr", "\u0648\u0635\u0641 \u0627\u0644\u0645\u0646\u062A\u062C")("tooltipMsg", "Product description")("control", ctx.form.get("description"))("fieldClass", "col-18_md-24");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Category")("labelAr", "\u0627\u0644\u0642\u0633\u0645")("fieldId", "category")("initialSelectedItem", ctx.initialSelectedCategory)("ItemsList", ctx.baseCategoryDropDown)("placeholder", "Choose parent category")("placeholderAr", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0631\u0626\u064A\u0633\u064A")("fieldClass", "col-18_md-24")("required", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subCategories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.form.get("properties")["controls"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("properties")["controls"].length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 35, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 37, "Submit")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](43, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 39, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 41, "Cancel")), " ");
    } }, directives: [_reusable_components_form_fields_upload_multi_photos_upload_multi_photos_component__WEBPACK_IMPORTED_MODULE_8__["UploadMultiPhotosComponent"], _reusable_components_form_fields_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_9__["InputTextComponent"], _reusable_components_form_fields_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_10__["TextareaComponent"], _reusable_components_form_fields_select_select_component__WEBPACK_IMPORTED_MODULE_11__["SelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_13__["TooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["LowerCasePipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  background-color: #efedf2;\n}\n\n.content[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background-color: #fffdfe;\n  border: 1px solid #f1f1f1;\n  padding-bottom: 15px !important;\n  margin-bottom: 20px;\n  box-shadow: 0 0px 8px 1px rgba(0, 0, 0, 0.05);\n  margin-top: 20px;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0c425d;\n  margin-bottom: 15px;\n  background-color: #f9f9f9;\n  border-bottom: 1px solid #f1f1f1;\n  padding: 10px !important;\n  border-radius: 10px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  font-size: 16px;\n}\n\n.textarea-maxWidth[_ngcontent-%COMP%] {\n  max-width: 81.7%;\n}\n\n[_nghost-%COMP%]     app-ng2tel .iti.iti--allow-dropdown {\n  width: 100%;\n}\n\n.activeModalIcon[_ngcontent-%COMP%] {\n  background: #1f1a5f !important;\n  border-radius: 10px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.actions[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  padding: 4px;\n  vertical-align: middle;\n  background-color: red;\n  color: white;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 15px !important;\n  margin-bottom: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvZWRpdC1wcm9kdWN0L0U6XFxVbnRpdGxlZCBGb2xkZXJcXHByaXZhdGVcXHByb2plY3RzXFxmdWxsX3N0YWNrXFxtb3RvYmFyXFxtb3RvYmFyX2FkbWluL3NyY1xcc2Nzc1xcYWRkLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RzL2VkaXQtcHJvZHVjdC9FOlxcVW50aXRsZWQgRm9sZGVyXFxwcml2YXRlXFxwcm9qZWN0c1xcZnVsbF9zdGFja1xcbW90b2JhclxcbW90b2Jhcl9hZG1pbi9zcmNcXHNjc3NcXGFic3RyYWN0c1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9kdWN0cy9lZGl0LXByb2R1Y3QvZWRpdC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9kdWN0cy9lZGl0LXByb2R1Y3QvRTpcXFVudGl0bGVkIEZvbGRlclxccHJpdmF0ZVxccHJvamVjdHNcXGZ1bGxfc3RhY2tcXG1vdG9iYXJcXG1vdG9iYXJfYWRtaW4vc3JjXFxhcHBcXHBhZ2VzXFxwcm9kdWN0c1xcZWRpdC1wcm9kdWN0XFxlZGl0LXByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0VBQ0EseUJDaUJ3QjtBQ2xCMUI7O0FGSUE7RUFDRSxtQkFBQTtFQUNBLHlCQ2V3QjtFRGR4Qix5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtFQUNBLGdCQUFBO0FFREY7O0FGSUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQ2xCTztFRG1CUCxtQkFBQTtFQUNBLHlCQ0x3QjtFRE14QixnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUVERjs7QUZJQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FFREY7O0FGSUE7RUFDRSxnQkFBQTtBRURGOztBRklBO0VBQ0UsV0FBQTtBRURGOztBRkdBO0VBRUcsOEJBQUE7RUFDRCxtQkFBQTtBRURGOztBQ3pDQTtFQUNFLHFCQUFBO0FENENGOztBQzNDRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUQ2Q0o7O0FDMUNBO0VBQ0UsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUQ2Q0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0cy9lZGl0LXByb2R1Y3QvZWRpdC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi9hYnN0cmFjdHMvdmFyaWFibGVzJztcblxuOmhvc3Qge1xuICBkaXNwbGF5ICAgICAgICAgOiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tYmFja2dyb3VuZC1jb2xvcjtcbn1cblxuLmNvbnRlbnQge1xuICBib3JkZXItcmFkaXVzICAgOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FyZC1ib2R5O1xuICBib3JkZXIgICAgICAgICAgOiAxcHggc29saWQgJGJvcmRlcjtcbiAgcGFkZGluZy1ib3R0b20gIDogMTVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tICAgOiAyMHB4O1xuICBib3gtc2hhZG93ICAgICAgOiAwIDBweCA4cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIG1hcmdpbi10b3AgICAgICA6IDIwcHhcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplICAgICAgIDogMjJweDtcbiAgZm9udC13ZWlnaHQgICAgIDogNzAwO1xuICBjb2xvciAgICAgICAgICAgOiAkY29sb3IxO1xuICBtYXJnaW4tYm90dG9tICAgOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FyZC1oZWFkZXItYmc7XG4gIGJvcmRlci1ib3R0b20gICA6IDFweCBzb2xpZCAkYm9yZGVyO1xuICBwYWRkaW5nICAgICAgICAgOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbiAgIDogMCAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi50ZXh0YXJlYS1tYXhXaWR0aCB7XG4gIG1heC13aWR0aDogODEuNyU7XG59XG5cbjpob3N0IDo6bmctZGVlcCBhcHAtbmcydGVsIC5pdGkuaXRpLS1hbGxvdy1kcm9wZG93biB7XG4gIHdpZHRoOiAxMDAlXG59XG4uYWN0aXZlTW9kYWxJY29ue1xuICAvLyBiYWNrZ3JvdW5kOiAjNDZiOGRhICFpbXBvcnRhbnQ7XG4gICBiYWNrZ3JvdW5kOiAjMWYxYTVmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbn0iLCIvL2NvbG9yc1xuJHdoaXRlIDogd2hpdGU7XG4kY29sb3IxOiAjMGM0MjVkO1xuJGNvbG9yMjogI2E4ZDJiZTtcbiRjb2xvcjM6ICM0ODk5YzI7XG4kY29sb3I0OiAjMWY3N2EzO1xuXG4kY29sb3I1IDogI2Y5YWU0ZTtcbiRjb2xvcjU1OiAjZDY4NTIyO1xuXG4kYm9yZGVyICAgICAgICAgICAgICAgICA6ICNmMWYxZjE7XG4kZGF0YS10YWJsZS1ib3JkZXIgICAgICA6ICNlOWU5ZTk7XG4kZ3JheTIgICAgICAgICAgICAgICAgICA6ICNlMmUyZTI7XG4kZ3JheTMgICAgICAgICAgICAgICAgICA6ICM3NTc1NzU7XG4kdHJhc2gtY29sb3IgICAgICAgICAgICA6ICNDOTMwMkM7XG4kZm9udC1jb2xvciAgICAgICAgICAgICA6ICM1NTU7XG4kYWN0aXZlLWJyZWFkY3J1bWItY29sb3I6ICMzNDM0MzQ7XG4kY2FyZC1oZWFkZXItYmcgICAgICAgICA6ICNmOWY5Zjk7IC8vI2VmZWZlZjsgLy8jZjlmOWY5O1xuJHBsYWNlaG9sZGVyLWNvbG9yICAgICAgOiAjYjNiM2IzO1xuXG4vLyBiYWNrZ3JvdW5kIGNvbG9yXG4kbWFpbi1iYWNrZ3JvdW5kLWNvbG9yICA6ICNlZmVkZjI7XG4kaGVhZGVyLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuJGRhdGEtdGFibGUtYm94ICAgICAgICAgOiAjZmZmZGZlOyAvLyNmN2Y3Zjc7XG4kY2FyZC1ib2R5ICAgICAgICAgICAgICA6ICNmZmZkZmU7XG5cbi8vIERhc2hib2FyZFxuJG1hcmdpbkJldHdlZW5DYXJkczogMjJweDtcbiRheGlzRm9udFNpemUgICAgICA6IDEycHg7XG4kc21hbGxBeGlzRm9udFNpemUgOiAxMHB4O1xuXG4vL2hlYWRlclxuJHByb2ZpbGUtbWVudS1jb2xvcjogI2Y5ZjlmOTtcbiRiaWxsLWNvbG9yICAgICAgICA6ICM5YmEyYWE7XG4kYmlsbC1ob3Zlci1jb2xvciAgOiAjNzM4MThmO1xuXG4vL0xheW91dCBWYXJpYWJsZXNcblxuJGhlYWRlci1oZWlnaHQgOiA1NXB4O1xuJHNpZGVNZW51LXdpZHRoOiAyMDBweDtcblxuXG4vL2xvZ2luXG4kbG95YWxpdHktY29sb3IgIDogIzg4N2Y3ZjtcbiRsb2dpbi1ib3gtY29sb3IgOiAjZjVmMmYwO1xuXG4vL21haWxcbiRtYWlsLWNoZWNrYm94LWNvbG9yOiAjMDA3M2FhO1xuJHVzZXItbWFpbC1jb2xvciAgICA6ICMyOTJiMmM7XG5cbi8vcHJvZmlsZVxuJGFjdGl2ZS1jb2xvciAgICAgOiAjZjRmNmY5O1xuJGljb24tY29sb3IgICAgICAgOiAjOTU5Y2I2O1xuJGxhYmVsLXRpdGxlLWNvbG9yOiAjNTA1NjZhO1xuXG4vL2VtYWlsIHRlbXBsYXRlc1xuJGVtYWlsLWJsdWUtY29sb3I6ICMwZjQxNWQ7XG4kZW1haWwtZ3JheS1jb2xvcjogIzVmNjA2MDtcbiRlbWFpbC1zeWFuLWNvbG9yOiAjYTJkOWMyO1xuJGVtYWlsLW9yYWduZS1jb2xvcjogI2ZmYWM1MjtcblxuLy9mb250c1xuJGZvbnQyOCAgICAgICAgICAgOiAyOHB4O1xuJGZvbnQyNCAgICAgICAgICAgOiAyNHB4O1xuJGZvbnQxOCAgICAgICAgICAgOiAxOHB4O1xuJGZvbnQxNiAgICAgICAgICAgOiAxNnB4O1xuJGZvbnQxNCAgICAgICAgICAgOiAxNHB4O1xuJGZvbnQxMiAgICAgICAgICAgOiAxMnB4O1xuJGZvbnQxMCAgICAgICAgICAgOiAxMHB4O1xuJGZvbnQtd2VpZ2h0LTYwMCAgOiA2MDA7XG4kZm9udC13ZWlnaHQtNTAwICA6IDUwMDtcbiRwbGFjZWhvbGRlci1mb250IDogMTJweDtcbiRsYWJlbC1mb250ICAgICAgIDogMTRweDtcbiRjYXJkLWhlYWRlci1mb250IDogMTZweDtcblxuJGRhdGEtdGFibGUtaGVhZGVyLTEzNjYgOiAxNHB4O1xuJGRhdGEtdGFibGUtaGVhZGVyLTE5MjAgOiAxNnB4O1xuJGRhdGEtdGFibGUtYm9keS0xMzY2IDogMTJweDtcbiRkYXRhLXRhYmxlLWJvZHktMTkyMDogMTZweDtcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVkZjI7XG59XG5cbi5jb250ZW50IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmRmZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgcGFkZGluZy1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm94LXNoYWRvdzogMCAwcHggOHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMGM0MjVkO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5idXR0b24ge1xuICBtYXJnaW46IDAgMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4udGV4dGFyZWEtbWF4V2lkdGgge1xuICBtYXgtd2lkdGg6IDgxLjclO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgYXBwLW5nMnRlbCAuaXRpLml0aS0tYWxsb3ctZHJvcGRvd24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFjdGl2ZU1vZGFsSWNvbiB7XG4gIGJhY2tncm91bmQ6ICMxZjFhNWYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmFjdGlvbnMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uYWN0aW9ucyBpIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiA0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3Njc3MvYWRkLWVkaXQuY29tcG9uZW50LnNjc3NcIjtcclxuLmFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcbi5mb3JtLWdyb3VwIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-product',
                templateUrl: './edit-product.component.html',
                styleUrls: ['./edit-product.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] }, { type: _categories_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"] }, { type: _services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/products/products-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/products/products-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function() { return ProductsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.component */ "./src/app/pages/products/products.component.ts");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-product/add-product.component */ "./src/app/pages/products/add-product/add-product.component.ts");
/* harmony import */ var _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-product/edit-product.component */ "./src/app/pages/products/edit-product/edit-product.component.ts");







const routes = [
    { path: '', component: _products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"] },
    { path: 'add', component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_3__["AddProductComponent"] },
    { path: 'edit/:id', component: _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_4__["EditProductComponent"] },
];
class ProductsRoutingModule {
}
ProductsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductsRoutingModule });
ProductsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProductsRoutingModule_Factory(t) { return new (t || ProductsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/products/products.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/products/products.component.ts ***!
  \******************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular7_data_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular7-data-table */ "./node_modules/angular7-data-table/__ivy_ngcc__/esm2015/angular7-data-table.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products.service */ "./src/app/pages/products/products.service.ts");
/* harmony import */ var _stores_stores_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stores/stores.service */ "./src/app/pages/stores/stores.service.ts");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/__ivy_ngcc__/fesm2015/ngx-export-as.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
/* harmony import */ var _reusable_components_form_fields_input_radio_input_radio_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../reusable-components/form-fields/input-radio/input-radio.component */ "./src/app/reusable-components/form-fields/input-radio/input-radio.component.ts");
/* harmony import */ var _reusable_components_form_fields_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../reusable-components/form-fields/input-text/input-text.component */ "./src/app/reusable-components/form-fields/input-text/input-text.component.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _reusable_components_form_fields_select_select_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../reusable-components/form-fields/select/select.component */ "./src/app/reusable-components/form-fields/select/select.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





















function ProductsComponent_ng_container_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function ProductsComponent_ng_template_64_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 51);
} if (rf & 2) {
    const item_r40 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r40.photos ? item_r40.photos[0] : "../../../../../assets/placeholder.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ProductsComponent_ng_template_64_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r41 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r41.profitPercentage && item_r41.profitPercentage !== 0 ? item_r41.profitPercentage + "%" : item_r41.profitValue && item_r41.profitValue !== 0 ? item_r41.profitValue + " EGP" : 0);
} }
function ProductsComponent_ng_template_64_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r42 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r42.discountPercentage && item_r42.discountPercentage !== 0 ? item_r42.discountPercentage + "%" : item_r42.discountValue && item_r42.discountValue !== 0 ? item_r42.discountValue + " EGP" : 0);
} }
function ProductsComponent_ng_template_64_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r43 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r43.properties[0] == null ? null : item_r43.properties[0].price);
} }
function ProductsComponent_ng_template_64_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r44 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r44.creator ? item_r44.creator.name : "-");
} }
function ProductsComponent_ng_template_64_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r45 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r45.store ? item_r45.store.name : "-");
} }
function ProductsComponent_ng_template_64_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r46 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r46.category.en);
} }
function ProductsComponent_ng_template_64_ng_template_25_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 3, "sold")));
} }
function ProductsComponent_ng_template_64_ng_template_25_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 3, "active")));
} }
function ProductsComponent_ng_template_64_ng_template_25_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 3, "inactive")));
} }
function ProductsComponent_ng_template_64_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductsComponent_ng_template_64_ng_template_25_ng_container_1_Template, 5, 5, "ng-container", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProductsComponent_ng_template_64_ng_template_25_ng_container_2_Template, 5, 5, "ng-container", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProductsComponent_ng_template_64_ng_template_25_ng_container_3_Template, 5, 5, "ng-container", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r47 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r47.sold);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r47.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r47.active);
} }
const _c0 = function (a1) { return ["./edit/", a1]; };
function ProductsComponent_ng_template_64_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_ng_template_64_ng_template_28_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r52.savePagination(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "colorize");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_ng_template_64_ng_template_28_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r53); const item_r51 = ctx.item; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](71); item_r51.store ? null : ctx_r54.openModal(_r8, item_r51._id); return ctx_r54.getStoresList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_ng_template_64_ng_template_28_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r53); const item_r51 = ctx.item; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](73); return ctx_r55.openModal(_r10, item_r51._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_ng_template_64_ng_template_28_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r53); const item_r51 = ctx.item; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](77); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](75); return item_r51.active ? ctx_r56.openModal(_r14, item_r51._id) : ctx_r56.openModal(_r12, item_r51._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_ng_template_64_ng_template_28_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r53); const item_r51 = ctx.item; const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](81); const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](83); return item_r51.sold ? ctx_r57.openModal(_r18, item_r51._id) : ctx_r57.openModal(_r20, item_r51._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_ng_template_64_ng_template_28_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r53); const item_r51 = ctx.item; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](69); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](67); return item_r51.discount ? ctx_r58.openModal(_r6, item_r51._id) : ctx_r58.openModal(_r4, item_r51._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "qr_code_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_ng_template_64_ng_template_28_Template_a_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r53); const item_r51 = ctx.item; const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](79); return ctx_r59.openModal(_r16, item_r51._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r51 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](16, _c0, item_r51._id))("tooltip", "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", item_r51.store ? "" : "lock")("tooltip", item_r51.store ? "" : "add to store");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r51.store ? "" : "store");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "lock")("tooltip", "Copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", item_r51.active ? "trash" : "lock")("tooltip", item_r51.active ? "deactivate" : "Activate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r51.active ? "block" : "check_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", item_r51.sold ? "lock" : "trash")("tooltip", item_r51.sold ? "Available" : "Sold");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r51.sold ? "done_outline" : "done_all");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](item_r51.discount ? "trash" : "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tooltip", item_r51.discount ? "Delete discount" : "Add discount");
} }
function ProductsComponent_ng_template_64_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "data-table", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reload", function ProductsComponent_ng_template_64_Template_data_table_reload_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r60.reloadItems($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "data-table-column", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProductsComponent_ng_template_64_ng_template_3_Template, 1, 1, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "data-table-column", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "data-table-column", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProductsComponent_ng_template_64_ng_template_7_Template, 2, 1, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "data-table-column", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ProductsComponent_ng_template_64_ng_template_10_Template, 2, 1, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "data-table-column", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ProductsComponent_ng_template_64_ng_template_13_Template, 2, 1, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "data-table-column", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ProductsComponent_ng_template_64_ng_template_16_Template, 2, 1, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "data-table-column", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ProductsComponent_ng_template_64_ng_template_19_Template, 2, 1, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "data-table-column", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ProductsComponent_ng_template_64_ng_template_22_Template, 2, 1, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "data-table-column", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ProductsComponent_ng_template_64_ng_template_25_Template, 4, 3, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "data-table-column", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ProductsComponent_ng_template_64_ng_template_28_Template, 21, 18, "ng-template", 50, 43, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx_r3.tableElements)("itemCount", ctx_r3.itemCount)("pageLimits", ctx_r3.limits)("limit", ctx_r3.limit)("pagination", true)("noDataMessage", "No data to show");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 50)("property", "image")("resizable", true)("header", ctx_r3.arabic ? "\u0635\u0648\u0631\u0629" : "Img");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("property", "name")("header", ctx_r3.arabic ? "\u0627\u0644\u0627\u0633\u0645" : "Name")("sortable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("property", "profit")("header", ctx_r3.arabic ? "\u0627\u0644\u0631\u0628\u062D" : "Profit")("sortable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("property", "discount")("header", ctx_r3.arabic ? "\u0627\u0644\u062E\u0635\u0645" : "Discount")("sortable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("header", ctx_r3.arabic ? "\u0627\u0644\u0633\u0639\u0631" : "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("property", "creator")("header", ctx_r3.arabic ? "\u0628\u0648\u0627\u0633\u0637\u0629" : "Creator")("sortable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("property", "store")("sortable", true)("header", ctx_r3.arabic ? "\u0627\u0644\u0645\u062A\u062C\u0631" : "Store");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("header", ctx_r3.arabic ? "\u0627\u0644\u0642\u0633\u0645" : "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("property", "active")("width", 68)("header", ctx_r3.arabic ? "\u0627\u0644\u062D\u0627\u0644\u0629" : "Status")("sortable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 180)("header", ctx_r3.arabic ? "" : "Actions");
} }
function ProductsComponent_ng_template_66_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-input-text", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ProductsComponent_ng_template_66_ng_container_12_Template_app_input_text_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r66); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r65.discountForm.get("discountPercentage").patchValue(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", "Discount value")("fieldId", "discountValue")("placeholder", "Discount on this category")("control", ctx_r62.discountForm.get("discountValue"))("fieldClass", "col-19_xlg-18_lg-17_md-24");
} }
function ProductsComponent_ng_template_66_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-input-text", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ProductsComponent_ng_template_66_ng_container_13_Template_app_input_text_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r68); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r67.discountForm.get("discountValue").patchValue(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", "Discount percent")("fieldId", "discountPercentage")("placeholder", "Discount on this category")("control", ctx_r63.discountForm.get("discountPercentage"))("fieldClass", "col-19_xlg-18_lg-17_md-24");
} }
const _c1 = function () { return { isAnimated: true, adaptivePosition: true }; };
function ProductsComponent_ng_template_66_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("bsValueChange", function ProductsComponent_ng_template_66_ng_container_28_Template_input_bsValueChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r70); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r69.datePickerValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProductsComponent_ng_template_66_ng_container_28_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r70); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r71.time = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 7, "validTill")), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("bsValue", ctx_r64.datePickerValue)("minDate", ctx_r64.minDate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r64.time);
} }
const _c2 = function () { return ["percent", "value"]; };
function ProductsComponent_ng_template_66_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Do you want to add this product to a store? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_ng_template_66_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r73); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r72.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-input-radio", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ProductsComponent_ng_template_66_ng_container_12_Template, 2, 5, "ng-container", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ProductsComponent_ng_template_66_ng_container_13_Template, 2, 5, "ng-container", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProductsComponent_ng_template_66_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r73); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r74.forPeriod = $event; })("change", function ProductsComponent_ng_template_66_Template_input_change_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r73); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r75.changePeriod($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "svg", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "path", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ProductsComponent_ng_template_66_ng_container_28_Template, 10, 10, "ng-container", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_ng_template_66_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r73); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r76.addDiscount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](33, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_ng_template_66_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r73); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r77.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", "Discount type")("fieldId", "discountType")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](24, _c2))("control", ctx_r5.discountForm.get("discountType"))("fieldClass", "col-19_xlg-18_lg-17_md-24");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.discountForm.get("discountType").value === "value");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.discountForm.get("discountType").value === "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 14, "forPeriod")));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r5.forPeriod);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.forPeriod);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 16, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](33, 18, "Submit")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 20, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](37, 22, "Cancel")), " ");
} }
function ProductsComponent_ng_template_68_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Do you want to Delete discount from This product ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_ng_template_68_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r78.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_ng_template_68_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r80.deleteDiscount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_ng_template_68_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r81.modalRef.hide(); });
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
function ProductsComponent_ng_template_70_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Do you want to add this product to a store? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_ng_template_70_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r83); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r82.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "app-select", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("itemselected", function ProductsComponent_ng_template_70_Template_app_select_itemselected_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r83); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r84.selectStore($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_ng_template_70_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r83); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r85.addProductToStore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_ng_template_70_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r83); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r86.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", "Store")("fieldId", "store")("ItemsList", ctx_r9.selectStoresList)("placeholder", "Choose store")("fieldClass", "col-18_md-24")("required", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 10, "Submit")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 14, "Cancel")), " ");
} }
function ProductsComponent_ng_template_72_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Do you want to copy This Element ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_ng_template_72_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r88); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r87.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_ng_template_72_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r88); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r89.copyElement(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_ng_template_72_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r88); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r90.modalRef.hide(); });
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
function ProductsComponent_ng_template_74_Template(rf, ctx) { if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Do you want to activate This Element ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_ng_template_74_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r92); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r91.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_ng_template_74_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r92); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r93.activateElement(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_ng_template_74_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r92); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r94.modalRef.hide(); });
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
function ProductsComponent_ng_template_76_Template(rf, ctx) { if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Do you want to deactivate This Element ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_ng_template_76_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r96); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r95.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_ng_template_76_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r96); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r97.deactivateElement(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_ng_template_76_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r96); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r98.modalRef.hide(); });
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
function ProductsComponent_ng_template_78_Template(rf, ctx) { if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Do you want to Delete This Element ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_ng_template_78_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r100); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r99.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_ng_template_78_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r100); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r101.deleteElement(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_ng_template_78_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r100); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r102.modalRef.hide(); });
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
function ProductsComponent_ng_template_80_Template(rf, ctx) { if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Do you want to change this element status to be available? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_ng_template_80_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r104); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r103.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_ng_template_80_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r104); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r105.availableElement(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_ng_template_80_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r104); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r106.modalRef.hide(); });
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
function ProductsComponent_ng_template_82_Template(rf, ctx) { if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Do you want to change this element status to be sold out? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_ng_template_82_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r108); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r107.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_ng_template_82_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r108); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r109.soldElement(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_ng_template_82_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r108); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r110.modalRef.hide(); });
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
const _c3 = function () { return ["./add"]; };
class ProductsComponent {
    constructor(productsService, storesService, languageService, modalService, toastr, spinner, fb, router, elRef, exportAsService) {
        this.productsService = productsService;
        this.storesService = storesService;
        this.languageService = languageService;
        this.modalService = modalService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.fb = fb;
        this.router = router;
        this.elRef = elRef;
        this.exportAsService = exportAsService;
        this.items = [];
        this.itemCount = 0;
        this.limit = 20;
        this.limits = [20, 25, 50];
        this.offset = 1;
        this.tableElements = [];
        this.discountForm = this.fb.group({
            discountType: [''],
            discountValue: [0],
            discountPercentage: [0],
            validTill: [],
        });
        this.minDate = new Date();
        this.datePickerValue = new Date();
        this.forPeriod = false;
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'my-table',
            options: {
                jsPDF: {
                    orientation: 'landscape',
                },
            },
        };
        this.setNow();
        this.langSub = this.languageService.currentLanguage.subscribe((lang) => {
            this.currentLang = lang;
            if (this.currentLang && this.currentLang === 'ar') {
                this.arabic = true;
            }
            else {
                this.arabic = false;
            }
        });
        this.lastPageSub = this.productsService.lastParsedPage.subscribe((data) => {
            if (data) {
                if (!this.newPagination && data) {
                    this.newPagination = data;
                }
            }
        });
    }
    ngOnDestroy() {
        this.langSub.unsubscribe();
        this.lastPageSub.unsubscribe();
    }
    ngOnInit() {
        this.spinner.show();
        this.productsService.getAll();
        this.productsService.products.subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (data) {
                this.items = data;
                data.sort((a, b) => (a.active === b.active ? 0 : !a.active ? -1 : 1));
                this.itemResource = new angular7_data_table__WEBPACK_IMPORTED_MODULE_2__["DataTableResource"](data);
                this.itemCount = yield this.itemResource.count();
                this.reloadItems({
                    offset: 0,
                    limit: this.limit,
                });
                if (this.newPagination) {
                    let nextBtn = this.elRef.nativeElement.querySelector('button.btn.btn-default.pagination-nextpage');
                    let previousBtn = this.elRef.nativeElement.querySelector('button.btn.btn-default.pagination-prevpage');
                    let clicks = this.newPagination.offset / 20;
                    for (let index = 0; index < clicks; index++) {
                        nextBtn.click();
                    }
                    return previousBtn.click();
                }
            }
        }));
        this.spinner.hide();
    }
    savePagination() {
        this.productsService.pagination(this.lastPagination);
    }
    reloadItems(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.lastPagination = event;
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
                    var _a, _b, _c;
                    return item.name.toLowerCase().includes(FilterRecord) || ((_a = item.category) === null || _a === void 0 ? void 0 : _a.en.toLowerCase().includes(FilterRecord)) || ((_b = item.creator) === null || _b === void 0 ? void 0 : _b.name.toLowerCase().includes(FilterRecord)) || ((_c = item.store) === null || _c === void 0 ? void 0 : _c.name.toLowerCase().includes(FilterRecord));
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
    getStoresList() {
        this.spinner.show();
        this.storesService.getAll();
        this.storesService.stores.subscribe((data) => {
            if (data) {
                this.selectStoresList = data.map((x) => {
                    return {
                        _id: x['_id'],
                        nameEn: `${x['name']}`,
                        nameAr: ``,
                    };
                });
            }
        });
        this.spinner.hide();
    }
    selectStore(event) {
        if (event) {
            this.selectedStoreId = event._id;
        }
    }
    // End select dropdown
    addProductToStore() {
        this.spinner.show();
        this.modalRef.hide();
        this.productsService
            .addProductToStore(this.itemId, this.selectedStoreId)
            .subscribe((res) => {
            this.toastr.info(res['message'], 'Info');
            this.items = [];
            this.productsService.getAll();
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error.message, 'Error');
            // this.error.next(error.error.message);
        });
        this.spinner.hide();
    }
    openModal(template, id) {
        this.itemId = id;
        this.modalRef = this.modalService.show(template);
    }
    setNow() {
        let now = new Date();
        let hours = ('0' + now.getHours()).slice(-2);
        let minutes = ('0' + now.getMinutes()).slice(-2);
        let str = hours + ':' + minutes;
        this.time = str;
    }
    changePeriod(event) {
        if (!event.target.checked) {
            this.discountForm.get('validTill').patchValue(undefined);
        }
    }
    copyElement() {
        this.spinner.show();
        this.modalRef.hide();
        this.productsService.copyOne(this.itemId).subscribe((res) => {
            console.log(res);
            this.toastr.info(res['message'], 'Info');
            this.items = [];
            this.productsService.getAll();
            this.router.navigate([`./products/edit/${res['data']._id}`]);
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error.message, 'Error');
            // this.error.next(error.error.message);
        });
        this.spinner.hide();
    }
    addDiscount() {
        this.spinner.show();
        this.modalRef.hide();
        if (this.forPeriod) {
            var validTill = new Date(this.datePickerValue.getFullYear(), this.datePickerValue.getMonth(), this.datePickerValue.getDate(), parseInt(this.time.split(':')[0]), parseInt(this.time.split(':')[1]), 0);
            this.discountForm.get('validTill').patchValue(validTill);
        }
        this.productsService
            .addDiscount(this.discountForm.value, this.itemId)
            .subscribe((res) => {
            console.log(res);
            this.toastr.info(res['message'], 'Info');
            this.items = [];
            this.discountForm.reset();
            this.productsService.getAll();
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error.message, 'Error');
            // this.error.next(error.error.message);
        });
        this.spinner.hide();
    }
    deleteDiscount() {
        this.spinner.show();
        this.modalRef.hide();
        this.productsService.deleteDiscount(this.itemId).subscribe((res) => {
            console.log(res);
            this.toastr.info(res['message'], 'Info');
            this.items = [];
            this.productsService.getAll();
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error.message, 'Error');
            // this.error.next(error.error.message);
        });
        this.spinner.hide();
    }
    deleteElement() {
        this.spinner.show();
        this.modalRef.hide();
        this.productsService.deleteOne(this.itemId).subscribe((res) => {
            console.log(res);
            this.toastr.info(res['message'], 'Info');
            this.productsService.getAll();
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error.message, 'Error');
            // this.error.next(error.error.message);
        });
        this.spinner.hide();
    }
    activateElement() {
        this.spinner.show();
        this.modalRef.hide();
        this.productsService.activateOne(this.itemId).subscribe((res) => {
            console.log(res);
            this.toastr.info(res['message'], 'Info');
            this.items = [];
            this.productsService.getAll();
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error.message, 'Error');
            // this.error.next(error.error.message);
        });
        this.spinner.hide();
    }
    deactivateElement() {
        this.spinner.show();
        this.modalRef.hide();
        this.productsService.deactivateOne(this.itemId).subscribe((res) => {
            console.log(res);
            this.toastr.info(res['message'], 'Info');
            this.items = [];
            this.productsService.getAll();
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error.message, 'Error');
            // this.error.next(error.error.message);
        });
        this.spinner.hide();
    }
    soldElement() {
        this.spinner.show();
        this.modalRef.hide();
        this.productsService.soldOne(this.itemId).subscribe((res) => {
            console.log(res);
            this.toastr.info(res['message'], 'Info');
            this.items = [];
            this.productsService.getAll();
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error.message, 'Error');
            // this.error.next(error.error.message);
        });
        this.spinner.hide();
    }
    availableElement() {
        this.spinner.show();
        this.modalRef.hide();
        this.productsService.availableOne(this.itemId).subscribe((res) => {
            console.log(res);
            this.toastr.info(res['message'], 'Info');
            this.items = [];
            this.productsService.getAll();
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error.message, 'Error');
            // this.error.next(error.error.message);
        });
        this.spinner.hide();
    }
    exportAs(type, opt) {
        this.exportAsConfig.type = type;
        if (opt) {
            this.exportAsConfig.options.jsPDF.orientation = opt;
        }
        this.exportAsService.save(this.exportAsConfig, 'Products').subscribe(() => {
            // save started
        });
        this.exportAsService.get(this.exportAsConfig).subscribe((content) => {
            console.log(content);
        });
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_stores_stores_service__WEBPACK_IMPORTED_MODULE_4__["StoresService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_export_as__WEBPACK_IMPORTED_MODULE_11__["ExportAsService"])); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 84, vars: 44, consts: [[1, "grid-center-noGutter"], [1, "col-20_sm-22_xs-23", 2, "margin-top", "20px"], [1, "card"], [1, "card-header", "grid-noGutter"], [1, "card-body", "grid-center-noGutter"], [1, "col-24", "grid-spaceBetween-noGutter"], [1, "card", "xs-hidden"], [1, "card-body"], [2, "display", "inline-block", "background-color", "#4899c2", "padding", "15px", "color", "white"], [1, "material-icons"], [2, "display", "inline-block", "margin", "0 10px"], [2, "color", "#20a8d8", "font-size", "18px", "font-weight", "600"], [2, "color", "#73818f", "font-size", "80%", "font-weight", "700"], [1, "col-top", "xs-24", "grid-noGutter", 2, "margin-top", "15px"], [1, "col-3_xlg-4_lg-6_sm-10", "grid-column-noGutter"], [1, "btn", "color1", "round", "addbtn", 3, "routerLink"], [1, "col-24", "grid-center-noGutter", 2, "margin-top", "20px"], [1, "col-24", "grid-noGutter"], [1, "col-12_xs-24", "grid-left-noGutter", 2, "margin-left", "10px"], ["for", "", 1, "col-24", "grid-noGutter", 2, "font-weight", "bold"], [1, "col-24", "grid"], ["type", "text", "placeholder", "e.g. Name, Creator, Store", 1, "form-control", "col"], ["FilterRecord", ""], [1, "btn", "col-4", "color1", "round", "search", 3, "click"], [1, "md-hidden"], [1, "btn", "col-4", "color2", "round", "search", 3, "click"], [1, "grid-right-noGutter", 2, "margin-top", "20px"], [1, "btn", "color5", "round", 3, "click"], [1, "grid-center-noGutter", 2, "margin-top", "20px"], [4, "ngTemplateOutlet"], ["table", ""], ["id", "template2"], ["templateAddDiscount", ""], ["templateDeleteDiscount", ""], ["templateAddToStore", ""], ["templateCopy", ""], ["templateActivate", ""], ["templateDeactivate", ""], ["templateDelete", ""], ["templateAvailable", ""], ["templateSold", ""], ["id", "my-table", "title", "List of Products", 3, "items", "itemCount", "pageLimits", "limit", "pagination", "noDataMessage", "reload"], [3, "width", "property", "resizable", "header"], ["dataTableCell", ""], [3, "property", "header", "sortable"], [3, "header"], [3, "property", "sortable", "header"], ["property", "category.en", 3, "header"], [3, "property", "width", "header", "sortable"], [3, "width", "header"], ["class", "grid-center"], ["width", "30px", "height", "30px", "alt", "", 3, "src"], [4, "ngIf"], [1, "badge", "blocked"], [1, "badge", "active"], [1, "badge", "deleted"], ["placement", "bottom", 1, "pencil", 3, "routerLink", "tooltip", "click"], ["placement", "bottom", "triggers", "mouseenter:mouseleave", 3, "ngClass", "tooltip", "click"], ["placement", "bottom", "triggers", "mouseenter:mouseleave", 3, "tooltip", "click"], ["tooltip", "Delete", "placement", "bottom", "triggers", "mouseenter:mouseleave", 1, "trash", 3, "click"], [1, "modal-header"], [2, "font-weight", "bold", "justify-content", "center"], [1, "fa", "fa-user", "fa-lg", "mt-4"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "col-24"], [1, "col-24", 3, "label", "fieldId", "items", "control", "fieldClass"], [1, "col-11_sm-24", "form-group", "grid-center-middle-noGutter"], [1, "col_sm-24", "grid_sm-noGutter", "field-label"], ["for", "period"], [1, "col-11_sm-24", "grid"], ["tooltip", "for specific time", 1, "toggleButton"], ["type", "checkbox", "id", "period", 3, "ngModel", "ngModelChange", "change"], ["viewBox", "0 0 44 44"], ["d", "M14,24 L21,31 L39.7428882,11.5937758 C35.2809627,6.53125861 30.0333333,4 24,4 C12.95,4 4,12.95 4,24 C4,35.05 12.95,44 24,44 C35.05,44 44,35.05 44,24 C44,19.3 42.5809627,15.1645919 39.7428882,11.5937758", "transform", "translate(-2.000000, -2.000000)"], [1, "grid-right"], ["type", "button", 1, "btn", "col-5_sm-5_xs-6", "color1", "round", 2, "margin-right", "10px", 3, "click"], ["type", "button", 1, "btn", "col-5_sm-5_xs-6", "color2", "round", 3, "click"], ["type", "number", 1, "col-24", 3, "label", "fieldId", "placeholder", "control", "fieldClass", "change"], [1, "col-24", "grid-middle-spaceBetween-noGutter"], [1, "col-19_xlg-18_lg-17_md-24", "grid-noGutter"], ["type", "text", "bsDatepicker", "", "autocomplete", "off", "placeholder", "YYYY-MM-DD", 1, "form-control", "col", 3, "bsValue", "minDate", "bsConfig", "bsValueChange"], ["type", "time", 1, "form-control", "col", 3, "ngModel", "ngModelChange"], [2, "height", "20px", "width", "100%"], [2, "color", "red", "font-weight", "bold", "justify-content", "center"], [1, "fa", "fa-trash", "fa-lg", "mt-4"], [1, "col-24", 3, "label", "fieldId", "ItemsList", "placeholder", "fieldClass", "required", "itemselected"], [2, "color", "#0c425d", "font-weight", "bold", "justify-content", "center"], [1, "fa", "fa-lock", "fa-lg", "mt-4"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_Template_a_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r111); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](39); return ctx.FilterRecords(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](44, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_Template_a_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r111); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](39); ctx.FilterRecords(""); return _r0.value = ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](52, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_Template_button_click_57_listener() { return ctx.exportAs("xlsx"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](60, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, ProductsComponent_ng_container_63_Template, 1, 0, "ng-container", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, ProductsComponent_ng_template_64_Template, 30, 33, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, ProductsComponent_ng_template_66_Template, 38, 25, "ng-template", 31, 32, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, ProductsComponent_ng_template_68_Template, 17, 10, "ng-template", 31, 33, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, ProductsComponent_ng_template_70_Template, 19, 16, "ng-template", 31, 34, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, ProductsComponent_ng_template_72_Template, 17, 10, "ng-template", 31, 35, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, ProductsComponent_ng_template_74_Template, 17, 10, "ng-template", 31, 36, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, ProductsComponent_ng_template_76_Template, 17, 10, "ng-template", 31, 37, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](78, ProductsComponent_ng_template_78_Template, 17, 10, "ng-template", 31, 38, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](80, ProductsComponent_ng_template_80_Template, 17, 10, "ng-template", 31, 39, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](82, ProductsComponent_ng_template_82_Template, 17, 10, "ng-template", 31, 40, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 13, "Products")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.items.length, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 17, "Products")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](43, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 19, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 21, "add")), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 23, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 25, "Product")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](35, 27, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 29, "Search for")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](43, 31, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](44, 33, "search")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](51, 35, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](52, 37, "Clear")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](59, 39, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](60, 41, "Export")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r2);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgTemplateOutlet"], angular7_data_table__WEBPACK_IMPORTED_MODULE_2__["DataTable"], angular7_data_table__WEBPACK_IMPORTED_MODULE_2__["DataTableColumn"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_13__["TooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _reusable_components_form_fields_input_radio_input_radio_component__WEBPACK_IMPORTED_MODULE_14__["InputRadioComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _reusable_components_form_fields_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_15__["InputTextComponent"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__["BsDatepickerInputDirective"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__["BsDatepickerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _reusable_components_form_fields_select_select_component__WEBPACK_IMPORTED_MODULE_17__["SelectComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["LowerCasePipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  background-color: #efedf2;\n}\n\n[_nghost-%COMP%]     {\n  border-radius: 10px;\n}\n\n[_nghost-%COMP%]     .data-table-header {\n  padding: 8px 8px;\n  margin-bottom: 0 !important;\n  background-color: #f9f9f9;\n  border: 1px solid #f1f1f1;\n  border-bottom: none;\n  color: #555;\n  border-radius: 10px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n[_nghost-%COMP%]     .data-table-header button {\n  padding-top: 0;\n}\n\n[_nghost-%COMP%]     .data-table-box {\n  border-radius: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  padding: 30px;\n  border: 1px solid #e9e9e9;\n  border-top: 0;\n  border-bottom: 0;\n}\n\n[_nghost-%COMP%]     .data-table {\n  box-shadow: none;\n  border: 1px solid #e9e9e9;\n  color: #555;\n}\n\n[_nghost-%COMP%]     .data-table thead {\n  border-bottom: 1px solid #999;\n  font-size: 16px;\n}\n\n@media (max-width: 1366px) {\n  [_nghost-%COMP%]     .data-table thead {\n    font-size: 14px;\n  }\n}\n\n[_nghost-%COMP%]     .data-table tbody {\n  font-size: 16px;\n}\n\n@media (max-width: 1366px) {\n  [_nghost-%COMP%]     .data-table tbody {\n    font-size: 12px;\n  }\n}\n\n[_nghost-%COMP%]     .data-table tbody td, [_nghost-%COMP%]     .data-table tbody th {\n  font-size: 13px;\n  color: #555353;\n  font-weight: initial;\n}\n\n[_nghost-%COMP%]     .data-table tbody td.index-column, [_nghost-%COMP%]     .data-table tbody th.index-column {\n  font-weight: bold;\n}\n\n[_nghost-%COMP%]     .data-table tbody td[data-label=Status] span, [_nghost-%COMP%]     .data-table tbody th[data-label=Status] span {\n  display: block;\n  color: white;\n  margin: 2px 0;\n  border-radius: 10px;\n}\n\n[_nghost-%COMP%]     .data-table tbody td[data-label=Status] span.blocked, [_nghost-%COMP%]     .data-table tbody th[data-label=Status] span.blocked {\n  background-color: grey;\n}\n\n[_nghost-%COMP%]     .data-table tbody td[data-label=Status] span.deleted, [_nghost-%COMP%]     .data-table tbody th[data-label=Status] span.deleted {\n  background-color: #ff6b6b;\n}\n\n[_nghost-%COMP%]     .data-table tbody td[data-label=Status] span.confirmed, [_nghost-%COMP%]     .data-table tbody th[data-label=Status] span.confirmed {\n  background-color: #0c425d;\n}\n\n[_nghost-%COMP%]     .data-table tbody td[data-label=Status] span.active, [_nghost-%COMP%]     .data-table tbody th[data-label=Status] span.active {\n  background-color: #28a745;\n}\n\n[_nghost-%COMP%]     .data-table tbody td[data-label=Status] span.pending, [_nghost-%COMP%]     .data-table tbody th[data-label=Status] span.pending {\n  background-color: #a0a02e;\n}\n\n[_nghost-%COMP%]     .data-table tbody td[data-label=Status] span.done, [_nghost-%COMP%]     .data-table tbody th[data-label=Status] span.done {\n  background-color: #044970;\n}\n\n[_nghost-%COMP%]     .data-table tbody img {\n  border: 1px solid #f1f1f1;\n}\n\n[_nghost-%COMP%]     .data-table-wrapper {\n  border-radius: 10px;\n  background-color: white;\n  box-shadow: 0 0px 8px 1px rgba(0, 0, 0, 0.05);\n  margin-bottom: 20px;\n}\n\n[_nghost-%COMP%]     .h4.title {\n  font-weight: bold;\n  margin: 0;\n  font-size: 16px;\n}\n\n[_nghost-%COMP%]     data-table-pagination > div {\n  justify-content: center !important;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n\n.btn.search[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  padding: 4px 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n@media (max-width: 1024px) {\n  .btn.search[_ngcontent-%COMP%] {\n    padding: 2px 0;\n  }\n}\n\n.btn.search[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  display: none;\n}\n\n@media (max-width: 1024px) {\n  .btn.search[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n}\n\n\n\n[_nghost-%COMP%] {\n  width: 100%;\n}\n\n[_nghost-%COMP%]     caption {\n  display: none;\n}\n\n[_nghost-%COMP%]     thead tr {\n  height: 40px;\n  background-color: #f6f6f6;\n  color: #555658;\n}\n\n[_nghost-%COMP%]     thead tr th {\n  padding: 1rem 0;\n}\n\n[_nghost-%COMP%]     tbody th, [_nghost-%COMP%]     tbody td {\n  padding: 0.35rem;\n}\n\n[_nghost-%COMP%]     .row-odd {\n  background-color: #f9f9f9 !important;\n}\n\n[_nghost-%COMP%]     .data-table-row:hover {\n  background-color: #f9f9f9 !important;\n}\n\n[_nghost-%COMP%]     .data-table-box {\n  background-color: #fffdfe;\n  border: 1px solid #f1f1f1;\n  margin-bottom: 10px;\n}\n\n[_nghost-%COMP%]     .table td, [_nghost-%COMP%]     .table th {\n  border-top: 1px solid #e9e9e9;\n}\n\n[_nghost-%COMP%]     .table thead th, [_nghost-%COMP%]     .data-table > thead > tr > td {\n  border-bottom: none;\n}\n\n[_nghost-%COMP%]     th {\n  vertical-align: middle;\n  text-align: center;\n  font-weight: 600;\n}\n\n[_nghost-%COMP%]     td {\n  vertical-align: middle;\n  text-align: center;\n}\n\n[_nghost-%COMP%]     td.index-column {\n  font-weight: bold;\n  font-size: 13px;\n}\n\n[_nghost-%COMP%]     .pagination-range {\n  display: none;\n}\n\n[_nghost-%COMP%]     .pagination-box {\n  padding-bottom: 12px;\n  zoom: 75%;\n  align-items: center;\n  width: 95%;\n}\n\n[_nghost-%COMP%]     .pagination-box .input-group .form-control {\n  display: flex !important;\n  width: auto !important;\n  height: auto;\n}\n\n[_nghost-%COMP%]     .pagination-box .input-group select {\n  border-radius: 0;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n[_nghost-%COMP%]     .index-column-header span::after {\n  content: \"ID\";\n}\n\na[_ngcontent-%COMP%] {\n  padding: 0 2px;\n  border: 0;\n  transition: all 0.5s;\n  background-color: transparent;\n  cursor: pointer;\n}\n\na[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n\na[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\na.pencil[_ngcontent-%COMP%] {\n  color: #0c425d;\n}\n\na.trash[_ngcontent-%COMP%] {\n  color: #C9302C;\n}\n\na.lock[_ngcontent-%COMP%] {\n  color: #a8d2be;\n}\n\na.note[_ngcontent-%COMP%] {\n  color: #f9ae4e;\n}\n\n[_nghost-%COMP%]     bs-tooltip-container .tooltip-inner {\n  background-color: #0c425d;\n  color: white;\n}\n\n[_nghost-%COMP%]     bs-tooltip-container .tooltip-arrow:before, [_nghost-%COMP%]     bs-tooltip-container .tooltip-arrow {\n  border-top-color: #0c425d;\n}\n\n.product-card[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 90%;\n  margin: 15px;\n  height: 50px;\n  border-radius: 25px;\n  border: 2px solid #e2e2e2;\n}\n\n.description-card[_ngcontent-%COMP%] {\n  position: relative;\n  width: 85%;\n  height: 100px;\n  background-color: #0c425d;\n  border-radius: 10px;\n  margin: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n}\n\n.description-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.description-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-of-type {\n  font-weight: bold;\n}\n\n.description-card[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 20px;\n  height: 30px;\n  top: 0;\n  right: 25px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  background-color: #a8d2be;\n}\n\n.card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 15px;\n  margin-bottom: 35px;\n}\n\n.field-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n}\n\n.toggleButton[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: block;\n  transform-origin: 50% 50%;\n  transform-style: preserve-3d;\n  transition: transform 0.14s ease;\n}\n\n.toggleButton[_ngcontent-%COMP%]:active {\n  transform: rotateX(30deg);\n}\n\n.toggleButton[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.toggleButton[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%] {\n  border: 3px solid rgba(12, 66, 93, 0.2);\n  border-radius: 50%;\n  position: relative;\n  width: 30px;\n  height: 30px;\n}\n\n.toggleButton[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-width: 3.6;\n  stroke: #0c425dde;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  width: 30px;\n  height: 30px;\n  display: block;\n  position: absolute;\n  left: -3px;\n  top: -3px;\n  right: -3px;\n  bottom: -3px;\n  z-index: 1;\n  stroke-dashoffset: 124.6;\n  stroke-dasharray: 0 162.6 133 29.6;\n  transition: all 0.4s ease 0s;\n}\n\n.toggleButton[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]:before, .toggleButton[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 3px;\n  height: 16px;\n  background: #0c425dde;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  border-radius: 5px;\n}\n\n.toggleButton[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]:before {\n  opacity: 0;\n  transform: scale(0.3) translate(-50%, -50%) rotate(45deg);\n  -webkit-animation: bounceInBefore 0.3s linear forwards 0.3s;\n          animation: bounceInBefore 0.3s linear forwards 0.3s;\n}\n\n.toggleButton[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]:after {\n  opacity: 0;\n  transform: scale(0.3) translate(-50%, -50%) rotate(-45deg);\n  -webkit-animation: bounceInAfter 0.3s linear forwards 0.3s;\n          animation: bounceInAfter 0.3s linear forwards 0.3s;\n}\n\n.toggleButton[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + div[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  stroke-dashoffset: 162.6;\n  stroke-dasharray: 0 162.6 28 134.6;\n  transition: all 0.4s ease 0.2s;\n}\n\n.toggleButton[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + div[_ngcontent-%COMP%]:before {\n  opacity: 0;\n  transform: scale(0.3) translate(-50%, -50%) rotate(45deg);\n  -webkit-animation: bounceInBeforeDont 0.3s linear forwards 0s;\n          animation: bounceInBeforeDont 0.3s linear forwards 0s;\n}\n\n.toggleButton[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + div[_ngcontent-%COMP%]:after {\n  opacity: 0;\n  transform: scale(0.3) translate(-50%, -50%) rotate(-45deg);\n  -webkit-animation: bounceInAfterDont 0.3s linear forwards 0s;\n          animation: bounceInAfterDont 0.3s linear forwards 0s;\n}\n\n@-webkit-keyframes bounceInBefore {\n  0% {\n    opacity: 0;\n    transform: scale(0.3) translate(-50%, -50%) rotate(45deg);\n  }\n  50% {\n    opacity: 0.9;\n    transform: scale(1.1) translate(-50%, -50%) rotate(45deg);\n  }\n  80% {\n    opacity: 1;\n    transform: scale(0.89) translate(-50%, -50%) rotate(45deg);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translate(-50%, -50%) rotate(45deg);\n  }\n}\n\n@keyframes bounceInBefore {\n  0% {\n    opacity: 0;\n    transform: scale(0.3) translate(-50%, -50%) rotate(45deg);\n  }\n  50% {\n    opacity: 0.9;\n    transform: scale(1.1) translate(-50%, -50%) rotate(45deg);\n  }\n  80% {\n    opacity: 1;\n    transform: scale(0.89) translate(-50%, -50%) rotate(45deg);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translate(-50%, -50%) rotate(45deg);\n  }\n}\n\n@-webkit-keyframes bounceInAfter {\n  0% {\n    opacity: 0;\n    transform: scale(0.3) translate(-50%, -50%) rotate(-45deg);\n  }\n  50% {\n    opacity: 0.9;\n    transform: scale(1.1) translate(-50%, -50%) rotate(-45deg);\n  }\n  80% {\n    opacity: 1;\n    transform: scale(0.89) translate(-50%, -50%) rotate(-45deg);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translate(-50%, -50%) rotate(-45deg);\n  }\n}\n\n@keyframes bounceInAfter {\n  0% {\n    opacity: 0;\n    transform: scale(0.3) translate(-50%, -50%) rotate(-45deg);\n  }\n  50% {\n    opacity: 0.9;\n    transform: scale(1.1) translate(-50%, -50%) rotate(-45deg);\n  }\n  80% {\n    opacity: 1;\n    transform: scale(0.89) translate(-50%, -50%) rotate(-45deg);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translate(-50%, -50%) rotate(-45deg);\n  }\n}\n\n@-webkit-keyframes bounceInBeforeDont {\n  0% {\n    opacity: 1;\n    transform: scale(1) translate(-50%, -50%) rotate(45deg);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(0.3) translate(-50%, -50%) rotate(45deg);\n  }\n}\n\n@keyframes bounceInBeforeDont {\n  0% {\n    opacity: 1;\n    transform: scale(1) translate(-50%, -50%) rotate(45deg);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(0.3) translate(-50%, -50%) rotate(45deg);\n  }\n}\n\n@-webkit-keyframes bounceInAfterDont {\n  0% {\n    opacity: 1;\n    transform: scale(1) translate(-50%, -50%) rotate(-45deg);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(0.3) translate(-50%, -50%) rotate(-45deg);\n  }\n}\n\n@keyframes bounceInAfterDont {\n  0% {\n    opacity: 1;\n    transform: scale(1) translate(-50%, -50%) rotate(-45deg);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(0.3) translate(-50%, -50%) rotate(-45deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvRTpcXFVudGl0bGVkIEZvbGRlclxccHJpdmF0ZVxccHJvamVjdHNcXGZ1bGxfc3RhY2tcXG1vdG9iYXJcXG1vdG9iYXJfYWRtaW4vc3JjXFxzY3NzXFx0YWJsZV9zY3JlZW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RzL0U6XFxVbnRpdGxlZCBGb2xkZXJcXHByaXZhdGVcXHByb2plY3RzXFxmdWxsX3N0YWNrXFxtb3RvYmFyXFxtb3RvYmFyX2FkbWluL3NyY1xcc2Nzc1xcYWJzdHJhY3RzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9kdWN0cy9FOlxcVW50aXRsZWQgRm9sZGVyXFxwcml2YXRlXFxwcm9qZWN0c1xcZnVsbF9zdGFja1xcbW90b2JhclxcbW90b2Jhcl9hZG1pbi9zcmNcXGFwcFxccmV1c2FibGUtY29tcG9uZW50c1xcZm9ybS1maWVsZHNcXGlucHV0LWNoZWNrYm94XFxpbnB1dC1jaGVja2JveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGNBQUE7RUFDQSx5QkNpQnNCO0FDbEIxQjs7QUZJQTtFQUNJLG1CQUFBO0FFREo7O0FGRUk7RUFDSSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJDS2tCO0VESmxCLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FFQVI7O0FGQ1E7RUFDSSxjQUFBO0FFQ1o7O0FGR0k7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUVEUjs7QUZJSTtFQUNJLGdCQUFBO0VBRUEseUJBQUE7RUFDQSxXQ3ZCa0I7QUNvQjFCOztBRktRO0VBQ0ksNkJBQUE7RUFDQSxlQ2tDYztBQ3JDMUI7O0FGS1k7RUFKSjtJQUtRLGVDOEJVO0VDaEN4QjtBQUNGOztBRktRO0VBQ0ksZUM0Qlc7QUMvQnZCOztBRktZO0VBSEo7SUFJUSxlQ3dCUTtFQzFCdEI7QUFDRjs7QUZJWTs7RUFHSSxlQUFBO0VBRUEsY0FBQTtFQUNBLG9CQUFBO0FFSmhCOztBRktnQjs7RUFDSSxpQkFBQTtBRUZwQjs7QUZNb0I7O0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUVIeEI7O0FGSXdCOztFQUNJLHNCQUFBO0FFRDVCOztBRkd3Qjs7RUFDSSx5QkFBQTtBRUE1Qjs7QUZFd0I7O0VBQ0kseUJDOUVuQjtBQytFVDs7QUZDd0I7O0VBQ0kseUJBQUE7QUVFNUI7O0FGQXdCOztFQUNJLHlCQUFBO0FFRzVCOztBRkR3Qjs7RUFDSSx5QkFBQTtBRUk1Qjs7QUZFWTtFQUNJLHlCQUFBO0FFQWhCOztBRktJO0VBQ0ksbUJBQUE7RUFDQSx1QkN0R0M7RUR1R0QsNkNBQUE7RUFDQSxtQkFBQTtBRUhSOztBRk1JO0VBQ0ksaUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUN0Q1k7QUNrQ3BCOztBRk9JO0VBQ0ksa0NBQUE7QUVMUjs7QUZTQTtFQUNJLGVDaERnQjtFRGlEaEIsaUJBQUE7RUFDQSxrQkFBQTtBRU5KOztBRlNBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBRU5KOztBRlFJO0VBUEo7SUFRUSxjQUFBO0VFTE47QUFDRjs7QUZPSTtFQUNJLGFBQUE7QUVMUjs7QUZPUTtFQUhKO0lBSVEsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7RUVKVjtBQUNGOztBRk9BLFFBQUE7O0FBRUE7RUFDSSxXQUFBO0FFTEo7O0FGU0k7RUFDSSxhQUFBO0FFTlI7O0FGU0k7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFFQSxjQUFBO0FFUlI7O0FGU1E7RUFDSSxlQUFBO0FFUFo7O0FGVUk7O0VBRUksZ0JBQUE7QUVSUjs7QUZVSTtFQUNJLG9DQUFBO0FFUlI7O0FGV0k7RUFDSSxvQ0FBQTtBRVRSOztBRllJO0VBQ0kseUJDNUprQjtFRDZKbEIseUJBQUE7RUFDQSxtQkFBQTtBRVZSOztBRmFJOztFQUVJLDZCQUFBO0FFWFI7O0FGY0k7O0VBRUksbUJBQUE7QUVaUjs7QUZlSTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkNoSVk7QUNtSHBCOztBRmlCSTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7QUVmUjs7QUZnQlE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUVkWjs7QUZrQkk7RUFDSSxhQUFBO0FFaEJSOztBRm1CSTtFQUNJLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBRWpCUjs7QUZvQlk7RUFDSSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBRWxCaEI7O0FGcUJZO0VBQ0ksZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0FFbkJoQjs7QUZ5QlE7RUFDSSxhQUFBO0FFdkJaOztBRjRCQTtFQUNJLGNBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUV6Qko7O0FGMkJJO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FFekJSOztBRjRCSTtFQUNJLGVBQUE7QUUxQlI7O0FGNkJJO0VBQ0ksY0NqUUM7QUNzT1Q7O0FGOEJJO0VBQ0ksY0N6UGtCO0FDNk4xQjs7QUYrQkk7RUFDSSxjQ3hRQztBQzJPVDs7QUZnQ0k7RUFDSSxjQ3hRRTtBQzBPVjs7QUZrQ0E7RUFDSSx5QkNsUks7RURtUkwsWUNwUks7QUNxUFQ7O0FGa0NBOztFQUVJLHlCQ3hSSztBQ3lQVDs7QUZrQ0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUUvQko7O0FGaUNBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQ3pTSztFRDBTTCxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUU5Qko7O0FGK0JJO0VBQ0ksV0FBQTtBRTdCUjs7QUY4QlE7RUFDSSxpQkFBQTtBRTVCWjs7QUYrQkk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EseUJDN1RDO0FDZ1NUOztBRmdDQTtFQUNJLG1CQUFBO0FFN0JKOztBRjhCSTtFQUNJLG1CQUFBO0FFNUJSOztBRjhCSTtFQUNJLG1CQUFBO0FFNUJSOztBQzVTQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUQrU0Y7O0FDN1NBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QURnVEY7O0FDN1NBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0NBQUE7QURnVEY7O0FDL1NFO0VBQ0UseUJBQUE7QURpVEo7O0FDL1NFO0VBQ0UsYUFBQTtBRGlUSjs7QUNoVEk7RUFDRSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBRGtUTjs7QUNqVE07RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkEvQkE7RUFnQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7QURtVFI7O0FDalRNO0VBRUUsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBcERBO0VBcURBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBRGtUUjs7QUNoVE07RUFDRSxVQUFBO0VBQ0EseURBQUE7RUFDQSwyREFBQTtVQUFBLG1EQUFBO0FEa1RSOztBQ2hUTTtFQUNFLFVBQUE7RUFDQSwwREFBQTtFQUNBLDBEQUFBO1VBQUEsa0RBQUE7QURrVFI7O0FDOVNNO0VBQ0Usd0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDhCQUFBO0FEZ1RSOztBQzlTTTtFQUNFLFVBQUE7RUFDQSx5REFBQTtFQUNBLDZEQUFBO1VBQUEscURBQUE7QURnVFI7O0FDOVNNO0VBQ0UsVUFBQTtFQUNBLDBEQUFBO0VBQ0EsNERBQUE7VUFBQSxvREFBQTtBRGdUUjs7QUMxU0E7RUFDRTtJQUNFLFVBQUE7SUFDQSx5REFBQTtFRDZTRjtFQzNTQTtJQUNFLFlBQUE7SUFDQSx5REFBQTtFRDZTRjtFQzNTQTtJQUNFLFVBQUE7SUFDQSwwREFBQTtFRDZTRjtFQzNTQTtJQUNFLFVBQUE7SUFDQSx1REFBQTtFRDZTRjtBQUNGOztBQzdUQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLHlEQUFBO0VENlNGO0VDM1NBO0lBQ0UsWUFBQTtJQUNBLHlEQUFBO0VENlNGO0VDM1NBO0lBQ0UsVUFBQTtJQUNBLDBEQUFBO0VENlNGO0VDM1NBO0lBQ0UsVUFBQTtJQUNBLHVEQUFBO0VENlNGO0FBQ0Y7O0FDMVNBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsMERBQUE7RUQ0U0Y7RUMxU0E7SUFDRSxZQUFBO0lBQ0EsMERBQUE7RUQ0U0Y7RUMxU0E7SUFDRSxVQUFBO0lBQ0EsMkRBQUE7RUQ0U0Y7RUMxU0E7SUFDRSxVQUFBO0lBQ0Esd0RBQUE7RUQ0U0Y7QUFDRjs7QUM1VEE7RUFDRTtJQUNFLFVBQUE7SUFDQSwwREFBQTtFRDRTRjtFQzFTQTtJQUNFLFlBQUE7SUFDQSwwREFBQTtFRDRTRjtFQzFTQTtJQUNFLFVBQUE7SUFDQSwyREFBQTtFRDRTRjtFQzFTQTtJQUNFLFVBQUE7SUFDQSx3REFBQTtFRDRTRjtBQUNGOztBQ3pTQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLHVEQUFBO0VEMlNGO0VDelNBO0lBQ0UsVUFBQTtJQUNBLHlEQUFBO0VEMlNGO0FBQ0Y7O0FDblRBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsdURBQUE7RUQyU0Y7RUN6U0E7SUFDRSxVQUFBO0lBQ0EseURBQUE7RUQyU0Y7QUFDRjs7QUN4U0E7RUFDRTtJQUNFLFVBQUE7SUFDQSx3REFBQTtFRDBTRjtFQ3hTQTtJQUNFLFVBQUE7SUFDQSwwREFBQTtFRDBTRjtBQUNGOztBQ2xUQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLHdEQUFBO0VEMFNGO0VDeFNBO0lBQ0UsVUFBQTtJQUNBLDBEQUFBO0VEMFNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL2Fic3RyYWN0cy92YXJpYWJsZXNcIjtcclxuXHJcbjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tYmFja2dyb3VuZC1jb2xvcjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAuZGF0YS10YWJsZS1oZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCA4cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjYXJkLWhlYWRlci1iZztcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICRmb250LWNvbG9yO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRhdGEtdGFibGUtYm94IHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkZGF0YS10YWJsZS1ib3JkZXI7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5kYXRhLXRhYmxlIHtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIC8vIGZvbnQtc2l6ZSA6ICRkYXRhLXRhYmxlLWJvZHk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGRhdGEtdGFibGUtYm9yZGVyO1xyXG4gICAgICAgIGNvbG9yOiAkZm9udC1jb2xvcjtcclxuXHJcbiAgICAgICAgdGhlYWQge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk5OTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAkZGF0YS10YWJsZS1oZWFkZXItMTkyMDtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMzY2cHgpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGRhdGEtdGFibGUtaGVhZGVyLTEzNjY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRib2R5IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAkZGF0YS10YWJsZS1ib2R5LTE5MjA7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTM2NnB4KSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICRkYXRhLXRhYmxlLWJvZHktMTM2NjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGQsXHJcbiAgICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgICAgIC8vIGJvcmRlci10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAvLyBjb2xvcjogcmdiYSgkY29sb3IxLCAwLjgpO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM1NTUzNTM7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogaW5pdGlhbDtcclxuICAgICAgICAgICAgICAgICYuaW5kZXgtY29sdW1uIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZbZGF0YS1sYWJlbD1cIlN0YXR1c1wiXSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAycHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5ibG9ja2VkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5kZWxldGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDEwNywgMTA3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmLmNvbmZpcm1lZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5wZW5kaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhMGEwMmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5kb25lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNDQ5NzA7IC8vJGNvbG9yMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRhdGEtdGFibGUtd3JhcHBlciB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwcHggOHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmg0LnRpdGxlIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAkY2FyZC1oZWFkZXItZm9udDtcclxuICAgIH1cclxuXHJcbiAgICBkYXRhLXRhYmxlLXBhZ2luYXRpb24gPiBkaXYge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogJGxhYmVsLWZvbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmJ0bi5zZWFyY2gge1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxuICAgIHBhZGRpbmc6IDRweCAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgcGFkZGluZzogMnB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKioqKiogKi9cclxuXHJcbjpob3N0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAge1xyXG4gICAgY2FwdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGVhZCB0ciB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgICAgICAgLy8gY29sb3I6ICRjb2xvcjE7XHJcbiAgICAgICAgY29sb3I6ICM1NTU2NTg7XHJcbiAgICAgICAgdGgge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGJvZHkgdGgsXHJcbiAgICB0Ym9keSB0ZCB7XHJcbiAgICAgICAgcGFkZGluZzogMC4zNXJlbTtcclxuICAgIH1cclxuICAgIC5yb3ctb2RkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmRhdGEtdGFibGUtcm93OmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FyZC1oZWFkZXItYmcgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuZGF0YS10YWJsZS1ib3gge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXRhLXRhYmxlLWJveDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYmxlIHRkLFxyXG4gICAgLnRhYmxlIHRoIHtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGRhdGEtdGFibGUtYm9yZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC50YWJsZSB0aGVhZCB0aCxcclxuICAgIC5kYXRhLXRhYmxlID4gdGhlYWQgPiB0ciA+IHRkIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIHRoIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LTYwMDtcclxuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6ICRncmF5MjtcclxuICAgIH1cclxuXHJcbiAgICB0ZCB7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgJi5pbmRleC1jb2x1bW4ge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucGFnaW5hdGlvbi1yYW5nZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAucGFnaW5hdGlvbi1ib3gge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgICAgIHpvb206IDc1JTtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiA5NSU7XHJcblxyXG4gICAgICAgIC5pbnB1dC1ncm91cCB7XHJcbiAgICAgICAgICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2VsZWN0IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaW5kZXgtY29sdW1uLWhlYWRlciB7XHJcbiAgICAgICAgc3Bhbjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIklEXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5hIHtcclxuICAgIHBhZGRpbmc6IDAgMnB4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICYucGVuY2lsIHtcclxuICAgICAgICBjb2xvcjogJGNvbG9yMTtcclxuICAgIH1cclxuXHJcbiAgICAmLnRyYXNoIHtcclxuICAgICAgICBjb2xvcjogJHRyYXNoLWNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgICYubG9jayB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvcjI7XHJcbiAgICB9XHJcblxyXG4gICAgJi5ub3RlIHtcclxuICAgICAgICBjb2xvcjogJGNvbG9yNTtcclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIGJzLXRvb2x0aXAtY29udGFpbmVyIC50b29sdGlwLWlubmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjE7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgYnMtdG9vbHRpcC1jb250YWluZXIgLnRvb2x0aXAtYXJyb3c6YmVmb3JlLFxyXG46aG9zdCA6Om5nLWRlZXAgYnMtdG9vbHRpcC1jb250YWluZXIgLnRvb2x0aXAtYXJyb3cge1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogJGNvbG9yMTtcclxufVxyXG5cclxuLnByb2R1Y3QtY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkZ3JheTI7XHJcbn1cclxuLmRlc2NyaXB0aW9uLWNhcmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYmFyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICByaWdodDogMjVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjI7XHJcbiAgICB9XHJcbn1cclxuLmNhcmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIH1cclxuICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuIiwiLy9jb2xvcnNcbiR3aGl0ZSA6IHdoaXRlO1xuJGNvbG9yMTogIzBjNDI1ZDtcbiRjb2xvcjI6ICNhOGQyYmU7XG4kY29sb3IzOiAjNDg5OWMyO1xuJGNvbG9yNDogIzFmNzdhMztcblxuJGNvbG9yNSA6ICNmOWFlNGU7XG4kY29sb3I1NTogI2Q2ODUyMjtcblxuJGJvcmRlciAgICAgICAgICAgICAgICAgOiAjZjFmMWYxO1xuJGRhdGEtdGFibGUtYm9yZGVyICAgICAgOiAjZTllOWU5O1xuJGdyYXkyICAgICAgICAgICAgICAgICAgOiAjZTJlMmUyO1xuJGdyYXkzICAgICAgICAgICAgICAgICAgOiAjNzU3NTc1O1xuJHRyYXNoLWNvbG9yICAgICAgICAgICAgOiAjQzkzMDJDO1xuJGZvbnQtY29sb3IgICAgICAgICAgICAgOiAjNTU1O1xuJGFjdGl2ZS1icmVhZGNydW1iLWNvbG9yOiAjMzQzNDM0O1xuJGNhcmQtaGVhZGVyLWJnICAgICAgICAgOiAjZjlmOWY5OyAvLyNlZmVmZWY7IC8vI2Y5ZjlmOTtcbiRwbGFjZWhvbGRlci1jb2xvciAgICAgIDogI2IzYjNiMztcblxuLy8gYmFja2dyb3VuZCBjb2xvclxuJG1haW4tYmFja2dyb3VuZC1jb2xvciAgOiAjZWZlZGYyO1xuJGhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiRkYXRhLXRhYmxlLWJveCAgICAgICAgIDogI2ZmZmRmZTsgLy8jZjdmN2Y3O1xuJGNhcmQtYm9keSAgICAgICAgICAgICAgOiAjZmZmZGZlO1xuXG4vLyBEYXNoYm9hcmRcbiRtYXJnaW5CZXR3ZWVuQ2FyZHM6IDIycHg7XG4kYXhpc0ZvbnRTaXplICAgICAgOiAxMnB4O1xuJHNtYWxsQXhpc0ZvbnRTaXplIDogMTBweDtcblxuLy9oZWFkZXJcbiRwcm9maWxlLW1lbnUtY29sb3I6ICNmOWY5Zjk7XG4kYmlsbC1jb2xvciAgICAgICAgOiAjOWJhMmFhO1xuJGJpbGwtaG92ZXItY29sb3IgIDogIzczODE4ZjtcblxuLy9MYXlvdXQgVmFyaWFibGVzXG5cbiRoZWFkZXItaGVpZ2h0IDogNTVweDtcbiRzaWRlTWVudS13aWR0aDogMjAwcHg7XG5cblxuLy9sb2dpblxuJGxveWFsaXR5LWNvbG9yICA6ICM4ODdmN2Y7XG4kbG9naW4tYm94LWNvbG9yIDogI2Y1ZjJmMDtcblxuLy9tYWlsXG4kbWFpbC1jaGVja2JveC1jb2xvcjogIzAwNzNhYTtcbiR1c2VyLW1haWwtY29sb3IgICAgOiAjMjkyYjJjO1xuXG4vL3Byb2ZpbGVcbiRhY3RpdmUtY29sb3IgICAgIDogI2Y0ZjZmOTtcbiRpY29uLWNvbG9yICAgICAgIDogIzk1OWNiNjtcbiRsYWJlbC10aXRsZS1jb2xvcjogIzUwNTY2YTtcblxuLy9lbWFpbCB0ZW1wbGF0ZXNcbiRlbWFpbC1ibHVlLWNvbG9yOiAjMGY0MTVkO1xuJGVtYWlsLWdyYXktY29sb3I6ICM1ZjYwNjA7XG4kZW1haWwtc3lhbi1jb2xvcjogI2EyZDljMjtcbiRlbWFpbC1vcmFnbmUtY29sb3I6ICNmZmFjNTI7XG5cbi8vZm9udHNcbiRmb250MjggICAgICAgICAgIDogMjhweDtcbiRmb250MjQgICAgICAgICAgIDogMjRweDtcbiRmb250MTggICAgICAgICAgIDogMThweDtcbiRmb250MTYgICAgICAgICAgIDogMTZweDtcbiRmb250MTQgICAgICAgICAgIDogMTRweDtcbiRmb250MTIgICAgICAgICAgIDogMTJweDtcbiRmb250MTAgICAgICAgICAgIDogMTBweDtcbiRmb250LXdlaWdodC02MDAgIDogNjAwO1xuJGZvbnQtd2VpZ2h0LTUwMCAgOiA1MDA7XG4kcGxhY2Vob2xkZXItZm9udCA6IDEycHg7XG4kbGFiZWwtZm9udCAgICAgICA6IDE0cHg7XG4kY2FyZC1oZWFkZXItZm9udCA6IDE2cHg7XG5cbiRkYXRhLXRhYmxlLWhlYWRlci0xMzY2IDogMTRweDtcbiRkYXRhLXRhYmxlLWhlYWRlci0xOTIwIDogMTZweDtcbiRkYXRhLXRhYmxlLWJvZHktMTM2NiA6IDEycHg7XG4kZGF0YS10YWJsZS1ib2R5LTE5MjA6IDE2cHg7XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZGYyO1xufVxuXG46aG9zdCA6Om5nLWRlZXAge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlLWhlYWRlciB7XG4gIHBhZGRpbmc6IDhweCA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgY29sb3I6ICM1NTU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlLWhlYWRlciBidXR0b24ge1xuICBwYWRkaW5nLXRvcDogMDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZS1ib3gge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgcGFkZGluZzogMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5ZTllOTtcbiAgYm9yZGVyLXRvcDogMDtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWU5ZTk7XG4gIGNvbG9yOiAjNTU1O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlIHRoZWFkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5OTk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzY2cHgpIHtcbiAgOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlIHRoZWFkIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzY2cHgpIHtcbiAgOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlIHRib2R5IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0ZCxcbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0aCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM1NTUzNTM7XG4gIGZvbnQtd2VpZ2h0OiBpbml0aWFsO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlIHRib2R5IHRkLmluZGV4LWNvbHVtbixcbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0aC5pbmRleC1jb2x1bW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0ZFtkYXRhLWxhYmVsPVN0YXR1c10gc3Bhbixcbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0aFtkYXRhLWxhYmVsPVN0YXR1c10gc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMnB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUgdGJvZHkgdGRbZGF0YS1sYWJlbD1TdGF0dXNdIHNwYW4uYmxvY2tlZCxcbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0aFtkYXRhLWxhYmVsPVN0YXR1c10gc3Bhbi5ibG9ja2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0ZFtkYXRhLWxhYmVsPVN0YXR1c10gc3Bhbi5kZWxldGVkLFxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlIHRib2R5IHRoW2RhdGEtbGFiZWw9U3RhdHVzXSBzcGFuLmRlbGV0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2YjZiO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlIHRib2R5IHRkW2RhdGEtbGFiZWw9U3RhdHVzXSBzcGFuLmNvbmZpcm1lZCxcbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0aFtkYXRhLWxhYmVsPVN0YXR1c10gc3Bhbi5jb25maXJtZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGM0MjVkO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlIHRib2R5IHRkW2RhdGEtbGFiZWw9U3RhdHVzXSBzcGFuLmFjdGl2ZSxcbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0aFtkYXRhLWxhYmVsPVN0YXR1c10gc3Bhbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlIHRib2R5IHRkW2RhdGEtbGFiZWw9U3RhdHVzXSBzcGFuLnBlbmRpbmcsXG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUgdGJvZHkgdGhbZGF0YS1sYWJlbD1TdGF0dXNdIHNwYW4ucGVuZGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhMGEwMmU7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUgdGJvZHkgdGRbZGF0YS1sYWJlbD1TdGF0dXNdIHNwYW4uZG9uZSxcbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0aFtkYXRhLWxhYmVsPVN0YXR1c10gc3Bhbi5kb25lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0NDk3MDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSBpbWcge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlLXdyYXBwZXIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAwcHggOHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5oNC50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbjpob3N0IDo6bmctZGVlcCBkYXRhLXRhYmxlLXBhZ2luYXRpb24gPiBkaXYge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmJ0bi5zZWFyY2gge1xuICBtYXJnaW46IDAgNXB4O1xuICBwYWRkaW5nOiA0cHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5idG4uc2VhcmNoIHtcbiAgICBwYWRkaW5nOiAycHggMDtcbiAgfVxufVxuLmJ0bi5zZWFyY2ggc3BhbjpsYXN0LWNoaWxkIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmJ0bi5zZWFyY2ggc3BhbjpsYXN0LWNoaWxkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cblxuLyoqKioqICovXG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgY2FwdGlvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG46aG9zdCA6Om5nLWRlZXAgdGhlYWQgdHIge1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gIGNvbG9yOiAjNTU1NjU4O1xufVxuOmhvc3QgOjpuZy1kZWVwIHRoZWFkIHRyIHRoIHtcbiAgcGFkZGluZzogMXJlbSAwO1xufVxuOmhvc3QgOjpuZy1kZWVwIHRib2R5IHRoLFxuOmhvc3QgOjpuZy1kZWVwIHRib2R5IHRkIHtcbiAgcGFkZGluZzogMC4zNXJlbTtcbn1cbjpob3N0IDo6bmctZGVlcCAucm93LW9kZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5ZjkgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZS1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5ICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUtYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmRmZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAudGFibGUgdGQsXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlIHRoIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOWU5ZTk7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlIHRoZWFkIHRoLFxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlID4gdGhlYWQgPiB0ciA+IHRkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbjpob3N0IDo6bmctZGVlcCB0aCB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbjpob3N0IDo6bmctZGVlcCB0ZCB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IDo6bmctZGVlcCB0ZC5pbmRleC1jb2x1bW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wYWdpbmF0aW9uLXJhbmdlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjpob3N0IDo6bmctZGVlcCAucGFnaW5hdGlvbi1ib3gge1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgem9vbTogNzUlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogOTUlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wYWdpbmF0aW9uLWJveCAuaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbCB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wYWdpbmF0aW9uLWJveCAuaW5wdXQtZ3JvdXAgc2VsZWN0IHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuaW5kZXgtY29sdW1uLWhlYWRlciBzcGFuOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiSURcIjtcbn1cblxuYSB7XG4gIHBhZGRpbmc6IDAgMnB4O1xuICBib3JkZXI6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5hIGkge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5hLnBlbmNpbCB7XG4gIGNvbG9yOiAjMGM0MjVkO1xufVxuYS50cmFzaCB7XG4gIGNvbG9yOiAjQzkzMDJDO1xufVxuYS5sb2NrIHtcbiAgY29sb3I6ICNhOGQyYmU7XG59XG5hLm5vdGUge1xuICBjb2xvcjogI2Y5YWU0ZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIGJzLXRvb2x0aXAtY29udGFpbmVyIC50b29sdGlwLWlubmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjNDI1ZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgYnMtdG9vbHRpcC1jb250YWluZXIgLnRvb2x0aXAtYXJyb3c6YmVmb3JlLFxuOmhvc3QgOjpuZy1kZWVwIGJzLXRvb2x0aXAtY29udGFpbmVyIC50b29sdGlwLWFycm93IHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzBjNDI1ZDtcbn1cblxuLnByb2R1Y3QtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDE1cHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2UyZTJlMjtcbn1cblxuLmRlc2NyaXB0aW9uLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA4NSU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzQyNWQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5kZXNjcmlwdGlvbi1jYXJkIHAge1xuICB3aWR0aDogMTAwJTtcbn1cbi5kZXNjcmlwdGlvbi1jYXJkIHA6Zmlyc3Qtb2YtdHlwZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmRlc2NyaXB0aW9uLWNhcmQgLmJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgdG9wOiAwO1xuICByaWdodDogMjVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhOGQyYmU7XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5jYXJkIC5jYXJkLWhlYWRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uY2FyZCAuY2FyZC1ib2R5IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuXG4uZmllbGQtbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4udG9nZ2xlQnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTRzIGVhc2U7XG59XG4udG9nZ2xlQnV0dG9uOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgzMGRlZyk7XG59XG4udG9nZ2xlQnV0dG9uIGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi50b2dnbGVCdXR0b24gaW5wdXQgKyBkaXYge1xuICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDEyLCA2NiwgOTMsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuLnRvZ2dsZUJ1dHRvbiBpbnB1dCArIGRpdiBzdmcge1xuICBmaWxsOiBub25lO1xuICBzdHJva2Utd2lkdGg6IDMuNjtcbiAgc3Ryb2tlOiAjMGM0MjVkZGU7XG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTNweDtcbiAgdG9wOiAtM3B4O1xuICByaWdodDogLTNweDtcbiAgYm90dG9tOiAtM3B4O1xuICB6LWluZGV4OiAxO1xuICBzdHJva2UtZGFzaG9mZnNldDogMTI0LjY7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDAgMTYyLjYgMTMzIDI5LjY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XG59XG4udG9nZ2xlQnV0dG9uIGlucHV0ICsgZGl2OmJlZm9yZSwgLnRvZ2dsZUJ1dHRvbiBpbnB1dCArIGRpdjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAzcHg7XG4gIGhlaWdodDogMTZweDtcbiAgYmFja2dyb3VuZDogIzBjNDI1ZGRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi50b2dnbGVCdXR0b24gaW5wdXQgKyBkaXY6YmVmb3JlIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjMpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xuICBhbmltYXRpb246IGJvdW5jZUluQmVmb3JlIDAuM3MgbGluZWFyIGZvcndhcmRzIDAuM3M7XG59XG4udG9nZ2xlQnV0dG9uIGlucHV0ICsgZGl2OmFmdGVyIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjMpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTQ1ZGVnKTtcbiAgYW5pbWF0aW9uOiBib3VuY2VJbkFmdGVyIDAuM3MgbGluZWFyIGZvcndhcmRzIDAuM3M7XG59XG4udG9nZ2xlQnV0dG9uIGlucHV0OmNoZWNrZWQgKyBkaXYgc3ZnIHtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDE2Mi42O1xuICBzdHJva2UtZGFzaGFycmF5OiAwIDE2Mi42IDI4IDEzNC42O1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDAuMnM7XG59XG4udG9nZ2xlQnV0dG9uIGlucHV0OmNoZWNrZWQgKyBkaXY6YmVmb3JlIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjMpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xuICBhbmltYXRpb246IGJvdW5jZUluQmVmb3JlRG9udCAwLjNzIGxpbmVhciBmb3J3YXJkcyAwcztcbn1cbi50b2dnbGVCdXR0b24gaW5wdXQ6Y2hlY2tlZCArIGRpdjphZnRlciB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC00NWRlZyk7XG4gIGFuaW1hdGlvbjogYm91bmNlSW5BZnRlckRvbnQgMC4zcyBsaW5lYXIgZm9yd2FyZHMgMHM7XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlSW5CZWZvcmUge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMykgdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xuICB9XG4gIDgwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuODkpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBib3VuY2VJbkFmdGVyIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjMpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xuICB9XG4gIDgwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuODkpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJvdW5jZUluQmVmb3JlRG9udCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMykgdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYm91bmNlSW5BZnRlckRvbnQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC00NWRlZyk7XG4gIH1cbn0iLCIkY29sb3I6ICMwYzQyNWRkZTtcbi5mb3JtLWdyb3VwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cbi5maWVsZC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi50b2dnbGVCdXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNHMgZWFzZTtcbiAgJjphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgzMGRlZyk7XG4gIH1cbiAgaW5wdXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgJiArIGRpdiB7XG4gICAgICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKCRjb2xvciwgMC4yKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgc3ZnIHtcbiAgICAgICAgZmlsbDogbm9uZTtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiAzLjY7XG4gICAgICAgIHN0cm9rZTogJGNvbG9yO1xuICAgICAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IC0zcHg7XG4gICAgICAgIHRvcDogLTNweDtcbiAgICAgICAgcmlnaHQ6IC0zcHg7XG4gICAgICAgIGJvdHRvbTogLTNweDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDE2Mi42IC0gMzg7XG4gICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDAgMTYyLjYgMTMzICgxNjIuNiAtIDEzMyk7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XG4gICAgICB9XG4gICAgICAmOmJlZm9yZSxcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB3aWR0aDogM3B4O1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICRjb2xvcjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICB9XG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgYW5pbWF0aW9uOiBib3VuY2VJbkJlZm9yZSAwLjNzIGxpbmVhciBmb3J3YXJkcyAwLjNzO1xuICAgICAgfVxuICAgICAgJjphZnRlciB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC00NWRlZyk7XG4gICAgICAgIGFuaW1hdGlvbjogYm91bmNlSW5BZnRlciAwLjNzIGxpbmVhciBmb3J3YXJkcyAwLjNzO1xuICAgICAgfVxuICAgIH1cbiAgICAmOmNoZWNrZWQgKyBkaXYge1xuICAgICAgc3ZnIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDE2Mi42O1xuICAgICAgICBzdHJva2UtZGFzaGFycmF5OiAwIDE2Mi42IDI4ICgxNjIuNiAtIDI4KTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZSAwLjJzO1xuICAgICAgfVxuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMykgdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIGFuaW1hdGlvbjogYm91bmNlSW5CZWZvcmVEb250IDAuM3MgbGluZWFyIGZvcndhcmRzIDBzO1xuICAgICAgfVxuICAgICAgJjphZnRlciB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC00NWRlZyk7XG4gICAgICAgIGFuaW1hdGlvbjogYm91bmNlSW5BZnRlckRvbnQgMC4zcyBsaW5lYXIgZm9yd2FyZHMgMHM7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlSW5CZWZvcmUge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMykgdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xuICB9XG4gIDgwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuODkpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZUluQWZ0ZXIge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMykgdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC00NWRlZyk7XG4gIH1cbiAgODAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44OSkgdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC00NWRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBib3VuY2VJbkJlZm9yZURvbnQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjMpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlSW5BZnRlckRvbnQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC00NWRlZyk7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-products',
                templateUrl: './products.component.html',
                styleUrls: ['./products.component.scss'],
            }]
    }], function () { return [{ type: _products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] }, { type: _stores_stores_service__WEBPACK_IMPORTED_MODULE_4__["StoresService"] }, { type: _services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"] }, { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_11__["ExportAsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/products/products.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/products/products.module.ts ***!
  \***************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var angular7_data_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular7-data-table */ "./node_modules/angular7-data-table/__ivy_ngcc__/esm2015/angular7-data-table.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/__ivy_ngcc__/fesm2015/ngx-export-as.js");
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products-routing.module */ "./src/app/pages/products/products-routing.module.ts");
/* harmony import */ var src_app_reusable_components_form_fields_form_fields_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/reusable-components/form-fields/form-fields.module */ "./src/app/reusable-components/form-fields/form-fields.module.ts");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./products.component */ "./src/app/pages/products/products.component.ts");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-product/add-product.component */ "./src/app/pages/products/add-product/add-product.component.ts");
/* harmony import */ var _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit-product/edit-product.component */ "./src/app/pages/products/edit-product/edit-product.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");




















class ProductsModule {
}
ProductsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductsModule });
ProductsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProductsModule_Factory(t) { return new (t || ProductsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _products_routing_module__WEBPACK_IMPORTED_MODULE_8__["ProductsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            src_app_reusable_components_form_fields_form_fields_module__WEBPACK_IMPORTED_MODULE_9__["FormFieldsModule"],
            angular7_data_table__WEBPACK_IMPORTED_MODULE_5__["DataTableModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(),
            ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerModule"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_7__["ExportAsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductsModule, { declarations: [_products_component__WEBPACK_IMPORTED_MODULE_10__["ProductsComponent"], _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_11__["AddProductComponent"], _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_12__["EditProductComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _products_routing_module__WEBPACK_IMPORTED_MODULE_8__["ProductsRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        src_app_reusable_components_form_fields_form_fields_module__WEBPACK_IMPORTED_MODULE_9__["FormFieldsModule"], angular7_data_table__WEBPACK_IMPORTED_MODULE_5__["DataTableModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerModule"],
        ngx_export_as__WEBPACK_IMPORTED_MODULE_7__["ExportAsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_products_component__WEBPACK_IMPORTED_MODULE_10__["ProductsComponent"], _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_11__["AddProductComponent"], _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_12__["EditProductComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _products_routing_module__WEBPACK_IMPORTED_MODULE_8__["ProductsRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    src_app_reusable_components_form_fields_form_fields_module__WEBPACK_IMPORTED_MODULE_9__["FormFieldsModule"],
                    angular7_data_table__WEBPACK_IMPORTED_MODULE_5__["DataTableModule"].forRoot(),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(),
                    ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"].forRoot(),
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(),
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerModule"],
                    ngx_export_as__WEBPACK_IMPORTED_MODULE_7__["ExportAsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-products-products-module-es2015.js.map