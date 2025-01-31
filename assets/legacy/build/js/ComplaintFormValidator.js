'use strict';

var ComplaintFormValidator = (function() {

    return {
        getValidationRules: function() {
            return {
                'complaint[author][lastName]': {
                    required: true
                },
                'complaint[author][firstName]': {
                    required: true
                },
                'complaint[author][contact][email]': {
                    required: true,
                    email: true
                },
                'complaint[commune]': {
                    required: true
                },
                'complaint[author][address][address]': {
                    required: true
                },
                'complaint[subject]': {
                    required: true,
                    isValidMessageObject: true
                },
                'complaint[message]': {
                    required: true,
                    maxlength: 5000
                },
                'complaint[author][reference]': {
                    isValidClientReference: true
                },
                'complaint[author][contact][phone]': {
                    isFrenchPhone: true,
                    required: {
                        depends: function() {
                            return jQuery('[name="complaint[author][contact][cellphone]"]').val() === '';
                        }
                    }
                },
                'complaint[author][contact][cellphone]': {
                    isFrenchMobilePhone: true,
                    required: {
                        depends: function() {
                            return jQuery('[name="complaint[author][contact][phone]"]').val() === '';
                        }
                    }
                },

                'complaint[attachments][]': {
                    accept:
                        "application/pdf," +
                        "application/x-pdf," +
                        "image/jpeg," +
                        "image/png," +
                        "application/msword",
                    maxNbFiles: 1,
                    filesSize: 5242880 // 5Mo
                },
                'complaint[captcha]': {
                    required: true,
                    isCaptchaValid: 'default'
                }
            };
        },

        getValidationMessages: function() {
            return {
                'complaint[author][lastName]': {
                    required: "Veuillez indiquer votre nom"
                },
                'complaint[author][firstName]': {
                    required: "Veuillez indiquer votre prénom"
                },
                'complaint[author][contact][email]': {
                    required: "Veuillez indiquer votre email",
                    email: "Votre email n'est pas valide"
                },
                'complaint[commune]': {
                    required: "Veuillez indiquer votre commune"
                },
                'complaint[author][address][address]': {
                    required: "Veuillez indiquer votre adresse"
                },
                'complaint[subject]': {
                    required: "Veuillez choisir l'objet de votre demande",
                    isValidMessageObject: "Veuillez choisir un objet dans la liste"
                },
                'complaint[message]': {
                    required: "Veuillez écrire votre message",
                    maxlength: "Votre message ne doit pas comporter plus de 5000 caractères"
                },
                'complaint[author][reference]': {
                    isValidClientReference: "Veuillez saisir une référence client valide"
                },
                'complaint[author][contact][phone]': {
                    isFrenchPhone: "Votre numéro de téléphone n'est pas valide",
                    required: "Veuillez indiquer votre numéro de téléphone fixe ou portable"
                },
                'complaint[author][contact][cellphone]': {
                    isFrenchMobilePhone: "votre numéro de téléphone portable n'est pas valide",
                    required: "Veuillez indiquer votre numéro de téléphone portable ou fixe"
                },
                'complaint[attachments][]': {
                    filesSize: "La taille de fichier dépasse la limite autorisée (5Mo).",
                    accept: "Le format de fichier que vous souhaitez envoyer n'est pas compatible, seuls les formats de type jpg, png, pdf ou doc sont acceptés.",
                    maxNbFiles: "Merci de ne pas choisir plus de 1 pièce jointe"
                },
                'complaint[captcha]': {
                    required: "Veuillez recopier le captcha",
                    isCaptchaValid: "Le captcha recopié est incorrect"
                }
            };
        }
    };
})(jQuery);
