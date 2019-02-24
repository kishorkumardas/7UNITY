$(document).ready(function(){

    $('.slider-active').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        arrows:false
      });
      // testomonial slider 
      $('.testomonial-active').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        arrows:false,
        autoplay:true,
        dots:true,
        autoplaySpeed: 1000
      });

      $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    $(function(){           
      $('.bck').backToTop({
        iconName: 'fas fa-arrow-up',
        fxName : 'fade',
        fxTransitionDuration : 300,
        scrollDuration : 3000
      });		
  });

})
