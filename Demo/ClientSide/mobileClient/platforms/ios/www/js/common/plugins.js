var plugins = {};

plugins.customPlugin = function(success, failed, params) {
  cordova.exec(success, failed, "customPlugin", "talkWithNative",[params]);
}

window.plugins = plugins;