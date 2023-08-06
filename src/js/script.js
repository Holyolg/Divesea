import burger from "./modules/burger";
import form from "./modules/form";
import modal from "./modules/modal";
import swiperRender from "./modules/swiper";
import timer from "./modules/timer";
import userRender from "./modules/userRender";

document.addEventListener('DOMContentLoaded', () => {
	burger();
	form();
	modal();
	swiperRender();
	timer();
	userRender();

	//const users = document.querySelector('.best-seller-users');

	// const deadline = '2023-09-28'

	// function getZero(num) {
	// if (num >= 0 && num < 10) {
	//   return `0${num}`
	// } else {
	//   return num
	// }
	// }

	// function getTimeRemaining(endtime) {
	// let days, hours, minutes, seconds;
	// const t = Date.parse(endtime) - Date.parse(new Date());

	// if (t <= 0) {
	//   days = 0;
	//   hours = 0;
	//   minutes = 0;
	//   seconds = 0;
	// } else {
	//   days = Math.floor(t / (1000 * 60 * 60 * 24 )),
	//   hours = Math.floor(t / (1000 * 60 * 60) % 24 ),
	//   minutes = Math.floor(t / (1000 / 1000) % 60 ),
	//   seconds = Math.floor(t / 1000 % 60);
	// }
	// return {
	//   'total' : t,
	//   days,
	//   hours,
	//   minutes,
	//   seconds
	// };
	// }

	// function setClock(endtime) {

	// timerInterval = setInterval(updateClock, 1000)

	// function updateClock() {
	//   const t = getTimeRemaining(endtime);

	//   if (t.total <= 0) {
	//     clearInterval(timerInterval)
	//   }
	// }
	// }

	// setClock(deadline);


	// add swiper items

	// const weeklySwiperItems = document.querySelector('#weeklySwiper')

	// const removeItemsFromDB = (parent) => {
	//   weeklySwiperItems.innerHTML = '';
	// }

	// function addItemsFromDB(dataBase, parent) {
	//   removeItemsFromDB(parent)
	//   for (let i = 0; i < dataBase.length; i++) {

	//     parent.innerHTML += `
	//     <div class="swiper-slide">
	//     <div class="slide-box">
	//        <div class="img-weekly__wrapper">
	//         <img src="2" class="swiper-slide__img-weekly">
	//         <div  class="slide-box__timer">
	//         <span id="hours">07h</span>
	//         <span id="minutes">09m</span>
	//         <span id="seconds">12s</span>
	//         </div>
	//     </div>
	//         <div class="slide-box__description">
	//             <div class="slide-box__name">2</div>
	//         <div class="slide-box__wrapper">
	//         <div class="slide-box__price"></div>

	//         <button class="slide-box__button">PLACE BID</button>
	//     </div>
	//         </div>
	//     </div>
	// </div>
	//     `;

	//   }
	// }

	// addItemsFromDB(itemDB, weeklySwiperItems)

});

