var BeneficiaryClass = (function () {
  var requiredFields = {
    'beneficiary[sex]': false,
    'beneficiary[firstName]': false,
    'beneficiary[lastName]': false,
    'beneficiary[email]': false,
    'beneficiary[phone]': false,
    'beneficiary[yesNo]': false
  };

  var nextStep = null;
  var previousStep = null;

  function disabledNextBtn() {
    var selectorNextBeneficiary = document.getElementById(
      'beneficiary-btnNext'
    );
    RequestApp.render(
      RequestApp.componentsList.SzButton,
      selectorNextBeneficiary,
      { isDisabled: true },
      'SUIVANT'
    );
  }
  function enableNextBtn() {
    var selectorNextBeneficiary = document.getElementById(
      'beneficiary-btnNext'
    );
    RequestApp.render(
      RequestApp.componentsList.SzButton,
      selectorNextBeneficiary,
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
    RequestApp.render(RequestApp.componentsList.SzInput, selector, inputProps);
  }

  function initBeneficiaryProfessionalFields(mode) {
    //isProfessional
    if (false === mode) {
      RequestApp.deleteComponent('beneficiary-company-name', 'col-md-12');
      RequestApp.deleteComponent(
        'beneficiary-siret-code',
        'col-md-6 col-xs-12'
      );
      RequestApp.deleteComponent('beneficiary-naf-code', 'col-md-6 col-xs-12');

      return false;
    }
    var selectorCompanyName = document.getElementById(
      'beneficiary-company-name'
    );
    var selectorNafCode = document.getElementById('beneficiary-naf-code');
    var selectorSiretCode = document.getElementById('beneficiary-siret-code');

    var inputCompanyNameBeneficiary = {
      value: '',
      label: 'Raison sociale',
      name: 'beneficiary[companyName]',
      id: 'beneficiary_companyName',
      placeholder: 'Saisir une raison sociale',
      required: true
    };

    var inputNafCodeBeneficiary = {
      value: '',
      label: 'Code naf',
      name: 'beneficiary[nafCode]',
      id: 'beneficiary_nafCode',
      placeholder: 'Saisir le code NAF',
      required: true
    };

    var inputSiretCode = {
      value: '',
      label: 'Code Siret',
      name: 'beneficiary[siretCode]',
      id: 'beneficiary_siretCode',
      placeholder: 'Saisir le code SIRET',
      required: true
    };

    initInput(inputCompanyNameBeneficiary, selectorCompanyName);
    initInput(inputNafCodeBeneficiary, selectorNafCode);
    initInput(inputSiretCode, selectorSiretCode);

    $('#beneficiary-address').show();
    $('#beneficiary-address-complement').show();
  }

  function initBeneficiaryAdressYesFields(mode) {
    if (false === mode) {
      RequestApp.deleteComponent(
        'beneficiary-city-postal-code',
        'col-md-12 px-0'
      );
      RequestApp.deleteComponent('beneficiary-address', 'col-md-12 px-0');
      RequestApp.deleteComponent(
        'beneficiary-address-complement',
        'col-md-12 px-0'
      );

      return false;
    }
    var selectorCityPostalCodeBeneficiary = document.getElementById(
      'beneficiary-city-postal-code'
    );
    var selectorAddressBeneficiary = document.getElementById(
      'beneficiary-address'
    );
    var selectorAdressComplementBeneficiary = document.getElementById(
      'beneficiary-address-complement'
    );

    var inputCityPostalCodeBeneficiary = {
      value: '',
      label: 'Ville ou code postal',
      name: 'beneficiary[zipCity]',
      id: 'beneficiary_zip_city',
      placeholder: 'Saisir la ville ou le code postal',
      required: true
    };

    var inputAdressBebenficiary = {
      value: '',
      label: 'N° et voie ',
      name: 'beneficiary[address]',
      id: 'beneficiary_address',
      placeholder: "Saisir l'adresse correspondante",
      required: true
    };

    var inputAdressComplementBeneficiary = {
      value: '',
      label: "Complément d'adresse",
      name: 'beneficiary[addressComplement]',
      id: 'beneficiary_address_complement',
      placeholder: "Saisir l'adresse correspondante",
      required: false
    };

    initInput(
      inputCityPostalCodeBeneficiary,
      selectorCityPostalCodeBeneficiary
    );
    initInput(inputAdressBebenficiary, selectorAddressBeneficiary);
    initInput(
      inputAdressComplementBeneficiary,
      selectorAdressComplementBeneficiary
    );

    $('#beneficiary-address').hide();
    $('#beneficiary-address-complement').hide();

    cap.address.init({
      path: capadress_url,
      disableFields: false,
      zipcity_ID: 'beneficiary_zip_city',
      street_ID: 'beneficiary_address',
      additionalInfo_ID: 'beneficiary_address_complement',
      errorMessages: {
        showMessage: true
      }
    });
    cap.address.retrieveFormID();
    cap.address.bindInputsEvents();

    loadCommune();
  }

  function initCapAddress(codeInsee) {
    cap.address.propChoisie[0] = {
      buildingInfo_1: '',
      countryCode: 'FRA',
      inputOutput: '',
      languageCode: 'fr',
      step: 'SearchLocality'
    };

    cap.address.propChoisie[0]['localityId'] = codeInsee;
  }

  function checkTownServices(inseeCode, dataSelected) {
    $.ajax({
      type: 'POST',
      url: Routing.generate('request_path_check_service_town'),
      data: {
        dataSelected: JSON.stringify(dataSelected)
      },
      success: function (data) {
        if (data.checkServicesTown === true) {
          initCapAddress(inseeCode);

          $("[name='values-required']").removeClass('d-none');
          $('#beneficiary-address').show();
          $('#beneficiary-address-complement').show();
          isValidTown = true;
        } else if (data.checkServicesTown === false) {
          $('#error-message-beneficiary .sz-alert__text').html(
            data.errorMessage
          );
          $('#error-message-beneficiary').show();
          $('#beneficiary-btnNext > .btn').attr('disabled', '');
        }
      },
      error: function (data, status, message) {
        $('#beneficiary-form .error-message .alert-message').html(
          "Une erreur technique s'est produite Merci de réessayer ultérieurement ou contacter votre service client"
        );
        $('#beneficiary-form .error-message').show();
      }
    });
  }

  function loadCommune() {
    var options = {
      url: function (phrase) {
        return getPath('/search-towns-water-in-my-city/' + phrase);
      },
      requestDelay: 500,
      getValue: 'text',
      preparePostData: function (data) {
        $('#beneficiary-city-postal-code').append(
          '<i class="icon-spinner spin"></i>'
        );
      },
      list: {
        maxNumberOfElements: 50,
        onShowListEvent: function () {
          $('#beneficiary-city-postal-code').find('.icon-spinner').remove();
        },
        onHideListEvent: function () {},
        onClickEvent: function () {
          var dataSelected = $('#beneficiary_zip_city').getSelectedItemData();
          checkTownServices(dataSelected.inseecode, dataSelected);
          $('#beneficiary-address').hide();
          $('#beneficiary-address-complement').hide();
        }
      }
    };

    $('#beneficiary_zip_city').easyAutocomplete(options);
  }

  function initBeneficiaryAdressNoFields(mode) {
    if (false === mode) {
      RequestApp.deleteComponent('beneficiary-city-postal-code', 'col-md-12');
      RequestApp.deleteComponent('beneficiary-address', 'col-md-12');
      RequestApp.deleteComponent('beneficiary-address-complement', 'col-md-12');

      return false;
    }
    var url = $('#beneficiary-form').attr('action');
    $.ajax({
      type: 'POST',
      url: url,
      data: { searchAdressSession: 'address_session' },
      success: function (data) {
        if (data.isError == false) {
          var inputStreetParam = data.inputStreet;
          var inputComplementAddParam = data.inputComplementAdd;
          var inputTownChoiceParam = data.inputTownChoice;

          $('#beneficiary_address').val(inputStreetParam);
          $('#beneficiary_zipCity').val(inputTownChoiceParam);
          $('#beneficiary_addressComplement').val(inputComplementAddParam);
        }
      },
      error: function (data, status, message) {}
    });

    var selectorCityPostalCodeBeneficiary = document.getElementById(
      'beneficiary-city-postal-code'
    );
    var selectorAddressBeneficiary = document.getElementById(
      'beneficiary-address'
    );
    var selectorAdressComplementBeneficiary = document.getElementById(
      'beneficiary-address-complement'
    );

    var inputCityPostalCodeBeneficiary = {
      value: '',
      label: 'Ville ou code postal',
      name: 'beneficiary[zipCity]',
      id: 'beneficiary_zipCity',
      placeholder: 'Saisir la ville ou le code postal',
      required: true
    };

    var inputAdressBebenficiary = {
      value: '',
      label: 'N° et voie ',
      name: 'beneficiary[address]',
      id: 'beneficiary_address',
      placeholder: "Saisir l'adresse correspondante",
      required: true
    };

    var inputAdressComplementBeneficiary = {
      value: '',
      label: "Complément d'adresse",
      name: 'beneficiary[addressComplement]',
      id: 'beneficiary_addressComplement',
      placeholder: "Saisir l'adresse correspondante",
      required: false
    };

    initInput(
      inputCityPostalCodeBeneficiary,
      selectorCityPostalCodeBeneficiary
    );
    initInput(inputAdressBebenficiary, selectorAddressBeneficiary);
    initInput(
      inputAdressComplementBeneficiary,
      selectorAdressComplementBeneficiary
    );
  }

  function initBeneficiaryFields(statusBeneficiary) {
    var selectorTitleBeneficiary = document.getElementById(
      'beneficiary-titleBeneficiary'
    );
    var selectorStatusBeneficiary =
      document.getElementById('beneficiary-status');
    var selectorSexBeneficiary = document.getElementById('beneficiary-sex');
    var selectorFirstNameBeneficiary = document.getElementById(
      'beneficiary-first-name'
    );
    var selectorLastNameBeneficiary = document.getElementById(
      'beneficiary-last-name'
    );
    var selectorPhoneBeneficiary = document.getElementById('beneficiary-phone');
    var selectorEmailBeneficiary = document.getElementById('beneficiary-email');
    var selectorYesNo = document.getElementById('beneficiary-addresse-yes-no');
    var selectorErrorMessage = document.getElementById(
      'error-message-beneficiary'
    );

    RequestApp.render(
      RequestApp.componentsList.SzAlert,
      selectorErrorMessage,
      { label: 'button', type: 'danger' },
      ''
    );

    RequestApp.render(
      RequestApp.componentsList.SzTitle,
      selectorTitleBeneficiary,
      { className: 'text-uppercase sz-underline mb-3' },
      'Informations concernant le bénéficiaire'
    );

    statusBeneficiary = JSON.parse(statusBeneficiary.replace(/&quot;/g, '"'));
    var selectStatusBeneficiary = {
      name: 'beneficiary[status]',
      id: 'beneficiary_status',
      value: '',
      label: '',
      options: statusBeneficiary,
      onChange: function (e) {
        selectStatusBeneficiary.value = $(
          "select[name='beneficiary[status]']"
        ).val();
        if (selectStatusBeneficiary.value == 'professional') {
          initBeneficiaryProfessionalFields(true);
          checkEnabledNextBtn();
        }
        if (selectStatusBeneficiary.value == 'particular') {
          initBeneficiaryProfessionalFields(false);
          checkEnabledNextBtn();
        }
        RequestApp.render(
          RequestApp.componentsList.SzSelect,
          selectorStatusBeneficiary,
          selectStatusBeneficiary
        );
      },
      required: false
    };

    RequestApp.render(
      RequestApp.componentsList.SzSelect,
      selectorStatusBeneficiary,
      selectStatusBeneficiary
    );

    var radioSexBeneficiary = {
      name: 'beneficiary[sex]',
      id: 'beneficiary_sex',
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
        radioSexBeneficiary.value = $(
          "input[name='beneficiary[sex]']:checked"
        ).val();
        RequestApp.render(
          RequestApp.componentsList.SzChooseButton,
          selectorSexBeneficiary,
          radioSexBeneficiary
        );
        requiredFields['beneficiary[sex]'] = true;
        checkEnabledNextBtn();
      },
      required: true
    };

    RequestApp.render(
      RequestApp.componentsList.SzChooseButton,
      selectorSexBeneficiary,
      radioSexBeneficiary
    );

    var radioYesNo = {
      name: 'beneficiary[yesNo]',
      id: 'beneficiary_yesNo',
      value: '',
      required: true,
      choices: [
        {
          icon: '',
          label: 'Oui',
          value: 'yes'
        },
        {
          icon: '',
          label: 'Non',
          value: 'no'
        }
      ],
      onChange: function (e) {
        radioYesNo.value = $("input[name='beneficiary[yesNo]']:checked").val();

        if (radioYesNo.value == 'no') {
          initBeneficiaryAdressYesFields(false);
          initBeneficiaryAdressNoFields(true);
          checkEnabledNextBtn();
        }
        if (radioYesNo.value == 'yes') {
          initBeneficiaryAdressNoFields(false);
          initBeneficiaryAdressYesFields(true);
          checkEnabledNextBtn();
        }
        RequestApp.render(
          RequestApp.componentsList.SzChooseButton,
          selectorYesNo,
          radioYesNo
        );
        requiredFields['beneficiary[yesNo]'] = true;
        checkEnabledNextBtn();
      }
    };

    RequestApp.render(
      RequestApp.componentsList.SzChooseButton,
      selectorYesNo,
      radioYesNo
    );

    var inputFirstNameBeneficiary = {
      value: '',
      label: 'Prénom',
      name: 'beneficiary[firstName]',
      id: 'beneficiary_firstName',
      placeholder: 'Saisir votre prénom',
      required: true
    };

    var inputLastNameBeneficiary = {
      value: '',
      label: 'Nom',
      name: 'beneficiary[lastName]',
      id: 'beneficiary_lastName',
      placeholder: 'Saisir votre nom',
      required: true
    };

    var inputEmailBeneficiary = {
      value: '',
      label: 'Adresse E-mail',
      name: 'beneficiary[email]',
      id: 'beneficiary_email',
      placeholder: 'Saisir une adresse e-mail',
      required: true
    };

    var inputPhoneBeneficiary = {
      value: '',
      label: 'Téléphone',
      name: 'beneficiary[phone]',
      id: 'beneficiary_phone',
      placeholder: 'Saisir un numéro de téléphone',
      required: true
    };

    initInput(inputFirstNameBeneficiary, selectorFirstNameBeneficiary);
    initInput(inputLastNameBeneficiary, selectorLastNameBeneficiary);
    initInput(inputEmailBeneficiary, selectorEmailBeneficiary);
    initInput(inputPhoneBeneficiary, selectorPhoneBeneficiary);

    /* Sale ! En attente d'une évolution du design system... */
    $('#beneficiary-status').find('select').attr('name', 'beneficiary[status]');
    $('#beneficiary-status').find('select').attr('id', 'beneficiary_status');

    var beneficiarySex = document.getElementsByName('beneficiary[sex]');

    setTimeout(function () {
      beneficiarySex[0].setAttribute('id', 'beneficiary_sex_0');
      beneficiarySex[1].setAttribute('id', 'beneficiary_sex_1');
    });
  }

  jQuery.validator.addMethod('valueNotEquals', function (value, element, arg) {
    return arg !== value;
  });

  // Validation des champs
  function validateBeneficiaryForm() {
    $('#beneficiary-form').validate({
      errorClass: 'error-label',
      ignore: [],
      rules: {
        'beneficiary[status]': {
          valueNotEquals: 'no-select-beneficiary'
        },
        'beneficiary[sex]': {
          required: true
        },
        'beneficiary[firstName]': {
          required: true,
          maxlength: 50
        },
        'beneficiary[lastName]': {
          required: true,
          maxlength: 50
        },
        'beneficiary[email]': {
          required: true,
          email: true
        },
        'beneficiary[phone]': {
          required: true,
          regex: /\d{10}/
        },
        'beneficiary[yesNo]': {
          required: true
        },
        'beneficiary[zipCity]': {
          required: true
        },
        'beneficiary[address]': {
          required: true,
          maxlength: 50
        },
        'beneficiary[addressComplement]': {
          maxlength: 50
        },
        'beneficiary[companyName]': {
          required: true,
          maxlength: 50
        },
        'beneficiary[nafCode]': {
          required: true,
          regex: /^.{5}$/
        },
        'beneficiary[siretCode]': {
          required: true,
          regex: /^\d{14}$/
        }
      },
      messages: {
        'beneficiary[status]': {
          valueNotEquals: 'Veuillez renseigner votre statut.'
        },
        'beneficiary[sex]': {
          required: 'Veuillez renseigner votre sexe.'
        },
        'beneficiary[firstName]': {
          required: 'Veuillez renseigner votre nom.',
          maxlength: 'Le prénom ne peut dépasser 50 caractères.'
        },
        'beneficiary[lastName]': {
          required: 'Veuillez renseigner votre prénom.',
          maxlength: 'Le prénom ne peut dépasser 50 caractères.'
        },
        'beneficiary[email]': {
          required: 'Veuillez renseigner votre email.',
          email: 'Veuillez renseigner un email valide.'
        },
        'beneficiary[phone]': {
          required: 'Veuillez renseigner un numéro de téléphone.',
          regex:
            'Veuillez renseigner un numéro de téléphone valide (10 chiffres sans espace).'
        },
        'beneficiary[yesNo]': {
          required: 'Veuillez renseigner votre choix.'
        },
        'beneficiary[zipCity]': {
          required: 'Veuillez renseigner un code postal ou une ville '
        },
        'beneficiary[address]': {
          required: 'Veuillez renseigner une adresse',
          maxlength: "L'adresse ne peut dépasser 50 caractères."
        },
        'beneficiary[addressComplement]': {
          maxlength: "Le complement d'adresse ne peut dépasser 50 caractères."
        },
        'beneficiary[companyName]': {
          required: 'Veuillez renseigner votre raison sociale.',
          maxlength: 'La raison sociale ne peut dépasser 50 caractères.'
        },
        'beneficiary[nafCode]': {
          required: 'Veuillez renseigner votre code NAF.',
          regex: 'Le code NAF contient 5 caractères.'
        },
        'beneficiary[siretCode]': {
          required: 'Veuillez renseigner votre code SIRET.',
          regex: 'Le code SIRET comporte 14 chiffres.'
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
          RequestApp.displayMessageWarning($('#error-message-beneficiary'));
        } else {
          RequestApp.removeAllSpecificElementByClass('error-specific');
          $('#beneficiary-form').find('#error-message-beneficiary').hide();
        }
      },
      submitHandler: function (form) {},
      resetForm: function () {},
      invalidHandler: function (event, validator) {
        return false;
      }
    });
  }
  function checkBeneficiaryValidForm() {
    $('#beneficiary-btnNext button').on('click', function () {
      if ($('#beneficiary-form').valid() == true) {
        submitBeneficiary();
      }
    });
  }
  function submitBeneficiary() {
    var beneficiaryForm = $('#beneficiary-form');
    var formData = beneficiaryForm.serialize();
    var url = beneficiaryForm.attr('action');
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
          RequestApp.displayMessageWarning($('#error-message-beneficiary'));
        } else {
          RequestApp.stepper('form-beneficiary', nextStep);
        }
      },
      error: function (data, status, message) {
        RequestApp.displayMessageWarning($('#error-message-beneficiary'));
      }
    });
  }
  return {
    initBeneficiary: function (
      statusBeneficiary,
      nextStepParam,
      previousStepParam
    ) {
      nextStep = nextStepParam;
      previousStep = previousStepParam;

      initBeneficiaryFields(statusBeneficiary);
      $('.sz-container-select')
        .find('i')
        .removeClass('mdi-unfold-more-horizontal');
      disabledNextBtn();
      validateBeneficiaryForm();
      checkBeneficiaryValidForm();

      RequestApp.managePreviousBtn(
        'beneficiary-btnPrev',
        'form-beneficiary',
        previousStep
      );
    }
  };
})(jQuery);
