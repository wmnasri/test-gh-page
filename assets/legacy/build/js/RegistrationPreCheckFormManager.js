'use strict';

var RegistrationPreCheckFormManager = (function() {
    return {
        initBillToggle: function($link, $field, $description) {
            if (!$field.val()) {
                $field.parent().hide();
                $description.hide();
            } else {
                $link.hide();
            }

            $link.on('click', function () {
                $(this).hide();
                $field.parent().show();
                $description.show();
            })
        }
    }
})(jQuery);
