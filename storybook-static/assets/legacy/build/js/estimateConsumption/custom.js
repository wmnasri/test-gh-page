$(function() {
		/* Preparation */
		$('.hidden').hide();

		/* HP popup */
		$('.question').click(function(){
			$('#popupOverlay').show();
		})

		$('.close-question').click(function(){
			$("#popupOverlay").hide();
		})

		/* init Slider */
			$( "#slider-quiz-1" ).slider({
				value:3,
				min: 1,
				max: 10,
				step: 1,
				stop: function( event, ui ) {
					$('#page-quiz-1 li').removeClass('active');
					$('#page-quiz-1 li.num-' + ui.value).addClass('active');
					$('#page-quiz-1 .form a.button-next').attr("href", "/evaluer-ma-consommation-foyer/"+ ui.value);
			console.debug($('#page-quiz-1 .form a.button-next').attr("href"));			
				}
			});

		$( "#slider-quiz-2-1" ).slider({
			value:3,
			min: 0,
			max: 7,
			step: 1,
			stop: function( event, ui ) {
				$('#page-quiz-2 .left li').removeClass('active');
				$('#page-quiz-2 .left li.num-' + ui.value).addClass('active');
				$('#page-quiz-2 .form a.button-next').attr("href", "/evaluer-ma-consommation-vaisselle/"+ ui.value+"/"+$('#page-quiz-2 .content-info a.active').attr('rel')+"/"+$('#page-quiz-2 .right li.active').text());
			console.debug($('#page-quiz-2 .form a.button-next').attr("href"));
			}
		});
		
		$( "#slider-quiz-2-2" ).slider({
			value:3,
			min: 0,
			max: 10,
			step: 1,
			stop: function( event, ui ) {
				$('#page-quiz-2 .right li').removeClass('active');
				$('#page-quiz-2 .right li.num-' + ui.value).addClass('active');
				$('#page-quiz-2 .form a.button-next').attr("href", "/evaluer-ma-consommation-vaisselle/"+ $('#page-quiz-2 .left li.active').text()+"/"+$('#page-quiz-2 .content-info a.active').attr('rel')+"/"+ui.value);
			console.debug($('#page-quiz-2 .form a.button-next').attr("href"));
			}
		});

		$( "#slider-quiz-3" ).slider({
			value:3,
			min: 0,
			max: 7,
			step: 1,
			stop: function( event, ui ) {
				$('#page-quiz-3 li').removeClass('active');
				$('#page-quiz-3 li.num-' + ui.value).addClass('active');
				$('#page-quiz-3 .form a.button-next').attr("href", "/evaluer-ma-consommation-lessive/"+ ui.value+"/"+$('#page-quiz-3 .buttons a.active').attr('rel'));
			console.debug($('#page-quiz-3 .form a.button-next').attr("href"));
			}
		});
		$( "#slider-quiz-4" ).slider({
			value:3,
			min: 0,
			max: 7,
			step: 1,
			stop: function( event, ui ) {
				$('#page-quiz-4 li').removeClass('active');
				$('#page-quiz-4 li.num-' + ui.value).addClass('active');
				$('#page-quiz-4 .form a.button-next').attr("href", "/evaluer-ma-consommation-WC/"+ ui.value+"/"+$('#page-quiz-4 .buttons a.active').attr('rel'));
			console.debug($('#page-quiz-4 .form a.button-next').attr("href"));
			}
		});
		$( "#slider-quiz-6-1" ).slider({
			value:10,
			min: 0,
			max: 10,
			step: 1,
			stop: function( event, ui ) {
				$('#page-quiz-6 .left li').removeClass('active');
				$('#page-quiz-6 .left li.num-' + ui.value).addClass('active');
			$mcar = ($('#page-quiz-6 #square-m2').val() == '') ? 0 : $('#page-quiz-6 #square-m2').val();
				$('#page-quiz-6 .form a.button-end').attr("href", "/evaluer-ma-consommation-jardin/"+ ui.value+"/"+$mcar+"/"+$('#page-quiz-6 .right li.active').text());
				console.debug($('#page-quiz-6 .form a.button-end').attr("href"));				
			}
		});
		$( "#slider-quiz-6-2" ).slider({
			value:6,
			min: 0,
			max: 10,
			step: 1,
			stop: function( event, ui ) {
				$('#page-quiz-6 .right li').removeClass('active');
				$('#page-quiz-6 .right li.num-' + ui.value).addClass('active');
				$mcar = ($('#page-quiz-6 #square-m2').val() == '') ? 0 : $('#page-quiz-6 #square-m2').val();
				$('#page-quiz-6 .form a.button-end').attr("href", "/evaluer-ma-consommation-jardin/"+ $('#page-quiz-6 .left li.active').text()+"/"+$mcar+"/"+ui.value);
				console.debug($('#page-quiz-6 .form a.button-end').attr("href"));
			}
		});

		/* -- -- */
		$('.button-data').click(function(){
			return false;
		});
		/* Quiz Page 2 */
		$('#page-quiz-2 .button-data').click(function(){
			var n = $(this).attr('rel');
			$('#page-quiz-2 .button-data').removeClass('active');
			$(this).addClass('active');
			$('#page-quiz-2 .texts').hide();
			$('#page-quiz-2 .description-' + n).show();
			$('#page-quiz-2 .form-data').val(n);
			$('#page-quiz-2 .form a.button-next').attr("href", "/evaluer-ma-consommation-vaisselle/"+ $('#page-quiz-2 .left li.active').text()+"/"+ n +"/"+ $('#page-quiz-2 .right li.active').text());
			console.debug($('#page-quiz-2 .form a.button-next').attr("href"));
		});

		/* Quiz Page 3 */
		$('#page-quiz-3 .button-data').click(function(){
			var n = $(this).attr('rel');
			$('#page-quiz-3 .button-data').removeClass('active');
			$(this).addClass('active');
			$('#page-quiz-3 .texts').hide();
			$('#page-quiz-3 .description-' + n).show();
			$('#page-quiz-3 .form-data').val(n);
			$('#page-quiz-3 .form a.button-next').attr("href", "/evaluer-ma-consommation-lessive/"+$('#page-quiz-3 .numbers li.active').text()+"/"+n);
			console.debug($('#page-quiz-3 .form a.button-next').attr("href"));
		});
		/* Quiz Page 4 */
		$('#page-quiz-4 .button-data').click(function(){
			var n = $(this).attr('rel');
			$('#page-quiz-4 .button-data').removeClass('active');
			$(this).addClass('active');
			$('#page-quiz-4 .texts').hide();
			$('#page-quiz-4 .description-' + n).show();
			$('#page-quiz-4 .form-data').val(n);
			$('#page-quiz-4 .form a.button-next').attr("href", "/evaluer-ma-consommation-WC/"+$('#page-quiz-4 .numbers li.active').text()+"/"+n);
			
		});
		
		/* Quiz Page 5 */
		$('#page-quiz-5 .button-data').click(function(){
			var n = $(this).attr('rel');
			$('#page-quiz-5 .button-data').removeClass('active');
			$(this).addClass('active');
			$('#page-quiz-5 .texts').hide();
			$('#page-quiz-5 .description-' + n).show();
			$('#page-quiz-5 .form-data').val(n);
			$nbd = ($('#page-quiz-5 #data-douche').val() == '') ? 0 : $('#page-quiz-5 #data-douche').val();
			$nbb = ($('#page-quiz-5 #data-bain').val() == '') ? 0 : $('#page-quiz-5 #data-bain').val();
			$('#page-quiz-5 .form a.button-next').attr("href", "/evaluer-ma-consommation-bain-douche/"+n+"/"+$nbd+"/"+$nbb);
			if (n == 3){
				$('#page-quiz-5 .left, #page-quiz-5 .right').removeClass('active').show();
			}
			if (n == 2){
				$('#page-quiz-5 .left').addClass('active').show();
				$('#page-quiz-5 .right').removeClass('active').hide();
			}
			if (n == 1){
				$('#page-quiz-5 .left').removeClass('active').hide();
				$('#page-quiz-5 .right').addClass('active').show();
			}
			console.debug($('#page-quiz-5 .form a.button-next').attr("href"));
		});
		
		/* click on numbers under slider */
		$('#page-quiz-1 .numbers li').click(function(){
			var n = $(this).attr('class').replace( /\D+/g, '');
			$( "#page-quiz-1 .numbers li" ).removeClass('active');
			$( "#slider-quiz-1" ).slider( "value", n );
			$( "#page-quiz-1 li.num-" + n).addClass('active');	
			$('#page-quiz-1 .form a.button-next').attr("href", "/evaluer-ma-consommation-foyer/"+ n);
			console.debug($('#page-quiz-1 .form a.button-next').attr("href"));
		});

		$('#page-quiz-2 .left .numbers li').click(function(){
			var n = $(this).attr('class').replace( /\D+/g, '');
			$( "#page-quiz-2 .left .numbers li" ).removeClass('active');
			$( "#slider-quiz-2-1" ).slider( "value", n );
			$( "#page-quiz-2 .left li.num-" + n).addClass('active');
			$('#page-quiz-2 .form a.button-next').attr("href", "/evaluer-ma-consommation-vaisselle/"+ n+"/"+$('#page-quiz-2 .content-info a.active').attr('rel')+"/"+$('#page-quiz-2 .right li.active').text());	
			console.debug($('#page-quiz-2 .form a.button-next').attr("href"));
		});
		$('#page-quiz-2 .right .numbers li').click(function(){
			var n = $(this).attr('class').replace( /\D+/g, '');
			$( "#page-quiz-2 .right .numbers li" ).removeClass('active');
			$( "#slider-quiz-2-2" ).slider( "value", n );
			$( "#page-quiz-2 .right li.num-" + n).addClass('active');
			$('#page-quiz-2 .form a.button-next').attr("href", "/evaluer-ma-consommation-vaisselle/"+ $('#page-quiz-2 .left li.active').text()+"/"+$('#page-quiz-2 .content-info a.active').attr('rel')+"/"+n);	
			console.debug($('#page-quiz-2 .form a.button-next').attr("href"));
		});
		
		$('#page-quiz-3 .numbers li').click(function(){
			var n = $(this).attr('class').replace( /\D+/g, '');
			$( "#page-quiz-3 .numbers li" ).removeClass('active');
			$( "#slider-quiz-3" ).slider( "value", n );
			$( "#page-quiz-3 li.num-" + n).addClass('active');	
			$('#page-quiz-3 .form a.button-next').attr("href", "/evaluer-ma-consommation-lessive/"+ n+"/"+$('#page-quiz-3 .buttons a.active').attr('rel'));
			console.debug($('#page-quiz-3 .form a.button-next').attr("href"));
		});
		
		$('#page-quiz-4 .numbers li').click(function(){
			var n = $(this).attr('class').replace( /\D+/g, '');
			$( "#page-quiz-4 .numbers li" ).removeClass('active');
			$( "#slider-quiz-4" ).slider( "value", n );
			$( "#page-quiz-4 li.num-" + n).addClass('active');	
			$('#page-quiz-4 .form a.button-next').attr("href", "/evaluer-ma-consommation-WC/"+ n+"/"+$('#page-quiz-4 .buttons a.active').attr('rel'));
			console.debug($('#page-quiz-4 .form a.button-next').attr("href"));
		});
		/*
		$('#page-quiz-5 .left .numbers li').click(function(){
			var n = $(this).attr('class').replace( /\D+/g, '');
			$( "#page-quiz-5 .left .numbers li" ).removeClass('active');
			$( "#slider-quiz-5-1" ).slider( "value", n );
			$( "#page-quiz-5 .left li.num-" + n).addClass('active');	
		});
		$('#page-quiz-5 .right .numbers li').click(function(){
			var n = $(this).attr('class').replace( /\D+/g, '');
			$( "#page-quiz-5 .right .numbers li" ).removeClass('active');
			$( "#slider-quiz-5-2" ).slider( "value", n );
			$( "#page-quiz-5 .right li.num-" + n).addClass('active');	
		});
		*/
		
		$('#page-quiz-6 .left .numbers li').click(function(){
			var n = $(this).attr('class').replace( /\D+/g, '');
			$( "#page-quiz-6 .left .numbers li" ).removeClass('active');
			$( "#slider-quiz-6-1" ).slider( "value", n );
			$( "#page-quiz-6 .left li.num-" + n).addClass('active');	
			$mcar = ($('#page-quiz-6 #square-m2').val() == '') ? 0 : $('#page-quiz-6 #square-m2').val();
			$('#page-quiz-6 .form a.button-end').attr("href", "/evaluer-ma-consommation-jardin/"+ n+"/"+$mcar+"/"+$('#page-quiz-6 .right li.active').text());
			console.debug($('#page-quiz-6 .form a.button-end').attr("href"));
		});
		$('#page-quiz-6 .right .numbers li').click(function(){
			var n = $(this).attr('class').replace( /\D+/g, '');
			$( "#page-quiz-6 .right .numbers li" ).removeClass('active');
			$( "#slider-quiz-6-2" ).slider( "value", n );
			$( "#page-quiz-6 .right li.num-" + n).addClass('active');	
			$mcar = ($('#page-quiz-6 #square-m2').val() == '') ? 0 : $('#page-quiz-6 #square-m2').val();
			$('#page-quiz-6 .form a.button-end').attr("href", "/evaluer-ma-consommation-jardin/"+ $('#page-quiz-6 .left li.active').text()+"/"+$mcar+"/"+n);
			console.debug($('#page-quiz-6 .form a.button-end').attr("href"));
		});

		$('#page-quiz-5 #data-bain').on('input',function(){
			$nbd = ($('#page-quiz-5 #data-douche').val() == '') ? 0 : $('#page-quiz-5 #data-douche').val();
			$nbb = ($('#page-quiz-5 #data-bain').val() == '') ? 0 : $('#page-quiz-5 #data-bain').val();
			$('#page-quiz-5 .form a.button-next').attr("href", "/evaluer-ma-consommation-bain-douche/"+$('#page-quiz-5 .buttons a.active').attr('rel')+"/"+$nbb+"/"+$nbd);
			console.debug($('#page-quiz-5 .form a.button-next').attr("href"));
		})
		$('#page-quiz-5 #data-douche').on('input',function(){
			$nbd = ($('#page-quiz-5 #data-douche').val() == '') ? 0 : $('#page-quiz-5 #data-douche').val();
			$nbb = ($('#page-quiz-5 #data-bain').val() == '') ? 0 : $('#page-quiz-5 #data-bain').val();
			$('#page-quiz-5 .form a.button-next').attr("href", "/evaluer-ma-consommation-bain-douche/"+$('#page-quiz-5 .buttons a.active').attr('rel')+"/"+$nbb+"/"+$nbd);
			console.debug($('#page-quiz-5 .form a.button-next').attr("href"));
		})
		$('#page-quiz-6 #square-m2').on('input',function(){
			$mcar = ($('#page-quiz-6 #square-m2').val() == '') ? 0 : $('#page-quiz-6 #square-m2').val();
			$('#page-quiz-6 .form a.button-end').attr("href", "/evaluer-ma-consommation-jardin/"+ $('#page-quiz-6 .left li.active').text()+"/"+$mcar+"/"+ $('#page-quiz-6 .right li.active').text());
			console.debug($('#page-quiz-6 .form a.button-end').attr("href"));
		})

});

