var mapAlreadyShownOnce = false;

$(function () {
    var displayMapButton = $('.btn-display-map');
    var displayContentButton = $('.btn-display-content');
    var contentBlock = $('.content-container');
    var mapBlock = $('.map-container');

    displayMapButton.click(function () {
        mapBlock.show();
        contentBlock.hide();
        activateButton(displayMapButton, true);
        activateButton(displayContentButton, false);
        map.invalidateSize();
        if (!mapAlreadyShownOnce && undefined !== markerClusterGroup) {
            map.fitBounds(markerClusterGroup);
        }
        mapAlreadyShownOnce = true;
    });

    displayContentButton.click(function () {
        mapBlock.hide();
        contentBlock.show();
        activateButton(displayMapButton, false);
        activateButton(displayContentButton, true);
    });
});

function activateButton(buttonList, reverse) {
    buttonList.each(function () {
        var $this = $(this);
        var htmlClass = $this.parent('.small_version').length ? 'hidden' : 'active';
        if (reverse) {
            $this.addClass(htmlClass);
            $this.blur();
        } else {
            $this.removeClass(htmlClass);
        }
    });
}
