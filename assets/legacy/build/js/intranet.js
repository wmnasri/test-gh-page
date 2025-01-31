$(document).ready(function() {
    var table = $('#example').DataTable({
        "language": {
            sProcessing: "Traitement en cours...",
            sSearch: "Rechercher&nbsp;:",
            sLengthMenu: "Afficher _MENU_ &eacute;l&eacute;ments",
            sInfo: "Affichage de l'&eacute;l&eacute;ment _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments",
            sInfoEmpty: "Affichage de l'&eacute;l&eacute;ment 0 &agrave; 0 sur 0 &eacute;l&eacute;ment",
            sInfoFiltered: "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
            sInfoPostFix: "",
            sLoadingRecords: "Chargement en cours...",
            sZeroRecords: "Aucun &eacute;l&eacute;ment &agrave; afficher",
            sEmptyTable: "Lancer une recherche",
            oPaginate: {
                sFirst: "Premier",
                sPrevious: "Pr&eacute;c&eacute;dent",
                sNext: "Suivant",
                sLast: "Dernier"
            },
            oAria: {
                sSortAscending: ": activer pour trier la colonne par ordre croissant",
                sSortDescending: ": activer pour trier la colonne par ordre d&eacute;croissant"
            }
        }
    });

    // Add event listener for opening and closing details
    $('#example tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row( tr );

        var reference = $(tr).find('.hidden-reference').val();
        var idUser    = $(tr).find('.hidden-iduser').val();

        if ( row.child.isShown() ) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            $(this).removeClass('details-control');
            $(this).addClass('icon-loading');

            // Open this row
            responseData = callDataTracking(idUser, reference, row, tr, this);
        }
    } );

    $('#example tbody').on('click', '.content-maj-tracking button', function () {
        var tr = $(this).closest('tr');

        var reference       = $(this).closest('.content-maj-tracking').find('.hidden-reference').val();
        var idUser          = $(this).closest('.content-maj-tracking').find('.hidden-iduser').val();
        var contentTracking = $(tr).find('.content-tracking');
        var timestamp       = Math.round(new Date().getTime() / 1000);
        $(this).hide();
        var loading = '<span class="icon-loading" style="float: right;"></span>';
        $(this).closest('.content-maj-tracking').append(loading);

        $.ajax({
            type: "GET",
            url: 'show_tracking_account/'+idUser+'/'+reference+'?'+timestamp,
            dataType: "html",
            success: function (response) {
                contentTracking.html(response);
               // $(this).show();
               // $(this).closest('.icon-loading').remove();
            }
        });
    });

    function callDataTracking(idUser, reference, row, tr, loading)
    {
        $.ajax({
            type: "GET",
            url: 'show_tracking_account/'+idUser+'/'+reference,
            dataType: "html",
            success: function (response) {
                row.child(response).show();
                tr.addClass('shown');

                $(loading).removeClass('icon-loading');
                $(loading).addClass('details-control');
            }
        });
    }

    // permet de rendre obligatoire un des 2 champs (email ou reference)
    jQuery(function ($) {
        var $inputs = $('.field-required');
        $inputs.on('input', function () {
            // Set the required property of the other input to false if this input is not empty.
            $inputs.not(this).prop('required', !$(this).val().length);
        });
    });

    $('form[name="search"]').on('submit', function() {
        var $this = $('#btn_search');
        html = $('#btn_search').data('loading-text');
        $this.html(html);
    });
});

