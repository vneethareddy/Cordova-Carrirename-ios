// cordova.define("Carriername.Carriername", function(require, exports, module) {   
               
               var exec = require('cordova/exec');

         
              
               
//               Carriername.prototype.getCarrierInfo = function(successCallback, errorCallback) {
//                exec(successCallback, errorCallback, "Carriername", "getCarrierName", []);
//               };
//               };
               
               
               var Carriername = {
               getCarrierName:function() {
               exec(null, null, "Carriername", "getCarrierName", []);
               }
               
               };
               
               
              module.exports = new Carriername();

});
