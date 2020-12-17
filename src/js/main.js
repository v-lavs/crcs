/*
* to include js file write: `//= include ./path-to-file`
* */

//= include ../../node_modules/jquery/dist/jquery.js ;


// CUSTOM SCRIPTS

$(document).ready(function () {
    function hideHeader() {
        $('.header').addClass('header_active');
    }

    //MOBILE MENU
    var nav = $('.header__nav');

    $('.btn-burger').click(function (e) {
        e.preventDefault();
        nav.addClass('open');
        jQuery('.backdrop').fadeIn();
    });

    $('.btn-close, .backdrop').click(function (e) {
        e.preventDefault();
        nav.removeClass('open');
        jQuery('.backdrop').fadeOut();
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

    /***
     * SMOOTH SCROLL TO ANCHOR
     **/

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
        $(".mouse-parallax__bg").addClass("rotate-back_blur");
        $(".mouse-parallax__bg-2").addClass("rotate-back");
        $(".img-intro").addClass("rotate-back");
        $("body").addClass("modal-open");
    });

    $("#closePopup,  #overlay").click(function () {
        $("#popup").removeClass("modal_active");
        $("#overlay").fadeOut();
        $(".mouse-parallax__bg").removeClass("rotate-back_blur");
        $(".mouse-parallax__bg-2").removeClass("rotate-back");
        $(".img-intro").removeClass("rotate-back");
        $("body").removeClass("modal-open");
    });

    $("#franchiseTrigger").click(function (e) {
        e.preventDefault();
        hideHeader();
        $(".modal").addClass("modal_active");
        $("#overlay").fadeIn();
        $("body").addClass("modal-open");
    });

    $("#closeFranchisePopup,  #overlay").click(function () {
        $(".modal").removeClass("modal_active");
        $("#overlay").fadeOut();
        $("body").removeClass("modal-open");
    });

    $(".open-drawer").click(function () {
        const drawer = $(this).attr('data-open');
        const currentSection =  $(this).parents(".section-buy");

        hideHeader();
        $(".section-buy .drawer").removeClass('open');

        currentSection.find('.' + drawer).addClass('open');
        currentSection.addClass('open-block');
    });

    $('.btn-close').click(function () {
        $('.drawer').removeClass('open');
        $(this).parents(".section-buy").removeClass('open-block');
    })
});
