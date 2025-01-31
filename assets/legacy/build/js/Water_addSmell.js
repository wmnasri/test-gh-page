/**
 * Ajout d'une observation
 */

/**
 * 
 * @param {type} message
 * @returns {undefined}
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

/**
 * 
 * @returns {undefined}
 */
$(document).ready(function() {
    $('#button_submit').click(function() {
		
		$.validator.addMethod(
        "frenchDate",
        function(value, element) {
            if(value != ""){
                 return value.match(/^\d\d?\/\d\d?\/\d\d\d\d$/);
            }
            return true;
        },
            "Cette date n'est pas valide."
        );
		
		$.validator.addMethod(
        "maxDate",
        function(value, element) {
           var isMSIE = /*@cc_on!@*/0;
           if( isMSIE ){      
              var pattern = "/(\d{2})\/(\d{2})\/(\d{4})/";
           }else{
              var pattern = /(\d{2})\/(\d{2})\/(\d{4})/;
           }
           var inputDate = new Date(value.replace(pattern,'$3-$2-$1'));
           var newDate = new Date();
           newDate.setMilliseconds(0);
           newDate.setSeconds(0);
           newDate.setMinutes(0);
           newDate.setHours(0);
           console.log(inputDate);
           console.log(newDate);
           var diff = (inputDate - newDate)/3600000;
		   if(diff < 24 ){
			   return true;
		   }
        },
            "Merci de saisir une date antérieure ou égale à la date du jour."
        );
		
        // Validation des champs
        $('#form_add_smell').validate({
            errorClass: "error-label",
            rules: {
                input_smell_date: {
                    required: true,
                    frenchDate: true,
					maxDate: true
                },
                input_smell_time: {
                    required: true,
                    time: true
                },
                water_smell_type: {
                    required: true
                },
				water_smell_duree: {
					required: function() {
					   return $('input[name=water_smell_type]:checked').val() !== "";
                    },
                },
				water_smell_perception: {
					required: function() {
					   return $('input[name=water_smell_type]:checked').val() !== "";
                    },
                },
				water_smell_intensite: {
					required: function() {
					   return $('input[name=water_smell_type]:checked').val() !== "";
                    },
                },
				input_nouvelle_adresse: {
					required: function() {
					   return $('#input_adresse_ode').val() == 0;
                    },
                },
            },
            messages: {
                input_smell_date: {
                    required: "Veuillez saisir la date"
                },
                input_smell_time: {
                    required: "Veuillez saisir l'heure",
                    time: "Cette heure n'est pas valide."
                },
                water_smell_type: {
                    required: "Veuillez sélectionner une odeur"
                },
				water_smell_duree: {
                    required: "Veuillez choisir une durée d’observation"
                },
				water_smell_perception: {
                    required: "Veuillez choisir une perception de l’odeur"
                },
				water_smell_intensite: {
                    required: "Veuillez choisir une intensité de l’odeur"
                },
				water_smell_intensite: {
                    required: "Veuillez choisir une intensité de l’odeur"
                }
            },
            showErrors: function(errorMap, errorList) {
                this.defaultShowErrors();

                for (key in errorMap) {
                    console.log(key);
                    if (typeof (errorMap[key]) === "undefined") {
                        $("#" + key+"_parent").removeClass("ael-form-group-error");
                    }
                    else {
                        $("#" + key+"_parent").addClass("ael-form-group-error");
                    }
                }

                // Affichage du bloc message d'erreur global #}
                if (this.numberOfInvalids() >= 1) {
                    afficheMessageValidation();
                } else {
                    //$(".ael-validation-message").hide(100);
                }
            },
            invalidHandler: function(event, validator) {
                return false;
            },
            unhighlight: function(element) {
                // Suppresion de la coloration d'erreur#}
                $(element).parent().removeClass("ael-form-group-error");
            }
        });
    });
});