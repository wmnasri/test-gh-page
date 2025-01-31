function helpPopUp (title, textPopUp, position, idLInk, containerPopin){
        closeAllPopUp();
	var stopEvents = function(event){ event.stopPropagation();};
	var closePopupOnEvent = function(event){
		if ($('#popup'+idLInk).length) {
			closePopUp($('#'+idLInk)); 
		};
		
		$('#popup'+idLInk).unbind('click', stopEvents);
		$('body').unbind('click', this);
		$('body').unbind("touchstart", this);

		$(window).unbind("resize", this);
	};
	
	$('#'+idLInk).click(stopEvents);

	if ($('#popup'+idLInk).length)
	{
		closePopUp($('#'+idLInk));
	}else{
		var htmlPopin = "<div class='helpPopup boxShadow' id='popup"+idLInk+"'>\n\
		<img class='popupIcon' src='/assets/legacy/build/img/ico_interrogation_blue.png'/>\n\
		<span class='titlePopup'>"+title+"</span><img class='popupCloser' src='/assets/legacy/build/img/ico_close.png' />\n\
		<div class='textPopup'>"+textPopUp+"</div></div>";
		
		if (position != 'custom') {
			$("#content").append(htmlPopin);
			$("#content").append("<img class='arrowpopup' id = 'arrowpopup"+idLInk+"' src='/assets/legacy/build/img/img_arrow_popover_"+position+".png'/>");
		} else {
			$("#"+containerPopin).append(htmlPopin);
			$("#"+containerPopin).append("<img class='arrowpopup' id = 'arrowpopup"+idLInk+"' src='/assets/legacy/build/img/img_arrow_popover_top.png'/>");
		}
		$(".popupCloser").click(closePopupOnEvent);
	
		var topMargin = 0; // switch position 
		var leftMargin = 0; // for place the pop up at the right place
		var leftrow = 0; // same for row
		var toprow = 0;
		var menuleftWidth = 0;
		var bodyWidth = $("body").width();
		var menuIsOpen = $("body").hasClass("toggled-menu");

		if(( menuIsOpen === false &&  bodyWidth> 1200) ||
			menuIsOpen === true && bodyWidth < 1200) {
			var menuleftWidth = $(".left-menu").width();
		}

		var popup = $('#popup'+idLInk);
		var rowPopup = $('#arrowpopup'+idLInk);
		var posLink = $('#'+idLInk).findPos();
		switch (position){
			case "top":
				topMargin = (-25-popup.height());
				leftMargin = (+20-(popup.width()/2));
				leftrow = +5;
				toprow = -5;
				break;
			case "bottom":
				topMargin = +35;
				leftMargin = (+20-(popup.width()/2));
				leftrow = +5;
				toprow = +24;
				break;
			case "left":
				topMargin =(-popup.height()/2);
				leftMargin = (-25-popup.width());
				leftrow = -5;
				toprow = +5;
				break;
			case "right":
				leftMargin = 35;
				topMargin = (-popup.height()/2);
				leftrow = +23;
				toprow = +6;
				break;
			default:
				topMargin = (-13-popup.height());
				leftMargin = (+20-(popup.width()/2));
		}

		if (position != 'custom') {
			rowPopup.css({
				position: "absolute",
				top: (posLink.y+ toprow) + "px",
				left: (posLink.x + leftrow - menuleftWidth) + "px"
			}).show();
			popup.css({
				position: "absolute",
				top: (posLink.y + topMargin) + "px",
				left: (posLink.x + leftMargin - menuleftWidth) + "px"
			}).show();
		}


            $('#popup'+idLInk).click(stopEvents);

            setTimeout(function(){
                    $('body').click(closePopupOnEvent);
                    //MANTIS 9221: On commente la ligne qui fermait la popup dès que l'on touche l'écran
                    //$('body').bind("touchstart", closePopupOnEvent);
                    $(window).resize(closePopupOnEvent);
            },1);
        }
}



jQuery.fn.extend({
	findPos : function() {
		obj = jQuery(this).get(0);
		var curleft = obj.offsetLeft || 0;
		var curtop = obj.offsetTop || 0;
		while (obj = obj.offsetParent) {
			curleft += obj.offsetLeft
			curtop += obj.offsetTop
		}
		return {
			x:curleft,
			y:curtop
		};
	}
});

