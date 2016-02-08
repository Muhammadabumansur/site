(function() {
  'use strict';
  var my = {};
  publicInterface();
  init();
  addListener();

  function addListener() {
    $('#add_project_form').on('submit', submitForm);
    $('#add_project').on('click', showModal);
    $('#close_popup').on('click', closePopup);
  }

  function submitForm(event) {
    event = event || window.event;
    event.preventDefault ? event.preventDefault() : (event.returnValue=false);
    var form = $(this),
      url = '',
      defObject = ajaxForm(form, url);
  }

  function showModal(event) {
    event = event || window.event;
    event.preventDefault ? event.preventDefault() : (event.returnValue=false);
    $('#add_project_popup').bPopup({
            onClose: function() { 
                    var form =  $('#add_project_form');
                    form.find('.inputfield').trigger('hideTooltip'); 
                    form.find('.has-error').removeClass('has-error');
                    form.trigger('reset');
             }
        });    
  }

    function closePopup(event) {
    event = event || window.event;
    event.preventDefault ? event.preventDefault() : (event.returnValue=false);
    var bPopup = $('#add_project_popup').bPopup({
            onClose: function() { 
                    var form =  $('#add_project_form');
                    form.find('.inputfield').trigger('hideTooltip'); 
                    form.find('.has-error').removeClass('has-error');
                    form.trigger('reset');
             }
        });
    bPopup.close();
  }


  function ajaxForm(form, url) {

    if (!validation.validateForm(form)) return false; 
    var data = form.serialize(); 

  }

  function init() {
    my.publicMethod();
  }

  function publicInterface() {
    my = {
      publicMethod: function() {
      }
    };
  }
  window.mdl = my;
})();
