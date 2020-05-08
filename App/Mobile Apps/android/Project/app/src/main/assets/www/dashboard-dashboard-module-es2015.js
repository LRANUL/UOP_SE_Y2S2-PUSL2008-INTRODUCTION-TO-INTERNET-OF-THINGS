(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/dashboard/dashboard.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/dashboard/dashboard.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"height: 70px;\">\r\n  <ion-toolbar>\r\n\r\n\r\n    <!-- This will add a button to show the side menu when the side menu is hidden in small screens -->\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    \r\n    <ion-title style=\"position: absolute;\r\n                      top: 40%;\">Dashboard</ion-title>\r\n\r\n    <!-- Header Contents Section -->\r\n    <div style=\"position: absolute;\r\n                right: 5px;\r\n                top: 8px;\">\r\n                \r\n      <!-- Notification Bell, Unread Notifications Count, Drop Down -->          \r\n      <ion-button fill=\"clear\" color=\"dark\" style=\"width: 100px;\r\n                                                  height: 45px;\r\n                                                  background-color: white;\" (click)=\"openNotificationPopover($event)\">\r\n\r\n        <!-- Notification Bell Icon -->\r\n        <div style=\"height: 42px;\r\n                    width: 42px;\"> \r\n          <ion-icon name=\"notifications-outline\" style=\"font-size: 35px;\r\n                                                        position: absolute;\r\n                                                        top: 5px;\r\n                                                        left: 0px;\"></ion-icon>\r\n        </div>\r\n\r\n          <!-- Arrow Icon -->\r\n        <div style=\"position: absolute;\r\n                    left: 50px;\r\n                    top: 10px;\r\n                    font-size: 26px;\">\r\n          <ion-icon name=\"chevron-down-outline\"></ion-icon>\r\n        </div>\r\n        \r\n      </ion-button>\r\n\r\n\r\n    </div>\r\n\r\n\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"9.5\">\r\n        <ion-row>\r\n          <ion-col>\r\n\r\n            <ion-card style=\"height: 580px;\">\r\n              <ion-card-header>\r\n                <ion-card-title>\r\n                  Today's Lecturers\r\n                </ion-card-title>\r\n              </ion-card-header>\r\n              <ion-card-content>\r\n\r\n                <ion-grid style=\"height: 510px;\r\n                                overflow-y: auto;\">\r\n                  <ion-row>\r\n                    <ion-col size=\"3\" size-sm=\"12\" size-lg=\"3\" size-xl=\"3\" *ngFor=\"let item of publishedLectureSessionsCurrentDate\">\r\n\r\n                      <ion-card style=\"margin-top: -5px;\">\r\n                        <ion-card-header>\r\n                          <ion-button shape=\"round\" color=\"primary\" size=\"small\" style=\"position: absolute;\r\n                                                                                      top: 0px;\r\n                                                                                      left: 75%;\r\n                                                                                      width: 40px;\r\n                                                                                      height: 40px;\" (click)=\"moreDetailsTodaysLectureSession($event, item)\">\r\n                            <ion-icon name=\"document-text-outline\"></ion-icon>\r\n                          </ion-button>\r\n                          <ion-card-title>\r\n                            <ion-label>\r\n                              {{ item.payload.doc.data().moduleCode }}\r\n                            </ion-label>\r\n                          </ion-card-title>\r\n                          <ion-card-subtitle>\r\n                            <ion-label>\r\n                              {{ item.payload.doc.data().moduleTitle }}\r\n                            </ion-label>\r\n                          </ion-card-subtitle>\r\n                        </ion-card-header>\r\n                        <ion-card-content>\r\n                          <ion-grid>\r\n                            <ion-row>\r\n                              <ion-col size=\"6\">\r\n                                <ion-label>\r\n                                  <b>Lecture Hall: </b>\r\n                                </ion-label>\r\n                              </ion-col>\r\n                              <ion-col size=\"6\">\r\n                                <ion-label>\r\n                                  {{ item.payload.doc.data().lectureHall }}\r\n                                </ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                            <ion-row>\r\n                              <ion-col>\r\n                                <ion-label>\r\n                                  <b>Batch: </b>\r\n                                </ion-label>\r\n                              </ion-col>\r\n                              <ion-col>\r\n                                <ion-label>\r\n                                  {{ item.payload.doc.data().batch }}\r\n                                </ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                            <ion-row>\r\n                              <ion-col>\r\n                                <ion-label>\r\n                                  <b>Degree Code: </b>\r\n                                </ion-label>\r\n                              </ion-col>\r\n                              <ion-col>\r\n                                <ion-label>\r\n                                  {{ item.payload.doc.data().degreeCode }}\r\n                                </ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                            <ion-row>\r\n                              <ion-col>\r\n                                <ion-label>\r\n                                  <b>Lecturer: </b>\r\n                                </ion-label>\r\n                              </ion-col>\r\n                              <ion-col>\r\n                                <ion-label>\r\n                                  {{ item.payload.doc.data().lecturer }}\r\n                                </ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                            <ion-row>\r\n                              <ion-col>\r\n                                <ion-label>\r\n                                  <b>Start Time: </b>\r\n                                </ion-label>\r\n                              </ion-col>\r\n                              <ion-col>\r\n                                <ion-label>\r\n                                  {{ item.payload.doc.data().startDateTime.toDate() | date: 'h:mm a' }}\r\n                                </ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                            <ion-row>\r\n                              <ion-col>\r\n                                <ion-label>\r\n                                  <b>End Time: </b>\r\n                                </ion-label>\r\n                              </ion-col>\r\n                              <ion-col>\r\n                                <ion-label>\r\n                                  {{ item.payload.doc.data().endDateTime.toDate() | date: 'h:mm a' }}\r\n                                </ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                            <ion-row>\r\n                              <ion-col>\r\n                                <ion-label>\r\n                                  <b>Status: </b>\r\n                                </ion-label>\r\n                              </ion-col>\r\n                              <ion-col>\r\n                                <ion-label>\r\n                                  {{ item.payload.doc.data().status }}\r\n                                </ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                          </ion-grid>\r\n                        </ion-card-content>\r\n                      </ion-card>\r\n\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n\r\n                <!-- Loading Spinner -->\r\n                <ion-spinner name=\"dots\" style=\"position: absolute;\r\n                                                left: 50%;\r\n                                                top: 40%;\r\n                                                transform: translate(-50%,-60%);\r\n                                                margin-top: 20px;\r\n                                                height: 100px;\r\n                                                width: 100px;\" *ngIf=\"showLoadingDotsTodaysLectureSession\"></ion-spinner>\r\n\r\n                 <!-- Page loading search module text -->\r\n                <div *ngIf=\"noLectureSessionsTodayText\" style=\"position: absolute;\r\n                                                            top: 150px;\r\n                                                            left: 50%;\r\n                                                            transform: translateX(-50%);\r\n                                                            font-size: 18px;\r\n                                                            border: #ccc solid 2px;\r\n                                                            border-radius: 5px;\r\n                                                            padding: 15px;\r\n                                                            min-width: 200px;\">\r\n                  <ion-icon name=\"close-circle-outline\" style=\"color: rgb(8, 177, 219);\r\n                                                              font-size: 30px;\r\n                                                              margin-top: 2px;\r\n                                                              margin-right: 10px;\"></ion-icon>\r\n                  <ion-label style=\"position: relative;\r\n                                    top: -8px;\r\n                                    text-align: center;\">\r\n                    No Lecture Sessions assigned for today.\r\n                  </ion-label>\r\n                </div>\r\n\r\n              </ion-card-content>\r\n            </ion-card>\r\n\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n\r\n            <ion-card style=\"margin-top: -5px;\">\r\n              <ion-card-header>\r\n                <ion-card-title>\r\n                  Weeks Upcoming Lectures\r\n                </ion-card-title>\r\n              </ion-card-header>\r\n              <ion-card-content>\r\n\r\n                <div style=\"position: absolute;\r\n                            left: 50%;\r\n                            transform: translateX(-50%);\r\n                            top: -40px;\">\r\n                \r\n                  <ion-button fill=\"clear\" (click)=\"previousMonthLecture()\" style=\"margin-top: -12px;\">\r\n                    <ion-icon name=\"arrow-back\"></ion-icon>\r\n                  </ion-button>\r\n\r\n                  <ion-label style=\"font-size: 20px;\">\r\n                    {{ viewingUpcomingLecture }}\r\n                  </ion-label>\r\n\r\n                  <ion-button fill=\"clear\" (click)=\"nextMonthLecture()\" style=\"margin-top: -12px;\">\r\n                    <ion-icon name=\"arrow-forward\"></ion-icon>\r\n                  </ion-button>\r\n\r\n                </div>\r\n                \r\n\r\n                <div style=\"overflow-y: auto;\r\n                            margin-top: 30px;\">\r\n                  <div style=\"height: 700px;\">\r\n                    <calendar [eventSource]=\"eventSourceUpcomingLecture\"\r\n                    [calendarMode]=\"calendarUpcomingLecture.mode\"\r\n                    [currentDate]=\"calendarUpcomingLecture.currentDate\"\r\n                    (onCurrentDateChanged)=\"onCurrentDateChangedUpcomingLecture($event)\"\r\n                    (onRangeChanged)=\"onRangeChangedUpcomingLecture($event)\"\r\n                    (onEventSelected)=\"onEventSelectedUpcomingLecture($event)\"\r\n                    (onTitleChanged)=\"onViewTitleChangedUpcomingLecture($event)\"\r\n                    (onTimeSelected)=\"onTimeSelectedUpcomingLecture($event)\"\r\n                    startHour=\"9\"\r\n                    endHour=\"17\"\r\n                    step=\"30\"\r\n                    startingDayWeek=\"1\" id=\"weeksUpcomingLectureCalendar\">\r\n                  \r\n                    </calendar>\r\n                  </div>\r\n                </div>\r\n\r\n                <div style=\"position: absolute;\r\n                            top: 282px;\r\n                            right: 3.4%;\" *ngFor=\"let item of lectureSessionDocuments\">\r\n                  <ion-button size=\"small\" title=\"Lecture Session Read More\" color=\"secondary\" (click)=\"moreDetailsUpcomingLectureSession($event, item)\" style=\"width: 40px;\r\n                                                                                                                                                                  height: 40px;\r\n                                                                                                                                                                  border-radius: 5px;\r\n                                                                                                                                                                  margin-bottom: -5px;\r\n                                                                                                                                                                  margin-left: -10px;\">\r\n                    <ion-icon name=\"document-text\" style=\"font-size: 30px;\"></ion-icon>\r\n                  </ion-button>\r\n                </div>\r\n\r\n                <div style=\"position: absolute;\r\n                            left: 50%;\r\n                            top: 60%;\r\n                            transform: translate(-50%,-40%);\" *ngIf=\"noLectureSessionText\">\r\n                  <ion-item style=\"border: #ccc solid 1px;\r\n                                  border-radius: 5px;\r\n                                  padding: 5px;\">\r\n                    <ion-label style=\"font-size: 17px;\">\r\n                      No Lecture Sessions on the selected date\r\n                    </ion-label>\r\n                  </ion-item>\r\n                </div>\r\n\r\n                <!-- Loading Spinner -->\r\n                <ion-spinner name=\"dots\" style=\"position: absolute;\r\n                                                left: 50%;\r\n                                                top: 50%;\r\n                                                transform: translate(-50%,-50%);\r\n                                                margin-top: 20px;\r\n                                                height: 100px;\r\n                                                width: 100px;\" *ngIf=\"showLoadingDotsUpcomingLectureSession\"></ion-spinner>\r\n\r\n\r\n              </ion-card-content>\r\n            </ion-card>\r\n\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n\r\n            <ion-card style=\"margin-top: -5px;\r\n                            height: 800px;\">\r\n              <ion-card-header>\r\n                <ion-card-title>\r\n                  Latest Notices from Lecturers\r\n                </ion-card-title>\r\n              </ion-card-header>\r\n              <ion-card-content>\r\n\r\n                <ion-grid style=\"height: 725px;\r\n                                overflow-y: auto;\">\r\n                  <ion-row *ngFor=\"let item of publishedLecturerToPONotices\">\r\n                    <ion-col size=\"12\">\r\n\r\n                      <ion-card>\r\n                        <ion-card-header>\r\n                          <ion-card-title>\r\n                            <ion-label>\r\n                              {{ item.payload.doc.data().noticeTitle }}\r\n                            </ion-label>\r\n                          </ion-card-title>\r\n                          <ion-card-subtitle>\r\n                            <ion-label>\r\n                              {{ item.payload.doc.data().noticeDescription }}\r\n                            </ion-label>\r\n                          </ion-card-subtitle>\r\n                        </ion-card-header>\r\n                        <ion-card-content>\r\n                          <ion-grid>\r\n                            <ion-row>\r\n                              <ion-col size=\"5\">\r\n                                <ion-label>\r\n                                  <b>Notice Category: </b>\r\n                                </ion-label>\r\n                              </ion-col>\r\n                              <ion-col size=\"7\">\r\n                                <ion-label>\r\n                                  {{ item.payload.doc.data().noticeCategory }}\r\n                                </ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                            <ion-row>\r\n                              <ion-col size=\"5\">\r\n                                <ion-label>\r\n                                  <b>Sent By: </b>\r\n                                </ion-label>\r\n                              </ion-col>\r\n                              <ion-col size=\"7\">\r\n                                <ion-label>\r\n                                  {{ item.payload.doc.data().noticeCreatedInfo.createdByLecturerUserId }}\r\n                                </ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                            <ion-row>\r\n                              <ion-col size=\"5\">\r\n                                <ion-label>\r\n                                  <b>Sent At: </b>\r\n                                </ion-label>\r\n                              </ion-col>\r\n                              <ion-col size=\"7\">\r\n                                <ion-label>\r\n                                  {{ item.payload.doc.data().noticeCreatedInfo.createdDateTime.toDate() | date: 'dd-MM-yyyy | h:mm a'}}\r\n                                </ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                          </ion-grid>\r\n                        </ion-card-content>\r\n                      </ion-card>\r\n\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n\r\n                <!-- Loading Spinner -->\r\n                <ion-spinner name=\"dots\" style=\"position: absolute;\r\n                                                left: 50%;\r\n                                                top: 50%;\r\n                                                transform: translate(-50%,-50%);\r\n                                                margin-top: 20px;\r\n                                                height: 100px;\r\n                                                width: 100px;\" *ngIf=\"showLoadingDotsLatestLecturerPONotices\"></ion-spinner>\r\n                                                \r\n                <!-- Text shown if there are no available lecturer to PO notices for the past three days -->\r\n                <div style=\"position: absolute;\r\n                            left: 50%;\r\n                            top: 50%;\r\n                            transform: translate(-50%,-50%);\" *ngIf=\"noLecturerPONoticeText\">\r\n                  <ion-item style=\"border: #ccc solid 1px;\r\n                                  border-radius: 5px;\r\n                                  padding: 5px;\">\r\n                    <ion-label style=\"font-size: 17px;\">\r\n                      No Notices Available\r\n                    </ion-label>\r\n                  </ion-item>\r\n                </div>\r\n\r\n              </ion-card-content>\r\n            </ion-card>\r\n\r\n          </ion-col>\r\n  \r\n        </ion-row>\r\n      </ion-col>\r\n      <ion-col size=\"2.5\">\r\n\r\n        <ion-card style=\"margin-top: 15px;\r\n                        margin-left: -10px;\r\n                        width: 103%;\r\n                        min-height: 60%;\">\r\n          <ion-card-header>\r\n            <ion-card-title>\r\n              User Activity\r\n            </ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n\r\n            <div style=\"border: #ccc solid 1px;\r\n                        border-radius: 5px;\r\n                        width: 100%;\r\n                        height: 130px;\r\n                        padding-right: 10px;\">\r\n                <canvas #userActivityAreaChart></canvas>  \r\n            </div>\r\n\r\n            <ion-label style=\"position: relative;\r\n                              top: 20px;\r\n                              font-size: 17px;\">\r\n              Active Users - \r\n                <span style=\"color: rgb(0, 94, 122)\">\r\n                  <b>\r\n                      {{ calculateTotalOnlineUsers(onlineStudentUsersCount, onlineLecturerUsersCount, onlineProgramOfficeUsersCount) }}\r\n                  </b>\r\n                </span>\r\n            </ion-label>\r\n\r\n            <div style=\"border: #ccc solid 1px;\r\n                        border-radius: 5px;\r\n                        width: 100%;\r\n                        min-height: 590px;\r\n                        position: relative;\r\n                        top: 20px;\">\r\n              \r\n              <ion-grid style=\"min-height: 580px;\">\r\n                <ion-row>\r\n                  <ion-col>\r\n                    <ion-label>\r\n                      <b>Students: \r\n                        <span style=\"color: rgb(4, 126, 163)\">\r\n                          {{ convertToTwoDigit(onlineStudentUsersCount) }}\r\n                          <ion-spinner name=\"crescent\" style=\"height: 15px;\r\n                                                        width: 15px;\" *ngIf=\"activeStudentUsersLoadingSpinner\"></ion-spinner>\r\n                        </span>\r\n                      </b>\r\n                    </ion-label>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col>\r\n\r\n                    <ion-grid style=\"height: 144px;\r\n                                    overflow-y: auto;\">\r\n                      <ion-row>\r\n                        <ion-col>\r\n                          <ion-grid style=\"position: relative;\r\n                                          left: 50%;\r\n                                          top: -15px;\r\n                                          transform: translateX(-50%);\">\r\n                            <ion-spinner name=\"crescent\" style=\"height: 50px;\r\n                                                  width: 50px;\r\n                                                  position: absolute;\r\n                                                  left: 50%;\r\n                                                  top: 40px;\r\n                                                  transform: translateX(-50%);\" *ngIf=\"activeStudentUserDetailsLoadingSpinner\"></ion-spinner>\r\n                            <ion-row *ngFor=\"let item of onlineStudentUserDetails\">\r\n                              <ion-col>\r\n                                <ion-label style=\"font-size: 13px;\r\n                                            position: relative;\r\n                                            left: 20%;\">\r\n                                  {{ item.payload.doc.data().name.prefix }}\r\n                                  {{ item.payload.doc.data().name.firstName }}\r\n                                  {{ item.payload.doc.data().name.lastName }}\r\n                                </ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                          </ion-grid>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-grid>\r\n\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col>\r\n                    <div style=\"border-top: #ccc solid 2px;\"></div>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col>\r\n                    <ion-label>\r\n                      <b>Lecturers: \r\n                        <span style=\"color: rgb(4, 126, 163)\">\r\n                          {{ convertToTwoDigit(onlineLecturerUsersCount) }}\r\n                          <ion-spinner name=\"crescent\" style=\"height: 15px;\r\n                                                        width: 15px;\" *ngIf=\"activeLecturerUsersLoadingSpinner\"></ion-spinner>\r\n                        </span>\r\n                      </b>\r\n                    </ion-label>    \r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col>\r\n\r\n                    <ion-grid style=\"height: 144px;\r\n                                    overflow-y: auto;\">\r\n                      <ion-row>\r\n                        <ion-col>\r\n                          <ion-grid style=\"position: relative;\r\n                                          left: 50%;\r\n                                          top: -15px;\r\n                                          transform: translateX(-50%);\">\r\n                            <ion-spinner name=\"crescent\" style=\"height: 50px;\r\n                                                                width: 50px;\r\n                                                                position: absolute;\r\n                                                                left: 50%;\r\n                                                                top: 40px;\r\n                                                                transform: translateX(-50%);\" *ngIf=\"activeLecturerUserDetailsLoadingSpinner\"></ion-spinner>\r\n                            <ion-row *ngFor=\"let item of onlineLecturerUserDetails\">\r\n                              <ion-col>\r\n                                <ion-label style=\"font-size: 13px;\r\n                                            position: relative;\r\n                                            left: 20%;\">\r\n                                  {{ item.payload.doc.data().name.prefix }}\r\n                                  {{ item.payload.doc.data().name.firstName }}\r\n                                  {{ item.payload.doc.data().name.lastName }}\r\n                                </ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                          </ion-grid>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-grid>\r\n\r\n                  </ion-col>  \r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col>\r\n                    <div style=\"border-top: #ccc solid 2px;\"></div>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col>\r\n                    <ion-label>\r\n                      <b>Program Office Staff: \r\n                        <span style=\"color: rgb(4, 126, 163)\">\r\n                          {{ convertToTwoDigit(onlineProgramOfficeUsersCount) }}\r\n                          <ion-spinner name=\"crescent\" style=\"height: 15px;\r\n                                                        width: 15px;\" *ngIf=\"activeProgramOfficeUsersLoadingSpinner\"></ion-spinner>\r\n                        </span>\r\n                      </b>\r\n                    </ion-label>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col>\r\n\r\n                    <ion-grid style=\"height: 144px;\r\n                                    overflow-y: auto;\">\r\n                      <ion-row>\r\n                        <ion-col>\r\n                          <ion-grid style=\"position: relative;\r\n                                          left: 50%;\r\n                                          top: -15px;\r\n                                          transform: translateX(-50%);\">\r\n                            <ion-spinner name=\"crescent\" style=\"height: 50px;\r\n                                                                width: 50px;\r\n                                                                position: absolute;\r\n                                                                left: 50%;\r\n                                                                top: 40px;\r\n                                                                transform: translateX(-50%);\" *ngIf=\"activeProgramOfficeUserDetailsLoadingSpinner\"></ion-spinner>\r\n                            <ion-row *ngFor=\"let item of onlineProgramOfficeUserDetails\">\r\n                              <ion-col>\r\n                                <ion-label style=\"font-size: 13px;\r\n                                                  position: relative;\r\n                                                  left: 20%;\">\r\n                                  {{ item.payload.doc.data().name.prefix }}\r\n                                  {{ item.payload.doc.data().name.firstName }}\r\n                                  {{ item.payload.doc.data().name.lastName }}\r\n                                </ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                          </ion-grid>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-grid>\r\n\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n              \r\n            </div>\r\n\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/office/dashboard/dashboard-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/office/dashboard/dashboard-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: DashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function() { return DashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/office/dashboard/dashboard.page.ts");




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ "./src/app/office/dashboard/dashboard.module.ts":
/*!******************************************************!*\
  !*** ./src/app/office/dashboard/dashboard.module.ts ***!
  \******************************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/office/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/office/dashboard/dashboard.page.ts");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic2-calendar */ "./node_modules/ionic2-calendar/index.js");








