massachusetts.brandslider = massachusetts.brandslider || function () {

    function init() {
        brandSliderInit();
    }

    function brandSliderInit() {
        $('#brands-slided').owlCarousel({
            navigation: false,
            pagination: false,
            items: 6,
            autoPlay: true
        });
    }

    return {
        init:init
    };

}();
