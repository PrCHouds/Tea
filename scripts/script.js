wow = new WOW(
    {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    }
)
wow.init();

lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
});

$(document).ready(function () {
    var $slider = $('.slider-items');

    $slider.slick({
        autoplay: false,
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('#prevSlide').on('click', function () {
        $slider.slick('slickPrev');
    });

    $('#nextSlide').on('click', function () {
        $slider.slick('slickNext');
    });
});

$(function () {
    $("#accordion").accordion({
        collapsible: true,
        activate: function (event, ui) {
            $(".accordion-icon").removeClass("up");
            if (ui.newHeader.length) {
                ui.newHeader.find(".accordion-icon").addClass("up");
            }
        }
    });
});

$(function () {
    $("#accordion").accordion({
        collapsible: true,
        beforeActivate: function (event, ui) {
            // Убираем класс 'up' у всех иконок
            $(".accordion-icon").removeClass("up");

            // Если открывается новый заголовок — добавляем 'up'
            if (ui.newHeader.length) {
                ui.newHeader.find(".accordion-icon").addClass("up");
            }
        }
    });
});

$('#input-index').on("keydown", function (event) {
    if (
        (event.ctrlKey && [65, 67, 86, 88].includes(event.keyCode)) ||
        [8, 9, 27, 13, 46].includes(event.keyCode) ||
        (event.keyCode >= 37 && event.keyCode <= 40)
    ) {
        return;
    }
    if (isNaN(event.key)){
        event.preventDefault();
    }
});

$('.form-btn').on("click", function () {
    let userMistakes = 0;
    let inputValues = $('.check');
    for (let i = 0; i < inputValues.length; i++) {
        console.log(inputValues[i].value);
        if (inputValues[i].value === ""){
            alert("Пожалуйста, заполните все поля");
            userMistakes++;
            break;
        }
    }
    let index = $('#input-index')
    if (index.val().length !== 6) {
        alert("Индекс должен содержать 6 символов!");
        userMistakes++;
    }
    if (userMistakes === 0) {
        $('.form-block').addClass('d-none');
        $('#after-form-text').removeClass('d-none');
    }
});