let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardPageRoutingModule"],
            ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__["NgCalendarModule"]
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
    })
], DashboardPageModule);



/***/ }),

/***/ "./src/app/office/dashboard/dashboard.page.scss":
/*!******************************************************!*\
  !*** ./src/app/office/dashboard/dashboard.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color: rgb(243, 243, 243);\n}\n\nion-card {\n  --ion-background-color: white;\n}\n\nion-label {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ZmaWNlL2Rhc2hib2FyZC9DOlxcVXNlcnNcXHJhbnVsXFxEb2N1bWVudHNcXEdpdEh1YlxcMm5kIFllYXJcXDJuZCBTZW1lc3RlclxcVU9QX1NFX1kyUzItUFVTTDIwMDgtSU5UUk9EVUNUSU9OLVRPLUlOVEVSTkVULU9GLVRISU5HU1xcV29ya3NwYWNlXFxpU0FNL3NyY1xcYXBwXFxvZmZpY2VcXGRhc2hib2FyZFxcZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvb2ZmaWNlL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMENBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9vZmZpY2UvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDI0MywgMjQzKTtcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWxhYmVse1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4iLCJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDI0MywgMjQzKTtcbn1cblxuaW9uLWNhcmQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/office/dashboard/dashboard.page.ts":
/*!****************************************************!*\
  !*** ./src/app/office/dashboard/dashboard.page.ts ***!
  \****************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _side_menu_side_menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../side-menu/side-menu.page */ "./src/app/office/side-menu/side-menu.page.ts");
