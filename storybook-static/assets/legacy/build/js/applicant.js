var ApplicantClass = (function ($) {
  var etatForm = null;
  var keyFormApplicantLong = null;
  var inputQualityOptions = null;
  var nextStep = null;
  var previousStep = null;
  var currentStep = null;

  var requiredFields = {
    'applicant[applicantType]': false,
    'applicant[applicantName]': false,
    'applicant[applicantFirstName]': false,
    'applicant[applicantEmail]': false,
    'applicant[applicantPhone]': false,
    'applicant[applicantZipcity]': false,
    'applicant[applicantStreet]': false
  };

  function disabledNextBtn() {
    var selectorNextApplicant = document.getElementById('applicant-btnNext');
    RequestApp.render(
      RequestApp.componentsList.SzButton,
      selectorNextApplicant,
      { isDisabled: true },
      'SUIVANT'
    );
  }
  function enableNextBtn() {
    var selectorNextApplicant = document.getElementById('applicant-btnNext');
    RequestApp.render(
      RequestApp.componentsList.SzButton,
      selectorNextApplicant,
      { isDisabled: false },
      'SUIVANT'
    );
  }
  function checkEnabledNextBtn() {
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
  function onchangeTextFields(idField, isRequired) {
    $('#' + idField).on('change paste keyup', function () {
      var nameField = $(this).attr('name');
      var value = $(this).val();

      if (isRequired == true && value != '' && nameField !== undefined) {
        requiredFields[nameField] = true;
      }

      if (isRequired == true && value == '' && nameField !== undefined) {
        requiredFields[nameField] = false;
      }

      checkEnabledNextBtn();
    });
  }
  function initInput(inputProps, selector) {
    inputProps.onChange = function (e) {
      var nameProps = inputProps['name'];
      inputProps.value = e.target.value;
      var isRequired = inputProps['required'];

      if (
        isRequired == true &&
        inputProps.value != '' &&
        requiredFields[nameProps] !== undefined
      ) {
        requiredFields[nameProps] = true;
      }

      if (
        isRequired == true &&
        inputProps.value == '' &&
        requiredFields[nameProps] !== undefined
      ) {
        requiredFields[nameProps] = false;
      }

      checkEnabledNextBtn();

      RequestApp.render(
        RequestApp.componentsList.SzInput,
        selector,
        inputProps
      );
    };
    if (selector != null) {
      RequestApp.render(
        RequestApp.componentsList.SzInput,
        selector,
        inputProps
      );
    }
  }
  function initApplicantFields(inputQualityOptions) {
    var selectorTitleApplicant = document.getElementById(
      'applicant-titleApplicant'
    );
    if (etatForm == keyFormApplicantLong) {
      var selectorQualityApplicant =
        document.getElementById('applicant-quality');
    }
    var selectorType = document.getElementById('applicant-type');
    var selectorCorporateNameApplicant = document.getElementById(
      'applicant-corporateName'
    );
    var selectorNameApplicant = document.getElementById('applicant-name');
    var selectorFirstNameApplicant = document.getElementById(
      'applicant-firstName'
    );
    var selectorEmailApplicant = document.getElementById('applicant-email');
    var selectorTelApplicant = document.getElementById('applicant-tel');
    var selectorErrorMessage = document.getElementById(
      'error-message-applicant'
    );

    RequestApp.render(
      RequestApp.componentsList.SzAlert,
      selectorErrorMessage,
      { label: 'button', type: 'danger' },
      ''
    );

    RequestApp.render(
      RequestApp.componentsList.SzTitle,
      selectorTitleApplicant,
      { className: 'text-uppercase sz-underline mb-3' },
      'Informations concernant le demandeur'
    );

    if (etatForm == keyFormApplicantLong) {
      inputQualityOptions = JSON.parse(
        inputQualityOptions.replace(/&quot;/g, '"')
      );
      var inputQuality = {
        name: 'applicant[applicantQuality]',
        id: 'applicant_applicantQuality',
        value: '',
        label: '',
        options: inputQualityOptions,
        onChange: function (e) {
          inputQuality.value = $(
            "input[name='applicant[applicantQuality]']:checked"
          ).val();
          RequestApp.render(
            RequestApp.componentsList.SzSelect,
            selectorQualityApplicant,
            inputQuality
          );
        },
        required: true
      };

      RequestApp.render(
        RequestApp.componentsList.SzSelect,
        selectorQualityApplicant,
        inputQuality
      );
    }

    var inputType = {
      name: 'applicant[applicantType]',
      id: 'applicant_applicantType',
      value: '',
      choices: [
        {
          icon: 'sz-icon-line people-woman-6',
          label: 'Madame',
          value: 'madame'
        },
        {
          icon: 'sz-icon-line people-man-1',
          label: 'Monsieur',
          value: 'monsieur'
        }
      ],
      onChange: function (e) {
        inputType.value = $(
          "input[name='applicant[applicantType]']:checked"
        ).val();
        RequestApp.render(
          RequestApp.componentsList.SzChooseButton,
          selectorType,
          inputType
        );
        requiredFields['applicant[applicantType]'] = true;
        checkEnabledNextBtn();
      },
      required: true
    };

    RequestApp.render(
      RequestApp.componentsList.SzChooseButton,
      selectorType,
      inputType
    );

    var inputCorporateName = {
      value: '',
      label: 'Raison sociale',
      name: 'applicant[applicantCorporateName]',
      id: 'applicant_applicantCorporateName',
      placeholder: 'Saisir votre raison sociale (facultative)',
      required: false
    };

    var inputName = {
      value: '',
      label: 'Nom',
      name: 'applicant[applicantName]',
      id: 'applicant_applicantName',
      placeholder: 'Saisir votre nom',
      required: true
    };

    var inputFirstName = {
      value: '',
      label: 'Prénom',
      name: 'applicant[applicantFirstName]',
      id: 'applicant_applicantFirstName',
      placeholder: 'Saisir votre prénom',
      required: true
    };

    var inputEmail = {
      value: '',
      label: 'Adresse E-mail',
      name: 'applicant[applicantEmail]',
      id: 'applicant_applicantEmail',
      placeholder: 'Saisir une adresse e-mail',
      required: true
    };

    var inputTel = {
      value: '',
      label: 'Téléphone',
      name: 'applicant[applicantPhone]',
      id: 'applicant_applicantPhone',
      placeholder: 'Saisir un numéro de téléphone',
      required: true
    };

    initInput(inputCorporateName, selectorCorporateNameApplicant);
    initInput(inputName, selectorNameApplicant);
    initInput(inputFirstName, selectorFirstNameApplicant);
    initInput(inputEmail, selectorEmailApplicant);
    initInput(inputTel, selectorTelApplicant);

    /* Sale ! En attente d'une évolution du design system... */
    var choixType = document.getElementsByName('applicant[applicantType]');
    if (etatForm == keyFormApplicantLong) {
      var choixQuality = document.getElementById('applicant_applicantQuality');
    }
    setTimeout(function () {
      choixType[0].setAttribute('id', 'applicant_applicantType_0');
      choixType[1].setAttribute('id', 'applicant_applicantType_1');
      if (etatForm == keyFormApplicantLong) {
        choixQuality.setAttribute('name', 'applicant[applicantQuality]');
      }
    }, 0);
    /* end sale ! */
  }

  jQuery.validator.addMethod('valueNotEquals', function (value, element, arg) {
    return arg !== value;
  });

  // Validation des champs
  function validateApplicantForm() {
    $('#applicant_form').validate({
      errorClass: 'error-label',
      ignore: [],
      rules: {
        'applicant[applicantQuality]': {
          valueNotEquals: 'no-select'
        },
        'applicant[applicantType]': {
          required: true
        },
        'applicant[applicantCorporateName]': {
          maxlength: 50
        },
        'applicant[applicantName]': {
          required: true,
          maxlength: 50
        },
        'applicant[applicantFirstName]': {
          required: true,
          maxlength: 50
        },
        'applicant[applicantEmail]': {
          required: true,
          email: true
        },
        'applicant[applicantPhone]': {
          required: true,
          regex: /^\d{10}$/
        },
        'applicant[applicantZipcity]': {
          required: true
        },
        'applicant[applicantStreet]': {
          required: true
        },
        'applicant[applicantAdditionalInfo]': {
          maxlength: 36
        }
      },
      messages: {
        'applicant[applicantQuality]': {
          valueNotEquals: 'Veuillez renseigner votre qualité.'
        },
        'applicant[applicantType]': {
          required: 'Veuillez renseigner votre sexe.'
        },
        'applicant[applicantCorporateName]': {
          maxlength: 'La raison sociale ne peut dépasser 50 caractères.'
        },
        'applicant[applicantName]': {
          required: 'Veuillez renseigner votre nom.',
          maxlength: 'Le nom ne peut dépasser 50 caractères.'
        },
        'applicant[applicantFirstName]': {
          required: 'Veuillez renseigner votre prénom.',
          maxlength: 'Le prénom ne peut dépasser 50 caractères.'
        },
        'applicant[applicantEmail]': {
          required: 'Veuillez renseigner un email.',
          email: 'Veuillez renseigner un email valide.'
        },
        'applicant[applicantPhone]': {
          required: 'Veuillez renseigner un numéro de téléphone.',
          regex:
            'Veuillez renseigner un numéro de téléphone valide (10 chiffres sans espace).'
        },
        'applicant[applicantZipcity]': {
          required: 'Veuillez renseigner votre ville.'
        },
        'applicant[applicantStreet]': {
          required: 'Veuillez renseigner votre adresse.'
        },
        'applicant[applicantAdditionalInfo]': {
          maxlength: "Le complément d'adresse ne peut dépasser 50 caractères."
        }
      },
      showErrors: function (errorMap) {
        RequestApp.removeAllSpecificElementByClass('error-specific');
        for (key in errorMap) {
          var selectorInput = document.getElementsByName(key)[0];
          selectorInput =
            selectorInput.parentElement.parentElement.parentElement;

          if (typeof errorMap[key] != 'undefined') {
            RequestApp.diplaySpecificError(selectorInput, null, errorMap[key]);
          }
        }

        if (this.numberOfInvalids() >= 1) {
          RequestApp.displayMessageWarning($('#error-message-applicant'));
        } else {
          RequestApp.removeAllSpecificElementByClass('error-specific');
          $('#applicant_form').find('#error-message-applicant').hide();
        }
      },
      submitHandler: function (form) {},
      resetForm: function () {},
      invalidHandler: function (event, validator) {
        return false;
      }
    });
  }
  function checkApplicantValidForm() {
    $('#applicant-btnNext button').click(function () {
      if ($('#applicant_form').valid() == true) {
        submitApplicant();
      }
    });
  }

  function submitApplicant() {
    var applicantForm = $('#applicant_form');
    var formData = applicantForm.serialize();
    var url = applicantForm.attr('action');
    $.ajax({
      type: 'POST',
      url: url,
      data: formData,
      success: function (data) {
        if (
          data.isError == true &&
          data.hasOwnProperty('idCurrentStep') == true
        ) {
          window.location.href = Routing.generate(RequestApp.getKeyHomePage());
        } else if (data.isError == true) {
          var manageErrors = data.manageError;
          RequestApp.displayBackErrors(manageErrors);
          RequestApp.displayMessageWarning($('#error-message-applicant'));
        } else {
          RequestApp.stepper(currentStep, nextStep);
        }
      },
      error: function (data, status, message) {
        RequestApp.displayMessageWarning($('#error-message-applicant'));
      }
    });
  }

  function loadTownChoiceInformations() {
    var street = $('#applicant-adress').attr('data-street');
    var complementAdd = $('#applicant-complementAdress').attr(
      'data-complement-adress'
    );
    var cityAndZip = $('#applicant-cityCp').attr('data-city-cp');

    var selectorCityPostalCode = document.getElementById('applicant-cityCp');
    var selectorAddress = document.getElementById('applicant-adress');
    var selectorAdressComplement = document.getElementById(
      'applicant-complementAdress'
    );

    var inputCityPostalCode = {
      value: cityAndZip,
      label: 'Ville ou code postal',
      name: 'applicant[applicantZipcity]',
      id: 'applicant_applicantZipcity',
      class:
        'sz-form-group__sz-input-text font-family-bold pl-3 bg-light form-control',
      placeholder: 'Saisir la ville ou le code postal',
      required: false
    };

    var inputAdress = {
      value: street,
      label: 'N° et voie ',
      name: 'applicant[applicantStreet]',
      id: 'applicant-complementAdress',
      placeholder: "Saisir l'adresse correspondante",
      required: true
    };

    var inputAdressComplement = {
      value: complementAdd,
      label: "Complément d'adresse",
      name: 'applicant[applicantAdditionalInfo]',
      id: 'applicant_applicantAdditionalInfo',
      placeholder: "Saisir l'adresse correspondante",
      required: false
    };

    initInput(inputCityPostalCode, selectorCityPostalCode);
    initInput(inputAdress, selectorAddress);
    if (selectorAdressComplement != null) {
      RequestApp.render(
        RequestApp.componentsList.SzInput,
        selectorAdressComplement,
        inputAdressComplement
      );
    }
    requiredFields['applicant[applicantStreet]'] = true;
    requiredFields['applicant[applicantZipcity]'] = true;
    checkEnabledNextBtn();
  }

  return {
    initApplicant: function (
      etatFormParam,
      keyFormApplicantLongParam,
      inputQualityOptionsParam,
      nextStepParam,
      previousStepParam,
      currentStepParam
    ) {
      etatForm = etatFormParam;
      keyFormApplicantLong = keyFormApplicantLongParam;
      inputQualityOptions = inputQualityOptionsParam;
      nextStep = nextStepParam;
      previousStep = previousStepParam;
      currentStep = currentStepParam;

      initApplicantFields(inputQualityOptions);
      disabledNextBtn();

      RequestApp.managePreviousBtn(
        'applicant-btnPrev',
        currentStep,
        previousStep
      );

      if (etatForm == keyFormApplicantLong) {
        RequestApp.changeInputFields('#applicant_applicantZipcity');
        RequestApp.changeInputFields('#applicant_applicantStreet');
        RequestApp.changeInputFields('#applicant_applicantAdditionalInfo');
        $('.sz-container-select')
          .find('i')
          .removeClass('mdi-unfold-more-horizontal');
        onchangeTextFields('applicant_applicantZipcity', true);
        onchangeTextFields('applicant_applicantStreet', true);
        requiredFields['applicant[applicantZipcity]'] = false;
        requiredFields['applicant[applicantStreet]'] = false;
      }
      validateApplicantForm();
      checkApplicantValidForm();
      loadTownChoiceInformations();
    }
  };
})(jQuery);
