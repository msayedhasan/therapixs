function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bikes-bikes-module"], {
  /***/
  "./src/app/pages/bikes/add-bike/add-bike.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/bikes/add-bike/add-bike.component.ts ***!
    \************************************************************/

  /*! exports provided: AddBikeComponent */

  /***/
  function srcAppPagesBikesAddBikeAddBikeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddBikeComponent", function () {
      return AddBikeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _bikes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../bikes.service */
    "./src/app/pages/bikes/bikes.service.ts");
    /* harmony import */


    var _categories_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../categories/categories.service */
    "./src/app/pages/categories/categories.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _reusable_components_form_fields_upload_multi_photos_upload_multi_photos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../reusable-components/form-fields/upload-multi-photos/upload-multi-photos.component */
    "./src/app/reusable-components/form-fields/upload-multi-photos/upload-multi-photos.component.ts");
    /* harmony import */


    var _reusable_components_form_fields_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../reusable-components/form-fields/input-text/input-text.component */
    "./src/app/reusable-components/form-fields/input-text/input-text.component.ts");
    /* harmony import */


    var _reusable_components_form_fields_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../reusable-components/form-fields/textarea/textarea.component */
    "./src/app/reusable-components/form-fields/textarea/textarea.component.ts");
    /* harmony import */


    var _reusable_components_form_fields_select_select_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../reusable-components/form-fields/select/select.component */
    "./src/app/reusable-components/form-fields/select/select.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return ["/bikes"];
    };

    var AddBikeComponent = /*#__PURE__*/function () {
      function AddBikeComponent(fb, bikesService, categoriesService, toastr, spinner, router) {
        _classCallCheck(this, AddBikeComponent);

        this.fb = fb;
        this.bikesService = bikesService;
        this.categoriesService = categoriesService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.router = router;
        this.form = this.fb.group({
          photos: this.fb.array([]),
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          condition: this.fb.group({
            _id: [],
            name: this.fb.group({
              en: [],
              ar: []
            })
          }),
          model: this.fb.group({
            _id: [],
            name: this.fb.group({
              en: [],
              ar: []
            })
          }),
          transmissionType: this.fb.group({
            _id: [],
            name: this.fb.group({
              en: [],
              ar: []
            })
          }),
          distance: this.fb.group({
            _id: [],
            name: this.fb.group({
              en: [],
              ar: []
            })
          }),
          paymentOption: this.fb.group({
            _id: [],
            name: this.fb.group({
              en: [],
              ar: []
            })
          }),
          capacity: this.fb.group({
            _id: [],
            name: this.fb.group({
              en: [],
              ar: []
            })
          }),
          color: [''],
          year: ['']
        });
        this.models = [{
          _id: 1,
          nameEn: 'Honda',
          nameAr: ''
        }, {
          _id: 2,
          nameEn: 'Peogeut',
          nameAr: ''
        }];
        this.selectedModel = {};
        this.conditions = [{
          _id: 1,
          nameEn: 'New',
          nameAr: 'جديد'
        }, {
          _id: 2,
          nameEn: 'Used',
          nameAr: 'مستعمل'
        }];
        this.selectedCondition = {};
        this.transmissionTypes = [{
          _id: 1,
          nameEn: 'Automatic',
          nameAr: 'اوتوماتيك'
        }, {
          _id: 2,
          nameEn: 'Manual',
          nameAr: 'يدوي'
        }];
        this.selectedTransmissionType = {};
        this.distances = [{
          _id: 1,
          nameEn: '0 - 10000',
          nameAr: ''
        }, {
          _id: 2,
          nameEn: '10000 - 20000',
          nameAr: ''
        }, {
          _id: 3,
          nameEn: '20000 - 30000',
          nameAr: ''
        }, {
          _id: 4,
          nameEn: '30000 - 40000',
          nameAr: ''
        }, {
          _id: 5,
          nameEn: '40000 - 50000',
          nameAr: ''
        }, {
          _id: 6,
          nameEn: '50000 - 60000',
          nameAr: ''
        }];
        this.selectedDistance = {};
        this.paymentOptions = [{
          _id: 1,
          nameEn: 'Cash',
          nameAr: ''
        }, {
          _id: 2,
          nameEn: 'Exchange',
          nameAr: ''
        }, {
          _id: 3,
          nameEn: 'Installments',
          nameAr: ''
        }];
        this.selectedPaymentOption = {};
        this.capacities = [{
          _id: 1,
          nameEn: '200',
          nameAr: ''
        }, {
          _id: 2,
          nameEn: '400',
          nameAr: ''
        }, {
          _id: 3,
          nameEn: '800',
          nameAr: ''
        }, {
          _id: 4,
          nameEn: '1000',
          nameAr: ''
        }, {
          _id: 5,
          nameEn: '1200',
          nameAr: ''
        }, {
          _id: 6,
          nameEn: '1400',
          nameAr: ''
        }, {
          _id: 7,
          nameEn: '1600',
          nameAr: ''
        }];
        this.selectedCapacity = {};
      }

      _createClass(AddBikeComponent, [{
        key: "selectModel",
        value: function selectModel(event) {
          this.selectedModel = {};

          if (event) {
            this.selectedModel = event;
          } else {
            this.selectedModel = {};
          }
        }
      }, {
        key: "selectCondition",
        value: function selectCondition(event) {
          this.selectedCondition = {};

          if (event) {
            this.selectedCondition = event;
          } else {
            this.selectedCondition = {};
          }
        }
      }, {
        key: "selectTransmissionType",
        value: function selectTransmissionType(event) {
          this.selectedTransmissionType = {};

          if (event) {
            this.selectedTransmissionType = event;
          } else {
            this.selectedTransmissionType = {};
          }
        }
      }, {
        key: "selectDistance",
        value: function selectDistance(event) {
          this.selectedDistance = {};

          if (event) {
            this.selectedDistance = event;
          } else {
            this.selectedDistance = {};
          }
        }
      }, {
        key: "selectPaymentOption",
        value: function selectPaymentOption(event) {
          this.selectedPaymentOption = {};

          if (event) {
            this.selectedPaymentOption = event;
          } else {
            this.selectedPaymentOption = {};
          }
        }
      }, {
        key: "selectCapacity",
        value: function selectCapacity(event) {
          this.selectedCapacity = {};

          if (event) {
            this.selectedCapacity = event;
          } else {
            this.selectedCapacity = {};
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this = this;

          this.spinner.show();

          if (this.form.get('year').value < 1980 || this.form.get('year').value > 2020) {
            this.spinner.hide();
            return this.toastr.error('Enter valid year', 'Error');
          }

          this.form.get('condition').get('_id').patchValue(this.selectedCondition['_id']);
          this.form.get('condition').get('name').get('en').patchValue(this.selectedCondition['nameEn']);
          this.form.get('condition').get('name').get('ar').patchValue(this.selectedCondition['nameAr']);
          this.form.get('model').get('_id').patchValue(this.selectedModel['_id']);
          this.form.get('model').get('name').get('en').patchValue(this.selectedModel['nameEn']);
          this.form.get('model').get('name').get('ar').patchValue(this.selectedModel['nameAr']);
          this.form.get('transmissionType').get('_id').patchValue(this.selectedTransmissionType['_id']);
          this.form.get('transmissionType').get('name').get('en').patchValue(this.selectedTransmissionType['nameEn']);
          this.form.get('transmissionType').get('name').get('ar').patchValue(this.selectedTransmissionType['nameAr']);
          this.form.get('distance').get('_id').patchValue(this.selectedDistance['_id']);
          this.form.get('distance').get('name').get('en').patchValue(this.selectedDistance['nameEn']);
          this.form.get('distance').get('name').get('ar').patchValue(this.selectedDistance['nameAr']);
          this.form.get('paymentOption').get('_id').patchValue(this.selectedPaymentOption['_id']);
          this.form.get('paymentOption').get('name').get('en').patchValue(this.selectedPaymentOption['nameEn']);
          this.form.get('paymentOption').get('name').get('ar').patchValue(this.selectedPaymentOption['nameAr']);
          this.form.get('capacity').get('_id').patchValue(this.selectedCapacity['_id']);
          this.form.get('capacity').get('name').get('en').patchValue(this.selectedCapacity['nameEn']);
          this.form.get('capacity').get('name').get('ar').patchValue(this.selectedCapacity['nameAr']);
          console.log(this.form.value);
          var formData = new FormData();

          for (var key in this.form.value) {
            if (key === 'photos') {
              for (var i = 0; i < this.form.value[key].length; i++) {
                formData.append(key, this.form.value[key][i]);
              }
            } else {
              // contains object
              formData.append(key, JSON.stringify(this.form.value[key]));
            }
          }

          this.bikesService.addOne(formData).subscribe(function (res) {
            console.log(res);
            _this.photos = [];

            _this.form.reset();

            _this.toastr.info(res['message'], 'Info');

            _this.router.navigate(['/bikes']);

            _this.spinner.hide();
          }, function (error) {
            console.log(error);

            _this.toastr.error(error.error.message, 'Error'); // this.error.next(error.error.message);


            _this.spinner.hide();
          });
          this.spinner.hide();
        }
      }]);

      return AddBikeComponent;
    }();

    AddBikeComponent.ɵfac = function AddBikeComponent_Factory(t) {
      return new (t || AddBikeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bikes_service__WEBPACK_IMPORTED_MODULE_2__["BikesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_categories_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    AddBikeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddBikeComponent,
      selectors: [["app-add-bike"]],
      decls: 30,
      vars: 83,
      consts: [[1, "grid-center-noGutter"], [1, "col-20_sm-22_xs-23", "grid-center-noGutter", "content"], [1, "title", "col-24", "grid-center"], [1, "form", "col-23"], [1, "grid-middle-noGutter"], [1, "form-group", "grid-center-middle-noGutter", "col-24"], [1, "col-24", "grid-center"], [3, "photos", "control"], ["type", "text", 1, "col-11_sm-24", 3, "label", "fieldId", "required", "placeholder", "tooltipMsg", "control", "fieldClass"], ["type", "text", 1, "col-11_sm-24", "grid-right", 3, "label", "fieldId", "placeholder", "tooltipMsg", "control", "fieldClass"], ["type", "number", 1, "col-11_sm-24", 3, "label", "fieldId", "required", "placeholder", "control", "fieldClass"], [1, "col-11_sm-24", "grid-right", 3, "label", "fieldId", "ItemsList", "placeholder", "fieldClass", "required", "itemselected"], [1, "col-11_sm-24", 3, "label", "fieldId", "ItemsList", "placeholder", "fieldClass", "required", "itemselected"], ["type", "text", 1, "col-11_sm-24", "grid-right", 3, "label", "fieldId", "required", "placeholder", "tooltipMsg", "control", "fieldClass"], [1, "col-24", "grid-right"], ["type", "submit", 1, "btn", "col-3_sm-5_xs-6", "color1", "round", 3, "disabled", "click"], ["type", "button", 1, "btn", "col-3_sm-5_xs-6", "color2", "round", 3, "routerLink"]],
      template: function AddBikeComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-input-text", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-select", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemselected", function AddBikeComponent_Template_app_select_itemselected_17_listener($event) {
            return ctx.selectModel($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "app-select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemselected", function AddBikeComponent_Template_app_select_itemselected_18_listener($event) {
            return ctx.selectCondition($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "app-select", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemselected", function AddBikeComponent_Template_app_select_itemselected_19_listener($event) {
            return ctx.selectTransmissionType($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "app-select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemselected", function AddBikeComponent_Template_app_select_itemselected_20_listener($event) {
            return ctx.selectDistance($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "app-select", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemselected", function AddBikeComponent_Template_app_select_itemselected_21_listener($event) {
            return ctx.selectPaymentOption($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "app-select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemselected", function AddBikeComponent_Template_app_select_itemselected_22_listener($event) {
            return ctx.selectCapacity($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-input-text", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-input-text", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddBikeComponent_Template_button_click_26_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Submit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 74, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 76, "add")), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 78, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 80, "Bike")), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("photos", ctx.photos)("control", ctx.form.get("photos"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Name")("fieldId", "name")("required", true)("placeholder", "Bike Name")("tooltipMsg", "Name")("control", ctx.form.get("name"))("fieldClass", "col-19_xlg-18_lg-17_md-24");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Description")("fieldId", "description")("placeholder", "Bike description")("tooltipMsg", "Bike description")("control", ctx.form.get("description"))("fieldClass", "col-19_xlg-18_lg-17_md-24");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Price")("fieldId", "price")("required", true)("placeholder", "Bike Cost")("control", ctx.form.get("price"))("fieldClass", "col-19_xlg-18_lg-17_md-24");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Model")("fieldId", "model")("ItemsList", ctx.models)("placeholder", "Choose transmission type")("fieldClass", "col-18_md-24")("required", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Condition")("fieldId", "condition")("ItemsList", ctx.conditions)("placeholder", "Choose condition")("fieldClass", "col-18_md-24")("required", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Transmission Type")("fieldId", "transmissionType")("ItemsList", ctx.transmissionTypes)("placeholder", "Choose transmission type")("fieldClass", "col-18_md-24")("required", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Distance")("fieldId", "distance")("ItemsList", ctx.distances)("placeholder", "Choose distance")("fieldClass", "col-18_md-24")("required", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Payment Option")("fieldId", "paymentOption")("ItemsList", ctx.paymentOptions)("placeholder", "Choose payment option")("fieldClass", "col-18_md-24")("required", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Capacity")("fieldId", "capacity")("ItemsList", ctx.capacities)("placeholder", "Choose capacity")("fieldClass", "col-18_md-24")("required", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Color")("fieldId", "color")("required", true)("placeholder", "Bike Color")("tooltipMsg", "Color")("control", ctx.form.get("color"))("fieldClass", "col-19_xlg-18_lg-17_md-24");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Year")("fieldId", "year")("required", true)("placeholder", "Bike year")("control", ctx.form.get("year"))("fieldClass", "col-19_xlg-18_lg-17_md-24");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](82, _c0));
        }
      },
      directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerComponent"], _reusable_components_form_fields_upload_multi_photos_upload_multi_photos_component__WEBPACK_IMPORTED_MODULE_7__["UploadMultiPhotosComponent"], _reusable_components_form_fields_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_8__["InputTextComponent"], _reusable_components_form_fields_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_9__["TextareaComponent"], _reusable_components_form_fields_select_select_component__WEBPACK_IMPORTED_MODULE_10__["SelectComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["LowerCasePipe"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  background-color: #efedf2;\n}\n\n.content[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background-color: #fffdfe;\n  border: 1px solid #f1f1f1;\n  padding-bottom: 15px !important;\n  margin-bottom: 20px;\n  box-shadow: 0 0px 8px 1px rgba(0, 0, 0, 0.05);\n  margin-top: 20px;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0c425d;\n  margin-bottom: 15px;\n  background-color: #f9f9f9;\n  border-bottom: 1px solid #f1f1f1;\n  padding: 10px !important;\n  border-radius: 10px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  font-size: 16px;\n}\n\n.textarea-maxWidth[_ngcontent-%COMP%] {\n  max-width: 81.7%;\n}\n\n[_nghost-%COMP%]     app-ng2tel .iti.iti--allow-dropdown {\n  width: 100%;\n}\n\n.activeModalIcon[_ngcontent-%COMP%] {\n  background: #1f1a5f !important;\n  border-radius: 10px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.actions[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  padding: 4px;\n  vertical-align: middle;\n  background-color: red;\n  color: white;\n  border-radius: 50%;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmlrZXMvYWRkLWJpa2UvRTpcXFVudGl0bGVkIEZvbGRlclxccHJpdmF0ZVxccHJvamVjdHNcXGZ1bGxfc3RhY2tcXG1vdG9iYXJcXG1vdG9iYXJfYWRtaW4vc3JjXFxhcHBcXHBhZ2VzXFxiaWtlc1xcYWRkLWJpa2VcXGFkZC1iaWtlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9iaWtlcy9hZGQtYmlrZS9FOlxcVW50aXRsZWQgRm9sZGVyXFxwcml2YXRlXFxwcm9qZWN0c1xcZnVsbF9zdGFja1xcbW90b2JhclxcbW90b2Jhcl9hZG1pbi9zcmNcXHNjc3NcXGFic3RyYWN0c1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9wYWdlcy9iaWtlcy9hZGQtYmlrZS9hZGQtYmlrZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGNBQUE7RUFDQSx5QkNrQnNCO0FDbEIxQjs7QUZHQTtFQUNJLG1CQUFBO0VBQ0EseUJDZ0JzQjtFRGZ0Qix5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtFQUNBLGdCQUFBO0FFQUo7O0FGR0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQ2pCSztFRGtCTCxtQkFBQTtFQUNBLHlCQ0pzQjtFREt0QixnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUVBSjs7QUZHQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FFQUo7O0FGR0E7RUFDSSxnQkFBQTtBRUFKOztBRkdBO0VBQ0ksV0FBQTtBRUFKOztBRkdBO0VBRUksOEJBQUE7RUFDQSxtQkFBQTtBRURKOztBRklBO0VBQ0kscUJBQUE7QUVESjs7QUZFSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUVBUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jpa2VzL2FkZC1iaWtlL2FkZC1iaWtlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3Njc3MvYWJzdHJhY3RzL3ZhcmlhYmxlc1wiO1xuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWJhY2tncm91bmQtY29sb3I7XG59XG5cbi5jb250ZW50IHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjYXJkLWJvZHk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgYm94LXNoYWRvdzogMCAwcHggOHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICRjb2xvcjE7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FyZC1oZWFkZXItYmc7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXI7XG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4udGV4dGFyZWEtbWF4V2lkdGgge1xuICAgIG1heC13aWR0aDogODEuNyU7XG59XG5cbjpob3N0IDo6bmctZGVlcCBhcHAtbmcydGVsIC5pdGkuaXRpLS1hbGxvdy1kcm9wZG93biB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5hY3RpdmVNb2RhbEljb24ge1xuICAgIC8vIGJhY2tncm91bmQ6ICM0NmI4ZGEgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiAjMWYxYTVmICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBpIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG4iLCIvL2NvbG9yc1xuJHdoaXRlIDogd2hpdGU7XG4kY29sb3IxOiAjMGM0MjVkO1xuJGNvbG9yMjogI2E4ZDJiZTtcbiRjb2xvcjM6ICM0ODk5YzI7XG4kY29sb3I0OiAjMWY3N2EzO1xuXG4kY29sb3I1IDogI2Y5YWU0ZTtcbiRjb2xvcjU1OiAjZDY4NTIyO1xuXG4kYm9yZGVyICAgICAgICAgICAgICAgICA6ICNmMWYxZjE7XG4kZGF0YS10YWJsZS1ib3JkZXIgICAgICA6ICNlOWU5ZTk7XG4kZ3JheTIgICAgICAgICAgICAgICAgICA6ICNlMmUyZTI7XG4kZ3JheTMgICAgICAgICAgICAgICAgICA6ICM3NTc1NzU7XG4kdHJhc2gtY29sb3IgICAgICAgICAgICA6ICNDOTMwMkM7XG4kZm9udC1jb2xvciAgICAgICAgICAgICA6ICM1NTU7XG4kYWN0aXZlLWJyZWFkY3J1bWItY29sb3I6ICMzNDM0MzQ7XG4kY2FyZC1oZWFkZXItYmcgICAgICAgICA6ICNmOWY5Zjk7IC8vI2VmZWZlZjsgLy8jZjlmOWY5O1xuJHBsYWNlaG9sZGVyLWNvbG9yICAgICAgOiAjYjNiM2IzO1xuXG4vLyBiYWNrZ3JvdW5kIGNvbG9yXG4kbWFpbi1iYWNrZ3JvdW5kLWNvbG9yICA6ICNlZmVkZjI7XG4kaGVhZGVyLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuJGRhdGEtdGFibGUtYm94ICAgICAgICAgOiAjZmZmZGZlOyAvLyNmN2Y3Zjc7XG4kY2FyZC1ib2R5ICAgICAgICAgICAgICA6ICNmZmZkZmU7XG5cbi8vIERhc2hib2FyZFxuJG1hcmdpbkJldHdlZW5DYXJkczogMjJweDtcbiRheGlzRm9udFNpemUgICAgICA6IDEycHg7XG4kc21hbGxBeGlzRm9udFNpemUgOiAxMHB4O1xuXG4vL2hlYWRlclxuJHByb2ZpbGUtbWVudS1jb2xvcjogI2Y5ZjlmOTtcbiRiaWxsLWNvbG9yICAgICAgICA6ICM5YmEyYWE7XG4kYmlsbC1ob3Zlci1jb2xvciAgOiAjNzM4MThmO1xuXG4vL0xheW91dCBWYXJpYWJsZXNcblxuJGhlYWRlci1oZWlnaHQgOiA1NXB4O1xuJHNpZGVNZW51LXdpZHRoOiAyMDBweDtcblxuXG4vL2xvZ2luXG4kbG95YWxpdHktY29sb3IgIDogIzg4N2Y3ZjtcbiRsb2dpbi1ib3gtY29sb3IgOiAjZjVmMmYwO1xuXG4vL21haWxcbiRtYWlsLWNoZWNrYm94LWNvbG9yOiAjMDA3M2FhO1xuJHVzZXItbWFpbC1jb2xvciAgICA6ICMyOTJiMmM7XG5cbi8vcHJvZmlsZVxuJGFjdGl2ZS1jb2xvciAgICAgOiAjZjRmNmY5O1xuJGljb24tY29sb3IgICAgICAgOiAjOTU5Y2I2O1xuJGxhYmVsLXRpdGxlLWNvbG9yOiAjNTA1NjZhO1xuXG4vL2VtYWlsIHRlbXBsYXRlc1xuJGVtYWlsLWJsdWUtY29sb3I6ICMwZjQxNWQ7XG4kZW1haWwtZ3JheS1jb2xvcjogIzVmNjA2MDtcbiRlbWFpbC1zeWFuLWNvbG9yOiAjYTJkOWMyO1xuJGVtYWlsLW9yYWduZS1jb2xvcjogI2ZmYWM1MjtcblxuLy9mb250c1xuJGZvbnQyOCAgICAgICAgICAgOiAyOHB4O1xuJGZvbnQyNCAgICAgICAgICAgOiAyNHB4O1xuJGZvbnQxOCAgICAgICAgICAgOiAxOHB4O1xuJGZvbnQxNiAgICAgICAgICAgOiAxNnB4O1xuJGZvbnQxNCAgICAgICAgICAgOiAxNHB4O1xuJGZvbnQxMiAgICAgICAgICAgOiAxMnB4O1xuJGZvbnQxMCAgICAgICAgICAgOiAxMHB4O1xuJGZvbnQtd2VpZ2h0LTYwMCAgOiA2MDA7XG4kZm9udC13ZWlnaHQtNTAwICA6IDUwMDtcbiRwbGFjZWhvbGRlci1mb250IDogMTJweDtcbiRsYWJlbC1mb250ICAgICAgIDogMTRweDtcbiRjYXJkLWhlYWRlci1mb250IDogMTZweDtcblxuJGRhdGEtdGFibGUtaGVhZGVyLTEzNjYgOiAxNHB4O1xuJGRhdGEtdGFibGUtaGVhZGVyLTE5MjAgOiAxNnB4O1xuJGRhdGEtdGFibGUtYm9keS0xMzY2IDogMTJweDtcbiRkYXRhLXRhYmxlLWJvZHktMTkyMDogMTZweDtcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVkZjI7XG59XG5cbi5jb250ZW50IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmRmZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgcGFkZGluZy1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm94LXNoYWRvdzogMCAwcHggOHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMGM0MjVkO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5idXR0b24ge1xuICBtYXJnaW46IDAgMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4udGV4dGFyZWEtbWF4V2lkdGgge1xuICBtYXgtd2lkdGg6IDgxLjclO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgYXBwLW5nMnRlbCAuaXRpLml0aS0tYWxsb3ctZHJvcGRvd24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFjdGl2ZU1vZGFsSWNvbiB7XG4gIGJhY2tncm91bmQ6ICMxZjFhNWYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmFjdGlvbnMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uYWN0aW9ucyBpIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiA0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddBikeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-bike',
          templateUrl: './add-bike.component.html',
          styleUrls: ['./add-bike.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _bikes_service__WEBPACK_IMPORTED_MODULE_2__["BikesService"]
        }, {
          type: _categories_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/bikes/bikes-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/bikes/bikes-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: BikesRoutingModule */

  /***/
  function srcAppPagesBikesBikesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BikesRoutingModule", function () {
      return BikesRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _bikes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./bikes.component */
    "./src/app/pages/bikes/bikes.component.ts");
    /* harmony import */


    var _add_bike_add_bike_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-bike/add-bike.component */
    "./src/app/pages/bikes/add-bike/add-bike.component.ts");
    /* harmony import */


    var _edit_bike_edit_bike_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./edit-bike/edit-bike.component */
    "./src/app/pages/bikes/edit-bike/edit-bike.component.ts");

    var routes = [{
      path: '',
      component: _bikes_component__WEBPACK_IMPORTED_MODULE_2__["BikesComponent"]
    }, {
      path: 'add',
      component: _add_bike_add_bike_component__WEBPACK_IMPORTED_MODULE_3__["AddBikeComponent"]
    }, {
      path: 'edit/:id',
      component: _edit_bike_edit_bike_component__WEBPACK_IMPORTED_MODULE_4__["EditBikeComponent"]
    }];

    var BikesRoutingModule = function BikesRoutingModule() {
      _classCallCheck(this, BikesRoutingModule);
    };

    BikesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BikesRoutingModule
    });
    BikesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BikesRoutingModule_Factory(t) {
        return new (t || BikesRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BikesRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BikesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/bikes/bikes.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/bikes/bikes.component.ts ***!
    \************************************************/

  /*! exports provided: BikesComponent */

  /***/
  function srcAppPagesBikesBikesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BikesComponent", function () {
      return BikesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var angular7_data_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular7-data-table */
    "./node_modules/angular7-data-table/__ivy_ngcc__/esm2015/angular7-data-table.js");
    /* harmony import */


    var _bikes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bikes.service */
    "./src/app/pages/bikes/bikes.service.ts");
    /* harmony import */


    var _stores_stores_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../stores/stores.service */
    "./src/app/pages/stores/stores.service.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_export_as__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-export-as */
    "./node_modules/ngx-export-as/__ivy_ngcc__/fesm2015/ngx-export-as.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-bootstrap/tooltip */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
    /* harmony import */


    var _reusable_components_form_fields_input_radio_input_radio_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../reusable-components/form-fields/input-radio/input-radio.component */
    "./src/app/reusable-components/form-fields/input-radio/input-radio.component.ts");
    /* harmony import */


    var _reusable_components_form_fields_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../reusable-components/form-fields/date-picker/date-picker.component */
    "./src/app/reusable-components/form-fields/date-picker/date-picker.component.ts");
    /* harmony import */


    var _reusable_components_form_fields_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../reusable-components/form-fields/input-text/input-text.component */
    "./src/app/reusable-components/form-fields/input-text/input-text.component.ts");
    /* harmony import */


    var _reusable_components_form_fields_select_select_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../reusable-components/form-fields/select/select.component */
    "./src/app/reusable-components/form-fields/select/select.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function BikesComponent_ng_container_61_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
      }
    }

    function BikesComponent_ng_template_62_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 50);
      }

      if (rf & 2) {
        var item_r46 = ctx.item;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r46.photos ? item_r46.photos[0] : "../../../../../assets/placeholder.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function BikesComponent_ng_template_62_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r47 = ctx.item;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r47.profitPercentage && item_r47.profitPercentage !== 0 ? item_r47.profitPercentage + "%" : item_r47.profitValue && item_r47.profitValue !== 0 ? item_r47.profitValue + " EGP" : 0);
      }
    }

    function BikesComponent_ng_template_62_ng_template_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r48 = ctx.item;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r48.discountPercentage && item_r48.discountPercentage !== 0 ? item_r48.discountPercentage + "%" : item_r48.discountValue && item_r48.discountValue !== 0 ? item_r48.discountValue + " EGP" : 0);
      }
    }

    function BikesComponent_ng_template_62_ng_template_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r49 = ctx.item;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r49.price);
      }
    }

    function BikesComponent_ng_template_62_ng_template_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r50 = ctx.item;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r50.creator ? item_r50.creator.name : "-");
      }
    }

    function BikesComponent_ng_template_62_ng_template_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r51 = ctx.item;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r51.store ? item_r51.store.name : "-");
      }
    }

    function BikesComponent_ng_template_62_ng_template_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r52 = ctx.item;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r52.capacity == null ? null : item_r52.capacity.en);
      }
    }

    function BikesComponent_ng_template_62_ng_template_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r53 = ctx.item;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r53.condition == null ? null : item_r53.condition.en);
      }
    }

    function BikesComponent_ng_template_62_ng_template_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r54 = ctx.item;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r54.model == null ? null : item_r54.model.en);
      }
    }

    function BikesComponent_ng_template_62_ng_template_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r55 = ctx.item;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r55.distance == null ? null : item_r55.distance.en);
      }
    }

    function BikesComponent_ng_template_62_ng_template_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r56 = ctx.item;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r56.year);
      }
    }

    function BikesComponent_ng_template_62_ng_template_37_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Sold");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }
    }

    function BikesComponent_ng_template_62_ng_template_37_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "active");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }
    }

    function BikesComponent_ng_template_62_ng_template_37_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "inactive");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }
    }

    function BikesComponent_ng_template_62_ng_template_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BikesComponent_ng_template_62_ng_template_37_ng_container_1_Template, 3, 0, "ng-container", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BikesComponent_ng_template_62_ng_template_37_ng_container_2_Template, 3, 0, "ng-container", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, BikesComponent_ng_template_62_ng_template_37_ng_container_3_Template, 3, 0, "ng-container", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r57 = ctx.item;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r57.sold);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r57.active);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r57.active);
      }
    }

    var _c0 = function _c0(a1) {
      return ["./edit/", a1];
    };

    function BikesComponent_ng_template_62_ng_template_40_Template(rf, ctx) {
      if (rf & 1) {
        var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "colorize");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BikesComponent_ng_template_62_ng_template_40_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r63);

          var item_r61 = ctx.item;

          var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](69);

          item_r61.store ? null : ctx_r62.openModal(_r8, item_r61._id);
          return ctx_r62.getStoresList();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BikesComponent_ng_template_62_ng_template_40_Template_a_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r63);

          var item_r61 = ctx.item;

          var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](73);

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](71);

          return item_r61.active ? ctx_r64.openModal(_r12, item_r61._id) : ctx_r64.openModal(_r10, item_r61._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BikesComponent_ng_template_62_ng_template_40_Template_a_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r63);

          var item_r61 = ctx.item;

          var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](77);

          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](79);

          return item_r61.sold ? ctx_r65.openModal(_r16, item_r61._id) : ctx_r65.openModal(_r18, item_r61._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BikesComponent_ng_template_62_ng_template_40_Template_a_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r63);

          var item_r61 = ctx.item;

          var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](67);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](65);

          return item_r61.discount ? ctx_r66.openModal(_r6, item_r61._id) : ctx_r66.openModal(_r4, item_r61._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "qr_code_2");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BikesComponent_ng_template_62_ng_template_40_Template_a_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r63);

          var item_r61 = ctx.item;

          var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](75);

          return ctx_r67.openModal(_r14, item_r61._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r61 = ctx.item;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c0, item_r61._id))("tooltip", "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", item_r61.store ? "" : "lock")("tooltip", item_r61.store ? "" : "add to store");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r61.store ? "" : "store");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", item_r61.active ? "trash" : "lock")("tooltip", item_r61.active ? "deactivate" : "Activate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r61.active ? "block" : "check_circle_outline");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", item_r61.sold ? "lock" : "trash")("tooltip", item_r61.sold ? "Available" : "Sold");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r61.sold ? "done_outline" : "done_all");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](item_r61.discount ? "trash" : "lock");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tooltip", item_r61.discount ? "Delete discount" : "Add discount");
      }
    }

    function BikesComponent_ng_template_62_Template(rf, ctx) {
      if (rf & 1) {
        var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "data-table", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reload", function BikesComponent_ng_template_62_Template_data_table_reload_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r69);

          var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r68.reloadItems($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "data-table-column", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, BikesComponent_ng_template_62_ng_template_3_Template, 1, 1, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "data-table-column", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "data-table-column", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, BikesComponent_ng_template_62_ng_template_7_Template, 2, 1, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "data-table-column", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, BikesComponent_ng_template_62_ng_template_10_Template, 2, 1, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "data-table-column", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, BikesComponent_ng_template_62_ng_template_13_Template, 2, 1, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "data-table-column", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, BikesComponent_ng_template_62_ng_template_16_Template, 2, 1, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "data-table-column", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, BikesComponent_ng_template_62_ng_template_19_Template, 2, 1, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "data-table-column", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, BikesComponent_ng_template_62_ng_template_22_Template, 2, 1, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "data-table-column", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, BikesComponent_ng_template_62_ng_template_25_Template, 2, 1, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "data-table-column", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, BikesComponent_ng_template_62_ng_template_28_Template, 2, 1, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "data-table-column", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, BikesComponent_ng_template_62_ng_template_31_Template, 2, 1, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "data-table-column", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, BikesComponent_ng_template_62_ng_template_34_Template, 2, 1, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "data-table-column", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, BikesComponent_ng_template_62_ng_template_37_Template, 4, 3, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "data-table-column", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, BikesComponent_ng_template_62_ng_template_40_Template, 18, 16, "ng-template", 49, 42, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx_r3.tableElements)("itemCount", ctx_r3.itemCount)("pageLimits", ctx_r3.limits)("limit", ctx_r3.limit)("pagination", true)("noDataMessage", "No data to show");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 50)("property", "image")("resizable", true)("header", "Img");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("property", "name")("header", "Name")("sortable", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("property", "profit")("header", "Profit")("sortable", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("property", "discount")("header", "Discount")("sortable", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("header", "Price");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("property", "creator")("header", "Creator");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("property", "store")("header", "Store");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("header", "Capacity")("sortable", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("header", "Condition")("sortable", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("header", "Model")("sortable", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("header", "Distance")("sortable", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("header", "Year")("sortable", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 68)("header", "Status");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 160);
      }
    }

    function BikesComponent_ng_template_64_ng_container_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-input-text", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function BikesComponent_ng_template_64_ng_container_12_Template_app_input_text_change_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r73);

          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r72.discountForm.get("discountPercentage").patchValue(0);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", "Discount value")("fieldId", "discountValue")("placeholder", "Discount on this category")("control", ctx_r70.discountForm.get("discountValue"))("fieldClass", "col-19_xlg-18_lg-17_md-24");
      }
    }

    function BikesComponent_ng_template_64_ng_container_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-input-text", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function BikesComponent_ng_template_64_ng_container_13_Template_app_input_text_change_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r75);

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r74.discountForm.get("discountValue").patchValue(0);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", "Discount percent")("fieldId", "discountPercentage")("placeholder", "Discount on this category")("control", ctx_r71.discountForm.get("discountPercentage"))("fieldClass", "col-19_xlg-18_lg-17_md-24");
      }
    }

    var _c1 = function _c1() {
      return ["percent", "value"];
    };

    function BikesComponent_ng_template_64_Template(rf, ctx) {
      if (rf & 1) {
        var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Do you want to add this bike to a store? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-input-radio", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, BikesComponent_ng_template_64_ng_container_12_Template, 2, 5, "ng-container", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, BikesComponent_ng_template_64_ng_container_13_Template, 2, 5, "ng-container", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "app-date-picker", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BikesComponent_ng_template_64_Template_button_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r77);

          var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r76.addDiscount();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Confirm ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BikesComponent_ng_template_64_Template_button_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r77);

          var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r78.modalRef.hide();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", "Discount type")("fieldId", "discountType")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c1))("control", ctx_r5.discountForm.get("discountType"))("fieldClass", "col-19_xlg-18_lg-17_md-24");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.discountForm.get("discountType").value === "value");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.discountForm.get("discountType").value === "percent");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", "Valid to")("fieldId", "validTill")("placeholder", "End at")("control", ctx_r5.discountForm.get("validTill"))("fieldClass", "col-19_xlg-18_lg-17_md-24");
      }
    }

    function BikesComponent_ng_template_66_Template(rf, ctx) {
      if (rf & 1) {
        var _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Do you want to Delete discount from This bike ? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BikesComponent_ng_template_66_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r80);

          var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r79.deleteDiscount();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Confirm ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BikesComponent_ng_template_66_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r80);

          var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r81.modalRef.hide();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function BikesComponent_ng_template_68_Template(rf, ctx) {
      if (rf & 1) {
        var _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Do you want to add this bike to a store? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "app-select", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("itemselected", function BikesComponent_ng_template_68_Template_app_select_itemselected_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r83);

          var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r82.selectStore($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BikesComponent_ng_template_68_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r83);

          var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r84.addBikeToStore();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Confirm ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BikesComponent_ng_template_68_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r83);

          var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r85.modalRef.hide();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", "Store")("fieldId", "store")("ItemsList", ctx_r9.selectStoresList)("placeholder", "Choose store")("fieldClass", "col-18_md-24")("required", true);
      }
    }

    function BikesComponent_ng_template_70_Template(rf, ctx) {
      if (rf & 1) {
        var _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Do you want to activate This Element ? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BikesComponent_ng_template_70_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r87);

          var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r86.activateElement();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Confirm ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BikesComponent_ng_template_70_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r87);

          var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r88.modalRef.hide();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function BikesComponent_ng_template_72_Template(rf, ctx) {
      if (rf & 1) {
        var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Do you want to deactivate This Element ? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BikesComponent_ng_template_72_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r90);

          var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r89.deactivateElement();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Confirm ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BikesComponent_ng_template_72_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r90);

          var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r91.modalRef.hide();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function BikesComponent_ng_template_74_Template(rf, ctx) {
      if (rf & 1) {
        var _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Do you want to Delete This Element ? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BikesComponent_ng_template_74_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r93);

          var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r92.deleteElement();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Confirm ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BikesComponent_ng_template_74_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r93);

          var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r94.modalRef.hide();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function BikesComponent_ng_template_76_Template(rf, ctx) {
      if (rf & 1) {
        var _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Do you want to change this element status to be available? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BikesComponent_ng_template_76_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r96);

          var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r95.availableElement();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Confirm ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BikesComponent_ng_template_76_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r96);

          var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r97.modalRef.hide();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function BikesComponent_ng_template_78_Template(rf, ctx) {
      if (rf & 1) {
        var _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Do you want to change this element status to be sold out? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BikesComponent_ng_template_78_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r99);

          var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r98.soldElement();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Confirm ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BikesComponent_ng_template_78_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r99);

          var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r100.modalRef.hide();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c2 = function _c2() {
      return ["./add"];
    };

    var BikesComponent = /*#__PURE__*/function () {
      function BikesComponent(bikesService, storesService, modalService, toastr, spinner, fb, exportAsService) {
        _classCallCheck(this, BikesComponent);

        this.bikesService = bikesService;
        this.storesService = storesService;
        this.modalService = modalService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.fb = fb;
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
          validTill: ['']
        });
        this.exportAsConfig = {
          type: 'pdf',
          elementIdOrContent: 'my-table',
          options: {
            jsPDF: {
              orientation: 'landscape'
            }
          }
        };
      }

      _createClass(BikesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.spinner.show();
          this.bikesService.getAll();
          this.bikesService.bikes.subscribe(function (data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!data) {
                        _context.next = 8;
                        break;
                      }

                      this.items = data;
                      data.sort(function (a, b) {
                        return a.active === b.active ? 0 : !a.active ? -1 : 1;
                      });
                      this.itemResource = new angular7_data_table__WEBPACK_IMPORTED_MODULE_2__["DataTableResource"](data);
                      _context.next = 6;
                      return this.itemResource.count();

                    case 6:
                      this.itemCount = _context.sent;
                      this.reloadItems({
                        offset: 0,
                        limit: this.limit
                      });

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          });
          this.spinner.hide();
        }
      }, {
        key: "reloadItems",
        value: function reloadItems(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!this.itemResource) {
                      _context2.next = 4;
                      break;
                    }

                    _context2.next = 3;
                    return this.itemResource.query(event);

                  case 3:
                    this.tableElements = _context2.sent;

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "FilterRecords",
        value: function FilterRecords(FilterRecord) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.tableElements = this.items;

                    if (FilterRecord !== '') {
                      this.tableElements = this.items.filter(function (item) {
                        var _a;

                        return item.name.toLowerCase().includes(FilterRecord) || item.color.toLowerCase().includes(FilterRecord) || item.price.toString().includes(FilterRecord) || item.distance.en.toString().includes(FilterRecord) || item.year.toString().includes(FilterRecord) || item.capacity.en.toLowerCase().includes(FilterRecord) || item.transmissionType.en.toLowerCase().includes(FilterRecord) || item.paymentOption.en.toLowerCase().includes(FilterRecord) || item.model.en.toLowerCase().includes(FilterRecord) || item.creator.name.toLowerCase().includes(FilterRecord) || ((_a = item.store) === null || _a === void 0 ? void 0 : _a.name.toLowerCase().includes(FilterRecord));
                      });
                    }

                    this.itemResource = new angular7_data_table__WEBPACK_IMPORTED_MODULE_2__["DataTableResource"](this.tableElements);
                    _context3.next = 5;
                    return this.itemResource.count();

                  case 5:
                    this.itemCount = _context3.sent;
                    this.reloadItems({
                      offset: 0,
                      limit: this.limit
                    });

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "getStoresList",
        value: function getStoresList() {
          var _this3 = this;

          this.spinner.show();
          this.storesService.getAll();
          this.storesService.stores.subscribe(function (data) {
            if (data) {
              _this3.selectStoresList = data.map(function (x) {
                return {
                  _id: x['_id'],
                  nameEn: "".concat(x['name']),
                  nameAr: ""
                };
              });
            }
          });
          this.spinner.hide();
        }
      }, {
        key: "selectStore",
        value: function selectStore(event) {
          if (event) {
            this.selectedStoreId = event._id;
          }
        } // End select dropdown

      }, {
        key: "addBikeToStore",
        value: function addBikeToStore() {
          var _this4 = this;

          this.spinner.show();
          this.modalRef.hide();
          this.bikesService.addBikeToStore(this.itemId, this.selectedStoreId).subscribe(function (res) {
            _this4.toastr.info(res['message'], 'Info');

            _this4.items = [];

            _this4.bikesService.getAll();
          }, function (error) {
            console.log(error);

            _this4.toastr.error(error.error.message, 'Error'); // this.error.next(error.error.message);

          });
          this.spinner.hide();
        }
      }, {
        key: "openModal",
        value: function openModal(template, id) {
          this.itemId = id;
          this.modalRef = this.modalService.show(template);
        }
      }, {
        key: "addDiscount",
        value: function addDiscount() {
          var _this5 = this;

          this.spinner.show();
          this.modalRef.hide();
          this.bikesService.addDiscount(this.discountForm.value, this.itemId).subscribe(function (res) {
            console.log(res);

            _this5.toastr.info(res['message'], 'Info');

            _this5.items = [];

            _this5.discountForm.reset();

            _this5.bikesService.getAll();
          }, function (error) {
            console.log(error);

            _this5.toastr.error(error.error.message, 'Error'); // this.error.next(error.error.message);

          });
          this.spinner.hide();
        }
      }, {
        key: "deleteDiscount",
        value: function deleteDiscount() {
          var _this6 = this;

          this.spinner.show();
          this.modalRef.hide();
          this.bikesService.deleteDiscount(this.itemId).subscribe(function (res) {
            console.log(res);

            _this6.toastr.info(res['message'], 'Info');

            _this6.items = [];

            _this6.bikesService.getAll();
          }, function (error) {
            console.log(error);

            _this6.toastr.error(error.error.message, 'Error'); // this.error.next(error.error.message);

          });
          this.spinner.hide();
        }
      }, {
        key: "deleteElement",
        value: function deleteElement() {
          var _this7 = this;

          this.spinner.show();
          this.modalRef.hide();
          this.bikesService.deleteOne(this.itemId).subscribe(function (res) {
            console.log(res);

            _this7.toastr.info(res['message'], 'Info');

            _this7.bikesService.getAll();
          }, function (error) {
            console.log(error);

            _this7.toastr.error(error.error.message, 'Error'); // this.error.next(error.error.message);

          });
          this.spinner.hide();
        }
      }, {
        key: "activateElement",
        value: function activateElement() {
          var _this8 = this;

          this.spinner.show();
          this.modalRef.hide();
          this.bikesService.activateOne(this.itemId).subscribe(function (res) {
            console.log(res);

            _this8.toastr.info(res['message'], 'Info');

            _this8.items = [];

            _this8.bikesService.getAll();
          }, function (error) {
            console.log(error);

            _this8.toastr.error(error.error.message, 'Error'); // this.error.next(error.error.message);

          });
          this.spinner.hide();
        }
      }, {
        key: "deactivateElement",
        value: function deactivateElement() {
          var _this9 = this;

          this.spinner.show();
          this.modalRef.hide();
          this.bikesService.deactivateOne(this.itemId).subscribe(function (res) {
            console.log(res);

            _this9.toastr.info(res['message'], 'Info');

            _this9.items = [];

            _this9.bikesService.getAll();
          }, function (error) {
            console.log(error);

            _this9.toastr.error(error.error.message, 'Error'); // this.error.next(error.error.message);

          });
          this.spinner.hide();
        }
      }, {
        key: "soldElement",
        value: function soldElement() {
          var _this10 = this;

          this.spinner.show();
          this.modalRef.hide();
          this.bikesService.soldOne(this.itemId).subscribe(function (res) {
            console.log(res);

            _this10.toastr.info(res['message'], 'Info');

            _this10.items = [];

            _this10.bikesService.getAll();
          }, function (error) {
            console.log(error);

            _this10.toastr.error(error.error.message, 'Error'); // this.error.next(error.error.message);

          });
          this.spinner.hide();
        }
      }, {
        key: "availableElement",
        value: function availableElement() {
          var _this11 = this;

          this.spinner.show();
          this.modalRef.hide();
          this.bikesService.availableOne(this.itemId).subscribe(function (res) {
            console.log(res);

            _this11.toastr.info(res['message'], 'Info');

            _this11.items = [];

            _this11.bikesService.getAll();
          }, function (error) {
            console.log(error);

            _this11.toastr.error(error.error.message, 'Error'); // this.error.next(error.error.message);

          });
          this.spinner.hide();
        }
      }, {
        key: "exportAs",
        value: function exportAs(type, opt) {
          this.exportAsConfig.type = type;

          if (opt) {
            this.exportAsConfig.options.jsPDF.orientation = opt;
          }

          this.exportAsService.save(this.exportAsConfig, 'Bikes').subscribe(function () {// save started
          });
          this.exportAsService.get(this.exportAsConfig).subscribe(function (content) {
            console.log(content);
          });
        }
      }]);

      return BikesComponent;
    }();

    BikesComponent.ɵfac = function BikesComponent_Factory(t) {
      return new (t || BikesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_bikes_service__WEBPACK_IMPORTED_MODULE_3__["BikesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_stores_stores_service__WEBPACK_IMPORTED_MODULE_4__["StoresService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_export_as__WEBPACK_IMPORTED_MODULE_9__["ExportAsService"]));
    };

    BikesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: BikesComponent,
      selectors: [["app-bikes"]],
      decls: 80,
      vars: 39,
      consts: [[1, "grid-center-noGutter"], [1, "col-20_sm-22_xs-23", 2, "margin-top", "20px"], [1, "card"], [1, "card-header", "grid-noGutter"], [1, "card-body", "grid-center-noGutter"], [1, "col-24", "grid-spaceBetween-noGutter"], [1, "card", "xs-hidden"], [1, "card-body"], [2, "display", "inline-block", "background-color", "#4899c2", "padding", "15px", "color", "white"], [1, "material-icons"], [2, "display", "inline-block", "margin", "0 10px"], [2, "color", "#20a8d8", "font-size", "18px", "font-weight", "600"], [2, "color", "#73818f", "font-size", "80%", "font-weight", "700"], [1, "col-top", "xs-24", "grid-noGutter", 2, "margin-top", "15px"], [1, "col-3_xlg-4_lg-6_sm-10", "grid-column-noGutter"], [1, "btn", "color1", "round", "addbtn", 3, "routerLink"], [1, "col-24", "grid-center-noGutter", 2, "margin-top", "20px"], [1, "col-24", "grid-noGutter"], [1, "col-12_xs-24", "grid-left-noGutter", 2, "margin-left", "10px"], ["for", "", 1, "col-24", "grid-noGutter", 2, "font-weight", "bold"], [1, "col-24", "grid"], ["type", "text", "placeholder", "e.g. Name, Creator, Store", 1, "form-control", "col"], ["FilterRecord", ""], [1, "btn", "col-4", "color1", "round", "search", 3, "click"], [1, "md-hidden"], [1, "btn", "col-4", "color2", "round", "search", 3, "click"], [1, "grid-right-noGutter", 2, "margin-top", "20px"], [1, "btn", "color5", "round", 3, "click"], [1, "grid-center-noGutter", 2, "margin-top", "20px"], [4, "ngTemplateOutlet"], ["table", ""], ["id", "template2"], ["templateAddDiscount", ""], ["templateDeleteDiscount", ""], ["templateAddToStore", ""], ["templateActivate", ""], ["templateDeactivate", ""], ["templateDelete", ""], ["templateAvailable", ""], ["templateSold", ""], ["id", "my-table", "title", "List of Bikes", 3, "items", "itemCount", "pageLimits", "limit", "pagination", "noDataMessage", "reload"], [3, "width", "property", "resizable", "header"], ["dataTableCell", ""], [3, "property", "header", "sortable"], [3, "header"], [3, "property", "header"], [3, "header", "sortable"], [3, "width", "header"], ["header", "Actions", 3, "width"], ["class", "grid-center"], ["width", "30px", "height", "30px", "alt", "", 3, "src"], [4, "ngIf"], [1, "badge", "blocked"], [1, "badge", "active"], [1, "badge", "deleted"], ["placement", "bottom", 1, "pencil", 3, "routerLink", "tooltip"], ["placement", "bottom", "triggers", "mouseenter:mouseleave", 3, "ngClass", "tooltip", "click"], ["placement", "bottom", "triggers", "mouseenter:mouseleave", 3, "tooltip", "click"], ["tooltip", "Delete", "placement", "bottom", "triggers", "mouseenter:mouseleave", 1, "trash", 3, "click"], [1, "modal-header"], [2, "font-weight", "bold", "justify-content", "center"], [1, "fa", "fa-user", "fa-lg", "mt-4"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right"], ["aria-hidden", "true"], [1, "modal-body"], [1, "col-24"], [1, "col-24", 3, "label", "fieldId", "items", "control", "fieldClass"], [1, "col-24", 3, "label", "fieldId", "placeholder", "control", "fieldClass"], [1, "grid-right"], ["type", "button", 1, "btn", "col-5_sm-5_xs-6", "color1", "round", 2, "margin-right", "10px", 3, "click"], ["type", "button", 1, "btn", "col-5_sm-5_xs-6", "color2", "round", 3, "click"], ["type", "number", 1, "col-24", 3, "label", "fieldId", "placeholder", "control", "fieldClass", "change"], [2, "color", "red", "font-weight", "bold", "justify-content", "center"], [1, "fa", "fa-trash", "fa-lg", "mt-4"], [1, "col-24", 3, "label", "fieldId", "ItemsList", "placeholder", "fieldClass", "required", "itemselected"], [2, "color", "#0c425d", "font-weight", "bold", "justify-content", "center"], [1, "fa", "fa-lock", "fa-lg", "mt-4"]],
      template: function BikesComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BikesComponent_Template_a_click_40_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r101);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](39);

            return ctx.FilterRecords(_r0.value);
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BikesComponent_Template_a_click_48_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r101);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](39);

            ctx.FilterRecords("");
            return _r0.value = "";
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BikesComponent_Template_button_click_57_listener() {
            return ctx.exportAs("xlsx");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " Export ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, BikesComponent_ng_container_61_Template, 1, 0, "ng-container", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, BikesComponent_ng_template_62_Template, 42, 37, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, BikesComponent_ng_template_64_Template, 21, 13, "ng-template", 31, 32, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, BikesComponent_ng_template_66_Template, 13, 0, "ng-template", 31, 33, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, BikesComponent_ng_template_68_Template, 15, 6, "ng-template", 31, 34, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, BikesComponent_ng_template_70_Template, 13, 0, "ng-template", 31, 35, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, BikesComponent_ng_template_72_Template, 13, 0, "ng-template", 31, 36, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, BikesComponent_ng_template_74_Template, 13, 0, "ng-template", 31, 37, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, BikesComponent_ng_template_76_Template, 13, 0, "ng-template", 31, 38, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](78, BikesComponent_ng_template_78_Template, 13, 0, "ng-template", 31, 39, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 12, "Bikes")));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.items.length, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 14, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 16, "Bikes")), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](38, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 18, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 20, "add")), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 22, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 24, "Bike")), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](35, 26, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 28, "Search for")));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](43, 30, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](44, 32, "search")));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](51, 34, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](52, 36, "Clear")));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r2);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgTemplateOutlet"], angular7_data_table__WEBPACK_IMPORTED_MODULE_2__["DataTable"], angular7_data_table__WEBPACK_IMPORTED_MODULE_2__["DataTableColumn"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_12__["TooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _reusable_components_form_fields_input_radio_input_radio_component__WEBPACK_IMPORTED_MODULE_13__["InputRadioComponent"], _reusable_components_form_fields_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_14__["DatePickerComponent"], _reusable_components_form_fields_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_15__["InputTextComponent"], _reusable_components_form_fields_select_select_component__WEBPACK_IMPORTED_MODULE_16__["SelectComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["LowerCasePipe"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  background-color: #efedf2;\n}\n\n[_nghost-%COMP%]     {\n  border-radius: 10px;\n}\n\n[_nghost-%COMP%]     .data-table-header {\n  padding: 8px 8px;\n  margin-bottom: 0 !important;\n  background-color: #f9f9f9;\n  border: 1px solid #f1f1f1;\n  border-bottom: none;\n  color: #555;\n  border-radius: 10px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n[_nghost-%COMP%]     .data-table-header button {\n  padding-top: 0;\n}\n\n[_nghost-%COMP%]     .data-table-box {\n  border-radius: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  padding: 30px;\n  border: 1px solid #e9e9e9;\n  border-top: 0;\n  border-bottom: 0;\n}\n\n[_nghost-%COMP%]     .data-table {\n  box-shadow: none;\n  border: 1px solid #e9e9e9;\n  color: #555;\n}\n\n[_nghost-%COMP%]     .data-table thead {\n  border-bottom: 1px solid #999;\n  font-size: 16px;\n}\n\n@media (max-width: 1366px) {\n  [_nghost-%COMP%]     .data-table thead {\n    font-size: 14px;\n  }\n}\n\n[_nghost-%COMP%]     .data-table tbody {\n  font-size: 16px;\n}\n\n@media (max-width: 1366px) {\n  [_nghost-%COMP%]     .data-table tbody {\n    font-size: 12px;\n  }\n}\n\n[_nghost-%COMP%]     .data-table tbody td, [_nghost-%COMP%]     .data-table tbody th {\n  font-size: 13px;\n  color: #555353;\n  font-weight: initial;\n}\n\n[_nghost-%COMP%]     .data-table tbody td.index-column, [_nghost-%COMP%]     .data-table tbody th.index-column {\n  font-weight: bold;\n}\n\n[_nghost-%COMP%]     .data-table tbody td[data-label=Status] span, [_nghost-%COMP%]     .data-table tbody th[data-label=Status] span {\n  display: block;\n  color: white;\n  margin: 2px 0;\n  border-radius: 10px;\n}\n\n[_nghost-%COMP%]     .data-table tbody td[data-label=Status] span.blocked, [_nghost-%COMP%]     .data-table tbody th[data-label=Status] span.blocked {\n  background-color: grey;\n}\n\n[_nghost-%COMP%]     .data-table tbody td[data-label=Status] span.deleted, [_nghost-%COMP%]     .data-table tbody th[data-label=Status] span.deleted {\n  background-color: #ff6b6b;\n}\n\n[_nghost-%COMP%]     .data-table tbody td[data-label=Status] span.confirmed, [_nghost-%COMP%]     .data-table tbody th[data-label=Status] span.confirmed {\n  background-color: #0c425d;\n}\n\n[_nghost-%COMP%]     .data-table tbody td[data-label=Status] span.active, [_nghost-%COMP%]     .data-table tbody th[data-label=Status] span.active {\n  background-color: #28a745;\n}\n\n[_nghost-%COMP%]     .data-table tbody td[data-label=Status] span.pending, [_nghost-%COMP%]     .data-table tbody th[data-label=Status] span.pending {\n  background-color: #a0a02e;\n}\n\n[_nghost-%COMP%]     .data-table tbody td[data-label=Status] span.done, [_nghost-%COMP%]     .data-table tbody th[data-label=Status] span.done {\n  background-color: #044970;\n}\n\n[_nghost-%COMP%]     .data-table tbody img {\n  border: 1px solid #f1f1f1;\n}\n\n[_nghost-%COMP%]     .data-table-wrapper {\n  border-radius: 10px;\n  background-color: white;\n  box-shadow: 0 0px 8px 1px rgba(0, 0, 0, 0.05);\n  margin-bottom: 20px;\n}\n\n[_nghost-%COMP%]     .h4.title {\n  font-weight: bold;\n  margin: 0;\n  font-size: 16px;\n}\n\n[_nghost-%COMP%]     data-table-pagination > div {\n  justify-content: center !important;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n\n.btn.search[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  padding: 4px 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n@media (max-width: 1024px) {\n  .btn.search[_ngcontent-%COMP%] {\n    padding: 2px 0;\n  }\n}\n\n.btn.search[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  display: none;\n}\n\n@media (max-width: 1024px) {\n  .btn.search[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n}\n\n\n\n[_nghost-%COMP%] {\n  width: 100%;\n}\n\n[_nghost-%COMP%]     caption {\n  display: none;\n}\n\n[_nghost-%COMP%]     thead tr {\n  height: 40px;\n  background-color: #f6f6f6;\n  color: #555658;\n}\n\n[_nghost-%COMP%]     thead tr th {\n  padding: 1rem 0;\n}\n\n[_nghost-%COMP%]     tbody th, [_nghost-%COMP%]     tbody td {\n  padding: 0.35rem;\n}\n\n[_nghost-%COMP%]     .row-odd {\n  background-color: #f9f9f9 !important;\n}\n\n[_nghost-%COMP%]     .data-table-row:hover {\n  background-color: #f9f9f9 !important;\n}\n\n[_nghost-%COMP%]     .data-table-box {\n  background-color: #fffdfe;\n  border: 1px solid #f1f1f1;\n  margin-bottom: 10px;\n}\n\n[_nghost-%COMP%]     .table td, [_nghost-%COMP%]     .table th {\n  border-top: 1px solid #e9e9e9;\n}\n\n[_nghost-%COMP%]     .table thead th, [_nghost-%COMP%]     .data-table > thead > tr > td {\n  border-bottom: none;\n}\n\n[_nghost-%COMP%]     th {\n  vertical-align: middle;\n  text-align: center;\n  font-weight: 600;\n}\n\n[_nghost-%COMP%]     td {\n  vertical-align: middle;\n  text-align: center;\n}\n\n[_nghost-%COMP%]     td.index-column {\n  font-weight: bold;\n  font-size: 13px;\n}\n\n[_nghost-%COMP%]     .pagination-range {\n  display: none;\n}\n\n[_nghost-%COMP%]     .pagination-box {\n  padding-bottom: 12px;\n  zoom: 75%;\n  align-items: center;\n  width: 95%;\n}\n\n[_nghost-%COMP%]     .pagination-box .input-group .form-control {\n  display: flex !important;\n  width: auto !important;\n  height: auto;\n}\n\n[_nghost-%COMP%]     .pagination-box .input-group select {\n  border-radius: 0;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n[_nghost-%COMP%]     .index-column-header span::after {\n  content: \"ID\";\n}\n\na[_ngcontent-%COMP%] {\n  padding: 0 2px;\n  border: 0;\n  transition: all 0.5s;\n  background-color: transparent;\n  cursor: pointer;\n}\n\na[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n\na[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\na.pencil[_ngcontent-%COMP%] {\n  color: #0c425d;\n}\n\na.trash[_ngcontent-%COMP%] {\n  color: #C9302C;\n}\n\na.lock[_ngcontent-%COMP%] {\n  color: #a8d2be;\n}\n\na.note[_ngcontent-%COMP%] {\n  color: #f9ae4e;\n}\n\n[_nghost-%COMP%]     bs-tooltip-container .tooltip-inner {\n  background-color: #0c425d;\n  color: white;\n}\n\n[_nghost-%COMP%]     bs-tooltip-container .tooltip-arrow:before, [_nghost-%COMP%]     bs-tooltip-container .tooltip-arrow {\n  border-top-color: #0c425d;\n}\n\n.product-card[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 90%;\n  margin: 15px;\n  height: 50px;\n  border-radius: 25px;\n  border: 2px solid #e2e2e2;\n}\n\n.description-card[_ngcontent-%COMP%] {\n  position: relative;\n  width: 85%;\n  height: 100px;\n  background-color: #0c425d;\n  border-radius: 10px;\n  margin: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n}\n\n.description-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.description-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-of-type {\n  font-weight: bold;\n}\n\n.description-card[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 20px;\n  height: 30px;\n  top: 0;\n  right: 25px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  background-color: #a8d2be;\n}\n\n.card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmlrZXMvRTpcXFVudGl0bGVkIEZvbGRlclxccHJpdmF0ZVxccHJvamVjdHNcXGZ1bGxfc3RhY2tcXG1vdG9iYXJcXG1vdG9iYXJfYWRtaW4vc3JjXFxzY3NzXFx0YWJsZV9zY3JlZW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Jpa2VzL0U6XFxVbnRpdGxlZCBGb2xkZXJcXHByaXZhdGVcXHByb2plY3RzXFxmdWxsX3N0YWNrXFxtb3RvYmFyXFxtb3RvYmFyX2FkbWluL3NyY1xcc2Nzc1xcYWJzdHJhY3RzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Jpa2VzL2Jpa2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0FBQTtFQUNBLHlCQ2lCc0I7QUNsQjFCOztBRklBO0VBQ0ksbUJBQUE7QUVESjs7QUZFSTtFQUNJLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkNLa0I7RURKbEIseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUVBUjs7QUZDUTtFQUNJLGNBQUE7QUVDWjs7QUZHSTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBRURSOztBRklJO0VBQ0ksZ0JBQUE7RUFFQSx5QkFBQTtFQUNBLFdDdkJrQjtBQ29CMUI7O0FGS1E7RUFDSSw2QkFBQTtFQUNBLGVDa0NjO0FDckMxQjs7QUZLWTtFQUpKO0lBS1EsZUM4QlU7RUNoQ3hCO0FBQ0Y7O0FGS1E7RUFDSSxlQzRCVztBQy9CdkI7O0FGS1k7RUFISjtJQUlRLGVDd0JRO0VDMUJ0QjtBQUNGOztBRklZOztFQUdJLGVBQUE7RUFFQSxjQUFBO0VBQ0Esb0JBQUE7QUVKaEI7O0FGS2dCOztFQUNJLGlCQUFBO0FFRnBCOztBRk1vQjs7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBRUh4Qjs7QUZJd0I7O0VBQ0ksc0JBQUE7QUVENUI7O0FGR3dCOztFQUNJLHlCQUFBO0FFQTVCOztBRkV3Qjs7RUFDSSx5QkM5RW5CO0FDK0VUOztBRkN3Qjs7RUFDSSx5QkFBQTtBRUU1Qjs7QUZBd0I7O0VBQ0kseUJBQUE7QUVHNUI7O0FGRHdCOztFQUNJLHlCQUFBO0FFSTVCOztBRkVZO0VBQ0kseUJBQUE7QUVBaEI7O0FGS0k7RUFDSSxtQkFBQTtFQUNBLHVCQ3RHQztFRHVHRCw2Q0FBQTtFQUNBLG1CQUFBO0FFSFI7O0FGTUk7RUFDSSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxlQ3RDWTtBQ2tDcEI7O0FGT0k7RUFDSSxrQ0FBQTtBRUxSOztBRlNBO0VBQ0ksZUNoRGdCO0VEaURoQixpQkFBQTtFQUNBLGtCQUFBO0FFTko7O0FGU0E7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FFTko7O0FGUUk7RUFQSjtJQVFRLGNBQUE7RUVMTjtBQUNGOztBRk9JO0VBQ0ksYUFBQTtBRUxSOztBRk9RO0VBSEo7SUFJUSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtFRUpWO0FBQ0Y7O0FGT0EsUUFBQTs7QUFFQTtFQUNJLFdBQUE7QUVMSjs7QUZTSTtFQUNJLGFBQUE7QUVOUjs7QUZTSTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUVBLGNBQUE7QUVSUjs7QUZTUTtFQUNJLGVBQUE7QUVQWjs7QUZVSTs7RUFFSSxnQkFBQTtBRVJSOztBRlVJO0VBQ0ksb0NBQUE7QUVSUjs7QUZXSTtFQUNJLG9DQUFBO0FFVFI7O0FGWUk7RUFDSSx5QkM1SmtCO0VENkpsQix5QkFBQTtFQUNBLG1CQUFBO0FFVlI7O0FGYUk7O0VBRUksNkJBQUE7QUVYUjs7QUZjSTs7RUFFSSxtQkFBQTtBRVpSOztBRmVJO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQ2hJWTtBQ21IcEI7O0FGaUJJO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtBRWZSOztBRmdCUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBRWRaOztBRmtCSTtFQUNJLGFBQUE7QUVoQlI7O0FGbUJJO0VBQ0ksb0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FFakJSOztBRm9CWTtFQUNJLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FFbEJoQjs7QUZxQlk7RUFDSSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7QUVuQmhCOztBRnlCUTtFQUNJLGFBQUE7QUV2Qlo7O0FGNEJBO0VBQ0ksY0FBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBRXpCSjs7QUYyQkk7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUV6QlI7O0FGNEJJO0VBQ0ksZUFBQTtBRTFCUjs7QUY2Qkk7RUFDSSxjQ2pRQztBQ3NPVDs7QUY4Qkk7RUFDSSxjQ3pQa0I7QUM2TjFCOztBRitCSTtFQUNJLGNDeFFDO0FDMk9UOztBRmdDSTtFQUNJLGNDeFFFO0FDME9WOztBRmtDQTtFQUNJLHlCQ2xSSztFRG1STCxZQ3BSSztBQ3FQVDs7QUZrQ0E7O0VBRUkseUJDeFJLO0FDeVBUOztBRmtDQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBRS9CSjs7QUZpQ0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EseUJDelNLO0VEMFNMLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBRTlCSjs7QUYrQkk7RUFDSSxXQUFBO0FFN0JSOztBRjhCUTtFQUNJLGlCQUFBO0FFNUJaOztBRitCSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkM3VEM7QUNnU1Q7O0FGZ0NBO0VBQ0ksbUJBQUE7QUU3Qko7O0FGOEJJO0VBQ0ksbUJBQUE7QUU1QlI7O0FGOEJJO0VBQ0ksbUJBQUE7QUU1QlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9iaWtlcy9iaWtlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL2Fic3RyYWN0cy92YXJpYWJsZXNcIjtcclxuXHJcbjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tYmFja2dyb3VuZC1jb2xvcjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAuZGF0YS10YWJsZS1oZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCA4cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjYXJkLWhlYWRlci1iZztcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICRmb250LWNvbG9yO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRhdGEtdGFibGUtYm94IHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkZGF0YS10YWJsZS1ib3JkZXI7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5kYXRhLXRhYmxlIHtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIC8vIGZvbnQtc2l6ZSA6ICRkYXRhLXRhYmxlLWJvZHk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGRhdGEtdGFibGUtYm9yZGVyO1xyXG4gICAgICAgIGNvbG9yOiAkZm9udC1jb2xvcjtcclxuXHJcbiAgICAgICAgdGhlYWQge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk5OTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAkZGF0YS10YWJsZS1oZWFkZXItMTkyMDtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMzY2cHgpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGRhdGEtdGFibGUtaGVhZGVyLTEzNjY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRib2R5IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAkZGF0YS10YWJsZS1ib2R5LTE5MjA7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTM2NnB4KSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICRkYXRhLXRhYmxlLWJvZHktMTM2NjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGQsXHJcbiAgICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgICAgIC8vIGJvcmRlci10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAvLyBjb2xvcjogcmdiYSgkY29sb3IxLCAwLjgpO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM1NTUzNTM7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogaW5pdGlhbDtcclxuICAgICAgICAgICAgICAgICYuaW5kZXgtY29sdW1uIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZbZGF0YS1sYWJlbD1cIlN0YXR1c1wiXSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAycHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5ibG9ja2VkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5kZWxldGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDEwNywgMTA3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmLmNvbmZpcm1lZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5wZW5kaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhMGEwMmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5kb25lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNDQ5NzA7IC8vJGNvbG9yMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRhdGEtdGFibGUtd3JhcHBlciB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwcHggOHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmg0LnRpdGxlIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAkY2FyZC1oZWFkZXItZm9udDtcclxuICAgIH1cclxuXHJcbiAgICBkYXRhLXRhYmxlLXBhZ2luYXRpb24gPiBkaXYge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogJGxhYmVsLWZvbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmJ0bi5zZWFyY2gge1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxuICAgIHBhZGRpbmc6IDRweCAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgcGFkZGluZzogMnB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKioqKiogKi9cclxuXHJcbjpob3N0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAge1xyXG4gICAgY2FwdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGVhZCB0ciB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgICAgICAgLy8gY29sb3I6ICRjb2xvcjE7XHJcbiAgICAgICAgY29sb3I6ICM1NTU2NTg7XHJcbiAgICAgICAgdGgge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGJvZHkgdGgsXHJcbiAgICB0Ym9keSB0ZCB7XHJcbiAgICAgICAgcGFkZGluZzogMC4zNXJlbTtcclxuICAgIH1cclxuICAgIC5yb3ctb2RkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmRhdGEtdGFibGUtcm93OmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FyZC1oZWFkZXItYmcgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuZGF0YS10YWJsZS1ib3gge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXRhLXRhYmxlLWJveDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYmxlIHRkLFxyXG4gICAgLnRhYmxlIHRoIHtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGRhdGEtdGFibGUtYm9yZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC50YWJsZSB0aGVhZCB0aCxcclxuICAgIC5kYXRhLXRhYmxlID4gdGhlYWQgPiB0ciA+IHRkIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIHRoIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LTYwMDtcclxuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6ICRncmF5MjtcclxuICAgIH1cclxuXHJcbiAgICB0ZCB7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgJi5pbmRleC1jb2x1bW4ge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucGFnaW5hdGlvbi1yYW5nZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAucGFnaW5hdGlvbi1ib3gge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgICAgIHpvb206IDc1JTtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiA5NSU7XHJcblxyXG4gICAgICAgIC5pbnB1dC1ncm91cCB7XHJcbiAgICAgICAgICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2VsZWN0IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaW5kZXgtY29sdW1uLWhlYWRlciB7XHJcbiAgICAgICAgc3Bhbjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIklEXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5hIHtcclxuICAgIHBhZGRpbmc6IDAgMnB4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICYucGVuY2lsIHtcclxuICAgICAgICBjb2xvcjogJGNvbG9yMTtcclxuICAgIH1cclxuXHJcbiAgICAmLnRyYXNoIHtcclxuICAgICAgICBjb2xvcjogJHRyYXNoLWNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgICYubG9jayB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvcjI7XHJcbiAgICB9XHJcblxyXG4gICAgJi5ub3RlIHtcclxuICAgICAgICBjb2xvcjogJGNvbG9yNTtcclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIGJzLXRvb2x0aXAtY29udGFpbmVyIC50b29sdGlwLWlubmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjE7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgYnMtdG9vbHRpcC1jb250YWluZXIgLnRvb2x0aXAtYXJyb3c6YmVmb3JlLFxyXG46aG9zdCA6Om5nLWRlZXAgYnMtdG9vbHRpcC1jb250YWluZXIgLnRvb2x0aXAtYXJyb3cge1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogJGNvbG9yMTtcclxufVxyXG5cclxuLnByb2R1Y3QtY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkZ3JheTI7XHJcbn1cclxuLmRlc2NyaXB0aW9uLWNhcmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYmFyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICByaWdodDogMjVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjI7XHJcbiAgICB9XHJcbn1cclxuLmNhcmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIH1cclxuICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuIiwiLy9jb2xvcnNcbiR3aGl0ZSA6IHdoaXRlO1xuJGNvbG9yMTogIzBjNDI1ZDtcbiRjb2xvcjI6ICNhOGQyYmU7XG4kY29sb3IzOiAjNDg5OWMyO1xuJGNvbG9yNDogIzFmNzdhMztcblxuJGNvbG9yNSA6ICNmOWFlNGU7XG4kY29sb3I1NTogI2Q2ODUyMjtcblxuJGJvcmRlciAgICAgICAgICAgICAgICAgOiAjZjFmMWYxO1xuJGRhdGEtdGFibGUtYm9yZGVyICAgICAgOiAjZTllOWU5O1xuJGdyYXkyICAgICAgICAgICAgICAgICAgOiAjZTJlMmUyO1xuJGdyYXkzICAgICAgICAgICAgICAgICAgOiAjNzU3NTc1O1xuJHRyYXNoLWNvbG9yICAgICAgICAgICAgOiAjQzkzMDJDO1xuJGZvbnQtY29sb3IgICAgICAgICAgICAgOiAjNTU1O1xuJGFjdGl2ZS1icmVhZGNydW1iLWNvbG9yOiAjMzQzNDM0O1xuJGNhcmQtaGVhZGVyLWJnICAgICAgICAgOiAjZjlmOWY5OyAvLyNlZmVmZWY7IC8vI2Y5ZjlmOTtcbiRwbGFjZWhvbGRlci1jb2xvciAgICAgIDogI2IzYjNiMztcblxuLy8gYmFja2dyb3VuZCBjb2xvclxuJG1haW4tYmFja2dyb3VuZC1jb2xvciAgOiAjZWZlZGYyO1xuJGhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiRkYXRhLXRhYmxlLWJveCAgICAgICAgIDogI2ZmZmRmZTsgLy8jZjdmN2Y3O1xuJGNhcmQtYm9keSAgICAgICAgICAgICAgOiAjZmZmZGZlO1xuXG4vLyBEYXNoYm9hcmRcbiRtYXJnaW5CZXR3ZWVuQ2FyZHM6IDIycHg7XG4kYXhpc0ZvbnRTaXplICAgICAgOiAxMnB4O1xuJHNtYWxsQXhpc0ZvbnRTaXplIDogMTBweDtcblxuLy9oZWFkZXJcbiRwcm9maWxlLW1lbnUtY29sb3I6ICNmOWY5Zjk7XG4kYmlsbC1jb2xvciAgICAgICAgOiAjOWJhMmFhO1xuJGJpbGwtaG92ZXItY29sb3IgIDogIzczODE4ZjtcblxuLy9MYXlvdXQgVmFyaWFibGVzXG5cbiRoZWFkZXItaGVpZ2h0IDogNTVweDtcbiRzaWRlTWVudS13aWR0aDogMjAwcHg7XG5cblxuLy9sb2dpblxuJGxveWFsaXR5LWNvbG9yICA6ICM4ODdmN2Y7XG4kbG9naW4tYm94LWNvbG9yIDogI2Y1ZjJmMDtcblxuLy9tYWlsXG4kbWFpbC1jaGVja2JveC1jb2xvcjogIzAwNzNhYTtcbiR1c2VyLW1haWwtY29sb3IgICAgOiAjMjkyYjJjO1xuXG4vL3Byb2ZpbGVcbiRhY3RpdmUtY29sb3IgICAgIDogI2Y0ZjZmOTtcbiRpY29uLWNvbG9yICAgICAgIDogIzk1OWNiNjtcbiRsYWJlbC10aXRsZS1jb2xvcjogIzUwNTY2YTtcblxuLy9lbWFpbCB0ZW1wbGF0ZXNcbiRlbWFpbC1ibHVlLWNvbG9yOiAjMGY0MTVkO1xuJGVtYWlsLWdyYXktY29sb3I6ICM1ZjYwNjA7XG4kZW1haWwtc3lhbi1jb2xvcjogI2EyZDljMjtcbiRlbWFpbC1vcmFnbmUtY29sb3I6ICNmZmFjNTI7XG5cbi8vZm9udHNcbiRmb250MjggICAgICAgICAgIDogMjhweDtcbiRmb250MjQgICAgICAgICAgIDogMjRweDtcbiRmb250MTggICAgICAgICAgIDogMThweDtcbiRmb250MTYgICAgICAgICAgIDogMTZweDtcbiRmb250MTQgICAgICAgICAgIDogMTRweDtcbiRmb250MTIgICAgICAgICAgIDogMTJweDtcbiRmb250MTAgICAgICAgICAgIDogMTBweDtcbiRmb250LXdlaWdodC02MDAgIDogNjAwO1xuJGZvbnQtd2VpZ2h0LTUwMCAgOiA1MDA7XG4kcGxhY2Vob2xkZXItZm9udCA6IDEycHg7XG4kbGFiZWwtZm9udCAgICAgICA6IDE0cHg7XG4kY2FyZC1oZWFkZXItZm9udCA6IDE2cHg7XG5cbiRkYXRhLXRhYmxlLWhlYWRlci0xMzY2IDogMTRweDtcbiRkYXRhLXRhYmxlLWhlYWRlci0xOTIwIDogMTZweDtcbiRkYXRhLXRhYmxlLWJvZHktMTM2NiA6IDEycHg7XG4kZGF0YS10YWJsZS1ib2R5LTE5MjA6IDE2cHg7XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZGYyO1xufVxuXG46aG9zdCA6Om5nLWRlZXAge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlLWhlYWRlciB7XG4gIHBhZGRpbmc6IDhweCA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgY29sb3I6ICM1NTU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlLWhlYWRlciBidXR0b24ge1xuICBwYWRkaW5nLXRvcDogMDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZS1ib3gge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgcGFkZGluZzogMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5ZTllOTtcbiAgYm9yZGVyLXRvcDogMDtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWU5ZTk7XG4gIGNvbG9yOiAjNTU1O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlIHRoZWFkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5OTk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzY2cHgpIHtcbiAgOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlIHRoZWFkIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzY2cHgpIHtcbiAgOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlIHRib2R5IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0ZCxcbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0aCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM1NTUzNTM7XG4gIGZvbnQtd2VpZ2h0OiBpbml0aWFsO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlIHRib2R5IHRkLmluZGV4LWNvbHVtbixcbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0aC5pbmRleC1jb2x1bW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0ZFtkYXRhLWxhYmVsPVN0YXR1c10gc3Bhbixcbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0aFtkYXRhLWxhYmVsPVN0YXR1c10gc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMnB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUgdGJvZHkgdGRbZGF0YS1sYWJlbD1TdGF0dXNdIHNwYW4uYmxvY2tlZCxcbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0aFtkYXRhLWxhYmVsPVN0YXR1c10gc3Bhbi5ibG9ja2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0ZFtkYXRhLWxhYmVsPVN0YXR1c10gc3Bhbi5kZWxldGVkLFxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlIHRib2R5IHRoW2RhdGEtbGFiZWw9U3RhdHVzXSBzcGFuLmRlbGV0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2YjZiO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlIHRib2R5IHRkW2RhdGEtbGFiZWw9U3RhdHVzXSBzcGFuLmNvbmZpcm1lZCxcbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0aFtkYXRhLWxhYmVsPVN0YXR1c10gc3Bhbi5jb25maXJtZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGM0MjVkO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlIHRib2R5IHRkW2RhdGEtbGFiZWw9U3RhdHVzXSBzcGFuLmFjdGl2ZSxcbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0aFtkYXRhLWxhYmVsPVN0YXR1c10gc3Bhbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlIHRib2R5IHRkW2RhdGEtbGFiZWw9U3RhdHVzXSBzcGFuLnBlbmRpbmcsXG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUgdGJvZHkgdGhbZGF0YS1sYWJlbD1TdGF0dXNdIHNwYW4ucGVuZGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhMGEwMmU7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUgdGJvZHkgdGRbZGF0YS1sYWJlbD1TdGF0dXNdIHNwYW4uZG9uZSxcbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0aFtkYXRhLWxhYmVsPVN0YXR1c10gc3Bhbi5kb25lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0NDk3MDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSBpbWcge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlLXdyYXBwZXIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAwcHggOHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5oNC50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbjpob3N0IDo6bmctZGVlcCBkYXRhLXRhYmxlLXBhZ2luYXRpb24gPiBkaXYge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmJ0bi5zZWFyY2gge1xuICBtYXJnaW46IDAgNXB4O1xuICBwYWRkaW5nOiA0cHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5idG4uc2VhcmNoIHtcbiAgICBwYWRkaW5nOiAycHggMDtcbiAgfVxufVxuLmJ0bi5zZWFyY2ggc3BhbjpsYXN0LWNoaWxkIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmJ0bi5zZWFyY2ggc3BhbjpsYXN0LWNoaWxkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cblxuLyoqKioqICovXG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgY2FwdGlvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG46aG9zdCA6Om5nLWRlZXAgdGhlYWQgdHIge1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gIGNvbG9yOiAjNTU1NjU4O1xufVxuOmhvc3QgOjpuZy1kZWVwIHRoZWFkIHRyIHRoIHtcbiAgcGFkZGluZzogMXJlbSAwO1xufVxuOmhvc3QgOjpuZy1kZWVwIHRib2R5IHRoLFxuOmhvc3QgOjpuZy1kZWVwIHRib2R5IHRkIHtcbiAgcGFkZGluZzogMC4zNXJlbTtcbn1cbjpob3N0IDo6bmctZGVlcCAucm93LW9kZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5ZjkgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZS1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5ICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUtYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmRmZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAudGFibGUgdGQsXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlIHRoIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOWU5ZTk7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlIHRoZWFkIHRoLFxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlID4gdGhlYWQgPiB0ciA+IHRkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbjpob3N0IDo6bmctZGVlcCB0aCB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbjpob3N0IDo6bmctZGVlcCB0ZCB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IDo6bmctZGVlcCB0ZC5pbmRleC1jb2x1bW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wYWdpbmF0aW9uLXJhbmdlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjpob3N0IDo6bmctZGVlcCAucGFnaW5hdGlvbi1ib3gge1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgem9vbTogNzUlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogOTUlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wYWdpbmF0aW9uLWJveCAuaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbCB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wYWdpbmF0aW9uLWJveCAuaW5wdXQtZ3JvdXAgc2VsZWN0IHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuaW5kZXgtY29sdW1uLWhlYWRlciBzcGFuOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiSURcIjtcbn1cblxuYSB7XG4gIHBhZGRpbmc6IDAgMnB4O1xuICBib3JkZXI6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5hIGkge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5hLnBlbmNpbCB7XG4gIGNvbG9yOiAjMGM0MjVkO1xufVxuYS50cmFzaCB7XG4gIGNvbG9yOiAjQzkzMDJDO1xufVxuYS5sb2NrIHtcbiAgY29sb3I6ICNhOGQyYmU7XG59XG5hLm5vdGUge1xuICBjb2xvcjogI2Y5YWU0ZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIGJzLXRvb2x0aXAtY29udGFpbmVyIC50b29sdGlwLWlubmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjNDI1ZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgYnMtdG9vbHRpcC1jb250YWluZXIgLnRvb2x0aXAtYXJyb3c6YmVmb3JlLFxuOmhvc3QgOjpuZy1kZWVwIGJzLXRvb2x0aXAtY29udGFpbmVyIC50b29sdGlwLWFycm93IHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzBjNDI1ZDtcbn1cblxuLnByb2R1Y3QtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDE1cHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2UyZTJlMjtcbn1cblxuLmRlc2NyaXB0aW9uLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA4NSU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzQyNWQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5kZXNjcmlwdGlvbi1jYXJkIHAge1xuICB3aWR0aDogMTAwJTtcbn1cbi5kZXNjcmlwdGlvbi1jYXJkIHA6Zmlyc3Qtb2YtdHlwZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmRlc2NyaXB0aW9uLWNhcmQgLmJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgdG9wOiAwO1xuICByaWdodDogMjVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhOGQyYmU7XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5jYXJkIC5jYXJkLWhlYWRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uY2FyZCAuY2FyZC1ib2R5IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BikesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-bikes',
          templateUrl: './bikes.component.html',
          styleUrls: ['./bikes.component.scss']
        }]
      }], function () {
        return [{
          type: _bikes_service__WEBPACK_IMPORTED_MODULE_3__["BikesService"]
        }, {
          type: _stores_stores_service__WEBPACK_IMPORTED_MODULE_4__["StoresService"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
        }, {
          type: ngx_export_as__WEBPACK_IMPORTED_MODULE_9__["ExportAsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/bikes/bikes.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/bikes/bikes.module.ts ***!
    \*********************************************/

  /*! exports provided: BikesModule */

  /***/
  function srcAppPagesBikesBikesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BikesModule", function () {
      return BikesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/tooltip */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var angular7_data_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular7-data-table */
    "./node_modules/angular7-data-table/__ivy_ngcc__/esm2015/angular7-data-table.js");
    /* harmony import */


    var ngx_export_as__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-export-as */
    "./node_modules/ngx-export-as/__ivy_ngcc__/fesm2015/ngx-export-as.js");
    /* harmony import */


    var _bikes_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./bikes-routing.module */
    "./src/app/pages/bikes/bikes-routing.module.ts");
    /* harmony import */


    var src_app_reusable_components_form_fields_form_fields_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/reusable-components/form-fields/form-fields.module */
    "./src/app/reusable-components/form-fields/form-fields.module.ts");
    /* harmony import */


    var _bikes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./bikes.component */
    "./src/app/pages/bikes/bikes.component.ts");
    /* harmony import */


    var _add_bike_add_bike_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./add-bike/add-bike.component */
    "./src/app/pages/bikes/add-bike/add-bike.component.ts");
    /* harmony import */


    var _edit_bike_edit_bike_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./edit-bike/edit-bike.component */
    "./src/app/pages/bikes/edit-bike/edit-bike.component.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var BikesModule = function BikesModule() {
      _classCallCheck(this, BikesModule);
    };

    BikesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BikesModule
    });
    BikesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BikesModule_Factory(t) {
        return new (t || BikesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _bikes_routing_module__WEBPACK_IMPORTED_MODULE_6__["BikesRoutingModule"], src_app_reusable_components_form_fields_form_fields_module__WEBPACK_IMPORTED_MODULE_7__["FormFieldsModule"], angular7_data_table__WEBPACK_IMPORTED_MODULE_4__["DataTableModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_2__["TooltipModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(), ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerModule"], ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BikesModule, {
        declarations: [_bikes_component__WEBPACK_IMPORTED_MODULE_8__["BikesComponent"], _add_bike_add_bike_component__WEBPACK_IMPORTED_MODULE_9__["AddBikeComponent"], _edit_bike_edit_bike_component__WEBPACK_IMPORTED_MODULE_10__["EditBikeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _bikes_routing_module__WEBPACK_IMPORTED_MODULE_6__["BikesRoutingModule"], src_app_reusable_components_form_fields_form_fields_module__WEBPACK_IMPORTED_MODULE_7__["FormFieldsModule"], angular7_data_table__WEBPACK_IMPORTED_MODULE_4__["DataTableModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_2__["TooltipModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerModule"], ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BikesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_bikes_component__WEBPACK_IMPORTED_MODULE_8__["BikesComponent"], _add_bike_add_bike_component__WEBPACK_IMPORTED_MODULE_9__["AddBikeComponent"], _edit_bike_edit_bike_component__WEBPACK_IMPORTED_MODULE_10__["EditBikeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _bikes_routing_module__WEBPACK_IMPORTED_MODULE_6__["BikesRoutingModule"], src_app_reusable_components_form_fields_form_fields_module__WEBPACK_IMPORTED_MODULE_7__["FormFieldsModule"], angular7_data_table__WEBPACK_IMPORTED_MODULE_4__["DataTableModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_2__["TooltipModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(), ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerModule"], ngx_export_as__WEBPACK_IMPORTED_MODULE_5__["ExportAsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/bikes/bikes.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/bikes/bikes.service.ts ***!
    \**********************************************/

  /*! exports provided: BikesService */

  /***/
  function srcAppPagesBikesBikesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BikesService", function () {
      return BikesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _config_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../config/variables */
    "./src/app/config/variables.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var BikesService = /*#__PURE__*/function () {
      function BikesService(http) {
        _classCallCheck(this, BikesService);

        this.http = http;
        this.bikes = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
      }

      _createClass(BikesService, [{
        key: "getAll",
        value: function getAll() {
          var _this12 = this;

          return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + '/bike').subscribe(function (res) {
            if (res['data']) {
              _this12.bikes.next(res['data']);
            }
          });
        }
      }, {
        key: "getOne",
        value: function getOne(itemId) {
          return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + "/bike/".concat(itemId));
        }
      }, {
        key: "addOne",
        value: function addOne(form) {
          return this.http.post(_config_variables__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + '/bike', form);
        }
      }, {
        key: "updateOne",
        value: function updateOne(form, itemId) {
          return this.http.put(_config_variables__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + "/bike/".concat(itemId), form);
        }
      }, {
        key: "deleteOne",
        value: function deleteOne(itemId) {
          return this.http["delete"](_config_variables__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + "/bike/".concat(itemId));
        }
      }, {
        key: "addBikeToStore",
        value: function addBikeToStore(bikeId, storeId) {
          return this.http.post(_config_variables__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + "/bike/addBikeToStore/".concat(bikeId, "/").concat(storeId), {});
        }
      }, {
        key: "activateOne",
        value: function activateOne(itemId) {
          return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + "/bike/activate/".concat(itemId));
        }
      }, {
        key: "deactivateOne",
        value: function deactivateOne(itemId) {
          return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + "/bike/deactivate/".concat(itemId));
        }
      }, {
        key: "soldOne",
        value: function soldOne(itemId) {
          return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + "/bike/sold/".concat(itemId));
        }
      }, {
        key: "availableOne",
        value: function availableOne(itemId) {
          return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + "/bike/available/".concat(itemId));
        }
      }, {
        key: "addDiscount",
        value: function addDiscount(form, itemId) {
          return this.http.post(_config_variables__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + "/bike/discount/add/".concat(itemId), form);
        }
      }, {
        key: "deleteDiscount",
        value: function deleteDiscount(itemId) {
          return this.http["delete"](_config_variables__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + "/bike/discount/delete/".concat(itemId));
        }
      }, {
        key: "bestSelling",
        value: function bestSelling() {
          return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + "/bike/bestSelling");
        }
      }]);

      return BikesService;
    }();

    BikesService.ɵfac = function BikesService_Factory(t) {
      return new (t || BikesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    BikesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BikesService,
      factory: BikesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BikesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/bikes/edit-bike/edit-bike.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/bikes/edit-bike/edit-bike.component.ts ***!
    \**************************************************************/

  /*! exports provided: EditBikeComponent */

  /***/
  function srcAppPagesBikesEditBikeEditBikeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditBikeComponent", function () {
      return EditBikeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _bikes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../bikes.service */
    "./src/app/pages/bikes/bikes.service.ts");
    /* harmony import */


    var _categories_categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../categories/categories.service */
    "./src/app/pages/categories/categories.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _reusable_components_form_fields_upload_multi_photos_upload_multi_photos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../reusable-components/form-fields/upload-multi-photos/upload-multi-photos.component */
    "./src/app/reusable-components/form-fields/upload-multi-photos/upload-multi-photos.component.ts");
    /* harmony import */


    var _reusable_components_form_fields_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../reusable-components/form-fields/input-text/input-text.component */
    "./src/app/reusable-components/form-fields/input-text/input-text.component.ts");
    /* harmony import */


    var _reusable_components_form_fields_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../reusable-components/form-fields/textarea/textarea.component */
    "./src/app/reusable-components/form-fields/textarea/textarea.component.ts");
    /* harmony import */


    var _reusable_components_form_fields_select_select_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../reusable-components/form-fields/select/select.component */
    "./src/app/reusable-components/form-fields/select/select.component.ts");

    var _c0 = function _c0() {
      return ["/bikes"];
    };

    var EditBikeComponent = /*#__PURE__*/function () {
      function EditBikeComponent(fb, route, bikesService, categoriesService, toastr, spinner, router) {
        _classCallCheck(this, EditBikeComponent);

        this.fb = fb;
        this.route = route;
        this.bikesService = bikesService;
        this.categoriesService = categoriesService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.router = router;
        this.originalPhotos = [];
        this.form = this.fb.group({
          photos: this.fb.array([]),
          originalPhotos: this.fb.array([]),
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          color: [''],
          year: [''],
          condition: this.fb.group({
            _id: [],
            name: this.fb.group({
              en: [],
              ar: []
            })
          }),
          model: this.fb.group({
            _id: [],
            name: this.fb.group({
              en: [],
              ar: []
            })
          }),
          transmissionType: this.fb.group({
            _id: [],
            name: this.fb.group({
              en: [],
              ar: []
            })
          }),
          distance: this.fb.group({
            _id: [],
            name: this.fb.group({
              en: [],
              ar: []
            })
          }),
          paymentOption: this.fb.group({
            _id: [],
            name: this.fb.group({
              en: [],
              ar: []
            })
          }),
          capacity: this.fb.group({
            _id: [],
            name: this.fb.group({
              en: [],
              ar: []
            })
          })
        });
        this.models = [{
          _id: '1',
          nameEn: 'Honda',
          nameAr: ''
        }, {
          _id: '2',
          nameEn: 'Peogeut',
          nameAr: ''
        }];
        this.selectedModel = {};
        this.conditions = [{
          _id: '1',
          nameEn: 'New',
          nameAr: 'جديد'
        }, {
          _id: '2',
          nameEn: 'Used',
          nameAr: 'مستعمل'
        }];
        this.selectedCondition = {};
        this.transmissionTypes = [{
          _id: '1',
          nameEn: 'Automatic',
          nameAr: 'اوتوماتيك'
        }, {
          _id: '2',
          nameEn: 'Manual',
          nameAr: 'يدوي'
        }];
        this.selectedTransmissionType = {};
        this.distances = [{
          _id: '1',
          nameEn: '0 - 10000',
          nameAr: ''
        }, {
          _id: '2',
          nameEn: '10000 - 20000',
          nameAr: ''
        }, {
          _id: '3',
          nameEn: '20000 - 30000',
          nameAr: ''
        }, {
          _id: '4',
          nameEn: '30000 - 40000',
          nameAr: ''
        }, {
          _id: '5',
          nameEn: '40000 - 50000',
          nameAr: ''
        }, {
          _id: '6',
          nameEn: '50000 - 60000',
          nameAr: ''
        }];
        this.selectedDistance = {};
        this.paymentOptions = [{
          _id: '1',
          nameEn: 'Cash',
          nameAr: ''
        }, {
          _id: '2',
          nameEn: 'Exchange',
          nameAr: ''
        }, {
          _id: '3',
          nameEn: 'Installments',
          nameAr: ''
        }];
        this.selectedPaymentOption = {};
        this.capacities = [{
          _id: '1',
          nameEn: '200',
          nameAr: ''
        }, {
          _id: '2',
          nameEn: '400',
          nameAr: ''
        }, {
          _id: '3',
          nameEn: '800',
          nameAr: ''
        }, {
          _id: '4',
          nameEn: '1000',
          nameAr: ''
        }, {
          _id: '5',
          nameEn: '1200',
          nameAr: ''
        }, {
          _id: '6',
          nameEn: '1400',
          nameAr: ''
        }, {
          _id: '7',
          nameEn: '1600',
          nameAr: ''
        }];
        this.selectedCapacity = {};
      }

      _createClass(EditBikeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.bikeId = this.route.snapshot.paramMap.get('id');
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.getOne(this.bikeId);
        }
      }, {
        key: "getOne",
        value: function getOne(id) {
          var _this13 = this;

          this.spinner.show();
          this.bikesService.getOne(id).subscribe(function (res) {
            _this13.toastr.info(res['message'], 'Info');

            for (var index = 0; index < res['data']['photos'].length; index++) {
              if (!_this13.originalPhotos[index]) {
                _this13.originalPhotos[index] = res['data']['photos'][index];
              }

              _this13.form.get('originalPhotos')['controls'].push(res['data']['photos'][index]);
            }

            _this13.form.get('name').patchValue(res['data']['name']);

            _this13.form.get('description').patchValue(res['data']['description']);

            _this13.form.get('price').patchValue(res['data']['price']);

            _this13.form.get('color').patchValue(res['data']['color']);

            _this13.form.get('year').patchValue(res['data']['year']);

            _this13.form.get('condition').get('_id').patchValue(res['data'].condition._id);

            _this13.form.get('condition').get('name').get('en').patchValue(res['data'].condition.en);

            _this13.form.get('condition').get('name').get('ar').patchValue(res['data'].condition.ar);

            _this13.form.get('model').get('_id').patchValue(res['data'].model._id);

            _this13.form.get('model').get('name').get('en').patchValue(res['data'].model.en);

            _this13.form.get('model').get('name').get('ar').patchValue(res['data'].model.ar);

            _this13.form.get('transmissionType').get('_id').patchValue(res['data'].transmissionType._id);

            _this13.form.get('transmissionType').get('name').get('en').patchValue(res['data'].transmissionType.en);

            _this13.form.get('transmissionType').get('name').get('ar').patchValue(res['data'].transmissionType.ar);

            _this13.form.get('paymentOption').get('_id').patchValue(res['data'].paymentOption._id);

            _this13.form.get('paymentOption').get('name').get('en').patchValue(res['data'].paymentOption.en);

            _this13.form.get('paymentOption').get('name').get('ar').patchValue(res['data'].paymentOption.ar);

            _this13.form.get('distance').get('_id').patchValue(res['data'].distance._id);

            _this13.form.get('distance').get('name').get('en').patchValue(res['data'].distance.en);

            _this13.form.get('distance').get('name').get('ar').patchValue(res['data'].distance.ar);

            _this13.form.get('distance').get('_id').patchValue(res['data'].distance._id);

            _this13.form.get('distance').get('name').get('en').patchValue(res['data'].distance.en);

            _this13.form.get('distance').get('name').get('ar').patchValue(res['data'].distance.ar);

            _this13.selectedCondition = {
              _id: res['data']['condition']['_id'],
              nameEn: res['data']['condition']['en'],
              nameAr: res['data']['condition']['ar']
            };
            _this13.selectedModel = {
              _id: res['data']['model']['_id'],
              nameEn: res['data']['model']['en'],
              nameAr: res['data']['model']['ar']
            };
            _this13.selectedTransmissionType = {
              _id: res['data']['transmissionType']['_id'],
              nameEn: res['data']['transmissionType']['en'],
              nameAr: res['data']['transmissionType']['ar']
            };
            _this13.selectedDistance = {
              _id: res['data']['distance']['_id'],
              nameEn: res['data']['distance']['en'],
              nameAr: res['data']['distance']['ar']
            };
            _this13.selectedPaymentOption = {
              _id: res['data']['paymentOption']['_id'],
              nameEn: res['data']['paymentOption']['en'],
              nameAr: res['data']['paymentOption']['ar']
            };
            _this13.selectedCapacity = {
              _id: res['data']['capacity']['_id'],
              nameEn: res['data']['capacity']['en'],
              nameAr: res['data']['capacity']['ar']
            };
            _this13.selectedCondition = {
              _id: res['data']['condition']['_id'],
              nameEn: res['data']['condition']['en'],
              nameAr: res['data']['condition']['ar']
            };
          }, function (error) {
            console.log(error);

            _this13.toastr.error(error.error.message, 'Error'); // this.error.next(error.error.message);

          });
          this.spinner.hide();
        }
      }, {
        key: "selectModel",
        value: function selectModel(event) {
          this.selectedModel = {};

          if (event) {
            this.selectedModel = event;
          } else {
            this.selectedModel = {};
          }
        }
      }, {
        key: "selectCondition",
        value: function selectCondition(event) {
          this.selectedCondition = {};

          if (event) {
            this.selectedCondition = event;
          } else {
            this.selectedCondition = {};
          }
        }
      }, {
        key: "selectTransmissionType",
        value: function selectTransmissionType(event) {
          this.selectedTransmissionType = {};

          if (event) {
            this.selectedTransmissionType = event;
          } else {
            this.selectedTransmissionType = {};
          }
        }
      }, {
        key: "selectDistance",
        value: function selectDistance(event) {
          this.selectedDistance = {};

          if (event) {
            this.selectedDistance = event;
          } else {
            this.selectedDistance = {};
          }
        }
      }, {
        key: "selectPaymentOption",
        value: function selectPaymentOption(event) {
          this.selectedPaymentOption = {};

          if (event) {
            this.selectedPaymentOption = event;
          } else {
            this.selectedPaymentOption = {};
          }
        }
      }, {
        key: "selectCapacity",
        value: function selectCapacity(event) {
          this.selectedCapacity = {};

          if (event) {
            this.selectedCapacity = event;
          } else {
            this.selectedCapacity = {};
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this14 = this;

          this.spinner.show(); // // // Start bike attributes
          // // // adding values to bike attributes form array controls

          if (this.form.get('year').value < 1980 || this.form.get('year').value > 2020) {
            this.spinner.hide();
            return this.toastr.error('Enter valid year', 'Error');
          }

          this.form.get('condition').get('_id').patchValue(this.selectedCondition['_id']);
          this.form.get('condition').get('name').get('en').patchValue(this.selectedCondition['nameEn']);
          this.form.get('condition').get('name').get('ar').patchValue(this.selectedCondition['nameAr']);
          this.form.get('model').get('_id').patchValue(this.selectedModel['_id']);
          this.form.get('model').get('name').get('en').patchValue(this.selectedModel['nameEn']);
          this.form.get('model').get('name').get('ar').patchValue(this.selectedModel['nameAr']);
          this.form.get('transmissionType').get('_id').patchValue(this.selectedTransmissionType['_id']);
          this.form.get('transmissionType').get('name').get('en').patchValue(this.selectedTransmissionType['nameEn']);
          this.form.get('transmissionType').get('name').get('ar').patchValue(this.selectedTransmissionType['nameAr']);
          this.form.get('distance').get('_id').patchValue(this.selectedDistance['_id']);
          this.form.get('distance').get('name').get('en').patchValue(this.selectedDistance['nameEn']);
          this.form.get('distance').get('name').get('ar').patchValue(this.selectedDistance['nameAr']);
          this.form.get('paymentOption').get('_id').patchValue(this.selectedPaymentOption['_id']);
          this.form.get('paymentOption').get('name').get('en').patchValue(this.selectedPaymentOption['nameEn']);
          this.form.get('paymentOption').get('name').get('ar').patchValue(this.selectedPaymentOption['nameAr']);
          this.form.get('capacity').get('_id').patchValue(this.selectedCapacity['_id']);
          this.form.get('capacity').get('name').get('en').patchValue(this.selectedCapacity['nameEn']);
          this.form.get('capacity').get('name').get('ar').patchValue(this.selectedCapacity['nameAr']); // End bike attributes

          var formData = new FormData();

          for (var key in this.form.value) {
            if (key === 'photos') {
              for (var i = 0; i < this.form.value[key].length; i++) {
                formData.append(key, this.form.value[key][i]);
              }
            } else {
              // contains object
              formData.append(key, JSON.stringify(this.form.value[key]));
            }
          }

          this.bikesService.updateOne(formData, this.bikeId).subscribe(function (res) {
            _this14.originalPhotos = []; // this.form.reset();

            _this14.toastr.info(res['message'], 'Info');

            _this14.router.navigate(['/bikes']);
          }, function (error) {
            console.log(error);

            _this14.toastr.error(error.error.message, 'Error'); // this.error.next(error.error.message);

          });
          this.spinner.hide();
        }
      }]);

      return EditBikeComponent;
    }();

    EditBikeComponent.ɵfac = function EditBikeComponent_Factory(t) {
      return new (t || EditBikeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bikes_service__WEBPACK_IMPORTED_MODULE_3__["BikesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_categories_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    EditBikeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditBikeComponent,
      selectors: [["app-edit-bike"]],
      decls: 25,
      vars: 79,
      consts: [[1, "grid-center-noGutter"], [1, "col-20_sm-22_xs-23", "grid-center-noGutter", "content"], [1, "title", "col-24", "grid-center"], [1, "form", "col-23"], [1, "grid-middle-noGutter"], [1, "form-group", "grid-center-middle-noGutter", "col-24"], [1, "col-24", "grid-center"], [3, "initialPhotos", "control"], ["type", "text", 1, "col-11_sm-24", 3, "label", "fieldId", "required", "placeholder", "tooltipMsg", "control", "fieldClass"], ["type", "text", 1, "col-11_sm-24", "grid-right", 3, "label", "fieldId", "placeholder", "tooltipMsg", "control", "fieldClass"], ["type", "number", 1, "col-11_sm-24", 3, "label", "fieldId", "required", "placeholder", "control", "fieldClass"], [1, "col-11_sm-24", "grid-right", 3, "label", "fieldId", "ItemsList", "initialSelectedItem", "placeholder", "fieldClass", "required", "itemselected"], [1, "col-11_sm-24", 3, "label", "fieldId", "initialSelectedItem", "ItemsList", "placeholder", "fieldClass", "required", "itemselected"], [1, "col-11_sm-24", "grid-right", 3, "label", "fieldId", "initialSelectedItem", "ItemsList", "placeholder", "fieldClass", "required", "itemselected"], ["type", "text", 1, "col-11_sm-24", "grid-right", 3, "label", "fieldId", "required", "placeholder", "tooltipMsg", "control", "fieldClass"], [1, "col-24", "grid-right"], ["type", "submit", 1, "btn", "col-3_sm-5_xs-6", "color1", "round", 3, "disabled", "click"], ["type", "button", 1, "btn", "col-3_sm-5_xs-6", "color2", "round", 3, "routerLink"]],
      template: function EditBikeComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-input-text", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-select", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemselected", function EditBikeComponent_Template_app_select_itemselected_12_listener($event) {
            return ctx.selectModel($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemselected", function EditBikeComponent_Template_app_select_itemselected_13_listener($event) {
            return ctx.selectCondition($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-select", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemselected", function EditBikeComponent_Template_app_select_itemselected_14_listener($event) {
            return ctx.selectTransmissionType($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemselected", function EditBikeComponent_Template_app_select_itemselected_15_listener($event) {
            return ctx.selectDistance($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-select", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemselected", function EditBikeComponent_Template_app_select_itemselected_16_listener($event) {
            return ctx.selectPaymentOption($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemselected", function EditBikeComponent_Template_app_select_itemselected_17_listener($event) {
            return ctx.selectCapacity($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-input-text", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-input-text", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditBikeComponent_Template_button_click_21_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Submit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("initialPhotos", ctx.originalPhotos)("control", ctx.form.get("photos"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Name")("fieldId", "name")("required", true)("placeholder", "Bike Name")("tooltipMsg", "Name")("control", ctx.form.get("name"))("fieldClass", "col-19_xlg-18_lg-17_md-24");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Description")("fieldId", "description")("placeholder", "Bike description")("tooltipMsg", "Bike description")("control", ctx.form.get("description"))("fieldClass", "col-19_xlg-18_lg-17_md-24");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Price")("fieldId", "price")("required", true)("placeholder", "Bike Cost")("control", ctx.form.get("price"))("fieldClass", "col-19_xlg-18_lg-17_md-24");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Model")("fieldId", "model")("ItemsList", ctx.models)("initialSelectedItem", ctx.selectedModel)("placeholder", "Choose transmission type")("fieldClass", "col-18_md-24")("required", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Condition")("fieldId", "condition")("initialSelectedItem", ctx.selectedCondition)("ItemsList", ctx.conditions)("placeholder", "Choose condition")("fieldClass", "col-18_md-24")("required", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Transmission Type")("fieldId", "transmissionType")("initialSelectedItem", ctx.selectedTransmissionType)("ItemsList", ctx.transmissionTypes)("placeholder", "Choose transmission type")("fieldClass", "col-18_md-24")("required", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Distance")("fieldId", "distance")("initialSelectedItem", ctx.selectedDistance)("ItemsList", ctx.distances)("placeholder", "Choose distance")("fieldClass", "col-18_md-24")("required", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Payment Option")("fieldId", "paymentOption")("initialSelectedItem", ctx.selectedPaymentOption)("ItemsList", ctx.paymentOptions)("placeholder", "Choose payment option")("fieldClass", "col-18_md-24")("required", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Capacity")("fieldId", "capacity")("initialSelectedItem", ctx.selectedCapacity)("ItemsList", ctx.capacities)("placeholder", "Choose capacity")("fieldClass", "col-18_md-24")("required", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Color")("fieldId", "color")("required", true)("placeholder", "Bike Color")("tooltipMsg", "Color")("control", ctx.form.get("color"))("fieldClass", "col-19_xlg-18_lg-17_md-24");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Year")("fieldId", "year")("required", true)("placeholder", "Bike year")("control", ctx.form.get("year"))("fieldClass", "col-19_xlg-18_lg-17_md-24");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](78, _c0));
        }
      },
      directives: [_reusable_components_form_fields_upload_multi_photos_upload_multi_photos_component__WEBPACK_IMPORTED_MODULE_7__["UploadMultiPhotosComponent"], _reusable_components_form_fields_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_8__["InputTextComponent"], _reusable_components_form_fields_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_9__["TextareaComponent"], _reusable_components_form_fields_select_select_component__WEBPACK_IMPORTED_MODULE_10__["SelectComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  background-color: #efedf2;\n}\n\n.content[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background-color: #fffdfe;\n  border: 1px solid #f1f1f1;\n  padding-bottom: 15px !important;\n  margin-bottom: 20px;\n  box-shadow: 0 0px 8px 1px rgba(0, 0, 0, 0.05);\n  margin-top: 20px;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0c425d;\n  margin-bottom: 15px;\n  background-color: #f9f9f9;\n  border-bottom: 1px solid #f1f1f1;\n  padding: 10px !important;\n  border-radius: 10px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  font-size: 16px;\n}\n\n.textarea-maxWidth[_ngcontent-%COMP%] {\n  max-width: 81.7%;\n}\n\n[_nghost-%COMP%]     app-ng2tel .iti.iti--allow-dropdown {\n  width: 100%;\n}\n\n.activeModalIcon[_ngcontent-%COMP%] {\n  background: #1f1a5f !important;\n  border-radius: 10px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.actions[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  padding: 4px;\n  vertical-align: middle;\n  background-color: red;\n  color: white;\n  border-radius: 50%;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmlrZXMvZWRpdC1iaWtlL0U6XFxVbnRpdGxlZCBGb2xkZXJcXHByaXZhdGVcXHByb2plY3RzXFxmdWxsX3N0YWNrXFxtb3RvYmFyXFxtb3RvYmFyX2FkbWluL3NyY1xcc2Nzc1xcYWRkLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Jpa2VzL2VkaXQtYmlrZS9FOlxcVW50aXRsZWQgRm9sZGVyXFxwcml2YXRlXFxwcm9qZWN0c1xcZnVsbF9zdGFja1xcbW90b2JhclxcbW90b2Jhcl9hZG1pbi9zcmNcXHNjc3NcXGFic3RyYWN0c1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9wYWdlcy9iaWtlcy9lZGl0LWJpa2UvZWRpdC1iaWtlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9iaWtlcy9lZGl0LWJpa2UvRTpcXFVudGl0bGVkIEZvbGRlclxccHJpdmF0ZVxccHJvamVjdHNcXGZ1bGxfc3RhY2tcXG1vdG9iYXJcXG1vdG9iYXJfYWRtaW4vc3JjXFxhcHBcXHBhZ2VzXFxiaWtlc1xcZWRpdC1iaWtlXFxlZGl0LWJpa2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0VBQ0EseUJDaUJ3QjtBQ2xCMUI7O0FGSUE7RUFDRSxtQkFBQTtFQUNBLHlCQ2V3QjtFRGR4Qix5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtFQUNBLGdCQUFBO0FFREY7O0FGSUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQ2xCTztFRG1CUCxtQkFBQTtFQUNBLHlCQ0x3QjtFRE14QixnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUVERjs7QUZJQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FFREY7O0FGSUE7RUFDRSxnQkFBQTtBRURGOztBRklBO0VBQ0UsV0FBQTtBRURGOztBRkdBO0VBRUcsOEJBQUE7RUFDRCxtQkFBQTtBRURGOztBQ3pDQTtFQUNJLHFCQUFBO0FENENKOztBQzNDSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUQ2Q1IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9iaWtlcy9lZGl0LWJpa2UvZWRpdC1iaWtlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi9hYnN0cmFjdHMvdmFyaWFibGVzJztcblxuOmhvc3Qge1xuICBkaXNwbGF5ICAgICAgICAgOiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tYmFja2dyb3VuZC1jb2xvcjtcbn1cblxuLmNvbnRlbnQge1xuICBib3JkZXItcmFkaXVzICAgOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FyZC1ib2R5O1xuICBib3JkZXIgICAgICAgICAgOiAxcHggc29saWQgJGJvcmRlcjtcbiAgcGFkZGluZy1ib3R0b20gIDogMTVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tICAgOiAyMHB4O1xuICBib3gtc2hhZG93ICAgICAgOiAwIDBweCA4cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIG1hcmdpbi10b3AgICAgICA6IDIwcHhcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplICAgICAgIDogMjJweDtcbiAgZm9udC13ZWlnaHQgICAgIDogNzAwO1xuICBjb2xvciAgICAgICAgICAgOiAkY29sb3IxO1xuICBtYXJnaW4tYm90dG9tICAgOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FyZC1oZWFkZXItYmc7XG4gIGJvcmRlci1ib3R0b20gICA6IDFweCBzb2xpZCAkYm9yZGVyO1xuICBwYWRkaW5nICAgICAgICAgOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbiAgIDogMCAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi50ZXh0YXJlYS1tYXhXaWR0aCB7XG4gIG1heC13aWR0aDogODEuNyU7XG59XG5cbjpob3N0IDo6bmctZGVlcCBhcHAtbmcydGVsIC5pdGkuaXRpLS1hbGxvdy1kcm9wZG93biB7XG4gIHdpZHRoOiAxMDAlXG59XG4uYWN0aXZlTW9kYWxJY29ue1xuICAvLyBiYWNrZ3JvdW5kOiAjNDZiOGRhICFpbXBvcnRhbnQ7XG4gICBiYWNrZ3JvdW5kOiAjMWYxYTVmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbn0iLCIvL2NvbG9yc1xuJHdoaXRlIDogd2hpdGU7XG4kY29sb3IxOiAjMGM0MjVkO1xuJGNvbG9yMjogI2E4ZDJiZTtcbiRjb2xvcjM6ICM0ODk5YzI7XG4kY29sb3I0OiAjMWY3N2EzO1xuXG4kY29sb3I1IDogI2Y5YWU0ZTtcbiRjb2xvcjU1OiAjZDY4NTIyO1xuXG4kYm9yZGVyICAgICAgICAgICAgICAgICA6ICNmMWYxZjE7XG4kZGF0YS10YWJsZS1ib3JkZXIgICAgICA6ICNlOWU5ZTk7XG4kZ3JheTIgICAgICAgICAgICAgICAgICA6ICNlMmUyZTI7XG4kZ3JheTMgICAgICAgICAgICAgICAgICA6ICM3NTc1NzU7XG4kdHJhc2gtY29sb3IgICAgICAgICAgICA6ICNDOTMwMkM7XG4kZm9udC1jb2xvciAgICAgICAgICAgICA6ICM1NTU7XG4kYWN0aXZlLWJyZWFkY3J1bWItY29sb3I6ICMzNDM0MzQ7XG4kY2FyZC1oZWFkZXItYmcgICAgICAgICA6ICNmOWY5Zjk7IC8vI2VmZWZlZjsgLy8jZjlmOWY5O1xuJHBsYWNlaG9sZGVyLWNvbG9yICAgICAgOiAjYjNiM2IzO1xuXG4vLyBiYWNrZ3JvdW5kIGNvbG9yXG4kbWFpbi1iYWNrZ3JvdW5kLWNvbG9yICA6ICNlZmVkZjI7XG4kaGVhZGVyLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuJGRhdGEtdGFibGUtYm94ICAgICAgICAgOiAjZmZmZGZlOyAvLyNmN2Y3Zjc7XG4kY2FyZC1ib2R5ICAgICAgICAgICAgICA6ICNmZmZkZmU7XG5cbi8vIERhc2hib2FyZFxuJG1hcmdpbkJldHdlZW5DYXJkczogMjJweDtcbiRheGlzRm9udFNpemUgICAgICA6IDEycHg7XG4kc21hbGxBeGlzRm9udFNpemUgOiAxMHB4O1xuXG4vL2hlYWRlclxuJHByb2ZpbGUtbWVudS1jb2xvcjogI2Y5ZjlmOTtcbiRiaWxsLWNvbG9yICAgICAgICA6ICM5YmEyYWE7XG4kYmlsbC1ob3Zlci1jb2xvciAgOiAjNzM4MThmO1xuXG4vL0xheW91dCBWYXJpYWJsZXNcblxuJGhlYWRlci1oZWlnaHQgOiA1NXB4O1xuJHNpZGVNZW51LXdpZHRoOiAyMDBweDtcblxuXG4vL2xvZ2luXG4kbG95YWxpdHktY29sb3IgIDogIzg4N2Y3ZjtcbiRsb2dpbi1ib3gtY29sb3IgOiAjZjVmMmYwO1xuXG4vL21haWxcbiRtYWlsLWNoZWNrYm94LWNvbG9yOiAjMDA3M2FhO1xuJHVzZXItbWFpbC1jb2xvciAgICA6ICMyOTJiMmM7XG5cbi8vcHJvZmlsZVxuJGFjdGl2ZS1jb2xvciAgICAgOiAjZjRmNmY5O1xuJGljb24tY29sb3IgICAgICAgOiAjOTU5Y2I2O1xuJGxhYmVsLXRpdGxlLWNvbG9yOiAjNTA1NjZhO1xuXG4vL2VtYWlsIHRlbXBsYXRlc1xuJGVtYWlsLWJsdWUtY29sb3I6ICMwZjQxNWQ7XG4kZW1haWwtZ3JheS1jb2xvcjogIzVmNjA2MDtcbiRlbWFpbC1zeWFuLWNvbG9yOiAjYTJkOWMyO1xuJGVtYWlsLW9yYWduZS1jb2xvcjogI2ZmYWM1MjtcblxuLy9mb250c1xuJGZvbnQyOCAgICAgICAgICAgOiAyOHB4O1xuJGZvbnQyNCAgICAgICAgICAgOiAyNHB4O1xuJGZvbnQxOCAgICAgICAgICAgOiAxOHB4O1xuJGZvbnQxNiAgICAgICAgICAgOiAxNnB4O1xuJGZvbnQxNCAgICAgICAgICAgOiAxNHB4O1xuJGZvbnQxMiAgICAgICAgICAgOiAxMnB4O1xuJGZvbnQxMCAgICAgICAgICAgOiAxMHB4O1xuJGZvbnQtd2VpZ2h0LTYwMCAgOiA2MDA7XG4kZm9udC13ZWlnaHQtNTAwICA6IDUwMDtcbiRwbGFjZWhvbGRlci1mb250IDogMTJweDtcbiRsYWJlbC1mb250ICAgICAgIDogMTRweDtcbiRjYXJkLWhlYWRlci1mb250IDogMTZweDtcblxuJGRhdGEtdGFibGUtaGVhZGVyLTEzNjYgOiAxNHB4O1xuJGRhdGEtdGFibGUtaGVhZGVyLTE5MjAgOiAxNnB4O1xuJGRhdGEtdGFibGUtYm9keS0xMzY2IDogMTJweDtcbiRkYXRhLXRhYmxlLWJvZHktMTkyMDogMTZweDtcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVkZjI7XG59XG5cbi5jb250ZW50IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmRmZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgcGFkZGluZy1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm94LXNoYWRvdzogMCAwcHggOHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMGM0MjVkO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5idXR0b24ge1xuICBtYXJnaW46IDAgMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4udGV4dGFyZWEtbWF4V2lkdGgge1xuICBtYXgtd2lkdGg6IDgxLjclO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgYXBwLW5nMnRlbCAuaXRpLml0aS0tYWxsb3ctZHJvcGRvd24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFjdGl2ZU1vZGFsSWNvbiB7XG4gIGJhY2tncm91bmQ6ICMxZjFhNWYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmFjdGlvbnMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uYWN0aW9ucyBpIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiA0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc2Nzcy9hZGQtZWRpdC5jb21wb25lbnQuc2Nzc1wiO1xyXG4uYWN0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBpIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditBikeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-bike',
          templateUrl: './edit-bike.component.html',
          styleUrls: ['./edit-bike.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _bikes_service__WEBPACK_IMPORTED_MODULE_3__["BikesService"]
        }, {
          type: _categories_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-bikes-bikes-module-es5.js.map