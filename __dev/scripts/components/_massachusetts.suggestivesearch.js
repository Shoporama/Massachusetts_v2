massachusetts.suggestivesearch = massachusetts.suggestivesearch || function () {

    function init() {
        suggestiveSearch();
    }

    function suggestiveSearch(){

        var sitesource = webshop_url + '/ajax_search';

        $('#sitehead-sitesearch input[name="search"]').autocompleter({
            source:     sitesource,
            template:   '<span data-url="{{ url }}"><img src="{{ thumbnail }}"> <span>{{ name }}</span></span>',
            customLabel: 'name',
            //customValue: 'url',
            callback: function(name){
                //gotoThisUrl = $('.autocompleter-item-selected').span.attr('data-url');
                //window.location.href = gotoThisUrl;
                $('#sitehead-sitesearch form').submit();
            }
        });
    }

    return {
        init:init
    };

}();
