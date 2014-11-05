/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

exports.defineAutoTests = function() {
  describe('Carriername Information (window.carriername)', function () {
    it("should exist", function() {
      expect(window.carriername).toBeDefined();
    });

    it("should contain a platform specification that is a string", function() {
      expect(window.device.mcc).toBeDefined();
      expect((new String(window.device.mcc)).length > 0).toBe(true);
    });

    it("should contain a version specification that is a string", function() {
      expect(window.device.mnc).toBeDefined();
      expect((new String(window.device.mnc)).length > 0).toBe(true);
    });

       });
};

exports.defineManualTests = function(contentEl, createActionButton) {
  var logMessage = function (message, color) {
        var log = document.getElementById('info');
        var logLine = document.createElement('div');
        if (color) {
            logLine.style.color = color;
        }
        logLine.innerHTML = message;
        log.appendChild(logLine);
    }

    var clearLog = function () {
        var log = document.getElementById('info');
        log.innerHTML = '';
    }

    var device_tests = '<h3>Press Dump Device button to get device information</h3>' +
        '<div id="dump_device"></div>' +
        'Expected result: Status box will get updated with device info. (i.e. platform, version, uuid, model, etc)';

    contentEl.innerHTML = '<div id="info"></div>' + device_tests;

    createActionButton('Dump device', function() {
      clearLog();
      logMessage(JSON.stringify(window.device, null, '\t'));
    }, "dump_device");
};
