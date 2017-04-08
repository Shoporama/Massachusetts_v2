massachusetts.navigation = massachusetts.navigation || function () {

    function init() {
        navScrolled();
        mobileNav();
        takeOverClose();
    }

    function navScrolled(){
        $(window).scroll(function () {
            if ($(this).scrollTop() > 40) {
                $('#sitehead').addClass('scrolled');
                $('#totop').addClass('scrolled');
            }
            else {
                $('#sitehead').removeClass('scrolled');
                $('#totop').removeClass('scrolled');
            }
        });
    }

    function mobileNav(){
        // Mobile sitenav
        $('#sitenav-toggler').click(function(){
            if($('body').hasClass('toggled-sitenav')){
                $('body').removeClass('toggled-sitenav');
                $.scrollLock(false);
            } else {
                $('body').addClass('toggled-sitenav');
                $.scrollLock(true);
            }
        });
    }

    function takeOverClose(){
        $('.takeover-close, #shopon').click(function(){
            $('body').removeClass('toggled-basket').removeClass('toggled-sitenav');
            $.scrollLock(false);
            return false;
        });
    }

    return {
        init:init
    };

}();
