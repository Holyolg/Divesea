
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

export default modal;
export {closeModal, openModal};