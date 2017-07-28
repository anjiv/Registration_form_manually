(function($) {
  $(document).ready(function() {

    $("input[type='radio']").change(function() {
      if ($(this).val() == "first") {
        $(".list").show();
      } else {
        $(".list").hide();
      }

      if ($(this).val() == "second") {
        $(".pass-field").show();
      } else {
        $(".pass-field").hide();
      }
    });

    $('.form-content input').on('keyup', function() {
      if (emptyValidation($(this).parent(), $(this).data('errormes'))) {
        //exit the code
        return;
      }
      if ($(this).attr("id") == 'password') {
        pswd = $(this).val();
        if (!(pswd.match(/[a-z]/))) {
          printError($(this).parent(), $(this).data('char'));
        } else if (!(pswd.match(/[A-Z]/))) {
          printError($(this).parent(), $(this).data('caps'));
        } else if (!(pswd.match(/\d/))) {
          printError($(this).parent(), $(this).data('digit'));
        } else if (!(pswd.match(/[!@#$%^&*]/))) {
          printError($(this).parent(), $(this).data('specialchar'));
        } else if (!(pswd.length > 7)) {
          printError($(this).parent(), $(this).data('type'));
        } else {
          removeError($(this).parent());
        }
      }
    });

    $('.form-content input').blur(function() {
      if (emptyValidation($(this).parent(), $(this).data('errormes'))) {
        //exit the code
        return;
      }
      if ($(this).attr("id") == 'fname') {
        namevalid = $(this).val();
        if (!(namevalid.match(/^[a-zA-Z]+$/))) {
          printError($(this).parent(), $(this).data('number'));
        } else if (!(namevalid.trim().length > 2)) {
          printError($(this).parent(), $(this).data('type'));
        } else {
          removeError($(this).parent());
        }
      }
      if ($(this).attr("id") == 'lname') {
        namevalid = $(this).val();
        if (!(namevalid.match(/^[a-zA-Z]+$/))) {
          printError($(this).parent(), $(this).data('number'));
        } else if (!(namevalid.trim().length > 2)) {
          printError($(this).parent(), $(this).data('type'));
        } else {
          removeError($(this).parent());
        }
      }
      if ($(this).attr("id") == 'email') {
        var patt = /^[A-Za-z0-9._]*\@[A-Za-z0-9._]*\.[A-Za-z]{2,5}$/;
        var mail = $('#email').val();
        var dataString = 'email=' + mail;
        email_input = $(this);
        $.ajax({
          type: "POST",
          url: "emailvalidation.php",
          data: dataString,
          cache: false,
          success: function(result) {
            if (result == "true") {
              printError(email_input.parent(), email_input.data('notvalid'));
            }
          }
        });
        var res = patt.test(mail);
        if (!(res)) {
          printError($(this).parent(), $(this).data('type'));
        } else {
          removeError($(this).parent());
        }
      }
      if ($(this).attr("id") == 'repassword') {
        var repswd = $(this).val();
        if (!(repswd == pswd)) {
          printError($(this).parent(), $(this).data('type'));
        } else {
          removeError($(this).parent());
        }
      }
    });

    $('#selectfield').change(function(event) {
      var dataString = 'select=' + $(this).val();
      $.ajax({
        type: "POST",
        url: "selectvalidation.php",
        data: dataString,
        cache: false,
        success: function(result) {
          $('#select-response').html(result);
        }
      });
    });

    $('#datepicker').datepicker();

    $('#form-submit').on('click', function(e) {
    	e.preventDefault();
      var isFormValid = checkValidation($('#manual-registration-form'));
      if (isFormValid == false) {
        $.notify({
          title: '<strong>Oops!</strong>',
          message: 'Fill all the fields to submit the form.'
        }, {
          type: 'danger'
        });
      } else {
        $.notify({
          title: '<strong> Successful !! </strong>',
          message: 'Form submitted.'
        }, {
          type: 'success'
        });
        var st = '';
        $('#manual-registration-form input[type=text].form-control-required, input[type=password].form-control-required, select').each(function() {
        	if ($(this).closest('.form-content').css('display') !== 'none') {
        		console.log($(this).closest('.form-content'));
          	st = st + '<div class="table-item">' + $(this).closest('.form-content').find('label').text() + ' ' + ':' + ' ' + $(this).val() + '</div>';
          	$(this).val('');
          }
        });
        $('#form-demo').append('<div class="table-content">' + st + '</div>');
        $('#form-demo').show();
      }
    });

    $("#autocomplete-input").keyup(function(){
    	var keywordString = 'q='+$(this).val();
    	$.ajax({
    		type: "GET",
    		url: "autocomplete.php?" + keywordString,
    		data: keywordString,
    		success: function(data){
    			$("#autocomplete-results").show();
    			$("#autocomplete-results").empty();
    			$.each(data, function(index,val) {
    				var $el = $("<p>"+val+"</p>");
    				$el.click(function() {
    					$('#autocomplete-input').val(val);
    				});
  					$("#autocomplete-results").append($el);
					});
    		}
    	});
    });

  });

  function printError($el, mes) {
    $errordiv = $("<div class='alert-error' id='errorContainer'>" + mes + "</div>");
    $el.closest('.form-content').find('label').addClass('error');
    $el.find('input').addClass('error');
    if ($el.find('.alert-error').length == 0) {
      $el.append($errordiv);
    }
  }

  function removeError($el) {
    $el.closest('.form-content').find('label').removeClass('error');
    $el.find('input').removeClass('error');
    $el.find('.alert-error').remove();
  }

  function emptyValidation($el, mes) {
    if ($el.find('input').val().trim().length < 1) {
      printError($el, mes);
      return true;
    } else {
      removeError($el);
      return false;
    }
  }

  function checkValidation($form) {
    var isFormValid = true;
    $('input.form-control-required', $form).each(function() {
      if ($(this).closest('.form-content').css('display') !== 'none') {
        if ($.trim($(this).val()) === "") {
          isFormValid = false;
        }
      }
    });
    return isFormValid;
  }

})(jQuery);
