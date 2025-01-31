'use strict';

var ReportFormValidator = (function() {

    return {
        getValidationRules: function() {
            return {
                'report[category]': {
                    required: true
                },
                'report[nature]': {
                    required: true
                },
                'report[description]': {
                    maxlength: 255
                },
                'report[address]': {
                    required: true
                },
                'report[city]': {
                    required: true,
                    regex: '^[A-Z-]+[(][0-9]{5}[)]$'
                },
                'report[date]': {
                    required: true,
                    regex: '^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$'
                },
                'report[time]': {
                    required: true,
                    regex: '^[0-9]{2}\:[0-9]{2}$'
                },
                'report[name]': {
                    required: true
                },
                'report[surname]': {
                    required: true
                },
                'report[email]': {
                    required: true,
                    email: true
                },
                'report[phone]': {
                    required: true,
                    minlength: 10,
                    maxlength: 10,
                    regex: '^0[0-9]+$'
                },
                'report[captcha]': {
                    required: true,
                    isCaptchaValid: 'default'
                }
            };
        },

        getValidationMessages: function() {
            return {
                'report[category]': {
                    required: 'Veuillez choisir la catégorie du problème'
                },
                'report[nature]': {
                    required: 'Veuillez choisir la nature du problème'
                },
                'report[description]': {
                    maxlength: "Votre description ne doit pas excéder 255 caractères"
                },
                'report[address]': {
                    required: 'Veuillez saisir l\'adresse'
                },
                'report[city]': {
                    required: 'Veuillez saisir la ville ou code postal',
                    regex: 'Veuillez saisir la ville ou code postal valide'
                },
                'report[date]': {
                    required: 'Veuillez saisir la date',
                    regex: 'Veuillez saisir la date valide'
                },
                'report[time]': {
                    required: 'Veuillez saisir l\'heure',
                    regex: 'Veuillez saisir l\'heure valide'
                },
                'report[surname]': {
                    required: 'Veuillez saisir le nom'
                },
                'report[name]': {
                    required: 'Veuillez saisir le prénom'
                },
                'report[email]': {
                    required: 'Veuillez saisir l\'email',
                    email: 'L\'adresse e-mail est incorrecte, veuillez vérifier votre saisie'
                },
                'report[phone]': {
                    required: 'Veuillez saisir le numéro de téléphone fixe',
                    minlength: 'Le numéro de téléphone fixe doit contenir 10 chiffres, veuillez vérifier votre saisie',
                    maxlength: 'Le numéro de téléphone fixe doit contenir 10 chiffres, veuillez vérifier votre saisie',
                    regex: 'Le numéro de téléphone fixe doit contenir 10 chiffres, veuillez vérifier votre saisie'
                },
                'report[captcha]': {
                    required: 'Veuillez recopier le captcha',
                    isCaptchaValid: "Le captcha indiqué n'est pas valide"
                }
            }
        }
    }
})();
