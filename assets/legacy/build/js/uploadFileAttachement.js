var UploadFileAttachement = (function() {

    var enabledFileFormats     = null;
    var sizeMaxFile            = null;
    var numberFiles            = null;
    var keyLocation            = null;
    var sizeMaxAllFiles        = null;
    var currentSizeMaxAllFiles = {};
    var errorsGlobalByIdFile   = {};
    var nextStep               = null;
    var previousStep           = null;

    function initFields()
    {
        if (numberFiles == 0) {
            $('#'+keyLocation+'-or-btnNext button').attr("disabled", false);
        }

        var selectorErrorMessage = document.getElementById(keyLocation + '-error-message-upload-file');
        RequestApp.render(RequestApp.componentsList.SzAlert, selectorErrorMessage, {label: 'button', type: 'danger'}, '');
    }

    function getRemainingSizeFile()
    {
        var sumSize                 = 0;
        var sizeMaxAllFilesByOctets = sizeMaxAllFiles * 1024 * 1024;

        for (var key in currentSizeMaxAllFiles) {
            sumSize += currentSizeMaxAllFiles[key];
        }

        var remaining = sizeMaxAllFilesByOctets - sumSize;

        return RequestApp.fileConvertSize(remaining);
    }

    function initBtnUpload(indiceFile)
    {
        var idSelector = keyLocation + '-btn-upload-'+indiceFile;
        var selectorBtnUpload = document.getElementById(idSelector);

        var inputBtn = {
            outline: true,
            onClick: function() {
                if ($('#'+idSelector).attr('data-attr-is-add-file') == 'false') {
                    $('#'+idSelector).attr('data-attr-is-add-file', 'true');
                    $('#upload_file_'+keyLocation+'-uploadFile-'+indiceFile).trigger('click');
                } else {
                    getTotalSizeUploadedFiles('upload_file_'+keyLocation+'-uploadFile-'+indiceFile, 0);

                    var getRemainingSizeFileMo = getRemainingSizeFile();
                    $('.label-size-max').html(sizeMaxAllFiles+' Mo maximum ('+getRemainingSizeFileMo+' restant)');

                    errorsGlobalByIdFile[keyLocation+'-bloc-files-line-'+indiceFile] = false;

                    var originalFile = $('#'+idSelector).attr('data-attr-name-file');

                    $('#'+idSelector).attr('data-attr-is-add-file', 'false');
                    var isRequired = $('#'+idSelector).attr('data-attr-is-required');
                    displayOriginalFileName(indiceFile, originalFile, isRequired);

                    if (isErrorRequiredAllFile(numberFiles) == true) {
                        $('#'+keyLocation+'-or-btnNext button').attr("disabled", true);
                    }

                    if (checkIsGlobalErrorExist() == false) {
                        $('#'+keyLocation+'-error-message-upload-file').hide();
                    }
                }
            }
        };

        RequestApp.render(RequestApp.componentsList.SzButton, selectorBtnUpload, inputBtn, 'JOINDRE');

        var fileInput = document.getElementById('upload_file_'+keyLocation+'-uploadFile-'+indiceFile);

        if (fileInput) {
            fileInput.addEventListener('change', function(event) {
                RequestApp.removeAllSpecificElementByIdAndClass(keyLocation+'-bloc-files-line-'+indiceFile, 'error-specific');
                $('#'+keyLocation+'-error-message-upload-file').addClass('d-none');

               var idValid = RequestApp.filevalidation(
                    keyLocation+'-bloc-files-line-'+indiceFile,
                    'upload_file_'+keyLocation+'-uploadFile-'+indiceFile,
                    $('#'+keyLocation+'-error-message-upload-file'),
                    enabledFileFormats,
                    sizeMaxFile,
                    keyLocation
                );

               var selectorFi = document.getElementById('upload_file_'+keyLocation+'-uploadFile-'+indiceFile);

               var isTotalSizeUploadedFiles = getTotalSizeUploadedFiles('upload_file_'+keyLocation+'-uploadFile-'+indiceFile, selectorFi.files[0].size);

               if (isTotalSizeUploadedFiles == false && selectorFi.files.length > 0 && keyLocation == PLACE_MULTI_ATTACHMENT) {
                   getTotalSizeUploadedFiles('upload_file_'+keyLocation+'-uploadFile-'+indiceFile, 0);
                   var messageError = 'La taille de la pièce jointe dépasse la limite maximale';
                   RequestApp.displayMessageWarning($('#'+keyLocation+'-error-message-upload-file'), messageError);
                   errorsGlobalByIdFile[keyLocation+'-bloc-files-line-'+indiceFile] = true;
               }

               if (idValid == true) {
                   var idLine  = $('#'+keyLocation+'-bloc-files-line-'+indiceFile);
                   displayDataFile(event, indiceFile);
                   RequestApp.removeClassTextColor(idLine);

                    errorsGlobalByIdFile[keyLocation+'-bloc-files-line-'+indiceFile] = false;

                   if (isErrorRequiredAllFile(numberFiles) == false && checkIsGlobalErrorExist() == false) {
                       $('#'+keyLocation+'-or-btnNext button').removeAttr('disabled');
                   }

                   var getRemainingSizeFileMo = getRemainingSizeFile();

                   $('.label-size-max').html(sizeMaxAllFiles+' Mo maximum ('+getRemainingSizeFileMo+' restant)');

               } else {
                    errorsGlobalByIdFile[keyLocation+'-bloc-files-line-'+indiceFile] = true;

                   if (isErrorRequiredAllFile(numberFiles) == true && checkIsGlobalErrorExist() == true) {
                       $('#'+keyLocation+'-or-btnNext button').attr("disabled", true);
                   }

                   displayDataFile(event, indiceFile);
                   $('#'+keyLocation+'-bloc-files-line-'+indiceFile).find('.data-file').addClass("text-color-red-02");
                   $('#'+keyLocation+'-bloc-files-line-'+indiceFile).find('.data-file').find('.title').addClass("text-color-red-02");
               }
            });
        }
    }

    function checkIsGlobalErrorExist()
    {
        for (var key in errorsGlobalByIdFile) {

            if (errorsGlobalByIdFile[key] == true) {
                return true;
            }
        }

        return false;
    }

    function getTotalSizeUploadedFiles(idInputFile, currentSizeFile)
    {
        var currentSize             = 0;
        var sizeMaxAllFilesByOctets = sizeMaxAllFiles * 1024 * 1024;

        currentSizeMaxAllFiles[idInputFile] = currentSizeFile;

        for (var key in currentSizeMaxAllFiles) {
            currentSize += currentSizeMaxAllFiles[key];

            if (currentSize > sizeMaxAllFilesByOctets) {
                return false;
            }
        }

        return true;
    }

    function displayOriginalFileName(indiceFile, originalFileName, isRequired)
    {
        RequestApp.removeAllSpecificElementByIdAndClass(keyLocation+'-bloc-files-line-'+indiceFile, 'error-specific');

        document.getElementById("upload_file_"+keyLocation+"-uploadFile-"+indiceFile).value = "";

        $('#'+keyLocation+'-btn-upload-'+indiceFile).find('button').html('JOINDRE');

        var classIsRequired = '';

        if (isRequired == "true") {
            classIsRequired = 'required-file';
        }

        var html = '<span class="title text-color-grey-05 '+classIsRequired+'">'+originalFileName+'</span>';

        var element = '#'+keyLocation+'-bloc-files-line-'+indiceFile;

        $(element).find('.picto-attachement').hide();
        $(element).find('.data-file').addClass('text-color-grey-05');

        $(element).find('.data-file').html(html);
    }

    function displayDataFile(event, indiceFile, isError)
    {
        var input = event.target;
        var sizeConvert = RequestApp.fileConvertSize(input.files[0].size);

        $('#'+keyLocation+'-btn-upload-'+indiceFile).find('button').html('SUPPRIMER');

        var html =
            '<span class="col-md-12 title">'+input.files[0].name+'</span>'+
            '<span class="col-md-12 size"><strong>'+sizeConvert+'</strong></span>';

        var element = '#'+keyLocation+'-bloc-files-line-'+indiceFile;

        $(element).find('.picto-attachement').show();
        $(element).find('.data-file').removeClass('text-color-grey-05');

        $(element).find('.data-file').html(html);
    }

    function submitUploadFile()
    {
        var uploadFileForm = $('#'+keyLocation+'-upload_file_form');
        var url            = uploadFileForm.attr('action');
        var form           = document.getElementById(keyLocation+'-upload_file_form');
        var data           = new FormData(form);

        FormManager.initAutoSpinnerByBtn($('#'+keyLocation+'-or-btnNext button'));

        $.ajax({
            type: "POST",
            url: url,
            data: data,
            contentType:false,
            processData:false,
            cache:false,
            dataType:"json",
            success: function (data) {
                FormManager.stopAutoSpinnerByBtn($("#"+keyLocation+"-or-btnNext button"), 'SUIVANT');

                if (data.isError == true && data.hasOwnProperty('idCurrentStep') == true) {
                    window.location.href = Routing.generate(RequestApp.getKeyHomePage());
                } else if (data.isError == true) {
                    FormManager.stopAutoSpinnerByBtn($('#'+keyLocation+'-or-btnNext button'), 'SUIVANT');
                     if (typeof data.errorMessageGlobal !== 'undefined') {
                        RequestApp.displayMessageWarning($('#'+keyLocation+'-error-message-upload-file'));
                        displaySpecificErrors(data.manageError);
                    } else {
                        displaySpecificErrors(data.manageError);
                    }
                } else {
                    displayNextForm();
                }
            },
            error: function (data, status, message) {
                FormManager.stopAutoSpinnerByBtn($("#"+keyLocation+"-or-btnNext button"), 'SUIVANT');
                RequestApp.displayMessageWarning($('#'+keyLocation+'-error-message-upload-file'));
            }
        });
    }

    function displaySpecificErrors(manageErrors)
    {
        RequestApp.manageErrorFile(manageErrors, $('#'+keyLocation+'-error-message-upload-file'));
    }

    function isErrorRequiredAllFile(numberFiles)
    {
        for (var i = 0; i < numberFiles; i++) {
            var indice = i + 1;
            var idFile = 'upload_file_'+keyLocation+'-uploadFile-'+indice;

            var selectorIdFile = document.getElementById('upload_file_'+keyLocation+'-uploadFile-'+indice);

            if (selectorIdFile.hasAttribute('required') && $("#"+idFile).val() == "") {
                return true;
            }
        }

        return false;
    }

    function validateRequiredFile(numberFiles)
    {
        var isError = false;

        for (var i = 0; i < numberFiles; i++) {
            var indice = i + 1;
            var idFile = 'upload_file_'+keyLocation+'-uploadFile-'+indice;
            RequestApp.removeAllSpecificElementByIdAndClass(keyLocation+'-bloc-files-line-'+indice, 'error-specific');


            var selectorIdFile = document.getElementById('upload_file_'+keyLocation+'-uploadFile-'+indice);

            if (selectorIdFile.hasAttribute('required') && $("#"+idFile).val() == "") {
                var selectorLine = document.getElementById(idFile).parentElement.parentElement;

                RequestApp.diplaySpecificError(
                    selectorLine,
                    null,
                    'Fichier obligatoire'
                );

                isError = true;
            }
        }

        if (isError == true) {
            RequestApp.displayMessageWarning($('#'+keyLocation+'-error-message-upload-file'), '44 Erreur global. A changer !');
        }

        return isError;
    }

    function checkValidForm()
    {

        $( "#"+keyLocation+"-or-btnNext button" ).click(function() {
            FormManager.initAutoSpinnerByBtn($("#"+keyLocation+"-or-btnNext button"));

            if (numberFiles > 0 && validateRequiredFile(numberFiles) == false) {
                submitUploadFile();
            } else {
                displayNextForm();
            }
        });
    }

    function displayNextForm()
    {
        FormManager.stopAutoSpinnerByBtn($("#"+keyLocation+"-or-btnNext button"), 'SUIVANT');
        RequestApp.stepper('bloc-attachements', nextStep);
    }

    return {
        initUploadFile: function(numberFilesParam, enabledFileFormatsParam, sizeMaxFileParam, keyLocationParam, sizeMaxAllFilesParam, nextStepParam, previousStepParam) {
            enabledFileFormats = enabledFileFormatsParam;
            sizeMaxFile        = sizeMaxFileParam;
            numberFiles        = numberFilesParam;
            keyLocation        = keyLocationParam;
            sizeMaxAllFiles    = sizeMaxAllFilesParam;
            nextStep           = nextStepParam;
            previousStep       = previousStepParam;

            initFields();
            checkValidForm();

            RequestApp.managePreviousBtn('bloc-attachements-or-previous-btn', 'bloc-attachements', previousStep);


            for (var i = 0; i < numberFilesParam; i++) {
                initBtnUpload(i+1);
            }
        },
        getTotalSizeUploadedFiles: function (idInputFile, currentSizeFile) {
            return getTotalSizeUploadedFiles(idInputFile, currentSizeFile);
        },
        getSizeMaxAllFiles : function () {
            return sizeMaxAllFiles;
        },
        getKeyLocationRequestPath : function () {
            return PLACE_TYPE_OF_REQUEST;
        }

    };
})(jQuery);