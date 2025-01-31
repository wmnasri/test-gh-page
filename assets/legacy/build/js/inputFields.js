
function resetInputText(id, placeholder) {
    var input = $('#' + id);
    input.val("");
    input.removeClass("error");
    input.focusout(function() {
        if (input.val() == "") {
            input.val(placeholder);
        }
    });
}

function validField(id, errorValue) {
    var input = $('#' + id);
    if (input.val() == null || input.val() == "" || input.val() == errorValue) {
        input.val(errorValue);
        input.addClass("error");
        return false;
    }
    return true;
}

/* Gestion du preloader boutton OK - Mantis 8814 */

var cSpeed = 9;
var cWidth = 24;
var cHeight = 24;
var cTotalFrames = 12;
var cFrameWidth = 24;
var cImageSrc = '/assets/legacy/build/img/chargement_sprites.png';

var cImageTimeout = false;
var cIndex = 0;
var cXpos = 0;
var cPreloaderTimeout = false;
var SECONDS_BETWEEN_FRAMES = 0;

function startAnimation(elementId) {

    document.getElementById(elementId).style.backgroundImage = 'url(' + cImageSrc + ')';
    document.getElementById(elementId).style.width = cWidth + 'px';
    document.getElementById(elementId).style.height = cHeight + 'px';

    //FPS = Math.round(100/(maxSpeed+2-speed));
    FPS = Math.round(100 / cSpeed);
    SECONDS_BETWEEN_FRAMES = 1 / FPS;

    cPreloaderTimeout = setTimeout('continueAnimation("'+elementId+'")', SECONDS_BETWEEN_FRAMES / 1000);

}

function continueAnimation(elementId) {

    cXpos += cFrameWidth;
    //increase the index so we know which frame of our animation we are currently on
    cIndex += 1;

    //if our cIndex is higher than our total number of frames, we're at the end and should restart
    if (cIndex >= cTotalFrames) {
        cXpos = 0;
        cIndex = 0;
    }

    if (document.getElementById(elementId))
        document.getElementById(elementId).style.backgroundPosition = (-cXpos) + 'px 0';

    cPreloaderTimeout = setTimeout('continueAnimation("'+elementId+'")', SECONDS_BETWEEN_FRAMES * 1000);
}

function stopAnimation() {//stops animation
    clearTimeout(cPreloaderTimeout);
    cPreloaderTimeout = false;
}

function imageLoader(s, fun)//Pre-loads the sprites image
{
    clearTimeout(cImageTimeout);
    cImageTimeout = 0;
    genImage = new Image();
    genImage.onload = function() {
        cImageTimeout = setTimeout(fun, 0);
    };
    //genImage.onerror = console.log('Could not load the loading image');
    genImage.src = s;
}

$(document).ready(function() {

    $(".waterPageChangeForm, .waterSelectTownForm, .postalWaterTown, .postalCodeForm").submit(function() {
        // affichage de l'image
        $('#loaderImage').css("display", "inline-block");
        $('#loaderImageTarget').css("display", "none");
    });
});


