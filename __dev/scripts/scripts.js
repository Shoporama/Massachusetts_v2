// Include necessary files before this function is run

// Doc ready
$(function () {

    // Inits
    massachusetts.general.init();
    massachusetts.brandslider.init();
    massachusetts.checkoutflow.init();
    massachusetts.validator.init();
    massachusetts.suggestivesearch.init();
    massachusetts.cookiepolicy.init();
    massachusetts.newsletterpopup.init();

    // To top scroller
    $('#totop').click(function () {
        $('html,body').animate({scrollTop: 0}, 'fast');
    });

    // Basket tooltip
    if (!('ontouchstart' in window)) {
        $('#basket-toggler').tooltip();
    }

    // Basket toggler
    $('#basket-toggler').click(function () {
        if ($('body').hasClass('toggled-basket')) {
            $('body').removeClass('toggled-basket');
            $.scrollLock(false);
        } else {
            $('body').addClass('toggled-basket');
            $.scrollLock(true);
        }
    });

    // Carousels
    $('#product-page-image').owlCarousel({
        singleItem: true,
        lazyLoad: true
    });

    // Responsive video embeds
    $('iframe[src*="youtube.com"],iframe[src*="vimeo.com"]').each(function () {
        $(this).wrap("<div class='vidcontainer-embed'></div>");
    });

    //collapsable
    $('.subnav-expander').click(function () {
        $(this).toggleClass('expanded');
        $(this).parent('li').children('.sitenav-expanded').toggleClass('expanded');
    });

    function updateform() {
        $('#form').submit();
    }

    if ($('#remindmeform').length > 0) {
        var urlstring = window.location.search.substring(1);
        if (urlstring == "out_of_stock_signup=1") {
            $('#outofstock-signup-msg').append('<div class="alert alert-success" role="alert">Tak! Din e-mail er nu i vores system.</div>');
            $('#outofstock-signup-input').hide();
        }
    }
});

$(window).load(function () {
    massachusetts.navigation.init();
    // Lazy loader
    var layzr = new Layzr();
});

$(window).scroll(function () {

});
