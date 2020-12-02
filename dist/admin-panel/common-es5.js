function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/models/category.ts":
  /*!************************************!*\
    !*** ./src/app/models/category.ts ***!
    \************************************/

  /*! no static exports found */

  /***/
  function srcAppModelsCategoryTs(module, exports) {
    var Category = function Category() {
      _classCallCheck(this, Category);
    };

    var ParentCategory = function ParentCategory() {
      _classCallCheck(this, ParentCategory);
    };
    /***/

  },

  /***/
  "./src/app/models/group.ts":
  /*!*********************************!*\
    !*** ./src/app/models/group.ts ***!
    \*********************************/

  /*! no static exports found */

  /***/
  function srcAppModelsGroupTs(module, exports) {
    var Group = function Group() {
      _classCallCheck(this, Group);
    };
    /***/

  },

  /***/
  "./src/app/models/product-attribute.ts":
  /*!*********************************************!*\
    !*** ./src/app/models/product-attribute.ts ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function srcAppModelsProductAttributeTs(module, exports) {
    var ProductAttribute = function ProductAttribute() {
      _classCallCheck(this, ProductAttribute);
    };
    /***/

  },

  /***/
  "./src/app/models/store.ts":
  /*!*********************************!*\
    !*** ./src/app/models/store.ts ***!
    \*********************************/

  /*! no static exports found */

  /***/
  function srcAppModelsStoreTs(module, exports) {
    var Store = function Store() {
      _classCallCheck(this, Store);
    };
    /***/

  },

  /***/
  "./src/app/pages/categories/categories.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/categories/categories.service.ts ***!
    \********************************************************/

  /*! exports provided: CategoriesService */

  /***/
  function srcAppPagesCategoriesCategoriesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesService", function () {
      return CategoriesService;
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


    var _models_category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/category */
    "./src/app/models/category.ts");
    /* harmony import */


    var _models_category__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_category__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _config_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../config/variables */
    "./src/app/config/variables.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CategoriesService = /*#__PURE__*/function () {
      function CategoriesService(http) {
        _classCallCheck(this, CategoriesService);

        this.http = http;
        this.categories = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.baseCategories = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
      }

      _createClass(CategoriesService, [{
        key: "getBaseCategories",
        value: function getBaseCategories() {
          var _this = this;

          return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + '/category/getBaseCategories').subscribe(function (res) {
            if (res['data']) {
              _this.baseCategories.next(res['data']);
            }
          }, function (error) {
            console.log(error); // this.error.next(error.error.message);
          });
        }
      }, {
        key: "getAll",
        value: function getAll() {
          var _this2 = this;

          return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + '/category').subscribe(function (res) {
            if (res['data']) {
              _this2.categories.next(res['data']);
            }
          }, function (error) {
            console.log(error); // this.error.next(error.error.message);
          });
        }
      }, {
        key: "getOne",
        value: function getOne(itemId) {
          return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + "/category/".concat(itemId));
        }
      }, {
        key: "addOne",
        value: function addOne(form) {
          return this.http.post(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + '/category', form);
        }
      }, {
        key: "updateOne",
        value: function updateOne(form, itemId) {
          return this.http.put(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + "/category/".concat(itemId), form);
        }
      }, {
        key: "deleteOne",
        value: function deleteOne(itemId) {
          return this.http["delete"](_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + "/category/".concat(itemId));
        }
      }, {
        key: "addSubCategory",
        value: function addSubCategory(form, parentId) {
          return this.http.post(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + "/category/".concat(parentId), form);
        }
      }]);

      return CategoriesService;
    }();

    CategoriesService.ɵfac = function CategoriesService_Factory(t) {
      return new (t || CategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    CategoriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CategoriesService,
      factory: CategoriesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesService, [{
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

  },

  /***/
  "./src/app/pages/groups/groups.service.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/groups/groups.service.ts ***!
    \************************************************/

  /*! exports provided: GroupsService */

  /***/
  function srcAppPagesGroupsGroupsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupsService", function () {
      return GroupsService;
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


    var _models_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/group */
    "./src/app/models/group.ts");
    /* harmony import */


    var _models_group__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_group__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _config_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../config/variables */
    "./src/app/config/variables.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var GroupsService = /*#__PURE__*/function () {
      function GroupsService(http) {
        _classCallCheck(this, GroupsService);

        this.http = http;
        this.groups = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
      }

      _createClass(GroupsService, [{
        key: "getAll",
        value: function getAll() {
          var _this3 = this;

          return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + '/group').subscribe(function (res) {
            if (res['data']) {
              _this3.groups.next(res['data']);
            }
          });
        }
      }, {
        key: "getOne",
        value: function getOne(itemId) {
          return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + "/group/".concat(itemId));
        }
      }, {
        key: "addOne",
        value: function addOne(form) {
          return this.http.post(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + '/group', form);
        }
      }, {
        key: "updateOne",
        value: function updateOne(form, itemId) {
          return this.http.put(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + "/group/".concat(itemId), form);
        }
      }, {
        key: "deleteOne",
        value: function deleteOne(itemId) {
          return this.http["delete"](_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + "/group/".concat(itemId));
        }
      }, {
        key: "lockOne",
        value: function lockOne(itemId) {
          return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + "/group/lock/".concat(itemId));
        }
      }, {
        key: "unlockOne",
        value: function unlockOne(itemId) {
          return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + "/group/unlock/".concat(itemId));
        }
      }]);

      return GroupsService;
    }();

    GroupsService.ɵfac = function GroupsService_Factory(t) {
      return new (t || GroupsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    GroupsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GroupsService,
      factory: GroupsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupsService, [{
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

  },

  /***/
  "./src/app/pages/places/places.service.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/places/places.service.ts ***!
    \************************************************/

  /*! exports provided: PlacesService */

  /***/
  function srcAppPagesPlacesPlacesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlacesService", function () {
      return PlacesService;
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

    var PlacesService = /*#__PURE__*/function () {
      function PlacesService(http) {
        _classCallCheck(this, PlacesService);

        this.http = http;
        this.places = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
      }

      _createClass(PlacesService, [{
        key: "getAll",
        value: function getAll() {
          var _this4 = this;

          return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + '/place').subscribe(function (res) {
            if (res['data']) {
              _this4.places.next(res['data']);
            }
          }, function (error) {
            console.log(error); // this.error.next(error.error.message);
          });
        }
      }, {
        key: "getOne",
        value: function getOne(itemId) {
          return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + "/place/".concat(itemId));
        }
      }, {
        key: "addOne",
        value: function addOne(form) {
          return this.http.post(_config_variables__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + '/place', form);
        }
      }, {
        key: "updateOne",
        value: function updateOne(form, itemId) {
          return this.http.put(_config_variables__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + "/place/".concat(itemId), form);
        }
      }, {
        key: "deleteOne",
        value: function deleteOne(itemId) {
          return this.http["delete"](_config_variables__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + "/place/".concat(itemId));
        }
      }]);

      return PlacesService;
    }();

    PlacesService.ɵfac = function PlacesService_Factory(t) {
      return new (t || PlacesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    PlacesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PlacesService,
      factory: PlacesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlacesService, [{
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
  "./src/app/pages/product-attributes/product-attributes.service.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/product-attributes/product-attributes.service.ts ***!
    \************************************************************************/

  /*! exports provided: ProductAttributesService */

  /***/
  function srcAppPagesProductAttributesProductAttributesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductAttributesService", function () {
      return ProductAttributesService;
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


    var _models_product_attribute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/product-attribute */
    "./src/app/models/product-attribute.ts");
    /* harmony import */


    var _models_product_attribute__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_product_attribute__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _config_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../config/variables */
    "./src/app/config/variables.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ProductAttributesService = /*#__PURE__*/function () {
      function ProductAttributesService(http) {
        _classCallCheck(this, ProductAttributesService);

        this.http = http;
        this.productAttributes = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
      }

      _createClass(ProductAttributesService, [{
        key: "getAll",
        value: function getAll() {
          var _this5 = this;

          return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + '/product-attribute').subscribe(function (res) {
            if (res['data']) {
              _this5.productAttributes.next(res['data']);
            }
          });
        }
      }, {
        key: "getOne",
        value: function getOne(itemId) {
          console.log(itemId);
          return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + "/product-attribute/".concat(itemId));
        }
      }, {
        key: "addOne",
        value: function addOne(form) {
          return this.http.post(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + '/product-attribute', form);
        }
      }, {
        key: "updateOne",
        value: function updateOne(form, itemId) {
          return this.http.put(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + "/product-attribute/".concat(itemId), form);
        }
      }, {
        key: "deleteOne",
        value: function deleteOne(itemId) {
          return this.http["delete"](_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + "/product-attribute/".concat(itemId));
        }
      }]);

      return ProductAttributesService;
    }();

    ProductAttributesService.ɵfac = function ProductAttributesService_Factory(t) {
      return new (t || ProductAttributesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    ProductAttributesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProductAttributesService,
      factory: ProductAttributesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductAttributesService, [{
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

  },

  /***/
  "./src/app/pages/stores/stores.service.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/stores/stores.service.ts ***!
    \************************************************/

  /*! exports provided: StoresService */

  /***/
  function srcAppPagesStoresStoresServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoresService", function () {
      return StoresService;
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


    var _models_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/store */
    "./src/app/models/store.ts");
    /* harmony import */


    var _models_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_store__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _config_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../config/variables */
    "./src/app/config/variables.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var StoresService = /*#__PURE__*/function () {
      function StoresService(http) {
        _classCallCheck(this, StoresService);

        this.http = http;
        this.stores = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
      }

      _createClass(StoresService, [{
        key: "getAll",
        value: function getAll() {
          var _this6 = this;

          return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + '/store').subscribe(function (res) {
            if (res['data']) {
              _this6.stores.next(res['data']);
            }
          }, function (error) {
            console.log(error); // this.error.next(error.error.message);
          });
        }
      }, {
        key: "getOne",
        value: function getOne(itemId) {
          return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + "/store/".concat(itemId));
        }
      }, {
        key: "addOne",
        value: function addOne(form) {
          return this.http.post(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + '/store', form);
        }
      }, {
        key: "updateOne",
        value: function updateOne(form, itemId) {
          return this.http.put(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + "/store/".concat(itemId), form);
        }
      }, {
        key: "deleteOne",
        value: function deleteOne(itemId) {
          return this.http["delete"](_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + "/store/".concat(itemId));
        }
      }, {
        key: "activateOne",
        value: function activateOne(itemId) {
          return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + "/store/activate/".concat(itemId));
        }
      }, {
        key: "deactivateOne",
        value: function deactivateOne(itemId) {
          return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + "/store/deactivate/".concat(itemId));
        }
      }, {
        key: "lockOne",
        value: function lockOne(itemId) {
          return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + "/store/lock/".concat(itemId));
        }
      }, {
        key: "unlockOne",
        value: function unlockOne(itemId) {
          return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + "/store/unlock/".concat(itemId));
        }
      }, {
        key: "collect",
        value: function collect(itemId) {
          return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + "/store/collect/".concat(itemId));
        }
      }]);

      return StoresService;
    }();

    StoresService.ɵfac = function StoresService_Factory(t) {
      return new (t || StoresService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    StoresService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StoresService,
      factory: StoresService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoresService, [{
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
//# sourceMappingURL=common-es5.js.map