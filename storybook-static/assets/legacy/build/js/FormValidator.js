'use strict';

var FormValidator = (function () {
  const EMAIL_REGEX =
      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  var $form, $globalError, $validator;
  var validationRules;
  var validationMessages;
  var enabledCaptcha = false;

  function validateEmail(value)
  {
    return EMAIL_REGEX.test(value);
  }

  function loadCustomRules() {
    jQuery.validator.addMethod('email', function( value, element ) {
      // From http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#e-mail-state-%28type=email%29
      // Retrieved 2014-01-14
      // If you have a problem with this implementation, report a bug against the above spec
      // Or use custom methods to implement your own email validation
      return this.optional(element) || validateEmail(value);
    });
    jQuery.validator.addMethod('valueNotEquals', function (value, element, arg) {
      return arg !== value;
    });
    jQuery.validator.addMethod('isSiret', function (value, element) {
      return this.optional(element) || /^([0-9]{9}|[0-9]{14})$/.test(value);
    });
    jQuery.validator.addMethod('isFrenchPhone', function (value, element) {
      return this.optional(element) || /^(0)\s*([0-5]|9)\s*([0-9]\s*){8}$/.test(value);
    });
    jQuery.validator.addMethod('isFrenchMobilePhone', function (value, element) {
      return this.optional(element) || /^(0)\s*(6|7)\s*([0-9]\s*){8}$/.test(value);
    });
    jQuery.validator.addMethod('isMobileOrPhoneAllowSpaces', function (value, element) {
      return this.optional(element) || /^0[\s.]*([0-9][\s.]*){9}$/.test(value);
    });
    jQuery.validator.addMethod('isZipCode', function (value, element) {
      return this.optional(element) || /^([0-9]{5})$/.test(value);
    });
    jQuery.validator.addMethod('isValidClientReference', function (value, element) {
      var valueSyntax = /^98[-.\ ]?[0-9]{10}$/.test(value);

      var valueNumber = /^([0-9]{12})$/.test(value.replace(/[\-\.\ ]+/g, ''));

      return this.optional(element) || valueSyntax && valueNumber;
    });

    jQuery.validator.addMethod('isFrenchDate', function (value) {
      if (value != '') {
        return value.match(/^\d\d?\/\d\d?\/\d\d\d\d$/);
      }
      return true;
    });
    jQuery.validator.addMethod('isPastDate', function (value) {
      var date = new Date(value.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3-$2-$1'));

      return (date < new Date());
    });
    jQuery.validator.addMethod('isPastTimeFromDate', function (value, element, $date) {
      var submittedDay = new Date($date.val().replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3-$2-$1')).setHours(0);
      var currentTime = new Date();
      currentTime.setSeconds(0, 0);
      var submittedTime = new Date();
      submittedTime.setHours(value.split(':')[0], value.split(':')[1], 0, 0);

      if (submittedDay == new Date().setHours(0, 0, 0, 0)) {
        return submittedTime.getTime() <= currentTime.getTime();
      }

      return true;
    });
    jQuery.validator.addMethod('isCaptchaValid', function (value, element, name) {
      if (!/^([A-z]{5})$/.test(value)) {
        return false;
      }

      var valid = false;
      jQuery
        .ajax({
          url: Routing.generate('captcha_check', {'name': name, 'value': value}),
          success: function (response) {
            valid = response.valid;
          },
          async: false
        });

      return valid;
    });
    jQuery.validator.addMethod('filesSize', function (value, element, maxSize) {
      var size = 0;
      for (var i = 0; i < element.files.length; ++i) {
        size += element.files[i].size;
      }

      return this.optional(element) || size < maxSize;
    });
    jQuery.validator.addMethod('maxNbFiles', function (value, element, nbFiles) {
      return element.files.length <= nbFiles;
    });
    jQuery.validator.addMethod('accept', function (value, element, param) {
      // Taken from jQuery Validation additional components
      var typeParam = typeof param === 'string' ? param.replace(/\s/g, '') : 'image/*',
        optionalValue = this.optional(element),
        i, file, regex;

      if (optionalValue) {
        return optionalValue;
      }

      if ($(element).attr('type') === 'file') {
        typeParam = typeParam.replace(/[\-\[\]\/\{\}\(\)\+\?\.\\\^\$\|]/g, '\\$&').replace(/,/g, '|').replace('\/*', '/.*');

        if (element.files && element.files.length) {
          regex = new RegExp('.?(' + typeParam + ')$', 'i');
          for (i = 0; i < element.files.length; i++) {
            file = element.files[i];

            if (!file.type.match(regex)) {
              return false;
            }
          }
        }
      }

      return true;
    });
    jQuery.validator.addMethod('isValidMessageObject', function (value) {
      if (value !== '') {
        if (value === 'Choisir un objet') {
          return false;
        }
      }
      return true;
    });
  }

  function checkForm() {
    var options = {
      errorClass: 'error-label',
      rules: validationRules,
      messages: validationMessages,
      showErrors: function (errorMap) {
        this.defaultShowErrors();

        for (var key in errorMap) {
          if (typeof (errorMap[key]) === 'undefined') {
            $("[name='" + key + "']").parent().addClass('form-group-error');
          } else {
            $("[name='" + key + "']").parent().addClass('form-group-error');
            $globalError.show();
          }
        }
      },
      invalidHandler: function () {
        return false;
      },
      unhighlight: function (element) {
        jQuery(element).parent().removeClass('form-group-error').addClass('form-group');
      },
      errorPlacement: function (error, element) {
        element.parent().append(error);
      }
    };

    if (enabledCaptcha == false) {
      options['submitHandler'] = function (form) {
        form.submit();
        var $submitButtons = $(form).find(':submit');
        $submitButtons
          .prop('disabled', true)
          .addClass('without-arrow')
          .html('<i class="icon-spinner spin"></i>')
        ;
      };

    }

    return $form.validate(options);
  }

  function checkPreRegistrationForm() {
    var widgetPreRegistration;
    var options = {
      errorClass: 'error-label',
      rules: validationRules,
      messages: validationMessages,
      onkeyup: function (element) {

        const formulaireId = $(element).parents('form').attr('id');

        if (formulaireId === 'registration_pre_check_form') {
          checkFieldsConditionnaly(
            element.id,
            formulaireId,
            'registration_pre_check_contract_reference',
            'registration_pre_check_contract_identifier',
            'registration_pre_check_contract_cp_site'
          );
        } else if (formulaireId === 'contract_form') {
          checkFieldsConditionnaly(
            element.id,
            formulaireId,
            'add_contract_fullReference',
            'add_contract_identifier',
            'add_contract_cp_site'
          );
        }

        function checkFieldsConditionnaly (elementId, formulaireId, fullRefId, identifiantId, cpSiteId) {
          if (
            elementId === identifiantId || elementId === cpSiteId)
          {
            const fullRefValid = $('#' + fullRefId).valid();
            const identifiantValid = $('#' + identifiantId).valid();
            const identifiantValue = $('#' + identifiantId).val();
            const cpSiteValid = $('#' + cpSiteId).valid();
            const cpSiteValue = $('#' + cpSiteId).val();

            if (fullRefValid
                            && identifiantValid
                            && cpSiteValid
                            && identifiantValue !== ''
                            && cpSiteValue !== ''
            ) {
              $('.button-primary').removeAttr('disabled');
            } else {
              $('.button-primary').attr('disabled: disabled');
            }
          } else {
            var check = $(element).valid();
            check ? $('.button-primary').removeAttr('disabled') : $('.button-primary').attr('disabled: true');
          }
        }
      },
      showErrors: function (errorMap) {
        this.defaultShowErrors();

        for (var key in errorMap) {
          if (typeof (errorMap[key]) === 'undefined') {
            $("[name='" + key + "']").parent().addClass('border-danger');
            $("[name='" + key + "']").parent().parent().find('.sz-alert').addClass('show');
          } else {
            $("[name='" + key + "']").parent().addClass('border-danger');
            $("[name='" + key + "']").parent().parent().find('.sz-alert').addClass('show');
            editGeneralErrorMessage();
            $globalError.show();
          }
        }
      },
      invalidHandler: function () {
        return false;
      },
      unhighlight: function (element) {
        jQuery(element).parent().parent().find('.sz-alert').removeClass('show');
        $globalError.hide();
      },
      errorPlacement: function (error, element) {
        element.parent().parent().find('.w-error').text(error.text());
        // jQuery('#registration_pre_check_form #button_submit').attr('disabled', true);
      }
    };

    // if (enabledCaptcha == false) {
    options['submitHandler'] = function (form) {
      //form.submit();

      var $submitButtons = $(form).find(':submit');
      $submitButtons
        .prop('disabled', true)
        .addClass('without-arrow')
        .html('<i class="icon-spinner spin"></i>')
      ;

      var v_cellphone = $('.bloc-cell-phone').find(':input').eq(0).is(':visible');
      var v_phone = $('.bloc-phone').find(':input').eq(0).is(':visible');
      var v_email = $('.bloc-w-email').find(':input').eq(0).is(':visible');
      var v_identifiant = $('.bloc-identifiant').find(':input').eq(0).is(':visible');
      var v_cp_site = $('.bloc-cp_site').find(':input').eq(0).is(':visible');
      var fullRef = $('#registration_pre_check_contract_reference').val();
      if ($('#add_contract_fullReference').length) {
        fullRef = $('#add_contract_fullReference').val();
      }

      //alert(fullRef);
      if (!v_cellphone && !v_phone && !v_email && !v_identifiant && !v_cp_site && fullRef) {
        hideSubmitButton($('.bloc-identifiant'));
        //check customer
        jQuery
          .ajax({
            url: Routing.generate('check_reference', {'fullRef': fullRef}),
            success: function (response) {
              if (response && response.code == 0) {
                window.scrollTo(0, 0);
                $globalError.show();
              } else if (response && response.code == 1) {
                if ($('.bloc-ref-cli input').size() > 0) {
                  $('.bloc-ref-cli input').prop('readonly', true);
                }

                displayInputBlock(response);
                $form.find('#button_submit').addClass('g-recaptcha');

                if ($('#g-recaptcha-response').size() > 0) {
                  // load grecaptcha when other block are displaying
                  var object = $form.find('.g-recaptcha');
                  widgetPreRegistration = grecaptcha.render(object.attr('id'), {
                    'badge': 'bottomleft',
                    'sitekey': recaptcha_invisible_public_key,
                    'callback': function (token) {
                      object
                        .prop('disabled', true)
                        .addClass('without-arrow')
                        .html('<i class="icon-spinner spin"></i>');
                      object.parents('form').find('#g-recaptcha-response').val(token);
                      object.parents('form').find('#g-recaptcha-response-1').val(token);
                      object.parents('form').submit();
                    }
                  });
                }

              }
            },
            error: function () {

            }
          });
      } else if ((v_cellphone || v_phone || v_email || v_identifiant || v_cp_site) && fullRef) {
        if ($('#contract_form').size() == 0) {
          var cellphoneVal = $('.bloc-cell-phone').find(':input').eq(0).val();
          var phoneVal = $('.bloc-phone').find(':input').eq(0).val();
          var emailVal = $('.bloc-w-email').find(':input').eq(0).val();
          var identifiantVal = $('.bloc-identifiant').find(':input').eq(0).val();
          var cpSiteVal = $('.bloc-cp_site').find(':input').eq(0).val();
          //check customer
          jQuery
            .ajax({
              url: Routing.generate('next_step', {'fullRef': fullRef}),
              data: {
                cellphone: cellphoneVal,
                phone: phoneVal,
                email: emailVal,
                cp_site: cpSiteVal,
                identifiant: identifiantVal
              },
              success: function (response) {
                if (response && response.code == 0) {
                  window.scrollTo(0, 0);
                  hideSubmitButton($('.bloc-identifiant'));
                  if (response.cellphone == 1) {
                    editErrorMessage('le numéro de téléphone portable');
                  } else if (response.phone == 1) {
                    editErrorMessage('le numéro de téléphone domicile');
                  } else if (response.email == 1) {
                    editErrorMessage('L\'email');
                  } else if (response.identifiant == 1) {
                    editErrorMessage('L\'identifiant');
                  } else if (response.cp_site == 1) {
                    editErrorMessage('Le code postal');
                  }
                  $globalError.show();
                  // reload grecaptcha when there is an error
                  if ($('#g-recaptcha-response').size() > 0) {
                    if (widgetPreRegistration) {
                      grecaptcha.reset(widgetPreRegistration);
                    }
                  }

                  if ($('#valider-consentements').length) {
                    $('.close-modal').click();
                  }
                } else if (response && response.code == 1) {
                  if ($('#add_contract_fullReference').length == 0 || $('#button_submit_consent').find('.icon-spinner').size() > 0) {
                    form.submit();
                  }
                  return true;
                }
              },
              error: function () {

              }
            });
        }
      }
    };
    // }

    $form.validate(options);
  }

  function checkDirectPaymentForm() {
    let options = {
      errorClass: 'error-label',
      rules: validationRules,
      messages: validationMessages,
      onfocusout: function (element) {
        function checkFieldsConditionnaly (elementId, formulaireId, fullRefId, cellPhoneId, emailId) {
          if (
              elementId === cellPhoneId || elementId === emailId)
          {
            const fullRefValid = $('#' + fullRefId).valid();
            const cellPhoneValid = $('#' + cellPhoneId).valid();
            const cellPhoneValue = $('#' + cellPhoneId).val();
            const emailValid = $('#' + emailId).valid();
            const emailValue = $('#' + emailId).val();
            if (fullRefValid && ((cellPhoneValid && cellPhoneValue !== '') ||
                (emailValid && emailValue !== ''))
            ) {
              $('.button-primary').removeAttr('disabled');
            } else {
              $('.button-primary').attr('disabled: disabled');
            }
          } else {
            var check = $(element).valid();
            check ? $('.button-primary').removeAttr('disabled') : $('.button-primary').prop('disabled', 'disabled');
          }
        }

        $(element).valid();
        const formulaireId = $(element).parents('form').attr('id');
        if (formulaireId === 'login-direct-payment') {
          checkFieldsConditionnaly(
            element.id,
            formulaireId,
            'login_fullReference',
            'login_cellphone',
            'login_email'
          );
        }
      },

      onkeyup: (element) => {
        let $form = $(element).parents('form');
        if ($form.valid()) {
          $('.button-primary').prop('disabled', false).removeClass('disabled');
        } else {
          $('.button-primary').prop('disabled', 'disabled').addClass('disabled');
        }
      },

      showErrors: function (errorMap) {
        this.defaultShowErrors();

        for (var key in errorMap) {
          let $field = $("[name='" + key + "']").parent();
          if (typeof (errorMap[key]) === 'undefined') {
            $field.addClass('border-danger');
            $field.parent().find('.sz-alert').removeClass('hide-alert');
            $field.parent().find('.sz-alert').addClass('show-alert');
          } else {
            $field.addClass('border-danger');
            $field.parent().find('.sz-alert').removeClass('hide-alert');
            $field.parent().find('.sz-alert').addClass('show-alert');
          }
        }
      },
      invalidHandler: function () {
        return false;
      },
      unhighlight: function (element) {
        $(element).parent().parent().find('.sz-alert').removeClass('show-alert').addClass('hide-alert');
        $globalError.addClass('hide fade');
      },
      errorPlacement: function (error, element) {
        element.parent().parent().find('.w-error').text(error.text());
        element.parents('form').find('#button_submit').attr('disabled', true);
      }
    };

    options['submitHandler'] = function (form) {
      var $submitButtons = $(form).find(':submit');
      $submitButtons
        .prop('disabled', true)
        .addClass('without-arrow')
        .html('<i class="icon-spinner spin"></i>')
      ;
      var v_cellphone = $('.bloc-cell-phone').find(':input').eq(0).is(':visible');
      var v_email = $('.bloc-w-email').find(':input').eq(0).is(':visible');
      var fullRef = '';
      if ($('#registration_pre_check_contract_reference').length) {
        fullRef = $('#registration_pre_check_contract_reference').val();
      }
      else if ($('#login_fullReference').length){
        fullRef = $('#login_fullReference').val();
      }

      if (!v_cellphone && !v_email && fullRef) {
        //check customer
        directPaymentFullReference = directPaymentFullReference || null;
        $.ajax({
            url: Routing.generate('check_reference', {
              'fullRef': fullRef,
              'needCaptcha': directPaymentFullReference !== fullRef ? 1 : 0,
              'g-recaptcha-response': $('#g-recaptcha-response').val()
            }),
            success: function (response) {
              if (response && response.code == 0) {
                window.scrollTo(0, 0);
                $globalError.removeClass('hide fade');
              } else if (response && response.code == 1) {
                if ($('.bloc-ref-cli input').size() > 0) {
                  $('.bloc-ref-cli input').prop('readonly', true);
                  $('.edit-ref').removeClass('hide').prop('readonly', true);
                }

                displayInputBlock(response);

                grecaptcha.reset(widgetPreRegistration);
              }
            },
            complete: function () {
              reInitSubmitButton();
            },
            error: function () {

            }
          });
      } else if ((v_cellphone || v_email) && fullRef) {
        $submitButtons
          .prop('disabled', true)
          .addClass('without-arrow')
          .html('<i class="icon-spinner spin"></i>')
        ;
        var cellphoneVal = $('.bloc-cell-phone').find(':input').eq(0).val();
        var phoneVal = $('.bloc-phone').find(':input').eq(0).val();
        var emailVal = $('.bloc-w-email').find(':input').eq(0).val();
        //check customer
        $.ajax({
            url: Routing.generate('next_step', {'fullRef': fullRef, 'logFailure': 1}),
            data: {
              cellphone: cellphoneVal,
              phone: phoneVal,
              email: emailVal,
            },
            success: function (response) {
              if (response && response.code == 0) {
                window.scrollTo(0, 0);
                hideSubmitButton($('.bloc-identifiant'));
                if (response.cellphone == 1) {
                  editErrorMessage('le numéro de téléphone portable');
                } else if (response.phone == 1) {
                  editErrorMessage('le numéro de téléphone domicile');
                } else if (response.email == 1) {
                  editErrorMessage('L\'email');
                } else if (response.identifiant == 1) {
                  editErrorMessage('L\'identifiant');
                } else if (response.cp_site == 1) {
                  editErrorMessage('Le code postal');
                }
                $globalError.removeClass('hide fade');
                // reload grecaptcha when there is an error
                if ($('#g-recaptcha-response').size() > 0) {
                  grecaptcha.reset();
                }
                reInitSubmitButton();
              } else if (response && response.code == 1) {
                form.submit();
              }
            },
            error: function () {
              reInitSubmitButton();
            }
          });
      }
    };

    $form.validate(options);
  }

  function initPreRegistrationCheckRefFilled($form) {
    var refFilled = $('#registration_pre_check_contract_reference').val();
    if(refFilled && $form.valid()) {
      $('.button-primary').removeAttr('disabled');
    }
    var refFilled = $('#login_fullReference').val();
    if(refFilled && $form.valid()) {
      $('.button-primary').removeAttr('disabled');
    }
  }


  return {
    init: function ($targetForm, $globalErrorDiv, rules, messages, serverError) {
      $form = $targetForm;
      $globalError = $globalErrorDiv;


      if (serverError == undefined || !serverError) {
        $globalError.hide();
      } else {
        $form.closest('section.collapse').addClass('force-display');
      }

      validationRules = rules;
      validationMessages = messages;

      loadCustomRules();
      checkForm();
    },
    initPreRegistration: function ($targetForm, $globalErrorDiv, rules, messages, serverError) {
      $form = $targetForm;
      $globalError = $globalErrorDiv;


      if (serverError == undefined || !serverError) {
        $globalError.hide();
      } else {
        $form.closest('section.collapse').addClass('force-display');
      }

      validationRules = rules;
      validationMessages = messages;

      loadCustomRules();
      checkPreRegistrationForm();
      initPreRegistrationCheckRefFilled($form);
            
    },
    initPreDirectPayment: function ($targetForm, $globalErrorDiv, rules, messages, serverError) {
      $form = $targetForm;
      $globalError = $globalErrorDiv;


      if (serverError == undefined || !serverError) {
        $globalError.addClass('hide');
      } else {
        $form.closest('section.collapse').addClass('force-display');
      }

      validationRules = rules;
      validationMessages = messages;

      loadCustomRules();
      checkDirectPaymentForm();
      initPreRegistrationCheckRefFilled($form);
    },
    getEnabledCaptcha: function (recaptchaEnab) {
      enabledCaptcha = recaptchaEnab;
    },
    checkForm: function () {
      return checkForm();
    },
    loadCustomRules: function() {
      loadCustomRules();
    },
    validateEmail: function(value) {
      return validateEmail(value)
    }
  };
})(jQuery);

function fillCapHiddenInput() {
  var commune = $('#input_cp_js').val();
  commune = commune.split(', ');
  var params = {zipCode: commune[1], name: commune[0]};

  $.ajax({
    method: 'POST',
    url: getPath(Routing.generate('lderiuc_get_insee_capaddress', {})),
    data: params
  }).done(function (data) {
    if (data.isError === true) {
      $('#display-error-tech').show();
    } else {
      // call capaddress api for getting street info
      var adr = $('#complaint_author_address_address').val();
      adr = adr.trim();
      adr = adr.replace(/\s+/g, '+');
      params = {zipCode: commune[1], name: commune[0], codeInseeCap: data.codeInseeCap, address: adr};

      $.ajax({
        method: 'POST',
        url: Routing.generate('lderiuc_get_street_info_capaddress', {}),
        data: params
      }).done(function (data2) {
        if (data2.street_id) {
          $('#complaint_street_id').val(data2.street_id);
        }
        if (data2.street_number) {
          $('#complaint_street_number').val(data2.street_number);
        }
      });
    }
  });
  return false;
}

function hideSubmitButton(element) {
  var button = $(element).parents('form').find('.button-primary');
  button
    .attr('disabled', true)
    .html('continuer')
  ;
}

function showSubmitButton(element) {
  var button = $(element).parents('form').find('.button-primary');
  button
    .removeAttr('disabled')
    .html('continuer')
  ;
}