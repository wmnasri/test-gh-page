var MakingAppointementUpdateManager = (function($) {

    var emailMode = $('#popin-cancel').attr('data-email-mode');

    function modifyApptmt()
    {
        $('#modifyAppt').click(function(event) {
            event.preventDefault();
            $('.div-update-appointment').remove();
            $('.js-btn-update-rdv').html(
                '<div class="customer-service-link text-primary border text-left d-flex align-items-center p-0 mr-2 pl-3 justify-content-center loader-btn-update-rdv js-btn-update-rdv">'+
                    '<i class="icon-spinner spin"></i>'+
                '</div>');
           var url =  $(this).attr("data-url-update");
           window.location.href = url;
        });
    }

    function cancelApptmt()
    {
        $('#cancelAppt').click(function(event) {
            event.preventDefault();
            $('#popin-cancel').removeClass("d-none").attr('aria-hidden', 'false');
        });
    }

    function goToindexUpdateAppointment() {
        $('#agenda-previous-btn').click(function(event) {
            event.preventDefault();
            $('#agenda-previous-btn').empty();
            $('#agenda-previous-btn').html('<i class="icon-spinner spin"></i>');
            var url =  $(".js-link-referer").attr("data-url-referer");
            window.location.href = url;
        });
    }

    function cancelApptmtYes()
    {
        cancelYesIsDisabled(true);
        $('#cancel-yes').click(function(event) {
            var emailValue = $('#email_ma').val();
            validateEmailCancelProcess(emailValue);
            displayLoading('cancel-yes');
            event.preventDefault();
            var url =  $(this).attr("data-url-update-cancel");
            var email = $('#email-ma').attr('data-email-ma');
            window.location.href = url + "&emailma=" + email;
        });
    }

    function displayLoading(id) {
        var loadDiv = $('#'+id).parent().next();
        $('#'+id).parent().remove();
        loadDiv.html(
                '<div class="customer-service-link text-primary border text-left d-flex align-items-center p-0 mr-2 pl-3 justify-content-center loader-btn-update-rdv js-btn-update-rdv">'+
                '<i class="icon-spinner spin"></i>'+
                '</div>');
    }

    function cancelYesIsDisabled(state) {
        var emailMode = $('#popin-cancel').attr('data-email-mode');
        if (emailMode == "hidden_email") {
            $('#cancel-yes').prop("disabled",  false);
            return false;
        }
        if (state == true) {
            $('#cancel-yes').addClass('rp-not-allowed');
            $('#cancel-yes').prop( "disabled",  true );
        }  else {
            $('#cancel-yes').removeClass('rp-not-allowed');
            $('#cancel-yes').prop("disabled",  false);
        }
    }

    function validateEmailCancelProcess(value) {
        var mailValid = FormValidator.validateEmail(value);
        if (mailValid == true) {
            $('.error-label-email-ma').addClass('d-none');
            cancelYesIsDisabled(false);
        }  else {
            $('.error-label-email-ma').removeClass('d-none');
            cancelYesIsDisabled(true);
        }
    }

    function initInputEmail() {
        var selector =  document.getElementById('email-ma');

        var props = {
            value: '',
            label: 'E-mail',
            name: 'maEmail',
            id: 'email_ma',
            type: 'email',
            placeholder: 'Saisir votre e-mail',
            required: true
        };

        props.onChange = function (e) {
            props.value = e.target.value;
            validateEmailCancelProcess(e.target.value);
            $('#email-ma').attr('data-email-ma',e.target.value);
            RequestApp.render(RequestApp.componentsList.SzInput, selector, props);
        };

        RequestApp.render(RequestApp.componentsList.SzInput, selector, props);
    }

    return {
        initMakingAppointementUpdate: function () {
            var emailMode = $('#popin-cancel').attr('data-email-mode');
            modifyApptmt();
            cancelApptmt();
            cancelApptmtYes();
            goToindexUpdateAppointment();
            if (emailMode == "display_email") {
                initInputEmail();
            }
            $("#popin-cancel").appendTo("#mainWrapper");
        },
    };

})(jQuery);