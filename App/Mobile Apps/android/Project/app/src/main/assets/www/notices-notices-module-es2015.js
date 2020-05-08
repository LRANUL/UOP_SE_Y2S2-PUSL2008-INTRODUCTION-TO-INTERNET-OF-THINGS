(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notices-notices-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/notices/notices.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/notices/notices.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"height: 70px;\">\r\n  <ion-toolbar>\r\n\r\n\r\n    <!-- This will add a button to show the side menu when the side menu is hidden in small screens -->\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    \r\n    <ion-title style=\"position: absolute;\r\n                      top: 40%;\">Notices</ion-title>\r\n\r\n    <!-- Header Contents Section -->\r\n    <div style=\"position: absolute;\r\n                right: 5px;\r\n                top: 8px;\">\r\n      <!-- Notification Bell, Unread Notifications Count, Drop Down -->          \r\n\r\n      <ion-button fill=\"clear\" color=\"dark\" style=\"width: 100px;\r\n                                                  height: 45px;\r\n                                                  background-color: white;\" (click)=\"openNotificationPopover($event)\">\r\n\r\n        <!-- Notification Bell Icon -->\r\n        <div style=\"height: 42px;\r\n                  width: 42px;\"> \r\n          <ion-icon name=\"notifications-outline\" style=\"font-size: 35px;\r\n                                                        position: absolute;\r\n                                                        top: 5px;\r\n                                                        left: 0px;\"></ion-icon>\r\n        </div>\r\n\r\n          <!-- Arrow Icon -->\r\n        <div style=\"position: absolute;\r\n                    left: 50px;\r\n                    top: 10px;\r\n                    font-size: 26px;\">\r\n          <ion-icon name=\"chevron-down-outline\"></ion-icon>\r\n        </div>\r\n        \r\n      </ion-button>\r\n\r\n    </div>\r\n\r\n\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <!-- Importing js file -->\r\n  <script src=\"../../../assets/js/accountNotices.js\"></script>\r\n\r\n\r\n  <!-- Vertical line in the center of the page -->\r\n  <!--\r\n  <div style=\"border-left: rgb(236, 236, 236) solid 2px;\r\n              height: 100%;\r\n              position: relative;\r\n              left: 50%;\">\r\n  </div>\r\n  -->\r\n\r\n\r\n  <ion-grid>\r\n\r\n    <ion-row>\r\n\r\n      <ion-col size=\"12\" size-lg=\"12\" size-xl=\"6\">\r\n\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title>\r\n              Send New Notice\r\n            </ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n\r\n            <ion-card id=\"newNoticeFormSection\" style=\"background-color: #F3FAFC;\">\r\n              <ion-card-content style=\"margin-top: -20px;\">\r\n\r\n                <!-- Student and Lecturer Form Selection Buttons -->\r\n                <ion-grid>\r\n                  <ion-row>\r\n                    <ion-col>\r\n                      <button id=\"newNoticeButtonStudent\" (click)=\"showStudentForm()\" style=\"background-color: #0B80D3;\r\n                                                                                            letter-spacing: 5px;\r\n                                                                                            margin-top: 5px;\r\n                                                                                            color: #ffffff\" class=\"btn btn-block\">\r\n                        <b>STUDENT</b>\r\n                      </button> \r\n                    </ion-col>\r\n                    \r\n                    <ion-col>\r\n                      <button id=\"newNoticeButtonLecturer\" (click)=\"showLecturerForm()\" style=\"background-color: #02A5D7;\r\n                                                                                              letter-spacing: 5px;\r\n                                                                                              margin-top: 5px;  \r\n                                                                                              color: #ffffff\" class=\"btn btn-block\">\r\n                        <b>LECTURER</b>\r\n                      </button>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n\r\n                <!-- New Notice to Student Section -->\r\n                <div id=\"newStudentNoticeSubmit\" style=\"display: inline\">\r\n                \r\n                  <form [formGroup]=\"newStudentNoticeSendForm\" (ngSubmit)=\"doNewStudentNoticeSend(newStudentNoticeSendForm.value)\">\r\n                    <ion-grid>\r\n                      <ion-row>\r\n\r\n                        <ion-col size=\"4\" size-sm=\"12\" size-lg=\"4\" size-xl=\"4\">\r\n                          <ion-label class=\"newNoticeFormLabel\">\r\n                            Notice Title\r\n                          </ion-label>\r\n                        </ion-col>\r\n                        <ion-col size=\"8\" size-sm=\"12\" size-lg=\"8\" size-xl=\"8\">\r\n                          <ion-item>\r\n                            <ion-input type=\"text\" style=\"min-width: 100%;\" placeholder=\"Enter Title\" clearInput formControlName=\"noticeTitle\"></ion-input>\r\n                          </ion-item>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <ion-col size=\"4\" size-sm=\"12\" size-lg=\"4\" size-xl=\"4\">\r\n                          <ion-label class=\"newNoticeFormLabel\">\r\n                            Notice Description\r\n                          </ion-label>\r\n                        </ion-col>\r\n                        <ion-col size=\"8\" size-sm=\"12\" size-lg=\"8\" size-xl=\"8\">\r\n                          <ion-item>\r\n                            <ion-textarea rows=11 style=\"height: 300px;\r\n                                                        min-width: 100%;\" placeholder=\"Enter Description\" formControlName=\"noticeDescription\"></ion-textarea>\r\n                          </ion-item>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <ion-col size=\"4\" size-sm=\"12\" size-lg=\"4\" size-xl=\"4\">\r\n                          <ion-label class=\"newNoticeFormLabel\">\r\n                            Notice Category\r\n                          </ion-label>\r\n                        </ion-col>\r\n                        <ion-col size=\"8\" size-sm=\"12\" size-lg=\"8\" size-xl=\"8\">\r\n                          <ion-item>\r\n                            <ion-select interface=\"popover\" style=\"min-width: 100%;\" placeholder=\"Select Category\" formControlName=\"noticeCategory\">\r\n                              <ion-select-option *ngFor=\"let item of publishedNoticeCategories\" value=\"{{ item.payload.doc.data().category }}\">\r\n                                {{ item.payload.doc.data().category }}\r\n                              </ion-select-option>\r\n                            </ion-select>\r\n                          </ion-item>\r\n                        </ion-col>\r\n                      </ion-row>\r\n\r\n                      <ion-row>\r\n                        <ion-col size=\"4\" size-sm=\"12\" size-lg=\"4\" size-xl=\"4\">\r\n                          <ion-label class=\"newNoticeFormLabel\">\r\n                            Notice Recipient\r\n                          </ion-label>\r\n                        </ion-col>\r\n                        <ion-col size=\"8\" size-sm=\"12\" size-lg=\"8\" size-xl=\"8\">\r\n                          <ion-row>\r\n                            <ion-item style=\"width: 100%;\">\r\n                              <ion-select multiple=\"true\" cancelText=\"Close\" okText=\"SELECT\" placeholder=\"Select Module\" style=\"min-width: 100%;\" formControlName=\"noticeRecipientModule\" style=\"min-width: 100%;\">\r\n                                <ion-select-option *ngFor=\"let item of registeredModules\" value=\"{{ item.payload.doc.data().moduleCode }}\">\r\n                                  {{ item.payload.doc.data().moduleCode }} - {{ item.payload.doc.data().moduleTitle }}\r\n                                </ion-select-option>\r\n                              </ion-select>\r\n                            </ion-item>\r\n                          </ion-row>\r\n                          <ion-row>\r\n                            <ion-label style=\"position: relative;\r\n                                              left: 50%;\r\n                                              transform: translateX(-50%);\">\r\n                              <p>OR</p>\r\n                            </ion-label>\r\n                          </ion-row>\r\n                          <ion-row>\r\n                            <ion-item style=\"width: 100%;\">\r\n                              <ion-select multiple=\"true\" cancelText=\"Close\" okText=\"SELECT\" placeholder=\"Select Batch\" formControlName=\"noticeRecipientBatch\" style=\"min-width: 100%;\">\r\n                                <ion-select-option *ngFor=\"let item of publishedBatches\" value=\"{{ item.payload.doc.data().batch }}\">\r\n                                  {{ item.payload.doc.data().batch }}\r\n                                </ion-select-option>\r\n                              </ion-select>\r\n                            </ion-item>\r\n                          </ion-row>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <ion-col size=\"4\" size-sm=\"12\" size-lg=\"4\" size-xl=\"4\">\r\n                          <ion-label class=\"newNoticeFormLabel\">\r\n                            Notice Author\r\n                          </ion-label>\r\n                        </ion-col>\r\n                        <ion-col size=\"8\" size-sm=\"12\" size-lg=\"8\" size-xl=\"8\">\r\n                          <ion-item>\r\n                            <ion-input type=\"text\" value=\"Program Office: {{ userFaculty }}\" readOnly style=\"min-width: 100%;\"></ion-input>\r\n                          </ion-item>\r\n                        </ion-col>\r\n                      </ion-row>\r\n\r\n                      <ion-row>\r\n                        <ion-col size=\"12\" size-lg=\"12\" size-xl=\"6\" style=\"position: relative;\r\n                                                                          left: 50%;\r\n                                                                          transform: translateX(-50%);\">\r\n                          <ion-button expand=\"block\" type=\"submit\" [disabled]=\"!newStudentNoticeSendForm.valid\">\r\n                            Send Notice\r\n                          </ion-button>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                     \r\n\r\n\r\n                    </ion-grid>\r\n                  </form>\r\n\r\n                  \r\n                </div>\r\n                \r\n                <!-- Send New Notice to Lecturer -->\r\n                <div id=\"newLecturerNoticeSubmit\" style=\"display: none;\">\r\n                  <form [formGroup]=\"newLecturerNoticeSendForm\" (ngSubmit)=\"doNewLecturerNoticeSendForm(newLecturerNoticeSendForm.value)\">\r\n                    <ion-grid>\r\n                      <ion-row>\r\n\r\n                        <ion-col size=\"4\" size-sm=\"12\" size-lg=\"4\" size-xl=\"4\">\r\n                          <ion-label class=\"newNoticeFormLabel\">\r\n                            Notice Title\r\n                          </ion-label>\r\n                        </ion-col>\r\n                        <ion-col size=\"8\" size-sm=\"12\" size-lg=\"8\" size-xl=\"8\">\r\n                          <ion-item>\r\n                            <ion-input type=\"text\" clearInput placeholder=\"Enter Title\" style=\"min-width: 100%;\" formControlName=\"noticeTitle\"></ion-input>\r\n                          </ion-item>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <ion-col size=\"4\" size-sm=\"12\" size-lg=\"4\" size-xl=\"4\">\r\n                          <ion-label class=\"newNoticeFormLabel\">\r\n                            Notice Description\r\n                          </ion-label>\r\n                        </ion-col>\r\n                        <ion-col size=\"8\" size-sm=\"12\" size-lg=\"8\" size-xl=\"8\">\r\n                          <ion-item>\r\n                            <ion-textarea rows=11 style=\"height: 300px;\r\n                                                        min-width: 100%;\" placeholder=\"Enter Description\" formControlName=\"noticeDescription\"></ion-textarea>\r\n                          </ion-item>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <ion-col size=\"4\" size-sm=\"12\" size-lg=\"4\" size-xl=\"4\">\r\n                          <ion-label class=\"newNoticeFormLabel\">\r\n                            Notice Category\r\n                          </ion-label>\r\n                        </ion-col>\r\n                        <ion-col size=\"8\" size-sm=\"12\" size-lg=\"8\" size-xl=\"8\">\r\n                          <ion-item>\r\n                            <ion-select interface=\"popover\" placeholder=\"Select Category\" style=\"min-width: 100%;\" formControlName=\"noticeCategory\">\r\n                              <ion-select-option *ngFor=\"let item of publishedNoticeCategories\" value=\"{{ item.payload.doc.data().category }}\">\r\n                                {{ item.payload.doc.data().category }}\r\n                              </ion-select-option>\r\n                            </ion-select>\r\n                          </ion-item>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <ion-col size=\"4\" size-sm=\"12\" size-lg=\"4\" size-xl=\"4\">\r\n                          <ion-label class=\"newNoticeFormLabel\">\r\n                            Notice Recipient\r\n                          </ion-label>\r\n                        </ion-col>\r\n                        <ion-col size=\"8\" size-sm=\"12\" size-lg=\"8\" size-xl=\"8\">\r\n                          <ion-row>\r\n                            <ion-item style=\"width: 100%;\">\r\n                              <ion-select multiple=\"true\" cancelText=\"Close\" okText=\"SELECT\" placeholder=\"Select Lecturer\" style=\"min-width: 100%;\" formControlName=\"noticeRecipient\">\r\n                                <ion-select-option *ngFor=\"let item of registeredLecturers\" value=\"{{ item.payload.doc.id }}\">\r\n                                  {{ item.payload.doc.data().name.prefix }} {{ item.payload.doc.data().name.firstName }} {{ item.payload.doc.data().name.lastName }}\r\n                                </ion-select-option>\r\n                              </ion-select>\r\n                            </ion-item>\r\n                          </ion-row>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        <ion-col size=\"4\" size-sm=\"12\" size-lg=\"4\" size-xl=\"4\">\r\n                          <ion-label class=\"newNoticeFormLabel\">\r\n                            Notice Author\r\n                          </ion-label>\r\n                        </ion-col>\r\n                        <ion-col size=\"8\" size-sm=\"12\" size-lg=\"8\" size-xl=\"8\">\r\n                          <ion-item>\r\n                            <ion-input type=\"text\" value=\"Program Office: {{ userFaculty }}\" readOnly style=\"min-width: 100%;\"></ion-input>\r\n                          </ion-item>\r\n                        </ion-col>\r\n                      </ion-row>\r\n\r\n                      <ion-row>\r\n                        <ion-col size=\"12\" size-lg=\"12\" size-xl=\"6\" style=\"position: relative;\r\n                                                                          left: 50%;\r\n                                                                          transform: translateX(-50%);\">\r\n                          <ion-button expand=\"block\" type=\"submit\" [disabled]=\"!newLecturerNoticeSendForm.valid\">\r\n                            Send Notice\r\n                          </ion-button>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-grid>\r\n                  </form>\r\n                </div>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n\r\n\r\n        <!-- Notices Sent to Lecturers -->\r\n        <ion-card style=\"width: 99%;\r\n                          height: 700px;\r\n                          background-color: white;\r\n                          margin-left: 4px;\r\n                          margin-top: 0px;\">\r\n            <ion-card-header style=\"margin-top: 2px;\">\r\n              <ion-grid>\r\n                <ion-row>\r\n                  <ion-col>\r\n                    <ion-label style=\"font-size: 20px;\"> \r\n                      Notices Sent to Lecturers \r\n                    </ion-label>\r\n                  </ion-col>\r\n                  <ion-col>\r\n                    <ion-item style=\"margin-top: -12px;\r\n                                    color: black;\">\r\n                      <ion-icon name=\"calendar-outline\" style=\"color: black;\"></ion-icon>\r\n                      <ion-label style=\"margin-left: 10px;\">Select Date</ion-label>\r\n                      <ion-datetime value=\"{{ currentDate }}\" (ionChange)=\"retrieveNoticePOToLecturersSelectedDate($event)\"></ion-datetime>\r\n                    </ion-item>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n              \r\n\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n\r\n              <div style=\"border-top: #ccc solid 2px;\r\n                          width: 100%;\r\n                          margin-top: -20px;\">\r\n              </div>\r\n\r\n              <!-- No Notices Available Text -->\r\n              <div *ngIf=\"noNoticePOToLecturersText\" style=\"position: absolute;\r\n                                            top: 50px;\r\n                                            left: 50%;\r\n                                            transform: translateX(-50%);\">\r\n                <ion-item style=\"border: #ccc solid 1px;\r\n                                border-radius: 5px;\r\n                                padding: 5px;\">\r\n                  <ion-label style=\"font-size: 17px;\">\r\n                    No Notices were sent to lecturers for the selected date\r\n                  </ion-label>\r\n                </ion-item>\r\n              </div>\r\n\r\n              <!-- Loading Spinner -->\r\n              <ion-spinner name=\"dots\" style=\"position: absolute;\r\n                                              left: 50%;\r\n                                              transform: translateX(-50%);\r\n                                              margin-top: 20px;\r\n                                              height: 100px;\r\n                                              width: 100px;\" *ngIf=\"loadingSpinnerPOToLecturer\"></ion-spinner>\r\n\r\n              <div style=\"overflow-y: scroll;\r\n                          width: 100%;\r\n                          height: 610px;\">\r\n                <ion-grid>\r\n                  <ion-row>\r\n                    <ion-col size=\"6\" *ngFor=\"let list of publishedPOLecturerNotices\">\r\n\r\n                      <ion-card>\r\n                        <ion-card-header>\r\n                          <ion-card-title>\r\n                            {{ list.payload.doc.data().noticeTitle }}\r\n                          </ion-card-title>\r\n                          <ion-card-subtitle>\r\n                            {{ list.payload.doc.data().noticeDescription }}\r\n                          </ion-card-subtitle>\r\n                        </ion-card-header>\r\n                        <ion-card-content>\r\n                          <ion-label>\r\n                            <b>Notice Category: </b>\r\n                            {{ list.payload.doc.data().noticeCategory }} <br>\r\n                          </ion-label>\r\n                          <ion-label>\r\n                            <b>Notice Published: </b> <br>\r\n                            {{ list.payload.doc.data().noticeCreatedInfo.createdDateTime.toDate() | date: 'dd-MM-yyyy | h:mm a'}} \r\n                          </ion-label>\r\n                          <ion-grid>\r\n                            <ion-row>\r\n                              <ion-col style=\"width: 45px;\">\r\n                                <ion-button size=\"small\" shape=\"round\" size=\"small\" style=\"width: 100%;\r\n                                                                                          height: 40px;\" (click)=\"moreDetailsNotice($event, list)\">\r\n                                  <ion-icon name=\"document-text-outline\"></ion-icon>\r\n                                  <ion-label style=\"color: white;\r\n                                                    margin-left: 5px;\">\r\n                                    More\r\n                                  </ion-label>\r\n                                </ion-button>\r\n                              </ion-col>\r\n                              <ion-col style=\"width: 45px;\">\r\n                                <ion-button size=\"small\" shape=\"round\" color=\"warning\" size=\"small\" style=\"width: 100%;\r\n                                                                                                         height: 40px;\">\r\n                                  <ion-icon name=\"create-outline\" style=\"color: white;\"></ion-icon>\r\n                                  <ion-label style=\"color: white;\r\n                                                    margin-left: 5px;\">\r\n                                    Edit\r\n                                  </ion-label>\r\n                                </ion-button>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                            <ion-row>\r\n                              <ion-col>\r\n                                <ion-button size=\"small\" shape=\"round\" color=\"danger\" size=\"small\" style=\"min-width: 100%;\r\n                                                                                                          height: 40px;\">\r\n                                  <ion-icon name=\"trash-outline\"></ion-icon>\r\n                                  <ion-label style=\"color: white;\r\n                                                    margin-left: 5px;\">\r\n                                    Remove\r\n                                  </ion-label>\r\n                                </ion-button>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                          </ion-grid>\r\n                        </ion-card-content>\r\n                      </ion-card>\r\n\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </div>\r\n\r\n\r\n\r\n            </ion-card-content>\r\n          </ion-card>\r\n\r\n\r\n      </ion-col>\r\n      <ion-col size=\"12\" size-lg=\"12\" size-xl=\"6\">\r\n        \r\n        <ion-row>\r\n\r\n          <ion-col>\r\n\r\n            <!-- Notices From Lecturers -->\r\n            <ion-card style=\"width: 99%;\r\n                            height: 700px;\r\n                            background-color: white;\r\n                            margin-left: 4px;\r\n                            margin-top: 10px;\">\r\n              <ion-card-header style=\"margin-top: 2px;\">\r\n                <ion-grid>\r\n                  <ion-row>\r\n                    <ion-col>\r\n                      <ion-label style=\"font-size: 20px;\"> \r\n                        Notices From Lecturers \r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                      <ion-item style=\"margin-top: -12px;\r\n                                      color: black;\">\r\n                        <ion-icon name=\"calendar-outline\" style=\"color: black;\"></ion-icon>\r\n                        <ion-label style=\"margin-left: 10px;\">Select Date</ion-label>\r\n                        <ion-datetime value=\"{{ currentDate }}\" (ionChange)=\"retrieveNoticeLecturersToPOSelectedDate($event)\"></ion-datetime>\r\n                      </ion-item>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n                  \r\n\r\n              </ion-card-header>\r\n              <ion-card-content>\r\n\r\n                <div style=\"border-top: #ccc solid 2px;\r\n                            width: 100%;\r\n                            margin-top: -20px;\">\r\n                </div>\r\n\r\n                <!-- No Notices Available Text -->\r\n                <div *ngIf=\"noNoticeLecturersToPOText\" style=\"position: absolute;\r\n                                            top: 50px;\r\n                                            left: 50%;\r\n                                            transform: translateX(-50%);\">\r\n                  <ion-item style=\"border: #ccc solid 1px;\r\n                                  border-radius: 5px;\r\n                                  padding: 5px;\">\r\n                    <ion-label style=\"font-size: 17px;\">\r\n                      No Notices were sent from lecturers for the selected date\r\n                    </ion-label>\r\n                  </ion-item>\r\n                </div>\r\n\r\n                <!-- Loading Spinner -->\r\n                <ion-spinner name=\"dots\" style=\"position: absolute;\r\n                                                left: 50%;\r\n                                                transform: translateX(-50%);\r\n                                                margin-top: 20px;\r\n                                                height: 100px;\r\n                                                width: 100px;\" *ngIf=\"loadingSpinnerLecturerToPO\"></ion-spinner>\r\n\r\n                <div style=\"overflow-y: scroll;\r\n                              width: 100%;\r\n                              height: 610px;\">\r\n                    <ion-grid>\r\n                      <ion-row>\r\n                        <ion-col size=\"6\" *ngFor=\"let list of publishedLecturerPONotices\">\r\n\r\n                          <ion-card style=\"height: auto;\">\r\n                            <ion-card-header>\r\n                              <ion-card-title>\r\n                                {{ list.payload.doc.data().noticeTitle }}\r\n                              </ion-card-title>\r\n                              <ion-card-subtitle>\r\n                                {{ list.payload.doc.data().noticeDescription }} \r\n                              </ion-card-subtitle>\r\n                            </ion-card-header>\r\n                            <ion-card-content>\r\n                              <ion-grid>\r\n                                <ion-row>\r\n                                  <ion-col size=\"6\">\r\n                                    <ion-label>\r\n                                      <b>Notice Category: </b>\r\n                                    </ion-label>\r\n                                  </ion-col>\r\n                                  <ion-col size=\"6\">\r\n                                    <ion-label>\r\n                                      {{ list.payload.doc.data().noticeCategory }}\r\n                                    </ion-label>\r\n                                  </ion-col>\r\n                                </ion-row>\r\n                                <ion-row>\r\n                                  <ion-col size=\"6\">\r\n                                    <ion-label>\r\n                                      <b>Sent Date Time:</b>\r\n                                    </ion-label>\r\n                                  </ion-col>\r\n                                  <ion-col size=\"6\">\r\n                                    <ion-label>\r\n                                      {{ list.payload.doc.data().noticeCreatedInfo.createdDateTime.toDate() | date: 'dd-MM-yyyy | h:mm a'}} \r\n                                    </ion-label>\r\n                                  </ion-col>\r\n                                </ion-row>\r\n                                <ion-row>\r\n                                  <ion-col size=\"12\" style=\"display: inline;\" id=\"noticeReadButton\">\r\n                                    <div style=\"width: 100%;\r\n                                                height: 48px;\">\r\n                                      <ion-button size=\"small\" shape=\"round\"style=\"width: 96.7%;\r\n                                                                                  height: 40px;\r\n                                                                                  position: absolute;\r\n                                                                                  left: 50%;\r\n                                                                                  transform: translateX(-50%);\" (click)=\"markAsRead(item)\">\r\n                                        <ion-icon name=\"checkmark-done-outline\" style=\"color: white;\r\n                                                                                      margin-right: 5px;\"></ion-icon>\r\n                                        <ion-label style=\"color: white;\">\r\n                                          MARK AS READ\r\n                                        </ion-label>\r\n                                      </ion-button>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  <ion-col size=\"12\" style=\"width: 100%;\r\n                                                            display: none;\" id=\"noticeUnreadButton\">\r\n                                    <ion-button size=\"small\" shape=\"round\" style=\"width: 100%;\r\n                                                                                  height: 40px;\r\n                                                                                  position: relative;\r\n                                                                                  left: 50%;\r\n                                                                                  transform: translateX(-50%);\" color=\"medium\" (click)=\"markAsUnread(item)\">\r\n                                      <ion-icon name=\"arrow-undo-outline\" style=\"color: white;\r\n                                                                                margin-right: 5px;\"></ion-icon>\r\n                                      <ion-label style=\"color: white;\">\r\n                                        MARK AS UNREAD        \r\n                                      </ion-label>\r\n                                    </ion-button>\r\n                                  </ion-col>\r\n                                </ion-row>\r\n                              </ion-grid>\r\n\r\n                            </ion-card-content>\r\n                          </ion-card>\r\n\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-grid>\r\n                  </div>\r\n                \r\n\r\n              </ion-card-content>\r\n            </ion-card>\r\n\r\n\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n        <ion-row>\r\n\r\n          <ion-col>\r\n\r\n             <!-- Notices Sent to Students -->\r\n              <ion-card style=\"width: 99%;\r\n                              height: 830px;\r\n                              background-color: white;\r\n                              margin-left: 4px;\r\n                              margin-top: 0px;\">\r\n                <ion-card-header style=\"margin-top: 2px;\">\r\n                  <ion-grid>\r\n                    <ion-row>\r\n                      <ion-col>\r\n                        <ion-label style=\"font-size: 20px;\"> \r\n                          Notices Sent to Students \r\n                        </ion-label>\r\n                      </ion-col>\r\n                      <ion-col>\r\n                        <ion-item style=\"margin-top: -12px;\">\r\n                          <ion-icon name=\"calendar-outline\" style=\"color: black;\"></ion-icon>\r\n                          <ion-label style=\"margin-left: 10px;\">Select Date</ion-label>\r\n                          <ion-datetime value=\"{{ currentDate }}\" (ionChange)=\"retrieveNoticePOToStudentsSelectedDate($event)\"></ion-datetime>\r\n                        </ion-item>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                  \r\n\r\n                </ion-card-header>\r\n                <ion-card-content>\r\n\r\n                  <div style=\"border-top: #ccc solid 2px;\r\n                              width: 100%;\r\n                              margin-top: -20px;\">\r\n                  </div>\r\n\r\n                  <!-- No Notices Available Text -->\r\n                  <div *ngIf=\"noNoticePOToStudentsText\" style=\"position: absolute;\r\n                                            top: 50px;\r\n                                            left: 50%;\r\n                                            transform: translateX(-50%);\">\r\n                    <ion-item style=\"border: #ccc solid 1px;\r\n                                    border-radius: 5px;\r\n                                    padding: 5px;\">\r\n                      <ion-label style=\"font-size: 17px;\">\r\n                        No Notices were sent to students for the selected date\r\n                      </ion-label>\r\n                    </ion-item>\r\n                  </div>\r\n\r\n                  <!-- Loading Spinner -->\r\n                  <ion-spinner name=\"dots\" style=\"position: absolute;\r\n                                                  left: 50%;\r\n                                                  transform: translateX(-50%);\r\n                                                  margin-top: 20px;\r\n                                                  height: 100px;\r\n                                                  width: 100px;\" *ngIf=\"loadingSpinnerPOToStudent\"></ion-spinner>\r\n\r\n                  <div style=\"overflow-y: scroll;\r\n                              width: 100%;\r\n                              height: 740px;\">\r\n                    <ion-grid>\r\n                      <ion-row>\r\n                        <ion-col size=\"6\" *ngFor=\"let list of publishedPOStudentNotices\">\r\n\r\n                          <ion-card>\r\n                            <ion-card-header>\r\n                              <ion-card-title>\r\n                                {{ list.payload.doc.data().noticeTitle }}\r\n                              </ion-card-title>\r\n                              <ion-card-subtitle>\r\n                                {{ list.payload.doc.data().noticeDescription }}\r\n                              </ion-card-subtitle>\r\n                            </ion-card-header>\r\n                            <ion-card-content>\r\n                              <ion-label>\r\n                                <b>Notice Category: </b>\r\n                                {{ list.payload.doc.data().noticeCategory }} <br>\r\n                              </ion-label>\r\n                              <ion-label>\r\n                                <b>Notice Published: </b> <br>\r\n                                {{ list.payload.doc.data().noticeCreatedInfo.createdDateTime.toDate() | date: 'dd-MM-yyyy | h:mm a'}} \r\n                              </ion-label>\r\n                              <ion-grid>\r\n                                <ion-row>\r\n                                  <ion-col style=\"width: 45px;\">\r\n                                    <ion-button size=\"small\" shape=\"round\" size=\"small\" style=\"width: 100%;\r\n                                                                                              height: 40px;\" (click)=\"moreDetailsNotice($event, list)\">\r\n                                      <ion-icon name=\"document-text-outline\"></ion-icon>\r\n                                      <ion-label style=\"color: white;\r\n                                                        margin-left: 5px;\">\r\n                                        More\r\n                                      </ion-label>\r\n                                    </ion-button>\r\n                                  </ion-col>\r\n                                  <ion-col style=\"width: 45px;\">\r\n                                    <ion-button size=\"small\" shape=\"round\" color=\"warning\" size=\"small\" style=\"width: 100%;\r\n                                                                                                             height: 40px;\">\r\n                                      <ion-icon name=\"create-outline\" style=\"color: white;\"></ion-icon>\r\n                                      <ion-label style=\"color: white;\r\n                                                        margin-left: 5px;\">\r\n                                        Edit\r\n                                      </ion-label>\r\n                                    </ion-button>\r\n                                  </ion-col>\r\n                                </ion-row>\r\n                                <ion-row>\r\n                                  <ion-col>\r\n                                    <ion-button size=\"small\" shape=\"round\" color=\"danger\" size=\"small\" style=\"min-width: 100%;\r\n                                                                                                              height: 40px;\">\r\n                                      <ion-icon name=\"trash-outline\"></ion-icon>\r\n                                      <ion-label style=\"color: white;\r\n                                                        margin-left: 5px;\">\r\n                                        Remove\r\n                                      </ion-label>\r\n                                    </ion-button>\r\n                                  </ion-col>\r\n                                </ion-row>\r\n                              </ion-grid>\r\n                            </ion-card-content>\r\n                          </ion-card>\r\n\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-grid>\r\n                  </div>\r\n\r\n                </ion-card-content>\r\n              </ion-card>\r\n\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n\r\n  </ion-grid>\r\n\r\n\r\n\r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/office/notices/notices-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/office/notices/notices-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: NoticesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticesPageRoutingModule", function() { return NoticesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _notices_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notices.page */ "./src/app/office/notices/notices.page.ts");




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

/***/ "./src/app/office/notices/notices.module.ts":
/*!**************************************************!*\
  !*** ./src/app/office/notices/notices.module.ts ***!
  \**************************************************/
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
/* harmony import */ var _notices_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notices-routing.module */ "./src/app/office/notices/notices-routing.module.ts");
/* harmony import */ var _notices_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notices.page */ "./src/app/office/notices/notices.page.ts");







