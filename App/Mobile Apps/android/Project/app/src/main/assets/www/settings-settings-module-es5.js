function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/office/settings/settings.page.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/settings/settings.page.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOfficeSettingsSettingsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header style=\"height: 70px;\">\r\n  <ion-toolbar>\r\n\r\n\r\n    <!-- This will add a button to show the side menu when the side menu is hidden in small screens -->\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    \r\n    <ion-title style=\"position: absolute;\r\n                      top: 40%;\">Settings</ion-title>\r\n\r\n    <!-- Header Contents Section -->\r\n    <div style=\"position: absolute;\r\n                right: 5px;\r\n                top: 8px;\">\r\n      <!-- Notification Bell, Unread Notifications Count, Drop Down -->          \r\n\r\n      <ion-button fill=\"clear\" color=\"dark\" style=\"width: 100px;\r\n                                                  height: 45px;\r\n                                                  background-color: white;\" (click)=\"openNotificationPopover($event)\">\r\n\r\n        <!-- Notification Bell Icon -->\r\n        <div style=\"height: 42px;\r\n                  width: 42px;\"> \r\n          <ion-icon name=\"notifications-outline\" style=\"font-size: 35px;\r\n                                                        position: absolute;\r\n                                                        top: 5px;\r\n                                                        left: 0px;\"></ion-icon>\r\n        </div>\r\n\r\n          <!-- Arrow Icon -->\r\n        <div style=\"position: absolute;\r\n                    left: 50px;\r\n                    top: 10px;\r\n                    font-size: 26px;\">\r\n          <ion-icon name=\"chevron-down-outline\"></ion-icon>\r\n        </div>\r\n        \r\n      </ion-button>\r\n\r\n    </div>\r\n\r\n\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title>\r\n              Change Academic Information\r\n            </ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col size=\"6\">\r\n\r\n                  <ion-card>\r\n                    <ion-card-content>\r\n\r\n                      <ion-label style=\"font-size: 20px;\">\r\n                        Degree Programs\r\n                      </ion-label>\r\n\r\n                      <div style=\"margin-top: 5px;\r\n                                  border: #ccc solid 1px;\r\n                                  border-radius: 5px;\r\n                                  min-width: 100%;\r\n                                  height: 460px;\r\n                                  overflow: scroll;\">\r\n\r\n                        <table class=\"table\" style=\"width: 850px;\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th>Degree Code</th>\r\n                              <th>Degree Program</th>\r\n                              <th>No Of Years</th>\r\n                              <th>No Of Semesters Annually</th>\r\n                              <th>Program Delivery</th>\r\n                              <th>Program Coordinator</th>\r\n                              <th></th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr *ngFor=\"let item of publishedDegreePrograms\">\r\n                              <td>{{ item.payload.doc.data().degreeCode }}</td>\r\n                              <td>{{ item.payload.doc.data().degree }},<br> {{ item.payload.doc.data().awardingBodyUniversity }}</td>\r\n                              <td>{{ item.payload.doc.data().deliveryNoOfYears }}</td>\r\n                              <td>{{ item.payload.doc.data().deliveryNoOfSemestersAnnually }}</td>\r\n                              <td>{{ item.payload.doc.data().programDelivery }}</td>\r\n                              <td>{{ item.payload.doc.data().programCoordinator }}</td>\r\n                              <td>\r\n                                <ion-grid>\r\n                                  <ion-row>\r\n                                    <ion-col>\r\n                                      <ion-button style=\"width: 120px;\" (click)=\"openEditDegreeProgramModal(item)\">\r\n                                        <ion-icon name=\"create-outline\"></ion-icon>\r\n                                        <ion-label style=\"color: white;\r\n                                                          margin-left: 5px;\">\r\n                                          EDIT\r\n                                        </ion-label>\r\n                                      </ion-button>\r\n                                    </ion-col>\r\n                                    <ion-col>\r\n                                      <ion-button color=\"danger\" style=\"width: 120px;\" \r\n                                        (click)=\"removeDegreeProgram('Confirmation Required', 'This degree program will be removed, do you want to continue?', item)\">\r\n                                        <ion-icon name=\"trash-outline\"></ion-icon>\r\n                                        <ion-label style=\"color: white;\r\n                                                          margin-left: 5px;\">\r\n                                          REMOVE\r\n                                        </ion-label>\r\n                                      </ion-button>\r\n                                    </ion-col>\r\n                                  </ion-row>\r\n                                </ion-grid>\r\n                              </td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                        \r\n                      </div>\r\n\r\n                      <!-- Loading Spinner -->\r\n                      <ion-spinner name=\"dots\" style=\"position: absolute;\r\n                                                      left: 50%;\r\n                                                      top: 50%;\r\n                                                      transform: translate(-50%,-50%);\r\n                                                      margin-top: 20px;\r\n                                                      height: 100px;\r\n                                                      width: 100px;\" *ngIf=\"loadingSpinnerDegreeProgram\"></ion-spinner>\r\n\r\n\r\n                      <ion-button color=\"medium\" style=\"position: relative;\r\n                                                        left: 87%;\r\n                                                        transform: translateX(-13%);\r\n                                                        width: 100px;\" (click)=\"openAddDegreeProgramForm()\" *ngIf=\"addDegreeProgramButton\">\r\n                        <ion-icon name=\"add-circle-outline\" style=\"margin-right: 5px;\"></ion-icon>\r\n                        <ion-label style=\"color: white;\">\r\n                          ADD\r\n                        </ion-label>\r\n                      </ion-button>\r\n\r\n                      <ion-button color=\"danger\" style=\"position: relative;\r\n                                                        left: 90%;\r\n                                                        top: 20px;\r\n                                                        transform: translateX(-10%);\" (click)=\"openAddDegreeProgramForm()\" *ngIf=\"closeDegreeProgramFormButton\">\r\n                        <ion-icon name=\"close-outline\"></ion-icon>\r\n                      </ion-button>\r\n\r\n                      <div *ngIf=\"addDegreeProgramFormSection\">\r\n                        <ion-label style=\"font-size: 20px;\">\r\n                          Add Degree Program\r\n                        </ion-label>\r\n                        <div style=\"margin-top: 5px;\r\n                                  border: #ccc solid 1px;\r\n                                  border-radius: 5px;\r\n                                  min-width: 100%;\r\n                                  padding-top: 10px;\r\n                                  padding: 25px;\">\r\n\r\n                          <form [formGroup]=\"addDegreeProgramForm\" (ngSubmit)=\"doAddDegreeProgram(addDegreeProgramForm.value)\">\r\n\r\n                            <ion-grid>\r\n                              <ion-row>\r\n                                <ion-col size=\"5\">\r\n                                  <ion-label class=\"settingsAddFormLabel\">\r\n                                    Degree Code\r\n                                  </ion-label>\r\n                                </ion-col>\r\n                                <ion-col size=\"7\">\r\n                                  <ion-item>\r\n                                    <ion-input type=\"text\" style=\"min-width: 100%;\" placeholder=\"Enter Code\" formControlName=\"degreeCode\"></ion-input>\r\n                                  </ion-item>\r\n                                </ion-col>\r\n                              </ion-row>\r\n                              <ion-row>\r\n                                <ion-col size=\"5\">\r\n                                  <ion-label class=\"settingsAddFormLabel\">\r\n                                    Degree Program\r\n                                  </ion-label>\r\n                                </ion-col>\r\n                                <ion-col size=\"7\">\r\n                                  <ion-row>\r\n                                    <ion-col>\r\n                                      <ion-item>\r\n                                        <ion-textarea rows=\"3\" style=\"min-width: 100%;\" placeholder=\"Enter Degree\" formControlName=\"degree\"></ion-textarea>\r\n                                      </ion-item> \r\n                                    </ion-col>\r\n                                  </ion-row>\r\n                                  <ion-row>\r\n                                    <ion-col>\r\n                                      <ion-item>\r\n                                        <ion-textarea rows=\"3\" style=\"min-width: 100%;\" placeholder=\"Enter Awarding Body University\" formControlName=\"awardingBodyUniversity\"></ion-textarea>\r\n                                      </ion-item>\r\n                                    </ion-col>\r\n                                  </ion-row>\r\n                                </ion-col>\r\n                              </ion-row>\r\n                              <ion-row>\r\n                                <ion-col size=\"5\">\r\n                                  <ion-label class=\"settingsAddFormLabel\">\r\n                                    Academic Period\r\n                                  </ion-label>\r\n                                </ion-col>\r\n                                <ion-col size=\"7\">\r\n                                  <ion-row>\r\n                                    <ion-col>\r\n                                      <ion-item>\r\n                                        <ion-select style=\"min-width: 100%;\" placeholder=\"Select No of Years\" formControlName=\"academicPeriodYear\">\r\n                                          <ion-select-option value=\"1\">1 Year</ion-select-option>\r\n                                          <ion-select-option value=\"2\">2 Years</ion-select-option>\r\n                                          <ion-select-option value=\"3\">3 Years</ion-select-option>\r\n                                          <ion-select-option value=\"4\">4 Years</ion-select-option>\r\n                                        </ion-select>\r\n                                      </ion-item>\r\n                                    </ion-col>\r\n                                  </ion-row>\r\n                                  <ion-row>\r\n                                    <ion-col>\r\n                                      <ion-item>\r\n                                        <ion-select style=\"min-width: 100%;\" placeholder=\"Select No of Semesters Annually\" formControlName=\"academicPeriodSemester\">\r\n                                          <ion-select-option value=\"1\">1 Semesters</ion-select-option>\r\n                                          <ion-select-option value=\"2\">2 Semesters</ion-select-option>\r\n                                          <ion-select-option value=\"3\">3 Semesters</ion-select-option>\r\n                                          <ion-select-option value=\"4\">4 Semesters</ion-select-option>\r\n                                        </ion-select>\r\n                                      </ion-item>\r\n                                    </ion-col>\r\n                                  </ion-row>\r\n                                </ion-col>\r\n                              </ion-row>\r\n                              <ion-row>\r\n                                <ion-col size=\"5\">\r\n                                  <ion-label class=\"settingsAddFormLabel\">\r\n                                    Program Delivery \r\n                                  </ion-label>\r\n                                </ion-col>\r\n                                <ion-col size=\"7\">\r\n                                  <ion-item>\r\n                                    <ion-select style=\"min-width: 100%;\" placeholder=\"Select Delivery\" formControlName=\"programDelivery\">\r\n                                      <ion-select-option value=\"Part-Time\">Part-Time Delivery</ion-select-option>\r\n                                      <ion-select-option value=\"Full-Time\">Full-Time Delivery</ion-select-option>\r\n                                    </ion-select>\r\n                                  </ion-item>\r\n                                </ion-col>\r\n                              </ion-row>\r\n                              <ion-row>\r\n                                <ion-col size=\"5\">\r\n                                  <ion-label class=\"settingsAddFormLabel\">\r\n                                    Program Coordinattor \r\n                                  </ion-label>\r\n                                </ion-col>\r\n                                <ion-col size=\"7\">\r\n                                  <ion-item>\r\n                                    <ion-select style=\"min-width: 100%;\" placeholder=\"Select Coordinator\" formControlName=\"programCoordinator\">\r\n                                      <ion-select-option *ngFor=\"let item of registeredLecturers\" \r\n                                        value=\"\r\n                                          {{ item.payload.doc.data().name.prefix }}\r\n                                          {{ item.payload.doc.data().name.firstName }}\r\n                                          {{ item.payload.doc.data().name.middleName }}\r\n                                          {{ item.payload.doc.data().name.lastName }}\r\n                                        \">\r\n                                        {{ item.payload.doc.data().name.prefix }}\r\n                                        {{ item.payload.doc.data().name.firstName }}\r\n                                        {{ item.payload.doc.data().name.middleName }}\r\n                                        {{ item.payload.doc.data().name.lastName }}\r\n                                      </ion-select-option>\r\n                                    </ion-select>\r\n                                  </ion-item>\r\n                                </ion-col>\r\n                              </ion-row>\r\n                              <ion-row>\r\n                                <ion-col size=\"12\">\r\n                                  <ion-button type=\"submit\" expand=\"block\" [disabled]=\"!addDegreeProgramForm.valid\">\r\n                                    <ion-icon name=\"add-circle-outline\" style=\"margin-right: 5px;\"></ion-icon>\r\n                                    <ion-label style=\"color: white;\">\r\n                                      ADD\r\n                                    </ion-label>\r\n                                  </ion-button>\r\n                                </ion-col>\r\n                              </ion-row>\r\n                            </ion-grid>\r\n\r\n                          </form>\r\n\r\n                        </div>\r\n                      </div>\r\n\r\n                    </ion-card-content>\r\n                  </ion-card>\r\n\r\n                </ion-col>\r\n                <ion-col size=\"6\">\r\n\r\n                  <ion-card>\r\n                    <ion-card-content>\r\n\r\n                      <ion-label style=\"font-size: 20px;\">\r\n                        Batches\r\n                      </ion-label>\r\n\r\n                      <div style=\"margin-top: 5px;\r\n                                  border: #ccc solid 1px;\r\n                                  border-radius: 5px;\r\n                                  min-width: 100%;\r\n                                  height: 460px;\r\n                                  overflow-y: scroll;\">\r\n\r\n                        <table class=\"table\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th>Batch</th>\r\n                              <th>Degree Program</th>\r\n                              <th>Status</th>\r\n                              <th></th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr *ngFor=\"let item of publishedBatches\">\r\n                              <td>{{ item.payload.doc.data().batch }}</td>\r\n                              <td>{{ item.payload.doc.data().degree }},<br> {{ item.payload.doc.data().awardingBodyUniversity }}</td>\r\n                              <td>{{ item.payload.doc.data().status }}</td>\r\n                              <td>\r\n                                <ion-grid>\r\n                                  <ion-row>\r\n                                    <ion-col>\r\n                                      <ion-button style=\"width: 120px;\" (click)=\"openEditBatchModal(item)\">\r\n                                        <ion-icon name=\"create-outline\"></ion-icon>\r\n                                        <ion-label style=\"color: white;\r\n                                                          margin-left: 5px;\">\r\n                                          EDIT\r\n                                        </ion-label>\r\n                                      </ion-button>\r\n                                    </ion-col>\r\n                                    <ion-col>\r\n                                      <ion-button color=\"danger\" style=\"width: 120px;\"\r\n                                        (click)=\"removeBatch('Confirmation Required', 'This batch will be removed, do you want to continue?', item)\">\r\n                                        <ion-icon name=\"trash-outline\"></ion-icon>\r\n                                        <ion-label style=\"color: white;\r\n                                                          margin-left: 5px;\">\r\n                                          REMOVE\r\n                                        </ion-label>\r\n                                      </ion-button>\r\n                                    </ion-col>\r\n                                  </ion-row>\r\n                                </ion-grid>\r\n                              </td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n\r\n                      <!-- Loading Spinner -->\r\n                      <ion-spinner name=\"dots\" style=\"position: absolute;\r\n                                                      left: 50%;\r\n                                                      top: 50%;\r\n                                                      transform: translate(-50%,-50%);\r\n                                                      height: 100px;\r\n                                                      width: 100px;\" *ngIf=\"loadingSpinnerBatch\"></ion-spinner>\r\n\r\n                      <ion-button color=\"medium\" style=\"position: relative;\r\n                                                        left: 87%;\r\n                                                        transform: translateX(-13%);\r\n                                                        width: 100px;\" (click)=\"openAddBatchForm()\" *ngIf=\"addBatchButton\">\r\n                        <ion-icon name=\"add-circle-outline\" style=\"margin-right: 5px;\"></ion-icon>\r\n                        <ion-label style=\"color: white;\">\r\n                          ADD\r\n                        </ion-label>\r\n                      </ion-button>\r\n\r\n                      <ion-button color=\"danger\" style=\"position: relative;\r\n                                                        left: 90%;\r\n                                                        top: 20px;\r\n                                                        transform: translateX(-10%);\" (click)=\"openAddBatchForm()\" *ngIf=\"closeBatchFormButton\">\r\n                        <ion-icon name=\"close-outline\"></ion-icon>\r\n                      </ion-button>\r\n\r\n                      <div *ngIf=\"addBatchFormSection\">\r\n                        <ion-label style=\"font-size: 20px;\">\r\n                          Add Batch\r\n                        </ion-label>\r\n                        <div style=\"margin-top: 5px;\r\n                                  border: #ccc solid 1px;\r\n                                  border-radius: 5px;\r\n                                  min-width: 100%;\r\n                                  padding-top: 10px;\r\n                                  padding: 25px;\">\r\n\r\n                          <form [formGroup]=\"addBatchForm\" (ngSubmit)=\"doAddBatch(addBatchForm.value)\">\r\n\r\n                            <ion-grid>\r\n                              <ion-row>\r\n                                <ion-col size=\"5\">\r\n                                  <ion-label class=\"settingsAddFormLabel\">\r\n                                    Batch\r\n                                  </ion-label>\r\n                                </ion-col>\r\n                                <ion-col size=\"7\">\r\n                                  <ion-item>\r\n                                    <ion-input type=\"text\" style=\"min-width: 100%;\" placeholder=\"Enter Batch\" formControlName=\"batch\"></ion-input>\r\n                                  </ion-item>\r\n                                </ion-col>\r\n                              </ion-row>\r\n                              <ion-row>\r\n                                <ion-col size=\"5\">\r\n                                  <ion-label class=\"settingsAddFormLabel\">\r\n                                    Degree Program\r\n                                  </ion-label>\r\n                                </ion-col>\r\n                                <ion-col size=\"7\">\r\n                                  <ion-row>\r\n                                    <ion-col>\r\n                                      <ion-item>\r\n                                        <ion-select style=\"min-width: 100%;\" placeholder=\"Select Degree Program\" (ionChange)=\"getAwardingBodyUniversity($event)\" formControlName=\"degreeProgram\">\r\n                                          <ion-select-option *ngFor=\"let item of publishedDegreePrograms\" \r\n                                            value=\"{{ item.payload.doc.data().degree }}\">\r\n                                            {{ item.payload.doc.data().degree }}, {{ item.payload.doc.data().awardingBodyUniversity }}\r\n                                          </ion-select-option>\r\n                                        </ion-select>\r\n                                      </ion-item>\r\n                                    </ion-col>\r\n                                  </ion-row>\r\n                                </ion-col>\r\n                              </ion-row>\r\n                              <ion-row>\r\n                                <ion-col size=\"5\">\r\n                                  <ion-label class=\"settingsAddFormLabel\">\r\n                                    Status \r\n                                  </ion-label>\r\n                                </ion-col>\r\n                                <ion-col size=\"7\">\r\n                                  <ion-item>\r\n                                    <ion-select style=\"min-width: 100%;\" placeholder=\"Select Status\" formControlName=\"status\">\r\n                                      <ion-select-option value=\"Pending\">Pending</ion-select-option>\r\n                                      <ion-select-option value=\"Active\">Active</ion-select-option>\r\n                                      <ion-select-option value=\"Graduated\">Graduated</ion-select-option>\r\n                                    </ion-select>\r\n                                  </ion-item>\r\n                                </ion-col>\r\n                              </ion-row>\r\n                              <ion-row>\r\n                                <ion-col size=\"12\">\r\n                                  <ion-button type=\"submit\" expand=\"block\" [disabled]=\"!addBatchForm.valid\">\r\n                                    <ion-icon name=\"add-circle-outline\" style=\"margin-right: 5px;\"></ion-icon>\r\n                                    <ion-label style=\"color: white;\">\r\n                                      ADD\r\n                                    </ion-label>\r\n                                  </ion-button>\r\n                                </ion-col>\r\n                              </ion-row>\r\n                            </ion-grid>\r\n\r\n                          </form>\r\n\r\n                        </div>\r\n                      </div>\r\n\r\n                    </ion-card-content>\r\n                  </ion-card>\r\n\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col size=\"6\">\r\n\r\n                  <ion-card>\r\n                    <ion-card-content>\r\n\r\n                      <ion-label style=\"font-size: 20px;\">\r\n                        Credit Weightings\r\n                      </ion-label>\r\n\r\n                      <div style=\"margin-top: 5px;\r\n                                  border: #ccc solid 1px;\r\n                                  border-radius: 5px;\r\n                                  min-width: 100%;\r\n                                  height: 460px;\r\n                                  overflow-y: scroll;\">\r\n\r\n                        <table class=\"table\" style=\"min-width: 500px;\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th>Credit Weightings</th>\r\n                              <th>Description</th>\r\n                              <th>Status</th>\r\n                              <th></th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr *ngFor=\"let item of publishedNoOfCreditWeightings\">\r\n                              <td>{{ item.payload.doc.data().creditsWeighting }}</td>\r\n                              <td>{{ item.payload.doc.data().description }}</td>\r\n                              <td>{{ item.payload.doc.data().status }}</td>\r\n                              <td>\r\n                                <ion-grid>\r\n                                  <ion-row>\r\n                                    <ion-col>\r\n                                      <ion-button style=\"width: 120px;\" (click)=\"openEditCreditWeightingModal(item)\">\r\n                                        <ion-icon name=\"create-outline\"></ion-icon>\r\n                                        <ion-label style=\"color: white;\r\n                                                          margin-left: 5px;\">\r\n                                          EDIT\r\n                                        </ion-label>\r\n                                      </ion-button>\r\n                                    </ion-col>\r\n                                    <ion-col>\r\n                                      <ion-button color=\"danger\" style=\"width: 120px;\"\r\n                                        (click)=\"removeCreditWeighting('Confirmation Required', 'This credit weighting will be removed, do you want to continue?', item)\">\r\n                                        <ion-icon name=\"trash-outline\"></ion-icon>\r\n                                        <ion-label style=\"color: white;\r\n                                                          margin-left: 5px;\">\r\n                                          REMOVE\r\n                                        </ion-label>\r\n                                      </ion-button>\r\n                                    </ion-col>\r\n                                  </ion-row>\r\n                                </ion-grid>\r\n                              </td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n\r\n                      <!-- Loading Spinner -->\r\n                      <ion-spinner name=\"dots\" style=\"position: absolute;\r\n                                                      left: 50%;\r\n                                                      top: 50%;\r\n                                                      transform: translate(-50%,-50%);\r\n                                                      margin-top: 20px;\r\n                                                      height: 100px;\r\n                                                      width: 100px;\" *ngIf=\"loadingSpinnerCreditWeighting\"></ion-spinner>\r\n\r\n                      <ion-button color=\"medium\" style=\"position: relative;\r\n                                                        left: 87%;\r\n                                                        transform: translateX(-13%);\r\n                                                        width: 100px;\" (click)=\"openAddCreditWeightingForm()\" *ngIf=\"addCreditWeightingButton\">\r\n                        <ion-icon name=\"add-circle-outline\" style=\"margin-right: 5px;\"></ion-icon>\r\n                        <ion-label style=\"color: white;\">\r\n                          ADD\r\n                        </ion-label>\r\n                      </ion-button>\r\n\r\n                      <ion-button color=\"danger\" style=\"position: relative;\r\n                                                        left: 90%;\r\n                                                        top: 20px;\r\n                                                        transform: translateX(-10%);\" (click)=\"openAddCreditWeightingForm()\" *ngIf=\"closeCreditWeightingFormButton\">\r\n                        <ion-icon name=\"close-outline\"></ion-icon>\r\n                      </ion-button>\r\n\r\n                      <div *ngIf=\"addCreditWeightingFormSection\">\r\n                        <ion-label style=\"font-size: 20px;\">\r\n                          Add Credit Weighting\r\n                        </ion-label>\r\n                        <div style=\"margin-top: 5px;\r\n                                  border: #ccc solid 1px;\r\n                                  border-radius: 5px;\r\n                                  min-width: 100%;\r\n                                  padding-top: 10px;\r\n                                  padding: 25px;\">\r\n\r\n                          <form [formGroup]=\"addCreditWeightingForm\" (ngSubmit)=\"doAddCreditWeighting(addCreditWeightingForm.value)\">\r\n\r\n                            <ion-grid>\r\n                              <ion-row>\r\n                                <ion-col size=\"5\">\r\n                                  <ion-label class=\"settingsAddFormLabel\">\r\n                                    Credit Weighting\r\n                                  </ion-label>\r\n                                </ion-col>\r\n                                <ion-col size=\"7\">\r\n                                  <ion-item>\r\n                                    <ion-input type=\"number\" style=\"min-width: 100%;\" clearInput placeholder=\"Enter No of Credits\" formControlName=\"creditWeighting\"></ion-input>\r\n                                  </ion-item>\r\n                                </ion-col>\r\n                              </ion-row>\r\n                              <ion-row>\r\n                                <ion-col size=\"5\">\r\n                                  <ion-label class=\"settingsAddFormLabel\">\r\n                                    Description\r\n                                  </ion-label>\r\n                                </ion-col>\r\n                                <ion-col size=\"7\">\r\n                                  <ion-item>\r\n                                    <ion-input type=\"text\" style=\"min-width: 100%;\" clearInput placeholder=\"Enter Description\" formControlName=\"description\"></ion-input>\r\n                                  </ion-item>\r\n                                </ion-col>\r\n                              </ion-row>\r\n                              <ion-row>\r\n                                <ion-col size=\"5\">\r\n                                  <ion-label class=\"settingsAddFormLabel\">\r\n                                    Status \r\n                                  </ion-label>\r\n                                </ion-col>\r\n                                <ion-col size=\"7\">\r\n                                  <ion-item>\r\n                                    <ion-select style=\"min-width: 100%;\" placeholder=\"Select Status\" formControlName=\"status\">\r\n                                      <ion-select-option value=\"Pending\">Pending</ion-select-option>\r\n                                      <ion-select-option value=\"Active\">Active</ion-select-option>\r\n                                    </ion-select>\r\n                                  </ion-item>\r\n                                </ion-col>\r\n                              </ion-row>\r\n                              <ion-row>\r\n                                <ion-col size=\"12\">\r\n                                  <ion-button type=\"submit\" expand=\"block\" [disabled]=\"!addCreditWeightingForm.valid\">\r\n                                    <ion-icon name=\"add-circle-outline\" style=\"margin-right: 5px;\"></ion-icon>\r\n                                    <ion-label style=\"color: white;\">\r\n                                      ADD\r\n                                    </ion-label>\r\n                                  </ion-button>\r\n                                </ion-col>\r\n                              </ion-row>\r\n                            </ion-grid>\r\n\r\n                          </form>\r\n\r\n                        </div>\r\n                      </div>\r\n\r\n                    </ion-card-content>\r\n                  </ion-card>\r\n\r\n                </ion-col>\r\n                <ion-col size=\"6\">\r\n\r\n                  <ion-card>\r\n                    <ion-card-content>\r\n\r\n                      <ion-label style=\"font-size: 20px;\">\r\n                        Lecture Halls\r\n                      </ion-label>\r\n\r\n                      <div style=\"margin-top: 5px;\r\n                                  border: #ccc solid 1px;\r\n                                  border-radius: 5px;\r\n                                  min-width: 100%;\r\n                                  height: 460px;\r\n                                  overflow-y: scroll;\">\r\n\r\n                        <table class=\"table\" style=\"min-width: 500px;\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th>Lecture Hall</th>\r\n                              <th>Level</th>\r\n                              <th>Approximate No Of Seats Available</th>\r\n                              <th></th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr *ngFor=\"let item of publishedLectureHalls\">\r\n                              <td>{{ item.payload.doc.data().lectureHall }}</td>\r\n                              <td>{{ item.payload.doc.data().level }}</td>\r\n                              <td>{{ item.payload.doc.data().approximateNoOfSeatsAvailable }}</td>\r\n                              <td>\r\n                                <ion-grid>\r\n                                  <ion-row>\r\n                                    <ion-col>\r\n                                      <ion-button style=\"width: 120px;\" (click)=\"openEditLectureHallModal(item)\">\r\n                                        <ion-icon name=\"create-outline\"></ion-icon>\r\n                                        <ion-label style=\"color: white;\r\n                                                          margin-left: 5px;\">\r\n                                          EDIT\r\n                                        </ion-label>\r\n                                      </ion-button>\r\n                                    </ion-col>\r\n                                    <ion-col>\r\n                                      <ion-button color=\"danger\" style=\"width: 120px;\"\r\n                                        (click)=\"removeLectureHall('Confirmation Required', 'This lecture hall will be removed, do you want to continue?', item)\">\r\n                                        <ion-icon name=\"trash-outline\"></ion-icon>\r\n                                        <ion-label style=\"color: white;\r\n                                                          margin-left: 5px;\">\r\n                                          REMOVE\r\n                                        </ion-label>\r\n                                      </ion-button>\r\n                                    </ion-col>\r\n                                  </ion-row>\r\n                                </ion-grid>\r\n                              </td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n\r\n                      <!-- Loading Spinner -->\r\n                      <ion-spinner name=\"dots\" style=\"position: absolute;\r\n                                                      left: 50%;\r\n                                                      top: 50%;\r\n                                                      transform: translate(-50%,-50%);\r\n                                                      margin-top: 20px;\r\n                                                      height: 100px;\r\n                                                      width: 100px;\" *ngIf=\"loadingSpinnerLectureHall\"></ion-spinner>\r\n\r\n                      <ion-button color=\"medium\" style=\"position: relative;\r\n                                                        left: 87%;\r\n                                                        transform: translateX(-13%);\r\n                                                        width: 100px;\" (click)=\"openAddLectureHallForm()\" *ngIf=\"addLectureHallButton\">\r\n                        <ion-icon name=\"add-circle-outline\" style=\"margin-right: 5px;\"></ion-icon>\r\n                        <ion-label style=\"color: white;\">\r\n                          ADD\r\n                        </ion-label>\r\n                      </ion-button>\r\n\r\n                      <ion-button color=\"danger\" style=\"position: relative;\r\n                                                        left: 90%;\r\n                                                        top: 20px;\r\n                                                        transform: translateX(-10%);\" (click)=\"openAddLectureHallForm()\" *ngIf=\"closeLectureHallFormButton\">\r\n                        <ion-icon name=\"close-outline\"></ion-icon>\r\n                      </ion-button>\r\n\r\n                      <div *ngIf=\"addLectureHallFormSection\">\r\n                        <ion-label style=\"font-size: 20px;\">\r\n                          Add Lecture Hall\r\n                        </ion-label>\r\n                        <div style=\"margin-top: 5px;\r\n                                  border: #ccc solid 1px;\r\n                                  border-radius: 5px;\r\n                                  min-width: 100%;\r\n                                  padding-top: 10px;\r\n                                  padding: 25px;\">\r\n\r\n                          <form [formGroup]=\"addLectureHallForm\" (ngSubmit)=\"doAddLectureHall(addLectureHallForm.value)\">\r\n\r\n                            <ion-grid>\r\n                              <ion-row>\r\n                                <ion-col size=\"5\">\r\n                                  <ion-label class=\"settingsAddFormLabel\">\r\n                                    Lecture Hall\r\n                                  </ion-label>\r\n                                </ion-col>\r\n                                <ion-col size=\"7\">\r\n                                  <ion-item>\r\n                                    <ion-input type=\"text\" style=\"min-width: 100%;\" clearInput placeholder=\"Enter Lecture Hall\" formControlName=\"lectureHall\"></ion-input>\r\n                                  </ion-item>\r\n                                </ion-col>\r\n                              </ion-row>\r\n                              <ion-row>\r\n                                <ion-col size=\"5\">\r\n                                  <ion-label class=\"settingsAddFormLabel\">\r\n                                    Level\r\n                                  </ion-label>\r\n                                </ion-col>\r\n                                <ion-col size=\"7\">\r\n                                  <ion-item>\r\n                                    <ion-input type=\"text\" style=\"min-width: 100%;\" clearInput placeholder=\"Enter Level\" formControlName=\"level\"></ion-input>\r\n                                  </ion-item>\r\n                                </ion-col>\r\n                              </ion-row>\r\n                              <ion-row>\r\n                                <ion-col size=\"5\">\r\n                                  <ion-label class=\"settingsAddFormLabel\">\r\n                                    Approximate No Of Seats Available \r\n                                  </ion-label>\r\n                                </ion-col>\r\n                                <ion-col size=\"7\">\r\n                                  <ion-item>\r\n                                    <ion-input type=\"number\" style=\"min-width: 100%;\" clearInput placeholder=\"Enter No of Seats\" formControlName=\"approximateNoOfSeatsAvailable\"></ion-input>\r\n                                  </ion-item>\r\n                                </ion-col>\r\n                              </ion-row>\r\n                              <ion-row>\r\n                                <ion-col size=\"12\">\r\n                                  <ion-button type=\"submit\" expand=\"block\" [disabled]=\"!addLectureHallForm.valid\">\r\n                                    <ion-icon name=\"add-circle-outline\" style=\"margin-right: 5px;\"></ion-icon>\r\n                                    <ion-label style=\"color: white;\">\r\n                                      ADD\r\n                                    </ion-label>\r\n                                  </ion-button>\r\n                                </ion-col>\r\n                              </ion-row>\r\n                            </ion-grid>\r\n\r\n                          </form>\r\n\r\n                        </div>\r\n                      </div>\r\n\r\n                    </ion-card-content>\r\n                  </ion-card>\r\n\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title>\r\n              Change Status Information\r\n            </ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col size=\"6\">\r\n\r\n                  <ion-card>\r\n                    <ion-card-content>\r\n\r\n                      <ion-label style=\"font-size: 20px;\">\r\n                        Lecture Session Statuses\r\n                      </ion-label>\r\n\r\n                      <div style=\"margin-top: 5px;\r\n                                  border: #ccc solid 1px;\r\n                                  border-radius: 5px;\r\n                                  min-width: 100%;\r\n                                  height: 460px;\r\n                                  overflow-y: scroll;\">\r\n\r\n                        <table class=\"table\" style=\"min-width: 300px;\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th>Status</th>\r\n                              <th>Description</th>\r\n                              <th></th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr *ngFor=\"let item of publishedLectureSessionStatuses\">\r\n                              <td>{{ item.payload.doc.data().status }}</td>\r\n                              <td>{{ item.payload.doc.data().description }}</td>\r\n                              <td>\r\n                                <ion-grid>\r\n                                  <ion-row>\r\n                                    <ion-col>\r\n                                      <ion-button style=\"width: 120px;\" (click)=\"openEditLectureSessionStatusModal(item)\">\r\n                                        <ion-icon name=\"create-outline\"></ion-icon>\r\n                                        <ion-label style=\"color: white;\r\n                                                          margin-left: 5px;\">\r\n                                          EDIT\r\n                                        </ion-label>\r\n                                      </ion-button>\r\n                                    </ion-col>\r\n                                    <ion-col>\r\n                                      <ion-button color=\"danger\" style=\"width: 120px;\"\r\n                                        (click)=\"removeLectureSessionStatus('Confirmation Required', 'This lecture session status will be removed, do you want to continue?', item)\">\r\n                                        <ion-icon name=\"trash-outline\"></ion-icon>\r\n                                        <ion-label style=\"color: white;\r\n                                                          margin-left: 5px;\">\r\n                                          REMOVE\r\n                                        </ion-label>\r\n                                      </ion-button>\r\n                                    </ion-col>\r\n                                  </ion-row>\r\n                                </ion-grid>\r\n                              </td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n\r\n                      <!-- Loading Spinner -->\r\n                      <ion-spinner name=\"dots\" style=\"position: absolute;\r\n                                                      left: 50%;\r\n                                                      top: 50%;\r\n                                                      transform: translate(-50%,-50%);\r\n                                                      margin-top: 20px;\r\n                                                      height: 100px;\r\n                                                      width: 100px;\" *ngIf=\"loadingSpinnerLectureSessionStatus\"></ion-spinner>\r\n\r\n                      <ion-button color=\"medium\" style=\"position: relative;\r\n                                                        left: 87%;\r\n                                                        transform: translateX(-13%);\r\n                                                        width: 100px;\" (click)=\"openAddLectureSessionStatusForm()\" *ngIf=\"addLectureSessionStatusButton\">\r\n                        <ion-icon name=\"add-circle-outline\" style=\"margin-right: 5px;\"></ion-icon>\r\n                        <ion-label style=\"color: white;\">\r\n                          ADD\r\n                        </ion-label>\r\n                      </ion-button>\r\n\r\n                      <ion-button color=\"danger\" style=\"position: relative;\r\n                                                        left: 90%;\r\n                                                        top: 20px;\r\n                                                        transform: translateX(-10%);\" (click)=\"openAddLectureSessionStatusForm()\" *ngIf=\"closeLectureSessionStatusFormButton\">\r\n                        <ion-icon name=\"close-outline\"></ion-icon>\r\n                      </ion-button>\r\n\r\n                      <div *ngIf=\"addLectureSessionStatusFormSection\">\r\n                        <ion-label style=\"font-size: 20px;\">\r\n                          Add Lecture Session Status\r\n                        </ion-label>\r\n                        <div style=\"margin-top: 5px;\r\n                                  border: #ccc solid 1px;\r\n                                  border-radius: 5px;\r\n                                  min-width: 100%;\r\n                                  padding-top: 10px;\r\n                                  padding: 25px;\">\r\n\r\n                          <form [formGroup]=\"addLectureSessionStatusForm\" (ngSubmit)=\"doAddLectureSessionStatus(addLectureSessionStatusForm.value)\">\r\n\r\n                            <ion-grid>\r\n                              <ion-row>\r\n                                <ion-col size=\"5\">\r\n                                  <ion-label class=\"settingsAddFormLabel\">\r\n                                    Status\r\n                                  </ion-label>\r\n                                </ion-col>\r\n                                <ion-col size=\"7\">\r\n                                  <ion-item>\r\n                                    <ion-input type=\"text\" style=\"min-width: 100%;\" clearInput placeholder=\"Enter Status\" formControlName=\"status\"></ion-input>\r\n                                  </ion-item>\r\n                                </ion-col>\r\n                              </ion-row>\r\n                              <ion-row>\r\n                                <ion-col size=\"5\">\r\n                                  <ion-label class=\"settingsAddFormLabel\">\r\n                                    Description\r\n                                  </ion-label>\r\n                                </ion-col>\r\n                                <ion-col size=\"7\">\r\n                                  <ion-item>\r\n                                    <ion-input type=\"text\" style=\"min-width: 100%;\" clearInput placeholder=\"Enter Description\" formControlName=\"description\"></ion-input>\r\n                                  </ion-item>\r\n                                </ion-col>\r\n                              </ion-row>\r\n                              <ion-row>\r\n                                <ion-col size=\"12\">\r\n                                  <ion-button type=\"submit\" expand=\"block\" [disabled]=\"!addLectureSessionStatusForm.valid\">\r\n                                    <ion-icon name=\"add-circle-outline\" style=\"margin-right: 5px;\"></ion-icon>\r\n                                    <ion-label style=\"color: white;\">\r\n                                      ADD\r\n                                    </ion-label>\r\n                                  </ion-button>\r\n                                </ion-col>\r\n                              </ion-row>\r\n                            </ion-grid>\r\n\r\n                          </form>\r\n\r\n                        </div>\r\n                      </div>\r\n\r\n                    </ion-card-content>\r\n                  </ion-card>\r\n\r\n                </ion-col>\r\n                <ion-col size=\"6\">\r\n\r\n                  <ion-card>\r\n                    <ion-card-content>\r\n\r\n                      <ion-label style=\"font-size: 20px;\">\r\n                        User Account Statuses\r\n                      </ion-label>\r\n\r\n                      <div style=\"margin-top: 5px;\r\n                                  border: #ccc solid 1px;\r\n                                  border-radius: 5px;\r\n                                  min-width: 100%;\r\n                                  height: 460px;\r\n                                  overflow-y: scroll;\">\r\n\r\n                        <table class=\"table\" style=\"min-width: 300px;\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th>Status</th>\r\n                              <th>Description</th>\r\n                              <th></th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr *ngFor=\"let item of publishedUserStatuses\">\r\n                              <td>{{ item.payload.doc.data().status }}</td>\r\n                              <td>{{ item.payload.doc.data().description }}</td>\r\n                              <td>\r\n                                <ion-grid>\r\n                                  <ion-row>\r\n                                    <ion-col>\r\n                                      <ion-button style=\"width: 120px;\" (click)=\"openEditUserAccountStatusModal(item)\">\r\n                                        <ion-icon name=\"create-outline\"></ion-icon>\r\n                                        <ion-label style=\"color: white;\r\n                                                          margin-left: 5px;\">\r\n                                          EDIT\r\n                                        </ion-label>\r\n                                      </ion-button>\r\n                                    </ion-col>\r\n                                    <ion-col>\r\n                                      <ion-button color=\"danger\" style=\"width: 120px;\"\r\n                                        (click)=\"removeUserAccountStatus('Confirmation Required', 'This user account status will be removed, do you want to continue?', item)\">\r\n                                        <ion-icon name=\"trash-outline\"></ion-icon>\r\n                                        <ion-label style=\"color: white;\r\n                                                          margin-left: 5px;\">\r\n                                          REMOVE\r\n                                        </ion-label>\r\n                                      </ion-button>\r\n                                    </ion-col>\r\n                                  </ion-row>\r\n                                </ion-grid>\r\n                              </td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n\r\n                      <!-- Loading Spinner -->\r\n                      <ion-spinner name=\"dots\" style=\"position: absolute;\r\n                                                      left: 50%;\r\n                                                      top: 50%;\r\n                                                      transform: translate(-50%,-50%);\r\n                                                      margin-top: 20px;\r\n                                                      height: 100px;\r\n                                                      width: 100px;\" *ngIf=\"loadingSpinnerUserAccountStatus\"></ion-spinner>\r\n\r\n                      <ion-button color=\"medium\" style=\"position: relative;\r\n                                                        left: 85%;\r\n                                                        transform: translateX(-15%);\r\n                                                        width: 100px;\" (click)=\"openAddUserAccountStatusForm()\" *ngIf=\"addUserAccountStatusButton\">\r\n                        <ion-icon name=\"add-circle-outline\" style=\"margin-right: 5px;\"></ion-icon>\r\n                        <ion-label style=\"color: white;\">\r\n                          ADD\r\n                        </ion-label>\r\n                      </ion-button>\r\n\r\n                      <ion-button color=\"danger\" style=\"position: relative;\r\n                                                        left: 90%;\r\n                                                        top: 20px;\r\n                                                        transform: translateX(-10%);\" (click)=\"openAddUserAccountStatusForm()\" *ngIf=\"closeUserAccountStatusFormButton\">\r\n                        <ion-icon name=\"close-outline\"></ion-icon>\r\n                      </ion-button>\r\n\r\n                      <div *ngIf=\"addUserAccountStatusFormSection\">\r\n                        <ion-label style=\"font-size: 20px;\">\r\n                          Add User Account Status\r\n                        </ion-label>\r\n                        <div style=\"margin-top: 5px;\r\n                                  border: #ccc solid 1px;\r\n                                  border-radius: 5px;\r\n                                  min-width: 100%;\r\n                                  padding-top: 10px;\r\n                                  padding: 25px;\">\r\n\r\n                          <form [formGroup]=\"addUserAccountStatusForm\" (ngSubmit)=\"doAddUserAccountStatus(addUserAccountStatusForm.value)\">\r\n\r\n                            <ion-grid>\r\n                              <ion-row>\r\n                                <ion-col size=\"5\">\r\n                                  <ion-label class=\"settingsAddFormLabel\">\r\n                                    Status\r\n                                  </ion-label>\r\n                                </ion-col>\r\n                                <ion-col size=\"7\">\r\n                                  <ion-item>\r\n                                    <ion-input type=\"text\" style=\"min-width: 100%;\" clearInput placeholder=\"Enter Status\" formControlName=\"status\"></ion-input>\r\n                                  </ion-item>\r\n                                </ion-col>\r\n                              </ion-row>\r\n                              <ion-row>\r\n                                <ion-col size=\"5\">\r\n                                  <ion-label class=\"settingsAddFormLabel\">\r\n                                    Description\r\n                                  </ion-label>\r\n                                </ion-col>\r\n                                <ion-col size=\"7\">\r\n                                  <ion-item>\r\n                                    <ion-input type=\"text\" style=\"min-width: 100%;\" clearInput placeholder=\"Enter Description\" formControlName=\"description\"></ion-input>\r\n                                  </ion-item>\r\n                                </ion-col>\r\n                              </ion-row>\r\n                              <ion-row>\r\n                                <ion-col size=\"12\">\r\n                                  <ion-button type=\"submit\" expand=\"block\" [disabled]=\"!addUserAccountStatusForm.valid\">\r\n                                    <ion-icon name=\"add-circle-outline\" style=\"margin-right: 5px;\"></ion-icon>\r\n                                    <ion-label style=\"color: white;\">\r\n                                      ADD\r\n                                    </ion-label>\r\n                                  </ion-button>\r\n                                </ion-col>\r\n                              </ion-row>\r\n                            </ion-grid>\r\n\r\n                          </form>\r\n\r\n                        </div>\r\n                      </div>\r\n\r\n                    </ion-card-content>\r\n                  </ion-card>\r\n\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title>\r\n              Change Notice Information\r\n            </ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n          \r\n            <ion-card>\r\n              <ion-card-content>\r\n\r\n                <ion-label style=\"font-size: 20px;\">\r\n                  Notice Categories\r\n                </ion-label>\r\n\r\n                <div style=\"margin-top: 5px;\r\n                            border: #ccc solid 1px;\r\n                            border-radius: 5px;\r\n                            min-width: 100%;\r\n                            height: 460px;\r\n                            overflow-y: scroll;\">\r\n\r\n                  <table class=\"table\" style=\"min-width: 300px;\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th>Category</th>\r\n                        <th>Description</th>\r\n                        <th></th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let item of publishedNoticeCategory\">\r\n                        <td>{{ item.payload.doc.data().category }}</td>\r\n                        <td>{{ item.payload.doc.data().description }}</td>\r\n                        <td>\r\n                          <ion-grid>\r\n                            <ion-row>\r\n                              <ion-col>\r\n                                <ion-button style=\"width: 120px;\" (click)=\"openEditNoticeCategoryModal(item)\">\r\n                                  <ion-icon name=\"create-outline\"></ion-icon>\r\n                                  <ion-label style=\"color: white;\r\n                                                    margin-left: 5px;\">\r\n                                    EDIT\r\n                                  </ion-label>\r\n                                </ion-button>\r\n                              </ion-col>\r\n                              <ion-col>\r\n                                <ion-button color=\"danger\" style=\"width: 120px;\"\r\n                                  (click)=\"removeNoticeCategory('Confirmation Required', 'This notice category will be removed, do you want to continue?', item)\">\r\n                                  <ion-icon name=\"trash-outline\"></ion-icon>\r\n                                  <ion-label style=\"color: white;\r\n                                                    margin-left: 5px;\">\r\n                                    REMOVE\r\n                                  </ion-label>\r\n                                </ion-button>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                          </ion-grid>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n\r\n                <!-- Loading Spinner -->\r\n                <ion-spinner name=\"dots\" style=\"position: absolute;\r\n                                                left: 50%;\r\n                                                top: 50%;\r\n                                                transform: translate(-50%,-50%);\r\n                                                margin-top: 20px;\r\n                                                height: 100px;\r\n                                                width: 100px;\" *ngIf=\"loadingSpinnerNoticeCategory\"></ion-spinner>\r\n\r\n                <ion-button color=\"medium\" style=\"position: relative;\r\n                                                  left: 85%;\r\n                                                  transform: translateX(-15%);\r\n                                                  width: 100px;\" (click)=\"openAddNoticeCategoryForm()\" *ngIf=\"addNoticeCategoryButton\">\r\n                  <ion-icon name=\"add-circle-outline\" style=\"margin-right: 5px;\"></ion-icon>\r\n                  <ion-label style=\"color: white;\">\r\n                    ADD\r\n                  </ion-label>\r\n                </ion-button>\r\n\r\n                <ion-button color=\"danger\" style=\"position: relative;\r\n                                                        left: 90%;\r\n                                                        top: 20px;\r\n                                                        transform: translateX(-10%);\" (click)=\"openAddNoticeCategoryForm()\" *ngIf=\"closeNoticeCategoryFormButton\">\r\n                  <ion-icon name=\"close-outline\"></ion-icon>\r\n                </ion-button>\r\n\r\n                \r\n                <div *ngIf=\"addNoticeCategoryFormSection\">\r\n                  <ion-label style=\"font-size: 20px;\">\r\n                    Add Notice Category\r\n                  </ion-label>\r\n                  <div style=\"margin-top: 5px;\r\n                            border: #ccc solid 1px;\r\n                            border-radius: 5px;\r\n                            min-width: 100%;\r\n                            padding-top: 10px;\r\n                            padding: 25px;\">\r\n\r\n                    <form [formGroup]=\"addNoticeCategoryForm\" (ngSubmit)=\"doAddNoticeCategory(addNoticeCategoryForm.value)\">\r\n\r\n                      <ion-grid>\r\n                        <ion-row>\r\n                          <ion-col size=\"5\">\r\n                            <ion-label class=\"settingsAddFormLabel\">\r\n                              Category\r\n                            </ion-label>\r\n                          </ion-col>\r\n                          <ion-col size=\"7\">\r\n                            <ion-item>\r\n                              <ion-input type=\"text\" style=\"min-width: 100%;\" clearInput placeholder=\"Enter Category\" formControlName=\"category\"></ion-input>\r\n                            </ion-item>\r\n                          </ion-col>\r\n                        </ion-row>\r\n                        <ion-row>\r\n                          <ion-col size=\"5\">\r\n                            <ion-label class=\"settingsAddFormLabel\">\r\n                              Description\r\n                            </ion-label>\r\n                          </ion-col>\r\n                          <ion-col size=\"7\">\r\n                            <ion-item>\r\n                              <ion-input type=\"text\" style=\"min-width: 100%;\" clearInput placeholder=\"Enter Description\" formControlName=\"description\"></ion-input>\r\n                            </ion-item>\r\n                          </ion-col>\r\n                        </ion-row>\r\n                        <ion-row>\r\n                          <ion-col size=\"12\">\r\n                            <ion-button type=\"submit\" expand=\"block\" [disabled]=\"!addNoticeCategoryForm.valid\">\r\n                              <ion-icon name=\"add-circle-outline\" style=\"margin-right: 5px;\"></ion-icon>\r\n                              <ion-label style=\"color: white;\">\r\n                                ADD\r\n                              </ion-label>\r\n                            </ion-button>\r\n                          </ion-col>\r\n                        </ion-row>\r\n                      </ion-grid>\r\n\r\n                    </form>\r\n\r\n                  </div>\r\n                </div>\r\n\r\n              </ion-card-content>\r\n            </ion-card>\r\n           \r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n      </ion-col>\r\n      <ion-col>\r\n\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title>\r\n              Change Account Details\r\n            </ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n          \r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-button color=\"medium\" expand=\"block\" style=\"height: 50px;\" (click)=\"openUpdateDetailsLoginForm()\">\r\n                    Update Details\r\n                  </ion-button>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-button color=\"medium\" expand=\"block\" style=\"height: 50px;\" (click)=\"openUpdatePasswordLoginForm()\">\r\n                    Update Password\r\n                  </ion-button>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n\r\n            <!-- Update Details Login Credentials Form -->\r\n            <ion-button color=\"danger\" style=\"position: relative;\r\n                                              left: 5%;\r\n                                              top: 30px;\r\n                                              transform: translateX(-10%);\" (click)=\"openUpdateDetailsLoginForm()\" *ngIf=\"closeUpdateDetailsLoginFormButton\">\r\n              <ion-icon name=\"close-outline\"></ion-icon>\r\n            </ion-button>\r\n\r\n            <div style=\"border: #ccc solid 1px;\r\n                        border-radius: 5px;\r\n                        margin: 30px;\r\n                        padding: 20px;\" *ngIf=\"updateDetailsLoginFormSection\">\r\n              <ion-label style=\"font-size: 18px;\">\r\n                Enter Login Credentials\r\n              </ion-label>\r\n\r\n              <form [formGroup]=\"updateDetailsLoginForm\" (ngSubmit)=\"openUpdateDetailsModal(updateDetailsLoginForm.value)\">\r\n                <ion-grid style=\"margin-top: 10px;\">\r\n                  <ion-row>\r\n                    <ion-col size=\"4\">\r\n                      <ion-label class=\"settingsAddFormLabel\">\r\n                        <b>Email Address</b>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"8\">\r\n                      <ion-item>\r\n                        <ion-input type=\"email\" clearInput placeholder=\"Enter Email Address\" formControlName=\"emailAddress\"></ion-input>\r\n                      </ion-item>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col size=\"4\">\r\n                      <ion-label class=\"settingsAddFormLabel\">\r\n                        <b>Password</b>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"8\">\r\n                      <ion-item>\r\n                        <ion-input type=\"password\" clearInput placeholder=\"Enter Password\" formControlName=\"password\"></ion-input>\r\n                      </ion-item>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row style=\"margin-top: 20px;\">\r\n                    <ion-col>\r\n                      <ion-button expand=\"block\" style=\"height: 50px;\" type=\"submit\" [disabled]=\"!updateDetailsLoginForm.valid\"> \r\n                        <ion-icon name=\"shield-checkmark-outline\"></ion-icon>\r\n                        <ion-label style=\"color: white;\r\n                                          margin-left: 5px;\">\r\n                          VERIFY\r\n                        </ion-label>\r\n                      </ion-button>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </form>\r\n            </div>\r\n\r\n\r\n            <!-- Update Password Login Credentials Form -->\r\n            <ion-button color=\"danger\" style=\"position: relative;\r\n                                              left: 90%;\r\n                                              top: 30px;\r\n                                              transform: translateX(-10%);\" (click)=\"openUpdatePasswordLoginForm()\" *ngIf=\"closeUpdatePasswordLoginFormButton\">\r\n              <ion-icon name=\"close-outline\"></ion-icon>\r\n            </ion-button>\r\n\r\n            <div style=\"border: #ccc solid 1px;\r\n                        border-radius: 5px;\r\n                        margin: 30px;\r\n                        padding: 20px;\" *ngIf=\"updatePasswordLoginFormSection\">\r\n              <ion-label style=\"font-size: 18px;\">\r\n                Enter Login Credentials\r\n              </ion-label>\r\n\r\n              <form [formGroup]=\"updatePasswordLoginForm\" (ngSubmit)=\"openUpdatePasswordModal(updatePasswordLoginForm.value)\">\r\n                <ion-grid style=\"margin-top: 10px;\">\r\n                  <ion-row>\r\n                    <ion-col size=\"4\">\r\n                      <ion-label class=\"settingsAddFormLabel\">\r\n                        <b>Email Address</b>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"8\">\r\n                      <ion-item>\r\n                        <ion-input type=\"email\" clearInput placeholder=\"Enter Email Address\" formControlName=\"emailAddress\"></ion-input>\r\n                      </ion-item>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col size=\"4\">\r\n                      <ion-label class=\"settingsAddFormLabel\">\r\n                        <b>Password</b>\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"8\">\r\n                      <ion-item>\r\n                        <ion-input type=\"password\" clearInput placeholder=\"Enter Password\" formControlName=\"password\"></ion-input>\r\n                      </ion-item>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row style=\"margin-top: 20px;\">\r\n                    <ion-col>\r\n                      <ion-button expand=\"block\" style=\"height: 50px;\" type=\"submit\" [disabled]=\"!updatePasswordLoginForm.valid\"> \r\n                        <ion-icon name=\"shield-checkmark-outline\"></ion-icon>\r\n                        <ion-label style=\"color: white;\r\n                                          margin-left: 5px;\">\r\n                          VERIFY\r\n                        </ion-label>\r\n                      </ion-button>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </form>\r\n            </div>\r\n\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title>\r\n              ABOUT\r\n            </ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n          \r\n            <ion-card id=\"aboutCardStyle\">\r\n              <ion-card-header>\r\n                  <ion-avatar style=\"position: absolute;\r\n                                    top: 20px;\r\n                                    left: 50%;\r\n                                    transform: translateX(-50%);\r\n                                    background-color: white;\r\n                                    width: 100px;\r\n                                    height: 100px;\">\r\n                    <img src=\"assets/images/RPLS_Logo.png\">\r\n                  </ion-avatar>\r\n                </ion-card-header>   \r\n                <ion-card-content style=\"margin-top: 100px;\"> \r\n                  <h2 style=\"text-align: center;\r\n                            color: black;\">iSAM Platform built by University of Plymouth Second Year students <br> \r\n                              following BSc(Hons) Software Engineering Degree</h2><br>\r\n                  <h2 style=\"text-align: center;\r\n                            color: black;\">Assignment Title: Coursework PUSL2008 - Intorduction to Internet of Things</h2>\r\n                </ion-card-content>     \r\n            </ion-card>\r\n\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/office/settings/settings-routing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/office/settings/settings-routing.module.ts ***!
    \************************************************************/

  /*! exports provided: SettingsPageRoutingModule */

  /***/
  function srcAppOfficeSettingsSettingsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function () {
      return SettingsPageRoutingModule;
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


    var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./settings.page */
    "./src/app/office/settings/settings.page.ts");

    var routes = [{
      path: '',
      component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
    }];

    var SettingsPageRoutingModule = function SettingsPageRoutingModule() {
      _classCallCheck(this, SettingsPageRoutingModule);
    };

    SettingsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SettingsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/office/settings/settings.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/office/settings/settings.module.ts ***!
    \****************************************************/

  /*! exports provided: SettingsPageModule */

  /***/
  function srcAppOfficeSettingsSettingsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function () {
      return SettingsPageModule;
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


    var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./settings-routing.module */
    "./src/app/office/settings/settings-routing.module.ts");
    /* harmony import */


    var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./settings.page */
    "./src/app/office/settings/settings.page.ts");

    var SettingsPageModule = function SettingsPageModule() {
      _classCallCheck(this, SettingsPageModule);
    };

    SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"]],
      declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })], SettingsPageModule);
    /***/
  },

  /***/
  "./src/app/office/settings/settings.page.scss":
  /*!****************************************************!*\
    !*** ./src/app/office/settings/settings.page.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOfficeSettingsSettingsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --ion-background-color: rgb(243, 243, 243);\n}\n\nion-card {\n  --ion-background-color: white;\n}\n\nion-label {\n  color: black;\n}\n\nion-item {\n  border: #ccc solid 1px;\n  border-radius: 5px;\n}\n\n#aboutCardStyle {\n  min-height: 250px;\n  --ion-background-color: rgb(235, 235, 235);\n}\n\n.settingsAddFormLabel {\n  position: relative;\n  top: 15px;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ZmaWNlL3NldHRpbmdzL0M6XFxVc2Vyc1xccmFudWxcXERvY3VtZW50c1xcR2l0SHViXFwybmQgWWVhclxcMm5kIFNlbWVzdGVyXFxVT1BfU0VfWTJTMi1QVVNMMjAwOC1JTlRST0RVQ1RJT04tVE8tSU5URVJORVQtT0YtVEhJTkdTXFxXb3Jrc3BhY2VcXGlTQU0vc3JjXFxhcHBcXG9mZmljZVxcc2V0dGluZ3NcXHNldHRpbmdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvb2ZmaWNlL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBDQUFBO0FDQ0o7O0FERUE7RUFDSSw2QkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSwwQ0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvb2ZmaWNlL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjQzLCAyNDMpO1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tbGFiZWx7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmlvbi1pdGVte1xyXG4gICAgYm9yZGVyOiAjY2NjIHNvbGlkIDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuI2Fib3V0Q2FyZFN0eWxle1xyXG4gICAgbWluLWhlaWdodDogMjUwcHg7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzUsIDIzNSk7XHJcbn1cclxuXHJcbi5zZXR0aW5nc0FkZEZvcm1MYWJlbHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjQzLCAyNDMpO1xufVxuXG5pb24tY2FyZCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5pb24tbGFiZWwge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1pdGVtIHtcbiAgYm9yZGVyOiAjY2NjIHNvbGlkIDFweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4jYWJvdXRDYXJkU3R5bGUge1xuICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xufVxuXG4uc2V0dGluZ3NBZGRGb3JtTGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/office/settings/settings.page.ts":
  /*!**************************************************!*\
    !*** ./src/app/office/settings/settings.page.ts ***!
    \**************************************************/

  /*! exports provided: SettingsPage */

  /***/
  function srcAppOfficeSettingsSettingsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsPage", function () {
      return SettingsPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _notifications_popover_notifications_popover_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../notifications-popover/notifications-popover.page */
    "./src/app/office/notifications-popover/notifications-popover.page.ts");
    /* harmony import */


    var _update_account_details_modal_update_account_details_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./update-account-details-modal/update-account-details-modal.page */
    "./src/app/office/settings/update-account-details-modal/update-account-details-modal.page.ts");
    /* harmony import */


    var _update_account_password_modal_update_account_password_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./update-account-password-modal/update-account-password-modal.page */
    "./src/app/office/settings/update-account-password-modal/update-account-password-modal.page.ts");
    /* harmony import */


    var _editModals_edit_degree_program_modal_edit_degree_program_modal_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./editModals/edit-degree-program-modal/edit-degree-program-modal.page */
    "./src/app/office/settings/editModals/edit-degree-program-modal/edit-degree-program-modal.page.ts");
    /* harmony import */


    var _editModals_edit_batch_modal_edit_batch_modal_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./editModals/edit-batch-modal/edit-batch-modal.page */
    "./src/app/office/settings/editModals/edit-batch-modal/edit-batch-modal.page.ts");
    /* harmony import */


    var _editModals_edit_credit_weighting_modal_edit_credit_weighting_modal_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./editModals/edit-credit-weighting-modal/edit-credit-weighting-modal.page */
    "./src/app/office/settings/editModals/edit-credit-weighting-modal/edit-credit-weighting-modal.page.ts");
    /* harmony import */


    var _editModals_edit_lecture_hall_modal_edit_lecture_hall_modal_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./editModals/edit-lecture-hall-modal/edit-lecture-hall-modal.page */
    "./src/app/office/settings/editModals/edit-lecture-hall-modal/edit-lecture-hall-modal.page.ts");
    /* harmony import */


    var _editModals_edit_lecture_session_status_modal_edit_lecture_session_status_modal_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./editModals/edit-lecture-session-status-modal/edit-lecture-session-status-modal.page */
    "./src/app/office/settings/editModals/edit-lecture-session-status-modal/edit-lecture-session-status-modal.page.ts");
    /* harmony import */


    var _editModals_edit_notice_category_modal_edit_notice_category_modal_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./editModals/edit-notice-category-modal/edit-notice-category-modal.page */
    "./src/app/office/settings/editModals/edit-notice-category-modal/edit-notice-category-modal.page.ts");
    /* harmony import */


    var _editModals_edit_user_account_status_modal_edit_user_account_status_modal_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./editModals/edit-user-account-status-modal/edit-user-account-status-modal.page */
    "./src/app/office/settings/editModals/edit-user-account-status-modal/edit-user-account-status-modal.page.ts");

    var SettingsPage = /*#__PURE__*/function () {
      function SettingsPage(sideMenuPageUserFaculty, settingsService, alertController, formBuilder, popoverController, modalController) {
        var _this = this;

        _classCallCheck(this, SettingsPage);

        this.sideMenuPageUserFaculty = sideMenuPageUserFaculty;
        this.settingsService = settingsService;
        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.popoverController = popoverController;
        this.modalController = modalController;
        /* Add Form Sections */

        this.addDegreeProgramFormSection = false;
        this.addBatchFormSection = false;
        this.addCreditWeightingFormSection = false;
        this.addLectureHallFormSection = false;
        this.addLectureSessionStatusFormSection = false;
        this.addUserAccountStatusFormSection = false;
        this.addNoticeCategoryFormSection = false;
        this.updateDetailsLoginFormSection = false;
        this.updatePasswordLoginFormSection = false;
        /* Add Buttons */

        this.addDegreeProgramButton = true;
        this.addBatchButton = true;
        this.addCreditWeightingButton = true;
        this.addLectureHallButton = true;
        this.addLectureSessionStatusButton = true;
        this.addUserAccountStatusButton = true;
        this.addNoticeCategoryButton = true;
        /* Close Form Buttons */

        this.closeDegreeProgramFormButton = false;
        this.closeBatchFormButton = false;
        this.closeCreditWeightingFormButton = false;
        this.closeLectureHallFormButton = false;
        this.closeLectureSessionStatusFormButton = false;
        this.closeUserAccountStatusFormButton = false;
        this.closeNoticeCategoryFormButton = false;
        this.closeUpdateDetailsLoginFormButton = false;
        this.closeUpdatePasswordLoginFormButton = false;
        /* Loading Spinners */

        this.loadingSpinnerDegreeProgram = true;
        this.loadingSpinnerBatch = true;
        this.loadingSpinnerCreditWeighting = true;
        this.loadingSpinnerLectureHall = true;
        this.loadingSpinnerLectureSessionStatus = true;
        this.loadingSpinnerUserAccountStatus = true;
        this.loadingSpinnerNoticeCategory = true;

        this.retrievePublishedDegreeProgram = function () {
          return _this.settingsService.retrievePublishedDegreeProgram(_this.sideMenuPageUserFaculty.passLoggedInUserFaculty()).subscribe(function (response) {
            _this.loadingSpinnerDegreeProgram = false;
            _this.publishedDegreePrograms = response;
          });
        };

        this.retrievePublishedBatch = function () {
          return _this.settingsService.retrievePublishedBatch(_this.sideMenuPageUserFaculty.passLoggedInUserFaculty()).subscribe(function (response) {
            _this.loadingSpinnerBatch = false;
            _this.publishedBatches = response;
          });
        };

        this.retrievePublishedModuleCreditsWeighting = function () {
          return _this.settingsService.retrievePublishedModuleCreditsWeighting().subscribe(function (response) {
            _this.loadingSpinnerCreditWeighting = false;
            _this.publishedNoOfCreditWeightings = response;
          });
        };

        this.retrievePublishedLectureHalls = function () {
          return _this.settingsService.retrievePublishedLectureHalls(_this.sideMenuPageUserFaculty.passLoggedInUserFaculty()).subscribe(function (response) {
            _this.loadingSpinnerLectureHall = false;
            _this.publishedLectureHalls = response;
          });
        };

        this.retrievePublishedLectureSessionStatuses = function () {
          return _this.settingsService.retrievePublishedLectureSessionStatuses().subscribe(function (response) {
            _this.loadingSpinnerLectureSessionStatus = false;
            _this.publishedLectureSessionStatuses = response;
          });
        };

        this.retrievePublishedUserStatuses = function () {
          return _this.settingsService.retrievePublishedUserStatuses().subscribe(function (response) {
            _this.loadingSpinnerUserAccountStatus = false;
            _this.publishedUserStatuses = response;
          });
        };

        this.retrievePublishedNoticeCategories = function () {
          return _this.settingsService.retrievePublishedNoticeCategories().subscribe(function (response) {
            _this.loadingSpinnerNoticeCategory = false;
            _this.publishedNoticeCategory = response;
          });
        };

        this.retrieveRegisteredLecturers = function () {
          return _this.settingsService.retrieveRegisteredLecturers().subscribe(function (response) {
            _this.registeredLecturers = response;
          });
        };
      }

      _createClass(SettingsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.retrievePublishedBatch();
          this.retrievePublishedDegreeProgram();
          this.retrievePublishedModuleCreditsWeighting();
          this.retrievePublishedLectureHalls();
          this.retrievePublishedLectureSessionStatuses();
          this.retrievePublishedUserStatuses();
          this.retrievePublishedNoticeCategories();
          this.retrieveRegisteredLecturers();
          /* FormControls */

          this.addDegreeProgramForm = this.formBuilder.group({
            degreeCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            degree: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            awardingBodyUniversity: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            academicPeriodYear: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            academicPeriodSemester: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            programDelivery: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            programCoordinator: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
          });
          this.addBatchForm = this.formBuilder.group({
            batch: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            degreeProgram: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
          });
          this.addCreditWeightingForm = this.formBuilder.group({
            creditWeighting: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
          });
          this.addLectureHallForm = this.formBuilder.group({
            lectureHall: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            level: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            approximateNoOfSeatsAvailable: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
          });
          this.addLectureSessionStatusForm = this.formBuilder.group({
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
          });
          this.addUserAccountStatusForm = this.formBuilder.group({
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
          });
          this.addNoticeCategoryForm = this.formBuilder.group({
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
          });
          this.updateDetailsLoginForm = this.formBuilder.group({
            emailAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-zA-Z0-9]+[!@#$%^&*]?'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10)]))
          });
          this.updatePasswordLoginForm = this.formBuilder.group({
            emailAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-zA-Z0-9]+[!@#$%^&*]?'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10)]))
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
        } // Alert Box Implementation

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
        /* Functions handling show add section and hide add section */

      }, {
        key: "openAddDegreeProgramForm",
        value: function openAddDegreeProgramForm() {
          if (this.addDegreeProgramButton == true) {
            this.addDegreeProgramButton = false;
            this.closeDegreeProgramFormButton = true;
            this.addDegreeProgramFormSection = true;
          } else if (this.addDegreeProgramButton == false) {
            this.addDegreeProgramForm.reset();
            this.addDegreeProgramButton = true;
            this.closeDegreeProgramFormButton = false;
            this.addDegreeProgramFormSection = false;
          }
        }
      }, {
        key: "openAddBatchForm",
        value: function openAddBatchForm() {
          if (this.addBatchButton == true) {
            this.addBatchButton = false;
            this.closeBatchFormButton = true;
            this.addBatchFormSection = true;
          } else if (this.addBatchButton == false) {
            this.addBatchForm.reset();
            this.addBatchButton = true;
            this.closeBatchFormButton = false;
            this.addBatchFormSection = false;
          }
        }
      }, {
        key: "openAddCreditWeightingForm",
        value: function openAddCreditWeightingForm() {
          if (this.addCreditWeightingButton == true) {
            this.addCreditWeightingButton = false;
            this.closeCreditWeightingFormButton = true;
            this.addCreditWeightingFormSection = true;
          } else if (this.addCreditWeightingButton == false) {
            this.addCreditWeightingForm.reset();
            this.addCreditWeightingButton = true;
            this.closeCreditWeightingFormButton = false;
            this.addCreditWeightingFormSection = false;
          }
        }
      }, {
        key: "openAddLectureHallForm",
        value: function openAddLectureHallForm() {
          if (this.addLectureHallButton == true) {
            this.addLectureHallButton = false;
            this.closeLectureHallFormButton = true;
            this.addLectureHallFormSection = true;
          } else if (this.addLectureHallButton == false) {
            this.addLectureHallForm.reset();
            this.addLectureHallButton = true;
            this.closeLectureHallFormButton = false;
            this.addLectureHallFormSection = false;
          }
        }
      }, {
        key: "openAddLectureSessionStatusForm",
        value: function openAddLectureSessionStatusForm() {
          if (this.addLectureSessionStatusButton == true) {
            this.addLectureSessionStatusButton = false;
            this.closeLectureSessionStatusFormButton = true;
            this.addLectureSessionStatusFormSection = true;
          } else if (this.addLectureSessionStatusButton == false) {
            this.addLectureSessionStatusForm.reset();
            this.addLectureSessionStatusButton = true;
            this.closeLectureSessionStatusFormButton = false;
            this.addLectureSessionStatusFormSection = false;
          }
        }
      }, {
        key: "openAddUserAccountStatusForm",
        value: function openAddUserAccountStatusForm() {
          if (this.addUserAccountStatusButton == true) {
            this.addUserAccountStatusButton = false;
            this.closeUserAccountStatusFormButton = true;
            this.addUserAccountStatusFormSection = true;
          } else if (this.addUserAccountStatusButton == false) {
            this.addUserAccountStatusForm.reset();
            this.addUserAccountStatusButton = true;
            this.closeUserAccountStatusFormButton = false;
            this.addUserAccountStatusFormSection = false;
          }
        }
      }, {
        key: "openAddNoticeCategoryForm",
        value: function openAddNoticeCategoryForm() {
          if (this.addNoticeCategoryButton == true) {
            this.addNoticeCategoryButton = false;
            this.closeNoticeCategoryFormButton = true;
            this.addNoticeCategoryFormSection = true;
          } else if (this.addNoticeCategoryButton == false) {
            this.addNoticeCategoryForm.reset();
            this.addNoticeCategoryButton = true;
            this.closeNoticeCategoryFormButton = false;
            this.addNoticeCategoryFormSection = false;
          }
        }
      }, {
        key: "openUpdateDetailsLoginForm",
        value: function openUpdateDetailsLoginForm() {
          if (this.updatePasswordLoginFormSection == true) {
            this.updatePasswordLoginFormSection = false;
            this.closeUpdatePasswordLoginFormButton = false; // Resetting update account password form

            this.updatePasswordLoginForm.reset();
            this.updateDetailsLoginFormSection = true;
            this.closeUpdateDetailsLoginFormButton = true;
          } else if (this.updateDetailsLoginFormSection == false) {
            this.updateDetailsLoginFormSection = true;
            this.closeUpdateDetailsLoginFormButton = true;
          } else if (this.updateDetailsLoginFormSection == true) {
            this.updateDetailsLoginFormSection = false;
            this.closeUpdateDetailsLoginFormButton = false; // Resetting update account details form

            this.updateDetailsLoginForm.reset();
          }
        }
      }, {
        key: "openUpdatePasswordLoginForm",
        value: function openUpdatePasswordLoginForm() {
          if (this.updateDetailsLoginFormSection == true) {
            this.updateDetailsLoginFormSection = false;
            this.closeUpdateDetailsLoginFormButton = false; // Resetting update account details form

            this.updateDetailsLoginForm.reset();
            this.updatePasswordLoginFormSection = true;
            this.closeUpdatePasswordLoginFormButton = true;
          } else if (this.updatePasswordLoginFormSection == false) {
            this.updatePasswordLoginFormSection = true;
            this.closeUpdatePasswordLoginFormButton = true;
          } else if (this.updatePasswordLoginFormSection == true) {
            this.updatePasswordLoginFormSection = false;
            this.closeUpdatePasswordLoginFormButton = false; // Resetting update account password form

            this.updatePasswordLoginForm.reset();
          }
        } // Update account details modal calling, opening modal

      }, {
        key: "updateAccountDetailsModal",
        value: function updateAccountDetailsModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var updateAccountDetailsModal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalController.create({
                      component: _update_account_details_modal_update_account_details_modal_page__WEBPACK_IMPORTED_MODULE_7__["UpdateAccountDetailsModalPage"],
                      // Passing value to the modal using 'componentProps'
                      componentProps: {
                        loggedInUserId: this.sideMenuPageUserFaculty.passLoggedInUserId()
                      },
                      // Disabling modal closing from any outside clicks
                      backdropDismiss: false
                    });

                  case 2:
                    updateAccountDetailsModal = _context3.sent;
                    updateAccountDetailsModal.present();

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        } // Process of verifying entered credentials and opening update user account details modal

      }, {
        key: "openUpdateDetailsModal",
        value: function openUpdateDetailsModal(value) {
          var _this2 = this;

          // Verifying entered login credentials
          this.settingsService.verifyLoginCredentials(value).then(function (response) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      // Opening update account details modal
                      this.updateAccountDetailsModal();

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }, function (error) {
            console.log("Error during login credential verification: " + error);

            _this2.alertNotice("Error", "An error has occurred: " + error);
          });
        } // Update account password modal calling, opening modal

      }, {
        key: "updateAccountPasswordModal",
        value: function updateAccountPasswordModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var updateAccountPasswordModal;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.modalController.create({
                      component: _update_account_password_modal_update_account_password_modal_page__WEBPACK_IMPORTED_MODULE_8__["UpdateAccountPasswordModalPage"],
                      // Disabling modal closing from any outside clicks
                      backdropDismiss: false
                    });

                  case 2:
                    updateAccountPasswordModal = _context5.sent;
                    updateAccountPasswordModal.present();

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        } // Process of verifying entered credentials and opening update user account password modal

      }, {
        key: "openUpdatePasswordModal",
        value: function openUpdatePasswordModal(value) {
          var _this3 = this;

          // Verifying entered login credentials
          this.settingsService.verifyLoginCredentials(value).then(function (response) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      // Opening update account password modal
                      this.updateAccountPasswordModal();

                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }, function (error) {
            console.log("Error during login credential verification: " + error);

            _this3.alertNotice("Error", "An error has occurred: " + error);
          });
        } // Retrieving the awardingBodyUniversity for the selected degree

      }, {
        key: "getAwardingBodyUniversity",
        value: function getAwardingBodyUniversity(event) {
          var _this4 = this;

          var selectedDegree = event.detail.value;
          console.log(selectedDegree); // Retrieving the awardingBody University of the selected degree

          this.settingsService.retrievingAwardingBodyUniversityOfDegree(selectedDegree, this.sideMenuPageUserFaculty.passLoggedInUserFaculty()).subscribe(function (response) {
            return _this4.publishedAwardingBodyUniversityOfDegree = response.forEach(function (document) {
              var firestoreDoc = document.payload.doc.data();
              _this4.awardingBodyUniversity = firestoreDoc.awardingBodyUniversity;
              console.log(_this4.awardingBodyUniversity);
            });
          });
        }
        /* Functions of calling serive functions and the values to firestore */
        // Process of adding a new degree program

      }, {
        key: "doAddDegreeProgram",
        value: function doAddDegreeProgram(value) {
          // Adding values to the firestore database
          this.settingsService.addNewDegreeProgram(value, this.sideMenuPageUserFaculty.passLoggedInUserFaculty());
          this.alertNotice("Degree Program Added", "New degree program has been added.");
          this.addDegreeProgramForm.reset();

          if (this.addDegreeProgramButton == false) {
            this.addDegreeProgramForm.reset();
            this.addDegreeProgramButton = true;
            this.closeDegreeProgramFormButton = false;
            this.addDegreeProgramFormSection = false;
          }
        } // Process of adding a new batch

      }, {
        key: "doAddBatch",
        value: function doAddBatch(value) {
          // Adding values to the firestore database
          this.settingsService.addNewBatch(value, this.awardingBodyUniversity, this.sideMenuPageUserFaculty.passLoggedInUserFaculty());
          this.alertNotice("Batch Added", "New batch has been added.");
          this.addBatchForm.reset();

          if (this.addBatchButton == false) {
            this.addBatchForm.reset();
            this.addBatchButton = true;
            this.closeBatchFormButton = false;
            this.addBatchFormSection = false;
          }
        } // Process of adding a new credit weighting

      }, {
        key: "doAddCreditWeighting",
        value: function doAddCreditWeighting(value) {
          // Adding values to the firestore database
          this.settingsService.addNewCreditWeighting(value);
          this.alertNotice("Credit Weighting Added", "New credit weighting has been added.");
          this.addCreditWeightingForm.reset();

          if (this.addCreditWeightingButton == false) {
            this.addCreditWeightingForm.reset();
            this.addCreditWeightingButton = true;
            this.closeCreditWeightingFormButton = false;
            this.addCreditWeightingFormSection = false;
          }
        } // Process of adding a new lecture hall

      }, {
        key: "doAddLectureHall",
        value: function doAddLectureHall(value) {
          // Adding values to the firestore database
          this.settingsService.addNewLectureHall(value, this.sideMenuPageUserFaculty.passLoggedInUserFaculty());
          this.alertNotice("Lecture Hall Added", "New lecture hall has been added.");
          this.addLectureHallForm.reset();

          if (this.addLectureHallButton == false) {
            this.addLectureHallForm.reset();
            this.addLectureHallButton = true;
            this.closeLectureHallFormButton = false;
            this.addLectureHallFormSection = false;
          }
        } // Process of adding a new lecture session status

      }, {
        key: "doAddLectureSessionStatus",
        value: function doAddLectureSessionStatus(value) {
          // Adding values to the firestore database
          this.settingsService.addNewLectureSessionStatus(value);
          this.alertNotice("Lecture Session Status Added", "New lecture session status has been added.");
          this.addLectureSessionStatusForm.reset();

          if (this.addLectureSessionStatusButton == false) {
            this.addLectureSessionStatusForm.reset();
            this.addLectureSessionStatusButton = true;
            this.closeLectureSessionStatusFormButton = false;
            this.addLectureSessionStatusFormSection = false;
          }
        } // Process of adding a new user account status

      }, {
        key: "doAddUserAccountStatus",
        value: function doAddUserAccountStatus(value) {
          // Adding values to the firestore database
          this.settingsService.addNewUserAccountStatus(value);
          this.alertNotice("User Account Status Added", "New user account status has been added.");
          this.addUserAccountStatusForm.reset();

          if (this.addUserAccountStatusButton == false) {
            this.addUserAccountStatusForm.reset();
            this.addUserAccountStatusButton = true;
            this.closeUserAccountStatusFormButton = false;
            this.addUserAccountStatusFormSection = false;
          }
        } // Process of adding a notice category

      }, {
        key: "doAddNoticeCategory",
        value: function doAddNoticeCategory(value) {
          // Adding values to the firestore database
          this.settingsService.addNewNoticeCategory(value);
          this.alertNotice("Notice Category Added", "New notice category has been added.");
          this.addNoticeCategoryForm.reset();

          if (this.addNoticeCategoryButton == false) {
            this.addNoticeCategoryForm.reset();
            this.addNoticeCategoryButton = true;
            this.closeNoticeCategoryFormButton = false;
            this.addNoticeCategoryFormSection = false;
          }
        }
        /* Remove confirm boxes and process of removing */
        // Confirm Box Implementation (Process of removing a degree program)

      }, {
        key: "removeDegreeProgram",
        value: function removeDegreeProgram(title, content, value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this5 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.alertController.create({
                      header: title,
                      message: content,
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function handler() {
                          console.log("Alert Box: Remove Degree Program Request Denied");
                        }
                      }, {
                        text: 'Continue',
                        handler: function handler() {
                          console.log("Alert Box: Remove Degree Program Request Accepted");
                          var docId = value.payload.doc.id; // Calling function to remove degree program

                          _this5.settingsService.removeDegreeProgram(docId, _this5.sideMenuPageUserFaculty.passLoggedInUserFaculty());

                          _this5.alertNotice("Removed", "Degree Program has been removed");
                        }
                      }]
                    });

                  case 2:
                    alert = _context7.sent;
                    _context7.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        } // Confirm Box Implementation (Process of removing a batch)

      }, {
        key: "removeBatch",
        value: function removeBatch(title, content, value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this6 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.alertController.create({
                      header: title,
                      message: content,
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function handler() {
                          console.log("Alert Box: Remove Batch Request Denied");
                        }
                      }, {
                        text: 'Continue',
                        handler: function handler() {
                          console.log("Alert Box: Remove Batch Request Accepted");
                          var docId = value.payload.doc.id; // Calling function to remove batch

                          _this6.settingsService.removeBatch(docId, _this6.sideMenuPageUserFaculty.passLoggedInUserFaculty());

                          _this6.alertNotice("Removed", "Batch has been removed");
                        }
                      }]
                    });

                  case 2:
                    alert = _context8.sent;
                    _context8.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        } // Confirm Box Implementation (Process of removing a credit weighting)

      }, {
        key: "removeCreditWeighting",
        value: function removeCreditWeighting(title, content, value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var _this7 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.alertController.create({
                      header: title,
                      message: content,
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function handler() {
                          console.log("Alert Box: Remove Credit Weighting Request Denied");
                        }
                      }, {
                        text: 'Continue',
                        handler: function handler() {
                          console.log("Alert Box: Remove Credit Weighting Request Accepted");
                          var docId = value.payload.doc.id; // Calling function to remove credit weightng

                          _this7.settingsService.removeCreditWeighting(docId);

                          _this7.alertNotice("Removed", "Credit Weighting has been removed");
                        }
                      }]
                    });

                  case 2:
                    alert = _context9.sent;
                    _context9.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        } // Confirm Box Implementation (Process of removing a lecture hall)

      }, {
        key: "removeLectureHall",
        value: function removeLectureHall(title, content, value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var _this8 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.alertController.create({
                      header: title,
                      message: content,
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function handler() {
                          console.log("Alert Box: Remove Lecture Hall Request Denied");
                        }
                      }, {
                        text: 'Continue',
                        handler: function handler() {
                          console.log("Alert Box: Remove Lecture Hall Request Accepted");
                          var docId = value.payload.doc.id; // Calling function to remove lecture hall

                          _this8.settingsService.removeLectureHall(docId, _this8.sideMenuPageUserFaculty.passLoggedInUserFaculty());

                          _this8.alertNotice("Removed", "Lecture hall has been removed");
                        }
                      }]
                    });

                  case 2:
                    alert = _context10.sent;
                    _context10.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        } // Confirm Box Implementation (Process of removing a lecture session status)

      }, {
        key: "removeLectureSessionStatus",
        value: function removeLectureSessionStatus(title, content, value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var _this9 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.alertController.create({
                      header: title,
                      message: content,
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function handler() {
                          console.log("Alert Box: Remove Lecture Session Status Request Denied");
                        }
                      }, {
                        text: 'Continue',
                        handler: function handler() {
                          console.log("Alert Box: Remove Lecture Session Status Request Accepted");
                          var docId = value.payload.doc.id; // Calling function to remove lecture session status

                          _this9.settingsService.removeLectureSessionStatus(docId);

                          _this9.alertNotice("Removed", "Lecture session status has been removed");
                        }
                      }]
                    });

                  case 2:
                    alert = _context11.sent;
                    _context11.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        } // Confirm Box Implementation (Process of removing a user account status)

      }, {
        key: "removeUserAccountStatus",
        value: function removeUserAccountStatus(title, content, value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var _this10 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.alertController.create({
                      header: title,
                      message: content,
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function handler() {
                          console.log("Alert Box: Remove User Account Status Request Denied");
                        }
                      }, {
                        text: 'Continue',
                        handler: function handler() {
                          console.log("Alert Box: Remove User Account Status Request Accepted");
                          var docId = value.payload.doc.id; // Calling function to remove user account status

                          _this10.settingsService.removeUserAccountStatus(docId);

                          _this10.alertNotice("Removed", "User account status has been removed");
                        }
                      }]
                    });

                  case 2:
                    alert = _context12.sent;
                    _context12.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        } // Confirm Box Implementation (Process of removing a notice category)

      }, {
        key: "removeNoticeCategory",
        value: function removeNoticeCategory(title, content, value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var _this11 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return this.alertController.create({
                      header: title,
                      message: content,
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function handler() {
                          console.log("Alert Box: Remove Notice Category Request Denied");
                        }
                      }, {
                        text: 'Continue',
                        handler: function handler() {
                          console.log("Alert Box: Remove Notice Category Request Accepted");
                          var docId = value.payload.doc.id; // Calling function to remove notice category

                          _this11.settingsService.removeNoticeCategory(docId);

                          _this11.alertNotice("Removed", "Notice category has been removed");
                        }
                      }]
                    });

                  case 2:
                    alert = _context13.sent;
                    _context13.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
        /* Opening Edit Modals */
        // Edit degree program modal calling, opening modal

      }, {
        key: "openEditDegreeProgramModal",
        value: function openEditDegreeProgramModal(value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            var editDegreeProgramModal;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    console.log(value);
                    _context14.next = 3;
                    return this.modalController.create({
                      component: _editModals_edit_degree_program_modal_edit_degree_program_modal_page__WEBPACK_IMPORTED_MODULE_9__["EditDegreeProgramModalPage"],
                      // Disabling modal closing from any outside clicks
                      backdropDismiss: false
                    });

                  case 3:
                    editDegreeProgramModal = _context14.sent;
                    editDegreeProgramModal.present();

                  case 5:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        } // Edit batch modal calling, opening modal

      }, {
        key: "openEditBatchModal",
        value: function openEditBatchModal(value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            var editBatchModal;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    console.log(value);
                    _context15.next = 3;
                    return this.modalController.create({
                      component: _editModals_edit_batch_modal_edit_batch_modal_page__WEBPACK_IMPORTED_MODULE_10__["EditBatchModalPage"],
                      // Disabling modal closing from any outside clicks
                      backdropDismiss: false
                    });

                  case 3:
                    editBatchModal = _context15.sent;
                    editBatchModal.present();

                  case 5:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        } // Edit credit weighting modal calling, opening modal

      }, {
        key: "openEditCreditWeightingModal",
        value: function openEditCreditWeightingModal(value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
            var editCreditWeightingModal;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    console.log(value);
                    _context16.next = 3;
                    return this.modalController.create({
                      component: _editModals_edit_credit_weighting_modal_edit_credit_weighting_modal_page__WEBPACK_IMPORTED_MODULE_11__["EditCreditWeightingModalPage"],
                      // Disabling modal closing from any outside clicks
                      backdropDismiss: false
                    });

                  case 3:
                    editCreditWeightingModal = _context16.sent;
                    editCreditWeightingModal.present();

                  case 5:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        } // Edit lecture hall modal calling, opening modal

      }, {
        key: "openEditLectureHallModal",
        value: function openEditLectureHallModal(value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
            var editLectureHallModal;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    console.log(value);
                    _context17.next = 3;
                    return this.modalController.create({
                      component: _editModals_edit_lecture_hall_modal_edit_lecture_hall_modal_page__WEBPACK_IMPORTED_MODULE_12__["EditLectureHallModalPage"],
                      // Disabling modal closing from any outside clicks
                      backdropDismiss: false
                    });

                  case 3:
                    editLectureHallModal = _context17.sent;
                    editLectureHallModal.present();

                  case 5:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        } // Edit lecture session status modal calling, opening modal

      }, {
        key: "openEditLectureSessionStatusModal",
        value: function openEditLectureSessionStatusModal(value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
            var editLectureSessionStatusModal;
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    console.log(value);
                    _context18.next = 3;
                    return this.modalController.create({
                      component: _editModals_edit_lecture_session_status_modal_edit_lecture_session_status_modal_page__WEBPACK_IMPORTED_MODULE_13__["EditLectureSessionStatusModalPage"],
                      // Disabling modal closing from any outside clicks
                      backdropDismiss: false
                    });

                  case 3:
                    editLectureSessionStatusModal = _context18.sent;
                    editLectureSessionStatusModal.present();

                  case 5:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        } // Edit user account status modal calling, opening modal

      }, {
        key: "openEditUserAccountStatusModal",
        value: function openEditUserAccountStatusModal(value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
            var editUserAccountStatusModal;
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    console.log(value);
                    _context19.next = 3;
                    return this.modalController.create({
                      component: _editModals_edit_user_account_status_modal_edit_user_account_status_modal_page__WEBPACK_IMPORTED_MODULE_15__["EditUserAccountStatusModalPage"],
                      // Disabling modal closing from any outside clicks
                      backdropDismiss: false
                    });

                  case 3:
                    editUserAccountStatusModal = _context19.sent;
                    editUserAccountStatusModal.present();

                  case 5:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));
        } // Edit notice category modal calling, opening modal

      }, {
        key: "openEditNoticeCategoryModal",
        value: function openEditNoticeCategoryModal(value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
            var editNoticeCategoryModal;
            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    console.log(value);
                    _context20.next = 3;
                    return this.modalController.create({
                      component: _editModals_edit_notice_category_modal_edit_notice_category_modal_page__WEBPACK_IMPORTED_MODULE_14__["EditNoticeCategoryModalPage"],
                      // Disabling modal closing from any outside clicks
                      backdropDismiss: false
                    });

                  case 3:
                    editNoticeCategoryModal = _context20.sent;
                    editNoticeCategoryModal.present();

                  case 5:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this);
          }));
        }
      }]);

      return SettingsPage;
    }();

    SettingsPage.ctorParameters = function () {
      return [{
        type: _side_menu_side_menu_page__WEBPACK_IMPORTED_MODULE_3__["SideMenuPage"]
      }, {
        type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }];
    };

    SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-settings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./settings.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/office/settings/settings.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./settings.page.scss */
      "./src/app/office/settings/settings.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_side_menu_side_menu_page__WEBPACK_IMPORTED_MODULE_3__["SideMenuPage"], src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])], SettingsPage);
    /***/
  }
}]);
//# sourceMappingURL=settings-settings-module-es5.js.map