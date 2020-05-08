function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["student-ec-form-ec-form-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student/ec-form/ec-form.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/ec-form/ec-form.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentEcFormEcFormPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\r\n  \r\n\r\n  <div class=\"ion-page\" id=\"main-content\">\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Extenuating Circumstances Form</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content class=\"ion-padding\">\r\n      <ion-card class=\"card\">\r\n        <ion-card-title>\r\n          <ion-card-header>EC-Form</ion-card-header>\r\n        </ion-card-title>\r\n        <ion-card-content>\r\n          <ion-grid fixed>\r\n            <ion-row>\r\n              <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\" color=\"primary\">Name</ion-label>\r\n              <ion-input type=\"text\" placeholder=\"Enter Your Name\" [(ngModel)]=\"Name\">\r\n              </ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\" color=\"primary\">Faculty</ion-label>\r\n              <ion-select interface=\"action-sheet\" [(ngModel)]=\"Faculty\" value=\"\">\r\n                <ion-select-option value=\"SOB\">School of Business</ion-select-option>\r\n                <ion-select-option value=\"SOC\">School of Computing</ion-select-option>\r\n                <ion-select-option value=\"SOE\">School of Engineering</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\" color=\"primary\">Lecturer Email</ion-label>\r\n              <ion-input type=\"text\" placeholder=\"Enter Lecturer Email\" [(ngModel)]=\"LecturerEmail\" ngModel pattern=\"(\\W|^)[\\w.+\\-]*@(students.nsbm)\\.lk(\\W|$)\">\r\n              </ion-input>\r\n            </ion-item>\r\n                <p><i>Warning: If the entered email address is incorrect your EC-Forms will not be processed !</i></p>\r\n        <ion-item>\r\n          <ion-label position=\"floating\" color=\"primary\">Message</ion-label>\r\n          <ion-textarea type=\"text\" placeholder=\"Enter Your Message\" [(ngModel)]=\"Message\">\r\n          </ion-textarea>\r\n        </ion-item>\r\n            <ion-button (click)=\"sendEC()\" color=\"success\" [disabled]=\"!Name || !Faculty || !Message\">Send Form</ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-content>\r\n  </div>\r\n</ion-app>";
    /***/
  },

  /***/
  "./src/app/student/ec-form/ec-form-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/student/ec-form/ec-form-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: EcFormPageRoutingModule */

  /***/
  function srcAppStudentEcFormEcFormRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EcFormPageRoutingModule", function () {
      return EcFormPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ec_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ec-form.page */
    "./src/app/student/ec-form/ec-form.page.ts");

    var routes = [{
      path: '',
      component: _ec_form_page__WEBPACK_IMPORTED_MODULE_3__["EcFormPage"]
    }];

    var EcFormPageRoutingModule = function EcFormPageRoutingModule() {
      _classCallCheck(this, EcFormPageRoutingModule);
    };

    EcFormPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EcFormPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/student/ec-form/ec-form.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/student/ec-form/ec-form.module.ts ***!
    \***************************************************/

  /*! exports provided: EcFormPageModule */

  /***/
  function srcAppStudentEcFormEcFormModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EcFormPageModule", function () {
      return EcFormPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ec_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ec-form-routing.module */
    "./src/app/student/ec-form/ec-form-routing.module.ts");
    /* harmony import */


    var _ec_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ec-form.page */
    "./src/app/student/ec-form/ec-form.page.ts");

    var EcFormPageModule = function EcFormPageModule() {
      _classCallCheck(this, EcFormPageModule);
    };

    EcFormPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ec_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["EcFormPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_ec_form_page__WEBPACK_IMPORTED_MODULE_6__["EcFormPage"]]
    })], EcFormPageModule);
    /***/
  },

  /***/
  "./src/app/student/ec-form/ec-form.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/student/ec-form/ec-form.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudentEcFormEcFormPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvZWMtZm9ybS9lYy1mb3JtLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/student/ec-form/ec-form.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/student/ec-form/ec-form.page.ts ***!
    \*************************************************/

  /*! exports provided: EcFormPage */

  /***/
  function srcAppStudentEcFormEcFormPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EcFormPage", function () {
      return EcFormPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/firebase.service */
    "./src/app/services/firebase.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);

    var EcFormPage = /*#__PURE__*/function () {
      function EcFormPage(loadingController, alertController, toastController, navCtrl, router, authService) {
        _classCallCheck(this, EcFormPage);

        this.loadingController = loadingController;
        this.alertController = alertController;
        this.toastController = toastController;
        this.navCtrl = navCtrl;
        this.router = router;
        this.authService = authService;
      }

      _createClass(EcFormPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "sendEC",
        value: function sendEC() {
          var _this = this;

          var record = {};
          record['Name'] = this.Name;
          record['Faculty'] = this.Faculty;
          record['LecturerEmail'] = this.LecturerEmail;
          record['Message'] = this.Message;
          record['Email'] = this.authService.userDetails().email;
          this.authService.sendEC(record, this.Faculty, this.LecturerEmail).then(function (resp) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: 'Your form has been sent',
                        duration: 2000
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          })["catch"](function (error) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toastController.create({
                        message: 'Error in Network, check back later.',
                        duration: 2000
                      });

                    case 2:
                      toast = _context2.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          });
        }
      }, {
        key: "goSettings",
        value: function goSettings() {
          this.router.navigate(['Student/Settings']); // console.log('settings');
        }
      }, {
        key: "goeSign",
        value: function goeSign() {
          this.router.navigate(['Student/eSign']); // console.log('Home');
        }
      }, {
        key: "goECForm",
        value: function goECForm() {
          this.router.navigate(['Student/EC-Form']); // console.log('EC-Form');
        }
      }, {
        key: "goAttendence",
        value: function goAttendence() {
          this.router.navigate(['Student/Attendence']); // console.log('Attendence');
        }
      }, {
        key: "goNotices",
        value: function goNotices() {
          this.router.navigate(['Student/Notices']); // console.log('settings');
        }
      }]);

      return EcFormPage;
    }();

    EcFormPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]
      }];
    };

    EcFormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-ec-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ec-form.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student/ec-form/ec-form.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ec-form.page.scss */
      "./src/app/student/ec-form/ec-form.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]])], EcFormPage);
    /***/
  }
}]);
//# sourceMappingURL=student-ec-form-ec-form-module-es5.js.map