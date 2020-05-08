function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["student-attendance-attendance-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student/attendance/attendance.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/attendance/attendance.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentAttendanceAttendancePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\r\n  \r\n\r\n  <div class=\"ion-page\" id=\"main-content\">\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Attendence Report</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content class=\"ion-padding\">\r\n    <ion-card >\r\n      <ion-card-header>\r\n        Attendance Chart\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <canvas #ChartCanvas></canvas>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    </ion-content>\r\n  </div>\r\n</ion-app>";
    /***/
  },

  /***/
  "./src/app/student/attendance/attendance-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/student/attendance/attendance-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: AttendancePageRoutingModule */

  /***/
  function srcAppStudentAttendanceAttendanceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AttendancePageRoutingModule", function () {
      return AttendancePageRoutingModule;
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


    var _attendance_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./attendance.page */
    "./src/app/student/attendance/attendance.page.ts");

    var routes = [{
      path: '',
      component: _attendance_page__WEBPACK_IMPORTED_MODULE_3__["AttendancePage"]
    }];

    var AttendancePageRoutingModule = function AttendancePageRoutingModule() {
      _classCallCheck(this, AttendancePageRoutingModule);
    };

    AttendancePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AttendancePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/student/attendance/attendance.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/student/attendance/attendance.module.ts ***!
    \*********************************************************/

  /*! exports provided: AttendancePageModule */

  /***/
  function srcAppStudentAttendanceAttendanceModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AttendancePageModule", function () {
      return AttendancePageModule;
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


    var _attendance_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./attendance-routing.module */
    "./src/app/student/attendance/attendance-routing.module.ts");
    /* harmony import */


    var _attendance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./attendance.page */
    "./src/app/student/attendance/attendance.page.ts");

    var AttendancePageModule = function AttendancePageModule() {
      _classCallCheck(this, AttendancePageModule);
    };

    AttendancePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _attendance_routing_module__WEBPACK_IMPORTED_MODULE_5__["AttendancePageRoutingModule"]],
      declarations: [_attendance_page__WEBPACK_IMPORTED_MODULE_6__["AttendancePage"]]
    })], AttendancePageModule);
    /***/
  },

  /***/
  "./src/app/student/attendance/attendance.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/student/attendance/attendance.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudentAttendanceAttendancePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvYXR0ZW5kYW5jZS9hdHRlbmRhbmNlLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/student/attendance/attendance.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/student/attendance/attendance.page.ts ***!
    \*******************************************************/

  /*! exports provided: AttendancePage */

  /***/
  function srcAppStudentAttendanceAttendancePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AttendancePage", function () {
      return AttendancePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_fire_firestore___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/firestore/ */
    "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/firebase.service */
    "./src/app/services/firebase.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_6__);

    var AttendancePage = /*#__PURE__*/function () {
      function AttendancePage(router, authService, navCtrl, firebase) {
        _classCallCheck(this, AttendancePage);

        this.router = router;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.firebase = firebase;
        this.chartData = null;
      }

      _createClass(AttendancePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.firebase.collection('Attendance/').valueChanges().subscribe(function (data) {
            if (_this.chartData) {
              _this.updateCharts(data); // console.log(data)

            } else {
              _this.createCharts(data); // console.log(data)

            }
          });
        }
      }, {
        key: "createCharts",
        value: function createCharts(data) {
          var chartData = data; // console.log(chartData + 'TEST')
          // Create the chart

          this.ChartCanvas = new chart_js__WEBPACK_IMPORTED_MODULE_6__["Chart"](this.ChartCanvas.nativeElement, {
            type: 'bar',
            data: {
              labels: ['CS', 'Java', '.Net', 'HCI', 'Web', 'Security'],
              datasets: [{
                label: 'No. of attended sessions',
                data: [8, 6, 4, 5, 2, 3],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                borderWidth: 1
              }]
            },
            options: {
              legend: {
                display: false
              },
              tooltips: {
                callbacks: {
                  label: function label(tooltipItems, data) {
                    return data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + '';
                  }
                }
              },
              scales: {
                xAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }],
                yAxes: [{
                  ticks: {
                    callback: function callback(value, index, values) {
                      return value;
                    },
                    suggestedMin: 0
                  }
                }]
              }
            }
          });
        }
      }, {
        key: "updateCharts",
        value: function updateCharts(data) {
          var chartData = data; // console.log(chartData + 'TEST 2')
          // Update our dataset

          this.ChartCanvas.data.datasets.forEach(function (dataset) {
            dataset.data = [10, 20];
          });
          this.ChartCanvas.update();
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
          this.router.navigate(['Student/Notices']); // console.log('Notices');
        }
      }]);

      return AttendancePage;
    }();

    AttendancePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _angular_fire_firestore___WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('ChartCanvas', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AttendancePage.prototype, "ChartCanvas", void 0);
    AttendancePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-attendance',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./attendance.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student/attendance/attendance.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./attendance.page.scss */
      "./src/app/student/attendance/attendance.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_fire_firestore___WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])], AttendancePage);
    /***/
  }
}]);
//# sourceMappingURL=student-attendance-attendance-module-es5.js.map