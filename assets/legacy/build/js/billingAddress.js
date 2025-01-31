var BillingAddressClass = (function($) {

    var nextStep     = null;
    var previousStep = null;

    var requiredFields = {
        'billing_address[billingName]': false,
        'billing_address[billingFirstName]': false,
        'billing_address[billingZipcity]': false,
        'billing_address[billingStreet]': false,
    };

    function disabledNextBtn()
    {
        var selectorNextApplicant = document.getElementById("billing-address-btnNext");
        RequestApp.render(RequestApp.componentsList.SzButton, selectorNextApplicant, {isDisabled: true}, "SUIVANT");
    }
    function enableNextBtn()
    {
        var selectorNextApplicant = document.getElementById("billing-address-btnNext");
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

        if (isActive == true) {
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
    function initBillingAddressFields()
    {
        var selectorTitleBilling         = document.getElementById('billing-titleBilling');
        var selectorCorporateNameBilling = document.getElementById('billing-corporateName');
        var selectorNameBilling          = document.getElementById('billing-name');
        var selectorFirstNameBilling     = document.getElementById('billing-firstName');
        var selectorErrorMessage         = document.getElementById('error-message-billingAddress');

        // Title rendering creation with the design system
        RequestApp.render(RequestApp.componentsList.SzTitle, selectorTitleBilling, {className: 'text-uppercase sz-underline mb-3'}, 'Adresse de facturation');

        // Error message rendering creation with the design system
        RequestApp.render(RequestApp.componentsList.SzAlert, selectorErrorMessage, {label: 'button', type: 'danger'}, '');


        var inputCorporateName = {
            value: '',
            label: 'Raison sociale',
            name: 'billing_address[billingCorporateName]',
            id: 'billing_address_billingCorporateName',
            placeholder: 'Saisir votre raison sociale (facultative)',
            required: false
        };

        var inputName = {
            value: '',
            label: 'Nom',
            name: 'billing_address[billingName]',
            id: 'billing_address_billingName',
            placeholder: 'Saisir votre nom',
            required: true
        };

        var inputFirstName = {
            value: '',
            label: 'Prénom',
            name: 'billing_address[billingFirstName]',
            id: 'billing_address_billingFirstName',
            placeholder: 'Saisir votre prénom',
            required: true
        };

        initInput(inputCorporateName, selectorCorporateNameBilling);
        initInput(inputName, selectorNameBilling);
        initInput(inputFirstName, selectorFirstNameBilling);
    }

    // Validation des champs
    function validateBillingAddressForm()
    {
        $("#billing_address_form").validate({
            errorClass: "error-label",
            ignore: [],
            rules: {
                'billing_address[billingAddressChoice]': {
                    required: true
                },
                'billing_address[billingCorporateName]': {
                    maxlength: 50
                },
                'billing_address[billingName]': {
                    required: true,
                    maxlength: 50
                },
                'billing_address[billingFirstName]': {
                    required: true,
                    maxlength: 50
                },
                'billing_address[billingZipcity]': {
                    required: true
                },
                'billing_address[billingStreet]': {
                    required: true
                },
                'billing_address[billingAdditionalInfo]': {
                    maxlength: 36
                }
            },
            messages: {
                'billing_address[billingAddressChoice]': {
                    required: 'Veuillez choisir une adresse existante ou en créer une autre.'
                },
                'billing_address[billingCorporateName]': {
                    maxlength: 'La raison sociale ne peut dépasser 50 caractères.'
                },
                'billing_address[billingName]': {
                    required: 'Veuillez renseigner votre nom.',
                    maxlength: 'Le nom ne peut dépasser 50 caractères.'
                },
                'billing_address[billingFirstName]': {
                    required: 'Veuillez renseigner votre prénom.',
                    maxlength: 'Le prénom ne peut dépasser 50 caractères.'
                },
                'billing_address[billingZipcity]': {
                    required: 'Veuillez renseigner votre ville.'
                },
                'billing_address[billingStreet]': {
                    required: 'Veuillez renseigner votre adresse.'
                },
                'billing_address[billingAdditionalInfo]': {
                    maxlength: 'Le complément d\'adresse ne peut dépasser 50 caractères.'
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
                    RequestApp.displayMessageWarning($('#error-message-billingAddress'));
                } else {
                    RequestApp.removeAllSpecificElementByClass('error-specific');
                    $('#applicant_form').find('#error-message-billingAddress').hide();
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
            $("#visible-applicant-button").show();
            if(applicantAddressData.applicantCorporateName == null) {
                $("#ApplicantNameLabel").text("Nom, Prénom");
                $("#ApplicantNameValue").text(applicantAddressData.applicantName + ", " + applicantAddressData.applicantFirstName);
            } else {
                $("#ApplicantNameLabel").text("Raison sociale");
                $("#ApplicantNameValue").text(applicantAddressData.applicantCorporateName);
            }
            $("#ApplicantAddressValue").text(applicantAddressData.applicantStreet + ", " + applicantAddressData.applicantZipcity);
        }
    }
    function showBeneficiaryButton(beneficiaryAddressData)
    {
        if(beneficiaryAddressData.beneficiaryCompanyName == null) {
            $("#BeneficiaryNameLabel").text("Nom, Prénom");
            $("#BeneficiaryNameValue").text(beneficiaryAddressData.beneficiaryLastName + ", " + beneficiaryAddressData.beneficiaryFirstName);
        } else {
            $("#BeneficiaryNameLabel").text("Raison sociale");
            $("#BeneficiaryNameValue").text(beneficiaryAddressData.beneficiaryCompanyName);
        }
        $("#BeneficiaryAddressValue").text(beneficiaryAddressData.beneficiaryStreet + ", " + beneficiaryAddressData.beneficiaryZipcity);
    }
    function clickRadioButtons(applicantAddressData, beneficiaryAddressData)
    {
        $("#billing_address_billingAddressChoice_0").click(function () {
            $("#other-form").hide();
            $("#billing_address_billingAddressChoice_0").attr('checked', true);
            $("#billing_address_billingCorporateName").val(applicantAddressData.applicantCorporateName);
            $("#billing_address_billingName").val(applicantAddressData.applicantName);
            $("#billing_address_billingFirstName").val(applicantAddressData.applicantFirstName);
            $("#billing_address_billingZipcity").val(applicantAddressData.applicantZipcity);
            $("#billing_address_billingStreet").val(applicantAddressData.applicantStreet);
            $("#billing_address_billingAdditionalInfo").val(applicantAddressData.applicantAdditionalInfo);
            enableNextBtn();
        });
        $("#billing_address_billingAddressChoice_1").click(function () {
            $("#other-form").hide();
            $("#billing_address_billingAddressChoice_1").attr('checked', true);
            $("#billing_address_billingCorporateName").val(beneficiaryAddressData.beneficiaryCompanyName);
            $("#billing_address_billingName").val(beneficiaryAddressData.beneficiaryLastName);
            $("#billing_address_billingFirstName").val(beneficiaryAddressData.beneficiaryFirstName);
            $("#billing_address_billingZipcity").val(beneficiaryAddressData.beneficiaryZipcity);
            $("#billing_address_billingStreet").val(beneficiaryAddressData.beneficiaryStreet);
            $("#billing_address_billingAdditionalInfo").val(beneficiaryAddressData.beneficiaryAdditionalInfo);
            enableNextBtn();
        });
        $("#billing_address_billingAddressChoice_2").click(function () {
            disabledNextBtn();
            $("#other-form").toggle();
            $("#billing_address_billingAddressChoice_2").attr('checked', true);
            $("#billing_address_billingCorporateName").val("");
            $("#billing_address_billingName").val("");
            $("#billing_address_billingFirstName").val("");
            $("#billing_address_billingZipcity").val("");
            $("#billing_address_billingStreet").val("");
            $("#billing_address_billingAdditionalInfo").val("");
        });
    }
    function checkBillingAddressValidForm()
    {
        $( "#billing-address-btnNext button" ).click(function() {
            if ($("#billing_address_form").valid() == true) {
                submitBillingAddress();
            }
        });
    }
    function submitBillingAddress()
    {
        var billingAddressForm = $('#billing_address_form');
        var formData       = billingAddressForm.serialize();
        var url            = billingAddressForm.attr('action');
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
                    RequestApp.displayMessageWarning($('#error-message-billingAddress'));
                } else {
                    RequestApp.stepper('form-billing-address', nextStep);
                }
            },
            error: function (data, status, message) {
                RequestApp.displayMessageWarning($('#error-message-billingAddress'));
            }
        });
    }
    function loadBillingAddress()
    {
        $.ajax({
            type: "POST",
            url: Routing.generate('request_path_billing_address'),
            success: function (data) {
                if (data.isError == true && data.hasOwnProperty('idCurrentStep') == true) {
                    window.location.href = Routing.generate(RequestApp.getKeyHomePage());
                } else if (data.isError == false) {
                    $('#form-billing-address').html(data.html);
                    $('#form-billing-address').show();
                }
            },
            error: function (data, status, message) {

            }
        });
    }
    return {
        initBillingAddress: function(applicantAddressData, beneficiaryAddressData, nextStepParam, previousStepParam) {

            previousStep = previousStepParam;
            nextStep     = nextStepParam;

            initBillingAddressFields();
            disabledNextBtn();

            RequestApp.managePreviousBtn('billing-address-btnPrev', 'form-billing-address', previousStep);

            RequestApp.changeInputFields('#billing_address_billingZipcity');
            RequestApp.changeInputFields('#billing_address_billingStreet');
            RequestApp.changeInputFields('#billing_address_billingAdditionalInfo');
            onchangeTextFields('billing_address_billingZipcity', true);
            onchangeTextFields('billing_address_billingStreet', true);
            showApplicantButton(applicantAddressData);
            showBeneficiaryButton(beneficiaryAddressData);
            clickRadioButtons(applicantAddressData, beneficiaryAddressData);
            validateBillingAddressForm();
            checkBillingAddressValidForm();
        },
        loadBillingAddress: loadBillingAddress
    };

})(jQuery);

