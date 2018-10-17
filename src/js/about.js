$( document ).ready( function() {
    var $toggleButton     = $('.b-toggle-button');
    var $menuWrap         = $('.b-menu');
    var url               = document.location.href;

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
