(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/profile/profile.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/profile/profile.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"height: 6%;\">\r\n  <ion-toolbar>\r\n\r\n\r\n    <!-- This will add a button to show the side menu when the side menu is hidden in small screens -->\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    \r\n    <ion-title style=\"position: absolute;\r\n                      top: 40%;\">Profile</ion-title>\r\n\r\n    <!-- Header Contents Section -->\r\n    <div style=\"position: absolute;\r\n                right: 5px;\r\n                top: 8px;\">\r\n      <!-- Notification Bell, Unread Notifications Count, Drop Down -->          \r\n\r\n      <ion-button fill=\"clear\" color=\"dark\" style=\"width: 100px;\r\n                                                  height: 45px;\r\n                                                  background-color: white;\" (click)=\"openNotificationPopover($event)\">\r\n\r\n        <!-- Notification Bell Icon -->\r\n        <div style=\"height: 42px;\r\n                  width: 42px;\"> \r\n          <ion-icon name=\"notifications-outline\" style=\"font-size: 35px;\r\n                                                        position: absolute;\r\n                                                        top: 5px;\r\n                                                        left: 0px;\"></ion-icon>\r\n        </div>\r\n\r\n          <!-- Arrow Icon -->\r\n        <div style=\"position: absolute;\r\n                    left: 50px;\r\n                    top: 10px;\r\n                    font-size: 26px;\">\r\n          <ion-icon name=\"arrow-down-outline\"></ion-icon>\r\n        </div>\r\n        \r\n      </ion-button>\r\n\r\n    </div>\r\n\r\n\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid>\r\n\r\n    <ion-row>\r\n\r\n      <ion-col>\r\n\r\n        <ion-avatar style=\"position: absolute;\r\n                          top: 50px;\r\n                          left: 50%;\r\n                          transform: translateX(-50%);\r\n                          background-color: white;\r\n                          width: 100px;\r\n                          height: 100px;\">\r\n          <img src=\"assets/images/office/profile-page/profileIcon.png\">\r\n        </ion-avatar>\r\n\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n    <ion-row>\r\n\r\n      <ion-col>\r\n\r\n        <ion-card style=\"width: 50%;\r\n                        position: absolute;\r\n                        top: 150px;\r\n                        left: 50%;\r\n                        transform: translateX(-50%);\">\r\n\r\n          <ion-card-content>\r\n\r\n            <ion-grid *ngFor=\"let item of programOfficeUserDetails\">\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-label style=\"font-size: 25px;\r\n                                    padding-bottom: 30px;\">\r\n                    Profile Details\r\n                  </ion-label>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-label style=\"font-size: 17px;\">\r\n                    Name:\r\n                  </ion-label>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-label style=\"font-size: 15px;\r\n                                    position: absolute;\r\n                                    top: 7px;\">\r\n                    {{ item.payload.doc.data().name.prefix }}\r\n                    {{ item.payload.doc.data().name.firstName }}\r\n                    {{ item.payload.doc.data().name.middleName }}\r\n                    {{ item.payload.doc.data().name.lastName }}\r\n                  </ion-label>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-label style=\"font-size: 17px;\">\r\n                    NSBM University Email Address: \r\n                  </ion-label>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-label style=\"font-size: 15px;\r\n                                    position: absolute;\r\n                                    top: 7px;\">\r\n                    {{ item.payload.doc.data().emailAddress }}\r\n                  </ion-label>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-label style=\"font-size: 17px;\">\r\n                    Faculty:\r\n                  </ion-label>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-label style=\"font-size: 15px;\r\n                                    position: absolute;\r\n                                    top: 7px;\">\r\n                    {{ item.payload.doc.data().faculty }}\r\n                  </ion-label>\r\n                </ion-col>\r\n              </ion-row>\r\n              \r\n            </ion-grid>\r\n\r\n          </ion-card-content>\r\n\r\n        </ion-card>\r\n\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ "./src/app/office/profile/profile-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/office/profile/profile-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/office/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/office/profile/profile.module.ts":
/*!**************************************************!*\
  !*** ./src/app/office/profile/profile.module.ts ***!
  \**************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/office/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/office/profile/profile.page.ts");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/office/profile/profile.page.scss":
/*!**************************************************!*\
  !*** ./src/app/office/profile/profile.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color: rgb(243, 243, 243); }\n\nion-card {\n  --ion-background-color: white; }\n\nion-label {\n  color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ZmaWNlL3Byb2ZpbGUvQzpcXFVzZXJzXFxyYW51bFxcRG9jdW1lbnRzXFxHaXRIdWJcXDJuZCBZZWFyXFwybmQgU2VtZXN0ZXJcXFVPUF9TRV9ZMlMyLVBVU0wyMDA4LUlOVFJPRFVDVElPTi1UTy1JTlRFUk5FVC1PRi1USElOR1NcXFdvcmtzcGFjZVxcaVNBTS9zcmNcXGFwcFxcb2ZmaWNlXFxwcm9maWxlXFxwcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBDQUF1QixFQUFBOztBQUczQjtFQUNJLDZCQUF1QixFQUFBOztBQUczQjtFQUNJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL29mZmljZS9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAyNDMsIDI0Myk7XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1sYWJlbHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/office/profile/profile.page.ts":
/*!************************************************!*\
  !*** ./src/app/office/profile/profile.page.ts ***!
  \************************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _side_menu_side_menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../side-menu/side-menu.page */ "./src/app/office/side-menu/side-menu.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _notifications_popover_notifications_popover_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../notifications-popover/notifications-popover.page */ "./src/app/office/notifications-popover/notifications-popover.page.ts");






let ProfilePage = class ProfilePage {
    constructor(profileService, sideMenuPageUserFaculty, popoverController) {
        this.profileService = profileService;
        this.sideMenuPageUserFaculty = sideMenuPageUserFaculty;
        this.popoverController = popoverController;
        this.retrieveLoggedInUserDetailsFirestore = () => this.profileService.retrieveLoggedInUserDetailsProgramOffice(this.sideMenuPageUserFaculty.passLoggedInUserId()).subscribe(response => (this.programOfficeUserDetails = response));
    }
    ngOnInit() {
        this.retrieveLoggedInUserDetailsFirestore();
    }
    // Opening notifications popover
    openNotificationPopover(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const moreDetailsLectureSessionPopover = yield this.popoverController.create({
                component: _notifications_popover_notifications_popover_page__WEBPACK_IMPORTED_MODULE_5__["NotificationsPopoverPage"],
                componentProps: {
                    loggedInUserId: this.sideMenuPageUserFaculty.passLoggedInUserId()
                },
                event: ev
            });
            moreDetailsLectureSessionPopover.present();
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
    { type: _side_menu_side_menu_page__WEBPACK_IMPORTED_MODULE_3__["SideMenuPage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] }
];
ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/profile/profile.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.page.scss */ "./src/app/office/profile/profile.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"],
        _side_menu_side_menu_page__WEBPACK_IMPORTED_MODULE_3__["SideMenuPage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]])
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map