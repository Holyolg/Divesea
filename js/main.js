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

	// Классы для юзеров

	class User {
		constructor(img, name, nickname, parentSelector, ...classes) {
			this.img = img;
			this.name = name;
			this.nickname = nickname;
			this.classes = classes;
			this.parentSelector = document.querySelector(parentSelector);

		}

		render() {
			const element = document.createElement('div');
			if (this.classes.length === 0) {
				this.element = 'best-seller__user';
				element.classList.add(this.element);
			} else {
				this.classes.forEach(className => element.classList.add(className));
			}

			element.innerHTML = `
			<div class="user__wrapper">
			  <div class="user__description">
				<img
				  src=${this.img}
				  class="avatar user__avatar"
				/>
				<div class="user__info">
				  <div class="name user__name">${this.name}</div>
				  <div class="nickname user__nickname">${this.nickname}</div>
				</div>
			  </div>
			  <button class="user__button button-white">
				Follow
			  </button>
			</div>
			`;
			this.parentSelector.append(element);
		}
	}

	new User (
		'src/img/avatars/avatar.png',
		'Alex Ca.',
		'@Alexey',
		'.best-seller__users'
	).render();
	new User (
		'src/img/avatars/image(3).png',
		'Juliya Sa.',
		'@JuliyaS',
		'.best-seller__users'
	).render();
	new User (
		'src/img/avatars/image(4).png',
		'Trevor',
		'@Trevor',
		'.best-seller__users'
	).render();
	new User (
		'src/img/avatars/image(1).png',
		'Ca',
		'@Ca',
		'.best-seller__users'
	).render();
	new User (
		'src/img/avatars/image(2).png',
		'Pu Ca.',
		'@Pu',
		'.best-seller__users'
	).render();
	new User (
		'src/img/avatars/icon.png',
		'Alex Ca.',
		'@Alexey',
		'.best-seller__users'
	).render();


	const users = document.querySelector('.best-seller-users');

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
		modal = document.querySelector('[data-modal');

	function openModal() {
		modal.classList.add('open');
		modal.classList.remove('close');
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		modal.classList.add('close');
		modal.classList.remove('open');
		document.body.style.overflow = '';

	}

	modalTrigger.forEach((btn) => {
		btn.addEventListener('click', () => {
			openModal();
		});
	});

	modal.addEventListener('click', (e) => {
		if (e.target === modal || e.target.getAttribute('data-close') == '') {
			console.log(e.target);

			closeModal();
		}
	});


	// Forms

	const message = {
		loading: 'src/img/loading/load.gif',
		succses: 'Спасибо, скоро мы свяжемся с вами!',
		failure: 'Что-то пошло не так...'
	};

	const forms = document.querySelectorAll('form');

	forms.forEach((form) => {
		postData(form);
	});

	function postData(form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();

			const statusMessage = document.createElement('img');
			statusMessage.src = message.loading;
			statusMessage.style.cssText = `
			display: block;
			margin: 0 auto;
			padding: 10px
			`;
			form.insertAdjacentElement('afterend', statusMessage);

			const request = new XMLHttpRequest();
			request.open('POST', 'server.php');

			request.setRequestHeader('Content-Type', 'aplication/json');
			const formData = new FormData(form);

			// Для json формата
			const obj = {};
			formData.forEach((value, key) => {
				obj[key] = value;
			});
			const json = JSON.stringify(obj);

			request.send(json);

			request.addEventListener('load', () => {
				if (request.status === 200) {
					showThanksModal(message.succses);
					form.reset();
					statusMessage.remove();
				} else {
					showThanksModal(message.failure);
				}
			});

		});
	}

	function showThanksModal(message) {
		const previousModalDialog = document.querySelector('.modal__wrapper');

		previousModalDialog.classList.add('close');
		openModal();

		const thanksModal = document.createElement('div');
		thanksModal.classList.add('modal__wrapper');

		thanksModal.innerHTML = `
		<div class='modal__content'>
		<div data-close class="close__button">
		<div class="close__button-block"></div>
		<div class="close__button-block"></div>
	  </div>

	  <p class="title">${message}</p>
	  </div>
	  `;

		document.querySelector('.modal').append(thanksModal);

		setTimeout(() => {
			thanksModal.remove();
			previousModalDialog.classList.add('show');
			previousModalDialog.classList.remove('close');
			closeModal();
		}, 3000);
	}

});




