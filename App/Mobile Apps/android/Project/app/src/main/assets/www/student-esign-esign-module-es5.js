function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["student-esign-esign-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student/esign/esign.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/esign/esign.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentEsignEsignPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\r\n  <div class=\"ion-page\" id=\"main-content\">\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Home</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content class=\"ion-padding\">\r\n      <div name=Sessions>\r\n        <ion-card *ngFor=\"let item of session\">\r\n          <ion-card-title>\r\n            <ion-card-header>Sign Your Attendance Online</ion-card-header>\r\n          </ion-card-title>\r\n          <ion-card-content>\r\n            <ion-input [(ngModel)]=\"SessionCode\" placeholder=\"Enter your Session Code\">Session Code: </ion-input>\r\n            <br>\r\n            <ion-label>Module: {{ item.Module }}</ion-label><br>\r\n            <ion-label>Session: {{ item.Session }}</ion-label><br>\r\n            <ion-label>Date: {{ item.Date }}</ion-label><br>\r\n            <ion-label>Hall: {{ item.Hall }}</ion-label><br>\r\n            <br>\r\n            <ion-label *ngIf=\"location\">Student Location: {{ item.Hall }}<ion-icon name=\"checkmark-done-circle-outline\"\r\n                color=\"success\"></ion-icon>\r\n            </ion-label>\r\n            <ion-label *ngIf=\"!location\">Student Location: outside<ion-icon name=\"close-circle-outline\" color=\"danger\">\r\n              </ion-icon>\r\n            </ion-label>\r\n            <p *ngIf=\"location\">we have detected you are inside the hall</p>\r\n            <p *ngIf=\"!location\">we cannot detect your inside the hall enable location services and try again.</p>\r\n            <ion-button [disabled]=\"item.SessionCode != SessionCode\" (click)=\"addAttendaceToFirebase()\" shape=\"round\"\r\n              color=\"light\" slot=\"end\">Mark Attendance<ion-icon slot=\"icon-only\" name=\"checkmark-done-circle\">\r\n              </ion-icon>\r\n            </ion-button>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </div>\r\n      <div name=\"NoSessions\" *ngIf=\"nosession\" align='center'>\r\n        <ion-card>\r\n          <ion-card-content>\r\n            <h1>No sessions today, check your calendar.</h1>\r\n            <ion-img src=\"/assets/images/internals/nosession.svg\" style=\"height: 200px;\"></ion-img>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </div>\r\n      <div name=\"CompletedSessions\" *ngIf=\"!signed\" align='center'>\r\n        <ion-card>\r\n          <ion-card-content>\r\n            <h1>You have already signed for all your sessions today.</h1>\r\n            <ion-img src=\"/assets/images/internals/done.svg\" style=\"height: 200px;\"></ion-img>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </div>\r\n\r\n    </ion-content>\r\n  </div>\r\n</ion-app>";
    /***/
  },

  /***/
  "./src/app/student/esign/esign-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/student/esign/esign-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: EsignPageRoutingModule */

  /***/
  function srcAppStudentEsignEsignRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EsignPageRoutingModule", function () {
      return EsignPageRoutingModule;
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


    var _esign_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./esign.page */
    "./src/app/student/esign/esign.page.ts");

    var routes = [{
      path: '',
      component: _esign_page__WEBPACK_IMPORTED_MODULE_3__["EsignPage"]
    }];

    var EsignPageRoutingModule = function EsignPageRoutingModule() {
      _classCallCheck(this, EsignPageRoutingModule);
    };

    EsignPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EsignPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/student/esign/esign.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/student/esign/esign.module.ts ***!
    \***********************************************/

  /*! exports provided: EsignPageModule */

  /***/
  function srcAppStudentEsignEsignModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EsignPageModule", function () {
      return EsignPageModule;
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


    var _esign_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./esign-routing.module */
    "./src/app/student/esign/esign-routing.module.ts");
    /* harmony import */


    var _esign_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./esign.page */
    "./src/app/student/esign/esign.page.ts");

    var EsignPageModule = function EsignPageModule() {
      _classCallCheck(this, EsignPageModule);
    };

    EsignPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _esign_routing_module__WEBPACK_IMPORTED_MODULE_5__["EsignPageRoutingModule"]],
      declarations: [_esign_page__WEBPACK_IMPORTED_MODULE_6__["EsignPage"]]
    })], EsignPageModule);
    /***/
  },

  /***/
  "./src/app/student/esign/esign.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/student/esign/esign.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudentEsignEsignPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvZXNpZ24vZXNpZ24ucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/student/esign/esign.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/student/esign/esign.page.ts ***!
    \*********************************************/

  /*! exports provided: EsignPage */

  /***/
  function srcAppStudentEsignEsignPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EsignPage", function () {
      return EsignPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/firebase.service */
    "./src/app/services/firebase.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");
    /* harmony import */


    var _angular_fire_firestore___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/firestore/ */
    "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");

    var EsignPage = /*#__PURE__*/function () {
      function EsignPage(loader, firestore, router, firebase, navCtrl, toastController) {
        _classCallCheck(this, EsignPage);

        this.loader = loader;
        this.firestore = firestore;
        this.router = router;
        this.firebase = firebase;
        this.navCtrl = navCtrl;
        this.toastController = toastController;
      }

      _createClass(EsignPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.firestore.collection('/users/userTypes/studentUsers').doc(this.firebase.userDetails().uid).set({
                      accountActivity: 'Online'
                    }, {
                      merge: true
                    });
                    this.firestore.collection('userActivityMonitoring').add({
                      loginDateTime: new Date(),
                      userId: this.firebase.userDetails().uid
                    });
                    this.fetchdata();

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "fetchdata",
        value: function fetchdata() {
          var _this = this;

          var Batch;
          var Faculty;
          var LectureDate;
          var DegreeCode;
          var ModuleCode;
          var LocationCheck; // Fetch Date to Query

          var checkdate = function checkdate(sp) {
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1;
            var yyyy = today.getFullYear();
            if (dd < 10) dd = 0 + dd;
            if (mm < 10) mm = 0 + mm;
            return yyyy + sp + mm + sp + dd;
          }; // Fetch User Details For Query
          // Load Module Data from Database  


          LectureDate = checkdate('-'); // LectureDate = '2020-3-21';
          // console.log(LectureDate)

          this.firestore.collection('/users/userTypes/studentUsers').doc(this.firebase.userDetails().uid).ref.get().then(function (doc) {
            if (doc.exists) {
              // console.log(doc.data());
              Batch = doc.data().batch.toString();
              Faculty = doc.data().faculty;
              DegreeCode = doc.data().degree + ", " + doc.data().awardingBodyUniversity; // console.log(DegreeCode + Faculty + Batch)

              _this.firebase.fetchSession(Batch, Faculty, LectureDate, DegreeCode).subscribe(function (data) {
                // console.log(doc.data())
                if (!doc.exists) {
                  // console.log('NO SESSION FOR TODAY ')
                  _this.nosession = true;
                } else {
                  _this.nosession = false;
                  _this.check = data.map(function (e) {
                    ModuleCode = e.payload.doc.data()['moduleCode'] + "-" + e.payload.doc.data()['moduleTitle']; // console.log(ModuleCode)

                    _this.firestore.collection('Attendance/History/' + ModuleCode).doc(_this.firebase.userDetails().email).ref.get().then(function (doc) {
                      if (doc.exists) {
                        // console.log(doc.data())
                        // console.log('ALREADY SIGNED')
                        _this.signed = true;
                      } else {
                        _this.signed = false;

                        _this.firebase.fetchSession(Batch, Faculty, LectureDate, DegreeCode).subscribe(function (data) {
                          // console.log(Batch + '' + Faculty + '' + LectureDate)
                          _this.session = data.map(function (e) {
                            ModuleCode = e.payload.doc.data()['moduleCode'] + "-" + e.payload.doc.data()['moduleTitle'];
                            LocationCheck = e.payload.doc.data()['LocationCheck'];
                            return {
                              id: e.payload.doc.id,
                              SessionCode: e.payload.doc.data()['SessionCode'],
                              Module: e.payload.doc.data()['moduleCode'] + " " + e.payload.doc.data()['moduleTitle'],
                              Session: e.payload.doc.data()['Session'],
                              Date: e.payload.doc.data()['startDateTime'].toDate(),
                              Hall: e.payload.doc.data()['lectureHall'],
                              Lecturer: e.payload.doc.data()['lecturer']
                            };
                          }); // console.log(this.session);
                          // console.log(ModuleCode)

                          _this.firestore.collection('/faculties/' + Faculty + '/lectureSessions/undergraduate/' + Batch + '/' + DegreeCode + '/' + LectureDate).doc(ModuleCode).ref.get().then(function (doc) {
                            if (doc.exists) {
                              // console.log(doc.data());
                              _this.CloudCode = doc.data().SessionCode; // console.log(this.CloudCode)
                            } else {// console.log("There is no document!");
                              }
                          })["catch"](function (error) {// console.log("There was an error getting your document:", error);
                          });
                        });
                      }
                    });
                  });
                  navigator.geolocation.getCurrentPosition(function (position) {
                    var pos = {
                      lat: position.coords.latitude,
                      lng: position.coords.longitude
                    };
                    var NSBMPOS = 'lat: 6.8211, lng: 80.0409';

                    if (LocationCheck = true) {
                      if (pos.toString() == NSBMPOS) {
                        this.location = true;
                      } else {// this.location = false;
                      }
                    }

                    if (LocationCheck = false) {
                      this.location = true;
                    }
                  });
                }
              });
            } else {// console.log("There is no document!");
            }
          })["catch"](function (error) {// console.log("There was an error getting your document:", error);
          });
        }
      }, {
        key: "addAttendaceToFirebase",
        value: function addAttendaceToFirebase() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this2 = this;

            var Batch, Faculty, LectureDate, DegreeCode, ModuleCode, checkdate, toast;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!(this.CloudCode == this.SessionCode)) {
                      _context4.next = 7;
                      break;
                    }

                    // Fetch Date to Query
                    checkdate = function checkdate(sp) {
                      var today = new Date();
                      var dd = today.getDate();
                      var mm = today.getMonth() + 1;
                      var yyyy = today.getFullYear();
                      if (dd < 10) dd = 0 + dd;
                      if (mm < 10) mm = 0 + mm;
                      return dd + sp + mm + sp + yyyy;
                    }; // Fetch User Details For Query
                    // Load Module Data from Database  


                    LectureDate = checkdate('-');
                    LectureDate = '2020-4-21';
                    this.firestore.collection('/users/userTypes/studentUsers').doc(this.firebase.userDetails().uid).ref.get().then(function (doc) {
                      if (doc.exists) {
                        // console.log(doc.data());
                        Batch = doc.data().batch.toString();
                        Faculty = doc.data().faculty;
                        DegreeCode = doc.data().degree + ", " + doc.data().awardingBodyUniversity;

                        _this2.firebase.fetchSession(Batch, Faculty, LectureDate, DegreeCode).subscribe(function (data) {
                          // console.log(Batch + '' + Faculty + '' + LectureDate)
                          _this2.session = data.map(function (e) {
                            ModuleCode = e.payload.doc.data()['moduleCode'] + "-" + e.payload.doc.data()['moduleTitle'];
                            return {
                              id: e.payload.doc.id,
                              SessionCode: e.payload.doc.data()['SessionCode'],
                              Module: e.payload.doc.data()['moduleCode'] + " " + e.payload.doc.data()['moduleTitle'],
                              Session: e.payload.doc.data()['Session'],
                              Date: e.payload.doc.data()['startDateTime'].toDate(),
                              Hall: e.payload.doc.data()['lectureHall'],
                              Lecturer: e.payload.doc.data()['lecturer']
                            };
                          }); // SENDING to FIRESTORE

                          console.log(ModuleCode);

                          _this2.firebase.sendAttendance(ModuleCode, _this2.firebase.userDetails().email).then(function (resp) {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                              var toast;
                              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                while (1) {
                                  switch (_context2.prev = _context2.next) {
                                    case 0:
                                      _context2.next = 2;
                                      return this.toastController.create({
                                        message: 'Your Attendance has been accepted',
                                        duration: 2000
                                      });

                                    case 2:
                                      toast = _context2.sent;
                                      toast.present();
                                      this.fetchdata();

                                    case 5:
                                    case "end":
                                      return _context2.stop();
                                  }
                                }
                              }, _callee2, this);
                            }));
                          })["catch"](function (error) {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                              var toast;
                              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                while (1) {
                                  switch (_context3.prev = _context3.next) {
                                    case 0:
                                      _context3.next = 2;
                                      return this.toastController.create({
                                        message: 'Error in Network, check back later.',
                                        duration: 2000
                                      });

                                    case 2:
                                      toast = _context3.sent;
                                      toast.present();

                                    case 4:
                                    case "end":
                                      return _context3.stop();
                                  }
                                }
                              }, _callee3, this);
                            }));
                          });
                        });
                      }
                    });
                    _context4.next = 12;
                    break;

                  case 7:
                    _context4.next = 9;
                    return this.toastController.create({
                      message: 'Session Code is Wrong ! | TRY AGAIN',
                      duration: 2000
                    });

                  case 9:
                    toast = _context4.sent;
                    toast.present();
                    this.Alert = "Session Code is Wrong ! | TRY AGAIN";

                  case 12:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "goSettings",
        value: function goSettings() {
          this.router.navigate(['Student/Settings']); // console.log('settings');
        }
      }, {
        key: "goeSign",
        value: function goeSign() {
          this.router.navigate(['Student/eSign']); // console.log('Home');
        }
      }, {
        key: "goECForm",
        value: function goECForm() {
          this.router.navigate(['Student/EC-Form']); // console.log('EC-Form');
        }
      }, {
        key: "goAttendence",
        value: function goAttendence() {
          this.router.navigate(['Student/Attendence']); // console.log('Attendence');
        }
      }, {
        key: "goNotices",
        value: function goNotices() {
          this.router.navigate(['Student/Notices']); // console.log('settings');
        }
      }]);

      return EsignPage;
    }();

    EsignPage.ctorParameters = function () {
      return [{
        type: _agm_core__WEBPACK_IMPORTED_MODULE_5__["MapsAPILoader"]
      }, {
        type: _angular_fire_firestore___WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    EsignPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-esign',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./esign.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student/esign/esign.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./esign.page.scss */
      "./src/app/student/esign/esign.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_agm_core__WEBPACK_IMPORTED_MODULE_5__["MapsAPILoader"], _angular_fire_firestore___WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])], EsignPage);
    /***/
  }
}]);
//# sourceMappingURL=student-esign-esign-module-es5.js.map