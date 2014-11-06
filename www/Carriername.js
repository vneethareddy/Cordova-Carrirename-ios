
cordova.define("Cordova-Carrirename-ios.DeviceInformation", function(require, exports, module) { var DeviceInformationLoader = function (require, exports, module) {
               var exec = require("cordova/exec");
               
               function DeviceInformation () {}
               
               DeviceInformation.prototype.get = function(successCallback, errorCallback) {
               exec(successCallback, errorCallback, "Carriername", "get", []);
               };
               
               var deviceInformation = new DeviceInformation();
               module.exports = deviceInformation;
               };
               
               DeviceInformationLoader(require, exports, module);
               
               cordova.define("cordova/plugin/DeviceInformation", DeviceInformationLoader);
               
               
               
               
               });
