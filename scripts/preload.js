function recaptchaCallback() {
  $('#confirm').addClass('display');
  $('#send').removeAttr('disabled');
  $('#send').removeClass('display');
};

$(window).on('load', function() {
  var current_loc = window.location.href;
  if (current_loc.indexOf("localhost") > -1) {
    // window.setTimeout(function() { $(".preload").delay(250).fadeOut(750); }, 750);
    window.setTimeout(function() { $(".preload").delay(0).fadeOut(0); }, 0);
  } else {
    $(".preload").delay(250).fadeOut(750); 
  }
});

