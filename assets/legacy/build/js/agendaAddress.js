var AgendaAddressClass = (function($) {
    var nextStep     = null;
    var previousStep = null;

    var requiredFields = {
        'agenda_address[agendaName]': false,
        'agenda_address[agendaFirstName]': false,
        'agenda_address[agendaPhone]': false,
    };

    function disabledNextBtn()
    {
        var selectorNextApplicant = document.getElementById("agenda-address-btnNext");
        RequestApp.render(RequestApp.componentsList.SzButton, selectorNextApplicant, {isDisabled: true}, "SUIVANT");
    }

    function enableNextBtn()
    {
        var selectorNextApplicant = document.getElementById("agenda-address-btnNext");
        RequestApp.render(RequestApp.componentsList.SzButton, selectorNextApplicant, {isDisabled: false}, "SUIVANT");
    }

    function checkEnabledNextBtn()
    {
        var isActive = true;

        for (var keyName in requiredFields) {
            if (requiredFields[keyName] == false) {
                isActive = false;
                break;
            }
        }

        if (isActive === true) {
            enableNextBtn();
        }
    }

    function onchangeTextFields(idField, isRequired)
    {
        $("#"+idField).on("change paste keyup", function() {
            var nameField = $(this).attr('name');
            var value     = $(this).val();

            if (isRequired == true && value != '' && nameField !== undefined) {
                requiredFields[nameField] = true;
            }

            if (isRequired == true && value == '' && nameField !== undefined) {
                requiredFields[nameField] = false;
            }

            checkEnabledNextBtn();
        });

    }

    function initInput(inputProps, selector)
    {
        inputProps.onChange = function (e) {
            var nameProps    = inputProps['name'];
            inputProps.value = e.target.value;
            var isRequired   = inputProps['required'];

            if (isRequired == true && inputProps.value != '' && requiredFields[nameProps] !== undefined) {
                requiredFields[nameProps] = true;
            }

            if (isRequired == true && inputProps.value == '' && requiredFields[nameProps] !== undefined) {
                requiredFields[nameProps] = false;
            }

            checkEnabledNextBtn();

            RequestApp.render(RequestApp.componentsList.SzInput, selector, inputProps);
        };
        RequestApp.render(RequestApp.componentsList.SzInput, selector, inputProps);
    }

    function initAgendaAddressFields()
    {
        var selectorTitleAgenda         = document.getElementById('agenda-titleAgenda');
        var selectorCorporateNameAgenda = document.getElementById('agenda-corporateName');
        var selectorNameAgenda          = document.getElementById('agenda-name');
        var selectorFirstNameAgenda     = document.getElementById('agenda-firstName');
        var selectorErrorMessage        = document.getElementById('error-message-agendaAddress');

        // Title rendering creation with the design system
        RequestApp.render(RequestApp.componentsList.SzTitle, selectorTitleAgenda, {className: 'text-uppercase sz-underline mb-3'}, 'Coordonnées de la personne présente lors du RDV');

        // Error message rendering creation with the design system
        RequestApp.render(RequestApp.componentsList.SzAlert, selectorErrorMessage, {label: 'button', type: 'danger'}, '');


        var inputCorporateName = {
            value: '',
            label: 'Raison sociale',
            name: 'agenda_address[agendaCorporateName]',
            id: 'agenda_address_agendaCorporateName',
            placeholder: 'Saisir votre raison sociale (facultative)',
            required: false
        };

        var inputName = {
            value: '',
            label: 'Nom',
            name: 'agenda_address[agendaName]',
            id: 'agenda_address_agendaName',
            placeholder: 'Saisir votre nom',
            required: true
        };

        var inputFirstName = {
            value: '',
            label: 'Prénom',
            name: 'agenda_address[agendaFirstName]',
            id: 'agenda_address_agendaFirstName',
            placeholder: 'Saisir votre prénom',
            required: true
        };

        initInput(inputCorporateName, selectorCorporateNameAgenda);
        initInput(inputName, selectorNameAgenda);
        initInput(inputFirstName, selectorFirstNameAgenda);
    }

    // Validation des champs
    function validateAgendaAddressForm()
    {
        $("#agenda_address_form").validate({
            errorClass: "error-label",
            ignore: [],
            rules: {
                'agenda_address[agendaAddressChoice]': {
                    required: true
                },
                'agenda_address[agendaCorporateName]': {
                    maxlength: 50
                },
                'agenda_address[agendaName]': {
                    required: true,
                    maxlength: 50
                },
                'agenda_address[agendaFirstName]': {
                    required: true,
                    maxlength: 50
                },
                'agenda_address[agendaPhone]': {
                    required: true
                },
                'agenda_address[agendaEmail]': {
                    required: false
                }
            },
            messages: {
                'agenda_address[agendaAddressChoice]': {
                    required: 'Veuillez choisir une adresse existante ou en créer une autre.'
                },
                'agenda_address[agendaCorporateName]': {
                    maxlength: 'La raison sociale ne peut dépasser 50 caractères.'
                },
                'agenda_address[agendaName]': {
                    required: 'Veuillez renseigner votre nom.',
                    maxlength: 'Le nom ne peut dépasser 50 caractères.'
                },
                'agenda_address[agendaFirstName]': {
                    required: 'Veuillez renseigner votre prénom.',
                    maxlength: 'Le prénom ne peut dépasser 50 caractères.'
                },
                'agenda_address[agendaPhone]': {
                    required: 'Veuillez renseigner votre numéro de téléphone.'
                }
            },
            showErrors: function (errorMap) {
                RequestApp.removeAllSpecificElementByClass('error-specific');
                for (key in errorMap) {
                    var selectorInput = document.getElementsByName(key)[0];
                    selectorInput = selectorInput.parentElement.parentElement.parentElement;

                    if (typeof (errorMap[key]) != "undefined") {
                        RequestApp.diplaySpecificError(selectorInput, null, errorMap[key]);
                    }
                }

                if (this.numberOfInvalids() >= 1) {
                    RequestApp.displayMessageWarning($('#error-message-agendaAddress'));
                } else {
                    RequestApp.removeAllSpecificElementByClass('error-specific');
                    $('#applicant_form').find('#error-message-agendaAddress').hide();
                }
            },
            submitHandler: function (form) {

            },
            resetForm: function () {

            },
            invalidHandler: function (event, validator) {
                return false;
            }
        });
    }

    function showApplicantButton(applicantAddressData)
    {
        if (!jQuery.isEmptyObject(applicantAddressData)) {
            $("#agenda-visible-applicant-button").show();
            if(applicantAddressData.applicantCorporateName == null) {
                $("#AgendaApplicantNameLabel").text("Nom, Prénom");
                $("#AgendaApplicantNameValue").text(applicantAddressData.applicantName + ", " + applicantAddressData.applicantFirstName);
            } else {
                $("#AgendaApplicantNameLabel").text("Raison sociale");
                $("#AgendaApplicantNameValue").text(applicantAddressData.applicantCorporateName);
            }
            $("#AgendaApplicantPhoneValue").text(applicantAddressData.applicantPhone);
            $("#AgendaApplicantEmailValue").text(applicantAddressData.applicantEmail);
        }
    }

    function showBeneficiaryButton(beneficiaryAddressData)
    {
        if(beneficiaryAddressData.beneficiaryCompanyName == null) {
            $("#AgendaBeneficiaryNameLabel").text("Nom, Prénom");
            $("#AgendaBeneficiaryNameValue").text(beneficiaryAddressData.beneficiaryLastName + ", " + beneficiaryAddressData.beneficiaryFirstName);
        } else {
            $("#AgendaBeneficiaryNameLabel").text("Raison sociale");
            $("#AgendaBeneficiaryNameValue").text(beneficiaryAddressData.beneficiaryCompanyName);
        }
        $("#AgendaBeneficiaryPhoneValue").text(beneficiaryAddressData.beneficiaryPhone);
        $("#AgendaBeneficiaryEmailValue").text(beneficiaryAddressData.beneficiaryEmail);
    }

    function clickRadioButtons(applicantAddressData, beneficiaryAddressData)
    {
        $("#agenda_address_agendaAddressChoice_0").click(function () {
            $("#agenda-other-form").hide();
            $("#agenda_address_agendaAddressChoice_0").attr('checked', true);
            $("#agenda_address_agendaCorporateName").val(applicantAddressData.applicantCorporateName);
            $("#agenda_address_agendaName").val(applicantAddressData.applicantName);
            $("#agenda_address_agendaFirstName").val(applicantAddressData.applicantFirstName);
            $("#agenda_address_agendaPhone").val(applicantAddressData.applicantPhone);
            $("#agenda_address_agendaEmail").val(applicantAddressData.applicantEmail);
            enableNextBtn();
        });
        $("#agenda_address_agendaAddressChoice_1").click(function () {
            $("#agenda-other-form").hide();
            $("#agenda_address_agendaAddressChoice_1").attr('checked', true);
            $("#agenda_address_agendaCorporateName").val(beneficiaryAddressData.beneficiaryCompanyName);
            $("#agenda_address_agendaName").val(beneficiaryAddressData.beneficiaryLastName);
            $("#agenda_address_agendaFirstName").val(beneficiaryAddressData.beneficiaryFirstName);
            $("#agenda_address_agendaPhone").val(beneficiaryAddressData.beneficiaryPhone);
            $("#agenda_address_agendaEmail").val(beneficiaryAddressData.beneficiaryEmail);
            enableNextBtn();
        });
        $("#agenda_address_agendaAddressChoice_2").click(function () {
            disabledNextBtn();
            $("#agenda-other-form").show();
            $("#agenda_address_agendaAddressChoice_2").attr('checked', true);
            $("#agenda_address_agendaCorporateName").val("");
            $("#agenda_address_agendaName").val("");
            $("#agenda_address_agendaFirstName").val("");
            $("#agenda_address_agendaPhone").val("");
            $("#agenda_address_agendaEmail").val("");
        });
    }

    function checkAgendaAddressValidForm()
    {
        $( "#agenda-address-btnNext button" ).click(function() {
            if ($("#agenda_address_form").valid() == true) {
                submitAgendaAddress();
            }
        });
    }

    function submitAgendaAddress()
    {
        var agendaAddressForm = $('#agenda_address_form');
        var formData       = agendaAddressForm.serialize();
        var url            = agendaAddressForm.attr('action');
        $.ajax({
            type: "POST",
            url: url,
            data: formData,
            success: function (data) {
                if (data.isError == true && data.hasOwnProperty('idCurrentStep') == true) {
                    window.location.href = Routing.generate(RequestApp.getKeyHomePage());
                } else if  (data.isError == true) {
                    var manageErrors = data.manageError;
                    RequestApp.displayBackErrors(manageErrors);
                    RequestApp.displayMessageWarning($('#error-message-agendaAddress'));
                } else {
                    RequestApp.stepper('form-agenda-address', nextStep);
                }
            },
            error: function (data, status, message) {
                RequestApp.displayMessageWarning($('#error-message-agendaAddress'));
            }
        });
    }

    function loadAgendaAddress()
    {
        $.ajax({
            type: "POST",
            url: Routing.generate('request_path_agenda_address'),
            success: function (data) {
                if (data.isError == true && data.hasOwnProperty('idCurrentStep') == true) {
                    window.location.href = Routing.generate(RequestApp.getKeyHomePage());
                } else if (data.isError == false) {
                    $('#form-agenda-address').html(data.html);
                    $('#form-agenda-address').show();
                }
            },
            error: function (data, status, message) {

            }
        });
    }

    return {
        initAgendaAddress: function(applicantAddressData, beneficiaryAddressData, nextStepParam, previousStepParam) {
            previousStep = previousStepParam;
            nextStep     = nextStepParam;

            initAgendaAddressFields();
            disabledNextBtn();

            RequestApp.managePreviousBtn('agenda-address-btnPrev', 'form-agenda-address', previousStep);

            RequestApp.changeInputFields('#agenda_address_agendaPhone');
            RequestApp.changeInputFields('#agenda_address_agendaEMail');
            onchangeTextFields('agenda_address_agendaPhone', true);
            onchangeTextFields('agenda_address_agendaEmail', false);
            showApplicantButton(applicantAddressData);
            showBeneficiaryButton(beneficiaryAddressData);
            clickRadioButtons(applicantAddressData, beneficiaryAddressData);
            validateAgendaAddressForm();
            checkAgendaAddressValidForm();
        },
        loadAgendaAddress: loadAgendaAddress
    };

})(jQuery);
