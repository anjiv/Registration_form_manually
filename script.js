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

    $('input').blur(function(){
      var $errdiv = $( "<div class='alert-error' id='errorContainer'>Please enter valid input.</div>" );
      if($(this).val().length < 1){
        $(this).closest('.form-content').find('label').addClass('error');
        $(this).addClass('error');
        $(this).closest('.form-content').append( $errdiv );
      }
      else{
        $(this).closest('.form-content').find('label').removeClass('error');
        $(this).removeClass('error');
        $(this).closest('.form-content').find('.alert-error').remove();
      }
    });

  });
})(jQuery);
