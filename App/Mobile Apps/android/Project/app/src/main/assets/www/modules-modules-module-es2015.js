(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-modules-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/modules/modules.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/modules/modules.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"height: 70px;\">\r\n  <ion-toolbar>\r\n\r\n\r\n    <!-- This will add a button to show the side menu when the side menu is hidden in small screens -->\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    \r\n    <ion-title style=\"position: absolute;\r\n                      top: 40%;\">Modules</ion-title>\r\n\r\n    <!-- Header Contents Section -->\r\n    <div style=\"position: absolute;\r\n                right: 5px;\r\n                top: 8px;\">\r\n      <!-- Notification Bell, Unread Notifications Count, Drop Down -->          \r\n\r\n      <ion-button fill=\"clear\" color=\"dark\" style=\"width: 100px;\r\n                                                  height: 45px;\r\n                                                  background-color: white;\" (click)=\"openNotificationPopover($event)\">\r\n\r\n        <!-- Notification Bell Icon -->\r\n        <div style=\"height: 42px;\r\n                  width: 42px;\"> \r\n          <ion-icon name=\"notifications-outline\" style=\"font-size: 35px;\r\n                                                        position: absolute;\r\n                                                        top: 5px;\r\n                                                        left: 0px;\"></ion-icon>\r\n        </div>\r\n\r\n          <!-- Arrow Icon -->\r\n        <div style=\"position: absolute;\r\n                    left: 50px;\r\n                    top: 10px;\r\n                    font-size: 26px;\">\r\n          <ion-icon name=\"chevron-down-outline\"></ion-icon>\r\n        </div>\r\n        \r\n      </ion-button>\r\n\r\n    </div>\r\n\r\n\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid>\r\n\r\n    <ion-row>\r\n\r\n      <ion-col>\r\n\r\n        <ion-card style=\"width: 100%;\">\r\n          <ion-card-header>\r\n            <ion-card-title>Search Registered Modules</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n\r\n            <form [formGroup]=\"searchRegisteredModuleForm\" (ngSubmit)=\"doSearchRegisteredModule(searchRegisteredModuleForm.value)\">\r\n              <ion-grid>\r\n                <ion-row>\r\n                    <ion-col size=\"3\">\r\n                      <ion-item style=\"min-width: 100%;\">\r\n                        <ion-input type=\"text\" clearInput style=\"min-width: 100%;\" placeholder=\"Enter Module Code\" formControlName=\"moduleCode\" (ionInput)=\"validateModuleCodeInput($event)\"></ion-input>\r\n                      </ion-item>\r\n                    </ion-col>\r\n                    <ion-col size=\"0.5\">\r\n                      <ion-label style=\"font-size: 20px;\r\n                                        position: absolute;\r\n                                        top: 50%;\r\n                                        left: 50%;\r\n                                        transform: translate(-50%, -50%);\">\r\n                        OR\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"3\">\r\n                      <ion-item style=\"min-width: 100%;\">\r\n                        <ion-input type=\"text\" clearInput style=\"min-width: 100%;\" placeholder=\"Enter Module Title\" formControlName=\"moduleTitle\" (ionInput)=\"validateModuleTitleInput($event)\"></ion-input>\r\n                      </ion-item>\r\n                    </ion-col>\r\n                    <ion-col size=\"0.5\">\r\n                      <ion-label style=\"font-size: 20px;\r\n                                        position: absolute;\r\n                                        top: 50%;\r\n                                        left: 50%;\r\n                                        transform: translate(-50%, -50%);\">\r\n                        OR\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"3\">\r\n                      <ion-item>\r\n                        <ion-label style=\"color: #ccc;\">\r\n                          Select Degree Program\r\n                        </ion-label>\r\n                        <ion-select cancelText=\"Cancel\" okText=\"Continue\" style=\"min-width: 40%;\" formControlName=\"degreeProgram\" (ionChange)=\"retrieveAwardingBodyUniversity($event)\">\r\n                          <ion-select-option *ngFor=\"let item of publishedDegreePrograms\" value=\"{{ item.payload.doc.data().degree }}\">{{ item.payload.doc.data().degree }}, {{ item.payload.doc.data().awardingBodyUniversity }}</ion-select-option>\r\n                        </ion-select>\r\n                      </ion-item>\r\n                    </ion-col>\r\n                    <ion-col size=\"2\">\r\n                      <ion-button expand=\"block\" type=\"submit\" style=\"margin-top: 0px;\r\n                                                                      min-height: 50px;\r\n                                                                      font-size: 18px;\" [disabled]=\"searchRegisteredModuleForm.valid\">\r\n                        <ion-icon name=\"search-outline\" style=\"margin-right: 10px;\"></ion-icon>\r\n                        SEARCH\r\n                      </ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </form>\r\n           \r\n            \r\n\r\n\r\n            <div style=\"overflow-y: scroll; \r\n                        height: 500px;\r\n                        margin-top: 15px;\r\n                        border-top: #ccc solid 1px;\">\r\n\r\n\r\n              <!-- Page loading search module text -->\r\n              <div *ngIf=\"pageLoadSearchModuleText\" style=\"position: absolute;\r\n                                                          top: 150px;\r\n                                                          left: 50%;\r\n                                                          transform: translateX(-50%);\r\n                                                          font-size: 18px;\r\n                                                          border: rgb(100, 116, 121) solid 2px;\r\n                                                          border-radius: 5px;\r\n                                                          padding: 15px;\r\n                                                          min-width: 53%;\">\r\n                <ion-icon name=\"chevron-up-circle-outline\" style=\"color: rgb(8, 177, 219);\r\n                                                                  font-size: 30px;\r\n                                                                  margin-top: 2px;\r\n                                                                  margin-right: 10px;\"></ion-icon>\r\n                <ion-label style=\"position: relative;\r\n                                  top: -5px;\">\r\n                  Please populate a field and click 'Search' button to search for a registered module.\r\n                </ion-label>\r\n              </div>\r\n\r\n              <!-- Loading Spinner -->\r\n              <ion-spinner name=\"dots\" style=\"position: absolute;\r\n                                              left: 50%;\r\n                                              transform: translateX(-50%);\r\n                                              margin-top: 20px;\r\n                                              height: 100px;\r\n                                              width: 100px;\" *ngIf=\"loadingSpinnerSearchRegisteredModule\"></ion-spinner>\r\n\r\n              <ion-grid>\r\n\r\n                <ion-row>\r\n\r\n                  <ion-col size=\"4\" size-sm=\"4\" size-lg=\"4\" *ngFor=\"let item of registeredModules\">\r\n\r\n                    <ion-card style=\"min-width: 100%;\r\n                                     min-height: 150px;\">\r\n                      <ion-card-header>\r\n                        <ion-card-title>{{ item.payload.doc.data().moduleCode }} - {{ item.payload.doc.data().moduleTitle }}</ion-card-title>\r\n                      </ion-card-header>\r\n                      <ion-card-content>\r\n                        <ion-label>\r\n                          <b>Credits:</b> {{ item.payload.doc.data().creditsWeighting }}\r\n                        </ion-label>\r\n                        <br>\r\n                        <ion-label>\r\n                          <b>Degree Program:</b> {{ item.payload.doc.data().degree }}, \r\n                        </ion-label>\r\n                        <br>\r\n                        <ion-label style=\"margin-left: 100px;\">\r\n                          {{ item.payload.doc.data().awardingBodyUniversity }} \r\n                        </ion-label>\r\n                        <br>\r\n                        <ion-label>\r\n                          <b>Module Leader:</b> {{ item.payload.doc.data().moduleLeader }} \r\n                        </ion-label>\r\n                        <br>\r\n                        <ion-label>\r\n                          <b>Academic Period:</b> Year {{ item.payload.doc.data().academicPeriod.academicYear }}, Semester {{ item.payload.doc.data().academicPeriod.academicSemester }}  \r\n                        </ion-label>\r\n\r\n                        <ion-grid>\r\n                          <ion-row>\r\n                            <ion-col>\r\n                              <ion-button expand=\"block\" color=\"secondary\" style=\"min-width: 100%;\" (click)=\"moreDetailsRegisteredModule($event, item)\">\r\n                                <ion-icon name=\"document-text\" style=\"font-size: 25px;\r\n                                                                      margin-right: 5px;\"></ion-icon>\r\n                                More Details\r\n                              </ion-button>\r\n                            </ion-col>\r\n                            <ion-col>\r\n                              <ion-button expand=\"block\" color=\"warning\" style=\"min-width: 100%;\" (click)=\"editRegisteredModule(item)\">\r\n                                <ion-icon name=\"create\" style=\"font-size: 25px;\r\n                                                              margin-right: 5px;\r\n                                                              color: white;\"></ion-icon>\r\n                                <ion-label style=\"color: white;\">\r\n                                  Edit Details\r\n                                </ion-label>\r\n                              </ion-button>\r\n                            </ion-col>\r\n                            <ion-col>\r\n                              <ion-button expand=\"block\" color=\"danger\" style=\"min-width: 100%;\" (click)=\"removeRegisteredModule('Confirmation Required', 'Module will be removed, do you want to continue?' , item.payload.doc.id)\">\r\n                                <ion-icon name=\"trash\" style=\"font-size: 25px;\r\n                                                              margin-right: 5px;\"></ion-icon>\r\n                                Remove\r\n                              </ion-button>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                        </ion-grid>\r\n\r\n                      </ion-card-content>\r\n\r\n                    </ion-card>\r\n\r\n                  </ion-col>\r\n\r\n                </ion-row>\r\n\r\n              </ion-grid>\r\n            </div>\r\n\r\n\r\n          </ion-card-content>\r\n        </ion-card>\r\n      \r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n               \r\n              <ion-card style=\"margin-top: -10px;\">\r\n                <ion-card-header>\r\n                  <ion-card-title>Register Module</ion-card-title>\r\n                </ion-card-header>\r\n                <ion-card-content>\r\n\r\n                \r\n                  <form [formGroup]=\"registerModuleForm\" (ngSubmit)=\"doRegisterModule(registerModuleForm.value)\"> \r\n                    <ion-grid>\r\n                      <ion-row>\r\n\r\n                        <ion-col size=\"12\" size-md=\"6\" size-lg=\"6\">\r\n\r\n                          <ion-label class=\"registerModuleFormLabel\">\r\n                            Module Code\r\n                          </ion-label>\r\n\r\n                        </ion-col>\r\n                        <ion-col size=\"12\" size-md=\"6\" size-lg=\"6\">\r\n                          <ion-item class=\"registerModuleFormItem\">\r\n                            <ion-input type=\"text\" placeholder=\"Code\" clearInput formControlName=\"moduleCode\"></ion-input>\r\n                          </ion-item>\r\n                        </ion-col>\r\n\r\n                      </ion-row>\r\n                      <ion-row>\r\n\r\n                        <ion-col size=\"12\" size-md=\"6\" size-lg=\"6\">\r\n                          <ion-label class=\"registerModuleFormLabel\">\r\n                            Module Title\r\n                          </ion-label>\r\n                        </ion-col>\r\n                        <ion-col size=\"12\" size-md=\"6\" size-lg=\"6\">\r\n                          <ion-item class=\"registerModuleFormItem\">\r\n                            <ion-input type=\"text\" placeholder=\"Title\" clearInput formControlName=\"moduleTitle\"></ion-input>\r\n                          </ion-item>\r\n                        </ion-col>\r\n\r\n                      </ion-row>\r\n                      <ion-row>\r\n\r\n                        <ion-col size=\"12\" size-md=\"6\" size-lg=\"6\">\r\n                          <ion-label class=\"registerModuleFormLabel\">\r\n                            Credits Weighting\r\n                          </ion-label>\r\n                        </ion-col>\r\n                        <ion-col size=\"12\" size-md=\"6\" size-lg=\"6\">\r\n                          <ion-item cancelText=\"Cancel\" okText=\"Continue\" class=\"registerModuleFormItem\">\r\n                            <ion-label class=\"registerModuleUserInputLabel\">Credits Weighting</ion-label>\r\n                            <ion-select placeholder=\"Credits\" cancelText=\"Cancel\" okText=\"Continue\" style=\"min-width: 100%;\" formControlName=\"creditsWeighting\">\r\n                              <ion-select-option *ngFor=\"let item of publishedModuleCreditsWeighting\" value=\"{{ item.payload.doc.data().creditsWeighting }}\">{{ item.payload.doc.data().creditsWeighting }} credits</ion-select-option>\r\n                            </ion-select>\r\n                          </ion-item>\r\n                        </ion-col>\r\n\r\n                      </ion-row>\r\n                      <ion-row>\r\n\r\n                        <ion-col size=\"12\" size-md=\"6\" size-lg=\"6\">\r\n                          <ion-label class=\"registerModuleFormLabel\">\r\n                            Degree Program\r\n                          </ion-label>\r\n                        </ion-col>\r\n                        <ion-col size=\"12\" size-md=\"6\" size-lg=\"6\">\r\n\r\n                          <ion-item class=\"registerModuleFormItem\">\r\n                            <ion-label class=\"registerModuleUserInputLabel\">Degree</ion-label>\r\n                            <ion-select cancelText=\"Cancel\" okText=\"Continue\" style=\"min-width: 80%;\" formControlName=\"degreeProgram\" (ionChange)=\"retrieveAwardingBodyUniversity($event)\">\r\n                              <ion-select-option *ngFor=\"let item of publishedDegreePrograms\" \r\n                                value=\"{{ item.payload.doc.data().degree }}\">\r\n                                {{ item.payload.doc.data().degree }}, {{ item.payload.doc.data().awardingBodyUniversity }}</ion-select-option>\r\n                            </ion-select>\r\n                          </ion-item>\r\n\r\n                        </ion-col>\r\n\r\n                      </ion-row>\r\n                      <ion-row>\r\n\r\n                        <ion-col size=\"12\" size-md=\"6\" size-lg=\"6\">\r\n                          <ion-label class=\"registerModuleFormLabel\" style=\"top: 15px;\">\r\n                            Academic Period\r\n                          </ion-label>\r\n                        </ion-col>\r\n                        <ion-col size=\"12\" size-md=\"6\" size-lg=\"6\">\r\n\r\n                          <div style=\"border: #ccc solid 1px;\r\n                                          border-radius: 5px;\">\r\n\r\n                            <ion-row>\r\n                              <ion-select placeholder=\"Year\" style=\"min-width: 95%;\" formControlName=\"academicPeriodYear\">\r\n                                <ion-select-option value=\"1\">Year 1</ion-select-option>\r\n                                <ion-select-option value=\"2\">Year 2</ion-select-option>\r\n                                <ion-select-option value=\"3\">Year 3</ion-select-option>\r\n                                <ion-select-option value=\"4\">Year 4</ion-select-option>\r\n                              </ion-select>\r\n                            </ion-row>\r\n                            <ion-row>\r\n                              <ion-select placeholder=\"Semester\" style=\"min-width: 95%;\" formControlName=\"academicPeriodSemester\">\r\n                                <ion-select-option value=\"1\">Semester 1</ion-select-option>\r\n                                <ion-select-option value=\"2\">Semester 2</ion-select-option>\r\n                                <ion-select-option value=\"3\">Semester 3</ion-select-option>\r\n                                <ion-select-option value=\"4\">Semester 4</ion-select-option>\r\n                              </ion-select>\r\n                            </ion-row>\r\n\r\n                          </div>\r\n\r\n                        </ion-col>\r\n\r\n                      </ion-row>\r\n                      <ion-row>\r\n\r\n                        <ion-col size=\"12\" size-md=\"6\" size-lg=\"6\">\r\n                          <ion-label class=\"registerModuleFormLabel\" style=\"top: 15px;\">\r\n                            Module Leader\r\n                          </ion-label>\r\n                        </ion-col>\r\n                        <ion-col size=\"12\" size-md=\"6\" size-lg=\"6\">\r\n\r\n                          <ion-item class=\"registerModuleFormItem\">\r\n                            <ion-label class=\"registerModuleUserInputLabel\">Module Leader</ion-label>\r\n                            <ion-select placeholder=\"Leader\" cancelText=\"Cancel\" okText=\"Continue\" style=\"min-width: 100%;\" formControlName=\"moduleLeader\">\r\n                              <ion-select-option *ngFor=\"let item of registeredLecturerUsers\" \r\n                                value=\"{{ item.payload.doc.data().name.prefix }} {{ item.payload.doc.data().name.firstName }} {{ item.payload.doc.data().name.lastName }}\">\r\n                                {{ item.payload.doc.data().name.prefix }} {{ item.payload.doc.data().name.firstName }} {{ item.payload.doc.data().name.lastName }}\r\n                              </ion-select-option>\r\n                            </ion-select>\r\n                          </ion-item>\r\n\r\n                        </ion-col>\r\n\r\n                      </ion-row>\r\n                      <ion-row>\r\n\r\n                        <ion-col size=\"12\" size-md=\"6\" size-lg=\"6\">\r\n                          <ion-label class=\"registerModuleFormLabel\" style=\"top: 15px;\">\r\n                            Assigned Lecturer\r\n                          </ion-label>\r\n                        </ion-col>\r\n                        <ion-col size=\"12\" size-md=\"6\" size-lg=\"6\">\r\n\r\n                          <ion-item class=\"registerModuleFormItem\">\r\n                            <ion-label class=\"registerModuleUserInputLabel\">Assigned Lecturer</ion-label>\r\n                            <ion-select placeholder=\"Lecturer\" cancelText=\"Cancel\" okText=\"Continue\" style=\"min-width: 100%;\" formControlName=\"assignedLecturer\">\r\n                              <ion-select-option *ngFor=\"let item of registeredLecturerUsers\" \r\n                                value=\"{{ item.payload.doc.data().name.prefix }} {{ item.payload.doc.data().name.firstName }} {{ item.payload.doc.data().name.lastName }}\">\r\n                                {{ item.payload.doc.data().name.prefix }} {{ item.payload.doc.data().name.firstName }} {{ item.payload.doc.data().name.lastName }}\r\n                              </ion-select-option>\r\n                            </ion-select>\r\n                          </ion-item>\r\n\r\n                        </ion-col>\r\n\r\n                      </ion-row>\r\n                      <ion-row>\r\n\r\n                        <ion-col size=\"12\" size-md=\"6\" size-lg=\"6\">\r\n                          <ion-label class=\"registerModuleFormLabel\" style=\"top: 15px;\">\r\n                            Assigned Lecture Hall\r\n                          </ion-label>\r\n                        </ion-col>\r\n                        <ion-col size=\"12\" size-md=\"6\" size-lg=\"6\">\r\n\r\n                          <ion-item class=\"registerModuleFormItem\">\r\n                            <ion-label class=\"registerModuleUserInputLabel\">Assigned Lecture Hall</ion-label>\r\n                            <ion-select placeholder=\"Lecture Hall\" cancelText=\"Cancel\" okText=\"Continue\" style=\"min-width: 100%;\" formControlName=\"assignedLectureHall\">\r\n                              <ion-select-option *ngFor=\"let item of publishedLectureHalls\" value=\"{{ item.payload.doc.data().lectureHall }}\">{{ item.payload.doc.data().lectureHall }}</ion-select-option>\r\n                            </ion-select>\r\n                          </ion-item>\r\n\r\n                        </ion-col>\r\n\r\n                      </ion-row>\r\n                      <ion-row>\r\n\r\n                        <ion-col>\r\n                          <ion-button  style=\"position: relative;\r\n                                              left: 50%;\r\n                                              transform: translateX(-50%);\" type=\"submit\">                      \r\n                            Register\r\n                          </ion-button>\r\n                        </ion-col>\r\n\r\n                      </ion-row>\r\n\r\n\r\n\r\n                    </ion-grid>\r\n                  </form>\r\n\r\n\r\n                </ion-card-content>\r\n              </ion-card>\r\n\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/office/modules/modules-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/office/modules/modules-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: ModulesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulesPageRoutingModule", function() { return ModulesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modules_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules.page */ "./src/app/office/modules/modules.page.ts");




const routes = [
    {
        path: '',
        component: _modules_page__WEBPACK_IMPORTED_MODULE_3__["ModulesPage"]
    }
];
let ModulesPageRoutingModule = class ModulesPageRoutingModule {
};
ModulesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModulesPageRoutingModule);



