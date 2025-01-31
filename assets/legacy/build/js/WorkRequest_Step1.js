/**
 * Fichier js de validation de la premiere Ã©tape 
 * de demande de travaux
 */
function afficheMessageValidation(message) {

    if (typeof (message) == "undefined") {
        messageErreur = "Certaines informations saisies ci-dessous ne sont pas valides";
    }
    else {
        messageErreur = message;
    }

    var htmlGlobalMessage = "<strong>Erreur <br />Veuillez vérifier votre saisie.</strong><br /><br />" + messageErreur;
    $(".ael-validation-message").html(htmlGlobalMessage);
    $(".ael-validation-message").addClass('error');
    $(".ael-validation-message").show();
}


$(document).ready(function() {

    jQuery.validator.addMethod("cityHandledByLDEDevis",function(value, element) {
        var nbCitiesReturn = $("#nbCitiesReturn").val();
        return this.optional(element) || nbCitiesReturn >= 1;
    }, function() {return errorMessageDevis});


    jQuery.validator.addMethod("goodCase",function(value, element) {
        var regex = /^[A-Z- \/]+ \([0-9]{4,5}\) *$/
        return this.optional(element) || (regex.test(value) && ($('#ui-id-1').css('display') == block));
    }, "Veuillez sélectionner une des villes dans la liste déroulante.");

    // Champs de validation du formulaire 
    
    $('#button_submit').click(function() {
        // Validation des champs 
        $('#form_devis_travaux').validate({
            
            errorClass: "error-label",
            rules: {
                    input_cp_js: {
                    required: true,
                    cityHandledByLDEDevis: true,
                    goodCase: true
                }
            },
            messages: {
                input_cp_js: {
                    required: "Veuillez saisir la ville ou code postal.",
                }
            },
            showErrors: function(errorMap) {
                // Affichage des label au niveau des input
                this.defaultShowErrors();
                // Coloration des bloc input 
                for (key in errorMap) {
                    if (typeof (errorMap[key]) == "undefined") {
                        $("#" + key).parent().removeClass("ael-form-group-error");
                    }
                    else {
                        $("#" + key).parent().addClass("ael-form-group-error");
                    }
                }
                // Affichage du bloc message d'erreur global 
                if (this.numberOfInvalids() >= 1) {
                    afficheMessageValidation();
                }
            },
            submitHandler: function(form) {
                /*
                 // for compteur in compteurs % }
                 $("#input_date_{{ compteur.numCompteur }}").removeAttr('disabled');
                 // endfor % }
                 */
                //disabled_address_field(0);
                form.submit();
            },
            invalidHandler: function(event, validator) {
                return false;
            },
            unhighlight: function(element) {
                // Suppresion de la coloration d'erreur#}
                $(element).parent().removeClass("ael-form-group-error").addClass("ael-form-group");
            },
            errorPlacement: function(error, element) {
                element.parent().append(error);
            }
        });
    });
});

