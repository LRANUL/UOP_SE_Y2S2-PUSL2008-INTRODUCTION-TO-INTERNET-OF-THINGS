function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lectures-lectures-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/office/lectures/lectures.page.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/lectures/lectures.page.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOfficeLecturesLecturesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header style=\"height: 6%;\">\r\n  <ion-toolbar>\r\n\r\n\r\n    <!-- This will add a button to show the side menu when the side menu is hidden in small screens -->\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    \r\n    <ion-title style=\"position: absolute;\r\n                      top: 40%;\">Lectures</ion-title>\r\n\r\n    <!-- Header Contents Section -->\r\n    <div style=\"position: absolute;\r\n                right: 5px;\r\n                top: 8px;\">\r\n      <!-- Notification Bell, Unread Notifications Count, Drop Down -->          \r\n\r\n      <ion-button fill=\"clear\" color=\"dark\" style=\"width: 100px;\r\n                                                  height: 45px;\r\n                                                  background-color: white;\" (click)=\"openNotificationPopover($event)\">\r\n\r\n        <!-- Notification Bell Icon -->\r\n        <div style=\"height: 42px;\r\n                  width: 42px;\"> \r\n          <ion-icon name=\"notifications-outline\" style=\"font-size: 35px;\r\n                                                        position: absolute;\r\n                                                        top: 5px;\r\n                                                        left: 0px;\"></ion-icon>\r\n        </div>\r\n\r\n          <!-- Arrow Icon -->\r\n        <div style=\"position: absolute;\r\n                    left: 50px;\r\n                    top: 10px;\r\n                    font-size: 26px;\">\r\n          <ion-icon name=\"arrow-down-outline\"></ion-icon>\r\n        </div>\r\n        \r\n      </ion-button>\r\n      \r\n    </div>\r\n\r\n\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n\r\n        <ion-card style=\"height: 670px;\">\r\n          <ion-card-header>\r\n            <ion-card-title>\r\n              Today's Lectures\r\n            </ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n\r\n            <div style=\"width: 100%;\r\n                        height: 600px;\r\n                        overflow-y: scroll;\">\r\n              <table class=\"table\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Batch</th>\r\n                    <th>Module Code</th>\r\n                    <th>Module Title</th>\r\n                    <th>Session Start Time</th>\r\n                    <th>Session End Time</th>\r\n                    <th>Lecture Hall</th>\r\n                    <th>Lecturer</th>\r\n                    <th>Session Status</th>\r\n                    <th>Activity</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let item of publishedLectureSessionCurrentDate\">\r\n                    <td>{{ item.payload.doc.data().batch }}</td>\r\n                    <td>{{ item.payload.doc.data().moduleCode }}</td>\r\n                    <td>{{ item.payload.doc.data().moduleTitle }}</td>\r\n                    <td>{{ item.payload.doc.data().startDateTime.toDate() | date: 'h:mm a' }}</td>\r\n                    <td>{{ item.payload.doc.data().endDateTime.toDate() | date: 'h:mm a'}}</td>\r\n                    <td>{{ item.payload.doc.data().lectureHall }}</td>\r\n                    <td>{{ item.payload.doc.data().lecturer }}</td>\r\n                    <td>{{ item.payload.doc.data().status }}</td>\r\n                    <td>\r\n                      <ion-button (click)=\"editLectureSessionSchedule(item)\">\r\n                        EDIT\r\n                      </ion-button>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n\r\n            <!-- Loading Spinner -->\r\n            <ion-spinner name=\"dots\" style=\"position: absolute;\r\n                                            left: 50%;\r\n                                            top: 50%;\r\n                                            transform: translate(-50%, -50%);\r\n                                            height: 100px;\r\n                                            width: 100px;\" *ngIf=\"showLoadingDotsCurrentDateLectureSession\"></ion-spinner>\r\n\r\n            <div *ngIf=\"noLectureSessionTodayText\" style=\"position: absolute;\r\n                                                    left: 50%;\r\n                                                    top: 50%;\r\n                                                    transform: translate(-50%,-50%);\r\n                                                    padding: 5px;\">\r\n              <ion-item>\r\n                <ion-label style=\"font-size: 17px;\">\r\n                  No Lecture Session Assigned for Today\r\n                </ion-label>\r\n              </ion-item>\r\n            </div>\r\n\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n\r\n        <ion-card style=\"height: 800px;\">\r\n          <ion-card-header>\r\n            <ion-card-title>\r\n              All Available Lectures Sessions\r\n            </ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n\r\n            <div style=\"position: absolute;\r\n                            left: 50%;\r\n                            transform: translateX(-50%);\r\n                            top: -35px;\">\r\n                \r\n              <ion-button fill=\"clear\" (click)=\"previousMonthLectureSession()\" style=\"margin-top: -12px;\">\r\n                <ion-icon name=\"arrow-back\"></ion-icon>\r\n              </ion-button>\r\n\r\n              <ion-label style=\"font-size: 20px;\">\r\n                {{ viewingMonthLectureSession }}\r\n              </ion-label>\r\n\r\n              <ion-button fill=\"clear\" (click)=\"nextMonthLectureSession()\" style=\"margin-top: -12px;\">\r\n                <ion-icon name=\"arrow-forward\"></ion-icon>\r\n              </ion-button>\r\n\r\n            </div>\r\n          \r\n            <div style=\"overflow-y: scroll;\r\n                        margin-top: 20px;\">\r\n                <div style=\"height: 700px;\">\r\n                <calendar [eventSource]=\"eventSourceLectureSession\"\r\n                [calendarMode]=\"calendarLectureSession.mode\"\r\n                [currentDate]=\"calendarLectureSession.currentDate\"\r\n                (onCurrentDateChanged)=\"onCurrentDateChangedLectureSession($event)\"\r\n                (onRangeChanged)=\"onRangeChangedLectureSession($event)\"\r\n                (onEventSelected)=\"onEventSelectedLectureSession($event)\"\r\n                (onTitleChanged)=\"onViewTitleChangedLectureSession($event)\"\r\n                (onTimeSelected)=\"onTimeSelectedLectureSession($event)\"\r\n                startHour=\"9\"\r\n                endHour=\"17\"\r\n                step=\"30\"\r\n                startingDayWeek=\"1\" id=\"lectureSessionSemesterCalendar\">\r\n              \r\n                </calendar>\r\n              </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"noLectureSessionAllText\" style=\"position: absolute;\r\n                                                    left: 50%;\r\n                                                    top: 70%;\r\n                                                    transform: translate(-50%,-30%);\r\n                                                    padding: 5px;\">\r\n              <ion-item>\r\n                <ion-label style=\"font-size: 17px;\">\r\n                  No Lecture Session Assigned for this date\r\n                </ion-label>\r\n              </ion-item>\r\n            </div>\r\n\r\n\r\n            <ion-grid style=\"width: 140px;\r\n                                  position: absolute;\r\n                                  top: 278px;\r\n                                  right: 1%;\r\n                                  padding: 0;\r\n                                  margin: 0;\">\r\n              <ion-row *ngFor=\"let session of lectureSessionsDocuments\">\r\n                <ion-col>\r\n                  <ion-button size=\"small\" title=\"Lecture Session Read More\" color=\"secondary\" (click)=\"moreDetailsLectureSession($event, session)\" style=\"width: 40px;\r\n                                                                                                                                                              height: 40px;\r\n                                                                                                                                                              border-radius: 5px;\r\n                                                                                                                                                              margin-bottom: -5px;\r\n                                                                                                                                                              margin-left: -10px;\">\r\n                    <ion-icon name=\"document-text\" style=\"font-size: 30px;\"></ion-icon>\r\n                  </ion-button>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-button size=\"small\" title=\"Edit Lecture Session\" color=\"warning\" (click)=\"editLectureSession(session)\" style=\"width: 40px;\r\n                                                                                                                                        height: 40px;\r\n                                                                                                                                        border-radius: 5px;\r\n                                                                                                                                        margin-bottom: -5px;\r\n                                                                                                                                        margin-left: -12px;\">\r\n                    <ion-icon name=\"create\" style=\"color: white;\r\n                                                  font-size: 30px;\"></ion-icon>\r\n                  </ion-button>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-button size=\"small\" title=\"Remove Lecture Session\" color=\"danger\"\r\n                    (click)=\"removeLectureSession('Confirmation Required', 'This lecture session will be removed, do you want to continue?', session.id)\" style=\"width: 40px;\r\n                                                                                                                                                        height: 40px;\r\n                                                                                                                                                        border-radius: 5px;\r\n                                                                                                                                                        margin-bottom: -5px;\r\n                                                                                                                                                        margin-left: -14px;\">\r\n                    <ion-icon name=\"trash\" style=\"margin-left: -1px;\r\n                                                  font-size: 30px;\"></ion-icon>\r\n                  </ion-button>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n\r\n            <!-- Loading Spinner -->\r\n            <ion-spinner name=\"dots\" style=\"position: absolute;\r\n                                            left: 50%;\r\n                                            top: 50%;\r\n                                            transform: translateX(-50%, -50%);\r\n                                            height: 100px;\r\n                                            width: 100px;\" *ngIf=\"showLoadingDotsAllLectureSession\"></ion-spinner>\r\n\r\n\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/office/lectures/lectures-routing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/office/lectures/lectures-routing.module.ts ***!
    \************************************************************/

  /*! exports provided: LecturesPageRoutingModule */

  /***/
  function srcAppOfficeLecturesLecturesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LecturesPageRoutingModule", function () {
      return LecturesPageRoutingModule;
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


    var _lectures_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lectures.page */
    "./src/app/office/lectures/lectures.page.ts");

    var routes = [{
      path: '',
      component: _lectures_page__WEBPACK_IMPORTED_MODULE_3__["LecturesPage"]
    }];

    var LecturesPageRoutingModule = function LecturesPageRoutingModule() {
      _classCallCheck(this, LecturesPageRoutingModule);
    };

    LecturesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LecturesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/office/lectures/lectures.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/office/lectures/lectures.module.ts ***!
    \****************************************************/

  /*! exports provided: LecturesPageModule */

  /***/
  function srcAppOfficeLecturesLecturesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LecturesPageModule", function () {
      return LecturesPageModule;
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


    var _lectures_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./lectures-routing.module */
    "./src/app/office/lectures/lectures-routing.module.ts");
    /* harmony import */


    var _lectures_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./lectures.page */
    "./src/app/office/lectures/lectures.page.ts");
    /* harmony import */


    var ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ionic2-calendar */
    "./node_modules/ionic2-calendar/index.js");

    var LecturesPageModule = function LecturesPageModule() {
      _classCallCheck(this, LecturesPageModule);
    };

    LecturesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__["NgCalendarModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _lectures_routing_module__WEBPACK_IMPORTED_MODULE_5__["LecturesPageRoutingModule"]],
      declarations: [_lectures_page__WEBPACK_IMPORTED_MODULE_6__["LecturesPage"]]
    })], LecturesPageModule);
    /***/
  },

  /***/
  "./src/app/office/lectures/lectures.page.scss":
  /*!****************************************************!*\
    !*** ./src/app/office/lectures/lectures.page.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOfficeLecturesLecturesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --ion-background-color: rgb(243, 243, 243); }\n\nion-card {\n  --ion-background-color: white; }\n\nion-item {\n  border: #ccc solid 1px;\n  border-radius: 5px; }\n\nion-label {\n  color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ZmaWNlL2xlY3R1cmVzL0M6XFxVc2Vyc1xccmFudWxcXERvY3VtZW50c1xcR2l0SHViXFwybmQgWWVhclxcMm5kIFNlbWVzdGVyXFxVT1BfU0VfWTJTMi1QVVNMMjAwOC1JTlRST0RVQ1RJT04tVE8tSU5URVJORVQtT0YtVEhJTkdTXFxXb3Jrc3BhY2VcXGlTQU0vc3JjXFxhcHBcXG9mZmljZVxcbGVjdHVyZXNcXGxlY3R1cmVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBDQUF1QixFQUFBOztBQUczQjtFQUNJLDZCQUF1QixFQUFBOztBQUczQjtFQUNJLHNCQUFzQjtFQUN0QixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9vZmZpY2UvbGVjdHVyZXMvbGVjdHVyZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAyNDMsIDI0Myk7XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1pdGVte1xyXG4gICAgYm9yZGVyOiAjY2NjIHNvbGlkIDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuaW9uLWxhYmVse1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/office/lectures/lectures.page.ts":
  /*!**************************************************!*\
    !*** ./src/app/office/lectures/lectures.page.ts ***!
    \**************************************************/

  /*! exports provided: LecturesPage */

  /***/
  function srcAppOfficeLecturesLecturesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LecturesPage", function () {
      return LecturesPage;
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


    var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/firebase.service */
    "./src/app/services/firebase.service.ts");
    /* harmony import */


    var _side_menu_side_menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../side-menu/side-menu.page */
    "./src/app/office/side-menu/side-menu.page.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _semester_calendar_edit_lecture_session_modal_edit_lecture_session_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../semester-calendar/edit-lecture-session-modal/edit-lecture-session-modal.page */
    "./src/app/office/semester-calendar/edit-lecture-session-modal/edit-lecture-session-modal.page.ts");
    /* harmony import */


    var _semester_calendar_more_details_session_popover_more_details_session_popover_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../semester-calendar/more-details-session-popover/more-details-session-popover.page */
    "./src/app/office/semester-calendar/more-details-session-popover/more-details-session-popover.page.ts");
    /* harmony import */


    var _notifications_popover_notifications_popover_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../notifications-popover/notifications-popover.page */
    "./src/app/office/notifications-popover/notifications-popover.page.ts");

    var LecturesPage = /*#__PURE__*/function () {
      function LecturesPage(lecturesService, sideMenuPageUserFaculty, popoverController, modalController, alertController) {
        var _this = this;

        _classCallCheck(this, LecturesPage);

        this.lecturesService = lecturesService;
        this.sideMenuPageUserFaculty = sideMenuPageUserFaculty;
        this.popoverController = popoverController;
        this.modalController = modalController;
        this.alertController = alertController;
        this.showLoadingDotsCurrentDateLectureSession = true;
        this.showLoadingDotsAllLectureSession = true;
        this.noLectureSessionTodayText = false;
        this.noLectureSessionAllText = false;

        this.retrievePublishedLectureSessionsCurrentDate = function () {
          _this.lecturesService.retrievePublishedLectureSessionsCurrentDate(_this.sideMenuPageUserFaculty.passLoggedInUserFaculty(), _this.currentDate, _this.nextDate).subscribe(function (response) {
            if (response.length > 0) {
              // Setting loading spinner in todays lecture session to stop spinning
              _this.showLoadingDotsCurrentDateLectureSession = false;
              _this.publishedLectureSessionCurrentDate = response;
            } else {
              // Setting loading spinner in todays lecture session to stop spinning
              _this.showLoadingDotsCurrentDateLectureSession = false;
              _this.noLectureSessionTodayText = true;
            }
          }, function (error) {
            // Setting loading spinner in todays lecture session to stop spinning
            _this.showLoadingDotsCurrentDateLectureSession = false;
            console.log("Error: " + error);

            _this.alertNotice("Error", "An error has occurred: " + error);
          });
        };

        this.lectureSessionsDocuments = [];
        this.calendarLectureSession = {
          mode: 'month',
          currentDate: new Date()
        };
        this.selectedDate = new Date();
      }

      _createClass(LecturesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          // Retrieving current date and time
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
          this.retrievePublishedLectureSessionsCurrentDate(); // Calling function to retrieving the all lecture sessions from the firestore database

          this.lecturesService.retrieveAllPublishedLectureSessions(this.sideMenuPageUserFaculty.passLoggedInUserFaculty()).subscribe(function (allLectureSessionSlots) {
            // Setting loading spinner in all lecture sessions to stop spinning
            _this2.showLoadingDotsAllLectureSession = false;
            _this2.eventSourceLectureSession = []; // Clearing the existing lecture sessions on the calendar before syncing 

            allLectureSessionSlots.forEach(function (snap) {
              var eventLectureSession = snap.payload.doc.data();
              eventLectureSession.id = snap.payload.doc.id;
              eventLectureSession.title = eventLectureSession.moduleCode + "-" + eventLectureSession.moduleTitle + "\n | Status: " + eventLectureSession.status;
              eventLectureSession.startTime = eventLectureSession.startDateTime.toDate();
              eventLectureSession.endTime = eventLectureSession.endDateTime.toDate();
              console.log(eventLectureSession);

              _this2.eventSourceLectureSession.push(eventLectureSession);
            });
          }, function (error) {
            // Setting loading spinner in all lecture sessions to stop spinning
            _this2.showLoadingDotsAllLectureSession = false;
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
                      component: _notifications_popover_notifications_popover_page__WEBPACK_IMPORTED_MODULE_7__["NotificationsPopoverPage"],
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
        } // Editing lecture sessions modal calling (lecture schedule), opening modal

      }, {
        key: "editLectureSessionSchedule",
        value: function editLectureSessionSchedule(value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var editLectureSessionModal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
                      component: _semester_calendar_edit_lecture_session_modal_edit_lecture_session_modal_page__WEBPACK_IMPORTED_MODULE_5__["EditLectureSessionModalPage"],
                      // Passing value to the modal using 'componentProps'
                      componentProps: {
                        lectureSessionId: value.payload.doc.id,
                        lectureSessionBatch: value.payload.doc.data().batch,
                        lectureSessionDegreeProgram: value.payload.doc.data().degree,
                        lectureSessionAcademicYear: value.payload.doc.data().academicYear,
                        lectureSessionAcademicSemester: value.payload.doc.data().academicSemester,
                        lectureSesionModuleCode: value.payload.doc.data().moduleCode,
                        lectureSessionModuleTitle: value.payload.doc.data().moduleTitle,
                        lectureSessionStartDateTime: value.payload.doc.data().startDateTime,
                        lectureSessionEndDateTime: value.payload.doc.data().endDateTime,
                        lectureSessionLecturer: value.payload.doc.data().lecturer,
                        lectureSessionLectureHall: value.payload.doc.data().lectureHall,
                        lectureSessionStatus: value.payload.doc.data().status,
                        userFaculty: this.sideMenuPageUserFaculty.passLoggedInUserFaculty()
                      },
                      // Disabling modal closing from any outside clicks
                      backdropDismiss: false
                    });

                  case 2:
                    editLectureSessionModal = _context2.sent;
                    editLectureSessionModal.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } // Alert Box Implementation

      }, {
        key: "alertNotice",
        value: function alertNotice(title, content) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      header: title,
                      message: content,
                      buttons: ['OK']
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
        }
      }, {
        key: "nextMonthLectureSession",
        value: function nextMonthLectureSession() {
          var frontSwipeLectureSession = document.getElementById('lectureSessionSemesterCalendar').querySelector('.swiper-container')['swiper'];
          frontSwipeLectureSession.slideNext();
        }
      }, {
        key: "previousMonthLectureSession",
        value: function previousMonthLectureSession() {
          var backSwipeLectureSession = document.getElementById('lectureSessionSemesterCalendar').querySelector('.swiper-container')['swiper'];
          backSwipeLectureSession.slidePrev();
        }
      }, {
        key: "onViewTitleChangedLectureSession",
        value: function onViewTitleChangedLectureSession(title) {
          console.log(title);
          this.viewingMonthLectureSession = title;
        }
      }, {
        key: "onEventSelectedLectureSession",
        value: function onEventSelectedLectureSession(event) {
          console.log("Lecture Session Selected: " + event.startTime + " - " + event.endTime + ", " + event.title);
        }
      }, {
        key: "onTimeSelectedLectureSession",
        value: function onTimeSelectedLectureSession(event) {
          console.log("Lecture Session Selected Time: " + event.selectedTime + ", has sessions: " + (event.events !== undefined && event.events.length !== 0) + ", disabled: " + event.disabled);

          if ((event.events !== undefined && event.events.length !== 0) == false) {
            this.lectureSessionsDocuments = [];
            this.noLectureSessionAllText = true;
          } else if ((event.events !== undefined && event.events.length !== 0) == true) {
            this.lectureSessionsDocuments = event.events;
            this.noLectureSessionAllText = false;
          }

          console.log(this.lectureSessionsDocuments);
        }
      }, {
        key: "onCurrentDateChangedLectureSession",
        value: function onCurrentDateChangedLectureSession(event) {
          console.log("Current Lecture Session Date Change: " + event);
          this.lectureSessionsDocuments = [];
        }
      }, {
        key: "onRangeChangedLectureSession",
        value: function onRangeChangedLectureSession(evt) {
          console.log("Lecture Session (Range) Changed: Start Time: " + evt.startTime + ", End Time: " + evt.endTime);
        } // More details of lecture sessions popover

      }, {
        key: "moreDetailsLectureSession",
        value: function moreDetailsLectureSession(ev, value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var moreDetailsLectureSessionPopover;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.popoverController.create({
                      component: _semester_calendar_more_details_session_popover_more_details_session_popover_page__WEBPACK_IMPORTED_MODULE_6__["MoreDetailsSessionPopoverPage"],
                      componentProps: {
                        lectureSessionId: value.id,
                        batch: value.batch,
                        lecturer: value.lecturer,
                        lectureHall: value.lectureHall,
                        degree: value.degree,
                        degreeCode: value.degreeCode,
                        awardingBodyUniversity: value.awardingBodyUniversity,
                        academicPeriodYear: value.academicYear,
                        academicPeriodSemester: value.academicSemester
                      },
                      event: ev
                    });

                  case 2:
                    moreDetailsLectureSessionPopover = _context4.sent;
                    moreDetailsLectureSessionPopover.present();

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        } // Editing lecture sessions modal calling, opening modal

      }, {
        key: "editLectureSession",
        value: function editLectureSession(value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var editLectureSessionModal;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.modalController.create({
                      component: _semester_calendar_edit_lecture_session_modal_edit_lecture_session_modal_page__WEBPACK_IMPORTED_MODULE_5__["EditLectureSessionModalPage"],
                      // Passing value to the modal using 'componentProps'
                      componentProps: {
                        lectureSessionId: value.id,
                        lectureSessionBatch: value.batch,
                        lectureSessionDegreeProgram: value.degreeProgram,
                        lectureSessionAcademicYear: value.academicYear,
                        lectureSessionAcademicSemester: value.academicSemester,
                        lectureSesionModuleCode: value.moduleCode,
                        lectureSessionModuleTitle: value.moduleTitle,
                        lectureSessionStartDateTime: value.startTime,
                        lectureSessionEndDateTime: value.endTime,
                        lectureSessionLecturer: value.lecturer,
                        lectureSessionLectureHall: value.lectureHall,
                        lectureSessionStatus: value.status,
                        userFaculty: this.sideMenuPageUserFaculty.passLoggedInUserFaculty()
                      },
                      // Disabling modal closing from any outside clicks
                      backdropDismiss: false
                    });

                  case 2:
                    editLectureSessionModal = _context5.sent;
                    editLectureSessionModal.present();

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        } // Confirm Box Implementation (Remove existing lecture session)

      }, {
        key: "removeLectureSession",
        value: function removeLectureSession(title, content, value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.alertController.create({
                      header: title,
                      message: content,
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function handler() {
                          console.log("Alert Box: Remove Lecture Session Request Denied");
                        }
                      }, {
                        text: 'Continue',
                        handler: function handler() {
                          console.log("Alert Box: Remove Lecture Session Request Accepted"); // Calling function to remove lecture session

                          _this3.lecturesService.removeLectureSession(_this3.sideMenuPageUserFaculty.passLoggedInUserFaculty(), value);
                        }
                      }]
                    });

                  case 2:
                    alert = _context6.sent;
                    _context6.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return LecturesPage;
    }();

    LecturesPage.ctorParameters = function () {
      return [{
        type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]
      }, {
        type: _side_menu_side_menu_page__WEBPACK_IMPORTED_MODULE_3__["SideMenuPage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }];
    };

    LecturesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-lectures',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./lectures.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/office/lectures/lectures.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./lectures.page.scss */
      "./src/app/office/lectures/lectures.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _side_menu_side_menu_page__WEBPACK_IMPORTED_MODULE_3__["SideMenuPage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])], LecturesPage);
    /***/
  }
}]);
//# sourceMappingURL=lectures-lectures-module-es5.js.map