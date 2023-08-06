/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function burger() {
	// Меню-бургер

	const burgerToggle = document.querySelector('[data-toggle]'),
		burgerMenu = document.querySelector('.burger__menu');


	burgerToggle.addEventListener('click', () =>{
		if (burgerMenu.classList.contains('hidden') && burgerToggle.classList.contains('anim-back')) {
			burgerToggle.classList.remove('anim-back');
			burgerToggle.classList.add('anim');
			burgerMenu.classList.remove('hidden');
			burgerMenu.classList.add('active');
			document.body.style.overflow = 'hidden';

		} else if(burgerMenu.classList.contains('active') && burgerToggle.classList.contains('anim')) {
			burgerToggle.classList.remove('anim');
			burgerToggle.classList.add('anim-back');
			burgerMenu.classList.remove('active');
			burgerMenu.classList.add('hidden');
			document.body.style.overflow = '';
		}
	});

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burger);

/***/ }),

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/js/modules/modal.js");


function form() {
	// Forms

	const message = {
		loading: 'src/img/loading/load.gif',
		succses: 'Спасибо, скоро мы свяжемся с вами!',
		failure: 'Что-то пошло не так...'
	};

	const forms = document.querySelectorAll('form');

	forms.forEach((form) => {
		bindPostData(form);
	});

	function bindPostData(form) {
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

			const formData = new FormData(form);

			const postData = async (url, data) => {
				const res = await fetch(url, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: data
				});
				return await res.json();
			};

			// fetch('http://localhost:3000/cards', {
			// 	method: 'POST',
			// 	headers: {
			// 		'Content-Type': 'aplication/json'
			// 	},
			// 	body: JSON.stringify(obj)
			// })
			// 	.then((data) => data.text())

			const json = JSON.stringify(Object.fromEntries(formData.entries()));

			postData('http://localhost:3000/requests', json)
				.then((data) => {
					console.log(data);
					showThanksModal(message.succses);
					statusMessage.remove();
				}).catch(() => {
					showThanksModal(message.failure);
				}).finally(() => {
					form.reset();
				});
		});
	}

	function showThanksModal(message) {
		const previousModalDialog = document.querySelector('.modal__wrapper');

		previousModalDialog.classList.add('close');
		(0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)();

		const thanksModal = document.createElement('div');
		thanksModal.classList.add('modal__wrapper');

		thanksModal.innerHTML = `
		<div class='modal__content'>
		<div data-close class="close__button">Close ›</div>

	  <p class="title">${message}</p>
	  </div>
	  `;

		document.querySelector('.modal').append(thanksModal);

		setTimeout(() => {
			thanksModal.remove();
			previousModalDialog.classList.add('show');
			previousModalDialog.classList.remove('close');
			(0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)();
		}, 3000);
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeModal: () => (/* binding */ closeModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   openModal: () => (/* binding */ openModal)
/* harmony export */ });

const modalTrigger = document.querySelectorAll('[data-modal-trigger');

function openModal() {
modal = document.querySelector('[data-modal');
modal.classList.add('open');
modal.classList.remove('close');
document.body.style.overflow = 'hidden';
}

function closeModal() {
modal = document.querySelector('[data-modal');
modal.classList.add('close');
modal.classList.remove('open');
document.body.style.overflow = '';

}

function modal() {
		// Modal
	modalTrigger.forEach((btn) => {
		btn.addEventListener('click', () => {
			openModal();
		});
	});
	modal = document.querySelector('[data-modal');
	modal.addEventListener('click', (e) => {
		if (e.target === modal || e.target.getAttribute('data-close') == '') {
			closeModal();
		}
	});

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);


/***/ }),

/***/ "./src/js/modules/swiper.js":
/*!**********************************!*\
  !*** ./src/js/modules/swiper.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/js/modules/modal.js");


function swiperRender() {
	// Swiper
	const tabsParent = document.querySelector('.weeklySwiper ');

	tabsParent.addEventListener('click', (e) => {
		const target = e.target;
		if(target && target.classList.contains('slide-box__button')) {
			(0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)();
		}
	});

	let slide;
	let arr = [];

	axios.get('http://localhost:3000/cards')
		.then(data => data.data.forEach(({img, name, price}) => {
			slide =`
				<div class="slide-box">
					<div class="img-weekly__wrapper">
						<img src="${img}" class="swiper-slide__img-weekly">
						<div  class="slide-box__timer">
							<span id="hours"></span>
							<span id="minutes"></span>
							<span id="seconds"></span>
						</div>
					</div>
						<div class="slide-box__description">
							<div class="slide-box__name">${name}</div>
						<div class="slide-box__wrapper">
							<div class="slide-box__price">Current bid<br>${price}</div>
								<button data-modal-trigger class="slide-box__button">PLACE BID</button>
						</div>
					</div>
				</div>
					`;
			arr.push(slide);
		})
		).then(data => {
			var weeklySwiper = new Swiper('.weeklySwiper',
				{
					slidesPerView: 5,
					spaceBetween: 40,
					navigation: {
						nextEl: '.weeklySwiper-button-next',
						prevEl: '.weeklySwiper-button-prev',
					},
					virtual:{
						slides: arr
					},
					breakpoints: {

						320: {
							freemode:true,
							slidesPerView: 1,
						},
						640: {
							freemode:true,
							slidesPerView: 2,
							spaceBetween: 20,

						},

						1200: {
							freemode:true,
							slidesPerView: 5,
						}
					}
				});
		});
	var heroSwiper = new Swiper('.hero__swiper', {
		centerdSlides: true,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (swiperRender);

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer() {
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
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./src/js/modules/userRender.js":
/*!**************************************!*\
  !*** ./src/js/modules/userRender.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function userRender() {
	// Класс для юзеров

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
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userRender);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/form */ "./src/js/modules/form.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/swiper */ "./src/js/modules/swiper.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js");
/* harmony import */ var _modules_userRender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/userRender */ "./src/js/modules/userRender.js");







document.addEventListener('DOMContentLoaded', () => {
	(0,_modules_burger__WEBPACK_IMPORTED_MODULE_0__["default"])();
	(0,_modules_form__WEBPACK_IMPORTED_MODULE_1__["default"])();
	(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"])();
	(0,_modules_swiper__WEBPACK_IMPORTED_MODULE_3__["default"])();
	(0,_modules_timer__WEBPACK_IMPORTED_MODULE_4__["default"])();
	(0,_modules_userRender__WEBPACK_IMPORTED_MODULE_5__["default"])();

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


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map