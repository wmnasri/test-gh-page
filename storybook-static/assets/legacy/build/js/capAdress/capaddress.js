/**
 * Cap ADDRESS
 *
 * @author Billy
 * @copyright 2015 Cap Adresse
 * @version 1.0.0
 *
 * Pour plus de sécurité
 * On englobe l'application dans une fonction anonyme qui s'execute immédiatement
 * Elle prend en paramètre l'objet jQuery pour pouvoir utiliser le symbole '$' sans risque de conflit
 *
 * @param  {object} $ Objet jQuery permettant ainsi d'éviter les conflits avec l'utilisation du '$'
 * @return {void}
 */
(function($) {

cap.address = cap.address || {};

/**
 * Simple chaîne de caractère contenant le numéro de version
 * @type {string}
 */
cap.address.version = '2.10.0';

/**
 * Options par défaut
 * @type {object}
 */
cap.address.defaults = {
    // Gestion des messages d'erreur
    errorMessages: {
        // Pour afficher les messages d'erreur lors de la saisie
        showMessage: false,
        // Positionne le message d'erreur au dessus ou en dessous de l'input text (2 valeurs : 'top' || 'bottom')
        position: 'top'
    },

    path: '',

    // Timeout qu'on autorise au service web avant de considérer qu'il est HS (en millisecondes)
    timeout: 15000,

    /**
     * Moteur à utiliser
     * 'verif'  pour utiliser Cap Verif
     * 'saisie' pour utiliser Cap Saisie
     * 'line'   pour utiliser Cap Line
     */
    engine: 'saisie',

    // Permet de désactiver les champs au chargement de la page
    // Et de les réactiver au fur et à mesure
    disableFields: true,

    // Permet de vérifier une adresse au chargement du formulaire
    // Dans le cas où on voudrait modifier une adresse par exemple
    checkAddressOnLoad: false,

    // Permet la recherche d'infos additionelles
    searchAdditionalInfo: false,

    // Base de données à utiliser pour les coordonnées XY
    // 0: WSG84
    // 1: LAMBERT2 ETENDU
    // 2: LAMBERT93
    XYDatabase: 0,

    // Les identifiants des champs sont nécessaires pour pouvoir les récupérer via jQuery et activer l'autocomplétion
    // ID de la div qui contiendra le formulaire de l'adresse
    divContent_ID: '',
    // ID de la div qui affiche le message d'erreur si le service est HS
    divError_ID: '',

    // ID du champ permettant de récupérer l'adresse formatée
    formattedAddress_ID: 'formatted-address',

    // Champs pour l'adresse
    // ID du champ Code Qualité Adresse
    qualityCode_ID: 'quality-code',
    // ID du champ contenant le Code Qualité Adresse étendu
    extendedQualityCode_ID: 'extended-quality-code',
    // ID de la liste déroulante des pays
    countriesDropD_ID: 'country',

    // ID du champ Adresse pour la saisie avec Cap Line
    line_ID: 'adresse',

    // ID du champ code postal / localité (s'il n'y a qu'un seul champ)
    zipcity_ID: 'zipcity',
    // ID du champ code postal (s'ils sont en deux champs séparés)
    zip_ID: '',
    // ID du champ localité (s'ils sont en deux champs séparés)
    city_ID: '',
    // ID du champ lieudit
    province_ID: 'province',

    // ID du champ d'info complémentaire 1 de localité
    cityAdd1_ID: 'txt-info11',
    // ID du champ d'info complémentaire 2 de localité
    cityAdd2_ID: 'txt-info12',
    // ID du champ d'info complémentaire 3 de localité
    cityAdd3_ID: 'txt-info13',
    // ID du champ d'info complémentaire 4 de localité
    cityAdd4_ID: 'txt-info14',
    // ID du champ d'info complémentaire 5 de localité
    cityAdd5_ID: 'txt-info15',

    // ID du champ voie
    street_ID: 'street',

    // ID du champ d'info complémentaire 1 de voie
    streetAdd1_ID: 'txt-info21',
    // ID du champ d'info complémentaire 2 de voie
    streetAdd2_ID: 'txt-info22',
    // ID du champ d'info complémentaire 3 de voie
    streetAdd3_ID: 'txt-info23',
    // ID du champ d'info complémentaire 4 de voie
    streetAdd4_ID: 'txt-info24',
    // ID du champ d'info complémentaire 5 de voie
    streetAdd5_ID: 'txt-info25',

    // ID du champ numéro de voie
    num_ID: 'street-number',
    // ID du champ du 1er complément d'adresse (bâtiment, résidence, etc.)
    building_ID: 'building',
    // ID du champ du 2ème complément d'adresse (appartement, étage, etc.)
    additionalInfo_ID: 'additional-info',

    // ID du champ du 3ème complément d'adresse
    additionalInfo2_ID: 'txt-info02',
    // ID du champ du 4ème complément d'adresse
    additionalInfo3_ID: 'txt-info03',
    // ID du champ du 5ème complément d'adresse
    additionalInfo4_ID: 'txt-info04',

    // ID du champ pour le code IRIS
    additionalInfo5_ID: '',
    // ID du champ pour la coordonnée X
    X_ID: '',
    // ID du champ pour la coordonnée Y
    Y_ID: '',
    // ID du champ pour l'indicateur de précision des coordonnées
    accuracy_ID: '',
    // ID du champ pour les CSP
    additionalInfo6_ID: '',
    // ID du champ pour l'identifiant du carreau
    idCarreau_ID: '',
    // ID du champ pour le code du carreau (= identifiant INSPIRE)
    idInspire_ID: '',
    // ID du champ pour le code du rectangle associé
    idK_ID: ''
};

/**
 * Tableau contenant les différentes configurations
 * Une pour chaque formulaire différent
 * @type {array}
 */
cap.address.settings = [];

/**
 * Objet content les noms par défaut des champs
 * @type {object}
 */
cap.address.defaultInputs = {
    // Div qui contiendra le formulaire de l'adresse
    divContent: '',
    // Div qui affiche le message d'erreur si le service est HS
    divError: '',

    // Champ permettant de récupérer l'adresse formatée
    formattedAddress: '',

    // Champ Code Qualité Adresse
    qualityCode: '',
    // Champ contenant le Code Qualité Adresse étendu
    extendedQualityCode: '',
    // Champ contenant la liste déroulante des pays pour envoyer le bon pays à Cap Address
    countriesDropD: '',

    // Champ Adresse pour la saisie avec Cap Line
    line: '',

    // Champ code postal / localité (s'il n'y a qu'un seul champ)
    zipcity: '',
    // Champ code postal (s'ils sont en deux champs séparés)
    zip: '',
    // Champ localité (s'ils sont en deux champs séparés)
    city: '',
    // Champ lieudit
    province: '',

    // Champ d'info complémentaire 1 de localité
    cityAdd1: '',
    // Champ d'info complémentaire 2 de localité
    cityAdd2: '',
    // Champ d'info complémentaire 3 de localité
    cityAdd3: '',
    // Champ d'info complémentaire 4 de localité
    cityAdd4: '',
    // Champ d'info complémentaire 5 de localité
    cityAdd5: '',

    // Champ voie
    street: '',

    // Champ d'info complémentaire 1 de voie
    streetAdd1: '',
    // Champ d'info complémentaire 2 de voie
    streetAdd2: '',
    // Champ d'info complémentaire 3 de voie
    streetAdd3: '',
    // Champ d'info complémentaire 4 de voie
    streetAdd4: '',
    // Champ d'info complémentaire 5 de voie
    streetAdd5: '',

    // Champ numéro de voie
    num: '',
    // Champ du 1er complément d'adresse (bâtiment, résidence, etc.)
    building: '',
    // Champ du 2ème complément d'adrese (appartement, étage, etc.)
    additionalInfo: '',

    // Champ du 3ème complément d'adresse
    additionalInfo2: '',
    // Champ du 4ème complément d'adresse
    additionalInfo3: '',
    // Champ du 5ème complément d'adresse
    additionalInfo4: '',

    // Champ pour le code IRIS
    additionalInfo5: '',
    // Champ pour la coordonnée X
    X: '',
    // Champ pour la coordonnée Y
    Y: '',
    // Champ pour l'indicateur de précision des coordonnées
    accuracy: '',
    // Champ pour les CSP
    additionalInfo6: '',
    // Champ pour l'identifiant du carreau
    idCarreau: '',
    // Champ pour le code du carreau (= identifiant INSPIRE)
    idInspire: '',
    // Champ pour le code du rectangle associé
    idK: ''
};

/**
 * Tableau où seront stockés les différents champs (via jQuery)
 * C'est grâce à ces éléments qu'on pourra activer l'autocomplétion
 * @type {array}
 */
cap.address.inputs = [];

/**
 * Nombre de formulaire d'adresse
 * Pour savoir la limite à ne pas dépasser lors de la validation
 * @type {integer}
 */
cap.address.nbInputs = 0;

/**
 * Pour savoir sur quel formulaire on se situe
 * @type {integer}
 */
cap.address.instance = 0;

/**
 * Permet de savoir quelles adresses ont été validées ou non
 * @type {array}
 */
cap.address.addressValidated = [true];

/**
 * Liste des différentes étapes de recherche
 * @type {object}
 */
cap.address.step = {
    // Uniquement pour la vérification
    UNDEFINED: 'Undefined',
    // Lorsqu'on veut forcer une proposition
    FORCED: 'Forced',
    // Permet de rechercher des localités
    LOCALITY: 'SearchLocality',
    // Permet de rechercher des voies
    STREET: 'SearchStreet',
    // Permet de rechercher des numéros de voie
    STREETNUM: 'SearchStreetNumber',
    // Permet de vérifier un numéro de voie
    CHECKNUM: 'CheckStreetNumber',
    // Permet de rechercher un bâtiment, une résidence, etc.
    BUILDING: 'SearchBuilding',
    // Permet de rechercher les informations additionnelles
    ADDITIONAL_INFOS: 'SearchAdditionalInfo',
    // Permet de valider l'adresse
    VALIDATE: 'ValidateForm',
    // Dernière étape de la recherche, on ne pourra pas avoir de meilleure adresse
    FINAL: 'FinalAddress'
};

/**
 * Liste des moteurs disponibles
 * @type {object}
 */
cap.address.engine = {
    // Pour appeler SearchLine
    LINE: {
        name: 'line',
        method: 'SearchLine',
        alias: 'line'
    },
    // Pour appeler SearchAddress
    SAISIE: {
        name: 'saisie',
        method: 'SearchAddress',
        alias: 'search'
    },
    // Pour appeler VerifyAddress
    VERIF: {
        name: 'verif',
        method: 'VerifyAddress',
        alias: 'verify'
    }
};

/**
 * Objet contenant les différents codes qualités adresse disponibles
 * @type {object}
 */
cap.address.qualityCodes = {
    VALID: '00',
    COMPANY_FORCED: '04',
    POSTALCODE_FORCED: '41',
    STREET_FORCED: '42',
    NUM_FORCED: '53',
    DEFAULT: '60',
    NUM_FORCED_BIS: '63'
};

/**
 * Objet contenant la valeur correspondant à la position du numéro de voie
 * 1: Avant la voie
 * 2: Après la voie
 * @type {object}
 */
cap.address.streetNumberPosition = {
    BEFORE: 1,
    AFTER: 2
};

/**
 * Objet contenant les valeurs des différentes base de données utilisées pour les coordonnées XY
 * @type {object}
 */
cap.address.XYDatabase = {
    WSG84: 0,
    LAMBERT2: 1,
    LAMBERT93: 2
};

/**
 * Longueur max du code qualité étendu
 * @type {integer}
 */
cap.address.EXTENDED_QUALITY_CODE_LENGTH = 10;

/**
 * Tableau contenant le code pays de chaque formulaire
 * @type {array}
 */
cap.address.countryCode = ['FRA'];

/**
 * Permet de savoir si le service est HS ou non
 * Pour ne pas faire d'appels inutiles s'il ne répond pas
 * @type {array}
 */
cap.address.serviceHS = [false];

/**
 * Permet de stocker une fonction contenant l'appel Ajax
 * Pour pouvoir l'appeler quand on en a besoin
 * @type {mixed}
 */
cap.address.appelAjax = null;

/**
 * Permet d'arrêter les appels Ajax lorsqu'on choisit une proposition
 * @type {boolean}
 */
cap.address.stopCalling = false;
/**
 * Variable permettant de savoir si une requête Ajax est en cours ou non
 * @type {boolean}
 */
cap.address.inProgress = false;
/**
 * Peut contenir une fonction permettant de mettre en attente une requête Ajax
 * Elle est automatiquement mise à null dès qu'elle a été appelée
 * @type {mixed}
 */
cap.address.waitingCall = null;

/**
 * Permet de ne pas de ne pas appeler la fonction validate en boucle
 * @type {boolean}
 */
cap.address.validated = true;

/**
 * Permet de savoir si le numéro de voie a déjà été testé
 * @type {array}
 */
cap.address.numDejaTeste = [false];

/**
 * Permet de savoir si on a déjà pré-recherché la voie
 * C'est-à-dire lorsqu'on saisit un code postal et qu'on cherche automatiquement la voie
 * si celle-ci est renseignée
 * @type {array}
 */
cap.address.streetPreSearched = [false];

/**
 * Permet de savooir si on a déjà recherché les informations additionnelles (coordonnées XY, CSP, etc.)
 * @type {array}
 */
cap.address.additionalInfoAlreadySearch = [false];

/**
 * Objet contenant l'élément renvoyé par le service web
 * Il est initialisé à SearchLocality pour lancer la recherche de localité
 * @type {object}
 */
cap.address.propChoisie = [];

/**
 * Tableau contenant la liste des propositions à afficher à l'utilisateur
 * @type {array}
 */
cap.address.propositions = [];

/**
 * Peu contenir une fonction qui servira de callback une fois la validation terminée
 * @type {mixed}
 */
cap.address.validationCallback = null;

/**
 * Permet de sauvegarder l'étape précédente
 * @type {array}
 */
cap.address.previousStep = [];


/**
 * Objet qui contiendra la fonction de recherche pour Cap Line
 * @type {object}
 */
cap.address.SearchLine = {};
/**
 * Objet qui contiendra la fonction de recherche des localités
 * @type {object}
 */
cap.address.SearchLocality = {};
/**
 * Objet qui contiendra la fonction de recherche des voies
 * @type {object}
 */
cap.address.SearchStreet = {};
/**
 * Objet qui contiendra la fonction de recherche des numéros
 * @type {object}
 */
cap.address.SearchStreetNumber = {};
/**
 * Objet qui contiendra la fonction de vérifications des numéros
 * @type {object}
 */
cap.address.CheckStreetNumber = {};
/**
 * Objet qui contiendra la fonction de recherche des bâtiments
 * @type {object}
 */
cap.address.SearchBuilding = {};
/**
 * Objet qui contiendra la fonction de recherche des infos additionnelles (XY, CSP...)
 * @type {object}
 */
cap.address.SearchAdditionalInfo = {};


/**
 * Permet de définir des options par défaut pour l'ensemble des formulaires
 * Ce qui permet d'éviter de définir plusieurs fois des options qui sont identiques à chaque formulaire
 *
 * @param {object} options Options que l'on souhaite redéfinir
 */
cap.address.setDefaultOptions = function( options )
{
    options = options || {};

    $.extend(true, this.defaults, options);
};

/**
 * Initialise l'application
 * @param  {object} settings Paramètres de l'application
 * @return {void}
 */
cap.address.init = function( settings )
{
    var _this = this;
    var settings_length = 1;
    var i;

    if (!$.isArray(settings))
    {
        _this.settings.push($.extend(true, _this.defaults, settings));
    }
    else
    {
        settings_length = settings.length;

        $.each(settings, function(index, setting) {
            _this.settings.push($.extend(true, {}, _this.defaults, setting));
        });
    }

    _this.nbInputs = settings_length;

    for (i = 0; i < settings_length; i++)
    {
        // On utilise $.extend pour éviter qu'il n'écrase l'objet defaultInputs
        _this.inputs.push($.extend(true, {}, _this.defaultInputs));

        // Récupération des champs grâce à jQUery
        _this.retrieveInputFields(i);

        // Ajout des div contenant les message d'erreur
        _this.addDivError(i);

        // Initialisation du tableau des propositions
        _this.propositions[i] = {};

        // On considère les adresses valides par défaut
        _this.addressValidated[i] = true;

        // Si le chemin est vide, on ne désactive pas les champs
        // Sinon, la saisie se retrouve bloquée
        if (_this.settings[i].path === '')
        {
            _this.settings[i].disableFields = false;
        }

        // Initialisation du code pays pour chaque formulaire
        // Si on a une liste déroulante pour les pays, on récupère sa valeur
        if (_this.inputs[i].countriesDropD !== '')
        {
            _this.countryCode[i] = _this.inputs[i].countriesDropD.val();
        }
        // Sinon, on met la France par défaut
        else
        {
            _this.countryCode[i] = 'FRA';
        }

        // Initialisation de l'étape précédente avec la première étape de recherche
        _this.previousStep[i] = _this.step.LOCALITY;

        _this.initPropChoisie(i);

        // On initialise l'autocomplete
        if (cap.utils.isFunction(_this.autocompleteInit))
        {
            _this.autocompleteInit(i);
        }

        // Si l'élément propChoisie existe, on l'initialise à l'étape du cploc
        if (cap.utils.nonDefini(_this.propChoisie[i]) !== '')
        {
            _this.reinitStep({instance: i, step: _this.step.LOCALITY});
        }

        // Réinitialisation des champs
        if (_this.settings[i].disableFields && _this.settings[i].engine !== _this.engine.VERIF.name && _this.settings[i].engine !== _this.engine.LINE.name)
        {
            _this.resetFields({disableFields: _this.settings[i].disableFields, instance: i, step: _this.step.LOCALITY});
        }

        // On initialise propChoisie si on a choisi la verif
        // pour pouvoir lancer la verif avec des données et pas du vide
        if (_this.settings[i].engine === _this.engine.VERIF.name)
        {
            _this.updatePropChoisie({instance: i});

            if (_this.isValidQualiyCode({instance: i}))
            {
                _this.propChoisie[i].step = _this.step.FINAL;
            }
        }

        _this.serviceHS[i] = false;

        _this.additionalInfoAlreadySearch[i] = false;

        if (_this.settings[i].searchAdditionalInfo)
        {
            _this.setXYDatabase(i, _this.settings[i].XYDatabase);
        }

        // On initialise la variable avec disableFields
        // En effet, si cette option vaut true alors on n'a pas besoin de faire
        // une pré-recherche
        _this.streetPreSearched[i] = _this.settings[i].disableFields;
    }

    // On test que le service web fonctionne
    _this.checkWebService();
};

/**
 * Permet de récupérer les différents champs via jQuery
 * grâce aux ID qui ont été passés en paramètres lors de l'initialisation
 *
 * @param  {integer} formIndex Instance/formulaire dans lequel on se trouve
 * @return {void}
 */
cap.address.retrieveInputFields = function( formIndex )
{
    var _this = this;
    var i = cap.utils.isNum(formIndex) ? formIndex : 0;
    var inputs = _this.inputs[i];
    var settings = _this.settings[i];

    $.each(inputs, function(index) {

        if (settings[index+'_ID'] !== '')
        {
            inputs[index] = document.getElementById(settings[index+'_ID']) !== null ? $('[id="'+settings[index+'_ID']+'"]') : '';
        }
    });
};

/**
 * Permet de récupérer les ID des formulaires contenant les champs
 *
 * @return {void}
 */
cap.address.retrieveFormID = function()
{
    var _this = this;
    var closest_form;

    $.each(_this.inputs, function(index, value) {

        $.each(value, function(inputName, inputValue) {

            closest_form = cap.utils.inputExists(inputValue) ? inputValue.closest('form') : '';

            if (closest_form.length && closest_form.attr('id') !== '')
            {
                _this.inputs[index].formID = closest_form.attr('id');
            }
        });
    });
};

/**
 * Permet de gérer les évènements sur les input
 *
 * @return {void}
 */
cap.address.bindInputsEvents = function()
{
    var _this = this;
    var settings;
    var engine;

    $.each(_this.inputs, function(index, value) {

        settings = _this.settings[index];
        engine = cap.utils.nonDefini(settings.engine);

        if (cap.utils.inputExists(_this.inputs[index].countriesDropD))
        {
            // Capture du changement de pays dans la liste déroulante
            _this.inputs[index].countriesDropD.on('change', function() {
                // On reset toute l'adresse
                _this.reset({instance: index});
                _this.reinitPropChoisie({instance: index, step: _this.step.LOCALITY});
                _this.destroyAllAutocomplete({instance: index});

                var countryCode = $(this).val();

                // On récupère le code pays qui a été choisi
                if (countryCode !== '')
                {
                    _this.countryCode[index] = countryCode;
                    _this.propChoisie[index].countryCode = countryCode;
                }

                _this.isCountryAvailable({index: index, engine: engine});

                // On supprime tous les messages d'erreur
                cap.utils.effacerMessages();
            });
        }

        if (cap.utils.inputExists(_this.inputs[index].line))
        {
            // Capture de l'évènement keyup sur le champ cploc
            _this.inputs[index].line.on('keyup', function(event) {

                _this.instance = index;

                if (engine === _this.engine.LINE.name)
                {
                    _this[_this.engine.LINE.method].search({instance: index, event: event});
                }
            })
            .on('blur', function() {
                _this.instance = index;

                _this.stopCalling = true;
                _this.reinitAjaxVariables();
            });
        }

        if (cap.utils.inputExists(_this.inputs[index].zipcity))
        {
            // Capture de l'évènement keyup sur le champ cploc
            _this.inputs[index].zipcity.on('keyup', function(event) {
                _this.instance = index;

                if (engine !== _this.engine.LINE.name)
                {
                    _this[_this.step.LOCALITY].search({instance: index, event: event});
                }
            })
            .on('blur', function() {
                _this.instance = index;

                _this.stopCalling = true;
                _this.reinitAjaxVariables();
            });
        }
        else
        {
            if (cap.utils.inputExists(_this.inputs[index].zip))
            {
                // Capture de l'évènement keyup sur le champ cploc
                _this.inputs[index].zip.on('keyup', function(event) {

                    if (_this.isCountryCodeFR(_this.countryCode[index]) && /\D/g.test(this.value))
                    {
                        this.value = this.value.replace(/\D/g, '');
                    }

                    _this.instance = index;

                    if (engine !== _this.engine.LINE.name)
                    {
                        _this[_this.step.LOCALITY].search({instance: index, event: event});
                    }
                })
                .on('blur', function() {
                    _this.instance = index;

                    _this.stopCalling = true;
                    _this.reinitAjaxVariables();
                });
            }

            if (cap.utils.inputExists(_this.inputs[index].city))
            {
                // Capture de l'évènement keyup sur le champ cploc
                _this.inputs[index].city.on('keyup', function(event) {
                    _this.instance = index;

                    if (engine !== _this.engine.LINE.name)
                    {
                        _this[_this.step.LOCALITY].search({instance: index, event: event});
                    }
                })
                .on('blur', function() {
                    _this.instance = index;

                    _this.stopCalling = true;
                    _this.reinitAjaxVariables();
                });
            }
        }

        if (cap.utils.inputExists(_this.inputs[index].province))
        {
            _this.inputs[index].province.on('keyup', function() {
                _this.instance = index;
                _this.validated = false;
                _this.propChoisie[index].localitySynonym = _this.inputs[index].province.val();
            });
        }

        // Récupération des compléments de localité lors du keyup
        if (cap.utils.inputExists(_this.inputs[index].cityAdd1))
        {
            _this.inputs[index].cityAdd1.on('keyup', function() {
                _this.instance = index;
                _this.validated = false;
                _this.propChoisie[index].localityInfo_1 = _this.inputs[index].cityAdd1.val();
            });
        }

        if (cap.utils.inputExists(_this.inputs[index].cityAdd2))
        {
            _this.inputs[index].cityAdd2.on('keyup', function() {
                _this.instance = index;
                _this.validated = false;
                _this.propChoisie[index].localityInfo_2 = _this.inputs[index].cityAdd2.val();
            });
        }

        if (cap.utils.inputExists(_this.inputs[index].cityAdd3))
        {
            _this.inputs[index].cityAdd3.on('keyup', function() {
                _this.instance = index;
                _this.validated = false;
                _this.propChoisie[index].localityInfo_3 = _this.inputs[index].cityAdd3.val();
            });
        }

        if (cap.utils.inputExists(_this.inputs[index].cityAdd4))
        {
            _this.inputs[index].cityAdd4.on('keyup', function() {
                _this.instance = index;
                _this.validated = false;
                _this.propChoisie[index].localityInfo_4 = _this.inputs[index].cityAdd4.val();
            });
        }

        if (cap.utils.inputExists(_this.inputs[index].cityAdd5))
        {
            _this.inputs[index].cityAdd5.on('keyup', function() {
                _this.instance = index;
                _this.validated = false;
                _this.propChoisie[index].localityInfo_5 = _this.inputs[index].cityAdd5.val();
            });
        }



        if (cap.utils.inputExists(_this.inputs[index].street))
        {
            // Capture de l'évènement keyup sur le champ voie pour lancer la recherche
            _this.inputs[index].street.on('keyup', function(event) {
                _this.instance = index;

                if (engine === _this.engine.VERIF.name)
                {
                    _this.updatePropChoisie({instance: index});
                }

                if (engine !== _this.engine.VERIF.name && engine !== _this.engine.LINE.name)
                {
                    _this[_this.step.STREET].search({instance: index, event: event});
                }
                else
                {
                    _this.validated = false;
                }
            })
            // Capture de l'évènement focus sur le champ voie pour lancer la recherche (uniquement si le champ est vide)
            .on('focus', function() {
                _this.instance = index;

                if (_this.inputs[index].street.val() === '' && engine !== _this.engine.VERIF.name && engine !== _this.engine.LINE.name)
                {
                    _this[_this.step.STREET].search({instance: index});
                }
            })
            // Capture de l'évènement blur sur le champ voie pour effacer le message
            .on('blur', function() {
                _this.instance = index;

                _this.stopCalling = true;
                _this.reinitAjaxVariables();

                cap.utils.afficherMessage(_this.inputs[index].street);
            });
        }

        if (cap.utils.inputExists(_this.inputs[index].num))
        {
            // Capture de l'évènement keyup sur le champ numéro pour lancer la recherche
            _this.inputs[index].num.on('keyup', function(event) {
                _this.instance = index;

                if (engine === _this.engine.VERIF.name)
                {
                    _this.updatePropChoisie({instance: index});
                }

                if (engine !== _this.engine.VERIF.name)
                {
                    _this[_this.step.STREETNUM].search({instance: index, event: event});
                }
                else
                {
                    _this.validated = false;
                }
            })
            // Capture de l'évènement blur sur le champ numéro pour effacer le message
            .on('blur', function() {
                _this.instance = index;

                _this.stopCalling = true;
                _this.reinitAjaxVariables();

                if (!_this.numDejaTeste[index])
                {
                    _this.propChoisie[index].step = _this.step.CHECKNUM;
                    _this[_this.step.CHECKNUM].search({instance: index});
                }
                else
                {
                    cap.utils.afficherMessage(_this.inputs[index].num);
                }
            })
            // Capture de l'évènement focus sur le champ numéro pour lancer la recherche (uniquement si le champ est vide)
            .on('focus', function() {
                _this.instance = index;

                if (cap.utils.getInputValue(_this.inputs[index].num) === '' && engine !== _this.engine.VERIF.name)
                {
                    _this[_this.step.STREETNUM].search({instance: index});
                }
            });
        }

        // Récupération des compléments de voie lors du keyup
        if (cap.utils.inputExists(_this.inputs[index].streetAdd1))
        {
            _this.inputs[index].streetAdd1.on('keyup', function() {
                _this.instance = index;
                _this.validated = false;
                _this.propChoisie[index].streetInfo_1 = _this.inputs[index].streetAdd1.val();
            });
        }

        if (cap.utils.inputExists(_this.inputs[index].streetAdd2))
        {
            _this.inputs[index].streetAdd2.on('keyup', function() {
                _this.instance = index;
                _this.validated = false;
                _this.propChoisie[index].streetInfo_2 = _this.inputs[index].streetAdd2.val();
            });
        }

        if (cap.utils.inputExists(_this.inputs[index].streetAdd3))
        {
            _this.inputs[index].streetAdd3.on('keyup', function() {
                _this.instance = index;
                _this.validated = false;
                _this.propChoisie[index].streetInfo_3 = _this.inputs[index].streetAdd3.val();
            });
        }

        if (cap.utils.inputExists(_this.inputs[index].streetAdd4))
        {
            _this.inputs[index].streetAdd4.on('keyup', function() {
                _this.instance = index;
                _this.validated = false;
                _this.propChoisie[index].streetInfo_4 = _this.inputs[index].streetAdd4.val();
            });
        }

        if (cap.utils.inputExists(_this.inputs[index].streetAdd5))
        {
            _this.inputs[index].streetAdd5.on('keyup', function() {
                _this.instance = index;
                _this.validated = false;
                _this.propChoisie[index].streetInfo_5 = _this.inputs[index].streetAdd5.val();
            });
        }



        if (cap.utils.inputExists(_this.inputs[index].building))
        {
            // Capture de l'évènement keyup sur le champ complément pour lancer la recherche
            _this.inputs[index].building.on('keyup', function(event) {
                _this.instance = index;

                if (engine !== _this.engine.VERIF.name)
                {
                    _this[_this.step.BUILDING].search({instance: index, event: event});
                }
                else
                {
                    _this.updatePropChoisie({instance: index});
                    _this.validated = false;
                }
            })
            .on('blur', function() {
                _this.instance = index;

                _this.stopCalling = true;
                _this.reinitAjaxVariables();
            })
            // Capture de l'évènement focus sur le champ complément pour lancer la recherche (uniquement si le champ est vide
            .on('focus', function() {
                _this.instance = index;

                if (cap.utils.getInputValue(_this.inputs[index].building) === '' && engine !== _this.engine.VERIF.name)
                {
                    _this[_this.step.BUILDING].search({instance: index});
                }
            });
        }

        if (cap.utils.inputExists(_this.inputs[index].additionalInfo))
        {
            _this.inputs[index].additionalInfo.on('keyup', function() {
                _this.instance = index;

                _this.propChoisie[index].buildingInfo_1 = _this.inputs[index].additionalInfo.val();
                _this.validated = false;
            });
        }
    });
};

/**
 * Fait appel à la fonction cap.utils.addDivError
 * sur tous les champs susceptibles de recevoir des messages
 *
 * @param {integer} formIndex Instance/formulaire dans lequel on se trouve
 */
cap.address.addDivError = function( formIndex )
{
    var _this = this;
    var i = cap.utils.isNum(formIndex) ? formIndex : 0;
    var inputs = _this.inputs[i];
    var settings = _this.settings[i];

    if (settings.errorMessages.showMessage)
    {
        if (inputs.line !== '')
        {
            cap.utils.addDivError(inputs.line, settings.errorMessages.position);
        }

        if (inputs.zipcity !== '')
        {
            cap.utils.addDivError(inputs.zipcity, settings.errorMessages.position);
        }

        if (inputs.zip !== '')
        {
            cap.utils.addDivError(inputs.zip, settings.errorMessages.position);
        }

        if (inputs.city !== '')
        {
            cap.utils.addDivError(inputs.city, settings.errorMessages.position);
        }

        if (inputs.street !== '')
        {
            cap.utils.addDivError(inputs.street, settings.errorMessages.position);
        }

        if (inputs.num !== '')
        {
            cap.utils.addDivError(inputs.num, settings.errorMessages.position);
        }
    }
};

/**
 * Permet de réintialiser les variables pour les appels Ajax
 *
 * @param  {string} step Etape dans laquelle on se trouve
 * @return {void}
 */
cap.address.reinitAjaxVariables = function()
{
    var _this = this;

    _this.appelAjax = null;
    _this.inProgress = false;
    _this.waitingCall = null;
};

/**
 * Permet de vérifier que le service web répond
 * On l'appelle dès l'initialisation pour éviter des appels superflus
 *
 * @return {void}
 */
cap.address.checkWebService = function()
{
    var _this = this;
    var settings = _this.settings[0];

    if (settings.path !== '')
    {
        $.ajax({
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            url: settings.path,
            timeout: settings.timeout,
            data: {
                request: 'GetMessage',
                languageCode: 'fr',
                messageCode: 0
            }
        })
        .fail(function(data) {

            if (cap.utils.nonDefini(data.statusText) === 'timeout')
            {
                _this.serviceDown();
            }
        });
    }
    else
    {
        _this.serviceDown();
    }
};

/**
 * Fonction appelée lorsque le service ne répond pas
 * Affiche un message et réactive tous les champs
 *
 * @param  {object}  options          Options de la fonction
 * @param  {integer} options.instance Index du formulaire dans lequel on se trouve
 * @return {void}
 */
cap.address.serviceDown = function( options )
{
    options = options || {};

    var _this = this;
    var end_loop = _this.nbInputs;
    var instance = cap.utils.isNum(options.instance) ? parseInt(options.instance) : 0;
    var i = 0;

    if (instance < end_loop)
    {
        i = instance;
        end_loop = instance + 1;
    }

    // On affiche le message dans la div
    _this.majDivError('Cap Address est momentanément indisponible');

    for (; i < end_loop; i++)
    {
        _this.serviceHS[i] = true;
        // On met l'étape de recherche à vide pour éviter d'appeler le service web
        _this.reinitStep({instance: i});
        // On réactive tous les champs
        _this.activerChamps({step: _this.step.LOCALITY, instance: i, disableFields: false});
        // On considère l'adresse en cours comme valide
        _this.updateAddressStatus({addressIndex: i, valid: true});
    }

    // On réinitialise tous les codes qualités
    _this.updateQualityCode();
    _this.updateExtendedQualityCode();
};

/**
 * Permet de réinitialiser les propositions choisies et les listes de propositions
 * Suivant l'étape dans laquelle on se trouve
 *
 * @param  {object}  options          Objet contenant les options
 * @param  {integer} options.instance Instance/formulaire dans lequel on se trouve
 * @param  {string}  options.step     Etape dans laquelle on se trouve
 *                                    Valeurs possibles : cploc | voie | num
 * @return {void}
 */
cap.address.reset = function( options )
{
    // On récupère les options passées en paramètres
    options = options || {};

    var _this = this;
    var disable_fields = false;
    var empty_fields = false;
    // On récupère l'index du formulaire dans lequel on se trouve (0 par défaut)
    var instance = cap.utils.isNum(options.instance) ? options.instance : 0;
    // On récupère les champs liés au formulaire dans lequel on se trouve
    var inputs = cap.utils.nonDefini(_this.inputs[instance]);
    // On récupère les paramètres liés au formulaire dans lequel on se trouve
    var settings = cap.utils.nonDefini(_this.settings[instance]);
    // On récupère le moteur lié au formulaire dans lequel on se trouve
    var engine = cap.utils.nonDefini(settings.engine);
    var reset_fields_options = {
        disableFields: disable_fields,
        emptyFields: empty_fields,
        instance: instance,
        step: _this.step.LOCALITY
    };
    // On récupère l'étape passée en paramètre
    var step = cap.utils.nonDefini(options.step);

    _this.serviceHS[instance] = false;

    _this.additionalInfoAlreadySearch[instance] = false;

    /**
     * Dès qu'on rentre dans cette fonction, c'est qu'on modifie le formulaire
     * Donc on fera un nouvel appel à la fonction de validation
     */
    _this.validated = false;

    // Si l'étape est vide, c'est qu'on revient à l'état initial du formulaire
    if (step === '')
    {
        _this.validated = true;

        // On réinitialise le champs cploc
        cap.utils.updateInputValue(inputs.zipcity);
        _this.resetInputStatus(inputs.zipcity);

        // On réinitialise le champs cp
        cap.utils.updateInputValue(inputs.zip);
        _this.resetInputStatus(inputs.zip);

        // On réinitialise le champs loc
        cap.utils.updateInputValue(inputs.city);
        _this.resetInputStatus(inputs.city);

        _this.majDivError();

        if (engine === _this.engine.VERIF.name || engine === _this.engine.LINE.name)
        {
            reset_fields_options.emptyFields = true;
            _this.resetFields(reset_fields_options);
        }

        step = _this.step.LOCALITY;
    }

    _this.reinitStep({instance: instance, step: step});

    if (step === _this.step.LOCALITY)
    {
        _this.streetPreSearched[instance] = settings.disableFields;

        if (engine !== _this.engine.LINE.name && engine !== _this.engine.VERIF.name && cap.utils.nonDefini(settings.disableFields))
        {
            empty_fields = true;
            disable_fields = true;
        }
    }
    else if (step === _this.step.STREET)
    {
        if (cap.utils.getInputValue(inputs.street) === '')
        {
            _this.resetInputStatus(inputs.street);
        }

        if (engine !== _this.engine.LINE.name && engine !== _this.engine.VERIF.name && cap.utils.nonDefini(settings.disableFields))
        {
            empty_fields = (cap.utils.getInputValue(inputs.street) === '');
            disable_fields = (cap.utils.getInputValue(inputs.street) === '');
        }
    }
    else if (step === _this.step.STREETNUM)
    {
        _this.numDejaTeste[instance] = false;

        if (cap.utils.inputExists(inputs.num))
        {
            _this.resetInputStatus(inputs.num);
        }

        // On détruit la liste, au cas où
        _this.destroyAutocomplete(inputs.building);
    }

    reset_fields_options.disableFields = disable_fields;
    reset_fields_options.emptyFields = empty_fields;
    reset_fields_options.step = step;
    _this.resetFields(reset_fields_options);
};

/**
 * Permet de réinitialiser l'étape dans laquelle on se trouve
 * Si jamais on resaisit dans le champ cploc après avoir été jusqu'au numéro, par exemple
 *
 * @param  {object}  options          Objet contenant les options
 * @param  {integer} options.instance Instance/formulaire dans lequel on se trouve
 * @param  {string}  options.step     Etape dans laquelle on se trouve
 *                                    Valeurs possibles : cploc | voie | num | l3
 * @return {void}
 */
cap.address.reinitStep = function( options )
{
    // On récupère les options passées en paramètres
    options = options || {};

    var _this = this;
    // On récupère l'index du formulaire passé en paramètre (0 par défaut)
    var instance = cap.utils.isNum(options.instance) ? options.instance : 0;
    // On récupère l'étape passée en paramètre
    var step = cap.utils.nonDefini(options.step);

    if (step === _this.step.LOCALITY)
    {
        _this.propChoisie[instance].step = _this.step.LOCALITY;
    }
    else if (step === _this.step.STREET)
    {
        _this.propChoisie[instance].step = _this.step.STREET;

        if (cap.utils.nonDefini(_this.propChoisie[instance].streetNumber) !== '')
        {
            _this.propChoisie[instance].streetNumber = '';
        }
    }
    else if (step === _this.step.STREETNUM)
    {
        _this.propChoisie[instance].step = _this.step.STREETNUM;
    }
    else if (step === _this.step.BUILDING)
    {
        _this.propChoisie[instance].step = _this.step.BUILDING;
    }
    else if (step === _this.step.UNDEFINED)
    {
        _this.propChoisie[instance].step = _this.step.UNDEFINED;
    }
    else if (cap.utils.nonDefini(_this.propChoisie[instance]) !== '')
    {
        _this.propChoisie[instance].step = '';
    }
};

/**
 * Permet d'initialiser l'objet cap.address.propChoisie
 *
 * @param  {integer} index Index du formulaire dans lequel on se trouve
 * @return {void}
 */
cap.address.initPropChoisie = function( index )
{
    var _this = this;
    var instance = cap.utils.isNum(index) ? parseInt(index) : 0;

    _this.propChoisie[instance] = {
        countryCode: _this.countryCode[instance],
        languageCode: 'fr'
    };
};

/**
 * Permet de vider la variable propChoisie suivant l'étape dans laquelle on se trouve
 *
 * @param  {object}  options          Objet contenant les options
 * @param  {integer} options.instance Instance/formulaire dans lequel on se trouve
 * @param  {string}  options.step     Etape dans laquelle on se trouve
 *                                    Valeurs possibles : cploc | voie | num | l3
 * @return {void}
 */
cap.address.reinitPropChoisie = function( options )
{
    // On récupère les options passées en paramètres
    options = options || {};

    var _this = this;
    // On récupère l'index du formulaire passé en paramètre (0 par défaut)
    var instance = cap.utils.isNum(options.instance) ? options.instance : 0;
    var pattern = '';
    var regex = '';
    // On récupère l'étape passée en paramètre
    var step = cap.utils.nonDefini(options.step);

    if (step === _this.step.LOCALITY)
    {
        pattern = /postalCode|locality|street|streetNumber|building|additionalInfo/;
    }
    else if (step === _this.step.STREET)
    {
        pattern = /street|streetNumber|building/;
    }
    else if (step === _this.step.STREETNUM)
    {
        pattern = /streetNumber/;
    }
    else if (step === _this.step.BUILDING)
    {
        pattern = /building(?!.*Info_1)/;
    }

    regex = new RegExp(pattern);

    $.each(_this.propChoisie[instance], function(index, value) {

        if (regex.test(index))
        {
            delete _this.propChoisie[instance][index];
        }
    });
};


/**
 * Permet de réinitialiser les champs du formulaire
 * en fonction de l'étape dans laquelle on se trouve
 *
 * @param  {object}  options               Objet contenant les options
 * @param  {boolean} options.disableFields Permet de savoir si on doit désactiver les champs ou non
 * @param  {boolean} options.emptyFields   Permet de savoir si on doit vider les champs ou non
 * @param  {integer} options.instance      Instance/formulaire dans lequel on se trouve
 * @param  {string}  options.step          Etape dans laquelle on se trouve
 *                                         Valeurs possibles : cploc | voie
 * @return {void}
 */
cap.address.resetFields = function( options )
{
    // On récupère les options passées en paramètres
    options = options || {};

    var _this = this;
    // Tableau contenant les champs qu'on veut vider/désactiver
    var fields_to_be_cleared = [];
    var fields_to_be_cleared_length = 0;
    var i;
    // On récupère l'option passée en paramètre permettant de savoir si on désactive ou non les champs (true par défaut)
    var disable_fields = cap.utils.isBoolean(options.disableFields) ? options.disableFields : true;
    // On récupère l'option passée en paramètre permettant de savoir si on vide ou non les champs (true par défaut)
    var empty_fields = cap.utils.isBoolean(options.emptyFields) ? options.emptyFields : true;
    // On récupère l'index du formulaire passé en paramètre (0 par défaut)
    var instance = cap.utils.isNum(options.instance) ? options.instance : 0;
    // On récupère les champs liés à l'index passé en paramètre
    var inputs = cap.utils.nonDefini(_this.inputs[instance]);
    // On récupère l'étape passée en paramètre
    var step = cap.utils.nonDefini(options.step);

    if (step === _this.step.LOCALITY)
    {
        fields_to_be_cleared = ['province', 'street', 'num', 'building', 'additionalInfo'];
    }
    else if (step === _this.step.STREET)
    {
        fields_to_be_cleared = ['num', 'building', 'additionalInfo'];
    }

    fields_to_be_cleared_length = fields_to_be_cleared.length;

    // On vide les champs et on les désactive
    for (i = 0; i < fields_to_be_cleared_length; i++)
    {
        if (cap.utils.inputExists(inputs[fields_to_be_cleared[i]]))
        {
            // On détruit la liste, au cas où
            _this.destroyAutocomplete(inputs[fields_to_be_cleared[i]]);

            _this.updateInputProperties(inputs[fields_to_be_cleared[i]], {disableField: disable_fields, emptyField: empty_fields});
            _this.resetInputStatus(inputs[fields_to_be_cleared[i]]);
        }
    }
};

/**
 * Permet de définir la base de données à utiliser pour les coordonnées XY
 *
 * @param {integer} instance   Index du formulaire dans lequel on se trouve
 * @param {integer} XYDatabase Base de données que l'on veut utiliser pour les coordonnées XY
 */
cap.address.setXYDatabase =  function( instance, XYDatabase )
{
    var _this = this;
    var i;
    var XY_database = parseInt(XYDatabase);

    if (cap.utils.isNum(instance) && instance >= 0 && instance < _this.nbInputs)
    {
        i = parseInt(instance);
    }
    else
    {
        return;
    }

    if (!cap.utils.isNum(XY_database) || (XY_database !== _this.XYDatabase.WSG84 && XY_database !== _this.XYDatabase.LAMBERT2 && XY_database !== _this.XYDatabase.LAMBERT93))
    {
        XY_database = _this.XYDatabase.WSG84;
    }

    _this.settings[i].XYDatabase = XY_database;
};

/**
 * Permet d'activer les champs en fonction de l'étape dans laquelle on est
 *
 * @param  {object}  options               Objet contenant les paramètres de la fonction
 * @param  {boolean} options.disableFields Permet de savoir si on doit activer tous les champs ou non
 * @param  {integer} options.instance      Instance/formulaire dans lequel on se trouve
 * @param  {string}  options.step          Etape dans laquelle on se trouve
 *                                         Valeur : cap.address.step.LOCALITY | cap.address.step.STREET
 * @return {void}
 */
cap.address.activerChamps = function( options )
{
    options = options || {};

    var _this = this;
    var disable_fields = cap.utils.isBoolean(options.disableFields) ? options.disableFields : true;
    var instance = cap.utils.isNum(options.instance) ? options.instance : 0;
    var inputs = _this.inputs[instance];
    var step = cap.utils.nonDefini(options.step);

    if (step === _this.step.LOCALITY)
    {
        if (cap.utils.inputExists(inputs.province))
        {
            inputs.province.prop('disabled', false);
        }

        if (cap.utils.inputExists(inputs.street))
        {
            inputs.street.prop('disabled', false);
        }

        if (cap.utils.inputExists(inputs.num))
        {
            inputs.num.prop('disabled', disable_fields);
        }

        if (cap.utils.inputExists(inputs.building))
        {
            inputs.building.prop('disabled', disable_fields);
        }

        if (cap.utils.inputExists(inputs.additionalInfo))
        {
            inputs.additionalInfo.prop('disabled', disable_fields);
        }
    }
    else if (step === _this.step.STREET)
    {
        if (cap.utils.inputExists(inputs.num))
        {
            inputs.num.prop('disabled', false);
        }

        if (cap.utils.inputExists(inputs.building))
        {
            inputs.building.prop('disabled', false);
        }

        if (cap.utils.inputExists(inputs.additionalInfo))
        {
            inputs.additionalInfo.prop('disabled', false);
        }
    }
};

/**
 * Permet de placer le focus sur le champ suivant
 *
 * @param  {object}  jQinput Input récupéré via $('.class') | $('#id') | $(this)
 * @return {void}
 */
cap.address.putFocusOnNextInput = function( jQinput )
{
    var _this = this;
    var instance = _this.instance;
    var inputs = _this.inputs[instance];
    var settings = _this.settings[instance];
    var $input = cap.utils.nonDefini(jQinput);
    var currentID = cap.utils.inputExists($input) ? $input.attr('id') : '';
    var $nextInput;

    if (currentID == settings.zipcity_ID || currentID == settings.zip_ID || currentID == settings.city_ID)
    {
        if (cap.utils.inputExists(inputs.street))
        {
            $nextInput = inputs.street;
        }
        else if (cap.utils.inputExists(inputs.num))
        {
            $nextInput = inputs.num;
        }
        else if (cap.utils.inputExists(inputs.building))
        {
            $nextInput = inputs.building;
        }
        else if (cap.utils.inputExists(inputs.additionalInfo))
        {
            $nextInput = inputs.additionalInfo;
        }
        else
        {
            $nextInput = $(':input:eq(' + ($(':input').index($input) + 1) + ')');
        }
    }
    else if (currentID == settings.street_ID)
    {
        if (cap.utils.inputExists(inputs.num))
        {
            $nextInput = inputs.num;
        }
        else if (cap.utils.inputExists(inputs.building))
        {
            $nextInput = inputs.building;
        }
        else if (cap.utils.inputExists(inputs.additionalInfo))
        {
            $nextInput = inputs.additionalInfo;
        }
        else
        {
            $nextInput = $(':input:eq(' + ($(':input').index($input) + 1) + ')');
        }
    }
    else if (currentID == settings.num_ID)
    {
        if (cap.utils.inputExists(inputs.building))
        {
            $nextInput = inputs.building;
        }
        else if (cap.utils.inputExists(inputs.additionalInfo))
        {
            $nextInput = inputs.additionalInfo;
        }
        else
        {
            $nextInput = $(':input:eq(' + ($(':input').index($input) + 1) + ')');
        }
    }
    else if (currentID == settings.building_ID)
    {
        if (cap.utils.inputExists(inputs.additionalInfo))
        {
            $nextInput = inputs.additionalInfo;
        }
        else
        {
            $nextInput = $(':input:eq(' + ($(':input').index($input) + 1) + ')');
        }
    }

    if (cap.utils.inputExists($nextInput) && ($nextInput.attr('type') == 'text' || $nextInput.attr('type') == 'password' || $nextInput.attr('type') == 'tel' || $nextInput.attr('type') == 'email'))
    {
        $nextInput.focus();
    }
};


/**
 * Permet de récupérer le champ selon l'étape dans laquelle on se trouve
 *
 * @param  {integer} instance Instance/formulaire dans lequel on se trouve
 * @param  {string}  etape    Etape dans laquelle on se trouve (localité, voie, numéro, complément)
 * @return {mixed}            L'objet jQuery du champ correspondant, sinon une chaîne vide
 */
cap.address.getInputByStep = function( instance, etape )
{
    var _this = this;
    var $input = '';
    var index = cap.utils.isNum(instance) ? instance : 0;
    var engine = cap.utils.nonDefini(_this.settings[index].engine);
    var inputs = _this.inputs[index];
    var step = cap.utils.nonDefini(etape);

    if (step === _this.step.LOCALITY)
    {
        // Si on n'a qu'un seul champ pour le cp et la loc
        if (cap.utils.inputExists(inputs.zipcity))
        {
            $input = inputs.zipcity;
        }
        // Sinon, ce sont deux champs séparés
        else
        {
            // Si on est sur le champ CP
            if (cap.utils.inputExists(inputs.zip) && inputs.zip.is(':focus'))
            {
                $input = inputs.zip;
            }
            // Sinon, si on est sur le champ Loc
            else if (cap.utils.inputExists(inputs.city) && inputs.city.is(':focus'))
            {
                $input = inputs.city;
            }
        }
    }
    else if (step === _this.step.STREET && cap.utils.inputExists(inputs.street) || (step === _this.step.CHECKNUM && !cap.utils.inputExists(inputs.num)))
    {
        $input = inputs.street;
    }
    else if ((step === _this.step.STREETNUM || step === _this.step.CHECKNUM) && cap.utils.inputExists(inputs.num))
    {
        $input = inputs.num;
    }
    else if (step === _this.step.BUILDING && cap.utils.inputExists(inputs.building))
    {
        $input = inputs.building;
    }
    else if (engine === _this.engine.LINE.name && cap.utils.inputExists(inputs.line))
    {
        $input = inputs.line;
    }

    return $input;
};

/**
 * Permet de récupérer la valeur du champ selon l'étape dans laquelle on se trouve
 *
 * @param {integer} instance Instance/formulaire dans lequel on se trouve
 * @param  {string} etape    Etape dans laquelle on se trouve (localité, voie, numéro, complément)
 * @return {string}          Valeur du champ correspondant, sinon une chaîne vide
 */
cap.address.getInputValueByStep = function( instance, etape )
{
    var _this = this;
    var index = cap.utils.isNum(instance) ? instance : 0;
    var input_value = '';
    var inputs = _this.inputs[index];
    var propChoisie = _this.propChoisie[index];
    var step = cap.utils.nonDefini(etape);

    if (step === _this.step.LOCALITY)
    {
        // Si on n'a qu'un seul champ pour le cp et la loc
        if (cap.utils.inputExists(inputs.zipcity))
        {
            input_value = cap.utils.getInputValue(inputs.zipcity);
        }
        // Sinon, ce sont deux champs séparés
        else
        {
            // Si on est sur le champ CP
            if (cap.utils.inputExists(inputs.zip) && inputs.zip.is(':focus'))
            {
                input_value = cap.utils.getInputValue(inputs.zip);
            }
            // Sinon, si on est sur le champ Loc
            else if (cap.utils.inputExists(inputs.city) && inputs.city.is(':focus'))
            {
                input_value = cap.utils.getInputValue(inputs.city);
            }
        }
    }
    else if (step === _this.step.STREET)
    {
        input_value = cap.utils.getInputValue(inputs.street);
    }
    else if (step === _this.step.STREETNUM || (step === _this.step.CHECKNUM && cap.utils.inputExists(inputs.num)))
    {
        input_value = cap.utils.getInputValue(inputs.num);
    }
    else if (step === _this.step.CHECKNUM)
    {
        input_value = cap.utils.nonDefini(_this.displayStreetNumber(cap.utils.nonDefini(propChoisie.streetNumber), cap.utils.nonDefini(propChoisie.streetNumberExt)));
    }
    else if (step === _this.step.BUILDING)
    {
        input_value = cap.utils.getInputValue(inputs.building);
    }

    return input_value;
};

/**
 * Permet de savoir si on lance la recherche même si inputOutput est vide
 *
 * @param  {integer} instance Instance/formulaire dans lequel on se trouve
 * @return {boolean}          True si on autorise la recherche avec inputOutput vide, false sinon
 */
cap.address.isEmptyValueAuthorized = function( instance )
{
    var _this = this;
    var index = cap.utils.isNum(instance) ? instance : 0;
    var is_empty_value_authorized = false;
    var engine = (cap.utils.nonDefini(_this.settings[index]) !== '') ? cap.utils.nonDefini(_this.settings[index].engine) : '';
    var step = (cap.utils.nonDefini(_this.propChoisie[index]) !== '') ? cap.utils.nonDefini(_this.propChoisie[index].step) : '';

    if (engine === _this.engine.VERIF.name || step === _this.step.STREET || step === _this.step.STREETNUM || step === _this.step.BUILDING || step === _this.step.ADDITIONAL_INFOS || step === _this.step.VALIDATE)
    {
        is_empty_value_authorized = true;
    }

    return is_empty_value_authorized;
};

/**
 * Permet de savoir si on NE DOIT PAS récupérer la première proposition
 * En fonction de l'étape dans laquelle on se trouve
 *
 * @param  {string}  etape Etape dans laquelle on se trouve
 * @return {boolean}       True si on NE DOIT PAS récupérer la première proposition, false sinon
 */
cap.address.dontGetFirstProp = function( etape )
{
    var _this = this;
    var dont_get_first_prop = false;
    var step = cap.utils.nonDefini(etape);

    if (step !== _this.step.CHECKNUM && step !== _this.step.VALIDATE && step !== _this.step.FORCED && step !== _this.step.ADDITIONAL_INFOS)
    {
        dont_get_first_prop = true;
    }

    return dont_get_first_prop;
};

/**
 * Permet de savoir si on doit faire une requête asynchrone ou non en fonction de l'étape
 * Car pour certaines étapes, on a besoin d'attendre la réponse de la requête
 *
 * @param  {string} etape Etape dans laquelle on se trouve
 * @return {boolean}      True si on fait une requête asynchrone, false sinon
 */
cap.address.doAsyncRequest = function( etape )
{
    var _this = this;
    var do_async_request = false;
    var step = cap.utils.nonDefini(etape);

    if (step !== _this.step.CHECKNUM && step !== _this.step.ADDITIONAL_INFOS)
    {
        do_async_request = true;
    }

    return do_async_request;
};



/**
 * Permet de vérifier si un pays est disponible ou non pour un moteur donné
 *
 * @param  {object}  options       Options de la fonction
 * @param  {integer} options.index Index du formulaire dans lequel on se trouve
 * @param  {string} options.engine Moteur défini dans les paramètres de l'application
 * @return {void}
 */
cap.address.isCountryAvailable = function( options )
{
    options = options || {};

    var _this = this;
    var index = cap.utils.isNum(options.index) ? parseInt(options.index) : 0;
    var country_code = _this.countryCode[index];
    var engine = cap.utils.nonDefini(options.engine);
    var engine_alias = '';
    var settings = cap.utils.nonDefini(_this.settings[index]);

    if (engine === _this.engine.LINE.name)
    {
        engine_alias = _this.engine.LINE.alias;
    }
    else if (engine === _this.engine.SAISIE.name)
    {
        engine_alias = _this.engine.SAISIE.alias;
    }
    else if (engine === _this.engine.VERIF.name)
    {
        engine_alias = _this.engine.VERIF.alias;
    }

    if (engine_alias !== '' && country_code !== '')
    {
        $.ajax({
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            url: settings.path,
            timeout: settings.timeout,
            data: {
                request: 'IsCountryAvailable',
                countryCode: country_code,
                engine: engine_alias
            }
        })
        .done(function(data) {

            if (parseInt(data.returnValue) < 0 || parseInt(data.isAvailable) === 0)
            {
                _this.serviceDown({instance: index});
            }
        })
        .fail(function(data) {

            if (cap.utils.nonDefini(data.statusText) === 'timeout')
            {
                _this.serviceDown({instance: instance});
            }
        });
    }
};



/**
 * Permet de préparer la recherche des localités
 * Récupère ce qui a été saisi et réinitialise les champs relatifs au couple CP / Loc
 *
 * @param  {object}  options          Objet contenant les options de la fonction
 * @param  {object}  options.event    Touche appuyée par l'utilisateur
 * @param  {integer} options.instance Index du formulaire sur lequel on se trouve
 * @return {void}
 */
cap.address.SearchLine.search = function( options )
{
    options = options || {};

    var _this = cap.address;
    var instance = cap.utils.isNum(options.instance) ? options.instance : 0;
    var inputs = cap.utils.nonDefini(_this.inputs[instance]);
    var $input = cap.utils.inputExists(inputs.line) ? inputs.line : '';
    var reset_options = {
        instance: instance,
        step: _this.step.UNDEFINED
    };
    var touche_autorisee = cap.utils.toucheAutorisee(cap.utils.nonDefini(options.event));

    _this.reinitStep({instance: instance, step: _this.step.UNDEFINED});

    if (touche_autorisee && !_this.serviceHS[instance])
    {
        _this.reset(reset_options);

        // Si on arrive ici, c'est qu'on saisi une nouvelle adresse donc on la considère comme invalide
        _this.updateAddressStatus({addressIndex: instance, valid: false});

        if (cap.utils.inputExists($input) && $input.val() === '')
        {
            _this.resetInputStatus($input);
            _this.destroyAutocomplete($input);

            _this.propositions = [];
            _this.autocompleteInit(instance);

            // On réinitialise la variable propChoisie car on fait une nouvelle saisie
            reset_options.step = _this.step.LOCALITY;
            _this.reinitPropChoisie(reset_options);

            // On réinitialise tout le formulaire car on fait ne nouvelle saisie
            // On remet step à vide pour tout vider
            reset_options.step = '';
            _this.reset(reset_options);
        }
        else
        {
            // On récupère ce qui a été saisi
            _this.propChoisie[instance].inputOutput = $input.val();
            _this.search({instance: instance, request: _this.engine.LINE.method});
        }
    }
};



/**
 * Permet de préparer la recherche des localités
 * Récupère ce qui a été saisi et réinitialise les champs relatifs au couple CP / Loc
 *
 * @param  {object}  options          Objet contenant les options de la fonction
 * @param  {object}  options.event    Touche appuyée par l'utilisateur
 * @param  {integer} options.instance Index du formulaire sur lequel on se trouve
 * @return {void}
 */
cap.address.SearchLocality.search = function( options )
{
    options = options || {};

    var _this = cap.address;
    var instance = cap.utils.isNum(options.instance) ? options.instance : 0;
    var inputs = cap.utils.nonDefini(_this.inputs[instance]);
    var $input = '';
    var reset_options = {
        instance: instance,
        step: _this.step.LOCALITY
    };
    var touche_autorisee = cap.utils.toucheAutorisee(cap.utils.nonDefini(options.event));

    _this.reinitStep({instance: instance, step: _this.step.LOCALITY});

    if (touche_autorisee && !_this.serviceHS[instance])
    {
        _this.reset(reset_options);
        _this.reinitPropChoisie(reset_options);

        // Si on arrive ici, c'est qu'on saisi une nouvelle adresse donc on la considère comme invalide
        _this.updateAddressStatus({addressIndex: instance, valid: false});

        // Si le champ Lieu-dit existe, on le vide
        if (cap.utils.inputExists(inputs.province))
        {
            inputs.province.val('');
        }

        if (cap.utils.inputExists(inputs.zipcity))
        {
            $input = inputs.zipcity;
        }
        else
        {
            // On a saisi dans le champ cp
            if (cap.utils.inputExists(inputs.zip) && inputs.zip.is(':focus'))
            {
                $input = inputs.zip;

                if (cap.utils.inputExists(inputs.city))
                {
                    _this.resetInputStatus(inputs.city);
                    inputs.city.val('');
                }
            }
            // On a saisi dans le champ Loc
            else if (cap.utils.inputExists(inputs.city) && inputs.city.is(':focus'))
            {
                $input = inputs.city;

                if (cap.utils.inputExists(inputs.zip))
                {
                    _this.resetInputStatus(inputs.zip);
                    inputs.zip.val('');
                }
            }
        }

        if (cap.utils.inputExists($input) && $input.val() === '')
        {
            _this.resetInputStatus($input);
            _this.destroyAutocomplete($input);

            _this.propositions = [];
            _this.autocompleteInit(instance);
        }
        else
        {
            // On récupère ce qui a été saisi
            _this.propChoisie[instance].inputOutput = $input.val();
            _this.search({instance: instance, request: _this.engine.SAISIE.method});
        }
    }
};

/**
 * Permet de préparer la recherche des voies
 * Récupère ce qui a été saisi et réinitialise les champs relatifs à la voie
 *
 * @param  {object}  options          Objet contenant les options de la fonction
 * @param  {object}  options.event    Touche appuyée par l'utilisateur
 * @param  {integer} options.instance Index du formulaire sur lequel on se trouve
 * @return {void}
 */
cap.address.SearchStreet.search = function( options )
{
    options = options || {};

    var _this = cap.address;
    var instance = cap.utils.isNum(options.instance) ? options.instance : 0;
    var inputs = cap.utils.nonDefini(_this.inputs[instance]);
    var locality_flags = parseInt(_this.propChoisie[instance].localityFlags);
    var locality_id = cap.utils.nonDefini(_this.propChoisie[instance].localityId);
    var $input = cap.utils.nonDefini(inputs.street);
    var reset_options = {
        instance: instance,
        step: _this.step.STREET
    };
    var touche_autorisee = cap.utils.toucheAutorisee(cap.utils.nonDefini(options.event));

    _this.reinitStep({instance: instance, step: _this.step.STREET});

    if (touche_autorisee && !_this.serviceHS[instance] && locality_id !== '' && locality_flags !== 3)
    {
        _this.reset(reset_options);
        _this.reinitPropChoisie(reset_options);

        // Si on arrive ici, c'est qu'on saisi une nouvelle adresse donc on la considère comme invalide
        _this.updateAddressStatus({addressIndex: instance, valid: false});

        // On récupère ce qui a été saisi
        _this.propChoisie[instance].inputOutput = $input.val();
        _this.search({instance: instance, request: _this.engine.SAISIE.method});
    }
    else if (touche_autorisee)
    {
        _this.propChoisie[instance].streetName = $input.val();
    }
};

/**
 * Permet de préparer la recherche des numéros de voie
 * Récupère ce qui a été saisi et réinitialise les champs relatifs au numéro de voie
 *
 * @param  {object}  options          Objet contenant les options de la fonction
 * @param  {object}  options.event    Touche appuyée par l'utilisateur
 * @param  {integer} options.instance Index du formulaire sur lequel on se trouve
 * @return {void}
 */
cap.address.SearchStreetNumber.search = function( options )
{
    options = options || {};

    var _this = cap.address;
    var instance = cap.utils.isNum(options.instance) ? options.instance : 0;
    var inputs = cap.utils.nonDefini(_this.inputs[instance]);
    var locality_flags = parseInt(_this.propChoisie[instance].localityFlags);
    var previous_step = cap.utils.nonDefini(_this.previousStep[instance]);
    var street_id = cap.utils.nonDefini(_this.propChoisie[instance].streetId);
    var $input = cap.utils.nonDefini(inputs.num);
    var reset_options = {
        instance: instance,
        step: _this.step.STREETNUM
    };
    var touche_autorisee = cap.utils.toucheAutorisee(cap.utils.nonDefini(options.event));

    if (_this.isCountryCodeFR(cap.utils.nonDefini(_this.countryCode[instance])))
    {
        _this.reinitStep({instance: instance, step: _this.step.STREETNUM});

        if (touche_autorisee && !_this.serviceHS[instance] && locality_flags !== 3 && street_id !== '')
        {
            _this.reset(reset_options);
            _this.reinitPropChoisie(reset_options);

            _this.numDejaTeste[instance] = false;

            // Si on arrive ici, c'est qu'on saisi une nouvelle adresse donc on la considère comme invalide
            _this.updateAddressStatus({addressIndex: instance, valid: false});

            // On récupère ce qui a été saisi
            _this.propChoisie[instance].inputOutput = $input.val();
            _this.search({instance: instance, request: _this.engine.SAISIE.method});
        }
        else if (touche_autorisee)
        {
            _this.propChoisie[instance].streetNumber = $input.val();
            _this.validated = false;
        }
    }
    else if (touche_autorisee)
    {
        _this.reinitStep({instance: instance, step: _this.step.CHECKNUM});
        _this.numDejaTeste[instance] = false;
        _this.propChoisie[instance].streetNumber = $input.val();
        _this.validated = false;
    }
};

/**
 * Permet de préparer la vérification des numéros de voie
 * Récupère ce qui a été saisi et réinitialise les champs relatifs au numéro de voie
 *
 * @param  {object}  options          Objet contenant les options de la fonction
 * @param  {object}  options.event    Touche appuyée par l'utilisateur
 * @param  {integer} options.instance Index du formulaire sur lequel on se trouve
 * @return {void}
 */
cap.address.CheckStreetNumber.search = function( options )
{
    options = options || {};

    var _this = cap.address;
    var instance = cap.utils.isNum(options.instance) ? options.instance : 0;
    var inputs = cap.utils.nonDefini(_this.inputs[instance]);
    var locality_flags = parseInt(_this.propChoisie[instance].localityFlags);
    var street_id = cap.utils.nonDefini(_this.propChoisie[instance].streetId);
    var $input = cap.utils.nonDefini(inputs.num);
    var touche_autorisee = cap.utils.toucheAutorisee(cap.utils.nonDefini(options.event));

    if (touche_autorisee && !_this.serviceHS[instance] && locality_flags !== 3 && street_id !== '')
    {
        // Si on arrive ici, c'est qu'on saisi une nouvelle adresse donc on la considère comme invalide
        _this.updateAddressStatus({addressIndex: instance, valid: false});

        _this.numDejaTeste[instance] = true;

        // On récupère ce qui a été saisi
        if (cap.utils.inputExists($input))
        {
            _this.propChoisie[instance].inputOutput = $input.val();
        }
        else if (cap.utils.nonDefini(_this.propChoisie[instance].streetNumber) !== '')
        {
            _this.propChoisie[instance].inputOutput = _this.propChoisie[instance].streetNumber + cap.utils.nonDefini(_this.propChoisie[instance].streetNumberExt);
        }

        _this.search({instance: instance, request: _this.engine.SAISIE.method, formID: cap.utils.nonDefini(options.formID)});
    }
    else if (touche_autorisee && cap.utils.inputExists($input))
    {
        _this.propChoisie[instance].streetNumber = $input.val();
    }
};

/**
 * Permet de préparer la recherche des bâtiments
 * Récupère ce qui a été saisi et réinitialise les champs relatifs au bâtiment
 *
 * @param  {object}  options          Objet contenant les options de la fonction
 * @param  {object}  options.event    Touche appuyée par l'utilisateur
 * @param  {integer} options.instance Index du formulaire sur lequel on se trouve
 * @return {void}
 */
cap.address.SearchBuilding.search = function( options )
{
    options = options || {};

    var _this = cap.address;
    var instance = cap.utils.isNum(options.instance) ? options.instance : 0;
    var inputs = cap.utils.nonDefini(_this.inputs[instance]);
    var locality_flags = parseInt(_this.propChoisie[instance].localityFlags);
    var previous_step = cap.utils.nonDefini(_this.previousStep[instance]);
    var street_id = cap.utils.nonDefini(_this.propChoisie[instance].streetId);
    var $input = cap.utils.nonDefini(inputs.building);
    var reset_options = {
        instance: instance,
        step: _this.step.BUILDING
    };
    var touche_autorisee = cap.utils.toucheAutorisee(cap.utils.nonDefini(options.event), false);

    if (previous_step === _this.step.BUILDING || _this.propChoisie[instance].step === _this.step.BUILDING)
    {
        _this.reinitStep(reset_options);

        if (touche_autorisee && !_this.serviceHS[instance] && locality_flags !== 3 && street_id !== '')
        {
            _this.reset(reset_options);
            _this.reinitPropChoisie(reset_options);

            // Si on arrive ici, c'est qu'on saisi une nouvelle adresse donc on la considère comme invalide
            _this.updateAddressStatus({addressIndex: instance, valid: false});

            // On récupère ce qui a été saisi
            _this.propChoisie[instance].inputOutput = $input.val();
            _this.search({instance: instance, request: _this.engine.SAISIE.method});
        }
        else if (touche_autorisee)
        {
            _this.propChoisie[instance].buildingName = $input.val();
            _this.validated = false;
        }
    }
    else if (touche_autorisee)
    {
        _this.propChoisie[instance].buildingName = $input.val();
        _this.validated = false;
    }
};

/**
 * Permet de préparer la vérification des numéros de voie
 * Récupère ce qui a été saisi et réinitialise les champs relatifs au numéro de voie
 *
 * @param  {object}  options          Objet contenant les options de la fonction
 * @param  {object}  options.event    Touche appuyée par l'utilisateur
 * @param  {integer} options.instance Index du formulaire sur lequel on se trouve
 * @return {void}
 */
cap.address.SearchAdditionalInfo.search = function( options )
{
    options = options || {};

    var _this = cap.address;
    var instance = cap.utils.isNum(options.instance) ? options.instance : 0;

    if (!_this.serviceHS[instance])
    {
        _this.additionalInfoAlreadySearch[instance] = true;

        // On n'a pas besoin de inputOutput pour cette recherche
        // Donc au cas où, on vide
        _this.propChoisie[instance].inputOutput = '';

        _this.search({instance: instance, request: _this.engine.SAISIE.method, formID: cap.utils.nonDefini(options.formID)});
    }
    else
    {
        _this.validated = false;
    }
};


/**
 * Fonction appelée à chaque étape de la recherche
 * La recherche est effectuée en fonction du moteur choisi
 *  - saisie : lors d'une saisie dans un champ
 *  - verif : lors de la validation du formulaire
 *
 * @param  {object}  options          Objet contenant les paramètres de la fonction
 * @param  {integer} options.instance Instance/formulaire dans lequel on se trouve
 * @param  {object}  options.event    Objet correspondant à la touche appuyée par l'utilisateur
 * @return {void}
 */
cap.address.search = function( options )
{
    options = options || {};

    var _this = this;
    var instance = cap.utils.isNum(options.instance) ? options.instance : 0;
    var settings = cap.utils.nonDefini(_this.settings[instance]);
    var engine = cap.utils.nonDefini(settings.engine);
    var step = cap.utils.nonDefini(_this.propChoisie[instance].step);
    var request = cap.utils.nonDefini(options.request);
    var url_params = '';

    // $.param permet de transformer un objet JS en une chaîne de caractères
    // qui sera utilisée pour faire des requêtes GET
    url_params = $.param(_this.propChoisie[instance]);

    if (request !== '')
    {
        url_params += (url_params !== '') ? '&' : '?';
        url_params += 'request=' + request;
    }

    if (request !== '' && (_this.propChoisie[instance].inputOutput !== '' || _this.isEmptyValueAuthorized(instance)))
    {
        _this.stopCalling = false;

        // Appel ajax (via jQuery)
        _this.appelAjax = function()
        {
            $.ajax({
                async: _this.doAsyncRequest(step),
                dataType: 'jsonp',
                jsonp: 'jsoncallback',
                url: settings.path,
                timeout: settings.timeout,
                data: url_params
            })
            .done(function(data) {

                if (parseInt(data.returnValue) < 0)
                {
                    _this.serviceDown({instance: instance});
                }
                else if (request === _this.engine.SAISIE.method || request === _this.engine.LINE.method || step === _this.step.VALIDATE)
                {
                    _this.list({instance: instance, response: data, formID: cap.utils.nonDefini(options.formID)});
                }
                else if (request === _this.engine.VERIF.method)
                {
                    _this.check({instance: instance, response: data, formID: cap.utils.nonDefini(options.formID)});
                }
            })
            .fail(function(data) {

                if (cap.utils.nonDefini(data.statusText) === 'timeout')
                {
                    _this.serviceDown({instance: instance});
                }
            });
        };

        if (!_this.inProgress)
        {
            _this.inProgress = true;
            // Appel ajax (via jQuery)
            _this.appelAjax();
        }
        else
        {
            _this.waitingCall = function()
            {
                _this.inProgress = true;
                _this.appelAjax();
            };
        }
    }
};

/**
 * Affichage des listes de propositions
 * Pour l'aide à la saisie
 *
 * @param  {object}  options          Objet contenant les paramètres de la fonction
 * @param  {integer} options.instance Instance/formulaire dans lequel on se trouve
 * @param  {object}  options.response Réponse envoyée par le service web
 * @return {void}
 */
cap.address.list = function( options )
{
    options = options || {};

    var _this = this;
    var instance = cap.utils.nonDefini(options.instance);
    var response = cap.utils.nonDefini(options.response);
    // Récupération des paramètres (pour tester de manière plus simple par la suite)
    var settings = cap.utils.nonDefini(_this.settings[instance]);
    var step = cap.utils.nonDefini(_this.propChoisie[instance].step);
    // On récupère le champ dans lequel on se trouve
    var $input = _this.getInputByStep(instance, step);
    var firstIndex = 'addresses';
    var secondIndex = 'address';
    // Variable contenant toutes les propositions (pour que ce soit plus simple à utiliser que response[firstIndex][secondIndex])
    var propositions = {};
    // Nombre de propositions retournées par le service web
    var nb_propositions = 0;
    // Récupération de la valeur de retour
    var return_value = parseInt(response.returnValue);
    // Contenu du champ Voie
    var street_input = '';
    // Voie retournée par le service web
    var street_proposition = '';

    if (return_value > 0 && $input !== '')
    {
        _this.addErrorStatus({input: $input, instance: instance, returnValue: return_value});
    }
    else if (return_value === 0 && $input !== '')
    {
        _this.resetInputStatus($input);
    }

    _this.propositions = [];

    if (cap.utils.nonDefini(response[firstIndex]) !== '' && cap.utils.nonDefini(response[firstIndex][secondIndex]) !== '')
    {
        propositions = response[firstIndex][secondIndex];
        nb_propositions = propositions.length;

        options.propositions = propositions;
        options.instance = instance;
        options.$input = $input;

        if (_this.dontGetFirstProp(step))
        {
            if (!_this.stopCalling)
            {
                if (step === _this.step.LOCALITY && nb_propositions === 2 && cap.utils.nonDefini(propositions[0].step) !== _this.step.FORCED)
                {
                    _this.reinitAjaxVariables();
                    _this.stopCalling = false;
                    _this.choisirProposition({address: propositions[0], instance: instance, formID: cap.utils.nonDefini(options.formID)});
                }
                else if (step === _this.step.STREET && nb_propositions === 2 && cap.utils.nonDefini(propositions[0].step) !== _this.step.FORCED && !_this.streetPreSearched[instance])
                {
                    _this.streetPreSearched[instance] = true;

                    if ($input !== '')
                    {
                        street_input = $input.val().toUpperCase();
                    }

                    street_proposition = _this.displayCompleteStreet({address: propositions[0], instance: instance});

                    if (street_input !== '' && street_proposition !== '' && street_input === street_proposition)
                    {
                        _this.reinitAjaxVariables();
                        _this.stopCalling = false;
                        _this.choisirProposition({address: propositions[0], instance: instance, formID: cap.utils.nonDefini(options.formID)});
                    }
                    else
                    {
                        _this.genererPropositions(options);
                    }
                }
                else if (step === _this.step.STREET && nb_propositions === 1 && cap.utils.nonDefini(propositions[0].step) === _this.step.FORCED && $input !== '' && !_this.streetPreSearched[instance])
                {
                    _this.streetPreSearched[instance] = true;

                    _this.reinitAjaxVariables();
                    _this.stopCalling = false;
                    $input.val('');
                }
                else
                {
                    _this.genererPropositions(options);
                }

            }
            else if (_this.inProgress)
            {
                _this.reinitAjaxVariables();
                _this.stopCalling = false;
            }
        }
        else if (propositions[0])
        {
            _this.reinitAjaxVariables();
            _this.stopCalling = false;
            _this.choisirProposition({address: propositions[0], instance: instance, formID: cap.utils.nonDefini(options.formID)});
        }
    }
    else
    {
        _this.reinitAjaxVariables();
        _this.stopCalling = false;
    }
};

cap.address.genererPropositions = function( options )
{
    options = options || {};

    var _this = this;
    var $input = cap.utils.nonDefini(options.$input);
    var instance = cap.utils.nonDefini(options.instance);
    // Variable contenant chaque proposition
    var proposition = {};
    // Pour l'affichage dans la liste des propositions
    var proposition_value = '';
    // Variable contenant toutes les propositions (pour que ce soit plus simple à utiliser que response[firstIndex][secondIndex])
    var propositions = cap.utils.nonDefini(options.propositions);
    var step = cap.utils.nonDefini(options.step);
    var Address = '';

    $.each(propositions, function(index, value) {

        if (cap.utils.nonDefini(value.step) !== _this.step.FORCED && cap.utils.nonDefini(value.inputOutput) !== '')
        {
            Address = value;
            proposition_value = value.inputOutput;
            proposition = {
                value: proposition_value,
                label: proposition_value,
                Address: Address
            };

            _this.propositions.push(proposition);
        }
        else
        {
            _this.updatePropChoisie({address: value, instance: instance, resetStep: false});
        }
    });

    if ($input !== '')
    {
        if ($input.autocomplete('instance'))
        {
            $input.autocomplete('option', {
                source: _this.propositions
            }).autocomplete('search', '');
        }
        else
        {
            _this.autocompleteInit(instance);
            $input.autocomplete('search', '');
        }

        if (_this.inProgress)
        {
            _this.inProgress = false;

            if (_this.waitingCall)
            {
                _this.waitingCall();
                _this.waitingCall = null;
            }
        }
    }
};

/**
 * Affichage de la popup des adresses
 * Pour la vérification
 *
 * @param  {object}  options          Options de la fonction
 * @param  {integer} options.instance Formulaire dans lequel on se trouve
 * @param  {object}  options.response Réponse renvoyée par le service web
 * @return {void}
 */
cap.address.check = function( options )
{
    options = options || {};

    var _this = this;
    var instance = cap.utils.isNum(options.instance) ? parseInt(options.instance) : 0;
    var response = cap.utils.nonDefini(options.response);
    var popupFormAdresse = '';
    // Adresse(s) renvoyée(s) par le service
    var adresses = {};
    // Premier index du tableau de réponse
    var firstIndex = 'addresses';
    // Deuxième index du tableau de réponse
    var secondIndex = 'address';
    // Adresse saisie par l'utilisateur
    var recapAdresse = '';
    // Code retour du service
    var codeRetour = '';
    // Variables pour la popup
    var popup_content = '';
    var dialogOptions = {
        closeText: 'X',
        resizable: false,
        autoOpen: false,
        height: 'auto',
        width: 650,
        modal: true,
        draggable: false,
        open: function()
        {
            var $popup = $(this);
            var $li;
            $('.ui-widget-overlay').on('click', function() {
                $popup.dialog('close');
            });
            $('.cap-popup__result-item').on('click', function(event) {
                $li = $(this);
                $('.cap-popup__radio').prop('checked', false);
                $li.find('.cap-popup__radio').prop('checked', true);
                $('.cap-popup__result-item').removeClass('cap-popup__result-item__selected');
                $li.addClass('cap-popup__result-item__selected');
            });
        },
        close: function()
        {
            // On remet la variable à false pour pouvoir relancer l'appel
            _this.called = false;
        }
    };

    _this.inProgress = false;

    if (cap.utils.nonDefini(response[firstIndex]) !== '' && cap.utils.nonDefini(response[firstIndex][secondIndex]) !== '')
    {
        adresses = response[firstIndex][secondIndex];
    }

    // On reconstruit l'adresse saisie, sur une seule ligne
    recapAdresse = _this.getInputAddress();

    if (cap.utils.nonDefini(adresses[0]) !== '' && cap.utils.nonDefini(adresses[0].extendedQualityCode) !== '')
    {
        codeRetour = adresses[0].extendedQualityCode;
    }

    // Si l'adresse est litigieuse, on affiche la popup
    if (_this.isAddressLitigious(codeRetour))
    {
        // Construction de la popup
        popup_content += _this.construitPopupHeader({recapAdresse: recapAdresse, nbAdresses: adresses.length});
        popup_content += _this.construitPopupContent(adresses);
        // On ferme les balises ouvertes dans la fonction construitPopupHeader()
        popup_content += '</div></form>';

        $('#cap-popup-form-adresse').html(popup_content);
        dialogOptions.title = 'Voulez-vous valider votre adresse (ou une de la liste) ou modifier votre saisie ?';
        dialogOptions.buttons = [
            {
                text: 'Modifier',
                class: 'cap-popup__button',
                click: function() {
                    $(this).dialog('close');
                }
            },
            {
                text: 'Valider',
                class: 'cap-popup__button-confirm',
                click: function() {
                    _this.checkAdresseSelected({instance: instance, formID: cap.utils.nonDefini(options.formID)});
                }
            }
        ];

        popupFormAdresse = $('#cap-popup-form-adresse').dialog(dialogOptions);
        popupFormAdresse.dialog('open');

        $(window).resize(function() {
            popupFormAdresse.dialog('option', 'position', {my: 'center', at: 'center', of: window});
        });
    }
    // Si l'adresse est valide, on valide tout
    else if (_this.isAddressValid(codeRetour))
    {
        /**
         * Lorsqu'on passe ici, la popup ne s'ouvre pas et, par conséquent, ne se ferme pas
         * Donc la variable 'called' reste à 'true'
         * Donc on la repasse à 'false' pour pouvoir revérifier l'adresse et afficher la popup
         */
        _this.called = false;
        _this.choisirProposition({address: adresses[0], instance: instance, formID: cap.utils.nonDefini(options.formID)});
    }
    // L'adresse est rejetée, on affiche une popup de confirmation
    else if (_this.isAddressInvalid(codeRetour))
    {
        popup_content += _this.construitPopupHeader({recapAdresse: recapAdresse, nbAdresses: adresses.length, error: true});

        $('#cap-popup-form-adresse').html(popup_content);
        dialogOptions.title = 'Voulez-vous conserver votre adresse ou la modifier ?';
        dialogOptions.buttons = [
            {
                text: 'Modifier',
                class: 'cap-popup__button',
                click: function()
                {
                    $(this).dialog('close');
                }
            },
            {
                text: 'Conserver',
                class: 'cap-popup__button-confirm',
                click: function()
                {
                    // Validation de la page
                    $(this).dialog('close');

                    // On remodifie le CQA
                    if (cap.utils.nonDefini(adresses[0].extendedQualityCode) !== '')
                    {
                        // Voie non trouvée ou vide
                        if (parseInt(adresses[0].extendedQualityCode.charAt(6)) === 2)
                        {
                            adresses[0].qualityCode = '42';
                        }
                    }

                    _this.choisirProposition({address: adresses[0], instance: instance, formID: cap.utils.nonDefini(options.formID)});
                }
            }
        ];

        popupFormAdresse = $('#cap-popup-form-adresse').dialog(dialogOptions);
        popupFormAdresse.dialog('open');

        $(window).resize(function() {
            popupFormAdresse.dialog('option', 'position', {my: 'center', at: 'center', of: window});
        });
    }
};

/**
 * Permet de vérifier l'adresse sélectionnée dans la popup
 *
 * @param  {object}  options          Options de la fonction
 * @param  {integer} options.instance Formulaire dans lequel on se trouve
 * @return {void}
 */
cap.address.checkAdresseSelected = function( options )
{
    options = options || {};

    var _this = cap.address;
    var $dialog = $('.ui-dialog');
    var $dialog_titlebar = $dialog.find('.ui-dialog-titlebar');
    var $dialog_title = $dialog_titlebar.find('.ui-dialog-title');
    var $popup = $('#cap-popup-form-adresse');
    var $form = $popup.find('form');
    var instance = cap.utils.isNum(options.instance) ? parseInt(options.instance) : 0;
    // On récupère la valeur du radio bouton qui a été choisi
    var adresseIndex = parseInt($form.find('input[name=cap-popup-adresse_rbt]:checked').val());
    // Variable qui contiendra la valeur du select
    var valeur = '';
    // Variable qui contiendra le numéro choisi dans la liste
    var listStreetNumber = '';
    // Variable pour l'expression régulière permettant de tester si le numéro choisi correspond
    var regexp = '';
    // Variable qui contiendra le select de la liste des numéros
    var select = '';
    // Variable qui contiendra l'input text du numéro de voie
    var numChoisi = '';
    // Variable qui contiendra le numéro
    var streetNumber = '';

    // On remet le step à Validate pour qu'on valide l'adresse finale
    _this.propChoisie[instance].step = _this.step.VALIDATE;

    if (adresseIndex === -99)
    {
        // On récupère l'adresse qui a été saisie
        _this.propChoisie[instance].qualityCode = _this.qualityCodes.STREET_FORCED;

        $popup.dialog('close');

        _this.choisirProposition({address: _this.propChoisie[instance], instance: instance, formID: cap.utils.nonDefini(options.formID)});
    }
    else
    {
        _this.propChoisie[instance] = cap.utils.nonDefini(_this.propositions[adresseIndex]);

        /**
         * Si listStreetNumber existe, on le supprime car on n'en a plus besoin
         * Ca permet de garder un objet JS 'propre'
         */
        if (cap.utils.nonDefini(_this.propChoisie[instance].listStreetNumber) !== '')
        {
            delete _this.propChoisie[instance].listStreetNumber;
        }

        // On récupère le select qui contient la liste des numéros
        select = document.getElementById('ListeBox'+adresseIndex);
        // On récupère l'input text qui contient le numéro de voie
        numChoisi = $form.find('input[name="streetNumber'+adresseIndex+'"]');

        // On a choisi un numéro dans une liste déroulante
        if (select !== null)
        {
            // On récupère la valeur du 'select'
            valeur = select.options[select.selectedIndex].value;

            // Si le numéro saisi est un nombre et qu'il dépasse 4 caractères alors le numéro n'est pas valide
            if (!isNaN(valeur) && valeur.length > 4)
            {
                $dialog_titlebar.removeClass('cap-popup-success').addClass('cap-popup-error');
                $dialog_title.html('Le numéro de voie ne peut dépasser 4 caractères');
                return false;
            }
            // Si le numéro saisi n'est pas un nombre (il possède un complément) et qu'il dépasse 5 caractères alors le numéro n'est pas valide
            else if (isNaN(valeur) && valeur.length > 5)
            {
                $dialog_titlebar.removeClass('cap-popup-success').addClass('cap-popup-error');
                $dialog_title.html('Le numéro de voie plus le complément <br> ne peuvent dépasser 5 caractères');
                return false;
            }
            // Le numéro choisi est valide
            else
            {
                streetNumber = valeur.toUpperCase();
            }
        }
        else if (cap.utils.nonDefini(numChoisi) !== '')
        {
            streetNumber = numChoisi.val();
        }

        // Sauvegarde du numéro de voie
        _this.propChoisie[instance].streetNumber = streetNumber;

        $popup.dialog('close');

        _this.choisirProposition({address: _this.propChoisie[instance], instance: instance, formID: cap.utils.nonDefini(options.formID)});
    }
};

/**
 * Permet de savoir si l'adresse est valide ou non
 *
 * @param  {string}  codeRetour Code retour de l'adresse
 * @return {boolean}            True si l'adresse est valide, false sinon
 */
cap.address.isAddressValid = function( codeRetour )
{
    var return_code = cap.utils.nonDefini(codeRetour);
    var valid_address = false;
    // Récupération du premier caractère du code retour
    var return_code_first_char = parseInt(return_code.charAt(0));

    // Si le code retour vaut 0 ou 1, l'adresse est validée/corrigée
    if (return_code_first_char === 0 || return_code_first_char === 1)
    {
        valid_address = true;
    }

    return valid_address;
};

/**
 * Permet de savoir si l'adresse est litigieuse ou non
 * Il y a donc des propositions d'adresses
 *
 * @param  {string}  codeRetour Code retour de l'adresse
 * @return {boolean}            True si l'adresse est litigieuse, false sinon
 */
cap.address.isAddressLitigious = function( codeRetour )
{
    var return_code = cap.utils.nonDefini(codeRetour);
    var uncertain_address = false;
    // Récupération du premier caractère du code retour
    var return_code_first_char = parseInt(return_code.charAt(0));
    // Récupération du troisième caractère du code retour
    var return_code_third_char = parseInt(return_code.charAt(2));

    /**
     * Si le code retour à la position 0 est différent de 0 et différent de 1 et différent de 4, ça veut dire que l'adresse est incorrecte ou litigieuse
     * Si le code retour à la position 2 est différent de X et différent de 0 et différent de 4 et différent de 6, ça veut dire que le numéro est invalide
     * Donc on construit la popup
     */
    if ((return_code_first_char !== 0 && return_code_first_char !== 1 && return_code_first_char !== 4) || (cap.utils.nonDefini(return_code.charAt(2)) !== 'X' && return_code_third_char !== 0 && return_code_third_char !== 4 && return_code_third_char !== 6))
    {
        uncertain_address = true;
    }

    return uncertain_address;
};

/**
 * Permet de savoir si l'adresse est rejetée ou non
 *
 * @param  {string}  codeRetour Code retour de l'adresse
 * @return {boolean}            True si l'adresse est rejetée, false sinon
 */
cap.address.isAddressInvalid = function( codeRetour )
{
    var return_code = cap.utils.nonDefini(codeRetour);
    var wrong_address = false;

    // Le code retour vaut 4 donc l'adresse est rejetée
    if (parseInt(return_code.charAt(0)) === 4)
    {
        wrong_address = true;
    }

    return wrong_address;
};

/**
 * Fonction appelée lors du choix d'une proposition
 *
 * @param  {object}  options          Objet contenant les paramètres de la fonction
 * @param  {object}  options.address  Objet contenant les informations de la proposition choisie
 * @param  {object}  options.event    Touche appuyée par l'utilisateur
 * @param  {integer} options.instance Instance/formulaire dans lequel on se trouve
 * @return {void}
 */
cap.address.choisirProposition = function( options )
{
    options = options || {};

    var _this = this;
    var address = cap.utils.nonDefini(options.address);
    var address_step = cap.utils.nonDefini(address.step);
    var disable_fields = (parseInt(address.localityFlags) !== 3);
    var event = cap.utils.nonDefini(options.event);
    var instance = cap.utils.isNum(options.instance) ? options.instance : 0;
    var inputs = cap.utils.nonDefini(_this.inputs[instance]);
    var prop_choisie = cap.utils.nonDefini(_this.propChoisie[instance]);
    // Récupération des paramètres (pour tester de manière plus simple par la suite)
    var settings = cap.utils.nonDefini(_this.settings[instance]);
    var step = cap.utils.nonDefini(prop_choisie.step);
    // On récupère le champ dans lequel on se trouve
    var $input = _this.getInputByStep(instance, step);
    var engine = cap.utils.nonDefini(settings.engine);

    // On sauvegarde l'étape précédente
    _this.previousStep[instance] = step;

    /**
     * On ajoute un contour de succès et on efface le message d'erreur
     * Uniquement sur les champs cploc, voie et numéro de voie
     * Et uniquement si on ne force pas l'adresse ou qu'on ne valide pas l'adresse
     */
    // Si jamais il s'agit du champ cp ou du champ loc, on met un contour sur les deux
    if (cap.utils.inputExists($input) && ($input.attr('id') === settings.zip_ID || $input.attr('id') === settings.city_ID))
    {
        _this.addSuccessStatus({input: inputs.zip, instance: instance});
        _this.addSuccessStatus({input: inputs.city, instance: instance});
    }
    else if (cap.utils.inputExists($input) && $input.attr('id') === settings.street_ID && !cap.utils.inputExists(inputs.num) && (cap.utils.nonDefini(address.qualityCode) === _this.qualityCodes.NUM_FORCED || cap.utils.nonDefini(address.qualityCode) === _this.qualityCodes.NUM_FORCED_BIS))
    {
        _this.addWarningStatus({input: $input, instance: instance});
    }
    else if (cap.utils.inputExists($input))
    {
        if ($input.attr('id') === settings.num_ID && cap.utils.nonDefini(address.qualityCode) !== _this.qualityCodes.VALID)
        {
            _this.addErrorStatus({input: $input, instance: instance});
        }
        else
        {
            _this.addSuccessStatus({input: $input, instance: instance});
        }
    }

    // On remplit le champ cploc (ou cp et loc s'ils sont séparés)
    // Et aussi le champ lieudit s'il existe (sinon, le lieudit sera mis entre parenthèses à la suite de la localité)
    _this.updateLocalityValue(address, instance);

    /**
     * Remplissage des champs
     * Uniquement si on n'a pas choisi la vérif
     */
    if (engine !== _this.engine.VERIF.name)
    {
        // On met à jour le champ Voie (+ le champ Numéro de voie s'il existe)
        _this.updateStreetValue(address, instance);
        // On met à jour le champ Complément 1
        cap.utils.updateInputValue(inputs.building, cap.utils.nonDefini(address.buildingName));

        if (cap.utils.nonDefini(settings.disableFields))
        {
            // On active les champs suivants
            _this.activerChamps({instance: instance, step: step, disableFields: disable_fields});
        }
    }

    // On met à jour la variable propChoisie
    _this.updatePropChoisie({address: address, instance: instance});

    // On réinitialise le step à ValidateForm après l'appel à SearchAdditionalInfo
    // Car le step renvoyé après cet appel vaut FinalAddress or, on veut pouvoir lancer l'étape ValidateForm tout de suite après.
    if (_this.previousStep[instance] === _this.step.ADDITIONAL_INFOS)
    {
        _this.updateAdditionalInfosValues(address, instance);
        address_step = _this.step.VALIDATE;
        _this.propChoisie[instance].step = address_step;
    }

    if ((address_step === _this.step.VALIDATE || address_step === _this.step.FORCED) && cap.utils.nonDefini(options.formID) !== '')
    {
        _this.validateAddress(instance, options.formID);
    }

    if (address_step === _this.step.FINAL)
    {
        _this.updateForm(address, instance);
        _this.updateAddressStatus({addressIndex: instance, valid: true});
        _this.validateAddress(instance, cap.utils.nonDefini(options.formID));
    }

    if (cap.utils.nonDefini(event) !== '')
    {
        event.preventDefault();
    }

    if (address_step === _this.step.STREET && cap.utils.getInputValue(inputs.street) !== '')
    {
        inputs.street.focus();
        _this[_this.step.STREET].search({instance: instance});
    }

    if (address_step === _this.step.STREETNUM && (!cap.utils.inputExists(inputs.num) || (cap.utils.inputExists(inputs.num) && inputs.num.val() !== '')))
    {
        _this.propChoisie[instance].step = _this.step.CHECKNUM;
    }

    if (cap.utils.nonDefini(_this.propChoisie[instance].step) === _this.step.CHECKNUM && (cap.utils.nonDefini(_this.propChoisie[instance].streetNumber) !== '' || (cap.utils.inputExists(inputs.num) && inputs.num.val() !== '')))
    {
        _this[_this.step.CHECKNUM].search({instance: instance});
    }

    // On place le focus sur le champ suivant
    if (cap.utils.nonDefini(_this.propChoisie[instance].step) === _this.step.CHECKNUM && cap.utils.nonDefini(_this.propChoisie[instance].streetNumber) !== '' && cap.utils.inputExists(inputs.additionalInfo))
    {
        inputs.additionalInfo.focus();
    }
    else if (engine === _this.engine.LINE.name && cap.utils.inputExists(inputs.line) && address_step === _this.step.UNDEFINED)
    {
        inputs.line.focus();
    }
    else if (engine === _this.engine.LINE.name && cap.utils.inputExists(inputs.num) && address_step === _this.step.STREETNUM)
    {
        _this.propChoisie[instance].step = address_step;
        inputs.num.focus();
    }
    else if (engine === _this.engine.LINE.name && cap.utils.inputExists(inputs.building) && address_step !== _this.step.UNDEFINED)
    {
        _this.propChoisie[instance].step = _this.step.BUILDING;
        inputs.building.focus();
    }
    else
    {
        _this.putFocusOnNextInput($input);
    }
};

/**
 * Intialisation des listes de propositions de voies qui s'affichent sous les input text (grace à jQueryUI)
 */
cap.address.autocompleteInit = function( instance )
{
    var _this = this;
    var i = cap.utils.isNum(instance) ? instance : 0;
    var prop_choisie = cap.utils.nonDefini(_this.propChoisie[i]);
    var settings = cap.utils.nonDefini(_this.settings[i]);
    var $input = _this.getInputByStep(i, cap.utils.nonDefini(prop_choisie.step));

    if ($input !== '')
    {
        $input.autocomplete({
            // Spécifie la source de données
            // On utilise une fonction pour empêcher jQuery de filtrer les résultats
            source: function(request, response)
            {
                response(_this.propositions);
            },
            // Permet de sélectionner automatiquement la première proposition
            autoFocus: true,
            // Permet de lancer la recherche à la main, sans critères
            minLength: 0,
            // Permet d'annuler le changement du input text lors de la sélection d'une proposition au clavier
            focus: function()
            {
                return false;
            },
            // Action lors de la validation d'une voie
            select: function(event, ui)
            {
                /**
                 * On test que la touche 'shift' n'est pas appuyée
                 * Pour empêcher de sélectionner automatiquement la première proposition
                 * Et permettre de remonter les champs input avec 'shift + tab'
                 */
                if (!event.shiftKey)
                {
                    _this.choisirProposition({address: ui.item.Address, event: event, instance: i});
                }

                return false;
            }
        });

        if ($input.attr('id') === cap.utils.nonDefini(settings.num_ID))
        {
            // Si jamais on quitte le champ sans avoir sélectionné de proposition
            // On n'utilise pas onblur car il est appelé AVANT que l'item de la liste ne soit sélectionné
            $input.bind('autocompletechange', function(event, ui) {

                if (_this.isCountryCodeFR(_this.countryCode[i]) && $input.val() !== '')
                {
                    _this.propChoisie[i].step = _this.step.CHECKNUM;
                    _this[_this.step.CHECKNUM].search({instance: i});
                }
            });
        }
    }
};

cap.address.validate = function( formID, callback )
{
    if (!cap.utils.isString(formID) || cap.utils.nonDefini(formID) === '')
    {
        throw {
            message: "L'ID du formulaire n'est pas renseigné ou vide"
        };
    }

    var _this = this;
    var current_address_valid_status;
    var current_prop_choisie;
    var i;
    _this.validationCallback = cap.utils.nonDefini(callback);

    for (i = 0; i < _this.nbInputs; i++)
    {
        current_address_valid_status = false;
        current_prop_choisie = cap.utils.nonDefini(_this.propChoisie[i]);

        if (current_prop_choisie === '' || cap.utils.objectSize(current_prop_choisie) === 0 || cap.utils.nonDefini(current_prop_choisie.step) === _this.step.FINAL || _this.serviceHS[i] || _this.settings[i].path === '')
        {
            current_address_valid_status = true;
        }

        _this.updateAddressStatus({addressIndex: i, valid: current_address_valid_status});
    }

    _this.validated = (_this.getNbAddressValidated() === _this.nbInputs);

    if (!_this.validated)
    {
        _this.validateAddress(0, formID);
    }
    else if (cap.utils.isFunction(_this.validationCallback))
    {
        _this.validationCallback(_this.validated);
    }
};

cap.address.validateAddress = function( index, formID )
{
    var _this = this;
    var i = parseInt(index);
    var form_ID = cap.utils.nonDefini(formID);
    var inputs = cap.utils.nonDefini(_this.inputs[i]);
    var input_form_ID = (inputs !== '') ? cap.utils.nonDefini(inputs.formID) : '';
    var nb_address_validated = _this.getNbAddressValidated();
    var prop_choisie = cap.utils.nonDefini(_this.propChoisie[i]);
    var current_step = cap.utils.nonDefini(prop_choisie.step);
    // Récupération des paramètres
    var settings = cap.utils.nonDefini(_this.settings[i]);
    var engine = cap.utils.nonDefini(settings.engine);
    var request = '';

    if (current_step !== _this.step.FINAL)
    {
        if (engine === _this.engine.SAISIE.name)
        {
            request = _this.engine.SAISIE.method;
            _this.propChoisie[i].step = _this.step.VALIDATE;
        }
        else if (engine === _this.engine.LINE.name)
        {
            request = _this.engine.LINE.method;
            _this.propChoisie[i].step = _this.step.VALIDATE;
        }
        else if (engine === _this.engine.VERIF.name)
        {
            request = _this.engine.VERIF.method;

            if (current_step !== _this.step.VALIDATE)
            {
                _this.propChoisie[i].step = _this.step.UNDEFINED;
            }
        }
    }

    // Toutes les adresses sont validées, on appelle la fonction de callback
    if (nb_address_validated === _this.nbInputs)
    {
        _this.validated = true;

        if (cap.utils.isFunction(_this.validationCallback))
        {
            _this.validationCallback(_this.validated);
        }
    }
    // L'adresse en cours est déjà validée, on passe à la suivante
    else if (_this.addressValidated[i])
    {
        _this.validateAddress(i + 1, form_ID);
    }
    // Le service web ne répond plus
    // On considère l'adresse valide et on passe à la suivante
    else if (_this.serviceHS[i])
    {
        if (i < _this.nbInputs)
        {
            _this.updateAddressStatus({addressIndex: i, valid: true});
        }

        _this.validateAddress(i + 1, form_ID);
    }
    // Le formulaire passé en paramètre est différent de celui correspondant au formulaire en cours
    // On le considère donc comme valide
    else if (input_form_ID !== form_ID && i < _this.nbInputs)
    {
        _this.updateAddressStatus({addressIndex: i, valid: true});
        _this.validateAddress(i + 1, form_ID);
    }
    else if (input_form_ID === form_ID && i < _this.nbInputs && !_this.serviceHS[i])
    {
        if (!_this.numDejaTeste[i] && ((cap.utils.inputExists(inputs.num) && inputs.num.val() !== '') || cap.utils.nonDefini(_this.propChoisie[i].streetNumber) !== '') && cap.utils.nonDefini(_this.propChoisie[i].streetId) !== '' && engine === _this.engine.SAISIE.name)
        {
            _this.propChoisie[i].step = _this.step.CHECKNUM;
            _this[_this.step.CHECKNUM].search({instance: i, formID: form_ID});
        }
        else if (settings.searchAdditionalInfo && !_this.additionalInfoAlreadySearch[i])
        {
            _this.propChoisie[i].step = _this.step.ADDITIONAL_INFOS;
            _this.propChoisie[i].XYDataBase = settings.XYDatabase;
            _this[_this.step.ADDITIONAL_INFOS].search({instance: i, formID: form_ID});
        }

        _this.search({instance: i, formID: form_ID, request: request});
    }
};



/**
 * Permet de récupérer l'adresse saisie sur une seule ligne
 * Uniquement pour Cap Verif
 *
 * @param  {object}  options           Options de la fonction
 * @param  {integer} options.instance  Formulaire dans lequel on se trouve
 * @param  {string}  options.separator Séparateur que l'on veut mettre entre chaque élément de l'adresse
 * @return {string}  Adresse sur une seule ligne séparée par le séparateur (par défaut un '-')
 */
cap.address.getInputAddress = function( options )
{
    options = options || {};

    var _this = this;
    var instance = cap.utils.isNum(options.instance) ? parseInt(options.instance) : 0;
    var ligne4 = '';
    var ligne6 = '';
    var user_input_address = '';
    var sep = ' - ';
    var separator = $.trim(cap.utils.nonDefini(options.separator));

    if ($.trim(cap.utils.nonDefini(separator)) !== '')
    {
        sep = ' ' + separator + ' ';
    }

    // user_input_address += (cap.utils.nonDefini(_this.propChoisie.ligne1) !== '') ? _this.propChoisie.ligne1 : '';

    /*if (cap.utils.nonDefini(_this.propChoisie.ligne2) !== '')
    {
        user_input_address += (user_input_address !== '') ? ' - ' : '';
        user_input_address += _this.propChoisie.ligne2;
    }*/

    if (cap.utils.nonDefini(_this.propChoisie[instance].buildingName) !== '')
    {
        user_input_address += (user_input_address !== '') ? sep : '';
        user_input_address += _this.propChoisie[instance].buildingName;
    }

    // Récupération de la voie
    if (cap.utils.nonDefini(_this.propChoisie[instance].streetNumber) !== '')
    {
        ligne4 = _this.propChoisie[instance].streetNumber;
    }

    if (cap.utils.nonDefini(_this.propChoisie[instance].streetName) !== '')
    {
        ligne4 += (ligne4 !== '') ? ' ' : '';
        ligne4 += _this.propChoisie[instance].streetName;
    }

    if (ligne4 !== '')
    {
        user_input_address += (user_input_address !== '') ? sep : '';
        user_input_address += ligne4;
    }

    if (cap.utils.nonDefini(_this.propChoisie[instance].province) !== '')
    {
        user_input_address += (user_input_address !== '') ? sep : '';
        user_input_address += _this.propChoisie[instance].province;
    }

    // Récupération du couple Cp / Loc
    if (cap.utils.nonDefini(_this.propChoisie[instance].postalCode) !== '')
    {
        ligne6 = _this.propChoisie[instance].postalCode;
    }

    if (cap.utils.nonDefini(_this.propChoisie[instance].locality) !== '')
    {
        ligne6 += (ligne6 !== '') ? ' ' : '';
        ligne6 += _this.propChoisie[instance].locality;
    }

    if (ligne6 !== '')
    {
        user_input_address += (user_input_address !== '') ? sep : '';
        user_input_address += ligne6;
    }

    return user_input_address;
};

/**
 * Permet de construire le contenu de la popup (la liste des propositions d'adresses)
 *
 * @param  {object} adresses Objet contenant les adresses renvoyées par le service web
 * @return {string}          Code HTML de la popup
 */
cap.address.construitPopupContent = function( adresses )
{
    var _this = this;
    var content = '<ul>';
    // La liste des numéros présents dans les propositions
    var list_street_number = [];
    // Tableau permettant d'ajouter tous les numéros les un à la suite des autres
    var list_street_number_buffer = [];
    // Le numéro de voie
    var numero = '';
    // L'extension du numéro de voie
    var extension = '';
    var i = 0;

    _this.propositions = adresses;

    // Affichage des propositions
    $.each(adresses, function(index, adresse) {

        // On remet la liste des numéros à 0
        list_street_number = [];

        if (cap.utils.nonDefini(adresse.streetNumber) !== '')
        {
            numero = adresse.streetNumber;

            extension = '';

            if (cap.utils.nonDefini(adresse.streetNumberExt) !== '')
            {
                extension = adresse.streetNumberExt;
            }

            if (numero.length < 4 && extension !== '')
            {
                numero += ' ';
            }

            numero += extension;

            list_street_number = numero;
        }
        // Récupération des différents numéros
        else if (cap.utils.nonDefini(adresse.listStreetNumber) !== '')
        {
            list_street_number = adresse.listStreetNumber.split(';');
        }

        content += '' +
            '  <li class="cap-popup__result-item">';

        // Si la variable est de type string, cela veut dire qu'il n'y a qu'un seul numéro
        // Si la taille de la variable vaut zéro, cela veut dire qu'il n'y a pas de numéro
        if (typeof list_street_number === 'string' || list_street_number.length === 0)
        {
            content += '' +
                '    <input type="hidden" value="'+list_street_number+'" name="streetNumber'+i+'">' +
                '    <div class="input">' +
                '      <input type="text" class="cap-popup__input-input" name="streetNumber'+i+'" value="'+list_street_number+'" disabled="disabled" size="5">';
        }
        else
        {
            content += '' +
                '    <input type="hidden" value="'+list_street_number+'" name="listStreetNumber'+i+'">' +
                '    <div class="input">';

            list_street_number_buffer.push('<select id="ListeBox'+i+'" class="cap-popup__input-select" name="streetNumber'+i+'">');

            $.each(list_street_number, function(index, value) {

                if (value !== '')
                {
                    list_street_number_buffer.push('<option value="'+value+'">'+value+'</option>');
                }
            });

            list_street_number_buffer.push('</select>');
            content += list_street_number_buffer.join('\n');

            // On remet le buffer à 0
            list_street_number_buffer = [];
        }

        content += '' +
            '          <span>' + cap.utils.nonDefini(adresse.inputOutput) + '</span>' +
            '          <input type="radio" name="cap-popup-adresse_rbt" class="cap-popup__radio" id="rbt-address-'+i+'" value="'+i+'">' +
            '        </div>' +
            '      </li>';

        i++;
    });

    content += '</ul>';

    return content;
};

/**
 * Permet de construire le haut de la popup
 *
 * @param  {object}  options              Options de la fonction
 * @param  {string}  options.recapAdresse Adresse saisie par l'utilisateur
 * @param  {integer} options.nbAdresses   Nombre d'adresses qui ont été retrouvées
 * @param  {boolean} options.error        Pour savoir si l'adresse est valide ou non
 *                                        Par défaut, considéré à false si inexistant
 * @return {string}                       Code HTML de la popup
 */
cap.address.construitPopupHeader = function( options )
{
    options = options || {};

    var _this = this;
    var content = '';
    var error = cap.utils.isBoolean(options.error) ? options.error : false;
    var nb_adresses = cap.utils.isNum(options.nbAdresses) ? parseInt(options.nbAdresses) : 0;
    var display_match_sentence = _this.construitPhraseListe(nb_adresses);
    var recap_adresse = cap.utils.nonDefini(options.recapAdresse);
    // Pour savoir si on met une taille auto ou une taille fixe pour la popup
    var popup_style = '';

    if (nb_adresses > 4)
    {
        popup_style = ' style="height: 280px;"';
    }

    content += '' +
        '<form action="" method="post" onsubmit="return false">' +
        '  <div id="cap-popup__header">' +
        '    <p class="cap-popup__header-title">Pour un <span class="cap-popup__txt--highlight">service de livraison optimisé</span> votre adresse a été testée.</p>';

    if (error)
    {
        content += "    <p>L'adresse saisie n'a pas été retrouvée.</p>";
        display_match_sentence = "Aucune correspondance n'a été trouvée";
    }
    else
    {
        content += "    <p>L'adresse saisie comporte une ou plusieurs correspondances.</p>";
    }

    content += '' +
        '    <ul>Veuillez :' +
        '      <li class="cap-popup__header-item">- Modifier l\'adresse saisie.</li>';

    if (!error)
    {
        content += '      <li class="cap-popup__header-item">- Sélectionner une adresse dans la liste ci-dessous.</li>';
    }

    content += '' +
        '      <li class="cap-popup__header-item">- Conserver votre adresse.</li>' +
        '    </ul>' +
        '  </div>' +

        '  <div class="cap-popup__user-input">' +
        '    <h6 class="cap-popup__title">Adresse saisie :</h6>' +
        '    <ul class="cap-popup__user-input-adresse">' +
        '      <li class="cap-popup__result-item"><span class="cap-popup-prop__adresse">' + recap_adresse + '</span>' +
        '        <input type="radio" name="cap-popup-adresse_rbt" class="cap-popup__radio" id="rbt-adresse-99" value="-99" checked>' +
        '      </li>' +
        '    </ul>' +
        '    <div class="clear-both"></div>' +
        '  </div>' +

        '  <div class="cap-popup__result"'+popup_style+'>' +
        '    <h6 class="cap-popup__title">' + display_match_sentence + '</h6>';

    return content;
};

/**
 * Permet de construire la phrase récapitulant le nombre de correspondances trouvées
 *
 * @param  {integer} nbAdresses Nombre d'adresses retrouvées
 * @return {string}             Phrase du genre "X correspondances ont été trouvées"
 */
cap.address.construitPhraseListe = function( nbAdresses )
{
    var display_match_sentence = nbAdresses;

    if (display_match_sentence > 1)
    {
        display_match_sentence += ' correspondances ont été trouvées';
    }
    else if (display_match_sentence === 1)
    {
        display_match_sentence += ' correspondance a été trouvée';
    }
    else
    {
        display_match_sentence = "Aucune correspondance n'a été trouvée";
    }

    return display_match_sentence;
};



/**
 * Permet de mettre à jour la variable propChoisie
 *
 * @param  {object}  options           Objet contenant les paramètres de la fonction
 * @param  {object}  options.address   Objet renvoyé par le service web
 * @param  {integer} options.instance  Instance/formulaire dans lequel on se trouve
 * @param  {boolean} options.resetStep Pour savoir si on réinitialise le step avec celui de l'objet Address ou non
 * @return {void}
 */
cap.address.updatePropChoisie = function( options )
{
    options = options || {};

    var _this = this;
    var address = cap.utils.nonDefini(options.address);
    var instance = cap.utils.nonDefini(options.instance);
    var inputs = cap.utils.nonDefini(_this.inputs[instance]);
    var settings = cap.utils.nonDefini(_this.settings[instance]);
    var engine = cap.utils.nonDefini(settings.engine);
    var reset_step = cap.utils.isBoolean(options.resetStep) ? options.resetStep : true;
    var step = cap.utils.nonDefini(_this.propChoisie[instance].step);

    if (address !== '')
    {
        _this.propChoisie[instance] = address;
    }
    else
    {
        if (step === _this.step.STREET)
        {
            _this.propChoisie[instance].streetName = cap.utils.getInputValue(inputs.street);
        }

        if (step === _this.step.STREETNUM)
        {
            _this.propChoisie[instance].streetNumber = cap.utils.getInputValue(inputs.num);
        }
    }

    if (!reset_step)
    {
        /**
         * On rerécupère l'étape dans laquelle on était
         * Car lorsqu'on récupère l'élément Forced, il ne faut pas mettre l'étape à Forced.
         */
        _this.propChoisie[instance].step = step;
    }

    _this.propChoisie[instance].inputOutput = _this.getInputValueByStep(instance, step);

    if (engine === _this.engine.SAISIE.name)
    {
        _this.propChoisie[instance].buildingInfo_1 = cap.utils.getInputValue(inputs.additionalInfo);
    }

    if (engine === _this.engine.VERIF.name && _this.propChoisie[instance].step !== _this.step.VALIDATE && _this.propChoisie[instance].step !== _this.step.FINAL)
    {
        _this.propChoisie[instance].postalCode = cap.utils.getInputValue(inputs.zip);
        _this.propChoisie[instance].locality = cap.utils.getInputValue(inputs.city);
        _this.propChoisie[instance].localitySynonym = cap.utils.getInputValue(inputs.province);
        _this.propChoisie[instance].streetNumber = cap.utils.getInputValue(inputs.num);
        _this.propChoisie[instance].streetName = cap.utils.getInputValue(inputs.street);
        _this.propChoisie[instance].buildingName = cap.utils.getInputValue(inputs.building);
        _this.propChoisie[instance].buildingInfo_1 = cap.utils.getInputValue(inputs.additionalInfo);
    }
};

/**
 * Permet de mettre à jour le champ Cp / Loc
 * Ou les champs Cp et Loc s'ils sont séparés
 *
 * @param  {object}  Address  Objet renvoyé par le service web
 * @param  {integer} instance Instance/formulaire dans lequel on se trouve
 * @return {void}
 */
cap.address.updateLocalityValue = function( Address, instance )
{
    if (cap.utils.nonDefini(Address) === '')
    {
        return false;
    }

    var cploc = '';
    // Pour boucler sur les champs d'info additionnelles de localité
    var i = 1;
    var index = cap.utils.isNum(instance) ? instance : 0;
    var inputs = cap.utils.nonDefini(this.inputs[index]);
    var lieudit = '';

    if (cap.utils.nonDefini(Address.additionalInfo_7) !== '')
    {
        lieudit = Address.additionalInfo_7;
    }

    if (cap.utils.inputExists(inputs.zipcity))
    {
        cploc = cap.utils.nonDefini(Address.postalCode);

        if (cap.utils.nonDefini(Address.locality) !== '')
        {
            cploc += (cploc !== '') ? ' ' : '';
            cploc += Address.locality;
        }

        if (!cap.utils.inputExists(inputs.province) && lieudit !== '')
        {
            cploc += (cploc !== '') ? ' (' + lieudit + ')' : lieudit;
        }

        cap.utils.updateInputValue(inputs.zipcity, cploc);
    }
    else
    {
        cap.utils.updateInputValue(inputs.zip, cap.utils.nonDefini(Address.postalCode));

        cploc = cap.utils.nonDefini(Address.locality);

        if (!cap.utils.inputExists(inputs.province) && lieudit !== '')
        {
            cploc += (cploc !== '') ? ' (' + lieudit + ')' : lieudit;
        }

        cap.utils.updateInputValue(inputs.city, cploc);
    }

    // On met à jour le champ Lieudit
    cap.utils.updateInputValue(inputs.province, lieudit);

    // On met à jour les infos additionelles de localité
    $.each(inputs, function(index, value) {

        if (index == 'cityAdd'+i && inputs[index] !== '')
        {
            value.val(cap.utils.nonDefini(Address['localityInfo_'+i]))
                 .prop('disabled', false);
            i++;
        }
    });
};

/**
 * Permet de mettre à jour le champ voie et le champ numéro de voie s'il existe
 *
 * @param  {object}  Address  Objet renvoyé par le service web
 * @param  {integer} instance Instance/formulaire dans lequel on se trouve
 * @return {void}
 */
cap.address.updateStreetValue = function( Address, instance )
{
    if (cap.utils.nonDefini(Address) === '')
    {
        return false;
    }

    var _this = this;
    // Pour boucler sur les infos additionnelles de voie
    var i = 1;
    var index = cap.utils.isNum(instance) ? instance : 0;
    var inputs = cap.utils.nonDefini(_this.inputs[index]);
    // Récupération du numéro de voie + son extension
    var number = _this.displayStreetNumber(cap.utils.nonDefini(Address.streetNumber), cap.utils.nonDefini(Address.streetNumberExt));
    // Voie complète (numéro + voie ou voie + numéro)
    var ligne4 = '';
    var settings = cap.utils.nonDefini(_this.settings[index]);
    // Récupération du nom de la voie
    var street_name = cap.utils.nonDefini(Address.streetName);
    // Récupération de la position du numéro (avant ou après la voie)
    var street_number_position = cap.utils.isNum(Address.streetNumberPosition) ? parseInt(Address.streetNumberPosition) : _this.streetNumberPosition.BEFORE;

    // On reforce street_number_position à streetNumberPosition.BEFORE au cas où
    // Sinon, si Address.streetNumberPosition est différent d'une des valeurs, la ligne 4 est vidée et le champ voie aussi
    if (street_number_position !== _this.streetNumberPosition.BEFORE && street_number_position !== _this.streetNumberPosition.AFTER)
    {
        street_number_position = _this.streetNumberPosition.BEFORE;
    }

    if (street_number_position === _this.streetNumberPosition.BEFORE)
    {
        if (!cap.utils.inputExists(inputs.num))
        {
            ligne4 = number;
        }

        if (street_name !== '')
        {
            ligne4 += (ligne4 !== '') ? ' ' : '';
            ligne4 += street_name;
        }
    }
    else if (street_number_position === _this.streetNumberPosition.AFTER)
    {
        ligne4 = street_name;

        if (!cap.utils.inputExists(inputs.num) && number !== '')
        {
            ligne4 += (ligne4 !== '') ? ' ' : '';
            ligne4 += number;
        }
    }

    if (cap.utils.nonDefini(settings.disableFields) || (!cap.utils.nonDefini(settings.disableFields) && ligne4 !== ''))
    {
        cap.utils.updateInputValue(inputs.street, ligne4);
        // On met aussi à jour le champ servant à la recherche dans Cap Line
        // Au cas où le champ street ne soit pas défini
        cap.utils.updateInputValue(inputs.line, ligne4);
    }

    if (cap.utils.nonDefini(settings.disableFields) || (!cap.utils.nonDefini(settings.disableFields) && number !== ''))
    {
        cap.utils.updateInputValue(inputs.num, number);
    }

    // On met à jour les infos additionelles de voie
    $.each(inputs, function(index, value) {

        if (index == 'streetAdd'+i && inputs[index] !== '')
        {
            value.val(cap.utils.nonDefini(Address['streetInfo_'+i]))
                 .prop('disabled', false);
            i++;
        }
    });
};

/**
 * Permet de mettre à jour les champs corrspondant aux infos additionnelles (XY, CSP...)
 *
 * @param  {object}  Address  Objet renvoyé par le service web
 * @param  {integer} instance Instance/formulaire dans lequel on se trouve
 * @return {void}
 */
cap.address.updateAdditionalInfosValues = function( Address, instance )
{
    if (cap.utils.nonDefini(Address) === '')
    {
        return false;
    }

    var _this = this;
    var index = cap.utils.isNum(instance) ? instance : 0;
    var inputs = cap.utils.nonDefini(_this.inputs[index]);

    cap.utils.updateInputValue(inputs.additionalInfo5, cap.utils.nonDefini(Address.additionalInfo5));
    cap.utils.updateInputValue(inputs.X, cap.utils.nonDefini(Address.X));
    cap.utils.updateInputValue(inputs.Y, cap.utils.nonDefini(Address.Y));
    cap.utils.updateInputValue(inputs.accuracy, cap.utils.nonDefini(Address.accuracy));
    cap.utils.updateInputValue(inputs.additionalInfo6, cap.utils.nonDefini(Address.additionalInfo6));
    cap.utils.updateInputValue(inputs.idCarreau, cap.utils.nonDefini(Address.idCarreau));
    cap.utils.updateInputValue(inputs.idInspire, cap.utils.nonDefini(Address.idInspire));
    cap.utils.updateInputValue(inputs.idK, cap.utils.nonDefini(Address.idK));
};

/**
 * Permet de mettre à jour le formulaire avec l'adresse bien formatée
 *
 * @param  {object}  address  Adresse récupérée après un appel à search
 * @param  {integer} instance Index du formulaire dans lequel on se trouve
 * @return {void}
 */
cap.address.updateForm = function( address, instance )
{
    if (cap.utils.nonDefini(address) === '')
    {
        return false;
    }

    var _this = this;
    var index = cap.utils.isNum(instance) ? instance : 0;
    var inputs = cap.utils.nonDefini(_this.inputs[index]);

    _this.updateQualityCode(index, cap.utils.nonDefini(address.qualityCode));
    _this.updateExtendedQualityCode(index, cap.utils.nonDefini(address.extendedQualityCode));

    // On met à jour le champ formattedAddress
    cap.utils.updateInputValue(inputs.formattedAddress, cap.utils.nonDefini(address.formattedAddress));

    // On remplit le champ cploc (ou cp et loc s'ils sont séparés)
    // Et aussi le champ lieudit s'il existe (sinon, le lieudit sera mis entre parenthèses à la suite de la localité)
    _this.updateLocalityValue(address, index);
    // On met à jour le champ Voie (+ le champ Numéro de voie s'il existe)
    _this.updateStreetValue(address, index);
    // On met à jour le champ pour le bâtiment
    cap.utils.updateInputValue(inputs.building, cap.utils.nonDefini(address.buildingName));
    cap.utils.updateInputValue(inputs.additionalInfo, cap.utils.nonDefini(address.buildingInfo_1));
};

cap.address.displayCompleteStreet = function( options )
{
    options = options || {};

    var _this = cap.address;
    var address = cap.utils.nonDefini(options.address);
    var instance = cap.utils.nonDefini(instance);
    var inputs = cap.utils.nonDefini(_this.inputs[instance]);
    var ligne4 = '';

    if (!cap.utils.inputExists(inputs.num))
    {
        ligne4 = _this.displayStreetNumber(cap.utils.nonDefini(address.streetNumber), cap.utils.nonDefini(address.streetNumberExt));
    }

    if (cap.utils.nonDefini(address.streetName) !== '')
    {
        ligne4 += (ligne4 !== '') ? ' ' : '';
        ligne4 += address.streetName;
    }

    return ligne4;
};

/**
 * Permet d'afficher le numéro et son complément
 *
 * @param  {string} num  Numéro de voie
 * @param  {string} cplt Complément du numéro
 * @return {string}      Numéro + complément
 */
cap.address.displayStreetNumber = function( num, cplt )
{
    var street_number = cap.utils.nonDefini(num);
    var street_number_extension = cap.utils.nonDefini(cplt);

    if (street_number_extension === '')
    {
        return street_number;
    }
    else if (street_number.length < 4)
    {
        return street_number + ' ' + street_number_extension;
    }
    else
    {
        return street_number + street_number_extension;
    }
};



/**
 * Fait appel à GetMessage et renvoie le message récupéré en paramètre de la fonction de callback
 *
 * @param  {object}   options             Objet contenant les paramètres de la fonction
 * @param  {integer}  options.instance    Instance/formulaire dans lequel on se trouve
 * @param  {integer}  options.returnValue Valeur de retour récupérée lors de l'appel à SearchAddress ou VerifyAddress
 * @param  {function} callback            Fonction de callback appelée une fois le traitement terminé
 * @return {void}
 */
cap.address.getMessage = function( options, callback )
{
    options = options || {};

    var _this = this;
    var instance = cap.utils.isNum(options.instance) ? parseInt(options.instance) : 0;
    var return_value = cap.utils.isNum(options.returnValue) ? parseInt(options.returnValue) : 0;
    var settings = _this.settings[instance];

    $.ajax({
        dataType: 'jsonp',
        jsonp: 'jsoncallback',
        url: settings.path,
        data: {
            request: 'GetMessage',
            languageCode: 'fr',
            messageCode: return_value
        }
    })
    .done(function(data) {

        if (cap.utils.nonDefini(data.message) !== '' && cap.utils.isFunction(callback))
        {
            callback(data.message);
        }
    });
};

/**
 * Permet d'ajouter la classe 'error' à un champ
 * Ou d'afficher le message d'erreur
 *
 * @param  {object}  options          Objet contenant les paramètres de la fonction
 * @param  {object}  options.input    Champ dans lequel on se trouve
 * @param  {integer} options.instance Instance/formulaire dans lequel on se trouve
 * @param  {string}  options.message  Message qu'on veut afficher
 * @return {void}
 */
cap.address.addErrorStatus = function( options )
{
    options = options || {};

    var _this = this;
    var change_status_options = {
        statusAdded: 'error',
        statusRemoved: ['success', 'warning'],
        showBullet: false
    };
    var $input = cap.utils.nonDefini(options.input);
    var return_value = cap.utils.isNum(options.returnValue) ? parseInt(options.returnValue) : 0;
    var instance = cap.utils.isNum(options.instance) ? options.instance : 0;
    var settings = _this.settings[instance];

    if (cap.utils.inputExists($input))
    {
        // Affichage du message d'erreur
        if (settings.errorMessages.showMessage && $input.attr('id') !== settings.building_ID)
        {
            _this.getMessage({instance: instance, returnValue: return_value}, function(message) {
                cap.utils.afficherMessage($input, cap.utils.nonDefini(message), settings.errorMessages.position);
            });
        }
        // Ajout d'une puce d'erreur et d'un contour rouge
        else if ($input.attr('id') !== settings.building_ID)
        {
            cap.utils.changeStatus($input, change_status_options);
        }
    }
};

/**
 * Permet d'ajouter la classe 'warning' à un champ
 * Et on efface le message d'erreur
 *
 * @param  {object}  options          Objet contenant les paramètres de la fonction
 * @param  {object}  options.input    Champ dans lequel on se trouve
 * @param  {integer} options.instance Instance/formulaire dans lequel on se trouve
 * @return {void}
 */
cap.address.addWarningStatus = function( options )
{
    options = options || {};

    var change_status_options = {
        statusAdded: 'warning',
        statusRemoved: ['error', 'success'],
        showBullet: false
    };
    var $input = cap.utils.nonDefini(options.input);
    var instance = cap.utils.isNum(options.instance) ? options.instance : 0;
    var settings = cap.utils.nonDefini(this.settings[instance]);

    if (cap.utils.inputExists($input))
    {
        // Suppression du message d'erreur
        cap.utils.afficherMessage($input);

        if (!settings.errorMessages.showMessage && $input.attr('id') !== settings.building_ID)
        {
            // Affichage d'une puce de succès et d'un contour vert
            cap.utils.changeStatus($input, change_status_options);
        }
    }
};

/**
 * Permet d'ajouter la classe 'success' à un champ
 * Et on efface le message d'erreur
 *
 * @param  {object}  options          Objet contenant les paramètres de la fonction
 * @param  {object}  options.input    Champ dans lequel on se trouve
 * @param  {integer} options.instance Instance/formulaire dans lequel on se trouve
 * @return {void}
 */
cap.address.addSuccessStatus = function( options )
{
    options = options || {};

    var change_status_options = {
        statusAdded: 'success',
        statusRemoved: ['error', 'warning'],
        showBullet: false
    };
    var $input = cap.utils.nonDefini(options.input);
    var instance = cap.utils.isNum(options.instance) ? options.instance : 0;
    var settings = cap.utils.nonDefini(this.settings[instance]);

    if (cap.utils.inputExists($input))
    {
        // Suppression du message d'erreur
        cap.utils.afficherMessage($input);

        if (!settings.errorMessages.showMessage && $input.attr('id') !== settings.building_ID)
        {
            // Affichage d'une puce de succès et d'un contour vert
            cap.utils.changeStatus($input, change_status_options);
        }
    }
};

/**
 * Retire le message d'erreur et le contour autour du champ
 *
 * @param  {object} $input Champ dans lequel on se trouve
 * @return {void}
 */
cap.address.resetInputStatus = function( $input )
{
    if (!cap.utils.inputExists($input))
    {
        return false;
    }

    // Suppression du message d'erreur
    cap.utils.afficherMessage($input);
    // Suppression de la puce et du contour
    cap.utils.changeStatus($input);
};

/**
 * Permet de détruire la liste de proposition du champ choisi
 *
 * @param  {object} $input Champ pour lequel on veut détruire la liste de proposition
 * @return {void}
 */
cap.address.destroyAutocomplete = function( $input )
{
    if (!cap.utils.inputExists($input))
    {
        return false;
    }

    if ($input.hasClass('ui-autocomplete-input'))
    {
        $input.autocomplete('destroy');
    }
};

/**
 * Permet de détruire toutes les listes de jQuery-UI autocomplete
 *
 * @param  {object}  options          Options de la fonction
 * @param  {integer} options.instance Index du formulaire dans lequel on se trouve
 * @return {void}
 */
cap.address.destroyAllAutocomplete = function( options )
{
    options = options || {};

    var _this = this;
    var instance = cap.utils.isNum(options.instance) ? parseInt(options.instance) : 0;
    var inputs = cap.utils.nonDefini(_this.inputs[instance]);

    $.each(inputs, function(index, value) {
        _this.destroyAutocomplete(value);
    });
};

/**
 * Permet de vider la valeur du champ et de le désactiver
 *
 * @param  {object}  $input               Champ que l'on veut modifier
 * @param  {object}  options              Objet contenant les options concernant le champ
 *                                        dont on veut mettre à jour les propriétés
 * @param  {boolean} options.disableField True si on veut désactiver le champ, false sinon
 * @param  {boolean} options.emptyField   Permet de savoir si on veut vider le champ ou non
 * @return {void}
 */
cap.address.updateInputProperties = function( $input, options )
{
    if (!cap.utils.inputExists($input))
    {
        return false;
    }

    options = options || {};

    var disable_field = cap.utils.isBoolean(options.disableField) ? options.disableField : true;
    var empty_field = cap.utils.isBoolean(options.emptyField) ? options.emptyField : true;

    if (empty_field)
    {
        $input.val('');
    }

    $input.prop('disabled', disable_field);
};

/**
 * Permet de savoir si on a un code qualité valide dans le cas d'une verif
 * On vérifie qu'on a un champ code qualité dans le formulaire
 * Si celui-ci est vide ou a une valeur de 60, on considère le code qualité
 * comme invalide
 *
 * @param  {object}  options          Options de la fonction
 * @param  {integer} options.instance Formulaire dans lequel on se trouve
 * @return {boolean}                  True si on a un code qualité valide, false sinon
 */
cap.address.isValidQualiyCode = function( options )
{
    options = options || {};

    var _this = this;
    var instance = cap.utils.isNum(options.instance) ? parseInt(options.instance) : 0;
    var inputs = cap.utils.nonDefini(_this.inputs[instance]);
    var is_valid_quality_code = true;
    var quality_code = cap.utils.getInputValue(inputs.qualityCode);

    if (inputs.qualityCode !== '' && (quality_code === '' || quality_code === _this.qualityCodes.DEFAULT))
    {
        is_valid_quality_code = false;
    }

    return is_valid_quality_code;
};

/**
 * Met à jour le champ Code Qualité Adresse
 *
 * @param  {integer} instance    Formulaire dans lequel on se trouve
 * @param  {string}  qualityCode Code Qualité Adresse
 * @return {void}
 */
cap.address.updateQualityCode = function( instance, qualityCode )
{
    var _this = this;
    var end_loop = _this.nbInputs;
    var quality_code = cap.utils.nonDefini(qualityCode);
    var i = 0;
    var $input;

    if (cap.utils.isNum(instance) && instance < end_loop)
    {
        i = instance;
        end_loop = instance + 1;
    }

    for (; i < end_loop; i++)
    {
        // Si la valeur passée en paramètre ne correspond à aucun code qualité,
        // on prend la valeur par défaut
        if (cap.utils.inObject(_this.qualityCodes, quality_code) === -1)
        {
            quality_code = _this.qualityCodes.DEFAULT;
        }

        if (cap.utils.nonDefini(_this.propChoisie[i]))
        {
            _this.propChoisie[i].qualityCode = quality_code;
        }

        $input = cap.utils.nonDefini(_this.inputs[i].qualityCode);

        cap.utils.updateInputValue($input, quality_code);
    }
};

/**
 * Permet d'initialiser le code qualité étendu avec que des X
 *
 * @return {string} Code qualité étendu avec que des X
 */
cap.address.initExtendedQualityCode = function()
{
    var _this = this;
    var default_extended_quality_code = '';
    var i = 0;

    for (; i < _this.EXTENDED_QUALITY_CODE_LENGTH; i++)
    {
        default_extended_quality_code += 'X';
    }

    return default_extended_quality_code;
};

/**
 * Met à jour le champ Code Qualité Adresse 'étendu'
 *
 * @param  {integer} instance            Formulaire dans lequel on se trouve
 * @param  {string}  extendedQualityCode Code Qualité Adresse 'étendu'
 * @return {void}
 */
cap.address.updateExtendedQualityCode = function( instance, extendedQualityCode )
{
    var _this = this;
    var end_loop = _this.nbInputs;
    var extended_quality_code = '';
    var i = 0;
    var $input;

    if (cap.utils.isNum(instance) && instance < end_loop)
    {
        i = instance;
        end_loop = instance + 1;
    }

    for (; i < end_loop; i++)
    {
        extended_quality_code = _this.initExtendedQualityCode();

        if (cap.utils.nonDefini(extendedQualityCode) !== '' && extendedQualityCode.length === _this.EXTENDED_QUALITY_CODE_LENGTH)
        {
            extended_quality_code = extendedQualityCode;
        }

        _this.propChoisie[i].extendedQualityCode = extended_quality_code;
        $input = cap.utils.nonDefini(_this.inputs[i].extendedQualityCode);

        cap.utils.updateInputValue($input, _this.propChoisie[i].extendedQualityCode);
    }
};

/**
 * Permet de mettre à jour le status d'une adresse
 * Pour savoir si elle a été validée ou non
 *
 * @param  {object}  options              Options de la fonction
 * @param  {integer} options.addressIndex Formulaire dans lequel on se trouve
 * @param  {boolean} options.valid        Gère le status de l'adresse
 *                                        Par défaut, on considère l'adresse comme non valide
 *                                        True si l'adresse a été validée, false sinon
 * @return {void}
 */
cap.address.updateAddressStatus = function( options )
{
    options = options || {};

    var _this = this;
    var i = cap.utils.isNum(options.addressIndex) ? parseInt(options.addressIndex) : 0;
    var valid = cap.utils.isBoolean(options.valid) ? options.valid : false;

    _this.addressValidated[i] = valid;
};

/**
 * Permet de récupérer le nombre d'adresses qui ont été validées
 *
 * @return {integer} Nombre d'adresses validées
 */
cap.address.getNbAddressValidated = function()
{
    var _this = this;
    var i = 0;
    var nb_address_validated = 0;

    for (; i < _this.nbInputs; i++)
    {
        if (_this.addressValidated[i])
        {
            nb_address_validated++;
        }
    }

    return nb_address_validated;
};

/**
 * Permet d'afficher ou de supprimer un message dans la div d'erreur
 *
 * @param  {string} message Message que l'on veut afficher
 *                          Si vide, l'ancien message sera effacé
 * @return {void}
 */
cap.address.majDivError = function( message )
{
    var _this = this;
    var instance = _this.instance;
    var inputs = cap.utils.nonDefini(_this.inputs[instance]);

    if (cap.utils.inputExists(inputs.divError))
    {
        inputs.divError.empty().html(cap.utils.nonDefini(message));
    }
};

/**
 * Permet de vérifier que le code pays correspond à un pays français
 *
 * @param  {string}  countryCode Code pays qu'on veut vérifier
 * @return {boolean}             True si le code pays correspond à un pays français, false sinon
 */
cap.address.isCountryCodeFR = function( countryCode )
{
    var country_code = cap.utils.nonDefini(countryCode).toUpperCase();
    var countriesCodesFR = [
        'FRA', 'GLP', 'MTQ', 'GUF', 'REU', 'MYT', 'SPM', 'BLM', 'MAF', 'PYF', 'WLF', 'NCL', 'ATF', 'MCO',
        'FR',  'GP',  'MQ',  'GF',  'RE',  'YT',  'PM',  'BL',  'MF',  'PF',  'WF',  'NC',  'TF',  'MC'
    ];

    return ($.inArray(country_code, countriesCodesFR) > -1);
};



// Ajout de l'objet dans le DOM
window.cap.address = cap.address;

$(document).ready(function() {

    // Récupération des ID des différents formulaires afin de pouvoir gérer la validation au mieux
    cap.address.retrieveFormID();
    // Application/récupération des évènements sur les différents inputs (keyup, click, blur, etc.)
    cap.address.bindInputsEvents();

    // Ajout de la div qui contiendra les propositions d'adresse à l'élément <body>
    $('body').append('<div class="cap-alert-popup" id="cap-popup-form-adresse" title="" style="display: none;"></div>');
});

})(jQuery);
