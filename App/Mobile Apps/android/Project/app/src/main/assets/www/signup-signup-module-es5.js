function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignupSignupPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <div class=\"register\">\r\n    <ion-card-content overflow-scroll=\"true\">\r\n      <ion-card class=\"card\">\r\n        <ion-card-header>\r\n          <ion-card-title>Signup</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <form class=\"form\" [formGroup]=\"validations_form\" (ngSubmit)=\"tryRegister(validations_form.value)\"\r\n            overflow-scroll=\"true\">\r\n            <ion-item>\r\n              <ion-label position=\"floating\" color=\"primary\">Prefix</ion-label>\r\n              <ion-select interface=\"action-sheet\" formControlName=\"prefixName\" value=\"\">\r\n                <ion-select-option value=\"Mr.\">Mr.</ion-select-option>\r\n                <ion-select-option value=\"Sir.\">Sir.</ion-select-option>\r\n                <ion-select-option value=\"Dr.\">Dr.</ion-select-option>\r\n                <ion-select-option value=\"Mrs.\">Mrs.</ion-select-option>\r\n                <ion-select-option value=\"Miss.\">Miss</ion-select-option>\r\n                <ion-select-option value=\"Ms.\">Ms</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\" color=\"primary\">First Name</ion-label>\r\n              <ion-input type=\"text\" formControlName=\"fName\">\r\n              </ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\" color=\"primary\">Middle Name</ion-label>\r\n              <ion-input type=\"text\" formControlName=\"mName\">\r\n              </ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\" color=\"primary\">Last Name</ion-label>\r\n              <ion-input type=\"text\" formControlName=\"lName\">\r\n              </ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\" color=\"primary\">Faculty</ion-label>\r\n              <ion-select interface=\"action-sheet\" formControlName=\"faculty\" value=\"\">\r\n                <ion-select-option value=\"School of Business\">School of Business</ion-select-option>\r\n                <ion-select-option value=\"School of Computing\">School of Computing</ion-select-option>\r\n                <ion-select-option value=\"School of Engineering\">School of Engineering</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\" color=\"primary\">Awarding Body</ion-label>\r\n              <ion-select interface=\"action-sheet\" formControlName=\"awardingBodyUniversity\" value=\"\">\r\n                <ion-select-option value=\"University of Plymouth\">University of Plymouth\r\n                </ion-select-option>\r\n                <ion-select-option value=\"NSBM Green University\">NSBM Green University</ion-select-option>\r\n                <ion-select-option value=\"University College Dublin\">University College Dublin</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\" color=\"primary\">Degree</ion-label>\r\n              <ion-select interface=\"action-sheet\" formControlName=\"degree\" value=\"\">\r\n                <ion-select-option value=\"BSc(Hons) Software Engineering\">BSc(Hons) Software Engineering\r\n                </ion-select-option>\r\n                <ion-select-option value=\"BSc(Hons) Computer Security\">BSc(Hons) Computer Security</ion-select-option>\r\n                <ion-select-option value=\"BSc(Hons) Management Information Systems \">BSc(Hons) Management Information Systems \r\n                </ion-select-option>\r\n                <ion-select-option value=\"BSc Software Engineering\">BSc Software Engineering</ion-select-option>\r\n                <ion-select-option value=\"BSc(Hons) Computer Systems Engineering\">BSc(Hons) Computer Systems Engineering\r\n                </ion-select-option>\r\n                <ion-select-option value=\"BSc International Business\">BSc Mechatronic Engineering</ion-select-option>\r\n                <ion-select-option value=\"BSc International Business\">BSc International Business</ion-select-option>\r\n                <ion-select-option value=\"BSc(Hons) Accounting and Finance\">BSc(Hons) Accounting and Finance\r\n                </ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\" color=\"primary\">Degree Code</ion-label>\r\n              <ion-select interface=\"action-sheet\" formControlName=\"DegreeCode\" value=\"\">\r\n                <ion-select-option value=\"SE\">Software Engineering Plymouth\r\n                </ion-select-option>\r\n                <ion-select-option value=\"CS\">Computer Security Plymouth</ion-select-option>\r\n                <ion-select-option value=\"MIS\">Management Information Systems UCD\r\n                </ion-select-option>\r\n                <ion-select-option value=\"SE-NSBM\">Software Engineering NSBM</ion-select-option>\r\n                <ion-select-option value=\"CE-NSBM\">Computer Systems Engineering NSBM\r\n                </ion-select-option>\r\n                <ion-select-option value=\"ME-NSBM\">Mechanical Engineering NSBM</ion-select-option>\r\n                <ion-select-option value=\"IB-NSBM\">International Business NSBM</ion-select-option>\r\n                <ion-select-option value=\"AF\">Accounting and Finance Plymouth\r\n                </ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\" color=\"primary\">Batch</ion-label>\r\n              <ion-input type=\"number\" formControlName=\"batch\">\r\n              </ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\" color=\"primary\">NSBM Student ID</ion-label>\r\n              <ion-input type=\"number\" formControlName=\"sid\">\r\n              </ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\" color=\"primary\">Email</ion-label>\r\n              <ion-input type=\"text\" formControlName=\"email\" ngModel\r\n                pattern=\"(\\W|^)[\\w.+\\-]*@(students.nsbm)\\.lk(\\W|$)\">\r\n              </ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n              <ng-container *ngFor=\"let validation of validation_messages.email\">\r\n                <div class=\"error-message\"\r\n                  *ngIf=\"validations_form.get('email').hasError(validation.type) && (validations_form.get('email').dirty || validations_form.get('email').touched)\">\r\n                  {{ validation.message }}\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n            <ion-item>\r\n              <ion-label position=\"floating\" color=\"primary\">Password</ion-label>\r\n              <ion-input type=\"password\" formControlName=\"password\" required>\r\n              </ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n              <ng-container *ngFor=\"let validation of validation_messages.password\">\r\n                <div class=\"error-message\"\r\n                  *ngIf=\"validations_form.get('password').hasError(validation.type) && (validations_form.get('password').dirty || validations_form.get('password').touched)\">\r\n                  {{ validation.message }}\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n            <ion-button class=\"submit-btn\" type=\"submit\" [disabled]=\"!validations_form.valid\">Register\r\n            </ion-button>\r\n            <label class=\"error-message\">{{errorMessage}}</label>\r\n            <label class=\"success-message\">{{successMessage}}</label>\r\n\r\n          </form>\r\n          <p class=\"go-to-login\">Already have an account? <a style=\"color: rgb(4, 98, 153)\" (click)=\"goLoginPage()\">Try to Log In.</a></p>\r\n\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-card-content>\r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/signup/signup-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/signup/signup-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: SignupPageRoutingModule */

  /***/
  function srcAppSignupSignupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function () {
      return SignupPageRoutingModule;
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


    var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup.page */
    "./src/app/signup/signup.page.ts");

    var routes = [{
      path: '',
      component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }];

    var SignupPageRoutingModule = function SignupPageRoutingModule() {
      _classCallCheck(this, SignupPageRoutingModule);
    };

    SignupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignupPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/signup/signup.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/signup/signup.module.ts ***!
    \*****************************************/

  /*! exports provided: SignupPageModule */

  /***/
  function srcAppSignupSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageModule", function () {
      return SignupPageModule;
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


    var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signup-routing.module */
    "./src/app/signup/signup-routing.module.ts");
    /* harmony import */


    var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signup.page */
    "./src/app/signup/signup.page.ts");

    var SignupPageModule = function SignupPageModule() {
      _classCallCheck(this, SignupPageModule);
    };

    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })], SignupPageModule);
    /***/
  },

  /***/
  "./src/app/signup/signup.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/signup/signup.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignupSignupPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/signup/signup.page.ts":
  /*!***************************************!*\
    !*** ./src/app/signup/signup.page.ts ***!
    \***************************************/

  /*! exports provided: SignupPage */

  /***/
  function srcAppSignupSignupPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
      return SignupPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/firebase.service */
    "./src/app/services/firebase.service.ts");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);

    var SignupPage = /*#__PURE__*/function () {
      function SignupPage(navCtrl, authService, formBuilder) {
        _classCallCheck(this, SignupPage);

        this.navCtrl = navCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.errorMessage = '';
        this.successMessage = '';
        this.validation_messages = {
          email: [{
            type: "required",
            message: "Your NSBM University Email is required."
          }, {
            type: "pattern",
            message: "Please enter a valid email."
          }],
          password: [{
            type: "required",
            message: "Password is required."
          }, {
            type: "minlength",
            message: "Password must be at least 5 characters long."
          }]
        };
      }

      _createClass(SignupPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.validations_form = this.formBuilder.group({
            prefixName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('')])),
            fName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z]+$')])),
            mName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z]+$')])),
            lName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z]+$')])),
            DegreeCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('')])),
            degree: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('')])),
            faculty: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('')])),
            awardingBodyUniversity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('')])),
            batch: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^([0-9]{2}\.[0-9]{1,1})$')])),
            sid: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]{8}$')])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
          });
        }
      }, {
        key: "tryRegister",
        value: function tryRegister(value) {
          var _this = this;

          this.authService.registerUser(value).then(function (res) {
            console.log(res);
            _this.errorMessage = "";
            _this.successMessage = "Your account has been created. Please log in.";
          }, function (err) {
            console.log(err);
            _this.errorMessage = err.message;
            _this.successMessage = "";
          });
        }
      }, {
        key: "goLoginPage",
        value: function goLoginPage() {
          this.navCtrl.navigateForward("login");
        }
      }]);

      return SignupPage;
    }();

    SignupPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.page.scss */
      "./src/app/signup/signup.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])], SignupPage);
    /***/
  }
}]);
//# sourceMappingURL=signup-signup-module-es5.js.map