$( document ).ready( function() {
    var $quickContactInfo = $('.b-quick-contact-info');
    var $infoTip          = $('.b-information-tip');
    var $toggleButton     = $('.b-toggle-button');
    var $menuWrap         = $('.b-menu');
    var url               = document.location.href;


    $quickContactInfo.on( 'click', function() {
        'use strict';

        $infoTip.toggleClass('b-information-tip-open');
    } );

    $.each( $('li a'), function() {
        'use strict';

        if ( this.href == url ) {
            $( this ).addClass('activeLink');
        }
    } );

    $toggleButton.on( 'click', function() {
        'use strict';

        $( this ).toggleClass('b-button-open');
        $menuWrap.toggleClass('b-menu-open');
    } );
} );

