(function($) {
    $.mnotifyajax = function() {
        var $body = $('body');
        var loaderClass = 'mnotifyajax';

        $(document).bind('ajaxSend', function(){
            if($body.find('.' + loaderClass).length==0) {
                $body.append('<p class="' + loaderClass + '"></p>');
            }
        });

        $(document).bind('ajaxComplete', function(){
            $('body').find('.' + loaderClass).remove();
        });
    }
})(jQuery);

$(function(){
    $.mnotifyajax();
});