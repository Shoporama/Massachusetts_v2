massachusetts.cookiepolicy = massachusetts.cookiepolicy || function () {

    function init() {
        EUCookieLaw();
    }

    // Cookie funtion
    function setCookie(key, value) {
        var expires = new Date();
        expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
            document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
    }

    function getCookie(key) {
      var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
      return keyValue ? keyValue[2] : null;
    }

    function setSessionCookie(key, value) {
        var expires = new Date();
        expires.setTime(expires.getTime() + (0));
        document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
    }


    function EUCookieLaw(){
        if (!getCookie('acceptcookie')){
            $('#cookiepolicy').fadeIn();
            $(document).click(function(){
                setCookie('acceptcookie','Yes');
            });
        }

        // Cookie Policy pop
        $('#cookiepolicy .closebtn').click(function(){
            $('#cookiepolicy').fadeOut('fast');
        });
    }

    return {
        init:init
    };

}();
