$(document).ready(function(){

    var shopSlider = $('#shopSlider');

    shopSlider.owlCarousel({
        items: 3,
        loop: true,
        dots: false,
        smartSpeed: 500,
    }); 
    $('#shopSliderRight').click(function() {
        shopSlider.trigger('next.owl.carousel');
    })
    $('#shopSliderLeft').click(function() {
        shopSlider.trigger('prev.owl.carousel');
    })
    // headerSlider.on('changed.owl.carousel', function(event){
    //     $('.slider-control__number-active').text(event.item.index + 1)
    //     $('.slider-control__number-total').text(event.item.count)
    // });
});