/* harmony import */ var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _notifications_popover_notifications_popover_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../notifications-popover/notifications-popover.page */ "./src/app/office/notifications-popover/notifications-popover.page.ts");







let DashboardPage = class DashboardPage {
    constructor(sideMenuPageUserFaculty, dashboardService, alertController, popoverController) {
        this.sideMenuPageUserFaculty = sideMenuPageUserFaculty;
        this.dashboardService = dashboardService;
        this.alertController = alertController;
        this.popoverController = popoverController;
        this.noLectureSessionText = false;
        this.showLoadingDotsTodaysLectureSession = true;
        this.showLoadingDotsUpcomingLectureSession = true;
        this.showLoadingDotsLatestLecturerPONotices = true;
        this.noLectureSessionsTodayText = false;
        this.noLecturerPONoticeText = false;
        this.activeStudentUsersLoadingSpinner = true;
        this.activeLecturerUsersLoadingSpinner = true;
        this.activeProgramOfficeUsersLoadingSpinner = true;
        this.activeStudentUserDetailsLoadingSpinner = true;
        this.activeLecturerUserDetailsLoadingSpinner = true;
        this.activeProgramOfficeUserDetailsLoadingSpinner = true;
        this.onlineUsersCount = 0;
        this.onlineStudentUsersCount = 0;
        this.onlineLecturerUsersCount = 0;
        this.onlineProgramOfficeUsersCount = 0;
        this.retrieveOnlineUserDetails = () => {
            // Retrieving user details of student users that have an account status "Online" from the firestore database
            this.dashboardService.retrieveOnlineUserDetails("studentUsers").subscribe(response => {
                this.activeStudentUsersLoadingSpinner = false;
                this.onlineStudentUsersCount = response.length;
                this.activeStudentUserDetailsLoadingSpinner = false;
                this.onlineStudentUserDetails = response;
            });
            // Retrieving user details of lecturer users that have an account status "Online" from the firestore database
            this.dashboardService.retrieveOnlineUserDetails("lecturerUsers").subscribe(response => {
                this.activeLecturerUsersLoadingSpinner = false;
                this.onlineLecturerUsersCount = response.length;
                this.activeLecturerUserDetailsLoadingSpinner = false;
                this.onlineLecturerUserDetails = response;
            });
            // Retrieving user details of program office users that have an account status "Online" from the firestore database
            this.dashboardService.retrieveOnlineUserDetails("programOfficeUsers").subscribe(response => {
                this.activeProgramOfficeUsersLoadingSpinner = false;
                this.onlineProgramOfficeUsersCount = response.length;
                this.activeProgramOfficeUserDetailsLoadingSpinner = false;
                this.onlineProgramOfficeUserDetails = response;
            });
        };
        this.retrievePublishedLectureSessionsCurrentDate = () => this.dashboardService.retrievePublishedLectureSessionsCurrentDate(this.sideMenuPageUserFaculty.passLoggedInUserFaculty(), this.currentDate, this.nextDate).subscribe(response => {
            if (response.length > 0) {
                this.showLoadingDotsTodaysLectureSession = false;
                this.publishedLectureSessionsCurrentDate = response;
            }
            else {
                this.showLoadingDotsTodaysLectureSession = false;
                this.noLectureSessionsTodayText = true;
            }
        });
        this.retrievePublishedLecturerToPONotice = () => this.dashboardService.retrievePublishedLecturerToPONotice(this.currentDateNotice, this.dateThreeDaysBeforeCurrentDate).subscribe(response => {
            if (response.length > 0) {
                this.showLoadingDotsLatestLecturerPONotices = false;
                this.publishedLecturerToPONotices = response;
            }
            else {
                this.showLoadingDotsLatestLecturerPONotices = false;
                this.noLecturerPONoticeText = true;
            }
        });
        // Declared to hold the events as array to store the sessions
        this.lectureSessionDocuments = [];
        this.calendarUpcomingLecture = {
            mode: 'month',
            currentDate: new Date()
        };
        this.selectedDate = new Date();
    }
    // Calling the ngOnInit() function when page is rendered on the user's screen
    ionViewWillEnter() {
        this.ngOnInit();
    }
    ngOnInit() {
        this.userActivityAreaChart();
        // Retrieving current date and time
        // Sample: Sun Apr 19 2020 18:44:52 GMT+0530 (India Standard Time)
        this.currentDate = new Date();
        // Setting currentDate time section to zero leaving the date as it is
        // Sample: Sun Apr 19 2020 00:00:00 GMT+0530 (India Standard Time)
        this.currentDate.setHours(0, 0, 0, 0);
        // Retrieving current date and time
        // Sample: Sun Apr 19 2020 18:44:52 GMT+0530 (India Standard Time)
        this.nextDate = new Date();
        // Setting nextDate time section to zero leaving the date as it is
        // Sample: Sun Apr 19 2020 00:00:00 GMT+0530 (India Standard Time)
        this.nextDate.setHours(0, 0, 0, 0);
        // Setting date section to increment by one
        // Sample: Sun Apr 20 2020 00:00:00 GMT+0530 (India Standard Time)
        this.nextDate.setDate(this.nextDate.getDate() + 1);
        this.currentDateNotice = new Date();
        this.dateThreeDaysBeforeCurrentDate = new Date();
        this.dateThreeDaysBeforeCurrentDate.setDate(this.currentDate.getDate() - 3);
        this.retrievePublishedLectureSessionsCurrentDate();
        this.retrievePublishedLecturerToPONotice();
        this.retrieveOnlineUserDetails();
        // Retrieving upcoming published lecture sessions from the firestore database and assigning them to the calendar
        this.dashboardService.retrievePublishedLectureSessionsUpcoming(this.sideMenuPageUserFaculty.passLoggedInUserFaculty()).subscribe(response => {
            // Setting loading spinner in upcoming lecture sessions to stop spinning
            this.showLoadingDotsUpcomingLectureSession = false;
            this.eventSourceUpcomingLecture = []; // Clearing the existing lecture sessions on the calendar before syncing 
            response.forEach(snap => {
                let eventLectureSession = snap.payload.doc.data();
                eventLectureSession.id = snap.payload.doc.id;
                eventLectureSession.title = eventLectureSession.moduleCode + "-" + eventLectureSession.moduleTitle;
                eventLectureSession.startTime = eventLectureSession.startDateTime.toDate();
                eventLectureSession.endTime = eventLectureSession.endDateTime.toDate();
                console.log(eventLectureSession);
                this.eventSourceUpcomingLecture.push(eventLectureSession);
            });
        }, error => {
            // Setting loading spinner in upcoming lecture sessions to stop spinning
            this.showLoadingDotsUpcomingLectureSession = false;
            console.log("Error: " + error);
            this.alertNotice("Error", "An error has occurred: " + error);
        });
    }
    // Process of returning two digits if there is only one digit in a number
    // Sample: Passing - 5, Returning - 05
    convertToTwoDigit(numericValue) {
        if (numericValue < 10) {
            return "0" + numericValue;
        }
        else {
            return numericValue;
        }
    }
    // Processing of adding all the active users
    calculateTotalOnlineUsers(onlineStudentUsers, onlineLecturerUsers, onlineProgramOfficeUsers) {
        let totalActiveUsers = onlineStudentUsers + onlineLecturerUsers + onlineProgramOfficeUsers;
        // Checking if number has one or two digits
        // Adding one more digit if number only has one digit
        // Sample: Passing - 5, Returning = 05
        // Returning total number of active users 
        return this.convertToTwoDigit(totalActiveUsers);
    }
    // Opening notifications popover
    openNotificationPopover(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const moreDetailsLectureSessionPopover = yield this.popoverController.create({
                component: _notifications_popover_notifications_popover_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPopoverPage"],
                componentProps: {
                    loggedInUserId: this.sideMenuPageUserFaculty.passLoggedInUserId()
                },
                event: ev
            });
            moreDetailsLectureSessionPopover.present();
        });
    }
    userActivityAreaChart() {
        this.bars = new chart_js__WEBPACK_IMPORTED_MODULE_5__["Chart"](this.barChart.nativeElement, {
            type: 'line',
            data: {
                labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                datasets: [{
                        label: 'User Activity',
                        data: [320, 353, 339, 323, 342, 359, 335],
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
                                display: false,
                            },
                        }],
                    xAxes: [{
                            ticks: {
                                display: false
                            },
                            gridLines: {
                                display: false,
                            },
                        }],
                }
            }
        });
    }
    moreDetailsTodaysLectureSession(event, value) {
    }
    moreDetailsUpcomingLectureSession(event, value) {
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
    nextMonthLecture() {
        var frontSwipeLecture = document.getElementById('weeksUpcomingLectureCalendar').querySelector('.swiper-container')['swiper'];
        frontSwipeLecture.slideNext();
    }
    previousMonthLecture() {
        var backSwipeLecture = document.getElementById('weeksUpcomingLectureCalendar').querySelector('.swiper-container')['swiper'];
        backSwipeLecture.slidePrev();
    }
    onViewTitleChangedUpcomingLecture(title) {
        console.log(title);
        this.viewingUpcomingLecture = title;
    }
    onEventSelectedUpcomingLecture(event) {
        console.log("Lecture Session Selected: " + event.startTime + " - " + event.endTime + ", " + event.title);
    }
    onTimeSelectedUpcomingLecture(evt) {
        console.log("Lecture Session Selected Time: " + evt.selectedTime + ", has sessions: " + (evt.events !== undefined && evt.events.length !== 0) +
            ", disabled: " + evt.disabled);
        if ((evt.events !== undefined && evt.events.length !== 0) == false) {
            this.noLectureSessionText = true;
            this.lectureSessionDocuments = [];
        }
        else if ((evt.events !== undefined && evt.events.length !== 0) == true) {
            this.noLectureSessionText = false;
            this.lectureSessionDocuments = evt.events;
        }
        console.log(this.lectureSessionDocuments);
    }
    onCurrentDateChangedUpcomingLecture(event) {
        console.log("Current Lecture Session Date Change: " + event);
        this.lectureSessionDocuments = [];
    }
    onRangeChangedUpcomingLecture(evt) {
        console.log("Lecture Session (Range) Changed: Start Time: " + evt.startTime + ", End Time: " + evt.endTime);
    }
};
DashboardPage.ctorParameters = () => [
    { type: _side_menu_side_menu_page__WEBPACK_IMPORTED_MODULE_2__["SideMenuPage"] },
    { type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('userActivityAreaChart', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DashboardPage.prototype, "barChart", void 0);
DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/dashboard/dashboard.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/office/dashboard/dashboard.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_side_menu_side_menu_page__WEBPACK_IMPORTED_MODULE_2__["SideMenuPage"],
        src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]])
], DashboardPage);



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map