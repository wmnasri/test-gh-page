var ObjectRequet = (function () {
  const KEY_LOCATION_ACTION_ATTACHEMENTS = 'ACTION_ATTACHEMENTS';
  const STATUS_ABORT = 'abort';

  let keyLocation = null;
  let previousStep = null;

  let manageMessagesRequestAjax = null;
  let callUploadFileAjax = null;
  let createFormsByMotifAjax = null;

  function initFields() {
    disabledNextBtn();
  }

  function disabledNextBtn() {
    var selectorNextOr = document.getElementById(keyLocation + '-or-btnNext');
    RequestApp.render(
      RequestApp.componentsList.SzButton,
      selectorNextOr,
      { isDisabled: true },
      'SUIVANT'
    );
    // Fix btn render after selecting a choice option in new_connection_edtm
    $('#' + keyLocation + '-or-btnNext button').attr('disabled', true);
  }

  function enableNextBtn() {
    var selectorNextOr = document.getElementById(keyLocation + '-or-btnNext');
    RequestApp.render(
      RequestApp.componentsList.SzButton,
      selectorNextOr,
      { isDisabled: false },
      'SUIVANT'
    );
  }

  function displayTitleLabel() {
    var title = RequestApp.componentsList.SzTitle;
    var selectorTitleOpenConnection = document.getElementById(
      'object-request-title'
    );
    RequestApp.render(
      title,
      selectorTitleOpenConnection,
      { className: 'text-uppercase sz-underline mb-3' },
      'Motif de la demande'
    );
  }

  function abortPreviousMotif() {
    if (null !== manageMessagesRequestAjax) {
      manageMessagesRequestAjax.abort();
    }

    if (null !== callUploadFileAjax) {
      callUploadFileAjax.abort();
    }

    if (null !== createFormsByMotifAjax) {
      createFormsByMotifAjax.abort();
    }
  }

  function manageMotif() {
    $('#object_request_choiceTypeRequest').change(function () {
      disabledNextBtn();

      var data = {
        motifSelected: this.value,
        keyLocation: keyLocation
      };

      abortPreviousMotif();
      manageMessagesRequest(data);
    });
  }

  function callUploadFile(dataParam) {
    callUploadFileAjax = $.ajax({
      type: 'POST',
      url: Routing.generate('request_path_upload_file'),
      data: dataParam,
      success: function (data) {
        if (data.isError == false) {
          disabledNextBtn();

          $('#form-upload-files').html(data.html);
          $('#form-upload-files').show();
          $('#upload-files-formats').show();

          createFormsByMotif(dataParam.motifSelected, dataParam.keyLocation);
        }
      },
      error: function (data, status, message) {
        if (STATUS_ABORT !== status) {
          createFormsByMotif(dataParam.motifSelected, dataParam.keyLocation);
        }
      }
    });
  }

  function createFormsByMotif(motifSelected, keyLocation) {
    const END_SCRIPT_LENGTH = 9;

    createFormsByMotifAjax = $.ajax({
      type: 'POST',
      url: Routing.generate('request_path_construc_forms_by_motif'),
      data: { motifSelected: motifSelected },
      success: function (data) {
        if (data.isError == false) {
          if (PLACE_TYPE_OF_REQUEST === keyLocation) {
            let startScript = data.html.indexOf('<script');
            let endScript = data.html.indexOf('</script>') + END_SCRIPT_LENGTH;
            let scriptSrc = $(data.html.slice(startScript, endScript));
            let html = data.html.slice(endScript);

            let script = document.createElement('script');
            script.addEventListener('load', function () {
              $.when($('#blocs-forms-by-motif').html(html)).then(function () {
                // Fix to enable submit btn on object request form only for some cases
                var stepsCodes = Object.values(data.steps);
                // when next step is loaded for some cases, enable submit button on current form
                if (
                  typeof stepsCodes[1] !== 'undefined' &&
                  (stepsCodes[1] === PLACE_MULTI_APPLICANT_OR_BENEFICIARY ||
                    stepsCodes[1] === PLACE_PERSONAL_INFO)
                ) {
                  enableNextBtn();
                }
              });
            });
            script.src = scriptSrc.attr('src');

            document.head.appendChild(script);
          } else {
            $('#blocs-forms-by-motif').html(data.html);
          }
        }
      }
    });
  }

  function manageMessagesRequest(dataParam) {
    $('#request-messages').html('');

    manageMessagesRequestAjax = $.ajax({
      type: 'POST',
      url: Routing.generate('request_path_get_messages_request'),
      data: dataParam,
      success: function (data) {
        if (
          data.isError == true &&
          data.hasOwnProperty('idCurrentStep') == true
        ) {
          window.location.href = Routing.generate(RequestApp.getKeyHomePage());
        } else if (data.isError == false && data.messages.length > 0) {
          var messages = data.messages;

          for (var i = 0; i < messages.length; i++) {
            var htmlMessage =
              '<div  class="message-infos d-flex align-self-center col-md-12 p-3 mb-2">' +
              '<i class="mdi mdi-information-outline mr-3 display-4 sz-icon-line information-circle"></i>' +
              ' <p class="m-0 align-self-center message-request">' +
              messages[i] +
              '</p> </div>';

            $('#request-messages').append(htmlMessage);
          }
        }
        callUploadFile(dataParam);
      },
      error: function (data, status) {
        if (STATUS_ABORT !== status) {
          callUploadFile(dataParam);
        }
      }
    });
  }

  function constructFormObjectRequest() {
    $.ajax({
      type: 'POST',
      url: Routing.generate('request_path_object_request'),
      success: function (data) {
        if (
          data.isError == true &&
          data.hasOwnProperty('idCurrentStep') == true
        ) {
          window.location.href = Routing.generate(RequestApp.getKeyHomePage());
        } else if (data.isError == false) {
          $('#form-object-request').html(data.html);
        }
      },
      error: function (data, status, message) {}
    });
  }

  return {
    initObjectRequest: function (keyLocationParam, previousStepParam) {
      keyLocation = keyLocationParam;
      previousStep = previousStepParam;

      initFields();
      manageMotif();
      displayTitleLabel();

      RequestApp.managePreviousBtn(
        'or-previous-btn',
        'form-object-request',
        previousStep
      );
    },
    constructFormObjectRequest: constructFormObjectRequest
  };
})(jQuery);
