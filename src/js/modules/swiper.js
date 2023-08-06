import { openModal } from "./modal";

function swiperRender() {
	// Swiper
	const tabsParent = document.querySelector('.weeklySwiper ');

	tabsParent.addEventListener('click', (e) => {
		const target = e.target;
		if(target && target.classList.contains('slide-box__button')) {
			openModal();
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
export default swiperRender;