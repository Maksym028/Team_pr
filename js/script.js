$(document).ready(function(){
    $(function () {
        $('#quote-carousel').carousel({
            interval: 10000,
            keyboard: false,
            pause: 'hover',
            ride: 'carousel',
            wrap: false
        });
    });
    $('#quote-carousel').on('slid.bs.carousel', function (event) {
        var nextactiveslide = $(event.relatedTarget).index();
        var $btns = $('.carousel-buttons');
        var $active = $btns.find("[data-slide-to='" + nextactiveslide + "']");
        $btns.find('.img-circle').removeClass('active');
        $active.find('.img-circle').addClass('active');
      
    });
});