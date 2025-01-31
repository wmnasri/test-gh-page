'use strict';

var TastingFormManager = (function() {
    var $gifLoader, $submitContainer;

    function load() {
        if (jQuery(this).valid()) {
            $submitContainer.hide();
            $gifLoader.show();
        }
    }

    return {
        initGlobalFormToggle: function($buttons, $canceller, $formContainer) {
            $buttons.on('click', function() {
                $formContainer.slideDown('400');
                $(this).parent().slideUp('400');
            });
            $canceller.on('click', function() {
                $formContainer.slideUp('400');
                $buttons.parent().slideDown('400');
            });
        },
        initDatePicker: function($dateField) {
            $dateField.datepicker($.datepicker.regional["fr"]);
        },
        initSmellToggle: function($radioFields, $descriptionField) {
            $descriptionField.hide();
            $radioFields.on('change', function() {
                if (this.value == 0) {
                    $descriptionField.hide();
                } else {
                    $descriptionField.show();
                }
            });
        },
        initTasteToggle: function($radioFields, $intensityFields, $descriptionField) {
            $intensityFields.hide();
            $descriptionField.hide();
            $radioFields.on('change', function() {
                if (this.value == 0) {
                    $intensityFields.hide();
                    $descriptionField.hide();
                } else {
                    if (this.value == $radioFields.size() - 1) {
                        $descriptionField.show();
                    } else {
                        $descriptionField.hide();
                    }
                    $intensityFields.show();
                }
            });
        },
        initLoader: function($form, $loader, $submitDiv) {
            $gifLoader = $loader;
            $submitContainer = $submitDiv;

            $gifLoader.hide();
            $form.on('submit', load);
        }
    };
})(jQuery, jQuery.datepicker);
