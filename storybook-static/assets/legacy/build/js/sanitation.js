var SanitationManager = (function($) {
    var nextStep = null;

    function initSanitation()
    {
        var selectorTitleSanitation = document.getElementById("sanitation-title");
        var selectorType = document.getElementById("sanitation-type");

        var title = RequestApp.componentsList.SzTitle;
        RequestApp.render(title, selectorTitleSanitation, {className: "text-uppercase sz-underline mb-3"}, "ENQUÊTE DE CONFORMITÉ ASSAINISSEMENT");

        var inputType = {
            name: "sanitation_choice[choice_sanitation]",
            onChange: function(){
                submitSanitation();
            },
            className: "sanitation-button flex-column",
            value: "",
            choices: [
                {
                    label: "ASSAINISSEMENT COLLECTIF",
                    value: "ac"
                },
                {
                    label: "ASSAINISSEMENT NON COLLECTIF",
                    value: "anc"
                }
            ]
        };

        var component_alert = RequestApp.componentsList.SzAlert;
        var selectorErrorMessage = document.getElementById("error-message-sanitation");
        RequestApp.render(component_alert, selectorErrorMessage, {label: "button", type: "danger"}, "");

        /* Sale ! En attente d'une évolution du design system... */
        var choix = document.getElementsByName("sanitation_choice[choice_sanitation]");
        setTimeout(function(){
            choix[0].setAttribute("id", "sanitation_choice_choice_sanitation_0");
            choix[1].setAttribute("id", "sanitation_choice_choice_sanitation_1");
        }, 0);

        /* end sale ! */

        RequestApp.render(RequestApp.componentsList.SzChooseButton, selectorType, inputType);
    }

    function submitSanitation()
    {
        var sanitationForm = $("#sanitation_form");
        var formData       = sanitationForm.serialize();
        var url            = sanitationForm.attr("action");

        $.ajax({
            type: "POST",
            url: url,
            data: formData,
            success: function (data) {
                if (data.isError == true && data.hasOwnProperty('idCurrentStep') == true) {
                    window.location.href = Routing.generate(RequestApp.getKeyHomePage());
                } else if (data.isError == true && data.onlyGeneralError != "undefined") {
                    RequestApp.displayMessageWarning($("#error-message-sanitation"));
                } else if (data.isError == true) {
                    var messageKeyError = data.messageError;
                    var selector        = document.getElementById("sanitation-type");
                    RequestApp.diplaySpecificError(selector, null, messageKeyError);
                    RequestApp.displayMessageWarning($("#error-message-sanitation"));
                } else {
                    RequestApp.stepper("form-sanitation", nextStep);
                }
            },
            error: function (data, status, message) {
                RequestApp.displayMessageWarning($("#error-message-sanitation"));
            }
        });
    }

    return {
        initSanitation: function (nextStepParam) {
            nextStep = nextStepParam;

            initSanitation();
        },
    };

})(jQuery);







