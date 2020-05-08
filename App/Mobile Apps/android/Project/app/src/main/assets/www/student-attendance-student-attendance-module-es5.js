function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["student-attendance-student-attendance-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/office/student-attendance/student-attendance.page.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/student-attendance/student-attendance.page.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOfficeStudentAttendanceStudentAttendancePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header style=\"height: 70px;\">\r\n  <ion-toolbar>\r\n\r\n\r\n    <!-- This will add a button to show the side menu when the side menu is hidden in small screens -->\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    \r\n    <ion-title style=\"position: absolute;\r\n                      top: 40%;\">Student Attendance</ion-title>\r\n\r\n    <!-- Header Contents Section -->\r\n    <div style=\"position: absolute;\r\n                right: 5px;\r\n                top: 8px;\">\r\n      <!-- Notification Bell, Unread Notifications Count, Drop Down -->          \r\n\r\n      <ion-button fill=\"clear\" color=\"dark\" style=\"width: 100px;\r\n                                                  height: 45px;\r\n                                                  background-color: white;\" (click)=\"openNotificationPopover($event)\">\r\n\r\n        <!-- Notification Bell Icon -->\r\n        <div style=\"height: 42px;\r\n                  width: 42px;\"> \r\n          <ion-icon name=\"notifications-outline\" style=\"font-size: 35px;\r\n                                                        position: absolute;\r\n                                                        top: 5px;\r\n                                                        left: 0px;\"></ion-icon>\r\n        </div>\r\n\r\n          <!-- Arrow Icon -->\r\n        <div style=\"position: absolute;\r\n                    left: 50px;\r\n                    top: 10px;\r\n                    font-size: 26px;\">\r\n          <ion-icon name=\"chevron-down-outline\"></ion-icon>\r\n        </div>\r\n        \r\n      </ion-button>\r\n\r\n    </div>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid>\r\n\r\n    <ion-row>\r\n\r\n      <ion-col size=\"6\">\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n\r\n            <ion-card style=\"height: 300px;\">\r\n              <ion-card-header>\r\n                <ion-card-title>\r\n                  Today's Latest Analytics\r\n                </ion-card-title>\r\n              </ion-card-header>\r\n              <ion-card-content>\r\n\r\n                <ion-label style=\"position: absolute;\r\n                                  left: 50%;\r\n                                  top: 80px;\r\n                                  transform: translateX(-50%);\r\n                                  font-size: 18px;\">\r\n                  <b>In Development</b> - Will be released soon\r\n                </ion-label>\r\n\r\n              </ion-card-content>\r\n            </ion-card>\r\n\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n\r\n            <ion-card>\r\n              <ion-card-header>\r\n                <ion-card-title style=\"height: 300px;\">\r\n                  Students Absence Overdue\r\n                </ion-card-title>\r\n              </ion-card-header>\r\n              <ion-card-content>\r\n\r\n                <ion-label style=\"position: absolute;\r\n                                  left: 50%;\r\n                                  top: -200px;\r\n                                  transform: translate(-50%);\r\n                                  font-size: 18px;\">\r\n                  <b>In Development</b> - Will be released soon\r\n                </ion-label>\r\n\r\n              </ion-card-content>\r\n            </ion-card>\r\n\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n\r\n            <ion-card>\r\n              <ion-card-header>\r\n                <ion-card-title>\r\n                  Attendance Statistics \r\n                </ion-card-title>\r\n              </ion-card-header>\r\n              <ion-card-content>\r\n\r\n                <ion-grid>\r\n                  <ion-row>\r\n                    <ion-col>\r\n                      <ion-card style=\"height: 200px;\">\r\n                        <ion-card-header>\r\n                          <ion-card-title>\r\n                            Per Module\r\n                          </ion-card-title>\r\n                        </ion-card-header>\r\n                        <ion-card-content>\r\n          \r\n                          <ion-label style=\"position: absolute;\r\n                                            left: 50%;\r\n                                            top: 30px;\r\n                                            transform: translate(-50%);\r\n                                            font-size: 18px;\">\r\n                            <b>In Development</b> - Will be released soon\r\n                          </ion-label>\r\n          \r\n                        </ion-card-content>\r\n                      </ion-card>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col>\r\n                      <ion-card style=\"height: 200px;\">\r\n                        <ion-card-header>\r\n                          <ion-card-title>\r\n                            Per Student\r\n                          </ion-card-title>\r\n                        </ion-card-header>\r\n                        <ion-card-content>\r\n          \r\n                          <ion-label style=\"position: absolute;\r\n                                            left: 50%;\r\n                                            top: 30px;\r\n                                            transform: translateX(-50%);\r\n                                            font-size: 18px;\">\r\n                            <b>In Development</b> - Will be released soon\r\n                          </ion-label>\r\n          \r\n                        </ion-card-content>\r\n                      </ion-card>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n\r\n              </ion-card-content>\r\n            </ion-card>\r\n\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n\r\n\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/office/student-attendance/student-attendance-routing.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/office/student-attendance/student-attendance-routing.module.ts ***!
    \********************************************************************************/

  /*! exports provided: StudentAttendancePageRoutingModule */

  /***/
  function srcAppOfficeStudentAttendanceStudentAttendanceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentAttendancePageRoutingModule", function () {
      return StudentAttendancePageRoutingModule;
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


    var _student_attendance_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./student-attendance.page */
    "./src/app/office/student-attendance/student-attendance.page.ts");

    var routes = [{
      path: '',
      component: _student_attendance_page__WEBPACK_IMPORTED_MODULE_3__["StudentAttendancePage"]
    }];

    var StudentAttendancePageRoutingModule = function StudentAttendancePageRoutingModule() {
      _classCallCheck(this, StudentAttendancePageRoutingModule);
    };

    StudentAttendancePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StudentAttendancePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/office/student-attendance/student-attendance.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/office/student-attendance/student-attendance.module.ts ***!
    \************************************************************************/

  /*! exports provided: StudentAttendancePageModule */

  /***/
  function srcAppOfficeStudentAttendanceStudentAttendanceModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentAttendancePageModule", function () {
      return StudentAttendancePageModule;
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


    var _student_attendance_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./student-attendance-routing.module */
    "./src/app/office/student-attendance/student-attendance-routing.module.ts");
    /* harmony import */


    var _student_attendance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./student-attendance.page */
    "./src/app/office/student-attendance/student-attendance.page.ts");

    var StudentAttendancePageModule = function StudentAttendancePageModule() {
      _classCallCheck(this, StudentAttendancePageModule);
    };

    StudentAttendancePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _student_attendance_routing_module__WEBPACK_IMPORTED_MODULE_5__["StudentAttendancePageRoutingModule"]],
      declarations: [_student_attendance_page__WEBPACK_IMPORTED_MODULE_6__["StudentAttendancePage"]]
    })], StudentAttendancePageModule);
    /***/
  },

  /***/
  "./src/app/office/student-attendance/student-attendance.page.scss":
  /*!************************************************************************!*\
    !*** ./src/app/office/student-attendance/student-attendance.page.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOfficeStudentAttendanceStudentAttendancePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --ion-background-color: rgb(243, 243, 243);\n}\n\nion-card {\n  --ion-background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ZmaWNlL3N0dWRlbnQtYXR0ZW5kYW5jZS9DOlxcVXNlcnNcXHJhbnVsXFxEb2N1bWVudHNcXEdpdEh1YlxcMm5kIFllYXJcXDJuZCBTZW1lc3RlclxcVU9QX1NFX1kyUzItUFVTTDIwMDgtSU5UUk9EVUNUSU9OLVRPLUlOVEVSTkVULU9GLVRISU5HU1xcV29ya3NwYWNlXFxpU0FNL3NyY1xcYXBwXFxvZmZpY2VcXHN0dWRlbnQtYXR0ZW5kYW5jZVxcc3R1ZGVudC1hdHRlbmRhbmNlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvb2ZmaWNlL3N0dWRlbnQtYXR0ZW5kYW5jZS9zdHVkZW50LWF0dGVuZGFuY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMENBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9vZmZpY2Uvc3R1ZGVudC1hdHRlbmRhbmNlL3N0dWRlbnQtYXR0ZW5kYW5jZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDI0MywgMjQzKTtcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjQzLCAyNDMpO1xufVxuXG5pb24tY2FyZCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/office/student-attendance/student-attendance.page.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/office/student-attendance/student-attendance.page.ts ***!
    \**********************************************************************/

  /*! exports provided: StudentAttendancePage */

  /***/
  function srcAppOfficeStudentAttendanceStudentAttendancePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentAttendancePage", function () {
      return StudentAttendancePage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _notifications_popover_notifications_popover_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../notifications-popover/notifications-popover.page */
    "./src/app/office/notifications-popover/notifications-popover.page.ts");
    /* harmony import */


    var _side_menu_side_menu_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../side-menu/side-menu.page */
    "./src/app/office/side-menu/side-menu.page.ts");

    var StudentAttendancePage = /*#__PURE__*/function () {
      function StudentAttendancePage(popoverController, sideMenuPageUserFaculty, alertController) {
        _classCallCheck(this, StudentAttendancePage);

        this.popoverController = popoverController;
        this.sideMenuPageUserFaculty = sideMenuPageUserFaculty;
        this.alertController = alertController;
      }

      _createClass(StudentAttendancePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.alertNotice('Area In Development - Will be Available Soon');
        } // Opening notifications popover

      }, {
        key: "openNotificationPopover",
        value: function openNotificationPopover(ev) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var moreDetailsLectureSessionPopover;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.popoverController.create({
                      component: _notifications_popover_notifications_popover_page__WEBPACK_IMPORTED_MODULE_3__["NotificationsPopoverPage"],
                      componentProps: {
                        loggedInUserId: this.sideMenuPageUserFaculty.passLoggedInUserId()
                      },
                      event: ev
                    });

                  case 2:
                    moreDetailsLectureSessionPopover = _context.sent;
                    moreDetailsLectureSessionPopover.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } // Alert Box Implementation

      }, {
        key: "alertNotice",
        value: function alertNotice(title) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: title,
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
      }]);

      return StudentAttendancePage;
    }();

    StudentAttendancePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: _side_menu_side_menu_page__WEBPACK_IMPORTED_MODULE_4__["SideMenuPage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    StudentAttendancePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-student-attendance',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./student-attendance.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/office/student-attendance/student-attendance.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./student-attendance.page.scss */
      "./src/app/office/student-attendance/student-attendance.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _side_menu_side_menu_page__WEBPACK_IMPORTED_MODULE_4__["SideMenuPage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])], StudentAttendancePage);
    /***/
  }
}]);
//# sourceMappingURL=student-attendance-student-attendance-module-es5.js.map