var ProjectCodeManager = (function($) {
    var nextStep     = null;
    var previousStep = null;

    var requiredFields = {
        'project_code[fileNumber]': false,
    };

    function initProjectCode()
    {
        var selectorTitleprojectCode = document.getElementById("project-code-title");

        var title = RequestApp.componentsList.SzTitle;
        RequestApp.render(title, selectorTitleprojectCode, {className: "text-uppercase sz-underline mb-3"}, "Code projet");

        var selectorCodeProjectCode = document.getElementById('code-project-code');

        var inputName = {
            value: '',
            label: 'Numéro de dossier Eau et Aménagement',
            name: 'project_code[fileNumber]',
            id: 'project_code_fileNumber',
            placeholder: 'Saisir le Code projet [xxxx-xxxx]',
            required: true
        };


        initInput(inputName, selectorCodeProjectCode);

        disabledNextBtn();

        var selectorErrorMessage = document.getElementById('error-message-project-code');
        RequestApp.render(RequestApp.componentsList.SzAlert, selectorErrorMessage, {label: 'button', type: 'danger'}, '');

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
        } else {
            disabledNextBtn();
        }
    }

    function disabledNextBtn()
    {
        var selectorNextOr = document.getElementById('project-code-btnNext');
        RequestApp.render(RequestApp.componentsList.SzButton, selectorNextOr, {isDisabled: true}, 'SUIVANT');
    }

    function enableNextBtn()
    {
        var selectorNextOr = document.getElementById('project-code-btnNext');
        RequestApp.render(RequestApp.componentsList.SzButton, selectorNextOr, {isDisabled: false}, 'SUIVANT');
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

    function validateForm()
    {
        $("#project_code_form").validate({
            errorClass: "error-label",
            rules: {
                'project_code[fileNumber]': {
                    required: true,
                    maxlength: 10,
                    regex: "^[0-9]{4}-[0-9]{4}$"
                },
            },
            messages: {
                'project_code[fileNumber]': {
                    required: 'Le numéro du dossier Eau et Aménagement est incorrect',
                    regex: 'Le numéro du dossier Eau et Aménagement est incorrect',
                    maxlength: 'Veuillez saisir un numéro de dossier Eau et Aménagement de moins de 10 caractères.'
                },
            },
            showErrors: function (errorMap) {
                RequestApp.removeAllSpecificElementByClass('error-specific');

                for (var key in errorMap) {
                    var selectorInput = document.getElementsByName(key)[0];
                    selectorInput = selectorInput.parentElement.parentElement;

                    if (typeof (errorMap[key]) != "undefined") {
                        RequestApp.diplaySpecificError(selectorInput, null, errorMap[key]);
                    }
                }

                if (this.numberOfInvalids() >= 1) {
                    RequestApp.displayMessageWarning($('#error-message-project-code'));
                } else {
                    RequestApp.removeAllSpecificElementByClass('error-specific');
                    $('#project_code_form').find('#error-message-project-code').hide();
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

    function checkProjectCodeValidForm()
    {
        $( "#project-code-btnNext button" ).click(function() {
            if ($("#project_code_form").valid() == true) {
                submitProjectCode();
            }
        });
    }

    function submitProjectCode()
    {
        var projectCodeForm = $('#project_code_form');
        var formData        = projectCodeForm.serialize();

        $.ajax({
            type: "POST",
            url: Routing.generate('new_connection_project_code'),
            data: formData,
            success: function (data) {
                if (data.isError == true && data.hasOwnProperty('idCurrentStep') == true) {
                    window.location.href = Routing.generate(RequestApp.getKeyHomePage());
                } else if (data.isError == true) {
                    var manageErrors = data.manageError;
                    RequestApp.displayBackErrors(manageErrors);
                    RequestApp.displayMessageWarning($('#error-message-project-code'));
                } else {
                    RequestApp.stepper('form-project-code', nextStep);
                }
            },
            error: function (data, status, message) {
                RequestApp.displayMessageWarning($('#error-message-project-code'));
            }
        });
    }

    return {
        initProjectCode: function (nextStepParam, previousStepParam) {
            nextStep     = nextStepParam;
            previousStep = previousStepParam;

            initProjectCode();
            validateForm();
            checkProjectCodeValidForm();

            RequestApp.managePreviousBtn('project-code-btnPrev', 'form-project-code', previousStep);
        },
    };

})(jQuery);







