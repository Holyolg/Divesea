import {openModal, closeModal} from './modal';

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
		openModal();

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
			closeModal();
		}, 3000);
	}
}

export default form;