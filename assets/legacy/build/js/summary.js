var SummaryManager = (function($) {

    var nextStep     = null;
    var previousStep = null;

    function iniDisplayForm()
    {
        var selectorNextSummary  = document.getElementById('summary-btnNext');
        var selectorPrevSummary  = document.getElementById('summary-btnPrev');

        RequestApp.render(RequestApp.componentsList.SzButton, selectorNextSummary, {isDisabled: false}, 'ENVOYER MA DEMANDE');
    }

    function nextStepValidation()
    {
        $( "#summary-btnNext" ).click(function() {
            RequestApp.stepper('form-summary', nextStep);
        });
    }

    function loadSummary()
    {
        $.ajax({
            type: "POST",
            url: Routing.generate('request_path_summary'),
            data: { searchAdressSession: "address_session"},
            success: function (data) {
                if (data.isError == true && data.hasOwnProperty('idCurrentStep') == true) {
                    window.location.href = Routing.generate(RequestApp.getKeyHomePage());
                } else if (data.isError == false) {
                    $('#form-summary').html(data.html);
                    $('#form-summary').show();

                }
                $('html, body').animate({ scrollTop: 0 }, 'fast');
            },
            error: function (data, status, message) {

            }
        });
    }

    return {
        initSummary: function(nextStepParam, previousStepParam) {
            nextStep     = nextStepParam;
            previousStep = previousStepParam;

            iniDisplayForm();
            nextStepValidation();

            RequestApp.managePreviousBtn('summary-btnPrev', 'form-summary', previousStep);
        },
        loadSummary: loadSummary
    }
})(jQuery);