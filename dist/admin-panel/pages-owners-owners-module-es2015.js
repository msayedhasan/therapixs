(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-owners-owners-module"],{

/***/ "./src/app/pages/owners/owners-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/owners/owners-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: OwnersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnersRoutingModule", function() { return OwnersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _owners_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./owners.component */ "./src/app/pages/owners/owners.component.ts");





const routes = [
    {
        path: '',
        component: _owners_component__WEBPACK_IMPORTED_MODULE_2__["OwnersComponent"],
    },
];
class OwnersRoutingModule {
}
OwnersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OwnersRoutingModule });
OwnersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OwnersRoutingModule_Factory(t) { return new (t || OwnersRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OwnersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OwnersRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/owners/owners.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/owners/owners.component.ts ***!
  \**************************************************/
/*! exports provided: OwnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnersComponent", function() { return OwnersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular7_data_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular7-data-table */ "./node_modules/angular7-data-table/__ivy_ngcc__/esm2015/angular7-data-table.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _owners_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./owners.service */ "./src/app/pages/owners/owners.service.ts");
/* harmony import */ var _stores_stores_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../stores/stores.service */ "./src/app/pages/stores/stores.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
/* harmony import */ var _reusable_components_form_fields_select_select_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../reusable-components/form-fields/select/select.component */ "./src/app/reusable-components/form-fields/select/select.component.ts");












function OwnersComponent_ng_container_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function OwnersComponent_ng_template_41_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r18.ownerId.store ? item_r18.ownerId.store.name : "-");
} }
function OwnersComponent_ng_template_41_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OwnersComponent_ng_template_41_ng_template_7_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const item_r19 = ctx.item; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](46); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](44); return item_r19.owner ? ctx_r20.openModal(_r6, item_r19._id) : ctx_r20.openModal(_r4, item_r19._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OwnersComponent_ng_template_41_ng_template_7_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const item_r19 = ctx.item; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](48); item_r19.ownerId.store ? null : ctx_r22.openModal(_r8, item_r19._id); return ctx_r22.getStoresList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OwnersComponent_ng_template_41_ng_template_7_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const item_r19 = ctx.item; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](52); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](50); return item_r19.ownerId.locked ? ctx_r23.openModal(_r12, item_r19.ownerId._id) : ctx_r23.openModal(_r10, item_r19.ownerId._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tooltip", item_r19.owner ? "delete owner" : "make owner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r19.owner ? "disabled_by_default" : "assignment_ind");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tooltip", item_r19.ownerId.store ? "" : "Add to store");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r19.ownerId.store ? "" : "store");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", item_r19.ownerId.locked ? "lock" : "trash")("tooltip", item_r19.ownerId.locked ? "Unlock" : "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r19.ownerId.locked ? "lock_open" : "lock");
} }
function OwnersComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "data-table", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reload", function OwnersComponent_ng_template_41_Template_data_table_reload_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.reloadItems($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "data-table-column", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "data-table-column", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, OwnersComponent_ng_template_41_ng_template_4_Template, 2, 1, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "data-table-column", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, OwnersComponent_ng_template_41_ng_template_7_Template, 9, 7, "ng-template", 37, 35, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx_r3.tableElements)("itemCount", ctx_r3.itemCount)("pageLimits", ctx_r3.limits)("limit", ctx_r3.limit)("pagination", true)("noDataMessage", "No data to show");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("property", "name")("header", "Name")("sortable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("property", "store")("header", "Store");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 150)("property", "_id");
} }
function OwnersComponent_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Do you want to make this user an owner for store? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OwnersComponent_ng_template_43_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.addOwner(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Confirm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OwnersComponent_ng_template_43_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OwnersComponent_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Do you want to delete ownership from this user? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OwnersComponent_ng_template_45_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r29.deleteOwner(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Confirm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OwnersComponent_ng_template_45_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r31.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OwnersComponent_ng_template_47_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Do you want to add this owner to a store? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "app-select", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("itemselected", function OwnersComponent_ng_template_47_Template_app_select_itemselected_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r32.selectStore($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OwnersComponent_ng_template_47_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r34.addOwnerToStore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Confirm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OwnersComponent_ng_template_47_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r35.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", "Store")("fieldId", "store")("ItemsList", ctx_r9.selectStoresList)("placeholder", "Choose store")("fieldClass", "col-18_md-24")("required", true);
} }
function OwnersComponent_ng_template_49_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Do you want to lock this store? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OwnersComponent_ng_template_49_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r36.lockElement(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Confirm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OwnersComponent_ng_template_49_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r38.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OwnersComponent_ng_template_51_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Do you want to unlock this store? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OwnersComponent_ng_template_51_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r39.unlockElement(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Confirm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OwnersComponent_ng_template_51_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r41.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class OwnersComponent {
    constructor(modalService, toastr, ownerService, storesService) {
        this.modalService = modalService;
        this.toastr = toastr;
        this.ownerService = ownerService;
        this.storesService = storesService;
        this.items = [];
        this.itemCount = 0;
        this.limit = 20;
        this.limits = [20, 25, 50];
        this.offset = 1;
        this.tableElements = [];
    }
    ngOnInit() {
        this.ownerService.getAll();
        this.ownerService.owners.subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
                    var _a, _b;
                    return item.name.toLowerCase().includes(FilterRecord) || ((_b = (_a = item.ownerId) === null || _a === void 0 ? void 0 : _a.store) === null || _b === void 0 ? void 0 : _b.name.toLowerCase().includes(FilterRecord));
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
    }
    selectStore(event) {
        if (event) {
            this.selectedStoreId = event._id;
        }
    }
    openModal(template, id) {
        this.itemId = id;
        this.modalRef = this.modalService.show(template);
    }
    addOwner() {
        this.modalRef.hide();
        this.ownerService.addOwner(this.itemId).subscribe((res) => {
            console.log(res);
            this.toastr.info(res['message'], 'Info');
            this.items = [];
            this.ownerService.getAll();
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error.message, 'Error');
            // this.error.next(error.error.message);
        });
    }
    deleteOwner() {
        this.modalRef.hide();
        this.ownerService.deleteOwner(this.itemId).subscribe((res) => {
            console.log(res);
            this.toastr.info(res['message'], 'Info');
            this.items = [];
            this.ownerService.getAll();
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error.message, 'Error');
            // this.error.next(error.error.message);
        });
    }
    addOwnerToStore() {
        this.modalRef.hide();
        this.ownerService
            .addOwnerToStore(this.itemId, this.selectedStoreId)
            .subscribe((res) => {
            console.log(res);
            this.toastr.info(res['message'], 'Info');
            this.items = [];
            this.ownerService.getAll();
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error.message, 'Error');
            // this.error.next(error.error.message);
        });
    }
    lockElement() {
        this.modalRef.hide();
        this.ownerService.lockOne(this.itemId).subscribe((res) => {
            console.log(res);
            this.toastr.info(res['message'], 'Info');
            this.items = [];
            this.ownerService.getAll();
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error.message, 'Error');
            // this.error.next(error.error.message);
        });
    }
    unlockElement() {
        this.modalRef.hide();
        this.ownerService.unlockOne(this.itemId).subscribe((res) => {
            console.log(res);
            this.toastr.info(res['message'], 'Info');
            this.items = [];
            this.ownerService.getAll();
        }, (error) => {
            console.log(error);
            this.toastr.error(error.error.message, 'Error');
            // this.error.next(error.error.message);
        });
    }
}
OwnersComponent.ɵfac = function OwnersComponent_Factory(t) { return new (t || OwnersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_owners_service__WEBPACK_IMPORTED_MODULE_5__["OwnersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_stores_stores_service__WEBPACK_IMPORTED_MODULE_6__["StoresService"])); };
OwnersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OwnersComponent, selectors: [["app-owners"]], decls: 53, vars: 2, consts: [[1, "grid-center-noGutter"], [1, "col-20_sm-22_xs-23", 2, "margin-top", "20px"], [1, "card"], [1, "card-header"], [1, "card-body", "grid-center-noGutter"], [1, "col-24", "grid-noGutter"], [1, "card", "col-5_md-8_sm-10_xs-hidden"], [1, "card-body"], [2, "display", "inline-block", "background-color", "#4899c2", "padding", "15px", "color", "white"], [1, "material-icons"], [2, "display", "inline-block", "margin", "0 10px"], [2, "color", "#20a8d8", "font-size", "18px", "font-weight", "600"], [2, "color", "#73818f", "font-size", "80%", "font-weight", "700"], [1, "col-24", "grid-center-noGutter", 2, "margin-top", "20px"], [1, "col-12_xs-24", "grid-left-noGutter", 2, "margin-left", "10px"], ["for", "", 1, "col-24", 2, "font-weight", "bold"], [1, "col-24", "grid"], ["type", "text", "placeholder", "e.g. Name", 1, "form-control", "col"], ["FilterRecord", ""], [1, "btn", "col-4", "color1", "round", "search", 3, "click"], [1, "md-hidden"], [1, "btn", "col-4", "color2", "round", "search", 3, "click"], [1, "grid-center-noGutter", 2, "margin-top", "20px"], [4, "ngTemplateOutlet"], ["table", ""], ["id", "template2"], ["templateAddOwner", ""], ["templateDeleteOwner", ""], ["templateAddOwnerToStore", ""], ["id", "template3"], ["templateLock", ""], ["templateUnlock", ""], ["id", "my-table", "title", "List of Owners", 3, "items", "itemCount", "pageLimits", "limit", "pagination", "noDataMessage", "reload"], [3, "property", "header", "sortable"], [3, "property", "header"], ["dataTableCell", ""], ["header", "Actions", 3, "width", "property"], ["class", "grid-center"], ["placement", "bottom", "triggers", "mouseenter:mouseleave", 1, "pencil", 3, "tooltip", "click"], ["placement", "bottom", "triggers", "mouseenter:mouseleave", 3, "ngClass", "tooltip", "click"], [1, "modal-header"], [2, "font-weight", "bold", "justify-content", "center"], [1, "fa", "fa-user", "fa-lg", "mt-4"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right"], ["aria-hidden", "true"], [1, "modal-body"], [1, "grid-right"], ["type", "button", 1, "btn", "col-5_sm-5_xs-6", "color1", "round", 2, "margin-right", "10px", 3, "click"], ["type", "button", 1, "btn", "col-5_sm-5_xs-6", "color2", "round", 3, "click"], [1, "col-24", 3, "label", "fieldId", "ItemsList", "placeholder", "fieldClass", "required", "itemselected"], [2, "color", "#0c425d", "font-weight", "bold", "justify-content", "center"], [1, "fa", "fa-lock", "fa-lg", "mt-4"]], template: function OwnersComponent_Template(rf, ctx) { if (rf & 1) {
        const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Owners Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Owners ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Search for");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OwnersComponent_Template_a_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](25); return ctx.FilterRecords(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OwnersComponent_Template_a_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](25); ctx.FilterRecords(""); return _r0.value = ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, OwnersComponent_ng_container_40_Template, 1, 0, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, OwnersComponent_ng_template_41_Template, 9, 13, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, OwnersComponent_ng_template_43_Template, 13, 0, "ng-template", 25, 26, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, OwnersComponent_ng_template_45_Template, 13, 0, "ng-template", 25, 27, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, OwnersComponent_ng_template_47_Template, 15, 6, "ng-template", 25, 28, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, OwnersComponent_ng_template_49_Template, 13, 0, "ng-template", 29, 30, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, OwnersComponent_ng_template_51_Template, 13, 0, "ng-template", 29, 31, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.items.length, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"], angular7_data_table__WEBPACK_IMPORTED_MODULE_2__["DataTable"], angular7_data_table__WEBPACK_IMPORTED_MODULE_2__["DataTableColumn"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _reusable_components_form_fields_select_select_component__WEBPACK_IMPORTED_MODULE_9__["SelectComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  background-color: #efedf2;\n}\n\n[_nghost-%COMP%]     {\n  border-radius: 10px;\n}\n\n[_nghost-%COMP%]     .data-table-header {\n  padding: 8px 8px;\n  margin-bottom: 0 !important;\n  background-color: #f9f9f9;\n  border: 1px solid #f1f1f1;\n  border-bottom: none;\n  color: #555;\n  border-radius: 10px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n[_nghost-%COMP%]     .data-table-header button {\n  padding-top: 0;\n}\n\n[_nghost-%COMP%]     .data-table-box {\n  border-radius: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  padding: 30px;\n  border: 1px solid #e9e9e9;\n  border-top: 0;\n  border-bottom: 0;\n}\n\n[_nghost-%COMP%]     .data-table {\n  box-shadow: none;\n  border: 1px solid #e9e9e9;\n  color: #555;\n}\n\n[_nghost-%COMP%]     .data-table thead {\n  border-bottom: 1px solid #999;\n  font-size: 16px;\n}\n\n@media (max-width: 1366px) {\n  [_nghost-%COMP%]     .data-table thead {\n    font-size: 14px;\n  }\n}\n\n[_nghost-%COMP%]     .data-table tbody {\n  font-size: 16px;\n}\n\n@media (max-width: 1366px) {\n  [_nghost-%COMP%]     .data-table tbody {\n    font-size: 12px;\n  }\n}\n\n[_nghost-%COMP%]     .data-table tbody td, [_nghost-%COMP%]     .data-table tbody th {\n  font-size: 13px;\n  color: #555353;\n  font-weight: initial;\n}\n\n[_nghost-%COMP%]     .data-table tbody td.index-column, [_nghost-%COMP%]     .data-table tbody th.index-column {\n  font-weight: bold;\n}\n\n[_nghost-%COMP%]     .data-table tbody td[data-label=Status] span, [_nghost-%COMP%]     .data-table tbody th[data-label=Status] span {\n  display: block;\n  color: white;\n  margin: 2px 0;\n  border-radius: 10px;\n}\n\n[_nghost-%COMP%]     .data-table tbody td[data-label=Status] span.blocked, [_nghost-%COMP%]     .data-table tbody th[data-label=Status] span.blocked {\n  background-color: grey;\n}\n\n[_nghost-%COMP%]     .data-table tbody td[data-label=Status] span.deleted, [_nghost-%COMP%]     .data-table tbody th[data-label=Status] span.deleted {\n  background-color: #ff6b6b;\n}\n\n[_nghost-%COMP%]     .data-table tbody td[data-label=Status] span.confirmed, [_nghost-%COMP%]     .data-table tbody th[data-label=Status] span.confirmed {\n  background-color: #0c425d;\n}\n\n[_nghost-%COMP%]     .data-table tbody td[data-label=Status] span.active, [_nghost-%COMP%]     .data-table tbody th[data-label=Status] span.active {\n  background-color: #28a745;\n}\n\n[_nghost-%COMP%]     .data-table tbody td[data-label=Status] span.pending, [_nghost-%COMP%]     .data-table tbody th[data-label=Status] span.pending {\n  background-color: #a0a02e;\n}\n\n[_nghost-%COMP%]     .data-table tbody td[data-label=Status] span.done, [_nghost-%COMP%]     .data-table tbody th[data-label=Status] span.done {\n  background-color: #044970;\n}\n\n[_nghost-%COMP%]     .data-table tbody img {\n  border: 1px solid #f1f1f1;\n}\n\n[_nghost-%COMP%]     .data-table-wrapper {\n  border-radius: 10px;\n  background-color: white;\n  box-shadow: 0 0px 8px 1px rgba(0, 0, 0, 0.05);\n  margin-bottom: 20px;\n}\n\n[_nghost-%COMP%]     .h4.title {\n  font-weight: bold;\n  margin: 0;\n  font-size: 16px;\n}\n\n[_nghost-%COMP%]     data-table-pagination > div {\n  justify-content: center !important;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n\n.btn.search[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  padding: 4px 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n@media (max-width: 1024px) {\n  .btn.search[_ngcontent-%COMP%] {\n    padding: 2px 0;\n  }\n}\n\n.btn.search[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  display: none;\n}\n\n@media (max-width: 1024px) {\n  .btn.search[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n}\n\n\n\n[_nghost-%COMP%] {\n  width: 100%;\n}\n\n[_nghost-%COMP%]     caption {\n  display: none;\n}\n\n[_nghost-%COMP%]     thead tr {\n  height: 40px;\n  background-color: #f6f6f6;\n  color: #555658;\n}\n\n[_nghost-%COMP%]     thead tr th {\n  padding: 1rem 0;\n}\n\n[_nghost-%COMP%]     tbody th, [_nghost-%COMP%]     tbody td {\n  padding: 0.35rem;\n}\n\n[_nghost-%COMP%]     .row-odd {\n  background-color: #f9f9f9 !important;\n}\n\n[_nghost-%COMP%]     .data-table-row:hover {\n  background-color: #f9f9f9 !important;\n}\n\n[_nghost-%COMP%]     .data-table-box {\n  background-color: #fffdfe;\n  border: 1px solid #f1f1f1;\n  margin-bottom: 10px;\n}\n\n[_nghost-%COMP%]     .table td, [_nghost-%COMP%]     .table th {\n  border-top: 1px solid #e9e9e9;\n}\n\n[_nghost-%COMP%]     .table thead th, [_nghost-%COMP%]     .data-table > thead > tr > td {\n  border-bottom: none;\n}\n\n[_nghost-%COMP%]     th {\n  vertical-align: middle;\n  text-align: center;\n  font-weight: 600;\n}\n\n[_nghost-%COMP%]     td {\n  vertical-align: middle;\n  text-align: center;\n}\n\n[_nghost-%COMP%]     td.index-column {\n  font-weight: bold;\n  font-size: 13px;\n}\n\n[_nghost-%COMP%]     .pagination-range {\n  display: none;\n}\n\n[_nghost-%COMP%]     .pagination-box {\n  padding-bottom: 12px;\n  zoom: 75%;\n  align-items: center;\n  width: 95%;\n}\n\n[_nghost-%COMP%]     .pagination-box .input-group .form-control {\n  display: flex !important;\n  width: auto !important;\n  height: auto;\n}\n\n[_nghost-%COMP%]     .pagination-box .input-group select {\n  border-radius: 0;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n[_nghost-%COMP%]     .index-column-header span::after {\n  content: \"ID\";\n}\n\na[_ngcontent-%COMP%] {\n  padding: 0 2px;\n  border: 0;\n  transition: all 0.5s;\n  background-color: transparent;\n  cursor: pointer;\n}\n\na[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n\na[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\na.pencil[_ngcontent-%COMP%] {\n  color: #0c425d;\n}\n\na.trash[_ngcontent-%COMP%] {\n  color: #C9302C;\n}\n\na.lock[_ngcontent-%COMP%] {\n  color: #a8d2be;\n}\n\na.note[_ngcontent-%COMP%] {\n  color: #f9ae4e;\n}\n\n[_nghost-%COMP%]     bs-tooltip-container .tooltip-inner {\n  background-color: #0c425d;\n  color: white;\n}\n\n[_nghost-%COMP%]     bs-tooltip-container .tooltip-arrow:before, [_nghost-%COMP%]     bs-tooltip-container .tooltip-arrow {\n  border-top-color: #0c425d;\n}\n\n.product-card[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 90%;\n  margin: 15px;\n  height: 50px;\n  border-radius: 25px;\n  border: 2px solid #e2e2e2;\n}\n\n.description-card[_ngcontent-%COMP%] {\n  position: relative;\n  width: 85%;\n  height: 100px;\n  background-color: #0c425d;\n  border-radius: 10px;\n  margin: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n}\n\n.description-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.description-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-of-type {\n  font-weight: bold;\n}\n\n.description-card[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 20px;\n  height: 30px;\n  top: 0;\n  right: 25px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  background-color: #a8d2be;\n}\n\n.card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3duZXJzL0U6XFxVbnRpdGxlZCBGb2xkZXJcXHByaXZhdGVcXHByb2plY3RzXFxmdWxsX3N0YWNrXFxtb3RvYmFyXFxtb3RvYmFyX2FkbWluL3NyY1xcc2Nzc1xcdGFibGVfc2NyZWVuLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9vd25lcnMvRTpcXFVudGl0bGVkIEZvbGRlclxccHJpdmF0ZVxccHJvamVjdHNcXGZ1bGxfc3RhY2tcXG1vdG9iYXJcXG1vdG9iYXJfYWRtaW4vc3JjXFxzY3NzXFxhYnN0cmFjdHNcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvb3duZXJzL293bmVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGNBQUE7RUFDQSx5QkNpQnNCO0FDbEIxQjs7QUZJQTtFQUNJLG1CQUFBO0FFREo7O0FGRUk7RUFDSSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJDS2tCO0VESmxCLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FFQVI7O0FGQ1E7RUFDSSxjQUFBO0FFQ1o7O0FGR0k7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUVEUjs7QUZJSTtFQUNJLGdCQUFBO0VBRUEseUJBQUE7RUFDQSxXQ3ZCa0I7QUNvQjFCOztBRktRO0VBQ0ksNkJBQUE7RUFDQSxlQ2tDYztBQ3JDMUI7O0FGS1k7RUFKSjtJQUtRLGVDOEJVO0VDaEN4QjtBQUNGOztBRktRO0VBQ0ksZUM0Qlc7QUMvQnZCOztBRktZO0VBSEo7SUFJUSxlQ3dCUTtFQzFCdEI7QUFDRjs7QUZJWTs7RUFHSSxlQUFBO0VBRUEsY0FBQTtFQUNBLG9CQUFBO0FFSmhCOztBRktnQjs7RUFDSSxpQkFBQTtBRUZwQjs7QUZNb0I7O0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUVIeEI7O0FGSXdCOztFQUNJLHNCQUFBO0FFRDVCOztBRkd3Qjs7RUFDSSx5QkFBQTtBRUE1Qjs7QUZFd0I7O0VBQ0kseUJDOUVuQjtBQytFVDs7QUZDd0I7O0VBQ0kseUJBQUE7QUVFNUI7O0FGQXdCOztFQUNJLHlCQUFBO0FFRzVCOztBRkR3Qjs7RUFDSSx5QkFBQTtBRUk1Qjs7QUZFWTtFQUNJLHlCQUFBO0FFQWhCOztBRktJO0VBQ0ksbUJBQUE7RUFDQSx1QkN0R0M7RUR1R0QsNkNBQUE7RUFDQSxtQkFBQTtBRUhSOztBRk1JO0VBQ0ksaUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUN0Q1k7QUNrQ3BCOztBRk9JO0VBQ0ksa0NBQUE7QUVMUjs7QUZTQTtFQUNJLGVDaERnQjtFRGlEaEIsaUJBQUE7RUFDQSxrQkFBQTtBRU5KOztBRlNBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUVOSjs7QUZRSTtFQVBKO0lBUVEsY0FBQTtFRUxOO0FBQ0Y7O0FGT0k7RUFDSSxhQUFBO0FFTFI7O0FGT1E7RUFISjtJQUlRLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0VFSlY7QUFDRjs7QUZPQSxRQUFBOztBQUVBO0VBQ0ksV0FBQTtBRUxKOztBRlNJO0VBQ0ksYUFBQTtBRU5SOztBRlNJO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBRUEsY0FBQTtBRVJSOztBRlNRO0VBQ0ksZUFBQTtBRVBaOztBRlVJOztFQUVJLGdCQUFBO0FFUlI7O0FGVUk7RUFDSSxvQ0FBQTtBRVJSOztBRldJO0VBQ0ksb0NBQUE7QUVUUjs7QUZZSTtFQUNJLHlCQzVKa0I7RUQ2SmxCLHlCQUFBO0VBQ0EsbUJBQUE7QUVWUjs7QUZhSTs7RUFFSSw2QkFBQTtBRVhSOztBRmNJOztFQUVJLG1CQUFBO0FFWlI7O0FGZUk7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JDaElZO0FDbUhwQjs7QUZpQkk7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0FFZlI7O0FGZ0JRO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FFZFo7O0FGa0JJO0VBQ0ksYUFBQTtBRWhCUjs7QUZtQkk7RUFDSSxvQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUVqQlI7O0FGb0JZO0VBQ0ksd0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUVsQmhCOztBRnFCWTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtBRW5CaEI7O0FGeUJRO0VBQ0ksYUFBQTtBRXZCWjs7QUY0QkE7RUFDSSxjQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FFekJKOztBRjJCSTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBRXpCUjs7QUY0Qkk7RUFDSSxlQUFBO0FFMUJSOztBRjZCSTtFQUNJLGNDalFDO0FDc09UOztBRjhCSTtFQUNJLGNDelBrQjtBQzZOMUI7O0FGK0JJO0VBQ0ksY0N4UUM7QUMyT1Q7O0FGZ0NJO0VBQ0ksY0N4UUU7QUMwT1Y7O0FGa0NBO0VBQ0kseUJDbFJLO0VEbVJMLFlDcFJLO0FDcVBUOztBRmtDQTs7RUFFSSx5QkN4Uks7QUN5UFQ7O0FGa0NBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FFL0JKOztBRmlDQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSx5QkN6U0s7RUQwU0wsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FFOUJKOztBRitCSTtFQUNJLFdBQUE7QUU3QlI7O0FGOEJRO0VBQ0ksaUJBQUE7QUU1Qlo7O0FGK0JJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQzdUQztBQ2dTVDs7QUZnQ0E7RUFDSSxtQkFBQTtBRTdCSjs7QUY4Qkk7RUFDSSxtQkFBQTtBRTVCUjs7QUY4Qkk7RUFDSSxtQkFBQTtBRTVCUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL293bmVycy9vd25lcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy9hYnN0cmFjdHMvdmFyaWFibGVzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWJhY2tncm91bmQtY29sb3I7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLmRhdGEtdGFibGUtaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiA4cHggOHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FyZC1oZWFkZXItYmc7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlcjtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAkZm9udC1jb2xvcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kYXRhLXRhYmxlLWJveCB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGRhdGEtdGFibGUtYm9yZGVyO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgIH1cclxuXHJcbiAgICAuZGF0YS10YWJsZSB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAvLyBmb250LXNpemUgOiAkZGF0YS10YWJsZS1ib2R5O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRkYXRhLXRhYmxlLWJvcmRlcjtcclxuICAgICAgICBjb2xvcjogJGZvbnQtY29sb3I7XHJcblxyXG4gICAgICAgIHRoZWFkIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5OTk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJGRhdGEtdGFibGUtaGVhZGVyLTE5MjA7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTM2NnB4KSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICRkYXRhLXRhYmxlLWhlYWRlci0xMzY2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0Ym9keSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJGRhdGEtdGFibGUtYm9keS0xOTIwO1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEzNjZweCkge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkZGF0YS10YWJsZS1ib2R5LTEzNjY7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRkLFxyXG4gICAgICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgICAgICAvLyBib3JkZXItdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgLy8gY29sb3I6IHJnYmEoJGNvbG9yMSwgMC44KTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNTU1MzUzO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGluaXRpYWw7XHJcbiAgICAgICAgICAgICAgICAmLmluZGV4LWNvbHVtbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmW2RhdGEtbGFiZWw9XCJTdGF0dXNcIl0ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMnB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYuYmxvY2tlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYuZGVsZXRlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMDcsIDEwNyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5jb25maXJtZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYucGVuZGluZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTBhMDJlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYuZG9uZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQ0OTcwOyAvLyRjb2xvcjI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kYXRhLXRhYmxlLXdyYXBwZXIge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMHB4IDhweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5oNC50aXRsZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGNhcmQtaGVhZGVyLWZvbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZGF0YS10YWJsZS1wYWdpbmF0aW9uID4gZGl2IHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBmb250LXNpemU6ICRsYWJlbC1mb250O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5idG4uc2VhcmNoIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nOiA0cHggMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgIHBhZGRpbmc6IDJweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW46bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLyoqKioqICovXHJcblxyXG46aG9zdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIHtcclxuICAgIGNhcHRpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhlYWQgdHIge1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gICAgICAgIC8vIGNvbG9yOiAkY29sb3IxO1xyXG4gICAgICAgIGNvbG9yOiAjNTU1NjU4O1xyXG4gICAgICAgIHRoIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRib2R5IHRoLFxyXG4gICAgdGJvZHkgdGQge1xyXG4gICAgICAgIHBhZGRpbmc6IDAuMzVyZW07XHJcbiAgICB9XHJcbiAgICAucm93LW9kZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5kYXRhLXRhYmxlLXJvdzpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNhcmQtaGVhZGVyLWJnICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmRhdGEtdGFibGUtYm94IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGF0YS10YWJsZS1ib3g7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50YWJsZSB0ZCxcclxuICAgIC50YWJsZSB0aCB7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRkYXRhLXRhYmxlLWJvcmRlcjtcclxuICAgIH1cclxuXHJcbiAgICAudGFibGUgdGhlYWQgdGgsXHJcbiAgICAuZGF0YS10YWJsZSA+IHRoZWFkID4gdHIgPiB0ZCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICB0aCB7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC02MDA7XHJcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheTI7XHJcbiAgICB9XHJcblxyXG4gICAgdGQge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICYuaW5kZXgtY29sdW1uIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnBhZ2luYXRpb24tcmFuZ2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhZ2luYXRpb24tYm94IHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgICAgICB6b29tOiA3NSU7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogOTUlO1xyXG5cclxuICAgICAgICAuaW5wdXQtZ3JvdXAge1xyXG4gICAgICAgICAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmluZGV4LWNvbHVtbi1oZWFkZXIge1xyXG4gICAgICAgIHNwYW46OmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJJRFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuYSB7XHJcbiAgICBwYWRkaW5nOiAwIDJweDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAmLnBlbmNpbCB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvcjE7XHJcbiAgICB9XHJcblxyXG4gICAgJi50cmFzaCB7XHJcbiAgICAgICAgY29sb3I6ICR0cmFzaC1jb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICAmLmxvY2sge1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IyO1xyXG4gICAgfVxyXG5cclxuICAgICYubm90ZSB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvcjU7XHJcbiAgICB9XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCBicy10b29sdGlwLWNvbnRhaW5lciAudG9vbHRpcC1pbm5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IxO1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIGJzLXRvb2x0aXAtY29udGFpbmVyIC50b29sdGlwLWFycm93OmJlZm9yZSxcclxuOmhvc3QgOjpuZy1kZWVwIGJzLXRvb2x0aXAtY29udGFpbmVyIC50b29sdGlwLWFycm93IHtcclxuICAgIGJvcmRlci10b3AtY29sb3I6ICRjb2xvcjE7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgJGdyYXkyO1xyXG59XHJcbi5kZXNjcmlwdGlvbi1jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJhciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IyO1xyXG4gICAgfVxyXG59XHJcbi5jYXJkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcbiIsIi8vY29sb3JzXG4kd2hpdGUgOiB3aGl0ZTtcbiRjb2xvcjE6ICMwYzQyNWQ7XG4kY29sb3IyOiAjYThkMmJlO1xuJGNvbG9yMzogIzQ4OTljMjtcbiRjb2xvcjQ6ICMxZjc3YTM7XG5cbiRjb2xvcjUgOiAjZjlhZTRlO1xuJGNvbG9yNTU6ICNkNjg1MjI7XG5cbiRib3JkZXIgICAgICAgICAgICAgICAgIDogI2YxZjFmMTtcbiRkYXRhLXRhYmxlLWJvcmRlciAgICAgIDogI2U5ZTllOTtcbiRncmF5MiAgICAgICAgICAgICAgICAgIDogI2UyZTJlMjtcbiRncmF5MyAgICAgICAgICAgICAgICAgIDogIzc1NzU3NTtcbiR0cmFzaC1jb2xvciAgICAgICAgICAgIDogI0M5MzAyQztcbiRmb250LWNvbG9yICAgICAgICAgICAgIDogIzU1NTtcbiRhY3RpdmUtYnJlYWRjcnVtYi1jb2xvcjogIzM0MzQzNDtcbiRjYXJkLWhlYWRlci1iZyAgICAgICAgIDogI2Y5ZjlmOTsgLy8jZWZlZmVmOyAvLyNmOWY5Zjk7XG4kcGxhY2Vob2xkZXItY29sb3IgICAgICA6ICNiM2IzYjM7XG5cbi8vIGJhY2tncm91bmQgY29sb3JcbiRtYWluLWJhY2tncm91bmQtY29sb3IgIDogI2VmZWRmMjtcbiRoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4kZGF0YS10YWJsZS1ib3ggICAgICAgICA6ICNmZmZkZmU7IC8vI2Y3ZjdmNztcbiRjYXJkLWJvZHkgICAgICAgICAgICAgIDogI2ZmZmRmZTtcblxuLy8gRGFzaGJvYXJkXG4kbWFyZ2luQmV0d2VlbkNhcmRzOiAyMnB4O1xuJGF4aXNGb250U2l6ZSAgICAgIDogMTJweDtcbiRzbWFsbEF4aXNGb250U2l6ZSA6IDEwcHg7XG5cbi8vaGVhZGVyXG4kcHJvZmlsZS1tZW51LWNvbG9yOiAjZjlmOWY5O1xuJGJpbGwtY29sb3IgICAgICAgIDogIzliYTJhYTtcbiRiaWxsLWhvdmVyLWNvbG9yICA6ICM3MzgxOGY7XG5cbi8vTGF5b3V0IFZhcmlhYmxlc1xuXG4kaGVhZGVyLWhlaWdodCA6IDU1cHg7XG4kc2lkZU1lbnUtd2lkdGg6IDIwMHB4O1xuXG5cbi8vbG9naW5cbiRsb3lhbGl0eS1jb2xvciAgOiAjODg3ZjdmO1xuJGxvZ2luLWJveC1jb2xvciA6ICNmNWYyZjA7XG5cbi8vbWFpbFxuJG1haWwtY2hlY2tib3gtY29sb3I6ICMwMDczYWE7XG4kdXNlci1tYWlsLWNvbG9yICAgIDogIzI5MmIyYztcblxuLy9wcm9maWxlXG4kYWN0aXZlLWNvbG9yICAgICA6ICNmNGY2Zjk7XG4kaWNvbi1jb2xvciAgICAgICA6ICM5NTljYjY7XG4kbGFiZWwtdGl0bGUtY29sb3I6ICM1MDU2NmE7XG5cbi8vZW1haWwgdGVtcGxhdGVzXG4kZW1haWwtYmx1ZS1jb2xvcjogIzBmNDE1ZDtcbiRlbWFpbC1ncmF5LWNvbG9yOiAjNWY2MDYwO1xuJGVtYWlsLXN5YW4tY29sb3I6ICNhMmQ5YzI7XG4kZW1haWwtb3JhZ25lLWNvbG9yOiAjZmZhYzUyO1xuXG4vL2ZvbnRzXG4kZm9udDI4ICAgICAgICAgICA6IDI4cHg7XG4kZm9udDI0ICAgICAgICAgICA6IDI0cHg7XG4kZm9udDE4ICAgICAgICAgICA6IDE4cHg7XG4kZm9udDE2ICAgICAgICAgICA6IDE2cHg7XG4kZm9udDE0ICAgICAgICAgICA6IDE0cHg7XG4kZm9udDEyICAgICAgICAgICA6IDEycHg7XG4kZm9udDEwICAgICAgICAgICA6IDEwcHg7XG4kZm9udC13ZWlnaHQtNjAwICA6IDYwMDtcbiRmb250LXdlaWdodC01MDAgIDogNTAwO1xuJHBsYWNlaG9sZGVyLWZvbnQgOiAxMnB4O1xuJGxhYmVsLWZvbnQgICAgICAgOiAxNHB4O1xuJGNhcmQtaGVhZGVyLWZvbnQgOiAxNnB4O1xuXG4kZGF0YS10YWJsZS1oZWFkZXItMTM2NiA6IDE0cHg7XG4kZGF0YS10YWJsZS1oZWFkZXItMTkyMCA6IDE2cHg7XG4kZGF0YS10YWJsZS1ib2R5LTEzNjYgOiAxMnB4O1xuJGRhdGEtdGFibGUtYm9keS0xOTIwOiAxNnB4O1xuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWRmMjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZS1oZWFkZXIge1xuICBwYWRkaW5nOiA4cHggOHB4O1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGNvbG9yOiAjNTU1O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZS1oZWFkZXIgYnV0dG9uIHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUtYm94IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWU5ZTk7XG4gIGJvcmRlci10b3A6IDA7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUge1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTllOWU5O1xuICBjb2xvcjogIzU1NTtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0aGVhZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTk5O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTM2NnB4KSB7XG4gIDpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0aGVhZCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUgdGJvZHkge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTM2NnB4KSB7XG4gIDpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUgdGJvZHkgdGQsXG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUgdGJvZHkgdGgge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjNTU1MzUzO1xuICBmb250LXdlaWdodDogaW5pdGlhbDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0ZC5pbmRleC1jb2x1bW4sXG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUgdGJvZHkgdGguaW5kZXgtY29sdW1uIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUgdGJvZHkgdGRbZGF0YS1sYWJlbD1TdGF0dXNdIHNwYW4sXG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUgdGJvZHkgdGhbZGF0YS1sYWJlbD1TdGF0dXNdIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDJweCAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlIHRib2R5IHRkW2RhdGEtbGFiZWw9U3RhdHVzXSBzcGFuLmJsb2NrZWQsXG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUgdGJvZHkgdGhbZGF0YS1sYWJlbD1TdGF0dXNdIHNwYW4uYmxvY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUgdGJvZHkgdGRbZGF0YS1sYWJlbD1TdGF0dXNdIHNwYW4uZGVsZXRlZCxcbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0aFtkYXRhLWxhYmVsPVN0YXR1c10gc3Bhbi5kZWxldGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNmI2Yjtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0ZFtkYXRhLWxhYmVsPVN0YXR1c10gc3Bhbi5jb25maXJtZWQsXG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUgdGJvZHkgdGhbZGF0YS1sYWJlbD1TdGF0dXNdIHNwYW4uY29uZmlybWVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjNDI1ZDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0ZFtkYXRhLWxhYmVsPVN0YXR1c10gc3Bhbi5hY3RpdmUsXG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUgdGJvZHkgdGhbZGF0YS1sYWJlbD1TdGF0dXNdIHNwYW4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0ZFtkYXRhLWxhYmVsPVN0YXR1c10gc3Bhbi5wZW5kaW5nLFxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlIHRib2R5IHRoW2RhdGEtbGFiZWw9U3RhdHVzXSBzcGFuLnBlbmRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTBhMDJlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlIHRib2R5IHRkW2RhdGEtbGFiZWw9U3RhdHVzXSBzcGFuLmRvbmUsXG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUgdGJvZHkgdGhbZGF0YS1sYWJlbD1TdGF0dXNdIHNwYW4uZG9uZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNDQ5NzA7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUgdGJvZHkgaW1nIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZS13cmFwcGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMHB4IDhweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuaDQudGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG46aG9zdCA6Om5nLWRlZXAgZGF0YS10YWJsZS1wYWdpbmF0aW9uID4gZGl2IHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxubGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5idG4uc2VhcmNoIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgcGFkZGluZzogNHB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuYnRuLnNlYXJjaCB7XG4gICAgcGFkZGluZzogMnB4IDA7XG4gIH1cbn1cbi5idG4uc2VhcmNoIHNwYW46bGFzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5idG4uc2VhcmNoIHNwYW46bGFzdC1jaGlsZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5cbi8qKioqKiAqL1xuOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIGNhcHRpb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3QgOjpuZy1kZWVwIHRoZWFkIHRyIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICBjb2xvcjogIzU1NTY1ODtcbn1cbjpob3N0IDo6bmctZGVlcCB0aGVhZCB0ciB0aCB7XG4gIHBhZGRpbmc6IDFyZW0gMDtcbn1cbjpob3N0IDo6bmctZGVlcCB0Ym9keSB0aCxcbjpob3N0IDo6bmctZGVlcCB0Ym9keSB0ZCB7XG4gIHBhZGRpbmc6IDAuMzVyZW07XG59XG46aG9zdCA6Om5nLWRlZXAgLnJvdy1vZGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5ICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUtcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOSAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlLWJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZkZmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlIHRkLFxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZSB0aCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTllOWU5O1xufVxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZSB0aGVhZCB0aCxcbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSA+IHRoZWFkID4gdHIgPiB0ZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG46aG9zdCA6Om5nLWRlZXAgdGgge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG46aG9zdCA6Om5nLWRlZXAgdGQge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCA6Om5nLWRlZXAgdGQuaW5kZXgtY29sdW1uIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbjpob3N0IDo6bmctZGVlcCAucGFnaW5hdGlvbi1yYW5nZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG46aG9zdCA6Om5nLWRlZXAgLnBhZ2luYXRpb24tYm94IHtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gIHpvb206IDc1JTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDk1JTtcbn1cbjpob3N0IDo6bmctZGVlcCAucGFnaW5hdGlvbi1ib3ggLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2wge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0bztcbn1cbjpob3N0IDo6bmctZGVlcCAucGFnaW5hdGlvbi1ib3ggLmlucHV0LWdyb3VwIHNlbGVjdCB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLmluZGV4LWNvbHVtbi1oZWFkZXIgc3Bhbjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIklEXCI7XG59XG5cbmEge1xuICBwYWRkaW5nOiAwIDJweDtcbiAgYm9yZGVyOiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmE6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuYSBpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuYS5wZW5jaWwge1xuICBjb2xvcjogIzBjNDI1ZDtcbn1cbmEudHJhc2gge1xuICBjb2xvcjogI0M5MzAyQztcbn1cbmEubG9jayB7XG4gIGNvbG9yOiAjYThkMmJlO1xufVxuYS5ub3RlIHtcbiAgY29sb3I6ICNmOWFlNGU7XG59XG5cbjpob3N0IDo6bmctZGVlcCBicy10b29sdGlwLWNvbnRhaW5lciAudG9vbHRpcC1pbm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzQyNWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIGJzLXRvb2x0aXAtY29udGFpbmVyIC50b29sdGlwLWFycm93OmJlZm9yZSxcbjpob3N0IDo6bmctZGVlcCBicy10b29sdGlwLWNvbnRhaW5lciAudG9vbHRpcC1hcnJvdyB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMwYzQyNWQ7XG59XG5cbi5wcm9kdWN0LWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAxNXB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlMmUyZTI7XG59XG5cbi5kZXNjcmlwdGlvbi1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODUlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGM0MjVkO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG4uZGVzY3JpcHRpb24tY2FyZCBwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZGVzY3JpcHRpb24tY2FyZCBwOmZpcnN0LW9mLXR5cGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5kZXNjcmlwdGlvbi1jYXJkIC5iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDI1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYThkMmJlO1xufVxuXG4uY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uY2FyZCAuY2FyZC1oZWFkZXIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmNhcmQgLmNhcmQtYm9keSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OwnersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-owners',
                templateUrl: './owners.component.html',
                styleUrls: ['./owners.component.scss'],
            }]
    }], function () { return [{ type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }, { type: _owners_service__WEBPACK_IMPORTED_MODULE_5__["OwnersService"] }, { type: _stores_stores_service__WEBPACK_IMPORTED_MODULE_6__["StoresService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/owners/owners.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/owners/owners.module.ts ***!
  \***********************************************/
/*! exports provided: OwnersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnersModule", function() { return OwnersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _owners_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./owners-routing.module */ "./src/app/pages/owners/owners-routing.module.ts");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
/* harmony import */ var angular7_data_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular7-data-table */ "./node_modules/angular7-data-table/__ivy_ngcc__/esm2015/angular7-data-table.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var src_app_reusable_components_form_fields_form_fields_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/reusable-components/form-fields/form-fields.module */ "./src/app/reusable-components/form-fields/form-fields.module.ts");
/* harmony import */ var _owners_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./owners.component */ "./src/app/pages/owners/owners.component.ts");












class OwnersModule {
}
OwnersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OwnersModule });
OwnersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OwnersModule_Factory(t) { return new (t || OwnersModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _owners_routing_module__WEBPACK_IMPORTED_MODULE_2__["OwnersRoutingModule"],
            src_app_reusable_components_form_fields_form_fields_module__WEBPACK_IMPORTED_MODULE_6__["FormFieldsModule"],
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
            angular7_data_table__WEBPACK_IMPORTED_MODULE_4__["DataTableModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OwnersModule, { declarations: [_owners_component__WEBPACK_IMPORTED_MODULE_7__["OwnersComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _owners_routing_module__WEBPACK_IMPORTED_MODULE_2__["OwnersRoutingModule"],
        src_app_reusable_components_form_fields_form_fields_module__WEBPACK_IMPORTED_MODULE_6__["FormFieldsModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"], angular7_data_table__WEBPACK_IMPORTED_MODULE_4__["DataTableModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OwnersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_owners_component__WEBPACK_IMPORTED_MODULE_7__["OwnersComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _owners_routing_module__WEBPACK_IMPORTED_MODULE_2__["OwnersRoutingModule"],
                    src_app_reusable_components_form_fields_form_fields_module__WEBPACK_IMPORTED_MODULE_6__["FormFieldsModule"],
                    ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"].forRoot(),
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                    angular7_data_table__WEBPACK_IMPORTED_MODULE_4__["DataTableModule"].forRoot(),
                ],
                providers: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/owners/owners.service.ts":
/*!************************************************!*\
  !*** ./src/app/pages/owners/owners.service.ts ***!
  \************************************************/
/*! exports provided: OwnersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnersService", function() { return OwnersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _config_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/variables */ "./src/app/config/variables.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class OwnersService {
    constructor(http) {
        this.http = http;
        this.owners = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    getAll() {
        return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + '/owner').subscribe((res) => {
            this.owners.next(res['data']);
        });
    }
    addOwner(ownerId) {
        return this.http.post(_config_variables__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + `/owner/addOwner/${ownerId}`, {});
    }
    deleteOwner(ownerId) {
        return this.http.delete(_config_variables__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + `/owner/deleteOwner/${ownerId}`);
    }
    addOwnerToStore(userId, storeId) {
        return this.http.post(_config_variables__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + `/owner/addOwnerToStore/${userId}/${storeId}`, {});
    }
    lockOne(itemId) {
        return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + `/owner/lock/${itemId}`);
    }
    unlockOne(itemId) {
        return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + `/owner/unlock/${itemId}`);
    }
}
OwnersService.ɵfac = function OwnersService_Factory(t) { return new (t || OwnersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
OwnersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OwnersService, factory: OwnersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OwnersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-owners-owners-module-es2015.js.map