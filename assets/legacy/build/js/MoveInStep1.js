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

function serviceData(data) {
    if(data.match(/^\d+$/)){
        return {codePostal: data};
    }else {
        return {ville: data};
    }
    
}


$(document).ready(function() {
    var errorMessageMoveIn = '';
    $.validator.addMethod("cityHandledByLDE",function(value, element) {
        var isSuccess = true;

        if ($('#nbCitiesReturn').val() < 1){
            /*Test With AJAX*/
            isSuccess = false;
            var url = document.getElementById("urlservice").className;
            var matches = value.match(/\d+/);
            var cp = matches[0];
            if (cp.length  == 5 || cp.length  == 4){
                var ville = value.split(/ \(\d+\)/);
                ville = ville[0];
                $.ajax({
                    url: url + 'getCommunes',
                    dataType: 'json',
                    method: 'get',
                    async: false,
                    data: {codePostal : cp},
                    success: function(donnee) {
                        errorMessageMoveIn = "<span id='noHandled'>La ville saisie ne correspond à aucune commune desservie par nos services. <br />Pour connaître le distributeur de votre commune, veuillez vous renseigner auprès de votre mairie.</span>";
                        for(var i = 0; i < donnee.communes.length; i++){
                            isSuccess = donnee.communes[i].LIBELLE == ville ? true : false;
                            if (isSuccess)  break ; 
                        }
                    },
                    error : function(resultat, statut, erreur){
                        errorMessageMoveIn = "<span id='noHandled'>Une erreur technique s'est produite. <br />Merci de réessayer ultérieurement ou contacter votre service client.</span>";
                        return false;
                    }
                });
            }
        }
        return isSuccess;
    }, function() {return errorMessageMoveIn});


    $.validator.addMethod("goodCase",function(value, element) {
        var regex = /^[A-Z0-9- \/']+ \([0-9]{4,5}\) *$/
        return this.optional(element) || regex.test(value);
    }, "Veuillez sélectionner une des villes dans la liste déroulante.");



    // Champs de validation du formulaire 
    
    $('#button_submit').click(function() {
        // Validation des champs
        $('#form_emmenagement').validate({
            
            errorClass: "error-label",
            rules: {
                    input_cp_js: {
                    required: true,
                    cityHandledByLDE: true,
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
                form.submit();
            },
            invalidHandler: function(event, validator) {
                return false;
            },
            unhighlight: function(element) {
                // Suppression de la coloration d'erreur
                $(element).parent().removeClass("ael-form-group-error").addClass("ael-form-group");
            },
            errorPlacement: function(error, element) {
                element.parent().append(error);
            }
        });
    });
});

