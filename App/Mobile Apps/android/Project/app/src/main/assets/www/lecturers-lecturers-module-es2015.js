(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lecturers-lecturers-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/lecturers/lecturers.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/lecturers/lecturers.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"height: 70px;\">\r\n  <ion-toolbar>\r\n\r\n\r\n    <!-- This will add a button to show the side menu when the side menu is hidden in small screens -->\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    \r\n    <ion-title style=\"position: absolute;\r\n                      top: 40%;\">Lecturers</ion-title>\r\n\r\n    <!-- Header Contents Section -->\r\n    <div style=\"position: absolute;\r\n                right: 5px;\r\n                top: 8px;\">\r\n      <!-- Notification Bell, Unread Notifications Count, Drop Down -->          \r\n\r\n      <ion-button fill=\"clear\" color=\"dark\" style=\"width: 100px;\r\n                                                  height: 45px;\r\n                                                  background-color: white;\" (click)=\"openNotificationPopover($event)\">\r\n\r\n        <!-- Notification Bell Icon -->\r\n        <div style=\"height: 42px;\r\n                  width: 42px;\"> \r\n          <ion-icon name=\"notifications-outline\" style=\"font-size: 35px;\r\n                                                        position: absolute;\r\n                                                        top: 5px;\r\n                                                        left: 0px;\"></ion-icon>\r\n        </div>\r\n\r\n          <!-- Arrow Icon -->\r\n        <div style=\"position: absolute;\r\n                    left: 50px;\r\n                    top: 10px;\r\n                    font-size: 26px;\">\r\n          <ion-icon name=\"chevron-down-outline\"></ion-icon>\r\n        </div>\r\n        \r\n      </ion-button>\r\n\r\n    </div>\r\n\r\n\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid>\r\n\r\n    <ion-row>\r\n\r\n      <ion-col size=\"12\">\r\n\r\n        <ion-card style=\"max-height: 600px;\">\r\n          <ion-card-header>\r\n            <ion-card-title>\r\n              Registered Lecturers\r\n            </ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n\r\n            <form [formGroup]=\"searchRegisteredLecturerForm\" (ngSubmit)=\"doSearchRegisteredLecturer(searchRegisteredLecturerForm.value)\">\r\n              <ion-grid>\r\n                <ion-row>\r\n                  <ion-col size=\"5\">\r\n                    <ion-item>\r\n                      <ion-input type=\"number\" placeholder=\"Enter NSBM ID\" clearInput formControlName=\"nsbmId\"></ion-input>\r\n                    </ion-item>\r\n                  </ion-col>\r\n                  <ion-col size=\"0.5\">\r\n                    <ion-label style=\"position: absolute;\r\n                                      left: 50%;\r\n                                      top: 50%;\r\n                                      transform: translate(-50%, -50%);\r\n                                      font-size: 20px;\">\r\n                      OR\r\n                    </ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"5\">\r\n                    <ion-item>\r\n                      <ion-input type=\"text\" placeholder=\"Enter NSBM Email Address\" clearInput formControlName=\"nsbmEmailAddress\"></ion-input>\r\n                    </ion-item>\r\n                  </ion-col>\r\n                  <ion-col size=\"1.5\">\r\n                    <ion-button style=\"min-height: 100%;\r\n                                      min-width: 100%;\r\n                                      margin-top: 0px;\" type=\"submit\" [disabled]=\"searchRegisteredLecturerForm.valid\">\r\n                      <ion-icon name=\"search-outline\" style=\"margin-right: 5px;\r\n                                                            font-size: 20px;\"></ion-icon>\r\n                      <ion-label style=\"font-size: 20px;\r\n                                        color: white;\">\r\n                        Search\r\n                      </ion-label>\r\n                    </ion-button>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </form>\r\n\r\n            <div style=\"border-top: #ccc solid 1px;\r\n                        min-width: 100%;\"></div>\r\n\r\n            <!-- Page loading search registered lecturer text -->\r\n            <div *ngIf=\"pageLoadSearchLecturerText\" style=\"position: absolute;\r\n                                                        top: 150px;\r\n                                                        left: 50%;\r\n                                                        transform: translateX(-50%);\r\n                                                        font-size: 18px;\r\n                                                        border: rgb(100, 116, 121) solid 2px;\r\n                                                        border-radius: 5px;\r\n                                                        padding: 15px;\r\n                                                        min-width: 53%;\">\r\n              <ion-icon name=\"chevron-up-circle-outline\" style=\"color: rgb(8, 177, 219);\r\n                                                                font-size: 30px;\r\n                                                                margin-top: 2px;\r\n                                                                margin-right: 10px;\"></ion-icon>\r\n              <ion-label style=\"position: relative;\r\n                                top: -5px;\">\r\n                Please populate a field and click 'Search' button to search for a registered lecturer.\r\n              </ion-label>\r\n            </div>\r\n\r\n\r\n            <ion-spinner name=\"dots\" style=\"position: absolute;\r\n                                            left: 50%;\r\n                                            transform: translateX(-50%);\r\n                                            margin-top: 20px;\r\n                                            height: 100px;\r\n                                            width: 100px;\" *ngIf=\"showLoadingDots\"></ion-spinner>\r\n\r\n\r\n            <div style=\"overflow-y: scroll; \r\n                        height: 500px;\r\n                        margin-top: 15px;\">\r\n              <ion-grid>\r\n\r\n                <ion-row>\r\n\r\n                  <ion-col size=\"4\" size-sm=\"12\" size-lg=\"3\">\r\n\r\n                    <ion-card *ngIf=\"registeredLecturerCard\">\r\n                      <ion-card-header>\r\n                        <ion-card-title>{{ lecturerNamePrefix }} {{ lecturerNameFirstName }} {{ lecturerNameMiddleName }} {{ lecturerNameLastName }} </ion-card-title>\r\n                      </ion-card-header>\r\n                      <ion-card-content>\r\n                        <b>NSBM ID: </b> {{ lecturerNsbmLecturerId }} <br>\r\n                        <b>NSBM Email Address: </b> {{ lecturerNsbmEmailAddress }} <br>\r\n                        <b>Specialization: </b> {{ lecturerSpecialization }} <br>\r\n                        <b>Specialized Faculty: </b> {{ lecturerSpecializedFaculty }} <br>\r\n                        <b>Account Status: </b> {{ lecturerStatus }}\r\n                        <ion-grid>\r\n                          <ion-row>\r\n                            <ion-col>\r\n                              <ion-button shape=\"round\" color=\"secondary\" style=\"min-width: 100%;\">\r\n                                <ion-icon name=\"create-outline\" style=\"margin-right: 5px;\r\n                                                                      color: white;\"></ion-icon>\r\n                                <ion-label style=\"color: white\">\r\n                                  Edit\r\n                                </ion-label>\r\n                              </ion-button>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                          <ion-row *ngIf=\"disableButton\">\r\n                            <ion-col>\r\n                              <ion-button shape=\"round\" color=\"danger\" style=\"min-width: 100%;\" (click)=\"disableLecturerAccount('Confirmation Required','This student account will be DISABLED, do you want to continue?')\">\r\n                                <ion-icon name=\"lock-closed\" style=\"margin-right: 5px;\"></ion-icon>\r\n                                <ion-label style=\"color: white\">\r\n                                  Disable Account\r\n                                </ion-label>\r\n                              </ion-button>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                          <ion-row *ngIf=\"enableButton\">\r\n                            <ion-col>\r\n                              <ion-button shape=\"round\" color=\"medium\" style=\"min-width: 100%;\" (click)=\"enableLecturerAccount('Confirmation Required','This student account will be ENABLED, do you want to continue?')\">\r\n                                <ion-icon name=\"lock-open-outline\" style=\"margin-right: 5px;\"></ion-icon>\r\n                                <ion-label style=\"color: white\">\r\n                                  Enable Account\r\n                                </ion-label>\r\n                              </ion-button>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                        </ion-grid>\r\n                      </ion-card-content>\r\n                    </ion-card>\r\n\r\n                  </ion-col>\r\n\r\n                </ion-row>\r\n\r\n              </ion-grid>\r\n            </div>\r\n\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"6\" size-sm=\"12\" size-lg=\"6\">\r\n\r\n        <ion-card style=\"height: 105%;\">\r\n          <ion-card-header>\r\n            <ion-card-title>\r\n              Register Lecturer\r\n            </ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n\r\n            <form [formGroup]=\"lecturerRegistrationForm\" (ngSubmit)=\"doLecturerRegistration(lecturerRegistrationForm.value)\"> \r\n              <ion-grid>\r\n\r\n                <ion-row>\r\n\r\n                  <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n\r\n                    <ion-label class=\"registerLecturerFormLabel\">\r\n                      NSBM Lecturer ID\r\n                    </ion-label>\r\n\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n                    <ion-item>\r\n                      <ion-input type=\"number\" placeholder=\"Lecturer ID\" clearInput formControlName=\"nsbmLecturerId\"></ion-input>\r\n                    </ion-item>\r\n                  </ion-col>\r\n\r\n                </ion-row>\r\n                <ion-row>\r\n                  \r\n                  \r\n                  <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n\r\n                    <ion-label class=\"registerLecturerFormLabel\">\r\n                      Name\r\n                    </ion-label>\r\n\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n\r\n                    <ion-row style=\"margin-bottom: 10px;\">\r\n                      <ion-item style=\"min-width: 100%;\">\r\n                        <ion-label>Name Prefix</ion-label>\r\n                        <ion-select formControlName=\"nameTitle\">\r\n                          <ion-select-option value=\"Mr.\">Mr.</ion-select-option>\r\n                          <ion-select-option value=\"Sir.\">Sir.</ion-select-option>\r\n                          <ion-select-option value=\"Dr.\">Dr.</ion-select-option>\r\n                          <ion-select-option value=\"Mrs.\">Mrs.</ion-select-option>\r\n                          <ion-select-option value=\"Miss.\">Miss</ion-select-option>\r\n                          <ion-select-option value=\"Ms.\">Ms</ion-select-option>\r\n                        </ion-select>\r\n                      </ion-item>\r\n                    </ion-row>\r\n                    <ion-row style=\"margin-bottom: 10px;\">\r\n                      <ion-item style=\"min-width: 100%;\">\r\n                        <ion-input type=\"text\" placeholder=\"First Name\" clearInput formControlName=\"firstName\"></ion-input>\r\n                      </ion-item>\r\n                    </ion-row>\r\n                    <ion-row style=\"margin-bottom: 10px;\">\r\n                      <ion-item style=\"min-width: 100%;\">\r\n                        <ion-input type=\"text\" placeholder=\"Middle Name\" clearInput formControlName=\"middleName\"></ion-input>\r\n                      </ion-item>\r\n                    </ion-row>\r\n                    <ion-row style=\"margin-bottom: 10px;\">\r\n                      <ion-item style=\"min-width: 100%;\">\r\n                        <ion-input type=\"text\" placeholder=\"Last Name\" clearInput formControlName=\"lastName\"></ion-input>\r\n                      </ion-item>\r\n                    </ion-row>\r\n\r\n                  </ion-col>\r\n\r\n                </ion-row>\r\n                <ion-row>\r\n\r\n                  <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n\r\n                    <ion-label class=\"registerLecturerFormLabel\">\r\n                      Specialized Faculty\r\n                    </ion-label>\r\n\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n\r\n                    <ion-item>\r\n                      <ion-label>Specialized Faculty</ion-label>\r\n                      <ion-select cancelText=\"Cancel\" okText=\"Continue\" formControlName=\"specializedFaculty\"> \r\n                        <ion-select-option value=\"School of Computing\">School of Computing</ion-select-option>\r\n                        <ion-select-option value=\"School of Business\">School of Business</ion-select-option>\r\n                        <ion-select-option value=\"School of Engineering\">School of Engineering</ion-select-option>\r\n                      </ion-select>\r\n                    </ion-item>\r\n\r\n                  </ion-col>\r\n\r\n                </ion-row>\r\n                <ion-row>\r\n\r\n                  <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n\r\n                    <ion-label class=\"registerLecturerFormLabel\">\r\n                      Specialization\r\n                    </ion-label>\r\n\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n                    <ion-item>\r\n                      <ion-input type=\"text\" placeholder=\"Enter Field\" clearInput formControlName=\"specialization\"></ion-input>\r\n                    </ion-item>\r\n                  </ion-col>\r\n\r\n                </ion-row>\r\n                <ion-row>\r\n\r\n                  <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n\r\n                    <ion-label class=\"registerLecturerFormLabel\">\r\n                      NSBM Email\r\n                    </ion-label>\r\n\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n\r\n                    <ion-item>\r\n                      <ion-input type=\"email\" placeholder=\"Eg: sample@nsbm.lk\" clearInput formControlName=\"nsbmEmail\"></ion-input>\r\n                    </ion-item>\r\n\r\n                  </ion-col>\r\n\r\n                </ion-row>\r\n                <ion-row>\r\n\r\n                  <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n\r\n                    <ion-label class=\"registerLecturerFormLabel\">\r\n                      Password\r\n                    </ion-label>\r\n\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n\r\n                    <ion-item>\r\n                      <ion-input type=\"password\" placeholder=\"Enter password\" clearInput formControlName=\"password\"></ion-input>\r\n                    </ion-item>\r\n\r\n                  </ion-col>\r\n\r\n                </ion-row>\r\n                <ion-row>\r\n\r\n                  <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n                    \r\n                    <ion-label class=\"registerLecturerFormLabel\">\r\n                      Confirm Password\r\n                    </ion-label>\r\n\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n\r\n                    <ion-item>\r\n                      <ion-input type=\"password\" placeholder=\"Enter password\" clearInput formControlName=\"confirmPassword\"></ion-input>\r\n                    </ion-item>\r\n\r\n                  </ion-col>\r\n\r\n                </ion-row>\r\n                <ion-row>\r\n\r\n                  <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n\r\n                    <ion-label class=\"registerLecturerFormLabel\">\r\n                      User Account Status\r\n                    </ion-label>\r\n\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n\r\n                    <ion-item>\r\n                      <ion-label>Status</ion-label>\r\n                      <ion-select cancelText=\"Cancel\" okText=\"Continue\" formControlName=\"lecturerStatus\"> \r\n                        <ion-select-option *ngFor=\"let item of publishedUserStatuses\" value=\"{{ item.payload.doc.data().status }}\">\r\n                          {{ item.payload.doc.data().status }}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                    </ion-item>\r\n\r\n                  </ion-col>\r\n\r\n                </ion-row>\r\n                <ion-row>\r\n\r\n                  <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n                    \r\n                    <ion-label>\r\n                      Terms & Conditions\r\n                    </ion-label>\r\n\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\" style=\"margin-left: 50px;\">\r\n\r\n                    <ion-checkbox checked=\"false\" formControlName=\"termsAndConditionsAgreement\"></ion-checkbox>\r\n                    <ion-label>\r\n                      Please refer the <span (click)=\"showTermsAndCondtions()\">Terms & Conditions</span> and agree to this by ticking the box.\r\n                    </ion-label>\r\n\r\n                  </ion-col>\r\n\r\n                </ion-row>\r\n                <ion-row>\r\n\r\n                  <ion-col style=\"margin-top: 10px;\">\r\n\r\n                    <ion-checkbox checked=\"false\"></ion-checkbox>\r\n                    <ion-label>\r\n                      Send credentails to this User's email account (Outlook)\r\n                    </ion-label>\r\n\r\n                  </ion-col>\r\n\r\n                </ion-row>\r\n\r\n                <ion-row>\r\n                  <ion-col style=\"margin-top: 15px;\">\r\n                    <ion-item>\r\n                      <ion-label style=\"position: absolute;\r\n                                        left: 50%;\r\n                                        top: 50%;\r\n                                        transform: translate(-50%,-50%);\r\n                                        font-size: 17px;\">\r\n                        Note: Current Logged In Porgram Office User will be Logged Out.\r\n                      </ion-label>\r\n                    </ion-item>\r\n                  </ion-col>\r\n                </ion-row>\r\n\r\n                <ion-row>\r\n\r\n                  <ion-col>\r\n\r\n                    <ion-button style=\"position: absolute;\r\n                                      left: 50%;\r\n                                      transform: translateX(-50%);\r\n                                      top: 10px;\" type=\"submit\" [disabled]=\"!lecturerRegistrationForm.valid\">\r\n                      Register\r\n                    </ion-button>\r\n\r\n                    <!-- Loading Spinner -->\r\n                    <ion-spinner name=\"crescent\" style=\"position: absolute;\r\n                                                        top: 18px;\r\n                                                        left: 60%;\r\n                                                        transform: translateX(-40%);\" *ngIf=\"registerLecturerLoadingSpinner\"></ion-spinner>\r\n\r\n                  </ion-col>\r\n\r\n                </ion-row>\r\n\r\n\r\n\r\n              </ion-grid>\r\n            </form>\r\n\r\n\r\n\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/office/lecturers/lecturers-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/office/lecturers/lecturers-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: LecturersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LecturersPageRoutingModule", function() { return LecturersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _lecturers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lecturers.page */ "./src/app/office/lecturers/lecturers.page.ts");




const routes = [
    {
        path: '',
        component: _lecturers_page__WEBPACK_IMPORTED_MODULE_3__["LecturersPage"]
    }
];
let LecturersPageRoutingModule = class LecturersPageRoutingModule {
};
LecturersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LecturersPageRoutingModule);



