(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~login-login-module~signup-signup-module~student-ec-form-ec-form-module~student-settings-sett~8ac94780"], {
  /***/
  "./node_modules/@firebase/analytics/dist/index.esm.js":
  /*!************************************************************!*\
    !*** ./node_modules/@firebase/analytics/dist/index.esm.js ***!
    \************************************************************/

  /*! exports provided: factory, getGlobalVars, registerAnalytics, resetGlobalVars, settings */

  /***/
  function node_modulesFirebaseAnalyticsDistIndexEsmJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "factory", function () {
      return factory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getGlobalVars", function () {
      return getGlobalVars;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "registerAnalytics", function () {
      return registerAnalytics;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "resetGlobalVars", function () {
      return resetGlobalVars;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "settings", function () {
      return settings;
    });
    /* harmony import */


    var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @firebase/app */
    "./node_modules/@firebase/app/dist/index.cjs.js");
    /* harmony import */


    var _firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _firebase_installations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @firebase/installations */
    "./node_modules/@firebase/installations/dist/index.esm.js");
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _firebase_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @firebase/logger */
    "./node_modules/@firebase/logger/dist/index.esm.js");
    /* harmony import */


    var _firebase_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @firebase/util */
    "./node_modules/@firebase/util/dist/index.cjs.js");
    /* harmony import */


    var _firebase_util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_firebase_util__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _firebase_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @firebase/component */
    "./node_modules/@firebase/component/dist/index.cjs.js");
    /* harmony import */


    var _firebase_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_firebase_component__WEBPACK_IMPORTED_MODULE_5__);
    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var ANALYTICS_ID_FIELD = 'measurementId'; // Key to attach FID to in gtag params.

    var GA_FID_KEY = 'firebase_id';
    var ORIGIN_KEY = 'origin';
    var GTAG_URL = 'https://www.googletagmanager.com/gtag/js';
    var GtagCommand;

    (function (GtagCommand) {
      GtagCommand["EVENT"] = "event";
      GtagCommand["SET"] = "set";
      GtagCommand["CONFIG"] = "config";
    })(GtagCommand || (GtagCommand = {}));
    /*
     * Officially recommended event names for gtag.js
     * Any other string is also allowed.
     */


    var EventName;

    (function (EventName) {
      EventName["ADD_SHIPPING_INFO"] = "add_shipping_info";
      EventName["ADD_PAYMENT_INFO"] = "add_payment_info";
      EventName["ADD_TO_CART"] = "add_to_cart";
      EventName["ADD_TO_WISHLIST"] = "add_to_wishlist";
      EventName["BEGIN_CHECKOUT"] = "begin_checkout";
      /** @deprecated */

      EventName["CHECKOUT_PROGRESS"] = "checkout_progress";
      EventName["EXCEPTION"] = "exception";
      EventName["GENERATE_LEAD"] = "generate_lead";
      EventName["LOGIN"] = "login";
      EventName["PAGE_VIEW"] = "page_view";
      EventName["PURCHASE"] = "purchase";
      EventName["REFUND"] = "refund";
      EventName["REMOVE_FROM_CART"] = "remove_from_cart";
      EventName["SCREEN_VIEW"] = "screen_view";
      EventName["SEARCH"] = "search";
      EventName["SELECT_CONTENT"] = "select_content";
      EventName["SELECT_ITEM"] = "select_item";
      EventName["SELECT_PROMOTION"] = "select_promotion";
      /** @deprecated */

      EventName["SET_CHECKOUT_OPTION"] = "set_checkout_option";
      EventName["SHARE"] = "share";
      EventName["SIGN_UP"] = "sign_up";
      EventName["TIMING_COMPLETE"] = "timing_complete";
      EventName["VIEW_CART"] = "view_cart";
      EventName["VIEW_ITEM"] = "view_item";
      EventName["VIEW_ITEM_LIST"] = "view_item_list";
      EventName["VIEW_PROMOTION"] = "view_promotion";
      EventName["VIEW_SEARCH_RESULTS"] = "view_search_results";
    })(EventName || (EventName = {}));
    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Logs an analytics event through the Firebase SDK.
     *
     * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
     * @param eventName Google Analytics event name, choose from standard list or use a custom string.
     * @param eventParams Analytics event parameters.
     */


    function _logEvent(gtagFunction, analyticsId, eventName, eventParams, options) {
      var params = eventParams || {};

      if (!options || !options.global) {
        params = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, eventParams), {
          'send_to': analyticsId
        });
      } // Workaround for http://b/141370449 - third argument cannot be undefined.


      gtagFunction(GtagCommand.EVENT, eventName, params || {});
    } // TODO: Brad is going to add `screen_name` to GA Gold config parameter schema

    /**
     * Set screen_name parameter for this Google Analytics ID.
     *
     * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
     * @param screenName Screen name string to set.
     */


    function _setCurrentScreen(gtagFunction, analyticsId, screenName, options) {
      if (options && options.global) {
        gtagFunction(GtagCommand.SET, {
          'screen_name': screenName
        });
      } else {
        gtagFunction(GtagCommand.CONFIG, analyticsId, {
          update: true,
          'screen_name': screenName
        });
      }
    }
    /**
     * Set user_id parameter for this Google Analytics ID.
     *
     * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
     * @param id User ID string to set
     */


    function _setUserId(gtagFunction, analyticsId, id, options) {
      if (options && options.global) {
        gtagFunction(GtagCommand.SET, {
          'user_id': id
        });
      } else {
        gtagFunction(GtagCommand.CONFIG, analyticsId, {
          update: true,
          'user_id': id
        });
      }
    }
    /**
     * Set all other user properties other than user_id and screen_name.
     *
     * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
     * @param properties Map of user properties to set
     */


    function _setUserProperties(gtagFunction, analyticsId, properties, options) {
      if (options && options.global) {
        var flatProperties = {};

        for (var _i = 0, _a = Object.keys(properties); _i < _a.length; _i++) {
          var key = _a[_i]; // use dot notation for merge behavior in gtag.js

          flatProperties["user_properties." + key] = properties[key];
        }

        gtagFunction(GtagCommand.SET, flatProperties);
      } else {
        gtagFunction(GtagCommand.CONFIG, analyticsId, {
          update: true,
          'user_properties': properties
        });
      }
    }
    /**
     * Set whether collection is enabled for this ID.
     *
     * @param enabled If true, collection is enabled for this ID.
     */


    function _setAnalyticsCollectionEnabled(analyticsId, enabled) {
      window["ga-disable-" + analyticsId] = !enabled;
    }
    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var logger = new _firebase_logger__WEBPACK_IMPORTED_MODULE_3__["Logger"]('@firebase/analytics');
    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Initialize the analytics instance in gtag.js by calling config command with fid.
     *
     * NOTE: We combine analytics initialization and setting fid together because we want fid to be
     * part of the `page_view` event that's sent during the initialization
     * @param app Firebase app
     * @param gtagCore The gtag function that's not wrapped.
     */

    function initializeGAId(app, installations, gtagCore) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
        var fid;

        var _a;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_b) {
          switch (_b.label) {
            case 0:
              return [4
              /*yield*/
              , installations.getId()];

            case 1:
              fid = _b.sent(); // This command initializes gtag.js and only needs to be called once for the entire web app,
              // but since it is idempotent, we can call it multiple times.
              // We keep it together with other initialization logic for better code structure.
              // eslint-disable-next-line @typescript-eslint/no-explicit-any

              gtagCore('js', new Date()); // It should be the first config command called on this GA-ID
              // Initialize this GA-ID and set FID on it using the gtag config API.

              gtagCore(GtagCommand.CONFIG, app.options[ANALYTICS_ID_FIELD], (_a = {}, _a[GA_FID_KEY] = fid, // guard against developers accidentally setting properties with prefix `firebase_`
              _a[ORIGIN_KEY] = 'firebase', _a.update = true, _a));
              return [2
              /*return*/
              ];
          }
        });
      });
    }

    function insertScriptTag(dataLayerName) {
      var script = document.createElement('script'); // We are not providing an analyticsId in the URL because it would trigger a `page_view`
      // without fid. We will initialize ga-id using gtag (config) command together with fid.

      script.src = GTAG_URL + "?l=" + dataLayerName;
      script.async = true;
      document.head.appendChild(script);
    }
    /** Get reference to, or create, global datalayer.
     * @param dataLayerName Name of datalayer (most often the default, "_dataLayer")
     */


    function getOrCreateDataLayer(dataLayerName) {
      // Check for existing dataLayer and create if needed.
      var dataLayer = [];

      if (Array.isArray(window[dataLayerName])) {
        dataLayer = window[dataLayerName];
      } else {
        window[dataLayerName] = dataLayer;
      }

      return dataLayer;
    }
    /**
     * Wraps a standard gtag function with extra code to wait for completion of
     * relevant initialization promises before sending requests.
     *
     * @param gtagCore Basic gtag function that just appends to dataLayer
     * @param initializedIdPromisesMap Map of gaIds to their initialization promises
     */


    function wrapGtag(gtagCore, initializedIdPromisesMap) {
      return function (command, idOrNameOrParams, gtagParams) {
        // If event, check that relevant initialization promises have completed.
        if (command === GtagCommand.EVENT) {
          var initializationPromisesToWaitFor = []; // If there's a 'send_to' param, check if any ID specified matches
          // a FID we have begun a fetch on.

          if (gtagParams && gtagParams['send_to']) {
            var gaSendToList = gtagParams['send_to']; // Make it an array if is isn't, so it can be dealt with the same way.

            if (!Array.isArray(gaSendToList)) {
              gaSendToList = [gaSendToList];
            }

            for (var _i = 0, gaSendToList_1 = gaSendToList; _i < gaSendToList_1.length; _i++) {
              var sendToId = gaSendToList_1[_i];
              var initializationPromise = initializedIdPromisesMap[sendToId]; // Groups will not be in the map.

              if (initializationPromise) {
                initializationPromisesToWaitFor.push(initializationPromise);
              } else {
                // There is an item in 'send_to' that is not associated
                // directly with an FID, possibly a group.  Empty this array
                // and let it get populated below.
                initializationPromisesToWaitFor = [];
                break;
              }
            }
          } // This will be unpopulated if there was no 'send_to' field , or
          // if not all entries in the 'send_to' field could be mapped to
          // a FID. In these cases, wait on all pending initialization promises.


          if (initializationPromisesToWaitFor.length === 0) {
            for (var _a = 0, _b = Object.values(initializedIdPromisesMap); _a < _b.length; _a++) {
              var idPromise = _b[_a];
              initializationPromisesToWaitFor.push(idPromise);
            }
          } // Run core gtag function with args after all relevant initialization
          // promises have been resolved.


          Promise.all(initializationPromisesToWaitFor) // Workaround for http://b/141370449 - third argument cannot be undefined.
          .then(function () {
            return gtagCore(GtagCommand.EVENT, idOrNameOrParams, gtagParams || {});
          })["catch"](function (e) {
            return logger.error(e);
          });
        } else if (command === GtagCommand.CONFIG) {
          var initializationPromiseToWait = initializedIdPromisesMap[idOrNameOrParams] || Promise.resolve();
          initializationPromiseToWait.then(function () {
            gtagCore(GtagCommand.CONFIG, idOrNameOrParams, gtagParams);
          })["catch"](function (e) {
            return logger.error(e);
          });
        } else {
          // SET command.
          // Splitting calls for CONFIG and SET to make it clear which signature
          // Typescript is checking.
          gtagCore(GtagCommand.SET, idOrNameOrParams);
        }
      };
    }
    /**
     * Creates global gtag function or wraps existing one if found.
     * This wrapped function attaches Firebase instance ID (FID) to gtag 'config' and
     * 'event' calls that belong to the GAID associated with this Firebase instance.
     *
     * @param initializedIdPromisesMap Map of gaId to initialization promises.
     * @param dataLayerName Name of global GA datalayer array.
     * @param gtagFunctionName Name of global gtag function ("gtag" if not user-specified)
     */


    function wrapOrCreateGtag(initializedIdPromisesMap, dataLayerName, gtagFunctionName) {
      // Create a basic core gtag function
      var gtagCore = function gtagCore() {
        var _args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          _args[_i] = arguments[_i];
        } // Must push IArguments object, not an array.


        window[dataLayerName].push(arguments);
      }; // Replace it with existing one if found


      if (window[gtagFunctionName] && typeof window[gtagFunctionName] === 'function') {
        // @ts-ignore
        gtagCore = window[gtagFunctionName];
      }

      window[gtagFunctionName] = wrapGtag(gtagCore, initializedIdPromisesMap);
      return {
        gtagCore: gtagCore,
        wrappedGtag: window[gtagFunctionName]
      };
    }
    /**
     * Returns first script tag in DOM matching our gtag url pattern.
     */


    function findGtagScriptOnPage() {
      var scriptTags = window.document.getElementsByTagName('script');

      for (var _i = 0, _a = Object.values(scriptTags); _i < _a.length; _i++) {
        var tag = _a[_i];

        if (tag.src && tag.src.includes(GTAG_URL)) {
          return tag;
        }
      }

      return null;
    }
    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var _a;

    var ERRORS = (_a = {}, _a["no-ga-id"
    /* NO_GA_ID */
    ] = "\"" + ANALYTICS_ID_FIELD + "\" field is empty in " + 'Firebase config. Firebase Analytics ' + 'requires this field to contain a valid measurement ID.', _a["already-exists"
    /* ALREADY_EXISTS */
    ] = 'A Firebase Analytics instance with the measurement ID ${id} ' + ' already exists. ' + 'Only one Firebase Analytics instance can be created for each measurement ID.', _a["already-initialized"
    /* ALREADY_INITIALIZED */
    ] = 'Firebase Analytics has already been initialized.' + 'settings() must be called before initializing any Analytics instance' + 'or it will have no effect.', _a["interop-component-reg-failed"
    /* INTEROP_COMPONENT_REG_FAILED */
    ] = 'Firebase Analytics Interop Component failed to instantiate', _a);
    var ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_4__["ErrorFactory"]('analytics', 'Analytics', ERRORS);
    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Maps gaId to FID fetch promises.
     */

    var initializedIdPromisesMap = {};
    /**
     * Name for window global data layer array used by GA: defaults to 'dataLayer'.
     */

    var dataLayerName = 'dataLayer';
    /**
     * Name for window global gtag function used by GA: defaults to 'gtag'.
     */

    var gtagName = 'gtag';
    /**
     * Reproduction of standard gtag function or reference to existing
     * gtag function on window object.
     */

    var gtagCoreFunction;
    /**
     * Wrapper around gtag function that ensures FID is sent with all
     * relevant event and config calls.
     */

    var wrappedGtagFunction;
    /**
     * Flag to ensure page initialization steps (creation or wrapping of
     * dataLayer and gtag script) are only run once per page load.
     */

    var globalInitDone = false;
    /**
     * For testing
     */

    function resetGlobalVars(newGlobalInitDone, newGaInitializedPromise) {
      if (newGlobalInitDone === void 0) {
        newGlobalInitDone = false;
      }

      if (newGaInitializedPromise === void 0) {
        newGaInitializedPromise = {};
      }

      globalInitDone = newGlobalInitDone;
      initializedIdPromisesMap = newGaInitializedPromise;
      dataLayerName = 'dataLayer';
      gtagName = 'gtag';
    }
    /**
     * For testing
     */


    function getGlobalVars() {
      return {
        initializedIdPromisesMap: initializedIdPromisesMap
      };
    }
    /**
     * This must be run before calling firebase.analytics() or it won't
     * have any effect.
     * @param options Custom gtag and dataLayer names.
     */


    function settings(options) {
      if (globalInitDone) {
        throw ERROR_FACTORY.create("already-initialized"
        /* ALREADY_INITIALIZED */
        );
      }

      if (options.dataLayerName) {
        dataLayerName = options.dataLayerName;
      }

      if (options.gtagName) {
        gtagName = options.gtagName;
      }
    }

    function factory(app, installations) {
      var analyticsId = app.options[ANALYTICS_ID_FIELD];

      if (!analyticsId) {
        throw ERROR_FACTORY.create("no-ga-id"
        /* NO_GA_ID */
        );
      }

      if (initializedIdPromisesMap[analyticsId] != null) {
        throw ERROR_FACTORY.create("already-exists"
        /* ALREADY_EXISTS */
        , {
          id: analyticsId
        });
      }

      if (!globalInitDone) {
        // Steps here should only be done once per page: creation or wrapping
        // of dataLayer and global gtag function.
        // Detect if user has already put the gtag <script> tag on this page.
        if (!findGtagScriptOnPage()) {
          insertScriptTag(dataLayerName);
        }

        getOrCreateDataLayer(dataLayerName);

        var _a = wrapOrCreateGtag(initializedIdPromisesMap, dataLayerName, gtagName),
            wrappedGtag = _a.wrappedGtag,
            gtagCore = _a.gtagCore;

        wrappedGtagFunction = wrappedGtag;
        gtagCoreFunction = gtagCore;
        globalInitDone = true;
      } // Async but non-blocking.


      initializedIdPromisesMap[analyticsId] = initializeGAId(app, installations, gtagCoreFunction);
      var analyticsInstance = {
        app: app,
        logEvent: function logEvent(eventName, eventParams, options) {
          return _logEvent(wrappedGtagFunction, analyticsId, eventName, eventParams, options);
        },
        setCurrentScreen: function setCurrentScreen(screenName, options) {
          return _setCurrentScreen(wrappedGtagFunction, analyticsId, screenName, options);
        },
        setUserId: function setUserId(id, options) {
          return _setUserId(wrappedGtagFunction, analyticsId, id, options);
        },
        setUserProperties: function setUserProperties(properties, options) {
          return _setUserProperties(wrappedGtagFunction, analyticsId, properties, options);
        },
        setAnalyticsCollectionEnabled: function setAnalyticsCollectionEnabled(enabled) {
          return _setAnalyticsCollectionEnabled(analyticsId, enabled);
        }
      };
      return analyticsInstance;
    }

    var name = "@firebase/analytics";
    var version = "0.3.3";
    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Type constant for Firebase Analytics.
     */

    var ANALYTICS_TYPE = 'analytics';

    function registerAnalytics(instance) {
      instance.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_5__["Component"](ANALYTICS_TYPE, function (container) {
        // getImmediate for FirebaseApp will always succeed
        var app = container.getProvider('app').getImmediate();
        var installations = container.getProvider('installations').getImmediate();
        return factory(app, installations);
      }, "PUBLIC"
      /* PUBLIC */
      ).setServiceProps({
        settings: settings,
        EventName: EventName
      }));
      instance.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_5__["Component"]('analytics-internal', internalFactory, "PRIVATE"
      /* PRIVATE */
      ));
      instance.registerVersion(name, version);

      function internalFactory(container) {
        try {
          var analytics = container.getProvider(ANALYTICS_TYPE).getImmediate();
          return {
            logEvent: analytics.logEvent
          };
        } catch (e) {
          throw ERROR_FACTORY.create("interop-component-reg-failed"
          /* INTEROP_COMPONENT_REG_FAILED */
          , {
            reason: e
          });
        }
      }
    }

    registerAnalytics(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceMappingURL=index.esm.js.map

    /***/
  },

  /***/
  "./node_modules/@firebase/functions/dist/index.cjs.js":
  /*!************************************************************!*\
    !*** ./node_modules/@firebase/functions/dist/index.cjs.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesFirebaseFunctionsDistIndexCjsJs(module, exports, __webpack_require__) {
    "use strict";

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
    }

    var firebase = _interopDefault(__webpack_require__(
    /*! @firebase/app */
    "./node_modules/@firebase/app/dist/index.cjs.js"));

    var tslib = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var component = __webpack_require__(
    /*! @firebase/component */
    "./node_modules/@firebase/component/dist/index.cjs.js");
    /**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Standard error codes for different ways a request can fail, as defined by:
     * https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto
     *
     * This map is used primarily to convert from a backend error code string to
     * a client SDK error code string, and make sure it's in the supported set.
     */


    var errorCodeMap = {
      OK: 'ok',
      CANCELLED: 'cancelled',
      UNKNOWN: 'unknown',
      INVALID_ARGUMENT: 'invalid-argument',
      DEADLINE_EXCEEDED: 'deadline-exceeded',
      NOT_FOUND: 'not-found',
      ALREADY_EXISTS: 'already-exists',
      PERMISSION_DENIED: 'permission-denied',
      UNAUTHENTICATED: 'unauthenticated',
      RESOURCE_EXHAUSTED: 'resource-exhausted',
      FAILED_PRECONDITION: 'failed-precondition',
      ABORTED: 'aborted',
      OUT_OF_RANGE: 'out-of-range',
      UNIMPLEMENTED: 'unimplemented',
      INTERNAL: 'internal',
      UNAVAILABLE: 'unavailable',
      DATA_LOSS: 'data-loss'
    };
    /**
     * An explicit error that can be thrown from a handler to send an error to the
     * client that called the function.
     */

    var HttpsErrorImpl =
    /** @class */
    function (_super) {
      tslib.__extends(HttpsErrorImpl, _super);

      function HttpsErrorImpl(code, message, details) {
        var _this = _super.call(this, message) || this; // This is a workaround for a bug in TypeScript when extending Error:
        // tslint:disable-next-line
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work


        Object.setPrototypeOf(_this, HttpsErrorImpl.prototype);
        _this.code = code;
        _this.details = details;
        return _this;
      }

      return HttpsErrorImpl;
    }(Error);
    /**
     * Takes an HTTP status code and returns the corresponding ErrorCode.
     * This is the standard HTTP status code -> error mapping defined in:
     * https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto
     *
     * @param status An HTTP status code.
     * @return The corresponding ErrorCode, or ErrorCode.UNKNOWN if none.
     */


    function codeForHTTPStatus(status) {
      // Make sure any successful status is OK.
      if (status >= 200 && status < 300) {
        return 'ok';
      }

      switch (status) {
        case 0:
          // This can happen if the server returns 500.
          return 'internal';

        case 400:
          return 'invalid-argument';

        case 401:
          return 'unauthenticated';

        case 403:
          return 'permission-denied';

        case 404:
          return 'not-found';

        case 409:
          return 'aborted';

        case 429:
          return 'resource-exhausted';

        case 499:
          return 'cancelled';

        case 500:
          return 'internal';

        case 501:
          return 'unimplemented';

        case 503:
          return 'unavailable';

        case 504:
          return 'deadline-exceeded';
      }

      return 'unknown';
    }
    /**
     * Takes an HTTP response and returns the corresponding Error, if any.
     */


    function _errorForResponse(status, bodyJSON, serializer) {
      var code = codeForHTTPStatus(status); // Start with reasonable defaults from the status code.

      var description = code;
      var details = undefined; // Then look through the body for explicit details.

      try {
        var errorJSON = bodyJSON && bodyJSON.error;

        if (errorJSON) {
          var status_1 = errorJSON.status;

          if (typeof status_1 === 'string') {
            if (!errorCodeMap[status_1]) {
              // They must've included an unknown error code in the body.
              return new HttpsErrorImpl('internal', 'internal');
            }

            code = errorCodeMap[status_1]; // TODO(klimt): Add better default descriptions for error enums.
            // The default description needs to be updated for the new code.

            description = status_1;
          }

          var message = errorJSON.message;

          if (typeof message === 'string') {
            description = message;
          }

          details = errorJSON.details;

          if (details !== undefined) {
            details = serializer.decode(details);
          }
        }
      } catch (e) {// If we couldn't parse explicit error data, that's fine.
      }

      if (code === 'ok') {
        // Technically, there's an edge case where a developer could explicitly
        // return an error code of OK, and we will treat it as success, but that
        // seems reasonable.
        return null;
      }

      return new HttpsErrorImpl(code, description, details);
    }
    /**
     * Helper class to get metadata that should be included with a function call.
     */


    var ContextProvider =
    /** @class */
    function () {
      function ContextProvider(authProvider, messagingProvider) {
        var _this = this;

        this.auth = null;
        this.messaging = null;
        this.auth = authProvider.getImmediate({
          optional: true
        });
        this.messaging = messagingProvider.getImmediate({
          optional: true
        });

        if (!this.auth) {
          authProvider.get().then(function (auth) {
            return _this.auth = auth;
          }, function () {
            /* get() never rejects */
          });
        }

        if (!this.messaging) {
          messagingProvider.get().then(function (messaging) {
            return _this.messaging = messaging;
          }, function () {
            /* get() never rejects */
          });
        }
      }

      ContextProvider.prototype.getAuthToken = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
          var token, e_1;
          return tslib.__generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                if (!this.auth) {
                  return [2
                  /*return*/
                  , undefined];
                }

                _a.label = 1;

              case 1:
                _a.trys.push([1, 3,, 4]);

                return [4
                /*yield*/
                , this.auth.getToken()];

              case 2:
                token = _a.sent();

                if (!token) {
                  return [2
                  /*return*/
                  , undefined];
                }

                return [2
                /*return*/
                , token.accessToken];

              case 3:
                e_1 = _a.sent(); // If there's any error when trying to get the auth token, leave it off.

                return [2
                /*return*/
                , undefined];

              case 4:
                return [2
                /*return*/
                ];
            }
          });
        });
      };

      ContextProvider.prototype.getInstanceIdToken = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
          return tslib.__generator(this, function (_a) {
            if (!this.messaging || !('Notification' in self) || Notification.permission !== 'granted') {
              return [2
              /*return*/
              , undefined];
            }

            try {
              return [2
              /*return*/
              , this.messaging.getToken()];
            } catch (e) {
              // We don't warn on this, because it usually means messaging isn't set up.
              // console.warn('Failed to retrieve instance id token.', e);
              // If there's any error when trying to get the token, leave it off.
              return [2
              /*return*/
              , undefined];
            }

            return [2
            /*return*/
            ];
          });
        });
      };

      ContextProvider.prototype.getContext = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
          var authToken, instanceIdToken;
          return tslib.__generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , this.getAuthToken()];

              case 1:
                authToken = _a.sent();
                return [4
                /*yield*/
                , this.getInstanceIdToken()];

              case 2:
                instanceIdToken = _a.sent();
                return [2
                /*return*/
                , {
                  authToken: authToken,
                  instanceIdToken: instanceIdToken
                }];
            }
          });
        });
      };

      return ContextProvider;
    }();
    /**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var LONG_TYPE = 'type.googleapis.com/google.protobuf.Int64Value';
    var UNSIGNED_LONG_TYPE = 'type.googleapis.com/google.protobuf.UInt64Value';

    function mapValues( // { [k: string]: unknown } is no longer a wildcard assignment target after typescript 3.5
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    o, f) {
      var result = {};

      for (var key in o) {
        if (o.hasOwnProperty(key)) {
          result[key] = f(o[key]);
        }
      }

      return result;
    }

    var Serializer =
    /** @class */
    function () {
      function Serializer() {} // Takes data and encodes it in a JSON-friendly way, such that types such as
      // Date are preserved.


      Serializer.prototype.encode = function (data) {
        var _this = this;

        if (data == null) {
          return null;
        }

        if (data instanceof Number) {
          data = data.valueOf();
        }

        if (typeof data === 'number' && isFinite(data)) {
          // Any number in JS is safe to put directly in JSON and parse as a double
          // without any loss of precision.
          return data;
        }

        if (data === true || data === false) {
          return data;
        }

        if (Object.prototype.toString.call(data) === '[object String]') {
          return data;
        }

        if (Array.isArray(data)) {
          return data.map(function (x) {
            return _this.encode(x);
          });
        }

        if (typeof data === 'function' || typeof data === 'object') {
          return mapValues(data, function (x) {
            return _this.encode(x);
          });
        } // If we got this far, the data is not encodable.


        throw new Error('Data cannot be encoded in JSON: ' + data);
      }; // Takes data that's been encoded in a JSON-friendly form and returns a form
      // with richer datatypes, such as Dates, etc.


      Serializer.prototype.decode = function (json) {
        var _this = this;

        if (json == null) {
          return json;
        }

        if (json['@type']) {
          switch (json['@type']) {
            case LONG_TYPE: // Fall through and handle this the same as unsigned.

            case UNSIGNED_LONG_TYPE:
              {
                // Technically, this could work return a valid number for malformed
                // data if there was a number followed by garbage. But it's just not
                // worth all the extra code to detect that case.
                var value = Number(json['value']);

                if (isNaN(value)) {
                  throw new Error('Data cannot be decoded from JSON: ' + json);
                }

                return value;
              }

            default:
              {
                throw new Error('Data cannot be decoded from JSON: ' + json);
              }
          }
        }

        if (Array.isArray(json)) {
          return json.map(function (x) {
            return _this.decode(x);
          });
        }

        if (typeof json === 'function' || typeof json === 'object') {
          return mapValues(json, function (x) {
            return _this.decode(x);
          });
        } // Anything else is safe to return.


        return json;
      };

      return Serializer;
    }();
    /**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Returns a Promise that will be rejected after the given duration.
     * The error will be of type HttpsErrorImpl.
     *
     * @param millis Number of milliseconds to wait before rejecting.
     */


    function failAfter(millis) {
      return new Promise(function (_, reject) {
        setTimeout(function () {
          reject(new HttpsErrorImpl('deadline-exceeded', 'deadline-exceeded'));
        }, millis);
      });
    }
    /**
     * The main class for the Firebase Functions SDK.
     */


    var Service =
    /** @class */
    function () {
      /**
       * Creates a new Functions service for the given app and (optional) region.
       * @param app_ The FirebaseApp to use.
       * @param region_ The region to call functions in.
       */
      function Service(app_, authProvider, messagingProvider, region_) {
        var _this = this;

        if (region_ === void 0) {
          region_ = 'us-central1';
        }

        this.app_ = app_;
        this.region_ = region_;
        this.serializer = new Serializer();
        this.emulatorOrigin = null;
        this.INTERNAL = {
          "delete": function _delete() {
            return _this.deleteService();
          }
        };
        this.contextProvider = new ContextProvider(authProvider, messagingProvider); // Cancels all ongoing requests when resolved.

        this.cancelAllRequests = new Promise(function (resolve) {
          _this.deleteService = function () {
            return resolve();
          };
        });
      }

      Object.defineProperty(Service.prototype, "app", {
        get: function get() {
          return this.app_;
        },
        enumerable: true,
        configurable: true
      });
      /**
       * Returns the URL for a callable with the given name.
       * @param name The name of the callable.
       */

      Service.prototype._url = function (name) {
        var projectId = this.app_.options.projectId;
        var region = this.region_;

        if (this.emulatorOrigin !== null) {
          var origin_1 = this.emulatorOrigin;
          return origin_1 + "/" + projectId + "/" + region + "/" + name;
        }

        return "https://" + region + "-" + projectId + ".cloudfunctions.net/" + name;
      };
      /**
       * Changes this instance to point to a Cloud Functions emulator running
       * locally. See https://firebase.google.com/docs/functions/local-emulator
       *
       * @param origin The origin of the local emulator, such as
       * "http://localhost:5005".
       */


      Service.prototype.useFunctionsEmulator = function (origin) {
        this.emulatorOrigin = origin;
      };
      /**
       * Returns a reference to the callable https trigger with the given name.
       * @param name The name of the trigger.
       */


      Service.prototype.httpsCallable = function (name, options) {
        var _this = this;

        return function (data) {
          return _this.call(name, data, options || {});
        };
      };
      /**
       * Does an HTTP POST and returns the completed response.
       * @param url The url to post to.
       * @param body The JSON body of the post.
       * @param headers The HTTP headers to include in the request.
       * @return A Promise that will succeed when the request finishes.
       */


      Service.prototype.postJSON = function (url, body, headers) {
        return tslib.__awaiter(this, void 0, void 0, function () {
          var response, e_1, json, e_2;
          return tslib.__generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                headers.append('Content-Type', 'application/json');
                _a.label = 1;

              case 1:
                _a.trys.push([1, 3,, 4]);

                return [4
                /*yield*/
                , fetch(url, {
                  method: 'POST',
                  body: JSON.stringify(body),
                  headers: headers
                })];

              case 2:
                response = _a.sent();
                return [3
                /*break*/
                , 4];

              case 3:
                e_1 = _a.sent(); // This could be an unhandled error on the backend, or it could be a
                // network error. There's no way to know, since an unhandled error on the
                // backend will fail to set the proper CORS header, and thus will be
                // treated as a network error by fetch.

                return [2
                /*return*/
                , {
                  status: 0,
                  json: null
                }];

              case 4:
                json = null;
                _a.label = 5;

              case 5:
                _a.trys.push([5, 7,, 8]);

                return [4
                /*yield*/
                , response.json()];

              case 6:
                json = _a.sent();
                return [3
                /*break*/
                , 8];

              case 7:
                e_2 = _a.sent();
                return [3
                /*break*/
                , 8];

              case 8:
                return [2
                /*return*/
                , {
                  status: response.status,
                  json: json
                }];
            }
          });
        });
      };
      /**
       * Calls a callable function asynchronously and returns the result.
       * @param name The name of the callable trigger.
       * @param data The data to pass as params to the function.s
       */


      Service.prototype.call = function (name, data, options) {
        return tslib.__awaiter(this, void 0, void 0, function () {
          var url, body, headers, context, timeout, response, error, responseData, decodedData;
          return tslib.__generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                url = this._url(name); // Encode any special types, such as dates, in the input data.

                data = this.serializer.encode(data);
                body = {
                  data: data
                };
                headers = new Headers();
                return [4
                /*yield*/
                , this.contextProvider.getContext()];

              case 1:
                context = _a.sent();

                if (context.authToken) {
                  headers.append('Authorization', 'Bearer ' + context.authToken);
                }

                if (context.instanceIdToken) {
                  headers.append('Firebase-Instance-ID-Token', context.instanceIdToken);
                }

                timeout = options.timeout || 70000;
                return [4
                /*yield*/
                , Promise.race([this.postJSON(url, body, headers), failAfter(timeout), this.cancelAllRequests])];

              case 2:
                response = _a.sent(); // If service was deleted, interrupted response throws an error.

                if (!response) {
                  throw new HttpsErrorImpl('cancelled', 'Firebase Functions instance was deleted.');
                }

                error = _errorForResponse(response.status, response.json, this.serializer);

                if (error) {
                  throw error;
                }

                if (!response.json) {
                  throw new HttpsErrorImpl('internal', 'Response is not valid JSON object.');
                }

                responseData = response.json.data; // TODO(klimt): For right now, allow "result" instead of "data", for
                // backwards compatibility.

                if (typeof responseData === 'undefined') {
                  responseData = response.json.result;
                }

                if (typeof responseData === 'undefined') {
                  // Consider the response malformed.
                  throw new HttpsErrorImpl('internal', 'Response is missing data field.');
                }

                decodedData = this.serializer.decode(responseData);
                return [2
                /*return*/
                , {
                  data: decodedData
                }];
            }
          });
        });
      };

      return Service;
    }();
    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Type constant for Firebase Functions.
     */


    var FUNCTIONS_TYPE = 'functions';

    function factory(container, region) {
      // Dependencies
      var app = container.getProvider('app').getImmediate();
      var authProvider = container.getProvider('auth-internal');
      var messagingProvider = container.getProvider('messaging'); // eslint-disable-next-line @typescript-eslint/no-explicit-any

      return new Service(app, authProvider, messagingProvider, region);
    }

    function registerFunctions(instance) {
      var namespaceExports = {
        // no-inline
        Functions: Service
      };
      instance.INTERNAL.registerComponent(new component.Component(FUNCTIONS_TYPE, factory, "PUBLIC"
      /* PUBLIC */
      ).setServiceProps(namespaceExports).setMultipleInstances(true));
    }

    var name = "@firebase/functions";
    var version = "0.4.41";
    /**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    registerFunctions(firebase);
    firebase.registerVersion(name, version); //# sourceMappingURL=index.cjs.js.map

    /***/
  },

  /***/
  "./node_modules/@firebase/performance/dist/index.cjs.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@firebase/performance/dist/index.cjs.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesFirebasePerformanceDistIndexCjsJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
    }

    var firebase = _interopDefault(__webpack_require__(
    /*! @firebase/app */
    "./node_modules/@firebase/app/dist/index.cjs.js"));

    __webpack_require__(
    /*! @firebase/installations */
    "./node_modules/@firebase/installations/dist/index.esm.js");

    var tslib = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var util = __webpack_require__(
    /*! @firebase/util */
    "./node_modules/@firebase/util/dist/index.cjs.js");

    var logger$1 = __webpack_require__(
    /*! @firebase/logger */
    "./node_modules/@firebase/logger/dist/index.esm.js");

    var component = __webpack_require__(
    /*! @firebase/component */
    "./node_modules/@firebase/component/dist/index.cjs.js");

    var name = "@firebase/performance";
    var version = "0.3.1";
    /**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    var SDK_VERSION = version;
    /** The prefix for start User Timing marks used for creating Traces. */

    var TRACE_START_MARK_PREFIX = 'FB-PERF-TRACE-START';
    /** The prefix for stop User Timing marks used for creating Traces. */

    var TRACE_STOP_MARK_PREFIX = 'FB-PERF-TRACE-STOP';
    /** The prefix for User Timing measure used for creating Traces. */

    var TRACE_MEASURE_PREFIX = 'FB-PERF-TRACE-MEASURE';
    /** The prefix for out of the box page load Trace name. */

    var OOB_TRACE_PAGE_LOAD_PREFIX = '_wt_';
    var FIRST_PAINT_COUNTER_NAME = '_fp';
    var FIRST_CONTENTFUL_PAINT_COUNTER_NAME = '_fcp';
    var FIRST_INPUT_DELAY_COUNTER_NAME = '_fid';
    var CONFIG_LOCAL_STORAGE_KEY = '@firebase/performance/config';
    var CONFIG_EXPIRY_LOCAL_STORAGE_KEY = '@firebase/performance/configexpire';
    var SERVICE = 'performance';
    var SERVICE_NAME = 'Performance';
    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    var _a;

    var ERROR_DESCRIPTION_MAP = (_a = {}, _a["trace started"
    /* TRACE_STARTED_BEFORE */
    ] = 'Trace {$traceName} was started before.', _a["trace stopped"
    /* TRACE_STOPPED_BEFORE */
    ] = 'Trace {$traceName} is not running.', _a["no window"
    /* NO_WINDOW */
    ] = 'Window is not available.', _a["no app id"
    /* NO_APP_ID */
    ] = 'App id is not available.', _a["no project id"
    /* NO_PROJECT_ID */
    ] = 'Project id is not available.', _a["no api key"
    /* NO_API_KEY */
    ] = 'Api key is not available.', _a["invalid cc log"
    /* INVALID_CC_LOG */
    ] = 'Attempted to queue invalid cc event', _a["FB not default"
    /* FB_NOT_DEFAULT */
    ] = 'Performance can only start when Firebase app instance is the default one.', _a["RC response not ok"
    /* RC_NOT_OK */
    ] = 'RC response is not ok', _a["invalid attribute name"
    /* INVALID_ATTRIBUTE_NAME */
    ] = 'Attribute name {$attributeName} is invalid.', _a["invalid attribute value"
    /* INVALID_ATTRIBUTE_VALUE */
    ] = 'Attribute value {$attributeValue} is invalid.', _a["invalid custom metric name"
    /* INVALID_CUSTOM_METRIC_NAME */
    ] = 'Custom metric name {$customMetricName} is invalid', _a["invalid String merger input"
    /* INVALID_STRING_MERGER_PARAMETER */
    ] = 'Input for String merger is invalid, contact support team to resolve.', _a);
    var ERROR_FACTORY = new util.ErrorFactory(SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);
    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    var apiInstance;
    var windowInstance;
    /**
     * This class holds a reference to various browser related objects injected by
     * set methods.
     */

    var Api =
    /** @class */
    function () {
      function Api(window) {
        this.window = window;

        if (!window) {
          throw ERROR_FACTORY.create("no window"
          /* NO_WINDOW */
          );
        }

        this.performance = window.performance;
        this.PerformanceObserver = window.PerformanceObserver;
        this.windowLocation = window.location;
        this.navigator = window.navigator;
        this.document = window.document;

        if (this.navigator && this.navigator.cookieEnabled) {
          // If user blocks cookies on the browser, accessing localStorage will
          // throw an exception.
          this.localStorage = window.localStorage;
        }

        if (window.perfMetrics && window.perfMetrics.onFirstInputDelay) {
          this.onFirstInputDelay = window.perfMetrics.onFirstInputDelay;
        }
      }

      Api.prototype.getUrl = function () {
        // Do not capture the string query part of url.
        return this.windowLocation.href.split('?')[0];
      };

      Api.prototype.mark = function (name) {
        if (!this.performance || !this.performance.mark) {
          return;
        }

        this.performance.mark(name);
      };

      Api.prototype.measure = function (measureName, mark1, mark2) {
        if (!this.performance || !this.performance.measure) {
          return;
        }

        this.performance.measure(measureName, mark1, mark2);
      };

      Api.prototype.getEntriesByType = function (type) {
        if (!this.performance || !this.performance.getEntriesByType) {
          return [];
        }

        return this.performance.getEntriesByType(type);
      };

      Api.prototype.getEntriesByName = function (name) {
        if (!this.performance || !this.performance.getEntriesByName) {
          return [];
        }

        return this.performance.getEntriesByName(name);
      };

      Api.prototype.getTimeOrigin = function () {
        // Polyfill the time origin with performance.timing.navigationStart.
        return this.performance && (this.performance.timeOrigin || this.performance.timing.navigationStart);
      };

      Api.prototype.requiredApisAvailable = function () {
        if (fetch && Promise && this.navigator && this.navigator.cookieEnabled) {
          return true;
        }

        return false;
      };

      Api.prototype.setupObserver = function (entryType, callback) {
        if (!this.PerformanceObserver) {
          return;
        }

        var observer = new this.PerformanceObserver(function (list) {
          for (var _i = 0, _a = list.getEntries(); _i < _a.length; _i++) {
            var entry = _a[_i]; // `entry` is a PerformanceEntry instance.

            callback(entry);
          }
        }); // Start observing the entry types you care about.

        observer.observe({
          entryTypes: [entryType]
        });
      };

      Api.getInstance = function () {
        if (apiInstance === undefined) {
          apiInstance = new Api(windowInstance);
        }

        return apiInstance;
      };

      return Api;
    }();

    function setupApi(window) {
      windowInstance = window;
    }
    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    function mergeStrings(part1, part2) {
      var sizeDiff = part1.length - part2.length;

      if (sizeDiff < 0 || sizeDiff > 1) {
        throw ERROR_FACTORY.create("invalid String merger input"
        /* INVALID_STRING_MERGER_PARAMETER */
        );
      }

      var resultArray = [];

      for (var i = 0; i < part1.length; i++) {
        resultArray.push(part1.charAt(i));

        if (part2.length > i) {
          resultArray.push(part2.charAt(i));
        }
      }

      return resultArray.join('');
    }
    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var settingsServiceInstance;

    var SettingsService =
    /** @class */
    function () {
      function SettingsService() {
        // The variable which controls logging of automatic traces and HTTP/S network monitoring.
        this.instrumentationEnabled = true; // The variable which controls logging of custom traces.

        this.dataCollectionEnabled = true; // Configuration flags set through remote config.

        this.loggingEnabled = false; // Sampling rate between 0 and 1.

        this.tracesSamplingRate = 1;
        this.networkRequestsSamplingRate = 1; // Address of logging service.

        this.logEndPointUrl = 'https://firebaselogging.googleapis.com/v0cc/log?format=json_proto'; // Performance event transport endpoint URL which should be compatible with proto3.
        // New Address for transport service, not configurable via Remote Config.

        this.flTransportEndpointUrl = mergeStrings('hts/frbslgigp.ogepscmv/ieo/eaylg', 'tp:/ieaeogn-agolai.o/1frlglgc/o');
        this.transportKey = mergeStrings('AzSC8r6ReiGqFMyfvgow', 'Iayx0u-XT3vksVM-pIV');
        this.shouldSendToFl = false; // Source type for performance event logs.

        this.logSource = 462; // Flags which control per session logging of traces and network requests.

        this.logTraceAfterSampling = false;
        this.logNetworkAfterSampling = false; // TTL of config retrieved from remote config in hours.

        this.configTimeToLive = 12;
      }

      SettingsService.prototype.getAppId = function () {
        var appId = this.firebaseAppInstance && this.firebaseAppInstance.options && this.firebaseAppInstance.options.appId;

        if (!appId) {
          throw ERROR_FACTORY.create("no app id"
          /* NO_APP_ID */
          );
        }

        return appId;
      };

      SettingsService.prototype.getProjectId = function () {
        var projectId = this.firebaseAppInstance && this.firebaseAppInstance.options && this.firebaseAppInstance.options.projectId;

        if (!projectId) {
          throw ERROR_FACTORY.create("no project id"
          /* NO_PROJECT_ID */
          );
        }

        return projectId;
      };

      SettingsService.prototype.getApiKey = function () {
        var apiKey = this.firebaseAppInstance && this.firebaseAppInstance.options && this.firebaseAppInstance.options.apiKey;

        if (!apiKey) {
          throw ERROR_FACTORY.create("no api key"
          /* NO_API_KEY */
          );
        }

        return apiKey;
      };

      SettingsService.prototype.getFlTransportFullUrl = function () {
        return this.flTransportEndpointUrl.concat('?key=', this.transportKey);
      };

      SettingsService.getInstance = function () {
        if (settingsServiceInstance === undefined) {
          settingsServiceInstance = new SettingsService();
        }

        return settingsServiceInstance;
      };

      return SettingsService;
    }();
    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var iid;

    function getIidPromise() {
      var iidPromise = SettingsService.getInstance().installationsService.getId(); // eslint-disable-next-line @typescript-eslint/no-floating-promises

      iidPromise.then(function (iidVal) {
        iid = iidVal;
      });
      return iidPromise;
    } // This method should be used after the iid is retrieved by getIidPromise method.


    function getIid() {
      return iid;
    }

    function getAuthTokenPromise() {
      var authTokenPromise = SettingsService.getInstance().installationsService.getToken(); // eslint-disable-next-line @typescript-eslint/no-floating-promises

      authTokenPromise.then(function (authTokenVal) {});
      return authTokenPromise;
    }
    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var VisibilityState;

    (function (VisibilityState) {
      VisibilityState[VisibilityState["UNKNOWN"] = 0] = "UNKNOWN";
      VisibilityState[VisibilityState["VISIBLE"] = 1] = "VISIBLE";
      VisibilityState[VisibilityState["HIDDEN"] = 2] = "HIDDEN";
    })(VisibilityState || (VisibilityState = {}));

    var RESERVED_ATTRIBUTE_PREFIXES = ['firebase_', 'google_', 'ga_'];
    var ATTRIBUTE_FORMAT_REGEX = new RegExp('^[a-zA-Z]\\w*$');
    var MAX_ATTRIBUTE_NAME_LENGTH = 40;
    var MAX_ATTRIBUTE_VALUE_LENGTH = 100;

    function getServiceWorkerStatus() {
      var navigator = Api.getInstance().navigator;

      if ('serviceWorker' in navigator) {
        if (navigator.serviceWorker.controller) {
          return 2
          /* CONTROLLED */
          ;
        } else {
            return 3
            /* UNCONTROLLED */
            ;
          }
      } else {
          return 1
          /* UNSUPPORTED */
          ;
        }
    }

    function getVisibilityState() {
      var document = Api.getInstance().document;
      var visibilityState = document.visibilityState;

      switch (visibilityState) {
        case 'visible':
          return VisibilityState.VISIBLE;

        case 'hidden':
          return VisibilityState.HIDDEN;

        default:
          return VisibilityState.UNKNOWN;
      }
    }

    function getEffectiveConnectionType() {
      var navigator = Api.getInstance().navigator;
      var navigatorConnection = navigator.connection;
      var effectiveType = navigatorConnection && navigatorConnection.effectiveType;

      switch (effectiveType) {
        case 'slow-2g':
          return 1
          /* CONNECTION_SLOW_2G */
          ;

        case '2g':
          return 2
          /* CONNECTION_2G */
          ;

        case '3g':
          return 3
          /* CONNECTION_3G */
          ;

        case '4g':
          return 4
          /* CONNECTION_4G */
          ;

        default:
          return 0
          /* UNKNOWN */
          ;
      }
    }

    function isValidCustomAttributeName(name) {
      if (name.length === 0 || name.length > MAX_ATTRIBUTE_NAME_LENGTH) {
        return false;
      }

      var matchesReservedPrefix = RESERVED_ATTRIBUTE_PREFIXES.some(function (prefix) {
        return name.startsWith(prefix);
      });
      return !matchesReservedPrefix && !!name.match(ATTRIBUTE_FORMAT_REGEX);
    }

    function isValidCustomAttributeValue(value) {
      return value.length !== 0 && value.length <= MAX_ATTRIBUTE_VALUE_LENGTH;
    }
    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var consoleLogger = new logger$1.Logger(SERVICE_NAME);
    consoleLogger.logLevel = logger$1.LogLevel.INFO;
    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    var REMOTE_CONFIG_SDK_VERSION = '0.0.1'; // These values will be used if the remote config object is successfully
    // retrieved, but the template does not have these fields.

    var DEFAULT_CONFIGS = {
      loggingEnabled: true,
      shouldSendToFl: true
    }; // These values will be used if the remote config object is successfully
    // retrieved, but the config object state shows unspecified or no template.

    var NO_TEMPLATE_CONFIGS = {
      shouldSendToFl: false
    };
    var FIS_AUTH_PREFIX = 'FIREBASE_INSTALLATIONS_AUTH';

    function getConfig(iid) {
      var config = getStoredConfig();

      if (config) {
        processConfig(iid, config);
        return Promise.resolve();
      }

      return getRemoteConfig(iid).then(function (config) {
        return processConfig(iid, config);
      }).then(function (config) {
        return storeConfig(config);
      },
      /** Do nothing for error, use defaults set in settings service. */
      function () {});
    }

    function getStoredConfig() {
      var localStorage = Api.getInstance().localStorage;

      if (!localStorage) {
        return;
      }

      var expiryString = localStorage.getItem(CONFIG_EXPIRY_LOCAL_STORAGE_KEY);

      if (!expiryString || !configValid(expiryString)) {
        return;
      }

      var configStringified = localStorage.getItem(CONFIG_LOCAL_STORAGE_KEY);

      if (!configStringified) {
        return;
      }

      try {
        var configResponse = JSON.parse(configStringified);
        return configResponse;
      } catch (_a) {
        return;
      }
    }

    function storeConfig(config) {
      var localStorage = Api.getInstance().localStorage;

      if (!config || !localStorage) {
        return;
      }

      localStorage.setItem(CONFIG_LOCAL_STORAGE_KEY, JSON.stringify(config));
      localStorage.setItem(CONFIG_EXPIRY_LOCAL_STORAGE_KEY, String(Date.now() + SettingsService.getInstance().configTimeToLive * 60 * 60 * 1000));
    }

    var COULD_NOT_GET_CONFIG_MSG = 'Could not fetch config, will use default configs';

    function getRemoteConfig(iid) {
      // Perf needs auth token only to retrieve remote config.
      return getAuthTokenPromise().then(function (authToken) {
        var projectId = SettingsService.getInstance().getProjectId();
        var configEndPoint = "https://firebaseremoteconfig.googleapis.com/v1/projects/" + projectId + "/namespaces/fireperf:fetch?key=" + SettingsService.getInstance().getApiKey();
        var request = new Request(configEndPoint, {
          method: 'POST',
          headers: {
            Authorization: FIS_AUTH_PREFIX + " " + authToken
          },

          /* eslint-disable camelcase */
          body: JSON.stringify({
            app_instance_id: iid,
            app_instance_id_token: authToken,
            app_id: SettingsService.getInstance().getAppId(),
            app_version: SDK_VERSION,
            sdk_version: REMOTE_CONFIG_SDK_VERSION
          })
          /* eslint-enable camelcase */

        });
        return fetch(request).then(function (response) {
          if (response.ok) {
            return response.json();
          } // In case response is not ok. This will be caught by catch.


          throw ERROR_FACTORY.create("RC response not ok"
          /* RC_NOT_OK */
          );
        });
      })["catch"](function () {
        consoleLogger.info(COULD_NOT_GET_CONFIG_MSG);
        return undefined;
      });
    }
    /**
     * Processes config coming either from calling RC or from local storage.
     * This method only runs if call is successful or config in storage
     * is valid.
     */


    function processConfig(iid, config) {
      if (!config) {
        return config;
      }

      var settingsServiceInstance = SettingsService.getInstance();
      var entries = config.entries || {};
      var state = config.state;

      if (entries.fpr_enabled !== undefined) {
        // TODO: Change the assignment of loggingEnabled once the received type is
        // known.
        settingsServiceInstance.loggingEnabled = String(entries.fpr_enabled) === 'true';
      } else {
        // Config retrieved successfully, but there is no fpr_enabled in template.
        // Use secondary configs value.
        settingsServiceInstance.loggingEnabled = DEFAULT_CONFIGS.loggingEnabled;
      }

      if (entries.fpr_log_source) {
        settingsServiceInstance.logSource = Number(entries.fpr_log_source);
      }

      if (entries.fpr_log_endpoint_url) {
        settingsServiceInstance.logEndPointUrl = entries.fpr_log_endpoint_url;
      } // Key from Remote Config has to be non-empty string, otherwsie use local value.


      if (entries.fpr_log_transport_key) {
        settingsServiceInstance.transportKey = entries.fpr_log_transport_key;
      } // If config object state indicates that no template has been set, that means it is new user of
      // Performance Monitoring and should use the old log endpoint, because it is guaranteed to work.


      if (state === undefined || state === 'INSTANCE_STATE_UNSPECIFIED' || state === 'NO_TEMPLATE') {
        {
          settingsServiceInstance.shouldSendToFl = NO_TEMPLATE_CONFIGS.shouldSendToFl;
        }
      } else if (entries.fpr_log_transport_web_percent) {
        // If config object state doesn't indicate no template, it can only be UPDATE for now.
        // - Performance Monitoring doesn't set etag in request, therefore state cannot be NO_CHANGE.
        // - Sampling rate flags and master flag are required, therefore state cannot be EMPTY_CONFIG.
        // If config object state is UPDATE and rollout flag is present, determine endpoint by iid.
        settingsServiceInstance.shouldSendToFl = isDestFl(iid, Number(entries.fpr_log_transport_web_percent));
      } else {
        // If config object state is UPDATE and rollout flag is not present, that means rollout is
        // complete and rollout flag is deprecated, therefore dispatch events to new transport endpoint.
        settingsServiceInstance.shouldSendToFl = DEFAULT_CONFIGS.shouldSendToFl;
      }

      if (entries.fpr_vc_network_request_sampling_rate !== undefined) {
        settingsServiceInstance.networkRequestsSamplingRate = Number(entries.fpr_vc_network_request_sampling_rate);
      }

      if (entries.fpr_vc_trace_sampling_rate !== undefined) {
        settingsServiceInstance.tracesSamplingRate = Number(entries.fpr_vc_trace_sampling_rate);
      } // Set the per session trace and network logging flags.


      settingsServiceInstance.logTraceAfterSampling = shouldLogAfterSampling(settingsServiceInstance.tracesSamplingRate);
      settingsServiceInstance.logNetworkAfterSampling = shouldLogAfterSampling(settingsServiceInstance.networkRequestsSamplingRate);
      return config;
    }

    function configValid(expiry) {
      return Number(expiry) > Date.now();
    }

    function shouldLogAfterSampling(samplingRate) {
      return Math.random() <= samplingRate;
    }
    /**
     * True if event should be sent to Fl transport endpoint rather than CC transport endpoint.
     * rolloutPercent is in range [0.0, 100.0].
     * @param iid Installation ID which identifies a web app installed on client.
     * @param rolloutPercent the possibility of this app sending events to Fl endpoint.
     * @return true if this installation should send events to Fl endpoint.
     */


    function isDestFl(iid, rolloutPercent) {
      if (iid.length === 0) {
        return false;
      }

      return getHashPercent(iid) < rolloutPercent;
    }
    /**
     * Generate integer value range in [0, 99]. Implementation from String.hashCode() in Java.
     * @param seed Same seed will generate consistent hash value using this algorithm.
     * @return Hash value in range [0, 99], generated from seed and hash algorithm.
     */


    function getHashPercent(seed) {
      var hash = 0;

      for (var i = 0; i < seed.length; i++) {
        hash = (hash << 3) + hash - seed.charCodeAt(i);
      }

      hash = Math.abs(hash % 100);
      return hash;
    }
    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var initializationStatus = 1
    /* notInitialized */
    ;
    var initializationPromise;

    function getInitializationPromise() {
      initializationStatus = 2
      /* initializationPending */
      ;
      initializationPromise = initializationPromise || initializePerf();
      return initializationPromise;
    }

    function isPerfInitialized() {
      return initializationStatus === 3
      /* initialized */
      ;
    }

    function initializePerf() {
      return getDocumentReadyComplete().then(function () {
        return getIidPromise();
      }).then(function (iid) {
        return getConfig(iid);
      }).then(function () {
        return changeInitializationStatus();
      }, function () {
        return changeInitializationStatus();
      });
    }
    /**
     * Returns a promise which resolves whenever the document readystate is complete or
     * immediately if it is called after page load complete.
     */


    function getDocumentReadyComplete() {
      var document = Api.getInstance().document;
      return new Promise(function (resolve) {
        if (document && document.readyState !== 'complete') {
          var handler_1 = function handler_1() {
            if (document.readyState === 'complete') {
              document.removeEventListener('readystatechange', handler_1);
              resolve();
            }
          };

          document.addEventListener('readystatechange', handler_1);
        } else {
          resolve();
        }
      });
    }

    function changeInitializationStatus() {
      initializationStatus = 3
      /* initialized */
      ;
    }
    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var DEFAULT_SEND_INTERVAL_MS = 10 * 1000;
    var INITIAL_SEND_TIME_DELAY_MS = 5.5 * 1000; // If end point does not work, the call will be tried for these many times.

    var DEFAULT_REMAINING_TRIES = 3;
    var remainingTries = DEFAULT_REMAINING_TRIES;
    /* eslint-enable camelcase */

    var queue = [];
    var isTransportSetup = false;

    function setupTransportService() {
      if (!isTransportSetup) {
        processQueue(INITIAL_SEND_TIME_DELAY_MS);
        isTransportSetup = true;
      }
    }

    function processQueue(timeOffset) {
      setTimeout(function () {
        // If there is no remainingTries left, stop retrying.
        if (remainingTries === 0) {
          return;
        } // If there are no events to process, wait for DEFAULT_SEND_INTERVAL_MS and try again.


        if (!queue.length) {
          return processQueue(DEFAULT_SEND_INTERVAL_MS);
        }

        dispatchQueueEvents();
      }, timeOffset);
    }

    function dispatchQueueEvents() {
      // Capture a snapshot of the queue and empty the "official queue".
      var staged = tslib.__spreadArrays(queue);

      queue = [];
      /* eslint-disable camelcase */
      // We will pass the JSON serialized event to the backend.

      var log_event = staged.map(function (evt) {
        return {
          source_extension_json_proto3: evt.message,
          event_time_ms: String(evt.eventTime)
        };
      });
      var data = {
        request_time_ms: String(Date.now()),
        client_info: {
          client_type: 1,
          js_client_info: {}
        },
        log_source: SettingsService.getInstance().logSource,
        log_event: log_event
      };
      /* eslint-enable camelcase */

      postToEndpoint(data, staged)["catch"](function () {
        // If the request fails for some reason, add the events that were attempted
        // back to the primary queue to retry later.
        queue = tslib.__spreadArrays(staged, queue);
        remainingTries--;
        consoleLogger.info("Tries left: " + remainingTries + ".");
        processQueue(DEFAULT_SEND_INTERVAL_MS);
      });
    }

    function postToEndpoint(data, staged) {
      // Gradually rollout traffic from cc to transport using remote config.
      if (SettingsService.getInstance().shouldSendToFl) {
        return sendEventsToFl(data, staged);
      } else {
        return sendEventsToCc(data);
      }
    }

    function sendEventsToFl(data, staged) {
      return postToFlEndpoint(data).then(function (res) {
        if (!res.ok) {
          consoleLogger.info('Call to Firebase backend failed.');
        }

        return res.json();
      }).then(function (res) {
        // Find the next call wait time from the response.
        var transportWait = Number(res.nextRequestWaitMillis);
        var requestOffset = DEFAULT_SEND_INTERVAL_MS;

        if (!isNaN(transportWait)) {
          requestOffset = Math.max(transportWait, requestOffset);
        } // Delete request if response include RESPONSE_ACTION_UNKNOWN or DELETE_REQUEST action.
        // Otherwise, retry request using normal scheduling if response include RETRY_REQUEST_LATER.


        var logResponseDetails = res.logResponseDetails;

        if (Array.isArray(logResponseDetails) && logResponseDetails.length > 0 && logResponseDetails[0].responseAction === 'RETRY_REQUEST_LATER') {
          queue = tslib.__spreadArrays(staged, queue);
          consoleLogger.info("Retry transport request later.");
        }

        remainingTries = DEFAULT_REMAINING_TRIES; // Schedule the next process.

        processQueue(requestOffset);
      });
    }

    function sendEventsToCc(data) {
      return fetch(SettingsService.getInstance().logEndPointUrl, {
        method: 'POST',
        body: JSON.stringify(data)
      }).then(function (res) {
        if (!res.ok) {
          consoleLogger.info('Call to Firebase backend failed.');
        }

        return res.json();
      }).then(function (res) {
        var wait = Number(res.next_request_wait_millis); // Find the next call wait time from the response.

        var requestOffset = isNaN(wait) ? DEFAULT_SEND_INTERVAL_MS : Math.max(DEFAULT_SEND_INTERVAL_MS, wait);
        remainingTries = DEFAULT_REMAINING_TRIES; // Schedule the next process.

        processQueue(requestOffset);
      });
    }

    function postToFlEndpoint(data) {
      var flTransportFullUrl = SettingsService.getInstance().getFlTransportFullUrl();
      return fetch(flTransportFullUrl, {
        method: 'POST',
        body: JSON.stringify(data)
      });
    }

    function addToQueue(evt) {
      if (!evt.eventTime || !evt.message) {
        throw ERROR_FACTORY.create("invalid cc log"
        /* INVALID_CC_LOG */
        );
      } // Add the new event to the queue.


      queue = tslib.__spreadArrays(queue, [evt]);
    }
    /** Log handler for cc service to send the performance logs to the server. */


    function transportHandler( // eslint-disable-next-line @typescript-eslint/no-explicit-any
    serializer) {
      return function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        var message = serializer.apply(void 0, args);
        addToQueue({
          message: message,
          eventTime: Date.now()
        });
      };
    }
    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /* eslint-enble camelcase */


    var logger; // This method is not called before initialization.

    function sendLog(resource, resourceType) {
      if (!logger) {
        logger = transportHandler(serializer);
      }

      logger(resource, resourceType);
    }

    function logTrace(trace) {
      var settingsService = SettingsService.getInstance(); // Do not log if trace is auto generated and instrumentation is disabled.

      if (!settingsService.instrumentationEnabled && trace.isAuto) {
        return;
      } // Do not log if trace is custom and data collection is disabled.


      if (!settingsService.dataCollectionEnabled && !trace.isAuto) {
        return;
      } // Do not log if required apis are not available.


      if (!Api.getInstance().requiredApisAvailable()) {
        return;
      } // Only log the page load auto traces if page is visible.


      if (trace.isAuto && getVisibilityState() !== VisibilityState.VISIBLE) {
        return;
      }

      if (!settingsService.loggingEnabled || !settingsService.logTraceAfterSampling) {
        return;
      }

      if (isPerfInitialized()) {
        sendTraceLog(trace);
      } else {
        // Custom traces can be used before the initialization but logging
        // should wait until after.
        getInitializationPromise().then(function () {
          return sendTraceLog(trace);
        }, function () {
          return sendTraceLog(trace);
        });
      }
    }

    function sendTraceLog(trace) {
      if (getIid()) {
        setTimeout(function () {
          return sendLog(trace, 1
          /* Trace */
          );
        }, 0);
      }
    }

    function logNetworkRequest(networkRequest) {
      var settingsService = SettingsService.getInstance(); // Do not log network requests if instrumentation is disabled.

      if (!settingsService.instrumentationEnabled) {
        return;
      } // Do not log the js sdk's call to transport service domain to avoid unnecessary cycle.
      // Need to blacklist both old and new endpoints to avoid migration gap.


      var networkRequestUrl = networkRequest.url; // Blacklist old log endpoint and new transport endpoint.
      // Because Performance SDK doesn't instrument requests sent from SDK itself.

      var logEndpointUrl = settingsService.logEndPointUrl.split('?')[0];
      var flEndpointUrl = settingsService.flTransportEndpointUrl.split('?')[0];

      if (networkRequestUrl === logEndpointUrl || networkRequestUrl === flEndpointUrl) {
        return;
      }

      if (!settingsService.loggingEnabled || !settingsService.logNetworkAfterSampling) {
        return;
      }

      setTimeout(function () {
        return sendLog(networkRequest, 0
        /* NetworkRequest */
        );
      }, 0);
    }

    function serializer(resource, resourceType) {
      if (resourceType === 0
      /* NetworkRequest */
      ) {
          return serializeNetworkRequest(resource);
        }

      return serializeTrace(resource);
    }

    function serializeNetworkRequest(networkRequest) {
      var networkRequestMetric = {
        url: networkRequest.url,
        http_method: networkRequest.httpMethod || 0,
        http_response_code: 200,
        response_payload_bytes: networkRequest.responsePayloadBytes,
        client_start_time_us: networkRequest.startTimeUs,
        time_to_response_initiated_us: networkRequest.timeToResponseInitiatedUs,
        time_to_response_completed_us: networkRequest.timeToResponseCompletedUs
      };
      var perfMetric = {
        application_info: getApplicationInfo(),
        network_request_metric: networkRequestMetric
      };
      return JSON.stringify(perfMetric);
    }

    function serializeTrace(trace) {
      var traceMetric = {
        name: trace.name,
        is_auto: trace.isAuto,
        client_start_time_us: trace.startTimeUs,
        duration_us: trace.durationUs
      };

      if (Object.keys(trace.counters).length !== 0) {
        traceMetric.counters = trace.counters;
      }

      var customAttributes = trace.getAttributes();

      if (Object.keys(customAttributes).length !== 0) {
        traceMetric.custom_attributes = customAttributes;
      }

      var perfMetric = {
        application_info: getApplicationInfo(),
        trace_metric: traceMetric
      };
      return JSON.stringify(perfMetric);
    }

    function getApplicationInfo() {
      return {
        google_app_id: SettingsService.getInstance().getAppId(),
        app_instance_id: getIid(),
        web_app_info: {
          sdk_version: SDK_VERSION,
          page_url: Api.getInstance().getUrl(),
          service_worker_status: getServiceWorkerStatus(),
          visibility_state: getVisibilityState(),
          effective_connection_type: getEffectiveConnectionType()
        },
        application_process_state: 0
      };
    }
    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var MAX_METRIC_NAME_LENGTH = 100;
    var RESERVED_AUTO_PREFIX = '_';
    var oobMetrics = [FIRST_PAINT_COUNTER_NAME, FIRST_CONTENTFUL_PAINT_COUNTER_NAME, FIRST_INPUT_DELAY_COUNTER_NAME];
    /**
     * Returns true if the metric is custom and does not start with reserved prefix, or if
     * the metric is one of out of the box page load trace metrics.
     */

    function isValidMetricName(name, traceName) {
      if (name.length === 0 || name.length > MAX_METRIC_NAME_LENGTH) {
        return false;
      }

      return traceName && traceName.startsWith(OOB_TRACE_PAGE_LOAD_PREFIX) && oobMetrics.indexOf(name) > -1 || !name.startsWith(RESERVED_AUTO_PREFIX);
    }
    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var Trace =
    /** @class */
    function () {
      /**
       * @param name The name of the trace.
       * @param isAuto If the trace is auto-instrumented.
       * @param traceMeasureName The name of the measure marker in user timing specification. This field
       * is only set when the trace is built for logging when the user directly uses the user timing
       * api (performance.mark and performance.measure).
       */
      function Trace(name, isAuto, traceMeasureName) {
        if (isAuto === void 0) {
          isAuto = false;
        }

        this.name = name;
        this.isAuto = isAuto;
        this.state = 1
        /* UNINITIALIZED */
        ;
        this.customAttributes = {};
        this.counters = {};
        this.api = Api.getInstance();
        this.randomId = Math.floor(Math.random() * 1000000);

        if (!this.isAuto) {
          this.traceStartMark = TRACE_START_MARK_PREFIX + "-" + this.randomId + "-" + this.name;
          this.traceStopMark = TRACE_STOP_MARK_PREFIX + "-" + this.randomId + "-" + this.name;
          this.traceMeasure = traceMeasureName || TRACE_MEASURE_PREFIX + "-" + this.randomId + "-" + this.name;

          if (traceMeasureName) {
            // For the case of direct user timing traces, no start stop will happen. The measure object
            // is already available.
            this.calculateTraceMetrics();
          }
        }
      }
      /**
       * Starts a trace. The measurement of the duration starts at this point.
       */


      Trace.prototype.start = function () {
        if (this.state !== 1
        /* UNINITIALIZED */
        ) {
            throw ERROR_FACTORY.create("trace started"
            /* TRACE_STARTED_BEFORE */
            , {
              traceName: this.name
            });
          }

        this.api.mark(this.traceStartMark);
        this.state = 2
        /* RUNNING */
        ;
      };
      /**
       * Stops the trace. The measurement of the duration of the trace stops at this point and trace
       * is logged.
       */


      Trace.prototype.stop = function () {
        if (this.state !== 2
        /* RUNNING */
        ) {
            throw ERROR_FACTORY.create("trace stopped"
            /* TRACE_STOPPED_BEFORE */
            , {
              traceName: this.name
            });
          }

        this.state = 3
        /* TERMINATED */
        ;
        this.api.mark(this.traceStopMark);
        this.api.measure(this.traceMeasure, this.traceStartMark, this.traceStopMark);
        this.calculateTraceMetrics();
        logTrace(this);
      };
      /**
       * Records a trace with predetermined values. If this method is used a trace is created and logged
       * directly. No need to use start and stop methods.
       * @param startTime Trace start time since epoch in millisec
       * @param duration The duraction of the trace in millisec
       * @param options An object which can optionally hold maps of custom metrics and custom attributes
       */


      Trace.prototype.record = function (startTime, duration, options) {
        this.durationUs = Math.floor(duration * 1000);
        this.startTimeUs = Math.floor(startTime * 1000);

        if (options && options.attributes) {
          this.customAttributes = tslib.__assign({}, options.attributes);
        }

        if (options && options.metrics) {
          for (var _i = 0, _a = Object.keys(options.metrics); _i < _a.length; _i++) {
            var metric = _a[_i];

            if (!isNaN(Number(options.metrics[metric]))) {
              this.counters[metric] = Number(Math.floor(options.metrics[metric]));
            }
          }
        }

        logTrace(this);
      };
      /**
       * Increments a custom metric by a certain number or 1 if number not specified. Will create a new
       * custom metric if one with the given name does not exist.
       * @param counter Name of the custom metric
       * @param num Increment by value
       */


      Trace.prototype.incrementMetric = function (counter, num) {
        if (num === void 0) {
          num = 1;
        }

        if (this.counters[counter] === undefined) {
          this.putMetric(counter, 0);
        }

        this.counters[counter] += num;
      };
      /**
       * Sets a custom metric to a specified value. Will create a new custom metric if one with the
       * given name does not exist.
       * @param counter Name of the custom metric
       * @param num Set custom metric to this value
       */


      Trace.prototype.putMetric = function (counter, num) {
        if (isValidMetricName(counter, this.name)) {
          this.counters[counter] = num;
        } else {
          throw ERROR_FACTORY.create("invalid custom metric name"
          /* INVALID_CUSTOM_METRIC_NAME */
          , {
            customMetricName: counter
          });
        }
      };
      /**
       * Returns the value of the custom metric by that name. If a custom metric with that name does
       * not exist will return zero.
       * @param counter
       */


      Trace.prototype.getMetric = function (counter) {
        return this.counters[counter] || 0;
      };
      /**
       * Sets a custom attribute of a trace to a certain value.
       * @param attr
       * @param value
       */


      Trace.prototype.putAttribute = function (attr, value) {
        var isValidName = isValidCustomAttributeName(attr);
        var isValidValue = isValidCustomAttributeValue(value);

        if (isValidName && isValidValue) {
          this.customAttributes[attr] = value;
          return;
        } // Throw appropriate error when the attribute name or value is invalid.


        if (!isValidName) {
          throw ERROR_FACTORY.create("invalid attribute name"
          /* INVALID_ATTRIBUTE_NAME */
          , {
            attributeName: attr
          });
        }

        if (!isValidValue) {
          throw ERROR_FACTORY.create("invalid attribute value"
          /* INVALID_ATTRIBUTE_VALUE */
          , {
            attributeValue: value
          });
        }
      };
      /**
       * Retrieves the value a custom attribute of a trace is set to.
       * @param attr
       */


      Trace.prototype.getAttribute = function (attr) {
        return this.customAttributes[attr];
      };

      Trace.prototype.removeAttribute = function (attr) {
        if (this.customAttributes[attr] === undefined) {
          return;
        }

        delete this.customAttributes[attr];
      };

      Trace.prototype.getAttributes = function () {
        return tslib.__assign({}, this.customAttributes);
      };

      Trace.prototype.setStartTime = function (startTime) {
        this.startTimeUs = startTime;
      };

      Trace.prototype.setDuration = function (duration) {
        this.durationUs = duration;
      };
      /**
       * Calculates and assigns the duration and start time of the trace using the measure performance
       * entry.
       */


      Trace.prototype.calculateTraceMetrics = function () {
        var perfMeasureEntries = this.api.getEntriesByName(this.traceMeasure);
        var perfMeasureEntry = perfMeasureEntries && perfMeasureEntries[0];

        if (perfMeasureEntry) {
          this.durationUs = Math.floor(perfMeasureEntry.duration * 1000);
          this.startTimeUs = Math.floor((perfMeasureEntry.startTime + this.api.getTimeOrigin()) * 1000);
        }
      };
      /**
       * @param navigationTimings A single element array which contains the navigationTIming object of
       * the page load
       * @param paintTimings A array which contains paintTiming object of the page load
       * @param firstInputDelay First input delay in millisec
       */


      Trace.createOobTrace = function (navigationTimings, paintTimings, firstInputDelay) {
        var route = Api.getInstance().getUrl();

        if (!route) {
          return;
        }

        var trace = new Trace(OOB_TRACE_PAGE_LOAD_PREFIX + route, true);
        var timeOriginUs = Math.floor(Api.getInstance().getTimeOrigin() * 1000);
        trace.setStartTime(timeOriginUs); // navigationTimings includes only one element.

        if (navigationTimings && navigationTimings[0]) {
          trace.setDuration(Math.floor(navigationTimings[0].duration * 1000));
          trace.putMetric('domInteractive', Math.floor(navigationTimings[0].domInteractive * 1000));
          trace.putMetric('domContentLoadedEventEnd', Math.floor(navigationTimings[0].domContentLoadedEventEnd * 1000));
          trace.putMetric('loadEventEnd', Math.floor(navigationTimings[0].loadEventEnd * 1000));
        }

        var FIRST_PAINT = 'first-paint';
        var FIRST_CONTENTFUL_PAINT = 'first-contentful-paint';

        if (paintTimings) {
          var firstPaint = paintTimings.find(function (paintObject) {
            return paintObject.name === FIRST_PAINT;
          });

          if (firstPaint && firstPaint.startTime) {
            trace.putMetric(FIRST_PAINT_COUNTER_NAME, Math.floor(firstPaint.startTime * 1000));
          }

          var firstContentfulPaint = paintTimings.find(function (paintObject) {
            return paintObject.name === FIRST_CONTENTFUL_PAINT;
          });

          if (firstContentfulPaint && firstContentfulPaint.startTime) {
            trace.putMetric(FIRST_CONTENTFUL_PAINT_COUNTER_NAME, Math.floor(firstContentfulPaint.startTime * 1000));
          }

          if (firstInputDelay) {
            trace.putMetric(FIRST_INPUT_DELAY_COUNTER_NAME, Math.floor(firstInputDelay * 1000));
          }
        }

        logTrace(trace);
      };

      Trace.createUserTimingTrace = function (measureName) {
        var trace = new Trace(measureName, false, measureName);
        logTrace(trace);
      };

      return Trace;
    }();
    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    function createNetworkRequestEntry(entry) {
      var performanceEntry = entry;

      if (!performanceEntry || performanceEntry.responseStart === undefined) {
        return;
      }

      var timeOrigin = Api.getInstance().getTimeOrigin();
      var startTimeUs = Math.floor((performanceEntry.startTime + timeOrigin) * 1000);
      var timeToResponseInitiatedUs = performanceEntry.responseStart ? Math.floor((performanceEntry.responseStart - performanceEntry.startTime) * 1000) : undefined;
      var timeToResponseCompletedUs = Math.floor((performanceEntry.responseEnd - performanceEntry.startTime) * 1000); // Remove the query params from logged network request url.

      var url = performanceEntry.name && performanceEntry.name.split('?')[0];
      var networkRequest = {
        url: url,
        responsePayloadBytes: performanceEntry.transferSize,
        startTimeUs: startTimeUs,
        timeToResponseInitiatedUs: timeToResponseInitiatedUs,
        timeToResponseCompletedUs: timeToResponseCompletedUs
      };
      logNetworkRequest(networkRequest);
    }
    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var FID_WAIT_TIME_MS = 5000;

    function setupOobResources() {
      // Do not initialize unless iid is available.
      if (!getIid()) {
        return;
      } // The load event might not have fired yet, and that means performance navigation timing
      // object has a duration of 0. The setup should run after all current tasks in js queue.


      setTimeout(function () {
        return setupOobTraces();
      }, 0);
      setTimeout(function () {
        return setupNetworkRequests();
      }, 0);
      setTimeout(function () {
        return setupUserTimingTraces();
      }, 0);
    }

    function setupNetworkRequests() {
      var api = Api.getInstance();
      var resources = api.getEntriesByType('resource');

      for (var _i = 0, resources_1 = resources; _i < resources_1.length; _i++) {
        var resource = resources_1[_i];
        createNetworkRequestEntry(resource);
      }

      api.setupObserver('resource', createNetworkRequestEntry);
    }

    function setupOobTraces() {
      var api = Api.getInstance();
      var navigationTimings = api.getEntriesByType('navigation');
      var paintTimings = api.getEntriesByType('paint'); // If First Input Desly polyfill is added to the page, report the fid value.
      // https://github.com/GoogleChromeLabs/first-input-delay

      if (api.onFirstInputDelay) {
        // If the fid call back is not called for certain time, continue without it.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var timeoutId_1 = setTimeout(function () {
          Trace.createOobTrace(navigationTimings, paintTimings);
          timeoutId_1 = undefined;
        }, FID_WAIT_TIME_MS);
        api.onFirstInputDelay(function (fid) {
          if (timeoutId_1) {
            clearTimeout(timeoutId_1);
            Trace.createOobTrace(navigationTimings, paintTimings, fid);
          }
        });
      } else {
        Trace.createOobTrace(navigationTimings, paintTimings);
      }
    }

    function setupUserTimingTraces() {
      var api = Api.getInstance(); // Run through the measure performance entries collected up to this point.

      var measures = api.getEntriesByType('measure');

      for (var _i = 0, measures_1 = measures; _i < measures_1.length; _i++) {
        var measure = measures_1[_i];
        createUserTimingTrace(measure);
      } // Setup an observer to capture the measures from this point on.


      api.setupObserver('measure', createUserTimingTrace);
    }

    function createUserTimingTrace(measure) {
      var measureName = measure.name; // Do not create a trace, if the user timing marks and measures are created by the sdk itself.

      if (measureName.substring(0, TRACE_MEASURE_PREFIX.length) === TRACE_MEASURE_PREFIX) {
        return;
      }

      Trace.createUserTimingTrace(measureName);
    }
    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var PerformanceController =
    /** @class */
    function () {
      function PerformanceController(app) {
        this.app = app;

        if (Api.getInstance().requiredApisAvailable()) {
          setupTransportService();
          getInitializationPromise().then(setupOobResources, setupOobResources);
        } else {
          consoleLogger.info('Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled.');
        }
      }

      PerformanceController.prototype.trace = function (name) {
        return new Trace(name);
      };

      Object.defineProperty(PerformanceController.prototype, "instrumentationEnabled", {
        get: function get() {
          return SettingsService.getInstance().instrumentationEnabled;
        },
        set: function set(val) {
          SettingsService.getInstance().instrumentationEnabled = val;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PerformanceController.prototype, "dataCollectionEnabled", {
        get: function get() {
          return SettingsService.getInstance().dataCollectionEnabled;
        },
        set: function set(val) {
          SettingsService.getInstance().dataCollectionEnabled = val;
        },
        enumerable: true,
        configurable: true
      });
      return PerformanceController;
    }();
    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var DEFAULT_ENTRY_NAME = '[DEFAULT]';

    function registerPerformance(instance) {
      var factoryMethod = function factoryMethod(app, installations) {
        if (app.name !== DEFAULT_ENTRY_NAME) {
          throw ERROR_FACTORY.create("FB not default"
          /* FB_NOT_DEFAULT */
          );
        }

        if (typeof window === 'undefined') {
          throw ERROR_FACTORY.create("no window"
          /* NO_WINDOW */
          );
        }

        setupApi(window);
        SettingsService.getInstance().firebaseAppInstance = app;
        SettingsService.getInstance().installationsService = installations;
        return new PerformanceController(app);
      }; // Register performance with firebase-app.


      instance.INTERNAL.registerComponent(new component.Component('performance', function (container) {
        /* Dependencies */
        // getImmediate for FirebaseApp will always succeed
        var app = container.getProvider('app').getImmediate(); // The following call will always succeed because perf has `import '@firebase/installations'`

        var installations = container.getProvider('installations').getImmediate();
        return factoryMethod(app, installations);
      }, "PUBLIC"
      /* PUBLIC */
      ));
      instance.registerVersion(name, version);
    }

    registerPerformance(firebase);
    exports.registerPerformance = registerPerformance; //# sourceMappingURL=index.cjs.js.map

    /***/
  },

  /***/
  "./node_modules/@firebase/remote-config/dist/index.cjs.js":
  /*!****************************************************************!*\
    !*** ./node_modules/@firebase/remote-config/dist/index.cjs.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesFirebaseRemoteConfigDistIndexCjsJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
    }

    var firebase = _interopDefault(__webpack_require__(
    /*! @firebase/app */
    "./node_modules/@firebase/app/dist/index.cjs.js"));

    __webpack_require__(
    /*! @firebase/installations */
    "./node_modules/@firebase/installations/dist/index.esm.js");

    var tslib = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var util = __webpack_require__(
    /*! @firebase/util */
    "./node_modules/@firebase/util/dist/index.cjs.js");

    var logger = __webpack_require__(
    /*! @firebase/logger */
    "./node_modules/@firebase/logger/dist/index.esm.js");

    var component = __webpack_require__(
    /*! @firebase/component */
    "./node_modules/@firebase/component/dist/index.cjs.js");
    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Implements the {@link RemoteConfigClient} abstraction with success response caching.
     *
     * <p>Comparable to the browser's Cache API for responses, but the Cache API requires a Service
     * Worker, which requires HTTPS, which would significantly complicate SDK installation. Also, the
     * Cache API doesn't support matching entries by time.
     */


    var CachingClient =
    /** @class */
    function () {
      function CachingClient(client, storage, storageCache, logger) {
        this.client = client;
        this.storage = storage;
        this.storageCache = storageCache;
        this.logger = logger;
      }
      /**
       * Returns true if the age of the cached fetched configs is less than or equal to
       * {@link Settings#minimumFetchIntervalInSeconds}.
       *
       * <p>This is comparable to passing `headers = { 'Cache-Control': max-age <maxAge> }` to the
       * native Fetch API.
       *
       * <p>Visible for testing.
       */


      CachingClient.prototype.isCachedDataFresh = function (cacheMaxAgeMillis, lastSuccessfulFetchTimestampMillis) {
        // Cache can only be fresh if it's populated.
        if (!lastSuccessfulFetchTimestampMillis) {
          this.logger.debug('Config fetch cache check. Cache unpopulated.');
          return false;
        } // Calculates age of cache entry.


        var cacheAgeMillis = Date.now() - lastSuccessfulFetchTimestampMillis;
        var isCachedDataFresh = cacheAgeMillis <= cacheMaxAgeMillis;
        this.logger.debug('Config fetch cache check.' + (" Cache age millis: " + cacheAgeMillis + ".") + (" Cache max age millis (minimumFetchIntervalMillis setting): " + cacheMaxAgeMillis + ".") + (" Is cache hit: " + isCachedDataFresh + "."));
        return isCachedDataFresh;
      };

      CachingClient.prototype.fetch = function (request) {
        return tslib.__awaiter(this, void 0, void 0, function () {
          var _a, lastSuccessfulFetchTimestampMillis, lastSuccessfulFetchResponse, response, storageOperations;

          return tslib.__generator(this, function (_b) {
            switch (_b.label) {
              case 0:
                return [4
                /*yield*/
                , Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(), this.storage.getLastSuccessfulFetchResponse()])];

              case 1:
                _a = _b.sent(), lastSuccessfulFetchTimestampMillis = _a[0], lastSuccessfulFetchResponse = _a[1]; // Exits early on cache hit.

                if (lastSuccessfulFetchResponse && this.isCachedDataFresh(request.cacheMaxAgeMillis, lastSuccessfulFetchTimestampMillis)) {
                  return [2
                  /*return*/
                  , lastSuccessfulFetchResponse];
                } // Deviates from pure decorator by not honoring a passed ETag since we don't have a public API
                // that allows the caller to pass an ETag.


                request.eTag = lastSuccessfulFetchResponse && lastSuccessfulFetchResponse.eTag;
                return [4
                /*yield*/
                , this.client.fetch(request)];

              case 2:
                response = _b.sent();
                storageOperations = [// Uses write-through cache for consistency with synchronous public API.
                this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];

                if (response.status === 200) {
                  // Caches response only if it has changed, ie non-304 responses.
                  storageOperations.push(this.storage.setLastSuccessfulFetchResponse(response));
                }

                return [4
                /*yield*/
                , Promise.all(storageOperations)];

              case 3:
                _b.sent();

                return [2
                /*return*/
                , response];
            }
          });
        });
      };

      return CachingClient;
    }();
    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var _a;

    var ERROR_DESCRIPTION_MAP = (_a = {}, _a["registration-window"
    /* REGISTRATION_WINDOW */
    ] = 'Undefined window object. This SDK only supports usage in a browser environment.', _a["registration-project-id"
    /* REGISTRATION_PROJECT_ID */
    ] = 'Undefined project identifier. Check Firebase app initialization.', _a["registration-api-key"
    /* REGISTRATION_API_KEY */
    ] = 'Undefined API key. Check Firebase app initialization.', _a["registration-app-id"
    /* REGISTRATION_APP_ID */
    ] = 'Undefined app identifier. Check Firebase app initialization.', _a["storage-open"
    /* STORAGE_OPEN */
    ] = 'Error thrown when opening storage. Original error: {$originalErrorMessage}.', _a["storage-get"
    /* STORAGE_GET */
    ] = 'Error thrown when reading from storage. Original error: {$originalErrorMessage}.', _a["storage-set"
    /* STORAGE_SET */
    ] = 'Error thrown when writing to storage. Original error: {$originalErrorMessage}.', _a["storage-delete"
    /* STORAGE_DELETE */
    ] = 'Error thrown when deleting from storage. Original error: {$originalErrorMessage}.', _a["fetch-client-network"
    /* FETCH_NETWORK */
    ] = 'Fetch client failed to connect to a network. Check Internet connection.' + ' Original error: {$originalErrorMessage}.', _a["fetch-timeout"
    /* FETCH_TIMEOUT */
    ] = 'The config fetch request timed out. ' + ' Configure timeout using "fetchTimeoutMillis" SDK setting.', _a["fetch-throttle"
    /* FETCH_THROTTLE */
    ] = 'The config fetch request timed out while in an exponential backoff state.' + ' Configure timeout using "fetchTimeoutMillis" SDK setting.' + ' Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.', _a["fetch-client-parse"
    /* FETCH_PARSE */
    ] = 'Fetch client could not parse response.' + ' Original error: {$originalErrorMessage}.', _a["fetch-status"
    /* FETCH_STATUS */
    ] = 'Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.', _a);
    var ERROR_FACTORY = new util.ErrorFactory('remoteconfig'
    /* service */
    , 'Remote Config'
    /* service name */
    , ERROR_DESCRIPTION_MAP); // Note how this is like typeof/instanceof, but for ErrorCode.

    function hasErrorCode(e, errorCode) {
      return e instanceof util.FirebaseError && e.code.indexOf(errorCode) !== -1;
    }
    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Attempts to get the most accurate browser language setting.
     *
     * <p>Adapted from getUserLanguage in packages/auth/src/utils.js for TypeScript.
     *
     * <p>Defers default language specification to server logic for consistency.
     *
     * @param navigatorLanguage Enables tests to override read-only {@link NavigatorLanguage}.
     */


    function getUserLanguage(navigatorLanguage) {
      if (navigatorLanguage === void 0) {
        navigatorLanguage = navigator;
      }

      return (// Most reliable, but only supported in Chrome/Firefox.
        navigatorLanguage.languages && navigatorLanguage.languages[0] || // Supported in most browsers, but returns the language of the browser
        // UI, not the language set in browser settings.
        navigatorLanguage.language // Polyfill otherwise.

      );
    }
    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Implements the Client abstraction for the Remote Config REST API.
     */


    var RestClient =
    /** @class */
    function () {
      function RestClient(firebaseInstallations, sdkVersion, namespace, projectId, apiKey, appId) {
        this.firebaseInstallations = firebaseInstallations;
        this.sdkVersion = sdkVersion;
        this.namespace = namespace;
        this.projectId = projectId;
        this.apiKey = apiKey;
        this.appId = appId;
      }
      /**
       * Fetches from the Remote Config REST API.
       *
       * @throws a {@link ErrorCode.FETCH_NETWORK} error if {@link GlobalFetch#fetch} can't
       * connect to the network.
       * @throws a {@link ErrorCode.FETCH_PARSE} error if {@link Response#json} can't parse the
       * fetch response.
       * @throws a {@link ErrorCode.FETCH_STATUS} error if the service returns an HTTP error status.
       */


      RestClient.prototype.fetch = function (request) {
        return tslib.__awaiter(this, void 0, void 0, function () {
          var _a, installationId, installationToken, urlBase, url, headers, requestBody, options, fetchPromise, timeoutPromise, response, originalError_1, errorCode, status, responseEtag, config, state, responseBody, originalError_2;

          return tslib.__generator(this, function (_b) {
            switch (_b.label) {
              case 0:
                return [4
                /*yield*/
                , Promise.all([this.firebaseInstallations.getId(), this.firebaseInstallations.getToken()])];

              case 1:
                _a = _b.sent(), installationId = _a[0], installationToken = _a[1];
                urlBase = window.FIREBASE_REMOTE_CONFIG_URL_BASE || 'https://firebaseremoteconfig.googleapis.com';
                url = urlBase + "/v1/projects/" + this.projectId + "/namespaces/" + this.namespace + ":fetch?key=" + this.apiKey;
                headers = {
                  'Content-Type': 'application/json',
                  'Content-Encoding': 'gzip',
                  // Deviates from pure decorator by not passing max-age header since we don't currently have
                  // service behavior using that header.
                  'If-None-Match': request.eTag || '*'
                };
                requestBody = {
                  /* eslint-disable camelcase */
                  sdk_version: this.sdkVersion,
                  app_instance_id: installationId,
                  app_instance_id_token: installationToken,
                  app_id: this.appId,
                  language_code: getUserLanguage()
                  /* eslint-enable camelcase */

                };
                options = {
                  method: 'POST',
                  headers: headers,
                  body: JSON.stringify(requestBody)
                };
                fetchPromise = fetch(url, options);
                timeoutPromise = new Promise(function (_resolve, reject) {
                  // Maps async event listener to Promise API.
                  request.signal.addEventListener(function () {
                    // Emulates https://heycam.github.io/webidl/#aborterror
                    var error = new Error('The operation was aborted.');
                    error.name = 'AbortError';
                    reject(error);
                  });
                });
                _b.label = 2;

              case 2:
                _b.trys.push([2, 5,, 6]);

                return [4
                /*yield*/
                , Promise.race([fetchPromise, timeoutPromise])];

              case 3:
                _b.sent();

                return [4
                /*yield*/
                , fetchPromise];

              case 4:
                response = _b.sent();
                return [3
                /*break*/
                , 6];

              case 5:
                originalError_1 = _b.sent();
                errorCode = "fetch-client-network"
                /* FETCH_NETWORK */
                ;

                if (originalError_1.name === 'AbortError') {
                  errorCode = "fetch-timeout"
                  /* FETCH_TIMEOUT */
                  ;
                }

                throw ERROR_FACTORY.create(errorCode, {
                  originalErrorMessage: originalError_1.message
                });

              case 6:
                status = response.status;
                responseEtag = response.headers.get('ETag') || undefined;
                if (!(response.status === 200)) return [3
                /*break*/
                , 11];
                responseBody = void 0;
                _b.label = 7;

              case 7:
                _b.trys.push([7, 9,, 10]);

                return [4
                /*yield*/
                , response.json()];

              case 8:
                responseBody = _b.sent();
                return [3
                /*break*/
                , 10];

              case 9:
                originalError_2 = _b.sent();
                throw ERROR_FACTORY.create("fetch-client-parse"
                /* FETCH_PARSE */
                , {
                  originalErrorMessage: originalError_2.message
                });

              case 10:
                config = responseBody['entries'];
                state = responseBody['state'];
                _b.label = 11;

              case 11:
                // Normalizes based on legacy state.
                if (state === 'INSTANCE_STATE_UNSPECIFIED') {
                  status = 500;
                } else if (state === 'NO_CHANGE') {
                  status = 304;
                } else if (state === 'NO_TEMPLATE' || state === 'EMPTY_CONFIG') {
                  // These cases can be fixed remotely, so normalize to safe value.
                  config = {};
                } // Normalize to exception-based control flow for non-success cases.
                // Encapsulates HTTP specifics in this class as much as possible. Status is still the best for
                // differentiating success states (200 from 304; the state body param is undefined in a
                // standard 304).


                if (status !== 304 && status !== 200) {
                  throw ERROR_FACTORY.create("fetch-status"
                  /* FETCH_STATUS */
                  , {
                    httpStatus: status
                  });
                }

                return [2
                /*return*/
                , {
                  status: status,
                  eTag: responseEtag,
                  config: config
                }];
            }
          });
        });
      };

      return RestClient;
    }();
    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Shims a minimal AbortSignal.
     *
     * <p>AbortController's AbortSignal conveniently decouples fetch timeout logic from other aspects
     * of networking, such as retries. Firebase doesn't use AbortController enough to justify a
     * polyfill recommendation, like we do with the Fetch API, but this minimal shim can easily be
     * swapped out if/when we do.
     */


    var RemoteConfigAbortSignal =
    /** @class */
    function () {
      function RemoteConfigAbortSignal() {
        this.listeners = [];
      }

      RemoteConfigAbortSignal.prototype.addEventListener = function (listener) {
        this.listeners.push(listener);
      };

      RemoteConfigAbortSignal.prototype.abort = function () {
        this.listeners.forEach(function (listener) {
          return listener();
        });
      };

      return RemoteConfigAbortSignal;
    }();
    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var DEFAULT_VALUE_FOR_BOOLEAN = false;
    var DEFAULT_VALUE_FOR_STRING = '';
    var DEFAULT_VALUE_FOR_NUMBER = 0;
    var BOOLEAN_TRUTHY_VALUES = ['1', 'true', 't', 'yes', 'y', 'on'];

    var Value =
    /** @class */
    function () {
      function Value(_source, _value) {
        if (_value === void 0) {
          _value = DEFAULT_VALUE_FOR_STRING;
        }

        this._source = _source;
        this._value = _value;
      }

      Value.prototype.asString = function () {
        return this._value;
      };

      Value.prototype.asBoolean = function () {
        if (this._source === 'static') {
          return DEFAULT_VALUE_FOR_BOOLEAN;
        }

        return BOOLEAN_TRUTHY_VALUES.indexOf(this._value.toLowerCase()) >= 0;
      };

      Value.prototype.asNumber = function () {
        if (this._source === 'static') {
          return DEFAULT_VALUE_FOR_NUMBER;
        }

        var num = Number(this._value);

        if (isNaN(num)) {
          num = DEFAULT_VALUE_FOR_NUMBER;
        }

        return num;
      };

      Value.prototype.getSource = function () {
        return this._source;
      };

      return Value;
    }();
    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var DEFAULT_FETCH_TIMEOUT_MILLIS = 60 * 1000; // One minute

    var DEFAULT_CACHE_MAX_AGE_MILLIS = 12 * 60 * 60 * 1000; // Twelve hours.

    /**
     * Encapsulates business logic mapping network and storage dependencies to the public SDK API.
     *
     * See {@link https://github.com/FirebasePrivate/firebase-js-sdk/blob/master/packages/firebase/index.d.ts|interface documentation} for method descriptions.
     */

    var RemoteConfig =
    /** @class */
    function () {
      function RemoteConfig( // Required by FirebaseServiceFactory interface.
      app, // JS doesn't support private yet
      // (https://github.com/tc39/proposal-class-fields#private-fields), so we hint using an
      // underscore prefix.
      _client, _storageCache, _storage, _logger) {
        this.app = app;
        this._client = _client;
        this._storageCache = _storageCache;
        this._storage = _storage;
        this._logger = _logger; // Tracks completion of initialization promise.

        this._isInitializationComplete = false;
        this.settings = {
          fetchTimeoutMillis: DEFAULT_FETCH_TIMEOUT_MILLIS,
          minimumFetchIntervalMillis: DEFAULT_CACHE_MAX_AGE_MILLIS
        };
        this.defaultConfig = {};
      } // Based on packages/firestore/src/util/log.ts but not static because we need per-instance levels
      // to differentiate 2p and 3p use-cases.


      RemoteConfig.prototype.setLogLevel = function (logLevel) {
        switch (logLevel) {
          case 'debug':
            this._logger.logLevel = logger.LogLevel.DEBUG;
            break;

          case 'silent':
            this._logger.logLevel = logger.LogLevel.SILENT;
            break;

          default:
            this._logger.logLevel = logger.LogLevel.ERROR;
        }
      };

      Object.defineProperty(RemoteConfig.prototype, "fetchTimeMillis", {
        get: function get() {
          return this._storageCache.getLastSuccessfulFetchTimestampMillis() || -1;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(RemoteConfig.prototype, "lastFetchStatus", {
        get: function get() {
          return this._storageCache.getLastFetchStatus() || 'no-fetch-yet';
        },
        enumerable: true,
        configurable: true
      });

      RemoteConfig.prototype.activate = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
          var _a, lastSuccessfulFetchResponse, activeConfigEtag;

          return tslib.__generator(this, function (_b) {
            switch (_b.label) {
              case 0:
                return [4
                /*yield*/
                , Promise.all([this._storage.getLastSuccessfulFetchResponse(), this._storage.getActiveConfigEtag()])];

              case 1:
                _a = _b.sent(), lastSuccessfulFetchResponse = _a[0], activeConfigEtag = _a[1];

                if (!lastSuccessfulFetchResponse || !lastSuccessfulFetchResponse.config || !lastSuccessfulFetchResponse.eTag || lastSuccessfulFetchResponse.eTag === activeConfigEtag) {
                  // Either there is no successful fetched config, or is the same as current active
                  // config.
                  return [2
                  /*return*/
                  , false];
                }

                return [4
                /*yield*/
                , Promise.all([this._storageCache.setActiveConfig(lastSuccessfulFetchResponse.config), this._storage.setActiveConfigEtag(lastSuccessfulFetchResponse.eTag)])];

              case 2:
                _b.sent();

                return [2
                /*return*/
                , true];
            }
          });
        });
      };

      RemoteConfig.prototype.ensureInitialized = function () {
        var _this = this;

        if (!this._initializePromise) {
          this._initializePromise = this._storageCache.loadFromStorage().then(function () {
            _this._isInitializationComplete = true;
          });
        }

        return this._initializePromise;
      };
      /**
       * @throws a {@link ErrorCode.FETCH_CLIENT_TIMEOUT} if the request takes longer than
       * {@link Settings.fetchTimeoutInSeconds} or
       * {@link DEFAULT_FETCH_TIMEOUT_SECONDS}.
       */


      RemoteConfig.prototype.fetch = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
          var abortSignal, e_1, lastFetchStatus;

          var _this = this;

          return tslib.__generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                abortSignal = new RemoteConfigAbortSignal();
                setTimeout(function () {
                  return tslib.__awaiter(_this, void 0, void 0, function () {
                    return tslib.__generator(this, function (_a) {
                      // Note a very low delay, eg < 10ms, can elapse before listeners are initialized.
                      abortSignal.abort();
                      return [2
                      /*return*/
                      ];
                    });
                  });
                }, this.settings.fetchTimeoutMillis);
                _a.label = 1;

              case 1:
                _a.trys.push([1, 4,, 6]);

                return [4
                /*yield*/
                , this._client.fetch({
                  cacheMaxAgeMillis: this.settings.minimumFetchIntervalMillis,
                  signal: abortSignal
                })];

              case 2:
                _a.sent();

                return [4
                /*yield*/
                , this._storageCache.setLastFetchStatus('success')];

              case 3:
                _a.sent();

                return [3
                /*break*/
                , 6];

              case 4:
                e_1 = _a.sent();
                lastFetchStatus = hasErrorCode(e_1, "fetch-throttle"
                /* FETCH_THROTTLE */
                ) ? 'throttle' : 'failure';
                return [4
                /*yield*/
                , this._storageCache.setLastFetchStatus(lastFetchStatus)];

              case 5:
                _a.sent();

                throw e_1;

              case 6:
                return [2
                /*return*/
                ];
            }
          });
        });
      };

      RemoteConfig.prototype.fetchAndActivate = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
          return tslib.__generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , this.fetch()];

              case 1:
                _a.sent();

                return [2
                /*return*/
                , this.activate()];
            }
          });
        });
      };

      RemoteConfig.prototype.getAll = function () {
        var _this = this;

        return getAllKeys(this._storageCache.getActiveConfig(), this.defaultConfig).reduce(function (allConfigs, key) {
          allConfigs[key] = _this.getValue(key);
          return allConfigs;
        }, {});
      };

      RemoteConfig.prototype.getBoolean = function (key) {
        return this.getValue(key).asBoolean();
      };

      RemoteConfig.prototype.getNumber = function (key) {
        return this.getValue(key).asNumber();
      };

      RemoteConfig.prototype.getString = function (key) {
        return this.getValue(key).asString();
      };

      RemoteConfig.prototype.getValue = function (key) {
        if (!this._isInitializationComplete) {
          this._logger.debug("A value was requested for key \"" + key + "\" before SDK initialization completed." + ' Await on ensureInitialized if the intent was to get a previously activated value.');
        }

        var activeConfig = this._storageCache.getActiveConfig();

        if (activeConfig && activeConfig[key] !== undefined) {
          return new Value('remote', activeConfig[key]);
        } else if (this.defaultConfig && this.defaultConfig[key] !== undefined) {
          return new Value('default', String(this.defaultConfig[key]));
        }

        this._logger.debug("Returning static value for key \"" + key + "\"." + ' Define a default or remote value if this is unintentional.');

        return new Value('static');
      };

      return RemoteConfig;
    }();
    /**
     * Dedupes and returns an array of all the keys of the received objects.
     */


    function getAllKeys(obj1, obj2) {
      if (obj1 === void 0) {
        obj1 = {};
      }

      if (obj2 === void 0) {
        obj2 = {};
      }

      return Object.keys(tslib.__assign(tslib.__assign({}, obj1), obj2));
    }
    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Converts an error event associated with a {@link IDBRequest} to a {@link FirebaseError}.
     */


    function toFirebaseError(event, errorCode) {
      var originalError = event.target.error || undefined;
      return ERROR_FACTORY.create(errorCode, {
        originalErrorMessage: originalError && originalError.message
      });
    }
    /**
     * A general-purpose store keyed by app + namespace + {@link
     * ProjectNamespaceKeyFieldValue}.
     *
     * <p>The Remote Config SDK can be used with multiple app installations, and each app can interact
     * with multiple namespaces, so this store uses app (ID + name) and namespace as common parent keys
     * for a set of key-value pairs. See {@link Storage#createCompositeKey}.
     *
     * <p>Visible for testing.
     */


    var APP_NAMESPACE_STORE = 'app_namespace_store';
    var DB_NAME = 'firebase_remote_config';
    var DB_VERSION = 1; // Visible for testing.

    function openDatabase() {
      return new Promise(function (resolve, reject) {
        var request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = function (event) {
          reject(toFirebaseError(event, "storage-open"
          /* STORAGE_OPEN */
          ));
        };

        request.onsuccess = function (event) {
          resolve(event.target.result);
        };

        request.onupgradeneeded = function (event) {
          var db = event.target.result; // We don't use 'break' in this switch statement, the fall-through
          // behavior is what we want, because if there are multiple versions between
          // the old version and the current version, we want ALL the migrations
          // that correspond to those versions to run, not only the last one.
          // eslint-disable-next-line default-case

          switch (event.oldVersion) {
            case 0:
              db.createObjectStore(APP_NAMESPACE_STORE, {
                keyPath: 'compositeKey'
              });
          }
        };
      });
    }
    /**
     * Abstracts data persistence.
     */


    var Storage =
    /** @class */
    function () {
      /**
       * @param appId enables storage segmentation by app (ID + name).
       * @param appName enables storage segmentation by app (ID + name).
       * @param namespace enables storage segmentation by namespace.
       */
      function Storage(appId, appName, namespace, openDbPromise) {
        if (openDbPromise === void 0) {
          openDbPromise = openDatabase();
        }

        this.appId = appId;
        this.appName = appName;
        this.namespace = namespace;
        this.openDbPromise = openDbPromise;
      }

      Storage.prototype.getLastFetchStatus = function () {
        return this.get('last_fetch_status');
      };

      Storage.prototype.setLastFetchStatus = function (status) {
        return this.set('last_fetch_status', status);
      }; // This is comparable to a cache entry timestamp. If we need to expire other data, we could
      // consider adding timestamp to all storage records and an optional max age arg to getters.


      Storage.prototype.getLastSuccessfulFetchTimestampMillis = function () {
        return this.get('last_successful_fetch_timestamp_millis');
      };

      Storage.prototype.setLastSuccessfulFetchTimestampMillis = function (timestamp) {
        return this.set('last_successful_fetch_timestamp_millis', timestamp);
      };

      Storage.prototype.getLastSuccessfulFetchResponse = function () {
        return this.get('last_successful_fetch_response');
      };

      Storage.prototype.setLastSuccessfulFetchResponse = function (response) {
        return this.set('last_successful_fetch_response', response);
      };

      Storage.prototype.getActiveConfig = function () {
        return this.get('active_config');
      };

      Storage.prototype.setActiveConfig = function (config) {
        return this.set('active_config', config);
      };

      Storage.prototype.getActiveConfigEtag = function () {
        return this.get('active_config_etag');
      };

      Storage.prototype.setActiveConfigEtag = function (etag) {
        return this.set('active_config_etag', etag);
      };

      Storage.prototype.getThrottleMetadata = function () {
        return this.get('throttle_metadata');
      };

      Storage.prototype.setThrottleMetadata = function (metadata) {
        return this.set('throttle_metadata', metadata);
      };

      Storage.prototype.deleteThrottleMetadata = function () {
        return this["delete"]('throttle_metadata');
      };

      Storage.prototype.get = function (key) {
        return tslib.__awaiter(this, void 0, void 0, function () {
          var db;

          var _this = this;

          return tslib.__generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , this.openDbPromise];

              case 1:
                db = _a.sent();
                return [2
                /*return*/
                , new Promise(function (resolve, reject) {
                  var transaction = db.transaction([APP_NAMESPACE_STORE], 'readonly');
                  var objectStore = transaction.objectStore(APP_NAMESPACE_STORE);

                  var compositeKey = _this.createCompositeKey(key);

                  try {
                    var request = objectStore.get(compositeKey);

                    request.onerror = function (event) {
                      reject(toFirebaseError(event, "storage-get"
                      /* STORAGE_GET */
                      ));
                    };

                    request.onsuccess = function (event) {
                      var result = event.target.result;

                      if (result) {
                        resolve(result.value);
                      } else {
                        resolve(undefined);
                      }
                    };
                  } catch (e) {
                    reject(ERROR_FACTORY.create("storage-get"
                    /* STORAGE_GET */
                    , {
                      originalErrorMessage: e && e.message
                    }));
                  }
                })];
            }
          });
        });
      };

      Storage.prototype.set = function (key, value) {
        return tslib.__awaiter(this, void 0, void 0, function () {
          var db;

          var _this = this;

          return tslib.__generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , this.openDbPromise];

              case 1:
                db = _a.sent();
                return [2
                /*return*/
                , new Promise(function (resolve, reject) {
                  var transaction = db.transaction([APP_NAMESPACE_STORE], 'readwrite');
                  var objectStore = transaction.objectStore(APP_NAMESPACE_STORE);

                  var compositeKey = _this.createCompositeKey(key);

                  try {
                    var request = objectStore.put({
                      compositeKey: compositeKey,
                      value: value
                    });

                    request.onerror = function (event) {
                      reject(toFirebaseError(event, "storage-set"
                      /* STORAGE_SET */
                      ));
                    };

                    request.onsuccess = function () {
                      resolve();
                    };
                  } catch (e) {
                    reject(ERROR_FACTORY.create("storage-set"
                    /* STORAGE_SET */
                    , {
                      originalErrorMessage: e && e.message
                    }));
                  }
                })];
            }
          });
        });
      };

      Storage.prototype["delete"] = function (key) {
        return tslib.__awaiter(this, void 0, void 0, function () {
          var db;

          var _this = this;

          return tslib.__generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , this.openDbPromise];

              case 1:
                db = _a.sent();
                return [2
                /*return*/
                , new Promise(function (resolve, reject) {
                  var transaction = db.transaction([APP_NAMESPACE_STORE], 'readwrite');
                  var objectStore = transaction.objectStore(APP_NAMESPACE_STORE);

                  var compositeKey = _this.createCompositeKey(key);

                  try {
                    var request = objectStore["delete"](compositeKey);

                    request.onerror = function (event) {
                      reject(toFirebaseError(event, "storage-delete"
                      /* STORAGE_DELETE */
                      ));
                    };

                    request.onsuccess = function () {
                      resolve();
                    };
                  } catch (e) {
                    reject(ERROR_FACTORY.create("storage-delete"
                    /* STORAGE_DELETE */
                    , {
                      originalErrorMessage: e && e.message
                    }));
                  }
                })];
            }
          });
        });
      }; // Facilitates composite key functionality (which is unsupported in IE).


      Storage.prototype.createCompositeKey = function (key) {
        return [this.appId, this.appName, this.namespace, key].join();
      };

      return Storage;
    }();
    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * A memory cache layer over storage to support the SDK's synchronous read requirements.
     */


    var StorageCache =
    /** @class */
    function () {
      function StorageCache(storage) {
        this.storage = storage;
      }
      /**
       * Memory-only getters
       */


      StorageCache.prototype.getLastFetchStatus = function () {
        return this.lastFetchStatus;
      };

      StorageCache.prototype.getLastSuccessfulFetchTimestampMillis = function () {
        return this.lastSuccessfulFetchTimestampMillis;
      };

      StorageCache.prototype.getActiveConfig = function () {
        return this.activeConfig;
      };
      /**
       * Read-ahead getter
       */


      StorageCache.prototype.loadFromStorage = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
          var lastFetchStatusPromise, lastSuccessfulFetchTimestampMillisPromise, activeConfigPromise, lastFetchStatus, lastSuccessfulFetchTimestampMillis, activeConfig;
          return tslib.__generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                lastFetchStatusPromise = this.storage.getLastFetchStatus();
                lastSuccessfulFetchTimestampMillisPromise = this.storage.getLastSuccessfulFetchTimestampMillis();
                activeConfigPromise = this.storage.getActiveConfig();
                return [4
                /*yield*/
                , lastFetchStatusPromise];

              case 1:
                lastFetchStatus = _a.sent();

                if (lastFetchStatus) {
                  this.lastFetchStatus = lastFetchStatus;
                }

                return [4
                /*yield*/
                , lastSuccessfulFetchTimestampMillisPromise];

              case 2:
                lastSuccessfulFetchTimestampMillis = _a.sent();

                if (lastSuccessfulFetchTimestampMillis) {
                  this.lastSuccessfulFetchTimestampMillis = lastSuccessfulFetchTimestampMillis;
                }

                return [4
                /*yield*/
                , activeConfigPromise];

              case 3:
                activeConfig = _a.sent();

                if (activeConfig) {
                  this.activeConfig = activeConfig;
                }

                return [2
                /*return*/
                ];
            }
          });
        });
      };
      /**
       * Write-through setters
       */


      StorageCache.prototype.setLastFetchStatus = function (status) {
        this.lastFetchStatus = status;
        return this.storage.setLastFetchStatus(status);
      };

      StorageCache.prototype.setLastSuccessfulFetchTimestampMillis = function (timestampMillis) {
        this.lastSuccessfulFetchTimestampMillis = timestampMillis;
        return this.storage.setLastSuccessfulFetchTimestampMillis(timestampMillis);
      };

      StorageCache.prototype.setActiveConfig = function (activeConfig) {
        this.activeConfig = activeConfig;
        return this.storage.setActiveConfig(activeConfig);
      };

      return StorageCache;
    }();
    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * The amount of milliseconds to exponentially increase.
     */


    var INTERVAL_MILLIS = 1000;
    /**
     * The factor to backoff by.
     * Should be a number greater than 1.
     */

    var BACKOFF_FACTOR = 2;
    /**
     * The maximum milliseconds to increase to.
     *
     * <p>Visible for testing
     */

    var MAX_VALUE_MILLIS = 4 * 60 * 60 * 1000; // Four hours, like iOS and Android.

    /**
     * The percentage of backoff time to randomize by.
     * See
     * http://go/safe-client-behavior#step-1-determine-the-appropriate-retry-interval-to-handle-spike-traffic
     * for context.
     *
     * <p>Visible for testing
     */

    var RANDOM_FACTOR = 0.5;
    /**
     * Based on the backoff method from
     * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
     * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
     */

    function calculateBackoffMillis(backoffCount) {
      // Calculates an exponentially increasing value.
      // Deviation: calculates value from count and a constant interval, so we only need to save value
      // and count to restore state.
      var currBaseValue = INTERVAL_MILLIS * Math.pow(BACKOFF_FACTOR, backoffCount); // A random "fuzz" to avoid waves of retries.
      // Deviation: randomFactor is required.

      var randomWait = Math.round( // A fraction of the backoff value to add/subtract.
      // Deviation: changes multiplication order to improve readability.
      RANDOM_FACTOR * currBaseValue * ( // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
      // if we add or subtract.
      Math.random() - 0.5) * 2); // Limits backoff to max to avoid effectively permanent backoff.

      return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
    }
    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Supports waiting on a backoff by:
     *
     * <ul>
     *   <li>Promisifying setTimeout, so we can set a timeout in our Promise chain</li>
     *   <li>Listening on a signal bus for abort events, just like the Fetch API</li>
     *   <li>Failing in the same way the Fetch API fails, so timing out a live request and a throttled
     *       request appear the same.</li>
     * </ul>
     *
     * <p>Visible for testing.
     */


    function setAbortableTimeout(signal, throttleEndTimeMillis) {
      return new Promise(function (resolve, reject) {
        // Derives backoff from given end time, normalizing negative numbers to zero.
        var backoffMillis = Math.max(throttleEndTimeMillis - Date.now(), 0);
        var timeout = setTimeout(resolve, backoffMillis); // Adds listener, rather than sets onabort, because signal is a shared object.

        signal.addEventListener(function () {
          clearTimeout(timeout); // If the request completes before this timeout, the rejection has no effect.

          reject(ERROR_FACTORY.create("fetch-throttle"
          /* FETCH_THROTTLE */
          , {
            throttleEndTimeMillis: throttleEndTimeMillis
          }));
        });
      });
    }
    /**
     * Returns true if the {@link Error} indicates a fetch request may succeed later.
     */


    function isRetriableError(e) {
      if (!(e instanceof util.FirebaseError)) {
        return false;
      } // Uses string index defined by ErrorData, which FirebaseError implements.


      var httpStatus = Number(e['httpStatus']);
      return httpStatus === 429 || httpStatus === 500 || httpStatus === 503 || httpStatus === 504;
    }
    /**
     * Decorates a Client with retry logic.
     *
     * <p>Comparable to CachingClient, but uses backoff logic instead of cache max age and doesn't cache
     * responses (because the SDK has no use for error responses).
     */


    var RetryingClient =
    /** @class */
    function () {
      function RetryingClient(client, storage) {
        this.client = client;
        this.storage = storage;
      }

      RetryingClient.prototype.fetch = function (request) {
        return tslib.__awaiter(this, void 0, void 0, function () {
          var throttleMetadata;
          return tslib.__generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , this.storage.getThrottleMetadata()];

              case 1:
                throttleMetadata = _a.sent() || {
                  backoffCount: 0,
                  throttleEndTimeMillis: Date.now()
                };
                return [2
                /*return*/
                , this.attemptFetch(request, throttleMetadata)];
            }
          });
        });
      };
      /**
       * A recursive helper for attempting a fetch request repeatedly.
       *
       * @throws any non-retriable errors.
       */


      RetryingClient.prototype.attemptFetch = function (request, _a) {
        var throttleEndTimeMillis = _a.throttleEndTimeMillis,
            backoffCount = _a.backoffCount;
        return tslib.__awaiter(this, void 0, void 0, function () {
          var response, e_1, throttleMetadata;
          return tslib.__generator(this, function (_b) {
            switch (_b.label) {
              case 0:
                // Starts with a (potentially zero) timeout to support resumption from stored state.
                // Ensures the throttle end time is honored if the last attempt timed out.
                // Note the SDK will never make a request if the fetch timeout expires at this point.
                return [4
                /*yield*/
                , setAbortableTimeout(request.signal, throttleEndTimeMillis)];

              case 1:
                // Starts with a (potentially zero) timeout to support resumption from stored state.
                // Ensures the throttle end time is honored if the last attempt timed out.
                // Note the SDK will never make a request if the fetch timeout expires at this point.
                _b.sent();

                _b.label = 2;

              case 2:
                _b.trys.push([2, 5,, 7]);

                return [4
                /*yield*/
                , this.client.fetch(request)];

              case 3:
                response = _b.sent(); // Note the SDK only clears throttle state if response is success or non-retriable.

                return [4
                /*yield*/
                , this.storage.deleteThrottleMetadata()];

              case 4:
                // Note the SDK only clears throttle state if response is success or non-retriable.
                _b.sent();

                return [2
                /*return*/
                , response];

              case 5:
                e_1 = _b.sent();

                if (!isRetriableError(e_1)) {
                  throw e_1;
                }

                throttleMetadata = {
                  throttleEndTimeMillis: Date.now() + calculateBackoffMillis(backoffCount),
                  backoffCount: backoffCount + 1
                }; // Persists state.

                return [4
                /*yield*/
                , this.storage.setThrottleMetadata(throttleMetadata)];

              case 6:
                // Persists state.
                _b.sent();

                return [2
                /*return*/
                , this.attemptFetch(request, throttleMetadata)];

              case 7:
                return [2
                /*return*/
                ];
            }
          });
        });
      };

      return RetryingClient;
    }();

    var name = "@firebase/remote-config";
    var version = "0.1.19";
    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    function registerRemoteConfig(firebaseInstance) {
      firebaseInstance.INTERNAL.registerComponent(new component.Component('remoteConfig', remoteConfigFactory, "PUBLIC"
      /* PUBLIC */
      ).setMultipleInstances(true));
      firebaseInstance.registerVersion(name, version);

      function remoteConfigFactory(container, namespace) {
        /* Dependencies */
        // getImmediate for FirebaseApp will always succeed
        var app = container.getProvider('app').getImmediate(); // The following call will always succeed because rc has `import '@firebase/installations'`

        var installations = container.getProvider('installations').getImmediate(); // Guards against the SDK being used in non-browser environments.

        if (typeof window === 'undefined') {
          throw ERROR_FACTORY.create("registration-window"
          /* REGISTRATION_WINDOW */
          );
        } // Normalizes optional inputs.


        var _a = app.options,
            projectId = _a.projectId,
            apiKey = _a.apiKey,
            appId = _a.appId;

        if (!projectId) {
          throw ERROR_FACTORY.create("registration-project-id"
          /* REGISTRATION_PROJECT_ID */
          );
        }

        if (!apiKey) {
          throw ERROR_FACTORY.create("registration-api-key"
          /* REGISTRATION_API_KEY */
          );
        }

        if (!appId) {
          throw ERROR_FACTORY.create("registration-app-id"
          /* REGISTRATION_APP_ID */
          );
        }

        namespace = namespace || 'firebase';
        var storage = new Storage(appId, app.name, namespace);
        var storageCache = new StorageCache(storage);
        var logger$1 = new logger.Logger(name); // Sets ERROR as the default log level.
        // See RemoteConfig#setLogLevel for corresponding normalization to ERROR log level.

        logger$1.logLevel = logger.LogLevel.ERROR;
        var restClient = new RestClient(installations, // Uses the JS SDK version, by which the RC package version can be deduced, if necessary.
        firebaseInstance.SDK_VERSION, namespace, projectId, apiKey, appId);
        var retryingClient = new RetryingClient(restClient, storage);
        var cachingClient = new CachingClient(retryingClient, storage, storageCache, logger$1);
        var remoteConfigInstance = new RemoteConfig(app, cachingClient, storageCache, storage, logger$1); // Starts warming cache.
        // eslint-disable-next-line @typescript-eslint/no-floating-promises

        remoteConfigInstance.ensureInitialized();
        return remoteConfigInstance;
      }
    }

    registerRemoteConfig(firebase);
    exports.registerRemoteConfig = registerRemoteConfig; //# sourceMappingURL=index.cjs.js.map

    /***/
  },

  /***/
  "./node_modules/@firebase/storage/dist/index.esm.js":
  /*!**********************************************************!*\
    !*** ./node_modules/@firebase/storage/dist/index.esm.js ***!
    \**********************************************************/

  /*! exports provided: registerStorage */

  /***/
  function node_modulesFirebaseStorageDistIndexEsmJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "registerStorage", function () {
      return registerStorage;
    });
    /* harmony import */


    var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @firebase/app */
    "./node_modules/@firebase/app/dist/index.cjs.js");
    /* harmony import */


    var _firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _firebase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @firebase/component */
    "./node_modules/@firebase/component/dist/index.cjs.js");
    /* harmony import */


    var _firebase_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_firebase_component__WEBPACK_IMPORTED_MODULE_2__);
    /**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @fileoverview Constants used in the Firebase Storage library.
     */

    /**
     * Domain name for firebase storage.
     */


    var DEFAULT_HOST = 'firebasestorage.googleapis.com';
    /**
     * The key in Firebase config json for the storage bucket.
     */

    var CONFIG_STORAGE_BUCKET_KEY = 'storageBucket';
    /**
     * 2 minutes
     *
     * The timeout for all operations except upload.
     */

    var DEFAULT_MAX_OPERATION_RETRY_TIME = 2 * 60 * 1000;
    /**
     * 10 minutes
     *
     * The timeout for upload.
     */

    var DEFAULT_MAX_UPLOAD_RETRY_TIME = 10 * 60 * 1000;
    /**
     * This is the value of Number.MIN_SAFE_INTEGER, which is not well supported
     * enough for us to use it directly.
     */

    var MIN_SAFE_INTEGER = -9007199254740991;
    /**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    var FirebaseStorageError =
    /** @class */
    function () {
      function FirebaseStorageError(code, message) {
        this.code_ = prependCode(code);
        this.message_ = 'Firebase Storage: ' + message;
        this.serverResponse_ = null;
        this.name_ = 'FirebaseError';
      }

      FirebaseStorageError.prototype.codeProp = function () {
        return this.code;
      };

      FirebaseStorageError.prototype.codeEquals = function (code) {
        return prependCode(code) === this.codeProp();
      };

      FirebaseStorageError.prototype.serverResponseProp = function () {
        return this.serverResponse_;
      };

      FirebaseStorageError.prototype.setServerResponseProp = function (serverResponse) {
        this.serverResponse_ = serverResponse;
      };

      Object.defineProperty(FirebaseStorageError.prototype, "name", {
        get: function get() {
          return this.name_;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(FirebaseStorageError.prototype, "code", {
        get: function get() {
          return this.code_;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(FirebaseStorageError.prototype, "message", {
        get: function get() {
          return this.message_;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(FirebaseStorageError.prototype, "serverResponse", {
        get: function get() {
          return this.serverResponse_;
        },
        enumerable: true,
        configurable: true
      });
      return FirebaseStorageError;
    }();

    var Code = {
      // Shared between all platforms
      UNKNOWN: 'unknown',
      OBJECT_NOT_FOUND: 'object-not-found',
      BUCKET_NOT_FOUND: 'bucket-not-found',
      PROJECT_NOT_FOUND: 'project-not-found',
      QUOTA_EXCEEDED: 'quota-exceeded',
      UNAUTHENTICATED: 'unauthenticated',
      UNAUTHORIZED: 'unauthorized',
      RETRY_LIMIT_EXCEEDED: 'retry-limit-exceeded',
      INVALID_CHECKSUM: 'invalid-checksum',
      CANCELED: 'canceled',
      // JS specific
      INVALID_EVENT_NAME: 'invalid-event-name',
      INVALID_URL: 'invalid-url',
      INVALID_DEFAULT_BUCKET: 'invalid-default-bucket',
      NO_DEFAULT_BUCKET: 'no-default-bucket',
      CANNOT_SLICE_BLOB: 'cannot-slice-blob',
      SERVER_FILE_WRONG_SIZE: 'server-file-wrong-size',
      NO_DOWNLOAD_URL: 'no-download-url',
      INVALID_ARGUMENT: 'invalid-argument',
      INVALID_ARGUMENT_COUNT: 'invalid-argument-count',
      APP_DELETED: 'app-deleted',
      INVALID_ROOT_OPERATION: 'invalid-root-operation',
      INVALID_FORMAT: 'invalid-format',
      INTERNAL_ERROR: 'internal-error'
    };

    function prependCode(code) {
      return 'storage/' + code;
    }

    function unknown() {
      var message = 'An unknown error occurred, please check the error payload for ' + 'server response.';
      return new FirebaseStorageError(Code.UNKNOWN, message);
    }

    function objectNotFound(path) {
      return new FirebaseStorageError(Code.OBJECT_NOT_FOUND, "Object '" + path + "' does not exist.");
    }

    function quotaExceeded(bucket) {
      return new FirebaseStorageError(Code.QUOTA_EXCEEDED, "Quota for bucket '" + bucket + "' exceeded, please view quota on " + 'https://firebase.google.com/pricing/.');
    }

    function unauthenticated() {
      var message = 'User is not authenticated, please authenticate using Firebase ' + 'Authentication and try again.';
      return new FirebaseStorageError(Code.UNAUTHENTICATED, message);
    }

    function unauthorized(path) {
      return new FirebaseStorageError(Code.UNAUTHORIZED, "User does not have permission to access '" + path + "'.");
    }

    function retryLimitExceeded() {
      return new FirebaseStorageError(Code.RETRY_LIMIT_EXCEEDED, 'Max retry time for operation exceeded, please try again.');
    }

    function canceled() {
      return new FirebaseStorageError(Code.CANCELED, 'User canceled the upload/download.');
    }

    function invalidUrl(url) {
      return new FirebaseStorageError(Code.INVALID_URL, "Invalid URL '" + url + "'.");
    }

    function invalidDefaultBucket(bucket) {
      return new FirebaseStorageError(Code.INVALID_DEFAULT_BUCKET, "Invalid default bucket '" + bucket + "'.");
    }

    function cannotSliceBlob() {
      return new FirebaseStorageError(Code.CANNOT_SLICE_BLOB, 'Cannot slice blob for upload. Please retry the upload.');
    }

    function serverFileWrongSize() {
      return new FirebaseStorageError(Code.SERVER_FILE_WRONG_SIZE, 'Server recorded incorrect upload file size, please retry the upload.');
    }

    function noDownloadURL() {
      return new FirebaseStorageError(Code.NO_DOWNLOAD_URL, 'The given file does not have any download URLs.');
    }

    function invalidArgument(index, fnName, message) {
      return new FirebaseStorageError(Code.INVALID_ARGUMENT, 'Invalid argument in `' + fnName + '` at index ' + index + ': ' + message);
    }

    function invalidArgumentCount(argMin, argMax, fnName, real) {
      var countPart;
      var plural;

      if (argMin === argMax) {
        countPart = argMin;
        plural = argMin === 1 ? 'argument' : 'arguments';
      } else {
        countPart = 'between ' + argMin + ' and ' + argMax;
        plural = 'arguments';
      }

      return new FirebaseStorageError(Code.INVALID_ARGUMENT_COUNT, 'Invalid argument count in `' + fnName + '`: Expected ' + countPart + ' ' + plural + ', received ' + real + '.');
    }

    function appDeleted() {
      return new FirebaseStorageError(Code.APP_DELETED, 'The Firebase app was deleted.');
    }
    /**
     * @param name The name of the operation that was invalid.
     */


    function invalidRootOperation(name) {
      return new FirebaseStorageError(Code.INVALID_ROOT_OPERATION, "The operation '" + name + "' cannot be performed on a root reference, create a non-root " + "reference using child, such as .child('file.png').");
    }
    /**
     * @param format The format that was not valid.
     * @param message A message describing the format violation.
     */


    function invalidFormat(format, message) {
      return new FirebaseStorageError(Code.INVALID_FORMAT, "String does not match format '" + format + "': " + message);
    }
    /**
     * @param message A message describing the internal error.
     */


    function internalError(message) {
      throw new FirebaseStorageError(Code.INTERNAL_ERROR, 'Internal error: ' + message);
    }
    /**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var StringFormat = {
      RAW: 'raw',
      BASE64: 'base64',
      BASE64URL: 'base64url',
      DATA_URL: 'data_url'
    };

    function formatValidator(stringFormat) {
      switch (stringFormat) {
        case StringFormat.RAW:
        case StringFormat.BASE64:
        case StringFormat.BASE64URL:
        case StringFormat.DATA_URL:
          return;

        default:
          throw 'Expected one of the event types: [' + StringFormat.RAW + ', ' + StringFormat.BASE64 + ', ' + StringFormat.BASE64URL + ', ' + StringFormat.DATA_URL + '].';
      }
    }
    /**
     * @struct
     */


    var StringData =
    /** @class */
    function () {
      function StringData(data, contentType) {
        this.data = data;
        this.contentType = contentType || null;
      }

      return StringData;
    }();

    function dataFromString(format, stringData) {
      switch (format) {
        case StringFormat.RAW:
          return new StringData(utf8Bytes_(stringData));

        case StringFormat.BASE64:
        case StringFormat.BASE64URL:
          return new StringData(base64Bytes_(format, stringData));

        case StringFormat.DATA_URL:
          return new StringData(dataURLBytes_(stringData), dataURLContentType_(stringData));
        // do nothing
      } // assert(false);


      throw unknown();
    }

    function utf8Bytes_(value) {
      var b = [];

      for (var i = 0; i < value.length; i++) {
        var c = value.charCodeAt(i);

        if (c <= 127) {
          b.push(c);
        } else {
          if (c <= 2047) {
            b.push(192 | c >> 6, 128 | c & 63);
          } else {
            if ((c & 64512) === 55296) {
              // The start of a surrogate pair.
              var valid = i < value.length - 1 && (value.charCodeAt(i + 1) & 64512) === 56320;

              if (!valid) {
                // The second surrogate wasn't there.
                b.push(239, 191, 189);
              } else {
                var hi = c;
                var lo = value.charCodeAt(++i);
                c = 65536 | (hi & 1023) << 10 | lo & 1023;
                b.push(240 | c >> 18, 128 | c >> 12 & 63, 128 | c >> 6 & 63, 128 | c & 63);
              }
            } else {
              if ((c & 64512) === 56320) {
                // Invalid low surrogate.
                b.push(239, 191, 189);
              } else {
                b.push(224 | c >> 12, 128 | c >> 6 & 63, 128 | c & 63);
              }
            }
          }
        }
      }

      return new Uint8Array(b);
    }

    function percentEncodedBytes_(value) {
      var decoded;

      try {
        decoded = decodeURIComponent(value);
      } catch (e) {
        throw invalidFormat(StringFormat.DATA_URL, 'Malformed data URL.');
      }

      return utf8Bytes_(decoded);
    }

    function base64Bytes_(format, value) {
      switch (format) {
        case StringFormat.BASE64:
          {
            var hasMinus = value.indexOf('-') !== -1;
            var hasUnder = value.indexOf('_') !== -1;

            if (hasMinus || hasUnder) {
              var invalidChar = hasMinus ? '-' : '_';
              throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64url encoded?");
            }

            break;
          }

        case StringFormat.BASE64URL:
          {
            var hasPlus = value.indexOf('+') !== -1;
            var hasSlash = value.indexOf('/') !== -1;

            if (hasPlus || hasSlash) {
              var invalidChar = hasPlus ? '+' : '/';
              throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64 encoded?");
            }

            value = value.replace(/-/g, '+').replace(/_/g, '/');
            break;
          }
        // do nothing
      }

      var bytes;

      try {
        bytes = atob(value);
      } catch (e) {
        throw invalidFormat(format, 'Invalid character found');
      }

      var array = new Uint8Array(bytes.length);

      for (var i = 0; i < bytes.length; i++) {
        array[i] = bytes.charCodeAt(i);
      }

      return array;
    }
    /**
     * @struct
     */


    var DataURLParts =
    /** @class */
    function () {
      function DataURLParts(dataURL) {
        this.base64 = false;
        this.contentType = null;
        var matches = dataURL.match(/^data:([^,]+)?,/);

        if (matches === null) {
          throw invalidFormat(StringFormat.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
        }

        var middle = matches[1] || null;

        if (middle != null) {
          this.base64 = endsWith(middle, ';base64');
          this.contentType = this.base64 ? middle.substring(0, middle.length - ';base64'.length) : middle;
        }

        this.rest = dataURL.substring(dataURL.indexOf(',') + 1);
      }

      return DataURLParts;
    }();

    function dataURLBytes_(dataUrl) {
      var parts = new DataURLParts(dataUrl);

      if (parts.base64) {
        return base64Bytes_(StringFormat.BASE64, parts.rest);
      } else {
        return percentEncodedBytes_(parts.rest);
      }
    }

    function dataURLContentType_(dataUrl) {
      var parts = new DataURLParts(dataUrl);
      return parts.contentType;
    }

    function endsWith(s, end) {
      var longEnough = s.length >= end.length;

      if (!longEnough) {
        return false;
      }

      return s.substring(s.length - end.length) === end;
    }
    /**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var TaskEvent = {
      /** Triggered whenever the task changes or progress is updated. */
      STATE_CHANGED: 'state_changed'
    };
    var InternalTaskState = {
      RUNNING: 'running',
      PAUSING: 'pausing',
      PAUSED: 'paused',
      SUCCESS: 'success',
      CANCELING: 'canceling',
      CANCELED: 'canceled',
      ERROR: 'error'
    };
    var TaskState = {
      /** The task is currently transferring data. */
      RUNNING: 'running',

      /** The task was paused by the user. */
      PAUSED: 'paused',

      /** The task completed successfully. */
      SUCCESS: 'success',

      /** The task was canceled. */
      CANCELED: 'canceled',

      /** The task failed with an error. */
      ERROR: 'error'
    };

    function taskStateFromInternalTaskState(state) {
      switch (state) {
        case InternalTaskState.RUNNING:
        case InternalTaskState.PAUSING:
        case InternalTaskState.CANCELING:
          return TaskState.RUNNING;

        case InternalTaskState.PAUSED:
          return TaskState.PAUSED;

        case InternalTaskState.SUCCESS:
          return TaskState.SUCCESS;

        case InternalTaskState.CANCELED:
          return TaskState.CANCELED;

        case InternalTaskState.ERROR:
          return TaskState.ERROR;

        default:
          // TODO(andysoto): assert(false);
          return TaskState.ERROR;
      }
    }
    /**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @return False if the object is undefined or null, true otherwise.
     */


    function isDef(p) {
      return p != null;
    }

    function isJustDef(p) {
      return p !== void 0;
    }

    function isFunction(p) {
      return typeof p === 'function';
    }

    function isObject(p) {
      return typeof p === 'object';
    }

    function isNonNullObject(p) {
      return isObject(p) && p !== null;
    }

    function isNonArrayObject(p) {
      return isObject(p) && !Array.isArray(p);
    }

    function isString(p) {
      return typeof p === 'string' || p instanceof String;
    }

    function isInteger(p) {
      return isNumber(p) && Number.isInteger(p);
    }

    function isNumber(p) {
      return typeof p === 'number' || p instanceof Number;
    }

    function isNativeBlob(p) {
      return isNativeBlobDefined() && p instanceof Blob;
    }

    function isNativeBlobDefined() {
      return typeof Blob !== 'undefined';
    }
    /**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @enum{number}
     */


    var ErrorCode;

    (function (ErrorCode) {
      ErrorCode[ErrorCode["NO_ERROR"] = 0] = "NO_ERROR";
      ErrorCode[ErrorCode["NETWORK_ERROR"] = 1] = "NETWORK_ERROR";
      ErrorCode[ErrorCode["ABORT"] = 2] = "ABORT";
    })(ErrorCode || (ErrorCode = {}));
    /**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * We use this instead of goog.net.XhrIo because goog.net.XhrIo is hyuuuuge and
     * doesn't work in React Native on Android.
     */


    var NetworkXhrIo =
    /** @class */
    function () {
      function NetworkXhrIo() {
        var _this = this;

        this.sent_ = false;
        this.xhr_ = new XMLHttpRequest();
        this.errorCode_ = ErrorCode.NO_ERROR;
        this.sendPromise_ = new Promise(function (resolve) {
          _this.xhr_.addEventListener('abort', function () {
            _this.errorCode_ = ErrorCode.ABORT;
            resolve(_this);
          });

          _this.xhr_.addEventListener('error', function () {
            _this.errorCode_ = ErrorCode.NETWORK_ERROR;
            resolve(_this);
          });

          _this.xhr_.addEventListener('load', function () {
            resolve(_this);
          });
        });
      }
      /**
       * @override
       */


      NetworkXhrIo.prototype.send = function (url, method, body, headers) {
        if (this.sent_) {
          throw internalError('cannot .send() more than once');
        }

        this.sent_ = true;
        this.xhr_.open(method, url, true);

        if (isDef(headers)) {
          for (var key in headers) {
            if (headers.hasOwnProperty(key)) {
              this.xhr_.setRequestHeader(key, headers[key].toString());
            }
          }
        }

        if (isDef(body)) {
          this.xhr_.send(body);
        } else {
          this.xhr_.send();
        }

        return this.sendPromise_;
      };
      /**
       * @override
       */


      NetworkXhrIo.prototype.getErrorCode = function () {
        if (!this.sent_) {
          throw internalError('cannot .getErrorCode() before sending');
        }

        return this.errorCode_;
      };
      /**
       * @override
       */


      NetworkXhrIo.prototype.getStatus = function () {
        if (!this.sent_) {
          throw internalError('cannot .getStatus() before sending');
        }

        try {
          return this.xhr_.status;
        } catch (e) {
          return -1;
        }
      };
      /**
       * @override
       */


      NetworkXhrIo.prototype.getResponseText = function () {
        if (!this.sent_) {
          throw internalError('cannot .getResponseText() before sending');
        }

        return this.xhr_.responseText;
      };
      /**
       * Aborts the request.
       * @override
       */


      NetworkXhrIo.prototype.abort = function () {
        this.xhr_.abort();
      };
      /**
       * @override
       */


      NetworkXhrIo.prototype.getResponseHeader = function (header) {
        return this.xhr_.getResponseHeader(header);
      };
      /**
       * @override
       */


      NetworkXhrIo.prototype.addUploadProgressListener = function (listener) {
        if (isDef(this.xhr_.upload)) {
          this.xhr_.upload.addEventListener('progress', listener);
        }
      };
      /**
       * @override
       */


      NetworkXhrIo.prototype.removeUploadProgressListener = function (listener) {
        if (isDef(this.xhr_.upload)) {
          this.xhr_.upload.removeEventListener('progress', listener);
        }
      };

      return NetworkXhrIo;
    }();
    /**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Factory-like class for creating XhrIo instances.
     */


    var XhrIoPool =
    /** @class */
    function () {
      function XhrIoPool() {}

      XhrIoPool.prototype.createXhrIo = function () {
        return new NetworkXhrIo();
      };

      return XhrIoPool;
    }();
    /**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    function getBlobBuilder() {
      if (typeof BlobBuilder !== 'undefined') {
        return BlobBuilder;
      } else if (typeof WebKitBlobBuilder !== 'undefined') {
        return WebKitBlobBuilder;
      } else {
        return undefined;
      }
    }
    /**
     * Concatenates one or more values together and converts them to a Blob.
     *
     * @param args The values that will make up the resulting blob.
     * @return The blob.
     */


    function getBlob() {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      var BlobBuilder = getBlobBuilder();

      if (BlobBuilder !== undefined) {
        var bb = new BlobBuilder();

        for (var i = 0; i < args.length; i++) {
          bb.append(args[i]);
        }

        return bb.getBlob();
      } else {
        if (isNativeBlobDefined()) {
          return new Blob(args);
        } else {
          throw Error("This browser doesn't seem to support creating Blobs");
        }
      }
    }
    /**
     * Slices the blob. The returned blob contains data from the start byte
     * (inclusive) till the end byte (exclusive). Negative indices cannot be used.
     *
     * @param blob The blob to be sliced.
     * @param start Index of the starting byte.
     * @param end Index of the ending byte.
     * @return The blob slice or null if not supported.
     */


    function sliceBlob(blob, start, end) {
      if (blob.webkitSlice) {
        return blob.webkitSlice(start, end);
      } else if (blob.mozSlice) {
        return blob.mozSlice(start, end);
      } else if (blob.slice) {
        return blob.slice(start, end);
      }

      return null;
    }
    /**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @param opt_elideCopy If true, doesn't copy mutable input data
     *     (e.g. Uint8Arrays). Pass true only if you know the objects will not be
     *     modified after this blob's construction.
     */


    var FbsBlob =
    /** @class */
    function () {
      function FbsBlob(data, elideCopy) {
        var size = 0;
        var blobType = '';

        if (isNativeBlob(data)) {
          this.data_ = data;
          size = data.size;
          blobType = data.type;
        } else if (data instanceof ArrayBuffer) {
          if (elideCopy) {
            this.data_ = new Uint8Array(data);
          } else {
            this.data_ = new Uint8Array(data.byteLength);
            this.data_.set(new Uint8Array(data));
          }

          size = this.data_.length;
        } else if (data instanceof Uint8Array) {
          if (elideCopy) {
            this.data_ = data;
          } else {
            this.data_ = new Uint8Array(data.length);
            this.data_.set(data);
          }

          size = data.length;
        }

        this.size_ = size;
        this.type_ = blobType;
      }

      FbsBlob.prototype.size = function () {
        return this.size_;
      };

      FbsBlob.prototype.type = function () {
        return this.type_;
      };

      FbsBlob.prototype.slice = function (startByte, endByte) {
        if (isNativeBlob(this.data_)) {
          var realBlob = this.data_;
          var sliced = sliceBlob(realBlob, startByte, endByte);

          if (sliced === null) {
            return null;
          }

          return new FbsBlob(sliced);
        } else {
          var slice = new Uint8Array(this.data_.buffer, startByte, endByte - startByte);
          return new FbsBlob(slice, true);
        }
      };

      FbsBlob.getBlob = function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        if (isNativeBlobDefined()) {
          var blobby = args.map(function (val) {
            if (val instanceof FbsBlob) {
              return val.data_;
            } else {
              return val;
            }
          });
          return new FbsBlob(getBlob.apply(null, blobby));
        } else {
          var uint8Arrays = args.map(function (val) {
            if (isString(val)) {
              return dataFromString(StringFormat.RAW, val).data;
            } else {
              // Blobs don't exist, so this has to be a Uint8Array.
              return val.data_;
            }
          });
          var finalLength_1 = 0;
          uint8Arrays.forEach(function (array) {
            finalLength_1 += array.byteLength;
          });
          var merged_1 = new Uint8Array(finalLength_1);
          var index_1 = 0;
          uint8Arrays.forEach(function (array) {
            for (var i = 0; i < array.length; i++) {
              merged_1[index_1++] = array[i];
            }
          });
          return new FbsBlob(merged_1, true);
        }
      };

      FbsBlob.prototype.uploadData = function () {
        return this.data_;
      };

      return FbsBlob;
    }();
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @struct
     */


    var Location =
    /** @class */
    function () {
      function Location(bucket, path) {
        this.bucket = bucket;
        this.path_ = path;
      }

      Object.defineProperty(Location.prototype, "path", {
        get: function get() {
          return this.path_;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Location.prototype, "isRoot", {
        get: function get() {
          return this.path.length === 0;
        },
        enumerable: true,
        configurable: true
      });

      Location.prototype.fullServerUrl = function () {
        var encode = encodeURIComponent;
        return '/b/' + encode(this.bucket) + '/o/' + encode(this.path);
      };

      Location.prototype.bucketOnlyServerUrl = function () {
        var encode = encodeURIComponent;
        return '/b/' + encode(this.bucket) + '/o';
      };

      Location.makeFromBucketSpec = function (bucketString) {
        var bucketLocation;

        try {
          bucketLocation = Location.makeFromUrl(bucketString);
        } catch (e) {
          // Not valid URL, use as-is. This lets you put bare bucket names in
          // config.
          return new Location(bucketString, '');
        }

        if (bucketLocation.path === '') {
          return bucketLocation;
        } else {
          throw invalidDefaultBucket(bucketString);
        }
      };

      Location.makeFromUrl = function (url) {
        var location = null;
        var bucketDomain = '([A-Za-z0-9.\\-_]+)';

        function gsModify(loc) {
          if (loc.path.charAt(loc.path.length - 1) === '/') {
            loc.path_ = loc.path_.slice(0, -1);
          }
        }

        var gsPath = '(/(.*))?$';
        var gsRegex = new RegExp('^gs://' + bucketDomain + gsPath, 'i');
        var gsIndices = {
          bucket: 1,
          path: 3
        };

        function httpModify(loc) {
          loc.path_ = decodeURIComponent(loc.path);
        }

        var version = 'v[A-Za-z0-9_]+';
        var firebaseStorageHost = DEFAULT_HOST.replace(/[.]/g, '\\.');
        var firebaseStoragePath = '(/([^?#]*).*)?$';
        var firebaseStorageRegExp = new RegExp("^https?://" + firebaseStorageHost + "/" + version + "/b/" + bucketDomain + "/o" + firebaseStoragePath, 'i');
        var firebaseStorageIndices = {
          bucket: 1,
          path: 3
        };
        var cloudStorageHost = '(?:storage.googleapis.com|storage.cloud.google.com)';
        var cloudStoragePath = '([^?#]*)';
        var cloudStorageRegExp = new RegExp("^https?://" + cloudStorageHost + "/" + bucketDomain + "/" + cloudStoragePath, 'i');
        var cloudStorageIndices = {
          bucket: 1,
          path: 2
        };
        var groups = [{
          regex: gsRegex,
          indices: gsIndices,
          postModify: gsModify
        }, {
          regex: firebaseStorageRegExp,
          indices: firebaseStorageIndices,
          postModify: httpModify
        }, {
          regex: cloudStorageRegExp,
          indices: cloudStorageIndices,
          postModify: httpModify
        }];

        for (var i = 0; i < groups.length; i++) {
          var group = groups[i];
          var captures = group.regex.exec(url);

          if (captures) {
            var bucketValue = captures[group.indices.bucket];
            var pathValue = captures[group.indices.path];

            if (!pathValue) {
              pathValue = '';
            }

            location = new Location(bucketValue, pathValue);
            group.postModify(location);
            break;
          }
        }

        if (location == null) {
          throw invalidUrl(url);
        }

        return location;
      };

      return Location;
    }();
    /**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Returns the Object resulting from parsing the given JSON, or null if the
     * given string does not represent a JSON object.
     */


    function jsonObjectOrNull(s) {
      var obj;

      try {
        obj = JSON.parse(s);
      } catch (e) {
        return null;
      }

      if (isNonArrayObject(obj)) {
        return obj;
      } else {
        return null;
      }
    }
    /**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @fileoverview Contains helper methods for manipulating paths.
     */

    /**
     * @return Null if the path is already at the root.
     */


    function parent(path) {
      if (path.length === 0) {
        return null;
      }

      var index = path.lastIndexOf('/');

      if (index === -1) {
        return '';
      }

      var newPath = path.slice(0, index);
      return newPath;
    }

    function child(path, childPath) {
      var canonicalChildPath = childPath.split('/').filter(function (component) {
        return component.length > 0;
      }).join('/');

      if (path.length === 0) {
        return canonicalChildPath;
      } else {
        return path + '/' + canonicalChildPath;
      }
    }
    /**
     * Returns the last component of a path.
     * '/foo/bar' -> 'bar'
     * '/foo/bar/baz/' -> 'baz/'
     * '/a' -> 'a'
     */


    function lastComponent(path) {
      var index = path.lastIndexOf('/', path.length - 2);

      if (index === -1) {
        return path;
      } else {
        return path.slice(index + 1);
      }
    }
    /**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    function makeUrl(urlPart) {
      return "https://" + DEFAULT_HOST + "/v0" + urlPart;
    }

    function makeQueryString(params) {
      var encode = encodeURIComponent;
      var queryPart = '?';

      for (var key in params) {
        if (params.hasOwnProperty(key)) {
          // @ts-ignore TODO: remove once typescript is upgraded to 3.5.x
          var nextPart = encode(key) + '=' + encode(params[key]);
          queryPart = queryPart + nextPart + '&';
        }
      } // Chop off the extra '&' or '?' on the end


      queryPart = queryPart.slice(0, -1);
      return queryPart;
    }
    /**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    function noXform_(metadata, value) {
      return value;
    }
    /**
     * @struct
     */


    var Mapping =
    /** @class */
    function () {
      function Mapping(server, local, writable, xform) {
        this.server = server;
        this.local = local || server;
        this.writable = !!writable;
        this.xform = xform || noXform_;
      }

      return Mapping;
    }();

    var mappings_ = null;

    function xformPath(fullPath) {
      if (!isString(fullPath) || fullPath.length < 2) {
        return fullPath;
      } else {
        return lastComponent(fullPath);
      }
    }

    function getMappings() {
      if (mappings_) {
        return mappings_;
      }

      var mappings = [];
      mappings.push(new Mapping('bucket'));
      mappings.push(new Mapping('generation'));
      mappings.push(new Mapping('metageneration'));
      mappings.push(new Mapping('name', 'fullPath', true));

      function mappingsXformPath(_metadata, fullPath) {
        return xformPath(fullPath);
      }

      var nameMapping = new Mapping('name');
      nameMapping.xform = mappingsXformPath;
      mappings.push(nameMapping);
      /**
       * Coerces the second param to a number, if it is defined.
       */

      function xformSize(_metadata, size) {
        if (isDef(size)) {
          return Number(size);
        } else {
          return size;
        }
      }

      var sizeMapping = new Mapping('size');
      sizeMapping.xform = xformSize;
      mappings.push(sizeMapping);
      mappings.push(new Mapping('timeCreated'));
      mappings.push(new Mapping('updated'));
      mappings.push(new Mapping('md5Hash', null, true));
      mappings.push(new Mapping('cacheControl', null, true));
      mappings.push(new Mapping('contentDisposition', null, true));
      mappings.push(new Mapping('contentEncoding', null, true));
      mappings.push(new Mapping('contentLanguage', null, true));
      mappings.push(new Mapping('contentType', null, true));
      mappings.push(new Mapping('metadata', 'customMetadata', true));
      mappings_ = mappings;
      return mappings_;
    }

    function addRef(metadata, authWrapper) {
      function generateRef() {
        var bucket = metadata['bucket'];
        var path = metadata['fullPath'];
        var loc = new Location(bucket, path);
        return authWrapper.makeStorageReference(loc);
      }

      Object.defineProperty(metadata, 'ref', {
        get: generateRef
      });
    }

    function fromResource(authWrapper, resource, mappings) {
      var metadata = {};
      metadata['type'] = 'file';
      var len = mappings.length;

      for (var i = 0; i < len; i++) {
        var mapping = mappings[i];
        metadata[mapping.local] = mapping.xform(metadata, resource[mapping.server]);
      }

      addRef(metadata, authWrapper);
      return metadata;
    }

    function fromResourceString(authWrapper, resourceString, mappings) {
      var obj = jsonObjectOrNull(resourceString);

      if (obj === null) {
        return null;
      }

      var resource = obj;
      return fromResource(authWrapper, resource, mappings);
    }

    function downloadUrlFromResourceString(metadata, resourceString) {
      var obj = jsonObjectOrNull(resourceString);

      if (obj === null) {
        return null;
      }

      if (!isString(obj['downloadTokens'])) {
        // This can happen if objects are uploaded through GCS and retrieved
        // through list, so we don't want to throw an Error.
        return null;
      }

      var tokens = obj['downloadTokens'];

      if (tokens.length === 0) {
        return null;
      }

      var encode = encodeURIComponent;
      var tokensList = tokens.split(',');
      var urls = tokensList.map(function (token) {
        var bucket = metadata['bucket'];
        var path = metadata['fullPath'];
        var urlPart = '/b/' + encode(bucket) + '/o/' + encode(path);
        var base = makeUrl(urlPart);
        var queryString = makeQueryString({
          alt: 'media',
          token: token
        });
        return base + queryString;
      });
      return urls[0];
    }

    function toResourceString(metadata, mappings) {
      var resource = {};
      var len = mappings.length;

      for (var i = 0; i < len; i++) {
        var mapping = mappings[i];

        if (mapping.writable) {
          resource[mapping.server] = metadata[mapping.local];
        }
      }

      return JSON.stringify(resource);
    }

    function metadataValidator(p) {
      if (!isObject(p) || !p) {
        throw 'Expected Metadata object.';
      }

      for (var key in p) {
        if (p.hasOwnProperty(key)) {
          var val = p[key];

          if (key === 'customMetadata') {
            if (!isObject(val)) {
              throw 'Expected object for \'customMetadata\' mapping.';
            }
          } else {
            if (isNonNullObject(val)) {
              throw "Mapping for '" + key + "' cannot be an object.";
            }
          }
        }
      }
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    var MAX_RESULTS_KEY = 'maxResults';
    var MAX_MAX_RESULTS = 1000;
    var PAGE_TOKEN_KEY = 'pageToken';
    var PREFIXES_KEY = 'prefixes';
    var ITEMS_KEY = 'items';

    function fromBackendResponse(authWrapper, bucket, resource) {
      var listResult = {
        prefixes: [],
        items: [],
        nextPageToken: resource['nextPageToken']
      };

      if (resource[PREFIXES_KEY]) {
        for (var _i = 0, _a = resource[PREFIXES_KEY]; _i < _a.length; _i++) {
          var path = _a[_i];
          var pathWithoutTrailingSlash = path.replace(/\/$/, '');
          var reference = authWrapper.makeStorageReference(new Location(bucket, pathWithoutTrailingSlash));
          listResult.prefixes.push(reference);
        }
      }

      if (resource[ITEMS_KEY]) {
        for (var _b = 0, _c = resource[ITEMS_KEY]; _b < _c.length; _b++) {
          var item = _c[_b];
          var reference = authWrapper.makeStorageReference(new Location(bucket, item['name']));
          listResult.items.push(reference);
        }
      }

      return listResult;
    }

    function fromResponseString(authWrapper, bucket, resourceString) {
      var obj = jsonObjectOrNull(resourceString);

      if (obj === null) {
        return null;
      }

      var resource = obj;
      return fromBackendResponse(authWrapper, bucket, resource);
    }

    function listOptionsValidator(p) {
      if (!isObject(p) || !p) {
        throw 'Expected ListOptions object.';
      }

      for (var key in p) {
        if (key === MAX_RESULTS_KEY) {
          if (!isInteger(p[MAX_RESULTS_KEY]) || p[MAX_RESULTS_KEY] <= 0) {
            throw 'Expected maxResults to be a positive number.';
          }

          if (p[MAX_RESULTS_KEY] > 1000) {
            throw "Expected maxResults to be less than or equal to " + MAX_MAX_RESULTS + ".";
          }
        } else if (key === PAGE_TOKEN_KEY) {
          if (p[PAGE_TOKEN_KEY] && !isString(p[PAGE_TOKEN_KEY])) {
            throw 'Expected pageToken to be string.';
          }
        } else {
          throw 'Unknown option: ' + key;
        }
      }
    }

    var RequestInfo =
    /** @class */
    function () {
      function RequestInfo(url, method,
      /**
       * Returns the value with which to resolve the request's promise. Only called
       * if the request is successful. Throw from this function to reject the
       * returned Request's promise with the thrown error.
       * Note: The XhrIo passed to this function may be reused after this callback
       * returns. Do not keep a reference to it in any way.
       */
      handler, timeout) {
        this.url = url;
        this.method = method;
        this.handler = handler;
        this.timeout = timeout;
        this.urlParams = {};
        this.headers = {};
        this.body = null;
        this.errorHandler = null;
        /**
         * Called with the current number of bytes uploaded and total size (-1 if not
         * computable) of the request body (i.e. used to report upload progress).
         */

        this.progressCallback = null;
        this.successCodes = [200];
        this.additionalRetryCodes = [];
      }

      return RequestInfo;
    }();
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Throws the UNKNOWN FirebaseStorageError if cndn is false.
     */


    function handlerCheck(cndn) {
      if (!cndn) {
        throw unknown();
      }
    }

    function metadataHandler(authWrapper, mappings) {
      function handler(xhr, text) {
        var metadata = fromResourceString(authWrapper, text, mappings);
        handlerCheck(metadata !== null);
        return metadata;
      }

      return handler;
    }

    function listHandler(authWrapper, bucket) {
      function handler(xhr, text) {
        var listResult = fromResponseString(authWrapper, bucket, text);
        handlerCheck(listResult !== null);
        return listResult;
      }

      return handler;
    }

    function downloadUrlHandler(authWrapper, mappings) {
      function handler(xhr, text) {
        var metadata = fromResourceString(authWrapper, text, mappings);
        handlerCheck(metadata !== null);
        return downloadUrlFromResourceString(metadata, text);
      }

      return handler;
    }

    function sharedErrorHandler(location) {
      function errorHandler(xhr, err) {
        var newErr;

        if (xhr.getStatus() === 401) {
          newErr = unauthenticated();
        } else {
          if (xhr.getStatus() === 402) {
            newErr = quotaExceeded(location.bucket);
          } else {
            if (xhr.getStatus() === 403) {
              newErr = unauthorized(location.path);
            } else {
              newErr = err;
            }
          }
        }

        newErr.setServerResponseProp(err.serverResponseProp());
        return newErr;
      }

      return errorHandler;
    }

    function objectErrorHandler(location) {
      var shared = sharedErrorHandler(location);

      function errorHandler(xhr, err) {
        var newErr = shared(xhr, err);

        if (xhr.getStatus() === 404) {
          newErr = objectNotFound(location.path);
        }

        newErr.setServerResponseProp(err.serverResponseProp());
        return newErr;
      }

      return errorHandler;
    }

    function getMetadata(authWrapper, location, mappings) {
      var urlPart = location.fullServerUrl();
      var url = makeUrl(urlPart);
      var method = 'GET';
      var timeout = authWrapper.maxOperationRetryTime();
      var requestInfo = new RequestInfo(url, method, metadataHandler(authWrapper, mappings), timeout);
      requestInfo.errorHandler = objectErrorHandler(location);
      return requestInfo;
    }

    function list(authWrapper, location, delimiter, pageToken, maxResults) {
      var urlParams = {};

      if (location.isRoot) {
        urlParams['prefix'] = '';
      } else {
        urlParams['prefix'] = location.path + '/';
      }

      if (delimiter && delimiter.length > 0) {
        urlParams['delimiter'] = delimiter;
      }

      if (pageToken) {
        urlParams['pageToken'] = pageToken;
      }

      if (maxResults) {
        urlParams['maxResults'] = maxResults;
      }

      var urlPart = location.bucketOnlyServerUrl();
      var url = makeUrl(urlPart);
      var method = 'GET';
      var timeout = authWrapper.maxOperationRetryTime();
      var requestInfo = new RequestInfo(url, method, listHandler(authWrapper, location.bucket), timeout);
      requestInfo.urlParams = urlParams;
      requestInfo.errorHandler = sharedErrorHandler(location);
      return requestInfo;
    }

    function getDownloadUrl(authWrapper, location, mappings) {
      var urlPart = location.fullServerUrl();
      var url = makeUrl(urlPart);
      var method = 'GET';
      var timeout = authWrapper.maxOperationRetryTime();
      var requestInfo = new RequestInfo(url, method, downloadUrlHandler(authWrapper, mappings), timeout);
      requestInfo.errorHandler = objectErrorHandler(location);
      return requestInfo;
    }

    function updateMetadata(authWrapper, location, metadata, mappings) {
      var urlPart = location.fullServerUrl();
      var url = makeUrl(urlPart);
      var method = 'PATCH';
      var body = toResourceString(metadata, mappings);
      var headers = {
        'Content-Type': 'application/json; charset=utf-8'
      };
      var timeout = authWrapper.maxOperationRetryTime();
      var requestInfo = new RequestInfo(url, method, metadataHandler(authWrapper, mappings), timeout);
      requestInfo.headers = headers;
      requestInfo.body = body;
      requestInfo.errorHandler = objectErrorHandler(location);
      return requestInfo;
    }

    function deleteObject(authWrapper, location) {
      var urlPart = location.fullServerUrl();
      var url = makeUrl(urlPart);
      var method = 'DELETE';
      var timeout = authWrapper.maxOperationRetryTime();

      function handler(_xhr, _text) {}

      var requestInfo = new RequestInfo(url, method, handler, timeout);
      requestInfo.successCodes = [200, 204];
      requestInfo.errorHandler = objectErrorHandler(location);
      return requestInfo;
    }

    function determineContentType_(metadata, blob) {
      return metadata && metadata['contentType'] || blob && blob.type() || 'application/octet-stream';
    }

    function metadataForUpload_(location, blob, metadata) {
      var metadataClone = Object.assign({}, metadata);
      metadataClone['fullPath'] = location.path;
      metadataClone['size'] = blob.size();

      if (!metadataClone['contentType']) {
        metadataClone['contentType'] = determineContentType_(null, blob);
      }

      return metadataClone;
    }

    function multipartUpload(authWrapper, location, mappings, blob, metadata) {
      var urlPart = location.bucketOnlyServerUrl();
      var headers = {
        'X-Goog-Upload-Protocol': 'multipart'
      };

      function genBoundary() {
        var str = '';

        for (var i = 0; i < 2; i++) {
          str = str + Math.random().toString().slice(2);
        }

        return str;
      }

      var boundary = genBoundary();
      headers['Content-Type'] = 'multipart/related; boundary=' + boundary;
      var metadata_ = metadataForUpload_(location, blob, metadata);
      var metadataString = toResourceString(metadata_, mappings);
      var preBlobPart = '--' + boundary + '\r\n' + 'Content-Type: application/json; charset=utf-8\r\n\r\n' + metadataString + '\r\n--' + boundary + '\r\n' + 'Content-Type: ' + metadata_['contentType'] + '\r\n\r\n';
      var postBlobPart = '\r\n--' + boundary + '--';
      var body = FbsBlob.getBlob(preBlobPart, blob, postBlobPart);

      if (body === null) {
        throw cannotSliceBlob();
      }

      var urlParams = {
        name: metadata_['fullPath']
      };
      var url = makeUrl(urlPart);
      var method = 'POST';
      var timeout = authWrapper.maxUploadRetryTime();
      var requestInfo = new RequestInfo(url, method, metadataHandler(authWrapper, mappings), timeout);
      requestInfo.urlParams = urlParams;
      requestInfo.headers = headers;
      requestInfo.body = body.uploadData();
      requestInfo.errorHandler = sharedErrorHandler(location);
      return requestInfo;
    }
    /**
     * @param current The number of bytes that have been uploaded so far.
     * @param total The total number of bytes in the upload.
     * @param opt_finalized True if the server has finished the upload.
     * @param opt_metadata The upload metadata, should
     *     only be passed if opt_finalized is true.
     * @struct
     */


    var ResumableUploadStatus =
    /** @class */
    function () {
      function ResumableUploadStatus(current, total, finalized, metadata) {
        this.current = current;
        this.total = total;
        this.finalized = !!finalized;
        this.metadata = metadata || null;
      }

      return ResumableUploadStatus;
    }();

    function checkResumeHeader_(xhr, allowed) {
      var status = null;

      try {
        status = xhr.getResponseHeader('X-Goog-Upload-Status');
      } catch (e) {
        handlerCheck(false);
      }

      var allowedStatus = allowed || ['active'];
      handlerCheck(!!status && allowedStatus.indexOf(status) !== -1);
      return status;
    }

    function createResumableUpload(authWrapper, location, mappings, blob, metadata) {
      var urlPart = location.bucketOnlyServerUrl();
      var metadataForUpload = metadataForUpload_(location, blob, metadata);
      var urlParams = {
        name: metadataForUpload['fullPath']
      };
      var url = makeUrl(urlPart);
      var method = 'POST';
      var headers = {
        'X-Goog-Upload-Protocol': 'resumable',
        'X-Goog-Upload-Command': 'start',
        'X-Goog-Upload-Header-Content-Length': blob.size(),
        'X-Goog-Upload-Header-Content-Type': metadataForUpload['contentType'],
        'Content-Type': 'application/json; charset=utf-8'
      };
      var body = toResourceString(metadataForUpload, mappings);
      var timeout = authWrapper.maxUploadRetryTime();

      function handler(xhr) {
        checkResumeHeader_(xhr);
        var url;

        try {
          url = xhr.getResponseHeader('X-Goog-Upload-URL');
        } catch (e) {
          handlerCheck(false);
        }

        handlerCheck(isString(url));
        return url;
      }

      var requestInfo = new RequestInfo(url, method, handler, timeout);
      requestInfo.urlParams = urlParams;
      requestInfo.headers = headers;
      requestInfo.body = body;
      requestInfo.errorHandler = sharedErrorHandler(location);
      return requestInfo;
    }
    /**
     * @param url From a call to fbs.requests.createResumableUpload.
     */


    function getResumableUploadStatus(authWrapper, location, url, blob) {
      var headers = {
        'X-Goog-Upload-Command': 'query'
      };

      function handler(xhr) {
        var status = checkResumeHeader_(xhr, ['active', 'final']);
        var sizeString = null;

        try {
          sizeString = xhr.getResponseHeader('X-Goog-Upload-Size-Received');
        } catch (e) {
          handlerCheck(false);
        }

        if (!sizeString) {
          // null or empty string
          handlerCheck(false);
        }

        var size = Number(sizeString);
        handlerCheck(!isNaN(size));
        return new ResumableUploadStatus(size, blob.size(), status === 'final');
      }

      var method = 'POST';
      var timeout = authWrapper.maxUploadRetryTime();
      var requestInfo = new RequestInfo(url, method, handler, timeout);
      requestInfo.headers = headers;
      requestInfo.errorHandler = sharedErrorHandler(location);
      return requestInfo;
    }
    /**
     * Any uploads via the resumable upload API must transfer a number of bytes
     * that is a multiple of this number.
     */


    var resumableUploadChunkSize = 256 * 1024;
    /**
     * @param url From a call to fbs.requests.createResumableUpload.
     * @param chunkSize Number of bytes to upload.
     * @param status The previous status.
     *     If not passed or null, we start from the beginning.
     * @throws fbs.Error If the upload is already complete, the passed in status
     *     has a final size inconsistent with the blob, or the blob cannot be sliced
     *     for upload.
     */

    function continueResumableUpload(location, authWrapper, url, blob, chunkSize, mappings, status, progressCallback) {
      // TODO(andysoto): standardize on internal asserts
      // assert(!(opt_status && opt_status.finalized));
      var status_ = new ResumableUploadStatus(0, 0);

      if (status) {
        status_.current = status.current;
        status_.total = status.total;
      } else {
        status_.current = 0;
        status_.total = blob.size();
      }

      if (blob.size() !== status_.total) {
        throw serverFileWrongSize();
      }

      var bytesLeft = status_.total - status_.current;
      var bytesToUpload = bytesLeft;

      if (chunkSize > 0) {
        bytesToUpload = Math.min(bytesToUpload, chunkSize);
      }

      var startByte = status_.current;
      var endByte = startByte + bytesToUpload;
      var uploadCommand = bytesToUpload === bytesLeft ? 'upload, finalize' : 'upload';
      var headers = {
        'X-Goog-Upload-Command': uploadCommand,
        'X-Goog-Upload-Offset': status_.current
      };
      var body = blob.slice(startByte, endByte);

      if (body === null) {
        throw cannotSliceBlob();
      }

      function handler(xhr, text) {
        // TODO(andysoto): Verify the MD5 of each uploaded range:
        // the 'x-range-md5' header comes back with status code 308 responses.
        // We'll only be able to bail out though, because you can't re-upload a
        // range that you previously uploaded.
        var uploadStatus = checkResumeHeader_(xhr, ['active', 'final']);
        var newCurrent = status_.current + bytesToUpload;
        var size = blob.size();
        var metadata;

        if (uploadStatus === 'final') {
          metadata = metadataHandler(authWrapper, mappings)(xhr, text);
        } else {
          metadata = null;
        }

        return new ResumableUploadStatus(newCurrent, size, uploadStatus === 'final', metadata);
      }

      var method = 'POST';
      var timeout = authWrapper.maxUploadRetryTime();
      var requestInfo = new RequestInfo(url, method, handler, timeout);
      requestInfo.headers = headers;
      requestInfo.body = body.uploadData();
      requestInfo.progressCallback = progressCallback || null;
      requestInfo.errorHandler = sharedErrorHandler(location);
      return requestInfo;
    }
    /**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @struct
     */


    var Observer =
    /** @class */
    function () {
      function Observer(nextOrObserver, error, complete) {
        var asFunctions = isFunction(nextOrObserver) || isDef(error) || isDef(complete);

        if (asFunctions) {
          this.next = nextOrObserver;
          this.error = error || null;
          this.complete = complete || null;
        } else {
          var observer = nextOrObserver;
          this.next = observer.next || null;
          this.error = observer.error || null;
          this.complete = observer.complete || null;
        }
      }

      return Observer;
    }();

    var UploadTaskSnapshot =
    /** @class */
    function () {
      function UploadTaskSnapshot(bytesTransferred, totalBytes, state, metadata, task, ref) {
        this.bytesTransferred = bytesTransferred;
        this.totalBytes = totalBytes;
        this.state = state;
        this.metadata = metadata;
        this.task = task;
        this.ref = ref;
      }

      return UploadTaskSnapshot;
    }();
    /**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @param name Name of the function.
     * @param specs Argument specs.
     * @param passed The actual arguments passed to the function.
     * @throws {fbs.Error} If the arguments are invalid.
     */


    function validate(name, specs, passed) {
      var minArgs = specs.length;
      var maxArgs = specs.length;

      for (var i = 0; i < specs.length; i++) {
        if (specs[i].optional) {
          minArgs = i;
          break;
        }
      }

      var validLength = minArgs <= passed.length && passed.length <= maxArgs;

      if (!validLength) {
        throw invalidArgumentCount(minArgs, maxArgs, name, passed.length);
      }

      for (var i = 0; i < passed.length; i++) {
        try {
          specs[i].validator(passed[i]);
        } catch (e) {
          if (e instanceof Error) {
            throw invalidArgument(i, name, e.message);
          } else {
            throw invalidArgument(i, name, e);
          }
        }
      }
    }
    /**
     * @struct
     */


    var ArgSpec =
    /** @class */
    function () {
      function ArgSpec(validator, optional) {
        var self = this;

        this.validator = function (p) {
          if (self.optional && !isJustDef(p)) {
            return;
          }

          validator(p);
        };

        this.optional = !!optional;
      }

      return ArgSpec;
    }();

    function and_(v1, v2) {
      return function (p) {
        v1(p);
        v2(p);
      };
    }

    function stringSpec(validator, optional) {
      function stringValidator(p) {
        if (!isString(p)) {
          throw 'Expected string.';
        }
      }

      var chainedValidator;

      if (validator) {
        chainedValidator = and_(stringValidator, validator);
      } else {
        chainedValidator = stringValidator;
      }

      return new ArgSpec(chainedValidator, optional);
    }

    function uploadDataSpec() {
      function validator(p) {
        var valid = p instanceof Uint8Array || p instanceof ArrayBuffer || isNativeBlobDefined() && p instanceof Blob;

        if (!valid) {
          throw 'Expected Blob or File.';
        }
      }

      return new ArgSpec(validator);
    }

    function metadataSpec(optional) {
      return new ArgSpec(metadataValidator, optional);
    }

    function listOptionSpec(optional) {
      return new ArgSpec(listOptionsValidator, optional);
    }

    function nonNegativeNumberSpec() {
      function validator(p) {
        var valid = isNumber(p) && p >= 0;

        if (!valid) {
          throw 'Expected a number 0 or greater.';
        }
      }

      return new ArgSpec(validator);
    }

    function looseObjectSpec(validator, optional) {
      function isLooseObjectValidator(p) {
        var isLooseObject = p === null || isDef(p) && p instanceof Object;

        if (!isLooseObject) {
          throw 'Expected an Object.';
        }

        if (validator !== undefined && validator !== null) {
          validator(p);
        }
      }

      return new ArgSpec(isLooseObjectValidator, optional);
    }

    function nullFunctionSpec(optional) {
      function validator(p) {
        var valid = p === null || isFunction(p);

        if (!valid) {
          throw 'Expected a Function.';
        }
      }

      return new ArgSpec(validator, optional);
    }
    /**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Returns a function that invokes f with its arguments asynchronously as a
     * microtask, i.e. as soon as possible after the current script returns back
     * into browser code.
     */


    function async(f) {
      return function () {
        var argsToForward = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          argsToForward[_i] = arguments[_i];
        } // eslint-disable-next-line @typescript-eslint/no-floating-promises


        Promise.resolve().then(function () {
          return f.apply(void 0, argsToForward);
        });
      };
    }
    /**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Represents a blob being uploaded. Can be used to pause/resume/cancel the
     * upload and manage callbacks for various events.
     */


    var UploadTask =
    /** @class */
    function () {
      /**
       * @param ref The firebaseStorage.Reference object this task came
       *     from, untyped to avoid cyclic dependencies.
       * @param blob The blob to upload.
       */
      function UploadTask(ref, authWrapper, location, mappings, blob, metadata) {
        var _this = this;

        if (metadata === void 0) {
          metadata = null;
        }

        this.transferred_ = 0;
        this.needToFetchStatus_ = false;
        this.needToFetchMetadata_ = false;
        this.observers_ = [];
        this.error_ = null;
        this.uploadUrl_ = null;
        this.request_ = null;
        this.chunkMultiplier_ = 1;
        this.resolve_ = null;
        this.reject_ = null;
        this.ref_ = ref;
        this.authWrapper_ = authWrapper;
        this.location_ = location;
        this.blob_ = blob;
        this.metadata_ = metadata;
        this.mappings_ = mappings;
        this.resumable_ = this.shouldDoResumable_(this.blob_);
        this.state_ = InternalTaskState.RUNNING;

        this.errorHandler_ = function (error) {
          _this.request_ = null;
          _this.chunkMultiplier_ = 1;

          if (error.codeEquals(Code.CANCELED)) {
            _this.needToFetchStatus_ = true;

            _this.completeTransitions_();
          } else {
            _this.error_ = error;

            _this.transition_(InternalTaskState.ERROR);
          }
        };

        this.metadataErrorHandler_ = function (error) {
          _this.request_ = null;

          if (error.codeEquals(Code.CANCELED)) {
            _this.completeTransitions_();
          } else {
            _this.error_ = error;

            _this.transition_(InternalTaskState.ERROR);
          }
        };

        this.promise_ = new Promise(function (resolve, reject) {
          _this.resolve_ = resolve;
          _this.reject_ = reject;

          _this.start_();
        }); // Prevent uncaught rejections on the internal promise from bubbling out
        // to the top level with a dummy handler.

        this.promise_.then(null, function () {});
      }

      UploadTask.prototype.makeProgressCallback_ = function () {
        var _this = this;

        var sizeBefore = this.transferred_;
        return function (loaded) {
          return _this.updateProgress_(sizeBefore + loaded);
        };
      };

      UploadTask.prototype.shouldDoResumable_ = function (blob) {
        return blob.size() > 256 * 1024;
      };

      UploadTask.prototype.start_ = function () {
        if (this.state_ !== InternalTaskState.RUNNING) {
          // This can happen if someone pauses us in a resume callback, for example.
          return;
        }

        if (this.request_ !== null) {
          return;
        }

        if (this.resumable_) {
          if (this.uploadUrl_ === null) {
            this.createResumable_();
          } else {
            if (this.needToFetchStatus_) {
              this.fetchStatus_();
            } else {
              if (this.needToFetchMetadata_) {
                // Happens if we miss the metadata on upload completion.
                this.fetchMetadata_();
              } else {
                this.continueUpload_();
              }
            }
          }
        } else {
          this.oneShotUpload_();
        }
      };

      UploadTask.prototype.resolveToken_ = function (callback) {
        var _this = this; // eslint-disable-next-line @typescript-eslint/no-floating-promises


        this.authWrapper_.getAuthToken().then(function (authToken) {
          switch (_this.state_) {
            case InternalTaskState.RUNNING:
              callback(authToken);
              break;

            case InternalTaskState.CANCELING:
              _this.transition_(InternalTaskState.CANCELED);

              break;

            case InternalTaskState.PAUSING:
              _this.transition_(InternalTaskState.PAUSED);

              break;
          }
        });
      }; // TODO(andysoto): assert false


      UploadTask.prototype.createResumable_ = function () {
        var _this = this;

        this.resolveToken_(function (authToken) {
          var requestInfo = createResumableUpload(_this.authWrapper_, _this.location_, _this.mappings_, _this.blob_, _this.metadata_);

          var createRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);

          _this.request_ = createRequest;
          createRequest.getPromise().then(function (url) {
            _this.request_ = null;
            _this.uploadUrl_ = url;
            _this.needToFetchStatus_ = false;

            _this.completeTransitions_();
          }, _this.errorHandler_);
        });
      };

      UploadTask.prototype.fetchStatus_ = function () {
        var _this = this; // TODO(andysoto): assert(this.uploadUrl_ !== null);


        var url = this.uploadUrl_;
        this.resolveToken_(function (authToken) {
          var requestInfo = getResumableUploadStatus(_this.authWrapper_, _this.location_, url, _this.blob_);

          var statusRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);

          _this.request_ = statusRequest;
          statusRequest.getPromise().then(function (status) {
            status = status;
            _this.request_ = null;

            _this.updateProgress_(status.current);

            _this.needToFetchStatus_ = false;

            if (status.finalized) {
              _this.needToFetchMetadata_ = true;
            }

            _this.completeTransitions_();
          }, _this.errorHandler_);
        });
      };

      UploadTask.prototype.continueUpload_ = function () {
        var _this = this;

        var chunkSize = resumableUploadChunkSize * this.chunkMultiplier_;
        var status = new ResumableUploadStatus(this.transferred_, this.blob_.size()); // TODO(andysoto): assert(this.uploadUrl_ !== null);

        var url = this.uploadUrl_;
        this.resolveToken_(function (authToken) {
          var requestInfo;

          try {
            requestInfo = continueResumableUpload(_this.location_, _this.authWrapper_, url, _this.blob_, chunkSize, _this.mappings_, status, _this.makeProgressCallback_());
          } catch (e) {
            _this.error_ = e;

            _this.transition_(InternalTaskState.ERROR);

            return;
          }

          var uploadRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);

          _this.request_ = uploadRequest;
          uploadRequest.getPromise().then(function (newStatus) {
            _this.increaseMultiplier_();

            _this.request_ = null;

            _this.updateProgress_(newStatus.current);

            if (newStatus.finalized) {
              _this.metadata_ = newStatus.metadata;

              _this.transition_(InternalTaskState.SUCCESS);
            } else {
              _this.completeTransitions_();
            }
          }, _this.errorHandler_);
        });
      };

      UploadTask.prototype.increaseMultiplier_ = function () {
        var currentSize = resumableUploadChunkSize * this.chunkMultiplier_; // Max chunk size is 32M.

        if (currentSize < 32 * 1024 * 1024) {
          this.chunkMultiplier_ *= 2;
        }
      };

      UploadTask.prototype.fetchMetadata_ = function () {
        var _this = this;

        this.resolveToken_(function (authToken) {
          var requestInfo = getMetadata(_this.authWrapper_, _this.location_, _this.mappings_);

          var metadataRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);

          _this.request_ = metadataRequest;
          metadataRequest.getPromise().then(function (metadata) {
            _this.request_ = null;
            _this.metadata_ = metadata;

            _this.transition_(InternalTaskState.SUCCESS);
          }, _this.metadataErrorHandler_);
        });
      };

      UploadTask.prototype.oneShotUpload_ = function () {
        var _this = this;

        this.resolveToken_(function (authToken) {
          var requestInfo = multipartUpload(_this.authWrapper_, _this.location_, _this.mappings_, _this.blob_, _this.metadata_);

          var multipartRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);

          _this.request_ = multipartRequest;
          multipartRequest.getPromise().then(function (metadata) {
            _this.request_ = null;
            _this.metadata_ = metadata;

            _this.updateProgress_(_this.blob_.size());

            _this.transition_(InternalTaskState.SUCCESS);
          }, _this.errorHandler_);
        });
      };

      UploadTask.prototype.updateProgress_ = function (transferred) {
        var old = this.transferred_;
        this.transferred_ = transferred; // A progress update can make the "transferred" value smaller (e.g. a
        // partial upload not completed by server, after which the "transferred"
        // value may reset to the value at the beginning of the request).

        if (this.transferred_ !== old) {
          this.notifyObservers_();
        }
      };

      UploadTask.prototype.transition_ = function (state) {
        if (this.state_ === state) {
          return;
        }

        switch (state) {
          case InternalTaskState.CANCELING:
            // TODO(andysoto):
            // assert(this.state_ === InternalTaskState.RUNNING ||
            //        this.state_ === InternalTaskState.PAUSING);
            this.state_ = state;

            if (this.request_ !== null) {
              this.request_.cancel();
            }

            break;

          case InternalTaskState.PAUSING:
            // TODO(andysoto):
            // assert(this.state_ === InternalTaskState.RUNNING);
            this.state_ = state;

            if (this.request_ !== null) {
              this.request_.cancel();
            }

            break;

          case InternalTaskState.RUNNING:
            // TODO(andysoto):
            // assert(this.state_ === InternalTaskState.PAUSED ||
            //        this.state_ === InternalTaskState.PAUSING);
            var wasPaused = this.state_ === InternalTaskState.PAUSED;
            this.state_ = state;

            if (wasPaused) {
              this.notifyObservers_();
              this.start_();
            }

            break;

          case InternalTaskState.PAUSED:
            // TODO(andysoto):
            // assert(this.state_ === InternalTaskState.PAUSING);
            this.state_ = state;
            this.notifyObservers_();
            break;

          case InternalTaskState.CANCELED:
            // TODO(andysoto):
            // assert(this.state_ === InternalTaskState.PAUSED ||
            //        this.state_ === InternalTaskState.CANCELING);
            this.error_ = canceled();
            this.state_ = state;
            this.notifyObservers_();
            break;

          case InternalTaskState.ERROR:
            // TODO(andysoto):
            // assert(this.state_ === InternalTaskState.RUNNING ||
            //        this.state_ === InternalTaskState.PAUSING ||
            //        this.state_ === InternalTaskState.CANCELING);
            this.state_ = state;
            this.notifyObservers_();
            break;

          case InternalTaskState.SUCCESS:
            // TODO(andysoto):
            // assert(this.state_ === InternalTaskState.RUNNING ||
            //        this.state_ === InternalTaskState.PAUSING ||
            //        this.state_ === InternalTaskState.CANCELING);
            this.state_ = state;
            this.notifyObservers_();
            break;
        }
      };

      UploadTask.prototype.completeTransitions_ = function () {
        switch (this.state_) {
          case InternalTaskState.PAUSING:
            this.transition_(InternalTaskState.PAUSED);
            break;

          case InternalTaskState.CANCELING:
            this.transition_(InternalTaskState.CANCELED);
            break;

          case InternalTaskState.RUNNING:
            this.start_();
            break;
        }
      };

      Object.defineProperty(UploadTask.prototype, "snapshot", {
        get: function get() {
          var externalState = taskStateFromInternalTaskState(this.state_);
          return new UploadTaskSnapshot(this.transferred_, this.blob_.size(), externalState, this.metadata_, this, this.ref_);
        },
        enumerable: true,
        configurable: true
      });
      /**
       * Adds a callback for an event.
       * @param type The type of event to listen for.
       */

      UploadTask.prototype.on = function (type, nextOrObserver, error, completed) {
        function typeValidator() {
          if (type !== TaskEvent.STATE_CHANGED) {
            throw "Expected one of the event types: [" + TaskEvent.STATE_CHANGED + "].";
          }
        }

        var nextOrObserverMessage = 'Expected a function or an Object with one of ' + '`next`, `error`, `complete` properties.';
        var nextValidator = nullFunctionSpec(true).validator;
        var observerValidator = looseObjectSpec(null, true).validator; // eslint-disable-next-line @typescript-eslint/no-explicit-any

        function nextOrObserverValidator(p) {
          try {
            nextValidator(p);
            return;
          } catch (e) {}

          try {
            observerValidator(p);
            var anyDefined = isJustDef(p['next']) || isJustDef(p['error']) || isJustDef(p['complete']);

            if (!anyDefined) {
              throw '';
            }

            return;
          } catch (e) {
            throw nextOrObserverMessage;
          }
        }

        var specs = [stringSpec(typeValidator), looseObjectSpec(nextOrObserverValidator, true), nullFunctionSpec(true), nullFunctionSpec(true)];
        validate('on', specs, arguments);
        var self = this;

        function makeBinder(specs) {
          function binder(nextOrObserver, error, complete) {
            if (specs !== null) {
              validate('on', specs, arguments);
            }

            var observer = new Observer(nextOrObserver, error, completed);
            self.addObserver_(observer);
            return function () {
              self.removeObserver_(observer);
            };
          }

          return binder;
        }

        function binderNextOrObserverValidator(p) {
          if (p === null) {
            throw nextOrObserverMessage;
          }

          nextOrObserverValidator(p);
        }

        var binderSpecs = [looseObjectSpec(binderNextOrObserverValidator), nullFunctionSpec(true), nullFunctionSpec(true)];
        var typeOnly = !(isJustDef(nextOrObserver) || isJustDef(error) || isJustDef(completed));

        if (typeOnly) {
          return makeBinder(binderSpecs);
        } else {
          return makeBinder(null)(nextOrObserver, error, completed);
        }
      };
      /**
       * This object behaves like a Promise, and resolves with its snapshot data
       * when the upload completes.
       * @param onFulfilled The fulfillment callback. Promise chaining works as normal.
       * @param onRejected The rejection callback.
       */


      UploadTask.prototype.then = function (onFulfilled, onRejected) {
        // These casts are needed so that TypeScript can infer the types of the
        // resulting Promise.
        return this.promise_.then(onFulfilled, onRejected);
      };
      /**
       * Equivalent to calling `then(null, onRejected)`.
       */


      UploadTask.prototype["catch"] = function (onRejected) {
        return this.then(null, onRejected);
      };
      /**
       * Adds the given observer.
       */


      UploadTask.prototype.addObserver_ = function (observer) {
        this.observers_.push(observer);
        this.notifyObserver_(observer);
      };
      /**
       * Removes the given observer.
       */


      UploadTask.prototype.removeObserver_ = function (observer) {
        var i = this.observers_.indexOf(observer);

        if (i !== -1) {
          this.observers_.splice(i, 1);
        }
      };

      UploadTask.prototype.notifyObservers_ = function () {
        var _this = this;

        this.finishPromise_();
        var observers = this.observers_.slice();
        observers.forEach(function (observer) {
          _this.notifyObserver_(observer);
        });
      };

      UploadTask.prototype.finishPromise_ = function () {
        if (this.resolve_ !== null) {
          var triggered = true;

          switch (taskStateFromInternalTaskState(this.state_)) {
            case TaskState.SUCCESS:
              async(this.resolve_.bind(null, this.snapshot))();
              break;

            case TaskState.CANCELED:
            case TaskState.ERROR:
              var toCall = this.reject_;
              async(toCall.bind(null, this.error_))();
              break;

            default:
              triggered = false;
              break;
          }

          if (triggered) {
            this.resolve_ = null;
            this.reject_ = null;
          }
        }
      };

      UploadTask.prototype.notifyObserver_ = function (observer) {
        var externalState = taskStateFromInternalTaskState(this.state_);

        switch (externalState) {
          case TaskState.RUNNING:
          case TaskState.PAUSED:
            if (observer.next) {
              async(observer.next.bind(observer, this.snapshot))();
            }

            break;

          case TaskState.SUCCESS:
            if (observer.complete) {
              async(observer.complete.bind(observer))();
            }

            break;

          case TaskState.CANCELED:
          case TaskState.ERROR:
            if (observer.error) {
              async(observer.error.bind(observer, this.error_))();
            }

            break;

          default:
            // TODO(andysoto): assert(false);
            if (observer.error) {
              async(observer.error.bind(observer, this.error_))();
            }

        }
      };
      /**
       * Resumes a paused task. Has no effect on a currently running or failed task.
       * @return True if the operation took effect, false if ignored.
       */


      UploadTask.prototype.resume = function () {
        validate('resume', [], arguments);
        var valid = this.state_ === InternalTaskState.PAUSED || this.state_ === InternalTaskState.PAUSING;

        if (valid) {
          this.transition_(InternalTaskState.RUNNING);
        }

        return valid;
      };
      /**
       * Pauses a currently running task. Has no effect on a paused or failed task.
       * @return True if the operation took effect, false if ignored.
       */


      UploadTask.prototype.pause = function () {
        validate('pause', [], arguments);
        var valid = this.state_ === InternalTaskState.RUNNING;

        if (valid) {
          this.transition_(InternalTaskState.PAUSING);
        }

        return valid;
      };
      /**
       * Cancels a currently running or paused task. Has no effect on a complete or
       * failed task.
       * @return True if the operation took effect, false if ignored.
       */


      UploadTask.prototype.cancel = function () {
        validate('cancel', [], arguments);
        var valid = this.state_ === InternalTaskState.RUNNING || this.state_ === InternalTaskState.PAUSING;

        if (valid) {
          this.transition_(InternalTaskState.CANCELING);
        }

        return valid;
      };

      return UploadTask;
    }();
    /**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Provides methods to interact with a bucket in the Firebase Storage service.
     * @param location An fbs.location, or the URL at
     *     which to base this object, in one of the following forms:
     *         gs://<bucket>/<object-path>
     *         http[s]://firebasestorage.googleapis.com/
     *                     <api-version>/b/<bucket>/o/<object-path>
     *     Any query or fragment strings will be ignored in the http[s]
     *     format. If no value is passed, the storage object will use a URL based on
     *     the project ID of the base firebase.App instance.
     */


    var Reference =
    /** @class */
    function () {
      function Reference(authWrapper, location) {
        this.authWrapper = authWrapper;

        if (location instanceof Location) {
          this.location = location;
        } else {
          this.location = Location.makeFromUrl(location);
        }
      }
      /**
       * @return The URL for the bucket and path this object references,
       *     in the form gs://<bucket>/<object-path>
       * @override
       */


      Reference.prototype.toString = function () {
        validate('toString', [], arguments);
        return 'gs://' + this.location.bucket + '/' + this.location.path;
      };

      Reference.prototype.newRef = function (authWrapper, location) {
        return new Reference(authWrapper, location);
      };

      Reference.prototype.mappings = function () {
        return getMappings();
      };
      /**
       * @return A reference to the object obtained by
       *     appending childPath, removing any duplicate, beginning, or trailing
       *     slashes.
       */


      Reference.prototype.child = function (childPath) {
        validate('child', [stringSpec()], arguments);
        var newPath = child(this.location.path, childPath);
        var location = new Location(this.location.bucket, newPath);
        return this.newRef(this.authWrapper, location);
      };

      Object.defineProperty(Reference.prototype, "parent", {
        /**
         * @return A reference to the parent of the
         *     current object, or null if the current object is the root.
         */
        get: function get() {
          var newPath = parent(this.location.path);

          if (newPath === null) {
            return null;
          }

          var location = new Location(this.location.bucket, newPath);
          return this.newRef(this.authWrapper, location);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Reference.prototype, "root", {
        /**
         * @return An reference to the root of this
         *     object's bucket.
         */
        get: function get() {
          var location = new Location(this.location.bucket, '');
          return this.newRef(this.authWrapper, location);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Reference.prototype, "bucket", {
        get: function get() {
          return this.location.bucket;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Reference.prototype, "fullPath", {
        get: function get() {
          return this.location.path;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Reference.prototype, "name", {
        get: function get() {
          return lastComponent(this.location.path);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Reference.prototype, "storage", {
        get: function get() {
          return this.authWrapper.service();
        },
        enumerable: true,
        configurable: true
      });
      /**
       * Uploads a blob to this object's location.
       * @param data The blob to upload.
       * @return An UploadTask that lets you control and
       *     observe the upload.
       */

      Reference.prototype.put = function (data, metadata) {
        if (metadata === void 0) {
          metadata = null;
        }

        validate('put', [uploadDataSpec(), metadataSpec(true)], arguments);
        this.throwIfRoot_('put');
        return new UploadTask(this, this.authWrapper, this.location, this.mappings(), new FbsBlob(data), metadata);
      };
      /**
       * Uploads a string to this object's location.
       * @param value The string to upload.
       * @param format The format of the string to upload.
       * @return An UploadTask that lets you control and
       *     observe the upload.
       */


      Reference.prototype.putString = function (value, format, metadata) {
        if (format === void 0) {
          format = StringFormat.RAW;
        }

        validate('putString', [stringSpec(), stringSpec(formatValidator, true), metadataSpec(true)], arguments);
        this.throwIfRoot_('putString');
        var data = dataFromString(format, value);
        var metadataClone = Object.assign({}, metadata);

        if (!isDef(metadataClone['contentType']) && isDef(data.contentType)) {
          metadataClone['contentType'] = data.contentType;
        }

        return new UploadTask(this, this.authWrapper, this.location, this.mappings(), new FbsBlob(data.data, true), metadataClone);
      };
      /**
       * Deletes the object at this location.
       * @return A promise that resolves if the deletion succeeds.
       */


      Reference.prototype["delete"] = function () {
        var _this = this;

        validate('delete', [], arguments);
        this.throwIfRoot_('delete');
        return this.authWrapper.getAuthToken().then(function (authToken) {
          var requestInfo = deleteObject(_this.authWrapper, _this.location);
          return _this.authWrapper.makeRequest(requestInfo, authToken).getPromise();
        });
      };
      /**
       * List all items (files) and prefixes (folders) under this storage reference.
       *
       * This is a helper method for calling list() repeatedly until there are
       * no more results. The default pagination size is 1000.
       *
       * Note: The results may not be consistent if objects are changed while this
       * operation is running.
       *
       * Warning: listAll may potentially consume too many resources if there are
       * too many results.
       *
       * @return A Promise that resolves with all the items and prefixes under
       *      the current storage reference. `prefixes` contains references to
       *      sub-directories and `items` contains references to objects in this
       *      folder. `nextPageToken` is never returned.
       */


      Reference.prototype.listAll = function () {
        validate('listAll', [], arguments);
        var accumulator = {
          prefixes: [],
          items: []
        };
        return this.listAllHelper(accumulator).then(function () {
          return accumulator;
        });
      };

      Reference.prototype.listAllHelper = function (accumulator, pageToken) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
          var opt, nextPage;

          var _a, _b;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_c) {
            switch (_c.label) {
              case 0:
                opt = {
                  // maxResults is 1000 by default.
                  pageToken: pageToken
                };
                return [4
                /*yield*/
                , this.list(opt)];

              case 1:
                nextPage = _c.sent();

                (_a = accumulator.prefixes).push.apply(_a, nextPage.prefixes);

                (_b = accumulator.items).push.apply(_b, nextPage.items);

                if (!(nextPage.nextPageToken != null)) return [3
                /*break*/
                , 3];
                return [4
                /*yield*/
                , this.listAllHelper(accumulator, nextPage.nextPageToken)];

              case 2:
                _c.sent();

                _c.label = 3;

              case 3:
                return [2
                /*return*/
                ];
            }
          });
        });
      };
      /**
       * List items (files) and prefixes (folders) under this storage reference.
       *
       * List API is only available for Firebase Rules Version 2.
       *
       * GCS is a key-blob store. Firebase Storage imposes the semantic of '/'
       * delimited folder structure.
       * Refer to GCS's List API if you want to learn more.
       *
       * To adhere to Firebase Rules's Semantics, Firebase Storage does not
       * support objects whose paths end with "/" or contain two consecutive
       * "/"s. Firebase Storage List API will filter these unsupported objects.
       * list() may fail if there are too many unsupported objects in the bucket.
       *
       * @param options See ListOptions for details.
       * @return A Promise that resolves with the items and prefixes.
       *      `prefixes` contains references to sub-folders and `items`
       *      contains references to objects in this folder. `nextPageToken`
       *      can be used to get the rest of the results.
       */


      Reference.prototype.list = function (options) {
        validate('list', [listOptionSpec(true)], arguments);
        var self = this;
        return this.authWrapper.getAuthToken().then(function (authToken) {
          var op = options || {};
          var requestInfo = list(self.authWrapper, self.location,
          /*delimiter= */
          '/', op.pageToken, op.maxResults);
          return self.authWrapper.makeRequest(requestInfo, authToken).getPromise();
        });
      };
      /**
       *     A promise that resolves with the metadata for this object. If this
       *     object doesn't exist or metadata cannot be retreived, the promise is
       *     rejected.
       */


      Reference.prototype.getMetadata = function () {
        var _this = this;

        validate('getMetadata', [], arguments);
        this.throwIfRoot_('getMetadata');
        return this.authWrapper.getAuthToken().then(function (authToken) {
          var requestInfo = getMetadata(_this.authWrapper, _this.location, _this.mappings());
          return _this.authWrapper.makeRequest(requestInfo, authToken).getPromise();
        });
      };
      /**
       * Updates the metadata for this object.
       * @param metadata The new metadata for the object.
       *     Only values that have been explicitly set will be changed. Explicitly
       *     setting a value to null will remove the metadata.
       * @return A promise that resolves
       *     with the new metadata for this object.
       *     @see firebaseStorage.Reference.prototype.getMetadata
       */


      Reference.prototype.updateMetadata = function (metadata) {
        var _this = this;

        validate('updateMetadata', [metadataSpec()], arguments);
        this.throwIfRoot_('updateMetadata');
        return this.authWrapper.getAuthToken().then(function (authToken) {
          var requestInfo = updateMetadata(_this.authWrapper, _this.location, metadata, _this.mappings());
          return _this.authWrapper.makeRequest(requestInfo, authToken).getPromise();
        });
      };
      /**
       * @return A promise that resolves with the download
       *     URL for this object.
       */


      Reference.prototype.getDownloadURL = function () {
        var _this = this;

        validate('getDownloadURL', [], arguments);
        this.throwIfRoot_('getDownloadURL');
        return this.authWrapper.getAuthToken().then(function (authToken) {
          var requestInfo = getDownloadUrl(_this.authWrapper, _this.location, _this.mappings());
          return _this.authWrapper.makeRequest(requestInfo, authToken).getPromise().then(function (url) {
            if (url === null) {
              throw noDownloadURL();
            }

            return url;
          });
        });
      };

      Reference.prototype.throwIfRoot_ = function (name) {
        if (this.location.path === '') {
          throw invalidRootOperation(name);
        }
      };

      return Reference;
    }();
    /**
     * A request whose promise always fails.
     * @struct
     * @template T
     */


    var FailRequest =
    /** @class */
    function () {
      function FailRequest(error) {
        this.promise_ = Promise.reject(error);
      }
      /** @inheritDoc */


      FailRequest.prototype.getPromise = function () {
        return this.promise_;
      };
      /** @inheritDoc */


      FailRequest.prototype.cancel = function (_appDelete) {};

      return FailRequest;
    }();

    var RequestMap =
    /** @class */
    function () {
      function RequestMap() {
        this.map = new Map();
        this.id = MIN_SAFE_INTEGER;
      }
      /**
       * Registers the given request with this map.
       * The request is unregistered when it completes.
       *
       * @param request The request to register.
       */


      RequestMap.prototype.addRequest = function (request) {
        var _this = this;

        var id = this.id;
        this.id++;
        this.map.set(id, request);
        request.getPromise().then(function () {
          return _this.map["delete"](id);
        }, function () {
          return _this.map["delete"](id);
        });
      };
      /**
       * Cancels all registered requests.
       */


      RequestMap.prototype.clear = function () {
        this.map.forEach(function (v) {
          v && v.cancel(true);
        });
        this.map.clear();
      };

      return RequestMap;
    }();
    /**
     * @param app If null, getAuthToken always resolves with null.
     * @param service The storage service associated with this auth wrapper.
     *     Untyped to avoid circular type dependencies.
     * @struct
     */


    var AuthWrapper =
    /** @class */
    function () {
      function AuthWrapper(app, authProvider, maker, requestMaker, service, pool) {
        var _a;

        this.bucket_ = null;
        this.appId_ = null;
        this.deleted_ = false;
        this.app_ = app;

        if (this.app_ !== null) {
          var options = this.app_.options;

          if (isDef(options)) {
            this.bucket_ = AuthWrapper.extractBucket_(options);
            this.appId_ = (_a = options.appId) !== null && _a !== void 0 ? _a : null;
          }
        }

        this.authProvider_ = authProvider;
        this.storageRefMaker_ = maker;
        this.requestMaker_ = requestMaker;
        this.pool_ = pool;
        this.service_ = service;
        this.maxOperationRetryTime_ = DEFAULT_MAX_OPERATION_RETRY_TIME;
        this.maxUploadRetryTime_ = DEFAULT_MAX_UPLOAD_RETRY_TIME;
        this.requestMap_ = new RequestMap();
      }

      AuthWrapper.extractBucket_ = function (config) {
        var bucketString = config[CONFIG_STORAGE_BUCKET_KEY] || null;

        if (bucketString == null) {
          return null;
        }

        var loc = Location.makeFromBucketSpec(bucketString);
        return loc.bucket;
      };

      AuthWrapper.prototype.getAuthToken = function () {
        var auth = this.authProvider_.getImmediate({
          optional: true
        });

        if (auth) {
          return auth.getToken().then(function (response) {
            if (response !== null) {
              return response.accessToken;
            } else {
              return null;
            }
          }, function () {
            return null;
          });
        } else {
          return Promise.resolve(null);
        }
      };

      AuthWrapper.prototype.bucket = function () {
        if (this.deleted_) {
          throw appDeleted();
        } else {
          return this.bucket_;
        }
      };
      /**
       * The service associated with this auth wrapper. Untyped to avoid circular
       * type dependencies.
       */


      AuthWrapper.prototype.service = function () {
        return this.service_;
      };
      /**
       * Returns a new firebaseStorage.Reference object referencing this AuthWrapper
       * at the given Location.
       * @param loc The Location.
       * @return Actually a firebaseStorage.Reference, typing not allowed
       *     because of circular dependency problems.
       */


      AuthWrapper.prototype.makeStorageReference = function (loc) {
        return this.storageRefMaker_(this, loc);
      };

      AuthWrapper.prototype.makeRequest = function (requestInfo, authToken) {
        if (!this.deleted_) {
          var request = this.requestMaker_(requestInfo, this.appId_, authToken, this.pool_);
          this.requestMap_.addRequest(request);
          return request;
        } else {
          return new FailRequest(appDeleted());
        }
      };
      /**
       * Stop running requests and prevent more from being created.
       */


      AuthWrapper.prototype.deleteApp = function () {
        this.deleted_ = true;
        this.app_ = null;
        this.requestMap_.clear();
      };

      AuthWrapper.prototype.maxUploadRetryTime = function () {
        return this.maxUploadRetryTime_;
      };

      AuthWrapper.prototype.setMaxUploadRetryTime = function (time) {
        this.maxUploadRetryTime_ = time;
      };

      AuthWrapper.prototype.maxOperationRetryTime = function () {
        return this.maxOperationRetryTime_;
      };

      AuthWrapper.prototype.setMaxOperationRetryTime = function (time) {
        this.maxOperationRetryTime_ = time;
      };

      return AuthWrapper;
    }();
    /**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @param f May be invoked
     *     before the function returns.
     * @param callback Get all the arguments passed to the function
     *     passed to f, including the initial boolean.
     */


    function start(f, callback, timeout) {
      // TODO(andysoto): make this code cleaner (probably refactor into an actual
      // type instead of a bunch of functions with state shared in the closure)
      var waitSeconds = 1; // Would type this as "number" but that doesn't work for Node so ¯\_(ツ)_/¯
      // TODO: find a way to exclude Node type definition for storage because storage only works in browser
      // eslint-disable-next-line @typescript-eslint/no-explicit-any

      var timeoutId = null;
      var hitTimeout = false;
      var cancelState = 0;

      function canceled() {
        return cancelState === 2;
      }

      var triggeredCallback = false; // TODO: This disable can be removed and the 'ignoreRestArgs' option added to
      // the no-explicit-any rule when ESlint releases it.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any

      function triggerCallback() {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        if (!triggeredCallback) {
          triggeredCallback = true;
          callback.apply(null, args);
        }
      }

      function callWithDelay(millis) {
        timeoutId = setTimeout(function () {
          timeoutId = null;
          f(handler, canceled());
        }, millis);
      } // TODO: This disable can be removed and the 'ignoreRestArgs' option added to
      // the no-explicit-any rule when ESlint releases it.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any


      function handler(success) {
        var args = [];

        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
        }

        if (triggeredCallback) {
          return;
        }

        if (success) {
          triggerCallback.call.apply(triggerCallback, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArrays"])([null, success], args));
          return;
        }

        var mustStop = canceled() || hitTimeout;

        if (mustStop) {
          triggerCallback.call.apply(triggerCallback, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArrays"])([null, success], args));
          return;
        }

        if (waitSeconds < 64) {
          /* TODO(andysoto): don't back off so quickly if we know we're offline. */
          waitSeconds *= 2;
        }

        var waitMillis;

        if (cancelState === 1) {
          cancelState = 2;
          waitMillis = 0;
        } else {
          waitMillis = (waitSeconds + Math.random()) * 1000;
        }

        callWithDelay(waitMillis);
      }

      var stopped = false;

      function stop(wasTimeout) {
        if (stopped) {
          return;
        }

        stopped = true;

        if (triggeredCallback) {
          return;
        }

        if (timeoutId !== null) {
          if (!wasTimeout) {
            cancelState = 2;
          }

          clearTimeout(timeoutId);
          callWithDelay(0);
        } else {
          if (!wasTimeout) {
            cancelState = 1;
          }
        }
      }

      callWithDelay(0);
      setTimeout(function () {
        hitTimeout = true;
        stop(true);
      }, timeout);
      return stop;
    }
    /**
     * Stops the retry loop from repeating.
     * If the function is currently "in between" retries, it is invoked immediately
     * with the second parameter as "true". Otherwise, it will be invoked once more
     * after the current invocation finishes iff the current invocation would have
     * triggered another retry.
     */


    function stop(id) {
      id(false);
    }
    /**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @struct
     * @template T
     */


    var NetworkRequest =
    /** @class */
    function () {
      function NetworkRequest(url, method, headers, body, successCodes, additionalRetryCodes, callback, errorCallback, timeout, progressCallback, pool) {
        var _this = this;

        this.pendingXhr_ = null;
        this.backoffId_ = null;
        this.resolve_ = null;
        this.reject_ = null;
        this.canceled_ = false;
        this.appDelete_ = false;
        this.url_ = url;
        this.method_ = method;
        this.headers_ = headers;
        this.body_ = body;
        this.successCodes_ = successCodes.slice();
        this.additionalRetryCodes_ = additionalRetryCodes.slice();
        this.callback_ = callback;
        this.errorCallback_ = errorCallback;
        this.progressCallback_ = progressCallback;
        this.timeout_ = timeout;
        this.pool_ = pool;
        this.promise_ = new Promise(function (resolve, reject) {
          _this.resolve_ = resolve;
          _this.reject_ = reject;

          _this.start_();
        });
      }
      /**
       * Actually starts the retry loop.
       */


      NetworkRequest.prototype.start_ = function () {
        var self = this;

        function doTheRequest(backoffCallback, canceled) {
          if (canceled) {
            backoffCallback(false, new RequestEndStatus(false, null, true));
            return;
          }

          var xhr = self.pool_.createXhrIo();
          self.pendingXhr_ = xhr;

          function progressListener(progressEvent) {
            var loaded = progressEvent.loaded;
            var total = progressEvent.lengthComputable ? progressEvent.total : -1;

            if (self.progressCallback_ !== null) {
              self.progressCallback_(loaded, total);
            }
          }

          if (self.progressCallback_ !== null) {
            xhr.addUploadProgressListener(progressListener);
          } // eslint-disable-next-line @typescript-eslint/no-floating-promises


          xhr.send(self.url_, self.method_, self.body_, self.headers_).then(function (xhr) {
            if (self.progressCallback_ !== null) {
              xhr.removeUploadProgressListener(progressListener);
            }

            self.pendingXhr_ = null;
            xhr = xhr;
            var hitServer = xhr.getErrorCode() === ErrorCode.NO_ERROR;
            var status = xhr.getStatus();

            if (!hitServer || self.isRetryStatusCode_(status)) {
              var wasCanceled = xhr.getErrorCode() === ErrorCode.ABORT;
              backoffCallback(false, new RequestEndStatus(false, null, wasCanceled));
              return;
            }

            var successCode = self.successCodes_.indexOf(status) !== -1;
            backoffCallback(true, new RequestEndStatus(successCode, xhr));
          });
        }
        /**
         * @param requestWentThrough True if the request eventually went
         *     through, false if it hit the retry limit or was canceled.
         */


        function backoffDone(requestWentThrough, status) {
          var resolve = self.resolve_;
          var reject = self.reject_;
          var xhr = status.xhr;

          if (status.wasSuccessCode) {
            try {
              var result = self.callback_(xhr, xhr.getResponseText());

              if (isJustDef(result)) {
                resolve(result);
              } else {
                resolve();
              }
            } catch (e) {
              reject(e);
            }
          } else {
            if (xhr !== null) {
              var err = unknown();
              err.setServerResponseProp(xhr.getResponseText());

              if (self.errorCallback_) {
                reject(self.errorCallback_(xhr, err));
              } else {
                reject(err);
              }
            } else {
              if (status.canceled) {
                var err = self.appDelete_ ? appDeleted() : canceled();
                reject(err);
              } else {
                var err = retryLimitExceeded();
                reject(err);
              }
            }
          }
        }

        if (this.canceled_) {
          backoffDone(false, new RequestEndStatus(false, null, true));
        } else {
          this.backoffId_ = start(doTheRequest, backoffDone, this.timeout_);
        }
      };
      /** @inheritDoc */


      NetworkRequest.prototype.getPromise = function () {
        return this.promise_;
      };
      /** @inheritDoc */


      NetworkRequest.prototype.cancel = function (appDelete) {
        this.canceled_ = true;
        this.appDelete_ = appDelete || false;

        if (this.backoffId_ !== null) {
          stop(this.backoffId_);
        }

        if (this.pendingXhr_ !== null) {
          this.pendingXhr_.abort();
        }
      };

      NetworkRequest.prototype.isRetryStatusCode_ = function (status) {
        // The codes for which to retry came from this page:
        // https://cloud.google.com/storage/docs/exponential-backoff
        var isFiveHundredCode = status >= 500 && status < 600;
        var extraRetryCodes = [// Request Timeout: web server didn't receive full request in time.
        408, // Too Many Requests: you're getting rate-limited, basically.
        429];
        var isExtraRetryCode = extraRetryCodes.indexOf(status) !== -1;
        var isRequestSpecificRetryCode = this.additionalRetryCodes_.indexOf(status) !== -1;
        return isFiveHundredCode || isExtraRetryCode || isRequestSpecificRetryCode;
      };

      return NetworkRequest;
    }();
    /**
     * A collection of information about the result of a network request.
     * @param opt_canceled Defaults to false.
     * @struct
     */


    var RequestEndStatus =
    /** @class */
    function () {
      function RequestEndStatus(wasSuccessCode, xhr, canceled) {
        this.wasSuccessCode = wasSuccessCode;
        this.xhr = xhr;
        this.canceled = !!canceled;
      }

      return RequestEndStatus;
    }();

    function addAuthHeader_(headers, authToken) {
      if (authToken !== null && authToken.length > 0) {
        headers['Authorization'] = 'Firebase ' + authToken;
      }
    }

    function addVersionHeader_(headers) {
      var version = typeof _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a !== 'undefined' ? _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION : 'AppManager';
      headers['X-Firebase-Storage-Version'] = 'webjs/' + version;
    }

    function addGmpidHeader_(headers, appId) {
      if (appId) {
        headers['X-Firebase-GMPID'] = appId;
      }
    }
    /**
     * @template T
     */


    function makeRequest(requestInfo, appId, authToken, pool) {
      var queryPart = makeQueryString(requestInfo.urlParams);
      var url = requestInfo.url + queryPart;
      var headers = Object.assign({}, requestInfo.headers);
      addGmpidHeader_(headers, appId);
      addAuthHeader_(headers, authToken);
      addVersionHeader_(headers);
      return new NetworkRequest(url, requestInfo.method, headers, requestInfo.body, requestInfo.successCodes, requestInfo.additionalRetryCodes, requestInfo.handler, requestInfo.errorHandler, requestInfo.timeout, requestInfo.progressCallback, pool);
    }
    /**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * A service that provides firebaseStorage.Reference instances.
     * @param opt_url gs:// url to a custom Storage Bucket
     *
     * @struct
     */


    var Service =
    /** @class */
    function () {
      function Service(app, authProvider, pool, url) {
        this.bucket_ = null;

        function maker(authWrapper, loc) {
          return new Reference(authWrapper, loc);
        }

        this.authWrapper_ = new AuthWrapper(app, authProvider, maker, makeRequest, this, pool);
        this.app_ = app;

        if (url != null) {
          this.bucket_ = Location.makeFromBucketSpec(url);
        } else {
          var authWrapperBucket = this.authWrapper_.bucket();

          if (authWrapperBucket != null) {
            this.bucket_ = new Location(authWrapperBucket, '');
          }
        }

        this.internals_ = new ServiceInternals(this);
      }
      /**
       * Returns a firebaseStorage.Reference for the given path in the default
       * bucket.
       */


      Service.prototype.ref = function (path) {
        function validator(path) {
          if (typeof path !== 'string') {
            throw 'Path is not a string.';
          }

          if (/^[A-Za-z]+:\/\//.test(path)) {
            throw 'Expected child path but got a URL, use refFromURL instead.';
          }
        }

        validate('ref', [stringSpec(validator, true)], arguments);

        if (this.bucket_ == null) {
          throw new Error('No Storage Bucket defined in Firebase Options.');
        }

        var ref = new Reference(this.authWrapper_, this.bucket_);

        if (path != null) {
          return ref.child(path);
        } else {
          return ref;
        }
      };
      /**
       * Returns a firebaseStorage.Reference object for the given absolute URL,
       * which must be a gs:// or http[s]:// URL.
       */


      Service.prototype.refFromURL = function (url) {
        function validator(p) {
          if (typeof p !== 'string') {
            throw 'Path is not a string.';
          }

          if (!/^[A-Za-z]+:\/\//.test(p)) {
            throw 'Expected full URL but got a child path, use ref instead.';
          }

          try {
            Location.makeFromUrl(p);
          } catch (e) {
            throw 'Expected valid full URL but got an invalid one.';
          }
        }

        validate('refFromURL', [stringSpec(validator, false)], arguments);
        return new Reference(this.authWrapper_, url);
      };

      Object.defineProperty(Service.prototype, "maxUploadRetryTime", {
        get: function get() {
          return this.authWrapper_.maxUploadRetryTime();
        },
        enumerable: true,
        configurable: true
      });

      Service.prototype.setMaxUploadRetryTime = function (time) {
        validate('setMaxUploadRetryTime', [nonNegativeNumberSpec()], arguments);
        this.authWrapper_.setMaxUploadRetryTime(time);
      };

      Service.prototype.setMaxOperationRetryTime = function (time) {
        validate('setMaxOperationRetryTime', [nonNegativeNumberSpec()], arguments);
        this.authWrapper_.setMaxOperationRetryTime(time);
      };

      Object.defineProperty(Service.prototype, "app", {
        get: function get() {
          return this.app_;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Service.prototype, "INTERNAL", {
        get: function get() {
          return this.internals_;
        },
        enumerable: true,
        configurable: true
      });
      return Service;
    }();
    /**
     * @struct
     */


    var ServiceInternals =
    /** @class */
    function () {
      function ServiceInternals(service) {
        this.service_ = service;
      }
      /**
       * Called when the associated app is deleted.
       * @see {!fbs.AuthWrapper.prototype.deleteApp}
       */


      ServiceInternals.prototype["delete"] = function () {
        this.service_.authWrapper_.deleteApp();
        return Promise.resolve();
      };

      return ServiceInternals;
    }();

    var name = "@firebase/storage";
    var version = "0.3.32";
    /**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Type constant for Firebase Storage.
     */

    var STORAGE_TYPE = 'storage';

    function factory(container, url) {
      // Dependencies
      var app = container.getProvider('app').getImmediate();
      var authProvider = container.getProvider('auth-internal');
      return new Service(app, authProvider, new XhrIoPool(), url);
    }

    function registerStorage(instance) {
      var namespaceExports = {
        // no-inline
        TaskState: TaskState,
        TaskEvent: TaskEvent,
        StringFormat: StringFormat,
        Storage: Service,
        Reference: Reference
      };
      instance.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_2__["Component"](STORAGE_TYPE, factory, "PUBLIC"
      /* PUBLIC */
      ).setServiceProps(namespaceExports).setMultipleInstances(true));
      instance.registerVersion(name, version);
    }

    registerStorage(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceMappingURL=index.esm.js.map

    /***/
  },

  /***/
  "./node_modules/firebase/dist/index.cjs.js":
  /*!*************************************************!*\
    !*** ./node_modules/firebase/dist/index.cjs.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesFirebaseDistIndexCjsJs(module, exports, __webpack_require__) {
    "use strict";

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
    }

    var firebase = _interopDefault(__webpack_require__(
    /*! @firebase/app */
    "./node_modules/@firebase/app/dist/index.cjs.js"));

    __webpack_require__(
    /*! @firebase/auth */
    "./node_modules/@firebase/auth/dist/auth.esm.js");

    __webpack_require__(
    /*! @firebase/database */
    "./node_modules/@firebase/database/dist/index.cjs.js");

    __webpack_require__(
    /*! @firebase/firestore */
    "./node_modules/@firebase/firestore/dist/index.cjs.js");

    __webpack_require__(
    /*! @firebase/functions */
    "./node_modules/@firebase/functions/dist/index.cjs.js");

    __webpack_require__(
    /*! @firebase/messaging */
    "./node_modules/@firebase/messaging/dist/index.esm.js");

    __webpack_require__(
    /*! @firebase/storage */
    "./node_modules/@firebase/storage/dist/index.esm.js");

    __webpack_require__(
    /*! @firebase/performance */
    "./node_modules/@firebase/performance/dist/index.cjs.js");

    __webpack_require__(
    /*! @firebase/analytics */
    "./node_modules/@firebase/analytics/dist/index.esm.js");

    __webpack_require__(
    /*! @firebase/remote-config */
    "./node_modules/@firebase/remote-config/dist/index.cjs.js");

    var name = "firebase";
    var version = "7.14.1";
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    firebase.registerVersion(name, version, 'app');
    var name$1 = "firebase";
    var version$1 = "7.14.1";
    /**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    console.warn("\nIt looks like you're using the development build of the Firebase JS SDK.\nWhen deploying Firebase apps to production, it is advisable to only import\nthe individual SDK components you intend to use.\n\nFor the module builds, these are available in the following manner\n(replace <PACKAGE> with the name of a component - i.e. auth, database, etc):\n\nCommonJS Modules:\nconst firebase = require('firebase/app');\nrequire('firebase/<PACKAGE>');\n\nES Modules:\nimport firebase from 'firebase/app';\nimport 'firebase/<PACKAGE>';\n\nTypescript:\nimport * as firebase from 'firebase/app';\nimport 'firebase/<PACKAGE>';\n");
    firebase.registerVersion(name$1, version$1);
    module.exports = firebase; //# sourceMappingURL=index.cjs.js.map

    /***/
  }
}]);
//# sourceMappingURL=default~login-login-module~signup-signup-module~student-ec-form-ec-form-module~student-settings-sett~8ac94780-es5.js.map