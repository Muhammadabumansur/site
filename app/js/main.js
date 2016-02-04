jQuery(function(){

    $('input, textarea').placeholder();

    $('#add_project').on('click', function(e) {

        e.preventDefault();

        $('#add_project_popup').bPopup({
            onClose: function() { 
                    var form =  $('#add_project_form');
                    form.find('.inputfield').trigger('hideTooltip'); 
                    form.find('.has-error').removeClass('has-error');

             }
        });

    });


});

 
