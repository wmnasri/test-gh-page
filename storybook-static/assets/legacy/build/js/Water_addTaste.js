/**
 * 
 * @returns {undefined}
 */
function setAddress() {
    var length = $('.adresses_length').attr('id');
    var adresse = null;
    if (length > 1) {
        var adresses = document.getElementById("input_adresse_gde");
        adresse = adresses.options[adresses.selectedIndex].value;        
    }else{
       adresse = $('.oneAdressOnly').attr('id');
    }
    document.getElementById("input_address_form").value = adresse;
}

/*
 $('#button_submit').click(function() {
 setAddress();
 $.validator.addMethod(
 "maxTime",
 function(value, element) {
 var date = $('#input_tasting_date').val();

 if(date != "" && value != ""){
 var firstDate = date.split('/');
 var dateObj = new Date(firstDate[2] + '-' + firstDate[1] + '-' + firstDate[0] + ' ' + value);
 var currentDate = new Date();
 currentDate.setSeconds(0);
 currentDate.setMilliseconds(0);

 if (currentDate.getTime() < dateObj.getTime())
 return false;
 }
 return true;
 },
 "Merci de saisir une heure antérieure ou égale à l'heure courante."
 );
*/