/***/ }),

/***/ "./src/app/office/lecturers/lecturers.module.ts":
/*!******************************************************!*\
  !*** ./src/app/office/lecturers/lecturers.module.ts ***!
  \******************************************************/
/*! exports provided: LecturersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LecturersPageModule", function() { return LecturersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _lecturers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lecturers-routing.module */ "./src/app/office/lecturers/lecturers-routing.module.ts");
/* harmony import */ var _lecturers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lecturers.page */ "./src/app/office/lecturers/lecturers.page.ts");







let LecturersPageModule = class LecturersPageModule {
};
LecturersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _lecturers_routing_module__WEBPACK_IMPORTED_MODULE_5__["LecturersPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_lecturers_page__WEBPACK_IMPORTED_MODULE_6__["LecturersPage"]]
    })
], LecturersPageModule);



/***/ }),

/***/ "./src/app/office/lecturers/lecturers.page.scss":
/*!******************************************************!*\
  !*** ./src/app/office/lecturers/lecturers.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color: rgb(243, 243, 243);\n}\n\nion-card {\n  --ion-background-color: white;\n}\n\nion-label {\n  color: black;\n}\n\nion-item {\n  border: #202020 solid 1px;\n  border-radius: 5px;\n}\n\n.registerLecturerFormLabel {\n  position: relative;\n  top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ZmaWNlL2xlY3R1cmVycy9DOlxcVXNlcnNcXHJhbnVsXFxEb2N1bWVudHNcXEdpdEh1YlxcMm5kIFllYXJcXDJuZCBTZW1lc3RlclxcVU9QX1NFX1kyUzItUFVTTDIwMDgtSU5UUk9EVUNUSU9OLVRPLUlOVEVSTkVULU9GLVRISU5HU1xcV29ya3NwYWNlXFxpU0FNL3NyY1xcYXBwXFxvZmZpY2VcXGxlY3R1cmVyc1xcbGVjdHVyZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvb2ZmaWNlL2xlY3R1cmVycy9sZWN0dXJlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMENBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL29mZmljZS9sZWN0dXJlcnMvbGVjdHVyZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjQzLCAyNDMpO1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tbGFiZWx7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmlvbi1pdGVte1xyXG4gICAgYm9yZGVyOiByZ2IoMzIsIDMyLCAzMikgc29saWQgMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4ucmVnaXN0ZXJMZWN0dXJlckZvcm1MYWJlbHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTVweDtcclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjQzLCAyNDMpO1xufVxuXG5pb24tY2FyZCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5pb24tbGFiZWwge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1pdGVtIHtcbiAgYm9yZGVyOiAjMjAyMDIwIHNvbGlkIDFweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucmVnaXN0ZXJMZWN0dXJlckZvcm1MYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/office/lecturers/lecturers.page.ts":
/*!****************************************************!*\
  !*** ./src/app/office/lecturers/lecturers.page.ts ***!
  \****************************************************/
