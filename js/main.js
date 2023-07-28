'use strict';
document.addEventListener('DOMContentLoaded', () => {

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
			price: '1.25'
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
	];

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

	let slide;

	function addItemsFromDB(dataBase) {




		for (let i = 0; i < dataBase.length; i++) {
			slide = `<div class="slide-box">
<div class="img-weekly__wrapper">
 <img src="${dataBase[i].img}" class="swiper-slide__img-weekly">
 <div  class="slide-box__timer">
 <span id="hours"></span>
 <span id="minutes"></span>
 <span id="seconds"></span>
 </div>
</div>
 <div class="slide-box__description">
     <div class="slide-box__name">${dataBase[i].name}</div>
 <div class="slide-box__wrapper">
 <div class="slide-box__price">${dataBase[i].price}</div>

 <button data-modal-trigger class="slide-box__button">PLACE BID</button>
</div>
 </div>
</div>`;
		} return slide;  }



	var heroSwiper = new Swiper('.hero__swiper', {
		centerdSlides: true,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	var weeklySwiper = new Swiper('.weeklySwiper', {
		slidesPerView: 5,
		spaceBetween: 20,
		navigation: {
			nextEl: '.weeklySwiper-button-next',
			prevEl: '.weeklySwiper-button-prev',
		},
		virtual:{
			slides: (function () {
				var slides = [];
				for (var i = 0; i < itemDB.length; i += 1) {
					slides.push(addItemsFromDB(itemDB));
				}
				return slides;
			}()),
		},

	});




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


	// Timer

	const deadline = '2023-12-28';

	function getZero(num) {
		if (num >= 0 && num < 10) {
			return `0${num}`;
		} else {
			return `${num}`;
		}
	}

	function getTimeRemaining(endtime) {
		let days, hours, minutes, seconds;
		const t = Date.parse(endtime) - Date.parse(new Date());

		if (t <= 0) {
			days = 0;
			hours = 0;
			minutes = 0;
			seconds = 0;
		} else {
			days = Math.floor(t / (1000 * 60 * 60 * 24 )),
			hours = Math.floor(t / (1000 * 60 * 60) % 24 ),
			minutes = Math.floor(t / (1000 / 60) % 60 ),
			seconds = Math.floor(t / 1000 % 60);
		}
		return {
			'total' : t,
			days,
			hours,
			minutes,
			seconds
		};
	}

	function setClock(selector, endtime) {
		const timer = document.querySelectorAll(selector);

		let timerInterval = setInterval(
			function getAllParents() {
				timer.forEach((i) => {
					let	hours = i.querySelector('#hours'),
						minutes = i.querySelector('#minutes'),
						seconds = i.querySelector('#seconds');

					updateClock();

					function updateClock() {
						const t = getTimeRemaining(endtime);

						// days.innerHTML = getZero(t.days);
						hours.innerHTML = `${getZero(t.hours)}h`;
						minutes.innerHTML = `${getZero(t.minutes)}m`;
						seconds.innerHTML = `${getZero(t.seconds)}s`;

						if (t.total <= 0) {
							clearInterval(timerInterval);
						}
					}
				});}, 1000);

	}

	setClock('.slide-box__timer', deadline);

	// Modal

	const modalTrigger = document.querySelectorAll('[data-modal-trigger'),
		modalClose = document.querySelector('[data-close]'),
		modal = document.querySelector('[data-modal');
	console.log(modalTrigger);

	function openModal() {
		modal.classList.add('open');
		modal.classList.remove('close');
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		modal.classList.remove('open');
		modal.classList.add('close');
		document.body.style.overflow = '';

	}

	modalTrigger.forEach((btn) => {
		btn.addEventListener('click', () => {
			openModal();
		});
	});

	modalClose.addEventListener('click', closeModal);

	document.addEventListener('click', (e) => {
		if (e.target === modal) {
			closeModal();
		}
	});

});