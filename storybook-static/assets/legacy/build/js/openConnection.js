var OpenConnectionClass = (function () {
  var nextStep = null;
  var previousStep = null;

  function disabledNextBtn() {
    var selectorNextOc = document.getElementById('oc-btnNext');
    RequestApp.render(
      RequestApp.componentsList.SzButton,
      selectorNextOc,
      { isDisabled: true },
      'SUIVANT'
    );
  }

  function enableNextBtn() {
    var selectorNextOc = document.getElementById('oc-btnNext');
    RequestApp.render(
      RequestApp.componentsList.SzButton,
      selectorNextOc,
      { isDisabled: false },
      'SUIVANT'
    );
  }

  function submitOpenConnection() {
    //js-open-connection
    var openConnectionForm = $('#open_connection_form');

    var valueChoice = $(
      "#open_connection_form input[class='js-open-connection']:checked"
    ).val();
    $('#open_connection_choice_choiceOpenConnection').attr(
      'value',
      valueChoice
    );
    var url = openConnectionForm.attr('action');
    var formData = {
      openConnectionChoice: $(
        "#open_connection_form input[type='radio']:checked"
      ).val()
    };

    $.ajax({
      type: 'POST',
      url: url,
      data: formData,
      success: function (data) {
        var choice = data.openConnectionChoice;

        if (
          data.isError == true &&
          data.hasOwnProperty('idCurrentStep') == true
        ) {
          window.location.href = Routing.generate(RequestApp.getKeyHomePage());
        } else if (data.isError == true) {
          RequestApp.displayMessageWarning($('#error-message-open-connection'));
        } else if (choice == '0') {
          $('.connection-message-infos').removeClass('d-flex');
          $('.connection-message-infos').addClass('d-none');

          $('.not-connection-message').addClass('d-flex');
          $('.not-connection-message').removeClass('d-none');
          $('#error-message-open-connection').hide();
          disabledNextBtn();
        } else {
          $('.connection-message-infos').addClass('d-flex');
          $('.connection-message-infos').removeClass('d-none');

          $('.not-connection-message').removeClass('d-flex');
          $('.not-connection-message').addClass('d-none');
          $('#error-message-open-connection').hide();
          enableNextBtn();
        }
      },
      error: function (data, status, message) {}
    });
  }

  function initFields() {
    var selectorTitleOpenConnection = document.getElementById(
      'open-connection-title'
    );
    var selectorTypeOpenConnection = document.getElementById(
      'open-connection-type'
    );
    var title = RequestApp.componentsList.SzTitle;
    RequestApp.render(
      title,
      selectorTitleOpenConnection,
      { className: 'text-uppercase sz-underline mb-3' },
      'INFORMATION SUR LE BRANCHEMENT'
    );

    var selectorErrorMessage = document.getElementById(
      'error-message-open-connection'
    );
    RequestApp.render(
      RequestApp.componentsList.SzAlert,
      selectorErrorMessage,
      { label: 'button', type: 'danger' },
      ''
    );

    var inputType = {
      name: 'open-connection-name',
      onChange: function () {
        inputType.value = $(
          "#open_connection_form input[class='js-open-connection']:checked"
        ).val();
        RequestApp.render(
          RequestApp.componentsList.SzChooseButton,
          selectorTypeOpenConnection,
          inputType
        );
        submitOpenConnection();
      },
      className: 'btn-request',
      value: '',
      choices: [
        {
          label: 'Non',
          value: '0'
        },
        {
          label: 'Oui',
          value: '1'
        }
      ]
    };
    /* Sale ! En attente d'une évolution du design system... */
    var choix = document.getElementsByName('open-connection-name');
    setTimeout(function () {
      choix[0].setAttribute('class', 'js-open-connection');
      choix[1].setAttribute('class', 'js-open-connection');
    }, 0);

    /* end sale ! */

    RequestApp.render(
      RequestApp.componentsList.SzChooseButton,
      selectorTypeOpenConnection,
      inputType
    );

    disabledNextBtn();
  }

  function constructFormObjectRequest() {
    FormManager.initAutoSpinnerByBtn($('#oc-btnNext button'));

    var ocVal = $('#open_connection_choice_choiceOpenConnection').val();
    $.ajax({
      type: 'POST',
      url: Routing.generate('request_path_object_request'),
      data: { ocValue: ocVal },
      success: function (data) {
        FormManager.stopAutoSpinnerByBtn($('#oc-btnNext button'), 'SUIVANT');

        if (
          data.isError == true &&
          data.hasOwnProperty('idCurrentStep') == true
        ) {
          window.location.href = Routing.generate(RequestApp.getKeyHomePage());
        } else if (
          data.isError == true &&
          data.onlyGeneralError != 'undefined'
        ) {
          RequestApp.displayMessageWarning($('#error-message-open-connection'));
        } else if (
          data.openConnectionError != 'undefined' &&
          data.openConnectionError == true
        ) {
          FormManager.stopAutoSpinnerByBtn($('#oc-btnNext button'), 'SUIVANT');
          $('#error-message-open-connection').show();
          RequestApp.displayMessageWarning(
            $('#error-message-open-connection'),
            data.message
          );
          return false;
        } else if (data.isError == false) {
          $('#form-object-request').html(data.html);
          RequestApp.stepper('form-open-connection', nextStep);
        }
      },
      error: function (data, status, message) {
        FormManager.stopAutoSpinnerByBtn($('#oc-btnNext button'), 'SUIVANT');
        RequestApp.displayMessageWarning($('#error-message-open-connection'));
        RequestApp.displayOriginalBtn('oc-btnNext');
      }
    });
  }

  return {
    init: function (nextStepParam, previousStepParam) {
      nextStep = nextStepParam;
      previousStep = previousStepParam;

      initFields();

      RequestApp.managePreviousBtn(
        'oc-previous-btn',
        'form-open-connection',
        previousStep
      );

      $('#oc-btnNext').on('click', function () {
        constructFormObjectRequest();
      });
    }
  };
})(jQuery);