let NoticesPageModule = class NoticesPageModule {
};
NoticesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _notices_routing_module__WEBPACK_IMPORTED_MODULE_5__["NoticesPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_notices_page__WEBPACK_IMPORTED_MODULE_6__["NoticesPage"]]
    })
], NoticesPageModule);



/***/ }),

/***/ "./src/app/office/notices/notices.page.scss":
/*!**************************************************!*\
  !*** ./src/app/office/notices/notices.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color: rgb(243, 243, 243);\n}\n\nion-card {\n  --ion-background-color: white;\n}\n\nion-label {\n  color: black;\n}\n\n.newNoticeFormLabel {\n  font-size: 17px;\n  position: relative;\n  top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ZmaWNlL25vdGljZXMvQzpcXFVzZXJzXFxyYW51bFxcRG9jdW1lbnRzXFxHaXRIdWJcXDJuZCBZZWFyXFwybmQgU2VtZXN0ZXJcXFVPUF9TRV9ZMlMyLVBVU0wyMDA4LUlOVFJPRFVDVElPTi1UTy1JTlRFUk5FVC1PRi1USElOR1NcXFdvcmtzcGFjZVxcaVNBTS9zcmNcXGFwcFxcb2ZmaWNlXFxub3RpY2VzXFxub3RpY2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvb2ZmaWNlL25vdGljZXMvbm90aWNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQ0FBQTtBQ0NKOztBREVBO0VBQ0ksNkJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL29mZmljZS9ub3RpY2VzL25vdGljZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAyNDMsIDI0Myk7XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1sYWJlbHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm5ld05vdGljZUZvcm1MYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTVweDtcclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjQzLCAyNDMpO1xufVxuXG5pb24tY2FyZCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5pb24tbGFiZWwge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5uZXdOb3RpY2VGb3JtTGFiZWwge1xuICBmb250LXNpemU6IDE3cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/office/notices/notices.page.ts":
/*!************************************************!*\
  !*** ./src/app/office/notices/notices.page.ts ***!
  \************************************************/
