'use strict';

var CaptchaManager = (function() {
    var name, $image, $reload;

    function addListeners() {
        $reload.on('click', function() {
            $image.attr('src', Routing.generate('captcha', { 'name': name }) + '?' + new Date().getTime());
        });
    }

    return {
        init: function(_name, $_image, $_reload) {
            name = _name;
            $image = $_image;
            $reload = $_reload;

            addListeners();
        }
    }
})(jQuery, Routing);
