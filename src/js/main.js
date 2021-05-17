(function() {
  console.log('|_* ~ *_| Welcome to the WLUA website |_* ~ *_|');
})();

(function() {
    // Mobile Menu
    
    const $menuButton = document.querySelector("#nav-button");
    const $menu = document.querySelector("#header-nav");

  
    let menuOpen = false;
  
    $menuButton.addEventListener("click", event => {
      if (menuOpen) {
        menuOpen = false;
        $menuButton.setAttribute("aria-expanded", "false");
        $menu.style.display = 'none';
        
      } else {
        menuOpen = true;
        $menuButton.setAttribute("aria-expanded", "true");
        $menu.style.display = 'flex';
        
      }
    });
  })();

$(document).ready(function() {
	
	// Add class to mailto link
	// Needed to separate the disabling of the default action AND copy email to clipboard
	$('a[href^=mailto]').addClass('mailto-link');

	var mailto = $('.mailto-link');
	var messageCopy = 'Click to copy email address';
	var messageSuccess = 'Email address copied to clipboard';
	
	mailto.append('<span class="mailto-message"></span>');
	$('.mailto-message').append(messageCopy);
	
	// Disable opening your email client. yuk.
	$('a[href^=mailto]').click(function() {
		return false; 
	})
	
	// On click, get href and remove 'mailto:' from value
	// Store email address in a variable.
	mailto.click(function() {
		var href = $(this).attr('href');
		var email = href.replace('mailto:', '');
		copyToClipboard(email);
		$('.mailto-message').empty().append(messageSuccess);
		setTimeout(function() {
			$('.mailto-message').empty().append(messageCopy);}, 2000); 
	});
	
});

// Grabbed this from Stack Overflow.
// Copies the email variable to clipboard
function copyToClipboard(text) {
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', text);
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
}