function closePopUp(idPopUp){
	var id = $(idPopUp).attr("id");
	$('#popup'+id).remove();
	$('#arrowpopup'+id).remove();
	$(window).unbind("resize");
}

function closeAllPopUp(){
	$('.helpPopup').remove();
	$('.arrowpopup').remove();
	$(window).unbind("resize");
}


/* Popup Send Question*/

function openPopupQuestion(){
	var popup = $('#popupQuestion');
	popup.css("display", "block");

    $('#fontGrey').css("display", "block");
	$('#fontGrey').click(function(){
		closePopupQuestion();
	});
	
	var nonContrainedH = popup.height();
    var nonConstrainedW = popup.width();
	
	adjustPopupQuestionSize(popup, nonConstrainedW, nonContrainedH);
	
	$(window).resize(function(event){
		adjustPopupQuestionSize(popup, nonConstrainedW, nonContrainedH);
	});
}

function adjustPopupQuestionSize(popup, nonConstrainedW, nonContrainedH){
	var popupH = nonContrainedH;
    var popupW = nonConstrainedW;
    var windowH = $(window).height();
    var windowW = $(window).width();
    
    var top = 0;
    var left = 0;
	var hPadding = parseInt(popup.css("padding-top"), 10) + parseInt(popup.css("margin-top"), 10) + parseInt(popup.css("padding-bottom"), 10) + parseInt(popup.css("margin-bottom"), 10); 
	var wPadding = parseInt(popup.css("padding-left"), 10) + parseInt(popup.css("margin-left"), 10) + parseInt(popup.css("padding-right"), 10) + parseInt(popup.css("margin-right"), 10); 
	
	if(isNaN(hPadding) || hPadding <= 0) hPadding = 20;
	if(isNaN(wPadding) || wPadding <= 0) wPadding = 20;

	if (popupH + hPadding > windowH) {
    	popupH = windowH - hPadding;
    } else {
    	 top = (windowH - popupH - hPadding) / 2;
    }
    if (popupW + wPadding > windowW) {
    	popupW = windowW - wPadding;
    } else {
    	left = (windowW - popupW - wPadding) /2;
    }
    $("#popupQuestion").css({
    	"overflow": "auto",
    	"top" : top + "px",
    	"left" : left + "px",
		"width" : popupW + "px",
		"height" : popupH + "px" 
   	});
}

function closePopupQuestion(){
	$("#formPopupQuestion").get(0).reset();
	$("#popupQuestion").css("display", "none");
	$("#fontGrey").css("display", "none");
}

function displayConfirmPopup(){
	$("#popupQuestion").css("display", "none");
	$("#popupConfirm").css("display", "block");
	var popupH = $("#popupConfirm").height();
    var popupW = $("#popupConfirm").width();
    $("#popupConfirm").css("margin-top", "-" + popupH / 4 + "px");
    $("#popupConfirm").css("margin-left", "-" + popupW / 4 + "px");
    $("#fontGrey").css("display", "block");
	$("#fontGrey").click(function(){
		closeConfirmPopup();
	});
}

function closeConfirmPopup(){
	$("#popupConfirm").css("display", "none");
	$("#fontGrey").css("display", "none");
}

function validateForm(){
	var TabError = getErrorsField();
	if(TabError != null){
		$('#fieldNeeded').addClass("ErrorAsterix");
		$.each(TabError, function(index, value){
			$(value).addClass("redErrorField");
			$(value).change(function() {
				$(value).removeClass("redErrorField");
				$(value).next().removeClass("ErrorAsterix");
			});
			$(value).next().addClass("ErrorAsterix");
		});
	}
}
function getErrorsField(){
	var i = 0;
	var TabError = new Array();
	if($("#name").val() ==""){
		TabError[i]="#name";
		i++;
	}
	if($("#firstname").val() ==""){
		TabError[i]="#firstname";
		i++;
	}
	if(!FormValidator.validateEmail($("#email").val())){
		TabError[i]="#email";
		i++;
	}
	if($("#adress").val() ==""){
		TabError[i]="#adress";
		i++;
	}
	if($("#postal").val() ==""){
		TabError[i]="#postal";
		i++;
	}
	if($("#textAreaCustomerRel").val() ==""){
		TabError[i]="#textAreaCustomerRel";
		i++;
	}
	if(TabError.length == 0){
		return null
	}else{
		return TabError;
	}
}
$(document).ready(function() {
	$("#formPopupQuestion").on("submit", function() {
		})
});
