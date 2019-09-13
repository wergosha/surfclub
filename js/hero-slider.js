$(document).ready(function(){
    var headerSlider = $('#headerSlider');

    headerSlider.on('initialized.owl.carousel', function(event){
        $('.slider-control__number-active').text(event.item.index + 1)
        $('.slider-control__number-total').text(event.item.count)
    });

    headerSlider.owlCarousel({
        items: 1,
        //loop: true,
        dots: false,
        smartSpeed: 1000,
    }); 
    $('#headerSliderRight').click(function() {
        headerSlider.trigger('next.owl.carousel');
    })
    $('#headerSliderLeft').click(function() {
        headerSlider.trigger('prev.owl.carousel');
    })
    headerSlider.on('changed.owl.carousel', function(event){
        $('.slider-control__number-active').text(event.item.index + 1)
        $('.slider-control__number-total').text(event.item.count)
    });
});