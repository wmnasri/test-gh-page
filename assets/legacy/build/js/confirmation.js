var ConfirmationManager = (function($) {

    function loadConfirmation()
    {
        $.ajax({
            type: "POST",
            url: Routing.generate('request_path_confirmation'),
            success: function (data) {
                if (data.isError == true && data.hasOwnProperty('idCurrentStep') == true) {
                    window.location.href = Routing.generate(RequestApp.getKeyHomePage());
                } else {
                    $('#form-confirmation').html(data.html);
                }
            },
            error: function (data, status, message) {
                RequestApp.displayMessageWarning($('#error-message-confirmation'));
            }
        });
    }

    return {
        loadConfirmation: loadConfirmation
    }
})(jQuery);