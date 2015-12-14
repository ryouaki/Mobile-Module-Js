/*
 * main controller class
 * Auther : Ryou(46517115@qq.com)
 */
(function(){
  
  var gogoGouConfig = {
      loginView : loginController,
      mainView  : mainController
  }
  
  var currentPage = module.loginView;
 
  /*
   * initialization()
   * Handle event for button and initialize UI
   */
  function initialization() {
    $("#GogoGou-modal-view").append(
        '<div id="process-dialog" class="admin-main-background">'
        + '<div class="progress progress-striped active admin-main-process">'
        + '<div class="progress-bar"  role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">'
        + '<span class="sr-only">admin-main-process</span>'
        + '</div></div></div>'
    );
    document.viewStack = {};
    for(var key in gogoGouConfig) {
      document.viewStack[key] = new gogoGouConfig[key]($('#GogoGou-main-view'));
    }
    if(window.sessionStorage.currentPage) {
      refreshView(window.sessionStorage.currentPage, window.sessionStorage.currentParam);
    }else
      document.viewStack[currentPage].showView();
  }
  
  /*
   * Refresh current UI View
   */
  function refreshView(target, param) {
    if(currentPage == target) {
      document.viewStack[target].showView(param);
    } else {
      $('#GogoGou-main-view').empty();
      document.viewStack[target].showView(param);
      currentPage = target;
    }
    window.sessionStorage.currentPage  = currentPage ;
    window.sessionStorage.currentParam = param ;
  }
  
  document.refreshView = refreshView;
  
  initialization();
})();