'use strict';

var RegistrationFormValidator = (function() {

    return {
        getValidationRules: function() {
            return {
                'registration[contact][phone]': {
                    minlength: 10,
                    maxlength: 10,
                    regex: "^[0-9]+$"
                },
                'registration[contact][cellphone]': {
                    minlength: 10,
                    maxlength: 10,
                    regex: "^0(6|7)[0-9]+$"
                },
                'registration[contract][name]': {
                    required: true,
                    maxlength: 30
                },
                'registration[ape_code]': {
                    regex: "^[a-zA-Z0-9\._%\+-]{5}$",
                    minlength: 5,
                    maxlength: 5
                },
                'registration[siret_code]': {
                    isSiret: true
                },
                'registration[contact][email][first]': {
                    required: true,
                    email: true
                },
                'registration[contact][email][second]': {
                    required: true,
                    email: true,
                    equalTo: '[name="registration[contact][email][first]"]'
                },
                'registration[raw_password][first]': {
                    required: true,
                    regex: "(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}"
                },
                'registration[raw_password][second]': {
                    required: true,
                    equalTo: '[name="registration[raw_password][first]"]'
                },
                'registrationConsent[terms_validated]': {
                    required: true
                },
                'registration[contract][type]': {
                    valueNotEquals: ""
                }
            };
        },

        getValidationMessages: function() {
            return {
                'registration[contact][phone]': {
                    minlength: "Le numéro téléphone fixe doit contenir 10 chiffres, veuillez vérifier votre saisie.",
                    maxlength: "Le numéro téléphone fixe doit contenir 10 chiffres, veuillez vérifier votre saisie.",
                    regex: "Le numéro téléphone fixe est incorrect, veuillez vérifier votre saisie."
                },
                'registration[contact][cellphone]': {
                    minlength: "Le numéro téléphone portable doit contenir 10 chiffres, veuillez vérifier votre saisie.",
                    maxlength: "Le numéro téléphone portable doit contenir 10 chiffres, veuillez vérifier votre saisie.",
                    regex: "Le numéro téléphone portable est incorrect, veuillez vérifier votre saisie."
                },
                'registration[contract][name]': {
                    required: "Veuillez saisir le nom de votre contrat.",
                    maxlength: "Le nom du contrat est trop long."
                },
                'registration[ape_code]': {
                    regex: "Veuillez vérifier le format de votre code APE.",
                    minlength: "Veuillez vérifier le format de votre code APE.",
                    maxlength: "Veuillez vérifier le format de votre code APE."
                },
                'registration[siret_code]':{
                    isSiret: "Veuillez vérifier le format de votre N° siret ou siren."
                },
                'registration[contact][email][first]': {
                    required: "L’adresse e-mail est incorrecte, veuillez vérifier votre saisie.",
                    email: "L’adresse e-mail est incorrecte, veuillez vérifier votre saisie.",
                    regex: "L’adresse e-mail est incorrecte, veuillez vérifier votre saisie."
                },
                'registration[contact][email][second]': {
                    required: "Votre e-mail de vérification est différent de votre e-mail. Veuillez le corriger.",
                    email: "L’adresse e-mail est incorrecte, veuillez vérifier votre saisie.",
                    equalTo: "Votre e-mail de vérification est différent de votre e-mail. Veuillez le corriger.",
                    regex: "L’adresse e-mail est incorrecte, veuillez vérifier votre saisie."
                },
                'registration[raw_password][first]': {
                    required: 'Le mot de passe est incorrect, veuillez vérifier votre saisie.',
                    regex: 'Le mot de passe est incorrect, veuillez vérifier votre saisie.'
                },
                'registration[raw_password][second]': {
                    required: 'Votre mot de passe de vérification est différent du mot de passe initial. Veuillez les ressaisir.',
                    equalTo: 'Votre mot de passe de vérification est différent du mot de passe initial. Veuillez les ressaisir.'
                },
                'registrationConsent[terms_validated]': {
                    required: 'Afin de valider votre inscription, vous devez accepter les conditions générales d’utilisation du site.'
                },
                'registration[contract][type]': {
                    valueNotEquals: "Veuillez selectionner un type de contrat."
                }
            }
        }
    }
})(jQuery);
