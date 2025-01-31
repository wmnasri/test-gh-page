'use strict';

var TastingFormValidator = (function() {

    return {
        getValidationRules: function() {
            return {
                'tasting[date]': {
                    required: true,
                    isFrenchDate: true,
                    isPastDate: true
                },
                'tasting[time]': {
                    required: true,
                    isPastTimeFromDate: jQuery('[name="tasting[date]"]'),
                    time: true
                },
                'tasting[smell][type]': {
                    required: true
                },
                'tasting[taste][type]': {
                    required: true
                }
            };
        },

        getValidationMessages: function() {
            return {
                'tasting[date]': {
                    required: "Veuillez saisir la date",
                    isFrenchDate: "Veuillez saisir une date sous la forme jj/mm/aaaa",
                    isPastDate: "Veuillez saisir une date inférieure à la date actuelle"
                },
                'tasting[time]': {
                    required: "Veuillez saisir l'heure",
                    time: "Veuillez saisir une heure sous la forme hh:mm",
                    isPastTimeFromDate: "Veuillez saisir une heure inférieure à l'heure actuelle"
                },
                'tasting[smell][type]': {
                    required: "Veuillez séléctionner une odeur"
                },
                'tasting[taste][type]': {
                    required: "Veuillez séléctionner un goût"
                }
            }
        }
    }
})(jQuery, jQuery.validator);
