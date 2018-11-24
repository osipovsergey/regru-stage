$( document ).ready( function() {
    var $quickContactInfo = $('.b-quick-contact-info');
    var $infoTip          = $('.b-information-tip');
    var $toggleButton     = $('.b-toggle-button');
    var $menuWrap         = $('.b-menu');
    var currIndex;
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

    // Slider for work.html and blog-post.html

    $('.b-post__main-image__img:first').fadeIn();
    $('.b-rectangle').click( function() {
        $('.b-rectangle').removeClass('b-selected');
        $( this ).addClass('b-selected');
        currIndex = $( this ).index() + 1;
        $('.b-post__main-image__img').fadeOut( 0 );
        $( '.b-post__main-image__img:nth-child(' + currIndex + ')' ).fadeIn();
    } );

    // Slider for blog.html

    $('a.b-preview-slide').click( function() {
        previewSlide( $( this ).parents('.b-slider').find('.b-slides') );
    } );

    // clicking image goes to next slide

    $('a.b-next-slide, .b-slider img').click( function() {
        nextSlide( $( this ).parents('.b-slider').find('.b-slides') );
    } );

    // initialize show

    iniShow();

    function iniShow() {

    // show first image

        $('.b-slider').each( function() {
            $( this ).find('img:first').fadeIn( 1000 );
        } );
    }

    function previewSlide( $slides ) {
        $slides.find('img:last').prependTo( $slides );
        showSlide( $slides );
    }

    function nextSlide( $slides ) {
        $slides.find('img:first').appendTo( $slides );
        showSlide( $slides );
    }

    function showSlide( $slides ) {

    // hide (reset) all slides

        $slides.find('img').hide();

        // fade in next slide

        $slides.find('img:first').fadeIn( 1000 );
    }
} );
