var loginButton;
var userIconImg;

function login() {
  console.log('Logging in!');
}

/**
 * Grab the elements from the html page
 */
function setupLogin() {
  loginButton // = get a reference to the "login-button" div tag
  userIconImg // = get a reference to the "user-icon" image tag

  // Attach an event listener to the login button to trigger the firebase login

}


/**
 * Provided by bootstrap template. Make the scroll all fancy with transitions.
 */
function setupPageScroll() {
  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $('a.page-scroll').bind('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
  });

  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 51
  });
}

// Will make sure our function is only run after the page loads
(function ($) {
  setupPageScroll();
  setupLogin();
})(jQuery);
