var sds                                      = window.SDS;
var keyHomePage                              = null;

var PLACE_TOWN_CHOICE                     = 'form-town-choice';
var PLACE_AN_ANC                          = 'form-sanitation';
var PLACE_WATER_CONNECTION                = 'form-open-connection';
var PLACE_TYPE_OF_REQUEST                 = 'form-object-request';
var PLACE_MULTI_APPLICANT_OR_BENEFICIARY  = 'form-applicant-or-beneficiary';
var PLACE_MULTI_APPLICANT                 = 'form-applicant';
var PLACE_MULTI_APPLICANT_SHORT           = 'form-applicant-short';
var PLACE_MULTI_PROJECT_CODE              = 'form-project-code';
var PLACE_MULTI_BENEFICIARY               = 'form-beneficiary';
var PLACE_MULTI_BILLING_ADDRESS           = 'form-billing-address';
var PLACE_MULTI_ATTACHMENT                = 'bloc-attachements';
var PLACE_MULTI_AGENDA                    = 'agenda-form';
var PLACE_MULTI_AGENDA_ADDRESS            = 'form-agenda-address';
var PLACE_MULTI_SUMMARY                   = 'form-summary';
var PLACE_MULTI_CONFIRMATION              = 'form-confirmation';
var PLACE_PERSONAL_INFO                   = 'form-personal-info';

