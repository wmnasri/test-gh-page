'use strict';

var GeolocationManager = (function() {
    var $input, $error, $link;
    var address, city, zipCode;
    var currentType;

    function locateTown() {
        $input.val(city);
        $link.html('<i class="icon-success-circle success"></i>');
    }

    function locateZipCode() {
        $input.val(zipCode);
        $link.html('<i class="icon-success-circle success"></i>');
    }

    function localize(event, type) {
        event.preventDefault();
        currentType = type;
        $link.html('<i class="icon-spinner spin"></i>');
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(updateAddress, displayError, {enableHighAccuracy: true});
        } else {
            displayError("Votre navigateur ne supporte pas la géolocalisation");
        }
    }

    function displayError(error) {
        error = error || "Erreur lors de la géolocalisation";
        $link.html('<i class="icon-warning-triangle warning"></i>');
        $error.html(error);
    }

    function updateAddress(coordinates) {
        jQuery.ajax({
            url: 'https://maps.googleapis.com/maps/api/geocode/json',
            data: { latlng: coordinates.coords.latitude + ',' + coordinates.coords.longitude },
            success: function (data) {
                if ('OK' === data.status) {
                    address = data.results[0].address_components[0].long_name + " " + data.results[0].address_components[1].long_name;
                    city = data.results[0].address_components[2].long_name.toUpperCase();
                    zipCode = data.results[0].address_components[6].long_name;

                    getExpectedFunction(currentType)();
                } else {
                    displayError();
                }
            },
            error: function () {
                displayError();
            }
        });
    }

    function getExpectedFunction(type) {
        switch (type) {
            case 'town':
                return locateTown;
            case 'zip_code':
                return locateZipCode;
            default:
                throw "Unsupported geolocation type " + type;
        }
    }

    return {
        initGeolocation: function(type, $_input, $_link, $_error) {
            $input = $_input;
            $error = $_error;
            $link = $_link;

            $link.on('click', function(event) {
                localize(event, type);
            });
        }
    };
})(jQuery);
