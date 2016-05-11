$(document).ready(function(){
    var map = new Map();
    map.init();
    var scrollToTop = function () {
        var offset = $('body').scrollTop();
        var tId = arguments[0];
        var decrement = arguments[1] || 100;
        var timeToCall = arguments[2] || 10;

        if (offset <= 0) {
            clearTimeout(tId);
            return;
        }
        tId = setTimeout(function () {
            $('body').scrollTop(offset - decrement);
            scrollToTop(tId, decrement, timeToCall);
        }
        , timeToCall);
    };
    
    $(document).scroll(function () {
        $(this).scrollTop() > 300 ? $('.scroller').show() : $('.scroller').hide();
    });

    $('.scroller').click(function () { scrollToTop(); });
    
    $('.side-ul-alt li a').click(function() {
        $('.side-ul-alt li a').removeClass("text-pink");
        $(this).toggleClass("text-pink");
    });
    
    $('.index-img-switcher').click(function(e){
        e.preventDefault();
        $(this).parent('div').siblings('div').find('.index-img-switcher').removeClass('active');
        $(this).addClass('active');
        if($(this).text().toLowerCase().indexOf('карта') > -1) {
            $(this).parent().parent().parent().find('.index-interior-img').toggleClass('hidden');
            $(this).parent().parent().parent().find('.index-map').toggleClass('hidden');
        } else {
            $(this).parent().parent().parent().find('.index-interior-img').toggleClass('hidden');
            $(this).parent().parent().parent().find('.index-map').toggleClass('hidden');
        }
    });
    $('.owl-carousel-index-brands').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    $('.owl-carousel-index-salons').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });
});