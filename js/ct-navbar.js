searchVisible = 0;
transparent = true;
hasTransparent = false;

$(document).ready(function(){
   if($('nav[role="navigation"]').hasClass('navbar-transparent')){
        hasTransparent = true;
   }
   $('[data-toggle="search"]').click(function(){
        if(searchVisible == 0){
            searchVisible = 1;
            $(this).parent().addClass('active');
            $(this).children('p').html('Close');
            $('.navbar-search-form').fadeIn(function(){
                $('.navbar-search-form input').focus();
            });
        } else {
            searchVisible = 0;
            $(this).parent().removeClass('active');
            $(this).children('p').html('Search');
            $(this).blur();
            $('.navbar-search-form').fadeOut(function(){
                $('.navbar-search-form input').blur();
            });
        } 
    });

    $('[data-toggle="tooltip"]').tooltip() 
});

$(document).scroll(function() {
   if(hasTransparent){
        if( $(this).scrollTop() > 590 ) {
            if(transparent) {
                transparent = false;
                $('nav[role="navigation"]').removeClass('navbar-transparent');
                $('.logo img').attr('src','images/logo_dark.png');
            }
        } else {
            if( !transparent ) {
                transparent = true;
                $('nav[role="navigation"]').addClass('navbar-transparent');
                $('.logo img').attr('src','images/logo.png');
            }
        }
    }
});

+function ($) {

    'use strict';

    $("#navbar ul li a[href^='#']").on('click', function(e) {

        e.preventDefault()
        var hash = this.hash

        $('html, body').animate(
            {scrollTop: $(this.hash).offset().top}, 
            1000, 
            function(){
                window.location.hash = hash
            }
        );

    });

}(jQuery);










