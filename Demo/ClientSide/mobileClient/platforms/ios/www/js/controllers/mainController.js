/*
 * Module : loginController.js
 * Auther : Ryou(46517115@qq.com)
 */
moduleJs.createModule('moduleMainView',{

  // optional property  
  moduleName : 'moduleMainView',
  
  /*
   * onShowView will be invoked at the first time you call the api moduleJs.showView
   * You can do something like initialize UI or others.
   */
  onShowView : function(param) {
    this.param = param;
    document.getElementById('p-message').innerHTML = param.message;
    addEventTouchStart(document.getElementById('btn-back'), this.onBackBtn);
    plugins.customPlugin(function(arguments) {
      document.getElementById('p-result').innerHTML = arguments;
    }, function(arguments) {
      
    }, "JS Side");
  },
  
  onBackBtn : function(event) {
    moduleJs.showView('moduleLoginView',{title:'Mobile-Module-JS Demo'});
  }
});