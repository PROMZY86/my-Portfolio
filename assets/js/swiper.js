var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false  
    },
    slidesPerView: 4, // Show 3 testimonials at a time
     spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    
   
    breakpoints: {
    1200 :{
        slidesPerView : 4,
        // spaceBetween: 10

    },
   800 : {
          slidesPerView: 3 ,
           spaceBetween:  40// Keep 3 visible on larger screens
      },
    600: {
          slidesPerView: 2,
          spaceBetween: 10// Show 1 per view on smaller screens
      },

    100 : {
        slidesPerView :1, 
        spaceBetween : 10
    }
  }

});
