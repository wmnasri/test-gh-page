function displayGlobalWarning(blocForm) {
    blocForm.find('.success-message').hide();
    blocForm.find('.error-message').hide();
    blocForm.find('.warning-message-already-change').hide();
    blocForm.find('.warning-message').hide();
    blocForm.find('label.error-label.d-none').hide();

    var htmlGlobalMessage = "<strong>Erreur <br />Veuillez vérifier votre saisie.</strong><br /><br />" +
        "Certaines informations saisies ci-dessous ne sont pas valides.";

    blocForm
        .find('.warning-message')
        .find('.alert-message').html(htmlGlobalMessage);
    blocForm.find('.warning-message').show();
}

function validateEmail()
{
    $("#form_email").validate({
        errorClass: "error-label",
        rules: {
            'email[email]': {
                required: true,
                email: true
            },
            'email[confirmEmail]': {
                required: true,
                email: true,
                equalTo: "#email_email"
            }
        },
        messages: {
            'email[email]': {
                required: "L’adresse e-mail est incorrecte, veuillez vérifier votre saisie.",
                email: "L’adresse e-mail est incorrecte, veuillez vérifier votre saisie.",
            },
            'email[confirmEmail]': {
                required: "L’adresse e-mail est incorrecte, veuillez vérifier votre saisie.",
                email: "L’adresse e-mail est incorrecte, veuillez vérifier votre saisie.",
                equalTo: "Votre e-mail de vérification est différent de votre e-mail. Veuillez le corriger."
            }
        },
        showErrors: function (errorMap) {
            this.defaultShowErrors();
    
            for (key in errorMap) {
                if (typeof (errorMap[key]) == "undefined") {
                    $("#" + key).parent().removeClass("form-group-error");
                }
                else {
                    $("#" + key).parent().addClass("form-group-error");
                }
            }
                if (this.numberOfInvalids() >= 1) {
                    displayGlobalWarning($('#block-email'));
                } else {
                    $('#block-email').find('.warning-message').hide();
                }
            },
            submitHandler: function (form) {
                clean_fields();
            },
            invalidHandler: function (event, validator) {
                return false;
            },
            unhighlight: function (element) {
                    $(element).parent().removeClass("form-group-error").addClass("form-group");
                },
                errorPlacement: function (error, element) {
                    element.parent().append(error);
                }
    });
}

function validatePassword()
{
    return $("#form_password").validate({
        errorClass: "error-label",
        rules: {
            'password[currentPassword]': {
                required: true
            },
            'password[newPassword]': {
                required: true,
                regex: "(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}"
            },
            'password[confirmPassword]': {
                required: true,
                equalTo: "#password_newPassword"
            }
        },
        messages: {
            'password[currentPassword]': {
                required: 'Votre mot de passe est invalide, veuillez vérifier votre saisie.'
            },
            'password[newPassword]': {
                required: 'Votre nouveau mot de passe est invalide, veuillez vérifier votre saisie.',
                regex: 'Votre nouveau mot de passe est invalide, veuillez vérifier votre saisie.'
            },
            'password[confirmPassword]': {
                required: 'Votre nouveau mot de passe est invalide, veuillez vérifier votre saisie.',
                equalTo: "Votre mot de passe de vérification est différent du mot de passe initial. Veuillez les ressaisir."
            }
        },
        showErrors: function (errorMap) {
            this.defaultShowErrors();

            for (key in errorMap) {
                if (typeof (errorMap[key]) == "undefined") {
                    $("#" + key).parent().removeClass("form-group-error");
                }
                else {
                    $("#" + key).parent().addClass("form-group-error");
                }
            }

                if (this.numberOfInvalids() >= 1) {
                    displayGlobalWarning($('#block-password'));
                } else {
                    $('#block-password').find('.warning-message').hide();
                }
            },
            submitHandler: function (form) {
                disabled_address_field(0);
                clean_fields();
            },
            invalidHandler: function (event, validator) {
                return false;
            },
            unhighlight: function (element) {
                    $(element).parent().removeClass("form-group-error").addClass("form-group");
                },
                errorPlacement: function (error, element) {
                    element.parent().append(error);
                }
    });
}

function validateIdentity()
{
   return $("#form_identity").validate({
        errorClass: "error-label",
        rules: {
            "identity[contractName]": {
                required: true,
                maxlength: 30
            }
        },
        messages: {
            "identity[contractName]": {
                required: 'Le nom du contrat est incorrect, veuillez vérifier votre saisie.',
                maxlength: 'Veuillez saisir un nom de contrat de moins de 30 caractères.'
            }
        },
        showErrors: function (errorMap) {
            this.defaultShowErrors();

            for (key in errorMap) {
                if (typeof (errorMap[key]) == "undefined") {
                    $("#" + key).parent().removeClass("form-group-error");
                }
                else {
                    $("#" + key).parent().addClass("form-group-error");
                }
            }
                if (this.numberOfInvalids() >= 1) {
                    displayGlobalWarning($('#block-nomcontrat'));
                } else {
                    $('#block-nomcontrat').find('.warning-message').hide();
                }
            },
            submitHandler: function (form) {
                disabled_address_field(0);
                clean_fields();
            },
            invalidHandler: function (event, validator) {
                return false;
            },
            unhighlight: function (element) {
                    $(element).parent().removeClass("form-group-error").addClass("form-group");
                },
                errorPlacement: function (error, element) {
                    element.parent().append(error);
                }
    });
}

