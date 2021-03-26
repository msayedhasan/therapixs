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

/***/ "./src/app/models/group.ts":
/*!*********************************!*\
  !*** ./src/app/models/group.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Group {
}


/***/ }),

/***/ "./src/app/models/order.ts":
/*!*********************************!*\
  !*** ./src/app/models/order.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Order {
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

/***/ "./src/app/models/product.ts":
/*!***********************************!*\
  !*** ./src/app/models/product.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Product {
}


/***/ }),

/***/ "./src/app/models/store.ts":
/*!*********************************!*\
  !*** ./src/app/models/store.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Store {
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
    addDiscount(form, categoryId) {
        return this.http.post(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/category/discount/add/${categoryId}`, form);
    }
    addProfit(form, categoryId) {
        return this.http.post(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/category/profit/add/${categoryId}`, form);
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

/***/ "./src/app/pages/groups/groups.service.ts":
/*!************************************************!*\
  !*** ./src/app/pages/groups/groups.service.ts ***!
  \************************************************/
/*! exports provided: GroupsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsService", function() { return GroupsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/group */ "./src/app/models/group.ts");
/* harmony import */ var _models_group__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_group__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/variables */ "./src/app/config/variables.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class GroupsService {
    constructor(http) {
        this.http = http;
        this.groups = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    getAll() {
        return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + '/group').subscribe((res) => {
            if (res['data']) {
                this.groups.next(res['data']);
            }
        });
    }
    getOne(itemId) {
        return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/group/${itemId}`);
    }
    addOne(form) {
        return this.http.post(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + '/group', form);
    }
    updateOne(form, itemId) {
        return this.http.put(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/group/${itemId}`, form);
    }
    deleteOne(itemId) {
        return this.http.delete(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/group/${itemId}`);
    }
    lockOne(itemId) {
        return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/group/lock/${itemId}`);
    }
    unlockOne(itemId) {
        return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/group/unlock/${itemId}`);
    }
}
GroupsService.ɵfac = function GroupsService_Factory(t) { return new (t || GroupsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
GroupsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GroupsService, factory: GroupsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/orders/orders.service.ts":
/*!************************************************!*\
  !*** ./src/app/pages/orders/orders.service.ts ***!
  \************************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/order */ "./src/app/models/order.ts");
/* harmony import */ var _models_order__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_order__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/variables */ "./src/app/config/variables.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class OrdersService {
    constructor(http) {
        this.http = http;
        this.orders = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    getAll() {
        return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + '/order').subscribe((res) => {
            if (res['data']) {
                this.orders.next(res['data']);
            }
        });
    }
    confirmOne(itemId) {
        return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/order/confirmOne/${itemId}`);
    }
    cancelOne(itemId) {
        return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/order/cancelCompleteOrder/${itemId}`);
    }
    shipOne(itemId) {
        return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/order/shipOne/${itemId}`);
    }
    deliverOne(itemId) {
        return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/order/deliverOne/${itemId}`);
    }
}
OrdersService.ɵfac = function OrdersService_Factory(t) { return new (t || OrdersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
OrdersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrdersService, factory: OrdersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/places/places.service.ts":
/*!************************************************!*\
  !*** ./src/app/pages/places/places.service.ts ***!
  \************************************************/
/*! exports provided: PlacesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesService", function() { return PlacesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _config_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/variables */ "./src/app/config/variables.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class PlacesService {
    constructor(http) {
        this.http = http;
        this.places = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    getAll() {
        return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + '/place').subscribe((res) => {
            if (res['data']) {
                this.places.next(res['data']);
            }
        }, (error) => {
            console.log(error);
            // this.error.next(error.error.message);
        });
    }
    getOne(itemId) {
        return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + `/place/${itemId}`);
    }
    addOne(form) {
        return this.http.post(_config_variables__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + '/place', form);
    }
    updateOne(form, itemId) {
        return this.http.put(_config_variables__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + `/place/${itemId}`, form);
    }
    deleteOne(itemId) {
        return this.http.delete(_config_variables__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + `/place/${itemId}`);
    }
}
PlacesService.ɵfac = function PlacesService_Factory(t) { return new (t || PlacesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
PlacesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PlacesService, factory: PlacesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlacesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


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


/***/ }),

/***/ "./src/app/pages/products/products.service.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/products/products.service.ts ***!
  \****************************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/product */ "./src/app/models/product.ts");
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_product__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/variables */ "./src/app/config/variables.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class ProductsService {
    constructor(http) {
        this.http = http;
        this.products = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.lastParsedPage = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    pagination(event) {
        console.log('event from products service');
        console.log(event);
        this.lastParsedPage.next(event);
    }
    getAll() {
        return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + '/product').subscribe((res) => {
            if (res['data']) {
                this.products.next(res['data']);
            }
        });
    }
    getOne(itemId) {
        return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/product/${itemId}`);
    }
    addOne(form) {
        return this.http.post(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + '/product', form);
    }
    copyOne(itemId) {
        return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/product/copy/${itemId}`);
    }
    updateOne(form, itemId) {
        return this.http.put(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/product/${itemId}`, form);
    }
    deleteOne(itemId) {
        return this.http.delete(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/product/${itemId}`);
    }
    addProductToStore(productId, storeId) {
        return this.http.post(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/product/addProductToStore/${productId}/${storeId}`, {});
    }
    activateOne(itemId) {
        return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/product/activate/${itemId}`);
    }
    deactivateOne(itemId) {
        return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/product/deactivate/${itemId}`);
    }
    soldOne(itemId) {
        return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/product/sold/${itemId}`);
    }
    availableOne(itemId) {
        return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/product/available/${itemId}`);
    }
    addDiscount(form, itemId) {
        return this.http.post(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/product/discount/add/${itemId}`, form);
    }
    deleteDiscount(itemId) {
        return this.http.delete(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/product/discount/delete/${itemId}`);
    }
    bestSelling() {
        return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/product/bestSelling`);
    }
}
ProductsService.ɵfac = function ProductsService_Factory(t) { return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
ProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductsService, factory: ProductsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/stores/stores.service.ts":
/*!************************************************!*\
  !*** ./src/app/pages/stores/stores.service.ts ***!
  \************************************************/
/*! exports provided: StoresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresService", function() { return StoresService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/store */ "./src/app/models/store.ts");
/* harmony import */ var _models_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_store__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/variables */ "./src/app/config/variables.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class StoresService {
    constructor(http) {
        this.http = http;
        this.stores = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    getAll() {
        return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + '/store').subscribe((res) => {
            if (res['data']) {
                this.stores.next(res['data']);
            }
        }, (error) => {
            console.log(error);
            // this.error.next(error.error.message);
        });
    }
    getOne(itemId) {
        return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/store/${itemId}`);
    }
    addOne(form) {
        return this.http.post(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + '/store', form);
    }
    updateOne(form, itemId) {
        return this.http.put(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/store/${itemId}`, form);
    }
    deleteOne(itemId) {
        return this.http.delete(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/store/${itemId}`);
    }
    activateOne(itemId) {
        return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/store/activate/${itemId}`);
    }
    deactivateOne(itemId) {
        return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/store/deactivate/${itemId}`);
    }
    lockOne(itemId) {
        return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/store/lock/${itemId}`);
    }
    unlockOne(itemId) {
        return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/store/unlock/${itemId}`);
    }
    collect(itemId) {
        return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/store/collect/${itemId}`);
    }
    addDiscount(form, itemId) {
        return this.http.post(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/store/discount/add/${itemId}`, form);
    }
    deleteDiscount(itemId) {
        return this.http.delete(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/store/discount/delete/${itemId}`);
    }
    addProfit(form, itemId) {
        return this.http.post(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/store/profit/add/${itemId}`, form);
    }
    deleteProfit(itemId) {
        return this.http.delete(_config_variables__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + `/store/profit/delete/${itemId}`);
    }
}
StoresService.ɵfac = function StoresService_Factory(t) { return new (t || StoresService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
StoresService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StoresService, factory: StoresService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoresService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/users/users.service.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/users/users.service.ts ***!
  \**********************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _config_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/variables */ "./src/app/config/variables.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class UsersService {
    constructor(http) {
        this.http = http;
        this.users = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    getAll() {
        return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + '/user').subscribe((res) => {
            this.users.next(res['data']);
        });
    }
    addShipper(userId) {
        return this.http.post(_config_variables__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + `/shipper/addShipper/${userId}`, {});
    }
    deleteShipper(userId) {
        return this.http.delete(_config_variables__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + `/shipper/deleteShipper/${userId}`);
    }
    addLeader(userId) {
        return this.http.post(_config_variables__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + `/leader/addLeader/${userId}`, {});
    }
    deleteLeader(userId) {
        return this.http.delete(_config_variables__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + `/leader/deleteLeader/${userId}`);
    }
    addOwner(userId) {
        return this.http.post(_config_variables__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + `/owner/addOwner/${userId}`, {});
    }
    deleteOwner(userId) {
        return this.http.delete(_config_variables__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + `/owner/deleteOwner/${userId}`);
    }
    lockOne(itemId) {
        return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + `/user/lock/${itemId}`);
    }
    unlockOne(itemId) {
        return this.http.get(_config_variables__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + `/user/unlock/${itemId}`);
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map