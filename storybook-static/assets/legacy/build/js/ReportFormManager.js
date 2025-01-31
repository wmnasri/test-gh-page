'use strict';

var ReportFormManager = (function() {
    var address, city, geolocate, accuracy, latitude, longitude;
    var date, time, dateTime;
    var photo, uploadInfo;
    var nature;
    var natures = [];

    function localize(event) {
        event.preventDefault();
        $('#report_geolocate').find("span").html("Recherche de votre position...");
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(setAddress, localizationError, {enableHighAccuracy: true});
        } else {
            //geolocate.firstElementChild.innerHTML = "Votre navigateur ne supporte pas la géolocalisation";
            $('#report_geolocate').find("span").html("Votre navigateur ne supporte pas la géolocalisation");
        }
    }

    function setAddress(coordinates) {
        updateLatLongFields(coordinates);
        jQuery.ajax({
            url: 'https://maps.googleapis.com/maps/api/geocode/json',
            data: {latlng: coordinates.coords.latitude + ',' + coordinates.coords.longitude},
            success: function (data) {
                if ('OK' === data.status) {
                    address.value = data.results[0].address_components[0].long_name + " " + data.results[0].address_components[1].long_name;
                    city.value = data.results[0].address_components[2].long_name.toUpperCase() + '(' + data.results[0].address_components[6].short_name + ')';
                    //geolocate.firstElementChild.innerHTML = "Géolocalisation effectuée";
                    $('#report_geolocate').find("span").html("Géolocalisation effectuée");
                } else {
                    localizationError();
                }
            },
            error: function () {
                localizationError();
            }
        });
    }

    function localizationError() {
        //geolocate.firstElementChild.innerHTML = "Erreur lors de la géolocalisation";
        $('#report_geolocate').find("span").html("Erreur lors de la géolocalisation");
    }

    function updateLatLongFields(coordinates) {
        latitude.value = coordinates.coords.latitude;
        longitude.value = coordinates.coords.longitude;
        accuracy.value = coordinates.coords.accuracy;
    }

    function setDateTime(event) {
        event.preventDefault();
        var currentDate = new Date();
        date.value = formatDateTime(currentDate.getDate()) + '/' + formatDateTime(currentDate.getMonth() + 1) + '/' + currentDate.getFullYear();
        time.value = formatDateTime(currentDate.getHours()) + ':' + formatDateTime(currentDate.getMinutes());
    }

    function formatDateTime(value) {
        return value < 10 ? '0' + value : value;
    }

    function checkFiles() {
        if (photo.files && photo.files[0]) {
            var fileNames = "";
            for(var i = 0; i < photo.files.length; ++i) {
                if (i != 0) {
                    fileNames += ', ';
                }
                if (photo.files[i].size > 3 * 1024 * 1024) {
                    fileNames = 'Erreur :' + photo.files[i].name + ' est trop volumineuse (> 3 MB)';
                    photo.value = '';
                    break;
                } else {
                    fileNames += photo.files[i].name;
                }
            }
            uploadInfo.innerHTML = fileNames;
        } else {
            uploadInfo.innerHTML = '';
        }
    }

    function getFileName(fullPath) {
        var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
        var filename = fullPath.substring(startIndex);
        if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
            filename = filename.substring(1);
        }
        return filename;
    }

    /**
     * Get the nature list from opt-groups, save them in a list
     * and delete the opt-groups (because of display issues).
     */
    function initNaturesList() {
        var optgroups = nature.getElementsByTagName('optgroup');
        var currentOption;

        for (var i = 0; i < optgroups.length; ++i) {
            while (optgroups[i].firstChild) {
                natures[optgroups[i].label] = natures[optgroups[i].label] || [];
                currentOption = optgroups[i].children[0];
                natures[optgroups[i].label][currentOption.value] = currentOption.text;
                nature.appendChild(currentOption);
            }
        }

        while (optgroups.length > 0) {
            optgroups[0].remove();
        }
    }

    /**
     * Update the nature list on category selection, and enable the select box.
     *
     * @param event On change category event
     * @param category Already selected category (if form is already filled)
     */
    function updateNature(event, category) {
        nature.removeAttribute('disabled');

        while (nature.options.length > 0) {
            nature.options[0].remove();
        }

        option = document.createElement('option');
        option.value = '';
        option.text = 'Veuillez sélectionner';
        option.disabled = true;
        if (category === undefined) {
            option.selected = true;
        }
        nature.appendChild(option);

        category = category || event.target;

        var option;
        natures[category.value].forEach(function(element, index) {
            option = document.createElement('option');
            option.value = index;
            option.text = element;
            nature.appendChild(option);
        });
    }

    return {
        initGeolocation: function(addressField, cityField, geolocateButton, accuracyField, latitudeField, longitudeField) {
            address = addressField;
            city = cityField;
            geolocate = geolocateButton;
            accuracy = accuracyField;
            latitude = latitudeField;
            longitude = longitudeField;

            geolocate.addEventListener('click', localize);
        },
        initDateTime: function(dateField, timeField, dateTimeButton) {
            date = dateField;
            time = timeField;
            dateTime = dateTimeButton;

            dateTime.addEventListener('click', setDateTime);
        },
        initPhoto: function(photoField, uploadInfoField) {
            photo = photoField;
            uploadInfo = uploadInfoField;
            photoField.addEventListener('change', checkFiles);
        },
        initNatureAutoLoad: function(categoryFields, natureField) {
            var i;
            nature = natureField;

            initNaturesList();

            if (categoryFields.length > 0) {
                nature.disabled = 'disabled';
                for (i = 0; i < categoryFields.length; ++i) {
                    categoryFields[i].addEventListener('change', updateNature);
                    if (categoryFields[i].checked) {
                        updateNature(null, categoryFields[i]);
                    }
                }
            }
        }
    };
})(jQuery);
