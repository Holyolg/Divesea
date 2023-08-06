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

export default burger;