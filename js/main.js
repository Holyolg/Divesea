var heroSwiper = new Swiper('.hero__swiper', {
    centerdSlides: true, 
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

})

var weeklySwiper = new Swiper('.weeklySwiper', {
  slidesPerView: 5,
  spaceBetween: 20,
  navigation: {
      nextEl: '.weeklySwiper-button-next',
      prevEl: '.weeklySwiper-button-prev',
    },

})

