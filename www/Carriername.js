cordova.define("CarrierName.CarrierName", function(require, exports, module) {
               
               var argscheck = require('cordova/argscheck'),
               channel = require('cordova/channel'),
               utils = require('cordova/utils'),
               exec = require('cordova/exec'),
               cordova = require('cordova');
               
               channel.createSticky('onCordovaInfoReady');
               // Tell cordova channel to wait on the CordovaInfoReady event
               channel.waitForInitialization('onCordovaInfoReady');
   
               
               function CarrierName() {
               this.available = false;
               this.carriername = null;
               this.mcc = null;
               this.mnc = null;
               
               var me = this;
               
               channel.onCordovaReady.subscribe(function() {
                                                me.getInfo(function(info) {
                                                           //ignoring info.cordova returning from native, we should use value from cordova.version defined in cordova.js
                                                           //TODO: CB-5105 native implementations should not return info.cordova
                                                           var buildLabel = cordova.version;
                                                           me.available = true;
                                                           me.carriername = info.carriername;
                                                           me.mcc = info.mcc;
                                                           me.mnc = info.mnc;
                                                             channel.onCordovaInfoReady.fire();
                                                           },function(e) {
                                                           me.available = false;
                                                           utils.alert("[ERROR] Error initializing Cordova: " + e);
                                                           });
                                                });
               }
               

               CarrierName.prototype.getInfo = function(successCallback, errorCallback) {
               argscheck.checkArgs('fF', 'CarrierName.getInfo', arguments);
               exec(successCallback, errorCallback, "CarrierName", "getCarrierName", []);
               };
               
               module.exports = new CarrierName();
               
               });
