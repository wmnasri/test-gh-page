MB_ATTR =
    ' © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors &copy; suez environnement ' +
    new Date().getFullYear();
OSM_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

var layers = [];
var reload = false;
// Zoom on France
var map = L.map('map', {minZoom: 0, maxZoom: 19, _layersMaxZoom: 50, _layersMinZoom: 2}).setView([47.126751, 2.378482], 6);
L.tileLayer(OSM_URL, {attribution: MB_ATTR, id: 'examples.map-i875mjb7'}).addTo(map);
L.control.locate({
    keepCurrentZoomLevel: true,
    icon: 'fa fa-map-marker',
    showPopup: false,
    strings: {title: 'Me localiser'}
}).addTo(map);

var markerClusterGroup = new L.MarkerClusterGroup({
    iconCreateFunction: function (cluster) {
        return L.divIcon({html: cluster.getChildCount(), className: 'tsms-cluster', iconSize: L.point(40, 40)});
    }
});

$(function () {
    'use strict';

    toggleTowns(map);

    /** Contracts: en click  ajouter le contrats dans la session et mettre a jour tout points de menu selectionne **/
    $('.maps-contract-list').on('click', function () {
        let url;
        let $this = $(this);
        let operation = $this.prop('checked') ? 'add' : 'delete';
        url = Routing.generate('maps_update_contract_filter', {'contractId': $this.val(), operation: operation});

        $.ajax({
            type: 'GET',
            url: url,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (data) {},
            complete: function (data) {
                $('.map-legend-menu input:checked').each(function () {
                    var $this = $(this);
                    markerClusterGroup.clearLayers();
                    reload = true;
                    createLayerGroupFromUrl(
                        $this.attr('data-url'),
                        $this.attr('icon'),
                        $this.attr('name'),
                        $this.attr('marker-type'));

                });
            }
        });
    });

    $('.map-legend-menu input:checked').each(function () {
        var $this = $(this);
        var legendSection = $this.parent().parent('.map-legend-section');
        legendSection.show();
        legendSection.parent('.map-legend-category').children('a').children('i').addClass('fa-chevron-down');
        createLayerGroupFromUrl(
            $this.attr('data-url'),
            $this.attr('icon'),
            $this.attr('name'),
            $this.attr('marker-type'));
    });

    $('.map-legend-menu input:checkbox').on('click', function () {
        var $this = $(this);
        if ($this.prop('checked')) {
            createLayerGroupFromUrl(
                $this.attr('data-url'),
                $this.attr('icon'),
                $this.attr('name'),
                $this.attr('marker-type'));
        } else {
            markerClusterGroup.removeLayer(layers[$this.attr('name')]);
        }
    });

    $('.toggle-legend').on('click', function (event) {
        event.preventDefault();
        toggleLegend();
    });

    $('.map-legend-category a.map-legend-section-title').on('click', function (event) {
        var $this = $(this);
        event.preventDefault();

        $this.parent('.map-legend-category').children('.map-legend-section').slideToggle();
        $this.children('i').toggleClass('fa-chevron-down');
    });

    jQuery('#Slider1').slider({
        from: -28,
        to: +28,
        step: 1,
        dimension: '',
        scale: get_date_scale(),
        limits: false,
        skin: 'round_plastic',
        calculate: function (value) {
            if (value !== 28 && value !== -28) {
                var laDate = getDateFromSliderValue(value);
                var leMois = '';
                if ((laDate.getMonth() + 1).toString().length === 1) {
                    leMois = '0' + (laDate.getMonth() + 1).toString();
                } else {
                    leMois = (laDate.getMonth() + 1);
                }

                return laDate.getDate() + '/' + leMois + '/' + laDate.getFullYear();
            } else {
                if (value > 0) {
                    return '+30j';
                } else {
                    return '-30j';
                }
            }
        },
        callback: function (value) {
            var dateFilter = [];
            var values = value.split(';');
            if (values[0] !== '-28') {
                var minDate = getDateFromSliderValue(values[0]);
                dateFilter['dateFilter[minDate]'] =
                    minDate.getFullYear() + '-' +
                    (minDate.getMonth() + 1) + '-' +
                    minDate.getDate();
            }

            if (values[1] !== '28') {
                var maxDate = getDateFromSliderValue(values[1]);
                dateFilter['dateFilter[maxDate]'] =
                    maxDate.getFullYear() + '-' +
                    (maxDate.getMonth() + 1) + '-' +
                    maxDate.getDate();
            }
            $.ajax({
                type: 'GET',
                url: Routing.generate('maps_update_date_filter', dateFilter),
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                success: function (data) {},
                complete: function (data) {
                    $('.map-legend-menu input:checked').each(function () {
                        var $this = $(this);
                        markerClusterGroup.clearLayers();
                        reload = true;
                        createLayerGroupFromUrl(
                            $this.attr('data-url'),
                            $this.attr('icon'),
                            $this.attr('name'),
                            $this.attr('marker-type'));

                    });
                }
            });
        }
    });
});

/**
 * @param url
 *
 * @returns L.layerGroup
 */
