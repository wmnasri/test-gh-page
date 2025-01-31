var numberDateSelected = 0;

var AgendaManager = (function() {

    var dataDates           = null;
    var maxDateSelected     = null;
    var selectedDates       = {};
    var selectedCustomDates = {};
    var firstDayDisplay     = null;
    var nextStep            = null;
    var previousStep        = null;

    function initAgenda()
    {
        var selectorTitleAgenda = document.getElementById('agenda-title');
        RequestApp.render(RequestApp.componentsList.SzTitle, selectorTitleAgenda, {className: 'text-uppercase sz-underline mb-3'}, 'DEMANDE DE RENDEZ-VOUS');

        disabledNextBtn();

        var selectorErrorMessage = document.getElementById('error-message-agenda');
        RequestApp.render(RequestApp.componentsList.SzAlert, selectorErrorMessage, {label: 'button', type: 'danger'}, '');
    }

    function disabledNextBtn()
    {
        var selectorNextOc = document.getElementById('agenda-btnNext');
        RequestApp.render(RequestApp.componentsList.SzButton, selectorNextOc, {isDisabled: true}, 'SUIVANT');
    }

    function enableNextBtn()
    {
        var selectorNextOc = document.getElementById('agenda-btnNext');
        RequestApp.render(RequestApp.componentsList.SzButton, selectorNextOc, {isDisabled: false}, 'SUIVANT');
    }

    function checkChangeCgu()
    {
        $('#agenda_cgu').change(function () {
            validateAgenda();
        });
    }

    function renderBlocDateSelected(date, label, idDate)
    {
        var html = '   <div class="date col-md-2 row ml-0">' +
            '            <div class="row col-md-11 col-sm-11 p-0">' +
            '                <span class="col-md-12">'+label+'</span>' +
            '                <span class="col-md-12">'+date+'</span>' +
            '            </div>' +
            '            <div class="col-md-1 col-sm-1 bloc-close">' +
            '                <a href="javascript:;" id="selected-'+idDate+'" data-id-date-selected="'+idDate+'">' +
            '                    <i class="mdi mdi-close"></i>' +
            '                </a>' +
            '            </div>' +
            '        </div>';

        $('#dates-selected').append(html);
    }

    function validateAgenda()
    {
        RequestApp.removeAllSpecificElementByClass('multi-error');
        $('#error-message-agenda').addClass('d-none');

        if (Object.entries(selectedDates).length > 0 && $('#agenda_cgu:checked').length > 0) {
            enableNextBtn();
        } else {
            disabledNextBtn();
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

    function construcAgenda()
    {
        var selectorAgenda = document.getElementById('agenda-bloc');

        var inputAgenda = {
            events: dataDates,
            defaultDate: firstDayDisplay,
            handleEventClick : function(e) {
                var idDate = e.event._def.extendedProps.customId;
                var customDate   = e.event._def.extendedProps.customDate;

                var date = new Date(customDate);
                var options = { weekday: 'short', month: 'short', day: 'numeric' };
                var formatDate = date.toLocaleDateString('fr-FR', options);

                $(e.el).attr('id', idDate);
                var selectorId = document.getElementById(idDate);

                if (numberDateSelected <= maxDateSelected && !selectorId.hasAttribute("selected")) {
                    numberDateSelected++;
                    selectedDates[idDate]       = true;
                    selectedCustomDates[idDate] =  {
                        'customDate' :customDate ,
                        'titleDate'  :e.event._def.title ,
                        'formatDate'  :formatDate ,
                    };

                    $(e.el).attr('selected', true);
                    $(e.el).attr('style', 'background-color:#D4D5DD;border-color:#ABAFBF');

                    renderBlocDateSelected(e.event._def.title, formatDate, idDate);
                    $('#selected-'+idDate).attr('onclick', 'javascript:deleteDateSelected(this);');
                } else if(numberDateSelected > 0 && selectorId.hasAttribute("selected")) {
                    AgendaManager.manageDeleteDateSelected(e.el, idDate);
                }

                validateAgenda();

                var selectedCustomDatesJson = JSON.stringify(selectedCustomDates);
                $('#agenda_datesSelected').val(selectedCustomDatesJson);
            },
            handleEventRender : function(e) {
                var idDate = e.event._def.extendedProps.customId;
                $(e.el).attr('id', idDate);

                if (selectedDates[idDate] == true) {
                    $(e.el).attr('selected', true);
                    $(e.el).attr('style', 'background-color:#D4D5DD;border-color:#ABAFBF');
                }

                if (screen.width < 769){  //TODO A SUPPRIMER QUAND LE COMPOSANT AGENDA SERA RESPONSIVE
                    manageDateMobile($(e.el));
                }
            },
            handleDayRender : function(e) {
            }
        };

        RequestApp.render(RequestApp.componentsList.SzCalendar, selectorAgenda, inputAgenda);

        if (screen.width < 769){ //TODO A SUPPRIMER QUAND LE COMPOSANT AGENDA SERA RESPONSIVE
            manageAllDateMobile();
        }
    }

    function displayErrors()
    {
        if (Object.entries(selectedDates).length == 0) {
            RequestApp.contructOneError(
                'bloc-errors-agenda',
                "error-message-agenda-no-dates",
                'Il est nécessaire de sélectionner au moins une date possible'
            );
        }

        if ($('#agenda_cgu:checked').length == 0) {
            RequestApp.contructOneError(
                'bloc-errors-agenda',
                "error-message-agenda-no-dates",
                'Les conditions générales d\'utilisation ne sont pas validées'
            );
        }
    }

    function checkValidSubmitAgenda()
    {
        $("#agenda-btnNext").click(function() {
            if (Object.entries(selectedDates).length > 0 && $('#agenda_cgu:checked').length > 0) {
                submitAgenda();
            } else {
                displayErrors();
            }
        });
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
            success: function (data) {
                if (data.isError == true && data.hasOwnProperty('idCurrentStep') == true) {
                    window.location.href = Routing.generate(RequestApp.getKeyHomePage());
                } else if (data.isError == true) {
                    RequestApp.removeAllSpecificElementByClass('multi-error');
                    RequestApp.construcMessageErrors('bloc-errors-agenda', data.messagesError);
                } else {
                    RequestApp.stepper('agenda-form', nextStep);
                }
            },
            error: function (data, status, message) {
                RequestApp.displayMessageWarning($('#error-message-agenda'));
            }
        });
    }

    return {
        initAgenda: function(dataDatesParam, maxDateSelectedParam, firstDayDisplayParam, nextStepParam, previousStepParam) {
            maxDateSelected = maxDateSelectedParam - 1;
            dataDates       = JSON.parse(dataDatesParam.replace(/&quot;/g,'"'));
            firstDayDisplay = firstDayDisplayParam;
            nextStep        = nextStepParam;
            previousStep    = previousStepParam;

            initAgenda();
            construcAgenda();
            checkChangeCgu();
            checkValidSubmitAgenda();

            RequestApp.managePreviousBtn('agenda-previous-btn', 'agenda-form', previousStep);
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
    AgendaManager.manageDeleteDateSelected(element, idDate);
    AgendaManager.validateAgenda();
}