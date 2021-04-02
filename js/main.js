$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop:true,
        margin:0,
    });
    $(document.documentElement).keyup(function(event) {    
        if (event.keyCode == 37) { 
            owl.trigger('prev.owl.carousel', [700]);
        } else if (event.keyCode == 39) { 
            owl.trigger('next.owl.carousel', [700]);
        }
    });
});



