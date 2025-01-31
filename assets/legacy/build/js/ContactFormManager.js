'use strict';

var ContactFormManager = (function () {
    var $townField, $townSelectField, $zipcodeField, $domainBlock, $topicsSelectField;
    var areas;
    var defaultTopics;

    function reset() {
        $topicsSelectField.html(defaultTopics);
        $townField.hide();
        $townSelectField.hide();
        $domainBlock.hide();
        $townField.parent().find('.icon-spinner').remove();
        $townField.parent().append('<i class="icon-spinner spin"></i>');
    }

    function loadTowns(zipcode) {
        reset();
        jQuery.ajax({
            type: "GET",
            url: Routing.generate('lderiuc_contact', { codePostal: zipcode }),
            success: function (response) {
                /*if (response.withredirect !== false && response.redirect_url !== false) {
                    $(location).attr('href', response.redirect_url);
                }*/
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

    function displayDomains(response) {
        areas = response.areas;
        var domainsHtml = '<label for="domain" class="greyLabel">Domaine :</label>';
        for (var i = 0; i < areas.length; i++) {
            var $div = jQuery('<div class="radio domain"></div>');
            var $input = jQuery(
                '<input id="contact_request_domain_' + i + '" value="' + areas[i].name + '" type="radio" data-key="' + i + '" ' +
                'name="contact_request[domain]" class="domain ael-form-control" onclick="ContactFormManager.refreshSelectTopics(this)" />' +
                '<label for="contact_request_domain_' + i + '">' + areas[i].name + '</label>'
            );
            $div.append($input);

            domainsHtml += $div.html();
        }

        $domainBlock.html(domainsHtml);
    }

    function displayAreaTopics(topics) {
        var topicsHtml = '<option disabled="disabled" selected="selected">Choisir un objet</option>';
        for (var i = 0; i < topics.length; ++i) {
            topicsHtml += '<option value="' + topics[i] + '">' + topics[i] + '</option>';
        }

        $topicsSelectField.html(topicsHtml);
    }

    function refreshActivatedAreas(activatedAreas) {
        jQuery.each(activatedAreas, function (name, activated) {
            if (!activated) {
                $('#' + name).hide().next().hide();
            } else {
                $domainBlock.show();
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
        init: function ($_zipcodeField, $_townField, $_townSelectField, $_domainBlock, $_topicsSelectField) {
            $townField = $_townField;
            $townSelectField = $_townSelectField;
            $domainBlock = $_domainBlock;
            $zipcodeField = $_zipcodeField;
            $topicsSelectField = $_topicsSelectField;

            defaultTopics = $topicsSelectField.html();
            $townSelectField.hide();

            if ($_zipcodeField.val() && $_zipcodeField.val().length === 5) {
                loadTowns($_zipcodeField.val());
            }

            loadEventListeners();
        },
        refreshSelectTopics: function (element) {
            var $element = $(element);

            displayAreaTopics(areas[$element.data('key')].options);
        }
    }
})(Routing, jQuery);
