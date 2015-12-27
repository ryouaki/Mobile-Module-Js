
#import "CDVCustomPlugin.h"
#import <Cordova/CDVViewController.h>

@implementation CDVCustomPlugin

- (void)talkWithNative:(CDVInvokedUrlCommand*)command
{
    NSString* param = [command argumentAtIndex:0];
    
    CDVPluginResult* result;
	NSString* resultMessage = [NSString stringWithFormat:@"%@ Hello I am from Native!", param];
	result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:@"Hello I am from Native!"];
    
    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}
@end
