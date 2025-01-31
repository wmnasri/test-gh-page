jQuery(document).ready(function() {
    
        // M8815
        $("#commune").validate({
            onkeyup: true
        });
    
	var rules = {
		"last_name":{
			"required": true
		},
		"first_name": {
			"required": true
		},
		"email": {
			"required": true,
			"email": true
		},
		"zipcode": {
			"required": true,
			"postalcode" : true
		},
                "commune": {
                    	"required": true
                },
		"address": {
			"required": true
		},
		"object": {
			"required": true
		},
		"message": {
			"required": true
		},
		"phone": {
			"phone": true
		},
		"mobile_phone": {
			"phone": true
		}
	};
		
	var isNumeric = function(value){
		//empty or parses as a number
		return ((value+'').replace(/^\s+|\s+$/g, "").length == 0) || (!isNaN(parseFloat(value)) && isFinite(value));
	} 
	var isPhone = function(value) {
		return ((value+'').replace(/^\s+|\s+$/g, "")).length == 10 && isNumeric(value);
	}
	var isZipcode = function(value) {
		return ((value+'').replace(/^\s+|\s+$/g, "")).length == 5 && isNumeric(value);
	}
	if (!Modernizr.input.placeholder) {
		$('[placeholder]').focus(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
				input.removeClass('placeholder');
			}
		}).blur(function() {
			var input = $(this);
			if (input.val() == '' || input.val() == input.attr('placeholder')) {
				input.addClass('placeholder');
				input.val(input.attr('placeholder'));
			}
		}).each(function() {
			var input = $(this);
			if (input.val() == '' || input.val() == input.attr('placeholder')) {
				input.addClass('placeholder');
				input.val(input.attr('placeholder'));
			}
		});

		rules.last_name = {
			"notPlaceHolderOrEmpty": true
		};
		rules.first_name = {
			"notPlaceHolderOrEmpty": true
		};
		rules.email = {
			"notPlaceHolderOrEmpty": true,
			"email": true
		};
		rules.zipcode = {
			"notPlaceHolderOrEmpty": true,
			"postalcode" : true
		};
                rules.commune = {
			"notPlaceHolderOrEmpty": true
                };
                rules.object = {
			"notPlaceHolderOrEmpty": true
                };
		rules.address = {
			"notPlaceHolderOrEmpty": true
		};
		rules.message = {
			"notPlaceHolderOrEmpty": true
		};

		
		jQuery.validator.addMethod('notPlaceHolderOrEmpty', function (value, element){
			return !(value == '' || value == $(element).attr('placeholder'));
		});
		
		//validate phone number
		jQuery.validator.addMethod('phone', function (value, element){
			return value == '' || value == $(element).attr('placeholder') || isPhone(value);
		});
		
		//validate postal code
		jQuery.validator.addMethod('postalcode', function (value, element){
			return value == $(element).attr('placeholder') || isZipcode(value);
		});
                
	} else {
		//validate phone number
		jQuery.validator.addMethod('phone', function (value, element){
			return value == '' || isPhone(value);
		});
		
		//validate postal code
		jQuery.validator.addMethod('postalcode', function (value, element){
			return isZipcode(value);
		});
	}

	jQuery("#formPopupQuestion").validate({
		rules: rules,
		invalidHandler: function(form, validator){
			var value;
			for (var i in validator.errorMap) {
				value = '#'+i;
				$('#fieldNeeded').addClass("ErrorAsterix");
				$(value).addClass("redErrorField");
				$(value).keydown(function(){
					$(this).removeClass("redErrorField");
				});
			}
		},
		submitHandler: function(form) {
			//Mantis 8197 MLIU
            displayConfirmPopup();
            
            $(form).ajaxSubmit({
 				url:"/contact/contact/send",
				type:"post",
 				success: function(response){
					//displayConfirmPopup();
					form.reset();
				},
 				error: function(){
					alert('L\'envoi a échoué');
 				}
 			});
		}
	});
	jQuery.extend(jQuery.validator.messages, {
		notPlaceHolderOrEmpty: " Ce champ est requis",
		required: " Ce champ est requis",
		email: " Veuillez saisir une adresse email valide",
		phone: " Veuillez saisir un numéro de téléphone valide",
		postalcode: " Veuillez saisir un code postal valide"
	});
});

function removeError(inputId){
    $(inputId).removeClass("redErrorField");
    $(inputId).removeClass("error");
    $(inputId).next("label").remove();
}

