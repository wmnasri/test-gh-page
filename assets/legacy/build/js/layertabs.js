var NAVIGATION_LAYER_MANAGER = function(){
	
	function select(layerId, folderId) {

		var layerSelector = '#layerNavigation-' + layerId;
		$('.layerNavigation').hide();
                if(document.documentElement.clientWidth > 1100) {
                    $('#layerBackground').css("display", "block");
                    $(layerSelector).show();
                }   

		$(layerSelector + ' .currentItemMenuLayer').removeClass('currentItemMenuLayer');

		if(typeof folderId != "undefined"){
			$(layerSelector + ' .layerTab').hide();
			$('#itemMenuLayerFolder-' + folderId).show();
			$('#itemMenuLayerFolderLink-' + folderId).parent().addClass('currentItemMenuLayer');
		} else {
                    if(document.documentElement.clientWidth <= 1100){
                        if(parseInt($("#SelectedLayerId").val()) !== layerId){
                            $('.menuLevel3').slideUp();
                            $(".subMenuSelected").removeClass("subMenuSelected"); 
                            $("#layerNavigationLink-"+layerId+" .subMenu").addClass("subMenuSelected");
                            $("#SelectedLayerId").val(layerId);
                        }else {
                            $("#layerNavigationLink-"+layerId+" .subMenu").removeClass("subMenuSelected",300);
                            $("#SelectedLayerId").val(-1);
                        }
                        $('#subContentMenu-'+layerId).slideToggle(300);
                    }
                    else if(document.documentElement.clientWidth > 1100) {
                        $(".subMenuSelected").removeClass("subMenuSelected"); 
                        $("#layerNavigationLink-"+layerId+" .subMenu").addClass("subMenuSelected");
			$(layerSelector + ' .layerTab').hide();
			$(layerSelector + ' .layerTab:first').show();
			$(layerSelector + ' .itemMenuLayer:first').addClass('currentItemMenuLayer');
                    }
		}
                
	}

	return {
		select: select 
	}
	
}();