var sessionParams = '{"vdom":"29","mailbox":"251","knowdom":"12","knowgroup":"289","page":"page1"}';
//var profileParams = '{"amc_prenom":"Flora","amc_nom":"Martin"}';
try {
    var pageTracker = getTracker(); 
    pageTracker.setDebug(false); //optionnel, par déut debug vaut false 
    pageTracker.setButtonId("buttonWebChat"); //optionnel, par déut buttonId vaut button 
    pageTracker.setSessionParameters(sessionParams) ; 
    //pageTracker.setProfileParameters(profileParams); //optionnel 
    pageTracker.setMode("online"); 
    pageTracker.startSession(0, 5000); 
} catch(err) {
}

function online_businessRule() {
    return true; // dans ce cas, pas de traitement business, on retourne true directement.
}

function online_chatRule(activity) {
    if (activity.tlc > 0 && activity.active < 10 && activity.waiting < 10) { 
        return true; 
    } else {         
        return false; 
    } 
}

function getContextParams() { 
    var contextParams = '{"p1":"'+panier+'","IDSession":"azertylkp"}'; 
    //Attention, bien respecter les simple et double quotes 
    return contextParams; 
}