function validateAdress()
{
    return $("#form_adress").validate({
        errorClass: "error-label",
        rules: {
            "adress[city]": {
                required: function () {
                    return ($('#adress_city').val().trim() != "");
                },
                maxlength: 30,
                regex: "^[A-Z0-9 ]+$"
            },
            "adress[zipCode]": {
                required: function () {
                    return ($('#adress_zipCode').val().trim() != "");
                },
                minlength: 5,
                maxlength: 5,
                regex: "^[0-9]+$"
            },
            "adress[adress]": {
                required: function () {
                    return ($('#adress_adress').val().trim() != "");
                },
                maxlength: 38,
                regex: "^[A-Z0-9 ]+$"
            },
            "adress[addressSupp]": {
                maxlength: 38,
                regex: "^[A-Z0-9 ]+$"
            }
        },
        messages: {
            "adress[city]": {
                required: "Veuillez compléter votre adresse de facturation. ",
                maxlength: "30 caractères maximum pour la saisie de la commune. ",
                regex: "Uniquement des lettres majuscules non accentuées et des chiffres pour la saisie de la commune. "
            },
            "adress[zipCode]": {
                required: "Veuillez compléter votre adresse de facturation. ",
                minlength: "Le code postal est incorrect, veuillez vérifier votre saisie. ",
                maxlength: "Le code postal est incorrect, veuillez vérifier votre saisie. ",
                regex: "Le code postal est incorrect, veuillez vérifier votre saisie. "
            },
            "adress[adress]": {
                required: "Veuillez compléter votre adresse de facturation. ",
                maxlength: "38 caractères maximum pour la saisie de l'adresse. ",
                regex: "Uniquement des lettres majuscules non accentuées et des chiffres pour la saisie de l'adresse. "
            },
            "adress[addressSupp]": {
                required: "Veuillez compléter votre adresse de facturation. ",
                maxlength: "38 caractères maximum pour la saisie du complément d'adresse. ",
                regex: "Uniquement des lettres majuscules non accentuées et des chiffres pour la saisie du complément d'adresse. "
            }
        },
        showErrors: function (errorMap) {
            this.defaultShowErrors();

            for (key in errorMap) {
                if (typeof (errorMap[key]) == "undefined") {
                    $("#" + key).parent().removeClass("form-group-error");
                }
                else {
                    $("#" + key).parent().addClass("form-group-error");
                }
            }

            if (this.numberOfInvalids() >= 1) {
                displayGlobalWarning($('#block-adress'));
            } else {
                $('#block-adress').find('.warning-message').hide();
            }
            },
            submitHandler: function (form) {
                disabled_address_field(0);
                clean_fields();
                form.submit();
            },
            invalidHandler: function (event, validator) {
                return false;
            },
            unhighlight: function (element) {
                    $(element).parent().removeClass("form-group-error").addClass("form-group");
                },
                errorPlacement: function (error, element) {
                    element.parent().append(error);
                }
    });
}

function validateContact()
{
    return $("#form_contact").validate({
        errorClass: "error-label",
        rules: {
            "contacts[telDomicile]": {
                minlength: 10,
                maxlength: 10,
                regex: "^0([0-5]|9)[0-9]{8}$"
            },
            "contacts[telPortable]": {
                minlength: 10,
                maxlength: 10,
                regex: "^0(6|7)[0-9]{8}$"
            }
        },
        messages: {
            "contacts[telDomicile]": {
                minlength: "Le numéro téléphone fixe doit contenir 10 chiffres, veuillez vérifier votre saisie.",
                maxlength: "Le numéro téléphone fixe doit contenir 10 chiffres, veuillez vérifier votre saisie.",
                regex: "Le numéro de téléphone fixe est incorrect. Il doit commencer par 01, 02, 03, 04, 05 ou 09. Veuillez vérifier votre saisie."
            },
            "contacts[telPortable]": {
                minlength: "Le numéro téléphone portable doit contenir 10 chiffres, veuillez vérifier votre saisie.",
                maxlength: "Le numéro téléphone portable doit contenir 10 chiffres, veuillez vérifier votre saisie.",
                regex: "Le numéro de téléphone portable est incorrect. Il doit commencer par 06 ou 07. Veuillez vérifier votre saisie."
            }
        },
        showErrors: function (errorMap) {
            this.defaultShowErrors();

            for (key in errorMap) {
                if (typeof (errorMap[key]) == "undefined") {
                    $("#" + key).parent().removeClass("form-group-error");
                }
                else {
                    $("#" + key).parent().addClass("form-group-error");
                }
            }
            if (this.numberOfInvalids() >= 1) {
                displayGlobalWarning($('#block-contact'));
            } else {
                $('#block-contact').find('.warning-message').hide();
            }
        },
        submitHandler: function (form) {
            clean_fields();
        },
        invalidHandler: function (event, validator) {
            return false;
        },
        unhighlight: function (element) {
            $(element).parent().removeClass("form-group-error").addClass("form-group");
        },
        errorPlacement: function (error, element) {
            element.parent().append(error);
        }
    });
}

$( document ).ready(function() {
    validateEmail();
    validatePassword();
    validateIdentity();
    validateAdress();
    validateContact();
});

function restartFormValidation(blocForm)
{
    if (blocForm === ''){
        return;
    }

    switch (blocForm) {
        case 'block-email':
            validateEmail();
            break;
        case 'block-password':
            validatePassword();
            break;
        case 'block-nomcontrat':
            validateIdentity();
            break;
        case 'block-adress':
            validateAdress();
            break;
        case 'block-contact':
            validateContact();
            break;
    }

    return;
}