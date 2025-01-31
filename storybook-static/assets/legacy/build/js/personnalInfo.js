function callFormSubmit(blocForm, form, url)
{
    $.ajax({
        type: "POST",
        url: url,
        data: form,
        success: function (data) {
            var str = "#"+blocForm;
            var blocFormObject = $(str);

            blocFormObject.html(data.html);
            if (data.isFormValid == false) {
                $("#editable-"+blocForm).hide();
                $("#edit-"+blocForm).show();
            } else {
                blocFormObject.find(".success-message").show();
                blocFormObject.find(".success-message .alert-message").html(data.message);
            }

            restartFormValidation(blocForm);
        },
        error: function (data, status, message) {
            var responseText = data.responseText;

            var mySubString = responseText.substring(
                responseText.indexOf("{") + 1,
                responseText.indexOf(",\"html")
            );

            var jsonData = "{"+mySubString+"}";

            var objectData =  jQuery.parseJSON(jsonData);

            var str = "#"+blocForm;
            var blocFormObject = $(str);
            
            var messageError = objectData.defaultMessageError;

            blocFormObject.find(".success-message").hide();
            blocFormObject.find(".warning-message").hide();
            
            if (objectData.isAmbitionClientKo != 'undefined' && objectData.isAmbitionClientKo == true) {
                blocFormObject.find(".success-message").show();
                blocFormObject.find(".success-message .alert-message").html(objectData.message);
            } else {
                blocFormObject.find(".error-message").show();
                blocFormObject.find(".error-message .alert-message").html(messageError);
            }

            blocFormObject.find(".btn-validate-form-histo").removeAttr('disabled');
            blocFormObject.find(".btn-validate-form-histo").removeClass('without-arrow');
            blocFormObject.find(".btn-validate-form-histo").html('Valider');

            restartFormValidation(blocForm);
        }
    });
}

$(document).on("click", ".btn-display-edit-form", function (event) {
    $(".success-message").hide();
    $(".error-message").hide();
});

function toggleBloc(edit) {
    if(edit==true){
        $("#editable-block-email").slideUp('500', function () {
            $("#editable-block-email").next().find("[data-mode='edit']").slideDown('500');
        });
    }else{
        $("#editable-block-email").next().find("[data-mode='edit']").slideUp('500', function () {
            $("#editable-block-email").slideDown('500');
        });
    }
}
