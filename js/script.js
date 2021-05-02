
// banner slider start


$('.banner_slider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
   
    fade: true,
    prevArrow: '<i class="fas fa-arrow-circle-left prev"></i>',
    nextArrow: '<i class="fas fa-arrow-circle-right next"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
         
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

//   banner slider end

//  service slider start


$('.service-slider').slick({
  dots: false,
  infinite: true,
  arrows: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  prevArrow: '<i class="fas fa-chevron-up up"></i>',
  nextArrow: '<i class="fas fa-chevron-down down"></i>',
  centerMode: true,
  centerPadding: "0",
  
 
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//  our service part end

//  testimonial part start

$('.testimonial-slider').slick({
  dots: false,
  infinite: true,
  arrows: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  prevArrow: '<i class="fas fa-chevron-up up"></i>',
  nextArrow: '<i class="fas fa-chevron-down down"></i>',
  centerMode: true,
  centerPadding: "0",
  asNavFor: ".testimonial-text-slider",
 
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
        arrows: false,
        dots: true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
        arrows: false,
        dots: true,
        
       
       
        
      
       
       
      },
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//  testimonial part end

$('.testimonial-text-slider').slick({
  dots: false,
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: ".testimonial-slider",
  
 
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.twinty').counterUp({
  delay: 10,
  time: 1000
});

$('.team-slider').slick({
  dots: false,
  infinite: true,
  arrows: false,
  autoplay: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
 
 
  
 
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$(document).ready(function(){
  $('.venobox').venobox(); 
});

$('.footer-slider').slick({
  dots: false,
  infinite: true,
  arrows: false,
  autoplay: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0",
 
 
  
 
  responsive: [

    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        // infinite: true,
        // dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        // infinite: true,
        // dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinity: true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$(document).ready(function(){
  $('.venobox').venobox(); 
});