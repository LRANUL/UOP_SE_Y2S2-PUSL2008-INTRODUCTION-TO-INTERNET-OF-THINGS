function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lecturer-lecturer-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/lecturer/lecturer.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lecturer/lecturer.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLecturerLecturerPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Hello, {{Name}} \r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"col text-right\">\r\n    <ion-button color=\"primary\" (click)=\"logout()\" align=\"right\" size=\"small\">\r\n      <ion-icon name=\"log-out-outline\"></ion-icon>Logout\r\n    </ion-button>\r\n  </div>\r\n  <ion-item>\r\n    <ion-card>\r\n      <ion-card-title>Schedule</ion-card-title>\r\n      <calendar [eventSource]=\"eventSource\" [calendarMode]=\"calendar.mode\" [currentDate]=\"calendar.currentDate\">\r\n      </calendar>\r\n    </ion-card>\r\n  </ion-item>\r\n  <ion-item>\r\n    <h4>Selected Module: {{Module}}</h4>\r\n</ion-item>\r\n<ion-item>\r\n  Allow Location<ion-toggle checked={{check}} (ionChange)=\"checkevt($event)\"></ion-toggle>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-button color=\"warning\" (click)=\"generateKey()\">Generate and Add Key</ion-button>\r\n    <ion-label aria-placeholder=\"Press the Button to Generate and Add a Key\">:- {{Key}} </ion-label>\r\n  </ion-item>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/lecturer/lecturer-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/lecturer/lecturer-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: LecturerPageRoutingModule */

  /***/
  function srcAppLecturerLecturerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LecturerPageRoutingModule", function () {
      return LecturerPageRoutingModule;
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


    var _lecturer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lecturer.page */
    "./src/app/lecturer/lecturer.page.ts");

    var routes = [{
      path: '',
      component: _lecturer_page__WEBPACK_IMPORTED_MODULE_3__["LecturerPage"]
    }];

    var LecturerPageRoutingModule = function LecturerPageRoutingModule() {
      _classCallCheck(this, LecturerPageRoutingModule);
    };

    LecturerPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LecturerPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/lecturer/lecturer.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/lecturer/lecturer.module.ts ***!
    \*********************************************/

  /*! exports provided: LecturerPageModule */

  /***/
  function srcAppLecturerLecturerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LecturerPageModule", function () {
      return LecturerPageModule;
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


    var _lecturer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./lecturer-routing.module */
    "./src/app/lecturer/lecturer-routing.module.ts");
    /* harmony import */


    var _lecturer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./lecturer.page */
    "./src/app/lecturer/lecturer.page.ts");
    /* harmony import */


    var ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ionic2-calendar */
    "./node_modules/ionic2-calendar/index.js");

    var LecturerPageModule = function LecturerPageModule() {
      _classCallCheck(this, LecturerPageModule);
    };

    LecturerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _lecturer_routing_module__WEBPACK_IMPORTED_MODULE_5__["LecturerPageRoutingModule"], ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__["NgCalendarModule"]],
      declarations: [_lecturer_page__WEBPACK_IMPORTED_MODULE_6__["LecturerPage"]]
    })], LecturerPageModule);
    /***/
  },

  /***/
  "./src/app/lecturer/lecturer.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/lecturer/lecturer.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLecturerLecturerPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlY3R1cmVyL2xlY3R1cmVyLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/lecturer/lecturer.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/lecturer/lecturer.page.ts ***!
    \*******************************************/

  /*! exports provided: LecturerPage */

  /***/
  function srcAppLecturerLecturerPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LecturerPage", function () {
      return LecturerPage;
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


    var _angular_fire_firestore___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore/ */
    "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/firebase.service */
    "./src/app/services/firebase.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var LecturerPage = /*#__PURE__*/function () {
      function LecturerPage(toastController, firestore, firebase, loadingController, navCtrl) {
        _classCallCheck(this, LecturerPage);

        this.toastController = toastController;
        this.firestore = firestore;
        this.firebase = firebase;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.eventSource = [];
        this.calendar = {
          mode: 'month',
          currentDate: new Date()
        };
        this.selectedDate = new Date();
      }

      _createClass(LecturerPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.firestore.collection('/users/userTypes/lecturerUsers').doc(this.firebase.userDetails().uid).set({
            Activity: 'Online'
          }, {
            merge: true
          });
          this.firestore.collection('userActivityMonitoring').add({
            loginDateTime: new Date(),
            userId: this.firebase.userDetails().uid
          });
          var name;
          var faculty;
          this.firestore.collection('/users/userTypes/lecturerUsers').doc(this.firebase.userDetails().uid).ref.get().then(function (doc) {
            if (doc.exists) {
              // console.log(doc.data());
              _this.Name = doc.data().name.prefix + " " + doc.data().name.firstName + " " + doc.data().name.lastName;
              faculty = doc.data().createdDetails.createdFaculty; // console.log(faculty)

              _this.firestore.collection('faculties').doc(faculty).collection('allLectureSessions').snapshotChanges().subscribe(function (keys) {
                _this.eventSource = [];
                keys.forEach(function (key) {
                  var event = key.payload.doc.data();
                  event.id = key.payload.doc.id;
                  event.title = event.moduleTitle + " | At Hall: " + event.lectureHall;
                  event.startTime = event.startDateTime.toDate();
                  event.endTime = event.endDateTime.toDate();
                  _this.Module = event.moduleTitle;

                  _this.eventSource.push(event);
                });
              });
            }
          });
        }
      }, {
        key: "checkevt",
        value: function checkevt($event) {
          this.check = !this.value;
        }
      }, {
        key: "generateKey",
        value: function generateKey() {
          var _this2 = this;

          if (this.check = true) {
            var LocationCheck = true;
          } else {
            var LocationCheck = false;
          }

          var seconds = new Date().getTime();
          var uniquekey = 'xyxyxy'.replace(/[xy]/g, function (c) {
            var randomkey = (seconds + Math.random() * 25) % 25 | 0;
            seconds = Math.floor(seconds / 25);
            return (c == 'x' ? randomkey : randomkey & 0x3 | 0x8).toString(25);
          });
          this.Key = uniquekey.toUpperCase();
          var name;
          var faculty;
          var PrepKey = this.Key = uniquekey.toUpperCase();
          this.firestore.collection('/users/userTypes/lecturerUsers').doc(this.firebase.userDetails().uid).ref.get().then(function (doc) {
            if (doc.exists) {
              // console.log(doc.data());
              _this2.Name = doc.data().name.prefix + " " + doc.data().name.firstName + " " + doc.data().name.lastName;
              faculty = doc.data().createdDetails.createdFaculty; // console.log(faculty)

              _this2.firestore.collection('faculties').doc(faculty).collection('allLectureSessions').snapshotChanges().subscribe(function (keys) {
                _this2.eventSource = [];
                keys.forEach(function (key) {
                  var event = key.payload.doc.data();
                  event.id = key.payload.doc.id;
                  event.title = event.moduleTitle + " | At Hall: " + event.lectureHall;
                  event.startTime = event.startDateTime.toDate();
                  event.endTime = event.endDateTime.toDate();
                  _this2.Module = event.moduleTitle;

                  if (name = event.lecturer) {
                    var selectedDoc = key.payload.doc.id; // console.log(PrepKey + " " + selectedDoc)

                    _this2.firebase.sendKey(faculty, PrepKey, selectedDoc, LocationCheck).then(function (resp) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var toast;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                _context.next = 2;
                                return this.toastController.create({
                                  message: 'Code Added to Module',
                                  duration: 2000
                                });

                              case 2:
                                toast = _context.sent;
                                toast.present();

                              case 4:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    })["catch"](function (error) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                        var toast;
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                _context2.next = 2;
                                return this.toastController.create({
                                  message: 'Error in Network, check back later. Or contact Programs Office',
                                  duration: 2000
                                });

                              case 2:
                                toast = _context2.sent;
                                toast.present();

                              case 4:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));
                    });
                  }
                });
              });
            }
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.firestore.collection('/users/userTypes/lecturerUsers').doc(this.firebase.userDetails().uid).set({
                      Activity: 'Offline'
                    }, {
                      merge: true
                    });
                    this.firebase.logoutUser().then(function (res) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                        var loading, _yield$loading$onDidD, role, data;

                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                _context3.next = 2;
                                return this.loadingController.create({
                                  message: 'Logging out...',
                                  duration: 2000
                                });

                              case 2:
                                loading = _context3.sent;
                                _context3.next = 5;
                                return loading.present();

                              case 5:
                                _context3.next = 7;
                                return loading.onDidDismiss();

                              case 7:
                                _yield$loading$onDidD = _context3.sent;
                                role = _yield$loading$onDidD.role;
                                data = _yield$loading$onDidD.data;
                                // console.log('Loading dismissed!');
                                this.navCtrl.navigateBack("");

                              case 11:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    })["catch"](function (error) {// console.log(error);
                    });

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return LecturerPage;
    }();

    LecturerPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _angular_fire_firestore___WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }];
    };

    LecturerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-lecturer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./lecturer.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/lecturer/lecturer.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./lecturer.page.scss */
      "./src/app/lecturer/lecturer.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _angular_fire_firestore___WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])], LecturerPage);
    /***/
  }
}]);
//# sourceMappingURL=lecturer-lecturer-module-es5.js.map