/***/ }),

/***/ "./src/app/office/modules/modules.module.ts":
/*!**************************************************!*\
  !*** ./src/app/office/modules/modules.module.ts ***!
  \**************************************************/
/*! exports provided: ModulesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulesPageModule", function() { return ModulesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _modules_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules-routing.module */ "./src/app/office/modules/modules-routing.module.ts");
/* harmony import */ var _modules_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules.page */ "./src/app/office/modules/modules.page.ts");







let ModulesPageModule = class ModulesPageModule {
};
ModulesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modules_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModulesPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_modules_page__WEBPACK_IMPORTED_MODULE_6__["ModulesPage"]]
    })
], ModulesPageModule);



/***/ }),

/***/ "./src/app/office/modules/modules.page.scss":
/*!**************************************************!*\
  !*** ./src/app/office/modules/modules.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color: rgb(243, 243, 243);\n}\n\nion-card {\n  --ion-background-color: white;\n}\n\nion-label {\n  color: black;\n}\n\nion-item {\n  border: #202020 solid 1px;\n  border-radius: 5px;\n}\n\n.registerModuleFormItem {\n  border: #ccc solid 1px;\n}\n\n.registerModuleUserInputLabel {\n  color: #ccc;\n}\n\n.registerModuleFormLabel {\n  position: relative;\n  top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ZmaWNlL21vZHVsZXMvQzpcXFVzZXJzXFxyYW51bFxcRG9jdW1lbnRzXFxHaXRIdWJcXDJuZCBZZWFyXFwybmQgU2VtZXN0ZXJcXFVPUF9TRV9ZMlMyLVBVU0wyMDA4LUlOVFJPRFVDVElPTi1UTy1JTlRFUk5FVC1PRi1USElOR1NcXFdvcmtzcGFjZVxcaVNBTS9zcmNcXGFwcFxcb2ZmaWNlXFxtb2R1bGVzXFxtb2R1bGVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvb2ZmaWNlL21vZHVsZXMvbW9kdWxlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQ0FBQTtBQ0NKOztBREVBO0VBQ0ksNkJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL29mZmljZS9tb2R1bGVzL21vZHVsZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAyNDMsIDI0Myk7XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1sYWJlbHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuaW9uLWl0ZW17XHJcbiAgICBib3JkZXI6IHJnYigzMiwgMzIsIDMyKSBzb2xpZCAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5yZWdpc3Rlck1vZHVsZUZvcm1JdGVte1xyXG4gICAgYm9yZGVyOiAjY2NjIHNvbGlkIDFweDs7XHJcbn1cclxuXHJcbi5yZWdpc3Rlck1vZHVsZVVzZXJJbnB1dExhYmVse1xyXG4gICAgY29sb3I6ICNjY2M7XHJcbn1cclxuXHJcbi5yZWdpc3Rlck1vZHVsZUZvcm1MYWJlbHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTVweDtcclxufVxyXG4iLCJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDI0MywgMjQzKTtcbn1cblxuaW9uLWNhcmQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pb24taXRlbSB7XG4gIGJvcmRlcjogIzIwMjAyMCBzb2xpZCAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnJlZ2lzdGVyTW9kdWxlRm9ybUl0ZW0ge1xuICBib3JkZXI6ICNjY2Mgc29saWQgMXB4O1xufVxuXG4ucmVnaXN0ZXJNb2R1bGVVc2VySW5wdXRMYWJlbCB7XG4gIGNvbG9yOiAjY2NjO1xufVxuXG4ucmVnaXN0ZXJNb2R1bGVGb3JtTGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/office/modules/modules.page.ts":
/*!************************************************!*\
  !*** ./src/app/office/modules/modules.page.ts ***!
  \************************************************/
