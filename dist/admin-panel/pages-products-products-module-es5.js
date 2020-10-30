function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-products-products-module"], {
  /***/
  "./src/app/models/product.ts":
  /*!***********************************!*\
    !*** ./src/app/models/product.ts ***!
    \***********************************/

  /*! no static exports found */

  /***/
  function srcAppModelsProductTs(module, exports) {
    var Product = function Product() {
      _classCallCheck(this, Product);
    };
    /***/

  },

  /***/
  "./src/app/pages/products/add-product/add-product.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/products/add-product/add-product.component.ts ***!
    \*********************************************************************/

  /*! exports provided: AddProductComponent */

  /***/
  function srcAppPagesProductsAddProductAddProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddProductComponent", function () {
      return AddProductComponent;
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


    var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../products.service */
    "./src/app/pages/products/products.service.ts");
    /* harmony import */


    var _product_attributes_product_attributes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../product-attributes/product-attributes.service */
    "./src/app/pages/product-attributes/product-attributes.service.ts");
    /* harmony import */


    var _categories_categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../categories/categories.service */
    "./src/app/pages/categories/categories.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _reusable_components_form_fields_upload_photo_upload_photo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../reusable-components/form-fields/upload-photo/upload-photo.component */
    "./src/app/reusable-components/form-fields/upload-photo/upload-photo.component.ts");
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _reusable_components_form_fields_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../reusable-components/form-fields/multi-select/multi-select.component */
    "./src/app/reusable-components/form-fields/multi-select/multi-select.component.ts");

    function AddProductComponent_ng_container_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-select", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemselected", function AddProductComponent_ng_container_16_Template_app_select_itemselected_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var i_r3 = ctx.index;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.selectSubCategory(i_r3, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var i_r3 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "sub category")("fieldId", "subCategory" + (i_r3 + 1).toString())("ItemsList", ctx_r0.subCategories[i_r3])("placeholder", "Choose parent category")("fieldClass", "col-18_md-24")("required", true);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "grid-right": a0
      };
    };

    function AddProductComponent_ng_container_17_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-multi-select", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemselected", function AddProductComponent_ng_container_17_ng_container_1_Template_app_multi_select_itemselected_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var attIndex_r8 = ctx.index;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r9.selectProductAttribute($event, attIndex_r8);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var att_r7 = ctx.$implicit;
        var attIndex_r8 = ctx.index;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, attIndex_r8 % 2 != 0))("label", att_r7.get("name").get("en").value + "(" + att_r7.get("name").get("ar").value + ")")("fieldId", att_r7.get("name").get("en").value)("ItemsList", ctx_r6.selectProductAttributesListValues[attIndex_r8].values)("fieldClass", "col-18_md-24")("required", true);
      }
    }

    function AddProductComponent_ng_container_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddProductComponent_ng_container_17_ng_container_1_Template, 2, 8, "ng-container", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.form.get("productAttributes")["controls"]);
      }
    }

    var _c1 = function _c1() {
      return ["/products"];
    };

    var AddProductComponent = /*#__PURE__*/function () {
      function AddProductComponent(fb, productsService, productAttributeService, categoriesService, toastr, router) {
        _classCallCheck(this, AddProductComponent);

        this.fb = fb;
        this.productsService = productsService;
        this.productAttributeService = productAttributeService;
        this.categoriesService = categoriesService;
        this.toastr = toastr;
        this.router = router;
        this.form = this.fb.group({
          image: [],
          name: this.fb.group({
            en: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          }),
          price: [''],
          description: this.fb.group({
            en: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          }),
          category: this.fb.group({
            _id: [],
            name: this.fb.group({
              en: [],
              ar: []
            })
          }),
          productAttributes: this.fb.array([])
        });
        this.subCategories = [];
        this.selectedCategory = {}; // End select dropdown
        // Start select dropdown
        // dropdown lists for product attributes

        this.selectProductAttributesListValues = [{
          values: []
        }];
        this.selectedProductAttribute = [{
          values: []
        }];
      }

      _createClass(AddProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getbaseCategoriesList(); // this.getproductAttributesList();
        }
      }, {
        key: "getbaseCategoriesList",
        value: function getbaseCategoriesList() {
          var _this = this;

          this.categoriesService.getBaseCategories();
          this.categoriesService.baseCategories.subscribe(function (data) {
            if (data) {
              _this.selectBaseCategoriesList = data.map(function (x) {
                return {
                  _id: x['_id'],
                  nameEn: "".concat(x['name']['en']),
                  nameAr: "".concat(x['name']['ar'])
                };
              });
            }
          });
        }
      }, {
        key: "selectBaseCategory",
        value: function selectBaseCategory(event) {
          var _this2 = this;

          this.selectedCategory = {};
          this.subCategories = [];
          this.resetProductAttributes();

          if (event) {
            this.selectedCategory = {};
            this.selectedCategory[0] = event;
            this.categoriesService.getOne(event._id).subscribe(function (res) {
              _this2.toastr.info(res['message'], 'Info');

              _this2.subCategories = [];

              if (res['data'].categories) {
                if (res['data'].categories.length > 0) {
                  _this2.subCategories[0] = res['data'].categories.map(function (x) {
                    return {
                      _id: x['_id'],
                      nameEn: "".concat(x['name']['en']),
                      nameAr: "".concat(x['name']['ar'])
                    };
                  });
                }
              }

              if (res['data'].productAttributes) {
                console.log(res['data'].productAttributes);

                _this2.getproductAttributesList(res['data'].productAttributes);
              }
            }, function (error) {
              console.log(error);

              _this2.toastr.error(error.error.message, 'Error'); // this.error.next(error.error.message);

            });
          } else {
            this.selectedCategory = {};
            this.subCategories = [];
            this.resetProductAttributes();
          }
        } // End select dropdown

      }, {
        key: "selectSubCategory",
        value: function selectSubCategory(fieldIndex, event) {
          var _this3 = this;

          this.resetProductAttributes(); // delete all next selected categories to index

          for (var key in this.selectedCategory) {
            if (key > fieldIndex + 1) {
              delete this.selectedCategory[key];
            }
          } // delete all next subcategories


          this.subCategories.splice(fieldIndex + 1);

          if (event) {
            // selected category of index = event
            this.selectedCategory[fieldIndex + 1] = event;
            this.categoriesService.getOne(event._id).subscribe(function (res) {
              _this3.toastr.info(res['message'], 'Info');

              if (res['data'].categories) {
                if (res['data'].categories.length > 0) {
                  _this3.subCategories[fieldIndex + 1] = res['data'].categories.map(function (x) {
                    return {
                      _id: x['_id'],
                      nameEn: "".concat(x['name']['en']),
                      nameAr: "".concat(x['name']['ar'])
                    };
                  });
                }
              }

              if (res['data'].productAttributes) {
                console.log(res['data'].productAttributes);

                _this3.getproductAttributesList(res['data'].productAttributes);
              }
            }, function (error) {
              console.log(error);

              _this3.toastr.error(error.error.message, 'Error'); // this.error.next(error.error.message);

            });
          } else {
            // selected category of index = event
            delete this.selectedCategory[fieldIndex + 1];
          }
        } // selectProductAttributesListValues: { values: InputSelectItem[] }[] = [];
        // selectedProductAttribute: { values: InputSelectItem[] }[] = [];

      }, {
        key: "selectProductAttribute",
        value: function selectProductAttribute(event, productAttributeIndex) {
          this.selectedProductAttribute[productAttributeIndex].values = event;
        }
      }, {
        key: "resetProductAttributes",
        value: function resetProductAttributes() {
          this.selectProductAttributesListValues = [{
            values: []
          }];
          this.selectedProductAttribute = [{
            values: []
          }];
          var productAttributes = this.form.get('productAttributes');

          while (productAttributes.length !== 0) {
            productAttributes.removeAt(0);
          }
        }
      }, {
        key: "getproductAttributesList",
        value: function getproductAttributesList(attributes) {
          var productAttributes = this.form.get('productAttributes');

          for (var i = 0; i < attributes.length; i++) {
            this.selectedProductAttribute[i] = {
              values: []
            };
            this.selectProductAttributesListValues[i] = {
              values: []
            }; // this.selectedProductAttribute.push({ values: [] });
            // this.selectProductAttributesListValues.push({ values: [] });
            // add product attributes to form

            productAttributes.controls[i] = this.fb.group({
              name: this.fb.group({
                en: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                ar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              }),
              values: this.fb.array([])
            }); // productAttributes.push(
            //   this.fb.group({
            //     name: this.fb.group({
            //       en: ['', Validators.required],
            //       ar: ['', Validators.required],
            //     }),
            //     values: this.fb.array([]),
            //   })
            // );

            productAttributes.controls[i].get('name').get('en').patchValue(attributes[i]['name']['en']);
            productAttributes.controls[i].get('name').get('ar').patchValue(attributes[i]['name']['ar']); // list of product attributes values to dropdown fields

            for (var valueIndex = 0; valueIndex < attributes[i].values.length; valueIndex++) {
              this.selectProductAttributesListValues[i].values.push({
                _id: attributes[i].values[valueIndex]['_id'],
                nameEn: attributes[i].values[valueIndex]['en'],
                nameAr: attributes[i].values[valueIndex]['ar']
              });
            }
          }
        } // getproductAttributesList() {
        //   this.productAttributeService.getAll();
        //   this.productAttributeService.productAttributes.subscribe(
        //     (productAttributeRes) => {
        //       if (productAttributeRes) {
        //         const productAttributes = this.form.get(
        //           'productAttributes'
        //         ) as FormArray;
        //         for (let i = 0; i < productAttributeRes.length; i++) {
        //           this.selectedProductAttribute[i] = { values: [] };
        //           this.selectProductAttributesListValues[i] = { values: [] };
        //           // this.selectedProductAttribute.push({ values: [] });
        //           // this.selectProductAttributesListValues.push({ values: [] });
        //           // add product attributes to form
        //           productAttributes.controls[i] = this.fb.group({
        //             name: this.fb.group({
        //               en: ['', Validators.required],
        //               ar: ['', Validators.required],
        //             }),
        //             values: this.fb.array([]),
        //           });
        //           // productAttributes.push(
        //           //   this.fb.group({
        //           //     name: this.fb.group({
        //           //       en: ['', Validators.required],
        //           //       ar: ['', Validators.required],
        //           //     }),
        //           //     values: this.fb.array([]),
        //           //   })
        //           // );
        //           productAttributes.controls[i]
        //             .get('name')
        //             .get('en')
        //             .patchValue(productAttributeRes[i]['name']['en']);
        //           productAttributes.controls[i]
        //             .get('name')
        //             .get('ar')
        //             .patchValue(productAttributeRes[i]['name']['ar']);
        //           // list of product attributes values to dropdown fields
        //           for (
        //             let valueIndex = 0;
        //             valueIndex < productAttributeRes[i].values.length;
        //             valueIndex++
        //           ) {
        //             this.selectProductAttributesListValues[i].values.push({
        //               _id: productAttributeRes[i].values[valueIndex]['_id'],
        //               nameEn: productAttributeRes[i].values[valueIndex]['en'],
        //               nameAr: productAttributeRes[i].values[valueIndex]['ar'],
        //             });
        //           }
        //         }
        //       }
        //     }
        //   );
        // }
        // End select dropdown

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this4 = this;

          // Start product attributes
          // adding values to product attributes form array controls
          var productAttributes = this.form.get('productAttributes');

          for (var i = 0; i < productAttributes.length; i++) {
            var productAttributeValues = productAttributes.controls[i].get('values');

            for (var valueIndex = 0; valueIndex < this.selectedProductAttribute[i].values.length; valueIndex++) {
              productAttributeValues.push(this.fb.group({
                en: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                ar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              }));
              productAttributeValues.controls[valueIndex].get('en').patchValue(this.selectedProductAttribute[i].values[valueIndex].nameEn);
              productAttributeValues.controls[valueIndex].get('ar').patchValue(this.selectedProductAttribute[i].values[valueIndex].nameAr);
            }
          } // adding values to product attributes form array controls


          this.form.get('productAttributes').patchValue(productAttributes.controls); // End product attributes
          /////////////////////////
          // Start category

          if (Object.keys(this.selectedCategory).length === 0) {
            this.form.get('category').reset();
          } else {
            var count = 0;

            for (var prop in this.selectedCategory) {
              if (this.selectedCategory.hasOwnProperty(prop)) ++count;
            }

            if (this.selectedCategory[count - 1]) {
              this.form.get('category').get('_id').patchValue(this.selectedCategory[count - 1]._id);
              this.form.get('category').get('name').get('en').patchValue(this.selectedCategory[count - 1].nameEn);
              this.form.get('category').get('name').get('ar').patchValue(this.selectedCategory[count - 1].nameAr);
            }
          } // End category
          /////////////////////////


          console.log(this.form.value);
          var formData = new FormData();

          for (var key in this.form.value) {
            if (this.form.value[key] instanceof File) {
              formData.append(key, this.form.value[key]);
            } else {
              // contains object
              formData.append(key, JSON.stringify(this.form.value[key]));
            }
          }

          this.productsService.addOne(formData).subscribe(function (res) {
            console.log(res);
            _this4.image = null;

            _this4.form.reset();

            _this4.toastr.info(res['message'], 'Info');

            _this4.router.navigate(['../']);
          }, function (error) {
            console.log(error);

            _this4.toastr.error(error.error.message, 'Error'); // this.error.next(error.error.message);

          });
        }
      }]);

      return AddProductComponent;
    }();

    AddProductComponent.ɵfac = function AddProductComponent_Factory(t) {
      return new (t || AddProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_attributes_product_attributes_service__WEBPACK_IMPORTED_MODULE_3__["ProductAttributesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_categories_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    AddProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddProductComponent,
      selectors: [["app-add-product"]],
      decls: 23,
      vars: 50,
      consts: [[1, "grid-center-noGutter"], [1, "col-20_sm-22_xs-23", "grid-center-noGutter", "content"], [1, "title", "col-24", "grid-center"], [1, "form", "col-23"], [1, "grid-middle-noGutter"], [1, "form-group", "grid-center-middle-noGutter", "col-24"], [1, "col-24", "grid-center"], [3, "fieldId", "image", "control"], ["type", "text", 1, "col-11_sm-24", 3, "label", "fieldId", "required", "placeholder", "tooltipMsg", "control", "fieldClass"], ["type", "text", 1, "col-11_sm-24", "grid-right", 3, "label", "fieldId", "rtldirection", "required", "placeholder", "tooltipMsg", "control", "fieldClass"], ["type", "number", 1, "col-11_sm-24", 3, "label", "fieldId", "required", "placeholder", "control", "fieldClass"], [1, "col-24", "grid-noGutter"], [1, "col-11_sm-24", 3, "label", "fieldId", "ItemsList", "placeholder", "fieldClass", "required", "itemselected"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "grid-right"], ["type", "submit", 1, "btn", "col-3_sm-5_xs-6", "color1", "round", 3, "disabled", "click"], ["type", "button", 1, "btn", "col-3_sm-5_xs-6", "color2", "round", 3, "routerLink"], [1, "col-11_sm-24", 3, "ngClass", "label", "fieldId", "ItemsList", "fieldClass", "required", "itemselected"]],
      template: function AddProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-upload-photo", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-input-text", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-input-text", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-textarea", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-textarea", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-input-text", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemselected", function AddProductComponent_Template_app_select_itemselected_15_listener($event) {
            return ctx.selectBaseCategory($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AddProductComponent_ng_container_16_Template, 3, 6, "ng-container", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AddProductComponent_ng_container_17_Template, 2, 1, "ng-container", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProductComponent_Template_button_click_19_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Submit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fieldId", "photo")("image", ctx.image)("control", ctx.form.get("image"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Name en")("fieldId", "nameEn")("required", true)("placeholder", "Product Name")("tooltipMsg", "Name")("control", ctx.form.get("name.en"))("fieldClass", "col-19_xlg-18_lg-17_md-24");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Name ar")("fieldId", "nameAr")("rtldirection", true)("required", true)("placeholder", "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C")("tooltipMsg", "Arabic")("control", ctx.form.get("name.ar"))("fieldClass", "col-19_xlg-18_lg-17_md-24");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Description en")("fieldId", "descriptionEn")("required", true)("placeholder", "Product description")("tooltipMsg", "Product description")("control", ctx.form.get("description.en"))("fieldClass", "col-19_xlg-18_lg-17_md-24");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Description ar")("fieldId", "descriptionAr")("rtldirection", true)("required", true)("placeholder", "\u0648\u0635\u0641 \u0627\u0644\u0645\u0646\u062A\u062C")("tooltipMsg", "\u0648\u0635\u0641 \u0627\u0644\u0645\u0646\u062A\u062C")("control", ctx.form.get("description.ar"))("fieldClass", "col-19_xlg-18_lg-17_md-24");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Price")("fieldId", "price")("required", true)("placeholder", "Product Cost")("control", ctx.form.get("price"))("fieldClass", "col-19_xlg-18_lg-17_md-24");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Category")("fieldId", "category")("ItemsList", ctx.selectBaseCategoriesList)("placeholder", "Choose parent category")("fieldClass", "col-18_md-24")("required", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subCategories);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("productAttributes")["controls"].length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](49, _c1));
        }
      },
      directives: [_reusable_components_form_fields_upload_photo_upload_photo_component__WEBPACK_IMPORTED_MODULE_7__["UploadPhotoComponent"], _reusable_components_form_fields_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_8__["InputTextComponent"], _reusable_components_form_fields_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_9__["TextareaComponent"], _reusable_components_form_fields_select_select_component__WEBPACK_IMPORTED_MODULE_10__["SelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _reusable_components_form_fields_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_12__["MultiSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  background-color: #efedf2;\n}\n\n.content[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background-color: #fffdfe;\n  border: 1px solid #f1f1f1;\n  padding-bottom: 15px !important;\n  margin-bottom: 20px;\n  box-shadow: 0 0px 8px 1px rgba(0, 0, 0, 0.05);\n  margin-top: 20px;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0c425d;\n  margin-bottom: 15px;\n  background-color: #f9f9f9;\n  border-bottom: 1px solid #f1f1f1;\n  padding: 10px !important;\n  border-radius: 10px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  font-size: 16px;\n}\n\n.textarea-maxWidth[_ngcontent-%COMP%] {\n  max-width: 81.7%;\n}\n\n[_nghost-%COMP%]     app-ng2tel .iti.iti--allow-dropdown {\n  width: 100%;\n}\n\n.activeModalIcon[_ngcontent-%COMP%] {\n  background: #1f1a5f !important;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvYWRkLXByb2R1Y3QvRTpcXFVudGl0bGVkIEZvbGRlclxccHJpdmF0ZVxccHJvamVjdHNcXGZ1bGxfc3RhY2tcXG1vdG9iYXJcXG1vdG9iYXJfYWRtaW4vc3JjXFxhcHBcXHBhZ2VzXFxwcm9kdWN0c1xcYWRkLXByb2R1Y3RcXGFkZC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9kdWN0cy9hZGQtcHJvZHVjdC9FOlxcVW50aXRsZWQgRm9sZGVyXFxwcml2YXRlXFxwcm9qZWN0c1xcZnVsbF9zdGFja1xcbW90b2JhclxcbW90b2Jhcl9hZG1pbi9zcmNcXHNjc3NcXGFic3RyYWN0c1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9kdWN0cy9hZGQtcHJvZHVjdC9hZGQtcHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGNBQUE7RUFDQSx5QkNpQnNCO0FDbEIxQjs7QUZJQTtFQUNJLG1CQUFBO0VBQ0EseUJDZXNCO0VEZHRCLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0VBQ0EsZ0JBQUE7QUVESjs7QUZJQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNDbEJLO0VEbUJMLG1CQUFBO0VBQ0EseUJDTHNCO0VETXRCLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBRURKOztBRklBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUVESjs7QUZJQTtFQUNJLGdCQUFBO0FFREo7O0FGSUE7RUFDSSxXQUFBO0FFREo7O0FGR0E7RUFFSSw4QkFBQTtFQUNBLG1CQUFBO0FFREoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0cy9hZGQtcHJvZHVjdC9hZGQtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zY3NzL2Fic3RyYWN0cy92YXJpYWJsZXNcIjtcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWJhY2tncm91bmQtY29sb3I7XG59XG5cbi5jb250ZW50IHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjYXJkLWJvZHk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgYm94LXNoYWRvdzogMCAwcHggOHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICRjb2xvcjE7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FyZC1oZWFkZXItYmc7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXI7XG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4udGV4dGFyZWEtbWF4V2lkdGgge1xuICAgIG1heC13aWR0aDogODEuNyU7XG59XG5cbjpob3N0IDo6bmctZGVlcCBhcHAtbmcydGVsIC5pdGkuaXRpLS1hbGxvdy1kcm9wZG93biB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uYWN0aXZlTW9kYWxJY29uIHtcbiAgICAvLyBiYWNrZ3JvdW5kOiAjNDZiOGRhICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogIzFmMWE1ZiAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4iLCIvL2NvbG9yc1xuJHdoaXRlIDogd2hpdGU7XG4kY29sb3IxOiAjMGM0MjVkO1xuJGNvbG9yMjogI2E4ZDJiZTtcbiRjb2xvcjM6ICM0ODk5YzI7XG4kY29sb3I0OiAjMWY3N2EzO1xuXG4kY29sb3I1IDogI2Y5YWU0ZTtcbiRjb2xvcjU1OiAjZDY4NTIyO1xuXG4kYm9yZGVyICAgICAgICAgICAgICAgICA6ICNmMWYxZjE7XG4kZGF0YS10YWJsZS1ib3JkZXIgICAgICA6ICNlOWU5ZTk7XG4kZ3JheTIgICAgICAgICAgICAgICAgICA6ICNlMmUyZTI7XG4kZ3JheTMgICAgICAgICAgICAgICAgICA6ICM3NTc1NzU7XG4kdHJhc2gtY29sb3IgICAgICAgICAgICA6ICNDOTMwMkM7XG4kZm9udC1jb2xvciAgICAgICAgICAgICA6ICM1NTU7XG4kYWN0aXZlLWJyZWFkY3J1bWItY29sb3I6ICMzNDM0MzQ7XG4kY2FyZC1oZWFkZXItYmcgICAgICAgICA6ICNmOWY5Zjk7IC8vI2VmZWZlZjsgLy8jZjlmOWY5O1xuJHBsYWNlaG9sZGVyLWNvbG9yICAgICAgOiAjYjNiM2IzO1xuXG4vLyBiYWNrZ3JvdW5kIGNvbG9yXG4kbWFpbi1iYWNrZ3JvdW5kLWNvbG9yICA6ICNlZmVkZjI7XG4kaGVhZGVyLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuJGRhdGEtdGFibGUtYm94ICAgICAgICAgOiAjZmZmZGZlOyAvLyNmN2Y3Zjc7XG4kY2FyZC1ib2R5ICAgICAgICAgICAgICA6ICNmZmZkZmU7XG5cbi8vIERhc2hib2FyZFxuJG1hcmdpbkJldHdlZW5DYXJkczogMjJweDtcbiRheGlzRm9udFNpemUgICAgICA6IDEycHg7XG4kc21hbGxBeGlzRm9udFNpemUgOiAxMHB4O1xuXG4vL2hlYWRlclxuJHByb2ZpbGUtbWVudS1jb2xvcjogI2Y5ZjlmOTtcbiRiaWxsLWNvbG9yICAgICAgICA6ICM5YmEyYWE7XG4kYmlsbC1ob3Zlci1jb2xvciAgOiAjNzM4MThmO1xuXG4vL0xheW91dCBWYXJpYWJsZXNcblxuJGhlYWRlci1oZWlnaHQgOiA1NXB4O1xuJHNpZGVNZW51LXdpZHRoOiAyMDBweDtcblxuXG4vL2xvZ2luXG4kbG95YWxpdHktY29sb3IgIDogIzg4N2Y3ZjtcbiRsb2dpbi1ib3gtY29sb3IgOiAjZjVmMmYwO1xuXG4vL21haWxcbiRtYWlsLWNoZWNrYm94LWNvbG9yOiAjMDA3M2FhO1xuJHVzZXItbWFpbC1jb2xvciAgICA6ICMyOTJiMmM7XG5cbi8vcHJvZmlsZVxuJGFjdGl2ZS1jb2xvciAgICAgOiAjZjRmNmY5O1xuJGljb24tY29sb3IgICAgICAgOiAjOTU5Y2I2O1xuJGxhYmVsLXRpdGxlLWNvbG9yOiAjNTA1NjZhO1xuXG4vL2VtYWlsIHRlbXBsYXRlc1xuJGVtYWlsLWJsdWUtY29sb3I6ICMwZjQxNWQ7XG4kZW1haWwtZ3JheS1jb2xvcjogIzVmNjA2MDtcbiRlbWFpbC1zeWFuLWNvbG9yOiAjYTJkOWMyO1xuJGVtYWlsLW9yYWduZS1jb2xvcjogI2ZmYWM1MjtcblxuLy9mb250c1xuJGZvbnQyOCAgICAgICAgICAgOiAyOHB4O1xuJGZvbnQyNCAgICAgICAgICAgOiAyNHB4O1xuJGZvbnQxOCAgICAgICAgICAgOiAxOHB4O1xuJGZvbnQxNiAgICAgICAgICAgOiAxNnB4O1xuJGZvbnQxNCAgICAgICAgICAgOiAxNHB4O1xuJGZvbnQxMiAgICAgICAgICAgOiAxMnB4O1xuJGZvbnQxMCAgICAgICAgICAgOiAxMHB4O1xuJGZvbnQtd2VpZ2h0LTYwMCAgOiA2MDA7XG4kZm9udC13ZWlnaHQtNTAwICA6IDUwMDtcbiRwbGFjZWhvbGRlci1mb250IDogMTJweDtcbiRsYWJlbC1mb250ICAgICAgIDogMTRweDtcbiRjYXJkLWhlYWRlci1mb250IDogMTZweDtcblxuJGRhdGEtdGFibGUtaGVhZGVyLTEzNjYgOiAxNHB4O1xuJGRhdGEtdGFibGUtaGVhZGVyLTE5MjAgOiAxNnB4O1xuJGRhdGEtdGFibGUtYm9keS0xMzY2IDogMTJweDtcbiRkYXRhLXRhYmxlLWJvZHktMTkyMDogMTZweDtcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVkZjI7XG59XG5cbi5jb250ZW50IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmRmZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgcGFkZGluZy1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm94LXNoYWRvdzogMCAwcHggOHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMGM0MjVkO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5idXR0b24ge1xuICBtYXJnaW46IDAgMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4udGV4dGFyZWEtbWF4V2lkdGgge1xuICBtYXgtd2lkdGg6IDgxLjclO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgYXBwLW5nMnRlbCAuaXRpLml0aS0tYWxsb3ctZHJvcGRvd24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFjdGl2ZU1vZGFsSWNvbiB7XG4gIGJhY2tncm91bmQ6ICMxZjFhNWYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-product',
          templateUrl: './add-product.component.html',
          styleUrls: ['./add-product.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]
        }, {
          type: _product_attributes_product_attributes_service__WEBPACK_IMPORTED_MODULE_3__["ProductAttributesService"]
        }, {
          type: _categories_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/products/edit-product/edit-product.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/products/edit-product/edit-product.component.ts ***!
    \***********************************************************************/

  /*! exports provided: EditProductComponent */

  /***/
  function srcAppPagesProductsEditProductEditProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProductComponent", function () {
      return EditProductComponent;
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


    var _products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../products.service */
    "./src/app/pages/products/products.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _reusable_components_form_fields_upload_photo_upload_photo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../reusable-components/form-fields/upload-photo/upload-photo.component */
    "./src/app/reusable-components/form-fields/upload-photo/upload-photo.component.ts");
    /* harmony import */


    var _reusable_components_form_fields_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../reusable-components/form-fields/input-text/input-text.component */
    "./src/app/reusable-components/form-fields/input-text/input-text.component.ts");
    /* harmony import */


    var _reusable_components_form_fields_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../reusable-components/form-fields/textarea/textarea.component */
    "./src/app/reusable-components/form-fields/textarea/textarea.component.ts");

    var _c0 = function _c0() {
      return ["/products"];
    };

    var EditProductComponent = /*#__PURE__*/function () {
      function EditProductComponent(fb, route, productsService, toastr, router) {
        _classCallCheck(this, EditProductComponent);

        this.fb = fb;
        this.route = route;
        this.productsService = productsService;
        this.toastr = toastr;
        this.router = router;
        this.form = this.fb.group({
          image: [],
          name: this.fb.group({
            en: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          }),
          price: [''],
          description: this.fb.group({
            en: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          }),
          category: this.fb.group({
            _id: [],
            name: this.fb.group({
              en: [],
              ar: []
            })
          }),
          productAttributes: this.fb.array([])
        });
      }

      _createClass(EditProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.productId = this.route.snapshot.paramMap.get('id');
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.getOne(this.productId);
        }
      }, {
        key: "getOne",
        value: function getOne(id) {
          var _this5 = this;

          this.productsService.getOne(id).subscribe(function (res) {
            console.log(res);

            _this5.toastr.info(res['message'], 'Info');

            _this5.image = res['data']['image'];

            _this5.form.get('image').patchValue(res['data']['image']);

            _this5.form.get('name.en').patchValue(res['data']['name']['en']);

            _this5.form.get('name.ar').patchValue(res['data']['name']['ar']);

            _this5.form.get('price').patchValue(res['data']['price']);

            _this5.form.get('description.en').patchValue(res['data']['description']['en']);

            _this5.form.get('description.ar').patchValue(res['data']['description']['ar']);
          }, function (error) {
            console.log(error);

            _this5.toastr.error(error.error.message, 'Error'); // this.error.next(error.error.message);

          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(formValue) {
          var _this6 = this;

          var formData = new FormData();

          for (var key in formValue) {
            if (formValue[key] instanceof File) {
              formData.append(key, formValue[key]);
            } else {
              // contains object
              formData.append(key, JSON.stringify(formValue[key]));
            }
          }

          this.productsService.updateOne(formData, this.productId).subscribe(function (res) {
            console.log(res);
            _this6.image = null;

            _this6.form.reset();

            _this6.toastr.info(res['message'], 'Info');

            _this6.router.navigate(['../']);
          }, function (error) {
            console.log(error);

            _this6.toastr.error(error.error.message, 'Error'); // this.error.next(error.error.message);

          });
        }
      }]);

      return EditProductComponent;
    }();

    EditProductComponent.ɵfac = function EditProductComponent_Factory(t) {
      return new (t || EditProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    EditProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditProductComponent,
      selectors: [["app-edit-product"]],
      decls: 19,
      vars: 42,
      consts: [[1, "grid-center-noGutter"], [1, "col-20_sm-22_xs-23", "grid-center-noGutter", "content"], [1, "title", "col-24", "grid-center"], [1, "form", "col-23"], [1, "grid-middle-noGutter"], [1, "form-group", "grid-center-middle-noGutter", "col-24"], [1, "col-24", "grid-center"], [3, "fieldId", "image", "control"], ["type", "text", 1, "col-11_sm-24", 3, "label", "fieldId", "required", "placeholder", "tooltipMsg", "control", "fieldClass"], ["type", "text", 1, "col-11_sm-24", "grid-right", 3, "label", "fieldId", "rtldirection", "required", "placeholder", "tooltipMsg", "control", "fieldClass"], ["type", "number", 1, "col-11_sm-24", 3, "label", "fieldId", "required", "placeholder", "control", "fieldClass"], [1, "grid-right"], ["type", "submit", 1, "btn", "col-3_sm-5_xs-6", "color1", "round", 3, "disabled", "click"], ["type", "button", 1, "btn", "col-3_sm-5_xs-6", "color2", "round", 3, "routerLink"]],
      template: function EditProductComponent_Template(rf, ctx) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-upload-photo", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-input-text", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-input-text", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-textarea", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-textarea", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-input-text", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditProductComponent_Template_button_click_15_listener() {
            return ctx.onSubmit(ctx.form.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Submit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fieldId", "photo")("image", ctx.image)("control", ctx.form.get("image"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Name en")("fieldId", "nameEn")("required", true)("placeholder", "Product Name")("tooltipMsg", "Name")("control", ctx.form.get("name.en"))("fieldClass", "col-19_xlg-18_lg-17_md-24");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Name ar")("fieldId", "nameAr")("rtldirection", true)("required", true)("placeholder", "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C")("tooltipMsg", "Arabic")("control", ctx.form.get("name.ar"))("fieldClass", "col-19_xlg-18_lg-17_md-24");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Description en")("fieldId", "descriptionEn")("required", true)("placeholder", "Product description")("tooltipMsg", "Product description")("control", ctx.form.get("description.en"))("fieldClass", "col-19_xlg-18_lg-17_md-24");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Description ar")("fieldId", "descriptionAr")("rtldirection", true)("required", true)("placeholder", "\u0648\u0635\u0641 \u0627\u0644\u0645\u0646\u062A\u062C")("tooltipMsg", "\u0648\u0635\u0641 \u0627\u0644\u0645\u0646\u062A\u062C")("control", ctx.form.get("description.ar"))("fieldClass", "col-19_xlg-18_lg-17_md-24");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Price")("fieldId", "price")("required", true)("placeholder", "Product Cost")("control", ctx.form.get("price"))("fieldClass", "col-19_xlg-18_lg-17_md-24");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid && ctx.form.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](41, _c0));
        }
      },
      directives: [_reusable_components_form_fields_upload_photo_upload_photo_component__WEBPACK_IMPORTED_MODULE_5__["UploadPhotoComponent"], _reusable_components_form_fields_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_6__["InputTextComponent"], _reusable_components_form_fields_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_7__["TextareaComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  background-color: #efedf2;\n}\n\n.content[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background-color: #fffdfe;\n  border: 1px solid #f1f1f1;\n  padding-bottom: 15px !important;\n  margin-bottom: 20px;\n  box-shadow: 0 0px 8px 1px rgba(0, 0, 0, 0.05);\n  margin-top: 20px;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0c425d;\n  margin-bottom: 15px;\n  background-color: #f9f9f9;\n  border-bottom: 1px solid #f1f1f1;\n  padding: 10px !important;\n  border-radius: 10px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  font-size: 16px;\n}\n\n.textarea-maxWidth[_ngcontent-%COMP%] {\n  max-width: 81.7%;\n}\n\n[_nghost-%COMP%]     app-ng2tel .iti.iti--allow-dropdown {\n  width: 100%;\n}\n\n.activeModalIcon[_ngcontent-%COMP%] {\n  background: #1f1a5f !important;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvZWRpdC1wcm9kdWN0L0U6XFxVbnRpdGxlZCBGb2xkZXJcXHByaXZhdGVcXHByb2plY3RzXFxmdWxsX3N0YWNrXFxtb3RvYmFyXFxtb3RvYmFyX2FkbWluL3NyY1xcc2Nzc1xcYWRkLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RzL2VkaXQtcHJvZHVjdC9FOlxcVW50aXRsZWQgRm9sZGVyXFxwcml2YXRlXFxwcm9qZWN0c1xcZnVsbF9zdGFja1xcbW90b2JhclxcbW90b2Jhcl9hZG1pbi9zcmNcXHNjc3NcXGFic3RyYWN0c1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9kdWN0cy9lZGl0LXByb2R1Y3QvZWRpdC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBQTtFQUNBLHlCQ2lCd0I7QUNsQjFCOztBRklBO0VBQ0UsbUJBQUE7RUFDQSx5QkNld0I7RURkeEIseUJBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkNBQUE7RUFDQSxnQkFBQTtBRURGOztBRklBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0NsQk87RURtQlAsbUJBQUE7RUFDQSx5QkNMd0I7RURNeEIsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FFREY7O0FGSUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBRURGOztBRklBO0VBQ0UsZ0JBQUE7QUVERjs7QUZJQTtFQUNFLFdBQUE7QUVERjs7QUZHQTtFQUVHLDhCQUFBO0VBQ0QsbUJBQUE7QUVERiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RzL2VkaXQtcHJvZHVjdC9lZGl0LXByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL2Fic3RyYWN0cy92YXJpYWJsZXMnO1xuXG46aG9zdCB7XG4gIGRpc3BsYXkgICAgICAgICA6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1iYWNrZ3JvdW5kLWNvbG9yO1xufVxuXG4uY29udGVudCB7XG4gIGJvcmRlci1yYWRpdXMgICA6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjYXJkLWJvZHk7XG4gIGJvcmRlciAgICAgICAgICA6IDFweCBzb2xpZCAkYm9yZGVyO1xuICBwYWRkaW5nLWJvdHRvbSAgOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b20gICA6IDIwcHg7XG4gIGJveC1zaGFkb3cgICAgICA6IDAgMHB4IDhweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgbWFyZ2luLXRvcCAgICAgIDogMjBweFxufVxuXG4udGl0bGUge1xuICBmb250LXNpemUgICAgICAgOiAyMnB4O1xuICBmb250LXdlaWdodCAgICAgOiA3MDA7XG4gIGNvbG9yICAgICAgICAgICA6ICRjb2xvcjE7XG4gIG1hcmdpbi1ib3R0b20gICA6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjYXJkLWhlYWRlci1iZztcbiAgYm9yZGVyLWJvdHRvbSAgIDogMXB4IHNvbGlkICRib3JkZXI7XG4gIHBhZGRpbmcgICAgICAgICA6IDEwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luICAgOiAwIDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnRleHRhcmVhLW1heFdpZHRoIHtcbiAgbWF4LXdpZHRoOiA4MS43JTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIGFwcC1uZzJ0ZWwgLml0aS5pdGktLWFsbG93LWRyb3Bkb3duIHtcbiAgd2lkdGg6IDEwMCVcbn1cbi5hY3RpdmVNb2RhbEljb257XG4gIC8vIGJhY2tncm91bmQ6ICM0NmI4ZGEgIWltcG9ydGFudDtcbiAgIGJhY2tncm91bmQ6ICMxZjFhNWYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcblxufSIsIi8vY29sb3JzXG4kd2hpdGUgOiB3aGl0ZTtcbiRjb2xvcjE6ICMwYzQyNWQ7XG4kY29sb3IyOiAjYThkMmJlO1xuJGNvbG9yMzogIzQ4OTljMjtcbiRjb2xvcjQ6ICMxZjc3YTM7XG5cbiRjb2xvcjUgOiAjZjlhZTRlO1xuJGNvbG9yNTU6ICNkNjg1MjI7XG5cbiRib3JkZXIgICAgICAgICAgICAgICAgIDogI2YxZjFmMTtcbiRkYXRhLXRhYmxlLWJvcmRlciAgICAgIDogI2U5ZTllOTtcbiRncmF5MiAgICAgICAgICAgICAgICAgIDogI2UyZTJlMjtcbiRncmF5MyAgICAgICAgICAgICAgICAgIDogIzc1NzU3NTtcbiR0cmFzaC1jb2xvciAgICAgICAgICAgIDogI0M5MzAyQztcbiRmb250LWNvbG9yICAgICAgICAgICAgIDogIzU1NTtcbiRhY3RpdmUtYnJlYWRjcnVtYi1jb2xvcjogIzM0MzQzNDtcbiRjYXJkLWhlYWRlci1iZyAgICAgICAgIDogI2Y5ZjlmOTsgLy8jZWZlZmVmOyAvLyNmOWY5Zjk7XG4kcGxhY2Vob2xkZXItY29sb3IgICAgICA6ICNiM2IzYjM7XG5cbi8vIGJhY2tncm91bmQgY29sb3JcbiRtYWluLWJhY2tncm91bmQtY29sb3IgIDogI2VmZWRmMjtcbiRoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4kZGF0YS10YWJsZS1ib3ggICAgICAgICA6ICNmZmZkZmU7IC8vI2Y3ZjdmNztcbiRjYXJkLWJvZHkgICAgICAgICAgICAgIDogI2ZmZmRmZTtcblxuLy8gRGFzaGJvYXJkXG4kbWFyZ2luQmV0d2VlbkNhcmRzOiAyMnB4O1xuJGF4aXNGb250U2l6ZSAgICAgIDogMTJweDtcbiRzbWFsbEF4aXNGb250U2l6ZSA6IDEwcHg7XG5cbi8vaGVhZGVyXG4kcHJvZmlsZS1tZW51LWNvbG9yOiAjZjlmOWY5O1xuJGJpbGwtY29sb3IgICAgICAgIDogIzliYTJhYTtcbiRiaWxsLWhvdmVyLWNvbG9yICA6ICM3MzgxOGY7XG5cbi8vTGF5b3V0IFZhcmlhYmxlc1xuXG4kaGVhZGVyLWhlaWdodCA6IDU1cHg7XG4kc2lkZU1lbnUtd2lkdGg6IDIwMHB4O1xuXG5cbi8vbG9naW5cbiRsb3lhbGl0eS1jb2xvciAgOiAjODg3ZjdmO1xuJGxvZ2luLWJveC1jb2xvciA6ICNmNWYyZjA7XG5cbi8vbWFpbFxuJG1haWwtY2hlY2tib3gtY29sb3I6ICMwMDczYWE7XG4kdXNlci1tYWlsLWNvbG9yICAgIDogIzI5MmIyYztcblxuLy9wcm9maWxlXG4kYWN0aXZlLWNvbG9yICAgICA6ICNmNGY2Zjk7XG4kaWNvbi1jb2xvciAgICAgICA6ICM5NTljYjY7XG4kbGFiZWwtdGl0bGUtY29sb3I6ICM1MDU2NmE7XG5cbi8vZW1haWwgdGVtcGxhdGVzXG4kZW1haWwtYmx1ZS1jb2xvcjogIzBmNDE1ZDtcbiRlbWFpbC1ncmF5LWNvbG9yOiAjNWY2MDYwO1xuJGVtYWlsLXN5YW4tY29sb3I6ICNhMmQ5YzI7XG4kZW1haWwtb3JhZ25lLWNvbG9yOiAjZmZhYzUyO1xuXG4vL2ZvbnRzXG4kZm9udDI4ICAgICAgICAgICA6IDI4cHg7XG4kZm9udDI0ICAgICAgICAgICA6IDI0cHg7XG4kZm9udDE4ICAgICAgICAgICA6IDE4cHg7XG4kZm9udDE2ICAgICAgICAgICA6IDE2cHg7XG4kZm9udDE0ICAgICAgICAgICA6IDE0cHg7XG4kZm9udDEyICAgICAgICAgICA6IDEycHg7XG4kZm9udDEwICAgICAgICAgICA6IDEwcHg7XG4kZm9udC13ZWlnaHQtNjAwICA6IDYwMDtcbiRmb250LXdlaWdodC01MDAgIDogNTAwO1xuJHBsYWNlaG9sZGVyLWZvbnQgOiAxMnB4O1xuJGxhYmVsLWZvbnQgICAgICAgOiAxNHB4O1xuJGNhcmQtaGVhZGVyLWZvbnQgOiAxNnB4O1xuXG4kZGF0YS10YWJsZS1oZWFkZXItMTM2NiA6IDE0cHg7XG4kZGF0YS10YWJsZS1oZWFkZXItMTkyMCA6IDE2cHg7XG4kZGF0YS10YWJsZS1ib2R5LTEzNjYgOiAxMnB4O1xuJGRhdGEtdGFibGUtYm9keS0xOTIwOiAxNnB4O1xuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWRmMjtcbn1cblxuLmNvbnRlbnQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZGZlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3gtc2hhZG93OiAwIDBweCA4cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMwYzQyNWQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi50ZXh0YXJlYS1tYXhXaWR0aCB7XG4gIG1heC13aWR0aDogODEuNyU7XG59XG5cbjpob3N0IDo6bmctZGVlcCBhcHAtbmcydGVsIC5pdGkuaXRpLS1hbGxvdy1kcm9wZG93biB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWN0aXZlTW9kYWxJY29uIHtcbiAgYmFja2dyb3VuZDogIzFmMWE1ZiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-product',
          templateUrl: './edit-product.component.html',
          styleUrls: ['./edit-product.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/products/products-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/products/products-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ProductsRoutingModule */

  /***/
  function srcAppPagesProductsProductsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function () {
      return ProductsRoutingModule;
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


    var _products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./products.component */
    "./src/app/pages/products/products.component.ts");
    /* harmony import */


    var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-product/add-product.component */
    "./src/app/pages/products/add-product/add-product.component.ts");
    /* harmony import */


    var _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./edit-product/edit-product.component */
    "./src/app/pages/products/edit-product/edit-product.component.ts");

    var routes = [{
      path: '',
      component: _products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"]
    }, {
      path: 'add',
      component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_3__["AddProductComponent"]
    }, {
      path: 'edit/:id',
      component: _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_4__["EditProductComponent"]
    }];

    var ProductsRoutingModule = function ProductsRoutingModule() {
      _classCallCheck(this, ProductsRoutingModule);
    };

    ProductsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProductsRoutingModule
    });
    ProductsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProductsRoutingModule_Factory(t) {
        return new (t || ProductsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsRoutingModule, [{
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
  "./src/app/pages/products/products.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/products/products.component.ts ***!
    \******************************************************/

  /*! exports provided: ProductsComponent */

  /***/
  function srcAppPagesProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./products.service */
    "./src/app/pages/products/products.service.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var angular7_data_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular7-data-table */
    "./node_modules/angular7-data-table/__ivy_ngcc__/esm2015/angular7-data-table.js");

    function ProductsComponent_ng_container_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function ProductsComponent_ng_template_39_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 39);
      }

      if (rf & 2) {
        var item_r24 = ctx.item;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r24.image ? item_r24.image : "../../../../../assets/placeholder.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ProductsComponent_ng_template_39_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r25 = ctx.item;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r25.name.en);
      }
    }

    function ProductsComponent_ng_template_39_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r26 = ctx.item;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r26.name.ar);
      }
    }

    function ProductsComponent_ng_template_39_ng_template_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r27 = ctx.item;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r27.price);
      }
    }

    function ProductsComponent_ng_template_39_ng_template_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r28 = ctx.item;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r28.category.ar);
      }
    }

    function ProductsComponent_ng_template_39_ng_template_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r29 = ctx.item;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r29.category.ar);
      }
    }

    function ProductsComponent_ng_template_39_ng_template_21_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "blocked");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function ProductsComponent_ng_template_39_ng_template_21_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "confirmed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function ProductsComponent_ng_template_39_ng_template_21_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "deleted");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function ProductsComponent_ng_template_39_ng_template_21_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "active");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function ProductsComponent_ng_template_39_ng_template_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductsComponent_ng_template_39_ng_template_21_ng_container_1_Template, 3, 0, "ng-container", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductsComponent_ng_template_39_ng_template_21_ng_container_2_Template, 3, 0, "ng-container", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductsComponent_ng_template_39_ng_template_21_ng_container_3_Template, 3, 0, "ng-container", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductsComponent_ng_template_39_ng_template_21_ng_container_4_Template, 3, 0, "ng-container", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r30 = ctx.item;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r30.is_blocked);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r30.is_confirmed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r30.is_deleted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r30.is_deleted && !item_r30.is_blocked);
      }
    }

    var _c0 = function _c0(a1) {
      return ["./edit/", a1];
    };

    function ProductsComponent_ng_template_39_ng_template_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "colorize");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_ng_template_39_ng_template_24_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var item_r35 = ctx.item;

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42);

          return ctx_r36.openModalDelete(_r4, item_r35._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "lock");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r35 = ctx.item;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, item_r35._id));
      }
    }

    function ProductsComponent_ng_template_39_Template(rf, ctx) {
      if (rf & 1) {
        var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "data-table", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("reload", function ProductsComponent_ng_template_39_Template_data_table_reload_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r38.reloadItems($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "data-table-column", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductsComponent_ng_template_39_ng_template_3_Template, 1, 1, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "data-table-column", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProductsComponent_ng_template_39_ng_template_6_Template, 2, 1, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "data-table-column", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProductsComponent_ng_template_39_ng_template_9_Template, 2, 1, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "data-table-column", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProductsComponent_ng_template_39_ng_template_12_Template, 2, 1, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "data-table-column", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProductsComponent_ng_template_39_ng_template_15_Template, 2, 1, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "data-table-column", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProductsComponent_ng_template_39_ng_template_18_Template, 2, 1, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "data-table-column", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProductsComponent_ng_template_39_ng_template_21_Template, 5, 4, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "data-table-column", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProductsComponent_ng_template_39_ng_template_24_Template, 9, 3, "ng-template", 38, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r3.items)("pagination", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 50)("property", "image")("resizable", true)("header", "Img");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("property", "name")("header", "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("property", "name")("header", "\u0627\u0644\u0627\u0633\u0645");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("property", "price")("header", "Price");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("property", "category")("header", "Category");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("property", "category")("header", "\u0627\u0644\u0635\u0646\u0641");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 70)("header", "Status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 150);
      }
    }

    function ProductsComponent_ng_template_41_Template(rf, ctx) {
      if (rf & 1) {
        var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Do you want to Delete This Element ? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_ng_template_41_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r40.deleteElement();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Confirm ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_ng_template_41_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r42.modalRef.hide();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductsComponent_ng_template_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Do you want to change this element status? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Confirm ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1() {
      return ["./add"];
    };

    var ProductsComponent = /*#__PURE__*/function () {
      function ProductsComponent(productsService, modalService, toastr) {
        _classCallCheck(this, ProductsComponent);

        this.productsService = productsService;
        this.modalService = modalService;
        this.toastr = toastr;
        this.items = [];
      }

      _createClass(ProductsComponent, [{
        key: "reloadItems",
        value: function reloadItems($event) {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.productsService.getAll();
          this.productsService.products.subscribe(function (data) {
            if (data) {
              _this7.items = data;
            }
          });
        }
      }, {
        key: "openModalDelete",
        value: function openModalDelete(template, id) {
          this.itemId = id;
          this.modalRef = this.modalService.show(template);
        }
      }, {
        key: "deleteElement",
        value: function deleteElement() {
          var _this8 = this;

          this.modalRef.hide();
          this.productsService.deleteOne(this.itemId).subscribe(function (res) {
            console.log(res);

            _this8.toastr.info(res['message'], 'Info');

            _this8.productsService.getAll();
          }, function (error) {
            console.log(error);

            _this8.toastr.error(error.error.message, 'Error'); // this.error.next(error.error.message);

          });
        }
      }]);

      return ProductsComponent;
    }();

    ProductsComponent.ɵfac = function ProductsComponent_Factory(t) {
      return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]));
    };

    ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductsComponent,
      selectors: [["app-products"]],
      decls: 45,
      vars: 4,
      consts: [[1, "grid-center-noGutter"], [1, "col-20_sm-22_xs-23", 2, "margin-top", "20px"], [1, "card"], [1, "card-header"], [1, "card-body", "grid-center-noGutter"], [1, "col-24", "grid-center-noGutter"], [1, "card", "col-5_md-8_sm-10_xs-hidden"], [1, "card-body"], [2, "display", "inline-block", "background-color", "#4899c2", "padding", "15px", "color", "white"], [1, "material-icons"], [2, "display", "inline-block", "margin", "0 10px"], [2, "color", "#20a8d8", "font-size", "18px", "font-weight", "600"], [2, "color", "#73818f", "font-size", "80%", "font-weight", "700"], [1, "col-top", "col-18_md-16_sm-14_xs-24", "grid-right-noGutter", 2, "margin-top", "15px"], [1, "col-3_xlg-4_lg-6_sm-10", "grid-column-noGutter"], [1, "btn", "color1", "round", "addbtn", 3, "routerLink"], [1, "col-24", "grid-center-noGutter", 2, "margin-top", "20px"], [1, "col-24", "grid-noGutter"], [1, "col-12_xs-24", "grid-left-noGutter", 2, "margin-left", "10px"], ["for", "", 1, "col-24", 2, "font-weight", "bold"], [1, "col-24", "grid"], ["type", "text", "placeholder", "e.g. Name", 1, "form-control", "col"], ["FilterRecord", ""], [1, "btn", "col-4", "color1", "round", "search"], [1, "md-hidden"], [1, "grid-center-noGutter", 2, "margin-top", "20px"], [4, "ngTemplateOutlet"], ["table", ""], ["id", "template2"], ["templateDelete", ""], ["templateLock", ""], ["id", "my-table", "title", "List of Products", 3, "items", "pagination", "reload"], [3, "width", "property", "resizable", "header"], ["dataTableCell", ""], [3, "property", "header"], ["sortable", "true", 3, "property", "header"], [3, "width", "header"], ["header", "Actions", 3, "width"], ["class", "grid-center"], ["width", "30px", "height", "30px", "alt", "", 3, "src"], [4, "ngIf"], [1, "badge", "blocked"], [1, "badge", "confirmed"], [1, "badge", "deleted"], [1, "badge", "active"], ["tooltip", "Edit", "placement", "bottom", 1, "pencil", 3, "routerLink"], ["tooltip", "Delete", "placement", "bottom", "triggers", "mouseenter:mouseleave", 1, "trash", 3, "click"], ["tooltip", "'Lock'", "placement", "bottom", "triggers", "mouseenter:mouseleave", 1, "lock"], [1, "modal-header"], [2, "color", "red", "font-weight", "bold", "justify-content", "center"], [1, "fa", "fa-trash", "fa-lg", "mt-4"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right"], ["aria-hidden", "true"], [1, "modal-body"], [1, "grid-right"], ["type", "button", 1, "btn", "col-5_sm-5_xs-6", "color1", "round", 2, "margin-right", "10px", 3, "click"], ["type", "button", 1, "btn", "col-5_sm-5_xs-6", "color2", "round", 3, "click"], [2, "color", "#0c425d", "font-weight", "bold", "justify-content", "center"], [1, "fa", "fa-lock", "fa-lg", "mt-4"], ["type", "button", 1, "btn", "col-5_sm-5_xs-6", "color1", "round", 2, "margin-right", "10px"], ["type", "button", 1, "btn", "col-5_sm-5_xs-6", "color2", "round"]],
      template: function ProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Products Records");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Products ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Add Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Search for");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 21, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ProductsComponent_ng_container_38_Template, 1, 0, "ng-container", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ProductsComponent_ng_template_39_Template, 26, 19, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ProductsComponent_ng_template_41_Template, 13, 0, "ng-template", 28, 29, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ProductsComponent_ng_template_43_Template, 13, 0, "ng-template", 28, 30, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.items.length, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgTemplateOutlet"], angular7_data_table__WEBPACK_IMPORTED_MODULE_6__["DataTable"], angular7_data_table__WEBPACK_IMPORTED_MODULE_6__["DataTableColumn"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  background-color: #efedf2;\n}\n\n[_nghost-%COMP%]     {\n  border-radius: 10px;\n}\n\n[_nghost-%COMP%]     .data-table-header {\n  padding: 8px 8px;\n  margin-bottom: 0 !important;\n  background-color: #f9f9f9;\n  border: 1px solid #f1f1f1;\n  border-bottom: none;\n  color: #555;\n  border-radius: 10px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n[_nghost-%COMP%]     .data-table-header button {\n  padding-top: 0;\n}\n\n[_nghost-%COMP%]     .data-table-box {\n  border-radius: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  padding: 30px;\n  border: 1px solid #e9e9e9;\n  border-top: 0;\n  border-bottom: 0;\n}\n\n[_nghost-%COMP%]     .data-table {\n  box-shadow: none;\n  border: 1px solid #e9e9e9;\n  color: #555;\n}\n\n[_nghost-%COMP%]     .data-table thead {\n  border-bottom: 1px solid #999;\n  font-size: 16px;\n}\n\n@media (max-width: 1366px) {\n  [_nghost-%COMP%]     .data-table thead {\n    font-size: 14px;\n  }\n}\n\n[_nghost-%COMP%]     .data-table tbody {\n  font-size: 16px;\n}\n\n@media (max-width: 1366px) {\n  [_nghost-%COMP%]     .data-table tbody {\n    font-size: 12px;\n  }\n}\n\n[_nghost-%COMP%]     .data-table tbody td, [_nghost-%COMP%]     .data-table tbody th {\n  font-size: 13px;\n  color: #555353;\n  font-weight: initial;\n}\n\n[_nghost-%COMP%]     .data-table tbody td.index-column, [_nghost-%COMP%]     .data-table tbody th.index-column {\n  font-weight: bold;\n}\n\n[_nghost-%COMP%]     .data-table tbody td[data-label=Status] span, [_nghost-%COMP%]     .data-table tbody th[data-label=Status] span {\n  display: block;\n  color: white;\n  margin: 2px 0;\n  border-radius: 10px;\n}\n\n[_nghost-%COMP%]     .data-table tbody td[data-label=Status] span.blocked, [_nghost-%COMP%]     .data-table tbody th[data-label=Status] span.blocked {\n  background-color: grey;\n}\n\n[_nghost-%COMP%]     .data-table tbody td[data-label=Status] span.deleted, [_nghost-%COMP%]     .data-table tbody th[data-label=Status] span.deleted {\n  background-color: #ff6b6b;\n}\n\n[_nghost-%COMP%]     .data-table tbody td[data-label=Status] span.confirmed, [_nghost-%COMP%]     .data-table tbody th[data-label=Status] span.confirmed {\n  background-color: #0c425d;\n}\n\n[_nghost-%COMP%]     .data-table tbody td[data-label=Status] span.active, [_nghost-%COMP%]     .data-table tbody th[data-label=Status] span.active {\n  background-color: #28a745;\n}\n\n[_nghost-%COMP%]     .data-table tbody td[data-label=Status] span.pending, [_nghost-%COMP%]     .data-table tbody th[data-label=Status] span.pending {\n  background-color: #a0a02e;\n}\n\n[_nghost-%COMP%]     .data-table tbody td[data-label=Status] span.done, [_nghost-%COMP%]     .data-table tbody th[data-label=Status] span.done {\n  background-color: #044970;\n}\n\n[_nghost-%COMP%]     .data-table tbody img {\n  border: 1px solid #f1f1f1;\n}\n\n[_nghost-%COMP%]     .data-table-wrapper {\n  border-radius: 10px;\n  background-color: white;\n  box-shadow: 0 0px 8px 1px rgba(0, 0, 0, 0.05);\n  margin-bottom: 20px;\n}\n\n[_nghost-%COMP%]     .h4.title {\n  font-weight: bold;\n  margin: 0;\n  font-size: 16px;\n}\n\n[_nghost-%COMP%]     data-table-pagination > div {\n  justify-content: center !important;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n\n.btn.search[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  padding: 4px 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n@media (max-width: 1024px) {\n  .btn.search[_ngcontent-%COMP%] {\n    padding: 2px 0;\n  }\n}\n\n.btn.search[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  display: none;\n}\n\n@media (max-width: 1024px) {\n  .btn.search[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n}\n\n\n\n[_nghost-%COMP%] {\n  width: 100%;\n}\n\n[_nghost-%COMP%]     caption {\n  display: none;\n}\n\n[_nghost-%COMP%]     thead tr {\n  height: 40px;\n  background-color: #f6f6f6;\n  color: #555658;\n}\n\n[_nghost-%COMP%]     thead tr th {\n  padding: 1rem 0;\n}\n\n[_nghost-%COMP%]     tbody th, [_nghost-%COMP%]     tbody td {\n  padding: 0.35rem;\n}\n\n[_nghost-%COMP%]     .row-odd {\n  background-color: #f9f9f9 !important;\n}\n\n[_nghost-%COMP%]     .data-table-row:hover {\n  background-color: #f9f9f9 !important;\n}\n\n[_nghost-%COMP%]     .data-table-box {\n  background-color: #fffdfe;\n  border: 1px solid #f1f1f1;\n  margin-bottom: 10px;\n}\n\n[_nghost-%COMP%]     .table td, [_nghost-%COMP%]     .table th {\n  border-top: 1px solid #e9e9e9;\n}\n\n[_nghost-%COMP%]     .table thead th, [_nghost-%COMP%]     .data-table > thead > tr > td {\n  border-bottom: none;\n}\n\n[_nghost-%COMP%]     th {\n  vertical-align: middle;\n  text-align: center;\n  font-weight: 600;\n}\n\n[_nghost-%COMP%]     td {\n  vertical-align: middle;\n  text-align: center;\n}\n\n[_nghost-%COMP%]     td.index-column {\n  font-weight: bold;\n  font-size: 13px;\n}\n\n[_nghost-%COMP%]     .pagination-range {\n  display: none;\n}\n\n[_nghost-%COMP%]     .pagination-box {\n  padding-bottom: 12px;\n  zoom: 75%;\n  align-items: center;\n  width: 95%;\n}\n\n[_nghost-%COMP%]     .pagination-box .input-group .form-control {\n  display: flex !important;\n  width: auto !important;\n  height: auto;\n}\n\n[_nghost-%COMP%]     .pagination-box .input-group select {\n  border-radius: 0;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n[_nghost-%COMP%]     .index-column-header span::after {\n  content: \"ID\";\n}\n\na[_ngcontent-%COMP%] {\n  padding: 0 2px;\n  border: 0;\n  transition: all 0.5s;\n  background-color: transparent;\n  cursor: pointer;\n}\n\na[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n\na[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\na.pencil[_ngcontent-%COMP%] {\n  color: #0c425d;\n}\n\na.trash[_ngcontent-%COMP%] {\n  color: #C9302C;\n}\n\na.lock[_ngcontent-%COMP%] {\n  color: #a8d2be;\n}\n\na.note[_ngcontent-%COMP%] {\n  color: #f9ae4e;\n}\n\n[_nghost-%COMP%]     bs-tooltip-container .tooltip-inner {\n  background-color: #0c425d;\n  color: white;\n}\n\n[_nghost-%COMP%]     bs-tooltip-container .tooltip-arrow:before, [_nghost-%COMP%]     bs-tooltip-container .tooltip-arrow {\n  border-top-color: #0c425d;\n}\n\n.product-card[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 90%;\n  margin: 15px;\n  height: 50px;\n  border-radius: 25px;\n  border: 2px solid #e2e2e2;\n}\n\n.description-card[_ngcontent-%COMP%] {\n  position: relative;\n  width: 85%;\n  height: 100px;\n  background-color: #0c425d;\n  border-radius: 10px;\n  margin: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n}\n\n.description-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.description-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-of-type {\n  font-weight: bold;\n}\n\n.description-card[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 20px;\n  height: 30px;\n  top: 0;\n  right: 25px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  background-color: #a8d2be;\n}\n\n.card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvRTpcXFVudGl0bGVkIEZvbGRlclxccHJpdmF0ZVxccHJvamVjdHNcXGZ1bGxfc3RhY2tcXG1vdG9iYXJcXG1vdG9iYXJfYWRtaW4vc3JjXFxzY3NzXFx0YWJsZV9zY3JlZW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RzL0U6XFxVbnRpdGxlZCBGb2xkZXJcXHByaXZhdGVcXHByb2plY3RzXFxmdWxsX3N0YWNrXFxtb3RvYmFyXFxtb3RvYmFyX2FkbWluL3NyY1xcc2Nzc1xcYWJzdHJhY3RzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0FBQTtFQUNBLHlCQ2lCc0I7QUNsQjFCOztBRklBO0VBQ0ksbUJBQUE7QUVESjs7QUZFSTtFQUNJLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkNLa0I7RURKbEIseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUVBUjs7QUZDUTtFQUNJLGNBQUE7QUVDWjs7QUZHSTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBRURSOztBRklJO0VBQ0ksZ0JBQUE7RUFFQSx5QkFBQTtFQUNBLFdDdkJrQjtBQ29CMUI7O0FGS1E7RUFDSSw2QkFBQTtFQUNBLGVDa0NjO0FDckMxQjs7QUZLWTtFQUpKO0lBS1EsZUM4QlU7RUNoQ3hCO0FBQ0Y7O0FGS1E7RUFDSSxlQzRCVztBQy9CdkI7O0FGS1k7RUFISjtJQUlRLGVDd0JRO0VDMUJ0QjtBQUNGOztBRklZOztFQUdJLGVBQUE7RUFFQSxjQUFBO0VBQ0Esb0JBQUE7QUVKaEI7O0FGS2dCOztFQUNJLGlCQUFBO0FFRnBCOztBRk1vQjs7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBRUh4Qjs7QUZJd0I7O0VBQ0ksc0JBQUE7QUVENUI7O0FGR3dCOztFQUNJLHlCQUFBO0FFQTVCOztBRkV3Qjs7RUFDSSx5QkM5RW5CO0FDK0VUOztBRkN3Qjs7RUFDSSx5QkFBQTtBRUU1Qjs7QUZBd0I7O0VBQ0kseUJBQUE7QUVHNUI7O0FGRHdCOztFQUNJLHlCQUFBO0FFSTVCOztBRkVZO0VBQ0kseUJBQUE7QUVBaEI7O0FGS0k7RUFDSSxtQkFBQTtFQUNBLHVCQ3RHQztFRHVHRCw2Q0FBQTtFQUNBLG1CQUFBO0FFSFI7O0FGTUk7RUFDSSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxlQ3RDWTtBQ2tDcEI7O0FGT0k7RUFDSSxrQ0FBQTtBRUxSOztBRlNBO0VBQ0ksZUNoRGdCO0VEaURoQixpQkFBQTtFQUNBLGtCQUFBO0FFTko7O0FGU0E7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBRU5KOztBRlFJO0VBUEo7SUFRUSxjQUFBO0VFTE47QUFDRjs7QUZPSTtFQUNJLGFBQUE7QUVMUjs7QUZPUTtFQUhKO0lBSVEsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7RUVKVjtBQUNGOztBRk9BLFFBQUE7O0FBRUE7RUFDSSxXQUFBO0FFTEo7O0FGU0k7RUFDSSxhQUFBO0FFTlI7O0FGU0k7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFFQSxjQUFBO0FFUlI7O0FGU1E7RUFDSSxlQUFBO0FFUFo7O0FGVUk7O0VBRUksZ0JBQUE7QUVSUjs7QUZVSTtFQUNJLG9DQUFBO0FFUlI7O0FGV0k7RUFDSSxvQ0FBQTtBRVRSOztBRllJO0VBQ0kseUJDNUprQjtFRDZKbEIseUJBQUE7RUFDQSxtQkFBQTtBRVZSOztBRmFJOztFQUVJLDZCQUFBO0FFWFI7O0FGY0k7O0VBRUksbUJBQUE7QUVaUjs7QUZlSTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkNoSVk7QUNtSHBCOztBRmlCSTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7QUVmUjs7QUZnQlE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUVkWjs7QUZrQkk7RUFDSSxhQUFBO0FFaEJSOztBRm1CSTtFQUNJLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBRWpCUjs7QUZvQlk7RUFDSSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBRWxCaEI7O0FGcUJZO0VBQ0ksZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0FFbkJoQjs7QUZ5QlE7RUFDSSxhQUFBO0FFdkJaOztBRjRCQTtFQUNJLGNBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUV6Qko7O0FGMkJJO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FFekJSOztBRjRCSTtFQUNJLGVBQUE7QUUxQlI7O0FGNkJJO0VBQ0ksY0NqUUM7QUNzT1Q7O0FGOEJJO0VBQ0ksY0N6UGtCO0FDNk4xQjs7QUYrQkk7RUFDSSxjQ3hRQztBQzJPVDs7QUZnQ0k7RUFDSSxjQ3hRRTtBQzBPVjs7QUZrQ0E7RUFDSSx5QkNsUks7RURtUkwsWUNwUks7QUNxUFQ7O0FGa0NBOztFQUVJLHlCQ3hSSztBQ3lQVDs7QUZrQ0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUUvQko7O0FGaUNBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQ3pTSztFRDBTTCxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUU5Qko7O0FGK0JJO0VBQ0ksV0FBQTtBRTdCUjs7QUY4QlE7RUFDSSxpQkFBQTtBRTVCWjs7QUYrQkk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EseUJDN1RDO0FDZ1NUOztBRmdDQTtFQUNJLG1CQUFBO0FFN0JKOztBRjhCSTtFQUNJLG1CQUFBO0FFNUJSOztBRjhCSTtFQUNJLG1CQUFBO0FFNUJSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy9hYnN0cmFjdHMvdmFyaWFibGVzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWJhY2tncm91bmQtY29sb3I7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLmRhdGEtdGFibGUtaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiA4cHggOHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FyZC1oZWFkZXItYmc7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlcjtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAkZm9udC1jb2xvcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kYXRhLXRhYmxlLWJveCB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGRhdGEtdGFibGUtYm9yZGVyO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgIH1cclxuXHJcbiAgICAuZGF0YS10YWJsZSB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAvLyBmb250LXNpemUgOiAkZGF0YS10YWJsZS1ib2R5O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRkYXRhLXRhYmxlLWJvcmRlcjtcclxuICAgICAgICBjb2xvcjogJGZvbnQtY29sb3I7XHJcblxyXG4gICAgICAgIHRoZWFkIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5OTk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJGRhdGEtdGFibGUtaGVhZGVyLTE5MjA7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTM2NnB4KSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICRkYXRhLXRhYmxlLWhlYWRlci0xMzY2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0Ym9keSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJGRhdGEtdGFibGUtYm9keS0xOTIwO1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEzNjZweCkge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkZGF0YS10YWJsZS1ib2R5LTEzNjY7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRkLFxyXG4gICAgICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgICAgICAvLyBib3JkZXItdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgLy8gY29sb3I6IHJnYmEoJGNvbG9yMSwgMC44KTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNTU1MzUzO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGluaXRpYWw7XHJcbiAgICAgICAgICAgICAgICAmLmluZGV4LWNvbHVtbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmW2RhdGEtbGFiZWw9XCJTdGF0dXNcIl0ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMnB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYuYmxvY2tlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYuZGVsZXRlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMDcsIDEwNyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5jb25maXJtZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYucGVuZGluZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTBhMDJlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYuZG9uZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQ0OTcwOyAvLyRjb2xvcjI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kYXRhLXRhYmxlLXdyYXBwZXIge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMHB4IDhweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5oNC50aXRsZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGNhcmQtaGVhZGVyLWZvbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZGF0YS10YWJsZS1wYWdpbmF0aW9uID4gZGl2IHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBmb250LXNpemU6ICRsYWJlbC1mb250O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5idG4uc2VhcmNoIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nOiA0cHggMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgIHBhZGRpbmc6IDJweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW46bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLyoqKioqICovXHJcblxyXG46aG9zdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIHtcclxuICAgIGNhcHRpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhlYWQgdHIge1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gICAgICAgIC8vIGNvbG9yOiAkY29sb3IxO1xyXG4gICAgICAgIGNvbG9yOiAjNTU1NjU4O1xyXG4gICAgICAgIHRoIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRib2R5IHRoLFxyXG4gICAgdGJvZHkgdGQge1xyXG4gICAgICAgIHBhZGRpbmc6IDAuMzVyZW07XHJcbiAgICB9XHJcbiAgICAucm93LW9kZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5kYXRhLXRhYmxlLXJvdzpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNhcmQtaGVhZGVyLWJnICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmRhdGEtdGFibGUtYm94IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGF0YS10YWJsZS1ib3g7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50YWJsZSB0ZCxcclxuICAgIC50YWJsZSB0aCB7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRkYXRhLXRhYmxlLWJvcmRlcjtcclxuICAgIH1cclxuXHJcbiAgICAudGFibGUgdGhlYWQgdGgsXHJcbiAgICAuZGF0YS10YWJsZSA+IHRoZWFkID4gdHIgPiB0ZCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICB0aCB7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC02MDA7XHJcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheTI7XHJcbiAgICB9XHJcblxyXG4gICAgdGQge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICYuaW5kZXgtY29sdW1uIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnBhZ2luYXRpb24tcmFuZ2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhZ2luYXRpb24tYm94IHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgICAgICB6b29tOiA3NSU7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogOTUlO1xyXG5cclxuICAgICAgICAuaW5wdXQtZ3JvdXAge1xyXG4gICAgICAgICAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmluZGV4LWNvbHVtbi1oZWFkZXIge1xyXG4gICAgICAgIHNwYW46OmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJJRFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuYSB7XHJcbiAgICBwYWRkaW5nOiAwIDJweDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAmLnBlbmNpbCB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvcjE7XHJcbiAgICB9XHJcblxyXG4gICAgJi50cmFzaCB7XHJcbiAgICAgICAgY29sb3I6ICR0cmFzaC1jb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICAmLmxvY2sge1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3IyO1xyXG4gICAgfVxyXG5cclxuICAgICYubm90ZSB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvcjU7XHJcbiAgICB9XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCBicy10b29sdGlwLWNvbnRhaW5lciAudG9vbHRpcC1pbm5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IxO1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIGJzLXRvb2x0aXAtY29udGFpbmVyIC50b29sdGlwLWFycm93OmJlZm9yZSxcclxuOmhvc3QgOjpuZy1kZWVwIGJzLXRvb2x0aXAtY29udGFpbmVyIC50b29sdGlwLWFycm93IHtcclxuICAgIGJvcmRlci10b3AtY29sb3I6ICRjb2xvcjE7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgJGdyYXkyO1xyXG59XHJcbi5kZXNjcmlwdGlvbi1jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJhciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IyO1xyXG4gICAgfVxyXG59XHJcbi5jYXJkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcbiIsIi8vY29sb3JzXG4kd2hpdGUgOiB3aGl0ZTtcbiRjb2xvcjE6ICMwYzQyNWQ7XG4kY29sb3IyOiAjYThkMmJlO1xuJGNvbG9yMzogIzQ4OTljMjtcbiRjb2xvcjQ6ICMxZjc3YTM7XG5cbiRjb2xvcjUgOiAjZjlhZTRlO1xuJGNvbG9yNTU6ICNkNjg1MjI7XG5cbiRib3JkZXIgICAgICAgICAgICAgICAgIDogI2YxZjFmMTtcbiRkYXRhLXRhYmxlLWJvcmRlciAgICAgIDogI2U5ZTllOTtcbiRncmF5MiAgICAgICAgICAgICAgICAgIDogI2UyZTJlMjtcbiRncmF5MyAgICAgICAgICAgICAgICAgIDogIzc1NzU3NTtcbiR0cmFzaC1jb2xvciAgICAgICAgICAgIDogI0M5MzAyQztcbiRmb250LWNvbG9yICAgICAgICAgICAgIDogIzU1NTtcbiRhY3RpdmUtYnJlYWRjcnVtYi1jb2xvcjogIzM0MzQzNDtcbiRjYXJkLWhlYWRlci1iZyAgICAgICAgIDogI2Y5ZjlmOTsgLy8jZWZlZmVmOyAvLyNmOWY5Zjk7XG4kcGxhY2Vob2xkZXItY29sb3IgICAgICA6ICNiM2IzYjM7XG5cbi8vIGJhY2tncm91bmQgY29sb3JcbiRtYWluLWJhY2tncm91bmQtY29sb3IgIDogI2VmZWRmMjtcbiRoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4kZGF0YS10YWJsZS1ib3ggICAgICAgICA6ICNmZmZkZmU7IC8vI2Y3ZjdmNztcbiRjYXJkLWJvZHkgICAgICAgICAgICAgIDogI2ZmZmRmZTtcblxuLy8gRGFzaGJvYXJkXG4kbWFyZ2luQmV0d2VlbkNhcmRzOiAyMnB4O1xuJGF4aXNGb250U2l6ZSAgICAgIDogMTJweDtcbiRzbWFsbEF4aXNGb250U2l6ZSA6IDEwcHg7XG5cbi8vaGVhZGVyXG4kcHJvZmlsZS1tZW51LWNvbG9yOiAjZjlmOWY5O1xuJGJpbGwtY29sb3IgICAgICAgIDogIzliYTJhYTtcbiRiaWxsLWhvdmVyLWNvbG9yICA6ICM3MzgxOGY7XG5cbi8vTGF5b3V0IFZhcmlhYmxlc1xuXG4kaGVhZGVyLWhlaWdodCA6IDU1cHg7XG4kc2lkZU1lbnUtd2lkdGg6IDIwMHB4O1xuXG5cbi8vbG9naW5cbiRsb3lhbGl0eS1jb2xvciAgOiAjODg3ZjdmO1xuJGxvZ2luLWJveC1jb2xvciA6ICNmNWYyZjA7XG5cbi8vbWFpbFxuJG1haWwtY2hlY2tib3gtY29sb3I6ICMwMDczYWE7XG4kdXNlci1tYWlsLWNvbG9yICAgIDogIzI5MmIyYztcblxuLy9wcm9maWxlXG4kYWN0aXZlLWNvbG9yICAgICA6ICNmNGY2Zjk7XG4kaWNvbi1jb2xvciAgICAgICA6ICM5NTljYjY7XG4kbGFiZWwtdGl0bGUtY29sb3I6ICM1MDU2NmE7XG5cbi8vZW1haWwgdGVtcGxhdGVzXG4kZW1haWwtYmx1ZS1jb2xvcjogIzBmNDE1ZDtcbiRlbWFpbC1ncmF5LWNvbG9yOiAjNWY2MDYwO1xuJGVtYWlsLXN5YW4tY29sb3I6ICNhMmQ5YzI7XG4kZW1haWwtb3JhZ25lLWNvbG9yOiAjZmZhYzUyO1xuXG4vL2ZvbnRzXG4kZm9udDI4ICAgICAgICAgICA6IDI4cHg7XG4kZm9udDI0ICAgICAgICAgICA6IDI0cHg7XG4kZm9udDE4ICAgICAgICAgICA6IDE4cHg7XG4kZm9udDE2ICAgICAgICAgICA6IDE2cHg7XG4kZm9udDE0ICAgICAgICAgICA6IDE0cHg7XG4kZm9udDEyICAgICAgICAgICA6IDEycHg7XG4kZm9udDEwICAgICAgICAgICA6IDEwcHg7XG4kZm9udC13ZWlnaHQtNjAwICA6IDYwMDtcbiRmb250LXdlaWdodC01MDAgIDogNTAwO1xuJHBsYWNlaG9sZGVyLWZvbnQgOiAxMnB4O1xuJGxhYmVsLWZvbnQgICAgICAgOiAxNHB4O1xuJGNhcmQtaGVhZGVyLWZvbnQgOiAxNnB4O1xuXG4kZGF0YS10YWJsZS1oZWFkZXItMTM2NiA6IDE0cHg7XG4kZGF0YS10YWJsZS1oZWFkZXItMTkyMCA6IDE2cHg7XG4kZGF0YS10YWJsZS1ib2R5LTEzNjYgOiAxMnB4O1xuJGRhdGEtdGFibGUtYm9keS0xOTIwOiAxNnB4O1xuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWRmMjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZS1oZWFkZXIge1xuICBwYWRkaW5nOiA4cHggOHB4O1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGNvbG9yOiAjNTU1O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZS1oZWFkZXIgYnV0dG9uIHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUtYm94IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWU5ZTk7XG4gIGJvcmRlci10b3A6IDA7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUge1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTllOWU5O1xuICBjb2xvcjogIzU1NTtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0aGVhZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTk5O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTM2NnB4KSB7XG4gIDpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0aGVhZCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUgdGJvZHkge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTM2NnB4KSB7XG4gIDpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUgdGJvZHkgdGQsXG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUgdGJvZHkgdGgge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjNTU1MzUzO1xuICBmb250LXdlaWdodDogaW5pdGlhbDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0ZC5pbmRleC1jb2x1bW4sXG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUgdGJvZHkgdGguaW5kZXgtY29sdW1uIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUgdGJvZHkgdGRbZGF0YS1sYWJlbD1TdGF0dXNdIHNwYW4sXG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUgdGJvZHkgdGhbZGF0YS1sYWJlbD1TdGF0dXNdIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDJweCAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlIHRib2R5IHRkW2RhdGEtbGFiZWw9U3RhdHVzXSBzcGFuLmJsb2NrZWQsXG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUgdGJvZHkgdGhbZGF0YS1sYWJlbD1TdGF0dXNdIHNwYW4uYmxvY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUgdGJvZHkgdGRbZGF0YS1sYWJlbD1TdGF0dXNdIHNwYW4uZGVsZXRlZCxcbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0aFtkYXRhLWxhYmVsPVN0YXR1c10gc3Bhbi5kZWxldGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNmI2Yjtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0ZFtkYXRhLWxhYmVsPVN0YXR1c10gc3Bhbi5jb25maXJtZWQsXG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUgdGJvZHkgdGhbZGF0YS1sYWJlbD1TdGF0dXNdIHNwYW4uY29uZmlybWVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjNDI1ZDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0ZFtkYXRhLWxhYmVsPVN0YXR1c10gc3Bhbi5hY3RpdmUsXG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUgdGJvZHkgdGhbZGF0YS1sYWJlbD1TdGF0dXNdIHNwYW4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSB0Ym9keSB0ZFtkYXRhLWxhYmVsPVN0YXR1c10gc3Bhbi5wZW5kaW5nLFxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlIHRib2R5IHRoW2RhdGEtbGFiZWw9U3RhdHVzXSBzcGFuLnBlbmRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTBhMDJlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlIHRib2R5IHRkW2RhdGEtbGFiZWw9U3RhdHVzXSBzcGFuLmRvbmUsXG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUgdGJvZHkgdGhbZGF0YS1sYWJlbD1TdGF0dXNdIHNwYW4uZG9uZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNDQ5NzA7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUgdGJvZHkgaW1nIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZS13cmFwcGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMHB4IDhweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuaDQudGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG46aG9zdCA6Om5nLWRlZXAgZGF0YS10YWJsZS1wYWdpbmF0aW9uID4gZGl2IHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxubGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5idG4uc2VhcmNoIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgcGFkZGluZzogNHB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuYnRuLnNlYXJjaCB7XG4gICAgcGFkZGluZzogMnB4IDA7XG4gIH1cbn1cbi5idG4uc2VhcmNoIHNwYW46bGFzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5idG4uc2VhcmNoIHNwYW46bGFzdC1jaGlsZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5cbi8qKioqKiAqL1xuOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIGNhcHRpb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3QgOjpuZy1kZWVwIHRoZWFkIHRyIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICBjb2xvcjogIzU1NTY1ODtcbn1cbjpob3N0IDo6bmctZGVlcCB0aGVhZCB0ciB0aCB7XG4gIHBhZGRpbmc6IDFyZW0gMDtcbn1cbjpob3N0IDo6bmctZGVlcCB0Ym9keSB0aCxcbjpob3N0IDo6bmctZGVlcCB0Ym9keSB0ZCB7XG4gIHBhZGRpbmc6IDAuMzVyZW07XG59XG46aG9zdCA6Om5nLWRlZXAgLnJvdy1vZGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5ICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRhdGEtdGFibGUtcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOSAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhLXRhYmxlLWJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZkZmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlIHRkLFxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZSB0aCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTllOWU5O1xufVxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZSB0aGVhZCB0aCxcbjpob3N0IDo6bmctZGVlcCAuZGF0YS10YWJsZSA+IHRoZWFkID4gdHIgPiB0ZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG46aG9zdCA6Om5nLWRlZXAgdGgge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG46aG9zdCA6Om5nLWRlZXAgdGQge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCA6Om5nLWRlZXAgdGQuaW5kZXgtY29sdW1uIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbjpob3N0IDo6bmctZGVlcCAucGFnaW5hdGlvbi1yYW5nZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG46aG9zdCA6Om5nLWRlZXAgLnBhZ2luYXRpb24tYm94IHtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gIHpvb206IDc1JTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDk1JTtcbn1cbjpob3N0IDo6bmctZGVlcCAucGFnaW5hdGlvbi1ib3ggLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2wge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0bztcbn1cbjpob3N0IDo6bmctZGVlcCAucGFnaW5hdGlvbi1ib3ggLmlucHV0LWdyb3VwIHNlbGVjdCB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLmluZGV4LWNvbHVtbi1oZWFkZXIgc3Bhbjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIklEXCI7XG59XG5cbmEge1xuICBwYWRkaW5nOiAwIDJweDtcbiAgYm9yZGVyOiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmE6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuYSBpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuYS5wZW5jaWwge1xuICBjb2xvcjogIzBjNDI1ZDtcbn1cbmEudHJhc2gge1xuICBjb2xvcjogI0M5MzAyQztcbn1cbmEubG9jayB7XG4gIGNvbG9yOiAjYThkMmJlO1xufVxuYS5ub3RlIHtcbiAgY29sb3I6ICNmOWFlNGU7XG59XG5cbjpob3N0IDo6bmctZGVlcCBicy10b29sdGlwLWNvbnRhaW5lciAudG9vbHRpcC1pbm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzQyNWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIGJzLXRvb2x0aXAtY29udGFpbmVyIC50b29sdGlwLWFycm93OmJlZm9yZSxcbjpob3N0IDo6bmctZGVlcCBicy10b29sdGlwLWNvbnRhaW5lciAudG9vbHRpcC1hcnJvdyB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMwYzQyNWQ7XG59XG5cbi5wcm9kdWN0LWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAxNXB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlMmUyZTI7XG59XG5cbi5kZXNjcmlwdGlvbi1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODUlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGM0MjVkO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG4uZGVzY3JpcHRpb24tY2FyZCBwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZGVzY3JpcHRpb24tY2FyZCBwOmZpcnN0LW9mLXR5cGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5kZXNjcmlwdGlvbi1jYXJkIC5iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDI1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYThkMmJlO1xufVxuXG4uY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uY2FyZCAuY2FyZC1oZWFkZXIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmNhcmQgLmNhcmQtYm9keSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-products',
          templateUrl: './products.component.html',
          styleUrls: ['./products.component.scss']
        }]
      }], function () {
        return [{
          type: _products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/products/products.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/products/products.module.ts ***!
    \***************************************************/

  /*! exports provided: ProductsModule */

  /***/
  function srcAppPagesProductsProductsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsModule", function () {
      return ProductsModule;
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


    var _products_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./products-routing.module */
    "./src/app/pages/products/products-routing.module.ts");
    /* harmony import */


    var _products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./products.component */
    "./src/app/pages/products/products.component.ts");
    /* harmony import */


    var src_app_reusable_components_form_fields_form_fields_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/reusable-components/form-fields/form-fields.module */
    "./src/app/reusable-components/form-fields/form-fields.module.ts");
    /* harmony import */


    var angular7_data_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular7-data-table */
    "./node_modules/angular7-data-table/__ivy_ngcc__/esm2015/angular7-data-table.js");
    /* harmony import */


    var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-product/add-product.component */
    "./src/app/pages/products/add-product/add-product.component.ts");
    /* harmony import */


    var _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./edit-product/edit-product.component */
    "./src/app/pages/products/edit-product/edit-product.component.ts");

    var ProductsModule = function ProductsModule() {
      _classCallCheck(this, ProductsModule);
    };

    ProductsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProductsModule
    });
    ProductsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProductsModule_Factory(t) {
        return new (t || ProductsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductsRoutingModule"], src_app_reusable_components_form_fields_form_fields_module__WEBPACK_IMPORTED_MODULE_4__["FormFieldsModule"], angular7_data_table__WEBPACK_IMPORTED_MODULE_5__["DataTableModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductsModule, {
        declarations: [_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"], _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_6__["AddProductComponent"], _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_7__["EditProductComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductsRoutingModule"], src_app_reusable_components_form_fields_form_fields_module__WEBPACK_IMPORTED_MODULE_4__["FormFieldsModule"], angular7_data_table__WEBPACK_IMPORTED_MODULE_5__["DataTableModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"], _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_6__["AddProductComponent"], _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_7__["EditProductComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductsRoutingModule"], src_app_reusable_components_form_fields_form_fields_module__WEBPACK_IMPORTED_MODULE_4__["FormFieldsModule"], angular7_data_table__WEBPACK_IMPORTED_MODULE_5__["DataTableModule"].forRoot()]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/products/products.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/products/products.service.ts ***!
    \****************************************************/

  /*! exports provided: ProductsService */

  /***/
  function srcAppPagesProductsProductsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsService", function () {
      return ProductsService;
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


    var _models_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/product */
    "./src/app/models/product.ts");
    /* harmony import */


    var _models_product__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_product__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _config_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../config/variables */
    "./src/app/config/variables.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ProductsService = /*#__PURE__*/function () {
      function ProductsService(http) {
        _classCallCheck(this, ProductsService);

        this.http = http;
        this.products = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
      }

      _createClass(ProductsService, [{
        key: "getAll",
        value: function getAll() {
          var _this9 = this;

          return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + '/product').subscribe(function (res) {
            if (res['data']) {
              _this9.products.next(res['data']);
            }
          });
        }
      }, {
        key: "getOne",
        value: function getOne(itemId) {
          return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + "/product/".concat(itemId));
        }
      }, {
        key: "addOne",
        value: function addOne(form) {
          return this.http.post(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + '/product', form);
        }
      }, {
        key: "updateOne",
        value: function updateOne(form, itemId) {
          return this.http.put(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + "/product/".concat(itemId), form);
        }
      }, {
        key: "deleteOne",
        value: function deleteOne(itemId) {
          return this.http["delete"](_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + "/product/".concat(itemId));
        }
      }]);

      return ProductsService;
    }();

    ProductsService.ɵfac = function ProductsService_Factory(t) {
      return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    ProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProductsService,
      factory: ProductsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-products-products-module-es5.js.map