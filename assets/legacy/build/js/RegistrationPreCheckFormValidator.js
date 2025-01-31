'use strict';

var RegistrationPreCheckFormValidator = (function() {

    return {
        getValidationRules: function() {
            return {
                'registration_pre_check[contract][reference]': {
                    required: true,
                    isValidClientReference: true
                },
                'registration_pre_check[contact][phone]': {
                    minlength: 10,
                    regex: "^0[1-9]{1}([^0-9]?[0-9]{2}){4}$"
                },
                'registration_pre_check[contact][cellphone]': {
                    minlength: 10,
                    regex: "^0[6|7]{1}([^0-9]?[0-9]{2}){4}$"
                },
                'registration_pre_check[contact][email][first]': {
                    required: false,
                    email: true
                },
                'registration_pre_check[contract][cp_site]': {
                    required: false,
                    minlength: 5,
                    maxlength: 5,
                    regex: "^[0-9]{5}$"
                },
                'registration_pre_check[contract][identifier]': {
                    required: false,
                    minlength: 4,
                    maxlength: 4,
                    regex: "^-?[0-9]+$"
                },
            };
        },

        getValidationMessages: function() {
            return {
                'registration_pre_check[contract][reference]': {
                    required: "Vous devez renseigner la référence du contrat.",
                    isValidClientReference:  "La référence client de votre contrat apparaît en haut de votre facture. Elle commence par 98 et contient 12 chiffres. Sont aussi tolérés les espaces, tirets et points."
                },
                'registration_pre_check[contact][phone]': {
                    minlength: "Le numéro téléphone fixe doit contenir 10 chiffres, veuillez vérifier votre saisie.",
                    maxlength: "Le numéro téléphone fixe doit contenir 10 chiffres, veuillez vérifier votre saisie.",
                    regex: "Le numéro téléphone fixe est incorrect, veuillez vérifier votre saisie."
                },
                'registration_pre_check[contact][cellphone]': {
                    minlength: "Le numéro téléphone portable doit contenir 10 chiffres, veuillez vérifier votre saisie.",
                    maxlength: "Le numéro téléphone portable doit contenir 10 chiffres, veuillez vérifier votre saisie.",
                    regex: "Le numéro téléphone portable est incorrect, veuillez vérifier votre saisie.",
                },
                'registration_pre_check[contact][email][first]': {
                    required: "L’adresse e-mail est incorrecte, veuillez vérifier votre saisie.",
                    email: "L’adresse e-mail est incorrecte, veuillez vérifier votre saisie.",
                    regex: "L’adresse e-mail est incorrecte, veuillez vérifier votre saisie."
                },
                'registration_pre_check[contract][identifier]': {
                    required: "Veuillez saisir votre identifiant.",
                    minlength: "L'identifiant ne doit contenir que quatre caractères numériques.",
                    maxlength: "L'identifiant ne doit contenir que quatre caractères numériques.",
                    regex: "L'identifiant ne doit contenir que quatre caractères numériques."
                },
                'registration_pre_check[contract][cp_site]': {
                    required: "Veuillez saisir votre code postal.",
                    regex: "Le code postal ne doit contenir que 5 caractères."
                }
            };
        }
    };
})(jQuery);
