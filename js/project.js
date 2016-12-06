$(document).ready(function () {
    $('#tab-filter a').click(function () {
        $('#tab-filter a').removeClass('active');
        $(this).addClass('active');
        $varfilter = $(this).attr('href');
        //alert($varfilter.substring(0, 1));
        showProjects($varfilter, false);
    });
});