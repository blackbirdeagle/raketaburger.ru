var map;
var map1;
var map2;
var map3;

ymaps.ready(function() {
    map = new ymaps.Map("map", {
        center: [55.752929, 37.622069],
        zoom: 12
    });

    var placemark1 = new ymaps.Placemark([55.729751, 37.639337],
        {
            balloonContent: 'Павелецкая площадь, д. 1а'
        },
        {
            iconImageHref: 'images/marker.png',
            iconImageSize: [30, 38],
            iconImageOffset: [-13, -33]
        }
    );

    var placemark2 = new ymaps.Placemark([55.756625, 37.660103],
        {
            balloonContent: 'пл. Курского Вокзала'
        },
        {
            iconImageHref: 'images/marker.png',
            iconImageSize: [30, 38],
            iconImageOffset: [-13, -33]
        }
    );

    var placemark3 = new ymaps.Placemark([55.776058, 37.655143],
        {
            balloonContent: 'Комсомольская площадь, д.3'
        },
        {
            iconImageHref: 'images/marker.png',
            iconImageSize: [30, 38],
            iconImageOffset: [-13, -33]
        }
    );

    map.geoObjects.add(placemark1);
    map.geoObjects.add(placemark2);
    map.geoObjects.add(placemark3);

    map.events.add('actiontick');
});

ymaps.ready(function() {
    map1 = new ymaps.Map("map1", {
        center: [55.729751, 37.639337],
        zoom: 12
    });

    var placemark = new ymaps.Placemark([55.729751, 37.639337],
        {
            balloonContent: 'Павелецкая площадь, д. 1а'
        },
        {
            iconImageHref: 'images/marker.png',
            iconImageSize: [30, 38],
            iconImageOffset: [-13, -33]
        }
    );

    map1.geoObjects.add(placemark);
    map1.events.add('actiontick');
});

ymaps.ready(function() {
    map2 = new ymaps.Map("map2", {
        center: [55.756625, 37.660103],
        zoom: 12
    });

    var placemark = new ymaps.Placemark([55.756625, 37.660103],
        {
            balloonContent: 'Павелецкая площадь, д. 1а'
        },
        {
            iconImageHref: 'images/marker.png',
            iconImageSize: [30, 38],
            iconImageOffset: [-13, -33]
        }
    );

    map2.geoObjects.add(placemark);
    map2.events.add('actiontick');
});

ymaps.ready(function() {
    map3 = new ymaps.Map("map3", {
        center: [55.776058, 37.655143],
        zoom: 12
    });

    var placemark = new ymaps.Placemark([55.776058, 37.655143],
        {
            balloonContent: 'Павелецкая площадь, д. 1а'
        },
        {
            iconImageHref: 'images/marker.png',
            iconImageSize: [30, 38],
            iconImageOffset: [-13, -33]
        }
    );

    map3.geoObjects.add(placemark);
    map3.events.add('actiontick');
});

function centerElements(){
    var leftN = $('.cells__item').width() / 2 - $('.link__menu').width() / 2;
    $('.link__menu').css('left', leftN);

    var leftM = $('.new__addr').width() / 2 - $('.new__roket').width() / 2;
    $('.new__roket').css('left', leftN);

    var leftR = $('.inst__wrap').width() / 2 - $('.social1').width() / 2;
    $('.social1').css('left', leftR);
}

centerElements();

$('.cells__item__addr').click(function(){
    var id = $(this).attr('map');

    $('.maps').hide();
    $('#' + id).show();
});

$(function(){
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});

$(document).ready(function() {

    $("#slider__addr").owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            570: {
                items: 1
            },
            600: {
                items: 1
            },
            991: {
                items: 1
            }
        },
        margin: 0,
        loop: false,
        autoplay: false,
        autoplayTimeout: 3000,
        touchDrag: true,
        dots: false,
        nav: true,
        navText: ['<img src = "images/prev.png" alt = ""/>', '<img src = "images/next.png" alt = ""/>'],
    });
});