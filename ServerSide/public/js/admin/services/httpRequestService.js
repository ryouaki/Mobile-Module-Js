/*
 * Http request handler class
 * Auther : Ryou(46517115@qq.com)
 */

var httpRequestService = {
    /*
     * Send post request 
     */
    requestPost : function(url, param, callback) {
      $.post(url, param, function(data, status) {
        if(data.status==netStatus.session_error) {
          document.refreshView(module.loginView, {message:admin_main_login.L_Session_Error});
        } else {
          callback(data);
        }
      });
    },
    /*
     * Send get request 
     */
    requestGet : function(url, param, callback) {
      $.get(url, param, function(data, status) {
        if(data.status==netStatus.session_error) {
          document.refreshView(module.loginView, {message:admin_main_login.L_Session_Error});
        } else {
          callback(data);
        }
      });
    }
};