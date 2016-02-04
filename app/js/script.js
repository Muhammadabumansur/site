(function() {
  'use strict';
  var my = {};
  publicInterface();
  init();
  addListener();

  function addListener() {
    $('#add_project_form').on('submit', submitForm);
  }

  function submitForm(e) {
    var form = $(this),
      url = '',
      defObject = ajaxForm(form, url);
    e.preventDefault();

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
  window.qtp = my;
})();
