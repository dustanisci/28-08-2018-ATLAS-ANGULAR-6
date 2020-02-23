function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
  "./src/app/api/api.service.ts":
  /*!************************************!*\
    !*** ./src/app/api/api.service.ts ***!
    \************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppApiApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ApiService =
    /*#__PURE__*/
    function () {
      function ApiService(http) {
        _classCallCheck(this, ApiService);

        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json');
        this.request = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
      }

      _createClass(ApiService, [{
        key: "setHeaders",
        value: function setHeaders(request) {
          var _this = this;

          if (request) {
            this.request = {};
            Object.keys(request).map(function (key) {
              _this.request.append(key, request[key]);
            });
          }
        }
      }, {
        key: "get",
        value: function get(url, request) {
          this.setHeaders(request);
          return this.http.get(url, {
            headers: this.headers,
            params: this.request
          });
        }
      }, {
        key: "post",
        value: function post(url, value, request) {
          this.setHeaders(request);
          return this.http.post(url, value, {
            headers: this.headers,
            params: this.request
          });
        }
      }, {
        key: "put",
        value: function put(url, id, value, request) {
          this.setHeaders(request);
          return this.http.put("".concat(url, "/").concat(id), value, {
            headers: this.headers,
            params: this.request
          });
        }
      }, {
        key: "delete",
        value: function _delete(url, id, request) {
          this.setHeaders(request);
          return this.http.delete("".concat(url, "/").concat(id), {
            headers: this.headers,
            params: this.request
          });
        }
      }]);

      return ApiService;
    }();

    ApiService.ɵfac = function ApiService_Factory(t) {
      return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiService,
      factory: ApiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
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


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/logo/logo.component */
    "./src/app/components/logo/logo.component.ts");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_profit_table_profit_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/profit-table/profit-table.component */
    "./src/app/components/profit-table/profit-table.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.menuResponsivoWindow();
      }

      _createClass(AppComponent, [{
        key: "menuResponsivoResize",
        value: function menuResponsivoResize(event) {
          if (event.target.innerWidth > 768) {
            this.opened = true;
          } else {
            this.opened = false;
          }
        }
      }, {
        key: "menuResponsivoWindow",
        value: function menuResponsivoWindow() {
          if (window.screen.availWidth > 768) {
            this.opened = true;
          } else {
            this.opened = false;
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 16,
      vars: 1,
      consts: [["autosize", ""], ["mode", "side", 3, "opened", "resize"], ["drawer", ""], [1, "item"], [1, "icon-menu", 3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AppComponent_Template_mat_drawer_resize_1_listener($event) {
            return ctx.menuResponsivoResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-logo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-chip-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Lucros ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_mat_icon_click_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return _r0.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-profit-table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx.opened);
        }
      },
      directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawer"], _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _components_profit_table_profit_table_component__WEBPACK_IMPORTED_MODULE_6__["ProfitTableComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]],
      styles: ["mat-drawer-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\nmat-drawer-container[_ngcontent-%COMP%]   mat-drawer[_ngcontent-%COMP%] {\n  width: 250px;\n  background: -webkit-gradient(linear, left top, left bottom, from(#00B286), to(#0081A7));\n  background: linear-gradient(#00B286, #0081A7);\n}\nmat-drawer-container[_ngcontent-%COMP%]   mat-drawer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  padding: 15px 25px 0px 20px;\n  display: block;\n  width: 100%;\n  position: relative;\n}\nmat-drawer-container[_ngcontent-%COMP%]   mat-drawer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #FFF !important;\n  font-family: \"Roboto-Medium\";\n  color: #00B286 !important;\n  cursor: pointer;\n}\nmat-drawer-container[_ngcontent-%COMP%]   mat-drawer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  display: inline;\n  margin-right: 32px;\n}\nmat-drawer-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%] {\n  background-position: right;\n  height: 100%;\n  width: 100%;\n  background: url('fundo.png') no-repeat 100%;\n  background-position: right bottom;\n}\nmat-drawer-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  display: none;\n  font-size: 50px;\n  position: absolute;\n  z-index: 1;\n  margin-top: 6px;\n  margin-left: 10px;\n}\n@media screen and (max-width: 768px) {\n  mat-drawer-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    display: inline;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYzpcXHJlcG9zaXRvcmlvc1xcYml0Y29pbi15aWVsZC1hbmd1bGFyOS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURDRTtFQUNFLFlBQUE7RUFDQSx1RkFBQTtFQUFBLDZDQUFBO0FDQ0o7QURDSTtFQUNFLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NOO0FEQ007RUFDRSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ0NSO0FEQ1E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNDVjtBRE1FO0VBQ0UsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDJDQUFBO0VBQ0EsaUNBQUE7QUNKSjtBRE1JO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNKTjtBRE1NO0VBUkY7SUFTSSxlQUFBO0VDSE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1kcmF3ZXItY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBtYXQtZHJhd2VyIHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDBCMjg2LCAjMDA4MUE3KTtcclxuXHJcbiAgICAuaXRlbSB7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMjVweCAwcHggMjBweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICBtYXQtY2hpcCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90by1NZWRpdW1cIjtcclxuICAgICAgICBjb2xvcjogIzAwQjI4NiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1haW4ge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi8uLi9hc3NldHMvaW1nL2Z1bmRvLnBuZycpIG5vLXJlcGVhdCAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgYm90dG9tO1xyXG5cclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcblxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJtYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbm1hdC1kcmF3ZXItY29udGFpbmVyIG1hdC1kcmF3ZXIge1xuICB3aWR0aDogMjUwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDBCMjg2LCAjMDA4MUE3KTtcbn1cbm1hdC1kcmF3ZXItY29udGFpbmVyIG1hdC1kcmF3ZXIgLml0ZW0ge1xuICBwYWRkaW5nOiAxNXB4IDI1cHggMHB4IDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxubWF0LWRyYXdlci1jb250YWluZXIgbWF0LWRyYXdlciAuaXRlbSBtYXQtY2hpcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjRkZGICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90by1NZWRpdW1cIjtcbiAgY29sb3I6ICMwMEIyODYgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxubWF0LWRyYXdlci1jb250YWluZXIgbWF0LWRyYXdlciAuaXRlbSBtYXQtY2hpcCBtYXQtaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xufVxubWF0LWRyYXdlci1jb250YWluZXIgbWFpbiB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLy4uL2Fzc2V0cy9pbWcvZnVuZG8ucG5nXCIpIG5vLXJlcGVhdCAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBib3R0b207XG59XG5tYXQtZHJhd2VyLWNvbnRhaW5lciBtYWluIG1hdC1pY29uIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICBtYXQtZHJhd2VyLWNvbnRhaW5lciBtYWluIG1hdC1pY29uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cbn0iXX0= */"]
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
      }], function () {
        return [];
      }, null);
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/logo/logo.component */
    "./src/app/components/logo/logo.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_profit_table_profit_table_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/profit-table/profit-table.component */
    "./src/app/components/profit-table/profit-table.component.ts");
    /* harmony import */


    var _components_profit_table_profit_table_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/profit-table/profit-table.service */
    "./src/app/components/profit-table/profit-table.service.ts");
    /* harmony import */


    var _components_profit_table_translate_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/profit-table/translate-table */
    "./src/app/components/profit-table/translate-table.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_components_profit_table_profit_table_service__WEBPACK_IMPORTED_MODULE_18__["ProfitTableService"], {
        provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorIntl"],
        useValue: Object(_components_profit_table_translate_table__WEBPACK_IMPORTED_MODULE_19__["getDutchPaginatorIntl"])()
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"], _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_15__["LogoComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"], _components_profit_table_profit_table_component__WEBPACK_IMPORTED_MODULE_17__["ProfitTableComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"], _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_15__["LogoComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"], _components_profit_table_profit_table_component__WEBPACK_IMPORTED_MODULE_17__["ProfitTableComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"]],
          providers: [_components_profit_table_profit_table_service__WEBPACK_IMPORTED_MODULE_18__["ProfitTableService"], {
            provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorIntl"],
            useValue: Object(_components_profit_table_translate_table__WEBPACK_IMPORTED_MODULE_19__["getDutchPaginatorIntl"])()
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
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

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.year = new Date().getFullYear();
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
      decls: 8,
      vars: 1,
      consts: [[1, "col"], ["aria-hidden", "true", 1, "fa", "fa-facebook-square"], ["aria-hidden", "true", 1, "fa", "fa-twitter"], ["aria-hidden", "true", 1, "fa", "fa-instagram"], ["aria-hidden", "true", 1, "fa", "fa-youtube-play"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Atlas Quantum @ ", ctx.year, ". All rights reserved ");
        }
      },
      styles: ["footer[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 0;\n  height: 5%;\n  width: 100%;\n  margin-top: 14px;\n}\n@media screen and (max-width: 768px) {\n  footer[_ngcontent-%COMP%] {\n    position: relative;\n    bottom: 0;\n    height: 5%;\n    width: 100%;\n  }\n}\nfooter[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline;\n}\n@media screen and (max-width: 850px) {\n  footer[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    display: block;\n    margin: 20px 70px;\n    float: none !important;\n    text-align: center;\n  }\n}\nfooter[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:first-child {\n  font-family: \"Roboto-Regular\";\n  font-size: 14px;\n  margin-left: 70px;\n}\nfooter[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:last-child {\n  float: right;\n  margin-right: 70px;\n}\nfooter[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:last-child   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #9B9B9B;\n  margin: 0 10px;\n}\n@media screen and (max-width: 850px) {\n  footer[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:last-child   i[_ngcontent-%COMP%]:first-child {\n    margin-left: 0;\n  }\n}\nfooter[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:last-child   i[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvYzpcXHJlcG9zaXRvcmlvc1xcYml0Y29pbi15aWVsZC1hbmd1bGFyOS9zcmNcXGFwcFxcY29tcG9uZW50c1xcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBRENFO0VBUEY7SUFRSSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtFQ0VGO0FBQ0Y7QURBRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ0VKO0FEQUk7RUFKRjtJQUtJLGNBQUE7SUFDQSxpQkFBQTtJQUNBLHNCQUFBO0lBQ0Esa0JBQUE7RUNHSjtBQUNGO0FEREk7RUFDRSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0dOO0FEQUk7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNFTjtBREFNO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDRVI7QURDVTtFQURGO0lBRUksY0FBQTtFQ0VWO0FBQ0Y7QURDUTtFQUNFLGVBQUE7QUNDViIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvdHRvbTogMDtcclxuICBoZWlnaHQ6IDUlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDE0cHg7XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBoZWlnaHQ6IDUlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuY29sIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luOiAyMHB4IDcwcHg7XHJcbiAgICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLVJlZ3VsYXJcIjtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNzBweDtcclxuICAgIH1cclxuXHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNzBweDtcclxuXHJcbiAgICAgIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICBjb2xvcjogIzlCOUI5QjtcclxuICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuXHJcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJmb290ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiA1JTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICBmb290ZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDA7XG4gICAgaGVpZ2h0OiA1JTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuZm9vdGVyIC5jb2wge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gIGZvb3RlciAuY29sIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDIwcHggNzBweDtcbiAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuZm9vdGVyIC5jb2w6Zmlyc3QtY2hpbGQge1xuICBmb250LWZhbWlseTogXCJSb2JvdG8tUmVndWxhclwiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xufVxuZm9vdGVyIC5jb2w6bGFzdC1jaGlsZCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xufVxuZm9vdGVyIC5jb2w6bGFzdC1jaGlsZCBpIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogIzlCOUI5QjtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xuICBmb290ZXIgLmNvbDpsYXN0LWNoaWxkIGk6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG59XG5mb290ZXIgLmNvbDpsYXN0LWNoaWxkIGk6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn0iXX0= */"]
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
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
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

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 5,
      vars: 0,
      consts: [[1, "align"], ["aria-hidden", "true", 1, "fa", "fa-user"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Eduardo Stanisci");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["header[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  background: #FFF;\n  height: 65px;\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2199999988);\n  font-size: 14px;\n  font-family: \"Roboto-Medium\";\n  color: #4A4A4A;\n}\n\n.align[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: 70px;\n  position: relative;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\n@media screen and (max-width: 768px) {\n  .align[_ngcontent-%COMP%] {\n    float: left;\n    left: 80px;\n    top: 31px;\n    margin-right: 0;\n  }\n}\n\n.align[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvYzpcXHJlcG9zaXRvcmlvc1xcYml0Y29pbi15aWVsZC1hbmd1bGFyOS9zcmNcXGFwcFxcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlEQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQ0NGOztBRENFO0VBUEY7SUFRSSxXQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7SUFDQSxlQUFBO0VDRUY7QUFDRjs7QURBRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogI0ZGRjtcclxuICBoZWlnaHQ6IDY1cHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yMTk5OTk5OTg4MDc5MDcxKTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLU1lZGl1bVwiO1xyXG4gIGNvbG9yOiAjNEE0QTRBO1xyXG59XHJcblxyXG4uYWxpZ24ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbGVmdDogODBweDtcclxuICAgIHRvcDogMzFweDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcblxyXG4gIGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gIH1cclxufVxyXG4iLCJoZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICBoZWlnaHQ6IDY1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjE5OTk5OTk4OCk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLU1lZGl1bVwiO1xuICBjb2xvcjogIzRBNEE0QTtcbn1cblxuLmFsaWduIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5hbGlnbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbGVmdDogODBweDtcbiAgICB0b3A6IDMxcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG59XG4uYWxpZ24gaSB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/logo/logo.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/logo/logo.component.ts ***!
    \***************************************************/

  /*! exports provided: LogoComponent */

  /***/
  function srcAppComponentsLogoLogoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoComponent", function () {
      return LogoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LogoComponent =
    /*#__PURE__*/
    function () {
      function LogoComponent() {
        _classCallCheck(this, LogoComponent);
      }

      _createClass(LogoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LogoComponent;
    }();

    LogoComponent.ɵfac = function LogoComponent_Factory(t) {
      return new (t || LogoComponent)();
    };

    LogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LogoComponent,
      selectors: [["app-logo"]],
      decls: 1,
      vars: 0,
      consts: [["src", "./assets/img/logo.png"]],
      template: function LogoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        }
      },
      styles: ["img[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  margin-top: 14px;\n  margin-bottom: 25px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.3000000119);\n  padding: 0 30px 15px 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dvL2M6XFxyZXBvc2l0b3Jpb3NcXGJpdGNvaW4teWllbGQtYW5ndWxhcjkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxvZ29cXGxvZ28uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbG9nby9sb2dvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMERBQUE7RUFDQSx5QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dvL2xvZ28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XHJcbiAgZGlzcGxheTpibG9jaztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tdG9wOjE0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbToyNXB4O1xyXG4gIGJvcmRlci1ib3R0b206MXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMDAwMDAwMTE5MjA5Mjg5Nik7XHJcbiAgcGFkZGluZzowIDMwcHggMTVweCAzMHB4O1xyXG59XHJcbiIsImltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMDAwMDAwMTE5KTtcbiAgcGFkZGluZzogMCAzMHB4IDE1cHggMzBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-logo',
          templateUrl: './logo.component.html',
          styleUrls: ['./logo.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/profit-table/profit-table.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/profit-table/profit-table.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ProfitTableComponent */

  /***/
  function srcAppComponentsProfitTableProfitTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfitTableComponent", function () {
      return ProfitTableComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _profit_table_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profit-table.service */
    "./src/app/components/profit-table/profit-table.service.ts");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProfitTableComponent_th_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Data ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProfitTableComponent_td_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var profit_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, profit_r12.dateMoviment, "dd/MM/yy - hh:mm"), " ");
      }
    }

    function ProfitTableComponent_th_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Moeda ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProfitTableComponent_td_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var profit_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", profit_r13.coin, " ");
      }
    }

    function ProfitTableComponent_th_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Rendimentos ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProfitTableComponent_td_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var profit_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" + ", profit_r14.proft, " BTC ");
      }
    }

    function ProfitTableComponent_th_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " % ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProfitTableComponent_td_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var profit_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, profit_r15.profitPercentage * 0.01, "0.00"), " %");
      }
    }

    function ProfitTableComponent_tr_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
      }
    }

    function ProfitTableComponent_tr_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 19);
      }
    }

    var _c0 = function _c0() {
      return [5, 10, 20];
    };

    var ProfitTableComponent =
    /*#__PURE__*/
    function () {
      function ProfitTableComponent(profitsService) {
        _classCallCheck(this, ProfitTableComponent);

        this.profitsService = profitsService;
        this.displayedColumns = ['data', 'moeda', 'rendimentos', 'porcentagem'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.profits = new Array();
      }

      _createClass(ProfitTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getProfits();
        }
      }, {
        key: "getProfits",
        value: function getProfits() {
          var _this2 = this;

          this.profitsService.dataProfits().subscribe(function (resp) {
            _this2.profits = resp;
            _this2.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this2.profits);
            _this2.dataSource.paginator = _this2.paginator;
          }, function () {
            alert('Não foi possível carregar, tente novamente!');
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }]);

      return ProfitTableComponent;
    }();

    ProfitTableComponent.ɵfac = function ProfitTableComponent_Factory(t) {
      return new (t || ProfitTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_profit_table_service__WEBPACK_IMPORTED_MODULE_3__["ProfitTableService"]));
    };

    ProfitTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfitTableComponent,
      selectors: [["app-profit-table"]],
      viewQuery: function ProfitTableComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        }
      },
      decls: 28,
      vars: 5,
      consts: [[1, "topo-sub"], [1, "search"], ["type", "text", "matInput", "", "placeholder", "Pesquisar", 3, "keyup"], ["aria-hidden", "true", 1, "fa", "fa-search"], [1, "bloco-table"], [1, "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "data"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "moeda"], ["matColumnDef", "rendimentos"], ["matColumnDef", "porcentagem"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
      template: function ProfitTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Lucros");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Relat\xF3rio de distribui\xE7\xE3o de lucro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ProfitTableComponent_Template_input_keyup_6_listener($event) {
            return ctx.applyFilter($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Distribui\xE7\xE3o de lucro (\xFAltimo m\xEAs)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProfitTableComponent_th_14_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProfitTableComponent_td_15_Template, 3, 4, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProfitTableComponent_th_17_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProfitTableComponent_td_18_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ProfitTableComponent_th_20_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProfitTableComponent_td_21_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProfitTableComponent_th_23_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProfitTableComponent_td_24_Template, 3, 4, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProfitTableComponent_tr_25_Template, 1, 0, "tr", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ProfitTableComponent_tr_26_Template, 1, 0, "tr", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "mat-paginator", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        }
      },
      directives: [_angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]],
      styles: [".bloco-table[_ngcontent-%COMP%] {\n  margin: 20px 70px 0 70px;\n  background: #FFF;\n  position: relative;\n  display: block;\n  border-radius: 6px;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2399999946), 0 0 2px 0 rgba(0, 0, 0, 0.1199999973);\n  padding: 10px 25px 35px 25px;\n}\n\n.bloco-table[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  font-family: \"Roboto-Medium\";\n  color: #3C3C3C;\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 24px;\n  text-align: left;\n}\n\n.mat-elevation-z8[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 12px;\n}\n\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: #F8F8F8;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2399999946), 0 0 2px 0 rgba(0, 0, 0, 0.1199999973);\n}\n\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #fff;\n}\n\ninput[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.0500000007);\n  border-radius: 24px;\n  width: 306px;\n  height: 35px;\n  padding-left: 10px;\n  padding-right: 50px;\n  right: 0;\n  font-family: \"Roboto-Regular\";\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\ni[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  top: 0px;\n  z-index: 1;\n  width: 20px;\n  background: -webkit-gradient(linear, left top, left bottom, from(#00B286), to(#0081A7));\n  background: linear-gradient(#00B286, #0081A7);\n  padding: 9px;\n  border-radius: 20px;\n  color: #FFF;\n  text-align: center;\n}\n\n.search[_ngcontent-%COMP%] {\n  float: right;\n  position: relative;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-ExtraBold\";\n  font-size: 36px;\n  margin-bottom: 0;\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.topo-sub[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Roboto-Regular\";\n  font-size: 14px;\n  margin-left: 0;\n  margin-right: 0;\n  display: inline;\n}\n\n.topo-sub[_ngcontent-%COMP%] {\n  margin: 0 70px 40px 70px;\n  display: block;\n}\n\n@media screen and (max-width: 1100px) {\n  .search[_ngcontent-%COMP%] {\n    float: none;\n    margin-top: 20px;\n    display: block;\n  }\n\n  i[_ngcontent-%COMP%] {\n    left: -40px;\n    position: relative;\n  }\n\n  input[_ngcontent-%COMP%] {\n    margin-bottom: 0px;\n    padding-right: 30px;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .bloco-table[_ngcontent-%COMP%] {\n    margin: 0 15px;\n  }\n\n  .bloco-table[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n\n  input[_ngcontent-%COMP%] {\n    width: 220px;\n    margin-bottom: 20px;\n  }\n\n  i[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 250px;\n  }\n\n  .topo-sub[_ngcontent-%COMP%] {\n    margin: 0 15px;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maXQtdGFibGUvYzpcXHJlcG9zaXRvcmlvc1xcYml0Y29pbi15aWVsZC1hbmd1bGFyOS9zcmNcXGFwcFxcY29tcG9uZW50c1xccHJvZml0LXRhYmxlXFxwcm9maXQtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZml0LXRhYmxlL3Byb2ZpdC10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDBGQUFBO0VBQ0EsNEJBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSwwRkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLDZDQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsNkJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHVGQUFBO0VBQUEsNkNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSx3QkFBQTtFQUNBLGNBQUE7QUNDRjs7QURHQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtFQ0FGOztFREdBO0lBQ0UsV0FBQTtJQUNBLGtCQUFBO0VDQUY7O0VER0E7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VDQUY7QUFDRjs7QURJQTtFQUNFO0lBQ0UsY0FBQTtFQ0ZGOztFREtBO0lBQ0UsZUFBQTtFQ0ZGOztFREtBO0lBQ0UsWUFBQTtJQUNBLG1CQUFBO0VDRkY7O0VES0E7SUFDRSxrQkFBQTtJQUNBLFdBQUE7RUNGRjs7RURLQTtJQUNFLGNBQUE7RUNGRjs7RURLQTtJQUNFLGVBQUE7RUNGRjs7RURLQTtJQUNFLGVBQUE7RUNGRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9maXQtdGFibGUvcHJvZml0LXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2NvLXRhYmxlIHtcclxuICBtYXJnaW46IDIwcHggNzBweCAwIDcwcHg7XHJcbiAgYmFja2dyb3VuZDogI0ZGRjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4yMzk5OTk5OTQ2MzU1ODE5NyksIDAgMCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTE5OTk5OTk3MzE3NzkwOTkpO1xyXG4gIHBhZGRpbmc6IDEwcHggMjVweCAzNXB4IDI1cHg7XHJcbn1cclxuXHJcbi5ibG9jby10YWJsZT5oMiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLU1lZGl1bVwiO1xyXG4gIGNvbG9yOiAjM0MzQzNDO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5tYXQtZWxldmF0aW9uLXo4IHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG50YWJsZSB0ciB7XHJcbiAgYmFja2dyb3VuZDogI0Y4RjhGODtcclxuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMjM5OTk5OTk0NjM1NTgxOTcpLCAwIDAgMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjExOTk5OTk5NzMxNzc5MDk5KTtcclxufVxyXG5cclxudGFibGUgdGgge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUwMDAwMDAwNzQ1MDU4MDYpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgd2lkdGg6IDMwNnB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICByaWdodDogMDtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG8tUmVndWxhclwiO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuaSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgdG9wOiAwcHg7XHJcbiAgei1pbmRleDogMTtcclxuICB3aWR0aDogMjBweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzAwQjI4NiwgIzAwODFBNyk7XHJcbiAgcGFkZGluZzogOXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2VhcmNoIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiR2lscm95LUV4dHJhQm9sZFwiO1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLnRvcG8tc3ViIGgyIHtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG8tUmVndWxhclwiO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG4udG9wby1zdWIge1xyXG4gIG1hcmdpbjogMCA3MHB4IDQwcHggNzBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gIC5zZWFyY2gge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICBpIHtcclxuICAgIGxlZnQ6IC00MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5ibG9jby10YWJsZSB7XHJcbiAgICBtYXJnaW46IDAgMTVweDtcclxuICB9XHJcblxyXG4gIC5ibG9jby10YWJsZSBoMiB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgfVxyXG5cclxuICBpbnB1dCB7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgaSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyNTBweDtcclxuICB9XHJcblxyXG4gIC50b3BvLXN1YiB7XHJcbiAgICBtYXJnaW46IDAgMTVweDtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbn1cclxuIiwiLmJsb2NvLXRhYmxlIHtcbiAgbWFyZ2luOiAyMHB4IDcwcHggMCA3MHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4yMzk5OTk5OTQ2KSwgMCAwIDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xMTk5OTk5OTczKTtcbiAgcGFkZGluZzogMTBweCAyNXB4IDM1cHggMjVweDtcbn1cblxuLmJsb2NvLXRhYmxlID4gaDIge1xuICBmb250LWZhbWlseTogXCJSb2JvdG8tTWVkaXVtXCI7XG4gIGNvbG9yOiAjM0MzQzNDO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubWF0LWVsZXZhdGlvbi16OCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxudGFibGUgdHIge1xuICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMjM5OTk5OTk0NiksIDAgMCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTE5OTk5OTk3Myk7XG59XG5cbnRhYmxlIHRoIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUwMDAwMDAwNyk7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIHdpZHRoOiAzMDZweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gIHJpZ2h0OiAwO1xuICBmb250LWZhbWlseTogXCJSb2JvdG8tUmVndWxhclwiO1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogMHB4O1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMjBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMEIyODYsICMwMDgxQTcpO1xuICBwYWRkaW5nOiA5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGNvbG9yOiAjRkZGO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZWFyY2gge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogXCJHaWxyb3ktRXh0cmFCb2xkXCI7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLnRvcG8tc3ViIGgyIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLVJlZ3VsYXJcIjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi50b3BvLXN1YiB7XG4gIG1hcmdpbjogMCA3MHB4IDQwcHggNzBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAuc2VhcmNoIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgaSB7XG4gICAgbGVmdDogLTQwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgaW5wdXQge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYmxvY28tdGFibGUge1xuICAgIG1hcmdpbjogMCAxNXB4O1xuICB9XG5cbiAgLmJsb2NvLXRhYmxlIGgyIHtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gIH1cblxuICBpbnB1dCB7XG4gICAgd2lkdGg6IDIyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICBpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMjUwcHg7XG4gIH1cblxuICAudG9wby1zdWIge1xuICAgIG1hcmdpbjogMCAxNXB4O1xuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfitTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profit-table',
          templateUrl: './profit-table.component.html',
          styleUrls: ['./profit-table.component.scss']
        }]
      }], function () {
        return [{
          type: _profit_table_service__WEBPACK_IMPORTED_MODULE_3__["ProfitTableService"]
        }];
      }, {
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/profit-table/profit-table.service.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/profit-table/profit-table.service.ts ***!
    \*****************************************************************/

  /*! exports provided: ProfitTableService */

  /***/
  function srcAppComponentsProfitTableProfitTableServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfitTableService", function () {
      return ProfitTableService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/api/api.service */
    "./src/app/api/api.service.ts");

    var ProfitTableService =
    /*#__PURE__*/
    function () {
      function ProfitTableService(apiService) {
        _classCallCheck(this, ProfitTableService);

        this.apiService = apiService;
      }

      _createClass(ProfitTableService, [{
        key: "dataProfits",
        value: function dataProfits() {
          return this.apiService.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["endpoints"].profits);
        }
      }]);

      return ProfitTableService;
    }();

    ProfitTableService.ɵfac = function ProfitTableService_Factory(t) {
      return new (t || ProfitTableService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]));
    };

    ProfitTableService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProfitTableService,
      factory: ProfitTableService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfitTableService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: src_app_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/profit-table/translate-table.ts":
  /*!************************************************************!*\
    !*** ./src/app/components/profit-table/translate-table.ts ***!
    \************************************************************/

  /*! exports provided: getDutchPaginatorIntl */

  /***/
  function srcAppComponentsProfitTableTranslateTableTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getDutchPaginatorIntl", function () {
      return getDutchPaginatorIntl;
    });
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");

    var dutchRangeLabel = function dutchRangeLabel(page, pageSize, length) {
      if (length === 0 || pageSize === 0) {
        return "0 de ".concat(length);
      }

      length = Math.max(length, 0);
      var startIndex = page * pageSize;
      var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
      return "".concat(startIndex + 1, " - ").concat(endIndex, " de ").concat(length);
    };

    function getDutchPaginatorIntl() {
      var paginatorIntl = new _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginatorIntl"]();
      paginatorIntl.itemsPerPageLabel = 'Itens por página:';
      paginatorIntl.nextPageLabel = 'Avançar';
      paginatorIntl.previousPageLabel = 'Voltar';
      paginatorIntl.getRangeLabel = dutchRangeLabel;
      return paginatorIntl;
    }
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment, endpoints */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "endpoints", function () {
      return endpoints;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    var endpoints = {
      profits: 'https://www.mocky.io/v2/5b2c010d300000100023487a'
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

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
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
    /*! c:\repositorios\bitcoin-yield-angular9\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map