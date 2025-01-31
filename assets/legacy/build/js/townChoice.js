var TownChoiceManager = (function() {

    var recaptchaEnabled = null;
    var nextStep         = null;
    var isValidTown      = false;

    function initInput(inputProps, selector) {
        var componentsList  = RequestApp.componentsList;

        inputProps.onChange = function (e) {
            inputProps.value = e.target.value;
            RequestApp.render(componentsList.SzInput, selector, inputProps);
        };

        RequestApp.render(componentsList.SzInput, selector, inputProps);
    }

    function initFields()
    {
        var selectorTitleTownChoice = document.getElementById('townChoice-title');

        RequestApp.render(
            RequestApp.componentsList.SzTitle,
            selectorTitleTownChoice,
            {className: 'text-uppercase sz-underline mb-3'},
            'Veuillez nous indiquer le code postal ou la ville du site concerné par votre demande'
        );

        var selectorErrorMessage = document.getElementById('error-message-town-choice');

        RequestApp.render(RequestApp.componentsList.SzAlert, selectorErrorMessage, {label: 'button', type: 'danger'}, '');
    }

    function initCapAddress(codeInsee)
    {
        cap.address.propChoisie[0] = {
            buildingInfo_1: "",
            countryCode: "FRA",
            inputOutput: "",
            languageCode: "fr",
            step: "SearchLocality"
        };

        cap.address.propChoisie[0]["localityId"]=codeInsee;
    }

    function checkTownServices(inseeCode)
    {
        var dataSelected = {'dataSelected': $('#town_choice_tcKeyDataTownChoice').val()};

        $.ajax({
            type: "POST",
            url:  Routing.generate('request_path_check_service_town'),
            data: dataSelected,
            success: function (data) {
                if (data.checkServicesTown == true) {
                    initCapAddress(inseeCode);

                    $("[name='values-required']").removeClass('d-none');
                    $('#tc-input-street').show();
                    $('#tc-input-complement-add').show();
                    isValidTown = true;
                } else if (data.checkServicesTown == false) {
                    $('#error-message-town-choice .sz-alert__text').html(data.errorMessage);
                    $('#error-message-town-choice').show();
                    $('#tc-btnNext').attr('disabled', '');
                }
            },
            error: function (data, status, message) {
                $('#form-town-choice .error-message .alert-message').html('Une erreur technique s\'est produite Merci de réessayer ultérieurement ou contacter votre service client');
                $('#form-town-choice .error-message').show();
            }
        });
    }

    function loadCommune()
    {
        var options = {
            url: function (phrase) {
                return getPath('/search-towns-water-in-my-city/' + phrase)
            },
            requestDelay: 500,
            getValue: "text",
            preparePostData: function(data) {
                $('#tc-input-town-choice').append('<i class="icon-spinner spin"></i>');
            },
            list: {
                maxNumberOfElements: 50,
                onShowListEvent: function () {
                    $('#tc-input-town-choice').find('.icon-spinner').remove();
                    $("#count-adress").html($("#eac-container-basics ul li").length + " commune(s)");
                },
                onHideListEvent: function () {
                    $("#count-adress").html("");
                },
                onClickEvent: function() {
                   var dataSelected = $("#tc-input-town-choice input").getSelectedItemData();
                   $('#town_choice_tcKeyDataTownChoice').val(JSON.stringify(dataSelected));

                   if ($('#town_choice_tcKeyDataTownChoice').length) {
                       checkTownServices(dataSelected.inseecode);
                   }

                   if ($('#tc-input-street').length) {
                       $('#tc-input-street').hide();
                   }

                    if ($('#tc-input-complement-add').length) {
                        $('#tc-input-complement-add').hide();
                    }
                },
            }
        };

        $("#tc-input-town-choice input").easyAutocomplete(options);

    }

    function validateForm()
    {
        $("#town_choice_form").validate({
            errorClass: "error-label",
            rules: {
                'town_choice[tcKeyInputTownChoice]': {
                    required: true,
                    maxlength: 50,
                },
                'town_choice[tcKeyInputStreet]': {
                    required: true,
                    maxlength: 300
                },
                'town_choice[tcKeyInputComplementAdd]': {
                    maxlength: 50
                },
            },
            messages: {
                'town_choice[tcKeyInputTownChoice]': {
                    required: 'La ville ou le code postal sont incorrects',
                    maxlength: 'Veuillez saisir une ville ou un code postal de moins de 50 caractères.'
                },
                'town_choice[tcKeyInputStreet]': {
                    required: 'Le numéro et la voie sont incorrects, veuillez vérifier votre saisie.',
                    maxlength: 'Veuillez saisir un numéro et une voie de moins de 300 caractères.'
                },
                'town_choice[tcKeyInputComplementAdd]': {
                    maxlength: 'Veuillez saisir un complément d\'adresse de moins de 50 caractères.'
                },
            },
            showErrors: function (errorMap) {
                RequestApp.removeAllSpecificElementByClass('error-specific');

                for (key in errorMap) {
                    var selectorInput = document.getElementsByName(key)[0];
                    selectorInput = selectorInput.parentElement.parentElement;

                    if (typeof (errorMap[key]) != "undefined") {
                        RequestApp.diplaySpecificError(selectorInput, null, errorMap[key]);
                    }
                }

                if (this.numberOfInvalids() >= 1) {
                    RequestApp.displayMessageWarning($('#error-message-town-choice'));
                } else {
                    RequestApp.removeAllSpecificElementByClass('error-specific');
                    $('#town_choice_form').find('#error-message-town-choice').hide();
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

    function checkValidForm()
    {
        $( "#tc-btnNext" ).click(function() {
            FormManager.initAutoSpinnerByBtn($('#tc-btnNext'));

            if ($("#town_choice_form").valid() == true) {
                submitTownChoice();
            }
        });
    }

    function submitTownChoice()
    {
        var townChoiceForm = $('#town_choice_form');
        var formData       = townChoiceForm.serialize();
        var url            = townChoiceForm.attr('action');

        RequestApp.buttonLoading('tc-btnNext');

        $.ajax({
            type: "POST",
            url: url,
            data: formData,
            success: function (data) {
                if (data.isError == true) {
                    var manageErrors = data.manageError;
                    RequestApp.displayBackErrors(manageErrors);
                    RequestApp.displayMessageWarning($('#error-message-town-choice'));
                } else {
                    RequestApp.stepper('form-town-choice', nextStep);
                    RequestApp.displayOriginalBtn('tc-btnNext');
                }
            },
            error: function (data, status, message) {
                RequestApp.displayMessageWarning($('#error-message-town-choice'));
                RequestApp.displayOriginalBtn('tc-btnNext');
            }
        });
    }

    function onChangeFields()
    {
        $( "#town_choice_tcKeyInputStreet" ).change(function() {
            if ($('#town_choice_tcKeyInputTownChoice').length > 0 &&
                $('#town_choice_tcKeyInputStreet').length > 0 &&
                isValidTown === true) {
                $('#tc-btnNext').removeAttr('disabled');
            }
        });
    }

    return {
        initTownChoice: function(recaptchaEnabledParam, nextStepParam) {
            recaptchaEnabled = recaptchaEnabledParam;
            nextStep         = nextStepParam;

            initFields();
            loadCommune();
            validateForm();

            if (recaptchaEnabled == 'false') {
                checkValidForm();
            }
        },
        submitTownChoiceCaptcha: function () {
            if ($("#town_choice_form").valid() == true && recaptchaEnabled == 'true') {
                submitTownChoice();
            }
        },
        onChangeFields: function () {
            onChangeFields();
        }
    };
})(jQuery);
