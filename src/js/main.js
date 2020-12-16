/*
* to include js file write: `//= include ./path-to-file`
* */

//= include ../../node_modules/jquery/dist/jquery.js ;


// CUSTOM SCRIPTS

$(document).ready(function () {

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

    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();

        if ( scrolled > 100 && scrolled > scrollPrev ) {
            header.addClass('header_active');
        } else {
            header.removeClass('header_active');
        }
        scrollPrev = scrolled;
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
        $("#popup").addClass("modal_active");
        $("#overlay").fadeIn();
        $(".mouse-parallax__bg").addClass("rotate-back_blur");
        $(".mouse-parallax__bg-2").addClass("rotate-back");
        $(".img-intro").addClass("rotate-back");
        // $("body").addClass("modal-open");
    });

    $("#closePopup,  #overlay").click(function () {
        $("#popup").removeClass("modal_active");
        $("#overlay").fadeOut();
        $(".mouse-parallax__bg").removeClass("rotate-back_blur");
        $(".mouse-parallax__bg-2").removeClass("rotate-back");
        $(".img-intro").removeClass("rotate-back");
        // $("body").removeClass("modal-open");
    });

    var openBlock = $('#openText');

    $('.section-buy .open-info').on('click', function (e) {
        e.preventDefault();
        openBlock.addClass('open');

    });
});