/*! exports provided: NoticesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticesPage", function() { return NoticesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _side_menu_side_menu_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../side-menu/side-menu.page */ "./src/app/office/side-menu/side-menu.page.ts");
/* harmony import */ var _notifications_popover_notifications_popover_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../notifications-popover/notifications-popover.page */ "./src/app/office/notifications-popover/notifications-popover.page.ts");







let NoticesPage = class NoticesPage {
    constructor(formBuilder, noticesService, alertController, sideMenuPageUserFaculty, popoverController) {
        this.formBuilder = formBuilder;
        this.noticesService = noticesService;
        this.alertController = alertController;
        this.sideMenuPageUserFaculty = sideMenuPageUserFaculty;
        this.popoverController = popoverController;
        this.showLoadingDot = true;
        this.noNoticePOToLecturersText = false;
        this.noNoticeLecturersToPOText = false;
        this.noNoticePOToStudentsText = false;
        this.loadingSpinnerPOToLecturer = true;
        this.loadingSpinnerLecturerToPO = true;
        this.loadingSpinnerPOToStudent = true;
        this.retrieveRegisteredModules = () => this.noticesService.retrieveRegisteredModules(this.userFaculty).subscribe(response => (this.registeredModules = response));
        this.retrievePublishedBatch = () => this.noticesService.retrievePublishedBatch(this.userFaculty).subscribe(response => (this.publishedBatches = response));
        this.retrieveRegisteredLecturers = () => this.noticesService.retrieveRegisteredLecturers().subscribe(response => (this.registeredLecturers = response));
        this.retrievePublishedNoticeCategories = () => this.noticesService.retrievePublishedNoticeCategories().subscribe(response => (this.publishedNoticeCategories = response));
        this.retrievePublishedLecturerToPONotice = () => this.noticesService.retrievePublishedLecturerToPONotice(this.currentDate, this.dateThreeDaysBeforeCurrentDate).subscribe(response => {
            if (response.length > 0) {
                this.loadingSpinnerLecturerToPO = false;
                this.publishedLecturerPONotices = response;
            }
            else {
                this.loadingSpinnerLecturerToPO = false;
                this.noNoticeLecturersToPOText = true;
            }
        }, error => {
            this.loadingSpinnerLecturerToPO = false;
            console.log("Error: " + error);
            this.alertNotice("Error", "An error has occurred: " + error);
        });
        this.retrievePublishedPOToStudentNotice = () => this.noticesService.retrievePublishedPOToStudentNotice(this.currentDate, this.dateThreeDaysBeforeCurrentDate).subscribe(response => {
            if (response.length > 0) {
                this.loadingSpinnerPOToStudent = false;
                this.publishedPOStudentNotices = response;
            }
            else {
                this.loadingSpinnerPOToStudent = false;
                this.noNoticePOToStudentsText = true;
            }
        }, error => {
            this.loadingSpinnerPOToStudent = false;
            console.log("Error: " + error);
            this.alertNotice("Error", "An error has occurred: " + error);
        });
        this.retrievePublishedPOToLecturerNotice = () => this.noticesService.retrievePublishedPOToLecturerNotice(this.currentDate, this.dateThreeDaysBeforeCurrentDate).subscribe(response => {
            if (response.length > 0) {
                this.loadingSpinnerPOToLecturer = false;
                this.publishedPOLecturerNotices = response;
            }
            else {
                this.loadingSpinnerPOToLecturer = false;
                this.noNoticePOToLecturersText = true;
            }
        }, error => {
            this.loadingSpinnerPOToLecturer = false;
            console.log("Error: " + error);
            this.alertNotice("Error", "An error has occurred: " + error);
        });
    }
    ngOnInit() {
        this.userFaculty = this.sideMenuPageUserFaculty.passLoggedInUserFaculty();
        this.currentDate = new Date();
        this.dateThreeDaysBeforeCurrentDate = new Date();
        this.dateThreeDaysBeforeCurrentDate.setDate(this.currentDate.getDate() - 3);
        this.retrievePublishedLecturerToPONotice();
        this.retrievePublishedPOToStudentNotice();
        this.retrievePublishedPOToLecturerNotice();
        this.retrieveRegisteredModules();
        this.retrievePublishedBatch();
        this.retrieveRegisteredLecturers();
        this.retrievePublishedNoticeCategories();
        // New Student Notice Form
        this.newStudentNoticeSendForm = this.formBuilder.group({
            noticeTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            noticeDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            noticeCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            noticeRecipientModule: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            noticeRecipientBatch: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        // New Lecturer Notice Form
        this.newLecturerNoticeSendForm = this.formBuilder.group({
            noticeTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            noticeDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            noticeCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            noticeRecipient: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]))
        });
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
    moreDetailsNotice(event, value) {
    }
    /* Javascript Function */
    showStudentForm() {
        var userClickLecturer = document.getElementById("newLecturerNoticeSubmit");
        var userClickStudent = document.getElementById("newStudentNoticeSubmit");
        var newNoticeSectionCard = document.getElementById("newNoticeFormSection");
        var studentFormButton = document.getElementById("newNoticeButtonStudent");
        var lecturerFormButton = document.getElementById("newNoticeButtonLecturer");
        if (userClickLecturer.style.display === "inline") {
            userClickLecturer.style.display = "none";
            userClickStudent.style.display = "inline";
            studentFormButton.style.background = "#0B80D3";
            lecturerFormButton.style.background = "#02A5D7";
            newNoticeSectionCard.style.background = "#F3FAFC";
        }
    }
    showLecturerForm() {
        var userClickLecturer = document.getElementById("newLecturerNoticeSubmit");
        var userClickStudent = document.getElementById("newStudentNoticeSubmit");
        var newNoticeSectionCard = document.getElementById("newNoticeFormSection");
        var studentFormButton = document.getElementById("newNoticeButtonStudent");
        var lecturerFormButton = document.getElementById("newNoticeButtonLecturer");
        if (userClickStudent.style.display === "inline") {
            userClickStudent.style.display = "none";
            userClickLecturer.style.display = "inline";
            lecturerFormButton.style.backgroundColor = "#0B80D3";
            studentFormButton.style.backgroundColor = "#02A5D7";
            newNoticeSectionCard.style.background = "#CDE7F9";
        }
    }
    markAsRead(noticeDocumentValue) {
        let noticeReadButton = document.getElementById('noticeReadButton');
        let noticeUnreadButton = document.getElementById('noticeUnreadButton');
        if (noticeReadButton.style.display === "inline") {
            noticeReadButton.style.display = "none";
            noticeUnreadButton.style.display = "inline";
        }
    }
    markAsUnread(noticeDocumentValue) {
        let noticeReadButton = document.getElementById('noticeReadButton');
        let noticeUnreadButton = document.getElementById('noticeUnreadButton');
        if (noticeUnreadButton.style.display === "inline") {
            noticeUnreadButton.style.display = "none";
            noticeReadButton.style.display = "inline";
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
    // Creating new student notice
    doNewStudentNoticeSend(value) {
        // Displaying confirm box requesting to continue to firestore data submission
        this.confirmNewStudentNotice('Send Student Notice', 'Click on continue to create new student notice', value);
    }
    // Confirm Box Implementation (Create New Student Notice)
    confirmNewStudentNotice(title, content, value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: title,
                message: content,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            console.log("Alert Box: Create New Student Notice Request Denied");
                        }
                    },
                    {
                        text: 'Continue',
                        handler: () => {
                            console.log("Alert Box: Create New Student Notice Request Accepted");
                            // Adding new student notice details into firestore if the user agrees
                            this.noticesService.newStudentNoticeDetailsSubmission(value, this.sideMenuPageUserFaculty.passLoggedInUserId(), this.sideMenuPageUserFaculty.passLoggedInUserFaculty());
                            // Displaying new student notice created confirmation in alert message 
                            this.alertNotice('New Student Notice Created Successfully', 'Student notice has been created successfully. Please refer the "Notices Sent to Students" section to view notice.');
                            // Resetting the new student notice form to initial state
                            this.newStudentNoticeSendForm.reset();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // Creating new student notice
    doNewLecturerNoticeSendForm(value) {
        // Displaying confirm box requesting to continue to add the detail to firestore
        this.confirmNewLecturerNotice('Send Lecturer Notice', 'Click on continue to create new lecturer notice', value);
    }
    // Confirm Box Implementation (Create New Student Notice)
    confirmNewLecturerNotice(title, content, value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: title,
                message: content,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            console.log("Alert Box: Create New Lecturer Notice Request Denied");
                        }
                    },
                    {
                        text: 'Continue',
                        handler: () => {
                            console.log("Alert Box: Create New Lecturer Notice Request Accepted");
                            // Adding new lecturer notice details into firestore if the user agrees
                            this.noticesService.newLecturerNoticeDetailsSubmission(value, this.sideMenuPageUserFaculty.passLoggedInUserId(), this.sideMenuPageUserFaculty.passLoggedInUserFaculty());
                            // Displaying new lecturer notice created confirmation in alert message 
                            this.alertNotice('New Lecturer Notice Created Successfully', 'Lecturer notice has been created successfully. Please refer the "Notices Sent to Students" section to view notice.');
                            // Resetting the new lecturer notice form to initial state
                            this.newLecturerNoticeSendForm.reset();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // Process of retrieving notices sent to lecturers for the selected date from the firestore database
    retrieveNoticePOToLecturersSelectedDate(event) {
        this.noNoticePOToLecturersText = false;
        // Assigning existing notices on frontend to null
        this.publishedPOLecturerNotices = null;
        this.loadingSpinnerPOToLecturer = true;
        let selectedDate = new Date(event.detail.value);
        selectedDate.setHours(0, 0, 0, 0);
        let nextDate = new Date();
        nextDate.setHours(0, 0, 0, 0);
        nextDate.setDate(selectedDate.getDate() + 1);
        console.log(selectedDate);
        console.log(nextDate);
        this.noticesService.retrievePublishedPOToLecturerSelectedDate(selectedDate, nextDate).subscribe(response => {
            if (response.length > 0) {
                this.loadingSpinnerPOToLecturer = false;
                // Setting no notices text to hide
                this.noNoticePOToLecturersText = false;
                // Assigning retrieved document details
                this.publishedPOLecturerNotices = response;
            }
            else {
                this.loadingSpinnerPOToLecturer = false;
                // Setting no notices text to show
                this.noNoticePOToLecturersText = true;
            }
        }, error => {
            this.loadingSpinnerPOToLecturer = false;
            console.log("Error: " + error);
            this.alertNotice("Error", "An error has occurred: " + error);
        });
    }
    // Process of retrieving notices sent from lectures for the selected date from the firestore database
    retrieveNoticeLecturersToPOSelectedDate(event) {
        this.noNoticeLecturersToPOText = false;
        // Assigning existing notices on frontend to null
        this.publishedLecturerPONotices = null;
        this.loadingSpinnerLecturerToPO = true;
        let selectedDate = new Date(event.detail.value);
        selectedDate.setHours(0, 0, 0, 0);
        let nextDate = new Date();
        nextDate.setHours(0, 0, 0, 0);
        nextDate.setDate(selectedDate.getDate() + 1);
        console.log(selectedDate);
        console.log(nextDate);
        this.noticesService.retrievePublishedLecturerToPONoticeSelectedDate(selectedDate, nextDate).subscribe(response => {
            if (response.length > 0) {
                this.loadingSpinnerLecturerToPO = false;
                // Setting no notices text to hide
                this.noNoticeLecturersToPOText = false;
                // Assigning retrieved document details
                this.publishedLecturerPONotices = response;
            }
            else {
                this.loadingSpinnerLecturerToPO = false;
                // Setting no notices text to show
                this.noNoticeLecturersToPOText = true;
            }
        }, error => {
            this.loadingSpinnerLecturerToPO = false;
            console.log("Error: " + error);
            this.alertNotice("Error", "An error has occurred: " + error);
        });
    }
    // Process of retrieving notices sent to students for the selected date from the firestore database
    retrieveNoticePOToStudentsSelectedDate(event) {
        this.noNoticePOToStudentsText = false;
        // Assigning existing notices on frontend to null
        this.publishedPOStudentNotices = null;
        this.loadingSpinnerPOToStudent = true;
        let selectedDate = new Date(event.detail.value);
        selectedDate.setHours(0, 0, 0, 0);
        let nextDate = new Date();
        nextDate.setHours(0, 0, 0, 0);
        nextDate.setDate(selectedDate.getDate() + 1);
        console.log(selectedDate);
        console.log(nextDate);
        this.noticesService.retrievePublishedPOToStudentNoticeSelectedDate(selectedDate, nextDate).subscribe(response => {
            if (response.length > 0) {
                this.loadingSpinnerPOToStudent = false;
                // Setting no notices text to hide
                this.noNoticePOToStudentsText = false;
                // Assigning retrieved document details
                this.publishedPOStudentNotices = response;
            }
            else {
                this.loadingSpinnerPOToStudent = false;
                // Setting no notices text to show
                this.noNoticePOToStudentsText = true;
            }
        }, error => {
            this.loadingSpinnerPOToStudent = false;
            console.log("Error: " + error);
            this.alertNotice("Error", "An error has occurred: " + error);
        });
    }
};
NoticesPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _side_menu_side_menu_page__WEBPACK_IMPORTED_MODULE_5__["SideMenuPage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] }
];
NoticesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notices',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notices.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/notices/notices.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notices.page.scss */ "./src/app/office/notices/notices.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _side_menu_side_menu_page__WEBPACK_IMPORTED_MODULE_5__["SideMenuPage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]])
], NoticesPage);



/***/ })

}]);
//# sourceMappingURL=notices-notices-module-es2015.js.map