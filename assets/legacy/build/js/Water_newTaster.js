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

    
    //Disable paste sur email
    var email = document.getElementById("input_email2");
    email.onpaste = function(e) {
        e.preventDefault();
    }
    //Disable paste sur password
    var pass = document.getElementById("input_pass2");
    pass.onpaste = function(e) {
        e.preventDefault();
    }
    if (document.getElementById("qasJS") != null) {
        var qasJS = document.getElementById("qasJS").className;
        
        disabled_address_field(1);
        $('input:radio').change(function() {
            if ($(this).val() === '2') {
                disabled_address_field(0);
            }
            else {
                disabled_address_field(1);
            }
        });
    }
    // Champs de validation du formulaire #}
    $('#button_submit').click(function() {
        // Validation des champs #}
        $('#form_newtaster').validate({
            errorClass: "error-label",
            rules: {
                input_tel: {
                    required:  false,
                    minlength: 10,
                    maxlength: 10,
                    regex: "^0[0-9]+$"
                },
                input_email: {
                    required: true,
                    email: true
                },
                input_email2: {
                    required: true,
                    email: true,
                    equalTo: "#input_email"
                },
                input_pass: {
                    required: true,
                    minlength: 6
                },
                input_pass2: {
                    required: true,
                    minlength: 6,
                    equalTo: "#input_pass"                    
                },
                input_adresse2Degustation: {
                    required: true
                },
                input_cp_js: {
                    required: true
                },
                input_prenom:{
                    required: true
                },
                input_nom: {
                    required: true
                }
            },
            messages: {
                input_tel: {
                    required: "Veuillez remplir votre numéro de téléphone fixe ou portable. ",
                    minlength: "Le numéro de téléphone est incorrect, veuillez vérifier votre saisi.",
                    maxlength: "Le numéro de téléphone est incorrect, veuillez vérifier votre saisi.",
                    regex: "Le numéro de téléphone est incorrect, veuillez vérifier votre saisi."
                },
                input_email: {
                    required: "Veuillez saisir votre email.",
                    email: "L’email est incorrecte, veuillez vérifier votre saisi."
                },
                input_email2: {
                    required: "Merci de vérifier votre e-mail.",
                    email: "L’email est incorrecte, veuillez vérifier votre saisi.",
                    equalTo: "Votre e-mail de vérification est différent de votre e-mail. Veuillez le corriger",
                },
                input_pass: {
                    required: "Le mot de passe est incorrecte, veuillez vérifier votre saisie.",
                    minlength: "Le mot de passe doit avoir au moins 6 caractéres."
                },
                input_pass2: {
                    required: "Le mot de passe est incorrecte, veuillez vérifier votre saisie.",
                    equalTo: "Votre mot de passe de vérification est différent du mot de passe initial. Veuillez les ressaisir.",
                    minlength: "Le mot de passe doit avoir au moins 6 caractéres."
                },
                input_adresse2Degustation: {
                    required: "Merci de remplir le numéro et libellé de la voie."
                },
                input_cp_js: {
                    required: "Le code postal est incorrect, veuillez vérifier votre saisie."
                },
                input_prenom: {
                    required: "Veuillez saisir votre prénom."
                },
                input_nom: {
                    required: "Veuillez saisir votre nom."
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
                disabled_address_field(0);
                form.submit();
            },
            invalidHandler: function(event, validator) {
                //Effacer les mots de passe
                $('input[type="password"]').val('');
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


function disabled_address_field(disabled) {
    if (disabled == 1) {
            $('#input_adresse2Degustation').attr('disabled', 'disabled');
            $('#input_complement2Degustation').attr('disabled', 'disabled');
            $('#input_lieudit2Degustation').attr('disabled', 'disabled');
            $('#input_cp_js').attr('disabled', 'disabled');

    }
    else {
         $('#input_adresse2Degustation').removeAttr('disabled');
         $('#input_complement2Degustation').removeAttr('disabled');
         $('#input_lieudit2Degustation').removeAttr('disabled');
         $('#input_cp_js').removeAttr('disabled');
           }
}