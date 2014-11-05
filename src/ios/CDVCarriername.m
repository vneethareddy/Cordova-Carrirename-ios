//
//  CarrierPlugin.m
//  Stevens
//
//  Created by Admin on 11/5/14.
//
//

#import "CDVCarriername.h"
#import <CoreTelephony/CTCarrier.h>
#import <CoreTelephony/CTTelephonyNetworkInfo.h>

#import <Cordova/CDV.h>

@implementation CDVCarriername






- (void)getCarrierName:(CDVInvokedUrlCommand*)command
{
    NSDictionary* getCarrierNameProperties = [self getCarrierNameProperties];
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsDictionary:getCarrierNameProperties];
    
    /* Settings.plist
     * Read the optional Settings.plist file and push these user-defined settings down into the web application.
     * This can be useful for supplying build-time configuration variables down to the app to change its behavior,
     * such as specifying Full / Lite version, or localization (English vs German, for instance).
     */
    // TODO: turn this into an iOS only plugin
    NSDictionary* temp = [CDVViewController getBundlePlist:@"CarrierSettings"];
    
    if ([temp respondsToSelector:@selector(JSONString)]) {
          NSString* js = [NSString stringWithFormat:@"window.Settings = %@;", [temp JSONString]];
        [self.commandDelegate evalJs:js];
    }
    
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (NSDictionary*)getCarrierNameProperties
{
    CTTelephonyNetworkInfo *networkInfo = [[CTTelephonyNetworkInfo alloc] init];
    CTCarrier *carrier = [networkInfo subscriberCellularProvider];
    NSMutableDictionary* devProps = [NSMutableDictionary dictionaryWithCapacity:3];
    
    [devProps setObject:[carrier carrierName] forKey:@"carriername"];
     [devProps setObject:[carrier mobileCountryCode] forKey:@"mcc"];
    [devProps setObject:[carrier mobileNetworkCode] forKey:@"mnc"];
    
    NSDictionary* devReturn = [NSDictionary dictionaryWithDictionary:devProps];
    return devReturn;
}


@end
