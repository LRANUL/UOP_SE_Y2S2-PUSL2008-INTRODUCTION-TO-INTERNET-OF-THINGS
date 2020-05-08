(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["semester-calendar-semester-calendar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/semester-calendar/semester-calendar.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/semester-calendar/semester-calendar.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"height: 70px;\">\r\n  <ion-toolbar>\r\n\r\n\r\n    <!-- This will add a button to show the side menu when the side menu is hidden in small screens -->\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    \r\n    <ion-title style=\"position: absolute;\r\n                      top: 40%;\">Semester Calendar</ion-title>\r\n\r\n    <!-- Header Contents Section -->\r\n    <div style=\"position: absolute;\r\n                right: 5px;\r\n                top: 8px;\">\r\n      <!-- Notification Bell, Unread Notifications Count, Drop Down -->          \r\n\r\n      <ion-button fill=\"clear\" color=\"dark\" style=\"width: 100px;\r\n                                                  height: 45px;\r\n                                                  background-color: white;\" (click)=\"openNotificationPopover($event)\">\r\n\r\n        <!-- Notification Bell Icon -->\r\n        <div style=\"height: 42px;\r\n                  width: 42px;\"> \r\n          <ion-icon name=\"notifications-outline\" style=\"font-size: 35px;\r\n                                                        position: absolute;\r\n                                                        top: 5px;\r\n                                                        left: 0px;\"></ion-icon>\r\n        </div>\r\n\r\n          <!-- Arrow Icon -->\r\n        <div style=\"position: absolute;\r\n                    left: 50px;\r\n                    top: 10px;\r\n                    font-size: 26px;\">\r\n          <ion-icon name=\"chevron-down-outline\"></ion-icon>\r\n        </div>\r\n        \r\n      </ion-button>\r\n      \r\n    </div>\r\n\r\n\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid>\r\n\r\n    <ion-row>\r\n\r\n      <ion-col size=\"12\">\r\n\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title>\r\n              Assigned Semester Calendars\r\n            </ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col size=\"5\">\r\n\r\n                  <form [formGroup]=\"searchSemesterCalendar\" (ngSubmit)=\"doSearchSemesterCalendar(searchSemesterCalendar.value)\">\r\n                    <ion-row>\r\n                      <ion-col>\r\n                        <ion-item>\r\n                          <ion-label style=\"margin-left: 15px;\">Batch</ion-label>\r\n                          <ion-select placeholder=\"Select Batch\" okText=\"Select\" id=\"batchOption\" cancelText=\"Cancel\" formControlName=\"batch\" style=\"max-width: 100%;\">\r\n                            <ion-select-option *ngFor=\"let item of publishedBatches\" value=\"{{ item.payload.doc.data().batch }}\">{{ item.payload.doc.data().batch }}</ion-select-option>\r\n                          </ion-select>\r\n                        </ion-item>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col>\r\n                        <ion-item style=\"margin-top: 10px;\">\r\n                          <ion-label style=\"margin-left: 15px;\">\r\n                            Degree Program\r\n                          </ion-label>\r\n                          <ion-select placeholder=\"Select Degree Program\" okText=\"Select\" cancelText=\"Cancel\" formControlName=\"degreeProgram\" style=\"max-width: 100% !important;\" (ionChange)=\"retrieveAwardingBodyUniversity($event)\">\r\n                              <ion-select-option *ngFor=\"let item of publishedDegreePrograms\" value=\"{{ item.payload.doc.data().degree }}\">\r\n                                {{ item.payload.doc.data().degree }}, {{ item.payload.doc.data().awardingBodyUniversity }}\r\n                              </ion-select-option>\r\n                          </ion-select>\r\n                        </ion-item>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col>\r\n                        <ion-item style=\"margin-top: 10px;\">\r\n                          <ion-label style=\"margin-left: 15px;\">\r\n                            Academic Period\r\n                          </ion-label>\r\n                          <ion-grid>\r\n                            <ion-row>\r\n                              <ion-col>\r\n                                <ion-select placeholder=\"Select Year\" okText=\"Select\" cancelText=\"Cancel\" formControlName=\"academicPeriodYear\" style=\"max-width: 100% !important;\">\r\n                                  <ion-select-option value=\"1\">Year 1</ion-select-option>\r\n                                  <ion-select-option value=\"2\">Year 2</ion-select-option>\r\n                                  <ion-select-option value=\"3\">Year 3</ion-select-option>\r\n                                  <ion-select-option value=\"4\">Year 4</ion-select-option>\r\n                                </ion-select>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                            <ion-row>\r\n                              <ion-col>\r\n                                <ion-select placeholder=\"Select Semester\" okText=\"Select\" cancelText=\"Cancel\" formControlName=\"academicPeriodSemester\" style=\"max-width: 100% !important;\">\r\n                                  <ion-select-option value=\"1\">Semester 1</ion-select-option>\r\n                                  <ion-select-option value=\"2\">Semester 2</ion-select-option>\r\n                                </ion-select>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                          </ion-grid>\r\n                        </ion-item>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col>\r\n                        <ion-button expand=\"block\" type=\"submit\" [disabled]=\"!searchSemesterCalendar.valid\">\r\n                          <ion-icon name=\"search-outline\"></ion-icon>\r\n                          <ion-label style=\"color: white;\r\n                                            margin-left: 10px;\">\r\n                            SEARCH\r\n                          </ion-label>\r\n                        </ion-button>          \r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </form>\r\n\r\n                  <!-- Loading Spinner -->\r\n                  <ion-spinner name=\"dots\" style=\"position: absolute;\r\n                                              left: 50%;\r\n                                              transform: translateX(-50%);\r\n                                              margin-top: -25px;\r\n                                              height: 100px;\r\n                                              width: 100px;\" *ngIf=\"loadingSpinnerPLS\"></ion-spinner>\r\n                \r\n\r\n                </ion-col>\r\n\r\n                  <!-- Vertical line in the center of the page -->\r\n                  <div style=\"border-left: rgb(236, 236, 236) solid 2px;\r\n                              height: 105%;\r\n                              position: absolute;\r\n                              left: 41.7%;\r\n                              top: -40px;\r\n                              transform: translateX(-68.3%);\">\r\n                  </div>\r\n\r\n                <ion-col size=\"7\">\r\n\r\n                  <!-- Reset Button -->\r\n                  <ion-button style=\"width: 90px;\r\n                                    position: absolute;\r\n                                    top: -55px;\r\n                                    right: -1.5%;\" color=\"dark\" fill=\"outline\" size=\"small\" (click)=\"resetSearchAssignedSemesterCalendar()\"> \r\n                    <ion-icon name=\"refresh-outline\"></ion-icon>\r\n                    <ion-label style=\"color: rgb(59, 59, 59);\r\n                                      margin-left: 5px;\">\r\n                      Reset\r\n                    </ion-label>\r\n                  </ion-button>\r\n                  \r\n                  <div style=\"position: absolute;\r\n                            left: 50%;\r\n                            transform: translateX(-50%);\r\n                            top: -40px;\">\r\n                \r\n                    <ion-button fill=\"clear\" (click)=\"previousMonthPSCalendar()\" style=\"margin-top: -12px;\">\r\n                      <ion-icon name=\"arrow-back\"></ion-icon>\r\n                    </ion-button>\r\n\r\n                    <ion-label style=\"font-size: 20px;\">\r\n                      {{ viewingMonthPSCalendar }}\r\n                    </ion-label>\r\n\r\n                    <ion-button fill=\"clear\" (click)=\"nextMonthPSCalendar()\" style=\"margin-top: -12px;\">\r\n                      <ion-icon name=\"arrow-forward\"></ion-icon>\r\n                    </ion-button>\r\n\r\n                  </div>\r\n                \r\n                  <div style=\"overflow-y: scroll;\">\r\n                      <div style=\"height: 450px;\">\r\n                      <calendar [eventSource]=\"eventSourcePSCalendar\"\r\n                      [calendarMode]=\"calendarPSCalendar.mode\"\r\n                      [currentDate]=\"calendarPSCalendar.currentDate\"\r\n                      (onCurrentDateChanged)=\"onCurrentDateChangedPSCalendar($event)\"\r\n                      (onRangeChanged)=\"onRangeChangedPSCalendar($event)\"\r\n                      (onEventSelected)=\"onEventSelectedPSCalendar($event)\"\r\n                      (onTitleChanged)=\"onViewTitleChangedPSCalendar($event)\"\r\n                      (onTimeSelected)=\"onTimeSelectedPSCalendar($event)\"\r\n                      startHour=\"9\"\r\n                      endHour=\"17\"\r\n                      step=\"30\"\r\n                      startingDayWeek=\"1\" id=\"publishedSemesterCalendar\">\r\n                    \r\n                      </calendar>\r\n                    </div>\r\n                  </div>\r\n\r\n\r\n                  <ion-grid style=\"width: 140px;\r\n                                  position: absolute;\r\n                                  top: 282px;\r\n                                  right: 1%;\r\n                                  padding: 0;\r\n                                  margin: 0;\">\r\n                    <ion-row *ngFor=\"let session of lectureSessionsDocuments\">\r\n                      <ion-col>\r\n                        <ion-button size=\"small\" title=\"Lecture Session Read More\" color=\"secondary\" (click)=\"moreDetailsLectureSession($event, session)\" style=\"width: 40px;\r\n                                                                                                                                                                    height: 40px;\r\n                                                                                                                                                                    border-radius: 5px;\r\n                                                                                                                                                                    margin-bottom: -5px;\r\n                                                                                                                                                                    margin-left: -10px;\">\r\n                          <ion-icon name=\"document-text\" style=\"font-size: 30px;\"></ion-icon>\r\n                        </ion-button>\r\n                      </ion-col>\r\n                      <ion-col>\r\n                        <ion-button size=\"small\" title=\"Edit Lecture Session\" color=\"warning\" (click)=\"editLectureSession(session)\" style=\"width: 40px;\r\n                                                                                                                                              height: 40px;\r\n                                                                                                                                              border-radius: 5px;\r\n                                                                                                                                              margin-bottom: -5px;\r\n                                                                                                                                              margin-left: -12px;\">\r\n                          <ion-icon name=\"create\" style=\"color: white;\r\n                                                        font-size: 30px;\"></ion-icon>\r\n                        </ion-button>\r\n                      </ion-col>\r\n                      <ion-col>\r\n                        <ion-button size=\"small\" title=\"Remove Lecture Session\" color=\"danger\"\r\n                          (click)=\"removeLectureSession('Confirmation Required', 'This lecture session will be removed, do you want to continue?', session.id)\" style=\"width: 40px;\r\n                                                                                                                                                              height: 40px;\r\n                                                                                                                                                              border-radius: 5px;\r\n                                                                                                                                                              margin-bottom: -5px;\r\n                                                                                                                                                              margin-left: -14px;\">\r\n                          <ion-icon name=\"trash\" style=\"margin-left: -1px;\r\n                                                        font-size: 30px;\"></ion-icon>\r\n                        </ion-button>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n\r\n\r\n              \r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n\r\n            \r\n            \r\n           \r\n\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n    <ion-row>\r\n\r\n      <ion-col size=\"12\">\r\n\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title>\r\n              Create New Semester Calendar / Add New Lecture Sessions\r\n            </ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col size=\"5.5\" size-sm=\"12\" size-lg=\"5.5\">\r\n                  \r\n                  <ion-card>\r\n                    <ion-card-content>\r\n                      \r\n                      <p style=\"font-size: 20px;\">\r\n                        <b>Semester Information</b>\r\n                      </p>\r\n\r\n                      <form [formGroup]=\"assignNewLectureSlotSC\" (ngSubmit)=\"doPublishLectureSlotSC(assignNewLectureSlotSC.value)\">\r\n\r\n                        <ion-grid>\r\n                          <ion-row>\r\n                            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n                              <ion-label class=\"assignNewLectureSessionSlotFormLabel\">\r\n                                Lecture Series - Batch\r\n                              </ion-label>\r\n                            </ion-col>\r\n                            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n                              <ion-item>\r\n                                <ion-label>\r\n                                  Batch\r\n                                </ion-label>\r\n                                <ion-select placeholder=\"Batch\" style=\"min-width: 100%;\" formControlName=\"batch\">\r\n                                  <ion-select-option *ngFor=\"let item of publishedBatches\" value=\"{{ item.payload.doc.data().batch }}\">\r\n                                    {{ item.payload.doc.data().batch }}\r\n                                  </ion-select-option>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                          <ion-row>\r\n                            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n                              <ion-label class=\"assignNewLectureSessionSlotFormLabel\">\r\n                                Lecture Series - Degree Program\r\n                              </ion-label>\r\n                            </ion-col>\r\n                            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n                              <ion-item>\r\n                                <ion-label>\r\n                                  Degree Program\r\n                                </ion-label>\r\n                                <ion-select placeholder=\"Degree Program\" style=\"min-width: 100%;\" formControlName=\"degreeProgram\" (ionChange)=\"retrieveAwardingBodyUniversity($event)\">\r\n                                  <ion-select-option *ngFor=\"let item of publishedDegreePrograms\"  \r\n                                    value=\"{{ item.payload.doc.data().degree }}\">\r\n                                    {{ item.payload.doc.data().degree }}, {{ item.payload.doc.data().awardingBodyUniversity }}\r\n                                  </ion-select-option>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                          <ion-row>\r\n                            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n                              <ion-label class=\"assignNewLectureSessionSlotFormLabel\">\r\n                                Acadamic Year\r\n                              </ion-label>\r\n                            </ion-col>\r\n                            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n                              <div style=\"border: #ccc solid 1px;\r\n                                          border-radius: 5px;\">\r\n\r\n                                <ion-row>\r\n                                  <ion-select placeholder=\"Select Year\" okText=\"Select\" cancelText=\"Cancel\" style=\"max-width: 100% !important;\" formControlName=\"academicPeriodYear\">\r\n                                      <ion-select-option value=\"1\">Year 1</ion-select-option>\r\n                                      <ion-select-option value=\"2\">Year 2</ion-select-option>\r\n                                      <ion-select-option value=\"3\">Year 3</ion-select-option>\r\n                                      <ion-select-option value=\"4\">Year 4</ion-select-option>\r\n                                 </ion-select>\r\n                                </ion-row>\r\n                                <ion-row>\r\n                                  <ion-select placeholder=\"Select Semester\" okText=\"Select\" cancelText=\"Cancel\" style=\"max-width: 100% !important;\" formControlName=\"academicPeriodSemester\">\r\n                                      <ion-select-option value=\"1\">Semester 1</ion-select-option>\r\n                                      <ion-select-option value=\"2\">Semester 2</ion-select-option>\r\n                                      <ion-select-option value=\"3\">Semester 3</ion-select-option>\r\n                                      <ion-select-option value=\"4\">Semester 4</ion-select-option>\r\n                                  </ion-select>\r\n                                </ion-row>\r\n\r\n                              </div>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                          \r\n                        </ion-grid>\r\n\r\n\r\n                        <p style=\"font-size: 20px;\">\r\n                          <b>Lecture Information</b>\r\n                        </p>\r\n\r\n                        <ion-grid>\r\n                          <ion-row>\r\n                            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n                              <ion-label style=\"margin-left: 5px;\" class=\"assignNewLectureSessionSlotFormLabel\">\r\n                                Lecture Series - Module\r\n                              </ion-label>\r\n                            </ion-col>\r\n                            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n                              <ion-item>\r\n                                <ion-label>\r\n                                  Module\r\n                                </ion-label>\r\n                                <ion-select placeholder=\"Module\" style=\"min-width: 100%;\" formControlName=\"module\" (ionChange)=\"retrieveModuleTitle($event)\">\r\n                                  <ion-select-option *ngFor=\"let item of publishedModules\" value=\"{{ item.payload.doc.data().moduleCode }}\">\r\n                                    {{ item.payload.doc.data().moduleCode }} - {{ item.payload.doc.data().moduleTitle }}\r\n                                  </ion-select-option>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                          <ion-row>\r\n                            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n                              <ion-label style=\"margin-left: 5px;\" class=\"assignNewLectureSessionSlotFormLabel\">\r\n                                Lecturer\r\n                              </ion-label>\r\n                            </ion-col>\r\n                            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n                              <ion-item>\r\n                                <ion-label>\r\n                                  Lecturer\r\n                                </ion-label>\r\n                                <ion-select placeholder=\"Lecturer\" style=\"min-width: 100%;\" formControlName=\"lecturer\">\r\n                                  <ion-select-option *ngFor=\"let item of registeredLecturers\" \r\n                                    value=\"\r\n                                      {{ item.payload.doc.data().name.prefix }}\r\n                                      {{ item.payload.doc.data().name.firstName }}\r\n                                      {{ item.payload.doc.data().name.lastName }}\r\n                                    \">\r\n                                    {{ item.payload.doc.data().name.prefix }}\r\n                                    {{ item.payload.doc.data().name.firstName }}\r\n                                    {{ item.payload.doc.data().name.lastName }}\r\n                                  </ion-select-option>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                          <ion-row>\r\n                            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n                              <ion-label style=\"margin-left: 5px;\" class=\"assignNewLectureSessionSlotFormLabel\">\r\n                                Lecture Hall\r\n                              </ion-label>\r\n                            </ion-col>\r\n                            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n                              <ion-item>\r\n                                <ion-label>\r\n                                  Lecture Hall\r\n                                </ion-label>\r\n                                <ion-select placeholder=\"Lecture Hall\" style=\"min-width: 100%;\" formControlName=\"lectureHall\">\r\n                                  <ion-select-option *ngFor=\"let item of publishedLectureHalls\" value=\"{{ item.payload.doc.data().lectureHall }}\">\r\n                                    {{ item.payload.doc.data().lectureHall }}\r\n                                  </ion-select-option>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                          <ion-row>\r\n                            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n                              <ion-label style=\"margin-left: 5px;\" class=\"assignNewLectureSessionSlotFormLabel\">\r\n                                Lecture Status\r\n                              </ion-label>\r\n                            </ion-col>\r\n                            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n                              <ion-item>\r\n                                <ion-label>\r\n                                  Lecture Status\r\n                                </ion-label>\r\n                                <ion-select placeholder=\"Status\" style=\"min-width: 100%;\" formControlName=\"status\">\r\n                                  <ion-select-option *ngFor=\"let item of publishedLectureSessionStatuses\" value=\"{{ item.payload.doc.data().status }}\">\r\n                                    {{ item.payload.doc.data().status }}\r\n                                  </ion-select-option>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                        </ion-grid>\r\n                        \r\n\r\n\r\n                        <ion-label style=\"font-size: 15px;\r\n                                  margin-left: 30px;\">\r\n                          Select an Option\r\n                        </ion-label>\r\n\r\n                        \r\n                        <ion-grid>\r\n                          <ion-row style=\"padding-bottom: 5px;\">\r\n                            <ion-col>\r\n                              <ion-radio-group (ionChange)=\"loadFormContent($event)\" formControlName=\"addLectureContentLoadOption\">\r\n                                <div style=\"border: #ccc 1px solid;\r\n                                                padding: 5px;\r\n                                                border-radius: 5px;\">\r\n                                  <ion-grid>\r\n                                    <ion-row>\r\n                                      <ion-col>\r\n                                        <ion-item style=\"border: none;\">\r\n                                          <ion-label>Assign Each Session Individually</ion-label>\r\n                                          <ion-radio slot=\"start\" value=\"lectureAssignIndividaully\"></ion-radio>\r\n                                        </ion-item>\r\n                                      </ion-col>\r\n                                    </ion-row>\r\n                                    <ion-row>\r\n                                      <ion-col>\r\n                                        <ion-item style=\"border: none;\">\r\n                                          <ion-label>Assign Same Session on the same day for Multiple Weeks</ion-label>\r\n                                          <ion-radio slot=\"start\" value=\"lectureAssignGroup\"></ion-radio>\r\n                                        </ion-item>\r\n                                      </ion-col>\r\n                                    </ion-row>\r\n                                  </ion-grid>\r\n                               </div>\r\n                              </ion-radio-group>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                        </ion-grid>\r\n\r\n                        \r\n                        <!-- Assign Each Session Manually -->\r\n                        <ion-grid *ngIf=\"userSelectionLectureAssignIndividually\">\r\n                          <ion-row>\r\n                            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n                              <ion-label style=\"margin-left: 50px;\">\r\n                                Session Date\r\n                              </ion-label>\r\n                            </ion-col>\r\n                            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n                              <ion-item>\r\n                                <ion-datetime placeholder=\"Pick Session Date\" formControlName=\"sessionDateSingle\"></ion-datetime>\r\n                              </ion-item>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                          <ion-row>\r\n                            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n                              <ion-label style=\"margin-left: 50px;\">\r\n                                Session Start Time\r\n                              </ion-label>\r\n                            </ion-col>\r\n                            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n                              <ion-item>\r\n                                <ion-datetime placeholder=\"Pick Start Time\" display-format=\"h:mm A\" formControlName=\"sessionStartTimeSingle\"></ion-datetime>\r\n                              </ion-item>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                          <ion-row>\r\n                            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n                              <ion-label style=\"margin-left: 50px;\">\r\n                                Session End Time\r\n                              </ion-label>\r\n                            </ion-col>\r\n                            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n                              <ion-item>\r\n                                <ion-datetime placeholder=\"Pick End Time\" display-format=\"h:mm A\" formControlName=\"sessionEndTimeSingle\"></ion-datetime>\r\n                              </ion-item>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                        </ion-grid>\r\n\r\n\r\n                        <!-- Assign Same Session on the same day for Multiple Weeks -->\r\n                        <ion-grid *ngIf=\"userSelectionLectureAssignGroup\">\r\n                          <ion-row>\r\n                            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n                              <ion-label style=\"margin-left: 50px;\" class=\"assignNewLectureSessionSlotFormLabel\">\r\n                                Session Day\r\n                              </ion-label>\r\n                            </ion-col>\r\n                            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n                              <ion-item>\r\n                                <ion-label>\r\n                                  Day\r\n                                </ion-label>\r\n                                <ion-select placeholder=\"Select Day\" style=\"min-width: 100%;\" formControlName=\"sessionDayMultiple\">\r\n                                  <ion-select-option value=\"Mon\">Monday</ion-select-option>\r\n                                  <ion-select-option value=\"Tue\">Tuesday</ion-select-option>\r\n                                  <ion-select-option value=\"Wed\">Wednesday</ion-select-option>\r\n                                  <ion-select-option value=\"Thu\">Thrusday</ion-select-option>\r\n                                  <ion-select-option value=\"Fri\">Friday</ion-select-option>\r\n                                  <ion-select-option value=\"Sat\">Saturday</ion-select-option>\r\n                                  <ion-select-option value=\"Sun\">Sunday</ion-select-option>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                          <ion-row>\r\n                            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n                              <ion-label style=\"margin-left: 50px;\" class=\"assignNewLectureSessionSlotFormLabel\">\r\n                                Session Start Date\r\n                              </ion-label>\r\n                            </ion-col>\r\n                            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n                              <ion-item>\r\n                                <ion-datetime value=\"2020-03-02\" formControlName=\"sessionStartDateMultiple\"></ion-datetime>\r\n                              </ion-item>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                          <ion-row>\r\n                            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n                              <ion-label style=\"margin-left: 50px;\" class=\"assignNewLectureSessionSlotFormLabel\">\r\n                                Session End Date\r\n                              </ion-label>\r\n                            </ion-col>\r\n                            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n                              <ion-item>\r\n                                <ion-datetime value=\"2020-03-02\" formControlName=\"sessionEndDateMultiple\"></ion-datetime>\r\n                              </ion-item>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                          <ion-row>\r\n                            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n                              <ion-label style=\"margin-left: 50px;\" class=\"assignNewLectureSessionSlotFormLabel\">\r\n                                Session Start Time\r\n                              </ion-label>\r\n                            </ion-col>\r\n                            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n                              <ion-item>\r\n                                <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\" value=\"09:00\" formControlName=\"sessionStartTimeMultiple\"></ion-datetime>\r\n                              </ion-item>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                          <ion-row>\r\n                            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n                              <ion-label style=\"margin-left: 50px;\" class=\"assignNewLectureSessionSlotFormLabel\">\r\n                                Session End Time\r\n                              </ion-label>\r\n                            </ion-col>\r\n                            <ion-col size=\"12\" size-sm=\"12\" size-lg=\"6\">\r\n                              <ion-item>\r\n                                <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\" value=\"12:00\" formControlName=\"sessionEndTimeMultiple\"></ion-datetime>\r\n                              </ion-item>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                        </ion-grid>\r\n                        \r\n                        <!-- Horizontal line -->\r\n                        <div style=\"border-bottom: #ccc solid 2px;\r\n                                    width: 100%;\r\n                                    margin-top: 10px;\r\n                                    margin-bottom: 20px;\">\r\n                        </div>\r\n\r\n                        <ion-button expand=\"block\" type=\"submit\" [disabled]=\"!assignNewLectureSlotSC.valid\">\r\n                          Add Session\r\n                        </ion-button>\r\n\r\n                      </form>\r\n\r\n                    </ion-card-content>\r\n                  </ion-card>\r\n\r\n                </ion-col>\r\n                <ion-col size=\"6.5\" size-sm=\"12\" size-lg=\"6.5\">\r\n                  \r\n                  <!-- Reset Button -->\r\n                  <ion-button style=\"width: 90px;\r\n                                    position: absolute;\r\n                                    top: -55px;\r\n                                    right: -1.5%;\" color=\"dark\" fill=\"outline\" size=\"small\" (click)=\"resetAssignSemesterCalendar()\"> \r\n                    <ion-icon name=\"refresh-outline\"></ion-icon>\r\n                    <ion-label style=\"color: rgb(59, 59, 59);\r\n                                      margin-left: 5px;\">\r\n                      Reset\r\n                    </ion-label>\r\n                  </ion-button>\r\n                  \r\n\r\n                  <ion-card>\r\n                    <ion-card-header>\r\n                      <p style=\"font-size: 20px;\">\r\n                        <b>Active Calendar</b>\r\n                      </p>\r\n                    </ion-card-header>\r\n                    <ion-card-content>\r\n                      \r\n                      <div style=\"position: absolute;\r\n                            left: 50%;\r\n                            transform: translateX(-50%);\r\n                            top: -50px;\">\r\n                \r\n                        <ion-button fill=\"clear\" (click)=\"previousMonthASCalendar()\" style=\"margin-top: -12px;\">\r\n                          <ion-icon name=\"arrow-back\"></ion-icon>\r\n                        </ion-button>\r\n\r\n                        <ion-label style=\"font-size: 20px;\">\r\n                          {{ viewingMonthASCalendar }}\r\n                        </ion-label>\r\n\r\n                        <ion-button fill=\"clear\" (click)=\"nextMonthASCalendar()\" style=\"margin-top: -12px;\">\r\n                          <ion-icon name=\"arrow-forward\"></ion-icon>\r\n                        </ion-button>\r\n\r\n                      </div>\r\n\r\n                      <div style=\"overflow-y: scroll;\r\n                                  margin-top: 20px;\">\r\n                        <div style=\"height: 500px;\">\r\n                          <calendar [eventSource]=\"eventSourceASCalendar\"\r\n                          [calendarMode]=\"calendarASCalendar.mode\"\r\n                          [currentDate]=\"calendarASCalendar.currentDate\"\r\n                          (onCurrentDateChanged)=\"onCurrentDateChangedASCalendar($event)\"\r\n                          (onRangeChanged)=\"onRangeChangedASCalendar($event)\"\r\n                          (onEventSelected)=\"onEventSelectedASCalendar($event)\"\r\n                          (onTitleChanged)=\"onViewTitleChangedASCalendar($event)\"\r\n                          (onTimeSelected)=\"onTimeSelectedASCalendar($event)\"\r\n                          startHour=\"9\"\r\n                          endHour=\"17\"\r\n                          step=\"30\"\r\n                          startingDayWeek=\"1\" id=\"activeSemesterCalendar\">\r\n                        \r\n                          </calendar>\r\n                        </div>\r\n                      </div>\r\n\r\n                    </ion-card-content>\r\n                  </ion-card>\r\n\r\n                </ion-col>\r\n              </ion-row>\r\n\r\n            </ion-grid>\r\n\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n    <ion-row>\r\n\r\n      <ion-col>\r\n\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title>\r\n              Lecture Series\r\n            </ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n\r\n            <ion-grid>\r\n              <ion-row>\r\n\r\n                <ion-col>\r\n      \r\n                  <ion-card>\r\n                    <ion-card-header>\r\n                      <p style=\"font-size: 20px;\">\r\n                        <b>Create New Lecture Series</b>\r\n                      </p>\r\n                    </ion-card-header>\r\n                    <ion-card-content>\r\n                      \r\n                    <form [formGroup]=\"createNewLectureSeriesForm\" (ngSubmit)=\"doCreateNewLectureSeries(createNewLectureSeriesForm.value)\">\r\n                        <ion-grid>\r\n                          <ion-row>\r\n\r\n                            <ion-col size=\"5\">\r\n                              <ion-label class=\"createNewLectureSeriesFormLabel\">\r\n                                Degree Program\r\n                              </ion-label>\r\n                            </ion-col>\r\n                            <ion-col size=\"7\">\r\n                              <ion-item>\r\n                                <ion-label>\r\n                                  Degree Program\r\n                                </ion-label>\r\n                                <ion-select placeholder=\"Select Program\" style=\"min-width: 100%;\" formControlName=\"degreeProgram\" (ionChange)=\"retrieveAwardingBodyUniversity($event)\">\r\n                                  <ion-select-option *ngFor=\"let item of publishedDegreePrograms\" value=\"{{ item.payload.doc.data().degree }}\" >\r\n                                    {{ item.payload.doc.data().degree }}, {{ item.payload.doc.data().awardingBodyUniversity }}\r\n                                  </ion-select-option>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                            </ion-col>\r\n                            \r\n                          </ion-row>\r\n                          <ion-row>\r\n\r\n                            <ion-col size=\"5\">\r\n                              <ion-label class=\"createNewLectureSeriesFormLabel\">\r\n                                Batch\r\n                              </ion-label>\r\n                            </ion-col>\r\n                            <ion-col size=\"7\">\r\n                              <ion-item>\r\n                                <ion-label>\r\n                                  Batch\r\n                                </ion-label>\r\n                                <ion-select placeholder=\"Select Batch\" style=\"min-width: 100%;\" formControlName=\"batch\">\r\n                                  <ion-select-option *ngFor=\"let item of publishedBatches\" value=\"{{ item.payload.doc.data().batch }}\">\r\n                                    {{ item.payload.doc.data().batch }}\r\n                                  </ion-select-option>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                            </ion-col>\r\n                            \r\n                          </ion-row>\r\n                          <ion-row>\r\n\r\n                            <ion-col size=\"5\">\r\n                              <ion-label class=\"createNewLectureSeriesFormLabel\">\r\n                                Module\r\n                              </ion-label>\r\n                            </ion-col>\r\n                            <ion-col size=\"7\">\r\n                              <ion-item>\r\n                                <ion-label>\r\n                                  Module\r\n                                </ion-label>\r\n                                <ion-select placeholder=\"Select Module\" style=\"min-width: 100%;\" (ionChange)=\"retrieveModuleTitle($event)\" formControlName=\"module\">\r\n                                  <ion-select-option *ngFor=\"let item of publishedModules\" \r\n                                    value=\"{{ item.payload.doc.data().moduleCode }}\" (ionChange)=\"retrieveModuleTitle($event)\">\r\n                                      {{ item.payload.doc.data().moduleCode }} - {{ item.payload.doc.data().moduleTitle }}\r\n                                  </ion-select-option>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                            </ion-col>\r\n\r\n                          </ion-row>\r\n                          <ion-row>\r\n\r\n                            <ion-col size=\"5\">\r\n                              <ion-label class=\"createNewLectureSeriesFormLabel\">\r\n                                Number of Lectures \r\n                              </ion-label>\r\n                            </ion-col>\r\n                            <ion-col size=\"7\">\r\n                              <ion-item>\r\n                                <ion-input type=\"number\" clearInput placeholder=\"No Of Lectures\" formControlName=\"noOfLectures\"></ion-input>\r\n                              </ion-item>\r\n                            </ion-col>\r\n\r\n                          </ion-row>\r\n                          <ion-row>\r\n\r\n                            <ion-col size=\"5\">\r\n                              <ion-label class=\"createNewLectureSeriesFormLabel\">\r\n                                Enrollment KEY\r\n                              </ion-label>\r\n                              <ion-button style=\"position: absolute;\r\n                                                right: 5%;\">\r\n                                Generate\r\n                              </ion-button>\r\n                            </ion-col>\r\n                            <ion-col size=\"7\">\r\n                              <ion-item>\r\n                                <ion-input type=\"text\" placeholder=\"Key\" formControlName=\"enrollmentKey\"></ion-input>\r\n                              </ion-item>\r\n                            </ion-col>\r\n\r\n                          </ion-row>\r\n                          <ion-row>\r\n\r\n                            <ion-col>\r\n                              <ion-checkbox checked=\"false\"></ion-checkbox>\r\n                              <p style=\"position: absolute;\r\n                                        top: 5px;\r\n                                        left: 30px;\">Send Email to Batch Students (Outlook)</p>\r\n                            </ion-col>\r\n\r\n                          </ion-row>\r\n\r\n                          <ion-button expand=\"block\" type=\"submit\" [disabled]=\"!createNewLectureSeriesForm.valid\">\r\n                            CREATE\r\n                          </ion-button>\r\n                          \r\n                        </ion-grid>\r\n                      </form>\r\n\r\n\r\n                      <!-- Reset Button -->\r\n                      <ion-button style=\"width: 90px;\r\n                                        position: absolute;\r\n                                        top: -55px;\r\n                                        right: 1.5%;\" color=\"dark\" fill=\"outline\" size=\"small\" (click)=\"resetCreatedLectureSeries()\"> \r\n                        <ion-icon name=\"refresh-outline\"></ion-icon>\r\n                        <ion-label style=\"color: rgb(59, 59, 59);\r\n                                          margin-left: 5px;\">\r\n                          Reset\r\n                        </ion-label>\r\n                      </ion-button>\r\n                  \r\n\r\n                    </ion-card-content>\r\n                  </ion-card>\r\n      \r\n      \r\n                </ion-col>\r\n                <ion-col>\r\n      \r\n                  <ion-card>\r\n                    <ion-card-header>\r\n                      <p style=\"font-size: 20px;\">\r\n                        <b>View Created Lecture Series</b>\r\n                      </p>\r\n                    </ion-card-header>\r\n                    <ion-card-content>\r\n                      \r\n                      <form [formGroup]=\"searchLectureSeriesForm\" (ngSubmit)=\"doSearchLectureSeries(searchLectureSeriesForm.value)\">\r\n                        <ion-grid>\r\n                          <ion-row>\r\n                            \r\n                            <ion-col size=\"5\">\r\n                              <ion-label class=\"viewCreatedLectureSeriesFormLabel\">\r\n                                Degree Program\r\n                              </ion-label>\r\n                            </ion-col>\r\n                            <ion-col size=\"7\">\r\n                              <ion-item>\r\n                                <ion-label>\r\n                                  Degree Program\r\n                                </ion-label>\r\n                                <ion-select placeholder=\"Select Program\" style=\"min-width: 100%;\" (ionChange)=\"retrieveAwardingBodyUniversity($event)\" formControlName=\"degreeProgram\">\r\n                                  <ion-select-option *ngFor=\"let item of publishedDegreePrograms\" value=\"{{ item.payload.doc.data().degree }}\">\r\n                                    {{ item.payload.doc.data().degree }}, {{ item.payload.doc.data().awardingBodyUniversity }}\r\n                                  </ion-select-option>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                            </ion-col>\r\n                            \r\n                          </ion-row>\r\n                          <ion-row>\r\n            \r\n                            <ion-col size=\"5\">\r\n                              <ion-label class=\"viewCreatedLectureSeriesFormLabel\">\r\n                                Batch\r\n                              </ion-label>\r\n                            </ion-col>\r\n                            <ion-col size=\"7\">\r\n                              <ion-item>\r\n                                <ion-label>\r\n                                  Batch\r\n                                </ion-label>\r\n                                <ion-select placeholder=\"Select Batch\" style=\"min-width: 100%;\" formControlName=\"batch\">\r\n                                  <ion-select-option *ngFor=\"let item of publishedBatches\" value=\"{{ item.payload.doc.data().batch }}\">\r\n                                    {{ item.payload.doc.data().batch }}\r\n                                  </ion-select-option>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                            </ion-col>\r\n                            \r\n                          </ion-row>\r\n                          <ion-row>\r\n            \r\n                            <ion-col size=\"5\">\r\n                              <ion-label class=\"viewCreatedLectureSeriesFormLabel\">\r\n                                Module\r\n                              </ion-label>\r\n                            </ion-col>\r\n                            <ion-col size=\"7\">\r\n                              <ion-item>\r\n                                <ion-label>\r\n                                  Module\r\n                                </ion-label>\r\n                                <ion-select placeholder=\"Select Module\" style=\"min-width: 100%;\" (ionChange)=\"retrieveModuleTitle($event)\" formControlName=\"module\">\r\n                                  <ion-select-option *ngFor=\"let item of publishedModules\" \r\n                                    value=\"{{ item.payload.doc.data().moduleCode }}\">\r\n                                      {{ item.payload.doc.data().moduleCode }} - {{ item.payload.doc.data().moduleTitle }}\r\n                                  </ion-select-option>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                            </ion-col>\r\n            \r\n                          </ion-row>\r\n                        </ion-grid>\r\n            \r\n                        <ion-button expand=\"block\" type=\"submit\" [disabled]=\"!searchLectureSeriesForm.valid\"> \r\n                          Search\r\n                        </ion-button>\r\n                      </form>\r\n\r\n                      <ng-container *ngIf=\"showPublishedLectureSeries\">\r\n                        <ion-card *ngFor=\"let item of publishedLectureSeries\">\r\n\r\n                          <ion-card-content>\r\n\r\n                            <ion-label style=\"font-size: 15px;\">\r\n                              Published Lecturer Series\r\n                            </ion-label>\r\n\r\n                            <ion-card>\r\n\r\n                              <ion-card-content>\r\n                                <ion-grid>\r\n                                  <ion-row>\r\n                                    <ion-col size=\"5\">\r\n                                      <ion-label class=\"searchLectureSeriesFormLabel\">\r\n                                        <b>No of Lectures: </b>\r\n                                      </ion-label>\r\n                                    </ion-col>\r\n                                    <ion-col size=\"7\">\r\n                                      <ion-label>\r\n                                        {{ item.payload.doc.data().noOfLectures }} lecturers\r\n                                      </ion-label>\r\n                                    </ion-col>\r\n                                  </ion-row>\r\n                                  <ion-row>\r\n                                    <ion-col size=\"5\">\r\n                                      <ion-label class=\"searchLectureSeriesFormLabel\">\r\n                                        <b>Enrollment Key: </b>\r\n                                      </ion-label>\r\n                                    </ion-col>\r\n                                    <ion-col size=\"7\">\r\n                                      <ion-label>\r\n                                        {{ item.payload.doc.data().enrollmentKey }}\r\n                                      </ion-label>\r\n                                    </ion-col>\r\n                                  </ion-row>\r\n                                  <ion-row>\r\n                                    <ion-col size=\"5\">\r\n                                      <ion-label class=\"searchLectureSeriesFormLabel\">\r\n                                        <b>Enrolled Students </b>\r\n                                      </ion-label>\r\n                                    </ion-col>\r\n                                    <ion-col size=\"7\">\r\n                                      <div style=\"height: 300px;\r\n                                                  border: #ccc solid 1px;\r\n                                                  border-radius: 5pxl;\r\n                                                  padding: 5px;\r\n                                                  overflow-y: scroll;\">\r\n                                        <ion-label>\r\n                                          {{ item.payload.doc.data().enrolledStudents }}\r\n                                        </ion-label>\r\n                                      </div>\r\n                                    </ion-col>\r\n                                  </ion-row>\r\n                                </ion-grid>\r\n\r\n                                <ion-grid style=\"position: absolute;\r\n                                                top: 280px;\">\r\n                                  <ion-row>\r\n                                    <ion-col>\r\n                                      <ion-button color=\"secondary\" style=\"width: 120px;\" (click)=\"editLectureSeries(item)\">\r\n                                        <ion-icon name=\"create-outline\"></ion-icon>\r\n                                        <ion-label style=\"color: white;\r\n                                                          margin-left: 5px;\">\r\n                                          EDIT\r\n                                        </ion-label>\r\n                                      </ion-button>\r\n                                    </ion-col>\r\n                                  </ion-row>\r\n                                  <ion-row>\r\n                                    <ion-col>\r\n                                      <ion-button color=\"danger\" style=\"width: 120px;\" \r\n                                        (click)=\"removeLectureSeries('Confirmation Required', 'This lecture series will be removed, do you want to continue? ', item)\">\r\n                                        <ion-icon name=\"trash-outline\"></ion-icon>\r\n                                        <ion-label style=\"color: white;\r\n                                                          margin-left: 5px;\">\r\n                                          REMOVE\r\n                                        </ion-label>\r\n                                      </ion-button>\r\n                                    </ion-col>\r\n                                  </ion-row>\r\n                                </ion-grid>\r\n                                \r\n\r\n\r\n\r\n\r\n\r\n                              </ion-card-content>\r\n\r\n                            </ion-card>\r\n\r\n                          </ion-card-content>\r\n\r\n                        </ion-card>\r\n                      </ng-container>\r\n\r\n\r\n                       <!-- Reset Button -->\r\n                      <ion-button style=\"width: 90px;\r\n                                        position: absolute;\r\n                                        top: -55px;\r\n                                        right: 1.5%;\" color=\"dark\" fill=\"outline\" size=\"small\" (click)=\"resetSearchCreatedLectureSeries()\"> \r\n                        <ion-icon name=\"refresh-outline\"></ion-icon>\r\n                        <ion-label style=\"color: rgb(59, 59, 59);\r\n                                          margin-left: 5px;\">\r\n                          Reset\r\n                        </ion-label>\r\n                      </ion-button>\r\n                  \r\n\r\n\r\n                    </ion-card-content>\r\n                  </ion-card>\r\n      \r\n                </ion-col>\r\n      \r\n              </ion-row>\r\n\r\n            </ion-grid>\r\n\r\n\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n\r\n\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ "./src/app/office/semester-calendar/semester-calendar-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/office/semester-calendar/semester-calendar-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: SemesterCalendarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SemesterCalendarPageRoutingModule", function() { return SemesterCalendarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _semester_calendar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./semester-calendar.page */ "./src/app/office/semester-calendar/semester-calendar.page.ts");




const routes = [
    {
        path: '',
        component: _semester_calendar_page__WEBPACK_IMPORTED_MODULE_3__["SemesterCalendarPage"]
    }
];
let SemesterCalendarPageRoutingModule = class SemesterCalendarPageRoutingModule {
};
SemesterCalendarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SemesterCalendarPageRoutingModule);



/***/ }),

