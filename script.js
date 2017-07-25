(function($){
  $(document).ready(function(){

    $("input[type='radio']").change(function() {
      if ($(this).val() == "first") {
        $(".list").show();
      } else {
        $(".list").hide();
      }
    });

    $("input[type='radio']").change(function() {
      if ($(this).val() == "second") {
        $(".pass-field").show();
      } else {
        $(".pass-field").hide();
      }
    });

    $('.form-content input').keyup(function(){
      if(emptyValidation($(this).parent(),$(this).data('errormes'))){
        //exit the code
        return;
      }
      if($(this).attr("id")=='password'){
      	pswd=$(this).val();
        if(!(pswd.match(/[a-z]/))){
					printError($(this).parent(),$(this).data('char'));
        }
        else if(!(pswd.match(/[A-Z]/)))
        {
					printError($(this).parent(),$(this).data('caps'));
        }
        else if(!(pswd.match(/\d/)))
        {
					printError($(this).parent(),$(this).data('digit'));
        }
        else if(!(pswd.match(/[!@#$%^&*]/)))
        {
					printError($(this).parent(),$(this).data('specialchar'));
        }
        else if(!(pswd.length > 8))
        {
					printError($(this).parent(),$(this).data('type'));
        }
        else{
        	removeError($(this).parent());
        }
      }
    });

    $('.form-content input').blur(function(){
      if(emptyValidation($(this).parent(),$(this).data('errormes'))){
        //exit the code
        return;
      }
      if(($(this).attr("id")=='fname' || $(this).attr("id")=='lname') && $(this).val().trim().length < 3) {
        var patt=/[A-Za-z]/;
        var name=$('#fname').val();
        var res=patt.test(name);
        if(!(res)){
        	printError($(this).parent(),$(this).data('type'));
      	}
      	else {
        	removeError($(this).parent());
      	}
    	}
      if($(this).attr("id")=='email'){
        var patt=/^[A-Za-z0-9._]*\@[A-Za-z0-9._]*\.[A-Za-z]{2,5}$/;
        var mail=$('#email').val();
        var dataString= 'email=' + mail;
        email_input=$(this);
        $.ajax({
        	type: "POST",
        	url: "emailvalidation.php",
        	data: dataString,
        	cache: false,
        	success: function(result){
     				if(result=="true"){
        			printError(email_input.parent(),email_input.data('notvalid'));
        		}
        	}
        });
        var res=patt.test(mail);
        if(!(res)){
          printError($(this).parent(),$(this).data('type'));
        }
				else{
        removeError($(this).parent());
      	}
    	}
      if($(this).attr("id")=='repassword'){
      	var repswd=$(this).val();

        if(!(repswd==pswd))
        {
					printError($(this).parent(),$(this).data('type'));
        }
        else{
          removeError($(this).parent());
        }
      }
    });

    $('#selectfield').change(function (event) {
    	var dataString= 'select=' + $(this).val();
			$.ajax({
        	type: "POST",
        	url: "selectvalidation.php",
        	data: dataString,
        	cache: false,
        	success: function(result){
        		$('#select-response').html(result);
        	}
      });
		});
  });

  function printError($el,mes){
    $errordiv = $( "<div class='alert-error' id='errorContainer'>" + mes + "</div>" );
    $el.closest('.form-content').find('label').addClass('error');
    $el.find('input').addClass('error');
    if($el.find('.alert-error').length == 0){
      $el.append($errordiv);
    }
  }

  function removeError($el){
    $el.closest('.form-content').find('label').removeClass('error');
    $el.find('input').removeClass('error');
    $el.find('.alert-error').remove();
  }

  function emptyValidation($el,mes){
    if($el.find('input').val().trim().length < 1){
      printError($el,mes);
      return true;
    }
    else{
      removeError($el);
      return false;
    }
  }

})(jQuery);
