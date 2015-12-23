/*
 * Module : loginController.js
 * Auther : Ryou(46517115@qq.com)
 */
moduleJs.createModule('moduleMainView',{
  
  moduleName : 'moduleMainView',
  
  onShowView : function(param) {
    this.param = param;
    document.getElementById('p-message').innerHTML = param.message;
    addEventTouchStart(document.getElementById('btn-back'), this.onBackBtn);
  },
  
  onBackBtn : function(event) {
    moduleJs.showView('moduleLoginView',{});
  }
});