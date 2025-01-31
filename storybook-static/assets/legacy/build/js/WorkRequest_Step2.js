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

    //Si on veut changer l'adresse courrier => simulation d'un click
    var urlToString = document.URL;
    var urlToAction = urlToString.split("#");
    var adressecourrier = document.getElementById("input_adresse2Courrier").value;
    if (urlToAction[1] === 'ancre_courrier' || adressecourrier !== '') {
        $('#button_adresseCourrier').slideUp('200', function() {
            $('#bloc_adresse_facturation').slideDown('400');
        });
    }
    //remplir la valeur du textare
    var textarea = document.getElementById("textareavalue").className;
    document.getElementById("input_description_travaux").defaultValue = textarea;   
    if (document.getElementById("qasJS") != null) {
        var qasJS = document.getElementById("qasJS").className;
        disabled_address_field(1, qasJS);
        $('input:radio').change(function() {
            if ($(this).val() === '2') {
                disabled_address_field(0, qasJS);
            }
            else {
                disabled_address_field(1, qasJS);
            }
        });
    }
    // Champs de validation du formulaire #}
    $('#button_submit').click(function() {

        // Validation des champs #}
        $('#form_devistravaux2').validate({
            errorClass: "error-label",
            rules: {
                input_nom: {
                    required: true
                },
                input_prenom: {
                    required: true
                },
                input_telFixe: {
                    required:  false,
                    minlength: 10,
                    maxlength: 10,
                    regex: "^0[0-9]+$"
                },
                input_telMobile: {
                    required:  false,
                    minlength: 10,
                    maxlength: 10,
                    regex: "^0[6-7][0-9]+$"
                },
                input_email: {
                    required: true,
                    email: true
                },
                input_adresse: {
                    required: true
                },
                input_adresse2Courrier: {
                    required: true
                },
                input_cp2Courrier: {
                    required: true
                },
                input_nature: {
                    required: true
                },
                input_description_travaux: {
                    required: function() {
                        return $("#input_nature").val() === "Autre";
                    },
                }
            },
            messages: {
                input_nom: {
                    required: "Veuillez saisir votre nom."
                },
                input_prenom: {
                    required: "Veuillez saisir votre prénom."
                },
                input_telFixe: {
                    required: "Veuillez remplir votre numéro de téléphone fixe ou portable. ",
                    minlength: "Le numéro de téléphone fixe est incorrect, veuillez vérifier votre saisi.",
                    maxlength: "Le numéro de téléphone fixe est incorrect, veuillez vérifier votre saisi.",
                    regex: "Le numéro de téléphone fixe est incorrect, veuillez vérifier votre saisi."
                },
                input_telMobile: {
                    required: "",
                    minlength: "Le numéro de téléphone portable est incorrect, veuillez vérifier votre saisi.",
                    maxlength: "Le numéro de téléphone portable est incorrect, veuillez vérifier votre saisi.",
                    regex: "Le numéro de téléphone portable est incorrect, veuillez vérifier votre saisi."
                },
                input_email: {
                    required: "Veuillez saisir votre email.",
                    email: "L’email est incorrecte, veuillez vérifier votre saisi."
                },
                input_adresse: {
                    required: "Merci de remplir le numéro et libellé de la voie."
                },
                input_adresse2Courrier: {
                    required: "Merci de remplir le numéro et libellé de la voie."
                },
                input_cp2Courrier: {
                    required: "Le code postal est incorrect, veuillez vérifier votre saisie.",
                },
                input_nature: {
                    required: "Veuillez saisir une nature des travaux.",
                },
                input_description_travaux: {
                    required: "Veuillez saisir une description des travaux.",
                }
            },
            showErrors: function(errorMap) {
                // Affichage des label au niveau des input #}
                this.defaultShowErrors();

                // Coloration des bloc input #}
                for (key in errorMap) {
                    if (typeof (errorMap[key]) == "undefined") {
                        $("#" + key).parent().removeClass("ael-form-group-error");
                    }
                    else {
                        $("#" + key).parent().addClass("ael-form-group-error");
                    }
                }
                // Affichage du bloc message d'erreur global #}
                if (this.numberOfInvalids() >= 1) {
                    afficheMessageValidation();
                }
            },
            submitHandler: function(form) {
                disabled_address_field(0, "adresseCourrier");
                disabled_address_field(0, "nouveauLogement");
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

    // Gestion des affichages liée au type de contrat #}
    $('#input_typeContrat').on('change', function() {
        if ($('#input_typeContrat option:selected').val() === "PRO") {
            $('#div_siret, #div_ape').slideDown('300');
        }
        else {
            $('#div_siret, #div_ape').slideUp('300');
        }
    });


});


function disabled_address_field(disabled, control_type) {
    if (disabled == 1) {
        if (control_type == "adresseCourrier") {
            $('#input_adresse2Courrier').attr('disabled', 'disabled');
            $('#input_complement2Courrier').attr('disabled', 'disabled');
            $('#input_lieudit2Courrier').attr('disabled', 'disabled');
            $('#input_cp2Courrier').attr('disabled', 'disabled');
        }
        else {
            $('#input_adresse').attr('disabled', 'disabled');
            $('#input_complement').attr('disabled', 'disabled');
            $('#input_lieudit').attr('disabled', 'disabled');
        }
    }
    else {
        if (control_type == "adresseCourrier") {
            $('#input_adresse2Courrier').removeAttr('disabled');
            $('#input_complement2Courrier').removeAttr('disabled');
            $('#input_lieudit2Courrier').removeAttr('disabled');
            $('#input_cp2Courrier').removeAttr('disabled');
        }
        else {
            $('#input_adresse').removeAttr('disabled');
            $('#input_complement').removeAttr('disabled');
            $('#input_lieudit').removeAttr('disabled');
        }
    }
}