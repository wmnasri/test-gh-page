var ConfirmPageAppointments = (function() {

    function initFields()
    {
        var btnUpdate = document.getElementById('ma-confirm-update');
        RequestApp.render(RequestApp.componentsList.SzButton, btnUpdate,
            {
                isDisabled: false,
                outline: true,
                className: 'js-btn-update-cancel'
            },
            'MODIFIER / ANNULER'
        );
        $('.js-btn-update-cancel').on('click', function () {
            $('.js-btn-update-cancel').empty();
            $('.js-btn-update-cancel').html(''+
                '<i class="icon-spinner spin"></i>');
            var url = $('#ma-confirm-update').attr('data-url');
            document.location.href= url;
        });
    }

    return {
        initConfirmPage: function() {
            initFields();
        }
    };

})(jQuery);