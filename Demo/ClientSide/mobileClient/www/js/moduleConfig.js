/*
 * Module : moduleConfig.js
 * Auther : Ryou(46517115@qq.com)
 * This file is ued for configure the module information
 * And when the index.html loaded ,This module will load the 
 * JS Module And create the Module Instance
 */
moduleJs.init({
  /*
   * The id of the main Div,If you did not assign a Div for mmoduleJs.
   * mModuleJs will auto load by the id named mModuleMainDiv
   */
  mainDiv : "main-panel", 
  modules: {
    moduleLoginView : {
      name : "moduleLoginView" ,    // module name ,Must be the same as you the first parameter you invoke mmoduleJs.createModule
      controller : "js/controllers/loginController.js",
      view : "templates/login.html"
    },
    moduleMainView : {
      name : "moduleMainView" ,
      controller : "js/controllers/mainController.js",
      view : "templates/main.html"
    }
  }
});