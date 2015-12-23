/*
 * Module : loginController.js
 * Auther : Ryou(46517115@qq.com)
 */
moduleJs.createModule('moduleLoginView',{
  
  // optional property
  moduleName : 'moduleLoginView',
  
  /*
   * onShowView will be invoked at the first time you call the api mmoduleJs.showView
   * You can do something like initialize UI or others.
   */
  onShowView : function(param) {
    this.param = param;
    var loginViewTitle = document.getElementById('admin-login-txt-title');
    loginViewTitle.innerHTML = this.param.title;
    var loginViewBtn = document.getElementById('admin-login-btn-submit');
    loginViewBtn.innerHTML   = 'Sign in';
    addEventTouchStart(loginViewBtn, this.onLoginBtn);
    var loginViewForm = document.getElementById('admin-login-form');
    loginViewForm.onsubmit = this.onSubmit;
    console.log(this);
    console.log(window.location);
  },
  
  onLoginBtn : function(event) {
    var strUserName = document.getElementById('username');
    var strPassword = document.getElementById('password');
    $.post('http://localhost:3000/api/login',
        {
          username : strUserName.value,
          password : strPassword.value
        }
    ,function(reqText, status, xhr){
      console.log(reqText);
      if(reqText.status == '10000') {
        moduleJs.showView('moduleMainView',{message:'The message from LoginController!'});
      } else {
        addClass(strUserName, 'alert-danger');
        addClass(strPassword, 'alert-danger');
      }
    });
  },
  
  onSubmit : function(event) {   
    event = event || window.event;   
    if (event.preventDefault) {    
      event.preventDefault();   
    } else { 
      window.event.returnValue = false;   
    }   
}  
});