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

export default timer;