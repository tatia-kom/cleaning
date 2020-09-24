$(document).ready(function() {

    $(window).scroll(function() {
        if ($(window).scrollTop() > 192) {
            $('.header').addClass('header--scroll');
        }
        else {
            $('.header').removeClass('header--scroll');
        }
    });

    $('.header__mobile-menu-button').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('header__mobile-menu-button--active');
        $('.header-menu').toggleClass('header-menu--active');
    });

    $('.furniture-slider').slick({
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                   slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.reviews__slider').slick({
        dots: true,
        fade: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $('.tel-input').inputmask({
        "mask": "+7 (999) 999-99-99"
        , "placeholder": "_"
        , showMaskOnHover: false
        , showMaskOnFocus: true
    });

    // calculator

    $('.calculator-count__button').click(function(e) {
        e.preventDefault();
        var input = $(this).parent().find('.calculator-count__num');
        var num = parseInt(input.val());

        if ($(this).hasClass('calculator-count__button--minus')) {
            if (num > 0) {
                input.val(num-1);
            }
        }
        else {
            input.val(num+1);
        }

        if (input.attr('id') == 'rooms') {
            if (input.val() > 4) {
                $('#square').addClass('calculator-block--active');
            }
            else {
                $('#square').removeClass('calculator-block--active');
            }
        }
    });

    // navigation

    $('.header-menu__link').click(function(e) {
        e.preventDefault();
        var href = $(this).attr('href');
        var num = $(href).offset().top;
        if ($(window).width() < 768) {
            num = num - 100;
        }
        $('html, body').animate({scrollTop: num + 'px'});

        $('.header__mobile-menu-button').removeClass('header__mobile-menu-button--active');
        $('.header-menu').removeClass('header-menu--active');
    });

    $('.goToCalc').click(function(e) {
        $('html, body').animate({scrollTop: $('#calculator').offset().top + 'px'});
    });

    // modal

    $('.open-modal').click(function(e) {
        e.preventDefault();
        var modal = $(this).attr('data-modal');
        $(modal).addClass('modal--active');
    });

    $('.modal').click(function(e) {
        e.preventDefault();
        $(this).removeClass('modal--active');
    });

    $('.modal__content').click(function(e) {
        e.stopPropagation();
    });

    $('.modal__close').click(function(e) {
        e.preventDefault();
        $(this).parents('.modal').removeClass('modal--active');
    });

    $('.review__before').click(function(e) {
        e.preventDefault();
        var img = $(this).find('img').attr('src');
        $('#photo img').attr('src', img);
        $('#photo').addClass('modal--active');
    });

    $('.review__after').click(function(e) {
        e.preventDefault();
        var img = $(this).find('img').attr('src');
        $('#photo img').attr('src', img);
        $('#photo').addClass('modal--active');
    });


    $('#datetimeInput').datepicker({
        minDate: new Date(),
        timepicker: true
    });
});

