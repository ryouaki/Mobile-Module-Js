/*
 * mainHomeView controller class
 * Auther : Ryou(46517115@qq.com)
 */
'use strict';
function mainHomeController(mainDiv) {
  this.mainDiv = mainDiv;
  return this;
};

mainHomeController.prototype = {
  /*
   * showView function
   * Note : delete old UI View and construct new UI View
   */
  showView : function(param) {
    var self = this;
    self.param = param;
    
    self.mainDiv.load('templates/admin/views/admin-main-home-view.html', null, 
        function(responseText, textStatus, XMLHttpRequest) {  
      if (textStatus == 'error')
        alert('Error: ' + XMLHttpRequest.status + ': ' + XMLHttpRequest.statusText);
      else {
        // Display configuration 
        var admin_main_home_data = {};
        self.param.forEach(function(item) {
          admin_main_home_data[item.index] = item.value;
        });
        if (admin_main_home_data.years != undefined) {
          $('#admin-main-home-years-text')
              .val(admin_main_home_data.years);
          self.param.years = admin_main_home_data.years;
        }
        if (admin_main_home_data.types != undefined) {
          $('#admin-main-home-production-type-text')
              .val(admin_main_home_data.types);
          self.param.types = admin_main_home_data.types;
        }
        if (admin_main_home_data.brands != undefined) {
          $('#admin-main-home-brand-text')
              .val(admin_main_home_data.brands);
          self.param.brands = admin_main_home_data.brands;
        }
        
        // Update [ Years ] 
        var admin_main_home_years_edit_btn = $('#admin-main-home-years-edit-btn');
        var admin_main_home_years_text = $('#admin-main-home-years-text');
        admin_main_home_years_edit_btn.removeAttr('disabled');
        admin_main_home_years_text.keyup(function() {
          admin_main_home_years_edit_btn.removeAttr('disabled');
        });
        admin_main_home_years_edit_btn
            .click(function(event) {
              if (admin_main_home_years_edit_btn.text() == 'Save') {
                $('#process-dialog').show();
                httpRequestService.requestPost('/admin/updateYears', {
                  years : admin_main_home_years_text.val()
                }, function(data, status) {
                  if (data != undefined && data.result != undefined) {
                    admin_main_home_years_text.text(data.result);
                    self.param.years = data.result;
                    admin_main_home_years_edit_btn.text('Edit');
                    admin_main_home_years_text.attr('disabled', 'disabled');
                    admin_main_home_years_text.parent().removeClass('has-error');
                  } else {
                    admin_main_home_years_text.parent().addClass('has-error');
                  }
                  $('#process-dialog').hide();
                });
              } else {
                admin_main_home_years_edit_btn.text('Save');
                admin_main_home_years_text.removeAttr('disabled');
                admin_main_home_years_edit_btn.attr('disabled', 'disabled');
              }
            });
        // Update [ Types ]         
        var admin_main_home_production_type_edit_btn = $('#admin-main-home-production-type-edit-btn');
        var admin_main_home_production_type_text = $('#admin-main-home-production-type-text');
        admin_main_home_production_type_edit_btn.removeAttr('disabled');
        admin_main_home_production_type_text.keyup(function() {
          admin_main_home_production_type_edit_btn
              .removeAttr('disabled');
        });
        admin_main_home_production_type_edit_btn
            .click(function(event) {
              if (admin_main_home_production_type_edit_btn.text() == 'Save') {
                $('#process-dialog').show();
                httpRequestService.requestPost('/admin/updateTypes', {
                  types : admin_main_home_production_type_text.val()
                }, function(data, status) {
                  if (data != undefined
                      && data.result != undefined) {
                    admin_main_home_production_type_text.text(data.result);
                    self.param.types = data.result;
                    admin_main_home_production_type_edit_btn.text('Edit');
                    admin_main_home_production_type_text.attr('disabled', 'disabled');
                    admin_main_home_production_type_text.parent().removeClass('has-error');
                  } else {
                    admin_main_home_production_type_text.parent().addClass('has-error');
                  }
                  $('#process-dialog').hide();
                });
              } else {
                admin_main_home_production_type_edit_btn.text('Save');
                admin_main_home_production_type_text.removeAttr('disabled');
                admin_main_home_production_type_edit_btn.attr('disabled', 'disabled');
              }
            });
        // Update [ Brands ]
        var admin_main_home_brand_edit_btn = $('#admin-main-home-brand-edit-btn');
        var admin_main_home_brand_text = $('#admin-main-home-brand-text');
        admin_main_home_brand_edit_btn.removeAttr('disabled');
        admin_main_home_brand_text.keyup(function() {
          admin_main_home_brand_edit_btn.removeAttr('disabled');
        });
        admin_main_home_brand_edit_btn
            .click(function(event) {
              if (admin_main_home_brand_edit_btn.text() == 'Save') {
                $('#process-dialog').show();
                $.post('/admin/updateBrands', {
                  brands : admin_main_home_brand_text.val()
                }, function(data, status) {
                  if (data != undefined && data.result != undefined) {
                    admin_main_home_brand_text.text(data.result);
                    self.param.brands = data.result;
                    admin_main_home_brand_edit_btn.text('Edit');
                    admin_main_home_brand_text.attr('disabled', 'disabled');
                    admin_main_home_brand_text.parent().removeClass('has-error');
                  } else {
                    admin_main_home_brand_text.parent().addClass('has-error');
                  }
                  $('#process-dialog').hide();
                });
              } else {
                admin_main_home_brand_edit_btn.text('Save');
                admin_main_home_brand_text.removeAttr('disabled');
                admin_main_home_brand_edit_btn.attr('disabled', 'disabled');
              }
            });
        // Update [ Production Items ]
        $('#admin-main-home-item-edit-btn').click(function(event){
          self.mainDiv.append('<div id="admin-main-home-product-item-eidt-div"></div>');
//          $('#admin-main-home-product-item-eidt-div').load('template/admin/views/admin-main-home-item-view.html' ,
//              null,function(responseText, textStatus, XMLHttpRequest) {
//            $("#admin-main-product-item-dialog").modal({
//              show : true
//            });
//          });  
        });
      }
      $('#process-dialog').hide();
    });
  },
  
  /*
   * refreshView function
   * Note : refresh UI View
   */
  refreshView : function(param) {
  }
};