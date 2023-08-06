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

export default userRender;