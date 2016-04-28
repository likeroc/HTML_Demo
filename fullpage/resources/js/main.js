(function($) {
    "use strict";

    $('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 40
                }, 900);
                return false;
            }
        }
    });

    /* White Background on Scroll */
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 650;
        if ($(window).scrollTop() > navHeight) {
            $('#main-menu').addClass('on');
        } else {
            $('#main-menu').removeClass('on');
        }
    });

    $('body').scrollspy({
        target: '.navbar-default',
        offset: 80
    })

    /* PAGE LOADER */
    $('.loader').fadeOut(); // will first fade out the loading animation
    $('.preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });

    $(".text-rotator").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "bounceIn",
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: ",",
        // The delay between the changing of each phrase in milliseconds.
        speed: 2000,
        complete: function () {
            // Called after the entrance animation is executed.
        }
    });



   /*/ Counter Up
    =============================================== */
        jQuery(document).ready(function ($) {
            $('.counter').counterUp({
                delay: 10,
                time: 800
            });
        });



    $(function(){
        $('#owl-wrap').owlCarousel({
            items: 4,
            itemsCustom: false,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [980, 3],
            itemsTablet: [768, 3],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            singleItem: false,
            startDragging: true,
            autoPlay: 6000
        });
    });
    $('.fav').click(function(){
        $(this).parent().toggleClass('active ')
        $(this).toggleClass('bounceIn animated')
    })

    /* WOW */
    /*$(document).ready(function () {
        var wow = new WOW(
            {
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0, // distance to the element when triggering the animation (default is 0)
                mobile: false        // trigger animations on mobile devices (true is default)
            }
        );
        wow.init();
    });*/

    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
        new WOW().init();
    };

    /* Testimonial Carousel */
   /* $("#testimonial").owlCarousel({
        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true
    });

    *//* Team Carousel *//*
    $(".team").owlCarousel({
     
          navigation : false, // Show next and prev buttons
          pagination : false,
          slideSpeed : 300,
          paginationSpeed : 400,
          autoHeight : true,
          itemsCustom : [
                        [0, 1],
                        [450, 2],
                        [600, 2],
                        [700, 2],
                        [1000, 3],
                        [1200, 3],
                        [1400, 3],
                        [1600, 3]
                      ]
    });
*/
 /*   *//* MagnificPopup Lightbox *//*
    $('#lightbox').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true,
            removalDelay: 500,
            mainClass: 'mfp-with-zoom' // this class is for CSS animation below
        }
    });

    *//* Inline Lightbox *//*
    $('.open-popup-link').magnificPopup({

        type: 'inline',
        midClick: true,
        removalDelay: 500,
        mainClass: 'mfp-fade'

    });*/

    /* Skills */
    $('.skills .skills-item').each(function() {
        var progress = $(this).data('progress');
        $(this).css('width', progress + '%');
    });


    /*$(window).load(function() {
        var $container = $('#lightbox');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });*/

})(jQuery);