document.addEventListener('DOMContentLoaded', () => {

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

//dataBase

const itemDB = [
  {
  img: '/src/Rectangle3.png',
  endTimer: '02h 09m 12s',
  name: 'Sun-Glass',
  price: '1.75'
}, 
{
  img: '/src/Rectangle3.png',
  endTimer: '02h 09m 12s',
  name: 'Sun-Glass',
  price: '1.75'
},
{
  img: '/src/Rectangle3.png',
  endTimer: '02h 09m 12s',
  name: 'Sun-Glass',
  price: '1.75'
},
{
  img: '/src/Rectangle3.png',
  endTimer: '02h 09m 12s',
  name: 'Sun-Glass',
  price: '1.75'
},
{
  img: '/src/Rectangle3.png',
  endTimer: '02h 09m 12s',
  name: 'Sun-Glass',
  price: '1.75'
},
{
  img: '/src/Rectangle3.png',
  endTimer: '02h 09m 12s',
  name: 'Sun-Glass',
  price: '1.75'
}
]

    
  const weeklySwiperItems = document.querySelector('#weeklySwiper')
  const removeItemsFromDB = (parent) => {
    weeklySwiperItems.innerHTML = '';
  }

  function addItemsFromDB(dataBase, parent) {
    removeItemsFromDB(parent)
    for (let i = 0; i < dataBase.length; i++) {
    console.log(dataBase[i])
      parent.innerHTML += `
      <div class="swiper-slide">
      <div class="slide-box">
         <div class="img-weekly__wrapper"> 
          <img src="${dataBase[i].img}" class="swiper-slide__img-weekly">
          <div class="slide-box__timer">${dataBase[i].endTimer}
          </div>
      </div>
          <div class="slide-box__description">
              <div class="slide-box__name">${dataBase[i].name}</div>
          <div class="slide-box__wrapper">
          <div class="slide-box__price">${dataBase[i].price}</div>
     
          <button class="slide-box__button">PLACE BID</button>
      </div>
          </div>
      </div>
  </div>
      `;}
  }

  addItemsFromDB(itemDB, weeklySwiperItems)

});