'use strict';
(function($){
  function moduleJs() {
    
    var header = document.getElementsByTagName('head')[0];
    
    if(header == undefined) {
      header = document.createElement('head');
      document.getElementsByTagName('html')[0].appendChild(header);
    }
    
    var mainDiv = "mModuleMainDiv";
    
    function createModule(name, module){
      
      if(module == undefined) {
          module = {};
      };
      
      var moduleView = document.getElementById(name);
      module._viewPath = moduleView.getAttribute('view');
      
      module._onPushToController = function(param, callback) {
        $('#'+mainDiv).empty();
        $('#'+mainDiv).load(module._viewPath, null, function(){
          callback.apply(module, [param]);
        });
      };

      this[name] = module;
      
    };
    
    function init(moduleObjects) {
      if(moduleObjects['mainDiv'] != undefined) {
        mainDiv = moduleObjects['mainDiv'];
      }
      
      var mainDivView = document.getElementById(mainDiv);
      if(mainDivView == undefined) {
        console.error('Mobile-Module-Js initialized failed! Please assign a Main Div to display the html view.');
      }
      
      var modules = moduleObjects.modules;
      for(var moduleName in modules) {
        loadJS(modules[moduleName]);
      }
    };
    
    function loadJS(newModule) {
      var rootTag = document.createElement('script');
      rootTag.src = newModule.controller;
      rootTag.setAttribute('id', newModule.name);
      rootTag.setAttribute('view', newModule.view);
      rootTag.onload = function(){
      }
      header.appendChild(rootTag);
    };
    
    function showView(moduleName, parameter) {
      this[moduleName]._onPushToController(parameter, this[moduleName].onShowView);
    };
    
    return {
      createModule : createModule,
      init : init,
      showView : showView
    }
  }
  
  if(window) {
    window.moduleJs = moduleJs();
  }
})($);