/***/ "./src/app/office/semester-calendar/semester-calendar.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/office/semester-calendar/semester-calendar.module.ts ***!
  \**********************************************************************/
/*! exports provided: SemesterCalendarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SemesterCalendarPageModule", function() { return SemesterCalendarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _semester_calendar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./semester-calendar-routing.module */ "./src/app/office/semester-calendar/semester-calendar-routing.module.ts");
/* harmony import */ var _semester_calendar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./semester-calendar.page */ "./src/app/office/semester-calendar/semester-calendar.page.ts");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic2-calendar */ "./node_modules/ionic2-calendar/index.js");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-material-timepicker */ "./node_modules/ngx-material-timepicker/fesm2015/ngx-material-timepicker.js");










let SemesterCalendarPageModule = class SemesterCalendarPageModule {
};
SemesterCalendarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__["NgCalendarModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _semester_calendar_routing_module__WEBPACK_IMPORTED_MODULE_5__["SemesterCalendarPageRoutingModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
            ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_9__["NgxMaterialTimepickerModule"]
        ],
        declarations: [_semester_calendar_page__WEBPACK_IMPORTED_MODULE_6__["SemesterCalendarPage"]]
    })
], SemesterCalendarPageModule);



/***/ }),

/***/ "./src/app/office/semester-calendar/semester-calendar.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/office/semester-calendar/semester-calendar.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color: rgb(243, 243, 243);\n}\n\nion-card {\n  --ion-background-color: white;\n}\n\nion-item {\n  border: #ccc solid 1px;\n  border-radius: 5px;\n}\n\nion-label {\n  color: black;\n}\n\n.viewCreatedLectureSeriesFormLabel {\n  position: relative;\n  top: 15px;\n  font-size: 15px;\n}\n\n.createNewLectureSeriesFormLabel {\n  position: relative;\n  top: 15px;\n  font-size: 15px;\n}\n\n.assignNewLectureSessionSlotFormLabel {\n  position: relative;\n  top: 15px;\n  font-size: 15px;\n}\n\n.searchLectureSeriesFormLabel {\n  position: relative;\n  top: 2px;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ZmaWNlL3NlbWVzdGVyLWNhbGVuZGFyL0M6XFxVc2Vyc1xccmFudWxcXERvY3VtZW50c1xcR2l0SHViXFwybmQgWWVhclxcMm5kIFNlbWVzdGVyXFxVT1BfU0VfWTJTMi1QVVNMMjAwOC1JTlRST0RVQ1RJT04tVE8tSU5URVJORVQtT0YtVEhJTkdTXFxXb3Jrc3BhY2VcXGlTQU0vc3JjXFxhcHBcXG9mZmljZVxcc2VtZXN0ZXItY2FsZW5kYXJcXHNlbWVzdGVyLWNhbGVuZGFyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvb2ZmaWNlL3NlbWVzdGVyLWNhbGVuZGFyL3NlbWVzdGVyLWNhbGVuZGFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBDQUFBO0FDQ0o7O0FERUE7RUFDSSw2QkFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvb2ZmaWNlL3NlbWVzdGVyLWNhbGVuZGFyL3NlbWVzdGVyLWNhbGVuZGFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjQzLCAyNDMpO1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24taXRlbXtcclxuICAgIGJvcmRlcjogI2NjYyBzb2xpZCAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbmlvbi1sYWJlbHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnZpZXdDcmVhdGVkTGVjdHVyZVNlcmllc0Zvcm1MYWJlbHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLmNyZWF0ZU5ld0xlY3R1cmVTZXJpZXNGb3JtTGFiZWx7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5hc3NpZ25OZXdMZWN0dXJlU2Vzc2lvblNsb3RGb3JtTGFiZWx7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5zZWFyY2hMZWN0dXJlU2VyaWVzRm9ybUxhYmVse1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAycHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbiIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjQzLCAyNDMpO1xufVxuXG5pb24tY2FyZCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5pb24taXRlbSB7XG4gIGJvcmRlcjogI2NjYyBzb2xpZCAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udmlld0NyZWF0ZWRMZWN0dXJlU2VyaWVzRm9ybUxhYmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmNyZWF0ZU5ld0xlY3R1cmVTZXJpZXNGb3JtTGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uYXNzaWduTmV3TGVjdHVyZVNlc3Npb25TbG90Rm9ybUxhYmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnNlYXJjaExlY3R1cmVTZXJpZXNGb3JtTGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnB4O1xuICBmb250LXNpemU6IDE1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/office/semester-calendar/semester-calendar.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/office/semester-calendar/semester-calendar.page.ts ***!
  \********************************************************************/
