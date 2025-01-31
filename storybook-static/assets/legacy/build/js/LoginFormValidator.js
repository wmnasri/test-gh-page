'use strict';

var LoginFormValidator = (function() {

    return {
        getValidationRules: function() {
            return {
                'login[fullReference]': {
                    required: true,
                    isValidClientReference: true
                },
                'login[phone]': {
                    minlength: 10,
                    regex: "^0[\\s.]*([0-9][\\s.]*){9}$"
                },
                'login[cellphone]': {
                    minlength: 10,
                    regex: "^0[\\s.]*([0-9][\\s.]*){9}$"
                },
                'login[email]': {
                    required: true,
                    email: true
                },
                'login[identifier]': {
                    minlength: 4,
                    maxlength: 4,
                    regex: "^[0-9]+$"
                },
                'login[cp_site]': {
                    minlength: 5,
                    maxlength: 5,
                    regex: "^[0-9]{5}$"
                },
            };
        },

        getValidationMessages: function() {
            return {
                'login[fullReference]': {
                    required: "La référence client de votre contrat apparaît en haut de votre facture. Elle commence par 98 et contient 12 chiffres. Sont aussi tolérés les espaces, tirets et points.",
                    isValidClientReference:  "La référence client de votre contrat apparaît en haut de votre facture. Elle commence par 98 et contient 12 chiffres. Sont aussi tolérés les espaces, tirets et points."
                },
                'login[phone]': {
                    minlength: "Le numéro téléphone fixe doit contenir 10 chiffres, veuillez vérifier votre saisie.",
                    regex: "Le numéro téléphone fixe est incorrect, veuillez vérifier votre saisie."
                },
                'login[cellphone]': {
                    minlength: "Le numéro téléphone portable doit contenir 10 chiffres, veuillez vérifier votre saisie.",
                    regex: "Le numéro téléphone portable est incorrect, veuillez vérifier votre saisie.",
                },
                'login[email]': {
                    required: "L’adresse e-mail est incorrecte, veuillez vérifier votre saisie.",
                    email: "L’adresse e-mail est incorrecte, veuillez vérifier votre saisie.",
                    regex: "L’adresse e-mail est incorrecte, veuillez vérifier votre saisie."
                },
                'login[identifier]': {
                    required: "Veuillez saisir votre identifiant.",
                    minlength: "L'identifiant ne doit contenir que quatre caractères numériques.",
                    maxlength: "L'identifiant ne doit contenir que quatre caractères numériques.",
                    regex: "L'identifiant ne doit contenir que quatre caractères numériques."
                },
                'login[cp_site]': {
                    required: "Veuillez saisir votre code postal.",
                    regex: "Le code postal ne doit contenir que 5 caractères."
                },
            }
        }
    }
})(jQuery);
