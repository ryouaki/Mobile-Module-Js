/*
 * loginView controller class
 * Auther : Ryou(46517115@qq.com)
 */
'use strict';
function loginController(mainDiv) {
  this.mainDiv = mainDiv;
  return this;
};

loginController.prototype = {
  /*
   * showView function
   * Note : delete old UI View and construct new UI View
   */
  showView : function(param) {
    var self = this;
    self.mainDiv.load('templates/admin/views/admin-login-view.html', null, 
        function(responseText, textStatus, XMLHttpRequest) {  
      /*
       * initialize UI Element
       */
      $('#admin-login-txt-title').text(admin_main_login.L_Welcome);
      $('#admin-login-btn-submit').text(admin_main_login.B_Submit);
      
      /*
       * initialize UI Handler 
       */
      $('#admin-login-btn-submit').click(function(event){
        $("#process-dialog").show();
        httpRequestService.requestPost('/admin/login', 
            $('#admin-login-form').serialize(), 
            function(result){
          $("#process-dialog").hide();
          if(result.status == netStatus.login_error){
            self.refreshView({message:admin_main_login.L_Login_Error});
          } else {
            document.refreshView(module.mainView, {});
          }
        });
      });
    });
  },
  
  /*
   * refreshView function
   * Note : refresh UI View
   */
  refreshView : function(param) {
    if(param != undefined && param.message) {
      $('.admin-login-form-error').remove();
      $('#admin-login-form-div').addClass('admin-login-form-haserror');
      $('#admin-login-form-div').append(
          '<div class="admin-login-form-error">'+
            '<strong>Warning!</strong> '+param.message+
          '</div>');
    }
  }
};