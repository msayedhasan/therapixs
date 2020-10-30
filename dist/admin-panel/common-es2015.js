(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/models/category.ts":
/*!************************************!*\
  !*** ./src/app/models/category.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Category {
}
class ParentCategory {
}


/***/ }),

/***/ "./src/app/models/product-attribute.ts":
/*!*********************************************!*\
  !*** ./src/app/models/product-attribute.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class ProductAttribute {
}


/***/ }),

/***/ "./src/app/pages/categories/categories.service.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/categories/categories.service.ts ***!
  \********************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/category */ "./src/app/models/category.ts");
/* harmony import */ var _models_category__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_category__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/variables */ "./src/app/config/variables.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class CategoriesService {
    constructor(http) {
        this.http = http;
        this.categories = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.baseCategories = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    getBaseCategories() {
        return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + '/category/getBaseCategories').subscribe((res) => {
            if (res['data']) {
                this.baseCategories.next(res['data']);
            }
        }, (error) => {
            console.log(error);
            // this.error.next(error.error.message);
        });
    }
    getAll() {
        return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + '/category').subscribe((res) => {
            if (res['data']) {
                this.categories.next(res['data']);
            }
        }, (error) => {
            console.log(error);
            // this.error.next(error.error.message);
        });
    }
    getOne(itemId) {
        return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/category/${itemId}`);
    }
    addOne(form) {
        return this.http.post(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + '/category', form);
    }
    updateOne(form, itemId) {
        return this.http.put(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/category/${itemId}`, form);
    }
    deleteOne(itemId) {
        return this.http.delete(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/category/${itemId}`);
    }
    addSubCategory(form, parentId) {
        return this.http.post(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/category/${parentId}`, form);
    }
}
CategoriesService.ɵfac = function CategoriesService_Factory(t) { return new (t || CategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
CategoriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoriesService, factory: CategoriesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/product-attributes/product-attributes.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/product-attributes/product-attributes.service.ts ***!
  \************************************************************************/
/*! exports provided: ProductAttributesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAttributesService", function() { return ProductAttributesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_product_attribute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/product-attribute */ "./src/app/models/product-attribute.ts");
/* harmony import */ var _models_product_attribute__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_product_attribute__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/variables */ "./src/app/config/variables.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class ProductAttributesService {
    constructor(http) {
        this.http = http;
        this.productAttributes = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    getAll() {
        return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + '/product-attribute').subscribe((res) => {
            if (res['data']) {
                this.productAttributes.next(res['data']);
            }
        });
    }
    getOne(itemId) {
        console.log(itemId);
        return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/product-attribute/${itemId}`);
    }
    addOne(form) {
        return this.http.post(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + '/product-attribute', form);
    }
    updateOne(form, itemId) {
        return this.http.put(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/product-attribute/${itemId}`, form);
    }
    deleteOne(itemId) {
        return this.http.delete(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/product-attribute/${itemId}`);
    }
}
ProductAttributesService.ɵfac = function ProductAttributesService_Factory(t) { return new (t || ProductAttributesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
ProductAttributesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductAttributesService, factory: ProductAttributesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductAttributesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map