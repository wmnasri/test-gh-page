/**
 * Created by Cap Adresse on 05/11/2014.
 *
 * Pour plus de sécurité
 * On englobe l'application dans une fonction anonyme qui s'execute immédiatement
 * Elle prend en paramètre l'objet jQuery pour pouvoir utiliser le symbole '$' sans risque de conflit
 *
 * @param  {object} $ Objet jQuery permettant ainsi d'éviter les conflits avec l'utilisation du '$'
 * @return {void}
 */
(function($) {

/**
 * Création de l'objet contenant l'application
 * @type {object}
 */
var cap = cap || {};

/**
 * Objet contenant les fonctions / variables utilitaires
 * @type {object}
 */
cap.utils = cap.utils || {};

/**
 * Simple chaîne de caractère contenant le numéro de version
 * @type {string}
 */
cap.utils.version = '1.1.1';



/**
 * Permet de placer le focus sur le champ situé à la position X après le champ passé en paramètre
 * X correspond à l'index passé en paramètre (par défaut, on le positionne à 1)
 *
 * @param  {object}  jQinput Input récupéré via $('.class') | $('#id') | $(this)
 * @param  {number} index   Numéro du champ, après celui en cours, sur lequel on veut mettre le focus
 * @return {void}
 */
cap.utils.putFocusOnNextInput = function( jQinput, index )
{
    $input = cap.utils.nonDefini(jQinput);
    index = parseInt(index) || 1;

    // On récupère l'input à l'index situé après l'input récupéré
    var next_input = $(':input:eq(' + ($(':input').index($input) + index) + ')');

    // S'il s'agit d'un input type text, password, tel ou email alors on place le focus dessus
    if (next_input.attr('type') == 'text' || next_input.attr('type') == 'password' || next_input.attr('type') == 'tel' || next_input.attr('type') == 'email')
    {
        next_input.focus();
    }
};

/**
 * Récuperation de la touche qui vient d'être appuyée
 *
 * @param  {object} event Touche tapée au clavier
 * @return {string}       Numéro de la touche saisie
 */
cap.utils.getTouche = function( event )
{
    var touche_saisie = '0';

    /**
     * On test si l'évènement window.event existe
     * Correspond à IE
     */
    if (window.event && event !== undefined)
    {
        touche_saisie = event.keyCode;
    }
    else if (event !== undefined)
    {
        if (event.which != '0')
        {
            /**
             * Si on appuie sur tab + shift, on remonte le formulaire au clavier
             * Donc, pour éviter de lancer les recherches,
             *       on assigne une touche non autorisée par la fonction toucheAutorisee
             * (N'importe quelle touche non autorisée fonctionne)
             */
            if (event.which == '9' && event.shiftKey)
            {
                touche_saisie = '37';
            }
            else
            {
                touche_saisie = event.which;
            }
        }
        else
        {
            touche_saisie = event.keyCode;
        }
    }

    return touche_saisie;
};

/**
 * Décide si une touche est considérée comme valide ou non pour lancer une recherche
 *
 * @param  {string}  toucheSaisie Touche qui a été tapée au clavier
 * @param  {boolean} allowEnter   Pour savoir si on considère la touche Entrée comme une touche autorisée ou non
 *                                Par défaut à false, utilisé uniquement pour la recherche de société
 *                                Pour que l'appui sur la touche Entrée relance la recherche
 * @return {boolean}              True si c'est une touche valide, false dans le cas contraire
 */
cap.utils.toucheAutorisee = function( event, allowEnter )
{
    var _this = this;
    var touche_OK = true;
    var touche_saisie = _this.getTouche(event);
    var allow_enter = true;

    if (_this.nonDefini(allowEnter) === false)
    {
        allow_enter = false;
    }

    // Fleches
    if ((touche_saisie == '37') || (touche_saisie == '38') || (touche_saisie == '39') || (touche_saisie == '40'))
    {
        touche_OK = false;
    }

    // Shift, Ctrl et Alt
    if ((touche_saisie == '16') || (touche_saisie == '17') || (touche_saisie == '18'))
    {
        touche_OK = false;
    }

    // Fin, Home, Page up, Page down
    if ((touche_saisie == '35') || (touche_saisie == '36') || (touche_saisie == '33') || (touche_saisie == '34'))
    {
        touche_OK = false;
    }

    // Echap
    if (touche_saisie == '27')
    {
        touche_OK = false;
    }

    if (!allow_enter)
    {
        // Entree
        if (touche_saisie == '13')
        {
            touche_OK = false;
        }
    }

    return touche_OK;
};

/**
 * Permet de vérifier si une variable est 'undefined' ou non
 * Si oui, on la transforme en chaine vide
 *
 * @param  {mixed|string} variable Variable a tester
 * @return {mixed|string}
 */
cap.utils.nonDefini = function( variable )
{
    if (typeof variable == 'undefined')
    {
        variable = '';
    }

    return variable;
};

/**
 * Permet de tester si un valeur est dans un objet
 * La comparaison n'est pas une comparaison strict
 * Ce qui veut dire que si on cherche 0 ou '0', ça renverra la même chose
 *
 * @param  {object} object        Objet dans lequel on veut chercher la valeur
 * @param  {mixed} searchedValue Valeur à chercher
 * @return {integer}               -2 si le premier paramètre n'est pas un objet
 *                                 -1 si la valeur n'a pas été trouvée
 *                                 0  si la valeur a été trouvée
 */
cap.utils.inObject = function( object, searchedValue )
{
    var _this = this;
    var object_key;
    var searched_value = _this.nonDefini(searchedValue);

    if (!_this.isObject(object))
    {
        return -2;
    }

    for (object_key in object)
    {
        if (searched_value == object[object_key])
        {
            return 0;
        }
    }

    return -1;
};

/**
 * Permet de savoir si une variable est un booléen
 * Le test est très strict car il ne vérifie que si la variable === false ou true
 *
 * @param  {mixed|boolean} variable Variable à tester
 * @return {boolean}                True si la variable vaut true ou false, false sinon
 */
cap.utils.isBoolean = function( variable )
{
    return (variable === true || variable === false);
};

/**
 * Permet de vérifier si une variable est de type 'function' ou non
 *
 * @param  {mixed}   variable Variable à tester
 * @return {boolean}
 */
cap.utils.isFunction = function( variable )
{
    return (typeof variable == 'function');
};

/**
 * Permet de vérifier si une variable est de type numérique ou non
 *
 * @param  {mixed}   variable Variable à tester
 * @return {boolean}
 */
cap.utils.isNum = function( variable )
{
    return (!isNaN(variable - 0) && variable !== null && variable !== '' && variable !== false);
};

/**
 * Permet de vérifier si une variable est de type 'object' ou non
 *
 * @param  {mixed}   variable Variable a tester
 * @return {boolean}
 */
cap.utils.isObject = function( variable )
{
    return (typeof variable == 'object');
};

/**
 * Permet de vérifier si une variable est de type 'string' ou non
 *
 * @param  {mixed}   variable Variable a tester
 * @return {boolean}
 */
cap.utils.isString = function( variable )
{
    return (typeof variable == 'string');
};

/**
 * Permet de calculer la taille d'un simple objet JS
 *
 * @param  {object} object Objet dont on veut connaitre la taille
 * @return {integer}       Taille de l'objet
 */
cap.utils.objectSize = function( object )
{
    var size = 0;
    var key;

    for (key in object)
    {
        if (object.hasOwnProperty(key))
        {
            size++;
        }
    }

    return size;
};

/**
 * Permet de tester si un champ existe et qu'il est bien du 'type jQuery'
 * C'est à dire récupéré via $(this) | $('.classe') | $('#id')
 *
 * @param  {object}  $input Champ que l'on veut tester
 * @return {boolean}        True si le champ existe et qu'il a été récupéré via jQuery, false sinon
 */
cap.utils.inputExists = function( $input )
{
    var _this = this;

    return (_this.nonDefini($input) !== '' && _this.isObject($input) && parseInt($input.length) === 1);
};

/**
 * Permet de mettre à jour la valeur d'un champ
 *
 * @param  {object} $input Champ que l'on veut mettre à jour
 * @param  {string} value  Valeur que l'on veut mettre dans le champ
 * @return {void}
 */
cap.utils.updateInputValue = function( $input, value )
{
    var _this = this;

    $input = _this.nonDefini($input);

    if (_this.inputExists($input))
    {
        $input.val(_this.nonDefini(value));
    }
};

/**
 * Permet de récupérer la valeur d'un champ
 *
 * @param  {object} $input Champ dont on veut récupérer la valeur
 * @return {string}        Valeur du champ (vide si le champ n'existe pas)
 */
cap.utils.getInputValue = function( $input )
{
    var _this = this;

    $input = _this.nonDefini($input);

    if (_this.inputExists($input))
    {
        return $input.val();
    }

    return '';
};

/**
 * Supprime les espaces en début et fin de chaine
 *
 * @param  {string} str Chaine que l'on veut "trimer"
 * @return {string}     La chaine sans les espaces
 */
cap.utils.trim = function( str )
{
    return str.replace(/^\s+/g,'').replace(/\s+$/g,'');
};

/**
 * Permet de remplacer un caractère dans une chaîne à la position passé en paramètre
 *
 * @param  {string}  string    Chaîne dont on veut remplacer un (ou plusieurs) caractère(s)
 * @param  {integer} index     Emplacement du caractère dans la chaîne que l'on veut remplacer
 * @param  {string}  character Caractère que l'on veut insérer
 * @return {string}            Chaîne modifiée
 */
cap.utils.replaceCharAt = function( string, index, character )
{
    return string.substr(0, index) + character + string.substr(index + character.length);
};

/**
 * Disponible uniquement si on n'affiche pas les messages d'erreur
 *
 * Permet de changer le status d'un champ input
 *     pour lui mettre la classe success ou error
 *     et ajouter la puce qui correspond
 * Si on ne donne rien pour statusAdded et StatusRemoved
 *     Cela supprime tout
 *
 * @param {object}       jQinput       Input dans lequel on se trouve
 *                                     Valeur de type : $('#id_input') | $('.class_input') | $(this)
 * @param {string}       statusAdded   Status que l'on veut ajouter
 *                                     Valeur : 'error' | 'success' | 'warning'
 * @param {string|array} statusRemoved Status que l'on veut enlever
 *                                     Valeur : 'error' | 'success' | 'warning'
 * @param {boolean}      showBullet    Permet de savoir si on affiche une puce ou non
 */
cap.utils.changeStatus = function( jQinput, statusOptions )
{
    var _this = this;
    var $input = _this.nonDefini(jQinput);
    var options = _this.nonDefini(statusOptions);
    var $parent = _this.inputExists($input) ? $input.parent() : '';
    // On récupère la span qui affiche la puce d'erreur ou de succès
    var $span = _this.inputExists($parent) ? $parent.find('span.cap__puce') : '';
    var status_added = _this.nonDefini(options.statusAdded);
    var status_removed = _this.nonDefini(options.statusRemoved);
    var show_bullet = _this.isBoolean(options.showBullet) ? options.showBullet : true;

    if (_this.inputExists($input) && _this.isObject(options))
    {
        status_added = options.statusAdded || '';
        status_removed = options.statusRemoved || '';

        if (_this.isObject(status_removed))
        {
            $.each(status_removed, function(index, value) {
                $input.removeClass('cap__input-' + value);
            });
        }
        else if (_this.isString(status_removed))
        {
            $input.removeClass('cap__input-' + status_removed);
        }

        $input.addClass('cap__input-' + status_added);

        if (show_bullet)
        {
            // Si la span existe, on change sa classe
            if (_this.inputExists($span) && $span[0])
            {
                if (_this.isObject(status_removed))
                {
                    $.each(status_removed, function(index, value) {
                        $span.removeClass('cap__puce-'+value);
                    });
                }
                else if (_this.isString(status_removed))
                {
                    $span.removeClass('cap__puce-'+status_removed);
                }

                $span.addClass('cap__puce-'+status_added);
            }
            // Si elle n'existe pas, on la créé avec le statusAdded
            else if (_this.inputExists($parent))
            {
                $parent.append('<span class="cap__puce cap__puce-'+status_added+'"></span>');
            }
        }
    }
    else if (_this.inputExists($input))
    {
        $input.removeClass('cap__input-error cap__input-success cap__input-warning');

        if (_this.inputExists($span))
        {
            $span.remove();
        }
    }
};

/**
 * Fonction permettant d'englober un input avec une div
 * Puis on positionne une span en haut, ou en bas, de l'input
 * en fonction de la position définie
 *
 * @param {object} jQinput  Input qu'on veut englober
 * @param {string} position Position où on veut placer la span d'erreur
 *                          'top' pour la placer au dessus du champ
 *                          'bottom' pour la placer en dessous du champ
 * @return {void|boolean} False si le champ passé en paramètre n'existe pas
 */
cap.utils.addDivError = function( jQinput, position )
{
    if (!cap.utils.inputExists(jQinput))
    {
        return false;
    }

    var _this = this;
    // Div qui englobera l'input
    var input_parent;
    // Span qui permettra d'afficher le message
    var span_error_html = '<span class="cap__error-msg"></span>';

    jQinput.wrap('<div class="cap__error"></div>');
    input_parent = jQinput.parent('.cap__error');

    if (_this.nonDefini(position) === 'top')
    {
        input_parent.prepend(span_error_html);
    }
    else if (_this.nonDefini(position) === 'bottom')
    {
        input_parent.addClass('cap__error--bottom').append(span_error_html);
    }
};

/**
 * Permet d'afficher un message d'erreur au dessus ou en dessous du champ passé en paramètre
 *
 * @param  {object} jQinput Champ pour lequel on veut afficher un message
 * @param  {string} message Message que l'on veut afficher
 * @return {void|boolean} False si le champ passé en paramètre n'existe pas
 */
cap.utils.afficherMessage = function( jQinput, message )
{
    if (!cap.utils.inputExists(jQinput))
    {
        return false;
    }

    var _this = this;
    // On récupère l'input parent
    var $input_parent = jQinput.parent('.cap__error');
    // On récupère la span qui affiche le message d'erreur
    var $span = cap.utils.inputExists($input_parent) ? $input_parent.find('.cap__error-msg') : '';

    message = _this.nonDefini(message);

    /**
     * Si elle existe et que le message n'est pas undefined, alors on remplace le message
     * Sinon, si elle existe et que le message est undefined, alors on la supprime (pour éviter qu'elles s'empilent)
     * Sinon, on la créé et on affiche le message
     */
    if (_this.inputExists($span) && $span[0] && message !== '')
    {
        $span.html(message);
    }
    else if (_this.inputExists($span) && $span[0] && message === '')
    {
        $span.html('');
    }
};

/**
 * Permet d'ajouter une span avec un message d'erreur au dessus ou en dessous d'un champ
 *
 * @param  {object} $input   Champ sur lequel on veut afficher le message
 * @param  {string} position Position où on veut mettre le message ('top' ou 'bottom')
 * @param  {object} message  Code HTML de la span que l'on veut ajouter
 * @return {void}
 */
cap.utils.addMessage = function( $input, position, spanMessage )
{
    var _this = this;

    if (_this.inputExists($input))
    {
        if (_this.nonDefini(position) == 'top')
        {
            $input.prepend(spanMessage);
        }
        else if (_this.nonDefini(position) == 'bottom')
        {
            $input.append(_this.nonDefini(spanMessage));
        }
    }
};

/**
 * Fonction permettant de supprimer tous les messages d'un coup
 */
cap.utils.effacerMessages = function()
{
    $('.error-msg').remove();
};



// Ajout de l'objet dans le DOM
window.cap = cap;

})(jQuery);
