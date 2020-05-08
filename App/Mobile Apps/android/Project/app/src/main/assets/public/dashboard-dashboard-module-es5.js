function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/office/dashboard/dashboard.page.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/dashboard/dashboard.page.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOfficeDashboardDashboardPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header style=\"height: 6%;\">\r\n  <ion-toolbar>\r\n\r\n\r\n    <!-- This will add a button to show the side menu when the side menu is hidden in small screens -->\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    \r\n    <ion-title style=\"position: absolute;\r\n                      top: 40%;\">Dashboard</ion-title>\r\n\r\n    <!-- Header Contents Section -->\r\n    <div style=\"position: absolute;\r\n                right: 5px;\r\n                top: 8px;\">\r\n      <!-- Notification Bell, Unread Notifications Count, Drop Down -->          \r\n\r\n      <ion-button fill=\"clear\" color=\"dark\" style=\"width: 100px;\r\n                                                  height: 45px;\r\n                                                  background-color: white;\" (click)=\"openNotificationPopover($event)\">\r\n\r\n        <!-- Notification Bell Icon -->\r\n        <div style=\"height: 42px;\r\n                  width: 42px;\"> \r\n          <ion-icon name=\"notifications-outline\" style=\"font-size: 35px;\r\n                                                        position: absolute;\r\n                                                        top: 5px;\r\n                                                        left: 0px;\"></ion-icon>\r\n        </div>\r\n\r\n          <!-- Arrow Icon -->\r\n        <div style=\"position: absolute;\r\n                    left: 50px;\r\n                    top: 10px;\r\n                    font-size: 26px;\">\r\n          <ion-icon name=\"arrow-down-outline\"></ion-icon>\r\n        </div>\r\n        \r\n      </ion-button>\r\n\r\n\r\n    </div>\r\n\r\n\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"9.5\">\r\n        <ion-row>\r\n          <ion-col>\r\n\r\n            <ion-card style=\"height: 580px;\">\r\n              <ion-card-header>\r\n                <ion-card-title>\r\n                  Today's Lecturers\r\n                </ion-card-title>\r\n              </ion-card-header>\r\n              <ion-card-content>\r\n\r\n                <ion-grid style=\"height: 510px;\r\n                                overflow-y: scroll;\">\r\n                  <ion-row>\r\n                    <ion-col size=\"3\" size-sm=\"12\" size-lg=\"3\" size-xl=\"3\" *ngFor=\"let item of publishedLectureSessionsCurrentDate\">\r\n\r\n                      <ion-card style=\"margin-top: -5px;\">\r\n                        <ion-card-header>\r\n                          <ion-button shape=\"round\" color=\"primary\" size=\"small\" style=\"position: absolute;\r\n                                                                                      top: 0px;\r\n                                                                                      left: 75%;\r\n                                                                                      width: 40px;\r\n                                                                                      height: 40px;\" (click)=\"moreDetailsTodaysLectureSession($event, item)\">\r\n                            <ion-icon name=\"document-text-outline\"></ion-icon>\r\n                          </ion-button>\r\n                          <ion-card-title>\r\n                            <ion-label>\r\n                              {{ item.payload.doc.data().moduleCode }}\r\n                            </ion-label>\r\n                          </ion-card-title>\r\n                          <ion-card-subtitle>\r\n                            <ion-label>\r\n                              {{ item.payload.doc.data().moduleTitle }}\r\n                            </ion-label>\r\n                          </ion-card-subtitle>\r\n                        </ion-card-header>\r\n                        <ion-card-content>\r\n                          <ion-grid>\r\n                            <ion-row>\r\n                              <ion-col size=\"6\">\r\n                                <ion-label>\r\n                                  <b>Lecture Hall: </b>\r\n                                </ion-label>\r\n                              </ion-col>\r\n                              <ion-col size=\"6\">\r\n                                <ion-label>\r\n                                  {{ item.payload.doc.data().lectureHall }}\r\n                                </ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                            <ion-row>\r\n                              <ion-col>\r\n                                <ion-label>\r\n                                  <b>Batch: </b>\r\n                                </ion-label>\r\n                              </ion-col>\r\n                              <ion-col>\r\n                                <ion-label>\r\n                                  {{ item.payload.doc.data().batch }}\r\n                                </ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                            <ion-row>\r\n                              <ion-col>\r\n                                <ion-label>\r\n                                  <b>Degree Code: </b>\r\n                                </ion-label>\r\n                              </ion-col>\r\n                              <ion-col>\r\n                                <ion-label>\r\n                                  {{ item.payload.doc.data().degreeCode }}\r\n                                </ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                            <ion-row>\r\n                              <ion-col>\r\n                                <ion-label>\r\n                                  <b>Lecturer: </b>\r\n                                </ion-label>\r\n                              </ion-col>\r\n                              <ion-col>\r\n                                <ion-label>\r\n                                  {{ item.payload.doc.data().lecturer }}\r\n                                </ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                            <ion-row>\r\n                              <ion-col>\r\n                                <ion-label>\r\n                                  <b>Start Time: </b>\r\n                                </ion-label>\r\n                              </ion-col>\r\n                              <ion-col>\r\n                                <ion-label>\r\n                                  {{ item.payload.doc.data().startDateTime.toDate() | date: 'h:mm a' }}\r\n                                </ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                            <ion-row>\r\n                              <ion-col>\r\n                                <ion-label>\r\n                                  <b>End Time: </b>\r\n                                </ion-label>\r\n                              </ion-col>\r\n                              <ion-col>\r\n                                <ion-label>\r\n                                  {{ item.payload.doc.data().endDateTime.toDate() | date: 'h:mm a' }}\r\n                                </ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                            <ion-row>\r\n                              <ion-col>\r\n                                <ion-label>\r\n                                  <b>Status: </b>\r\n                                </ion-label>\r\n                              </ion-col>\r\n                              <ion-col>\r\n                                <ion-label>\r\n                                  {{ item.payload.doc.data().status }}\r\n                                </ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                          </ion-grid>\r\n                        </ion-card-content>\r\n                      </ion-card>\r\n\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n\r\n                <!-- Loading Spinner -->\r\n                <ion-spinner name=\"dots\" style=\"position: absolute;\r\n                                                left: 50%;\r\n                                                top: 40%;\r\n                                                transform: translate(-50%,-60%);\r\n                                                margin-top: 20px;\r\n                                                height: 100px;\r\n                                                width: 100px;\" *ngIf=\"showLoadingDotsTodaysLectureSession\"></ion-spinner>\r\n\r\n                 <!-- Page loading search module text -->\r\n                <div *ngIf=\"noLectureSessionsTodayText\" style=\"position: absolute;\r\n                                                            top: 150px;\r\n                                                            left: 50%;\r\n                                                            transform: translateX(-50%);\r\n                                                            font-size: 18px;\r\n                                                            border: #ccc solid 2px;\r\n                                                            border-radius: 5px;\r\n                                                            padding: 15px;\r\n                                                            min-width: 200px;\">\r\n                  <ion-icon name=\"close-circle-outline\" style=\"color: rgb(8, 177, 219);\r\n                                                              font-size: 30px;\r\n                                                              margin-top: 2px;\r\n                                                              margin-right: 10px;\"></ion-icon>\r\n                  <ion-label style=\"position: relative;\r\n                                    top: -8px;\r\n                                    text-align: center;\">\r\n                    No Lecture Sessions assigned for today.\r\n                  </ion-label>\r\n                </div>\r\n\r\n              </ion-card-content>\r\n            </ion-card>\r\n\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n\r\n            <ion-card style=\"margin-top: -5px;\">\r\n              <ion-card-header>\r\n                <ion-card-title>\r\n                  Weeks Upcoming Lectures\r\n                </ion-card-title>\r\n              </ion-card-header>\r\n              <ion-card-content>\r\n\r\n                <div style=\"position: absolute;\r\n                            left: 50%;\r\n                            transform: translateX(-50%);\r\n                            top: -40px;\">\r\n                \r\n                  <ion-button fill=\"clear\" (click)=\"previousMonthLecture()\" style=\"margin-top: -12px;\">\r\n                    <ion-icon name=\"arrow-back\"></ion-icon>\r\n                  </ion-button>\r\n\r\n                  <ion-label style=\"font-size: 20px;\">\r\n                    {{ viewingUpcomingLecture }}\r\n                  </ion-label>\r\n\r\n                  <ion-button fill=\"clear\" (click)=\"nextMonthLecture()\" style=\"margin-top: -12px;\">\r\n                    <ion-icon name=\"arrow-forward\"></ion-icon>\r\n                  </ion-button>\r\n\r\n                </div>\r\n                \r\n\r\n                <div style=\"overflow-y: scroll;\r\n                            margin-top: 30px;\">\r\n                  <div style=\"height: 700px;\">\r\n                    <calendar [eventSource]=\"eventSourceUpcomingLecture\"\r\n                    [calendarMode]=\"calendarUpcomingLecture.mode\"\r\n                    [currentDate]=\"calendarUpcomingLecture.currentDate\"\r\n                    (onCurrentDateChanged)=\"onCurrentDateChangedUpcomingLecture($event)\"\r\n                    (onRangeChanged)=\"onRangeChangedUpcomingLecture($event)\"\r\n                    (onEventSelected)=\"onEventSelectedUpcomingLecture($event)\"\r\n                    (onTitleChanged)=\"onViewTitleChangedUpcomingLecture($event)\"\r\n                    (onTimeSelected)=\"onTimeSelectedUpcomingLecture($event)\"\r\n                    startHour=\"9\"\r\n                    endHour=\"17\"\r\n                    step=\"30\"\r\n                    startingDayWeek=\"1\" id=\"weeksUpcomingLectureCalendar\">\r\n                  \r\n                    </calendar>\r\n                  </div>\r\n                </div>\r\n\r\n                <div style=\"position: absolute;\r\n                            top: 282px;\r\n                            right: 3.4%;\" *ngFor=\"let item of lectureSessionDocuments\">\r\n                  <ion-button size=\"small\" title=\"Lecture Session Read More\" color=\"secondary\" (click)=\"moreDetailsUpcomingLectureSession($event, item)\" style=\"width: 40px;\r\n                                                                                                                                                                  height: 40px;\r\n                                                                                                                                                                  border-radius: 5px;\r\n                                                                                                                                                                  margin-bottom: -5px;\r\n                                                                                                                                                                  margin-left: -10px;\">\r\n                    <ion-icon name=\"document-text\" style=\"font-size: 30px;\"></ion-icon>\r\n                  </ion-button>\r\n                </div>\r\n\r\n                <div style=\"position: absolute;\r\n                            left: 50%;\r\n                            top: 60%;\r\n                            transform: translate(-50%,-40%);\" *ngIf=\"noLectureSessionText\">\r\n                  <ion-item style=\"border: #ccc solid 1px;\r\n                                  border-radius: 5px;\r\n                                  padding: 5px;\">\r\n                    <ion-label style=\"font-size: 17px;\">\r\n                      No Lecture Sessions on the selected date\r\n                    </ion-label>\r\n                  </ion-item>\r\n                </div>\r\n\r\n                <!-- Loading Spinner -->\r\n                <ion-spinner name=\"dots\" style=\"position: absolute;\r\n                                                left: 50%;\r\n                                                top: 50%;\r\n                                                transform: translate(-50%,-50%);\r\n                                                margin-top: 20px;\r\n                                                height: 100px;\r\n                                                width: 100px;\" *ngIf=\"showLoadingDotsUpcomingLectureSession\"></ion-spinner>\r\n\r\n\r\n              </ion-card-content>\r\n            </ion-card>\r\n\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n\r\n            <ion-card style=\"margin-top: -5px;\r\n                            height: 800px;\">\r\n              <ion-card-header>\r\n                <ion-card-title>\r\n                  Latest Notices from Lecturers\r\n                </ion-card-title>\r\n              </ion-card-header>\r\n              <ion-card-content>\r\n\r\n                <ion-grid style=\"height: 725px;\r\n                                overflow-y: scroll;\">\r\n                  <ion-row *ngFor=\"let item of publishedLecturerToPONotices\">\r\n                    <ion-col size=\"12\">\r\n\r\n                      <ion-card>\r\n                        <ion-card-header>\r\n                          <ion-card-title>\r\n                            <ion-label>\r\n                              {{ item.payload.doc.data().noticeTitle }}\r\n                            </ion-label>\r\n                          </ion-card-title>\r\n                          <ion-card-subtitle>\r\n                            <ion-label>\r\n                              {{ item.payload.doc.data().noticeDescription }}\r\n                            </ion-label>\r\n                          </ion-card-subtitle>\r\n                        </ion-card-header>\r\n                        <ion-card-content>\r\n                          <ion-grid>\r\n                            <ion-row>\r\n                              <ion-col size=\"5\">\r\n                                <ion-label>\r\n                                  <b>Notice Category: </b>\r\n                                </ion-label>\r\n                              </ion-col>\r\n                              <ion-col size=\"7\">\r\n                                <ion-label>\r\n                                  {{ item.payload.doc.data().noticeCategory }}\r\n                                </ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                            <ion-row>\r\n                              <ion-col size=\"5\">\r\n                                <ion-label>\r\n                                  <b>Sent By: </b>\r\n                                </ion-label>\r\n                              </ion-col>\r\n                              <ion-col size=\"7\">\r\n                                <ion-label>\r\n                                  {{ item.payload.doc.data().noticeCreatedInfo.createdByLecturerUserId }}\r\n                                </ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                            <ion-row>\r\n                              <ion-col size=\"5\">\r\n                                <ion-label>\r\n                                  <b>Sent At: </b>\r\n                                </ion-label>\r\n                              </ion-col>\r\n                              <ion-col size=\"7\">\r\n                                <ion-label>\r\n                                  {{ item.payload.doc.data().noticeCreatedInfo.createdDateTime.toDate() | date: 'dd-MM-yyyy | h:mm a'}}\r\n                                </ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                          </ion-grid>\r\n                        </ion-card-content>\r\n                      </ion-card>\r\n\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n\r\n                <!-- Loading Spinner -->\r\n                <ion-spinner name=\"dots\" style=\"position: absolute;\r\n                                                left: 50%;\r\n                                                top: 50%;\r\n                                                transform: translate(-50%,-50%);\r\n                                                margin-top: 20px;\r\n                                                height: 100px;\r\n                                                width: 100px;\" *ngIf=\"showLoadingDotsLatestLecturerPONotices\"></ion-spinner>\r\n\r\n              </ion-card-content>\r\n            </ion-card>\r\n\r\n          </ion-col>\r\n  \r\n        </ion-row>\r\n      </ion-col>\r\n      <ion-col size=\"2.5\">\r\n\r\n        <ion-card style=\"margin-top: 15px;\r\n                        margin-left: -10px;\r\n                        width: 103%;\r\n                        min-height: 60%;\">\r\n          <ion-card-header>\r\n            <ion-card-title>\r\n              User Activity\r\n            </ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n\r\n            <div style=\"border: #ccc solid 1px;\r\n                        border-radius: 5px;\r\n                        width: 100%;\r\n                        height: 130px;\r\n                        padding-right: 10px;\">\r\n                <canvas #userActivityAreaChart></canvas>  \r\n            </div>\r\n\r\n            <ion-label style=\"position: relative;\r\n                              top: 20px;\r\n                              font-size: 17px;\">\r\n              Active Users - <span style=\"color: rgb(0, 94, 122)\"><b>03</b></span>\r\n            </ion-label>\r\n\r\n            <div style=\"border: #ccc solid 1px;\r\n                        border-radius: 5px;\r\n                        width: 100%;\r\n                        min-height: 590px;\r\n                        position: relative;\r\n                        top: 20px;\">\r\n              \r\n              <ion-grid style=\"min-height: 580px;\">\r\n                <ion-row>\r\n                  <ion-col>\r\n                    <ion-label>\r\n                      <b>Students: <span style=\"color: rgb(4, 126, 163)\">01</span></b>\r\n                    </ion-label>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col>\r\n\r\n                    <ion-grid style=\"height: 144px;\r\n                                    overflow-y: scroll;\">\r\n                      <ion-row>\r\n                        <ion-col>\r\n                          <ion-grid style=\"position: relative;\r\n                                          left: 50%;\r\n                                          top: -15px;\r\n                                          transform: translateX(-50%);\">\r\n                            <ion-row>\r\n                              <ion-col>\r\n                                <ion-label style=\"font-size: 13px;\r\n                                            position: relative;\r\n                                            left: 25%;\">\r\n                                  Mr. David Simon\r\n                                </ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                          </ion-grid>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-grid>\r\n\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col>\r\n                    <div style=\"border-top: #ccc solid 2px;\"></div>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col>\r\n                    <b>Lecturers: <span style=\"color: rgb(4, 126, 163)\">01</span></b>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col>\r\n\r\n                    <ion-grid style=\"height: 144px;\r\n                                    overflow-y: scroll;\">\r\n                      <ion-row>\r\n                        <ion-col>\r\n                          <ion-grid style=\"position: relative;\r\n                                          left: 50%;\r\n                                          top: -15px;\r\n                                          transform: translateX(-50%);\">\r\n                            <ion-row>\r\n                              <ion-col>\r\n                                <ion-label style=\"font-size: 13px;\r\n                                            position: relative;\r\n                                            left: 25%;\">\r\n                                  Dr. Chloe Morgan\r\n                                </ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                          </ion-grid>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-grid>\r\n\r\n                  </ion-col>  \r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col>\r\n                    <div style=\"border-top: #ccc solid 2px;\"></div>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col>\r\n                    <b>Office Staff: <span style=\"color: rgb(4, 126, 163)\">01</span></b>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col>\r\n\r\n                    <ion-grid style=\"height: 144px;\r\n                                    overflow-y: scroll;\">\r\n                      <ion-row>\r\n                        <ion-col>\r\n                          <ion-grid style=\"position: relative;\r\n                                          left: 50%;\r\n                                          top: -15px;\r\n                                          transform: translateX(-50%);\">\r\n                            <ion-row>\r\n                              <ion-col>\r\n                                <ion-label style=\"font-size: 13px;\r\n                                                  position: relative;\r\n                                                  left: 25%;\">\r\n                                  Mr. Jay Anderson\r\n                                </ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                          </ion-grid>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-grid>\r\n\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              \r\n\r\n\r\n            </div>\r\n\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/office/dashboard/dashboard-routing.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/office/dashboard/dashboard-routing.module.ts ***!
    \**************************************************************/

  /*! exports provided: DashboardPageRoutingModule */

  /***/
  function srcAppOfficeDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function () {
      return DashboardPageRoutingModule;
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


    var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard.page */
    "./src/app/office/dashboard/dashboard.page.ts");

    var routes = [{
      path: '',
      component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    }];

    var DashboardPageRoutingModule = function DashboardPageRoutingModule() {
      _classCallCheck(this, DashboardPageRoutingModule);
    };

    DashboardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DashboardPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/office/dashboard/dashboard.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/office/dashboard/dashboard.module.ts ***!
    \******************************************************/

  /*! exports provided: DashboardPageModule */

  /***/
  function srcAppOfficeDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function () {
      return DashboardPageModule;
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


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/office/dashboard/dashboard-routing.module.ts");
    /* harmony import */


    var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard.page */
    "./src/app/office/dashboard/dashboard.page.ts");
    /* harmony import */


    var ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ionic2-calendar */
    "./node_modules/ionic2-calendar/index.js");

    var DashboardPageModule = function DashboardPageModule() {
      _classCallCheck(this, DashboardPageModule);
    };

    DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardPageRoutingModule"], ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__["NgCalendarModule"]],
      declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
    })], DashboardPageModule);
    /***/
  },

  /***/
  "./src/app/office/dashboard/dashboard.page.scss":
  /*!******************************************************!*\
    !*** ./src/app/office/dashboard/dashboard.page.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOfficeDashboardDashboardPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --ion-background-color: rgb(243, 243, 243); }\n\nion-card {\n  --ion-background-color: white; }\n\nion-label {\n  color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ZmaWNlL2Rhc2hib2FyZC9DOlxcVXNlcnNcXHJhbnVsXFxEb2N1bWVudHNcXEdpdEh1YlxcMm5kIFllYXJcXDJuZCBTZW1lc3RlclxcVU9QX1NFX1kyUzItUFVTTDIwMDgtSU5UUk9EVUNUSU9OLVRPLUlOVEVSTkVULU9GLVRISU5HU1xcV29ya3NwYWNlXFxpU0FNL3NyY1xcYXBwXFxvZmZpY2VcXGRhc2hib2FyZFxcZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBDQUF1QixFQUFBOztBQUczQjtFQUNJLDZCQUF1QixFQUFBOztBQUczQjtFQUNJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL29mZmljZS9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjQzLCAyNDMpO1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tbGFiZWx7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/office/dashboard/dashboard.page.ts":
  /*!****************************************************!*\
    !*** ./src/app/office/dashboard/dashboard.page.ts ***!
    \****************************************************/

  /*! exports provided: DashboardPage */

  /***/
  function srcAppOfficeDashboardDashboardPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPage", function () {
      return DashboardPage;
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


    var _side_menu_side_menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../side-menu/side-menu.page */
    "./src/app/office/side-menu/side-menu.page.ts");
    /* harmony import */


    var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/firebase.service */
    "./src/app/services/firebase.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _notifications_popover_notifications_popover_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../notifications-popover/notifications-popover.page */
    "./src/app/office/notifications-popover/notifications-popover.page.ts");

    var DashboardPage = /*#__PURE__*/function () {
      function DashboardPage(sideMenuPageUserFaculty, dashboardService, alertController, popoverController) {
        var _this = this;

        _classCallCheck(this, DashboardPage);

        this.sideMenuPageUserFaculty = sideMenuPageUserFaculty;
        this.dashboardService = dashboardService;
        this.alertController = alertController;
        this.popoverController = popoverController;
        this.noLectureSessionText = false;
        this.showLoadingDotsTodaysLectureSession = true;
        this.showLoadingDotsUpcomingLectureSession = true;
        this.showLoadingDotsLatestLecturerPONotices = true;
        this.noLectureSessionsTodayText = false;

        this.retrievePublishedLectureSessionsCurrentDate = function () {
          return _this.dashboardService.retrievePublishedLectureSessionsCurrentDate(_this.sideMenuPageUserFaculty.passLoggedInUserFaculty(), _this.currentDate, _this.nextDate).subscribe(function (response) {
            if (response.length > 0) {
              _this.showLoadingDotsTodaysLectureSession = false;
              _this.publishedLectureSessionsCurrentDate = response;
            } else {
              _this.noLectureSessionText = true;
            }
          });
        };

        this.retrievePublishedLecturerToPONotice = function () {
          return _this.dashboardService.retrievePublishedLecturerToPONotice(_this.currentDateNotice, _this.dateThreeDaysBeforeCurrentDate).subscribe(function (response) {
            _this.showLoadingDotsLatestLecturerPONotices = false;
            _this.publishedLecturerToPONotices = response;
          });
        }; // Declared to hold the events as array to store the sessions


        this.lectureSessionDocuments = [];
        this.calendarUpcomingLecture = {
          mode: 'month',
          currentDate: new Date()
        };
        this.selectedDate = new Date();
        console.log("con");
      } // Calling the ngOnInit() function when page is rendered on the user's screen


      _createClass(DashboardPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.ngOnInit();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          console.log("ng");
          this.userActivityAreaChart(); // Retrieving current date and time
          // Sample: Sun Apr 19 2020 18:44:52 GMT+0530 (India Standard Time)

          this.currentDate = new Date(); // Setting currentDate time section to zero leaving the date as it is
          // Sample: Sun Apr 19 2020 00:00:00 GMT+0530 (India Standard Time)

          this.currentDate.setHours(0, 0, 0, 0); // Retrieving current date and time
          // Sample: Sun Apr 19 2020 18:44:52 GMT+0530 (India Standard Time)

          this.nextDate = new Date(); // Setting nextDate time section to zero leaving the date as it is
          // Sample: Sun Apr 19 2020 00:00:00 GMT+0530 (India Standard Time)

          this.nextDate.setHours(0, 0, 0, 0); // Setting date section to increment by one
          // Sample: Sun Apr 20 2020 00:00:00 GMT+0530 (India Standard Time)

          this.nextDate.setDate(this.nextDate.getDate() + 1);
          this.currentDateNotice = new Date();
          this.dateThreeDaysBeforeCurrentDate = new Date();
          this.dateThreeDaysBeforeCurrentDate.setDate(this.currentDate.getDate() - 3);
          this.retrievePublishedLectureSessionsCurrentDate();
          this.retrievePublishedLecturerToPONotice(); // Retrieving upcoming published lecture sessions from the firestore database and assigning them to the calendar

          this.dashboardService.retrievePublishedLectureSessionsUpcoming(this.sideMenuPageUserFaculty.passLoggedInUserFaculty()).subscribe(function (response) {
            // Setting loading spinner in upcoming lecture sessions to stop spinning
            _this2.showLoadingDotsUpcomingLectureSession = false;
            _this2.eventSourceUpcomingLecture = []; // Clearing the existing lecture sessions on the calendar before syncing 

            response.forEach(function (snap) {
              var eventLectureSession = snap.payload.doc.data();
              eventLectureSession.id = snap.payload.doc.id;
              eventLectureSession.title = eventLectureSession.moduleCode + "-" + eventLectureSession.moduleTitle;
              eventLectureSession.startTime = eventLectureSession.startDateTime.toDate();
              eventLectureSession.endTime = eventLectureSession.endDateTime.toDate();
              console.log(eventLectureSession);

              _this2.eventSourceUpcomingLecture.push(eventLectureSession);
            });
          }, function (error) {
            // Setting loading spinner in upcoming lecture sessions to stop spinning
            _this2.showLoadingDotsUpcomingLectureSession = false;
            console.log("Error: " + error);

            _this2.alertNotice("Error", "An error has occurred: " + error);
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
        key: "userActivityAreaChart",
        value: function userActivityAreaChart() {
          this.bars = new chart_js__WEBPACK_IMPORTED_MODULE_5__["Chart"](this.barChart.nativeElement, {
            type: 'line',
            data: {
              labels: ['16-4-2020', '17-4-2020', '18-4-2020', '19-4-2020', '20-4-2020', '21-4-2020', '22-4-2020', '23-4-2020'],
              datasets: [{
                label: 'User Activity',
                data: [10, 12, 12, 8, 10, 20, 22, 30],
                backgroundColor: 'rgb(109, 156, 235)',
                borderColor: 'rgb(109, 219, 235)',
                borderWidth: 1
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              legend: {
                display: false
              },
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: false,
                    display: false
                  },
                  gridLines: {
                    display: false
                  }
                }],
                xAxes: [{
                  ticks: {
                    display: false
                  },
                  gridLines: {
                    display: false
                  }
                }]
              }
            }
          });
        }
      }, {
        key: "moreDetailsTodaysLectureSession",
        value: function moreDetailsTodaysLectureSession(event, value) {}
      }, {
        key: "moreDetailsUpcomingLectureSession",
        value: function moreDetailsUpcomingLectureSession(event, value) {} // Alert Box Implementation

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
        key: "nextMonthLecture",
        value: function nextMonthLecture() {
          var frontSwipeLecture = document.getElementById('weeksUpcomingLectureCalendar').querySelector('.swiper-container')['swiper'];
          frontSwipeLecture.slideNext();
        }
      }, {
        key: "previousMonthLecture",
        value: function previousMonthLecture() {
          var backSwipeLecture = document.getElementById('weeksUpcomingLectureCalendar').querySelector('.swiper-container')['swiper'];
          backSwipeLecture.slidePrev();
        }
      }, {
        key: "onViewTitleChangedUpcomingLecture",
        value: function onViewTitleChangedUpcomingLecture(title) {
          console.log(title);
          this.viewingUpcomingLecture = title;
        }
      }, {
        key: "onEventSelectedUpcomingLecture",
        value: function onEventSelectedUpcomingLecture(event) {
          console.log("Lecture Session Selected: " + event.startTime + " - " + event.endTime + ", " + event.title);
        }
      }, {
        key: "onTimeSelectedUpcomingLecture",
        value: function onTimeSelectedUpcomingLecture(evt) {
          console.log("Lecture Session Selected Time: " + evt.selectedTime + ", has sessions: " + (evt.events !== undefined && evt.events.length !== 0) + ", disabled: " + evt.disabled);

          if ((evt.events !== undefined && evt.events.length !== 0) == false) {
            this.noLectureSessionText = true;
            this.lectureSessionDocuments = [];
          } else if ((evt.events !== undefined && evt.events.length !== 0) == true) {
            this.noLectureSessionText = false;
            this.lectureSessionDocuments = evt.events;
          }

          console.log(this.lectureSessionDocuments);
        }
      }, {
        key: "onCurrentDateChangedUpcomingLecture",
        value: function onCurrentDateChangedUpcomingLecture(event) {
          console.log("Current Lecture Session Date Change: " + event);
          this.lectureSessionDocuments = [];
        }
      }, {
        key: "onRangeChangedUpcomingLecture",
        value: function onRangeChangedUpcomingLecture(evt) {
          console.log("Lecture Session (Range) Changed: Start Time: " + evt.startTime + ", End Time: " + evt.endTime);
        }
      }]);

      return DashboardPage;
    }();

    DashboardPage.ctorParameters = function () {
      return [{
        type: _side_menu_side_menu_page__WEBPACK_IMPORTED_MODULE_2__["SideMenuPage"]
      }, {
        type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('userActivityAreaChart', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], DashboardPage.prototype, "barChart", void 0);
    DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/office/dashboard/dashboard.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.page.scss */
      "./src/app/office/dashboard/dashboard.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_side_menu_side_menu_page__WEBPACK_IMPORTED_MODULE_2__["SideMenuPage"], src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]])], DashboardPage);
    /***/
  }
}]);
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map