'use strict';

var QuickAccessManager = (function() {
    return {
        initLoader: function (form, submit, loader) {
            form.addEventListener('submit', function() {
                submit.style.display = 'none';
                loader.style.display = 'inline-block';
            });
        },
        initFormSwitcher: function(form, links, link) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                form.style.display = '';
                links.style.display = 'none';
            });
        }
    };
})();
