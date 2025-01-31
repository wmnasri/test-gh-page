var numberDateSelected = 0;

var MakingAppointments = (function() {

    var dataDates              = null;
    var maxDateSelected        = null;
    var selectedDates          = {};
    var selectedCustomDates    = {};
    var firstDayDisplay        = null;
    var nextStep               = null;
    var previousStep           = null;
    var isDisplayAgenda        = true;
    var btnConfirmAppointments = null;
    var currentIsSlotSelected  = null;
    var currentIsSlotElement   = null;
    var isEdit                 = null;

    var calendarViewDayGrid = "dayGrid";
    var calendarViewListWeek = "listWeek";
    var calendarViewDayGridWeek = "dayGridWeek";

    var displayModeEmailShow = 'display_email';
    var displayModeEmailHidden = 'hidden_email';
    var displayModeEmail = displayModeEmailShow;
    var isMailValid = false;

    var responsiveMiddleValue = 769;
    var toogleCguState        = false;
    var MAX_LOOP = 100;

    //loader lien service client
    $('.customer-service-link').click(function(e) {
        $('.customer-service-link').empty();
        $('.customer-service-link').html('<a class="customer-service-link text-center mt-2">'+
            '<div class="centered border btn-back">'+
            '<i class="icon-spinner spin"></i>'+
            '</div></a>');
    });


    function initAgenda()
    {
        var title = '';

        if (isEdit == 1) {
             title = 'modification de la demande de rendez-vous';
        } else {
             title = 'DEMANDE DE RENDEZ-VOUS';
        }

        var selectorTitleAgenda = document.getElementById('agenda-title');
        RequestApp.render(RequestApp.componentsList.SzTitle, selectorTitleAgenda, {className: 'text-uppercase sz-underline mb-3'}, title);

        disabledNextBtn();

        var selectorErrorMessage = document.getElementById('error-message-agenda');
        RequestApp.render(RequestApp.componentsList.SzAlert, selectorErrorMessage, {label: 'button', type: 'danger'}, '');
        $('#error-message-agenda').addClass('d-none');
    }

    function initInputEmail()
    {
        var displayEmail = $('.agenda-title-ma').attr('data-display-email');

        if(displayEmail ==  displayModeEmailHidden) {
            displayModeEmail = displayModeEmailHidden;
            return false;
        }

        var selector =  document.getElementById('email-ma');
        var props = {
            value: '',
            label: 'E-mail',
            name: 'maEmail',
            id: 'email_ma',
            placeholder: 'Saisir votre e-mail',
            required: true
        };
        props.onChange = function (e) {
            $('#agenda_ma_email').val(e.target.value);
            isMailValid = FormValidator.validateEmail(e.target.value);
            $('.error-label-email-ma').removeClass('d-none');
            if (isMailValid) {
                $('.error-label-email-ma').addClass('d-none');
            }
            props.value = e.target.value;
            RequestApp.render(RequestApp.componentsList.SzInput, selector, props);
            validateAgenda();
        };

        RequestApp.render(RequestApp.componentsList.SzInput, selector, props);
    }

    function initBtnPrev()
    {
        var selectorBtnPrev = document.getElementById('agenda-upd-btn-prev');
        RequestApp.render(RequestApp.componentsList.SzButton, selectorNextOc, {isDisabled: true}, '');
    }

    function disabledNextBtn()
    {
        var selectorNextOc = document.getElementById('agenda-btnConfirm');
        RequestApp.render(RequestApp.componentsList.SzButton, selectorNextOc, {isDisabled: true, type: 'submit'}, 'CONFIRMER LA DEMANDE');
    }

    function enableNextBtn()
    {
        var selectorNextOc = document.getElementById('agenda-btnConfirm');
        RequestApp.render(RequestApp.componentsList.SzButton, selectorNextOc, {isDisabled: false, type: 'submit'}, 'CONFIRMER LA DEMANDE');
    }

    function checkChangeCgu()
    {
        $('#ma-agenda-cgu').change(function () {
            toogleCguState = !toogleCguState;
            validateAgenda();
            if (toogleCguState) {
                //checkmark
                $('.checkmark').addClass("sz-icon-line check-1 ma-check-1");
            } else {
                $('.checkmark').removeClass("sz-icon-line check-1 ma-check-1");
            }
        });
    }

    function renderBlocDateSelected(date, label, idDate)
    {
        var title = $('.fc-title').text();
        if (title == "PAS DE RENDEZ-VOUS DISPONIBLE") {
            return false;
        }
        var html = '   <div class="date col-md-3 row ml-0 ma-slot-block" >' +
            '            <div class="row col-md-11 col-sm-11 col-xs-11 p-0">' +
            '                <span class="col-md-12">'+label+'</span>' +
            '                <span class="col-md-12">'+date+'</span>' +
            '            </div>' +
            '            <div class="col-md-1 col-sm-1 col-xs-1 bloc-close ml-2">' +
            '                <a href="javascript:;" id="selected-'+idDate+'" data-id-date-selected="'+idDate+'">' +
            '                    <i class="mdi sz-icon-line close ma-close-slot-icon"></i>' +
            '                </a>' +
            '            </div>' +
            '        </div>';

        $('#dates-selected').append(html);
    }

    function validateAgenda()
    {
        recapctha = $('#ma-recaptcha').attr('data-ma-recaptcha');
        RequestApp.removeAllSpecificElementByClass('multi-error');
        $('#error-message-agenda').addClass('d-none');
        if (recapctha == 1) {
            if (displayModeEmail == displayModeEmailHidden) {
                if (Object.entries(selectedDates).length > 0 && $('#agenda_ma_agenda_cgu:checked').length > 0 && validCapctha == true) {
                    enableNextBtn();
                } else {
                    disabledNextBtn();
                }
            }
        } else {
            if (displayModeEmail == displayModeEmailHidden) {
                if (Object.entries(selectedDates).length > 0 && $('#agenda_ma_agenda_cgu:checked').length > 0) {
                    enableNextBtn();
                } else {
                    disabledNextBtn();
                }
            }
        }

        if (recapctha == 1) {
            if (displayModeEmail == displayModeEmailShow) {
                if (Object.entries(selectedDates).length > 0 &&
                    $('#agenda_ma_agenda_cgu:checked').length > 0 && isMailValid == true && validCapctha == true) {
                    enableNextBtn();
                } else {
                    disabledNextBtn();
                }
            }
        } else {
            if (displayModeEmail == displayModeEmailShow) {
                if (Object.entries(selectedDates).length > 0 &&
                    $('#agenda_ma_agenda_cgu:checked').length > 0 && isMailValid == true) {
                    enableNextBtn();
                } else {
                    disabledNextBtn();
                }
            }
        }

    }

    //TODO A SUPPRIMER QUAND LE COMPOSANT AGENDA SERA RESPONSIVE
    function manageAllDateMobile()
    {
        var paras         = document.getElementsByClassName('fc-day-grid-event');
        var numberElement = paras.length;

        for (var i = 0; i < numberElement; i++) {
            var idDate = paras[i].id;

            var elementDate = $('#'+idDate);

            manageDateMobile(elementDate);
        }
    }

    //TODO A SUPPRIMER QUAND LE COMPOSANT AGENDA SERA RESPONSIVE
    function manageDateMobile(elementDate)
    {
        elementDate.removeClass('p-3');
        elementDate.addClass('p-2');

        elementDate.removeClass('mx-3');
        elementDate.addClass('mx-1');

        var valueDate = elementDate.find('.fc-title').html();

        if (valueDate == 'Matin') {
            elementDate.find('.fc-title').html('AM');
        } else if (valueDate == 'Après midi') {
            elementDate.find('.fc-title').html('PM');
        }
    }

    function construcAgenda(sectorCode, idRap, idAt, interventionTypeCode, reference, idActeur, cdHex)
    {
        // gestion responsive de l'agenda
        var calendarValue = calendarViewDayGridWeek;
        if (screen.width < responsiveMiddleValue){
            calendarValue = calendarViewDayGrid;
        }

        var selectorAgenda = document.getElementById('agenda-bloc-ma');
        var inputAgenda = {
            events: dataDates,
            defaultDate: firstDayDisplay,
            calendarView: calendarValue,
            handleEventClick : function(e) {
                var title = e.event._def.title;

                if (title == "PAS DE RENDEZ-VOUS DISPONIBLE") {

                   return false;
                }

                if (title == "VOIR PLUS") {
                    addSlot(sectorCode, idRap, idAt, interventionTypeCode, reference, idActeur, cdHex);

                    return false;
                }
                var idDate = e.event._def.extendedProps.customId;
                var customDate   = e.event._def.extendedProps.customDate;
                var slotId = e.event._def.extendedProps.slotId;

                var date = new Date(customDate);
                var options = { weekday: 'short', month: 'short', day: 'numeric' };
                var formatDate = date.toLocaleDateString('fr-FR', options);

                $(e.el).attr('id', idDate);
                var selectorId = document.getElementById(idDate);
                if(currentIsSlotSelected != null && currentIsSlotSelected !=  idDate ) {

                    MakingAppointments.manageDeleteDateSelected(currentIsSlotElement, currentIsSlotSelected);
                }
                if (numberDateSelected <= maxDateSelected && !selectorId.hasAttribute("selected")) {
                    numberDateSelected++;
                    selectedDates[idDate]       = true;
                    selectedCustomDates[idDate] =  {
                        'customDate' :customDate ,
                        'titleDate'  :e.event._def.title ,
                        'formatDate'  :formatDate,
                        'slotId'  : slotId,
                        'title'  : title,
                    };

                    $(e.el).attr('selected', true);
                    $(e.el).attr('style', 'background-color:#D4D5DD;border-color:#ABAFBF');
                    currentIsSlotElement = e.el;
                    currentIsSlotSelected = idDate;

                    renderBlocDateSelected(e.event._def.title, formatDate, idDate);
                    $('#selected-'+idDate).attr('onclick', 'javascript:deleteDateSelected(this);');
                } else if(numberDateSelected > 0 && selectorId.hasAttribute("selected")) {
                    MakingAppointments.manageDeleteDateSelected(e.el, idDate);
                }

                validateAgenda();

                var selectedCustomDatesJson = JSON.stringify(selectedCustomDates);
                $('#agenda_ma_datesSelected').val(selectedCustomDatesJson);
            },
            handleEventRender : function(e) {
                var idDate = e.event._def.extendedProps.customId;
                $(e.el).attr('id', idDate);

                if (selectedDates[idDate] == true) {
                    $(e.el).attr('selected', true);
                    $(e.el).attr('style', 'background-color:#D4D5DD;border-color:#ABAFBF');
                }

                if (screen.width < responsiveMiddleValue){  //TODO A SUPPRIMER QUAND LE COMPOSANT AGENDA SERA RESPONSIVE
                    manageDateMobile($(e.el));
                }
            },
            handleDayRender : function(e) {
            }
        };

        RequestApp.render(RequestApp.componentsList.SzCalendar, selectorAgenda, inputAgenda);

        if (screen.width < responsiveMiddleValue){ //TODO A SUPPRIMER QUAND LE COMPOSANT AGENDA SERA RESPONSIVE
            manageAllDateMobile();
        }
    }

    function addSlot(sectorCode, idRap, idAt, interventionTypeCode, reference, idActeur, cdHex)
    {
        var $form = $("<form />");
        var datas = {
            'cdsector': sectorCode,
            'idrap': idRap,
            'idat': idAt,
            'typeint': interventionTypeCode,
            'reference': reference,
            'idacteur': idActeur,
            'cdhex': cdHex,
            'showNextSlot': true
        };
        var url = Routing.generate('request_path_making_oppointments_index', {});

        $form.attr("action", url);
        $form.attr("method", "POST");

        for (var data in datas)
            $form.append('<input type="hidden" name="'+data+'" value="'+datas[data]+'" />');

        $("body").append($form);
        $form.submit();
    }

    function displayErrors()
    {
        if (Object.entries(selectedDates).length == 0) {
            RequestApp.contructOneError(
                'bloc-errors-agenda',
                "error-message-agenda-no-dates",
                'Il est nécéssaire de selectionné au moins une date possible'
            );
        }

        if ($('#ma-agenda-cgu:checked').length == 0) {
            RequestApp.contructOneError(
                'bloc-errors-agenda',
                "error-message-agenda-no-dates",
                'Les conditions générales d\'utilisation ne sont pas validées'
            );
        }
    }

    /**
     * Submit agenda form by ajax if form is valid.
     */
    function checkValidSubmitAgenda()
    {
        $('#agenda-form').on('submit', function(e) {
            e.preventDefault();
            e.stopPropagation();

            if (!$('#agenda-btnConfirm > button').prop('disabled')) {
                if (Object.entries(selectedDates).length > 0 && $('#agenda_ma_agenda_cgu:checked').length > 0) {
                    submitAgenda();
                } else {
                    displayErrors();
                }
            }
        });
    }

    // disabled btn next and  prev if you are no appoitments
    function displayWorflowAppointmentEmpty() {
        var title = $('.fc-title').text();
        var html = constructHtmlEmptyAppointment();
        if (title == "PAS DE RENDEZ-VOUS DISPONIBLE") {
            $('.fc-prev-button').prop('disabled', true);
            $('.fc-next-button').prop('disabled', true);
            $('.fc-content').empty();
            $('.fc-content').html(html);
        }
    }

    function constructHtmlEmptyAppointment() {
        var html = "<div>PAS DE RENDEZ-VOUS DISPONIBLE.</div>";
            html += "<div>MERCI DE CONTACTER</div>";
            html += "<a href='/service-client'>LE SERVICE CLIENT</a>";

        return html;
    }

    function clearAllSlotAvailable() {
        $('.fc-day-grid-event').attr('style', 'background-color:white;border-color:#ABAFBF');
        $('.ma-slot-block').remove();
    }

    function submitAgenda()
    {
        $('#error-message-agenda').addClass('d-none');
        var agendaForm = $('#agenda-form');
        var url        = agendaForm.attr('action');
        var formData   = agendaForm.serialize();
        $.ajax({
            type: "POST",
            url: url,
            data: formData,
            beforeSend: function() {
                $('#agenda-btnConfirm').empty();
                $('#agenda-btnConfirm') .html('<button  class="font-family-bold text-primary text-uppercase position-relative overflow-hidden sz-btn border-0 py-3 btn btn-secondary"  disabled>'+
                    '<i class="icon-spinner spin"></i>'+
                    '</button>');

            },
            success: function (data) {
                if (data.isError == true) {
                    if (data.message == "technical_error") {
                         window.location.href = Routing.generate("request_path_redirection_error");
                    } else
                        {
                            RequestApp.displayMessageWarning($('#error-message-agenda'), data.messagesError);
                        }
                } else {
                    //confirmation page.
                    window.location.href = Routing.generate("request_path_confirm_making_appoiment", {
                                    'cdsector': data.cdsector,
                                    'idrap': data.idrap,
                                    'idat': data.idat,
                                    'typeint': data.typeint,
                                    'reference': data.reference,
                                    'idacteur': data.idacteur,
                                    'cdhex': data.cdhex,
                                    'idrdv': data.idrdv,
                                    'daterdv': data.daterdv,
                                    'heuredebut': data.heuredebutUrl,
                                    'heurefin': data.heurefinUrl,
                                    'oldrdv': data.oldrdv,
                    });
                }
            },
            error: function (data, status, message) {
                 RequestApp.displayMessageWarning($('#error-message-agenda'));
            }
        });
    }

    function loaderCustomerServiceLink() {
        $('.customer-service-link').click(function(e) {
            e.preventDefault();
            $('.customer-service-link').empty();
            $('.customer-service-link').html('<a class="customer-service-link text-center mt-2">'+
                '<div class="centered border btn-back">'+
                '<i class="icon-spinner spin"></i>'+
                '</div></a>');
        });
    }

    function goToBeginningOfSecondMonth(showNextSlot, lastSlot) {
        // Go to the beginning of the second month of the calendar
        $(document).ready(function() {
            if (showNextSlot === 'true') {
                // Handle days for mobile version.
                if (screen.width < responsiveMiddleValue) {
                    let slotFound = false;
                    let loop = 0;
                    do {
                        $('.fc-day-grid-event').each(function (i, e) {
                            let position = parseInt(e.id.slice(e.id.lastIndexOf('-') + 1));
                            if (position === lastSlot) {
                                slotFound = true;
                            }
                        });
                        $('.fc-next-button').click();
                        loop++;
                    } while (!slotFound && loop < MAX_LOOP);
                } else {
                    for (let x = 0; x < 4; x++) {
                        $('.fc-next-button').click();
                    }
                }
            }
        });
    }

    return {
        initAgenda: function(dataDatesParam,
                             maxDateSelectedParam,
                             firstDayDisplayParam,
                             nextStepParam,
                             previousStepParam,
                             isEditParam,
                             sectorCodeParam,
                             idRapParam,
                             idAtParam,
                             interventionTypeCodeParam,
                             referenceParam,
                             idActeurParam,
                             cdHexParam,
                             showNextSlotParam,
                             lastSlotParam
        ) {
            maxDateSelected = maxDateSelectedParam - 1;
            dataDates       = JSON.parse(dataDatesParam.replace(/&quot;/g,'"'));
            firstDayDisplay = firstDayDisplayParam;
            nextStep        = nextStepParam;
            previousStep    = previousStepParam;
            isEdit          = isEditParam;
            initAgenda();
            construcAgenda(sectorCodeParam, idRapParam, idAtParam, interventionTypeCodeParam, referenceParam, idActeurParam, cdHexParam);
            initInputEmail();
            checkChangeCgu();
            checkValidSubmitAgenda();
            RequestApp.managePreviousBtn('agenda-previous-btn', 'agenda-form', previousStep);
            displayWorflowAppointmentEmpty();
            loaderCustomerServiceLink();
            goToBeginningOfSecondMonth(showNextSlotParam, lastSlotParam);
        },
        manageDeleteDateSelected: function (element, idDate) {
            numberDateSelected--;
            delete selectedDates[idDate];
            delete selectedCustomDates[idDate];

            var typeElement = $('#'+idDate);

            typeElement.attr('selected', false);
            typeElement.attr('style', 'background-color:white;border-color:#ABAFBF');
            $('#selected-'+idDate).parent().parent().remove();
        },
        validateAgenda: function () {
            validateAgenda();
        }

    };
})(jQuery);

function deleteDateSelected(element)
{
    var idDate = $(element).attr('data-id-date-selected');
    MakingAppointments.manageDeleteDateSelected(element, idDate);
    MakingAppointments.validateAgenda();
}
