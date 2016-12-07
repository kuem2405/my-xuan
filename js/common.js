$(document).ready(function () {
    navShowSmart( $('#main-menu button'), $('#main-menu') );
    filterBtnSp ();
});

function filterBtnSp (){
    if($('#tab-filter')) {
        $('#tab-filter').prepend('<a class="icon-filter"><i class="fa fa-filter" aria-hidden="true"></i></a>');
        $('.icon-filter').click(function () {
            if($(this).hasClass('open-filter')) {
                $(this).removeClass('open-filter');
                $(this).addClass('close-filter');
                $(this).parent().children('li').not('.selected').css('display', 'none');
            } else {
                $(this).removeClass('close-filter');
                $(this).addClass('open-filter');
                $(this).parent().children('li').css('display', 'block');
            }
        });
        if($(window).width() <= 768) {
            $('.icon-filter').css('display', 'block');
            $('.icon-filter').addClass('close-filter');
            $('.icon-filter').removeClass('open-filter');
            $('#tab-filter li').attr('style', '');
        } else {
            $('.icon-filter').css('display', 'none');
            $('.icon-filter').addClass('close-filter');
            $('.icon-filter').removeClass('open-filter');
            $('#tab-filter li').attr('style', '');
        }
        $(window).resize(function () {
            if($(window).width() <= 768) {
                $('.icon-filter').css('display', 'block');
                $('.icon-filter').addClass('close-filter');
                $('.icon-filter').removeClass('open-filter');
                $('#tab-filter li').attr('style', '');
            } else {
                $('.icon-filter').css('display', 'none');
                $('.icon-filter').addClass('close-filter');
                $('.icon-filter').removeClass('open-filter');
                $('#tab-filter li').attr('style', '');
            }
        });

        $('#tab-filter li').click (function () {
            if($(window).width() <= 768) {
                $(this).parent().children('li').not('.selected').css('display', 'none');
                $('.icon-filter').addClass('close-filter');
                $('.icon-filter').removeClass('open-filter');
            }
        });
    }
}

function navShowSmart( $button, $content ) {
    $content.children('ul, a').addClass('animated');
    $button.click (function () {
       if($content.hasClass('open-main-menu')) {
           $content.children('ul, a').addClass( 'lightSpeedOut' ).removeClass( 'lightSpeedIn' );
           setTimeout(function () {
               $content.children('ul, a').css( 'display', 'none');
               $content.removeClass('open-main-menu');
               $content.addClass('close-main-menu');
           }, 1000);
       } else {
           $content.removeClass('close-main-menu');
           $content.addClass('open-main-menu');
           $content.children('ul, a').css( 'display', 'block');
           $content.children('ul, a').addClass( 'lightSpeedIn' ).removeClass( 'lightSpeedOut' );
       }
    });

    $(window).resize(function () {
        if($content.hasClass('open-main-menu')) {
            $content.children('ul, a').addClass( 'lightSpeedOut' ).removeClass( 'lightSpeedIn' );
            setTimeout(function () {
                $content.children('ul, a').css( 'display', 'none');
                $content.removeClass('open-main-menu');
                $content.addClass('close-main-menu');
            }, 1000);
        }

        if( $(this).width() >= 950 ) {
            $content.children('ul, a').removeClass( 'lightSpeedIn, lightSpeedOut' ).css( 'display', 'block');
        } else {
            $content.children('ul, a').css( 'display', 'none');
        }
    });
}

function showProjects($filter, $slider) {
    //typeof $filter='all-projects';
    $('.list-projects a').parent().addClass('animated bounceOut');
    $('.list-projects a').parent().removeClass('bounceIn');
    if( $filter == '#all-project' ) {
        if($slider){
            // $('.list-projects').css('display', 'none');
            // $('#slider-project.list-projects').css('display', 'block');
            $($slider).slick('slickUnfilter');
        }
        $('.list-projects a').parent().addClass('animated bounceIn');
        $('.list-projects a').parent().removeClass('bounceOut');
        //$('.list-projects a').parent().css('display', 'block');
    } else {
        if($slider) {
            //$('.list-projects').unslick();
            // $('.list-projects').css('display', 'block');
            // $('#slider-project.list-projects').css('display', 'none');
            $($slider).slick('slickUnfilter');
        }
        $('.list-projects a').each(function () {
            var parentElement = $(this).parent();
            var arrayCats = $(this).attr('data-categories').split(',');
            for ($i = 0; $i <= $(arrayCats).length; $i++) {
                if ("#" + arrayCats[$i] == $filter) {
                    $(parentElement).addClass('animated bounceIn');
                    $(parentElement).removeClass('bounceOut');
                }
            }
        });
        if($slider){
            // $('.list-projects').css('display', 'none');
            // $('#slider-project.list-projects').css('display', 'block');
            $($slider).slick('slickFilter', '.bounceIn' );
        }
    }

    $('.list-projects > div').css('transition', '1s all');
    setTimeout(function () {
        $('.list-projects .bounceOut').css('display', 'none');
    }, 800);
    $('.list-projects .bounceIn').css('display', 'block');
}

function accordion( contents ) {
    $( contents ).each( function () {
        var countP = $(this).children().length;
        if( countP >= 2 ) {
            $(this).children().not(':first-child').addClass('animated').css('display', 'none');
            //$(this).children().first().css('display', 'block');
            $(this).append('<p class="read-more"><a href="#"><i class="fa fa-plus"></i> Read more</a></p>');
        }
    });
    $('.read-more a').click( function (e) {
        if($(this).hasClass('in-open')) {
            $(this).addClass('in-close');
            $(this).removeClass('in-open');
            $(this).html('<i class="fa fa-plus"></i> Read more');
            $(this).parents(contents).children('.animated').removeClass('zoomIn').addClass('zoomOut');
            var childAnimation = $(this).parents(contents).children('.animated');
            setTimeout(function () {
                $(childAnimation).css('display', 'none');
            }, 500);
        } else {
            $(this).addClass('in-open');
            $(this).removeClass('in-close');
            $(this).html('<i class="fa fa-minus"></i> Read more');
            $(this).parents(contents).children('.animated').css('display', 'block').removeClass('zoomOut').addClass('zoomIn');
        }

        e.preventDefault();
    });
}