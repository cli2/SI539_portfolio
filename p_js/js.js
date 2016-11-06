function cover_i(){
  document.getElementById('index').style.backgroundImage = "url('" + './p_image/cover.jpg' + "')";
}
function cover_d(){
  document.getElementById('index').style.backgroundImage = "url('" + './p_image/cover_d.jpg' + "')";
}
function cover_m(){
  document.getElementById('index').style.backgroundImage = "url('" + './p_image/cover_m.jpg' + "')";
}
function cover_g(){
  document.getElementById('index').style.backgroundImage = "url('" + './p_image/cover_g.jpg' + "')";
}
function show_nav(){
  document.getElementById('full').style.opacity='0.95';
  document.getElementById('full').style.display='block';
}
function show_page(){
  document.getElementById('full').style.display='none';
}

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}
