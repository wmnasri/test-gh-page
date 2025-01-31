'use strict';

var ContactRequestFormValidator = (function() {

    return {
        getValidationRules: function() {
            return {
                'contact_request[author][lastName]': {
                    required: true
                },
                'contact_request[author][firstName]': {
                    required: true
                },
                'contact_request[author][contact][email]': {
                    required: true,
                    email: true
                },
                'contact_request[author][address][town][zip_code]': {
                    required: true,
                    isZipCode : true
                },
                'contact_request[author][address][town][name]': {
                    required: true
                },
                'contact_request[author][reference]': {
                    isValidClientReference: true
                },
                'contact_request[subject]': {
                    required: true
                },
                'contact_request[message]': {
                    required: true
                },
                'contact_request[author][contact][phone]': {
                    isFrenchPhone: true
                },
                'contact_request[author][contact][cellphone]': {
                    isFrenchMobilePhone: true
                },
                'contact_request[attachments][]': {
                    accept:
                        "image/*," +
                        "text/*," +
                        "application/pdf," +
                        "application/msword," +
                        "application/vnd.ms-excel," +
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document," +
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet," +
                        "application/vnd.oasis.opendocument.text," +
                        "application/vnd.oasis.opendocument.spreadsheet",
                    maxNbFiles: 5,
                    filesSize: 1000 * 1000 * 10
                },
                'contact_request[captcha]': {
                    required: true,
                    isCaptchaValid: 'default'
                }
            };
        },

        getValidationMessages: function() {
            return {
                'contact_request[author][lastName]': {
                    required: "Veuillez indiquer votre nom"
                },
                'contact_request[author][firstName]': {
                    required: "Veuillez indiquer votre prénom"
                },
                'contact_request[author][contact][email]': {
                    required: "Veuillez indiquer votre email",
                    email: "Votre email n'est pas valide"
                },
                'contact_request[author][address][town][zip_code]': {
                    required: "Veuillez indiquer votre code postal",
                    isZipCode : "Votre code postal n'est pas valide"
                },
                'contact_request[author][address][town][name]': {
                    required: "Veuillez indiquer votre commune"
                },
                'contact_request[author][reference]': {
                    isValidClientReference: "La référence client indiquée est invalide"
                },
                'contact_request[subject]': {
                    required: "Veuillez choisir le sujet de votre demande"
                },
                'contact_request[message]': {
                    required: "Veuillez écrire votre message"
                },
                'contact_request[author][contact][phone]': {
                    isFrenchPhone: "Votre numéro de téléphone n'est pas valide"
                },
                'contact_request[author][contact][cellphone]': {
                    isFrenchMobilePhone: "votre numéro de téléphone portable n'est pas valide"
                },
                'contact_request[attachments][]': {
                    filesSize: "Le total des fichiers ne doit pas dépasser 10M. Veuillez choisir moins de fichiers.",
                    accept: "Seuls les formats Texte, Image, PDF, Word/Excel et OpenDocument sont autorisés.",
                    maxNbFiles: "Merci de ne pas choisir plus de 5 pièces jointes"
                },
                'contact_request[captcha]': {
                    required: "Veuillez recopier le captcha",
                    isCaptchaValid: "Le captcha indiqué n'est pas valide"
                }
            };
        }
    };
})();
