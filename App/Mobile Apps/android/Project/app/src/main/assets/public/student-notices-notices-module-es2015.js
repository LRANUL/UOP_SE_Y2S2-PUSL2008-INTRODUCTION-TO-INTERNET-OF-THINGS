(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["student-notices-notices-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/notices/notices.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/notices/notices.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n   <div class=\"ion-page\" id=\"main-content\">\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Notices & Calendar</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content class=\"ion-padding\">\r\n        <div>\r\n          <ion-item>\r\n          <ion-card>\r\n            <ion-card-title>Calendar</ion-card-title>\r\n            <calendar [eventSource]=\"eventSource\" [calendarMode]=\"calendar.mode\" [currentDate]=\"calendar.currentDate\">\r\n            </calendar>\r\n          </ion-card>\r\n          </ion-item>\r\n        </div>\r\n    <div>\r\n      <ion-card *ngFor=\"let item of notices\">\r\n        <ion-card-header>\r\n          <ion-card-title>{{item.noticeTitle}}</ion-card-title>\r\n        </ion-card-header> \r\n        <ion-card-content>\r\n          <p class=\"card-text\">{{item.noticeDescription}}</p>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </div>\r\n    </ion-content>\r\n  </div>\r\n</ion-app>\r\n");

/***/ }),

/***/ "./src/app/student/notices/notices-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/student/notices/notices-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: NoticesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticesPageRoutingModule", function() { return NoticesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _notices_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notices.page */ "./src/app/student/notices/notices.page.ts");




const routes = [
    {
        path: '',
        component: _notices_page__WEBPACK_IMPORTED_MODULE_3__["NoticesPage"]
    }
];
let NoticesPageRoutingModule = class NoticesPageRoutingModule {
};
NoticesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NoticesPageRoutingModule);



/***/ }),

/***/ "./src/app/student/notices/notices.module.ts":
/*!***************************************************!*\
  !*** ./src/app/student/notices/notices.module.ts ***!
  \***************************************************/
/*! exports provided: NoticesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticesPageModule", function() { return NoticesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _notices_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notices-routing.module */ "./src/app/student/notices/notices-routing.module.ts");
/* harmony import */ var _notices_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notices.page */ "./src/app/student/notices/notices.page.ts");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic2-calendar */ "./node_modules/ionic2-calendar/index.js");








let NoticesPageModule = class NoticesPageModule {
};
NoticesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _notices_routing_module__WEBPACK_IMPORTED_MODULE_5__["NoticesPageRoutingModule"],
            ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__["NgCalendarModule"]
        ],
        declarations: [_notices_page__WEBPACK_IMPORTED_MODULE_6__["NoticesPage"]]
    })
], NoticesPageModule);



/***/ }),

/***/ "./src/app/student/notices/notices.page.scss":
/*!***************************************************!*\
  !*** ./src/app/student/notices/notices.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvbm90aWNlcy9ub3RpY2VzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/student/notices/notices.page.ts":
/*!*************************************************!*\
  !*** ./src/app/student/notices/notices.page.ts ***!
  \*************************************************/
/*! exports provided: NoticesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticesPage", function() { return NoticesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_firestore___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore/ */ "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");






let NoticesPage = class NoticesPage {
    constructor(firestore, firebase, router, route, menu, navCtrl) {
        this.firestore = firestore;
        this.firebase = firebase;
        this.router = router;
        this.route = route;
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.eventSource = [];
        this.calendar = {
            mode: 'month',
            currentDate: new Date(),
        };
        this.selectedDate = new Date();
        var Batch;
        var Faculty;
        var DegreeCode;
        this.firestore.collection('/users/userTypes/studentUsers').doc(this.firebase.userDetails().uid).ref.get().then((doc) => {
            if (doc.exists) {
                // console.log(doc.data());
                Batch = doc.data().batch.toString();
                Faculty = doc.data().faculty;
                DegreeCode = doc.data().DegreeCode;
                this.firestore.collection('faculties').doc(Faculty).collection('allLectureSessions').snapshotChanges().subscribe(keys => {
                    this.eventSource = [];
                    keys.forEach(key => {
                        let event = key.payload.doc.data();
                        event.id = key.payload.doc.id;
                        event.title = event.moduleTitle + " | At Hall: " + event.lectureHall;
                        event.startTime = event.startDateTime.toDate();
                        event.endTime = event.endDateTime.toDate();
                        this.eventSource.push(event);
                    });
                });
            }
        });
    }
    ngOnInit() {
        this.firebase.fetchNotice().subscribe(data => {
            this.notices = data.map(e => {
                return {
                    noticeTitle: e.payload.doc.data()['noticeTitle'],
                    noticeDescription: e.payload.doc.data()['noticeDescription'],
                };
            });
        });
    }
    goSettings() {
        this.router.navigate(['Student/Settings']);
        // console.log('settings');
    }
    goeSign() {
        this.router.navigate(['Student/eSign']);
        // console.log('Home');
    }
    goECForm() {
        this.router.navigate(['Student/EC-Form']);
        // console.log('EC-Form');
    }
    goAttendence() {
        this.router.navigate(['Student/Attendence']);
        // console.log('Attendence');
    }
    goNotices() {
        this.router.navigate(['Student/Notices']);
        // console.log('settings');
    }
};
NoticesPage.ctorParameters = () => [
    { type: _angular_fire_firestore___WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
NoticesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({ selector: 'app-notices', template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notices.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/notices/notices.page.html")).default, styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notices.page.scss */ "./src/app/student/notices/notices.page.scss")).default] }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore___WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], NoticesPage);



/***/ })

}]);
//# sourceMappingURL=student-notices-notices-module-es2015.js.map