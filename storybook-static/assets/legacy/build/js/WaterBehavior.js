'use strict';

var WaterBehavior = (function() {
    return {
        initSwitchForm: function($link, $form) {
            $link.on('click', function(e) {
                e.preventDefault();
                jQuery(this).hide();
                $form.css('display', 'inline-block');
            });
        }
    };
})(jQuery);
