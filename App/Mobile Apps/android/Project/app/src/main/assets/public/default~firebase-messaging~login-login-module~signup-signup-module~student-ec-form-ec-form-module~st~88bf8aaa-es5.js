(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~firebase-messaging~login-login-module~signup-signup-module~student-ec-form-ec-form-module~st~88bf8aaa"], {
  /***/
  "./node_modules/@firebase/installations/dist/index.esm.js":
  /*!****************************************************************!*\
    !*** ./node_modules/@firebase/installations/dist/index.esm.js ***!
    \****************************************************************/

  /*! exports provided: registerInstallations */

  /***/
  function node_modulesFirebaseInstallationsDistIndexEsmJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "registerInstallations", function () {
      return registerInstallations;
    });
    /* harmony import */


    var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @firebase/app */
    "./node_modules/@firebase/app/dist/index.cjs.js");
    /* harmony import */


    var _firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _firebase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @firebase/component */
    "./node_modules/@firebase/component/dist/index.cjs.js");
    /* harmony import */


    var _firebase_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_firebase_component__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _firebase_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @firebase/util */
    "./node_modules/@firebase/util/dist/index.cjs.js");
    /* harmony import */


    var _firebase_util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_firebase_util__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var idb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! idb */
    "./node_modules/idb/build/idb.js");
    /* harmony import */


    var idb__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(idb__WEBPACK_IMPORTED_MODULE_4__);

    var name = "@firebase/installations";
    var version = "0.4.8";
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

    var PENDING_TIMEOUT_MS = 10000;
    var PACKAGE_VERSION = "w:" + version;
    var INTERNAL_AUTH_VERSION = 'FIS_v2';
    var INSTALLATIONS_API_URL = 'https://firebaseinstallations.googleapis.com/v1';
    var TOKEN_EXPIRATION_BUFFER = 60 * 60 * 1000; // One hour

    var SERVICE = 'installations';
    var SERVICE_NAME = 'Installations';
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

    var ERROR_DESCRIPTION_MAP = (_a = {}, _a["missing-app-config-values"
    /* MISSING_APP_CONFIG_VALUES */
    ] = 'Missing App configuration value: "{$valueName}"', _a["not-registered"
    /* NOT_REGISTERED */
    ] = 'Firebase Installation is not registered.', _a["installation-not-found"
    /* INSTALLATION_NOT_FOUND */
    ] = 'Firebase Installation not found.', _a["request-failed"
    /* REQUEST_FAILED */
    ] = '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"', _a["app-offline"
    /* APP_OFFLINE */
    ] = 'Could not process request. Application offline.', _a["delete-pending-registration"
    /* DELETE_PENDING_REGISTRATION */
    ] = "Can't delete installation while there is a pending registration request.", _a);
    var ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_3__["ErrorFactory"](SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);
    /** Returns true if error is a FirebaseError that is based on an error from the server. */

    function isServerError(error) {
      return error instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_3__["FirebaseError"] && error.code.includes("request-failed"
      /* REQUEST_FAILED */
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


    function getInstallationsEndpoint(_a) {
      var projectId = _a.projectId;
      return INSTALLATIONS_API_URL + "/projects/" + projectId + "/installations";
    }

    function extractAuthTokenInfoFromResponse(response) {
      return {
        token: response.token,
        requestStatus: 2
        /* COMPLETED */
        ,
        expiresIn: getExpiresInFromResponseExpiresIn(response.expiresIn),
        creationTime: Date.now()
      };
    }

    function getErrorFromResponse(requestName, response) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
        var responseJson, errorData;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , response.json()];

            case 1:
              responseJson = _a.sent();
              errorData = responseJson.error;
              return [2
              /*return*/
              , ERROR_FACTORY.create("request-failed"
              /* REQUEST_FAILED */
              , {
                requestName: requestName,
                serverCode: errorData.code,
                serverMessage: errorData.message,
                serverStatus: errorData.status
              })];
          }
        });
      });
    }

    function getHeaders(_a) {
      var apiKey = _a.apiKey;
      return new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'x-goog-api-key': apiKey
      });
    }

    function getHeadersWithAuth(appConfig, _a) {
      var refreshToken = _a.refreshToken;
      var headers = getHeaders(appConfig);
      headers.append('Authorization', getAuthorizationHeader(refreshToken));
      return headers;
    }
    /**
     * Calls the passed in fetch wrapper and returns the response.
     * If the returned response has a status of 5xx, re-runs the function once and
     * returns the response.
     */


    function retryIfServerError(fn) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
        var result;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , fn()];

            case 1:
              result = _a.sent();

              if (result.status >= 500 && result.status < 600) {
                // Internal Server Error. Retry request.
                return [2
                /*return*/
                , fn()];
              }

              return [2
              /*return*/
              , result];
          }
        });
      });
    }

    function getExpiresInFromResponseExpiresIn(responseExpiresIn) {
      // This works because the server will never respond with fractions of a second.
      return Number(responseExpiresIn.replace('s', '000'));
    }

    function getAuthorizationHeader(refreshToken) {
      return INTERNAL_AUTH_VERSION + " " + refreshToken;
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


    function createInstallationRequest(appConfig, _a) {
      var fid = _a.fid;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
        var endpoint, headers, body, request, response, responseValue, registeredInstallationEntry;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_b) {
          switch (_b.label) {
            case 0:
              endpoint = getInstallationsEndpoint(appConfig);
              headers = getHeaders(appConfig);
              body = {
                fid: fid,
                authVersion: INTERNAL_AUTH_VERSION,
                appId: appConfig.appId,
                sdkVersion: PACKAGE_VERSION
              };
              request = {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(body)
              };
              return [4
              /*yield*/
              , retryIfServerError(function () {
                return fetch(endpoint, request);
              })];

            case 1:
              response = _b.sent();
              if (!response.ok) return [3
              /*break*/
              , 3];
              return [4
              /*yield*/
              , response.json()];

            case 2:
              responseValue = _b.sent();
              registeredInstallationEntry = {
                fid: responseValue.fid || fid,
                registrationStatus: 2
                /* COMPLETED */
                ,
                refreshToken: responseValue.refreshToken,
                authToken: extractAuthTokenInfoFromResponse(responseValue.authToken)
              };
              return [2
              /*return*/
              , registeredInstallationEntry];

            case 3:
              return [4
              /*yield*/
              , getErrorFromResponse('Create Installation', response)];

            case 4:
              throw _b.sent();
          }
        });
      });
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

    /** Returns a promise that resolves after given time passes. */


    function sleep(ms) {
      return new Promise(function (resolve) {
        setTimeout(resolve, ms);
      });
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


    function bufferToBase64UrlSafe(array) {
      var b64 = btoa(String.fromCharCode.apply(String, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(array)));
      return b64.replace(/\+/g, '-').replace(/\//g, '_');
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


    var VALID_FID_PATTERN = /^[cdef][\w-]{21}$/;
    var INVALID_FID = '';
    /**
     * Generates a new FID using random values from Web Crypto API.
     * Returns an empty string if FID generation fails for any reason.
     */

    function generateFid() {
      try {
        // A valid FID has exactly 22 base64 characters, which is 132 bits, or 16.5
        // bytes. our implementation generates a 17 byte array instead.
        var fidByteArray = new Uint8Array(17);
        var crypto_1 = self.crypto || self.msCrypto;
        crypto_1.getRandomValues(fidByteArray); // Replace the first 4 random bits with the constant FID header of 0b0111.

        fidByteArray[0] = 112 + fidByteArray[0] % 16;
        var fid = encode(fidByteArray);
        return VALID_FID_PATTERN.test(fid) ? fid : INVALID_FID;
      } catch (_a) {
        // FID generation errored
        return INVALID_FID;
      }
    }
    /** Converts a FID Uint8Array to a base64 string representation. */


    function encode(fidByteArray) {
      var b64String = bufferToBase64UrlSafe(fidByteArray); // Remove the 23rd character that was added because of the extra 4 bits at the
      // end of our 17 byte array, and the '=' padding.

      return b64String.substr(0, 22);
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

    /** Returns a string key that can be used to identify the app. */


    function getKey(appConfig) {
      return appConfig.appName + "!" + appConfig.appId;
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


    var fidChangeCallbacks = new Map();
    /**
     * Calls the onIdChange callbacks with the new FID value, and broadcasts the
     * change to other tabs.
     */

    function fidChanged(appConfig, fid) {
      var key = getKey(appConfig);
      callFidChangeCallbacks(key, fid);
      broadcastFidChange(key, fid);
    }

    function addCallback(appConfig, callback) {
      // Open the broadcast channel if it's not already open,
      // to be able to listen to change events from other tabs.
      getBroadcastChannel();
      var key = getKey(appConfig);
      var callbackSet = fidChangeCallbacks.get(key);

      if (!callbackSet) {
        callbackSet = new Set();
        fidChangeCallbacks.set(key, callbackSet);
      }

      callbackSet.add(callback);
    }

    function removeCallback(appConfig, callback) {
      var key = getKey(appConfig);
      var callbackSet = fidChangeCallbacks.get(key);

      if (!callbackSet) {
        return;
      }

      callbackSet["delete"](callback);

      if (callbackSet.size === 0) {
        fidChangeCallbacks["delete"](key);
      } // Close broadcast channel if there are no more callbacks.


      closeBroadcastChannel();
    }

    function callFidChangeCallbacks(key, fid) {
      var e_1, _a;

      var callbacks = fidChangeCallbacks.get(key);

      if (!callbacks) {
        return;
      }

      try {
        for (var callbacks_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__values"])(callbacks), callbacks_1_1 = callbacks_1.next(); !callbacks_1_1.done; callbacks_1_1 = callbacks_1.next()) {
          var callback = callbacks_1_1.value;
          callback(fid);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (callbacks_1_1 && !callbacks_1_1.done && (_a = callbacks_1["return"])) _a.call(callbacks_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    }

    function broadcastFidChange(key, fid) {
      var channel = getBroadcastChannel();

      if (channel) {
        channel.postMessage({
          key: key,
          fid: fid
        });
      }

      closeBroadcastChannel();
    }

    var broadcastChannel = null;
    /** Opens and returns a BroadcastChannel if it is supported by the browser. */

    function getBroadcastChannel() {
      if (!broadcastChannel && 'BroadcastChannel' in self) {
        broadcastChannel = new BroadcastChannel('[Firebase] FID Change');

        broadcastChannel.onmessage = function (e) {
          callFidChangeCallbacks(e.data.key, e.data.fid);
        };
      }

      return broadcastChannel;
    }

    function closeBroadcastChannel() {
      if (fidChangeCallbacks.size === 0 && broadcastChannel) {
        broadcastChannel.close();
        broadcastChannel = null;
      }
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


    var DATABASE_NAME = 'firebase-installations-database';
    var DATABASE_VERSION = 1;
    var OBJECT_STORE_NAME = 'firebase-installations-store';
    var dbPromise = null;

    function getDbPromise() {
      if (!dbPromise) {
        dbPromise = Object(idb__WEBPACK_IMPORTED_MODULE_4__["openDb"])(DATABASE_NAME, DATABASE_VERSION, function (upgradeDB) {
          // We don't use 'break' in this switch statement, the fall-through
          // behavior is what we want, because if there are multiple versions between
          // the old version and the current version, we want ALL the migrations
          // that correspond to those versions to run, not only the last one.
          // eslint-disable-next-line default-case
          switch (upgradeDB.oldVersion) {
            case 0:
              upgradeDB.createObjectStore(OBJECT_STORE_NAME);
          }
        });
      }

      return dbPromise;
    }
    /** Assigns or overwrites the record for the given key with the given value. */


    function set(appConfig, value) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
        var key, db, tx, objectStore, oldValue;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              key = getKey(appConfig);
              return [4
              /*yield*/
              , getDbPromise()];

            case 1:
              db = _a.sent();
              tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
              objectStore = tx.objectStore(OBJECT_STORE_NAME);
              return [4
              /*yield*/
              , objectStore.get(key)];

            case 2:
              oldValue = _a.sent();
              return [4
              /*yield*/
              , objectStore.put(value, key)];

            case 3:
              _a.sent();

              return [4
              /*yield*/
              , tx.complete];

            case 4:
              _a.sent();

              if (!oldValue || oldValue.fid !== value.fid) {
                fidChanged(appConfig, value.fid);
              }

              return [2
              /*return*/
              , value];
          }
        });
      });
    }
    /** Removes record(s) from the objectStore that match the given key. */


    function remove(appConfig) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
        var key, db, tx;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              key = getKey(appConfig);
              return [4
              /*yield*/
              , getDbPromise()];

            case 1:
              db = _a.sent();
              tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
              return [4
              /*yield*/
              , tx.objectStore(OBJECT_STORE_NAME)["delete"](key)];

            case 2:
              _a.sent();

              return [4
              /*yield*/
              , tx.complete];

            case 3:
              _a.sent();

              return [2
              /*return*/
              ];
          }
        });
      });
    }
    /**
     * Atomically updates a record with the result of updateFn, which gets
     * called with the current value. If newValue is undefined, the record is
     * deleted instead.
     * @return Updated value
     */


    function update(appConfig, updateFn) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
        var key, db, tx, store, oldValue, newValue;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              key = getKey(appConfig);
              return [4
              /*yield*/
              , getDbPromise()];

            case 1:
              db = _a.sent();
              tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
              store = tx.objectStore(OBJECT_STORE_NAME);
              return [4
              /*yield*/
              , store.get(key)];

            case 2:
              oldValue = _a.sent();
              newValue = updateFn(oldValue);
              if (!(newValue === undefined)) return [3
              /*break*/
              , 4];
              return [4
              /*yield*/
              , store["delete"](key)];

            case 3:
              _a.sent();

              return [3
              /*break*/
              , 6];

            case 4:
              return [4
              /*yield*/
              , store.put(newValue, key)];

            case 5:
              _a.sent();

              _a.label = 6;

            case 6:
              return [4
              /*yield*/
              , tx.complete];

            case 7:
              _a.sent();

              if (newValue && (!oldValue || oldValue.fid !== newValue.fid)) {
                fidChanged(appConfig, newValue.fid);
              }

              return [2
              /*return*/
              , newValue];
          }
        });
      });
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
     * Updates and returns the InstallationEntry from the database.
     * Also triggers a registration request if it is necessary and possible.
     */


    function getInstallationEntry(appConfig) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
        var registrationPromise, installationEntry, _a;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_b) {
          switch (_b.label) {
            case 0:
              return [4
              /*yield*/
              , update(appConfig, function (oldEntry) {
                var installationEntry = updateOrCreateInstallationEntry(oldEntry);
                var entryWithPromise = triggerRegistrationIfNecessary(appConfig, installationEntry);
                registrationPromise = entryWithPromise.registrationPromise;
                return entryWithPromise.installationEntry;
              })];

            case 1:
              installationEntry = _b.sent();
              if (!(installationEntry.fid === INVALID_FID)) return [3
              /*break*/
              , 3];
              _a = {};
              return [4
              /*yield*/
              , registrationPromise];

            case 2:
              // FID generation failed. Waiting for the FID from the server.
              return [2
              /*return*/
              , (_a.installationEntry = _b.sent(), _a)];

            case 3:
              return [2
              /*return*/
              , {
                installationEntry: installationEntry,
                registrationPromise: registrationPromise
              }];
          }
        });
      });
    }
    /**
     * Creates a new Installation Entry if one does not exist.
     * Also clears timed out pending requests.
     */


    function updateOrCreateInstallationEntry(oldEntry) {
      var entry = oldEntry || {
        fid: generateFid(),
        registrationStatus: 0
        /* NOT_STARTED */

      };
      return clearTimedOutRequest(entry);
    }
    /**
     * If the Firebase Installation is not registered yet, this will trigger the
     * registration and return an InProgressInstallationEntry.
     *
     * If registrationPromise does not exist, the installationEntry is guaranteed
     * to be registered.
     */


    function triggerRegistrationIfNecessary(appConfig, installationEntry) {
      if (installationEntry.registrationStatus === 0
      /* NOT_STARTED */
      ) {
          if (!navigator.onLine) {
            // Registration required but app is offline.
            var registrationPromiseWithError = Promise.reject(ERROR_FACTORY.create("app-offline"
            /* APP_OFFLINE */
            ));
            return {
              installationEntry: installationEntry,
              registrationPromise: registrationPromiseWithError
            };
          } // Try registering. Change status to IN_PROGRESS.


          var inProgressEntry = {
            fid: installationEntry.fid,
            registrationStatus: 1
            /* IN_PROGRESS */
            ,
            registrationTime: Date.now()
          };
          var registrationPromise = registerInstallation(appConfig, inProgressEntry);
          return {
            installationEntry: inProgressEntry,
            registrationPromise: registrationPromise
          };
        } else if (installationEntry.registrationStatus === 1
      /* IN_PROGRESS */
      ) {
          return {
            installationEntry: installationEntry,
            registrationPromise: waitUntilFidRegistration(appConfig)
          };
        } else {
        return {
          installationEntry: installationEntry
        };
      }
    }
    /** This will be executed only once for each new Firebase Installation. */


    function registerInstallation(appConfig, installationEntry) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
        var registeredInstallationEntry, e_1;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 2,, 7]);

              return [4
              /*yield*/
              , createInstallationRequest(appConfig, installationEntry)];

            case 1:
              registeredInstallationEntry = _a.sent();
              return [2
              /*return*/
              , set(appConfig, registeredInstallationEntry)];

            case 2:
              e_1 = _a.sent();
              if (!(isServerError(e_1) && e_1.serverCode === 409)) return [3
              /*break*/
              , 4]; // Server returned a "FID can not be used" error.
              // Generate a new ID next time.

              return [4
              /*yield*/
              , remove(appConfig)];

            case 3:
              // Server returned a "FID can not be used" error.
              // Generate a new ID next time.
              _a.sent();

              return [3
              /*break*/
              , 6];

            case 4:
              // Registration failed. Set FID as not registered.
              return [4
              /*yield*/
              , set(appConfig, {
                fid: installationEntry.fid,
                registrationStatus: 0
                /* NOT_STARTED */

              })];

            case 5:
              // Registration failed. Set FID as not registered.
              _a.sent();

              _a.label = 6;

            case 6:
              throw e_1;

            case 7:
              return [2
              /*return*/
              ];
          }
        });
      });
    }
    /** Call if FID registration is pending in another request. */


    function waitUntilFidRegistration(appConfig) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
        var entry, _a, installationEntry, registrationPromise;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_b) {
          switch (_b.label) {
            case 0:
              return [4
              /*yield*/
              , updateInstallationRequest(appConfig)];

            case 1:
              entry = _b.sent();
              _b.label = 2;

            case 2:
              if (!(entry.registrationStatus === 1
              /* IN_PROGRESS */
              )) return [3
                /*break*/
                , 5]; // createInstallation request still in progress.

              return [4
              /*yield*/
              , sleep(100)];

            case 3:
              // createInstallation request still in progress.
              _b.sent();

              return [4
              /*yield*/
              , updateInstallationRequest(appConfig)];

            case 4:
              entry = _b.sent();
              return [3
              /*break*/
              , 2];

            case 5:
              if (!(entry.registrationStatus === 0
              /* NOT_STARTED */
              )) return [3
                /*break*/
                , 7];
              return [4
              /*yield*/
              , getInstallationEntry(appConfig)];

            case 6:
              _a = _b.sent(), installationEntry = _a.installationEntry, registrationPromise = _a.registrationPromise;

              if (registrationPromise) {
                return [2
                /*return*/
                , registrationPromise];
              } else {
                // if there is no registrationPromise, entry is registered.
                return [2
                /*return*/
                , installationEntry];
              }

            case 7:
              return [2
              /*return*/
              , entry];
          }
        });
      });
    }
    /**
     * Called only if there is a CreateInstallation request in progress.
     *
     * Updates the InstallationEntry in the DB based on the status of the
     * CreateInstallation request.
     *
     * Returns the updated InstallationEntry.
     */


    function updateInstallationRequest(appConfig) {
      return update(appConfig, function (oldEntry) {
        if (!oldEntry) {
          throw ERROR_FACTORY.create("installation-not-found"
          /* INSTALLATION_NOT_FOUND */
          );
        }

        return clearTimedOutRequest(oldEntry);
      });
    }

    function clearTimedOutRequest(entry) {
      if (hasInstallationRequestTimedOut(entry)) {
        return {
          fid: entry.fid,
          registrationStatus: 0
          /* NOT_STARTED */

        };
      }

      return entry;
    }

    function hasInstallationRequestTimedOut(installationEntry) {
      return installationEntry.registrationStatus === 1
      /* IN_PROGRESS */
      && installationEntry.registrationTime + PENDING_TIMEOUT_MS < Date.now();
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


    function generateAuthTokenRequest(_a, installationEntry) {
      var appConfig = _a.appConfig,
          platformLoggerProvider = _a.platformLoggerProvider;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
        var endpoint, headers, platformLogger, body, request, response, responseValue, completedAuthToken;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_b) {
          switch (_b.label) {
            case 0:
              endpoint = getGenerateAuthTokenEndpoint(appConfig, installationEntry);
              headers = getHeadersWithAuth(appConfig, installationEntry);
              platformLogger = platformLoggerProvider.getImmediate({
                optional: true
              });

              if (platformLogger) {
                headers.append('x-firebase-client', platformLogger.getPlatformInfoString());
              }

              body = {
                installation: {
                  sdkVersion: PACKAGE_VERSION
                }
              };
              request = {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(body)
              };
              return [4
              /*yield*/
              , retryIfServerError(function () {
                return fetch(endpoint, request);
              })];

            case 1:
              response = _b.sent();
              if (!response.ok) return [3
              /*break*/
              , 3];
              return [4
              /*yield*/
              , response.json()];

            case 2:
              responseValue = _b.sent();
              completedAuthToken = extractAuthTokenInfoFromResponse(responseValue);
              return [2
              /*return*/
              , completedAuthToken];

            case 3:
              return [4
              /*yield*/
              , getErrorFromResponse('Generate Auth Token', response)];

            case 4:
              throw _b.sent();
          }
        });
      });
    }

    function getGenerateAuthTokenEndpoint(appConfig, _a) {
      var fid = _a.fid;
      return getInstallationsEndpoint(appConfig) + "/" + fid + "/authTokens:generate";
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
     * Returns a valid authentication token for the installation. Generates a new
     * token if one doesn't exist, is expired or about to expire.
     *
     * Should only be called if the Firebase Installation is registered.
     */


    function refreshAuthToken(dependencies, forceRefresh) {
      if (forceRefresh === void 0) {
        forceRefresh = false;
      }

      return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
        var tokenPromise, entry, authToken, _a;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_b) {
          switch (_b.label) {
            case 0:
              return [4
              /*yield*/
              , update(dependencies.appConfig, function (oldEntry) {
                if (!isEntryRegistered(oldEntry)) {
                  throw ERROR_FACTORY.create("not-registered"
                  /* NOT_REGISTERED */
                  );
                }

                var oldAuthToken = oldEntry.authToken;

                if (!forceRefresh && isAuthTokenValid(oldAuthToken)) {
                  // There is a valid token in the DB.
                  return oldEntry;
                } else if (oldAuthToken.requestStatus === 1
                /* IN_PROGRESS */
                ) {
                    // There already is a token request in progress.
                    tokenPromise = waitUntilAuthTokenRequest(dependencies, forceRefresh);
                    return oldEntry;
                  } else {
                  // No token or token expired.
                  if (!navigator.onLine) {
                    throw ERROR_FACTORY.create("app-offline"
                    /* APP_OFFLINE */
                    );
                  }

                  var inProgressEntry = makeAuthTokenRequestInProgressEntry(oldEntry);
                  tokenPromise = fetchAuthTokenFromServer(dependencies, inProgressEntry);
                  return inProgressEntry;
                }
              })];

            case 1:
              entry = _b.sent();
              if (!tokenPromise) return [3
              /*break*/
              , 3];
              return [4
              /*yield*/
              , tokenPromise];

            case 2:
              _a = _b.sent();
              return [3
              /*break*/
              , 4];

            case 3:
              _a = entry.authToken;
              _b.label = 4;

            case 4:
              authToken = _a;
              return [2
              /*return*/
              , authToken];
          }
        });
      });
    }
    /**
     * Call only if FID is registered and Auth Token request is in progress.
     *
     * Waits until the current pending request finishes. If the request times out,
     * tries once in this thread as well.
     */


    function waitUntilAuthTokenRequest(dependencies, forceRefresh) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
        var entry, authToken;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , updateAuthTokenRequest(dependencies.appConfig)];

            case 1:
              entry = _a.sent();
              _a.label = 2;

            case 2:
              if (!(entry.authToken.requestStatus === 1
              /* IN_PROGRESS */
              )) return [3
                /*break*/
                , 5]; // generateAuthToken still in progress.

              return [4
              /*yield*/
              , sleep(100)];

            case 3:
              // generateAuthToken still in progress.
              _a.sent();

              return [4
              /*yield*/
              , updateAuthTokenRequest(dependencies.appConfig)];

            case 4:
              entry = _a.sent();
              return [3
              /*break*/
              , 2];

            case 5:
              authToken = entry.authToken;

              if (authToken.requestStatus === 0
              /* NOT_STARTED */
              ) {
                  // The request timed out or failed in a different call. Try again.
                  return [2
                  /*return*/
                  , refreshAuthToken(dependencies, forceRefresh)];
                } else {
                return [2
                /*return*/
                , authToken];
              }

          }
        });
      });
    }
    /**
     * Called only if there is a GenerateAuthToken request in progress.
     *
     * Updates the InstallationEntry in the DB based on the status of the
     * GenerateAuthToken request.
     *
     * Returns the updated InstallationEntry.
     */


    function updateAuthTokenRequest(appConfig) {
      return update(appConfig, function (oldEntry) {
        if (!isEntryRegistered(oldEntry)) {
          throw ERROR_FACTORY.create("not-registered"
          /* NOT_REGISTERED */
          );
        }

        var oldAuthToken = oldEntry.authToken;

        if (hasAuthTokenRequestTimedOut(oldAuthToken)) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, oldEntry), {
            authToken: {
              requestStatus: 0
              /* NOT_STARTED */

            }
          });
        }

        return oldEntry;
      });
    }

    function fetchAuthTokenFromServer(dependencies, installationEntry) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
        var authToken, updatedInstallationEntry, e_1, updatedInstallationEntry;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 3,, 8]);

              return [4
              /*yield*/
              , generateAuthTokenRequest(dependencies, installationEntry)];

            case 1:
              authToken = _a.sent();
              updatedInstallationEntry = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, installationEntry), {
                authToken: authToken
              });
              return [4
              /*yield*/
              , set(dependencies.appConfig, updatedInstallationEntry)];

            case 2:
              _a.sent();

              return [2
              /*return*/
              , authToken];

            case 3:
              e_1 = _a.sent();
              if (!(isServerError(e_1) && (e_1.serverCode === 401 || e_1.serverCode === 404))) return [3
              /*break*/
              , 5]; // Server returned a "FID not found" or a "Invalid authentication" error.
              // Generate a new ID next time.

              return [4
              /*yield*/
              , remove(dependencies.appConfig)];

            case 4:
              // Server returned a "FID not found" or a "Invalid authentication" error.
              // Generate a new ID next time.
              _a.sent();

              return [3
              /*break*/
              , 7];

            case 5:
              updatedInstallationEntry = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, installationEntry), {
                authToken: {
                  requestStatus: 0
                  /* NOT_STARTED */

                }
              });
              return [4
              /*yield*/
              , set(dependencies.appConfig, updatedInstallationEntry)];

            case 6:
              _a.sent();

              _a.label = 7;

            case 7:
              throw e_1;

            case 8:
              return [2
              /*return*/
              ];
          }
        });
      });
    }

    function isEntryRegistered(installationEntry) {
      return installationEntry !== undefined && installationEntry.registrationStatus === 2
      /* COMPLETED */
      ;
    }

    function isAuthTokenValid(authToken) {
      return authToken.requestStatus === 2
      /* COMPLETED */
      && !isAuthTokenExpired(authToken);
    }

    function isAuthTokenExpired(authToken) {
      var now = Date.now();
      return now < authToken.creationTime || authToken.creationTime + authToken.expiresIn < now + TOKEN_EXPIRATION_BUFFER;
    }
    /** Returns an updated InstallationEntry with an InProgressAuthToken. */


    function makeAuthTokenRequestInProgressEntry(oldEntry) {
      var inProgressAuthToken = {
        requestStatus: 1
        /* IN_PROGRESS */
        ,
        requestTime: Date.now()
      };
      return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, oldEntry), {
        authToken: inProgressAuthToken
      });
    }

    function hasAuthTokenRequestTimedOut(authToken) {
      return authToken.requestStatus === 1
      /* IN_PROGRESS */
      && authToken.requestTime + PENDING_TIMEOUT_MS < Date.now();
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


    function _getId(dependencies) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
        var _a, installationEntry, registrationPromise;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_b) {
          switch (_b.label) {
            case 0:
              return [4
              /*yield*/
              , getInstallationEntry(dependencies.appConfig)];

            case 1:
              _a = _b.sent(), installationEntry = _a.installationEntry, registrationPromise = _a.registrationPromise;

              if (registrationPromise) {
                registrationPromise["catch"](console.error);
              } else {
                // If the installation is already registered, update the authentication
                // token if needed.
                refreshAuthToken(dependencies)["catch"](console.error);
              }

              return [2
              /*return*/
              , installationEntry.fid];
          }
        });
      });
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


    function _getToken(dependencies, forceRefresh) {
      if (forceRefresh === void 0) {
        forceRefresh = false;
      }

      return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
        var authToken;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , completeInstallationRegistration(dependencies.appConfig)];

            case 1:
              _a.sent();

              return [4
              /*yield*/
              , refreshAuthToken(dependencies, forceRefresh)];

            case 2:
              authToken = _a.sent();
              return [2
              /*return*/
              , authToken.token];
          }
        });
      });
    }

    function completeInstallationRegistration(appConfig) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
        var registrationPromise;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , getInstallationEntry(appConfig)];

            case 1:
              registrationPromise = _a.sent().registrationPromise;
              if (!registrationPromise) return [3
              /*break*/
              , 3]; // A createInstallation request is in progress. Wait until it finishes.

              return [4
              /*yield*/
              , registrationPromise];

            case 2:
              // A createInstallation request is in progress. Wait until it finishes.
              _a.sent();

              _a.label = 3;

            case 3:
              return [2
              /*return*/
              ];
          }
        });
      });
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


    function deleteInstallationRequest(appConfig, installationEntry) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
        var endpoint, headers, request, response;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              endpoint = getDeleteEndpoint(appConfig, installationEntry);
              headers = getHeadersWithAuth(appConfig, installationEntry);
              request = {
                method: 'DELETE',
                headers: headers
              };
              return [4
              /*yield*/
              , retryIfServerError(function () {
                return fetch(endpoint, request);
              })];

            case 1:
              response = _a.sent();
              if (!!response.ok) return [3
              /*break*/
              , 3];
              return [4
              /*yield*/
              , getErrorFromResponse('Delete Installation', response)];

            case 2:
              throw _a.sent();

            case 3:
              return [2
              /*return*/
              ];
          }
        });
      });
    }

    function getDeleteEndpoint(appConfig, _a) {
      var fid = _a.fid;
      return getInstallationsEndpoint(appConfig) + "/" + fid;
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


    function deleteInstallation(dependencies) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
        var appConfig, entry;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              appConfig = dependencies.appConfig;
              return [4
              /*yield*/
              , update(appConfig, function (oldEntry) {
                if (oldEntry && oldEntry.registrationStatus === 0
                /* NOT_STARTED */
                ) {
                    // Delete the unregistered entry without sending a deleteInstallation request.
                    return undefined;
                  }

                return oldEntry;
              })];

            case 1:
              entry = _a.sent();
              if (!entry) return [3
              /*break*/
              , 6];
              if (!(entry.registrationStatus === 1
              /* IN_PROGRESS */
              )) return [3
                /*break*/
                , 2]; // Can't delete while trying to register.

              throw ERROR_FACTORY.create("delete-pending-registration"
              /* DELETE_PENDING_REGISTRATION */
              );

            case 2:
              if (!(entry.registrationStatus === 2
              /* COMPLETED */
              )) return [3
                /*break*/
                , 6];
              if (!!navigator.onLine) return [3
              /*break*/
              , 3];
              throw ERROR_FACTORY.create("app-offline"
              /* APP_OFFLINE */
              );

            case 3:
              return [4
              /*yield*/
              , deleteInstallationRequest(appConfig, entry)];

            case 4:
              _a.sent();

              return [4
              /*yield*/
              , remove(appConfig)];

            case 5:
              _a.sent();

              _a.label = 6;

            case 6:
              return [2
              /*return*/
              ];
          }
        });
      });
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
     * Sets a new callback that will get called when Installation ID changes.
     * Returns an unsubscribe function that will remove the callback when called.
     */


    function _onIdChange(_a, callback) {
      var appConfig = _a.appConfig;
      addCallback(appConfig, callback);
      return function () {
        removeCallback(appConfig, callback);
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


    function extractAppConfig(app) {
      var e_1, _a;

      if (!app || !app.options) {
        throw getMissingValueError('App Configuration');
      }

      if (!app.name) {
        throw getMissingValueError('App Name');
      } // Required app config keys


      var configKeys = ['projectId', 'apiKey', 'appId'];

      try {
        for (var configKeys_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__values"])(configKeys), configKeys_1_1 = configKeys_1.next(); !configKeys_1_1.done; configKeys_1_1 = configKeys_1.next()) {
          var keyName = configKeys_1_1.value;

          if (!app.options[keyName]) {
            throw getMissingValueError(keyName);
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (configKeys_1_1 && !configKeys_1_1.done && (_a = configKeys_1["return"])) _a.call(configKeys_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }

      return {
        appName: app.name,
        projectId: app.options.projectId,
        apiKey: app.options.apiKey,
        appId: app.options.appId
      };
    }

    function getMissingValueError(valueName) {
      return ERROR_FACTORY.create("missing-app-config-values"
      /* MISSING_APP_CONFIG_VALUES */
      , {
        valueName: valueName
      });
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


    function registerInstallations(instance) {
      var installationsName = 'installations';
      instance.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_1__["Component"](installationsName, function (container) {
        var app = container.getProvider('app').getImmediate(); // Throws if app isn't configured properly.

        var appConfig = extractAppConfig(app);
        var platformLoggerProvider = container.getProvider('platform-logger');
        var dependencies = {
          appConfig: appConfig,
          platformLoggerProvider: platformLoggerProvider
        };
        var installations = {
          app: app,
          getId: function getId() {
            return _getId(dependencies);
          },
          getToken: function getToken(forceRefresh) {
            return _getToken(dependencies, forceRefresh);
          },
          "delete": function _delete() {
            return deleteInstallation(dependencies);
          },
          onIdChange: function onIdChange(callback) {
            return _onIdChange(dependencies, callback);
          }
        };
        return installations;
      }, "PUBLIC"
      /* PUBLIC */
      ));
      instance.registerVersion(name, version);
    }

    registerInstallations(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceMappingURL=index.esm.js.map

    /***/
  },

  /***/
  "./node_modules/@firebase/messaging/dist/index.esm.js":
  /*!************************************************************!*\
    !*** ./node_modules/@firebase/messaging/dist/index.esm.js ***!
    \************************************************************/

  /*! no exports provided */

  /***/
  function node_modulesFirebaseMessagingDistIndexEsmJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
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


    var _firebase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @firebase/component */
    "./node_modules/@firebase/component/dist/index.cjs.js");
    /* harmony import */


    var _firebase_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_firebase_component__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _firebase_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @firebase/util */
    "./node_modules/@firebase/util/dist/index.cjs.js");
    /* harmony import */


    var _firebase_util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_firebase_util__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var idb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! idb */
    "./node_modules/idb/build/idb.js");
    /* harmony import */


    var idb__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(idb__WEBPACK_IMPORTED_MODULE_5__);
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


    var _a;

    var ERROR_MAP = (_a = {}, _a["missing-app-config-values"
    /* MISSING_APP_CONFIG_VALUES */
    ] = 'Missing App configuration value: "{$valueName}"', _a["only-available-in-window"
    /* AVAILABLE_IN_WINDOW */
    ] = 'This method is available in a Window context.', _a["only-available-in-sw"
    /* AVAILABLE_IN_SW */
    ] = 'This method is available in a service worker context.', _a["permission-default"
    /* PERMISSION_DEFAULT */
    ] = 'The notification permission was not granted and dismissed instead.', _a["permission-blocked"
    /* PERMISSION_BLOCKED */
    ] = 'The notification permission was not granted and blocked instead.', _a["unsupported-browser"
    /* UNSUPPORTED_BROWSER */
    ] = "This browser doesn't support the API's required to use the firebase SDK.", _a["failed-service-worker-registration"
    /* FAILED_DEFAULT_REGISTRATION */
    ] = 'We are unable to register the default service worker. {$browserErrorMessage}', _a["token-subscribe-failed"
    /* TOKEN_SUBSCRIBE_FAILED */
    ] = 'A problem occured while subscribing the user to FCM: {$errorInfo}', _a["token-subscribe-no-token"
    /* TOKEN_SUBSCRIBE_NO_TOKEN */
    ] = 'FCM returned no token when subscribing the user to push.', _a["token-unsubscribe-failed"
    /* TOKEN_UNSUBSCRIBE_FAILED */
    ] = 'A problem occured while unsubscribing the ' + 'user from FCM: {$errorInfo}', _a["token-update-failed"
    /* TOKEN_UPDATE_FAILED */
    ] = 'A problem occured while updating the user from FCM: {$errorInfo}', _a["token-update-no-token"
    /* TOKEN_UPDATE_NO_TOKEN */
    ] = 'FCM returned no token when updating the user to push.', _a["use-sw-after-get-token"
    /* USE_SW_AFTER_GET_TOKEN */
    ] = 'The useServiceWorker() method may only be called once and must be ' + 'called before calling getToken() to ensure your service worker is used.', _a["invalid-sw-registration"
    /* INVALID_SW_REGISTRATION */
    ] = 'The input to useServiceWorker() must be a ServiceWorkerRegistration.', _a["invalid-bg-handler"
    /* INVALID_BG_HANDLER */
    ] = 'The input to setBackgroundMessageHandler() must be a function.', _a["invalid-vapid-key"
    /* INVALID_VAPID_KEY */
    ] = 'The public VAPID key must be a string.', _a["use-vapid-key-after-get-token"
    /* USE_VAPID_KEY_AFTER_GET_TOKEN */
    ] = 'The usePublicVapidKey() method may only be called once and must be ' + 'called before calling getToken() to ensure your VAPID key is used.', _a);
    var ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_4__["ErrorFactory"]('messaging', 'Messaging', ERROR_MAP);
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

    function extractAppConfig(app) {
      var e_1, _a;

      if (!app || !app.options) {
        throw getMissingValueError('App Configuration Object');
      }

      if (!app.name) {
        throw getMissingValueError('App Name');
      } // Required app config keys


      var configKeys = ['projectId', 'apiKey', 'appId', 'messagingSenderId'];
      var options = app.options;

      try {
        for (var configKeys_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(configKeys), configKeys_1_1 = configKeys_1.next(); !configKeys_1_1.done; configKeys_1_1 = configKeys_1.next()) {
          var keyName = configKeys_1_1.value;

          if (!options[keyName]) {
            throw getMissingValueError(keyName);
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (configKeys_1_1 && !configKeys_1_1.done && (_a = configKeys_1["return"])) _a.call(configKeys_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }

      return {
        appName: app.name,
        projectId: options.projectId,
        apiKey: options.apiKey,
        appId: options.appId,
        senderId: options.messagingSenderId
      };
    }

    function getMissingValueError(valueName) {
      return ERROR_FACTORY.create("missing-app-config-values"
      /* MISSING_APP_CONFIG_VALUES */
      , {
        valueName: valueName
      });
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


    function arrayToBase64(array) {
      var uint8Array = new Uint8Array(array);
      var base64String = btoa(String.fromCharCode.apply(String, Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spread"])(uint8Array)));
      return base64String.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
    }

    function base64ToArray(base64String) {
      var padding = '='.repeat((4 - base64String.length % 4) % 4);
      var base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
      var rawData = atob(base64);
      var outputArray = new Uint8Array(rawData.length);

      for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
      }

      return outputArray;
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


    var OLD_DB_NAME = 'fcm_token_details_db';
    /**
     * The last DB version of 'fcm_token_details_db' was 4. This is one higher,
     * so that the upgrade callback is called for all versions of the old DB.
     */

    var OLD_DB_VERSION = 5;
    var OLD_OBJECT_STORE_NAME = 'fcm_token_object_Store';

    function migrateOldDatabase(senderId) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
        var databases, dbNames, tokenDetails, db;

        var _this = this;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!('databases' in indexedDB)) return [3
              /*break*/
              , 2];
              return [4
              /*yield*/
              , indexedDB.databases()];

            case 1:
              databases = _a.sent();
              dbNames = databases.map(function (db) {
                return db.name;
              });

              if (!dbNames.includes(OLD_DB_NAME)) {
                // old DB didn't exist, no need to open.
                return [2
                /*return*/
                , null];
              }

              _a.label = 2;

            case 2:
              tokenDetails = null;
              return [4
              /*yield*/
              , Object(idb__WEBPACK_IMPORTED_MODULE_5__["openDb"])(OLD_DB_NAME, OLD_DB_VERSION, function (db) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(_this, void 0, void 0, function () {
                  var objectStore, value, oldDetails, oldDetails, oldDetails;

                  var _a;

                  return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_b) {
                    switch (_b.label) {
                      case 0:
                        if (db.oldVersion < 2) {
                          // Database too old, skip migration.
                          return [2
                          /*return*/
                          ];
                        }

                        if (!db.objectStoreNames.contains(OLD_OBJECT_STORE_NAME)) {
                          // Database did not exist. Nothing to do.
                          return [2
                          /*return*/
                          ];
                        }

                        objectStore = db.transaction.objectStore(OLD_OBJECT_STORE_NAME);
                        return [4
                        /*yield*/
                        , objectStore.index('fcmSenderId').get(senderId)];

                      case 1:
                        value = _b.sent();
                        return [4
                        /*yield*/
                        , objectStore.clear()];

                      case 2:
                        _b.sent();

                        if (!value) {
                          // No entry in the database, nothing to migrate.
                          return [2
                          /*return*/
                          ];
                        }

                        if (db.oldVersion === 2) {
                          oldDetails = value;

                          if (!oldDetails.auth || !oldDetails.p256dh || !oldDetails.endpoint) {
                            return [2
                            /*return*/
                            ];
                          }

                          tokenDetails = {
                            token: oldDetails.fcmToken,
                            createTime: (_a = oldDetails.createTime) !== null && _a !== void 0 ? _a : Date.now(),
                            subscriptionOptions: {
                              auth: oldDetails.auth,
                              p256dh: oldDetails.p256dh,
                              endpoint: oldDetails.endpoint,
                              swScope: oldDetails.swScope,
                              vapidKey: typeof oldDetails.vapidKey === 'string' ? oldDetails.vapidKey : arrayToBase64(oldDetails.vapidKey)
                            }
                          };
                        } else if (db.oldVersion === 3) {
                          oldDetails = value;
                          tokenDetails = {
                            token: oldDetails.fcmToken,
                            createTime: oldDetails.createTime,
                            subscriptionOptions: {
                              auth: arrayToBase64(oldDetails.auth),
                              p256dh: arrayToBase64(oldDetails.p256dh),
                              endpoint: oldDetails.endpoint,
                              swScope: oldDetails.swScope,
                              vapidKey: arrayToBase64(oldDetails.vapidKey)
                            }
                          };
                        } else if (db.oldVersion === 4) {
                          oldDetails = value;
                          tokenDetails = {
                            token: oldDetails.fcmToken,
                            createTime: oldDetails.createTime,
                            subscriptionOptions: {
                              auth: arrayToBase64(oldDetails.auth),
                              p256dh: arrayToBase64(oldDetails.p256dh),
                              endpoint: oldDetails.endpoint,
                              swScope: oldDetails.swScope,
                              vapidKey: arrayToBase64(oldDetails.vapidKey)
                            }
                          };
                        }

                        return [2
                        /*return*/
                        ];
                    }
                  });
                });
              })];

            case 3:
              db = _a.sent();
              db.close(); // Delete all old databases.

              return [4
              /*yield*/
              , Object(idb__WEBPACK_IMPORTED_MODULE_5__["deleteDb"])(OLD_DB_NAME)];

            case 4:
              // Delete all old databases.
              _a.sent();

              return [4
              /*yield*/
              , Object(idb__WEBPACK_IMPORTED_MODULE_5__["deleteDb"])('fcm_vapid_details_db')];

            case 5:
              _a.sent();

              return [4
              /*yield*/
              , Object(idb__WEBPACK_IMPORTED_MODULE_5__["deleteDb"])('undefined')];

            case 6:
              _a.sent();

              return [2
              /*return*/
              , checkTokenDetails(tokenDetails) ? tokenDetails : null];
          }
        });
      });
    }

    function checkTokenDetails(tokenDetails) {
      if (!tokenDetails || !tokenDetails.subscriptionOptions) {
        return false;
      }

      var subscriptionOptions = tokenDetails.subscriptionOptions;
      return typeof tokenDetails.createTime === 'number' && tokenDetails.createTime > 0 && typeof tokenDetails.token === 'string' && tokenDetails.token.length > 0 && typeof subscriptionOptions.auth === 'string' && subscriptionOptions.auth.length > 0 && typeof subscriptionOptions.p256dh === 'string' && subscriptionOptions.p256dh.length > 0 && typeof subscriptionOptions.endpoint === 'string' && subscriptionOptions.endpoint.length > 0 && typeof subscriptionOptions.swScope === 'string' && subscriptionOptions.swScope.length > 0 && typeof subscriptionOptions.vapidKey === 'string' && subscriptionOptions.vapidKey.length > 0;
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
    // Exported for tests.


    var DATABASE_NAME = 'firebase-messaging-database';
    var DATABASE_VERSION = 1;
    var OBJECT_STORE_NAME = 'firebase-messaging-store';
    var dbPromise = null;

    function getDbPromise() {
      if (!dbPromise) {
        dbPromise = Object(idb__WEBPACK_IMPORTED_MODULE_5__["openDb"])(DATABASE_NAME, DATABASE_VERSION, function (upgradeDb) {
          // We don't use 'break' in this switch statement, the fall-through
          // behavior is what we want, because if there are multiple versions between
          // the old version and the current version, we want ALL the migrations
          // that correspond to those versions to run, not only the last one.
          // eslint-disable-next-line default-case
          switch (upgradeDb.oldVersion) {
            case 0:
              upgradeDb.createObjectStore(OBJECT_STORE_NAME);
          }
        });
      }

      return dbPromise;
    }
    /** Gets record(s) from the objectStore that match the given key. */


    function dbGet(firebaseDependencies) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
        var key, db, tokenDetails, oldTokenDetails;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              key = getKey(firebaseDependencies);
              return [4
              /*yield*/
              , getDbPromise()];

            case 1:
              db = _a.sent();
              return [4
              /*yield*/
              , db.transaction(OBJECT_STORE_NAME).objectStore(OBJECT_STORE_NAME).get(key)];

            case 2:
              tokenDetails = _a.sent();
              if (!tokenDetails) return [3
              /*break*/
              , 3];
              return [2
              /*return*/
              , tokenDetails];

            case 3:
              return [4
              /*yield*/
              , migrateOldDatabase(firebaseDependencies.appConfig.senderId)];

            case 4:
              oldTokenDetails = _a.sent();
              if (!oldTokenDetails) return [3
              /*break*/
              , 6];
              return [4
              /*yield*/
              , dbSet(firebaseDependencies, oldTokenDetails)];

            case 5:
              _a.sent();

              return [2
              /*return*/
              , oldTokenDetails];

            case 6:
              return [2
              /*return*/
              ];
          }
        });
      });
    }
    /** Assigns or overwrites the record for the given key with the given value. */


    function dbSet(firebaseDependencies, tokenDetails) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
        var key, db, tx;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              key = getKey(firebaseDependencies);
              return [4
              /*yield*/
              , getDbPromise()];

            case 1:
              db = _a.sent();
              tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
              return [4
              /*yield*/
              , tx.objectStore(OBJECT_STORE_NAME).put(tokenDetails, key)];

            case 2:
              _a.sent();

              return [4
              /*yield*/
              , tx.complete];

            case 3:
              _a.sent();

              return [2
              /*return*/
              , tokenDetails];
          }
        });
      });
    }
    /** Removes record(s) from the objectStore that match the given key. */


    function dbRemove(firebaseDependencies) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
        var key, db, tx;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              key = getKey(firebaseDependencies);
              return [4
              /*yield*/
              , getDbPromise()];

            case 1:
              db = _a.sent();
              tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
              return [4
              /*yield*/
              , tx.objectStore(OBJECT_STORE_NAME)["delete"](key)];

            case 2:
              _a.sent();

              return [4
              /*yield*/
              , tx.complete];

            case 3:
              _a.sent();

              return [2
              /*return*/
              ];
          }
        });
      });
    }

    function getKey(_a) {
      var appConfig = _a.appConfig;
      return appConfig.appId;
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


    var DEFAULT_SW_PATH = '/firebase-messaging-sw.js';
    var DEFAULT_SW_SCOPE = '/firebase-cloud-messaging-push-scope';
    var DEFAULT_VAPID_KEY = 'BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4';
    var ENDPOINT = 'https://fcmregistrations.googleapis.com/v1';
    /** Key of FCM Payload in Notification's data field. */

    var FCM_MSG = 'FCM_MSG';
    var CONSOLE_CAMPAIGN_ID = 'google.c.a.c_id';
    var CONSOLE_CAMPAIGN_NAME = 'google.c.a.c_l';
    var CONSOLE_CAMPAIGN_TIME = 'google.c.a.ts';
    /** Set to '1' if Analytics is enabled for the campaign */

    var CONSOLE_CAMPAIGN_ANALYTICS_ENABLED = 'google.c.a.e';
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

    function requestGetToken(firebaseDependencies, subscriptionOptions) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
        var headers, body, subscribeOptions, responseData, response, err_1, message;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , getHeaders(firebaseDependencies)];

            case 1:
              headers = _a.sent();
              body = getBody(subscriptionOptions);
              subscribeOptions = {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(body)
              };
              _a.label = 2;

            case 2:
              _a.trys.push([2, 5,, 6]);

              return [4
              /*yield*/
              , fetch(getEndpoint(firebaseDependencies.appConfig), subscribeOptions)];

            case 3:
              response = _a.sent();
              return [4
              /*yield*/
              , response.json()];

            case 4:
              responseData = _a.sent();
              return [3
              /*break*/
              , 6];

            case 5:
              err_1 = _a.sent();
              throw ERROR_FACTORY.create("token-subscribe-failed"
              /* TOKEN_SUBSCRIBE_FAILED */
              , {
                errorInfo: err_1
              });

            case 6:
              if (responseData.error) {
                message = responseData.error.message;
                throw ERROR_FACTORY.create("token-subscribe-failed"
                /* TOKEN_SUBSCRIBE_FAILED */
                , {
                  errorInfo: message
                });
              }

              if (!responseData.token) {
                throw ERROR_FACTORY.create("token-subscribe-no-token"
                /* TOKEN_SUBSCRIBE_NO_TOKEN */
                );
              }

              return [2
              /*return*/
              , responseData.token];
          }
        });
      });
    }

    function requestUpdateToken(firebaseDependencies, tokenDetails) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
        var headers, body, updateOptions, responseData, response, err_2, message;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , getHeaders(firebaseDependencies)];

            case 1:
              headers = _a.sent();
              body = getBody(tokenDetails.subscriptionOptions);
              updateOptions = {
                method: 'PATCH',
                headers: headers,
                body: JSON.stringify(body)
              };
              _a.label = 2;

            case 2:
              _a.trys.push([2, 5,, 6]);

              return [4
              /*yield*/
              , fetch(getEndpoint(firebaseDependencies.appConfig) + "/" + tokenDetails.token, updateOptions)];

            case 3:
              response = _a.sent();
              return [4
              /*yield*/
              , response.json()];

            case 4:
              responseData = _a.sent();
              return [3
              /*break*/
              , 6];

            case 5:
              err_2 = _a.sent();
              throw ERROR_FACTORY.create("token-update-failed"
              /* TOKEN_UPDATE_FAILED */
              , {
                errorInfo: err_2
              });

            case 6:
              if (responseData.error) {
                message = responseData.error.message;
                throw ERROR_FACTORY.create("token-update-failed"
                /* TOKEN_UPDATE_FAILED */
                , {
                  errorInfo: message
                });
              }

              if (!responseData.token) {
                throw ERROR_FACTORY.create("token-update-no-token"
                /* TOKEN_UPDATE_NO_TOKEN */
                );
              }

              return [2
              /*return*/
              , responseData.token];
          }
        });
      });
    }

    function requestDeleteToken(firebaseDependencies, token) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
        var headers, unsubscribeOptions, response, responseData, message, err_3;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , getHeaders(firebaseDependencies)];

            case 1:
              headers = _a.sent();
              unsubscribeOptions = {
                method: 'DELETE',
                headers: headers
              };
              _a.label = 2;

            case 2:
              _a.trys.push([2, 5,, 6]);

              return [4
              /*yield*/
              , fetch(getEndpoint(firebaseDependencies.appConfig) + "/" + token, unsubscribeOptions)];

            case 3:
              response = _a.sent();
              return [4
              /*yield*/
              , response.json()];

            case 4:
              responseData = _a.sent();

              if (responseData.error) {
                message = responseData.error.message;
                throw ERROR_FACTORY.create("token-unsubscribe-failed"
                /* TOKEN_UNSUBSCRIBE_FAILED */
                , {
                  errorInfo: message
                });
              }

              return [3
              /*break*/
              , 6];

            case 5:
              err_3 = _a.sent();
              throw ERROR_FACTORY.create("token-unsubscribe-failed"
              /* TOKEN_UNSUBSCRIBE_FAILED */
              , {
                errorInfo: err_3
              });

            case 6:
              return [2
              /*return*/
              ];
          }
        });
      });
    }

    function getEndpoint(_a) {
      var projectId = _a.projectId;
      return ENDPOINT + "/projects/" + projectId + "/registrations";
    }

    function getHeaders(_a) {
      var appConfig = _a.appConfig,
          installations = _a.installations;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
        var authToken;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_b) {
          switch (_b.label) {
            case 0:
              return [4
              /*yield*/
              , installations.getToken()];

            case 1:
              authToken = _b.sent();
              return [2
              /*return*/
              , new Headers({
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'x-goog-api-key': appConfig.apiKey,
                'x-goog-firebase-installations-auth': "FIS " + authToken
              })];
          }
        });
      });
    }

    function getBody(_a) {
      var p256dh = _a.p256dh,
          auth = _a.auth,
          endpoint = _a.endpoint,
          vapidKey = _a.vapidKey;
      var body = {
        web: {
          endpoint: endpoint,
          auth: auth,
          p256dh: p256dh
        }
      };

      if (vapidKey !== DEFAULT_VAPID_KEY) {
        body.web.applicationPubKey = vapidKey;
      }

      return body;
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

    /** UpdateRegistration will be called once every week. */


    var TOKEN_EXPIRATION_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

    function getToken(firebaseDependencies, swRegistration, vapidKey) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
        var pushSubscription, tokenDetails, subscriptionOptions, e_1;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (Notification.permission !== 'granted') {
                throw ERROR_FACTORY.create("permission-blocked"
                /* PERMISSION_BLOCKED */
                );
              }

              return [4
              /*yield*/
              , getPushSubscription(swRegistration, vapidKey)];

            case 1:
              pushSubscription = _a.sent();
              return [4
              /*yield*/
              , dbGet(firebaseDependencies)];

            case 2:
              tokenDetails = _a.sent();
              subscriptionOptions = {
                vapidKey: vapidKey,
                swScope: swRegistration.scope,
                endpoint: pushSubscription.endpoint,
                auth: arrayToBase64(pushSubscription.getKey('auth')),
                p256dh: arrayToBase64(pushSubscription.getKey('p256dh'))
              };
              if (!!tokenDetails) return [3
              /*break*/
              , 3]; // No token, get a new one.

              return [2
              /*return*/
              , getNewToken(firebaseDependencies, subscriptionOptions)];

            case 3:
              if (!!isTokenValid(tokenDetails.subscriptionOptions, subscriptionOptions)) return [3
              /*break*/
              , 8];
              _a.label = 4;

            case 4:
              _a.trys.push([4, 6,, 7]);

              return [4
              /*yield*/
              , requestDeleteToken(firebaseDependencies, tokenDetails.token)];

            case 5:
              _a.sent();

              return [3
              /*break*/
              , 7];

            case 6:
              e_1 = _a.sent(); // Suppress errors because of #2364

              console.warn(e_1);
              return [3
              /*break*/
              , 7];

            case 7:
              return [2
              /*return*/
              , getNewToken(firebaseDependencies, subscriptionOptions)];

            case 8:
              if (Date.now() >= tokenDetails.createTime + TOKEN_EXPIRATION_MS) {
                // Weekly token refresh
                return [2
                /*return*/
                , updateToken({
                  token: tokenDetails.token,
                  createTime: Date.now(),
                  subscriptionOptions: subscriptionOptions
                }, firebaseDependencies, swRegistration)];
              } else {
                // Valid token, nothing to do.
                return [2
                /*return*/
                , tokenDetails.token];
              }

            case 9:
              return [2
              /*return*/
              ];
          }
        });
      });
    }
    /**
     * This method deletes the token from the database, unsubscribes the token from
     * FCM, and unregisters the push subscription if it exists.
     */


    function deleteToken(firebaseDependencies, swRegistration) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
        var tokenDetails, pushSubscription;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , dbGet(firebaseDependencies)];

            case 1:
              tokenDetails = _a.sent();
              if (!tokenDetails) return [3
              /*break*/
              , 4];
              return [4
              /*yield*/
              , requestDeleteToken(firebaseDependencies, tokenDetails.token)];

            case 2:
              _a.sent();

              return [4
              /*yield*/
              , dbRemove(firebaseDependencies)];

            case 3:
              _a.sent();

              _a.label = 4;

            case 4:
              return [4
              /*yield*/
              , swRegistration.pushManager.getSubscription()];

            case 5:
              pushSubscription = _a.sent();

              if (pushSubscription) {
                return [2
                /*return*/
                , pushSubscription.unsubscribe()];
              } // If there's no SW, consider it a success.


              return [2
              /*return*/
              , true];
          }
        });
      });
    }

    function updateToken(tokenDetails, firebaseDependencies, swRegistration) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
        var updatedToken, updatedTokenDetails, e_2;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 3,, 5]);

              return [4
              /*yield*/
              , requestUpdateToken(firebaseDependencies, tokenDetails)];

            case 1:
              updatedToken = _a.sent();
              updatedTokenDetails = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({
                token: updatedToken,
                createTime: Date.now()
              }, tokenDetails);
              return [4
              /*yield*/
              , dbSet(firebaseDependencies, updatedTokenDetails)];

            case 2:
              _a.sent();

              return [2
              /*return*/
              , updatedToken];

            case 3:
              e_2 = _a.sent();
              return [4
              /*yield*/
              , deleteToken(firebaseDependencies, swRegistration)];

            case 4:
              _a.sent();

              throw e_2;

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    }

    function getNewToken(firebaseDependencies, subscriptionOptions) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
        var token, tokenDetails;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , requestGetToken(firebaseDependencies, subscriptionOptions)];

            case 1:
              token = _a.sent();
              tokenDetails = {
                token: token,
                createTime: Date.now(),
                subscriptionOptions: subscriptionOptions
              };
              return [4
              /*yield*/
              , dbSet(firebaseDependencies, tokenDetails)];

            case 2:
              _a.sent();

              return [2
              /*return*/
              , tokenDetails.token];
          }
        });
      });
    }
    /**
     * Gets a PushSubscription for the current user.
     */


    function getPushSubscription(swRegistration, vapidKey) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
        var subscription;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , swRegistration.pushManager.getSubscription()];

            case 1:
              subscription = _a.sent();

              if (subscription) {
                return [2
                /*return*/
                , subscription];
              }

              return [2
              /*return*/
              , swRegistration.pushManager.subscribe({
                userVisibleOnly: true,
                // Chrome <= 75 doesn't support base64-encoded VAPID key. For backward compatibility, VAPID key
                // submitted to pushManager#subscribe must be of type Uint8Array.
                applicationServerKey: base64ToArray(vapidKey)
              })];
          }
        });
      });
    }
    /**
     * Checks if the saved tokenDetails object matches the configuration provided.
     */


    function isTokenValid(dbOptions, currentOptions) {
      var isVapidKeyEqual = currentOptions.vapidKey === dbOptions.vapidKey;
      var isEndpointEqual = currentOptions.endpoint === dbOptions.endpoint;
      var isAuthEqual = currentOptions.auth === dbOptions.auth;
      var isP256dhEqual = currentOptions.p256dh === dbOptions.p256dh;
      return isVapidKeyEqual && isEndpointEqual && isAuthEqual && isP256dhEqual;
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


    var MessageType;

    (function (MessageType) {
      MessageType["PUSH_RECEIVED"] = "push-received";
      MessageType["NOTIFICATION_CLICKED"] = "notification-clicked";
    })(MessageType || (MessageType = {}));
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


    function isConsoleMessage(data) {
      // This message has a campaign ID, meaning it was sent using the
      // Firebase Console.
      return typeof data === 'object' && !!data && CONSOLE_CAMPAIGN_ID in data;
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


    var WindowController =
    /** @class */
    function () {
      function WindowController(firebaseDependencies) {
        var _this = this;

        this.firebaseDependencies = firebaseDependencies;
        this.vapidKey = null;
        this.onMessageCallback = null;
        navigator.serviceWorker.addEventListener('message', function (e) {
          return _this.messageEventListener(e);
        });
      }

      Object.defineProperty(WindowController.prototype, "app", {
        get: function get() {
          return this.firebaseDependencies.app;
        },
        enumerable: true,
        configurable: true
      });

      WindowController.prototype.getToken = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
          var swRegistration;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                if (!this.vapidKey) {
                  this.vapidKey = DEFAULT_VAPID_KEY;
                }

                return [4
                /*yield*/
                , this.getServiceWorkerRegistration()];

              case 1:
                swRegistration = _a.sent();
                if (!(Notification.permission === 'default')) return [3
                /*break*/
                , 3]; // The user hasn't allowed or denied notifications yet. Ask them.

                return [4
                /*yield*/
                , Notification.requestPermission()];

              case 2:
                // The user hasn't allowed or denied notifications yet. Ask them.
                _a.sent();

                _a.label = 3;

              case 3:
                if (Notification.permission !== 'granted') {
                  throw ERROR_FACTORY.create("permission-blocked"
                  /* PERMISSION_BLOCKED */
                  );
                }

                return [2
                /*return*/
                , getToken(this.firebaseDependencies, swRegistration, this.vapidKey)];
            }
          });
        });
      };

      WindowController.prototype.deleteToken = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
          var swRegistration;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , this.getServiceWorkerRegistration()];

              case 1:
                swRegistration = _a.sent();
                return [2
                /*return*/
                , deleteToken(this.firebaseDependencies, swRegistration)];
            }
          });
        });
      };
      /**
       * Request permission if it is not currently granted.
       *
       * @return Resolves if the permission was granted, rejects otherwise.
       *
       * @deprecated Use Notification.requestPermission() instead.
       * https://developer.mozilla.org/en-US/docs/Web/API/Notification/requestPermission
       */


      WindowController.prototype.requestPermission = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
          var permissionResult;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                if (Notification.permission === 'granted') {
                  return [2
                  /*return*/
                  ];
                }

                return [4
                /*yield*/
                , Notification.requestPermission()];

              case 1:
                permissionResult = _a.sent();

                if (permissionResult === 'granted') {
                  return [2
                  /*return*/
                  ];
                } else if (permissionResult === 'denied') {
                  throw ERROR_FACTORY.create("permission-blocked"
                  /* PERMISSION_BLOCKED */
                  );
                } else {
                  throw ERROR_FACTORY.create("permission-default"
                  /* PERMISSION_DEFAULT */
                  );
                }

            }
          });
        });
      }; // TODO: Deprecate this and make VAPID key a parameter in getToken.


      WindowController.prototype.usePublicVapidKey = function (vapidKey) {
        if (this.vapidKey !== null) {
          throw ERROR_FACTORY.create("use-vapid-key-after-get-token"
          /* USE_VAPID_KEY_AFTER_GET_TOKEN */
          );
        }

        if (typeof vapidKey !== 'string' || vapidKey.length === 0) {
          throw ERROR_FACTORY.create("invalid-vapid-key"
          /* INVALID_VAPID_KEY */
          );
        }

        this.vapidKey = vapidKey;
      };

      WindowController.prototype.useServiceWorker = function (swRegistration) {
        if (!(swRegistration instanceof ServiceWorkerRegistration)) {
          throw ERROR_FACTORY.create("invalid-sw-registration"
          /* INVALID_SW_REGISTRATION */
          );
        }

        if (this.swRegistration) {
          throw ERROR_FACTORY.create("use-sw-after-get-token"
          /* USE_SW_AFTER_GET_TOKEN */
          );
        }

        this.swRegistration = swRegistration;
      };
      /**
       * @param nextOrObserver An observer object or a function triggered on
       * message.
       * @return The unsubscribe function for the observer.
       */
      // TODO: Simplify this to only accept a function and not an Observer.


      WindowController.prototype.onMessage = function (nextOrObserver) {
        var _this = this;

        this.onMessageCallback = typeof nextOrObserver === 'function' ? nextOrObserver : nextOrObserver.next;
        return function () {
          _this.onMessageCallback = null;
        };
      };

      WindowController.prototype.setBackgroundMessageHandler = function () {
        throw ERROR_FACTORY.create("only-available-in-sw"
        /* AVAILABLE_IN_SW */
        );
      }; // Unimplemented


      WindowController.prototype.onTokenRefresh = function () {
        return function () {};
      };
      /**
       * Creates or updates the default service worker registration.
       * @return The service worker registration to be used for the push service.
       */


      WindowController.prototype.getServiceWorkerRegistration = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
          var _a, e_1;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_b) {
            switch (_b.label) {
              case 0:
                if (!!this.swRegistration) return [3
                /*break*/
                , 4];
                _b.label = 1;

              case 1:
                _b.trys.push([1, 3,, 4]);

                _a = this;
                return [4
                /*yield*/
                , navigator.serviceWorker.register(DEFAULT_SW_PATH, {
                  scope: DEFAULT_SW_SCOPE
                })];

              case 2:
                _a.swRegistration = _b.sent(); // The timing when browser updates sw when sw has an update is unreliable by my experiment.
                // It leads to version conflict when the SDK upgrades to a newer version in the main page, but
                // sw is stuck with the old version. For example, https://github.com/firebase/firebase-js-sdk/issues/2590
                // The following line reliably updates sw if there was an update.

                this.swRegistration.update()["catch"](function () {
                  /* it is non blocking and we don't care if it failed */
                });
                return [3
                /*break*/
                , 4];

              case 3:
                e_1 = _b.sent();
                throw ERROR_FACTORY.create("failed-service-worker-registration"
                /* FAILED_DEFAULT_REGISTRATION */
                , {
                  browserErrorMessage: e_1.message
                });

              case 4:
                return [2
                /*return*/
                , this.swRegistration];
            }
          });
        });
      };

      WindowController.prototype.messageEventListener = function (event) {
        var _a;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
          var _b, type, payload, data;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_c) {
            switch (_c.label) {
              case 0:
                if (!((_a = event.data) === null || _a === void 0 ? void 0 : _a.firebaseMessaging)) {
                  // Not a message from FCM
                  return [2
                  /*return*/
                  ];
                }

                _b = event.data.firebaseMessaging, type = _b.type, payload = _b.payload;

                if (this.onMessageCallback && type === MessageType.PUSH_RECEIVED) {
                  this.onMessageCallback(payload);
                }

                data = payload.data;
                if (!(isConsoleMessage(data) && data[CONSOLE_CAMPAIGN_ANALYTICS_ENABLED] === '1')) return [3
                /*break*/
                , 2]; // Analytics is enabled on this message, so we should log it.

                return [4
                /*yield*/
                , this.logEvent(type, data)];

              case 1:
                // Analytics is enabled on this message, so we should log it.
                _c.sent();

                _c.label = 2;

              case 2:
                return [2
                /*return*/
                ];
            }
          });
        });
      };

      WindowController.prototype.logEvent = function (messageType, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
          var eventType, analytics;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                eventType = getEventType(messageType);
                return [4
                /*yield*/
                , this.firebaseDependencies.analyticsProvider.get()];

              case 1:
                analytics = _a.sent();
                analytics.logEvent(eventType, {
                  /* eslint-disable camelcase */
                  message_id: data[CONSOLE_CAMPAIGN_ID],
                  message_name: data[CONSOLE_CAMPAIGN_NAME],
                  message_time: data[CONSOLE_CAMPAIGN_TIME],
                  message_device_time: Math.floor(Date.now() / 1000)
                  /* eslint-enable camelcase */

                });
                return [2
                /*return*/
                ];
            }
          });
        });
      };

      return WindowController;
    }();

    function getEventType(messageType) {
      switch (messageType) {
        case MessageType.NOTIFICATION_CLICKED:
          return 'notification_open';

        case MessageType.PUSH_RECEIVED:
          return 'notification_foreground';

        default:
          throw new Error();
      }
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

    /** Returns a promise that resolves after given time passes. */


    function sleep(ms) {
      return new Promise(function (resolve) {
        setTimeout(resolve, ms);
      });
    }
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


    var SwController =
    /** @class */
    function () {
      function SwController(firebaseDependencies) {
        var _this = this;

        this.firebaseDependencies = firebaseDependencies;
        this.vapidKey = null;
        this.bgMessageHandler = null;
        self.addEventListener('push', function (e) {
          e.waitUntil(_this.onPush(e));
        });
        self.addEventListener('pushsubscriptionchange', function (e) {
          e.waitUntil(_this.onSubChange(e));
        });
        self.addEventListener('notificationclick', function (e) {
          e.waitUntil(_this.onNotificationClick(e));
        });
      }

      Object.defineProperty(SwController.prototype, "app", {
        get: function get() {
          return this.firebaseDependencies.app;
        },
        enumerable: true,
        configurable: true
      });
      /**
       * Calling setBackgroundMessageHandler will opt in to some specific
       * behaviours.
       * 1.) If a notification doesn't need to be shown due to a window already
       * being visible, then push messages will be sent to the page.
       * 2.) If a notification needs to be shown, and the message contains no
       * notification data this method will be called
       * and the promise it returns will be passed to event.waitUntil.
       * If you do not set this callback then all push messages will let and the
       * developer can handle them in a their own 'push' event callback
       *
       * @param callback The callback to be called when a push message is received
       * and a notification must be shown. The callback will be given the data from
       * the push message.
       */

      SwController.prototype.setBackgroundMessageHandler = function (callback) {
        if (!callback || typeof callback !== 'function') {
          throw ERROR_FACTORY.create("invalid-bg-handler"
          /* INVALID_BG_HANDLER */
          );
        }

        this.bgMessageHandler = callback;
      }; // TODO: Remove getToken from SW Controller.
      // Calling this from an old SW can cause all kinds of trouble.


      SwController.prototype.getToken = function () {
        var _a, _b;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
          var tokenDetails;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_c) {
            switch (_c.label) {
              case 0:
                if (!!this.vapidKey) return [3
                /*break*/
                , 2];
                return [4
                /*yield*/
                , dbGet(this.firebaseDependencies)];

              case 1:
                tokenDetails = _c.sent();
                this.vapidKey = (_b = (_a = tokenDetails === null || tokenDetails === void 0 ? void 0 : tokenDetails.subscriptionOptions) === null || _a === void 0 ? void 0 : _a.vapidKey) !== null && _b !== void 0 ? _b : DEFAULT_VAPID_KEY;
                _c.label = 2;

              case 2:
                return [2
                /*return*/
                , getToken(this.firebaseDependencies, self.registration, this.vapidKey)];
            }
          });
        });
      }; // TODO: Remove deleteToken from SW Controller.
      // Calling this from an old SW can cause all kinds of trouble.


      SwController.prototype.deleteToken = function () {
        return deleteToken(this.firebaseDependencies, self.registration);
      };

      SwController.prototype.requestPermission = function () {
        throw ERROR_FACTORY.create("only-available-in-window"
        /* AVAILABLE_IN_WINDOW */
        );
      }; // TODO: Deprecate this and make VAPID key a parameter in getToken.
      // TODO: Remove this together with getToken from SW Controller.


      SwController.prototype.usePublicVapidKey = function (vapidKey) {
        if (this.vapidKey !== null) {
          throw ERROR_FACTORY.create("use-vapid-key-after-get-token"
          /* USE_VAPID_KEY_AFTER_GET_TOKEN */
          );
        }

        if (typeof vapidKey !== 'string' || vapidKey.length === 0) {
          throw ERROR_FACTORY.create("invalid-vapid-key"
          /* INVALID_VAPID_KEY */
          );
        }

        this.vapidKey = vapidKey;
      };

      SwController.prototype.useServiceWorker = function () {
        throw ERROR_FACTORY.create("only-available-in-window"
        /* AVAILABLE_IN_WINDOW */
        );
      };

      SwController.prototype.onMessage = function () {
        throw ERROR_FACTORY.create("only-available-in-window"
        /* AVAILABLE_IN_WINDOW */
        );
      };

      SwController.prototype.onTokenRefresh = function () {
        throw ERROR_FACTORY.create("only-available-in-window"
        /* AVAILABLE_IN_WINDOW */
        );
      };
      /**
       * A handler for push events that shows notifications based on the content of
       * the payload.
       *
       * The payload must be a JSON-encoded Object with a `notification` key. The
       * value of the `notification` property will be used as the NotificationOptions
       * object passed to showNotification. Additionally, the `title` property of the
       * notification object will be used as the title.
       *
       * If there is no notification data in the payload then no notification will be
       * shown.
       */


      SwController.prototype.onPush = function (event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
          var payload, clientList, notificationDetails;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                payload = getMessagePayload(event);

                if (!payload) {
                  return [2
                  /*return*/
                  ];
                }

                return [4
                /*yield*/
                , getClientList()];

              case 1:
                clientList = _a.sent();

                if (hasVisibleClients(clientList)) {
                  // App in foreground. Send to page.
                  return [2
                  /*return*/
                  , sendMessageToWindowClients(clientList, payload)];
                }

                notificationDetails = getNotificationData(payload);
                if (!notificationDetails) return [3
                /*break*/
                , 3];
                return [4
                /*yield*/
                , showNotification(notificationDetails)];

              case 2:
                _a.sent();

                return [3
                /*break*/
                , 5];

              case 3:
                if (!this.bgMessageHandler) return [3
                /*break*/
                , 5];
                return [4
                /*yield*/
                , this.bgMessageHandler(payload)];

              case 4:
                _a.sent();

                _a.label = 5;

              case 5:
                return [2
                /*return*/
                ];
            }
          });
        });
      };

      SwController.prototype.onSubChange = function (event) {
        var _a, _b;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
          var newSubscription, tokenDetails;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_c) {
            switch (_c.label) {
              case 0:
                newSubscription = event.newSubscription;
                if (!!newSubscription) return [3
                /*break*/
                , 2]; // Subscription revoked, delete token

                return [4
                /*yield*/
                , deleteToken(this.firebaseDependencies, self.registration)];

              case 1:
                // Subscription revoked, delete token
                _c.sent();

                return [2
                /*return*/
                ];

              case 2:
                return [4
                /*yield*/
                , dbGet(this.firebaseDependencies)];

              case 3:
                tokenDetails = _c.sent();
                return [4
                /*yield*/
                , deleteToken(this.firebaseDependencies, self.registration)];

              case 4:
                _c.sent();

                return [4
                /*yield*/
                , getToken(this.firebaseDependencies, self.registration, (_b = (_a = tokenDetails === null || tokenDetails === void 0 ? void 0 : tokenDetails.subscriptionOptions) === null || _a === void 0 ? void 0 : _a.vapidKey) !== null && _b !== void 0 ? _b : DEFAULT_VAPID_KEY)];

              case 5:
                _c.sent();

                return [2
                /*return*/
                ];
            }
          });
        });
      };

      SwController.prototype.onNotificationClick = function (event) {
        var _a, _b;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
          var payload, link, client, message;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_c) {
            switch (_c.label) {
              case 0:
                payload = (_b = (_a = event.notification) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b[FCM_MSG];

                if (!payload) {
                  // Not an FCM notification, do nothing.
                  return [2
                  /*return*/
                  ];
                } else if (event.action) {
                  // User clicked on an action button.
                  // This will allow devs to act on action button clicks by using a custom
                  // onNotificationClick listener that they define.
                  return [2
                  /*return*/
                  ];
                } // Prevent other listeners from receiving the event


                event.stopImmediatePropagation();
                event.notification.close();
                link = getLink(payload);

                if (!link) {
                  return [2
                  /*return*/
                  ];
                }

                return [4
                /*yield*/
                , getWindowClient(link)];

              case 1:
                client = _c.sent();
                if (!!client) return [3
                /*break*/
                , 4];
                return [4
                /*yield*/
                , self.clients.openWindow(link)];

              case 2:
                // Unable to find window client so need to open one.
                // This also focuses the opened client.
                client = _c.sent(); // Wait three seconds for the client to initialize and set up the message
                // handler so that it can receive the message.

                return [4
                /*yield*/
                , sleep(3000)];

              case 3:
                // Wait three seconds for the client to initialize and set up the message
                // handler so that it can receive the message.
                _c.sent();

                return [3
                /*break*/
                , 6];

              case 4:
                return [4
                /*yield*/
                , client.focus()];

              case 5:
                client = _c.sent();
                _c.label = 6;

              case 6:
                if (!client) {
                  // Window Client will not be returned if it's for a third party origin.
                  return [2
                  /*return*/
                  ];
                }

                message = createNewMessage(MessageType.NOTIFICATION_CLICKED, payload);
                return [2
                /*return*/
                , client.postMessage(message)];
            }
          });
        });
      };

      return SwController;
    }();

    function getMessagePayload(_a) {
      var data = _a.data;

      if (!data) {
        return null;
      }

      try {
        return data.json();
      } catch (err) {
        // Not JSON so not an FCM message.
        return null;
      }
    }

    function getNotificationData(payload) {
      var _a;

      if (!payload || typeof payload.notification !== 'object') {
        return;
      }

      var notificationInformation = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, payload.notification); // Put the message payload under FCM_MSG name so we can identify the
      // notification as being an FCM notification vs a notification from
      // somewhere else (i.e. normal web push or developer generated
      // notification).

      notificationInformation.data = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, payload.notification.data), (_a = {}, _a[FCM_MSG] = payload, _a));
      return notificationInformation;
    }
    /**
     * @param url The URL to look for when focusing a client.
     * @return Returns an existing window client or a newly opened WindowClient.
     */


    function getWindowClient(url) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
        var parsedURL, clientList, clientList_1, clientList_1_1, client, parsedClientUrl;

        var e_1, _a;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_b) {
          switch (_b.label) {
            case 0:
              parsedURL = new URL(url, self.location.href).href;
              return [4
              /*yield*/
              , getClientList()];

            case 1:
              clientList = _b.sent();

              try {
                for (clientList_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(clientList), clientList_1_1 = clientList_1.next(); !clientList_1_1.done; clientList_1_1 = clientList_1.next()) {
                  client = clientList_1_1.value;
                  parsedClientUrl = new URL(client.url, self.location.href).href;

                  if (parsedClientUrl === parsedURL) {
                    return [2
                    /*return*/
                    , client];
                  }
                }
              } catch (e_1_1) {
                e_1 = {
                  error: e_1_1
                };
              } finally {
                try {
                  if (clientList_1_1 && !clientList_1_1.done && (_a = clientList_1["return"])) _a.call(clientList_1);
                } finally {
                  if (e_1) throw e_1.error;
                }
              }

              return [2
              /*return*/
              , null];
          }
        });
      });
    }
    /**
     * @returns If there is currently a visible WindowClient, this method will
     * resolve to true, otherwise false.
     */


    function hasVisibleClients(clientList) {
      return clientList.some(function (client) {
        return client.visibilityState === 'visible' && // Ignore chrome-extension clients as that matches the background pages
        // of extensions, which are always considered visible for some reason.
        !client.url.startsWith('chrome-extension://');
      });
    }
    /**
     * @param payload The data from the push event that should be sent to all
     * available pages.
     * @returns Returns a promise that resolves once the message has been sent to
     * all WindowClients.
     */


    function sendMessageToWindowClients(clientList, payload) {
      var e_2, _a;

      var message = createNewMessage(MessageType.PUSH_RECEIVED, payload);

      try {
        for (var clientList_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(clientList), clientList_2_1 = clientList_2.next(); !clientList_2_1.done; clientList_2_1 = clientList_2.next()) {
          var client = clientList_2_1.value;
          client.postMessage(message);
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (clientList_2_1 && !clientList_2_1.done && (_a = clientList_2["return"])) _a.call(clientList_2);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
    }

    function getClientList() {
      return self.clients.matchAll({
        type: 'window',
        includeUncontrolled: true // TS doesn't know that "type: 'window'" means it'll return WindowClient[]

      });
    }

    function createNewMessage(type, payload) {
      return {
        firebaseMessaging: {
          type: type,
          payload: payload
        }
      };
    }

    function showNotification(details) {
      var _a;

      var title = (_a = details.title) !== null && _a !== void 0 ? _a : '';
      var actions = details.actions; // Note: Firefox does not support the maxActions property.
      // https://developer.mozilla.org/en-US/docs/Web/API/notification/maxActions

      var maxActions = Notification.maxActions;

      if (actions && maxActions && actions.length > maxActions) {
        console.warn("This browser only supports " + maxActions + " actions. The remaining actions will not be displayed.");
      }

      return self.registration.showNotification(title, details);
    }

    function getLink(payload) {
      var _a, _b, _c; // eslint-disable-next-line camelcase


      var link = (_b = (_a = payload.fcmOptions) === null || _a === void 0 ? void 0 : _a.link) !== null && _b !== void 0 ? _b : (_c = payload.notification) === null || _c === void 0 ? void 0 : _c.click_action;

      if (link) {
        return link;
      }

      if (isConsoleMessage(payload.data)) {
        // Notification created in the Firebase Console. Redirect to origin.
        return self.location.origin;
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


    var MESSAGING_NAME = 'messaging';

    function factoryMethod(container) {
      // Dependencies.
      var app = container.getProvider('app').getImmediate();
      var appConfig = extractAppConfig(app);
      var installations = container.getProvider('installations').getImmediate();
      var analyticsProvider = container.getProvider('analytics-internal');
      var firebaseDependencies = {
        app: app,
        appConfig: appConfig,
        installations: installations,
        analyticsProvider: analyticsProvider
      };

      if (!isSupported()) {
        throw ERROR_FACTORY.create("unsupported-browser"
        /* UNSUPPORTED_BROWSER */
        );
      }

      if (self && 'ServiceWorkerGlobalScope' in self) {
        // Running in ServiceWorker context
        return new SwController(firebaseDependencies);
      } else {
        // Assume we are in the window context.
        return new WindowController(firebaseDependencies);
      }
    }

    var NAMESPACE_EXPORTS = {
      isSupported: isSupported
    };

    _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_2__["Component"](MESSAGING_NAME, factoryMethod, "PUBLIC"
    /* PUBLIC */
    ).setServiceProps(NAMESPACE_EXPORTS));

    function isSupported() {
      if (self && 'ServiceWorkerGlobalScope' in self) {
        // Running in ServiceWorker context
        return isSWControllerSupported();
      } else {
        // Assume we are in the window context.
        return isWindowControllerSupported();
      }
    }
    /**
     * Checks to see if the required APIs exist.
     */


    function isWindowControllerSupported() {
      return 'indexedDB' in window && indexedDB !== null && navigator.cookieEnabled && 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window && 'fetch' in window && ServiceWorkerRegistration.prototype.hasOwnProperty('showNotification') && PushSubscription.prototype.hasOwnProperty('getKey');
    }
    /**
     * Checks to see if the required APIs exist within SW Context.
     */


    function isSWControllerSupported() {
      return 'indexedDB' in self && indexedDB !== null && 'PushManager' in self && 'Notification' in self && ServiceWorkerRegistration.prototype.hasOwnProperty('showNotification') && PushSubscription.prototype.hasOwnProperty('getKey');
    } //# sourceMappingURL=index.esm.js.map

    /***/

  },

  /***/
  "./node_modules/idb/build/idb.js":
  /*!***************************************!*\
    !*** ./node_modules/idb/build/idb.js ***!
    \***************************************/

  /*! no static exports found */

  /***/
  function node_modulesIdbBuildIdbJs(module, exports, __webpack_require__) {
    (function (global, factory) {
      true ? factory(exports) : undefined;
    })(this, function (exports) {
      'use strict';

      function toArray(arr) {
        return Array.prototype.slice.call(arr);
      }

      function promisifyRequest(request) {
        return new Promise(function (resolve, reject) {
          request.onsuccess = function () {
            resolve(request.result);
          };

          request.onerror = function () {
            reject(request.error);
          };
        });
      }

      function promisifyRequestCall(obj, method, args) {
        var request;
        var p = new Promise(function (resolve, reject) {
          request = obj[method].apply(obj, args);
          promisifyRequest(request).then(resolve, reject);
        });
        p.request = request;
        return p;
      }

      function promisifyCursorRequestCall(obj, method, args) {
        var p = promisifyRequestCall(obj, method, args);
        return p.then(function (value) {
          if (!value) return;
          return new Cursor(value, p.request);
        });
      }

      function proxyProperties(ProxyClass, targetProp, properties) {
        properties.forEach(function (prop) {
          Object.defineProperty(ProxyClass.prototype, prop, {
            get: function get() {
              return this[targetProp][prop];
            },
            set: function set(val) {
              this[targetProp][prop] = val;
            }
          });
        });
      }

      function proxyRequestMethods(ProxyClass, targetProp, Constructor, properties) {
        properties.forEach(function (prop) {
          if (!(prop in Constructor.prototype)) return;

          ProxyClass.prototype[prop] = function () {
            return promisifyRequestCall(this[targetProp], prop, arguments);
          };
        });
      }

      function proxyMethods(ProxyClass, targetProp, Constructor, properties) {
        properties.forEach(function (prop) {
          if (!(prop in Constructor.prototype)) return;

          ProxyClass.prototype[prop] = function () {
            return this[targetProp][prop].apply(this[targetProp], arguments);
          };
        });
      }

      function proxyCursorRequestMethods(ProxyClass, targetProp, Constructor, properties) {
        properties.forEach(function (prop) {
          if (!(prop in Constructor.prototype)) return;

          ProxyClass.prototype[prop] = function () {
            return promisifyCursorRequestCall(this[targetProp], prop, arguments);
          };
        });
      }

      function Index(index) {
        this._index = index;
      }

      proxyProperties(Index, '_index', ['name', 'keyPath', 'multiEntry', 'unique']);
      proxyRequestMethods(Index, '_index', IDBIndex, ['get', 'getKey', 'getAll', 'getAllKeys', 'count']);
      proxyCursorRequestMethods(Index, '_index', IDBIndex, ['openCursor', 'openKeyCursor']);

      function Cursor(cursor, request) {
        this._cursor = cursor;
        this._request = request;
      }

      proxyProperties(Cursor, '_cursor', ['direction', 'key', 'primaryKey', 'value']);
      proxyRequestMethods(Cursor, '_cursor', IDBCursor, ['update', 'delete']); // proxy 'next' methods

      ['advance', 'continue', 'continuePrimaryKey'].forEach(function (methodName) {
        if (!(methodName in IDBCursor.prototype)) return;

        Cursor.prototype[methodName] = function () {
          var cursor = this;
          var args = arguments;
          return Promise.resolve().then(function () {
            cursor._cursor[methodName].apply(cursor._cursor, args);

            return promisifyRequest(cursor._request).then(function (value) {
              if (!value) return;
              return new Cursor(value, cursor._request);
            });
          });
        };
      });

      function ObjectStore(store) {
        this._store = store;
      }

      ObjectStore.prototype.createIndex = function () {
        return new Index(this._store.createIndex.apply(this._store, arguments));
      };

      ObjectStore.prototype.index = function () {
        return new Index(this._store.index.apply(this._store, arguments));
      };

      proxyProperties(ObjectStore, '_store', ['name', 'keyPath', 'indexNames', 'autoIncrement']);
      proxyRequestMethods(ObjectStore, '_store', IDBObjectStore, ['put', 'add', 'delete', 'clear', 'get', 'getAll', 'getKey', 'getAllKeys', 'count']);
      proxyCursorRequestMethods(ObjectStore, '_store', IDBObjectStore, ['openCursor', 'openKeyCursor']);
      proxyMethods(ObjectStore, '_store', IDBObjectStore, ['deleteIndex']);

      function Transaction(idbTransaction) {
        this._tx = idbTransaction;
        this.complete = new Promise(function (resolve, reject) {
          idbTransaction.oncomplete = function () {
            resolve();
          };

          idbTransaction.onerror = function () {
            reject(idbTransaction.error);
          };

          idbTransaction.onabort = function () {
            reject(idbTransaction.error);
          };
        });
      }

      Transaction.prototype.objectStore = function () {
        return new ObjectStore(this._tx.objectStore.apply(this._tx, arguments));
      };

      proxyProperties(Transaction, '_tx', ['objectStoreNames', 'mode']);
      proxyMethods(Transaction, '_tx', IDBTransaction, ['abort']);

      function UpgradeDB(db, oldVersion, transaction) {
        this._db = db;
        this.oldVersion = oldVersion;
        this.transaction = new Transaction(transaction);
      }

      UpgradeDB.prototype.createObjectStore = function () {
        return new ObjectStore(this._db.createObjectStore.apply(this._db, arguments));
      };

      proxyProperties(UpgradeDB, '_db', ['name', 'version', 'objectStoreNames']);
      proxyMethods(UpgradeDB, '_db', IDBDatabase, ['deleteObjectStore', 'close']);

      function DB(db) {
        this._db = db;
      }

      DB.prototype.transaction = function () {
        return new Transaction(this._db.transaction.apply(this._db, arguments));
      };

      proxyProperties(DB, '_db', ['name', 'version', 'objectStoreNames']);
      proxyMethods(DB, '_db', IDBDatabase, ['close']); // Add cursor iterators
      // TODO: remove this once browsers do the right thing with promises

      ['openCursor', 'openKeyCursor'].forEach(function (funcName) {
        [ObjectStore, Index].forEach(function (Constructor) {
          // Don't create iterateKeyCursor if openKeyCursor doesn't exist.
          if (!(funcName in Constructor.prototype)) return;

          Constructor.prototype[funcName.replace('open', 'iterate')] = function () {
            var args = toArray(arguments);
            var callback = args[args.length - 1];
            var nativeObject = this._store || this._index;
            var request = nativeObject[funcName].apply(nativeObject, args.slice(0, -1));

            request.onsuccess = function () {
              callback(request.result);
            };
          };
        });
      }); // polyfill getAll

      [Index, ObjectStore].forEach(function (Constructor) {
        if (Constructor.prototype.getAll) return;

        Constructor.prototype.getAll = function (query, count) {
          var instance = this;
          var items = [];
          return new Promise(function (resolve) {
            instance.iterateCursor(query, function (cursor) {
              if (!cursor) {
                resolve(items);
                return;
              }

              items.push(cursor.value);

              if (count !== undefined && items.length == count) {
                resolve(items);
                return;
              }

              cursor["continue"]();
            });
          });
        };
      });

      function openDb(name, version, upgradeCallback) {
        var p = promisifyRequestCall(indexedDB, 'open', [name, version]);
        var request = p.request;

        if (request) {
          request.onupgradeneeded = function (event) {
            if (upgradeCallback) {
              upgradeCallback(new UpgradeDB(request.result, event.oldVersion, request.transaction));
            }
          };
        }

        return p.then(function (db) {
          return new DB(db);
        });
      }

      function deleteDb(name) {
        return promisifyRequestCall(indexedDB, 'deleteDatabase', [name]);
      }

      exports.openDb = openDb;
      exports.deleteDb = deleteDb;
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
    });
    /***/

  }
}]);
//# sourceMappingURL=default~firebase-messaging~login-login-module~signup-signup-module~student-ec-form-ec-form-module~st~88bf8aaa-es5.js.map