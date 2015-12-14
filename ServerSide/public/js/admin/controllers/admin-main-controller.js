/*
 * mainView controller class
 * Auther : Ryou(46517115@qq.com)
 */
'use strict';
function mainController(mainDiv) {
  
  // parent div
  this.mainDiv      = mainDiv;
  // current active tab
  this.currentTag   = 0;
  // common config information 
  this.common       = {};
  
  this.tabs = {
      "Home" : mainHomeController,
      "Home1" : mainHomeController,
      "Home2" : mainHomeController,
      "Home3" : mainHomeController
  };
  
  return this;
};

mainController.prototype = {
  /*
   * showView function
   * Note : delete old UI View and construct new UI View
   */
  showView : function(param) {
    var self = this;
    self.mainDiv.load('templates/admin/views/admin-main-view.html', null, 
        function(responseText, textStatus, XMLHttpRequest) {  
      /*
       * tabView title
       */
      $("#admin-main-panel-header").text(admin.home);
      
      /*
       * load initialization info 
       */
      httpRequestService.requestGet('/admin/main',
          {},
          function(result){
            // initialize configuration
            self.common = result.result;
            
            /*
             * initialize UI Element
             */
            var menu = $("#admin-main-menu");
            for ( var key in self.tabs) {
              var li = document.createElement("li");
              var a = document.createElement("a");
              a.innerHTML = key;
              li.appendChild(a);
              li.onclick = function(event) {
                $("#admin-main-menu").children().removeClass("active");
                if(event.currentTarget)
                  $(event.currentTarget).addClass("active");
                else
                  $(event.target).addClass("active");
                $("#process-dialog").show();
                $('#admin-main-div').empty();
                var currentController = self.tabs[key];
                self.currentController =new currentController($('#admin-main-div'));
                self.currentController.showView(self.common);
              };
              menu.append(li);
            }
            menu.children().first().click();
            menu.append('<p class="navbar-text navbar-right admin-main-signout">'
                + '<a id="admin-main-signout" class="navbar-link">Sign out</a></p>');
            $('#admin-main-signout').click(function(event){
              window.sessionStorage.currentPage  = undefined ;
              window.sessionStorage.currentParam = undefined ;
              $.get('/admin/logout', null, function(){
                document.refreshView(module.loginView);
              });
            });
          });
    });
  },
  
  /*
   * refreshView function
   * Note : delete old UI View and construct new UI View
   */
  refreshView : function(param) {
    
  }
};