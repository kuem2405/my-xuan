$(document).ready(function () {
    $('#sliders').slick({
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000
    });


    $('#slider-project').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.list-projects').css('display', 'none');

    $('#slider-project.list-projects').css('display', 'block');

    $('#tab-filter li a').click(function () {
        $('#tab-filter li').removeClass('selected');
        $(this).parent().addClass('selected');
        $('#tab-filter a').removeClass('active');
        $(this).addClass('active');
        $varfilter = $(this).attr('href');
        //alert($varfilter.substring(0, 1));
        showProjects($varfilter, '#slider-project');
    });


    $('.slider-testimonials').slick({
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000
    });
});