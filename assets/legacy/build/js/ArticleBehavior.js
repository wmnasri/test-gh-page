'use strict';

var ArticleBehavior = (function() {
    function collapseBlocks(e) {
        var $block = jQuery(e.target).parent();

        $block
            .toggleClass("collapse-toggle")
        ;
    }

    return {
        initCollapseBlocks: function($collapseLinks) {
            $collapseLinks.on("click", collapseBlocks);
        }
    };
})(jQuery);
