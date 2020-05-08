function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div name=\"loading\" *ngIf=\"loading\" style=\"height: 100%;\">\r\n  <ion-img src=\"assets/icon/splash.png\" style=\"height: 80%;\"></ion-img>\r\n  <br>\r\n  <ion-img src=\"assets/icon/loading.png\" style=\"height: 50px;\"></ion-img>\r\n</div>\r\n<ion-content [hidden]=\"!login\">\r\n  <div class=\"login\">\r\n    <ion-card class=\"card\">\r\n      <ion-card-header>\r\n        <ion-card-title>Login</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <form class=\"form\" [formGroup]=\"validations_form\" (ngSubmit)=\"loginUser(validations_form.value)\">\r\n          <ion-item>\r\n\r\n            <ion-label position=\"floating\" color=\"primary\">NSBM Email Address</ion-label>\r\n            <ion-input class=\"textinput\" type=\"text\" clearInput formControlName=\"email\" ngModel\r\n              pattern=\"(\\W|^)[\\w.+\\-]*@(students.)?nsbm\\.lk(\\W|$)\">\r\n            </ion-input>\r\n          </ion-item>\r\n\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.email\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"validations_form.get('email').hasError(validation.type) && (validations_form.get('email').dirty || validations_form.get('email').touched)\">\r\n                {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n          <ion-item>\r\n\r\n            <ion-label position=\"floating\" color=\"primary\">Password</ion-label>\r\n            <ion-input class=\"textinput\" type=\"password\" clearInput formControlName=\"password\" class=\"form-controll\"\r\n              required>\r\n            </ion-input>\r\n          </ion-item>\r\n\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.password\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"validations_form.get('password').hasError(validation.type) && (validations_form.get('password').dirty || validations_form.get('password').touched)\">\r\n                {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n            <ion-button shape=\"round\" fill=\"outline\" color=\"success\" expand=\"full\" class=\"submit-btn\" type=\"submit\"\r\n              [disabled]=\"!validations_form.valid\" style=\"text-align: center;\">Log In</ion-button>\r\n\r\n            <label class=\"error-message\">{{errorMessage}}</label>\r\n          </div>\r\n        </form>\r\n        <p class=\"go-to-register\">\r\n          No account yet? <a style=\"color: rgb(4, 98, 153)\" (click)=\"goToRegisterPage()\">Create an account.</a>\r\n        </p>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n  <!-- Loading Spinner -->\r\n  <div style=\"position: absolute;\r\n              left: 50%;\r\n              transform: translateX(-50%);\">\r\n    <ion-spinner name=\"crescent\" color=\"primary\" style=\"height: 100px;\r\n                                                          width: 100px;\" *ngIf=\"loginLoadingSpinner\"></ion-spinner>\r\n  </div>\r\n  <div style=\"position: absolute; bottom: 0px; width: 100%;font-size: small;color:grey\">\r\n    <div style=\"text-align: center\"><i>THIS IS AN EDUCATIONAL PROJECT, CREDITS TO AUTHORS ARE ADDED WERE POSSIBLE,\r\n        DEVELOPED UNDER FAIR USE LICENSE FOR EDUCATIONAL\r\n        PURPOSES ONLY.</i>\r\n    </div>\r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/login/login-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/login/login-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/login/login.page.scss":
  /*!***************************************!*\
    !*** ./src/app/login/login.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".register {\n  padding: 1px;\n  height: 100%;\n  width: 100%;\n  background-image: url(/assets/images/backgrounds/login.png);\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.card {\n  text-align: center;\n  margin-top: 10%;\n  font-size: x-large;\n  opacity: 0.9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxyYW51bFxcRG9jdW1lbnRzXFxHaXRIdWJcXDJuZCBZZWFyXFwybmQgU2VtZXN0ZXJcXFVPUF9TRV9ZMlMyLVBVU0wyMDA4LUlOVFJPRFVDVElPTi1UTy1JTlRFUk5FVC1PRi1USElOR1NcXFdvcmtzcGFjZVxcaVNBTS9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLDJEQUEyRDtFQUMzRCw0QkFBNEI7RUFDNUIsc0JBQXFCLEVBQUE7O0FBR3pCO0VBQ0ssa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVyIHtcclxuICAgIHBhZGRpbmc6IDFweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL2xvZ2luLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gICAgIFxyXG59XHJcbi5jYXJkIHtcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/login/login.page.ts":
  /*!*************************************!*\
    !*** ./src/app/login/login.page.ts ***!
    \*************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/firebase.service */
    "./src/app/services/firebase.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(router, navCtrl, authService, loadingController, formBuilder, alertController) {
        _classCallCheck(this, LoginPage);

        this.router = router;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.loadingController = loadingController;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.errorMessage = '';
        this.login = false;
        this.loginLoadingSpinner = false;
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

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.loading = true;
          setTimeout(function () {
            _this.loading = false;
            _this.login = true;
          }, 3000);
          firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().onAuthStateChanged(function (user) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var loggedUserDetails, loggedInUserDetails;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (user) {
                        // User is signed in.
                        // Setting loading spinner to spin
                        this.loginLoadingSpinner = true; // console.log('User is signed in');

                        /*MOBILE APP */
                        // const loading = await this.loadingController.create({message: 'Please wait...', duration: 2000});
                        // await loading.present();
                        // const {role, data} = await loading.onDidDismiss();
                        // console.log('Loading dismissed!');

                        this.userEmail = this.authService.userDetails().email;
                        /*-- Lecturer User Registration Process Phase --*/
                        // console.log('Current router url: ', this.router.url);
                        // After new lecturer account is created, that user will be automatically logged in usder the program office user interface
                        // If the router url is the program office user interface and if the user type is 'lecturerUser', the currently logged in user will be logged out

                        if (this.router.url == '/office/lecturers') {
                          loggedUserDetails = this.authService.userDetails(); // Checking if logged in user type in a lecturer user

                          this.authService.retrieveLoggedInUserDetailsLecturer(loggedUserDetails.uid).subscribe(function (response) {
                            if (response.length > 0) {
                              // Logging out the current logged in user as the user type is 'lecturerUser' and it is in the program office user interface router url
                              _this2.authService.logoutUser(); // Redirecting user to the login screen


                              _this2.router.navigate(['/login']); // console.log("Lecturer Registration: Record found in lecturer users collection, Logged out");

                            } else {// console.log("Record not found in lecturer users collection");
                              }
                          }, function (error) {
                            // console.log("Error: " + error);
                            _this2.alertNotice("Error", "An error has occurred: " + error);
                          });
                        }
                        /*-- Lecturer User Registration Process Phase --*/


                        loggedInUserDetails = this.authService.userDetails();
                        /* Redirecting the user to their relevant user interface according to the user type */
                        // Checking if logged in user type in a student user

                        this.authService.retrieveLoggedInUserDetailsStudent(loggedInUserDetails.uid).subscribe(function (response) {
                          if (response.length > 0) {
                            /* Process of checking account status is ACTIVE or not */
                            var resgisteredStudentUser = response;
                            var studentUserAccountStatus; // Retrieving the account status of this student user account

                            resgisteredStudentUser.forEach(function (document) {
                              var firestoreDoc = document.payload.doc.data();
                              studentUserAccountStatus = firestoreDoc.accountStatus;
                            }); // Checking if the student user account is active

                            if (studentUserAccountStatus == "Active") {
                              _this2.router.navigate(['student']); // console.log("Logged In User Type: Student User");
                              // console.log("Record found in student users collection");
                              // console.log("Student User Account is ACTIVE");

                            } else {
                              _this2.alertNotice("Account Deactivated", "Account has been deactivated. Please contact your specialized faculty program office.");

                              _this2.authService.logoutUser();

                              _this2.router.navigate(["/login"]); // console.log("Student User Account is not ACTIVE");

                            } // Setting loading spinner to stop spinning


                            _this2.loginLoadingSpinner = false;
                          } else {// console.log("Record not found in student users collection");
                          }
                        }, function (error) {
                          // Setting loading spinner to stop spinning
                          _this2.loginLoadingSpinner = false; // console.log("Error: " + error);

                          _this2.alertNotice("Error", "An error has occurred: " + error);
                        }); // Checking if logged in user type in a lecturer user

                        this.authService.retrieveLoggedInUserDetailsLecturer(loggedInUserDetails.uid).subscribe(function (response) {
                          if (response.length > 0) {
                            /* Process of checking account status is ACTIVE or not */
                            var resgisteredLecturerUser = response;
                            var lecturerUserAccountStatus; // Retrieving the account status of this lecturer user account

                            resgisteredLecturerUser.forEach(function (document) {
                              var firestoreDoc = document.payload.doc.data();
                              lecturerUserAccountStatus = firestoreDoc.accountStatus;
                            }); // Checking if the lecturer user account is active

                            if (lecturerUserAccountStatus == "Active") {
                              _this2.router.navigate(['lecturer']); // console.log("Logged In User Type: Lecturer User");
                              // console.log("Record found in lecturer users collection");
                              // console.log("Lecturer User Account is ACTIVE");

                            } else {
                              _this2.alertNotice("Account Deactivated", "Account has been deactivated. Please contact your specialized faculty program office.");

                              _this2.authService.logoutUser();

                              _this2.router.navigate(["/login"]); // console.log("Lecturer User Account is not ACTIVE");

                            } // Setting loading spinner to stop spinning


                            _this2.loginLoadingSpinner = false;
                          } else {// console.log("Record not found in lecturer users collection");
                          }
                        }, function (error) {
                          // Setting loading spinner to stop spinning
                          _this2.loginLoadingSpinner = false; // console.log("Error: " + error);

                          _this2.alertNotice("Error", "An error has occurred: " + error);
                        }); // Checking if logged in user type in a program office user

                        this.authService.retrieveLoggedInUserDetailsProgramOffice(loggedInUserDetails.uid).subscribe(function (response) {
                          if (response.length > 0) {
                            /* Process of checking account status is ACTIVE or not */
                            var resgisteredProgramOfficeUser = response;
                            var programOfficeUserAccountStatus; // Retrieving the account status of this program office user account

                            resgisteredProgramOfficeUser.forEach(function (document) {
                              var firestoreDoc = document.payload.doc.data();
                              programOfficeUserAccountStatus = firestoreDoc.accountStatus;
                            }); // Checking if the program office user account is active

                            if (programOfficeUserAccountStatus == "Active") {
                              _this2.router.navigate(['/office/dashboard']); // console.log("Logged In User Type: Program Office User");
                              // console.log("Record found in program office users collection");
                              // console.log("Program Office User Account is ACTIVE");

                            } else {
                              _this2.alertNotice("Account Deactivated", "Account has been deactivated. Please contact Web Administrator.");

                              _this2.authService.logoutUser();

                              _this2.router.navigate(["/login"]); // console.log("Program Office User Account is not ACTIVE");

                            } // Setting loading spinner to stop spinning


                            _this2.loginLoadingSpinner = false;
                          } else {// console.log("Record not found in program office users collection");
                          }
                        }, function (error) {
                          // Setting loading spinner to stop spinning
                          _this2.loginLoadingSpinner = false; // console.log("Error: " + error);

                          _this2.alertNotice("Error", "An error has occurred: " + error);
                        });
                      } else {
                        // No user is signed in.
                        // Setting loading spinner to stop spinning
                        this.loginLoadingSpinner = false; // console.log('User is NOT signed in');
                      }

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }, function (error) {// console.log("Error: " + error);
          });
          this.validations_form = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]))
          });
        } // Alert Box Implementation

      }, {
        key: "alertNotice",
        value: function alertNotice(title, content) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: title,
                      message: content,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "loginUser",
        value: function loginUser(value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    // Setting loading spinner to spin
                    this.loginLoadingSpinner = true;
                    /*MOBILE APP */
                    // const loading = await this.loadingController.create({message: 'Logging in...', duration: 2000});
                    // await loading.present();
                    // const {role, data} = await loading.onDidDismiss();
                    // console.log('Loading dismissed!');

                    this.authService.loginUser(value).then(function (res) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                        var _this4 = this;

                        var loggedInUserDetails;
                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                // console.log(res);
                                this.errorMessage = "";
                                this.userEmail = this.authService.userDetails().email; // this.router.navigate(['/office/dashboard']);
                                // this.router.navigate(['/student/eSign']);
                                // this.navCtrl.navigateForward("lecturerHome");
                                // this.navCtrl.navigateForward("dashboard");

                                loggedInUserDetails = this.authService.userDetails();
                                /* Redirecting the user to their relevant user interface according to the user type */
                                // Checking if logged in user type in a student user

                                this.authService.retrieveLoggedInUserDetailsStudent(loggedInUserDetails.uid).subscribe(function (response) {
                                  if (response.length > 0) {
                                    /* Process of checking account status is ACTIVE or not */
                                    var resgisteredStudentUser = response;
                                    var studentUserAccountStatus; // Retrieving the account status of this student user account

                                    resgisteredStudentUser.forEach(function (document) {
                                      var firestoreDoc = document.payload.doc.data();
                                      studentUserAccountStatus = firestoreDoc.accountStatus;
                                    }); // Checking if the student user account is active

                                    if (studentUserAccountStatus == "Active") {
                                      _this4.router.navigate(['student']); // console.log("Logged In User Type: Student User");
                                      // console.log("Record found in student users collection");
                                      // console.log("Student User Account is ACTIVE");

                                    } else {
                                      _this4.alertNotice("Account Deactivated", "Account has been deactivated. Please contact your specialized faculty program office."); // console.log("Student User Account is not ACTIVE");

                                    } // Setting loading spinner to stop spinning


                                    _this4.loginLoadingSpinner = false;
                                  } else {// console.log("Record not found in student users collection");
                                  }
                                }, function (error) {
                                  // console.log("Error: " + error);
                                  _this4.alertNotice("Error", "An error has occurred: " + error);
                                }); // Checking if logged in user type in a lecturer user

                                this.authService.retrieveLoggedInUserDetailsLecturer(loggedInUserDetails.uid).subscribe(function (response) {
                                  if (response.length > 0) {
                                    /* Process of checking account status is ACTIVE or not */
                                    var resgisteredLecturerUser = response;
                                    var lecturerUserAccountStatus; // Retrieving the account status of this lecturer user account

                                    resgisteredLecturerUser.forEach(function (document) {
                                      var firestoreDoc = document.payload.doc.data();
                                      lecturerUserAccountStatus = firestoreDoc.accountStatus;
                                    }); // Checking if the lecturer user account is active

                                    if (lecturerUserAccountStatus == "Active") {
                                      _this4.router.navigate(['lecturer']); // console.log("Logged In User Type: Lecturer User");
                                      // console.log("Record found in lecturer users collection");
                                      // console.log("Lecturer User Account is ACTIVE");

                                    } else {
                                      _this4.alertNotice("Account Deactivated", "Account has been deactivated. Please contact your specialized faculty program office."); // console.log("Lecturer User Account is not ACTIVE");

                                    } // Setting loading spinner to stop spinning


                                    _this4.loginLoadingSpinner = false;
                                  } else {// console.log("Record not found in lecturer users collection");
                                  }
                                }, function (error) {
                                  // console.log("Error: " + error);
                                  _this4.alertNotice("Error", "An error has occurred: " + error);
                                }); // Checking if logged in user type in a program office user

                                this.authService.retrieveLoggedInUserDetailsProgramOffice(loggedInUserDetails.uid).subscribe(function (response) {
                                  if (response.length > 0) {
                                    /* Process of checking account status is ACTIVE or not */
                                    var resgisteredProgramOfficeUser = response;
                                    var programOfficeUserAccountStatus; // Retrieving the account status of this program office user account

                                    resgisteredProgramOfficeUser.forEach(function (document) {
                                      var firestoreDoc = document.payload.doc.data();
                                      programOfficeUserAccountStatus = firestoreDoc.accountStatus;
                                    }); // Checking if the program office user account is active

                                    if (programOfficeUserAccountStatus == "Active") {
                                      _this4.router.navigate(['/office/dashboard']); // console.log("Logged In User Type: Program Office User");
                                      // console.log("Record found in program office users collection");
                                      // console.log("Program Office User Account is ACTIVE");

                                    } else {
                                      _this4.alertNotice("Account Deactivated", "Account has been deactivated. Please contact Web Administrator."); // console.log("Program Office User Account is not ACTIVE");

                                    } // Setting loading spinner to stop spinning


                                    _this4.loginLoadingSpinner = false;
                                  } else {// console.log("Record not found in program office users collection");
                                  }
                                }, function (error) {
                                  // console.log("Error: " + error);
                                  _this4.alertNotice("Error", "An error has occurred: " + error); // Setting loading spinner to stop spinning


                                  _this4.loginLoadingSpinner = false;
                                });

                              case 6:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    }, function (err) {
                      // Setting loading spinner to stop spinning
                      _this3.loginLoadingSpinner = false;
                      _this3.errorMessage = err.message;
                    });

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "goToRegisterPage",
        value: function goToRegisterPage() {
          this.navCtrl.navigateForward("signup");
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }];
    };

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/login/login.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map