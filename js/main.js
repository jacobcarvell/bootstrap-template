// jQuery for page scrolling feature - requires jQuery Easing plugin
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50 && $(window).width() > 768) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});
