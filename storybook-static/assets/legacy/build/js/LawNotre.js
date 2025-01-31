var LawNotre = (function () {
  var KEY_MOVEIN = 'MOVEIN';
  var KEY_RECLAMATION = 'RECLAMATION';
  var KEY_MOVEOUT = 'MOVEOUT';
  var KEY_ESTIMATEWORK = 'ESTIMATEWORK';
  var KEY_EDMC = 'EDMC';
  var KEY_EDMC_DASHBOARD = 'EDMC_DASHBOARD';
  var KEY_CONTACT = 'CONTACT';

  var codeInseeSuez = null;
  var dataSearchTown = null;
  var idInputCap = null;
  var typePage = null;
  var typeForm = null;
  var ficheId = null;
  var ficheName = null;
  var btnSubmit = null;
  var mapIdUrlFromPageToRedirect = {
    CONTACT: 'lderiuc_service_client',
    MOVEIN: 'aelriuc_emmenagement1_validation',
    EDMC: 'lderiuc_water_index',
    EDMC_DASHBOARD: 'lderiuc_water_index',
    ESTIMATEWORK: 'lderiuc_practical_information'
  };

  function manageClosePopin() {
    $(window).on('click', function (event) {
      var blocPopin = $('#form-inclusion-address');

      if (
        blocPopin.has(event.target).length == 0 &&
        !blocPopin.is(event.target)
      ) {
        idInputCap.val('');
        if (btnSubmit !== null && btnSubmit !== '') {
          FormManager.stopAutoSpinnerByBtn(btnSubmit, 'continuer');
        }

        if ($('#dataTown').length > 0) {
          $('#dataTown').val('');
        }
      }
    });
  }

  function submitPopin() {
    $('#valid-address-cap').prop('onclick', 'return false;');
    $('#valid-address-cap').prop('hred', '#');

    var streetId = cap.address.propChoisie[0].streetId;
    var streetNumber = cap.address.propChoisie[0].streetNumber;

    if ($('#name-address').val() !== '') {
      $('#valid-address-cap')
        .prop('disabled', true)
        .addClass('isDisabled')
        .html('<i class="icon-spinner spin" style="font-size: inherit"></i>');

      $('#valid-address-cap').html(
        '<i class="icon-spinner spin" style="font-size: inherit"></i>'
      );

      getContractByAddress(streetId, streetNumber, codeInseeSuez);
    }
  }

  function getContractByAddress(streetId, streetNumber, codeInseeSuez) {
    var dataContractByAddress = {
      streetId: streetId,
      streetNumber: streetNumber,
      codeInseeSuez: codeInseeSuez,
      isDataDsp: false
    };

    if (typePage == KEY_EDMC || typePage == KEY_EDMC_DASHBOARD) {
      dataContractByAddress['isDataDsp'] = true;
    }

    if (typePage === KEY_CONTACT) {
      dataContractByAddress['typePage'] = KEY_CONTACT;
    }

    $.ajax({
      method: 'POST',
      url: getPath(Routing.generate('lderiuc_get_contract_by_address', {})),
      data: dataContractByAddress
    }).done(function (data) {
      $('.spinner-loi-notre').remove();

      if (data.isError == true && typePage == KEY_EDMC) {
        if (data.specificMessageError != null) {
          window.location = Routing.generate('lderiuc_water_index_empty');
        } else {
          window.location = Routing.generate('lderiuc_water_index_empty', {
            empty: 'error'
          });
        }
      } else if (data.isError == true) {
        $('.alert-message').html(data.messageError);

        $('#valid-address-cap').removeClass('isDisabled').html('Valider');
        $('#display-error-tech-popin').show();
        $('#display-error-tech').show();
      } else {
        var idBancos = data.idBancos;
        getDestinationUrl(dataSearchTown, idBancos);
      }
    });
  }

  function getDestinationUrl(dataSearchTown, idBancos) {
    var idUrlFromTypePage = mapIdUrlFromPageToRedirect[typePage];
    var streetName = '';
    var streetNumber = '';
    var streetId = '';

    var dataCAp = cap.address.propChoisie[0];

    if ('streetName' in dataCAp && dataCAp.streetName != '') {
      streetName = cap.address.propChoisie[0].streetName;
    }

    if ('streetNumber' in dataCAp && dataCAp.streetNumber != '') {
      streetNumber = cap.address.propChoisie[0].streetNumber;
    }

    if ('streetId' in dataCAp && dataCAp.streetId != '') {
      streetId = cap.address.propChoisie[0].streetId;
    }

    var dataDestinationUrl = {
      dataSearchTown: dataSearchTown,
      streetName: streetName,
      streetNumber: streetNumber,
      streetId: streetId,
      idBancos: idBancos,
      idUrlFromTypePage: idUrlFromTypePage,
      typePage: typePage,
      ficheId: ficheId,
      ficheName: ficheName
    };

    if (typePage == KEY_ESTIMATEWORK) {
      dataDestinationUrl['ficheId'] = ficheId;
      dataDestinationUrl['ficheName'] = ficheName;
    }

    $.ajax({
      method: 'POST',
      url: Routing.generate('lderiuc_get_destination_url_law_notre', {}),
      data: dataDestinationUrl
    }).done(function (data) {
      window.location = data['url'];
    });
  }

  function initCapAddress(codeInseeCap) {
    cap.address.propChoisie[0] = {
      buildingInfo_1: '',
      countryCode: 'FRA',
      inputOutput: '',
      languageCode: 'fr',
      step: 'SearchLocality'
    };

    cap.address.propChoisie[0]['localityId'] = codeInseeCap;
  }

  function checkTownIncluded(dataTown) {
    if (btnSubmit !== null) {
      FormManager.initAutoSpinnerByBtn(btnSubmit);
    }

    $.ajax({
      method: 'POST',
      url: getPath(Routing.generate('lderiuc_is_town_included', {})),
      data: dataTown
    }).done(function (data) {
      cleanPopin();

      if (data.isError == true && typePage == KEY_EDMC) {
        $('.spinner-loi-notre').remove();

        if (data.specificMessageError != null) {
          window.location = Routing.generate('lderiuc_water_index_empty');
        } else {
          window.location = Routing.generate('lderiuc_water_index_empty', {
            empty: 'error'
          });
        }
      } else if (data.isError == true) {
        $('.spinner-loi-notre').remove();
        $('#display-error-tech').show();

        if (data.specificMessageError != null) {
          $('#display-error-tech .alert-message').html(
            data.specificMessageError
          );
        }
      } else if (data.isTownIncluded == true) {
        $('.spinner-loi-notre').remove();
        getInseeCap(dataTown);
        manageClosePopin();
        $('#form-inclusion-address').modal('show');
      } else if (typeForm == 'GET') {
        getContractByAddress('', '', codeInseeSuez);
      } else if (data.isTownIncluded == false && typeForm == 'POST') {
        $('.spinner-loi-notre').remove();
        FormManager.stopAutoSpinnerByBtn(btnSubmit, 'continuer');
      }
    });
  }

  function cleanPopin() {
    $('#form-inclusion-address').find('#display-error-tech-popin').hide();
    $('#form-inclusion-address').find('#name-address').val('');
  }

  function getInseeCap(dataTown) {
    $.ajax({
      method: 'POST',
      url: getPath(Routing.generate('lderiuc_get_insee_capaddress', {})),
      data: dataTown
    }).done(function (data) {
      if ($('.spinner-loi-notre').length != 0) {
        $('.spinner-loi-notre').remove();
      }

      if (data.isError == true) {
        $('#display-error-tech-popin').show();
        $('#display-error-tech').show();
      } else {
        initCapAddress(data.codeInseeCap);
      }
    });
  }

  $('#adress-btn').on('click', function (e) {
    var adressPopup = $('.adress-popup');

    if (
      adressPopup.has(event.target).length == 0 &&
      !adressPopup.is(event.target)
    ) {
      var classBlocBanner = $('#adress-btn')
        .find('.icon-arrow-banner')
        .attr('class');

      if (classBlocBanner.indexOf('icon-to-top') != -1) {
        $('#adress-btn')
          .find('.icon-arrow-banner')
          .attr('class', 'icon icon-arrow-banner');
      } else {
        $('#adress-btn')
          .find('.icon-arrow-banner')
          .attr('class', 'icon icon-arrow-banner icon-to-top');
      }

      $('.adress-popup').toggle();
      loadCommune();
    }
  });

  function loadCommune() {
    $('#autoCompliteBloc').show();

    var options = {
      url: function (phrase) {
        return getPath('/search-towns-water-in-my-city/' + phrase);
      },
      getValue: 'text',
      list: {
        onClickEvent: function () {
          dataSearchTown = idInputCap.getSelectedItemData();
          codeInseeSuez = dataSearchTown.inseecode;

          if ($('#error-to-redirect').length == 1) {
            $('#error-to-redirect').hide();
          }

          $(idInputCap).after(
            '<i class="icon-spinner spinner-loi-notre spin"  style="font-size: inherit"></i>'
          );

          if (typePage == KEY_MOVEIN) {
            $('#dataTown').val(JSON.stringify(dataSearchTown));
            checkTownIncluded(dataSearchTown);
          } else if (typePage == KEY_RECLAMATION) {
            getInseeCap(dataSearchTown);
            $('#complaint_insee_suez').val(dataSearchTown.inseecode);
          } else if (typePage == KEY_MOVEOUT) {
            $('#dataTown').val(JSON.stringify(dataSearchTown));
            getInseeCap(dataSearchTown);
          } else {
            checkTownIncluded(dataSearchTown);
          }
        },
        maxNumberOfElements: 15
      },
      minLength: 0,
      minCharNumber: 3,
      adjustWidth: false,
      requestDelay: 400
    };
    idInputCap.easyAutocomplete(options);
  }

  return {
    init: function (idInputCapParam, typePageParam, typeFormParam) {
      idInputCap = idInputCapParam;
      typePage = typePageParam;
      typeForm = typeFormParam;

      loadCommune();
    },
    setBtnSubmit: function (btnSubmitParam) {
      btnSubmit = btnSubmitParam;
    },
    setDataFiche: function (ficheIdParam, ficheNameParam) {
      ficheId = ficheIdParam;
      ficheName = ficheNameParam;
    },
    submitPopin: function () {
      submitPopin();
    }
  };
})(jQuery);