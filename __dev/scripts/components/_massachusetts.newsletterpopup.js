massachusetts.newsletterpopup = massachusetts.newsletterpopup || function () {

    function init() {
        if($('#newsletterpopup').length > 0){
            newsletterPopup();
            signupSubmit();
        }
    }

    // Cookie funtion
    function setNewsletterCookie(key, value) {
        var expires = new Date();
        expires.setTime(expires.getTime() + (CookieLifeTime*24*60*60*1000));
            document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
    }

    function getNewsletterCookie(key) {
      var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
      return keyValue ? keyValue[2] : null;
    }

    function signupSubmit(){
        $('#newsletterpopup-form').submit(function(e) {
            var formAction = $(this).attr('action');

            $.ajax({
                url: formAction,
                type: 'GET',
                dataType: 'json',
                data: $(this).serialize(),
                success: function(data){
                    console.log("Succes: ", data);
                    //you should first check if ga is set
                    if (typeof ga !== 'undefined') {
                        ga('send', 'event', 'NewsletterSignup', 'A new signup via websitepopup');
                    }
                    //check if _gaq is set too
                    if (typeof _gaq !== 'undefined') {
                        _gaq.push(['_trackEvent', 'NewsletterSignup', 'A new signup via websitepopup']);
                    }

                    $('.newsletterpopup-left, .newsletterpopup-right').fadeOut(500, function(){
                        $('.newsletterpopup-thankyou').fadeIn();
                    });
                },
                error: function(data) {
                    console.log("Error: ", data);
                    alert('Hov! Noget gik galt - prøv lige igen...')
                }
            });
            e.preventDefault();
        });
    }

    function newsletterPopup(){

        var numberOfDeactivates = 0;

        if (getNewsletterCookie('massachusettsNewsletterPopup') >= minimumViews){
            $('#newsletterpopup-reactivate').animate({bottom: "0px"},200);
        } else {
            $('#newsletterpopup').delay(popupDelay).animate({bottom: "0px"},1000);
        }

        $('#newsletterpopup-deactivate').click(function(){
            $('#newsletterpopup').animate({bottom: "-600px"},500,function(){
                $('#newsletterpopup-reactivate').animate({bottom: "0px"},200);
            });

            if(parseInt(getNewsletterCookie('massachusettsNewsletterPopup')) >= 0){
                numberOfDeactivates = parseInt(getNewsletterCookie('massachusettsNewsletterPopup'));
            }
            numberOfDeactivates++;
            setNewsletterCookie('massachusettsNewsletterPopup', numberOfDeactivates);

        });

        $('#newsletterpopup-reactivate').click(function(){
            $(this).animate({bottom: "-60px"},200,function(){
                $('#newsletterpopup').animate({bottom: "0px"},500);
            });
        });

    };

    return {
        init:init
    };

}();
