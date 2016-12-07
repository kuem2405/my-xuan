$(document).ready(function () {
    $('#tab-filter li a').click(function () {
        $('#tab-filter li').removeClass('selected');
        $(this).parent().addClass('selected');
        $('#tab-filter a').removeClass('active');
        $(this).addClass('active');
        $varfilter = $(this).attr('href');
        //alert($varfilter.substring(0, 1));
        showProjects($varfilter, false);
    });
});