function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-auth-auth-module~pages-categories-categories-module~pages-feeds-feeds-module~pages-pro~a61ff8a4"], {
  /***/
  "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js":
  /*!****************************************************************************************!*\
    !*** ./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js ***!
    \****************************************************************************************/

  /*! exports provided: NgSelectComponent, NgSelectConfig, NgSelectModule, SELECTION_MODEL_FACTORY, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs */

  /***/
  function node_modulesNgSelectNgSelect__ivy_ngcc__Fesm2015NgSelectNgSelectJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgSelectComponent", function () {
      return NgSelectComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgSelectConfig", function () {
      return NgSelectConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgSelectModule", function () {
      return NgSelectModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SELECTION_MODEL_FACTORY", function () {
      return SELECTION_MODEL_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return DefaultSelectionModelFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return DefaultSelectionModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return NgDropdownPanelService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵe", function () {
      return NgItemLabelDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵf", function () {
      return NgOptionTemplateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵg", function () {
      return NgOptgroupTemplateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵh", function () {
      return NgLabelTemplateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵi", function () {
      return NgMultiLabelTemplateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵj", function () {
      return NgHeaderTemplateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵk", function () {
      return NgFooterTemplateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵl", function () {
      return NgNotFoundTemplateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵm", function () {
      return NgTypeToSearchTemplateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵn", function () {
      return NgLoadingTextTemplateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵo", function () {
      return NgTagTemplateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵp", function () {
      return NgLoadingSpinnerTemplateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵq", function () {
      return NgDropdownPanelComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵr", function () {
      return NgOptionComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵs", function () {
      return ConsoleService;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var _c0 = ["content"];
    var _c1 = ["scroll"];
    var _c2 = ["padding"];

    var _c3 = function _c3(a0) {
      return {
        searchTerm: a0
      };
    };

    function NgDropdownPanelComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.headerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r0.filterValue));
      }
    }

    function NgDropdownPanelComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.footerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r4.filterValue));
      }
    }

    var _c4 = ["*"];
    var _c5 = ["searchInput"];

    function NgSelectComponent_ng_container_4_div_1_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgSelectComponent_ng_container_4_div_1_ng_template_1_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r11.unselect(item_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 16);
      }

      if (rf & 2) {
        var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngItemLabel", item_r7.label)("escape", ctx_r9.escapeHTML);
      }
    }

    function NgSelectComponent_ng_container_4_div_1_ng_template_3_Template(rf, ctx) {}

    var _c6 = function _c6(a0, a1, a2) {
      return {
        item: a0,
        clear: a1,
        label: a2
      };
    };

    function NgSelectComponent_ng_container_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_container_4_div_1_ng_template_1_Template, 3, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_container_4_div_1_ng_template_3_Template, 0, 0, "ng-template", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r7 = ctx.$implicit;

        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-value-disabled", item_r7.disabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.labelTemplate || _r8)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c6, item_r7.value, ctx_r6.clearItem, item_r7.label));
      }
    }

    function NgSelectComponent_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_container_4_div_1_Template, 4, 8, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.selectedItems)("ngForTrackBy", ctx_r0.trackByOption);
      }
    }

    function NgSelectComponent_5_ng_template_0_Template(rf, ctx) {}

    var _c7 = function _c7(a0, a1) {
      return {
        items: a0,
        clear: a1
      };
    };

    function NgSelectComponent_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgSelectComponent_5_ng_template_0_Template, 0, 0, "ng-template", 14);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.multiLabelTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c7, ctx_r1.selectedValues, ctx_r1.clearItem));
      }
    }

    function NgSelectComponent_ng_container_9_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 19);
      }
    }

    function NgSelectComponent_ng_container_9_ng_template_3_Template(rf, ctx) {}

    function NgSelectComponent_ng_container_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_container_9_ng_template_1_Template, 1, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_container_9_ng_template_3_Template, 0, 0, "ng-template", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.loadingSpinnerTemplate || _r16);
      }
    }

    function NgSelectComponent_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r4.clearAllText);
      }
    }

    function NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 27);
      }

      if (rf & 2) {
        var item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngItemLabel", item_r24.label)("escape", ctx_r26.escapeHTML);
      }
    }

    function NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_3_Template(rf, ctx) {}

    var _c8 = function _c8(a0, a1, a2, a3) {
      return {
        item: a0,
        item$: a1,
        index: a2,
        searchTerm: a3
      };
    };

    function NgSelectComponent_ng_dropdown_panel_13_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgSelectComponent_ng_dropdown_panel_13_div_2_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var item_r24 = ctx.$implicit;

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r29.toggleItem(item_r24);
        })("mouseover", function NgSelectComponent_ng_dropdown_panel_13_div_2_Template_div_mouseover_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var item_r24 = ctx.$implicit;

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r31.onItemHover(item_r24);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_1_Template, 1, 2, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_3_Template, 0, 0, "ng-template", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r24 = ctx.$implicit;

        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-option-disabled", item_r24.disabled)("ng-option-selected", item_r24.selected)("ng-optgroup", item_r24.children)("ng-option", !item_r24.children)("ng-option-child", !!item_r24.parent)("ng-option-marked", item_r24 === ctx_r19.itemsList.markedItem);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", item_r24.children ? "group" : "option")("aria-selected", item_r24.selected)("id", item_r24 == null ? null : item_r24.htmlId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", item_r24.children ? ctx_r19.optgroupTemplate || _r25 : ctx_r19.optionTemplate || _r25)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](17, _c8, item_r24.value, item_r24, item_r24.index, ctx_r19.searchTerm));
      }
    }

    function NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r33.addTagText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\"", ctx_r33.searchTerm, "\"");
      }
    }

    function NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_3_Template(rf, ctx) {}

    function NgSelectComponent_ng_dropdown_panel_13_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function NgSelectComponent_ng_dropdown_panel_13_div_3_Template_div_mouseover_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r35.itemsList.unmarkItem();
        })("click", function NgSelectComponent_ng_dropdown_panel_13_div_3_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r37.selectTag();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_1_Template, 4, 2, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_3_Template, 0, 0, "ng-template", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-option-marked", !ctx_r20.itemsList.markedItem);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r20.tagTemplate || _r32)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, ctx_r20.searchTerm));
      }
    }

    function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r39.notFoundText);
      }
    }

    function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_3_Template(rf, ctx) {}

    function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_1_Template, 2, 1, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_3_Template, 0, 0, "ng-template", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r21.notFoundTemplate || _r38)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r21.searchTerm));
      }
    }

    function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r42.typeToSearchText);
      }
    }

    function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_3_Template(rf, ctx) {}

    function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_1_Template, 2, 1, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_3_Template, 0, 0, "ng-template", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r22.typeToSearchTemplate || _r41);
      }
    }

    function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r45.loadingText);
      }
    }

    function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_3_Template(rf, ctx) {}

    function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_1_Template, 2, 1, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_3_Template, 0, 0, "ng-template", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r23.loadingTextTemplate || _r44)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r23.searchTerm));
      }
    }

    function NgSelectComponent_ng_dropdown_panel_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-dropdown-panel", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("update", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_update_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r47.viewPortItems = $event;
        })("scroll", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_scroll_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r49.scroll.emit($event);
        })("scrollToEnd", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_scrollToEnd_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r50.scrollToEnd.emit($event);
        })("outsideClick", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_outsideClick_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r51.close();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgSelectComponent_ng_dropdown_panel_13_div_2_Template, 4, 22, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_3_Template, 4, 6, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_Template, 4, 4, "ng-container", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_Template, 4, 1, "ng-container", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_Template, 4, 4, "ng-container", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-select-multiple", ctx_r5.multiple);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("virtualScroll", ctx_r5.virtualScroll)("bufferAmount", ctx_r5.bufferAmount)("appendTo", ctx_r5.appendTo)("position", ctx_r5.dropdownPosition)("headerTemplate", ctx_r5.headerTemplate)("footerTemplate", ctx_r5.footerTemplate)("filterValue", ctx_r5.searchTerm)("items", ctx_r5.itemsList.filteredItems)("markedItem", ctx_r5.itemsList.markedItem)("ngClass", ctx_r5.appendTo ? ctx_r5.classes : null)("id", ctx_r5.dropdownId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.viewPortItems)("ngForTrackBy", ctx_r5.trackByOption);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showAddTag);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showNoItemsFound());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showTypeToSearch());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.loading && ctx_r5.itemsList.filteredItems.length === 0);
      }
    }

    var unescapedHTMLExp = /[&<>"']/g;
    /** @type {?} */

    var hasUnescapedHTMLExp = RegExp(unescapedHTMLExp.source);
    /** @type {?} */

    var htmlEscapes = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#39;'
    };
    /**
     * @param {?} string
     * @return {?}
     */

    function escapeHTML(string) {
      return string && hasUnescapedHTMLExp.test(string) ? string.replace(unescapedHTMLExp,
      /**
      * @param {?} chr
      * @return {?}
      */
      function (chr) {
        return htmlEscapes[chr];
      }) : string;
    }
    /**
     * @param {?} value
     * @return {?}
     */


    function isDefined(value) {
      return value !== undefined && value !== null;
    }
    /**
     * @param {?} value
     * @return {?}
     */


    function isObject(value) {
      return typeof value === 'object' && isDefined(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */


    function isPromise(value) {
      return value instanceof Promise;
    }
    /**
     * @param {?} value
     * @return {?}
     */


    function isFunction(value) {
      return value instanceof Function;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NgItemLabelDirective = /*#__PURE__*/function () {
      /**
       * @param {?} element
       */
      function NgItemLabelDirective(element) {
        _classCallCheck(this, NgItemLabelDirective);

        this.element = element;
        this.escape = true;
      }
      /**
       * @param {?} changes
       * @return {?}
       */


      _createClass(NgItemLabelDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.element.nativeElement.innerHTML = this.escape ? escapeHTML(this.ngItemLabel) : this.ngItemLabel;
        }
      }]);

      return NgItemLabelDirective;
    }();

    NgItemLabelDirective.ɵfac = function NgItemLabelDirective_Factory(t) {
      return new (t || NgItemLabelDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    NgItemLabelDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgItemLabelDirective,
      selectors: [["", "ngItemLabel", ""]],
      inputs: {
        escape: "escape",
        ngItemLabel: "ngItemLabel"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    /** @nocollapse */

    NgItemLabelDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    NgItemLabelDirective.propDecorators = {
      ngItemLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      escape: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgItemLabelDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[ngItemLabel]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        escape: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        ngItemLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}

    var NgOptionTemplateDirective =
    /**
     * @param {?} template
     */
    function NgOptionTemplateDirective(template) {
      _classCallCheck(this, NgOptionTemplateDirective);

      this.template = template;
    };

    NgOptionTemplateDirective.ɵfac = function NgOptionTemplateDirective_Factory(t) {
      return new (t || NgOptionTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
    };

    NgOptionTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgOptionTemplateDirective,
      selectors: [["", "ng-option-tmp", ""]]
    });
    /** @nocollapse */

    NgOptionTemplateDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptionTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[ng-option-tmp]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      }, null);
    })();

    if (false) {}

    var NgOptgroupTemplateDirective =
    /**
     * @param {?} template
     */
    function NgOptgroupTemplateDirective(template) {
      _classCallCheck(this, NgOptgroupTemplateDirective);

      this.template = template;
    };

    NgOptgroupTemplateDirective.ɵfac = function NgOptgroupTemplateDirective_Factory(t) {
      return new (t || NgOptgroupTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
    };

    NgOptgroupTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgOptgroupTemplateDirective,
      selectors: [["", "ng-optgroup-tmp", ""]]
    });
    /** @nocollapse */

    NgOptgroupTemplateDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptgroupTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[ng-optgroup-tmp]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      }, null);
    })();

    if (false) {}

    var NgLabelTemplateDirective =
    /**
     * @param {?} template
     */
    function NgLabelTemplateDirective(template) {
      _classCallCheck(this, NgLabelTemplateDirective);

      this.template = template;
    };

    NgLabelTemplateDirective.ɵfac = function NgLabelTemplateDirective_Factory(t) {
      return new (t || NgLabelTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
    };

    NgLabelTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgLabelTemplateDirective,
      selectors: [["", "ng-label-tmp", ""]]
    });
    /** @nocollapse */

    NgLabelTemplateDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgLabelTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[ng-label-tmp]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      }, null);
    })();

    if (false) {}

    var NgMultiLabelTemplateDirective =
    /**
     * @param {?} template
     */
    function NgMultiLabelTemplateDirective(template) {
      _classCallCheck(this, NgMultiLabelTemplateDirective);

      this.template = template;
    };

    NgMultiLabelTemplateDirective.ɵfac = function NgMultiLabelTemplateDirective_Factory(t) {
      return new (t || NgMultiLabelTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
    };

    NgMultiLabelTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgMultiLabelTemplateDirective,
      selectors: [["", "ng-multi-label-tmp", ""]]
    });
    /** @nocollapse */

    NgMultiLabelTemplateDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgMultiLabelTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[ng-multi-label-tmp]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      }, null);
    })();

    if (false) {}

    var NgHeaderTemplateDirective =
    /**
     * @param {?} template
     */
    function NgHeaderTemplateDirective(template) {
      _classCallCheck(this, NgHeaderTemplateDirective);

      this.template = template;
    };

    NgHeaderTemplateDirective.ɵfac = function NgHeaderTemplateDirective_Factory(t) {
      return new (t || NgHeaderTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
    };

    NgHeaderTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgHeaderTemplateDirective,
      selectors: [["", "ng-header-tmp", ""]]
    });
    /** @nocollapse */

    NgHeaderTemplateDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgHeaderTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[ng-header-tmp]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      }, null);
    })();

    if (false) {}

    var NgFooterTemplateDirective =
    /**
     * @param {?} template
     */
    function NgFooterTemplateDirective(template) {
      _classCallCheck(this, NgFooterTemplateDirective);

      this.template = template;
    };

    NgFooterTemplateDirective.ɵfac = function NgFooterTemplateDirective_Factory(t) {
      return new (t || NgFooterTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
    };

    NgFooterTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgFooterTemplateDirective,
      selectors: [["", "ng-footer-tmp", ""]]
    });
    /** @nocollapse */

    NgFooterTemplateDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgFooterTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[ng-footer-tmp]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      }, null);
    })();

    if (false) {}

    var NgNotFoundTemplateDirective =
    /**
     * @param {?} template
     */
    function NgNotFoundTemplateDirective(template) {
      _classCallCheck(this, NgNotFoundTemplateDirective);

      this.template = template;
    };

    NgNotFoundTemplateDirective.ɵfac = function NgNotFoundTemplateDirective_Factory(t) {
      return new (t || NgNotFoundTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
    };

    NgNotFoundTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgNotFoundTemplateDirective,
      selectors: [["", "ng-notfound-tmp", ""]]
    });
    /** @nocollapse */

    NgNotFoundTemplateDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgNotFoundTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[ng-notfound-tmp]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      }, null);
    })();

    if (false) {}

    var NgTypeToSearchTemplateDirective =
    /**
     * @param {?} template
     */
    function NgTypeToSearchTemplateDirective(template) {
      _classCallCheck(this, NgTypeToSearchTemplateDirective);

      this.template = template;
    };

    NgTypeToSearchTemplateDirective.ɵfac = function NgTypeToSearchTemplateDirective_Factory(t) {
      return new (t || NgTypeToSearchTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
    };

    NgTypeToSearchTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgTypeToSearchTemplateDirective,
      selectors: [["", "ng-typetosearch-tmp", ""]]
    });
    /** @nocollapse */

    NgTypeToSearchTemplateDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgTypeToSearchTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[ng-typetosearch-tmp]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      }, null);
    })();

    if (false) {}

    var NgLoadingTextTemplateDirective =
    /**
     * @param {?} template
     */
    function NgLoadingTextTemplateDirective(template) {
      _classCallCheck(this, NgLoadingTextTemplateDirective);

      this.template = template;
    };

    NgLoadingTextTemplateDirective.ɵfac = function NgLoadingTextTemplateDirective_Factory(t) {
      return new (t || NgLoadingTextTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
    };

    NgLoadingTextTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgLoadingTextTemplateDirective,
      selectors: [["", "ng-loadingtext-tmp", ""]]
    });
    /** @nocollapse */

    NgLoadingTextTemplateDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgLoadingTextTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[ng-loadingtext-tmp]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      }, null);
    })();

    if (false) {}

    var NgTagTemplateDirective =
    /**
     * @param {?} template
     */
    function NgTagTemplateDirective(template) {
      _classCallCheck(this, NgTagTemplateDirective);

      this.template = template;
    };

    NgTagTemplateDirective.ɵfac = function NgTagTemplateDirective_Factory(t) {
      return new (t || NgTagTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
    };

    NgTagTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgTagTemplateDirective,
      selectors: [["", "ng-tag-tmp", ""]]
    });
    /** @nocollapse */

    NgTagTemplateDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgTagTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[ng-tag-tmp]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      }, null);
    })();

    if (false) {}

    var NgLoadingSpinnerTemplateDirective =
    /**
     * @param {?} template
     */
    function NgLoadingSpinnerTemplateDirective(template) {
      _classCallCheck(this, NgLoadingSpinnerTemplateDirective);

      this.template = template;
    };

    NgLoadingSpinnerTemplateDirective.ɵfac = function NgLoadingSpinnerTemplateDirective_Factory(t) {
      return new (t || NgLoadingSpinnerTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
    };

    NgLoadingSpinnerTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgLoadingSpinnerTemplateDirective,
      selectors: [["", "ng-loadingspinner-tmp", ""]]
    });
    /** @nocollapse */

    NgLoadingSpinnerTemplateDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgLoadingSpinnerTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[ng-loadingspinner-tmp]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ConsoleService = /*#__PURE__*/function () {
      function ConsoleService() {
        _classCallCheck(this, ConsoleService);
      }

      _createClass(ConsoleService, [{
        key: "warn",

        /**
         * @param {?} message
         * @return {?}
         */
        value: function warn(message) {
          console.warn(message);
        }
      }]);

      return ConsoleService;
    }();

    ConsoleService.ɵfac = function ConsoleService_Factory(t) {
      return new (t || ConsoleService)();
    };

    ConsoleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ConsoleService,
      factory: ConsoleService.ɵfac,
      providedIn: 'root'
    });
    /** @nocollapse */

    ConsoleService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function ConsoleService_Factory() {
        return new ConsoleService();
      },
      token: ConsoleService,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsoleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @return {?}
     */


    function newId() {
      // First character is an 'a', it's good practice to tag id to begin with a letter
      return 'axxxxxxxxxxx'.replace(/[x]/g,
      /**
      * @param {?} _
      * @return {?}
      */
      function (_) {
        // tslint:disable-next-line:no-bitwise

        /** @type {?} */
        var val = Math.random() * 16 | 0;
        return val.toString(16);
      });
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var diacritics = {
      "\u24B6": 'A',
      "\uFF21": 'A',
      "\xC0": 'A',
      "\xC1": 'A',
      "\xC2": 'A',
      "\u1EA6": 'A',
      "\u1EA4": 'A',
      "\u1EAA": 'A',
      "\u1EA8": 'A',
      "\xC3": 'A',
      "\u0100": 'A',
      "\u0102": 'A',
      "\u1EB0": 'A',
      "\u1EAE": 'A',
      "\u1EB4": 'A',
      "\u1EB2": 'A',
      "\u0226": 'A',
      "\u01E0": 'A',
      "\xC4": 'A',
      "\u01DE": 'A',
      "\u1EA2": 'A',
      "\xC5": 'A',
      "\u01FA": 'A',
      "\u01CD": 'A',
      "\u0200": 'A',
      "\u0202": 'A',
      "\u1EA0": 'A',
      "\u1EAC": 'A',
      "\u1EB6": 'A',
      "\u1E00": 'A',
      "\u0104": 'A',
      "\u023A": 'A',
      "\u2C6F": 'A',
      "\uA732": 'AA',
      "\xC6": 'AE',
      "\u01FC": 'AE',
      "\u01E2": 'AE',
      "\uA734": 'AO',
      "\uA736": 'AU',
      "\uA738": 'AV',
      "\uA73A": 'AV',
      "\uA73C": 'AY',
      "\u24B7": 'B',
      "\uFF22": 'B',
      "\u1E02": 'B',
      "\u1E04": 'B',
      "\u1E06": 'B',
      "\u0243": 'B',
      "\u0182": 'B',
      "\u0181": 'B',
      "\u24B8": 'C',
      "\uFF23": 'C',
      "\u0106": 'C',
      "\u0108": 'C',
      "\u010A": 'C',
      "\u010C": 'C',
      "\xC7": 'C',
      "\u1E08": 'C',
      "\u0187": 'C',
      "\u023B": 'C',
      "\uA73E": 'C',
      "\u24B9": 'D',
      "\uFF24": 'D',
      "\u1E0A": 'D',
      "\u010E": 'D',
      "\u1E0C": 'D',
      "\u1E10": 'D',
      "\u1E12": 'D',
      "\u1E0E": 'D',
      "\u0110": 'D',
      "\u018B": 'D',
      "\u018A": 'D',
      "\u0189": 'D',
      "\uA779": 'D',
      "\u01F1": 'DZ',
      "\u01C4": 'DZ',
      "\u01F2": 'Dz',
      "\u01C5": 'Dz',
      "\u24BA": 'E',
      "\uFF25": 'E',
      "\xC8": 'E',
      "\xC9": 'E',
      "\xCA": 'E',
      "\u1EC0": 'E',
      "\u1EBE": 'E',
      "\u1EC4": 'E',
      "\u1EC2": 'E',
      "\u1EBC": 'E',
      "\u0112": 'E',
      "\u1E14": 'E',
      "\u1E16": 'E',
      "\u0114": 'E',
      "\u0116": 'E',
      "\xCB": 'E',
      "\u1EBA": 'E',
      "\u011A": 'E',
      "\u0204": 'E',
      "\u0206": 'E',
      "\u1EB8": 'E',
      "\u1EC6": 'E',
      "\u0228": 'E',
      "\u1E1C": 'E',
      "\u0118": 'E',
      "\u1E18": 'E',
      "\u1E1A": 'E',
      "\u0190": 'E',
      "\u018E": 'E',
      "\u24BB": 'F',
      "\uFF26": 'F',
      "\u1E1E": 'F',
      "\u0191": 'F',
      "\uA77B": 'F',
      "\u24BC": 'G',
      "\uFF27": 'G',
      "\u01F4": 'G',
      "\u011C": 'G',
      "\u1E20": 'G',
      "\u011E": 'G',
      "\u0120": 'G',
      "\u01E6": 'G',
      "\u0122": 'G',
      "\u01E4": 'G',
      "\u0193": 'G',
      "\uA7A0": 'G',
      "\uA77D": 'G',
      "\uA77E": 'G',
      "\u24BD": 'H',
      "\uFF28": 'H',
      "\u0124": 'H',
      "\u1E22": 'H',
      "\u1E26": 'H',
      "\u021E": 'H',
      "\u1E24": 'H',
      "\u1E28": 'H',
      "\u1E2A": 'H',
      "\u0126": 'H',
      "\u2C67": 'H',
      "\u2C75": 'H',
      "\uA78D": 'H',
      "\u24BE": 'I',
      "\uFF29": 'I',
      "\xCC": 'I',
      "\xCD": 'I',
      "\xCE": 'I',
      "\u0128": 'I',
      "\u012A": 'I',
      "\u012C": 'I',
      "\u0130": 'I',
      "\xCF": 'I',
      "\u1E2E": 'I',
      "\u1EC8": 'I',
      "\u01CF": 'I',
      "\u0208": 'I',
      "\u020A": 'I',
      "\u1ECA": 'I',
      "\u012E": 'I',
      "\u1E2C": 'I',
      "\u0197": 'I',
      "\u24BF": 'J',
      "\uFF2A": 'J',
      "\u0134": 'J',
      "\u0248": 'J',
      "\u24C0": 'K',
      "\uFF2B": 'K',
      "\u1E30": 'K',
      "\u01E8": 'K',
      "\u1E32": 'K',
      "\u0136": 'K',
      "\u1E34": 'K',
      "\u0198": 'K',
      "\u2C69": 'K',
      "\uA740": 'K',
      "\uA742": 'K',
      "\uA744": 'K',
      "\uA7A2": 'K',
      "\u24C1": 'L',
      "\uFF2C": 'L',
      "\u013F": 'L',
      "\u0139": 'L',
      "\u013D": 'L',
      "\u1E36": 'L',
      "\u1E38": 'L',
      "\u013B": 'L',
      "\u1E3C": 'L',
      "\u1E3A": 'L',
      "\u0141": 'L',
      "\u023D": 'L',
      "\u2C62": 'L',
      "\u2C60": 'L',
      "\uA748": 'L',
      "\uA746": 'L',
      "\uA780": 'L',
      "\u01C7": 'LJ',
      "\u01C8": 'Lj',
      "\u24C2": 'M',
      "\uFF2D": 'M',
      "\u1E3E": 'M',
      "\u1E40": 'M',
      "\u1E42": 'M',
      "\u2C6E": 'M',
      "\u019C": 'M',
      "\u24C3": 'N',
      "\uFF2E": 'N',
      "\u01F8": 'N',
      "\u0143": 'N',
      "\xD1": 'N',
      "\u1E44": 'N',
      "\u0147": 'N',
      "\u1E46": 'N',
      "\u0145": 'N',
      "\u1E4A": 'N',
      "\u1E48": 'N',
      "\u0220": 'N',
      "\u019D": 'N',
      "\uA790": 'N',
      "\uA7A4": 'N',
      "\u01CA": 'NJ',
      "\u01CB": 'Nj',
      "\u24C4": 'O',
      "\uFF2F": 'O',
      "\xD2": 'O',
      "\xD3": 'O',
      "\xD4": 'O',
      "\u1ED2": 'O',
      "\u1ED0": 'O',
      "\u1ED6": 'O',
      "\u1ED4": 'O',
      "\xD5": 'O',
      "\u1E4C": 'O',
      "\u022C": 'O',
      "\u1E4E": 'O',
      "\u014C": 'O',
      "\u1E50": 'O',
      "\u1E52": 'O',
      "\u014E": 'O',
      "\u022E": 'O',
      "\u0230": 'O',
      "\xD6": 'O',
      "\u022A": 'O',
      "\u1ECE": 'O',
      "\u0150": 'O',
      "\u01D1": 'O',
      "\u020C": 'O',
      "\u020E": 'O',
      "\u01A0": 'O',
      "\u1EDC": 'O',
      "\u1EDA": 'O',
      "\u1EE0": 'O',
      "\u1EDE": 'O',
      "\u1EE2": 'O',
      "\u1ECC": 'O',
      "\u1ED8": 'O',
      "\u01EA": 'O',
      "\u01EC": 'O',
      "\xD8": 'O',
      "\u01FE": 'O',
      "\u0186": 'O',
      "\u019F": 'O',
      "\uA74A": 'O',
      "\uA74C": 'O',
      "\u01A2": 'OI',
      "\uA74E": 'OO',
      "\u0222": 'OU',
      "\u24C5": 'P',
      "\uFF30": 'P',
      "\u1E54": 'P',
      "\u1E56": 'P',
      "\u01A4": 'P',
      "\u2C63": 'P',
      "\uA750": 'P',
      "\uA752": 'P',
      "\uA754": 'P',
      "\u24C6": 'Q',
      "\uFF31": 'Q',
      "\uA756": 'Q',
      "\uA758": 'Q',
      "\u024A": 'Q',
      "\u24C7": 'R',
      "\uFF32": 'R',
      "\u0154": 'R',
      "\u1E58": 'R',
      "\u0158": 'R',
      "\u0210": 'R',
      "\u0212": 'R',
      "\u1E5A": 'R',
      "\u1E5C": 'R',
      "\u0156": 'R',
      "\u1E5E": 'R',
      "\u024C": 'R',
      "\u2C64": 'R',
      "\uA75A": 'R',
      "\uA7A6": 'R',
      "\uA782": 'R',
      "\u24C8": 'S',
      "\uFF33": 'S',
      "\u1E9E": 'S',
      "\u015A": 'S',
      "\u1E64": 'S',
      "\u015C": 'S',
      "\u1E60": 'S',
      "\u0160": 'S',
      "\u1E66": 'S',
      "\u1E62": 'S',
      "\u1E68": 'S',
      "\u0218": 'S',
      "\u015E": 'S',
      "\u2C7E": 'S',
      "\uA7A8": 'S',
      "\uA784": 'S',
      "\u24C9": 'T',
      "\uFF34": 'T',
      "\u1E6A": 'T',
      "\u0164": 'T',
      "\u1E6C": 'T',
      "\u021A": 'T',
      "\u0162": 'T',
      "\u1E70": 'T',
      "\u1E6E": 'T',
      "\u0166": 'T',
      "\u01AC": 'T',
      "\u01AE": 'T',
      "\u023E": 'T',
      "\uA786": 'T',
      "\uA728": 'TZ',
      "\u24CA": 'U',
      "\uFF35": 'U',
      "\xD9": 'U',
      "\xDA": 'U',
      "\xDB": 'U',
      "\u0168": 'U',
      "\u1E78": 'U',
      "\u016A": 'U',
      "\u1E7A": 'U',
      "\u016C": 'U',
      "\xDC": 'U',
      "\u01DB": 'U',
      "\u01D7": 'U',
      "\u01D5": 'U',
      "\u01D9": 'U',
      "\u1EE6": 'U',
      "\u016E": 'U',
      "\u0170": 'U',
      "\u01D3": 'U',
      "\u0214": 'U',
      "\u0216": 'U',
      "\u01AF": 'U',
      "\u1EEA": 'U',
      "\u1EE8": 'U',
      "\u1EEE": 'U',
      "\u1EEC": 'U',
      "\u1EF0": 'U',
      "\u1EE4": 'U',
      "\u1E72": 'U',
      "\u0172": 'U',
      "\u1E76": 'U',
      "\u1E74": 'U',
      "\u0244": 'U',
      "\u24CB": 'V',
      "\uFF36": 'V',
      "\u1E7C": 'V',
      "\u1E7E": 'V',
      "\u01B2": 'V',
      "\uA75E": 'V',
      "\u0245": 'V',
      "\uA760": 'VY',
      "\u24CC": 'W',
      "\uFF37": 'W',
      "\u1E80": 'W',
      "\u1E82": 'W',
      "\u0174": 'W',
      "\u1E86": 'W',
      "\u1E84": 'W',
      "\u1E88": 'W',
      "\u2C72": 'W',
      "\u24CD": 'X',
      "\uFF38": 'X',
      "\u1E8A": 'X',
      "\u1E8C": 'X',
      "\u24CE": 'Y',
      "\uFF39": 'Y',
      "\u1EF2": 'Y',
      "\xDD": 'Y',
      "\u0176": 'Y',
      "\u1EF8": 'Y',
      "\u0232": 'Y',
      "\u1E8E": 'Y',
      "\u0178": 'Y',
      "\u1EF6": 'Y',
      "\u1EF4": 'Y',
      "\u01B3": 'Y',
      "\u024E": 'Y',
      "\u1EFE": 'Y',
      "\u24CF": 'Z',
      "\uFF3A": 'Z',
      "\u0179": 'Z',
      "\u1E90": 'Z',
      "\u017B": 'Z',
      "\u017D": 'Z',
      "\u1E92": 'Z',
      "\u1E94": 'Z',
      "\u01B5": 'Z',
      "\u0224": 'Z',
      "\u2C7F": 'Z',
      "\u2C6B": 'Z',
      "\uA762": 'Z',
      "\u24D0": 'a',
      "\uFF41": 'a',
      "\u1E9A": 'a',
      "\xE0": 'a',
      "\xE1": 'a',
      "\xE2": 'a',
      "\u1EA7": 'a',
      "\u1EA5": 'a',
      "\u1EAB": 'a',
      "\u1EA9": 'a',
      "\xE3": 'a',
      "\u0101": 'a',
      "\u0103": 'a',
      "\u1EB1": 'a',
      "\u1EAF": 'a',
      "\u1EB5": 'a',
      "\u1EB3": 'a',
      "\u0227": 'a',
      "\u01E1": 'a',
      "\xE4": 'a',
      "\u01DF": 'a',
      "\u1EA3": 'a',
      "\xE5": 'a',
      "\u01FB": 'a',
      "\u01CE": 'a',
      "\u0201": 'a',
      "\u0203": 'a',
      "\u1EA1": 'a',
      "\u1EAD": 'a',
      "\u1EB7": 'a',
      "\u1E01": 'a',
      "\u0105": 'a',
      "\u2C65": 'a',
      "\u0250": 'a',
      "\uA733": 'aa',
      "\xE6": 'ae',
      "\u01FD": 'ae',
      "\u01E3": 'ae',
      "\uA735": 'ao',
      "\uA737": 'au',
      "\uA739": 'av',
      "\uA73B": 'av',
      "\uA73D": 'ay',
      "\u24D1": 'b',
      "\uFF42": 'b',
      "\u1E03": 'b',
      "\u1E05": 'b',
      "\u1E07": 'b',
      "\u0180": 'b',
      "\u0183": 'b',
      "\u0253": 'b',
      "\u24D2": 'c',
      "\uFF43": 'c',
      "\u0107": 'c',
      "\u0109": 'c',
      "\u010B": 'c',
      "\u010D": 'c',
      "\xE7": 'c',
      "\u1E09": 'c',
      "\u0188": 'c',
      "\u023C": 'c',
      "\uA73F": 'c',
      "\u2184": 'c',
      "\u24D3": 'd',
      "\uFF44": 'd',
      "\u1E0B": 'd',
      "\u010F": 'd',
      "\u1E0D": 'd',
      "\u1E11": 'd',
      "\u1E13": 'd',
      "\u1E0F": 'd',
      "\u0111": 'd',
      "\u018C": 'd',
      "\u0256": 'd',
      "\u0257": 'd',
      "\uA77A": 'd',
      "\u01F3": 'dz',
      "\u01C6": 'dz',
      "\u24D4": 'e',
      "\uFF45": 'e',
      "\xE8": 'e',
      "\xE9": 'e',
      "\xEA": 'e',
      "\u1EC1": 'e',
      "\u1EBF": 'e',
      "\u1EC5": 'e',
      "\u1EC3": 'e',
      "\u1EBD": 'e',
      "\u0113": 'e',
      "\u1E15": 'e',
      "\u1E17": 'e',
      "\u0115": 'e',
      "\u0117": 'e',
      "\xEB": 'e',
      "\u1EBB": 'e',
      "\u011B": 'e',
      "\u0205": 'e',
      "\u0207": 'e',
      "\u1EB9": 'e',
      "\u1EC7": 'e',
      "\u0229": 'e',
      "\u1E1D": 'e',
      "\u0119": 'e',
      "\u1E19": 'e',
      "\u1E1B": 'e',
      "\u0247": 'e',
      "\u025B": 'e',
      "\u01DD": 'e',
      "\u24D5": 'f',
      "\uFF46": 'f',
      "\u1E1F": 'f',
      "\u0192": 'f',
      "\uA77C": 'f',
      "\u24D6": 'g',
      "\uFF47": 'g',
      "\u01F5": 'g',
      "\u011D": 'g',
      "\u1E21": 'g',
      "\u011F": 'g',
      "\u0121": 'g',
      "\u01E7": 'g',
      "\u0123": 'g',
      "\u01E5": 'g',
      "\u0260": 'g',
      "\uA7A1": 'g',
      "\u1D79": 'g',
      "\uA77F": 'g',
      "\u24D7": 'h',
      "\uFF48": 'h',
      "\u0125": 'h',
      "\u1E23": 'h',
      "\u1E27": 'h',
      "\u021F": 'h',
      "\u1E25": 'h',
      "\u1E29": 'h',
      "\u1E2B": 'h',
      "\u1E96": 'h',
      "\u0127": 'h',
      "\u2C68": 'h',
      "\u2C76": 'h',
      "\u0265": 'h',
      "\u0195": 'hv',
      "\u24D8": 'i',
      "\uFF49": 'i',
      "\xEC": 'i',
      "\xED": 'i',
      "\xEE": 'i',
      "\u0129": 'i',
      "\u012B": 'i',
      "\u012D": 'i',
      "\xEF": 'i',
      "\u1E2F": 'i',
      "\u1EC9": 'i',
      "\u01D0": 'i',
      "\u0209": 'i',
      "\u020B": 'i',
      "\u1ECB": 'i',
      "\u012F": 'i',
      "\u1E2D": 'i',
      "\u0268": 'i',
      "\u0131": 'i',
      "\u24D9": 'j',
      "\uFF4A": 'j',
      "\u0135": 'j',
      "\u01F0": 'j',
      "\u0249": 'j',
      "\u24DA": 'k',
      "\uFF4B": 'k',
      "\u1E31": 'k',
      "\u01E9": 'k',
      "\u1E33": 'k',
      "\u0137": 'k',
      "\u1E35": 'k',
      "\u0199": 'k',
      "\u2C6A": 'k',
      "\uA741": 'k',
      "\uA743": 'k',
      "\uA745": 'k',
      "\uA7A3": 'k',
      "\u24DB": 'l',
      "\uFF4C": 'l',
      "\u0140": 'l',
      "\u013A": 'l',
      "\u013E": 'l',
      "\u1E37": 'l',
      "\u1E39": 'l',
      "\u013C": 'l',
      "\u1E3D": 'l',
      "\u1E3B": 'l',
      "\u017F": 'l',
      "\u0142": 'l',
      "\u019A": 'l',
      "\u026B": 'l',
      "\u2C61": 'l',
      "\uA749": 'l',
      "\uA781": 'l',
      "\uA747": 'l',
      "\u01C9": 'lj',
      "\u24DC": 'm',
      "\uFF4D": 'm',
      "\u1E3F": 'm',
      "\u1E41": 'm',
      "\u1E43": 'm',
      "\u0271": 'm',
      "\u026F": 'm',
      "\u24DD": 'n',
      "\uFF4E": 'n',
      "\u01F9": 'n',
      "\u0144": 'n',
      "\xF1": 'n',
      "\u1E45": 'n',
      "\u0148": 'n',
      "\u1E47": 'n',
      "\u0146": 'n',
      "\u1E4B": 'n',
      "\u1E49": 'n',
      "\u019E": 'n',
      "\u0272": 'n',
      "\u0149": 'n',
      "\uA791": 'n',
      "\uA7A5": 'n',
      "\u01CC": 'nj',
      "\u24DE": 'o',
      "\uFF4F": 'o',
      "\xF2": 'o',
      "\xF3": 'o',
      "\xF4": 'o',
      "\u1ED3": 'o',
      "\u1ED1": 'o',
      "\u1ED7": 'o',
      "\u1ED5": 'o',
      "\xF5": 'o',
      "\u1E4D": 'o',
      "\u022D": 'o',
      "\u1E4F": 'o',
      "\u014D": 'o',
      "\u1E51": 'o',
      "\u1E53": 'o',
      "\u014F": 'o',
      "\u022F": 'o',
      "\u0231": 'o',
      "\xF6": 'o',
      "\u022B": 'o',
      "\u1ECF": 'o',
      "\u0151": 'o',
      "\u01D2": 'o',
      "\u020D": 'o',
      "\u020F": 'o',
      "\u01A1": 'o',
      "\u1EDD": 'o',
      "\u1EDB": 'o',
      "\u1EE1": 'o',
      "\u1EDF": 'o',
      "\u1EE3": 'o',
      "\u1ECD": 'o',
      "\u1ED9": 'o',
      "\u01EB": 'o',
      "\u01ED": 'o',
      "\xF8": 'o',
      "\u01FF": 'o',
      "\u0254": 'o',
      "\uA74B": 'o',
      "\uA74D": 'o',
      "\u0275": 'o',
      "\u01A3": 'oi',
      "\u0223": 'ou',
      "\uA74F": 'oo',
      "\u24DF": 'p',
      "\uFF50": 'p',
      "\u1E55": 'p',
      "\u1E57": 'p',
      "\u01A5": 'p',
      "\u1D7D": 'p',
      "\uA751": 'p',
      "\uA753": 'p',
      "\uA755": 'p',
      "\u24E0": 'q',
      "\uFF51": 'q',
      "\u024B": 'q',
      "\uA757": 'q',
      "\uA759": 'q',
      "\u24E1": 'r',
      "\uFF52": 'r',
      "\u0155": 'r',
      "\u1E59": 'r',
      "\u0159": 'r',
      "\u0211": 'r',
      "\u0213": 'r',
      "\u1E5B": 'r',
      "\u1E5D": 'r',
      "\u0157": 'r',
      "\u1E5F": 'r',
      "\u024D": 'r',
      "\u027D": 'r',
      "\uA75B": 'r',
      "\uA7A7": 'r',
      "\uA783": 'r',
      "\u24E2": 's',
      "\uFF53": 's',
      "\xDF": 's',
      "\u015B": 's',
      "\u1E65": 's',
      "\u015D": 's',
      "\u1E61": 's',
      "\u0161": 's',
      "\u1E67": 's',
      "\u1E63": 's',
      "\u1E69": 's',
      "\u0219": 's',
      "\u015F": 's',
      "\u023F": 's',
      "\uA7A9": 's',
      "\uA785": 's',
      "\u1E9B": 's',
      "\u24E3": 't',
      "\uFF54": 't',
      "\u1E6B": 't',
      "\u1E97": 't',
      "\u0165": 't',
      "\u1E6D": 't',
      "\u021B": 't',
      "\u0163": 't',
      "\u1E71": 't',
      "\u1E6F": 't',
      "\u0167": 't',
      "\u01AD": 't',
      "\u0288": 't',
      "\u2C66": 't',
      "\uA787": 't',
      "\uA729": 'tz',
      "\u24E4": 'u',
      "\uFF55": 'u',
      "\xF9": 'u',
      "\xFA": 'u',
      "\xFB": 'u',
      "\u0169": 'u',
      "\u1E79": 'u',
      "\u016B": 'u',
      "\u1E7B": 'u',
      "\u016D": 'u',
      "\xFC": 'u',
      "\u01DC": 'u',
      "\u01D8": 'u',
      "\u01D6": 'u',
      "\u01DA": 'u',
      "\u1EE7": 'u',
      "\u016F": 'u',
      "\u0171": 'u',
      "\u01D4": 'u',
      "\u0215": 'u',
      "\u0217": 'u',
      "\u01B0": 'u',
      "\u1EEB": 'u',
      "\u1EE9": 'u',
      "\u1EEF": 'u',
      "\u1EED": 'u',
      "\u1EF1": 'u',
      "\u1EE5": 'u',
      "\u1E73": 'u',
      "\u0173": 'u',
      "\u1E77": 'u',
      "\u1E75": 'u',
      "\u0289": 'u',
      "\u24E5": 'v',
      "\uFF56": 'v',
      "\u1E7D": 'v',
      "\u1E7F": 'v',
      "\u028B": 'v',
      "\uA75F": 'v',
      "\u028C": 'v',
      "\uA761": 'vy',
      "\u24E6": 'w',
      "\uFF57": 'w',
      "\u1E81": 'w',
      "\u1E83": 'w',
      "\u0175": 'w',
      "\u1E87": 'w',
      "\u1E85": 'w',
      "\u1E98": 'w',
      "\u1E89": 'w',
      "\u2C73": 'w',
      "\u24E7": 'x',
      "\uFF58": 'x',
      "\u1E8B": 'x',
      "\u1E8D": 'x',
      "\u24E8": 'y',
      "\uFF59": 'y',
      "\u1EF3": 'y',
      "\xFD": 'y',
      "\u0177": 'y',
      "\u1EF9": 'y',
      "\u0233": 'y',
      "\u1E8F": 'y',
      "\xFF": 'y',
      "\u1EF7": 'y',
      "\u1E99": 'y',
      "\u1EF5": 'y',
      "\u01B4": 'y',
      "\u024F": 'y',
      "\u1EFF": 'y',
      "\u24E9": 'z',
      "\uFF5A": 'z',
      "\u017A": 'z',
      "\u1E91": 'z',
      "\u017C": 'z',
      "\u017E": 'z',
      "\u1E93": 'z',
      "\u1E95": 'z',
      "\u01B6": 'z',
      "\u0225": 'z',
      "\u0240": 'z',
      "\u2C6C": 'z',
      "\uA763": 'z',
      "\u0386": "\u0391",
      "\u0388": "\u0395",
      "\u0389": "\u0397",
      "\u038A": "\u0399",
      "\u03AA": "\u0399",
      "\u038C": "\u039F",
      "\u038E": "\u03A5",
      "\u03AB": "\u03A5",
      "\u038F": "\u03A9",
      "\u03AC": "\u03B1",
      "\u03AD": "\u03B5",
      "\u03AE": "\u03B7",
      "\u03AF": "\u03B9",
      "\u03CA": "\u03B9",
      "\u0390": "\u03B9",
      "\u03CC": "\u03BF",
      "\u03CD": "\u03C5",
      "\u03CB": "\u03C5",
      "\u03B0": "\u03C5",
      "\u03C9": "\u03C9",
      "\u03C2": "\u03C3"
    };
    /**
     * @param {?} text
     * @return {?}
     */

    function stripSpecialChars(text) {
      /** @type {?} */
      var match =
      /**
      * @param {?} a
      * @return {?}
      */
      function match(a) {
        return diacritics[a] || a;
      };

      return text.replace(/[^\u0000-\u007E]/g, match);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ItemsList = /*#__PURE__*/function () {
      /**
       * @param {?} _ngSelect
       * @param {?} _selectionModel
       */
      function ItemsList(_ngSelect, _selectionModel) {
        _classCallCheck(this, ItemsList);

        this._ngSelect = _ngSelect;
        this._selectionModel = _selectionModel;
        this._items = [];
        this._filteredItems = [];
        this._markedIndex = -1;
      }
      /**
       * @return {?}
       */


      _createClass(ItemsList, [{
        key: "setItems",

        /**
         * @param {?} items
         * @return {?}
         */
        value: function setItems(items) {
          var _this = this;

          this._items = items.map(
          /**
          * @param {?} item
          * @param {?} index
          * @return {?}
          */
          function (item, index) {
            return _this.mapItem(item, index);
          });

          if (this._ngSelect.groupBy) {
            this._groups = this._groupBy(this._items, this._ngSelect.groupBy);
            this._items = this._flatten(this._groups);
          } else {
            this._groups = new Map();

            this._groups.set(undefined, this._items);
          }

          this._filteredItems = _toConsumableArray(this._items);
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "select",
        value: function select(item) {
          if (item.selected || this.maxItemsSelected) {
            return;
          }
          /** @type {?} */


          var multiple = this._ngSelect.multiple;

          if (!multiple) {
            this.clearSelected();
          }

          this._selectionModel.select(item, multiple, this._ngSelect.selectableGroupAsModel);

          if (this._ngSelect.hideSelected) {
            this._hideSelected(item);
          }
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "unselect",
        value: function unselect(item) {
          if (!item.selected) {
            return;
          }

          this._selectionModel.unselect(item, this._ngSelect.multiple);

          if (this._ngSelect.hideSelected && isDefined(item.index) && this._ngSelect.multiple) {
            this._showSelected(item);
          }
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "findItem",
        value: function findItem(value) {
          var _this2 = this;

          /** @type {?} */
          var findBy;

          if (this._ngSelect.compareWith) {
            findBy =
            /**
            * @param {?} item
            * @return {?}
            */
            function findBy(item) {
              return _this2._ngSelect.compareWith(item.value, value);
            };
          } else if (this._ngSelect.bindValue) {
            findBy =
            /**
            * @param {?} item
            * @return {?}
            */
            function findBy(item) {
              return !item.children && _this2.resolveNested(item.value, _this2._ngSelect.bindValue) === value;
            };
          } else {
            findBy =
            /**
            * @param {?} item
            * @return {?}
            */
            function findBy(item) {
              return item.value === value || !item.children && item.label && item.label === _this2.resolveNested(value, _this2._ngSelect.bindLabel);
            };
          }

          return this._items.find(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return findBy(item);
          });
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "addItem",
        value: function addItem(item) {
          /** @type {?} */
          var option = this.mapItem(item, this._items.length);

          this._items.push(option);

          this._filteredItems.push(option);

          return option;
        }
        /**
         * @param {?=} keepDisabled
         * @return {?}
         */

      }, {
        key: "clearSelected",
        value: function clearSelected() {
          var keepDisabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          this._selectionModel.clear(keepDisabled);

          this._items.forEach(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            item.selected = keepDisabled && item.selected && item.disabled;
            item.marked = false;
          });

          if (this._ngSelect.hideSelected) {
            this.resetFilteredItems();
          }
        }
        /**
         * @param {?} term
         * @return {?}
         */

      }, {
        key: "findByLabel",
        value: function findByLabel(term) {
          term = stripSpecialChars(term).toLocaleLowerCase();
          return this.filteredItems.find(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            /** @type {?} */
            var label = stripSpecialChars(item.label).toLocaleLowerCase();
            return label.substr(0, term.length) === term;
          });
        }
        /**
         * @param {?} term
         * @return {?}
         */

      }, {
        key: "filter",
        value: function filter(term) {
          var _this3 = this;

          if (!term) {
            this.resetFilteredItems();
            return;
          }

          this._filteredItems = [];
          term = this._ngSelect.searchFn ? term : stripSpecialChars(term).toLocaleLowerCase();
          /** @type {?} */

          var match = this._ngSelect.searchFn || this._defaultSearchFn;
          /** @type {?} */

          var hideSelected = this._ngSelect.hideSelected;

          for (var _i = 0, _Array$from = Array.from(this._groups.keys()); _i < _Array$from.length; _i++) {
            var key = _Array$from[_i];

            /** @type {?} */
            var matchedItems = [];

            var _iterator = _createForOfIteratorHelper(this._groups.get(key)),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var item = _step.value;

                if (hideSelected && (item.parent && item.parent.selected || item.selected)) {
                  continue;
                }
                /** @type {?} */


                var searchItem = this._ngSelect.searchFn ? item.value : item;

                if (match(term, searchItem)) {
                  matchedItems.push(item);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            if (matchedItems.length > 0) {
              (function () {
                var _this3$_filteredItems;

                var _matchedItems$slice = matchedItems.slice(-1),
                    _matchedItems$slice2 = _slicedToArray(_matchedItems$slice, 1),
                    last = _matchedItems$slice2[0];

                if (last.parent) {
                  /** @type {?} */
                  var head = _this3._items.find(
                  /**
                  * @param {?} x
                  * @return {?}
                  */
                  function (x) {
                    return x === last.parent;
                  });

                  _this3._filteredItems.push(head);
                }

                (_this3$_filteredItems = _this3._filteredItems).push.apply(_this3$_filteredItems, matchedItems);
              })();
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "resetFilteredItems",
        value: function resetFilteredItems() {
          if (this._filteredItems.length === this._items.length) {
            return;
          }

          if (this._ngSelect.hideSelected && this.selectedItems.length > 0) {
            this._filteredItems = this._items.filter(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return !x.selected;
            });
          } else {
            this._filteredItems = this._items;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "unmarkItem",
        value: function unmarkItem() {
          this._markedIndex = -1;
        }
        /**
         * @return {?}
         */

      }, {
        key: "markNextItem",
        value: function markNextItem() {
          this._stepToItem(+1);
        }
        /**
         * @return {?}
         */

      }, {
        key: "markPreviousItem",
        value: function markPreviousItem() {
          this._stepToItem(-1);
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "markItem",
        value: function markItem(item) {
          this._markedIndex = this._filteredItems.indexOf(item);
        }
        /**
         * @param {?=} markDefault
         * @return {?}
         */

      }, {
        key: "markSelectedOrDefault",
        value: function markSelectedOrDefault(markDefault) {
          if (this._filteredItems.length === 0) {
            return;
          }
          /** @type {?} */


          var lastMarkedIndex = this._getLastMarkedIndex();

          if (lastMarkedIndex > -1) {
            this._markedIndex = lastMarkedIndex;
          } else {
            this._markedIndex = markDefault ? this.filteredItems.findIndex(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return !x.disabled;
            }) : -1;
          }
        }
        /**
         * @param {?} option
         * @param {?} key
         * @return {?}
         */

      }, {
        key: "resolveNested",
        value: function resolveNested(option, key) {
          if (!isObject(option)) {
            return option;
          }

          if (key.indexOf('.') === -1) {
            return option[key];
          } else {
            /** @type {?} */
            var keys = key.split('.');
            /** @type {?} */

            var value = option;

            for (var i = 0, len = keys.length; i < len; ++i) {
              if (value == null) {
                return null;
              }

              value = value[keys[i]];
            }

            return value;
          }
        }
        /**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "mapItem",
        value: function mapItem(item, index) {
          /** @type {?} */
          var label = isDefined(item.$ngOptionLabel) ? item.$ngOptionLabel : this.resolveNested(item, this._ngSelect.bindLabel);
          /** @type {?} */

          var value = isDefined(item.$ngOptionValue) ? item.$ngOptionValue : item;
          return {
            index: index,
            label: isDefined(label) ? label.toString() : '',
            value: value,
            disabled: item.disabled,
            htmlId: "".concat(this._ngSelect.dropdownId, "-").concat(index)
          };
        }
        /**
         * @return {?}
         */

      }, {
        key: "mapSelectedItems",
        value: function mapSelectedItems() {
          var _this4 = this;

          /** @type {?} */
          var multiple = this._ngSelect.multiple;

          var _iterator2 = _createForOfIteratorHelper(this.selectedItems),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var selected = _step2.value;

              /** @type {?} */
              var value = this._ngSelect.bindValue ? this.resolveNested(selected.value, this._ngSelect.bindValue) : selected.value;
              /** @type {?} */

              var item = isDefined(value) ? this.findItem(value) : null;

              this._selectionModel.unselect(selected, multiple);

              this._selectionModel.select(item || selected, multiple, this._ngSelect.selectableGroupAsModel);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          if (this._ngSelect.hideSelected) {
            this._filteredItems = this.filteredItems.filter(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return _this4.selectedItems.indexOf(x) === -1;
            });
          }
        }
        /**
         * @private
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "_showSelected",
        value: function _showSelected(item) {
          this._filteredItems.push(item);

          if (item.parent) {
            /** @type {?} */
            var _parent = item.parent;
            /** @type {?} */

            var parentExists = this._filteredItems.find(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x === _parent;
            });

            if (!parentExists) {
              this._filteredItems.push(_parent);
            }
          } else if (item.children) {
            var _iterator3 = _createForOfIteratorHelper(item.children),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var child = _step3.value;
                child.selected = false;

                this._filteredItems.push(child);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }

          this._filteredItems = _toConsumableArray(this._filteredItems.sort(
          /**
          * @param {?} a
          * @param {?} b
          * @return {?}
          */
          function (a, b) {
            return a.index - b.index;
          }));
        }
        /**
         * @private
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "_hideSelected",
        value: function _hideSelected(item) {
          this._filteredItems = this._filteredItems.filter(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x !== item;
          });

          if (item.parent) {
            /** @type {?} */
            var children = item.parent.children;

            if (children.every(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x.selected;
            })) {
              this._filteredItems = this._filteredItems.filter(
              /**
              * @param {?} x
              * @return {?}
              */
              function (x) {
                return x !== item.parent;
              });
            }
          } else if (item.children) {
            this._filteredItems = this.filteredItems.filter(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x.parent !== item;
            });
          }
        }
        /**
         * @private
         * @param {?} search
         * @param {?} opt
         * @return {?}
         */

      }, {
        key: "_defaultSearchFn",
        value: function _defaultSearchFn(search, opt) {
          /** @type {?} */
          var label = stripSpecialChars(opt.label).toLocaleLowerCase();
          return label.indexOf(search) > -1;
        }
        /**
         * @private
         * @param {?} steps
         * @return {?}
         */

      }, {
        key: "_getNextItemIndex",
        value: function _getNextItemIndex(steps) {
          if (steps > 0) {
            return this._markedIndex === this._filteredItems.length - 1 ? 0 : this._markedIndex + 1;
          }

          return this._markedIndex <= 0 ? this._filteredItems.length - 1 : this._markedIndex - 1;
        }
        /**
         * @private
         * @param {?} steps
         * @return {?}
         */

      }, {
        key: "_stepToItem",
        value: function _stepToItem(steps) {
          if (this._filteredItems.length === 0 || this._filteredItems.every(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x.disabled;
          })) {
            return;
          }

          this._markedIndex = this._getNextItemIndex(steps);

          if (this.markedItem.disabled) {
            this._stepToItem(steps);
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_getLastMarkedIndex",
        value: function _getLastMarkedIndex() {
          if (this._ngSelect.hideSelected) {
            return -1;
          }

          if (this._markedIndex > -1 && this.markedItem === undefined) {
            return -1;
          }
          /** @type {?} */


          var selectedIndex = this._filteredItems.indexOf(this.lastSelectedItem);

          if (this.lastSelectedItem && selectedIndex < 0) {
            return -1;
          }

          return Math.max(this.markedIndex, selectedIndex);
        }
        /**
         * @private
         * @param {?} items
         * @param {?} prop
         * @return {?}
         */

      }, {
        key: "_groupBy",
        value: function _groupBy(items, prop) {
          var _this5 = this;

          /** @type {?} */
          var groups = new Map();

          if (items.length === 0) {
            return groups;
          } // Check if items are already grouped by given key.


          if (Array.isArray(items[0].value[
          /** @type {?} */
          prop])) {
            var _iterator4 = _createForOfIteratorHelper(items),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var item = _step4.value;

                /** @type {?} */
                var children = (item.value[
                /** @type {?} */
                prop] || []).map(
                /**
                * @param {?} x
                * @param {?} index
                * @return {?}
                */
                function (x, index) {
                  return _this5.mapItem(x, index);
                });
                groups.set(item, children);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            return groups;
          }
          /** @type {?} */


          var isFnKey = isFunction(this._ngSelect.groupBy);
          /** @type {?} */

          var keyFn =
          /**
          * @param {?} item
          * @return {?}
          */
          function keyFn(item) {
            /** @type {?} */
            var key = isFnKey ?
            /** @type {?} */
            prop(item.value) : item.value[
            /** @type {?} */
            prop];
            return isDefined(key) ? key : undefined;
          }; // Group items by key.


          var _iterator5 = _createForOfIteratorHelper(items),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var _item = _step5.value;

              /** @type {?} */
              var key = keyFn(_item);
              /** @type {?} */

              var group = groups.get(key);

              if (group) {
                group.push(_item);
              } else {
                groups.set(key, [_item]);
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          return groups;
        }
        /**
         * @private
         * @param {?} groups
         * @return {?}
         */

      }, {
        key: "_flatten",
        value: function _flatten(groups) {
          var _this6 = this;

          /** @type {?} */
          var isGroupByFn = isFunction(this._ngSelect.groupBy);
          /** @type {?} */

          var items = [];

          var _loop = function _loop() {
            var key = _Array$from2[_i2];

            /** @type {?} */
            var i = items.length;

            if (key === undefined) {
              /** @type {?} */
              var withoutGroup = groups.get(undefined) || [];
              items.push.apply(items, _toConsumableArray(withoutGroup.map(
              /**
              * @param {?} x
              * @return {?}
              */
              function (x) {
                return Object.assign({}, x, {
                  index: i++
                });
              })));
              return "continue";
            }
            /** @type {?} */


            var isObjectKey = isObject(key);
            /** @type {?} */

            var parent = {
              label: isObjectKey ? '' : String(key),
              children: undefined,
              parent: null,
              index: i++,
              disabled: !_this6._ngSelect.selectableGroup,
              htmlId: newId()
            };
            /** @type {?} */

            var groupKey = isGroupByFn ? _this6._ngSelect.bindLabel :
            /** @type {?} */
            _this6._ngSelect.groupBy;
            /** @type {?} */

            var groupValue = _this6._ngSelect.groupValue ||
            /**
            * @return {?}
            */
            function () {
              if (isObjectKey) {
                return (
                  /** @type {?} */
                  key.value
                );
              }

              return _defineProperty({}, groupKey, key);
            };
            /** @type {?} */


            var children = groups.get(key).map(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              x.parent = parent;
              x.children = undefined;
              x.index = i++;
              return x;
            });
            parent.children = children;
            parent.value = groupValue(key, children.map(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x.value;
            }));
            items.push(parent);
            items.push.apply(items, _toConsumableArray(children));
          };

          for (var _i2 = 0, _Array$from2 = Array.from(groups.keys()); _i2 < _Array$from2.length; _i2++) {
            var _ret = _loop();

            if (_ret === "continue") continue;
          }

          return items;
        }
      }, {
        key: "items",
        get: function get() {
          return this._items;
        }
        /**
         * @return {?}
         */

      }, {
        key: "filteredItems",
        get: function get() {
          return this._filteredItems;
        }
        /**
         * @return {?}
         */

      }, {
        key: "markedIndex",
        get: function get() {
          return this._markedIndex;
        }
        /**
         * @return {?}
         */

      }, {
        key: "selectedItems",
        get: function get() {
          return this._selectionModel.value;
        }
        /**
         * @return {?}
         */

      }, {
        key: "markedItem",
        get: function get() {
          return this._filteredItems[this._markedIndex];
        }
        /**
         * @return {?}
         */

      }, {
        key: "noItemsToSelect",
        get: function get() {
          return this._ngSelect.hideSelected && this._items.length === this.selectedItems.length;
        }
        /**
         * @return {?}
         */

      }, {
        key: "maxItemsSelected",
        get: function get() {
          return this._ngSelect.multiple && this._ngSelect.maxSelectedItems <= this.selectedItems.length;
        }
        /**
         * @return {?}
         */

      }, {
        key: "lastSelectedItem",
        get: function get() {
          /** @type {?} */
          var i = this.selectedItems.length - 1;

          for (; i >= 0; i--) {
            /** @type {?} */
            var item = this.selectedItems[i];

            if (!item.disabled) {
              return item;
            }
          }

          return null;
        }
      }]);

      return ItemsList;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function NgOption() {}

    if (false) {}
    /** @enum {number} */


    var KeyCode = {
      Tab: 9,
      Enter: 13,
      Esc: 27,
      Space: 32,
      ArrowUp: 38,
      ArrowDown: 40,
      Backspace: 8
    };
    KeyCode[KeyCode.Tab] = 'Tab';
    KeyCode[KeyCode.Enter] = 'Enter';
    KeyCode[KeyCode.Esc] = 'Esc';
    KeyCode[KeyCode.Space] = 'Space';
    KeyCode[KeyCode.ArrowUp] = 'ArrowUp';
    KeyCode[KeyCode.ArrowDown] = 'ArrowDown';
    KeyCode[KeyCode.Backspace] = 'Backspace';
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */

    function ItemsRangeResult() {}

    if (false) {}
    /**
     * @record
     */


    function PanelDimensions() {}

    if (false) {}

    var NgDropdownPanelService = /*#__PURE__*/function () {
      function NgDropdownPanelService() {
        _classCallCheck(this, NgDropdownPanelService);

        this._dimensions = {
          itemHeight: 0,
          panelHeight: 0,
          itemsPerViewport: 0
        };
      }
      /**
       * @return {?}
       */


      _createClass(NgDropdownPanelService, [{
        key: "calculateItems",

        /**
         * @param {?} scrollPos
         * @param {?} itemsLength
         * @param {?} buffer
         * @return {?}
         */
        value: function calculateItems(scrollPos, itemsLength, buffer) {
          /** @type {?} */
          var d = this._dimensions;
          /** @type {?} */

          var scrollHeight = d.itemHeight * itemsLength;
          /** @type {?} */

          var scrollTop = Math.max(0, scrollPos);
          /** @type {?} */

          var indexByScrollTop = scrollTop / scrollHeight * itemsLength;
          /** @type {?} */

          var end = Math.min(itemsLength, Math.ceil(indexByScrollTop) + (d.itemsPerViewport + 1));
          /** @type {?} */

          var maxStartEnd = end;
          /** @type {?} */

          var maxStart = Math.max(0, maxStartEnd - d.itemsPerViewport);
          /** @type {?} */

          var start = Math.min(maxStart, Math.floor(indexByScrollTop));
          /** @type {?} */

          var topPadding = d.itemHeight * Math.ceil(start) - d.itemHeight * Math.min(start, buffer);
          topPadding = !isNaN(topPadding) ? topPadding : 0;
          start = !isNaN(start) ? start : -1;
          end = !isNaN(end) ? end : -1;
          start -= buffer;
          start = Math.max(0, start);
          end += buffer;
          end = Math.min(itemsLength, end);
          return {
            topPadding: topPadding,
            scrollHeight: scrollHeight,
            start: start,
            end: end
          };
        }
        /**
         * @param {?} itemHeight
         * @param {?} panelHeight
         * @return {?}
         */

      }, {
        key: "setDimensions",
        value: function setDimensions(itemHeight, panelHeight) {
          /** @type {?} */
          var itemsPerViewport = Math.max(1, Math.floor(panelHeight / itemHeight));
          this._dimensions = {
            itemHeight: itemHeight,
            panelHeight: panelHeight,
            itemsPerViewport: itemsPerViewport
          };
        }
        /**
         * @param {?} itemTop
         * @param {?} itemHeight
         * @param {?} lastScroll
         * @return {?}
         */

      }, {
        key: "getScrollTo",
        value: function getScrollTo(itemTop, itemHeight, lastScroll) {
          var panelHeight = this.dimensions.panelHeight;
          /** @type {?} */

          var itemBottom = itemTop + itemHeight;
          /** @type {?} */

          var top = lastScroll;
          /** @type {?} */

          var bottom = top + panelHeight;

          if (panelHeight >= itemBottom && lastScroll === itemTop) {
            return null;
          }

          if (itemBottom > bottom) {
            return top + itemBottom - bottom;
          } else if (itemTop <= top) {
            return itemTop;
          }

          return null;
        }
      }, {
        key: "dimensions",
        get: function get() {
          return this._dimensions;
        }
      }]);

      return NgDropdownPanelService;
    }();

    NgDropdownPanelService.ɵfac = function NgDropdownPanelService_Factory(t) {
      return new (t || NgDropdownPanelService)();
    };

    NgDropdownPanelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NgDropdownPanelService,
      factory: NgDropdownPanelService.ɵfac
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var TOP_CSS_CLASS = 'ng-select-top';
    /** @type {?} */

    var BOTTOM_CSS_CLASS = 'ng-select-bottom';
    /** @type {?} */

    var SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_3__["animationFrameScheduler"] : rxjs__WEBPACK_IMPORTED_MODULE_3__["asapScheduler"];

    var NgDropdownPanelComponent = /*#__PURE__*/function () {
      /**
       * @param {?} _renderer
       * @param {?} _zone
       * @param {?} _panelService
       * @param {?} _elementRef
       * @param {?} _document
       */
      function NgDropdownPanelComponent(_renderer, _zone, _panelService, _elementRef, _document) {
        _classCallCheck(this, NgDropdownPanelComponent);

        this._renderer = _renderer;
        this._zone = _zone;
        this._panelService = _panelService;
        this._document = _document;
        this.items = [];
        this.position = 'auto';
        this.virtualScroll = false;
        this.filterValue = null;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.outsideClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._scrollToEndFired = false;
        this._updateScrollHeight = false;
        this._lastScrollPosition = 0;
        this._dropdown = _elementRef.nativeElement;
      }
      /**
       * @return {?}
       */


      _createClass(NgDropdownPanelComponent, [{
        key: "handleMousedown",

        /**
         * @param {?} $event
         * @return {?}
         */
        value: function handleMousedown($event) {
          /** @type {?} */
          var target =
          /** @type {?} */
          $event.target;

          if (target.tagName === 'INPUT') {
            return;
          }

          $event.preventDefault();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this._select = this._dropdown.parentElement;
          this._virtualPadding = this.paddingElementRef.nativeElement;
          this._scrollablePanel = this.scrollElementRef.nativeElement;
          this._contentPanel = this.contentElementRef.nativeElement;

          this._handleScroll();

          this._handleOutsideClick();

          this._appendDropdown();
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.items) {
            /** @type {?} */
            var change = changes.items;

            this._onItemsChange(change.currentValue, change.firstChange);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroy$.next();

          this._destroy$.complete();

          this._destroy$.unsubscribe();

          if (this.appendTo) {
            this._renderer.removeChild(this._dropdown.parentNode, this._dropdown);
          }
        }
        /**
         * @param {?} option
         * @param {?=} startFromOption
         * @return {?}
         */

      }, {
        key: "scrollTo",
        value: function scrollTo(option) {
          var startFromOption = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          if (!option) {
            return;
          }
          /** @type {?} */


          var index = this.items.indexOf(option);

          if (index < 0 || index >= this.itemsLength) {
            return;
          }
          /** @type {?} */


          var scrollTo;

          if (this.virtualScroll) {
            /** @type {?} */
            var itemHeight = this._panelService.dimensions.itemHeight;
            scrollTo = this._panelService.getScrollTo(index * itemHeight, itemHeight, this._lastScrollPosition);
          } else {
            /** @type {?} */
            var item = this._dropdown.querySelector("#".concat(option.htmlId));
            /** @type {?} */


            var lastScroll = startFromOption ? item.offsetTop : this._lastScrollPosition;
            scrollTo = this._panelService.getScrollTo(item.offsetTop, item.clientHeight, lastScroll);
          }

          if (isDefined(scrollTo)) {
            this._scrollablePanel.scrollTop = scrollTo;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "scrollToTag",
        value: function scrollToTag() {
          /** @type {?} */
          var panel = this._scrollablePanel;
          panel.scrollTop = panel.scrollHeight - panel.clientHeight;
        }
        /**
         * @return {?}
         */

      }, {
        key: "adjustPosition",
        value: function adjustPosition() {
          /** @type {?} */
          var parent = this._parent.getBoundingClientRect();
          /** @type {?} */


          var select = this._select.getBoundingClientRect();

          this._setOffset(parent, select);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_handleDropdownPosition",
        value: function _handleDropdownPosition() {
          this._currentPosition = this._calculateCurrentPosition(this._dropdown);

          if (this._currentPosition === 'top') {
            this._renderer.addClass(this._dropdown, TOP_CSS_CLASS);

            this._renderer.removeClass(this._dropdown, BOTTOM_CSS_CLASS);

            this._renderer.addClass(this._select, TOP_CSS_CLASS);

            this._renderer.removeClass(this._select, BOTTOM_CSS_CLASS);
          } else {
            this._renderer.addClass(this._dropdown, BOTTOM_CSS_CLASS);

            this._renderer.removeClass(this._dropdown, TOP_CSS_CLASS);

            this._renderer.addClass(this._select, BOTTOM_CSS_CLASS);

            this._renderer.removeClass(this._select, TOP_CSS_CLASS);
          }

          if (this.appendTo) {
            this._updatePosition();
          }

          this._dropdown.style.opacity = '1';
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_handleScroll",
        value: function _handleScroll() {
          var _this7 = this;

          this._zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(_this7.scrollElementRef.nativeElement, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this7._destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["auditTime"])(0, SCROLL_SCHEDULER)).subscribe(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              return _this7._onContentScrolled(e.target.scrollTop);
            });
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_handleOutsideClick",
        value: function _handleOutsideClick() {
          var _this8 = this;

          if (!this._document) {
            return;
          }

          this._zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(_this8._document, 'touchstart', {
              capture: true
            }), Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(_this8._document, 'mousedown', {
              capture: true
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this8._destroy$)).subscribe(
            /**
            * @param {?} $event
            * @return {?}
            */
            function ($event) {
              return _this8._checkToClose($event);
            });
          });
        }
        /**
         * @private
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "_checkToClose",
        value: function _checkToClose($event) {
          var _this9 = this;

          if (this._select.contains($event.target) || this._dropdown.contains($event.target)) {
            return;
          }
          /** @type {?} */


          var path = $event.path || $event.composedPath && $event.composedPath();

          if ($event.target && $event.target.shadowRoot && path && path[0] && this._select.contains(path[0])) {
            return;
          }

          this._zone.run(
          /**
          * @return {?}
          */
          function () {
            return _this9.outsideClick.emit();
          });
        }
        /**
         * @private
         * @param {?} items
         * @param {?} firstChange
         * @return {?}
         */

      }, {
        key: "_onItemsChange",
        value: function _onItemsChange(items, firstChange) {
          this.items = items || [];
          this._scrollToEndFired = false;
          this.itemsLength = items.length;

          if (this.virtualScroll) {
            this._updateItemsRange(firstChange);
          } else {
            this._updateItems(firstChange);
          }
        }
        /**
         * @private
         * @param {?} firstChange
         * @return {?}
         */

      }, {
        key: "_updateItems",
        value: function _updateItems(firstChange) {
          var _this10 = this;

          this.update.emit(this.items);

          if (firstChange === false) {
            return;
          }

          this._zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            Promise.resolve().then(
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var panelHeight = _this10._scrollablePanel.clientHeight;

              _this10._panelService.setDimensions(0, panelHeight);

              _this10._handleDropdownPosition();

              _this10.scrollTo(_this10.markedItem, firstChange);
            });
          });
        }
        /**
         * @private
         * @param {?} firstChange
         * @return {?}
         */

      }, {
        key: "_updateItemsRange",
        value: function _updateItemsRange(firstChange) {
          var _this11 = this;

          this._zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this11._measureDimensions().then(
            /**
            * @return {?}
            */
            function () {
              if (firstChange) {
                _this11._renderItemsRange(_this11._startOffset);

                _this11._handleDropdownPosition();
              } else {
                _this11._renderItemsRange();
              }
            });
          });
        }
        /**
         * @private
         * @param {?} scrollTop
         * @return {?}
         */

      }, {
        key: "_onContentScrolled",
        value: function _onContentScrolled(scrollTop) {
          if (this.virtualScroll) {
            this._renderItemsRange(scrollTop);
          }

          this._lastScrollPosition = scrollTop;

          this._fireScrollToEnd(scrollTop);
        }
        /**
         * @private
         * @param {?} height
         * @return {?}
         */

      }, {
        key: "_updateVirtualHeight",
        value: function _updateVirtualHeight(height) {
          if (this._updateScrollHeight) {
            this._virtualPadding.style.height = "".concat(height, "px");
            this._updateScrollHeight = false;
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_onItemsLengthChanged",
        value: function _onItemsLengthChanged() {
          this._updateScrollHeight = true;
        }
        /**
         * @private
         * @param {?=} scrollTop
         * @return {?}
         */

      }, {
        key: "_renderItemsRange",
        value: function _renderItemsRange() {
          var _this12 = this;

          var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

          if (scrollTop && this._lastScrollPosition === scrollTop) {
            return;
          }

          scrollTop = scrollTop || this._scrollablePanel.scrollTop;
          /** @type {?} */

          var range = this._panelService.calculateItems(scrollTop, this.itemsLength, this.bufferAmount);

          this._updateVirtualHeight(range.scrollHeight);

          this._contentPanel.style.transform = "translateY(".concat(range.topPadding, "px)");

          this._zone.run(
          /**
          * @return {?}
          */
          function () {
            _this12.update.emit(_this12.items.slice(range.start, range.end));

            _this12.scroll.emit({
              start: range.start,
              end: range.end
            });
          });

          if (isDefined(scrollTop) && this._lastScrollPosition === 0) {
            this._scrollablePanel.scrollTop = scrollTop;
            this._lastScrollPosition = scrollTop;
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_measureDimensions",
        value: function _measureDimensions() {
          var _this13 = this;

          if (this._panelService.dimensions.itemHeight > 0 || this.itemsLength === 0) {
            return Promise.resolve(this._panelService.dimensions);
          }

          var _this$items = _slicedToArray(this.items, 1),
              first = _this$items[0];

          this.update.emit([first]);
          return Promise.resolve().then(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var option = _this13._dropdown.querySelector("#".concat(first.htmlId));
            /** @type {?} */


            var optionHeight = option.clientHeight;
            _this13._virtualPadding.style.height = "".concat(optionHeight * _this13.itemsLength, "px");
            /** @type {?} */

            var panelHeight = _this13._scrollablePanel.clientHeight;

            _this13._panelService.setDimensions(optionHeight, panelHeight);

            return _this13._panelService.dimensions;
          });
        }
        /**
         * @private
         * @param {?} scrollTop
         * @return {?}
         */

      }, {
        key: "_fireScrollToEnd",
        value: function _fireScrollToEnd(scrollTop) {
          var _this14 = this;

          if (this._scrollToEndFired || scrollTop === 0) {
            return;
          }
          /** @type {?} */


          var padding = this.virtualScroll ? this._virtualPadding : this._contentPanel;

          if (scrollTop + this._dropdown.clientHeight >= padding.clientHeight) {
            this._zone.run(
            /**
            * @return {?}
            */
            function () {
              return _this14.scrollToEnd.emit();
            });

            this._scrollToEndFired = true;
          }
        }
        /**
         * @private
         * @param {?} dropdownEl
         * @return {?}
         */

      }, {
        key: "_calculateCurrentPosition",
        value: function _calculateCurrentPosition(dropdownEl) {
          if (this.position !== 'auto') {
            return this.position;
          }
          /** @type {?} */


          var selectRect = this._select.getBoundingClientRect();
          /** @type {?} */


          var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          /** @type {?} */

          var offsetTop = selectRect.top + window.pageYOffset;
          /** @type {?} */

          var height = selectRect.height;
          /** @type {?} */

          var dropdownHeight = dropdownEl.getBoundingClientRect().height;

          if (offsetTop + height + dropdownHeight > scrollTop + document.documentElement.clientHeight) {
            return 'top';
          } else {
            return 'bottom';
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_appendDropdown",
        value: function _appendDropdown() {
          if (!this.appendTo) {
            return;
          }

          this._parent = document.querySelector(this.appendTo);

          if (!parent) {
            throw new Error("appendTo selector ".concat(this.appendTo, " did not found any parent element"));
          }

          this._parent.appendChild(this._dropdown);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_updatePosition",
        value: function _updatePosition() {
          /** @type {?} */
          var select = this._select.getBoundingClientRect();
          /** @type {?} */


          var parent = this._parent.getBoundingClientRect();
          /** @type {?} */


          var offsetLeft = select.left - parent.left;

          this._setOffset(parent, select);

          this._dropdown.style.left = offsetLeft + 'px';
          this._dropdown.style.width = select.width + 'px';
          this._dropdown.style.minWidth = select.width + 'px';
        }
        /**
         * @private
         * @param {?} parent
         * @param {?} select
         * @return {?}
         */

      }, {
        key: "_setOffset",
        value: function _setOffset(parent, select) {
          /** @type {?} */
          var delta = select.height;

          if (this._currentPosition === 'top') {
            /** @type {?} */
            var offsetBottom = parent.bottom - select.bottom;
            this._dropdown.style.bottom = offsetBottom + delta + 'px';
            this._dropdown.style.top = 'auto';
          } else if (this._currentPosition === 'bottom') {
            /** @type {?} */
            var offsetTop = select.top - parent.top;
            this._dropdown.style.top = offsetTop + delta + 'px';
            this._dropdown.style.bottom = 'auto';
          }
        }
      }, {
        key: "currentPosition",
        get: function get() {
          return this._currentPosition;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "itemsLength",
        get: function get() {
          return this._itemsLength;
        }
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (value !== this._itemsLength) {
            this._itemsLength = value;

            this._onItemsLengthChanged();
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_startOffset",
        get: function get() {
          if (this.markedItem) {
            var _this$_panelService$d = this._panelService.dimensions,
                itemHeight = _this$_panelService$d.itemHeight,
                panelHeight = _this$_panelService$d.panelHeight;
            /** @type {?} */

            var offset = this.markedItem.index * itemHeight;
            return panelHeight > offset ? 0 : offset;
          }

          return 0;
        }
      }]);

      return NgDropdownPanelComponent;
    }();

    NgDropdownPanelComponent.ɵfac = function NgDropdownPanelComponent_Factory(t) {
      return new (t || NgDropdownPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgDropdownPanelService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], 8));
    };

    NgDropdownPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NgDropdownPanelComponent,
      selectors: [["ng-dropdown-panel"]],
      viewQuery: function NgDropdownPanelComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c2, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentElementRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollElementRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paddingElementRef = _t.first);
        }
      },
      hostBindings: function NgDropdownPanelComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function NgDropdownPanelComponent_mousedown_HostBindingHandler($event) {
            return ctx.handleMousedown($event);
          });
        }
      },
      inputs: {
        items: "items",
        position: "position",
        virtualScroll: "virtualScroll",
        filterValue: "filterValue",
        markedItem: "markedItem",
        appendTo: "appendTo",
        bufferAmount: "bufferAmount",
        headerTemplate: "headerTemplate",
        footerTemplate: "footerTemplate"
      },
      outputs: {
        update: "update",
        scroll: "scroll",
        scrollToEnd: "scrollToEnd",
        outsideClick: "outsideClick"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c4,
      decls: 9,
      vars: 6,
      consts: [["class", "ng-dropdown-header", 4, "ngIf"], [1, "ng-dropdown-panel-items", "scroll-host"], ["scroll", ""], ["padding", ""], ["content", ""], ["class", "ng-dropdown-footer", 4, "ngIf"], [1, "ng-dropdown-header"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ng-dropdown-footer"]],
      template: function NgDropdownPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgDropdownPanelComponent_div_0_Template, 2, 4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", null, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", null, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NgDropdownPanelComponent_div_8_Template, 2, 4, "div", 5);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headerTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("total-padding", ctx.virtualScroll);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("scrollable-content", ctx.virtualScroll && ctx.items.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footerTemplate);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"]],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    NgDropdownPanelComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: NgDropdownPanelService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }];
    };

    NgDropdownPanelComponent.propDecorators = {
      items: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      markedItem: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      position: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      appendTo: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      bufferAmount: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      virtualScroll: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      headerTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      footerTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      filterValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      update: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      scroll: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      scrollToEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      outsideClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      contentElementRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['content', {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
          "static": true
        }]
      }],
      scrollElementRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['scroll', {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
          "static": true
        }]
      }],
      paddingElementRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['padding', {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
          "static": true
        }]
      }],
      handleMousedown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['mousedown', ['$event']]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgDropdownPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          selector: 'ng-dropdown-panel',
          template: "\n        <div *ngIf=\"headerTemplate\" class=\"ng-dropdown-header\">\n            <ng-container [ngTemplateOutlet]=\"headerTemplate\" [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\"></ng-container>\n        </div>\n        <div #scroll class=\"ng-dropdown-panel-items scroll-host\">\n            <div #padding [class.total-padding]=\"virtualScroll\"></div>\n            <div #content [class.scrollable-content]=\"virtualScroll && items.length\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n        <div *ngIf=\"footerTemplate\" class=\"ng-dropdown-footer\">\n            <ng-container [ngTemplateOutlet]=\"footerTemplate\" [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\"></ng-container>\n        </div>\n    "
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: NgDropdownPanelService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }];
      }, {
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        virtualScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        filterValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        update: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        scroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        scrollToEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        outsideClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        handleMousedown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mousedown', ['$event']]
        }],
        markedItem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        appendTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        bufferAmount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        headerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        footerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        contentElementRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['content', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            "static": true
          }]
        }],
        scrollElementRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['scroll', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            "static": true
          }]
        }],
        paddingElementRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['padding', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            "static": true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NgOptionComponent = /*#__PURE__*/function () {
      /**
       * @param {?} elementRef
       */
      function NgOptionComponent(elementRef) {
        _classCallCheck(this, NgOptionComponent);

        this.elementRef = elementRef;
        this.stateChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._disabled = false;
      }
      /**
       * @return {?}
       */


      _createClass(NgOptionComponent, [{
        key: "ngOnChanges",

        /**
         * @param {?} changes
         * @return {?}
         */
        value: function ngOnChanges(changes) {
          if (changes.disabled) {
            this.stateChange$.next({
              value: this.value,
              disabled: this._disabled
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          if (this.label !== this._previousLabel) {
            this._previousLabel = this.label;
            this.stateChange$.next({
              value: this.value,
              disabled: this._disabled,
              label: this.elementRef.nativeElement.innerHTML
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.stateChange$.complete();
        }
        /**
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_isDisabled",
        value: function _isDisabled(value) {
          return value != null && "".concat(value) !== 'false';
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = this._isDisabled(value);
        }
        /**
         * @return {?}
         */

      }, {
        key: "label",
        get: function get() {
          return (this.elementRef.nativeElement.textContent || '').trim();
        }
      }]);

      return NgOptionComponent;
    }();

    NgOptionComponent.ɵfac = function NgOptionComponent_Factory(t) {
      return new (t || NgOptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    NgOptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NgOptionComponent,
      selectors: [["ng-option"]],
      inputs: {
        disabled: "disabled",
        value: "value"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c4,
      decls: 1,
      vars: 0,
      template: function NgOptionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    NgOptionComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    NgOptionComponent.propDecorators = {
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ng-option',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          template: "<ng-content></ng-content>"
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NgSelectConfig = function NgSelectConfig() {
      _classCallCheck(this, NgSelectConfig);

      this.notFoundText = 'No items found';
      this.typeToSearchText = 'Type to search';
      this.addTagText = 'Add item';
      this.loadingText = 'Loading...';
      this.clearAllText = 'Clear all';
      this.disableVirtualScroll = true;
      this.openOnEnter = true;
      this.appearance = 'underline';
    };

    NgSelectConfig.ɵfac = function NgSelectConfig_Factory(t) {
      return new (t || NgSelectConfig)();
    };

    NgSelectConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NgSelectConfig,
      factory: NgSelectConfig.ɵfac,
      providedIn: 'root'
    });
    /** @nocollapse */

    NgSelectConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function NgSelectConfig_Factory() {
        return new NgSelectConfig();
      },
      token: NgSelectConfig,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelectConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var SELECTION_MODEL_FACTORY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('ng-select-selection-model');

    var NgSelectComponent = /*#__PURE__*/function () {
      /**
       * @param {?} classes
       * @param {?} autoFocus
       * @param {?} config
       * @param {?} newSelectionModel
       * @param {?} _elementRef
       * @param {?} _cd
       * @param {?} _console
       */
      function NgSelectComponent(classes, autoFocus, config, newSelectionModel, _elementRef, _cd, _console) {
        var _this15 = this;

        _classCallCheck(this, NgSelectComponent);

        this.classes = classes;
        this.autoFocus = autoFocus;
        this._cd = _cd;
        this._console = _console;
        this.markFirst = true;
        this.dropdownPosition = 'auto';
        this.loading = false;
        this.closeOnSelect = true;
        this.hideSelected = false;
        this.selectOnTab = false;
        this.bufferAmount = 4;
        this.selectableGroup = false;
        this.selectableGroupAsModel = true;
        this.searchFn = null;
        this.trackByFn = null;
        this.clearOnBackspace = true;
        this.labelForId = null;
        this.inputAttrs = {};
        this.readonly = false;
        this.searchWhileComposing = true;
        this.minTermLength = 0;
        this.editableSearchTerm = false;

        this.keyDownFn =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {
          return true;
        };

        this.multiple = false;
        this.addTag = false;
        this.searchable = true;
        this.clearable = true;
        this.isOpen = false; // output events

        this.blurEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.focusEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.openEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clearEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.viewPortItems = [];
        this.searchTerm = null;
        this.dropdownId = newId();
        this.escapeHTML = true;
        this.useDefaultClass = true;
        this._items = [];
        this._defaultLabel = 'label';
        this._pressedKeys = [];
        this._isComposing = false;
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._keyPress$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();

        this._onChange =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {};

        this._onTouched =
        /**
        * @return {?}
        */
        function () {};

        this.clearItem =
        /**
        * @param {?} item
        * @return {?}
        */
        function (item) {
          /** @type {?} */
          var option = _this15.selectedItems.find(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x.value === item;
          });

          _this15.unselect(option);
        };

        this.trackByOption =
        /**
        * @param {?} _
        * @param {?} item
        * @return {?}
        */
        function (_, item) {
          if (_this15.trackByFn) {
            return _this15.trackByFn(item.value);
          }

          return item;
        };

        this._mergeGlobalConfig(config);

        this.itemsList = new ItemsList(this, newSelectionModel());
        this.element = _elementRef.nativeElement;
      }
      /**
       * @return {?}
       */


      _createClass(NgSelectComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this._handleKeyPresses();

          this._setInputAttributes();
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.multiple) {
            this.itemsList.clearSelected();
          }

          if (changes.items) {
            this._setItems(changes.items.currentValue || []);
          }

          if (changes.isOpen) {
            this._manualOpen = isDefined(changes.isOpen.currentValue);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (!this._itemsAreUsed) {
            this.escapeHTML = false;

            this._setItemsFromNgOptions();
          }

          if (isDefined(this.autoFocus)) {
            this.focus();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroy$.next();

          this._destroy$.complete();
        }
        /**
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "handleKeyDown",
        value: function handleKeyDown($event) {
          /** @type {?} */
          var keyCode = KeyCode[$event.which];

          if (keyCode) {
            if (this.keyDownFn($event) === false) {
              return;
            }

            this.handleKeyCode($event);
          } else if ($event.key && $event.key.length === 1) {
            this._keyPress$.next($event.key.toLocaleLowerCase());
          }
        }
        /**
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "handleKeyCode",
        value: function handleKeyCode($event) {
          switch ($event.which) {
            case KeyCode.ArrowDown:
              this._handleArrowDown($event);

              break;

            case KeyCode.ArrowUp:
              this._handleArrowUp($event);

              break;

            case KeyCode.Space:
              this._handleSpace($event);

              break;

            case KeyCode.Enter:
              this._handleEnter($event);

              break;

            case KeyCode.Tab:
              this._handleTab($event);

              break;

            case KeyCode.Esc:
              this.close();
              $event.preventDefault();
              break;

            case KeyCode.Backspace:
              this._handleBackspace();

              break;
          }
        }
        /**
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "handleMousedown",
        value: function handleMousedown($event) {
          /** @type {?} */
          var target =
          /** @type {?} */
          $event.target;

          if (target.tagName !== 'INPUT') {
            $event.preventDefault();
          }

          if (target.classList.contains('ng-clear-wrapper')) {
            this.handleClearClick();
            return;
          }

          if (target.classList.contains('ng-arrow-wrapper')) {
            this.handleArrowClick();
            return;
          }

          if (target.classList.contains('ng-value-icon')) {
            return;
          }

          if (!this.focused) {
            this.focus();
          }

          if (this.searchable) {
            this.open();
          } else {
            this.toggle();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "handleArrowClick",
        value: function handleArrowClick() {
          if (this.isOpen) {
            this.close();
          } else {
            this.open();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "handleClearClick",
        value: function handleClearClick() {
          if (this.hasValue) {
            this.itemsList.clearSelected(true);

            this._updateNgModel();
          }

          this._clearSearch();

          this.focus();
          this.clearEvent.emit();

          this._onSelectionChanged();
        }
        /**
         * @return {?}
         */

      }, {
        key: "clearModel",
        value: function clearModel() {
          if (!this.clearable) {
            return;
          }

          this.itemsList.clearSelected();

          this._updateNgModel();
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.itemsList.clearSelected();

          this._handleWriteValue(value);

          this._cd.markForCheck();
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._onChange = fn;
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this._onTouched = fn;
        }
        /**
         * @param {?} state
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(state) {
          this._disabled = state;

          this._cd.markForCheck();
        }
        /**
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          if (!this.isOpen) {
            this.open();
          } else {
            this.close();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "open",
        value: function open() {
          if (this.disabled || this.isOpen || this.itemsList.maxItemsSelected || this._manualOpen) {
            return;
          }

          if (!this._isTypeahead && !this.addTag && this.itemsList.noItemsToSelect) {
            return;
          }

          this.isOpen = true;
          this.itemsList.markSelectedOrDefault(this.markFirst);
          this.openEvent.emit();

          if (!this.searchTerm) {
            this.focus();
          }

          this.detectChanges();
        }
        /**
         * @return {?}
         */

      }, {
        key: "close",
        value: function close() {
          if (!this.isOpen || this._manualOpen) {
            return;
          }

          this.isOpen = false;

          if (!this._editableSearchTerm) {
            this._clearSearch();
          } else {
            this.itemsList.resetFilteredItems();
          }

          this.itemsList.unmarkItem();

          this._onTouched();

          this.closeEvent.emit();

          this._cd.markForCheck();
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "toggleItem",
        value: function toggleItem(item) {
          if (!item || item.disabled || this.disabled) {
            return;
          }

          if (this.multiple && item.selected) {
            this.unselect(item);
          } else {
            this.select(item);
          }

          if (this._editableSearchTerm) {
            this._setSearchTermFromItems();
          }

          this._onSelectionChanged();
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "select",
        value: function select(item) {
          if (!item.selected) {
            this.itemsList.select(item);

            if (this.clearSearchOnAdd && !this._editableSearchTerm) {
              this._clearSearch();
            }

            this._updateNgModel();

            if (this.multiple) {
              this.addEvent.emit(item.value);
            }
          }

          if (this.closeOnSelect || this.itemsList.noItemsToSelect) {
            this.close();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          this.searchInput.nativeElement.focus();
        }
        /**
         * @return {?}
         */

      }, {
        key: "blur",
        value: function blur() {
          this.searchInput.nativeElement.blur();
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "unselect",
        value: function unselect(item) {
          if (!item) {
            return;
          }

          this.itemsList.unselect(item);
          this.focus();

          this._updateNgModel();

          this.removeEvent.emit(item);
        }
        /**
         * @return {?}
         */

      }, {
        key: "selectTag",
        value: function selectTag() {
          var _this16 = this;

          /** @type {?} */
          var tag;

          if (isFunction(this.addTag)) {
            tag =
            /** @type {?} */
            this.addTag(this.searchTerm);
          } else {
            tag = this._primitive ? this.searchTerm : _defineProperty({}, this.bindLabel, this.searchTerm);
          }
          /** @type {?} */


          var handleTag =
          /**
          * @param {?} item
          * @return {?}
          */
          function handleTag(item) {
            return _this16._isTypeahead || !_this16.isOpen ? _this16.itemsList.mapItem(item, null) : _this16.itemsList.addItem(item);
          };

          if (isPromise(tag)) {
            tag.then(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return _this16.select(handleTag(item));
            })["catch"](
            /**
            * @return {?}
            */
            function () {});
          } else if (tag) {
            this.select(handleTag(tag));
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "showClear",
        value: function showClear() {
          return this.clearable && (this.hasValue || this.searchTerm) && !this.disabled;
        }
        /**
         * @return {?}
         */

      }, {
        key: "showNoItemsFound",

        /**
         * @return {?}
         */
        value: function showNoItemsFound() {
          /** @type {?} */
          var empty = this.itemsList.filteredItems.length === 0;
          return (empty && !this._isTypeahead && !this.loading || empty && this._isTypeahead && this._validTerm && !this.loading) && !this.showAddTag;
        }
        /**
         * @return {?}
         */

      }, {
        key: "showTypeToSearch",
        value: function showTypeToSearch() {
          /** @type {?} */
          var empty = this.itemsList.filteredItems.length === 0;
          return empty && this._isTypeahead && !this._validTerm && !this.loading;
        }
        /**
         * @return {?}
         */

      }, {
        key: "onCompositionStart",
        value: function onCompositionStart() {
          this._isComposing = true;
        }
        /**
         * @param {?} term
         * @return {?}
         */

      }, {
        key: "onCompositionEnd",
        value: function onCompositionEnd(term) {
          this._isComposing = false;

          if (this.searchWhileComposing) {
            return;
          }

          this.filter(term);
        }
        /**
         * @param {?} term
         * @return {?}
         */

      }, {
        key: "filter",
        value: function filter(term) {
          if (this._isComposing && !this.searchWhileComposing) {
            return;
          }

          this.searchTerm = term;

          if (this._isTypeahead && (this._validTerm || this.minTermLength === 0)) {
            this.typeahead.next(term);
          }

          if (!this._isTypeahead) {
            this.itemsList.filter(this.searchTerm);

            if (this.isOpen) {
              this.itemsList.markSelectedOrDefault(this.markFirst);
            }
          }

          this.searchEvent.emit({
            term: term,
            items: this.itemsList.filteredItems.map(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x.value;
            })
          });
          this.open();
        }
        /**
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "onInputFocus",
        value: function onInputFocus($event) {
          if (this.focused) {
            return;
          }

          if (this._editableSearchTerm) {
            this._setSearchTermFromItems();
          }

          this.element.classList.add('ng-select-focused');
          this.focusEvent.emit($event);
          this.focused = true;
        }
        /**
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "onInputBlur",
        value: function onInputBlur($event) {
          this.element.classList.remove('ng-select-focused');
          this.blurEvent.emit($event);

          if (!this.isOpen && !this.disabled) {
            this._onTouched();
          }

          if (this._editableSearchTerm) {
            this._setSearchTermFromItems();
          }

          this.focused = false;
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "onItemHover",
        value: function onItemHover(item) {
          if (item.disabled) {
            return;
          }

          this.itemsList.markItem(item);
        }
        /**
         * @return {?}
         */

      }, {
        key: "detectChanges",
        value: function detectChanges() {
          if (!
          /** @type {?} */
          this._cd.destroyed) {
            this._cd.detectChanges();
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_setSearchTermFromItems",
        value: function _setSearchTermFromItems() {
          /** @type {?} */
          var selected = this.selectedItems && this.selectedItems[0];
          this.searchTerm = selected && selected.label || null;
        }
        /**
         * @private
         * @param {?} items
         * @return {?}
         */

      }, {
        key: "_setItems",
        value: function _setItems(items) {
          /** @type {?} */
          var firstItem = items[0];
          this.bindLabel = this.bindLabel || this._defaultLabel;
          this._primitive = isDefined(firstItem) ? !isObject(firstItem) : this._primitive || this.bindLabel === this._defaultLabel;
          this.itemsList.setItems(items);

          if (items.length > 0 && this.hasValue) {
            this.itemsList.mapSelectedItems();
          }

          if (this.isOpen && isDefined(this.searchTerm) && !this._isTypeahead) {
            this.itemsList.filter(this.searchTerm);
          }

          if (this._isTypeahead || this.isOpen) {
            this.itemsList.markSelectedOrDefault(this.markFirst);
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_setItemsFromNgOptions",
        value: function _setItemsFromNgOptions() {
          var _this17 = this;

          /** @type {?} */
          var mapNgOptions =
          /**
          * @param {?} options
          * @return {?}
          */
          function mapNgOptions(options) {
            _this17.items = options.map(
            /**
            * @param {?} option
            * @return {?}
            */
            function (option) {
              return {
                $ngOptionValue: option.value,
                $ngOptionLabel: option.elementRef.nativeElement.innerHTML,
                disabled: option.disabled
              };
            });

            _this17.itemsList.setItems(_this17.items);

            if (_this17.hasValue) {
              _this17.itemsList.mapSelectedItems();
            }

            _this17.detectChanges();
          };
          /** @type {?} */


          var handleOptionChange =
          /**
          * @return {?}
          */
          function handleOptionChange() {
            /** @type {?} */
            var changedOrDestroyed = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(_this17.ngOptions.changes, _this17._destroy$);
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"]).apply(void 0, _toConsumableArray(_this17.ngOptions.map(
            /**
            * @param {?} option
            * @return {?}
            */
            function (option) {
              return option.stateChange$;
            }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(changedOrDestroyed)).subscribe(
            /**
            * @param {?} option
            * @return {?}
            */
            function (option) {
              /** @type {?} */
              var item = _this17.itemsList.findItem(option.value);

              item.disabled = option.disabled;
              item.label = option.label || item.label;

              _this17._cd.detectChanges();
            });
          };

          this.ngOptions.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(this.ngOptions), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroy$)).subscribe(
          /**
          * @param {?} options
          * @return {?}
          */
          function (options) {
            _this17.bindLabel = _this17._defaultLabel;
            mapNgOptions(options);
            handleOptionChange();
          });
        }
        /**
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_isValidWriteValue",
        value: function _isValidWriteValue(value) {
          var _this18 = this;

          if (!isDefined(value) || this.multiple && value === '' || Array.isArray(value) && value.length === 0) {
            return false;
          }
          /** @type {?} */


          var validateBinding =
          /**
          * @param {?} item
          * @return {?}
          */
          function validateBinding(item) {
            if (!isDefined(_this18.compareWith) && isObject(item) && _this18.bindValue) {
              _this18._console.warn("Binding object(".concat(JSON.stringify(item), ") with bindValue is not allowed."));

              return false;
            }

            return true;
          };

          if (this.multiple) {
            if (!Array.isArray(value)) {
              this._console.warn('Multiple select ngModel should be array.');

              return false;
            }

            return value.every(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return validateBinding(item);
            });
          } else {
            return validateBinding(value);
          }
        }
        /**
         * @private
         * @param {?} ngModel
         * @return {?}
         */

      }, {
        key: "_handleWriteValue",
        value: function _handleWriteValue(ngModel) {
          var _this19 = this;

          if (!this._isValidWriteValue(ngModel)) {
            return;
          }
          /** @type {?} */


          var select =
          /**
          * @param {?} val
          * @return {?}
          */
          function select(val) {
            /** @type {?} */
            var item = _this19.itemsList.findItem(val);

            if (item) {
              _this19.itemsList.select(item);
            } else {
              /** @type {?} */
              var isValObject = isObject(val);
              /** @type {?} */

              var isPrimitive = !isValObject && !_this19.bindValue;

              if (isValObject || isPrimitive) {
                _this19.itemsList.select(_this19.itemsList.mapItem(val, null));
              } else if (_this19.bindValue) {
                var _item2;

                item = (_item2 = {}, _defineProperty(_item2, _this19.bindLabel, null), _defineProperty(_item2, _this19.bindValue, val), _item2);

                _this19.itemsList.select(_this19.itemsList.mapItem(item, null));
              }
            }
          };

          if (this.multiple) {
            /** @type {?} */
            ngModel.forEach(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return select(item);
            });
          } else {
            select(ngModel);
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_handleKeyPresses",
        value: function _handleKeyPresses() {
          var _this20 = this;

          if (this.searchable) {
            return;
          }

          this._keyPress$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(
          /**
          * @param {?} letter
          * @return {?}
          */
          function (letter) {
            return _this20._pressedKeys.push(letter);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
          /**
          * @return {?}
          */
          function () {
            return _this20._pressedKeys.length > 0;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
          /**
          * @return {?}
          */
          function () {
            return _this20._pressedKeys.join('');
          })).subscribe(
          /**
          * @param {?} term
          * @return {?}
          */
          function (term) {
            /** @type {?} */
            var item = _this20.itemsList.findByLabel(term);

            if (item) {
              if (_this20.isOpen) {
                _this20.itemsList.markItem(item);

                _this20._cd.markForCheck();
              } else {
                _this20.select(item);
              }
            }

            _this20._pressedKeys = [];
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_setInputAttributes",
        value: function _setInputAttributes() {
          /** @type {?} */
          var input = this.searchInput.nativeElement;
          /** @type {?} */

          var attributes = Object.assign({
            type: 'text',
            autocorrect: 'off',
            autocapitalize: 'off',
            autocomplete: this.labelForId ? 'off' : this.dropdownId
          }, this.inputAttrs);

          for (var _i3 = 0, _Object$keys = Object.keys(attributes); _i3 < _Object$keys.length; _i3++) {
            var key = _Object$keys[_i3];
            input.setAttribute(key, attributes[key]);
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_updateNgModel",
        value: function _updateNgModel() {
          /** @type {?} */
          var model = [];

          var _iterator6 = _createForOfIteratorHelper(this.selectedItems),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var item = _step6.value;

              if (this.bindValue) {
                /** @type {?} */
                var value = null;

                if (item.children) {
                  /** @type {?} */
                  var groupKey = this.groupValue ? this.bindValue :
                  /** @type {?} */
                  this.groupBy;
                  value = item.value[groupKey ||
                  /** @type {?} */
                  this.groupBy];
                } else {
                  value = this.itemsList.resolveNested(item.value, this.bindValue);
                }

                model.push(value);
              } else {
                model.push(item.value);
              }
            }
            /** @type {?} */

          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }

          var selected = this.selectedItems.map(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x.value;
          });

          if (this.multiple) {
            this._onChange(model);

            this.changeEvent.emit(selected);
          } else {
            this._onChange(isDefined(model[0]) ? model[0] : null);

            this.changeEvent.emit(selected[0]);
          }

          this._cd.markForCheck();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_clearSearch",
        value: function _clearSearch() {
          if (!this.searchTerm) {
            return;
          }

          this._changeSearch(null);

          this.itemsList.resetFilteredItems();
        }
        /**
         * @private
         * @param {?} searchTerm
         * @return {?}
         */

      }, {
        key: "_changeSearch",
        value: function _changeSearch(searchTerm) {
          this.searchTerm = searchTerm;

          if (this._isTypeahead) {
            this.typeahead.next(searchTerm);
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_scrollToMarked",
        value: function _scrollToMarked() {
          if (!this.isOpen || !this.dropdownPanel) {
            return;
          }

          this.dropdownPanel.scrollTo(this.itemsList.markedItem);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_scrollToTag",
        value: function _scrollToTag() {
          if (!this.isOpen || !this.dropdownPanel) {
            return;
          }

          this.dropdownPanel.scrollToTag();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_onSelectionChanged",
        value: function _onSelectionChanged() {
          if (this.isOpen && this.multiple && this.appendTo) {
            // Make sure items are rendered.
            this._cd.detectChanges();

            this.dropdownPanel.adjustPosition();
          }
        }
        /**
         * @private
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "_handleTab",
        value: function _handleTab($event) {
          if (this.isOpen === false && !this.addTag) {
            return;
          }

          if (this.selectOnTab) {
            if (this.itemsList.markedItem) {
              this.toggleItem(this.itemsList.markedItem);
              $event.preventDefault();
            } else if (this.showAddTag) {
              this.selectTag();
              $event.preventDefault();
            } else {
              this.close();
            }
          } else {
            this.close();
          }
        }
        /**
         * @private
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "_handleEnter",
        value: function _handleEnter($event) {
          if (this.isOpen || this._manualOpen) {
            if (this.itemsList.markedItem) {
              this.toggleItem(this.itemsList.markedItem);
            } else if (this.showAddTag) {
              this.selectTag();
            }
          } else if (this.openOnEnter) {
            this.open();
          } else {
            return;
          }

          $event.preventDefault();
        }
        /**
         * @private
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "_handleSpace",
        value: function _handleSpace($event) {
          if (this.isOpen || this._manualOpen) {
            return;
          }

          this.open();
          $event.preventDefault();
        }
        /**
         * @private
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "_handleArrowDown",
        value: function _handleArrowDown($event) {
          if (this._nextItemIsTag(+1)) {
            this.itemsList.unmarkItem();

            this._scrollToTag();
          } else {
            this.itemsList.markNextItem();

            this._scrollToMarked();
          }

          this.open();
          $event.preventDefault();
        }
        /**
         * @private
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "_handleArrowUp",
        value: function _handleArrowUp($event) {
          if (!this.isOpen) {
            return;
          }

          if (this._nextItemIsTag(-1)) {
            this.itemsList.unmarkItem();

            this._scrollToTag();
          } else {
            this.itemsList.markPreviousItem();

            this._scrollToMarked();
          }

          $event.preventDefault();
        }
        /**
         * @private
         * @param {?} nextStep
         * @return {?}
         */

      }, {
        key: "_nextItemIsTag",
        value: function _nextItemIsTag(nextStep) {
          /** @type {?} */
          var nextIndex = this.itemsList.markedIndex + nextStep;
          return this.addTag && this.searchTerm && this.itemsList.markedItem && (nextIndex < 0 || nextIndex === this.itemsList.filteredItems.length);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_handleBackspace",
        value: function _handleBackspace() {
          if (this.searchTerm || !this.clearable || !this.clearOnBackspace || !this.hasValue) {
            return;
          }

          if (this.multiple) {
            this.unselect(this.itemsList.lastSelectedItem);
          } else {
            this.clearModel();
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_mergeGlobalConfig",

        /**
         * @private
         * @param {?} config
         * @return {?}
         */
        value: function _mergeGlobalConfig(config) {
          this.placeholder = this.placeholder || config.placeholder;
          this.notFoundText = this.notFoundText || config.notFoundText;
          this.typeToSearchText = this.typeToSearchText || config.typeToSearchText;
          this.addTagText = this.addTagText || config.addTagText;
          this.loadingText = this.loadingText || config.loadingText;
          this.clearAllText = this.clearAllText || config.clearAllText;
          this.virtualScroll = isDefined(this.virtualScroll) ? this.virtualScroll : isDefined(config.disableVirtualScroll) ? !config.disableVirtualScroll : false;
          this.openOnEnter = isDefined(this.openOnEnter) ? this.openOnEnter : config.openOnEnter;
          this.appendTo = this.appendTo || config.appendTo;
          this.bindValue = this.bindValue || config.bindValue;
          this.appearance = this.appearance || config.appearance;
        }
      }, {
        key: "items",
        get: function get() {
          return this._items;
        },

        /**
         * @param {?} value
         * @return {?}
         */
        set: function set(value) {
          this._itemsAreUsed = true;
          this._items = value;
        }
      }, {
        key: "compareWith",

        /**
         * @return {?}
         */
        get: function get() {
          return this._compareWith;
        }
        /**
         * @param {?} fn
         * @return {?}
         */
        ,
        set: function set(fn) {
          if (!isFunction(fn)) {
            throw Error('`compareWith` must be a function.');
          }

          this._compareWith = fn;
        }
        /**
         * @return {?}
         */

      }, {
        key: "clearSearchOnAdd",
        get: function get() {
          return isDefined(this._clearSearchOnAdd) ? this._clearSearchOnAdd : this.closeOnSelect;
        },

        /**
         * @param {?} value
         * @return {?}
         */
        set: function set(value) {
          this._clearSearchOnAdd = value;
        }
      }, {
        key: "disabled",

        /**
         * @return {?}
         */
        get: function get() {
          return this.readonly || this._disabled;
        }
      }, {
        key: "filtered",

        /**
         * @return {?}
         */
        get: function get() {
          return !!this.searchTerm && this.searchable || this._isComposing;
        }
      }, {
        key: "_editableSearchTerm",

        /**
         * @private
         * @return {?}
         */
        get: function get() {
          return this.editableSearchTerm && !this.multiple;
        }
        /**
         * @return {?}
         */

      }, {
        key: "selectedItems",
        get: function get() {
          return this.itemsList.selectedItems;
        }
        /**
         * @return {?}
         */

      }, {
        key: "selectedValues",
        get: function get() {
          return this.selectedItems.map(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x.value;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "hasValue",
        get: function get() {
          return this.selectedItems.length > 0;
        }
        /**
         * @return {?}
         */

      }, {
        key: "currentPanelPosition",
        get: function get() {
          if (this.dropdownPanel) {
            return this.dropdownPanel.currentPosition;
          }

          return undefined;
        }
      }, {
        key: "showAddTag",
        get: function get() {
          if (!this._validTerm) {
            return false;
          }
          /** @type {?} */


          var term = this.searchTerm.toLowerCase().trim();
          return this.addTag && !this.itemsList.filteredItems.some(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x.label.toLowerCase() === term;
          }) && (!this.hideSelected && this.isOpen || !this.selectedItems.some(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x.label.toLowerCase() === term;
          })) && !this.loading;
        }
      }, {
        key: "_isTypeahead",
        get: function get() {
          return this.typeahead && this.typeahead.observers.length > 0;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_validTerm",
        get: function get() {
          /** @type {?} */
          var term = this.searchTerm && this.searchTerm.trim();
          return term && term.length >= this.minTermLength;
        }
      }]);

      return NgSelectComponent;
    }();

    NgSelectComponent.ɵfac = function NgSelectComponent_Factory(t) {
      return new (t || NgSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('class'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('autofocus'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgSelectConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SELECTION_MODEL_FACTORY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ConsoleService));
    };

    NgSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NgSelectComponent,
      selectors: [["ng-select"]],
      contentQueries: function NgSelectComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgOptionTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgOptgroupTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgLabelTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgMultiLabelTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgHeaderTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgFooterTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgNotFoundTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgTypeToSearchTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgLoadingTextTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgTagTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgLoadingSpinnerTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgOptionComponent, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optionTemplate = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optgroupTemplate = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.labelTemplate = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.multiLabelTemplate = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerTemplate = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerTemplate = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.notFoundTemplate = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.typeToSearchTemplate = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loadingTextTemplate = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tagTemplate = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loadingSpinnerTemplate = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ngOptions = _t);
        }
      },
      viewQuery: function NgSelectComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NgDropdownPanelComponent, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c5, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dropdownPanel = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
        }
      },
      hostAttrs: ["role", "listbox"],
      hostVars: 20,
      hostBindings: function NgSelectComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NgSelectComponent_keydown_HostBindingHandler($event) {
            return ctx.handleKeyDown($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-select", ctx.useDefaultClass)("ng-select-single", !ctx.multiple)("ng-select-multiple", ctx.multiple)("ng-select-taggable", ctx.addTag)("ng-select-searchable", ctx.searchable)("ng-select-clearable", ctx.clearable)("ng-select-opened", ctx.isOpen)("ng-select-disabled", ctx.disabled)("ng-select-filtered", ctx.filtered)("ng-select-typeahead", ctx.typeahead);
        }
      },
      inputs: {
        markFirst: "markFirst",
        dropdownPosition: "dropdownPosition",
        loading: "loading",
        closeOnSelect: "closeOnSelect",
        hideSelected: "hideSelected",
        selectOnTab: "selectOnTab",
        bufferAmount: "bufferAmount",
        selectableGroup: "selectableGroup",
        selectableGroupAsModel: "selectableGroupAsModel",
        searchFn: "searchFn",
        trackByFn: "trackByFn",
        clearOnBackspace: "clearOnBackspace",
        labelForId: "labelForId",
        inputAttrs: "inputAttrs",
        readonly: "readonly",
        searchWhileComposing: "searchWhileComposing",
        minTermLength: "minTermLength",
        editableSearchTerm: "editableSearchTerm",
        keyDownFn: "keyDownFn",
        multiple: "multiple",
        addTag: "addTag",
        searchable: "searchable",
        clearable: "clearable",
        isOpen: "isOpen",
        items: "items",
        compareWith: "compareWith",
        clearSearchOnAdd: "clearSearchOnAdd",
        bindLabel: "bindLabel",
        placeholder: "placeholder",
        notFoundText: "notFoundText",
        typeToSearchText: "typeToSearchText",
        addTagText: "addTagText",
        loadingText: "loadingText",
        clearAllText: "clearAllText",
        virtualScroll: "virtualScroll",
        openOnEnter: "openOnEnter",
        appendTo: "appendTo",
        bindValue: "bindValue",
        appearance: "appearance",
        maxSelectedItems: "maxSelectedItems",
        groupBy: "groupBy",
        groupValue: "groupValue",
        tabIndex: "tabIndex",
        typeahead: "typeahead"
      },
      outputs: {
        blurEvent: "blur",
        focusEvent: "focus",
        changeEvent: "change",
        openEvent: "open",
        closeEvent: "close",
        searchEvent: "search",
        clearEvent: "clear",
        addEvent: "add",
        removeEvent: "remove",
        scroll: "scroll",
        scrollToEnd: "scrollToEnd"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return NgSelectComponent;
        }),
        multi: true
      }, NgDropdownPanelService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 14,
      vars: 18,
      consts: [[1, "ng-select-container", 3, "mousedown"], [1, "ng-value-container"], [1, "ng-placeholder"], [4, "ngIf"], [1, "ng-input"], ["role", "combobox", 3, "readOnly", "disabled", "value", "input", "compositionstart", "compositionend", "focus", "blur", "change"], ["searchInput", ""], ["class", "ng-clear-wrapper", 3, "title", 4, "ngIf"], [1, "ng-arrow-wrapper"], [1, "ng-arrow"], ["class", "ng-dropdown-panel", 3, "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "ng-select-multiple", "ngClass", "id", "update", "scroll", "scrollToEnd", "outsideClick", 4, "ngIf"], ["class", "ng-value", 3, "ng-value-disabled", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ng-value"], ["defaultLabelTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-hidden", "true", 1, "ng-value-icon", "left", 3, "click"], [1, "ng-value-label", 3, "ngItemLabel", "escape"], ["defaultLoadingSpinnerTemplate", ""], [3, "ngTemplateOutlet"], [1, "ng-spinner-loader"], [1, "ng-clear-wrapper", 3, "title"], ["aria-hidden", "true", 1, "ng-clear"], [1, "ng-dropdown-panel", 3, "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "ngClass", "id", "update", "scroll", "scrollToEnd", "outsideClick"], ["class", "ng-option", 3, "ng-option-disabled", "ng-option-selected", "ng-optgroup", "ng-option", "ng-option-child", "ng-option-marked", "click", "mouseover", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ng-option", "role", "option", 3, "ng-option-marked", "mouseover", "click", 4, "ngIf"], [1, "ng-option", 3, "click", "mouseover"], ["defaultOptionTemplate", ""], [1, "ng-option-label", 3, "ngItemLabel", "escape"], ["role", "option", 1, "ng-option", 3, "mouseover", "click"], ["defaultTagTemplate", ""], [1, "ng-tag-label"], ["defaultNotFoundTemplate", ""], [1, "ng-option", "ng-option-disabled"], ["defaultTypeToSearchTemplate", ""], ["defaultLoadingTextTemplate", ""]],
      template: function NgSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function NgSelectComponent_Template_div_mousedown_0_listener($event) {
            return ctx.handleMousedown($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgSelectComponent_ng_container_4_Template, 2, 2, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgSelectComponent_5_Template, 1, 5, undefined, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function NgSelectComponent_Template_input_input_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            return ctx.filter(_r2.value);
          })("compositionstart", function NgSelectComponent_Template_input_compositionstart_7_listener() {
            return ctx.onCompositionStart();
          })("compositionend", function NgSelectComponent_Template_input_compositionend_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            return ctx.onCompositionEnd(_r2.value);
          })("focus", function NgSelectComponent_Template_input_focus_7_listener($event) {
            return ctx.onInputFocus($event);
          })("blur", function NgSelectComponent_Template_input_blur_7_listener($event) {
            return ctx.onInputBlur($event);
          })("change", function NgSelectComponent_Template_input_change_7_listener($event) {
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NgSelectComponent_ng_container_9_Template, 4, 1, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NgSelectComponent_span_10_Template, 3, 1, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NgSelectComponent_ng_dropdown_panel_13_Template, 7, 19, "ng-dropdown-panel", 10);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-appearance-outline", ctx.appearance === "outline")("ng-has-value", ctx.hasValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.placeholder);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.multiLabelTemplate && ctx.selectedItems.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.multiLabelTemplate && ctx.selectedValues.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", !ctx.searchable || ctx.itemsList.maxItemsSelected)("disabled", ctx.disabled)("value", ctx.searchTerm ? ctx.searchTerm : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.labelForId)("tabindex", ctx.tabIndex)("aria-expanded", ctx.isOpen)("aria-owns", ctx.isOpen ? ctx.dropdownId : null)("aria-activedescendant", ctx.isOpen ? ctx.itemsList == null ? null : ctx.itemsList.markedItem == null ? null : ctx.itemsList.markedItem.htmlId : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showClear());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpen);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], NgItemLabelDirective, NgDropdownPanelComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]],
      styles: [".ng-select{position:relative;display:block;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:-webkit-box;display:flex;outline:0;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none;border:0;box-shadow:none;outline:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{-webkit-box-flex:1;flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute;z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation:.8s linear infinite load8;animation:.8s linear infinite load8}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    NgSelectComponent.ctorParameters = function () {
      return [{
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
          args: ['class']
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
          args: ['autofocus']
        }]
      }, {
        type: NgSelectConfig
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [SELECTION_MODEL_FACTORY]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: ConsoleService
      }];
    };

    NgSelectComponent.propDecorators = {
      bindLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      bindValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      markFirst: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      placeholder: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      notFoundText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      typeToSearchText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      addTagText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      loadingText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      clearAllText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      appearance: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dropdownPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      appendTo: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      loading: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      closeOnSelect: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      hideSelected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      selectOnTab: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      openOnEnter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      maxSelectedItems: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      groupBy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      groupValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      bufferAmount: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      virtualScroll: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      selectableGroup: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      selectableGroupAsModel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      searchFn: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      trackByFn: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      clearOnBackspace: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      labelForId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      inputAttrs: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tabIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      readonly: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      searchWhileComposing: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      minTermLength: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      editableSearchTerm: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      keyDownFn: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      typeahead: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.ng-select-typeahead']
      }],
      multiple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.ng-select-multiple']
      }],
      addTag: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.ng-select-taggable']
      }],
      searchable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.ng-select-searchable']
      }],
      clearable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.ng-select-clearable']
      }],
      isOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.ng-select-opened']
      }],
      items: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      compareWith: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      clearSearchOnAdd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      blurEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['blur']
      }],
      focusEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['focus']
      }],
      changeEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['change']
      }],
      openEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['open']
      }],
      closeEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['close']
      }],
      searchEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['search']
      }],
      clearEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['clear']
      }],
      addEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['add']
      }],
      removeEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['remove']
      }],
      scroll: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['scroll']
      }],
      scrollToEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['scrollToEnd']
      }],
      optionTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgOptionTemplateDirective, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
          "static": false
        }]
      }],
      optgroupTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgOptgroupTemplateDirective, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
          "static": false
        }]
      }],
      labelTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgLabelTemplateDirective, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
          "static": false
        }]
      }],
      multiLabelTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgMultiLabelTemplateDirective, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
          "static": false
        }]
      }],
      headerTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgHeaderTemplateDirective, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
          "static": false
        }]
      }],
      footerTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgFooterTemplateDirective, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
          "static": false
        }]
      }],
      notFoundTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgNotFoundTemplateDirective, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
          "static": false
        }]
      }],
      typeToSearchTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgTypeToSearchTemplateDirective, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
          "static": false
        }]
      }],
      loadingTextTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgLoadingTextTemplateDirective, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
          "static": false
        }]
      }],
      tagTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgTagTemplateDirective, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
          "static": false
        }]
      }],
      loadingSpinnerTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgLoadingSpinnerTemplateDirective, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
          "static": false
        }]
      }],
      dropdownPanel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return NgDropdownPanelComponent;
        }), {
          "static": false
        }]
      }],
      searchInput: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['searchInput', {
          "static": true
        }]
      }],
      ngOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [NgOptionComponent, {
          descendants: true
        }]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.ng-select-disabled']
      }],
      filtered: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.ng-select-filtered']
      }],
      handleKeyDown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['keydown', ['$event']]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ng-select',
          template: "<div\n    (mousedown)=\"handleMousedown($event)\"\n    [class.ng-appearance-outline]=\"appearance === 'outline'\"\n    [class.ng-has-value]=\"hasValue\"\n    class=\"ng-select-container\">\n\n    <div class=\"ng-value-container\">\n        <div class=\"ng-placeholder\">{{placeholder}}</div>\n\n        <ng-container *ngIf=\"!multiLabelTemplate && selectedItems.length > 0\">\n            <div [class.ng-value-disabled]=\"item.disabled\" class=\"ng-value\" *ngFor=\"let item of selectedItems; trackBy: trackByOption\">\n                <ng-template #defaultLabelTemplate>\n                    <span class=\"ng-value-icon left\" (click)=\"unselect(item);\" aria-hidden=\"true\">\xD7</span>\n                    <span class=\"ng-value-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n                </ng-template>\n\n                <ng-template\n                    [ngTemplateOutlet]=\"labelTemplate || defaultLabelTemplate\"\n                    [ngTemplateOutletContext]=\"{ item: item.value, clear: clearItem, label: item.label }\">\n                </ng-template>\n            </div>\n        </ng-container>\n\n        <ng-template *ngIf=\"multiLabelTemplate && selectedValues.length > 0\"\n                [ngTemplateOutlet]=\"multiLabelTemplate\"\n                [ngTemplateOutletContext]=\"{ items: selectedValues, clear: clearItem }\">\n        </ng-template>\n\n        <div class=\"ng-input\">\n            <input #searchInput\n                   [attr.id]=\"labelForId\"\n                   [attr.tabindex]=\"tabIndex\"\n                   [readOnly]=\"!searchable || itemsList.maxItemsSelected\"\n                   [disabled]=\"disabled\"\n                   [value]=\"searchTerm ? searchTerm : ''\"\n                   (input)=\"filter(searchInput.value)\"\n                   (compositionstart)=\"onCompositionStart()\"\n                   (compositionend)=\"onCompositionEnd(searchInput.value)\"\n                   (focus)=\"onInputFocus($event)\"\n                   (blur)=\"onInputBlur($event)\"\n                   (change)=\"$event.stopPropagation()\"\n                   role=\"combobox\"\n                   [attr.aria-expanded]=\"isOpen\"\n                   [attr.aria-owns]=\"isOpen ? dropdownId : null\"\n                   [attr.aria-activedescendant]=\"isOpen ? itemsList?.markedItem?.htmlId : null\">\n        </div>\n    </div>\n\n    <ng-container *ngIf=\"loading\">\n        <ng-template #defaultLoadingSpinnerTemplate>\n            <div class=\"ng-spinner-loader\"></div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingSpinnerTemplate || defaultLoadingSpinnerTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <span *ngIf=\"showClear()\" class=\"ng-clear-wrapper\" title=\"{{clearAllText}}\">\n        <span class=\"ng-clear\" aria-hidden=\"true\">\xD7</span>\n    </span>\n\n    <span class=\"ng-arrow-wrapper\">\n        <span class=\"ng-arrow\"></span>\n    </span>\n</div>\n\n<ng-dropdown-panel *ngIf=\"isOpen\"\n                   class=\"ng-dropdown-panel\"\n                   [virtualScroll]=\"virtualScroll\"\n                   [bufferAmount]=\"bufferAmount\"\n                   [appendTo]=\"appendTo\"\n                   [position]=\"dropdownPosition\"\n                   [headerTemplate]=\"headerTemplate\"\n                   [footerTemplate]=\"footerTemplate\"\n                   [filterValue]=\"searchTerm\"\n                   [items]=\"itemsList.filteredItems\"\n                   [markedItem]=\"itemsList.markedItem\"\n                   (update)=\"viewPortItems = $event\"\n                   (scroll)=\"scroll.emit($event)\"\n                   (scrollToEnd)=\"scrollToEnd.emit($event)\"\n                   (outsideClick)=\"close()\"\n                   [class.ng-select-multiple]=\"multiple\"\n                   [ngClass]=\"appendTo ? classes : null\"\n                   [id]=\"dropdownId\">\n\n    <ng-container>\n        <div class=\"ng-option\" [attr.role]=\"item.children ? 'group' : 'option'\" (click)=\"toggleItem(item)\" (mouseover)=\"onItemHover(item)\"\n                *ngFor=\"let item of viewPortItems; trackBy: trackByOption\"\n                [class.ng-option-disabled]=\"item.disabled\"\n                [class.ng-option-selected]=\"item.selected\"\n                [class.ng-optgroup]=\"item.children\"\n                [class.ng-option]=\"!item.children\"\n                [class.ng-option-child]=\"!!item.parent\"\n                [class.ng-option-marked]=\"item === itemsList.markedItem\"\n                [attr.aria-selected]=\"item.selected\"\n                [attr.id]=\"item?.htmlId\">\n\n            <ng-template #defaultOptionTemplate>\n                <span class=\"ng-option-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"item.children ? (optgroupTemplate || defaultOptionTemplate) : (optionTemplate || defaultOptionTemplate)\"\n                [ngTemplateOutletContext]=\"{ item: item.value, item$:item, index: item.index, searchTerm: searchTerm }\">\n            </ng-template>\n        </div>\n\n        <div class=\"ng-option\" [class.ng-option-marked]=\"!itemsList.markedItem\" (mouseover)=\"itemsList.unmarkItem()\" role=\"option\" (click)=\"selectTag()\" *ngIf=\"showAddTag\">\n            <ng-template #defaultTagTemplate>\n                <span><span class=\"ng-tag-label\">{{addTagText}}</span>\"{{searchTerm}}\"</span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"tagTemplate || defaultTagTemplate\"\n                [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n            </ng-template>\n        </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"showNoItemsFound()\">\n        <ng-template #defaultNotFoundTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{notFoundText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"notFoundTemplate || defaultNotFoundTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"showTypeToSearch()\">\n        <ng-template #defaultTypeToSearchTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{typeToSearchText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"typeToSearchTemplate || defaultTypeToSearchTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"loading && itemsList.filteredItems.length === 0\">\n        <ng-template #defaultLoadingTextTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{loadingText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingTextTemplate || defaultLoadingTextTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n        </ng-template>\n    </ng-container>\n\n</ng-dropdown-panel>\n",
          providers: [{
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
            /**
            * @return {?}
            */
            function () {
              return NgSelectComponent;
            }),
            multi: true
          }, NgDropdownPanelService],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          host: {
            'role': 'listbox',
            '[class.ng-select]': 'useDefaultClass',
            '[class.ng-select-single]': '!multiple'
          },
          styles: [".ng-select{position:relative;display:block;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:-webkit-box;display:flex;outline:0;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none;border:0;box-shadow:none;outline:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{-webkit-box-flex:1;flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute;z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation:.8s linear infinite load8;animation:.8s linear infinite load8}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}"]
        }]
      }], function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
            args: ['class']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
            args: ['autofocus']
          }]
        }, {
          type: NgSelectConfig
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [SELECTION_MODEL_FACTORY]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: ConsoleService
        }];
      }, {
        markFirst: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dropdownPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        loading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        closeOnSelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hideSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectOnTab: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        bufferAmount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectableGroup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectableGroupAsModel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        searchFn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        trackByFn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clearOnBackspace: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        labelForId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inputAttrs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        readonly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        searchWhileComposing: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        minTermLength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        editableSearchTerm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        keyDownFn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        multiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.ng-select-multiple']
        }],
        addTag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.ng-select-taggable']
        }],
        searchable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.ng-select-searchable']
        }],
        clearable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.ng-select-clearable']
        }],
        isOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.ng-select-opened']
        }],
        blurEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['blur']
        }],
        focusEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['focus']
        }],
        changeEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['change']
        }],
        openEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['open']
        }],
        closeEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['close']
        }],
        searchEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['search']
        }],
        clearEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['clear']
        }],
        addEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['add']
        }],
        removeEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['remove']
        }],
        scroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['scroll']
        }],
        scrollToEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['scrollToEnd']
        }],
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clearSearchOnAdd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.ng-select-disabled']
        }],
        filtered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.ng-select-filtered']
        }],
        handleKeyDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown', ['$event']]
        }],
        bindLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        notFoundText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        typeToSearchText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        addTagText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        loadingText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clearAllText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        virtualScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        openOnEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        appendTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        bindValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        appearance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxSelectedItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        groupBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        groupValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        typeahead: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.ng-select-typeahead']
        }],
        optionTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NgOptionTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            "static": false
          }]
        }],
        optgroupTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NgOptgroupTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            "static": false
          }]
        }],
        labelTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NgLabelTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            "static": false
          }]
        }],
        multiLabelTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NgMultiLabelTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            "static": false
          }]
        }],
        headerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NgHeaderTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            "static": false
          }]
        }],
        footerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NgFooterTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            "static": false
          }]
        }],
        notFoundTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NgNotFoundTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            "static": false
          }]
        }],
        typeToSearchTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NgTypeToSearchTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            "static": false
          }]
        }],
        loadingTextTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NgLoadingTextTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            "static": false
          }]
        }],
        tagTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NgTagTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            "static": false
          }]
        }],
        loadingSpinnerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NgLoadingSpinnerTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            "static": false
          }]
        }],
        dropdownPanel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return NgDropdownPanelComponent;
          }), {
            "static": false
          }]
        }],
        searchInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['searchInput', {
            "static": true
          }]
        }],
        ngOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [NgOptionComponent, {
            descendants: true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @return {?}
     */


    function DefaultSelectionModelFactory() {
      return new DefaultSelectionModel();
    }
    /**
     * @record
     */


    function SelectionModel() {}

    if (false) {}

    var DefaultSelectionModel = /*#__PURE__*/function () {
      function DefaultSelectionModel() {
        _classCallCheck(this, DefaultSelectionModel);

        this._selected = [];
      }
      /**
       * @return {?}
       */


      _createClass(DefaultSelectionModel, [{
        key: "select",

        /**
         * @param {?} item
         * @param {?} multiple
         * @param {?} groupAsModel
         * @return {?}
         */
        value: function select(item, multiple, groupAsModel) {
          item.selected = true;

          if (!item.children || !multiple && groupAsModel) {
            this._selected.push(item);
          }

          if (multiple) {
            if (item.parent) {
              /** @type {?} */
              var childrenCount = item.parent.children.length;
              /** @type {?} */

              var selectedCount = item.parent.children.filter(
              /**
              * @param {?} x
              * @return {?}
              */
              function (x) {
                return x.selected;
              }).length;
              item.parent.selected = childrenCount === selectedCount;
            } else if (item.children) {
              this._setChildrenSelectedState(item.children, true);

              this._removeChildren(item);

              if (groupAsModel && this._activeChildren(item)) {
                this._selected = [].concat(_toConsumableArray(this._selected.filter(
                /**
                * @param {?} x
                * @return {?}
                */
                function (x) {
                  return x.parent !== item;
                })), [item]);
              } else {
                this._selected = [].concat(_toConsumableArray(this._selected), _toConsumableArray(item.children.filter(
                /**
                * @param {?} x
                * @return {?}
                */
                function (x) {
                  return !x.disabled;
                })));
              }
            }
          }
        }
        /**
         * @param {?} item
         * @param {?} multiple
         * @return {?}
         */

      }, {
        key: "unselect",
        value: function unselect(item, multiple) {
          this._selected = this._selected.filter(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x !== item;
          });
          item.selected = false;

          if (multiple) {
            if (item.parent && item.parent.selected) {
              var _this$_selected;

              /** @type {?} */
              var children = item.parent.children;

              this._removeParent(item.parent);

              this._removeChildren(item.parent);

              (_this$_selected = this._selected).push.apply(_this$_selected, _toConsumableArray(children.filter(
              /**
              * @param {?} x
              * @return {?}
              */
              function (x) {
                return x !== item && !x.disabled;
              })));

              item.parent.selected = false;
            } else if (item.children) {
              this._setChildrenSelectedState(item.children, false);

              this._removeChildren(item);
            }
          }
        }
        /**
         * @param {?} keepDisabled
         * @return {?}
         */

      }, {
        key: "clear",
        value: function clear(keepDisabled) {
          this._selected = keepDisabled ? this._selected.filter(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x.disabled;
          }) : [];
        }
        /**
         * @private
         * @param {?} children
         * @param {?} selected
         * @return {?}
         */

      }, {
        key: "_setChildrenSelectedState",
        value: function _setChildrenSelectedState(children, selected) {
          var _iterator7 = _createForOfIteratorHelper(children),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var child = _step7.value;

              if (child.disabled) {
                continue;
              }

              child.selected = selected;
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }

          ;
        }
        /**
         * @private
         * @param {?} parent
         * @return {?}
         */

      }, {
        key: "_removeChildren",
        value: function _removeChildren(parent) {
          this._selected = [].concat(_toConsumableArray(this._selected.filter(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x.parent !== parent;
          })), _toConsumableArray(parent.children.filter(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x.parent === parent && x.disabled && x.selected;
          })));
        }
        /**
         * @private
         * @param {?} parent
         * @return {?}
         */

      }, {
        key: "_removeParent",
        value: function _removeParent(parent) {
          this._selected = this._selected.filter(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x !== parent;
          });
        }
        /**
         * @private
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "_activeChildren",
        value: function _activeChildren(item) {
          return item.children.every(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return !x.disabled || x.selected;
          });
        }
      }, {
        key: "value",
        get: function get() {
          return this._selected;
        }
      }]);

      return DefaultSelectionModel;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ɵ0 = DefaultSelectionModelFactory;

    var NgSelectModule = function NgSelectModule() {
      _classCallCheck(this, NgSelectModule);
    };

    NgSelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NgSelectModule
    });
    NgSelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NgSelectModule_Factory(t) {
        return new (t || NgSelectModule)();
      },
      providers: [{
        provide: SELECTION_MODEL_FACTORY,
        useValue: ɵ0
      }],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgSelectModule, {
        declarations: function declarations() {
          return [NgDropdownPanelComponent, NgOptionComponent, NgSelectComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgItemLabelDirective];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]];
        },
        exports: function exports() {
          return [NgSelectComponent, NgOptionComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelectModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [NgDropdownPanelComponent, NgOptionComponent, NgSelectComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgItemLabelDirective],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
          exports: [NgSelectComponent, NgOptionComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective],
          providers: [{
            provide: SELECTION_MODEL_FACTORY,
            useValue: ɵ0
          }]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ng-select-ng-select.js.map

    /***/

  },

  /***/
  "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js":
  /*!***************************************************************************************!*\
    !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js ***!
    \***************************************************************************************/

  /*! exports provided: BsModalRef, BsModalService, ModalBackdropComponent, ModalBackdropOptions, ModalContainerComponent, ModalDirective, ModalModule, ModalOptions, ɵa */

  /***/
  function node_modulesNgxBootstrap__ivy_ngcc__ModalFesm2015NgxBootstrapModalJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BsModalRef", function () {
      return BsModalRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BsModalService", function () {
      return BsModalService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalBackdropComponent", function () {
      return ModalBackdropComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalBackdropOptions", function () {
      return ModalBackdropOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalContainerComponent", function () {
      return ModalContainerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalDirective", function () {
      return ModalDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalModule", function () {
      return ModalModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalOptions", function () {
      return ModalOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return CLASS_NAME;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-bootstrap/utils */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/utils/fesm2015/ngx-bootstrap-utils.js");
    /* harmony import */


    var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/component-loader */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/component-loader/fesm2015/ngx-bootstrap-component-loader.js");
    /* harmony import */


    var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap/positioning */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/positioning/fesm2015/ngx-bootstrap-positioning.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var _c0 = ["*"];

    var BsModalRef = function BsModalRef() {
      _classCallCheck(this, BsModalRef);

      /**
       * Hides the modal
       */
      this.hide = Function;
      /**
       * Sets new class to modal window
       */

      this.setClass = Function;
    };

    BsModalRef.ɵfac = function BsModalRef_Factory(t) {
      return new (t || BsModalRef)();
    };

    BsModalRef.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BsModalRef,
      factory: BsModalRef.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsModalRef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ModalBackdropOptions =
    /**
     * @param {?} options
     */
    function ModalBackdropOptions(options) {
      _classCallCheck(this, ModalBackdropOptions);

      this.animate = true;
      Object.assign(this, options);
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ModalOptions = function ModalOptions() {
      _classCallCheck(this, ModalOptions);
    };

    ModalOptions.ɵfac = function ModalOptions_Factory(t) {
      return new (t || ModalOptions)();
    };

    ModalOptions.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ModalOptions,
      factory: ModalOptions.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalOptions, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();

    if (false) {}
    /** @type {?} */


    var modalConfigDefaults = {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: false,
      ignoreBackdropClick: false,
      "class": '',
      animated: true,
      initialState: {}
    };
    /** @type {?} */

    var CLASS_NAME = {
      SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
      BACKDROP: 'modal-backdrop',
      OPEN: 'modal-open',
      FADE: 'fade',
      IN: 'in',
      // bs3
      SHOW: 'show' // bs4

    };
    /** @type {?} */

    var SELECTOR = {
      DIALOG: '.modal-dialog',
      DATA_TOGGLE: '[data-toggle="modal"]',
      DATA_DISMISS: '[data-dismiss="modal"]',
      FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
    };
    /** @type {?} */

    var TRANSITION_DURATIONS = {
      MODAL: 300,
      BACKDROP: 150
    };
    /** @type {?} */

    var DISMISS_REASONS = {
      BACKRDOP: 'backdrop-click',
      ESC: 'esc'
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var ModalContainerComponent = /*#__PURE__*/function () {
      /**
       * @param {?} options
       * @param {?} _element
       * @param {?} _renderer
       */
      function ModalContainerComponent(options, _element, _renderer) {
        _classCallCheck(this, ModalContainerComponent);

        this._element = _element;
        this._renderer = _renderer;
        this.isShown = false;
        this.isModalHiding = false;
        this.clickStartedInContent = false;
        this.config = Object.assign({}, options);
      }
      /**
       * @return {?}
       */


      _createClass(ModalContainerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          if (this.isAnimated) {
            this._renderer.addClass(this._element.nativeElement, CLASS_NAME.FADE);
          }

          this._renderer.setStyle(this._element.nativeElement, 'display', 'block');

          setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this21.isShown = true;

            _this21._renderer.addClass(_this21._element.nativeElement, Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])() ? CLASS_NAME.IN : CLASS_NAME.SHOW);
          }, this.isAnimated ? TRANSITION_DURATIONS.BACKDROP : 0);

          if (document && document.body) {
            if (this.bsModalService.getModalsCount() === 1) {
              this.bsModalService.checkScrollbar();
              this.bsModalService.setScrollbar();
            }

            this._renderer.addClass(document.body, CLASS_NAME.OPEN);
          }

          if (this._element.nativeElement) {
            this._element.nativeElement.focus();
          }
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onClickStarted",
        value: function onClickStarted(event) {
          this.clickStartedInContent = event.target !== this._element.nativeElement;
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onClickStop",
        value: function onClickStop(event) {
          /** @type {?} */
          var clickedInBackdrop = event.target === this._element.nativeElement && !this.clickStartedInContent;

          if (this.config.ignoreBackdropClick || this.config.backdrop === 'static' || !clickedInBackdrop) {
            this.clickStartedInContent = false;
            return;
          }

          this.bsModalService.setDismissReason(DISMISS_REASONS.BACKRDOP);
          this.hide();
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onEsc",
        value: function onEsc(event) {
          if (!this.isShown) {
            return;
          } // tslint:disable-next-line:deprecation


          if (event.keyCode === 27 || event.key === 'Escape') {
            event.preventDefault();
          }

          if (this.config.keyboard && this.level === this.bsModalService.getModalsCount()) {
            this.bsModalService.setDismissReason(DISMISS_REASONS.ESC);
            this.hide();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.isShown) {
            this.hide();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide() {
          var _this22 = this;

          if (this.isModalHiding || !this.isShown) {
            return;
          }

          this.isModalHiding = true;

          this._renderer.removeClass(this._element.nativeElement, Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])() ? CLASS_NAME.IN : CLASS_NAME.SHOW);

          setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this22.isShown = false;

            if (document && document.body && _this22.bsModalService.getModalsCount() === 1) {
              _this22._renderer.removeClass(document.body, CLASS_NAME.OPEN);
            }

            _this22.bsModalService.hide(_this22.level);

            _this22.isModalHiding = false;
          }, this.isAnimated ? TRANSITION_DURATIONS.MODAL : 0);
        }
      }]);

      return ModalContainerComponent;
    }();

    ModalContainerComponent.ɵfac = function ModalContainerComponent_Factory(t) {
      return new (t || ModalContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ModalOptions), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    ModalContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ModalContainerComponent,
      selectors: [["modal-container"]],
      hostAttrs: ["role", "dialog", "tabindex", "-1", 1, "modal"],
      hostVars: 3,
      hostBindings: function ModalContainerComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ModalContainerComponent_mousedown_HostBindingHandler($event) {
            return ctx.onClickStarted($event);
          })("mouseup", function ModalContainerComponent_mouseup_HostBindingHandler($event) {
            return ctx.onClickStop($event);
          })("keydown.esc", function ModalContainerComponent_keydown_esc_HostBindingHandler($event) {
            return ctx.onEsc($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-modal", true)("aria-labelledby", ctx.config.ariaLabelledBy)("aria-describedby", ctx.config.ariaDescribedby);
        }
      },
      ngContentSelectors: _c0,
      decls: 3,
      vars: 2,
      consts: [["role", "document"], [1, "modal-content"]],
      template: function ModalContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("modal-dialog" + (ctx.config["class"] ? " " + ctx.config["class"] : ""));
        }
      },
      encapsulation: 2
    });
    /** @nocollapse */

    ModalContainerComponent.ctorParameters = function () {
      return [{
        type: ModalOptions
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }];
    };

    ModalContainerComponent.propDecorators = {
      onClickStarted: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['mousedown', ['$event']]
      }],
      onClickStop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['mouseup', ['$event']]
      }],
      onEsc: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['window:keydown.esc', ['$event']]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'modal-container',
          template: "\n    <div [class]=\"'modal-dialog' + (config.class ? ' ' + config.class : '')\" role=\"document\">\n      <div class=\"modal-content\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  ",
          host: {
            "class": 'modal',
            role: 'dialog',
            tabindex: '-1',
            '[attr.aria-modal]': 'true',
            '[attr.aria-labelledby]': 'config.ariaLabelledBy',
            '[attr.aria-describedby]': 'config.ariaDescribedby'
          }
        }]
      }], function () {
        return [{
          type: ModalOptions
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, {
        onClickStarted: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mousedown', ['$event']]
        }],
        onClickStop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseup', ['$event']]
        }],
        onEsc: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:keydown.esc', ['$event']]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This component will be added as background layout for modals if enabled
     */


    var ModalBackdropComponent = /*#__PURE__*/function () {
      /**
       * @param {?} element
       * @param {?} renderer
       */
      function ModalBackdropComponent(element, renderer) {
        _classCallCheck(this, ModalBackdropComponent);

        this._isShown = false;
        this.element = element;
        this.renderer = renderer;
      }
      /**
       * @return {?}
       */


      _createClass(ModalBackdropComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          if (this.isAnimated) {
            this.renderer.addClass(this.element.nativeElement, "".concat(CLASS_NAME.FADE));
            ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].reflow(this.element.nativeElement);
          }

          this.isShown = true;
        }
      }, {
        key: "isAnimated",
        get: function get() {
          return this._isAnimated;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._isAnimated = value; // this.renderer.setElementClass(this.element.nativeElement, `${ClassName.FADE}`, value);
        }
        /**
         * @return {?}
         */

      }, {
        key: "isShown",
        get: function get() {
          return this._isShown;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._isShown = value;

          if (value) {
            this.renderer.addClass(this.element.nativeElement, "".concat(CLASS_NAME.IN));
          } else {
            this.renderer.removeClass(this.element.nativeElement, "".concat(CLASS_NAME.IN));
          }

          if (!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()) {
            if (value) {
              this.renderer.addClass(this.element.nativeElement, "".concat(CLASS_NAME.SHOW));
            } else {
              this.renderer.removeClass(this.element.nativeElement, "".concat(CLASS_NAME.SHOW));
            }
          }
        }
      }]);

      return ModalBackdropComponent;
    }();

    ModalBackdropComponent.ɵfac = function ModalBackdropComponent_Factory(t) {
      return new (t || ModalBackdropComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    ModalBackdropComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ModalBackdropComponent,
      selectors: [["bs-modal-backdrop"]],
      hostAttrs: [1, "modal-backdrop"],
      decls: 0,
      vars: 0,
      template: function ModalBackdropComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
    /** @nocollapse */

    ModalBackdropComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalBackdropComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'bs-modal-backdrop',
          template: ' ',
          host: {
            "class": CLASS_NAME.BACKDROP
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var TRANSITION_DURATION = 300;
    /** @type {?} */

    var BACKDROP_TRANSITION_DURATION = 150;
    /**
     * Mark any code with directive to show it's content in modal
     */

    var ModalDirective = /*#__PURE__*/function () {
      /**
       * @param {?} _element
       * @param {?} _viewContainerRef
       * @param {?} _renderer
       * @param {?} clf
       */
      function ModalDirective(_element, _viewContainerRef, _renderer, clf) {
        _classCallCheck(this, ModalDirective);

        this._element = _element;
        this._renderer = _renderer;
        /**
         * This event fires immediately when the `show` instance method is called.
         */

        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the modal has been made visible to the user
         * (will wait for CSS transitions to complete)
         */

        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired immediately when
         * the hide instance method has been called.
         */

        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the modal has finished being
         * hidden from the user (will wait for CSS transitions to complete).
         */

        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._isShown = false;
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.timerHideModal = 0;
        this.timerRmBackDrop = 0;
        this.isNested = false;
        this.clickStartedInContent = false;
        this._backdrop = clf.createLoader(_element, _viewContainerRef, _renderer);
      }
      /**
       * allows to set modal configuration via element property
       * @param {?} conf
       * @return {?}
       */


      _createClass(ModalDirective, [{
        key: "onClickStarted",

        /**
         * @param {?} event
         * @return {?}
         */
        value: function onClickStarted(event) {
          this.clickStartedInContent = event.target !== this._element.nativeElement;
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onClickStop",
        value: function onClickStop(event) {
          /** @type {?} */
          var clickedInBackdrop = event.target === this._element.nativeElement && !this.clickStartedInContent;

          if (this.config.ignoreBackdropClick || this.config.backdrop === 'static' || !clickedInBackdrop) {
            this.clickStartedInContent = false;
            return;
          }

          this.dismissReason = DISMISS_REASONS.BACKRDOP;
          this.hide(event);
        } // todo: consider preventing default and stopping propagation

        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onEsc",
        value: function onEsc(event) {
          if (!this._isShown) {
            return;
          } // tslint:disable-next-line:deprecation


          if (event.keyCode === 27 || event.key === 'Escape') {
            event.preventDefault();
          }

          if (this.config.keyboard) {
            this.dismissReason = DISMISS_REASONS.ESC;
            this.hide();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.config = void 0;

          if (this._isShown) {
            this._isShown = false;
            this.hideModal();

            this._backdrop.dispose();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          this._config = this._config || this.getConfig();
          setTimeout(
          /**
          * @return {?}
          */
          function () {
            if (_this23._config.show) {
              _this23.show();
            }
          }, 0);
        }
        /* Public methods */

        /**
         * Allows to manually toggle modal visibility
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          return this._isShown ? this.hide() : this.show();
        }
        /**
         * Allows to manually open modal
         * @return {?}
         */

      }, {
        key: "show",
        value: function show() {
          var _this24 = this;

          this.dismissReason = null;
          this.onShow.emit(this);

          if (this._isShown) {
            return;
          }

          clearTimeout(this.timerHideModal);
          clearTimeout(this.timerRmBackDrop);
          this._isShown = true;
          this.checkScrollbar();
          this.setScrollbar();

          if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"] && ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body) {
            if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.classList.contains(CLASS_NAME.OPEN)) {
              this.isNested = true;
            } else {
              this._renderer.addClass(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, CLASS_NAME.OPEN);
            }
          }

          this.showBackdrop(
          /**
          * @return {?}
          */
          function () {
            _this24.showElement();
          });
        }
        /**
         * Allows to manually close modal
         * @param {?=} event
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide(event) {
          var _this25 = this;

          if (event) {
            event.preventDefault();
          }

          this.onHide.emit(this); // todo: add an option to prevent hiding

          if (!this._isShown) {
            return;
          }

          ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].clearTimeout(this.timerHideModal);
          ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].clearTimeout(this.timerRmBackDrop);
          this._isShown = false;

          this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.IN);

          if (!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()) {
            this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.SHOW);
          } // this._addClassIn = false;


          if (this._config.animated) {
            this.timerHideModal = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].setTimeout(
            /**
            * @return {?}
            */
            function () {
              return _this25.hideModal();
            }, TRANSITION_DURATION);
          } else {
            this.hideModal();
          }
        }
        /**
         * Private methods \@internal
         * @protected
         * @param {?=} config
         * @return {?}
         */

      }, {
        key: "getConfig",
        value: function getConfig(config) {
          return Object.assign({}, modalConfigDefaults, config);
        }
        /**
         *  Show dialog
         * \@internal
         * @protected
         * @return {?}
         */

      }, {
        key: "showElement",
        value: function showElement() {
          var _this26 = this;

          // todo: replace this with component loader usage
          if (!this._element.nativeElement.parentNode || this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE) {
            // don't move modals dom position
            if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"] && ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body) {
              ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.appendChild(this._element.nativeElement);
            }
          }

          this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'false');

          this._renderer.setAttribute(this._element.nativeElement, 'aria-modal', 'true');

          this._renderer.setStyle(this._element.nativeElement, 'display', 'block');

          this._renderer.setProperty(this._element.nativeElement, 'scrollTop', 0);

          if (this._config.animated) {
            ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].reflow(this._element.nativeElement);
          } // this._addClassIn = true;


          this._renderer.addClass(this._element.nativeElement, CLASS_NAME.IN);

          if (!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()) {
            this._renderer.addClass(this._element.nativeElement, CLASS_NAME.SHOW);
          }
          /** @type {?} */


          var transitionComplete =
          /**
          * @return {?}
          */
          function transitionComplete() {
            if (_this26._config.focus) {
              _this26._element.nativeElement.focus();
            }

            _this26.onShown.emit(_this26);
          };

          if (this._config.animated) {
            setTimeout(transitionComplete, TRANSITION_DURATION);
          } else {
            transitionComplete();
          }
        }
        /**
         * \@internal
         * @protected
         * @return {?}
         */

      }, {
        key: "hideModal",
        value: function hideModal() {
          var _this27 = this;

          this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'true');

          this._renderer.setStyle(this._element.nativeElement, 'display', 'none');

          this.showBackdrop(
          /**
          * @return {?}
          */
          function () {
            if (!_this27.isNested) {
              if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"] && ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body) {
                _this27._renderer.removeClass(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, CLASS_NAME.OPEN);
              }

              _this27.resetScrollbar();
            }

            _this27.resetAdjustments();

            _this27.focusOtherModal();

            _this27.onHidden.emit(_this27);
          });
        } // todo: original show was calling a callback when done, but we can use
        // promise

        /**
         * \@internal
         * @protected
         * @param {?=} callback
         * @return {?}
         */

      }, {
        key: "showBackdrop",
        value: function showBackdrop(callback) {
          var _this28 = this;

          if (this._isShown && this.config.backdrop && (!this.backdrop || !this.backdrop.instance.isShown)) {
            this.removeBackdrop();

            this._backdrop.attach(ModalBackdropComponent).to('body').show({
              isAnimated: this._config.animated
            });

            this.backdrop = this._backdrop._componentRef;

            if (!callback) {
              return;
            }

            if (!this._config.animated) {
              callback();
              return;
            }

            setTimeout(callback, BACKDROP_TRANSITION_DURATION);
          } else if (!this._isShown && this.backdrop) {
            this.backdrop.instance.isShown = false;
            /** @type {?} */

            var callbackRemove =
            /**
            * @return {?}
            */
            function callbackRemove() {
              _this28.removeBackdrop();

              if (callback) {
                callback();
              }
            };

            if (this.backdrop.instance.isAnimated) {
              this.timerRmBackDrop = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
            } else {
              callbackRemove();
            }
          } else if (callback) {
            callback();
          }
        }
        /**
         * \@internal
         * @protected
         * @return {?}
         */

      }, {
        key: "removeBackdrop",
        value: function removeBackdrop() {
          this._backdrop.hide();
        }
        /**
         * Events tricks
         * @protected
         * @return {?}
         */
        // no need for it
        // protected setEscapeEvent():void {
        //   if (this._isShown && this._config.keyboard) {
        //     $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
        //       if (event.which === 27) {
        //         this.hide()
        //       }
        //     })
        //
        //   } else if (!this._isShown) {
        //     $(this._element).off(Event.KEYDOWN_DISMISS)
        //   }
        // }
        // protected setResizeEvent():void {
        // console.log(this.renderer.listenGlobal('', Event.RESIZE));
        // if (this._isShown) {
        //   $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this))
        // } else {
        //   $(window).off(Event.RESIZE)
        // }
        // }

      }, {
        key: "focusOtherModal",
        value: function focusOtherModal() {
          if (this._element.nativeElement.parentElement == null) {
            return;
          }
          /** @type {?} */


          var otherOpenedModals = this._element.nativeElement.parentElement.querySelectorAll('.in[bsModal]');

          if (!otherOpenedModals.length) {
            return;
          }

          otherOpenedModals[otherOpenedModals.length - 1].focus();
        }
        /**
         * \@internal
         * @protected
         * @return {?}
         */

      }, {
        key: "resetAdjustments",
        value: function resetAdjustments() {
          this._renderer.setStyle(this._element.nativeElement, 'paddingLeft', '');

          this._renderer.setStyle(this._element.nativeElement, 'paddingRight', '');
        }
        /** Scroll bar tricks */

        /**
         * \@internal
         * @protected
         * @return {?}
         */

      }, {
        key: "checkScrollbar",
        value: function checkScrollbar() {
          this.isBodyOverflowing = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.clientWidth < ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].innerWidth;
          this.scrollbarWidth = this.getScrollbarWidth();
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "setScrollbar",
        value: function setScrollbar() {
          if (!ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"]) {
            return;
          }

          this.originalBodyPadding = parseInt(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].getComputedStyle(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body).getPropertyValue('padding-right') || 0, 10);

          if (this.isBodyOverflowing) {
            ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.style.paddingRight = "".concat(this.originalBodyPadding + this.scrollbarWidth, "px");
          }
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "resetScrollbar",
        value: function resetScrollbar() {
          ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.style.paddingRight = "".concat(this.originalBodyPadding, "px");
        } // thx d.walsh

        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "getScrollbarWidth",
        value: function getScrollbarWidth() {
          /** @type {?} */
          var scrollDiv = this._renderer.createElement('div');

          this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);

          this._renderer.appendChild(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, scrollDiv);
          /** @type {?} */


          var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

          this._renderer.removeChild(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, scrollDiv);

          return scrollbarWidth;
        }
      }, {
        key: "config",
        set: function set(conf) {
          this._config = this.getConfig(conf);
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._config;
        }
        /**
         * @return {?}
         */

      }, {
        key: "isShown",
        get: function get() {
          return this._isShown;
        }
      }]);

      return ModalDirective;
    }();

    ModalDirective.ɵfac = function ModalDirective_Factory(t) {
      return new (t || ModalDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"]));
    };

    ModalDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ModalDirective,
      selectors: [["", "bsModal", ""]],
      hostBindings: function ModalDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ModalDirective_mousedown_HostBindingHandler($event) {
            return ctx.onClickStarted($event);
          })("mouseup", function ModalDirective_mouseup_HostBindingHandler($event) {
            return ctx.onClickStop($event);
          })("keydown.esc", function ModalDirective_keydown_esc_HostBindingHandler($event) {
            return ctx.onEsc($event);
          });
        }
      },
      inputs: {
        config: "config"
      },
      outputs: {
        onShow: "onShow",
        onShown: "onShown",
        onHide: "onHide",
        onHidden: "onHidden"
      },
      exportAs: ["bs-modal"]
    });
    /** @nocollapse */

    ModalDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"]
      }];
    };

    ModalDirective.propDecorators = {
      config: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      onShow: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onShown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onHide: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onHidden: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onClickStarted: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['mousedown', ['$event']]
      }],
      onClickStop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['mouseup', ['$event']]
      }],
      onEsc: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['keydown.esc', ['$event']]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[bsModal]',
          exportAs: 'bs-modal'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"]
        }];
      }, {
        onShow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onShown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onHide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onHidden: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onClickStarted: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mousedown', ['$event']]
        }],
        onClickStop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseup', ['$event']]
        }],
        onEsc: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown.esc', ['$event']]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var BsModalService = /*#__PURE__*/function () {
      /**
       * @param {?} rendererFactory
       * @param {?} clf
       */
      function BsModalService(rendererFactory, clf) {
        _classCallCheck(this, BsModalService);

        this.clf = clf; // constructor props

        this.config = modalConfigDefaults; // tslint:disable-next-line:no-any

        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // tslint:disable-next-line:no-any

        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // tslint:disable-next-line:no-any

        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // tslint:disable-next-line:no-any

        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.modalsCount = 0;
        this.lastDismissReason = '';
        this.loaders = [];
        this._backdropLoader = this.clf.createLoader(null, null, null);
        this._renderer = rendererFactory.createRenderer(null, null);
      }
      /**
       * Shows a modal
       * @param {?} content
       * @param {?=} config
       * @return {?}
       */
      // tslint:disable-next-line:no-any


      _createClass(BsModalService, [{
        key: "show",
        value: function show(content, config) {
          this.modalsCount++;

          this._createLoaders();

          this.config = Object.assign({}, modalConfigDefaults, config);

          this._showBackdrop();

          this.lastDismissReason = null;
          return this._showModal(content);
        }
        /**
         * @param {?} level
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide(level) {
          var _this29 = this;

          if (this.modalsCount === 1) {
            this._hideBackdrop();

            this.resetScrollbar();
          }

          this.modalsCount = this.modalsCount >= 1 ? this.modalsCount - 1 : 0;
          setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this29._hideModal(level);

            _this29.removeLoaders(level);
          }, this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0);
        }
        /**
         * @return {?}
         */

      }, {
        key: "_showBackdrop",
        value: function _showBackdrop() {
          /** @type {?} */
          var isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
          /** @type {?} */

          var isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;

          if (this.modalsCount === 1) {
            this.removeBackdrop();

            if (isBackdropEnabled && isBackdropInDOM) {
              this._backdropLoader.attach(ModalBackdropComponent).to('body').show({
                isAnimated: this.config.animated
              });

              this.backdropRef = this._backdropLoader._componentRef;
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "_hideBackdrop",
        value: function _hideBackdrop() {
          var _this30 = this;

          if (!this.backdropRef) {
            return;
          }

          this.backdropRef.instance.isShown = false;
          /** @type {?} */

          var duration = this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0;
          setTimeout(
          /**
          * @return {?}
          */
          function () {
            return _this30.removeBackdrop();
          }, duration);
        } // tslint:disable-next-line:no-any

        /**
         * @param {?} content
         * @return {?}
         */

      }, {
        key: "_showModal",
        value: function _showModal(content) {
          var _this31 = this;

          /** @type {?} */
          var modalLoader = this.loaders[this.loaders.length - 1];

          if (this.config && this.config.providers) {
            var _iterator8 = _createForOfIteratorHelper(this.config.providers),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var provider = _step8.value;
                modalLoader.provide(provider);
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
          }
          /** @type {?} */


          var bsModalRef = new BsModalRef();
          /** @type {?} */

          var modalContainerRef = modalLoader.provide({
            provide: ModalOptions,
            useValue: this.config
          }).provide({
            provide: BsModalRef,
            useValue: bsModalRef
          }).attach(ModalContainerComponent).to('body').show({
            content: content,
            isAnimated: this.config.animated,
            initialState: this.config.initialState,
            bsModalService: this
          });
          modalContainerRef.instance.level = this.getModalsCount();

          bsModalRef.hide =
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var duration = _this31.config.animated ? TRANSITION_DURATIONS.MODAL : 0;
            setTimeout(
            /**
            * @return {?}
            */
            function () {
              return modalContainerRef.instance.hide();
            }, duration);
          };

          bsModalRef.content = modalLoader.getInnerComponent() || null;

          bsModalRef.setClass =
          /**
          * @param {?} newClass
          * @return {?}
          */
          function (newClass) {
            modalContainerRef.instance.config["class"] = newClass;
          };

          return bsModalRef;
        }
        /**
         * @param {?} level
         * @return {?}
         */

      }, {
        key: "_hideModal",
        value: function _hideModal(level) {
          /** @type {?} */
          var modalLoader = this.loaders[level - 1];

          if (modalLoader) {
            modalLoader.hide();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "getModalsCount",
        value: function getModalsCount() {
          return this.modalsCount;
        }
        /**
         * @param {?} reason
         * @return {?}
         */

      }, {
        key: "setDismissReason",
        value: function setDismissReason(reason) {
          this.lastDismissReason = reason;
        }
        /**
         * @return {?}
         */

      }, {
        key: "removeBackdrop",
        value: function removeBackdrop() {
          this._backdropLoader.hide();

          this.backdropRef = null;
        }
        /** Checks if the body is overflowing and sets scrollbar width */

        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "checkScrollbar",
        value: function checkScrollbar() {
          this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
          this.scrollbarWidth = this.getScrollbarWidth();
        }
        /**
         * @return {?}
         */

      }, {
        key: "setScrollbar",
        value: function setScrollbar() {
          if (!document) {
            return;
          }

          this.originalBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right') || '0', 10);

          if (this.isBodyOverflowing) {
            document.body.style.paddingRight = "".concat(this.originalBodyPadding + this.scrollbarWidth, "px");
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "resetScrollbar",
        value: function resetScrollbar() {
          document.body.style.paddingRight = "".concat(this.originalBodyPadding, "px");
        } // thx d.walsh

        /**
         * @private
         * @return {?}
         */

      }, {
        key: "getScrollbarWidth",
        value: function getScrollbarWidth() {
          /** @type {?} */
          var scrollDiv = this._renderer.createElement('div');

          this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);

          this._renderer.appendChild(document.body, scrollDiv);
          /** @type {?} */


          var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

          this._renderer.removeChild(document.body, scrollDiv);

          return scrollbarWidth;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_createLoaders",
        value: function _createLoaders() {
          /** @type {?} */
          var loader = this.clf.createLoader(null, null, null);
          this.copyEvent(loader.onBeforeShow, this.onShow);
          this.copyEvent(loader.onShown, this.onShown);
          this.copyEvent(loader.onBeforeHide, this.onHide);
          this.copyEvent(loader.onHidden, this.onHidden);
          this.loaders.push(loader);
        }
        /**
         * @private
         * @param {?} level
         * @return {?}
         */

      }, {
        key: "removeLoaders",
        value: function removeLoaders(level) {
          this.loaders.splice(level - 1, 1);
          this.loaders.forEach(
          /**
          * @param {?} loader
          * @param {?} i
          * @return {?}
          */
          function (loader, i) {
            loader.instance.level = i + 1;
          });
        } // tslint:disable-next-line:no-any

        /**
         * @private
         * @param {?} from
         * @param {?} to
         * @return {?}
         */

      }, {
        key: "copyEvent",
        value: function copyEvent(from, to) {
          var _this32 = this;

          from.subscribe(
          /**
          * @return {?}
          */
          function () {
            to.emit(_this32.lastDismissReason);
          });
        }
      }]);

      return BsModalService;
    }();

    BsModalService.ɵfac = function BsModalService_Factory(t) {
      return new (t || BsModalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"]));
    };

    BsModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BsModalService,
      factory: BsModalService.ɵfac
    });
    /** @nocollapse */

    BsModalService.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]
      }, {
        type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]
        }, {
          type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ModalModule = /*#__PURE__*/function () {
      function ModalModule() {
        _classCallCheck(this, ModalModule);
      }

      _createClass(ModalModule, null, [{
        key: "forRoot",

        /**
         * @return {?}
         */
        value: function forRoot() {
          return {
            ngModule: ModalModule,
            providers: [BsModalService, ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]]
          };
        }
        /**
         * @return {?}
         */

      }, {
        key: "forChild",
        value: function forChild() {
          return {
            ngModule: ModalModule,
            providers: [BsModalService, ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]]
          };
        }
      }]);

      return ModalModule;
    }();

    ModalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ModalModule
    });
    ModalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ModalModule_Factory(t) {
        return new (t || ModalModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModalModule, {
        declarations: [ModalBackdropComponent, ModalDirective, ModalContainerComponent],
        exports: [ModalBackdropComponent, ModalDirective]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [ModalBackdropComponent, ModalDirective, ModalContainerComponent],
          exports: [ModalBackdropComponent, ModalDirective],
          entryComponents: [ModalBackdropComponent, ModalContainerComponent]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ngx-bootstrap-modal.js.map

    /***/

  },

  /***/
  "./src/app/reusable-components/form-fields/abstract-component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/reusable-components/form-fields/abstract-component.ts ***!
    \***********************************************************************/

  /*! exports provided: AbstractReactiveComponent */

  /***/
  function srcAppReusableComponentsFormFieldsAbstractComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AbstractReactiveComponent", function () {
      return AbstractReactiveComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AbstractReactiveComponent = /*#__PURE__*/function () {
      function AbstractReactiveComponent() {
        _classCallCheck(this, AbstractReactiveComponent);

        this.label = 'input';
        this.fieldId = null;
        this.placeholder = 'write some thing';
        this.required = false;
        this.rtldirection = false;
        this.tooltipMsg = null;
        this.control = null;
        this.validationErrors = null;
      }

      _createClass(AbstractReactiveComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this.control) {
            this.validationErrors = this.control.touched && this.control.invalid ? this.control.errors : null;
          }
        }
      }]);

      return AbstractReactiveComponent;
    }();

    AbstractReactiveComponent.ɵfac = function AbstractReactiveComponent_Factory(t) {
      return new (t || AbstractReactiveComponent)();
    };

    AbstractReactiveComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: AbstractReactiveComponent,
      inputs: {
        label: "label",
        fieldId: "fieldId",
        placeholder: "placeholder",
        required: "required",
        rtldirection: "rtldirection",
        tooltipMsg: "tooltipMsg",
        control: "control",
        groupClass: "groupClass",
        fieldClass: "fieldClass"
      }
    });
    /***/
  },

  /***/
  "./src/app/reusable-components/form-fields/form-fields.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/reusable-components/form-fields/form-fields.module.ts ***!
    \***********************************************************************/

  /*! exports provided: FormFieldsModule */

  /***/
  function srcAppReusableComponentsFormFieldsFormFieldsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormFieldsModule", function () {
      return FormFieldsModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/tooltip */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
    /* harmony import */


    var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-bootstrap/dropdown */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-bootstrap/datepicker */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
    /* harmony import */


    var _upload_photo_upload_photo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./upload-photo/upload-photo.component */
    "./src/app/reusable-components/form-fields/upload-photo/upload-photo.component.ts");
    /* harmony import */


    var _input_text_input_text_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./input-text/input-text.component */
    "./src/app/reusable-components/form-fields/input-text/input-text.component.ts");
    /* harmony import */


    var _password_text_password_text_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./password-text/password-text.component */
    "./src/app/reusable-components/form-fields/password-text/password-text.component.ts");
    /* harmony import */


    var _textarea_textarea_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./textarea/textarea.component */
    "./src/app/reusable-components/form-fields/textarea/textarea.component.ts");
    /* harmony import */


    var _select_select_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./select/select.component */
    "./src/app/reusable-components/form-fields/select/select.component.ts");
    /* harmony import */


    var _multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./multi-select/multi-select.component */
    "./src/app/reusable-components/form-fields/multi-select/multi-select.component.ts");
    /* harmony import */


    var _input_checkbox_input_checkbox_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./input-checkbox/input-checkbox.component */
    "./src/app/reusable-components/form-fields/input-checkbox/input-checkbox.component.ts");
    /* harmony import */


    var _validation_errors_validation_errors_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./validation-errors/validation-errors.component */
    "./src/app/reusable-components/form-fields/validation-errors/validation-errors.component.ts");

    var FormFieldsModule = function FormFieldsModule() {
      _classCallCheck(this, FormFieldsModule);
    };

    FormFieldsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FormFieldsModule
    });
    FormFieldsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FormFieldsModule_Factory(t) {
        return new (t || FormFieldsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormFieldsModule, {
        declarations: [_upload_photo_upload_photo_component__WEBPACK_IMPORTED_MODULE_9__["UploadPhotoComponent"], _input_text_input_text_component__WEBPACK_IMPORTED_MODULE_10__["InputTextComponent"], _textarea_textarea_component__WEBPACK_IMPORTED_MODULE_12__["TextareaComponent"], _password_text_password_text_component__WEBPACK_IMPORTED_MODULE_11__["PasswordTextComponent"], _select_select_component__WEBPACK_IMPORTED_MODULE_13__["SelectComponent"], _multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_14__["MultiSelectComponent"], _input_checkbox_input_checkbox_component__WEBPACK_IMPORTED_MODULE_15__["InputCheckboxComponent"], _validation_errors_validation_errors_component__WEBPACK_IMPORTED_MODULE_16__["ValidationErrorsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"]],
        exports: [_upload_photo_upload_photo_component__WEBPACK_IMPORTED_MODULE_9__["UploadPhotoComponent"], _input_text_input_text_component__WEBPACK_IMPORTED_MODULE_10__["InputTextComponent"], _textarea_textarea_component__WEBPACK_IMPORTED_MODULE_12__["TextareaComponent"], _password_text_password_text_component__WEBPACK_IMPORTED_MODULE_11__["PasswordTextComponent"], _select_select_component__WEBPACK_IMPORTED_MODULE_13__["SelectComponent"], _multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_14__["MultiSelectComponent"], _input_checkbox_input_checkbox_component__WEBPACK_IMPORTED_MODULE_15__["InputCheckboxComponent"], _validation_errors_validation_errors_component__WEBPACK_IMPORTED_MODULE_16__["ValidationErrorsComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormFieldsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_upload_photo_upload_photo_component__WEBPACK_IMPORTED_MODULE_9__["UploadPhotoComponent"], _input_text_input_text_component__WEBPACK_IMPORTED_MODULE_10__["InputTextComponent"], _textarea_textarea_component__WEBPACK_IMPORTED_MODULE_12__["TextareaComponent"], _password_text_password_text_component__WEBPACK_IMPORTED_MODULE_11__["PasswordTextComponent"], _select_select_component__WEBPACK_IMPORTED_MODULE_13__["SelectComponent"], _multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_14__["MultiSelectComponent"], _input_checkbox_input_checkbox_component__WEBPACK_IMPORTED_MODULE_15__["InputCheckboxComponent"], _validation_errors_validation_errors_component__WEBPACK_IMPORTED_MODULE_16__["ValidationErrorsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"]],
          exports: [_upload_photo_upload_photo_component__WEBPACK_IMPORTED_MODULE_9__["UploadPhotoComponent"], _input_text_input_text_component__WEBPACK_IMPORTED_MODULE_10__["InputTextComponent"], _textarea_textarea_component__WEBPACK_IMPORTED_MODULE_12__["TextareaComponent"], _password_text_password_text_component__WEBPACK_IMPORTED_MODULE_11__["PasswordTextComponent"], _select_select_component__WEBPACK_IMPORTED_MODULE_13__["SelectComponent"], _multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_14__["MultiSelectComponent"], _input_checkbox_input_checkbox_component__WEBPACK_IMPORTED_MODULE_15__["InputCheckboxComponent"], _validation_errors_validation_errors_component__WEBPACK_IMPORTED_MODULE_16__["ValidationErrorsComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/reusable-components/form-fields/input-checkbox/input-checkbox.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/reusable-components/form-fields/input-checkbox/input-checkbox.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: InputCheckboxComponent */

  /***/
  function srcAppReusableComponentsFormFieldsInputCheckboxInputCheckboxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputCheckboxComponent", function () {
      return InputCheckboxComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _abstract_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../abstract-component */
    "./src/app/reusable-components/form-fields/abstract-component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap/tooltip */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");

    function InputCheckboxComponent_b_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var InputCheckboxComponent = /*#__PURE__*/function (_abstract_component__) {
      _inherits(InputCheckboxComponent, _abstract_component__);

      var _super = _createSuper(InputCheckboxComponent);

      function InputCheckboxComponent() {
        _classCallCheck(this, InputCheckboxComponent);

        return _super.call(this);
      }

      _createClass(InputCheckboxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InputCheckboxComponent;
    }(_abstract_component__WEBPACK_IMPORTED_MODULE_1__["AbstractReactiveComponent"]);

    InputCheckboxComponent.ɵfac = function InputCheckboxComponent_Factory(t) {
      return new (t || InputCheckboxComponent)();
    };

    InputCheckboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InputCheckboxComponent,
      selectors: [["app-input-checkbox"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 11,
      vars: 8,
      consts: [[1, "form-group", "grid-center-middle-noGutter"], [1, "col_sm-24", "grid_sm-noGutter", "field-label"], [3, "for"], ["style", "color: red;margin: 0 5px", 4, "ngIf"], [1, "toggleButton", 3, "tooltip"], ["type", "checkbox", 3, "id"], ["viewBox", "0 0 44 44"], ["d", "M14,24 L21,31 L39.7428882,11.5937758 C35.2809627,6.53125861 30.0333333,4 24,4 C12.95,4 4,12.95 4,24 C4,35.05 12.95,44 24,44 C35.05,44 44,35.05 44,24 C44,19.3 42.5809627,15.1645919 39.7428882,11.5937758", "transform", "translate(-2.000000, -2.000000)"], [2, "color", "red", "margin", "0 5px"]],
      template: function InputCheckboxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InputCheckboxComponent_b_4_Template, 2, 0, "b", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.fieldId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.fieldClass, " grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tooltip", ctx.tooltipMsg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.fieldId);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipDirective"]],
      styles: [".form-group[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 15px;\n  margin-bottom: 35px;\n}\n\n.field-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n}\n\n.toggleButton[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: block;\n  transform-origin: 50% 50%;\n  transform-style: preserve-3d;\n  transition: transform 0.14s ease;\n}\n\n.toggleButton[_ngcontent-%COMP%]:active {\n  transform: rotateX(30deg);\n}\n\n.toggleButton[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.toggleButton[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%] {\n  border: 3px solid rgba(12, 66, 93, 0.2);\n  border-radius: 50%;\n  position: relative;\n  width: 30px;\n  height: 30px;\n}\n\n.toggleButton[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-width: 3.6;\n  stroke: #0c425dde;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  width: 30px;\n  height: 30px;\n  display: block;\n  position: absolute;\n  left: -3px;\n  top: -3px;\n  right: -3px;\n  bottom: -3px;\n  z-index: 1;\n  stroke-dashoffset: 124.6;\n  stroke-dasharray: 0 162.6 133 29.6;\n  transition: all 0.4s ease 0s;\n}\n\n.toggleButton[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]:before, .toggleButton[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 3px;\n  height: 16px;\n  background: #0c425dde;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  border-radius: 5px;\n}\n\n.toggleButton[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]:before {\n  opacity: 0;\n  transform: scale(0.3) translate(-50%, -50%) rotate(45deg);\n  -webkit-animation: bounceInBefore 0.3s linear forwards 0.3s;\n          animation: bounceInBefore 0.3s linear forwards 0.3s;\n}\n\n.toggleButton[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]:after {\n  opacity: 0;\n  transform: scale(0.3) translate(-50%, -50%) rotate(-45deg);\n  -webkit-animation: bounceInAfter 0.3s linear forwards 0.3s;\n          animation: bounceInAfter 0.3s linear forwards 0.3s;\n}\n\n.toggleButton[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + div[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  stroke-dashoffset: 162.6;\n  stroke-dasharray: 0 162.6 28 134.6;\n  transition: all 0.4s ease 0.2s;\n}\n\n.toggleButton[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + div[_ngcontent-%COMP%]:before {\n  opacity: 0;\n  transform: scale(0.3) translate(-50%, -50%) rotate(45deg);\n  -webkit-animation: bounceInBeforeDont 0.3s linear forwards 0s;\n          animation: bounceInBeforeDont 0.3s linear forwards 0s;\n}\n\n.toggleButton[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + div[_ngcontent-%COMP%]:after {\n  opacity: 0;\n  transform: scale(0.3) translate(-50%, -50%) rotate(-45deg);\n  -webkit-animation: bounceInAfterDont 0.3s linear forwards 0s;\n          animation: bounceInAfterDont 0.3s linear forwards 0s;\n}\n\n@-webkit-keyframes bounceInBefore {\n  0% {\n    opacity: 0;\n    transform: scale(0.3) translate(-50%, -50%) rotate(45deg);\n  }\n  50% {\n    opacity: 0.9;\n    transform: scale(1.1) translate(-50%, -50%) rotate(45deg);\n  }\n  80% {\n    opacity: 1;\n    transform: scale(0.89) translate(-50%, -50%) rotate(45deg);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translate(-50%, -50%) rotate(45deg);\n  }\n}\n\n@keyframes bounceInBefore {\n  0% {\n    opacity: 0;\n    transform: scale(0.3) translate(-50%, -50%) rotate(45deg);\n  }\n  50% {\n    opacity: 0.9;\n    transform: scale(1.1) translate(-50%, -50%) rotate(45deg);\n  }\n  80% {\n    opacity: 1;\n    transform: scale(0.89) translate(-50%, -50%) rotate(45deg);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translate(-50%, -50%) rotate(45deg);\n  }\n}\n\n@-webkit-keyframes bounceInAfter {\n  0% {\n    opacity: 0;\n    transform: scale(0.3) translate(-50%, -50%) rotate(-45deg);\n  }\n  50% {\n    opacity: 0.9;\n    transform: scale(1.1) translate(-50%, -50%) rotate(-45deg);\n  }\n  80% {\n    opacity: 1;\n    transform: scale(0.89) translate(-50%, -50%) rotate(-45deg);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translate(-50%, -50%) rotate(-45deg);\n  }\n}\n\n@keyframes bounceInAfter {\n  0% {\n    opacity: 0;\n    transform: scale(0.3) translate(-50%, -50%) rotate(-45deg);\n  }\n  50% {\n    opacity: 0.9;\n    transform: scale(1.1) translate(-50%, -50%) rotate(-45deg);\n  }\n  80% {\n    opacity: 1;\n    transform: scale(0.89) translate(-50%, -50%) rotate(-45deg);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translate(-50%, -50%) rotate(-45deg);\n  }\n}\n\n@-webkit-keyframes bounceInBeforeDont {\n  0% {\n    opacity: 1;\n    transform: scale(1) translate(-50%, -50%) rotate(45deg);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(0.3) translate(-50%, -50%) rotate(45deg);\n  }\n}\n\n@keyframes bounceInBeforeDont {\n  0% {\n    opacity: 1;\n    transform: scale(1) translate(-50%, -50%) rotate(45deg);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(0.3) translate(-50%, -50%) rotate(45deg);\n  }\n}\n\n@-webkit-keyframes bounceInAfterDont {\n  0% {\n    opacity: 1;\n    transform: scale(1) translate(-50%, -50%) rotate(-45deg);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(0.3) translate(-50%, -50%) rotate(-45deg);\n  }\n}\n\n@keyframes bounceInAfterDont {\n  0% {\n    opacity: 1;\n    transform: scale(1) translate(-50%, -50%) rotate(-45deg);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(0.3) translate(-50%, -50%) rotate(-45deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV1c2FibGUtY29tcG9uZW50cy9mb3JtLWZpZWxkcy9pbnB1dC1jaGVja2JveC9FOlxcVW50aXRsZWQgRm9sZGVyXFxwcml2YXRlXFxwcm9qZWN0c1xcZnVsbF9zdGFja1xcbW90b2JhclxcbW90b2Jhcl9hZG1pbi9zcmNcXGFwcFxccmV1c2FibGUtY29tcG9uZW50c1xcZm9ybS1maWVsZHNcXGlucHV0LWNoZWNrYm94XFxpbnB1dC1jaGVja2JveC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmV1c2FibGUtY29tcG9uZW50cy9mb3JtLWZpZWxkcy9pbnB1dC1jaGVja2JveC9pbnB1dC1jaGVja2JveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBREFFO0VBQ0UseUJBQUE7QUNFSjs7QURBRTtFQUNFLGFBQUE7QUNFSjs7QURESTtFQUNFLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDR047O0FERk07RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkEvQkE7RUFnQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7QUNJUjs7QURGTTtFQUVFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQXBEQTtFQXFEQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUNHUjs7QURETTtFQUNFLFVBQUE7RUFDQSx5REFBQTtFQUNBLDJEQUFBO1VBQUEsbURBQUE7QUNHUjs7QURETTtFQUNFLFVBQUE7RUFDQSwwREFBQTtFQUNBLDBEQUFBO1VBQUEsa0RBQUE7QUNHUjs7QURDTTtFQUNFLHdCQUFBO0VBQ0Esa0NBQUE7RUFDQSw4QkFBQTtBQ0NSOztBRENNO0VBQ0UsVUFBQTtFQUNBLHlEQUFBO0VBQ0EsNkRBQUE7VUFBQSxxREFBQTtBQ0NSOztBRENNO0VBQ0UsVUFBQTtFQUNBLDBEQUFBO0VBQ0EsNERBQUE7VUFBQSxvREFBQTtBQ0NSOztBREtBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EseURBQUE7RUNGRjtFRElBO0lBQ0UsWUFBQTtJQUNBLHlEQUFBO0VDRkY7RURJQTtJQUNFLFVBQUE7SUFDQSwwREFBQTtFQ0ZGO0VESUE7SUFDRSxVQUFBO0lBQ0EsdURBQUE7RUNGRjtBQUNGOztBRGRBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EseURBQUE7RUNGRjtFRElBO0lBQ0UsWUFBQTtJQUNBLHlEQUFBO0VDRkY7RURJQTtJQUNFLFVBQUE7SUFDQSwwREFBQTtFQ0ZGO0VESUE7SUFDRSxVQUFBO0lBQ0EsdURBQUE7RUNGRjtBQUNGOztBREtBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsMERBQUE7RUNIRjtFREtBO0lBQ0UsWUFBQTtJQUNBLDBEQUFBO0VDSEY7RURLQTtJQUNFLFVBQUE7SUFDQSwyREFBQTtFQ0hGO0VES0E7SUFDRSxVQUFBO0lBQ0Esd0RBQUE7RUNIRjtBQUNGOztBRGJBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsMERBQUE7RUNIRjtFREtBO0lBQ0UsWUFBQTtJQUNBLDBEQUFBO0VDSEY7RURLQTtJQUNFLFVBQUE7SUFDQSwyREFBQTtFQ0hGO0VES0E7SUFDRSxVQUFBO0lBQ0Esd0RBQUE7RUNIRjtBQUNGOztBRE1BO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsdURBQUE7RUNKRjtFRE1BO0lBQ0UsVUFBQTtJQUNBLHlEQUFBO0VDSkY7QUFDRjs7QURKQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLHVEQUFBO0VDSkY7RURNQTtJQUNFLFVBQUE7SUFDQSx5REFBQTtFQ0pGO0FBQ0Y7O0FET0E7RUFDRTtJQUNFLFVBQUE7SUFDQSx3REFBQTtFQ0xGO0VET0E7SUFDRSxVQUFBO0lBQ0EsMERBQUE7RUNMRjtBQUNGOztBREhBO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esd0RBQUE7RUNMRjtFRE9BO0lBQ0UsVUFBQTtJQUNBLDBEQUFBO0VDTEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3JldXNhYmxlLWNvbXBvbmVudHMvZm9ybS1maWVsZHMvaW5wdXQtY2hlY2tib3gvaW5wdXQtY2hlY2tib3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3I6ICMwYzQyNWRkZTtcbi5mb3JtLWdyb3VwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cbi5maWVsZC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi50b2dnbGVCdXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNHMgZWFzZTtcbiAgJjphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgzMGRlZyk7XG4gIH1cbiAgaW5wdXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgJiArIGRpdiB7XG4gICAgICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKCRjb2xvciwgMC4yKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgc3ZnIHtcbiAgICAgICAgZmlsbDogbm9uZTtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiAzLjY7XG4gICAgICAgIHN0cm9rZTogJGNvbG9yO1xuICAgICAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IC0zcHg7XG4gICAgICAgIHRvcDogLTNweDtcbiAgICAgICAgcmlnaHQ6IC0zcHg7XG4gICAgICAgIGJvdHRvbTogLTNweDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDE2Mi42IC0gMzg7XG4gICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDAgMTYyLjYgMTMzICgxNjIuNiAtIDEzMyk7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XG4gICAgICB9XG4gICAgICAmOmJlZm9yZSxcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB3aWR0aDogM3B4O1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICRjb2xvcjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICB9XG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgYW5pbWF0aW9uOiBib3VuY2VJbkJlZm9yZSAwLjNzIGxpbmVhciBmb3J3YXJkcyAwLjNzO1xuICAgICAgfVxuICAgICAgJjphZnRlciB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC00NWRlZyk7XG4gICAgICAgIGFuaW1hdGlvbjogYm91bmNlSW5BZnRlciAwLjNzIGxpbmVhciBmb3J3YXJkcyAwLjNzO1xuICAgICAgfVxuICAgIH1cbiAgICAmOmNoZWNrZWQgKyBkaXYge1xuICAgICAgc3ZnIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDE2Mi42O1xuICAgICAgICBzdHJva2UtZGFzaGFycmF5OiAwIDE2Mi42IDI4ICgxNjIuNiAtIDI4KTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZSAwLjJzO1xuICAgICAgfVxuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMykgdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIGFuaW1hdGlvbjogYm91bmNlSW5CZWZvcmVEb250IDAuM3MgbGluZWFyIGZvcndhcmRzIDBzO1xuICAgICAgfVxuICAgICAgJjphZnRlciB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC00NWRlZyk7XG4gICAgICAgIGFuaW1hdGlvbjogYm91bmNlSW5BZnRlckRvbnQgMC4zcyBsaW5lYXIgZm9yd2FyZHMgMHM7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlSW5CZWZvcmUge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMykgdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xuICB9XG4gIDgwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuODkpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZUluQWZ0ZXIge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMykgdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC00NWRlZyk7XG4gIH1cbiAgODAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44OSkgdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC00NWRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBib3VuY2VJbkJlZm9yZURvbnQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjMpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlSW5BZnRlckRvbnQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC00NWRlZyk7XG4gIH1cbn1cbiIsIi5mb3JtLWdyb3VwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cblxuLmZpZWxkLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzY2Njtcbn1cblxuLnRvZ2dsZUJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE0cyBlYXNlO1xufVxuLnRvZ2dsZUJ1dHRvbjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMzBkZWcpO1xufVxuLnRvZ2dsZUJ1dHRvbiBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udG9nZ2xlQnV0dG9uIGlucHV0ICsgZGl2IHtcbiAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgxMiwgNjYsIDkzLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cbi50b2dnbGVCdXR0b24gaW5wdXQgKyBkaXYgc3ZnIHtcbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlLXdpZHRoOiAzLjY7XG4gIHN0cm9rZTogIzBjNDI1ZGRlO1xuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0zcHg7XG4gIHRvcDogLTNweDtcbiAgcmlnaHQ6IC0zcHg7XG4gIGJvdHRvbTogLTNweDtcbiAgei1pbmRleDogMTtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEyNC42O1xuICBzdHJva2UtZGFzaGFycmF5OiAwIDE2Mi42IDEzMyAyOS42O1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xufVxuLnRvZ2dsZUJ1dHRvbiBpbnB1dCArIGRpdjpiZWZvcmUsIC50b2dnbGVCdXR0b24gaW5wdXQgKyBkaXY6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogM3B4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJhY2tncm91bmQ6ICMwYzQyNWRkZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4udG9nZ2xlQnV0dG9uIGlucHV0ICsgZGl2OmJlZm9yZSB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcbiAgYW5pbWF0aW9uOiBib3VuY2VJbkJlZm9yZSAwLjNzIGxpbmVhciBmb3J3YXJkcyAwLjNzO1xufVxuLnRvZ2dsZUJ1dHRvbiBpbnB1dCArIGRpdjphZnRlciB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC00NWRlZyk7XG4gIGFuaW1hdGlvbjogYm91bmNlSW5BZnRlciAwLjNzIGxpbmVhciBmb3J3YXJkcyAwLjNzO1xufVxuLnRvZ2dsZUJ1dHRvbiBpbnB1dDpjaGVja2VkICsgZGl2IHN2ZyB7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAxNjIuNjtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMCAxNjIuNiAyOCAxMzQuNjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZSAwLjJzO1xufVxuLnRvZ2dsZUJ1dHRvbiBpbnB1dDpjaGVja2VkICsgZGl2OmJlZm9yZSB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcbiAgYW5pbWF0aW9uOiBib3VuY2VJbkJlZm9yZURvbnQgMC4zcyBsaW5lYXIgZm9yd2FyZHMgMHM7XG59XG4udG9nZ2xlQnV0dG9uIGlucHV0OmNoZWNrZWQgKyBkaXY6YWZ0ZXIge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuMykgdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xuICBhbmltYXRpb246IGJvdW5jZUluQWZ0ZXJEb250IDAuM3MgbGluZWFyIGZvcndhcmRzIDBzO1xufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZUluQmVmb3JlIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjMpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcbiAgfVxuICA4MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjg5KSB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYm91bmNlSW5BZnRlciB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC00NWRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuICA4MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjg5KSB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC00NWRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBib3VuY2VJbkJlZm9yZURvbnQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjMpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJvdW5jZUluQWZ0ZXJEb250IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC00NWRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMykgdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputCheckboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-input-checkbox',
          templateUrl: './input-checkbox.component.html',
          styleUrls: ['./input-checkbox.component.scss'] // changeDetection: ChangeDetectionStrategy.OnPush

        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/reusable-components/form-fields/input-text/input-text.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/reusable-components/form-fields/input-text/input-text.component.ts ***!
    \************************************************************************************/

  /*! exports provided: InputTextComponent */

  /***/
  function srcAppReusableComponentsFormFieldsInputTextInputTextComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputTextComponent", function () {
      return InputTextComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _abstract_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../abstract-component */
    "./src/app/reusable-components/form-fields/abstract-component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/tooltip */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
    /* harmony import */


    var _validation_errors_validation_errors_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../validation-errors/validation-errors.component */
    "./src/app/reusable-components/form-fields/validation-errors/validation-errors.component.ts");

    function InputTextComponent_b_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0, a1, a2) {
      return {
        rtldirection: a0,
        "is-invalid": a1,
        "is-valid": a2
      };
    };

    var InputTextComponent = /*#__PURE__*/function (_abstract_component__2) {
      _inherits(InputTextComponent, _abstract_component__2);

      var _super2 = _createSuper(InputTextComponent);

      function InputTextComponent() {
        _classCallCheck(this, InputTextComponent);

        return _super2.call(this);
      }

      return InputTextComponent;
    }(_abstract_component__WEBPACK_IMPORTED_MODULE_1__["AbstractReactiveComponent"]);

    InputTextComponent.ɵfac = function InputTextComponent_Factory(t) {
      return new (t || InputTextComponent)();
    };

    InputTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InputTextComponent,
      selectors: [["app-input-text"]],
      inputs: {
        type: "type"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 9,
      vars: 17,
      consts: [[1, "form-group", "grid-center-middle-noGutter"], [1, "col_sm-24", "grid_sm-noGutter"], [3, "for"], ["style", "color: red; margin: 0 5px", 4, "ngIf"], ["autocomplete", "off", "placement", "top", 1, "form-control", 3, "type", "formControl", "id", "placeholder", "tooltip", "ngClass"], [1, "col-24", "grid-noGutter"], [1, "col", 3, "validationErrors"], [2, "color", "red", "margin", "0 5px"]],
      template: function InputTextComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InputTextComponent_b_4_Template, 2, 0, "b", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-validation-errors", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.fieldId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.fieldClass, " grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.type)("formControl", ctx.control)("id", ctx.fieldId)("placeholder", ctx.placeholder)("tooltip", ctx.tooltipMsg)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](13, _c0, ctx.rtldirection, !ctx.control.valid && ctx.control.touched, ctx.control.valid && ctx.control.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("validationErrors", ctx.validationErrors);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _validation_errors_validation_errors_component__WEBPACK_IMPORTED_MODULE_5__["ValidationErrorsComponent"]],
      styles: [".form-group[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 15px;\n  margin-bottom: 35px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n}\n.rtldirection[_ngcontent-%COMP%] {\n  direction: rtl;\n  padding-right: 30px !important;\n}\ninput[_ngcontent-%COMP%] {\n  color: #555353;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV1c2FibGUtY29tcG9uZW50cy9mb3JtLWZpZWxkcy9pbnB1dC10ZXh0L0U6XFxVbnRpdGxlZCBGb2xkZXJcXHByaXZhdGVcXHByb2plY3RzXFxmdWxsX3N0YWNrXFxtb3RvYmFyXFxtb3RvYmFyX2FkbWluL3NyY1xcYXBwXFxyZXVzYWJsZS1jb21wb25lbnRzXFxmb3JtLWZpZWxkc1xcaW5wdXQtdGV4dFxcaW5wdXQtdGV4dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmV1c2FibGUtY29tcG9uZW50cy9mb3JtLWZpZWxkcy9pbnB1dC10ZXh0L2lucHV0LXRleHQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JldXNhYmxlLWNvbXBvbmVudHMvZm9ybS1maWVsZHMvaW5wdXQtdGV4dC9FOlxcVW50aXRsZWQgRm9sZGVyXFxwcml2YXRlXFxwcm9qZWN0c1xcZnVsbF9zdGFja1xcbW90b2JhclxcbW90b2Jhcl9hZG1pbi9zcmNcXHNjc3NcXGFic3RyYWN0c1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0RGO0FER0U7RUFDRSxlRWdFZ0I7RUYvRGhCLFdBQUE7QUNESjtBRElBO0VBQ0UsY0FBQTtFQUNBLDhCQUFBO0FDREY7QURHQTtFQUNFLGNBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3JldXNhYmxlLWNvbXBvbmVudHMvZm9ybS1maWVsZHMvaW5wdXQtdGV4dC9pbnB1dC10ZXh0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3Njc3MvYWJzdHJhY3RzL3ZhcmlhYmxlc1wiO1xuXG4uZm9ybS1ncm91cCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG5cbiAgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogJGxhYmVsLWZvbnQ7XG4gICAgY29sb3I6ICM2NjY7XG4gIH1cbn1cbi5ydGxkaXJlY3Rpb24ge1xuICBkaXJlY3Rpb246IHJ0bDtcbiAgcGFkZGluZy1yaWdodDogMzBweCAhaW1wb3J0YW50O1xufVxuaW5wdXQge1xuICBjb2xvcjogIzU1NTM1Mztcbn1cbiIsIi5mb3JtLWdyb3VwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cbi5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzY2Njtcbn1cblxuLnJ0bGRpcmVjdGlvbiB7XG4gIGRpcmVjdGlvbjogcnRsO1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0IHtcbiAgY29sb3I6ICM1NTUzNTM7XG59IiwiLy9jb2xvcnNcbiR3aGl0ZSA6IHdoaXRlO1xuJGNvbG9yMTogIzBjNDI1ZDtcbiRjb2xvcjI6ICNhOGQyYmU7XG4kY29sb3IzOiAjNDg5OWMyO1xuJGNvbG9yNDogIzFmNzdhMztcblxuJGNvbG9yNSA6ICNmOWFlNGU7XG4kY29sb3I1NTogI2Q2ODUyMjtcblxuJGJvcmRlciAgICAgICAgICAgICAgICAgOiAjZjFmMWYxO1xuJGRhdGEtdGFibGUtYm9yZGVyICAgICAgOiAjZTllOWU5O1xuJGdyYXkyICAgICAgICAgICAgICAgICAgOiAjZTJlMmUyO1xuJGdyYXkzICAgICAgICAgICAgICAgICAgOiAjNzU3NTc1O1xuJHRyYXNoLWNvbG9yICAgICAgICAgICAgOiAjQzkzMDJDO1xuJGZvbnQtY29sb3IgICAgICAgICAgICAgOiAjNTU1O1xuJGFjdGl2ZS1icmVhZGNydW1iLWNvbG9yOiAjMzQzNDM0O1xuJGNhcmQtaGVhZGVyLWJnICAgICAgICAgOiAjZjlmOWY5OyAvLyNlZmVmZWY7IC8vI2Y5ZjlmOTtcbiRwbGFjZWhvbGRlci1jb2xvciAgICAgIDogI2IzYjNiMztcblxuLy8gYmFja2dyb3VuZCBjb2xvclxuJG1haW4tYmFja2dyb3VuZC1jb2xvciAgOiAjZWZlZGYyO1xuJGhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiRkYXRhLXRhYmxlLWJveCAgICAgICAgIDogI2ZmZmRmZTsgLy8jZjdmN2Y3O1xuJGNhcmQtYm9keSAgICAgICAgICAgICAgOiAjZmZmZGZlO1xuXG4vLyBEYXNoYm9hcmRcbiRtYXJnaW5CZXR3ZWVuQ2FyZHM6IDIycHg7XG4kYXhpc0ZvbnRTaXplICAgICAgOiAxMnB4O1xuJHNtYWxsQXhpc0ZvbnRTaXplIDogMTBweDtcblxuLy9oZWFkZXJcbiRwcm9maWxlLW1lbnUtY29sb3I6ICNmOWY5Zjk7XG4kYmlsbC1jb2xvciAgICAgICAgOiAjOWJhMmFhO1xuJGJpbGwtaG92ZXItY29sb3IgIDogIzczODE4ZjtcblxuLy9MYXlvdXQgVmFyaWFibGVzXG5cbiRoZWFkZXItaGVpZ2h0IDogNTVweDtcbiRzaWRlTWVudS13aWR0aDogMjAwcHg7XG5cblxuLy9sb2dpblxuJGxveWFsaXR5LWNvbG9yICA6ICM4ODdmN2Y7XG4kbG9naW4tYm94LWNvbG9yIDogI2Y1ZjJmMDtcblxuLy9tYWlsXG4kbWFpbC1jaGVja2JveC1jb2xvcjogIzAwNzNhYTtcbiR1c2VyLW1haWwtY29sb3IgICAgOiAjMjkyYjJjO1xuXG4vL3Byb2ZpbGVcbiRhY3RpdmUtY29sb3IgICAgIDogI2Y0ZjZmOTtcbiRpY29uLWNvbG9yICAgICAgIDogIzk1OWNiNjtcbiRsYWJlbC10aXRsZS1jb2xvcjogIzUwNTY2YTtcblxuLy9lbWFpbCB0ZW1wbGF0ZXNcbiRlbWFpbC1ibHVlLWNvbG9yOiAjMGY0MTVkO1xuJGVtYWlsLWdyYXktY29sb3I6ICM1ZjYwNjA7XG4kZW1haWwtc3lhbi1jb2xvcjogI2EyZDljMjtcbiRlbWFpbC1vcmFnbmUtY29sb3I6ICNmZmFjNTI7XG5cbi8vZm9udHNcbiRmb250MjggICAgICAgICAgIDogMjhweDtcbiRmb250MjQgICAgICAgICAgIDogMjRweDtcbiRmb250MTggICAgICAgICAgIDogMThweDtcbiRmb250MTYgICAgICAgICAgIDogMTZweDtcbiRmb250MTQgICAgICAgICAgIDogMTRweDtcbiRmb250MTIgICAgICAgICAgIDogMTJweDtcbiRmb250MTAgICAgICAgICAgIDogMTBweDtcbiRmb250LXdlaWdodC02MDAgIDogNjAwO1xuJGZvbnQtd2VpZ2h0LTUwMCAgOiA1MDA7XG4kcGxhY2Vob2xkZXItZm9udCA6IDEycHg7XG4kbGFiZWwtZm9udCAgICAgICA6IDE0cHg7XG4kY2FyZC1oZWFkZXItZm9udCA6IDE2cHg7XG5cbiRkYXRhLXRhYmxlLWhlYWRlci0xMzY2IDogMTRweDtcbiRkYXRhLXRhYmxlLWhlYWRlci0xOTIwIDogMTZweDtcbiRkYXRhLXRhYmxlLWJvZHktMTM2NiA6IDEycHg7XG4kZGF0YS10YWJsZS1ib2R5LTE5MjA6IDE2cHg7XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputTextComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-input-text',
          templateUrl: './input-text.component.html',
          styleUrls: ['./input-text.component.scss']
        }]
      }], function () {
        return [];
      }, {
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/reusable-components/form-fields/multi-select/multi-select.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/reusable-components/form-fields/multi-select/multi-select.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: MultiSelectComponent */

  /***/
  function srcAppReusableComponentsFormFieldsMultiSelectMultiSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MultiSelectComponent", function () {
      return MultiSelectComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _abstract_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../abstract-component */
    "./src/app/reusable-components/form-fields/abstract-component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/tooltip */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _validation_errors_validation_errors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../validation-errors/validation-errors.component */
    "./src/app/reusable-components/form-fields/validation-errors/validation-errors.component.ts");

    function MultiSelectComponent_b_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var MultiSelectComponent = /*#__PURE__*/function (_abstract_component__3) {
      _inherits(MultiSelectComponent, _abstract_component__3);

      var _super3 = _createSuper(MultiSelectComponent);

      function MultiSelectComponent() {
        var _this33;

        _classCallCheck(this, MultiSelectComponent);

        _this33 = _super3.call(this);
        _this33.ItemsList = null;
        _this33.itemselected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this33;
      }

      _createClass(MultiSelectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          if (this.initialSelectedList) {
            if (this.initialSelectedList.length > 0) {
              console.log(this.initialSelectedList);
              this.selectedItemsIds = this.initialSelectedList.map(function (e) {
                return e._id;
              });
            }
          }
        }
      }, {
        key: "ItemSelected",
        value: function ItemSelected(event) {
          var _this34 = this;

          var selectedList = [];

          var _loop2 = function _loop2(index) {
            selectedList.push(_this34.ItemsList.find(function (x) {
              return x._id === event[index];
            }));
          };

          for (var index = 0; index < event.length; index++) {
            _loop2(index);
          }

          this.itemselected.emit(selectedList);
        }
      }, {
        key: "clear",
        value: function clear(event) {// this.selectedItem = null;
          // this.itemselected.emit([]);
        }
      }]);

      return MultiSelectComponent;
    }(_abstract_component__WEBPACK_IMPORTED_MODULE_1__["AbstractReactiveComponent"]);

    MultiSelectComponent.ɵfac = function MultiSelectComponent_Factory(t) {
      return new (t || MultiSelectComponent)();
    };

    MultiSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MultiSelectComponent,
      selectors: [["app-multi-select"]],
      inputs: {
        ItemsList: "ItemsList",
        initialSelectedList: "initialSelectedList"
      },
      outputs: {
        itemselected: "itemselected"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 9,
      vars: 14,
      consts: [[1, "form-group", "grid-center-middle-noGutter"], [1, "col_sm-24", "grid_sm-noGutter"], [3, "for"], ["style", "color: red; margin: 0 5px", 4, "ngIf"], [2, "position", "relative"], ["placement", "top", "bindLabel", "nameEn", "bindValue", "_id", 1, "form-control", 3, "id", "tooltip", "hideSelected", "items", "multiple", "placeholder", "ngModel", "ngModelChange"], [1, "col-24", "grid-noGutter"], [1, "col", 3, "validationErrors"], [2, "color", "red", "margin", "0 5px"]],
      template: function MultiSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MultiSelectComponent_b_4_Template, 2, 0, "b", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ng-select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MultiSelectComponent_Template_ng_select_ngModelChange_6_listener($event) {
            return ctx.selectedItemsIds = $event;
          })("ngModelChange", function MultiSelectComponent_Template_ng_select_ngModelChange_6_listener($event) {
            return ctx.ItemSelected($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-validation-errors", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.fieldId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.fieldClass, " grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.fieldId)("tooltip", ctx.tooltipMsg)("hideSelected", true)("items", ctx.ItemsList)("multiple", true)("placeholder", ctx.selectedItemsIds == null || ctx.selectedItemsIds != null && ctx.selectedItemsIds.length == 0 ? "Multiple select" : "")("ngModel", ctx.selectedItemsIds);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("validationErrors", ctx.validationErrors);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__["NgSelectComponent"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _validation_errors_validation_errors_component__WEBPACK_IMPORTED_MODULE_6__["ValidationErrorsComponent"]],
      styles: ["[_nghost-%COMP%]     ng-select {\n  width: 100%;\n}\n[_nghost-%COMP%]     ng-select.ng-select-opened {\n  border-radius: 20px;\n  outline: 0;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n}\n[_nghost-%COMP%]     ng-select.ng-select-opened ng-dropdown-panel {\n  background-color: white;\n  border: 1px solid #e2e2e2;\n}\n[_nghost-%COMP%]     ng-select.ng-select-opened ng-dropdown-panel .ng-option {\n  padding: 5px;\n}\n[_nghost-%COMP%]     ng-select.ng-select-opened ng-dropdown-panel .ng-option:hover {\n  background-color: #e2e2e2;\n}\n[_nghost-%COMP%]     ng-select .ng-value {\n  background-color: #e5e5e5;\n  margin: 0 2px;\n  padding: 0 8px;\n  border-radius: 5px;\n}\n[_nghost-%COMP%]     ng-select .ng-value .ng-value-label {\n  margin: 0 3px;\n}\n.form-group[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 15px;\n  margin-bottom: 35px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n}\n.rtldirection[_ngcontent-%COMP%] {\n  direction: rtl;\n  padding-right: 30px !important;\n}\ninput[_ngcontent-%COMP%] {\n  color: #555353;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV1c2FibGUtY29tcG9uZW50cy9mb3JtLWZpZWxkcy9tdWx0aS1zZWxlY3QvRTpcXFVudGl0bGVkIEZvbGRlclxccHJpdmF0ZVxccHJvamVjdHNcXGZ1bGxfc3RhY2tcXG1vdG9iYXJcXG1vdG9iYXJfYWRtaW4vc3JjXFxhcHBcXHJldXNhYmxlLWNvbXBvbmVudHNcXGZvcm0tZmllbGRzXFxtdWx0aS1zZWxlY3RcXG11bHRpLXNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmV1c2FibGUtY29tcG9uZW50cy9mb3JtLWZpZWxkcy9tdWx0aS1zZWxlY3QvbXVsdGktc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZXVzYWJsZS1jb21wb25lbnRzL2Zvcm0tZmllbGRzL211bHRpLXNlbGVjdC9FOlxcVW50aXRsZWQgRm9sZGVyXFxwcml2YXRlXFxwcm9qZWN0c1xcZnVsbF9zdGFja1xcbW90b2JhclxcbW90b2Jhcl9hZG1pbi9zcmNcXHNjc3NcXGFic3RyYWN0c1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtBQ0RGO0FERUU7RUFDRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxrRkFBQTtBQ0FKO0FER0k7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0FDRE47QURHTTtFQUNFLFlBQUE7QUNEUjtBREVRO0VBQ0UseUJBQUE7QUNBVjtBRE1FO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDSko7QURLSTtFQUNFLGFBQUE7QUNITjtBRFFBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0xGO0FET0U7RUFDRSxlRWdDZ0I7RUYvQmhCLFdBQUE7QUNMSjtBRFFBO0VBQ0UsY0FBQTtFQUNBLDhCQUFBO0FDTEY7QURPQTtFQUNFLGNBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL3JldXNhYmxlLWNvbXBvbmVudHMvZm9ybS1maWVsZHMvbXVsdGktc2VsZWN0L211bHRpLXNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zY3NzL2Fic3RyYWN0cy92YXJpYWJsZXNcIjtcblxuOmhvc3QgOjpuZy1kZWVwIG5nLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICAmLm5nLXNlbGVjdC1vcGVuZWQge1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSksXG4gICAgICAwIDAgOHB4IHJnYmEoMTAyLCAxNzUsIDIzMywgMC42KTtcblxuICAgIG5nLWRyb3Bkb3duLXBhbmVsIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UyZTJlMjtcblxuICAgICAgLm5nLW9wdGlvbiB7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTJlMjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5uZy12YWx1ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcbiAgICBtYXJnaW46IDAgMnB4O1xuICAgIHBhZGRpbmc6IDAgOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAubmctdmFsdWUtbGFiZWwge1xuICAgICAgbWFyZ2luOiAwIDNweDtcbiAgICB9XG4gIH1cbn1cblxuLmZvcm0tZ3JvdXAge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuXG4gIGxhYmVsIHtcbiAgICBmb250LXNpemU6ICRsYWJlbC1mb250O1xuICAgIGNvbG9yOiAjNjY2O1xuICB9XG59XG4ucnRsZGlyZWN0aW9uIHtcbiAgZGlyZWN0aW9uOiBydGw7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHggIWltcG9ydGFudDtcbn1cbmlucHV0IHtcbiAgY29sb3I6ICM1NTUzNTM7XG59XG4iLCI6aG9zdCA6Om5nLWRlZXAgbmctc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCA6Om5nLWRlZXAgbmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSksIDAgMCA4cHggcmdiYSgxMDIsIDE3NSwgMjMzLCAwLjYpO1xufVxuOmhvc3QgOjpuZy1kZWVwIG5nLXNlbGVjdC5uZy1zZWxlY3Qtb3BlbmVkIG5nLWRyb3Bkb3duLXBhbmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmUyZTI7XG59XG46aG9zdCA6Om5nLWRlZXAgbmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQgbmctZHJvcGRvd24tcGFuZWwgLm5nLW9wdGlvbiB7XG4gIHBhZGRpbmc6IDVweDtcbn1cbjpob3N0IDo6bmctZGVlcCBuZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZCBuZy1kcm9wZG93bi1wYW5lbCAubmctb3B0aW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTJlMjtcbn1cbjpob3N0IDo6bmctZGVlcCBuZy1zZWxlY3QgLm5nLXZhbHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcbiAgbWFyZ2luOiAwIDJweDtcbiAgcGFkZGluZzogMCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbjpob3N0IDo6bmctZGVlcCBuZy1zZWxlY3QgLm5nLXZhbHVlIC5uZy12YWx1ZS1sYWJlbCB7XG4gIG1hcmdpbjogMCAzcHg7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cbi5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzY2Njtcbn1cblxuLnJ0bGRpcmVjdGlvbiB7XG4gIGRpcmVjdGlvbjogcnRsO1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0IHtcbiAgY29sb3I6ICM1NTUzNTM7XG59IiwiLy9jb2xvcnNcbiR3aGl0ZSA6IHdoaXRlO1xuJGNvbG9yMTogIzBjNDI1ZDtcbiRjb2xvcjI6ICNhOGQyYmU7XG4kY29sb3IzOiAjNDg5OWMyO1xuJGNvbG9yNDogIzFmNzdhMztcblxuJGNvbG9yNSA6ICNmOWFlNGU7XG4kY29sb3I1NTogI2Q2ODUyMjtcblxuJGJvcmRlciAgICAgICAgICAgICAgICAgOiAjZjFmMWYxO1xuJGRhdGEtdGFibGUtYm9yZGVyICAgICAgOiAjZTllOWU5O1xuJGdyYXkyICAgICAgICAgICAgICAgICAgOiAjZTJlMmUyO1xuJGdyYXkzICAgICAgICAgICAgICAgICAgOiAjNzU3NTc1O1xuJHRyYXNoLWNvbG9yICAgICAgICAgICAgOiAjQzkzMDJDO1xuJGZvbnQtY29sb3IgICAgICAgICAgICAgOiAjNTU1O1xuJGFjdGl2ZS1icmVhZGNydW1iLWNvbG9yOiAjMzQzNDM0O1xuJGNhcmQtaGVhZGVyLWJnICAgICAgICAgOiAjZjlmOWY5OyAvLyNlZmVmZWY7IC8vI2Y5ZjlmOTtcbiRwbGFjZWhvbGRlci1jb2xvciAgICAgIDogI2IzYjNiMztcblxuLy8gYmFja2dyb3VuZCBjb2xvclxuJG1haW4tYmFja2dyb3VuZC1jb2xvciAgOiAjZWZlZGYyO1xuJGhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiRkYXRhLXRhYmxlLWJveCAgICAgICAgIDogI2ZmZmRmZTsgLy8jZjdmN2Y3O1xuJGNhcmQtYm9keSAgICAgICAgICAgICAgOiAjZmZmZGZlO1xuXG4vLyBEYXNoYm9hcmRcbiRtYXJnaW5CZXR3ZWVuQ2FyZHM6IDIycHg7XG4kYXhpc0ZvbnRTaXplICAgICAgOiAxMnB4O1xuJHNtYWxsQXhpc0ZvbnRTaXplIDogMTBweDtcblxuLy9oZWFkZXJcbiRwcm9maWxlLW1lbnUtY29sb3I6ICNmOWY5Zjk7XG4kYmlsbC1jb2xvciAgICAgICAgOiAjOWJhMmFhO1xuJGJpbGwtaG92ZXItY29sb3IgIDogIzczODE4ZjtcblxuLy9MYXlvdXQgVmFyaWFibGVzXG5cbiRoZWFkZXItaGVpZ2h0IDogNTVweDtcbiRzaWRlTWVudS13aWR0aDogMjAwcHg7XG5cblxuLy9sb2dpblxuJGxveWFsaXR5LWNvbG9yICA6ICM4ODdmN2Y7XG4kbG9naW4tYm94LWNvbG9yIDogI2Y1ZjJmMDtcblxuLy9tYWlsXG4kbWFpbC1jaGVja2JveC1jb2xvcjogIzAwNzNhYTtcbiR1c2VyLW1haWwtY29sb3IgICAgOiAjMjkyYjJjO1xuXG4vL3Byb2ZpbGVcbiRhY3RpdmUtY29sb3IgICAgIDogI2Y0ZjZmOTtcbiRpY29uLWNvbG9yICAgICAgIDogIzk1OWNiNjtcbiRsYWJlbC10aXRsZS1jb2xvcjogIzUwNTY2YTtcblxuLy9lbWFpbCB0ZW1wbGF0ZXNcbiRlbWFpbC1ibHVlLWNvbG9yOiAjMGY0MTVkO1xuJGVtYWlsLWdyYXktY29sb3I6ICM1ZjYwNjA7XG4kZW1haWwtc3lhbi1jb2xvcjogI2EyZDljMjtcbiRlbWFpbC1vcmFnbmUtY29sb3I6ICNmZmFjNTI7XG5cbi8vZm9udHNcbiRmb250MjggICAgICAgICAgIDogMjhweDtcbiRmb250MjQgICAgICAgICAgIDogMjRweDtcbiRmb250MTggICAgICAgICAgIDogMThweDtcbiRmb250MTYgICAgICAgICAgIDogMTZweDtcbiRmb250MTQgICAgICAgICAgIDogMTRweDtcbiRmb250MTIgICAgICAgICAgIDogMTJweDtcbiRmb250MTAgICAgICAgICAgIDogMTBweDtcbiRmb250LXdlaWdodC02MDAgIDogNjAwO1xuJGZvbnQtd2VpZ2h0LTUwMCAgOiA1MDA7XG4kcGxhY2Vob2xkZXItZm9udCA6IDEycHg7XG4kbGFiZWwtZm9udCAgICAgICA6IDE0cHg7XG4kY2FyZC1oZWFkZXItZm9udCA6IDE2cHg7XG5cbiRkYXRhLXRhYmxlLWhlYWRlci0xMzY2IDogMTRweDtcbiRkYXRhLXRhYmxlLWhlYWRlci0xOTIwIDogMTZweDtcbiRkYXRhLXRhYmxlLWJvZHktMTM2NiA6IDEycHg7XG4kZGF0YS10YWJsZS1ib2R5LTE5MjA6IDE2cHg7XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-multi-select',
          templateUrl: './multi-select.component.html',
          styleUrls: ['./multi-select.component.scss']
        }]
      }], function () {
        return [];
      }, {
        ItemsList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        initialSelectedList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        itemselected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/reusable-components/form-fields/password-text/password-text.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/reusable-components/form-fields/password-text/password-text.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: PasswordTextComponent */

  /***/
  function srcAppReusableComponentsFormFieldsPasswordTextPasswordTextComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PasswordTextComponent", function () {
      return PasswordTextComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _abstract_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../abstract-component */
    "./src/app/reusable-components/form-fields/abstract-component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/tooltip */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
    /* harmony import */


    var _validation_errors_validation_errors_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../validation-errors/validation-errors.component */
    "./src/app/reusable-components/form-fields/validation-errors/validation-errors.component.ts");

    function PasswordTextComponent_b_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0, a1, a2) {
      return {
        "rtldirection": a0,
        "is-invalid": a1,
        "is-valid": a2
      };
    };

    var PasswordTextComponent = /*#__PURE__*/function (_abstract_component__4) {
      _inherits(PasswordTextComponent, _abstract_component__4);

      var _super4 = _createSuper(PasswordTextComponent);

      function PasswordTextComponent() {
        _classCallCheck(this, PasswordTextComponent);

        return _super4.call(this); // console.log('ccccccccccccccccccccccccccccc');
        //  console.log(this.control);
      }

      _createClass(PasswordTextComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(change) {// console.log('change');
          // console.log(change);
          // //  console.log(this.control.getValidators());
          // const f = this.control.parent;
          // console.log(f);
          // console.log('fffffffffffffff');
          //  f.controls.getValidators();
          //  console.log(this.control.hasOwnProperty('required'));
          // const s = !!this.control.validator(this.control).hasOwnProperty('required');
          // console.log(s);
          // this.control.getValidators();
        }
      }]);

      return PasswordTextComponent;
    }(_abstract_component__WEBPACK_IMPORTED_MODULE_1__["AbstractReactiveComponent"]);

    PasswordTextComponent.ɵfac = function PasswordTextComponent_Factory(t) {
      return new (t || PasswordTextComponent)();
    };

    PasswordTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PasswordTextComponent,
      selectors: [["app-password-text"]],
      inputs: {
        type: "type"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 10,
      vars: 16,
      consts: [[1, "form-group", "grid-center-middle-noGutter"], [1, "col_sm-24", "grid_sm-noGutter"], [3, "for"], ["style", "color: red;margin: 0 5px", 4, "ngIf"], ["type", "password", "passwordToggle", "", "autocomplete", "off", "placement", "top", 1, "form-control", 3, "formControl", "id", "placeholder", "tooltip", "ngClass"], ["passwordInput", ""], [1, "col-24", "grid-noGutter"], [3, "validationErrors"], [2, "color", "red", "margin", "0 5px"]],
      template: function PasswordTextComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PasswordTextComponent_b_4_Template, 2, 0, "b", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-validation-errors", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.fieldId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.fieldClass, " grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control)("id", ctx.fieldId)("placeholder", ctx.placeholder)("tooltip", ctx.tooltipMsg)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](12, _c0, ctx.rtldirection, !ctx.control.valid && ctx.control.touched, ctx.control.valid && ctx.control.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("validationErrors", ctx.validationErrors);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _validation_errors_validation_errors_component__WEBPACK_IMPORTED_MODULE_5__["ValidationErrorsComponent"]],
      styles: [".form-group[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 15px;\n  margin-bottom: 35px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n}\n.rtldirection[_ngcontent-%COMP%] {\n  direction: rtl;\n  padding-right: 30px !important;\n}\n[_nghost-%COMP%]     [_ngcontent-lcu-c21] {\n  color: red;\n  background: red;\n}\n.form-group[_ngcontent-%COMP%]     div:nth-of-type(2) > div {\n  right: 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV1c2FibGUtY29tcG9uZW50cy9mb3JtLWZpZWxkcy9wYXNzd29yZC10ZXh0L0U6XFxVbnRpdGxlZCBGb2xkZXJcXHByaXZhdGVcXHByb2plY3RzXFxmdWxsX3N0YWNrXFxtb3RvYmFyXFxtb3RvYmFyX2FkbWluL3NyY1xcYXBwXFxyZXVzYWJsZS1jb21wb25lbnRzXFxmb3JtLWZpZWxkc1xccGFzc3dvcmQtdGV4dFxccGFzc3dvcmQtdGV4dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmV1c2FibGUtY29tcG9uZW50cy9mb3JtLWZpZWxkcy9wYXNzd29yZC10ZXh0L3Bhc3N3b3JkLXRleHQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JldXNhYmxlLWNvbXBvbmVudHMvZm9ybS1maWVsZHMvcGFzc3dvcmQtdGV4dC9FOlxcVW50aXRsZWQgRm9sZGVyXFxwcml2YXRlXFxwcm9qZWN0c1xcZnVsbF9zdGFja1xcbW90b2JhclxcbW90b2Jhcl9hZG1pbi9zcmNcXHNjc3NcXGFic3RyYWN0c1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0RGO0FER0U7RUFDRSxlRWdFZ0I7RUYvRGhCLFdBQUE7QUNESjtBRElBO0VBQ0UsY0FBQTtFQUNBLDhCQUFBO0FDREY7QURVQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDUEY7QURhTTtFQUNFLHNCQUFBO0FDVlIiLCJmaWxlIjoic3JjL2FwcC9yZXVzYWJsZS1jb21wb25lbnRzL2Zvcm0tZmllbGRzL3Bhc3N3b3JkLXRleHQvcGFzc3dvcmQtdGV4dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3Njc3MvYWJzdHJhY3RzL3ZhcmlhYmxlcyc7XG5cbi5mb3JtLWdyb3VwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcblxuICBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAkbGFiZWwtZm9udDtcbiAgICBjb2xvcjogIzY2NjtcbiAgfVxufVxuLnJ0bGRpcmVjdGlvbiB7XG4gIGRpcmVjdGlvbjogcnRsO1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG59XG4vLyA6aG9zdHtcbi8vICAgJi5mb3JtLWdyb3Vwe1xuLy8gICAgICYuaW5wdXR7XG4vLyAgICAgICBjb2xvcjpyZWRcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cbjpob3N0IDo6bmctZGVlcCBbX25nY29udGVudC1sY3UtYzIxXSB7XG4gIGNvbG9yOiByZWQ7XG4gIGJhY2tncm91bmQ6IHJlZDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICA6Om5nLWRlZXAge1xuICAgIGRpdiB7XG4gICAgICAmOm50aC1vZi10eXBlKDIpID4gZGl2IHtcbiAgICAgICAgcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5mb3JtLWdyb3VwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cbi5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzY2Njtcbn1cblxuLnJ0bGRpcmVjdGlvbiB7XG4gIGRpcmVjdGlvbjogcnRsO1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCBbX25nY29udGVudC1sY3UtYzIxXSB7XG4gIGNvbG9yOiByZWQ7XG4gIGJhY2tncm91bmQ6IHJlZDtcbn1cblxuLmZvcm0tZ3JvdXAgOjpuZy1kZWVwIGRpdjpudGgtb2YtdHlwZSgyKSA+IGRpdiB7XG4gIHJpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG59IiwiLy9jb2xvcnNcbiR3aGl0ZSA6IHdoaXRlO1xuJGNvbG9yMTogIzBjNDI1ZDtcbiRjb2xvcjI6ICNhOGQyYmU7XG4kY29sb3IzOiAjNDg5OWMyO1xuJGNvbG9yNDogIzFmNzdhMztcblxuJGNvbG9yNSA6ICNmOWFlNGU7XG4kY29sb3I1NTogI2Q2ODUyMjtcblxuJGJvcmRlciAgICAgICAgICAgICAgICAgOiAjZjFmMWYxO1xuJGRhdGEtdGFibGUtYm9yZGVyICAgICAgOiAjZTllOWU5O1xuJGdyYXkyICAgICAgICAgICAgICAgICAgOiAjZTJlMmUyO1xuJGdyYXkzICAgICAgICAgICAgICAgICAgOiAjNzU3NTc1O1xuJHRyYXNoLWNvbG9yICAgICAgICAgICAgOiAjQzkzMDJDO1xuJGZvbnQtY29sb3IgICAgICAgICAgICAgOiAjNTU1O1xuJGFjdGl2ZS1icmVhZGNydW1iLWNvbG9yOiAjMzQzNDM0O1xuJGNhcmQtaGVhZGVyLWJnICAgICAgICAgOiAjZjlmOWY5OyAvLyNlZmVmZWY7IC8vI2Y5ZjlmOTtcbiRwbGFjZWhvbGRlci1jb2xvciAgICAgIDogI2IzYjNiMztcblxuLy8gYmFja2dyb3VuZCBjb2xvclxuJG1haW4tYmFja2dyb3VuZC1jb2xvciAgOiAjZWZlZGYyO1xuJGhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiRkYXRhLXRhYmxlLWJveCAgICAgICAgIDogI2ZmZmRmZTsgLy8jZjdmN2Y3O1xuJGNhcmQtYm9keSAgICAgICAgICAgICAgOiAjZmZmZGZlO1xuXG4vLyBEYXNoYm9hcmRcbiRtYXJnaW5CZXR3ZWVuQ2FyZHM6IDIycHg7XG4kYXhpc0ZvbnRTaXplICAgICAgOiAxMnB4O1xuJHNtYWxsQXhpc0ZvbnRTaXplIDogMTBweDtcblxuLy9oZWFkZXJcbiRwcm9maWxlLW1lbnUtY29sb3I6ICNmOWY5Zjk7XG4kYmlsbC1jb2xvciAgICAgICAgOiAjOWJhMmFhO1xuJGJpbGwtaG92ZXItY29sb3IgIDogIzczODE4ZjtcblxuLy9MYXlvdXQgVmFyaWFibGVzXG5cbiRoZWFkZXItaGVpZ2h0IDogNTVweDtcbiRzaWRlTWVudS13aWR0aDogMjAwcHg7XG5cblxuLy9sb2dpblxuJGxveWFsaXR5LWNvbG9yICA6ICM4ODdmN2Y7XG4kbG9naW4tYm94LWNvbG9yIDogI2Y1ZjJmMDtcblxuLy9tYWlsXG4kbWFpbC1jaGVja2JveC1jb2xvcjogIzAwNzNhYTtcbiR1c2VyLW1haWwtY29sb3IgICAgOiAjMjkyYjJjO1xuXG4vL3Byb2ZpbGVcbiRhY3RpdmUtY29sb3IgICAgIDogI2Y0ZjZmOTtcbiRpY29uLWNvbG9yICAgICAgIDogIzk1OWNiNjtcbiRsYWJlbC10aXRsZS1jb2xvcjogIzUwNTY2YTtcblxuLy9lbWFpbCB0ZW1wbGF0ZXNcbiRlbWFpbC1ibHVlLWNvbG9yOiAjMGY0MTVkO1xuJGVtYWlsLWdyYXktY29sb3I6ICM1ZjYwNjA7XG4kZW1haWwtc3lhbi1jb2xvcjogI2EyZDljMjtcbiRlbWFpbC1vcmFnbmUtY29sb3I6ICNmZmFjNTI7XG5cbi8vZm9udHNcbiRmb250MjggICAgICAgICAgIDogMjhweDtcbiRmb250MjQgICAgICAgICAgIDogMjRweDtcbiRmb250MTggICAgICAgICAgIDogMThweDtcbiRmb250MTYgICAgICAgICAgIDogMTZweDtcbiRmb250MTQgICAgICAgICAgIDogMTRweDtcbiRmb250MTIgICAgICAgICAgIDogMTJweDtcbiRmb250MTAgICAgICAgICAgIDogMTBweDtcbiRmb250LXdlaWdodC02MDAgIDogNjAwO1xuJGZvbnQtd2VpZ2h0LTUwMCAgOiA1MDA7XG4kcGxhY2Vob2xkZXItZm9udCA6IDEycHg7XG4kbGFiZWwtZm9udCAgICAgICA6IDE0cHg7XG4kY2FyZC1oZWFkZXItZm9udCA6IDE2cHg7XG5cbiRkYXRhLXRhYmxlLWhlYWRlci0xMzY2IDogMTRweDtcbiRkYXRhLXRhYmxlLWhlYWRlci0xOTIwIDogMTZweDtcbiRkYXRhLXRhYmxlLWJvZHktMTM2NiA6IDEycHg7XG4kZGF0YS10YWJsZS1ib2R5LTE5MjA6IDE2cHg7XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PasswordTextComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-password-text',
          templateUrl: './password-text.component.html',
          styleUrls: ['./password-text.component.scss'] // changeDetection: ChangeDetectionStrategy.OnPush

        }]
      }], function () {
        return [];
      }, {
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/reusable-components/form-fields/select/select.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/reusable-components/form-fields/select/select.component.ts ***!
    \****************************************************************************/

  /*! exports provided: SelectComponent */

  /***/
  function srcAppReusableComponentsFormFieldsSelectSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectComponent", function () {
      return SelectComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _abstract_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../abstract-component */
    "./src/app/reusable-components/form-fields/abstract-component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/tooltip */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _validation_errors_validation_errors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../validation-errors/validation-errors.component */
    "./src/app/reusable-components/form-fields/validation-errors/validation-errors.component.ts");

    function SelectComponent_b_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        "ng-invalid": a0,
        "ng-valid": a1
      };
    };

    var SelectComponent = /*#__PURE__*/function (_abstract_component__5) {
      _inherits(SelectComponent, _abstract_component__5);

      var _super5 = _createSuper(SelectComponent);

      function SelectComponent() {
        var _this35;

        _classCallCheck(this, SelectComponent);

        _this35 = _super5.call(this);
        _this35.ItemsList = null;
        _this35.itemselected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this35;
      }

      _createClass(SelectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          if (this.initialSelectedItem) {
            console.log(this.initialSelectedItem);
            this.selectedItemsId = this.initialSelectedItem._id;
          }
        }
      }, {
        key: "ItemSelected",
        value: function ItemSelected(event) {
          this.selectedItem = this.ItemsList.find(function (x) {
            return x._id === event;
          });
          this.itemselected.emit(this.selectedItem);
        }
      }, {
        key: "clear",
        value: function clear(event) {
          console.log(event);
          this.selectedItem = null;
          this.itemselected.emit(event);
        }
      }]);

      return SelectComponent;
    }(_abstract_component__WEBPACK_IMPORTED_MODULE_1__["AbstractReactiveComponent"]);

    SelectComponent.ɵfac = function SelectComponent_Factory(t) {
      return new (t || SelectComponent)();
    };

    SelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SelectComponent,
      selectors: [["app-select"]],
      inputs: {
        ItemsList: "ItemsList",
        initialSelectedItem: "initialSelectedItem"
      },
      outputs: {
        itemselected: "itemselected"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 9,
      vars: 17,
      consts: [[1, "form-group", "grid-center-middle-noGutter"], [1, "col_sm-24", "grid_sm-noGutter"], [3, "for"], ["style", "color: red; margin: 0 5px", 4, "ngIf"], [2, "position", "relative"], ["placement", "top", "bindLabel", "nameEn", "bindValue", "_id", 1, "form-control", 3, "id", "tooltip", "ngClass", "hideSelected", "items", "placeholder", "ngModel", "ngModelChange", "clear"], [1, "col-24", "grid-noGutter"], [1, "col", 3, "validationErrors"], [2, "color", "red", "margin", "0 5px"]],
      template: function SelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SelectComponent_b_4_Template, 2, 0, "b", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ng-select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SelectComponent_Template_ng_select_ngModelChange_6_listener($event) {
            return ctx.selectedItemsId = $event;
          })("ngModelChange", function SelectComponent_Template_ng_select_ngModelChange_6_listener($event) {
            return ctx.ItemSelected($event);
          })("clear", function SelectComponent_Template_ng_select_clear_6_listener($event) {
            return ctx.clear($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-validation-errors", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.fieldId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.fieldClass, " grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.fieldId)("tooltip", ctx.tooltipMsg)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c0, (ctx.control == null ? null : ctx.control.touched) && !(ctx.control == null ? null : ctx.control.valid), (ctx.control == null ? null : ctx.control.valid) && (ctx.control == null ? null : ctx.control.touched)))("hideSelected", true)("items", ctx.ItemsList)("placeholder", ctx.selectedItemsId == null ? "select" : "")("ngModel", ctx.selectedItemsId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("validationErrors", ctx.validationErrors);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__["NgSelectComponent"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _validation_errors_validation_errors_component__WEBPACK_IMPORTED_MODULE_6__["ValidationErrorsComponent"]],
      styles: ["[_nghost-%COMP%]     ng-select {\n  width: 100%;\n}\n[_nghost-%COMP%]     ng-select.ng-select-opened {\n  border-radius: 20px;\n  outline: 0;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n}\n[_nghost-%COMP%]     ng-select.ng-select-opened ng-dropdown-panel {\n  background-color: white;\n  border: 1px solid #e2e2e2;\n}\n[_nghost-%COMP%]     ng-select.ng-select-opened ng-dropdown-panel .ng-option {\n  padding: 5px;\n}\n[_nghost-%COMP%]     ng-select.ng-select-opened ng-dropdown-panel .ng-option:hover {\n  background-color: #e2e2e2;\n}\n.form-group[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 15px;\n  margin-bottom: 35px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n}\n.rtldirection[_ngcontent-%COMP%] {\n  direction: rtl;\n  padding-right: 30px !important;\n}\ninput[_ngcontent-%COMP%] {\n  color: #555353;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV1c2FibGUtY29tcG9uZW50cy9mb3JtLWZpZWxkcy9zZWxlY3QvRTpcXFVudGl0bGVkIEZvbGRlclxccHJpdmF0ZVxccHJvamVjdHNcXGZ1bGxfc3RhY2tcXG1vdG9iYXJcXG1vdG9iYXJfYWRtaW4vc3JjXFxhcHBcXHJldXNhYmxlLWNvbXBvbmVudHNcXGZvcm0tZmllbGRzXFxzZWxlY3RcXHNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmV1c2FibGUtY29tcG9uZW50cy9mb3JtLWZpZWxkcy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZXVzYWJsZS1jb21wb25lbnRzL2Zvcm0tZmllbGRzL3NlbGVjdC9FOlxcVW50aXRsZWQgRm9sZGVyXFxwcml2YXRlXFxwcm9qZWN0c1xcZnVsbF9zdGFja1xcbW90b2JhclxcbW90b2Jhcl9hZG1pbi9zcmNcXHNjc3NcXGFic3RyYWN0c1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtBQ0RGO0FERUU7RUFDRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxrRkFBQTtBQ0FKO0FER0k7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0FDRE47QURHTTtFQUNFLFlBQUE7QUNEUjtBREVRO0VBQ0UseUJBQUE7QUNBVjtBRE9BO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0pGO0FETUU7RUFDRSxlRTBDZ0I7RUZ6Q2hCLFdBQUE7QUNKSjtBRE9BO0VBQ0UsY0FBQTtFQUNBLDhCQUFBO0FDSkY7QURNQTtFQUNFLGNBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL3JldXNhYmxlLWNvbXBvbmVudHMvZm9ybS1maWVsZHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zY3NzL2Fic3RyYWN0cy92YXJpYWJsZXNcIjtcblxuOmhvc3QgOjpuZy1kZWVwIG5nLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICAmLm5nLXNlbGVjdC1vcGVuZWQge1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSksXG4gICAgICAwIDAgOHB4IHJnYmEoMTAyLCAxNzUsIDIzMywgMC42KTtcblxuICAgIG5nLWRyb3Bkb3duLXBhbmVsIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UyZTJlMjtcblxuICAgICAgLm5nLW9wdGlvbiB7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTJlMjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uZm9ybS1ncm91cCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG5cbiAgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogJGxhYmVsLWZvbnQ7XG4gICAgY29sb3I6ICM2NjY7XG4gIH1cbn1cbi5ydGxkaXJlY3Rpb24ge1xuICBkaXJlY3Rpb246IHJ0bDtcbiAgcGFkZGluZy1yaWdodDogMzBweCAhaW1wb3J0YW50O1xufVxuaW5wdXQge1xuICBjb2xvcjogIzU1NTM1Mztcbn1cbiIsIjpob3N0IDo6bmctZGVlcCBuZy1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IDo6bmctZGVlcCBuZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZCB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDhweCByZ2JhKDEwMiwgMTc1LCAyMzMsIDAuNik7XG59XG46aG9zdCA6Om5nLWRlZXAgbmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQgbmctZHJvcGRvd24tcGFuZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZTJlMjtcbn1cbjpob3N0IDo6bmctZGVlcCBuZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZCBuZy1kcm9wZG93bi1wYW5lbCAubmctb3B0aW9uIHtcbiAgcGFkZGluZzogNXB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIG5nLXNlbGVjdC5uZy1zZWxlY3Qtb3BlbmVkIG5nLWRyb3Bkb3duLXBhbmVsIC5uZy1vcHRpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlMmUyO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG4uZm9ybS1ncm91cCBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5ydGxkaXJlY3Rpb24ge1xuICBkaXJlY3Rpb246IHJ0bDtcbiAgcGFkZGluZy1yaWdodDogMzBweCAhaW1wb3J0YW50O1xufVxuXG5pbnB1dCB7XG4gIGNvbG9yOiAjNTU1MzUzO1xufSIsIi8vY29sb3JzXG4kd2hpdGUgOiB3aGl0ZTtcbiRjb2xvcjE6ICMwYzQyNWQ7XG4kY29sb3IyOiAjYThkMmJlO1xuJGNvbG9yMzogIzQ4OTljMjtcbiRjb2xvcjQ6ICMxZjc3YTM7XG5cbiRjb2xvcjUgOiAjZjlhZTRlO1xuJGNvbG9yNTU6ICNkNjg1MjI7XG5cbiRib3JkZXIgICAgICAgICAgICAgICAgIDogI2YxZjFmMTtcbiRkYXRhLXRhYmxlLWJvcmRlciAgICAgIDogI2U5ZTllOTtcbiRncmF5MiAgICAgICAgICAgICAgICAgIDogI2UyZTJlMjtcbiRncmF5MyAgICAgICAgICAgICAgICAgIDogIzc1NzU3NTtcbiR0cmFzaC1jb2xvciAgICAgICAgICAgIDogI0M5MzAyQztcbiRmb250LWNvbG9yICAgICAgICAgICAgIDogIzU1NTtcbiRhY3RpdmUtYnJlYWRjcnVtYi1jb2xvcjogIzM0MzQzNDtcbiRjYXJkLWhlYWRlci1iZyAgICAgICAgIDogI2Y5ZjlmOTsgLy8jZWZlZmVmOyAvLyNmOWY5Zjk7XG4kcGxhY2Vob2xkZXItY29sb3IgICAgICA6ICNiM2IzYjM7XG5cbi8vIGJhY2tncm91bmQgY29sb3JcbiRtYWluLWJhY2tncm91bmQtY29sb3IgIDogI2VmZWRmMjtcbiRoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4kZGF0YS10YWJsZS1ib3ggICAgICAgICA6ICNmZmZkZmU7IC8vI2Y3ZjdmNztcbiRjYXJkLWJvZHkgICAgICAgICAgICAgIDogI2ZmZmRmZTtcblxuLy8gRGFzaGJvYXJkXG4kbWFyZ2luQmV0d2VlbkNhcmRzOiAyMnB4O1xuJGF4aXNGb250U2l6ZSAgICAgIDogMTJweDtcbiRzbWFsbEF4aXNGb250U2l6ZSA6IDEwcHg7XG5cbi8vaGVhZGVyXG4kcHJvZmlsZS1tZW51LWNvbG9yOiAjZjlmOWY5O1xuJGJpbGwtY29sb3IgICAgICAgIDogIzliYTJhYTtcbiRiaWxsLWhvdmVyLWNvbG9yICA6ICM3MzgxOGY7XG5cbi8vTGF5b3V0IFZhcmlhYmxlc1xuXG4kaGVhZGVyLWhlaWdodCA6IDU1cHg7XG4kc2lkZU1lbnUtd2lkdGg6IDIwMHB4O1xuXG5cbi8vbG9naW5cbiRsb3lhbGl0eS1jb2xvciAgOiAjODg3ZjdmO1xuJGxvZ2luLWJveC1jb2xvciA6ICNmNWYyZjA7XG5cbi8vbWFpbFxuJG1haWwtY2hlY2tib3gtY29sb3I6ICMwMDczYWE7XG4kdXNlci1tYWlsLWNvbG9yICAgIDogIzI5MmIyYztcblxuLy9wcm9maWxlXG4kYWN0aXZlLWNvbG9yICAgICA6ICNmNGY2Zjk7XG4kaWNvbi1jb2xvciAgICAgICA6ICM5NTljYjY7XG4kbGFiZWwtdGl0bGUtY29sb3I6ICM1MDU2NmE7XG5cbi8vZW1haWwgdGVtcGxhdGVzXG4kZW1haWwtYmx1ZS1jb2xvcjogIzBmNDE1ZDtcbiRlbWFpbC1ncmF5LWNvbG9yOiAjNWY2MDYwO1xuJGVtYWlsLXN5YW4tY29sb3I6ICNhMmQ5YzI7XG4kZW1haWwtb3JhZ25lLWNvbG9yOiAjZmZhYzUyO1xuXG4vL2ZvbnRzXG4kZm9udDI4ICAgICAgICAgICA6IDI4cHg7XG4kZm9udDI0ICAgICAgICAgICA6IDI0cHg7XG4kZm9udDE4ICAgICAgICAgICA6IDE4cHg7XG4kZm9udDE2ICAgICAgICAgICA6IDE2cHg7XG4kZm9udDE0ICAgICAgICAgICA6IDE0cHg7XG4kZm9udDEyICAgICAgICAgICA6IDEycHg7XG4kZm9udDEwICAgICAgICAgICA6IDEwcHg7XG4kZm9udC13ZWlnaHQtNjAwICA6IDYwMDtcbiRmb250LXdlaWdodC01MDAgIDogNTAwO1xuJHBsYWNlaG9sZGVyLWZvbnQgOiAxMnB4O1xuJGxhYmVsLWZvbnQgICAgICAgOiAxNHB4O1xuJGNhcmQtaGVhZGVyLWZvbnQgOiAxNnB4O1xuXG4kZGF0YS10YWJsZS1oZWFkZXItMTM2NiA6IDE0cHg7XG4kZGF0YS10YWJsZS1oZWFkZXItMTkyMCA6IDE2cHg7XG4kZGF0YS10YWJsZS1ib2R5LTEzNjYgOiAxMnB4O1xuJGRhdGEtdGFibGUtYm9keS0xOTIwOiAxNnB4O1xuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-select',
          templateUrl: './select.component.html',
          styleUrls: ['./select.component.scss']
        }]
      }], function () {
        return [];
      }, {
        ItemsList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        initialSelectedItem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        itemselected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/reusable-components/form-fields/textarea/textarea.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/reusable-components/form-fields/textarea/textarea.component.ts ***!
    \********************************************************************************/

  /*! exports provided: TextareaComponent */

  /***/
  function srcAppReusableComponentsFormFieldsTextareaTextareaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextareaComponent", function () {
      return TextareaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _abstract_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../abstract-component */
    "./src/app/reusable-components/form-fields/abstract-component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/tooltip */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
    /* harmony import */


    var _validation_errors_validation_errors_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../validation-errors/validation-errors.component */
    "./src/app/reusable-components/form-fields/validation-errors/validation-errors.component.ts");

    function TextareaComponent_b_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0, a1, a2) {
      return {
        "rtldirection": a0,
        "is-invalid": a1,
        "is-valid": a2
      };
    };

    var TextareaComponent = /*#__PURE__*/function (_abstract_component__6) {
      _inherits(TextareaComponent, _abstract_component__6);

      var _super6 = _createSuper(TextareaComponent);

      function TextareaComponent() {
        _classCallCheck(this, TextareaComponent);

        return _super6.call(this);
      }

      _createClass(TextareaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TextareaComponent;
    }(_abstract_component__WEBPACK_IMPORTED_MODULE_1__["AbstractReactiveComponent"]);

    TextareaComponent.ɵfac = function TextareaComponent_Factory(t) {
      return new (t || TextareaComponent)();
    };

    TextareaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TextareaComponent,
      selectors: [["app-textarea"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 10,
      vars: 16,
      consts: [[1, "form-group", "grid-center-middle-noGutter"], [1, "col_sm-24", "grid_sm-noGutter"], [3, "for"], ["style", "color: red;margin: 0 5px", 4, "ngIf"], ["placement", "top", "rows", "4", 1, "form-control", 3, "formControl", "id", "placeholder", "tooltip", "ngClass"], [1, "col-24", "grid-noGutter"], [1, "col", 3, "validationErrors"], [2, "color", "red", "margin", "0 5px"]],
      template: function TextareaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TextareaComponent_b_4_Template, 2, 0, "b", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "textarea", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-validation-errors", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.fieldId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.fieldClass, " grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control)("id", ctx.fieldId)("placeholder", ctx.placeholder)("tooltip", ctx.tooltipMsg)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](12, _c0, ctx.rtldirection, !ctx.control.valid && ctx.control.touched, ctx.control.valid && ctx.control.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("validationErrors", ctx.validationErrors);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _validation_errors_validation_errors_component__WEBPACK_IMPORTED_MODULE_5__["ValidationErrorsComponent"]],
      styles: [".form-group[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 15px;\n  margin-bottom: 35px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n}\n.rtldirection[_ngcontent-%COMP%] {\n  direction: rtl;\n  padding-right: 30px !important;\n}\ntextarea[_ngcontent-%COMP%] {\n  color: #555353;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV1c2FibGUtY29tcG9uZW50cy9mb3JtLWZpZWxkcy90ZXh0YXJlYS9FOlxcVW50aXRsZWQgRm9sZGVyXFxwcml2YXRlXFxwcm9qZWN0c1xcZnVsbF9zdGFja1xcbW90b2JhclxcbW90b2Jhcl9hZG1pbi9zcmNcXGFwcFxccmV1c2FibGUtY29tcG9uZW50c1xcZm9ybS1maWVsZHNcXHRleHRhcmVhXFx0ZXh0YXJlYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmV1c2FibGUtY29tcG9uZW50cy9mb3JtLWZpZWxkcy90ZXh0YXJlYS90ZXh0YXJlYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmV1c2FibGUtY29tcG9uZW50cy9mb3JtLWZpZWxkcy90ZXh0YXJlYS9FOlxcVW50aXRsZWQgRm9sZGVyXFxwcml2YXRlXFxwcm9qZWN0c1xcZnVsbF9zdGFja1xcbW90b2JhclxcbW90b2Jhcl9hZG1pbi9zcmNcXHNjc3NcXGFic3RyYWN0c1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0RGO0FER0U7RUFDRSxlRWdFZ0I7RUYvRGhCLFdBQUE7QUNESjtBRElBO0VBQ0UsY0FBQTtFQUNBLDhCQUFBO0FDREY7QURHQTtFQUVDLGNBQUE7QUNERCIsImZpbGUiOiJzcmMvYXBwL3JldXNhYmxlLWNvbXBvbmVudHMvZm9ybS1maWVsZHMvdGV4dGFyZWEvdGV4dGFyZWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc2Nzcy9hYnN0cmFjdHMvdmFyaWFibGVzXCI7XG5cbi5mb3JtLWdyb3VwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcblxuICBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAkbGFiZWwtZm9udDtcbiAgICBjb2xvcjogIzY2NjtcbiAgfVxufVxuLnJ0bGRpcmVjdGlvbiB7XG4gIGRpcmVjdGlvbjogcnRsO1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG59XG50ZXh0YXJlYSB7XG4gLy8gY29sb3I6IHJnYmEoJGNvbG9yMSwgMC44KTtcbiBjb2xvcjojNTU1MzUzO1xufVxuIiwiLmZvcm0tZ3JvdXAge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuLmZvcm0tZ3JvdXAgbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4ucnRsZGlyZWN0aW9uIHtcbiAgZGlyZWN0aW9uOiBydGw7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHggIWltcG9ydGFudDtcbn1cblxudGV4dGFyZWEge1xuICBjb2xvcjogIzU1NTM1Mztcbn0iLCIvL2NvbG9yc1xuJHdoaXRlIDogd2hpdGU7XG4kY29sb3IxOiAjMGM0MjVkO1xuJGNvbG9yMjogI2E4ZDJiZTtcbiRjb2xvcjM6ICM0ODk5YzI7XG4kY29sb3I0OiAjMWY3N2EzO1xuXG4kY29sb3I1IDogI2Y5YWU0ZTtcbiRjb2xvcjU1OiAjZDY4NTIyO1xuXG4kYm9yZGVyICAgICAgICAgICAgICAgICA6ICNmMWYxZjE7XG4kZGF0YS10YWJsZS1ib3JkZXIgICAgICA6ICNlOWU5ZTk7XG4kZ3JheTIgICAgICAgICAgICAgICAgICA6ICNlMmUyZTI7XG4kZ3JheTMgICAgICAgICAgICAgICAgICA6ICM3NTc1NzU7XG4kdHJhc2gtY29sb3IgICAgICAgICAgICA6ICNDOTMwMkM7XG4kZm9udC1jb2xvciAgICAgICAgICAgICA6ICM1NTU7XG4kYWN0aXZlLWJyZWFkY3J1bWItY29sb3I6ICMzNDM0MzQ7XG4kY2FyZC1oZWFkZXItYmcgICAgICAgICA6ICNmOWY5Zjk7IC8vI2VmZWZlZjsgLy8jZjlmOWY5O1xuJHBsYWNlaG9sZGVyLWNvbG9yICAgICAgOiAjYjNiM2IzO1xuXG4vLyBiYWNrZ3JvdW5kIGNvbG9yXG4kbWFpbi1iYWNrZ3JvdW5kLWNvbG9yICA6ICNlZmVkZjI7XG4kaGVhZGVyLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuJGRhdGEtdGFibGUtYm94ICAgICAgICAgOiAjZmZmZGZlOyAvLyNmN2Y3Zjc7XG4kY2FyZC1ib2R5ICAgICAgICAgICAgICA6ICNmZmZkZmU7XG5cbi8vIERhc2hib2FyZFxuJG1hcmdpbkJldHdlZW5DYXJkczogMjJweDtcbiRheGlzRm9udFNpemUgICAgICA6IDEycHg7XG4kc21hbGxBeGlzRm9udFNpemUgOiAxMHB4O1xuXG4vL2hlYWRlclxuJHByb2ZpbGUtbWVudS1jb2xvcjogI2Y5ZjlmOTtcbiRiaWxsLWNvbG9yICAgICAgICA6ICM5YmEyYWE7XG4kYmlsbC1ob3Zlci1jb2xvciAgOiAjNzM4MThmO1xuXG4vL0xheW91dCBWYXJpYWJsZXNcblxuJGhlYWRlci1oZWlnaHQgOiA1NXB4O1xuJHNpZGVNZW51LXdpZHRoOiAyMDBweDtcblxuXG4vL2xvZ2luXG4kbG95YWxpdHktY29sb3IgIDogIzg4N2Y3ZjtcbiRsb2dpbi1ib3gtY29sb3IgOiAjZjVmMmYwO1xuXG4vL21haWxcbiRtYWlsLWNoZWNrYm94LWNvbG9yOiAjMDA3M2FhO1xuJHVzZXItbWFpbC1jb2xvciAgICA6ICMyOTJiMmM7XG5cbi8vcHJvZmlsZVxuJGFjdGl2ZS1jb2xvciAgICAgOiAjZjRmNmY5O1xuJGljb24tY29sb3IgICAgICAgOiAjOTU5Y2I2O1xuJGxhYmVsLXRpdGxlLWNvbG9yOiAjNTA1NjZhO1xuXG4vL2VtYWlsIHRlbXBsYXRlc1xuJGVtYWlsLWJsdWUtY29sb3I6ICMwZjQxNWQ7XG4kZW1haWwtZ3JheS1jb2xvcjogIzVmNjA2MDtcbiRlbWFpbC1zeWFuLWNvbG9yOiAjYTJkOWMyO1xuJGVtYWlsLW9yYWduZS1jb2xvcjogI2ZmYWM1MjtcblxuLy9mb250c1xuJGZvbnQyOCAgICAgICAgICAgOiAyOHB4O1xuJGZvbnQyNCAgICAgICAgICAgOiAyNHB4O1xuJGZvbnQxOCAgICAgICAgICAgOiAxOHB4O1xuJGZvbnQxNiAgICAgICAgICAgOiAxNnB4O1xuJGZvbnQxNCAgICAgICAgICAgOiAxNHB4O1xuJGZvbnQxMiAgICAgICAgICAgOiAxMnB4O1xuJGZvbnQxMCAgICAgICAgICAgOiAxMHB4O1xuJGZvbnQtd2VpZ2h0LTYwMCAgOiA2MDA7XG4kZm9udC13ZWlnaHQtNTAwICA6IDUwMDtcbiRwbGFjZWhvbGRlci1mb250IDogMTJweDtcbiRsYWJlbC1mb250ICAgICAgIDogMTRweDtcbiRjYXJkLWhlYWRlci1mb250IDogMTZweDtcblxuJGRhdGEtdGFibGUtaGVhZGVyLTEzNjYgOiAxNHB4O1xuJGRhdGEtdGFibGUtaGVhZGVyLTE5MjAgOiAxNnB4O1xuJGRhdGEtdGFibGUtYm9keS0xMzY2IDogMTJweDtcbiRkYXRhLXRhYmxlLWJvZHktMTkyMDogMTZweDtcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextareaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-textarea',
          templateUrl: './textarea.component.html',
          styleUrls: ['./textarea.component.scss'] // changeDetection: ChangeDetectionStrategy.OnPush

        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/reusable-components/form-fields/upload-photo/upload-photo.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/reusable-components/form-fields/upload-photo/upload-photo.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: UploadPhotoComponent */

  /***/
  function srcAppReusableComponentsFormFieldsUploadPhotoUploadPhotoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadPhotoComponent", function () {
      return UploadPhotoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _abstract_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../abstract-component */
    "./src/app/reusable-components/form-fields/abstract-component.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/tooltip */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");

    function UploadPhotoComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadPhotoComponent_div_8_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          return ctx_r3.openModal(_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "remove_red_eye");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UploadPhotoComponent_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 11);
      }
    }

    var UploadPhotoComponent = /*#__PURE__*/function (_abstract_component__7) {
      _inherits(UploadPhotoComponent, _abstract_component__7);

      var _super7 = _createSuper(UploadPhotoComponent);

      function UploadPhotoComponent(modalService) {
        var _this36;

        _classCallCheck(this, UploadPhotoComponent);

        _this36 = _super7.call(this);
        _this36.modalService = modalService;
        _this36.choosed_image = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this36;
      }

      _createClass(UploadPhotoComponent, [{
        key: "openModal",
        value: function openModal(template) {
          if (!this.image) {
            this.image = "../../../../../assets/placeholder.png";
          }

          this.modalRef = this.modalService.show(template);
          document.getElementById("imageModal").style.backgroundImage = "url(".concat(this.image, ")");
        }
      }, {
        key: "detectFile",
        value: function detectFile(event) {
          var _this37 = this;

          var files = event.target.files;

          if (files && files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(files[0]);

            reader.onload = function (e) {
              _this37.image = e.target.result;

              _this37.choosed_image.emit(_this37.image);
            };

            this.control.patchValue(files[0]);
          }
        }
      }, {
        key: "deletePhoto",
        value: function deletePhoto() {
          this.image = undefined;
          this.control.patchValue(undefined);
        }
      }]);

      return UploadPhotoComponent;
    }(_abstract_component__WEBPACK_IMPORTED_MODULE_1__["AbstractReactiveComponent"]);

    UploadPhotoComponent.ɵfac = function UploadPhotoComponent_Factory(t) {
      return new (t || UploadPhotoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]));
    };

    UploadPhotoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UploadPhotoComponent,
      selectors: [["app-upload-photo"]],
      inputs: {
        labelImg: "labelImg",
        image: "image"
      },
      outputs: {
        choosed_image: "choosed_image"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 11,
      vars: 5,
      consts: [[1, "avatar-upload"], [1, "avatar-edit"], ["type", "file", "name", "file", "id", "logoUpload", "accept", "images/*", 3, "id", "change"], [3, "for"], [1, "material-icons"], [1, "avatar-preview"], ["id", "logoPreview"], ["class", "previewEye", 4, "ngIf"], ["template", ""], [1, "previewEye"], ["type", "button", "data-toggle", "modal", "tooltip", "Preview", "placement", "bottom", "triggers", "mouseenter:mouseleave", 1, "preview-button", 3, "click"], ["id", "imageModal", 1, "modal-body"]],
      template: function UploadPhotoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UploadPhotoComponent_Template_input_change_2_listener($event) {
            return ctx.detectFile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UploadPhotoComponent_div_8_Template, 4, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UploadPhotoComponent_ng_template_9_Template, 1, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.fieldId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.fieldId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", ctx.image ? "url(" + ctx.image + ")" : "url(../../../../assets/images/placeholder.png)", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipDirective"]],
      styles: ["#imageModal[_ngcontent-%COMP%] {\n  height: 400px;\n  background-size: cover;\n  background-repeat: round;\n}\n\n.avatar-upload[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 205px;\n  margin: 10px auto;\n}\n\n.avatar-upload[_ngcontent-%COMP%]   .avatar-edit[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  z-index: 1;\n  top: 30px;\n}\n\n.avatar-upload[_ngcontent-%COMP%]   .avatar-edit[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.avatar-upload[_ngcontent-%COMP%]   .avatar-edit[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 34px;\n  height: 34px;\n  margin-bottom: 0;\n  border-radius: 100%;\n  background: #ffffff;\n  border: 1px solid transparent;\n  box-shadow: 0px 2px 4px 8px rgba(0, 0, 0, 0.12);\n  cursor: pointer;\n  font-weight: normal;\n  transition: all 0.2s ease-in-out;\n}\n\n.avatar-upload[_ngcontent-%COMP%]   .avatar-edit[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #0c425d;\n}\n\n.avatar-upload[_ngcontent-%COMP%]   .avatar-edit[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:hover {\n  background: #f1f1f1;\n  border-color: #d6d6d6;\n}\n\n.avatar-upload[_ngcontent-%COMP%]   .avatar-preview[_ngcontent-%COMP%] {\n  width: 192px;\n  height: 192px;\n  overflow: hidden;\n  position: relative;\n  border-radius: 100%;\n  border: 3px solid #0c425d;\n  box-shadow: 0px 2px 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n.avatar-upload[_ngcontent-%COMP%]   .avatar-preview[_ngcontent-%COMP%]   #logoPreview[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  font-size: 16px;\n}\n\n.avatar-preview[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  overflow: hidden;\n  width: 200px;\n  height: 200px;\n  margin: 10px;\n  border-radius: 8px;\n  border: 3px solid #f5f5f5;\n  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);\n  box-shadow: 0 0px 5px 3px rgba(0, 0, 0, 0.3);\n  transition: all 0.5s ease;\n}\n\n.avatar-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.avatar-preview[_ngcontent-%COMP%]   .previewEye[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n}\n\n.avatar-preview[_ngcontent-%COMP%]   .previewEye[_ngcontent-%COMP%]   .preview-button[_ngcontent-%COMP%] {\n  display: flex;\n  border: 0;\n  border-radius: 10px;\n  background-color: #0c425d;\n  color: white;\n}\n\n.avatar-preview[_ngcontent-%COMP%]   .previewEye[_ngcontent-%COMP%]   .preview-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.avatar-preview[_ngcontent-%COMP%]   .deleteImage[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  transition: all 0.2s;\n}\n\n.avatar-preview[_ngcontent-%COMP%]   .deleteImage[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #0c425d;\n  font-size: 12px;\n  color: white;\n  padding: 5px;\n  margin: 0;\n  border: 0;\n  border-radius: 50%;\n}\n\n.avatar-preview[_ngcontent-%COMP%]   .deleteImage[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n}\n\n.avatar-preview[_ngcontent-%COMP%]:hover {\n  border-color: #66afe9;\n}\n\n.avatar-preview[_ngcontent-%COMP%]:hover   #imagePreview[_ngcontent-%COMP%] {\n  -webkit-filter: opacity(0.5);\n          filter: opacity(0.5);\n}\n\n.avatar-preview[_ngcontent-%COMP%]:hover   .previewEye[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%) scale(1);\n}\n\n.avatar-preview[_ngcontent-%COMP%]:hover   .previewEye[_ngcontent-%COMP%]:hover {\n  transform: translate(-50%, -50%) scale(1.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV1c2FibGUtY29tcG9uZW50cy9mb3JtLWZpZWxkcy91cGxvYWQtcGhvdG8vRTpcXFVudGl0bGVkIEZvbGRlclxccHJpdmF0ZVxccHJvamVjdHNcXGZ1bGxfc3RhY2tcXG1vdG9iYXJcXG1vdG9iYXJfYWRtaW4vc3JjXFxhcHBcXHJldXNhYmxlLWNvbXBvbmVudHNcXGZvcm0tZmllbGRzXFx1cGxvYWQtcGhvdG9cXHVwbG9hZC1waG90by5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmV1c2FibGUtY29tcG9uZW50cy9mb3JtLWZpZWxkcy91cGxvYWQtcGhvdG8vdXBsb2FkLXBob3RvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZXVzYWJsZS1jb21wb25lbnRzL2Zvcm0tZmllbGRzL3VwbG9hZC1waG90by9FOlxcVW50aXRsZWQgRm9sZGVyXFxwcml2YXRlXFxwcm9qZWN0c1xcZnVsbF9zdGFja1xcbW90b2JhclxcbW90b2Jhcl9hZG1pbi9zcmNcXHNjc3NcXGFic3RyYWN0c1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7QUNERjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREVFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNBSjs7QURFSTtFQUNFLGFBQUE7QUNBTjs7QURFTTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLCtDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUNBUjs7QURFUTtFQUNFLGNBQUE7QUNBVjs7QURHUTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUNEVjs7QURPRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw4Q0FBQTtBQ0xKOztBRE9JO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQ0xOOztBRFVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNQRjs7QURXQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSw4Q0FBQTtFQUNBLDRDQUFBO0VBQ0EseUJBQUE7QUNSRjs7QURVRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDUko7O0FEV0U7RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx5Q0FBQTtBQ1RKOztBRFdJO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCRXJHRztFRnNHSCxZQUFBO0FDVE47O0FEV007RUFDRSxlQUFBO0FDVFI7O0FEY0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0Esb0JBQUE7QUNaSjs7QURjSTtFQUNFLHlCRXJIRztFRnNISCxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDWk47O0FEZUk7RUFDRSxxQkFBQTtBQ2JOOztBRGlCRTtFQUNFLHFCQUFBO0FDZko7O0FEaUJJO0VBQ0UsNEJBQUE7VUFBQSxvQkFBQTtBQ2ZOOztBRGtCSTtFQUNFLHlDQUFBO0FDaEJOOztBRGtCTTtFQUNFLDJDQUFBO0FDaEJSIiwiZmlsZSI6InNyYy9hcHAvcmV1c2FibGUtY29tcG9uZW50cy9mb3JtLWZpZWxkcy91cGxvYWQtcGhvdG8vdXBsb2FkLXBob3RvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3Njc3MvYWJzdHJhY3RzL3ZhcmlhYmxlc1wiO1xuXG4jaW1hZ2VNb2RhbCB7XG4gIGhlaWdodDogNDAwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByb3VuZDtcbn1cbi5hdmF0YXItdXBsb2FkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDIwNXB4O1xuICBtYXJnaW46IDEwcHggYXV0bztcblxuICAuYXZhdGFyLWVkaXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRvcDogMzBweDtcblxuICAgIGlucHV0IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICAgICsgbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDM0cHg7XG4gICAgICAgIGhlaWdodDogMzRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuXG4gICAgICAgIGkge1xuICAgICAgICAgIGNvbG9yOiAjMGM0MjVkO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNkNmQ2ZDY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYXZhdGFyLXByZXZpZXcge1xuICAgIHdpZHRoOiAxOTJweDtcbiAgICBoZWlnaHQ6IDE5MnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYm9yZGVyOiAzcHggc29saWQgIzBjNDI1ZDtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXG4gICAgI2xvZ29QcmV2aWV3IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIH1cbiAgfVxufVxuXG5idXR0b24ge1xuICBtYXJnaW46IDAgMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4vLyBQaG90byBzZWN0aW9uXG4uYXZhdGFyLXByZXZpZXcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAzcHggc29saWQgI2Y1ZjVmNTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMCAwcHggNXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAucHJldmlld0V5ZSB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcblxuICAgIC5wcmV2aWV3LWJ1dHRvbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjE7XG4gICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgIGkge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmRlbGV0ZUltYWdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjE7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgfVxuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAjNjZhZmU5O1xuXG4gICAgI2ltYWdlUHJldmlldyB7XG4gICAgICBmaWx0ZXI6IG9wYWNpdHkoMC41KTtcbiAgICB9XG5cbiAgICAucHJldmlld0V5ZSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEuMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIjaW1hZ2VNb2RhbCB7XG4gIGhlaWdodDogNDAwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByb3VuZDtcbn1cblxuLmF2YXRhci11cGxvYWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogMjA1cHg7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xufVxuLmF2YXRhci11cGxvYWQgLmF2YXRhci1lZGl0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAzMHB4O1xufVxuLmF2YXRhci11cGxvYWQgLmF2YXRhci1lZGl0IGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5hdmF0YXItdXBsb2FkIC5hdmF0YXItZWRpdCBpbnB1dCArIGxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAzNHB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbi5hdmF0YXItdXBsb2FkIC5hdmF0YXItZWRpdCBpbnB1dCArIGxhYmVsIGkge1xuICBjb2xvcjogIzBjNDI1ZDtcbn1cbi5hdmF0YXItdXBsb2FkIC5hdmF0YXItZWRpdCBpbnB1dCArIGxhYmVsOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgYm9yZGVyLWNvbG9yOiAjZDZkNmQ2O1xufVxuLmF2YXRhci11cGxvYWQgLmF2YXRhci1wcmV2aWV3IHtcbiAgd2lkdGg6IDE5MnB4O1xuICBoZWlnaHQ6IDE5MnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlcjogM3B4IHNvbGlkICMwYzQyNWQ7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4uYXZhdGFyLXVwbG9hZCAuYXZhdGFyLXByZXZpZXcgI2xvZ29QcmV2aWV3IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG5idXR0b24ge1xuICBtYXJnaW46IDAgMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uYXZhdGFyLXByZXZpZXcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAzcHggc29saWQgI2Y1ZjVmNTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMCAwcHggNXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG59XG4uYXZhdGFyLXByZXZpZXcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5hdmF0YXItcHJldmlldyAucHJldmlld0V5ZSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xufVxuLmF2YXRhci1wcmV2aWV3IC5wcmV2aWV3RXllIC5wcmV2aWV3LWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjNDI1ZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmF2YXRhci1wcmV2aWV3IC5wcmV2aWV3RXllIC5wcmV2aWV3LWJ1dHRvbiBpIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLmF2YXRhci1wcmV2aWV3IC5kZWxldGVJbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG4uYXZhdGFyLXByZXZpZXcgLmRlbGV0ZUltYWdlIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzQyNWQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uYXZhdGFyLXByZXZpZXcgLmRlbGV0ZUltYWdlOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuLmF2YXRhci1wcmV2aWV3OmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjNjZhZmU5O1xufVxuLmF2YXRhci1wcmV2aWV3OmhvdmVyICNpbWFnZVByZXZpZXcge1xuICBmaWx0ZXI6IG9wYWNpdHkoMC41KTtcbn1cbi5hdmF0YXItcHJldmlldzpob3ZlciAucHJldmlld0V5ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xufVxuLmF2YXRhci1wcmV2aWV3OmhvdmVyIC5wcmV2aWV3RXllOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMS4xKTtcbn0iLCIvL2NvbG9yc1xuJHdoaXRlIDogd2hpdGU7XG4kY29sb3IxOiAjMGM0MjVkO1xuJGNvbG9yMjogI2E4ZDJiZTtcbiRjb2xvcjM6ICM0ODk5YzI7XG4kY29sb3I0OiAjMWY3N2EzO1xuXG4kY29sb3I1IDogI2Y5YWU0ZTtcbiRjb2xvcjU1OiAjZDY4NTIyO1xuXG4kYm9yZGVyICAgICAgICAgICAgICAgICA6ICNmMWYxZjE7XG4kZGF0YS10YWJsZS1ib3JkZXIgICAgICA6ICNlOWU5ZTk7XG4kZ3JheTIgICAgICAgICAgICAgICAgICA6ICNlMmUyZTI7XG4kZ3JheTMgICAgICAgICAgICAgICAgICA6ICM3NTc1NzU7XG4kdHJhc2gtY29sb3IgICAgICAgICAgICA6ICNDOTMwMkM7XG4kZm9udC1jb2xvciAgICAgICAgICAgICA6ICM1NTU7XG4kYWN0aXZlLWJyZWFkY3J1bWItY29sb3I6ICMzNDM0MzQ7XG4kY2FyZC1oZWFkZXItYmcgICAgICAgICA6ICNmOWY5Zjk7IC8vI2VmZWZlZjsgLy8jZjlmOWY5O1xuJHBsYWNlaG9sZGVyLWNvbG9yICAgICAgOiAjYjNiM2IzO1xuXG4vLyBiYWNrZ3JvdW5kIGNvbG9yXG4kbWFpbi1iYWNrZ3JvdW5kLWNvbG9yICA6ICNlZmVkZjI7XG4kaGVhZGVyLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuJGRhdGEtdGFibGUtYm94ICAgICAgICAgOiAjZmZmZGZlOyAvLyNmN2Y3Zjc7XG4kY2FyZC1ib2R5ICAgICAgICAgICAgICA6ICNmZmZkZmU7XG5cbi8vIERhc2hib2FyZFxuJG1hcmdpbkJldHdlZW5DYXJkczogMjJweDtcbiRheGlzRm9udFNpemUgICAgICA6IDEycHg7XG4kc21hbGxBeGlzRm9udFNpemUgOiAxMHB4O1xuXG4vL2hlYWRlclxuJHByb2ZpbGUtbWVudS1jb2xvcjogI2Y5ZjlmOTtcbiRiaWxsLWNvbG9yICAgICAgICA6ICM5YmEyYWE7XG4kYmlsbC1ob3Zlci1jb2xvciAgOiAjNzM4MThmO1xuXG4vL0xheW91dCBWYXJpYWJsZXNcblxuJGhlYWRlci1oZWlnaHQgOiA1NXB4O1xuJHNpZGVNZW51LXdpZHRoOiAyMDBweDtcblxuXG4vL2xvZ2luXG4kbG95YWxpdHktY29sb3IgIDogIzg4N2Y3ZjtcbiRsb2dpbi1ib3gtY29sb3IgOiAjZjVmMmYwO1xuXG4vL21haWxcbiRtYWlsLWNoZWNrYm94LWNvbG9yOiAjMDA3M2FhO1xuJHVzZXItbWFpbC1jb2xvciAgICA6ICMyOTJiMmM7XG5cbi8vcHJvZmlsZVxuJGFjdGl2ZS1jb2xvciAgICAgOiAjZjRmNmY5O1xuJGljb24tY29sb3IgICAgICAgOiAjOTU5Y2I2O1xuJGxhYmVsLXRpdGxlLWNvbG9yOiAjNTA1NjZhO1xuXG4vL2VtYWlsIHRlbXBsYXRlc1xuJGVtYWlsLWJsdWUtY29sb3I6ICMwZjQxNWQ7XG4kZW1haWwtZ3JheS1jb2xvcjogIzVmNjA2MDtcbiRlbWFpbC1zeWFuLWNvbG9yOiAjYTJkOWMyO1xuJGVtYWlsLW9yYWduZS1jb2xvcjogI2ZmYWM1MjtcblxuLy9mb250c1xuJGZvbnQyOCAgICAgICAgICAgOiAyOHB4O1xuJGZvbnQyNCAgICAgICAgICAgOiAyNHB4O1xuJGZvbnQxOCAgICAgICAgICAgOiAxOHB4O1xuJGZvbnQxNiAgICAgICAgICAgOiAxNnB4O1xuJGZvbnQxNCAgICAgICAgICAgOiAxNHB4O1xuJGZvbnQxMiAgICAgICAgICAgOiAxMnB4O1xuJGZvbnQxMCAgICAgICAgICAgOiAxMHB4O1xuJGZvbnQtd2VpZ2h0LTYwMCAgOiA2MDA7XG4kZm9udC13ZWlnaHQtNTAwICA6IDUwMDtcbiRwbGFjZWhvbGRlci1mb250IDogMTJweDtcbiRsYWJlbC1mb250ICAgICAgIDogMTRweDtcbiRjYXJkLWhlYWRlci1mb250IDogMTZweDtcblxuJGRhdGEtdGFibGUtaGVhZGVyLTEzNjYgOiAxNHB4O1xuJGRhdGEtdGFibGUtaGVhZGVyLTE5MjAgOiAxNnB4O1xuJGRhdGEtdGFibGUtYm9keS0xMzY2IDogMTJweDtcbiRkYXRhLXRhYmxlLWJvZHktMTkyMDogMTZweDtcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadPhotoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-upload-photo",
          templateUrl: "./upload-photo.component.html",
          styleUrls: ["./upload-photo.component.scss"]
        }]
      }], function () {
        return [{
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
        }];
      }, {
        labelImg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        image: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        choosed_image: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/reusable-components/form-fields/validation-errors/validation-errors.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/reusable-components/form-fields/validation-errors/validation-errors.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: ValidationErrorsComponent */

  /***/
  function srcAppReusableComponentsFormFieldsValidationErrorsValidationErrorsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValidationErrorsComponent", function () {
      return ValidationErrorsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _validation_messages_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./validation-messages-list */
    "./src/app/reusable-components/form-fields/validation-errors/validation-messages-list.ts");
    /* harmony import */


    var _validation_patterns_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./validation-patterns-list */
    "./src/app/reusable-components/form-fields/validation-errors/validation-patterns-list.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ValidationErrorsComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
      }
    }

    var ValidationErrorsComponent = /*#__PURE__*/function () {
      function ValidationErrorsComponent() {
        _classCallCheck(this, ValidationErrorsComponent);

        this.validationErrors = null;
        this.errorMessage = null;
      }

      _createClass(ValidationErrorsComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.errorMessage = this.getErrorMessage();
        }
      }, {
        key: "getErrorMessage",
        value: function getErrorMessage() {
          var errors = this.validationErrors;

          if (errors) {
            // console.log(errors);
            var keys = Object.keys(errors);

            switch (keys[0]) {
              case 'required':
                return _validation_messages_list__WEBPACK_IMPORTED_MODULE_1__["FILLING_NEEDED_MESSAGE"];

              case 'pattern':
                return this.getPatternMessage(errors['pattern']['requiredPattern']);

              case 'minlength':
                return 'Minimum Lengths:' + errors['minlength'].requiredLength;

              case 'min':
                return _validation_messages_list__WEBPACK_IMPORTED_MODULE_1__["FILLING_NEEDED_MESSAGE"];

              default:
                return 'UnKnowen Error';
            }
          }

          return null;
        }
      }, {
        key: "getPatternMessage",
        value: function getPatternMessage(requiredPattern) {
          return _validation_patterns_list__WEBPACK_IMPORTED_MODULE_2__["PATTERNS_LIST"].filter(function (x) {
            return x['PATTERN'] === requiredPattern;
          })[0]['MESSAGE'];
        }
      }]);

      return ValidationErrorsComponent;
    }();

    ValidationErrorsComponent.ɵfac = function ValidationErrorsComponent_Factory(t) {
      return new (t || ValidationErrorsComponent)();
    };

    ValidationErrorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ValidationErrorsComponent,
      selectors: [["app-validation-errors"]],
      inputs: {
        validationErrors: "validationErrors"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [1, "alert-danger"]],
      template: function ValidationErrorsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ValidationErrorsComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: [".alert-danger[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 100%;\n  color: #813838;\n  background-color: #fee2e1;\n  padding: 5px 10px;\n  position: absolute;\n  border-radius: 1.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV1c2FibGUtY29tcG9uZW50cy9mb3JtLWZpZWxkcy92YWxpZGF0aW9uLWVycm9ycy9FOlxcVW50aXRsZWQgRm9sZGVyXFxwcml2YXRlXFxwcm9qZWN0c1xcZnVsbF9zdGFja1xcbW90b2JhclxcbW90b2Jhcl9hZG1pbi9zcmNcXGFwcFxccmV1c2FibGUtY29tcG9uZW50c1xcZm9ybS1maWVsZHNcXHZhbGlkYXRpb24tZXJyb3JzXFx2YWxpZGF0aW9uLWVycm9ycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmV1c2FibGUtY29tcG9uZW50cy9mb3JtLWZpZWxkcy92YWxpZGF0aW9uLWVycm9ycy92YWxpZGF0aW9uLWVycm9ycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9yZXVzYWJsZS1jb21wb25lbnRzL2Zvcm0tZmllbGRzL3ZhbGlkYXRpb24tZXJyb3JzL3ZhbGlkYXRpb24tZXJyb3JzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0LWRhbmdlciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjODEzODM4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVlMmUxO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiAxLjI1cmVtO1xufVxuIiwiLmFsZXJ0LWRhbmdlciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjODEzODM4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVlMmUxO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiAxLjI1cmVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidationErrorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-validation-errors',
          templateUrl: './validation-errors.component.html',
          styleUrls: ['./validation-errors.component.scss']
        }]
      }], null, {
        validationErrors: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/reusable-components/form-fields/validation-errors/validation-messages-list.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/reusable-components/form-fields/validation-errors/validation-messages-list.ts ***!
    \***********************************************************************************************/

  /*! exports provided: FILLING_NEEDED_MESSAGE, EMAIL_PATTERN_MESSAGE, CYRILLIC_PATTERN_MESSAGE, unamePattern_MESSAGE */

  /***/
  function srcAppReusableComponentsFormFieldsValidationErrorsValidationMessagesListTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FILLING_NEEDED_MESSAGE", function () {
      return FILLING_NEEDED_MESSAGE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EMAIL_PATTERN_MESSAGE", function () {
      return EMAIL_PATTERN_MESSAGE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CYRILLIC_PATTERN_MESSAGE", function () {
      return CYRILLIC_PATTERN_MESSAGE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "unamePattern_MESSAGE", function () {
      return unamePattern_MESSAGE;
    });

    var FILLING_NEEDED_MESSAGE = 'This Feild Is Required';
    var EMAIL_PATTERN_MESSAGE = 'Incorrect Email';
    var CYRILLIC_PATTERN_MESSAGE = 'Only cyrillic';
    var unamePattern_MESSAGE = 'Invalid pattern';
    /***/
  },

  /***/
  "./src/app/reusable-components/form-fields/validation-errors/validation-patterns-list.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/reusable-components/form-fields/validation-errors/validation-patterns-list.ts ***!
    \***********************************************************************************************/

  /*! exports provided: EMAIL_PATTERN, CYRILLIC_PATTERN, unamePattern, PATTERNS_LIST */

  /***/
  function srcAppReusableComponentsFormFieldsValidationErrorsValidationPatternsListTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EMAIL_PATTERN", function () {
      return EMAIL_PATTERN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CYRILLIC_PATTERN", function () {
      return CYRILLIC_PATTERN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "unamePattern", function () {
      return unamePattern;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PATTERNS_LIST", function () {
      return PATTERNS_LIST;
    });
    /* harmony import */


    var _validation_messages_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./validation-messages-list */
    "./src/app/reusable-components/form-fields/validation-errors/validation-messages-list.ts");

    var EMAIL_PATTERN = '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}$';
    var CYRILLIC_PATTERN = '^[А-Яа-яЁё\\s]+$';
    var unamePattern = '^+(?:[0-9]●?){6,14}[0-9]$';
    var PATTERNS_LIST = [{
      PATTERN: EMAIL_PATTERN,
      MESSAGE: _validation_messages_list__WEBPACK_IMPORTED_MODULE_0__["EMAIL_PATTERN_MESSAGE"]
    }, {
      PATTERN: CYRILLIC_PATTERN,
      MESSAGE: _validation_messages_list__WEBPACK_IMPORTED_MODULE_0__["CYRILLIC_PATTERN_MESSAGE"]
    }, {
      PATTERN: unamePattern,
      MESSAGE: _validation_messages_list__WEBPACK_IMPORTED_MODULE_0__["unamePattern_MESSAGE"]
    }];
    /***/
  }
}]);
//# sourceMappingURL=default~pages-auth-auth-module~pages-categories-categories-module~pages-feeds-feeds-module~pages-pro~a61ff8a4-es5.js.map