/*! exports provided: ModulesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulesPage", function() { return ModulesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _side_menu_side_menu_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../side-menu/side-menu.page */ "./src/app/office/side-menu/side-menu.page.ts");
/* harmony import */ var _edit_module_modal_edit_module_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-module-modal/edit-module-modal.page */ "./src/app/office/modules/edit-module-modal/edit-module-modal.page.ts");
/* harmony import */ var _more_details_module_popover_more_details_module_popover_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./more-details-module-popover/more-details-module-popover.page */ "./src/app/office/modules/more-details-module-popover/more-details-module-popover.page.ts");
/* harmony import */ var _notifications_popover_notifications_popover_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../notifications-popover/notifications-popover.page */ "./src/app/office/notifications-popover/notifications-popover.page.ts");









let ModulesPage = class ModulesPage {
    constructor(modulesService, formBuilder, alertController, modalController, popoverController, sideMenuPageUserFaculty) {
        this.modulesService = modulesService;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.modalController = modalController;
        this.popoverController = popoverController;
        this.sideMenuPageUserFaculty = sideMenuPageUserFaculty;
        // Loading spinner variable declaration
        this.loadingSpinnerSearchRegisteredModule = false;
        // Page load search module text variable declaration
        this.pageLoadSearchModuleText = true;
        this.retrievePublishedModuleCreditsWeightingActive = () => {
            this.modulesService.retrievePublishedModuleCreditsWeightingActive().subscribe(response => (this.publishedModuleCreditsWeighting = response));
        };
        this.retrievePublishedDegreeProgram = () => {
            this.modulesService.retrievePublishedDegreeProgram(this.sideMenuPageUserFaculty.passLoggedInUserFaculty()).subscribe(response => (this.publishedDegreePrograms = response));
        };
        this.retrieveRegisteredLecturers = () => {
            this.modulesService.retrieveRegisteredLecturers().subscribe(response => (this.registeredLecturerUsers = response));
        };
        this.retrievePublishedLectureHalls = () => {
            this.modulesService.retrievePublishedLectureHalls(this.sideMenuPageUserFaculty.passLoggedInUserFaculty()).subscribe(response => (this.publishedLectureHalls = response));
        };
    }
    ngOnInit() {
        // Disabling the button to search for registered modules upon load
        this.searchRegisteredModuleButtonDisabled = "true";
        this.retrievePublishedModuleCreditsWeightingActive();
        this.retrievePublishedDegreeProgram();
        this.retrieveRegisteredLecturers();
        this.retrievePublishedLectureHalls();
        this.searchRegisteredModuleForm = this.formBuilder.group({
            moduleCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            moduleTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            degreeProgram: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.registerModuleForm = this.formBuilder.group({
            moduleCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            moduleTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            creditsWeighting: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            degreeProgram: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            academicPeriod: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            academicPeriodYear: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            academicPeriodSemester: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            moduleLeader: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            assignedLecturer: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            assignedLectureHall: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    // Opening notifications popover
    openNotificationPopover(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const moreDetailsLectureSessionPopover = yield this.popoverController.create({
                component: _notifications_popover_notifications_popover_page__WEBPACK_IMPORTED_MODULE_8__["NotificationsPopoverPage"],
                componentProps: {
                    loggedInUserId: this.sideMenuPageUserFaculty.passLoggedInUserId()
                },
                event: ev
            });
            moreDetailsLectureSessionPopover.present();
        });
    }
    // Implementation of generating an array for the count of, no of years and no of semesters
    convertToArray(n) {
        return Array(n);
    }
    retrieveAwardingBodyUniversity(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let selectedDegree = event.detail.value;
            // Retrieving the awardingBody University of the selected degree
            this.modulesService.retrievingAwardingBodyUniversityOfDegree(selectedDegree, this.sideMenuPageUserFaculty.passLoggedInUserFaculty()).subscribe(response => (this.publishedDegreeProgram =
                response.forEach(document => {
                    let firestoreDoc = document.payload.doc.data();
                    this.awardingBodyUniversity = firestoreDoc.awardingBodyUniversity;
                    console.log(this.awardingBodyUniversity);
                })));
        });
    }
    // Checking if user entered a value to module code field (Search Registered Module section)
    validateModuleCodeInput(evModuleCode) {
        // Assigning entered value into this variable
        let moduleCodeValue = evModuleCode.target.value;
        // If field is not empty, search registered modules button will be enabled
        if (moduleCodeValue != "") {
            this.searchRegisteredModuleButtonDisabled = "false";
        } // If field id empty, search registered modules button will be disabled
        else if (moduleCodeValue == "") {
            this.searchRegisteredModuleButtonDisabled = "true";
        }
    }
    // Checking if user entered a value to module title field (Search Registered Module section)
    validateModuleTitleInput(evModuleTitle) {
        // Assigning entered value into this variable
        let moduleTitleValue = evModuleTitle.target.value;
        // If field is not empty, search registered modules button will be enabled
        if (moduleTitleValue != "") {
            this.searchRegisteredModuleButtonDisabled = "false";
        } // If field id empty, search registered modules button will be disabled
        else if (moduleTitleValue == "") {
            this.searchRegisteredModuleButtonDisabled = "true";
        }
    }
    // Checking if user entered a value to degree program field (Search Registered Module section)
    validateDegreeProgramSelect(evDegreeProgram) {
        // Assigning entered value into this variable
        let degreeProgramValue = evDegreeProgram.target.value;
        // If field is not empty, search registered modules button will be enabled
        if (degreeProgramValue != "") {
            this.searchRegisteredModuleButtonDisabled = "false";
        } // If field id empty, search registered modules button will be disabled
        else if (degreeProgramValue == "") {
            this.searchRegisteredModuleButtonDisabled = "true";
        }
    }
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
    doSearchRegisteredModule(value) {
        // Setting page load search module text to false
        this.pageLoadSearchModuleText = false;
        // Setting loading spinner as true until necessary content is loaded
        this.loadingSpinnerSearchRegisteredModule = true;
        // Depending on the user's input the necessary reponse and operation is taken
        if (value.moduleCode != "" && value.moduleTitle != "" && value.degreeProgram != "") {
            // Alert notice with relavant message
            this.alertNotice("ALERT", "You have entered a Module Code, Title and selected a Degree Program. Module search will proceed with the Module Code");
            // Retrieving registered modules with the search value of moduleCode
            this.modulesService.retrieveRegisterdModulesModuleCode(this.sideMenuPageUserFaculty.passLoggedInUserFaculty(), value.moduleCode).subscribe(response => (this.registeredModules = response));
            // Assigning loading spinner to false upon the necessary content has loaded
            this.modulesService.retrieveRegisterdModulesModuleCode(this.sideMenuPageUserFaculty.passLoggedInUserFaculty(), value.moduleCode).subscribe(() => this.loadingSpinnerSearchRegisteredModule = false);
        }
        else if (value.moduleCode != "" && value.moduleTitle) {
            // Alert notice with relavant message
            this.alertNotice("ALERT", "You have entered a Module Code and Title. Module search will proceed with the Module Code");
            // Retrieving registered modules with the search value of moduleCode
            this.modulesService.retrieveRegisterdModulesModuleCode(this.sideMenuPageUserFaculty.passLoggedInUserFaculty(), value.moduleCode).subscribe(response => (this.registeredModules = response));
            // Assigning loading spinner to false upon the necessary content has loaded
            this.modulesService.retrieveRegisterdModulesModuleCode(this.sideMenuPageUserFaculty.passLoggedInUserFaculty(), value.moduleCode).subscribe(() => this.loadingSpinnerSearchRegisteredModule = false);
        }
        else if (value.moduleTitle != "" && value.degreeProgram != "") {
            // Alert notice with relavant message
            this.alertNotice("ALERT", "You have entered a Module Title and selected a Degree Program. Module search will proceed with the Module Title");
            // Retrieving registered modules with the search value of moduleTitle
            this.modulesService.retrieveRegisterdModulesModuleTitle(this.sideMenuPageUserFaculty.passLoggedInUserFaculty(), value.moduleTitle).subscribe(response => (this.registeredModules = response));
            // Assigning loading spinner to false upon the necessary content has loaded
            this.modulesService.retrieveRegisterdModulesModuleTitle(this.sideMenuPageUserFaculty.passLoggedInUserFaculty(), value.moduleTitle).subscribe(() => this.loadingSpinnerSearchRegisteredModule = false);
        }
        else if (value.moduleCode != "" && value.degreeProgram != "") {
            // Alert notice with relavant message
            this.alertNotice("ALERT", "You have entered a Module Code and selected a Degree Program. Module search will proceed with the Module Code");
            // Retrieving registered modules with the search value of moduleCode
            this.modulesService.retrieveRegisterdModulesModuleCode(this.sideMenuPageUserFaculty.passLoggedInUserFaculty(), value.moduleCode).subscribe(response => (this.registeredModules = response));
            // Assigning loading spinner to false upon the necessary content has loaded
            this.modulesService.retrieveRegisterdModulesModuleCode(this.sideMenuPageUserFaculty.passLoggedInUserFaculty(), value.moduleCode).subscribe(() => this.loadingSpinnerSearchRegisteredModule = false);
        }
        else if (value.moduleCode != "" || value.moduleTitle != "" || value.degreeProgram != "") {
            if (value.moduleCode != "") {
                // Retrieving registered modules with the search value of moduleCode
                this.modulesService.retrieveRegisterdModulesModuleCode(this.sideMenuPageUserFaculty.passLoggedInUserFaculty(), value.moduleCode).subscribe(response => (this.registeredModules = response));
                // Assigning loading spinner to false upon the necessary content has loaded
                this.modulesService.retrieveRegisterdModulesModuleCode(this.sideMenuPageUserFaculty.passLoggedInUserFaculty(), value.moduleCode).subscribe(() => this.loadingSpinnerSearchRegisteredModule = false);
            }
            if (value.moduleTitle != "") {
                // Retrieving registered modules with the search value of moduleTitle
                this.modulesService.retrieveRegisterdModulesModuleTitle(this.sideMenuPageUserFaculty.passLoggedInUserFaculty(), value.moduleTitle).subscribe(response => (this.registeredModules = response));
                // Assigning loading spinner to false upon the necessary content has loaded
                this.modulesService.retrieveRegisterdModulesModuleTitle(this.sideMenuPageUserFaculty.passLoggedInUserFaculty(), value.moduleTitle).subscribe(() => this.loadingSpinnerSearchRegisteredModule = false);
            }
            if (value.degreeProgram != "") {
                // Retrieving registered modules with the search value of degreeProgram
                this.modulesService.retrieveRegisterdModulesDegreeProgram(this.sideMenuPageUserFaculty.passLoggedInUserFaculty(), value.degreeProgram, this.awardingBodyUniversity).subscribe(response => (this.registeredModules = response));
                // Assigning loading spinner to false upon the necessary content has loaded
                this.modulesService.retrieveRegisterdModulesDegreeProgram(this.sideMenuPageUserFaculty.passLoggedInUserFaculty(), value.degreeProgram, this.awardingBodyUniversity).subscribe(() => this.loadingSpinnerSearchRegisteredModule = false);
            }
        }
    }
    // Opening more details module popover
    moreDetailsRegisteredModule(ev, value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const moreDetailsModulePopover = yield this.popoverController.create({
                component: _more_details_module_popover_more_details_module_popover_page__WEBPACK_IMPORTED_MODULE_7__["MoreDetailsModulePopoverPage"],
                componentProps: {
                    moduleDocId: value.payload.doc.id,
                    assignedLecturer: value.payload.doc.data().assignedLecturer,
                    assignedLectureHall: value.payload.doc.data().assignedLectureHall
                },
                event: ev
            });
            moreDetailsModulePopover.present();
        });
    }
    // Opening edit module modal 
    editRegisteredModule(value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const editModuleModal = yield this.modalController.create({
                component: _edit_module_modal_edit_module_modal_page__WEBPACK_IMPORTED_MODULE_6__["EditModuleModalPage"],
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
                    userFaculty: this.sideMenuPageUserFaculty.passLoggedInUserFaculty()
                },
                // Disabling modal closing from any outside clicks
                backdropDismiss: false
            });
            editModuleModal.present();
        });
    }
    // Confirm Box Implementation (Remove registered module process)
    removeRegisteredModule(title, content, DocId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: title,
                message: content,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            console.log("Alert Box: Remove Registered Module Request Denied");
                        }
                    },
                    {
                        text: 'Continue',
                        handler: () => {
                            console.log("Alert Box: Remove Registered Module Request Accepted");
                            // Calling function to remove lecture session
                            this.modulesService.removeRegisteredModule(this.sideMenuPageUserFaculty.passLoggedInUserFaculty(), DocId);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // Function for the process of searching modules
    doRegisterModule(value) {
        console.log(value);
        // Calling the function to add the details into firestore database by passing the necessary value.
        this.modulesService.registerModule(this.sideMenuPageUserFaculty.passLoggedInUserFaculty(), value, this.awardingBodyUniversity);
        this.alertNotice("Module Registered", "Module has been registered.");
    }
};
ModulesPage.ctorParameters = () => [
    { type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
    { type: _side_menu_side_menu_page__WEBPACK_IMPORTED_MODULE_5__["SideMenuPage"] }
];
ModulesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modules',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modules.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/modules/modules.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modules.page.scss */ "./src/app/office/modules/modules.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"],
        _side_menu_side_menu_page__WEBPACK_IMPORTED_MODULE_5__["SideMenuPage"]])
], ModulesPage);



/***/ })

}]);
//# sourceMappingURL=modules-modules-module-es2015.js.map