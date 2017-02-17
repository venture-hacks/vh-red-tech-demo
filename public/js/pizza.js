var loginButton;
var userIconImg;

function login() {
  // If you enable it, you can sign in with many different social providers
  var provider = new firebase.auth.GoogleAuthProvider();

  // Options
  // See @ https://firebase.google.com/docs/reference/js/firebase.auth.GoogleAuthProvider#setCustomParameters
  provider.setCustomParameters({
    'login_hint': 'you?@venturehacks.xyz'
  });

  // Signin with popup will give you the familiar
  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token.
    // You can use it to access the Google API if you are adventurous.
    var token = result.credential.accessToken;


    // The signed-in user info.
    var user = result.user;

    // Here is where you would change what is showing on the screen (views)
    // and other actions that go along with being 'logged in'
    // With the 'user' object, we can get things like name, email, photoURL ...

    // For our example, we will just change the user image in the nav bar
    // Do this by changing the 'src' attribute to point to the user's Google photo
    userIconImg.src = user.photoURL;

    // You are now signed in! Do with it what you like!

  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
  });

}

/**
 * Grab the elements from the html page
 */
function setupLogin() {
  loginButton = document.getElementById("login-button");
  userIconImg = document.getElementById("user-icon");

  // Attach an event listener to the login button to trigger the firebase login
  loginButton.addEventListener('click', function (event) {
    // Makes sure we only do our code
    event.preventDefault();
    login();
  })
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
