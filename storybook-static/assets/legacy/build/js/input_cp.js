/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function serviceData(data) {
    if(data.match(/^\d+$/)){
        return {codePostal: data};
    }else {
        return {ville: data};
    }
}
var errorMessageDevis = '';
$(document).ready(function() {
    if ($(".bt-check-select").length) {
        $(".bt-check-select").attr("disabled", true);
    }
    $('#input_cp_js').autocomplete({

        source: function(requete, reponse) {
            $.ajax({
                url: getPath('/search-towns-water-in-my-city/' + $('#input_cp_js').val()),
                dataType: 'json',
                method: 'get',
                success: function(donnee) {
                    errorMessageDevis = "<span id='noHandled'>La ville saisie ne correspond à aucune commune desservie par nos services. <br />Pour connaître le distributeur de votre commune, veuillez vous renseigner auprès de votre mairie.</span>";
                    $("#nbCitiesReturn").val(donnee.length+"");
                    if (donnee.length == 0) {
                        $('#input_cp_js').removeClass("ui-autocomplete-loading");
                    }
                    reponse($.map(donnee, function(objet) {
                        $('#input_cp_js').removeClass("ui-autocomplete-loading");
                        return { label: objet.name + ' (' + objet.zipCode + ') ', value: objet};
                    }));
                },
                error: function() {
                    errorMessageDevis = "<span id='noHandled'>Une erreur technique s'est produite. <br />Merci de réessayer ultérieurement ou contacter votre service client.</span>";
                    $('#input_cp_js').removeClass("ui-autocomplete-loading");
                }
            });
        },
        close: function(event, ui) {
            if (ui.item) {
                return;
            }
            var value = $('#input_cp_js').val(),
                valueLowerCase = value.toLowerCase(),
                valid = false;
            $('.ui-menu').children("li").each(function() {
                if ($(this).children("a").text().toLowerCase() == valueLowerCase) {
                    this.selected = valid = true;
                    return false;
                }
            });
            if (valid) {
                return;
            }
        },
        open: function(event, ui){
            if ($("#noHandled").length > 0){
                $("#noHandled").remove();
                $("#input_cp_js").parent().removeClass("ael-form-group-error").addClass("ael-form-group");
            }
            return false;
        },
        focus: function(event, ui) {
            return false;
        },
        select: function(event,ui) {
            if ($('#dataTown').length) {
                $('#dataTown').val(JSON.stringify(ui.item.value));
            }

            $('#input_cp_js').val(ui.item.label);

            if ($(".bt-check-select").length) {
                $(".bt-check-select").prop("disabled", false);
            }
            return false;
        },
        minLength: 3
    });


    $('#input_cp_js').focusout(function() {
        $('#input_cp_js').removeClass("ui-autocomplete-loading");
    });

    $('#input_cp_js').focusin(function() {
    });

    $('#input_cp_js').keydown(function(e) {
        if(e.keyCode == 8 || e.keyCode == 46) { // KeyCode (8) [backspace] and (46) [delete]
            $('#dataTown').val('');
            if ($(".bt-check-select").length) {
                $(".bt-check-select").prop("disabled", true);
            }
        }
    });

});
