massachusetts.checkoutflow = massachusetts.checkoutflow || function () {

    function init() {
        checkOutFlowForm();
    }

    function checkOutFlowForm(){
        if($('#payment-address')){
            $('#show_del_address').change(function() {
                if($(this).is(':checked')){
                    $('#shipping-address').show('fast');
                }
                else{
                    $('#shipping-address').hide('fast');
                }
            });

            $('#terms_accept').change(function() {
                if($(this).is(':checked')){
                    $('#terms_accept_container').addClass('accepted');
                    $('#next-step-btn').removeClass('inactive');
                }
                else{
                    $('#terms_accept_container').removeClass('accepted');
                    $('#next-step-btn').addClass('inactive');
                }
            });

            $('#next-step-btn-address').click(function(e){
                if($('#terms_accept').is(':checked')){
                    // Hurrah - det blev accepteret
                }
                else{
                    alert('Du skal acceptere handels-og-leveringsbetingelserne');
                    return false;
                }
            });

            // Label magic
            $('.form-row input').focus(function() {
                $("label[for='"+$(this).attr('id')+"']").addClass('label-active').addClass('show');
                $(this).addClass('focus');
            }).blur(function(){
                $("label[for='"+$(this).attr('id')+"']").removeClass('label-active');
                if ($(this).val().length == 0) {
                    $("label[for='"+$(this).attr('id')+"']").removeClass('show');
                    $(this).removeClass('focus');
                }
            });
        }
    }

    return {
        init:init
    };

}();