var RequestApp = {
    render: sds.render,
    componentsList:  sds.componentsList,
    create: sds.create,

    diplaySpecificError: function (selectorParent, keyIdError, messageError)
    {
        var error = document.createElement("div");
        if (keyIdError) {
            error.setAttribute("id", keyIdError);
        }

        error.setAttribute("class", "error-label error-specific");

        selectorParent.appendChild(error);

        RequestApp.render(RequestApp.componentsList.SzAlert, error, {label: 'button', type: 'danger'}, messageError);
    },
    displayMessageWarning: function (keyIdError, messageSpecific)
    {
        var htmlGlobalMessage = "Erreur. Veuillez vérifier votre saisie. " +
            "Certaines informations saisies ci-dessus ne sont pas valides.";

        if (typeof messageSpecific !== 'undefined') {
            htmlGlobalMessage = messageSpecific;
        }

        keyIdError.find('.sz-alert__text').html(htmlGlobalMessage);
        keyIdError.show();
        keyIdError.removeClass('d-none');
    },
    construcMessageErrors: function (idParentError, idError, messagesError)
    {
        for (var key in messagesError) {
            var messageError = messagesError[key];
            RequestApp.contructOneError(idParentError, idParentError+key, messageError);
        }
    },
    contructOneError: function (idParentError, idError, messageError)
    {
        var selectorParentError = document.getElementById(idParentError);
        var newDiv              = document.createElement("div");

        newDiv.setAttribute("id", idError);
        newDiv.setAttribute('class', 'row error-general multi-error');

        RequestApp.render(RequestApp.componentsList.SzAlert, newDiv, {label: 'button', type: 'danger'}, messageError);
        selectorParentError.appendChild(newDiv);
    },
    removeAllSpecificElementByClass: function (nameClass)
    {
        var paras         = document.getElementsByClassName(nameClass);
        var numberElement = paras.length;

        for (var i = 0; i < numberElement; i++) {
            paras[0].remove();
        }
    },
    removeAllSpecificElementByIdAndClass: function (idElement, nameClass)
    {
        var paras = document.getElementById(idElement).getElementsByClassName(nameClass);
        var numberElement = paras.length;

        for (var i = 0; i < numberElement; i++) {
             paras[0].remove();
        }
    },
    displayBackErrors: function (objErrors)
    {
         for (var key in objErrors) {
            var objError = objErrors[key];
            for (var keyError in objError) {
                var messageError = objError[keyError];
                var selectorParentError = document.getElementById(key).parentElement.parentElement;
                RequestApp.diplaySpecificError(selectorParentError, null, messageError);
            }
        }
    },
    buttonLoading: function (idBtn)
    {
        $('#'+idBtn).addClass('d-none');
        var parent = $('#'+idBtn).parent()

        var html = '<button disabled="" class="font-family-bold text-primary text-uppercase position-relative overflow-hidden sz-btn border-0 py-3 btn btn-secondary without-arrow">' +
            '<i class="icon-spinner spin"  style="font-size: inherit"></i>' +
            '</button>';

        parent.append(html);
    },
    displayOriginalBtn: function (idBtn)
    {
        $('#'+idBtn).removeClass('d-none');
        $('#'+idBtn).parent().find('button').remove();
    },
    callSpecificBlock: function(currentKey)
    {
        switch(currentKey) {
            case PLACE_MULTI_ATTACHMENT:
                Attachement.manageFilesDownload(PLACE_MULTI_ATTACHMENT);
                break;
            case PLACE_MULTI_BILLING_ADDRESS:
                BillingAddressClass.loadBillingAddress();
                break;
            case PLACE_MULTI_SUMMARY:
                SummaryManager.loadSummary();
                break;
            case PLACE_TYPE_OF_REQUEST:
                ObjectRequet.constructFormObjectRequest();
                break;
            case PLACE_MULTI_AGENDA_ADDRESS:
                AgendaAddressClass.loadAgendaAddress();
                break;
            case PLACE_MULTI_CONFIRMATION:
                ConfirmationManager.loadConfirmation();
                break;
        }
    },
    contructStepsPrevious: function(currentStep)
    {
        $.ajax({
            type: "POST",
            url: Routing.generate('request_path_steps_previous'),
            data: {'currentStep': currentStep},
            success: function (data) {
                if (data.isError == true && data.hasOwnProperty('idCurrentStep') == true) {
                    window.location.href = Routing.generate("request_path_homepage");
                } else {
                    RequestApp.callSpecificBlock(currentStep);
                }
            },
            error: function (data, status, message) {
            }
        });
    },
    displayBlocHeight0: function(idToShow)
    {
        $('#'+idToShow).removeClass('no-height-over-flow');
        $('#'+idToShow).show();
    },
    stepper: function (idToNone, idToShow)
    {
        RequestApp.contructStepsPrevious(idToShow);

        if (idToShow == PLACE_MULTI_AGENDA) {
            $('#'+idToNone).hide();
            if ($('#'+idToShow).hasClass('no-height-over-flow') == false) {
                $('#'+idToShow).addClass('no-height-over-flow');
            }

            RequestApp.displayBlocHeight0(idToShow);

            var elmntAgenda = document.getElementById(idToShow);
            elmntAgenda.scrollIntoView();

            return;
        }

        $('#'+idToNone).hide();
        $('#'+idToShow).show();

        var elmnt = document.getElementById(idToShow);
        elmnt.scrollIntoView();
    },
    managePreviousBtn: function (idBtnPrevious, idCurrentForm, idPreviousShow) {
        $("#"+idBtnPrevious).click(function() {
            $.ajax({
                type: "POST",
                url: Routing.generate('request_path_get_step_previous'),
                data: {'currentStep': idCurrentForm},
                success: function (data) {
                    if (data.isError == false) {
                        $('#'+idCurrentForm).hide();
                        $('#'+data.previousStep).show();
                    }
                },
                error: function (data, status, message) {
                }
            });

        });
    },
    fileConvertSize: function (aSize)
    {
        aSize = Math.abs(parseInt(aSize, 10));
        var def = [[1, 'Octets'], [1024, 'Ko'], [1024*1024, 'Mo'], [1024*1024*1024, 'Go'], [1024*1024*1024*1024, 'To']];
        for (var i=0; i<def.length; i++){
            if (aSize < def[i][0]) {
                return (aSize/def[i-1][0]).toFixed(2)+' '+def[i-1][1];
            }
        }
    },
    filevalidation: function (idLineFile, idInputFile, elementMessageError, enabledFileFormats, sizeMaxFile, keyLocation)
    {
        enabledFileFormats = JSON.parse(enabledFileFormats.replace(/&quot;/g,'"'));

        var fi              = document.getElementById(idInputFile);
        var selectorLine    = null;
        var isError         = false;

        // Check if any file is selected.
        if (fi.files.length > 0) {
            for (var i = 0; i <= fi.files.length - 1; i++) {
                if (jQuery.inArray(fi.files.item(i).type, enabledFileFormats ) == -1) {
                    selectorLine = document.getElementById(idLineFile);

                    RequestApp.diplaySpecificError(
                        selectorLine,
                        null,
                        'Le format de la pièce jointe est incorrect.'
                    );


                    isError = true;
                }

                var fsize     = fi.files.item(i).size;
                var file      = Math.round((fsize / 1024));
                var sizeMaxKo = sizeMaxFile * 1024;

                // The size of the file.
                if (file >= sizeMaxKo && keyLocation == UploadFileManager.getKeyLocationRequestPath()) {
                    selectorLine = document.getElementById(idLineFile);

                    RequestApp.diplaySpecificError(
                        selectorLine,
                        null,
                        'La taille de la pièce jointe dépasse la limite maximale'
                    );

                    isError = true;
                }

                if (isError == true) {
                    return false;
                }
            }

            return true;
        }
    },
    removeClassTextColor: function(elementLineFile)
    {
        elementLineFile.find('.data-file').removeClass("text-color-red-02");
        elementLineFile.find('.data-file').find('.title').removeClass("text-color-red-02");
    },
    manageErrorFile: function (errors, elementMessageGlobalError)
    {
        RequestApp.removeAllSpecificElementByClass('error-specific');

        for (var key in errors) {
            var objError = errors[key];

            $('#'+key).find('.data-file').addClass("text-color-red-02");
            $('#'+key).find('.data-file').find('.title').addClass("text-color-red-02");

            var selectorLine = document.getElementById(key);

            for (var keyError in objError) {
                var messageError = objError[keyError];
                RequestApp.diplaySpecificError(
                    selectorLine,
                    null,
                    messageError
                );
            }
        }

        RequestApp.displayMessageWarning(elementMessageGlobalError, 'Erreur global. test A changer !');
    },

    changeInputFields: function(selector)
    {
        $(selector)
            .keyup(function () {
                $(selector).removeClass("bg-light").addClass("bg-white sz-form-group__sz-input-text--checked");
            })
            .blur(function () {
                if (!$(this).val()) {
                    $(selector).removeClass("bg-white sz-form-group__sz-input-text--checked").addClass("bg-light");
                }
            });
    },
    setKeyHomePage: function(key)
    {
        keyHomePage = key;
    },
    getKeyHomePage: function()
    {
        return keyHomePage;
    },
    /**
     *
     * @param idComponent id for layout component
     * @param classNames   string of css  class
     */
    deleteComponent: function (idComponent, classNames ) {
        var content = '<div id="'+idComponent+'" class="'+classNames+'"></div>';
        $('#'+idComponent).replaceWith(content);
    }
};
