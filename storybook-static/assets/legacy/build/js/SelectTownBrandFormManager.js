'use strict';

var SelectTownBrandFormManager = (function () {
    var $townField, $townSelectField, $zipcodeField;
    var areas;

    function reset() {
        $townField.hide();
        $townSelectField.hide();
        $townField.parent().find('.icon-spinner').remove();
        $townField.parent().append('<i class="icon-spinner spin"></i>');
    }

    function loadTowns(zipcode) {
        reset();
        jQuery.ajax({
            type: "GET",
            url: Routing.generate('lderiuc_contact', { codePostal: zipcode }),
            success: function (response) {
                if (response.communes.length === 0) {
                    $townSelectField.hide();
                    $townField.show().val('');
                } else {
                    if (response.active) {
                        displayDomains(response);
                    }
                    displayTowns(response);
                }
                $townField.parent().find('.icon-spinner').remove();
            },
            error: function () {
                $townField.parent().find('.icon-spinner').remove();
                $townField.parent().find('.icon-danger-circle').remove();
                $townField.parent().append('<i class="icon-danger-circle danger"></i>');
                return null;
            }
        });
    }

    function displayTowns(response) {

        if (response.communes.length > 1) {
            $townField.hide();
            $townSelectField.empty();

            var i;
            var town;
            var chosenInsee = JSON.parse(response.chosenInsee);
            var chosenCommune = undefined;
            for (i = 0; i < response.communes.length; ++i) {
                town = JSON.parse(response.communes[i]);
                var selected = "" ;

                if(chosenInsee == town.insee_code){
                    chosenCommune = town.town_name;
                    selected = "selected";
                }

                $townSelectField.append(jQuery(
                    '<option codeinsee="' +town.insee_code + '" value="' + town.town_name + '" '+selected+'>' + town.town_name + '</option>'
                ).data('areas', {
                    Eau: town.has_contrat_d_s_p_eau,
                    Assainissement: town.has_contrat_d_s_p_eau
                }));
            }
            if(chosenCommune != undefined){
                $townSelectField.show().val(chosenCommune).change();
            }
            else{
                $townSelectField.show().val($townSelectField.children().first().val()).change();
            }

        } else {
            town = JSON.parse(response.communes[0]);
            $townSelectField.hide();
            $townField.show().val(town.town_name);

            if (jQuery('#complaint_code_insee').length) {
                jQuery('#complaint_code_insee').val(town.insee_code);
            }
            refreshActivatedAreas({
                Eau: town.has_contrat_d_s_p_eau,
                Assainissement: town.has_contrat_d_s_p_assain
            });
        }
    }
    function refreshActivatedAreas(activatedAreas) {
        jQuery.each(activatedAreas, function (name, activated) {
            if (!activated) {
                $('#' + name).hide().next().hide();
            } else {
                $('#' + name).show().click().next().show();
            }
        });
    }

    function loadEventListeners() {
        $townSelectField.change(function () {
            var $this = jQuery(this);
            var codeinsee = $this.find(':selected').attr('codeinsee');

            if (jQuery('#complaint_code_insee').length) {
                jQuery('#complaint_code_insee').val(codeinsee);
            }
            $townField.val($this.val());
            refreshActivatedAreas($this.find(':selected').data('areas'));
        });

        $zipcodeField.on('input', function () {
            var $this = jQuery(this);
            if ($this.val().length === 5) {
                loadTowns($this.val(), $townField, $townSelectField);
            }
        });
    }

    return {
        init: function ($_zipcodeField, $_townField, $_townSelectField) {
            $townField = $_townField;
            $townSelectField = $_townSelectField;
            $zipcodeField = $_zipcodeField;
            $townSelectField.hide();

            if ($_zipcodeField.val() && $_zipcodeField.val().length === 5) {
                loadTowns($_zipcodeField.val());
            }

            loadEventListeners();
        }
    }
})(Routing, jQuery);
