function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", "stencil-ion-action-sheet-ios-entry-js"],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", "stencil-ion-action-sheet-md-entry-js"],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", "stencil-ion-alert-ios-entry-js"],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", "stencil-ion-alert-md-entry-js"],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", "stencil-ion-app_8-ios-entry-js"],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", "stencil-ion-app_8-md-entry-js"],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", "stencil-ion-avatar_3-ios-entry-js"],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", "stencil-ion-avatar_3-md-entry-js"],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", "stencil-ion-back-button-ios-entry-js"],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", "stencil-ion-back-button-md-entry-js"],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", "stencil-ion-backdrop-ios-entry-js"],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", "stencil-ion-backdrop-md-entry-js"],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", "stencil-ion-button_2-ios-entry-js"],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", "stencil-ion-button_2-md-entry-js"],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", "stencil-ion-card_5-ios-entry-js"],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", "stencil-ion-card_5-md-entry-js"],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", "stencil-ion-checkbox-ios-entry-js"],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", "stencil-ion-checkbox-md-entry-js"],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", "stencil-ion-chip-ios-entry-js"],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", "stencil-ion-chip-md-entry-js"],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", "stencil-ion-col_3-entry-js"],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", "stencil-ion-datetime_3-ios-entry-js"],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", "stencil-ion-datetime_3-md-entry-js"],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", "stencil-ion-fab_3-ios-entry-js"],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", "stencil-ion-fab_3-md-entry-js"],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", "stencil-ion-img-entry-js"],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", "stencil-ion-infinite-scroll_2-ios-entry-js"],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", "stencil-ion-infinite-scroll_2-md-entry-js"],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", "stencil-ion-input-ios-entry-js"],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", "stencil-ion-input-md-entry-js"],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", "stencil-ion-item-option_3-ios-entry-js"],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", "stencil-ion-item-option_3-md-entry-js"],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", "stencil-ion-item_8-ios-entry-js"],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", "stencil-ion-item_8-md-entry-js"],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", "stencil-ion-loading-ios-entry-js"],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", "stencil-ion-loading-md-entry-js"],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", "stencil-ion-menu_3-ios-entry-js"],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", "stencil-ion-menu_3-md-entry-js"],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", "stencil-ion-modal-ios-entry-js"],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", "stencil-ion-modal-md-entry-js"],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", "stencil-ion-nav_2-entry-js"],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", "stencil-ion-popover-ios-entry-js"],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", "stencil-ion-popover-md-entry-js"],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", "stencil-ion-progress-bar-ios-entry-js"],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", "stencil-ion-progress-bar-md-entry-js"],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", "stencil-ion-radio_2-ios-entry-js"],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", "stencil-ion-radio_2-md-entry-js"],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", "stencil-ion-range-ios-entry-js"],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", "stencil-ion-range-md-entry-js"],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", "stencil-ion-refresher_2-ios-entry-js"],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", "stencil-ion-refresher_2-md-entry-js"],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", "stencil-ion-reorder_2-ios-entry-js"],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", "stencil-ion-reorder_2-md-entry-js"],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", "stencil-ion-ripple-effect-entry-js"],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", "stencil-ion-route_4-entry-js"],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", "stencil-ion-searchbar-ios-entry-js"],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", "stencil-ion-searchbar-md-entry-js"],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", "stencil-ion-segment_2-ios-entry-js"],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", "stencil-ion-segment_2-md-entry-js"],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", "stencil-ion-select_3-ios-entry-js"],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", "stencil-ion-select_3-md-entry-js"],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", "stencil-ion-slide_2-ios-entry-js"],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", "stencil-ion-slide_2-md-entry-js"],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", "stencil-ion-spinner-entry-js"],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", "stencil-ion-split-pane-ios-entry-js"],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", "stencil-ion-split-pane-md-entry-js"],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", "stencil-ion-tab-bar_2-ios-entry-js"],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", "stencil-ion-tab-bar_2-md-entry-js"],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", "stencil-ion-tab_2-entry-js"],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", "stencil-ion-text-entry-js"],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", "stencil-ion-textarea-ios-entry-js"],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", "stencil-ion-textarea-md-entry-js"],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", "stencil-ion-toast-ios-entry-js"],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", "stencil-ion-toast-md-entry-js"],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", "stencil-ion-toggle-ios-entry-js"],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", "stencil-ion-toggle-md-entry-js"],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", "stencil-ion-virtual-scroll-entry-js"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/office/commonModals/degree-programs-modal/degree-programs-modal.page.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/commonModals/degree-programs-modal/degree-programs-modal.page.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOfficeCommonModalsDegreeProgramsModalDegreeProgramsModalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Select Degree Program</ion-title>\r\n    <ion-button (click)=\"closeDegreeProgram()\" slot=\"end\" shape=\"round\" fill=\"outline\" color=\"danger\" style=\"margin-right: 20px;\">\r\n      <ion-icon name=\"close-outline\" style=\"font-size: 30px;\"></ion-icon>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-card>\r\n\r\n    <ion-card-content>\r\n\r\n      <ion-list>\r\n        <ion-radio-group (ionChange)=\"loadFormContent($event)\">\r\n          <ion-item *ngFor=\"let item of publishedDegreePrograms\">\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col size=\"1\">\r\n                  <ion-radio value=\"{{ item.payload.doc.data().degree }}\"></ion-radio>\r\n                </ion-col>\r\n                <ion-col size=\"11\">\r\n                  <ion-row>\r\n                    <ion-label>{{ item.payload.doc.data().degree }}, </ion-label>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-label>{{ item.payload.doc.data().awardingBodyUniversity }}</ion-label>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n      </ion-list>\r\n\r\n    </ion-card-content>\r\n\r\n  </ion-card>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/office/lecturers/more-details-lecturer-popover/more-details-lecturer-popover.page.html":
  /*!**********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/lecturers/more-details-lecturer-popover/more-details-lecturer-popover.page.html ***!
    \**********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOfficeLecturersMoreDetailsLecturerPopoverMoreDetailsLecturerPopoverPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>moreDetailsLecturerPopover</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/office/modules/edit-module-modal/edit-module-modal.page.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/modules/edit-module-modal/edit-module-modal.page.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOfficeModulesEditModuleModalEditModuleModalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Edit Details of Module</ion-title>\r\n    <ion-button (click)=\"closeEditModule()\" slot=\"end\" shape=\"round\" fill=\"outline\" color=\"danger\" style=\"margin-right: 20px;\">\r\n      <ion-icon name=\"close-outline\" style=\"font-size: 30px;\"></ion-icon>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n\r\n      <form [formGroup]=\"editModuleDetailsForm\" (ngSubmit)=\"doEditModuleDetails(editModuleDetailsForm.value)\">\r\n        <ion-grid>\r\n\r\n          <ion-row>\r\n            <ion-col size=\"5\">\r\n              <ion-label class=\"editModuleFormLabel\">\r\n                Module Code\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"7\">\r\n              <ion-item>\r\n                <ion-input placeholder=\"Code\" type=\"text\" clearInput value=\"{{ passedModuleCode }}\" formControlName=\"moduleCode\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"5\">\r\n              <ion-label class=\"editModuleFormLabel\">\r\n                Module Title\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"7\">\r\n              <ion-item>\r\n                <ion-input placeholder=\"Title\" type=\"text\" clearInput value=\"{{ passedModuleTitle }}\" formControlName=\"moduleTitle\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"5\">\r\n              <ion-label class=\"editModuleFormLabel\">\r\n                Credits Weighting\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"7\">\r\n              <ion-item>\r\n                <ion-label>\r\n                  Credits Weighting\r\n                </ion-label>\r\n                <ion-select placeholder=\"Credits\" style=\"min-width: 100%;\" value=\"{{ passedModuleCreditsWeighting }}\" formControlName=\"creditsWeighting\">\r\n                  <ion-select-option *ngFor=\"let item of publishedCreditsWeighting\" value=\"{{ item.payload.doc.data().creditsWeighting }}\">\r\n                    {{ item.payload.doc.data().creditsWeighting }} credits\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"5\">\r\n              <ion-label class=\"editModuleFormLabel\">\r\n                Degree Program\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"7\">\r\n              <ion-item>\r\n                <ion-label>\r\n                  Degree Program\r\n                </ion-label>\r\n                <ion-select placeholder=\"Degree\" style=\"min-width: 100%;\" value=\"{{ passedModuleDegree }}\" formControlName=\"degreeProgram\">\r\n                  <ion-select-option value=\"{{ publishedDegreeProgramDegree }}\">{{ publishedDegreeProgramDegree }}, {{ publishedDegreeProgramAwardingBodyUniversity }}</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"5\">\r\n              <ion-label class=\"editModuleFormLabel\" style=\"top: 15px;\">\r\n                Academic Year\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"7\">\r\n              \r\n              <div style=\"border: #ccc solid 1px;\r\n                          border-radius: 5px;\">\r\n\r\n                <ion-row>\r\n                  <ion-select placeholder=\"Year\" style=\"min-width: 95%;\" value=\"{{ passedModuleAcademicPeriodYear }}\" formControlName=\"academicPeriodYear\">\r\n                    <ion-select-option *ngFor=\"let item of convertToArray(publishedDegreeProgramNoOfYears); let i = index\" value=\"{{ i + 1 }}\">Year {{ i + 1 }}</ion-select-option>\r\n                  </ion-select>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-select placeholder=\"Semester\" style=\"min-width: 95%;\" value=\"{{ passedModuleAcademicPeriodSemester }}\" formControlName=\"academicPeriodSemester\">\r\n                    <ion-select-option *ngFor=\"let item of convertToArray(publishedDegreeProgramNoOfSemestersAnnaully); let i = index\" value=\"{{ i + 1 }}\">Semester {{ i + 1 }}</ion-select-option>\r\n                  </ion-select>\r\n                </ion-row>\r\n\r\n              </div>\r\n\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"5\">\r\n              <ion-label class=\"editModuleFormLabel\" style=\"top: 15px;\">\r\n                Module Leader\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"7\">\r\n              <ion-item>\r\n                <ion-label>\r\n                  Moduler Leader\r\n                </ion-label>\r\n                <ion-select placeholder=\"Leader\" style=\"min-width: 100%;\" value=\"{{ passedModuleModuleLeader }}\" formControlName=\"moduleLeader\">\r\n                  <ion-select-option *ngFor=\"let item of registeredLecturers\" \r\n                    value=\"{{ item.payload.doc.data().name.prefix }} {{ item.payload.doc.data().name.firstName }} {{ item.payload.doc.data().name.lastName }}\">\r\n                    {{ item.payload.doc.data().name.prefix }} {{ item.payload.doc.data().name.firstName }} {{ item.payload.doc.data().name.lastName }}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"5\">\r\n              <ion-label class=\"editModuleFormLabel\" style=\"top: 15px;\">\r\n                Assigned Lecturer\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"7\">\r\n              <ion-item>\r\n                <ion-label>\r\n                  Assigned Lecturer\r\n                </ion-label>\r\n                <ion-select placeholder=\"Lecturer\" style=\"min-width: 100%;\" value=\"{{ passedModuleAssignedLecturer }}\" formControlName=\"assignedLecturer\">\r\n                  <ion-select-option *ngFor=\"let item of registeredLecturers\" \r\n                    value=\"{{ item.payload.doc.data().name.prefix }} {{ item.payload.doc.data().name.firstName }} {{ item.payload.doc.data().name.lastName }}\">\r\n                    {{ item.payload.doc.data().name.prefix }} {{ item.payload.doc.data().name.firstName }} {{ item.payload.doc.data().name.lastName }}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"5\">\r\n              <ion-label class=\"editModuleFormLabel\" style=\"top: 15px;\">\r\n                Assigned Lecture Hall\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"7\">\r\n              <ion-item>\r\n                <ion-label>\r\n                  Assigned Lecture Hall\r\n                </ion-label>\r\n                <ion-select placeholder=\"Lecture Hall\" style=\"min-width: 100%;\" value=\"{{ passedModuleAssignedLectureHall }}\" formControlName=\"assignedLectureHall\">\r\n                  <ion-select-option *ngFor=\"let item of publishedLectureHalls\" value=\"{{ item.payload.doc.id }}\">{{ item.payload.doc.id }}</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row style=\"margin-top: 20px;\">\r\n            <ion-col>\r\n              <ion-button expand=\"block\" type=\"submit\" [disabled]=\"!editModuleDetailsForm.valid\">\r\n                Update\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n      \r\n        </ion-grid>\r\n      </form>\r\n\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/office/modules/more-details-module-popover/more-details-module-popover.page.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/modules/more-details-module-popover/more-details-module-popover.page.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOfficeModulesMoreDetailsModulePopoverMoreDetailsModulePopoverPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-list>\r\n  <ion-item>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button (click)=\"closeMoreDetailsModulePopover()\" color=\"danger\">\r\n            <ion-icon name=\"close-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label style=\"font-size: 20px;\">\r\n            <b>More Details</b>\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label>\r\n            <b>Assigned Lecturer</b>\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label>\r\n            {{ passedAssignedLecturer }}\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label>\r\n            <b>Assigned Lecture Hall</b>  \r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label>\r\n            {{ passedAssignedLectureHall }}\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-item>\r\n</ion-list>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/office/notifications-popover/notifications-popover.page.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/notifications-popover/notifications-popover.page.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOfficeNotificationsPopoverNotificationsPopoverPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-list style=\"min-width: 200px;\">\r\n  <ion-item>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label>\r\n            <b>Account: </b>\r\n          </ion-label>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-label *ngFor=\"let item of registeredProgramOfficeUser\">\r\n            {{ item.payload.doc.data().name.prefix }} \r\n            {{ item.payload.doc.data().name.firstName }} \r\n            {{ item.payload.doc.data().name.lastName }} \r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label style=\"font-size: 18px;\">\r\n            <b>Notifications: </b>\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-item>\r\n</ion-list>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/office/semester-calendar/edit-lecture-series-modal/edit-lecture-series-modal.page.html":
  /*!**********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/semester-calendar/edit-lecture-series-modal/edit-lecture-series-modal.page.html ***!
    \**********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOfficeSemesterCalendarEditLectureSeriesModalEditLectureSeriesModalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Edit Details of Lecture Series</ion-title>\r\n    <ion-button (click)=\"closeEditLectureSeriesModal()\" slot=\"end\" shape=\"round\" fill=\"outline\" color=\"danger\" style=\"margin-right: 20px;\">\r\n      <ion-icon name=\"close-outline\" style=\"font-size: 30px;\"></ion-icon>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <form [formGroup]=\"editLectureSeriesForm\" (ngSubmit)=\"doEditLectureSeries(editLectureSeriesForm.value)\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"5\">\r\n          <ion-label class=\"editLectureSeriesFormLabel\">\r\n            No of Lectures:\r\n          </ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"7\">\r\n          <ion-item>\r\n            <ion-input type=\"number\" placeholder=\"Enter No of Lectures\" inputClear value=\"{{ passedLectureSeriesNoOfLectures }}\" formControlName=\"noOfLectures\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"5\">\r\n          <ion-label class=\"editLectureSeriesFormLabel\">\r\n            Enrollment Key\r\n          </ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"7\">\r\n          <ion-item>\r\n            <ion-input type=\"text\" placeholder=\"Enter Key\" inputClear value=\"{{ passedLectureSeriesEnrollmentKey }}\" formControlName=\"enrollmentKey\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button expand=\"block\" type=\"submit\" [disabled]=\"!editLectureSeriesForm.valid\">\r\n            UPDATE\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/office/semester-calendar/edit-lecture-session-modal/edit-lecture-session-modal.page.html":
  /*!************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/semester-calendar/edit-lecture-session-modal/edit-lecture-session-modal.page.html ***!
    \************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOfficeSemesterCalendarEditLectureSessionModalEditLectureSessionModalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Edit Details of Lecture Session</ion-title>\r\n    <ion-button (click)=\"closeEditLectureSessionModal()\" slot=\"end\" shape=\"round\" fill=\"outline\" color=\"danger\" style=\"margin-right: 20px;\">\r\n      <ion-icon name=\"close-outline\" style=\"font-size: 30px;\"></ion-icon>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n\r\n      <ion-grid>\r\n\r\n        <form [formGroup]=\"editLectureSessionForm\" (ngSubmit)=\"doEditLectureSession(editLectureSessionForm.value)\">\r\n\r\n          <div style=\"border: #ccc solid 1px;\r\n                      padding: 10px;\r\n                      border-radius: 5px;\">\r\n            <ion-row>\r\n              <ion-col>\r\n                <ion-label style=\"position: absolute;\r\n                                  top: -20px;\r\n                                  background-color: white;\r\n                                  width: 170px;\r\n                                  text-align: center;\r\n                                  font-size: 15px;\">\r\n                  <b>Semester Information</b>\r\n                </ion-label>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <ion-label class=\"editLectureSessionFormLabel\">\r\n                  Batch\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"7\">\r\n                <ion-item>\r\n                  <ion-label>\r\n                    Batch\r\n                  </ion-label>\r\n                  <ion-select placeholder=\"Batch\" style=\"min-width: 100%;\" value=\"{{ passedLectureSessionBatch }}\" formControlName=\"batch\">\r\n                    <ion-select-option *ngFor=\"let item of publishedBatches\" value=\"{{ item.payload.doc.id }}\">{{ item.payload.doc.id }}</ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <ion-label class=\"editLectureSessionFormLabel\">\r\n                  Degree Program\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"7\">\r\n                <ion-item>\r\n                  <ion-label>\r\n                    Degree Program\r\n                  </ion-label>\r\n                  <ion-select placeholder=\"Degree Program\" style=\"min-width: 100%;\" value=\"{{ passedLectureSessionDegreeProgram }}\" formControlName=\"degreeProgram\">\r\n                    <ion-select-option value=\"{{ publishedDegreeProgramDegree }}\">{{ publishedDegreeProgramDegree }}, {{ publishedDegreeProgramAwardingBodyUniversity }}</ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <ion-label class=\"editLectureSessionFormLabel\">\r\n                  Academic Year\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"7\">\r\n                \r\n                <div style=\"border: #ccc solid 1px;\r\n                            border-radius: 5px;\">\r\n\r\n                  <ion-row>\r\n                    <ion-select placeholder=\"Year\" style=\"min-width: 95%;\" value=\"{{ passedLectureSessionAcademicYear }}\" formControlName=\"academicYear\">\r\n                      <ion-select-option *ngFor=\"let item of convertToArray(publishedDegreeProgramNoOfYears); let i = index\" value=\"{{ i + 1 }}\">Year {{ i + 1 }}</ion-select-option>\r\n                    </ion-select>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-select placeholder=\"Semester\" style=\"min-width: 95%;\" value=\"{{ passedLectureSessionAcademicSemester }}\" formControlName=\"academicSemester\">\r\n                      <ion-select-option *ngFor=\"let item of convertToArray(publishedDegreeProgramNoOfSemestersAnnaully); let i = index\" value=\"{{ i + 1 }}\">Semester {{ i + 1 }}</ion-select-option>\r\n                    </ion-select>\r\n                  </ion-row>\r\n\r\n                </div>\r\n\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n\r\n          <div style=\"border: #ccc solid 1px;\r\n                      padding: 10px;\r\n                      border-radius: 5px;\r\n                      margin-top: 20px;\">\r\n            <ion-row>\r\n              <ion-col>\r\n                <ion-label style=\"position: absolute;\r\n                                  top: -20px;\r\n                                  background-color: white;\r\n                                  width: 160px;\r\n                                  text-align: center;\r\n                                  font-size: 15px;\">\r\n                  <b>Lecture Information</b>\r\n                </ion-label>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <ion-label class=\"editLectureSessionFormLabel\">\r\n                  Module\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"7\">\r\n                <ion-item>\r\n                  <ion-label>\r\n                    Module\r\n                  </ion-label>\r\n                  <ion-select placeholder=\"Module\" style=\"min-width: 100%;\" value=\"{{ passedLectureSesionModuleCode }} {{ passedLectureSessionModuleTitle }}\" formControlName=\"module\">\r\n                    <ion-select-option value=\"{{ publishedModuleTitle }}\">{{ publishedModuleCode }} - {{ publishedModuleTitle }}</ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <ion-label class=\"editLectureSessionFormLabel\">\r\n                  Lecturer\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"7\">\r\n                <ion-item>\r\n                  <ion-label>\r\n                    Lecturer\r\n                  </ion-label>\r\n                  <ion-select placeholder=\"Lecturer\" style=\"min-width: 100%;\" value=\"{{ passedLectureSessionLecturer }}\" formControlName=\"lecturer\">\r\n                    <ion-select-option *ngFor=\"let item of registeredLecturers\" value=\"{{ item.payload.doc.id }}\">{{ item.payload.doc.data().r }}</ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <ion-label class=\"editLectureSessionFormLabel\">\r\n                  Lecture Hall\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"7\">\r\n                <ion-item>\r\n                  <ion-label>\r\n                    Lecture Hall\r\n                  </ion-label>\r\n                  <ion-select placeholder=\"Lecture Hall\" style=\"min-width: 100%;\" value=\"{{ passedLectureSessionLectureHall }}\" formControlName=\"lectureHall\">\r\n                    <ion-select-option *ngFor=\"let item of publishedLectureHalls\" value=\"{{ item.payload.doc.id }}\">{{ item.payload.doc.id }}</ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <ion-label class=\"editLectureSessionFormLabel\">\r\n                  Lecture Status\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"7\">\r\n                <ion-item>\r\n                  <ion-label>\r\n                    Lecture Status\r\n                  </ion-label>\r\n                  <ion-select placeholder=\"Status\" style=\"min-width: 100%;\" value=\"{{ passedLectureSessionStatus }}\" formControlName=\"lectureStatus\">\r\n                    <ion-select-option *ngFor=\"let item of publishedLectureSessionStatuses\" value=\"{{ item.payload.doc.id }}\">{{ item.payload.doc.id }}</ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <ion-label class=\"editLectureSessionFormLabel\">\r\n                  Session Date\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"7\">\r\n                <ion-item>\r\n                  <ion-datetime value=\"{{ lectureSessionStartDateTime }}\" formControlName=\"sessionDate\"></ion-datetime>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <ion-label class=\"editLectureSessionFormLabel\">\r\n                  Session Start Time\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"7\">\r\n                <ion-item>\r\n                  <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\" value=\"{{ lectureSessionStartDateTime }}\" formControlName=\"sessionStartTime\"></ion-datetime>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <ion-label class=\"editLectureSessionFormLabel\">\r\n                  Session End Time\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"7\">\r\n                <ion-item>\r\n                  <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\" value=\"{{ lectureSessionEndTime }}\" formControlName=\"sessionEndTime\"></ion-datetime>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n\r\n          <ion-row style=\"margin-top: 20px;\r\n                          margin-bottom: 10px;\">\r\n            <ion-col>\r\n\r\n              <ion-button expand=\"block\" type=\"submit\" [disabled]=\"!editLectureSessionForm.valid\">\r\n                UPDATE\r\n              </ion-button>\r\n\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n        </form>\r\n\r\n      </ion-grid>\r\n\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  \r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/office/semester-calendar/more-details-session-popover/more-details-session-popover.page.html":
  /*!****************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/semester-calendar/more-details-session-popover/more-details-session-popover.page.html ***!
    \****************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOfficeSemesterCalendarMoreDetailsSessionPopoverMoreDetailsSessionPopoverPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-list style=\"min-width: 200px;\">\r\n  <ion-item>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button (click)=\"closeMoreDetailsSessionPopover()\" color=\"danger\">\r\n            <ion-icon name=\"close-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label style=\"font-size: 20px;\">\r\n            <b>More Details</b>\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label>\r\n            <b>Batch</b>\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label>\r\n            {{ passedBatch }}\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label>\r\n            <b>Degree Program</b>\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label>\r\n            {{ passedDegreeCode }},\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label>\r\n            {{ passedDegree }},\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label>\r\n            {{ passedAwardingBodyUniversity }}\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label>\r\n            <b>Academic Period</b>\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label>\r\n            Year {{ passedAcademicPeriodYear }}\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label>\r\n            Semester {{ passedAcademicPeriodSemester }}\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label>\r\n            <b>Lecturer</b>\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label>\r\n            {{ passedLecturer }}\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label>\r\n            <b>Lecture Hall</b>  \r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label>\r\n            {{ passedLectureHall }}\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-item>\r\n</ion-list>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/office/settings/editModals/edit-batch-modal/edit-batch-modal.page.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/settings/editModals/edit-batch-modal/edit-batch-modal.page.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOfficeSettingsEditModalsEditBatchModalEditBatchModalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Edit Batch Details</ion-title>\r\n    <ion-button (click)=\"closeEditBatchModal()\" slot=\"end\" shape=\"round\" fill=\"outline\" color=\"danger\" style=\"margin-right: 20px;\">\r\n      <ion-icon name=\"close-outline\" style=\"font-size: 30px;\"></ion-icon>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/office/settings/editModals/edit-credit-weighting-modal/edit-credit-weighting-modal.page.html":
  /*!****************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/settings/editModals/edit-credit-weighting-modal/edit-credit-weighting-modal.page.html ***!
    \****************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOfficeSettingsEditModalsEditCreditWeightingModalEditCreditWeightingModalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Edit Credit Weighting Details</ion-title>\r\n    <ion-button (click)=\"closeEditCreditWeightingModal()\" slot=\"end\" shape=\"round\" fill=\"outline\" color=\"danger\" style=\"margin-right: 20px;\">\r\n      <ion-icon name=\"close-outline\" style=\"font-size: 30px;\"></ion-icon>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/office/settings/editModals/edit-degree-program-modal/edit-degree-program-modal.page.html":
  /*!************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/settings/editModals/edit-degree-program-modal/edit-degree-program-modal.page.html ***!
    \************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOfficeSettingsEditModalsEditDegreeProgramModalEditDegreeProgramModalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Edit Degree Program Details</ion-title>\r\n    <ion-button (click)=\"closeEditDegreeProgramModal()\" slot=\"end\" shape=\"round\" fill=\"outline\" color=\"danger\" style=\"margin-right: 20px;\">\r\n      <ion-icon name=\"close-outline\" style=\"font-size: 30px;\"></ion-icon>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/office/settings/editModals/edit-lecture-hall-modal/edit-lecture-hall-modal.page.html":
  /*!********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/settings/editModals/edit-lecture-hall-modal/edit-lecture-hall-modal.page.html ***!
    \********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOfficeSettingsEditModalsEditLectureHallModalEditLectureHallModalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Edit Lecture Hall Details</ion-title>\r\n    <ion-button (click)=\"closeEditLectureHallModal()\" slot=\"end\" shape=\"round\" fill=\"outline\" color=\"danger\" style=\"margin-right: 20px;\">\r\n      <ion-icon name=\"close-outline\" style=\"font-size: 30px;\"></ion-icon>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/office/settings/editModals/edit-lecture-session-status-modal/edit-lecture-session-status-modal.page.html":
  /*!****************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/settings/editModals/edit-lecture-session-status-modal/edit-lecture-session-status-modal.page.html ***!
    \****************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOfficeSettingsEditModalsEditLectureSessionStatusModalEditLectureSessionStatusModalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Edit Lecture Session Status Details</ion-title>\r\n    <ion-button (click)=\"closeEditLectureSessionStatusModal()\" slot=\"end\" shape=\"round\" fill=\"outline\" color=\"danger\" style=\"margin-right: 20px;\">\r\n      <ion-icon name=\"close-outline\" style=\"font-size: 30px;\"></ion-icon>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/office/settings/editModals/edit-notice-category-modal/edit-notice-category-modal.page.html":
  /*!**************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/settings/editModals/edit-notice-category-modal/edit-notice-category-modal.page.html ***!
    \**************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOfficeSettingsEditModalsEditNoticeCategoryModalEditNoticeCategoryModalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Edit Notice Category Details</ion-title>\r\n    <ion-button (click)=\"closeEditNoticeCategory()\" slot=\"end\" shape=\"round\" fill=\"outline\" color=\"danger\" style=\"margin-right: 20px;\">\r\n      <ion-icon name=\"close-outline\" style=\"font-size: 30px;\"></ion-icon>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/office/settings/editModals/edit-user-account-status-modal/edit-user-account-status-modal.page.html":
  /*!**********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/settings/editModals/edit-user-account-status-modal/edit-user-account-status-modal.page.html ***!
    \**********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOfficeSettingsEditModalsEditUserAccountStatusModalEditUserAccountStatusModalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Edit User Account Status Details</ion-title>\r\n    <ion-button (click)=\"closeEditUserAccountStatus()\" slot=\"end\" shape=\"round\" fill=\"outline\" color=\"danger\" style=\"margin-right: 20px;\">\r\n      <ion-icon name=\"close-outline\" style=\"font-size: 30px;\"></ion-icon>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/office/settings/more-information-popover/more-information-popover.page.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/settings/more-information-popover/more-information-popover.page.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOfficeSettingsMoreInformationPopoverMoreInformationPopoverPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-list style=\"width: 360px;\">\r\n  <ion-item>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label style=\"font-size: 17px;\">\r\n            <b>Password Guidelines:</b>  \r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label>\r\n            Minimum 10 characters required\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label>\r\n            One uppercase character required\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label>\r\n            One numeric character required\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label>\r\n            One special character required \r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-item>\r\n</ion-list>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/office/settings/update-account-details-modal/update-account-details-modal.page.html":
  /*!*******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/settings/update-account-details-modal/update-account-details-modal.page.html ***!
    \*******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOfficeSettingsUpdateAccountDetailsModalUpdateAccountDetailsModalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Update Account Details</ion-title>\r\n    <ion-button (click)=\"closeEditAccountDetailsModal()\" slot=\"end\" shape=\"round\" fill=\"outline\" color=\"danger\" style=\"margin-right: 20px;\">\r\n      <ion-icon name=\"close-outline\" style=\"font-size: 30px;\"></ion-icon>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n\r\n      <form [formGroup]=\"editAccountDetailsForm\" (ngSubmit)=\"doEditAccountDetails(editAccountDetailsForm.value)\">\r\n        <ion-grid style=\"margin: 20px;\">\r\n          <ion-row>\r\n            <ion-col size=\"4\">\r\n\r\n              <ion-label class=\"editDetailsFormLabel\">\r\n                Name\r\n              </ion-label>\r\n\r\n            </ion-col>\r\n            <ion-col size=\"8\">\r\n\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item style=\"min-width: 100%;\">\r\n                    <ion-select okText=\"Select\" cancelText=\"Cancel\" formControlName=\"prefixName\">\r\n                      <ion-select-option value=\"Mr.\">Mr.</ion-select-option>\r\n                      <ion-select-option value=\"Sir.\">Sir.</ion-select-option>\r\n                      <ion-select-option value=\"Dr.\">Dr.</ion-select-option>\r\n                      <ion-select-option value=\"Mrs.\">Mrs.</ion-select-option>\r\n                      <ion-select-option value=\"Miss.\">Miss</ion-select-option>\r\n                      <ion-select-option value=\"Ms.\">Ms</ion-select-option>\r\n                    </ion-select>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-input type=\"text\" placeholder=\"Enter First Name\" clearInput formControlName=\"firstName\"></ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-input type=\"text\" placeholder=\"Enter Middle Name\" clearInput formControlName=\"middleName\"></ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-input type=\"text\" placeholder=\"Enter Last Name\" clearInput formControlName=\"lastName\"></ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"4\">\r\n\r\n              <ion-label class=\"editDetailsFormLabel\">\r\n                Faculty\r\n              </ion-label>\r\n\r\n            </ion-col>\r\n            <ion-col size=\"8\">\r\n\r\n              <ion-item>\r\n                <ion-select placeholder=\"Select Faculty\" okText=\"Select\" cancelText=\"Cancel\" style=\"max-width: 100% !important;\" formControlName=\"faculty\">\r\n                  <ion-select-option value=\"School of Computing\">School of Computing</ion-select-option>\r\n                  <ion-select-option value=\"School of Business\">School of Business</ion-select-option>\r\n                  <ion-select-option value=\"School of Engineering\">School of Engineering</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row style=\"margin-top: 10px;\">\r\n            <ion-col>\r\n              <ion-button style=\"position: relative;\r\n                                left: 50%;\r\n                                transform: translateX(-50%);\r\n                                width: 120px;\" type=\"submit\" [disabled]=\"!editAccountDetailsForm.valid\">\r\n                UPDATE\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </form>\r\n\r\n      <!-- Loading Spinner -->\r\n      <ion-spinner name=\"dots\" style=\"position: relative;\r\n                                  left: 50%;\r\n                                  transform: translateX(-50%);\r\n                                  height: 100px;\r\n                                  width: 100px;\" *ngIf=\"loadingSpinnerAccountDetails\"></ion-spinner>\r\n\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/office/settings/update-account-password-modal/update-account-password-modal.page.html":
  /*!*********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/settings/update-account-password-modal/update-account-password-modal.page.html ***!
    \*********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOfficeSettingsUpdateAccountPasswordModalUpdateAccountPasswordModalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Update Account Password</ion-title>\r\n    <ion-button (click)=\"closeEditAccountPasswordModal()\" slot=\"end\" shape=\"round\" fill=\"outline\" color=\"danger\" style=\"margin-right: 20px;\">\r\n      <ion-icon name=\"close-outline\" style=\"font-size: 30px;\"></ion-icon>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n\r\n      <form [formGroup]=\"updateAccountPasswordForm\" (ngSubmit)=\"doUpdateAccountPassword(updateAccountPasswordForm.value)\">\r\n        <ion-grid style=\"margin: 20px;\">\r\n          <ion-row>\r\n            <ion-col size=\"4\">\r\n\r\n              <ion-label class=\"editAccountPasswordFormLabel\">\r\n                New Password\r\n              </ion-label>\r\n\r\n            </ion-col>\r\n            <ion-col size=\"8\">\r\n\r\n              <ion-item>\r\n                <ion-input type=\"password\" clearInput formControlName=\"password\"></ion-input>\r\n              </ion-item>\r\n\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"4\">\r\n\r\n              <ion-label class=\"editAccountPasswordFormLabel\" formControlName=\"confirmPassword\">\r\n                Confirm Password\r\n              </ion-label>\r\n\r\n            </ion-col>\r\n            <ion-col size=\"8\">\r\n\r\n              <ion-item>\r\n                <ion-input type=\"password\" clearInput></ion-input>\r\n              </ion-item>\r\n\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row style=\"margin-top: 20px;\">\r\n            <ion-col>\r\n\r\n              <ion-button style=\"width: 150px;\r\n                                position: relative;\r\n                                left: 50%;\r\n                                transform: translateX(-50%);\" [disabled]=\"!updateAccountPasswordForm.valid\">\r\n                UPDATE\r\n              </ion-button>\r\n\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </form>\r\n\r\n      <ion-button size=\"small\" shape=\"round\" color=\"medium\" style=\"height: 50px;\r\n                                                                  width: 50px;\r\n                                                                  font-size: 15px;\r\n                                                                  position: absolute;\r\n                                                                  top: 175px;\r\n                                                                  right: 5%;\" (click)=\"openMoreInformationPopover($event)\">\r\n        <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n      </ion-button>\r\n\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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

    var routes = [{
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }, {
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tabs-tabs-module */
        "tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ./tabs/tabs.module */
        "./src/app/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      }
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | login-login-module */
        [__webpack_require__.e("default~firebase-auth~login-login-module~signup-signup-module~student-ec-form-ec-form-module~student~de9b81cc"), __webpack_require__.e("default~firebase-messaging~login-login-module~signup-signup-module~student-ec-form-ec-form-module~st~88bf8aaa"), __webpack_require__.e("default~login-login-module~signup-signup-module~student-ec-form-ec-form-module~student-settings-sett~8ac94780"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null,
        /*! ./login/login.module */
        "./src/app/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'signup',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | signup-signup-module */
        [__webpack_require__.e("default~firebase-auth~login-login-module~signup-signup-module~student-ec-form-ec-form-module~student~de9b81cc"), __webpack_require__.e("default~firebase-messaging~login-login-module~signup-signup-module~student-ec-form-ec-form-module~st~88bf8aaa"), __webpack_require__.e("default~login-login-module~signup-signup-module~student-ec-form-ec-form-module~student-settings-sett~8ac94780"), __webpack_require__.e("signup-signup-module")]).then(__webpack_require__.bind(null,
        /*! ./signup/signup.module */
        "./src/app/signup/signup.module.ts")).then(function (m) {
          return m.SignupPageModule;
        });
      }
    }, {
      path: 'office',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | office-side-menu-side-menu-module */
        "office-side-menu-side-menu-module").then(__webpack_require__.bind(null,
        /*! ./office/side-menu/side-menu.module */
        "./src/app/office/side-menu/side-menu.module.ts")).then(function (m) {
          return m.SideMenuPageModule;
        });
      }
    }, {
      path: 'student',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | student-esign-esign-module */
        "student-esign-esign-module").then(__webpack_require__.bind(null,
        /*! ./student/esign/esign.module */
        "./src/app/student/esign/esign.module.ts")).then(function (m) {
          return m.EsignPageModule;
        });
      }
    }, {
      path: 'lecturer',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | lecturer-lecturer-module */
        "lecturer-lecturer-module").then(__webpack_require__.bind(null,
        /*! ./lecturer/lecturer.module */
        "./src/app/lecturer/lecturer.module.ts")).then(function (m) {
          return m.LecturerPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, router) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.router = router;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.show();
            /* CURRENTLY UNDER DEVELOPMENT, WILL BE USING STUDENT BATCH OR EMAIL FOR NOTICES*/
            //   this.messaging.getToken().then(token => {
            //     console.log(token);
            //   this.messaging.subscribeToTopic('student');
            // });
            //   this.messaging.onNotification().subscribe(data => {
            //     console.log(data);
            //     if (data.wasTapped) {
            //       console.log('Received in background');
            //       this.router.navigate([NoticesPage, data.notice]);
            //     } else {
            //       console.log('Received in foreground');
            //       this.router.navigate([NoticesPage, data.notice]);
            //     }
            //   });
            //   this.messaging.onTokenRefresh().subscribe(token => {
            //     console.log(token);
            //   });

            /*STUDENT NOT ALLOWED TO MANAGE CLOUD SUBSCRIPTION ! (NOTIFICATIONS CAN BE DISABLED LOCALLY)
            SUSCRIPTION MANAGEMENT FOR PROGRAM OFFICE BELOW
            
            this.messaging.unsubscribeFromTopic('student');
                    */

          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/fesm2015/angular-fire-database.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/fesm2015/angular-fire.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _office_commonModals_degree_programs_modal_degree_programs_modal_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./office/commonModals/degree-programs-modal/degree-programs-modal.module */
    "./src/app/office/commonModals/degree-programs-modal/degree-programs-modal.module.ts");
    /* harmony import */


    var _office_modules_more_details_module_popover_more_details_module_popover_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./office/modules/more-details-module-popover/more-details-module-popover.module */
    "./src/app/office/modules/more-details-module-popover/more-details-module-popover.module.ts");
    /* harmony import */


    var _office_modules_edit_module_modal_edit_module_modal_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./office/modules/edit-module-modal/edit-module-modal.module */
    "./src/app/office/modules/edit-module-modal/edit-module-modal.module.ts");
    /* harmony import */


    var _office_lecturers_more_details_lecturer_popover_more_details_lecturer_popover_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./office/lecturers/more-details-lecturer-popover/more-details-lecturer-popover.module */
    "./src/app/office/lecturers/more-details-lecturer-popover/more-details-lecturer-popover.module.ts");
    /* harmony import */


    var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/fire/messaging */
    "./node_modules/@angular/fire/fesm2015/angular-fire-messaging.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ionic2_calendar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ionic2-calendar */
    "./node_modules/ionic2-calendar/index.js");
    /* harmony import */


    var _office_semester_calendar_edit_lecture_session_modal_edit_lecture_session_modal_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./office/semester-calendar/edit-lecture-session-modal/edit-lecture-session-modal.module */
    "./src/app/office/semester-calendar/edit-lecture-session-modal/edit-lecture-session-modal.module.ts");
    /* harmony import */


    var _office_semester_calendar_more_details_session_popover_more_details_session_popover_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./office/semester-calendar/more-details-session-popover/more-details-session-popover.module */
    "./src/app/office/semester-calendar/more-details-session-popover/more-details-session-popover.module.ts");
    /* harmony import */


    var _office_settings_editModals_edit_lecture_hall_modal_edit_lecture_hall_modal_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./office/settings/editModals/edit-lecture-hall-modal/edit-lecture-hall-modal.module */
    "./src/app/office/settings/editModals/edit-lecture-hall-modal/edit-lecture-hall-modal.module.ts");
    /* harmony import */


    var _office_notifications_popover_notifications_popover_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./office/notifications-popover/notifications-popover.module */
    "./src/app/office/notifications-popover/notifications-popover.module.ts");
    /* harmony import */


    var _office_semester_calendar_edit_lecture_series_modal_edit_lecture_series_modal_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./office/semester-calendar/edit-lecture-series-modal/edit-lecture-series-modal.module */
    "./src/app/office/semester-calendar/edit-lecture-series-modal/edit-lecture-series-modal.module.ts");
    /* harmony import */


    var _office_settings_update_account_password_modal_update_account_password_modal_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./office/settings/update-account-password-modal/update-account-password-modal.module */
    "./src/app/office/settings/update-account-password-modal/update-account-password-modal.module.ts");
    /* harmony import */


    var _office_settings_update_account_details_modal_update_account_details_modal_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./office/settings/update-account-details-modal/update-account-details-modal.module */
    "./src/app/office/settings/update-account-details-modal/update-account-details-modal.module.ts");
    /* harmony import */


    var _office_settings_more_information_popover_more_information_popover_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./office/settings/more-information-popover/more-information-popover.module */
    "./src/app/office/settings/more-information-popover/more-information-popover.module.ts");
    /* harmony import */


    var _office_settings_editModals_edit_user_account_status_modal_edit_user_account_status_modal_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./office/settings/editModals/edit-user-account-status-modal/edit-user-account-status-modal.module */
    "./src/app/office/settings/editModals/edit-user-account-status-modal/edit-user-account-status-modal.module.ts");
    /* harmony import */


    var _office_settings_editModals_edit_batch_modal_edit_batch_modal_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./office/settings/editModals/edit-batch-modal/edit-batch-modal.module */
    "./src/app/office/settings/editModals/edit-batch-modal/edit-batch-modal.module.ts");
    /* harmony import */


    var _office_settings_editModals_edit_credit_weighting_modal_edit_credit_weighting_modal_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./office/settings/editModals/edit-credit-weighting-modal/edit-credit-weighting-modal.module */
    "./src/app/office/settings/editModals/edit-credit-weighting-modal/edit-credit-weighting-modal.module.ts");
    /* harmony import */


    var _office_settings_editModals_edit_degree_program_modal_edit_degree_program_modal_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./office/settings/editModals/edit-degree-program-modal/edit-degree-program-modal.module */
    "./src/app/office/settings/editModals/edit-degree-program-modal/edit-degree-program-modal.module.ts");
    /* harmony import */


    var _office_settings_editModals_edit_lecture_session_status_modal_edit_lecture_session_status_modal_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./office/settings/editModals/edit-lecture-session-status-modal/edit-lecture-session-status-modal.module */
    "./src/app/office/settings/editModals/edit-lecture-session-status-modal/edit-lecture-session-status-modal.module.ts");
    /* harmony import */


    var _office_settings_editModals_edit_notice_category_modal_edit_notice_category_modal_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./office/settings/editModals/edit-notice-category-modal/edit-notice-category-modal.module */
    "./src/app/office/settings/editModals/edit-notice-category-modal/edit-notice-category-modal.module.ts");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"], ionic2_calendar__WEBPACK_IMPORTED_MODULE_21__["NgCalendarModule"], _office_commonModals_degree_programs_modal_degree_programs_modal_module__WEBPACK_IMPORTED_MODULE_15__["DegreeProgramsModalPageModule"], _office_modules_edit_module_modal_edit_module_modal_module__WEBPACK_IMPORTED_MODULE_17__["EditModuleModalPageModule"], _office_modules_more_details_module_popover_more_details_module_popover_module__WEBPACK_IMPORTED_MODULE_16__["MoreDetailsModulePopoverPageModule"], _office_lecturers_more_details_lecturer_popover_more_details_lecturer_popover_module__WEBPACK_IMPORTED_MODULE_18__["MoreDetailsLecturerPopoverPageModule"], _office_semester_calendar_edit_lecture_session_modal_edit_lecture_session_modal_module__WEBPACK_IMPORTED_MODULE_22__["EditLectureSessionModalPageModule"], _office_semester_calendar_more_details_session_popover_more_details_session_popover_module__WEBPACK_IMPORTED_MODULE_23__["MoreDetailsSessionPopoverPageModule"], _office_settings_editModals_edit_lecture_hall_modal_edit_lecture_hall_modal_module__WEBPACK_IMPORTED_MODULE_24__["EditLectureHallModalPageModule"], _office_notifications_popover_notifications_popover_module__WEBPACK_IMPORTED_MODULE_25__["NotificationsPopoverPageModule"], _office_semester_calendar_edit_lecture_series_modal_edit_lecture_series_modal_module__WEBPACK_IMPORTED_MODULE_26__["EditLectureSeriesModalPageModule"], _office_settings_editModals_edit_user_account_status_modal_edit_user_account_status_modal_module__WEBPACK_IMPORTED_MODULE_30__["EditUserAccountStatusModalPageModule"], _office_settings_update_account_password_modal_update_account_password_modal_module__WEBPACK_IMPORTED_MODULE_27__["UpdateAccountPasswordModalPageModule"], _office_settings_update_account_details_modal_update_account_details_modal_module__WEBPACK_IMPORTED_MODULE_28__["UpdateAccountDetailsModalPageModule"], _office_settings_more_information_popover_more_information_popover_module__WEBPACK_IMPORTED_MODULE_29__["MoreInformationPopoverPageModule"], _office_settings_editModals_edit_batch_modal_edit_batch_modal_module__WEBPACK_IMPORTED_MODULE_31__["EditBatchModalPageModule"], _office_settings_editModals_edit_credit_weighting_modal_edit_credit_weighting_modal_module__WEBPACK_IMPORTED_MODULE_32__["EditCreditWeightingModalPageModule"], _office_settings_editModals_edit_degree_program_modal_edit_degree_program_modal_module__WEBPACK_IMPORTED_MODULE_33__["EditDegreeProgramModalPageModule"], _office_settings_editModals_edit_lecture_session_status_modal_edit_lecture_session_status_modal_module__WEBPACK_IMPORTED_MODULE_34__["EditLectureSessionStatusModalPageModule"], _office_settings_editModals_edit_notice_category_modal_edit_notice_category_modal_module__WEBPACK_IMPORTED_MODULE_35__["EditNoticeCategoryModalPageModule"], _agm_core__WEBPACK_IMPORTED_MODULE_36__["AgmCoreModule"].forRoot({
        // please get your own API key here: https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
        apiKey: 'AIzaSyBUPEFtsVw5kgunMcW62ROdNSxV_zLkxg4',
        libraries: ['geometry']
      })],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__["SplashScreen"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"], _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_19__["AngularFireMessagingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabaseModule"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/office/commonModals/degree-programs-modal/degree-programs-modal-routing.module.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/office/commonModals/degree-programs-modal/degree-programs-modal-routing.module.ts ***!
    \***************************************************************************************************/

  /*! exports provided: DegreeProgramsModalPageRoutingModule */

  /***/
  function srcAppOfficeCommonModalsDegreeProgramsModalDegreeProgramsModalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DegreeProgramsModalPageRoutingModule", function () {
      return DegreeProgramsModalPageRoutingModule;
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


    var _degree_programs_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./degree-programs-modal.page */
    "./src/app/office/commonModals/degree-programs-modal/degree-programs-modal.page.ts");

    var routes = [{
      path: '',
      component: _degree_programs_modal_page__WEBPACK_IMPORTED_MODULE_3__["DegreeProgramsModalPage"]
    }];

    var DegreeProgramsModalPageRoutingModule = function DegreeProgramsModalPageRoutingModule() {
      _classCallCheck(this, DegreeProgramsModalPageRoutingModule);
    };

    DegreeProgramsModalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DegreeProgramsModalPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/office/commonModals/degree-programs-modal/degree-programs-modal.module.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/office/commonModals/degree-programs-modal/degree-programs-modal.module.ts ***!
    \*******************************************************************************************/

  /*! exports provided: DegreeProgramsModalPageModule */

  /***/
  function srcAppOfficeCommonModalsDegreeProgramsModalDegreeProgramsModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DegreeProgramsModalPageModule", function () {
      return DegreeProgramsModalPageModule;
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


    var _degree_programs_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./degree-programs-modal-routing.module */
    "./src/app/office/commonModals/degree-programs-modal/degree-programs-modal-routing.module.ts");
    /* harmony import */


    var _degree_programs_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./degree-programs-modal.page */
    "./src/app/office/commonModals/degree-programs-modal/degree-programs-modal.page.ts");

    var DegreeProgramsModalPageModule = function DegreeProgramsModalPageModule() {
      _classCallCheck(this, DegreeProgramsModalPageModule);
    };

    DegreeProgramsModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _degree_programs_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["DegreeProgramsModalPageRoutingModule"]],
      declarations: [_degree_programs_modal_page__WEBPACK_IMPORTED_MODULE_6__["DegreeProgramsModalPage"]]
    })], DegreeProgramsModalPageModule);
    /***/
  },

  /***/
  "./src/app/office/commonModals/degree-programs-modal/degree-programs-modal.page.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/app/office/commonModals/degree-programs-modal/degree-programs-modal.page.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOfficeCommonModalsDegreeProgramsModalDegreeProgramsModalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29mZmljZS9jb21tb25Nb2RhbHMvZGVncmVlLXByb2dyYW1zLW1vZGFsL2RlZ3JlZS1wcm9ncmFtcy1tb2RhbC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/office/commonModals/degree-programs-modal/degree-programs-modal.page.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/office/commonModals/degree-programs-modal/degree-programs-modal.page.ts ***!
    \*****************************************************************************************/

  /*! exports provided: DegreeProgramsModalPage */

  /***/
  function srcAppOfficeCommonModalsDegreeProgramsModalDegreeProgramsModalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DegreeProgramsModalPage", function () {
      return DegreeProgramsModalPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var DegreeProgramsModalPage = /*#__PURE__*/function () {
      function DegreeProgramsModalPage(modalController, degreeProgramService, navParams) {
        var _this2 = this;

        _classCallCheck(this, DegreeProgramsModalPage);

        this.modalController = modalController;
        this.degreeProgramService = degreeProgramService;
        this.navParams = navParams;
        this.passedLoggedInUserFaculty = null;

        this.retrievePublishedDegreeProgram = function () {
          _this2.degreeProgramService.retrievePublishedDegreeProgram(_this2.passedLoggedInUserFaculty).subscribe(function (response) {
            return _this2.publishedDegreePrograms = response.forEach(function (document) {
              var firestoreDoc = document.payload.doc.data();
              _this2.publishedDegreeProgramDegree = firestoreDoc.degree;
              _this2.publishedDegreeProgramAwardingBodyUniversity = firestoreDoc.awardingBodyUniversity;
              _this2.publishedDegreeProgramNoOfYears = firestoreDoc.deliveryNoOfYears;
              _this2.publishedDegreeProgramNoOfSemestersAnnaully = firestoreDoc.deliveryNoOfSemestersAnnually;
            });
          });
        };

        this.userSelectedAnOption = false;
      }

      _createClass(DegreeProgramsModalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          // Getting the values from the parent page and assigning them to the variable
          this.passedLoggedInUserFaculty = this.navParams.get('loggedInUserFaculty');
          this.retrievePublishedDegreeProgram();
          this.degreeProgramService.retrievePublishedDegreeProgram(this.passedLoggedInUserFaculty).subscribe(function (response) {
            return _this3.publishedDegreeProgramsCount = response;
          });
        }
      }, {
        key: "assignSelectedValue",
        value: function assignSelectedValue(event) {
          this.userSelectedDegree = event.detail.value;

          if (this.userSelectedDegree == null) {
            this.userSelectedAnOption = false;
          } else if (this.userSelectedDegree != null) {
            this.userSelectedAnOption = true;
          }

          if (this.userSelectedDegree == this.publishedDegreeProgramDegree) {
            this.userSelectedAwardingBodyUniversity = this.publishedDegreeProgramAwardingBodyUniversity;
          }
        }
      }, {
        key: "loadFormContent",
        value: function loadFormContent(event) {} // Implementation for closing the modal and passing the relevant data back to the parent page

      }, {
        key: "closeDegreeProgram",
        value: function closeDegreeProgram() {
          this.modalController.dismiss({
            selectedAnOption: this.userSelectedAnOption,
            selectedDegree: this.userSelectedDegree,
            selectedAwardingBodyUniversity: this.userSelectedAwardingBodyUniversity
          });
        }
      }]);

      return DegreeProgramsModalPage;
    }();

    DegreeProgramsModalPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }];
    };

    DegreeProgramsModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-degree-programs-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./degree-programs-modal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/office/commonModals/degree-programs-modal/degree-programs-modal.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./degree-programs-modal.page.scss */
      "./src/app/office/commonModals/degree-programs-modal/degree-programs-modal.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]])], DegreeProgramsModalPage);
    /***/
  },

  /***/
  "./src/app/office/lecturers/more-details-lecturer-popover/more-details-lecturer-popover-routing.module.ts":
  /*!****************************************************************************************************************!*\
    !*** ./src/app/office/lecturers/more-details-lecturer-popover/more-details-lecturer-popover-routing.module.ts ***!
    \****************************************************************************************************************/

  /*! exports provided: MoreDetailsLecturerPopoverPageRoutingModule */

  /***/
  function srcAppOfficeLecturersMoreDetailsLecturerPopoverMoreDetailsLecturerPopoverRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoreDetailsLecturerPopoverPageRoutingModule", function () {
      return MoreDetailsLecturerPopoverPageRoutingModule;
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


    var _more_details_lecturer_popover_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./more-details-lecturer-popover.page */
    "./src/app/office/lecturers/more-details-lecturer-popover/more-details-lecturer-popover.page.ts");

    var routes = [{
      path: '',
      component: _more_details_lecturer_popover_page__WEBPACK_IMPORTED_MODULE_3__["MoreDetailsLecturerPopoverPage"]
    }];

    var MoreDetailsLecturerPopoverPageRoutingModule = function MoreDetailsLecturerPopoverPageRoutingModule() {
      _classCallCheck(this, MoreDetailsLecturerPopoverPageRoutingModule);
    };

    MoreDetailsLecturerPopoverPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MoreDetailsLecturerPopoverPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/office/lecturers/more-details-lecturer-popover/more-details-lecturer-popover.module.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/office/lecturers/more-details-lecturer-popover/more-details-lecturer-popover.module.ts ***!
    \********************************************************************************************************/

  /*! exports provided: MoreDetailsLecturerPopoverPageModule */

  /***/
  function srcAppOfficeLecturersMoreDetailsLecturerPopoverMoreDetailsLecturerPopoverModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoreDetailsLecturerPopoverPageModule", function () {
      return MoreDetailsLecturerPopoverPageModule;
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


    var _more_details_lecturer_popover_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./more-details-lecturer-popover-routing.module */
    "./src/app/office/lecturers/more-details-lecturer-popover/more-details-lecturer-popover-routing.module.ts");
    /* harmony import */


    var _more_details_lecturer_popover_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./more-details-lecturer-popover.page */
    "./src/app/office/lecturers/more-details-lecturer-popover/more-details-lecturer-popover.page.ts");

    var MoreDetailsLecturerPopoverPageModule = function MoreDetailsLecturerPopoverPageModule() {
      _classCallCheck(this, MoreDetailsLecturerPopoverPageModule);
    };

    MoreDetailsLecturerPopoverPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _more_details_lecturer_popover_routing_module__WEBPACK_IMPORTED_MODULE_5__["MoreDetailsLecturerPopoverPageRoutingModule"]],
      declarations: [_more_details_lecturer_popover_page__WEBPACK_IMPORTED_MODULE_6__["MoreDetailsLecturerPopoverPage"]]
    })], MoreDetailsLecturerPopoverPageModule);
    /***/
  },

  /***/
  "./src/app/office/lecturers/more-details-lecturer-popover/more-details-lecturer-popover.page.scss":
  /*!********************************************************************************************************!*\
    !*** ./src/app/office/lecturers/more-details-lecturer-popover/more-details-lecturer-popover.page.scss ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOfficeLecturersMoreDetailsLecturerPopoverMoreDetailsLecturerPopoverPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29mZmljZS9sZWN0dXJlcnMvbW9yZS1kZXRhaWxzLWxlY3R1cmVyLXBvcG92ZXIvbW9yZS1kZXRhaWxzLWxlY3R1cmVyLXBvcG92ZXIucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/office/lecturers/more-details-lecturer-popover/more-details-lecturer-popover.page.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/office/lecturers/more-details-lecturer-popover/more-details-lecturer-popover.page.ts ***!
    \******************************************************************************************************/

  /*! exports provided: MoreDetailsLecturerPopoverPage */

  /***/
  function srcAppOfficeLecturersMoreDetailsLecturerPopoverMoreDetailsLecturerPopoverPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoreDetailsLecturerPopoverPage", function () {
      return MoreDetailsLecturerPopoverPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MoreDetailsLecturerPopoverPage = /*#__PURE__*/function () {
      function MoreDetailsLecturerPopoverPage() {
        _classCallCheck(this, MoreDetailsLecturerPopoverPage);
      }

      _createClass(MoreDetailsLecturerPopoverPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MoreDetailsLecturerPopoverPage;
    }();

    MoreDetailsLecturerPopoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-more-details-lecturer-popover',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./more-details-lecturer-popover.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/office/lecturers/more-details-lecturer-popover/more-details-lecturer-popover.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./more-details-lecturer-popover.page.scss */
      "./src/app/office/lecturers/more-details-lecturer-popover/more-details-lecturer-popover.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], MoreDetailsLecturerPopoverPage);
    /***/
  },

  /***/
  "./src/app/office/modules/edit-module-modal/edit-module-modal-routing.module.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/office/modules/edit-module-modal/edit-module-modal-routing.module.ts ***!
    \**************************************************************************************/

  /*! exports provided: EditModuleModalPageRoutingModule */

  /***/
  function srcAppOfficeModulesEditModuleModalEditModuleModalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditModuleModalPageRoutingModule", function () {
      return EditModuleModalPageRoutingModule;
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


    var _edit_module_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./edit-module-modal.page */
    "./src/app/office/modules/edit-module-modal/edit-module-modal.page.ts");

    var routes = [{
      path: '',
      component: _edit_module_modal_page__WEBPACK_IMPORTED_MODULE_3__["EditModuleModalPage"]
    }];

    var EditModuleModalPageRoutingModule = function EditModuleModalPageRoutingModule() {
      _classCallCheck(this, EditModuleModalPageRoutingModule);
    };

    EditModuleModalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditModuleModalPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/office/modules/edit-module-modal/edit-module-modal.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/office/modules/edit-module-modal/edit-module-modal.module.ts ***!
    \******************************************************************************/

  /*! exports provided: EditModuleModalPageModule */

  /***/
  function srcAppOfficeModulesEditModuleModalEditModuleModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditModuleModalPageModule", function () {
      return EditModuleModalPageModule;
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


    var _edit_module_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit-module-modal-routing.module */
    "./src/app/office/modules/edit-module-modal/edit-module-modal-routing.module.ts");
    /* harmony import */


    var _edit_module_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit-module-modal.page */
    "./src/app/office/modules/edit-module-modal/edit-module-modal.page.ts");

    var EditModuleModalPageModule = function EditModuleModalPageModule() {
      _classCallCheck(this, EditModuleModalPageModule);
    };

    EditModuleModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_module_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditModuleModalPageRoutingModule"]],
      declarations: [_edit_module_modal_page__WEBPACK_IMPORTED_MODULE_6__["EditModuleModalPage"]]
    })], EditModuleModalPageModule);
    /***/
  },

  /***/
  "./src/app/office/modules/edit-module-modal/edit-module-modal.page.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/office/modules/edit-module-modal/edit-module-modal.page.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOfficeModulesEditModuleModalEditModuleModalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --ion-background-color: rgb(243, 243, 243); }\n\nion-card {\n  --ion-background-color: white; }\n\nion-item {\n  border: #ccc solid 1px;\n  border-radius: 5px; }\n\nion-label {\n  color: black;\n  font-size: 15px; }\n\n.editModuleFormLabel {\n  position: relative;\n  top: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ZmaWNlL21vZHVsZXMvZWRpdC1tb2R1bGUtbW9kYWwvQzpcXFVzZXJzXFxyYW51bFxcRG9jdW1lbnRzXFxHaXRIdWJcXDJuZCBZZWFyXFwybmQgU2VtZXN0ZXJcXFVPUF9TRV9ZMlMyLVBVU0wyMDA4LUlOVFJPRFVDVElPTi1UTy1JTlRFUk5FVC1PRi1USElOR1NcXFdvcmtzcGFjZVxcaVNBTS9zcmNcXGFwcFxcb2ZmaWNlXFxtb2R1bGVzXFxlZGl0LW1vZHVsZS1tb2RhbFxcZWRpdC1tb2R1bGUtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMENBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksNkJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksc0JBQXNCO0VBQ3RCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL29mZmljZS9tb2R1bGVzL2VkaXQtbW9kdWxlLW1vZGFsL2VkaXQtbW9kdWxlLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjQzLCAyNDMpO1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24taXRlbXtcclxuICAgIGJvcmRlcjogI2NjYyBzb2xpZCAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbmlvbi1sYWJlbHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLmVkaXRNb2R1bGVGb3JtTGFiZWx7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDE1cHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/office/modules/edit-module-modal/edit-module-modal.page.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/office/modules/edit-module-modal/edit-module-modal.page.ts ***!
    \****************************************************************************/

  /*! exports provided: EditModuleModalPage */

  /***/
  function srcAppOfficeModulesEditModuleModalEditModuleModalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditModuleModalPage", function () {
      return EditModuleModalPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/firebase.service */
    "./src/app/services/firebase.service.ts");

    var EditModuleModalPage = /*#__PURE__*/function () {
      function EditModuleModalPage(navParams, modalController, formBuilder, editModuleService, alertController) {
        var _this4 = this;

        _classCallCheck(this, EditModuleModalPage);

        this.navParams = navParams;
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.editModuleService = editModuleService;
        this.alertController = alertController; // Declaring variables to store the passed value

        this.passedModuleDocId = null;
        this.passedModuleCode = null;
        this.passedModuleTitle = null;
        this.passedModuleCreditsWeighting = null;
        this.passedModuleDegree = null;
        this.passedModuleAwardingBodyUniversity = null;
        this.passedModuleAcademicPeriodYear = null;
        this.passedModuleAcademicPeriodSemester = null;
        this.passedModuleModuleLeader = null;
        this.passedModuleAssignedLecturer = null;
        this.passedModuleAssignedLectureHall = null;
        this.passedUserFaculty = null;

        this.retrievePublishedModuleCreditsWeightingActive = function () {
          _this4.editModuleService.retrievePublishedModuleCreditsWeightingActive().subscribe(function (response) {
            return _this4.publishedCreditsWeighting = response;
          });
        };

        this.retrievePublishedDegreeProgram = function () {
          _this4.editModuleService.retrievePublishedDegreeProgram(_this4.passedUserFaculty).subscribe(function (response) {
            return _this4.publishedDegreePrograms = response.forEach(function (document) {
              var firestoreDoc = document.payload.doc.data();
              _this4.publishedDegreeProgramDegree = firestoreDoc.degree;
              _this4.publishedDegreeProgramAwardingBodyUniversity = firestoreDoc.awardingBodyUniversity;
              _this4.publishedDegreeProgramNoOfYears = firestoreDoc.deliveryNoOfYears;
              _this4.publishedDegreeProgramNoOfSemestersAnnaully = firestoreDoc.deliveryNoOfSemestersAnnually;
            });
          });
        };

        this.retrieveRegisteredLecturers = function () {
          _this4.editModuleService.retrieveRegisteredLecturers().subscribe(function (response) {
            return _this4.registeredLecturers = response;
          });
        };

        this.retrievePublishedLectureHalls = function () {
          _this4.editModuleService.retrievePublishedLectureHalls(_this4.passedUserFaculty).subscribe(function (response) {
            return _this4.publishedLectureHalls = response;
          });
        };
      }

      _createClass(EditModuleModalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.editModuleDetailsForm = this.formBuilder.group({
            moduleCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            moduleTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            creditsWeighting: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            degreeProgram: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            academicPeriodYear: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            academicPeriodSemester: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            moduleLeader: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            assignedLecturer: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            assignedLectureHall: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
          }); // Getting the values from the parent page (module page) and assigning them to the variables

          this.passedModuleDocId = this.navParams.get('moduleDocId');
          this.passedModuleCode = this.navParams.get('moduleCode');
          this.passedModuleTitle = this.navParams.get('moduleTitle');
          this.passedModuleCreditsWeighting = this.navParams.get('moduleCreditsWeighting');
          this.passedModuleDegree = this.navParams.get('moduleDegree');
          this.passedModuleAwardingBodyUniversity = this.navParams.get('moduleAwardingBodyUniversity');
          this.passedModuleAcademicPeriodYear = this.navParams.get('moduleAcademicPeriodYear');
          this.passedModuleAcademicPeriodSemester = this.navParams.get('moduleAcademicPeriodSemester');
          this.passedModuleModuleLeader = this.navParams.get('moduleModuleLeader');
          this.passedModuleAssignedLecturer = this.navParams.get('moduleAssignedLecturer');
          this.passedModuleAssignedLectureHall = this.navParams.get('moduleAssignedLectureHall');
          this.passedUserFaculty = this.navParams.get('userFaculty');
          this.retrievePublishedModuleCreditsWeightingActive();
          this.retrievePublishedDegreeProgram();
          this.retrieveRegisteredLecturers();
          this.retrievePublishedLectureHalls();
        } // Implementation of generating an array for the count of, no of years and no of semesters

      }, {
        key: "convertToArray",
        value: function convertToArray(n) {
          return Array(n);
        } // Alert Box Implementation

      }, {
        key: "alertNotice",
        value: function alertNotice(title, content) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: title,
                      message: content,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } // Process of editing module details

      }, {
        key: "doEditModuleDetails",
        value: function doEditModuleDetails(value) {
          // Retriving the awardingBodyUniversity from the user selected degreeProgram
          if (value.degreeProgram == this.publishedDegreeProgramDegree) {
            this.userFormDataAwardingBodyUniversity = this.publishedDegreeProgramAwardingBodyUniversity;
          }

          console.log(value.degreeProgram);
          console.log(this.publishedDegreeProgramDegree);
          console.log(this.userFormDataAwardingBodyUniversity); // Process of updating module details in the firestore database

          this.editModuleService.updateModule(this.passedUserFaculty, this.passedModuleDocId, value, this.userFormDataAwardingBodyUniversity); // Alert box displaying confirmation of updating of module datails 

          this.alertNotice("Updated", "Module Details has been updated.");
        } // Implementation for closing the modal

      }, {
        key: "closeEditModule",
        value: function closeEditModule() {
          this.modalController.dismiss();
        }
      }]);

      return EditModuleModalPage;
    }();

    EditModuleModalPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }];
    };

    EditModuleModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-module-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-module-modal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/office/modules/edit-module-modal/edit-module-modal.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-module-modal.page.scss */
      "./src/app/office/modules/edit-module-modal/edit-module-modal.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])], EditModuleModalPage);
    /***/
  },

  /***/
  "./src/app/office/modules/more-details-module-popover/more-details-module-popover-routing.module.ts":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/office/modules/more-details-module-popover/more-details-module-popover-routing.module.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: MoreDetailsModulePopoverPageRoutingModule */

  /***/
  function srcAppOfficeModulesMoreDetailsModulePopoverMoreDetailsModulePopoverRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoreDetailsModulePopoverPageRoutingModule", function () {
      return MoreDetailsModulePopoverPageRoutingModule;
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


    var _more_details_module_popover_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./more-details-module-popover.page */
    "./src/app/office/modules/more-details-module-popover/more-details-module-popover.page.ts");

    var routes = [{
      path: '',
      component: _more_details_module_popover_page__WEBPACK_IMPORTED_MODULE_3__["MoreDetailsModulePopoverPage"]
    }];

    var MoreDetailsModulePopoverPageRoutingModule = function MoreDetailsModulePopoverPageRoutingModule() {
      _classCallCheck(this, MoreDetailsModulePopoverPageRoutingModule);
    };

    MoreDetailsModulePopoverPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MoreDetailsModulePopoverPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/office/modules/more-details-module-popover/more-details-module-popover.module.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/office/modules/more-details-module-popover/more-details-module-popover.module.ts ***!
    \**************************************************************************************************/

  /*! exports provided: MoreDetailsModulePopoverPageModule */

  /***/
  function srcAppOfficeModulesMoreDetailsModulePopoverMoreDetailsModulePopoverModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoreDetailsModulePopoverPageModule", function () {
      return MoreDetailsModulePopoverPageModule;
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


    var _more_details_module_popover_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./more-details-module-popover-routing.module */
    "./src/app/office/modules/more-details-module-popover/more-details-module-popover-routing.module.ts");
    /* harmony import */


    var _more_details_module_popover_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./more-details-module-popover.page */
    "./src/app/office/modules/more-details-module-popover/more-details-module-popover.page.ts");

    var MoreDetailsModulePopoverPageModule = function MoreDetailsModulePopoverPageModule() {
      _classCallCheck(this, MoreDetailsModulePopoverPageModule);
    };

    MoreDetailsModulePopoverPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _more_details_module_popover_routing_module__WEBPACK_IMPORTED_MODULE_5__["MoreDetailsModulePopoverPageRoutingModule"]],
      declarations: [_more_details_module_popover_page__WEBPACK_IMPORTED_MODULE_6__["MoreDetailsModulePopoverPage"]]
    })], MoreDetailsModulePopoverPageModule);
    /***/
  },

  /***/
  "./src/app/office/modules/more-details-module-popover/more-details-module-popover.page.scss":
  /*!**************************************************************************************************!*\
    !*** ./src/app/office/modules/more-details-module-popover/more-details-module-popover.page.scss ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOfficeModulesMoreDetailsModulePopoverMoreDetailsModulePopoverPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29mZmljZS9tb2R1bGVzL21vcmUtZGV0YWlscy1tb2R1bGUtcG9wb3Zlci9tb3JlLWRldGFpbHMtbW9kdWxlLXBvcG92ZXIucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/office/modules/more-details-module-popover/more-details-module-popover.page.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/office/modules/more-details-module-popover/more-details-module-popover.page.ts ***!
    \************************************************************************************************/

  /*! exports provided: MoreDetailsModulePopoverPage */

  /***/
  function srcAppOfficeModulesMoreDetailsModulePopoverMoreDetailsModulePopoverPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoreDetailsModulePopoverPage", function () {
      return MoreDetailsModulePopoverPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var MoreDetailsModulePopoverPage = /*#__PURE__*/function () {
      function MoreDetailsModulePopoverPage(navParams, popoverController) {
        _classCallCheck(this, MoreDetailsModulePopoverPage);

        this.navParams = navParams;
        this.popoverController = popoverController;
        this.passedModuleDocId = null;
        this.passedAssignedLecturer = null;
        this.passedAssignedLectureHall = null;
      }

      _createClass(MoreDetailsModulePopoverPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Retrieving the passed value from the parent page (modules page) and assigning to these variables
          this.passedModuleDocId = this.navParams.get('moduleDocId');
          this.passedAssignedLecturer = this.navParams.get('assignedLecturer');
          this.passedAssignedLectureHall = this.navParams.get('assignedLectureHall');
        } // Closing the popover

      }, {
        key: "closeMoreDetailsModulePopover",
        value: function closeMoreDetailsModulePopover() {
          this.popoverController.dismiss();
        }
      }]);

      return MoreDetailsModulePopoverPage;
    }();

    MoreDetailsModulePopoverPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    MoreDetailsModulePopoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-more-details-module-popover',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./more-details-module-popover.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/office/modules/more-details-module-popover/more-details-module-popover.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./more-details-module-popover.page.scss */
      "./src/app/office/modules/more-details-module-popover/more-details-module-popover.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], MoreDetailsModulePopoverPage);
    /***/
  },

  /***/
  "./src/app/office/notifications-popover/notifications-popover-routing.module.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/office/notifications-popover/notifications-popover-routing.module.ts ***!
    \**************************************************************************************/

  /*! exports provided: NotificationsPopoverPageRoutingModule */

  /***/
  function srcAppOfficeNotificationsPopoverNotificationsPopoverRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsPopoverPageRoutingModule", function () {
      return NotificationsPopoverPageRoutingModule;
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


    var _notifications_popover_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./notifications-popover.page */
    "./src/app/office/notifications-popover/notifications-popover.page.ts");

    var routes = [{
      path: '',
      component: _notifications_popover_page__WEBPACK_IMPORTED_MODULE_3__["NotificationsPopoverPage"]
    }];

    var NotificationsPopoverPageRoutingModule = function NotificationsPopoverPageRoutingModule() {
      _classCallCheck(this, NotificationsPopoverPageRoutingModule);
    };

    NotificationsPopoverPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NotificationsPopoverPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/office/notifications-popover/notifications-popover.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/office/notifications-popover/notifications-popover.module.ts ***!
    \******************************************************************************/

  /*! exports provided: NotificationsPopoverPageModule */

  /***/
  function srcAppOfficeNotificationsPopoverNotificationsPopoverModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsPopoverPageModule", function () {
      return NotificationsPopoverPageModule;
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


    var _notifications_popover_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./notifications-popover-routing.module */
    "./src/app/office/notifications-popover/notifications-popover-routing.module.ts");
    /* harmony import */


    var _notifications_popover_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./notifications-popover.page */
    "./src/app/office/notifications-popover/notifications-popover.page.ts");

    var NotificationsPopoverPageModule = function NotificationsPopoverPageModule() {
      _classCallCheck(this, NotificationsPopoverPageModule);
    };

    NotificationsPopoverPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _notifications_popover_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationsPopoverPageRoutingModule"]],
      declarations: [_notifications_popover_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPopoverPage"]]
    })], NotificationsPopoverPageModule);
    /***/
  },

  /***/
  "./src/app/office/notifications-popover/notifications-popover.page.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/office/notifications-popover/notifications-popover.page.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOfficeNotificationsPopoverNotificationsPopoverPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29mZmljZS9ub3RpZmljYXRpb25zLXBvcG92ZXIvbm90aWZpY2F0aW9ucy1wb3BvdmVyLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/office/notifications-popover/notifications-popover.page.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/office/notifications-popover/notifications-popover.page.ts ***!
    \****************************************************************************/

  /*! exports provided: NotificationsPopoverPage */

  /***/
  function srcAppOfficeNotificationsPopoverNotificationsPopoverPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsPopoverPage", function () {
      return NotificationsPopoverPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var NotificationsPopoverPage = /*#__PURE__*/function () {
      function NotificationsPopoverPage(notificationsPopoverService, navParams) {
        var _this5 = this;

        _classCallCheck(this, NotificationsPopoverPage);

        this.notificationsPopoverService = notificationsPopoverService;
        this.navParams = navParams;
        this.passedLoggedInUserId = null;

        this.retrieveLoggedInUserDetailsProgramOffice = function () {
          return _this5.notificationsPopoverService.retrieveLoggedInUserDetailsProgramOffice(_this5.passedLoggedInUserId).subscribe(function (response) {
            return _this5.registeredProgramOfficeUser = response;
          });
        };
      }

      _createClass(NotificationsPopoverPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.passedLoggedInUserId = this.navParams.get('loggedInUserId');
          this.retrieveLoggedInUserDetailsProgramOffice();
        }
      }]);

      return NotificationsPopoverPage;
    }();

    NotificationsPopoverPage.ctorParameters = function () {
      return [{
        type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }];
    };

    NotificationsPopoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notifications-popover',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notifications-popover.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/office/notifications-popover/notifications-popover.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notifications-popover.page.scss */
      "./src/app/office/notifications-popover/notifications-popover.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]])], NotificationsPopoverPage);
    /***/
  },

  /***/
  "./src/app/office/semester-calendar/edit-lecture-series-modal/edit-lecture-series-modal-routing.module.ts":
  /*!****************************************************************************************************************!*\
    !*** ./src/app/office/semester-calendar/edit-lecture-series-modal/edit-lecture-series-modal-routing.module.ts ***!
    \****************************************************************************************************************/

  /*! exports provided: EditLectureSeriesModalPageRoutingModule */

  /***/
  function srcAppOfficeSemesterCalendarEditLectureSeriesModalEditLectureSeriesModalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditLectureSeriesModalPageRoutingModule", function () {
      return EditLectureSeriesModalPageRoutingModule;
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


    var _edit_lecture_series_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./edit-lecture-series-modal.page */
    "./src/app/office/semester-calendar/edit-lecture-series-modal/edit-lecture-series-modal.page.ts");

    var routes = [{
      path: '',
      component: _edit_lecture_series_modal_page__WEBPACK_IMPORTED_MODULE_3__["EditLectureSeriesModalPage"]
    }];

    var EditLectureSeriesModalPageRoutingModule = function EditLectureSeriesModalPageRoutingModule() {
      _classCallCheck(this, EditLectureSeriesModalPageRoutingModule);
    };

    EditLectureSeriesModalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditLectureSeriesModalPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/office/semester-calendar/edit-lecture-series-modal/edit-lecture-series-modal.module.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/office/semester-calendar/edit-lecture-series-modal/edit-lecture-series-modal.module.ts ***!
    \********************************************************************************************************/

  /*! exports provided: EditLectureSeriesModalPageModule */

  /***/
  function srcAppOfficeSemesterCalendarEditLectureSeriesModalEditLectureSeriesModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditLectureSeriesModalPageModule", function () {
      return EditLectureSeriesModalPageModule;
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


    var _edit_lecture_series_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit-lecture-series-modal-routing.module */
    "./src/app/office/semester-calendar/edit-lecture-series-modal/edit-lecture-series-modal-routing.module.ts");
    /* harmony import */


    var _edit_lecture_series_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit-lecture-series-modal.page */
    "./src/app/office/semester-calendar/edit-lecture-series-modal/edit-lecture-series-modal.page.ts");

    var EditLectureSeriesModalPageModule = function EditLectureSeriesModalPageModule() {
      _classCallCheck(this, EditLectureSeriesModalPageModule);
    };

    EditLectureSeriesModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_lecture_series_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditLectureSeriesModalPageRoutingModule"]],
      declarations: [_edit_lecture_series_modal_page__WEBPACK_IMPORTED_MODULE_6__["EditLectureSeriesModalPage"]]
    })], EditLectureSeriesModalPageModule);
    /***/
  },

  /***/
  "./src/app/office/semester-calendar/edit-lecture-series-modal/edit-lecture-series-modal.page.scss":
  /*!********************************************************************************************************!*\
    !*** ./src/app/office/semester-calendar/edit-lecture-series-modal/edit-lecture-series-modal.page.scss ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOfficeSemesterCalendarEditLectureSeriesModalEditLectureSeriesModalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --ion-background-color: rgb(243, 243, 243); }\n\nion-card {\n  --ion-background-color: white; }\n\nion-item {\n  border: #ccc solid 1px;\n  border-radius: 5px; }\n\nion-label {\n  color: black;\n  font-size: 15px; }\n\n.editLectureSeriesFormLabel {\n  position: absolute;\n  top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ZmaWNlL3NlbWVzdGVyLWNhbGVuZGFyL2VkaXQtbGVjdHVyZS1zZXJpZXMtbW9kYWwvQzpcXFVzZXJzXFxyYW51bFxcRG9jdW1lbnRzXFxHaXRIdWJcXDJuZCBZZWFyXFwybmQgU2VtZXN0ZXJcXFVPUF9TRV9ZMlMyLVBVU0wyMDA4LUlOVFJPRFVDVElPTi1UTy1JTlRFUk5FVC1PRi1USElOR1NcXFdvcmtzcGFjZVxcaVNBTS9zcmNcXGFwcFxcb2ZmaWNlXFxzZW1lc3Rlci1jYWxlbmRhclxcZWRpdC1sZWN0dXJlLXNlcmllcy1tb2RhbFxcZWRpdC1sZWN0dXJlLXNlcmllcy1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQ0FBdUIsRUFBQTs7QUFHM0I7RUFDSSw2QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxzQkFBc0I7RUFDdEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvb2ZmaWNlL3NlbWVzdGVyLWNhbGVuZGFyL2VkaXQtbGVjdHVyZS1zZXJpZXMtbW9kYWwvZWRpdC1sZWN0dXJlLXNlcmllcy1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDI0MywgMjQzKTtcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWl0ZW17XHJcbiAgICBib3JkZXI6ICNjY2Mgc29saWQgMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5pb24tbGFiZWx7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5lZGl0TGVjdHVyZVNlcmllc0Zvcm1MYWJlbHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjBweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/office/semester-calendar/edit-lecture-series-modal/edit-lecture-series-modal.page.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/office/semester-calendar/edit-lecture-series-modal/edit-lecture-series-modal.page.ts ***!
    \******************************************************************************************************/

  /*! exports provided: EditLectureSeriesModalPage */

  /***/
  function srcAppOfficeSemesterCalendarEditLectureSeriesModalEditLectureSeriesModalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditLectureSeriesModalPage", function () {
      return EditLectureSeriesModalPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/firebase.service */
    "./src/app/services/firebase.service.ts");

    var EditLectureSeriesModalPage = /*#__PURE__*/function () {
      function EditLectureSeriesModalPage(navParams, modalController, formBuilder, editLectureSeriesService, alertController) {
        _classCallCheck(this, EditLectureSeriesModalPage);

        this.navParams = navParams;
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.editLectureSeriesService = editLectureSeriesService;
        this.alertController = alertController;
        this.passedLectureSeriesDocId = null;
        this.passedLectureSeriesNoOfLectures = null;
        this.passedLectureSeriesEnrollmentKey = null;
        this.passedLoggedInUserFaculty = null;
      }

      _createClass(EditLectureSeriesModalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.passedLectureSeriesDocId = this.navParams.get('lectureSeriesDocId');
          this.passedLectureSeriesNoOfLectures = this.navParams.get('lectureSeriesNoOfLecturers');
          this.passedLectureSeriesEnrollmentKey = this.navParams.get('lectureSeriesEnrollmentKey');
          this.passedLoggedInUserFaculty = this.navParams.get('loggedInUserFaculty');
          this.editLectureSeriesForm = this.formBuilder.group({
            noOfLectures: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            enrollmentKey: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
          });
        }
      }, {
        key: "doEditLectureSeries",
        value: function doEditLectureSeries(value) {
          this.editLectureSeriesService.updateLectureSeries(value, this.passedLectureSeriesDocId, this.passedLoggedInUserFaculty);
          this.alertNotice("Lecture Series Updated", "Lecture series details has been updated.");
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
      }, {
        key: "closeEditLectureSeriesModal",
        value: function closeEditLectureSeriesModal() {
          this.modalController.dismiss();
        }
      }]);

      return EditLectureSeriesModalPage;
    }();

    EditLectureSeriesModalPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    EditLectureSeriesModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-lecture-series-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-lecture-series-modal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/office/semester-calendar/edit-lecture-series-modal/edit-lecture-series-modal.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-lecture-series-modal.page.scss */
      "./src/app/office/semester-calendar/edit-lecture-series-modal/edit-lecture-series-modal.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])], EditLectureSeriesModalPage);
    /***/
  },

  /***/
  "./src/app/office/semester-calendar/edit-lecture-session-modal/edit-lecture-session-modal-routing.module.ts":
  /*!******************************************************************************************************************!*\
    !*** ./src/app/office/semester-calendar/edit-lecture-session-modal/edit-lecture-session-modal-routing.module.ts ***!
    \******************************************************************************************************************/

  /*! exports provided: EditLectureSessionModalPageRoutingModule */

  /***/
  function srcAppOfficeSemesterCalendarEditLectureSessionModalEditLectureSessionModalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditLectureSessionModalPageRoutingModule", function () {
      return EditLectureSessionModalPageRoutingModule;
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


    var _edit_lecture_session_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./edit-lecture-session-modal.page */
    "./src/app/office/semester-calendar/edit-lecture-session-modal/edit-lecture-session-modal.page.ts");

    var routes = [{
      path: '',
      component: _edit_lecture_session_modal_page__WEBPACK_IMPORTED_MODULE_3__["EditLectureSessionModalPage"]
    }];

    var EditLectureSessionModalPageRoutingModule = function EditLectureSessionModalPageRoutingModule() {
      _classCallCheck(this, EditLectureSessionModalPageRoutingModule);
    };

    EditLectureSessionModalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditLectureSessionModalPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/office/semester-calendar/edit-lecture-session-modal/edit-lecture-session-modal.module.ts":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/office/semester-calendar/edit-lecture-session-modal/edit-lecture-session-modal.module.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: EditLectureSessionModalPageModule */

  /***/
  function srcAppOfficeSemesterCalendarEditLectureSessionModalEditLectureSessionModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditLectureSessionModalPageModule", function () {
      return EditLectureSessionModalPageModule;
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


    var _edit_lecture_session_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit-lecture-session-modal-routing.module */
    "./src/app/office/semester-calendar/edit-lecture-session-modal/edit-lecture-session-modal-routing.module.ts");
    /* harmony import */


    var _edit_lecture_session_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit-lecture-session-modal.page */
    "./src/app/office/semester-calendar/edit-lecture-session-modal/edit-lecture-session-modal.page.ts");

    var EditLectureSessionModalPageModule = function EditLectureSessionModalPageModule() {
      _classCallCheck(this, EditLectureSessionModalPageModule);
    };

    EditLectureSessionModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_lecture_session_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditLectureSessionModalPageRoutingModule"]],
      declarations: [_edit_lecture_session_modal_page__WEBPACK_IMPORTED_MODULE_6__["EditLectureSessionModalPage"]]
    })], EditLectureSessionModalPageModule);
    /***/
  },

  /***/
  "./src/app/office/semester-calendar/edit-lecture-session-modal/edit-lecture-session-modal.page.scss":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/office/semester-calendar/edit-lecture-session-modal/edit-lecture-session-modal.page.scss ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOfficeSemesterCalendarEditLectureSessionModalEditLectureSessionModalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --ion-background-color: rgb(243, 243, 243); }\n\nion-card {\n  --ion-background-color: white; }\n\nion-item {\n  border: #ccc solid 1px;\n  border-radius: 5px; }\n\nion-label {\n  color: black;\n  font-size: 15px; }\n\n.editLectureSessionFormLabel {\n  position: absolute;\n  top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ZmaWNlL3NlbWVzdGVyLWNhbGVuZGFyL2VkaXQtbGVjdHVyZS1zZXNzaW9uLW1vZGFsL0M6XFxVc2Vyc1xccmFudWxcXERvY3VtZW50c1xcR2l0SHViXFwybmQgWWVhclxcMm5kIFNlbWVzdGVyXFxVT1BfU0VfWTJTMi1QVVNMMjAwOC1JTlRST0RVQ1RJT04tVE8tSU5URVJORVQtT0YtVEhJTkdTXFxXb3Jrc3BhY2VcXGlTQU0vc3JjXFxhcHBcXG9mZmljZVxcc2VtZXN0ZXItY2FsZW5kYXJcXGVkaXQtbGVjdHVyZS1zZXNzaW9uLW1vZGFsXFxlZGl0LWxlY3R1cmUtc2Vzc2lvbi1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQ0FBdUIsRUFBQTs7QUFHM0I7RUFDSSw2QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxzQkFBc0I7RUFDdEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvb2ZmaWNlL3NlbWVzdGVyLWNhbGVuZGFyL2VkaXQtbGVjdHVyZS1zZXNzaW9uLW1vZGFsL2VkaXQtbGVjdHVyZS1zZXNzaW9uLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjQzLCAyNDMpO1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24taXRlbXtcclxuICAgIGJvcmRlcjogI2NjYyBzb2xpZCAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbmlvbi1sYWJlbHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLmVkaXRMZWN0dXJlU2Vzc2lvbkZvcm1MYWJlbHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjBweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/office/semester-calendar/edit-lecture-session-modal/edit-lecture-session-modal.page.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/office/semester-calendar/edit-lecture-session-modal/edit-lecture-session-modal.page.ts ***!
    \********************************************************************************************************/

  /*! exports provided: EditLectureSessionModalPage */

  /***/
  function srcAppOfficeSemesterCalendarEditLectureSessionModalEditLectureSessionModalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditLectureSessionModalPage", function () {
      return EditLectureSessionModalPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var EditLectureSessionModalPage = /*#__PURE__*/function () {
      function EditLectureSessionModalPage(navParams, modalController, formBuilder, editLectureSessionService) {
        var _this6 = this;

        _classCallCheck(this, EditLectureSessionModalPage);

        this.navParams = navParams;
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.editLectureSessionService = editLectureSessionService; // Declaring variables to store the passed value

        this.passedLectureSessionId = null;
        this.passedLectureSessionBatch = null;
        this.passedLectureSessionDegreeProgram = null;
        this.passedLectureSessionAcademicYear = null;
        this.passedLectureSessionAcademicSemester = null;
        this.passedLectureSesionModuleCode = null;
        this.passedLectureSessionModuleTitle = null;
        this.passedLectureSessionLecturer = null;
        this.passedLectureSessionLectureHall = null;
        this.passedLectureSessionStatus = null;
        this.passedLectureSessionStartDateTime = null;
        this.passedLectureSessionEndDateTime = null;

        this.retrievePublishedBatch = function () {
          return _this6.editLectureSessionService.retrievePublishedBatch(_this6.navParams.get('userFaculty')).subscribe(function (response) {
            return _this6.publishedBatches = response;
          });
        };

        this.retrievePublishedDegreeProgram = function () {
          _this6.editLectureSessionService.retrievePublishedDegreeProgram(_this6.navParams.get('userFaculty')).subscribe(function (response) {
            return _this6.publishedDegreePrograms = response.forEach(function (document) {
              var firestoreDoc = document.payload.doc.data();
              _this6.publishedDegreeProgramDegree = firestoreDoc.degree;
              _this6.publishedDegreeProgramAwardingBodyUniversity = firestoreDoc.awardingBodyUniversity;
              _this6.publishedDegreeProgramNoOfYears = firestoreDoc.deliveryNoOfYears;
              _this6.publishedDegreeProgramNoOfSemestersAnnaully = firestoreDoc.deliveryNoOfSemestersAnnually;
            });
          });
        };

        this.retrieveRegisteredModules = function () {
          _this6.editLectureSessionService.retrieveRegisteredModules(_this6.navParams.get('userFaculty')).subscribe(function (response) {
            return _this6.publishedModules = response.forEach(function (document) {
              var firestoreDoc = document.payload.doc.data();
              _this6.publishedModuleCode = document.payload.doc.id;
              _this6.publishedModuleTitle = firestoreDoc.moduleTitle;
            });
          });
        };

        this.retrieveRegisteredLecturers = function () {
          return _this6.editLectureSessionService.retrieveRegisteredLecturers().subscribe(function (response) {
            return _this6.registeredLecturers = response;
          });
        };

        this.retrievePublishedLectureHallsSOC = function () {
          return _this6.editLectureSessionService.retrievePublishedLectureHalls(_this6.navParams.get('userFaculty')).subscribe(function (response) {
            return _this6.publishedLectureHalls = response;
          });
        };

        this.retrievePublishedLectureSessionStatuses = function () {
          return _this6.editLectureSessionService.retrievePublishedLectureSessionStatuses().subscribe(function (response) {
            return _this6.publishedLectureSessionStatuses = response;
          });
        };
      }

      _createClass(EditLectureSessionModalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.editLectureSessionForm = this.formBuilder.group({
            batch: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            degreeProgram: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            academicYear: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            academicSemester: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            module: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            lecturer: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            lectureHall: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            lectureStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            sessionDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            sessionStartTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            sessionEndTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
          }); // Getting the values from the parent page (semester calendar page) and assigning them to the variables

          this.passedLectureSessionId = this.navParams.get('lectureSessionId');
          this.passedLectureSessionBatch = this.navParams.get('lectureSessionBatch');
          this.passedLectureSessionDegreeProgram = this.navParams.get('lectureSessionDegreeProgram');
          this.passedLectureSessionAcademicYear = this.navParams.get('lectureSessionAcademicYear');
          this.passedLectureSessionAcademicSemester = this.navParams.get('lectureSessionAcademicSemester');
          this.passedLectureSesionModuleCode = this.navParams.get('lectureSesionModuleCode');
          this.passedLectureSessionModuleTitle = this.navParams.get('lectureSessionModuleTitle');
          this.passedLectureSessionStartDateTime = this.navParams.get('lectureSessionStartDateTime');
          this.passedLectureSessionEndDateTime = this.navParams.get('lectureSessionEndDateTime');
          this.passedLectureSessionLecturer = this.navParams.get('lectureSessionLecturer');
          this.passedLectureSessionLectureHall = this.navParams.get('lectureSessionLectureHall');
          this.passedLectureSessionStatus = this.navParams.get('lectureSessionStatus');
          this.retrievePublishedBatch();
          this.retrievePublishedDegreeProgram();
          this.retrieveRegisteredModules();
          this.retrieveRegisteredLecturers();
          this.retrievePublishedLectureHallsSOC();
          this.retrievePublishedLectureSessionStatuses(); // Assigning date and time seperately to the variables

          this.lectureSessionStartDateTime = this.passedLectureSessionStartDateTime.toISOString();
          this.lectureSessionEndTime = this.passedLectureSessionEndDateTime.toISOString();
          console.log(this.passedLectureSessionAcademicSemester);
          console.log(this.publishedDegreeProgramNoOfSemestersAnnaully);
        } // Implementation of generating an array for the count of, no of years and no of semesters

      }, {
        key: "convertToArray",
        value: function convertToArray(n) {
          return Array(n);
        } // Process of adding edited values of lecture session to firestore database

      }, {
        key: "doEditLectureSession",
        value: function doEditLectureSession(value) {
          // Retrieving module code for user selected module title
          if (value.module == this.publishedModuleTitle) {
            this.userFormDataModuleCode = this.publishedModuleCode;
          } // Retriving the awardingBodyUniversity from the user selected degreeProgram


          if (value.degreeProgram == this.publishedDegreeProgramDegree) {
            this.userFormDataAwardingBodyUniversity = this.publishedDegreeProgramAwardingBodyUniversity;
          } // Calculating lecture session start datetime
          // Converting user selected date to (Unix Epoch Seconds time) in milliseconds


          this.userFormDataLectureSessionStartDateWithPreviousDate = new Date(value.sessionDate);
          this.userFormDataLectureSessionStartDateWithPreviousDateUnix = this.userFormDataLectureSessionStartDateWithPreviousDate.getTime();
          this.userFormDataLectureSessionStartDateWithPreviousTimeHoursMilli = this.userFormDataLectureSessionStartDateWithPreviousDate.getHours().getMilliseconds();
          this.userFormDataLectureSessionStartDateWithPreviousTimeMinutesMilli = this.userFormDataLectureSessionStartDateWithPreviousDate.getMinutes().getMilliseconds();
          this.userFormDataLectureSessionStartDateWithPreviousTimeSecondsMilli = this.userFormDataLectureSessionStartDateWithPreviousDate.getSeconds().getMilliseconds();
          this.userFormDataLectureSessionStartDateWithPreviousTimeMilliseconds = this.userFormDataLectureSessionStartDateWithPreviousDate.getMilliseconds();
          this.userFormDataLectureSessionStartDateWithPreviousTimeUnix = this.userFormDataLectureSessionStartDateWithPreviousTimeHoursMilli + this.userFormDataLectureSessionStartDateWithPreviousTimeMinutesMilli + this.userFormDataLectureSessionStartDateWithPreviousTimeSecondsMilli + this.userFormDataLectureSessionStartDateWithPreviousTimeMilliseconds;
          this.userFormDataLectureSessionStartDateWithoutPreviousTimeUnix = this.userFormDataLectureSessionStartDateWithPreviousDateUnix - this.userFormDataLectureSessionStartDateWithPreviousTimeUnix; // Converting user selected time from hours to milliseconds

          this.userFormDataLectureSessionStartTimeUnix = value.sessionStartTime.toDate().getMilliseconds(); // Adding date milliseconds value and start time milliseconds value to generate the (Unix Epoch Timestamp) in milliseconds for the lecture session start UNIX datetime timestamp

          this.userFormDataLectureSessionStartDateTimeUnix = this.userFormDataLectureSessionStartDateWithoutPreviousTimeUnix + this.userFormDataLectureSessionStartTimeUnix; // Converting lecture start datetime (Unix Epoch Timestamp) milliseconds to ISO 8601 timestamp

          this.userFormDataLectureSessionStartDateTime = this.userFormDataLectureSessionStartDateTimeUnix.toISOString();
          console.log(this.userFormDataLectureSessionStartDateTime); // Calculating lecture session end datetime
          // Converting user selected time from hours to milliseconds

          this.userFormDataLectureSessionEndTimeUnix = value.sessionEndTime.toDate().getMilliseconds(); // Adding date milliseconds value and start time milliseconds value to generate the (Unix Epoch Timestamp) in milliseconds for the lecture session start UNIX datetime timestamp

          this.userFormDataLectureSessionEndDateTimeUnix = this.userFormDataLectureSessionStartDateWithoutPreviousTimeUnix + this.userFormDataLectureSessionEndTimeUnix; // Converting lecture end datetime (Unix Epoch Timestamp) milliseconds to ISO 8601 timestamp

          this.userFormDataLectureSessionEndDateTime = this.userFormDataLectureSessionEndDateTimeUnix.toDate().getMilliseconds(); // Update values in firestore database with the user updated values

          this.editLectureSessionService.updateLectureSession(this.navParams.get('userFaculty'), this.passedLectureSessionId, value, this.userFormDataModuleCode, this.userFormDataLectureSessionStartDateTime, this.userFormDataLectureSessionEndDateTime);
          console.log(this.userFormDataLectureSessionEndDateTime);
        } // Implementation for closing the modal

      }, {
        key: "closeEditLectureSessionModal",
        value: function closeEditLectureSessionModal() {
          this.modalController.dismiss();
        }
      }]);

      return EditLectureSessionModalPage;
    }();

    EditLectureSessionModalPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]
      }];
    };

    EditLectureSessionModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-lecture-session-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-lecture-session-modal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/office/semester-calendar/edit-lecture-session-modal/edit-lecture-session-modal.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-lecture-session-modal.page.scss */
      "./src/app/office/semester-calendar/edit-lecture-session-modal/edit-lecture-session-modal.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])], EditLectureSessionModalPage);
    /***/
  },

  /***/
  "./src/app/office/semester-calendar/more-details-session-popover/more-details-session-popover-routing.module.ts":
  /*!**********************************************************************************************************************!*\
    !*** ./src/app/office/semester-calendar/more-details-session-popover/more-details-session-popover-routing.module.ts ***!
    \**********************************************************************************************************************/

  /*! exports provided: MoreDetailsSessionPopoverPageRoutingModule */

  /***/
  function srcAppOfficeSemesterCalendarMoreDetailsSessionPopoverMoreDetailsSessionPopoverRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoreDetailsSessionPopoverPageRoutingModule", function () {
      return MoreDetailsSessionPopoverPageRoutingModule;
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


    var _more_details_session_popover_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./more-details-session-popover.page */
    "./src/app/office/semester-calendar/more-details-session-popover/more-details-session-popover.page.ts");

    var routes = [{
      path: '',
      component: _more_details_session_popover_page__WEBPACK_IMPORTED_MODULE_3__["MoreDetailsSessionPopoverPage"]
    }];

    var MoreDetailsSessionPopoverPageRoutingModule = function MoreDetailsSessionPopoverPageRoutingModule() {
      _classCallCheck(this, MoreDetailsSessionPopoverPageRoutingModule);
    };

    MoreDetailsSessionPopoverPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MoreDetailsSessionPopoverPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/office/semester-calendar/more-details-session-popover/more-details-session-popover.module.ts":
  /*!**************************************************************************************************************!*\
    !*** ./src/app/office/semester-calendar/more-details-session-popover/more-details-session-popover.module.ts ***!
    \**************************************************************************************************************/

  /*! exports provided: MoreDetailsSessionPopoverPageModule */

  /***/
  function srcAppOfficeSemesterCalendarMoreDetailsSessionPopoverMoreDetailsSessionPopoverModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoreDetailsSessionPopoverPageModule", function () {
      return MoreDetailsSessionPopoverPageModule;
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


    var _more_details_session_popover_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./more-details-session-popover-routing.module */
    "./src/app/office/semester-calendar/more-details-session-popover/more-details-session-popover-routing.module.ts");
    /* harmony import */


    var _more_details_session_popover_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./more-details-session-popover.page */
    "./src/app/office/semester-calendar/more-details-session-popover/more-details-session-popover.page.ts");

    var MoreDetailsSessionPopoverPageModule = function MoreDetailsSessionPopoverPageModule() {
      _classCallCheck(this, MoreDetailsSessionPopoverPageModule);
    };

    MoreDetailsSessionPopoverPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _more_details_session_popover_routing_module__WEBPACK_IMPORTED_MODULE_5__["MoreDetailsSessionPopoverPageRoutingModule"]],
      declarations: [_more_details_session_popover_page__WEBPACK_IMPORTED_MODULE_6__["MoreDetailsSessionPopoverPage"]]
    })], MoreDetailsSessionPopoverPageModule);
    /***/
  },

  /***/
  "./src/app/office/semester-calendar/more-details-session-popover/more-details-session-popover.page.scss":
  /*!**************************************************************************************************************!*\
    !*** ./src/app/office/semester-calendar/more-details-session-popover/more-details-session-popover.page.scss ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOfficeSemesterCalendarMoreDetailsSessionPopoverMoreDetailsSessionPopoverPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29mZmljZS9zZW1lc3Rlci1jYWxlbmRhci9tb3JlLWRldGFpbHMtc2Vzc2lvbi1wb3BvdmVyL21vcmUtZGV0YWlscy1zZXNzaW9uLXBvcG92ZXIucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/office/semester-calendar/more-details-session-popover/more-details-session-popover.page.ts":
  /*!************************************************************************************************************!*\
    !*** ./src/app/office/semester-calendar/more-details-session-popover/more-details-session-popover.page.ts ***!
    \************************************************************************************************************/

  /*! exports provided: MoreDetailsSessionPopoverPage */

  /***/
  function srcAppOfficeSemesterCalendarMoreDetailsSessionPopoverMoreDetailsSessionPopoverPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoreDetailsSessionPopoverPage", function () {
      return MoreDetailsSessionPopoverPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var MoreDetailsSessionPopoverPage = /*#__PURE__*/function () {
      function MoreDetailsSessionPopoverPage(navParams, popoverController) {
        _classCallCheck(this, MoreDetailsSessionPopoverPage);

        this.navParams = navParams;
        this.popoverController = popoverController;
        this.passedLectureSessionId = null;
        this.passedBatch = null;
        this.passedLecturer = null;
        this.passedLectureHall = null;
        this.passedDegreeCode = null;
        this.passedDegree = null;
        this.passedAwardingBodyUniversity = null;
        this.passedAcademicPeriodYear = null;
        this.passedAcademicPeriodSemester = null;
      }

      _createClass(MoreDetailsSessionPopoverPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Retrieving the passed value from the parent page (semester calendar page) and assigning to these variables
          this.passedLectureSessionId = this.navParams.get('lectureSessionId');
          this.passedBatch = this.navParams.get('batch');
          this.passedLecturer = this.navParams.get('lecturer');
          this.passedLectureHall = this.navParams.get('lectureHall');
          this.passedDegreeCode = this.navParams.get('degreeCode');
          this.passedDegree = this.navParams.get('degree');
          this.passedAwardingBodyUniversity = this.navParams.get('awardingBodyUniversity');
          this.passedAcademicPeriodYear = this.navParams.get('academicPeriodYear');
          this.passedAcademicPeriodSemester = this.navParams.get('academicPeriodSemester');
        } // Closing the popover

      }, {
        key: "closeMoreDetailsSessionPopover",
        value: function closeMoreDetailsSessionPopover() {
          this.popoverController.dismiss();
        }
      }]);

      return MoreDetailsSessionPopoverPage;
    }();

    MoreDetailsSessionPopoverPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    MoreDetailsSessionPopoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-more-details-session-popover',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./more-details-session-popover.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/office/semester-calendar/more-details-session-popover/more-details-session-popover.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./more-details-session-popover.page.scss */
      "./src/app/office/semester-calendar/more-details-session-popover/more-details-session-popover.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], MoreDetailsSessionPopoverPage);
    /***/
  },

  /***/
  "./src/app/office/settings/editModals/edit-batch-modal/edit-batch-modal-routing.module.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/office/settings/editModals/edit-batch-modal/edit-batch-modal-routing.module.ts ***!
    \************************************************************************************************/

  /*! exports provided: EditBatchModalPageRoutingModule */

  /***/
  function srcAppOfficeSettingsEditModalsEditBatchModalEditBatchModalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditBatchModalPageRoutingModule", function () {
      return EditBatchModalPageRoutingModule;
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


    var _edit_batch_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./edit-batch-modal.page */
    "./src/app/office/settings/editModals/edit-batch-modal/edit-batch-modal.page.ts");

    var routes = [{
      path: '',
      component: _edit_batch_modal_page__WEBPACK_IMPORTED_MODULE_3__["EditBatchModalPage"]
    }];

    var EditBatchModalPageRoutingModule = function EditBatchModalPageRoutingModule() {
      _classCallCheck(this, EditBatchModalPageRoutingModule);
    };

    EditBatchModalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditBatchModalPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/office/settings/editModals/edit-batch-modal/edit-batch-modal.module.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/office/settings/editModals/edit-batch-modal/edit-batch-modal.module.ts ***!
    \****************************************************************************************/

  /*! exports provided: EditBatchModalPageModule */

  /***/
  function srcAppOfficeSettingsEditModalsEditBatchModalEditBatchModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditBatchModalPageModule", function () {
      return EditBatchModalPageModule;
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


    var _edit_batch_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit-batch-modal-routing.module */
    "./src/app/office/settings/editModals/edit-batch-modal/edit-batch-modal-routing.module.ts");
    /* harmony import */


    var _edit_batch_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit-batch-modal.page */
    "./src/app/office/settings/editModals/edit-batch-modal/edit-batch-modal.page.ts");

    var EditBatchModalPageModule = function EditBatchModalPageModule() {
      _classCallCheck(this, EditBatchModalPageModule);
    };

    EditBatchModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_batch_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditBatchModalPageRoutingModule"]],
      declarations: [_edit_batch_modal_page__WEBPACK_IMPORTED_MODULE_6__["EditBatchModalPage"]]
    })], EditBatchModalPageModule);
    /***/
  },

  /***/
  "./src/app/office/settings/editModals/edit-batch-modal/edit-batch-modal.page.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/office/settings/editModals/edit-batch-modal/edit-batch-modal.page.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOfficeSettingsEditModalsEditBatchModalEditBatchModalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29mZmljZS9zZXR0aW5ncy9lZGl0TW9kYWxzL2VkaXQtYmF0Y2gtbW9kYWwvZWRpdC1iYXRjaC1tb2RhbC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/office/settings/editModals/edit-batch-modal/edit-batch-modal.page.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/office/settings/editModals/edit-batch-modal/edit-batch-modal.page.ts ***!
    \**************************************************************************************/

  /*! exports provided: EditBatchModalPage */

  /***/
  function srcAppOfficeSettingsEditModalsEditBatchModalEditBatchModalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditBatchModalPage", function () {
      return EditBatchModalPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var EditBatchModalPage = /*#__PURE__*/function () {
      function EditBatchModalPage(modalController) {
        _classCallCheck(this, EditBatchModalPage);

        this.modalController = modalController;
      }

      _createClass(EditBatchModalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeEditBatchModal",
        value: function closeEditBatchModal() {
          this.modalController.dismiss();
        }
      }]);

      return EditBatchModalPage;
    }();

    EditBatchModalPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    EditBatchModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-batch-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-batch-modal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/office/settings/editModals/edit-batch-modal/edit-batch-modal.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-batch-modal.page.scss */
      "./src/app/office/settings/editModals/edit-batch-modal/edit-batch-modal.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], EditBatchModalPage);
    /***/
  },

  /***/
  "./src/app/office/settings/editModals/edit-credit-weighting-modal/edit-credit-weighting-modal-routing.module.ts":
  /*!**********************************************************************************************************************!*\
    !*** ./src/app/office/settings/editModals/edit-credit-weighting-modal/edit-credit-weighting-modal-routing.module.ts ***!
    \**********************************************************************************************************************/

  /*! exports provided: EditCreditWeightingModalPageRoutingModule */

  /***/
  function srcAppOfficeSettingsEditModalsEditCreditWeightingModalEditCreditWeightingModalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditCreditWeightingModalPageRoutingModule", function () {
      return EditCreditWeightingModalPageRoutingModule;
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


    var _edit_credit_weighting_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./edit-credit-weighting-modal.page */
    "./src/app/office/settings/editModals/edit-credit-weighting-modal/edit-credit-weighting-modal.page.ts");

    var routes = [{
      path: '',
      component: _edit_credit_weighting_modal_page__WEBPACK_IMPORTED_MODULE_3__["EditCreditWeightingModalPage"]
    }];

    var EditCreditWeightingModalPageRoutingModule = function EditCreditWeightingModalPageRoutingModule() {
      _classCallCheck(this, EditCreditWeightingModalPageRoutingModule);
    };

    EditCreditWeightingModalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditCreditWeightingModalPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/office/settings/editModals/edit-credit-weighting-modal/edit-credit-weighting-modal.module.ts":
  /*!**************************************************************************************************************!*\
    !*** ./src/app/office/settings/editModals/edit-credit-weighting-modal/edit-credit-weighting-modal.module.ts ***!
    \**************************************************************************************************************/

  /*! exports provided: EditCreditWeightingModalPageModule */

  /***/
  function srcAppOfficeSettingsEditModalsEditCreditWeightingModalEditCreditWeightingModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditCreditWeightingModalPageModule", function () {
      return EditCreditWeightingModalPageModule;
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


    var _edit_credit_weighting_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit-credit-weighting-modal-routing.module */
    "./src/app/office/settings/editModals/edit-credit-weighting-modal/edit-credit-weighting-modal-routing.module.ts");
    /* harmony import */


    var _edit_credit_weighting_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit-credit-weighting-modal.page */
    "./src/app/office/settings/editModals/edit-credit-weighting-modal/edit-credit-weighting-modal.page.ts");

    var EditCreditWeightingModalPageModule = function EditCreditWeightingModalPageModule() {
      _classCallCheck(this, EditCreditWeightingModalPageModule);
    };

    EditCreditWeightingModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_credit_weighting_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditCreditWeightingModalPageRoutingModule"]],
      declarations: [_edit_credit_weighting_modal_page__WEBPACK_IMPORTED_MODULE_6__["EditCreditWeightingModalPage"]]
    })], EditCreditWeightingModalPageModule);
    /***/
  },

  /***/
  "./src/app/office/settings/editModals/edit-credit-weighting-modal/edit-credit-weighting-modal.page.scss":
  /*!**************************************************************************************************************!*\
    !*** ./src/app/office/settings/editModals/edit-credit-weighting-modal/edit-credit-weighting-modal.page.scss ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOfficeSettingsEditModalsEditCreditWeightingModalEditCreditWeightingModalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29mZmljZS9zZXR0aW5ncy9lZGl0TW9kYWxzL2VkaXQtY3JlZGl0LXdlaWdodGluZy1tb2RhbC9lZGl0LWNyZWRpdC13ZWlnaHRpbmctbW9kYWwucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/office/settings/editModals/edit-credit-weighting-modal/edit-credit-weighting-modal.page.ts":
  /*!************************************************************************************************************!*\
    !*** ./src/app/office/settings/editModals/edit-credit-weighting-modal/edit-credit-weighting-modal.page.ts ***!
    \************************************************************************************************************/

  /*! exports provided: EditCreditWeightingModalPage */

  /***/
  function srcAppOfficeSettingsEditModalsEditCreditWeightingModalEditCreditWeightingModalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditCreditWeightingModalPage", function () {
      return EditCreditWeightingModalPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var EditCreditWeightingModalPage = /*#__PURE__*/function () {
      function EditCreditWeightingModalPage(modalController) {
        _classCallCheck(this, EditCreditWeightingModalPage);

        this.modalController = modalController;
      }

      _createClass(EditCreditWeightingModalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeEditCreditWeightingModal",
        value: function closeEditCreditWeightingModal() {
          this.modalController.dismiss();
        }
      }]);

      return EditCreditWeightingModalPage;
    }();

    EditCreditWeightingModalPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    EditCreditWeightingModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-credit-weighting-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-credit-weighting-modal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/office/settings/editModals/edit-credit-weighting-modal/edit-credit-weighting-modal.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-credit-weighting-modal.page.scss */
      "./src/app/office/settings/editModals/edit-credit-weighting-modal/edit-credit-weighting-modal.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], EditCreditWeightingModalPage);
    /***/
  },

  /***/
  "./src/app/office/settings/editModals/edit-degree-program-modal/edit-degree-program-modal-routing.module.ts":
  /*!******************************************************************************************************************!*\
    !*** ./src/app/office/settings/editModals/edit-degree-program-modal/edit-degree-program-modal-routing.module.ts ***!
    \******************************************************************************************************************/

  /*! exports provided: EditDegreeProgramModalPageRoutingModule */

  /***/
  function srcAppOfficeSettingsEditModalsEditDegreeProgramModalEditDegreeProgramModalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditDegreeProgramModalPageRoutingModule", function () {
      return EditDegreeProgramModalPageRoutingModule;
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


    var _edit_degree_program_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./edit-degree-program-modal.page */
    "./src/app/office/settings/editModals/edit-degree-program-modal/edit-degree-program-modal.page.ts");

    var routes = [{
      path: '',
      component: _edit_degree_program_modal_page__WEBPACK_IMPORTED_MODULE_3__["EditDegreeProgramModalPage"]
    }];

    var EditDegreeProgramModalPageRoutingModule = function EditDegreeProgramModalPageRoutingModule() {
      _classCallCheck(this, EditDegreeProgramModalPageRoutingModule);
    };

    EditDegreeProgramModalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditDegreeProgramModalPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/office/settings/editModals/edit-degree-program-modal/edit-degree-program-modal.module.ts":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/office/settings/editModals/edit-degree-program-modal/edit-degree-program-modal.module.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: EditDegreeProgramModalPageModule */

  /***/
  function srcAppOfficeSettingsEditModalsEditDegreeProgramModalEditDegreeProgramModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditDegreeProgramModalPageModule", function () {
      return EditDegreeProgramModalPageModule;
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


    var _edit_degree_program_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit-degree-program-modal-routing.module */
    "./src/app/office/settings/editModals/edit-degree-program-modal/edit-degree-program-modal-routing.module.ts");
    /* harmony import */


    var _edit_degree_program_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit-degree-program-modal.page */
    "./src/app/office/settings/editModals/edit-degree-program-modal/edit-degree-program-modal.page.ts");

    var EditDegreeProgramModalPageModule = function EditDegreeProgramModalPageModule() {
      _classCallCheck(this, EditDegreeProgramModalPageModule);
    };

    EditDegreeProgramModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_degree_program_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditDegreeProgramModalPageRoutingModule"]],
      declarations: [_edit_degree_program_modal_page__WEBPACK_IMPORTED_MODULE_6__["EditDegreeProgramModalPage"]]
    })], EditDegreeProgramModalPageModule);
    /***/
  },

  /***/
  "./src/app/office/settings/editModals/edit-degree-program-modal/edit-degree-program-modal.page.scss":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/office/settings/editModals/edit-degree-program-modal/edit-degree-program-modal.page.scss ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOfficeSettingsEditModalsEditDegreeProgramModalEditDegreeProgramModalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29mZmljZS9zZXR0aW5ncy9lZGl0TW9kYWxzL2VkaXQtZGVncmVlLXByb2dyYW0tbW9kYWwvZWRpdC1kZWdyZWUtcHJvZ3JhbS1tb2RhbC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/office/settings/editModals/edit-degree-program-modal/edit-degree-program-modal.page.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/office/settings/editModals/edit-degree-program-modal/edit-degree-program-modal.page.ts ***!
    \********************************************************************************************************/

  /*! exports provided: EditDegreeProgramModalPage */

  /***/
  function srcAppOfficeSettingsEditModalsEditDegreeProgramModalEditDegreeProgramModalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditDegreeProgramModalPage", function () {
      return EditDegreeProgramModalPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var EditDegreeProgramModalPage = /*#__PURE__*/function () {
      function EditDegreeProgramModalPage(modalController) {
        _classCallCheck(this, EditDegreeProgramModalPage);

        this.modalController = modalController;
      }

      _createClass(EditDegreeProgramModalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeEditDegreeProgramModal",
        value: function closeEditDegreeProgramModal() {
          this.modalController.dismiss();
        }
      }]);

      return EditDegreeProgramModalPage;
    }();

    EditDegreeProgramModalPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    EditDegreeProgramModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-degree-program-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-degree-program-modal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/office/settings/editModals/edit-degree-program-modal/edit-degree-program-modal.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-degree-program-modal.page.scss */
      "./src/app/office/settings/editModals/edit-degree-program-modal/edit-degree-program-modal.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], EditDegreeProgramModalPage);
    /***/
  },

  /***/
  "./src/app/office/settings/editModals/edit-lecture-hall-modal/edit-lecture-hall-modal-routing.module.ts":
  /*!**************************************************************************************************************!*\
    !*** ./src/app/office/settings/editModals/edit-lecture-hall-modal/edit-lecture-hall-modal-routing.module.ts ***!
    \**************************************************************************************************************/

  /*! exports provided: EditLectureHallModalPageRoutingModule */

  /***/
  function srcAppOfficeSettingsEditModalsEditLectureHallModalEditLectureHallModalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditLectureHallModalPageRoutingModule", function () {
      return EditLectureHallModalPageRoutingModule;
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


    var _edit_lecture_hall_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./edit-lecture-hall-modal.page */
    "./src/app/office/settings/editModals/edit-lecture-hall-modal/edit-lecture-hall-modal.page.ts");

    var routes = [{
      path: '',
      component: _edit_lecture_hall_modal_page__WEBPACK_IMPORTED_MODULE_3__["EditLectureHallModalPage"]
    }];

    var EditLectureHallModalPageRoutingModule = function EditLectureHallModalPageRoutingModule() {
      _classCallCheck(this, EditLectureHallModalPageRoutingModule);
    };

    EditLectureHallModalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditLectureHallModalPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/office/settings/editModals/edit-lecture-hall-modal/edit-lecture-hall-modal.module.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/office/settings/editModals/edit-lecture-hall-modal/edit-lecture-hall-modal.module.ts ***!
    \******************************************************************************************************/

  /*! exports provided: EditLectureHallModalPageModule */

  /***/
  function srcAppOfficeSettingsEditModalsEditLectureHallModalEditLectureHallModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditLectureHallModalPageModule", function () {
      return EditLectureHallModalPageModule;
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


    var _edit_lecture_hall_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit-lecture-hall-modal-routing.module */
    "./src/app/office/settings/editModals/edit-lecture-hall-modal/edit-lecture-hall-modal-routing.module.ts");
    /* harmony import */


    var _edit_lecture_hall_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit-lecture-hall-modal.page */
    "./src/app/office/settings/editModals/edit-lecture-hall-modal/edit-lecture-hall-modal.page.ts");

    var EditLectureHallModalPageModule = function EditLectureHallModalPageModule() {
      _classCallCheck(this, EditLectureHallModalPageModule);
    };

    EditLectureHallModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_lecture_hall_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditLectureHallModalPageRoutingModule"]],
      declarations: [_edit_lecture_hall_modal_page__WEBPACK_IMPORTED_MODULE_6__["EditLectureHallModalPage"]]
    })], EditLectureHallModalPageModule);
    /***/
  },

  /***/
  "./src/app/office/settings/editModals/edit-lecture-hall-modal/edit-lecture-hall-modal.page.scss":
  /*!******************************************************************************************************!*\
    !*** ./src/app/office/settings/editModals/edit-lecture-hall-modal/edit-lecture-hall-modal.page.scss ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOfficeSettingsEditModalsEditLectureHallModalEditLectureHallModalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29mZmljZS9zZXR0aW5ncy9lZGl0TW9kYWxzL2VkaXQtbGVjdHVyZS1oYWxsLW1vZGFsL2VkaXQtbGVjdHVyZS1oYWxsLW1vZGFsLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/office/settings/editModals/edit-lecture-hall-modal/edit-lecture-hall-modal.page.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/office/settings/editModals/edit-lecture-hall-modal/edit-lecture-hall-modal.page.ts ***!
    \****************************************************************************************************/

  /*! exports provided: EditLectureHallModalPage */

  /***/
  function srcAppOfficeSettingsEditModalsEditLectureHallModalEditLectureHallModalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditLectureHallModalPage", function () {
      return EditLectureHallModalPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var EditLectureHallModalPage = /*#__PURE__*/function () {
      function EditLectureHallModalPage(modalController) {
        _classCallCheck(this, EditLectureHallModalPage);

        this.modalController = modalController;
      }

      _createClass(EditLectureHallModalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeEditLectureHallModal",
        value: function closeEditLectureHallModal() {
          this.modalController.dismiss();
        }
      }]);

      return EditLectureHallModalPage;
    }();

    EditLectureHallModalPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    EditLectureHallModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-lecture-hall-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-lecture-hall-modal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/office/settings/editModals/edit-lecture-hall-modal/edit-lecture-hall-modal.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-lecture-hall-modal.page.scss */
      "./src/app/office/settings/editModals/edit-lecture-hall-modal/edit-lecture-hall-modal.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], EditLectureHallModalPage);
    /***/
  },

  /***/
  "./src/app/office/settings/editModals/edit-lecture-session-status-modal/edit-lecture-session-status-modal-routing.module.ts":
  /*!**********************************************************************************************************************************!*\
    !*** ./src/app/office/settings/editModals/edit-lecture-session-status-modal/edit-lecture-session-status-modal-routing.module.ts ***!
    \**********************************************************************************************************************************/

  /*! exports provided: EditLectureSessionStatusModalPageRoutingModule */

  /***/
  function srcAppOfficeSettingsEditModalsEditLectureSessionStatusModalEditLectureSessionStatusModalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditLectureSessionStatusModalPageRoutingModule", function () {
      return EditLectureSessionStatusModalPageRoutingModule;
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


    var _edit_lecture_session_status_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./edit-lecture-session-status-modal.page */
    "./src/app/office/settings/editModals/edit-lecture-session-status-modal/edit-lecture-session-status-modal.page.ts");

    var routes = [{
      path: '',
      component: _edit_lecture_session_status_modal_page__WEBPACK_IMPORTED_MODULE_3__["EditLectureSessionStatusModalPage"]
    }];

    var EditLectureSessionStatusModalPageRoutingModule = function EditLectureSessionStatusModalPageRoutingModule() {
      _classCallCheck(this, EditLectureSessionStatusModalPageRoutingModule);
    };

    EditLectureSessionStatusModalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditLectureSessionStatusModalPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/office/settings/editModals/edit-lecture-session-status-modal/edit-lecture-session-status-modal.module.ts":
  /*!**************************************************************************************************************************!*\
    !*** ./src/app/office/settings/editModals/edit-lecture-session-status-modal/edit-lecture-session-status-modal.module.ts ***!
    \**************************************************************************************************************************/

  /*! exports provided: EditLectureSessionStatusModalPageModule */

  /***/
  function srcAppOfficeSettingsEditModalsEditLectureSessionStatusModalEditLectureSessionStatusModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditLectureSessionStatusModalPageModule", function () {
      return EditLectureSessionStatusModalPageModule;
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


    var _edit_lecture_session_status_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit-lecture-session-status-modal-routing.module */
    "./src/app/office/settings/editModals/edit-lecture-session-status-modal/edit-lecture-session-status-modal-routing.module.ts");
    /* harmony import */


    var _edit_lecture_session_status_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit-lecture-session-status-modal.page */
    "./src/app/office/settings/editModals/edit-lecture-session-status-modal/edit-lecture-session-status-modal.page.ts");

    var EditLectureSessionStatusModalPageModule = function EditLectureSessionStatusModalPageModule() {
      _classCallCheck(this, EditLectureSessionStatusModalPageModule);
    };

    EditLectureSessionStatusModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_lecture_session_status_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditLectureSessionStatusModalPageRoutingModule"]],
      declarations: [_edit_lecture_session_status_modal_page__WEBPACK_IMPORTED_MODULE_6__["EditLectureSessionStatusModalPage"]]
    })], EditLectureSessionStatusModalPageModule);
    /***/
  },

  /***/
  "./src/app/office/settings/editModals/edit-lecture-session-status-modal/edit-lecture-session-status-modal.page.scss":
  /*!**************************************************************************************************************************!*\
    !*** ./src/app/office/settings/editModals/edit-lecture-session-status-modal/edit-lecture-session-status-modal.page.scss ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOfficeSettingsEditModalsEditLectureSessionStatusModalEditLectureSessionStatusModalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29mZmljZS9zZXR0aW5ncy9lZGl0TW9kYWxzL2VkaXQtbGVjdHVyZS1zZXNzaW9uLXN0YXR1cy1tb2RhbC9lZGl0LWxlY3R1cmUtc2Vzc2lvbi1zdGF0dXMtbW9kYWwucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/office/settings/editModals/edit-lecture-session-status-modal/edit-lecture-session-status-modal.page.ts":
  /*!************************************************************************************************************************!*\
    !*** ./src/app/office/settings/editModals/edit-lecture-session-status-modal/edit-lecture-session-status-modal.page.ts ***!
    \************************************************************************************************************************/

  /*! exports provided: EditLectureSessionStatusModalPage */

  /***/
  function srcAppOfficeSettingsEditModalsEditLectureSessionStatusModalEditLectureSessionStatusModalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditLectureSessionStatusModalPage", function () {
      return EditLectureSessionStatusModalPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var EditLectureSessionStatusModalPage = /*#__PURE__*/function () {
      function EditLectureSessionStatusModalPage(modalController) {
        _classCallCheck(this, EditLectureSessionStatusModalPage);

        this.modalController = modalController;
      }

      _createClass(EditLectureSessionStatusModalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeEditLectureSessionStatusModal",
        value: function closeEditLectureSessionStatusModal() {
          this.modalController.dismiss();
        }
      }]);

      return EditLectureSessionStatusModalPage;
    }();

    EditLectureSessionStatusModalPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    EditLectureSessionStatusModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-lecture-session-status-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-lecture-session-status-modal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/office/settings/editModals/edit-lecture-session-status-modal/edit-lecture-session-status-modal.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-lecture-session-status-modal.page.scss */
      "./src/app/office/settings/editModals/edit-lecture-session-status-modal/edit-lecture-session-status-modal.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], EditLectureSessionStatusModalPage);
    /***/
  },

  /***/
  "./src/app/office/settings/editModals/edit-notice-category-modal/edit-notice-category-modal-routing.module.ts":
  /*!********************************************************************************************************************!*\
    !*** ./src/app/office/settings/editModals/edit-notice-category-modal/edit-notice-category-modal-routing.module.ts ***!
    \********************************************************************************************************************/

  /*! exports provided: EditNoticeCategoryModalPageRoutingModule */

  /***/
  function srcAppOfficeSettingsEditModalsEditNoticeCategoryModalEditNoticeCategoryModalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditNoticeCategoryModalPageRoutingModule", function () {
      return EditNoticeCategoryModalPageRoutingModule;
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


    var _edit_notice_category_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./edit-notice-category-modal.page */
    "./src/app/office/settings/editModals/edit-notice-category-modal/edit-notice-category-modal.page.ts");

    var routes = [{
      path: '',
      component: _edit_notice_category_modal_page__WEBPACK_IMPORTED_MODULE_3__["EditNoticeCategoryModalPage"]
    }];

    var EditNoticeCategoryModalPageRoutingModule = function EditNoticeCategoryModalPageRoutingModule() {
      _classCallCheck(this, EditNoticeCategoryModalPageRoutingModule);
    };

    EditNoticeCategoryModalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditNoticeCategoryModalPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/office/settings/editModals/edit-notice-category-modal/edit-notice-category-modal.module.ts":
  /*!************************************************************************************************************!*\
    !*** ./src/app/office/settings/editModals/edit-notice-category-modal/edit-notice-category-modal.module.ts ***!
    \************************************************************************************************************/

  /*! exports provided: EditNoticeCategoryModalPageModule */

  /***/
  function srcAppOfficeSettingsEditModalsEditNoticeCategoryModalEditNoticeCategoryModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditNoticeCategoryModalPageModule", function () {
      return EditNoticeCategoryModalPageModule;
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


    var _edit_notice_category_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit-notice-category-modal-routing.module */
    "./src/app/office/settings/editModals/edit-notice-category-modal/edit-notice-category-modal-routing.module.ts");
    /* harmony import */


    var _edit_notice_category_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit-notice-category-modal.page */
    "./src/app/office/settings/editModals/edit-notice-category-modal/edit-notice-category-modal.page.ts");

    var EditNoticeCategoryModalPageModule = function EditNoticeCategoryModalPageModule() {
      _classCallCheck(this, EditNoticeCategoryModalPageModule);
    };

    EditNoticeCategoryModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_notice_category_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditNoticeCategoryModalPageRoutingModule"]],
      declarations: [_edit_notice_category_modal_page__WEBPACK_IMPORTED_MODULE_6__["EditNoticeCategoryModalPage"]]
    })], EditNoticeCategoryModalPageModule);
    /***/
  },

  /***/
  "./src/app/office/settings/editModals/edit-notice-category-modal/edit-notice-category-modal.page.scss":
  /*!************************************************************************************************************!*\
    !*** ./src/app/office/settings/editModals/edit-notice-category-modal/edit-notice-category-modal.page.scss ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOfficeSettingsEditModalsEditNoticeCategoryModalEditNoticeCategoryModalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29mZmljZS9zZXR0aW5ncy9lZGl0TW9kYWxzL2VkaXQtbm90aWNlLWNhdGVnb3J5LW1vZGFsL2VkaXQtbm90aWNlLWNhdGVnb3J5LW1vZGFsLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/office/settings/editModals/edit-notice-category-modal/edit-notice-category-modal.page.ts":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/office/settings/editModals/edit-notice-category-modal/edit-notice-category-modal.page.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: EditNoticeCategoryModalPage */

  /***/
  function srcAppOfficeSettingsEditModalsEditNoticeCategoryModalEditNoticeCategoryModalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditNoticeCategoryModalPage", function () {
      return EditNoticeCategoryModalPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var EditNoticeCategoryModalPage = /*#__PURE__*/function () {
      function EditNoticeCategoryModalPage(modalController) {
        _classCallCheck(this, EditNoticeCategoryModalPage);

        this.modalController = modalController;
      }

      _createClass(EditNoticeCategoryModalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeEditNoticeCategory",
        value: function closeEditNoticeCategory() {
          this.modalController.dismiss();
        }
      }]);

      return EditNoticeCategoryModalPage;
    }();

    EditNoticeCategoryModalPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    EditNoticeCategoryModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-notice-category-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-notice-category-modal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/office/settings/editModals/edit-notice-category-modal/edit-notice-category-modal.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-notice-category-modal.page.scss */
      "./src/app/office/settings/editModals/edit-notice-category-modal/edit-notice-category-modal.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], EditNoticeCategoryModalPage);
    /***/
  },

  /***/
  "./src/app/office/settings/editModals/edit-user-account-status-modal/edit-user-account-status-modal-routing.module.ts":
  /*!****************************************************************************************************************************!*\
    !*** ./src/app/office/settings/editModals/edit-user-account-status-modal/edit-user-account-status-modal-routing.module.ts ***!
    \****************************************************************************************************************************/

  /*! exports provided: EditUserAccountStatusModalPageRoutingModule */

  /***/
  function srcAppOfficeSettingsEditModalsEditUserAccountStatusModalEditUserAccountStatusModalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditUserAccountStatusModalPageRoutingModule", function () {
      return EditUserAccountStatusModalPageRoutingModule;
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


    var _edit_user_account_status_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./edit-user-account-status-modal.page */
    "./src/app/office/settings/editModals/edit-user-account-status-modal/edit-user-account-status-modal.page.ts");

    var routes = [{
      path: '',
      component: _edit_user_account_status_modal_page__WEBPACK_IMPORTED_MODULE_3__["EditUserAccountStatusModalPage"]
    }];

    var EditUserAccountStatusModalPageRoutingModule = function EditUserAccountStatusModalPageRoutingModule() {
      _classCallCheck(this, EditUserAccountStatusModalPageRoutingModule);
    };

    EditUserAccountStatusModalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditUserAccountStatusModalPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/office/settings/editModals/edit-user-account-status-modal/edit-user-account-status-modal.module.ts":
  /*!********************************************************************************************************************!*\
    !*** ./src/app/office/settings/editModals/edit-user-account-status-modal/edit-user-account-status-modal.module.ts ***!
    \********************************************************************************************************************/

  /*! exports provided: EditUserAccountStatusModalPageModule */

  /***/
  function srcAppOfficeSettingsEditModalsEditUserAccountStatusModalEditUserAccountStatusModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditUserAccountStatusModalPageModule", function () {
      return EditUserAccountStatusModalPageModule;
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


    var _edit_user_account_status_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit-user-account-status-modal-routing.module */
    "./src/app/office/settings/editModals/edit-user-account-status-modal/edit-user-account-status-modal-routing.module.ts");
    /* harmony import */


    var _edit_user_account_status_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit-user-account-status-modal.page */
    "./src/app/office/settings/editModals/edit-user-account-status-modal/edit-user-account-status-modal.page.ts");

    var EditUserAccountStatusModalPageModule = function EditUserAccountStatusModalPageModule() {
      _classCallCheck(this, EditUserAccountStatusModalPageModule);
    };

    EditUserAccountStatusModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_user_account_status_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditUserAccountStatusModalPageRoutingModule"]],
      declarations: [_edit_user_account_status_modal_page__WEBPACK_IMPORTED_MODULE_6__["EditUserAccountStatusModalPage"]]
    })], EditUserAccountStatusModalPageModule);
    /***/
  },

  /***/
  "./src/app/office/settings/editModals/edit-user-account-status-modal/edit-user-account-status-modal.page.scss":
  /*!********************************************************************************************************************!*\
    !*** ./src/app/office/settings/editModals/edit-user-account-status-modal/edit-user-account-status-modal.page.scss ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOfficeSettingsEditModalsEditUserAccountStatusModalEditUserAccountStatusModalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29mZmljZS9zZXR0aW5ncy9lZGl0TW9kYWxzL2VkaXQtdXNlci1hY2NvdW50LXN0YXR1cy1tb2RhbC9lZGl0LXVzZXItYWNjb3VudC1zdGF0dXMtbW9kYWwucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/office/settings/editModals/edit-user-account-status-modal/edit-user-account-status-modal.page.ts":
  /*!******************************************************************************************************************!*\
    !*** ./src/app/office/settings/editModals/edit-user-account-status-modal/edit-user-account-status-modal.page.ts ***!
    \******************************************************************************************************************/

  /*! exports provided: EditUserAccountStatusModalPage */

  /***/
  function srcAppOfficeSettingsEditModalsEditUserAccountStatusModalEditUserAccountStatusModalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditUserAccountStatusModalPage", function () {
      return EditUserAccountStatusModalPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var EditUserAccountStatusModalPage = /*#__PURE__*/function () {
      function EditUserAccountStatusModalPage(modalController) {
        _classCallCheck(this, EditUserAccountStatusModalPage);

        this.modalController = modalController;
      }

      _createClass(EditUserAccountStatusModalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeEditUserAccountStatus",
        value: function closeEditUserAccountStatus() {
          this.modalController.dismiss();
        }
      }]);

      return EditUserAccountStatusModalPage;
    }();

    EditUserAccountStatusModalPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    EditUserAccountStatusModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-user-account-status-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-user-account-status-modal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/office/settings/editModals/edit-user-account-status-modal/edit-user-account-status-modal.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-user-account-status-modal.page.scss */
      "./src/app/office/settings/editModals/edit-user-account-status-modal/edit-user-account-status-modal.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], EditUserAccountStatusModalPage);
    /***/
  },

  /***/
  "./src/app/office/settings/more-information-popover/more-information-popover-routing.module.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/office/settings/more-information-popover/more-information-popover-routing.module.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: MoreInformationPopoverPageRoutingModule */

  /***/
  function srcAppOfficeSettingsMoreInformationPopoverMoreInformationPopoverRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoreInformationPopoverPageRoutingModule", function () {
      return MoreInformationPopoverPageRoutingModule;
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


    var _more_information_popover_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./more-information-popover.page */
    "./src/app/office/settings/more-information-popover/more-information-popover.page.ts");

    var routes = [{
      path: '',
      component: _more_information_popover_page__WEBPACK_IMPORTED_MODULE_3__["MoreInformationPopoverPage"]
    }];

    var MoreInformationPopoverPageRoutingModule = function MoreInformationPopoverPageRoutingModule() {
      _classCallCheck(this, MoreInformationPopoverPageRoutingModule);
    };

    MoreInformationPopoverPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MoreInformationPopoverPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/office/settings/more-information-popover/more-information-popover.module.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/office/settings/more-information-popover/more-information-popover.module.ts ***!
    \*********************************************************************************************/

  /*! exports provided: MoreInformationPopoverPageModule */

  /***/
  function srcAppOfficeSettingsMoreInformationPopoverMoreInformationPopoverModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoreInformationPopoverPageModule", function () {
      return MoreInformationPopoverPageModule;
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


    var _more_information_popover_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./more-information-popover-routing.module */
    "./src/app/office/settings/more-information-popover/more-information-popover-routing.module.ts");
    /* harmony import */


    var _more_information_popover_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./more-information-popover.page */
    "./src/app/office/settings/more-information-popover/more-information-popover.page.ts");

    var MoreInformationPopoverPageModule = function MoreInformationPopoverPageModule() {
      _classCallCheck(this, MoreInformationPopoverPageModule);
    };

    MoreInformationPopoverPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _more_information_popover_routing_module__WEBPACK_IMPORTED_MODULE_5__["MoreInformationPopoverPageRoutingModule"]],
      declarations: [_more_information_popover_page__WEBPACK_IMPORTED_MODULE_6__["MoreInformationPopoverPage"]]
    })], MoreInformationPopoverPageModule);
    /***/
  },

  /***/
  "./src/app/office/settings/more-information-popover/more-information-popover.page.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/app/office/settings/more-information-popover/more-information-popover.page.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOfficeSettingsMoreInformationPopoverMoreInformationPopoverPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29mZmljZS9zZXR0aW5ncy9tb3JlLWluZm9ybWF0aW9uLXBvcG92ZXIvbW9yZS1pbmZvcm1hdGlvbi1wb3BvdmVyLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/office/settings/more-information-popover/more-information-popover.page.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/office/settings/more-information-popover/more-information-popover.page.ts ***!
    \*******************************************************************************************/

  /*! exports provided: MoreInformationPopoverPage */

  /***/
  function srcAppOfficeSettingsMoreInformationPopoverMoreInformationPopoverPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoreInformationPopoverPage", function () {
      return MoreInformationPopoverPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var MoreInformationPopoverPage = /*#__PURE__*/function () {
      function MoreInformationPopoverPage(popoverController) {
        _classCallCheck(this, MoreInformationPopoverPage);

        this.popoverController = popoverController;
      }

      _createClass(MoreInformationPopoverPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MoreInformationPopoverPage;
    }();

    MoreInformationPopoverPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    MoreInformationPopoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-more-information-popover',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./more-information-popover.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/office/settings/more-information-popover/more-information-popover.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./more-information-popover.page.scss */
      "./src/app/office/settings/more-information-popover/more-information-popover.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], MoreInformationPopoverPage);
    /***/
  },

  /***/
  "./src/app/office/settings/update-account-details-modal/update-account-details-modal-routing.module.ts":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/office/settings/update-account-details-modal/update-account-details-modal-routing.module.ts ***!
    \*************************************************************************************************************/

  /*! exports provided: UpdateAccountDetailsModalPageRoutingModule */

  /***/
  function srcAppOfficeSettingsUpdateAccountDetailsModalUpdateAccountDetailsModalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateAccountDetailsModalPageRoutingModule", function () {
      return UpdateAccountDetailsModalPageRoutingModule;
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


    var _update_account_details_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./update-account-details-modal.page */
    "./src/app/office/settings/update-account-details-modal/update-account-details-modal.page.ts");

    var routes = [{
      path: '',
      component: _update_account_details_modal_page__WEBPACK_IMPORTED_MODULE_3__["UpdateAccountDetailsModalPage"]
    }];

    var UpdateAccountDetailsModalPageRoutingModule = function UpdateAccountDetailsModalPageRoutingModule() {
      _classCallCheck(this, UpdateAccountDetailsModalPageRoutingModule);
    };

    UpdateAccountDetailsModalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UpdateAccountDetailsModalPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/office/settings/update-account-details-modal/update-account-details-modal.module.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/office/settings/update-account-details-modal/update-account-details-modal.module.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: UpdateAccountDetailsModalPageModule */

  /***/
  function srcAppOfficeSettingsUpdateAccountDetailsModalUpdateAccountDetailsModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateAccountDetailsModalPageModule", function () {
      return UpdateAccountDetailsModalPageModule;
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


    var _update_account_details_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./update-account-details-modal-routing.module */
    "./src/app/office/settings/update-account-details-modal/update-account-details-modal-routing.module.ts");
    /* harmony import */


    var _update_account_details_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./update-account-details-modal.page */
    "./src/app/office/settings/update-account-details-modal/update-account-details-modal.page.ts");

    var UpdateAccountDetailsModalPageModule = function UpdateAccountDetailsModalPageModule() {
      _classCallCheck(this, UpdateAccountDetailsModalPageModule);
    };

    UpdateAccountDetailsModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _update_account_details_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpdateAccountDetailsModalPageRoutingModule"]],
      declarations: [_update_account_details_modal_page__WEBPACK_IMPORTED_MODULE_6__["UpdateAccountDetailsModalPage"]]
    })], UpdateAccountDetailsModalPageModule);
    /***/
  },

  /***/
  "./src/app/office/settings/update-account-details-modal/update-account-details-modal.page.scss":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/office/settings/update-account-details-modal/update-account-details-modal.page.scss ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOfficeSettingsUpdateAccountDetailsModalUpdateAccountDetailsModalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --ion-background-color: rgb(243, 243, 243); }\n\nion-card {\n  --ion-background-color: white; }\n\nion-label {\n  color: black; }\n\nion-item {\n  border: #ccc solid 1px;\n  border-radius: 5px; }\n\n.editDetailsFormLabel {\n  position: relative;\n  top: 15px;\n  font-size: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ZmaWNlL3NldHRpbmdzL3VwZGF0ZS1hY2NvdW50LWRldGFpbHMtbW9kYWwvQzpcXFVzZXJzXFxyYW51bFxcRG9jdW1lbnRzXFxHaXRIdWJcXDJuZCBZZWFyXFwybmQgU2VtZXN0ZXJcXFVPUF9TRV9ZMlMyLVBVU0wyMDA4LUlOVFJPRFVDVElPTi1UTy1JTlRFUk5FVC1PRi1USElOR1NcXFdvcmtzcGFjZVxcaVNBTS9zcmNcXGFwcFxcb2ZmaWNlXFxzZXR0aW5nc1xcdXBkYXRlLWFjY291bnQtZGV0YWlscy1tb2RhbFxcdXBkYXRlLWFjY291bnQtZGV0YWlscy1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQ0FBdUIsRUFBQTs7QUFHM0I7RUFDSSw2QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksc0JBQXNCO0VBQ3RCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvb2ZmaWNlL3NldHRpbmdzL3VwZGF0ZS1hY2NvdW50LWRldGFpbHMtbW9kYWwvdXBkYXRlLWFjY291bnQtZGV0YWlscy1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDI0MywgMjQzKTtcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWxhYmVse1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5pb24taXRlbXtcclxuICAgIGJvcmRlcjogI2NjYyBzb2xpZCAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5lZGl0RGV0YWlsc0Zvcm1MYWJlbHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/office/settings/update-account-details-modal/update-account-details-modal.page.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/office/settings/update-account-details-modal/update-account-details-modal.page.ts ***!
    \***************************************************************************************************/

  /*! exports provided: UpdateAccountDetailsModalPage */

  /***/
  function srcAppOfficeSettingsUpdateAccountDetailsModalUpdateAccountDetailsModalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateAccountDetailsModalPage", function () {
      return UpdateAccountDetailsModalPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/firebase.service */
    "./src/app/services/firebase.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var UpdateAccountDetailsModalPage = /*#__PURE__*/function () {
      function UpdateAccountDetailsModalPage(modalController, updateAccountDetailsService, navParams, formBuilder, alertController) {
        var _this7 = this;

        _classCallCheck(this, UpdateAccountDetailsModalPage);

        this.modalController = modalController;
        this.updateAccountDetailsService = updateAccountDetailsService;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.passedLoggedInUserId = null;
        this.loadingSpinnerAccountDetails = true;

        this.retrieveLoggedInUserDetailsProgramOffice = function () {
          return _this7.updateAccountDetailsService.retrieveLoggedInUserDetailsProgramOffice(_this7.passedLoggedInUserId).subscribe(function (response) {
            _this7.loadingSpinnerAccountDetails = false;
            _this7.loggedInProgramOfficeUser = response.forEach(function (document) {
              var firestoreDoc = document.payload.doc.data(); // Assigning the values to the formgroup

              _this7.editAccountDetailsForm.setValue({
                prefixName: firestoreDoc.name.prefix,
                firstName: firestoreDoc.name.firstName,
                middleName: firestoreDoc.name.middleName,
                lastName: firestoreDoc.name.lastName,
                faculty: firestoreDoc.faculty
              });
            });
          });
        };
      }

      _createClass(UpdateAccountDetailsModalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.passedLoggedInUserId = this.navParams.get('loggedInUserId');
          this.retrieveLoggedInUserDetailsProgramOffice();
          this.editAccountDetailsForm = this.formBuilder.group({
            prefixName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            middleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            faculty: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
          });
        } // Process of updating account details

      }, {
        key: "doEditAccountDetails",
        value: function doEditAccountDetails(value) {
          var _this8 = this;

          this.updateAccountDetailsService.updateProgramOfficeUser(value, this.passedLoggedInUserId).then(function (response) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.alertNotice("Account Details Updated", "Your account details has been updated.");

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }, function (error) {
            _this8.alertNotice("Error", "An error has occurred: " + error);
          });
        } // Alert Box Implementation

      }, {
        key: "alertNotice",
        value: function alertNotice(title, content) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertController.create({
                      header: title,
                      message: content,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context4.sent;
                    _context4.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "closeEditAccountDetailsModal",
        value: function closeEditAccountDetailsModal() {
          this.modalController.dismiss();
        }
      }]);

      return UpdateAccountDetailsModalPage;
    }();

    UpdateAccountDetailsModalPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    UpdateAccountDetailsModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-update-account-details-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./update-account-details-modal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/office/settings/update-account-details-modal/update-account-details-modal.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./update-account-details-modal.page.scss */
      "./src/app/office/settings/update-account-details-modal/update-account-details-modal.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])], UpdateAccountDetailsModalPage);
    /***/
  },

  /***/
  "./src/app/office/settings/update-account-password-modal/update-account-password-modal-routing.module.ts":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/office/settings/update-account-password-modal/update-account-password-modal-routing.module.ts ***!
    \***************************************************************************************************************/

  /*! exports provided: UpdateAccountPasswordModalPageRoutingModule */

  /***/
  function srcAppOfficeSettingsUpdateAccountPasswordModalUpdateAccountPasswordModalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateAccountPasswordModalPageRoutingModule", function () {
      return UpdateAccountPasswordModalPageRoutingModule;
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


    var _update_account_password_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./update-account-password-modal.page */
    "./src/app/office/settings/update-account-password-modal/update-account-password-modal.page.ts");

    var routes = [{
      path: '',
      component: _update_account_password_modal_page__WEBPACK_IMPORTED_MODULE_3__["UpdateAccountPasswordModalPage"]
    }];

    var UpdateAccountPasswordModalPageRoutingModule = function UpdateAccountPasswordModalPageRoutingModule() {
      _classCallCheck(this, UpdateAccountPasswordModalPageRoutingModule);
    };

    UpdateAccountPasswordModalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UpdateAccountPasswordModalPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/office/settings/update-account-password-modal/update-account-password-modal.module.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/office/settings/update-account-password-modal/update-account-password-modal.module.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: UpdateAccountPasswordModalPageModule */

  /***/
  function srcAppOfficeSettingsUpdateAccountPasswordModalUpdateAccountPasswordModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateAccountPasswordModalPageModule", function () {
      return UpdateAccountPasswordModalPageModule;
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


    var _update_account_password_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./update-account-password-modal-routing.module */
    "./src/app/office/settings/update-account-password-modal/update-account-password-modal-routing.module.ts");
    /* harmony import */


    var _update_account_password_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./update-account-password-modal.page */
    "./src/app/office/settings/update-account-password-modal/update-account-password-modal.page.ts");

    var UpdateAccountPasswordModalPageModule = function UpdateAccountPasswordModalPageModule() {
      _classCallCheck(this, UpdateAccountPasswordModalPageModule);
    };

    UpdateAccountPasswordModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _update_account_password_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpdateAccountPasswordModalPageRoutingModule"]],
      declarations: [_update_account_password_modal_page__WEBPACK_IMPORTED_MODULE_6__["UpdateAccountPasswordModalPage"]]
    })], UpdateAccountPasswordModalPageModule);
    /***/
  },

  /***/
  "./src/app/office/settings/update-account-password-modal/update-account-password-modal.page.scss":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/office/settings/update-account-password-modal/update-account-password-modal.page.scss ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOfficeSettingsUpdateAccountPasswordModalUpdateAccountPasswordModalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --ion-background-color: rgb(243, 243, 243); }\n\nion-card {\n  --ion-background-color: white; }\n\nion-label {\n  color: black; }\n\nion-item {\n  border: #ccc solid 1px;\n  border-radius: 5px; }\n\n.editAccountPasswordFormLabel {\n  position: relative;\n  top: 15px;\n  font-size: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ZmaWNlL3NldHRpbmdzL3VwZGF0ZS1hY2NvdW50LXBhc3N3b3JkLW1vZGFsL0M6XFxVc2Vyc1xccmFudWxcXERvY3VtZW50c1xcR2l0SHViXFwybmQgWWVhclxcMm5kIFNlbWVzdGVyXFxVT1BfU0VfWTJTMi1QVVNMMjAwOC1JTlRST0RVQ1RJT04tVE8tSU5URVJORVQtT0YtVEhJTkdTXFxXb3Jrc3BhY2VcXGlTQU0vc3JjXFxhcHBcXG9mZmljZVxcc2V0dGluZ3NcXHVwZGF0ZS1hY2NvdW50LXBhc3N3b3JkLW1vZGFsXFx1cGRhdGUtYWNjb3VudC1wYXNzd29yZC1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQ0FBdUIsRUFBQTs7QUFHM0I7RUFDSSw2QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksc0JBQXNCO0VBQ3RCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvb2ZmaWNlL3NldHRpbmdzL3VwZGF0ZS1hY2NvdW50LXBhc3N3b3JkLW1vZGFsL3VwZGF0ZS1hY2NvdW50LXBhc3N3b3JkLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjQzLCAyNDMpO1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tbGFiZWx7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmlvbi1pdGVte1xyXG4gICAgYm9yZGVyOiAjY2NjIHNvbGlkIDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmVkaXRBY2NvdW50UGFzc3dvcmRGb3JtTGFiZWx7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/office/settings/update-account-password-modal/update-account-password-modal.page.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/office/settings/update-account-password-modal/update-account-password-modal.page.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: UpdateAccountPasswordModalPage */

  /***/
  function srcAppOfficeSettingsUpdateAccountPasswordModalUpdateAccountPasswordModalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateAccountPasswordModalPage", function () {
      return UpdateAccountPasswordModalPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _more_information_popover_more_information_popover_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../more-information-popover/more-information-popover.page */
    "./src/app/office/settings/more-information-popover/more-information-popover.page.ts");

    var UpdateAccountPasswordModalPage = /*#__PURE__*/function () {
      function UpdateAccountPasswordModalPage(modalController, formBuilder, alertController, popoverController) {
        _classCallCheck(this, UpdateAccountPasswordModalPage);

        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.popoverController = popoverController;
      }

      _createClass(UpdateAccountPasswordModalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updateAccountPasswordForm = this.formBuilder.group({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-zA-Z0-9]+[!@#$%^&*]?'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10)])),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-zA-Z0-9]+[!@#$%^&*]?'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10)]))
          });
        }
      }, {
        key: "doUpdateAccountPassword",
        value: function doUpdateAccountPassword(value) {
          // Checking if the entered password and confirm password is the same
          if (value.password == value.confirmPassword) {
            console.log("Password and Confirm Password is SAME");
          } else if (value.password != value.confirmPassword) {
            console.log("Password and Confirm Password is NOT SAME");
            this.alertNotice("Password Mismatch", "Entered passwords in fields are not the same. Please Recheck.");
          }
        } // Alert Box Implementation

      }, {
        key: "alertNotice",
        value: function alertNotice(title, content) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertController.create({
                      header: title,
                      message: content,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context5.sent;
                    _context5.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        } // Opening more information popover

      }, {
        key: "openMoreInformationPopover",
        value: function openMoreInformationPopover(ev) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var moreInformationPopover;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.popoverController.create({
                      component: _more_information_popover_more_information_popover_page__WEBPACK_IMPORTED_MODULE_4__["MoreInformationPopoverPage"],
                      event: ev
                    });

                  case 2:
                    moreInformationPopover = _context6.sent;
                    moreInformationPopover.present();

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "closeEditAccountPasswordModal",
        value: function closeEditAccountPasswordModal() {
          this.modalController.dismiss();
        }
      }]);

      return UpdateAccountPasswordModalPage;
    }();

    UpdateAccountPasswordModalPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    UpdateAccountPasswordModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-update-account-password-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./update-account-password-modal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/office/settings/update-account-password-modal/update-account-password-modal.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./update-account-password-modal.page.scss */
      "./src/app/office/settings/update-account-password-modal/update-account-password-modal.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], UpdateAccountPasswordModalPage);
    /***/
  },

  /***/
  "./src/app/services/firebase.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/firebase.service.ts ***!
    \**********************************************/

  /*! exports provided: FirebaseService */

  /***/
  function srcAppServicesFirebaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseService", function () {
      return FirebaseService;
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


    var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");

    var FirebaseService = /*#__PURE__*/function () {
      function FirebaseService(firestore) {
        _classCallCheck(this, FirebaseService);

        this.firestore = firestore;
        this.Date = new Date(); // Retriving the current date and time from the localhost

        this.currentDT = new Date();
        this.currentDateTime = this.currentDT.getDate() + "/" + this.currentDT.getMonth() + "/" + this.currentDT.getFullYear() + " " + this.currentDT.getHours() + ":" + this.currentDT.getMinutes() + ":" + this.currentDT.getSeconds();
        firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().onAuthStateChanged(function (user) {
          if (user) {
            // User is signed in.
            var user = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser;

            if (user != null) {
              user.providerData.forEach(function (profile) {
                //     console.log("Sign-in provider: " + profile.providerId);
                //     console.log("  Provider-specific UID: " + profile.uid);
                //     console.log("  Name: " + profile.displayName);
                //     console.log("  Email: " + profile.email);
                var userEmail = profile.email;
                var displayName = profile.displayName; // console.log("  Photo URL: " + profile.photoURL);
              });
            }
          } else {// No user is signed in.
            // console.log('User is NOT signed in');
          }
        });
      }

      _createClass(FirebaseService, [{
        key: "studentUsers",
        value: function studentUsers() {
          var user = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser;

          if (user != null) {
            user.providerData.forEach(function (profile) {
              this.displayName = this.authService.currentUser.displayName; // console.log("Sign-in provider: " + profile.providerId);
              // console.log("  Provider-specific UID: " + profile.uid);
              // console.log("  Name: " + profile.displayName);
              // console.log("  Email: " + profile.email);

              var userEmail = profile.email;
              var displayName = profile.displayName; // console.log("  Photo URL: " + profile.photoURL);

              return this.firestore.collection('users/userTypes/studentUsers').doc(this.displayName).snapshotChanges();
            });
          }
        }
      }, {
        key: "registerUser",
        value: function registerUser(value) {
          var _this9 = this;

          return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().createUserWithEmailAndPassword(value.email, value.password).then(function (success) {
              // console.log('Student Record Stored')
              _this9.firestore.collection('users/userTypes/studentUsers/').doc(success.user.uid).set({
                name: {
                  firstName: value.fName,
                  middleName: value.mName,
                  lastName: value.lName
                },
                email: value.email,
                nsbmStudentID: value.sid,
                degree: value.degree,
                batch: value.batch,
                uID: value.email,
                createdDateTime: new Date(),
                // ServerTime:firebase.firestore.FieldValue.serverTimestamp(),
                edited: {
                  editedByUID: [value.email],
                  editedDateTime: [new Date()],
                  editedSection: ["Initial Register"]
                },
                sessionDateTime: {
                  loginDateTime: [new Date()],
                  logoutDateTime: [new Date()],
                  accountActivity: "Offline"
                },
                faculty: value.faculty,
                accountStatus: "Active"
              });

              resolve(success);
            }, function (error) {
              return reject(error);
            });
          });
        }
      }, {
        key: "loginUser",
        value: function loginUser(value) {
          return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithEmailAndPassword(value.email, value.password).then(function (res) {
              return resolve(res);
            }, function (err) {
              return reject(err);
            });
          });
        } // Verifying entered login credentials after the user has already logged in

      }, {
        key: "verifyLoginCredentials",
        value: function verifyLoginCredentials(value) {
          return new Promise(function (resolve, reject) {
            var loginCredentials = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].EmailAuthProvider.credential(value.emailAddress, value.password);
            var currentUser = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser;
            currentUser.reauthenticateWithCredential(loginCredentials).then(function (response) {
              return resolve(response);
            }, function (error) {
              return reject(error);
            });
          });
        } // Updating account activity field in the logged in program office user document in the firestore database

      }, {
        key: "updateProgramOfficeUserActivity",
        value: function updateProgramOfficeUserActivity(accountActivity, docId) {
          var _this10 = this;

          return new Promise(function (resolve, reject) {
            _this10.firestore.doc("/users/userTypes/programOfficeUsers/" + docId).update({
              accountActivity: accountActivity
            }).then(function (response) {
              return resolve(response);
            }, function (error) {
              return reject(error);
            });
          });
        }
        /*
        checkUserActivity(){
            return new Promise<any>((resolve, reject) => {
                firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
                    .then(function() {
                        resolve("User Active");
                    })
                    .catch(function(error) {
                        reject(error);
                    });
            });
        }
        */

      }, {
        key: "logoutUser",
        value: function logoutUser() {
          return new Promise(function (resolve, reject) {
            if (firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser) {
              firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().signOut().then(function () {
                // console.log("Log out");
                resolve();
              })["catch"](function (error) {
                reject();
              });
            }
          });
        }
      }, {
        key: "userDetails",
        value: function userDetails() {
          return firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser;
        }
      }, {
        key: "fetchNotice",
        value: function fetchNotice() {
          return this.firestore.collection('notices/noticeTypes/notices-PO-To-Students').snapshotChanges();
        }
      }, {
        key: "sendEC",
        value: function sendEC(record, faculty, lecturer) {
          return this.firestore.collection('EC-Forms/' + faculty + '/' + lecturer).add(record);
        }
      }, {
        key: "sendAttendance",
        value: function sendAttendance(ModuleCode, email) {
          return this.firestore.firestore.collection('Attendance/History/' + ModuleCode).doc(email).set({
            data: {
              moduleTitle: ModuleCode,
              Attendace: firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.increment(1)
            }
          }, {
            merge: true
          }); // this.firestore.collection('Attendance / History /'+module+'/'+email).add(record);
        }
      }, {
        key: "fetchSession",
        value: function fetchSession(Batch, Faculty, LectureDate, DegreeCode) {
          //faculties/School of Business/lectureSeries/undergraduate/11.1/SE/19-4-2020/
          return this.firestore.collection('faculties').doc(Faculty).collection('lectureSessions').doc('undergraduate').collection(Batch).doc(DegreeCode).collection(LectureDate).snapshotChanges();
        }
      }, {
        key: "loadEC",
        value: function loadEC() {
          return this.firestore.collection('EC-Forms').snapshotChanges();
        }
      }, {
        key: "updateEC",
        value: function updateEC(value) {
          this.firestore.collection('EC-Forms/Done' + value.email + '').add(value);
        }
      }, {
        key: "sendKey",
        value: function sendKey(faculty, PrepKey, DocID, LocationCheck) {
          return this.firestore.firestore.collection('faculties').doc(faculty).collection('allLectureSessions').doc(DocID).set({
            SessionCode: PrepKey,
            LocationCheck: LocationCheck
          }, {
            merge: true
          });
        }
        /* Retrieving details from the documents to identify the type of user */
        // Retrieving the details of the logged in user from firestore database with the use of firebase authentication Uid

      }, {
        key: "retrieveLoggedInUserDetailsStudent",
        value: function retrieveLoggedInUserDetailsStudent(Uid) {
          return this.firestore.collection("users/userTypes/studentUsers", function (ref) {
            return ref.where(firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldPath.documentId(), '==', Uid);
          }).snapshotChanges();
        } // Retrieving the details of the logged in user from firestore database with the use of firebase authentication Uid

      }, {
        key: "retrieveLoggedInUserDetailsLecturer",
        value: function retrieveLoggedInUserDetailsLecturer(Uid) {
          return this.firestore.collection("users/userTypes/lecturerUsers", function (ref) {
            return ref.where(firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldPath.documentId(), '==', Uid);
          }).snapshotChanges();
        } // Retrieving the details of the logged in user from firestore database with the use of firebase authentication Uid

      }, {
        key: "retrieveLoggedInUserDetailsProgramOffice",
        value: function retrieveLoggedInUserDetailsProgramOffice(Uid) {
          return this.firestore.collection("users/userTypes/programOfficeUsers", function (ref) {
            return ref.where(firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldPath.documentId(), '==', Uid);
          }).snapshotChanges();
        } // Implementation of Registering a new lecturer into the system (firebase authentication)

      }, {
        key: "lecturerRegistrationDetails",
        value: function lecturerRegistrationDetails(value, loggedInUserId, loggedInUserFaculty) {
          var _this11 = this;

          return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().createUserWithEmailAndPassword(value.nsbmEmail, value.confirmPassword).then(function (success) {
              console.log(" Lecturer UserID: " + success.user.uid); // Adding lecturer details into firestore

              _this11.firestore.collection("users/userTypes/lecturerUsers/").doc(success.user.uid).set({
                nsbmEmailAddress: value.nsbmEmail,
                nsbmLecturerId: value.nsbmLecturerId,
                name: {
                  prefix: value.nameTitle,
                  firstName: value.firstName,
                  middleName: value.middleName,
                  lastName: value.lastName
                },
                specializedFaculty: value.specializedFaculty,
                specialization: value.specialization,
                createdDetails: {
                  createdBy_PO_uID: loggedInUserId,
                  createdDateTime: new Date(),
                  createdFaculty: loggedInUserFaculty
                },
                editedDetails: {
                  editedByUid: "Registration Phase",
                  editedDateTime: new Date(),
                  editedSection: "Registration Phase"
                },
                sessionDetails: {
                  loginDateTime: [new Date()],
                  logoutDateTime: [new Date()],
                  accountActivity: "Offline"
                },
                status: value.lecturerStatus
              });

              resolve(success);
            }, function (error) {
              return reject(error);
            });
          });
        } // Registering new module by adding the user provided details into the firestore database

      }, {
        key: "registerModule",
        value: function registerModule(userFaculty, value, userFormAwardingBodyUniversity) {
          // Creating an ID for the document
          var docId = this.firestore.createId();
          return this.firestore.collection("faculties/" + userFaculty + "/modules").doc(docId).set({
            moduleCode: value.moduleCode,
            moduleTitle: value.moduleTitle,
            creditsWeighting: value.creditsWeighting,
            degree: value.degreeProgram,
            awardingBodyUniversity: userFormAwardingBodyUniversity,
            academicPeriod: {
              academicYear: value.academicPeriodYear,
              academicSemester: value.academicPeriodSemester
            },
            moduleLeader: value.moduleLeader,
            assignedLecturer: value.assignedLecturer,
            assignedLectureHall: value.assignedLectureHall
          }).then(function () {
            console.log("Module registerd and values were added");
          });
        } // Creating new firestore document and adding new student notice data into ths document

      }, {
        key: "newStudentNoticeDetailsSubmission",
        value: function newStudentNoticeDetailsSubmission(value, uId, userFaculty) {
          this.firestore.collection("notices/noticeTypes/notices-PO-To-Students/").add({
            noticeTitle: value.noticeTitle,
            noticeDescription: value.noticeDescription,
            noticeCategory: value.noticeCategory,
            noticeRecipient: {
              noticeRecipientModule: value.noticeRecipientModule,
              noticeRecipientBatch: value.noticeRecipientBatch
            },
            noticeCreatedInfo: {
              createdByDocID: uId,
              createdByFaculty: userFaculty,
              createdDateTime: new Date()
            }
          });
        } // Creating new firestore document and add the new lecturer noticw details into this document

      }, {
        key: "newLecturerNoticeDetailsSubmission",
        value: function newLecturerNoticeDetailsSubmission(value, uId, userFaculty) {
          this.firestore.collection("notices/noticeTypes/notices-PO-To-Lecturers/").add({
            noticeTitle: value.noticeTitle,
            noticeDescription: value.noticeDescription,
            noticeCategory: value.noticeCategory,
            noticeRecipient: value.noticeRecipient,
            noticeCreatedInfo: {
              createdByDocID: uId,
              createdByFaculty: userFaculty,
              createdDateTime: new Date()
            }
          });
        } // Adding new lecture session by creating a new document

      }, {
        key: "addNewLectureSession",
        value: function addNewLectureSession(userFaculty, value, degreeCode, awardingBodyUniversity, moduleTitle, sessionDate, sessionStartDateTime, sessionEndDateTime) {
          // Firestore pathway:
          // faculties/ <facultyName> /lectureSessions/undergraduate/ <batch> / <degreeProgram> / <date> / <Module> /
          // Sample: /faculties/School of Computing/lectureSessions/undergraduate/16.1/BSc(Hons) Networking, University of Plymouth/2020-3-20/SOFT255SL-Software Engineering with Java
          this.firestore.collection("faculties/" + userFaculty + "/lectureSessions/undergraduate/" + value.batch + "/" + value.degreeProgram + ", " + awardingBodyUniversity + "/" + sessionDate + "/").doc(value.module + "-" + moduleTitle).set({
            academicSemester: parseInt(value.academicPeriodSemester),
            academicYear: parseInt(value.academicPeriodYear),
            degreeCode: degreeCode,
            degree: value.degreeProgram,
            awardingBodyUniversity: awardingBodyUniversity,
            batch: value.batch,
            startDateTime: new Date(sessionStartDateTime),
            endDateTime: new Date(sessionEndDateTime),
            lectureHall: value.lectureHall,
            lecturer: value.lecturer,
            moduleCode: value.module,
            moduleTitle: moduleTitle,
            status: value.status
          });
          this.firestore.collection("faculties/" + userFaculty + "/allLectureSessions/").add({
            academicSemester: parseInt(value.academicPeriodSemester),
            academicYear: parseInt(value.academicPeriodYear),
            degree: value.degreeProgram,
            awardingBodyUniversity: awardingBodyUniversity,
            degreeCode: degreeCode,
            batch: value.batch,
            startDateTime: new Date(sessionStartDateTime),
            endDateTime: new Date(sessionEndDateTime),
            lectureHall: value.lectureHall,
            lecturer: value.lecturer,
            moduleCode: value.module,
            moduleTitle: moduleTitle,
            status: value.status
          });
        } // Adding new lecture series by creating a new document

      }, {
        key: "createNewLectureSeries",
        value: function createNewLectureSeries(value, userFaculty, awardingBodyUniversity, moduleTitle) {
          this.firestore.collection("faculties/" + userFaculty + "/lectureSeries/").add({
            degree: value.degreeProgram,
            awardingBodyUniversity: awardingBodyUniversity,
            batch: value.batch,
            enrollmentKey: value.enrollmentKey,
            noOfLectures: value.noOfLectures,
            moduleCode: value.module,
            moduleTitle: moduleTitle,
            enrolledStudents: ["Initial Series Creation"]
          });
        } // Adding new degree program by creating a new document and assigning the values to firestore database

      }, {
        key: "addNewDegreeProgram",
        value: function addNewDegreeProgram(value, userFaculty) {
          this.firestore.collection("faculties/" + userFaculty + "/degreePrograms/").add({
            degreeCode: value.degreeCode,
            degree: value.degree,
            awardingBodyUniversity: value.awardingBodyUniversity,
            deliveryNoOfYears: value.academicPeriodYear,
            deliveryNoOfSemestersAnnually: value.academicPeriodSemester,
            programDelivery: value.programDelivery,
            programCoordinator: value.programCoordinator
          });
        } // Adding new batch by creating a new document and assigning the values to firestore database

      }, {
        key: "addNewBatch",
        value: function addNewBatch(value, awardingBodyUniversity, userFaculty) {
          this.firestore.collection("faculties/" + userFaculty + "/batches/").add({
            batch: value.batch,
            degree: value.degreeProgram,
            awardingBodyUniversity: awardingBodyUniversity,
            status: value.status
          });
        } // Adding new credit weighting by creating a new document and assigning the values to firestore database

      }, {
        key: "addNewCreditWeighting",
        value: function addNewCreditWeighting(value) {
          this.firestore.collection("noOfModuleCreditsWeighting/").add({
            creditsWeighting: value.creditWeighting,
            description: value.description,
            status: value.status
          });
        } // Adding new lecture hall by creating a new document and assigning the values to firestore database

      }, {
        key: "addNewLectureHall",
        value: function addNewLectureHall(value, userFaculty) {
          this.firestore.collection("faculties/" + userFaculty + "/lectureHalls/").add({
            lectureHall: value.lectureHall,
            level: value.level,
            approximateNoOfSeatsAvailable: value.approximateNoOfSeatsAvailable
          });
        } // Adding new lecture session status by creating a new document and assigning the values to firestore database

      }, {
        key: "addNewLectureSessionStatus",
        value: function addNewLectureSessionStatus(value) {
          this.firestore.collection("lectureSessionStatuses/").add({
            status: value.status,
            description: value.description
          });
        } // Adding new user account status by creating a new document and assigning the values to firestore database

      }, {
        key: "addNewUserAccountStatus",
        value: function addNewUserAccountStatus(value) {
          this.firestore.collection("userStatuses/").add({
            status: value.status,
            description: value.description
          });
        } // Adding new notice category by creating a new document and assigning the values to firestore database

      }, {
        key: "addNewNoticeCategory",
        value: function addNewNoticeCategory(value) {
          this.firestore.collection("noticeCategories/").add({
            category: value.category,
            description: value.description
          });
        } // Searching for registered student details with the user entered nsbm id

      }, {
        key: "searchRegisteredStudentNSBMId",
        value: function searchRegisteredStudentNSBMId(nsbmStudentId) {
          return this.firestore.collection("users/userTypes/studentUsers", function (ref) {
            return ref.where("nsbmStudentID", "==", nsbmStudentId);
          }).snapshotChanges();
        } // Searching for registered student details with the user entered nsbm email address

      }, {
        key: "searchRegisteredStudentNSBMEmail",
        value: function searchRegisteredStudentNSBMEmail(nsbmEmailAddress) {
          return this.firestore.collection("users/userTypes/studentUsers", function (ref) {
            return ref.where("Email", "==", nsbmEmailAddress);
          }).snapshotChanges();
        } // Searching for registered lecturer details with the user entered nsbm id

      }, {
        key: "searchRegisteredLecturerNSBMId",
        value: function searchRegisteredLecturerNSBMId(nsbmLecturerId) {
          return this.firestore.collection("users/userTypes/lecturerUsers", function (ref) {
            return ref.where("nsbmLecturerId", "==", nsbmLecturerId);
          }).snapshotChanges();
        } // Searching for registered lecturer details with the user entered nsbm email address

      }, {
        key: "searchRegisteredLecturerNSBMEmail",
        value: function searchRegisteredLecturerNSBMEmail(nsbmEmailAddress) {
          return this.firestore.collection("users/userTypes/lecturerUsers", function (ref) {
            return ref.where("nsbmEmailAddress", "==", nsbmEmailAddress);
          }).snapshotChanges();
        } // Retrieving published Lectuers to PO notices from current date to three days before from the firestore database

      }, {
        key: "retrievePublishedLecturerToPONotice",
        value: function retrievePublishedLecturerToPONotice(currentDate, dateThreeDaysBeforeCurrentDate) {
          return this.firestore.collection("notices/noticeTypes/notices-Lecturers-To-PO/", function (ref) {
            return ref.where("noticeCreatedInfo.createdDateTime", ">=", new Date(dateThreeDaysBeforeCurrentDate)).where("noticeCreatedInfo.createdDateTime", "<=", new Date(currentDate)).orderBy("noticeCreatedInfo.createdDateTime", "desc");
          }).snapshotChanges();
        } // Retrieving published PO to Students notices from current date to three days before from the firestore database

      }, {
        key: "retrievePublishedPOToStudentNotice",
        value: function retrievePublishedPOToStudentNotice(currentDate, dateThreeDaysBeforeCurrentDate) {
          return this.firestore.collection("notices/noticeTypes/notices-PO-To-Students/", function (ref) {
            return ref.where("noticeCreatedInfo.createdDateTime", ">=", new Date(dateThreeDaysBeforeCurrentDate)).where("noticeCreatedInfo.createdDateTime", "<=", new Date(currentDate)).orderBy("noticeCreatedInfo.createdDateTime", "desc");
          }).snapshotChanges();
        } // Retrieving published PO to Lectuers notices from current date to three days before from the firestore database

      }, {
        key: "retrievePublishedPOToLecturerNotice",
        value: function retrievePublishedPOToLecturerNotice(currentDate, dateThreeDaysBeforeCurrentDate) {
          return this.firestore.collection("notices/noticeTypes/notices-PO-To-Lecturers", function (ref) {
            return ref.where("noticeCreatedInfo.createdDateTime", ">=", new Date(dateThreeDaysBeforeCurrentDate)).where("noticeCreatedInfo.createdDateTime", "<=", new Date(currentDate)).orderBy("noticeCreatedInfo.createdDateTime", "desc");
          }).snapshotChanges();
        } // Retrieving published Lecturers to PO notices for the selected date from the firestore database

      }, {
        key: "retrievePublishedLecturerToPONoticeSelectedDate",
        value: function retrievePublishedLecturerToPONoticeSelectedDate(selectedDate, nextDate) {
          return this.firestore.collection("notices/noticeTypes/notices-Lecturers-To-PO/", function (ref) {
            return ref.where("noticeCreatedInfo.createdDateTime", ">=", new Date(selectedDate)).where("noticeCreatedInfo.createdDateTime", "<=", new Date(nextDate)).orderBy("noticeCreatedInfo.createdDateTime", "desc");
          }).snapshotChanges();
        } // Retrieving published PO to Students notices for the selected date from the firestore database

      }, {
        key: "retrievePublishedPOToStudentNoticeSelectedDate",
        value: function retrievePublishedPOToStudentNoticeSelectedDate(selectedDate, nextDate) {
          return this.firestore.collection("notices/noticeTypes/notices-PO-To-Students/", function (ref) {
            return ref.where("noticeCreatedInfo.createdDateTime", ">=", new Date(selectedDate)).where("noticeCreatedInfo.createdDateTime", "<=", new Date(nextDate)).orderBy("noticeCreatedInfo.createdDateTime", "desc");
          }).snapshotChanges();
        } // Retrieving published PO to Lecturers notices for the selected date from the firestore database

      }, {
        key: "retrievePublishedPOToLecturerSelectedDate",
        value: function retrievePublishedPOToLecturerSelectedDate(selectedDate, nextDate) {
          return this.firestore.collection("notices/noticeTypes/notices-PO-To-Lecturers/", function (ref) {
            return ref.where("noticeCreatedInfo.createdDateTime", ">=", new Date(selectedDate)).where("noticeCreatedInfo.createdDateTime", "<=", new Date(nextDate)).orderBy("noticeCreatedInfo.createdDateTime", "desc");
          }).snapshotChanges();
        } // Retrieving the registered lecturers from the firestore database

      }, {
        key: "retrieveRegisteredLecturers",
        value: function retrieveRegisteredLecturers() {
          return this.firestore.collection("users/userTypes/lecturerUsers/").snapshotChanges();
        } // Retrieving published lecture sessions and their detais from the firestore database for the current date

      }, {
        key: "retrievePublishedLectureSessionsCurrentDate",
        value: function retrievePublishedLectureSessionsCurrentDate(userFaculty, currentDate, nextDate) {
          return this.firestore.collection("faculties/" + userFaculty + "/allLectureSessions", function (ref) {
            return ref.where("startDateTime", ">=", new Date(currentDate)).where("startDateTime", "<=", new Date(nextDate)).orderBy("startDateTime");
          }).snapshotChanges();
        } // Retrieving published lecture sessions that are upcoming from the current date from the firestore database

      }, {
        key: "retrievePublishedLectureSessionsUpcoming",
        value: function retrievePublishedLectureSessionsUpcoming(userFaculty) {
          return this.firestore.collection("faculties/" + userFaculty + "/allLectureSessions", function (ref) {
            return ref.where("startDateTime", ">=", new Date());
          }).snapshotChanges();
        } // Retrieving all published lecture sessions and their details from the firestore database

      }, {
        key: "retrieveAllPublishedLectureSessions",
        value: function retrieveAllPublishedLectureSessions(userFaculty) {
          return this.firestore.collection("faculties/" + userFaculty + "/allLectureSessions").snapshotChanges();
        } // Retrieving published degree programs and their details from the firestore database

      }, {
        key: "retrievePublishedDegreeProgram",
        value: function retrievePublishedDegreeProgram(userFaculty) {
          return this.firestore.collection("faculties/" + userFaculty + "/degreePrograms").snapshotChanges();
        } // Retrieving the awardingBodyUniversity from the selected degree from the firestore database

      }, {
        key: "retrievingAwardingBodyUniversityOfDegree",
        value: function retrievingAwardingBodyUniversityOfDegree(degree, userFaculty) {
          return this.firestore.collection("faculties/" + userFaculty + "/degreePrograms", function (ref) {
            return ref.where("degree", "==", degree);
          }).snapshotChanges();
        } // Retrieving published ACTIVE module credits weighting and their details from the firestore database

      }, {
        key: "retrievePublishedModuleCreditsWeightingActive",
        value: function retrievePublishedModuleCreditsWeightingActive() {
          return this.firestore.collection("noOfModuleCreditsWeighting", function (ref) {
            return ref.where("status", "==", "Active");
          }).snapshotChanges();
        } // Retrieving published all module credits weighting and their details from the firestore database

      }, {
        key: "retrievePublishedModuleCreditsWeighting",
        value: function retrievePublishedModuleCreditsWeighting() {
          return this.firestore.collection("noOfModuleCreditsWeighting").snapshotChanges();
        } // Retrieving published user statuses and their details from the firestore database

      }, {
        key: "retrievePublishedUserStatuses",
        value: function retrievePublishedUserStatuses() {
          return this.firestore.collection("userStatuses").snapshotChanges();
        } // Retrieving published notice categories and their details from the firestore database

      }, {
        key: "retrievePublishedNoticeCategories",
        value: function retrievePublishedNoticeCategories() {
          return this.firestore.collection("noticeCategories").snapshotChanges();
        } // Retrieving published lecture halls and their details from the firestore database

      }, {
        key: "retrievePublishedLectureHalls",
        value: function retrievePublishedLectureHalls(userFaculty) {
          return this.firestore.collection("faculties/" + userFaculty + "/lectureHalls").snapshotChanges();
        } // Retrieving the moduleTitle from the selected module title from the firestore database

      }, {
        key: "retrievingModuleTitleOfModuleCode",
        value: function retrievingModuleTitleOfModuleCode(moduleCode, userFaculty) {
          return this.firestore.collection("faculties/" + userFaculty + "/modules", function (ref) {
            return ref.where("moduleCode", "==", moduleCode);
          }).snapshotChanges();
        } // Retrieving published lecture session statuses and their details from the firestore database

      }, {
        key: "retrievePublishedLectureSessionStatuses",
        value: function retrievePublishedLectureSessionStatuses() {
          return this.firestore.collection("lectureSessionStatuses").snapshotChanges();
        } // Retrieving registered modules and their details from the firestore database

      }, {
        key: "retrieveRegisteredModules",
        value: function retrieveRegisteredModules(userFaculty) {
          return this.firestore.collection("faculties/" + userFaculty + "/modules").snapshotChanges();
        } // Retrieving published lecture series and their details from the firestore database

      }, {
        key: "retrievePublishedLectureSeries",
        value: function retrievePublishedLectureSeries(userFaculty, value, awardingBodyUniversity, moduleTitle) {
          return this.firestore.collection("faculties/" + userFaculty + "/lectureSeries/", function (ref) {
            return ref.where("degree", "==", value.degreeProgram).where("awardingBodyUniversity", "==", awardingBodyUniversity).where("moduleCode", "==", value.module).where("moduleTitle", "==", moduleTitle).where("batch", "==", value.batch);
          }).snapshotChanges();
        } // Retrieving registered module and their details from the firestore database for the module page (Module Code)

      }, {
        key: "retrieveRegisterdModulesModuleCode",
        value: function retrieveRegisterdModulesModuleCode(userFaculty, value) {
          return this.firestore.collection("faculties/" + userFaculty + "/modules", function (ref) {
            return ref.where("moduleCode", "==", value);
          }).snapshotChanges();
        } // Retrieving registered module and their details from the firestore database for the module page (Module Title)

      }, {
        key: "retrieveRegisterdModulesModuleTitle",
        value: function retrieveRegisterdModulesModuleTitle(userFaculty, value) {
          return this.firestore.collection("faculties/" + userFaculty + "/modules", function (ref) {
            return ref.where("moduleTitle", "==", value);
          }).snapshotChanges();
        } // Retrieving registered module and their details from the firestore database for the module page (Degree Program)

      }, {
        key: "retrieveRegisterdModulesDegreeProgram",
        value: function retrieveRegisterdModulesDegreeProgram(userFaculty, userSelectedDegree, userSelectedAwardingBodyUniversity) {
          return this.firestore.collection("faculties/" + userFaculty + "/modules", function (ref) {
            return ref.where("degree", "==", userSelectedDegree).where("awardingBodyUniversity", "==", userSelectedAwardingBodyUniversity);
          }).snapshotChanges();
        } // Retrieving published batches and their details from the firestore database

      }, {
        key: "retrievePublishedBatch",
        value: function retrievePublishedBatch(userFaculty) {
          return this.firestore.collection("faculties/" + userFaculty + "/batches").snapshotChanges();
        } // Retrieving published lecture session and their detais from the firestore database for the semester calendar page

      }, {
        key: "retrievePublishedLectureSessionsSemesterCalendar",
        value: function retrievePublishedLectureSessionsSemesterCalendar(userFaculty, value, awardingBodyUniversity) {
          return this.firestore.collection("faculties/" + userFaculty + "/allLectureSessions/", function (ref) {
            return ref.where("batch", "==", value.batch).where("degree", "==", value.degreeProgram).where("awardingBodyUniversity", "==", awardingBodyUniversity).where("academicYear", "==", parseInt(value.academicPeriodYear))
            /* ( parseInt() ) Converting value data type from the form, string to int */
            .where("academicSemester", "==", parseInt(value.academicPeriodSemester));
          }).snapshotChanges();
        } // Updating module values in the firestore database

      }, {
        key: "updateModule",
        value: function updateModule(userFaculty, docId, value, userFormDataAwardingBodyUniversity) {
          return this.firestore.doc("faculties/" + userFaculty + "/modules/" + docId).update({
            moduleCode: value.moduleCode,
            moduleTitle: value.moduleTitle,
            creditsWeighting: value.creditsWeighting,
            degree: value.degreeProgram,
            awardingBodyUniversity: userFormDataAwardingBodyUniversity,
            academicPeriod: {
              academicYear: value.academicPeriodYear,
              academicSemester: value.academicPeriodSemester
            },
            moduleLeader: value.moduleLeader,
            assignedLecturer: value.assignedLecturer,
            assignedLectureHall: value.assignedLectureHall
          }).then(function () {
            console.log("Module Details has been updated.");
          });
        } // Updating lecture session values in the firestore database

      }, {
        key: "updateLectureSession",
        value: function updateLectureSession(userFaculty, id, value, userFormDataModuleCode, userFormDataSessionStartDateTime, userFormDataSessionEndDateTime) {
          return this.firestore.doc("faculties/" + userFaculty + "/lectureSessions/" + id).update({
            batch: value.batch,
            degreeProgram: value.degreeProgram,
            academicYear: value.academicYear,
            academicSemester: value.academicSemester,
            moduleCode: userFormDataModuleCode,
            moduleTitle: value.moduleTitle,
            lecture: value.lecturer,
            lectureHall: value.lectureHall,
            status: value.lectureStatus,
            startDateTime: userFormDataSessionStartDateTime,
            endDateTime: userFormDataSessionEndDateTime
          }).then(function () {
            console.log("Lecture Session Details has been updated.");
          });
        } // Updating lecture series values in the firestore database

      }, {
        key: "updateLectureSeries",
        value: function updateLectureSeries(value, docId, userFaculty) {
          return this.firestore.doc("faculties/" + userFaculty + "/lectureSeries/" + docId).update({
            noOfLectures: value.noOfLectures,
            enrollmentKey: value.enrollmentKey
          });
        } // Updating account details of logged in program office user by updating the document in the firestore database

      }, {
        key: "updateProgramOfficeUser",
        value: function updateProgramOfficeUser(value, docId) {
          var _this12 = this;

          return new Promise(function (resolve, reject) {
            _this12.firestore.doc("/users/userTypes/programOfficeUsers/" + docId).update({
              name: {
                prefix: value.prefixName,
                firstName: value.firstName,
                middleName: value.middleName,
                lastName: value.lastName
              },
              faculty: value.faculty
            }).then(function (response) {
              return resolve(response);
            }, function (error) {
              return reject(error);
            });
          });
        } // Removing registered modules from the firestore database

      }, {
        key: "removeRegisteredModule",
        value: function removeRegisteredModule(userFaculty, DocId) {
          this.firestore.doc("faculties/" + userFaculty + "/modules/" + DocId)["delete"]();
        } // Removing lecture session from the firestore database

      }, {
        key: "removeLectureSession",
        value: function removeLectureSession(userFaculty, id) {
          return this.firestore.doc("faculties/" + userFaculty + "/lectureSessions/" + id)["delete"]();
        } // Removing published lecture seires from the firestore database

      }, {
        key: "removeLectureSeries",
        value: function removeLectureSeries(docId, userFaculty) {
          return this.firestore.doc("faculties/" + userFaculty + "/lectureSeries/" + docId)["delete"]();
        } //Removing degree program fron the firestore database

      }, {
        key: "removeDegreeProgram",
        value: function removeDegreeProgram(docId, userFaculty) {
          return this.firestore.doc("faculties/" + userFaculty + "/degreePrograms/" + docId)["delete"]();
        } // Removing published batch from the firestore database

      }, {
        key: "removeBatch",
        value: function removeBatch(docId, userFaculty) {
          return this.firestore.doc("faculties/" + userFaculty + "/batches/" + docId)["delete"]();
        } // Removing published credit weighting from the firestore database

      }, {
        key: "removeCreditWeighting",
        value: function removeCreditWeighting(docId) {
          return this.firestore.doc("noOfModuleCreditsWeighting/" + docId)["delete"]();
        } // Removing published lecture hall from the firestore database

      }, {
        key: "removeLectureHall",
        value: function removeLectureHall(docId, userFaculty) {
          return this.firestore.doc("faculties/" + userFaculty + "/lectureHalls/" + docId)["delete"]();
        } // Removing published lecture session status from the firestore database

      }, {
        key: "removeLectureSessionStatus",
        value: function removeLectureSessionStatus(docId) {
          return this.firestore.doc("lectureSessionStatuses/" + docId)["delete"]();
        } // Removing published user account status from the firestore database

      }, {
        key: "removeUserAccountStatus",
        value: function removeUserAccountStatus(docId) {
          return this.firestore.doc("userStatuses/" + docId)["delete"]();
        } // Removing published notice category from the firestore database

      }, {
        key: "removeNoticeCategory",
        value: function removeNoticeCategory(docId) {
          return this.firestore.doc("noticeCategories/" + docId)["delete"]();
        } // Disabling the user acount by updating user account status to 'disabled' in the firestore database

      }, {
        key: "disableUserAccount",
        value: function disableUserAccount(userType, docId) {
          return this.firestore.doc("users/userTypes/" + userType + "/" + docId).update({
            status: "Disabled"
          }).then(function () {
            console.log("User Account has been disabled");
          });
        } // Enabling the user acount by updating user account status to 'disabled' in the firestore database

      }, {
        key: "enableUserAccount",
        value: function enableUserAccount(userType, docId) {
          return this.firestore.doc("users/userTypes/" + userType + "/" + docId).update({
            status: "Active"
          }).then(function () {
            console.log("User Account has been disabled");
          });
        }
      }]);

      return FirebaseService;
    }();

    FirebaseService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
      }];
    };

    FirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])], FirebaseService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: true,
      firebase: {
        apiKey: "AIzaSyAZCSAfLVG9R8u7WJV5Fp8Sr_pdteP_2tI",
        authDomain: "pusl2008.firebaseapp.com",
        databaseURL: "https://pusl2008.firebaseio.com",
        projectId: "pusl2008",
        vapidKey: "BHL8AjQ-mBZdGErWpGMObU3IF1WixuEFJTP0siQTKvRmQNneAbQp6IpwJG6TCgZJ1FKx_zbM97ffJdSAws_0Wyg",
        storageBucket: "pusl2008.appspot.com",
        messagingSenderId: "171451540046",
        appId: "1:171451540046:web:5debc362c19a4a009e191f",
        measurementId: "G-Q6R7VRTRZV"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\ranul\Documents\GitHub\2nd Year\2nd Semester\UOP_SE_Y2S2-PUSL2008-INTRODUCTION-TO-INTERNET-OF-THINGS\Workspace\iSAM\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map