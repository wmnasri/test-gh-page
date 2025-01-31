'use strict';

var RegistrationFormManager = (function() {
    var $contractType, $siret, $ape;
    var formSubmitted = false;
    var trackName, trackSurname, trackRef, trackSuccessor, trackBaseCode;

    function load() {
        formSubmitted = true;
    }

    function updateContractFields() {
        if ($contractType.val() === "business") {
            $siret.show();
            $ape.show();
        } else {
            $siret.hide();
            $ape.hide();
        }
    }

    function getCookie(cookieName) {
        var name = cookieName + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "";
    }

    function trackAbort() {
        if (getCookie("mode_edition") == 1 && !formSubmitted){
            document.cookie = "mode_edition=0;Secure;path=/";
        }
    }

    return {
        initContractType: function ($contractTypeSelector, $siretField, $apeField) {
            $contractType = $contractTypeSelector;
            $siret = $siretField;
            $ape = $apeField;

            $contractType.on('change', updateContractFields);
            updateContractFields();
        },
        initTracing: function($form, $fields, name, surname, ref, successor, baseCode) {
            trackName = name;
            trackSurname = surname;
            trackRef = ref;
            trackSuccessor = successor;
            trackBaseCode = baseCode;
            $form.on('submit', load);

            $fields.forEach(function($field) {
                $field.on('click', function () {
                    if (getCookie("mode_edition") == 0) {
                        document.cookie = "mode_edition=1;Secure;path=/";
                    }
                });
            });

            jQuery(window).bind('beforeunload', trackAbort);
        }, preventCopyPast: function($password, $repassword, $mail, $remail) {
            $($password).on('copy paste cut', function(e) {
                e.preventDefault();
            });
            $($repassword).on('copy paste cut', function(e) {
                e.preventDefault();
            });
            $($mail).on('copy paste cut', function(e) {
                e.preventDefault();
            });
            $($remail).on('copy paste cut', function(e) {
                e.preventDefault();
            });
        }

    }
})(jQuery, Routing);
