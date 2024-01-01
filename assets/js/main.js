(function ($) {
    'use strict';

    /*=============================================
	=    		 Preloader			      =
=============================================*/
    function preloader() {
        $('#preloader').delay(0).fadeOut();
    }

    // swiper slider
    function thmSwiperInit() {
        const swiperElm = document.querySelectorAll('.thm-swiper__slider');
        swiperElm.forEach(function (swiperelm) {
            const swiperOptions = JSON.parse(swiperelm.dataset.swiperOptions);
            let thmSwiperSlider = new Swiper(swiperelm, swiperOptions);
        });
    }

    // Banner Slider //Home One
    if ($('.thm-swiper__slider-two').length > 0) {
        var bannerSlider = new Swiper('.thm-swiper__slider-two', {
            spaceBetween: 0,
            slidesPerView: 1,
            mousewheel: false,
            height: 500,
            grabCursor: true,
            loop: true,
            effect: 'slide',
            parallax: true,
            speed: 1400,
            autoplay: {
                delay: 10000,
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
            },
            navigation: {
                prevEl: '#main-slider-two__swiper-button-prev',
                nextEl: '#main-slider-two__swiper-button-next',
            },
        });
        bannerSlider.on('slideChange', function () {
            var csli = bannerSlider.realIndex + 1,
                curnum = $('#current');
            TweenMax.to(curnum, 0.2, {
                force3D: true,
                y: -10,
                opacity: 0,
                ease: Power2.easeOut,
                onComplete: function () {
                    TweenMax.to(curnum, 0.1, {
                        force3D: true,
                        y: 10,
                    });
                    curnum.html('' + csli);
                },
            });
            TweenMax.to(curnum, 0.2, {
                force3D: true,
                y: 0,
                delay: 0.3,
                opacity: 1,
                ease: Power2.easeOut,
            });
        });

        var totalSlides = bannerSlider.slides.length - 2;
        $('#total').html('' + totalSlides);
    }

    /*=============================================
	=    		 Wow Active  	         =
=============================================*/
    function wowAnimation() {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true,
        });
        wow.init();
    }

    /*=============================================
	=    		Mobile Menu			      =
=============================================*/
    //SubMenu Dropdown Toggle
    if ($('.menu-area li.menu-item-has-children ul').length) {
        $('.menu-area .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');
    }

    //Mobile Nav Hide Show
    if ($('.mobile-menu').length) {
        var mobileMenuContent = $('.menu-area .main-menu').html();
        $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);

        //Dropdown Button
        $('.mobile-menu li.menu-item-has-children .dropdown-btn').on('click', function () {
            $(this).toggleClass('open');
            $(this).prev('ul').slideToggle(300);
        });
        //Menu Toggle Btn
        $('.mobile-nav-toggler').on('click', function () {
            $('body').addClass('mobile-menu-visible');
        });

        //Menu Toggle Btn
        $('.menu-backdrop, .mobile-menu .close-btn').on('click', function () {
            $('body').removeClass('mobile-menu-visible');
        });
    }

    /*=============================================
	=     Menu sticky & Scroll to top      =
=============================================*/
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $('#sticky-header').removeClass('sticky-menu');
            $('.scroll-to-target').removeClass('open');
        } else {
            $('#sticky-header').addClass('sticky-menu');
            $('.scroll-to-target').addClass('open');
        }
    });

    /*=============================================
	=    		 Scroll Up  	         =
=============================================*/
    if ($('.scroll-to-target').length) {
        $('.scroll-to-target').on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate(
                {
                    scrollTop: $(target).offset().top,
                },
                1000
            );
        });
    }

    //Tabs Box
    if ($('.tabs-box').length) {
        $('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {
            e.preventDefault();
            var target = $($(this).attr('data-tab'));

            if ($(target).is(':visible')) {
                return false;
            } else {
                target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
                $(this).addClass('active-btn');
                target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
                target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
                $(target).fadeIn(300);
                $(target).addClass('active-tab');
            }
        });
    }

    // Progress Bar
    if ($('.count-bar').length) {
        $('.count-bar').appear(
            function () {
                var el = $(this);
                var percent = el.data('percent');
                $(el).css('width', percent).addClass('counted');
            },
            {
                accY: -50,
            }
        );
    }

    //====== Magnific Popup
    if ($('.video-popup').length) {
        $('.video-popup').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,

            fixedContentPos: false,
        });
    }

    /*=============================================
	=    		Odometer Active  	       =
=============================================*/
    $('.odometer').appear(function (e) {
        var odo = $('.odometer');
        odo.each(function () {
            var countNumber = $(this).attr('data-count');
            $(this).html(countNumber);
        });
    });

    /*=============================================
	=    		Search Toggler		      =
=============================================*/
    if ($('.search-toggler').length) {
        $('.search-toggler').on('click', function (e) {
            e.preventDefault();
            $('.search-popup').toggleClass('active');
            $('.mobile-nav__wrapper').removeClass('expanded');
            $('body').toggleClass('locked');
        });
    }

    $(window).on('load', function () {
        preloader();
        wowAnimation();
        thmSwiperInit();

        //Jquery Curved Circle
        if ($('.curved-circle').length) {
            $('.curved-circle').circleType({
                position: 'absolute',
                dir: 1,
                radius: 76,
                forceHeight: true,
                forceWidth: true,
            });
        }

        //Jquery Curved Circle
        if ($('.curved-circle-2').length) {
            $('.curved-circle-2').circleType({
                position: 'absolute',
                dir: 1,
                radius: 71,
                forceHeight: true,
                forceWidth: true,
            });
        }

        //Jquery Curved Circle
        if ($('.curved-circle-3').length) {
            $('.curved-circle-3').circleType({
                position: 'absolute',
                dir: 1,
                radius: 76,
                forceHeight: true,
                forceWidth: true,
            });
        }
    });
    ///////////////////////////////////////////////////
    // project-slider Js

    $('.accordion-title').click(function () {
        $('.accordion-title').not(this).removeClass('open');
        $('.accordion-title').not(this).next().slideUp(300);
        $(this).toggleClass('open');
        $(this).next().slideToggle(300);
    });
    ///////////////////////////////////////////////////
    // hero-slider Js
    $('.hero-slider').owlCarousel({
        //add owl carousel in activation class
        loop: true,
        autoplay: false,
        margin: 0,
        items: 4,
        nav: true,
        navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-right-arrow'></i>"],
        dots: true,
        dotsEach: 1,
        animateOut: 'slideOutLeft',
        animateIn: 'slideInRight',
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 1,
            },
            992: {
                items: 1,
            },
            1200: {
                items: 1,
            },
        },
    });

    ///////////////////////////////////////////////////
    // project-slider Js
    $('.project-slider').owlCarousel({
        //add owl carousel in activation class
        loop: true,
        autoplay: false,
        margin: 30,
        items: 4,
        nav: true,
        navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-right-arrow'></i>"],
        dots: true,
        dotsEach: 1,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            },
        },
    });
    ///////////////////////////////////////////////////
    // project-slider Js
    $('.project-slider2').owlCarousel({
        //add owl carousel in activation class
        loop: true,
        autoplay: false,
        margin: 30,
        items: 4,
        nav: true,
        navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-right-arrow'></i>"],
        dots: false,
        dotsEach: 1,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            },
        },
    });

    ///////////////////////////////////////////////////
    // brand-slider Js
    $('.brand-slider').owlCarousel({
        //add owl carousel in activation class
        loop: true,
        autoplay: true,
        margin: 30,
        items: 4,
        nav: false,
        dots: true,
        dotsEach: 1,
        responsive: {
            0: {
                items: 2,
            },
            767: {
                items: 3,
            },
            992: {
                items: 5,
            },
            1200: {
                items: 5,
            },
        },
    });
    ///////////////////////////////////////////////////
    // testimonial-slider Js
    $('.testimonial-slider').owlCarousel({
        //add owl carousel in activation class
        loop: true,
        autoplay: true,
        margin: 30,
        items: 4,
        nav: false,
        dots: true,
        dotsEach: 1,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 2,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 3,
            },
        },
    });
    ///////////////////////////////////////////////////
    // testimonial-slider Js
    $('.testimonial-slider2').owlCarousel({
        //add owl carousel in activation class
        loop: true,
        autoplay: true,
        margin: 30,
        items: 4,
        nav: true,
        navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-right-arrow'></i>"],
        dots: false,
        dotsEach: 1,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 1,
            },
            992: {
                items: 1,
            },
            1200: {
                items: 1,
            },
        },
    });
    ///////////////////////////////////////////////////
    // testimonial-slider Js
    $('.testimonial-slider3').owlCarousel({
        //add owl carousel in activation class
        loop: true,
        autoplay: true,
        margin: 30,
        items: 4,
        nav: false,
        dots: true,
        dotsEach: 1,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 1,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 2,
            },
        },
    });

    ///////////////////////////////////////////////////
    // team-slider Js
    $('.team-slider').owlCarousel({
        //add owl carousel in activation class
        loop: true,
        autoplay: false,
        margin: 30,
        items: 4,
        nav: true,
        navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-right-arrow'></i>"],
        dots: false,
        dotsEach: 1,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            },
        },
    });
    ///////////////////////////////////////////////////
    // swiper-slider Js
    $('.testing').progressBar({
        value: '70',
        height: '35',
    });
    $(document).ready(function () {
        $('select:not(.ignore)').niceSelect();
    });
})(jQuery);
