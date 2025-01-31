var Attachement = (function($) {

    var keyLocation = null;

    function initFields ()
    {
        disabledNextBtn();
    }

    function disabledNextBtn()
    {
        var selectorNextOr = document.getElementById(keyLocation+'-or-btnNext');
        RequestApp.render(RequestApp.componentsList.SzButton, selectorNextOr, {isDisabled: true}, 'SUIVANT');
    }

    function enableNextBtn()
    {
        var selectorNextOr = document.getElementById(keyLocation+'-or-btnNext');
        RequestApp.render(RequestApp.componentsList.SzButton, selectorNextOr, {isDisabled: false}, 'SUIVANT');
    }

    function displayTitleLabel ()
    {
        var title = RequestApp.componentsList.SzTitle;
        var selectorTitleOpenConnection = document.getElementById('attachement-title');
        RequestApp.render(title, selectorTitleOpenConnection, {className: 'text-uppercase sz-underline mb-3'}, 'Documents à joindre');
    }

    function manageFilesDownload()
    {
        $('#'+keyLocation+'-or-btnNext button').attr("disabled", true);

        var data = {'motifSelected': this.value , 'keyLocation': keyLocation};

        $.ajax({
            type: "POST",
            url: Routing.generate('request_path_upload_file_attachement'),
            data: data,
            success: function (data) {
                if (data.isError == false) {
                    disabledNextBtn();

                    $('#upload-files-attachement').html(data.html);
                    $('#upload-files-attachement').show();
                }
            },
            error: function (data, status, message) {

            }
        });
    }

    return {
        initAttachement: function(keyLocationParam) {
            keyLocation = keyLocationParam;

            initFields();
            displayTitleLabel();

            RequestApp.managePreviousBtn('or-previous-btn', 'form-object-request', 'form-open-connection');
       },
        manageFilesDownload: function(keyLocationParam) {
            keyLocation = keyLocationParam;

            manageFilesDownload();
        }
    };
})(jQuery);