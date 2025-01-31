var ApplicantOrBeneficiaryManager = (function ($) {
  var previousStep = null;

  function initApplicantOrBene() {
    var ApplicantOrBeneficiaryClass = {
      disabledNextBtn: function () {
        var selectorNextAOrB = document.getElementById('a-or-b-btnNext');
        RequestApp.render(
          RequestApp.componentsList.SzButton,
          selectorNextAOrB,
          { isDisabled: true },
          'SUIVANT'
        );
      },
      enableNextBtn: function () {
        var selectorNextAOrB = document.getElementById('a-or-b-btnNext');
        RequestApp.render(
          RequestApp.componentsList.SzButton,
          selectorNextAOrB,
          { isDisabled: false },
          'SUIVANT'
        );
      }
    };

    var selectorTitleAOrB = document.getElementById(
      'applicant-or-beneficiary-title'
    );
    var selectorTypeApplicantOrBeneficiary = document.getElementById(
      'applicant-or-beneficiary-choice'
    );
    var title = RequestApp.componentsList.SzTitle;
    RequestApp.render(
      title,
      selectorTitleAOrB,
      { className: 'text-uppercase sz-underline mb-3' },
      'INFORMATION CONCERNANT LE DEMANDEUR'
    );

    var inputType = {
      name: 'applicant_or_beneficiary[choice_applicant_or_beneficiary]',
      onChange: function () {
        var choiceValue = $(
          "#applicant-or-beneficiary_form input[type='radio']:checked"
        ).val();
        $('#applicant_or_beneficiary_on_behalf').val(choiceValue);
        ApplicantOrBeneficiaryClass.enableNextBtn();
      },
      className: 'btn-request col-md-12 p-0 applicant-or-beneficiary-button',
      value: '',
      choices: [
        {
          label: 'Non',
          value: 'non'
        },
        {
          label: 'Oui',
          value: 'oui'
        }
      ]
    };

    /* Sale ! En attente d'une évolution du design system... */
    var choix = document.getElementsByName(
      'applicant_or_beneficiary[choice_applicant_or_beneficiary]'
    );
    setTimeout(function () {
      choix[0].setAttribute('class', 'yes-or-no');
      choix[1].setAttribute('class', 'yes-or-no');
    }, 0);
    /* end sale ! */

    RequestApp.render(
      RequestApp.componentsList.SzChooseButton,
      selectorTypeApplicantOrBeneficiary,
      inputType
    );

    ApplicantOrBeneficiaryClass.disabledNextBtn();
  }
  function submitApplicantOrBeneficiary() {
    var applicantOrBeneficiaryForm = $('#applicant-or-beneficiary_form');
    var url = applicantOrBeneficiaryForm.attr('action');

    $.ajax({
      type: 'POST',
      url: url,
      data: applicantOrBeneficiaryForm.serialize(),
      success: function (data) {
        var isError = data.isError;
        var onBehalf = data.onBehalf;

        if (
          data.isError == true &&
          data.hasOwnProperty('idCurrentStep') == true
        ) {
          window.location.href = Routing.generate(RequestApp.getKeyHomePage());
        } else if (!isError) {
          if (onBehalf == 'non') {
            // Aller à la page info bénéficiaire
            RequestApp.stepper(
              'form-applicant-or-beneficiary',
              'form-beneficiary'
            );
          } else if (onBehalf == 'oui') {
            // Aller à la page info demandeur
            RequestApp.stepper(
              'form-applicant-or-beneficiary',
              'form-applicant'
            );
          }
        } else {
          var messageKeyError = data.messageError;
          var selector = document.getElementById(
            'applicant-or-beneficiary-choice'
          );
          RequestApp.diplaySpecificError(selector, null, messageKeyError);
          RequestApp.displayMessageWarning(
            $('#error-message-applicant-or-beneficiary')
          );
        }
      },
      error: function (data, status, message) {
        RequestApp.displayMessageWarning(
          $('#error-message-applicant-or-beneficiary')
        );
      }
    });
  }

  return {
    initApplicantOrBene: function (previousStepParam) {
      previousStep = previousStepParam;

      initApplicantOrBene();

      $('#a-or-b-btnNext').click(function () {
        submitApplicantOrBeneficiary();
      });

      RequestApp.managePreviousBtn(
        'a-or-b-btnPrev',
        'form-applicant-or-beneficiary',
        previousStep
      );
    }
  };
})(jQuery);
