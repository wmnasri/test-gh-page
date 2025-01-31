/*
 * Show the pointer at the right position for the two water softness/hardness and water minerals rulers. 
 * This component is not generic and heavily uses information about the images used for the rulers
 */
(function ($) {

    $.waterSoftnessRulerCursor = function (el, options) {
        // To avoid scope issues, use 'base' instead of 'this'
        // to reference this class from internal events and functions.
        var base = this;

        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;

        // Add a reverse reference to the DOM object
        base.$el.data("waterSoftnessRulerCursor", base);

        base.init = function () {
            base.positionRulerCursor(options);
        };

        base.positionRulerCursor = function (options) {

            var value = options.value;
            var showValue = options.showValue;
            var ruler = base.$el;
            var pointerSize = 48;
            var startOffset = 0;
            var endOffset = ruler.width();
            var valueRange = 60;
            var rulerPosition = 0;


            // Redimension de la div WSR en fonction du bloc parent
            var pWidth = 0;
            if (ruler.hasClass('waterSoftnessRuler')) {
                pWidth = ruler.parent().parent().parent().width();
            }
            else if (ruler.hasClass('waterMineralRuler')) {
                pWidth = ruler.parent().parent().parent().width();
                pWidth = pWidth + 15;
            }
            if ((pWidth - 60) < 429) {
                ruler.css('width', (pWidth - 60) + 'px');
            }
            else {
                ruler.css('width', '429px');
            }
            ruler.children('img').css('width', '100%');
            endOffset = ruler.width();

            if (ruler.hasClass('waterSoftnessRuler')) {
                //console.log('waterSoftnessRuler');
                startOffset = 20;
                //endOffset = 415;
                valueRange = 60;
                //log
                rulerPosition = (endOffset - startOffset ) * Math.log(1 + (Math.E - 1) * (value / valueRange));

            } else if (ruler.hasClass('waterMineralRuler')) {
                valueRange = 1000;

                if (value < 200) {
                    value = 100;
                } else if (value < 300) {
                    value = 250;
                } else if (value < 400) {
                    value = 350;
                } else if (value < 500) {
                    value = 450;
                } else if (value < 600) {
                    value = 550;
                } else {
                    value = 900;
                }
                value = Math.ceil(value);
                //linear
                rulerPosition = Math.ceil(((endOffset - startOffset) / valueRange) * value) - pointerSize / 2;

            }

            var pointerText = showValue ? ('' + value).replace(".", ",") : '';
            var pointer = $(document.createElement('div'));
            pointer.addClass('level-cursor');
            pointer.append(document.createTextNode(pointerText));
            pointer.css('left', rulerPosition + 'px');
            ruler.append(pointer);
        };

        // Run initializer
        base.init();
    };

    $.waterSoftnessRulerCursor.defaultOptions = {
        'showValue': true
    };

    $.fn.waterSoftnessRulerCursor = function (options) {
        return this.each(function () {
            (new $.waterSoftnessRulerCursor(this, options));
        });
    };


})(jQuery);
