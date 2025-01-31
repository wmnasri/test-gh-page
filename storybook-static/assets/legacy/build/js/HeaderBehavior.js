'use strict';

var HeaderBehavior = (function () {
    var $accountButton, $accountBox;

    return {
        initAccountBox: function ($_accountButton, $_accountBox, $accountCross) {
            $accountButton = $_accountButton;
            $accountBox = $_accountBox;

            $accountButton.on("click", function (e) {
                e.preventDefault();
                HeaderBehavior.toggleAccountBox();
            });

            $accountCross.on("click", function (e) {
                e.preventDefault();
                HeaderBehavior.toggleAccountBox();
            });
        },
        toggleAccountBox: function () {
            $accountBox.toggle();
            $accountButton.toggleClass('opened');
            $accountBox.find('input[type=email]').focus();
        },
        initButtonScroll: function ($button) {
            $(window).scroll(function () {
                if ($(window).scrollTop() > 0) {
                    $button.addClass("highlighted");
                } else {
                    $button.removeClass("highlighted");
                }
            })
        },
    };
})(jQuery);
