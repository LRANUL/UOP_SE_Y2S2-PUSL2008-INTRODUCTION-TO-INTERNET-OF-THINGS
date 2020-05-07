function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["students-students-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/office/students/students.page.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/students/students.page.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOfficeStudentsStudentsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header style=\"height: 6%;\">\r\n  <ion-toolbar>\r\n\r\n\r\n    <!-- This will add a button to show the side menu when the side menu is hidden in small screens -->\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    \r\n    <ion-title style=\"position: absolute;\r\n                      top: 40%;\">Students</ion-title>\r\n\r\n    <!-- Header Contents Section -->\r\n    <div style=\"position: absolute;\r\n                right: 5px;\r\n                top: 8px;\">\r\n      <!-- Notification Bell, Unread Notifications Count, Drop Down -->          \r\n\r\n      <ion-button fill=\"clear\" color=\"dark\" style=\"width: 100px;\r\n                                                  height: 45px;\r\n                                                  background-color: white;\" (click)=\"openNotificationPopover($event)\">\r\n\r\n        <!-- Notification Bell Icon -->\r\n        <div style=\"height: 42px;\r\n                  width: 42px;\"> \r\n          <ion-icon name=\"notifications-outline\" style=\"font-size: 35px;\r\n                                                        position: absolute;\r\n                                                        top: 5px;\r\n                                                        left: 0px;\"></ion-icon>\r\n        </div>\r\n\r\n          <!-- Arrow Icon -->\r\n        <div style=\"position: absolute;\r\n                    left: 50px;\r\n                    top: 10px;\r\n                    font-size: 26px;\">\r\n          <ion-icon name=\"arrow-down-outline\"></ion-icon>\r\n        </div>\r\n        \r\n      </ion-button>\r\n\r\n    </div>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n\r\n        \r\n        <ion-card style=\"max-height: 700px;\">\r\n          <ion-card-header>\r\n            <ion-card-title>\r\n              Registered Students\r\n            </ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            \r\n\r\n\r\n            <form [formGroup]=\"searchRegisteredStudentForm\" (ngSubmit)=\"doSearchRegisteredStudent(searchRegisteredStudentForm.value)\">\r\n              <ion-grid>\r\n                <ion-row>\r\n                  <ion-col size=\"5\">\r\n                    <ion-item>\r\n                      <ion-input type=\"number\" placeholder=\"Enter NSBM ID\" clearInput formControlName=\"nsbmId\"></ion-input>\r\n                    </ion-item>\r\n                  </ion-col>\r\n                  <ion-col size=\"0.5\">\r\n                    <ion-label style=\"position: absolute;\r\n                                      left: 50%;\r\n                                      top: 50%;\r\n                                      transform: translate(-50%, -50%);\r\n                                      font-size: 20px;\">\r\n                      OR\r\n                    </ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"5\">\r\n                    <ion-item>\r\n                      <ion-input type=\"text\" placeholder=\"Enter NSBM Email Address\" clearInput formControlName=\"nsbmEmailAddress\"></ion-input>\r\n                    </ion-item>\r\n                  </ion-col>\r\n                  <ion-col size=\"1.5\">\r\n                    <ion-button style=\"min-height: 100%;\r\n                                      min-width: 100%;\r\n                                      margin-top: 0px;\" type=\"submit\" [disabled]=\"searchRegisteredStudentForm.valid\">\r\n                      <ion-icon name=\"search-outline\" style=\"margin-right: 5px;\r\n                                                            font-size: 20x;\"></ion-icon>\r\n                      <ion-label style=\"font-size: 20px;\r\n                                        color: white;\">\r\n                        Search\r\n                      </ion-label>\r\n                    </ion-button>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </form>\r\n\r\n            <div style=\"border-top: #ccc solid 1px;\r\n                        min-width: 100%;\"></div>\r\n\r\n            <!-- Page loading search registered student text -->\r\n            <div *ngIf=\"pageLoadSearchStudentText\" style=\"position: absolute;\r\n                                                        top: 150px;\r\n                                                        left: 50%;\r\n                                                        transform: translateX(-50%);\r\n                                                        font-size: 18px;\r\n                                                        border: rgb(100, 116, 121) solid 2px;\r\n                                                        border-radius: 5px;\r\n                                                        padding: 15px;\r\n                                                        min-width: 53%;\">\r\n              <ion-icon name=\"chevron-up-circle-outline\" style=\"color: rgb(8, 177, 219);\r\n                                                                font-size: 30px;\r\n                                                                margin-top: 2px;\r\n                                                                margin-right: 10px;\"></ion-icon>\r\n              <ion-label style=\"position: relative;\r\n                                top: -5px;\">\r\n                Please populate a field and click 'Search' button to search for a registered student.\r\n              </ion-label>\r\n            </div>\r\n\r\n            <ion-spinner name=\"dots\" style=\"position: absolute;\r\n                                            left: 50%;\r\n                                            transform: translateX(-50%);\r\n                                            margin-top: 20px;\r\n                                            height: 100px;\r\n                                            width: 100px;\" *ngIf=\"showLoadingDots\"></ion-spinner>\r\n\r\n\r\n             <div style=\"overflow-y: scroll; \r\n                        height: 500px;\r\n                        margin-top: 15px;\">\r\n              <ion-grid>\r\n\r\n                <ion-row>\r\n\r\n                  <ion-col size=\"4\" size-sm=\"12\" size-lg=\"3\">\r\n\r\n                    <ion-card *ngIf=\"registeredStudentCard\">\r\n                      <ion-card-header>\r\n                        <ion-card-title>{{ studentNamePrefix }} {{ studentNameFirstName }} {{ studentNameMiddleName }} {{ studentNameLastName }}</ion-card-title>\r\n                      </ion-card-header>\r\n                      <ion-card-content>\r\n                        <b>NSBM ID: </b> {{ studentNsbmStudentId }} <br>\r\n                        <b>NSBM Email Address: </b> {{ studentNsbmEmailAddress }} <br>\r\n                        <b>Batch: </b> {{ studentBatch }} <br>\r\n                        <b>Degree: </b> {{ studentDegree }}, {{ studentAwardingBodyUniversity }} <br>\r\n                        <b>Account Status: </b> {{ studentStatus }}\r\n                        <ion-grid>\r\n                          <ion-row>\r\n                            <ion-col>\r\n                              <ion-button shape=\"round\" color=\"secondary\" style=\"min-width: 100%;\">\r\n                                <ion-icon name=\"create-outline\" style=\"margin-right: 5px;\r\n                                                                      color: white;\"></ion-icon>\r\n                                <ion-label style=\"color: white\">\r\n                                  Edit\r\n                                </ion-label>\r\n                              </ion-button>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                          <ion-row *ngIf=\"disableButton\">\r\n                            <ion-col>\r\n                              <ion-button shape=\"round\" color=\"danger\" style=\"min-width: 100%;\" (click)=\"disableStudentAccount('Confirmation Required','This student account will be DISABLED, do you want to continue?')\">\r\n                                <ion-icon name=\"lock-closed\" style=\"margin-right: 5px;\"></ion-icon>\r\n                                <ion-label style=\"color: white\">\r\n                                  Disable Account\r\n                                </ion-label>\r\n                              </ion-button>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                          <ion-row *ngIf=\"enableButton\">\r\n                            <ion-col>\r\n                              <ion-button shape=\"round\" color=\"medium\" style=\"min-width: 100%;\" (click)=\"enableStudentAccount('Confirmation Required','This student account will be ENABLED, do you want to continue?')\">\r\n                                <ion-icon name=\"lock-open-outline\" style=\"margin-right: 5px;\"></ion-icon>\r\n                                <ion-label style=\"color: white\">\r\n                                  Enable Account\r\n                                </ion-label>\r\n                              </ion-button>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                        </ion-grid>\r\n                      </ion-card-content>\r\n                    </ion-card>\r\n\r\n                  </ion-col>\r\n\r\n                </ion-row>\r\n\r\n              </ion-grid>\r\n            </div>\r\n\r\n\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n\r\n\r\n\r\n\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n\r\n\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/office/students/students-routing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/office/students/students-routing.module.ts ***!
    \************************************************************/

  /*! exports provided: StudentsPageRoutingModule */

  /***/
  function srcAppOfficeStudentsStudentsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentsPageRoutingModule", function () {
      return StudentsPageRoutingModule;
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


    var _students_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./students.page */
    "./src/app/office/students/students.page.ts");

    var routes = [{
      path: '',
      component: _students_page__WEBPACK_IMPORTED_MODULE_3__["StudentsPage"]
    }];

    var StudentsPageRoutingModule = function StudentsPageRoutingModule() {
      _classCallCheck(this, StudentsPageRoutingModule);
    };

    StudentsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StudentsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/office/students/students.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/office/students/students.module.ts ***!
    \****************************************************/

  /*! exports provided: StudentsPageModule */

  /***/
  function srcAppOfficeStudentsStudentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentsPageModule", function () {
      return StudentsPageModule;
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


    var _students_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./students-routing.module */
    "./src/app/office/students/students-routing.module.ts");
    /* harmony import */


    var _students_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./students.page */
    "./src/app/office/students/students.page.ts");

    var StudentsPageModule = function StudentsPageModule() {
      _classCallCheck(this, StudentsPageModule);
    };

    StudentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _students_routing_module__WEBPACK_IMPORTED_MODULE_5__["StudentsPageRoutingModule"]],
      declarations: [_students_page__WEBPACK_IMPORTED_MODULE_6__["StudentsPage"]]
    })], StudentsPageModule);
    /***/
  },

  /***/
  "./src/app/office/students/students.page.scss":
  /*!****************************************************!*\
    !*** ./src/app/office/students/students.page.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOfficeStudentsStudentsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --ion-background-color: rgb(243, 243, 243); }\n\nion-card {\n  --ion-background-color: white; }\n\nion-label {\n  color: black; }\n\nion-item {\n  border: #202020 solid 1px;\n  border-radius: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ZmaWNlL3N0dWRlbnRzL0M6XFxVc2Vyc1xccmFudWxcXERvY3VtZW50c1xcR2l0SHViXFwybmQgWWVhclxcMm5kIFNlbWVzdGVyXFxVT1BfU0VfWTJTMi1QVVNMMjAwOC1JTlRST0RVQ1RJT04tVE8tSU5URVJORVQtT0YtVEhJTkdTXFxXb3Jrc3BhY2VcXGlTQU0vc3JjXFxhcHBcXG9mZmljZVxcc3R1ZGVudHNcXHN0dWRlbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBDQUF1QixFQUFBOztBQUczQjtFQUNJLDZCQUF1QixFQUFBOztBQUczQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSx5QkFBaUM7RUFDakMsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9vZmZpY2Uvc3R1ZGVudHMvc3R1ZGVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAyNDMsIDI0Myk7XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1sYWJlbHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuaW9uLWl0ZW17XHJcbiAgICBib3JkZXI6IHJnYigzMiwgMzIsIDMyKSBzb2xpZCAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/office/students/students.page.ts":
  /*!**************************************************!*\
    !*** ./src/app/office/students/students.page.ts ***!
    \**************************************************/

  /*! exports provided: StudentsPage */

  /***/
  function srcAppOfficeStudentsStudentsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentsPage", function () {
      return StudentsPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _side_menu_side_menu_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../side-menu/side-menu.page */
    "./src/app/office/side-menu/side-menu.page.ts");
    /* harmony import */


    var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/firebase.service */
    "./src/app/services/firebase.service.ts");
    /* harmony import */


    var _notifications_popover_notifications_popover_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../notifications-popover/notifications-popover.page */
    "./src/app/office/notifications-popover/notifications-popover.page.ts");

    var StudentsPage = /*#__PURE__*/function () {
      function StudentsPage(studentsService, formBuilder, sideMenuPageUserFaculty, alertController, modalController, popoverController) {
        _classCallCheck(this, StudentsPage);

        this.studentsService = studentsService;
        this.formBuilder = formBuilder;
        this.sideMenuPageUserFaculty = sideMenuPageUserFaculty;
        this.alertController = alertController;
        this.modalController = modalController;
        this.popoverController = popoverController;
        this.registeredStudentCard = false;
        this.showLoadingDots = false;
        this.pageLoadSearchStudentText = true;
        this.disableButton = false;
        this.enableButton = false;
      }

      _createClass(StudentsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.searchRegisteredStudentForm = this.formBuilder.group({
            nsbmId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            nsbmEmailAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
          });
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
                      component: _notifications_popover_notifications_popover_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPopoverPage"],
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
        }
      }, {
        key: "doSearchRegisteredStudent",
        value: function doSearchRegisteredStudent(value) {
          var _this = this;

          // Response action if the user clicks the 'Search' button without entering a search value.
          if (value.nsbmId == "" && value.nsbmEmailAddress == "") {
            this.pageLoadSearchStudentText = true;
            this.showLoadingDots = false;
            this.alertNotice("Error", "A search value was not entered.");
          } else {
            // Setting page content load text to false
            this.pageLoadSearchStudentText = false; // Setting loading dots to true

            this.showLoadingDots = true;
          } // Searching for registered lecturer, retrieving value and showing the relevant response


          if (value.nsbmId != "") {
            this.studentsService.searchRegisteredStudentNSBMId(value.nsbmId).subscribe(function (response) {
              // Checking if any document values where returned
              if (response.length > 0) {
                _this.registeredStudentCard = true; // Setting loading dots to false

                _this.showLoadingDots = false; // Disabling loading text

                _this.pageLoadSearchStudentText = false; // Assigning retrieved values to this variables

                _this.registeredStudents = response.forEach(function (document) {
                  var firestoreDoc = document.payload.doc.data();
                  _this.studentDocId = document.payload.doc.id;
                  _this.studentNamePrefix = firestoreDoc.name.prefix;
                  _this.studentNameFirstName = firestoreDoc.name.firstName;
                  _this.studentNameMiddleName = firestoreDoc.name.middleName;
                  _this.studentNameLastName = firestoreDoc.name.lastName;
                  _this.studentNsbmStudentId = firestoreDoc.nsbmStudentID;
                  _this.studentNsbmEmailAddress = firestoreDoc.Email;
                  _this.studentBatch = firestoreDoc.batch;
                  _this.studentDegree = firestoreDoc.degree;
                  _this.studentAwardingBodyUniversity = firestoreDoc.awardingBodyUniversity;
                  _this.studentStatus = firestoreDoc.status;
                });

                if (_this.studentStatus == "Disabled") {
                  _this.enableButton = true;
                } else if (_this.studentStatus == "Active") {
                  _this.disableButton = true;
                }

                console.log("Registered Lecturer Record Found");
              } else {
                _this.showLoadingDots = false;

                _this.alertNotice("Not Found", "Registered Student Record with NSBM ID: " + value.nsbmId + ", is not available");

                console.log("Registered Student Record Not Found");
              }
            }, function (error) {
              console.log("Error: " + error);

              _this.alertNotice("Error", "An error has occurred: " + error);

              _this.showLoadingDots = false;
            });
          } else if (value.nsbmEmailAddress) {
            this.studentsService.searchRegisteredStudentNSBMEmail(value.nsbmEmailAddress).subscribe(function (response) {
              // Checking if any document values where returned
              if (response.length > 0) {
                _this.registeredStudentCard = true; // Setting loading dots to false

                _this.showLoadingDots = false; // Disabling loading text

                _this.pageLoadSearchStudentText = false; // Assigning retrieved values to this variables

                _this.registeredStudents = response.forEach(function (document) {
                  var firestoreDoc = document.payload.doc.data();
                  _this.studentDocId = document.payload.doc.id;
                  _this.studentNamePrefix = firestoreDoc.name.prefix;
                  _this.studentNameFirstName = firestoreDoc.name.firstName;
                  _this.studentNameMiddleName = firestoreDoc.name.middleName;
                  _this.studentNameLastName = firestoreDoc.name.lastName;
                  _this.studentNsbmStudentId = firestoreDoc.nsbmStudentID;
                  _this.studentNsbmEmailAddress = firestoreDoc.Email;
                  _this.studentBatch = firestoreDoc.batch;
                  _this.studentDegree = firestoreDoc.degree;
                  _this.studentAwardingBodyUniversity = firestoreDoc.awardingBodyUniversity;
                  _this.studentStatus = firestoreDoc.status;
                });

                if (_this.studentStatus == "Disabled") {
                  _this.enableButton = true;
                } else if (_this.studentStatus == "Active") {
                  _this.disableButton = true;
                }

                console.log("Registered Student Record Found");
              } else {
                _this.alertNotice("Not Found", "Registered Student Record with NSBM Email Address: " + value.nsbmEmailAddress + ", is not available");

                console.log("Registered Student Record Not Found");
              }
            }, function (error) {
              console.log("Error: " + error);

              _this.alertNotice("Error", "An error has occurred: " + error);

              _this.showLoadingDots = false;
            });
          }
        } // Confirm Box Implementation (Disabling student user account)

      }, {
        key: "disableStudentAccount",
        value: function disableStudentAccount(title, content) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: title,
                      message: content,
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function handler() {
                          console.log("Alert Box: Disable Student User Account Request Denied");
                        }
                      }, {
                        text: 'Continue',
                        handler: function handler() {
                          console.log("Alert Box: Disable Student User Account Request Accepted");
                          _this2.disableButton = false; // Calling function to disable user account

                          _this2.studentsService.disableUserAccount("studentUsers", _this2.studentDocId);

                          _this2.enableButton = true;
                        }
                      }]
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
        } // Confirm Box Implementation (Enabling student user account)

      }, {
        key: "enableStudentAccount",
        value: function enableStudentAccount(title, content) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      header: title,
                      message: content,
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function handler() {
                          console.log("Alert Box: Enable Student User Account Request Denied");
                        }
                      }, {
                        text: 'Continue',
                        handler: function handler() {
                          console.log("Alert Box: Enable Student User Account Request Accepted");
                          _this3.enableButton = false; // Calling function to disable user account

                          _this3.studentsService.enableUserAccount("studentUsers", _this3.studentDocId);

                          _this3.disableButton = true;
                        }
                      }]
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        } // Alert Box Implementation

      }, {
        key: "alertNotice",
        value: function alertNotice(title, content) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertController.create({
                      header: title,
                      message: content,
                      buttons: ['OK']
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

      return StudentsPage;
    }();

    StudentsPage.ctorParameters = function () {
      return [{
        type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _side_menu_side_menu_page__WEBPACK_IMPORTED_MODULE_4__["SideMenuPage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    StudentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-students',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./students.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/office/students/students.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./students.page.scss */
      "./src/app/office/students/students.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _side_menu_side_menu_page__WEBPACK_IMPORTED_MODULE_4__["SideMenuPage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], StudentsPage);
    /***/
  }
}]);
//# sourceMappingURL=students-students-module-es5.js.map