function createLayerGroupFromUrl(url, iconSrc, index, markerType) {
    if (reload == false && layers[index]) {
        markerClusterGroup.addLayer(layers[index]);
        map.addLayer(markerClusterGroup);
    } else {
        $('.loader').show();
        var marker = null;
        var layerGroup = L.layerGroup();
        var popupAlign = 'center';
        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'json',
            context: this
        }).done(function (data) {
            $.each(data, function (index, element) {
                if (element.popupAlign) {
                    popupAlign = element.popupAlign;
                }
                if (element.icon) {
                    iconSrc = element.icon;
                }

                switch (markerType) {
                    case 'marker':
                        if (element.latitude && element.latitude != 0) {
                            marker = createMarker(
                                element.popupContent,
                                element.latitude,
                                element.longitude,
                                iconSrc,
                                popupAlign
                            );
                        }
                        break;
                    case 'layer':
                        marker = createLayerWms(element.url, element.options);
                        break;
                    default:
                        break;
                }
                layerGroup.addLayer(marker);

            });

            layers[index] = layerGroup;

            if (layers[index].getLayers().length > 0) {
                markerClusterGroup.addLayer(layers[index]);
                map.addLayer(markerClusterGroup);
            }
        }).always(function () {
            $('.loader').hide();
        });
    }
}

function createLayerWms(url, options) {
    return L.tileLayer.betterWms(url, options);
}
/**
 * @param content
 * @param lat
 * @param long
 * @param iconSrc
 * @param popupAlign
 *
 * @returns {*}
 */
function createMarker(content, lat, long, iconSrc, popupAlign) {
    popupAlign = typeof popupAlign !== 'undefined' ? popupAlign : 'center';

    var icon = new TsmsIcon({iconUrl: iconSrc, className: 'tsms-map-popup-bleu'});
    var color = icon.options.className;
    var marker = L.marker([lat, long], {icon: icon});

    switch (popupAlign) {
        case 'center':
            var popup = new TsmsPopup(content, color, marker);
            marker = marker.bindPopup(popup.popup);
            break;
        case 'left':
            marker.on('click', function () {
                customPopup(content);
            });
            break;
        default:
            break;
    }

    return marker;
}

function customPopup(content) {
    var mapInfoBox = $('#map-info-box');
    mapInfoBox.html(content);
    mapInfoBox.show();
    $('.btn-patrimony-info-close').click(function () {
        mapInfoBox.hide();
    });
}

/**
 * @returns {boolean}
 */
function toggleLegend() {
    var mapLegendContainer = $('.map-legend-container');
    var mapLegend = $('.map-legend');
    if (mapLegendContainer.css('width') === '240px' && mapLegend.is(':visible')) {
        mapLegendContainer.animate({'width': '0'}, 600);
        mapLegend.animate({'width': '0', 'opacity': '0'}, 600, function () {
            mapLegend.css('padding', '0');
        });
    } else {
        mapLegendContainer.animate({'width': '240px'}, 600);

        mapLegend.css('padding', '15px');
        mapLegend.animate({'width': '210px', 'opacity': '1'}, 600);
    }

    return false;
}

/**
 * @param map
 */
function toggleTowns(map) {
    var myLines = [];
    $.getJSON(Routing.generate('get_beaches_json', {})).done(function (data) {
        //Centrer la carte sur les markers
        var bounds = new L.LatLngBounds();
        for (var x in data) {
           marker = L.marker([data[x].latitude, data[x].longitude]);
           bounds.extend(marker.getLatLng());
        }
        
        var myStyle = {
            radius: 8,
            fillColor: '#528bde',
            color: '#528bde',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.1
        };

        map.fitBounds(bounds);
    });
}

var TsmsIcon = L.Icon.extend({options: {shadowUrl: '/assets/legacy/build/img/marker-shadow.png'}});

function TsmsPopup(content, color, marker) {
    this.popup = L.popup({
        closeButton: false,
        className: 'tsms-map-popup ' + color,
        minWidth: 300,
        markerSource: marker
    });
    this.popup.setContent(content);
}

function get_date_scale() {
    var laDate;
    var dateScale = [];
    var month = ['jan', 'fév', 'mar', 'avr', 'mai', 'juin', 'jui', 'aou', 'sep', 'oct', 'nov', 'dec'];

    dateScale.push('-30 j');

    /* Ajout des 3 semaines précédentes */
    for (var i = 3; i > 0; i--) {
        laDate = new Date();
        laDate.setDate(laDate.getDate() - 7 * i);
        dateScale.push(laDate.getDate() + ' ' + month[laDate.getMonth()]);
    }

    dateScale.push('Aujourd\'hui');

    /* Ajout des 3 semaines suivantes */
    for (i = 1; i <= 3; i++) {
        laDate = new Date();
        laDate.setDate(laDate.getDate() + 7 * i);
        dateScale.push(laDate.getDate() + ' ' + month[laDate.getMonth()]);
    }

    dateScale.push('+30 j');

    return dateScale;
}

function getDateFromSliderValue(value) {
    var laDate = new Date();
    laDate.setDate(laDate.getDate() + parseInt(value));

    return laDate;
}
