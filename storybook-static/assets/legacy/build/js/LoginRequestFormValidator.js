'use strict';

var LoginRequestFormValidator = (function() {

    return {
        getValidationRules: function() {
            return {
                'tsme_user_login[_username]': {
                    required: true,
                    email: true
                },
                'tsme_user_login[_password]': {
                    required: true
                }
            }
        },
        getValidationMessages: function() {
            return {
                'tsme_user_login[_username]': {
                    required: "Veuillez indiquer votre email",
                    email: "Votre email n'est pas valide"
                },
                'tsme_user_login[_password]': {
                    required: "Veuillez indiquer votre mot de passe"
                }
            }
        }
    }
})();