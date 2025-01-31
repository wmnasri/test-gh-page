function casToucheEntree(event)
{
    // Compatibilité IE / Firefox
    if(!event && window.event) {
        event = window.event;
    }
    // IE
    if(event.keyCode == 13) {
        event.preventDefault();
        event.stopPropagation();
        recherche();
    }
    // DOM
    if(event.which == 13) {
        event.preventDefault();
        event.stopPropagation();
        recherche();
    }

}


function recherche(){
    $('#loadingDiv').css('display','block');
    $('#btnSearch').css('display','none');
    var message = treatment();
    console.debug(message);
    $('#errorSearch').css('display','block');
    $('#errorSearch').html(message);
    $('#loadingDiv').css('display','none');
    $('#btnSearch').css('display','block');
}


function treatment(){
    //Récupération de la recherche
    var searchKey = $('#search').val();
    //Traitement de la recherche
    var tab={"é":"e", "è":"e", "ê":"e", "ë":"e", "ç":"c","à":"a", "â":"a", "ä":"a","î":"i", "ï":"i","ù":"u","ô":"o", "ó":"o", "ö":"o"," ":"-","'":"-"};
    for(i in tab){
        searchKey=searchKey.replace(new RegExp(i,"gi"),tab[i]).toUpperCase();
    }
    //Récupération de towns
    alert{searchKey};
    var towns = {{towns|raw}};
    var message = "";

    console.debug(searchKey);
    if(searchKey.match("^[0-9]{5}")){
        //Cas ou l'utilisateur à taper le code postal
        for(var key in towns){
            if(towns[key]['cp'] == searchKey){
                document.location.href=towns[key]['url'];
            }
            else{message="Code Postal Inconnu";}
        }
    }
    else if(searchKey.match("^[-A-Za-z]*")){
        //Cas ou l'utilisateur à taper le nom de la ville
        for(var key in towns){
            if(towns[key]['commune'] == searchKey){
                document.location.href=towns[key]['url'];
            }
            else{message="Ville inconnue";}
        }
    }
    else{
        //Cas Absurde
        message="Saisie erronée";
    }
    //console.debug(towns);
    return message;
}