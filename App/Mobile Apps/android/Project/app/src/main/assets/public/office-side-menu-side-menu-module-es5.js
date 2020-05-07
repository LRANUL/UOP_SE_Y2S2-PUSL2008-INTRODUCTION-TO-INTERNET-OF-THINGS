function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["office-side-menu-side-menu-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/office/side-menu/side-menu.page.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/side-menu/side-menu.page.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOfficeSideMenuSideMenuPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-split-pane contentId=\"content\"> <!-- Opens the side menu in large screens -->\r\n\r\n  <ion-menu contentId=\"content\" type=\"overlay\" style=\"width: 10%;\"> <!-- (ion-menu section displays the menu part) -->\r\n\r\n    <ion-header style=\"background-color: rgb(229, 244, 252);\">\r\n      <ion-card style=\"background-color: white;\r\n                      height: 150px;\">\r\n        <ion-card-header>\r\n          <ion-label>\r\n            <h4 style=\"text-align: center;\r\n                      margin-top: -0px;\r\n                      color: black;\">\r\n              <b>{{ userFacultyFirestore }}</b>\r\n            </h4>\r\n          </ion-label>\r\n          <ion-img src=\"assets/images/NSBM_iSAM_Logo.png\" style=\"width: 70px;\r\n                                                                          position: relative;\r\n                                                                          left: 50%;\r\n                                                                          top: 0px;\r\n                                                                          transform: translateX(-50%);\"></ion-img>\r\n          <ion-label>\r\n            <h3 style=\"text-align: center; \r\n                      color: black;\r\n                      margin-top: 5px;\"><b>iSAM <br> Management System </b></h3>\r\n          </ion-label>\r\n        </ion-card-header>\r\n      </ion-card>\r\n    </ion-header>\r\n\r\n    \r\n    <ion-content>\r\n\r\n      <ion-list>\r\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of pagesTop\"> <!-- This 'pagesTop' references to pagesTop array in side-menu.page.ts file -->\r\n          <ion-item [routerLink]=\"p.url\" routerDirection=\"root\" [class.active-item-top]=\"selectedPath.startsWith(p.url)\">\r\n            <ion-label>\r\n              <ion-img src=\"{{ p.icon }}\" style=\"width: 26px;\r\n                                                height: 30px;\r\n                                                margin-top: -2px;\"></ion-img>\r\n\r\n              <!-- Ionic icon implmentation\r\n              <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon> \r\n              -->\r\n            </ion-label>\r\n            <ion-label style=\"position: absolute;\r\n                              top: 1px;\r\n                              left: 40px;\"> {{ p.title }} \r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n      </ion-list>\r\n\r\n    <ion-list style=\"position: absolute;\r\n                    top: 78%;\">\r\n      <ion-menu-toggle auto-hide=\"false\"> \r\n        <ion-item [routerLink]=\"'/office/profile'\" routerDirection=\"root\" [class.active-item-bottom]=\"selectedPath.startsWith('/office/profile')\">\r\n          <ion-label>\r\n            <ion-img src=\"assets/images/office/main-screen/profile.png\" style=\"width: 26px;\r\n                                                                                            margin-top: -2px;\"></ion-img>\r\n          </ion-label>\r\n          <ion-label style=\"position: absolute;\r\n                            top: 1px;\r\n                            left: 40px;\"> \r\n            Profile\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item [routerLink]=\"'/office/settings'\" routerDirection=\"root\" [class.active-item-bottom]=\"selectedPath.startsWith('/office/settings')\">\r\n          <ion-label>\r\n            <ion-icon name=\"settings-outline\" style=\"width: 26px;\r\n                                                    margin-top: 0px;\r\n                                                    font-size: 25px;\"></ion-icon>\r\n          </ion-label>\r\n          <ion-label style=\"position: absolute;\r\n                            top: 1px;\r\n                            left: 40px;\"> \r\n            Settings\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <button ion-button style=\"width: 300px;\r\n                                    height: 50px;\r\n                                    background-color: white;\" (click)=\"logout()\">\r\n            <ion-label>\r\n              <ion-icon name=\"log-out-outline\" style=\"width: 26px;\r\n                                                      font-size: 30px;\r\n                                                      margin-top: -18px;\r\n                                                      position: absolute;\r\n                                                      left: 5px;\"></ion-icon>\r\n            </ion-label>\r\n            <ion-label style=\"position: absolute;\r\n                              top: 15px;\r\n                              left: 40px;\r\n                              font-size: 16px;\r\n                              color: #B90000;\"> \r\n              Logout\r\n            </ion-label>\r\n          </button>\r\n        </ion-item>\r\n      </ion-menu-toggle>\r\n    </ion-list>\r\n    \r\n    </ion-content>\r\n  </ion-menu>\r\n\r\n  <ion-router-outlet id=\"content\" main></ion-router-outlet> <!-- (ion-router) section displays the content relavant for the page -->\r\n  <!-- this will be loaded from the loadChrildren link provided in the app-routing.module.ts file -->\r\n\r\n</ion-split-pane>";
    /***/
  },

  /***/
  "./src/app/office/side-menu/side-menu-routing.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/office/side-menu/side-menu-routing.module.ts ***!
    \**************************************************************/

  /*! exports provided: SideMenuPageRoutingModule */

  /***/
  function srcAppOfficeSideMenuSideMenuRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideMenuPageRoutingModule", function () {
      return SideMenuPageRoutingModule;
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


    var _side_menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./side-menu.page */
    "./src/app/office/side-menu/side-menu.page.ts");

    var routes = [{
      path: '',
      component: _side_menu_page__WEBPACK_IMPORTED_MODULE_3__["SideMenuPage"],
      children: [{
        path: 'dashboard',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | dashboard-dashboard-module */
          [__webpack_require__.e("default~dashboard-dashboard-module~student-attendance-attendance-module"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null,
          /*! ../dashboard/dashboard.module */
          "./src/app/office/dashboard/dashboard.module.ts")).then(function (m) {
            return m.DashboardPageModule;
          });
        }
      }, {
        path: 'notices',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | notices-notices-module */
          "notices-notices-module").then(__webpack_require__.bind(null,
          /*! ../notices/notices.module */
          "./src/app/office/notices/notices.module.ts")).then(function (m) {
            return m.NoticesPageModule;
          });
        }
      }, {
        path: 'student-attendance',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | student-attendance-student-attendance-module */
          "student-attendance-student-attendance-module").then(__webpack_require__.bind(null,
          /*! ../student-attendance/student-attendance.module */
          "./src/app/office/student-attendance/student-attendance.module.ts")).then(function (m) {
            return m.StudentAttendancePageModule;
          });
        }
      }, {
        path: 'lectures',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | lectures-lectures-module */
          "lectures-lectures-module").then(__webpack_require__.bind(null,
          /*! ../lectures/lectures.module */
          "./src/app/office/lectures/lectures.module.ts")).then(function (m) {
            return m.LecturesPageModule;
          });
        }
      }, {
        path: 'semester-calendar',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | semester-calendar-semester-calendar-module */
          "semester-calendar-semester-calendar-module").then(__webpack_require__.bind(null,
          /*! ../semester-calendar/semester-calendar.module */
          "./src/app/office/semester-calendar/semester-calendar.module.ts")).then(function (m) {
            return m.SemesterCalendarPageModule;
          });
        }
      }, {
        path: 'modules',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-modules-module */
          "modules-modules-module").then(__webpack_require__.bind(null,
          /*! ../modules/modules.module */
          "./src/app/office/modules/modules.module.ts")).then(function (m) {
            return m.ModulesPageModule;
          });
        }
      }, {
        path: 'students',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | students-students-module */
          "students-students-module").then(__webpack_require__.bind(null,
          /*! ../students/students.module */
          "./src/app/office/students/students.module.ts")).then(function (m) {
            return m.StudentsPageModule;
          });
        }
      }, {
        path: 'lecturers',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | lecturers-lecturers-module */
          "lecturers-lecturers-module").then(__webpack_require__.bind(null,
          /*! ../lecturers/lecturers.module */
          "./src/app/office/lecturers/lecturers.module.ts")).then(function (m) {
            return m.LecturersPageModule;
          });
        }
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | profile-profile-module */
          "profile-profile-module").then(__webpack_require__.bind(null,
          /*! ../profile/profile.module */
          "./src/app/office/profile/profile.module.ts")).then(function (m) {
            return m.ProfilePageModule;
          });
        }
      }, {
        path: 'settings',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | settings-settings-module */
          "settings-settings-module").then(__webpack_require__.bind(null,
          /*! ../settings/settings.module */
          "./src/app/office/settings/settings.module.ts")).then(function (m) {
            return m.SettingsPageModule;
          });
        }
      }]
    }];

    var SideMenuPageRoutingModule = function SideMenuPageRoutingModule() {
      _classCallCheck(this, SideMenuPageRoutingModule);
    };

    SideMenuPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SideMenuPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/office/side-menu/side-menu.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/office/side-menu/side-menu.module.ts ***!
    \******************************************************/

  /*! exports provided: SideMenuPageModule */

  /***/
  function srcAppOfficeSideMenuSideMenuModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideMenuPageModule", function () {
      return SideMenuPageModule;
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


    var _side_menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./side-menu-routing.module */
    "./src/app/office/side-menu/side-menu-routing.module.ts");
    /* harmony import */


    var _side_menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./side-menu.page */
    "./src/app/office/side-menu/side-menu.page.ts");

    var SideMenuPageModule = function SideMenuPageModule() {
      _classCallCheck(this, SideMenuPageModule);
    };

    SideMenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _side_menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["SideMenuPageRoutingModule"]],
      declarations: [_side_menu_page__WEBPACK_IMPORTED_MODULE_6__["SideMenuPage"]]
    })], SideMenuPageModule);
    /***/
  },

  /***/
  "./src/app/office/side-menu/side-menu.page.scss":
  /*!******************************************************!*\
    !*** ./src/app/office/side-menu/side-menu.page.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOfficeSideMenuSideMenuPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".active-item-top {\n  --ion-background-color: #F8FEFF;\n  border-left: 8px solid #0083CD; }\n\n.active-item-bottom {\n  --ion-background-color: #F7FFFD;\n  border-left: 8px solid #00BDBD; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ZmaWNlL3NpZGUtbWVudS9DOlxcVXNlcnNcXHJhbnVsXFxEb2N1bWVudHNcXEdpdEh1YlxcMm5kIFllYXJcXDJuZCBTZW1lc3RlclxcVU9QX1NFX1kyUzItUFVTTDIwMDgtSU5UUk9EVUNUSU9OLVRPLUlOVEVSTkVULU9GLVRISU5HU1xcV29ya3NwYWNlXFxpU0FNL3NyY1xcYXBwXFxvZmZpY2VcXHNpZGUtbWVudVxcc2lkZS1tZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUF1QjtFQUN2Qiw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSwrQkFBdUI7RUFDdkIsOEJBQThCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9vZmZpY2Uvc2lkZS1tZW51L3NpZGUtbWVudS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZlLWl0ZW0tdG9wIHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNGOEZFRkY7XHJcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkICMwMDgzQ0Q7IC8vIFNhbWxsIGJhciBpbiB0aGUgbGVmdCBzaWRlIGluIHRoZSBzaWRlIG1lbnUgdG8gc2hvdyB0aGUgYWN0aXZlIHBhZ2UuXHJcbn1cclxuXHJcbi5hY3RpdmUtaXRlbS1ib3R0b20ge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0Y3RkZGRDtcclxuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgIzAwQkRCRDsgLy8gU2FtbGwgYmFyIGluIHRoZSBsZWZ0IHNpZGUgaW4gdGhlIHNpZGUgbWVudSB0byBzaG93IHRoZSBhY3RpdmUgcGFnZS5cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/office/side-menu/side-menu.page.ts":
  /*!****************************************************!*\
    !*** ./src/app/office/side-menu/side-menu.page.ts ***!
    \****************************************************/

  /*! exports provided: SideMenuPage */

  /***/
  function srcAppOfficeSideMenuSideMenuPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideMenuPage", function () {
      return SideMenuPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/firebase.service */
    "./src/app/services/firebase.service.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/fesm2015/angular-fire-auth.js");

    var SideMenuPage = /*#__PURE__*/function () {
      function SideMenuPage(router, alertController, sideMenuService, angularFireAuth) {
        var _this = this;

        _classCallCheck(this, SideMenuPage);

        this.router = router;
        this.alertController = alertController;
        this.sideMenuService = sideMenuService;
        this.angularFireAuth = angularFireAuth;
        this.pagesTop = [{
          title: 'Dashboard',
          url: '/office/dashboard',
          icon: 'assets/images/office/main-screen/dashboard.png'
        }, {
          title: 'Notices',
          url: '/office/notices',
          icon: 'assets/images/office/main-screen/notices.png'
        }, {
          title: 'Student Attendance',
          url: '/office/student-attendance',
          icon: 'assets/images/office/main-screen/student-attendance.png'
        }, {
          title: 'Lectures',
          url: '/office/lectures',
          icon: 'assets/images/office/main-screen/lectures.png'
        }, {
          title: 'Semester Calendar',
          url: '/office/semester-calendar',
          icon: 'assets/images/office/main-screen/semester-calendar.png'
        }, {
          title: 'Modules',
          url: '/office/modules',
          icon: 'assets/images/office/main-screen/modules.png'
        }, {
          title: 'Students',
          url: '/office/students',
          icon: 'assets/images/office/main-screen/students.png'
        }, {
          title: 'Lecturers',
          url: '/office/lecturers',
          icon: 'assets/images/office/main-screen/lecturers.png'
        }];
        this.selectedPath = ''; // Retrieving the faculty of the logged in user and assign it the 'userFacultyFirestore' variable

        this.retrieveLoggedInUserDetailsFirestore = function () {
          _this.sideMenuService.retrieveLoggedInUserDetailsProgramOffice(_this.userDetailsAuth.uid).subscribe(function (userFacultyFirestore) {
            return userFacultyFirestore.forEach(function (document) {
              var firestoreDoc = document.payload.doc.data();
              firestoreDoc = firestoreDoc.faculty;
              _this.userFacultyFirestore = firestoreDoc;
              console.log(_this.userFacultyFirestore);
            });
          });
        };

        this.router.events.subscribe(function (event) {
          if (event && event.url) {
            _this.selectedPath = event.url;
          }
        });
      }

      _createClass(SideMenuPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          // Retrieving the auth details of the logged in user
          this.userDetailsAuth = this.sideMenuService.userDetails();
          console.log(this.userDetailsAuth);
          console.log(this.userDetailsAuth.uid);
          this.retrieveLoggedInUserDetailsFirestore(); // Updating the program office user account activity to ONLINE

          this.sideMenuService.updateProgramOfficeUserActivity("Online", this.passLoggedInUserId()).then(function (response) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log("Program Office Account Activity Updated - ONLINE");

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          }, function (error) {
            _this2.alertNotice("Error", "An error has occurred: " + error);
          });
          /*
          // If the user leaving the application the user will be logged out and account activity will be set to OFFLINE
          this.sideMenuService.checkUserActivity().then(
            async response => {
              if(response == "User Active"){
               
                console.log("User is active");
               
              }
            },
            error => {
              this.alertNotice("Error", "An error has occurred: " + error);
            }
          )
          */
        } // Passing user faculty

      }, {
        key: "passLoggedInUserFaculty",
        value: function passLoggedInUserFaculty() {
          console.log(this.userFacultyFirestore);
          return this.userFacultyFirestore;
        } // Passing user id

      }, {
        key: "passLoggedInUserId",
        value: function passLoggedInUserId() {
          return this.userDetailsAuth.uid;
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
        } // Logout Process

      }, {
        key: "logout",
        value: function logout() {
          this.alertnotice('Confirmation ', 'Are you sure you want to logout?');
        } // Alert Box Implementation (Logout)

      }, {
        key: "alertnotice",
        value: function alertnotice(title, content) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertController.create({
                      header: title,
                      message: content,
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function handler() {
                          console.log("Logout request canceled");
                        }
                      }, {
                        text: 'Continue',
                        handler: function handler() {
                          _this3.sideMenuService.logoutUser();

                          _this3.router.navigate(["/login"]);

                          console.log("User Logged Out"); // Updating the program office user account activity to OFFLINE

                          _this3.sideMenuService.updateProgramOfficeUserActivity("Offline", _this3.passLoggedInUserId()).then(function (response) {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                while (1) {
                                  switch (_context3.prev = _context3.next) {
                                    case 0:
                                      console.log("Program Office Account Activity Updated - OFFLINE");

                                    case 1:
                                    case "end":
                                      return _context3.stop();
                                  }
                                }
                              }, _callee3);
                            }));
                          }, function (error) {
                            _this3.alertNotice("Error", "An error has occurred: " + error);
                          });
                        }
                      }]
                    });

                  case 2:
                    alert = _context4.sent;
                    _context4.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return SideMenuPage;
    }();

    SideMenuPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
      }];
    };

    SideMenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-side-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./side-menu.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/office/side-menu/side-menu.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./side-menu.page.scss */
      "./src/app/office/side-menu/side-menu.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]])], SideMenuPage);
    /***/
  }
}]);
//# sourceMappingURL=office-side-menu-side-menu-module-es5.js.map