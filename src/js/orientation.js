// Listen for orientation changes
window.addEventListener("orientationchange", function() {
    // Announce the new orientation number
    if(orientation == 0) {
        $('html').addClass('portrait');
        $('html').removeClass('landscape');
    }else {
        $('html').addClass('landscape');
        $('html').removeClass('portrait');
    }
}, false);

$(window).load(function() {
    alert("window load occurred!");    
    if(orientation == 0) {
        $('html').addClass('portrait');
        $('html').removeClass('landscape');
    }else {
        $('html').addClass('landscape');
        $('html').removeClass('portrait');
    }
}, false);
