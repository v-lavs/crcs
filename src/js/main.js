/*
* to include js file write: `//= include ./path-to-file`
* */

//= include ../../node_modules/jquery/dist/jquery.js ;
//= include ../lib/waypoints/index.js

// CUSTOM SCRIPTS

$(document).ready(function () {
    function hideHeader() {
        $('.header').addClass('header_active');
    }

    //MOBILE MENU
    var nav = $('.header__nav');

    $('.btn-burger').on("click", function (e) {
        e.preventDefault();
        nav.addClass('open');
        jQuery('.backdrop').fadeIn();
        $("body").addClass("modal-open");
    });

    $('.btn-close, .backdrop, .menu__link').click(function (e) {
        e.preventDefault();
        nav.removeClass('open');
        jQuery('.backdrop').fadeOut();
        $("body").removeClass("modal-open");
    });

    //HEADER SCROLL
    var header = $('.header'),
        scrollPrev = 0;

    $(window).scroll(function () {
        var scrolled = $(window).scrollTop();

        if (scrolled > 100 && scrolled > scrollPrev) {
            header.addClass('header_active');
        } else {
            header.removeClass('header_active');
        }
        scrollPrev = scrolled;
    });


     // SMOOTH SCROLL TO ANCHOR
    function smoothScrollToAnchor(selector) {
        $(selector).on('click', function (event) {
            var anchor = $.attr(this, 'href');

            if (anchor.match(/^#/) && anchor !== '#') {
                event.preventDefault();

                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top - 0
                }, 1000);
            }
        });
    }

    smoothScrollToAnchor('.menu__link');

    $(window).on('load', function () {
        $('.section-intro').addClass('anim_active');
    });

    //MOUSE-PARALLAX
    $('.mouse-parallax').on('mousemove', (e) => {
        const x = e.clientX / $(window).width();
        const y = e.clientY / $(window).height();
        const $activeSection = $(e.currentTarget);

        $activeSection.find('.mouse-parallax__bg').css(
            'transform',
            'translate(-' + x * 40 + 'px, -' + y * 40 + 'px)',
        );
        $activeSection.find('.mouse-parallax__bg-2').css(
            'transform',
            'translate(+' + x * 40 + 'px, +' + y * 40 + 'px)',
        );
    });

    // POPUP
    $("#popupTrigger").click(function (e) {
        e.preventDefault();
        hideHeader();
        $("#popup").addClass("modal_active");
        $("#overlay").fadeIn();
        $(".section-intro").addClass("anim-back_active");
        $("body").addClass("modal-open");
    });

    $("#closePopup,  #overlay").click(function () {
        $("#popup").removeClass("modal_active");
        $("#overlay").fadeOut();
        $(".section-intro").removeClass("anim-back_active");
        $("body").removeClass("modal-open");
    });

    $("#franchiseTrigger").click(function (e) {
        e.preventDefault();

        $(".modal_franchise").addClass("modal_active");
        $("#overlay").fadeIn();
        $("body").addClass("modal-open");
    });

    $("#closeFranchisePopup,  #overlay").click(function () {
        $(".modal_franchise").removeClass("modal_active");
        $("#overlay").fadeOut();
        $("body").removeClass("modal-open");
    });

    $(".open-drawer").click(function () {
        const drawer = $(this).attr('data-open');
        const currentSection = $(this).parents(".section-buy");

        hideHeader();
        $(".section-buy .drawer").removeClass('open');

        currentSection.find('.' + drawer).addClass('open');
        currentSection.addClass('open-block');
    });

    $('.btn-close').click(function () {
        $('.drawer').removeClass('open');
        $('.header').removeClass('header_active');
        $(this).parents(".section-buy").removeClass('open-block');
    });


    //READ MORE BTN

    $('.text-hide .open-up').click(function(e) {
        e.preventDefault();
        $('.text-hide .mob-hide').removeClass('mob-hide');
        $(this).hide();
    });


    // ANIMATION
    var fadeInBlocks = $('.anim-block').waypoint(function (direction) {
        $(this.element).addClass('anim_active')
    }, {
        offset: '80%'
    });

    var scaleBlocks = $('.scale').waypoint(function (direction) {
        $(this.element).addClass('active')
    }, {
        offset: '80%'
    });
});
