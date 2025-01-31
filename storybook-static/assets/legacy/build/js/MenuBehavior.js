'use strict';

var MenuBehavior = (function() {
    var $wrapper, $links, $container;

    function toggleMenu(e) {
        e.preventDefault();
        $wrapper.toggleClass("toggled-menu");
    }

    function openMenu() {
        $links.each(function() {
            var $subMenu = $(this).parent();
            if ($subMenu.find('.opened').length != 0) {
                $subMenu.addClass('opened');
            }
        });

        $container.perfectScrollbar('update');
    }

    function openSubMenu(e) {
        e.preventDefault();
        var $current = jQuery(e.target).parent();

        var $subMenu;
        $links.each(function() {
            $subMenu = $(this).parent();
            if (!$subMenu.is($current) && !$subMenu.has($current).length) {
                $subMenu.removeClass('opened');
            }
        });

        $current.toggleClass('opened');
        $container.perfectScrollbar('update');
    }
	
	/**
	 * @see http://stackoverflow.com/questions/24933430/img-src-svg-changing-the-fill-color
	 */
	function convertSVG($svgFiles) {
		$svgFiles.each(function() {
			var $img = jQuery(this);
			var imgID = $img.attr('id');
			var imgClass = $img.attr('class');
			var imgURL = $img.attr('src');

			jQuery.get(imgURL, function(data) {
				var $svg = jQuery(data).find('svg');

				if(typeof imgID !== 'undefined') {
					$svg = $svg.attr('id', imgID);
				}

				if(typeof imgClass !== 'undefined') {
					$svg = $svg.attr('class', imgClass + ' replaced-svg');
				}

				$svg = $svg.removeAttr('xmlns:a');

				if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
					$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
				}

				$img.replaceWith($svg);

			}, 'xml');
		});
	}

    return {
        initMenuSwitcher: function($switcher, $_wrapper) {
            $wrapper = $_wrapper;
            $switcher.on('click', toggleMenu);
        },
        initMenuNavigation: function($_links) {
            $links = $_links;
            convertSVG($links.find('img'));
            openMenu();
            $links.on('click', openSubMenu);
        },
        initScrollBar: function ($_container) {
            $container = $_container;
            $container.perfectScrollbar();
        }
    };
})(jQuery, jQuery.perfectScrollbar);