/*! exports provided: LecturersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LecturersPage", function() { return LecturersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _side_menu_side_menu_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../side-menu/side-menu.page */ "./src/app/office/side-menu/side-menu.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _notifications_popover_notifications_popover_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../notifications-popover/notifications-popover.page */ "./src/app/office/notifications-popover/notifications-popover.page.ts");








let LecturersPage = class LecturersPage {
    constructor(lecturersService, formBuilder, alertController, sideMenuPageUserFaculty, modalController, popoverController, router) {
        this.lecturersService = lecturersService;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.sideMenuPageUserFaculty = sideMenuPageUserFaculty;
        this.modalController = modalController;
        this.popoverController = popoverController;
        this.router = router;
        this.showLoadingDots = false;
        this.pageLoadSearchLecturerText = true;
        this.registerLecturerLoadingSpinner = false;
        this.disableButton = false;
        this.enableButton = true;
        this.retrievePublishedUserStatuses = () => this.lecturersService.retrievePublishedUserStatuses().subscribe(response => (this.publishedUserStatuses = response));
        this.registeredLecturerCard = false;
    }
    ngOnInit() {
        this.loggedInUserFaculty = this.sideMenuPageUserFaculty.passLoggedInUserFaculty();
        this.retrievePublishedUserStatuses();
        // Setting loading dots to false after the contents has loaded.
        this.lecturersService.retrieveRegisteredLecturers().subscribe(() => this.showLoadingDots = false);
        this.searchRegisteredLecturerForm = this.formBuilder.group({
            nsbmId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            nsbmEmailAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
        this.lecturerRegistrationForm = this.formBuilder.group({
            nsbmLecturerId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)
            ])),
            nameTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            middleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            specialization: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            specializedFaculty: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            nsbmEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25)
            ])),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25)
            ])),
            lecturerStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            termsAndConditionsAgreement: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    }
    // Opening notifications popover
    openNotificationPopover(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const moreDetailsLectureSessionPopover = yield this.popoverController.create({
                component: _notifications_popover_notifications_popover_page__WEBPACK_IMPORTED_MODULE_7__["NotificationsPopoverPage"],
                componentProps: {
                    loggedInUserId: this.sideMenuPageUserFaculty.passLoggedInUserId()
                },
                event: ev
            });
            moreDetailsLectureSessionPopover.present();
        });
    }
    doSearchRegisteredLecturer(value) {
        // Response action if the user clicks the 'Search' button without entering a search value.
        if (value.nsbmId == "" && value.nsbmEmailAddress == "") {
            this.pageLoadSearchLecturerText = true;
            this.showLoadingDots = false;
            this.alertNotice("Error", "A search value was not entered.");
        }
        else {
            // Setting page content load text to false
            this.pageLoadSearchLecturerText = false;
            // Setting loading dots to true
            this.showLoadingDots = true;
        }
        // Searching for registered lecturer, retrieving value and showing the relevant response
        if (value.nsbmId != "") {
            this.lecturersService.searchRegisteredLecturerNSBMId(value.nsbmId).subscribe(response => {
                // Checking if any document values where returned
                if (response.length > 0) {
                    this.registeredLecturerCard = true;
                    // Setting loading dots to false
                    this.showLoadingDots = false;
                    // Disabling loading text
                    this.pageLoadSearchLecturerText = false;
                    // Assigning retrieved values to this variables
                    this.registeredLecturers = response.forEach(document => {
                        let firestoreDoc = document.payload.doc.data();
                        this.lecturerDocId = document.payload.doc.id;
                        this.lecturerNamePrefix = firestoreDoc.name.prefix;
                        this.lecturerNameFirstName = firestoreDoc.name.firstName;
                        this.lecturerNameMiddleName = firestoreDoc.name.middleName;
                        this.lecturerNameLastName = firestoreDoc.name.lastName;
                        this.lecturerNsbmLecturerId = firestoreDoc.nsbmLecturerId;
                        this.lecturerNsbmEmailAddress = firestoreDoc.nsbmEmailAddress;
                        this.lecturerStatus = firestoreDoc.status;
                        this.lecturerSpecializedFaculty = firestoreDoc.specializedFaculty;
                        this.lecturerSpecialization = firestoreDoc.specialization;
                    });
                    if (this.lecturerStatus == "Disabled") {
                        this.enableButton = true;
                    }
                    else if (this.lecturerStatus == "Active") {
                        this.disableButton = true;
                    }
                    console.log("Registered Lecturer Record Found");
                }
                else {
                    this.showLoadingDots = false;
                    this.alertNotice("Not Found", "Registered Lecturer Record with NSBM ID: " + value.nsbmId + ", is not available");
                    console.log("Registered Lecturer Record Not Found");
                }
            }, error => {
                console.log("Error: " + error);
                this.alertNotice("Error", "An error has occurred: " + error);
                this.showLoadingDots = false;
            });
        }
        else if (value.nsbmEmailAddress) {
            this.lecturersService.searchRegisteredLecturerNSBMEmail(value.nsbmEmailAddress).subscribe(response => {
                // Checking if any document values where returned
                if (response.length > 0) {
                    this.registeredLecturerCard = true;
                    // Setting loading dots to false
                    this.showLoadingDots = false;
                    // Disabling loading text
                    this.pageLoadSearchLecturerText = false;
                    // Assigning retrieved values to this variables
                    this.registeredLecturers = response.forEach(document => {
                        let firestoreDoc = document.payload.doc.data();
                        this.lecturerDocId = document.payload.doc.id;
                        this.lecturerNamePrefix = firestoreDoc.name.prefix;
                        this.lecturerNameFirstName = firestoreDoc.name.firstName;
                        this.lecturerNameMiddleName = firestoreDoc.name.middleName;
                        this.lecturerNameLastName = firestoreDoc.name.lastName;
                        this.lecturerNsbmLecturerId = firestoreDoc.nsbmLecturerId;
                        this.lecturerNsbmEmailAddress = firestoreDoc.nsbmEmailAddress;
                        this.lecturerStatus = firestoreDoc.status;
                        this.lecturerSpecializedFaculty = firestoreDoc.specializedFaculty;
                        this.lecturerSpecialization = firestoreDoc.specialization;
                    });
                    if (this.lecturerStatus == "Disabled") {
                        this.enableButton = true;
                    }
                    else if (this.lecturerStatus == "Active") {
                        this.disableButton = true;
                    }
                    console.log("Registered Lecturer Record Found");
                }
                else {
                    this.alertNotice("Not Found", "Registered Lecturer Record with NSBM Email Address: " + value.nsbmEmailAddress + ", is not available");
                    console.log("Registered Lecturer Record Not Found");
                }
            }, error => {
                console.log("Error: " + error);
                this.alertNotice("Error", "An error has occurred: " + error);
                this.showLoadingDots = false;
            });
        }
    }
    // Confirm Box Implementation (Disabling lecturer user account)
    disableLecturerAccount(title, content) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: title,
                message: content,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            console.log("Alert Box: Disable Lecturer User Account Request Denied");
                        }
                    },
                    {
                        text: 'Continue',
                        handler: () => {
                            console.log("Alert Box: Disable Lecturer User Account Request Accepted");
                            this.disableButton = false;
                            // Calling function to disable user account
                            this.lecturersService.disableUserAccount("lecturerUsers", this.lecturerDocId);
                            this.enableButton = true;
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // Confirm Box Implementation (Enabling lecturer user account)
    enableLecturerAccount(title, content) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: title,
                message: content,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            console.log("Alert Box: Enable Lecturer User Account Request Denied");
                        }
                    },
                    {
                        text: 'Continue',
                        handler: () => {
                            console.log("Alert Box: Enable Lecturer User Account Request Accepted");
                            this.enableButton = false;
                            // Calling function to disable user account
                            this.lecturersService.enableUserAccount("lecturerUsers", this.lecturerDocId);
                            this.disableButton = true;
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    /*
    // Opening more details module popover
    async moreDetailsRegisteredModule(ev: Event, value){
      const moreDetailsModulePopover = await this.popoverController.create({
        component: MoreDetailsLecturerPopoverPage,
        componentProps: {
          lecturerDocId: this.lecturerDocId,
          lecturerNsbmId:
        },
        event: ev
      });
  
      moreDetailsModulePopover.present();
    }
    */
    /*
      // Opening edit registered lecturer modal
      async editRegisteredModule(value){
        const editModuleModal = await this.modalController.create({
          component: EditModuleModalPage,
          // Passing values to the modal using 'componentProps'
          componentProps: {
            moduleDocId: value.payload.doc.id,
            moduleCode: value.payload.doc.data().moduleCode,
            moduleTitle: value.payload.doc.data().moduleTitle,
            moduleCreditsWeighting: value.payload.doc.data().creditsWeighting,
            moduleDegree: value.payload.doc.data().degree,
            moduleAwardingBodyUniversity: value.payload.doc.data().awardingBodyUniversity,
            moduleAcademicPeriodYear: value.payload.doc.data().academicPeriod.academicYear,
            moduleAcademicPeriodSemester: value.payload.doc.data().academicPeriod.academicSemester,
            moduleModuleLeader: value.payload.doc.data().moduleLeader,
            moduleAssignedLecturer: value.payload.doc.data().assignedLecturer,
            moduleAssignedLectureHall: value.payload.doc.data().assignedLectureHall,
            userFaculty: this.sideMenuPageUserFaculty.passUserFaculty()
          },
          // Disabling modal closing from any outside clicks
          backdropDismiss: false
        });
        editModuleModal.present();
      }
    */
    // Alert Box Implementation
    alertNotice(title, content) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: title,
                message: content,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    // Process of opening show terms and conditions modal
    showTermsAndCondtions() {
        console.log("Modal");
    }
    doLecturerRegistration(value) {
        /*-- Lecturer User Registration Process Phase --*/
        if (value.password == value.confirmPassword) {
            // Setting loading spinner to spin
            this.registerLecturerLoadingSpinner = true;
            // Firebase auth
            this.lecturersService.lecturerRegistrationDetails(value, this.sideMenuPageUserFaculty.passLoggedInUserId(), this.loggedInUserFaculty)
                .then(success => {
                // Setting loading spinner to stop spinning
                this.registerLecturerLoadingSpinner = false;
                console.log(" (Firebase Auth) Lecturer Credentials Registration Successful, " + success);
                // Displaying new leaturer user created confirmation in alert message 
                this.alertNotice('Lecturer Registration Successful', 'New lecturer has been registered. New record can be viewed from the "Registered Lecturers" section.');
                this.alertNotice('Alert', 'Program Office User logged out');
                console.log(success);
            }, error => {
                // Setting loading spinner to stop spinning
                this.registerLecturerLoadingSpinner = false;
                console.log(" (Firebase Auth) Lecturer Credentials Registration Failed, " + error);
                if (error == "Error: The email address is already in use by another account.") {
                    console.log(" NSBM email already inuse by another registered user(lecturer account) ");
                    // Displaying entered email already exists error in alert message 
                    this.alertNotice('NSBM Email Already Exists', 'Another user with the same NSBM email address already exists.');
                }
                else {
                    // Displaying new leaturer user created failure in alert message 
                    this.alertNotice('Lecturer Registration Failed', 'Error has occured, please contact web administrator');
                }
            });
        }
        else {
            this.lecturerRegistrationForm.invalid;
            console.log(" Entered passwords do not match ");
            // Displaying entered passwords not similar error in alert message 
            this.alertNotice('Passwords Mismatch', 'Entered passwords do not match, please re-check.');
        }
        /*-- Lecturer User Registration Process Phase --*/
    }
};
LecturersPage.ctorParameters = () => [
    { type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _side_menu_side_menu_page__WEBPACK_IMPORTED_MODULE_5__["SideMenuPage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
LecturersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lecturers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lecturers.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/lecturers/lecturers.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lecturers.page.scss */ "./src/app/office/lecturers/lecturers.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _side_menu_side_menu_page__WEBPACK_IMPORTED_MODULE_5__["SideMenuPage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], LecturersPage);



/***/ })

}]);
//# sourceMappingURL=lecturers-lecturers-module-es2015.js.map