/*! exports provided: SemesterCalendarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SemesterCalendarPage", function() { return SemesterCalendarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _side_menu_side_menu_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../side-menu/side-menu.page */ "./src/app/office/side-menu/side-menu.page.ts");
/* harmony import */ var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _edit_lecture_session_modal_edit_lecture_session_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-lecture-session-modal/edit-lecture-session-modal.page */ "./src/app/office/semester-calendar/edit-lecture-session-modal/edit-lecture-session-modal.page.ts");
/* harmony import */ var _more_details_session_popover_more_details_session_popover_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./more-details-session-popover/more-details-session-popover.page */ "./src/app/office/semester-calendar/more-details-session-popover/more-details-session-popover.page.ts");
/* harmony import */ var _edit_lecture_series_modal_edit_lecture_series_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-lecture-series-modal/edit-lecture-series-modal.page */ "./src/app/office/semester-calendar/edit-lecture-series-modal/edit-lecture-series-modal.page.ts");
/* harmony import */ var _notifications_popover_notifications_popover_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../notifications-popover/notifications-popover.page */ "./src/app/office/notifications-popover/notifications-popover.page.ts");










let SemesterCalendarPage = class SemesterCalendarPage {
    constructor(formBuilder, alertController, modalController, popoverController, sideMenuPageUserFaculty, semesterCalendarService) {
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.modalController = modalController;
        this.popoverController = popoverController;
        this.sideMenuPageUserFaculty = sideMenuPageUserFaculty;
        this.semesterCalendarService = semesterCalendarService;
        this.loadingSpinnerPLS = false;
        this.showPublishedLectureSeries = false;
        this.retrievePublishedBatch = () => {
            this.semesterCalendarService.retrievePublishedBatch(this.sideMenuPageUserFaculty.passLoggedInUserFaculty()).subscribe(response => (this.publishedBatches = response));
        };
        this.retrievePublishedDegreeProgram = () => {
            this.semesterCalendarService.retrievePublishedDegreeProgram(this.sideMenuPageUserFaculty.passLoggedInUserFaculty()).subscribe(response => (this.publishedDegreePrograms = response));
        };
        this.retrieveRegisteredModules = () => this.semesterCalendarService.retrieveRegisteredModules(this.sideMenuPageUserFaculty.passLoggedInUserFaculty()).subscribe(response => (this.publishedModules = response));
        this.retrieveRegisteredLecturers = () => this.semesterCalendarService.retrieveRegisteredLecturers().subscribe(response => (this.registeredLecturers = response));
        this.retrievePublishedLectureHalls = () => this.semesterCalendarService.retrievePublishedLectureHalls(this.sideMenuPageUserFaculty.passLoggedInUserFaculty()).subscribe(response => (this.publishedLectureHalls = response));
        this.retrievePublishedLectureSessionStatuses = () => this.semesterCalendarService.retrievePublishedLectureSessionStatuses().subscribe(response => (this.publishedLectureSessionStatuses = response));
        this.userSelectionLectureAssignIndividually = false;
        this.userSelectionLectureAssignGroup = false;
        // Declaring an array to initialize the number of events (lecture sessions) and their details
        this.lectureSessionsDocuments = [];
        this.calendarPSCalendar = {
            mode: 'month',
            currentDate: new Date()
        };
        this.selectedDate = new Date();
        this.calendarASCalendar = {
            mode: 'month',
            currentDate: new Date()
        };
    }
    ngOnInit() {
        // Calling the functions inorder for them to execute upon page load
        this.retrievePublishedBatch();
        this.retrievePublishedDegreeProgram();
        this.retrieveRegisteredModules();
        this.retrieveRegisteredLecturers();
        this.retrievePublishedLectureHalls();
        this.retrievePublishedLectureSessionStatuses();
        this.searchSemesterCalendar = this.formBuilder.group({
            batch: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            degreeProgram: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            academicPeriodYear: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            academicPeriodSemester: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.assignNewLectureSlotSC = this.formBuilder.group({
            batch: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            degreeProgram: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            academicPeriodYear: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            academicPeriodSemester: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            module: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            lecturer: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            lectureHall: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            addLectureContentLoadOption: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            sessionDateSingle: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            sessionStartTimeSingle: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            sessionEndTimeSingle: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            sessionDayMultiple: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            sessionStartDateMultiple: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            sessionEndDateMultiple: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            sessionStartTimeMultiple: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            sessionEndTimeMultiple: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.createNewLectureSeriesForm = this.formBuilder.group({
            degreeProgram: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            batch: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            module: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            noOfLectures: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            enrollmentKey: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.searchLectureSeriesForm = this.formBuilder.group({
            degreeProgram: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            batch: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            module: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    // Opening notifications popover
    openNotificationPopover(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const moreDetailsLectureSessionPopover = yield this.popoverController.create({
                component: _notifications_popover_notifications_popover_page__WEBPACK_IMPORTED_MODULE_9__["NotificationsPopoverPage"],
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
    retrieveModuleTitle(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(event.detail.value);
            // Retrieving the module title of the selected module code
            this.semesterCalendarService.retrievingModuleTitleOfModuleCode(event.detail.value, this.sideMenuPageUserFaculty.passLoggedInUserFaculty()).subscribe(response => (this.publishedModuleTitleOfModuleCode =
                response.forEach(document => {
                    let firestoreDoc = document.payload.doc.data();
                    this.moduleTitle = firestoreDoc.moduleTitle;
                    console.log(this.moduleTitle);
                })));
        });
    }
    retrieveAwardingBodyUniversity(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Retrieving the awardingBody University of the selected degree
            this.semesterCalendarService.retrievingAwardingBodyUniversityOfDegree(event.detail.value, this.sideMenuPageUserFaculty.passLoggedInUserFaculty()).subscribe(response => (this.publishedAwardingBodyUniversityOfDegree =
                response.forEach(document => {
                    let firestoreDoc = document.payload.doc.data();
                    this.awardingBodyUniversity = firestoreDoc.awardingBodyUniversity;
                    this.degreeCode = firestoreDoc.degreeCode;
                    console.log(this.awardingBodyUniversity);
                    console.log(this.degreeCode);
                })));
        });
    }
    // Retrieving published lecture sessions
    doSearchSemesterCalendar(value) {
        this.loadingSpinnerPLS = true;
        // console.log(value);
        // console.log(value.batch);
        // console.log(value.degreeProgram);
        // console.log(value.academicYearYear);
        // console.log(value.academicYearSemester);
        // Calling function to retrieve the published lecture sessions from the firestore database
        this.semesterCalendarService.retrievePublishedLectureSessionsSemesterCalendar(this.sideMenuPageUserFaculty.passLoggedInUserFaculty(), value, this.awardingBodyUniversity).subscribe(response => {
            // Checking if any document values where returned
            if (response.length > 0) {
                this.eventSourcePSCalendar = []; // Clearing the existing events on the calendar before syncing 
                response.forEach(snap => {
                    let eventPSCalendar = snap.payload.doc.data();
                    eventPSCalendar.id = snap.payload.doc.id;
                    eventPSCalendar.title = eventPSCalendar.moduleCode + "-" + eventPSCalendar.moduleTitle + " | Status: " + eventPSCalendar.status;
                    eventPSCalendar.startTime = eventPSCalendar.startDateTime.toDate();
                    eventPSCalendar.endTime = eventPSCalendar.endDateTime.toDate();
                    console.log(eventPSCalendar);
                    this.eventSourcePSCalendar.push(eventPSCalendar);
                });
                this.alertNotice("Lecture Sessions Retrieval", "Available lecture sessions for this semester calendar are placed on the calendar.");
                console.log("Semester Calendar Record Found");
            }
            else {
                this.alertNotice("Not Found", "Lecture sessions for this semester calendar is not available");
                console.log("Semester Calendar Record Found");
            }
        }, error => {
            console.log("Error: " + error);
            this.alertNotice("Error", "An error has occurred: " + error);
        });
        // Calling function to retrieve the lecture sessions and setting loading dots to false after the contents has loaded.
        this.semesterCalendarService.retrievePublishedLectureSessionsSemesterCalendar(this.sideMenuPageUserFaculty.passLoggedInUserFaculty(), value, this.awardingBodyUniversity).subscribe(() => this.loadingSpinnerPLS = false);
    }
    // More details of lecture sessions popover
    moreDetailsLectureSession(ev, value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const moreDetailsLectureSessionPopover = yield this.popoverController.create({
                component: _more_details_session_popover_more_details_session_popover_page__WEBPACK_IMPORTED_MODULE_7__["MoreDetailsSessionPopoverPage"],
                componentProps: {
                    lectureSessionId: value.id,
                    batch: value.batch,
                    lecturer: value.lecturer,
                    lectureHall: value.lectureHall,
                    degreeCode: value.degreeCode,
                    degree: value.degree,
                    awardingBodyUniversity: value.awardingBodyUniversity,
                    academicPeriodYear: value.academicYear,
                    academicPeriodSemester: value.academicSemester
                },
                event: ev
            });
            moreDetailsLectureSessionPopover.present();
        });
    }
    // Editing lecture sessions modal calling, opening modal
    editLectureSession(value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(value);
            const editLectureSessionModal = yield this.modalController.create({
                component: _edit_lecture_session_modal_edit_lecture_session_modal_page__WEBPACK_IMPORTED_MODULE_6__["EditLectureSessionModalPage"],
                // Passing value to the modal using 'componentProps'
                componentProps: {
                    lectureSessionId: value.id,
                    lectureSessionBatch: value.batch,
                    lectureSessionDegreeProgram: value.degreeProgram,
                    lectureSessionAcademicYear: value.academicYear,
                    lectureSessionAcademicSemester: value.academicSemester,
                    lectureSessionModuleCode: value.moduleCode,
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
            editLectureSessionModal.present();
        });
    }
    // Confirm Box Implementation (Remove existing lecture session)
    removeLectureSession(title, content, value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: title,
                message: content,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            console.log("Alert Box: Remove Event Session Request Denied");
                        }
                    },
                    {
                        text: 'Continue',
                        handler: () => {
                            console.log("Alert Box: Remove Event Session Request Accepted");
                            // Calling function to remove lecture session
                            this.semesterCalendarService.removeLectureSession(this.sideMenuPageUserFaculty.passLoggedInUserFaculty(), value);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // Load form content depending on assigning eah lecture session individually or in a group 
    loadFormContent(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.userSelectedOption = event.detail.value;
            this.userSelectionLectureAssignIndividually = false;
            this.userSelectionLectureAssignGroup = false;
            console.log("Reponse: " + event.detail.value);
            if (this.userSelectedOption == "lectureAssignIndividaully") {
                this.userSelectionLectureAssignIndividually = true;
            }
            else if (this.userSelectedOption == "lectureAssignGroup") {
                this.userSelectionLectureAssignGroup = true;
            }
        });
    }
    // (Publishing new lecture sessions section) and retrieving published lecture sessions 
    doPublishLectureSlotSC(value) {
        // Retrieving selected session date
        // Mon Apr 20 2020 10:13:54 GMT+0530 (India Standard Time)
        let selectedSessionDateTime = new Date(value.sessionDateSingle);
        let selectedSessionDate = selectedSessionDateTime.getFullYear() + "-" + selectedSessionDateTime.getMonth() + "-" + selectedSessionDateTime.getDate();
        console.log(selectedSessionDate);
        // Retrieving selected session start time
        // Mon Apr 20 2020 09:07:54 GMT+0530 (India Standard Time)
        let selectedSessionStartTime = new Date(value.sessionStartTimeSingle);
        // Retrieving selected session end time
        // Mon Apr 20 2020 12:02:54 GMT+0530 (India Standard Time)
        let selectedSessionEndTime = new Date(value.sessionEndTimeSingle);
        // taking the sesion date and session start time and merging them together. Assign this value to a variable
        // Mon Apr 20 2020 09:07:00 GMT+0530 (India Standard Time)
        let selectedSessionStartDateTime = new Date(selectedSessionDateTime.getFullYear(), selectedSessionDateTime.getMonth(), selectedSessionDateTime.getDate(), selectedSessionStartTime.getHours(), selectedSessionStartTime.getMinutes(), 0, 0);
        // taking the sesion date and session end time and merging them together. Assign this value to a variable
        // Mon Apr 20 2020 12:02:00 GMT+0530 (India Standard Time)
        let selectedSessionEndDateTime = new Date(selectedSessionDateTime.getFullYear(), selectedSessionDateTime.getMonth(), selectedSessionDateTime.getDate(), selectedSessionEndTime.getHours(), selectedSessionEndTime.getMinutes(), 0, 0);
        if (value.addLectureContentLoadOption == "lectureAssignIndividaully") {
            // If user selects 'lectureAssignIndividaully' option
            // Adding the lecture session details into the firestore database
            this.semesterCalendarService.addNewLectureSession(this.sideMenuPageUserFaculty.passLoggedInUserFaculty(), value, this.degreeCode, this.awardingBodyUniversity, this.moduleTitle, selectedSessionDate, selectedSessionStartDateTime, selectedSessionEndDateTime);
            this.alertNotice("Lecture Session Added", "New Lecture Session has been added.");
        }
        else if (value.addLectureContentLoadOption == "lectureAssignGroup") {
            // If user selects 'lectureAssignGroup' option
        }
        // Calling function to retrieving the lecture sessions for this degree program, batch, academic period year and academic period semester from the firestore database
        this.semesterCalendarService.retrievePublishedLectureSessionsSemesterCalendar(this.sideMenuPageUserFaculty.passLoggedInUserFaculty(), value, this.awardingBodyUniversity).subscribe(activeLectureSlots => {
            this.eventSourceASCalendar = []; // Clearing the existing lecture sessions on the calendar before syncing 
            activeLectureSlots.forEach(snap => {
                let eventASCalendar = snap.payload.doc.data();
                eventASCalendar.id = snap.payload.doc.id;
                eventASCalendar.title = eventASCalendar.moduleCode + "-" + eventASCalendar.moduleTitle + "\n | Status: " + eventASCalendar.status;
                eventASCalendar.startTime = eventASCalendar.startDateTime.toDate();
                eventASCalendar.endTime = eventASCalendar.endDateTime.toDate();
                this.eventSourceASCalendar.push(eventASCalendar);
            });
        });
    }
    // Resetting search assigned semester calendar
    resetSearchAssignedSemesterCalendar() {
        // Resetting formControlGroup
        this.searchSemesterCalendar.reset();
        // Resetting calendar
        this.eventSourcePSCalendar = [];
    }
    // Resetting assign semester calendar
    resetAssignSemesterCalendar() {
        // Resetting formControlGroup
        this.assignNewLectureSlotSC.reset();
        // Resetting calendar
        this.eventSourceASCalendar = [];
    }
    // Process of adding a new lecture series
    doCreateNewLectureSeries(value) {
        this.semesterCalendarService.createNewLectureSeries(value, this.sideMenuPageUserFaculty.passLoggedInUserFaculty(), this.awardingBodyUniversity, this.moduleTitle);
        this.alertNotice("Lecture Series Created", "New Lecture Series has been created.");
    }
    // Resetting create new lecture series form
    resetCreatedLectureSeries() {
        this.createNewLectureSeriesForm.reset();
        this.publishedLectureSeries = "";
    }
    // Process of searching published lecture series 
    doSearchLectureSeries(value) {
        console.log(value);
        console.log(this.awardingBodyUniversity);
        console.log(this.moduleTitle);
        this.semesterCalendarService.retrievePublishedLectureSeries(this.sideMenuPageUserFaculty.passLoggedInUserFaculty(), value, this.awardingBodyUniversity, this.moduleTitle).subscribe(response => {
            // Checking if any document values where returned
            if (response.length > 0) {
                this.showPublishedLectureSeries = true;
                this.publishedLectureSeries = response;
                console.log("Lecture Series Record Found");
            }
            else {
                this.alertNotice("Not Found", "Lecture Series Record is not available");
                console.log("Lecture Series Record Not Found");
            }
        }, error => {
            console.log("Error: " + error);
            this.alertNotice("Error", "An error has occurred: " + error);
        });
    }
    // Resetting search lecture series form
    resetSearchCreatedLectureSeries() {
        this.searchLectureSeriesForm.reset();
        this.showPublishedLectureSeries = false;
    }
    // Editing lecture series modal calling, opening modal
    editLectureSeries(value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const editLectureSeriesModal = yield this.modalController.create({
                component: _edit_lecture_series_modal_edit_lecture_series_modal_page__WEBPACK_IMPORTED_MODULE_8__["EditLectureSeriesModalPage"],
                // Passing value to the modal using 'componentProps'
                componentProps: {
                    lectureSeriesDocId: value.payload.doc.id,
                    lectureSeriesNoOfLecturers: value.payload.doc.data().noOfLectures,
                    lectureSeriesEnrollmentKey: value.payload.doc.data().enrollmentKey,
                    loggedInUserFaculty: this.sideMenuPageUserFaculty.passLoggedInUserFaculty()
                },
                // Disabling modal closing from any outside clicks
                backdropDismiss: false
            });
            editLectureSeriesModal.present();
        });
    }
    // Confirm Box Implementation (Remove existing lecture series)
    removeLectureSeries(title, content, value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let lectureSeriesDocId = value.payload.doc.id;
            const alert = yield this.alertController.create({
                header: title,
                message: content,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            console.log("Alert Box: Remove Lecture Series Request Denied");
                        }
                    },
                    {
                        text: 'Continue',
                        handler: () => {
                            console.log("Alert Box: Remove Lecture Series Request Accepted");
                            // Calling function to remove lecture series
                            this.semesterCalendarService.removeLectureSeries(lectureSeriesDocId, this.sideMenuPageUserFaculty.passLoggedInUserFaculty());
                            this.showPublishedLectureSeries = false;
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    nextMonthPSCalendar() {
        var frontSwipePSCalendar = document.getElementById('publishedSemesterCalendar').querySelector('.swiper-container')['swiper'];
        frontSwipePSCalendar.slideNext();
    }
    previousMonthPSCalendar() {
        var backSwipePSCalendar = document.getElementById('publishedSemesterCalendar').querySelector('.swiper-container')['swiper'];
        backSwipePSCalendar.slidePrev();
    }
    onViewTitleChangedPSCalendar(title) {
        console.log(title);
        this.viewingMonthPSCalendar = title;
    }
    onEventSelectedPSCalendar(event) {
        console.log("Lecture Session Selected: " + event.startTime + " - " + event.endTime + ", " + event.title);
    }
    onTimeSelectedPSCalendar(event) {
        console.log("Lecture Session Selected Time: " + event.selectedTime + ", has sessions: " + (event.events !== undefined && event.events.length !== 0) +
            ", disabled: " + event.disabled);
        if ((event.events !== undefined && event.events.length !== 0) == false) {
            this.lectureSessionsDocuments = [];
        }
        else if ((event.events !== undefined && event.events.length !== 0) == true) {
            this.lectureSessionsDocuments = event.events;
        }
        console.log(this.lectureSessionsDocuments);
    }
    onCurrentDateChangedPSCalendar(event) {
        console.log("Current Lecture Session Date Change: " + event);
        this.lectureSessionsDocuments = [];
    }
    onRangeChangedPSCalendar(evt) {
        console.log("Lecture Session (Range) Changed: Start Time: " + evt.startTime + ", End Time: " + evt.endTime);
    }
    nextMonthASCalendar() {
        var frontSwipeASCalendar = document.getElementById('EventCalendar').querySelector('.swiper-container')['swiper'];
        frontSwipeASCalendar.slideNext();
    }
    previousMonthASCalendar() {
        var backSwipeASCalendar = document.getElementById('EventCalendar').querySelector('.swiper-container')['swiper'];
        backSwipeASCalendar.slidePrev();
    }
    onViewTitleChangedASCalendar(title) {
        console.log(title);
        this.viewingMonthASCalendar = title;
    }
    onEventSelectedASCalendar(event) {
        console.log("Lecture Session Selected: " + event.startTime + " - " + event.endTime + ", " + event.title);
    }
    onTimeSelectedASCalendar(evt) {
        console.log("Lecture Session Selected Time: " + evt.selectedTime + ", has sessions: " + (evt.events !== undefined && evt.events.length !== 0) +
            ", disabled: " + evt.disabled);
    }
    onCurrentDateChangedASCalendar(event) {
        console.log("Current Lecture Session Date Change: " + event);
    }
    onRangeChangedASCalendar(evt) {
        console.log("Lecture Session (Range) Changed: Start Time: " + evt.startTime + ", End Time: " + evt.endTime);
    }
};
SemesterCalendarPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
    { type: _side_menu_side_menu_page__WEBPACK_IMPORTED_MODULE_4__["SideMenuPage"] },
    { type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"] }
];
SemesterCalendarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-semester-calendar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./semester-calendar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/semester-calendar/semester-calendar.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./semester-calendar.page.scss */ "./src/app/office/semester-calendar/semester-calendar.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"],
        _side_menu_side_menu_page__WEBPACK_IMPORTED_MODULE_4__["SideMenuPage"],
        src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"]])
], SemesterCalendarPage);



/***/ })

}]);
//# sourceMappingURL=semester-calendar-semester-calendar-module-es2015.js.map