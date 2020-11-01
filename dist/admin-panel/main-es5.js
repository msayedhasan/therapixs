function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./layout/layout.component */
    "./src/app/layout/layout.component.ts");
    /* harmony import */


    var _pages_error404_error404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/error404/error404.component */
    "./src/app/pages/error404/error404.component.ts");
    /* harmony import */


    var _pages_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/auth/auth.guard */
    "./src/app/pages/auth/auth.guard.ts");

    var routes = [{
      path: '',
      canActivate: [_pages_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
      component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
      children: [{
        path: '',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-dashboard-dashboard-module */
          [__webpack_require__.e("default~pages-auth-auth-module~pages-categories-categories-module~pages-dashboard-dashboard-module~p~e1be092c"), __webpack_require__.e("default~pages-auth-auth-module~pages-categories-categories-module~pages-dashboard-dashboard-module~p~bc4abb5c"), __webpack_require__.e("pages-dashboard-dashboard-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/dashboard/dashboard.module */
          "./src/app/pages/dashboard/dashboard.module.ts")).then(function (m) {
            return m.DashboardModule;
          });
        }
      }, {
        path: 'dashboard',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-dashboard-dashboard-module */
          [__webpack_require__.e("default~pages-auth-auth-module~pages-categories-categories-module~pages-dashboard-dashboard-module~p~e1be092c"), __webpack_require__.e("default~pages-auth-auth-module~pages-categories-categories-module~pages-dashboard-dashboard-module~p~bc4abb5c"), __webpack_require__.e("pages-dashboard-dashboard-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/dashboard/dashboard.module */
          "./src/app/pages/dashboard/dashboard.module.ts")).then(function (m) {
            return m.DashboardModule;
          });
        }
      }, {
        path: 'stores',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-stores-stores-module */
          [__webpack_require__.e("default~pages-auth-auth-module~pages-categories-categories-module~pages-dashboard-dashboard-module~p~e1be092c"), __webpack_require__.e("default~pages-auth-auth-module~pages-categories-categories-module~pages-feeds-feeds-module~pages-ord~142c5de2"), __webpack_require__.e("default~pages-categories-categories-module~pages-feeds-feeds-module~pages-orders-orders-module~pages~1b778316"), __webpack_require__.e("default~pages-auth-auth-module~pages-categories-categories-module~pages-dashboard-dashboard-module~p~bc4abb5c"), __webpack_require__.e("default~pages-auth-auth-module~pages-categories-categories-module~pages-feeds-feeds-module~pages-pro~a61ff8a4"), __webpack_require__.e("pages-stores-stores-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/stores/stores.module */
          "./src/app/pages/stores/stores.module.ts")).then(function (m) {
            return m.StoresModule;
          });
        }
      }, {
        path: 'categories',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-categories-categories-module */
          [__webpack_require__.e("default~pages-auth-auth-module~pages-categories-categories-module~pages-dashboard-dashboard-module~p~e1be092c"), __webpack_require__.e("default~pages-auth-auth-module~pages-categories-categories-module~pages-feeds-feeds-module~pages-ord~142c5de2"), __webpack_require__.e("default~pages-categories-categories-module~pages-feeds-feeds-module~pages-orders-orders-module~pages~1b778316"), __webpack_require__.e("default~pages-auth-auth-module~pages-categories-categories-module~pages-dashboard-dashboard-module~p~bc4abb5c"), __webpack_require__.e("default~pages-auth-auth-module~pages-categories-categories-module~pages-feeds-feeds-module~pages-pro~a61ff8a4"), __webpack_require__.e("common"), __webpack_require__.e("pages-categories-categories-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/categories/categories.module */
          "./src/app/pages/categories/categories.module.ts")).then(function (m) {
            return m.CategoriesModule;
          });
        }
      }, {
        path: 'product-attributes',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-product-attributes-product-attributes-module */
          [__webpack_require__.e("default~pages-auth-auth-module~pages-categories-categories-module~pages-dashboard-dashboard-module~p~e1be092c"), __webpack_require__.e("default~pages-auth-auth-module~pages-categories-categories-module~pages-feeds-feeds-module~pages-ord~142c5de2"), __webpack_require__.e("default~pages-categories-categories-module~pages-feeds-feeds-module~pages-orders-orders-module~pages~1b778316"), __webpack_require__.e("default~pages-auth-auth-module~pages-categories-categories-module~pages-dashboard-dashboard-module~p~bc4abb5c"), __webpack_require__.e("default~pages-auth-auth-module~pages-categories-categories-module~pages-feeds-feeds-module~pages-pro~a61ff8a4"), __webpack_require__.e("common"), __webpack_require__.e("pages-product-attributes-product-attributes-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/product-attributes/product-attributes.module */
          "./src/app/pages/product-attributes/product-attributes.module.ts")).then(function (m) {
            return m.ProductAttributesModule;
          });
        }
      }, {
        path: 'users',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-users-users-module */
          [__webpack_require__.e("default~pages-auth-auth-module~pages-categories-categories-module~pages-dashboard-dashboard-module~p~e1be092c"), __webpack_require__.e("default~pages-auth-auth-module~pages-categories-categories-module~pages-feeds-feeds-module~pages-ord~142c5de2"), __webpack_require__.e("default~pages-categories-categories-module~pages-feeds-feeds-module~pages-orders-orders-module~pages~1b778316"), __webpack_require__.e("pages-users-users-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/users/users.module */
          "./src/app/pages/users/users.module.ts")).then(function (m) {
            return m.UsersModule;
          });
        }
      }, {
        path: 'products',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-products-products-module */
          [__webpack_require__.e("default~pages-auth-auth-module~pages-categories-categories-module~pages-dashboard-dashboard-module~p~e1be092c"), __webpack_require__.e("default~pages-auth-auth-module~pages-categories-categories-module~pages-feeds-feeds-module~pages-ord~142c5de2"), __webpack_require__.e("default~pages-categories-categories-module~pages-feeds-feeds-module~pages-orders-orders-module~pages~1b778316"), __webpack_require__.e("default~pages-auth-auth-module~pages-categories-categories-module~pages-dashboard-dashboard-module~p~bc4abb5c"), __webpack_require__.e("default~pages-auth-auth-module~pages-categories-categories-module~pages-feeds-feeds-module~pages-pro~a61ff8a4"), __webpack_require__.e("common"), __webpack_require__.e("pages-products-products-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/products/products.module */
          "./src/app/pages/products/products.module.ts")).then(function (m) {
            return m.ProductsModule;
          });
        }
      }, {
        path: 'feeds',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-feeds-feeds-module */
          [__webpack_require__.e("default~pages-auth-auth-module~pages-categories-categories-module~pages-dashboard-dashboard-module~p~e1be092c"), __webpack_require__.e("default~pages-auth-auth-module~pages-categories-categories-module~pages-feeds-feeds-module~pages-ord~142c5de2"), __webpack_require__.e("default~pages-categories-categories-module~pages-feeds-feeds-module~pages-orders-orders-module~pages~1b778316"), __webpack_require__.e("default~pages-auth-auth-module~pages-categories-categories-module~pages-dashboard-dashboard-module~p~bc4abb5c"), __webpack_require__.e("default~pages-auth-auth-module~pages-categories-categories-module~pages-feeds-feeds-module~pages-pro~a61ff8a4"), __webpack_require__.e("pages-feeds-feeds-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/feeds/feeds.module */
          "./src/app/pages/feeds/feeds.module.ts")).then(function (m) {
            return m.FeedsModule;
          });
        }
      }, {
        path: 'orders',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-orders-orders-module */
          [__webpack_require__.e("default~pages-auth-auth-module~pages-categories-categories-module~pages-dashboard-dashboard-module~p~e1be092c"), __webpack_require__.e("default~pages-auth-auth-module~pages-categories-categories-module~pages-feeds-feeds-module~pages-ord~142c5de2"), __webpack_require__.e("default~pages-categories-categories-module~pages-feeds-feeds-module~pages-orders-orders-module~pages~1b778316"), __webpack_require__.e("pages-orders-orders-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/orders/orders.module */
          "./src/app/pages/orders/orders.module.ts")).then(function (m) {
            return m.OrdersModule;
          });
        }
      }]
    }, {
      path: 'auth',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-auth-auth-module */
        [__webpack_require__.e("default~pages-auth-auth-module~pages-categories-categories-module~pages-dashboard-dashboard-module~p~e1be092c"), __webpack_require__.e("default~pages-auth-auth-module~pages-categories-categories-module~pages-feeds-feeds-module~pages-ord~142c5de2"), __webpack_require__.e("default~pages-auth-auth-module~pages-categories-categories-module~pages-dashboard-dashboard-module~p~bc4abb5c"), __webpack_require__.e("default~pages-auth-auth-module~pages-categories-categories-module~pages-feeds-feeds-module~pages-pro~a61ff8a4"), __webpack_require__.e("pages-auth-auth-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/auth/auth.module */
        "./src/app/pages/auth/auth.module.ts")).then(function (m) {
          return m.AuthModule;
        });
      }
    }, {
      path: '**',
      component: _pages_error404_error404_component__WEBPACK_IMPORTED_MODULE_3__["Error404Component"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Motobar';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-bootstrap/dropdown */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _pages_auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/auth/auth-interceptor.service */
    "./src/app/pages/auth/auth-interceptor.service.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./layout/layout.component */
    "./src/app/layout/layout.component.ts");
    /* harmony import */


    var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./layout/header/header.component */
    "./src/app/layout/header/header.component.ts");
    /* harmony import */


    var _layout_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./layout/side-menu/side-menu.component */
    "./src/app/layout/side-menu/side-menu.component.ts");
    /* harmony import */


    var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./layout/footer/footer.component */
    "./src/app/layout/footer/footer.component.ts");
    /* harmony import */


    var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./layout/breadcrumb/breadcrumb.component */
    "./src/app/layout/breadcrumb/breadcrumb.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
        useClass: _pages_auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_12__["AuthInterceptorService"],
        multi: true
      }],
      imports: [[_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"].forRoot(), ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot(), ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_14__["LayoutComponent"], _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_18__["BreadcrumbComponent"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"], _layout_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_16__["SideMenuComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"]],
        imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_14__["LayoutComponent"], _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_18__["BreadcrumbComponent"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"], _layout_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_16__["SideMenuComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"]],
          imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"].forRoot(), ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot(), ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerModule"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
            useClass: _pages_auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_12__["AuthInterceptorService"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/config/variables.ts":
  /*!*************************************!*\
    !*** ./src/app/config/variables.ts ***!
    \*************************************/

  /*! exports provided: baseUrl */

  /***/
  function srcAppConfigVariablesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "baseUrl", function () {
      return baseUrl;
    });

    var baseUrl = 'https://motobar.herokuapp.com'; // export var baseUrl = 'http://localhost:3000';

    /***/
  },

  /***/
  "./src/app/layout/breadcrumb/breadcrumb.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/layout/breadcrumb/breadcrumb.component.ts ***!
    \***********************************************************/

  /*! exports provided: BreadcrumbComponent */

  /***/
  function srcAppLayoutBreadcrumbBreadcrumbComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () {
      return BreadcrumbComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var BreadcrumbComponent = /*#__PURE__*/function () {
      function BreadcrumbComponent() {
        _classCallCheck(this, BreadcrumbComponent);
      }

      _createClass(BreadcrumbComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BreadcrumbComponent;
    }();

    BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) {
      return new (t || BreadcrumbComponent)();
    };

    BreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BreadcrumbComponent,
      selectors: [["app-breadcrumb"]],
      decls: 9,
      vars: 0,
      consts: [[1, "grid-center-noGutter", "bread"], [1, "col-23", "grid-middle-center-noGutter"], [1, "breadcrum"], [1, "grid-right-noGutter", "dashboard-btn"], ["routerLink", "", 1, "col-middle", "grid-right-noGutter"], [1, "material-icons"]],
      template: function BreadcrumbComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "trending_up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["@media (max-width: 576px) {\n  .breadcrum[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n\n[_nghost-%COMP%]     breadcrumb div {\n  padding: 0;\n}\n\n[_nghost-%COMP%]     breadcrumb .active {\n  color: #343434;\n}\n\n.bread[_ngcontent-%COMP%] {\n  background-color: white;\n  border-bottom: 1px solid #f1f1f1;\n  box-shadow: 0 0px 8px 1px rgba(0, 0, 0, 0.05);\n  height: 45px;\n  color: #555;\n  font-size: 14px;\n}\n\n.bread[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.bread[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0c425d;\n}\n\ni[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n\n.breadcrumb-item.active[_ngcontent-%COMP%] {\n  color: black;\n}\n\n@media (max-width: 576px) {\n  .dashboard-btn[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .dashboard-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2JyZWFkY3J1bWIvRTpcXFVudGl0bGVkIEZvbGRlclxccHJpdmF0ZVxccHJvamVjdHNcXGZ1bGxfc3RhY2tcXG1vdG9iYXJcXG1vdG9iYXJfYWRtaW4vc3JjXFxhcHBcXGxheW91dFxcYnJlYWRjcnVtYlxcYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2JyZWFkY3J1bWIvRTpcXFVudGl0bGVkIEZvbGRlclxccHJpdmF0ZVxccHJvamVjdHNcXGZ1bGxfc3RhY2tcXG1vdG9iYXJcXG1vdG9iYXJfYWRtaW4vc3JjXFxzY3NzXFxhYnN0cmFjdHNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQURGO0lBRUksZUFBQTtFQ0FGO0FBQ0Y7O0FER0U7RUFBSyxVQUFBO0FDQ1A7O0FEQUU7RUFDRSxjRU9zQjtBREwxQjs7QURDQTtFQUNFLHVCRVN3QjtFRlJ4QixnQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsWUFBQTtFQUNBLFdFRndCO0VGR3hCLGVBQUE7QUNFRjs7QURERTtFQUNFLGNBQUE7QUNHSjs7QURGSTtFQUNFLGNFcEJHO0FEd0JUOztBREFBO0VBQ0UsY0FBQTtBQ0dGOztBREFBO0VBQ0UsWUFBQTtBQ0dGOztBRENJO0VBREo7SUFFSSxlQUFBO0VDR0Y7RURGRTtJQUNFLGVBQUE7RUNJSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3Njc3MvYWJzdHJhY3RzL3ZhcmlhYmxlcyc7XG4uYnJlYWRjcnVtIHtcbiAgQG1lZGlhKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cbjpob3N0IDo6bmctZGVlcCBicmVhZGNydW1iIHtcbiAgZGl2IHtwYWRkaW5nOiAwO31cbiAgLmFjdGl2ZXtcbiAgICBjb2xvcjogJGFjdGl2ZS1icmVhZGNydW1iLWNvbG9yO1xuICB9XG59XG4uYnJlYWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGVhZGVyLWJhY2tncm91bmQtY29sb3I7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyO1xuICBib3gtc2hhZG93OiAwIDBweCA4cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGhlaWdodDogNDVweDtcbiAgY29sb3I6ICRmb250LWNvbG9yO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGF7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogJGNvbG9yMTtcbiAgICB9XG4gIH1cbn1cbmkge1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxuLmJyZWFkY3J1bWItaXRlbS5hY3RpdmUge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5kYXNoYm9hcmQtYnRuIHtcbiAgICBAbWVkaWEobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBpIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gIH1cbn0iLCJAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmJyZWFkY3J1bSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG5cbjpob3N0IDo6bmctZGVlcCBicmVhZGNydW1iIGRpdiB7XG4gIHBhZGRpbmc6IDA7XG59XG46aG9zdCA6Om5nLWRlZXAgYnJlYWRjcnVtYiAuYWN0aXZlIHtcbiAgY29sb3I6ICMzNDM0MzQ7XG59XG5cbi5icmVhZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcbiAgYm94LXNoYWRvdzogMCAwcHggOHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGNvbG9yOiAjNTU1O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uYnJlYWQgYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuLmJyZWFkIGE6aG92ZXIge1xuICBjb2xvcjogIzBjNDI1ZDtcbn1cblxuaSB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuXG4uYnJlYWRjcnVtYi1pdGVtLmFjdGl2ZSB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5kYXNoYm9hcmQtYnRuIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgLmRhc2hib2FyZC1idG4gaSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59IiwiLy9jb2xvcnNcbiR3aGl0ZSA6IHdoaXRlO1xuJGNvbG9yMTogIzBjNDI1ZDtcbiRjb2xvcjI6ICNhOGQyYmU7XG4kY29sb3IzOiAjNDg5OWMyO1xuJGNvbG9yNDogIzFmNzdhMztcblxuJGNvbG9yNSA6ICNmOWFlNGU7XG4kY29sb3I1NTogI2Q2ODUyMjtcblxuJGJvcmRlciAgICAgICAgICAgICAgICAgOiAjZjFmMWYxO1xuJGRhdGEtdGFibGUtYm9yZGVyICAgICAgOiAjZTllOWU5O1xuJGdyYXkyICAgICAgICAgICAgICAgICAgOiAjZTJlMmUyO1xuJGdyYXkzICAgICAgICAgICAgICAgICAgOiAjNzU3NTc1O1xuJHRyYXNoLWNvbG9yICAgICAgICAgICAgOiAjQzkzMDJDO1xuJGZvbnQtY29sb3IgICAgICAgICAgICAgOiAjNTU1O1xuJGFjdGl2ZS1icmVhZGNydW1iLWNvbG9yOiAjMzQzNDM0O1xuJGNhcmQtaGVhZGVyLWJnICAgICAgICAgOiAjZjlmOWY5OyAvLyNlZmVmZWY7IC8vI2Y5ZjlmOTtcbiRwbGFjZWhvbGRlci1jb2xvciAgICAgIDogI2IzYjNiMztcblxuLy8gYmFja2dyb3VuZCBjb2xvclxuJG1haW4tYmFja2dyb3VuZC1jb2xvciAgOiAjZWZlZGYyO1xuJGhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiRkYXRhLXRhYmxlLWJveCAgICAgICAgIDogI2ZmZmRmZTsgLy8jZjdmN2Y3O1xuJGNhcmQtYm9keSAgICAgICAgICAgICAgOiAjZmZmZGZlO1xuXG4vLyBEYXNoYm9hcmRcbiRtYXJnaW5CZXR3ZWVuQ2FyZHM6IDIycHg7XG4kYXhpc0ZvbnRTaXplICAgICAgOiAxMnB4O1xuJHNtYWxsQXhpc0ZvbnRTaXplIDogMTBweDtcblxuLy9oZWFkZXJcbiRwcm9maWxlLW1lbnUtY29sb3I6ICNmOWY5Zjk7XG4kYmlsbC1jb2xvciAgICAgICAgOiAjOWJhMmFhO1xuJGJpbGwtaG92ZXItY29sb3IgIDogIzczODE4ZjtcblxuLy9MYXlvdXQgVmFyaWFibGVzXG5cbiRoZWFkZXItaGVpZ2h0IDogNTVweDtcbiRzaWRlTWVudS13aWR0aDogMjAwcHg7XG5cblxuLy9sb2dpblxuJGxveWFsaXR5LWNvbG9yICA6ICM4ODdmN2Y7XG4kbG9naW4tYm94LWNvbG9yIDogI2Y1ZjJmMDtcblxuLy9tYWlsXG4kbWFpbC1jaGVja2JveC1jb2xvcjogIzAwNzNhYTtcbiR1c2VyLW1haWwtY29sb3IgICAgOiAjMjkyYjJjO1xuXG4vL3Byb2ZpbGVcbiRhY3RpdmUtY29sb3IgICAgIDogI2Y0ZjZmOTtcbiRpY29uLWNvbG9yICAgICAgIDogIzk1OWNiNjtcbiRsYWJlbC10aXRsZS1jb2xvcjogIzUwNTY2YTtcblxuLy9lbWFpbCB0ZW1wbGF0ZXNcbiRlbWFpbC1ibHVlLWNvbG9yOiAjMGY0MTVkO1xuJGVtYWlsLWdyYXktY29sb3I6ICM1ZjYwNjA7XG4kZW1haWwtc3lhbi1jb2xvcjogI2EyZDljMjtcbiRlbWFpbC1vcmFnbmUtY29sb3I6ICNmZmFjNTI7XG5cbi8vZm9udHNcbiRmb250MjggICAgICAgICAgIDogMjhweDtcbiRmb250MjQgICAgICAgICAgIDogMjRweDtcbiRmb250MTggICAgICAgICAgIDogMThweDtcbiRmb250MTYgICAgICAgICAgIDogMTZweDtcbiRmb250MTQgICAgICAgICAgIDogMTRweDtcbiRmb250MTIgICAgICAgICAgIDogMTJweDtcbiRmb250MTAgICAgICAgICAgIDogMTBweDtcbiRmb250LXdlaWdodC02MDAgIDogNjAwO1xuJGZvbnQtd2VpZ2h0LTUwMCAgOiA1MDA7XG4kcGxhY2Vob2xkZXItZm9udCA6IDEycHg7XG4kbGFiZWwtZm9udCAgICAgICA6IDE0cHg7XG4kY2FyZC1oZWFkZXItZm9udCA6IDE2cHg7XG5cbiRkYXRhLXRhYmxlLWhlYWRlci0xMzY2IDogMTRweDtcbiRkYXRhLXRhYmxlLWhlYWRlci0xOTIwIDogMTZweDtcbiRkYXRhLXRhYmxlLWJvZHktMTM2NiA6IDEycHg7XG4kZGF0YS10YWJsZS1ib2R5LTE5MjA6IDE2cHg7XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-breadcrumb',
          templateUrl: './breadcrumb.component.html',
          styleUrls: ['./breadcrumb.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/footer/footer.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/layout/footer/footer.component.ts ***!
    \***************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppLayoutFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 0,
      vars: 0,
      template: function FooterComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/header/header.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/layout/header/header.component.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppLayoutHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-bootstrap/dropdown */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_pages_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/pages/auth/auth.service */
    "./src/app/pages/auth/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HeaderComponent_ul_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Notifications ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "notifications_active");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "New message ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "notifications_active");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "New Branch ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_ng_container_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function HeaderComponent_ng_container_17_ul_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Profile ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "account_circle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Profile ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Mail ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_container_17_ul_4_Template_a_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r4.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "i", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "exit_to_app");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Logout ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_ng_container_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_ng_container_17_ul_4_Template, 18, 0, "ul", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(router, authService) {
        _classCallCheck(this, HeaderComponent);

        this.router = router;
        this.authService = authService;
        this.isAuthenticated = false;
        this.menu = false;
        this.openSide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(HeaderComponent, [{
        key: "openMenu",
        value: function openMenu() {
          this.menu = !this.menu;
          this.openSide.emit();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.userSub = this.authService.user.subscribe(function (user) {
            _this.isAuthenticated = !!user;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.userSub.unsubscribe();
        }
      }, {
        key: "logout",
        value: function logout() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_pages_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      outputs: {
        openSide: "openSide"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__["BsDropdownConfig"],
        useValue: {
          isAnimated: true,
          autoClose: true
        }
      }])],
      decls: 18,
      vars: 3,
      consts: [[1, "grid-middle-noGutter"], [1, "menu", 3, "ngClass", "click"], [1, "material-icons"], [1, "logo"], ["routerLink", "", 2, "height", "inherit"], ["src", "assets/images/logo.png", "alt", ""], [1, "col-middle", "grid-right-noGutter", 2, "height", "inherit"], ["dropdown", "", 1, "notify", "btn-group"], ["dropdownToggle", "", "id", "button-animated", "type", "button", "aria-controls", "dropdown-animated", 1, "dropdown-toggle"], [1, "notification"], [1, "heartbit"], ["id", "dropdown-animated", "class", "dropdown-menu dropdown-menu-right", "role", "menu", "aria-labelledby", "button-animated", 4, "dropdownMenu"], [4, "ngIf"], ["id", "dropdown-animated", "role", "menu", "aria-labelledby", "button-animated", 1, "dropdown-menu", "dropdown-menu-right"], [2, "text-align", "center", "background-color", "#f9f9f9", "padding", "10px 0", "border-bottom", "1px solid #f2f2f2"], ["role", "menuitem"], ["routerLink", "/mail", 1, "dropdown-item", "grid-middle-noGutter"], ["routerLink", "/auth/login", 1, "item"], ["dropdown", "", 1, "avatar", "btn-group"], ["alt", "", 3, "src"], [1, "head"], ["routerLink", "/profile", 1, "dropdown-item", "grid-middle-noGutter"], [1, "dropdown-item", "grid-middle-noGutter", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_1_listener() {
            return ctx.openMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HeaderComponent_ul_15_Template, 13, 0, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HeaderComponent_ng_container_16_Template, 4, 0, "ng-container", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HeaderComponent_ng_container_17_Template, 5, 0, "ng-container", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.menu ? "open" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__["BsDropdownDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__["BsDropdownToggleDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__["BsDropdownMenuDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["header[_ngcontent-%COMP%] {\n  height: inherit;\n  border-bottom: 1px solid #f1f1f1;\n  position: fixed;\n  width: 100%;\n  z-index: 1020;\n  background-color: white;\n}\nheader[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  margin: 0 20px 0 15px;\n  font-size: 18px;\n}\n.logo[_ngcontent-%COMP%] {\n  height: 80%;\n}\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: inherit;\n}\n.menu[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\ni[_ngcontent-%COMP%] {\n  color: #9ba2aa;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin: 0 10px;\n}\ni[_ngcontent-%COMP%]:hover {\n  color: #73818f;\n}\n.notify[_ngcontent-%COMP%] {\n  position: relative;\n}\n.notify[_ngcontent-%COMP%]   .heartbit[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -9px;\n  right: 3px;\n  height: 25px;\n  width: 25px;\n  z-index: 10;\n  border: 5px solid #0c425d;\n  border-radius: 70px;\n  -webkit-animation: heartbit 2.5s ease-out infinite;\n}\n.notify[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -5px;\n  right: 5px;\n  color: #0c425d;\n  background: #e2e2e2;\n  padding: 0 6px;\n  border-radius: 50%;\n}\n@-webkit-keyframes heartbit {\n  0% {\n    opacity: 1;\n    transform: scale(0);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(1);\n  }\n}\n@keyframes heartbit {\n  0% {\n    opacity: 1;\n    transform: scale(0);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(1);\n  }\n}\n.avatar[_ngcontent-%COMP%] {\n  background-image: url('avatar.jpg');\n  height: 40px;\n  width: 40px;\n  margin: 0 10px;\n  background-size: cover;\n  border-radius: 50%;\n  background-repeat: no-repeat;\n}\n.avatar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-radius: 50%;\n  height: 100%;\n  width: 100%;\n  padding: 0;\n}\n.avatar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.avatar[_ngcontent-%COMP%]   li.head[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: #f9f9f9;\n  padding: 10px 0;\n  border-bottom: 1px solid #f1f1f1;\n}\nbutton[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n}\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2hlYWRlci9FOlxcVW50aXRsZWQgRm9sZGVyXFxwcml2YXRlXFxwcm9qZWN0c1xcZnVsbF9zdGFja1xcbW90b2JhclxcbW90b2Jhcl9hZG1pbi9zcmNcXGFwcFxcbGF5b3V0XFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2hlYWRlci9FOlxcVW50aXRsZWQgRm9sZGVyXFxwcml2YXRlXFxwcm9qZWN0c1xcZnVsbF9zdGFja1xcbW90b2JhclxcbW90b2Jhcl9hZG1pbi9zcmNcXHNjc3NcXGFic3RyYWN0c1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQ2V3QjtBQ2YxQjtBRkNFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0FFQ0o7QUZHQTtFQUNFLFdBQUE7QUVBRjtBRkVFO0VBQ0UsZUFBQTtBRUFKO0FGSUE7RUFDRSxlQUFBO0FFREY7QUZJQTtFQUNFLGNDTW1CO0VETG5CLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUVERjtBRkdFO0VBQ0UsY0NDaUI7QUNGckI7QUZLQTtFQUNFLGtCQUFBO0FFRkY7QUZJRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0RBQUE7QUVGSjtBRktFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGNDdERLO0VEdURMLG1CQzdDc0I7RUQ4Q3RCLGNBQUE7RUFDQSxrQkFBQTtBRUhKO0FGTUU7RUFDRTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtFRUpKO0VGT0U7SUFDRSxVQUFBO0lBQ0EsbUJBQUE7RUVMSjtBQUNGO0FGSkU7RUFDRTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtFRUpKO0VGT0U7SUFDRSxVQUFBO0lBQ0EsbUJBQUE7RUVMSjtBQUNGO0FGU0E7RUFDRSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBRU5GO0FGUUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FFTko7QUZRSTtFQUNFLFlBQUE7QUVOTjtBRlNFO0VBQ0Usa0JBQUE7RUFDQSx5QkNqRWlCO0VEa0VqQixlQUFBO0VBQ0EsZ0NBQUE7QUVQSjtBRldBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBRVJGO0FGVUU7RUFDRSxhQUFBO0FFUkoiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL2Fic3RyYWN0cy92YXJpYWJsZXNcIjtcbmhlYWRlciB7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDEwMjA7XG4gIGJhY2tncm91bmQtY29sb3I6ICRoZWFkZXItYmFja2dyb3VuZC1jb2xvcjtcbiAgLml0ZW0ge1xuICAgIG1hcmdpbjogMCAyMHB4IDAgMTVweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cblxuLmxvZ28ge1xuICBoZWlnaHQ6IDgwJTtcblxuICBpbWcge1xuICAgIGhlaWdodDogaW5oZXJpdDtcbiAgfVxufVxuXG4ubWVudSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaSB7XG4gIGNvbG9yOiAkYmlsbC1jb2xvcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgbWFyZ2luOiAwIDEwcHg7XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICRiaWxsLWhvdmVyLWNvbG9yO1xuICB9XG59XG5cbi5ub3RpZnkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLmhlYXJ0Yml0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtOXB4O1xuICAgIHJpZ2h0OiAzcHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkICMwYzQyNWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNzBweDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogaGVhcnRiaXQgMi41cyBlYXNlLW91dCBpbmZpbml0ZTtcbiAgfVxuXG4gIC5ub3RpZmljYXRpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC01cHg7XG4gICAgcmlnaHQ6IDVweDtcbiAgICBjb2xvcjogJGNvbG9yMTtcbiAgICBiYWNrZ3JvdW5kOiAkZ3JheTI7XG4gICAgcGFkZGluZzogMCA2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG5cbiAgQGtleWZyYW1lcyBoZWFydGJpdCB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG4gIH1cbn1cblxuLmF2YXRhciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2F2YXRhci5qcGcpO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBtYXJnaW46IDAgMTBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gIGJ1dHRvbiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDA7XG5cbiAgICBpbWcge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgfVxuICBsaS5oZWFkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByb2ZpbGUtbWVudS1jb2xvcjtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXI7XG4gIH1cbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxufVxuIiwiLy9jb2xvcnNcbiR3aGl0ZSA6IHdoaXRlO1xuJGNvbG9yMTogIzBjNDI1ZDtcbiRjb2xvcjI6ICNhOGQyYmU7XG4kY29sb3IzOiAjNDg5OWMyO1xuJGNvbG9yNDogIzFmNzdhMztcblxuJGNvbG9yNSA6ICNmOWFlNGU7XG4kY29sb3I1NTogI2Q2ODUyMjtcblxuJGJvcmRlciAgICAgICAgICAgICAgICAgOiAjZjFmMWYxO1xuJGRhdGEtdGFibGUtYm9yZGVyICAgICAgOiAjZTllOWU5O1xuJGdyYXkyICAgICAgICAgICAgICAgICAgOiAjZTJlMmUyO1xuJGdyYXkzICAgICAgICAgICAgICAgICAgOiAjNzU3NTc1O1xuJHRyYXNoLWNvbG9yICAgICAgICAgICAgOiAjQzkzMDJDO1xuJGZvbnQtY29sb3IgICAgICAgICAgICAgOiAjNTU1O1xuJGFjdGl2ZS1icmVhZGNydW1iLWNvbG9yOiAjMzQzNDM0O1xuJGNhcmQtaGVhZGVyLWJnICAgICAgICAgOiAjZjlmOWY5OyAvLyNlZmVmZWY7IC8vI2Y5ZjlmOTtcbiRwbGFjZWhvbGRlci1jb2xvciAgICAgIDogI2IzYjNiMztcblxuLy8gYmFja2dyb3VuZCBjb2xvclxuJG1haW4tYmFja2dyb3VuZC1jb2xvciAgOiAjZWZlZGYyO1xuJGhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiRkYXRhLXRhYmxlLWJveCAgICAgICAgIDogI2ZmZmRmZTsgLy8jZjdmN2Y3O1xuJGNhcmQtYm9keSAgICAgICAgICAgICAgOiAjZmZmZGZlO1xuXG4vLyBEYXNoYm9hcmRcbiRtYXJnaW5CZXR3ZWVuQ2FyZHM6IDIycHg7XG4kYXhpc0ZvbnRTaXplICAgICAgOiAxMnB4O1xuJHNtYWxsQXhpc0ZvbnRTaXplIDogMTBweDtcblxuLy9oZWFkZXJcbiRwcm9maWxlLW1lbnUtY29sb3I6ICNmOWY5Zjk7XG4kYmlsbC1jb2xvciAgICAgICAgOiAjOWJhMmFhO1xuJGJpbGwtaG92ZXItY29sb3IgIDogIzczODE4ZjtcblxuLy9MYXlvdXQgVmFyaWFibGVzXG5cbiRoZWFkZXItaGVpZ2h0IDogNTVweDtcbiRzaWRlTWVudS13aWR0aDogMjAwcHg7XG5cblxuLy9sb2dpblxuJGxveWFsaXR5LWNvbG9yICA6ICM4ODdmN2Y7XG4kbG9naW4tYm94LWNvbG9yIDogI2Y1ZjJmMDtcblxuLy9tYWlsXG4kbWFpbC1jaGVja2JveC1jb2xvcjogIzAwNzNhYTtcbiR1c2VyLW1haWwtY29sb3IgICAgOiAjMjkyYjJjO1xuXG4vL3Byb2ZpbGVcbiRhY3RpdmUtY29sb3IgICAgIDogI2Y0ZjZmOTtcbiRpY29uLWNvbG9yICAgICAgIDogIzk1OWNiNjtcbiRsYWJlbC10aXRsZS1jb2xvcjogIzUwNTY2YTtcblxuLy9lbWFpbCB0ZW1wbGF0ZXNcbiRlbWFpbC1ibHVlLWNvbG9yOiAjMGY0MTVkO1xuJGVtYWlsLWdyYXktY29sb3I6ICM1ZjYwNjA7XG4kZW1haWwtc3lhbi1jb2xvcjogI2EyZDljMjtcbiRlbWFpbC1vcmFnbmUtY29sb3I6ICNmZmFjNTI7XG5cbi8vZm9udHNcbiRmb250MjggICAgICAgICAgIDogMjhweDtcbiRmb250MjQgICAgICAgICAgIDogMjRweDtcbiRmb250MTggICAgICAgICAgIDogMThweDtcbiRmb250MTYgICAgICAgICAgIDogMTZweDtcbiRmb250MTQgICAgICAgICAgIDogMTRweDtcbiRmb250MTIgICAgICAgICAgIDogMTJweDtcbiRmb250MTAgICAgICAgICAgIDogMTBweDtcbiRmb250LXdlaWdodC02MDAgIDogNjAwO1xuJGZvbnQtd2VpZ2h0LTUwMCAgOiA1MDA7XG4kcGxhY2Vob2xkZXItZm9udCA6IDEycHg7XG4kbGFiZWwtZm9udCAgICAgICA6IDE0cHg7XG4kY2FyZC1oZWFkZXItZm9udCA6IDE2cHg7XG5cbiRkYXRhLXRhYmxlLWhlYWRlci0xMzY2IDogMTRweDtcbiRkYXRhLXRhYmxlLWhlYWRlci0xOTIwIDogMTZweDtcbiRkYXRhLXRhYmxlLWJvZHktMTM2NiA6IDEycHg7XG4kZGF0YS10YWJsZS1ib2R5LTE5MjA6IDE2cHg7XG4iLCJoZWFkZXIge1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDIwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbmhlYWRlciAuaXRlbSB7XG4gIG1hcmdpbjogMCAyMHB4IDAgMTVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ubG9nbyB7XG4gIGhlaWdodDogODAlO1xufVxuLmxvZ28gaW1nIHtcbiAgaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4ubWVudSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaSB7XG4gIGNvbG9yOiAjOWJhMmFhO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBtYXJnaW46IDAgMTBweDtcbn1cbmk6aG92ZXIge1xuICBjb2xvcjogIzczODE4Zjtcbn1cblxuLm5vdGlmeSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ub3RpZnkgLmhlYXJ0Yml0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC05cHg7XG4gIHJpZ2h0OiAzcHg7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIHotaW5kZXg6IDEwO1xuICBib3JkZXI6IDVweCBzb2xpZCAjMGM0MjVkO1xuICBib3JkZXItcmFkaXVzOiA3MHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogaGVhcnRiaXQgMi41cyBlYXNlLW91dCBpbmZpbml0ZTtcbn1cbi5ub3RpZnkgLm5vdGlmaWNhdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNXB4O1xuICByaWdodDogNXB4O1xuICBjb2xvcjogIzBjNDI1ZDtcbiAgYmFja2dyb3VuZDogI2UyZTJlMjtcbiAgcGFkZGluZzogMCA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbkBrZXlmcmFtZXMgaGVhcnRiaXQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuXG4uYXZhdGFyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYXZhdGFyLmpwZyk7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4uYXZhdGFyIGJ1dHRvbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbn1cbi5hdmF0YXIgYnV0dG9uIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5hdmF0YXIgbGkuaGVhZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgcGFkZGluZzogMTBweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss'],
          providers: [{
            provide: ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__["BsDropdownConfig"],
            useValue: {
              isAnimated: true,
              autoClose: true
            }
          }]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_pages_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      }, {
        openSide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/layout/layout.component.ts":
  /*!********************************************!*\
    !*** ./src/app/layout/layout.component.ts ***!
    \********************************************/

  /*! exports provided: LayoutComponent */

  /***/
  function srcAppLayoutLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
      return LayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/layout/header/header.component.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./side-menu/side-menu.component */
    "./src/app/layout/side-menu/side-menu.component.ts");
    /* harmony import */


    var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./breadcrumb/breadcrumb.component */
    "./src/app/layout/breadcrumb/breadcrumb.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/layout/footer/footer.component.ts");

    var LayoutComponent = /*#__PURE__*/function () {
      function LayoutComponent() {
        _classCallCheck(this, LayoutComponent);
      }

      _createClass(LayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LayoutComponent;
    }();

    LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
      return new (t || LayoutComponent)();
    };

    LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LayoutComponent,
      selectors: [["app-layout"]],
      decls: 9,
      vars: 0,
      consts: [[3, "openSide"], ["autosize", "", "backdrop", "true", 1, "example-container"], ["mode", "over", 1, "example-sidenav"], ["drawer", ""], [3, "closeSide"]],
      template: function LayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openSide", function LayoutComponent_Template_app_header_openSide_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            return _r0.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-drawer-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-drawer", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-side-menu", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeSide", function LayoutComponent_Template_app_side_menu_closeSide_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            return _r0.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-breadcrumb");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawer"], _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_3__["SideMenuComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]],
      styles: ["app-header[_ngcontent-%COMP%] {\n  height: 55px;\n  flex: 0 0 55px;\n  display: flex;\n}\n\nmain[_ngcontent-%COMP%] {\n  height: calc(100% - 55px);\n}\n\nmat-drawer-container[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #efedf2;\n}\n\nmat-drawer-container[_ngcontent-%COMP%]   mat-drawer[_ngcontent-%COMP%] {\n  width: 200px;\n  background-color: #0c425d;\n  color: white;\n  position: fixed;\n  top: 55px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L0U6XFxVbnRpdGxlZCBGb2xkZXJcXHByaXZhdGVcXHByb2plY3RzXFxmdWxsX3N0YWNrXFxtb3RvYmFyXFxtb3RvYmFyX2FkbWluL3NyY1xcYXBwXFxsYXlvdXRcXGxheW91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L0U6XFxVbnRpdGxlZCBGb2xkZXJcXHByaXZhdGVcXHByb2plY3RzXFxmdWxsX3N0YWNrXFxtb3RvYmFyXFxtb3RvYmFyX2FkbWluL3NyY1xcc2Nzc1xcYWJzdHJhY3RzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQ21DZTtFRGxDZixjQUFBO0VBQ0EsYUFBQTtBRURGOztBRklBO0VBQ0UseUJBQUE7QUVERjs7QUZJQTtFQUNFLFlBQUE7RUFDQSx5QkNPd0I7QUNSMUI7O0FGR0U7RUFDRSxZQ3NCYTtFRHJCYix5QkNoQks7RURpQkwsWUFBQTtFQUNBLGVBQUE7RUFDQSxTQ2lCYTtBQ2xCakIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3Njc3MvYWJzdHJhY3RzL3ZhcmlhYmxlc1wiO1xuXG5hcHAtaGVhZGVyIHtcbiAgaGVpZ2h0IDogJGhlYWRlci1oZWlnaHQ7XG4gIGZsZXggICA6IDAgMCAkaGVhZGVyLWhlaWdodDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxubWFpbiB7XG4gIGhlaWdodCAgICAgICAgICAgOiBjYWxjKDEwMCUgLSAjeyRoZWFkZXItaGVpZ2h0fSk7XG59XG5cbm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgaGVpZ2h0ICAgICAgICAgIDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tYmFja2dyb3VuZC1jb2xvcjtcblxuICBtYXQtZHJhd2VyIHtcbiAgICB3aWR0aCAgICAgICAgICAgOiAkc2lkZU1lbnUtd2lkdGg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMTtcbiAgICBjb2xvciAgICAgICAgICAgOiB3aGl0ZTtcbiAgICBwb3NpdGlvbiAgICAgICAgOiBmaXhlZDtcbiAgICB0b3AgICAgICAgICAgICAgOiAkaGVhZGVyLWhlaWdodDtcbiAgfVxufVxuIiwiLy9jb2xvcnNcbiR3aGl0ZSA6IHdoaXRlO1xuJGNvbG9yMTogIzBjNDI1ZDtcbiRjb2xvcjI6ICNhOGQyYmU7XG4kY29sb3IzOiAjNDg5OWMyO1xuJGNvbG9yNDogIzFmNzdhMztcblxuJGNvbG9yNSA6ICNmOWFlNGU7XG4kY29sb3I1NTogI2Q2ODUyMjtcblxuJGJvcmRlciAgICAgICAgICAgICAgICAgOiAjZjFmMWYxO1xuJGRhdGEtdGFibGUtYm9yZGVyICAgICAgOiAjZTllOWU5O1xuJGdyYXkyICAgICAgICAgICAgICAgICAgOiAjZTJlMmUyO1xuJGdyYXkzICAgICAgICAgICAgICAgICAgOiAjNzU3NTc1O1xuJHRyYXNoLWNvbG9yICAgICAgICAgICAgOiAjQzkzMDJDO1xuJGZvbnQtY29sb3IgICAgICAgICAgICAgOiAjNTU1O1xuJGFjdGl2ZS1icmVhZGNydW1iLWNvbG9yOiAjMzQzNDM0O1xuJGNhcmQtaGVhZGVyLWJnICAgICAgICAgOiAjZjlmOWY5OyAvLyNlZmVmZWY7IC8vI2Y5ZjlmOTtcbiRwbGFjZWhvbGRlci1jb2xvciAgICAgIDogI2IzYjNiMztcblxuLy8gYmFja2dyb3VuZCBjb2xvclxuJG1haW4tYmFja2dyb3VuZC1jb2xvciAgOiAjZWZlZGYyO1xuJGhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiRkYXRhLXRhYmxlLWJveCAgICAgICAgIDogI2ZmZmRmZTsgLy8jZjdmN2Y3O1xuJGNhcmQtYm9keSAgICAgICAgICAgICAgOiAjZmZmZGZlO1xuXG4vLyBEYXNoYm9hcmRcbiRtYXJnaW5CZXR3ZWVuQ2FyZHM6IDIycHg7XG4kYXhpc0ZvbnRTaXplICAgICAgOiAxMnB4O1xuJHNtYWxsQXhpc0ZvbnRTaXplIDogMTBweDtcblxuLy9oZWFkZXJcbiRwcm9maWxlLW1lbnUtY29sb3I6ICNmOWY5Zjk7XG4kYmlsbC1jb2xvciAgICAgICAgOiAjOWJhMmFhO1xuJGJpbGwtaG92ZXItY29sb3IgIDogIzczODE4ZjtcblxuLy9MYXlvdXQgVmFyaWFibGVzXG5cbiRoZWFkZXItaGVpZ2h0IDogNTVweDtcbiRzaWRlTWVudS13aWR0aDogMjAwcHg7XG5cblxuLy9sb2dpblxuJGxveWFsaXR5LWNvbG9yICA6ICM4ODdmN2Y7XG4kbG9naW4tYm94LWNvbG9yIDogI2Y1ZjJmMDtcblxuLy9tYWlsXG4kbWFpbC1jaGVja2JveC1jb2xvcjogIzAwNzNhYTtcbiR1c2VyLW1haWwtY29sb3IgICAgOiAjMjkyYjJjO1xuXG4vL3Byb2ZpbGVcbiRhY3RpdmUtY29sb3IgICAgIDogI2Y0ZjZmOTtcbiRpY29uLWNvbG9yICAgICAgIDogIzk1OWNiNjtcbiRsYWJlbC10aXRsZS1jb2xvcjogIzUwNTY2YTtcblxuLy9lbWFpbCB0ZW1wbGF0ZXNcbiRlbWFpbC1ibHVlLWNvbG9yOiAjMGY0MTVkO1xuJGVtYWlsLWdyYXktY29sb3I6ICM1ZjYwNjA7XG4kZW1haWwtc3lhbi1jb2xvcjogI2EyZDljMjtcbiRlbWFpbC1vcmFnbmUtY29sb3I6ICNmZmFjNTI7XG5cbi8vZm9udHNcbiRmb250MjggICAgICAgICAgIDogMjhweDtcbiRmb250MjQgICAgICAgICAgIDogMjRweDtcbiRmb250MTggICAgICAgICAgIDogMThweDtcbiRmb250MTYgICAgICAgICAgIDogMTZweDtcbiRmb250MTQgICAgICAgICAgIDogMTRweDtcbiRmb250MTIgICAgICAgICAgIDogMTJweDtcbiRmb250MTAgICAgICAgICAgIDogMTBweDtcbiRmb250LXdlaWdodC02MDAgIDogNjAwO1xuJGZvbnQtd2VpZ2h0LTUwMCAgOiA1MDA7XG4kcGxhY2Vob2xkZXItZm9udCA6IDEycHg7XG4kbGFiZWwtZm9udCAgICAgICA6IDE0cHg7XG4kY2FyZC1oZWFkZXItZm9udCA6IDE2cHg7XG5cbiRkYXRhLXRhYmxlLWhlYWRlci0xMzY2IDogMTRweDtcbiRkYXRhLXRhYmxlLWhlYWRlci0xOTIwIDogMTZweDtcbiRkYXRhLXRhYmxlLWJvZHktMTM2NiA6IDEycHg7XG4kZGF0YS10YWJsZS1ib2R5LTE5MjA6IDE2cHg7XG4iLCJhcHAtaGVhZGVyIHtcbiAgaGVpZ2h0OiA1NXB4O1xuICBmbGV4OiAwIDAgNTVweDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxubWFpbiB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNTVweCk7XG59XG5cbm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZGYyO1xufVxubWF0LWRyYXdlci1jb250YWluZXIgbWF0LWRyYXdlciB7XG4gIHdpZHRoOiAyMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjNDI1ZDtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTVweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-layout',
          templateUrl: './layout.component.html',
          styleUrls: ['./layout.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/side-menu/side-menu.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/layout/side-menu/side-menu.component.ts ***!
    \*********************************************************/

  /*! exports provided: SideMenuComponent */

  /***/
  function srcAppLayoutSideMenuSideMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function () {
      return SideMenuComponent;
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


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function SideMenuComponent_li_4_ng_container_1_li_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideMenuComponent_li_4_ng_container_1_li_6_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r6.closeMenu();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", item_r5.route);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5.name, " ");
      }
    }

    function SideMenuComponent_li_4_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-accordion");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-expansion-panel-header", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SideMenuComponent_li_4_ng_container_1_li_6_Template, 5, 3, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.children);
      }
    }

    function SideMenuComponent_li_4_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideMenuComponent_li_4_ng_container_2_Template_li_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r9.closeMenu();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", item_r1.route);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.name, " ");
      }
    }

    function SideMenuComponent_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideMenuComponent_li_4_ng_container_1_Template, 7, 3, "ng-container", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideMenuComponent_li_4_ng_container_2_Template, 7, 3, "ng-container", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.isParent == "y");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.isParent == "n");
      }
    }

    var SideMenuComponent = /*#__PURE__*/function () {
      function SideMenuComponent() {
        _classCallCheck(this, SideMenuComponent);

        this.closeSide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.items = [{
          isParent: 'n',
          name: 'Dashboard',
          icon: 'trending_up',
          route: '/'
        }, {
          isParent: 'n',
          name: 'Stores',
          icon: 'trending_up',
          route: '/stores'
        }, {
          isParent: 'n',
          name: 'Categories',
          icon: 'trending_up',
          route: '/categories'
        }, {
          isParent: 'y',
          name: 'Products',
          children: [{
            name: 'Product attributes',
            icon: 'people_outline',
            route: '/product-attributes'
          }, {
            name: 'Products',
            icon: 'supervisor_account',
            route: '/products'
          }]
        }, {
          isParent: 'n',
          name: 'Users',
          icon: 'person',
          route: '/users'
        }, {
          isParent: 'n',
          name: 'Feeds',
          icon: 'fastfood',
          route: '/feeds'
        }, {
          isParent: 'n',
          name: 'Orders',
          icon: 'fastfood',
          route: '/orders'
        }];
      }

      _createClass(SideMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeMenu",
        value: function closeMenu() {
          this.closeSide.emit();
        }
      }]);

      return SideMenuComponent;
    }();

    SideMenuComponent.ɵfac = function SideMenuComponent_Factory(t) {
      return new (t || SideMenuComponent)();
    };

    SideMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SideMenuComponent,
      selectors: [["app-side-menu"]],
      outputs: {
        closeSide: "closeSide"
      },
      decls: 5,
      vars: 1,
      consts: [[2, "padding", "15px 12px", "color", "#a8d2be"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "expanded"], [2, "color", "#a8d2be"], ["class", "child", 3, "click", 4, "ngFor", "ngForOf"], [1, "child", 3, "click"], [1, "grid-middle-noGutter", 3, "routerLink"], [1, "material-icons"]],
      template: function SideMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SideMenuComponent_li_4_Template, 3, 2, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: ["[_nghost-%COMP%]     mat-expansion-panel {\n  background: transparent;\n  color: #e2e2e2;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2) !important;\n}\n[_nghost-%COMP%]     mat-expansion-panel .mat-expansion-panel-content {\n  background: #0d394f;\n}\n[_nghost-%COMP%]     mat-expansion-panel .mat-expansion-panel-content .mat-expansion-panel-body {\n  padding: 0;\n}\n[_nghost-%COMP%]     mat-expansion-panel .mat-expansion-indicator::after {\n  color: #a8d2be;\n}\nul[_ngcontent-%COMP%] {\n  list-style: none;\n}\nul[_ngcontent-%COMP%]   li.child[_ngcontent-%COMP%]:hover {\n  background-color: #4899c2;\n}\nul[_ngcontent-%COMP%]   li.child[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 15px 5px;\n  width: 100%;\n  color: white;\n}\nul[_ngcontent-%COMP%]   li.child[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NpZGUtbWVudS9FOlxcVW50aXRsZWQgRm9sZGVyXFxwcml2YXRlXFxwcm9qZWN0c1xcZnVsbF9zdGFja1xcbW90b2JhclxcbW90b2Jhcl9hZG1pbi9zcmNcXGFwcFxcbGF5b3V0XFxzaWRlLW1lbnVcXHNpZGUtbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3NpZGUtbWVudS9FOlxcVW50aXRsZWQgRm9sZGVyXFxwcml2YXRlXFxwcm9qZWN0c1xcZnVsbF9zdGFja1xcbW90b2JhclxcbW90b2Jhcl9hZG1pbi9zcmNcXHNjc3NcXGFic3RyYWN0c1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9sYXlvdXQvc2lkZS1tZW51L3NpZGUtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHVCQUFBO0VBQ0EsY0NRd0I7RURQeEIsaURBQUE7QUVERjtBRkdFO0VBQ0UsbUJBQUE7QUVESjtBRkVJO0VBQ0UsVUFBQTtBRUFOO0FGSUU7RUFDRSxjQ1pLO0FDVVQ7QUZNQTtFQUNFLGdCQUFBO0FFSEY7QUZNSTtFQUNFLHlCQ3BCRztBQ2dCVDtBRk9JO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUM3Qkc7QUN3QlQ7QUZPTTtFQUNFLGFBQUE7QUVMUiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaWRlLW1lbnUvc2lkZS1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvYWJzdHJhY3RzL3ZhcmlhYmxlc1wiO1xuXG46aG9zdCA6Om5nLWRlZXAgbWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogJGdyYXkyO1xuICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSAhaW1wb3J0YW50O1xuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6ICMwZDM5NGY7XG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSB7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLWluZGljYXRvcjo6YWZ0ZXIge1xuICAgIGNvbG9yOiAkY29sb3IyO1xuICB9XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcblxuICBsaS5jaGlsZCB7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IzO1xuICAgIH1cblxuICAgIGEge1xuICAgICAgcGFkZGluZzogMTVweCA1cHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGNvbG9yOiAkd2hpdGU7XG5cbiAgICAgIGkge1xuICAgICAgICBtYXJnaW46IDAgNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy9jb2xvcnNcbiR3aGl0ZSA6IHdoaXRlO1xuJGNvbG9yMTogIzBjNDI1ZDtcbiRjb2xvcjI6ICNhOGQyYmU7XG4kY29sb3IzOiAjNDg5OWMyO1xuJGNvbG9yNDogIzFmNzdhMztcblxuJGNvbG9yNSA6ICNmOWFlNGU7XG4kY29sb3I1NTogI2Q2ODUyMjtcblxuJGJvcmRlciAgICAgICAgICAgICAgICAgOiAjZjFmMWYxO1xuJGRhdGEtdGFibGUtYm9yZGVyICAgICAgOiAjZTllOWU5O1xuJGdyYXkyICAgICAgICAgICAgICAgICAgOiAjZTJlMmUyO1xuJGdyYXkzICAgICAgICAgICAgICAgICAgOiAjNzU3NTc1O1xuJHRyYXNoLWNvbG9yICAgICAgICAgICAgOiAjQzkzMDJDO1xuJGZvbnQtY29sb3IgICAgICAgICAgICAgOiAjNTU1O1xuJGFjdGl2ZS1icmVhZGNydW1iLWNvbG9yOiAjMzQzNDM0O1xuJGNhcmQtaGVhZGVyLWJnICAgICAgICAgOiAjZjlmOWY5OyAvLyNlZmVmZWY7IC8vI2Y5ZjlmOTtcbiRwbGFjZWhvbGRlci1jb2xvciAgICAgIDogI2IzYjNiMztcblxuLy8gYmFja2dyb3VuZCBjb2xvclxuJG1haW4tYmFja2dyb3VuZC1jb2xvciAgOiAjZWZlZGYyO1xuJGhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiRkYXRhLXRhYmxlLWJveCAgICAgICAgIDogI2ZmZmRmZTsgLy8jZjdmN2Y3O1xuJGNhcmQtYm9keSAgICAgICAgICAgICAgOiAjZmZmZGZlO1xuXG4vLyBEYXNoYm9hcmRcbiRtYXJnaW5CZXR3ZWVuQ2FyZHM6IDIycHg7XG4kYXhpc0ZvbnRTaXplICAgICAgOiAxMnB4O1xuJHNtYWxsQXhpc0ZvbnRTaXplIDogMTBweDtcblxuLy9oZWFkZXJcbiRwcm9maWxlLW1lbnUtY29sb3I6ICNmOWY5Zjk7XG4kYmlsbC1jb2xvciAgICAgICAgOiAjOWJhMmFhO1xuJGJpbGwtaG92ZXItY29sb3IgIDogIzczODE4ZjtcblxuLy9MYXlvdXQgVmFyaWFibGVzXG5cbiRoZWFkZXItaGVpZ2h0IDogNTVweDtcbiRzaWRlTWVudS13aWR0aDogMjAwcHg7XG5cblxuLy9sb2dpblxuJGxveWFsaXR5LWNvbG9yICA6ICM4ODdmN2Y7XG4kbG9naW4tYm94LWNvbG9yIDogI2Y1ZjJmMDtcblxuLy9tYWlsXG4kbWFpbC1jaGVja2JveC1jb2xvcjogIzAwNzNhYTtcbiR1c2VyLW1haWwtY29sb3IgICAgOiAjMjkyYjJjO1xuXG4vL3Byb2ZpbGVcbiRhY3RpdmUtY29sb3IgICAgIDogI2Y0ZjZmOTtcbiRpY29uLWNvbG9yICAgICAgIDogIzk1OWNiNjtcbiRsYWJlbC10aXRsZS1jb2xvcjogIzUwNTY2YTtcblxuLy9lbWFpbCB0ZW1wbGF0ZXNcbiRlbWFpbC1ibHVlLWNvbG9yOiAjMGY0MTVkO1xuJGVtYWlsLWdyYXktY29sb3I6ICM1ZjYwNjA7XG4kZW1haWwtc3lhbi1jb2xvcjogI2EyZDljMjtcbiRlbWFpbC1vcmFnbmUtY29sb3I6ICNmZmFjNTI7XG5cbi8vZm9udHNcbiRmb250MjggICAgICAgICAgIDogMjhweDtcbiRmb250MjQgICAgICAgICAgIDogMjRweDtcbiRmb250MTggICAgICAgICAgIDogMThweDtcbiRmb250MTYgICAgICAgICAgIDogMTZweDtcbiRmb250MTQgICAgICAgICAgIDogMTRweDtcbiRmb250MTIgICAgICAgICAgIDogMTJweDtcbiRmb250MTAgICAgICAgICAgIDogMTBweDtcbiRmb250LXdlaWdodC02MDAgIDogNjAwO1xuJGZvbnQtd2VpZ2h0LTUwMCAgOiA1MDA7XG4kcGxhY2Vob2xkZXItZm9udCA6IDEycHg7XG4kbGFiZWwtZm9udCAgICAgICA6IDE0cHg7XG4kY2FyZC1oZWFkZXItZm9udCA6IDE2cHg7XG5cbiRkYXRhLXRhYmxlLWhlYWRlci0xMzY2IDogMTRweDtcbiRkYXRhLXRhYmxlLWhlYWRlci0xOTIwIDogMTZweDtcbiRkYXRhLXRhYmxlLWJvZHktMTM2NiA6IDEycHg7XG4kZGF0YS10YWJsZS1ib2R5LTE5MjA6IDE2cHg7XG4iLCI6aG9zdCA6Om5nLWRlZXAgbWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2UyZTJlMjtcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMikgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCBtYXQtZXhwYW5zaW9uLXBhbmVsIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjMGQzOTRmO1xufVxuOmhvc3QgOjpuZy1kZWVwIG1hdC1leHBhbnNpb24tcGFuZWwgLm1hdC1leHBhbnNpb24tcGFuZWwtY29udGVudCAubWF0LWV4cGFuc2lvbi1wYW5lbC1ib2R5IHtcbiAgcGFkZGluZzogMDtcbn1cbjpob3N0IDo6bmctZGVlcCBtYXQtZXhwYW5zaW9uLXBhbmVsIC5tYXQtZXhwYW5zaW9uLWluZGljYXRvcjo6YWZ0ZXIge1xuICBjb2xvcjogI2E4ZDJiZTtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxudWwgbGkuY2hpbGQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg5OWMyO1xufVxudWwgbGkuY2hpbGQgYSB7XG4gIHBhZGRpbmc6IDE1cHggNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xufVxudWwgbGkuY2hpbGQgYSBpIHtcbiAgbWFyZ2luOiAwIDVweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-side-menu',
          templateUrl: './side-menu.component.html',
          styleUrls: ['./side-menu.component.scss']
        }]
      }], function () {
        return [];
      }, {
        closeSide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/auth/auth-interceptor.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/auth/auth-interceptor.service.ts ***!
    \********************************************************/

  /*! exports provided: AuthInterceptorService */

  /***/
  function srcAppPagesAuthAuthInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function () {
      return AuthInterceptorService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/pages/auth/auth.service.ts");

    var AuthInterceptorService = /*#__PURE__*/function () {
      function AuthInterceptorService(authService) {
        _classCallCheck(this, AuthInterceptorService);

        this.authService = authService;
      }

      _createClass(AuthInterceptorService, [{
        key: "intercept",
        value: function intercept(req, next) {
          return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (user) {
            // console.log(`user token map interceptor ${user.token}`);
            return user;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["exhaustMap"])(function (user) {
            // console.log(`user token exhaustmap interceptor ${user.token}`);
            if (!user) {
              return next.handle(req);
            }

            var modifiedReq = req.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(user.token)
              },
              // withCredentials: true,
              headers: req.headers.set('Authorization', "".concat(user.token))
            });
            return next.handle(modifiedReq);
          }));
        }
      }]);

      return AuthInterceptorService;
    }();

    AuthInterceptorService.ɵfac = function AuthInterceptorService_Factory(t) {
      return new (t || AuthInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    AuthInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthInterceptorService,
      factory: AuthInterceptorService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/auth/auth.guard.ts":
  /*!******************************************!*\
    !*** ./src/app/pages/auth/auth.guard.ts ***!
    \******************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppPagesAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/pages/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this2 = this;

          return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (user) {
            var isAuth = !!user;

            if (isAuth) {
              return true;
            }

            return _this2.router.createUrlTree(['/auth/login']);
          }));
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/auth/auth.service.ts":
  /*!********************************************!*\
    !*** ./src/app/pages/auth/auth.service.ts ***!
    \********************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppPagesAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user.model */
    "./src/app/pages/auth/user.model.ts");
    /* harmony import */


    var _config_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../config/variables */
    "./src/app/config/variables.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http, router) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.router = router;
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.error = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(AuthService, [{
        key: "postForm",
        value: function postForm(endPoint, form) {
          var _this3 = this;

          return this.http.post(_config_variables__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + '/' + endPoint, form).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (resData) {
            var userData = new _user_model__WEBPACK_IMPORTED_MODULE_3__["User"](resData.token);

            _this3.user.next(userData); // localStorage.setItem('userData', JSON.stringify(userData));

          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            console.log(err);

            _this3.error.next(err.error.message);

            return _this3.error;
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          this.user.next(null);
          this.router.navigate(['/auth/login']);
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/auth/user.model.ts":
  /*!******************************************!*\
    !*** ./src/app/pages/auth/user.model.ts ***!
    \******************************************/

  /*! exports provided: User */

  /***/
  function srcAppPagesAuthUserModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });

    var User = /*#__PURE__*/function () {
      function User(_token) {
        _classCallCheck(this, User);

        this._token = _token;
      }

      _createClass(User, [{
        key: "token",
        get: function get() {
          return this._token;
        }
      }]);

      return User;
    }();
    /***/

  },

  /***/
  "./src/app/pages/error404/error404.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/error404/error404.component.ts ***!
    \******************************************************/

  /*! exports provided: Error404Component */

  /***/
  function srcAppPagesError404Error404ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Error404Component", function () {
      return Error404Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Error404Component = /*#__PURE__*/function () {
      function Error404Component() {
        _classCallCheck(this, Error404Component);
      }

      _createClass(Error404Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Error404Component;
    }();

    Error404Component.ɵfac = function Error404Component_Factory(t) {
      return new (t || Error404Component)();
    };

    Error404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Error404Component,
      selectors: [["app-error404"]],
      decls: 11,
      vars: 0,
      consts: [["id", "notfound"], [1, "notfound"], [1, "notfound-404"], ["routerLink", ""]],
      template: function Error404Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "404");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Oops! Page Not Be Found");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Back to homepage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#notfound[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100vh;\n}\n\n#notfound[_ngcontent-%COMP%]   .notfound[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.notfound[_ngcontent-%COMP%] {\n  max-width: 560px;\n  width: 100%;\n  padding-left: 160px;\n  line-height: 1.1;\n}\n\n.notfound[_ngcontent-%COMP%]   .notfound-404[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: inline-block;\n  width: 140px;\n  height: 140px;\n  background-image: url('emoji.png');\n  background-size: cover;\n}\n\n.notfound[_ngcontent-%COMP%]   .notfound-404[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: scale(2.4);\n  border-radius: 50%;\n  background-color: #f2f5f8;\n  z-index: -1;\n}\n\n.notfound[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Nunito\", sans-serif;\n  font-size: 65px;\n  font-weight: 700;\n  margin-top: 0px;\n  margin-bottom: 10px;\n  color: #151723;\n  text-transform: uppercase;\n}\n\n.notfound[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Nunito\", sans-serif;\n  font-size: 21px;\n  font-weight: 400;\n  margin: 0;\n  text-transform: uppercase;\n  color: #151723;\n}\n\n.notfound[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Nunito\", sans-serif;\n  color: #999fa5;\n  font-weight: 400;\n}\n\n.notfound[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"Nunito\", sans-serif;\n  display: inline-block;\n  font-weight: 700;\n  border-radius: 40px;\n  text-decoration: none;\n  color: #388dbc;\n}\n\n@media only screen and (max-width: 767px) {\n  .notfound[_ngcontent-%COMP%]   .notfound-404[_ngcontent-%COMP%] {\n    width: 110px;\n    height: 110px;\n  }\n\n  .notfound[_ngcontent-%COMP%] {\n    padding-left: 15px;\n    padding-right: 15px;\n    padding-top: 110px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXJyb3I0MDQvRTpcXFVudGl0bGVkIEZvbGRlclxccHJpdmF0ZVxccHJvamVjdHNcXGZ1bGxfc3RhY2tcXG1vdG9iYXJcXG1vdG9iYXJfYWRtaW4vc3JjXFxhcHBcXHBhZ2VzXFxlcnJvcjQwNFxcZXJyb3I0MDQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Vycm9yNDA0L2Vycm9yNDA0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBR0EsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFHQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUNDRjs7RURDQTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFQ0VGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lcnJvcjQwNC9lcnJvcjQwNC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNub3Rmb3VuZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuI25vdGZvdW5kIC5ub3Rmb3VuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLm5vdGZvdW5kIHtcbiAgbWF4LXdpZHRoOiA1NjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMTYwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG59XG5cbi5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE0MHB4O1xuICBoZWlnaHQ6IDE0MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Vtb2ppLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMi40KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMi40KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgyLjQpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmY1Zjg7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ubm90Zm91bmQgaDEge1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA2NXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiAjMTUxNzIzO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ubm90Zm91bmQgaDIge1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW46IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMTUxNzIzO1xufVxuXG4ubm90Zm91bmQgcCB7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzk5OWZhNTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLm5vdGZvdW5kIGEge1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogNzAwO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMzg4ZGJjO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IHtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgfVxuICAubm90Zm91bmQge1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmctdG9wOiAxMTBweDtcbiAgfVxufVxuIiwiI25vdGZvdW5kIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4jbm90Zm91bmQgLm5vdGZvdW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ubm90Zm91bmQge1xuICBtYXgtd2lkdGg6IDU2MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxNjBweDtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbn1cblxuLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTQwcHg7XG4gIGhlaWdodDogMTQwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZW1vamkucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubm90Zm91bmQgLm5vdGZvdW5kLTQwNDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgyLjQpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgyLjQpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDIuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjVmODtcbiAgei1pbmRleDogLTE7XG59XG5cbi5ub3Rmb3VuZCBoMSB7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDY1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6ICMxNTE3MjM7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5ub3Rmb3VuZCBoMiB7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIxcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMxNTE3MjM7XG59XG5cbi5ub3Rmb3VuZCBwIHtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjOTk5ZmE1O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ubm90Zm91bmQgYSB7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMzODhkYmM7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQge1xuICAgIHdpZHRoOiAxMTBweDtcbiAgICBoZWlnaHQ6IDExMHB4O1xuICB9XG5cbiAgLm5vdGZvdW5kIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBwYWRkaW5nLXRvcDogMTEwcHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Error404Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-error404',
          templateUrl: './error404.component.html',
          styleUrls: ['./error404.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\Untitled Folder\private\projects\full_stack\motobar\motobar_admin\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map