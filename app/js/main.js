jQuery(function(){

    $('input, textarea').placeholder();

    $('#add_project').on('click', function(e) {

        // Prevents the default action to be triggered. 
        e.preventDefault();

        // Triggering bPopup when click event is fired
        $('#add_project_popup').bPopup();
        $('.tooltip').css('visibility', 'hidden');
        document.getElementById('add_project_name').value = "";
      	document.getElementById('add_project_image').value = "";
      	document.getElementById('add_project_url').value = "";
      	document.getElementById('add_project_textarea').value = "";


    });

   	  $( '#add_project_name').keypress(function() {
				  $('.tooltip_1').css('visibility', 'hidden');
				});
    	$( '#add_project_image').on('click', function() {
				  $('.tooltip_2').css('visibility', 'hidden');
				});
    	$( '#add_project_url').keypress(function() {
				  $('.tooltip_3').css('visibility', 'hidden');
				});
    	$( '#add_project_textarea').keypress(function() {
				  $('.tooltip_4').css('visibility', 'hidden');
				});

    $('#add_project_submit').on('click', function(e) {

        // 
        	e.preventDefault();
        	var Valid = 0;
        	
        //
        if (document.getElementById('add_project_name').value != "") {
        		Valid++
        	}
        else {        
        		e.preventDefault();
        	  $('.tooltip_1').css('visibility', 'visible');
        };

        if (document.getElementById('add_project_image').value != "") {
        	  Valid++         	     
        }
        else {
        		e.preventDefault();
        	  $('.tooltip_2').css('visibility', 'visible');
        };

        if (document.getElementById('add_project_url').value != "") {
        		Valid++       	     
        }
        else {
        		e.preventDefault();
        	  $('.tooltip_3').css('visibility', 'visible');
        };

        if (document.getElementById('add_project_textarea').value != "") {
        		Valid++      	     
        }
        else {
        		e.preventDefault();
        	  $('.tooltip_4').css('visibility', 'visible');   	              	     
        };
        //

        if(Valid==4) {
        		
        		var list_of_works_li = document.createElement('li');
        		list_of_works_li.setAttribute('class','list_of_works_li');
        		var image_work = document.createElement('a');
        		image_work.setAttribute('href', document.getElementById('add_project_url').value);
        		image_work.setAttribute('target', '_blank');
        		image_work.setAttribute('class', 'image-work');
        		list_of_works_li.appendChild(image_work);
        		var list_of_works_img = document.createElement('img');
        		list_of_works_img.setAttribute('class', 'list_of_works_img');
        		list_of_works_img.setAttribute('src', 'img/added_image.jpg');
        		list_of_works_img.setAttribute('alt', 'add_project_url_value');
        		image_work.appendChild(list_of_works_img);
        		var back_image = document.createElement('div');
        		back_image.setAttribute('class', 'back-image');
        		image_work.appendChild(back_image);
        		var back_text = document.createElement('div');
        		back_text.setAttribute('class', 'back-text');
        		back_text.textContent = 'Подробнее';
        		back_image.appendChild(back_text);  
        		var site_name_link = document.createElement('a');
        		site_name_link.setAttribute('href', document.getElementById('add_project_url').value);
        		site_name_link.setAttribute('target', '_blank');
        		site_name_link.setAttribute('class', 'site-name-link');
        		site_name_link.textContent = document.getElementById('add_project_url').value;
        		list_of_works_li.appendChild(site_name_link);
        		var list_of_works_text = document.createElement('p');
        		list_of_works_text.setAttribute('class', 'list_of_works_text');
        		list_of_works_text.textContent = document.getElementById('add_project_textarea').value;
        		list_of_works_li.appendChild(list_of_works_text);
        		var list_of_works_ul = document.getElementById('list_of_works_ul');
        		list_of_works_ul.insertBefore(list_of_works_li, list_of_works_ul.lastElementChild);
        		$('#add_project_popup').bPopup().close();
        }
        else {
        	Valid = 0;
        };

       
    });


});

 
