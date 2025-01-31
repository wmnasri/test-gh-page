'use strict';

var ContractFormValidator = (function() {

    return {
        getValidationRules: function() {
            return {
                'add_contract[fullReference]': {
                    required: true,
                    isValidClientReference: true
                },
                'add_contract[phone]': {
                    minlength: 10,
                    regex: "^0[\\s.]*([0-9][\\s.]*){9}$"
                },
                'add_contract[cellphone]': {
                    minlength: 10,
                    regex: "^0[\\s.]*([0-9][\\s.]*){9}$"
                },
                'add_contract[email]': {
                    required: true,
                    email: true
                },
                'add_contract[identifier]': {
                    minlength: 4,
                    maxlength: 4,
                    regex: "^[0-9]+$"
                },
                'add_contract[cp_site]': {
                    minlength: 5,
                    maxlength: 5,
                    regex: "^[0-9]{5}$"
                },
            };
        },

        getValidationMessages: function() {
            return {
                'add_contract[fullReference]': {
                    required: "Vous devez renseigner la référence du contrat et son identifiant ou le montant de votre dernière facture.",
                    isValidClientReference:  "La référence de votre contrat ne doit contenir que des caractères numériques, au nombre de 10, 14 ou 16 selon le cas. Sont aussi tolérés les espaces, tirets et points."
                },
                'add_contract[phone]': {
                    minlength: "Le numéro téléphone fixe doit contenir 10 chiffres, veuillez vérifier votre saisie.",
                    maxlength: "Le numéro téléphone fixe doit contenir 10 chiffres, veuillez vérifier votre saisie.",
                    regex: "Le numéro téléphone fixe est incorrect, veuillez vérifier votre saisie."
                },
                'add_contract[cellphone]': {
                    minlength: "Le numéro téléphone portable doit contenir 10 chiffres, veuillez vérifier votre saisie.",
                    maxlength: "Le numéro téléphone portable doit contenir 10 chiffres, veuillez vérifier votre saisie.",
                    regex: "Le numéro téléphone portable est incorrect, veuillez vérifier votre saisie.",
                },
                'add_contract[email]': {
                    required: "L’adresse e-mail est incorrecte, veuillez vérifier votre saisie.",
                    email: "L’adresse e-mail est incorrecte, veuillez vérifier votre saisie.",
                    regex: "L’adresse e-mail est incorrecte, veuillez vérifier votre saisie."
                },
                'add_contract[identifier]': {
                    required: "Veuillez saisir votre identifiant.",
                    minlength: "L'identifiant ne doit contenir que quatre caractères numériques.",
                    maxlength: "L'identifiant ne doit contenir que quatre caractères numériques.",
                    regex: "L'identifiant ne doit contenir que quatre caractères numériques."
                },
                'add_contract[cp_site]': {
                    required: "Veuillez saisir votre code postal.",
                    regex: "Le code postal ne doit contenir que 5 caractères."
                },
            }
        }
    }
})(jQuery);
