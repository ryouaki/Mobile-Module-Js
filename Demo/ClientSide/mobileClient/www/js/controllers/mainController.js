/*
 * Module : loginController.js
 * Auther : Ryou(46517115@qq.com)
 */
moduleJs.createModule('moduleMainView',{
  
  moduleName : 'moduleMainView',
  
  onShowView : function(param) {
    this.param = param;
    console.log(this);
    console.log(window.location);
  }
});