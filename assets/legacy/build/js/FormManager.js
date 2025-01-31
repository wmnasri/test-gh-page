'use strict';

var FormManager = (function() {
    return {
        initAutoSpinner: function($forms) {
            $forms.on('submit', function() {
                var $submitButtons = $(this).find(':submit');
                $submitButtons
                    .prop('disabled', true)
                    .addClass('without-arrow')
                    .html('<i class="icon-spinner spin"></i>')
                ;
            });
        },
        initAutoSpinnerByBtn: function($btn) {
            $btn
                .prop('disabled', true)
                .addClass('without-arrow')
                .html('<i class="icon-spinner spin" style="font-size: inherit"></i>')
            ;
        },
        stopAutoSpinnerByBtn: function($btn, btnText) {
            if ($btn) {
                $btn
                    .prop('disabled', false)
                    .removeClass('without-arrow')
                    .text(btnText)
                ;
            }

        }
    };
})(jQuery);
