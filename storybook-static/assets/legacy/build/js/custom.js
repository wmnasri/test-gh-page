$(function() {
		
		$('.hidden').hide();
		$('.container').hide();
		$('#page-home').show();
		$('#page-quiz-1 li.num-3').addClass('active');
		/* init sliders */
		$( "#slider-quiz-1" ).slider({
			value:3,
			min: 1,
			max: 10,
			step: 1,
			stop: function( event, ui ) {
				$('#page-quiz-1 li').removeClass('active');
				$('#page-quiz-1 li.num-' + ui.value).addClass('active');
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
			}
		});
		/*
		$( "#slider-quiz-5-2" ).slider({
			value:7,
			min: 0,
			max: 10,
			step: 1,
			stop: function( event, ui ) {
			$('#page-quiz-5 .right li').removeClass('active');
				$('#page-quiz-5 .right li.num-' + ui.value).addClass('active');
			}
		});
		*/
		$( "#slider-quiz-6-1" ).slider({
			value:10,
			min: 0,
			max: 10,
			step: 1,
			stop: function( event, ui ) {
			$('#page-quiz-6 .left li').removeClass('active');
				$('#page-quiz-6 .left li.num-' + ui.value).addClass('active');
			}
		});
		/*
		$( "#slider-quiz-5-1" ).slider({
			value:2,
			min: 0,
			max: 7,
			step: 1,
			stop: function( event, ui ) {
			$('#page-quiz-5 .left li').removeClass('active');
				$('#page-quiz-5 .left li.num-' + ui.value).addClass('active');
			}
		});
		*/
		$( "#slider-quiz-2-1" ).slider({
			value:3,
			min: 0,
			max: 7,
			step: 1,
			stop: function( event, ui ) {
				$('#page-quiz-2 .left li').removeClass('active');
				$('#page-quiz-2 .left li.num-' + ui.value).addClass('active');
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
		});
		
		/* Quiz Page 3 */
		$('#page-quiz-3 .button-data').click(function(){
			var n = $(this).attr('rel');
			$('#page-quiz-3 .button-data').removeClass('active');
			$(this).addClass('active');
			$('#page-quiz-3 .texts').hide();
			$('#page-quiz-3 .description-' + n).show();
			$('#page-quiz-3 .form-data').val(n);
		});
		
		/* Quiz Page 4 */
		$('#page-quiz-4 .button-data').click(function(){
			var n = $(this).attr('rel');
			$('#page-quiz-4 .button-data').removeClass('active');
			$(this).addClass('active');
			$('#page-quiz-4 .texts').hide();
			$('#page-quiz-4 .description-' + n).show();
			$('#page-quiz-4 .form-data').val(n);
			
		});
		
		/* Quiz Page 5 */
		$('#page-quiz-5 .button-data').click(function(){
			var n = $(this).attr('rel');
			$('#page-quiz-5 .button-data').removeClass('active');
			$(this).addClass('active');
			$('#page-quiz-5 .texts').hide();
			$('#page-quiz-5 .description-' + n).show();
			$('#page-quiz-5 .form-data').val(n);
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
		});
		
		/* -- handlers for buttons navigation -- */
		$('.button-start').click(function (){
			$('.numbers li, .button-data, #page-quiz-5 .left, #page-quiz-5 .right').removeClass('active');
			$('#page-quiz-5 .left, #page-quiz-5 .right').show();
			$('.texts').hide();
			$('.description-1').show();
			$( "#slider-quiz-1" ).slider( "value", 3 );
			$( "#slider-quiz-2-1" ).slider( "value", 3 );
			$( "#slider-quiz-2-2" ).slider( "value", 3 );
			$( "#slider-quiz-3" ).slider( "value", 3 );
			$( "#slider-quiz-4" ).slider( "value", 3 );
			//$( "#slider-quiz-5-1" ).slider( "value", 2 );
			//$( "#slider-quiz-5-2" ).slider( "value", 7 );
			$( "#slider-quiz-6-1" ).slider( "value", 3 );
			$( "#slider-quiz-6-2" ).slider( "value", 3 );
			
			
			
			$('#page-quiz-1 li.num-3').addClass('active');			
			$('#page-quiz-3 li.num-3').addClass('active');			
			$('#page-quiz-4 li.num-3').addClass('active');			
			$('#page-quiz-2 .right li.num-3').addClass('active');
			$('#page-quiz-6 .right li.num-3').addClass('active');
			$('#page-quiz-5 .right li.num-7').addClass('active');
			$('#page-quiz-6 .left li.num-3').addClass('active');
			$('#page-quiz-5 .left li.num-2').addClass('active');
			$('#page-quiz-2 .left li.num-3').addClass('active');
			$('.button-data-vaisselle-1').addClass('active');
			$('.button-data-lessive-1').addClass('active');
			$('.button-data-wc-1').addClass('active');
			$('.button-data-douche-3').addClass('active');
			$('.form-data-vaiselle').val(1);
			$('.form-data-lessive').val(1);
			$('.form-data-wc').val(1);
			$('.form-data-bain-douche').val(3);
			$('.form-data-bain').val('');
			$('.form-data-douche').val('');
			
			$('.container').hide();
			$('#page-quiz-1').show();
			return false;
		});
		$('a.button-next, a.button-prev').click(function(){
			var id = $(this).attr('rel');
			$('.container').hide();
			$('#' + id).show();
			return false;
		});
		
		$('a.button-end').click(function(){
			sum();
			var id = $(this).attr('rel');
			$('.container').hide();
			$('#page-result').show();
			return false;
		});
		
		/* click on numbers under slider */
		$('#page-quiz-1 .numbers li').click(function(){
			var n = $(this).attr('class').replace( /\D+/g, '');
			$( "#page-quiz-1 .numbers li" ).removeClass('active');
			$( "#slider-quiz-1" ).slider( "value", n );
			$( "#page-quiz-1 li.num-" + n).addClass('active');	
		});
		
		$('#page-quiz-2 .left .numbers li').click(function(){
			var n = $(this).attr('class').replace( /\D+/g, '');
			$( "#page-quiz-2 .left .numbers li" ).removeClass('active');
			$( "#slider-quiz-2-1" ).slider( "value", n );
			$( "#page-quiz-2 .left li.num-" + n).addClass('active');	
		});
		$('#page-quiz-2 .right .numbers li').click(function(){
			var n = $(this).attr('class').replace( /\D+/g, '');
			$( "#page-quiz-2 .right .numbers li" ).removeClass('active');
			$( "#slider-quiz-2-2" ).slider( "value", n );
			$( "#page-quiz-2 .right li.num-" + n).addClass('active');	
		});
		
		$('#page-quiz-3 .numbers li').click(function(){
			var n = $(this).attr('class').replace( /\D+/g, '');
			$( "#page-quiz-3 .numbers li" ).removeClass('active');
			$( "#slider-quiz-3" ).slider( "value", n );
			$( "#page-quiz-3 li.num-" + n).addClass('active');	
		});
		
		$('#page-quiz-4 .numbers li').click(function(){
			var n = $(this).attr('class').replace( /\D+/g, '');
			$( "#page-quiz-4 .numbers li" ).removeClass('active');
			$( "#slider-quiz-4" ).slider( "value", n );
			$( "#page-quiz-4 li.num-" + n).addClass('active');	
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
		});
		$('#page-quiz-6 .right .numbers li').click(function(){
			var n = $(this).attr('class').replace( /\D+/g, '');
			$( "#page-quiz-6 .right .numbers li" ).removeClass('active');
			$( "#slider-quiz-6-2" ).slider( "value", n );
			$( "#page-quiz-6 .right li.num-" + n).addClass('active');	
		});
		/* HP popup */
		$('.question').click(function(){
			$.colorbox({
				inline:true, 
				href:"#popup",
				onLoad:function(){ $('#popup').show(); },
				onCleanup:function(){ $('#popup').hide(); }
			});
		})
		
		
	
	if (navigator.userAgent.match(/iPhone/i)) {
		$('meta[name=viewport]').attr('content','initial-scale=0.5, maximum-scale=0.5, user-scalable=no');
	}		
});

function sum(count){
	var year = 52;
	var constante_prix_m3 = 3.40;
	var nbr_personnes = parseInt( $( "#slider-quiz-1" ).slider( "value" ));
	var nbr_jours_ll = parseInt($( "#slider-quiz-3" ).slider( "value" ));
	var nbr_jours_lv = parseInt($( "#slider-quiz-2-1" ).slider( "value" ));
	var nbr_jours_lm = parseInt($( "#slider-quiz-2-2" ).slider( "value" ));
	var nbr_chasse_deau_tiree_par_personne = parseInt($( "#slider-quiz-4" ).slider( "value" ));
	var nbr_douche = parseInt($( "#data-douche" ).val()) || 0;
	//var nbr_douche = parseInt($( "#slider-quiz-5-2" ).slider( "value" ));
	var nbr_bain = parseInt($( "#data-bain" ).val()) || 0;
	//var nbr_bain = parseInt($( "#slider-quiz-5-1" ).slider( "value" ));
	var nbr_voiture_an = parseInt($( "#slider-quiz-6-2" ).slider( "value" ));
	var nbr_jours_jardin = parseInt($( "#slider-quiz-6-1" ).slider( "value" ));

	var lessive_type = $('#page-quiz-3 .form-data').val();
	var vaiselle_type = $('#page-quiz-2 .form-data').val();
	var wc_type = $('#page-quiz-4 .form-data').val();
	var db_type = $('#page-quiz-5 .form-data').val();
	var nbr_m2 = $('#page-quiz-6 .form-data').val();

	var divers = nbr_personnes * 10.5 * 7 * year ;
	var lessive = (lessive_type == 1) ? nbr_jours_ll * 60 * year : nbr_jours_ll * 120 * year;
	var vaiselle = (vaiselle_type == 1) ? nbr_jours_lv * 20 * year : nbr_jours_lv * 40 * year;
	vaiselle += nbr_jours_lm * 12 * year;
	var wc = (wc_type == 1) ? nbr_personnes * nbr_chasse_deau_tiree_par_personne * 6 * 7 * year : nbr_personnes * nbr_chasse_deau_tiree_par_personne * 12 * 7 * year;
	var douche = nbr_douche * 60 * year;
	//var douche = nbr_personnes * nbr_douche * 60 * year;
	var bain = nbr_bain * 150 * year;
	//var bain = nbr_personnes * nbr_bain * 150 * year;
	var douche_bain = (db_type == 3) ? douche + bain : (db_type == 1) ? douche : bain;
	var voiture = nbr_voiture_an * 200;
	var jardin = nbr_jours_jardin * nbr_m2 * 6 * 15;
	var exterier = voiture + jardin;

	var total = ( divers + lessive + vaiselle + wc + douche_bain + voiture + jardin );
	var total_en_m3 = Math.round(( divers + lessive + vaiselle + wc + douche_bain + voiture + jardin ) / 1000);
	var total_prix = total_en_m3 * constante_prix_m3 / 12;

	var max = Math.max(divers,lessive,vaiselle, wc,douche_bain,exterier);
	var percent = Math.round(max / total * 100);
	$('#page-result .percent').html(percent);
	$('#page-result .data-m3').html(total_en_m3);
	$('#page-result .data-price').html(total_prix.toFixed(2));
	$('#page-result .result-container').hide();

	if ( max == divers )
		$('#page-result #divers-result').show();
	if ( max == lessive )
		$('#page-result #lessive-result').show();
	if ( max == vaiselle )
		$('#page-result #vaiselle-result').show();
	if ( max == douche_bain )
		$('#page-result #douche-result').show();
	if ( max == exterier )
		$('#page-result #jardin-result').show();
	if ( max == wc )
		$('#page-result #wc-result').show();


        $('.chart').highcharts({
            colors: [
							'#4190CB', 
							'#FAC000', 
							'#9FC317', 
							'#007B2F', 
							'#E20056', 
							'#133A5B'
						],
						chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: ''
            },
            tooltip: {
        	    enabled: false
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                data: [
                    ['Douche & bain', douche_bain/1000],
                    ['Alimentation', divers/1000],
                    ['Extérieur', exterier/1000],
                    ['Toilettes', wc/1000],
                    ['Lessive', lessive/1000 ],
                    ['Vaisselle', vaiselle/1000]
                ]
            }],
						credits: {
							enabled : false
						},
						navigation: {
							buttonOptions : { 
								enabled : false
							}
						},
						legend: {
							backgroundColor: '#FFFFFF',
							borderColor: '#FFFFFF',
							itemStyle: {
							   color: '#000000',
							   fontSize: '10px',
							   fontFamily: 'Arial, sans-serif'
							}
						}
						
        });

	//console.log("douche_bain - " + douche_bain + " : divers- " + divers + " : exterier - " + exterier + " : wc - " + wc + " : lessive - " + lessive + " : vaiselle -" + vaiselle);
	return false;
}