(function($){
  $(document).ready(function(){

    var email = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
    var name = $("#name").val();
    var lname = $("#lname").val();
    var password = $("#password").val();
    var repassword = $("#repassword").val();
    var passport = $("#passport").val();
    var date = $("#date").val();
    var tags = $("#tags").val();
    var valid = true;

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

    $('.form-content input').blur(function(){
      printError($(this).parent(),'Hi');
    });
  });

  function printError($el,mes){
    $errordiv = $( "<div class='alert-error' id='errorContainer'>" + mes + "</div>" );
    if($el.find('input').val().length < 1){
      $el.closest('.form-content').find('label').addClass('error');
      $el.find('input').addClass('error');
      if($el.find('.alert-error').length == 0){
        $el.append($errordiv);
      }
    }
    else{
      $el.closest('.form-content').find('label').removeClass('error');
      $el.find('input').removeClass('error');
      $el.find('.alert-error').remove();
    }
  }

})(jQuery);
