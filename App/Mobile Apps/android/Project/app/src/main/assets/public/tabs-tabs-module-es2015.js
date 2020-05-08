(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\r\n\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"eSign\">\r\n      <ion-icon name=\"checkmark-done-outline\" color=\"success\"></ion-icon>\r\n      <ion-label>eSign</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"Attendance\">\r\n      <ion-icon name=\"copy-outline\" color=\"secondary\"></ion-icon>\r\n      <ion-label>Attendance</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"Notices\">\r\n      <ion-icon name=\"calendar-outline\"></ion-icon>\r\n      <ion-label>Notices and Calendar</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"EC-Form\">\r\n      <ion-icon name=\"mail-outline\" color=\"primary\"></ion-icon>\r\n      <ion-label>EC-Form</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"Settings\">\r\n      <ion-icon name=\"cog-outline\" color=\"dark\"></ion-icon>\r\n      <ion-label>Settings</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>\r\n");

/***/ }),

/***/ "./src/app/tabs/tabs-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");




const routes = [
    {
        path: 'student',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'eSign',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | student-esign-esign-module */ "student-esign-esign-module").then(__webpack_require__.bind(null, /*! ../student/esign/esign.module */ "./src/app/student/esign/esign.module.ts")).then(m => m.EsignPageModule)
                    }
                ]
            },
            {
                path: 'Attendance',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | student-attendance-attendance-module */[__webpack_require__.e("default~dashboard-dashboard-module~student-attendance-attendance-module"), __webpack_require__.e("student-attendance-attendance-module")]).then(__webpack_require__.bind(null, /*! ../student/attendance/attendance.module */ "./src/app/student/attendance/attendance.module.ts")).then(m => m.AttendancePageModule)
                    }
                ]
            },
            {
                path: 'Notices',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | student-notices-notices-module */ "student-notices-notices-module").then(__webpack_require__.bind(null, /*! ../student/notices/notices.module */ "./src/app/student/notices/notices.module.ts")).then(m => m.NoticesPageModule)
                    }
                ]
            },
            {
                path: 'EC-Form',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | student-ec-form-ec-form-module */[__webpack_require__.e("default~firebase-auth~login-login-module~signup-signup-module~student-ec-form-ec-form-module~student~de9b81cc"), __webpack_require__.e("default~firebase-messaging~login-login-module~signup-signup-module~student-ec-form-ec-form-module~st~88bf8aaa"), __webpack_require__.e("default~login-login-module~signup-signup-module~student-ec-form-ec-form-module~student-settings-sett~8ac94780"), __webpack_require__.e("student-ec-form-ec-form-module")]).then(__webpack_require__.bind(null, /*! ../student/ec-form/ec-form.module */ "./src/app/student/ec-form/ec-form.module.ts")).then(m => m.EcFormPageModule)
                    }
                ]
            },
            {
                path: 'Settings',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | student-settings-settings-module */[__webpack_require__.e("default~firebase-auth~login-login-module~signup-signup-module~student-ec-form-ec-form-module~student~de9b81cc"), __webpack_require__.e("default~firebase-messaging~login-login-module~signup-signup-module~student-ec-form-ec-form-module~st~88bf8aaa"), __webpack_require__.e("default~login-login-module~signup-signup-module~student-ec-form-ec-form-module~student-settings-sett~8ac94780"), __webpack_require__.e("student-settings-settings-module")]).then(__webpack_require__.bind(null, /*! ../student/settings/settings.module */ "./src/app/student/settings/settings.module.ts")).then(m => m.SettingsPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/student/eSign',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/student/eSign',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TabsPage = class TabsPage {
    constructor() { }
};
TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map