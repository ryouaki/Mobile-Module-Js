#import <Foundation/Foundation.h>
#import <Cordova/CDVPlugin.h>

@interface CDVCustomPlugin : CDVPlugin

- (void)talkWithNative:(CDVInvokedUrlCommand*)command;

@end
